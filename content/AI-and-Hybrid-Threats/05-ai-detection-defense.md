---
title: "AI for Detection and Defense"
description: "How AI tools help detect disinformation, their capabilities and limitations, and the importance of human-AI collaboration."
author: "SAUFEX Consortium"
date: "2026-01-23"
learningPath: "AI and Hybrid Threats"
moduleNumber: 5
estimatedTime: "7 minutes"
audiences: ["researchers", "platform-teams"]
---

## Purpose

You'll learn when AI detection tools are useful, when they fail, and how to combine automated analysis with human judgment without overclaiming capability.

---

## Scenario

Your organization is evaluating an AI content moderation tool that claims "95% accuracy" at detecting coordinated inauthentic behavior. You need to decide whether to deploy it. You have:

- **Time available**: 1 week for pilot testing
- **Stakes**: If deployed poorly, could silence legitimate users; if not deployed, may miss harmful campaigns
- **Data access**: Tool API, sample dataset of 1,000 posts (300 verified as coordinated campaigns, 700 organic)
- **Constraint**: Vendor won't disclose training data or model architecture

---

## Task

Produce three outputs:

1. **Assessment**: What does "95% accuracy" actually mean in practice?
2. **Confidence level**: Low / Medium / High that this tool reduces harm without unacceptable false positives
3. **Next action**: Deploy, reject, or deploy with specific safeguards?

---

## Method: AI Tool Evaluation Workflow

### Start here: Question the metric

Before testing:
- What does "accuracy" measure? (Precision? Recall? F1 score?)
- Accuracy on what dataset? (Lab data vs real-world distribution?)
- What's the base rate? (If 1% of content is coordinated, even 95% accuracy means massive false positives)

**Strong signal of tool limitation**: Vendor can't explain metric or used non-representative test data
**Weak signal**: "High accuracy" without context (this number means nothing alone)

### Step 2: Test on your actual use case

Run the tool on your 1,000-post dataset:
- How many of the 300 known-bad posts did it catch? (True positive rate)
- How many of the 700 organic posts did it flag? (False positive rate)
- Calculate: At your expected volume, how many false flags per day?

**Critical calculation**: If you process 100,000 posts/day and 2% are coordinated:
- Tool with 95% precision flags 2,000 posts
- 1,900 are actually coordinated (true positives)
- 100 are organic (false positives)
- Seems good?

But:
- Tool with 95% recall misses 100 coordinated posts (false negatives)
- These 100 might be the most sophisticated ones

Context determines whether these rates are acceptable.

### Step 3: Probe for failure modes

Test edge cases:
- Does it flag activist organizing as coordinated inauthentic behavior?
- Does it miss sophisticated campaigns that vary their patterns?
- Does it perform differently across languages, cultures, topics?
- Does it flag satire, parody, or legitimate criticism?

**Strong signal to reject**: Tool fails catastrophically on edge cases your org will encounter
**Medium signal**: Tool performs well on average but has blind spots (might still be useful with human review)

### Step 4: Design human-AI workflow

Determine:
- Who reviews flagged content?
- What context do reviewers see?
- Can reviewers override the AI?
- How do you track false positives/negatives to improve?

**Critical principle**: AI suggests, humans decide. Not the reverse.

---

## Evidence Ladder for Tool Reliability

**Strong confidence in tool**:
- Vendor provides transparent methodology and training data
- Performance validated on your specific use case and content distribution
- False positive rate acceptable given your harm threshold
- Clear human review workflow exists
- Continuous monitoring and adjustment plan in place

**Medium confidence**:
- Tool performs well on average but has known failure modes
- Vendor methodology partly transparent
- Human review layer catches most false positives
- Deployment is scoped to specific use case where tool excels

**Low confidence (do not deploy)**:
- Vendor can't explain methodology or metrics
- High false positive rate on your test data
- No human review workflow
- Would be used for automated enforcement
- Tool performance not validated on your content distribution

---

## Stop Rule

Stop pursuing AI tool deployment when:
- **False positive rate unacceptable**: Would silence too many legitimate users
- **False negative rate unacceptable**: Would miss too many harmful campaigns
- **Explainability insufficient**: Can't tell users why they were flagged
- **Cost exceeds benefit**: Human review of flagged content costs more than current approach
- **Human capacity insufficient**: Not enough trained reviewers to process flags

AI tools are not magic. Sometimes manual approaches are better.

---

## DIM Mapping

How does AI detection fit into intervention choice?

**AI role: Prioritization, not decision**

Use AI to:
- Surface high-risk content for human review (triage)
- Identify patterns across large datasets humans can't process
- Track campaign evolution over time
- Measure intervention effectiveness

**Don't use AI to**:
- Make final enforcement decisions without human review
- Automate removal of content in ambiguous cases
- Replace human judgment on harm/context

**DIM generation mapping**:
- **Gen 4** (Moderation): AI flags → human reviews → enforcement decision
- **Gen 5** (Interaction): AI identifies coordination patterns → designers adjust amplification algorithms
- **Gen 3** (Prebunking): AI detects emerging narratives → educators prepare inoculation content

**Key insight**: Detection is input to intervention choice. Don't automate from detection to removal.

---

## Key Takeaway

AI detection tools are useful for scale and pattern recognition. They fail at context, cultural nuance, and harm judgment. "95% accuracy" is meaningless without understanding the base rate, error distribution, and use case. Design human-AI workflows where AI prioritizes and humans decide. Never fully automate enforcement based on AI detection alone.

---

## Test Your Understanding

**Scenario**: An AI tool flags 200 posts per day as "likely coordinated." Human review finds 150 are false positives (activists, legitimate campaigns). The 50 true positives are mostly low-harm memes. Meanwhile, a sophisticated influence operation with 30 posts/week goes unflagged.

**Question**: Is this tool useful? How would you modify the workflow?

### Your answer should include:

1. **Assessment**: Is current setup reducing harm or creating it?
2. **Two specific changes** to improve precision or recall
3. **Trade-off you'd make**: Optimize for fewer false positives or fewer false negatives? Why?
4. **DIM intervention recommendation** that doesn't rely solely on AI accuracy

---

**Penalty for**: Trusting vendor accuracy claims without validation, automating enforcement
**Reward for**: Questioning metrics, testing on real use cases, designing human oversight, acknowledging trade-offs