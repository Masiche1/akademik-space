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
              { id: "a", text: "Political voting" },
              { id: "b", text: "Equal distribution of resources" },
              {
                id: "c",
                text: "Hierarchical arrangement of society into strata",
              },
              { id: "d", text: "Random social mixing" },
            ],
            correctChoiceId: "c",
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
        {
          id: "asoc-u2-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the caste system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A system based on personal ability" },
              {
                id: "b",
                text: "A fixed, birth-based hierarchy with little mobility",
              },
              { id: "c", text: "A religious ceremony" },
              { id: "d", text: "A type of democracy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Caste",
                statement: "Fixed birth-based hierarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Caste = ascribed, fixed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Fixed birth-based hierarchy",
            commonErrors: ["Confusing with class system."],
          },
        },
        {
          id: "asoc-u2-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is intergenerational social mobility?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Movement between generations, e.g. a worker's child becoming a manager",
              },
              { id: "b", text: "Movement between social positions within a lifetime" },
              { id: "c", text: "Moving to a different country" },
              { id: "d", text: "Changing jobs at the same level" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intergenerational mobility",
                statement: "Movement between generations.",
              },
            ],
            steps: [
              {
                reasoning: "Inter = between generations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Between generations",
            commonErrors: ["Confusing with intragenerational."],
          },
        },
        {
          id: "asoc-u2-st-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is horizontal social mobility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving to a higher social class" },
              { id: "b", text: "Moving between generations" },
              { id: "c", text: "Moving to a lower social class" },
              {
                id: "d",
                text: "Moving to a different job at roughly the same social level",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal mobility",
                statement: "Same level, different position.",
              },
            ],
            steps: [
              {
                reasoning: "Horizontal = sideways movement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Same level, different job",
            commonErrors: ["Confusing with vertical."],
          },
        },
        {
          id: "asoc-u2-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the 'estate' system of stratification refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Modern class divisions" },
              { id: "b", text: "The feudal hierarchy of lords, clergy and peasants" },
              { id: "c", text: "A merit-based system" },
              { id: "d", text: "A system of equal status" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Estate system",
                statement: "Feudal hierarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Estate = feudal orders.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Feudal hierarchy",
            commonErrors: ["Confusing with class/caste."],
          },
        },
        {
          id: "asoc-u2-st-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a study of 600 people, 20% experienced upward social mobility. How many people is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "20% of 600 = 0.2 x 600 = 120.",
              },
            ],
            steps: [
              { reasoning: "Convert 20% to 0.2.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.2 by 600 to get 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Using 20 instead of 0.2."],
          },
        },
        {
          id: "asoc-u2-st-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 workers surveyed, 15% moved down a social class during their lifetime. How many workers is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "15% of 400 = 0.15 x 400 = 60.",
              },
            ],
            steps: [
              { reasoning: "Convert 15% to 0.15.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.15 by 400 to get 60.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Reporting 0.15 instead of 60."],
          },
        },
        {
          id: "asoc-u2-st-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A stratified society divides 450 people equally among 3 social strata. How many people are in each stratum?",
          response: { type: "numeric", parts: [{ label: "a", answer: 150 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal strata",
                statement: "450 / 3 = 150 per stratum.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by number of strata.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "450 / 3 = 150.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "150",
            commonErrors: ["Dividing by 2 or 4 instead of 3."],
          },
        },
        {
          id: "asoc-u2-st-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The professional class grows from 12% to 18% of a workforce of 500. By how many workers did the professional class increase?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class growth",
                statement: "18% of 500 = 90; 12% of 500 = 60; increase = 30.",
              },
            ],
            steps: [
              {
                reasoning: "90 professionals at 18%; 60 at 12%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increase = 90 - 60 = 30.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering 6 (percentage points) not workers."],
          },
        },
        {
          id: "asoc-u2-st-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 250 adults tracked over a decade, 8% experienced downward social mobility. How many adults is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "8% of 250 = 0.08 x 250 = 20.",
              },
            ],
            steps: [
              { reasoning: "Convert 8% to 0.08.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.08 by 250 to get 20.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Using 8 instead of 0.08."],
          },
        },
        {
          id: "asoc-u2-st-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the caste system more closed than the class system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It allows free movement between groups" },
              { id: "b", text: "It is based on achieved status" },
              {
                id: "c",
                text: "Status is fixed at birth with almost no possibility of mobility",
              },
              { id: "d", text: "It distributes resources equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Caste vs class",
                statement: "Ascribed and closed vs achieved.",
              },
            ],
            steps: [
              {
                reasoning: "Caste = birth-fixed, no mobility.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Fixed at birth, no mobility",
            commonErrors: ["Saying caste allows mobility."],
          },
        },
        {
          id: "asoc-u2-st-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a meritocracy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A society ruled by the oldest family" },
              { id: "b", text: "A society based on birth status" },
              { id: "c", text: "A society where rewards depend mainly on ability and effort" },
              { id: "d", text: "A society with no inequality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meritocracy",
                statement: "Rewards based on ability/effort.",
              },
            ],
            steps: [
              {
                reasoning: "Merit = ability-based.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ability and effort based",
            commonErrors: ["Saying it means perfect equality."],
          },
        },
        {
          id: "asoc-u2-st-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Social stratification.",
          parts: [
            { label: "a", prompt: "Define social stratification.", marks: 1 },
            { label: "b", prompt: "Distinguish class from caste.", marks: 2 },
            {
              label: "c",
              prompt: "Explain intergenerational and intragenerational mobility.",
              marks: 2,
            },
            { label: "d", prompt: "Define vertical mobility.", marks: 2 },
            {
              label: "e",
              prompt: "Evaluate the claim that modern society is a meritocracy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stratification",
                statement: "Definition+class/caste+mobility+meritocracy.",
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
                reasoning: "Class = economic/achieved.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Caste = birth/ascribed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Inter = between generations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Intra = within lifetime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Up/down movement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Contrasted with horizontal.",
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
                reasoning: "Structural barriers persist.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) hierarchy (b) class vs caste (c) mobility types (d) vertical (e) meritocracy",
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
              { id: "a", text: "Educational qualification" },
              {
                id: "b",
                text: "Invisible barrier limiting women's advancement",
              },
              { id: "c", text: "Type of pay gap" },
              { id: "d", text: "Physical barrier in workplace" },
            ],
            correctChoiceId: "b",
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
        {
          id: "asoc-u2-ie-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'gender pay gap'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Men earning less than women" },
              { id: "b", text: "A gap in educational attainment" },
              {
                id: "c",
                text: "Women earning less than men for comparable work",
              },
              { id: "d", text: "A difference in working hours only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gender pay gap",
                statement: "Women earn less than men.",
              },
            ],
            steps: [
              {
                reasoning: "Pay gap = unequal pay.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Women earn less",
            commonErrors: ["Confusing with glass ceiling."],
          },
        },
        {
          id: "asoc-u2-ie-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'patriarchy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of family structure" },
              { id: "b", text: "A political party" },
              { id: "c", text: "A system of equal gender roles" },
              { id: "d", text: "A system where men hold dominant power in institutions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Patriarchy",
                statement: "Male dominance in institutions.",
              },
            ],
            steps: [
              {
                reasoning: "Patriarchy = male dominance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Male dominance",
            commonErrors: ["Confusing with matriarchy."],
          },
        },
        {
          id: "asoc-u2-ie-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'institutional racism'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Policies and structures that disadvantage ethnic groups regardless of intent",
              },
              { id: "b", text: "Individual prejudice by one person" },
              { id: "c", text: "Racism in the media only" },
              { id: "d", text: "A form of positive discrimination" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Institutional racism",
                statement: "Structural disadvantage, not intent.",
              },
            ],
            steps: [
              {
                reasoning: "Institutional = structural level.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Structural disadvantage",
            commonErrors: ["Confusing with individual prejudice."],
          },
        },
        {
          id: "asoc-u2-ie-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The statistic 'the top 1% own about 40% of global wealth' best illustrates...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High social mobility" },
              { id: "b", text: "The glass ceiling" },
              { id: "c", text: "Perfect equality of wealth" },
              { id: "d", text: "Extreme concentration of wealth at the top" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth concentration",
                statement: "Top share disproportionate.",
              },
            ],
            steps: [
              {
                reasoning: "40% for 1% = concentration.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Wealth concentration",
            commonErrors: ["Saying it shows equality."],
          },
        },
        {
          id: "asoc-u2-ie-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A man earns $50,000. If the gender pay gap is 18%, how much does a woman in a comparable role earn?",
          response: { type: "numeric", parts: [{ label: "a", answer: 41000 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pay gap calculation",
                statement: "50,000 x 0.82 = 41,000.",
              },
            ],
            steps: [
              {
                reasoning: "Woman earns 82% of man's salary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "50,000 x 0.82 = 41,000.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "41000",
            commonErrors: ["Subtracting $18,000 instead of applying 82%."],
          },
        },
        {
          id: "asoc-u2-ie-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 400 workers surveyed, 25% work in low-paid care jobs, which are predominantly held by women. How many workers is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "25% of 400 = 0.25 x 400 = 100.",
              },
            ],
            steps: [
              { reasoning: "Convert 25% to 0.25.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.25 by 400 to get 100.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "100",
            commonErrors: ["Reporting 0.25 instead of 100."],
          },
        },
        {
          id: "asoc-u2-ie-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 300 ethnic minority respondents, 40% reported experiencing discrimination at work. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage of sample",
                statement: "40% of 300 = 0.4 x 300 = 120.",
              },
            ],
            steps: [
              { reasoning: "Convert 40% to 0.4.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Multiply 0.4 by 300 to get 120.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "120",
            commonErrors: ["Using 40 instead of 0.4."],
          },
        },
        {
          id: "asoc-u2-ie-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The top 1% increased their share of a $1,000 billion economy from 35% to 42%. By how many billions did their wealth grow?",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth share change",
                statement: "42% of 1000 = 420; 35% of 1000 = 350; growth = 70.",
              },
            ],
            steps: [
              {
                reasoning: "$420bn at 42%; $350bn at 35%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Growth = 420 - 350 = $70bn.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "70",
            commonErrors: ["Answering 7 (percentage points) not billions."],
          },
        },
        {
          id: "asoc-u2-ie-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A man earns $60,000. At a 20% pay gap, a comparable woman earned $48,000. When the gap falls to 15%, what does she earn?",
          response: { type: "numeric", parts: [{ label: "a", answer: 51000 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pay gap calculation",
                statement: "60,000 x 0.85 = 51,000.",
              },
            ],
            steps: [
              {
                reasoning: "At 15% gap she earns 85% of his salary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "60,000 x 0.85 = 51,000.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "51000",
            commonErrors: ["Using 15% instead of 85% of salary."],
          },
        },
        {
          id: "asoc-u2-ie-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does cultural capital reproduce class inequality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It reduces all inequality" },
              { id: "b", text: "It only affects the wealthy" },
              {
                id: "c",
                text: "Schools reward middle-class values learned at home, passing advantage to the next generation",
              },
              { id: "d", text: "It has no effect on education" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural capital",
                statement: "Reproduces class advantage.",
              },
            ],
            steps: [
              {
                reasoning: "Middle-class values rewarded → reproduction.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reproduces advantage",
            commonErrors: ["Saying cultural capital is money."],
          },
        },
        {
          id: "asoc-u2-ie-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'intersectionality'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "How class, gender and ethnicity combine to compound disadvantage",
              },
              { id: "b", text: "A road-crossing system" },
              { id: "c", text: "Inequality caused by only one factor" },
              { id: "d", text: "A type of social mobility" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intersectionality",
                statement: "Overlapping identities compound disadvantage.",
              },
            ],
            steps: [
              {
                reasoning: "Identities interact.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Overlapping disadvantages",
            commonErrors: ["Treating factors separately."],
          },
        },
        {
          id: "asoc-u2-ie-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Inequality.",
          parts: [
            { label: "a", prompt: "Define the gender pay gap.", marks: 1 },
            { label: "b", prompt: "Explain what is meant by the glass ceiling.", marks: 2 },
            {
              label: "c",
              prompt: "Explain institutional racism.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain how cultural capital reproduces class advantage.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Suggest how inequalities of class, gender and ethnicity can combine.",
              marks: 3,
            },
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
                reasoning: "Women earn less than men.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Invisible barrier to advancement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Limits women's progression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Structural/policy disadvantage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Regardless of individual intent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Middle-class values valued by schools.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Advantage passed to next generation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Class+gender+ethnicity interact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Example of compounded disadvantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) pay gap (b) glass ceiling (c) institutional racism (d) cultural capital (e) intersectionality",
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
