import type { Lesson } from "../../../types.ts";

export const lesson363: Lesson = {
  id: "cieihis-u4-lesson-4-3",
  code: "4-3",
  title: "Historical Skills: Historical Significance",
  goal: "I CAN evaluate the historical significance of events and figures.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: significance"],
  
  vocabulary: [
    { term: "Significance", definition: "Historical importance of events/figures." },
    { term: "Impact", definition: "Effect on people/events." },
    { term: "Legacy", definition: "Long-term consequences." },
    { term: "Turning point", definition: "Event that changes historical direction." },
    { term: "Scale", definition: "Size/scope of impact." },
    { term: "Duration", definition: "Length of impact." },
  ],
  concepts: [
    {
      id: "cieihis-u4-s3-sig",
      title: "Historical significance",
      skill: "Evaluate historical importance.",
      lesson: {
        sections: [
          {
            heading: "Evaluating significance",
            body: "Impact: who/what affected? Scale: how widespread? Duration: short/long-term? Legacy: lasting consequences? Turning point: did it change direction?",
          },
          {
            heading: "Significant events",
            body: "WWII, Cold War, Holocaust, decolonisation, Civil Rights — transformed world. Figures: MLK, Mandela, Gandhi, Churchill — shaped history.",
          },
        ],
        keyFormulas: [
          { name: "Significance", statement: "historical importance" },
          { name: "Turning point", statement: "changes direction" },
        ],
        workedExample: {
          problem: "Was the fall of the Berlin Wall significant?",
          solution: "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions, reshaped global politics.",
        },
      },
      questions: [
        {
          id: "cieihs-u4-sg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical significance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Historical importance of events/figures"
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
          id: "cieihs-u4-sg-q2",
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
                              "reasoning": "Event that changes historical direction.",
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
          id: "cieihs-u4-sg-q3",
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
                              "name": "Significance evaluation",
                              "statement": "Impact assessment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact: who/what affected?",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scale/duration/legacy.",
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
          id: "cieihs-u4-sg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define significance, impact, legacy, turning point, scale, duration. (b) What is significance? (c) What is a turning point? (d) How evaluate significance? (e) Was Cold War significant? Why? (f) Was Civil Rights significant? Why? (g) Was Mandela significant? Why? (h) Evaluate which 20th century event was most significant.",
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
                              "reasoning": "(c) Direction change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Impact, scale, duration, legacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Yes — shaped world politics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Yes — transformed US race relations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Yes — ended apartheid, model for reconciliation.",
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
      id: "cieihis-u4-sg-notes",
      title: "Significance — notes",
      summary: "Significance=historical importance. Evaluate impact, scale, duration, legacy, turning point.",
      sections: [
        { heading: "Key idea", body: "Not all events are equally significant — evaluate carefully." },
        { heading: "Criteria", body: "Impact, scale, duration, legacy determine significance." },
      ],
    },
  ],
};
