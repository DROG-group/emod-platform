#!/usr/bin/env python3
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# Illustration mappings: (module_id, section_marker, illustration_path, alt_text)
illustrations = [
    # Module 1: What is FIMI
    ('Module-What-Is-FIMI', '## Method: FIMI Detection Workflow',
     '/illustrations/fimi/fimi-detection-workflow.svg',
     'FIMI Detection Workflow - 4-step process starting with harm assessment'),
    ('Module-What-Is-FIMI', "## What FIMI Is (And Isn't)",
     '/illustrations/fimi/fimi-definition-boundaries.svg',
     'What FIMI Is and Isn\'t - Understanding the boundaries'),
    ('Module-What-Is-FIMI', '## Case Study 1: Internet Research Agency',
     '/illustrations/fimi/ira-operation-structure.svg',
     'IRA Operation Structure - How a documented FIMI operation worked'),

    # Module 2: State vs Non-State Actors
    ('Module-State-NonState-Actors', '## Understanding the Actor Landscape',
     '/illustrations/fimi/actor-types-comparison.svg',
     'FIMI Actor Types - State, Commercial, and Ideological actors compared'),

    # Module 3: Tactics and Techniques
    ('Module-FIMI-Tactics-Techniques', '## Method: Tactic Detection Workflow',
     '/illustrations/fimi/fimi-tactics-overview.svg',
     'FIMI Tactics Overview - Content creation, distribution, and targeting methods'),
    ('Module-FIMI-Tactics-Techniques', '## Step 2: Check for template-based content',
     '/illustrations/fimi/coordination-signals.svg',
     'Coordination Signal Strength - Strong, medium, and weak indicators'),

    # Module 5: Attribution Challenges
    ('Module-Attribution-Challenges', '## Understanding Attribution Standards',
     '/illustrations/fimi/attribution-confidence-levels.svg',
     'Attribution Confidence Levels - Low, medium, and high confidence standards'),

    # Module 6: Impact Assessment
    ('Module-Impact-Assessment', '## Method: Impact Assessment Workflow',
     '/illustrations/fimi/impact-assessment-framework.svg',
     'Impact Assessment Framework - What you can measure vs what matters'),

    # Module 7: EU Response
    ('Module-EU-Response-FIMI', '## Understanding the EU Response Architecture',
     '/illustrations/fimi/eu-response-architecture.svg',
     'EU FIMI Response Architecture - Multi-level coordination structure'),
]

for module_id, section, img_path, alt_text in illustrations:
    for i, m in enumerate(data):
        if m.get('id') != module_id:
            continue

        content = m.get('content', '')
        img_markdown = f'![{alt_text}]({img_path})'

        # Check if image already exists
        if img_path in content:
            print(f"  Skipped (already exists): {module_id} - {section[:40]}...")
            continue

        # Check if section exists
        if section not in content:
            print(f"  Section not found: {module_id} - {section[:40]}...")
            continue

        # Add image after section header
        new_content = content.replace(
            section,
            f'{section}\n\n{img_markdown}'
        )
        data[i]['content'] = new_content
        print(f"Added: {module_id} - {section[:40]}...")

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("\nFIMI illustrations added to modules!")
