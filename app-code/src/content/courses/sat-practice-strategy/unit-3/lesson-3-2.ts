import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "satp-u3-lesson-3-2",
  code: "3-2",
  title: "Effective Study Methods",
  goal: "I CAN use proven techniques for SAT content mastery.",
  standards: ["SAT S 4.x"],
  vocabulary: [
    { term: "Active recall", definition: "Testing yourself rather than re-reading." },
    { term: "Spaced repetition", definition: "Reviewing at increasing intervals." },
    { term: "Interleaving", definition: "Mixing topic practice." },
    { term: "Elaboration", definition: "Explaining concepts in your own words." },
    { term: "Practice problems", definition: "Solving questions, not just reading." },
    { term: "Targeted practice", definition: "Focusing on weakest areas." },
  ],
  concepts: [
    {
      id: "satp-u3-study-methods",
      title: "Study methods",
      skill: "Use proven techniques for content mastery.",
      lesson: {
        sections: [
          {
            heading: "Active vs passive study",
            body: "**Active recall** (testing yourself, solving problems) beats **passive review** (re-reading notes) — memory forms through retrieval, not recognition. Flashcards, practice questions, and explaining concepts aloud are active; highlighting and re-reading are passive.",
          },
          {
            heading: "Spaced and interleaved practice",
            body: "**Spaced repetition**: review at increasing intervals (day 1, 3, 7, 14) — combats forgetting curve. **Interleaving**: mix topic types in practice (not all algebra then all geometry) — builds discrimination skills and better retention than blocked practice.",
          },
        ],
        keyFormulas: [
          { name: "Active recall", statement: "Test yourself — retrieval > recognition" },
          { name: "Spacing", statement: "Review at increasing intervals" },
        ],
        workedExample: {
          problem: "You have 2 weeks to prep. How should you structure study?",
          solution: "Week 1: diagnostic test + identify weaknesses; daily practice problems on weak areas (active recall). Week 2: full practice tests + targeted review of remaining gaps + error analysis. Space reviews — don't cram.",
        },
      },
      questions: [
        {
          id: "satp-u3-study-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active recall means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "re-reading notes"
                    },
                    {
                              "id": "b",
                              "text": "testing yourself to retrieve information"
                    },
                    {
                              "id": "c",
                              "text": "highlighting text"
                    },
                    {
                              "id": "d",
                              "text": "watching videos"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active recall",
                              "statement": "Retrieve from memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active recall = testing yourself (flashcards, practice problems) — retrieval strengthens memory more than recognition (re-reading).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Test yourself",
          "commonErrors": [
                    "Confusing with passive review."
          ]
},
        },
        {
          id: "satp-u3-study-methods-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Interleaving practice means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "doing all of one topic then next"
                    },
                    {
                              "id": "b",
                              "text": "mixing different topic types in practice"
                    },
                    {
                              "id": "c",
                              "text": "practicing every day"
                    },
                    {
                              "id": "d",
                              "text": "interrupted study"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Interleaving",
                              "statement": "Mix topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interleaving mixes different problem types in one session — builds ability to identify which method applies; blocked practice (all one topic) feels easier but learns less.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mix topics",
          "commonErrors": [
                    "Doing blocked practice only."
          ]
},
        },
        {
          id: "satp-u3-study-methods-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "You study 10 hours/week for 2 weeks = ? total hours.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Hours",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply",
                              "statement": "10 × 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$10 \\times 2 = 20$ total study hours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 20.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Simple arithmetic check."
          ]
},
        },
        {
          id: "satp-u3-study-methods-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 're-reading notes' is less effective than 'solving practice problems'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Retrieval vs recognition",
                              "statement": "Testing > reviewing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Re-reading creates familiarity (recognition) — you think you know it but can't produce it; solving problems requires retrieval — actually using the knowledge, which builds stronger memory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The testing effect: retrieval practice strengthens memory more than additional study — each successful recall makes future recall easier.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "For SAT specifically: the exam tests APPLICATION, not recognition — practice problems simulate exam conditions; re-reading doesn't.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Retrieval (solving) > recognition (re-reading)",
          "commonErrors": [
                    "Thinking familiarity = mastery."
          ]
},
        },
      ],
    },
  ],
};
