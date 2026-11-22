import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "langa-u6-lesson-6-2",
  code: "6-2",
  title: "Guided Literary Analysis (Commentary)",
  goal: "I CAN deliver a guided literary analysis — a structured commentary that responds to a text in real time.",
  standards: ["Oral", "Literary analysis", "Commentary"],
  vocabulary: [
    { term: "Guided literary analysis", definition: "A structured oral commentary on a text — responding to what the text does, not delivering a script." },
    { term: "Framework", definition: "A mental structure for analysis: context, structure, language, themes — flexible, not rigid." },
    { term: "Responsive commentary", definition: "Analysis that adjusts to the actual text — following its turns, surprises and structures." },
    { term: "Anchor point", definition: "A specific quotation or detail that grounds a claim in evidence." },
    { term: "Signposting", definition: "Verbal cues that guide the listener through the analysis." },
    { term: "Synthesis", definition: "The closing move that draws the analysis together into a judgement." },
  ],
  concepts: [
    {
      id: "langa-u6-framework",
      title: "The commentary framework",
      skill: "Use a flexible framework (context, structure, language, themes) to guide literary analysis.",
      lesson: {
        sections: [
          {
            heading: "The framework",
            body: "A **framework** is a mental checklist, not a script: **context** (what moment produced this?), **structure** (how is it organised?), **language** (what are the key choices?), **themes** (what does it explore?). Use it to ensure coverage, not to dictate content.",
          },
          {
            heading: "Responsive vs scripted",
            body: "A **scripted** commentary delivers prepared material regardless of what the text does. A **responsive** commentary follows the text — if the extract is all imagery, spend more time on imagery; if it's all structure, follow the structure. The framework guides; the text leads.",
          },
          {
            heading: "Anchor points",
            body: "Every claim needs an **anchor** — a specific quotation or detail. 'The poem uses imagery' is weak; 'the phrase \"iron gate\" personifies morning as mechanical' is strong. Anchors make the analysis concrete and credible.",
          },
        ],
        keyFormulas: [
          { name: "Framework checklist", statement: "Context + structure + language + themes — coverage, not script" },
          { name: "Anchor rule", statement: "Every claim needs a specific quotation or detail" },
        ],
        workedExample: {
          problem: "Your framework says 'analyze language' but the extract is mostly structure. What do you do?",
          solution: "Follow the text — spend more time on structure. The framework ensures you don't miss anything important, but the text determines where the emphasis goes.",
        },
      },
      questions: [
        {
          id: "langa-u6-fq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'framework' for literary analysis is best understood as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of literary terms" },
              { id: "b", text: "A fixed script to deliver" },
              { id: "c", text: "A summary of the text" },
              { id: "d", text: "A flexible checklist that guides coverage" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework", statement: "Flexible checklist for coverage, not a script." },
            ],
            steps: [
              { reasoning: "A framework guides coverage; the text determines emphasis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Flexible checklist",
          },
        },
        {
          id: "langa-u6-fq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'responsive' commentary is more effective than 'scripted' commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responsive commentary", statement: "Following the text's actual features produces more relevant analysis." },
            ],
            steps: [
              { reasoning: "Scripted commentary delivers prepared material — it may miss what the text actually does.", marks: 1, markCode: "M" },
              { reasoning: "Responsive commentary follows the text — if it's all imagery, analyse imagery; if it's all structure, follow the structure.", marks: 1, markCode: "M" },
              { reasoning: "The examiner rewards engagement with the specific text, not generic literary commentary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Responsive commentary engages the specific text; scripted commentary delivers preparation regardless of relevance.",
            commonErrors: ["Preparing a fixed commentary that ignores the actual extract."],
          },
        },
        {
          id: "langa-u6-fq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The door was neither open nor closed. She stood before it for an hour, her hand on the handle, feeling the wood's cool indifference.\n\nThen she walked away — not because she had decided, but because the door had not.",
          },
          stem: "Write a 2-minute commentary outline on this extract, using the framework (context, structure, language, themes).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commentary outline", statement: "Framework coverage + anchor points + responsive emphasis." },
            ],
            steps: [
              { reasoning: "Context: the extract is timeless — no specific historical moment; the door is universal threshold.", marks: 1, markCode: "M" },
              { reasoning: "Structure: two paragraphs — standoff then departure; the second paragraph resolves without resolving.", marks: 1, markCode: "M" },
              { reasoning: "Language: 'neither open nor closed' (paradox), 'cool indifference' (personification), 'not because she had decided, but because the door had not' (agency reversal).", marks: 1, markCode: "M" },
              { reasoning: "Theme: choice as non-choice — the extract suggests that sometimes not-choosing is the choice; the door's indifference forces the issue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outline: context (timeless threshold), structure (standoff→departure), language (paradox, personification, agency reversal), theme (choice as non-choice).",
            commonErrors: ["Covering all four framework areas superficially without depth on the text's actual features."],
          },
        },
        {
          id: "langa-u6-fq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a 5-minute guided literary analysis on the following extract, including framework coverage and anchor points.",
          extract: {
            title: "The Crossing (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          parts: [
            { label: "a", prompt: "Write the opening (identify text, state focus).", marks: 2 },
            { label: "b", prompt: "Outline analysis of structure and language (with anchor points).", marks: 4 },
            { label: "c", prompt: "Write the closing synthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Guided analysis", statement: "Opening + structured analysis + synthesis, responsive to the text." },
            ],
            steps: [
              { part: "a", reasoning: "Opening example: 'This poem explores what it means to cross a river that is never quite the same — I'll analyse how its structure and language enact that tension.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Structure: the poem moves from river's action ('took... gave it back') to human response ('I cross it anyway') — the shift from natural to personal agency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Language anchor 1: 'a different bridge, they say' — the hedge 'they say' introduces doubt; the poem questions its own premise.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Language anchor 2: 'the carpenters insist / it is the same' — the verb 'insist' suggests denial, not fact; continuity is a claim.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Language anchor 3: 'The toll is one memory / at a time' — the toll metaphor makes memory a currency; crossing costs something intangible.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Closing example: 'The poem's structure enacts its theme — the river changes, the bridge is restored, but the crossing costs memory; continuity is not free.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Opening: identify + focus. Structure: natural→personal agency. Language: 'they say' hedge, 'insist' denial, 'toll' metaphor. Closing: continuity is not free.",
            commonErrors: ["Generic commentary without anchor points; no synthesis."],
          },
        },
        {
          id: "langa-u6-fq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The commentary framework covers which four areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Author, date, genre, style" },
              { id: "b", text: "Plot, character, setting, theme" },
              { id: "c", text: "Context, structure, language, themes" },
              { id: "d", text: "Introduction, body, conclusion, evaluation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commentary framework", statement: "Context + structure + language + themes = coverage checklist." },
            ],
            steps: [
              { reasoning: "The four framework areas are context, structure, language and themes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Context, structure, language, themes",
          },
        },
        {
          id: "langa-u6-fq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'anchor point' in commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific quotation or detail that grounds a claim in evidence" },
              { id: "b", text: "The opening line of the extract" },
              { id: "c", text: "A memorable quotation you like" },
              { id: "d", text: "A summary of the text's plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Anchor points", statement: "Every claim needs a specific quotation or detail." },
            ],
            steps: [
              { reasoning: "Anchors make analysis concrete — the claim is tied to the text.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A specific quotation or detail that grounds a claim",
          },
        },
        {
          id: "langa-u6-fq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Responsive commentary differs from scripted commentary because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Follows the text's actual features and adjusts emphasis accordingly" },
              { id: "b", text: "Covers all four framework areas equally" },
              { id: "c", text: "Delivers prepared material regardless of the text" },
              { id: "d", text: "Avoids using quotations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responsive commentary", statement: "The text leads; the framework guides." },
            ],
            steps: [
              { reasoning: "Responsive commentary follows where the text actually goes — imagery-heavy extracts get imagery analysis.", marks: 1, markCode: "M" },
              { reasoning: "Scripted commentary ignores the text's actual features.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Follows the text's actual features and adjusts emphasis",
          },
        },
        {
          id: "langa-u6-fq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "If an unseen extract is dominated by formal experimentation, a responsive commentary should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore structure and focus only on themes" },
              { id: "b", text: "Emphasise structure and form where the text leads" },
              { id: "c", text: "Cover all framework areas equally regardless" },
              { id: "d", text: "Summarise the plot instead of analysing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responsive emphasis", statement: "The framework ensures coverage; the text determines where emphasis goes." },
            ],
            steps: [
              { reasoning: "A form-dominated extract rewards structural analysis.", marks: 1, markCode: "M" },
              { reasoning: "Equal coverage wastes time on absent features.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Emphasise structure and form where the text leads",
          },
        },
        {
          id: "langa-u6-fq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The framework is described as 'a checklist, not a script' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ensures coverage while the text determines content and emphasis" },
              { id: "b", text: "It must be memorised verbatim" },
              { id: "c", text: "It can be ignored completely" },
              { id: "d", text: "It replaces the need for quotations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework flexibility", statement: "Coverage without scripting — the text leads." },
            ],
            steps: [
              { reasoning: "The checklist prevents omissions; the extract decides the content.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ensures coverage while the text determines content",
          },
        },
        {
          id: "langa-u6-fq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the strongest anchor point for the claim 'the poem makes continuity contested'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'they say' hedges the claim while 'the carpenters insist' asserts it — continuity becomes disputed" },
              { id: "b", text: "'The poem has five lines'" },
              { id: "c", text: "'The poem is about a river'" },
              { id: "d", text: "'The poem uses rhyme'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Anchor strength", statement: "The best anchor is the specific wording that creates the effect claimed." },
            ],
            steps: [
              { reasoning: "'they say' vs 'insist' is the exact verbal mechanism of contestation.", marks: 1, markCode: "M" },
              { reasoning: "Generic observations about length or rhyme cannot support the claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The 'they say'/'insist' contrast",
          },
        },
        {
          id: "langa-u6-fq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain what 'coverage without script' means when using the commentary framework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework use", statement: "The checklist guarantees coverage; the text determines content." },
            ],
            steps: [
              { reasoning: "The four areas (context, structure, language, themes) ensure nothing important is missed.", marks: 1, markCode: "M" },
              { reasoning: "It does not dictate order, wording or emphasis — that comes from the text.", marks: 1, markCode: "M" },
              { reasoning: "Example: an imagery-dominated extract earns more time on language; a structurally experimental one on structure.", marks: 1, markCode: "M" },
              { reasoning: "The result: comprehensive but responsive analysis rather than a fixed template.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The framework is a safety net for coverage — the extract itself directs where the commentary spends its time.",
            commonErrors: ["Treating the framework as a rigid script."],
          },
        },
        {
          id: "langa-u6-fq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply the framework to the 'The Door' extract: which areas dominate and which are minimal?",
          extract: {
            title: "The Door (extract)",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The door was neither open nor closed. She stood before it for an hour, her hand on the handle, feeling the wood's cool indifference.\n\nThen she walked away — not because she had decided, but because the door had not.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework application", statement: "Identify which areas the text actually emphasises." },
            ],
            steps: [
              { reasoning: "Structure dominates — two paragraphs move from standoff to departure; the second resolves without resolving.", marks: 1, markCode: "M" },
              { reasoning: "Language is rich — paradox ('neither open nor closed'), personification ('cool indifference'), agency reversal ('the door had not').", marks: 1, markCode: "M" },
              { reasoning: "Context is minimal — the extract is timeless and universal; no specific historical moment.", marks: 1, markCode: "M" },
              { reasoning: "Theme emerges from structure and language rather than being stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structure and language dominate; context is minimal; theme emerges indirectly.",
            commonErrors: ["Forcing equal coverage of all four areas regardless of the text."],
          },
        },
        {
          id: "langa-u6-fq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Apply the commentary framework to the following poem.",
          extract: {
            title: "The Crossing (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          parts: [
            { label: "a", prompt: "Context: what moment or genre does the poem suggest?", marks: 2 },
            { label: "b", prompt: "Structure: how is the poem organised?", marks: 2 },
            { label: "c", prompt: "Language: identify two anchor points.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework application", statement: "Context + structure + language, anchored to the text." },
            ],
            steps: [
              { part: "a", reasoning: "Context: a contemporary lyric poem — no specific historical moment; the river and bridge are universal symbols of transition.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Structure: the poem shifts from natural agency ('the river took') to human response ('I cross it anyway') — the turn happens mid-poem.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Anchor 1: 'they say' vs 'the carpenters insist' — competing claims about sameness.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Anchor 2: 'The toll is one memory / at a time' — memory figured as currency; crossing has a cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context: universal transition symbol. Structure: natural→human agency shift. Language: contested continuity, memory-as-toll.",
            commonErrors: ["Generic context claims; structure described without the agency shift; anchors without effects."],
          },
        },
        {
          id: "langa-u6-fq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe your first 60 seconds of commentary on an unseen extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commentary opening", statement: "Identify + focus + preview + anchor, delivered with composure." },
            ],
            steps: [
              { reasoning: "Identify the text type and genre — 'This is a lyric poem / a prose extract' — so the audience knows what to expect.", marks: 1, markCode: "M" },
              { reasoning: "State your focus as a thesis — 'I will argue that...' or 'the extract's power lies in...'", marks: 1, markCode: "M" },
              { reasoning: "Preview the framework areas you will cover — 'I will look at structure, language and theme.'", marks: 1, markCode: "M" },
              { reasoning: "Anchor immediately to one striking feature to show engagement with the specific text.", marks: 1, markCode: "M" },
              { reasoning: "Signpost the commentary's own structure — 'first..., then..., finally...'.", marks: 1, markCode: "M" },
              { reasoning: "Delivery: measured pace, eye contact, a pause after the thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify, thesis, preview, anchor, signpost — all within 60 seconds at controlled pace.",
            commonErrors: ["Starting with 'the poem is about...' summary; no thesis; rushing the opening."],
          },
        },
        {
          id: "langa-u6-fq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a 4-minute guided analysis on the following poem.",
          extract: {
            title: "The Ferryman (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "He poled the dark\nand counted stars\nas fares.\nEach ripple a coin\nspent on the far shore.",
          },
          parts: [
            { label: "a", prompt: "Opening: identify the text and state your focus.", marks: 2 },
            { label: "b", prompt: "Analyse structure and language with two anchor points.", marks: 4 },
            { label: "c", prompt: "Closing synthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Guided analysis", statement: "Opening + anchored analysis + synthesis, responsive to the text." },
            ],
            steps: [
              { part: "a", reasoning: "Opening example: 'This five-line poem turns a river crossing into an economy — I will show how its structure and imagery make passage a transaction.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Structure: short lines and caesura-like breaks mimic the ferry's halting motion; the poem moves from action ('poled the dark') to accounting ('counted stars as fares').", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Anchor 1: 'counted stars / as fares' — celestial bodies become currency; the sky itself is priced.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Anchor 2: 'Each ripple a coin / spent on the far shore' — the water charges for passage; arrival costs something.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Closing example: 'The poem's economy is its argument — every crossing, natural or human, exacts a toll in what we carry across.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Opening identifies focus on passage-as-transaction. Structure: halting lines mirror the crossing. Anchors: stars-as-fares, ripples-as-coins. Close: crossing exacts a toll.",
            commonErrors: ["No anchor points; feature-spotting without effects; no synthesis."],
          },
        },
        {
          id: "langa-u6-fq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim: 'The framework guarantees a good commentary.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating method claims", statement: "A tool ensures minimum coverage, not quality." },
            ],
            steps: [
              { reasoning: "The framework ensures coverage — it prevents omissions — but coverage is not quality.", marks: 1, markCode: "M" },
              { reasoning: "Depth requires anchor points and analysis of effects, which the checklist cannot supply.", marks: 1, markCode: "M" },
              { reasoning: "Responsiveness requires following the text, which demands judgement the framework cannot automate.", marks: 1, markCode: "M" },
              { reasoning: "Delivery, timing and synthesis also determine quality and sit outside the framework.", marks: 1, markCode: "M" },
              { reasoning: "A weak commentary can tick all four boxes superficially.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the framework is necessary but not sufficient — it is a floor, not a ceiling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The framework guarantees coverage, not quality — depth, responsiveness and delivery must be added.",
            commonErrors: ["Agreeing that method guarantees results; ignoring delivery and judgement."],
          },
        },
      ],
    },
    {
      id: "langa-u6-practice",
      title: "Practising the commentary",
      skill: "Rehearse and refine commentary delivery through structured practice.",
      lesson: {
        sections: [
          {
            heading: "Practice method",
            body: "Effective practice is **structured**: choose an extract, apply the framework, record yourself, listen back, identify one improvement. Repeat. The goal is not perfection but **consistency** — a reliable process you can execute under pressure.",
          },
          {
            heading: "Common pitfalls",
            body: "**Scripted delivery** — reading prepared material regardless of the text. **Feature-spotting** — listing devices without analysis. **Imbalance** — spending all time on one aspect. **No synthesis** — ending without a judgement. Each is fixable with the framework.",
          },
          {
            heading: "Peer feedback",
            body: "Practice with a partner: deliver, receive feedback, adjust. Ask specifically: 'Where did you lose me?' 'Which point was strongest?' 'What was missing?' Targeted feedback is more useful than general praise.",
          },
        ],
        keyFormulas: [
          { name: "Practice cycle", statement: "Extract → framework → record → listen → improve → repeat" },
          { name: "Pitfall checklist", statement: "Scripted? Feature-spotting? Imbalance? No synthesis?" },
        ],
        workedExample: {
          problem: "Your commentary keeps running over time. How do you fix it?",
          solution: "Time yourself; identify which framework area is taking too long; prepare a 'cut list' — secondary evidence you can drop if needed. Practice delivering in exactly 5 minutes.",
        },
      },
      questions: [
        {
          id: "langa-u6-pq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The most effective practice method for commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Practising in front of a mirror only" },
              { id: "b", text: "Reading analyses of other texts" },
              { id: "c", text: "Structured repetition with self-review" },
              { id: "d", text: "Memorising a script" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice method", statement: "Structured repetition with feedback." },
            ],
            steps: [
              { reasoning: "Structured practice with self-review builds consistent process.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Structured repetition with self-review",
          },
        },
        {
          id: "langa-u6-pq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'feature-spotting' is a common pitfall in commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feature-spotting pitfall", statement: "Listing devices without analysis produces description, not interpretation." },
            ],
            steps: [
              { reasoning: "Feature-spotting lists devices — 'this is a metaphor, this is alliteration' — without explaining their effect.", marks: 1, markCode: "M" },
              { reasoning: "The examiner rewards analysis — how the feature creates meaning — not identification.", marks: 1, markCode: "M" },
              { reasoning: "The fix: every feature needs an 'so what' — 'the metaphor makes X because Y'.",
              marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feature-spotting identifies without analysing; every device needs an effect-explanation to earn marks.",
            commonErrors: ["Listing devices without linking to meaning."],
          },
        },
        {
          id: "langa-u6-pq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have 10 minutes to prepare a commentary on an unseen extract. Write your preparation checklist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Preparation checklist", statement: "Framework coverage + anchor selection + timing plan." },
            ],
            steps: [
              { reasoning: "Minute 1-2: read the extract twice — once for sense, once annotating structure, language, themes.", marks: 1, markCode: "M" },
              { reasoning: "Minute 3-4: apply the framework — note context, structure, key language features, central theme.", marks: 1, markCode: "M" },
              { reasoning: "Minute 5-6: select 3-4 anchor points — specific quotations that support your analysis.", marks: 1, markCode: "M" },
              { reasoning: "Minute 7-10: outline the commentary — opening, 3 points, closing — with timing for each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 min read, 2 min framework, 2 min anchors, 4 min outline — preparation before performance.",
            commonErrors: ["Skipping the framework and diving straight into writing notes."],
          },
        },
        {
          id: "langa-u6-pq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a practice plan for improving your commentary skills over the next two weeks.",
          extract: {
            title: "The Gate (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            { label: "a", prompt: "Outline your practice schedule (frequency, duration).", marks: 2 },
            { label: "b", prompt: "Describe your practice method for this extract.", marks: 3 },
            { label: "c", prompt: "List three specific improvements you will track.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice planning", statement: "Schedule + method + measurable improvements." },
            ],
            steps: [
              { part: "a", reasoning: "Schedule example: 3 sessions per week, 30 minutes each — one commentary per session on different extracts.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Method: apply framework (context, structure, language, themes) to the extract; record yourself; listen back; identify one improvement; repeat.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "For this extract: focus on the personification of morning, the debt imagery, and the falling rhythm — anchor each to meaning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Improvement 1: reduce feature-spotting — every device must have an effect-explanation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Improvement 2: improve signposting — 'the first point', 'turning now to' — so the listener can follow.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Improvement 3: strengthen synthesis — end with a judgement, not a summary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Schedule: 3x/week, 30 min. Method: framework → record → listen → improve. Track: less feature-spotting, better signposting, stronger synthesis.",
            commonErrors: ["No schedule; no measurable improvements; practising without feedback."],
          },
        },
        {
          id: "langa-u6-pq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The practice cycle for commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise, recite, repeat" },
              { id: "b", text: "Watch, copy, paste" },
              { id: "c", text: "Extract → framework → record → listen → improve → repeat" },
              { id: "d", text: "Read, write, submit, forget" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice cycle", statement: "Extract → framework → record → listen → improve → repeat." },
            ],
            steps: [
              { reasoning: "The cycle builds a repeatable process with built-in feedback.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Extract → framework → record → listen → improve → repeat",
          },
        },
        {
          id: "langa-u6-pq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The goal of commentary practice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfection on every attempt" },
              { id: "b", text: "Avoiding all mistakes" },
              { id: "c", text: "Memorising one perfect commentary" },
              { id: "d", text: "A consistent, reliable process executable under pressure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice goal", statement: "Consistency, not perfection." },
            ],
            steps: [
              { reasoning: "A reliable process survives exam pressure; perfection is impossible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A consistent, reliable process executable under pressure",
          },
        },
        {
          id: "langa-u6-pq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Feature-spotting is a common pitfall in commentary because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires too many quotations" },
              { id: "b", text: "Identifies devices without analysing their effect on meaning" },
              { id: "c", text: "Takes too much preparation time" },
              { id: "d", text: "Is always factually wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feature-spotting pitfall", statement: "Identification without effect-explanation earns description marks only." },
            ],
            steps: [
              { reasoning: "Listing 'metaphor, alliteration' without 'so what' produces description, not interpretation.", marks: 1, markCode: "M" },
              { reasoning: "The examiner rewards how features create meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Identifies devices without analysing their effect",
          },
        },
        {
          id: "langa-u6-pq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The most useful peer feedback question after a commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Where did you lose me?'" },
              { id: "b", text: "'Was it good?'" },
              { id: "c", text: "'Did you like it?'" },
              { id: "d", text: "'Was it long enough?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Peer feedback", statement: "Targeted questions yield actionable feedback." },
            ],
            steps: [
              { reasoning: "'Where did you lose me?' pinpoints signposting and clarity problems.", marks: 1, markCode: "M" },
              { reasoning: "General questions produce general, unhelpful answers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Where did you lose me?'",
          },
        },
        {
          id: "langa-u6-pq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Recording your commentary is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is required by the teacher" },
              { id: "b", text: "Replaces the need to practise" },
              { id: "c", text: "Guarantees a better grade" },
              { id: "d", text: "Reveals habits — pace, fillers, signposting — invisible in the moment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recording for review", statement: "Playback exposes habits the speaker cannot perceive live." },
            ],
            steps: [
              { reasoning: "You cannot hear your own pace or fillers while speaking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals habits invisible in the moment",
          },
        },
        {
          id: "langa-u6-pq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Scripted delivery fails as a commentary method because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignores what the actual text does, delivering prepared material regardless" },
              { id: "b", text: "Requires a framework" },
              { id: "c", text: "Uses too many quotations" },
              { id: "d", text: "Is always too short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scripted vs responsive", statement: "A script cannot respond to the specific extract." },
            ],
            steps: [
              { reasoning: "Prepared material may miss what the text actually does.", marks: 1, markCode: "M" },
              { reasoning: "Examiners reward engagement with the specific text.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ignores what the actual text does",
          },
        },
        {
          id: "langa-u6-pq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Describe the structure of one effective 30-minute commentary practice session.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice session design", statement: "Annotate → outline → deliver → review, within a fixed time." },
            ],
            steps: [
              { reasoning: "Minutes 0-5: select an extract and annotate — structure, language, themes.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 5-15: apply the framework and select 3-4 anchor points.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 15-25: deliver the commentary aloud, timed and recorded.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 25-30: listen back, identify one improvement, note it for next session.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 min annotate, 10 min framework+anchors, 10 min timed delivery, 5 min review — one improvement per session.",
            commonErrors: ["Practising delivery without preparation; no review stage."],
          },
        },
        {
          id: "langa-u6-pq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a four-point self-review checklist for listening back to a recording of your commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-review checklist", statement: "Review targets the known pitfalls: signposting, anchors, balance, synthesis." },
            ],
            steps: [
              { reasoning: "Point 1 — signposting: could I follow the structure? Were transitions explicit?", marks: 1, markCode: "M" },
              { reasoning: "Point 2 — anchor strength: did every claim have a specific quotation or detail?", marks: 1, markCode: "M" },
              { reasoning: "Point 3 — balance: did I spend time proportionate to what the text emphasises?", marks: 1, markCode: "M" },
              { reasoning: "Point 4 — synthesis: did I end with a judgement or just a summary?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check signposting, anchor strength, framework balance and synthesis quality on playback.",
            commonErrors: ["Reviewing only delivery (voice, pace) and ignoring analytical quality."],
          },
        },
        {
          id: "langa-u6-pq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan one week of commentary practice.",
          parts: [
            { label: "a", prompt: "Daily schedule (days, times, duration).", marks: 2 },
            { label: "b", prompt: "How you will select extracts.", marks: 2 },
            { label: "c", prompt: "How you will gather feedback.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practice planning", statement: "Schedule + varied material + feedback loop." },
            ],
            steps: [
              { part: "a", reasoning: "Example: three sessions (Mon/Wed/Fri), 30 minutes each — same time daily builds habit.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Rotate genres — poem, prose, drama extract — so the process transfers; include one unseen text per week.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Self-review via recording plus one peer session; ask 'where did you lose me?' and 'which point was strongest?'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "3x30min weekly, varied genres, recording + targeted peer feedback.",
            commonErrors: ["No fixed schedule; same extract every time; no feedback mechanism."],
          },
        },
        {
          id: "langa-u6-pq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Your commentary is consistently 'imbalanced' — you spend all your time on language. Diagnose the problem and fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fixing imbalance", statement: "Diagnosis → cause → structural fix → verification." },
            ],
            steps: [
              { reasoning: "Diagnosis: one framework area dominates — coverage is uneven.", marks: 1, markCode: "M" },
              { reasoning: "Likely cause: preparation notes favour language; structure/theme were skimmed.", marks: 1, markCode: "M" },
              { reasoning: "Fix 1: allocate preparation time per framework area — e.g., 2 minutes each — before writing notes.", marks: 1, markCode: "M" },
              { reasoning: "Fix 2: prepare a 'cut list' — secondary language examples you can drop if time runs short.", marks: 1, markCode: "M" },
              { reasoning: "Verify: review the recording specifically for time spent per area.", marks: 1, markCode: "M" },
              { reasoning: "Long-term: practise on extracts where language is NOT dominant to force balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diagnose via timing, fix via per-area preparation limits and cut lists, verify on playback.",
            commonErrors: ["Trying harder without changing preparation structure; no verification step."],
          },
        },
        {
          id: "langa-u6-pq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a practice session on the following extract and identify the improvements you will track.",
          extract: {
            title: "The Gate (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            { label: "a", prompt: "Session plan with timings for each stage.", marks: 3 },
            { label: "b", prompt: "One measurable improvement to track.", marks: 2 },
            { label: "c", prompt: "Three peer feedback questions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracked practice", statement: "Timed stages + measurable target + targeted feedback." },
            ],
            steps: [
              { part: "a", reasoning: "Example: 5 min annotate, 10 min framework+anchors, 10 min timed delivery, 5 min review.", marks: 3, markCode: "M" },
              { part: "b", reasoning: "Example target: reduce feature-spotting — count device-identifications lacking an effect-explanation; aim to halve the count.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Q1: 'Where did you lose me?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Q2: 'Which anchor point was strongest and why?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Q3: 'What was missing from my synthesis?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timed 30-min session, one countable improvement, three targeted feedback questions.",
            commonErrors: ["No timings; unmeasurable goals; vague feedback questions."],
          },
        },
        {
          id: "langa-u6-pq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Rehearsing the same extract repeatedly is the best way to improve.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating practice claims", statement: "Improvement requires transferable process, not memorised content." },
            ],
            steps: [
              { reasoning: "Repetition on one extract builds fluency with that content, not the commentary process.", marks: 1, markCode: "M" },
              { reasoning: "Transfer requires varied texts — the exam will use unseen extracts.", marks: 1, markCode: "M" },
              { reasoning: "Over-rehearsal risks scripted delivery — the exact pitfall the framework warns against.", marks: 1, markCode: "M" },
              { reasoning: "Better method: repeat the process (framework → anchors → delivery → review) on varied extracts.", marks: 1, markCode: "M" },
              { reasoning: "Spaced practice across different texts beats massed repetition on one.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: repetition helps only when it repeats the method, not the material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Varied extracts with a repeated process beat drilling one extract — drilling risks scripted delivery.",
            commonErrors: ["Confusing content memorisation with skill building; ignoring transfer."],
          },
        },
      ],
    },
  ],
};
