import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m8-u7-lesson-7-3",
  code: "7-3",
  title: "Two-Way Tables and Bivariate Analysis",
  goal: "I CAN construct and interpret two-way tables, calculate marginal and conditional frequencies, and analyze bivariate categorical data.",
  standards: ["8.SP.A.4", "8.SP.A.5"],
  vocabulary: [
    {
      term: "Two-way table",
      definition:
        "A table showing frequency distribution for two categorical variables.",
    },
    {
      term: "Marginal frequency",
      definition: "Total frequency for one variable (row or column total).",
    },
    {
      term: "Conditional frequency",
      definition: "Frequency within a specific category of the other variable.",
    },
    {
      term: "Joint frequency",
      definition: "Frequency for a combination of two categories.",
    },
    {
      term: "Relative frequency",
      definition: "Frequency expressed as a proportion or percentage.",
    },
    {
      term: "Bivariate categorical data",
      definition: "Data with two categorical variables.",
    },
  ],
  concepts: [
    {
      id: "m8-u7-two-way-tables",
      title: "Constructing and reading two-way tables",
      skill:
        "Build and interpret two-way frequency tables for bivariate categorical data.",
      lesson: {
        sections: [
          {
            heading: "Table structure",
            body: "A two-way table has rows for one variable and columns for another. Cells show joint frequencies; margins show totals. Example: Pet ownership (dog/cat) vs gender (male/female).",
          },
          {
            heading: "Marginal frequencies",
            body: "Marginal frequencies are row and column totals. They show the distribution of each variable independently. Example: total dogs = 15, total females = 20.",
          },
          {
            heading: "Conditional frequencies",
            body: "Conditional frequencies are percentages within a category. 'Among females, what percent own dogs?' = (female dogs) / (total females) × 100%.",
          },
        ],
        keyFormulas: [
          { name: "Joint", statement: "Cell frequency" },
          { name: "Marginal", statement: "Row/column totals" },
          { name: "Conditional", statement: "Cell / margin × 100%" },
        ],
        workedExample: {
          problem:
            "In a table: 8 males own dogs, 12 females own dogs, total 30 students. What percent of dog owners are female?",
          solution: "Female dogs / total dogs = 12 / 20 = 60%.",
        },
      },
      questions: [
        {
          id: "m8-u7-two-way-tables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are marginal frequencies in a two-way table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Row and column totals" },
              { id: "b", text: "Cell values" },
              { id: "c", text: "Grand total only" },
              { id: "d", text: "Percentages" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marginal frequency",
                statement: "Row/column totals.",
              },
            ],
            steps: [
              {
                reasoning: "Marginal frequencies are row and column totals.",
                evidence: "totals",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Row and column totals",
            commonErrors: ["Confusing marginal with joint."],
          },
        },
        {
          id: "m8-u7-two-way-tables-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A two-way table shows: 10 students play sports, 15 don't; 8 males play sports, 12 females play sports. How many students total?",
          response: {
            type: "numeric",
            parts: [{ label: "Total", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading tables",
                statement: "Sum marginal frequencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sports: 8 males + 12 females = 20; non-sports: 10 + 15 = 25? Check: total = sports + non-sports = 10 + 15 = 25.",
                working: "25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25$",
            commonErrors: ["Not summing correctly."],
          },
        },
        {
          id: "m8-u7-two-way-tables-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For a two-way table with pet ownership and gender, calculate conditional frequencies.",
          parts: [
            {
              label: "a",
              prompt: "If 12 females own dogs out of 20 females, what percent?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "If 8 males own cats out of 15 males, what percent?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "If 20 own dogs out of 35 total, what percent?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional frequency",
                statement: "Cell / margin × 100%.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{12}{20} = 60\\%$.",
                evidence: "60%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{8}{15} \\approx 53.3\\%$.",
                evidence: "53.3%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{20}{35} \\approx 57.1\\%$.",
                evidence: "57.1%",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $60\\%$ (b) $53.3\\%$ (c) $57.1\\%$",
            commonErrors: ["Using wrong denominator."],
          },
        },
        {
          id: "m8-u7-two-way-tables-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "If 15 students own pets, 9 are female, and there are 20 females total, what percent of females own pets?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If 25 students don't own pets, 10 are male, and there are 18 males total, what percent of males don't own pets?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "If 30 own pets and 45 don't, what percent own pets?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If 12 females own cats and 8 males own cats, what percent of cat owners are female?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional frequency",
                statement: "Cell / margin × 100%.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{9}{20} = 45\\%$.",
                evidence: "45%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{10}{18} \\approx 55.6\\%$.",
                evidence: "55.6%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{30}{75} = 40\\%$.",
                evidence: "40%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\frac{12}{20} = 60\\%$.",
                evidence: "60%",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $45\\%$ (b) $55.6\\%$ (c) $40\\%$ (d) $60\\%$",
            commonErrors: ["Using wrong denominator."],
          },
        },
      ],
    },
    {
      id: "m8-u7-relative-frequency",
      title: "Relative frequency and associations",
      skill:
        "Calculate relative frequencies and identify associations between variables.",
      lesson: {
        sections: [
          {
            heading: "Relative frequency",
            body: "Relative frequency = joint frequency / grand total. It shows proportion of total. For 12 out of 40: $\\frac{12}{40} = 0.30 = 30\\%$.",
          },
          {
            heading: "Comparing groups",
            body: "To compare groups, use conditional frequencies. 'Among males' vs 'among females' — different denominators.",
          },
          {
            heading: "Association",
            body: "An association exists if conditional frequencies differ significantly between groups. Example: if 80% of females own pets vs 40% of males, there's an association.",
          },
        ],
        keyFormulas: [
          { name: "Relative", statement: "Joint / total" },
          { name: "Conditional", statement: "Cell / group total" },
          {
            name: "Association",
            statement: "Different conditional frequencies",
          },
        ],
        workedExample: {
          problem:
            "If 8/20 females and 4/20 males own dogs, is there an association?",
          solution:
            "Females: 40%, males: 20% → different → association exists.",
        },
      },
      questions: [
        {
          id: "m8-u7-relative-frequency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is relative frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell / total" },
              { id: "b", text: "Cell / row total" },
              { id: "c", text: "Row total / grand total" },
              { id: "d", text: "Column total / grand total" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative frequency",
                statement: "Joint / total.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relative frequency = joint frequency / grand total.",
                evidence: "joint/total",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Cell / total",
            commonErrors: ["Confusing with conditional."],
          },
        },
        {
          id: "m8-u7-relative-frequency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 15 out of 50 students own pets, what is the relative frequency?",
          response: {
            type: "numeric",
            parts: [{ label: "Relative frequency", answer: 0.3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative frequency",
                statement: "Joint / total.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{15}{50} = 0.30$.",
                working: "0.30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.30$ or $30\\%$",
            commonErrors: ["Not dividing correctly."],
          },
        },
        {
          id: "m8-u7-relative-frequency-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate relative frequencies and identify association.",
          parts: [
            {
              label: "a",
              prompt: "8/40 females own dogs; relative frequency?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "4/40 males own dogs; relative frequency?",
              marks: 1,
            },
            { label: "c", prompt: "Is there an association?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative frequency",
                statement: "Joint / total.",
              },
              {
                kind: "definition",
                name: "Association",
                statement: "Different conditional frequencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{8}{40} = 0.20 = 20\\%$.",
                evidence: "20%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{4}{40} = 0.10 = 10\\%$.",
                evidence: "10%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "20% vs 10% → different → association exists.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) $20\\%$ (b) $10\\%$ (c) Yes, association",
            commonErrors: ["Not comparing percentages."],
          },
        },
        {
          id: "m8-u7-relative-frequency-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "If 12/30 own pets, relative frequency?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If 8/20 females and 4/20 males own pets, is there association?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If 25% of group A and 25% of group B have trait, association?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If 30% of group A and 10% of group B have trait, association?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative frequency",
                statement: "Joint / total.",
              },
              {
                kind: "definition",
                name: "Association",
                statement: "Different conditional frequencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{12}{30} = 0.40 = 40\\%$.",
                evidence: "40%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "40% vs 20% → different → association.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Same percentages → no association.",
                evidence: "no",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "30% vs 10% → different → association.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) $40\\%$ (b) Yes (c) No (d) Yes",
            commonErrors: ["In (c), not recognizing equal frequencies."],
          },
        },
      ],
    },
    {
      id: "m8-u7-bivariate-applications",
      title: "Bivariate data applications",
      skill: "Apply two-way table analysis to real-world categorical data.",
      lesson: {
        sections: [
          {
            heading: "Survey analysis",
            body: "Two-way tables are used in surveys: 'Do you prefer online or in-person learning?' by grade level. Conditional frequencies show which groups prefer which option.",
          },
          {
            heading: "Health and social data",
            body: "Medical studies: treatment vs outcome by age group. Social research: voting preference by income level. Education: test scores by study habits.",
          },
          {
            heading: "Making decisions",
            body: "Businesses use two-way tables to analyze customer preferences by demographics. Governments use them for policy decisions based on population segments.",
          },
        ],
        keyFormulas: [
          { name: "Survey", statement: "Categorical data by groups" },
          { name: "Conditional", statement: "Compare within groups" },
          { name: "Decision", statement: "Use frequencies to guide choices" },
        ],
        workedExample: {
          problem:
            "A survey shows 70% of seniors prefer online classes vs 40% of freshmen. What does this mean?",
          solution:
            "Association between grade level and preference; seniors more likely to prefer online.",
        },
      },
      questions: [
        {
          id: "m8-u7-bivariate-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of data is best analyzed with two-way tables?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Categorical" },
              { id: "b", text: "Numerical continuous" },
              { id: "c", text: "Time series" },
              { id: "d", text: "Geometric" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Two-way table",
                statement: "For categorical data.",
              },
            ],
            steps: [
              {
                reasoning: "Two-way tables are for bivariate categorical data.",
                evidence: "categorical",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Categorical",
            commonErrors: ["Using for numerical data."],
          },
        },
        {
          id: "m8-u7-bivariate-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A survey shows 60% of females and 40% of males prefer online learning. Is there an association?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Association",
                statement: "Different conditional frequencies.",
              },
            ],
            steps: [
              {
                reasoning: "60% vs 40% → different → association exists.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Females more likely to prefer online learning.",
                evidence: "females",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Yes, females more likely to prefer online",
            commonErrors: ["Not comparing percentages."],
          },
        },
        {
          id: "m8-u7-bivariate-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyze each survey result.",
          parts: [
            {
              label: "a",
              prompt:
                "70% of seniors vs 40% of freshmen prefer online: association?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Which group prefers online more?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "If 50% of each group prefer online: association?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Association",
                statement: "Different conditional frequencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "70% vs 40% → different → association.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Seniors (70% > 40%).",
                evidence: "seniors",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Same percentages → no association.",
                evidence: "no",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Yes (b) Seniors (c) No",
            commonErrors: ["In (c), not recognizing equal frequencies."],
          },
        },
        {
          id: "m8-u7-bivariate-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "If 65% of group A and 35% of group B prefer option X, is there association?",
              marks: 2,
            },
            { label: "b", prompt: "Which group prefers X more?", marks: 2 },
            {
              label: "c",
              prompt: "If 50% of each group prefer Y, association?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give example of confounding variable in survey.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Association",
                statement: "Different conditional frequencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "65% vs 35% → different → association.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Group A (65% > 35%).",
                evidence: "A",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Same percentages → no association.",
                evidence: "no",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Example: age affecting both preference and survey response.",
                evidence: "age",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Yes (b) Group A (c) No (d) Age example",
            commonErrors: ["Assuming association implies causation."],
          },
        },
      ],
    },
  ],
};
