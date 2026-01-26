const fs = require('fs');
const modules = require('../lib/modules-data.json');

const newContent = `## Purpose

Learn enough statistics to spot common manipulation — not to become a statistician, but to avoid being fooled by numbers. Most statistical deception relies on a few predictable tricks. Learn the tricks.

**Output format**: Assessment → Confidence (low/med/high) → Next action

---

## Scenario

A viral claim cites impressive statistics: "Study shows 80% increase in [concerning outcome]!" Before accepting or sharing, you need to evaluate whether the numbers actually support the conclusion. You have:

- **Time available**: 10 minutes for basic assessment
- **Stakes**: Sharing misleading statistics damages credibility and spreads confusion
- **Data access**: The claim, some context, maybe access to the source
- **Constraint**: You don't need to reanalyse the data — just spot red flags

---

## Task

Produce three outputs:

1. **Assessment**: Do these statistics support the claimed conclusion?
2. **Confidence level**: Low / Medium / High
3. **Next action**: Accept, investigate further, or reject?

---

## The Core Question

When someone presents statistics, ask:

**Is this number actually measuring what the claim says it's measuring?**

Most statistical manipulation happens in the gap between what's measured and what's claimed.

- A study measures one thing; the headline claims another
- The number is accurate; the interpretation is wrong
- The comparison looks dramatic; the context makes it mundane

This gap is where manipulation lives.

---

## Step 1: Check What's Being Measured

Start here — most problems are visible at this step:

**Ask these questions**:
- What exactly was counted or measured?
- Is the definition clear and consistent?
- Does the measurement actually match the claim?

**Common problems**:

*Definition drift*: "Deaths involving COVID" counts differently than "deaths from COVID" counts differently than "excess deaths during COVID."

*Proxy measures*: "Crime rates" often mean "reported crime" or "arrests" — not actual crime. These can move independently.

*Changing definitions*: If what counts as "X" changed during the measurement period, trends may reflect definition changes, not real-world changes.

If you can't identify exactly what was measured, you can't evaluate the claim.

---

## Step 2: Check the Comparison

Statistics without comparison are nearly meaningless. "10,000 people" tells you nothing without knowing if that's a lot or a little in context.

**Ask these questions**:
- Compared to what?
- Same time period?
- Same population?
- Absolute or relative numbers?

**Common comparison tricks**:

*Missing baseline*: "50% increase!" From what? A 50% increase from 2 to 3 is very different from 2 million to 3 million.

*Mismatched populations*: Comparing vaccine side effects in people who chose vaccination (often health-conscious) with outcomes in the general population.

*Different time windows*: Crime "this month" versus "same month last year" versus "monthly average over 5 years" — each tells a different story.

*Absolute vs relative swap*: Presenting relative numbers when absolute numbers are more informative, or vice versa. "Risk doubles!" (from 0.001% to 0.002%) sounds scarier than "risk increases by 0.001%."

---

## Step 3: Check for Cherry-Picking

Selective presentation is the most common form of statistical manipulation:

**Ask these questions**:
- Why this time period and not another?
- Why this comparison group?
- What's been left out?
- Does the pattern hold with different reasonable choices?

**Classic cherry-picking patterns**:

*Start date selection*: Starting a trend line at a peak or trough changes the apparent trajectory. 2020 comparisons are particularly prone to this.

*Endpoint selection*: Stopping the graph before recent data that contradicts the narrative.

*Comparison group selection*: Choosing the comparison that makes your point. "Higher than [low comparison]" or "Lower than [high comparison]."

*Outcome selection*: Measuring many outcomes, reporting only the dramatic ones. With enough comparisons, random chance produces "significant" findings.

**The test**: Would other reasonable choices in time period, comparison, or metric give a similar result? If not, be suspicious.

---

## Key Statistical Concepts

You don't need deep statistics knowledge. These concepts catch most manipulation:

### Mean vs Median

**Mean (average)**: Sum divided by count. Sensitive to extreme values.
**Median**: Middle value when sorted. Resistant to extremes.

*Why it matters*: Income distributions are famously skewed. Mean income is pulled up by billionaires; median income better represents typical experience. Someone citing "average" income may be choosing the more impressive number.

*Rule*: For skewed data (income, house prices, website traffic), median usually tells a truer story. If someone switches between mean and median, ask why.

---

### Correlation vs Causation

**Correlation**: Two things vary together.
**Causation**: One thing makes another happen.

*The problem*: Correlation is easy to find; causation is hard to prove. Most real-world correlations are not causal.

*Possible explanations for correlation*:
- A causes B (the claim)
- B causes A (reverse causation)
- C causes both A and B (confounding)
- Coincidence (especially in small samples or with enough comparisons)

*The classic*: Ice cream sales correlate with drowning deaths. Ice cream doesn't cause drowning; summer causes both.

*Rule*: "X is associated with Y" is not the same as "X causes Y." Watch for causal language applied to correlational findings.

---

### Sample vs Population

**Sample**: The subset actually measured.
**Population**: The group you want to draw conclusions about.

*The challenge*: We usually can't measure everyone, so we measure a sample and infer about the population.

*Key questions*:
- How big is the sample? (Bigger is generally better)
- Is the sample representative? (Who's in it, who's not?)
- What's the margin of error?

*Common problems*:

*Self-selection*: People who choose to respond to surveys may differ systematically from those who don't.

*Survivorship bias*: Studying successful companies to find what makes companies successful misses all the companies that did the same things and failed.

*Convenience sampling*: Measuring who's easy to reach, not who's representative.

*Rule*: Small sample or non-representative sample = low confidence in conclusions about the larger population.

---

### Absolute vs Relative Risk

**Relative risk**: Comparison as a ratio or percentage change.
**Absolute risk**: Actual probability or count.

*Why it matters*: Relative risk sounds dramatic; absolute risk puts it in context.

*Example*:
- Relative: "Drug increases heart attack risk by 50%!"
- Absolute: "Risk goes from 2 in 10,000 to 3 in 10,000"

Both are accurate. The relative framing sounds alarming; the absolute framing sounds negligible. Both are true.

*Rule*: When given relative numbers, ask for absolute numbers. When given absolute numbers, ask for relative. Good-faith communication provides both.

---

### Base Rates

**Base rate**: The underlying frequency of something in the population.

*Why it matters*: Many statistics only make sense when you know the base rate.

*Example*: A test is 99% accurate. It says you have a rare disease (affects 1 in 10,000 people). What's the probability you actually have the disease?

*Answer*: Much lower than 99%. If you test 10,000 people, 1 has the disease (correctly identified), but ~100 false positives also test positive. You're more likely to be a false positive than truly positive.

*Rule*: For rare events, even accurate tests produce mostly false positives. For common events, even inaccurate tests can be useful. Base rates matter.

---

## The Statistical Manipulation Playbook

Most misleading statistics use these techniques:

### 1. Denominator Manipulation

Change what you divide by to change the result:

- Per capita vs absolute (makes small countries look extreme)
- Per 100,000 vs per million (changes the impression of scale)
- Choosing convenient denominators that make your case

*Defence*: Ask: "Per what?" and "Is that the right denominator?"

---

### 2. Timeframe Manipulation

Choose the timeframe that tells your story:

- Short timeframes amplify volatility
- Long timeframes smooth over recent changes
- Starting at peaks or troughs creates artificial trends

*Defence*: Ask: "Why this timeframe?" and "What happens with other reasonable choices?"

---

### 3. The Misleading Average

Averages hide distribution:

- High average can mask that most people get less
- Using mean when median would be more representative
- Mixing populations with different characteristics

*Defence*: Ask: "Mean or median?" and "What does the distribution look like?"

---

### 4. Confidence Without Uncertainty

Presenting point estimates without ranges:

- "The effect is 15%" (not "between 5% and 25%")
- Ignoring margins of error
- Treating uncertain estimates as certain facts

*Defence*: Ask: "What's the confidence interval?" and "How uncertain is this?"

---

### 5. Multiple Comparison Problem

Measure enough things, find "significant" results by chance:

- Testing dozens of outcomes, reporting the dramatic ones
- Subgroup analysis until something looks significant
- Not correcting for multiple comparisons

*Defence*: Ask: "How many comparisons were made?" and "Would this survive replication?"

---

## Evidence Ladder for Statistical Claims

### Strong statistical claim:
- Measurement clearly defined and appropriate
- Comparison group clearly specified and appropriate
- Uncertainty acknowledged (confidence intervals, margins of error)
- Consistent with other data sources
- Time period and comparison choices would give similar results with other reasonable alternatives

### Medium claim (needs scrutiny):
- Some context missing but fillable
- Comparison not ideal but not obviously manipulative
- Cherry-picking possible but not certain
- Single source, not replicated

### Weak claim (high manipulation risk):
- Measurement unclear or shifting
- No appropriate comparison, or comparison is cherry-picked
- Obvious cherry-picking of timeframe or subgroup
- Extraordinary claim with ordinary evidence
- Conflicts with broader evidence base

---

## Stop Rules

Stop statistical analysis when:

**Red flag identified**: Clear manipulation detected — classify as weak, move on.

**Claim checks out**: Basic scrutiny passes — classify as medium or strong, move on.

**Expertise needed**: Complex statistical methods beyond your skills — note uncertainty, seek expert input if stakes warrant.

**Stakes too low**: Small audience, low consequence — not worth deep investigation.

**Timebox reached**: You've spent your allocated time — make best assessment with current information.

You don't need certainty. You need "good enough for the decision at hand."

---

## DIM Mapping

Statistical literacy supports information evaluation across DIM generations:

**Gen 2 (Debunking)**: Correct specific statistical misrepresentations. Show the manipulation technique being used. Provide the missing context.

**Gen 3 (Prebunking/Inoculation)**: Teach statistical manipulation recognition before exposure. "Here's how this trick works" makes people resistant when they encounter it.

**Gen 5 (Community Resilience)**: Build statistical literacy in communities so members can self-correct.

Most statistical manipulation in disinformation uses the same few tricks. Teaching the tricks is efficient inoculation.

---

## Practical Scenario

**Situation**: A headline claims "Disease rate up 200% this year." The article reveals: 3 cases last year, 9 cases this year, in a population of 1 million.

**Task (15 minutes)**:

1. What's technically true about the statistic?
2. What's misleading about the presentation?
3. What context changes interpretation?
4. How would you better frame the same data?
5. Assessment + Confidence + Next action

---

## Sample Response

**Technically true**: The rate did increase by 200% (tripled). 9 is three times 3.

**Misleading elements**:
- Relative increase emphasised over absolute numbers
- Denominator (population of 1 million) not mentioned in headline
- Small absolute numbers make percentages volatile
- No mention of year-to-year volatility, expected variation, or longer trends

**Context that changes interpretation**:
- Absolute risk: from 0.0003% to 0.0009% — still very rare
- Expected variation: with counts this small, doubling or tripling by random chance is plausible
- Longer trend: is this within normal fluctuation range?
- Comparison: how does this compare to other diseases, other regions?

**Better framing**: "Cases rose from 3 to 9 in a population of 1 million. While a notable increase, the disease remains rare with approximately 1 case per 111,000 people."

**Assessment**: Technically accurate statistic presented in a misleading way that exaggerates the significance.

**Confidence**: High (the manipulation technique is clear).

**Next action**: If sharing, provide context. If evaluating source credibility, note the misleading framing.

---

## Additional Practice Scenarios

**Scenario 1**: "Poll shows candidate has 52% support — a clear lead!"
- *Questions to ask*: Margin of error? Sample size? Likely voter screen? When was polling conducted?
- *Key issue*: A lead within the margin of error isn't a "clear" lead.

**Scenario 2**: "Company's revenue doubled in Q4!"
- *Questions to ask*: Compared to what Q4? Is Q4 seasonally high? What happened in other quarters?
- *Key issue*: Timeframe comparison manipulation.

**Scenario 3**: "Study finds people who take supplement X live longer"
- *Questions to ask*: Observational or experimental? Who takes supplements (health-conscious people)? What confounders controlled for?
- *Key issue*: Correlation vs causation; self-selection bias.

---

## Key Takeaways

- Most statistical manipulation uses a few predictable techniques
- First question: Is this measuring what the claim says it's measuring?
- Second question: Compared to what? (Context is everything)
- Third question: Why these choices? (Cherry-picking check)
- Mean vs median matters, especially for skewed data
- Correlation is not causation — watch for causal language on correlational findings
- Relative vs absolute risk tells different stories — demand both
- Small samples and self-selected samples deserve low confidence
- Base rates matter — rare events produce false positives even with accurate tests
- You don't need to be a statistician — knowing the tricks catches most manipulation

---

## Test Your Understanding

**Scenario**: A news article claims "Scientists find coffee drinkers live 15% longer." The study followed 100,000 people over 10 years.

**Task (15 minutes)**:

1. List 3 questions you would ask before accepting this claim
2. What confounders might explain this correlation without causation?
3. How would you evaluate whether this is a strong or weak statistical claim?
4. What additional context would change your interpretation?
5. Assessment + Confidence + Next action

**Scoring**:
- Penalise: Accepting dramatic statistics without context
- Reward: Denominator awareness, confounding identification, cherry-picking detection
- Credit: Understanding difference between correlation and causation`;

const idx = modules.findIndex(m => m.title === 'Understanding Basic Statistics');
if (idx !== -1) {
  modules[idx].content = newContent;
  modules[idx].estimatedTime = '18 minutes';
  fs.writeFileSync('./lib/modules-data.json', JSON.stringify(modules, null, 2));
  console.log('Updated:', modules[idx].title);
  console.log('New content length:', modules[idx].content.length, 'chars');
}
