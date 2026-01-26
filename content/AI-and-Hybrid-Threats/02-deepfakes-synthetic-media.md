---
title: "Deepfakes and Synthetic Media"
description: "Understanding deepfakes, how they're created, detected, and their implications for truth and trust in society."
author: "SAUFEX Consortium"
date: "2026-01-23"
learningPath: "AI and Hybrid Threats"
moduleNumber: 2
estimatedTime: "8 minutes"
audiences: ["journalists", "researchers", "platform-teams", "citizens"]
---

## Purpose

You'll learn to assess synthetic media harm without overclaiming detection certainty, focusing on intervention choice over technical attribution.

---

## Scenario

A video surfaces showing your country's defense minister announcing military mobilization. It's shared 50,000 times in 2 hours. Your team has:

- **Time available**: 45 minutes before media requests comment
- **Stakes**: Public statement may be needed; incorrect call damages credibility
- **Data access**: Video file, basic forensic tools, no confirmed original source
- **Constraint**: Can't reach the minister's office immediately

---

## Task

Produce three outputs:

1. **Assessment**: Is this synthetic? What's the evidence?
2. **Confidence level**: Low / Medium / High
3. **Next action**: Intervene now, gather more evidence, or escalate?

---

## Method: Verification Workflow

### Start here: Source verification (not technical analysis)

Before examining the video itself:
- Check official ministry channels for the announcement
- Contact ministry press office if possible
- Search for earlier versions or alternative angles

**If no official confirmation exists → strong signal something is wrong**
**If official source confirms → stop, it's authentic**

Source verification beats technical analysis for speed and accuracy.

### Step 2: Context plausibility check

Ask:
- Does this action make sense given current events?
- Would this announcement happen via video on social media?
- Are other officials or media reporting this?

**Strong signal of synthetic content**: Extraordinary claim with no corroborating evidence
**Weak signal**: "This seems out of character" (people do unexpected things)

### Step 3: Technical indicators (if time permits)

Examine for:
- Lighting inconsistencies on face vs background
- Unnatural blinking or lack thereof
- Audio-visual sync issues
- Edge artifacts around face or hair
- Unusual head movement patterns

**Strong signal combo**: Multiple technical artifacts + failed source verification
**Medium signal**: One or two technical issues (could be compression, editing)
**Weak signal**: "The voice sounds off" without measurable discrepancy

### Step 4: Harm assessment

Evaluate:
- Could this trigger panic or dangerous actions?
- Is this spreading to media outlets or remaining on social platforms?
- What's the cost of false positive (calling real content fake) vs false negative (missing synthetic content)?

Harm determines urgency, not certainty.

---

## Evidence Ladder

**Strong signals** (synthetic content likely):
- No official source confirmation + extraordinary claim
- Multiple technical artifacts (lighting, blinking, edge inconsistencies)
- Account posting it has history of synthetic content
- Face/voice model exists in known deepfake datasets

**Medium signals** (worth deeper investigation):
- Source unclear or suspicious
- One or two technical anomalies
- Timing coincides with known disinformation campaign
- Similar synthetic content detected recently

**Weak signals** (insufficient alone):
- "Looks fake"
- "Voice sounds wrong"
- Posted by account with few followers
- Video quality is low (also true of authentic mobile footage)

---

## Stop Rule

Stop investigating and make intervention decision when:
- **Timebox reached**: 45 minutes is up, decision required
- **Source verified**: Official channels confirm or deny
- **Harm mitigation is urgent**: Waiting for perfect certainty causes more damage
- **Evidence plateaus**: Additional investigation yields no new signals

You won't reach 100% certainty. Act on the evidence you have within the time you have.

---

## DIM Mapping

Which intervention fits the evidence level?

**If strong signals + high harm**:
- **Gen 4** (Moderation): Request platform removal/labeling, issue official denial
- **Gen 5** (Interaction): Reduce algorithmic amplification, display context warning

**If medium signals + medium harm**:
- **Gen 2** (Debunking): Issue statement noting lack of official confirmation
- **Gen 3** (Prebunking): Prepare public for potential synthetic media without confirming this instance
- Continue verification in parallel

**If weak signals or low harm**:
- Monitor spread
- Prepare response materials
- No public statement yet

**Critical point**: You can intervene on "no official source confirms this" without claiming "this is definitely synthetic." Don't overclaim detection capability.

---

## Key Takeaway

Source verification and harm assessment matter more than technical forensics. A video's authenticity is less important than whether official sources confirm it and what damage it might cause. Choose interventions that match your evidence strength, not your suspicions.

---

## Test Your Understanding

**Scenario**: A video shows a corporate CEO announcing bankruptcy. It has edge artifacts around the face. The company's stock drops 15% in minutes. You have 20 minutes before trading is halted.

**Question**: What do you verify first, and what intervention do you recommend at what confidence threshold?

### Your answer should include:

1. **First three verification steps** (prioritized by speed + reliability)
2. **Minimum evidence threshold** for each intervention type
3. **One overclaim you'll avoid** ("we can definitively prove...")
4. **Recommended DIM response** if evidence remains medium-strength

---

**Penalty for**: Claiming definitive synthetic detection without strong evidence
**Reward for**: Prioritizing source verification, matching intervention to evidence strength, acknowledging trade-offs