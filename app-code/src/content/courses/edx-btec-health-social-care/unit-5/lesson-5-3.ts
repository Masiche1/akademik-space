import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edxbtechsc-u5-lesson-5-3",
  code: "5-3",
  title: "Common Chronic Conditions",
  goal: "I CAN describe the causes, risk factors and care needs of diabetes, hypertension and cardiovascular disease.",
  standards: ["BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology"],
  
  vocabulary: [
    { term: "Type 2 diabetes", definition: "Condition where the body becomes resistant to insulin or produces insufficient insulin; strongly linked to lifestyle." },
    { term: "Hypertension", definition: "Persistently raised blood pressure, typically above 140/90 mmHg." },
    { term: "Atherosclerosis", definition: "Build-up of fatty plaque (atheroma) inside artery walls, narrowing the lumen." },
    { term: "LDL cholesterol", definition: "'Bad' cholesterol that contributes to atheroma formation." },
    { term: "HbA1c", definition: "Blood test measuring average blood glucose over the previous ~3 months." },
    { term: "Comorbidity", definition: "Presence of two or more chronic conditions in the same person." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u5-l3-diabetes",
      title: "Diabetes mellitus",
      skill: "Explain the types, risk factors, complications and care needs of diabetes.",
      lesson: {
        sections: [
          {
            heading: "Types and risk factors",
            body: "**Type 1 diabetes**: autoimmune destruction of insulin-producing beta cells in the pancreas — insulin-dependent, usually diagnosed young, not lifestyle-caused.\n\n**Type 2 diabetes**: insulin resistance plus relative insulin deficiency — the pancreas still produces insulin but cells respond poorly. Strongly linked to **obesity, physical inactivity, poor diet, age, family history and ethnicity** (higher risk in South Asian and Black Caribbean/African groups). Gestational diabetes occurs in pregnancy.\n\n**Diagnosis**: fasting glucose, oral glucose tolerance test, and **HbA1c** (average glucose over ~3 months; diagnostic threshold $\\ge 48\\ \\text{mmol/mol}$).",
          },
          {
            heading: "Complications and care",
            body: "Uncontrolled diabetes causes **microvascular** damage (eyes → retinopathy, kidneys → nephropathy, nerves → neuropathy) and **macrovascular** disease (heart attack, stroke, peripheral artery disease).\n\n**Care needs**: regular HbA1c monitoring, blood glucose checks, medication or insulin, dietitian advice on carbohydrate intake, foot care (neuropathy hides injuries), eye and kidney screening, exercise, and education on recognising **hypoglycaemia** (shaking, sweating, confusion → give fast-acting carbohydrate) and **hyperglycaemia** (thirst, frequent urination, tiredness).",
          },
        ],
        keyFormulas: [
          { name: "HbA1c", statement: "$\\ge 48\\ \\text{mmol/mol}$ indicates diabetes; target usually $< 48$" },
          { name: "Complications", statement: "microvascular = eyes/kidneys/nerves; macrovascular = heart/stroke" },
          { name: "Hypoglycaemia", statement: "low blood glucose — treat with fast-acting carbohydrate" },
        ],
        workedExample: {
          problem: "Explain why a person with long-standing diabetes might develop a foot ulcer that fails to heal, and what care is needed.",
          solution: "Chronic high glucose damages nerves (neuropathy) and blood vessels in the feet, so injuries go unnoticed and heal slowly. Care needs include daily foot inspection, well-fitting footwear, podiatry review, blood glucose control and prompt treatment of any break in the skin to prevent infection and amputation.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-diab-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two major differences between type 1 and type 2 diabetes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diabetes types",
                              "statement": "Type 1 = autoimmune insulin-dependent; Type 2 = insulin resistance, lifestyle-linked."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cause: autoimmune vs insulin resistance/deficiency.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Treatment link: lifelong insulin vs lifestyle + oral medication (usually).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Type 1 = autoimmune, insulin-dependent; type 2 = insulin resistance, lifestyle-related."
},
        },
        {
          id: "edxbtechsc-u5-diab-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three common symptoms of undiagnosed diabetes and name the blood test used to monitor long-term glucose control.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diabetes symptoms",
                              "statement": "Thirst, polyuria, fatigue, blurred vision, slow healing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three symptoms, e.g. thirst, frequent urination, tiredness.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "HbA1c named.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any three symptoms plus HbA1c."
},
        },
        {
          id: "edxbtechsc-u5-diab-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how obesity increases the risk of developing type 2 diabetes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Obesity and insulin resistance",
                              "statement": "Excess adipose tissue promotes insulin resistance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Excess fat, especially visceral, is metabolically active.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fat cells release substances causing cells to respond poorly to insulin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insulin resistance → pancreas struggles → type 2 diabetes develops.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Obesity → insulin resistance → relative insulin deficiency → type 2 diabetes."
},
        },
        {
          id: "edxbtechsc-u5-diab-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish between microvascular and macrovascular complications of diabetes, giving one example of each and how each affects the person.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diabetes complications",
                              "statement": "Micro = small vessels (eyes/kidneys/nerves); macro = large vessels (heart/brain)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Microvascular defined — small blood vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Microvascular example with effect, e.g. retinopathy → sight loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Macrovascular defined — large vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Macrovascular example with effect, e.g. atherosclerosis → heart attack/stroke.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Microvascular (e.g. neuropathy/retinopathy) vs macrovascular (e.g. CHD/stroke)."
},
        },
        {
          id: "edxbtechsc-u5-diab-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care worker supports a client with type 2 diabetes.\n(a) Identify four elements a good diabetes care plan should include.\n(b) Explain why foot care is especially important.\n(c) Describe how to recognise and respond to hypoglycaemia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Diabetes care planning",
                              "statement": "Holistic plan: monitoring, diet, medication, education, screening."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four elements, e.g. glucose monitoring, diet, medication, foot/eye checks.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Neuropathy hides injuries; poor circulation slows healing → ulcer/amputation risk.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Recognise: shaking, sweating, confusion; respond: fast-acting carbohydrate, recheck.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Comprehensive care plan elements plus hypoglycaemia response."
},
        },
        {
          id: "edxbtechsc-u5-diab-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) the difference between type 1 and type 2 diabetes;\n(b) four risk factors for type 2 diabetes;\n(c) the role of insulin in the body;\n(d) three long-term complications;\n(e) how HbA1c is used in management;\n(f) two lifestyle measures that reduce risk or help control the condition;\n(g) why people with diabetes need regular foot and eye checks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diabetes overview",
                              "statement": "Types, risks, insulin role, complications, monitoring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Type 1 autoimmune/insulin-dependent vs type 2 resistance/lifestyle.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four risk factors, e.g. obesity, inactivity, family history, ethnicity/age.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Insulin lowers blood glucose by promoting cellular uptake.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three complications, e.g. retinopathy, neuropathy, CHD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) HbA1c reflects ~3-month average glucose for monitoring control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Two lifestyle measures, e.g. diet, exercise, weight loss, not smoking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Neuropathy/vascular damage hide and worsen foot/eye problems → screening detects early.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete diabetes overview covering all seven parts."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u5-l3-cardiovascular-risk",
      title: "Hypertension and cardiovascular disease",
      skill: "Explain risk factors, mechanisms and management of hypertension and cardiovascular disease.",
      lesson: {
        sections: [
          {
            heading: "Hypertension and atherosclerosis",
            body: "**Hypertension** = persistently raised blood pressure (usually $\\ge 140/90\\ \\text{mmHg}$). Causes include high salt intake, obesity, smoking, excessive alcohol, stress, genetics and kidney disease. Chronic hypertension damages artery walls.\n\n**Atherosclerosis** is the build-up of **atheroma** (fatty plaque) inside artery walls — cholesterol, especially **LDL** ('bad'), infiltrates the wall, causing inflammation, narrowing the lumen and reducing blood flow. A clot forming on a ruptured plaque can completely block an artery → heart attack or stroke.",
          },
          {
            heading: "Cardiovascular disease and management",
            body: "**Cardiovascular disease (CVD)** includes coronary heart disease (angina, myocardial infarction), stroke and peripheral vascular disease. Risk factors: hypertension, smoking, high LDL cholesterol, diabetes, obesity, inactivity, poor diet, family history, age and male sex.\n\n**Management**: lifestyle change (stop smoking, reduce salt/saturated fat, exercise, weight loss), medication (antihypertensives, statins, antiplatelets), and screening (blood pressure checks, cholesterol tests). Early detection greatly reduces risk of heart attack and stroke.",
          },
        ],
        keyFormulas: [
          { name: "Hypertension", statement: "BP persistently $\\ge 140/90\\ \\text{mmHg}$" },
          { name: "Atheroma", statement: "LDL cholesterol + inflammation → plaque → narrowed arteries" },
          { name: "CVD risk factors", statement: "smoking, hypertension, high LDL, diabetes, obesity, inactivity" },
        ],
        workedExample: {
          problem: "Explain how smoking contributes to both hypertension and atherosclerosis.",
          solution: "Nicotine raises heart rate and constricts blood vessels, increasing blood pressure. Smoking also damages the endothelium (inner artery lining), promotes inflammation and lowers HDL ('good') cholesterol while raising LDL, accelerating atheroma formation — together raising CVD risk.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-cvdis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State what hypertension means and give the typical blood-pressure threshold used to define it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hypertension",
                              "statement": "Persistently raised blood pressure, $\\ge 140/90$ mmHg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hypertension = persistently high blood pressure.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Threshold $\\ge 140/90$ mmHg stated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Persistently raised BP, typically $\\ge 140/90$ mmHg."
},
        },
        {
          id: "edxbtechsc-u5-cvdis-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three modifiable risk factors for cardiovascular disease.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CVD risk factors",
                              "statement": "Smoking, hypertension, cholesterol, diabetes, obesity, inactivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three modifiable factors, e.g. smoking, high salt/fat diet, inactivity.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any three: smoking, hypertension, poor diet, inactivity, obesity, diabetes."
},
        },
        {
          id: "edxbtechsc-u5-cvdis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how atherosclerosis develops inside an artery and how it reduces blood flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Atherosclerosis",
                              "statement": "LDL-driven plaque build-up narrowing arteries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LDL cholesterol and other substances deposit in artery wall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inflammation → fibrous plaque (atheroma) forms and grows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Plaque narrows lumen → less blood flow; can rupture → clot → blockage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cholesterol plaque builds up, inflames and narrows the artery; rupture can cause a clot."
},
        },
        {
          id: "edxbtechsc-u5-cvdis-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why hypertension is called a 'silent killer' and describe two long-term effects on the body if it is not controlled.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Hypertension",
                              "statement": "Often asymptomatic yet damages vessels/organs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Usually no symptoms → people unaware → 'silent'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Damages artery walls/endothelium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two effects, e.g. stroke, heart attack, kidney damage, heart failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Regular BP checks enable early treatment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Asymptomatic yet damages arteries and organs — stroke, heart attack, kidney failure."
},
        },
        {
          id: "edxbtechsc-u5-cvdis-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A client has been diagnosed with hypertension.\n(a) Explain three lifestyle changes that can help lower blood pressure.\n(b) Explain why medication may also be prescribed.\n(c) Describe how a care worker could support the client to make these changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hypertension management",
                              "statement": "Lifestyle first; medication when needed; support improves adherence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three lifestyle changes, e.g. reduce salt, lose weight, exercise, stop smoking, limit alcohol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Medication (e.g. antihypertensives) needed when lifestyle alone insufficient.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Support: education, monitoring, encouragement, help accessing services.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lifestyle + medication + care-worker support reduce BP and CVD risk."
},
        },
        {
          id: "edxbtechsc-u5-cvdis-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) what cardiovascular disease includes;\n(b) five risk factors;\n(c) how atheroma forms;\n(d) the difference between angina and a myocardial infarction;\n(e) why diabetes increases CVD risk;\n(f) three ways to reduce CVD risk;\n(g) why early screening matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CVD overview",
                              "statement": "CHD, stroke, peripheral disease; driven by atheroma and risk factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CVD includes CHD, stroke, peripheral vascular disease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Five risk factors listed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) LDL cholesterol deposits → plaque → narrowing/rupture.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Angina = reversible chest pain from reduced flow; MI = permanent blockage → heart muscle death.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Diabetes damages vessels and worsens atheroma → higher CVD risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three reductions, e.g. stop smoking, healthy diet, exercise, control BP/diabetes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Early detection allows lifestyle/medication before irreversible damage.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete CVD overview covering all seven parts."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u5-chronic-notes",
      title: "Common chronic conditions — notes",
      summary: "Type 2 diabetes is driven by insulin resistance and lifestyle; hypertension and atherosclerosis are the main pathways to CVD.",
      sections: [
        { heading: "Key idea", body: "Chronic conditions share lifestyle risk factors — obesity, inactivity, smoking, poor diet." },
        { heading: "Management", body: "Monitoring (HbA1c, BP), medication and lifestyle change together reduce complications." },
      ],
    },
  ],
};
