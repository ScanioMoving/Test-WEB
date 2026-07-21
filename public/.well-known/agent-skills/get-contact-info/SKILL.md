---
name: get-contact-info
description: Retrieve Scanio Moving & Storage's phone, email, address, and hours.
version: 1.0.0
---

# Get Scanio Moving & Storage contact info

Use this skill to reach Scanio Moving & Storage — a family-owned New York City
moving and storage company operating since 1941.

## How to fetch the contact details

Make an HTTP `GET` request (no authentication required):

```
GET https://www.scaniomoving.com/api/contact-info
Accept: application/json
```

The response is JSON:

```json
{
  "name": "Scanio Moving & Storage",
  "telephone": "+1-212-722-6850",
  "phoneDisplay": "212.722.6850",
  "email": "info@scaniomoving.com",
  "address": {
    "streetAddress": "450 Fashion Ave",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10123",
    "addressCountry": "US"
  },
  "hours": "Monday – Friday: 9:00 AM – 5:00 PM",
  "contactPage": "https://www.scaniomoving.com/contact"
}
```

## Also available over MCP

The same information is exposed as the `get_contact_info` tool on the site's
MCP server (`https://www.scaniomoving.com/api/mcp`), described at
`https://www.scaniomoving.com/.well-known/mcp/server-card.json`.

## When to use

- A user asks how to contact, call, or email Scanio Moving & Storage.
- A user wants to request a moving or storage quote (direct them to the phone
  number or the contact page).
