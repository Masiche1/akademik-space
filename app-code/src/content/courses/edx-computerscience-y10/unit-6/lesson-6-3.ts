import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ecs10-u6-lesson-6-3",
  code: "6-3",
  title: "Software Development and Documentation",
  goal: "I CAN describe stages of software development and explain the role of comments, guides and maintenance.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 software development: lifecycle, documentation and maintenance"],
  
  vocabulary: [
    { term: "Requirements", definition: "The needs and features the software must satisfy." },
    { term: "Design", definition: "Planning the structure, inputs, outputs and algorithms before coding." },
    { term: "Implementation", definition: "Writing the actual program code." },
    { term: "Maintenance", definition: "Updating and repairing software after release." },
    { term: "Comment", definition: "Text in code ignored by the compiler that explains purpose or logic." },
    { term: "User guide", definition: "Documentation explaining how an end user operates the software." },
    { term: "Technical documentation", definition: "Documentation for developers describing structure, variables and algorithms." },
  ],
  concepts: [
    {
      id: "ecs10-u6-development-stages",
      title: "Software development stages",
      skill: "Describe requirements, design, implementation, testing and maintenance in the software lifecycle.",
      lesson: {
        sections: [
          {
            heading: "Lifecycle overview",
            body: "Software development usually begins with **requirements gathering**, where user needs are identified. **Design** plans the solution before coding. **Implementation** writes the program. **Testing** checks correctness. **Deployment** releases it to users, and **maintenance** fixes faults and adds improvements.\n\nDifferent projects may repeat stages. An iterative approach builds a small working version, tests it, learns from feedback and improves it, rather than trying to finish everything at once.",
          },
          {
            heading: "Why stages matter",
            body: "Skipping requirements can produce software that solves the wrong problem. Poor design makes coding harder and bugs more likely. Testing too late leaves little time to fix faults. Maintenance is not optional because real data, users and environments change.\n\nFor small school projects, a simple cycle is enough: define the task, plan the algorithm, code, test with sample data and review.",
          },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "requirements → design → implementation → testing → deployment → maintenance" },
          { name: "Iterative development", statement: "build, test, feedback, improve" },
          { name: "Requirements", statement: "what the software must do" },
        ],
        workedExample: {
          problem: "A club wants a program to record member names and dues. Outline the development stages.",
          solution: "Requirements: store names/due amounts. Design: choose array/database and menu. Implement: code input/output. Test: normal and invalid data. Maintain: fix bugs and add features.",
        },
      },
      questions: [
        {
          id: "ecs10-u6-development-stages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage comes before coding in software development?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Maintenance"
                    },
                    {
                              "id": "b",
                              "text": "Design"
                    },
                    {
                              "id": "c",
                              "text": "Deployment"
                    },
                    {
                              "id": "d",
                              "text": "Documentation only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Development order",
                              "statement": "Plan before implementing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design planning precedes writing code.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Design"
},
        },
        {
          id: "ecs10-u6-development-stages-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are requirements in software development?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Requirements",
                              "statement": "Needs and features the software must satisfy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They describe what the software should do.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They guide design, coding and testing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "The needs/features the software must satisfy"
},
        },
        {
          id: "ecs10-u6-development-stages-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the main stages of the software development lifecycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lifecycle",
                              "statement": "Requirements to maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Requirements and design come first.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Implementation and testing follow.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Deployment and maintenance complete the cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Requirements → design → implementation → testing → deployment → maintenance"
},
        },
        {
          id: "ecs10-u6-development-stages-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A team builds a simple quiz app.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one requirement for the app.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one design decision needed before coding.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Project planning",
                              "statement": "Define needs and structure before coding."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Example requirement: ask 10 questions and show a final score.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example design decision: store questions in an array and use a loop.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Requirement example; design example"
},
        },
        {
          id: "ecs10-u6-development-stages-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school library program is released but later needs a new feature for reservations.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the lifecycle stage that covers this new work.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why maintenance is needed after release.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one testing activity for the new reservation feature.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maintenance",
                              "statement": "Software evolves after release."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Maintenance/update stage.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "User needs, data and environments change, so faults and improvements arise.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Test reservation with valid member, duplicate reservation and invalid date cases.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Maintenance; needs change after release; test new feature with normal/boundary/invalid data"
},
        },
        {
          id: "ecs10-u6-development-stages-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A small team wants to build a timetable app for students.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how an iterative approach differs from writing the whole program at once.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give an example of an early working version and what feedback would improve it.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why testing should happen during development, not only at the end.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Iterative development",
                              "statement": "Build small versions, test, learn and improve."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Iterative builds a small working version first, then improves it after feedback; waterfall-like coding tries to finish everything before review.",
                              "marks": 3,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Early version could show Monday timetable only; feedback might add other days and clash warnings.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Early testing catches faults while context is fresh and prevents building later features on broken code.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Iterative = small working versions improved by feedback; early version + feedback; early testing prevents late faults"
},
        },
      ],
    },
    {
      id: "ecs10-u6-documentation",
      title: "Documentation and maintenance",
      skill: "Explain comments, user guides, technical documentation and software maintenance.",
      lesson: {
        sections: [
          {
            heading: "Types of documentation",
            body: "**Comments** inside code explain tricky logic or why a decision was made; they are ignored by the compiler. A **user guide** tells end users how to operate the software. **Technical documentation** helps developers understand variables, algorithms, file formats and structure.\n\nGood documentation is written for its audience. A user guide should avoid unnecessary technical detail; technical notes should be precise enough for another programmer to maintain the code.",
          },
          {
            heading: "Maintenance",
            body: "Maintenance includes fixing bugs, improving performance, updating for new requirements and keeping documentation accurate. Even small changes should be tested because documentation and code can drift apart.\n\nVersion notes or change logs record what changed and why, helping future developers understand the software's history.",
          },
        ],
        keyFormulas: [
          { name: "Comment", statement: "explanation inside code ignored by compiler" },
          { name: "User guide", statement: "how to operate the software" },
          { name: "Technical documentation", statement: "how the software is built" },
          { name: "Maintenance", statement: "fix, update and improve after release" },
        ],
        workedExample: {
          problem: "A function calculates a grade. Give one comment and one user-guide note.",
          solution: "Comment: '// Convert mark to grade using boundaries.' User guide: 'Enter marks from 0 to 100; grades A-E are shown.'",
        },
      },
      questions: [
        {
          id: "ecs10-u6-documentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a comment in program code?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A command that runs the program"
                    },
                    {
                              "id": "b",
                              "text": "Text ignored by the compiler that explains code"
                    },
                    {
                              "id": "c",
                              "text": "A type of variable"
                    },
                    {
                              "id": "d",
                              "text": "A test result"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comment",
                              "statement": "Ignored by compiler; explains code."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comments are for humans and do not affect execution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Text ignored by the compiler"
},
        },
        {
          id: "ecs10-u6-documentation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between a user guide and technical documentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Documentation types",
                              "statement": "User vs developer audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "User guide explains how to operate the software.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Technical documentation explains how the software is designed and coded.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "User guide = how to use; technical docs = how it is built"
},
        },
        {
          id: "ecs10-u6-documentation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits of adding comments to a program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Code comments",
                              "statement": "Improve understanding and maintenance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comments explain complex logic or reasons for decisions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They help other programmers debug and modify the code later.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They reduce the need to reverse-engineer the programmer's intention.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Explain logic and help future maintenance/debugging"
},
        },
        {
          id: "ecs10-u6-documentation-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A released program has a bug and the school wants a new report feature.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify the bug fix as maintenance.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one documentation update needed for the new feature.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maintenance and docs",
                              "statement": "Changes require code and documentation updates."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fixing a released bug is corrective maintenance.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Update the user guide and/or technical notes to describe the new report.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Bug fix = maintenance; update user/technical documentation"
},
        },
        {
          id: "ecs10-u6-documentation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student submits code with no comments and no guide. The teacher cannot understand the variables.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why meaningful variable names are a form of documentation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two improvements for future submissions.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why documentation should be updated when code changes.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Documentation quality",
                              "statement": "Names, comments and guides communicate intent."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Names like totalScore reveal purpose better than x or temp.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add comments for complex logic and provide a short user/technical guide.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Outdated docs mislead maintainers and can cause new bugs.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Good names document intent; add comments/guides; keep docs in sync with code"
},
        },
        {
          id: "ecs10-u6-documentation-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company releases a payroll program and later must add pension calculations.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the development stage for adding pensions.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "List three documentation items that should be updated.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why testing the pension feature requires boundary and erroneous data.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maintenance lifecycle",
                              "statement": "New requirements trigger design, code, test and documentation updates."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Maintenance/update stage, possibly with new requirements and design.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Update user guide, technical documentation and comments/change log.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Boundary tests check limits like 0% or maximum pension; erroneous data checks invalid inputs that could crash payroll.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Maintenance stage; update guides/comments/change log; boundary+erroneous tests protect payroll accuracy",
          "commonErrors": [
                    "Changing code without updating documentation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u6-lesson-6-3-notes",
      title: "Software development and documentation — notes",
      summary: "Software moves through requirements, design, implementation, testing, deployment and maintenance.",
      sections: [
        { heading: "Lifecycle", body: "Plan before coding; test during development; maintain after release." },
        { heading: "Documentation", body: "Comments explain code, user guides explain operation and technical docs explain structure." },
        { heading: "Maintenance", body: "Fix bugs, add features and keep documentation accurate as needs change." },
      ],
    },
  ],
};
