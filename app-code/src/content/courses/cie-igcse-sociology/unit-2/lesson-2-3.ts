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
              {
                id: "a",
                text: "The hierarchical arrangement of society into unequal layers",
              },
              { id: "b", text: "The process of socialisation" },
              { id: "c", text: "Cultural diversity" },
              { id: "d", text: "The division of labour in society" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cieisoc-u2-strat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social mobility refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Migration between countries" },
              { id: "b", text: "The division of labour" },
              { id: "c", text: "Movement up or down the social hierarchy" },
              { id: "d", text: "Changing one's job within the same class" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social mobility",
                statement:
                  "Movement up or down the social hierarchy between generations or within a lifetime.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social mobility = movement between strata; job change within a class is not mobility between layers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Movement up or down the social hierarchy.",
            commonErrors: [
              "Confusing social mobility with changing jobs or migrating.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'class' in sociological terms and name one dimension of stratification alongside it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Class",
                statement:
                  "A social grouping defined by economic position — ownership and occupation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Class = a grouping based on economic position — ownership of property and type of occupation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Other dimensions: status (prestige) or power (influence).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Class is an economic grouping; stratification also includes status and power.",
            commonErrors: [
              "Confusing class with status or defining it only by income.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between upward and downward social mobility, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Types of mobility",
                statement:
                  "Upward = moving to a higher stratum; downward = moving to a lower one.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Upward mobility: moving to a higher position — e.g. a child of manual workers becoming a doctor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Downward mobility: moving to a lower position — e.g. a middle-class family losing status through unemployment or debt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mobility can be intergenerational (between generations) or intragenerational (within a lifetime).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Upward = rise in stratum (worker's child becomes professional); downward = fall (middle-class family loses status).",
            commonErrors: [
              "Mentioning only upward mobility or giving examples without the direction.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why caste systems are described as 'closed' systems of stratification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closed stratification",
                statement:
                  "Status is ascribed at birth and cannot be changed through effort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Caste position is inherited at birth — a person is born into a fixed hereditary group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marriage, occupation and social contact are restricted by caste rules, preventing movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike class systems, no amount of effort or achievement can change one's caste — hence 'closed'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Caste is closed because status is fixed at birth and rules prevent any mobility between groups.",
            commonErrors: [
              "Confusing caste with class — caste is ascribed, class is more open.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of a closed system of stratification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A caste system" },
              { id: "b", text: "A job market" },
              { id: "c", text: "A modern class society" },
              { id: "d", text: "A democratic election" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Closed system",
                statement:
                  "Status fixed at birth with no mobility — e.g. caste, slavery.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Caste fixes status at birth; class societies are relatively open.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A caste system.",
            commonErrors: [
              "Choosing class society, which is comparatively open.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how cultural capital can advantage middle-class children in education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cultural capital",
                statement:
                  "Middle-class knowledge, language and values are rewarded by schools.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cultural capital = the knowledge, language and attitudes a child absorbs from family background.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Schools reward middle-class culture — confident speech, familiarity with books — as 'ability'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Working-class children may start at a disadvantage, reproducing class inequality through 'merit'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Middle-class cultural capital matches what schools reward, so class advantage appears as merit.",
            commonErrors: [
              "Defining cultural capital only as money — it is knowledge, language and values.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Life chances' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random luck in life" },
              {
                id: "b",
                text: "The opportunities for health, education, income and success shaped by social position",
              },
              { id: "c", text: "A type of social mobility" },
              { id: "d", text: "The number of job applications sent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Life chances",
                statement:
                  "Opportunities for health, education and success shaped by social position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Life chances are structured by class — not random luck or mobility itself.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Opportunities for health, education, income and success shaped by social position.",
            commonErrors: [
              "Interpreting life chances as luck rather than structured opportunity.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how social class affects health outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Class and health",
                statement:
                  "Lower classes face worse material conditions and shorter life expectancy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Material factors: lower income means worse housing, nutrition and access to healthcare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Occupational factors: manual work carries more hazards and stress; unemployment harms health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Result: lower social classes have shorter life expectancy and higher illness rates — evidence of unequal life chances.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lower class brings worse material conditions, hazardous work and less healthcare access — shorter life expectancy.",
            commonErrors: [
              "Explaining health differences by lifestyle choice alone, ignoring structural factors.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Meritocracy is the idea that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Positions are allocated by ability and effort rather than birth",
              },
              { id: "b", text: "All members of society are equal",
              },
              {
                id: "c",
                text: "Positions are allocated by inherited wealth",
              },
              { id: "d", text: "Social class does not exist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meritocracy",
                statement:
                  "Positions allocated by ability and effort rather than birth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meritocracy = selection on merit; inherited wealth and equality claims are different ideas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Positions are allocated by ability and effort rather than birth.",
            commonErrors: [
              "Confusing meritocracy with inherited privilege or equality of outcome.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three dimensions of social stratification identified by sociologists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stratification dimensions",
                statement:
                  "Class (economics), status (prestige) and power (influence).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Class — economic position based on ownership and occupation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Status (prestige) and power (ability to influence others).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Class, status and power.",
            commonErrors: [
              "Listing only class and omitting status and power.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons why social mobility in modern societies is limited despite being possible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limited mobility",
                statement:
                  "Open systems allow movement, but origins still strongly predict destinations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family background transmits advantage — wealth, cultural capital and networks favour the middle class.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unequal access to quality education and healthcare means starting points differ by class.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence shows class strongly predicts educational and occupational outcomes — mobility is the exception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structural barriers — discrimination, regional inequality — further restrict movement for some groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mobility is limited because family advantage, unequal education and structural barriers reproduce class positions.",
            commonErrors: [
              "Claiming mobility is either impossible or unrestricted.",
            ],
          },
        },
        {
          id: "cieisoc-u2-strat-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the Marxist claim that inequality in society is reproduced rather than earned.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the Marxist explanation of how inequality is reproduced.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the claim against the meritocratic view, reaching a judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality debate",
                statement:
                  "Marxism: class advantage reproduced by institutions; meritocracy: rewards for talent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ownership: the bourgeoisie controls production and accumulates wealth across generations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Institutions — education, media, law — reward middle-class culture and legitimize inequality as 'merit'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Wealth, networks and cultural capital transmit advantage to children, reproducing class positions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Meritocratic view: exams and open competition do select on ability; some mobility and entrepreneurship exist.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "However, evidence shows class strongly predicts attainment — 'merit' partly reflects inherited advantage.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: inequality is partly earned but largely reproduced — meritocracy is an ideology that disguises structural advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Inequality reproduced via ownership, institutions and transmitted advantage. (b) Meritocracy partially true but largely masks reproduction.",
            commonErrors: [
              "Accepting either Marxist or meritocratic claims absolutely without weighing evidence.",
            ],
          },
        },
      ],
    },
  ],
};
