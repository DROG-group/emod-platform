#!/usr/bin/env python3
import json

# Read current data
with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# Expanded content for Detection Module 1: Introduction to Detection and Verification
expanded_content = """## Purpose

You'll learn the difference between detecting potential manipulation and verifying actual problems—and when to pursue each. This distinction matters because the impulse to "do something" about suspected manipulation often leads to action before understanding, which can cause more harm than the original problem.

---

## Why Detection and Verification Are Different Skills

Detection and verification serve different purposes, require different methods, and have different error costs.

**Detection** is about finding potential problems. You're scanning for anomalies, patterns, or signals that something might be worth investigating. Detection systems should cast a wide net. Some false positives are acceptable—you'd rather investigate something that turns out to be organic than miss actual manipulation.

**Verification** is about confirming actual problems. You've identified something suspicious; now you need to determine whether it's actually what you think it is. Verification requires rigor. False positives here are costly—claiming coordination where none exists damages credibility and potentially harms legitimate speech.

**The common mistake**: Treating detection signals as if they were verified conclusions. A spike in activity, some new accounts, similar messaging—these are reasons to investigate, not conclusions about what you're seeing. Moving straight from "this looks suspicious" to "this is a coordinated campaign" skips the work that distinguishes good analysis from speculation.

**The cost of conflation**:
- Crying wolf on organic activity teaches people to dismiss warnings
- Misattributing authentic movements as manipulation delegitimizes them
- Acting on unverified suspicion can backfire badly
- Your credibility depends on the ratio of verified claims to overclaims

This module establishes the framework for the Detection and Verification learning path. Subsequent modules cover specific technical and behavioral detection methods, network analysis, verification tools, and professional fact-checking approaches.

---

## The Detection-Verification Pipeline

Think of the process as a funnel:

**Level 1: Monitoring** (broad scan)
- What's happening in the information space?
- What topics are trending?
- What narratives are emerging?
- Goal: situational awareness

**Level 2: Detection** (anomaly identification)
- Does anything look unusual?
- Are there patterns that don't match organic activity?
- Are there signals worth investigating?
- Goal: generate leads for investigation

**Level 3: Investigation** (evidence gathering)
- What explains the patterns we're seeing?
- Can we rule out organic explanations?
- What additional evidence supports different hypotheses?
- Goal: develop understanding of what's happening

**Level 4: Verification** (confirmation)
- Can we confirm our hypothesis with sufficient confidence?
- Have we ruled out alternative explanations?
- Do we have the evidence to support claims we might make?
- Goal: reach defensible conclusions

**Level 5: Attribution** (if needed)
- Who is responsible?
- What evidence supports that attribution?
- Goal: identify actors (when response requires it)

Most analysis stops at Level 3 or 4. Attribution (Level 5) is often unnecessary for response and requires additional evidence beyond verification of manipulation.

**The funnel principle**: Lots enters at Level 1; very little exits at Level 5 with high confidence. This is how it should be. Most activity is organic. Most anomalies have innocent explanations. Most manipulation can be addressed without perfect attribution.

---

## Scenario

A suspicious narrative is spreading across social platforms during a local election. Your monitoring team flags it for investigation.

The narrative claims the election commission is planning to invalidate ballots from certain districts. It's spreading with hashtags and emotional language. Your team noticed it this morning; it wasn't on your radar yesterday.

**You have**:
- **Time available**: 2 hours for initial assessment
- **Stakes**: Report to comms team; premature public statement could backfire
- **Data access**: Social media UI, basic search tools, no API access
- **Constraint**: Cannot confirm source attribution yet

This is a typical scenario: something looks concerning, you have limited time and resources, and the pressure is to either dismiss it (risky if it's real) or escalate it (risky if it's organic).

---

## Task

Produce three outputs:

1. **Assessment**: Is this manipulation, organic activity, or unclear?
2. **Confidence level**: Low / Medium / High
3. **Next action**: Escalate, continue monitoring, or close investigation?

---

## Method: Detection-Verification Workflow

### Step 1: Recognize what you're doing

Before diving in, be explicit about your goal at this stage:

**You are conducting initial detection assessment, not verification.**

This means:
- You're determining whether this warrants further investigation
- You're not yet trying to prove it's manipulation
- False negatives are more costly than false positives at this stage
- Your output is "worth investigating" or "not worth investigating," not "is manipulation" or "is organic"

**Common error at this step**: Jumping to verification-level conclusions based on detection-level evidence. "The accounts look fake, therefore this is a coordinated campaign" skips several necessary steps.

### Step 2: Check for real-world triggers

Before assuming manipulation, ask: Is there an organic explanation for this activity?

**Questions to answer**:
- Did a news event, policy announcement, or controversy occur recently?
- Did a public figure, media outlet, or organization draw attention to this topic?
- Are verified accounts and traditional media discussing this?
- Does the narrative make sense given current events?
- Would people plausibly care about this topic organically?

**In our scenario**: Is there any basis for concerns about ballot invalidation? Did something happen that would reasonably generate this narrative? If the election commission actually announced something controversial, or if there's a history of ballot disputes in those districts, the narrative may be a genuine response to real concerns—even if amplified.

**Critical principle**: Real outrage spreads fast. Genuine grassroots movements can look coordinated. Don't mistake authentic public reaction for manufactured coordination.

**If clear trigger exists**: The activity is likely organic. May still be worth monitoring, but investigation priority decreases.

**If no plausible trigger**: Worth investigating further. The question becomes: why is this emerging now, from where?

### Step 3: Conduct initial signal assessment

Gather indicators that help distinguish organic from inauthentic activity. But classify these signals by their strength—not all indicators are equally meaningful.

**What you're looking for**:

Volume and timing patterns:
- How fast did this emerge?
- What's the trajectory (steady growth vs. sudden spike)?
- What time of day is activity concentrated?
- How does this compare to baseline for similar topics?

Account characteristics:
- What's the age distribution of participating accounts?
- What's the follower/following ratio pattern?
- Do accounts have posting history, or is this their only recent activity?
- Are profile photos, bios, and names diverse or templated?

Content characteristics:
- How similar is the content across posts?
- Are people copying/pasting or writing original takes?
- Is there variation in framing and language?
- Are there typos, errors, or awkward phrasing patterns?

Network patterns:
- Do participating accounts follow each other?
- Is there a cluster that interacts primarily with itself?
- Did the content spread through organic sharing or coordinated seeding?
- Are there accounts that appear to be amplifiers rather than authentic participants?

**Important**: At this stage, you're gathering signals, not reaching conclusions. The next step is classifying their strength.

### Step 4: Apply signal classification

Not all indicators carry equal weight. Classify what you've found:

**Strong signals** (significantly increase manipulation likelihood):

- **Coordinated timing across many accounts with shared infrastructure**: Multiple accounts posting similar content within seconds or minutes, especially if technical analysis shows shared access patterns, IP addresses, or device fingerprints.

- **Account creation clustering around campaign start**: A large number of participating accounts were created shortly before the narrative emerged, suggesting preparation.

- **Cross-platform identical deployment**: The same content appearing simultaneously across multiple platforms in ways that suggest central coordination rather than organic cross-posting.

- **Network isolation**: Accounts primarily interact with each other rather than with the broader platform community.

- **Behavioral impossibilities**: Accounts showing activity patterns impossible for genuine human users (posting 24/7, responding faster than humans can read, etc.).

**Medium signals** (worth investigating but not conclusive):

- **Volume spike without clear real-world trigger**: Unusual attention to a topic that doesn't obviously warrant it. But viral content surprises us regularly.

- **Elevated new account participation**: More new accounts than typical for this topic. But new accounts exist for many reasons.

- **Similar messaging patterns**: Consistent framing, hashtags, or talking points. But movements develop shared language organically.

- **Unusual engagement ratios**: High retweets/shares relative to likes, or other ratio anomalies. But engagement patterns vary by content type.

- **Template variations**: Content that varies slightly as if generated from templates. But people do copy/paste and modify.

**Weak signals** (common in organic activity; insufficient alone):

- **Rapid spread**: Real events and compelling content spread fast too.

- **Emotional language**: Genuine outrage uses emotional language.

- **Consistent messaging**: Movements and communities develop shared framing naturally.

- **Low-follower accounts participating**: Most people have few followers.

- **"Feels coordinated"**: Subjective impression without concrete indicators.

- **Unpopular viewpoint**: People hold minority views sincerely.

### Step 5: Assess harm potential

Detection should be prioritized by potential harm, not just manipulation likelihood.

**Questions to assess harm**:

- What's the potential impact if this narrative succeeds?
- Is this targeting a decision point (election, policy vote, emergency response)?
- Is this likely to incite offline behavior?
- What audiences are being reached?
- How does this interact with existing vulnerabilities or tensions?

**High harm potential**:
- Content targeting imminent decisions (election day, vote timing)
- Content that could incite violence or harassment
- Content targeting vulnerable populations
- Content during crisis situations
- Content undermining critical institutions during active events

**Medium harm potential**:
- Content on divisive but not time-critical topics
- Content targeting general attitudes over time
- Content amplifying existing narratives

**Low harm potential**:
- Content with limited reach
- Content on topics with low stakes
- Content that contradicts itself or is obviously absurd
- Content in spaces already saturated with similar claims

**Priority matrix**: Combine manipulation likelihood with harm potential.
- High manipulation + High harm = Immediate escalation
- High manipulation + Low harm = Investigate, lower urgency
- Low manipulation + High harm = Monitor real-world event, standard response
- Low manipulation + Low harm = Document, close investigation

### Step 6: Decide next action

Based on your signal assessment and harm evaluation:

**Escalate to verification** when:
- Strong signals are present
- Harm potential is significant
- Time constraints don't allow further monitoring
- You have resources to conduct verification

What escalation means: Move to rigorous verification methods—API data collection if available, network analysis, content forensics, cross-platform investigation. This is resource-intensive.

**Continue monitoring** when:
- Medium signals are present
- Situation is evolving
- More evidence might clarify the picture
- Harm isn't imminent

What monitoring means: Keep watching, gather more data, don't act yet. Set a timebox for reassessment.

**Close investigation** when:
- Only weak signals present
- Organic explanation is plausible
- Harm potential is low
- Evidence remains ambiguous after sufficient investigation

What closing means: Document what you found for pattern tracking. Don't pursue further. Be willing to reopen if new evidence emerges.

---

## Working Through the Scenario

Let's apply this framework to our election narrative scenario.

**Step 2: Real-world trigger check**
- Is there any recent news about ballot procedures in these districts? Check local media.
- Has the election commission made any announcements?
- Have any officials or candidates raised concerns about this?
- Is there historical context (previous disputes, ongoing litigation)?

Let's say: No clear trigger found. The election commission hasn't announced anything about invalidation. No major media coverage of ballot concerns. This increases investigation priority.

**Steps 3-4: Signal assessment**

What we observe:
- Narrative emerged in last 24 hours: Medium signal (could be organic breaking concern or coordinated launch)
- Many participating accounts created in last 3 months: Medium signal (needs quantification—what percentage?)
- Hashtag usage is consistent but content varies: Weak signal (movements coordinate hashtags organically)
- Activity concentrated in morning hours: Weak signal (when people are online)
- No cross-platform identical deployment found: Reduces coordination likelihood
- No obvious network isolation: Reduces coordination likelihood

**Step 5: Harm assessment**
- Topic: Ballot invalidation during election
- Potential harm: Could suppress turnout, undermine confidence in results
- Timing: Election is imminent
- Assessment: Medium-High harm potential

**Step 6: Decision**
- Signal strength: Medium (some concerning patterns, nothing definitive)
- Harm potential: Medium-High
- Recommendation: Continue monitoring with heightened attention. Prepare verification resources. Don't escalate to public response yet—insufficient evidence. Set 4-hour check-in.

**Report to comms team**: "We've identified a narrative about ballot invalidation spreading on social media. Initial assessment shows some unusual patterns—elevated new account participation, no clear triggering event—but we cannot confirm coordination at this time. Given the election timing, we're monitoring closely and will update in 4 hours. Recommend not making public statements until we have clearer picture. If asked, can acknowledge we're monitoring the situation."

---

## Evidence Ladder for Detection

### Strong signals (move to verification):

- Coordinated posting timing (seconds/minutes apart) across accounts with no obvious connection
- Account creation patterns clustering just before campaign launch
- Technical indicators (shared infrastructure, access patterns, device fingerprints)
- Cross-platform simultaneous deployment of identical content
- Network analysis showing accounts interact primarily with each other
- Behavioral patterns impossible for humans (24/7 posting, instant responses)
- Previous confirmed operations using same infrastructure or accounts

### Medium signals (investigate further):

- Volume spike without clear real-world trigger
- Elevated proportion of new accounts compared to baseline
- Similar messaging patterns (shared hashtags, framing, talking points)
- Unusual engagement ratios
- Accounts with sparse history suddenly active on this topic
- Template-like variation in posts
- Geographic/linguistic anomalies for the topic

### Weak signals (insufficient alone):

- Rapid spread (real content spreads fast too)
- Emotional/sensational language (genuine outrage is emotional)
- Consistent messaging (movements develop shared language)
- Low-follower accounts participating (most people have few followers)
- "Feels coordinated" without specific indicators
- Content you disagree with (not an indicator of inauthenticity)
- Content that seems implausible to you (people believe implausible things)

---

## Stop Rules

Stop investigating when:

### Timebox reached
Your 2 hours are up. Report what you know with appropriate confidence levels. "We observed X patterns. Our assessment is Y with [low/medium/high] confidence. We recommend Z next step."

### Organic trigger confirmed
You've identified a real-world event that explains the activity. The election commission did announce something. A local politician raised concerns yesterday. This is a genuine response, not manufactured.

### Harm threshold not met
Even if some inauthenticity exists, the impact is minimal. A handful of suspicious accounts in a much larger organic conversation doesn't warrant major response.

### Evidence remains ambiguous
You've investigated with available tools and can't distinguish this from organic activity. That's a valid finding. "We cannot determine whether this is coordinated or organic based on available evidence" is an honest conclusion.

### Verification not warranted
The detection signals don't justify the resources required for full verification. Limited suspicious patterns, limited harm potential—document and move on.

**Key principle**: Uncertainty is a legitimate finding. If you can't tell whether activity is organic or coordinated with available data, say that. Don't overclaim to provide a definitive answer.

---

## Common Detection Errors

### Confirmation bias
You suspect manipulation, so you interpret ambiguous signals as confirming your suspicion. Guard against this by explicitly considering: what would make me think this is organic?

### Pattern imposition
Humans are pattern-seekers. We see coordination in randomness. Ask: would I notice this pattern if I weren't looking for manipulation?

### Availability bias
The most memorable examples of manipulation inform your expectations. But most activity isn't manipulation, and manipulation doesn't always look like past examples.

### Base rate neglect
Most content, most accounts, most spread is organic. Even during active manipulation campaigns, organic activity usually dominates. Weight your priors accordingly.

### Sophistication assumptions
"Real manipulation would be more sophisticated than this" or "real organic activity wouldn't be this sloppy." Sophisticated actors can be crude; organic activity can look coordinated.

### Disagreement conflation
Finding content you disagree with isn't evidence of manipulation. People sincerely believe things you find implausible.

---

## DIM Mapping: From Detection to Intervention

Detection is input to intervention choice, not the intervention itself. How does detection feed into the DIM framework?

**If strong signals + confirmed harm after verification**:

- **Gen 4 (Moderation)**: Report to platforms for investigation and potential enforcement. Provide evidence package.
- **Gen 5 (Interaction)**: If you have platform relationships, request reduced algorithmic amplification while investigation proceeds.
- **Gen 3 (Prebunking)**: Prepare public messaging about manipulation tactics if exposure is warranted.

**If medium signals + unclear harm (still investigating)**:

- **Gen 3 (Prebunking)**: Consider general warnings about manipulation tactics during this period without claiming this specific case is confirmed.
- **Continue monitoring and verification**: Don't intervene on the specific content/accounts until you have stronger evidence.
- **Prepare response options**: Have materials ready if evidence strengthens.

**If weak signals or low harm**:

- **Document for pattern tracking**: Add to your database for future reference.
- **No specific intervention yet**: Don't act on speculation.
- **Standard topical response if warranted**: If the underlying claims need addressing, address them on substance regardless of manipulation concerns.

**Critical principle**: Your detection assessment determines investigation priority, not response intensity. Don't respond to suspected manipulation as if it's confirmed manipulation. Move through the detection-verification pipeline before acting.

---

## Applying This Framework Going Forward

This module provides the foundational framework for the Detection and Verification learning path. Subsequent modules will cover:

**Technical Detection Methods**: Tools and techniques for identifying inauthentic accounts, coordinated behavior, and synthetic content.

**Behavioral Analysis**: Patterns of activity that distinguish organic from inauthentic participation.

**Network Analysis**: Mapping relationships between accounts and identifying coordinated clusters.

**Content Verification Tools**: Methods for verifying images, videos, claims, and sources.

**Crowdsourced Verification**: Leveraging community knowledge while avoiding pitfalls.

**Professional Fact-Checking**: Standards and practices for rigorous verification.

Each module builds on this framework: signal classification, evidence ladders, stop rules, and the distinction between detection (finding leads) and verification (confirming conclusions).

---

## Key Takeaways

1. **Detection and verification are different activities** with different goals, methods, and error costs. Don't conflate detection signals with verified conclusions.

2. **Check for organic explanations first**. Real events generate real responses. Genuine movements can look coordinated. Don't assume manipulation.

3. **Classify signal strength**. Not all indicators are equally meaningful. Strong signals warrant verification; weak signals alone don't support conclusions.

4. **Consider harm potential alongside manipulation likelihood**. Prioritize investigation based on both factors.

5. **Define your stop rules**. Know when to stop investigating and what honest uncertainty looks like.

6. **Detection informs intervention choice but isn't an intervention**. Move through verification before acting on suspected manipulation.

---

## Test Your Understanding

**Scenario**: A hashtag criticizing a government policy gains 5,000 uses in 3 hours. 20% of accounts are less than 2 months old. An opposition politician promoted the hashtag yesterday. Messages vary but share common themes.

**Questions**:

1. What's your initial hypothesis with confidence level?
2. What 2-3 signals would you investigate next?
3. What's one likely false positive you'll guard against (legitimate activity you might mistake for manipulation)?
4. What's your recommended next action and why?

### Model response approach:

**Hypothesis + confidence**: "This appears to be organic political activity with possible amplification, confidence: medium. The opposition politician's promotion provides a clear trigger, and message variation suggests authentic participation. The elevated new account proportion warrants attention but isn't conclusive."

**Signals to investigate**:
1. New account characteristics: Are the 2-month-old accounts posting original content or copy/paste? Do they have other posting history? Did they exist before this campaign?
2. Timing analysis: Did most activity follow the politician's promotion, or did significant activity precede it?
3. Network relationships: Do the new accounts follow each other? Are they connected to known political accounts or isolated?

**False positive guard**: Mistaking genuine grassroots political mobilization for manufactured coordination. Opposition supporters creating accounts to engage politically around an election is legitimate. New accounts participating in politics isn't inherently suspicious—elections motivate participation.

**Recommended action**: Continue monitoring, don't escalate. The real-world trigger (politician promotion) suggests organic origin. The new account proportion is notable but not alarming. Document patterns, check again in 6 hours. Don't report this as suspected manipulation without stronger evidence.

---

**Penalty for**: Claiming coordination without strong evidence; treating weak signals as conclusive; ignoring the organic trigger

**Reward for**: Checking for organic explanations first; classifying signal strength appropriately; expressing appropriate uncertainty; defining clear stop rules"""

# Find and update the module
for i, m in enumerate(data):
    if m.get('id') == 'Module-Introduction-Detection':
        data[i]['content'] = expanded_content
        data[i]['estimatedTime'] = '30 minutes'
        break

# Write back
with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Detection Module 1 expanded successfully!")
print(f"New content length: {len(expanded_content)} characters")
