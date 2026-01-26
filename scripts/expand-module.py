#!/usr/bin/env python3
import json

# Read current data
with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# Expanded content for Module 2: State vs Non-State Actors
expanded_content = """## Purpose

You'll learn to distinguish state-directed operations from commercial services and ideological activists—recognizing that actor type determines response options, not threat level. This module equips you with systematic methods for actor attribution while avoiding the common trap of overclaiming based on insufficient evidence.

---

## Why Actor Attribution Matters (And Why It's Difficult)

Attribution—identifying who is behind an information operation—shapes everything from diplomatic responses to legal options. Get it wrong, and you waste credibility, diplomatic capital, or worse: you may validate the narrative that Western governments cry "foreign interference" whenever they encounter inconvenient opinions.

The difficulty: modern information operations rarely come with signatures. A coordinated network spreading divisive content could be:
- A government intelligence service running a long-term influence campaign
- A commercial "reputation management" firm hired by that government
- An ideological movement that happens to align with foreign state interests
- Some messy combination of all three

Your job isn't to achieve certainty—that's often impossible without intelligence community access. Your job is to assess likelihood, acknowledge what you don't know, and match your response to your evidence level.

**Critical principle**: You can disrupt harmful operations without perfect attribution. Platform policy violations (coordinated inauthentic behavior) don't require knowing who's behind the coordination. But attribution determines which additional tools and authorities become available.

---

## Scenario

Platform analysts identify a coordinated network spreading anti-NATO narratives. Evidence shows:
- Professional-quality content production
- Payment for ads traced to a Prague-based marketing firm
- Some accounts operated by real people with genuine ideological views
- Narratives align with Russian state media, but no direct link confirmed

Your team must assess: State operation? Commercial contractor? Ideological activists? Some combination?

**You have**:
- **Time available**: 2 days before escalation decision
- **Stakes**: If state-directed, activates diplomatic response; if commercial, legal action; if ideological, limited options
- **Data access**: Platform account data, payment records, content analysis, no intelligence agency access
- **Constraint**: Misattribution damages credibility and wastes diplomatic capital

This scenario illustrates a common challenge: evidence points in multiple directions simultaneously. The professional quality suggests resources, but commercial firms have resources. The content alignment suggests state interest, but ideological activists share those interests. The payment trail leads to a company, not a government ministry.

---

## Task

Produce three outputs:

1. **Assessment**: What actor type(s) are operating this network?
2. **Confidence level**: Low / Medium / High for each actor type identified
3. **Next action**: What investigation or response does the actor type warrant?

---

## Understanding the Actor Landscape

Before attribution, understand who actually conducts information operations.

### State Actors

Governments with dedicated information operations capabilities include intelligence services, military units, and civilian agencies focused on foreign influence.

**Operational characteristics**:
- Can sustain operations over months or years without commercial return
- Integrate information operations with diplomatic, military, and cyber activities
- Have access to intelligence for targeting (knowing which groups are susceptible to which messages)
- Operate with sophisticated security practices learned from intelligence tradecraft
- Never need to demonstrate ROI to a client—success metrics are strategic, not commercial

**Common state actor structures**:
- **Intelligence service units**: SVR/GRU (Russia), MSS (China), IRGC (Iran), RGB (North Korea)
- **Military psychological operations**: PSYOP units, strategic communications commands
- **Civilian agencies**: State media international services, cultural institutes
- **Proxy networks**: State-funded organizations operating at arm's length

**What state operations typically look like**:
- Long-duration campaigns (the Internet Research Agency operated for years before exposure)
- Consistent messaging aligned with foreign policy objectives
- Sophisticated targeting based on demographic and psychographic data
- Coordination across platforms, languages, and media types
- Resilience after exposure (they rebuild, adapt, continue)

### Commercial Actors

A growing industry sells "reputation management," "digital influence," and "social media marketing" services that can include coordinated inauthentic behavior.

**Operational characteristics**:
- Activity scales with payment (stops when budget runs out)
- Portfolio includes multiple clients across different causes
- Focus on delivering measurable metrics (reach, engagement, sentiment shift)
- Standard business practices (invoices, contracts, deliverables)
- Less sophisticated operational security than intelligence services
- Reuse tactics and infrastructure across clients (efficiency over security)

**Types of commercial actors**:
- **PR and marketing firms**: Some legitimate services shade into manipulation
- **"Black PR" specialists**: Explicitly offer coordinated inauthentic behavior
- **Troll farms**: Operations selling social media manipulation as a service
- **SEO manipulation firms**: Gaming search results and social feeds
- **Journalist networks**: Coordinated placement of sponsored content presented as news

**What commercial operations typically look like**:
- Clear relationship between activity level and payment timing
- Campaign-based structure with defined start/end dates
- Metrics-driven reporting to clients
- Tactical flexibility (they'll promote whatever pays)
- Lower persistence after exposure (reputation risk matters for future clients)

### Ideological Activists

Genuine believers who organize for causes they care about—sometimes using tactics that resemble coordinated manipulation.

**Operational characteristics**:
- Consistent ideological position over time (often years)
- Mix of organized activity and organic engagement
- Resource constraints visible (volunteer labor, limited budgets)
- Willing to identify themselves and their cause
- Personal investment beyond any financial incentive
- Connection to broader social movements

**The attribution challenge with activists**:
- Sophisticated activism can look like professional manipulation
- Ideological alignment with foreign states doesn't mean coordination with them
- Some activists receive foreign support without becoming foreign agents
- Convergent interests ≠ directed operation

**Critical distinction**: Someone genuinely believing anti-NATO narratives and working to spread them is different from someone paid to spread narratives they don't believe. Both may cause harm, but they require different responses and different evidence for action.

### Hybrid and Proxy Actors

The most challenging attribution scenarios involve combinations.

**Proxy relationships spectrum**:
1. **Direct control**: State creates and operates front organization (highest confidence if proven)
2. **Tasking**: State pays and provides direction, proxy has operational autonomy
3. **Funding**: State provides money, proxy chooses how to operate
4. **Alignment**: No formal relationship, but interests and messaging converge
5. **Unwitting amplification**: Proxy spreads state content without knowing its origin

**Common hybrid patterns**:
- State hires commercial firm to execute campaigns
- State funds ideological movement that shares its interests
- Commercial firm subcontracts to another commercial firm (laundering origin)
- State media provides content that activists amplify authentically
- Ideological activists receive foreign support but maintain genuine belief

Each step away from direct control reduces attribution confidence.

---

## Method: Actor Attribution Workflow

### Step 1: Check your assumptions at the door

Common attribution mistakes:

**"This is professional, therefore state-directed"**: Commercial firms produce high-quality manipulation for hire. Well-funded ideological movements have professional capabilities. States sometimes use crude tactics. Sophistication indicates resources, not necessarily government origin.

**"This aligns with Russian/Chinese/Iranian interests, therefore they're behind it"**: Many groups share interests with foreign states without coordinating with them. Convergent interests are common; proof of coordination is rare.

**"They're being deceptive, therefore they're foreign"**: Domestic actors use deceptive tactics too. Coordinated inauthentic behavior isn't exclusively foreign.

**"I know what I'm looking at"**: Pattern recognition trained on past cases may not apply to evolved tactics. Today's state operations don't look like 2016's.

Start with evidence, not assumptions. What do you actually know?

### Step 2: Map what you have

Document your evidence before attribution:

**Account-level evidence**:
- Creation patterns (bulk creation, timing, naming conventions)
- Behavioral signatures (posting times, language patterns, network connections)
- Technical indicators (shared infrastructure, access patterns)
- Identity claims (are real people attached? are they who they claim?)

**Content-level evidence**:
- Messaging themes and consistency
- Production quality and resource indicators
- Coordination patterns (similar content, simultaneous posting)
- Source material (where does content originate?)

**Financial evidence**:
- Payment records and their reliability
- Entity ownership information
- Funding sources if identifiable

**Network-level evidence**:
- Connection to other known operations
- Links to identified actors or organizations
- Pattern matching to previous campaigns

### Step 3: Evaluate state direction indicators

**Strong signals for state direction**:

- **Multi-year sustained activity** without clear commercial motive or ideological origin. State operations can persist because they're funded by government budgets, not client payments or donations.

- **Integration with other state instruments**. Information operations synchronized with diplomatic initiatives, military actions, or cyber operations. This coordination requires state-level planning.

- **Intelligence-grade operational security**. Sophisticated infrastructure management, identity protection, and counter-forensics beyond commercial or activist capability.

- **Consistent state interest advancement** with zero criticism of the suspected state. Authentic ideological movements occasionally disagree with their preferred states; directed operations don't.

- **Scale exceeding commercial or activist budgets**. Hundreds of full-time operators, massive infrastructure, multi-language operations—hard to fund without state resources.

- **Persistence despite exposure**. State operations rebuild and continue because strategic objectives remain. Commercial and activist operations face reputation and motivation costs.

**Medium signals (suggestive but not conclusive)**:

- Messaging aligns with state media output (but state media is publicly available)
- Timing correlates with state actions (could be opportunistic)
- Professional quality content (commercial firms deliver this)
- Multi-platform presence (well-resourced activists achieve this)

**Weak signals (insufficient alone)**:

- "Sophisticated" or "coordinated" (many actors coordinate)
- "Professional content" (buyable capability)
- "Anti-[Western interest]" framing (many genuine perspectives)
- "Spread rapidly" (organic content spreads rapidly too)

### Step 4: Evaluate commercial actor indicators

**Strong signals for commercial operations**:

- **Payment records to marketing/PR firms**. Follow the money—if there's a commercial entity receiving payment for the activity, that's your strongest signal.

- **Multi-client portfolio evidence**. Commercial actors typically serve multiple clients. Finding evidence of the same firm running campaigns for different causes suggests commercial motivation.

- **Activity correlates with payment cycles**. Campaign intensity tied to budget timing (monthly, quarterly) rather than geopolitical events.

- **Standard commercial practices**. Contracts, invoices, deliverables, reporting—the paper trail of a business relationship.

- **Reuse of infrastructure and tactics across campaigns**. Efficiency matters to businesses; they template and reuse. State operations are more willing to burn capabilities.

**Medium signals**:

- Professional execution + payment intermediaries
- Campaign-structured activity (defined start/end)
- Metrics-focused operation (engagement optimization)
- Reputation sensitivity (changes behavior when exposed)

**Weak signals**:

- "Looks like they're getting paid" (volunteers exist, passion exists)
- "Too professional for activists" (activists can be professional)
- "There must be money behind this" (movements attract volunteers)

### Step 5: Evaluate ideological activist indicators

**Strong signals for genuine activism**:

- **Long history of activism predating suspected state involvement**. If someone has been advocating this position for years before any state interest emerged, state direction is unlikely.

- **Authentic community engagement**. Genuine discussion, relationship-building, internal debates—not just message broadcasting.

- **Resource-constrained operations**. Visible limits on budget, volunteer fatigue, scaling challenges—the fingerprints of movement organizing.

- **Transparent about identity and goals**. Willing to be publicly associated with their cause, even if using some anonymity for safety.

- **Connection to broader social movements**. Embedded in activist networks, history of related causes, known within communities.

**Medium signals**:

- Genuine belief expressed consistently (but paid actors can believe too)
- Mixed activities (manipulation alongside authentic engagement)
- Some funding from sources with foreign connections

**Weak signals**:

- "They really believe this" (belief doesn't preclude coordination)
- "It's a genuine movement" (genuine movements can be coopted)
- "They're not getting paid" (ideology is its own motivation)

### Step 6: Evaluate proxy relationships

When evidence points to relationships between actor types:

**Direct control indicators**:
- Organization created by state entity
- Staff are state employees or contractors
- Operations directed from state agency
- No independent existence outside state relationship

**Tasking relationship indicators**:
- Clear funding from state sources
- Evidence of specific direction or assignments
- Operational timing synchronized with state needs
- Reporting relationship to state handlers

**Funding without control indicators**:
- State money flows to organization
- Organization maintains operational independence
- Content aligns but isn't directed
- Organization existed before state funding

**Alignment without relationship indicators**:
- No funding or coordination evidence
- Interests happen to converge
- Information flows are public (state media, etc.)
- No communication or tasking channels identified

**The harder question**: Even with funding evidence, distinguishing "state pays and directs" from "state pays, proxy decides" requires evidence of the direction itself—communications, tasking documents, coordination patterns.

---

## Evidence Ladder: Putting It Together

### Attribution to state direction requires:

**High confidence** (suitable for public attribution, diplomatic response):
- Multiple strong signals from Step 3
- Evidence ruling out commercial/activist alternatives
- Ideally: technical intelligence, communications intercepts, human intelligence
- Pattern matching to other confirmed state operations with distinctive signatures

**Medium confidence** (suitable for internal assessments, prepared positions):
- Several strong signals, some medium signals
- Commercial/activist alternatives possible but less likely
- Consistent with known state actor patterns
- Gaps in evidence acknowledged

**Low confidence** (suitable for hypothesis, further investigation):
- Some signals present, many gaps
- Alternative explanations equally plausible
- Pattern match is loose
- Limited technical evidence

### Attribution to commercial operation requires:

**High confidence**:
- Payment records to identified entity
- Commercial practices documented
- Multi-client evidence
- Business model visible

**Medium confidence**:
- Payment intermediaries identified
- Commercial patterns present
- Entity exists but ownership unclear

**Low confidence**:
- Circumstantial commercial indicators
- No direct payment evidence
- Could be well-resourced activists

### Attribution to ideological activists requires:

**High confidence**:
- Long documented activist history
- Community embeddedness
- Resource constraints visible
- No foreign funding evidence
- Transparent identity

**Medium confidence**:
- Some activist history
- Some community engagement
- Resource questions
- Foreign funding possible

**Low confidence**:
- Claims ideological motivation
- Limited verifiable history
- Could be cover for other actors

---

## Stop Rules

Stop the attribution investigation when:

### Time constraints reached

Your two-day window is up. Decide based on available evidence. Document uncertainty. "We assess with medium confidence this is likely a commercial operation with possible state client relationship; we cannot rule out ideological origins for some participants."

### Multiple actor types remain plausible

You've exhausted available investigative methods and still can't distinguish state from commercial from activist. This is okay—respond to the behavior, not the actor.

### Attribution isn't necessary for your response

Platform policy on coordinated inauthentic behavior doesn't require knowing who's behind the coordination. If you can act on the behavior, you may not need to answer the attribution question.

### Evidence required exceeds your access

Attribution to state direction may require intelligence community resources you don't have. Document what would change your assessment and what resources would be needed.

### Attribution wouldn't change response

If the same response applies regardless of actor type, the investigation is academic. Focus resources elsewhere.

---

## DIM Mapping: How Actor Type Shapes Response

The Disinformation Intervention Model (DIM) provides intervention options. Actor type determines which options are available and appropriate.

### If state-directed (high confidence):

**Diplomatic tools become available**:
- Formal attribution and diplomatic protest
- Sanctions on individuals and entities
- Expulsion of personnel
- International coordination

**Gen 4 interventions (Moderation)**:
- Platform removal under foreign interference policies
- Demotion and delisting of state media accounts
- Enhanced scrutiny of linked networks

**Gen 5 interventions (Interaction)**:
- Algorithmic reduction of state media reach
- Friction on sharing state-linked content
- Transparency labels on state-controlled media

**Intelligence community engagement**:
- Share findings for validation
- Coordinate counter-operations
- Inform broader threat picture

### If commercial (high confidence):

**Legal tools become available**:
- Fraud prosecution if deception for money
- Platform terms violation enforcement
- Business license challenges
- Civil liability for clients

**Gen 4 interventions (Moderation)**:
- Remove for coordinated inauthentic behavior
- Ban commercial entities from advertising
- Terminate business relationships

**Reputational tools**:
- Public exposure of firm and client relationships
- Industry blacklisting
- Media coverage of practices

### If ideological activists (high confidence):

**Speech-protective responses**:
- **Gen 2 (Debunking)**: Counter-speech and fact-checking
- **Gen 3 (Prebunking)**: Inoculation against manipulative tactics
- Protect speech rights even for disagreeable views

**Gen 5 interventions (Interaction)**:
- Reduce amplification of low-quality sources
- Downrank content, don't remove it
- Add context, don't silence

**What to avoid**:
- Framing domestic activism as foreign interference
- Removing content for viewpoint rather than behavior
- Treating ideological opposition as manipulation

### If proxy relationship (medium confidence):

**Combined approach**:
- Address proxy through appropriate legal/platform means
- Address state through diplomatic channels (with appropriate evidence caveat)
- Public exposure of relationship structure

**Gen 3 (Prebunking)**:
- Expose relationship without overclaiming control level
- "Funded by" is different from "directed by"—precision matters

**Higher evidence bar for state claims**:
- Public attribution to state requires solid evidence
- Proxy attribution may be sufficient for many purposes

### If actor type unclear:

**Behavior-focused response**:
- Act on coordinated inauthentic behavior regardless of origin
- Platform enforcement doesn't require attribution
- Deception and coordination are the violations

**Continued investigation**:
- Document gaps and uncertainty
- Identify what evidence would resolve questions
- Monitor for additional indicators

**Avoid premature claims**:
- Don't claim state direction without evidence
- "Foreign-linked" is often weasel language
- Be precise about what you know and don't know

---

## Key Takeaways

1. **Actor type determines response options, not threat severity**. A well-funded activist campaign can cause more harm than a poorly-executed state operation. Don't conflate "foreign" with "dangerous."

2. **Attribution confidence determines what responses are appropriate**. High-confidence state attribution enables diplomatic tools. Low-confidence attribution should drive continued investigation, not premature escalation.

3. **Sophistication indicates resources, not origin**. Commercial firms and well-funded movements can execute professional operations. "This is too good for activists" is rarely a valid inference.

4. **Convergent interests aren't coordination**. Many actors share interests with foreign states without being directed by them. Alignment is not evidence of tasking.

5. **You can act without perfect attribution**. Coordinated inauthentic behavior violates platform policies regardless of who's behind it. Sometimes behavior-focused response is sufficient.

6. **Acknowledge uncertainty**. "We assess with medium confidence" is more credible than false certainty. Your credibility depends on matching claims to evidence.

---

## Test Your Understanding

**Scenario**: A network promotes conspiracy theories about energy policy. Investigation shows:

1. Core accounts run by genuine believers with years of activism history
2. Sudden funding increase from foundation with unclear ownership
3. Professional ad campaign begins
4. Content starts aligning with foreign state energy interests
5. Activity synchronized with state diplomatic initiatives

**Questions**:

1. What actor type(s) are most likely operating?
2. What's your confidence level for each, and why?
3. What two pieces of evidence would most increase confidence in state direction?
4. What response is appropriate given current evidence level?

### Model response approach:

**Actor assessment**: Multiple actor types likely present:
- **Ideological activists**: Medium-high confidence. Years of genuine activism history is strong evidence of authentic movement.
- **Possible proxy relationship**: Low-medium confidence. Funding change + activity synchronization suggests possible state involvement, but doesn't prove direction.
- **State direction**: Low confidence. Synchronization and alignment are suggestive but could be opportunistic (state exploiting existing movement).

**What would increase state direction confidence**:
1. Evidence of communication or tasking from state to foundation to activists
2. Foundation ownership traced to state-connected individuals
3. Activists acknowledging or evidence showing direction (not just funding)
4. Technical evidence linking infrastructure to known state operations

**Appropriate response at current evidence level**:
- Platform action on coordinated inauthentic behavior (ad campaigns from unclear sources)
- Gen 3 prebunking about foreign interest in energy narratives
- Continued investigation of foundation ownership
- Do NOT publicly claim state direction without stronger evidence
- Do NOT treat genuine activists as foreign agents without proof

---

## Common Attribution Errors to Avoid

**Circular reasoning**: "This looks like a Russian operation because it's sophisticated, and Russian operations are sophisticated." You've proven nothing.

**Confirmation bias**: Starting with "this is probably Russia" and interpreting all evidence through that lens. Counter-explain your hypothesis.

**Guilt by association**: "They shared content from Russia Today, therefore they're Russian-directed." Sharing public content isn't evidence of coordination.

**Assuming competence**: "No activist could do this, therefore it's state." Activists can be quite capable. States can be quite incompetent.

**Overclaiming precision**: "We have identified Russian state direction" when you mean "we have identified indicators consistent with Russian state involvement." Precision matters.

**Ignoring alternative explanations**: Failing to seriously consider commercial or activist origins. Attribution requires ruling out alternatives, not just finding signals for your preferred hypothesis.

---

**Penalty for**: Assuming alignment = direction, ignoring activist history, claiming state control without evidence of tasking, circular reasoning, overclaiming certainty

**Reward for**: Acknowledging multiple actor types possible, distinguishing funding from direction, matching response to evidence level, precise language about confidence, identifying what would change assessment"""

# Find and update the module
for i, m in enumerate(data):
    if m.get('id') == 'Module-State-NonState-Actors':
        data[i]['content'] = expanded_content
        data[i]['estimatedTime'] = '35 minutes'
        break

# Write back
with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Module 2 expanded successfully!")
print(f"New content length: {len(expanded_content)} characters")
