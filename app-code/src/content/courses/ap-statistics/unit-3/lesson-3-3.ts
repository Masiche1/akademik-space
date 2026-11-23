import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apst-u3-lesson-3-3",
  code: "3-3",
  title: "Errors, Power, and Comparing Distributions",
  goal: "I CAN distinguish Type I/II errors and explain power and bias.",
  standards: ["INF-3"],
  vocabulary: [
    { term: "Type I error", definition: "Rejecting $H_0$ when it is true — false positive; probability $= \\alpha$." },
    { term: "Type II error", definition: "Failing to reject $H_0$ when $H_a$ is true — false negative; probability $= \\beta$." },
    { term: "Power", definition: "$1 - \\beta$ — probability of correctly rejecting a false $H_0$." },
    { term: "Bias", definition: "Systematic error in sampling that distorts results, e.g., voluntary response bias." },
    { term: "Random sampling", definition: "Every individual has a known, nonzero chance of selection — basis of inference." },
  ],
  concepts: [
    {
      id: "apst-u3-errors-types",
      title: "Errors and inference conditions",
      skill: "Identify error types and evaluate study design.",
      lesson: {
        sections: [
          {
            heading: "Error trade-off",
            body: "Type I ($\\alpha$) is controlled by the significance level; Type II ($\\beta$) shrinks as sample size grows. **Power** $= 1 - \\beta$ increases with larger $n$ and larger true effects. You cannot make both error rates arbitrarily small — there's always a trade-off.",
          },
          {
            heading: "Bias and design",
            body: "Inference requires **random sampling** and honest response. Convenience samples, voluntary response, and leading questions introduce bias that no sample size fixes. A well-designed experiment controls confounding through randomization.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$\\text{Power} = 1 - \\beta = P(\\text{reject } H_0 \\mid H_a \\text{ true})$" },
          { name: "Error rates", statement: "$\\alpha = P(\\text{Type I})$, $\\beta = P(\\text{Type II})$" },
        ],
        workedExample: {
          problem: "A test has $\\alpha = 0.05$ and $\\beta = 0.20$. What is its power?",
          solution: "Power $= 1 - \\beta = 1 - 0.20 = 0.80$ — an $80\\%$ chance of detecting a real effect.",
        },
      },
      questions: [
        {
          id: "apst-u3-errors-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rejecting a true null hypothesis is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Type II error"
                    },
                    {
                              "id": "b",
                              "text": "Type I error"
                    },
                    {
                              "id": "c",
                              "text": "correct decision"
                    },
                    {
                              "id": "d",
                              "text": "power"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Type I error",
                              "statement": "False rejection of $H_0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Type I = rejecting $H_0$ when it's actually true; its probability is $\\alpha$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Type I error",
          "commonErrors": [
                    "Swapping Type I and Type II."
          ]
},
        },
        {
          id: "apst-u3-errors-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing sample size generally ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increases both error rates"
                    },
                    {
                              "id": "b",
                              "text": "decreases $\\beta$ and increases power"
                    },
                    {
                              "id": "c",
                              "text": "increases $\\alpha$"
                    },
                    {
                              "id": "d",
                              "text": "has no effect on errors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Power",
                              "statement": "Larger $n$ shrinks standard errors, detecting smaller effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More data reduces Type II error and raises power; $\\alpha$ stays fixed by choice.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking bigger samples raise the false-positive rate."
          ]
},
        },
        {
          id: "apst-u3-errors-types-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A test has $\\beta = 0.15$. What is its power? Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Power",
                              "answer": 0.85
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Power",
                              "statement": "$1 - \\beta$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Power $= 1 - 0.15 = 0.85$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0.85$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.85$",
          "commonErrors": [
                    "Reporting $\\beta$ instead of power."
          ]
},
        },
        {
          id: "apst-u3-errors-types-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A website asks visitors 'Don't you agree our product is the best?' and reports $90\\%$ approval. Identify the bias and explain why the result is unreliable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Response bias",
                              "statement": "Leading question pushes yes answers."
                    },
                    {
                              "kind": "concept",
                              "name": "Voluntary response",
                              "statement": "Only motivated visitors respond."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The question is leading — it pressures agreement, inflating approval.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Voluntary response bias: only people with strong opinions (likely fans) bother answering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result is unreliable; a random sample with neutral wording is needed.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Leading question + voluntary response bias",
          "commonErrors": [
                    "Accepting the $90\\%$ at face value."
          ]
},
        },
      ],
    },
  ],
};
