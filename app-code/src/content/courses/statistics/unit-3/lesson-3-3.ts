import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "stats-u3-lesson-3-3",
  code: "3-3",
  title: "Statistical Literacy",
  goal: "I CAN critically evaluate statistical claims and studies.",
  standards: ["S-ID.A.1", "S-ID.A.2", "S-ID.A.3", "S-ID.A.4", "S-ID.B.5", "S-ID.B.6"],
  vocabulary: [
    { term: "Correlation", definition: "Relationship between variables." },
    { term: "Causation", definition: "One causes another." },
    { term: "Confounding", definition: "Hidden third variable." },
    { term: "Statistical significance", definition: "Unlikely by chance." },
    { term: "Misleading graph", definition: "Distorted display." },
  ],
  concepts: [
    {
      id: "stats-u3-statistical-literacy",
      title: "Statistical literacy",
      skill: "Critically evaluate statistical claims.",
      lesson: {
        sections: [
          {
            heading: "Correlation vs causation",
            body: "Correlation shows association, not causation. Ice cream sales correlate with drowning — both driven by summer heat (confounding variable). Causation requires controlled experiments or strong evidence.",
          },
          {
            heading: "Evaluating claims",
            body: "Check: sample size, randomization, bias, confounding variables, and how data is displayed. Misleading graphs (truncated axes, cherry-picked ranges) distort perception. Statistical significance doesn't mean practical importance.",
          },
        ],
        keyFormulas: [
          { name: "Correlation", statement: "Association." },
          { name: "Causation", statement: "Cause." },
          { name: "Confounding", statement: "Third variable." },
          { name: "Significance", statement: "Not by chance." },
        ],
        workedExample: {
          problem: "A study claims coffee causes heart disease because coffee drinkers have higher rates. What's a confounding variable?",
          solution: "Stress or smoking — people who drink coffee may also smoke more or have higher-stress jobs, which could cause heart disease instead.",
        },
      },
      questions: [
        {
          id: "stats-u3-statistical-literacy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Correlation between two variables means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one causes the other"
                    },
                    {
                              "id": "b",
                              "text": "they are associated"
                    },
                    {
                              "id": "c",
                              "text": "they are identical"
                    },
                    {
                              "id": "d",
                              "text": "no relationship"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Association, not causation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlation means two variables are associated — it does NOT prove causation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** they are associated",
          "commonErrors": [
                    "Assuming correlation = causation."
          ]
},
        },
        {
          id: "stats-u3-statistical-literacy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A confounding variable is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the main variable"
                    },
                    {
                              "id": "b",
                              "text": "a hidden third variable affecting both"
                    },
                    {
                              "id": "c",
                              "text": "a random error"
                    },
                    {
                              "id": "d",
                              "text": "the outcome"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Confounding",
                              "statement": "Hidden variable affects both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A confounding variable is a third variable that affects both the independent and dependent variables, creating a spurious association.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** a hidden third variable affecting both",
          "commonErrors": [
                    "Thinking it's the outcome."
          ]
},
        },
        {
          id: "stats-u3-statistical-literacy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Statistical significance means the result is ___.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Meaning",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Significance",
                              "statement": "Unlikely by chance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 (unimodal answer: unlikely by chance).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$1$",
          "commonErrors": [
                    "Thinking it means important."
          ]
},
        },
        {
          id: "stats-u3-statistical-literacy-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why 'statistically significant' doesn't necessarily mean 'practically important', with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Significance",
                              "statement": "Not by chance."
                    },
                    {
                              "kind": "skill",
                              "name": "Practical",
                              "statement": "Real-world impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With huge sample sizes, tiny differences become statistically significant but have no real-world impact. Example: a drug might reduce symptoms by 0.01% — statistically significant with 1 million patients but clinically meaningless.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains the distinction with example.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Significant ≠ important; effect size matters.**",
          "commonErrors": [
                    "Treating significance as importance."
          ]
},
        },
      ],
    },
  ],
};
