import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "satp-u2-lesson-2-4",
  code: "2-4",
  title: "Understanding Section Formats",
  goal: "I CAN navigate the digital SAT's structure and features.",
  standards: ["SAT S 3.x"],
  vocabulary: [
    { term: "Digital format", definition: "Computer-based test with on-screen questions." },
    { term: "Modules", definition: "Two modules per section — adaptive." },
    { term: "Desmos calculator", definition: "Built-in graphing calculator." },
    { term: "Mark for review", definition: "Flagging questions to return later." },
    { term: "Reference sheet", definition: "Provided formulas for Math." },
    { term: "Breaks", definition: "One break between sections." },
  ],
  concepts: [
    {
      id: "satp-u2-section-format",
      title: "Section formats",
      skill: "Navigate the digital SAT's structure and features effectively.",
      lesson: {
        sections: [
          {
            heading: "Digital SAT structure",
            body: "Two sections: Reading & Writing (~54 questions, 64 min) and Math (~44 questions, 70 min), each split into two modules. Module 2 adapts based on module 1 — there's no 'easy section' vs 'hard section'; difficulty varies within. One 10-minute break between sections.",
          },
          {
            heading: "Built-in tools",
            body: "The digital SAT includes **Desmos graphing calculator** (always available in Math — practice with it beforehand), **mark for review** (flag questions to return), and **reference sheet** (formulas provided — you don't need to memorize them all, but knowing what's available saves time).",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "RW: 2 modules; Math: 2 modules — adaptive" },
          { name: "Tools", statement: "Desmos calculator + mark-for-review + reference sheet" },
        ],
        workedExample: {
          problem: "You finish Math module 1 early. What should you do?",
          solution: "Use remaining time to review flagged questions — don't rush; the extra time in module 1 doesn't carry to module 2 but reviewing catches careless errors.",
        },
      },
      questions: [
        {
          id: "satp-u2-section-format-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The digital SAT Math section includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no calculator"
                    },
                    {
                              "id": "b",
                              "text": "Desmos graphing calculator built-in"
                    },
                    {
                              "id": "c",
                              "text": "only basic calculator"
                    },
                    {
                              "id": "d",
                              "text": "paper reference only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Desmos",
                              "statement": "Built-in graphing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Digital SAT includes Desmos graphing calculator for ALL Math questions — practice using it before test day.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Desmos built-in",
          "commonErrors": [
                    "Not knowing Desmos is available."
          ]
},
        },
        {
          id: "satp-u2-section-format-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Module 2 of each section ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is identical to module 1"
                    },
                    {
                              "id": "b",
                              "text": "adapts difficulty based on module 1 performance"
                    },
                    {
                              "id": "c",
                              "text": "is optional"
                    },
                    {
                              "id": "d",
                              "text": "is always harder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Adaptive modules",
                              "statement": "Performance-based."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Module 2 adapts — strong module 1 → harder module 2; weak → easier. There's no fixed 'hard section'.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Adapts to performance",
          "commonErrors": [
                    "Thinking all modules are same difficulty."
          ]
},
        },
        {
          id: "satp-u2-section-format-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Total test time is approximately: RW 64 min + Math 70 min + break 10 min = ? minutes.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 144
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add times",
                              "statement": "64 + 70 + 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$64 + 70 + 10 = 144$ minutes total (about 2.4 hours).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 144.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "144",
          "commonErrors": [
                    "Forgetting to include break."
          ]
},
        },
        {
          id: "satp-u2-section-format-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why practicing with Desmos BEFORE test day matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Tool familiarity",
                              "statement": "Practice the tool."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Desmos is powerful but unfamiliar to most students — learning it during the test wastes time; practicing beforehand lets you use it efficiently for graphing, solving, and checking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Like any tool, proficiency requires practice — knowing Desmos shortcuts (zooming, tracing, finding intersections) saves minutes per question.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "SAT provides reference sheet — knowing what's on it (and what's NOT) prevents wasting time searching for formulas that aren't there.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Practice Desmos beforehand — familiarity saves time",
          "commonErrors": [
                    "Planning to learn Desmos during the test."
          ]
},
        },
      ],
    },
  ],
};
