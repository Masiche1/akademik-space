import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "cilgp-u2-lesson-2-5",
  code: "2-5",
  title: "Project Synthesis: Full Global Perspectives Challenge",
  goal: "I CAN complete a full Global Perspectives project integrating all six skills.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strands: all six skills",
    "Cambridge Global Perspectives: integrated project",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Integrated project",
      definition: "Work combining all six GP skills.",
    },
    {
      term: "Challenge",
      definition: "Cambridge's thematic investigation task.",
    },
    {
      term: "Synthesis",
      definition: "Combining findings into coherent whole.",
    },
    {
      term: "Recommendation",
      definition: "Suggested action based on findings.",
    },
    {
      term: "Limitations",
      definition: "Acknowledged weaknesses in research/methods.",
    },
    { term: "Reflection", definition: "Learning gained from the process." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s5-synth",
      title: "Integrated project work",
      skill:
        "Synthesize research, analysis, evaluation, reflection, collaboration and communication at Stage 9.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Research the issue → analyse evidence and perspectives → evaluate solutions → collaborate on presentation → communicate findings → reflect on learning and plan action. Each skill builds on the others.",
          },
          {
            heading: "Quality markers",
            body: "Strong projects: clear research question, reliable sources, balanced analysis, evidence-based evaluation, clear communication, honest reflection on limitations.",
          },
        ],
        keyFormulas: [
          {
            name: "GP cycle",
            statement:
              "research→analyse→evaluate→collaborate→communicate→reflect",
          },
          {
            name: "Quality",
            statement: "clear question + reliable sources + balanced analysis",
          },
        ],
        workedExample: {
          problem: "Design a project on 'Should cities ban cars from centres?'",
          solution:
            "Research: air quality data, traffic studies. Analyse: residents, businesses, commuters perspectives. Evaluate: congestion charges vs bans. Communicate: presentation + report. Reflect: what did you learn?",
        },
      },
      questions: [
        {
          id: "cilgp-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the six Global Perspectives skills?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plan, do, check, act",
              },
              {
                id: "b",
                text: "Research, analysis, evaluation, reflection, collaboration, communication",
              },
              {
                id: "c",
                text: "Reading, writing, maths, science, art, PE",
              },
              {
                id: "d",
                text: "Ask, answer, explain, evaluate",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GP skills",
                statement: "Six core skills.",
              },
            ],
            steps: [
              {
                reasoning: "The six GP strands.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Research/analysis/evaluation/reflection/collaboration/communication",
          },
        },
        {
          id: "cilgp-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'synthesis' mean in project work?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining into whole.",
              },
            ],
            steps: [
              {
                reasoning: "Combining findings into coherent conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More than summarising — integrates insights.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Integrating findings into whole",
          },
        },
        {
          id: "cilgp-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a strong Global Perspectives project? List three quality markers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project quality",
                statement: "Clear question, reliable sources, balance.",
              },
            ],
            steps: [
              {
                reasoning: "Clear research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reliable/corroborated sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced analysis + honest reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Question + sources + balance",
          },
        },
        {
          id: "cilgp-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name all six GP skills. (b) Describe the full GP project cycle. (c) What is a Challenge? (d) How do the skills integrate? (e) What is synthesis vs summary? (f) What are quality markers for a strong project? (g) Why acknowledge limitations? (h) Design a complete project plan for 'Should homework be abolished?'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "Full GP integration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six skills named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Full cycle described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Thematic investigation task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Each builds on previous.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Synthesis=integrated insights vs summary=condensed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three quality markers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Shows rigour, honesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid complete project plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Integrated Global Perspectives project skills.",
          },
        },
        {
          id: "cilgp-u2-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'Challenge' in Cambridge Global Perspectives?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A thematic investigation task applying GP skills",
              },
              {
                id: "b",
                text: "A mathematics exam",
              },
              {
                id: "c",
                text: "A video game",
              },
              {
                id: "d",
                text: "A sports competition",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Challenge",
                statement: "Thematic investigation task.",
              },
            ],
            steps: [
              {
                reasoning: "Challenges apply all six GP skills to a theme.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Thematic investigation task",
          },
        },
        {
          id: "cilgp-u2-sy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A GP project cycle has 6 stages. How many stages remain after the first stage (research) is completed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining stages",
                statement: "Total minus completed.",
              },
            ],
            steps: [
              {
                reasoning: "6 - 1 = 5 stages remain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilgp-u2-sy-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is synthesis more than just a summary of findings?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Integrating findings into a whole.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary condenses; synthesis combines insights into new understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It connects research, analysis and evaluation into coherent conclusions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Integrates into new understanding",
          },
        },
        {
          id: "cilgp-u2-sy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best shows an integrated GP project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only collecting sources and stopping",
              },
              {
                id: "b",
                text: "Research findings feed analysis, which feeds evaluation and recommendations",
              },
              {
                id: "c",
                text: "Writing a summary the night before",
              },
              {
                id: "d",
                text: "One person doing everything alone",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration",
                statement: "Skills build on each other.",
              },
            ],
            steps: [
              {
                reasoning: "Integration means each skill feeds the next.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Skills feed into each other",
          },
        },
        {
          id: "cilgp-u2-sy-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A team of 4 must complete 24 research tasks. If shared equally, how many tasks does each member complete?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal sharing",
                statement: "Total / members.",
              },
            ],
            steps: [
              {
                reasoning: "24 / 4 = 6 tasks each.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilgp-u2-sy-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student project only did research and a final presentation. Which GP skills are missing, and why does this weaken the project?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration",
                statement: "All six skills needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing: analysis, evaluation, collaboration, reflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No analysis = unexamined evidence; no evaluation = no judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakens rigour, depth and learning value of the project.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Analysis, evaluation, collaboration, reflection missing",
          },
        },
        {
          id: "cilgp-u2-sy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'recommendation' in GP project work?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of chart",
              },
              {
                id: "b",
                text: "A voting result",
              },
              {
                id: "c",
                text: "A book review",
              },
              {
                id: "d",
                text: "A suggested action based on the project's findings",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recommendation",
                statement: "Evidence-based suggestion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recommendations translate findings into suggested action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Suggested action based on findings",
          },
        },
        {
          id: "cilgp-u2-sy-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A project quality checklist has 8 items. A team's project meets 6 of them. What percentage of quality markers are met?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage met",
                statement: "Met / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "6 / 8 = 0.75.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.75 x 100 = 75%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cilgp-u2-sy-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a strong project acknowledges its limitations honestly, with one example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Honest limitations",
                statement: "Acknowledge method weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Names specific weaknesses, e.g. small sample size or time constraints.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example given, e.g. 'our survey only reached students at one school'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains impact on how far findings can be generalised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific limitation + impact on findings",
          },
        },
        {
          id: "cilgp-u2-sy-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the strongest way to conclude a GP project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Repeating the introduction",
              },
              {
                id: "b",
                text: "'We found lots of information'",
              },
              {
                id: "c",
                text: "Asking if there are questions",
              },
              {
                id: "d",
                text: "A recommendation directly linked to the evidence gathered",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project conclusion",
                statement: "Evidence-linked recommendation.",
              },
            ],
            steps: [
              {
                reasoning: "Strong conclusions turn findings into action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Evidence-linked recommendation",
          },
        },
        {
          id: "cilgp-u2-sy-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A GP project plan spans 10 weeks: 4 weeks research, 3 weeks analysis, 2 weeks evaluation, 1 week communication. What percentage of the project is spent on analysis?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 30,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of time",
                statement: "Stage weeks / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "3 / 10 = 0.3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.3 x 100 = 30%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 30%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "cilgp-u2-sy-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a complete project plan for 'Should homework be abolished?': (a) your research question, (b) two GP skills used during research, (c) how analysis and evaluation connect, (d) your reflection question at the end.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "All six skills integrated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Specific arguable question, e.g. 'Does homework improve attainment without harming wellbeing?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two valid skills, e.g. research (sources) and collaboration (group roles).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid link, e.g. analysis weighs perspectives, evaluation judges abolish vs reduce against criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid reflection question, e.g. 'What did I learn about balancing evidence and opinion?'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question, skills, analysis-evaluation link, reflection",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-sy-notes",
      title: "Project synthesis — notes",
      summary:
        "All six skills integrate in a full project: research→analyse→evaluate→collaborate→communicate→reflect.",
      sections: [
        {
          heading: "Key idea",
          body: "GP is about applying skills to real issues, not just learning theory.",
        },
        {
          heading: "Quality",
          body: "Clear question + reliable sources + balanced analysis + honest reflection.",
        },
      ],
    },
  ],
};
