import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cilgp-u2-lesson-2-2",
  code: "2-2",
  title: "Multi-Perspective Analysis of Complex Issues",
  goal: "I CAN analyse how cultural, economic and political factors shape perspectives on global issues.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis",
    "Cambridge Global Perspectives skills: analysis",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Cultural lens",
      definition: "How culture shapes what we notice and value.",
    },
    { term: "Power dynamics", definition: "Who has influence over decisions." },
    {
      term: "Global North/South",
      definition: "Wealthy vs developing country divide.",
    },
    {
      term: "Structural factors",
      definition: "Systemic causes beyond individual choices.",
    },
    {
      term: "Narrative",
      definition: "The story framing how an issue is understood.",
    },
    {
      term: "Intersectionality",
      definition: "Overlapping identities shaping experience.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u2-s2-multipersp",
      title: "Complex issue analysis",
      skill:
        "Analyse structural and cultural factors in global issues at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Beyond individual views",
            body: "Global issues have structural causes: poverty isn't just personal failure — it's shaped by economics, colonial history, trade rules. Analyse systems, not just individuals.",
          },
          {
            heading: "Cultural context",
            body: "The same issue looks different across cultures: water scarcity means different things in arid vs industrialised nations. Power dynamics determine whose perspective dominates.",
          },
        ],
        keyFormulas: [
          {
            name: "Structural",
            statement: "systemic causes, not just individuals",
          },
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
          id: "cilgp-u2-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are structural factors in a global issue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Systemic causes beyond individual choices",
              },
              {
                id: "b",
                text: "Personal opinions",
              },
              {
                id: "c",
                text: "Weather patterns",
              },
              {
                id: "d",
                text: "Building designs",
              },
            ],
            correctChoiceId: "a",
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
                reasoning:
                  "Structural = systems/economics/history, not individuals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Systemic causes",
          },
        },
        {
          id: "cilgp-u2-mp-q2",
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
          id: "cilgp-u2-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is analysing 'power dynamics' important for global issues? Give an example.",
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
                reasoning:
                  "e.g. wealthy nations set climate policy despite poorest suffering most.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals hidden inequalities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Power shapes whose perspective dominates",
          },
        },
        {
          id: "cilgp-u2-mp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cultural lens, power dynamics, Global North/South, structural factors, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' an incomplete analysis? (d) How does narrative frame an issue? (e) Give an example of intersectionality in a global issue. (f) How do trade rules create structural inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would a structural analysis of climate change include?",
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
            finalAnswer: "Structural and cultural analysis of global issues.",
          },
        },
        {
          id: "cilgp-u2-mp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'narrative' in the context of global issues?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of map",
              },
              {
                id: "b",
                text: "A voting system",
              },
              {
                id: "c",
                text: "A statistical formula",
              },
              {
                id: "d",
                text: "The story framing how an issue is understood",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative",
                statement: "Framing story of an issue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Narratives shape which facts are emphasised and how the issue is seen.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "The story framing how an issue is understood",
          },
        },
        {
          id: "cilgp-u2-mp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A researcher analyses 20 news articles about a global issue. 14 come from Global North outlets and 6 from Global South outlets. How many articles come from the Global South?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Count from total",
                statement: "Total minus known part.",
              },
            ],
            steps: [
              {
                reasoning: "20 - 14 = 6 articles from the Global South.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilgp-u2-mp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how colonial history can shape inequality in the world today, giving one example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural analysis",
                statement: "Historical/systemic causes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial extraction removed wealth and shaped borders/institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid example, e.g. arbitrary borders grouping rival groups, or economies structured around raw-material export.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Extracted wealth and imposed institutions persist today",
          },
        },
        {
          id: "cilgp-u2-mp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a structural factor rather than an individual choice?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Choosing to recycle at home",
              },
              {
                id: "b",
                text: "A family's budget decisions",
              },
              {
                id: "c",
                text: "International trade rules that favour wealthy nations",
              },
              {
                id: "d",
                text: "A student's daily habits",
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
                reasoning:
                  "Trade rules are systemic; the others are individual choices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trade rules — systemic, not individual",
          },
        },
        {
          id: "cilgp-u2-mp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An issue affects 5 stakeholder groups. 2 of them are based in Global South countries. How many stakeholder groups are based elsewhere (Global North or other)?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Complement",
                statement: "Total minus subgroup.",
              },
            ],
            steps: [
              {
                reasoning: "5 - 2 = 3 groups elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilgp-u2-mp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse 'why should poor countries preserve their forests?' from both a Global North and a Global South perspective.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-perspective analysis",
                statement: "Different positions, different views.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Global North view: forests are global carbon sinks — preservation benefits everyone; may ignore local costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Global South view: forests are livelihoods and development resources — preservation may be seen as imposed by wealthy nations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power dynamics: wealthy nations set the agenda; fair solutions must share benefits/costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "North sees global good; South sees local cost — power imbalance matters",
          },
        },
        {
          id: "cilgp-u2-mp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is intersectionality?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Overlapping identities that shape a person's experience",
              },
              {
                id: "b",
                text: "A type of trade agreement",
              },
              {
                id: "c",
                text: "A statistical method",
              },
              {
                id: "d",
                text: "Where two roads meet",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intersectionality",
                statement: "Overlapping identities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intersectionality = identities like gender, class, ethnicity combine to shape experience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Overlapping identities shaping experience",
          },
        },
        {
          id: "cilgp-u2-mp-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An analysis compares 4 cultural lenses applied to 3 different global issues. How many lens-issue combinations are examined in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Combinations",
                statement: "Number of lenses x number of issues.",
              },
            ],
            steps: [
              {
                reasoning: "4 x 3 = 12 combinations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 12.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cilgp-u2-mp-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the narrative 'developing countries should just work harder to escape poverty' is an incomplete analysis.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative critique",
                statement: "Question framing stories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It ignores structural barriers: debt, unequal trade terms, colonial history.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It blames individuals for systemic problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Complete analysis must examine systems, not just personal effort.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ignores structural causes; blames individuals",
          },
        },
        {
          id: "cilgp-u2-mp-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Whose perspectives most often dominate global media narratives about global issues?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The poorest communities",
              },
              {
                id: "b",
                text: "Wealthy nations and powerful institutions",
              },
              {
                id: "c",
                text: "No one — all views are equal",
              },
              {
                id: "d",
                text: "Random citizens",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Power dynamics",
                statement: "Who shapes narratives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Powerful actors have more media access and influence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Wealthy nations and powerful institutions",
          },
        },
        {
          id: "cilgp-u2-mp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A country has 10% of the world's population but produces 25% of global CO2 emissions. How many times its population share is its emissions share?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2.5,
                unit: "times",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Ratio",
                statement: "Emissions share / population share.",
              },
            ],
            steps: [
              {
                reasoning: "25 / 10 = 2.5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The country emits 2.5 times its 'fair share' per person.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2.5 times.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.5 times",
          },
        },
        {
          id: "cilgp-u2-mp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse 'fast fashion' structurally: (a) name two systemic causes, (b) one cultural factor shaping demand, (c) one power dynamic at play, (d) why individual 'buy less' advice is incomplete.",
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
                reasoning:
                  "(a) Two valid systemic causes, e.g. globalised supply chains, cheap labour, profit-driven overproduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid cultural factor, e.g. social media trend cycles, consumer culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid power dynamic, e.g. corporations and wealthy consumers hold most influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Individual choice ignores system incentives — regulation and corporate responsibility also needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structural, cultural and power analysis of fast fashion",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-mp-notes",
      title: "Complex analysis — notes",
      summary:
        "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        {
          heading: "Key idea",
          body: "Analyse systems and contexts, not just individual choices.",
        },
        {
          heading: "Power",
          body: "Whose voice dominates shapes the 'official' narrative.",
        },
      ],
    },
  ],
};
