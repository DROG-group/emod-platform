#!/usr/bin/env python3
"""Update the 4 modules with exact verbatim content from saufex.eu insight pages, split into screens."""
import json
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / "lib" / "modules-data.json"

with open(DATA_FILE) as f:
    modules = json.load(f)

# =============================================================================
# MODULE 32 – Countering information campaigns (16 screens)
# Exact text from https://saufex.eu/insights/32-Module-Countering-information-campaigns/
# =============================================================================
MODULE_32_CONTENT = """## Overview

We may use two types of action when countering anti-liberal democratic narratives: incapacitating myths and pushing positive narratives. Often these two go hand in hand.

Key instruments include strategic communication (StratCom), debunking, information operations, crowdsourced verification, content labeling, content moderation, strategic silence, defamation lawsuits, sanctions, denial of services, and local media support.

## StratCom

StratCom is a planned effort by public bodies to shape public opinion, reinforce alliances, counter disinformation, and support national security interests through strategic communication. It focuses on what is communicated, as well as how, when, and why.

StratCom aligns with national policies to counter harmful myths and promote alternative narratives.

## Debunking

Debunking aims to correct widespread disinformation campaigns by identifying myths, explaining their falsehoods, often using scientific research and logical reasoning, and providing accurate information with supporting sources.

## Debunking in practice

Debunking, often carried out by NGOs, can also be performed by public bodies. For maximum impact, public entities sometimes integrate debunking into their broader StratCom efforts rather than issuing isolated statements.

## Info ops

Information operations work tactically to influence the perceptions, behaviors, and decisions of selected target groups.

Psyops try to affect adversaries' beliefs to demoralize or sway their decisions. Cyber operations aim to disrupt communication and spread counter-information. Electronic warfare involves jamming and network disruption.

## Crowdsourced verification

Not only state bodies or NGOs engage in countering information campaigns; the public does too by means of crowdsourced factfinding projects that do not necessarily need a centralized organizing body.

Anyone can use OSINT (open-source intelligence). For instance Bellingcat, an independent investigative collective of researchers, investigators, and citizen journalists, designs and shares verifiable methods for ethical digital investigation.

## Content labeling

Warning labels can be applied to content to indicate that it has undergone fact-checking, debunking, or crowdsourced verification, and was found to be false or at least disputed. These labels help users identify questionable information.

## Content moderation

Content moderation involves reviewing, filtering, and managing user-generated content on platforms by human editors or artificial intelligence. It aims to remove or restrict access to content that violates the law and/or community guidelines, including illegal content, myths, hate speech, and other (potentially) harmful material.

## Strategic silence

Instead of engaging with information campaigns, it can be decided to ignore these, thereby reducing their amplification. The assumption is that engagement \u2013 also negative engagement \u2013 may increase the reach and spread of information campaigns.

## Defamation lawsuits

Legal action can be taken by those whose reputation was damaged by presumed libelous information campaigns.

Famous defamation lawsuits were directed against Alex Jones for spreading false claims about the Sandy Hook Elementary School shooting, leading to Jones's personal bankruptcy and leaving the fate of his Infowars media platform uncertain.

## Sanctions

For international actors it can be difficult to pursue legal actions. This is why sanctions have been imposed on individuals known to have conducted harmful online campaigns.

## Denial of services

Denial of services encompasses any intervention that limits access to content and content suppliers: from content throttling and access restrictions to deplatforming and prohibition. The rationale behind it is to stop myths and publishers of myths from polluting the public discourse.

## Moderate denial of services options

A selection of moderate denial of services options:

- Content throttling/ shadow banning: Reducing the visibility or reach of content.
- Access restrictions: Limiting features or services available to users.
- Geo-blocking: Restricting content access based on geographic location.
- Demonetizing: Restricting or disabling account revenue streams.

## Radical denial of services options

A selection of more radical denial of services options:

- Account suspension/ deplatforming: Temporarily or permanently disabling accounts that violate platform policies.
- Prohibition: Forbidding or making a content publishing service illegal through legislation or legal authority.

## Local media support

Another intervention method is bolstering already trusted sources by investing in trusted, high-quality information for people to consume. Although trust in media globally is on the decline many people still trust their local news sources.

## Effectiveness

It is hard to state anything conclusive about the effectiveness of this type of interventions. Some of the challenges are:

- Most interventions lack a theoretical underpinning;
- Hardly any intervention of this type addresses motivated reasoning;
- Effectiveness research mainly concerns the US and adults;
- Limited knowledge exists about the longevity of effects.
"""

