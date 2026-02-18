#!/usr/bin/env python3
"""Update the 4 Overlord-related modules with full screen-by-screen content from saufex.eu insights."""
import json
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / "lib" / "modules-data.json"

with open(DATA_FILE) as f:
    modules = json.load(f)

# =============================================================================
# MODULE 32 – Countering information campaigns (16 screens)
# =============================================================================
MODULE_32_CONTENT = r"""## Overview

This module examines strategies for combating anti-liberal democratic narratives through two primary approaches: incapacitating harmful myths and promoting positive counter-narratives. Often these two go hand in hand.

Key instruments include: strategic communication (StratCom), debunking, information operations, crowdsourced verification, content labeling, content moderation, strategic silence, defamation lawsuits, sanctions, denial of services, and local media support.

## Strategic Communication (StratCom)

**Strategic communication (StratCom)** is a planned effort by public bodies to shape public opinion, reinforce alliances, counter disinformation, and support national security interests through strategic communication.

StratCom aligns with national policies to counter harmful narratives and promote alternatives. It represents an organized, institutional approach to narrative management at the state level.

## Debunking

Debunking aims to correct widespread disinformation campaigns by identifying myths, explaining their falsehoods, often using scientific research and logical reasoning, and providing accurate information with supporting sources.

Its purpose is to systematically dismantle false narratives by replacing them with evidence-based corrections.

## Debunking in Practice

NGOs typically conduct debunking as their primary activity. Public entities, on the other hand, may integrate debunking efforts into broader StratCom strategies rather than issuing isolated corrective statements.

This distinction matters: standalone debunking risks amplifying the original myth, while embedded approaches address the wider narrative context.

## Information Operations

Information operations work tactically to influence the perceptions, behaviors, and decisions of selected target groups.

Key subtypes include:

- **Psychological operations** targeting adversaries' beliefs and decision-making
- **Cyber operations** for communication disruption and information gathering
- **Electronic warfare** involving jamming and network disruption

These are typically state-level interventions requiring significant resources and coordination.

## Crowdsourced Verification

Non-state actors participate through crowdsourced fact-finding projects without centralized organizing bodies.

A prominent example is **Bellingcat**, described as "an independent investigative collective of researchers, investigators, and citizen journalists" that designs verifiable methods for digital investigation.

Crowdsourced verification leverages distributed expertise and open-source intelligence (OSINT) to investigate claims at scale.

## Content Labeling

Warning labels can be applied to content to indicate that it has undergone fact-checking, debunking, or crowdsourced verification, and was found to be false or at least disputed.

Content labeling serves as a passive intervention: it does not remove content but provides contextual information that helps users evaluate what they are seeing. Its effectiveness depends on user attention and trust in the labeling authority.

## Content Moderation

Content moderation involves reviewing, filtering, and managing user-generated content on platforms by human editors or artificial intelligence.

The goal is to remove or restrict access to illegal content, myths, hate speech, and harmful material. It is the primary mechanism through which platforms manage information quality at scale.

## Strategic Silence

An alternative approach involves ignoring information campaigns to reduce amplification. This is based on the assumption that engagement may increase reach and spread.

Strategic silence is most appropriate when the disinformation has limited reach and responding would grant it a larger audience. However, silence carries the risk that unchallenged narratives may gain credibility through repetition.

## Defamation Lawsuits

Legal action can be taken for reputation damage from libelous campaigns.

A notable example: **Alex Jones** faced multiple lawsuits regarding his claims about the Sandy Hook Elementary School shooting, in which he falsely asserted the event was staged. The resulting legal judgments led to his personal bankruptcy, demonstrating that legal consequences can follow the deliberate spread of harmful disinformation.

## Sanctions

Sanctions are used against international actors when domestic legal action is difficult to pursue.

They represent a state-level tool for imposing costs on foreign entities engaged in information manipulation, typically applied through diplomatic channels and international frameworks.

## Denial of Services: Overview

Denial of services encompasses any intervention that limits access to content and content suppliers: from content throttling and access restrictions to deplatforming and prohibition.

These measures range from moderate to radical in their impact on access and expression.

## Moderate Denial of Services

Moderate approaches limit visibility or access without fully removing content:

- **Content throttling / shadow banning** — reducing visibility or reach of content without notification to the creator
- **Access restrictions** — limiting user features or services based on behavior or content violations
- **Geo-blocking** — restricting content based on geographic location
- **Demonetizing** — restricting or disabling revenue streams for content creators

## Radical Denial of Services

More aggressive interventions involve full removal:

- **Account suspension / deplatforming** — temporarily or permanently disabling accounts that persistently spread disinformation
- **Prohibition** — forbidding content publishing through legislation

These measures are more effective at stopping spread but raise significant concerns about free expression and due process.

## Local Media Support

Local media support means bolstering already trusted sources by investing in trusted, high-quality information for people to consume.

While global media trust has been declining, local news sources maintain higher trust levels. Strengthening local journalism creates a foundation of reliable information that makes populations more resilient to disinformation.

## Effectiveness Challenges

Measuring the effectiveness of these interventions remains a significant challenge:

- Most interventions lack a theoretical underpinning
- Hardly any intervention addresses motivated reasoning — the tendency to evaluate information in ways that confirm pre-existing beliefs
- Research concentrates on US populations and adults, limiting generalizability
- Limited knowledge exists about effect longevity — whether interventions produce lasting change or only temporary effects

These gaps mean that practitioners often operate on intuition rather than evidence when selecting and designing counter-campaigns.
"""

