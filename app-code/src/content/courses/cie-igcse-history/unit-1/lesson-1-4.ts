import type { Lesson } from "../../../types.ts";

export const lesson334: Lesson = {
  id: "cieihis-u1-lesson-1-4",
  code: "1-4",
  title: "The Cold War: End of the Cold War",
  goal: "I CAN explain the causes and consequences of the Cold War's end.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: end of Cold War"],
  
  vocabulary: [
    { term: "Glasnost", definition: "Soviet policy of openness/transparency." },
    { term: "Perestroika", definition: "Soviet policy of restructuring." },
    { term: "Reunification", definition: "East and West Germany joining again." },
    { term: "Soviet collapse", definition: "Dissolution of USSR 1991." },
    { term: "Fall of Berlin Wall", definition: "1989 event symbolising Cold War end." },
    { term: "Eastern bloc", definition: "Soviet-aligned countries." },
  ],
  concepts: [
    {
      id: "cieihis-u1-s4-end",
      title: "End of Cold War",
      skill: "Understand Cold War collapse causes.",
      lesson: {
        sections: [
          {
            heading: "Gorbachev reforms",
            body: "1985: Gorbachev became Soviet leader. Glasnost (openness) and perestroika (restructuring) aimed to reform system but unleashed forces he couldn't control.",
          },
          {
            heading: "Collapse",
            body: "1989: Berlin Wall fell, Eastern European revolutions. 1991: Soviet Union dissolved. Causes: economic stagnation, military burden, nationalism, reform failures.",
          },
        ],
        keyFormulas: [
          { name: "Glasnost", statement: "openness" },
          { name: "Perestroika", statement: "restructuring" },
          { name: "1991", statement: "USSR dissolved" },
        ],
        workedExample: {
          problem: "Why did the Soviet Union collapse in 1991?",
          solution: "Economic stagnation + military spending + nationalism + failed reforms → system collapse.",
        },
      },
      questions: [
        {
          id: "cieihis-u1-end-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was glasnost?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Soviet policy of openness"
                    },
                    {
                              "id": "b",
                              "text": "A military strategy"
                    },
                    {
                              "id": "c",
                              "text": "An economic plan"
                    },
                    {
                              "id": "d",
                              "text": "A peace treaty"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Glasnost",
                              "statement": "Openness policy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glasnost = Soviet openness/transparency.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Openness policy"
},
        },
        {
          id: "cieihis-u1-end-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was perestroika?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perestroika",
                              "statement": "Restructuring policy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet policy of restructuring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aimed to reform economic/political system.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Restructuring policy"
},
        },
        {
          id: "cieihis-u1-end-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the Cold War end?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cold War end",
                              "statement": "Collapse causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet economic stagnation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Military spending burden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nationalism + reform failures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic + military + nationalism"
},
        },
        {
          id: "cieihis-u1-end-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define glasnost, perestroika, reunification, Soviet collapse, Berlin Wall, Eastern bloc. (b) What was glasnost? (c) What was perestroika? (d) When did Berlin Wall fall? (e) When did USSR dissolve? (f) What caused Soviet collapse? (g) What was the significance of 1989? (h) Evaluate whether Gorbachev intended to end the Cold War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cold War end",
                              "statement": "Causes, consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Openness policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Restructuring policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1989.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1991.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Economic stagnation, military burden, nationalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Symbolised Cold War end.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "End of Cold War."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u1-end-notes",
      title: "Cold War end — notes",
      summary: "Gorbachev reforms→uncontrolled change→1989 wall falls→1991 USSR dissolves. Causes: economy, military, nationalism.",
      sections: [
        { heading: "Key idea", body: "Reform attempts unleashed forces that destroyed the Soviet system." },
        { heading: "Consequences", body: "End of bipolar world, rise of US unipolarity, new conflicts." },
      ],
    },
  ],
};