# =============================================================================
# MODULE 30 – Two perceptions of honesty (Lewandowsky) (11 screens)
# Exact text from https://saufex.eu/insights/30-Specialist-module-Two-perceptions-of-honesty-Lewandowsky/
# =============================================================================
MODULE_30_CONTENT = """## Opening question

Why do many voters still see politicians as honest, even when they spread lies?

## Accuracy

In a liberal democracy, the preferred conception of honesty is that of accuracy. Honesty means that a relationship exists between what a person says and what is happening in the world. An honest person's opinions and beliefs are shaped by the external data and facts they take in.

## Benefits of accuracy

Honest people debate by reasoning informed by evidence. This makes politics transparent (because we can see the data that informs what politicians say), accountable, and leads to informed decision-making. Thus, a shared understanding of reality exists, which leads to social cohesion.

## Fact-speaking

Communication based on the 'accuracy' version of honesty is called 'fact-speaking'.

It is seen by some as elitist, exclusive, oppressive, and wrong. Opponents of privileging fact-speaking find value in a different form of honesty called 'belief-speaking'.

## Belief-speaking

Belief-speakers value a strong relation between what a person says and does. For them, authenticity and sincerity are the main ingredients of honesty. Accuracy in terms of data is less important. It's speaking one's mind that counts.

## Foundation of belief-speaking

In this view, it is not facts but experiences that are the basis of reasoning. Feelings, instincts, personal values, one's gut, common sense, and intuition are seen as honest. Honest people are vitally important for speaking about currents that are not seen in the available data, exploring social challenges, and solving them.

## Balancing both

A productive democratic discourse needs both fact-speaking and belief-speaking. While belief-speaking ensures that debates feel relevant for many, fact-speaking provides data and evidence to settle political disputes and come to agreements.

## Historical trend

During the last decades fact-speaking is in decline among politicians while belief-speaking is on the rise, together with populism. The way the general public speaks has followed this trend, influenced by elites and politicians.

## Problems with belief-speaking dominance

Because of its focus on individual truths, belief-speaking increasingly detaches politics from the observable reality, and individuals from each other. Proponents of belief-speaking suppress reasoned and informed discourse and aim to divert, distract, and deflect rather than to persuade.

## Democratic consequences

The increase in belief-speaking is accompanied by democratic backsliding as a result of democratic norm violations by political elites. It opens the door for ignoring democratic traditions, power grabbing, and spreading misleading claims and false information, especially about political opponents.

Belief-speaking is why many voters still see politicians as honest, even when they spread lies. In this mode of thinking it is not about accuracy, it is about authenticity and sincerity. It is about speaking one's mind, especially by wronged outsiders against corrupted institutions of power.

## Literature

- Areyohun, S. et al. (2024) Computational analysis of US Congressional speeches reveals a shift from evidence to intuition.
- Carrella, F. et al. (2023, December 3). The 'Truth Contagion' Effect in the US Political Online Debate.
- Huttunen, K. J. A., & Lewandowsky, S. (2024, October 7). The evolution of truth in political discourse from fact to feeling and its implications for democracy.
- Lasser, J. et al. (2023) From alternative conceptions of honesty to alternative facts in communications by US politicians. Nat Hum Behav 7, 2140\u20132151 (2023).
- Lewandowsky, S. (2021) Willful Construction of Ignorance: A Tale of Two Ontologies. Deliberate ignorance, chapter 7.
- Lewandowsky, S. (2024) When liars are considered honest. Trends in Cognitive Sciences, Volume 28, Issue 5, 383\u2013385.
"""

