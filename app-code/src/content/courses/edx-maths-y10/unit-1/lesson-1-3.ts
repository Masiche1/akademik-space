import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edm10-u1-lesson-1-3",
  code: "1-3",
  title: "Standard Form and Bounds",
  goal: "I CAN calculate with numbers in standard form and find upper and lower bounds of calculations.",
  standards: ["4MA1 1.6", "4MA1 1.13", "4MA1 1.14H"],
  vocabulary: [
    { term: "Standard form", definition: "A number written as $a\\times10^n$ where $1\\le a<10$ and $n$ is an integer." },
    { term: "Significant figures", definition: "The digits of a number that carry meaning, counting from the first non-zero digit." },
    { term: "Lower bound", definition: "The smallest value that rounds to a given rounded number. It is included in the error interval." },
    { term: "Upper bound", definition: "The value halfway to the next rounded number. It is not included in the error interval." },
    { term: "Error interval", definition: "The range of values that round to a given number, written with inequalities, e.g. $4.5\\le x<5.5$." },
  ],
  concepts: [
    {
      id: "edm10-u1-standard-form",
      title: "Standard form calculations",
      skill: "Write numbers in standard form and add, subtract, multiply and divide them.",
      lesson: {
        sections: [
          {
            heading: "Writing in standard form",
            body: "A number in standard form is $a\\times10^n$ with $1\\le a<10$. Large numbers have positive $n$: $45\\,000=4.5\\times10^4$. Small numbers have negative $n$: $0.00032=3.2\\times10^{-4}$.",
          },
          {
            heading: "Multiplying and dividing",
            body: "Multiply or divide the number parts, and use the index laws for the powers of 10: $10^m\\times10^n=10^{m+n}$ and $10^m\\div10^n=10^{m-n}$. Then adjust so that the number part is between 1 and 10.",
          },
          {
            heading: "Adding and subtracting",
            body: "Write both numbers with the **same** power of 10 first, add or subtract the number parts, then convert back to standard form if needed.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a\\times10^n,\\ 1\\le a<10,\\ n\\in\\mathbb{Z}$" },
          { name: "Index laws", statement: "$10^m\\times10^n=10^{m+n},\\ 10^m\\div10^n=10^{m-n}$" },
        ],
        workedExample: {
          problem: "Work out $(6\\times10^5)\\times(4\\times10^{-8})$ in standard form.",
          solution: "$6\\times4=24$ and $10^5\\times10^{-8}=10^{-3}$, so the product is $24\\times10^{-3}$. Adjust: $2.4\\times10^{-2}$.",
        },
      },
      questions: [
        {
          id: "edm10-u1-standard-form-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "Write $0.00032$ in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$32\\times10^{-5}$" },
              { id: "b", text: "$3.2\\times10^{4}$" },
              { id: "c", text: "$3.2\\times10^{-4}$" },
              { id: "d", text: "$3.2\\times10^{-3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$." },
            ],
            steps: [
              { reasoning: "Move the decimal point 4 places right to get 3.2, so the power is $-4$.", working: "3.2\\times10^{-4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $3.2\\times10^{-4}$",
            commonErrors: ["Counting the zeros (3) rather than the places moved (4).", "Using a positive power."],
          },
        },
        {
          id: "edm10-u1-standard-form-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 2,
          stem: "Work out $(6\\times10^5)\\times(4\\times10^{-8})$. Give your answer in the form $a\\times10^n$ where $1\\le a<10$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.4 },
              { label: "n", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index law", statement: "$10^m\\times10^n=10^{m+n}$." },
            ],
            steps: [
              { reasoning: "Multiply the number parts and add the powers.", working: "24\\times10^{5+(-8)}=24\\times10^{-3}", marks: 1, markCode: "M" },
              { reasoning: "Convert to standard form.", working: "2.4\\times10^{-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.4\\times10^{-2}$",
            commonErrors: ["Leaving the answer as $24\\times10^{-3}$.", "Adjusting the index in the wrong direction to get $2.4\\times10^{-4}$."],
          },
        },
        {
          id: "edm10-u1-standard-form-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Work out $\\dfrac{3.6\\times10^{7}+9\\times10^{6}}{1.5\\times10^{-2}}$. Give your answer in the form $a\\times10^n$ where $1\\le a<10$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "n", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "Express both terms with the same power of 10 before adding." },
            ],
            steps: [
              { reasoning: "Write $9\\times10^6$ as $0.9\\times10^7$ and add.", working: "3.6\\times10^7+0.9\\times10^7=4.5\\times10^7", marks: 1, markCode: "M" },
              { reasoning: "Divide the number parts and subtract the powers.", working: "\\frac{4.5}{1.5}\\times10^{7-(-2)}=3\\times10^9", marks: 1, markCode: "M" },
              { reasoning: "The result is already in standard form.", working: "3\\times10^{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\times10^9$",
            commonErrors: ["Adding the number parts without matching the powers: $12.6\\times10^{7}$.", "Subtracting $-2$ as $7-2$."],
          },
        },
        {
          id: "edm10-u1-standard-form-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The distance from the Earth to the Sun is $1.5\\times10^{8}$ km. Light travels at $3\\times10^{5}$ km per second. The mass of the Earth is $6\\times10^{24}$ kg and the mass of the Moon is $7.35\\times10^{22}$ kg.",
          parts: [
            { label: "a", prompt: "Work out the time, in seconds, for light to travel from the Sun to the Earth.", marks: 2 },
            { label: "b", prompt: "Convert your answer to part (a) into minutes. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Work out the total mass of the Earth and the Moon, in the form $a\\times10^n$ where $1\\le a<10$. Enter $a$ to 3 significant figures and $n$.", marks: 3 },
            { label: "d", prompt: "Work out how many times greater the mass of the Earth is than the mass of the Moon. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) seconds", answer: 500 },
              { label: "(b) minutes", answer: 8.33, tolerance: 0.005 },
              { label: "(c) a", answer: 6.07, tolerance: 0.005 },
              { label: "(c) n", answer: 24 },
              { label: "(d) ratio", answer: 81.6, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "time $=$ distance $\\div$ speed." },
              { kind: "law", name: "Index laws", statement: "$10^m\\div10^n=10^{m-n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the distance by the speed.", working: "\\frac{1.5\\times10^8}{3\\times10^5}=0.5\\times10^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "500\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by 60.", working: "500\\div60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to 3 s.f.", working: "8.33", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write the Moon's mass with the same power: $7.35\\times10^{22}=0.0735\\times10^{24}$.", working: "6\\times10^{24}+0.0735\\times10^{24}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add.", working: "6.0735\\times10^{24}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Round to 3 s.f.", working: "6.07\\times10^{24}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the Earth's mass by the Moon's mass.", working: "\\frac{6\\times10^{24}}{7.35\\times10^{22}}=\\frac{6}{7.35}\\times10^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$0.81632\\times100=81.632$, which is 81.6 to 3 s.f.", working: "81.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 500 s (b) 8.33 minutes (c) $6.07\\times10^{24}$ kg (d) 81.6",
            commonErrors: ["Multiplying distance by speed.", "Adding the number parts $6+7.35$ without matching powers."],
          },
        },
      ],
    },
    {
      id: "edm10-u1-bounds",
      title: "Upper and lower bounds in calculations",
      skill: "Find bounds of rounded values and combine them to find the bounds of a calculation.",
      lesson: {
        sections: [
          {
            heading: "Bounds of a rounded number",
            body: "A number rounded to a given accuracy lies within half a unit of that accuracy either side. A length of 8.4 cm to 1 d.p. has $8.35\\le L<8.45$. The lower bound is 8.35 and the upper bound is 8.45.",
          },
          {
            heading: "Bounds in calculations",
            body: "- $a+b$: upper bound uses both upper bounds; lower uses both lower\n- $a-b$: upper $=a_{\\text{upper}}-b_{\\text{lower}}$; lower $=a_{\\text{lower}}-b_{\\text{upper}}$\n- $a\\times b$: same as addition\n- $a\\div b$: upper $=a_{\\text{upper}}\\div b_{\\text{lower}}$; lower $=a_{\\text{lower}}\\div b_{\\text{upper}}$",
          },
          {
            heading: "Stating a conclusion",
            body: "To give an answer to a suitable degree of accuracy, calculate both bounds and find the value that both round to. If the bounds round to different values, the answer cannot be given to that accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Rounded value", statement: "Bounds are $\\pm\\frac12$ of the rounding unit." },
          { name: "Division", statement: "$\\frac{a}{b}$: UB $=\\frac{a_{UB}}{b_{LB}}$, LB $=\\frac{a_{LB}}{b_{UB}}$" },
        ],
        workedExample: {
          problem: "$a=6.5$ and $b=2.5$, both to 1 d.p. Find the upper bound of $a\\div b$.",
          solution: "$a_{UB}=6.55$, $b_{LB}=2.45$. Upper bound of $a\\div b=6.55\\div2.45=2.673\\ldots$",
        },
      },
      questions: [
        {
          id: "edm10-u1-bounds-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "The length of a pencil is 14 cm, correct to the nearest centimetre. Write down the lower bound and the upper bound of the length.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower bound (cm)", answer: 13.5 },
              { label: "Upper bound (cm)", answer: 14.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "A value rounded to the nearest $u$ lies within $\\frac{u}{2}$ either side." },
            ],
            steps: [
              { reasoning: "The rounding unit is 1 cm, so half of it is 0.5 cm.", working: "14-0.5=13.5", marks: 1, markCode: "B" },
              { reasoning: "Upper bound.", working: "14+0.5=14.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Lower bound 13.5 cm, upper bound 14.5 cm",
            commonErrors: ["Giving 13 and 15.", "Giving 13.9 and 14.1."],
          },
        },
        {
          id: "edm10-u1-bounds-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A rectangle has length 8.4 cm and width 5.2 cm, both correct to 1 decimal place. Work out the upper bound for the area of the rectangle. Give your answer to 4 significant figures.",
          response: { type: "numeric", parts: [{ label: "Upper bound (cm²)", answer: 44.36, tolerance: 0.005, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "The upper bound of $a\\times b$ uses the upper bounds of both $a$ and $b$." },
            ],
            steps: [
              { reasoning: "Upper bounds of the length and width.", working: "8.45,\\quad 5.25", marks: 1, markCode: "B" },
              { reasoning: "Multiply them.", working: "8.45\\times5.25=44.3625", marks: 1, markCode: "M" },
              { reasoning: "Round to 4 s.f.", working: "44.36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$44.36$ cm$^2$ (accept $44.3625$)",
            commonErrors: ["Using 8.4 and 5.2 directly: $43.68$.", "Using 8.5 and 5.3."],
          },
        },
        {
          id: "edm10-u1-bounds-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$p=12.4$ and $q=3.2$, both correct to 1 decimal place. Work out the lower bound of $\\dfrac{p}{q}$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Lower bound", answer: 3.8, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a quotient", statement: "Lower bound of $\\frac{p}{q}$ is $\\frac{p_{LB}}{q_{UB}}$." },
            ],
            steps: [
              { reasoning: "Lower bound of $p$.", working: "p_{LB}=12.35", marks: 1, markCode: "B" },
              { reasoning: "Upper bound of $q$.", working: "q_{UB}=3.25", marks: 1, markCode: "B" },
              { reasoning: "Divide the lower bound by the upper bound.", working: "12.35\\div3.25=3.8", marks: 1, markCode: "M" },
              { reasoning: "Round to 3 s.f.", working: "3.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.80",
            commonErrors: ["Using both lower bounds: $12.35\\div3.15$.", "Using both upper bounds."],
          },
        },
        {
          id: "edm10-u1-bounds-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A car travels a distance of 150 km, correct to the nearest 10 km, in a time of 2.5 hours, correct to 2 significant figures.",
          parts: [
            { label: "a", prompt: "Write down the upper bound of the distance and the lower bound of the time.", marks: 2 },
            { label: "b", prompt: "Work out the upper bound of the average speed, in km/h. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Work out the lower bound of the average speed, in km/h. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Tia says the average speed is 60 km/h to 2 significant figures. Is she correct? Show your working.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "speed $=$ distance $\\div$ time." },
              { kind: "principle", name: "Bounds of a quotient", statement: "UB of $a\\div b=a_{UB}\\div b_{LB}$ and LB of $a\\div b=a_{LB}\\div b_{UB}$." },
            ],
            steps: [
              { part: "a", reasoning: "Distance to nearest 10 km: bounds are 145 and 155.", working: "d_{UB}=155", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Time 2.5 to 2 s.f. means to the nearest 0.1: bounds are 2.45 and 2.55.", working: "t_{LB}=2.45", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Largest speed uses the largest distance and the smallest time.", working: "\\frac{155}{2.45}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "63.265\\ldots", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Round to 3 s.f.", working: "63.3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Smallest speed uses the smallest distance and the largest time.", working: "\\frac{145}{2.55}=56.862\\ldots", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to 3 s.f.", working: "56.9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Bounds to 2 s.f. are 63 and 57, which are different, so the speed cannot be stated as 60 to 2 s.f.", working: "56.9\\to57,\\quad 63.3\\to63", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion: Tia is not correct, because the speed could round to values other than 60.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 155 km, 2.45 h (b) 63.3 km/h (c) 56.9 km/h (d) No: bounds round to 63 and 57, which are not equal to 60.",
            commonErrors: ["Using 155 with 2.55 for the upper bound.", "Taking bounds of the time as 2.45 and 2.55 but of the distance as 149.5 and 150.5."],
            examinerNote: "Also check the real speed 150 ÷ 2.5 = 60, which is only the nominal value.",
          },
        },
      ],
    },
  ],
};
