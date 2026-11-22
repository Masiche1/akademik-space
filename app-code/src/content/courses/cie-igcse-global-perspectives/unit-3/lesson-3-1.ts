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
              { id: "b", text: "What is social media?" },
              { id: "c", text: "How many people use Instagram?" },
              {
                id: "d",
                text: "To what extent do algorithms deepen political polarisation among young voters globally?",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "ciegp-u3-iq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which issue would make the strongest GP Paper 1 topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One nobody has heard of" },
              { id: "b", text: "One with a single obvious answer" },
              {
                id: "c",
                text: "One with global reach and multiple contested perspectives",
              },
              { id: "d", text: "One affecting only your school" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Issue selection",
                statement: "Global + contested + accessible.",
              },
            ],
            steps: [
              {
                reasoning: "GP rewards globally significant contested issues.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Global issue with contested perspectives",
          },
        },
        {
          id: "ciegp-u3-iq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'scope' mean in research question design?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of sources used" },
              {
                id: "b",
                text: "The boundaries that make a question investigable",
              },
              { id: "c", text: "The topic's popularity" },
              { id: "d", text: "The length of the essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scope",
                statement: "Boundaries of investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Scope defines investigable boundaries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Boundaries of the investigation",
          },
        },
        {
          id: "ciegp-u3-iq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which research question has the best scope for a timed exam answer?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To what extent does groundwater depletion affect farming in India's Punjab region?",
              },
              {
                id: "b",
                text: "Is water a problem everywhere?",
              },
              { id: "c",
                text: "How many litres does a person drink?" },
              { id: "d",
                text: "What is water?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Scope",
                statement: "Specific enough to answer fully.",
              },
            ],
            steps: [
              {
                reasoning: "Option A names region, mechanism and evaluative frame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "The Punjab groundwater question",
          },
        },
        {
          id: "ciegp-u3-iq-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A feasibility checklist rates a question on 4 criteria, each scored 1-5. What is the maximum possible score?",
          response: {
            type: "numeric",
            parts: [{ label: "Maximum score", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feasibility scoring",
                statement: "Criteria x max score.",
              },
            ],
            steps: [
              {
                reasoning: "4 x 5 = 20.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciegp-u3-iq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Of 10 draft research questions, 4 are too broad, 3 too narrow and 3 are evaluable. What percentage are evaluable?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage evaluable", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question screening",
                statement: "Proportion meeting criteria.",
              },
            ],
            steps: [
              {
                reasoning: "3/10 x 100 = 30%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "ciegp-u3-iq-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'Is technology good?' fails as a GP Paper 1 research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question evaluation",
                statement: "Questions must be evaluable, not yes/no.",
              },
            ],
            steps: [
              {
                reasoning: "Too broad — 'technology' covers everything.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'Good' is undefined; no evaluative tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No stakeholders, scope or weighing possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Too broad, undefined terms, no evaluative tension",
          },
        },
        {
          id: "ciegp-u3-iq-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite 'How bad is deforestation?' as a strong GP research question, explaining your changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question design",
                statement: "Add scope, actors and evaluative frame.",
              },
            ],
            steps: [
              {
                reasoning: "Add evaluative frame: 'to what extent' with weighing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add scope: which drivers or regions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. 'To what extent do agricultural subsidies drive deforestation in the Amazon basin?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Add tension and scope, e.g. 'To what extent do subsidies drive deforestation in X?'",
          },
        },
        {
          id: "ciegp-u3-iq-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase best adds evaluative tension to a research question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'To what extent do X outweigh Y?'" },
              { id: "b", text: "'How many X?'" },
              { id: "c", text: "'What is X?'" },
              { id: "d", text: "'When did X happen?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluative frame",
                statement: "Weighing language enables evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "'To what extent' forces weighing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "'To what extent do X outweigh Y?'",
          },
        },
        {
          id: "ciegp-u3-iq-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a 2-hour exam, a candidate spends 20 minutes framing their research question. What percentage of total time is this?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 16.7, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Part/whole as percentage.",
              },
            ],
            steps: [
              {
                reasoning: "20/120 x 100 = 16.7%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16.7%",
          },
        },
        {
          id: "ciegp-u3-iq-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a locally important issue still fail as a GP Paper 1 topic?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It may lack global significance or multiple international perspectives",
              },
              { id: "b", text: "It would be too easy" },
              { id: "c", text: "Local issues have no evidence" },
              { id: "d", text: "Local issues are always banned" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Global significance",
                statement: "Issues must transcend borders.",
              },
            ],
            steps: [
              {
                reasoning: "GP requires global reach and perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Lacks global significance/perspectives",
          },
        },
        {
          id: "ciegp-u3-iq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate this research question for GP Paper 1: 'Do social media companies have a responsibility to protect teenagers?' Identify two strengths and two weaknesses, then improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question critique",
                statement: "Strengths + weaknesses + improvement.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: names actors (companies) and a real tension (profit vs protection).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: arguable, invites stakeholder views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weaknesses: 'responsibility' undefined; no scope/geography.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improvement e.g.: 'To what extent should governments regulate social media to protect teenage users?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Arguable but undefined terms; add evaluative frame and scope",
          },
        },
        {
          id: "ciegp-u3-iq-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A candidate scores draft questions on four criteria (global reach, contested perspectives, accessible evidence, evaluability), each out of 5: scores are 4, 3, 5, 2. What is the total score, and what percentage of the maximum?",
          response: {
            type: "numeric",
            parts: [
              { label: "Total score", answer: 14 },
              { label: "Percentage of maximum", answer: 70 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question scoring",
                statement: "Sum of criterion scores.",
              },
            ],
            steps: [
              {
                reasoning: "4 + 3 + 5 + 2 = 14.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "14/20 x 100 = 70%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14/20 = 70%",
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
