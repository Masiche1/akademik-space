import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cils-c-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 9 — Programming Project: Full Lifecycle",
  goal: "I CAN manage a complete programming project from specification to evaluation.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 9,
  vocabulary: [
    { term: "Specification", definition: "Document defining what the program must do." },
    { term: "Design document", definition: "Plan of structure, functions, data." },
    { term: "Version control", definition: "Tracking changes to code over time." },
    { term: "User acceptance", definition: "Program meets the user's actual needs." },
    { term: "Maintenance", definition: "Ongoing fixes and improvements after release." },
    { term: "Technical debt", definition: "Shortcuts that make future changes harder." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s8-proj",
      title: "Programming project lifecycle",
      skill: "Manage spec→design→build→test→deploy→maintain at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "The lifecycle",
            body: "Professional programming: write specification → design architecture → build incrementally → test thoroughly → deploy → maintain and improve. Each stage has deliverables and checkpoints.",
          },
          {
            heading: "Real-world concerns",
            body: "Version control tracks changes (Git). Technical debt accumulates from shortcuts. User acceptance testing ensures the program solves the real problem, not just the imagined one.",
          },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "spec→design→build→test→deploy→maintain" },
          { name: "Version control", statement: "track and revert code changes" },
        ],
        workedExample: {
          problem: "Your team built a school library app. List the lifecycle stages it went through and one risk at each.",
          solution: "Spec: misunderstood requirements. Design: poor architecture. Build: bugs. Test: missed edge cases. Deploy: downtime. Maintain: technical debt from shortcuts.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-pj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a program specification?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of code"
                    },
                    {
                              "id": "b",
                              "text": "A network device"
                    },
                    {
                              "id": "c",
                              "text": "Document defining what the program must do"
                    },
                    {
                              "id": "d",
                              "text": "A computer part"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specification",
                              "statement": "Requirements document."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec defines requirements before coding.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Requirements document"
},
        },
        {
          id: "cils-c-u1-pj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the stages of the programming lifecycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lifecycle",
                              "statement": "Development stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec→design→build→test→deploy→maintain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "spec→design→build→test→deploy→maintain"
},
        },
        {
          id: "cils-c-u1-pj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is technical debt and why does it matter? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Technical debt",
                              "statement": "Shortcut costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shortcuts that make future work harder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. copying code instead of function → harder to fix later.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accumulates 'interest' over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Future cost of shortcuts"
},
        },
        {
          id: "cils-c-u1-pj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define specification, design document, version control, user acceptance, maintenance, technical debt. (b) Describe the lifecycle stages. (c) Why write a spec first? (d) What is version control for? (e) What is user acceptance testing? (f) What is maintenance after release? (g) How do you avoid technical debt? (h) Design a project plan for a 'school club finder' app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project lifecycle",
                              "statement": "Spec to maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) All stages in order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Clear target prevents rework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Track changes, revert, collaborate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Users verify it meets real needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Ongoing fixes/improvements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Write clean code, refactor, document.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Programming lifecycle and project management."
},
        },
        {
          id: "cils-c-u1-pj-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a design document in a programming project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The final user manual"
                    },
                    {
                              "id": "b",
                              "text": "A plan of the program's structure, functions and data"
                    },
                    {
                              "id": "c",
                              "text": "A backup of the code"
                    },
                    {
                              "id": "d",
                              "text": "A type of compiler"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Design document",
                              "statement": "Plan before building."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design document plans structure before coding.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Plan of structure/functions/data"
},
        },
        {
          id: "cils-c-u1-pj-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are in the programming lifecycle: spec, design, build, test, deploy, maintain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 6 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lifecycle",
                              "statement": "Count the stages."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "spec, design, build, test, deploy, maintain = 6.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "cils-c-u1-pj-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In spec → design → build → test → deploy → maintain, 'build' is which stage number?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lifecycle order",
                              "statement": "Stages in sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1=spec, 2=design, 3=build.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u1-pj-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important to write the specification before writing any code? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Specification",
                              "statement": "Requirements first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines clear target — prevents rework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Everyone knows what 'done' means.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Testing can be planned against requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Clear target; testable requirements"
},
        },
        {
          id: "cils-c-u1-pj-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is version control used for in a programming project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Encrypting passwords"
                    },
                    {
                              "id": "b",
                              "text": "Tracking changes and allowing reverts/collaboration"
                    },
                    {
                              "id": "c",
                              "text": "Printing the code"
                    },
                    {
                              "id": "d",
                              "text": "Making the program run faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Version control",
                              "statement": "Track changes, revert, collaborate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Version control records history and supports teamwork.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Track and revert changes"
},
        },
        {
          id: "cils-c-u1-pj-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A project has 4 features, and each feature needs a specification task, a build task and a test task. How many tasks in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Project planning",
                              "statement": "Features × tasks each."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 × 3 = 12 tasks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-pj-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 'user acceptance testing'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Users check the program meets their real needs"
                    },
                    {
                              "id": "b",
                              "text": "Programmers test code speed"
                    },
                    {
                              "id": "c",
                              "text": "Deleting old versions"
                    },
                    {
                              "id": "d",
                              "text": "Users write the specification"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "User acceptance",
                              "statement": "Real users verify usefulness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acceptance testing confirms the program solves the actual problem.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Users verify real needs"
},
        },
        {
          id: "cils-c-u1-pj-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Name four benefits of a design document. (b) What is 'maintenance' after a program is released? (c) Give one example of technical debt. (d) How does version control help a team? (e) Outline the stages for releasing a 'lost property' app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project lifecycle",
                              "statement": "Design, maintenance, debt, control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) e.g. clear plan, easier debugging, team agreement, less rework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Ongoing fixes, updates and improvements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) e.g. copying code instead of a function, or skipping documentation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Tracks changes, allows reverts, enables collaboration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid lifecycle outline for the app.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Design, maintenance, debt, release."
},
        },
        {
          id: "cils-c-u1-pj-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'maintenance' mean after a program is deployed?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ongoing fixes and improvements"
                    },
                    {
                              "id": "b",
                              "text": "Selling the program"
                    },
                    {
                              "id": "c",
                              "text": "Fixing the hardware"
                    },
                    {
                              "id": "d",
                              "text": "Writing the first version"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Maintenance",
                              "statement": "Post-release fixes/improvements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maintenance continues after deployment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ongoing fixes/improvements"
},
        },
        {
          id: "cils-c-u1-pj-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 6-stage project has finished specification and design. How many stages remain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lifecycle",
                              "statement": "6 - 2 done."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "build, test, deploy, maintain = 4 remain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cils-c-u1-pj-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of technical debt?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copying the same code in five places instead of writing a function"
                    },
                    {
                              "id": "b",
                              "text": "Using version control"
                    },
                    {
                              "id": "c",
                              "text": "Writing a clear specification"
                    },
                    {
                              "id": "d",
                              "text": "Testing the program thoroughly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Technical debt",
                              "statement": "Shortcuts raising future cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Duplicated code makes later fixes harder — classic debt.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Copy-paste instead of function"
},
        },
        {
          id: "cils-c-u1-pj-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define specification, design document, version control, technical debt. (b) Order the lifecycle stages. (c) What can go wrong if you skip the specification stage? (d) How do you reduce technical debt? (e) What is the role of testing in the lifecycle? (f) Write a 4-point plan for building a 'club signup' web app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project lifecycle",
                              "statement": "Spec to maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) spec→design→build→test→deploy→maintain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Unclear target, rework, missed requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Clean code, refactor, document, avoid shortcuts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Finds bugs before release; verifies requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid 4-point project plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lifecycle stages, debt, testing, planning."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-pj-notes",
      title: "Project lifecycle — notes",
      summary: "Spec→design→build→test→deploy→maintain. Version control tracks changes; avoid technical debt.",
      sections: [
        { heading: "Key idea", body: "Professional software is managed through a full lifecycle." },
        { heading: "Debt", body: "Shortcuts cost more later — write clean code." },
      ],
    },
  ],
};
