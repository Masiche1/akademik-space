import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edxbtechsc-u5-lesson-5-1",
  code: "5-1",
  title: "Cardiovascular and Respiratory Physiology",
  goal: "I CAN explain how the heart, blood vessels and lungs work together to supply oxygen and remove carbon dioxide.",
  standards: ["BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology"],
  
  vocabulary: [
    { term: "Cardiac output", definition: "Volume of blood pumped by the heart per minute; CO = heart rate x stroke volume." },
    { term: "Stroke volume", definition: "Volume of blood pumped from one ventricle per beat." },
    { term: "Alveoli", definition: "Tiny air sacs in the lungs where gas exchange occurs." },
    { term: "Systole", definition: "Phase of the cardiac cycle when the heart muscle contracts." },
    { term: "Diastole", definition: "Phase of the cardiac cycle when the heart muscle relaxes and fills with blood." },
    { term: "Vital capacity", definition: "Maximum amount of air a person can exhale after a maximum inhalation." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u5-l1-cardiovascular",
      title: "The cardiovascular system",
      skill: "Describe the structure and function of the heart, blood vessels and circulation at a systems level.",
      lesson: {
        sections: [
          {
            heading: "Heart structure and the cardiac cycle",
            body: "The heart is a four-chambered muscular pump: right atrium and ventricle pump deoxygenated blood to the lungs; left atrium and ventricle pump oxygenated blood to the body. **Valves** prevent backflow. The **cardiac cycle** alternates between **systole** (contraction, ~0.4 s) and **diastole** (relaxation/filling, ~0.5 s), driven by the sinoatrial (SA) node pacemaker.\n\n**Cardiac output** $CO = HR \\times SV$ (heart rate x stroke volume). A typical resting adult value is about $5\\ \\text{dm}^3\\ \\text{min}^{-1}$; it rises during exercise.",
          },
          {
            heading: "Blood vessels and circulation",
            body: "Three vessel types form a closed loop: **arteries** carry blood away from the heart under high pressure (thick muscular walls, no valves except at the heart); **veins** return blood to the heart (thin walls, valves to prevent backflow, rely on skeletal muscle pump); **capillaries** are single-cell-thick exchange vessels linking arteries and veins.\n\nThe **pulmonary circuit** (heart to lungs and back) oxygenates blood; the **systemic circuit** (heart to body and back) delivers oxygen and nutrients and removes waste.",
          },
        ],
        keyFormulas: [
          { name: "Cardiac output", statement: "$CO = HR \\times SV$" },
          { name: "Cardiac cycle", statement: "systole $\\approx 0.4\\ \\text{s}$, diastole $\\approx 0.5\\ \\text{s}$; SA node sets rhythm" },
          { name: "Vessel roles", statement: "arteries = away, veins = return, capillaries = exchange" },
        ],
        workedExample: {
          problem: "A person's heart rate is 70 beats per minute and stroke volume is 70 cm³. Calculate cardiac output and explain what happens to it during exercise.",
          solution: "CO = HR x SV = 70 x 70 = 4,900 cm³/min = 4.9 dm³/min. During exercise, heart rate rises (sympathetic stimulation of the SA node) and stroke volume increases (stronger ventricular contraction), so CO rises to meet the muscles' oxygen demand.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-cv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the two circuits of the circulatory system and the role of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Circulatory circuits",
                              "statement": "Pulmonary = heart-lungs; systemic = heart-body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pulmonary circuit identified.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Systemic circuit identified with correct roles.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pulmonary circuit carries deoxygenated blood to the lungs for oxygenation; systemic circuit carries oxygenated blood to the body."
},
        },
        {
          id: "edxbtechsc-u5-cv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the phase of the cardiac cycle when the heart contracts, and state approximately how long one complete cycle takes at rest.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Systole; about 0.9 s"
                    },
                    {
                              "id": "b",
                              "text": "Diastole; about 0.9 s"
                    },
                    {
                              "id": "c",
                              "text": "Systole; about 0.4 s"
                    },
                    {
                              "id": "d",
                              "text": "Diastole; about 0.4 s"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cardiac cycle",
                              "statement": "systole = contraction; full cycle ~0.9 s."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contraction is systole; systole ~0.4 s + diastole ~0.5 s = ~0.9 s.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Systole; about 0.9 s"
},
        },
        {
          id: "edxbtechsc-u5-cv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why arteries have thick muscular walls while capillaries are only one cell thick. Refer to the different functions of these vessels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Structure-function",
                              "statement": "Vessel walls are adapted to the pressure and role of the vessel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arteries carry blood at high pressure directly from the heart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thick muscular/elastic walls withstand pressure and help maintain it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capillaries are thin to allow rapid diffusion/exchange of substances.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Arteries need thick walls for high-pressure transport; capillaries are thin-walled for efficient exchange."
},
        },
        {
          id: "edxbtechsc-u5-cv-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what happens to cardiac output during exercise and explain the two factors that produce this change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "$CO = HR \\times SV$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CO increases during exercise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heart rate rises — sympathetic stimulation of the SA node.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stroke volume rises — stronger/faster ventricular contraction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both raise CO to meet increased oxygen demand of muscles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CO rises because heart rate and stroke volume both increase, meeting the muscles' oxygen demand."
},
        },
        {
          id: "edxbtechsc-u5-cv-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare arteries, veins and capillaries in a table covering: direction of blood flow, wall thickness, presence of valves, and blood pressure. Then state one structural feature of veins that helps return blood to the heart.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Vessel comparison",
                              "statement": "Arteries/veins/capillaries differ in pressure, wall and valves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direction of flow compared for all three.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Wall thickness compared for all three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valves: veins have them, arteries do not.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blood pressure: high in arteries, low in veins/capillaries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extra feature named: skeletal muscle pump / valves prevent backflow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Accurate three-way comparison plus a named mechanism of venous return."
},
        },
        {
          id: "edxbtechsc-u5-cv-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient has a resting heart rate of 80 bpm and stroke volume of 65 cm³.\n(a) Calculate cardiac output in dm³/min.\n(b) Explain the role of the SA node in controlling heart rate.\n(c) Describe how atherosclerosis affects arteries and why this raises blood pressure.\n(d) Explain two ways regular aerobic exercise improves cardiovascular health.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cardiac output",
                              "statement": "$CO = HR \\times SV$"
                    },
                    {
                              "kind": "definition",
                              "name": "SA node",
                              "statement": "Sinoatrial node — pacemaker initiating each heartbeat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CO = 80 x 65 = 5,200 cm³/min = 5.2 dm³/min.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) SA node in right atrium generates electrical impulses setting heart rate.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Atherosclerosis = fatty plaque narrowing arteries; heart must pump harder → raised BP.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two valid benefits, e.g. lowers resting HR, improves vessel elasticity, reduces BP.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CO = 5.2 dm³/min; SA node pacemaker; atherosclerosis raises BP; exercise benefits."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u5-l1-respiratory",
      title: "The respiratory system",
      skill: "Explain ventilation, gas exchange at the alveoli and factors affecting breathing rate.",
      lesson: {
        sections: [
          {
            heading: "Ventilation and gas exchange",
            body: "Air travels: trachea → bronchi → bronchioles → **alveoli**. The **diaphragm** and intercostal muscles drive **ventilation**: inhalation (diaphragm contracts/flattens, chest expands, pressure falls) and exhalation (muscles relax, elastic recoil).\n\nGas exchange happens by **diffusion** across the alveolar-capillary membrane — thin walls, huge surface area, moist lining. Oxygen diffuses into blood; carbon dioxide diffuses out. Oxygen binds to haemoglobin in red blood cells.",
          },
          {
            heading: "Breathing rate and lung volumes",
            body: "Breathing rate is set by the medulla oblongata responding to blood $CO_2$ levels (and $O_2$ in severe hypoxia). Normal resting rate $\\approx 12-20$ breaths/min, rising with exercise.\n\nKey volumes: **tidal volume** (~500 cm³ per breath), **vital capacity** (max exhaled after max inhaled), **residual volume** (air always left in lungs). Smoking damages cilia and alveolar walls (emphysema), reducing gas exchange.",
          },
        ],
        keyFormulas: [
          { name: "Ventilation", statement: "inhalation: diaphragm contracts, chest volume rises, air flows in" },
          { name: "Diffusion", statement: "gases move down their concentration gradient across thin membranes" },
          { name: "Breathing control", statement: "medulla oblongata responds mainly to blood $CO_2$" },
        ],
        workedExample: {
          problem: "Explain why carbon dioxide, not oxygen, is the main driver of breathing rate.",
          solution: "Rising blood CO₂ (from cellular respiration) lowers blood pH; chemoreceptors in the medulla oblongata detect this and increase ventilation to blow off CO₂. Oxygen levels are normally adequate and only strongly stimulate breathing when severely low.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u5-resp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the structure where gas exchange occurs and state which two gases are exchanged.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alveoli",
                              "statement": "Air sacs where O₂ enters blood and CO₂ leaves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alveoli named.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Oxygen and carbon dioxide named.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Alveoli; oxygen diffuses in, carbon dioxide diffuses out."
},
        },
        {
          id: "edxbtechsc-u5-resp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe the role of the diaphragm in inhalation.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It relaxes and rises, increasing chest volume"
                    },
                    {
                              "id": "b",
                              "text": "It contracts and flattens, increasing chest volume so air flows in"
                    },
                    {
                              "id": "c",
                              "text": "It contracts and rises, decreasing chest volume"
                    },
                    {
                              "id": "d",
                              "text": "It relaxes and flattens, decreasing chest volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Diaphragm",
                              "statement": "Contracts/flattens on inhalation → volume up, pressure down, air in."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inhalation: diaphragm contracts and flattens; thoracic volume rises, pressure falls, air enters.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) It contracts and flattens, increasing chest volume so air flows in"
},
        },
        {
          id: "edxbtechsc-u5-resp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two features of the alveoli that make them efficient for gas exchange.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Alveolar adaptations",
                              "statement": "Thin walls, large surface area, moist lining, rich capillary supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First valid feature, e.g. thin walls (one cell thick) short diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second valid feature, e.g. huge surface area / moist lining / dense capillary network.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Linked to diffusion efficiency.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Any two of: thin walls, large surface area, moist lining, capillary supply — all speeding diffusion."
},
        },
        {
          id: "edxbtechsc-u5-resp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why breathing rate increases during exercise, referring to the role of carbon dioxide and the medulla oblongata.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Breathing control",
                              "statement": "Medulla detects blood CO₂ and raises ventilation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exercise raises cellular respiration → more CO₂ produced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blood CO₂ rises, lowering pH; chemoreceptors detect this.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Medulla oblongata sends signals to increase ventilation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Purpose: blow off excess CO₂ and increase O₂ supply to muscles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Rising CO₂ detected by medulla → faster, deeper breathing to remove CO₂ and supply O₂."
},
        },
        {
          id: "edxbtechsc-u5-resp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A long-term smoker develops emphysema.\n(a) State what emphysema is.\n(b) Explain how it affects gas exchange.\n(c) Describe two effects on the person's breathing and daily life.\n(d) Explain why stopping smoking can slow further damage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Emphysema",
                              "statement": "Destruction of alveolar walls reducing gas-exchange surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Emphysema defined as damage/destruction of alveoli walls.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Reduced surface area → less efficient diffusion → breathlessness.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two effects, e.g. shortness of breath, reduced exercise tolerance, fatigue, chronic cough.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Removes ongoing toxin exposure so remaining alveoli are not further damaged.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Emphysema destroys alveoli, cutting gas-exchange area; quitting stops further damage."
},
        },
        {
          id: "edxbtechsc-u5-resp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare inhalation and exhalation during quiet breathing, covering: diaphragm position, chest volume, pressure inside lungs, and direction of air movement. Then explain: (a) the role of elastic recoil in exhalation; (b) how the intercostal muscles assist; (c) what happens to tidal volume during exercise; (d) why residual volume cannot be exhaled.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Inhalation vs exhalation",
                              "statement": "Volume/pressure changes drive airflow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparison covers diaphragm, volume, pressure and air direction for both phases.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(a) Elastic recoil of lungs/chest wall pushes air out passively.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) External intercostals raise ribs on inhalation; internal lower them on exhalation.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Tidal volume increases during exercise to move more air.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Residual volume remains to keep alveoli inflated/prevent collapse.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete comparison plus explanations of recoil, intercostals, exercise tidal volume and residual volume."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u5-cardioresp-notes",
      title: "Cardiovascular and respiratory physiology — notes",
      summary: "The heart pumps via double circulation; CO = HR x SV. Lungs oxygenate blood by diffusion at alveoli driven by ventilation.",
      sections: [
        { heading: "Key idea", body: "Heart rate and stroke volume together set cardiac output; breathing rate is controlled mainly by blood CO₂." },
        { heading: "Examiners' favourite", body: "Link structure to function: thick artery walls for pressure, thin alveoli for diffusion, valves in veins for one-way flow." },
      ],
    },
  ],
};
