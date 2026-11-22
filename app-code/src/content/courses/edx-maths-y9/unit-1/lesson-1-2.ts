import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edm9-u1-lesson-1-2",
  code: "1-2",
  title: "Accuracy and Estimation",
  goal: "I CAN round to decimal places and significant figures, make sensible estimates, and write error intervals for rounded values.",
  standards: ["Y9 Number"],
  vocabulary: [
    { term: "Decimal place", definition: "The position of a digit after the decimal point. The first decimal place is the tenths digit." },
    { term: "Significant figure", definition: "A digit counted from the first non-zero digit. In 0.004567 the first significant figure is 4." },
    { term: "Estimate", definition: "An approximate answer found by rounding each number to 1 significant figure before calculating." },
    { term: "Lower bound", definition: "The smallest value a rounded number could have been, which is included in the error interval." },
    { term: "Upper bound", definition: "The value the original number must be less than. It is not included in the error interval." },
    { term: "Error interval", definition: "The range of values that round to a given number, written as an inequality such as $6.5 \\le x < 7.5$." },
  ],
  concepts: [
    {
      id: "edm9-u1-rounding-estimating",
      title: "Rounding and estimating",
      skill: "Round to a given number of decimal places or significant figures and estimate calculations using 1 significant figure.",
      lesson: {
        sections: [
          {
            heading: "Decimal places and significant figures",
            body: "To round to a given number of decimal places, look at the digit just after the last one you keep. If it is 5 or more, round up; if it is 4 or less, leave the last digit alone. For significant figures, start counting at the first **non-zero** digit. Zeros at the start of a decimal such as 0.004567 are not significant, so 2 significant figures gives $0.0046$. Zeros that hold a place value must be kept, so $3\\,482$ to 2 significant figures is $3\\,500$.",
          },
          {
            heading: "Estimating",
            body: "To estimate, round every number in the calculation to **1 significant figure** and then work out the simpler calculation. For example $\\frac{4.82 \\times 19.7}{0.51}$ becomes $\\frac{5 \\times 20}{0.5} = 200$. Always show the rounded numbers: marks are given for the method, and the final answer will not be exact.",
          },
        ],
        keyFormulas: [
          { name: "Rounding rule", statement: "Look at the next digit: 5 or more rounds up, 4 or less stays the same." },
          { name: "Estimating", statement: "Round each number to 1 significant figure, then calculate." },
        ],
        workedExample: {
          problem: "Estimate the value of $\\dfrac{58.3 \\times 3.9}{0.21}$.",
          solution: "Round each number to 1 significant figure: $58.3 \\to 60$, $3.9 \\to 4$, $0.21 \\to 0.2$. Then $\\frac{60 \\times 4}{0.2} = \\frac{240}{0.2} = 1200$.",
        },
      },
      questions: [
        {
          id: "edm9-u1-rounding-estimating-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round $3.4762$ to 2 decimal places.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.5$" },
              { id: "b", text: "$3.48$" },
              { id: "c", text: "$3.50$" },
              { id: "d", text: "$3.47$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Rounding", statement: "If the next digit is 5 or more, round the last kept digit up." }],
            steps: [
              { reasoning: "The third decimal place is 6, which is 5 or more, so the second decimal place 7 rounds up to 8.", working: "3.4762 \\approx 3.48", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3.48$",
            commonErrors: ["Truncating instead of rounding to give $3.47$.", "Rounding to 1 decimal place to give $3.5$."],
          },
        },
        {
          id: "edm9-u1-rounding-estimating-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.004567$ correct to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.0046, tolerance: 0.000001 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Significant figures", statement: "Counting starts at the first non-zero digit." }],
            steps: [
              { reasoning: "The first significant figure is 4 and the second is 5. The next digit is 6, so we look at it to decide whether to round up.", working: "0.0045\\underline{6}7", marks: 1, markCode: "M" },
              { reasoning: "Because the next digit is 6 (5 or more), round the 5 up to 6.", working: "0.0046", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0046$",
            commonErrors: ["Counting the leading zeros as significant to give $0.00$.", "Not rounding up to give $0.0045$."],
            examinerNote: "M1 for 0.0045 or 0.0046 seen. A1 cao.",
          },
        },
        {
          id: "edm9-u1-rounding-estimating-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out an estimate for $\\dfrac{4.82 \\times 19.7}{0.51}$. You must show your rounded values.",
          response: { type: "numeric", parts: [{ label: "Estimate", answer: 200 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Estimating", statement: "Round each number to 1 significant figure before calculating." }],
            steps: [
              { reasoning: "Round each number to 1 significant figure.", working: "4.82 \\to 5,\\quad 19.7 \\to 20,\\quad 0.51 \\to 0.5", marks: 1, markCode: "B" },
              { reasoning: "Substitute into the calculation.", working: "\\frac{5 \\times 20}{0.5} = \\frac{100}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Dividing by 0.5 is the same as multiplying by 2.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$",
            commonErrors: ["Rounding $0.51$ to $1$ rather than $0.5$, giving $100$.", "Dividing $100$ by $0.5$ and getting $50$."],
            examinerNote: "Accept 200 only from correct 1 s.f. values. Do not accept an unsupported exact calculation.",
          },
        },
        {
          id: "edm9-u1-rounding-estimating-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangular field is $78.6$ m long and $41.2$ m wide. Fertiliser costs £0.38 per square metre.",
          parts: [
            { label: "a", prompt: "Write $78.6$ correct to 1 significant figure.", marks: 1 },
            { label: "b", prompt: "Work out an estimate for the area of the field, in square metres, by rounding each measurement to 1 significant figure.", marks: 2 },
            { label: "c", prompt: "Use your answer to part (b) to estimate the cost of fertiliser for the whole field, in pounds. Round the cost per square metre to 1 significant figure.", marks: 2 },
            { label: "d", prompt: "Work out the actual area of the field, in square metres. Is your estimate in part (b) an underestimate or an overestimate? Give a reason for your answer.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $78.6$ to 1 s.f.", answer: 80 },
              { label: "(b) estimated area (m$^2$)", answer: 3200 },
              { label: "(c) estimated cost (£)", answer: 1280 },
              { label: "(d) actual area (m$^2$)", answer: 3238.32, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "Area = length $\\times$ width" },
              { kind: "principle", name: "Estimating", statement: "Round each number to 1 significant figure before calculating." },
            ],
            steps: [
              { part: "a", reasoning: "The first significant figure is 7, and the next digit 8 means round up.", working: "78.6 \\approx 80", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Round both measurements to 1 significant figure.", working: "78.6 \\to 80,\\quad 41.2 \\to 40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply the rounded measurements.", working: "80 \\times 40 = 3200", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Round the cost per square metre to 1 significant figure and multiply by the estimated area.", working: "0.38 \\to 0.4,\\quad 3200 \\times 0.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "3200 \\times 0.4 = 1280", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply the original measurements: $78.6 \\times 41.2 = 78.6 \\times 40 + 78.6 \\times 1.2$.", working: "3144 + 94.32", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add to find the exact area.", working: "3238.32 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The estimate 3200 is smaller than the actual area 3238.32, so it is an underestimate.", working: "3200 < 3238.32", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $80$. (b) $3200$ m$^2$. (c) £1280. (d) $3238.32$ m$^2$; the estimate is an underestimate because $3200 < 3238.32$.",
            commonErrors: ["Rounding $41.2$ to $41$ (2 significant figures) instead of $40$ (1 significant figure).", "Forgetting to round $0.38$ and using $0.38$ in part (c).", "Stating under or over without a comparison of the two numbers."],
            examinerNote: "Part (c) ft from part (b). Part (d) R1 requires a comparison with the actual area, ft from their value.",
          },
        },
      ],
    },
    {
      id: "edm9-u1-error-intervals",
      title: "Error intervals",
      skill: "Write the error interval for a number that has been rounded or truncated.",
      lesson: {
        sections: [
          {
            heading: "Finding the bounds",
            body: "A rounded number could have started as any value that rounds to it. To find the bounds, take half of the rounding unit and go down and up from the rounded value. If $x = 7$ to the nearest whole number, the unit is 1, half is $0.5$, so the bounds are $6.5$ and $7.5$. If $x = 2.4$ to 1 decimal place, the unit is $0.1$, half is $0.05$, so the bounds are $2.35$ and $2.45$.",
          },
          {
            heading: "Writing the error interval",
            body: "The error interval is written $\\text{lower bound} \\le x < \\text{upper bound}$. The lower bound is **included** because it rounds up to the given value. The upper bound is **not included**, because it would round up to the next value. So for $x = 7$ to the nearest whole number, $6.5 \\le x < 7.5$. For significant figures, find the size of the last digit: $3\\,200$ to 2 significant figures has a unit of 100, so the half-unit is 50 and $3\\,150 \\le n < 3\\,250$.",
          },
        ],
        keyFormulas: [
          { name: "Error interval", statement: "$\\text{lower bound} \\le x < \\text{upper bound}$" },
          { name: "Half-unit rule", statement: "Bounds = rounded value $\\pm$ half of the rounding unit" },
        ],
        workedExample: {
          problem: "A length $l$ is 12.8 cm, correct to 1 decimal place. Write down the error interval for $l$.",
          solution: "The rounding unit is $0.1$ cm, so half is $0.05$. Lower bound $12.8 - 0.05 = 12.75$. Upper bound $12.8 + 0.05 = 12.85$. So $12.75 \\le l < 12.85$.",
        },
      },
      questions: [
        {
          id: "edm9-u1-error-intervals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The length of a pencil is 7 cm, correct to the nearest centimetre. Which of these is the error interval for the length $l$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.5 \\le l \\le 7.5$" },
              { id: "b", text: "$6.5 \\le l < 7.5$" },
              { id: "c", text: "$6 \\le l < 8$" },
              { id: "d", text: "$6.9 \\le l < 7.1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Error interval", statement: "$\\text{lower bound} \\le x < \\text{upper bound}$, using half the rounding unit." }],
            steps: [
              { reasoning: "The rounding unit is 1 cm so half is 0.5. The lower bound is included and the upper bound is not.", working: "6.5 \\le l < 7.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $6.5 \\le l < 7.5$",
            commonErrors: ["Using the whole unit instead of half, as in (a).", "Including the upper bound, as in (b).", "Using the wrong rounding unit, as in (d)."],
          },
        },
        {
          id: "edm9-u1-error-intervals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The number $x = 2.4$ is correct to 1 decimal place. Write down the lower bound and the upper bound of $x$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower bound", answer: 2.35, tolerance: 0.0001 },
              { label: "Upper bound", answer: 2.45, tolerance: 0.0001 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Half-unit rule", statement: "Bounds are the rounded value $\\pm$ half of the rounding unit." }],
            steps: [
              { reasoning: "The rounding unit is 0.1, so half is 0.05. Subtract for the lower bound.", working: "2.4 - 0.05 = 2.35", marks: 1, markCode: "B" },
              { reasoning: "Add half the unit for the upper bound.", working: "2.4 + 0.05 = 2.45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Lower bound $2.35$, upper bound $2.45$ (so $2.35 \\le x < 2.45$).",
            commonErrors: ["Using 0.1 instead of 0.05 to give 2.3 and 2.5.", "Using 0.5 instead of 0.05."],
          },
        },
        {
          id: "edm9-u1-error-intervals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The number of people at a concert was 3200, correct to 2 significant figures. Write down the lower and upper limits of the error interval $\\text{lower} \\le n < \\text{upper}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower limit", answer: 3150 },
              { label: "Upper limit", answer: 3250 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Half-unit rule", statement: "For 2 significant figures in 3200, the rounding unit is 100." }],
            steps: [
              { reasoning: "The second significant figure is in the hundreds column, so the rounding unit is 100 and half is 50.", working: "\\tfrac{1}{2} \\times 100 = 50", marks: 1, markCode: "M" },
              { reasoning: "Subtract 50 for the lower limit.", working: "3200 - 50 = 3150", marks: 1, markCode: "A" },
              { reasoning: "Add 50 for the upper limit.", working: "3200 + 50 = 3250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3150 \\le n < 3250$",
            commonErrors: ["Using 0.5 as the half-unit.", "Using 5 as the half-unit to give 3195 and 3205."],
            examinerNote: "Do not award the final A1 if the inequality signs are written the wrong way round when the interval is requested in full.",
          },
        },
        {
          id: "edm9-u1-error-intervals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The mass of a bag of flour is 500 g, correct to the nearest 10 g. Rima buys two of these bags.",
          parts: [
            { label: "a", prompt: "Write down the lower bound and upper bound of the mass of one bag.", marks: 2 },
            { label: "b", prompt: "Rima says, 'One bag could have a mass of exactly 505 g.' Is she correct? Give a reason for your answer.", marks: 2 },
            { label: "c", prompt: "Work out the upper bound of the total mass of the two bags, in grams.", marks: 2 },
            { label: "d", prompt: "The time for a race is 12.3 seconds, correct to 1 decimal place. Write down the lower bound and upper bound of the time.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) lower bound (g)", answer: 495 },
              { label: "(a) upper bound (g)", answer: 505 },
              { label: "(c) upper bound of total (g)", answer: 1010 },
              { label: "(d) lower bound of time (s)", answer: 12.25, tolerance: 0.0001 },
              { label: "(d) upper bound of time (s)", answer: 12.35, tolerance: 0.0001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Half-unit rule", statement: "Bounds are the rounded value $\\pm$ half of the rounding unit." },
              { kind: "definition", name: "Error interval", statement: "The lower bound is included; the upper bound is not." },
            ],
            steps: [
              { part: "a", reasoning: "The rounding unit is 10 g so half is 5 g. Subtract for the lower bound.", working: "500 - 5 = 495", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Add 5 g for the upper bound.", working: "500 + 5 = 505", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The error interval is $495 \\le m < 505$, and the upper bound is not included.", working: "495 \\le m < 505", marks: 1, markCode: "M" },
              { part: "b", reasoning: "505 g would round up to 510 g, so Rima is not correct.", working: "505 \\notin [495, 505)", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Add the two upper bounds.", working: "505 + 505", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. The total is less than this value.", working: "1010 \\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The rounding unit is 0.1 s so half is 0.05 s. Subtract for the lower bound.", working: "12.3 - 0.05 = 12.25", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Add 0.05 s for the upper bound.", working: "12.3 + 0.05 = 12.35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $495$ g and $505$ g. (b) No: the upper bound $505$ g is not included. (c) $1010$ g. (d) $12.25$ s and $12.35$ s.",
            commonErrors: ["Including the upper bound in the error interval.", "Using 10 g rather than 5 g as the half-unit.", "Doubling the lower bound instead of the upper bound in part (c)."],
            examinerNote: "In part (b) a statement that 505 would round to 510 gains the R1 mark.",
          },
        },
      ],
    },
  ],
};
