import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipm-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Money, Time and Measures",
  goal: "I CAN use money, tell the time and measure length, mass and capacity.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Nm, 3Gt, 3Gg"],
  stage: 3,
  vocabulary: [
    { term: "Pound", definition: "£ — the main unit of British money." },
    { term: "Quarter past/to", definition: "15 minutes after/before the hour." },
    { term: "Centimetre", definition: "cm — unit for measuring length." },
    { term: "Millilitre", definition: "ml — unit for measuring capacity." },
    { term: "Change", definition: "Money given back after paying." },
  ],
  concepts: [
    {
      id: "cipm-u1-s9-money-time",
      title: "Money, time and measurement",
      skill: "Calculate with money, read analogue/digital time and measure at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Money",
            body: "Know coins and notes up to £5 and £10. Add prices to find totals; subtract to find change. £1 = 100p — convert between pounds and pence when comparing prices. Count on from the price to the next coin to find change quickly.",
          },
          {
            heading: "Time and measures",
            body: "Read o'clock, half past, quarter past and quarter to on analogue clocks; digital time shows 24-hour format too. Measure length in cm/m, mass in g/kg, capacity in ml/l. Choose sensible units — a pencil in cm, a bag of flour in kg, a drink bottle in ml.",
          },
        ],
        keyFormulas: [
          { name: "Money", statement: "£1 = 100p; change = paid − price" },
          { name: "Time", statement: "quarter past = :15; half past = :30; quarter to = :45" },
        ],
        workedExample: {
          problem: "A book costs £2.50 and you pay with £5. What is the change?",
          solution: "£5.00 − £2.50 = £2.50 change.",
        },
      },
      questions: [
        {
          id: "cipm-u1-mt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many pence are in £1?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10p" },
            { id: "b", text: "100p" },
            { id: "c", text: "1000p" },
            { id: "d", text: "50p" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pound", statement: "£1 = 100p." }],
            steps: [{ reasoning: "One pound is 100 pence.", marks: 1, markCode: "A" }],
            finalAnswer: "100p",
          },
        },
        {
          id: "cipm-u1-mt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The clock shows the long hand on 3 and the short hand just past 4. What time is it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter past", statement: "Long hand on 3 = 15 minutes." }],
            steps: [
              { reasoning: "Long hand on 3 = 15 minutes past.", marks: 1, markCode: "M" },
              { reasoning: "Answer: quarter past 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quarter past 4",
          },
        },
        {
          id: "cipm-u1-mt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You buy a pencil for 35p and an eraser for 20p, paying with £1. How much change?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "Total cost then subtract from payment." }],
            steps: [
              { reasoning: "Total = 35 + 20 = 55p = £0.55.", marks: 1, markCode: "M" },
              { reasoning: "Change = £1.00 − £0.55 = £0.45 = 45p.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45p",
          },
        },
        {
          id: "cipm-u1-mt-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Which unit fits each: (a) length of a classroom, (b) mass of a strawberry, (c) capacity of a water bottle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sensible units", statement: "Match unit size to object size." }],
            steps: [
              { reasoning: "(a) metres.", marks: 1, markCode: "M" },
              { reasoning: "(b) grams.", marks: 1, markCode: "M" },
              { reasoning: "(c) millilitres (or litres for large bottle).", marks: 1, markCode: "M" },
              { reasoning: "All three correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "m, g, ml",
          },
        },
        {
          id: "cipm-u1-mt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $£2.50 + £1.25$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "£4.75" },
            { id: "b", text: "£3.75" },
            { id: "c", text: "£2.75" },
            { id: "d", text: "£3.65" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add pounds and pence." }],
            steps: [{ reasoning: "£2.50 + £1.25 = £3.75.", marks: 1, markCode: "A" }],
            finalAnswer: "£3.75",
          },
        },
        {
          id: "cipm-u1-mt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A game costs £3.40 and you pay with a £5 note. How much change do you get? Give your answer in pounds.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "paid − price." }],
            steps: [
              { reasoning: "£5.00 − £3.40 = £1.60.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £1.60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£1.60",
          },
        },
        {
          id: "cipm-u1-mt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On an analogue clock, the long hand points to 9 and the short hand is just before 8. What time is it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "half past eight" },
            { id: "b", text: "quarter to eight" },
            { id: "c", text: "quarter to nine" },
            { id: "d", text: "quarter past eight" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter to", statement: "Long hand on 9 = 15 minutes before the hour." }],
            steps: [{ reasoning: "Long hand on 9 with short hand before 8 → quarter to eight.", marks: 1, markCode: "A" }],
            finalAnswer: "quarter to eight",
          },
        },
        {
          id: "cipm-u1-mt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bottle holds 2 litres of water. How many millilitres is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2000, unit: "ml" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Unit conversion", statement: "1 litre = 1000 ml." }],
            steps: [
              { reasoning: "2 × 1000 = 2000 ml.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2000 ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000 ml",
          },
        },
        {
          id: "cipm-u1-mt-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which digital time shows quarter past three?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3:00" },
            { id: "b", text: "3:15" },
            { id: "c", text: "3:45" },
            { id: "d", text: "3:30" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter past", statement: "15 minutes past the hour = :15." }],
            steps: [{ reasoning: "Quarter past = 15 minutes past → 3:15.", marks: 1, markCode: "A" }],
            finalAnswer: "3:15",
          },
        },
        {
          id: "cipm-u1-mt-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A cake costs £1.80 and a drink costs £0.75 — find the total. (b) You pay with a £5 note — how much change? (c) Write the time 'quarter to six' in digital form. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money and time", statement: "Add prices; subtract for change; :45 = quarter to." }],
            steps: [
              { reasoning: "(a) £1.80 + £0.75 = £2.55.", marks: 1, markCode: "M" },
              { reasoning: "(b) £5.00 − £2.55 = £2.45.", marks: 1, markCode: "M" },
              { reasoning: "(c) Quarter to six = 5:45.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct with £ notation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) £2.55 (b) £2.45 (c) 5:45",
          },
        },
        {
          id: "cipm-u1-mt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the total cost of a 45p apple and a 60p banana. Give your answer in pence.",
          response: { type: "numeric", parts: [{ label: "a", answer: 105, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add pence values." }],
            steps: [
              { reasoning: "45 + 60 = 105.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 105p (= £1.05).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "105p",
          },
        },
        {
          id: "cipm-u1-mt-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What time is shown on a digital clock displaying 14:30?",
          response: { type: "mcq", choices: [
            { id: "a", text: "half past two" },
            { id: "b", text: "quarter past two" },
            { id: "c", text: "quarter to three" },
            { id: "d", text: "half past fourteen" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "24-hour time", statement: "14:30 = 2:30 pm = half past two." }],
            steps: [{ reasoning: "14:30 is half past two in the afternoon.", marks: 1, markCode: "A" }],
            finalAnswer: "half past two",
          },
        },
        {
          id: "cipm-u1-mt-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "(a) A bag of rice has mass 1 kg — what is that in grams? (b) A jug holds 750 ml — how much more is needed to fill a 1 litre bottle? (c) School ends at 3:15 — write this as quarter past or quarter to in words. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Measures and time", statement: "1 kg = 1000 g; 1 l = 1000 ml; :15 = quarter past." }],
            steps: [
              { reasoning: "(a) 1 kg = 1000 g.", marks: 1, markCode: "M" },
              { reasoning: "(b) 1000 − 750 = 250 ml more.", marks: 1, markCode: "M" },
              { reasoning: "(c) 3:15 = quarter past three.", marks: 1, markCode: "M" },
              { reasoning: "Units and conversions correct.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1000 g (b) 250 ml (c) quarter past three",
          },
        },
        {
          id: "cipm-u1-mt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit is most sensible for measuring the length of a pencil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "metres" },
            { id: "b", text: "kilograms" },
            { id: "c", text: "centimetres" },
            { id: "d", text: "litres" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sensible units", statement: "Pencil is small → cm." }],
            steps: [{ reasoning: "A pencil is a few centimetres long.", marks: 1, markCode: "A" }],
            finalAnswer: "centimetres",
          },
        },
        {
          id: "cipm-u1-mt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "You buy a book for £6.75 and pay with a £10 note. How much change do you get? Give your answer in pounds.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.25 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "paid − price." }],
            steps: [
              { reasoning: "£10.00 − £6.75 = £3.25.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £3.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£3.25",
          },
        },
        {
          id: "cipm-u1-mt-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Add £2.40 and £1.35. (b) A train leaves at quarter past eight and arrives at half past nine — write both times in digital form. (c) A rope is 2 m long — how many centimetres is that? (d) You pay £20 for items costing £14.60 — how much change? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money, time and measures", statement: "Add money; clock times; convert units; change." }],
            steps: [
              { reasoning: "(a) £2.40 + £1.35 = £3.75.", marks: 1, markCode: "M" },
              { reasoning: "(b) 8:15 and 9:30.", marks: 1, markCode: "M" },
              { reasoning: "(c) 2 m = 200 cm.", marks: 1, markCode: "M" },
              { reasoning: "(d) £20.00 − £14.60 = £5.40.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) £3.75 (b) 8:15, 9:30 (c) 200 cm (d) £5.40",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-mt-notes",
      title: "Money, time, measures — revision notes",
      summary: "£1=100p; quarter past=:15, quarter to=:45; choose sensible units.",
      sections: [
        { heading: "Money", body: "Add for total, subtract for change; convert £↔p when needed." },
        { heading: "Measures", body: "Length cm/m, mass g/kg, capacity ml/l — match unit to object." },
      ],
    },
  ],
};
