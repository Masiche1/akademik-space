import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ciegp-u3-lesson-3-1",
  code: "3-1",
  title: "Paper 1 Technique: Issue Selection and Research Questions",
  goal: "I CAN select and frame research questions for IGCSE GP Paper 1 under timed conditions.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Paper 1: core skills",
  ],
  vocabulary: [
    {
      term: "Global issue",
      definition: "A problem transcending national borders.",
    },
    {
      term: "Research question",
      definition: "Focused, arguable query guiding investigation.",
    },
    { term: "Scope", definition: "Boundaries making a question investigable." },
    { term: "Stakeholder", definition: "Anyone affected by the issue." },
    {
      term: "Feasibility",
      definition: "Whether the question can realistically be answered.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u3-s1-issue",
      title: "Issue selection and research question technique",
      skill: "Choose issues and frame questions that Paper 1 rewards.",
      lesson: {
        sections: [
          {
            heading: "Choosing the issue",
            body: "Paper 1 rewards issues with genuine global significance and multiple stakeholder perspectives — not just local problems or single-cause topics. Check the question has: global reach, contested perspectives, accessible evidence, and room for evaluation.",
          },
          {
            heading: "Framing the question",
            body: "Strong questions name the actors and the tension: 'To what extent do economic interests outweigh environmental concerns in deep-sea mining?' Weak questions are too broad ('Is mining bad?') or too narrow to evaluate.",
          },
        ],
        keyFormulas: [
          {
            name: "Good question",
            statement: "global + contested + investigable + evaluable",
          },
        ],
        workedExample: {
          problem: "Improve 'Is fast fashion bad?' for Paper 1.",
          solution:
            "'To what extent do consumer demand and weak regulation make fast fashion a greater environmental problem in developing countries?'",
        },
      },
      questions: [
        {
          id: "ciegp-u3-iq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which research question is strongest for IGCSE GP Paper 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is social media bad?" },
              {
                id: "b",
                text: "To what extent do algorithms deepen political polarisation among young voters globally?",
              },
              { id: "c", text: "What is social media?" },
              { id: "d", text: "How many people use Instagram?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Focused, arguable, investigable.",
              },
            ],
            steps: [
              {
                reasoning: "Option B is global, contested and evaluable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The polarisation question",
          },
        },
        {
          id: "ciegp-u3-iq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'Is plastic pollution a problem?' is a weak research question for GP Paper 1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question quality",
                statement: "Must allow evaluation, not just description.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It invites a yes/no answer with no evaluative tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No stakeholders, scope or weighing of perspectives is built in.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Too broad and non-evaluable — invites a simple yes/no",
          },
        },
        {
          id: "ciegp-u3-iq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite 'Should countries ban single-use plastics?' as a stronger GP research question, explaining your changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question design",
                statement: "Add scope, tension and evaluative frame.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add tension: weigh environmental benefits against economic costs to developing nations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add scope: specify which plastics or which countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'To what extent do the environmental benefits of banning single-use plastics outweigh the economic costs to developing countries?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Weigh benefits vs costs with scope — e.g. 'To what extent do environmental benefits outweigh economic costs...?'",
          },
        },
        {
          id: "ciegp-u3-iq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A candidate chooses 'water scarcity' as their issue but their question is 'What is water scarcity?' Explain three reasons this question will score poorly, and rewrite it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question evaluation",
                statement: "Questions must demand analysis and evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It only asks for definition — no analysis or evaluation possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No stakeholders or perspectives are engaged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It is not arguable — there is no tension to weigh.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rewrite e.g.: 'To what extent do agricultural subsidies worsen water scarcity in arid regions?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Definitional, perspective-free, non-arguable; rewrite with tension and evaluative frame",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u3-issue-notes",
      title: "Paper 1 issue technique — revision notes",
      summary: "Choosing evaluable issues, framing strong research questions.",
      sections: [
        {
          heading: "Key skills",
          body: "Global + contested + investigable + evaluable. Add stakeholder tension and scope to weak questions.",
        },
        {
          heading: "Exam tips",
          body: "Spend 2 minutes framing the question properly — a weak question caps every later answer.",
        },
      ],
    },
  ],
};
