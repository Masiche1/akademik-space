import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cilm-u1-lesson-1-3",
  code: "1-3",
  title: "Operations with fractions and decimals",
  goal: "I CAN add, subtract, multiply and divide fractions and decimals, including mixed numbers, accurately.",
  standards: ["0862 Number: operations with fractions and decimals"],
  vocabulary: [
    { term: "Mixed number", definition: "A whole number plus a fraction, e.g. $1\\frac{1}{2}$." },
    { term: "Improper fraction", definition: "A fraction where the numerator is bigger than the denominator, e.g. $\\frac{7}{4}$." },
    { term: "Common denominator", definition: "A shared denominator used to add or subtract fractions." },
    { term: "Reciprocal", definition: "The 'flip' of a fraction — $\\frac{3}{4}$ becomes $\\frac{4}{3}$. Used in division." },
    { term: "Terminating decimal", definition: "A decimal that ends, e.g. $0.375$ — easy to convert back to a fraction." },
    { term: "Order of operations", definition: "BIDMAS/PEMDAS: brackets, indices, division/multiplication, addition/subtraction." },
  ],
  concepts: [
    {
      id: "cilm-u1-fraction-ops",
      title: "Adding, subtracting and multiplying fractions",
      skill: "Add, subtract and multiply fractions and mixed numbers using common denominators and simplification.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting",
            body: "1. Find a **common denominator** (LCM of denominators).\n2. Convert each fraction.\n3. Add or subtract numerators.\n4. Simplify.\n\n$\\frac{1}{4}+\\frac{1}{6}$: LCM $=12$, so $\\frac{3}{12}+\\frac{2}{12}=\\frac{5}{12}$.",
          },
          {
            heading: "Multiplying",
            body: "Multiply numerators, multiply denominators, simplify — simplify **before** multiplying when possible:\n\n$\\frac{2}{3} \\times \\frac{9}{10} = \\frac{2}{1} \\times \\frac{3}{10} = \\frac{6}{10} = \\frac{3}{5}$ (cancel $3$ into $9$ first).",
          },
          {
            heading: "Mixed numbers",
            body: "Convert to improper fractions first:\n\n$1\\frac{1}{2}+2\\frac{1}{3} = \\frac{3}{2}+\\frac{7}{3} = \\frac{9}{6}+\\frac{14}{6}=\\frac{23}{6}=3\\frac{5}{6}$.",
          },
        ],
        keyFormulas: [
          { name: "Add/subtract", statement: "Common denominator → combine numerators → simplify." },
          { name: "Multiply", statement: "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$; cancel before multiplying." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{3}{4} - \\frac{1}{6}$.",
          solution: "LCM of $4$ and $6$ is $12$: $\\frac{9}{12}-\\frac{2}{12}=\\frac{7}{12}$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $\\frac{1}{2}+\\frac{1}{4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{6}=\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$\\frac{2}{4}=\\frac{1}{2}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common denominator", statement: "Denominators add only after conversion to a common denominator." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}=\\frac{2}{4}$, so $\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}$ — you cannot add denominators.", working: "\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
            commonErrors: ["Choosing (a) — adding numerators AND denominators gives $\\frac{2}{6}$, which is wrong."],
          },
        },
        {
          id: "cilm-u1-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{2}{3} \\times \\frac{9}{10}$, giving your answer in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Multiplying fractions", statement: "Multiply numerators and denominators; cancel first to simplify." },
            ],
            steps: [
              { reasoning: "Cancel $9$ and $3$: $9\\div3=3$, $3\\div3=1$. So $\\frac{2}{1}\\times\\frac{3}{10}=\\frac{6}{10}$.", working: "\\frac{2 \\times 3}{1 \\times 10}=\\frac{6}{10}", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{6}{10}=\\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
            commonErrors: ["$\\frac{18}{30}$ unsimplified — always simplify, or cancel first."],
          },
        },
        {
          id: "cilm-u1-fo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $1\\frac{2}{3} + \\frac{3}{4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed numbers", statement: "Convert mixed numbers to improper fractions before operating." },
            ],
            steps: [
              { reasoning: "$1\\frac{2}{3}=\\frac{5}{3}$.", working: "\\frac{5}{3}", marks: 1, markCode: "M" },
              { reasoning: "Common denominator $12$: $\\frac{20}{12}+\\frac{9}{12}=\\frac{29}{12}$.", working: "\\frac{20}{12}+\\frac{9}{12}=\\frac{29}{12}", marks: 1, markCode: "M" },
              { reasoning: "Convert back: $\\frac{29}{12}=2\\frac{5}{12}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $2\\frac{5}{12}$ is between $2$ and $3$ — sensible since $1\\frac{2}{3}\\approx1.67$ and sum $\\approx2.42$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\frac{5}{12}$ (or $\\frac{29}{12}$)",
            commonErrors: ["Adding wholes and fractions separately: $1+0=1$, $\\frac{2}{3}+\\frac{3}{4}$ — works only if you carry correctly; improper-fraction method is safer."],
          },
        },
        {
          id: "cilm-u1-fo-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A recipe needs $\\frac{3}{4}\\ \\text{cup}$ of flour and $\\frac{2}{3}\\ \\text{cup}$ of sugar. A cook doubles the recipe.",
          parts: [
            { label: "a", prompt: "Find the doubled amounts of flour and sugar.", marks: 3 },
            { label: "b", prompt: "The cook has only $1\\frac{1}{2}\\ \\text{cups}$ of flour. Is it enough? Show working.", marks: 3 },
            { label: "c", prompt: "Total flour needed for the doubled recipe — express as an improper fraction and mixed number.", marks: 1 },
            { label: "d", prompt: "Explain why multiplying by 2 is easier than adding the fraction to itself.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fraction application", statement: "Doubling = multiplying by 2; compare with $\\times$ not addition of wholes." },
            ],
            steps: [
              { part: "a", reasoning: "Flour: $\\frac{3}{4}\\times2=\\frac{6}{4}=1\\frac{1}{2}$ cups.", working: "\\frac{3}{4}\\times2=\\frac{6}{4}=1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sugar: $\\frac{2}{3}\\times2=\\frac{4}{3}=1\\frac{1}{3}$ cups.", working: "\\frac{2}{3}\\times2=\\frac{4}{3}=1\\frac{1}{3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Needs $1\\frac{1}{2}$ cups; has $1\\frac{1}{2}$ — exactly enough.", working: "1\\frac{1}{2} = 1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison made via common form.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion correct — exactly enough.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{6}{4}=\\frac{3}{2}=1\\frac{1}{2}$ cups.", working: "\\frac{3}{2}=1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiplication is a single operation; repeated addition risks errors with mixed numbers.", working: "\\times 2 \\text{ vs } + +", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1\\frac{1}{2}$ cups flour, $1\\frac{1}{3}$ cups sugar (b) Yes — exactly enough (c) $\\frac{3}{2}=1\\frac{1}{2}$ cups (d) single operation is safer",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Both doubled amounts correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Comparison with working.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reason explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) writing $\\frac{6}{4}$ without simplifying to $1\\frac{1}{2}$."],
          },
        },
        {
          id: "cilm-u1-fo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $\\frac{2}{5}+\\frac{1}{10}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{15}=\\frac{1}{5}$" },
              { id: "b", text: "$\\frac{1}{10}$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$\\frac{3}{10}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common denominator", statement: "Convert to tenths before adding." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{5}=\\frac{4}{10}$, so $\\frac{4}{10}+\\frac{1}{10}=\\frac{5}{10}=\\frac{1}{2}$.", working: "\\frac{4}{10}+\\frac{1}{10}=\\frac{5}{10}=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Choosing (a) — adding denominators is never allowed."],
          },
        },
        {
          id: "cilm-u1-fo-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $\\frac{3}{4}\\times\\frac{2}{9}$, giving your answer in simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{12}$" },
              { id: "b", text: "$\\frac{5}{13}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Multiplying fractions", statement: "Multiply numerators and denominators, then simplify." },
            ],
            steps: [
              { reasoning: "$\\frac{3\\times2}{4\\times9}=\\frac{6}{36}=\\frac{1}{6}$.", working: "\\frac{6}{36}=\\frac{1}{6}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{6}$",
            commonErrors: ["Choosing (b) — adding fractions instead of multiplying."],
          },
        },
        {
          id: "cilm-u1-fo-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $\\frac{5}{6}-\\frac{1}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{9}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{4}{3}$" },
              { id: "d", text: "$\\frac{2}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common denominator", statement: "Convert sixths and thirds to a common denominator." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{3}=\\frac{2}{6}$, so $\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}$.", working: "\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Choosing (c) — $\\frac{4}{6}$ forgets to simplify; $\\frac{4}{6}=\\frac{2}{3}$ would come from $5-1$ over 6 wrongly."],
          },
        },
        {
          id: "cilm-u1-fo-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $2\\frac{1}{4}+1\\frac{1}{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\frac{3}{4}$" },
              { id: "b", text: "$3\\frac{1}{2}$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$3\\frac{3}{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed numbers", statement: "Convert to improper fractions before adding." },
            ],
            steps: [
              { reasoning: "$2\\frac{1}{4}=\\frac{9}{4}$ and $1\\frac{1}{2}=\\frac{6}{4}$; sum $=\\frac{15}{4}=3\\frac{3}{4}$.", working: "\\frac{9}{4}+\\frac{6}{4}=\\frac{15}{4}=3\\frac{3}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3\\frac{3}{4}$",
            commonErrors: ["Choosing (b) — adding wholes and fractions separately without carrying the $\\frac{3}{4}$ correctly."],
          },
        },
        {
          id: "cilm-u1-fo-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the largest: $\\frac{2}{3}$, $\\frac{3}{5}$, $\\frac{5}{8}$ or $\\frac{7}{12}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$\\frac{5}{8}$" },
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{7}{12}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing fractions", statement: "Convert to decimals or a common denominator to compare." },
            ],
            steps: [
              { reasoning: "As decimals: $0.667, 0.6, 0.625, 0.583$ — $\\frac{2}{3}$ is largest.", working: "0.667>0.625>0.6>0.583", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{2}{3}$",
            commonErrors: ["Comparing numerators or denominators separately — neither is valid for fractions."],
          },
        },
        {
          id: "cilm-u1-fo-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $\\frac{7}{10}-\\frac{1}{4}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.45 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common denominator", statement: "Use twentieths: $\\frac{14}{20}-\\frac{5}{20}=\\frac{9}{20}$." },
            ],
            steps: [
              { reasoning: "$\\frac{14}{20}-\\frac{5}{20}=\\frac{9}{20}=0.45$.", working: "\\frac{9}{20}=0.45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.45$ (or $\\frac{9}{20}$)",
            commonErrors: ["$0.6$ — subtracting $0.7-0.1$ treats decimals wrongly; convert via common denominator."],
          },
        },
        {
          id: "cilm-u1-fo-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate (a) $\\frac{2}{3}\\times\\frac{3}{8}$ (b) $\\frac{5}{6}-\\frac{1}{2}$. Give decimal answers.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 0.25 }, { label: "(b)", answer: 0.3333333333333333, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fraction operations", statement: "Multiply directly; subtract via common denominator." },
            ],
            steps: [
              { reasoning: "(a) $\\frac{2}{3}\\times\\frac{3}{8}=\\frac{6}{24}=\\frac{1}{4}=0.25$.", working: "\\frac{1}{4}=0.25", marks: 1, markCode: "A" },
              { reasoning: "(b) $\\frac{5}{6}-\\frac{3}{6}=\\frac{2}{6}=\\frac{1}{3}\\approx0.333$.", working: "\\frac{1}{3}=0.333", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.25$ (b) $0.333$ ($\\frac{1}{3}$)",
            commonErrors: ["In (b) $\\frac{5}{6}-\\frac{1}{2}=\\frac{4}{4}=1$ — forgetting to convert $\\frac{1}{2}$ to sixths."],
          },
        },
        {
          id: "cilm-u1-fo-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $3\\frac{1}{2}-1\\frac{3}{4}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1.75 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed numbers", statement: "Convert to improper fractions: $\\frac{7}{2}-\\frac{7}{4}$." },
            ],
            steps: [
              { reasoning: "$\\frac{7}{2}=\\frac{14}{4}$, so $\\frac{14}{4}-\\frac{7}{4}=\\frac{7}{4}$.", working: "\\frac{14}{4}-\\frac{7}{4}=\\frac{7}{4}", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{7}{4}=1\\frac{3}{4}=1.75$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\frac{3}{4}$ ($1.75$)",
            commonErrors: ["$2\\frac{1}{4}$ — subtracting wholes and fractions separately fails when the fraction part is smaller."],
          },
        },
        {
          id: "cilm-u1-fo-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pizza is cut into 12 equal slices. Sam eats $\\frac{1}{3}$ of the pizza and Jo eats $\\frac{1}{4}$ of the pizza. What fraction of the pizza is left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fraction of a whole", statement: "Fraction eaten = sum of parts; remaining = 1 minus that." },
            ],
            steps: [
              { reasoning: "Eaten: $\\frac{1}{3}+\\frac{1}{4}=\\frac{4}{12}+\\frac{3}{12}=\\frac{7}{12}$.", working: "\\frac{1}{3}+\\frac{1}{4}=\\frac{7}{12}", marks: 1, markCode: "M" },
              { reasoning: "Remaining: $1-\\frac{7}{12}=\\frac{5}{12}$.", working: "1-\\frac{7}{12}=\\frac{5}{12}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{5}{12}$ of the pizza.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{12}$",
            commonErrors: ["$\\frac{1}{3}+\\frac{1}{4}=\\frac{2}{7}$ — adding numerators and denominators."],
          },
        },
        {
          id: "cilm-u1-fo-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $2\\frac{1}{2}\\times\\frac{2}{5}+\\frac{1}{4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Order of operations", statement: "Multiplication before addition; convert mixed number first." },
            ],
            steps: [
              { reasoning: "$2\\frac{1}{2}=\\frac{5}{2}$; $\\frac{5}{2}\\times\\frac{2}{5}=1$.", working: "\\frac{5}{2}\\times\\frac{2}{5}=1", marks: 1, markCode: "M" },
              { reasoning: "Then $1+\\frac{1}{4}=\\frac{5}{4}$.", working: "1+\\frac{1}{4}=\\frac{5}{4}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{5}{4}=1\\frac{1}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{4}$ ($1\\frac{1}{4}$)",
            commonErrors: ["Adding first: $\\frac{2}{5}+\\frac{1}{4}=\\frac{13}{20}$ then multiplying — wrong order."],
          },
        },
        {
          id: "cilm-u1-fo-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A water tank is $\\frac{3}{4}$ full. During the day, $\\frac{2}{5}$ of the water in the tank is used for washing. What fraction of the whole tank is now full?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fraction of a fraction", statement: "Used = $\\frac{2}{5}$ of $\\frac{3}{4}$; remaining = original minus used." },
            ],
            steps: [
              { reasoning: "Water used $=\\frac{2}{5}\\times\\frac{3}{4}=\\frac{6}{20}=\\frac{3}{10}$ of the tank.", working: "\\frac{2}{5}\\times\\frac{3}{4}=\\frac{3}{10}", marks: 1, markCode: "M" },
              { reasoning: "Remaining $=\\frac{3}{4}-\\frac{3}{10}=\\frac{15}{20}-\\frac{6}{20}=\\frac{9}{20}$.", working: "\\frac{15}{20}-\\frac{6}{20}=\\frac{9}{20}", marks: 1, markCode: "M" },
              { reasoning: "Alternatively: $\\frac{3}{5}$ of $\\frac{3}{4}$ remains $=\\frac{9}{20}$ — same answer.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{9}{20}$ of the tank is full.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}$",
            commonErrors: ["$\\frac{3}{4}-\\frac{2}{5}=\\frac{7}{20}$ — the $\\frac{2}{5}$ applies to the water, not the whole tank."],
          },
        },
        {
          id: "cilm-u1-fo-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A tank holds $80$ litres of water.",
          parts: [
            { label: "a", prompt: "$\\frac{3}{8}$ of the water is used on Monday. How much water is left?", marks: 2 },
            { label: "b", prompt: "On Tuesday, $\\frac{1}{5}$ of the remaining water is used. How much is left now?", marks: 3 },
            { label: "c", prompt: "Express the final amount as a fraction of the original $80$ litres.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequential fractions", statement: "Each operation applies to the current amount, not the original." },
            ],
            steps: [
              { part: "a", reasoning: "Used $=\\frac{3}{8}\\times80=30$ litres; left $=80-30=50$ litres.", working: "80-30=50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$50$ litres correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tuesday used $=\\frac{1}{5}\\times50=10$ litres; left $=50-10=40$ litres.", working: "\\frac{1}{5}\\times50=10;\\ 50-10=40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Applied fraction to the remaining 50, not original 80.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$40$ litres correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{40}{80}=\\frac{1}{2}$ of the original.", working: "\\frac{40}{80}=\\frac{1}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $50$ litres (b) $40$ litres (c) $\\frac{1}{2}$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Monday amount correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Tuesday amount correct with working.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Fraction correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) using $\\frac{1}{5}\\times80=16$ — the fraction applies to what remains."],
          },
        },
      ],
    },
    {
      id: "cilm-u1-decimal-division",
      title: "Dividing with decimals and order of operations",
      skill: "Divide decimals accurately, and apply BIDMAS correctly in multi-step calculations.",
      lesson: {
        sections: [
          {
            heading: "Dividing decimals",
            body: "Make the divisor a whole number by multiplying both numbers by a power of 10:\n\n$4.8 \\div 0.6 = 48 \\div 6 = 8$\n\n$2.5 \\div 0.04 = 250 \\div 4 = 62.5$",
          },
          {
            heading: "Order of operations (BIDMAS)",
            body: "**B**rackets → **I**ndices → **D**ivision/**M**ultiplication (left to right) → **A**ddition/**S**ubtraction (left to right).\n\n$3 + 4 \\times 2 = 3 + 8 = 11$, NOT $14$.\n\n$20 - 3 \\times 4 = 20 - 12 = 8$, NOT $68$.",
          },
          {
            heading: "Checking",
            body: "Division can be checked by multiplying back: $8 \\times 0.6 = 4.8$ ✓. For BIDMAS, estimate first: $3 + 4 \\times 2$ is about $3 + 8 = 11$, not $14$.",
          },
        ],
        keyFormulas: [
          { name: "Decimal division", statement: "Multiply both numbers by $10^n$ to make the divisor whole." },
          { name: "BIDMAS", statement: "Brackets, Indices, Division/Multiplication, Addition/Subtraction." },
        ],
        workedExample: {
          problem: "Calculate $3 + 4 \\times 2$ and $18 \\div 0.5$.",
          solution: "$3 + 4 \\times 2 = 3 + 8 = 11$ (multiply before add). $18 \\div 0.5 = 180 \\div 5 = 36$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-dd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $3 + 4 \\times 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$14$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS", statement: "Multiplication before addition." },
            ],
            steps: [
              { reasoning: "$4 \\times 2 = 8$ first, then $3 + 8 = 11$.", working: "3 + 8 = 11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $11$",
            commonErrors: ["Choosing (a) — $(3+4)\\times2=14$ ignores BIDMAS."],
          },
        },
        {
          id: "cilm-u1-dd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $4.8 \\div 0.6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Scale both numbers to remove the decimal in the divisor." },
            ],
            steps: [
              { reasoning: "Multiply by 10: $48 \\div 6$.", working: "48 \\div 6", marks: 1, markCode: "M" },
              { reasoning: "$=8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["$4.8 \\div 6 = 0.8$ — forgetting to scale the dividend too."],
          },
        },
        {
          id: "cilm-u1-dd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $2 + 3 \\times 4 - 6 \\div 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "BIDMAS", statement: "Division/multiplication before addition/subtraction; same-level ops go left to right." },
            ],
            steps: [
              { reasoning: "$3 \\times 4 = 12$ and $6 \\div 2 = 3$ first.", working: "3\\times4=12;\\ 6\\div2=3", marks: 1, markCode: "M" },
              { reasoning: "Expression becomes $2 + 12 - 3$.", working: "2+12-3", marks: 1, markCode: "M" },
              { reasoning: "Left to right: $2+12=14$, $14-3=11$.", working: "14-3=11", marks: 1, markCode: "M" },
              { reasoning: "Answer: $11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Doing $2+3=5$ first — addition does not come before multiplication."],
          },
        },
        {
          id: "cilm-u1-dd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A delivery company charges by formula.",
          parts: [
            { label: "a", prompt: "Cost $C = 3 + 2n$ where $n$ is parcels. Find the cost of 5 parcels.", marks: 2 },
            { label: "b", prompt: "Calculate $8.4 \\div 0.7$.", marks: 2 },
            { label: "c", prompt: "Calculate $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4}$ — careful with order.", marks: 3 },
            { label: "d", prompt: "Explain why $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4} \\ne \\left(\\frac{1}{2}+\\frac{1}{3}\\right)\\times\\frac{1}{4}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Order of operations", statement: "Multiplication/division before addition/subtraction, always." },
            ],
            steps: [
              { part: "a", reasoning: "$C = 3 + 2(5) = 3 + 10 = 13$.", working: "3+2\\times5=13", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\pounds13$ (or 13 units).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$8.4 \\div 0.7 = 84 \\div 7 = 12$.", working: "84 \\div 7 = 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First $\\frac{1}{3}\\times\\frac{1}{4}=\\frac{1}{12}$; then $\\frac{1}{2}+\\frac{1}{12}=\\frac{7}{12}$.", working: "\\frac{1}{3}\\times\\frac{1}{4}=\\frac{1}{12};\\ \\frac{6}{12}+\\frac{1}{12}=\\frac{7}{12}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiplication done before addition.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Final answer correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Without brackets, multiplication binds tighter; brackets force the addition first.", working: "\\times \\text{ before } +", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13$ (b) $12$ (c) $\\frac{7}{12}$ (d) multiplication before addition unless brackets",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Cost correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Division correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Order of operations applied.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "BIDMAS explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) adding first: $\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$, then $\\times\\frac{1}{4}=\\frac{5}{24}$ — wrong order."],
          },
        },
        {
          id: "cilm-u1-dd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $20 - 4 \\div 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$20$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS", statement: "Division before subtraction." },
            ],
            steps: [
              { reasoning: "$4 \\div 2 = 2$ first, then $20 - 2 = 18$.", working: "20-2=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $18$",
            commonErrors: ["Choosing (a) — working left to right, $(20-4)\\div2=8$, ignores that division comes before subtraction.", "Choosing (d) — $20-4\\times2=12$ multiplies instead of dividing."],
          },
        },
        {
          id: "cilm-u1-dd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $6.3 \\div 0.7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.9$" },
              { id: "b", text: "$90$" },
              { id: "c", text: "$63$" },
              { id: "d", text: "$9$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Scale both numbers by 10: $63 \\div 7$." },
            ],
            steps: [
              { reasoning: "$6.3 \\div 0.7 = 63 \\div 7 = 9$.", working: "63\\div7=9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $9$",
            commonErrors: ["Choosing (b) — multiplying by 100 instead of 10 gives an answer 10 times too big."],
          },
        },
        {
          id: "cilm-u1-dd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $10 - 2 \\times 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS", statement: "Multiplication before subtraction." },
            ],
            steps: [
              { reasoning: "$2 \\times 3 = 6$ first, then $10 - 6 = 4$.", working: "10-6=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Choosing (a) — $(10-2)\\times3=24$ treats subtraction as coming first."],
          },
        },
        {
          id: "cilm-u1-dd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $\\frac{1}{2} \\times 8 + 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$5.5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS", statement: "Multiplication/division before addition." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}\\times8=4$ first, then $4+3=7$.", working: "4+3=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7$",
            commonErrors: ["Choosing (c) — $(\\frac{1}{2}+3)\\times8$ misreads the order."],
          },
        },
        {
          id: "cilm-u1-dd-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Calculate $18 \\div 0.5 + 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$21$" },
              { id: "c", text: "$39$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS and decimal division", statement: "Divide first: $18\\div0.5=36$, then add 3." },
            ],
            steps: [
              { reasoning: "$18 \\div 0.5 = 180 \\div 5 = 36$; then $36 + 3 = 39$.", working: "36+3=39", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $39$",
            commonErrors: ["Choosing (b) — $18\\div(0.5+3)$ wrongly groups the addition inside the division."],
          },
        },
        {
          id: "cilm-u1-dd-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $7.2 \\div 0.9$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Scale by 10: $72 \\div 9$." },
            ],
            steps: [
              { reasoning: "$7.2 \\div 0.9 = 72 \\div 9 = 8$.", working: "72\\div9=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["$0.8$ — forgetting to scale the dividend as well as the divisor."],
          },
        },
        {
          id: "cilm-u1-dd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate (a) $0.56 \\div 0.07$ (b) $4.5 \\div 0.15$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 8 }, { label: "(b)", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Multiply both numbers by a power of 10 to make the divisor whole." },
            ],
            steps: [
              { reasoning: "(a) $0.56 \\div 0.07 = 56 \\div 7 = 8$.", working: "56\\div7=8", marks: 1, markCode: "A" },
              { reasoning: "(b) $4.5 \\div 0.15 = 450 \\div 15 = 30$.", working: "450\\div15=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8$ (b) $30$",
            commonErrors: ["Miscounting decimal places — check by multiplying back."],
          },
        },
        {
          id: "cilm-u1-dd-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $15 \\div 0.4$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 37.5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Scale by 10: $150 \\div 4$." },
            ],
            steps: [
              { reasoning: "$15 \\div 0.4 = 150 \\div 4$.", working: "150\\div4", marks: 1, markCode: "M" },
              { reasoning: "$= 37.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37.5$",
            commonErrors: ["$3.75$ — decimal point placed incorrectly; $0.4 \\times 37.5 = 15$ confirms."],
          },
        },
        {
          id: "cilm-u1-dd-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $18 - 3 \\times (4 - 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "BIDMAS", statement: "Brackets first, then multiplication, then subtraction." },
            ],
            steps: [
              { reasoning: "Brackets: $4 - 1 = 3$.", working: "4-1=3", marks: 1, markCode: "M" },
              { reasoning: "Then $3 \\times 3 = 9$.", working: "3\\times3=9", marks: 1, markCode: "M" },
              { reasoning: "Finally $18 - 9 = 9$.", working: "18-9=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["$18 - 12 + 1$ style working — brackets must be completed before any multiplication."],
          },
        },
        {
          id: "cilm-u1-dd-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $2.5 \\times 4 - 6 \\div 0.5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "BIDMAS with decimals", statement: "Multiplication and division (left to right) before subtraction." },
            ],
            steps: [
              { reasoning: "$2.5 \\times 4 = 10$ and $6 \\div 0.5 = 12$.", working: "2.5\\times4=10;\\ 6\\div0.5=12", marks: 1, markCode: "M" },
              { reasoning: "Expression becomes $10 - 12$.", working: "10-12", marks: 1, markCode: "M" },
              { reasoning: "$10 - 12 = -2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2$",
            commonErrors: ["$-1$ — computing $6\\div0.5$ as $3$ (dividing by 2 instead of 0.5)."],
          },
        },
        {
          id: "cilm-u1-dd-q15",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Work out these calculations.",
          parts: [
            { label: "a", prompt: "Calculate $9.6 \\div 0.8$.", marks: 2 },
            { label: "b", prompt: "Calculate $5 + 3 \\times (10 - 4)$.", marks: 3 },
            { label: "c", prompt: "Explain why $5 + 3 \\times (10 - 4)$ is not the same as $(5 + 3) \\times (10 - 4)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "BIDMAS", statement: "Brackets, then multiplication, then addition — brackets change everything." },
            ],
            steps: [
              { part: "a", reasoning: "$9.6 \\div 0.8 = 96 \\div 8 = 12$.", working: "96\\div8=12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Brackets: $10-4=6$; then $3\\times6=18$; then $5+18=23$.", working: "5+18=23", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct order applied.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$23$ correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In the first, only $3$ is multiplied by $6$; in the second, $(5+3)=8$ is multiplied — different groupings give different results ($23$ vs $48$).", working: "23 \\text{ vs } 48", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation of grouping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12$ (b) $23$ (c) different grouping changes the result",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Division correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "BIDMAS applied correctly.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Grouping explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) adding $5+3=8$ first, then $8\\times6=48$ — addition does not come before multiplication."],
          },
        },
        {
          id: "cilm-u1-dd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare $48 \\div 4 + 2$ with $48 \\div (4 + 2)$. Explain why the answers differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Brackets in BIDMAS", statement: "Brackets force the addition first; without them division comes first." },
            ],
            steps: [
              { reasoning: "Without brackets: $48 \\div 4 = 12$, then $12 + 2 = 14$.", working: "48\\div4+2=14", marks: 1, markCode: "M" },
              { reasoning: "With brackets: $4 + 2 = 6$ first, then $48 \\div 6 = 8$.", working: "48\\div6=8", marks: 1, markCode: "M" },
              { reasoning: "The bracketed version divides by 6, not 4 — the grouping changes the divisor.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $14$ and $8$ — brackets matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$ vs $8$ — brackets change which operation happens first",
            commonErrors: ["Getting $16$ for the first — must divide before adding."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u1-ops-notes",
      title: "Fraction and decimal operations — revision notes",
      summary: "Adding, subtracting, multiplying fractions; decimal division; BIDMAS.",
      sections: [
        {
          heading: "Fractions",
          body: "Add/subtract: common denominator first. Multiply: numerators and denominators, cancel first. Mixed numbers: convert to improper fractions first.",
        },
        {
          heading: "Decimals",
          body: "Division: scale both numbers so the divisor is whole — $4.8 \\div 0.6 = 48 \\div 6 = 8$.",
        },
        {
          heading: "BIDMAS",
          body: "Brackets → Indices → Division/Multiplication → Addition/Subtraction. Same level = left to right. $3 + 4 \\times 2 = 11$, not $14$.",
        },
      ],
    },
  ],
};
