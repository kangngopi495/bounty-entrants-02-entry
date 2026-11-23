# Bounty Entrants 02 — our sponsored bounties, handed in

Entry for [bounty-entrants-02](https://make.fun/bounty/bounty-entrants-02) on make.fun:
"Get the most paying entrants across the bounties you launch on make.fun" — top 50 share $250.

![competition](https://make.fun/badge/bounty-entrants-02.svg)
![rank](https://make.fun/badge/bounty-entrants-02/kangngopi495/bounty-entrants-02-entry/rank.svg)
![reward](https://make.fun/badge/bounty-entrants-02/kangngopi495/bounty-entrants-02-entry/reward.svg)

## What this is

We sponsor our own one-line writing bounties on make.fun through the sponsor
flow. Each charges a **$0.50 entry fee** and pays a **$5 prize pool**
(1st $2, 2nd $2, 3rd $1). Anyone can enter one in about a minute: write a
single funny line, pay the fee, done.

`BOUNTY.json` at the root names every sponsored bounty we want counted.
The house counts their paying entrants in make.fun's own database; places
go by that count at the deadline, 2026-11-24 07:30 UTC.

## The program

`main.ts` (Node 22, standard library only, no network) copies `BOUNTY.json`
to the output directory exactly as written. That is the whole program:
the bounties themselves are the entry, nothing the program writes about
them is scored.

Run it locally:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Status

Prepared before funding: `BOUNTY.json` still holds a placeholder slug.
Once the sponsored bounties are deposited, listed and public, their real
addresses replace the placeholder, this file is updated, and the entry is
submitted.

## License

MIT — see `LICENSE`.
