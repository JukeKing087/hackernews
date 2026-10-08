# Show HN: Sodabase – Find and fix broken Supabase tables

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [santiviquez](https://news.ycombinator.com/user?id=santiviquez) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50003967) |
| **Posted** | Thu, 08 Oct 2026 10:11:43 GMT |

## Link
https://sodabase.io/

## Article Preview
Sodabase — Find and fix broken Supabase tables Docs Pricing Connect Project We&#x27;re launching today! Your agent broke Supabase . You probably didn&#x27;t notice. Sodabase detects broken Supabase tables, finds the cause, and fixes the issue automatically. Connect Project acme-prod / public.profiles rows written per hour reading rows from Supabase… learned baseline 60–110 / h 0 50 100 # of rows −48h −36h −24h −12h now hour caught 15:06 0 rows since 14:10 Acme Search Acme # data-alerts Sodabase APP 15:07 Your signup flow broke after the last Supabase migration. No new users have signed up since 14:10. Cause Migration add_username made profiles.username required. The handle_new_user trigger doesn’t set it, so every signup since has failed. Fix Update handle_new_user to fill in username from the email. Want me to go ahead? Approve Steer trigger updated · signups resumed What it catches Things can break without anything actually crashing. no new rows 3h Stale A cron job or sync stops writ

---
_Auto-generated · Thu, 08 Oct 2026 10:19:15 GMT_
