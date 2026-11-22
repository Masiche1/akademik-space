import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ciegp-u1-lesson-1-1",
  code: "1-1",
  title: "Research Question and Issue Selection",
  goal: "I CAN select a suitable global issue and formulate a focused research question.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: research",
    "0457: issue selection",
  ],

  vocabulary: [
    {
      term: "Global issue",
      definition: "Problem affecting people across countries/regions.",
    },
    {
      term: "Research question",
      definition: "Focused question guiding investigation.",
    },
    {
      term: "Scope",
      definition: "Boundaries of investigation — what's included/excluded.",
    },
    { term: "Relevance", definition: "Connection to real-world significance." },
    {
      term: "Feasibility",
      definition: "Whether research can realistically be completed.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group affected by or affecting the issue.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u1-s1-issue",
      title: "Issue selection and research questions",
      skill: "Choose issues and formulate questions at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Choosing an issue",
            body: "Good GP issues are significant, current, researchable, and have multiple perspectives. Avoid issues too broad ('poverty') or too narrow ('one family's poverty'). Consider your interests and available resources.",
          },
          {
            heading: "Formulating questions",
            body: "Research questions should be specific, arguable, and answerable with evidence: 'How effective are cash transfers in reducing poverty in Kenya?' not 'Is poverty bad?' Frame as investigation, not opinion.",
          },
        ],
        keyFormulas: [
          {
            name: "Good question",
            statement: "specific + arguable + investigable",
          },
          { name: "Scope", statement: "clear boundaries" },
        ],
        workedExample: {
          problem:
            "Turn 'climate change is bad' into a researchable GP question.",
          solution:
            "'How does climate change affect food security in South Asia, and which adaptation strategies show evidence of success?'",
        },
      },
      questions: [
        {
          id: "ciegp-u1-rq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good research question?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Short and simple",
              },
              {
                id: "b",
                text: "Has a yes/no answer",
              },
              {
                id: "c",
                text: "Specific, arguable, investigable",
              },
              {
                id: "d",
                text: "Is famous",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Focused investigable query.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Good questions are specific, arguable, answerable with evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific + arguable + investigable",
          },
        },
        {
          id: "ciegp-u1-rq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is scope and why define it in research?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scope",
                statement: "Research boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Scope = what's included/excluded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents research becoming too broad/unfocused.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Boundaries preventing overreach",
          },
        },
        {
          id: "ciegp-u1-rq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this research question: 'Is technology good?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question improvement",
                statement: "Specific and arguable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Too broad/vague — 'technology' and 'good' undefined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. 'How has mobile technology affected small business in rural India?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specific, arguable, investigable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific arguable question",
          },
        },
        {
          id: "ciegp-u1-rq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define global issue, research question, scope, relevance, feasibility, stakeholder. (b) What makes a good GP issue? (c) Improve: 'Is poverty bad?' (d) Improve: 'Should guns be banned?' (e) What is scope? (f) Why is feasibility important? (g) List 3 stakeholders for 'social media regulation'. (h) Design a research question on 'water scarcity'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research design",
                statement: "Issues and questions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Significant, current, researchable, multi-perspective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Improved specific question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Improved specific question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Boundaries of investigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Realistic completion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three valid stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid research question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Issue selection and research question formulation.",
          },
        },
        {
          id: "ciegp-u1-rq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the most suitable issue for an IGCSE Global Perspectives project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "My opinion on homework",
              },
              {
                id: "b",
                text: "How access to clean water affects health in developing countries",
              },
              {
                id: "c",
                text: "One family's experience of debt",
              },
              {
                id: "d",
                text: "The history of a single village",
              },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global issue",
                statement: "Cross-border problem with multiple perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only option C is significant, current and researchable across countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Water access and health",
          },
        },
        {
          id: "ciegp-u1-rq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A research question is strongest when it is...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Answerable only with an opinion",
              },
              {
                id: "b",
                text: "Specific, arguable and investigable",
              },
              {
                id: "c",
                text: "As broad as possible",
              },
              {
                id: "d",
                text: "Impossible to answer",
              },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Specific + arguable + investigable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Good questions are focused, debatable and evidence-based.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific + arguable + investigable",
          },
        },
        {
          id: "ciegp-u1-rq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which research question has the clearest scope?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To what extent does TikTok use by 13-15 year olds in urban Brazil affect sleep quality?",
              },
              {
                id: "b",
                text: "Is technology useful?",
              },
              {
                id: "c",
                text: "What are the effects of social media?",
              },
              {
                id: "d",
                text: "Why is everything bad?",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scope",
                statement: "Clear boundaries on who, where, when.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option C names population, place and outcome — clearly bounded.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The TikTok/sleep question",
          },
        },
        {
          id: "ciegp-u1-rq-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'global issue' and give one example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global issue",
                statement: "Problem affecting people across countries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem transcending national borders affecting many people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. climate change, poverty, food security.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cross-border problem + valid example",
          },
        },
        {
          id: "ciegp-u1-rq-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'poverty' alone is too broad an issue for a GP project, and suggest how to narrow it.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Issue narrowing",
                statement: "Bound issue by place, group or aspect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Covers many countries, causes and forms — cannot be researched fully.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Narrow by region e.g. rural Kenya, or aspect e.g. child nutrition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes it feasible and allows specific evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Too broad; bound by place/group/aspect",
          },
        },
        {
          id: "ciegp-u1-rq-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three features that make a research question feasible.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feasibility",
                statement: "Realistically answerable in time/resources.",
              },
            ],
            steps: [
              {
                reasoning: "Accessible data/sources exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can be completed within time and resource limits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Skills and methods match the question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Data access, time/resources, matching skills",
          },
        },
        {
          id: "ciegp-u1-rq-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite 'Why is the world unequal?' as a stronger GP research question, and explain your improvements.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question improvement",
                statement: "Add scope, tension, evaluative frame.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify vagueness: 'world' and 'unequal' undefined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add scope e.g. income inequality in Southeast Asia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add tension e.g. trade policies vs domestic inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'To what extent do free trade agreements increase income inequality in Vietnam?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Scoped, arguable rewrite with explanation",
          },
        },
        {
          id: "ciegp-u1-rq-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stakeholder? Give two stakeholders for the issue 'air pollution in cities'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Person/group affected by or affecting the issue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anyone affected by, or able to influence, the issue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. city residents, transport companies, health workers, government.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Affected party + two valid examples",
          },
        },
        {
          id: "ciegp-u1-rq-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare 'How does fast fashion affect garment workers in Bangladesh?' with 'Is fast fashion bad?' — which is the better research question and why?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question quality",
                statement:
                  "Specific, arguable, investigable beats vague/opinion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First question names place, group and impact — specific.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It invites evidence about wages, conditions, health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Is fast fashion bad?' is vague and opinion-based — 'bad' undefined.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion: first is better for GP research.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific question beats vague opinion question",
          },
        },
        {
          id: "ciegp-u1-rq-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'relevance' and 'feasibility' mean for choosing a GP issue, with an example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relevance / feasibility",
                statement: "Significance vs realistic completion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relevance = real-world significance to people/society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feasibility = can be researched within time, data and skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. refugee education is relevant; feasible if local data/schools accessible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Significance + realistic completion",
          },
        },
        {
          id: "ciegp-u1-rq-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Design a research question on 'refugee education' that is specific, arguable and has clear scope. Justify each feature.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Question design",
                statement: "Specific + arguable + scoped.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific question e.g. barriers to schooling for refugee children in camps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Arguable e.g. comparing camp schools vs host-community integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scope defined e.g. one region, defined age group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: 'How effective are mobile schools in improving literacy for refugee children aged 6-12 in Ugandan camps?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Scoped arguable question with justification",
          },
        },
        {
          id: "ciegp-u1-rq-q16",
          difficulty: "core",
          totalMarks: 6,
          stem: "(a) What four qualities make a good GP issue? (b) Rewrite 'Should homework be banned?' as a stronger question. (c) Define scope. (d) Give two stakeholders for 'social media and mental health'. (e) Why is a yes/no question weak? (f) What makes a question investigable?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research design",
                statement: "Issue, question, scope, stakeholders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Significant, current, researchable, multi-perspective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) e.g. 'To what extent does daily homework improve learning outcomes for secondary students?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Boundaries of what's included/excluded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) e.g. teenagers, parents, platforms, health professionals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) No analysis/evaluation possible; invites opinion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Answerable with available evidence within constraints.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Issue selection and question design mastery.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-rq-notes",
      title: "Issue selection — notes",
      summary:
        "Choose significant researchable issues; formulate specific arguable questions with clear scope.",
      sections: [
        {
          heading: "Key idea",
          body: "Good research starts with focused, answerable questions.",
        },
        {
          heading: "Scope",
          body: "Define boundaries to keep research manageable.",
        },
      ],
    },
  ],
};
