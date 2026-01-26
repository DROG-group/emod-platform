#!/usr/bin/env python3
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# Module 3: Behavioral Analysis for Detection
module3_content = """## Purpose

You'll learn to analyze behavioral patterns that distinguish authentic human activity from coordinated or automated manipulation—without falling into the trap of treating unusual behavior as automatically suspicious.

---

## Why Behavioral Analysis Matters

Technical forensics examines the artifacts of content creation. Behavioral analysis examines how accounts act over time. This includes posting patterns, engagement behaviors, network interactions, and activity consistency.

Behavioral signals are often more reliable than technical signals because:
- Authentic human behavior has consistent characteristics
- Automated or coordinated behavior often fails to replicate natural patterns
- Behavioral patterns persist even when content is carefully crafted
- Scale makes behavioral analysis more effective (patterns emerge across many accounts)

**But behavioral analysis has its own traps**:
- Unusual behavior isn't necessarily inauthentic
- Different cultures, contexts, and use cases produce different "normal" patterns
- Sophisticated actors can mimic authentic behavior
- Statistical patterns can be misinterpreted

This module teaches you to use behavioral analysis as one tool in your detection toolkit—not as a definitive indicator.

---

## Scenario

Your monitoring identifies a network of accounts amplifying a political narrative. The accounts post similar content and engage heavily with each other. Your question: Organic community of like-minded users, or coordinated inauthentic network?

**You have**:
- **Time available**: 4 hours for behavioral analysis
- **Stakes**: Misidentifying organic community as inauthentic silences legitimate speech; missing actual coordination fails to protect information space
- **Data access**: Platform UI, account posting histories, engagement data, no API access
- **Constraint**: Cannot see private communications or definitively prove coordination

---

## Task

Produce three outputs:

1. **Behavioral assessment**: What patterns suggest authenticity or inauthenticity?
2. **Confidence level**: Low / Medium / High
3. **Recommendation**: Coordinated network, organic community, or unclear?

---

## Understanding Behavioral Indicators

### Temporal Patterns

**Posting timing**:
Authentic users post based on their personal schedules, work/sleep cycles, and local time zones. Patterns to examine:

- Activity distribution across hours of the day
- Consistency with claimed location timezone
- Sleep gaps (most humans sleep)
- Weekend vs. weekday patterns
- Response to breaking events (authentic users react to their world)

**Coordination signatures**:
- Multiple accounts posting within seconds of each other
- Synchronized posting at unusual times
- Activity spikes without external trigger
- Consistent posting schedules across "different" accounts

**Weak signals**:
- Unusual hours (night shift workers exist)
- Consistent schedules (routine users exist)
- Similar timing (communities share news simultaneously)

### Engagement Patterns

**Authentic engagement characteristics**:
- Varied interactions (likes, shares, replies, original content)
- Engagement with diverse accounts
- Reciprocal relationships that develop over time
- Proportional engagement to follower count
- Topical consistency with apparent interests

**Suspicious engagement characteristics**:
- Primarily amplification (retweets/shares) with little original content
- Engagement concentrated within a small network
- Asymmetric relationships (accounts follow/engage with each other without external engagement)
- Engagement volume disproportionate to follower count
- Engagement on topics inconsistent with account history

**What to measure**:
- Original content vs. amplification ratio
- Network of accounts engaged with
- Reciprocity of engagement
- Topic consistency over time
- Engagement timing relative to original posts

### Account Lifecycle Patterns

**Authentic account characteristics**:
- Gradual follower growth
- Evolving interests and engagement over time
- History of diverse activity
- Consistent persona development
- Natural gaps in activity

**Suspicious account characteristics**:
- Sudden activation after dormancy
- Follower count inconsistent with engagement
- Rapid pivot to coordinated topics
- Account creation clustering around campaign start
- No pre-campaign history or generic pre-campaign activity

**What to examine**:
- Account age vs. activity history
- Follower growth trajectory
- Topic evolution over account lifetime
- Gaps and patterns in activity history

### Content Production Patterns

**Authentic content characteristics**:
- Personal voice and style
- Errors and corrections
- Topical variety (people have multiple interests)
- Context-appropriate tone
- Evolution of views over time

**Suspicious content characteristics**:
- Template-like posts with slight variations
- Consistent formatting across "different" accounts
- Topic focus without personal context
- Identical errors across accounts (copy-paste traces)
- Lack of personality or individual voice

---

## Method: Behavioral Analysis Workflow

### Step 1: Define your comparison baseline

Before analyzing target accounts, understand what "normal" looks like:

- What are typical posting patterns for this platform?
- What are typical engagement patterns for accounts of this size?
- What does authentic community behavior look like on this topic?
- What are known patterns of manipulation on this platform?

Without baseline understanding, you can't distinguish unusual from suspicious.

### Step 2: Sample and scope

For a network of accounts:
- Identify the core accounts most central to the activity
- Sample across the network (not just the most suspicious-looking)
- Determine what data you can access for each account
- Set time boundaries for analysis

Practical constraint: Detailed behavioral analysis is time-intensive. Scope your analysis to what's achievable.

### Step 3: Temporal analysis

For sampled accounts, examine timing:

**Individual account patterns**:
- Plot activity over 24-hour periods
- Identify timezone indicators
- Check for human sleep patterns
- Look for suspiciously consistent schedules

**Cross-account coordination**:
- Compare posting times across accounts
- Look for simultaneous or near-simultaneous activity
- Check if coordination occurs on specific content types
- Examine reaction timing to external events

**Assessment**:
- High coordination: Multiple accounts posting within seconds, consistently
- Medium coordination: Some temporal clustering, but could be organic
- Low coordination: Natural variation in timing

### Step 4: Network analysis

Examine how accounts interact with each other and the broader platform:

**Internal network patterns**:
- Do accounts primarily engage with each other?
- Is there a dense cluster of mutual followers?
- Do certain accounts serve as amplifiers for others?
- How isolated is the network from the broader platform?

**External engagement patterns**:
- Do accounts engage with users outside the suspected network?
- Is engagement with outside users superficial or substantive?
- Do accounts respond to and engage with the broader conversation?

**Assessment**:
- High isolation: Accounts primarily engage within closed network
- Medium isolation: Some external engagement, but network structure visible
- Low isolation: Well-integrated with broader platform community

### Step 5: Content analysis

Examine content patterns across accounts:

**Production patterns**:
- Is content original, copied, or template-based?
- Do accounts have consistent personal voice or generic messaging?
- Are there identical phrases or structures across accounts?
- How does content relate to accounts' stated interests/bios?

**Variation analysis**:
- Do accounts express the same view in diverse ways, or identical ways?
- Is there healthy disagreement within the community, or lockstep agreement?
- Do accounts acknowledge nuance or only push one direction?

### Step 6: Assess and triangulate

No single behavioral indicator is definitive. Strong assessment requires convergence:

**Strong inauthenticity signals** (multiple must converge):
- Temporal coordination (within-seconds posting)
- Network isolation (accounts primarily engage with each other)
- Template content (identical or near-identical across accounts)
- Lifecycle anomalies (bulk creation, sudden activation)
- Engagement impossibilities (faster than human response time)

**Medium signals**:
- Some temporal clustering without perfect coordination
- Partial network isolation
- Similar but not identical content
- Unusual but not impossible account patterns

**Context that reduces suspicion**:
- Real-world community with documented offline existence
- Accounts with long, varied histories before campaign
- Substantive engagement with broader platform
- Natural variation in views and expression

---

## Evidence Ladder

### Strong signals (coordinated inauthenticity likely):

- Posting coordination within seconds across multiple accounts
- Account creation clustering around campaign start
- Network isolation: accounts engage primarily with each other
- Template content with minor variations across accounts
- 24/7 activity impossible for humans
- Identical engagement patterns across supposedly different users
- Sudden pivot from dormancy to coordinated activity

### Medium signals (investigate further):

- Temporal clustering (same hour, not same second)
- Higher-than-typical new account proportion
- Dense internal connections within network
- Similar messaging without exact duplication
- Engagement concentrated on specific topics only
- Account histories that seem shallow

### Weak signals (insufficient alone):

- Similar views (communities share views)
- Use of common hashtags (movements coordinate hashtags)
- High posting volume (activists post frequently)
- New accounts participating (elections create new users)
- Emotional content (genuine outrage exists)
- Coordinated timing on breaking news (authentic response)

---

## Stop Rules

Stop behavioral analysis when:

### Timebox reached
Your 4 hours are up. Report findings at current evidence level.

### Convergence achieved
Multiple strong signals converge—you have sufficient evidence for assessment.

### Organic explanation clear
Community has documented offline existence, long histories, and natural variation—organic.

### Evidence plateau
Additional analysis yields no new information—you've extracted available behavioral data.

### Access limits reached
You need API data or internal platform data you can't access.

---

## DIM Mapping

### Strong inauthenticity signals:

**Gen 4 (Moderation)**: Report to platform with behavioral evidence documentation. Request investigation of coordinated inauthentic behavior.

**Gen 5 (Interaction)**: Request reduced amplification while platform investigates.

### Medium signals:

**Continue investigation**: Gather more evidence before reporting.

**Gen 3 (Prebunking)**: General awareness about manipulation tactics without claiming this specific network is confirmed inauthentic.

**Monitor**: Track network evolution for additional signals.

### Organic assessment:

**No intervention based on inauthenticity claims**: Treat as legitimate community even if you disagree with their views.

**Standard engagement**: Respond to content substance if warranted.

---

## Key Takeaways

1. **Behavioral analysis requires baseline understanding**. You can't identify unusual without knowing normal.

2. **Multiple signals must converge**. No single behavioral indicator is definitive.

3. **Organic communities can look coordinated**. Movements develop shared language, coordinated actions, and dense networks legitimately.

4. **Sophisticated actors can mimic authentic behavior**. High behavioral authenticity doesn't prove organic origin.

5. **Context matters**. A pattern suspicious in one context may be normal in another.

6. **Document your reasoning**. Others should be able to follow your analysis and challenge your conclusions.

---

## Test Your Understanding

**Scenario**: A network of 50 accounts promotes anti-immigration narratives. Accounts engage heavily with each other. 30% were created in the last 6 months. Content is similar but not identical. Posting times cluster in morning hours (local time). Several accounts have documented histories of conservative activism going back years.

**Questions**:
1. What behavioral signals suggest inauthenticity?
2. What behavioral signals suggest authenticity?
3. What additional information would help your assessment?
4. What's your preliminary assessment and confidence level?

### Model response approach:

**Inauthenticity signals**:
- Dense internal engagement (but organic communities also have this)
- Elevated new account proportion (30% in 6 months is notable)
- Similar content (but movements share messaging)

**Authenticity signals**:
- Accounts with long documented activist histories
- Posting times consistent with timezone (natural)
- Content variation (not template-identical)
- Morning hours are when people actually post

**Additional helpful information**:
- Do the long-history accounts have continuous activity, or suspicious gaps?
- Do new accounts have other interests, or only this topic?
- Is there within-second posting coordination, or just similar hours?
- Does the network engage substantively with outside users?

**Preliminary assessment**: Unclear, confidence: Low-Medium

The presence of accounts with long activist histories suggests organic community base. Elevated new account proportion warrants attention but could reflect genuine movement growth. Without temporal coordination evidence (seconds-level) or template content, this could be organic community with some new participants. More investigation needed before concluding inauthenticity.

---

**Penalty for**: Treating community coordination as proof of inauthenticity; ignoring accounts with long authentic histories; relying on single behavioral indicator

**Reward for**: Triangulating multiple signals; considering organic explanation; acknowledging long-history accounts as authenticity evidence; honest uncertainty"""

