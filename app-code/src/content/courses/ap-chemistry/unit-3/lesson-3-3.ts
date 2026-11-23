import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apch-u3-lesson-3-3",
  code: "3-3",
  title: "Nuclear Chemistry",
  goal: "I CAN describe radioactive decay and apply half-life calculations.",
  standards: ["NUC-1"],
  vocabulary: [
    { term: "Radioactive decay", definition: "Unstable nucleus emits particles/energy to reach stability." },
    { term: "Alpha decay", definition: "$^4_2He$ emission — reduces $A$ by $4$, $Z$ by $2$." },
    { term: "Beta decay", definition: "Neutron $\\to$ proton + electron ($\\beta^-$); $A$ same, $Z$ increases by $1$." },
    { term: "Gamma decay", definition: "High-energy photon emission; no change in $A$ or $Z$." },
    { term: "Half-life", definition: "Time for half the radioactive nuclei to decay — constant for each isotope." },
    { term: "Fission", definition: "Heavy nucleus splits releasing energy — power plants, bombs." },
    { term: "Fusion", definition: "Light nuclei combine releasing energy — sun, stars." },
  ],
  concepts: [
    {
      id: "apch-u3-nuclear-chemistry",
      title: "Nuclear processes",
      skill: "Identify decay types and compute remaining quantities over time.",
      lesson: {
        sections: [
          {
            heading: "Decay types",
            body: "**Alpha** ($^4_2He$): heavy nuclei, reduces mass by $4$ and charge by $2$. **Beta** ($\\beta^-$): neutron converts to proton, $Z$ rises by $1$, $A$ unchanged. **Gamma**: pure energy, no particle change. Decay series continue until a stable isotope forms.",
          },
          {
            heading: "Half-life",
            body: "After each half-life $t_{1/2}$, half the remaining nuclei decay: $N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$. Carbon-14 ($t_{1/2} = 5730$ yr) powers radiocarbon dating; iodine-131 treats thyroid cancer; cobalt-60 sterilizes equipment.",
          },
        ],
        keyFormulas: [
          { name: "Decay equation", statement: "$N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$" },
          { name: "Alpha", statement: "$^A_Z X \\to ^{A-4}_{Z-2}Y + ^4_2He$" },
          { name: "Beta", statement: "$^A_Z X \\to ^A_{Z+1}Y + \\beta^-$" },
        ],
        workedExample: {
          problem: "$^{238}_{92}U$ undergoes alpha decay. What's the product?",
          solution: "$A: 238 - 4 = 234$; $Z: 92 - 2 = 90$ (thorium). Product: $^{234}_{90}Th$.",
        },
      },
      questions: [
        {
          id: "apch-u3-nuclear-chemistry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Alpha decay reduces mass number by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$4$"
                    },
                    {
                              "id": "c",
                              "text": "$1$"
                    },
                    {
                              "id": "d",
                              "text": "$0$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alpha particle",
                              "statement": "$^4_2He$ — 4 nucleons, 2 protons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alpha emission removes $4$ mass units and $2$ charge units.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Thinking alpha is just 2 protons — it's the whole helium nucleus."
          ]
},
        },
        {
          id: "apch-u3-nuclear-chemistry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After beta-minus decay, the atomic number ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "decreases by 1"
                    },
                    {
                              "id": "b",
                              "text": "increases by 1"
                    },
                    {
                              "id": "c",
                              "text": "stays same"
                    },
                    {
                              "id": "d",
                              "text": "decreases by 2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Beta decay",
                              "statement": "Neutron $\\to$ proton + electron; $Z$ rises by $1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$A$ unchanged but $Z$ increases by $1$ — a neutron became a proton.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increases by 1",
          "commonErrors": [
                    "Thinking mass number changes or charge decreases."
          ]
},
        },
        {
          id: "apch-u3-nuclear-chemistry-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Carbon-14 half-life is $5730$ yr. A sample has $100$ g; how much remains after $11460$ yr (2 half-lives)? Enter grams.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Remaining",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Half-life",
                              "statement": "$100 \\times (\\frac{1}{2})^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$100 \\times \\frac{1}{4} = 25$ g remain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$25$ g.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$25$ g",
          "commonErrors": [
                    "Halving only once or using the wrong exponent."
          ]
},
        },
        {
          id: "apch-u3-nuclear-chemistry-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish nuclear fission and fusion, giving one application of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Fission",
                              "statement": "Heavy nucleus splits; chain reaction; power plants/bombs."
                    },
                    {
                              "kind": "comparison",
                              "name": "Fusion",
                              "statement": "Light nuclei combine; needs extreme T/pressure; sun/experimental reactors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fission: heavy nuclei like $^{235}U$ split into lighter fragments + neutrons, releasing energy; used in nuclear reactors and atomic weapons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fusion: light nuclei like hydrogen isotopes combine into helium, releasing enormous energy; powers the sun and stars, requires millions of degrees.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: fission splits heavy, fusion joins light — both convert mass to energy via $E = mc^2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fission = split heavy (reactors); fusion = join light (sun)",
          "commonErrors": [
                    "Swapping the processes or applications."
          ]
},
        },
      ],
    },
  ],
};
