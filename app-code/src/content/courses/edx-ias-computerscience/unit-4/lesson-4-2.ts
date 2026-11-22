import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eiascs-u4-lesson-4-2",
  code: "4-2",
  title: "Programming Paradigms and Styles",
  goal: "I CAN compare programming paradigms and coding styles.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 4 — Programming in Practice",
  ],
  vocabulary: [
    {
      term: "Procedural programming",
      definition: "Step-by-step instructions — functions.",
    },
    {
      term: "Object-oriented programming",
      definition: "Objects with methods and properties.",
    },
    {
      term: "Functional programming",
      definition: "Functions as building blocks.",
    },
    {
      term: "Event-driven programming",
      definition: "Respond to events — clicks, inputs.",
    },
    {
      term: "Declarative programming",
      definition: "State what, not how — SQL.",
    },
    {
      term: "Structured programming",
      definition: "Sequence, selection, iteration only.",
    },
  ],
  concepts: [
    {
      id: "eiascs-u4-paradigms",
      title: "Programming Paradigms",
      skill: "Compare procedural, OOP, functional paradigms.",
      lesson: {
        sections: [
          {
            heading: "Paradigm comparison",
            body: "**Procedural**: functions, variables — C, Python. **OOP**: objects, classes, inheritance — Java, C++. **Functional**: pure functions, no side effects — Haskell, Lisp. **Event-driven**: respond to events — JavaScript, GUI apps.\n\n**Choosing**: procedural for simple scripts; OOP for complex systems; functional for data processing; event-driven for interactive apps.",
          },
          {
            heading: "OOP concepts",
            body: "**Class**: blueprint for objects. **Object**: instance of class — has properties and methods. **Inheritance**: child class inherits parent features. **Polymorphism**: same method, different behaviour. **Encapsulation**: hide internal details.\n\n**Benefits**: reuse code, model real world, maintainable.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Program uses classes and objects. Paradigm?",
          solution: "OOP.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-par-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is object-oriented programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Objects with methods" },
              { id: "b", text: "Step-by-step" },
              { id: "c", text: "Functions only" },
              { id: "d", text: "SQL queries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OOP",
                statement: "Objects + methods.",
              },
            ],
            steps: [{ reasoning: "OOP = objects.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(a)** Objects",
            commonErrors: ["Procedural confused."],
          },
        },
        {
          id: "eiascs-u4-par-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two OOP concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OOP concepts",
                statement: "Class, object, inheritance.",
              },
            ],
            steps: [
              {
                reasoning: "Class — blueprint for objects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inheritance — child inherits parent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Encapsulation — hide details.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Class, object, inheritance, polymorphism, encapsulation.",
            commonErrors: ["Only one.", "Wrong concept."],
          },
        },
        {
          id: "eiascs-u4-par-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain inheritance with example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inheritance",
                statement: "Child gets parent features.",
              },
            ],
            steps: [
              {
                reasoning: "Parent class defines common features.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Child class inherits and extends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: Animal → Dog — Dog inherits breathing, adds barking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reuse code — don't repeat common features.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Parent→child, reuse features.",
            commonErrors: ["No example.", "Wrong concept."],
          },
        },
        {
          id: "eiascs-u4-par-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design car class hierarchy.",
          parts: [
            { label: "a", prompt: "Identify classes.", marks: 4 },
            { label: "b", prompt: "Explain inheritance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class design",
                statement: "Hierarchy + reuse.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Vehicle (parent) → Car, Motorcycle, Truck.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Vehicle has speed, fuel; subclasses add specifics.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Car inherits speed, fuel — adds doors, passengers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Reuse — don't repeat common features.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) Vehicle→Car etc (b) inherit+extend",
            commonErrors: ["No hierarchy.", "No reuse."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-styles",
      title: "Coding Styles and Conventions",
      skill: "Apply consistent coding styles and naming conventions.",
      lesson: {
        sections: [
          {
            heading: "Naming conventions",
            body: "**camelCase**: firstWord lowercase, rest capitalised — `firstName`. **snake_case**: words separated by underscores — `first_name`. **PascalCase**: all words capitalised — `FirstName`. **UPPER_CASE**: constants — `MAX_SIZE`.\n\n**Consistency**: pick one style per project — mixing confuses readers.",
          },
          {
            heading: "Code organisation",
            body: "**Indentation**: show structure — nested blocks. **Comments**: explain why, not what — code shows what. **Whitespace**: improve readability — blank lines between sections. **Functions**: small, single purpose — easier to test.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Variable named FirstName in Java. Convention?",
          solution: "PascalCase.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-style-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is camelCase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pascal_Case" },
              { id: "b", text: "all_lowercase" },
              { id: "c", text: "firstWordLowercaseRestCapitalised" },
              { id: "d", text: "ALL_CAPS" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "camelCase",
                statement: "Mixed case.",
              },
            ],
            steps: [
              {
                reasoning: "camelCase = first lower, rest upper.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** firstWordRest",
            commonErrors: ["snake confused."],
          },
        },
        {
          id: "eiascs-u4-style-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two code style practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Code style",
                statement: "Naming + comments.",
              },
            ],
            steps: [
              {
                reasoning: "Consistent naming — camelCase or snake_case.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comments — explain why, not what.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Indentation — show structure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Naming, comments, indentation, whitespace.",
            commonErrors: ["Only one.", "Wrong practice."],
          },
        },
        {
          id: "eiascs-u4-style-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why consistent naming matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Naming consistency",
                statement: "Readability.",
              },
            ],
            steps: [
              {
                reasoning: "Easier to read — predict naming pattern.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer errors — know where to find things.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Professional — code looks maintainable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Team consistency — everyone understands.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Readability+errors+professional+team.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-style-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Refactor poorly named variables.",
          parts: [
            { label: "a", prompt: "Identify issues.", marks: 4 },
            { label: "b", prompt: "Suggest improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Code refactoring",
                statement: "Improve readability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) x = 5 — unclear meaning.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) tempData — vague name.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Mixed styles — inconsistent.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No comments — purpose unclear.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Rename: studentCount, userName — descriptive.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Add comments — explain purpose.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) unclear names+inconsistent (b) descriptive+comments",
            commonErrors: ["Keep as is.", "No improvement."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-abstraction",
      title: "Abstraction and APIs",
      skill: "Use abstraction and understand APIs.",
      lesson: {
        sections: [
          {
            heading: "Abstraction levels",
            body: "**High-level**: what — user sees interface. **Low-level**: how — implementation details. **Example**: car — driver uses steering, pedals (interface); engine internals hidden (abstraction).\n\n**Benefits**: simplifies use, hides complexity, easier to change internals without affecting users.",
          },
          {
            heading: "APIs",
            body: "**API**: Application Programming Interface — how programs communicate. **REST API**: web services — HTTP requests. **Library**: pre-written code — functions, classes. **SDK**: software development kit — tools + libraries.\n\n**Example**: weather app uses weather API — doesn't need to know how data collected.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "App uses Google Maps API. What does API provide?",
          solution: "Interface to maps functionality.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-api-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an API?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Programming language" },
              { id: "b", text: "Operating system" },
              { id: "c", text: "Application Programming Interface" },
              { id: "d", text: "Computer hardware" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "API", statement: "Interface." },
            ],
            steps: [
              { reasoning: "API = interface.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Interface",
            commonErrors: ["Language confused."],
          },
        },
        {
          id: "eiascs-u4-api-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of abstraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abstraction benefits",
                statement: "Simplify + hide.",
              },
            ],
            steps: [
              {
                reasoning: "Simplifies use — user doesn't need details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hides complexity — internals can change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier to understand — focus on what, not how.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Simplify, hide, understand.",
            commonErrors: ["Only one.", "Wrong benefit."],
          },
        },
        {
          id: "eiascs-u4-api-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how APIs enable software reuse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "API reuse",
                statement: "Don't reinvent.",
              },
            ],
            steps: [
              {
                reasoning: "API provides ready-made functionality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Developer uses API — doesn't write from scratch.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Saves time — focus on unique features.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reliable — API tested by provider.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Ready-made+saves time+reliable.",
            commonErrors: ["Write everything.", "No benefit."],
          },
        },
        {
          id: "eiascs-u4-api-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "App needs maps functionality.",
          parts: [
            { label: "a", prompt: "Suggest approach.", marks: 4 },
            { label: "b", prompt: "Explain benefits.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "API usage",
                statement: "Use existing.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Use maps API — Google Maps, Mapbox.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Don't build maps from scratch.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Saves development time — ready-made.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Reliable — tested, maintained by provider.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) use API (b) saves time+reliable",
            commonErrors: ["Build from scratch.", "No benefits."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-summary",
      title: "Programming in Practice Summary",
      skill: "Summarise programming paradigms and development practices.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Paradigms**: procedural, OOP, functional, event-driven — choose based on need. **Languages**: high-level vs low-level — readability vs performance. **Tools**: IDEs, version control, debugging. **Quality**: testing, documentation, code review.\n\n**Best practices**: consistent style, modular code, good documentation, comprehensive testing.",
          },
          {
            heading: "Exam preparation",
            body: "**Compare**: procedural vs OOP vs functional. **Evaluate**: methodology choice, language choice, tool choice. **Apply**: design classes, write test cases, refactor code.\n\n**Key concepts**: abstraction, encapsulation, inheritance, polymorphism, API, SDLC, testing.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All data represented as objects. Paradigm?",
          solution: "OOP.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of OOP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less memory" },
              { id: "b", text: "Code reuse and modelling" },
              { id: "c", text: "Simpler syntax" },
              { id: "d", text: "Faster execution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OOP advantage",
                statement: "Reuse + model.",
              },
            ],
            steps: [
              { reasoning: "OOP = reuse + model.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Reuse+model",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "eiascs-u4-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two development best practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Best practices",
                statement: "Style+testing.",
              },
            ],
            steps: [
              {
                reasoning: "Consistent naming — readability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comprehensive testing — quality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Documentation — understanding.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Naming, testing, documentation, version control.",
            commonErrors: ["Only one.", "Wrong practice."],
          },
        },
        {
          id: "eiascs-u4-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why APIs are important in modern development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "API importance",
                statement: "Reuse + integration.",
              },
            ],
            steps: [
              {
                reasoning: "Reuse functionality — don't reinvent wheel.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Integration — connect different services.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Save time — focus on unique features.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ecosystem — build on others' work.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reuse+integrate+save time+ecosystem.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate OOP for school management system.",
          parts: [
            { label: "a", prompt: "Identify advantages.", marks: 4 },
            { label: "b", prompt: "Identify limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paradigm evaluation",
                statement: "Advantages + limitations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Model real world — students, teachers, courses.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Code reuse — inheritance, libraries.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Complexity — steeper learning curve.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Overhead — more code for simple tasks.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) model+reuse (b) complexity+overhead",
            commonErrors: ["Only advantages.", "No limitations."],
          },
        },
      ],
    },
  ],
};
