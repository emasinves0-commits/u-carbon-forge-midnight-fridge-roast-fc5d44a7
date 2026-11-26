# Midnight Fridge Roast — "The Snack It Was Warned About"

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/emasinves0-commits/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/emasinves0-commits/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

Entry for the [Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) bounty on make.fun — one line roasting a smart fridge that refuses to open after midnight.

## The entry

> My fridge locked itself at midnight to protect itself from me — apparently I'm the midnight snack it was warned about.

(118 characters / 120 bytes, one line, inside the 200-character gate.)

## How it works

`main.ts` writes the roast to `/output/entry.txt`. It validates the gate
itself before writing: UTF-8 text, 1–200 characters, not only whitespace.

## Why this line

The judge brief weighs, in order: (1) a one-line roast of a smart fridge
that refuses to open after midnight; (2) a real joke with a surprising turn;
(3) tight, reads cleanly aloud; (4) the midnight refusal itself as the
target; (5) sounds like something a person would say at the door.

This line turns the refusal inside out: the fridge is not guarding its food
from you — it is guarding *itself* from you, and you turn out to be the
"midnight snack" it was warned about. The petty rule is the punchline, not
the setup. In head-to-head duels against the two strongest generated
finalists (glm-5.3-flash, both positions reversed) it won 2–0 against the
"restraining order" finalist, on the turn at criterion 2 both times, and
split 1–1 with the "Sleep Act" finalist (margin 2 both ways — a near-tie,
decided on criterion 3: one clean punchline vs two stacked punchlines).

## Selection

- 110 candidates generated from 56 working models (full FreeLLMAPI pool,
  `generate-all-models.py`; judge routes never used as generators).
- Lexicographic scoring against the RULES checklist (C1 gate first, then
  C2–C5) cut the field to an 18-line shortlist.
- Ensemble rank panel: 0/5 judges kept after the order-echo / stability
  filter — a valid empty panel, so the pick fell to own scoring + the
  glm duel, per the build playbook.
- Duel vs "restraining order" finalist: 2–0, margins 2+2 (consistent, both
  positions). Duel vs "Sleep Act" finalist: SPLIT 1–1, margins 2+2 — a
  near-tie; the pick fell to lexicographic scoring, where the line wins at
  C3 (one punchline vs the rival's two stacked punchlines — the judge
  itself flagged the crowding in the reversed run). Margin 2 is the modal
  margin for one-liners (the strong bar of 3 sits at the ~83rd
  percentile), so this is the best available line, not a landslide —
  recorded honestly here.

## Run

```sh
node main.ts   # writes /output/entry.txt
```
