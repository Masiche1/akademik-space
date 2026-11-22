import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ciem-u1-lesson-1-2",
  code: "1-2",
  title: "Standard Form and Upper and Lower Bounds",
  goal: "I CAN write numbers in standard form, calculate with them, and find upper and lower bounds of measurements and calculations.",
  standards: ["0580 1.3"],
  vocabulary: [
    { term: "Standard form", definition: "A number written as $A\\times10^n$ where $1\\le A<10$ and $n$ is an integer." },
    { term: "Upper bound", definition: "The largest value a rounded measurement or calculation could actually have." },
    { term: "Lower bound", definition: "The smallest value a rounded measurement or calculation could actually have." },
    { term: "Degree of accuracy", definition: "The smallest unit to which a number is rounded, e.g. nearest metre, nearest 0.1, 3 significant figures." },
    { term: "Significant figures", definition: "Digits that carry meaning about precision; trailing zeros after a decimal point are significant." },
    { term: "Order of magnitude", definition: "The approximate size of a number expressed as a power of 10." },
  ],
  concepts: [
    {
      id: "ciem-u1-standard-form",
      title: "Standard form",
      skill: "Convert numbers to and from standard form and use index laws to calculate with them.",
      lesson: {
        sections: [
          {
            heading: "Writing numbers in standard form",
            body: "Standard form is $A\\times10^n$ with $1\\le A<10$ and $n$ an integer.\n\n- For large numbers, $n$ is positive: count how many places the decimal point moves left. $72\\,000\\,000=7.2\\times10^7$.\n- For small numbers, $n$ is negative: count how many places the decimal point moves right. $0.00045=4.5\\times10^{-4}$.\n\nThe power of 10 tells you the order of magnitude — handy for estimation before a calculator calculation.",
          },
          {
            heading: "Calculating in standard form",
            body: "Use the index laws on the powers of 10 and ordinary arithmetic on the $A$ values, then adjust so the result is again in standard form ($1\\le A<10$).\n\nFor example $(2.5\\times10^4)\\div(5\\times10^{-2})=\\frac{2.5}{5}\\times10^{4-(-2)}=0.5\\times10^6=5\\times10^5$. Note $0.5\\times10^6$ is not standard form — renormalise to $5\\times10^5$.",
          },
          {
            heading: "Standard form in context",
            body: "Science and geography use standard form constantly: the speed of light $3\\times10^8$ m/s, the distance to the Sun $1.5\\times10^{11}$ m, the mass of an electron $9.1\\times10^{-31}$ kg. When a question gives real-world quantities in standard form, convert back to ordinary numbers only if the context demands it.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$A\\times10^n$, where $1\\le A<10$ and $n\\in\\mathbb{Z}$" },
          { name: "Multiplication", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$, then renormalise." },
          { name: "Division", statement: "$\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
        ],
        workedExample: {
          problem: "Work out $\\frac{3.6\\times10^7}{1.2\\times10^4}$, giving your answer in standard form.",
          solution: "$\\frac{3.6}{1.2}\\times10^{7-4}=3\\times10^3=3000$. Already standard form.",
        },
      },
      questions: [
        {
          id: "ciem-u1-standard-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.00045$ in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5\\times10^{-3}$" },
              { id: "b", text: "$45\\times10^{-5}$" },
              { id: "c", text: "$0.45\\times10^{-3}$" },
              { id: "d", text: "$4.5\\times10^{-4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$; small numbers need a negative $n$." },
            ],
            steps: [
              { reasoning: "Move the decimal point 4 places right to get $A=4.5$; each right move makes $n$ one more negative.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4.5\\times10^{-4}$",
            commonErrors: ["Writing $4.5\\times10^{-3}$ by miscounting the decimal places.", "Choosing $45\\times10^{-5}$, which has $A=45\\ge10$ and is not standard form."],
          },
        },
        {
          id: "ciem-u1-standard-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $72\\,000\\,000$ in standard form. Enter the value of $A$ and the value of $n$ where the number is $A\\times10^n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "A", answer: 7.2 },
              { label: "n", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$; large numbers need a positive $n$." },
            ],
            steps: [
              { reasoning: "Move the decimal point 7 places left so $A=7.2$.", working: "72\\,000\\,000=7.2\\times10^7", marks: 1, markCode: "M" },
              { reasoning: "State $A$ and $n$ separately.", working: "A=7.2,\\ n=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.2\\times10^7$",
            commonErrors: ["Counting digits instead of decimal places and writing $10^8$.", "Writing $72\\times10^6$, which is not standard form."],
          },
        },
        {
          id: "ciem-u1-standard-form-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $(4.2\\times10^3)\\times(1.5\\times10^{-2})$, giving your answer in standard form. Enter the value of $A$ and the value of $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "A", answer: 6.3 },
              { label: "n", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$, then renormalise to $1\\le A<10$." },
            ],
            steps: [
              { reasoning: "Multiply the $A$ values and add the indices.", working: "4.2\\times1.5=6.3,\\quad 10^{3+(-2)}=10^1", marks: 1, markCode: "M" },
              { reasoning: "Combine.", working: "6.3\\times10^1", marks: 1, markCode: "M" },
              { reasoning: "$6.3\\times10^1=63$ is already standard form with $A=6.3$, $n=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.3\\times10^1$ (i.e. $63$)",
            commonErrors: ["Subtracting the indices instead of adding.", "Leaving the answer as $63$ without confirming it is standard form — $63=6.3\\times10^1$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Light travels at $3\\times10^8$ metres per second. The distance from the Sun to the Earth is approximately $1.5\\times10^{11}$ metres.",
          parts: [
            { label: "a", prompt: "Write $0.00082$ in standard form.", marks: 2 },
            { label: "b", prompt: "Write $45\\,600\\,000\\,000$ in standard form.", marks: 2 },
            { label: "c", prompt: "Calculate the time, in seconds, for light to travel from the Sun to the Earth, giving your answer in standard form.", marks: 3 },
            { label: "d", prompt: "Hence write down the approximate time in minutes.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) power of 10", answer: -4 },
              { label: "(b) power of 10", answer: 10 },
              { label: "(c) A", answer: 5, tolerance: 0.01 },
              { label: "(c) n", answer: 2 },
              { label: "(d) minutes", answer: 8.33, tolerance: 0.01, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$." },
              { kind: "principle", name: "Time = distance ÷ speed", statement: "Use consistent units before dividing." },
            ],
            steps: [
              { part: "a", reasoning: "Move the decimal point 4 places right; $n$ is negative.", working: "0.00082=8.2\\times10^{-4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the power of 10.", working: "n=-4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Move the decimal point 10 places left.", working: "45\\,600\\,000\\,000=4.56\\times10^{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the power of 10.", working: "n=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time = distance ÷ speed, both already in metres and m/s.", working: "t=\\frac{1.5\\times10^{11}}{3\\times10^8}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide coefficients and subtract indices.", working: "=0.5\\times10^{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Renormalise to standard form.", working: "=5\\times10^2\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert seconds to minutes by dividing by 60.", working: "500\\div60\\approx8.33\\text{ min}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the approximate value.", working: "\\approx8.3\\text{ minutes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8.2\\times10^{-4}$ (b) $4.56\\times10^{10}$ (c) $5\\times10^2$ s (d) $\\approx8.3$ minutes",
            commonErrors: ["In (c) multiplying distance by speed instead of dividing.", "Forgetting to renormalise $0.5\\times10^3$.", "In (d) dividing by 100 instead of 60."],
            examinerNote: "In (c) accept $500$ s; the standard-form requirement applies to the method shown.",
          },
        },
        {
          id: "ciem-u1-standard-form-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is not written in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9.1\\times10^{7}$" },
              { id: "b", text: "$56\\times10^{4}$" },
              { id: "c", text: "$1.0\\times10^{-3}$" },
              { id: "d", text: "$2.8\\times10^{-2}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Standard form requires $1\\le A<10$; only $56\\times10^4$ has $A\\ge10$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $56\\times10^{4}$",
            commonErrors: ["Thinking $1.0\\times10^{-3}$ is invalid — $A=1.0$ satisfies $1\\le A<10$.", "Missing that $56\\times10^4$ can be renormalised to $5.6\\times10^5$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $(6\\times10^5)\\div(2\\times10^2)$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\times10^2$" },
              { id: "b", text: "$4\\times10^3$" },
              { id: "c", text: "$3\\times10^3$" },
              { id: "d", text: "$3\\times10^7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$ and $\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
            ],
            steps: [
              { reasoning: "Divide the coefficients and subtract the indices.", working: "\\frac{6}{2}\\times10^{5-2}=3\\times10^3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $3\\times10^3$",
            commonErrors: ["Adding the indices instead of subtracting.", "Dividing $6$ by $2$ incorrectly to get $4\\times10^3$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A virus particle has mass $4\\times10^{-9}$ g and a bacterium has mass $2\\times10^{-6}$ g. How many times heavier is the bacterium than the virus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8000" },
              { id: "b", text: "50" },
              { id: "c", text: "2000" },
              { id: "d", text: "500" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$ and $\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
            ],
            steps: [
              { reasoning: "Divide the masses and renormalise the power of 10.", working: "\\frac{2\\times10^{-6}}{4\\times10^{-9}}=0.5\\times10^{3}=5\\times10^{2}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $500$",
            commonErrors: ["Stopping at $0.5\\times10^3$ without renormalising, giving the wrong choice.", "Subtracting the powers of 10 incorrectly."],
          },
        },
        {
          id: "ciem-u1-standard-form-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.000062$ in standard form. Enter the value of $A$ and the value of $n$ where the number is $A\\times10^n$.",
          response: { type: "numeric", parts: [{ label: "A", answer: 6.2 }, { label: "n", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Move the decimal point 5 places right to obtain $A=6.2$; small numbers need a negative $n$.", working: "0.000062=6.2\\times10^{-5}", marks: 1, markCode: "M" },
              { reasoning: "State $A$ and $n$ separately.", working: "A=6.2,\\ n=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.2\\times10^{-5}$",
            commonErrors: ["Writing $6.2\\times10^{-4}$ by miscounting the decimal places."],
          },
        },
        {
          id: "ciem-u1-standard-form-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $(8\\times10^{-3})\\times(5\\times10^{4})$, giving your answer in standard form. Enter the value of $A$ and the value of $n$.",
          response: { type: "numeric", parts: [{ label: "A", answer: 4 }, { label: "n", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$ and $\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
            ],
            steps: [
              { reasoning: "Multiply the coefficients and add the indices.", working: "8\\times5=40,\\quad 10^{-3+4}=10^1", marks: 1, markCode: "M" },
              { reasoning: "Combine into a single power of 10.", working: "40\\times10^1", marks: 1, markCode: "M" },
              { reasoning: "Renormalise: $40\\times10^1=4\\times10^2$, so $A=4$, $n=2$.", working: "A=4,\\ n=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^2$ (i.e. $400$)",
            commonErrors: ["Leaving the answer as $40\\times10^1$, which is not standard form.", "Subtracting the indices instead of adding."],
          },
        },
        {
          id: "ciem-u1-standard-form-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $(1.5\\times10^8)\\div(6\\times10^{-2})$, giving your answer in standard form. Enter the value of $A$ and the value of $n$.",
          response: { type: "numeric", parts: [{ label: "A", answer: 2.5 }, { label: "n", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$ and $\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
            ],
            steps: [
              { reasoning: "Divide the coefficients and subtract the indices.", working: "\\frac{1.5}{6}\\times10^{8-(-2)}=0.25\\times10^{10}", marks: 1, markCode: "M" },
              { reasoning: "Renormalise $0.25\\times10^{10}$ to standard form.", working: "0.25\\times10^{10}=2.5\\times10^9", marks: 1, markCode: "M" },
              { reasoning: "State $A$ and $n$.", working: "A=2.5,\\ n=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5\\times10^9$",
            commonErrors: ["Computing $8-(-2)$ as $6$ instead of $10$.", "Forgetting to renormalise $0.25\\times10^{10}$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Proxima Centauri is approximately $4.0\\times10^{16}$ m from Earth. Light travels at $3\\times10^8$ m/s.",
          parts: [
            { label: "a", prompt: "Write $0.00015$ in standard form.", marks: 2 },
            { label: "b", prompt: "Write $72\\,000\\,000\\,000$ in standard form.", marks: 2 },
            { label: "c", prompt: "Calculate the time, in seconds, for light to travel from Earth to Proxima Centauri, giving your answer in standard form.", marks: 3 },
            { label: "d", prompt: "Hence write down the approximate time in years, taking $1$ year $\\approx 3.2\\times10^7$ s.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) power of 10", answer: -4 },
              { label: "(b) power of 10", answer: 11 },
              { label: "(c) A", answer: 1.33, tolerance: 0.01 },
              { label: "(c) n", answer: 8 },
              { label: "(d) years", answer: 4.17, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$." },
              { kind: "principle", name: "Time = distance ÷ speed", statement: "Use consistent units; both quantities are in metres and m/s." },
            ],
            steps: [
              { part: "a", reasoning: "Move the decimal point 4 places right; $n$ is negative.", working: "0.00015=1.5\\times10^{-4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the power of 10.", working: "n=-4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Move the decimal point 11 places left.", working: "72\\,000\\,000\\,000=7.2\\times10^{11}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the power of 10.", working: "n=11", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time = distance ÷ speed.", working: "t=\\frac{4.0\\times10^{16}}{3\\times10^8}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide coefficients and subtract indices.", working: "=1.33\\times10^{8}\\text{ s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the standard form with $A$ and $n$.", working: "A=1.33,\\ n=8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert seconds to years using $1$ year $\\approx3.2\\times10^7$ s.", working: "\\frac{1.33\\times10^8}{3.2\\times10^7}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide and state the approximate value.", working: "\\approx4.17\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.5\\times10^{-4}$ (b) $7.2\\times10^{11}$ (c) $1.33\\times10^8$ s (d) $\\approx4.17$ years",
            commonErrors: ["In (c) multiplying distance by speed instead of dividing.", "In (d) dividing by $60$ instead of the number of seconds in a year."],
          },
        },
        {
          id: "ciem-u1-standard-form-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $45\\times10^6$ is not written in standard form, and rewrite it correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "In standard form $A$ must satisfy $1\\le A<10$; here $A=45$, which is too large.", marks: 1, markCode: "M" },
              { reasoning: "Move the decimal point one place to the left and increase the power of 10 by 1.", working: "45\\times10^6=4.5\\times10^7", marks: 1, markCode: "M" },
              { reasoning: "State the corrected expression.", working: "4.5\\times10^7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45\\times10^6=4.5\\times10^7$",
            commonErrors: ["Saying it is wrong without giving the corrected standard form."],
          },
        },
        {
          id: "ciem-u1-standard-form-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Let $x=2.4\\times10^3$. Find $5x$ and $\\frac{x}{8}$, giving each answer in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$ and $\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
            ],
            steps: [
              { reasoning: "Multiply the coefficient by 5, keeping the power of 10.", working: "5x=(2.4\\times10^3)\\times5=12\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Renormalise $12\\times10^3$.", working: "12\\times10^3=1.2\\times10^4", marks: 1, markCode: "A" },
              { reasoning: "Divide the coefficient by 8.", working: "\\frac{x}{8}=\\frac{2.4}{8}\\times10^3=0.3\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Renormalise $0.3\\times10^3$.", working: "0.3\\times10^3=3\\times10^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5x=1.2\\times10^4$, $\\frac{x}{8}=3\\times10^2$",
            commonErrors: ["Writing $5x=12\\times10^3$ without renormalising.", "Dividing $2.4$ by $8$ as $0.03$ instead of $0.3$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Work out $(6.2\\times10^4)\\times(4.8\\times10^2)$ in two ways.",
          parts: [
            { label: "a", prompt: "Round each number to 1 significant figure and use your rounded values to estimate the product.", marks: 2 },
            { label: "b", prompt: "Calculate the exact product, giving your answer in standard form.", marks: 2 },
            { label: "c", prompt: "Find the percentage error of your estimate, giving your answer to 2 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$, then renormalise." },
            ],
            steps: [
              { part: "a", reasoning: "Round $6.2$ to $6$ and $4.8$ to $5$ (1 s.f.), then multiply the rounded values.", working: "6\\times10^4\\times5\\times10^2=30\\times10^6=3\\times10^7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the estimate.", working: "\\approx3\\times10^7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply the exact coefficients and add the indices.", working: "6.2\\times4.8=29.76,\\quad 10^{4+2}=10^6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Renormalise to standard form.", working: "29.76\\times10^6=2.976\\times10^7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Percentage error $=\\frac{|\\text{estimate}-\\text{exact}|}{\\text{exact}}\\times100=\\frac{0.024\\times10^7}{2.976\\times10^7}\\times100$.", working: "=0.81\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the percentage error to 2 s.f.", working: "0.81\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) estimate $3\\times10^7$ (b) $2.976\\times10^7$ (c) $0.81\\%$",
            commonErrors: ["Rounding $4.8$ to $4$ instead of $5$ at 1 s.f.", "Dividing by the estimate instead of the exact value when finding percentage error."],
          },
        },
        {
          id: "ciem-u1-standard-form-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these values is the largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.01\\times10^4$" },
              { id: "b", text: "$9.5\\times10^3$" },
              { id: "c", text: "$8.9\\times10^3$" },
              { id: "d", text: "$2\\times10^4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "Compare the powers of 10 first: $2\\times10^4$ has the largest order of magnitude.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $2\\times10^4$",
            commonErrors: ["Comparing only the coefficients $A$ and ignoring the powers of 10."],
          },
        },
        {
          id: "ciem-u1-standard-form-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A number is written as $7.5\\times10^{-3}$. What is its value as an ordinary number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7500" },
              { id: "b", text: "0.075" },
              { id: "c", text: "0.0075" },
              { id: "d", text: "0.00075" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$ and $n$ an integer." },
            ],
            steps: [
              { reasoning: "A negative power of 10 means the decimal point moves left: $7.5\\times10^{-3}=0.0075$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.0075$",
            commonErrors: ["Moving the decimal point only 2 places to get $0.075$.", "Moving it 4 places to get $0.00075$."],
          },
        },
      ],
    },
    {
      id: "ciem-u1-bounds",
      title: "Upper and lower bounds",
      skill: "Find the upper and lower bounds of a rounded measurement and of calculations built from rounded values.",
      lesson: {
        sections: [
          {
            heading: "Bounds of a single measurement",
            body: "A measurement is rounded to a stated degree of accuracy. The true value lies within half a unit of that accuracy on either side.\n\n| Measurement | Lower bound | Upper bound |\n|---|---|---|\n| $2.4$ (1 d.p.) | $2.35$ | $2.45$ |\n| $84$ m (nearest m) | $83.5$ m | $84.5$ m |\n| $0.03$ (2 d.p.) | $0.025$ | $0.035$ |\n\nThe bound is **inclusive**: a value of exactly $2.45$ rounds to $2.4$ under round-half-up conventions used in this course, so both bounds are possible true values.",
          },
          {
            heading: "Bounds of a calculation",
            body: "For a calculation, combine the bounds that give the extreme results:\n\n- **Addition/subtraction and products of positives**: maximum uses upper bounds, minimum uses lower bounds.\n- **Division of positives**: maximum = upper ÷ lower; minimum = lower ÷ upper.\n\nFor a sum like $a+b$, the greatest possible value uses the upper bound of each; the least possible uses the lower bound of each.",
          },
          {
            heading: "Why bounds matter",
            body: "Engineering tolerances, medicine doses and scientific measurement all depend on knowing the worst case. If a pill contains between $24.5$ mg and $25.5$ mg of active ingredient and a patient takes 2 pills, the dose could be as low as $49$ mg or as high as $51$ mg — the bounds of the calculation.",
          },
        ],
        keyFormulas: [
          { name: "Single measurement", statement: "Bounds = value $\\pm$ half the degree of accuracy." },
          { name: "Max of product", statement: "upper $\\times$ upper (for positive quantities)" },
          { name: "Min of product", statement: "lower $\\times$ lower (for positive quantities)" },
          { name: "Max of quotient", statement: "upper $\\div$ lower" },
        ],
        workedExample: {
          problem: "A length is recorded as $3.7$ cm correct to 1 decimal place. Write down its lower and upper bounds, and find the greatest possible value of $3.7 \\times 2.4$ where $2.4$ is also correct to 1 d.p.",
          solution: "Bounds of $3.7$: $3.65$ and $3.75$. Bounds of $2.4$: $2.35$ and $2.45$. Greatest product $=3.75\\times2.45=9.1875$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-bounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A length is measured as $2.4$ m correct to 1 decimal place. What is the upper bound of the measurement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.5$ m" },
              { id: "b", text: "$2.44$ m" },
              { id: "c", text: "$2.45$ m" },
              { id: "d", text: "$2.04$ m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Upper bound", statement: "Value + half the degree of accuracy; for 1 d.p. that is $+0.05$." },
            ],
            steps: [
              { reasoning: "Add half of $0.1$ to $2.4$.", working: "2.4+0.05=2.45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2.45$ m",
            commonErrors: ["Adding the full $0.1$ to get $2.5$.", "Subtracting $0.05$ to get the lower bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mass is recorded as $3.7$ kg correct to 1 decimal place. Enter the lower bound and the upper bound of the mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower bound", answer: 3.65, tolerance: 0.001 },
              { label: "Upper bound", answer: 3.75, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "Value $\\pm$ half the degree of accuracy; 1 d.p. means $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "Subtract and add $0.05$.", working: "3.7-0.05=3.65,\\quad 3.7+0.05=3.75", marks: 1, markCode: "M" },
              { reasoning: "State both bounds with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower bound $3.65$ kg, upper bound $3.75$ kg",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$.", "Swapping the bounds."],
          },
        },
        {
          id: "ciem-u1-bounds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sides of a rectangle are $12.6$ cm and $3.4$ cm, each measured correct to 1 decimal place. Find the greatest possible value of the area of the rectangle.",
          response: { type: "numeric", parts: [{ label: "Greatest area", answer: 43.6425, tolerance: 0.01, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum product uses upper bound $\\times$ upper bound." },
            ],
            steps: [
              { reasoning: "Find the upper bounds of both sides.", working: "12.6\\to12.65,\\quad 3.4\\to3.45", marks: 1, markCode: "M" },
              { reasoning: "Multiply the upper bounds.", working: "12.65\\times3.45=43.6425", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "43.6425\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$43.6425$ cm$^2$ (accept $43.64$)",
            commonErrors: ["Multiplying the recorded values $12.6\\times3.4$ instead of the bounds.", "Using one upper and one lower bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular field has length $84$ m and width $56$ m. Each measurement is correct to the nearest metre.",
          parts: [
            { label: "a", prompt: "Write down the lower and upper bounds of the length.", marks: 2 },
            { label: "b", prompt: "Write down the lower and upper bounds of the width.", marks: 2 },
            { label: "c", prompt: "Find the greatest possible perimeter of the field.", marks: 3 },
            { label: "d", prompt: "Find the least possible area of the field.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) lower", answer: 83.5, unit: "m" },
              { label: "(a) upper", answer: 84.5, unit: "m" },
              { label: "(b) lower", answer: 55.5, unit: "m" },
              { label: "(b) upper", answer: 56.5, unit: "m" },
              { label: "(c) greatest perimeter", answer: 282, unit: "m" },
              { label: "(d) least area", answer: 4634.25, tolerance: 0.01, unit: "m^2" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "Nearest metre means $\\pm0.5$ m." },
              { kind: "principle", name: "Bounds of perimeter/area", statement: "Greatest perimeter uses upper bounds; least area uses lower bounds (positive lengths)." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract and add half a metre.", working: "84-0.5=83.5,\\quad 84+0.5=84.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both bounds.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract and add half a metre for the width.", working: "56-0.5=55.5,\\quad 56+0.5=56.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both bounds.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greatest perimeter uses upper bounds of both sides.", working: "P=2(84.5+56.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add inside the bracket.", working: "=2\\times141", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by 2.", working: "=282\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Least area uses lower bounds of both sides.", working: "A=83.5\\times55.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply.", working: "=4634.25\\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $83.5$ m and $84.5$ m (b) $55.5$ m and $56.5$ m (c) $282$ m (d) $4634.25$ m$^2$",
            commonErrors: ["Using $\\pm1$ m instead of $\\pm0.5$ m for nearest-metre accuracy.", "Using upper bounds for the least area.", "Forgetting the factor 2 in the perimeter."],
            examinerNote: "Accept $4634$ m$^2$ if an appropriate rounding is stated; exact value preferred.",
          },
        },
        {
          id: "ciem-u1-bounds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mass is recorded as $5.6$ kg correct to 1 decimal place. What is the lower bound of the mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5.65 kg" },
              { id: "b", text: "5.5 kg" },
              { id: "c", text: "5.55 kg" },
              { id: "d", text: "5.51 kg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "Subtract half of $0.1$ from $5.6$.", working: "5.6-0.05=5.55", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $5.55$ kg",
            commonErrors: ["Subtracting the full $0.1$ to get $5.5$.", "Adding $0.05$ to get the upper bound $5.65$."],
          },
        },
        {
          id: "ciem-u1-bounds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A distance is recorded as $80$ m correct to the nearest $10$ m. What is the upper bound of the distance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "80 m" },
              { id: "b", text: "75 m" },
              { id: "c", text: "85 m" },
              { id: "d", text: "90 m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "Nearest $10$ m means $\\pm5$ m; add $5$ to $80$.", working: "80+5=85", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $85$ m",
            commonErrors: ["Using $\\pm10$ m instead of $\\pm5$ m.", "Thinking the recorded value itself is the upper bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The value $0.046$ is correct to 2 significant figures. Which interval contains the true value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0455 \\le v < 0.0465$" },
              { id: "b", text: "$0.045 \\le v < 0.047$" },
              { id: "c", text: "$0.046 \\le v < 0.047$" },
              { id: "d", text: "$0.04 \\le v < 0.05$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "2 s.f. on $0.046$ means precision $\\pm0.0005$, giving $0.0455$ and $0.0465$.", working: "0.046\\pm0.0005", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $0.0455 \\le v < 0.0465$",
            commonErrors: ["Using $\\pm0.005$ (3 d.p. thinking) to get the wider interval (a).", "Confusing significant figures with decimal places."],
          },
        },
        {
          id: "ciem-u1-bounds-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mass is recorded as $5.5$ kg correct to 1 decimal place. Enter the lower bound and the upper bound of the mass.",
          response: { type: "numeric", parts: [{ label: "Lower bound", answer: 5.45, unit: "kg" }, { label: "Upper bound", answer: 5.55, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "Subtract and add half of $0.1$.", working: "5.5-0.05=5.45,\\quad 5.5+0.05=5.55", marks: 1, markCode: "M" },
              { reasoning: "State both bounds with units.", working: "5.45\\text{ kg and }5.55\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower bound $5.45$ kg, upper bound $5.55$ kg",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$.", "Swapping the bounds."],
          },
        },
        {
          id: "ciem-u1-bounds-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two lengths are $7.3$ m and $2.8$ m, each measured correct to 1 decimal place. (a) Find the least possible value of their sum. (b) Find the greatest possible value of the difference between them.",
          response: { type: "numeric", parts: [{ label: "(a) least sum", answer: 10, unit: "m" }, { label: "(b) greatest difference", answer: 4.6, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum uses upper $\\times$ upper and the minimum uses lower $\\times$ lower." },
            ],
            steps: [
              { reasoning: "Find the bounds of both lengths.", working: "7.3\\to7.25,7.35;\\quad 2.8\\to2.75,2.85", marks: 1, markCode: "M" },
              { reasoning: "Least sum uses both lower bounds.", working: "7.25+2.75=10", marks: 1, markCode: "M" },
              { reasoning: "Greatest difference uses the larger upper bound minus the smaller lower bound.", working: "7.35-2.75=4.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10$ m (b) $4.6$ m",
            commonErrors: ["Using upper bounds for the least sum.", "Computing $7.35-2.85=4.5$ for the greatest difference — the smaller length's lower bound must be used."],
          },
        },
        {
          id: "ciem-u1-bounds-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle has sides $15.6$ cm and $8.4$ cm, each measured correct to 1 decimal place. Find the least possible area and the greatest possible perimeter of the rectangle.",
          response: { type: "numeric", parts: [{ label: "Least area", answer: 129.84, tolerance: 0.01, unit: "cm^2" }, { label: "Greatest perimeter", answer: 48.2, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum uses upper $\\times$ upper and the minimum uses lower $\\times$ lower." },
              { kind: "principle", name: "Bounds of a perimeter", statement: "Greatest perimeter uses the upper bounds of both sides, doubled." },
            ],
            steps: [
              { reasoning: "Find the relevant bounds of both sides.", working: "15.6\\to15.55,15.65;\\quad 8.4\\to8.35,8.45", marks: 1, markCode: "M" },
              { reasoning: "Least area uses lower $\\times$ lower.", working: "15.55\\times8.35=129.8425\\approx129.84\\text{ cm}^2", marks: 1, markCode: "M" },
              { reasoning: "Greatest perimeter uses upper bounds: $2(15.65+8.45)$.", working: "=2\\times24.10=48.2\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "State both answers with units.", working: "129.84\\text{ cm}^2\\text{ and }48.2\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Least area $\\approx129.84$ cm$^2$, greatest perimeter $48.2$ cm",
            commonErrors: ["Using the recorded values $15.6\\times8.4$ for the least area.", "Forgetting to double the sum for the perimeter."],
          },
        },
        {
          id: "ciem-u1-bounds-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular garden has length $12.4$ m and width $7.6$ m. Each measurement is correct to 1 decimal place.",
          parts: [
            { label: "a", prompt: "Write down the lower and upper bounds of the length.", marks: 2 },
            { label: "b", prompt: "Write down the lower and upper bounds of the width.", marks: 2 },
            { label: "c", prompt: "Find the greatest possible area of the garden.", marks: 3 },
            { label: "d", prompt: "Find the least possible perimeter of the garden.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) lower", answer: 12.35, unit: "m" },
              { label: "(a) upper", answer: 12.45, unit: "m" },
              { label: "(b) lower", answer: 7.55, unit: "m" },
              { label: "(b) upper", answer: 7.65, unit: "m" },
              { label: "(c) greatest area", answer: 95.24, tolerance: 0.01, unit: "m^2" },
              { label: "(d) least perimeter", answer: 39.8, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum uses upper $\\times$ upper and the minimum uses lower $\\times$ lower." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract and add $0.05$ for the length.", working: "12.4-0.05=12.35,\\quad 12.4+0.05=12.45", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both bounds of the length.", working: "12.35\\text{ m and }12.45\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract and add $0.05$ for the width.", working: "7.6-0.05=7.55,\\quad 7.6+0.05=7.65", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both bounds of the width.", working: "7.55\\text{ m and }7.65\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greatest area uses upper $\\times$ upper.", working: "12.45\\times7.65=95.2425", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round and state the area.", working: "\\approx95.24\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Confirm the value is the greatest possible area.", working: "95.24\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Least perimeter uses lower bounds: $2(12.35+7.55)$.", working: "=2\\times19.9=39.8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the perimeter.", working: "39.8\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12.35$ m and $12.45$ m (b) $7.55$ m and $7.65$ m (c) $95.24$ m$^2$ (d) $39.8$ m",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$ for 1 d.p. accuracy.", "Using lower bounds for the greatest area or upper bounds for the least perimeter."],
          },
        },
        {
          id: "ciem-u1-bounds-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the upper bound of a measurement is included in the range of possible true values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "A value that rounds to the stated measurement can be up to half a unit above it.", marks: 1, markCode: "M" },
              { reasoning: "Under round-half-up, a true value exactly equal to the upper bound still rounds to the stated value.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the upper bound itself is a possible true value, so the interval includes it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The upper bound is attainable, so it is included in the possible range.",
            commonErrors: ["Saying bounds are 'excluded' — both bounds are possible true values in this convention."],
          },
        },
        {
          id: "ciem-u1-bounds-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A journey is $240$ km, measured correct to the nearest $10$ km, driven at an average speed of $60$ km/h, correct to the nearest $10$ km/h. Find the greatest and least possible times for the journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a quotient", statement: "For positive quantities, the maximum uses upper $\\div$ lower and the minimum uses lower $\\div$ upper." },
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "Find the bounds of distance and speed.", working: "240\\to235,245\\text{ km};\\quad 60\\to55,65\\text{ km/h}", marks: 1, markCode: "M" },
              { reasoning: "Greatest time = greatest distance $\\div$ least speed.", working: "t_{\\max}=\\frac{245}{55}\\approx4.45\\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "Least time = least distance $\\div$ greatest speed.", working: "t_{\\min}=\\frac{235}{65}\\approx3.62\\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "State both times.", working: "4.45\\text{ h and }3.62\\text{ h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Greatest $\\approx4.45$ h, least $\\approx3.62$ h",
            commonErrors: ["Using upper $\\div$ upper for the greatest time — the smallest speed must be used.", "Using $\\pm1$ km instead of $\\pm5$ km for nearest-10 accuracy."],
          },
        },
        {
          id: "ciem-u1-bounds-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two measurements are $a=10.4$ and $b=6.2$, each correct to 1 decimal place, with $a>b$. (a) Write down the bounds of $a$ and of $b$. (b) Find the greatest possible value of $a+b$ and the least possible value of $a-b$. (c) Explain why the greatest possible value of $ab$ uses the upper bounds of both measurements.",
          parts: [
            { label: "a", prompt: "Write down the bounds of $a$ and of $b$.", marks: 2 },
            { label: "b", prompt: "Find the greatest possible value of $a+b$ and the least possible value of $a-b$.", marks: 2 },
            { label: "c", prompt: "Explain why the greatest possible value of $ab$ uses the upper bounds of both measurements.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum uses upper $\\times$ upper and the minimum uses lower $\\times$ lower." },
            ],
            steps: [
              { part: "a", reasoning: "Write the bounds of each measurement.", working: "a\\to10.35,10.45;\\quad b\\to6.15,6.25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both pairs of bounds.", working: "10.35\\le a\\le10.45,\\ 6.15\\le b\\le6.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Greatest $a+b$ uses both upper bounds.", working: "10.45+6.25=16.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Least $a-b$ uses lower $a$ and upper $b$.", working: "10.35-6.25=4.1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For positive $a$ and $b$, increasing either factor increases the product, so the maximum product occurs at the largest possible values of both.", working: "a_{\\max}\\times b_{\\max}=10.45\\times6.25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $10.35$–$10.45$ and $6.15$–$6.25$ (b) $16.7$ and $4.1$ (c) product increases with each factor",
            commonErrors: ["Using upper bounds for the least $a-b$.", "In (c) claiming mixed bounds give the greatest product."],
          },
        },
        {
          id: "ciem-u1-bounds-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The value $0.038$ is correct to 2 decimal places. Which interval contains the true value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0375 \\le v < 0.0385$" },
              { id: "b", text: "$0.038 \\le v < 0.039$" },
              { id: "c", text: "$0.033 \\le v < 0.043$" },
              { id: "d", text: "$0.03 \\le v < 0.05$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "2 d.p. means $\\pm0.005$: $0.038-0.005=0.033$ and $0.038+0.005=0.043$.", working: "0.038\\pm0.005=[0.033,\\,0.043)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.033 \\le v < 0.043$",
            commonErrors: ["Using $\\pm0.05$ (1 d.p. thinking) to get interval (d).", "Thinking the recorded value itself is a bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A value $x$ satisfies $12.25 \\le x < 12.35$. To what accuracy was $x$ recorded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "nearest $0.01$" },
              { id: "b", text: "nearest $0.001$" },
              { id: "c", text: "nearest $1$" },
              { id: "d", text: "nearest $0.1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "A value $\\pm$ half the degree of accuracy; both bounds are possible true values." },
            ],
            steps: [
              { reasoning: "The interval width is $0.1$, so the degree of accuracy is $0.1$ — i.e. 1 decimal place.", working: "12.35-12.25=0.10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** nearest $0.1$",
            commonErrors: ["Answering 'nearest $0.01$' by looking at the bounds' decimal places rather than the interval width."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u1-standard-form-bounds-notes",
      title: "Standard form and bounds — revision notes",
      summary: "Converting to and from standard form, calculating with it, and finding upper and lower bounds of measurements.",
      sections: [
        {
          heading: "Standard form rules",
          body: "Write every number as $A\\times10^n$ with **$1\\le A<10$** — this is the rule examiners check first.\n\n- Large number: decimal point moves **left**, $n$ **positive**. $72\\,000\\,000=7.2\\times10^7$.\n- Small number: decimal point moves **right**, $n$ **negative**. $0.00045=4.5\\times10^{-4}$.\n\nIf your $A$ comes out as $0.5$ or $45$, you have not finished — renormalise: $0.5\\times10^6=5\\times10^5$.",
        },
        {
          heading: "Calculating in standard form",
          body: "Treat it as two separate calculations: ordinary arithmetic on the $A$ values, index laws on the powers of 10.\n\n**Worked example.** $(4.2\\times10^3)\\times(1.5\\times10^{-2})$\n\n$=4.2\\times1.5\\times10^{3-2}=6.3\\times10^1=63$.\n\n**Worked example.** $\\frac{1.5\\times10^{11}}{3\\times10^8}$ (Sun–Earth distance ÷ light speed)\n\n$=\\frac{1.5}{3}\\times10^{11-8}=0.5\\times10^3=5\\times10^2$ s.\n\nNote the renormalisation step both times — $0.5\\times10^3$ is not standard form.",
        },
        {
          heading: "Upper and lower bounds",
          body: "A measurement rounded to a degree of accuracy $d$ has bounds value $\\pm\\frac{d}{2}$.\n\n| Recorded as | $d$ | Lower bound | Upper bound |\n|---|---|---|---|\n| $2.4$ (1 d.p.) | $0.1$ | $2.35$ | $2.45$ |\n| $84$ m (nearest m) | $1$ | $83.5$ | $84.5$ |\n| $0.03$ (2 d.p.) | $0.01$ | $0.025$ | $0.035$ |\n\nThe most common error is using $\\pm d$ instead of $\\pm\\frac{d}{2}$.",
        },
        {
          heading: "Bounds of calculations",
          body: "Choose bounds that produce the extreme result:\n\n- **Greatest** product/area/perimeter: upper $\\times$ upper (for positive quantities).\n- **Least** product/area: lower $\\times$ lower.\n- **Greatest** quotient: upper $\\div$ lower. **Least** quotient: lower $\\div$ upper.\n- **Sum/difference**: greatest uses the bound in the direction of the operation.\n\n**Worked example.** Sides $12.6$ cm and $3.4$ cm, each to 1 d.p. Greatest area:\n\nUpper bounds: $12.65$ and $3.45$, so max area $=12.65\\times3.45=43.6425$ cm$^2$.",
        },
        {
          heading: "Exam technique",
          body: "- Always state the degree of accuracy before finding bounds — 'correct to 1 d.p.' means $\\pm0.05$, not $\\pm0.1$.\n- In standard-form calculations, show the index subtraction/addition explicitly; method marks are awarded for it.\n- Bounds questions almost always want **both** bounds stated and units included.",
        },
      ],
    },
  ],
};
