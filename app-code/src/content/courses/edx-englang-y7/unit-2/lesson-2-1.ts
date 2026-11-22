import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "el7-u2-lesson-2-1",
  code: "2-1",
  title: "Analytical Writing",
  goal: "I CAN write analytical essays that build arguments with evidence and explanation.",
  standards: ["Edexcel KS3 English Language — Writing"],
  vocabulary: [
    {
      term: "Analysis",
      definition: "Breaking down ideas to examine how and why they work.",
    },
    {
      term: "Argument",
      definition: "A reasoned position supported by evidence.",
    },
    {
      term: "Paragraph",
      definition:
        "A unit of writing developing one idea, usually starting with a topic sentence.",
    },
    {
      term: "PEEL",
      definition: "Point, Evidence, Explanation, Link — paragraph structure.",
    },
  ],
  concepts: [
    {
      id: "el7-u2-analysis",
      title: "Building Analytical Arguments",
      skill:
        "Structure analytical writing with clear points, evidence and explanation.",
      lesson: {
        sections: [
          {
            heading: "Analytical paragraph structure",
            body: "Use **PEEL**: **Point** (your argument), **Evidence** (quotation/fact), **Explanation** (how evidence supports point), **Link** (connect to overall argument). Each paragraph develops ONE idea.\n\n**Introduction**: context + thesis statement (your main argument). **Body**: 2-4 PEEL paragraphs. **Conclusion**: summarise argument, maybe broader significance. Analytical writing answers 'how' and 'why', not just 'what'.",
          },
          {
            heading: "From description to analysis",
            body: "Description says what happens; analysis explains significance. 'The character cries' → analysis: 'The character's tears reveal suppressed grief, suggesting the loss has been building throughout the narrative.'\n\n**Analytical verbs**: suggests, reveals, conveys, emphasises, implies, demonstrates, contrasts, symbolises. Avoid 'shows' repeatedly — vary your analytical language.",
          },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point → Evidence → Explanation → Link." },
          {
            name: "Essay structure",
            statement: "Introduction → body paragraphs → conclusion.",
          },
        ],
        workedExample: {
          problem: "Write a PEEL paragraph analysing 'The wind howled.'",
          solution:
            "Point: wind's hostility mirrors conflict. Evidence: 'howled' personification. Explanation: predatory imagery suggests danger. Link: foreshadows coming confrontation.",
        },
      },
      questions: [
        {
          id: "el7-u2-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PEEL stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prepare, Evidence, Explain, Learn" },
              { id: "b", text: "Point, Edit, Example, Link" },
              { id: "c", text: "Point, Evidence, Explanation, Link" },
              { id: "d", text: "Plan, Edit, Explain, Link" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "PEEL",
                statement:
                  "Paragraph structure: Point, Evidence, Explanation, Link.",
              },
            ],
            steps: [
              {
                reasoning: "PEEL = Point, Evidence, Explanation, Link.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(c)** Point, Evidence, Explanation, Link",
            commonErrors: ["Confusing with other frameworks."],
          },
        },
        {
          id: "el7-u2-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a thesis statement important in an analytical essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Thesis",
                statement: "States main argument — guides whole essay.",
              },
            ],
            steps: [
              {
                reasoning: "Presents main argument upfront.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Guides paragraph development.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Gives reader clear focus.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Thesis states your argument — every paragraph should support it.",
            commonErrors: ["Vague 'it's good'.", "No function explained."],
          },
        },
        {
          id: "el7-u2-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between description and analysis with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis vs description",
                statement:
                  "Description states facts; analysis explains significance.",
              },
            ],
            steps: [
              {
                reasoning: "Description example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analysis example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear distinction explained.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer:
              "Description: 'She cried.' Analysis: 'Her tears reveal grief suppressed throughout the narrative.'",
            commonErrors: ["No example.", "Conflated."],
          },
        },
        {
          id: "el7-u2-analysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the POINT and EVIDENCE parts of a PEEL paragraph analysing this quote: 'The city never slept.'",
          parts: [
            {
              label: "a",
              prompt: "Write a point about what the quote suggests.",
              marks: 3,
            },
            { label: "b", prompt: "Select and embed the evidence.", marks: 3 },
            {
              label: "c",
              prompt: "Explain what the personification achieves.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEEL application",
                statement: "Point + embedded quote + effect.",
              },
            ],
            steps: [
              {
                reasoning: "Point: suggests ceaseless energy/chaos.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Clear analytical point.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Evidence: 'The city never slept' embedded.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "Correct quotation.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "Personification gives city human restlessness.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "Effect: vibrant, overwhelming atmosphere.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) ceaseless energy/chaos (b) embedded quote (c) personification → vibrant chaos",
            commonErrors: ["No embedded quote.", "Device not explained."],
          },
        },
      ],
    },
    {
      id: "el7-u2-essays",
      title: "Essay Writing and Structure",
      skill:
        "Plan and write structured essays with introductions, developed paragraphs and conclusions.",
      lesson: {
        sections: [
          {
            heading: "Essay architecture",
            body: "**Introduction**: hook (quote, statistic, question) + context + thesis. 3-5 sentences. **Body**: each paragraph = one PEEL point, logically ordered (strongest argument often last or first). **Conclusion**: restate thesis in new words, summarise key points, end with significance or question.\n\n**Planning**: brainstorm points, group into paragraphs, order logically, note evidence for each. 5 minutes planning saves 15 minutes rewriting.",
          },
          {
            heading: "Academic style",
            body: "Formal register: no contractions ('don't' → 'do not'), no slang, precise vocabulary. **Connectives**: 'Furthermore', 'In contrast', 'Consequently', 'This demonstrates' — guide reader through argument. **Varied sentences**: mix simple, compound, complex.\n\n**Paragraph unity**: one idea per paragraph — topic sentence states it, rest develops it. Transitions between paragraphs show logical flow.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay structure",
            statement: "Hook + thesis → PEEL paragraphs → conclusion.",
          },
          {
            name: "Connectives",
            statement:
              "Furthermore, however, consequently, therefore — guide argument flow.",
          },
        ],
        workedExample: {
          problem: "Plan an essay: 'Social media does more harm than good.'",
          solution:
            "Thesis: harm outweighs benefits. P1: addiction/mental health (evidence). P2: misinformation (evidence). P3: benefits acknowledged but outweighed (counter-argument). Conclusion: harm dominates.",
        },
      },
      questions: [
        {
          id: "el7-u2-essays-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What three parts make up a standard essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start, middle, end" },
              { id: "b", text: "Introduction, body, conclusion" },
              { id: "c", text: "Hook, evidence, link" },
              { id: "d", text: "Title, content, references" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Essay structure",
                statement: "Introduction, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Standard essay = intro, body, conclusion.",
                marks: 2,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(b)** Introduction, body, conclusion",
            commonErrors: ["Confusing with paragraph structure."],
          },
        },
        {
          id: "el7-u2-essays-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should each body paragraph focus on one idea?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph unity",
                statement: "One idea per paragraph — clarity and development.",
              },
            ],
            steps: [
              {
                reasoning: "Clarity: reader follows single point.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Depth: idea fully developed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Structure: organised argument.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "One idea per paragraph — ensures clarity, depth and logical organisation.",
            commonErrors: ["Vague 'easier to read'.", "No structural reason."],
          },
        },
        {
          id: "el7-u2-essays-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of planning before writing an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Planning organises thoughts, ensures coverage, saves time.",
              },
            ],
            steps: [
              {
                reasoning: "Organises ideas logically.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Ensures all points covered.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Reduces rewriting time.",
                marks: 1,
                markCode: "AO4",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Planning organises arguments, ensures coverage and saves time — though spontaneous drafting suits some writers.",
            commonErrors: [
              "Planning always necessary view.",
              "No practical benefits.",
            ],
          },
        },
        {
          id: "el7-u2-essays-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a thesis statement and plan for: 'Zoos do more harm than good.'",
          parts: [
            { label: "a", prompt: "Write a clear thesis statement.", marks: 3 },
            { label: "b", prompt: "Plan three body paragraphs.", marks: 3 },
            { label: "c", prompt: "Suggest a conclusion approach.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Essay planning",
                statement: "Thesis + PEEL paragraphs + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis: clear position on zoos.",
                marks: 2,
                markCode: "AO4",
                part: "a",
              },
              {
                reasoning: "Thesis is arguable, not obvious.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "P1: animal welfare concerns.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "P2: conservation benefits (counter).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "P3: education/research vs captivity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Conclusion: restate position + significance.",
                marks: 1,
                markCode: "AO4",
                part: "c",
              },
              {
                reasoning: "Conclusion adds final thought.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) arguable thesis (b) welfare/conservation/education (c) restate + significance",
            commonErrors: ["Thesis too vague.", "No counter-argument."],
          },
        },
      ],
    },
  ],
};