# =============================================================================
# MODULE 30 – Two perceptions of honesty (Lewandowsky) (11 screens)
# =============================================================================
MODULE_30_CONTENT = r"""## Opening Question

Why do many voters still see politicians as honest, even when they spread lies?

This specialist module, drawing on the research of Stephan Lewandowsky and colleagues, examines two competing frameworks for understanding political honesty in democratic discourse.

## Accuracy-Based Honesty

The preferred conception of honesty within liberal democracies defines honesty as correspondence between statements and reality.

Honest people's opinions and beliefs are shaped by the external data and facts they take in. Under this model, a statement is honest when it accurately reflects verifiable reality.

## Benefits of the Accuracy Model

Evidence-based debate produces transparent, accountable political discourse. This enables:

- **Informed decision-making** based on shared facts
- **Shared understanding of reality** across different groups
- **Social cohesion** through common ground

When politicians and citizens operate under the accuracy model, political disputes can be settled by reference to evidence rather than assertion.

## Fact-Speaking

Communication based on the "accuracy" version of honesty is called **fact-speaking**.

However, critics characterize this approach as "elitist, exclusive, oppressive, and wrong." This criticism introduces the alternative model: **belief-speaking**.

## Belief-Speaking

Belief-speaking prioritizes a strong relation between what a person says and does. Authenticity and sincerity matter more than factual accuracy.

Under this model, **it's speaking one's mind that counts**. A politician who says what they genuinely think — even if factually incorrect — is perceived as more honest than one who cites accurate statistics but seems calculating or insincere.

## Foundation of Belief-Speaking

Rather than facts, experiences are the basis of reasoning in the belief-speaking model.

Feelings, instincts, personal values, one's gut, common sense, and intuition are seen as honest sources of knowledge. This model privileges lived experience and emotional truth over empirical evidence.

## Balancing Both Approaches

Both approaches serve necessary functions in a healthy democracy:

- **Belief-speaking** ensures that political discourse remains relevant to people's lived experiences and concerns
- **Fact-speaking** provides data and evidence to settle political disputes and come to agreements

A functioning democracy requires both: the emotional engagement of belief-speaking and the grounding in reality of fact-speaking.

## Historical Trend

During the last decades, fact-speaking has been in decline among politicians while belief-speaking is on the rise, together with populism.

Public communication mirrors this elite-driven shift. As political leaders increasingly adopt belief-speaking as their primary mode of communication, the broader public discourse follows.

## Problems with Belief-Speaking Dominance

When belief-speaking dominates, it increasingly detaches politics from observable reality, and individuals from each other.

Proponents of belief-speaking emphasize diversion rather than persuasion. Rather than convincing opponents through evidence, the goal becomes rallying supporters through emotional authenticity and shared identity.

## Democratic Consequences

Rising belief-speaking correlates with democratic backsliding as a result of democratic norm violations by political elites.

This trend enables power grabbing and spreading misleading claims under the guise of authenticity. Politicians who present themselves as "telling it like it is" can violate democratic norms while maintaining an image of honesty.

## Answer to the Opening Question

**Belief-speaking is why many voters still see politicians as honest, even when they spread lies.**

Voters evaluate authenticity rather than accuracy. Politicians who position themselves as wronged outsiders against corrupted institutions are perceived as honest because they appear to speak from genuine conviction — regardless of whether their claims are factually accurate.

### References

- Areyohun et al. (2024) — Computational analysis of Congressional speeches
- Carrella et al. (2023) — Truth contagion effects in US political debate
- Huttunen & Lewandowsky (2024) — Evolution of truth in political discourse
- Lasser et al. (2023) — Alternative conceptions of honesty among US politicians
- Lewandowsky (2021) — Willful construction of ignorance
- Lewandowsky (2024) — When liars are considered honest
"""

