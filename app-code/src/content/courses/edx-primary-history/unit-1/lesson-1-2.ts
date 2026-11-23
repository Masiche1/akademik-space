import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edxph-u1-lesson-1-2",
  code: "1-2",
  title: "BC and AD",
  goal: "I CAN understand BC/AD dates and BCE/CE.",
  standards: ["Y3-Y4 History", "Dating systems"],
  vocabulary: [
    {
      term: "BC",
      definition: "Before Christ — dates before the birth of Jesus.",
    },
    {
      term: "AD",
      definition:
        "Anno Domini — 'in the year of our Lord', dates after Jesus's birth.",
    },
    { term: "BCE", definition: "Before Common Era — same as BC." },
    { term: "CE", definition: "Common Era — same as AD." },
  ],
  concepts: [
    {
      id: "edxph-u1-bcad",
      title: "BC, AD, BCE and CE",
      skill: "Understand and use historical dating systems.",
      lesson: {
        sections: [
          {
            heading: "Two dating systems",
            body: "BC (Before Christ) and AD (Anno Domini, 'in the year of our Lord') are the traditional dating system based on the birth of Jesus. BC counts backwards — 100 BC is earlier than 50 BC. AD counts forwards — AD 1066 is later than AD 800. BCE (Before Common Era) and CE (Common Era) mean exactly the same but are secular alternatives.",
          },
          {
            heading: "Reading dates",
            body: "'44 BC' means 44 years before Jesus's birth. 'AD 43' means 43 years after. There's no year 0 — 1 BC is followed by AD 1. When comparing dates, remember BC numbers go backwards — a bigger BC number is earlier (500 BC is before 100 BC). AD numbers go forwards normally.",
          },
        ],
        keyFormulas: [
          { name: "BC/AD", statement: "BC = before Jesus; AD = after Jesus" },
          { name: "BCE/CE", statement: "Same as BC/AD, secular terms" },
        ],
        workedExample: {
          problem: "Which came first: 100 BC or AD 50?",
          solution: "100 BC — BC is before AD.",
        },
      },
      questions: [
        {
          id: "edxph-u1-bc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does BC stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Before Christ" },
              { id: "b", text: "British Columbia" },
              { id: "c", text: "Before Common" },
              { id: "d", text: "Birth Century" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "BC", statement: "Before Christ." },
            ],
            steps: [
              { reasoning: "BC = Before Christ.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Before Christ",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u1-bc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which came first: 200 BC or AD 100?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AD 100" },
              { id: "b", text: "200 BC" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BC vs AD",
                statement: "BC is always before AD.",
              },
            ],
            steps: [{ reasoning: "BC before AD.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 200 BC",
            commonErrors: ["Comparing numbers wrongly."],
          },
        },
        {
          id: "edxph-u1-bc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these in order from earliest to latest: AD 1066, 500 BC, AD 43, 200 BC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Date ordering",
                statement: "BC backwards, AD forwards.",
              },
            ],
            steps: [
              {
                reasoning: "500 BC first (bigger BC = earlier).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "200 BC second.", marks: 1, markCode: "M" },
              { reasoning: "AD 43 then AD 1066.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 BC → 200 BC → AD 43 → AD 1066",
            commonErrors: ["BC order reversed."],
          },
        },
        {
          id: "edxph-u1-bc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the difference between BC/AD and BCE/CE? Why might historians prefer BCE/CE?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Dating systems",
                statement: "Same dates, different names.",
              },
            ],
            steps: [
              {
                reasoning: "Same meaning — BCE=BC, CE=AD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BCE/CE is secular — doesn't reference religion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Preferred in academic/international contexts for neutrality.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Same dates; BCE/CE secular",
            commonErrors: ["Different dates claimed."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-decades",
      title: "Decades and Centuries",
      skill: "Understand decades, centuries and how to count them.",
      lesson: {
        sections: [
          {
            heading: "Decades",
            body: "A decade is 10 years. Decades are usually named by their starting year: the 1960s means 1960-1969, the 1990s means 1990-1999. The 'swinging sixties' refers to 1960-1969. A decade always starts with a year ending in 0 and ends with a year ending in 9.",
          },
          {
            heading: "Centuries",
            body: "A century is 100 years. Centuries are counted differently from decades: the 20th century was 1901-2000, NOT 1900-1999! The 21st century is 2001-2100. This is because there was no year 0 — the 1st century was years 1-100, the 2nd was 101-200, and so on. This trips many people up.",
          },
        ],
        keyFormulas: [
          { name: "Decade", statement: "10 years, e.g. 1990s = 1990-1999" },
          { name: "Century", statement: "100 years; 20th = 1901-2000" },
        ],
        workedExample: {
          problem: "Which years were in the 20th century?",
          solution: "1901-2000 (not 1900-1999).",
        },
      },
      questions: [
        {
          id: "edxph-u1-dec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many years are in a decade?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "10" },
              { id: "c", text: "20" },
              { id: "d", text: "100" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decade", statement: "10 years." },
            ],
            steps: [
              { reasoning: "Decade = 10 years.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10",
            commonErrors: ["Wrong length."],
          },
        },
        {
          id: "edxph-u1-dec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 1980s refers to which years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1981-1990" },
              { id: "b", text: "1980-1989" },
              { id: "c", text: "1979-1988" },
              { id: "d", text: "1980-1990" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decades",
                statement: "1980s = 1980-1989.",
              },
            ],
            steps: [{ reasoning: "1980s = 1980-89.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 1980-1989",
            commonErrors: ["Off by one."],
          },
        },
        {
          id: "edxph-u1-dec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which years were in the 21st century?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Centuries",
                statement: "21st = 2001-2100.",
              },
            ],
            steps: [
              {
                reasoning: "21st century starts at 2001.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ends at 2100.", marks: 1, markCode: "M" },
              { reasoning: "Correct range given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2001-2100",
            commonErrors: ["1901-2000 confusion."],
          },
        },
        {
          id: "edxph-u1-dec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the 20th century was 1901-2000, not 1900-1999.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Century counting",
                statement: "No year 0.",
              },
            ],
            steps: [
              {
                reasoning: "There is no year 0 in the calendar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "1st century = years 1-100; each century starts after a century ends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So 20th century = 1901-2000.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "No year 0 → 1901-2000",
            commonErrors: ["Wrong explanation."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-dates",
      title: "Dates and Sources",
      skill: "Understand how we know dates and what sources are.",
      lesson: {
        sections: [
          {
            heading: "How we know dates",
            body: "How do we know when things happened? Sources tell us: written records (books, letters, inscriptions), artefacts (coins, pottery, tools), buildings, and pictures. Some things are dated by context — if an object is found under a layer of known age, it must be older (stratigraphy). Written dates on objects (coins, buildings) are the most precise.",
          },
          {
            heading: "Types of sources",
            body: "Primary sources are from the time being studied — a Roman coin, a medieval charter, a Victorian photograph. Secondary sources are later accounts — a history textbook, a documentary. Both are useful, but primary sources are closer to the actual events. Historians use many sources together to build a picture of the past.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Is a Roman coin a primary or secondary source for Roman Britain?",
          solution: "Primary — made at the time.",
        },
      },
      questions: [
        {
          id: "edxph-u1-src-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A history textbook" },
              { id: "b", text: "Something from the time being studied" },
              { id: "c", text: "A documentary" },
              { id: "d", text: "A modern map" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "From the time itself.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = from the time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** From the time",
            commonErrors: ["Secondary chosen."],
          },
        },
        {
          id: "edxph-u1-src-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a secondary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Roman coin" },
              { id: "b", text: "A modern history textbook" },
              { id: "c", text: "A medieval charter" },
              { id: "d", text: "A Victorian photo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary source",
                statement: "Later account.",
              },
            ],
            steps: [
              { reasoning: "Textbook = secondary.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Textbook",
            commonErrors: ["Primary chosen."],
          },
        },
        {
          id: "edxph-u1-src-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways historians find out when something happened.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Dating methods",
                statement: "Written records, artefacts, context.",
              },
            ],
            steps: [
              {
                reasoning: "Written records with dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Artefacts found in dated layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Comparison with known events.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Records+artefacts+context",
            commonErrors: ["Only one method."],
          },
        },
        {
          id: "edxph-u1-src-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do historians prefer primary sources when studying a period? Give the strengths and limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source evaluation",
                statement: "Primary = direct but limited.",
              },
            ],
            steps: [
              {
                reasoning: "Strength — direct evidence from the time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitation — may be biased or incomplete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced view — use multiple sources together.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct but biased; use multiple",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
