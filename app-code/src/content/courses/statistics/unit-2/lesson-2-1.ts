import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "stats-u2-lesson-2-1",
  code: "2-1",
  title: "Sampling and Inference",
  goal: "I CAN design samples and make inferences about populations.",
  standards: ["S-IC.A.1", "S-IC.A.2", "S-IC.B.3", "S-IC.B.4", "S-IC.B.5", "S-IC.B.6"],
  vocabulary: [
    { term: "Population", definition: "All individuals of interest." },
    { term: "Sample", definition: "Subset studied." },
    { term: "Random sample", definition: "Every member has equal chance." },
    { term: "Bias", definition: "Systematic error." },
    { term: "Margin of error", definition: "Uncertainty range." },
  ],
  concepts: [
    {
      id: "stats-u2-sampling-inference",
      title: "Sampling and inference",
      skill: "Design samples and make population inferences.",
      lesson: {
        sections: [
          {
            heading: "Good sampling",
            body: "Random sampling gives every population member equal chance — avoids bias. Convenience samples (first people available) and voluntary samples are biased. Sample size affects margin of error: larger samples → smaller error.",
          },
          {
            heading: "Inference",
            body: "From sample statistics we infer population parameters with uncertainty: confidence intervals give a range likely to contain the true value. Randomization in experiments lets us attribute effects to treatments.",
          },
        ],
        keyFormulas: [
          { name: "Population", statement: "All individuals." },
          { name: "Random", statement: "Equal chance." },
          { name: "Bias", statement: "Systematic error." },
          { name: "MoE", statement: "Uncertainty range." },
        ],
        workedExample: {
          problem: "A researcher surveys the first 50 students entering the library. Is this a good sample for the whole school?",
          solution: "No — it's a convenience sample, likely biased (library users may differ from average student).",
        },
      },
      questions: [
        {
          id: "stats-u2-sampling-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A random sample ensures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everyone is included"
                    },
                    {
                              "id": "b",
                              "text": "every member has equal chance of selection"
                    },
                    {
                              "id": "c",
                              "text": "no errors"
                    },
                    {
                              "id": "d",
                              "text": "large size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Random",
                              "statement": "Equal selection probability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a random sample, every population member has equal chance of being selected.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** every member has equal chance of selection",
          "commonErrors": [
                    "Thinking random = everyone included."
          ]
},
        },
        {
          id: "stats-u2-sampling-inference-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Larger sample size generally ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increases margin of error"
                    },
                    {
                              "id": "b",
                              "text": "decreases margin of error"
                    },
                    {
                              "id": "c",
                              "text": "no effect"
                    },
                    {
                              "id": "d",
                              "text": "adds bias"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MoE",
                              "statement": "Larger n → smaller error."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Larger samples give more precise estimates — smaller margin of error.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** decreases margin of error",
          "commonErrors": [
                    "Reversing the relationship."
          ]
},
        },
        {
          id: "stats-u2-sampling-inference-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A survey needs a random sample of 200 from a population of 1000. What fraction is sampled? (decimal)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Fraction",
                              "answer": 0.2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Fraction",
                              "statement": "$200/1000 = 0.2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$200/1000 = 0.2$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0.2$",
          "commonErrors": [
                    "Saying 200 (count not fraction)."
          ]
},
        },
        {
          id: "stats-u2-sampling-inference-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a voluntary online survey about a product is likely biased and how you'd improve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bias",
                              "statement": "Voluntary = self-selected."
                    },
                    {
                              "kind": "skill",
                              "name": "Improve",
                              "statement": "Random selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Voluntary surveys attract people with strong opinions — self-selection bias. Improvement: use random sampling from the target population, possibly with incentives, and weight responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies bias and proposes fix.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Self-selection bias; fix with random sampling.**",
          "commonErrors": [
                    "Not identifying the bias source."
          ]
},
        },
      ],
    },
  ],
};
