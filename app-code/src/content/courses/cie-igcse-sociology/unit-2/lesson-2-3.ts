import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieisoc-u2-lesson-2-3",
  code: "2-3",
  title: "Social inequality and stratification",
  goal: "I CAN explain social stratification and evaluate explanations for inequality.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 2: Culture and identity",
  ],
  vocabulary: [
    {
      term: "Social stratification",
      definition:
        "The hierarchical arrangement of individuals into social layers with unequal access to resources.",
    },
    {
      term: "Class",
      definition:
        "A social grouping defined by economic position — ownership and occupation.",
    },
    {
      term: "Life chances",
      definition:
        "The opportunities for health, education, income and success available to an individual.",
    },
    {
      term: "Social mobility",
      definition:
        "Movement up or down the social hierarchy between generations or within a lifetime.",
    },
    {
      term: "Meritocracy",
      definition:
        "The idea that positions are allocated by ability and effort rather than birth.",
    },
    {
      term: "Caste",
      definition:
        "A closed stratification system where status is fixed at birth and cannot change.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u2-strat",
      title: "Stratification and inequality",
      skill:
        "Explain social stratification, class systems and social mobility.",
      lesson: {
        sections: [
          {
            heading: "What is stratification?",
            body: "Stratification divides society into layers — **class** (economic position), **status** (prestige) and **power** (ability to influence). These layers carry unequal access to resources: income, education, healthcare, housing. Stratification exists in all known societies but varies in how open or closed it is.",
          },
          {
            heading: "Open vs closed systems",
            body: "**Open systems** (e.g. class societies) allow mobility — people can move up or down through achievement. **Closed systems** (e.g. caste, slavery) fix status at birth with no movement. Most modern societies are relatively open, but mobility is limited — origins still strongly predict destinations.",
          },
          {
            heading: "Inequality and life chances",
            body: "Those higher in the hierarchy enjoy better **life chances**: longer life expectancy, better education, higher income, safer neighbourhoods. Sociologists debate whether inequality is justified (**meritocracy** — rewards for talent) or reproduced (**Marxist** — structural advantage passed down). Evidence shows social class strongly predicts educational and health outcomes.",
          },
        ],
        keyFormulas: [
          {
            name: "Stratification dimensions",
            statement:
              "Class (economics) + status (prestige) + power (influence)",
          },
          {
            name: "Mobility test",
            statement:
              "Can individuals change strata? Open = yes (class); closed = no (caste)",
          },
        ],
        workedExample: {
          problem:
            "A child born into poverty becomes a doctor. What does this show about the stratification system?",
          solution:
            "It shows the system is relatively open — upward social mobility is possible through education and effort, though such mobility is the exception rather than the rule.",
        },
      },
      questions: [
        {
          id: "cieisoc-u2-strat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social stratification refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The division of labour in society" },
              {
                id: "b",
                text: "The hierarchical arrangement of society into unequal layers",
              },
              { id: "c", text: "The process of socialisation" },
              { id: "d", text: "Cultural diversity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratification",
                statement:
                  "Hierarchical layers of society with unequal access to resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stratification = ranked layers (class/status/power) producing inequality; it is not the division of labour or socialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The hierarchical arrangement into unequal layers.",
            commonErrors: [
              "Confusing stratification with socialisation or division of labour.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between an open and a closed system of stratification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Open vs closed stratification",
                statement:
                  "Open allows mobility; closed fixes status at birth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Open system: positions can be achieved — individuals move up or down (e.g. class society).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closed system: status is ascribed at birth and cannot change (e.g. caste, slavery).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: in caste systems, a person's position is fixed by birth into a hereditary group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Open = mobility possible (class); closed = status fixed at birth (caste/slavery).",
            commonErrors: [
              "Saying open systems have NO inequality — they have inequality but allow movement.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the concept of 'life chances' and give two examples of how class affects them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life chances",
                statement:
                  "Opportunities for health, education, income and wellbeing shaped by social position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life chances = the probability of achieving desirable outcomes like health, education and income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: higher-class children attend better-resourced schools and achieve higher attainment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: lower-income groups have shorter life expectancy and worse health outcomes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Life chances = opportunities shaped by class — e.g. education quality and health outcomes differ by class.",
            commonErrors: [
              "Defining life chances as 'chances in life' vaguely without linking to social structure.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the idea that modern societies are meritocracies where position is earned by talent.",
          parts: [
            {
              label: "a",
              prompt: "Explain the meritocratic argument.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the evidence for and against meritocracy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Meritocracy debate",
                statement:
                  "Rewards for talent vs reproduction of class advantage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Meritocracy claims positions go to the most able — education and jobs reward talent and effort, not birth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It legitimises inequality: if rewards are 'earned', inequality seems fair.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Open education and examinations are presented as the mechanism of selection.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Evidence for: some mobility exists; exams do select on ability; wealth can be created by entrepreneurs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Evidence against: class strongly predicts attainment; cultural capital favours the middle class; wealth transmits advantage.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: societies have elements of meritocracy but structural inequalities mean 'merit' is partly inherited advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Positions earned by talent. (b) Some mobility exists but class advantage is reproduced — meritocracy is partial.",
            commonErrors: [
              "Accepting or rejecting meritocracy absolutely without weighing evidence.",
            ],
          },
        },
      ],
    },
  ],
};
