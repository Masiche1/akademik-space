import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apelit-u3-lesson-3-3",
  code: "3-3",
  title: "Exam Strategy and Timed Writing",
  goal: "I CAN manage time and execute the AP Literature exam efficiently.",
  standards: ["AP Lit 19.x"],
  vocabulary: [
    { term: "Timed essay", definition: "Writing under exam time pressure." },
    { term: "Prompt deconstruction", definition: "Breaking down what a prompt asks." },
    { term: "Time allocation", definition: "Dividing limited minutes across tasks." },
    { term: "Outline strategy", definition: "Planning before writing." },
    { term: "Revision", definition: "Using remaining time to improve." },
    { term: "Question selection", definition: "Choosing which prompts to attempt." },
  ],
  concepts: [
    {
      id: "apelit-u3-exam-strategy",
      title: "Exam strategy",
      skill: "Manage time and execute timed literary essays.",
      lesson: {
        sections: [
          {
            heading: "Time is the real exam",
            body: "AP Lit essays are as much time-management tests as writing tests — the difference between a 6 and an 8 is often whether you finished with time to revise. Plan for the FULL time: read carefully, outline, write, revise. Never leave without using remaining minutes.",
          },
          {
            heading: "Prompt deconstruction",
            body: "Read the prompt THREE times: first for comprehension, second to identify required elements, third to plan your response. Many lost points come from misreading — answering a different question than asked.",
          },
        ],
        keyFormulas: [
          { name: "Time split", statement: "15% read + 10% plan + 60% write + 15% revise" },
          { name: "Prompt rule", statement: "Identify what it's asking FOR, not just what it's about" },
        ],
        workedExample: {
          problem: "You have 40 minutes for a prose analysis essay. How should you allocate time?",
          solution: "6 min: read passage + prompt twice, annotate key techniques. 4 min: outline thesis + 2-3 body points. 22 min: write essay. 8 min: revise — check thesis clarity, evidence integration, and whether every paragraph advances the argument.",
        },
      },
      questions: [
        {
          id: "apelit-u3-exam-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most important exam skill for AP Lit is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "memorizing quotes"
                    },
                    {
                              "id": "b",
                              "text": "time management — finishing with revision time"
                    },
                    {
                              "id": "c",
                              "text": "using big vocabulary"
                    },
                    {
                              "id": "d",
                              "text": "writing fast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Time management",
                              "statement": "Finish + revise = higher scores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The difference between score levels is often whether you finished and revised — rushing to complete beats writing beautifully and running out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Time management",
          "commonErrors": [
                    "Prioritizing polish over completion."
          ]
},
        },
        {
          id: "apelit-u3-exam-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading a prompt 'three times' helps because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's a superstition"
                    },
                    {
                              "id": "b",
                              "text": "first for meaning, second for required elements, third for planning"
                    },
                    {
                              "id": "c",
                              "text": "prompts are confusing"
                    },
                    {
                              "id": "d",
                              "text": "it wastes time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Prompt deconstruction",
                              "statement": "Comprehension → requirements → plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three passes serve different purposes — understanding, identifying requirements, planning response — reducing misreading errors that cost points.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Three different purposes",
          "commonErrors": [
                    "Reading once and hoping for the best."
          ]
},
        },
        {
          id: "apelit-u3-exam-strategy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'finishing with time to revise' matters more than 'writing the perfect first draft'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Revision value",
                              "statement": "Second pass improves significantly."
                    },
                    {
                              "kind": "skill",
                              "name": "Time strategy",
                              "statement": "Completion enables revision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First drafts contain structural problems — unclear thesis, weak evidence, paragraphs that wander; revision catches these; a perfect first draft is rare under time pressure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Revision lets you verify every paragraph advances the argument, evidence is integrated, and the thesis is clear — the difference between a 5 and a 7 is often revision.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strategy: write efficiently to finish early, then revise — don't perfect as you go.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Finish early, revise thoroughly",
          "commonErrors": [
                    "Believing first drafts can be perfect."
          ]
},
        },
        {
          id: "apelit-u3-exam-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student spends 35 of 40 minutes writing and 5 revising. Evaluate and improve this strategy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time allocation",
                              "statement": "Balance writing and revision."
                    },
                    {
                              "kind": "context",
                              "name": "Exam strategy",
                              "statement": "Optimal distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "35/5 is writing-heavy — you need time for revision to catch structural problems, unclear thesis, and evidence gaps; 5 minutes barely allows proofreading, not real revision.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Better: ~25-28 min writing, ~7-10 min revising — this gives time to restructure paragraphs, strengthen thesis, and verify evidence integration; revision is where scores are made.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The real skill: writing efficiently enough to leave genuine revision time — that's planning, not panic.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Rebalance toward more revision time — ~7-10 min",
          "commonErrors": [
                    "Treating revision as an afterthought."
          ]
},
        },
      ],
    },
  ],
};
