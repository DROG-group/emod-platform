# Module: Introduction to AI and Information Manipulation

**By SAUFEX Consortium | Last Updated: 23 January 2026**

---

## Purpose

You'll learn how AI changes information operations, not by making them "easier," but by shifting what's detectable and what scales.

---

## Scenario

You're monitoring social media for a public health agency. Over 48 hours, you've noticed coordinated messaging about vaccine safety across multiple platforms. You have:

- **Time available**: 3 hours for initial assessment
- **Stakes**: Internal briefing to comms team tomorrow
- **Data access**: Platform UI + basic analytics tools
- **Constraint**: No confirmed attribution yet

---

## Task

Produce three outputs:

1. **Assessment**: What patterns suggest AI involvement (if any)?
2. **Confidence level**: Low / Medium / High
3. **Next action**: What you'd investigate next, or when to stop

---

## Method: Detection Workflow

### Start here

Check for volume + velocity signals:
- Sudden spike in similar messages (100+ accounts in <24hrs) → **medium signal**
- Messages vary slightly but share structure → **medium signal**
- Perfect grammar across languages → **weak signal** (humans also edit)

If you see volume signals, move to Step 2. If not, document and stop.

### Step 2: Check for generation patterns

Look for AI fingerprints:
- Repetitive phrasing templates ("As an X, I think Y")
- Unnatural formality or generic language
- Coordinated posting intervals (every 15 min, every hour)

**Strong signal combo**: template + timing + cross-platform identical wording
**Weak signal**: "It sounds robotic" (that's a feeling, not evidence)

### Step 3: Assess harm threshold

Ask:
- Is this causing measurable confusion or decision-making impact?
- Is this targeting vulnerable populations?
- Does this require immediate mitigation?

If harm is unclear or low, **stop investigating**. Attribution is not the goal if there's no intervention to inform.

---

## Evidence Ladder

Classify what you find:

**Strong signals** (AI-generated content likely):
- Shared template structures across 100+ accounts
- Posting synchronized to bot-like intervals
- Cross-platform reuse with minimal variation
- Account creation clusters (same time period, same patterns)

**Medium signals** (worth checking):
- Volume spike without clear real-world trigger
- Repeated coordination behaviors
- Language patterns unusual for the claimed demographics

**Weak signals** (don't conclude from these alone):
- "Bad grammar" or "good grammar"
- Content spread quickly
- "Feels artificial"
- Accounts with few followers

---

## Stop Rule

Stop investigating when:
- **Timebox reached**: Your 3 hours are up
- **Harm threshold not met**: No clear impact on decisions or vulnerable groups
- **Evidence remains weak**: You can't confirm coordination or AI generation
- **Mitigation is more urgent than attribution**: You have enough to recommend an intervention without knowing who's behind it

Detection is an input, not the deliverable.

---

## DIM Mapping

Which DIM generation fits this context?

**If strong AI signals + high harm**:
- **Gen 4** (Moderation): Flag to platforms for removal or labeling
- **Gen 5** (Interaction): Change how the content appears or spreads (reduce amplification)

**If medium signals + unclear harm**:
- **Gen 3** (Prebunking): Prepare messaging about what coordinated campaigns look like
- Monitor and reassess

**If weak signals only**:
- Document for pattern tracking
- No intervention yet

The intervention choice matters more than perfect attribution.

---

## Key Takeaway

AI changes scale and speed, not the fundamentals of detection. You still need: harm assessment, evidence strength, and intervention selection. Treat AI as one variable in the context, not the conclusion.

---

## Test Your Understanding

**Scenario**: You spot 500 accounts posting vaccine hesitancy content in 6 hours. Messages vary but share a common structure. Account ages range from 2 weeks to 2 years.

**Question**: What do you do first, and what do you NOT conclude?

### Your answer should include:

1. **Hypothesis + confidence**: "This shows [X pattern], confidence: [low/med/high]"
2. **2-3 strongest signals** you'd investigate next
3. **1 likely false positive** you'll guard against
4. **Recommended DIM response** + rationale

---

**Penalty for**: "This is definitely AI" or "Obviously coordinated"
**Reward for**: Acknowledging uncertainty, prioritizing harm over attribution, defining your stop rule