# Module 4: Network Analysis for Detection
module4_content = """## Purpose

You'll learn to use network analysis to identify coordinated behavior and influence operations—while understanding that dense networks aren't automatically suspicious and that network structure alone doesn't prove inauthenticity.

---

## What Network Analysis Reveals

Network analysis examines relationships and connections: who follows whom, who engages with whom, who shares whose content. This can reveal:

- Coordinated clusters operating together
- Amplification networks designed to boost specific content
- Information flow patterns showing how narratives spread
- Relationships between accounts that may not be obvious from content alone

**The power of network analysis**:
- Reveals structure that individual account analysis misses
- Identifies coordination even when content is varied
- Shows relationships across platforms and over time
- Scales to large operations that would be impossible to analyze manually

**The limitations of network analysis**:
- Dense networks exist organically (friends, communities, movements)
- Network structure doesn't prove intent or inauthenticity
- Sophisticated actors can create networks that appear organic
- Analysis requires data that may not be publicly available

---

## Scenario

Your team has identified a cluster of accounts that appear connected. They share each other's content frequently and seem to amplify the same narratives. You need to determine: Is this a coordinated network, or an organic community of like-minded users?

**You have**:
- **Time available**: 6 hours for analysis
- **Stakes**: Misidentifying organic community harms legitimate speech; missing coordination fails to detect manipulation
- **Data access**: Public social media data, no API access
- **Constraint**: Cannot see private communications

---

## Task

Produce three outputs:

1. **Network assessment**: What network characteristics suggest coordination or organic community?
2. **Confidence level**: Low / Medium / High
3. **Recommendation**: Coordinated network, organic community, or unclear?

---

## Network Analysis Concepts

### Network Structure Types

**Organic community network**:
- Multiple connection hubs (influencers within the community)
- Connections to the broader platform
- Gradual growth over time
- Varying connection strengths
- Natural clustering around shared interests

**Coordinated network signatures**:
- Dense mutual connections (everyone follows everyone)
- Limited external connections
- Rapid formation
- Uniform connection patterns
- Central accounts that seed content for amplification

**Amplification network**:
- Asymmetric relationships (many accounts follow/amplify few core accounts)
- Synchronized engagement with target content
- Limited original content production
- Activation patterns around specific campaigns

### Key Network Metrics

**Density**: How connected are accounts to each other?
- High density in a large network is unusual (organic networks are sparser)
- But small communities can be legitimately dense

**Centrality**: Which accounts are most influential/connected?
- Coordinated networks often have clear command accounts
- Organic networks have more distributed influence

**Clustering coefficient**: Do accounts form tight clusters?
- Natural communities have clusters around topics/interests
- Coordinated networks may show artificial clustering

**External connections**: How connected is the network to the broader platform?
- Isolated networks are more suspicious
- But niche communities can be legitimately insular

**Formation timing**: When did connections form?
- Rapid simultaneous connection is suspicious
- Gradual organic growth is normal

---

## Method: Network Analysis Workflow

### Step 1: Define network boundaries

Before analysis, determine:
- What accounts constitute the suspected network?
- What relationship types will you analyze (follows, mentions, shares)?
- What time period will you examine?
- What platforms are involved?

Practical constraint: Without API access, you'll sample rather than comprehensively map.

### Step 2: Map relationships

Document connections between accounts:

**Following relationships**:
- Who follows whom?
- Are relationships mutual?
- When were connections made?

**Engagement relationships**:
- Who shares/retweets/amplifies whom?
- Who mentions/replies to whom?
- What's the frequency of engagement?

**Content relationships**:
- Who posts similar content?
- Who responds to the same events?
- What content gets amplified within the network?

### Step 3: Analyze network structure

**Density assessment**:
- Calculate (or estimate) connection density
- Compare to baseline for networks of this size
- High-density large networks are unusual

**Centrality analysis**:
- Identify most connected accounts
- Do certain accounts seed content for others to amplify?
- Is influence distributed or concentrated?

**External connectivity**:
- What proportion of connections are internal vs. external?
- Do accounts engage substantively outside the network?
- How isolated is the network?

**Temporal analysis**:
- When did accounts connect?
- Did connections form around specific events?
- Is there evidence of rapid coordinated formation?

### Step 4: Compare to baselines

Network characteristics need context:
- What does an organic community of this size look like?
- What do known coordinated networks look like?
- How does this network compare to both?

**Organic community characteristics**:
- Varied connection timing
- External engagement
- Clusters around natural subgroups
- Gradual evolution

**Coordinated network characteristics**:
- Synchronized formation
- Internal focus
- Uniform patterns
- Activation around campaigns

### Step 5: Document and assess

Synthesize your analysis:
- What network characteristics did you observe?
- How do they compare to organic and coordinated baselines?
- What alternative explanations exist?
- What's your confidence level?

---

## Evidence Ladder

### Strong coordination signals:

- Mutual connection density > 80% in network of 50+ accounts
- Connections formed within narrow time window
- Network isolation: < 10% external connections
- Clear hub accounts that seed content for amplification
- Synchronized activation/deactivation patterns
- Previous confirmed coordination involving same accounts

### Medium signals:

- Elevated density relative to network size
- Some connection clustering around specific dates
- Limited external engagement
- Recognizable amplification patterns
- Accounts with similar creation dates

### Weak signals:

- Dense connections (friends and communities are dense)
- Similar posting behavior (movements coordinate messaging)
- Shared content (communities share content)
- Mutual following (normal in communities)

---

## Common Network Analysis Errors

### Density misinterpretation

Small organic communities can be very dense. Fifty people who know each other in real life will have dense online connections. Density is only suspicious at scale with limited external connections.

### Ignoring organic explanations

Before concluding coordination, ask: Could this be a genuine community?
- Activists in the same city
- Members of the same organization
- People who met at the same event
- Long-standing online community

### Over-reliance on structure

Network structure suggests, but doesn't prove, coordination. Even suspicious structures need behavioral and content analysis for confirmation.

### Data availability bias

You can only analyze visible data. Private communications, deleted content, and API-only data may tell a different story.

---

## Key Takeaways

1. **Network structure is suggestive, not conclusive**. Dense networks exist organically.

2. **External connections matter**. Isolation is more suspicious than internal density.

3. **Timing reveals coordination**. Rapid synchronized formation is difficult to explain organically.

4. **Compare to baselines**. You need to know what organic looks like to identify coordinated.

5. **Triangulate with other methods**. Network analysis should complement behavioral and content analysis.

---

## Test Your Understanding

**Scenario**: You identify 100 accounts that amplify the same political content. 80% follow each other. 90% of their retweets are of each other's content. 70% were created in a 3-month period 2 years ago. They occasionally engage with external users, primarily in arguments.

**Questions**:
1. What network characteristics suggest coordination?
2. What characteristics suggest organic community?
3. What's your assessment and confidence level?

### Model response:

**Coordination signals**:
- Very high mutual following (80%)
- Very high internal engagement (90% internal retweets)
- Clustered creation timing (70% in 3 months, 2 years ago)

**Organic signals**:
- Long existence (2 years)
- Some external engagement (even if argumentative)
- Creation timing not recent (established community vs. new campaign)

**Assessment**: Medium confidence in organic community with possible coordinated origin

The network shows signs of initial coordinated creation (clustered account creation) but has operated for 2 years with some external engagement. This could be an organic community that formed around an event 2 years ago, or a coordinated network that has naturalized over time. The 2-year timeframe and external engagement (even argumentative) reduce coordination likelihood. Would need additional evidence (behavioral analysis, account histories pre-campaign) to increase confidence.

---

**Penalty for**: Treating high density as proof of coordination; ignoring 2-year organic activity; relying solely on network structure

**Reward for**: Considering organic explanations; noting longevity as authenticity signal; triangulating with behavioral questions; appropriate uncertainty"""