# =============================================================================
# MODULE 29 – Countering information incidents (screens)
# =============================================================================
MODULE_29_CONTENT = r"""## Overview

Effective counteraction means providing credible, pro-liberal democracy information alternatives to mis- and disinformation. This module focuses on the first level: dealing with individual information incidents.

The goal is defending liberal democracy by protecting individual autonomy, institutional integrity, and democratic processes.

## Fact-Checking: Definition

**Fact-checking** is the use of an evidence-based method to verify the accuracy of claims made in the public sphere (European Fact-Checking Standards Network / EFCSN).

It represents the foundational tool for countering individual false claims at the information incident level.

## The Fact-Checking Process

At the information incident level, fact-checking targets individual, verifiable false claims that reinforce anti-democratic biases. The process involves five sequential steps:

- **Identification** — selecting claims worthy of verification
- **Source verification** — tracing claims to their origin
- **Contextual examination** — understanding the circumstances surrounding the claim
- **Comparison against existing knowledge** — checking against established facts
- **Logical assessment** — evaluating internal consistency and reasoning

## Standards for Fact-Checkers

Four essential practices are required for credible fact-checking:

- Demonstrate **transparency regarding methodology** — explain how conclusions are reached
- Provide **multiple source materials** enabling verification by others
- Require **editorial review** independent of the original author
- Present conclusions using **precise, factual and non-emotive language**, while taking care not to overstate conclusions

These standards ensure that fact-checking itself remains accountable and trustworthy.

## Support Mechanisms

Two approaches strengthen fact-checking effectiveness:

**Authority endorsement:** Authority figures can reinforce fact-checking conclusions, though their influence may remain limited to specific audiences who already trust them.

**Social validation:** Peer endorsement of corrections can make dissent from established facts socially costly. When a critical mass of people accept a correction, continuing to spread the original false claim becomes reputationally risky.

## Challenge: Asymmetric Effort

A fundamental challenge in fact-checking is the asymmetric effort burden.

False claim creation requires minimal time and expense — a single social media post can reach millions. Verification, however, demands substantial resources: research time, expert consultation, evidence gathering, and careful editorial processes.

This asymmetry means fact-checkers can never keep pace with the volume of false claims produced.

## Challenge: Reactive Nature

Fact-checking typically responds after initial misinformation has already spread, which limits damage mitigation.

By the time a fact-check is published, the original false claim may have been seen, shared, and internalized by a large audience. The correction must then compete with the established false narrative — and research shows that initial impressions are difficult to fully override.

## Challenge: Limited Reach and Scope

Two additional limitations constrain fact-checking effectiveness:

**Limited reach:** Fact-checks frequently fail to connect with target populations. Those most susceptible to a false claim may never encounter the correction, or may dismiss it as biased.

**Scope limitations:** The approach inadequately addresses elaborate, values-based disinformation campaigns. Fact-checking works best on discrete, verifiable claims — but many disinformation efforts operate through broader narratives, emotional appeals, and identity-based messaging that cannot be simply "fact-checked."

## Contemporary Criticism

Inspired by Trump and Musk, critics characterize fact-checking interventions as politically biased and censorious.

They argue such efforts undermine democratic discourse by constraining free expression — which, in their view, includes emotional responses, instincts, personal convictions, and common sense reasoning. This criticism connects to the broader debate about fact-speaking versus belief-speaking.

## Concluding Perspective

Fact-checking functions either as a reserved moral obligation for high-priority cases, or as one element within comprehensive counter-disinformation strategies.

Practitioners must remain vigilant against perceptions of bias or democratic interference. The most effective approach combines fact-checking with other interventions — strategic communication, media literacy, and community resilience — rather than relying on it as a standalone solution.
"""

