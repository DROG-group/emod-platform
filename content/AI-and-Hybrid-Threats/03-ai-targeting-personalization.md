---
title: "AI-Powered Targeting and Personalization"
description: "How AI enables unprecedented micro-targeting through psychographic profiling and algorithmic amplification."
author: "SAUFEX Consortium"
date: "2026-01-23"
learningPath: "AI and Hybrid Threats"
moduleNumber: 3
estimatedTime: "8 minutes"
audiences: ["policymakers", "researchers", "platform-teams"]
---

## Purpose

You'll learn to detect micro-targeted campaigns without mistaking legitimate personalization for coordinated information operations.

---

## Scenario

Your election monitoring team notices different voter demographics receiving contradictory messages about the same policy—each version emphasizing different values. You have:

- **Time available**: 2 days until election day
- **Stakes**: Determine if this is coordinated manipulation or standard political advertising
- **Data access**: Ad library data, sample posts from different demographic groups, basic analytics
- **Constraint**: Cannot access platform targeting parameters directly

---

## Task

Produce three outputs:

1. **Assessment**: Is this coordinated targeting or legitimate political communication?
2. **Confidence level**: Low / Medium / High
3. **Next action**: What intervention (if any) is warranted?

---

## Method: Targeting Detection Workflow

### Start here: Map message variants

Collect samples:
- What messages appear to which demographics?
- Do messages contradict each other or just emphasize different aspects?
- Are sources transparent about who's sending them?

**Strong signal**: Same source sending mutually exclusive claims to different groups
**Medium signal**: Same source emphasizing different values (this is standard political strategy)
**Weak signal**: "They're telling different people different things" (all communication is contextualized)

### Step 2: Check targeting sophistication

Examine:
- Is targeting based on broad demographics (age, location) or narrow psychographics?
- Do ad libraries show normal political spending patterns or anomalous micro-buys?
- Are messages using emotional manipulation techniques or standard persuasion?

**Strong signal combo**: Micro-targeted contradictory claims + concealed source + emotional manipulation
**Medium signal**: Sophisticated targeting with transparent source
**Weak signal**: Targeting exists (all digital advertising targets)

### Step 3: Attribution check

Determine:
- Who is paying for this content?
- Is source disclosure accurate and complete?
- Does the operation pattern match known information campaigns?

**Strong signal**: False attribution or undisclosed foreign funding
**Medium signal**: Domestic actors with unclear transparency
**Weak signal**: Different messages (could be A/B testing or legitimate strategy)

### Step 4: Harm vs. speech boundary

Ask:
- Does this suppress voter turnout or mislead about voting process?
- Does this incite violence or target vulnerable groups?
- Is this deceptive coordination or protected political speech?

This is not a technical determination—it's a legal and ethical judgment.

---

## Evidence Ladder

**Strong signals** (coordinated manipulation likely):
- Same source sending contradictory factual claims (not just emphasis) to different demographics
- Targeting based on psychological vulnerabilities (fear, anxiety) rather than interests
- Concealed foreign funding or false attribution
- Coordination with inauthentic accounts to amplify targeted content

**Medium signals** (worth investigating):
- Highly sophisticated psychographic targeting
- Messages vary beyond standard A/B testing
- Rapid deployment across multiple demographics simultaneously
- Targeting parameters unusually narrow

**Weak signals** (insufficient alone):
- Different people see different content (this is how platforms work)
- Messages appeal to emotions (this is how persuasion works)
- Targeting uses demographic data (this is standard advertising)
- "It feels manipulative" (subjective judgment)

---

## Stop Rule

Stop investigating when:
- **Timebox reached**: Election day approaches, evidence won't improve
- **Legal threshold unclear**: Requires legal expertise to determine if violation occurred
- **Standard political communication**: No deception beyond normal campaign rhetoric
- **Intervention would suppress legitimate speech**: Cost of false positive too high

Distinguishing manipulation from persuasion is hard. When uncertain, default to transparency (require disclosure) not removal.

---

## DIM Mapping

Which intervention fits the context?

**If strong signals (coordinated deceptive targeting)**:
- **Gen 4** (Moderation): Platform enforcement of policies on deceptive behavior
- **Gen 5** (Interaction): Require "Why am I seeing this?" disclosure on targeted political content
- Legal referral if foreign interference detected

**If medium signals (sophisticated but unclear)**:
- **Gen 3** (Prebunking): Educate voters about targeted political messaging
- **Gen 5** (Interaction): Increase transparency requirements for political ads
- Monitor but don't remove

**If weak signals (likely standard political communication)**:
- Document for pattern tracking
- No intervention—this is protected political speech

**Critical distinction**: Coordinated deception requires intervention. Sophisticated persuasion (even when we dislike it) may be protected speech.

---

## Key Takeaway

Targeting sophistication is not the same as coordinated manipulation. The key questions are: Is the source honest? Are factual claims contradictory or contextual? Is harm clear? Don't confuse "this is effective political communication I disagree with" for "this is an information operation."

---

## Test Your Understanding

**Scenario**: A political campaign sends young voters messages emphasizing climate policy and older voters messages emphasizing pension security. Same candidate, different emphasis. Targeting uses platform demographic data. All ads properly labeled.

**Question**: Is this manipulation? What would change your assessment?

### Your answer should include:

1. **Hypothesis + confidence**: Manipulation or standard campaigning?
2. **Two factors that would elevate this to a strong signal** of deceptive coordination
3. **One false positive you'd guard against** (legitimate speech misidentified as manipulation)
4. **Recommended intervention** (if any) and rationale

---

**Penalty for**: Claiming all targeted political messaging is manipulation
**Reward for**: Distinguishing deceptive coordination from legitimate persuasion, clear harm thresholds, respecting speech protections