# Module 5: Content Verification Tools
module5_content = """## Purpose

You'll learn practical tools and techniques for verifying images, videos, claims, and sources—with realistic expectations about what verification can and cannot accomplish.

---

## The Verification Challenge

In an age of sophisticated manipulation, content verification has become essential. But it's also become more difficult:

- AI-generated content is increasingly convincing
- Deceptive content spreads faster than verification
- Many claims are true but misleading
- Context manipulation (real content, false framing) is common
- Verification resources are limited relative to content volume

This module covers practical verification tools and methods, with honest assessment of their capabilities and limitations.

---

## Scenario

A video circulates claiming to show a protest incident. The video appears authentic, but the context claimed around it seems suspicious. You need to verify: Is this what it claims to be?

**You have**:
- **Time available**: 1 hour
- **Stakes**: Sharing unverified content damages credibility; questioning authentic content unfairly undermines legitimate documentation
- **Data access**: The video, internet search tools, verification platforms
- **Constraint**: Cannot contact people in the video

---

## Task

Produce three outputs:

1. **Verification assessment**: Is this video what it claims to be?
2. **Confidence level**: Low / Medium / High
3. **Recommendation**: Share, don't share, or share with caveats?

---

## Verification Tool Categories

### Reverse Image/Video Search

**What it does**: Finds other instances of media online.

**Tools**:
- Google Images reverse search
- TinEye
- Yandex Images (often finds images Google misses)
- InVID (video keyframe extraction and search)

**What it can reveal**:
- Media appeared in different context earlier
- Original source of the media
- How media has been shared and modified

**Limitations**:
- Cropping, flipping, or modification may evade matching
- Recent content may not be indexed
- Doesn't work on AI-generated content with no prior existence

**How to use effectively**:
- Search multiple platforms (Google, Yandex, TinEye)
- Extract keyframes from video for image search
- Try cropping to search specific elements
- Check results carefully—thumbnails can be misleading

### Geolocation

**What it does**: Determines where media was captured.

**Methods**:
- Visible landmarks, signs, architecture
- Sun position and shadows (indicates time and hemisphere)
- Vegetation and climate indicators
- Google Maps, Google Earth, Street View comparison
- Specialized mapping tools

**What it can reveal**:
- Whether location matches claimed location
- Approximate time of day
- Changes from known imagery (before/after)

**Limitations**:
- Requires visible location indicators
- Interior shots often unverifiable
- Locations can be staged or misrepresented

### Chronolocation

**What it does**: Determines when media was captured.

**Methods**:
- Sun and shadow analysis
- Weather verification (did it rain that day?)
- Event correlation (what events were happening?)
- Metadata timestamps (if available)
- Reference to datable elements (posters, vehicles, fashion)

**What it can reveal**:
- Whether timing matches claimed timing
- Sequence of events in multiple videos
- Whether media could have been captured at claimed time

**Limitations**:
- Requires datable elements
- Weather data not always available
- Metadata can be manipulated

### Source Verification

**What it does**: Evaluates the credibility and history of information sources.

**Methods**:
- Account history analysis
- Previous content accuracy
- Source of source (where did they get this?)
- Cross-reference with other sources
- Check for verified status, organizational affiliation

**What it can reveal**:
- Whether source has track record of accuracy or inaccuracy
- Whether source is likely to have firsthand access
- Whether source is who they claim to be

**Limitations**:
- New sources have no track record
- Reliable sources can share unreliable content
- Source compromise (hacked accounts, impersonation)

### Claim Verification

**What it does**: Evaluates whether specific claims are accurate.

**Methods**:
- Primary source checking (does the study/report/document say what's claimed?)
- Statistical verification (are the numbers plausible?)
- Expert consultation
- Cross-referencing multiple sources
- Fact-check database search

**What it can reveal**:
- Whether specific claims are accurate
- What primary sources actually say
- Whether statistics are used correctly

**Limitations**:
- Complex claims require domain expertise
- Some claims are unverifiable
- Partially true claims are challenging

---

## Method: Verification Workflow

### Step 1: Document the claim

Before verifying, clearly document:
- What exactly is being claimed?
- What is the media (image, video, audio)?
- What context is provided?
- Where did you encounter this?

Precise documentation enables systematic verification.

### Step 2: Reverse search first

Your fastest path to verification or debunking:
- Run the media through multiple reverse search tools
- Check if it appeared earlier in different context
- Look for the original version

If reverse search finds earlier appearance with different context, you may have your answer.

### Step 3: Verify location and timing

If reverse search is inconclusive:
- Can you geolocate the media?
- Does the location match the claim?
- Can you chronolocate the media?
- Does the timing match the claim?

Use visible clues and reference materials.

### Step 4: Evaluate the source

Who is sharing this, and are they credible?
- What's their history of accuracy?
- Do they have plausible access to this information?
- Who was the original source?
- How did this spread?

### Step 5: Cross-reference

Can you find corroboration or contradiction?
- What do other sources say about this event?
- Are there other media from the same event?
- What does official/authoritative sources say?
- Has this been fact-checked?

### Step 6: Synthesize assessment

Based on your verification work:
- What can you confirm?
- What can you refute?
- What remains uncertain?
- What would increase confidence?

---

## Evidence Ladder

### Strong verification (high confidence):

- Reverse search shows media in consistent context from credible source
- Geolocation and chronolocation match claimed context
- Multiple independent sources corroborate
- Original source is credible and has firsthand access

### Strong refutation (high confidence):

- Reverse search shows media from different time/place
- Geolocation contradicts claimed location
- Credible sources contradict the claim
- Original media found that shows manipulation

### Medium confidence:

- Partial verification (some elements confirmed, others uncertain)
- Source is credible but cannot be independently verified
- Location or timing probable but not confirmed
- Corroboration exists but from limited sources

### Unable to verify:

- Reverse search yields no results
- Insufficient location/timing indicators
- No corroborating or contradicting sources
- Source credibility unclear

---

## Stop Rules

Stop verification when:

### Timebox reached
Your 1 hour is up. Report what you've verified, what you haven't, and your confidence level.

### Verification achieved
You've confirmed or refuted the claim with high confidence.

### Verification plateau
Additional investigation isn't yielding new information.

### Expertise required
Complex verification requires specialists you don't have access to.

---

## Key Takeaways

1. **Reverse search first**. It's fast and often conclusive.

2. **Context manipulation is common**. Real media with false framing is harder to detect than fabricated media.

3. **Verification is probabilistic**. You increase or decrease confidence; you rarely achieve certainty.

4. **"Unable to verify" is a valid finding**. Don't overclaim.

5. **Tools have limitations**. Understand what each method can and cannot determine.

---

## Test Your Understanding

**Scenario**: A video claims to show police misconduct at a recent protest. Reverse search finds no earlier versions. You geolocate it to the correct city. Weather matches records for the claimed date. Original poster has no previous track record. Official sources haven't commented.

**Questions**:
1. What elements have you verified?
2. What remains unverified?
3. What's your assessment and confidence level?
4. What's your recommendation for sharing?

### Model response:

**Verified**:
- Location is correct city
- Weather is consistent with claimed date
- No evidence of earlier existence in different context

**Unverified**:
- Specific claim about police misconduct (shows an incident, but characterization requires interpretation)
- Exact date and time
- Source credibility (no track record)
- Whether video shows complete context

**Assessment**: Partial verification, Medium confidence

The media appears to be from claimed location and approximate time period. No evidence of fabrication or earlier misuse. However, we cannot verify the characterization of events shown, and source has no track record.

**Recommendation**: "Unverified video appears to show incident at [location]. We have confirmed location and approximate timing but cannot independently verify the characterization of events. Official sources have not commented."

This shares what we know without endorsing claims we haven't verified.

---

**Penalty for**: Claiming verification based on single method; sharing without caveat; treating "not disproven" as "verified"

**Reward for**: Systematic verification process; appropriate uncertainty; clear separation of verified vs. unverified elements; honest communication of limitations"""

