import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apst-u2-lesson-2-3",
  code: "2-3",
  title: "Sampling Distributions",
  goal: "I CAN describe the sampling distribution of a sample proportion and mean.",
  standards: ["STAT-4"],
  vocabulary: [
    { term: "Parameter", definition: "A fixed number describing the population, e.g., $p$ or $\\mu$." },
    { term: "Statistic", definition: "A number computed from a sample, e.g., $\\hat{p}$ or $\\bar{x}$ — varies sample to sample." },
    { term: "Sampling distribution", definition: "The distribution of a statistic over all possible samples." },
    { term: "Standard error", definition: "SD of a sampling distribution — measures statistic-to-statistic variability." },
    { term: "CLT", definition: "Central Limit Theorem: sample means are approximately Normal for large $n$, regardless of population shape." },
  ],
  concepts: [
    {
      id: "apst-u2-sampling-distributions",
      title: "Sampling distributions",
      skill: "Describe how statistics vary across samples.",
      lesson: {
        sections: [
          {
            heading: "Sample proportion",
            body: "For a random sample of size $n$ from a population with proportion $p$, $\\hat{p}$ has mean $p$, SD $\\sqrt{\\frac{p(1-p)}{n}}$, and is approximately Normal when $np \\ge 10$ and $n(1-p) \\ge 10$.",
          },
          {
            heading: "Sample mean",
            body: "By the **Central Limit Theorem**, $\\bar{x}$ is approximately Normal with mean $\\mu$ and SD $\\frac{\\sigma}{\\sqrt{n}}$ for large $n$ — even if the population isn't Normal. This powers all inference about means.",
          },
        ],
        keyFormulas: [
          { name: "Proportion SE", statement: "$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$" },
          { name: "Mean SE", statement: "$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$" },
        ],
        workedExample: {
          problem: "$p = 0.5$, $n = 100$. SD of $\\hat{p}$?",
          solution: "$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.5 \\times 0.5}{100}} = \\sqrt{0.0025} = 0.05$.",
        },
      },
      questions: [
        {
          id: "apst-u2-sampling-distributions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sampling distribution of $\\hat{p}$ is centered at ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\hat{p}$"
                    },
                    {
                              "id": "b",
                              "text": "$p$"
                    },
                    {
                              "id": "c",
                              "text": "$0.5$"
                    },
                    {
                              "id": "d",
                              "text": "$n$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Unbiased statistic",
                              "statement": "$\\hat{p}$ averages to the population $p$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Over all samples, $\\hat{p}$ centers on the true population proportion $p$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$p$",
          "commonErrors": [
                    "Confusing the statistic with its parameter."
          ]
},
        },
        {
          id: "apst-u2-sampling-distributions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Population $\\sigma = 12$, sample size $n = 36$. SD of $\\bar{x}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$12$"
                    },
                    {
                              "id": "b",
                              "text": "$2$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{1}{3}$"
                    },
                    {
                              "id": "d",
                              "text": "$432$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Standard error",
                              "statement": "$\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{6}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sigma_{\\bar{x}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Dividing by $n$ instead of $\\sqrt{n}$."
          ]
},
        },
        {
          id: "apst-u2-sampling-distributions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "$p = 0.4$, $n = 50$. Compute the standard error of $\\hat{p}$. Round to 3 decimals.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "SE",
                              "answer": 0.0693,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "SE formula",
                              "statement": "$\\sqrt{\\frac{0.4 \\times 0.6}{50}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sqrt{\\frac{0.24}{50}} = \\sqrt{0.0048} \\approx 0.0693$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "SE $\\approx 0.069$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.069$",
          "commonErrors": [
                    "Using $p(1-p) = 0.16$ instead of $0.24$."
          ]
},
        },
        {
          id: "apst-u2-sampling-distributions-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A population has $\\mu = 100$, $\\sigma = 15$. For samples of $n = 25$: (a) mean of $\\bar{x}$, (b) SD of $\\bar{x}$, (c) approximate shape of the sampling distribution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "CLT",
                              "statement": "$\\bar{x} \\approx N(\\mu, \\sigma/\\sqrt{n})$ for large $n$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Mean of $\\bar{x} = \\mu = 100$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) SD $= \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Approximately Normal by the CLT since $n = 25$ is large.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\bar{x} \\approx N(100, 3)$",
          "commonErrors": [
                    "Using $\\sigma$ instead of $\\sigma/\\sqrt{n}$ for the SD."
          ]
},
        },
      ],
    },
  ],
};
