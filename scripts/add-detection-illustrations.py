#!/usr/bin/env python3
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

illustrations = [
    # Module 1: Introduction to Detection
    ('Module-Introduction-Detection', '## The Detection-Verification Pipeline',
     '/illustrations/detection/detection-verification-pipeline.svg',
     'Detection-Verification Pipeline - From monitoring to attribution'),

    # Module 2: Technical Detection Methods
    ('Module-Technical-Detection-Methods', '## Understanding Technical Detection Categories',
     '/illustrations/detection/technical-detection-methods.svg',
     'Technical Detection Methods - Six categories of technical analysis'),

    # Module 3: Behavioral Analysis
    ('Module-Behavioral-Analysis', '## Understanding Behavioral Indicators',
     '/illustrations/detection/behavioral-indicators.svg',
     'Behavioral Indicators - Authentic vs suspicious account patterns'),

    # Module 4: Network Analysis
    ('Module-Network-Analysis-Detection', '## Network Analysis Concepts',
     '/illustrations/detection/network-analysis-concepts.svg',
     'Network Analysis Patterns - Organic, coordinated, and amplification structures'),

    # Module 5: Content Verification Tools
    ('Module-Content-Verification-Tools', '## Verification Tool Categories',
     '/illustrations/detection/verification-toolkit.svg',
     'Verification Toolkit - Tools for different verification tasks'),
]

for module_id, section, img_path, alt_text in illustrations:
    for i, m in enumerate(data):
        if m.get('id') != module_id:
            continue

        content = m.get('content', '')
        img_markdown = f'![{alt_text}]({img_path})'

        if img_path in content:
            print(f"  Skipped (exists): {module_id}")
            continue

        if section not in content:
            print(f"  Section not found: {module_id} - {section[:40]}...")
            continue

        new_content = content.replace(section, f'{section}\n\n{img_markdown}')
        data[i]['content'] = new_content
        print(f"Added: {module_id}")

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("\nDetection illustrations added!")
