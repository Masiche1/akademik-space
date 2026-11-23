import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apbio-u3-lesson-3-3",
  code: "3-3",
  title: "Animal Physiology: Homeostasis and Transport",
  goal: "I CAN explain homeostatic mechanisms and compare circulatory and gas exchange systems.",
  standards: ["PHYS-1"],
  vocabulary: [
    { term: "Homeostasis", definition: "Maintaining stable internal conditions despite external change." },
    { term: "Negative feedback", definition: "Response opposes the stimulus — the main homeostatic mechanism." },
    { term: "Positive feedback", definition: "Response amplifies the stimulus — rare, e.g., childbirth contractions." },
    { term: "Open circulatory system", definition: "Blood bathes organs directly in a hemocoel — insects, most mollusks." },
    { term: "Closed circulatory system", definition: "Blood stays in vessels — vertebrates, earthworms." },
    { term: "Countercurrent exchange", definition: "Flowing fluids in opposite directions maximize gradient — efficient gas exchange." },
  ],
  concepts: [
    {
      id: "apbio-u3-animal-physiology",
      title: "Homeostasis and transport",
      skill: "Explain feedback loops and compare circulatory designs.",
      lesson: {
        sections: [
          {
            heading: "Homeostasis",
            body: "Internal variables (temperature, pH, glucose, $CO_2$) are held within narrow ranges by **negative feedback** loops: a sensor detects deviation, a control center activates effectors that reverse the change. Thermoregulation, osmoregulation, and blood glucose control are classic examples.",
          },
          {
            heading: "Circulation and gas exchange",
            body: "**Closed** systems keep blood in vessels (arteries, capillaries, veins) allowing higher pressure and precise delivery. **Open** systems release hemolymph into a body cavity. Gas exchange surfaces maximize area and minimize diffusion distance — alveoli in lungs, gills in fish (countercurrent flow gives near-complete $O_2$ extraction), tracheal systems in insects.",
          },
        ],
        keyFormulas: [
          { name: "Negative feedback", statement: "Stimulus $\\to$ response opposes stimulus" },
          { name: "Fick's law", statement: "Diffusion rate $\\propto$ area $\\times$ gradient / distance" },
        ],
        workedExample: {
          problem: "Body temperature rises above set point. Trace the negative feedback response.",
          solution: "Hypothalamus (control) detects heat $\\to$ activates sweat glands and vasodilation (effectors) $\\to$ heat loss increases $\\to$ temperature returns to set point — stimulus reversed.",
        },
      },
      questions: [
        {
          id: "apbio-u3-animal-physiology-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most homeostatic mechanisms use ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "positive feedback"
                    },
                    {
                              "id": "b",
                              "text": "negative feedback"
                    },
                    {
                              "id": "c",
                              "text": "random fluctuation"
                    },
                    {
                              "id": "d",
                              "text": "open loops"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative feedback",
                              "statement": "Response opposes the stimulus to restore set point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative feedback is stabilizing; positive feedback amplifies and is rare.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Negative feedback",
          "commonErrors": [
                    "Confusing the two feedback types."
          ]
},
        },
        {
          id: "apbio-u3-animal-physiology-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fish gills achieve high $O_2$ extraction because of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "countercurrent exchange"
                    },
                    {
                              "id": "b",
                              "text": "open circulation"
                    },
                    {
                              "id": "c",
                              "text": "alveoli"
                    },
                    {
                              "id": "d",
                              "text": "positive feedback"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Countercurrent",
                              "statement": "Blood and water flow oppositely, maintaining gradient along entire gill."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Countercurrent exchange keeps the $O_2$ gradient steep along the whole gill filament — far more efficient than concurrent flow.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Countercurrent exchange",
          "commonErrors": [
                    "Thinking gills work like lungs."
          ]
},
        },
        {
          id: "apbio-u3-animal-physiology-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An open circulatory system has blood pressure approximately ___. Enter 0 for 'low' or 1 for 'high'.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Pressure",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Open system",
                              "statement": "No vessels means no pressure buildup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Open systems have low pressure since blood isn't confined to vessels — answer: low (0).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0$ (low).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0$ (low)",
          "commonErrors": [
                    "Applying closed-system pressure reasoning to open systems."
          ]
},
        },
        {
          id: "apbio-u3-animal-physiology-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare open and closed circulatory systems in terms of structure, pressure, and which animal groups use each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Open",
                              "statement": "Hemolymph bathes organs in hemocoel, low pressure — insects, most mollusks."
                    },
                    {
                              "kind": "comparison",
                              "name": "Closed",
                              "statement": "Blood confined to vessels, high pressure — vertebrates, earthworms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Open: blood leaves vessels into body cavity, low pressure, slower delivery — insects, most mollusks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Closed: blood stays in arteries/capillaries/veins, high pressure, faster precise delivery — vertebrates, annelids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct groups and functional trade-offs for both systems.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Open = hemocoel/low pressure/insects; closed = vessels/high pressure/vertebrates",
          "commonErrors": [
                    "Swapping the animal groups or pressure levels."
          ]
},
        },
      ],
    },
  ],
};
