#!/usr/bin/env python3
import json

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'r') as f:
    data = json.load(f)

expanded_content = """## Purpose

You'll learn to use technical indicators as one input among several, not as definitive proof of manipulation. Technical forensics can reveal manipulation—but it can also mislead, especially when wielded without understanding its limitations.

---

## The Reality of Technical Detection

Technical detection methods promise objective, scientific analysis of digital content. The reality is messier:

**What technical analysis can do well**:
- Identify obvious edits and composites
- Reveal metadata inconsistencies
- Detect certain types of synthetic content
- Provide supporting evidence for broader investigation

**What technical analysis cannot reliably do**:
- Prove authenticity (absence of manipulation evidence ≠ proof of authenticity)
- Detect all manipulation (sophisticated edits leave no artifacts)
- Work reliably on heavily compressed or resized content
- Substitute for context verification

**The fundamental problem**: Technical forensics works best on high-quality original files. Most content you'll analyze has been compressed, resized, re-uploaded, and screenshot-captured multiple times. Each step degrades forensic reliability.

**The practical reality**: Context verification (when was this created? where did it come from? does it match other evidence?) is usually faster, cheaper, and more reliable than technical forensics. Technical analysis supplements context verification—it doesn't replace it.

---

## Understanding Technical Detection Categories

Technical detection methods fall into several categories, each with different applications and limitations.

### Metadata Analysis

Digital files contain metadata—information about how, when, and where the file was created or modified.

**EXIF data (images)**:
- Camera make/model
- Date and time of capture
- GPS coordinates (if enabled)
- Camera settings (aperture, shutter speed, ISO)
- Software used to create or edit the file
- Thumbnail images (may differ from edited version)

**Document metadata**:
- Author information
- Creation and modification dates
- Revision history
- Application used
- Hidden content (comments, tracked changes)

**Audio/video metadata**:
- Recording device
- Duration and format
- Creation timestamp
- Encoding information

**What metadata can tell you**:
- File was edited with specific software (Photoshop, GIMP, etc.)
- Timestamp inconsistent with claimed timing
- GPS location inconsistent with claimed location
- Different thumbnail from main image (edit occurred)
- Multiple modification timestamps

**Metadata limitations**:
- Easily stripped (most social platforms remove EXIF)
- Can be falsified (metadata tools exist for this purpose)
- Absence proves nothing (stripped metadata is normal)
- Presence of editing software doesn't prove malicious editing (legitimate editing is common)

**Practical guidance**: Metadata is your first check because it's fast. But treat metadata presence as potential supporting evidence, and metadata absence as uninformative.

### Visual Forensics

Visual forensics examines the image content itself for signs of manipulation.

**Lighting and shadow analysis**:
- Light source direction should be consistent across the image
- Shadows should align with the light source
- Multiple light sources leave characteristic patterns
- Reflections should match the scene

*Limitation*: Complex scenes have complex lighting. Don't over-interpret ambiguous lighting.

**Edge and boundary analysis**:
- Added or removed elements often show edge artifacts
- Blur, pixelation, or halo effects around manipulated regions
- Inconsistent sharpness between original and added elements
- Cut-and-paste operations leave traces

*Limitation*: Compression creates similar artifacts. Expert editing minimizes traces.

**Clone detection**:
- Copy-paste operations within an image leave duplicate regions
- Clone stamp tools create repeated patterns
- Healing brushes create texture inconsistencies

*Limitation*: Requires comparison of regions within the image. Obvious only in careless edits.

**Noise analysis**:
- Different cameras produce different noise patterns
- Composited images may have inconsistent noise
- Processing and compression affect noise uniformly
- Added elements may have different noise characteristics

*Limitation*: Highly technical analysis requiring specialized tools. Compression destroys noise information.

**Compression artifact analysis**:
- JPEG compression creates characteristic block patterns
- Resaving an image adds compression artifacts
- Double-compression patterns can indicate editing
- Different quality settings leave different traces

*Limitation*: Most web images are multiply compressed. Complex to interpret.

**Error Level Analysis (ELA)**:
- Resaving a JPEG at the same quality level should produce consistent error levels
- Edited regions may show different error levels
- Tool highlights areas that behave differently under recompression

*Limitation*: Easily misinterpreted. Many factors affect error levels. Not reliable for multiply-compressed images.

### Reverse Image Search

Reverse image search finds other instances of an image online.

**What it can reveal**:
- Image appeared before claimed event (old image, new context)
- Original unedited version exists
- Same image used in different contexts
- Source or origin of the image

**Tools**:
- Google Images reverse search
- TinEye
- Yandex Images (often finds images Google misses)
- Bing Visual Search

**Limitations**:
- Doesn't find cropped or significantly modified versions
- Database coverage varies (not all images indexed)
- Recent images may not be indexed yet
- Requires exact or near-exact match

**Practical guidance**: Reverse image search is often your most valuable tool. Fast, reliable, and frequently conclusive. Do this before forensic analysis.

### Synthetic Content Detection

Detecting AI-generated images, videos, and audio.

**AI-generated images**:
- Anatomical errors (hands, teeth, ears)
- Inconsistent backgrounds
- Text rendering failures
- Repetitive patterns in backgrounds
- Uncanny facial features

*Limitation*: Quality rapidly improving. State-of-the-art images increasingly difficult to detect visually.

**Deepfake video detection**:
- Unnatural blinking patterns
- Lighting inconsistencies on face
- Audio-visual sync issues
- Edge artifacts around face
- Inconsistent skin texture

*Limitation*: Detection arms race. Sophisticated deepfakes increasingly difficult to identify.

**Synthetic audio detection**:
- Unnatural prosody
- Background noise inconsistencies
- Spectral analysis anomalies
- Breathing pattern irregularities

*Limitation*: Voice cloning rapidly improving. High-quality fakes difficult to detect.

**Technical detection tools**:
- Various AI-based detection services
- Spectral analysis tools
- Neural network detectors trained on synthetic content

*Critical limitation*: Detection tools trained on current synthetic content may fail on newer generation models. The detection-generation arms race favors generators.

---

## Scenario

Your team receives a flagged image claiming to show damage from a recent incident. The image is circulating widely with claims that contradict official reports.

The image shows what appears to be structural damage to a building. Social media posts claim this proves more severe damage than authorities acknowledged. The image has been shared thousands of times.

**You have**:
- **Time available**: 45 minutes before media deadline
- **Stakes**: Your organization may need to issue a statement; false accusation of manipulation damages credibility
- **Data access**: The image file, basic forensic tools, reverse image search
- **Constraint**: Cannot contact the original source directly

---

## Task

Produce three outputs:

1. **Assessment**: Is this image authentic, manipulated, or undetermined?
2. **Confidence level**: Low / Medium / High
3. **Next action**: Issue statement, continue verification, or decline to comment?

---

## Method: Technical Analysis Workflow

### Step 1: Context before forensics

Before examining technical artifacts, establish context. This is faster and often more conclusive than forensic analysis.

**Reverse image search** (5 minutes):
- Run the image through Google Images, TinEye, and Yandex
- Look for: earlier appearances, different contexts, original version
- Check image search results carefully—thumbnails can be misleading

**If image found in earlier context**: You may have your answer without forensics. Document the earlier appearance, compare contexts.

**If no earlier version found**: Proceed to context verification.

**Claimed timing verification** (5 minutes):
- When does the claim say this was taken?
- Does that timing match known events?
- Were there weather conditions, lighting conditions, other factors that should be visible?
- Do other verified images from the same time/place exist for comparison?

**Source tracing** (5 minutes):
- Where did this image first appear?
- Who posted it originally?
- What's the source's credibility and history?
- Can you trace the sharing chain?

**Practical reality**: Context verification answers the question faster than forensics in most cases. An image from 2019 being passed off as current doesn't need forensic analysis—you need reverse image search.

### Step 2: Acquire the best available file

If you need technical analysis, file quality matters.

**Priority order for analysis**:
1. Original file from source (if obtainable)
2. Highest resolution version available
3. Version with metadata intact
4. Platform-hosted version (compressed, but timestamped)

**File quality impact**:
- Social media compression destroys most forensic artifacts
- Screenshots are worse than downloads
- Multiple re-uploads degrade quality exponentially
- Metadata stripped by most platforms

**What you can often obtain**:
- Platform-hosted version (compressed, metadata stripped)
- Screenshot (worst quality for analysis)

**Practical reality**: You'll usually work with degraded files. Adjust your confidence expectations accordingly.

### Step 3: Metadata examination

Check available metadata using EXIF viewers or forensic tools.

**What to look for**:

Software indicators:
- "Software" field showing editing applications
- Adobe Photoshop, GIMP, mobile editing apps
- Note: Editing software presence indicates editing, not necessarily malicious manipulation

Timestamp analysis:
- Creation date vs. claimed date
- Modification timestamps
- Timestamp consistency across metadata fields

Location data:
- GPS coordinates if present
- Do they match claimed location?
- Note: Most shared images have GPS stripped

Camera information:
- Does claimed device match metadata?
- Is camera type plausible for the context?

**Metadata assessment**:

Strong signal of manipulation:
- Metadata shows editing software AND other inconsistencies (timing, location)
- Thumbnail differs significantly from main image
- Modification date precedes creation date (tampering)

Medium signal:
- Editing software present (but legitimate editing is common)
- Some metadata inconsistencies

Weak signal:
- Metadata stripped (normal for social media)
- Metadata present and consistent (can be falsified, but absence is more suspicious)

**In our scenario**: Download the best available version. Run EXIF extraction. Check for software fields, timestamps, and any GPS data. Compare metadata timing to claimed event timing.

### Step 4: Visual forensics (if time permits)

With remaining time, conduct visual examination.

**Quick visual checks** (10 minutes):
- Overall plausibility: Does the image make sense?
- Lighting consistency: Do shadows align with light sources?
- Scale consistency: Do sizes and proportions make sense?
- Edge inspection: Zoom to 100%+ and examine object boundaries

**Specific artifact hunting**:

Clone regions:
- Look for repeating patterns, especially in backgrounds
- Clone stamp leaves visible patterns if careless
- Use tools that highlight duplicate regions if available

Edge artifacts:
- Examine boundaries of key elements
- Look for blur, haloing, or pixelation
- Compare edge quality across the image

Lighting analysis:
- Identify light sources from shadows
- Check if all shadows are consistent
- Examine reflections for consistency

**Tool-assisted analysis** (if available):
- Error Level Analysis (with appropriate skepticism)
- Noise analysis tools
- Forensic software suites

**Visual forensics assessment**:

Strong signal:
- Multiple visual artifacts converge (lighting + edges + clone patterns)
- Obvious compositing visible at high magnification
- Clear evidence of addition or removal

Medium signal:
- One or two anomalies present
- Possible artifacts that could also be compression
- Something looks unusual but can't be definitively characterized

Weak signal:
- "Looks fake" without specific technical indicators
- Compression artifacts (normal in web images)
- Low quality (authentic photos are often low quality)

### Step 5: Synthesize and assess confidence

After analysis, determine what you can actually claim.

**Can you prove manipulation?**
Rarely, unless you have:
- Original file for comparison
- Clear technical evidence of editing
- Context evidence (earlier appearance, different context)

**Can you prove authenticity?**
Almost never, unless you have:
- Chain of custody from capture to you
- Corroborating evidence from multiple sources
- Original RAW file with intact metadata

**What are your remaining uncertainties?**
Document what you don't know:
- Unable to obtain original file
- Metadata stripped by platform
- Compression prevents detailed forensic analysis
- Cannot rule out sophisticated manipulation

**Confidence calibration**:

High confidence in manipulation:
- Reverse search finds image in different context
- Multiple technical indicators converge
- Clear evidence of specific edits

Medium confidence:
- Some technical indicators present
- Context is suspicious
- But alternative explanations exist

Low confidence / Undetermined:
- Technical analysis inconclusive
- Can't rule out either authenticity or manipulation
- File quality prevents reliable analysis

**In our scenario**: After your analysis, where do you land? Can you make a definitive claim, or are you in "undetermined" territory?

### Step 6: Formulate appropriate response

Match your response to your evidence level.

**If high confidence in manipulation**:
- State specifically what evidence shows manipulation
- Describe the manipulation (old image, edited content, synthetic)
- Acknowledge any remaining uncertainty
- Consider DIM response (debunk, platform report)

**If medium confidence**:
- State that authenticity cannot be verified
- Describe specific concerns without overclaiming
- Note what additional evidence would help
- Recommend caution without definitive claims

**If low confidence / undetermined**:
- Acknowledge you cannot determine authenticity
- Focus on what you can verify (claims, context, sources)
- Recommend independent verification
- Don't guess to fill the uncertainty

---

## Evidence Ladder for Technical Detection

### Strong signals (manipulation likely):

- Image found in different context from earlier date via reverse search
- Multiple forensic indicators converge (lighting + edges + noise patterns)
- Metadata shows editing software AND visual evidence of edits
- Original unedited version located and compared
- Thumbnail differs substantially from main image
- Clear clone regions or copied elements identified

### Medium signals (warrants deeper investigation):

- One or two technical anomalies present
- Metadata shows editing software (without other indicators)
- Context doesn't match claimed circumstances
- Similar manipulated content from same source previously
- Some visual inconsistencies that could have alternative explanations

### Weak signals (insufficient alone):

- "Looks fake" without specific technical indicators
- Metadata stripped (standard on most social media)
- Low image quality (authentic mobile photos often low quality)
- Compression artifacts (normal in web distribution)
- Error Level Analysis shows variation (often misinterpreted)
- "Something seems off" (subjective impression)

---

## Common Technical Detection Errors

### Over-reliance on ELA

Error Level Analysis is frequently misinterpreted. Different error levels can result from:
- Multiple compression cycles (normal in web sharing)
- Different source quality in original capture
- Platform processing
- Legitimate editing (color correction, cropping)

Don't treat ELA variation as proof of manipulation without corroborating evidence.

### Compression artifact confusion

JPEG compression creates block artifacts that can look like editing traces. Multiple re-saves create complex artifact patterns. On typical web images, distinguishing compression artifacts from editing artifacts is unreliable.

### Lighting over-interpretation

Real-world lighting is complex. Multiple light sources, reflective surfaces, transparent objects, and mixed lighting create patterns that can look inconsistent. Don't conclude manipulation from ambiguous lighting without clear evidence.

### Context neglect

Technical forensics on an image that reverse search shows was published three years ago is wasted effort. Context verification first.

### Confidence inflation

Technical-looking analysis creates false confidence. Numbers, tools, and jargon don't make uncertain conclusions certain. Be honest about what your analysis can and cannot determine.

### Authentication fallacy

Finding no evidence of manipulation doesn't prove authenticity. You've shown it's not obviously fake—you haven't shown it's real. These are different claims.

---

## Tool Limitations to Acknowledge

### Free online forensic tools

Limitations:
- Limited accuracy on compressed images
- Provide indicators, not conclusions
- Easy to misinterpret results
- Not suitable for high-stakes decisions

Use for: Initial screening, supporting evidence

### Reverse image search

Limitations:
- Doesn't find significantly modified versions
- Coverage gaps (not all images indexed)
- Recent images may not appear yet
- Cropped or flipped images may not match

Use for: First-line context verification

### Metadata viewers

Limitations:
- Metadata often stripped
- Metadata can be falsified
- Presence of editing software ≠ malicious manipulation
- Absence of metadata ≠ suspicious

Use for: Quick check, supporting evidence

### AI detection tools

Limitations:
- Rapidly changing technology
- High false positive and negative rates
- Trained on older generation synthetic content
- Confident-seeming results that may be wrong

Use for: Screening, not definitive determination

---

## Stop Rules

Stop technical analysis when:

### Timebox reached
45 minutes is up. Make your decision based on available evidence. "Based on available analysis in the time available, we [can/cannot] determine authenticity."

### Context verification sufficient
Reverse image search found the image in an earlier context. Old image recontextualized doesn't need forensic analysis—you have your answer.

### Confidence plateau
Additional analysis isn't yielding new information. You've extracted what you can from this file.

### Expertise limit reached
Complex forensics requires specialists. If analysis requires expertise you don't have, acknowledge the limitation.

### File quality prevents reliable analysis
The file is too compressed, too small, or too degraded for meaningful technical analysis. Don't pretend to extract information that isn't there.

---

## DIM Mapping

### If strong evidence of manipulation:

**Gen 2 (Debunking)**:
- Publish findings with specific technical evidence
- Document what the manipulation is (old image, edited, synthetic)
- Provide comparison if original available

**Gen 4 (Moderation)**:
- Report to platforms with evidence documentation
- Request removal or labeling
- Provide technical evidence package

### If medium evidence:

**Gen 3 (Prebunking)**:
- Prepare messaging about manipulation techniques generally
- Don't claim this specific image is confirmed fake

**Qualified statement**:
- "We cannot verify this image's authenticity"
- "This image shows characteristics that warrant caution"
- Continue verification while monitoring spread

### If weak evidence or undetermined:

**No claim about authenticity in either direction**:
- Focus on what you can verify (claims, context, sources)
- "The origin and authenticity of this image remain unverified"
- Recommend independent verification

---

## Key Takeaways

1. **Context verification before forensics**. Reverse image search and context checking are faster, cheaper, and often more conclusive than technical analysis.

2. **Technical analysis provides indicators, not proof**. Forensic tools suggest possibilities; they rarely prove conclusions definitively.

3. **File quality matters enormously**. Most web images are too degraded for reliable forensic analysis.

4. **Absence of evidence is not evidence**. No manipulation detected ≠ image authentic.

5. **Match claims to evidence**. "Undetermined" is often the honest answer. Don't overclaim to provide certainty.

6. **Know your tool limitations**. Understand what each method can and cannot reliably determine.

---

## Test Your Understanding

**Scenario**: An image shows a political figure in a compromising situation. EXIF data shows editing software (Adobe Photoshop) was used. Reverse image search finds no earlier versions. The figure's office says it's fake but provides no evidence.

**Questions**:

1. What's your assessment and confidence level?
2. What three specific checks would you run next (prioritized by reliability)?
3. What's one overclaim you'll avoid?
4. What statement is appropriate at current evidence level?

### Model response approach:

**Assessment**: Undetermined, confidence: Low

The editing software indicator is suggestive but not conclusive—legitimate photo editing is common. No reverse search hit means we don't have context evidence of earlier use. The denial without evidence doesn't help either way.

**Three specific checks** (prioritized):

1. **Visual examination at high magnification**: Look for edge artifacts, lighting inconsistencies, clone patterns around the figure. Most reliable for detecting compositing if present.

2. **Source tracing**: Where did this first appear? Who posted it? What's their history? Context about source can be more informative than technical analysis.

3. **Corroboration search**: Are there other images or videos from the claimed event? Do other visual records exist that would corroborate or contradict this image?

**Overclaim to avoid**: "EXIF data proves this was manipulated." Photoshop presence shows editing occurred—many authentic photos are edited. It doesn't prove malicious manipulation or that the content is fabricated.

**Appropriate statement**: "We have examined this image and cannot verify its authenticity. The image shows signs of having been processed with editing software, though this alone is not conclusive evidence of fabrication. We have not located earlier versions that would establish its origins. We recommend treating this image with caution until its provenance can be independently verified."

---

**Penalty for**: Claiming definitive conclusions from technical analysis alone; ignoring context verification; treating editing software as proof of fabrication

**Reward for**: Starting with context before forensics; matching claims to evidence strength; acknowledging tool limitations; honest uncertainty"""

for i, m in enumerate(data):
    if m.get('id') == 'Module-Technical-Detection-Methods':
        data[i]['content'] = expanded_content
        data[i]['estimatedTime'] = '30 minutes'
        break

with open('/home/fani/projects/emod-platform/lib/modules-data.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Detection Module 2 expanded successfully!")
print(f"New content length: {len(expanded_content)} characters")
