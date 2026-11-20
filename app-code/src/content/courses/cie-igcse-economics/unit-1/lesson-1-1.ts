import type { Lesson } from "../../../types.ts";

export const lesson271: Lesson = {
  id: "cieiec-u1-lesson-1-1",
  code: "1-1",
  title: "The Economic Problem: Scarcity and Choice",
  goal: "I CAN explain scarcity, opportunity cost and the economic problem.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 2: understanding economic problems"],
  
  vocabulary: [
    { term: "Economics", definition: "Study of how societies allocate scarce resources." },
    { term: "Scarcity", definition: "Limited resources vs unlimited wants." },
    { term: "Economic problem", definition: "How to allocate scarce resources among unlimited wants." },
    { term: "Opportunity cost", definition: "Next best alternative foregone." },
    { term: "Needs", definition: "Essential for survival." },
    { term: "Wants", definition: "Desires beyond basic needs." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s1-scarce",
      title: "Scarcity and choice",
      skill: "Understand the fundamental economic problem.",
      lesson: {
        sections: [
          {
            heading: "The economic problem",
            body: "Resources are scarce but wants are unlimited. Every choice involves opportunity cost — what you give up. Economics studies how societies make these choices.",
          },
          {
            heading: "Needs vs wants",
            body: "Needs: food, shelter, clothing — essential. Wants: desires that improve quality of life. Scarcity means we can't satisfy all wants — must prioritise.",
          },
        ],
        keyFormulas: [
          { name: "Economic problem", statement: "scarce resources, unlimited wants" },
          { name: "Opportunity cost", statement: "next best alternative" },
        ],
        workedExample: {
          problem: "You have $10 and want to buy either a book or a movie ticket. You choose the book. What is the opportunity cost?",
          solution: "Opportunity cost = the movie ticket you gave up — the next best alternative.",
        },
      },
      questions: [
        {
          id: "cieiec-u1-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the economic problem?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Scarce resources vs unlimited wants"
                    },
                    {
                              "id": "b",
                              "text": "Too much production"
                    },
                    {
                              "id": "c",
                              "text": "Too many workers"
                    },
                    {
                              "id": "d",
                              "text": "Too much money"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economic problem",
                              "statement": "Scarcity vs wants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scarce resources can't satisfy unlimited wants.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Scarcity vs unlimited wants"
},
        },
        {
          id: "cieiec-u1-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is opportunity cost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Opportunity cost",
                              "statement": "Next best alternative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Next best alternative foregone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Every choice has opportunity cost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Next best alternative foregone"
},
        },
        {
          id: "cieiec-u1-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You spend $50 on a concert ticket instead of saving for a laptop. What is the opportunity cost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opportunity cost",
                              "statement": "Applying concept."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify the choice made.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identify the alternative foregone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Opportunity cost = $50 not saved for laptop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50 not saved for laptop"
},
        },
        {
          id: "cieiec-u1-sc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define economics, scarcity, economic problem, opportunity cost, needs, wants. (b) What is the economic problem? (c) What is opportunity cost? (d) What are needs? Give 3 examples. (e) What are wants? Give 3 examples. (f) Why can't we satisfy all wants? (g) Give an example of opportunity cost. (h) Explain why choice is necessary.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Scarcity",
                              "statement": "Economic problem, opportunity cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Scarce resources vs unlimited wants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Next best alternative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three valid needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid wants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Resources are limited.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid opportunity cost example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Choice necessary due to scarcity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Scarcity and the economic problem."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-sc-notes",
      title: "Scarcity — notes",
      summary: "Economic problem: scarce resources vs unlimited wants. Every choice has opportunity cost.",
      sections: [
        { heading: "Key idea", body: "Scarcity forces choices — economics studies how we allocate resources." },
        { heading: "Opportunity cost", body: "The cost of a choice is what you give up — the next best alternative." },
      ],
    },
  ],
};
