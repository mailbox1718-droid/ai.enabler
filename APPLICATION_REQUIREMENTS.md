# Application Requirements

## AI Coder: Complete Claude Code & Coding Agents – Interactive Learning Guide

---

## 1. Purpose & Vision

The application shall be an **interactive digital learning guide** that enables users to progress from **zero prior knowledge** to the **ability to independently build real projects** using an AI coding agent (Cursor, Codex or Claude Code) and a basic developer toolchain (IDE, CLI, plugins).

The application is intended to:

- Democratize AI‑assisted coding knowledge
- Support self‑paced, journey‑based learning
- Combine conceptual understanding with hands‑on practice
- Produce tangible learner outputs (projects)

---
## 1.1 Technical Details 

- Implemented as a modern NextJS app, client rendered
- The NextJS app should be created in a subdirectory `frontend`
- No persistence
- No user management for the MVP
- Use popular libraries
- As simple as possible but with an elegant UI

<!--## 1.2 Color Scheme

 - Accent Yellow: `#ecad0a` - accent lines, highlights
- Blue Primary: `#209dd7` - links, key sections
- Purple Secondary: `#753991` - submit buttons, important actions
- Dark Navy: `#032147` - main headings
- Gray Text: `#888888` - supporting text, labels -->

## 1.3 Strategy

1. Write plan with success criteria for each phase to be checked off. Include project scaffolding, including .gitignore, and rigorous unit testing.
2. Execute the plan ensuring all critiera are met
3. Carry out extensive integration testing with Playwright or similar, fixing defects
4. Only complete when the MVP is finished and tested, with the server running and ready for the user

## 1.4 Coding standards

1. Use latest versions of libraries and idiomatic approaches as of today
2. Keep it simple - NEVER over-engineer, ALWAYS simplify, NO unnecessary defensive programming. No extra features - focus on simplicity.
3. Be concise. Keep README minimal. IMPORTANT: no emojis ever

---

## 2. Target Audience

The application shall support the following user groups:

- Beginners with no prior coding experience
- Junior developers
- Non‑technical professionals (e.g., project managers, analysts) seeking AI coding literacy
- Technical professionals transitioning to AI‑assisted development

No prerequisite technical knowledge shall be assumed.

---

## 3. Learning Model & Pedagogy Requirements

### 3.1 Journey-Based Learning

- The application shall guide learners through a **clearly defined learning journey**.
- The journey shall progress from fundamentals → practical skills → advanced usage → capstone projects.
- Each stage shall explicitly state:
  - Learning objectives
  - Expected outcomes
  - Required effort (qualitative, not time-based)

### 3.2 Modular Structure

The learning content shall be structured into:

- Modules (conceptual learning)
- Labs (guided hands-on exercises)
- Flashcards (reinforcement & revision)
- Assessments (knowledge validation)
- Projects (practical application)

Each module shall be:

- Self‑contained
- Sequential but navigable independently
- Linked to relevant labs, flashcards, and assessments

---

## 4. Core Functional Requirements

### 4.1 Content Delivery

The application shall support:

- Structured written learning content
- Code examples and command samples
- Step‑by‑step walkthroughs for labs
- Embedded references and callouts for key concepts

### 4.2 Hands-On Labs

- Labs shall provide **guided practical activities**.
- Each lab shall define:
  - Goal
  - Preconditions
  - Step-by-step instructions
  - Success criteria
  - Common mistakes or warnings
- Labs shall be designed to be executed using the learner’s local environment.

---

### 4.3 Flashcards

- The application shall include an interactive flashcard system.
- Flashcards shall:
  - Be grouped by themes (concepts, commands, mistakes)
  - Support self‑review and repetition
  - Be usable independently of modules
- Flashcards shall reinforce definitions, workflows, and best practices.

---

### 4.4 Assessments

- The application shall provide on‑demand assessments.
- Assessments shall include:
  - Knowledge checks (e.g., multiple choice, scenario-based)
  - Conceptual reasoning questions
  - Interpretation of example outputs
- Each assessment shall:
  - Provide immediate feedback
  - Explain correct and incorrect answers
  - Indicate knowledge gaps

---

### 4.5 Projects

The application shall include **progressive projects**:

- Beginner project (introductory)
- Intermediate project (multi-file / structured)
- Capstone project (end‑to‑end)

Each project shall define:

- Problem statement
- Expected deliverables
- Evaluation criteria (rubric)
- Completion checklist

Projects shall represent **realistic use scenarios**, not toy examples.

---

## 5. User Experience (UX) Requirements

### 5.1 Navigation & Information Architecture

- Users shall easily understand:
  - Where they are in the learning journey
  - What comes next
- Navigation shall clearly separate:
  - Learning content
  - Practice
  - Revision
  - Evaluation

### 5.2 Progress Visibility

- The application shall make learner progress visible.
- Users shall be able to:
  - Identify completed modules and labs
  - See remaining content
  - Track project completion status

---

### 5.3 Guidance & Clarity

- Language shall be simple, clear, and beginner-friendly.
- Technical jargon shall be explained when first introduced.
- Concepts shall be introduced before being used in practice.

---

## 6. Content Governance Requirements

### 6.1 Content Structure & Consistency

- Learning content shall follow consistent structure and formatting.
- Each learning unit shall include:
  - Objectives
  - Main content
  - Reinforcement elements
  - Next steps

### 6.2 Versioning & Maintainability

- Content shall be modular to allow:
  - Easy updates
  - Additions of future modules or labs
- Updates shall not break the overall learning journey.

---

## 7. Non-Functional Requirements

### 7.1 Accessibility

- Content shall be readable and usable by non-technical users.
- Visual hierarchy shall improve comprehension.
- Color and layout shall support clarity.

### 7.2 Scalability

- The application shall support:
  - Addition of new modules
  - Expansion to additional AI coding tools in the future (conceptually)
- Learning paths shall be extensible.

---

## 8. Explicit Out-of-Scope Items

The following are intentionally out of scope for this requirements document:

- Choice of frontend framework or stack
- Hosting or deployment architecture
- Authentication and identity management
- Analytics, telemetry, or reporting tools
- Integration with enterprise platforms or LMS systems

---

## 9. Success Criteria

The application shall be considered successful if:

- A beginner can follow the journey without external assistance
- Users can complete practical projects independently
- Learning progression is clear and motivating
- Content can be maintained and extended over time

---

## 10. Summary

This application is a **learning experience, not just documentation**.  
It focuses on:

- Guided journeys
- Hands-on practice
- Reinforcement
- Practical outcomes

The design shall always prioritize **clarity, learning effectiveness, and real-world applicability** over technical sophistication.