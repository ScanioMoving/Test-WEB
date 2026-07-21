# Authentication — Scanio Moving & Storage

**No authentication is required to use this site's agent-facing resources.**

Scanio Moving & Storage exposes one public, read-only API — the contact
endpoint — plus an MCP server that wraps it. None of these require an account,
API key, OAuth token, or agent registration. Call them directly.

## Resources

| Resource | URL | Auth |
| --- | --- | --- |
| Contact API (JSON) | `https://www.scaniomoving.com/api/contact-info` | none |
| MCP server | `https://www.scaniomoving.com/api/mcp` | none |
| API catalog | `https://www.scaniomoving.com/.well-known/api-catalog` | none |
| OpenAPI spec | `https://www.scaniomoving.com/.well-known/openapi.json` | none |
| Protected-resource metadata | `https://www.scaniomoving.com/.well-known/oauth-protected-resource` | none |

## Why there is no OAuth / OpenID authorization server

This is a marketing site for a moving company, not a platform with user
accounts or protected data. The only thing an agent can do here is *read*
public contact details — exactly what appears in the page footer. Because
there is nothing to protect, there is intentionally no `openid-configuration`
or `oauth-authorization-server` document: publishing one would advertise a
login server that does not exist.

## Contact a human

Phone: 212.722.6850 · Email: info@scaniomoving.com
