#!/usr/bin/env python3
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

# Add header images by learning path
for i, m in enumerate(data):
    path = m.get('learningPath', '')

    # Add header images based on learning path
    if path == 'Understanding FIMI Operations':
        data[i]['headerImage'] = '/illustrations/fimi-header.svg'
    elif path == 'Detection and Verification':
        data[i]['headerImage'] = '/illustrations/detection-pipeline.svg'

# Add inline diagrams to specific sections
for i, m in enumerate(data):
    module_id = m.get('id')
    content = m.get('content', '')

    # Add DIM diagram to modules that have DIM Mapping section
    if '## DIM Mapping' in content and '![DIM Framework' not in content:
        content = content.replace(
            '## DIM Mapping',
            '## DIM Mapping\n\n![DIM Framework - 5 Generations of Intervention](/illustrations/dim-framework.svg)'
        )
        data[i]['content'] = content
        print(f"Added DIM diagram to {module_id}")

    # Add Evidence Ladder to Detection modules with Evidence Ladder section
    if '## Evidence Ladder' in content and '![Evidence Ladder' not in content:
        content = content.replace(
            '## Evidence Ladder',
            '## Evidence Ladder\n\n![Evidence Ladder - Signal Classification](/illustrations/evidence-ladder.svg)'
        )
        data[i]['content'] = content
        print(f"Added Evidence Ladder to {module_id}")

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("\nIllustrations added to modules!")
