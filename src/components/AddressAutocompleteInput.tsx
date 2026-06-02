"use client";

import { useEffect, useRef, type InputHTMLAttributes } from "react";

/**
 * A normal text input that upgrades to Google Places Autocomplete when a
 * Maps API key is configured (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY). With no key
 * — or if Maps fails to load — it stays a plain input, so the form never
 * breaks. The selected address is written back into the input's value, and
 * the input keeps its `name`, so the existing FormData submission is unchanged.
 */

// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is inlined at build (provided via
// .env.production by amplify.yml). Empty/undefined → fields stay plain text.
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Minimal shapes for the bits of the Maps JS API we touch (avoids pulling in
// @types/google.maps just for this).
interface PlacesAutocomplete {
  addListener(event: string, handler: () => void): void;
  getPlace(): { formatted_address?: string };
}
interface GoogleMapsNS {
  maps: {
    importLibrary?: (name: string) => Promise<unknown>;
    places?: {
      Autocomplete: new (
        input: HTMLInputElement,
        opts?: { fields?: string[]; types?: string[] },
      ) => PlacesAutocomplete;
    };
  };
}
declare global {
  interface Window {
    google?: GoogleMapsNS;
  }
}

let loadPromise: Promise<void> | null = null;
function loadGoogleMaps(): Promise<void> {
  if (typeof window === "undefined" || !MAPS_KEY) {
    return Promise.reject(new Error("Maps unavailable"));
  }
  if (window.google?.maps) return Promise.resolve();
  if (loadPromise) return loadPromise;
  loadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "google-maps-places";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places&loading=async&v=weekly`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps failed to load"));
    document.head.appendChild(script);
  });
  return loadPromise;
}

export default function AddressAutocompleteInput(
  props: InputHTMLAttributes<HTMLInputElement>,
) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!MAPS_KEY) return;
    let cancelled = false;

    loadGoogleMaps()
      .then(async () => {
        const g = window.google;
        if (cancelled || !ref.current || !g) return;
        // Ensure the places library is ready (needed with loading=async).
        if (g.maps.importLibrary) await g.maps.importLibrary("places");
        if (cancelled || !ref.current || !g.maps.places) return;

        const autocomplete = new g.maps.places.Autocomplete(ref.current, {
          fields: ["formatted_address"],
          types: ["address"],
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place?.formatted_address && ref.current) {
            ref.current.value = place.formatted_address;
          }
        });
      })
      .catch(() => {
        /* No key or load failure — leave it as a plain input. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // autoComplete="off" stops the browser's native dropdown from fighting the
  // Google suggestions; callers can still pass everything else through.
  return <input ref={ref} autoComplete="off" {...props} />;
}
