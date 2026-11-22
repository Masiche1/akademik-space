import type { Lesson } from "../../../types.ts";

export const lesson202: Lesson = {
  id: "edxbtechsc-u2-lesson-2-2",
  code: "2-2",
  title: "Lifestyle Factors and Health",
  goal: "I CAN explain how lifestyle choices — diet, exercise, smoking, alcohol and stress — influence health outcomes.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 2: Human Biology and Health",
  ],
  vocabulary: [
    {
      term: "Lifestyle factors",
      definition:
        "Modifiable behaviours that affect health — diet, physical activity, smoking, alcohol consumption, sleep, stress.",
    },
    {
      term: "Risk factor",
      definition:
        "A characteristic or behaviour that increases the likelihood of disease, e.g. smoking for lung cancer.",
    },
    {
      term: "Protective factor",
      definition:
        "A characteristic that reduces disease risk, e.g. regular exercise for cardiovascular health.",
    },
    {
      term: "Addiction",
      definition:
        "Compulsive dependence on a substance or behaviour despite harmful consequences.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u2-l2-diet",
      title: "Diet, Exercise and Lifestyle",
      skill: "Explain how diet, physical activity and sleep affect health.",
      lesson: {
        sections: [
          {
            heading: "Diet and nutrition",
            body: "A balanced diet provides energy, protein for growth/repair, carbohydrates for fuel, fats for hormones/cell membranes, vitamins and minerals for metabolic processes, and fibre/water for digestive health.\n\nDiet-related conditions: obesity (excess energy intake), malnutrition (deficiency), type 2 diabetes, cardiovascular disease, some cancers. Portion sizes, food processing and sugar/fat/salt content matter — not just food groups.",
          },
          {
            heading: "Exercise, sleep and stress",
            body: "Regular physical activity strengthens cardiovascular and musculoskeletal systems, improves mood (endorphins), regulates weight and reduces chronic disease risk. The UK guideline is ~150 minutes moderate activity weekly.\n\nSleep is restorative — during deep sleep the body repairs tissue and consolidates memory; chronic sleep deprivation impairs immunity and cognition. Stress activates the fight-or-flight response; chronic stress elevates cortisol, contributing to hypertension, poor immunity and mental health problems.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy balance",
            statement: "Weight stable when energy intake = energy expenditure.",
          },
          {
            name: "Risk vs protective",
            statement:
              "Smoking/alcohol excess = risk; exercise/fruit-veg/fibre = protective.",
          },
        ],
        workedExample: {
          problem:
            "Explain why two people eating similar calories can have different health outcomes.",
          solution:
            "Calorie count ignores quality — nutrient-dense foods (fruit, veg, whole grains) vs energy-dense processed foods affect health differently; exercise, genetics and sleep also mediate outcomes.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l2-diet-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which nutrient is the body's main source of immediate energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Vitamin C" },
              { id: "c", text: "Carbohydrate" },
              { id: "d", text: "Fibre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbohydrate",
                statement: "Primary energy source — broken down to glucose.",
              },
            ],
            steps: [
              {
                reasoning: "Carbohydrates = main energy fuel.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Carbohydrate",
            commonErrors: ["Confusing protein's role."],
          },
        },
        {
          id: "edxbtechsc-u2-l2-diet-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how chronic sleep deprivation can affect health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sleep and health",
                statement:
                  "Sleep is restorative; deprivation impairs immunity, cognition and increases disease risk.",
              },
            ],
            steps: [
              {
                reasoning: "Sleep's restorative role.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Immune/cognitive effects of deprivation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chronic disease/metabolic links.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poor sleep weakens immunity, impairs cognition and raises risks of obesity, diabetes and cardiovascular disease.",
            commonErrors: ["Only mentioning tiredness.", "No mechanism."],
          },
        },
        {
          id: "edxbtechsc-u2-l2-diet-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how chronic stress can lead to physical illness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stress pathway",
                statement:
                  "Chronic stress → sustained cortisol/adrenaline → hypertension, immunosuppression, metabolic changes.",
              },
            ],
            steps: [
              {
                reasoning: "Fight-or-flight response described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chronic activation → cortisol elevation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Physical consequences linked.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent causal chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Chronic stress keeps stress hormones elevated → hypertension, weakened immunity, metabolic disruption → physical illness.",
            commonErrors: [
              "Stress = mental only.",
              "No physiological pathway.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l2-diet-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A workplace wants to improve employees' health.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify three lifestyle factors the employer could target.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest an intervention for each factor.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether workplace health programmes work.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Workplace health",
                statement:
                  "Employers can influence diet, activity, stress and substance use through environment and policy.",
              },
            ],
            steps: [
              {
                reasoning: "Factor 1 e.g. physical activity/sedentary work.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Factor 2 e.g. stress/workload.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Factor 3 e.g. diet access/smoking breaks.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Intervention matched to factor 1.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention matched to factor 2.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention matched to factor 3.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Evaluation considers engagement/evidence.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) activity/stress/diet (b) standing desks/EAP/healthy options (c) effective if embedded, not token gestures",
            commonErrors: [
              "Generic 'healthier lifestyle' advice.",
              "No evaluation.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u2-l2-substances",
      title: "Substances and Health Risks",
      skill:
        "Explain the health effects of smoking, alcohol and other substances.",
      lesson: {
        sections: [
          {
            heading: "Smoking and alcohol",
            body: "**Smoking** introduces tar, nicotine and carbon monoxide — causing lung cancer, COPD, cardiovascular disease, stroke and numerous cancers; there is no safe level of smoking. Nicotine is highly addictive; smoking is a leading preventable cause of death.\n\n**Alcohol** is a depressant affecting the liver (cirrhosis), brain (dependence, Wernicke-Korsakoff), heart (hypertension, cardiomyopathy) and increasing cancer risk. 'Low-risk' guidelines exist (14 units/week UK) because dose determines harm; binge drinking and dependence are distinct problems.",
          },
          {
            heading: "Other substances and addiction",
            body: "**Recreational drugs** vary: cannabis (mental health risk, dependence), cocaine/amphetamines (cardiovascular, addiction), opioids (overdose risk), novel psychoactive substances (unpredictable). Injection drug use adds infection risks (HIV, hepatitis).\n\n**Addiction** is a brain disorder involving compulsive use despite harm — treated via detoxification, replacement therapy (e.g. methadone), behavioural therapies and harm reduction (needle exchanges, supervised consumption). Recovery is possible but relapse is common; treatment works best combined.",
          },
        ],
        keyFormulas: [
          {
            name: "Dose-response",
            statement:
              "Health risk generally increases with substance dose and duration.",
          },
          {
            name: "Harm reduction",
            statement:
              "Reduce damage without requiring abstinence (e.g. needle exchange, safe injection sites).",
          },
        ],
        workedExample: {
          problem: "Compare the risks of occasional vs dependent alcohol use.",
          solution:
            "Occasional within guidelines: low risk. Dependent use: liver disease, withdrawal, accidents, mental health problems — dose and pattern determine harm, not just the substance.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l2-substances-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which substance is directly responsible for most smoking-related cancers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Tar" },
              { id: "c", text: "Carbon monoxide" },
              { id: "d", text: "Nicotine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tar",
                statement:
                  "Carcinogenic component of smoke causing most cancers.",
              },
            ],
            steps: [
              {
                reasoning: "Tar is the main carcinogen.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tar",
            commonErrors: [
              "Blaming nicotine for cancer (it's the addictive agent).",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l2-substances-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'low-risk' alcohol use and alcohol dependence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Low-risk vs dependence",
                statement:
                  "Guideline-compliant occasional use vs compulsive use despite harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low-risk defined: within guidelines, no harm pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dependence defined: compulsive use, tolerance, withdrawal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear contrast in consequences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Low-risk = occasional within guidelines; dependence = compulsive use with physical/psychological addiction.",
            commonErrors: ["No distinction made.", "Vague definitions."],
          },
        },
        {
          id: "edxbtechsc-u2-l2-substances-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate harm reduction as an approach to drug use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harm reduction",
                statement:
                  "Pragmatic approach reducing damage without demanding abstinence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strengths: engages hard-to-reach users, reduces infections/deaths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: needle exchange, supervised injection, substitution therapy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criticisms: may seem to condone use, doesn't address cause.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Balanced evaluative conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Harm reduction saves lives and engages users but doesn't treat addiction; best combined with treatment services.",
            commonErrors: ["One-sided.", "No examples."],
          },
        },
        {
          id: "edxbtechsc-u2-l2-substances-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A community has rising rates of alcohol-related hospital admissions.",
          parts: [
            {
              label: "a",
              prompt: "Identify three health effects of heavy alcohol use.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest two service-level and one policy-level interventions.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether minimum unit pricing would help.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alcohol harm",
                statement:
                  "Heavy use damages liver, brain, heart; price and availability affect consumption.",
              },
            ],
            steps: [
              {
                reasoning: "Health effect 1 e.g. cirrhosis/liver damage.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Health effect 2 e.g. brain damage/Wernicke-Korsakoff.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Health effect 3 e.g. cardiovascular/accidents/cancer.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Service intervention e.g. brief interventions in A&E.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Service intervention e.g. addiction treatment services.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Policy intervention e.g. licensing hours/advertising restrictions.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "MUP mechanism: raises price of cheap alcohol.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Evaluative judgement with limitation.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) liver/brain/CV damage (b) brief interventions/treatment/licensing (c) MUP reduces cheap alcohol harm but regressive",
            commonErrors: [
              "Effects not alcohol-specific.",
              "No policy evaluation.",
            ],
          },
        },
      ],
    },
  ],
};