# =============================================================================
# MODULE 29 – Countering information incidents (9 screens)
# Exact text from https://saufex.eu/insights/29-Module-Countering-information-incidents/
# =============================================================================
MODULE_29_CONTENT = """## Introduction

Countering mis and disinformation is about protecting liberal democracy \u2014 defending both the autonomy and agency of individuals, as well as the institutions and processes that support these.

Effective counteraction involves offering credible, pro-liberal democracy information alternatives to mis and disinformation and/or incapacitating mis and disinformation, across the six levels outlined in the learning path 'Anatomy of mis and disinformation'.

## Fact-checking

One method to protect liberal democracy is by disproving incorrect anti-liberal democratic claims using fact-checking which is defined as: "the use of an evidence-based method to verify the accuracy of claims made in the public sphere" (European Fact-Checking Standards Network/ EFCSN).

## Information incident level - dealing with statements (level 1)

Fact-checking on an information incident level means addressing individual, verifiable mis and disinformation statements that legitimize and empower anti-liberal democratic confirmation biases. It consists of the following steps: identifying, source checking, contextual analysis, comparing with existing knowledge, and logical evaluation.

## Standards for fact-checkers

To be successful fact-checkers need to:

- Be transparent about their methods;
- Provide multiple sources underlying their conclusions so that others can replicate them;
- Have someone other than the author edit the fact check;
- And finally, "[p]resent findings in precise, factual and non-emotive language, while taking care not to overstate conclusions" (EFCSN).

## Support mechanisms

Fact-checking contends with confirmation biases and could thus benefit from added support. Authority figures can offer this, though their influence might be limited to certain groups. Social proof may also be effective: when 'people like you' support the conclusion, dissent may seem to carry a social cost.

## Asymmetric challenge

Fact-checking faces an asymmetric challenge: it is time-consuming and costly while generating false or misleading claims is quick and inexpensive. In the age of synthetic content, it's impossible for fact-checkers to verify everything.

## Other setbacks

Fact-checking suffers from other setbacks: it's reactive, meaning it often cannot fully counteract the initial impact, and it often fails to reach the intended target groups. In addition, it does not effectively address more complex and value-based disinformation campaigns.

## Criticism

Inspired by President Trump and Elon Musk, interventions such as fact-checking are heavily criticized as politically motivated and equalling censorship. According to the critics, fact-checking interferes with the democratic process of letting free speech play out freely with all of its underlying messy feelings, instincts, personal values, gut notions, common sense, and intuitions.

## Conclusion

In conclusion, fact-checking either serves as a moral duty, reserved for priority cases that justify the use of resources, or could function as part of a broader strategy that addresses challenges more comprehensively but it should avoid appearing biased or interfering with freedom of speech.
"""

