import type { Lesson } from "../../../types.ts";

export const lesson201: Lesson = {
  id: "edxbtechsc-u2-lesson-2-1",
  code: "2-1",
  title: "Body Systems and Health",
  goal: "I CAN describe the main body systems and their functions, and explain how they maintain health and respond to illness.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 2: Human Biology and Health",
  ],
  vocabulary: [
    {
      term: "Homeostasis",
      definition:
        "The body's ability to maintain a stable internal environment despite external changes.",
    },
    {
      term: "Metabolism",
      definition:
        "The chemical processes that convert food into energy and building materials for the body.",
    },
    {
      term: "Chronic condition",
      definition:
        "A long-term health condition managed rather than cured, e.g. diabetes, arthritis.",
    },
    {
      term: "Homeostatic mechanism",
      definition:
        "Feedback systems (e.g. sweating, insulin) that keep variables like temperature and glucose within range.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u2-l1-systems",
      title: "Major Body Systems",
      skill: "Describe the structure and function of the main body systems.",
      lesson: {
        sections: [
          {
            heading: "Cardiovascular and respiratory",
            body: "The **cardiovascular system** (heart, blood vessels, blood) transports oxygen, nutrients, hormones and waste. The heart pumps ~70 ml per beat; blood pressure measures the force of that pumping.\n\nThe **respiratory system** (airways, lungs) exchanges oxygen and carbon dioxide. Breathing brings air to alveoli where gas exchange occurs across thin membranes — efficient because of huge surface area.",
          },
          {
            heading: "Digestive, nervous, musculoskeletal",
            body: "The **digestive system** breaks food into absorbable nutrients — mechanical (teeth, churning) then chemical (enzymes) digestion; the liver detoxifies and stores nutrients; the kidneys filter blood and balance water/salts.\n\nThe **nervous system** (brain, spinal cord, nerves) coordinates responses — sensory input → processing → motor output; the autonomic nervous system controls involuntary functions (heart rate, digestion). The **musculoskeletal system** provides structure, movement and protection; bone marrow produces blood cells.",
          },
        ],
        keyFormulas: [
          {
            name: "Gas exchange",
            statement:
              "Oxygen diffuses into blood; CO₂ diffuses out at alveoli.",
          },
          {
            name: "Homeostasis",
            statement:
              "Negative feedback maintains set points (temperature ~37°C, glucose ~4-6 mmol/L).",
          },
        ],
        workedExample: {
          problem:
            "Explain what happens when blood glucose rises after a meal.",
          solution:
            "Glucose absorbed into blood → pancreas detects rise → releases insulin → cells take up glucose → blood glucose falls. If insulin fails (diabetes), glucose stays high causing damage.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l1-systems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Gas exchange in the lungs occurs at which structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diaphragm" },
              { id: "b", text: "Alveoli" },
              { id: "c", text: "Trachea" },
              { id: "d", text: "Bronchi" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveoli",
                statement:
                  "Tiny air sacs where O₂/CO₂ exchange occurs across thin membranes.",
              },
            ],
            steps: [
              {
                reasoning: "Alveoli = gas exchange surfaces.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Alveoli",
            commonErrors: ["Confusing airways with exchange surfaces."],
          },
        },
        {
          id: "edxbtechsc-u2-l1-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the cardiovascular and respiratory systems work together during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integrated systems",
                statement:
                  "Exercise increases oxygen demand → heart rate and breathing rise to deliver more O₂ and remove CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Muscles need more oxygen during exercise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Heart rate/cardiac output increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Breathing rate/depth increases for gas exchange.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exercise raises O₂ demand; heart pumps faster and breathing deepens to supply it and clear CO₂.",
            commonErrors: [
              "Describing systems separately.",
              "No cause-effect link.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l1-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain homeostasis using blood glucose regulation as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homeostasis",
                statement:
                  "Maintaining stable internal conditions via negative feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Defines homeostasis correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Describes glucose rise → insulin release.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Describes negative feedback restoring set point.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Accurate coherent explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Homeostasis = stable internal environment via negative feedback; insulin lowers blood glucose after meals.",
            commonErrors: [
              "Positive feedback confusion.",
              "Missing feedback mechanism.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l1-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An older adult has reduced mobility and is at risk of falls.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two body systems affected by reduced mobility and explain how.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two health risks and one intervention.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disuse effects",
                statement:
                  "Reduced activity weakens musculoskeletal and cardiovascular systems, increasing fall and disease risk.",
              },
            ],
            steps: [
              {
                reasoning: "Musculoskeletal effect: muscle/bone loss.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Cardiovascular effect: reduced fitness/heart capacity.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Balance/proprioception effect.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Systems interactions explained.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Risk 1 e.g. falls/fractures.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Risk 2 e.g. cardiovascular disease.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Intervention e.g. physiotherapy/exercise programme.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Intervention linked to systems.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) muscle/bone loss, cardiovascular deconditioning, balance decline (b) falls/CVD risk; exercise intervention",
            commonErrors: [
              "Systems not linked.",
              "Generic advice without mechanism.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u2-l1-health",
      title: "Concepts of Health, Illness and Wellbeing",
      skill:
        "Define health, illness and wellbeing and distinguish between disease, illness and disability.",
      lesson: {
        sections: [
          {
            heading: "Defining health",
            body: "The **WHO definition** (1948) — 'a state of complete physical, mental and social wellbeing and not merely the absence of disease' — is aspirational but hard to measure. Practical definitions recognise health as a **resource for living** and the ability to adapt and self-manage.\n\n**Wellbeing** encompasses physical, psychological, social and spiritual dimensions. **Illness** is the personal experience of being unwell — symptoms, suffering, disrupted life — which may or may not involve disease. **Disease** is a biomedical pathology with identifiable signs. **Disability** is restriction of activity caused by impairment — a social construct as much as a medical one.",
          },
          {
            heading: "Health across the lifespan",
            body: "Health is **dynamic** — fluctuating with age, circumstances and choices. Perceived health differs from clinical health: someone with a chronic condition may report good wellbeing; someone disease-free may feel unwell.\n\n**Health inequalities** are systematic differences in health status between social groups — driven by income, education, ethnicity, geography and access to services. The 'social gradient' shows health improves stepwise with socioeconomic status.",
          },
        ],
        keyFormulas: [
          {
            name: "WHO health",
            statement:
              "Complete physical, mental and social wellbeing — not merely absence of disease.",
          },
          {
            name: "Disease vs illness",
            statement:
              "Disease = pathology; illness = lived experience of unwellness.",
          },
          {
            name: "Health inequality",
            statement:
              "Systematic health differences linked to social determinants.",
          },
        ],
        workedExample: {
          problem:
            "A person with well-managed diabetes reports feeling healthy; another person with no diagnosis feels exhausted. Explain.",
          solution:
            "Health is multidimensional — wellbeing depends on symptoms, function, coping and life satisfaction, not just disease presence. Perceived health can diverge from clinical status.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u2-l1-health-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The WHO definition of health emphasises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medical treatment access" },
              { id: "b", text: "Life expectancy" },
              { id: "c", text: "Absence of disease only" },
              {
                id: "d",
                text: "Complete physical, mental and social wellbeing",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WHO health definition",
                statement: "Complete physical, mental and social wellbeing.",
              },
            ],
            steps: [
              {
                reasoning: "WHO = holistic wellbeing.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Complete wellbeing",
            commonErrors: ["Reductionist 'no disease' answer."],
          },
        },
        {
          id: "edxbtechsc-u2-l1-health-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between 'disease', 'illness' and 'disability'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disease vs illness vs disability",
                statement:
                  "Disease = pathology; illness = lived experience; disability = activity restriction.",
              },
            ],
            steps: [
              {
                reasoning: "Disease defined correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Illness defined correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Disability defined correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Disease = biomedical condition; illness = personal experience of unwellness; disability = restricted activity.",
            commonErrors: [
              "Terms used interchangeably.",
              "Missing one definition.",
            ],
          },
        },
        {
          id: "edxbtechsc-u2-l1-health-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the WHO definition of health as a useful measure for care practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluating health definitions",
                statement: "Holistic ideal vs operational measurability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: holistic, person-centred, includes wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: 'complete' wellbeing is unachievable/immeasurable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative: health as resource/adaptive capacity.",
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
              "WHO definition is aspirational and holistic but impractical as a measure; health-as-resource is more usable.",
            commonErrors: ["One-sided judgement.", "No alternative offered."],
          },
        },
        {
          id: "edxbtechsc-u2-l1-health-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two neighbourhoods have different average health outcomes.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what 'health inequalities' means in this context.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify three social determinants that could explain the gap.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest one policy-level and one service-level response.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health inequalities",
                statement:
                  "Systematic, avoidable health differences linked to social determinants.",
              },
            ],
            steps: [
              {
                reasoning: "Definition: systematic avoidable differences.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Inequality framed as unjust/avoidable.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Determinant 1 e.g. income/poverty.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Determinant 2 e.g. education/housing.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Determinant 3 e.g. healthcare access/ethnicity.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Policy response e.g. minimum wage/housing policy.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Service response e.g. targeted outreach/primary care.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Responses linked to determinants.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) avoidable systematic differences (b) income, education, access (c) policy + service responses",
            commonErrors: [
              "Blaming individuals.",
              "Only individual-level responses.",
            ],
          },
        },
      ],
    },
  ],
};
