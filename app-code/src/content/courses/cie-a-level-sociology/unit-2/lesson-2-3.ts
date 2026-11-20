import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "asoc-u2-lesson-2-3",
  code: "2-3",
  title: "Social Stratification and Inequality",
  goal: "I CAN explain social stratification and evaluate theories of inequality.",
  standards: ["9699: Socialisation, culture and identity"],
  vocabulary: [
    {
      term: "Social stratification",
      definition: "Hierarchical arrangement of society into classes/strata.",
    },
    {
      term: "Social class",
      definition: "Economic position — relationship to means of production.",
    },
    {
      term: "Social mobility",
      definition: "Movement between social positions.",
    },
    {
      term: "Meritocracy",
      definition: "Society where position based on ability/effort.",
    },
    {
      term: "Gender stratification",
      definition: "Inequality between men and women.",
    },
    {
      term: "Ethnic stratification",
      definition: "Inequality between ethnic groups.",
    },
  ],
  concepts: [
    {
      id: "asoc-u2-stratification",
      title: "Social stratification",
      skill: "Explain social class, mobility and stratification systems.",
      lesson: {
        sections: [
          {
            heading: "Stratification systems",
            body: "Class: economic position (bourgeoisie/proletariat). Caste: fixed birth-based hierarchy (India). Estate: feudal system. Gender and ethnicity also create stratification. All involve unequal access to resources and power.",
          },
          {
            heading: "Social mobility",
            body: "Intergenerational: movement between generations (child of worker becomes manager). Intragenerational: within lifetime. Vertical: up/down. Horizontal: same level different job. Meritocracy claims mobility based on ability — but structural barriers persist.",
          },
          {
            heading: "Inequality in modern society",
            body: "Wealth inequality growing — top 1% own disproportionate share. Gender pay gap persists. Ethnic minorities face discrimination. Education and health inequalities reflect class background.",
          },
        ],
        keyFormulas: [
          {
            name: "Stratification",
            statement:
              "Class/caste/estate; Mobility=vertical/horizontal; Meritocracy=ability-based.",
          },
        ],
        workedExample: {
          problem: "Is modern society a meritocracy?",
          solution:
            "Partially — ability matters but class background, connections and structural barriers limit mobility.",
        },
      },
      questions: [
        {
          id: "asoc-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is social stratification?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hierarchical arrangement of society into strata",
              },
              { id: "b", text: "Equal distribution of resources" },
              { id: "c", text: "Random social mixing" },
              { id: "d", text: "Political voting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratification",
                statement: "Hierarchical arrangement.",
              },
            ],
            steps: [
              {
                reasoning: "Stratification = hierarchy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Hierarchical arrangement",
            commonErrors: ["Confusing with equality."],
          },
        },
        {
          id: "asoc-u2-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is social mobility?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social mobility",
                statement: "Movement between social positions.",
              },
            ],
            steps: [
              {
                reasoning: "Movement between positions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Vertical/horizontal, inter/intragenerational.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Movement between social positions.",
            commonErrors: ["Saying it's only upward."],
          },
        },
        {
          id: "asoc-u2-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why modern society is not a perfect meritocracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meritocracy",
                statement: "Ability-based but structural barriers persist.",
              },
            ],
            steps: [
              {
                reasoning: "Ability matters but class background matters too.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Connections/cultural capital advantage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Structural barriers to mobility.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear argument.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Ability matters but class/connections/barriers limit meritocracy.",
            commonErrors: ["Ignoring structural factors."],
          },
        },
        {
          id: "asoc-u2-st-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Social stratification.",
          parts: [
            { label: "a", prompt: "Define stratification.", marks: 1 },
            {
              label: "b",
              prompt: "Name two stratification systems.",
              marks: 2,
            },
            { label: "c", prompt: "Define social mobility.", marks: 2 },
            { label: "d", prompt: "Types of mobility?", marks: 2 },
            {
              label: "e",
              prompt: "Is society a meritocracy? Evaluate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stratification",
                statement: "Definitions+systems+mobility+meritocracy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hierarchical arrangement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Class/caste/estate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Movement between positions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clear definition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Vertical/horizontal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Inter/intragenerational.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Ability matters.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Structural barriers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) hierarchy (b) class/caste (c) mobility (d) types (e) meritocracy evaluation",
          },
        },
      ],
    },
    {
      id: "asoc-u2-inequality",
      title: "Inequality: class, gender and ethnicity",
      skill: "Explain patterns of inequality by class, gender and ethnicity.",
      lesson: {
        sections: [
          {
            heading: "Class inequality",
            body: "Wealth and income concentrated at top — top 1% own ~40% of global wealth. Working class disadvantaged in education, health, housing. Cultural capital (Bourdieu): middle-class values dominate institutions, reproducing advantage.",
          },
          {
            heading: "Gender inequality",
            body: "Gender pay gap persists (~15-20% globally). Women overrepresented in low-paid care work. 'Glass ceiling' limits advancement. Patriarchy: male dominance in institutions. Feminist theory explains structural causes.",
          },
          {
            heading: "Ethnic inequality",
            body: "Ethnic minorities face discrimination in employment, housing, criminal justice. Institutional racism: policies/structures disadvantage groups regardless of intent. Intersections: class+gender+ethnicity compound disadvantage.",
          },
        ],
        keyFormulas: [
          {
            name: "Inequality",
            statement:
              "Class=wealth; Gender=pay gap+patriarchy; Ethnicity=discrimination+institutional racism.",
          },
        ],
        workedExample: {
          problem: "How does cultural capital reproduce class inequality?",
          solution:
            "Middle-class children learn middle-class values at home — school rewards these → educational advantage → better jobs → reproduce class.",
        },
      },
      questions: [
        {
          id: "asoc-u2-ie-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'glass ceiling'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Invisible barrier limiting women's advancement",
              },
              { id: "b", text: "Physical barrier in workplace" },
              { id: "c", text: "Type of pay gap" },
              { id: "d", text: "Educational qualification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glass ceiling",
                statement: "Invisible barrier to advancement.",
              },
            ],
            steps: [
              {
                reasoning: "Glass ceiling = advancement barrier.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Invisible barrier",
            commonErrors: ["Confusing with pay gap."],
          },
        },
        {
          id: "asoc-u2-ie-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is cultural capital?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural capital",
                statement: "Knowledge/skills valued by dominant culture.",
              },
            ],
            steps: [
              {
                reasoning: "Knowledge/skills valued.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reproduces class advantage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Knowledge/skills valued by dominant culture.",
            commonErrors: ["Saying it's money."],
          },
        },
        {
          id: "asoc-u2-ie-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain institutional racism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Institutional racism",
                statement:
                  "Policies/structures disadvantage groups regardless of intent.",
              },
            ],
            steps: [
              {
                reasoning: "Structural/policy level.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Not individual prejudice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Disadvantages ethnic groups.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Policies/structures disadvantage groups regardless of intent.",
            commonErrors: ["Confusing with individual prejudice."],
          },
        },
        {
          id: "asoc-u2-ie-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Inequality.",
          parts: [
            { label: "a", prompt: "Define glass ceiling.", marks: 1 },
            { label: "b", prompt: "Define cultural capital.", marks: 2 },
            { label: "c", prompt: "Explain institutional racism.", marks: 3 },
            { label: "d", prompt: "Gender pay gap causes?", marks: 2 },
            { label: "e", prompt: "How do inequalities intersect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality",
                statement: "Definitions+explanations+intersectionality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Invisible barrier.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Valued knowledge/skills.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reproduces advantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Structural/policy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Not individual.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Disadvantages groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "e",
                reasoning: "Class+gender+ethnicity compound.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) glass ceiling (b) cultural capital (c) institutional racism (d) pay gap (e) intersectionality",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u2-2-3-notes",
      title: "Stratification and inequality — notes",
      summary:
        "Social class, mobility, meritocracy, gender/ethnic inequality, cultural capital.",
      sections: [
        {
          heading: "Stratification",
          body: "Class/caste/estate; mobility=vertical/horizontal; meritocracy=ability-based but barriers persist.",
        },
        {
          heading: "Inequality",
          body: "Class=wealth concentration; gender=pay gap+glass ceiling; ethnicity=institutional racism. Cultural capital reproduces advantage.",
        },
      ],
    },
  ],
};
