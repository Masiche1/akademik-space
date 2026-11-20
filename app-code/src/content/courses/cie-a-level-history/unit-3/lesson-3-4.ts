import type { Lesson } from "../../../types.ts";

export const lesson634: Lesson = {
  id: "ciealhis-u3-lesson-3-4",
  code: "3-4",
  title: "Historical Significance and Chronology",
  goal: "I CAN evaluate historical significance and organise chronologically.",
  standards: ["Cambridge A Level History 9489", "Paper 3: significance"],
  
  vocabulary: [
    { term: "Significance", definition: "Historical importance." },
    { term: "Chronology", definition: "Arrangement of events in time." },
    { term: "Periodisation", definition: "Division of history into periods." },
    { term: "Turning point", definition: "Event changing historical direction." },
    { term: "Scale", definition: "Size/scope of impact." },
    { term: "Duration", definition: "Length of impact." },
  ],
  concepts: [
    {
      id: "ciealhis-u3-s4-sig",
      title: "Significance and chronology",
      skill: "Evaluate historical importance.",
      lesson: {
        sections: [
          {
            heading: "Significance",
            body: "Impact: who/what affected? Scale: how widespread? Duration: short/long-term? Legacy: lasting consequences? Turning point?",
          },
          {
            heading: "Chronology",
            body: "Understanding sequence matters — cause and effect. Timeline shows patterns and turning points. Periodisation divides history into eras.",
          },
        ],
        keyFormulas: [
          { name: "Significance", statement: "historical importance" },
          { name: "Chronology", statement: "time order" },
          { name: "Turning point", statement: "direction change" },
        ],
        workedExample: {
          problem: "Was the fall of Berlin Wall significant?",
          solution: "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions.",
        },
      },
      questions: [
        {
          id: "ciealhis-u3-sg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical significance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Historical importance"
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
                              "name": "Significance",
                              "statement": "Historical importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Significance = historical importance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical importance"
},
        },
        {
          id: "ciealhis-u3-sg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a turning point?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Turning point",
                              "statement": "Direction change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Event changing historical direction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Marks major shift in events.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Direction change event"
},
        },
        {
          id: "ciealhis-u3-sg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you evaluate historical significance?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact: who/what affected?",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scale, duration, legacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Turning point?",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Impact, scale, duration, legacy"
},
        },
        {
          id: "ciealhis-u3-sg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define significance, chronology, periodisation, turning point, scale, duration. (b) What is significance? (c) What is chronology? (d) How evaluate significance? (e) What is periodisation? (f) What is turning point? (g) Why is chronology important? (h) Evaluate which 20th century event was most significant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Significance",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Historical importance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Time order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Impact, scale, duration, legacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Historical periods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Direction change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cause/effect, patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid evaluation with justification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical significance evaluation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u3-sg-notes",
      title: "Significance — notes",
      summary: "Significance=historical importance. Evaluate impact, scale, duration, legacy.",
      sections: [
        { heading: "Key idea", body: "Not all events are equally significant — evaluate carefully." },
        { heading: "Chronology", body: "Understanding sequence reveals cause/effect and turning points." },
      ],
    },
  ],
};
