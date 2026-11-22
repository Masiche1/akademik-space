import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eiascs-u4-lesson-4-3",
  code: "4-3",
  title: "Programming Project Development",
  goal: "I CAN plan, design and implement a programming project.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 4 — Programming in Practice",
  ],
  vocabulary: [
    {
      term: "Requirements",
      definition: "What software must do — functional and non-functional.",
    },
    {
      term: "Design specification",
      definition: "Detailed plan — architecture, interfaces.",
    },
    { term: "Prototype", definition: "Early version — test concepts." },
    {
      term: "User story",
      definition: "Description of feature from user perspective.",
    },
    {
      term: "Acceptance criteria",
      definition: "Conditions for feature completion.",
    },
    { term: "Iterative development", definition: "Build in small increments." },
  ],
  concepts: [
    {
      id: "eiascs-u4-requirements",
      title: "Requirements Analysis",
      skill: "Identify and analyse software requirements.",
      lesson: {
        sections: [
          {
            heading: "Requirement types",
            body: "**Functional**: what system does — login, calculate, display. **Non-functional**: how well — speed, security, usability. **Constraints**: limits — budget, time, technology.\n\n**Gathering**: ask users, observe, analyse existing systems. **Prioritise**: must-have vs nice-to-have.",
          },
          {
            heading: "User stories",
            body: "**Format**: 'As a [user], I want [feature] so that [benefit]'. **Example**: 'As a student, I want to view grades so that I can track progress'. **Acceptance criteria**: conditions for done — 'grades display in table format'.\n\n**Benefits**: user-focused, clear priorities, testable.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "App must work offline. Requirement type?",
          solution: "Non-functional.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-req-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a functional requirement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How secure it is" },
              { id: "b", text: "What system does" },
              { id: "c", text: "How fast it runs" },
              { id: "d", text: "How easy to use" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functional",
                statement: "What it does.",
              },
            ],
            steps: [
              { reasoning: "Functional = what.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** What it does",
            commonErrors: ["Non-functional confused."],
          },
        },
        {
          id: "eiascs-u4-req-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two requirement types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Requirement types",
                statement: "Functional + non-functional.",
              },
            ],
            steps: [
              {
                reasoning: "Functional — what system does.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Non-functional — how well (speed, security).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Constraints — budget, time, technology.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Functional, non-functional, constraints.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiascs-u4-req-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain user story format.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "User story",
                statement: "User+feature+benefit.",
              },
            ],
            steps: [
              {
                reasoning: "As a [user] — who benefits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "I want [feature] — what they need.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "So that [benefit] — why they need it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: student wants grades view to track progress.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "User+feature+benefit format.",
            commonErrors: ["No format.", "Wrong example."],
          },
        },
        {
          id: "eiascs-u4-req-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "School wants attendance tracking app.",
          parts: [
            { label: "a", prompt: "Identify requirements.", marks: 4 },
            { label: "b", prompt: "Prioritise features.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Requirements analysis",
                statement: "Need + priority.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Functional: record attendance, view reports.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Non-functional: fast, secure, easy to use.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Must-have: basic attendance recording.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Nice-to-have: advanced analytics, mobile app.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) functional+non-functional (b) must-have+nice-to-have",
            commonErrors: ["No requirements.", "No priority."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-design",
      title: "System Design and Architecture",
      skill: "Design software architecture and interfaces.",
      lesson: {
        sections: [
          {
            heading: "Architecture",
            body: "**Monolithic**: single application — simple, hard to scale. **Client-server**: separate client and server — scalable, distributed. **Microservices**: small independent services — flexible, complex.\n\n**Choosing**: monolithic for small apps; client-server for web; microservices for large systems.",
          },
          {
            heading: "Interface design",
            body: "**UI**: user interface — what users see. **API**: program interface — how programs communicate. **Design principles**: consistency, feedback, user control, error prevention.\n\n**Prototyping**: early version — test concepts, get feedback, iterate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Web app with separate frontend and backend. Architecture?",
          solution: "Client-server.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is software architecture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overall structure of system" },
              { id: "b", text: "Testing software" },
              { id: "c", text: "Writing code" },
              { id: "d", text: "Documenting code" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Architecture",
                statement: "System structure.",
              },
            ],
            steps: [
              {
                reasoning: "Architecture = structure.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** System structure",
            commonErrors: ["Coding confused."],
          },
        },
        {
          id: "eiascs-u4-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two architecture types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Architecture types",
                statement: "Monolithic, client-server.",
              },
            ],
            steps: [
              {
                reasoning: "Monolithic — single application.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Client-server — separate client and server.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Microservices — small independent services.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Monolithic, client-server, microservices.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiascs-u4-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain client-server architecture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Client-server",
                statement: "Separate roles.",
              },
            ],
            steps: [
              {
                reasoning: "Client — user interface, requests.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Server — processes requests, stores data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Communication — client sends request, server responds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Scalable — multiple servers handle load.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Client requests, server responds.",
            commonErrors: ["Monolithic confused.", "No communication."],
          },
        },
        {
          id: "eiascs-u4-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design architecture for school attendance app.",
          parts: [
            { label: "a", prompt: "Suggest architecture.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Architecture design",
                statement: "Need + scalability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Client-server — web app with database.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Mobile app as client, server for data.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Multiple users — needs central data store.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Scalable — add servers as needed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) client-server (b) central data+scalable",
            commonErrors: ["Monolithic.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-implementation",
      title: "Implementation and Iterative Development",
      skill: "Implement software iteratively with testing.",
      lesson: {
        sections: [
          {
            heading: "Iterative development",
            body: "**Build incrementally**: small working versions — each adds features. **Test each iteration**: verify works before continuing. **Get feedback**: users test, provide input. **Refine**: improve based on feedback.\n\n**Benefits**: early error detection, user involvement, adaptable to changes.",
          },
          {
            heading: "Implementation practices",
            body: "**Modular code**: functions, classes — reusable parts. **Version control**: track changes — Git. **Continuous testing**: test as you build. **Documentation**: explain code, decisions.\n\n**Debugging**: find and fix errors — trace, test, fix.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Build login first, then add features. Approach?",
          solution: "Iterative.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-impl-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is iterative development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Build in small increments" },
              { id: "b", text: "Build everything at once" },
              { id: "c", text: "Test only at end" },
              { id: "d", text: "No testing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iterative",
                statement: "Small increments.",
              },
            ],
            steps: [
              {
                reasoning: "Iterative = increments.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Increments",
            commonErrors: ["Waterfall confused."],
          },
        },
        {
          id: "eiascs-u4-impl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of iterative development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iterative benefits",
                statement: "Early errors + feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Early error detection — find bugs sooner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "User feedback — improve based on input.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adaptable — change course if needed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Early errors, feedback, adaptable.",
            commonErrors: ["Only one.", "Wrong benefit."],
          },
        },
        {
          id: "eiascs-u4-impl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why modular code is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modularity",
                statement: "Reusable + maintainable.",
              },
            ],
            steps: [
              {
                reasoning: "Reusable — use same code multiple times.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Maintainable — change one part without affecting others.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Testable — test modules independently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Readable — easier to understand.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reuse+maintain+test+readable.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-impl-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan development of calculator app.",
          parts: [
            { label: "a", prompt: "Identify iterations.", marks: 4 },
            { label: "b", prompt: "Explain approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iterative planning",
                statement: "Small increments.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Iteration 1: basic addition only.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Iteration 2: add subtraction, multiplication.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Iteration 3: add division, error handling.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Iteration 4: UI improvements, testing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Test each iteration — ensure works.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Get feedback — improve based on input.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 4 iterations (b) test+feedback",
            commonErrors: ["All at once.", "No testing."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-project",
      title: "Project Evaluation and Documentation",
      skill: "Evaluate project outcomes and document development.",
      lesson: {
        sections: [
          {
            heading: "Project evaluation",
            body: "**Against requirements**: does it meet needs? **Quality**: tested, reliable, usable. **Cost**: time, resources used. **Lessons learned**: what worked, what didn't.\n\n**Evaluation criteria**: success = meets requirements, quality acceptable, within budget/time.",
          },
          {
            heading: "Documentation",
            body: "**Technical**: code comments, design docs. **User**: manuals, help files. **Project**: requirements, plans, reports. **Purpose**: understanding, maintenance, handover.\n\n**Good documentation**: clear, complete, up-to-date — helps others understand and maintain.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Project meets requirements but over budget. Success?",
          solution: "Partial — quality good, cost issue.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-proj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is project evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assessing project success" },
              { id: "b", text: "Writing code" },
              { id: "c", text: "Documenting code" },
              { id: "d", text: "Testing software" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Assess success.",
              },
            ],
            steps: [
              { reasoning: "Evaluation = assess.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Assess success",
            commonErrors: ["Testing confused."],
          },
        },
        {
          id: "eiascs-u4-proj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two evaluation criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation criteria",
                statement: "Requirements + quality.",
              },
            ],
            steps: [
              {
                reasoning: "Requirements — meets needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quality — tested, reliable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost — within budget/time.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Requirements, quality, cost.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eiascs-u4-proj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why documentation is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Documentation",
                statement: "Understanding + maintenance.",
              },
            ],
            steps: [
              {
                reasoning: "Understanding — others can read code.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Maintenance — modify without breaking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Handover — new team can take over.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decisions — why choices were made.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Understand+maintain+handover+decisions.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-proj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate completed school project.",
          parts: [
            { label: "a", prompt: "Assess against requirements.", marks: 4 },
            { label: "b", prompt: "Identify improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Project evaluation",
                statement: "Success + improvements.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Meets requirements — check each feature.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Quality — tested, reliable, usable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Improvements — better performance, more features.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Documentation — more detailed comments.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) requirements+quality (b) improvements+docs",
            commonErrors: ["No evaluation.", "No improvements."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-project-summary",
      title: "Programming Practice Summary",
      skill: "Summarise programming in practice concepts.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Requirements**: functional, non-functional, constraints. **Design**: architecture, interfaces, prototypes. **Implementation**: iterative, modular, tested. **Evaluation**: against requirements, quality, cost.\n\n**Key practices**: user stories, version control, documentation, continuous testing.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: design user stories, choose architecture, plan iterations. **Evaluate**: methodology, architecture, documentation. **Analyse**: requirements, design decisions.\n\n**Key concepts**: SDLC, agile vs waterfall, client-server, microservices, APIs, modularity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Project done but poor documentation. Issue?",
          solution: "Documentation quality.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-projsum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main benefit of iterative development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less testing" },
              { id: "b", text: "Early error detection and feedback" },
              { id: "c", text: "Faster development" },
              { id: "d", text: "No documentation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iterative benefit",
                statement: "Early errors.",
              },
            ],
            steps: [
              {
                reasoning: "Iterative = early errors.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Early errors",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "eiascs-u4-projsum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two project evaluation criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation criteria",
                statement: "Requirements + quality.",
              },
            ],
            steps: [
              {
                reasoning: "Requirements — meets needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quality — tested, reliable.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Cost — within budget.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Requirements, quality, cost.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eiascs-u4-projsum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why requirements analysis is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Requirements importance",
                statement: "Foundation.",
              },
            ],
            steps: [
              {
                reasoning: "Clear direction — know what to build.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoid waste — don't build wrong thing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Testable — know when done.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "User focus — meet actual needs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Direction+avoid waste+testable+user focus.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-projsum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate client-server vs monolithic for e-commerce.",
          parts: [
            { label: "a", prompt: "Compare architectures.", marks: 4 },
            { label: "b", prompt: "Recommend choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Architecture evaluation",
                statement: "Scale + complexity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Monolithic — simple, hard to scale; client-server — scalable, complex.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) E-commerce needs scale — high traffic.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Client-server — handles load, distributed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Can add servers, separate concerns.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) monolithic simple, client-server scalable (b) client-server",
            commonErrors: ["Monolithic always.", "No justification."],
          },
        },
      ],
    },
  ],
};
