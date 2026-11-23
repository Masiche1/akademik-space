import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ediasbio-u4-lesson-4-2",
  code: "4-2",
  title: "The Kidney and Osmoregulation",
  goal: "I CAN describe urine formation in the nephron and explain ADH control of water balance.",
  standards: ["WBI15 Internal environment", "Excretion and osmoregulation"],
  
  vocabulary: [
    { term: "Nephron", definition: "The functional unit of the kidney that filters blood and forms urine." },
    { term: "Ultrafiltration", definition: "Forcing small molecules out of blood into the Bowman's capsule under pressure." },
    { term: "Selective reabsorption", definition: "Reabsorption of useful molecules (glucose, ions, water) from the nephron back into the blood." },
    { term: "ADH", definition: "Antidiuretic hormone from the posterior pituitary that increases water reabsorption in the kidney." },
    { term: "Osmoregulation", definition: "Control of water and ion concentration of the blood." },
    { term: "Dialysis", definition: "Medical treatment filtering waste from blood when kidneys fail." },
    { term: "Homeostasis", definition: "Maintaining a stable internal environment despite external changes." },
  ],
  concepts: [
    {
      id: "ediasbio-u4-kidney",
      title: "Kidney structure and urine formation",
      skill: "Describe the nephron and the stages of ultrafiltration, selective reabsorption and urine formation.",
      lesson: {
        sections: [
          {
            heading: "Nephron structure",
            body: "Each kidney has about one million nephrons: Bowman's capsule (glomerulus inside) → proximal convoluted tubule → loop of Henle → distal convoluted tubule → collecting duct. Blood enters via the renal artery and leaves via the renal vein; urine drains to the ureter.",
          },
          {
            heading: "Ultrafiltration",
            body: "The glomerulus is a knot of capillaries under high pressure. Small molecules (water, glucose, ions, urea) are forced through the filter into the Bowman's capsule; cells and proteins stay in the blood. The filtrate is nearly identical to plasma minus proteins.",
          },
          {
            heading: "Selective reabsorption",
            body: "In the proximal convoluted tubule most glucose, some ions and much water are reabsorbed by active transport and osmosis. The loop of Henle concentrates the filtrate using a salt gradient; the collecting duct reabsorbs water under ADH control. Final urine is mostly water and urea plus excess ions.",
          },
        ],
        keyFormulas: [
          { name: "Filtration", statement: "Small molecules only: water, glucose, ions, urea" },
          { name: "PCT", statement: "Reabsorbs ~all glucose, ions, much water (active transport + osmosis)" },
          { name: "Output", statement: "Urine ≈ water + urea + excess ions" },
        ],
        workedExample: {
          problem: "Glucose appears in urine. What does this indicate?",
          solution: "Normally all glucose is reabsorbed in the proximal convoluted tubule. Its presence in urine (glycosuria) suggests the reabsorption capacity is exceeded — as in diabetes — or kidney damage.",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-kid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where in the nephron does ultrafiltration occur?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Loop of Henle"
                    },
                    {
                              "id": "b",
                              "text": "Collecting duct"
                    },
                    {
                              "id": "c",
                              "text": "Glomerulus/Bowman's capsule"
                    },
                    {
                              "id": "d",
                              "text": "Ureter"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ultrafiltration",
                              "statement": "Pressure-driven filtration at the glomerulus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Filtration occurs at the glomerulus.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Glomerulus/Bowman's capsule"
},
        },
        {
          id: "ediasbio-u4-kid-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two blood vessels carrying blood to and from the kidney.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renal vessels",
                              "statement": "Artery in, vein out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Renal artery brings blood in.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Renal vein carries filtered blood away.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Renal artery and renal vein"
},
        },
        {
          id: "ediasbio-u4-kid-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain ultrafiltration at the glomerulus.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ultrafiltration",
                              "statement": "High pressure forces small molecules across the filter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blood enters glomerular capillaries under high hydrostatic pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pressure forces small molecules (water, glucose, ions, urea) through the basement membrane into Bowman's capsule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Large molecules (cells, proteins) cannot pass and remain in blood.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Result: filtrate similar to plasma minus proteins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pressure filtration of small molecules only"
},
        },
        {
          id: "ediasbio-u4-kid-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish between ultrafiltration and selective reabsorption.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two stages",
                              "statement": "Filtration removes everything small; reabsorption returns useful molecules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ultrafiltration occurs at the glomerulus into Bowman's capsule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It is non-selective: all small molecules are filtered.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Selective reabsorption occurs mainly in the proximal convoluted tubule.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Useful molecules (all glucose, ions, water) are returned to the blood by active transport and osmosis.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Only waste (urea, excess ions, water) remains as urine.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Ultrafiltration = non-selective; reabsorption = selective return"
},
        },
        {
          id: "ediasbio-u4-kid-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the order of structures through which filtrate passes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of the loop of Henle.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State what urine mainly contains.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Nephron path",
                              "statement": "Filtrate flows through tubules to collecting duct."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bowman's capsule → PCT → loop of Henle → DCT → collecting duct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct order stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Loop of Henle sets up a salt gradient to concentrate urine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Water leaves the filtrate so it becomes more concentrated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Water, urea and excess ions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "All three components named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nephron path, loop of Henle, urine composition"
},
        },
        {
          id: "ediasbio-u4-kid-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define nephron and ultrafiltration. (b) Name the blood vessel entering the kidney. (c) Describe ultrafiltration at the glomerulus. (d) Name the site of selective reabsorption. (e) State two substances reabsorbed there. (f) What is the role of the loop of Henle? (g) What does the collecting duct do? (h) Name the tube carrying urine to the bladder.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define nephron and ultrafiltration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the entering blood vessel.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Describe ultrafiltration.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Name the reabsorption site.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "State two reabsorbed substances.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Role of loop of Henle.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Role of collecting duct.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Name the urine tube.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Urine formation",
                              "statement": "Filtration then reabsorption."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nephron: functional unit of kidney.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ultrafiltration: pressure-driven filtering of small molecules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renal artery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "High pressure forces small molecules into Bowman's capsule.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Proximal convoluted tubule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Glucose and ions/water (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Concentrates filtrate via salt gradient.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Reabsorbs water under ADH control.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Ureter carries urine to bladder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Correct tube named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nephron structure and urine formation",
          "commonErrors": [
                    "Saying proteins are filtered."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u4-adh",
      title: "ADH and osmoregulation",
      skill: "Explain how ADH controls water reabsorption and blood water potential.",
      lesson: {
        sections: [
          {
            heading: "Osmoreceptors and ADH release",
            body: "Osmoreceptors in the hypothalamus monitor blood water potential. When blood is concentrated (dehydration, salty food), they stimulate the posterior pituitary to release ADH. When blood is dilute, ADH secretion falls.",
          },
          {
            heading: "Action of ADH",
            body: "ADH makes the walls of the collecting duct more permeable to water, so more water is reabsorbed into the blood and urine is concentrated and small in volume. Low ADH makes the duct impermeable: little water reabsorbed, large volume of dilute urine.",
          },
          {
            heading: "Negative feedback",
            body: "Rising blood water potential → less ADH → more water lost in urine → potential falls. Falling potential → more ADH → more water reabsorbed → potential rises. This is negative feedback maintaining a set point. Kidney failure is treated by dialysis or transplant.",
          },
        ],
        keyFormulas: [
          { name: "High ADH", statement: "Collecting duct permeable → concentrated, small-volume urine" },
          { name: "Low ADH", statement: "Collecting duct impermeable → dilute, large-volume urine" },
        ],
        workedExample: {
          problem: "A person drinks a large volume of water. What happens to ADH and urine?",
          solution: "Blood water potential rises → osmoreceptors detect this → ADH secretion decreases → collecting duct becomes less permeable → less water reabsorbed → large volume of dilute urine is produced.",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-adh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is ADH released from?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Anterior pituitary"
                    },
                    {
                              "id": "b",
                              "text": "Adrenal gland"
                    },
                    {
                              "id": "c",
                              "text": "Posterior pituitary"
                    },
                    {
                              "id": "d",
                              "text": "Pancreas"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ADH",
                              "statement": "Antidiuretic hormone from posterior pituitary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ADH is released by the posterior pituitary.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Posterior pituitary"
},
        },
        {
          id: "ediasbio-u4-adh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the effect of ADH on the collecting duct.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ADH action",
                              "statement": "Controls water permeability of collecting duct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ADH makes the collecting duct more permeable to water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More water is then reabsorbed into the blood.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increases water permeability → more reabsorption"
},
        },
        {
          id: "ediasbio-u4-adh-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the body responds to dehydration using ADH.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Negative feedback",
                              "statement": "Osmoreceptors → ADH → water reabsorption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blood becomes concentrated (water potential falls).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Osmoreceptors in hypothalamus detect this and stimulate ADH release.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ADH makes collecting duct permeable to water → more reabsorption.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Concentrated, small-volume urine produced; blood water potential restored.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Dehydration → ADH → concentrated urine"
},
        },
        {
          id: "ediasbio-u4-adh-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the effect of high and low levels of ADH on urine production.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "ADH levels",
                              "statement": "Permeability of collecting duct controls water loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High ADH: collecting duct very permeable to water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High ADH: most water reabsorbed → small volume of concentrated urine.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Low ADH: collecting duct impermeable to water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Low ADH: little water reabsorbed → large volume of dilute urine.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both maintain blood water potential (negative feedback).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "High ADH = concentrated urine; low ADH = dilute urine"
},
        },
        {
          id: "ediasbio-u4-adh-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the cells that detect blood water potential.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the gland that stores and releases ADH.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain how ADH changes the collecting duct.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why this is called negative feedback.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Osmoregulation loop",
                              "statement": "Detector → hormone → effector → correction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Osmoreceptors (in hypothalamus).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Posterior pituitary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "ADH increases permeability of collecting duct walls to water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "More water reabsorbed → urine concentrated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Change opposes the original stimulus (concentrated blood → water saved → potential restored).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Keeps blood water potential near a set point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Osmoreceptors → pituitary → ADH → negative feedback"
},
        },
        {
          id: "ediasbio-u4-adh-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define osmoregulation and ADH. (b) Name the osmoreceptor location. (c) Name the gland releasing ADH. (d) Describe the effect of ADH on the kidney. (e) Explain what happens to urine when ADH is high. (f) Explain what happens when ADH is low. (g) What is negative feedback? (h) Name one treatment for kidney failure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define osmoregulation and ADH.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Osmoreceptor location.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Gland releasing ADH.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Effect of ADH on kidney.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Urine when ADH high.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Urine when ADH low.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define negative feedback.",
                    "marks": 2
          },
          {
                    "label": "h",
                    "prompt": "Kidney failure treatment.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ADH control",
                              "statement": "Hormonal control of water balance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Osmoregulation: control of water/ion concentration of blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "ADH: hormone increasing water reabsorption in kidney.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hypothalamus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Posterior pituitary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Makes collecting duct permeable to water → reabsorption.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Small volume, concentrated urine.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Large volume, dilute urine.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Response opposes the stimulus to maintain a set point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Example: blood concentration detected and corrected.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Dialysis (or transplant).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "ADH osmoregulation feedback loop",
          "commonErrors": [
                    "Saying ADH is produced in the kidney."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u4-kidney-notes",
      title: "Kidney and osmoregulation — notes",
      summary: "Nephron: ultrafiltration at glomerulus → selective reabsorption in PCT → concentration in loop/collecting duct. ADH controls water reabsorption by negative feedback.",
      sections: [
        { heading: "Urine formation", body: "Filtrate = plasma minus proteins. PCT reabsorbs glucose/ions/water; loop of Henle concentrates; collecting duct reabsorbs water under ADH." },
        { heading: "ADH", body: "Osmoreceptors (hypothalamus) → posterior pituitary → ADH → collecting duct permeability → urine concentration." },
        { heading: "Feedback", body: "High blood concentration → more ADH → water saved; low concentration → less ADH → water lost. Dialysis for kidney failure." },
      ],
    },
  ],
};
