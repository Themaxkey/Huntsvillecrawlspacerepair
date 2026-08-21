# Huntsville Crawl Space Repair

Lead-generation site for crawl space and foundation work across Huntsville,
Madison County and the Tennessee Valley, Alabama.

Third site built from this template. `site.config.ts` is the only file that
differs structurally between sites — everything else reads from it.

## Why this one leads on crawl space

Huntsville's crawl space cluster (repair, encapsulation, waterproofing,
moisture control, insulation, mold) totals 250+ searches a month with almost no
measurable difficulty, against 100/mo at KD 12 for foundation repair — which is
also where AFS (a Groundworks subsidiary) and Ox already sit. Job values are
comparable, roughly $5,500 for encapsulation against $5,176 for foundation
repair. Bigger cluster, softer competition, same money.

Leading on a different trade also avoids a third site called
"<City> Foundation Repair", which would be an obvious network footprint.

## Before launch

1. **Resend.** Verify huntsvillecrawlspacerepair.com as a sending domain. This
   requires the paid plan — the free tier covers one domain only. Until it is
   verified, `LEAD_FROM` in wrangler.jsonc will 502 on every send.
2. **Cloudflare.** Add the zone, point the Worker at the domain, and set up
   Email Routing for info@ with a catch-all. Set `RESEND_KEY` as a **secret**,
   then check Deployments — a secret added in the dashboard creates a version
   but does NOT deploy it until you promote it.
3. **Twilio.** Number is +1 256 270 0146. Duplicate the existing Studio flow,
   then change three things: the greeting wording, the `notify_missed` and
   `notify_vm` URLs (this site's own token), and confirm Caller ID is
   `{{trigger.call.To}}` rather than a hardcoded number.
4. **Search Console + Ahrefs** on day one, not day three.

## Checks that must pass

```
node scripts/check-leaks.mjs
```

Reads the real values out of `site.config.ts` and fails the build on any state
code, phone number, trade domain or British spelling belonging to another
market. This exists because the same class of error shipped four times: the
previous market's state code, hardcoded in the footer, survived three reviews
and was eventually spotted by the owner on his phone.