# Module 6: Crowdsourced Verification
module6_content = """## Purpose

You'll learn how collective intelligence and open-source investigation communities verify information—including both their remarkable capabilities and their significant limitations.

---

## The Crowdsourced Verification Landscape

Open-source intelligence (OSINT) communities have achieved remarkable verification results:
- Geolocating conflict footage within hours
- Identifying aircraft from fragments
- Tracking movements through social media
- Uncovering deception through collective analysis

But crowdsourced verification also has a dark side:
- Mob misidentification (Boston Marathon bombing)
- Confirmation bias at scale
- Harassment of innocent people
- Information cascade errors

This module teaches you to leverage crowdsourced verification while avoiding its pitfalls.

---

## Scenario

A major news event has occurred. Unverified claims are spreading rapidly. OSINT communities are mobilizing to verify footage and claims. You want to leverage their work but need to assess its reliability.

**You have**:
- **Time available**: Ongoing monitoring
- **Stakes**: Acting on wrong information causes harm; ignoring correct crowdsourced verification misses valuable intelligence
- **Data access**: Social media, OSINT community outputs, news sources
- **Constraint**: Cannot independently verify everything yourself

---

## Task

Produce three outputs:

1. **Assessment framework**: How to evaluate crowdsourced verification?
2. **Reliability indicators**: What makes crowdsourced claims more or less trustworthy?
3. **Integration approach**: How to incorporate crowdsourced verification into your workflow?

---

## Understanding Crowdsourced Verification

### How It Works

**The process**:
1. Event occurs and media spreads
2. Community members apply diverse skills
3. Findings shared and built upon
4. Consensus (or debate) emerges
5. Results propagate to broader audience

**Community strengths**:
- Distributed expertise (linguists, military analysts, geographers)
- Massive parallel processing power
- Diverse perspectives and knowledge
- Real-time operation
- Access to local knowledge

**Community weaknesses**:
- No editorial oversight
- Confirmation bias amplification
- Pressure to publish quickly
- Variable competence levels
- Echo chamber effects

### Notable Successes

Bellingcat and similar groups have:
- Identified MH17 missile launcher origin
- Geolocated countless conflict videos
- Tracked military movements through social media
- Exposed disinformation campaigns
- Identified participants in events from open sources

These successes demonstrate the potential of collaborative verification.

### Notable Failures

Crowdsourced verification has also:
- Misidentified Boston Marathon bombing suspects
- Spread false identifications virally
- Gotten location or timing wrong
- Amplified initial errors before correction
- Harassed innocent people based on false identification

These failures demonstrate the risks.

---

## Evaluating Crowdsourced Verification

### Source Assessment

Not all OSINT sources are equal:

**High reliability indicators**:
- Established track record of accuracy
- Methodology transparency (show your work)
- Willingness to correct errors
- Clear distinction between confirmed and unconfirmed
- Multiple independent verifiers

**Lower reliability indicators**:
- Anonymous without track record
- Claims without methodology shown
- No corrections history visible
- Confident claims without evidence
- Single-source claims amplified without verification

### Claim Assessment

For specific claims:

**Higher confidence warranted**:
- Clear methodology documented
- Multiple independent verifications
- Consistent with other evidence
- Expert consensus within community
- Disputed points acknowledged

**Lower confidence warranted**:
- Methodology unclear or absent
- Single source claim
- Contradicts other evidence
- Minority position in community
- Overconfident claims

### Process Assessment

How the verification occurred matters:

**Stronger process**:
- Evidence gathered before conclusion
- Alternative hypotheses considered
- Errors acknowledged and corrected
- Challenges addressed substantively
- Appropriate uncertainty expressed

**Weaker process**:
- Conclusion reached, then evidence sought
- Alternatives dismissed without consideration
- Errors defended rather than corrected
- Challenges ignored or attacked
- False certainty expressed

---

## Method: Integration Workflow

### Step 1: Identify credible sources

Build a list of OSINT sources with track records:
- Note accuracy history
- Note specialty areas
- Note methodology transparency
- Monitor for quality over time

### Step 2: Track claims carefully

For specific claims:
- Document the original claim
- Note who made it and their credibility
- Track corroboration or contradiction
- Note methodology if provided

### Step 3: Wait for consensus or debate stabilization

Don't act on early claims:
- Initial claims often wrong or incomplete
- Community correction takes time
- Wait for multiple independent verifications
- Note where community disagrees

### Step 4: Assess with appropriate skepticism

Before incorporating crowdsourced verification:
- Is there clear methodology?
- Is there independent corroboration?
- What's the track record of the source?
- What do critics say?
- What uncertainty remains?

### Step 5: Cite appropriately

If using crowdsourced verification:
- Credit specific sources, not "OSINT community" generally
- Note confidence level
- Acknowledge limitations
- Distinguish verified from claimed

---

## Key Takeaways

1. **Crowdsourced verification has real value**. Collective intelligence can verify what individuals cannot.

2. **Not all OSINT is equal**. Assess sources by track record, methodology, and transparency.

3. **Early claims are often wrong**. Wait for community correction and consensus.

4. **Errors spread virally**. Initial misidentification can cause real harm.

5. **Process matters**. How verification occurred affects reliability.

6. **Cite specifically**. Credit sources and acknowledge uncertainty.

---

## Test Your Understanding

**Scenario**: OSINT accounts claim to have geolocated a controversial video to a specific location. One well-known account posts coordinates with satellite imagery comparison. Other accounts retweet and add supporting evidence. Some accounts question the identification, noting a similar-looking location exists nearby.

**Questions**:
1. How would you assess this verification?
2. What would increase your confidence?
3. What would decrease your confidence?
4. How would you use this information?

### Model response:

**Assessment**: Medium confidence pending dispute resolution

The verification comes from established source with methodology shown. Supporting evidence from others strengthens it. However, dispute about alternative location requires resolution before high confidence.

**Increase confidence**:
- Original verifier addresses the alternative location challenge
- Multiple independent verifiers rule out alternative
- Additional evidence distinguishes between locations
- Community reaches consensus after considering alternative

**Decrease confidence**:
- Alternative location challenge not addressed
- Methodology gaps identified
- Track record issues with original source
- Other credible sources dispute identification

**How to use**:
Would note "OSINT sources identify location as [X] based on [methodology]. Some analysts note similar-looking location at [Y]. Verification is ongoing." Would not report as confirmed until dispute resolved.

---

**Penalty for**: Treating OSINT claims as automatically credible; ignoring dispute; overclaiming consensus

**Reward for**: Assessing source credibility; noting methodology; tracking dispute; appropriate uncertainty"""