# =============================================================================
# MODULE 91 – Learning path: Demand side (many screens for 4 sub-modules)
# =============================================================================
MODULE_91_CONTENT = r"""## Overview

This learning path examines how outrageous beliefs form, persist, and can be countered across six interconnected levels of analysis.

It consists of four modules:

- **Module 1:** Outrageous Beliefs — Four types of beliefs, only one of which is disinformation
- **Module 2:** How Beliefs Form — Six levels of belief formation
- **Module 3:** Sustaining Beliefs — How beliefs persist at each level
- **Module 4:** Countering Beliefs — Interventions at each level

## Module 1: Outrageous Beliefs

People hold beliefs that seem irrational to observers but feel entirely normal to believers. Four major belief types exist, with only one constituting disinformation.

Understanding these distinctions is essential: different types of beliefs require fundamentally different responses.

## Type 1: Individual Intuitive Belief

**Example: Ted Kaczynski (the Unabomber)**

*"The Industrial Revolution and its consequences have been a disaster for the human race... There is no way of reforming or modifying the system."*

This is an individual belief that motivates behavior. Not all such beliefs are destructive — some inspire scientific achievement and social progress. The belief is generated internally through personal reasoning and experience.

## Type 2: External Intuitive Belief

**Example: "Pizzagate" conspiracy theory**

*"Everyone associated with [Comet Ping Pong] is making... inferences towards sex with minors."*

This belief originated from a Reddit message claiming US Democrats were pedophiles operating from a pizza parlor. It had real consequences: Edgar Maddison Welch fired shots at the establishment. Welch later commented: *"I just wanted to do some good and went about it the wrong way."*

This is an external belief — originating from outside the individual — that motivates action.

## Type 3: External Reflective Belief

**Example: Believers in "Pizzagate" who took no action**

Thousands maintained this belief passively, without it motivating any consequential behavior. This type draws on Dan Sperber's distinction between intuitive and reflective beliefs.

External reflective beliefs are held intellectually but do not drive behavior in the way that intuitive beliefs do.

## Type 4: Disinformation (False Instrumental Belief)

**Example: Alex Jones and Sandy Hook shooting claims**

Jones claimed the shooting was "completely fake with actors" and that "no one actually died." In reality, 26 people were killed. Jones's goal was financial gain through audience engagement. He later admitted the shooting occurred.

**This is the only outrageous belief type that constitutes disinformation.** The distinguishing feature is that the spreader knows the claim is false and uses it instrumentally for personal gain.

## Module 2: How Beliefs Form

Beliefs develop through six levels. Individual experiences and social group membership shape them at every stage.

## Level 1: Information Incidents

The brain recognizes causal patterns from noise.

Journalist David McRaney explains: *"For brains, everything is noise at first."* Our unconscious minds recognize causal patterns, formulating and testing predictions about how the world works. This is the most basic level of belief formation — the brain extracting signal from noise.

## Level 2: Information Campaigns

Broader belief systems emerge from accumulated experiences.

Everyone experiences different situations, which leads to different beliefs. Our own beliefs feel normal to us, making it difficult to understand others' perspectives. At this level, the brain creates a predictable order from the accumulated noise of many information incidents.

## Level 3: Rationality

Brain modularity creates inconsistency.

Evolutionary psychologist Robert Kurzban explains: *"[Brain] modules... can simultaneously hold different, mutually contradictory views."* The brain contains multiple modules with different functions that often work independently and maintain separate views. This inconsistency threatens social standing through the risk of ostracism.

## Level 4: Meta-cognition

Beliefs are generated moment-by-moment through improvisation.

Behavioral scientist Nick Chater argues: *"Our brains are... relentless and compelling improvisers, creating the mind, moment by moment."* Chater rejects the idea of an inner world with pre-formed beliefs. Instead, *"we generate our beliefs... in-the-moment."* Past experiences inform but are creatively reinterpreted, leading to continuous self-reinvention.

## Level 5: Prophylactics

Our beliefs are interdependent with others' beliefs.

Cognitive scientists Steven Sloman and Philip Fernbach observe: *"[P]eople are surprisingly ignorant, more ignorant than they think."* Our brains are too limited for justified beliefs about complex dynamics, so we adopt others' beliefs to fill knowledge gaps. We do not recognize our belief dependence on others, and this creates a reinforcement cycle where our beliefs and others' beliefs continuously strengthen each other.

## Level 6: (De-)radicalisation

Group membership shapes identity and beliefs.

Psychologists Jay Van Bavel and Dominic Packer write: *"[T]he groups people belong to are often fundamental to their... understanding of who they are."* We hold multiple group memberships, and each group triggers a distinct social identity. Each identity profoundly influences perception and how we interpret the world.

## Module 3: Sustaining Beliefs

This module examines how beliefs persist at each of the six levels. Understanding sustainability mechanisms is essential for designing effective counter-interventions.

## Sustaining at Level 1: Confirmation Bias

Failed causal predictions threaten identities. The response is to accept confirming information and resist disproving information.

This is **confirmation bias** — the tendency to sustain existing beliefs and identities by selectively processing information that supports what we already believe.

## Sustaining at Level 2: Naive Realism

We perceive our own beliefs as normal and unbiased (because they are rooted in our experience), while perceiving others' beliefs as abnormal and biased.

This is the **naive realism bias**: thinking our beliefs are objective while others' are subjective. It makes us resistant to considering that our own perspective may be limited or wrong.

## Sustaining at Level 3: Consistency Pressure

We need to appear consistent to avoid ostracism. Our public beliefs are held hostage by consistency requirements — though we only need to be as consistent as others notice and hold us accountable.

A legal consequence: disinformation spreaders must appear to believe their false claims. As long as this hypocrisy holds, they enjoy legal protection under free expression rights.

## Sustaining at Level 4: Confabulation

Our task is to make our thoughts and behavior seem coherent to others. When we are caught being incoherent, improvisation turns into **confabulation**.

According to Chater, all our explanations of world dynamics and act justifications are confabulations — generated on-the-spot yet feeling like deep, considered beliefs.

## Sustaining at Level 5: Peer Group Interdependence

Our peer groups consist of people with similar experiences and beliefs (though superficial reasons may suffice for group membership). Peer beliefs are heavily intertwined with our individual beliefs.

Critically, **belief change is social, not individual**. Discarding beliefs means forsaking communities and betraying trusted loved ones — a cost that deters change even when evidence warrants it.

## Sustaining at Level 6: Polarisation and Sacred Truths

We prefer in-group peers and beliefs but are not automatically opposed to out-group people and beliefs. However, **polarisation** changes this: it triggers a shift where "we" are seen as inherently good and "they" as inherently bad.

This creates **sacred truths** that cannot be abandoned or compromised. In-group members are bound to conformity, fueled by grandstanding — peers using moral talk for self-promotion.

## Module 4: Countering Beliefs

This module presents interventions at each of the six levels, building on the formation and sustaining mechanisms described above.

## Countering at Level 1: Scientific Evidence

**Intervention:** Provide objective, testable information to undermine confirmation biases.

Scientific evidence confronts mental shortcut limitations, allowing individuals to revise or abandon flawed patterns and beliefs. The key is presenting evidence in ways that make it difficult to dismiss.

## Countering at Level 2: Authoritative Narratives

**Intervention:** Introduce authoritative narratives and block false narratives.

This encourages reassessment of beliefs by challenging naive realism reinforcement and disrupting the flow of bias-confirming information. The goal is to replace false narratives with credible alternatives.

## Countering at Level 3: Critical Thinking

**Intervention:** Develop logical and critical thinking using System 2 (deliberative thinking).

Drawing on Kahneman's framework, the goal is to move beyond intuitive, automatic responses (System 1) and scrutinize beliefs carefully. This can uncover contradictions between semi-autonomous brain module beliefs.

Key skills include learning to analyze, evaluate, and interpret encountered information — identifying misinformation, evaluating perspectives, questioning assumptions, analyzing arguments, and self-reflecting.

## Countering at Level 4: Technique Rebuttal

**Intervention:** Practice reflective thinking — thinking about thinking.

The process involves reflecting on one's own reasoning to understand how conclusions were reached, and whether that reasoning was sound. This helps identify when the brain's improvisations were actually confabulations.

## Countering at Level 5: Satisfying Basic Needs

**Intervention:** Satisfy all basic needs — belonging, autonomy, achievement, and safety.

By satisfying needs beyond just belonging, individuals develop increased resilience. This resilience allows them to feel more secure, separate their identity from their beliefs, avoid identity crises when experiencing doubt, and gain the confidence and humility needed for rethinking and unlearning.

## Countering at Level 6: Group Diversification

**Intervention:** Encourage diverse group memberships.

When personal beliefs diverge from a radicalized group's views, individuals can choose to voice disagreement (if the group is worth saving) or leave. Because they belong to multiple groups, leaving one is possible without total social isolation.

Alternative, less polarized groups ease distancing from radicalizing groups and rigid, moralistic beliefs.

## Summary: Four Types of Outrageous Beliefs

- **Type 1:** Individual intuitive belief — internally generated, motivates behavior
- **Type 2:** External intuitive belief — externally generated, motivates behavior
- **Type 3:** External reflective belief — externally generated, minimal behavioral impact
- **Type 4:** False instrumental belief (disinformation) — known to be false, used for personal gain

**Only Type 4 constitutes true disinformation.** The other types are misinformation or non-harmful beliefs.

## Summary: The Six-Level Framework

The six levels of belief formation, sustainability, and countering:

- **Level 1 — Information Incidents:** Formation through pattern recognition; sustained by confirmation bias; countered by scientific evidence
- **Level 2 — Information Campaigns:** Formation through accumulated experience; sustained by naive realism; countered by authoritative narratives
- **Level 3 — Rationality:** Formation through brain modularity; sustained by consistency pressure; countered by critical thinking
- **Level 4 — Meta-cognition:** Formation through improvisation; sustained by confabulation; countered by technique rebuttal
- **Level 5 — Prophylactics:** Formation through belief borrowing; sustained by peer interdependence; countered by satisfying basic needs
- **Level 6 — (De-)radicalisation:** Formation through group identity; sustained by polarisation; countered by group diversification

## Selected Literature

- Chater, N. (2018). *The mind is flat. The illusion of mental depth and the improvised mind.* Allen Lane.
- Kahneman, D. (2011). *Thinking, fast and slow.* Penguin Books.
- Kurzban, R. (2010). *Why everyone (else) is a hypocrite. Evolution and the modular mind.* Princeton University Press.
- McRaney, D. (2022). *How minds change. The surprising science of belief, opinion, and persuasion.* Portfolio Penguin.
- Mercier, H. (2020). *Not born yesterday. The science of who we trust and what we believe.* Princeton University Press.
- Sperber, D. (1997). *Intuitive and reflective beliefs.* Sperber.fr.
- Van Bavel, J. & Packer, D. (2021). *The power of us. Harnessing our shared identities for personal and collective success.* Wildfire.
"""


