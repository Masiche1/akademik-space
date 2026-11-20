import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilgp-u3-lesson-3-3",
  code: "3-3",
  title: "Stage 9 Checkpoint — Communication, Reflection and Projects",
  goal: "I CAN communicate findings and reflect on learning at Stage 9 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 Checkpoint Stage 9: communication, reflection",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Communication",
      definition: "Sharing ideas clearly with an audience.",
    },
    {
      term: "Reflection",
      definition: "Reviewing what was learned and how to improve.",
    },
    { term: "Audience", definition: "The people the communication is for." },
    {
      term: "Structure",
      definition: "How information is organised for the reader.",
    },
    {
      term: "Action",
      definition: "A concrete step taken in response to findings.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u3-s9-communication",
      title: "Stage 9 communication checkpoint",
      skill: "Adapt communication to purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "Communication",
            body: "Effective communication adapts language, detail and format to the audience — a school assembly differs from a written report. Clear structure (introduction, developed points, conclusion) carries the argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Communication",
            statement: "audience + purpose + structure",
          },
        ],
        workedExample: {
          problem:
            "How would you change a report on plastic pollution for a primary school audience?",
          solution:
            "Simpler vocabulary, concrete examples, shorter paragraphs, and a clear 'what you can do' ending.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s9-comm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST thing to consider when planning a presentation on a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The font size of slides" },
              { id: "b", text: "The audience and purpose" },
              { id: "c", text: "The number of slides" },
              { id: "d", text: "The speaker's outfit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience",
                statement: "Communication is shaped by who it is for and why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Audience and purpose determine language, detail and structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The audience and purpose",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two features of a well-structured written report on a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Introduction, developed body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear introduction stating the issue and the report's aim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Body paragraphs each developing one point with evidence; conclusion summarising findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear introduction; evidence-backed paragraphs; summarising conclusion",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A group wants to persuade their school to start a recycling programme. Suggest two ways they could adapt their communication for this audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience adaptation",
                statement: "Match language and detail to the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Address the headteacher/council formally with evidence of cost savings and environmental benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For students, use a petition or assembly talk with simple, action-focused language.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both audiences need different registers but the same core evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Formal evidence-based pitch to the council; simple action-focused message to students",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "After completing a global perspectives project, a student writes: 'I learnt a lot.' Write a stronger reflection that names specific learning and an improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement:
                  "Specific learning + honest evaluation + next steps.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Name what was learnt specifically, e.g. how to evaluate source bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate what went well or poorly in the project process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State a concrete improvement for next time, e.g. earlier deadlines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Specific, evaluative reflection rather than a generic statement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific skill learnt + honest evaluation of process + concrete improvement",
          },
        },
      ],
    },
    {
      id: "cilgp-u3-s9-project",
      title: "Stage 9 project and action checkpoint",
      skill: "Describe project stages and turning findings into action.",
      lesson: {
        sections: [
          {
            heading: "Projects and action",
            body: "Global Perspectives projects move from research question through investigation, analysis and evaluation to communication and action. Strong projects end with a realistic action or recommendation linked to the evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Project flow",
            statement:
              "question → research → analysis → evaluation → communication → action",
          },
        ],
        workedExample: {
          problem:
            "A project finds that school bins are often overflowing. Suggest one realistic action.",
          solution:
            "Propose extra bins at busy points plus a student rota — evidence-linked and achievable.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s9-p-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should come FIRST in a Global Perspectives project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the conclusion" },
              { id: "b", text: "Choosing and refining a research question" },
              { id: "c", text: "Designing the poster" },
              { id: "d", text: "Collecting every possible source" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement: "Question guides everything.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The research question defines the project's direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Choosing and refining a research question",
          },
        },
        {
          id: "cilgp-u3-s9-p-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a good action at the end of a project should link back to the evidence gathered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence-linked action",
                statement: "Actions address what the research showed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The evidence shows what the real problem and its causes are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An action linked to it targets the actual cause, not a guess.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence reveals the real problem — linked actions target the actual cause",
          },
        },
        {
          id: "cilgp-u3-s9-p-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project on food waste concludes that 'people should waste less food'. Explain why this is a weak recommendation and improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recommendation quality",
                statement: "Specific, achievable, evidence-linked.",
              },
            ],
            steps: [
              {
                reasoning: "Too vague — no actor, method or measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved: e.g. 'Canteens should offer a pay-what-you-can surplus shelf for unsold food.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Specific actor (canteens), method (surplus shelf), links to waste evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vague advice; improved version names who acts, how, and links to evidence",
          },
        },
        {
          id: "cilgp-u3-s9-p-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline the stages of a Global Perspectives project from question to action, and state what makes the final stage more than just 'telling people what you found'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement:
                  "Research → analysis → evaluation → communication → action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stages: question, research, analyse evidence, evaluate perspectives/solutions, communicate, act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Communication stage presents findings to an audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action stage turns findings into a concrete recommendation or real-world step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action makes the project matter beyond the classroom — it changes something.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question→research→analysis→evaluation→communication→action; action applies findings to real change",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u3-stage9-project-notes",
      title: "Stage 9 GP checkpoint — revision notes",
      summary:
        "Audience adaptation, structure, reflection, project stages, evidence-linked action.",
      sections: [
        {
          heading: "Key skills",
          body: "Adapt register to audience; structure reports clearly; reflect specifically; end projects with realistic, evidence-linked actions.",
        },
        {
          heading: "Exam tips",
          body: "Vague recommendations ('people should...') lose marks — always name who acts, how, and why the evidence supports it.",
        },
      ],
    },
  ],
};
