import type { Lesson } from "../../../types.ts";

export const lesson99: Lesson = {
  id: "cieict-u3-lesson-3-4",
  code: "3-4",
  title: "ICT Project Evaluation",
  goal: "I CAN evaluate ICT projects against objectives and identify improvements.",
  standards: [
    "Cambridge IGCSE ICT 0417: evaluation",
    "0417: project assessment",
  ],

  vocabulary: [
    { term: "Evaluation", definition: "Assessing success against criteria." },
    {
      term: "Success criteria",
      definition: "Measurable standards for judging outcomes.",
    },
    {
      term: "User feedback",
      definition: "Opinions from people using the product.",
    },
    { term: "Efficiency", definition: "How well resources are used." },
    { term: "Effectiveness", definition: "Whether objectives were achieved." },
    { term: "Improvement", definition: "Changes to make product better." },
  ],
  concepts: [
    {
      id: "cieict-u3-s4-eval",
      title: "Project evaluation",
      skill: "Evaluate ICT projects systematically at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Did it meet objectives? Is it user-friendly? Is it efficient? Is it secure? Gather user feedback. Compare actual vs planned outcomes.",
          },
          {
            heading: "Improvement cycle",
            body: "Identify weaknesses → prioritise fixes → implement changes → re-test. Evaluation isn't just criticism — it's learning what works and planning next iteration.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "objectives vs outcomes" },
          { name: "Feedback", statement: "user opinions guide improvement" },
          { name: "Iteration", statement: "evaluate→improve→re-test" },
        ],
        workedExample: {
          problem:
            "Evaluate a school website you built. What criteria and feedback would you gather?",
          solution:
            "Check: meets objectives? User-friendly? Fast? Mobile-friendly? Gather teacher/student feedback → identify issues → plan improvements.",
        },
      },
      questions: [
        {
          id: "cieict-u3-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaluation in ICT projects?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A programming language",
              },
              {
                id: "b",
                text: "Assessing success against criteria",
              },
              {
                id: "c",
                text: "A network device",
              },
              {
                id: "d",
                text: "A type of software",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Success assessment.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation = judging against criteria.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Success assessment",
          },
        },
        {
          id: "cieict-u3-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between effectiveness and efficiency?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective vs efficient",
                statement: "Goals vs resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective=achieved objectives; efficient=used resources well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both matter for success.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Goals vs resource use",
          },
        },
        {
          id: "cieict-u3-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why gather user feedback when evaluating a project? What types of feedback are useful?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "User feedback",
                statement: "Real-world validation.",
              },
            ],
            steps: [
              {
                reasoning: "Feedback reveals real usability issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Types: usability, functionality, satisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Guides improvements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reveals real issues; guides improvements",
          },
        },
        {
          id: "cieict-u3-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, success criteria, user feedback, efficiency, effectiveness, improvement. (b) What makes good success criteria? (c) How do you gather user feedback? (d) What is effectiveness vs efficiency? (e) Why iterate after evaluation? (f) What should an evaluation report include? (g) How do you prioritise improvements? (h) Evaluate a hypothetical school canteen ordering system.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria, feedback, improvement.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Measurable, relevant, achievable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Surveys, interviews, observation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Goals vs resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Improve based on findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Objectives, outcomes, feedback, recommendations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Impact vs effort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid canteen system evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Project evaluation and improvement cycles.",
          },
        },
        {
          id: "cieict-u3-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In ICT project work, what does 'evaluation' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Buying the project software",
              },
              {
                id: "b",
                text: "Writing the first draft of a document",
              },
              {
                id: "c",
                text: "Deleting files that are not needed",
              },
              {
                id: "d",
                text: "Assessing whether the project achieved its objectives",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Assessing success against criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation judges outcomes against the original objectives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Assessing success vs objectives",
          },
        },
        {
          id: "cieict-u3-pe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An evaluation uses 10 success criteria and the product meets 8 of them. What percentage of criteria were met?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 80,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Success criteria",
                statement: "Met / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "8 / 10 x 100 = 80%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "cieict-u3-pe-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A project is budgeted at $2000 but the final cost is $2500. The actual cost is what percentage of the budget?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 125,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Efficiency",
                statement: "Actual / planned x 100.",
              },
            ],
            steps: [
              {
                reasoning: "2500 / 2000 x 100 = 125% of budget.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "125%",
          },
        },
        {
          id: "cieict-u3-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between 'effectiveness' and 'efficiency' when evaluating a project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Effectiveness = speed; efficiency = cost only",
              },
              {
                id: "b",
                text: "Effectiveness = whether objectives were achieved; efficiency = how well resources were used",
              },
              {
                id: "c",
                text: "They mean exactly the same thing",
              },
              {
                id: "d",
                text: "Efficiency is about user opinions; effectiveness is about files",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effectiveness vs efficiency",
                statement: "Goals achieved vs resources used.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effectiveness measures goal achievement; efficiency measures resource use.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Goals met vs resources used",
          },
        },
        {
          id: "cieict-u3-pe-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to gather user feedback when evaluating an ICT product?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "User feedback",
                statement: "Opinions guide improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Users reveal problems the developer may not notice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feedback shows whether the product actually meets user needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reveals real issues and validates usefulness",
          },
        },
        {
          id: "cieict-u3-pe-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a satisfaction survey, 42 out of 50 users say they are happy with a new app. What percentage of users are satisfied?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 84,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage",
                statement: "Satisfied / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "42 / 50 x 100 = 84%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "84%",
          },
        },
        {
          id: "cieict-u3-pe-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of the ICT improvement cycle?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Delete the product -> start again -> never test",
              },
              {
                id: "b",
                text: "Random changes with no evaluation",
              },
              {
                id: "c",
                text: "Evaluate -> identify weaknesses -> implement improvements -> re-test",
              },
              {
                id: "d",
                text: "Implement changes -> evaluate -> identify weaknesses",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Improvement cycle",
                statement: "Evaluate, improve, re-test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation identifies weaknesses which are fixed then re-tested.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Evaluate -> improve -> re-test",
          },
        },
        {
          id: "cieict-u3-pe-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An evaluation finds 5 weaknesses in a product and the team fixes 3 of them in the next version. What percentage of weaknesses were addressed?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "20%",
              },
              {
                id: "b",
                text: "40%",
              },
              {
                id: "c",
                text: "80%",
              },
              {
                id: "d",
                text: "60%",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Improvements",
                statement: "Fixed / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "3 / 5 x 100 = 60%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "cieict-u3-pe-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between 'objectives' and 'success criteria' in a project?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objectives vs criteria",
                statement: "Goals vs measurable standards.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Objectives are the overall goals the project aims to achieve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Success criteria are measurable standards used to judge whether objectives were met.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Goals vs measurable standards",
          },
        },
        {
          id: "cieict-u3-pe-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "During testing, 20 users try a new website and 5 report problems. What percentage of users reported issues?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 25,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Testing",
                statement: "Issues / testers x 100.",
              },
            ],
            steps: [
              {
                reasoning: "5 / 20 x 100 = 25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieict-u3-pe-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the STRONGEST evidence to use when evaluating whether an ICT project succeeded?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Measurable results compared with the objectives plus genuine user feedback",
              },
              {
                id: "b",
                text: "How expensive the software looked",
              },
              {
                id: "c",
                text: "The developer's personal opinion alone",
              },
              {
                id: "d",
                text: "How long the project took",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation evidence",
                statement: "Objectively compare outcomes and gather feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence-based evaluation compares actual results with objectives and user needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Measured results + user feedback",
          },
        },
        {
          id: "cieict-u3-pe-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student has built a revision website for their school. Describe how they should evaluate it and what improvements they might identify.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation method",
                statement: "Criteria, feedback, improvement plan.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check it against objectives: does it cover the topics, is it easy to navigate, does it work on mobile?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gather feedback from students and teachers using the site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify weaknesses (e.g. slow pages, missing topics), prioritise fixes and plan the next iteration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Criteria check, feedback, prioritised improvements",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-pe-notes",
      title: "Evaluation — notes",
      summary:
        "Evaluate against objectives; gather user feedback; iterate to improve.",
      sections: [
        {
          heading: "Key idea",
          body: "Evaluation closes the loop — learn, improve, re-test.",
        },
        {
          heading: "Criteria",
          body: "Measurable success criteria set before starting.",
        },
      ],
    },
  ],
};
