---
title: "Network Analysis for Detection"
description: "Using network analysis to identify coordinated behavior, bot networks, and influence operations through social connection patterns."
author: "SAUFEX Consortium"
date: "2026-01-23"
learningPath: "Detection and Verification"
moduleNumber: 4
estimatedTime: "30 minutes"
audiences: ["researchers", "platform-teams"]
---

## Purpose

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

**Reward for**: Considering organic explanations; noting longevity as authenticity signal; triangulating with behavioral questions; appropriate uncertainty