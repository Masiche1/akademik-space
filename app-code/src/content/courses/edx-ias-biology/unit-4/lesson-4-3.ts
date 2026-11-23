import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ediasbio-u4-lesson-4-3",
  code: "4-3",
  title: "Blood Glucose and Temperature Homeostasis",
  goal: "I CAN explain hormonal control of blood glucose and temperature regulation.",
  standards: ["WBI15 Internal environment", "Homeostasis"],
  
  vocabulary: [
    { term: "Homeostasis", definition: "Maintenance of a stable internal environment despite external changes." },
    { term: "Insulin", definition: "Hormone from pancreatic beta cells that lowers blood glucose." },
    { term: "Glucagon", definition: "Hormone from pancreatic alpha cells that raises blood glucose." },
    { term: "Glycogen", definition: "Storage carbohydrate in liver and muscle made from glucose." },
    { term: "Diabetes", definition: "Condition where blood glucose control fails — type 1 (no insulin) or type 2 (insulin resistance)." },
    { term: "Thermoregulation", definition: "Control of body temperature by the hypothalamus and effectors." },
    { term: "Vasodilation / vasoconstriction", definition: "Widening / narrowing of blood vessels near the skin to control heat loss." },
    { term: "Negative feedback", definition: "Response that opposes a change to restore a set point." },
  ],
  concepts: [
    {
      id: "ediasbio-u4-glucose",
      title: "Blood glucose regulation",
      skill: "Explain insulin and glucagon control of blood glucose and diabetes.",
      lesson: {
        sections: [
          {
            heading: "Normal control",
            body: "Blood glucose is kept near a set point (about 4–6 mmol/L fasting). Beta cells in the pancreatic islets release insulin when glucose rises (e.g. after a meal); alpha cells release glucagon when glucose falls (e.g. between meals or during exercise).",
          },
          {
            heading: "Actions",
            body: "Insulin lowers glucose: liver and muscle cells take up glucose and convert it to glycogen (glycogenesis); glucose is also converted to fat. Glucagon raises glucose: glycogen is broken down to glucose (glycogenolysis) and released; fats can also be used.",
          },
          {
            heading: "Diabetes and feedback",
            body: "Type 1 diabetes: autoimmune destruction of beta cells — no insulin; treated with insulin injections. Type 2 diabetes: cells become resistant to insulin or insulin production falls; linked to obesity and diet. Both cause high blood glucose, glucose in urine and thirst.",
          },
        ],
        keyFormulas: [
          { name: "Glucose high", statement: "Insulin ↑ → glucose → glycogen; uptake by cells" },
          { name: "Glucose low", statement: "Glucagon ↑ → glycogen → glucose released" },
          { name: "Set point", statement: "Fasting blood glucose ≈ 4–6 mmol/L" },
        ],
        workedExample: {
          problem: "A person eats a carbohydrate-rich meal. Describe the hormonal response.",
          solution: "Blood glucose rises → beta cells detect this → insulin released → liver and muscle cells take up glucose and store it as glycogen → blood glucose falls back to the set point (negative feedback).",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-glu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Glucagon"
                    },
                    {
                              "id": "b",
                              "text": "Adrenaline"
                    },
                    {
                              "id": "c",
                              "text": "Insulin"
                    },
                    {
                              "id": "d",
                              "text": "Thyroxine"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insulin",
                              "statement": "Lowers blood glucose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insulin reduces blood glucose.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Insulin"
},
        },
        {
          id: "ediasbio-u4-glu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two pancreatic cell types that release insulin and glucagon.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Islets of Langerhans",
                              "statement": "Alpha and beta cells in pancreas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beta cells release insulin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Alpha cells release glucagon.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Beta (insulin) and alpha (glucagon) cells"
},
        },
        {
          id: "ediasbio-u4-glu-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how insulin lowers blood glucose after a meal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Insulin action",
                              "statement": "Promotes glucose uptake and glycogen storage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blood glucose rises after carbohydrate digestion and absorption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Beta cells in pancreatic islets detect the rise and release insulin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insulin makes liver and muscle cells take up glucose and convert it to glycogen.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Blood glucose falls back to the set point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Insulin → glucose uptake and glycogen storage",
          "commonErrors": [
                    "Saying insulin is made in the liver."
          ]
},
        },
        {
          id: "ediasbio-u4-glu-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish between type 1 and type 2 diabetes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diabetes types",
                              "statement": "Autoimmune vs insulin resistance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Type 1: autoimmune destruction of pancreatic beta cells → little or no insulin produced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Type 1 typically starts young; treated with insulin injections.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Type 2: cells become resistant to insulin or insulin production decreases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Type 2 is linked to obesity and lifestyle; may be managed by diet/exercise.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both cause high blood glucose and glucose in urine.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Type 1 = no insulin; type 2 = insulin resistance"
},
        },
        {
          id: "ediasbio-u4-glu-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the hormone that raises blood glucose and its source cells.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how glucagon raises blood glucose.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the fasting blood glucose set point range.",
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
                              "name": "Glucagon",
                              "statement": "Counter-regulatory hormone for low glucose."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Glucagon from alpha cells of pancreatic islets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both hormone and cells named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Glucagon stimulates glycogen breakdown (glycogenolysis) in liver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Glucose released into blood, raising concentration.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "About 4–6 mmol/L.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reasonable range given.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Glucagon: alpha cells → glycogenolysis"
},
        },
        {
          id: "ediasbio-u4-glu-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define homeostasis. (b) Name the hormone that lowers blood glucose. (c) Name the hormone that raises it. (d) Name the cells releasing each. (e) Describe insulin's action on the liver. (f) Describe glucagon's action. (g) Distinguish type 1 from type 2 diabetes. (h) What is negative feedback in this context?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define homeostasis.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Hormone lowering glucose.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Hormone raising glucose.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Cells releasing each hormone.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Insulin action on liver.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Glucagon action.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Type 1 vs type 2.",
                    "marks": 2
          },
          {
                    "label": "h",
                    "prompt": "Define negative feedback here.",
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
                              "name": "Glucose homeostasis",
                              "statement": "Insulin and glucagon feedback."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Maintaining stable internal conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Insulin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Glucagon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Beta cells → insulin; alpha cells → glucagon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both pairs correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Glucose → glycogen storage (glycogenesis).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Glycogen → glucose release (glycogenolysis).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Type 1: no insulin (autoimmune); type 2: insulin resistance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Correct distinction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Change in glucose opposes itself via hormones to restore set point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Insulin/glucagon negative feedback",
          "commonErrors": [
                    "Reversing insulin and glucagon effects."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u4-temp",
      title: "Temperature regulation",
      skill: "Describe the role of the hypothalamus and effectors in thermoregulation.",
      lesson: {
        sections: [
          {
            heading: "The thermoregulatory centre",
            body: "The hypothalamus contains thermoreceptors and acts as the body's thermostat, keeping core temperature near 37°C. Skin receptors also detect temperature changes.",
          },
          {
            heading: "Cooling mechanisms",
            body: "When temperature rises: vasodilation increases blood flow to skin → more heat loss by radiation; sweating secretes water that evaporates and cools; hairs lie flat. When temperature falls: vasoconstriction reduces skin blood flow; hairs trap air (insulation); shivering generates heat by muscle contraction; adrenaline increases metabolic rate.",
          },
          {
            heading: "Feedback and ectotherms",
            body: "Effectors return temperature to the set point — negative feedback. Endotherms (mammals, birds) generate their own heat; ectotherms (reptiles, amphibians, fish, insects) gain heat from the environment and behaviourally thermoregulate.",
          },
        ],
        keyFormulas: [
          { name: "Too hot", statement: "Vasodilation + sweating + hairs flat" },
          { name: "Too cold", statement: "Vasoconstriction + shivering + hairs erect" },
          { name: "Set point", statement: "Core temperature ≈ 37°C" },
        ],
        workedExample: {
          problem: "Explain what happens on a cold day using negative feedback.",
          solution: "Skin temperature falls → hypothalamus detects drop → signals effectors → blood vessels to skin constrict (less heat loss), hairs erect (insulation), muscles shiver (heat) → temperature rises back to ~37°C.",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-temp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the brain controls body temperature?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cerebellum"
                    },
                    {
                              "id": "b",
                              "text": "Hypothalamus"
                    },
                    {
                              "id": "c",
                              "text": "Medulla"
                    },
                    {
                              "id": "d",
                              "text": "Cerebrum"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hypothalamus",
                              "statement": "Thermoregulatory centre of the brain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hypothalamus controls temperature.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Hypothalamus"
},
        },
        {
          id: "ediasbio-u4-temp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two responses of the body when it is too hot.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cooling",
                              "statement": "Increase heat loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vasodilation and/or sweating (any two of vasodilation, sweating, hairs flat).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second correct response stated.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Vasodilation, sweating, hairs lie flat"
},
        },
        {
          id: "ediasbio-u4-temp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how vasoconstriction helps the body conserve heat.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vasoconstriction",
                              "statement": "Narrowing vessels reduces heat loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When cold, arterioles near the skin constrict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Less blood flows near the skin surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduced blood flow means less heat lost to surroundings by radiation/convection.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Core temperature is preserved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Constricted vessels → less skin blood flow → less heat loss"
},
        },
        {
          id: "ediasbio-u4-temp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the role of sweating in temperature regulation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Evaporative cooling",
                              "statement": "Sweat evaporation removes heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When hot, sweat glands secrete sweat onto skin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaporation of sweat requires heat energy taken from the skin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This lowers skin temperature and cools the blood.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Combined with vasodilation it increases total heat loss.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Restores temperature toward the 37°C set point.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sweat evaporates → heat removed → cooling"
},
        },
        {
          id: "ediasbio-u4-temp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the thermoregulatory centre.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State two warming responses.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Distinguish endotherms from ectotherms.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Thermoregulation",
                              "statement": "Hypothalamus coordinates effectors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hypothalamus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Vasoconstriction, shivering, hairs erect (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second response named.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Endotherms generate heat internally (mammals, birds).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ectotherms gain heat from environment (reptiles, fish).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct examples for each group.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hypothalamus; warming responses; endo vs ecto"
},
        },
        {
          id: "ediasbio-u4-temp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define homeostasis and thermoregulation. (b) Name the thermoregulatory centre. (c) State the set point for core temperature. (d) Describe two cooling mechanisms. (e) Describe two warming mechanisms. (f) Explain the role of vasodilation. (g) What is negative feedback here?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define homeostasis and thermoregulation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the thermoregulatory centre.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State the set point.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Two cooling mechanisms.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two warming mechanisms.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Role of vasodilation.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define negative feedback.",
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
                              "name": "Thermoregulation",
                              "statement": "Hypothalamus + effectors maintain ~37°C."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Homeostasis: stable internal environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Thermoregulation: control of body temperature.",
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
                              "reasoning": "About 37°C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Sweating and/or vasodilation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Second correct mechanism.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Vasoconstriction and/or shivering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second correct mechanism.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Widens skin vessels → more blood flow → more heat loss.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Responses oppose the stimulus to restore the set point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Thermoregulatory negative feedback",
          "commonErrors": [
                    "Saying vasodilation conserves heat."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u4-homeo-notes",
      title: "Blood glucose and temperature — notes",
      summary: "Insulin/glucagon control glucose via negative feedback; hypothalamus controls temperature via vasomotor, sweating and shivering effectors.",
      sections: [
        { heading: "Glucose", body: "High glucose → insulin (beta cells) → glycogen storage. Low glucose → glucagon (alpha cells) → glycogen breakdown. Type 1 = no insulin; type 2 = resistance." },
        { heading: "Temperature", body: "Hypothalamus set point ~37°C. Hot: vasodilation, sweating, hairs flat. Cold: vasoconstriction, shivering, hairs erect." },
        { heading: "Feedback", body: "Both systems use negative feedback to hold a set point." },
      ],
    },
  ],
};
