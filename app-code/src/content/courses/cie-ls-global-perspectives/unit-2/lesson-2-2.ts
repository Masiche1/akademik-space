import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cilgp-u2-lesson-2-2",
  code: "2-2",
  title: "Multi-Perspective Analysis of Complex Issues",
  goal: "I CAN analyse how cultural, economic and political factors shape perspectives on global issues.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis", "Cambridge Global Perspectives skills: analysis"],
  stage: 9,
  vocabulary: [
    { term: "Cultural lens", definition: "How culture shapes what we notice and value." },
    { term: "Power dynamics", definition: "Who has influence over decisions." },
    { term: "Global North/South", definition: "Wealthy vs developing country divide." },
    { term: "Structural factors", definition: "Systemic causes beyond individual choices." },
    { term: "Narrative", definition: "The story framing how an issue is understood." },
    { term: "Intersectionality", definition: "Overlapping identities shaping experience." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s2-multipersp",
      title: "Complex issue analysis",
      skill: "Analyse structural and cultural factors in global issues at Stage 9 level.",
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
          { name: "Structural", statement: "systemic causes, not just individuals" },
          { name: "Cultural lens", statement: "culture shapes perception" },
        ],
        workedExample: {
          problem: "Why does 'developing countries should just industrialise' ignore structural factors?",
          solution: "Ignores colonial extraction, debt burdens, unequal trade terms — structural barriers beyond individual effort.",
        },
      },
      questions: [
        {
          id: "cilgp-u2-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are structural factors in a global issue?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Systemic causes beyond individual choices"
                    },
                    {
                              "id": "b",
                              "text": "Building designs"
                    },
                    {
                              "id": "c",
                              "text": "Personal opinions"
                    },
                    {
                              "id": "d",
                              "text": "Weather patterns"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Structural factors",
                              "statement": "Systemic causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Structural = systems/economics/history, not individuals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Systemic causes"
},
        },
        {
          id: "cilgp-u2-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does a cultural lens change how we see an issue? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cultural lens",
                              "statement": "Culture shapes perception."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Culture affects values/priorities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. individualism vs collectivism on poverty.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Culture shapes viewpoint"
},
        },
        {
          id: "cilgp-u2-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is analysing 'power dynamics' important for global issues? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Power dynamics",
                              "statement": "Who influences decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Power determines whose voice matters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. wealthy nations set climate policy despite poorest suffering most.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals hidden inequalities.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Power shapes whose perspective dominates"
},
        },
        {
          id: "cilgp-u2-mp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cultural lens, power dynamics, Global North/South, structural factors, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' an incomplete analysis? (d) How does narrative frame an issue? (e) Give an example of intersectionality in a global issue. (f) How do trade rules create structural inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would a structural analysis of climate change include?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Complex analysis",
                              "statement": "Structural, cultural, power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Extracted wealth, borders, institutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Ignores systemic barriers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Story shapes understanding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid intersectionality example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unequal terms disadvantage poor nations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Two valid national perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid structural analysis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Structural and cultural analysis of global issues."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-mp-notes",
      title: "Complex analysis — notes",
      summary: "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        { heading: "Key idea", body: "Analyse systems and contexts, not just individual choices." },
        { heading: "Power", body: "Whose voice dominates shapes the 'official' narrative." },
      ],
    },
  ],
};
