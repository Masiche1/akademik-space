import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypms4-u1-lesson-1-3",
  code: "1-3",
  title: "Standard Form, Proportion and Rates",
  goal: "I CAN calculate with numbers in standard form, solve direct and inverse proportion problems, and work with compound measures and unit conversions.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Standard form", definition: "A number written as $a\\times10^n$ where $1\\le a<10$ and $n$ is an integer, e.g. $6.02\\times10^{23}$." },
    { term: "Direct proportion", definition: "When one quantity increases at the same rate as another: $y=kx$." },
    { term: "Inverse proportion", definition: "When one quantity decreases as another increases: $y=\\frac{k}{x}$." },
    { term: "Constant of proportionality", definition: "The value $k$ that links the two quantities in a proportion." },
    { term: "Compound measure", definition: "A quantity derived from two or more measures, such as speed (distance ÷ time) or density (mass ÷ volume)." },
    { term: "Unit rate", definition: "A rate expressed per one unit, e.g. cost per kilogram or speed in m/s." },
  ],
  concepts: [
    {
      id: "mypms4-u1-stdform",
      title: "Calculations in standard form",
      skill: "Multiply, divide and add numbers in standard form, and solve real-life problems with very large or small quantities.",
      lesson: {
        sections: [
          {
            heading: "Standard form rules",
            body: "A number in standard form is $a\\times10^n$ with $1\\le a<10$. To multiply, multiply the $a$ values and add the powers of 10: $(2\\times10^3)(3\\times10^4)=6\\times10^7$. To divide, divide the $a$ values and subtract the powers: $\\frac{8\\times10^5}{2\\times10^2}=4\\times10^3$.",
          },
          {
            heading: "Adding and subtracting",
            body: "Rewrite both numbers with the **same power of 10** before adding or subtracting: $3\\times10^4+5\\times10^3=30\\times10^3+5\\times10^3=35\\times10^3=3.5\\times10^4$. If the result has $a\\ge10$, renormalise.",
          },
          {
            heading: "Real-life contexts",
            body: "Standard form is used for very large or small quantities: the distance to the Sun ($1.5\\times10^{11}$ m), the size of a virus ($1\\times10^{-7}$ m), or Avogadro's number ($6.02\\times10^{23}$). Always check that answers are in standard form with $1\\le a<10$.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "$(a\\times10^m)(b\\times10^n)=ab\\times10^{m+n}$" },
          { name: "Divide", statement: "$\\frac{a\\times10^m}{b\\times10^n}=\\frac{a}{b}\\times10^{m-n}$" },
        ],
        workedExample: {
          problem: "Calculate $\\frac{(4.5\\times10^6)(2\\times10^{-2})}{3\\times10^2}$, giving your answer in standard form.",
          solution: "Numerator: $4.5\\times2\\times10^{6-2}=9\\times10^4$. Divide by $3\\times10^2$: $\\frac{9}{3}\\times10^{4-2}=3\\times10^2$.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-sf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 0.000 456 in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.56\\times10^{-4}$" },
              { id: "b", text: "$4.56\\times10^{-3}$" },
              { id: "c", text: "$45.6\\times10^{-5}$" },
              { id: "d", text: "$4.56\\times10^{4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$; small numbers have negative $n$." },
            ],
            steps: [
              { reasoning: "0.000456 = $4.56\\times10^{-4}$ (4 decimal places moved).", working: "4.56\\times10^{-4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4.56\\times10^{-4}$",
            commonErrors: ["Writing $4.56\\times10^{-3}$ — miscounting decimal places."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-sf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $(3\\times10^4)(5\\times10^{-2})$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.5\\times10^3$" },
              { id: "b", text: "$1.5\\times10^2$" },
              { id: "c", text: "$15\\times10^2$" },
              { id: "d", text: "$1.5\\times10^6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form multiply", statement: "Multiply $a$ values, add powers of 10." },
            ],
            steps: [
              { reasoning: "$3\\times5=15$; $10^{4}\\times10^{-2}=10^{2}$, so $15\\times10^2=1.5\\times10^3$.", working: "15\\times10^2=1.5\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Renormalise so $1\\le a<10$.", working: "1.5\\times10^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5\\times10^3$",
            commonErrors: ["Leaving the answer as $15\\times10^2$ — not proper standard form."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate $\\frac{8\\times10^7}{4\\times10^3}$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times10^4$" },
              { id: "b", text: "$2\\times10^{10}$" },
              { id: "c", text: "$4\\times10^4$" },
              { id: "d", text: "$2\\times10^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form divide", statement: "Divide $a$ values, subtract powers of 10." },
            ],
            steps: [
              { reasoning: "$\\frac{8}{4}=2$; $10^{7-3}=10^4$.", working: "2\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "Check $1\\le a<10$: already correct.", working: "2\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\times10^4$",
            commonErrors: ["Adding powers instead of subtracting."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Light travels at $3\\times10^8$ m/s. The distance to the nearest star, Proxima Centauri, is about $4.0\\times10^{16}$ m.",
          parts: [
            { label: "a", prompt: "Calculate the time, in seconds, for light to travel from Proxima Centauri to Earth.", marks: 3 },
            { label: "b", prompt: "Convert your answer to years (1 year $\\approx3.16\\times10^7$ s).", marks: 3 },
            { label: "c", prompt: "Explain why standard form is useful for this calculation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$t=\\frac{d}{v}$" },
            ],
            steps: [
              { part: "a", reasoning: "$t=\\frac{4.0\\times10^{16}}{3\\times10^8}$.", working: "t=\\frac{4.0\\times10^{16}}{3\\times10^8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$=\\frac{4.0}{3}\\times10^{8}\\approx1.33\\times10^8$ s.", working: "1.33\\times10^8\\text{ s}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the time in seconds.", working: "1.33\\times10^8\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t=\\frac{1.33\\times10^8}{3.16\\times10^7}=\\frac{1.33}{3.16}\\times10^{1}\\approx4.2$ years.", working: "4.2\\text{ years}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide powers of 10 correctly.", working: "10^{8-7}=10^1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer in years.", working: "4.2\\text{ years}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Numbers are too large/small for ordinary notation.", working: "\\text{very large/small numbers}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Standard form keeps calculations manageable.", working: "\\text{manageable calculations}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.33\\times10^8$ s (b) $4.2$ years (c) standard form handles very large/small numbers cleanly",
            commonErrors: ["Forgetting to convert seconds to years in (b)."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), R1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u1-sf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 52 000 in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5.2\\times10^3$" },
              { id: "b", text: "$5.2\\times10^4$" },
              { id: "c", text: "$52\\times10^3$" },
              { id: "d", text: "$0.52\\times10^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$; count the digits after the first." },
            ],
            steps: [
              { reasoning: "$52000=5.2\\times10^4$ (4 zeros).", working: "5.2\\times10^4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5.2\\times10^4$",
            commonErrors: ["Writing $5.2\\times10^3$ — miscounting the power."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u1-sf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.0071$ in standard form $a\\times10^n$. State the value of $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$n$", answer: -3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "Small numbers have negative powers of 10." },
            ],
            steps: [
              { reasoning: "$0.0071=7.1\\times10^{-3}$ (3 decimal places).", working: "7.1\\times10^{-3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$n=-3$",
            commonErrors: ["Writing $n=3$ — forgetting the sign for numbers less than 1."],
            examinerNote: "B1 for $n=-3$.",
          },
        },
        {
          id: "mypms4-u1-sf-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $(2\\times10^3)(4\\times10^5)$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\times10^8$" },
              { id: "b", text: "$8\\times10^{15}$" },
              { id: "c", text: "$6\\times10^8$" },
              { id: "d", text: "$8\\times10^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form multiply", statement: "Multiply the $a$ values and add the powers of 10." },
            ],
            steps: [
              { reasoning: "$2\\times4=8$; $10^{3+5}=10^8$.", working: "8\\times10^8", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "8\\times10^8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\times10^8$",
            commonErrors: ["Multiplying the powers instead of adding them."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{6\\times10^4}{2\\times10^2}$, giving your answer in standard form $a\\times10^n$. State $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$", answer: 3 }, { label: "$n$", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form divide", statement: "Divide the $a$ values and subtract the powers of 10." },
            ],
            steps: [
              { reasoning: "$\\frac{6}{2}=3$; $10^{4-2}=10^2$.", working: "3\\times10^2", marks: 1, markCode: "M" },
              { reasoning: "$a=3$, $n=2$.", working: "a=3,\\ n=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\times10^2$",
            commonErrors: ["Adding powers instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $3\\times10^4+5\\times10^3$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\times10^7$" },
              { id: "b", text: "$3.5\\times10^4$" },
              { id: "c", text: "$8\\times10^3$" },
              { id: "d", text: "$35\\times10^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "Rewrite with the same power of 10 before adding." },
            ],
            steps: [
              { reasoning: "$3\\times10^4=30\\times10^3$, so $30\\times10^3+5\\times10^3=35\\times10^3=3.5\\times10^4$.", working: "35\\times10^3=3.5\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "Renormalise so $1\\le a<10$.", working: "3.5\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.5\\times10^4$",
            commonErrors: ["Adding $3+5=8$ and powers $4+3=7$ to get $8\\times10^7$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate $(1.5\\times10^6)(4\\times10^{-3})$, giving your answer in standard form $a\\times10^n$. State $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$", answer: 6 }, { label: "$n$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form multiply", statement: "Multiply $a$ values, add powers (including negatives)." },
            ],
            steps: [
              { reasoning: "$1.5\\times4=6$; $10^{6+(-3)}=10^3$.", working: "6\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Check $1\\le a<10$: $a=6$ is valid.", working: "a=6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\times10^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6\\times10^3$",
            commonErrors: ["Subtracting the powers to get $10^9$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate $\\frac{8\\times10^7}{2\\times10^4}$, giving your answer in standard form $a\\times10^n$. State $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$", answer: 4 }, { label: "$n$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form divide", statement: "Divide $a$ values, subtract powers of 10." },
            ],
            steps: [
              { reasoning: "$\\frac{8}{2}=4$; $10^{7-4}=10^3$.", working: "4\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "$a=4$, $n=3$.", working: "a=4,\\ n=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^3$",
            commonErrors: ["Subtracting in the wrong order: $10^{4-7}=10^{-3}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $\\frac{(2.5\\times10^8)(8\\times10^{-5})}{5\\times10^2}$, giving your answer in standard form $a\\times10^n$. State $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$", answer: 4 }, { label: "$n$", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form", statement: "Multiply first, then divide — tracking powers of 10 throughout." },
            ],
            steps: [
              { reasoning: "Numerator: $(2.5\\times8)\\times10^{8-5}=20\\times10^3=2\\times10^4$.", working: "2\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "Divide: $\\frac{2}{5}\\times10^{4-2}=0.4\\times10^2=40=4\\times10^1$.", working: "4\\times10^1", marks: 1, markCode: "M" },
              { reasoning: "$a=4$, $n=1$.", working: "a=4,\\ n=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^1$",
            commonErrors: ["Leaving the answer as $40$ or $0.4\\times10^2$ — not standard form."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student is working with numbers in standard form.",
          parts: [
            { label: "a", prompt: "Write $0.000\\,089$ in standard form.", marks: 2 },
            { label: "b", prompt: "Calculate $(3\\times10^5)(6\\times10^{-2})$, giving your answer in standard form.", marks: 2 },
            { label: "c", prompt: "Calculate $\\frac{9\\times10^6}{3\\times10^3}$, giving your answer in standard form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form rules", statement: "Multiply $a$ values and add powers; divide $a$ values and subtract powers." },
            ],
            steps: [
              { part: "a", reasoning: "$0.000089=8.9\\times10^{-5}$.", working: "8.9\\times10^{-5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer with $1\\le a<10$.", working: "8.9\\times10^{-5}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$3\\times6=18$; $10^{5-2}=10^3$, so $18\\times10^3$.", working: "18\\times10^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Renormalise: $1.8\\times10^4$.", working: "1.8\\times10^4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{9}{3}=3$; $10^{6-3}=10^3$.", working: "3\\times10^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "3\\times10^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8.9\\times10^{-5}$ (b) $1.8\\times10^4$ (c) $3\\times10^3$",
            commonErrors: ["In (b), leaving $18\\times10^3$ instead of renormalising."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u1-sf-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A country has a population of $6.5\\times10^7$ and an area of $1.3\\times10^6$ km$^2$. Calculate the population density in people per km$^2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Density (people per km$^2$)", answer: 50 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "Density $=\\frac{\\text{population}}{\\text{area}}$." },
            ],
            steps: [
              { reasoning: "$\\text{Density}=\\frac{6.5\\times10^7}{1.3\\times10^6}$.", working: "\\frac{6.5\\times10^7}{1.3\\times10^6}", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{6.5}{1.3}\\times10^{7-6}=5\\times10^1=50$.", working: "5\\times10^1=50", marks: 1, markCode: "M" },
              { reasoning: "State the density.", working: "50\\text{ people/km}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ people per km$^2$",
            commonErrors: ["Dividing $6.5$ by $1.3$ incorrectly or misplacing the power of 10."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $45\\times10^3$ is not in standard form, and rewrite it correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ requires $1\\le a<10$." },
            ],
            steps: [
              { reasoning: "In $45\\times10^3$, $a=45$ which is not less than 10.", working: "a=45\\ge10", marks: 1, markCode: "M" },
              { reasoning: "Move one factor of 10 into the power: $45\\times10^3=4.5\\times10\\times10^3$.", working: "4.5\\times10\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "$=4.5\\times10^4$, which is in standard form.", working: "4.5\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45\\times10^3=4.5\\times10^4$",
            commonErrors: ["Changing only the power without adjusting $a$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-sf-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these numbers is the largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\times10^4$" },
              { id: "b", text: "$9\\times10^3$" },
              { id: "c", text: "$2.5\\times10^5$" },
              { id: "d", text: "$7\\times10^4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing standard form", statement: "The larger power of 10 dominates; then compare the $a$ values." },
            ],
            steps: [
              { reasoning: "Convert: $3\\times10^4=30{,}000$; $9\\times10^3=9{,}000$; $2.5\\times10^5=250{,}000$; $7\\times10^4=70{,}000$.", working: "250{,}000", marks: 1, markCode: "M" },
              { reasoning: "$2.5\\times10^5$ has the largest power of 10.", working: "10^5", marks: 1, markCode: "M" },
              { reasoning: "Select (c).", working: "2.5\\times10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2.5\\times10^5$",
            commonErrors: ["Comparing only the $a$ values (9 is largest coefficient but not the number)."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u1-proportion",
      title: "Direct and inverse proportion",
      skill: "Solve problems involving direct and inverse proportion, find the constant of proportionality, and work with compound measures.",
      lesson: {
        sections: [
          {
            heading: "Direct proportion",
            body: "Two quantities are in **direct proportion** if their ratio is constant: $y=kx$ or $\\frac{y}{x}=k$. Examples: cost vs quantity, distance vs time at constant speed. If $y$ doubles, $x$ doubles.",
          },
          {
            heading: "Inverse proportion",
            body: "Two quantities are in **inverse proportion** if $y=\\frac{k}{x}$ or $xy=k$. Examples: time vs speed for a fixed journey, workers vs time to complete a job. If $y$ doubles, $x$ halves.",
          },
          {
            heading: "Compound measures and unit rates",
            body: "A **compound measure** combines two units: speed $=\\frac{\\text{distance}}{\\text{time}}$ (m/s or km/h), density $=\\frac{\\text{mass}}{\\text{volume}}$ (g/cm³), pressure $=\\frac{\\text{force}}{\\text{area}}$. A **unit rate** is per one unit — e.g. cost per kilogram for best-buy comparisons.",
          },
        ],
        keyFormulas: [
          { name: "Direct", statement: "$y=kx$" },
          { name: "Inverse", statement: "$y=\\frac{k}{x}$ or $xy=k$" },
          { name: "Speed", statement: "$v=\\frac{d}{t}$" },
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
        ],
        workedExample: {
          problem: "5 painters take 12 days to paint a house. How long would 8 painters take, assuming inverse proportion?",
          solution: "$xy=k$: $5\\times12=60$. With 8 painters: $t=\\frac{60}{8}=7.5$ days.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-prop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $y$ is directly proportional to $x$ and $y=15$ when $x=3$, what is $y$ when $x=7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "35" },
              { id: "b", text: "21" },
              { id: "c", text: "45" },
              { id: "d", text: "105" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct proportion", statement: "$y=kx$; find $k$ first." },
            ],
            steps: [
              { reasoning: "$k=\\frac{15}{3}=5$; $y=5\\times7=35$.", working: "k=5,\\ y=35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 35",
            commonErrors: ["Using $y=kx$ without finding $k$ first."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-prop-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The time taken to travel a fixed distance is inversely proportional to speed. At 60 km/h the journey takes 2 hours. How long at 80 km/h?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.5 hours" },
              { id: "b", text: "2.67 hours" },
              { id: "c", text: "1 hour" },
              { id: "d", text: "2.4 hours" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "$xy=k$ is constant." },
            ],
            steps: [
              { reasoning: "$k=60\\times2=120$.", working: "k=120", marks: 1, markCode: "M" },
              { reasoning: "$t=\\frac{120}{80}=1.5$ hours.", working: "t=1.5\\text{ h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$ hours",
            commonErrors: ["Treating it as direct proportion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car uses 8 litres of fuel per 100 km. How many litres does it need for a 350 km journey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "28 litres" },
              { id: "b", text: "24 litres" },
              { id: "c", text: "32 litres" },
              { id: "d", text: "30 litres" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Fuel per km $=\\frac{8}{100}=0.08$ litre/km." },
            ],
            steps: [
              { reasoning: "Fuel per km = $\\frac{8}{100}=0.08$ litre.", working: "0.08\\text{ litre/km}", marks: 1, markCode: "M" },
              { reasoning: "For 350 km: $0.08\\times350=28$ litres.", working: "28\\text{ litres}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "28\\text{ litres}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$ litres",
            commonErrors: ["Using 8 litres directly without scaling to distance."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A recipe uses 250 g of flour to make 12 muffins. A bakery wants to make 30 muffins and has 600 g of flour.",
          parts: [
            { label: "a", prompt: "Find the amount of flour per muffin (unit rate).", marks: 2 },
            { label: "b", prompt: "Calculate the flour needed for 30 muffins.", marks: 2 },
            { label: "c", prompt: "Determine whether the bakery has enough flour, and by how much.", marks: 2 },
            { label: "d", prompt: "If the bakery also needs 180 g of sugar for 30 muffins at the same rate, how much sugar per muffin?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Divide total by quantity to get per-unit amount." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{250}{12}=20.83$ g per muffin (or $\\frac{125}{6}$ g).", working: "\\frac{250}{12}=20.83\\text{ g}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the unit rate.", working: "20.83\\text{ g/muffin}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$20.83\\times30=625$ g (or $\\frac{125}{6}\\times30=625$ g).", working: "625\\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the flour needed.", working: "625\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$625-600=25$ g short.", working: "25\\text{ g short}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State whether enough flour.", working: "\\text{not enough, }25\\text{ g short}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\frac{180}{30}=6$ g per muffin.", working: "6\\text{ g/muffin}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the sugar rate.", working: "6\\text{ g/muffin}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20.83 g/muffin (b) 625 g (c) not enough — 25 g short (d) 6 g/muffin",
            commonErrors: ["Using 250 g directly for 30 muffins."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u1-prop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $y$ is directly proportional to $x$ and $y=8$ when $x=2$, find $y$ when $x=5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "20" },
              { id: "c", text: "13" },
              { id: "d", text: "40" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct proportion", statement: "$y=kx$; find $k$ first." },
            ],
            steps: [
              { reasoning: "$k=\\frac{8}{2}=4$; $y=4\\times5=20$.", working: "k=4,\\ y=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 20",
            commonErrors: ["Adding 3 to $y$ instead of scaling."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u1-prop-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "4 kg of apples cost 12. How much do 7 kg cost, assuming direct proportion?",
          response: {
            type: "numeric",
            parts: [{ label: "Cost", answer: 21, unit: "currency units" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Cost per kg $=\\frac{12}{4}=3$." },
            ],
            steps: [
              { reasoning: "Unit cost $=3$ per kg; $7\\times3=21$.", working: "7\\times3=21", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$21$",
            commonErrors: ["Using 12 directly for 7 kg."],
            examinerNote: "B1 for 21.",
          },
        },
        {
          id: "mypms4-u1-prop-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "6 workers take 10 days to complete a job. Assuming inverse proportion, how long would 15 workers take?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25 days" },
              { id: "b", text: "4 days" },
              { id: "c", text: "6 days" },
              { id: "d", text: "40 days" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "$xy=k$ is constant." },
            ],
            steps: [
              { reasoning: "$k=6\\times10=60$.", working: "k=60", marks: 1, markCode: "M" },
              { reasoning: "$t=\\frac{60}{15}=4$ days.", working: "t=4\\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ days",
            commonErrors: ["Treating it as direct proportion: $\\frac{15}{6}\\times10=25$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A journey takes 4 hours at 50 km/h. How long does it take at 40 km/h, assuming the distance is fixed?",
          response: {
            type: "numeric",
            parts: [{ label: "Time", answer: 5, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "Speed × time = distance is constant." },
            ],
            steps: [
              { reasoning: "Distance $=50\\times4=200$ km.", working: "d=200\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "$t=\\frac{200}{40}=5$ hours.", working: "t=5\\text{ h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ hours",
            commonErrors: ["Multiplying $4\\times\\frac{40}{50}=3.2$ — wrong direction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A metal block has mass 240 g and volume 30 cm$^3$. Calculate its density in g/cm$^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8 g/cm$^3$" },
              { id: "b", text: "7.2 g/cm$^3$" },
              { id: "c", text: "0.125 g/cm$^3$" },
              { id: "d", text: "7200 g/cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho=\\frac{m}{V}$." },
            ],
            steps: [
              { reasoning: "$\\rho=\\frac{240}{30}=8$ g/cm$^3$.", working: "\\rho=8", marks: 1, markCode: "M" },
              { reasoning: "State the density.", working: "8\\text{ g/cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ g/cm$^3$",
            commonErrors: ["Dividing volume by mass."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car uses 9 litres of fuel per 150 km. How many litres does it need for a 400 km journey?",
          response: {
            type: "numeric",
            parts: [{ label: "Litres", answer: 24, unit: "litres" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Fuel per km $=\\frac{9}{150}=0.06$ litre/km." },
            ],
            steps: [
              { reasoning: "Fuel per km $=\\frac{9}{150}=0.06$ litre.", working: "0.06\\text{ litre/km}", marks: 1, markCode: "M" },
              { reasoning: "For 400 km: $0.06\\times400=24$ litres.", working: "24\\text{ litres}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "24\\text{ litres}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$ litres",
            commonErrors: ["Scaling incorrectly: $9\\times\\frac{400}{150}=24$ — same answer, but check method."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $y$ is directly proportional to $x$, and $y=21$ when $x=7$, find $k$ and the value of $y$ when $x=12$.",
          response: {
            type: "numeric",
            parts: [{ label: "$k$", answer: 3 }, { label: "$y$ when $x=12$", answer: 36 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct proportion", statement: "$y=kx$; find $k=\\frac{y}{x}$ first." },
            ],
            steps: [
              { reasoning: "$k=\\frac{21}{7}=3$.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "$y=3\\times12=36$.", working: "y=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$; $y=36$",
            commonErrors: ["Using $k=\\frac{7}{21}$ — inverting the ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "4 painters take 9 days to paint a house. How many painters would be needed to finish in 6 days, assuming inverse proportion?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of painters", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "$\\text{painters}\\times\\text{days}=k$ is constant." },
            ],
            steps: [
              { reasoning: "$k=4\\times9=36$.", working: "k=36", marks: 1, markCode: "M" },
              { reasoning: "$n=\\frac{36}{6}=6$ painters.", working: "n=6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ painters}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ painters",
            commonErrors: ["Using direct proportion: $\\frac{4}{9}\\times6$ — wrong relationship."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A recipe uses 300 g of flour to make 20 cakes.",
          parts: [
            { label: "a", prompt: "Find the amount of flour per cake (unit rate).", marks: 2 },
            { label: "b", prompt: "Calculate the flour needed for 45 cakes.", marks: 2 },
            { label: "c", prompt: "How many cakes can be made from 900 g of flour?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Divide total by quantity to get the per-unit amount." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{300}{20}=15$ g per cake.", working: "15\\text{ g/cake}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the unit rate.", working: "15\\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$15\\times45=675$ g.", working: "675\\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the flour needed.", working: "675\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{900}{15}=60$ cakes.", working: "60\\text{ cakes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 g/cake (b) 675 g (c) 60 cakes",
            commonErrors: ["Using 300 g directly for 45 cakes."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u1-prop-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A force of 90 N acts on an area of 0.3 m$^2$. Calculate the pressure in N/m$^2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 300, unit: "N/m^2" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "Pressure $=\\frac{\\text{force}}{\\text{area}}$." },
            ],
            steps: [
              { reasoning: "$P=\\frac{90}{0.3}$.", working: "\\frac{90}{0.3}", marks: 1, markCode: "M" },
              { reasoning: "$=300$ N/m$^2$.", working: "300", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "300\\text{ N/m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ N/m$^2$",
            commonErrors: ["Dividing area by force instead."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between direct and inverse proportion, giving one real-life example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct vs inverse", statement: "Direct: $y=kx$; inverse: $xy=k$ or $y=\\frac{k}{x}$." },
            ],
            steps: [
              { reasoning: "In direct proportion both quantities increase together at a constant ratio ($y=kx$); example: cost of apples vs weight.", working: "y=kx", marks: 1, markCode: "M" },
              { reasoning: "In inverse proportion one increases as the other decreases with constant product ($xy=k$); example: time vs speed for a fixed journey.", working: "xy=k", marks: 1, markCode: "M" },
              { reasoning: "Both examples correctly identified.", working: "\\text{examples stated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direct: $y=kx$ (e.g. cost vs quantity); inverse: $y=\\frac{k}{x}$ (e.g. time vs speed).",
            commonErrors: ["Swapping the definitions."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-prop-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement describes inverse proportion between $x$ and $y$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y$ doubles when $x$ doubles" },
              { id: "b", text: "$y$ halves when $x$ doubles" },
              { id: "c", text: "$y$ stays constant" },
              { id: "d", text: "$y$ quadruples when $x$ doubles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion", statement: "$xy=k$; if $x$ doubles, $y$ must halve to keep the product constant." },
            ],
            steps: [
              { reasoning: "For $xy=k$, doubling $x$ requires halving $y$.", working: "2x\\times\\frac{y}{2}=xy=k", marks: 1, markCode: "M" },
              { reasoning: "Verify: $(2x)(\\frac{y}{2})=xy=k$. ✓", working: "k=k", marks: 1, markCode: "M" },
              { reasoning: "Select the correct statement.", working: "y\\text{ halves}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $y$ halves when $x$ doubles",
            commonErrors: ["Confusing with direct proportion."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
