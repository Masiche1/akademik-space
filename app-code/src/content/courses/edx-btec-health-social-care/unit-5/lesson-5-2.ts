import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edxbtechsc-u5-lesson-5-2",
  code: "5-2",
  title: "Metabolism, Nutrition and Hormonal Control",
  goal: "I CAN explain how the body converts food into energy and how hormones regulate metabolism.",
  standards: ["BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology"],
  
  vocabulary: [
    { term: "Basal metabolic rate", definition: "Minimum energy the body needs at rest to maintain vital functions." },
    { term: "Glycolysis", definition: "Breakdown of glucose into pyruvate, releasing energy, in the cytoplasm." },
    { term: "Aerobic respiration", definition: "Complete breakdown of glucose using oxygen, releasing large amounts of ATP." },
    { term: "Anaerobic respiration", definition: "Partial breakdown of glucose without oxygen, producing lactic acid." },
    { term: "Insulin", definition: "Hormone from the pancreas that lowers blood glucose by promoting uptake into cells." },
    { term: "Glucagon", definition: "Hormone from the pancreas that raises blood glucose by stimulating glycogen breakdown." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u5-l2-metabolism",
      title: "Metabolism and energy balance",
      skill: "Explain cellular respiration, BMR and the factors affecting energy balance.",
      lesson: {
        sections: [
          {
            heading: "Cellular respiration",
            body: "Cells release energy from glucose in **cellular respiration**. **Aerobic respiration**: $C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy (ATP)}$ — occurs in mitochondria, yields ~36-38 ATP per glucose. **Anaerobic respiration**: $C_6H_{12}O_6 \\rightarrow 2C_3H_6O_3 + \\text{small energy}$ — occurs in cytoplasm when oxygen is short (e.g. sprinting), producing lactic acid that must be removed.\n\nFood is digested to glucose, amino acids and fatty acids; glucose is used directly or stored as glycogen (liver/muscle) or fat.",
          },
          {
            heading: "Energy balance and BMR",
            body: "**Energy balance** = energy in (food/drink) minus energy out (BMR + physical activity + thermic effect of food).\n\n**BMR** is the largest resting component (~60-75% of daily use) and depends on age, sex, body size, muscle mass and thyroid activity. Positive balance → weight gain; negative balance → weight loss. Sustained positive energy balance is the main driver of obesity; obesity raises risk of type 2 diabetes, cardiovascular disease and joint problems.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy}$" },
          { name: "Anaerobic respiration", statement: "$C_6H_{12}O_6 \\rightarrow 2C_3H_6O_3 + \\text{small energy}$" },
          { name: "Energy balance", statement: "energy in − energy out = change in body energy stores" },
        ],
        workedExample: {
          problem: "Explain why a sprinter feels muscle pain and breathes heavily shortly after a 100 m race.",
          solution: "During the sprint, muscles demand energy faster than oxygen can be supplied, so anaerobic respiration dominates, producing lactic acid. Lactic acid build-up contributes to the burning pain; heavy breathing ('oxygen debt') supplies the oxygen needed to break it down and restore aerobic conditions.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-met-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State where aerobic respiration occurs in the cell and name the gas required for it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aerobic respiration",
                              "statement": "Mitochondria; requires oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitochondria named.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Oxygen named.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Mitochondria; oxygen."
},
        },
        {
          id: "edxbtechsc-u5-met-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the word equation for aerobic respiration and state how much more energy it releases compared with anaerobic respiration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Aerobic respiration",
                              "statement": "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equation stated correctly (glucose + oxygen → CO₂ + water + energy).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Much more energy than anaerobic (~36-38 ATP vs 2 ATP).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Glucose + oxygen → carbon dioxide + water + energy; far more energy than anaerobic."
},
        },
        {
          id: "edxbtechsc-u5-met-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by a positive energy balance and give two health consequences of sustained positive balance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Energy balance",
                              "statement": "Energy in minus energy out determines body stores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive balance = energy in exceeds energy out.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consequence 1, e.g. weight gain/obesity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consequence 2, e.g. type 2 diabetes risk or cardiovascular disease risk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Intake exceeds expenditure → fat stores rise → obesity and related disease risk."
},
        },
        {
          id: "edxbtechsc-u5-met-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A person eats a large meal and then goes for a 45-minute brisk walk. Explain, using the idea of energy balance and BMR, why the walk reduces the likelihood of weight gain compared with resting after the meal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy balance",
                              "statement": "Activity increases energy out, restoring balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Meal increases energy in.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "BMR unchanged at rest; surplus would be stored as fat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exercise raises energy out via increased respiration/muscle work.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Out closer to in → reduced/zero surplus → less fat storage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "The walk increases energy expenditure, offsetting the meal's energy input and reducing fat storage."
},
        },
        {
          id: "edxbtechsc-u5-met-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare aerobic and anaerobic respiration in terms of: location in the cell, oxygen requirement, products, and energy yield. Then explain why athletes breathe heavily after sprinting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Aerobic vs anaerobic",
                              "statement": "Same glucose, different oxygen use and yields."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Location: aerobic = mitochondria; anaerobic = cytoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Oxygen: aerobic needs O₂; anaerobic does not.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Products: aerobic → CO₂ + water; anaerobic → lactic acid.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Energy yield: aerobic ~36-38 ATP vs anaerobic 2 ATP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heavy breathing repays oxygen debt / removes lactic acid after sprint.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Full comparison table plus oxygen-debt explanation for post-sprint breathing."
},
        },
        {
          id: "edxbtechsc-u5-met-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the following with reference to metabolism:\n(a) why protein cannot be stored as protein in the body for later energy use;\n(b) how glucose is stored after a meal;\n(c) what happens to excess glucose and fatty acids;\n(d) two factors that raise BMR;\n(e) how BMR changes with age;\n(f) why two people of the same weight can have different daily energy needs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Metabolic storage",
                              "statement": "Glucose→glycogen→fat; amino acids deaminated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Amino acids are deaminated; nitrogen excreted as urea; carbon skeleton can be respired/stored as fat.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Excess glucose converted to glycogen in liver and muscles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Beyond glycogen capacity, glucose → fatty acids → stored as adipose fat.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two BMR factors, e.g. muscle mass, age, sex, thyroid activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) BMR falls with age (less muscle, lower thyroid activity).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Differences in muscle mass, activity level, sex and BMR.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All six parts answered with correct metabolic detail."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u5-l2-hormones",
      title: "Hormonal control of metabolism",
      skill: "Explain how insulin, glucagon and adrenaline regulate blood glucose and energy use.",
      lesson: {
        sections: [
          {
            heading: "Blood glucose regulation",
            body: "Blood glucose is maintained around $4-7\\ \\text{mmol/dm}^3$ (fasting ~4-6). The **pancreas** (islets of Langerhans) secretes:\n\n- **Insulin** — released when glucose is HIGH (after meals). Promotes glucose uptake into cells (especially muscle/liver), converts glucose to glycogen, lowers blood glucose.\n- **Glucagon** — released when glucose is LOW (between meals/fasting). Stimulates glycogen breakdown (glycogenolysis) and glucose release from the liver, raising blood glucose.\n\nThis is **negative feedback**: the hormone that corrects the change is released only while the change persists.",
          },
          {
            heading: "Adrenaline and stress response",
            body: "The **adrenal glands** (above kidneys) secrete **adrenaline** in the 'fight or flight' response. Adrenaline: raises heart rate and blood pressure, increases breathing rate, and stimulates glycogen→glucose breakdown in liver/muscle — increasing blood glucose and available energy for immediate action.\n\nHormones are chemical messengers travelling in the blood to **target cells** with specific receptors — slower but longer-lasting than nerve impulses.",
          },
        ],
        keyFormulas: [
          { name: "Negative feedback", statement: "high glucose → insulin → glucose falls; low glucose → glucagon → glucose rises" },
          { name: "Adrenaline", statement: "raises HR, BP, breathing rate and blood glucose for fight-or-flight" },
          { name: "Normal fasting glucose", statement: "$\\approx 4-6\\ \\text{mmol/dm}^3$" },
        ],
        workedExample: {
          problem: "Explain, using negative feedback, what happens to insulin and blood glucose in the 2 hours after a carbohydrate-rich meal.",
          solution: "The meal raises blood glucose; the pancreas detects this and secretes insulin. Insulin promotes glucose uptake into cells and conversion to glycogen, so blood glucose falls back towards normal. Once glucose is normal, insulin secretion drops — the correction is self-limiting.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-horm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the organ that produces insulin and state whether insulin raises or lowers blood glucose.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liver; lowers glucose"
                    },
                    {
                              "id": "b",
                              "text": "Pancreas; lowers glucose"
                    },
                    {
                              "id": "c",
                              "text": "Pancreas; raises glucose"
                    },
                    {
                              "id": "d",
                              "text": "Adrenal gland; raises glucose"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insulin",
                              "statement": "Pancreatic hormone that lowers blood glucose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insulin from pancreas; promotes glucose uptake → lowers blood glucose.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Pancreas; lowers glucose"
},
        },
        {
          id: "edxbtechsc-u5-horm-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the main trigger for glucagon release and describe its effect on blood glucose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Glucagon",
                              "statement": "Released when blood glucose is low; raises it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Released when blood glucose falls (low glucose).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Stimulates glycogen breakdown in liver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Releases glucose into blood → blood glucose rises back to normal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Low blood glucose triggers glucagon → glycogen breakdown → glucose released → levels rise."
},
        },
        {
          id: "edxbtechsc-u5-horm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what negative feedback means in the control of blood glucose, using insulin as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative feedback",
                              "statement": "Response counteracts the stimulus, restoring the set point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative feedback = the response reverses the original change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High glucose stimulates insulin secretion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insulin lowers glucose; when normal, insulin stops — system self-corrects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "The hormone response opposes the stimulus, keeping glucose near a set point."
},
        },
        {
          id: "edxbtechsc-u5-horm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the effects of adrenaline on the body during a 'fight or flight' response and explain the survival advantage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adrenaline",
                              "statement": "Prepares body for rapid action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raises heart rate and blood pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases breathing rate and blood glucose via glycogen breakdown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Diverts blood to muscles, dilates airways.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Advantage: rapid energy and oxygen delivery for escape/fight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Adrenaline boosts HR/BP/breathing/glucose, preparing muscles for immediate action."
},
        },
        {
          id: "edxbtechsc-u5-horm-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In type 1 diabetes the pancreas produces little or no insulin.\n(a) Explain why blood glucose rises after meals in this condition.\n(b) Describe how insulin injections treat it.\n(c) Explain what hypoglycaemia is and one way it can be treated.\n(d) Explain why diabetics must balance carbohydrate intake with insulin and activity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Type 1 diabetes",
                              "statement": "Insulin deficiency → glucose cannot enter cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Without insulin, glucose stays in blood; cells cannot take it up.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Injected insulin restores uptake/storage of glucose.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Hypoglycaemia = blood glucose below normal; treat with fast-acting carbohydrate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Matching intake/activity to insulin dose avoids hyper- and hypoglycaemia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Insulin deficiency → high glucose; injections replace it; balance prevents hypo/hyperglycaemia."
},
        },
        {
          id: "edxbtechsc-u5-horm-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain, with reference to hormones:\n(a) how the body keeps blood glucose constant overnight while fasting;\n(b) why a meal rich in carbohydrate raises blood glucose;\n(c) the role of glucagon in restoring balance;\n(d) how insulin and glucagon interact as an antagonistic pair;\n(e) one hormonal difference between the fed and fasted state;\n(f) why hormones act more slowly than nerve impulses but longer-lasting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Hormonal homeostasis",
                              "statement": "Insulin/glucagon form an antagonistic pair under negative feedback."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Fasting → low glucose → glucagon → glycogen breakdown → glucose maintained.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Carbohydrate digested to glucose → absorbed into blood → glucose rises.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Glucagon raises glucose by releasing stored glycogen as glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Antagonistic: insulin lowers, glucagon raises — together maintain set point.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Fed = high insulin/low glucagon; fasted = low insulin/high glucagon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Blood-borne to distant targets = slower onset but prolonged effect.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete hormonal homeostasis explanation across fed and fasted states."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u5-metabolism-notes",
      title: "Metabolism and hormonal control — notes",
      summary: "Cells respire glucose aerobically (lots of ATP) or anaerobically (lactic acid). Insulin lowers and glucagon raises blood glucose under negative feedback; adrenaline prepares for action.",
      sections: [
        { heading: "Key idea", body: "Energy balance = intake − expenditure; BMR is the largest resting component." },
        { heading: "Hormones", body: "Insulin and glucagon are an antagonistic pair; adrenaline mobilises glucose for fight-or-flight." },
      ],
    },
  ],
};
