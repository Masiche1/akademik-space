import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ciegp-u2-lesson-2-2",
  code: "2-2",
  title: "Complex Issue Analysis",
  goal: "I CAN analyse structural, cultural and power factors in global issues.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: complex analysis",
    "0457: structural factors",
  ],

  vocabulary: [
    {
      term: "Structural factors",
      definition: "Systemic causes beyond individual choices.",
    },
    { term: "Cultural lens", definition: "How culture shapes perception." },
    { term: "Power dynamics", definition: "Who has influence over decisions." },
    {
      term: "Global North/South",
      definition: "Wealthy vs developing country divide.",
    },
    { term: "Narrative", definition: "Story framing how issue is understood." },
    {
      term: "Intersectionality",
      definition: "Overlapping identities shaping experience.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u2-s2-complex",
      title: "Complex issue analysis",
      skill: "Analyse structural and cultural factors at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Structural analysis",
            body: "Global issues have systemic causes: poverty isn't just personal failure — shaped by economics, colonial history, trade rules. Analyse systems, not just individuals.",
          },
          {
            heading: "Cultural and power context",
            body: "Same issue looks different across cultures. Power dynamics determine whose perspective dominates. Narratives frame understanding — question whose story is told.",
          },
        ],
        keyFormulas: [
          { name: "Structural", statement: "systemic causes" },
          { name: "Power", statement: "who influences decisions" },
          { name: "Cultural lens", statement: "culture shapes perception" },
        ],
        workedExample: {
          problem:
            "Why does 'developing countries should just industrialise' ignore structural factors?",
          solution:
            "Ignores colonial extraction, debt burdens, unequal trade terms — structural barriers beyond individual effort.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are structural factors?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weather patterns",
              },
              {
                id: "b",
                text: "Building designs",
              },
              {
                id: "c",
                text: "Systemic causes beyond individual choices",
              },
              {
                id: "d",
                text: "Personal opinions",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural factors",
                statement: "Systemic causes.",
              },
            ],
            steps: [
              {
                reasoning: "Structural = systems/economics/history.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Systemic causes",
          },
        },
        {
          id: "ciegp-u2-ca-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does a cultural lens change how we see an issue? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cultural lens",
                statement: "Culture shapes perception.",
              },
            ],
            steps: [
              {
                reasoning: "Culture affects values/priorities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. individualism vs collectivism on poverty.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Culture shapes viewpoint",
          },
        },
        {
          id: "ciegp-u2-ca-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is analysing power dynamics important for global issues? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Power dynamics",
                statement: "Who influences decisions.",
              },
            ],
            steps: [
              {
                reasoning: "Power determines whose voice matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. wealthy nations set climate policy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals hidden inequalities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Power shapes dominant perspective",
          },
        },
        {
          id: "ciegp-u2-ca-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define structural factors, cultural lens, power dynamics, Global North/South, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' incomplete? (d) How does narrative frame an issue? (e) Give an example of intersectionality. (f) How do trade rules create inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would structural analysis of climate change include?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Complex analysis",
                statement: "Structural, cultural, power.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Extracted wealth, borders, institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Ignores systemic barriers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Story shapes understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid intersectionality example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Unequal terms disadvantage poor nations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Two valid national perspectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid structural analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structural and cultural analysis.",
          },
        },
        {
          id: "ciegp-u2-ca-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Colonial history shaping current poverty is an example of which kind of factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weather event" },
              { id: "b", text: "Individual attitude" },
              { id: "c", text: "Personal choice" },
              { id: "d", text: "Structural factor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural factor",
                statement: "Systemic cause beyond individual choice.",
              },
            ],
            steps: [
              {
                reasoning: "Colonial history is a systemic cause.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Structural factor",
          },
        },
        {
          id: "ciegp-u2-ca-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'Global North' generally refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wealthy, industrialised countries" },
              { id: "b", text: "Countries that were never colonised" },
              { id: "c", text: "Countries in the northern hemisphere only" },
              { id: "d", text: "Countries near the equator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global North/South",
                statement: "Wealthy vs developing divide.",
              },
            ],
            steps: [
              {
                reasoning: "Global North = wealthy industrialised states.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Wealthy industrialised countries",
          },
        },
        {
          id: "ciegp-u2-ca-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does asking 'whose narrative dominates?' matter when analysing a global issue?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative and power",
                statement: "Dominant stories shape what is seen as true.",
              },
            ],
            steps: [
              {
                reasoning: "Powerful actors' framings marginalise others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Questioning narratives reveals hidden perspectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reveals whose story is told and whose is silenced",
          },
        },
        {
          id: "ciegp-u2-ca-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class lists 8 structural factors and 4 cultural factors for an issue. How many factors in total, and what percentage are structural?",
          response: {
            type: "numeric",
            parts: [
              { label: "Total factors", answer: 12 },
              { label: "Percentage structural", answer: 66.7, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Issue analysis",
                statement: "Counting and proportions of factors.",
              },
            ],
            steps: [
              {
                reasoning: "8 + 4 = 12 total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8/12 x 100 = 66.7% structural.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 factors; 66.7% structural",
          },
        },
        {
          id: "ciegp-u2-ca-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Country A emits 12 tonnes of CO2 per capita and Country B emits 3 tonnes. How many times more does A emit per person?",
          response: {
            type: "numeric",
            parts: [{ label: "Ratio", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data comparison",
                statement: "Ratio of per-capita figures.",
              },
            ],
            steps: [
              {
                reasoning: "12 / 3 = 4 times more.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 times more",
          },
        },
        {
          id: "ciegp-u2-ca-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a dominant narrative can hide structural causes of a global issue, with an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative framing",
                statement: "Stories select causes and blame.",
              },
            ],
            steps: [
              {
                reasoning: "Narratives choose which causes are mentioned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. poverty framed as laziness hides structural causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recognising framing enables deeper analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Framing selects causes; e.g. 'poverty = laziness' hides structures",
          },
        },
        {
          id: "ciegp-u2-ca-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse the claim 'poverty is simply a matter of personal failure' using structural analysis.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural analysis",
                statement: "Poverty shaped by systems, not just choices.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies claim as individual-level only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cites structural causes: economics, history, institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: claim is incomplete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Incomplete — ignores economic, historical and institutional causes",
          },
        },
        {
          id: "ciegp-u2-ca-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes intersectionality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combining two survey methods" },
              {
                id: "b",
                text: "Overlapping identities shaping a person's experience",
              },
              { id: "c", text: "Crossing borders between countries" },
              { id: "d", text: "Intersecting trade routes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intersectionality",
                statement: "Overlapping identities shape experience.",
              },
            ],
            steps: [
              {
                reasoning: "Intersectionality = overlapping identity effects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Overlapping identities",
          },
        },
        {
          id: "ciegp-u2-ca-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 40 people, 25 are women and 15 are men. What percentage are women, and what percentage are men?",
          response: {
            type: "numeric",
            parts: [
              { label: "Women (%)", answer: 62.5 },
              { label: "Men (%)", answer: 37.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sample composition",
                statement: "Group share of sample.",
              },
            ],
            steps: [
              {
                reasoning: "25/40 = 62.5%; 15/40 = 37.5%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both percentages correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "62.5% women; 37.5% men",
          },
        },
        {
          id: "ciegp-u2-ca-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the strongest structural explanation for persistent trade inequality between countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random chance" },
              { id: "b", text: "Unequal trade terms and historical extraction legacies" },
              { id: "c", text: "Too many trade agreements" },
              { id: "d", text: "Developing countries being less intelligent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade structures",
                statement: "Historical and institutional causes.",
              },
            ],
            steps: [
              {
                reasoning: "Unequal terms and legacies are structural.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Unequal trade terms and historical legacies",
          },
        },
        {
          id: "ciegp-u2-ca-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the immigration debate from two different national perspectives, showing how power and narrative shape each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perspective analysis",
                statement: "Same issue, different positions and framings.",
              },
            ],
            steps: [
              {
                reasoning: "Perspective 1: e.g. receiving country sees strain on services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Perspective 2: e.g. sending country sees brain drain/loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Notes power/narrative: media framing differs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced synthesis of both views.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two perspectives + power/narrative analysis + synthesis",
          },
        },
        {
          id: "ciegp-u2-ca-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a survey of 200 people, 30% attribute poverty mainly to personal choices and 70% to structural factors. How many people give each answer?",
          response: {
            type: "numeric",
            parts: [
              { label: "Structural answers", answer: 140 },
              { label: "Personal-choice answers", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey calculation",
                statement: "Percentage of sample.",
              },
            ],
            steps: [
              {
                reasoning: "0.70 x 200 = 140; 0.30 x 200 = 60.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both counts correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "140 structural; 60 personal-choice",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-ca-notes",
      title: "Complex analysis — notes",
      summary:
        "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        {
          heading: "Key idea",
          body: "Analyse systems and contexts, not just individuals.",
        },
        {
          heading: "Power",
          body: "Whose voice dominates shapes the 'official' narrative.",
        },
      ],
    },
  ],
};
