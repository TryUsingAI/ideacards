# IdeaCards — Card Specification (v1)

**Status:** LOCKED  
**Audience:** Humans + AI  
**Purpose:** Define the exact structure of an IdeaCard.  
This document is law. Changes require intent and justification.

---

## Core Principle

An **IdeaCard** is a small, finished thinking object.

- One card = one idea
- No pressure to continue
- Optional depth, never obligation
- Neutral, calm, non-performative tone

Cards are designed to restore curiosity, not teach exhaustively.

---

## Card Structure (Required Sections)

Every IdeaCard MUST contain the following sections in this exact order.  
No sections may be omitted. No additional sections may be added.

---

## 0. Title

**Required**

### Rules
- Use the canonical Wikipedia article title
- Title Case
- No subtitles
- No emojis
- No clickbait
- No trailing punctuation

### Purpose
Names the idea clearly and unambiguously.

---

## 1. Definition

**Required | Exactly 1 sentence | ~20–30 words**

### Rules
- Dictionary-style definition
- Plain language
- Neutral tone
- No metaphors
- No hedging (“often,” “generally,” etc.)
- No explanation of importance or implications

### Template (guideline)
> *The ___ is ___.*

If a clean one-sentence definition is not possible, the topic is not card-worthy.

---

## 2. Concept Framing

**Required | Exactly 1 sentence**

### Hard Constraint
This section MUST begin with the exact phrase:

> **This idea exists because**

No variation is allowed.

### Rules
- One sentence only
- Explains why humans noticed, named, or care about this idea
- Focus on motivation, consequence, or curiosity gap
- Do NOT explain mechanics or details

### Purpose
Answers: *Why does this idea exist as a concept worth thinking about?*

---

## 3. Core Explanation

**Required | 3–5 sentences | ~60–90 words**

### Rules
- Plain, calm language
- No metaphors or analogies
- No rhetorical questions
- No conclusions or summaries
- No second-person language (“you”)
- May include **at most 1–2 statistics**, only if they meaningfully improve understanding
- Statistics must be rounded and human-readable

### Purpose
Explains what the idea actually is, at the minimum level required for understanding.

This section should stop before the reader feels cognitive fatigue.

---

## 4. Why It Matters / Why It’s Debated

**Required | 2–3 sentences | ~40–60 words**

### Rules
- Focus on implications, disagreement, or significance
- No moral judgments
- No advice
- No calls to action
- Must leave the idea partially unresolved

### Purpose
Reinforces curiosity without demanding engagement or response.

---

## 5. Escape Hatches

**Required | Exactly 3 items | Deterministic**

Escape hatches provide optional depth. They must feel safe to ignore.

### Fixed Items (in this order)

1. **Read the full article**  
   - Direct link to the corresponding Wikipedia article

2. **Related but different**  
   - One closely related Wikipedia concept
   - Chosen deterministically (not personalized)

3. **Common misconception**  
   - One short corrective sentence
   - Clarifies a frequent misunderstanding
   - Must not introduce new complexity

### Rules
- No additional links
- No personalization
- No rankings
- No prose generation beyond the misconception sentence

---

## Images (Optional, Strictly Limited)

- Maximum **1 image per card**
- Image must appear **between the Title and Definition**
- Image must orient or clarify, not decorate
- Preferred source: Wikimedia Commons
- Image must be skippable without loss of understanding

Images are supportive, not central.

---

## Length Constraints

- Target total length: **120–150 words**
- Absolute maximum: **180 words**

Cards exceeding limits must be rejected.

---

## Prohibited Content (Hard Blacklist)

An IdeaCard MUST NOT contain:

- Questions directed at the reader
- Second-person language (“you”)
- Metaphors or analogies
- Emotional or motivational language
- Productivity framing
- Moral judgments
- Calls to action
- References to AI or Wikipedia
- “In conclusion” or summary language

Violation of any item invalidates the card.

---

## Metadata (Non-UI, Required)

Each card MUST include the following metadata fields:

- `schema_version`
- `prompt_version`
- `category`
- `wikipedia_pageid`
- `wikipedia_revision_id` (if available)
- `generated_at`

Metadata is required for versioning, regeneration, and trust.

---

## Rejection Rules

A generated card must be discarded if:

- The definition is vague, compound, or unclear
- Concept framing is lazy (“because it exists,” “because it happened”)
- Tone sounds clever, opinionated, or academic
- Word limits are exceeded
- The misconception is trivial or obvious

Rejecting cards is expected and encouraged.

---

## Final Note

An IdeaCard is not an article, a lesson, or a feed item.

It is a **finished thought**.

If a card asks something of the reader, it has failed.