# =============================================================================
# Apply updates
# =============================================================================
UPDATES = {
    "32-Module-Countering-information-campaigns": {
        "content": MODULE_32_CONTENT.strip(),
        "estimatedTime": "10 minutes",
        "description": "Strategies for combating anti-liberal democratic narratives through incapacitating harmful myths and promoting positive counter-narratives. Covers StratCom, debunking, information operations, crowdsourced verification, content labeling, content moderation, strategic silence, legal and economic measures, and local media support.",
    },
    "30-Specialist-module-Two-perceptions-of-honesty-Lewandowsky": {
        "content": MODULE_30_CONTENT.strip(),
        "estimatedTime": "10 minutes",
        "description": "Examining two competing frameworks for understanding political honesty in democratic discourse — accuracy-based fact-speaking versus authenticity-based belief-speaking — drawing on research by Stephan Lewandowsky and colleagues.",
    },
    "29-Module-Countering-information-incidents": {
        "content": MODULE_29_CONTENT.strip(),
        "estimatedTime": "8 minutes",
        "description": "How to protect liberal democracy by countering misinformation through evidence-based interventions, particularly fact-checking methodologies. Covers the five-step process, professional standards, support mechanisms, and challenges.",
    },
    "91-Learning-path-Demand-side": {
        "content": MODULE_91_CONTENT.strip(),
        "estimatedTime": "20 minutes",
        "description": "A comprehensive learning path examining how outrageous beliefs form, persist, and can be countered across six interconnected levels of analysis. Covers four modules: Outrageous Beliefs, How Beliefs Form, Sustaining Beliefs, and Countering Beliefs.",
    },
}

updated = 0
for module in modules:
    mid = module.get("id") or module.get("slug")
    if mid in UPDATES:
        for key, val in UPDATES[mid].items():
            module[key] = val
        # Count sections
        sections = [l for l in module["content"].split('\n') if l.startswith('## ')]
        print(f"Updated {mid}: {len(sections)} sections, {len(module['content'])} chars")
        updated += 1

if updated != 4:
    print(f"WARNING: Expected 4 updates, got {updated}")
else:
    print(f"All 4 modules updated successfully")

with open(DATA_FILE, 'w') as f:
    json.dump(modules, f, indent=2, ensure_ascii=False)

print(f"Saved to {DATA_FILE}")
