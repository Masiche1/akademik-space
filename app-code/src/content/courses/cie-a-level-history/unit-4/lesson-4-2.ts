import type { Lesson } from "../../../types.ts";

export const lesson642: Lesson = {
  id: "ciealhis-u4-lesson-4-2",
  code: "4-2",
  title: "Cold War: Comparative Analysis",
  goal: "I CAN compare and contrast superpower strategies and outcomes.",
  standards: ["Cambridge A Level History 9489", "Paper 1: analysis"],
  
  vocabulary: [
    { term: "Containment", definition: "US policy to prevent communism." },
    { term: "Expansionism", definition: "Soviet policy to spread communism." },
    { term: "Detente", definition: "Period of reduced tension." },
    { term: "Proxy war", definition: "Conflict through allies." },
    { term: "Arms race", definition: "Nuclear weapons competition." },
    { term: "Spheres of influence", definition: "Areas controlled by superpowers." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s2-comp",
      title: "Comparative analysis",
      skill: "Compare superpower strategies.",
      lesson: {
        sections: [
          {
            heading: "US strategy",
            body: "Containment: prevent communism spread. Marshall Plan: economic aid. NATO: military alliance. Nuclear deterrence: MAD doctrine.",
          },
          {
            heading: "Soviet strategy",
            body: "Expansionism: spread communism. Comecon: economic bloc. Warsaw Pact: military alliance. Proxy support: Korea, Vietnam, Afghanistan.",
          },
        ],
        keyFormulas: [
          { name: "US", statement: "containment" },
          { name: "USSR", statement: "expansionism" },
          { name: "Proxy", statement: "allied conflict" },
        ],
        workedExample: {
          problem: "Compare US and Soviet approaches to Cold War.",
          solution: "US: containment, economic aid, alliances. USSR: expansion, military support, proxy wars. Both avoided direct conflict.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was US containment policy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prevent communism spread"
                    },
                    {
                              "id": "b",
                              "text": "Spread communism"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A military alliance"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Containment",
                              "statement": "Prevent communism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Containment = prevent communism spread.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prevent communism"
},
        },
        {
          id: "ciealhis-u4-comp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was Soviet expansionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expansionism",
                              "statement": "Communism spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet policy to spread communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Through military, political, economic means.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communism spread"
},
        },
        {
          id: "ciealhis-u4-comp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare US and Soviet Cold War strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US: containment, economic aid, NATO.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "USSR: expansion, Warsaw Pact, proxies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both avoided direct war.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Containment vs expansion"
},
        },
        {
          id: "ciealhis-u4-comp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define containment, expansionism, detente, proxy war, arms race, spheres of influence. (b) What was containment? (c) What was expansionism? (d) What was detente? (e) What was proxy war? (f) What was arms race? (g) What were spheres of influence? (h) Evaluate which superpower 'won' the Cold War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Comparison",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Prevent communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Spread communism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Reduced tension.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Allied conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Nuclear competition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Controlled areas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) USSR collapsed — US strategic victory.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cold War comparative analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-comp-notes",
      title: "Comparison — notes",
      summary: "US containment vs USSR expansion. Both used proxies and alliances.",
      sections: [
        { heading: "Key idea", body: "Superpower strategies shaped Cold War outcomes." },
        { heading: "Outcome", body: "US strategic victory — USSR collapsed." },
      ],
    },
  ],
};
