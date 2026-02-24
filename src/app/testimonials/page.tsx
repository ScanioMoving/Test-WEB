import Link from "next/link";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Customer Reviews & Testimonials | Scanio Moving & Storage NYC",
  description:
    "Read what our customers say about Scanio Moving & Storage. Real reviews from real New Yorkers who trusted us with their moves.",
};

const testimonials = [
  {
    name: "Bruce Bogart",
    text: "The team, led by Boris, accomplished the job with amazing efficiency. They knew the co-op building regulations perfectly, handled everything with zero damage, and all furniture was properly reassembled. I couldn't have asked for a better experience.",
    rating: 5,
  },
  {
    name: "Nina Hennessey & Ellen Saland",
    text: "Everyone knew what they were doing and maintained a sense of good humor throughout the entire process. Thank you to all of your staff for their professionalism, patience and support. We couldn't be happier.",
    rating: 5,
  },
  {
    name: "Louis Stamm",
    text: "We do not have a single horror story concerning our move. That alone says volumes. Your team was a positive part of our transition to our new home. Everything arrived in perfect condition.",
    rating: 5,
  },
  {
    name: "Dana & Michael Engel",
    text: "We were particularly impressed by the eco-friendly recyclable packing materials used. It's great to see a moving company that cares about the environment while providing excellent service.",
    rating: 5,
  },
  {
    name: "Annie Mack",
    text: "Our driver Ofer was prompt, courteous, and incredibly thorough. He completed the entire unloading in under 2 hours — solo! The level of care and efficiency was remarkable.",
    rating: 5,
  },
  {
    name: "Steven N. Gordon",
    text: "From start to finish, the move was a total success. The team's friendly disposition and professional approach made what could have been a stressful experience into a pleasant one.",
    rating: 5,
  },
  {
    name: "David L. Reni",
    text: "Having used Scanio both personally and as a vendor, I give them my highest recommendation. The consistency of their service quality across different types of moves is truly impressive.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-3">
            Testimonials
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what real
            customers have to say about their experience with Scanio Moving
            &amp; Storage.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-10 bg-cream border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={24}
                className={
                  i < 4
                    ? "fill-accent text-accent"
                    : "fill-accent/50 text-accent/50"
                }
              />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl font-bold text-navy">4.5</span>
            <span className="text-text-secondary ml-2">
              out of 5 based on customer reviews
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream rounded-lg p-8 relative flex flex-col"
              >
                <Quote
                  className="text-accent/20 absolute top-6 right-6"
                  size={36}
                />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 text-sm flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-semibold text-navy">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-obligation estimate and experience the Scanio
            difference for yourself.
          </p>
          <Link
            href="/quote"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-md transition-colors inline-block"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