# =============================================================================
# MODULE 91 – Learning path: Demand side
# Exact text from https://saufex.eu/insights/91-Learning-path-Demand-side/
# =============================================================================
MODULE_91_CONTENT = """## Module: Outrageous beliefs

People are capable of having outrageous beliefs which may seem like madness to us but are completely normal to them. There are four major types of outrageous beliefs.

Not all outrageous beliefs constitute misinformation; only one type of outrageous belief constitutes disinformation.

## Type 1

"The Industrial Revolution and its consequences have been a disaster for the human race. /\u2026/ There is no way of reforming or modifying the system." Meet Ted Kaczynski, better known as the Unabomber: math professor turned domestic terrorist.

Kaczynski's belief represents outrageous belief type one: an individual belief that is 'intuitive': it motivates behavior.

Not all intuitive outrageous beliefs are destructive. Some of the finest scientists were motivated by it.

## Type 2

"Everyone associated with [Comet Ping Pong] is making /\u2026/ inferences towards sex with minors." A now-deleted Reddit message started a conspiracy theory, 'pizza gate', claiming high-ranking US Democrats were pedophiles working from a pizza parlor, Comet Ping Pong.

Edgar Maddison Welch drove to the pizza parlor and fired three shots. Welch represents outrageous belief type two: an external, intuitive belief. Welch's commented: "I just wanted to do some good and went about it the wrong way."

## Type 3

While Welch and others acted on their belief in 'pizza gate', many did not. They continued their lives as if nothing disturbing was happening even though they believed the conspiracy theory to be true.

The thousands are examples of outrageous belief type three: an external belief that is reflective. This outrageous belief type has little or no consequences for a person's behavior.

The distinction between 'intuitive' and 'reflective' beliefs stems from the writings of Dan Sperber.

## Type 4

"I've been saying the last few months, get ready for big mass shootings, and then magically, it happens." Meet Alex Jones who claimed that a mass shooting at the Sandy Hook Elementary School, in which 26 people were killed, was "completely fake with actors" and that no one actually died.

Jones represents outrageous belief type four, disinformation: a false belief as a means to a goal, in Jones's case financial gain.

Jones at some point admitted that he believed the Sandy Hook shooting did occur.

## Module: How beliefs form

Our beliefs are shaped on an individual level by our life experiences and on a social level by the groups that we are members of.

## Level 1 \u2013 Information incidents

"For brains, everything is noise at first." Science journalist David McRaney summarizes how beliefs form. Surrounded by noise, our brains, mostly unconsciously, start recognizing causal patterns. This recognition involves formulating and testing causal predictions.

## Level 2 \u2013 Information campaigns

Based on our experiences, we construct broader beliefs about how things work. Out of noise, we create a predictable order. Since everybody experiences different life situations, everyone's beliefs are different. This is hard for us to understand because our beliefs feel normal.

## Level 3 \u2013 Rationality

"[Brain] modules /\u2026/ can simultaneously hold different, mutually contradictory views". According to evolutionary psychologist Robert Kurzban the brain consists of multiple modules, each with a different function and often working independently. The modules can have different views and even keep information from each other.

The modularity of our brain causes our beliefs to be inconsistent. This inconsistency brings the risk of being seen as hypocrites and cast out of society.

## Level 4 \u2013 Meta-cognition

"Our brains are /\u2026/ relentless and compelling improvisers, creating the mind, moment by moment." Behavioral scientist Nick Chater rejects the idea of us having an inner world with beliefs. He writes: "We generate our beliefs /\u2026/ in-the-moment."

Chater doesn't think that our beliefs are created out of nothing. Our past experiences constitute the starting point but only to be creatively reinterpreted. In effect, Chater tells us that we continually reinvent ourselves.

## Level 5 \u2013 Prophylactics

"[P]eople are surprisingly ignorant, more ignorant than they think." Cognitive scientists Steven Sloman and Philip Fernbach claim that our brains are too limited to create justified beliefs about our complicated, dynamic surroundings. We fill the gaps with other people's beliefs.

We don't know how ignorant we are, because we don't notice how heavily our beliefs depend on others. Since other people's beliefs and our beliefs reinforce each other we unjustly think there must be a firm basis for our beliefs.

## Level 6 \u2013 (De-)radicalisation

"[T]he groups people belong to are often fundamental to their /\u2026/ understanding of who they are" According to psychologists Jay Van Bavel and Dominic Packer, we are members of multiple groups. To a different degree, every group triggers a particular social identity in us with accompanying beliefs.

When activated, each social identity has a profound effect on us. Each social identity co-shapes our perception and interpretation of the world.

## Module: Sustaining beliefs

This module builds on the six levels introduced in the module: How beliefs form.

## Sustaining \u2013 Level 1: Information incidents

Our identities are threatened when our causal predictions fail. So, we protect them: when new information confirms our predictions, we accept it without opposition; when it disproves our beliefs, we resist. This is our first bias sustaining our beliefs: confirmation bias.

## Sustaining \u2013 Level 2: Information campaigns

Our beliefs follow our experiences, so they seem normal and unbiased. Other people's beliefs are different and therefore seem abnormal and biased. This is sustaining bias two \u2013 na\u00efve realism: thinking that our beliefs are objective and other people's beliefs are subjective.

## Sustaining \u2013 Level 3: Rationality

In order to avoid being ostracised, we need to convince others that our beliefs are consistent. This requirement holds our public beliefs to a large degree hostage. Fortunately, we need only be as consistent as others notice and hold us accountable for.

The requirement to appear consistent means that those spreading legal disinformation must appear to believe in it. As long as their hypocrisy holds, they enjoy legal protection as they exercise their right to freedom of expression.

## Sustaining \u2013 Level 4: Meta-cognition

Although the task of our improvising mind is to make our thoughts and behavior seem as coherent as possible to others, we sometimes are caught being incoherent. In those cases, our improvisation turns into confabulation to defend the status quo.

According to Chater all our explanations of how the world works and justifications for our acts are confabulations. Although they are generated on the spot, we are convinced that they reflect our deep beliefs.

## Sustaining \u2013 Level 5: Prophylactics

Often our peer groups consist of people with similar experiences and beliefs, although any reason, no matter how superficial, suffices to feel like a group member. Still, even in less coherent groups, the beliefs of our peers are heavily intertwined with our individual beliefs.

Changing beliefs is thus often not an individual but a social matter. Discarding our beliefs would mean forsaking our communities and going against those we trust and love.

## Sustaining \u2013 Level 6: (De-)radicalisation

We prefer our in-group peers and beliefs. But we are not automatically against out-group people and beliefs. This changes when relations between groups polarise. In that situation, we start thinking that 'we' are inherently good and 'they' are inherently bad.

Polarisation can turn beliefs into sacred truths that cannot be abandoned or compromised. In-group members become bound to conformity. Radicalisation is fueled by grandstanding: peers using moral talk for self-promotion.

## Module: Countering beliefs

This module builds on the six levels introduced in the modules: How beliefs form and Sustaining beliefs.

## Countering \u2013 Level 1: Information incidents

We need to showcase scientific evidence to provide objective, testable information that can undermine confirmation biases. Scientific evidence confronts the limitations of our mental shortcuts, allowing us to revise or abandon flawed patterns and beliefs.

## Countering \u2013 Level 2: Information campaigns

The introduction of authoritative narratives along with the blocking of false narratives, encourages us to reassess our beliefs. These interventions challenge the reinforcement of naive realism by disrupting the flow of information that confirms our biases.

## Countering \u2013 Level 3: Rationality

We need to engage in logical and critical thinking, particularly by using Kahneman's System 2 (deliberative thinking). While moving beyond intuitive, automatic responses (System 1) we scrutinize our beliefs more carefully and may uncover contradictions between the beliefs of our semi-autonomous brain modules.

We can also be taught how to analyse, evaluate, and interpret the information we encounter by using System 2. We can learn to identify misinformation, evaluate perspectives, question assumptions, analyse arguments, and self-reflect.

## Countering \u2013 Level 4: Meta-cognition

We need to reflect on our thinking to understand how we arrived at a conclusion and whether our reasoning is sound \u2013 use the so-called 'technique rebuttal'. By thinking about our thinking we may identify when our brain's improvisations actually were confabulations.

## Countering \u2013 Level 5: Prophylactics

'Belonging' is just one of our basic needs. Other basic needs are 'autonomy', 'achievement', and 'safety'. We need to satisfy all our basic needs to become more resilient.

More resilience means we feel more secure about ourselves. It helps us separate our identity from what we believe so that doubts about a belief need not lead to an identity crisis. It brings us the confidence and humility needed to rethink and unlearn.

## Countering \u2013 Level 6: (De-)radicalisation

Tensions can arise between our personal beliefs and the radicalised views of our group. If it's worth it, we might voice disagreement; if not, we may leave the group.

While a group can dominate our identity, leaving is possible because we belong to multiple groups, and we can choose to join less polarised ones. Having alternative groups makes it easier to distance ourselves from radicalising groups and their rigid, moralistic beliefs.

## Learning path 'Demand side' summary

People are capable of having outrageous beliefs. There are four major types of outrageous beliefs: (1) individual intuitive; (2) external intuitive; (3) external reflective; (4) false instrumental \u2013 disinformation.

Not all outrageous beliefs are misinformation. Only one type of outrageous belief (false instrumental) constitutes disinformation.

Forming, sustaining, and countering beliefs takes place on six levels: (1) information incidents; (2) information campaigns; (3) rationality; (4) meta-cognition; (5) prophylactics; (6) (de-)radicalisation.

## Summary \u2013 Level 1: Information incidents

After birth, our brain develops from perceiving noise to recognizing subjective causal patterns. This recognition involves formulating and testing causal predictions.

Confirmation bias helps us disregard unfavorable test results to maintain our existing beliefs about the patterns we think we perceive.

Presenting evidence can challenge and weaken our confirmation bias.

## Summary \u2013 Level 2: Information campaigns

Our experiences fuel the patterns we perceive. The patterns gradually form broader belief systems.

As they are rooted in our experiences, we perceive our belief systems as 'normal' and 'objective' and those of others as 'abnormal' and 'subjective' \u2013 na\u00efve realism bias.

Introducing authoritative beliefs in the form of narratives and suppressing conflicting ones can challenge and weaken our na\u00efve realism.

## Summary \u2013 Level 3: Rationality

The brain consists of semi-autonomous modules, resulting in potential inconsistencies within our belief systems.

Inconsistencies pose a social risk, as they may lead to ostracism. To avoid this, we tend to claim consistency.

Engaging in logical and critical thinking helps us improve the accuracy of our beliefs.

Engaging in logical and critical thinking can reveal our internal contradictions, prompting us to reconsider and revise our beliefs.

It also helps us to analyse, evaluate, and interpret the information we encounter.

## Summary \u2013 Level 4: Meta-cognition

Based on our past experiences our brain improvises in the now to produce seemingly coherent beliefs.

When others do catch an incoherence, our brain turns its improvisation into confabulation.

By reflecting on our thought processes, we can identify and correct these confabulations.

## Summary \u2013 Level 5: Prophylactics

We often fill gaps in our belief systems with beliefs borrowed from others.

Since our beliefs are closely tied to those of our peer groups, changing them can come with significant social costs.

By meeting our basic needs beyond the desire for belonging, we strengthen our resilience.

Increased resilience helps us separate our sense of identity from our beliefs.

Increased resilience gives us the confidence and humility to rethink and unlearn our beliefs.

## Summary \u2013 Level 6: (De-)radicalisation

We belong to multiple groups, each of which influences and shapes our beliefs.

As groups become more polarised, they tend to demand greater conformity from their members.

When a group radicalises and our personal beliefs diverge, we may choose to dissent or leave and seek out less rigid, less polarising alternatives.

## Selected literature

Chater, N. (2018) The mind is flat. The illusion of mental depth and the improvised mind. Allen Lane.

Kahneman, D. (2011). Thinking, fast and slow. Penguin Books.

Kurzban, R. (2010). Why everyone (else) is a hypocrite. Evolution and the modular mind. Princeton University Press.

McRaney, D. (2022), How minds change. The surprising science of belief, opinion, and persuasion. Portfolio Penguin.

Mercier, H. (2020). Not born yesterday. The science of Who we trust and What we believe. Princeton University Press.

Sperber, D. (1997). Intuitive and reflective beliefs. Sperber.fr.

Van Bavel, J. & Packer, D. (2021). The power of us. Harnessing our shared identities for personal and collective success. Wildfire.
"""


# =============================================================================
# Apply updates
# =============================================================================
UPDATES = {
    "32-Module-Countering-information-campaigns": {
        "content": MODULE_32_CONTENT.strip(),
    },
    "30-Specialist-module-Two-perceptions-of-honesty-Lewandowsky": {
        "content": MODULE_30_CONTENT.strip(),
    },
    "29-Module-Countering-information-incidents": {
        "content": MODULE_29_CONTENT.strip(),
    },
    "91-Learning-path-Demand-side": {
        "content": MODULE_91_CONTENT.strip(),
    },
}

updated = 0
for module in modules:
    mid = module.get("id") or module.get("slug")
    if mid in UPDATES:
        for key, val in UPDATES[mid].items():
            module[key] = val
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
