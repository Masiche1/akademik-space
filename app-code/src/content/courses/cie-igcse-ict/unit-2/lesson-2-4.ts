import type { Lesson } from "../../../types.ts";

export const lesson94: Lesson = {
  id: "cieict-u2-lesson-2-4",
  code: "2-4",
  title: "Integrated ICT Projects",
  goal: "I CAN plan and execute an integrated ICT project combining multiple applications.",
  standards: [
    "Cambridge IGCSE ICT 0417: integrated projects",
    "0417: project work",
  ],

  vocabulary: [
    {
      term: "ICT project",
      definition: "Task combining multiple ICT applications.",
    },
    {
      term: "Project plan",
      definition: "Document outlining tasks, timeline, resources.",
    },
    { term: "Deliverable", definition: "Final product/outcome of project." },
    { term: "Iteration", definition: "Revising work based on feedback." },
    {
      term: "Evaluation",
      definition: "Assessing project success against criteria.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group with interest in project.",
    },
  ],
  concepts: [
    {
      id: "cieict-u2-s4-proj",
      title: "Integrated projects",
      skill: "Manage multi-application ICT projects at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Project planning",
            body: "Define objectives, identify deliverables, plan timeline, assign tasks, gather resources. Choose appropriate tools: word processor for documents, spreadsheet for data, presentation for delivery, database for records.",
          },
          {
            heading: "Execution and evaluation",
            body: "Build incrementally, test at each stage, gather feedback, iterate. Evaluate against original objectives: did it meet requirements? What worked? What could improve?",
          },
        ],
        keyFormulas: [
          {
            name: "Project plan",
            statement: "objectives + tasks + timeline + resources",
          },
          { name: "Evaluation", statement: "success vs objectives" },
        ],
        workedExample: {
          problem:
            "Create a school event promotion: poster + invitation letters + attendance spreadsheet.",
          solution:
            "Plan: DTP for poster, word processor+mail merge for invitations, spreadsheet for RSVPs. Execute each, then integrate.",
        },
      },
      questions: [
        {
          id: "cieict-u2-ip-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a deliverable in a project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A network cable",
              },
              {
                id: "b",
                text: "A type of software",
              },
              {
                id: "c",
                text: "Final product/outcome",
              },
              {
                id: "d",
                text: "A project manager",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deliverable",
                statement: "Final outcome.",
              },
            ],
            steps: [
              {
                reasoning: "Deliverable = what project produces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Final product/outcome",
          },
        },
        {
          id: "cieict-u2-ip-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a project plan include? Give three elements.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Project plan",
                statement: "Tasks, timeline, resources.",
              },
            ],
            steps: [
              {
                reasoning: "Tasks/objectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Timeline + resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tasks + timeline + resources",
          },
        },
        {
          id: "cieict-u2-ip-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why evaluate a project against original objectives? What does evaluation reveal?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Success vs objectives.",
              },
            ],
            steps: [
              {
                reasoning: "Checks if project met requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals what worked and what to improve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Informs future projects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Success measurement + lessons learned",
          },
        },
        {
          id: "cieict-u2-ip-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ICT project, project plan, deliverable, iteration, evaluation, stakeholder. (b) What makes a good project plan? (c) How do you choose ICT tools? (d) What is iteration? (e) How do you evaluate success? (f) What are stakeholders? (g) How do you handle project setbacks? (h) Design a project plan for 'school charity fundraising campaign'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Projects",
                statement: "Planning, execution, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Clear tasks, timeline, resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Match tool to task requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Revising based on feedback.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Against original objectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Interested parties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Adjust plan, communicate, persevere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid fundraising project plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Integrated ICT project management.",
          },
        },
        {
          id: "cieict-u2-ip-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'deliverable' in an ICT project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A meeting held during the project",
              },
              {
                id: "b",
                text: "The software licence fee",
              },
              {
                id: "c",
                text: "A type of computer virus",
              },
              {
                id: "d",
                text: "The final product or outcome the project must produce",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deliverable",
                statement: "Final product/outcome of a project.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deliverables are the tangible outputs agreed at planning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Final product/outcome",
          },
        },
        {
          id: "cieict-u2-ip-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project has 12 tasks to be shared equally among 4 team members. How many tasks does each member get?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "4",
              },
              {
                id: "b",
                text: "2",
              },
              {
                id: "c",
                text: "3",
              },
              {
                id: "d",
                text: "6",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Workload",
                statement: "Tasks / team members.",
              },
            ],
            steps: [
              {
                reasoning: "12 / 4 = 3 tasks each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3 tasks",
          },
        },
        {
          id: "cieict-u2-ip-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project budget is $1200 and $900 has been spent so far. What percentage of the budget has been used?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Budget",
                statement: "Spent / budget x 100.",
              },
            ],
            steps: [
              {
                reasoning: "900 / 1200 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u2-ip-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which software is most appropriate for producing personalised invitation letters to 200 guests using a guest list?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A calculator",
              },
              {
                id: "b",
                text: "A paint program",
              },
              {
                id: "c",
                text: "Word processor with mail merge",
              },
              {
                id: "d",
                text: "A web browser",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mail merge",
                statement: "Template + data source = personalised letters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mail merge merges a data list into a letter template.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Word processor with mail merge",
          },
        },
        {
          id: "cieict-u2-ip-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to gather feedback and revise ('iterate') during an ICT project rather than finishing in one go?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Iteration",
                statement: "Revise based on feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Early feedback reveals problems while they are cheap to fix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Iteration improves quality and ensures the product meets user needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Catch problems early and improve quality",
          },
        },
        {
          id: "cieict-u2-ip-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project plan schedules design for 5 days, building for 10 days and testing for 3 days, one after another. How many days does the project take in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 18,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timeline",
                statement: "Sum sequential task durations.",
              },
            ],
            steps: [
              {
                reasoning: "5 + 10 + 3 = 18 days.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "18 days",
          },
        },
        {
          id: "cieict-u2-ip-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of a 'stakeholder' in a school website project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The students and teachers who will use the website",
              },
              {
                id: "b",
                text: "The electricity supply",
              },
              {
                id: "c",
                text: "The computer monitor",
              },
              {
                id: "d",
                text: "The office chair",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Person/group with interest in the project.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Users and beneficiaries have a direct interest in the outcome.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Students and teachers",
          },
        },
        {
          id: "cieict-u2-ip-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project specification lists 12 requirements and the finished product meets 9 of them. What percentage of requirements were met?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Requirements",
                statement: "Met / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "9 / 12 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u2-ip-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between 'testing' and 'evaluating' an ICT project?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Testing vs evaluation",
                statement: "Checking function vs judging success.",
              },
            ],
            steps: [
              {
                reasoning: "Testing checks whether parts work as intended.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluation judges whether the whole project met its objectives and was worthwhile.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Function check vs success judgement",
          },
        },
        {
          id: "cieict-u2-ip-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A project has 6 planned deliverables and 2 are still unfinished at the deadline. How many deliverables are complete?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deliverables",
                statement: "Total minus unfinished.",
              },
            ],
            steps: [
              {
                reasoning: "6 - 2 = 4 complete deliverables.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4 deliverables",
          },
        },
        {
          id: "cieict-u2-ip-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should be the FIRST step when starting a new ICT project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Define the objectives and produce a project plan",
              },
              {
                id: "b",
                text: "Write the evaluation first",
              },
              {
                id: "c",
                text: "Buy the software immediately",
              },
              {
                id: "d",
                text: "Start coding/building straight away",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project planning",
                statement: "Objectives + tasks + timeline + resources.",
              },
            ],
            steps: [
              {
                reasoning: "Clear objectives and a plan prevent wasted effort.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Define objectives and plan",
          },
        },
        {
          id: "cieict-u2-ip-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A school club must produce publicity for a charity concert: a poster, invitation emails and an attendance list. Outline how you would plan this integrated ICT project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated project",
                statement: "Plan, assign tools, execute, evaluate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define objectives and deliverables; create a timeline and assign tasks to team members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choose tools: DTP/graphics for the poster, email/mail merge for invitations, spreadsheet for RSVPs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Execute each part, test outputs, gather feedback and evaluate against the original objectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Plan, choose tools, execute, evaluate",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-ip-notes",
      title: "ICT projects — notes",
      summary:
        "Plan objectives→tasks→timeline; choose right tools; iterate; evaluate against objectives.",
      sections: [
        {
          heading: "Key idea",
          body: "ICT projects combine multiple applications into integrated solutions.",
        },
        {
          heading: "Evaluation",
          body: "Did it meet requirements? What worked? What to improve?",
        },
      ],
    },
  ],
};
