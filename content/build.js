#!/usr/bin/env node
/**
 * EMOD Content Builder
 *
 * Generates markdown files from the modules and quiz JSON data.
 * Run: node content/build.js
 *
 * Outputs:
 *   - content/EMOD-Complete-Curriculum.md (single file with everything)
 *   - content/{LearningPath}/*.md (individual module files)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const modulesData = require(path.join(ROOT, 'lib/modules-data.json'));
const quizData = require(path.join(ROOT, 'lib/quiz-data.json'));

// Learning path order
const PATH_ORDER = [
  'Understanding Disinformation Basics',
  'Media Literacy Fundamentals',
  'Understanding FIMI Operations',
  'Detection and Verification',
  'AI and Hybrid Threats',
  'Counter-Messaging Strategies',
  'Platform Governance',
  'Data Analysis',
  'Disinfonomics',
  'General'
];

// Teachers Handbook content
const HANDBOOK = `# EMOD Teachers Handbook

A comprehensive guide for educators integrating EMOD into university curricula, professional training programs, or self-directed learning paths.

---

## Overview

EMOD (European Master of Countering Disinformation) is a free e-learning platform developed by the SAUFEX consortium. It provides **64 modules** across **10 learning paths**, covering identification, analysis, and response to foreign information manipulation and interference (FIMI).

This handbook provides guidance for educators who want to integrate EMOD into their teaching, whether as a standalone course, supplementary material, or professional development resource.

### Key Features for Educators

- **Modular structure:** Each module is self-contained (8-10 minutes)
- **Audience-tailored:** Content filtered by role (policymakers, journalists, researchers, etc.)
- **Framework-based:** Built on the DROG Intervention Menu (DIM) methodology
- **Free access:** No registration required, completely open

---

## Self-Study Guidelines

EMOD is designed to support independent learning. Here's how to guide students through effective self-study:

### Recommended Learning Sequence

1. **Foundation Modules** - Start with "Understanding Disinformation Basics" and "Media Literacy Fundamentals" to establish core concepts and terminology.

2. **Role-Specific Paths** - Use the audience filter to focus on modules relevant to the learner's field (journalism, policy, research, etc.).

3. **Advanced Topics** - Progress to specialised paths like "Disinfonomics," "Platform Governance," or "AI & Synthetic Media" based on interest.

### Study Recommendations

| Aspect | Recommendation |
|--------|---------------|
| **Pace** | 2-3 modules per session, allowing time for reflection between topics |
| **Notes** | Keep a learning journal to record key concepts, questions, and real-world examples |
| **Practice** | Apply concepts by analysing current news stories for manipulation techniques |
| **Glossary** | Use the Glossary to reinforce terminology and explore related concepts |

### Time Commitment

| Programme | Modules | Est. Time |
|-----------|---------|-----------|
| Core Fundamentals | 12 modules | 2-3 hours |
| Role-Specific Track | 15-20 modules | 3-4 hours |
| Complete Programme | 64 modules | 10-12 hours |

---

## Course Delivery

EMOD can be integrated into university courses, professional training, or workshop formats.

### Delivery Models

#### Model A: Flipped Classroom
*Recommended for semester courses*

- Students complete assigned EMOD modules before class (2-4 modules/week)
- In-class time devoted to discussion, case studies, and practical exercises
- Weekly reflection papers connecting module content to current events
- Group projects applying DIM framework to real disinformation cases

#### Model B: Intensive Workshop
*For professional development (1-3 days)*

- Pre-workshop: Assign 6-8 foundational modules as preparation
- Workshop: Focus on hands-on exercises, simulations, and role-play
- Include live analysis of current disinformation campaigns
- Post-workshop: Self-directed completion of remaining modules

#### Model C: Supplementary Material
*Integration into existing courses*

- Select specific modules relevant to course topics
- Assign as required or recommended reading alongside primary materials
- Use glossary terms to standardise vocabulary
- Reference DIM framework in assignments

### Suggested Weekly Schedule (14-Week Semester)

| Week | Focus | Modules |
|------|-------|---------|
| 1-2 | Foundations & Terminology | Disinformation Basics, Media Literacy |
| 3-4 | FIMI & Threat Landscape | FIMI Introduction, Hybrid Threats |
| 5-6 | Detection & Verification | OSINT Techniques, Source Verification |
| 7-8 | DIM Framework | Debunking, Prebunking, Inoculation |
| 9-10 | Platform Dynamics | Content Moderation, Algorithmic Amplification |
| 11-12 | Specialisation | Role-specific modules (journalism, policy, etc.) |
| 13-14 | Capstone Projects | Applied analysis, presentations |

### Discussion Prompts

1. Find a recent example of disinformation. Which manipulation techniques does it use?
2. Apply the DIM framework: What intervention would you recommend and why?
3. What are the trade-offs between content moderation and free expression?
4. How might AI change the disinformation landscape in the next 5 years?
5. Design a prebunking campaign for a specific audience on a topic of your choice.

---

## Grading Guidelines

Since EMOD modules don't include built-in assessments, here are recommended approaches for evaluating student learning:

### Assessment Components

| Component | Weight | Description |
|-----------|--------|-------------|
| Module Completion & Reflection | 20% | Weekly reflection journals (1-2 pages) connecting modules to current events |
| Participation & Discussion | 20% | Quality contributions to class discussions |
| Case Study Analysis | 25% | Mid-term: Analyse a disinformation campaign using EMOD frameworks |
| Final Project | 35% | Design a counter-disinformation intervention for a specific context |

### Rubric: Case Study Analysis

| Criterion | Excellent (A) | Satisfactory (B-C) | Needs Work (D-F) |
|-----------|--------------|-------------------|------------------|
| Identification | Correctly identifies manipulation type, actors, techniques | Identifies most elements with minor errors | Significant misidentification |
| Framework Application | Correctly applies DIM framework with clear rationale | Applies framework but with incomplete reasoning | Misapplies or fails to use framework |
| Evidence Quality | Uses multiple credible sources, proper verification | Adequate sourcing with some gaps | Poor sourcing or unverified claims |
| Intervention Design | Practical, evidence-based recommendations | Reasonable suggestions lacking detail | Unrealistic or unsupported proposals |

### Sample Final Project Topics

1. Design a prebunking campaign for vaccine misinformation targeting parents
2. Develop content moderation guidelines for a social media platform
3. Create a media literacy curriculum for high school students
4. Write a policy brief on AI-generated disinformation for policymakers
5. Analyse a foreign influence operation and propose countermeasures
6. Design a newsroom protocol for verifying viral content

---

## Online Course Adaptation

EMOD's web-based format makes it ideal for online learning.

### LMS Integration

EMOD can be integrated with any Learning Management System (Moodle, Canvas, Blackboard, etc.):

- Link directly to specific modules in your LMS course structure
- Create discussion forums corresponding to each module or learning path
- Use LMS quizzes to verify understanding of module concepts
- Embed glossary terms as LMS glossary entries for quick reference

### Asynchronous vs Synchronous

**Asynchronous Elements:**
- Self-paced EMOD module completion
- Discussion board responses
- Weekly reflection journals
- Peer review of written work
- Case study submissions

**Synchronous Elements:**
- Weekly video conference sessions
- Live case study discussions
- Guest speaker presentations
- Group project work sessions
- Final project presentations

### Recommended Weekly Structure

**Days 1-4: Self-Paced**
- Complete assigned EMOD modules
- Post to discussion forum
- Begin reflection journal

**Days 5-7: Interactive**
- Live session (60-90 min)
- Respond to peers on forum
- Submit reflection journal

### Engagement Strategies

- **Clear Expectations:** Publish weekly schedule with deadlines upfront
- **Active Presence:** Regular instructor posts and quick feedback
- **Peer Learning:** Small group projects and peer review

### Technology Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Stable internet connection for accessing EMOD and video sessions
- Webcam and microphone for live sessions
- Access to institution's LMS

---

## Additional Resources

### Internal Resources
- **Glossary** - Key terms and definitions
- **FAQ** - Common questions answered
- **All Modules** - Browse the complete catalogue
- **About EMOD** - Learn about the platform

### External Resources
- [SAUFEX Project](https://saufex.eu) - Learn more about the consortium behind EMOD
- [Digital Forensic Research Lab](https://dfrlab.org) - Case studies and analysis of disinformation
- [EUvsDisinfo](https://euvsdisinfo.eu) - EU database of pro-Kremlin disinformation cases

### Contact for Educators

Planning to use EMOD in your institution? Contact: info@saufex.eu

Join the Discord Community: https://discord.gg/bvaGd5rahu

---
---
---

`;

// ============================================================================
// HELPERS
// ============================================================================

function groupModulesByPath(modules) {
  const byPath = {};
  modules.forEach(module => {
    const pathName = module.learningPath || 'General';
    if (!byPath[pathName]) byPath[pathName] = [];
    byPath[pathName].push(module);
  });
  // Sort within each path
  Object.keys(byPath).forEach(pathName => {
    byPath[pathName].sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0));
  });
  return byPath;
}

function slugify(str) {
  return str.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-');
}

function formatQuiz(pathName) {
  const quiz = quizData[pathName];
  if (!quiz) return '';

  let md = `\n### Assessment Quiz: ${pathName}\n\n`;
  md += `**Passing Score:** ${quiz.passingScore}%\n\n`;

  quiz.questions.forEach((q, idx) => {
    md += `**Question ${idx + 1}:** ${q.question}\n\n`;
    q.options.forEach((opt, optIdx) => {
      const letter = String.fromCharCode(65 + optIdx);
      const isCorrect = optIdx === q.correctIndex;
      md += `${letter}. ${opt}${isCorrect ? ' ✓' : ''}\n`;
    });
    md += `\n*Explanation:* ${q.explanation}\n\n`;
  });

  return md;
}

function formatModuleFrontmatter(module, pathName, index) {
  return [
    '---',
    `title: "${(module.title || '').replace(/"/g, '\\"')}"`,
    `description: "${(module.description || '').replace(/"/g, '\\"')}"`,
    `author: "${module.author || 'SAUFEX Consortium'}"`,
    `date: "${module.date || '2024-01-01'}"`,
    `learningPath: "${pathName}"`,
    `moduleNumber: ${module.moduleNumber || index + 1}`,
    `estimatedTime: "${module.estimatedTime || '15 minutes'}"`,
    `audiences: [${(module.audiences || []).map(a => `"${a}"`).join(', ')}]`,
    '---',
    '',
    ''
  ].join('\n');
}

// ============================================================================
// BUILD INDIVIDUAL MODULE FILES
// ============================================================================

function buildIndividualFiles(byPath) {
  let totalFiles = 0;

  PATH_ORDER.forEach(pathName => {
    const modules = byPath[pathName] || [];
    if (modules.length === 0) return;

    const folderName = slugify(pathName);
    const folderPath = path.join(__dirname, folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    modules.forEach((module, idx) => {
      const num = String(module.moduleNumber || idx + 1).padStart(2, '0');
      const slug = module.slug.replace('Module-', '').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
      const fileName = `${num}-${slug}.md`;
      const filePath = path.join(folderPath, fileName);

      const content = formatModuleFrontmatter(module, pathName, idx) + (module.content || '');
      fs.writeFileSync(filePath, content);
      totalFiles++;
    });

    console.log(`  ${folderName}/ (${modules.length} files)`);
  });

  return totalFiles;
}

// ============================================================================
// BUILD COMPLETE CURRICULUM FILE
// ============================================================================

function buildCompleteCurriculum(byPath) {
  let md = HANDBOOK;

  md += '# EMOD Learning Modules\n\n';
  md += '64 modules across 10 learning paths covering disinformation detection, FIMI analysis, and intervention selection using the DIM framework.\n\n';
  md += '---\n\n';

  // Table of Contents
  md += '## Table of Contents\n\n';
  PATH_ORDER.forEach((pathName, idx) => {
    const modules = byPath[pathName] || [];
    const hasQuiz = quizData[pathName] ? ' + Quiz' : '';
    md += `${idx + 1}. **${pathName}** (${modules.length} modules${hasQuiz})\n`;
  });
  md += '\n---\n\n';

  // Each learning path with modules and quiz
  PATH_ORDER.forEach((pathName, pathIdx) => {
    const modules = byPath[pathName] || [];
    if (modules.length === 0) return;

    md += `# Part ${pathIdx + 1}: ${pathName}\n\n`;
    md += `*${modules.length} modules*\n\n`;
    md += '---\n\n';

    modules.forEach((module, idx) => {
      const num = module.moduleNumber || idx + 1;

      md += `## ${pathName} - Module ${num}: ${module.title}\n\n`;
      md += `**Estimated Time:** ${module.estimatedTime || '15 minutes'}  \n`;
      if (module.audiences && module.audiences.length > 0) {
        md += `**Target Audiences:** ${module.audiences.join(', ')}  \n`;
      }
      md += `**Author:** ${module.author || 'SAUFEX Consortium'}  \n\n`;

      if (module.description) {
        md += `> ${module.description}\n\n`;
      }

      if (module.content) {
        md += module.content + '\n\n';
      }

      md += '---\n\n';
    });

    // Quiz after modules
    md += formatQuiz(pathName);
    md += '\n---\n\n';
  });

  // Appendix: All quizzes
  md += '\n# Appendix: All Assessment Quizzes\n\n';
  md += 'This section contains all 10 learning path quizzes with answers and explanations.\n\n';
  md += '**Total Questions:** 50 (5 per learning path)  \n';
  md += '**Passing Score:** 70% (4 out of 5 correct)  \n\n';
  md += '---\n\n';

  PATH_ORDER.forEach(pathName => {
    md += formatQuiz(pathName);
    md += '---\n\n';
  });

  // Footer
  md += '\n---\n\n';
  md += '# About This Document\n\n';
  md += 'This document contains the complete EMOD (European Master of Countering Disinformation) curriculum, including:\n\n';
  md += '- **Teachers Handbook** - Guidelines for educators\n';
  md += '- **64 Learning Modules** - Organized across 10 learning paths\n';
  md += '- **50 Assessment Questions** - 5 questions per learning path with answers\n\n';
  md += '**Source:** EMOD Platform (https://emod.saufex.eu)  \n';
  md += '**Consortium:** SAUFEX (EU Horizon Europe)  \n';
  md += '**License:** CC BY 4.0  \n';
  md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;

  return md;
}

// ============================================================================
// MAIN
// ============================================================================

console.log('\n📚 EMOD Content Builder\n');

const byPath = groupModulesByPath(modulesData);

// Build individual files
console.log('Building individual module files:');
const fileCount = buildIndividualFiles(byPath);
console.log(`\n✓ Created ${fileCount} individual markdown files\n`);

// Build complete curriculum
console.log('Building complete curriculum...');
const curriculum = buildCompleteCurriculum(byPath);
const curriculumPath = path.join(__dirname, 'EMOD-Complete-Curriculum.md');
fs.writeFileSync(curriculumPath, curriculum);
console.log(`✓ Created EMOD-Complete-Curriculum.md (${(curriculum.length / 1024).toFixed(0)} KB)\n`);

// Summary
console.log('📊 Summary:');
console.log(`   - ${fileCount} individual module files`);
console.log(`   - 1 complete curriculum file`);
console.log(`   - ${Object.keys(quizData).length} quizzes (${Object.values(quizData).reduce((sum, q) => sum + q.questions.length, 0)} questions)`);
console.log('\nDone! ✨\n');
