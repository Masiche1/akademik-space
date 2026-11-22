import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieict-u4-lesson-4-2",
  code: "4-2",
  title: "ICT Exam Technique and Project Evaluation",
  goal: "I CAN apply exam technique to IGCSE ICT questions and evaluate ICT projects critically.",
  standards: ["Cambridge IGCSE ICT 0413", "Exam technique, project evaluation"],
  vocabulary: [
    {
      term: "Critical evaluation",
      definition: "Judging a system or project against objectives.",
    },
    {
      term: "Success criteria",
      definition: "Measurable standards a project must meet.",
    },
    {
      term: "Fitness for purpose",
      definition: "Whether the system actually meets user needs.",
    },
    { term: "Limitation", definition: "A weakness or boundary of the system." },
    {
      term: "Improvement",
      definition: "Specific change that would make the system better.",
    },
  ],
  concepts: [
    {
      id: "cieict-u4-s2-exam",
      title: "Exam technique and evaluation",
      skill: "Answer ICT questions precisely and evaluate projects critically.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "ICT 0413 questions test application to scenarios — name the software/feature THEN explain its use in the scenario. 'Suggest' questions want plausible options with justification; 'evaluate' wants judgement against objectives, not just a feature list.",
          },
          {
            heading: "Critical evaluation",
            body: "Strong evaluations compare the system against its original objectives: did it meet them? What are the limitations? What improvements would help? Reference specific features — 'the database lacks validation' beats 'it could be better'.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "objectives + evidence + judgement + improvements",
          },
        ],
        workedExample: {
          problem:
            "Evaluate a school website that lists contact details but has no news section.",
          solution:
            "Meets basic contact objective; fails communication objective — no updates; improvement: add a news/blog section.",
        },
      },
      questions: [
        {
          id: "cieict-u4-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'fitness for purpose' mean in ICT evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The system uses the latest software" },
              { id: "b", text: "The system is easy to install" },
              { id: "c", text: "The system actually meets the user's needs" },
              { id: "d", text: "The system is cheap" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fitness for purpose",
                statement: "Meets actual needs.",
              },
            ],
            steps: [
              {
                reasoning: "Fitness = does it do what users need.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The system actually meets the user's needs",
          },
        },
        {
          id: "cieict-u4-ex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should an ICT evaluation mention limitations, not just strengths?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Critical evaluation",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Limitations show honest critical analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They justify the improvement recommendations that follow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shows critical analysis and justifies improvements",
          },
        },
        {
          id: "cieict-u4-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student project creates a revision website but only works on one computer. Identify two limitations and one improvement for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Limitation → specific improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limitation: single computer — not accessible to users elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improvement: publish online/host it for remote access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: no search or navigation aids; improvement: add index or menu.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accessibility limit → host online; navigation limit → add menu/search",
          },
        },
        {
          id: "cieict-u4-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Scenario: 'A library wants a system to manage book loans.' Describe how you would evaluate whether their new ICT system is successful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation framework",
                statement: "Objectives + evidence + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check against objectives: faster loans, accurate stock records, fewer lost books.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gather evidence: loan processing time before/after, error rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify limitations: e.g. no barcode scanner, staff training gaps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judge success and recommend specific improvements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Compare to objectives with evidence; note limitations; judge and recommend improvements",
          },
        },
        {
          id: "cieict-u4-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are success criteria in an ICT project evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The software brand used by the project" },
              { id: "b", text: "Measurable standards the project must meet" },
              { id: "c", text: "The opinions of one team member" },
              { id: "d", text: "The marks awarded in the examination" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Success criteria",
                statement: "Measurable standards a project must meet.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Success criteria are measurable standards used to judge the project.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Measurable standards the project must meet",
          },
        },
        {
          id: "cieict-u4-ex-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 6-mark evaluation question asks for two limitations and two improvements. How many distinct evaluation points should a candidate plan to make?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation planning",
                statement:
                  "Plan one point for each required limitation and improvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add two limitations and two improvements to get 4 points.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4 points",
          },
        },
        {
          id: "cieict-u4-ex-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A website receives 1,200 visits and 900 of them complete registration. Calculate the registration success rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Success rate",
                statement:
                  "Success rate equals successful outcomes divided by total attempts, multiplied by 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide 900 completed registrations by 1,200 visits to get 0.75.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert 0.75 to a percentage by multiplying by 100, giving 75%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u4-ex-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest improvement suggestion for a school website?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make the website better" },
              { id: "b", text: "Ask users what they think later" },
              {
                id: "c",
                text: "Add a search box and test it with five users because navigation is currently slow",
              },
              { id: "d", text: "Use more colours" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Specific improvement",
                statement:
                  "Improvements should name the change and justify it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The suggestion names a concrete change and links it to the navigation problem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Add a search box and test it with five users because navigation is currently slow",
          },
        },
        {
          id: "cieict-u4-ex-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a project survey, 168 of 240 users rate the new system as easy to use. Calculate the percentage of users who gave this rating.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage",
                statement:
                  "Percentage equals the part divided by the whole, multiplied by 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Calculate 168 divided by 240, then multiply by 100 to get 70%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "70%",
          },
        },
        {
          id: "cieict-u4-ex-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the command word 'evaluate', which response is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Define what an ICT system is" },
              {
                id: "b",
                text: "List the features of the system without comment",
              },
              {
                id: "c",
                text: "Judge the system against its objectives using evidence, limitations and improvements",
              },
              { id: "d", text: "Suggest any software that could be used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "objectives + evidence + judgement + improvements",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation requires judgement against objectives, not just description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Judge the system against its objectives using evidence, limitations and improvements",
          },
        },
        {
          id: "cieict-u4-ex-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is a specific limitation rather than a vague criticism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The database has no input validation, so invalid entries can be saved",
              },
              { id: "b", text: "Everything works well" },
              { id: "c", text: "The system could be better" },
              { id: "d", text: "The colour scheme is not very nice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Specific limitation",
                statement:
                  "A limitation identifies a concrete weakness in the system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing input validation is a concrete weakness that can be improved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The database has no input validation, so invalid entries can be saved",
          },
        },
        {
          id: "cieict-u4-ex-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An ICT project was budgeted at 8,000 USD but cost 9,200 USD. Calculate the percentage overspend.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage overspend",
                statement:
                  "Overspend percentage equals the extra cost divided by the budget, multiplied by 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the budget from the actual cost to get an overspend of 1,200 USD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide 1,200 USD by 8,000 USD and multiply by 100 to get 15%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15%",
          },
        },
        {
          id: "cieict-u4-ex-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student wants to prove that a school library ICT system is successful. Which evidence is most convincing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More books were bought for the library" },
              { id: "b", text: "The system looks modern" },
              { id: "c", text: "The librarian thinks the system is good" },
              {
                id: "d",
                text: "Loan processing time fell from 5 minutes to 2 minutes and errors fell from 20 to 5 per week",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation evidence",
                statement:
                  "Use measurable evidence linked to the project's objectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Before-and-after measurements provide objective evidence of improvement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Loan processing time fell from 5 minutes to 2 minutes and errors fell from 20 to 5 per week",
          },
        },
        {
          id: "cieict-u4-ex-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a new school website meets its objective of improving communication with parents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation framework",
                statement: "objectives + evidence + judgement + improvements",
              },
            ],
            steps: [
              {
                reasoning:
                  "State the objective clearly: improving communication with parents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Give strengths with evidence, such as news pages, contact details or mobile access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Identify a specific limitation, such as no newsletter, slow updates or poor accessibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reach a judgement on fitness for purpose and recommend a concrete improvement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Judge against the communication objective using evidence; identify limitations and recommend improvements",
          },
        },
        {
          id: "cieict-u4-ex-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A system's error rate fell from 40 errors per week to 10 errors per week after an update. Calculate the percentage reduction in errors.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage reduction",
                statement:
                  "Reduction percentage equals the decrease divided by the original value, multiplied by 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract 10 from 40 to find a decrease of 30 errors per week.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide 30 by 40 and multiply by 100 to get a 75% reduction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u4-ex-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An examination question says 'Suggest two ways the system could be improved.' What does the command word require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rewrite the project's original objectives" },
              {
                id: "b",
                text: "Calculate the exact cost of every improvement",
              },
              {
                id: "c",
                text: "Only identify weaknesses without proposing changes",
              },
              {
                id: "d",
                text: "Propose two plausible improvements, each with justification",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Suggest",
                statement:
                  "Suggest wants plausible options with justification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Suggest requires plausible improvements supported by reasons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Propose two plausible improvements, each with justification",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u4-exam-notes",
      title: "Exam technique — revision notes",
      summary: "Scenario application, critical evaluation, improvements.",
      sections: [
        {
          heading: "Key skills",
          body: "Name the feature/technique then apply to scenario; evaluate against objectives with specific limitations and improvements.",
        },
        {
          heading: "Exam tips",
          body: "Vague improvements ('make it better') lose marks — specify WHAT to change and WHY.",
        },
      ],
    },
  ],
};
