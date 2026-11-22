import type { Lesson } from "../../../types.ts";

export const lesson402: Lesson = {
  id: "edxbtechsc-u4-lesson-4-2",
  code: "4-2",
  title: "Social Determinants of Health",
  goal: "I CAN explain how social, economic and environmental factors determine health outcomes.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 4: Health, Policy and Wellbeing (optional)",
  ],
  vocabulary: [
    {
      term: "Social determinants of health",
      definition:
        "The conditions in which people are born, grow, live, work and age — shaped by economic, social and political systems.",
    },
    {
      term: "Health gradient",
      definition:
        "The stepwise relationship between socioeconomic position and health — better health at each higher level.",
    },
    {
      term: "Social gradient",
      definition:
        "Health improves progressively with income/education/occupation — not just poverty vs wealth.",
    },
    {
      term: "Material deprivation",
      definition:
        "Lack of resources for basic needs — housing, nutrition, heating, transport.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u4-l2-determinants",
      title: "Key Determinants",
      skill:
        "Describe the main social determinants of health and their mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Income and material factors",
            body: "**Income** is the strongest determinant — poverty affects nutrition, housing quality, heating, transport to services and ability to afford healthy choices. The **social gradient** shows health improves at every income level, not just above/below poverty.\n\n**Employment** affects health through income, status, control, stress and working conditions. Unemployment is associated with worse health — both through material deprivation and psychosocial stress.",
          },
          {
            heading: "Education, housing, environment",
            body: "**Education** improves health literacy, employment prospects and coping skills. **Housing** quality affects respiratory health (damp, mould), injury risk and mental health. **Environment** — air quality, green space, noise, safety — directly affects physical and mental health.\n\n**Social support** buffers stress; **social exclusion** compounds disadvantage. **Early childhood** experiences have lifelong effects — the 'first 1001 days' are critical for development.",
          },
        ],
        keyFormulas: [
          {
            name: "Social gradient",
            statement: "Health improves stepwise with SES — not binary.",
          },
          {
            name: "Determinants framework",
            statement:
              "Income, employment, education, housing, environment, social support.",
          },
        ],
        workedExample: {
          problem:
            "Why might two people with identical lifestyles have different health outcomes?",
          solution:
            "Social determinants differ — income, housing, stress exposure, healthcare access, education all mediate health beyond individual behaviour.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l2-determinants-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'social gradient' in health means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Health improves stepwise with socioeconomic status",
              },
              { id: "b", text: "Only the poorest have poor health" },
              { id: "c", text: "Health is random" },
              { id: "d", text: "Rich people are always healthier" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social gradient",
                statement: "Stepwise health improvement with SES.",
              },
            ],
            steps: [
              {
                reasoning: "Gradient = continuous relationship.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Stepwise improvement",
            commonErrors: ["Binary poverty/wealth view."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-determinants-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two mechanisms through which low income affects health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income and health",
                statement:
                  "Material deprivation + psychosocial stress pathways.",
              },
            ],
            steps: [
              {
                reasoning: "Material: nutrition, housing, heating, transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Psychosocial: stress, control, status.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear mechanisms explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Material deprivation (can't afford healthy choices) + chronic stress (financial worry).",
            commonErrors: ["Only material or only stress.", "No mechanisms."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-determinants-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how housing quality affects health outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Housing and health",
                statement:
                  "Damp/mould → respiratory; overcrowding → infection spread; poor housing → mental health.",
              },
            ],
            steps: [
              {
                reasoning: "Physical health: damp/mould → asthma/respiratory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overcrowding → infection transmission.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mental health: stress, lack of control, safety.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Poor housing → respiratory disease, infection spread, mental health problems via multiple pathways.",
            commonErrors: ["Only one pathway.", "No mechanisms."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-determinants-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two children have identical genes but very different childhood environments.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify three social determinants that could differ between them.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how each could affect long-term health.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether 'genes determine health'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social determinants",
                statement:
                  "Environment shapes health outcomes as much as or more than genetics.",
              },
            ],
            steps: [
              {
                reasoning: "Determinant 1 e.g. income/nutrition.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Determinant 2 e.g. education/parenting.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Determinant 3 e.g. housing/environment.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Health pathway for determinant 1.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Health pathway for determinant 2.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Health pathway for determinant 3.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Genetic determinism rejected.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Balanced conclusion.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) income/education/housing (b) nutrition/stress/exposure (c) environment shapes outcomes",
            commonErrors: ["Genetic determinism.", "No pathways."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u4-l2-inequality",
      title: "Health Inequalities",
      skill:
        "Explain health inequalities and evaluate strategies to reduce them.",
      lesson: {
        sections: [
          {
            heading: "Understanding inequalities",
            body: "**Health inequalities** are systematic, avoidable and unfair differences in health between social groups. They exist by: income, education, occupation, ethnicity, gender, disability, geography (urban/rural, north/south England 'health divide').\n\nThe **inverse care law**: those who need care most (deprived areas) get least — fewer GPs per capita, longer waits, worse outcomes. The **Black Report** (1980) first documented health inequalities; the **Marmot Review** (2010) identified the social gradient and called for action on the social determinants.",
          },
          {
            heading: "Reducing inequalities",
            body: "Strategies operate at multiple levels: **individual** (health education, smoking cessation), **community** (targeted services, community development), **structural/policy** (minimum wage, housing policy, education funding, sugar tax, tobacco control).\n\nThe most effective approaches address **upstream determinants** — improving income, education, housing and early years has greater population impact than downstream healthcare alone. **Health in All Policies** ensures health considered across government.",
          },
        ],
        keyFormulas: [
          {
            name: "Inverse care law",
            statement: "Those most in need get least care.",
          },
          {
            name: "Health in All Policies",
            statement: "Health considered across all government policy.",
          },
        ],
        workedExample: {
          problem:
            "Why do health inequalities persist despite universal healthcare?",
          solution:
            "NHS treats illness but doesn't address upstream determinants — income, education, housing, environment. Universal access ≠ equal outcomes.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l2-inequality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'inverse care law' states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Care is free for all" },
              { id: "b", text: "Those who need care most get least" },
              { id: "c", text: "Healthcare is equally distributed" },
              { id: "d", text: "Rich people get better care" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse care law",
                statement: "Those most in need get least care.",
              },
            ],
            steps: [
              {
                reasoning: "Inverse care = need inversely related to access.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Most in need get least",
            commonErrors: ["Confusing with equality."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-inequality-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why universal healthcare doesn't eliminate health inequalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Universal vs equal",
                statement:
                  "Equal access ≠ equal outcomes — upstream determinants matter.",
              },
            ],
            steps: [
              {
                reasoning: "NHS treats illness, not causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social determinants drive inequalities.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Universal access treats illness but social determinants (income, housing, education) drive unequal outcomes.",
            commonErrors: ["Assuming access = outcomes.", "No determinants."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-inequality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate individual vs structural approaches to reducing health inequalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality strategies",
                statement:
                  "Individual behaviour change vs structural/environmental change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Individual approach: education, cessation — limited reach.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural approach: income, housing, education — addresses root causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weighs effectiveness of each.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Balanced conclusion: both needed, structural more sustainable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Individual approaches help but structural changes address root causes; combination most effective.",
            commonErrors: ["One-sided.", "No evaluation."],
          },
        },
        {
          id: "edxbtechsc-u4-l2-inequality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A deprived area has life expectancy 8 years lower than an affluent area nearby.",
          parts: [
            {
              label: "a",
              prompt: "Identify three likely causes of this gap.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the 'health divide' concept.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest two structural interventions and evaluate them.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health divide",
                statement:
                  "Systematic health differences between areas/groups driven by social determinants.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1 e.g. income/deprivation.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2 e.g. housing quality/overcrowding.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 3 e.g. healthcare access/education.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Health divide defined correctly.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Divide framed as systematic/unfair.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Structural intervention 1 e.g. housing improvement.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Structural intervention 2 e.g. early years/education investment.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Evaluation of interventions' impact.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) income/housing/access (b) systematic unfair gap (c) housing/early years — upstream impact",
            commonErrors: ["Individual-blaming.", "No structural focus."],
          },
        },
      ],
    },
  ],
};
