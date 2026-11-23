import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apbio-u3-lesson-3-2",
  code: "3-2",
  title: "Population Dynamics",
  goal: "I CAN model population growth and explain density-dependent factors.",
  standards: ["ECO-2"],
  vocabulary: [
    { term: "Exponential growth", definition: "$N(t) = N_0 e^{rt}$ — unlimited growth at rate $r$." },
    { term: "Carrying capacity", definition: "$K$ — maximum population an environment sustains." },
    { term: "Logistic growth", definition: "S-shaped growth slowing as $N \\to K$: $\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$." },
    { term: "Density-dependent", definition: "Factors whose effect intensifies with density: competition, disease, predation." },
    { term: "Density-independent", definition: "Factors affecting all densities equally: storms, fires, floods." },
    { term: "r-selected / K-selected", definition: "Many offspring, fast growth (r) vs few offspring, heavy parental care (K)." },
  ],
  concepts: [
    {
      id: "apbio-u3-population-dynamics",
      title: "Population growth",
      skill: "Distinguish growth models and limiting factors.",
      lesson: {
        sections: [
          {
            heading: "Growth models",
            body: "**Exponential** $N = N_0 e^{rt}$ assumes unlimited resources — unrealistic long-term. **Logistic** growth adds carrying capacity $K$: fast early growth that levels off as $N$ approaches $K$, producing the classic S-curve. Real populations often overshoot then crash.",
          },
          {
            heading: "Limiting factors",
            body: "**Density-dependent** factors (competition for food/space, disease spread, predation) intensify as $N$ grows — they regulate populations near $K$. **Density-independent** factors (drought, fire, floods) kill regardless of density. Life-history strategies reflect these: $r$-selected species produce many cheap offspring; $K$-selected produce few, cared-for offspring.",
          },
        ],
        keyFormulas: [
          { name: "Exponential", statement: "$N(t) = N_0 e^{rt}$" },
          { name: "Logistic", statement: "$\\frac{dN}{dt} = rN(1 - N/K)$" },
        ],
        workedExample: {
          problem: "A population of $100$ grows at $r = 0.1$/yr with $K = 1000$. Describe early vs late growth.",
          solution: "Early ($N \\ll K$): nearly exponential, $\\frac{dN}{dt} \\approx 0.1N$ — fast growth. Late ($N \\to K$): the $(1 - N/K)$ term $\\to 0$, growth slows and stabilizes near $K = 1000$.",
        },
      },
      questions: [
        {
          id: "apbio-u3-population-dynamics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The logistic growth equation includes the term ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$e^{rt}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\left(1 - \\frac{N}{K}\\right)$"
                    },
                    {
                              "id": "c",
                              "text": "$N_0$"
                    },
                    {
                              "id": "d",
                              "text": "$rN$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Logistic model",
                              "statement": "Carrying capacity slows growth near $K$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The $(1 - N/K)$ factor is what distinguishes logistic from exponential growth.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$(1 - N/K)$",
          "commonErrors": [
                    "Thinking logistic is just exponential with different constants."
          ]
},
        },
        {
          id: "apbio-u3-population-dynamics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Disease spreading faster in crowded populations is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "density-independent factor"
                    },
                    {
                              "id": "b",
                              "text": "density-dependent factor"
                    },
                    {
                              "id": "c",
                              "text": "r-selected trait"
                    },
                    {
                              "id": "d",
                              "text": "carrying capacity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Density-dependent",
                              "statement": "Effect strengthens with population density."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Disease transmission increases with crowding — classic density-dependent regulation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Density-dependent",
          "commonErrors": [
                    "Confusing with density-independent disasters."
          ]
},
        },
        {
          id: "apbio-u3-population-dynamics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Exponential growth: $N_0 = 50$, $r = 0.2$, $t = 5$. Compute $N(5) = 50e^{0.2 \\times 5}$. Enter rounded to nearest whole number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$N(5)$",
                              "answer": 136
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Exponential model",
                              "statement": "$N = 50e^{1.0}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$e^{1.0} \\approx 2.718$; $N \\approx 50 \\times 2.718 = 135.9 \\approx 136$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\approx 136$ individuals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$136$",
          "commonErrors": [
                    "Using $e^{rt}$ with $r$ and $t$ swapped or mis-multiplying."
          ]
},
        },
        {
          id: "apbio-u3-population-dynamics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Contrast r-selected and K-selected species, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "r-strategy",
                              "statement": "Many offspring, little care, early reproduction, variable environments."
                    },
                    {
                              "kind": "concept",
                              "name": "K-strategy",
                              "statement": "Few offspring, heavy parental investment, late reproduction, stable environments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "r-selected: many small offspring, little parental care, reproduce early/often — e.g., weeds, insects, mice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "K-selected: few large offspring, extended care, reproduce late — e.g., elephants, albatrosses, primates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct examples and trait contrasts for both strategies.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "r = many/cheap (weeds); K = few/cared (elephants)",
          "commonErrors": [
                    "Reversing the strategies or giving no examples."
          ]
},
        },
      ],
    },
  ],
};
