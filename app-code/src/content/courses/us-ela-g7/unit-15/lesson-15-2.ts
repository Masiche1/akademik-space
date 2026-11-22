import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const MIXEDPASSAGE: TextExtract = {
  title: "Mixed Skills Practice Passage",
  author: "Written for Akademik Space",
  text: "The community garden was a small plot of land behind the library, but it had become something much bigger. What started as a few tomato plants had grown into a thriving space where neighbors shared seeds, tools, and recipes.\n\nEvery Saturday morning, volunteers gathered to weed, water, and harvest. Children learned where food comes from; elderly residents found purpose in tending the beds. The garden had become a classroom, a therapy session, and a neighborhood gathering place all at once.\n\nWhen the city proposed selling the land for development, the community rallied. They presented a petition with 2,000 signatures and a proposal showing how the garden saved the city money on food assistance programs. The city council voted to preserve the garden — not because of regulations, but because neighbors had shown what community could accomplish.",
};

export const lesson152: Lesson = {
  id: "ela7-u15-lesson-15-2",
  code: "15-2",
  title: "Integrated Practice: Reading, Analysis, and Writing",
  goal: "I CAN apply reading, analysis, and writing skills together in an integrated assessment.",
  standards: ["RL.7.1", "RL.7.2", "RL.7.6", "W.7.9"],
  vocabulary: [
    {
      term: "Integrated assessment",
      definition:
        "Task combining multiple skills — reading, analysis, writing.",
    },
    { term: "Central idea", definition: "Main point of a text." },
    {
      term: "Evidence",
      definition: "Specific details supporting interpretation.",
    },
    { term: "Theme", definition: "Central message or insight." },
    {
      term: "Synthesis",
      definition: "Combining ideas into coherent response.",
    },
    {
      term: "Rubric",
      definition: "Scoring guide describing performance levels.",
    },
  ],
  concepts: [
    {
      id: "ela7-u15-integratedb",
      title: "Integrated reading and writing",
      skill:
        "Read closely, analyze elements, and write evidence-based responses.",
      lesson: {
        sections: [
          {
            heading: "Integrated task structure",
            body: "Integrated assessments combine skills: **read** the passage carefully, **identify** key elements (theme, evidence, craft), **analyze** how they work, **write** a response that cites evidence. The garden passage requires: theme identification (community), evidence analysis (petition, 2,000 signatures), and synthesis (how elements connect).",
          },
          {
            heading: "Multi-part responses",
            body: "Many questions have **parts** — each part tests a different skill. Part (a) might ask for theme; part (b) asks for evidence; part (c) asks for analysis. Manage time: don't spend all time on one part. Each part gets its own marks — answer all parts even if unsure.",
          },
        ],
        keyFormulas: [
          {
            name: "Integrated skills",
            statement: "Read → identify → analyze → write.",
          },
          {
            name: "Multi-part strategy",
            statement: "Answer all parts; manage time per marks.",
          },
          {
            name: "Evidence-based response",
            statement: "Claims need text evidence + explanation.",
          },
        ],
        workedExample: {
          problem: "What theme does the garden passage develop?",
          solution:
            "Community action creates lasting change — neighbors united saved the garden through petition and demonstration. Theme emerges from conflict (city wanted to sell) and resolution (council preserved it because community showed value).",
        },
      },
      questions: [
        {
          id: "ela7-u15-integratedb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MIXEDPASSAGE,
          stem: "What is the central idea of the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Community action can preserve what matters" },
              { id: "b", text: "Gardens are beautiful" },
              { id: "c", text: "Cities should not develop land" },
              { id: "d", text: "Volunteers are important" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Central idea",
                statement: "Main insight of text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The passage shows community organizing to save the garden — central idea is community action's power.",
                evidence: "the community rallied",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Community action can preserve what matters.",
            commonErrors: [
              "Choosing (a) — too surface-level; misses the community theme.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedb-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MIXEDPASSAGE,
          stem: "Identify two pieces of evidence supporting the theme of community action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence identification",
                statement: "Find details supporting theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence 1: 'petition with 2,000 signatures' — shows organized community effort.",
                evidence: "a petition with 2,000 signatures",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'proposal showing garden saved city money' — demonstrates community's argument was persuasive.",
                evidence: "saved the city money on food assistance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both show community organizing effectively to achieve their goal.",
                evidence: "the community rallied",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence: 'petition with 2,000 signatures' + 'proposal showing garden saved money' — both demonstrate organized community action.",
            commonErrors: [
              "Choosing details that don't support 'community action' — must connect.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedb-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MIXEDPASSAGE,
          stem: "Write an analytical paragraph explaining how the conflict (city wanting to sell the land) develops the theme of community action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict-theme analysis",
                statement: "Struggle reveals thematic meaning.",
              },
              {
                kind: "skill",
                name: "Analytical writing",
                statement: "Claim + evidence + commentary.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Claim: 'The conflict between the city and community reveals the theme of collective action.'",
                evidence: "When the city proposed selling the land",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'They presented a petition with 2,000 signatures and a proposal showing savings.'",
                evidence: "a petition with 2,000 signatures",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commentary: 'The community's organized response — petition and economic argument — shows how collective action preserves what matters.'",
                evidence: "the community rallied",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Resolution: 'The council voted to preserve it not because of regulations, but because neighbors showed community's value.'",
                evidence: "not because of regulations, but because neighbors",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The conflict between the city and community reveals the theme of collective action. When the city proposed selling the land, neighbors presented a petition with 2,000 signatures and a proposal showing the garden saved money on food assistance. Their organized response demonstrates how collective action preserves what matters — the council voted to preserve it not because of regulations, but because neighbors showed community's value.'",
            commonErrors: [
              "Retelling events without analyzing conflict-theme connection.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedb-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MIXEDPASSAGE,
          parts: [
            {
              label: "a",
              prompt: "Name the story's central conflict.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how the resolution supports the theme.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict-resolution analysis",
                statement: "How endings reveal meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "City wants to sell land vs community wants to preserve garden.",
                evidence: "the city proposed selling the land",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Resolution: council preserves garden because community showed its value — supports theme that community action works.",
                evidence: "not because of regulations, but because neighbors",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) City selling land vs community preserving garden. (b) Council preserves it because community showed value — supports 'community action works' theme.",
            commonErrors: [
              "Naming conflict without connecting resolution to theme.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u15-integratedbb2",
      title: "Exam technique and time management",
      skill: "Apply test-taking strategies for integrated ELA assessments.",
      lesson: {
        sections: [
          {
            heading: "Time management",
            body: "**Skim first**: read all questions before answering — know what's required. **Marks guide time**: 8-mark questions deserve more time than 1-mark. **Answer all parts**: partial credit exists — don't leave blanks. **Check work**: leave time to review answers, especially multi-part questions.",
          },
          {
            heading: "Question types",
            body: "**MCQ**: eliminate wrong answers first, then choose best. **Short answer**: be specific — 'theme is community' not 'the story is about a garden'. **Long answer**: plan before writing — thesis, evidence, conclusion. **Cited response**: quote/paraphrase accurately, explain significance.",
          },
        ],
        keyFormulas: [
          {
            name: "Time strategy",
            statement: "Skim → allocate by marks → answer all → review.",
          },
          { name: "MCQ strategy", statement: "Eliminate wrong answers first." },
          {
            name: "Long answer",
            statement: "Plan → thesis → evidence → conclusion.",
          },
        ],
        workedExample: {
          problem:
            "How should you approach an 8-mark analysis question vs a 1-mark MCQ?",
          solution:
            "8-mark: plan structure (claim, evidence, commentary), write fully, cite evidence. 1-mark: eliminate wrong answers, pick best — quick. Allocate time proportionally: ~8x more time for 8-mark question.",
        },
      },
      questions: [
        {
          id: "ela7-u15-integratedbb2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MIXEDPASSAGE,
          stem: "What's the best first step when starting an ELA assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Answer the first question immediately" },
              { id: "b", text: "Start with the longest essay" },
              { id: "c", text: "Check your phone" },
              {
                id: "d",
                text: "Skim all questions to understand requirements",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Test strategy",
                statement: "Survey before answering.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Skimming all questions reveals what's required and helps allocate time.",
                evidence: "Integrated assessment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Skim all questions first.",
            commonErrors: [
              "Choosing (a) — diving in without overview wastes time.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedbb2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MIXEDPASSAGE,
          stem: "How should you allocate time between a 1-mark MCQ and an 8-mark analysis question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Marks guide time spent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1-mark MCQ: quick — eliminate wrong answers, pick best (~30 seconds).",
                evidence: "1-mark",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "8-mark analysis: plan, write, cite (~8-10 minutes).",
                evidence: "8-mark",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Time should be roughly proportional to marks — 8-mark gets ~8x more time.",
                evidence: "totalMarks",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "~30 seconds for MCQ, ~8-10 minutes for 8-mark analysis — time proportional to marks.",
            commonErrors: [
              "Spending equal time — high-mark questions deserve more.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedbb2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MIXEDPASSAGE,
          stem: "Write a response plan for analyzing this passage: (1) identify theme, (2) find evidence, (3) explain how evidence supports theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Response planning",
                statement: "Structure before writing.",
              },
              {
                kind: "skill",
                name: "Evidence-based analysis",
                statement: "Claims need proof.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Theme: 'Community action creates lasting change' — from conflict/resolution.",
                evidence: "the community rallied",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'petition with 2,000 signatures' + 'proposal showing savings' — organized effort.",
                evidence: "a petition with 2,000 signatures",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation: 'Community's organized response — petition and economic argument — shows collective action works.'",
                evidence: "not because of regulations",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Plan: thesis → evidence → commentary → conclusion — structured response.",
                evidence: "Integrated Practice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Plan: Theme (community action creates change) → Evidence (petition, proposal) → Explanation (organized response shows collective power) → Conclusion (community preserves what matters).",
            commonErrors: [
              "Writing without planning — structure improves quality.",
            ],
          },
        },
        {
          id: "ela7-u15-integratedbb2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MIXEDPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Name two test-taking strategies for long-answer questions.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why answering all parts matters even if unsure.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Test strategy",
                statement: "Maximize partial credit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Plan before writing; allocate time by marks.",
                evidence: "Exam technique",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Partial credit exists — unanswered questions earn zero; attempt shows understanding.",
                evidence: "answer all parts",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Plan before writing; allocate time by marks. (b) Partial credit exists — unanswered = zero.",
            commonErrors: ["Leaving blanks — always attempt every part."],
          },
        },
      ],
    },
  ],
};
