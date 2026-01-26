#!/usr/bin/env python3
"""Add all custom illustrations to modules across learning paths."""
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# All illustrations to add: (module_id, section_marker, img_path, alt_text)
illustrations = [
    # ========== FIMI Operations (already added, skip duplicates) ==========

    # ========== Detection and Verification ==========
    ('Module-Introduction-Detection', '## The Detection-Verification Pipeline',
     '/illustrations/detection/detection-verification-pipeline.svg',
     'Detection-Verification Pipeline - From monitoring to attribution'),

    ('Module-Technical-Detection-Methods', '## Understanding Technical Detection Categories',
     '/illustrations/detection/technical-detection-methods.svg',
     'Technical Detection Methods - Six categories of technical analysis'),

    ('Module-Behavioral-Analysis', '## Understanding Behavioral Indicators',
     '/illustrations/detection/behavioral-indicators.svg',
     'Behavioral Indicators - Authentic vs suspicious account patterns'),

    ('Module-Network-Analysis-Detection', '## Network Analysis Concepts',
     '/illustrations/detection/network-analysis-concepts.svg',
     'Network Analysis Patterns - Organic, coordinated, and amplification structures'),

    ('Module-Content-Verification-Tools', '## Verification Tool Categories',
     '/illustrations/detection/verification-toolkit.svg',
     'Verification Toolkit - Tools for different verification tasks'),

    # ========== AI and Hybrid Threats ==========
    ('Module-AI-Information-Manipulation-Intro', '## Purpose',
     '/illustrations/ai-threats/ai-manipulation-landscape.svg',
     'AI and Information Manipulation - How AI changes the manipulation landscape'),

    ('Module-Deepfakes-Synthetic-Media', '## Purpose',
     '/illustrations/ai-threats/deepfake-detection-signals.svg',
     'Deepfake Detection Signals - What to look for when verifying synthetic media'),

    ('Module-Hybrid-Threats-Definition', '## Purpose',
     '/illustrations/ai-threats/hybrid-threats-spectrum.svg',
     'Hybrid Threats Spectrum - Information operations combined with other threat types'),

    # ========== Counter-Messaging Strategies ==========
    ('Module-Prebunking-Inoculation', '## Purpose',
     '/illustrations/counter-messaging/prebunking-vs-debunking.svg',
     'Prebunking vs Debunking - Two complementary approaches'),

    # ========== Understanding Disinformation Basics ==========
    ('Module-What-is-Disinformation', '## The Definitions (Reference)',
     '/illustrations/disinfo-basics/information-disorder-types.svg',
     'Information Disorder Types - Misinformation, Disinformation, and Malinformation'),

    ('Module-How-Information-Spreads-Online', '## Purpose',
     '/illustrations/disinfo-basics/how-information-spreads.svg',
     'How Information Spreads Online - Understanding viral dynamics'),

    # ========== Media Literacy Fundamentals ==========
    ('Module-Evaluating-Sources', '## Purpose',
     '/illustrations/media-literacy/source-evaluation-criteria.svg',
     'Source Evaluation: SIFT Method - Four quick moves to verify information'),

    ('Module-Cognitive-Biases-Belief', '## Purpose',
     '/illustrations/media-literacy/cognitive-biases-belief.svg',
     'Cognitive Biases That Affect Belief - Mental shortcuts that make us vulnerable'),

    ('Module-Visual-Literacy', '## Purpose',
     '/illustrations/media-literacy/visual-literacy-checklist.svg',
     'Visual Literacy: Analyzing Images - Questions to ask before trusting visual content'),

    # ========== Platform Governance ==========
    ('Module-Content-Moderation-Challenges', '## Purpose',
     '/illustrations/platform-governance/content-moderation-approaches.svg',
     'Content Moderation Approaches - Different tools platforms use to address harmful content'),

    ('Module-Algorithmic-Amplification', '## Purpose',
     '/illustrations/platform-governance/algorithmic-amplification.svg',
     'Algorithmic Amplification - How platform algorithms shape what we see'),

    ('Module-Platform-Regulation-Approaches', '## Purpose',
     '/illustrations/platform-governance/platform-regulation-approaches.svg',
     'Platform Regulation Approaches - Different models for governing online platforms'),

    # ========== Disinfonomics ==========
    ('Module-Disinfonomics-Market-For-Bad-News', '## Purpose',
     '/illustrations/disinfonomics/disinformation-economy.svg',
     'The Disinformation Economy - Following the money behind false information'),

    ('Module-Disinfonomics-Influencers-Troll-Farms', '## Purpose',
     '/illustrations/disinfonomics/troll-farm-economics.svg',
     'Troll Farm Economics - How commercial influence operations work'),

    ('Module-Disinfonomics-Platforms-Auction-Houses', '## Purpose',
     '/illustrations/disinfonomics/platform-ad-revenue.svg',
     'How Ad Revenue Funds Misinformation - The programmatic advertising problem'),

    # ========== Data Analysis ==========
    ('Module-Understanding-Basic-Statistics', '## Purpose',
     '/illustrations/data-analysis/understanding-statistics.svg',
     'Understanding Basic Statistics - Key concepts for evaluating data claims'),

    ('Module-Data-Visualization-Best-Practices', '## Purpose',
     '/illustrations/data-analysis/data-visualization-pitfalls.svg',
     'Data Visualization Pitfalls - How charts can mislead and how to spot it'),
]

added = 0
skipped = 0

for module_id, section, img_path, alt_text in illustrations:
    for i, m in enumerate(data):
        if m.get('id') != module_id:
            continue

        content = m.get('content', '')
        img_markdown = f'![{alt_text}]({img_path})'

        if img_path in content:
            print(f"  Skipped (exists): {module_id}")
            skipped += 1
            continue

        if section not in content:
            print(f"  Section not found: {module_id} - {section[:40]}...")
            skipped += 1
            continue

        new_content = content.replace(section, f'{section}\n\n{img_markdown}')
        data[i]['content'] = new_content
        print(f"Added: {module_id}")
        added += 1

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"\nDone! Added: {added}, Skipped: {skipped}")
