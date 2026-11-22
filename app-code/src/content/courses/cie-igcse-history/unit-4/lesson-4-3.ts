import type { Lesson } from "../../../types.ts";

export const lesson363: Lesson = {
  id: "cieihis-u4-lesson-4-3",
  code: "4-3",
  title: "Historical Skills: Historical Significance",
  goal: "I CAN evaluate the historical significance of events and figures.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: significance"],

  vocabulary: [
    {
      term: "Significance",
      definition: "Historical importance of events/figures.",
    },
    { term: "Impact", definition: "Effect on people/events." },
    { term: "Legacy", definition: "Long-term consequences." },
    {
      term: "Turning point",
      definition: "Event that changes historical direction.",
    },
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
          solution:
            "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions, reshaped global politics.",
        },
      },
      questions: [
        {
          id: "cieihs-u4-sg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical significance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Historical importance of events/figures",
              },
              {
                id: "b",
                text: "A map",
              },
              {
                id: "c",
                text: "A statistical method",
              },
              {
                id: "d",
                text: "A type of source",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Significance",
                statement: "Historical importance.",
              },
            ],
            steps: [
              {
                reasoning: "Significance = historical importance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical importance",
          },
        },
        {
          id: "cieihs-u4-sg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a turning point?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turning point",
                statement: "Direction change.",
              },
            ],
            steps: [
              {
                reasoning: "Event that changes historical direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Marks major shift in events.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Direction change event",
          },
        },
        {
          id: "cieihs-u4-sg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you evaluate historical significance?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Significance evaluation",
                statement: "Impact assessment.",
              },
            ],
            steps: [
              {
                reasoning: "Impact: who/what affected?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scale/duration/legacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Turning point?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Impact, scale, duration, legacy",
          },
        },
        {
          id: "cieihs-u4-sg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define significance, impact, legacy, turning point, scale, duration. (b) What is significance? (c) What is a turning point? (d) How evaluate significance? (e) Was Cold War significant? Why? (f) Was Civil Rights significant? Why? (g) Was Mandela significant? Why? (h) Evaluate which 20th century event was most significant.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Significance",
                statement: "Evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Historical importance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Direction change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Impact, scale, duration, legacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Yes — shaped world politics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Yes — transformed US race relations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Yes — ended apartheid, model for reconciliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid evaluation with justification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Historical significance evaluation.",
          },
        },
        {
          id: "cieihs-u4-sg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a turning point in history?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An event that changes the direction of historical development",
              },
              {
                id: "b",
                text: "A type of historical source",
              },
              {
                id: "c",
                text: "The end of a century",
              },
              {
                id: "d",
                text: "A minor local event",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turning point",
                statement: "Direction change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A turning point is an event that changes the direction of historical development.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** An event that changes the direction of historical development",
          },
        },
        {
          id: "cieihs-u4-sg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main criteria are used to evaluate the historical significance of an event: impact, scale, duration and legacy?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Significance criteria",
                statement: "Four criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Significance is evaluated through four criteria: impact, scale, duration and legacy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cieihs-u4-sg-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by the 'legacy' of a historical event?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Legacy",
                statement: "Long-term consequences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The lasting consequences or effects an event has on later history.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It measures whether the event's influence continues long after it occurred.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Long-term consequences of an event",
          },
        },
        {
          id: "cieihs-u4-sg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which event is widely regarded as a major turning point of the 20th century?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The Treaty of Versailles",
              },
              {
                id: "b",
                text: "The First World War",
              },
              {
                id: "c",
                text: "The invention of the telephone",
              },
              {
                id: "d",
                text: "The Second World War",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "WWII significance",
                statement: "Major turning point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "WWII transformed global politics, ended European dominance and led directly to the Cold War and decolonisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** The Second World War",
          },
        },
        {
          id: "cieihs-u4-sg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) The Cold War lasted from 1945 to 1991 — how many years? (b) The Second World War lasted from 1939 to 1945 — how many years?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 46,
              },
              {
                label: "b",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Event durations",
                statement: "46 and 6 years.",
              },
            ],
            steps: [
              {
                reasoning: "1991 minus 1945 = 46 years.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "1945 minus 1939 = 6 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 46, b) 6",
          },
        },
        {
          id: "cieihs-u4-sg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In evaluating significance, what does 'scale' refer to?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The number of documents available",
              },
              {
                id: "b",
                text: "The date of the event",
              },
              {
                id: "c",
                text: "The size and scope of the impact",
              },
              {
                id: "d",
                text: "The cost of the event",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scale",
                statement: "Size of impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scale measures how widespread or extensive the impact of an event was.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** The size and scope of the impact",
          },
        },
        {
          id: "cieihs-u4-sg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would evaluate whether Nelson Mandela was a historically significant figure.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Significance of figures",
                statement: "Evaluation criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Impact: his leadership ended apartheid and shaped South Africa's transition to democracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Scale and duration: his influence extended worldwide and continues through reconciliation models.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Turning point and legacy: he became a global symbol of forgiveness and anti-racism with lasting effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Impact, scale, duration, legacy all support significance",
          },
        },
        {
          id: "cieihs-u4-sg-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which significance criterion asks 'who and what was affected by the event'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Impact",
              },
              {
                id: "b",
                text: "Scale",
              },
              {
                id: "c",
                text: "Duration",
              },
              {
                id: "d",
                text: "Legacy",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Impact",
                statement: "Who was affected.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Impact measures who and what was affected by a historical event.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Impact",
          },
        },
        {
          id: "cieihs-u4-sg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) Apartheid lasted from 1948 to 1994 — how many years? (b) The Civil Rights Movement's key victories span roughly 1954 to 1968 — how many years?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 46,
              },
              {
                label: "b",
                answer: 14,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Event durations",
                statement: "46 and 14 years.",
              },
            ],
            steps: [
              {
                reasoning: "1994 minus 1948 = 46 years.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "1968 minus 1954 = 14 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 46, b) 14",
          },
        },
        {
          id: "cieihs-u4-sg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether the fall of the Berlin Wall in 1989 was a turning point in world history.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: the Wall's fall was a turning point — it symbolised the end of the Cold War and triggered the collapse of communist Eastern Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: revolutions across Eastern Europe, German reunification in 1990 and Soviet dissolution in 1991 followed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: the Wall was a symptom rather than a cause — underlying economic and political decline was already unstoppable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement: significant as catalyst and symbol, though deeper structural forces were decisive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Turning point as catalyst and symbol",
          },
        },
        {
          id: "cieihs-u4-sg-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In evaluating historical significance, what does 'duration' refer to?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The geographic size of the event",
              },
              {
                id: "b",
                text: "The number of people involved",
              },
              {
                id: "c",
                text: "The date on which the event occurred",
              },
              {
                id: "d",
                text: "The length of time the impact lasts",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Duration",
                statement: "Length of impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Duration measures how long the impact of an event lasts over time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** The length of time the impact lasts",
          },
        },
        {
          id: "cieihs-u4-sg-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why historians may disagree about which twentieth-century event was the most significant.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Significance debate",
                statement: "Competing judgements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different historians weigh the criteria — impact, scale, duration, legacy — differently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Perspectives differ: a military historian, a social historian and a political historian may rank events differently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Values also matter — what counts as 'significant' depends on what one considers important.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Criteria, perspective and values differ",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u4-sg-notes",
      title: "Significance — notes",
      summary:
        "Significance=historical importance. Evaluate impact, scale, duration, legacy, turning point.",
      sections: [
        {
          heading: "Key idea",
          body: "Not all events are equally significant — evaluate carefully.",
        },
        {
          heading: "Criteria",
          body: "Impact, scale, duration, legacy determine significance.",
        },
      ],
    },
  ],
};
