import type { Lesson } from "../../../types.ts";

export const lesson362: Lesson = {
  id: "cieihis-u4-lesson-4-2",
  code: "4-2",
  title: "Historical Skills: Chronology and Periodisation",
  goal: "I CAN organise events chronologically and understand historical periods.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: chronology"],
  
  vocabulary: [
    { term: "Chronology", definition: "Arrangement of events in time order." },
    { term: "Periodisation", definition: "Division of history into periods." },
    { term: "Timeline", definition: "Visual representation of events over time." },
    { term: "Century", definition: "100-year period." },
    { term: "Decade", definition: "10-year period." },
    { term: "Era", definition: "Distinct historical period." },
  ],
  concepts: [
    {
      id: "cieihis-u4-s2-chron",
      title: "Chronology",
      skill: "Organise and understand historical time.",
      lesson: {
        sections: [
          {
            heading: "Chronological thinking",
            body: "Understanding sequence matters — cause and effect. Events lead to consequences. Timeline helps see patterns and turning points.",
          },
          {
            heading: "Periodisation",
            body: "History divided into eras: Ancient, Medieval, Early Modern, Modern. IGCSE focuses on 20th century — WWI, interwar, WWII, Cold War, contemporary.",
          },
        ],
        keyFormulas: [
          { name: "Chronology", statement: "time order" },
          { name: "Periodisation", statement: "historical periods" },
        ],
        workedExample: {
          problem: "Place in order: Berlin Wall falls, Cuban Missile Crisis, USSR dissolves, Vietnam War ends.",
          solution: "Cuban Crisis (1962) → Vietnam ends (1975) → Wall falls (1989) → USSR dissolves (1991).",
        },
      },
      questions: [
        {
          id: "cieihs-u4-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is chronology?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Arrangement of events in time order"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A map"
                    },
                    {
                              "id": "d",
                              "text": "A statistical method"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chronology",
                              "statement": "Time order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chronology = events in time order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Time order"
},
        },
        {
          id: "cieihs-u4-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is periodisation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Periodisation",
                              "statement": "Historical periods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division of history into periods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. Ancient, Medieval, Modern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical periods"
},
        },
        {
          id: "cieihs-u4-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is chronology important in history?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Chronological thinking",
                              "statement": "Cause/effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understanding sequence reveals cause/effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows patterns and turning points.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Essential for historical analysis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cause/effect, patterns"
},
        },
        {
          id: "cieihs-u4-ch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define chronology, periodisation, timeline, century, decade, era. (b) What is chronology? (c) What is periodisation? (d) Why is chronology important? (e) What are major 20th century periods? (f) Place in order: Cuban Crisis, Vietnam ends, Wall falls, USSR dissolves. (g) What is a timeline? (h) Explain how periodisation helps understand history.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Chronology",
                              "statement": "Time, periods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Time order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Historical periods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Cause/effect, patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) WWI, interwar, WWII, Cold War.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Correct chronological order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Visual time representation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Organises complexity, reveals patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Chronology and periodisation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u4-ch-notes",
      title: "Chronology — notes",
      summary: "Chronology=time order; periodisation=historical periods. Sequence reveals cause/effect.",
      sections: [
        { heading: "Key idea", body: "Understanding when events happened is essential for historical analysis." },
        { heading: "20th century", body: "WWI→interwar→WWII→Cold War→contemporary periods." },
      ],
    },
  ],
};
