---
title: "Data Literacy Basics"
description: "Reading data visualizations, understanding surveys, and spotting statistical manipulation in media."
author: "SAUFEX Consortium"
date: "2026-01-23"
learningPath: "Media Literacy Fundamentals"
moduleNumber: 5
estimatedTime: "30 minutes"
audiences: ["citizens", "journalists", "researchers", "educators"]
---

## Purpose

You'll learn to evaluate statistical claims—not to become a statistician, but to spot common ways data gets misused.

**Output format**: Assessment → Confidence (low/med/high) → Next action

---

## Scenario

An article cites statistics supporting a dramatic claim. Before accepting or sharing, you need to assess whether the data supports the conclusion. You have:

- **Time available**: 10 minutes for basic evaluation
- **Stakes**: Sharing misleading statistics damages credibility
- **Data access**: The article, possibly the underlying study
- **Constraint**: You don't need to reanalyse—check for obvious problems

---

## Task

Produce three outputs:

1. **Assessment**: Does the data actually support the claim?
2. **Confidence level**: Low / Medium / High
3. **Next action**: Accept, reject, or seek clarification?

---

## Method: Data Claim Evaluation

### Start here: Check if data matches claim

The most common problem is mismatch:
- Does the conclusion follow from the data presented?
- Are different things being compared (apples to oranges)?
- Is causation being claimed from correlation?

### Step 2: Check the denominator

Ask "out of what?":
- Percentages need context (50% increase from what?)
- Absolute vs relative numbers (big percentage of tiny number)
- Cherry-picked timeframes

### Step 3: Consider what's missing

Data manipulation often involves omission:
- Is context being hidden?
- Are comparison groups appropriate?
- What would change the interpretation?

---

## Common Data Manipulation Techniques

**Cherry-picking**:
- Selecting timeframes that support conclusion
- Showing only favourable comparisons
- Ignoring contradictory data points
- Choosing start/end dates strategically

