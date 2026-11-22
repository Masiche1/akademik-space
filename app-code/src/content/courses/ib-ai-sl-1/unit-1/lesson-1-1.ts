import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "aisl-u1-lesson-1-1",
  code: "1-1",
  title: "Numbers and Approximation",
  goal: "I CAN write numbers in standard form, find bounds and percentage errors, and use the laws of exponents and logarithms to solve real-world problems.",
  standards: ["SL 1.1", "SL 1.5", "SL 1.6"],
  vocabulary: [
    { term: "Standard form", definition: "A number written as $a \\times 10^k$ where $1 \\le a < 10$ and $k$ is an integer." },
    { term: "Significant figures", definition: "The digits of a number that carry meaning, counted from the first non-zero digit." },
    { term: "Lower and upper bounds", definition: "The smallest and largest values a measurement could have before rounding; a length of $12.4$ cm to the nearest $0.1$ cm lies in $12.35 \\le L < 12.45$." },
    { term: "Percentage error", definition: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$, where $v_A$ is the approximate value and $v_E$ is the exact value." },
    { term: "Logarithm", definition: "$\\log_{10} x = y$ means $10^y = x$; the natural logarithm $\\ln x = y$ means $e^y = x$." },
    { term: "Law of exponents", definition: "Rules such as $a^m a^n = a^{m+n}$ and $(a^m)^n = a^{mn}$ used to simplify powers." },
  ],
  concepts: [
    {
      id: "aisl-u1-approximation",
      title: "Standard form, bounds and percentage error",
      skill: "Write numbers in standard form, find bounds of measurements and calculations, and calculate percentage error.",
      lesson: {
        sections: [
          {
            heading: "Standard form and rounding",
            body: "A number in standard form is written $a \\times 10^k$ with $1 \\le a < 10$. Very large numbers have positive $k$ and very small numbers have negative $k$: $0.000472 = 4.72 \\times 10^{-4}$. Round to the accuracy required, usually 3 significant figures, and only round at the end of a calculation. Your GDC can display numbers in scientific mode, which uses the same idea.",
          },
          {
            heading: "Bounds of measurements",
            body: "A measurement rounded to the nearest unit $u$ could be up to $\\frac{u}{2}$ smaller or larger. For a length of $85$ m to the nearest metre, $84.5 \\le L < 85.5$. For a product such as an area, the **upper bound** uses both upper bounds and the **lower bound** uses both lower bounds. Always state the bounds before calculating.",
          },
          {
            heading: "Percentage error",
            body: "The percentage error compares an approximate value with the exact value: $\\varepsilon = \\left|\\frac{v_A - v_E}{v_E}\\right| \\times 100\\%$. Divide by the **exact** value, not the approximation. A small percentage error means the approximation is a good one.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a \\times 10^k,\\; 1 \\le a < 10,\\; k \\in \\mathbb{Z}$" },
          { name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A square has side $6.0$ cm measured to the nearest $0.1$ cm. Find the upper bound for its area.",
          solution: "The side lies in $5.95 \\le s < 6.05$. The upper bound for the area is $6.05^2 = 36.6025$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-approximation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write down $0.000472$ in the form $a \\times 10^k$, where $1 \\le a < 10$ and $k \\in \\mathbb{Z}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.72 \\times 10^{-4}$" },
              { id: "b", text: "$47.2 \\times 10^{-5}$" },
              { id: "c", text: "$4.72 \\times 10^{4}$" },
              { id: "d", text: "$4.72 \\times 10^{-3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a \\times 10^k$ with $1 \\le a < 10$ and $k$ an integer." },
            ],
            steps: [
              { reasoning: "Move the decimal point to give a number between 1 and 10.", working: "0.000472 \\to 4.72", marks: 1, markCode: "M" },
              { reasoning: "The point moved 4 places to the right, so the power of 10 is $-4$.", working: "4.72 \\times 10^{-4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4.72 \\times 10^{-4}$",
            commonErrors: ["Counting the places incorrectly and giving $10^{-3}$.", "Writing $a$ outside the range $1 \\le a < 10$, as in $47.2 \\times 10^{-5}$."],
          },
        },
        {
          id: "aisl-u1-approximation-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangle has length $12.4$ cm and width $8.5$ cm, each measured to the nearest $0.1$ cm. Find the upper bound for the area of the rectangle, in cm$^2$ (give the exact value).",
          response: { type: "numeric", parts: [{ label: "Upper bound for area (cm$^2$)", answer: 106.4475, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "The upper bound of a product of positive quantities is the product of their upper bounds." },
            ],
            steps: [
              { reasoning: "Each measurement is correct to $\\pm 0.05$, so find the upper bound of each.", working: "L_{\\max} = 12.45,\\quad W_{\\max} = 8.55", marks: 1, markCode: "M" },
              { reasoning: "Multiply the upper bounds.", working: "12.45 \\times 8.55", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "106.4475", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$106.4475$ cm$^2$",
            commonErrors: ["Using $12.4 \\times 8.5$ instead of the upper bounds.", "Adding $0.1$ instead of $0.05$ to each measurement."],
          },
        },
        {
          id: "aisl-u1-approximation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The speed of light is exactly $299\\,792\\,458$ m s$^{-1}$. A student uses the approximation $3.00 \\times 10^8$ m s$^{-1}$. Calculate the percentage error in the student's value. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Percentage error (%)", answer: 0.0692, tolerance: 0.00005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Substitute the approximate and exact values into the percentage error formula.", working: "\\varepsilon = \\left|\\frac{300\\,000\\,000 - 299\\,792\\,458}{299\\,792\\,458}\\right| \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Find the difference.", working: "300\\,000\\,000 - 299\\,792\\,458 = 207\\,542", marks: 1, markCode: "A" },
              { reasoning: "Divide by the exact value and multiply by 100.", working: "\\frac{207\\,542}{299\\,792\\,458} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Round to 3 significant figures.", working: "0.0692\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0692\\%$",
            commonErrors: ["Dividing by the approximate value instead of the exact value.", "Forgetting to multiply by 100, giving $0.000692$."],
            examinerNote: "Leading zeros are not significant: 3 s.f. of $0.0692285$ is $0.0692$.",
          },
        },
        {
          id: "aisl-u1-approximation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A farmer measures a rectangular field. The length is $85$ m and the width is $42$ m, each measured correct to the nearest metre.",
          parts: [
            { label: "a", prompt: "Write down the lower bound and the upper bound for the length of the field.", marks: 2 },
            { label: "b", prompt: "Find the lower bound and the upper bound for the area of the field.", marks: 3 },
            { label: "c", prompt: "Write the upper bound for the area in the form $a \\times 10^k$, where $1 \\le a < 10$, giving $a$ to 3 significant figures.", marks: 1 },
            { label: "d", prompt: "The farmer states that the area is $3570$ m$^2$. Find the percentage error in this statement if the true area is $3506.75$ m$^2$. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "A value correct to the nearest unit $u$ lies within $\\pm \\frac{u}{2}$ of the stated value." },
              { kind: "principle", name: "Bounds of a product", statement: "The extreme areas use both lower bounds or both upper bounds." },
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "The length is to the nearest metre, so it is within $0.5$ m of $85$.", working: "L_{\\min} = 84.5", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The upper bound is $0.5$ above.", working: "L_{\\max} = 85.5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The width bounds are $41.5$ and $42.5$. The upper area uses both upper bounds.", working: "85.5 \\times 42.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the upper bound.", working: "3633.75", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The lower area uses both lower bounds.", working: "84.5 \\times 41.5 = 3506.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $3633.75$ in standard form with 3 significant figures.", working: "3.63 \\times 10^{3}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Substitute into the percentage error formula using the true value $3506.75$.", working: "\\left|\\frac{3570 - 3506.75}{3506.75}\\right| \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round.", working: "\\frac{63.25}{3506.75} \\times 100 = 1.80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $84.5$ and $85.5$ m. (b) Lower $3506.75$ m$^2$, upper $3633.75$ m$^2$. (c) $3.63 \\times 10^3$. (d) $1.80\\%$.",
            commonErrors: ["Using $85 \\times 42$ for both bounds.", "Dividing by the farmer's value $3570$ instead of the true value."],
            examinerNote: "Do not round the bounds before using them in later calculations.",
          },
        },
        {
          id: "aisl-u1-approximation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write $60\\,400$ in the form $a \\times 10^k$, where $1 \\le a < 10$ and $k \\in \\mathbb{Z}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.04 \\times 10^{3}$" },
              { id: "b", text: "$6.04 \\times 10^{4}$" },
              { id: "c", text: "$604 \\times 10^{2}$" },
              { id: "d", text: "$6.4 \\times 10^{4}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a \\times 10^k$ with $1 \\le a < 10$ and $k$ an integer." },
            ],
            steps: [
              { reasoning: "Write the number with the decimal point after the first digit.", working: "60400 \\to 6.04", marks: 1, markCode: "M" },
              { reasoning: "Count the remaining digits to find the power of 10.", working: "6.04 \\times 10^{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6.04 \\times 10^{4}$",
            commonErrors: ["Giving $10^{3}$ instead of $10^{4}$.", "Leaving $a$ outside $1 \\le a < 10$, as in $604 \\times 10^{2}$."],
          },
        },
        {
          id: "aisl-u1-approximation-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\dfrac{4 \\times 10^{-3}}{8 \\times 10^{2}}$, giving your answer in the form $a \\times 10^k$, where $1 \\le a < 10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5 \\times 10^{-6}$" },
              { id: "b", text: "$2 \\times 10^{-5}$" },
              { id: "c", text: "$5 \\times 10^{-1}$" },
              { id: "d", text: "$5 \\times 10^{5}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "Divide coefficients and subtract the powers of 10." },
            ],
            steps: [
              { reasoning: "Divide the coefficients and subtract the indices of 10.", working: "\\frac{4}{8} \\times 10^{-3-2} = 0.5 \\times 10^{-5}", marks: 1, markCode: "M" },
              { reasoning: "Rewrite $0.5 \\times 10^{-5}$ in standard form.", working: "5 \\times 10^{-6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5 \\times 10^{-6}$",
            commonErrors: ["Subtracting the powers in the wrong order, giving $10^{1}$.", "Forgetting to convert $0.5$ to $5 \\times 10^{-1}$."],
          },
        },
        {
          id: "aisl-u1-approximation-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $(6.5 \\times 10^{4})(2 \\times 10^{3})$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 130000000 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "Multiply the coefficients and add the powers of 10." },
            ],
            steps: [
              { reasoning: "Multiply the coefficients and add the indices.", working: "(6.5 \\times 2) \\times 10^{4+3} = 13 \\times 10^{7}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "13 \\times 10^{7} = 130\\,000\\,000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$130\\,000\\,000$",
            commonErrors: ["Multiplying the powers of 10 instead of adding them."],
          },
        },
        {
          id: "aisl-u1-approximation-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangle has length $18.6$ cm and width $9.3$ cm, each measured to the nearest $0.1$ cm. Find the lower bound for the area of the rectangle, in cm$^2$ (give the exact value).",
          response: { type: "numeric", parts: [{ label: "Lower bound for area (cm$^2$)", answer: 171.5875, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "The lower bound of a product of positive quantities is the product of their lower bounds." },
            ],
            steps: [
              { reasoning: "Each measurement is within $\\pm 0.05$, so write down the lower bounds.", working: "L_{\\min} = 18.55,\\quad W_{\\min} = 9.25", marks: 1, markCode: "M" },
              { reasoning: "Multiply the lower bounds.", working: "18.55 \\times 9.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "171.5875", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$171.5875$ cm$^2$",
            commonErrors: ["Using $18.6 \\times 9.3$ instead of the lower bounds.", "Using $\\pm 0.1$ instead of $\\pm 0.05$."],
          },
        },
        {
          id: "aisl-u1-approximation-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A student measures a length as $8.5$ cm. The exact length is $8.0$ cm. Calculate the percentage error in the student's measurement.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5\\%$" },
              { id: "b", text: "$12.5\\%$" },
              { id: "c", text: "$5.88\\%$" },
              { id: "d", text: "$6.25\\%$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Substitute the approximate and exact values into the formula.", working: "\\varepsilon = \\left|\\frac{8.5 - 8.0}{8.0}\\right| \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{0.5}{8.0} \\times 100 = 6.25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $6.25\\%$",
            commonErrors: ["Dividing by the approximate value $8.5$, giving $5.88\\%$.", "Forgetting to multiply by 100, giving $0.0625$."],
          },
        },
        {
          id: "aisl-u1-approximation-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The mass of each of two parcels is measured to the nearest $10$ g. The masses are $360$ g and $240$ g. Find the upper bound for the total mass of the two parcels, in grams.",
          response: { type: "numeric", parts: [{ label: "Upper bound for total mass (g)", answer: 620 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a sum", statement: "The upper bound of a sum is the sum of the upper bounds." },
            ],
            steps: [
              { reasoning: "Find the upper bound of each mass: each is within $\\pm 5$ g of its stated value.", working: "365 \\le m_1 < 375,\\quad 245 \\le m_2 < 255", marks: 1, markCode: "M" },
              { reasoning: "Add the two upper bounds.", working: "375 + 255", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "620", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$620$ g",
            commonErrors: ["Adding $10$ g instead of $5$ g to each mass.", "Adding the stated masses $360 + 240 = 600$."],
          },
        },
        {
          id: "aisl-u1-approximation-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Three identical components each have a mass of $185$ g, each mass being measured to the nearest $5$ g.",
          parts: [
            { label: "a", prompt: "Write down the lower bound and the upper bound for the mass of one component.", marks: 2 },
            { label: "b", prompt: "Find the lower bound and the upper bound for the total mass of the three components.", marks: 2 },
            { label: "c", prompt: "The true total mass of the three components is $550$ g, but the recorded total is $555$ g. Find the percentage error in the recorded total. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "A value correct to the nearest unit $u$ lies within $\\pm \\frac{u}{2}$ of the stated value." },
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Each mass is within $2.5$ g of $185$ g.", working: "182.5 \\le m < 187.5", marks: 1, markCode: "B" },
              { part: "a", reasoning: "State both bounds explicitly.", working: "m_{\\min} = 182.5,\\quad m_{\\max} = 187.5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The total of three components uses three times each bound.", working: "3 \\times 182.5 = 547.5,\\quad 3 \\times 187.5 = 562.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the bounds for the total mass.", working: "547.5 \\le M < 562.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute the recorded and true totals into the percentage error formula.", working: "\\varepsilon = \\left|\\frac{555 - 550}{550}\\right| \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round to 3 significant figures.", working: "\\frac{5}{550} \\times 100 = 0.909\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $182.5$ g and $187.5$ g. (b) $547.5$ g and $562.5$ g. (c) $0.909\\%$.",
            commonErrors: ["Using $\\pm 5$ g instead of $\\pm 2.5$ g in part (a).", "Dividing by the recorded value $555$ instead of the true value $550$."],
          },
        },
        {
          id: "aisl-u1-approximation-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $(3 \\times 10^{-2})^{2}$, giving your answer in the form $a \\times 10^k$, where $1 \\le a < 10$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 0.0009 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "$(a^m)^n = a^{mn}$ and $a^0 = 1$." },
            ],
            steps: [
              { reasoning: "Square both the coefficient and the power of 10.", working: "3^{2} \\times (10^{-2})^{2} = 9 \\times 10^{-4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "9 \\times 10^{-4} = 0.0009", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0009$",
            commonErrors: ["Writing $9 \\times 10^{-2}$ by squaring the coefficient but not the exponent."],
          },
        },
        {
          id: "aisl-u1-approximation-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write $0.0452$ correct to 2 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.050$" },
              { id: "b", text: "$0.0452$" },
              { id: "c", text: "$0.040$" },
              { id: "d", text: "$0.045$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Significant figures", statement: "Digits are counted from the first non-zero digit." },
            ],
            steps: [
              { reasoning: "The first two significant figures are $4$ and $5$; the next digit is $2$, so round down.", working: "0.0452 \\to 0.045", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "0.045", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $0.045$",
            commonErrors: ["Rounding to 2 decimal places instead of 2 significant figures, giving $0.05$ or $0.05$ shown as $0.050$."],
          },
        },
        {
          id: "aisl-u1-approximation-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The side of a square garden is $12.5$ m, measured to the nearest $0.1$ m.",
          parts: [
            { label: "a", prompt: "Write down the lower bound and the upper bound for the side length.", marks: 1 },
            { label: "b", prompt: "Find the lower bound and the upper bound for the area of the garden, in m$^2$.", marks: 2 },
            { label: "c", prompt: "Write the upper bound for the area in the form $a \\times 10^k$, where $1 \\le a < 10$, giving $a$ to 3 significant figures.", marks: 1 },
            { label: "d", prompt: "The area is stated as $156$ m$^2$, and the exact area is $156.25$ m$^2$. Find the percentage error in the stated area. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "A value correct to the nearest unit $u$ lies within $\\pm \\frac{u}{2}$ of the stated value." },
              { kind: "principle", name: "Bounds of a product", statement: "The extreme areas use both lower bounds or both upper bounds." },
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "The side is within $0.05$ m of $12.5$ m; state both bounds.", working: "12.45 \\le s < 12.55", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The lower area uses the lower bound of the side.", working: "12.45^{2} = 155.0025", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The upper area uses the upper bound.", working: "12.55^{2} = 157.5025", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $157.5025$ in standard form and round $a$ to 3 significant figures.", working: "1.58 \\times 10^{2}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Substitute the stated and exact areas into the percentage error formula.", working: "\\varepsilon = \\left|\\frac{156 - 156.25}{156.25}\\right| \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round.", working: "\\frac{0.25}{156.25} \\times 100 = 0.160\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12.45$ m and $12.55$ m. (b) Lower $155.0025$ m$^2$, upper $157.5025$ m$^2$. (c) $1.58 \\times 10^{2}$. (d) $0.160\\%$.",
            commonErrors: ["Using $12.5^{2} = 156.25$ for both bounds.", "Dividing by the stated area $156$ instead of the exact area $156.25$."],
          },
        },
        {
          id: "aisl-u1-approximation-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write $402\\,000$ in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.02 \\times 10^{4}$" },
              { id: "b", text: "$4.02 \\times 10^{5}$" },
              { id: "c", text: "$4.2 \\times 10^{5}$" },
              { id: "d", text: "$402 \\times 10^{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a \\times 10^k$ with $1 \\le a < 10$ and $k$ an integer." },
            ],
            steps: [
              { reasoning: "Place the decimal point after the first digit.", working: "402000 \\to 4.02", marks: 1, markCode: "M" },
              { reasoning: "Count the remaining digits.", working: "4.02 \\times 10^{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4.02 \\times 10^{5}$",
            commonErrors: ["Counting only 4 digits and giving $10^{4}$.", "Writing $402 \\times 10^{3}$, where $a$ is outside the required range."],
          },
        },
        {
          id: "aisl-u1-approximation-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\dfrac{2.4 \\times 10^{3}}{3 \\times 10^{-1}}$, giving your answer in the form $a \\times 10^k$, where $1 \\le a < 10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8 \\times 10^{3}$" },
              { id: "b", text: "$0.8 \\times 10^{3}$" },
              { id: "c", text: "$8 \\times 10^{4}$" },
              { id: "d", text: "$7.2 \\times 10^{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "Divide coefficients and subtract the powers of 10." },
            ],
            steps: [
              { reasoning: "Divide the coefficients and subtract the indices.", working: "\\frac{2.4}{3} \\times 10^{3-(-1)} = 0.8 \\times 10^{4}", marks: 1, markCode: "M" },
              { reasoning: "Rewrite in standard form.", working: "8 \\times 10^{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8 \\times 10^{3}$",
            commonErrors: ["Subtracting $3 - 1 = 2$ instead of $3 - (-1) = 4$.", "Leaving $0.8 \\times 10^{4}$, where $a$ is outside the required range."],
          },
        },
        {
          id: "aisl-u1-approximation-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two lengths are measured: $A = 1.25$ m and $B = 0.85$ m, each correct to the nearest $0.01$ m.",
          parts: [
            { label: "a", prompt: "Write down the lower bound and the upper bound for each of $A$ and $B$.", marks: 2 },
            { label: "b", prompt: "Find the lower bound and the upper bound for $A + B$.", marks: 2 },
            { label: "c", prompt: "Find the lower bound and the upper bound for $A - B$.", marks: 2 },
            { label: "d", prompt: "The value of $A + B$ is estimated as $2.10$ m, while the exact value is $2.09$ m. Find the percentage error in the estimate. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "A value correct to the nearest unit $u$ lies within $\\pm \\frac{u}{2}$ of the stated value." },
              { kind: "principle", name: "Bounds of a sum and difference", statement: "For $A + B$ both bounds move the same way; for $A - B$ the extremes pair the largest $A$ with the smallest $B$ and vice versa." },
              { kind: "formula", name: "Percentage error", statement: "$\\varepsilon = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Each length is within $0.005$ m of its stated value.", working: "1.245 \\le A < 1.255,\\quad 0.845 \\le B < 0.855", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all four bounds.", working: "A_{\\min} = 1.245,\\ A_{\\max} = 1.255,\\ B_{\\min} = 0.845,\\ B_{\\max} = 0.855", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The lower bound of $A + B$ adds the two lower bounds; the upper bound adds the two upper bounds.", working: "1.245 + 0.845 = 2.09,\\quad 1.255 + 0.855 = 2.11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the bounds for $A + B$.", working: "2.09 \\le A + B < 2.11", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The smallest $A - B$ uses the smallest $A$ and the largest $B$; the largest uses the largest $A$ and the smallest $B$.", working: "1.245 - 0.855 = 0.39,\\quad 1.255 - 0.845 = 0.41", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bounds for $A - B$.", working: "0.39 \\le A - B < 0.41", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the estimate and the exact value into the percentage error formula.", working: "\\varepsilon = \\left|\\frac{2.10 - 2.09}{2.09}\\right| \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round to 3 significant figures.", working: "\\frac{0.01}{2.09} \\times 100 = 0.478\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.245 \\le A < 1.255$ and $0.845 \\le B < 0.855$. (b) $2.09 \\le A+B < 2.11$. (c) $0.39 \\le A-B < 0.41$. (d) $0.478\\%$.",
            commonErrors: ["Adding the upper bound of $A$ to the lower bound of $B$ for $A + B$.", "For $A - B$, subtracting the lower bound of $B$ from the lower bound of $A$ without checking which combination gives the extremes."],
          },
        },
      ],
    },
    {
      id: "aisl-u1-exponents-logs",
      title: "Laws of exponents and logarithms",
      skill: "Apply laws of exponents and use base 10 and natural logarithms to solve exponential equations and model contexts.",
      lesson: {
        sections: [
          {
            heading: "Laws of exponents",
            body: "For $a \\ne 0$: $a^m \\times a^n = a^{m+n}$, $\\dfrac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, $a^{-n} = \\dfrac{1}{a^n}$ and $a^0 = 1$. Apply these before using a calculator so that expressions stay exact.",
          },
          {
            heading: "Logarithms",
            body: "A logarithm undoes an exponential. $10^x = c$ gives $x = \\log_{10} c$, and $e^x = c$ gives $x = \\ln c$. Useful laws: $\\log(ab) = \\log a + \\log b$, $\\log\\left(\\frac{a}{b}\\right) = \\log a - \\log b$ and $\\log(a^n) = n\\log a$. Use them to solve equations where the unknown is in an exponent.",
          },
          {
            heading: "Logarithms in context",
            body: "Many scales are logarithmic: sound level in decibels, earthquake magnitude, and pH. A tenfold increase in the measured quantity adds a fixed amount on the scale. Interpret what the constants mean in the context, and use your GDC to evaluate $\\log_{10}$ and $\\ln$ values.",
          },
        ],
        keyFormulas: [
          { name: "Product and power laws", statement: "$a^m a^n = a^{m+n},\\quad (a^m)^n = a^{mn}$" },
          { name: "Log laws", statement: "$\\log(ab) = \\log a + \\log b,\\quad \\log(a^n) = n\\log a$" },
          { name: "Exponential equation", statement: "$10^x = c \\Rightarrow x = \\log_{10} c;\\quad e^x = c \\Rightarrow x = \\ln c$" },
        ],
        workedExample: {
          problem: "Solve $e^{0.5t} = 8$, giving $t$ to 3 significant figures.",
          solution: "Take natural logarithms: $0.5t = \\ln 8 = 2.0794$. So $t = 4.1589 = 4.16$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-exponents-logs-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $(x^3)^2 \\times x^{-4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{2}$" },
              { id: "b", text: "$x^{10}$" },
              { id: "c", text: "$x^{-2}$" },
              { id: "d", text: "$x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "$(a^m)^n = a^{mn}$ and $a^m a^n = a^{m+n}$." },
            ],
            steps: [
              { reasoning: "Multiply the exponents in the power of a power.", working: "(x^3)^2 = x^6", marks: 1, markCode: "M" },
              { reasoning: "Add the exponents when multiplying.", working: "x^6 \\times x^{-4} = x^{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x^2$",
            commonErrors: ["Adding instead of multiplying exponents in $(x^3)^2$, giving $x^5$ then $x$.", "Subtracting in the wrong order, giving $x^{-2}$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $10^x = 250$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2.4, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$10^x = c$ is equivalent to $x = \\log_{10} c$." },
            ],
            steps: [
              { reasoning: "Rewrite the exponential equation as a logarithm.", working: "x = \\log_{10} 250", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the GDC and round to 3 significant figures.", working: "x = 2.39794\\ldots = 2.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2.40$",
            commonErrors: ["Dividing 250 by 10 instead of taking a logarithm.", "Using $\\ln 250$ instead of $\\log_{10} 250$, giving $5.52$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A bacterial population is modelled by $N = 200e^{0.2t}$, where $N$ is the number of bacteria and $t$ is the time in hours. Find the time at which the population first reaches $3000$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$t$ (hours)", answer: 13.5, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$e^y = c$ is equivalent to $y = \\ln c$." },
            ],
            steps: [
              { reasoning: "Set $N = 3000$ and divide by 200 to isolate the exponential.", working: "200e^{0.2t} = 3000 \\Rightarrow e^{0.2t} = 15", marks: 1, markCode: "M" },
              { reasoning: "Take natural logarithms of both sides.", working: "0.2t = \\ln 15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the logarithm.", working: "0.2t = 2.70805", marks: 1, markCode: "A" },
              { reasoning: "Divide by $0.2$ and round to 3 significant figures.", working: "t = 13.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 13.5$ hours",
            commonErrors: ["Taking $\\ln$ of each term before dividing by 200.", "Forgetting to divide by $0.2$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The sound level $L$ decibels (dB) of a sound with intensity $I$ W m$^{-2}$ is given by $L = 10\\log_{10}\\left(\\dfrac{I}{I_0}\\right)$, where $I_0 = 10^{-12}$ W m$^{-2}$.",
          parts: [
            { label: "a", prompt: "Find the sound level when $I = 10^{-5}$ W m$^{-2}$.", marks: 2 },
            { label: "b", prompt: "A concert has a sound level of $105$ dB. Find the intensity, giving your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Show that multiplying the intensity by $10$ increases the sound level by $10$ dB.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Log laws", statement: "$\\log(ab) = \\log a + \\log b$ and $\\log_{10} 10^n = n$." },
              { kind: "definition", name: "Logarithm", statement: "$\\log_{10} x = y$ means $10^y = x$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into the formula and simplify the ratio using exponent laws.", working: "L = 10\\log_{10}\\left(\\frac{10^{-5}}{10^{-12}}\\right) = 10\\log_{10}(10^{7})", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use $\\log_{10} 10^7 = 7$.", working: "L = 70 \\text{ dB}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the equation and divide by 10.", working: "105 = 10\\log_{10}\\left(\\frac{I}{10^{-12}}\\right) \\Rightarrow \\log_{10}\\left(\\frac{I}{10^{-12}}\\right) = 10.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to exponential form.", working: "I = 10^{-12} \\times 10^{10.5} = 10^{-1.5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the GDC.", working: "I = 0.0316 \\text{ W m}^{-2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let the new intensity be $10I$ and substitute.", working: "L_2 = 10\\log_{10}\\left(\\frac{10I}{I_0}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use the product law of logarithms.", working: "L_2 = 10\\left(\\log_{10} 10 + \\log_{10}\\frac{I}{I_0}\\right) = 10 + 10\\log_{10}\\frac{I}{I_0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recognize the original level $L$, so the level has risen by 10 dB (AG).", working: "L_2 = L + 10", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $70$ dB. (b) $0.0316$ W m$^{-2}$. (c) $L_2 = L + 10$, so the sound level rises by $10$ dB.",
            commonErrors: ["Writing $\\log(10I) = 10\\log I$.", "In (b), dividing $105$ by $10$ but then forgetting to multiply by $I_0$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $x^{5} \\div x^{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{7}$" },
              { id: "b", text: "$x^{-3}$" },
              { id: "c", text: "$x^{2.5}$" },
              { id: "d", text: "$x^{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "$\\dfrac{a^{m}}{a^{n}} = a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Subtract the exponents when dividing powers with the same base.", working: "x^{5-2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "x^{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $x^{3}$",
            commonErrors: ["Adding the exponents to get $x^{7}$.", "Subtracting in the wrong order to get $x^{-3}$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $e^{x} = 20$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3.0, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$e^{x} = c$ is equivalent to $x = \\ln c$." },
            ],
            steps: [
              { reasoning: "Rewrite the exponential equation as a logarithm.", working: "x = \\ln 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the GDC and round to 3 significant figures.", working: "x = 2.99573\\ldots = 3.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3.00$",
            commonErrors: ["Using $\\log_{10} 20$ instead of $\\ln 20$, giving $1.30$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $\\dfrac{8x^{6}}{2x^{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x^{8}$" },
              { id: "b", text: "$6x^{4}$" },
              { id: "c", text: "$4x^{3}$" },
              { id: "d", text: "$4x^{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "$\\dfrac{a^{m}}{a^{n}} = a^{m-n}$." },
            ],
            steps: [
              { reasoning: "Divide the coefficients and subtract the exponents.", working: "\\frac{8}{2} \\times x^{6-2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "4x^{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $4x^{4}$",
            commonErrors: ["Subtracting the exponents in the wrong order, giving $x^{-4}$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\log_{10} 50 - 2\\log_{10} 5$. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$\\log_{10} 50 - 2\\log_{10} 5$", answer: 0.30103, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Log laws", statement: "$\\log\\left(\\frac{a}{b}\\right) = \\log a - \\log b$ and $\\log(a^{n}) = n\\log a$." },
            ],
            steps: [
              { reasoning: "Apply the quotient and power laws to rewrite the expression.", working: "\\log_{10} 50 - 2\\log_{10} x", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 5$.", working: "\\log_{10} 50 - 2\\log_{10} 5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the GDC.", working: "1.69897 - 2(0.69897) = 0.30103", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.301$",
            commonErrors: ["Writing $2\\log_{10}(5x)$ instead of $2\\log_{10} x$.", "Dividing by 2 incorrectly when applying the power law."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the value of $\\log_{10} 1000$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$100$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$0.3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_{10} x = y$ means $10^{y} = x$." },
            ],
            steps: [
              { reasoning: "Write $1000$ as a power of 10.", working: "1000 = 10^{3}", marks: 1, markCode: "M" },
              { reasoning: "Read off the logarithm.", working: "\\log_{10} 1000 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Confusing the logarithm with the exponent base, answering $10$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve $3 \\times 2^{x} = 48$, giving your answer exactly.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$a^{x} = c$ is equivalent to $x = \\log_{a} c$." },
            ],
            steps: [
              { reasoning: "Divide both sides by 3 to isolate the exponential.", working: "2^{x} = 16", marks: 1, markCode: "M" },
              { reasoning: "Recognize 16 as a power of 2.", working: "16 = 2^{4}", marks: 1, markCode: "A" },
              { reasoning: "Equate the exponents.", working: "x = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["Taking $\\log_{10}$ of each term before isolating $2^{x}$.", "Writing $x = \\log_{2} 48$ without dividing by 3 first."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The value of a car, in dollars, is modelled by $V = 28000e^{-0.12t}$, where $t$ is the number of years after purchase.",
          parts: [
            { label: "a", prompt: "Find the value of the car after 4 years. Give your answer to the nearest dollar.", marks: 2 },
            { label: "b", prompt: "Find the value of $t$ at which the car is worth half its original price. Give your answer to 3 significant figures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$e^{y} = c$ is equivalent to $y = \\ln c$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t = 4$ into the model.", working: "V = 28000e^{-0.48}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the GDC: $e^{-0.48} = 0.618783$.", working: "V = 17\\,326", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Half the original price is $14000$; set up the equation.", working: "28000e^{-0.12t} = 14000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 28000 to isolate the exponential.", working: "e^{-0.12t} = 0.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take natural logarithms of both sides.", working: "-0.12t = \\ln 0.5 = -0.693147", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $-0.12$ and round to 3 significant figures.", working: "t = 5.78", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$17\\,326$. (b) $t = 5.78$ years.",
            commonErrors: ["Using $\\log_{10}$ instead of $\\ln$ in part (b).", "Forgetting that the original price is $28000$, not $14000$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\log_{10} 2 + \\log_{10} 50$ without using a calculator for the logarithms.",
          response: { type: "numeric", parts: [{ label: "$\\log_{10} 2 + \\log_{10} 50$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Log laws", statement: "$\\log a + \\log b = \\log(ab)$." },
            ],
            steps: [
              { reasoning: "Combine the logarithms using the product law.", working: "\\log_{10}(2 \\times 50) = \\log_{10} 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\log_{10} 100 = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Computing $\\log_{10} 2$ and $\\log_{10} 50$ separately and losing precision."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An earthquake has magnitude $M$ on the Richter scale, modelled by $M = \\log_{10}\\left(\\dfrac{A}{A_0}\\right)$, where $A$ is the amplitude of the seismic wave. If the amplitude is $1000$ times $A_0$, what is $M$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1000$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_{10} x = y$ means $10^{y} = x$." },
            ],
            steps: [
              { reasoning: "Substitute the amplitude ratio into the model.", working: "M = \\log_{10} 1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate using $1000 = 10^{3}$.", working: "M = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3$",
            commonErrors: ["Answering $1000$, confusing the amplitude ratio with the logarithm.", "Answering $10$, confusing base and exponent."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A radioactive substance decays according to $N = 5000e^{-0.05t}$, where $N$ is the mass remaining in grams and $t$ is the time in years.",
          parts: [
            { label: "a", prompt: "Find the mass remaining after 10 years. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the half-life of the substance, giving your answer to 3 significant figures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$e^{y} = c$ is equivalent to $y = \\ln c$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t = 10$ into the model.", working: "N = 5000e^{-0.5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the GDC.", working: "N = 3030 \\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The half-life is the time when $N = 2500$; set up the equation.", working: "5000e^{-0.05t} = 2500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 5000 to isolate the exponential.", working: "e^{-0.05t} = 0.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take natural logarithms of both sides.", working: "-0.05t = \\ln 0.5 = -0.693147", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $-0.05$ and round to 3 significant figures.", working: "t = 13.9 \\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3030$ g. (b) $13.9$ years.",
            commonErrors: ["Solving for $N = 2500$ but forgetting that $t$ must be positive.", "Using $\\log_{10}$ instead of $\\ln$."],
            examinerNote: "The half-life is independent of the initial mass: $\\frac{\\ln 2}{0.05} = 13.86$.",
          },
        },
        {
          id: "aisl-u1-exponents-logs-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $10^{x} = 0.01$, giving your answer exactly.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$10^{x} = c$ is equivalent to $x = \\log_{10} c$." },
            ],
            steps: [
              { reasoning: "Rewrite the equation as a logarithm.", working: "x = \\log_{10} 0.01", marks: 1, markCode: "M" },
              { reasoning: "Write $0.01$ as a power of 10.", working: "0.01 = 10^{-2} \\Rightarrow x = -2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -2$",
            commonErrors: ["Answering $x = 2$ by ignoring the negative exponent.", "Writing $x = \\log_{10} 100$ instead of $\\log_{10} 0.01$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $\\left(2x^{3}\\right)^{2} \\times x^{-4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x^{10}$" },
              { id: "b", text: "$2x^{2}$" },
              { id: "c", text: "$4x^{2}$" },
              { id: "d", text: "$4x^{-2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Laws of exponents", statement: "$(ab)^{n} = a^{n}b^{n}$, $(a^{m})^{n} = a^{mn}$ and $a^{m}a^{n} = a^{m+n}$." },
            ],
            steps: [
              { reasoning: "Expand the bracket and multiply the exponents.", working: "4x^{6} \\times x^{-4}", marks: 1, markCode: "M" },
              { reasoning: "Add the exponents when multiplying.", working: "4x^{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $4x^{2}$",
            commonErrors: ["Squaring only the coefficient: $2x^{6}$.", "Adding exponents before multiplying the power, giving $4x^{10}$ or $4x^{-2}$."],
          },
        },
        {
          id: "aisl-u1-exponents-logs-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The pH of a solution is given by $\\text{pH} = -\\log_{10}[H^{+}]$, where $[H^{+}]$ is the hydrogen ion concentration in mol dm$^{-3}$.",
          parts: [
            { label: "a", prompt: "Find the pH of a solution with $[H^{+}] = 0.002$ mol dm$^{-3}$. Give your answer to 2 decimal places.", marks: 3 },
            { label: "b", prompt: "A solution has pH $3.5$. Find $[H^{+}]$ for this solution, giving your answer in the form $a \\times 10^{k}$.", marks: 3 },
            { label: "c", prompt: "Show that diluting a solution so that $[H^{+}]$ is divided by $10$ increases the pH by exactly $1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_{10} x = y$ means $10^{y} = x$." },
              { kind: "law", name: "Log laws", statement: "$\\log\\left(\\frac{a}{b}\\right) = \\log a - \\log b$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute the concentration into the pH formula.", working: "\\text{pH} = -\\log_{10}(0.002)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the logarithm with the GDC.", working: "\\log_{10}(0.002) = -2.69897", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Apply the negative sign and round.", working: "\\text{pH} = 2.70", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the equation $-\\log_{10}[H^{+}] = 3.5$.", working: "\\log_{10}[H^{+}] = -3.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to exponential form.", working: "[H^{+}] = 10^{-3.5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the GDC.", working: "[H^{+}] = 3.16 \\times 10^{-4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let the new concentration be $\\frac{[H^{+}]}{10}$ and substitute.", working: "\\text{pH}_{\\text{new}} = -\\log_{10}\\left(\\frac{[H^{+}]}{10}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the quotient law: $-\\log_{10}[H^{+}] + \\log_{10} 10 = \\text{pH} + 1$ (AG).", working: "\\text{pH}_{\\text{new}} = -\\log_{10}[H^{+}] + 1 = \\text{pH} + 1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2.70$. (b) $3.16 \\times 10^{-4}$ mol dm$^{-3}$. (c) $\\text{pH}_{\\text{new}} = \\text{pH} + 1$.",
            commonErrors: ["Dropping the negative sign in the pH formula.", "In (c), writing $\\log_{10}\\left(\\frac{[H^{+}]}{10}\\right) = \\log_{10}[H^{+}] - 10$ instead of $-1$."],
          },
        },
      ],
    },
  ],
};
