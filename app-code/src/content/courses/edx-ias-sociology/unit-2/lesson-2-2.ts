import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eias-soc-u2-lesson-2-2",
  code: "2-2",
  title: "Class and Cultural Identity",
  goal: "I CAN explain how class and cultural capital shape identity.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 2 — Culture and Identity"],
  vocabulary: [
    {
      term: "Social class",
      definition: "Economic position — working, middle, upper.",
    },
    {
      term: "Cultural capital",
      definition: "Knowledge, skills, education giving social advantage.",
    },
    {
      term: "Habitus",
      definition: "Dispositions shaped by class — tastes, attitudes.",
    },
    { term: "Social mobility", definition: "Movement between social classes." },
    { term: "Deprivation", definition: "Lack of material resources." },
    {
      term: "Discrimination",
      definition: "Unfair treatment based on group membership.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u2-class",
      title: "Class and Identity",
      skill: "Explain how class shapes identity and opportunity.",
      lesson: {
        sections: [
          {
            heading: "Class and identity",
            body: "**Working class**: manual work, lower income — values: loyalty, immediate gratification. **Middle class**: professional work — values: achievement, delayed gratification, planning. **Upper class**: wealthy, elite — power, exclusivity.\n\n**Cultural capital** (Bourdieu): middle/upper class have knowledge, language, education — school rewards this → advantage. **Habitus**: class-shaped dispositions — tastes, mannerisms, attitudes.",
          },
          {
            heading: "Class and life chances",
            body: "**Education**: middle-class succeed more — cultural capital matches school expectations. **Health**: working-class worse health — less income, worse housing. **Employment**: middle-class better jobs — networks, qualifications.\n\n**Social mobility**: movement between classes — upward possible but limited; downward mobility exists. **Evaluation**: class still powerful but not deterministic — individual agency matters.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Middle-class child knows 'correct' ways to speak in formal settings. Type?",
          solution: "Cultural capital.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-class-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cultural capital?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Knowledge, skills, education giving advantage",
              },
              { id: "b", text: "Physical capital" },
              { id: "c", text: "Money only" },
              { id: "d", text: "Social connections only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural capital",
                statement: "Knowledge advantage.",
              },
            ],
            steps: [
              {
                reasoning: "Cultural capital = knowledge/skills.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Knowledge advantage",
            commonErrors: ["Money confused."],
          },
        },
        {
          id: "eias-soc-u2-class-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways class affects life chances.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class effects",
                statement: "Education + health.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Education — middle-class succeed more (cultural capital).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Health — working-class worse health (deprivation).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Employment — middle-class better jobs (networks, qualifications).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Education, health, employment.",
            commonErrors: ["Only one.", "Wrong area."],
          },
        },
        {
          id: "eias-soc-u2-class-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Bourdieu's concept of habitus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitus",
                statement: "Class dispositions.",
              },
            ],
            steps: [
              {
                reasoning: "Dispositions shaped by class — tastes, attitudes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Middle-class: 'refined' tastes, formal manners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Working-class: 'practical' tastes, informal manner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Habitus matches school expectations — middle-class advantage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Class-shaped tastes/attitudes.",
            commonErrors: ["Fixed trait.", "No class link."],
          },
        },
        {
          id: "eias-soc-u2-class-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Working-class student outperforms middle-class peer.",
          parts: [
            { label: "a", prompt: "Explain why this is unusual.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest factors enabling success.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Class mobility",
                statement: "Exception + factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Middle-class have cultural capital — school advantage.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Working-class lack resources — fewer opportunities.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Individual agency — hard work, talent.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Support — scholarships, mentors, supportive teachers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) capital+resources (b) agency+support",
            commonErrors: ["Impossible.", "No factors."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u2-globalisation",
      title: "Globalisation and Cultural Identity",
      skill: "Explain how globalisation affects cultural identity.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "**Globalisation**: increasing interconnectedness — trade, communication, culture flows globally. **Cultural globalisation**: spread of Western consumer culture — McDonald's, Hollywood, brands. **Cultural homogenisation**: cultures becoming similar — loss of diversity.\n\n**Hybridisation**: cultures blend — fusion cuisine, music mixing — new identities emerge.",
          },
          {
            heading: "Identity and globalisation",
            body: "**Global identity**: 'citizen of the world' — cosmopolitan outlook. **Local identity**: strengthened by globalisation — reaction against global culture. **Glocalisation**: global products adapted locally — McDonald's menus vary by country.\n\n**Evaluation**: globalisation both threatens local culture and enables cultural exchange — complex effects.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Japanese teen wears American jeans but eats local food. Concept?",
          solution: "Hybrid identity.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cultural globalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local culture only" },
              { id: "b", text: "Political globalisation" },
              { id: "c", text: "Spread of culture across borders" },
              { id: "d", text: "Trade only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural globalisation",
                statement: "Culture flows globally.",
              },
            ],
            steps: [
              {
                reasoning: "Cultural globalisation = culture spread.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Culture spread",
            commonErrors: ["Trade confused."],
          },
        },
        {
          id: "eias-soc-u2-glob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two effects of globalisation on identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation effects",
                statement: "Homogenisation + hybrid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homogenisation — cultures become similar (Western dominance).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hybridisation — cultures blend, new identities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Local identity strengthened — reaction to global.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Homogenisation, hybridisation, local reaction.",
            commonErrors: ["Only one.", "Wrong effect."],
          },
        },
        {
          id: "eias-soc-u2-glob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain cultural homogenisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homogenisation",
                statement: "Loss of diversity.",
              },
            ],
            steps: [
              {
                reasoning: "Global culture spreads — Western brands, media.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Local traditions decline — replaced by global.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cultures become similar — loss of uniqueness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Critics: threatens cultural diversity, identity.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Global spread → cultures similar.",
            commonErrors: ["More diversity.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u2-glob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Local cuisine chain faces competition from global fast food.",
          parts: [
            { label: "a", prompt: "Explain cultural threat.", marks: 4 },
            { label: "b", prompt: "Suggest adaptation strategies.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural adaptation",
                statement: "Threat + response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Global brands dominate — local culture marginalised.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Loss of culinary traditions — homogenisation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Glocalise — adapt to local tastes, ingredients.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Emphasise uniqueness — heritage, authenticity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) domination+loss (b) glocalise+heritage",
            commonErrors: ["No threat.", "No adaptation."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u2-evaluation",
      title: "Evaluating Culture and Identity",
      skill: "Critically evaluate concepts of culture and identity.",
      lesson: {
        sections: [
          {
            heading: "Conceptual issues",
            body: "**Culture defined?**: fuzzy boundaries — what counts as 'culture'? **Identity fixed?**: identity fluid, multiple — not single 'true self'. **High vs popular?**: artificial divide — boundaries blur, all culture has value.\n\n**Cultural capital criticism**: reproduces inequality — middle-class advantage justified as 'natural' ability.",
          },
          {
            heading: "Postmodern view",
            body: "**Fragmented identity**: multiple identities — work, family, online, national. **Consumer identity**: identity through consumption — brands express self. **Pick-and-mix culture**: individuals choose cultural elements — less determined by class/ethnicity.\n\n**Evaluation**: postmodern view shows agency but may overstate choice — structural constraints remain.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Person has different identities at work vs home vs online. Concept?",
          solution: "Fragmented identity.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is fragmented identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed identity" },
              { id: "b", text: "Lost identity" },
              { id: "c", text: "Multiple identities in different contexts" },
              { id: "d", text: "Single identity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fragmented identity",
                statement: "Multiple selves.",
              },
            ],
            steps: [
              {
                reasoning: "Fragmented = multiple identities.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Multiple identities",
            commonErrors: ["Single confused."],
          },
        },
        {
          id: "eias-soc-u2-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criticisms of cultural capital theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CC criticism",
                statement: "Reproduces inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Justifies inequality — middle-class advantage as 'natural'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ignores resistance — working-class can challenge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Not deterministic — individual agency matters.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Justifies inequality, ignores agency.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-soc-u2-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain postmodern view of identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern identity",
                statement: "Choice + fragmentation.",
              },
            ],
            steps: [
              {
                reasoning: "Fragmented — multiple identities, not single self.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumer identity — identity through consumption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pick-and-mix — choose cultural elements freely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less determined — class/ethnicity less fixed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Fragmented+consumer+choice.",
            commonErrors: ["Fixed identity.", "No postmodern."],
          },
        },
        {
          id: "eias-soc-u2-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the concept of 'high culture'.",
          parts: [
            { label: "a", prompt: "Give two criticisms.", marks: 4 },
            { label: "b", prompt: "Suggest alternative view.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "High culture critique",
                statement: "Elitism + boundaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Elitist — devalues popular culture, class bias.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Boundaries blur — 'high' art becomes popular.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) All culture has value — context matters.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Popular culture reflects society — equally important.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) elitist+blurred (b) all culture valid",
            commonErrors: ["High superior.", "No alternative."],
          },
        },
      ],
    },
  ],
};
