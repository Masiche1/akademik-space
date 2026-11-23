import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edxph-u1-lesson-1-1",
  code: "1-1",
  title: "What is History?",
  goal: "I CAN explain what history is and why we study it.",
  standards: ["Y1-Y2 History", "Introduction to history"],
  vocabulary: [
    { term: "History", definition: "The study of what happened in the past." },
    { term: "Past", definition: "Events that have already happened." },
    { term: "Present", definition: "Now — the time we are living in." },
    { term: "Future", definition: "What is going to happen." },
  ],
  concepts: [
    {
      id: "edxph-u1-what",
      title: "The Past, Present and Future",
      skill: "Understand that history studies the past.",
      lesson: {
        sections: [
          {
            heading: "Three times",
            body: "Time moves in three directions: the past (everything that has already happened — yesterday, last year, 100 years ago), the present (right now), and the future (what has not happened yet). History is the study of the past — what people did, what they built, what they believed.",
          },
          {
            heading: "Why study history?",
            body: "We study history to learn from the past. It helps us understand why things are the way they are today — our language, traditions, buildings and laws have all been shaped by past events. History also helps us understand other people and places.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is 'the Romans building a road 2000 years ago' history?",
          solution: "Yes — it happened in the past.",
        },
      },
      questions: [
        {
          id: "edxph-u1-what-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does history study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The future" },
              { id: "b", text: "The past" },
              { id: "c", text: "The present only" },
              { id: "d", text: "Geography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "History",
                statement: "Study of the past.",
              },
            ],
            steps: [{ reasoning: "History = past.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The past",
            commonErrors: ["Wrong time period."],
          },
        },
        {
          id: "edxph-u1-what-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is part of the past?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tomorrow" },
              { id: "b", text: "100 years ago" },
              { id: "c", text: "Next week" },
              { id: "d", text: "Right now" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Past",
                statement: "Already happened.",
              },
            ],
            steps: [
              { reasoning: "100 years ago = past.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 100 years ago",
            commonErrors: ["Present/future chosen."],
          },
        },
        {
          id: "edxph-u1-what-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why we study history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Why history",
                statement: "Learn + understand.",
              },
            ],
            steps: [
              {
                reasoning: "Learn from past mistakes and successes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Understand why things are as they are today.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Understand other people and places.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Learn + understand present",
            commonErrors: ["No real reasons."],
          },
        },
        {
          id: "edxph-u1-what-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does history help us understand the present? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "History and present",
                statement: "Past shapes present.",
              },
            ],
            steps: [
              {
                reasoning: "Explain link — past events shape today.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — Roman roads still influence modern roads.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear explanation of connection.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Past shapes present, e.g. Roman roads",
            commonErrors: ["No example."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-timeline",
      title: "Timelines and Chronology",
      skill: "Order events in time and use timelines.",
      lesson: {
        sections: [
          {
            heading: "Order of events",
            body: "Events happen in order — some before others. Chronology is the study of the order of events. A timeline shows events in order, usually with earliest on the left and latest on the right. 'Before' means earlier; 'after' means later; 'between' means in the middle.",
          },
          {
            heading: "Making timelines",
            body: "A timeline is a line with dates or events marked along it. For example: 1900 — first aeroplane; 1914 — World War I; 1969 — Moon landing. Timelines help you see how events relate to each other — which came first, which happened at the same time, and how long ago events were.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Put these in order: World War II (1939), first computer (1940s), Moon landing (1969).",
          solution: "WWII → first computer → Moon landing.",
        },
      },
      questions: [
        {
          id: "edxph-u1-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a timeline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of clock" },
              { id: "b", text: "A diagram showing events in order" },
              { id: "c", text: "A map of the past" },
              { id: "d", text: "A history book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Timeline",
                statement: "Events in order.",
              },
            ],
            steps: [
              {
                reasoning: "Timeline = ordered events.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ordered events",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u1-time-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a timeline, which comes first: 1066 or 1485?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1485" },
              { id: "b", text: "1066" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chronology",
                statement: "Lower year = earlier.",
              },
            ],
            steps: [{ reasoning: "1066 < 1485.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 1066",
            commonErrors: ["Reversed order."],
          },
        },
        {
          id: "edxph-u1-time-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these events in order: Roman invasion of Britain (43 AD), Battle of Hastings (1066), first Moon landing (1969).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chronology",
                statement: "Order by date.",
              },
            ],
            steps: [
              { reasoning: "43 AD first.", marks: 1, markCode: "M" },
              { reasoning: "1066 second.", marks: 1, markCode: "M" },
              { reasoning: "1969 last.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "43 AD → 1066 → 1969",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxph-u1-time-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the words 'century' and 'millennium' and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time periods",
                statement: "Century=100 years, millennium=1000.",
              },
            ],
            steps: [
              { reasoning: "Century = 100 years.", marks: 1, markCode: "M" },
              {
                reasoning: "Millennium = 1000 years.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — 20th century (1900-1999), 2nd millennium (1000-1999).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Century=100y; millennium=1000y",
            commonErrors: ["Wrong definitions."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-eras",
      title: "Historical Periods",
      skill: "Understand major historical periods and eras.",
      lesson: {
        sections: [
          {
            heading: "Major periods",
            body: "History is divided into periods: Prehistory (before writing — early humans), Ancient history (early civilisations — Egypt, Greece, Rome), Medieval (Middle Ages — castles, knights, ~500-1500), Early Modern (Renaissance, Tudor England, ~1500-1800), and Modern (industrial revolution onwards — 1800-present). Each period has different features.",
          },
          {
            heading: "British history periods",
            body: "British history: Celtic Britain (before Romans), Roman Britain (43-410 AD), Anglo-Saxon (410-1066), Norman and Medieval (1066-1485), Tudor (1485-1603), Stuart (1603-1714), Georgian and Victorian (1714-1901), and Modern Britain (1901-present).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which period came first: Roman Britain or Anglo-Saxon?",
          solution:
            "Roman Britain (43-410 AD) came before Anglo-Saxon (410-1066).",
        },
      },
      questions: [
        {
          id: "edxph-u1-era-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'prehistory'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recent history" },
              { id: "b", text: "Before writing was invented" },
              { id: "c", text: "Ancient Egypt" },
              { id: "d", text: "The future" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prehistory",
                statement: "Before writing.",
              },
            ],
            steps: [
              {
                reasoning: "Prehistory = before writing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Before writing",
            commonErrors: ["Wrong period."],
          },
        },
        {
          id: "edxph-u1-era-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which period lasted roughly 500-1500?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prehistory" },
              { id: "b", text: "Medieval" },
              { id: "c", text: "Modern" },
              { id: "d", text: "Future" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historical periods",
                statement: "Medieval = 500-1500.",
              },
            ],
            steps: [
              { reasoning: "Medieval = Middle Ages.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Medieval",
            commonErrors: ["Wrong period."],
          },
        },
        {
          id: "edxph-u1-era-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these British history periods in order: Tudor, Roman Britain, Anglo-Saxon, Norman/Medieval.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "British chronology",
                statement: "Order periods.",
              },
            ],
            steps: [
              { reasoning: "Roman Britain (43-410).", marks: 1, markCode: "M" },
              { reasoning: "Anglo-Saxon (410-1066).", marks: 1, markCode: "M" },
              {
                reasoning: "Norman/Medieval then Tudor (1066-1603).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Roman→Anglo-Saxon→Norman→Tudor",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxph-u1-era-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do historians divide history into periods? What are the benefits?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical periods",
                statement: "Organisation + understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Makes long history manageable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Periods have similar features — easier to study.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps see changes and patterns over time.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Manageable + patterns + changes",
            commonErrors: ["No real benefits."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-locally",
      title: "Local History",
      skill: "Understand how to study the history of your own area.",
      lesson: {
        sections: [
          {
            heading: "Your area's past",
            body: "Every place has a history — your town, village or neighbourhood was once fields, or a different kind of settlement. Local history studies what happened in your own area: old buildings, place names, local stories, how the area has changed. Old maps and photos show how places have developed over time.",
          },
          {
            heading: "Evidence of the past",
            body: "You can find evidence of local history in: old buildings (churches, manor houses), place names (names ending in '-ham' or '-ton' are Anglo-Saxon), museums and archives, old photographs, and talking to older people who remember how the area was. History is not just in books — it's all around us.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two ways to find out about your area's history.",
          solution: "Old maps/photos; ask older people; visit local museum.",
        },
      },
      questions: [
        {
          id: "edxph-u1-local-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is local history?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "World history" },
              { id: "b", text: "The history of your own area" },
              { id: "c", text: "Family trees" },
              { id: "d", text: "Geography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Local history",
                statement: "Your area's past.",
              },
            ],
            steps: [
              { reasoning: "Local = your area.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Your area's past",
            commonErrors: ["Wrong scope."],
          },
        },
        {
          id: "edxph-u1-local-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which could tell you about your area's history?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new shop" },
              { id: "b", text: "An old photograph" },
              { id: "c", text: "Today's weather" },
              { id: "d", text: "A new road" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical evidence",
                statement: "Old sources show past.",
              },
            ],
            steps: [
              { reasoning: "Old photo = evidence.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Old photograph",
            commonErrors: ["Modern things chosen."],
          },
        },
        {
          id: "edxph-u1-local-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to find out about the history of your local area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Local history research",
                statement: "Maps, photos, people, museums.",
              },
            ],
            steps: [
              {
                reasoning: "Method 1, e.g. old maps or photos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Method 2, e.g. ask older people or visit museum.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. maps + ask people",
            commonErrors: ["Invalid methods."],
          },
        },
        {
          id: "edxph-u1-local-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Place names often reveal history. Explain how place names can tell us about the past, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place names",
                statement: "Names reveal history.",
              },
            ],
            steps: [
              {
                reasoning: "Names come from past languages and events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — '-ham'/'-ton' endings suggest Anglo-Saxon settlement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear explanation of connection.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Names reveal past languages/events",
            commonErrors: ["No example."],
          },
        },
      ],
    },
  ],
};
