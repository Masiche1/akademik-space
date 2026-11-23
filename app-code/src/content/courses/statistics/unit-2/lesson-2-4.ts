import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "stats-u2-lesson-2-4",
  code: "2-4",
  title: "Random Variables and Distributions",
  goal: "I CAN describe random variables and common probability distributions.",
  standards: ["S-MD.A.1", "S-MD.A.2", "S-MD.A.3", "S-MD.A.4", "S-MD.B.5"],
  vocabulary: [
    { term: "Random variable", definition: "Numerical outcome of chance." },
    { term: "Discrete", definition: "Countable values." },
    { term: "Continuous", definition: "Any value in range." },
    { term: "Expected value", definition: "Long-run average." },
    { term: "Distribution", definition: "Probability pattern." },
  ],
  concepts: [
    {
      id: "stats-u2-random-variables",
      title: "Random variables",
      skill: "Describe random variables and distributions.",
      lesson: {
        sections: [
          {
            heading: "Types of variables",
            body: "Discrete random variables take countable values (number of heads in 10 flips). Continuous take any value in a range (height, time). Expected value = sum of (value × probability) = long-run average.",
          },
          {
            heading: "Distributions",
            body: "Binomial distribution models fixed number of independent trials with two outcomes (coin flips). Normal distribution is bell-shaped — describes many natural measurements. Standard deviation measures spread.",
          },
        ],
        keyFormulas: [
          { name: "Discrete", statement: "Countable." },
          { name: "Continuous", statement: "Any value." },
          { name: "Expected value", statement: "Σ(x·P(x))." },
          { name: "Binomial", statement: "Fixed trials, 2 outcomes." },
        ],
        workedExample: {
          problem: "You flip a fair coin twice. What is the expected number of heads?",
          solution: "Each flip has 0.5 probability of heads → expected value = $0.5 + 0.5 = 1$ head.",
        },
      },
      questions: [
        {
          id: "stats-u2-random-variables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A discrete random variable takes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any real value"
                    },
                    {
                              "id": "b",
                              "text": "countable values"
                    },
                    {
                              "id": "c",
                              "text": "only integers above 0"
                    },
                    {
                              "id": "d",
                              "text": "negative values only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Discrete",
                              "statement": "Countable values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Discrete random variables take countable values like 0, 1, 2, 3...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** countable values",
          "commonErrors": [
                    "Confusing with continuous."
          ]
},
        },
        {
          id: "stats-u2-random-variables-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The expected value of a random variable is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the most likely value"
                    },
                    {
                              "id": "b",
                              "text": "the long-run average"
                    },
                    {
                              "id": "c",
                              "text": "the maximum"
                    },
                    {
                              "id": "d",
                              "text": "the range"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expected value",
                              "statement": "Long-run average = Σ(x·P(x))."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expected value is the long-run average outcome weighted by probability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** the long-run average",
          "commonErrors": [
                    "Confusing with mode."
          ]
},
        },
        {
          id: "stats-u2-random-variables-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "You roll a fair die once. What is the expected value?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Expected",
                              "answer": 3.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Expected",
                              "statement": "$(1+2+3+4+5+6)/6 = 3.5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(1+2+3+4+5+6)/6 = 21/6 = 3.5$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3.5$",
          "commonErrors": [
                    "Saying 3 or 4."
          ]
},
        },
        {
          id: "stats-u2-random-variables-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between discrete and continuous random variables with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Discrete",
                              "statement": "Countable."
                    },
                    {
                              "kind": "definition",
                              "name": "Continuous",
                              "statement": "Any value in range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Discrete: number of heads in 10 coin flips (0-10, countable). Continuous: the exact time to run a mile (any value in a range, measurable to infinite precision).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both types with correct examples.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Discrete = countable (coin flips); continuous = any value (time).**",
          "commonErrors": [
                    "Using countable examples for both."
          ]
},
        },
      ],
    },
  ],
};
