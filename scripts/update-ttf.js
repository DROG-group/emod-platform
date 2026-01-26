const fs = require('fs');
const modules = require('../lib/modules-data.json');

const newContent = `## Purpose

Turn slogans into trades. If you can't write the ledger, you can't change the ledger.

**Output format**: Assessment → Confidence (low/med/high) → Next action

---

## Scenario

Your team has identified a disinformation campaign. The briefing is full of adjectives: "dangerous," "coordinated," "sophisticated." But when you ask "who pays for this?" there's silence.

- **Time available**: 1 hour to build a transaction table
- **Stakes**: Without the ledger, interventions are guesswork
- **Data access**: Public information, some platform data
- **Constraint**: You need mechanism, not just description

---

## Task

Produce three outputs:

1. **Assessment**: A complete TTF with at least 8 rows
2. **Confidence level**: Low / Medium / High for each row
3. **Next action**: Which row offers the best intervention point?

---

## TTF in One Line

Who gives what to get what, and how.

That's the Transaction Framing Tool. Four columns. Every disinformation ecosystem can be mapped this way.

If you can't fill in all four columns, you're still operating in ideology space, not mechanism space.

---

## The Columns (Fixed)

**Who | Gives | Gets | How**

These columns are non-negotiable.

- **Who**: The actor (specific, not vague)
- **Gives**: What they contribute (must cost something)
- **Gets**: What they receive (must be observable)
- **How**: The mechanism (not just "social media")

If "How" is missing, you've got ideology, not a mechanism. "They spread disinfo because they're evil" isn't analysis. "They spread disinfo via affiliate links that pay per click" is.

---

## "Gives" Must Hurt a Little

The "Gives" column must represent real costs:

- Time invested (content creation, engagement)
- Cash spent (ads, infrastructure, salaries)
- Access granted (platform access, audience attention)
- Legitimacy risked (reputation, credibility)
- Political cover provided (endorsement, amplification)

If "Gives" is empty or costless, you've written a fantasy, not a transaction.

People don't participate for free. Find the cost they're paying.

---

## "Gets" Must Be Observable

The "Gets" column needs measurable outcomes:

**Acceptable:**
- Revenue (measurable in currency)
- Followers (countable)
- Engagement (metrics exist)
- Policy outcomes (documented changes)
- Avoided consequences (measurable by absence)

**Not acceptable:**
- "Awareness" (too vague)
- "Influence" (on what? measured how?)
- "Impact" (specify the impact)

If you can't observe it or measure it, you don't know if it's happening.

---

## Every Row Is an Assumption

Each row in your ledger represents a hypothesis about how the system works.

Rows look permanent until someone properly prices the spillover. Markets shift. Regulations change. Platforms update policies.

Your ledger is a snapshot, not a permanent truth. Update it when conditions change. Mark your confidence level for each row.

---

## Self Rows Exist

Don't forget internal costs — the resources spent by those responding:

- Moderation labour (platform pays staff time)
- Compliance overhead (companies pay for legal review)
- Incident response (organisations pay for crisis management)
- Mental health costs (individuals pay in wellbeing)
- Research costs (funders pay for analysis)

These are real transactions, even when money doesn't change hands.

Someone always pays. Usually the wrong somebody.

---

## Spillover Rows

Some costs aren't paid by participants:

**Spillovers are externalities:**
- Democratic trust (degraded by operations)
- Social cohesion (fragmented by polarisation)
- Platform reputation (damaged by hosting)
- Public health (affected by health disinfo)

**Who should pay but doesn't?**
- Platforms externalise moderation to users and fact-checkers
- Creators externalise harm to targets and society
- Campaigns externalise cleanup to governments

Identifying spillovers reveals where internalisation might work.

---

## Internalisation Rows

These are the intervention points — making someone pay the costs they currently externalise:

**Examples:**
- Platform pays for moderation (internalises cleanup cost)
- Creator loses monetisation (internalises audience harm)
- Advertiser faces brand damage (internalises association cost)

If you can write an internalisation row, you've found a potential lever.

---

## The Bottom Line

Every TTF analysis ends the same way:

**State who extracts value and why it persists. Plainly. No euphemisms.**

Examples:
- "Platform extracts engagement value while externalising moderation costs to NGOs and mental health costs to users."
- "Influencer extracts audience trust and converts to affiliate revenue; followers pay with money and occasionally health."
- "State actor extracts polarisation value; democratic society pays with reduced social cohesion."

If you can't write this sentence, you haven't finished the analysis.

---

## Sample TTF: Health Misinformation

| Who | Gives | Gets | How |
|-----|-------|------|-----|
| Creator | Time, content | Followers, ad revenue | YouTube monetisation |
| Platform | Reach, recommendations | Engagement, ad revenue | Algorithm promotion |
| Audience | Attention, trust | Validation, community | Subscribing, sharing |
| Advertiser | Money | Impressions | Programmatic placement |
| Supplement company | Affiliate fees | Sales | Links in description |
| Fact-checker | Labour, credibility | Grants | Debunking content |
| Platform trust team | Staff time | Reduced harm reports | Content review |

**Spillover**: Healthcare system pays for treating preventable illness (not in transaction)

**Internalisation option**: Platform pays fact-checkers directly; creator demonetised

**Bottom line**: Creator and platform extract value from health anxiety; healthcare system and patients pay downstream costs.

---

## DIM Application

The TTF tells you which intervention space you're in:

**Belief space (Gen 2/3)**:
- Transaction involves persuasion
- People give attention, get worldview validation
- Intervention: counter-messaging, prebunking

**Reach space (Gen 4)**:
- Transaction involves amplification
- People give engagement, get visibility
- Intervention: reduce distribution, platform action

**Identity-group space (Gen 5)**:
- Transaction involves belonging
- People give conformity, get community membership
- Intervention: alternative communities, resilience building

The ledger reveals which generation of response fits.

---

## Common Errors

**Error 1: Vague "Gets"**
- "Gets influence" — influence on what? measured how?
- Fix: "Gets 10% engagement rate and $500/month affiliate revenue"

**Error 2: Missing "How"**
- "They spread lies" — through what mechanism?
- Fix: "Via coordinated Facebook group posting at 9am daily"

**Error 3: Ignoring spillovers**
- Only mapping direct transactions, missing who pays hidden costs
- Fix: Add rows for externalised costs

**Error 4: Moralising instead of mapping**
- "They do it because they're bad" — not a transaction analysis
- Fix: Find the incentive structure

**Error 5: Single-actor focus**
- Only mapping the "bad guy"
- Fix: Map the whole ecosystem including responders

---

## Practical Exercise: Full TTF

**Task (30 minutes):**

Build a complete TTF for a disinformation ecosystem of your choice.

**Requirements:**
1. **10 rows minimum** covering:
   - Primary content creator
   - Platform
   - Audience (believers)
   - Audience (skeptics who engage)
   - Advertisers or monetisation source
   - Responders (fact-checkers, journalists)
   - Affected parties
   - Regulators or government
   - Researchers studying it
   - Your own organisation

2. **Mark 2 rows as spillover** (externalised costs)

3. **Add 1 internalisation row** (who could absorb currently externalised cost)

4. **Write the bottom line** (1-2 sentences)

5. **Confidence level** for at least 3 rows

---

## Stop Rules

Know when your TTF is complete:

**Stop when:**
- All major actors are represented
- Each row has all four columns filled
- Spillovers are identified
- At least one internalisation option exists
- Bottom line is written

**Don't stop just because:**
- Some rows are low-confidence (mark them, don't delete)
- The picture is uncomfortable
- An actor is hard to map

Incomplete TTFs are still useful. Perfect is the enemy of good.

---

## Key Takeaways

- TTF = Who gives what to get what, and how
- "How" is mandatory — without mechanism, you have ideology not analysis
- "Gives" must cost something; "Gets" must be observable
- Every row is an assumption — mark confidence and update when conditions change
- Self-rows exist — don't forget the cost of responding
- Someone always pays; usually the wrong somebody
- Spillovers reveal externalised costs; internalisation rows reveal intervention points
- Bottom line must state who extracts value and why it persists
- TTF reveals which DIM generation fits the intervention space

Write the ledger. Change the ledger.

---

## Test Your Understanding

**Scenario**: A political disinformation campaign is spreading false claims about election procedures. Multiple actors are involved.

**Task (20 minutes):**

1. Build an 8-row TTF
2. Identify the highest-value extraction row
3. Identify the highest spillover-cost row
4. Propose one internalisation mechanism
5. Write the bottom line
6. Assessment + Confidence + Next action

**Scoring:**
- Penalise vague Gets/Gives
- Credit observable mechanisms
- Reward spillover identification
- Credit realistic internalisation options`;

const idx = modules.findIndex(m => m.title === 'TTF Simplest Form: Write the Ledger');
if (idx !== -1) {
  modules[idx].content = newContent;
  modules[idx].estimatedTime = '18 minutes';
  fs.writeFileSync('./lib/modules-data.json', JSON.stringify(modules, null, 2));
  console.log('Updated:', modules[idx].title);
  console.log('New content length:', modules[idx].content.length, 'chars');
}
