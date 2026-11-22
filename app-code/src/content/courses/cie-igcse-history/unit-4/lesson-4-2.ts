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
    {
      term: "Timeline",
      definition: "Visual representation of events over time.",
    },
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
          problem:
            "Place in order: Berlin Wall falls, Cuban Missile Crisis, USSR dissolves, Vietnam War ends.",
          solution:
            "Cuban Crisis (1962) → Vietnam ends (1975) → Wall falls (1989) → USSR dissolves (1991).",
        },
      },
      questions: [
        {
          id: "cieihs-u4-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is chronology?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A map",
              },
              {
                id: "b",
                text: "Arrangement of events in time order",
              },
              {
                id: "c",
                text: "A type of source",
              },
              {
                id: "d",
                text: "A statistical method",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronology",
                statement: "Time order.",
              },
            ],
            steps: [
              {
                reasoning: "Chronology = events in time order.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Time order",
          },
        },
        {
          id: "cieihs-u4-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is periodisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Periodisation",
                statement: "Historical periods.",
              },
            ],
            steps: [
              {
                reasoning: "Division of history into periods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. Ancient, Medieval, Modern.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Historical periods",
          },
        },
        {
          id: "cieihs-u4-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is chronology important in history?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chronological thinking",
                statement: "Cause/effect.",
              },
            ],
            steps: [
              {
                reasoning: "Understanding sequence reveals cause/effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows patterns and turning points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Essential for historical analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cause/effect, patterns",
          },
        },
        {
          id: "cieihs-u4-ch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define chronology, periodisation, timeline, century, decade, era. (b) What is chronology? (c) What is periodisation? (d) Why is chronology important? (e) What are major 20th century periods? (f) Place in order: Cuban Crisis, Vietnam ends, Wall falls, USSR dissolves. (g) What is a timeline? (h) Explain how periodisation helps understand history.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronology",
                statement: "Time, periods.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Time order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Historical periods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Cause/effect, patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) WWI, interwar, WWII, Cold War.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Correct chronological order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Visual time representation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Organises complexity, reveals patterns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Chronology and periodisation.",
          },
        },
        {
          id: "cieihs-u4-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a timeline?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A method of statistical analysis",
              },
              {
                id: "b",
                text: "A type of historical source",
              },
              {
                id: "c",
                text: "A visual representation of events in chronological order",
              },
              {
                id: "d",
                text: "A way of writing essays",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Timeline",
                statement: "Visual time representation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A timeline shows events in chronological order visually.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** A visual representation of events in chronological order",
          },
        },
        {
          id: "cieihs-u4-ch-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many years are there in one century?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 100,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Century",
                statement: "100-year period.",
              },
            ],
            steps: [
              {
                reasoning: "A century is a 100-year period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "cieihs-u4-ch-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does the sequence of events matter in historical analysis?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chronological thinking",
                statement: "Sequence reveals cause/effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Knowing which event came first reveals cause and effect relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sequence shows patterns, turning points and how events led to consequences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sequence reveals cause/effect and turning points",
          },
        },
        {
          id: "cieihs-u4-ch-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these events happened first?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The fall of the Berlin Wall (1989)",
              },
              {
                id: "b",
                text: "The Cuban Missile Crisis (1962)",
              },
              {
                id: "c",
                text: "The dissolution of the USSR (1991)",
              },
              {
                id: "d",
                text: "The end of the Vietnam War (1975)",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronology",
                statement: "Time order of events.",
              },
            ],
            steps: [
              {
                reasoning: "1962 is earlier than 1975, 1989 and 1991.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** The Cuban Missile Crisis (1962)",
          },
        },
        {
          id: "cieihs-u4-ch-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did World War II end? (b) The Berlin Wall fell in 1989 — in which decade was that?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1945,
              },
              {
                label: "b",
                answer: 1980,
              },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "20th century events",
                statement: "WWII end, Wall fall.",
              },
            ],
            steps: [
              {
                reasoning: "(a) World War II ended in 1945.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) The Berlin Wall fell in 1989, which is in the 1980s decade.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 1945  (b) 1980",
          },
        },
        {
          id: "cieihs-u4-ch-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how periodisation helps historians make sense of the 20th century.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Periodisation",
                statement: "Organises history into eras.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Periodisation groups events into eras (WWI, interwar, WWII, Cold War).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It makes complex history manageable and reveals patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Boundaries are interpretive — historians may disagree on dates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Periodisation organises events into eras and reveals patterns",
          },
        },
        {
          id: "cieihs-u4-ch-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which list puts these events in correct chronological order?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Berlin Wall falls (1989) → Cuban Missile Crisis (1962) → USSR dissolves (1991)",
              },
              {
                id: "b",
                text: "Cuban Missile Crisis (1962) → Berlin Wall falls (1989) → USSR dissolves (1991)",
              },
              {
                id: "c",
                text: "Cuban Missile Crisis (1962) → USSR dissolves (1991) → Berlin Wall falls (1989)",
              },
              {
                id: "d",
                text: "USSR dissolves (1991) → Berlin Wall falls (1989) → Cuban Missile Crisis (1962)",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chronological ordering",
                statement: "Events in time order.",
              },
            ],
            steps: [
              {
                reasoning: "Correct order: 1962 → 1989 → 1991.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Cuban Missile Crisis (1962) → Berlin Wall falls (1989) → USSR dissolves (1991)",
          },
        },
        {
          id: "cieihs-u4-ch-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "PLACEHOLDER",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 27,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chronological calculation",
                statement: "Difference between dates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1989 - 1962 = 27 years between the Cuban Missile Crisis and the fall of the Berlin Wall.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "27",
          },
        },
        {
          id: "cieihs-u4-ch-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "PLACEHOLDER",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Periodisation critique",
                statement: "Boundaries are interpretive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Periodisation helps organise complex history into manageable eras.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However boundaries are artificial — change is continuous, not sudden.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Historians disagree on when periods begin and end, so periodisation reflects interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Periodisation is useful but boundaries are interpretive",
          },
        },
        {
          id: "cieihs-u4-ch-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PLACEHOLDER",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A map projection",
              },
              {
                id: "b",
                text: "A type of historical source",
              },
              {
                id: "c",
                text: "A period of ten years",
              },
              {
                id: "d",
                text: "A period of one hundred years",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decade",
                statement: "10-year period.",
              },
            ],
            steps: [
              {
                reasoning: "A decade is a ten-year period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** A period of ten years",
          },
        },
        {
          id: "cieihs-u4-ch-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "PLACEHOLDER",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1914,
              },
              {
                label: "b",
                answer: 31,
              },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WWI and WWII dates",
                statement: "1914-1918 and 1939-1945.",
              },
            ],
            steps: [
              {
                reasoning: "(a) World War I began in 1914.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) 1945 - 1914 = 31 years between the start of WWI and the end of WWII.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 1914  (b) 31",
          },
        },
        {
          id: "cieihs-u4-ch-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "PLACEHOLDER",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronology and periodisation",
                statement: "Advanced time skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Chronology = time order; periodisation = division into eras.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Timeline = visual representation of events over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Three periods, e.g. WWI/interwar, WWII/early Cold War, late Cold War/contemporary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) WWI begins (1914) → WWII ends (1945) → Cold War begins (1947) → Berlin Wall falls (1989).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Sequence reveals cause and effect — earlier events explain later ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Boundaries are artificial; historians disagree on period dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Clustering of events on a timeline reveals turning points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Disagreement shows periodisation reflects interpretation, not fixed truth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Chronology and periodisation skills.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u4-ch-notes",
      title: "Chronology — notes",
      summary:
        "Chronology=time order; periodisation=historical periods. Sequence reveals cause/effect.",
      sections: [
        {
          heading: "Key idea",
          body: "Understanding when events happened is essential for historical analysis.",
        },
        {
          heading: "20th century",
          body: "WWI→interwar→WWII→Cold War→contemporary periods.",
        },
      ],
    },
  ],
};
