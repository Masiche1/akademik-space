import type { Lesson } from "../../../types.ts";

export const lesson342: Lesson = {
  id: "ecs11-u8-lesson-8-2",
  code: "8-2",
  title: "Program Design and Documentation",
  goal: "I CAN describe the program development process, design modular programs and document them.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Program design and documentation"],
  
  vocabulary: [
    { term: "Problem statement", definition: "A clear description of what the program must achieve." },
    { term: "Design", definition: "Planning the structure of the solution before coding, including inputs, outputs and processing." },
    { term: "Modular programming", definition: "Breaking a program into separate subroutines or modules that each do one task." },
    { term: "Dry run", definition: "Manually tracing an algorithm or program on paper to check its logic." },
    { term: "Technical documentation", definition: "Notes for programmers: comments, design notes, test plans." },
    { term: "User documentation", definition: "Instructions for end users: manuals, help files, tutorials." },
    { term: "Maintenance", definition: "Updating a program after release to fix faults or add features." },
  ],
  concepts: [
    {
      id: "ecs11-u8-design-process",
      title: "Design and Development Process",
      skill: "Describe the stages from problem statement to finished program.",
      lesson: {
        sections: [
          {
            heading: "Stages of development",
            body: "A structured approach follows recognisable stages:\n\n1. **Analysis** — understand the problem; write a problem statement covering inputs, outputs and processing.\n2. **Design** — plan the solution: algorithms, data structures, flowcharts, modular breakdown.\n3. **Implementation** — write the actual code.\n4. **Testing** — check the program against its requirements.\n5. **Evaluation and maintenance** — review whether it meets the need; fix faults and update it over time.\n\nSkipping design is a common cause of failure: code written without a plan usually contains more errors and is harder to fix.",
          },
          {
            heading: "Modular programming",
            body: "**Modularity** means splitting a program into self-contained modules or subroutines, each responsible for one task (e.g. get input, validate data, calculate result, display output).\n\nBenefits: easier to write and test each part separately; modules can be reused in other programs; faults are easier to locate; different programmers can work on different modules. The main program coordinates the modules by calling them in the right order.",
          },
        ],
        keyFormulas: [
          { name: "Development stages", statement: "Analysis -> Design -> Implementation -> Testing -> Evaluation/Maintenance." },
          { name: "Modularity", statement: "One module = one task; main program coordinates calls." },
        ],
        workedExample: {
          problem: "A program crashes when run. The developer skipped the design stage. Explain one consequence.",
          solution: "Without a design, errors are likely to be structural; modules cannot be tested independently, so faults are harder to find and fix.",
        },
      },
      questions: [
        {
          id: "ecs11-u8-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which stage comes first in a structured program development process?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Testing"
                    },
                    {
                              "id": "b",
                              "text": "Implementation"
                    },
                    {
                              "id": "c",
                              "text": "Analysis"
                    },
                    {
                              "id": "d",
                              "text": "Maintenance"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Development order",
                              "statement": "Analysis precedes design, coding, testing and maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The process starts by analysing the problem before any coding.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Analysis",
          "commonErrors": [
                    "Putting implementation first because 'you just start coding'."
          ]
},
        },
        {
          id: "ecs11-u8-design-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a problem statement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A list of bugs in the program"
                    },
                    {
                              "id": "b",
                              "text": "A description of what the program must do"
                    },
                    {
                              "id": "c",
                              "text": "The final machine code"
                    },
                    {
                              "id": "d",
                              "text": "A type of compiler error"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Problem statement",
                              "statement": "Describes required inputs, outputs and processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A problem statement describes what the program must achieve.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A description of what the program must do",
          "commonErrors": [
                    "Confusing it with a bug report or error message."
          ]
},
        },
        {
          id: "ecs11-u8-design-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two benefits of writing a program in modules.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Modularity",
                              "statement": "Separate modules are easier to develop, test and reuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each module can be written and tested independently.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Faults are easier to locate because each module has one task.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Modules can be reused in other programs.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Independent testing, easier fault-finding, reusability.",
          "commonErrors": [
                    "Only giving one benefit."
          ]
},
        },
        {
          id: "ecs11-u8-design-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why the design stage is important, even though it takes time before any code is written.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Design payoff",
                              "statement": "Planning reduces errors and rework later."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design forces the programmer to clarify inputs, outputs and processing first.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A plan (algorithm/flowchart) exposes logic errors before coding.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Modular design makes testing and debugging far easier.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Time spent designing is usually less than time spent fixing badly structured code.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear, reasoned conclusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Design clarifies requirements, catches errors early and eases testing — saving time overall.",
          "commonErrors": [
                    "Arguing design is unnecessary because 'coding is faster'."
          ]
},
        },
        {
          id: "ecs11-u8-design-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school wants a program that records student names and test scores.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what the analysis stage should produce for this program.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a modular breakdown for the program.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Analysis output",
                              "statement": "Problem statement covering inputs, outputs and processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Identify inputs: student names and test scores.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Identify outputs: stored records, maybe averages or reports.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Describe processing: storing, retrieving, maybe calculating statistics.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Sensible modules, e.g. input module, storage module, report module.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Each module has a single clear task.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Modules are plausible and cover the requirements.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Inputs/outputs/processing identified.  (b) e.g. input, store, report modules.",
          "commonErrors": [
                    "Modules that overlap or do several unrelated tasks."
          ]
},
        },
        {
          id: "ecs11-u8-design-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A programmer writes a 500-line program as one block of code with no plan.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three problems this approach is likely to cause.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe how a modular design would improve the situation.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Unstructured code risks",
                              "statement": "No plan -> errors, poor testing, hard maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Errors are likely because logic was never planned or checked.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Testing is hard — the whole program must run to test any part.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Maintenance is difficult — changes may break unrelated parts.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Reuse is impossible — no self-contained modules exist.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Modules can be tested independently before integration.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Each module has one clear task, making faults easier to isolate.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Modules can be reused or replaced without rewriting everything.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Clear contrast drawn between the two approaches.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Likely errors, hard testing, hard maintenance.  (b) Independent testing, isolation, reuse.",
          "commonErrors": [
                    "Generic complaints like 'it's messy' without technical reasons."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u8-documentation",
      title: "Documentation and Maintenance",
      skill: "Distinguish technical and user documentation and explain program maintenance.",
      lesson: {
        sections: [
          {
            heading: "Types of documentation",
            body: "**Technical documentation** is written for programmers and maintainers: comments inside the code explaining variables and logic, design notes, algorithms, test plans and version histories. Good comments explain *why* code does something, not just *what* it does.\n\n**User documentation** is written for the people who will use the program: user manuals, on-screen help, tutorials and quick-reference cards. It assumes no programming knowledge and focuses on tasks the user wants to perform.",
          },
          {
            heading: "Maintenance",
            body: "**Corrective maintenance** fixes faults found after release. **Adaptive maintenance** updates the program when the environment changes (new hardware, new file formats, changed regulations). **Perfective maintenance** adds improvements or new features. **Preventive maintenance** makes the code easier to maintain, e.g. refactoring.\n\nMaintenance is often the longest phase of a program's life — well-documented code is far cheaper to maintain than undocumented code.",
          },
        ],
        keyFormulas: [
          { name: "Technical docs", statement: "For programmers: comments, design notes, test plans." },
          { name: "User docs", statement: "For users: manuals, help, tutorials." },
          { name: "Maintenance types", statement: "Corrective, adaptive, perfective, preventive." },
        ],
        workedExample: {
          problem: "A manual explaining how to print a report is which type of documentation?",
          solution: "User documentation — it instructs end users, not programmers.",
        },
      },
      questions: [
        {
          id: "ecs11-u8-docs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who is technical documentation primarily written for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "End users"
                    },
                    {
                              "id": "b",
                              "text": "Programmers and maintainers"
                    },
                    {
                              "id": "c",
                              "text": "Customers only"
                    },
                    {
                              "id": "d",
                              "text": "Hardware manufacturers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Technical documentation",
                              "statement": "Written for programmers and maintainers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technical documentation targets people who maintain the code.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Programmers and maintainers",
          "commonErrors": [
                    "Confusing it with user documentation."
          ]
},
        },
        {
          id: "ecs11-u8-docs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corrective maintenance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adding new features"
                    },
                    {
                              "id": "b",
                              "text": "Fixing faults found after release"
                    },
                    {
                              "id": "c",
                              "text": "Updating for new hardware"
                    },
                    {
                              "id": "d",
                              "text": "Writing user manuals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Corrective maintenance",
                              "statement": "Fixing faults discovered after release."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corrective maintenance specifically fixes bugs after release.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Fixing faults found after release",
          "commonErrors": [
                    "Confusing it with perfective maintenance (new features)."
          ]
},
        },
        {
          id: "ecs11-u8-docs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of user documentation and one of technical documentation for the same program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Doc audiences",
                              "statement": "User docs for end users; technical docs for programmers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "User documentation example: a manual or on-screen help explaining how to use features.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technical documentation example: code comments, design notes or a test plan.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both examples clearly matched to their audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. user guide vs code comments/design notes",
          "commonErrors": [
                    "Giving two examples of the same type."
          ]
},
        },
        {
          id: "ecs11-u8-docs-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why good technical documentation reduces the cost of maintaining a program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Documentation value",
                              "statement": "Docs let maintainers understand code without the original author."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comments and design notes explain why the code works as it does.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "New maintainers do not need to reverse-engineer the program.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Faults are found faster, reducing debugging time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Changes are safer because dependencies and structure are recorded.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear conclusion linking documentation to lower cost.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Docs preserve understanding, speeding fault-finding and safe changes.",
          "commonErrors": [
                    "Claiming documentation makes the code run faster."
          ]
},
        },
        {
          id: "ecs11-u8-docs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A shop's till software was written five years ago by a programmer who has left.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the maintenance problem the shop now faces.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two features of good documentation that would have helped.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Knowledge loss",
                              "statement": "Undocumented systems lose understanding when staff leave."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Nobody fully understands how the system works — 'knowledge walkout'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Any change or fault fix is risky and slow.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The shop may be forced to replace the system entirely.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Code comments explaining the logic of each module.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Design notes or a system overview showing structure and data flow.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Either feature clearly explained as reducing the burden on new staff.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Loss of system knowledge makes changes risky/slow.  (b) Comments; design notes.",
          "commonErrors": [
                    "Saying the problem is 'old software' rather than missing documentation."
          ]
},
        },
        {
          id: "ecs11-u8-docs-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A program must be updated because payment card rules have changed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the type of maintenance required and justify your choice.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe two pieces of documentation that would help a new developer make the update safely.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adaptive maintenance",
                              "statement": "Updates needed because the external environment changed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) This is adaptive maintenance — the environment (regulations) changed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Not corrective, because no fault in the code was reported.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Not perfective, because the change is required, not optional.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Justification clearly distinguishes adaptive from other types.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Technical documentation: comments/design notes on the payment module.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Documentation shows where card data is validated and stored.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A test plan helps verify the update does not break existing functions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Two relevant, distinct documentation items described.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Adaptive maintenance — external rules changed.  (b) Code comments/design notes; test plan.",
          "commonErrors": [
                    "Calling it corrective maintenance because 'something needs fixing'."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u8-lesson-8-2-notes",
      title: "Design, Documentation and Maintenance Notes",
      summary: "Development stages, modular design, technical vs user documentation, maintenance types.",
      sections: [
        { heading: "Development stages", body: "Analysis (problem statement: inputs, outputs, processing) -> Design (algorithms, modules) -> Implementation (code) -> Testing -> Evaluation and maintenance. Skipping stages causes rework." },
        { heading: "Modularity", body: "One module = one task. Benefits: independent testing, easier fault isolation, reusability, parallel development. The main program coordinates module calls." },
        { heading: "Documentation and maintenance", body: "Technical docs (comments, design notes, test plans) serve programmers; user docs (manuals, help) serve end users. Maintenance types: corrective (fix faults), adaptive (environment changed), perfective (improvements), preventive (easier future maintenance)." },
      ],
    },
  ],
};
