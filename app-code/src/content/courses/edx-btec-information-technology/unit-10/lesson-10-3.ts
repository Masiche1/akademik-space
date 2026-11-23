import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edxbtecit-u10-lesson-10-3",
  code: "10-3",
  title: "Implementation, Maintenance and Usability",
  goal: "I CAN describe implementation strategies, maintenance types and usability principles for user interfaces.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation", "Implementation strategies, maintenance, usability and HCI"],
  
  vocabulary: [
    { term: "Implementation", definition: "Process of installing and rolling out the new system to users." },
    { term: "Parallel running", definition: "Running old and new systems simultaneously to compare results." },
    { term: "Phased implementation", definition: "Introducing the new system gradually, department by department." },
    { term: "Pilot implementation", definition: "Testing the new system with one department before full rollout." },
    { term: "Maintenance", definition: "Ongoing changes to a system after release — corrective, adaptive, perfective." },
    { term: "Usability", definition: "How easily and effectively users can achieve their goals with a system." },
    { term: "HCI", definition: "Human-Computer Interaction — study of how people interact with systems." },
  ],
  concepts: [
    {
      id: "edxbtecit-u10-l3-impl",
      title: "Implementation and maintenance",
      skill: "Compare implementation strategies and explain types of system maintenance.",
      lesson: {
        sections: [
          {
            heading: "Implementation strategies",
            body: "**Direct (big bang)**: switch everyone at once — fast but risky. **Parallel running**: old and new run together — safe, allows comparison, but doubles workload. **Phased**: roll out to departments gradually — manageable risk. **Pilot**: one department tests first — limited blast radius.\n\nOther factors: data conversion, user training, documentation, hardware/software installation, change management.",
          },
          {
            heading: "Types of maintenance",
            body: "**Corrective**: fix bugs/errors found after release. **Adaptive**: modify system for new hardware, OS or regulations. **Perfective**: enhancements and improvements users request. **Preventive**: proactive updates to avoid future problems.\n\nMaintenance dominates the system life cycle — typically 60%+ of total cost. Documentation (technical and user manuals) is essential for all maintenance.",
          },
        ],
        keyFormulas: [
          { name: "Implementation", statement: "Direct, parallel, phased, pilot" },
          { name: "Maintenance", statement: "Corrective, adaptive, perfective, preventive" },
        ],
        workedExample: {
          problem: "A hospital is replacing its records system. Recommend an implementation strategy and justify it.",
          solution: "Phased or pilot — patient safety means gradual rollout with parallel running for critical data; direct switch risks losing records.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l3-impl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which implementation strategy runs old and new systems simultaneously?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Direct"
                    },
                    {
                              "id": "b",
                              "text": "Parallel running"
                    },
                    {
                              "id": "c",
                              "text": "Phased"
                    },
                    {
                              "id": "d",
                              "text": "Pilot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parallel running",
                              "statement": "Old and new systems operate together for comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parallel = both systems run at once.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Parallel running"
},
        },
        {
          id: "edxbtecit-u10-l3-impl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of system maintenance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Maintenance types",
                              "statement": "Corrective, adaptive, perfective, preventive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: corrective, adaptive, perfective, preventive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both named correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Corrective/adaptive/perfective/preventive"
},
        },
        {
          id: "edxbtecit-u10-l3-impl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the advantage and disadvantage of phased implementation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Phased implementation",
                              "statement": "Gradual rollout by department."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: manageable risk — problems found early affect few users.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disadvantage: takes longer; mixed systems coexist temporarily.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced view.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lower risk, gradual; slower and temporary dual systems"
},
        },
        {
          id: "edxbtecit-u10-l3-impl-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bank must replace its core banking system with minimal disruption. Recommend an implementation strategy and justify it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Implementation choice",
                              "statement": "Match strategy to risk tolerance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parallel running recommended for safety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Old system remains fallback if new one fails.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Allows data comparison between systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acknowledges higher cost/complexity trade-off.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Justified for banking's criticality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Parallel running — safety and comparison outweigh cost"
},
        },
        {
          id: "edxbtecit-u10-l3-impl-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four implementation strategies.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what corrective maintenance does.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State what adaptive maintenance does.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain why documentation matters for maintenance.",
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
                              "name": "Implementation and maintenance",
                              "statement": "Rollout strategies and upkeep types."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Direct, parallel, phased, pilot.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fixes bugs/errors after release.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Adapts system to new environment/requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Without docs, maintainers can't understand the system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Increases cost/time of changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 strategies; corrective=fix bugs; adaptive=environment; docs essential"
},
        },
        {
          id: "edxbtecit-u10-l3-impl-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name four implementation strategies. (b) Describe parallel running. (c) Name four types of maintenance. (d) Explain why maintenance is the costliest phase. (e) State two non-technical factors in implementation. (f) Why is user training important?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Four implementation strategies.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe parallel running.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Four maintenance types.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Why maintenance is costliest.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Two non-technical factors.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why user training matters.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Implementation and maintenance",
                              "statement": "Rollout, upkeep, change factors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Direct, parallel, phased, pilot.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Old and new run simultaneously for comparison.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Safe but doubles workload.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Corrective, adaptive, perfective, preventive.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "System used for years → ongoing fixes/enhancements dominate cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "User training and documentation (or change management).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Untrained users can't use the system effectively → wasted investment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Implementation strategies, maintenance types and supporting factors."
},
        },
      ],
    },
    {
      id: "edxbtecit-u10-l3-usability",
      title: "Usability and user interface design",
      skill: "Apply usability principles and HCI guidelines to design effective user interfaces.",
      lesson: {
        sections: [
          {
            heading: "Usability principles",
            body: "**Usability** = effectiveness, efficiency and satisfaction when users achieve goals. Key principles: **visibility** of system status, **consistency**, **error prevention**, **recognition over recall**, **user control**, **help/documentation**.\n\n**HCI** studies how people interact with computers. Good interfaces: clear navigation, familiar conventions (icons, menus), immediate feedback, forgiving error handling, logical information grouping.",
          },
          {
            heading: "Interface design and accessibility",
            body: "**Navigation**: consistent menus, breadcrumbs, clear labels. **Feedback**: loading indicators, confirmations, progress bars. **Error messages**: say what went wrong and how to fix it.\n\n**Accessibility**: sufficient colour contrast, keyboard navigation, screen-reader support, captions. **Usability testing**: observe real users performing tasks to find problems — task success rate and time measure usability.\n\nMetaphors (desktop, folders) make systems intuitive by borrowing familiar concepts.",
          },
        ],
        keyFormulas: [
          { name: "Usability", statement: "Effective, efficient, satisfying" },
          { name: "Key principles", statement: "Visibility, consistency, error prevention, recognition" },
          { name: "Accessibility", statement: "Contrast, keyboard nav, screen readers" },
        ],
        workedExample: {
          problem: "A form clears all fields when submitted with an error. Identify usability problems and fixes.",
          solution: "Problems: no error prevention, data loss frustrates users. Fixes: validate inline before submit, keep entered data, show specific error messages per field.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l3-usability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which principle means users should see what the system is doing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Consistency"
                    },
                    {
                              "id": "b",
                              "text": "Visibility of status"
                    },
                    {
                              "id": "c",
                              "text": "User control"
                    },
                    {
                              "id": "d",
                              "text": "Error prevention"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Visibility",
                              "statement": "System should always keep users informed of status."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Visibility of status = show what system is doing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Visibility of status"
},
        },
        {
          id: "edxbtecit-u10-l3-usability-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define usability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Usability",
                              "statement": "Effectiveness, efficiency and satisfaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "How easily/effectively users achieve goals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Measured by effectiveness, efficiency, satisfaction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ease and effectiveness of achieving user goals"
},
        },
        {
          id: "edxbtecit-u10-l3-usability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why consistency is important in interface design.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Consistency",
                              "statement": "Same actions look/behave the same throughout."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Users learn patterns once and apply them everywhere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces errors and learning time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Builds user confidence and predictability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Consistency = faster learning, fewer errors"
},
        },
        {
          id: "edxbtecit-u10-l3-usability-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A banking app deletes a user's entered form data whenever a validation error occurs. Explain the usability problems and suggest fixes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Error prevention",
                              "statement": "Design should prevent errors and preserve user work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data loss violates user control and wastes effort.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Poor error prevention — errors should be anticipated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: preserve entered data on error.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: inline validation before submission.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Fix: clear specific error messages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data loss = poor usability; preserve data + inline validation"
},
        },
        {
          id: "edxbtecit-u10-l3-usability-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State three usability principles.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define HCI.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Name two accessibility features for interfaces.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "What does usability testing measure?",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Usability and HCI",
                              "statement": "Principles, accessibility, testing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Visibility, consistency, error prevention, recognition, user control.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Study of how people interact with computer systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Keyboard nav, screen readers, contrast, captions.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "How easily/effectively users complete tasks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Usability principles; HCI; accessibility; task-based testing"
},
        },
        {
          id: "edxbtecit-u10-l3-usability-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define usability and HCI. (b) Name three usability principles. (c) Explain why error messages should be specific. (d) Name two accessibility requirements. (e) Describe what usability testing involves. (f) Give one example of a design metaphor.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define usability and HCI.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Three usability principles.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Why error messages should be specific.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Two accessibility requirements.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "What usability testing involves.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "One design metaphor.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Usability and HCI",
                              "statement": "Principles, accessibility, testing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Usability = ease/effectiveness of goal achievement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "HCI = study of human-computer interaction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Visibility, consistency, error prevention etc.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Generic messages don't tell users how to fix problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Specific messages guide recovery.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Contrast, keyboard nav, screen readers, captions.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Observe users performing tasks; measure success/time/errors.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Desktop/folders metaphor etc.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Usability principles, accessibility, testing and metaphors."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u10-n103-notes",
      title: "Systems dev 10-3 — notes",
      summary: "Direct/parallel/phased/pilot rollout; corrective/adaptive/perfective/preventive maintenance; usability = effective+efficient+satisfying.",
      sections: [
        { heading: "Key idea", body: "Implementation risk varies — match strategy to criticality; maintenance dominates lifecycle cost." },
        { heading: "Usability", body: "Visibility, consistency, error prevention, recognition over recall." },
        { heading: "Accessibility", body: "Contrast, keyboard navigation, screen readers, captions." },
      ],
    },
  ],
};
