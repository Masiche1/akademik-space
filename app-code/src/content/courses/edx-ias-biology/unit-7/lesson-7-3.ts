import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ediasbio-u7-lesson-7-3",
  code: "7-3",
  title: "Limiting Factors and Practical Work",
  goal: "I CAN explain limiting factors on photosynthesis and describe experiments investigating the rate of photosynthesis.",
  standards: ["WBI14 Photosynthesis", "WBI16 Practical Skills in Biology II"],
  
  vocabulary: [
    { term: "Limiting factor", definition: "Factor that directly limits the rate of a process when in shortest supply." },
    { term: "Rate of photosynthesis", definition: "Speed of glucose production, often measured as O2 bubbles per minute." },
    { term: "Light intensity", definition: "Brightness of light — affects energy available for light reactions." },
    { term: "Carbon dioxide concentration", definition: "Amount of CO2 available for the Calvin cycle." },
    { term: "Control variable", definition: "Variable kept constant so only the tested variable affects results." },
    { term: "Independent variable", definition: "Variable deliberately changed by the investigator." },
    { term: "Dependent variable", definition: "Variable measured as the result." },
    { term: "Sodium hydrogencarbonate", definition: "Compound added to pondweed water to supply extra CO2." },
  ],
  concepts: [
    {
      id: "ediasbio-u7-lim",
      title: "Limiting factors in photosynthesis",
      skill: "Explain how light, CO2 and temperature limit the rate of photosynthesis.",
      lesson: {
        sections: [
          {
            heading: "The law of limiting factors",
            body: "The **rate of a process is limited by the factor in shortest supply**. For photosynthesis the three main factors are **light intensity, carbon dioxide concentration and temperature**. Increasing one factor raises the rate only until another factor becomes limiting — the rate then plateaus on a graph.",
          },
          {
            heading: "Each factor in turn",
            body: "**Light intensity**: more light → faster light reactions → more ATP/NADPH → faster CO2 fixation, until CO2 or temperature limits. **CO2 concentration**: more CO2 → faster Calvin cycle, until light or temperature limits. **Temperature**: enzyme-controlled reactions speed up with warmth up to ~40 °C, then enzymes denature and rate falls.",
          },
          {
            heading: "Applications",
            body: "Greenhouses boost yield by raising light (artificial lamps), enriching CO2 (burning fuel or released CO2) and heating. In the field, light is usually limiting; in sealed greenhouses CO2 enrichment gives large gains. The compensation point moves lower with higher light.",
          },
        ],
        keyFormulas: [
          { name: "Limiting factors", statement: "Light intensity, CO2 concentration, temperature" },
          { name: "Plateau", statement: "Rate limited by next-shortest factor" },
          { name: "Enzyme limit", statement: "Rate falls above ~40 °C as enzymes denature" },
        ],
        workedExample: {
          problem: "A pondweed produces 10 bubbles/min in dim light. A lamp is moved closer and bubbles rise to 30/min, then stay at 30/min even when the lamp is moved closer still. Explain.",
          solution: "First, light intensity was limiting — more light gave more ATP/NADPH and faster photosynthesis. At 30 bubbles/min another factor (CO2 concentration or temperature) became limiting, so extra light no longer increased the rate.",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-lim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does NOT directly limit the rate of photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light intensity"
                    },
                    {
                              "id": "b",
                              "text": "CO2 concentration"
                    },
                    {
                              "id": "c",
                              "text": "Soil pH"
                    },
                    {
                              "id": "d",
                              "text": "Temperature"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limiting factors",
                              "statement": "Light, CO2, temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil pH is not a direct limiting factor for photosynthesis.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Soil pH"
},
        },
        {
          id: "ediasbio-u7-lim-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the three main limiting factors of photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limiting factors",
                              "statement": "Light, CO2, temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light intensity and CO2 concentration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Temperature.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Light intensity, CO2 concentration, temperature"
},
        },
        {
          id: "ediasbio-u7-lim-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why increasing light intensity does not always increase the rate of photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Limiting factor",
                              "statement": "Rate set by scarcest factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More light → faster light reactions → more ATP/NADPH.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "But CO2 or temperature may then become limiting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calvin cycle cannot use extra ATP if CO2 is short.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Rate plateaus until the new limiting factor is increased.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Another factor (CO2/temperature) becomes limiting"
},
        },
        {
          id: "ediasbio-u7-lim-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the effect of temperature on the rate of photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Temperature and enzymes",
                              "statement": "Q10 rise then denaturation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis involves enzyme-controlled reactions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rising temperature increases kinetic energy → more enzyme-substrate collisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rate rises up to an optimum around 35–40 °C.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Above optimum, enzymes denature — active site shape lost.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Rate falls sharply; plants also lose water faster at high temperature.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Rate rises to ~40 °C then falls as enzymes denature"
},
        },
        {
          id: "ediasbio-u7-lim-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the law of limiting factors.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how greenhouses increase crop yield.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name one other factor that can limit photosynthesis in a sealed greenhouse.",
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
                              "name": "Limiting factors",
                              "statement": "Scarcest factor sets rate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rate of process is limited by the factor in shortest supply.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Increasing one factor only helps until another limits.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Greenhouses raise light, temperature and CO2 above field levels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Higher rates of photosynthesis → greater yield.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Nutrient/mineral supply or water availability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Valid example named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Limiting factor law; greenhouse yield; other limits"
},
        },
        {
          id: "ediasbio-u7-lim-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Define limiting factor. (b) Name the three main factors limiting photosynthesis. (c) Explain how light intensity affects the rate. (d) Explain how CO2 affects the rate. (e) Explain why rate falls above ~40 °C. (f) What is a 'plateau' on a rate graph? (g) How do greenhouses use CO2 enrichment? (h) Give one other factor that can limit yield. (i) What is the compensation point? (j) Do plants respire in the dark?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define limiting factor.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three factors.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Light intensity effect.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "CO2 effect.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Why rate falls above 40 °C.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "What is a plateau.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "CO2 enrichment in greenhouses.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Another limiting factor.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Define compensation point.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Do plants respire in dark?",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Limiting factors",
                              "statement": "Light, CO2, temperature."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Factor in shortest supply that directly limits rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Light intensity, CO2 concentration, temperature.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All three named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "More light → faster light reactions until another factor limits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "More CO2 → faster Calvin cycle until another factor limits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Enzymes denature above optimum temperature.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Flat section of rate graph where rate is limited by next factor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Extra CO2 supplied so CO2 does not limit photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Water, minerals or light duration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Light intensity where photosynthesis = respiration rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Yes — respiration occurs in all living cells at all times.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Limiting factors and their effects",
          "commonErrors": [
                    "Thinking higher temperature always helps — enzymes denature."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u7-prac",
      title: "Investigating photosynthesis practically",
      skill: "Plan and interpret experiments measuring the rate of photosynthesis in pondweed.",
      lesson: {
        sections: [
          {
            heading: "The pondweed experiment",
            body: "A shoot of **Elodea** (pondweed) is placed in water with sodium hydrogencarbonate (CO2 source) under a lamp. Oxygen bubbles from the cut end are counted per minute = **rate of photosynthesis**. Variables: light intensity varied by lamp distance; CO2 by hydrogencarbonate concentration; temperature by water bath.",
          },
          {
            heading: "Controls and validity",
            body: "Keep constant: same plant/shoot length, same volume of water, same temperature (unless testing temperature), same CO2 (unless testing CO2), time counted, lamp type. Count bubbles for a fixed time (e.g. 1 min) and repeat for reliability. A control could be boiled pondweed (no photosynthesis → few/no bubbles).",
          },
          {
            heading: "Results and analysis",
            body: "Plot rate (bubbles/min) against light intensity: rate rises then plateaus when CO2/temperature limits. Against temperature: rises to ~40 °C then falls. Against CO2: rises then plateaus. Errors: bubbles vary in size, counting difficulty, temperature drift, leaf damage.",
          },
        ],
        keyFormulas: [
          { name: "Rate measure", statement: "O2 bubbles per minute = rate of photosynthesis" },
          { name: "Variables", statement: "Independent = changed; dependent = bubbles/min; rest = controlled" },
          { name: "Reliability", statement: "Repeat counts; use same plant and conditions" },
        ],
        workedExample: {
          problem: "A student counts 12, 14 and 13 bubbles in three 1-minute trials at 20 cm from the lamp. What is the mean rate and why repeat?",
          solution: "Mean = (12 + 14 + 13)/3 = 13 bubbles/min. Repeats reduce random error (bubble size varies) and show the measurement is reliable.",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-prac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the pondweed experiment, what is measured to find the rate of photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mass of plant"
                    },
                    {
                              "id": "b",
                              "text": "Number of O2 bubbles per minute"
                    },
                    {
                              "id": "c",
                              "text": "Leaf colour"
                    },
                    {
                              "id": "d",
                              "text": "Water temperature"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rate measurement",
                              "statement": "O2 bubbles per minute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen bubbles count = photosynthesis rate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** O2 bubbles per minute"
},
        },
        {
          id: "ediasbio-u7-prac-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two variables that should be kept constant in the pondweed experiment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Control variables",
                              "statement": "Only test variable changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: same plant, same water volume, same temperature, same CO2, same counting time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second variable named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. same plant and same temperature"
},
        },
        {
          id: "ediasbio-u7-prac-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how you would investigate the effect of light intensity on the rate of photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Light intensity experiment",
                              "statement": "Vary lamp distance, count bubbles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place pondweed in hydrogencarbonate solution under a lamp.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vary lamp distance (e.g. 10–50 cm) to change light intensity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Count O2 bubbles per minute at each distance; keep other variables constant.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Repeat and plot rate vs distance/intensity — rate rises then plateaus.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vary lamp distance; count bubbles/min; plot rate"
},
        },
        {
          id: "ediasbio-u7-prac-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student obtains bubble counts of 8, 10, 9 and 30 bubbles in four trials at the same light intensity. Suggest why the 30 is anomalous and how to improve reliability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reliability",
                              "statement": "Repeats and anomaly handling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30 is far above the cluster — likely a miscount or extra bubbles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Possible causes: damaged leaf releasing gas, counting error, temperature change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Take more repeats and use the mean of consistent values.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Exclude/flag anomalies with justification, not silently.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Ensure same plant, temperature and timing for all trials.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Anomaly likely error; use repeats and mean"
},
        },
        {
          id: "ediasbio-u7-prac-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent and dependent variables when testing CO2 concentration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the role of sodium hydrogencarbonate in the experiment.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one control you could use.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Variables and controls",
                              "statement": "CO2 test design."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent: hydrogencarbonate/CO2 concentration; dependent: bubbles per minute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both identified.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "It supplies extra dissolved CO2 for photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Different concentrations = different CO2 levels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Boiled/dead pondweed or lamp off.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Shows bubbles are due to living photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Variables; NaHCO3 = CO2 source; boiled plant control"
},
        },
        {
          id: "ediasbio-u7-prac-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "(a) What plant is commonly used? (b) What is measured? (c) Why is hydrogencarbonate added? (d) Name two ways to vary light intensity. (e) Name two control variables. (f) Why repeat trials? (g) What shape is the rate vs light graph? (h) Why does it plateau? (i) What happens to bubble rate above ~40 °C? (j) What is a suitable control?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Plant used.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "What is measured.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Why hydrogencarbonate.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Two ways to vary light.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two control variables.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why repeat trials.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Shape of rate vs light graph.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why it plateaus.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Bubble rate above 40 °C.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Suitable control.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Practical photosynthesis",
                              "statement": "Pondweed method."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Elodea/pondweed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen bubbles per minute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Supplies CO2 for photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Lamp distance and lamp power/number of lamps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Second method.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Same plant, same water volume/temperature, same time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second control.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Improves reliability/reduces random error.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Rises then plateaus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "CO2 or temperature becomes limiting.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "i",
                              "reasoning": "Falls — enzymes denature.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "j",
                              "reasoning": "Boiled pondweed (no living photosynthesis).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pondweed experiment design and interpretation",
          "commonErrors": [
                    "Forgetting to control temperature when testing light."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u7-lim-notes",
      title: "Limiting factors and practical work — notes",
      summary: "Rate of photosynthesis limited by light, CO2, temperature; graphs plateau then fall (enzymes denature >40 °C); pondweed bubble-counting measures O2 production.",
      sections: [
        { heading: "Limiting factors", body: "Scarcest factor sets rate; light, CO2, temperature; plateau when next factor limits; greenhouse enrichment boosts yield." },
        { heading: "Pondweed method", body: "Elodea + NaHCO3 under lamp; count O2 bubbles/min; vary lamp distance, CO2, temperature; control all other variables; repeat for reliability." },
        { heading: "Graphs", body: "Rate vs light/CO2: rise then plateau. Rate vs temperature: rise to ~40 °C then fall." },
      ],
    },
  ],
};
