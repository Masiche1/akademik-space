import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpm4-u3-lesson-3-2",
  code: "3-2",
  title: "The 24-Hour Clock and Roman Numerals",
  goal: "I CAN convert between 12-hour and 24-hour time and read Roman numerals to 100.",
  standards: ["Year 4 Time"],
  vocabulary: [
    {
      term: "24-hour clock",
      definition: "Time written 00:00–23:59 with no am/pm.",
    },
    {
      term: "am/pm",
      definition: "Ante meridiem (before noon) and post meridiem (after noon).",
    },
    {
      term: "Roman numerals",
      definition: "Ancient number system using I, V, X, L, C, D, M.",
    },
    {
      term: "Subtractive notation",
      definition:
        "Smaller numeral before larger means subtract: IV = 4, IX = 9.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u3-24hour",
      title: "The 24-hour clock",
      skill: "Convert between 12-hour (am/pm) and 24-hour time formats.",
      lesson: {
        sections: [
          {
            heading: "24-hour format",
            body: "Written as HH:MM. Morning times keep the same hour: 9:30 am = 09:30. Afternoon/evening add 12: 3:30 pm = 15:30, 8:45 pm = 20:45. Midnight = 00:00, noon = 12:00. After 12 pm, keep adding 12 until 11 pm = 23:00.",
          },
          {
            heading: "Converting back",
            body: "24-hour to 12-hour: if hour ≤ 12, it's am (12:xx = midday/noon, 00:xx = midnight). If hour > 12, subtract 12 for pm. 14:20 → 2:20 pm. 09:15 → 9:15 am. 00:30 → 12:30 am.",
          },
        ],
        keyFormulas: [
          { name: "To 24h", statement: "pm times: add 12 to the hour" },
          { name: "To 12h", statement: "hour > 12 → subtract 12, add pm" },
        ],
        workedExample: {
          problem: "Convert 7:45 pm to 24-hour time.",
          solution: "7 + 12 = 19 → 19:45.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-24h-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3:30 pm in 24-hour time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "03:30" },
              { id: "b", text: "13:30" },
              { id: "c", text: "15:30" },
              { id: "d", text: "23:30" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "24-hour clock",
                statement: "3 pm + 12 = 15:30.",
              },
            ],
            steps: [
              {
                reasoning: "pm → add 12: 3 + 12 = 15.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 15:30",
            commonErrors: ["Answering 03:30 — forgetting pm means afternoon."],
          },
        },
        {
          id: "edpm4-u3-24h-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 14:20 to 12-hour time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "24 to 12 hour",
                statement: "14 > 12 → subtract 12 → 2:20 pm.",
              },
            ],
            steps: [
              { reasoning: "14 − 12 = 2.", marks: 1, markCode: "M" },
              { reasoning: "Hour > 12 means pm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2:20 pm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2:20 pm",
            commonErrors: ["Answering 14:20 pm — keeping 24h hour."],
          },
        },
        {
          id: "edpm4-u3-24h-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A film starts at 18:45 and ends at 20:30. How long is it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elapsed time",
                statement: "18:45 → 19:45 = 1h; → 20:30 = +45min → 1h45m.",
              },
            ],
            steps: [
              {
                reasoning: "18:45 to 20:30: count hours then minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "18:45 + 1h = 19:45; +45min = 20:30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1 hour 45 minutes.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 h 45 min",
            commonErrors: ["Subtracting minutes incorrectly: 30 − 45."],
          },
        },
        {
          id: "edpm4-u3-24h-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A train timetable shows: depart 08:15, arrive 11:40.",
          parts: [
            {
              label: "a",
              prompt: "Write the departure time in words (12-hour).",
              marks: 2,
            },
            { label: "b", prompt: "How long is the journey?", marks: 4 },
            {
              label: "c",
              prompt:
                "If the return journey takes 30 minutes longer, when does it arrive if it departs at 14:00?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "24-hour problems",
                statement:
                  "08:15 = 8:15 am; journey 3h25m; return 3h55m → 17:55.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "08:15 = 8:15 am.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct conversion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "08:15 → 11:15 = 3h; → 11:40 = +25min.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total: 3 h 25 min.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Return = 3h25m + 30m = 3h55m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "14:00 + 3h55m = 17:55.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 17:55.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "8:15 am; 3 h 25 min; 17:55",
            commonErrors: [
              "Adding 30 minutes as 30 hours or forgetting carry into hours.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm4-u3-roman",
      title: "Roman numerals",
      skill: "Read and write Roman numerals up to 100.",
      lesson: {
        sections: [
          {
            heading: "Basic symbols",
            body: "I=1, V=5, X=10, L=50, C=100. Symbols are added when they follow a larger or equal one: VI = 6, XV = 15, LX = 60. **Subtractive**: smaller before larger means subtract — IV = 4, IX = 9, XL = 40, XC = 90.",
          },
          {
            heading: "Reading and writing",
            body: "Read left to right: XIV = 10 + 4 = 14. XXIV = 20 + 4 = 24. Write 39 = XXXIX (30 + 9). 49 = XLIX (40 + 9). Only I, X, C can be subtracted, and only once: 8 = VIII not IIX, 40 = XL not XXXX.",
          },
        ],
        keyFormulas: [
          { name: "Symbols", statement: "I=1 V=5 X=10 L=50 C=100" },
          { name: "Subtractive", statement: "IV=4 IX=9 XL=40 XC=90" },
        ],
        workedExample: {
          problem: "Write 76 in Roman numerals.",
          solution: "70 = LXX, 6 = VI → LXXVI.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-rom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number is XIV?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "14" },
              { id: "c", text: "24" },
              { id: "d", text: "11" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "XIV = 10 + 4 = 14.",
              },
            ],
            steps: [{ reasoning: "X=10, IV=4 → 14.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 14",
            commonErrors: ["Reading XIV as 10+1+5=16 — IV is subtractive."],
          },
        },
        {
          id: "edpm4-u3-rom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write 39 in Roman numerals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "39 = 30 + 9 = XXX + IX = XXXIX.",
              },
            ],
            steps: [
              { reasoning: "30 = XXX.", marks: 1, markCode: "M" },
              { reasoning: "9 = IX (not VIIII).", marks: 1, markCode: "M" },
              { reasoning: "Answer: XXXIX.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "XXXIX",
            commonErrors: ["Writing XXXVIIII — 9 must be IX not VIIII."],
          },
        },
        {
          id: "edpm4-u3-rom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What number is XLIX?",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 49, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "XL = 40, IX = 9 → 49.",
              },
            ],
            steps: [
              { reasoning: "XL = 50 − 10 = 40.", marks: 1, markCode: "M" },
              { reasoning: "IX = 10 − 1 = 9.", marks: 1, markCode: "M" },
              { reasoning: "40 + 9 = 49.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "49",
            commonErrors: ["Reading as 60 — XLIX is 40+9 not 50+10."],
          },
        },
        {
          id: "edpm4-u3-rom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A clock face uses Roman numerals I to XII.",
          parts: [
            {
              label: "a",
              prompt: "Write the Roman numeral for 4 o'clock.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the Roman numeral for 9 o'clock.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What number is at the position VIII?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why 4 is written IV not IIII.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "IV=4, IX=9, VIII=8; subtractive notation.",
              },
            ],
            steps: [
              { part: "a", reasoning: "4 = IV.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "9 = IX.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "VIII = 5 + 3 = 8.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 8.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "IV uses subtractive notation: I before V = 4.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "IIII is not standard — subtractive is shorter.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "IV; IX; 8; IV = 4 via subtraction (I before V)",
            commonErrors: ["Writing IIII — not standard Roman notation."],
          },
        },
      ],
    },
  ],
};
