import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ciegp-u2-lesson-2-2",
  code: "2-2",
  title: "Complex Issue Analysis",
  goal: "I CAN analyse structural, cultural and power factors in global issues.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: complex analysis", "0457: structural factors"],
  
  vocabulary: [
    { term: "Structural factors", definition: "Systemic causes beyond individual choices." },
    { term: "Cultural lens", definition: "How culture shapes perception." },
    { term: "Power dynamics", definition: "Who has influence over decisions." },
    { term: "Global North/South", definition: "Wealthy vs developing country divide." },
    { term: "Narrative", definition: "Story framing how issue is understood." },
    { term: "Intersectionality", definition: "Overlapping identities shaping experience." },
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
          problem: "Why does 'developing countries should just industrialise' ignore structural factors?",
          solution: "Ignores colonial extraction, debt burdens, unequal trade terms — structural barriers beyond individual effort.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are structural factors?",
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
                              "reasoning": "Structural = systems/economics/history.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Systemic causes"
},
        },
        {
          id: "ciegp-u2-ca-q2",
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
          id: "ciegp-u2-ca-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is analysing power dynamics important for global issues? Give an example.",
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
                              "reasoning": "e.g. wealthy nations set climate policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals hidden inequalities.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Power shapes dominant perspective"
},
        },
        {
          id: "ciegp-u2-ca-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define structural factors, cultural lens, power dynamics, Global North/South, narrative, intersectionality. (b) How does colonial history affect current poverty? (c) Why is 'just work harder' incomplete? (d) How does narrative frame an issue? (e) Give an example of intersectionality. (f) How do trade rules create inequality? (g) Analyse 'immigration' from two national perspectives. (h) What would structural analysis of climate change include?",
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
          "finalAnswer": "Structural and cultural analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-ca-notes",
      title: "Complex analysis — notes",
      summary: "Global issues have structural causes; culture and power shape perspectives.",
      sections: [
        { heading: "Key idea", body: "Analyse systems and contexts, not just individuals." },
        { heading: "Power", body: "Whose voice dominates shapes the 'official' narrative." },
      ],
    },
  ],
};