# Module 7: Professional Fact-Checking
module7_content = """## Purpose

You'll learn how professional fact-checking organizations operate, their methodologies and standards, their impact and limitations, and how to evaluate and use fact-checks appropriately.

---

## Understanding Professional Fact-Checking

Professional fact-checking emerged as a distinct practice in the 2000s and has grown substantially. Organizations like PolitiFact, FactCheck.org, Full Fact, and many others operate in countries worldwide.

**What fact-checkers do**:
- Verify specific claims made by public figures
- Investigate viral misinformation
- Rate claim accuracy using various scales
- Provide context and explanation
- Publish methodology and sources

**What fact-checkers don't do**:
- Check all claims (selection is necessary)
- Guarantee truth (they can be wrong)
- Remain universally trusted (some view them with suspicion)
- Reach everyone (fact-checks have limited reach)

---

## Scenario

A political claim is spreading that seems false. You find fact-checks from multiple organizations reaching similar conclusions. You want to use these fact-checks but need to assess their reliability and understand their limitations.

**You have**:
- **Time available**: 30 minutes
- **Stakes**: Using unreliable fact-checks damages credibility; ignoring reliable fact-checks misses useful verification
- **Data access**: Published fact-checks, fact-checking organization information
- **Constraint**: Cannot independently verify the underlying claim

---

## Task

Produce three outputs:

1. **Fact-check assessment**: How reliable are these fact-checks?
2. **Limitations awareness**: What don't fact-checks tell you?
3. **Usage guidance**: How to use fact-checks appropriately?

---

## Evaluating Fact-Checking Organizations

### Methodology Transparency

Strong fact-checking organizations:
- Publish their methodology
- Explain how they select claims
- Show their sources and evidence
- Describe their rating system
- Have correction policies

Weak indicators:
- Methodology unclear or absent
- Selection criteria unexplained
- Sources not provided
- Rating system arbitrary

### Independence and Funding

Questions to ask:
- Who funds the organization?
- What political or ideological associations exist?
- How do they handle claims across the political spectrum?
- Are they verified by International Fact-Checking Network (IFCN)?

IFCN verification requires:
- Nonpartisanship and fairness
- Transparency of sources
- Transparency of funding and organization
- Transparency of methodology
- Open and honest corrections

### Track Record

Consider:
- History of accuracy
- Handling of errors and corrections
- Balance across political spectrum
- Reputation among other fact-checkers

---

## Evaluating Specific Fact-Checks

### Claim clarity

Good fact-checks:
- State exactly what claim is being checked
- Include context of when/where claim was made
- Don't strawman or steelman the claim

### Evidence quality

Good fact-checks:
- Cite primary sources
- Use multiple sources when possible
- Link to evidence
- Acknowledge limitations

### Rating appropriateness

Assess whether:
- Rating matches the evidence
- Rating scale is consistently applied
- Nuance is captured appropriately
- Context is adequately considered

### Limitation acknowledgment

Good fact-checks:
- Note uncertainty where it exists
- Acknowledge what they couldn't determine
- Distinguish between factual and interpretive claims

---

## Fact-Check Limitations

### Selection bias

Fact-checkers can't check everything. Selection involves judgment about:
- What's important enough to check
- What's checkable
- What their audience cares about

This selection can create distortions even without intent.

### Complexity reduction

Claims exist on a spectrum. Rating systems force simplification:
- "Mostly true" vs. "half true" is subjective
- Context judgments vary
- Some claims resist binary assessment

### Reach limitations

Fact-checks typically reach far fewer people than the original false claim:
- Original claim spreads virally
- Fact-check spreads primarily to those seeking verification
- Those who most need correction often don't see it

### Trust limitations

Fact-checkers face trust challenges:
- Those who disagree with findings distrust fact-checkers
- Fact-checkers are perceived as biased by various groups
- "Fact-checking the fact-checkers" has become a genre

---

## Using Fact-Checks Appropriately

### As one input, not final word

Fact-checks are useful inputs but:
- Check their sources yourself when possible
- Compare across multiple fact-checkers
- Note where fact-checkers disagree
- Maintain appropriate skepticism

### For research and context

Fact-checks are valuable for:
- Understanding claim origins
- Finding primary sources
- Learning context and history
- Identifying related claims

### With appropriate citation

When referencing fact-checks:
- Cite the specific organization
- Note their rating and reasoning
- Acknowledge limitations
- Link to the full fact-check

### Not as debate-enders

Citing a fact-check rarely ends disputes:
- Those who distrust fact-checkers will reject it
- Interpretive disputes persist after factual questions resolved
- "Fact-checked" can trigger defensiveness

---

## Key Takeaways

1. **Fact-checking has real value**. Professional organizations apply rigorous methodology to claim verification.

2. **Not all fact-checkers are equal**. Assess methodology, transparency, and track record.

3. **Fact-checks have limitations**. Selection bias, complexity reduction, limited reach, and trust challenges.

4. **Use fact-checks as inputs**. Verify their sources when possible; don't treat them as infallible.

5. **Reach is limited**. Fact-checks rarely reach those who most need them.

6. **Impact is complex**. Citing fact-checks doesn't necessarily persuade.

---

## Test Your Understanding

**Scenario**: A viral claim has been rated "False" by three IFCN-verified fact-checking organizations. Each shows their methodology and sources. However, supporters of the claim argue the fact-checkers are biased and cite alternative sources that support the claim.

**Questions**:
1. How would you assess the fact-checks' reliability?
2. What would you do with the alternative sources?
3. How would you communicate about this claim?

### Model response:

**Fact-check assessment**: High reliability for methodology; multiple independent organizations reaching same conclusion strengthens confidence. IFCN verification indicates baseline standards met.

**Alternative sources**: Would examine them seriously. Do they meet same evidentiary standards? Are they primary or secondary sources? Do they address the fact-checkers' specific evidence? If alternative sources are weak or don't address the key evidence, that increases confidence in fact-checks. If they raise legitimate challenges, that warrants further investigation.

**Communication**: Would note that multiple fact-checking organizations have rated the claim false based on [specific evidence]. Would acknowledge that some dispute this rating. Would focus on the specific evidence rather than the authority of fact-checkers. Would link to fact-checks for those wanting to evaluate the evidence themselves.

---

**Penalty for**: Treating fact-checks as infallible; dismissing alternative evidence without examination; appealing to authority rather than evidence

**Reward for**: Evaluating fact-checker methodology; examining alternative sources; focusing on evidence; acknowledging limitations"""

# Update all modules
updates = [
    ('Module-Behavioral-Analysis', module3_content, '30 minutes'),
    ('Module-Network-Analysis-Detection', module4_content, '30 minutes'),
    ('Module-Content-Verification-Tools', module5_content, '30 minutes'),
    ('Module-Crowdsourced-Verification', module6_content, '25 minutes'),
    ('Module-Professional-Fact-Checking', module7_content, '25 minutes'),
]

for module_id, content, time in updates:
    for i, m in enumerate(data):
        if m.get('id') == module_id:
            data[i]['content'] = content
            data[i]['estimatedTime'] = time
            print(f"Updated {module_id}: {len(content)} chars")
            break

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("\nAll Detection modules 3-7 expanded successfully!")