**Misleading denominators**:
- "Doubled" from 1 to 2 (sounds dramatic, isn't)
- Percentages without base numbers
- Mixing absolute and relative in same argument
- Per capita vs raw numbers depending on what looks better

**Correlation as causation**:
- Two things correlate ≠ one causes other
- Confounding variables ignored
- Reverse causation possible
- Third variable might cause both

**Visual manipulation**:
- Y-axis not starting at zero (exaggerates changes)
- Inconsistent scales on dual-axis charts
- 3D effects distorting perception
- Truncated axes hiding context

**Survivorship bias**:
- Only looking at successful cases
- Failed examples not visible in data
- Leads to wrong conclusions about success factors

---

## Case Study 1: The Misleading Crime Statistics

### Background

Crime statistics are frequently misrepresented in public discourse. This case study examines a common pattern: technically true but misleading claims.

### The Scenario

A politician claims: "Violent crime has increased 100% since [opponent] took office."

**The data**:
- Year 1 (before): 50 violent crimes
- Year 2: 100 violent crimes
- City population: 200,000

### Analysis: What's True, What's Misleading

**Technically true**:
- 100 is twice 50; that's 100% increase
- The numbers are accurate

**What's missing**:

1. **Absolute numbers context**: 100 crimes in a city of 200,000 is 0.05% of population
2. **Per capita rate**: Crime rate went from 25 per 100,000 to 50 per 100,000
3. **Comparison to elsewhere**: Is this unusual? National trends? Similar cities?
4. **Definition changes**: Did reporting or categorization change?
5. **Single-year variation**: One year can be an outlier; multi-year trends more meaningful
6. **Prior trajectory**: Was crime already rising before opponent took office?

**More complete picture might show**:
- Crime was already trending up before new administration
- Neighboring cities saw similar increases
- A change in reporting led to more crimes being recorded (not more crime occurring)
- 100 crimes is still well below historical averages

### Key Lessons

1. **Percentages need base numbers**: 100% of small is still small
2. **Single comparisons are suspect**: Ask "compared to what else?"
3. **Timeframes matter**: Who chose start/end dates and why?
4. **Causation isn't proven**: Correlation with administration tenure ≠ administration caused it
5. **Check for confounders**: What else changed during this period?

---

## Case Study 2: The COVID Vaccine Efficacy Debate

### Background

During COVID-19, statistics about vaccine efficacy were frequently misrepresented—both by anti-vaccine sources and by those oversimplifying in favor of vaccines. This case examines how the same data can be presented misleadingly in different directions.

### The Data Interpretation Challenges

**Claim A**: "60% of hospitalized patients are vaccinated—vaccines don't work!"

**What's missing**:
- Base rate matters: If 90% of population is vaccinated, you'd expect most hospitalized to be vaccinated
- The correct comparison: Hospitalization rate among vaccinated vs unvaccinated
- Absolute risk reduction vs relative risk reduction

**How to calculate correctly**:

| Group | Population | Hospitalized | Rate |
|-------|------------|--------------|------|
| Vaccinated (90%) | 900,000 | 600 | 0.067% |
| Unvaccinated (10%) | 100,000 | 400 | 0.4% |

600 vaccinated hospitalized vs 400 unvaccinated looks like vaccines "don't work."
But 0.067% vs 0.4% shows 6x higher risk for unvaccinated.

**Key concept**: Simpson's Paradox and base rate neglect

**Claim B**: "Vaccine is 95% effective!"

**What's sometimes missing**:
- This is relative risk reduction, not absolute risk reduction
- 95% reduction of small risk is small absolute change
- Effectiveness varies by outcome (death vs hospitalization vs infection)
- Wanes over time; snapshot data

**Neither claim is fully honest** without context about:
- What outcome is being measured
- What the baseline risk was
- What population is being compared

### Key Lessons

1. **Base rates determine interpretation**: Raw numbers are misleading without population context
2. **Relative vs absolute**: Both are "correct" but give different impressions
3. **Outcome specification matters**: "Effective against" what exactly?
4. **Both sides can cherry-pick**: Pro- and anti- claims can both mislead

---

## Case Study 3: Economic Statistics in Political Debate

### Background

Economic data—unemployment, GDP growth, inflation—are routinely cited in political contexts. The same underlying data can support different narratives depending on presentation choices.

### Example: Unemployment Claims

**Government claims**: "Unemployment is at historic low of 3.5%"

**Critic claims**: "Real unemployment is over 10% when you count discouraged workers"

**Both are using real data**:

| Measure | Definition | Current Value |
|---------|------------|---------------|
| U-3 (headline) | Actively seeking work | 3.5% |
| U-6 (broader) | Includes part-time for economic reasons, marginally attached | 7% |
| Including discouraged workers | Those who stopped looking | ~10% |

**Neither is "lying"**—they're using different valid measures. The question is: Which is more relevant to the argument being made?

### Example: Inflation Presentation

**Claim**: "Inflation is down to 3%"
**Counter**: "Prices are still 15% higher than three years ago"

**Both are true**:
- Inflation rate (year-over-year change) is 3%
- Cumulative increase over three years is 15%

**What's the difference**:
- Rate measures current trajectory
- Cumulative measures total change from baseline
- Neither is wrong; they answer different questions

### Key Lessons

1. **Multiple valid measures exist**: Choosing one isn't necessarily dishonest, but is a choice
2. **Rate vs level**: Different concepts, different impressions
3. **Baseline selection matters**: "Since [date]" can be chosen strategically
4. **Definitions vary**: "Unemployment" has multiple technical definitions

---

## Tool Tutorial: Checking Statistical Claims

### The CRAAP Test for Data

**Currency**: Is this recent data? Has anything changed since collection?

**Relevance**: Does this data actually measure what's being claimed?

**Authority**: Who collected this data? What's their methodology?

**Accuracy**: Can you verify the numbers? Are they consistent with other sources?

**Purpose**: Why was this analysis done? What might bias the presentation?

### Step-by-Step Verification

**Step 1: Identify the claim**

Write down exactly what's being claimed:
- "X caused Y"
- "X is Y% of Z"
- "X increased by Y%"

**Step 2: Check claim-data match**

Does the data shown actually support the specific claim?
- Correlation claimed but causation implied?
- Percentage without base number?
- Comparison that's not apples-to-apples?

**Step 3: Check for missing context**

Ask:
- What's the denominator?
- What's the comparison group?
- What time period? Why that period?
- What's the trend, not just snapshot?

**Step 4: Look for the original source**

- Is the study/data actually cited?
- Can you find the primary source?
- Does it say what's claimed?

### Quick Checks for Charts

**Y-axis check**:
- Does it start at zero? (If not, why?)
- Is the scale consistent?
- Are both axes labeled clearly?

**Data point check**:
- Are all data points shown or just selected ones?
- Is the timeframe suspiciously convenient?
- What would the chart look like with more data?

**Comparison check**:
- Are the things compared actually comparable?
- Are scales consistent across compared items?
- Is anything being compared that shouldn't be?

---

## Practice Exercise 1: The Dramatic Percentage

### Scenario

A headline reads: "Support for Policy X Collapses—Down 50%!"

The article shows: Support went from 8% to 4% of respondents.

**Your task (10 minutes)**:

1. Is the headline accurate?
2. What's misleading about it?
3. How would you describe this more accurately?
4. What additional context would you want?

### Worked Solution

**Is it accurate?**

Technically yes: 4 is 50% less than 8. The math is correct.

**What's misleading?**

1. **Starting from small base**: 8% wasn't high support; 4% is still low support
2. **Implies dramatic shift**: "Collapses" suggests major change in public opinion
3. **Reality**: Policy was unpopular before (92% didn't support), is unpopular now (96% don't support)
4. **Margin of error**: Poll margins are typically ±3-4%; a 4-point change might be within error

**More accurate description**:

"Support for Policy X, already low at 8%, fell to 4% in latest poll—a change that may be within the poll's margin of error."

**Additional context needed**:

- Sample size and margin of error
- Trend over multiple polls (not just two snapshots)
- Methodology (who was asked, how)
- Comparison to similar policies

### Common Mistakes

1. **Accepting "50% drop" as dramatic without checking base**
2. **Ignoring margin of error**
3. **Treating two data points as a trend**
4. **Not asking "compared to what"**

---

## Practice Exercise 2: The Causation Claim

### Scenario

A study finds: "Countries with more ice cream consumption have higher drowning rates."

A news article concludes: "Ice cream consumption linked to drowning deaths—should we regulate ice cream sales?"

**Your task (10 minutes)**:

1. What's the logical flaw here?
2. What's the likely actual explanation?
3. How would you evaluate claims like this?
4. When can correlation suggest causation?

### Worked Solution

**The logical flaw**:

Correlation ≠ causation. Two things occurring together doesn't mean one causes the other.

**Likely actual explanation**:

Confounding variable: **Summer/warm weather**
- Warm weather → more ice cream consumption
- Warm weather → more swimming → more drowning

Both are effects of temperature; neither causes the other.

**How to evaluate such claims**:

Ask:
1. Is there a plausible mechanism? (Does eating ice cream cause drowning? No clear reason.)
2. Could something cause both? (Third variable?)
3. Could causation be reversed? (Does drowning cause ice cream sales? No.)
4. Is this a controlled study or observational? (Observational can't prove causation.)
5. Has this been replicated with controls?

**When correlation suggests causation** (higher confidence):

- Plausible mechanism exists
- Temporal sequence is right (cause before effect)
- Dose-response relationship (more cause → more effect)
- Experimental evidence exists (controlled trials)
- Alternative explanations ruled out
- Multiple independent studies replicate

---

## Practice Exercise 3: The Chart Manipulation

### Scenario

You see two charts showing the same data:

**Chart A**: Y-axis runs 0-100, showing a line that's relatively flat with minor variation

**Chart B**: Y-axis runs 95-100, showing the same line with dramatic peaks and valleys

Both are labeled "Company Performance Over Time."

**Your task (10 minutes)**:

1. Which chart is misleading and why?
2. When might truncated axes be appropriate?
3. What questions should you ask when seeing any chart?
4. How would you present this data honestly?

### Worked Solution

**Which is misleading?**

Chart B is misleading if trying to show overall performance:
- Y-axis 95-100 exaggerates small changes
- Minor fluctuations look like crashes and booms
- 97 to 98 looks like doubling when it's 1% change

**When truncated axes might be appropriate**:

- When small changes are genuinely meaningful (e.g., precision measurements)
- When clearly labeled with a break indicator
- When the audience understands the context
- When 0 is not a meaningful baseline (e.g., body temperature—36-38°C range matters, 0 doesn't)

**Questions for any chart**:

1. What does the Y-axis start at?
2. Are the scales consistent?
3. What time period is shown? Why that period?
4. What's not being shown?
5. Does the visual impression match the actual numbers?

**Honest presentation**:

- Use 0-100 axis if showing overall stability
- Use truncated axis with clear labeling if small changes matter
- Show both views if audience needs complete picture
- Label axes prominently including any truncation

---

## Regional Focus: Data Literacy in EU Context

### EU Statistics Sources

**Eurostat** (ec.europa.eu/eurostat):
- Official EU statistics office
- Standardized methodology across countries
- Generally reliable but check definitions
- Harmonized data allows cross-country comparison

**National statistics offices**:
- Each member state has own office
- Quality and independence varies
- Historical data may use different definitions
- Cross-country comparison requires care

**ECB and central banks**:
- Financial and monetary statistics
- Generally high quality
- Technical definitions may differ from intuition

### Common Pitfalls in EU Statistics

**Comparing across countries**:
- Different definitions (unemployment, crime, etc.)
- Different collection methodologies
- Different reporting cultures
- Harmonized Eurostat data exists but check year-to-year

**Currency and purchasing power**:
- Nominal vs PPP-adjusted matters hugely
- €1 buys different amounts in different countries
- GDP per capita needs PPP adjustment for welfare comparison

**Political usage of EU statistics**:
- Member states may present EU data selectively
- EU critics and supporters both cherry-pick
- Long-term trends often more meaningful than snapshots
- Check original Eurostat source, not just reports about it

### Brexit/EU Data Manipulation Examples

During Brexit debates, statistics were frequently misused by both sides:

**Leave claims**:
- "£350 million a week to EU" (gross, not net; ignoring rebates)
- Migration statistics without context

**Remain claims**:
- Economic projections presented as certainties
- Trade statistics without full context

**Lesson**: High-stakes political debates produce statistical manipulation from all sides. Apply same scrutiny regardless of your position.

---

## Expert Perspective: Statistical Literacy

### Key Research Findings

**On risk communication** (Gigerenzer et al.):
- Absolute risks are better understood than relative risks
- Frequencies (1 in 100) clearer than percentages (1%)
- Visual representations help but can also mislead
- Most people struggle with conditional probability

**On denominator neglect**:
- People systematically ignore base rates
- "100% increase" sounds dramatic regardless of base
- Numerators grab attention; denominators are ignored

**On graph literacy** (Okan et al.):
- Many people cannot accurately read basic graphs
- Y-axis manipulation is frequently not noticed
- 3D effects consistently distort perception
- Labels matter more than people realize

### Practitioner Insights

**From statisticians**:
- "The question isn't 'is this statistic accurate' but 'is it the right statistic'"
- "Context is not optional—it's essential"
- "Any dataset can be tortured to confess anything"

**From fact-checkers**:
- "Statistics are the most common thing we check"
- "Usually the numbers are right but the interpretation is wrong"
- "Ask: compared to what?"

**From journalists**:
- "If a statistic seems too perfect for the story, check harder"
- "Find the original study, not the press release"
- "Headlines often don't match what the data shows"

### Open Questions

**How do we improve public statistical literacy?**
- Education interventions show limited lasting effect
- Forcing context display might help
- Question-asking habits may be more important than calculation skills

**Should platforms add context to statistical claims?**
- Technical feasibility is challenging
- Who decides what context is needed?
- Risk of perceived censorship

---

## Historical Context: Data and Public Discourse

### Pre-Statistical Era

Before widespread statistical literacy:
- Claims were largely qualitative or anecdotal
- "Everyone knows" substituted for data
- Expert authority was less contested
- Manipulation happened through narrative, not numbers

### Rise of Statistical Thinking

**19th-20th century**:
- Statistics became governance tool (census, vital statistics)
- "Hard numbers" gained authority over intuition
- Statistical evidence became persuasion tool
- Manipulation became statistical (same numbers, different framing)

### Current Environment

**Data abundance**:
- More statistics available than ever
- Less capacity to evaluate them
- Statistical claims proliferate in debate
- Visualization tools democratized chart creation

**Challenges**:
- Faster claims than verification
- Complex statistics in simple headlines
- Literacy hasn't kept pace with availability
- Tribal interpretation (same data, opposite conclusions)

### Future Considerations

**AI and statistical claims**:
- AI can generate plausible-sounding but wrong statistics
- Fact-checking lags behind generation
- Provenance of data becomes harder to verify
- Synthetic data could be cited as if real

**Potential solutions**:
- Embedded context (force denominators with percentages)
- Source linking (trace claims to original data)
- Visualization standards (discourage manipulation)
- Literacy education (question-asking habits)

---

## Quick Reference: Data Claim Checklist

### Basic Checks (5 minutes)

- [ ] Does the data match the claim?
- [ ] What's the denominator/base rate?
- [ ] Is causation claimed from correlation?
- [ ] What comparison is missing?

### Deeper Checks (15 minutes)

All of the above, plus:
- [ ] Can I find the original source?
- [ ] What does the primary data actually say?
- [ ] Are the axes/scales appropriate?
- [ ] What time period is used and why?
- [ ] Who funded/conducted the study?
- [ ] Has it been replicated?

### Chart Assessment

- [ ] Y-axis starts at zero (or justified if not)?
- [ ] Scales are consistent?
- [ ] All relevant data shown (not cherry-picked)?
- [ ] Labels are clear and accurate?
- [ ] Visual impression matches actual numbers?

---

## Evidence Ladder

**Strong signals** (data misrepresentation):
- Claim directly contradicts data shown
- Obvious cherry-picking of timeframe
- Missing denominator on percentage claims
- Causation claimed from correlation without justification
- Manipulated chart axes

**Medium signals** (further scrutiny needed):
- Data supports claim but context unclear
- Comparison groups seem non-equivalent
- Source of data is unclear or potentially biased
- Single study without replication

**Weak signals** (insufficient for rejection):
- You don't like the conclusion
- Statistics are surprising (surprising can be true)
- You can't personally verify the analysis
- Source has known perspective (everyone does)

---

## Stop Rule

Stop data evaluation when:
- **Obvious problem found**: Mismatch, cherry-pick, or missing context identified
- **Data checks out**: Basic scrutiny passes, stakes don't require more
- **Need expert analysis**: Complex statistical claims require expertise
- **Primary source available**: Check the study, not the reporting

---

## DIM Mapping

Data literacy supports information quality:

**Gen 2** (Debunking): Correcting statistical misrepresentations with proper context
**Gen 3** (Prebunking): Teaching data literacy as inoculation against manipulation
**Gen 4** (Moderation): Identifying systematic statistical misuse
**Gen 5** (Interaction): Design that surfaces data context automatically

---

## Key Takeaway

You don't need to be a statistician to catch most data manipulation. Check: Does the data match the claim? What's the denominator? What's the comparison? What's missing? Is causation claimed from correlation? These questions catch the majority of misleading statistics. The numbers might be correct while the interpretation is wrong—focus on the interpretation, not just the arithmetic.

---

## Test Your Understanding

**Scenario**: A headline claims "Crime doubled last year." The article shows crime went from 10 incidents to 20 in a city of 500,000. Population grew 15%. National crime decreased.

**Question**: What's your assessment of this claim?

### Your answer should include:

1. **Denominator analysis**: What context changes interpretation?
2. **Cherry-picking check**: What comparisons are missing?
3. **What's technically true** vs what's implied
4. **How you'd describe** this more accurately

### Extended test: The relative vs absolute

A study shows a drug reduces heart attack risk by 50%. In the control group, 2 in 1,000 had heart attacks. In the treatment group, 1 in 1,000 had heart attacks.

**Questions**:
1. Is "50% reduction" accurate?
2. What's the absolute risk reduction?
3. How many people need to take the drug for one to benefit?
4. How would you present this honestly?

---

**Penalty for**: Accepting statistics that confirm priors, ignoring denominators, treating correlation as causation, not asking "compared to what"
**Reward for**: Context-seeking, appropriate comparison, distinguishing technically true from misleading, finding primary sources