import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "satm-u3-lesson-3-3",
  code: "3-3",
  title: "Probability",
  goal: "I CAN calculate probabilities of events.",
  standards: ["SAT M 3.x"],
  vocabulary: [
    { term: "Probability", definition: "Likelihood of event — $0$ to $1$." },
    { term: "Sample space", definition: "All possible outcomes." },
    { term: "Favorable outcomes", definition: "Outcomes matching the event." },
    { term: "Independent events", definition: "One doesn't affect other — multiply probabilities." },
    { term: "Mutually exclusive", definition: "Can't happen together — add probabilities." },
    { term: "Conditional", definition: "Probability given another event occurred." },
  ],
  concepts: [
    {
      id: "satm-u3-probability",
      title: "Probability",
      skill: "Calculate probabilities of simple and compound events.",
      lesson: {
        sections: [
          {
            heading: "Basic probability",
            body: "$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$ — assumes equally likely outcomes. Range: 0 (impossible) to 1 (certain). Example: rolling a 3 on die = $1/6$; rolling even = $3/6 = 1/2$.",
          },
          {
            heading: "Compound events",
            body: "**Independent** (with replacement, separate trials): multiply — $P(A \\text{ and } B) = P(A) \\times P(B)$. **Mutually exclusive** (can't both happen): add — $P(A \\text{ or } B) = P(A) + P(B)$. **Dependent**: conditional — $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. Identify the relationship first.",
          },
        ],
        keyFormulas: [
          { name: "Basic", statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$" },
          { name: "Independent", statement: "$P(A \\cap B) = P(A) \\times P(B)$" },
        ],
        workedExample: {
          problem: "Flip a coin twice. Probability of heads both times?",
          solution: "Independent events: $P(H) = 1/2$ each flip. $P(HH) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
        },
      },
      questions: [
        {
          id: "satm-u3-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Probability ranges from ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-1 to 1"
                    },
                    {
                              "id": "b",
                              "text": "0 to 1"
                    },
                    {
                              "id": "c",
                              "text": "0 to 100"
                    },
                    {
                              "id": "d",
                              "text": "1 to infinity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Probability range",
                              "statement": "0=impossible, 1=certain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Probability is always between 0 (impossible) and 1 (certain) — never negative, never exceeds 1.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0 to 1",
          "commonErrors": [
                    "Using percentages or negative values."
          ]
},
        },
        {
          id: "satm-u3-probability-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rolling two dice, P(sum = 7) is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$1/36$"
                    },
                    {
                              "id": "b",
                              "text": "$6/36 = 1/6$"
                    },
                    {
                              "id": "c",
                              "text": "$1/12$"
                    },
                    {
                              "id": "d",
                              "text": "$7/36$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count favorable",
                              "statement": "6 ways to sum 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ways to get 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 ways out of 36 → $6/36 = 1/6$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$1/6$",
          "commonErrors": [
                    "Counting only one ordering — dice are distinguishable."
          ]
},
        },
        {
          id: "satm-u3-probability-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw a card, replace it, draw again. P(both hearts) from standard 52-card deck?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "P",
                              "answer": 0.0625
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Independent multiply",
                              "statement": "$13/52 \\times 13/52$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P(heart) = $13/52 = 1/4$ each draw; independent (replacement): $(1/4)(1/4) = 1/16 = 0.0625$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 0.0625.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0.0625",
          "commonErrors": [
                    "Using without-replacement probability."
          ]
},
        },
        {
          id: "satm-u3-probability-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between independent and mutually exclusive events, with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Event relationships",
                              "statement": "Multiply vs add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent: one doesn't affect other — P(A and B) = P(A)×P(B) (coin flips, dice rolls with replacement); Mutually exclusive: can't both happen — P(A or B) = P(A)+P(B) (rolling 3 OR 5 on one die).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key distinction: independent asks 'AND' (both can happen, probabilities multiply); mutually exclusive asks 'OR' (can't both happen, probabilities add).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Tricky: mutually exclusive events are DEPENDENT (if A happens, B can't) — they have P(A and B) = 0.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Independent=multiply (AND); exclusive=add (OR)",
          "commonErrors": [
                    "Confusing the two relationships."
          ]
},
        },
      ],
    },
  ],
};
