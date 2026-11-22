import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypm1-u1-lesson-1-3",
  code: "1-3",
  title: "Fractions, Decimals and Percentages",
  goal: "I CAN calculate with fractions and mixed numbers, convert between fractions, decimals and percentages, and find percentages of quantities.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Equivalent fractions", definition: "Fractions that have the same value, such as $\\frac{1}{2}$ and $\\frac{3}{6}$." },
    { term: "Mixed number", definition: "A number made of a whole number and a fraction, such as $2\\frac{1}{4}$." },
    { term: "Improper fraction", definition: "A fraction whose numerator is larger than its denominator, such as $\\frac{9}{4}$." },
    { term: "Reciprocal", definition: "The fraction turned upside down. The reciprocal of $\\frac{4}{9}$ is $\\frac{9}{4}$." },
    { term: "Percentage", definition: "A number of parts per hundred. $35\\%$ means $\\frac{35}{100}$." },
    { term: "Percentage change", definition: "An increase or decrease expressed as a percentage of the original amount." },
  ],
  concepts: [
    {
      id: "mypm1-u1-fraction-operations",
      title: "Operations with fractions",
      skill: "Find equivalent fractions and add, subtract, multiply and divide fractions and mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Equivalent fractions",
            body: "Multiply or divide the numerator and denominator by the same number to get an equivalent fraction: $\\frac{3}{4}=\\frac{9}{12}$. Use this to simplify fractions, for example $\\frac{18}{24}=\\frac{3}{4}$.",
          },
          {
            heading: "Adding and subtracting",
            body: "Rewrite the fractions with a common denominator, then add or subtract the numerators. For mixed numbers, change to improper fractions first: $2\\frac{1}{4}+1\\frac{1}{2}=\\frac{9}{4}+\\frac{6}{4}=\\frac{15}{4}=3\\frac{3}{4}$.",
          },
          {
            heading: "Multiplying and dividing",
            body: "To multiply, multiply the numerators and the denominators: $\\frac{2}{3}\\times\\frac{3}{5}=\\frac{6}{15}=\\frac{2}{5}$. To divide, multiply by the reciprocal of the second fraction: $\\frac{2}{3}\\div\\frac{4}{9}=\\frac{2}{3}\\times\\frac{9}{4}=\\frac{3}{2}$.",
          },
        ],
        keyFormulas: [
          { name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$" },
          { name: "Dividing fractions", statement: "$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}$" },
        ],
        workedExample: {
          problem: "Work out $\\frac{5}{6}-\\frac{1}{3}$.",
          solution: "Common denominator 6: $\\frac{1}{3}=\\frac{2}{6}$. Then $\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}$.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-fraction-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $\\frac{3}{4}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{6}{12}$" },
              { id: "b", text: "$\\frac{3}{8}$" },
              { id: "c", text: "$\\frac{9}{12}$" },
              { id: "d", text: "$\\frac{4}{5}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Equivalent fractions", statement: "Multiplying numerator and denominator by the same number gives an equivalent fraction." },
            ],
            steps: [
              { reasoning: "Multiply the numerator and denominator of $\\frac{3}{4}$ by 3.", working: "\\frac{3\\times3}{4\\times3}=\\frac{9}{12}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{9}{12}$",
            commonErrors: ["Adding the same number to the numerator and denominator, for example $\\frac{4}{5}$.", "Choosing $\\frac{6}{12}$, which equals $\\frac{1}{2}$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $2\\frac{1}{4}+1\\frac{1}{2}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3.75 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Fractions can only be added when they have the same denominator." },
            ],
            steps: [
              { reasoning: "Write both as improper fractions with denominator 4.", working: "\\frac{9}{4}+\\frac{6}{4}=\\frac{15}{4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a mixed number and then a decimal: $3\\frac{3}{4}=3.75$.", working: "3.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\frac{3}{4}=3.75$",
            commonErrors: ["Adding the denominators, $\\frac{1}{4}+\\frac{1}{2}=\\frac{2}{6}$.", "Forgetting the whole numbers."],
            examinerNote: "M1 for a correct common denominator method (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $\\frac{2}{3}\\div\\frac{4}{9}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing by a fraction", statement: "Dividing by a fraction is the same as multiplying by its reciprocal." },
            ],
            steps: [
              { reasoning: "Replace the division by multiplication by the reciprocal of $\\frac{4}{9}$.", working: "\\frac{2}{3}\\times\\frac{9}{4}", marks: 1, markCode: "M" },
              { reasoning: "Multiply the numerators and denominators.", working: "\\frac{18}{12}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and convert to a decimal.", working: "\\frac{3}{2}=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{2}=1.5$",
            commonErrors: ["Turning the first fraction upside down.", "Dividing numerator by numerator and denominator by denominator without simplifying correctly."],
            examinerNote: "M1 for the reciprocal. M1 for the product. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A baker has a 5 kg bag of flour. She uses $2\\frac{1}{2}$ kg for bread and $\\frac{3}{4}$ kg for rolls.",
          parts: [
            { label: "a", prompt: "Work out the total mass of flour used, in kg. Give your answer as a decimal.", marks: 2 },
            { label: "b", prompt: "Work out the mass of flour left in the bag, in kg.", marks: 2 },
            { label: "c", prompt: "Each cake needs $\\frac{3}{8}$ kg of flour. Work out how many whole cakes she can make with the flour left.", marks: 2 },
            { label: "d", prompt: "Write the flour used for bread and rolls as a fraction of the whole 5 kg bag. Give your answer as a decimal.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Flour used", answer: 3.25, unit: "kg" },
              { label: "(b) Flour left", answer: 1.75, unit: "kg" },
              { label: "(c) Whole cakes", answer: 4 },
              { label: "(d) Fraction of the bag used, as a decimal", answer: 0.65 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Add fractions after writing them with the same denominator." },
              { kind: "law", name: "Dividing by a fraction", statement: "Dividing by a fraction is multiplying by its reciprocal." },
              { kind: "definition", name: "Fraction of a quantity", statement: "The fraction of a whole is the part divided by the whole." },
            ],
            steps: [
              { part: "a", reasoning: "Add using quarters: $2\\frac{1}{2}=\\frac{10}{4}$.", working: "\\frac{10}{4}+\\frac{3}{4}=\\frac{13}{4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert to a decimal.", working: "3\\frac{1}{4}=3.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the flour used from the whole bag.", working: "5-3.25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "1.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the flour left, $1\\frac{3}{4}=\\frac{7}{4}$, by $\\frac{3}{8}$ using the reciprocal.", working: "\\frac{7}{4}\\times\\frac{8}{3}=\\frac{56}{12}=4\\frac{2}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Only whole cakes count, so round down.", working: "4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the used flour as a fraction of the 5 kg bag.", working: "\\frac{13}{4}\\div5=\\frac{13}{20}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to a decimal by writing with denominator 100.", working: "\\frac{13}{20}=\\frac{65}{100}=0.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.25$ kg (b) $1.75$ kg (c) $4$ cakes (d) $\\frac{13}{20}=0.65$",
            commonErrors: ["Rounding $4\\frac{2}{3}$ up to 5 cakes, although there is not enough flour for the fifth.", "Multiplying by $\\frac{3}{8}$ instead of dividing."],
            examinerNote: "In (b) and (c) follow through from an incorrect (a) (ft). In (c) the answer 4 must be justified by 4 2/3 or equivalent.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $\\frac{2}{3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{8}{12}$" },
              { id: "b", text: "$\\frac{3}{2}$" },
              { id: "c", text: "$\\frac{4}{5}$" },
              { id: "d", text: "$\\frac{2}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Equivalent fractions", statement: "Multiplying numerator and denominator by the same number gives an equivalent fraction." },
            ],
            steps: [
              { reasoning: "Multiply numerator and denominator of $\\frac{2}{3}$ by 4: $\\frac{8}{12}$, which simplifies back to $\\frac{2}{3}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{8}{12}$",
            commonErrors: ["Choosing $\\frac{4}{5}$ by adding the same number to top and bottom.", "Choosing $\\frac{2}{6}$, which equals $\\frac{1}{3}$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{1}{2}+\\frac{1}{4}$. Give your answer as a fraction in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{4}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{3}{4}$" },
              { id: "d", text: "$\\frac{2}{6}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Fractions can only be added when they have the same denominator." },
            ],
            steps: [
              { reasoning: "Rewrite $\\frac{1}{2}$ as $\\frac{2}{4}$, then add: $\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{3}{4}$",
            commonErrors: ["Adding denominators to get $\\frac{2}{6}$.", "Choosing $\\frac{2}{4}$ by adding only the numerators."],
            examinerNote: "B1 for 3/4.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $\\frac{3}{4}\\times\\frac{2}{5}$. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{20}$" },
              { id: "b", text: "$\\frac{5}{9}$" },
              { id: "c", text: "$\\frac{6}{20}$" },
              { id: "d", text: "$\\frac{3}{10}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$" },
            ],
            steps: [
              { reasoning: "Multiply numerators and denominators: $\\frac{6}{20}=\\frac{3}{10}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{3}{10}$",
            commonErrors: ["Choosing $\\frac{6}{20}$ without simplifying.", "Adding fractions instead of multiplying, giving $\\frac{5}{9}$."],
            examinerNote: "B1 for 3/10 (6/20 acceptable if shown unsimplified, but simplest form expected).",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\frac{5}{6}-\\frac{1}{3}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Fractions can only be subtracted when they have the same denominator." },
            ],
            steps: [
              { reasoning: "Rewrite $\\frac{1}{3}$ with denominator 6 and subtract.", working: "\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}=0.5$",
            commonErrors: ["Subtracting numerators and denominators: $\\frac{4}{3}$."],
            examinerNote: "M1 for a correct common denominator (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\frac{3}{5}\\times\\frac{5}{6}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$" },
            ],
            steps: [
              { reasoning: "Multiply, then simplify: $\\frac{15}{30}=\\frac{1}{2}$.", working: "\\frac{3\\times5}{5\\times6}=\\frac{15}{30}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Adding the fractions instead of multiplying.", "Cancelling before multiplying incorrectly."],
            examinerNote: "M1 for the product 15/30 or 1/2 seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write $\\frac{7}{4}$ as a mixed number.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7\\frac{1}{4}$" },
              { id: "b", text: "$1\\frac{7}{4}$" },
              { id: "c", text: "$1\\frac{1}{4}$" },
              { id: "d", text: "$1\\frac{3}{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixed number", statement: "A whole number plus a proper fraction: $\\frac{7}{4}=1\\frac{3}{4}$ because $4$ goes into $7$ once with $3$ left over." },
            ],
            steps: [
              { reasoning: "$7\\div4=1$ remainder $3$, so $\\frac{7}{4}=1\\frac{3}{4}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1\\frac{3}{4}$",
            commonErrors: ["Writing $1\\frac{7}{4}$, keeping the original numerator.", "Writing $7\\frac{1}{4}$ by inverting."],
            examinerNote: "B1 for 1 3/4.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $1\\frac{1}{8}-\\frac{3}{4}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.375 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Convert mixed numbers to improper fractions and use a common denominator." },
            ],
            steps: [
              { reasoning: "Write both as improper fractions with denominator 8.", working: "1\\frac{1}{8}=\\frac{9}{8},\\quad \\frac{3}{4}=\\frac{6}{8}", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "\\frac{9}{8}-\\frac{6}{8}=\\frac{3}{8}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal: $\\frac{3}{8}=\\frac{375}{1000}$.", working: "0.375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}=0.375$",
            commonErrors: ["Subtracting $\\frac{1}{8}-\\frac{3}{4}$ ignoring the whole number, giving a negative answer.", "Writing $\\frac{3}{4}$ as $\\frac{3}{8}$."],
            examinerNote: "M1 for correct improper fractions. M1 for the subtraction. A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which fraction is equivalent to the decimal $0.4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{4}{100}$" },
              { id: "c", text: "$\\frac{4}{10}$" },
              { id: "d", text: "$\\frac{2}{5}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decimals as fractions", statement: "One decimal place means tenths: $0.4=\\frac{4}{10}=\\frac{2}{5}$." },
            ],
            steps: [
              { reasoning: "$0.4=\\frac{4}{10}$, which simplifies to $\\frac{2}{5}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{2}{5}$",
            commonErrors: ["Choosing $\\frac{4}{10}$ without simplifying, or $\\frac{4}{100}$ by using the wrong place value."],
            examinerNote: "B1 for 2/5 (4/10 accepted only if stated as equivalent).",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Noah is learning to divide fractions.",
          parts: [
            { label: "a", prompt: "Write down the rule for dividing one fraction by another.", marks: 1 },
            { label: "b", prompt: "Use the rule to explain why $\\frac{2}{3}\\div\\frac{4}{5}$ is the same as $\\frac{2}{3}\\times\\frac{5}{4}$.", marks: 1 },
            { label: "c", prompt: "Work out $\\frac{2}{3}\\div\\frac{4}{5}$ as a decimal.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing by a fraction", statement: "Dividing by a fraction is multiplying by its reciprocal." },
              { kind: "definition", name: "Reciprocal", statement: "The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$." },
            ],
            steps: [
              { part: "a", reasoning: "State that you multiply by the reciprocal of the second fraction.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The reciprocal of $\\frac{4}{5}$ is $\\frac{5}{4}$, so division becomes multiplication by $\\frac{5}{4}$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate $\\frac{10}{12}=\\frac{5}{6}$.", working: "0.833\\ldots\\approx0.83", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) multiply by the reciprocal (b) reciprocal of $\\frac{4}{5}$ is $\\frac{5}{4}$ (c) $\\frac{5}{6}\\approx0.83$",
            commonErrors: ["Inverting the first fraction instead of the second.", "Writing $\\frac{2}{3}\\times\\frac{4}{5}$ without flipping."],
            examinerNote: "In (c) accept $\\frac{5}{6}$ or $0.83$ (recurring).",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{2}{5}$ of 20.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fraction of a quantity", statement: "The fraction of a whole is the part divided by the whole; to find a fraction of a number, divide by the denominator then multiply by the numerator." },
            ],
            steps: [
              { reasoning: "Divide 20 by 5, then multiply by 2.", working: "20\\div5\\times2=4\\times2=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Computing $20\\times\\frac{2}{5}$ as $20\\times2\\div5$ incorrectly or as $\\frac{20}{2}\\times5=50$."],
            examinerNote: "B1 for 8.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe for pancakes uses $\\frac{3}{4}$ cup of flour and makes 6 pancakes. Lena wants to make 15 pancakes.",
          parts: [
            { label: "a", prompt: "Work out how many times the recipe she needs to scale up.", marks: 1 },
            { label: "b", prompt: "Work out the mass of flour she needs, in cups, as a decimal.", marks: 2 },
            { label: "c", prompt: "Write your answer to (b) as a fraction in its simplest form.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Scaling factor", answer: 2.5 },
              { label: "(b) Flour needed (cups)", answer: 1.875 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "If pancakes are in direct proportion to flour, multiply the flour by the same factor as the number of pancakes." },
              { kind: "law", name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times k$ scales the quantity by $k$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the number of pancakes wanted by the number the recipe makes.", working: "15\\div6=2.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply the flour by 2.5.", working: "\\frac{3}{4}\\times2.5=\\frac{3}{4}\\times\\frac{5}{2}=\\frac{15}{8}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to a decimal.", working: "1.875", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Simplify: $\\frac{15}{8}$ is already in simplest form (15 and 8 share no factor).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.5$ times (b) $1.875$ cups (c) $\\frac{15}{8}$ cups",
            commonErrors: ["Multiplying by 15 instead of 2.5.", "Adding 9 cups to the original instead of scaling."],
            examinerNote: "In (b) accept $\\frac{15}{8}$ for the method marks; the decimal is required for the final mark.",
          },
        },
        {
          id: "mypm1-u1-fraction-operations-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Eli works out $\\frac{2}{3}+\\frac{1}{4}$ and writes: \"$2+1=3$ and $3+4=7$, so the answer is $\\frac{3}{7}$.\"",
          parts: [
            { label: "a", prompt: "Explain Eli's mistake.", marks: 2 },
            { label: "b", prompt: "Work out the correct answer as a fraction in its simplest form.", marks: 1 },
            { label: "c", prompt: "Write the correct answer as a decimal, giving 3 decimal places.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Fractions must be rewritten with the same denominator before adding; denominators are never added." },
            ],
            steps: [
              { part: "a", reasoning: "Eli added the numerators and denominators separately. Denominators cannot be added; the fractions need a common denominator first.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Show the correct start: rewrite both with denominator 12.", working: "\\frac{2}{3}=\\frac{8}{12},\\quad \\frac{1}{4}=\\frac{3}{12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the numerators.", working: "\\frac{8}{12}+\\frac{3}{12}=\\frac{11}{12}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide 11 by 12.", working: "0.917", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) He added denominators; a common denominator is needed first (b) $\\frac{11}{12}$ (c) $0.917$",
            commonErrors: ["Saying only that the answer is wrong without explaining the denominator rule."],
            examinerNote: "In (a) both the mistake and a hint of the correct method are needed for both marks.",
          },
        },
      ],
    },
    {
      id: "mypm1-u1-fractions-decimals-percentages",
      title: "Fractions, decimals and percentages",
      skill: "Convert between fractions, decimals and percentages, find a percentage of a quantity and apply percentage increase and decrease.",
      lesson: {
        sections: [
          {
            heading: "Converting between forms",
            body: "A percentage is a fraction out of 100. To go from a percentage to a decimal, divide by 100: $35\\%=0.35$. To write as a fraction, put over 100 and simplify: $35\\%=\\frac{35}{100}=\\frac{7}{20}$. To change a fraction to a percentage, divide the numerator by the denominator and multiply by 100: $\\frac{18}{24}=0.75=75\\%$.",
          },
          {
            heading: "Percentage of a quantity",
            body: "Find $10\\%$ by dividing by 10 and $1\\%$ by dividing by 100, then build up. $35\\%$ of 240 is $0.35\\times240=84$.",
          },
          {
            heading: "Percentage increase and decrease",
            body: "To increase a quantity by $p\\%$, add $p\\%$ of it to the original. To decrease, subtract. A price of 80 euros reduced by $15\\%$ falls by $0.15\\times80=12$ euros, so the new price is $80-12=68$ euros.",
          },
        ],
        keyFormulas: [
          { name: "Percentage as a decimal", statement: "$p\\%=\\frac{p}{100}$" },
          { name: "Fraction to percentage", statement: "$\\frac{a}{b}=\\frac{a}{b}\\times100\\%$" },
        ],
        workedExample: {
          problem: "A bike costs 250 euros. The price rises by $8\\%$. Find the new price.",
          solution: "$8\\%$ of 250 is $0.08\\times250=20$. The new price is $250+20=270$ euros.",
        },
      },
      questions: [
        {
          id: "mypm1-u1-fractions-decimals-percentages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.35$ as a fraction in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{35}{1000}$" },
              { id: "b", text: "$\\frac{7}{20}$" },
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{35}{10}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decimals as fractions", statement: "Two decimal places means hundredths, so $0.35=\\frac{35}{100}$." },
            ],
            steps: [
              { reasoning: "Write as hundredths and divide top and bottom by 5.", working: "0.35=\\frac{35}{100}=\\frac{7}{20}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{7}{20}$",
            commonErrors: ["Using the wrong power of ten, for example $\\frac{35}{10}$.", "Confusing 0.35 with 0.6, which is $\\frac{3}{5}$."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $35\\%$ of 240.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percentage of a quantity", statement: "$p\\%$ of $Q$ is $\\frac{p}{100}\\times Q$." },
            ],
            steps: [
              { reasoning: "Convert the percentage to a decimal and multiply.", working: "0.35\\times240", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. (Check: $10\\%=24$, so $30\\%=72$ and $5\\%=12$, total 84.)", working: "84", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84$",
            commonErrors: ["Working out $\\frac{240}{35}$.", "Finding $3.5\\%$ instead of $35\\%$."],
            examinerNote: "M1 for 0.35 x 240 or a build-up method with at least two correct values (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A jacket costs 80 euros. In a sale the price is reduced by $15\\%$. Work out the sale price, in euros.",
          response: { type: "numeric", parts: [{ label: "Sale price", answer: 68, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage decrease", statement: "New amount = original amount minus the percentage of the original." },
            ],
            steps: [
              { reasoning: "Find $15\\%$ of the original price.", working: "0.15\\times80=12", marks: 1, markCode: "M" },
              { reasoning: "Subtract the reduction from the original price.", working: "80-12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$68$ euros",
            commonErrors: ["Stopping after finding the reduction, 12 euros.", "Adding the 15% instead of subtracting, giving 92 euros."],
            examinerNote: "Accept 0.85 x 80 = 68 for full marks (oe).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Three students sat tests in different forms. Lena scored $\\frac{18}{24}$. Omar scored $\\frac{31}{40}$. Pia scored $70\\%$ on a test marked out of 60.",
          parts: [
            { label: "a", prompt: "Write Lena's score as a percentage.", marks: 1 },
            { label: "b", prompt: "Write Omar's score as a percentage.", marks: 2 },
            { label: "c", prompt: "Which student did best in their test? Explain how you know.", marks: 2 },
            { label: "d", prompt: "Work out Pia's actual mark out of 60.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Lena's score", answer: 75, unit: "%" },
              { label: "(b) Omar's score", answer: 77.5, unit: "%" },
              { label: "(d) Pia's mark out of 60", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fraction to percentage", statement: "Divide the numerator by the denominator and multiply by 100." },
              { kind: "principle", name: "Fair comparison", statement: "Scores out of different totals are compared by converting them to the same form, such as percentages." },
              { kind: "definition", name: "Percentage of a quantity", statement: "$p\\%$ of $Q$ is $\\frac{p}{100}\\times Q$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide 18 by 24 and multiply by 100 (or simplify to $\\frac{3}{4}$).", working: "\\frac{18}{24}=0.75=75\\%", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide 31 by 40.", working: "31\\div40=0.775", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by 100.", working: "0.775\\times100=77.5\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare the percentages: Lena $75\\%$, Omar $77.5\\%$, Pia $70\\%$.", working: "70<75<77.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Omar did best, because his percentage is highest. Percentages are needed because the tests were out of different totals.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Find $70\\%$ of 60.", working: "0.7\\times60", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $75\\%$ (b) $77.5\\%$ (c) Omar, with the highest percentage (d) $42$ marks",
            commonErrors: ["Comparing the raw marks 18, 31 and 42 without allowing for different totals.", "Writing $\\frac{31}{40}$ as $31\\%$ or $0.31$."],
            examinerNote: "In (c) follow through from incorrect percentages in (a) and (b) (ft). The reason must refer to the percentages or equivalent.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.6$ as a fraction in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{5}$" },
              { id: "b", text: "$\\frac{6}{10}$" },
              { id: "c", text: "$\\frac{6}{100}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decimals as fractions", statement: "One decimal place means tenths: $0.6=\\frac{6}{10}=\\frac{3}{5}$." },
            ],
            steps: [
              { reasoning: "$0.6=\\frac{6}{10}$, which simplifies by dividing top and bottom by 2 to $\\frac{3}{5}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{3}{5}$",
            commonErrors: ["Using hundredths to get $\\frac{6}{100}$.", "Inverting to get $\\frac{1}{6}$."],
            examinerNote: "B1 for 3/5 (6/10 accepted only if unsimplified is acknowledged).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $45\\%$ as a decimal.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5$" },
              { id: "b", text: "$0.45$" },
              { id: "c", text: "$45$" },
              { id: "d", text: "$0.045$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percentage", statement: "$p\\%=\\frac{p}{100}$, so divide by 100 to get a decimal." },
            ],
            steps: [
              { reasoning: "Divide 45 by 100: $45\\div100=0.45$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.45$",
            commonErrors: ["Multiplying by 100 to get 4500 or by 10 to get 4.5."],
            examinerNote: "B1 for 0.45.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write $\\frac{3}{8}$ as a percentage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.75\\%$" },
              { id: "b", text: "$0.375\\%$" },
              { id: "c", text: "$375\\%$" },
              { id: "d", text: "$37.5\\%$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fraction to percentage", statement: "Divide the numerator by the denominator, then multiply by 100." },
            ],
            steps: [
              { reasoning: "$3\\div8=0.375$ and $0.375\\times100=37.5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $37.5\\%$",
            commonErrors: ["Writing $0.375\\%$ by forgetting to multiply by 100.", "Dividing 8 by 3 instead of 3 by 8."],
            examinerNote: "B1 for 37.5%.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $25\\%$ of 80.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percentage of a quantity", statement: "$p\\%$ of $Q$ is $\\frac{p}{100}\\times Q$; $25\\%=\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "Convert to a decimal and multiply, or use the fraction $\\frac{1}{4}$.", working: "0.25\\times80=80\\div4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Computing $80\\times25=2000$ without dividing by 100.", "Finding $25\\%$ of 100 instead."],
            examinerNote: "M1 for 0.25 x 80 or 80/4 (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $60\\%$ of 45.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percentage of a quantity", statement: "$p\\%$ of $Q$ is $\\frac{p}{100}\\times Q$." },
            ],
            steps: [
              { reasoning: "Convert to a decimal and multiply.", working: "0.6\\times45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. (Check: $10\\%=4.5$, so $60\\%=6\\times4.5=27$.)", working: "27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Working out $45\\div0.6$.", "Finding $6\\%$ instead of $60\\%$."],
            examinerNote: "M1 for 0.6 x 45 or a build-up method (oe). A1 cao.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write $0.375$ as a percentage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37.5\\%$" },
              { id: "b", text: "$375\\%$" },
              { id: "c", text: "$0.375\\%$" },
              { id: "d", text: "$3.75\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decimal to percentage", statement: "Multiply by 100 to change a decimal to a percentage." },
            ],
            steps: [
              { reasoning: "Multiply by 100: $0.375\\times100=37.5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $37.5\\%$",
            commonErrors: ["Multiplying by 10 instead of 100.", "Forgetting the percent sign and writing 37.5 as a decimal."],
            examinerNote: "B1 for 37.5%.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A tablet costs 120 euros. The price is increased by $15\\%$. Work out the new price, in euros.",
          response: { type: "numeric", parts: [{ label: "New price", answer: 138, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage increase", statement: "New amount = original amount plus the percentage of the original." },
            ],
            steps: [
              { reasoning: "Find $15\\%$ of 120.", working: "0.15\\times120=18", marks: 1, markCode: "M" },
              { reasoning: "Add the increase to the original price.", working: "120+18", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "138", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$138$ euros",
            commonErrors: ["Stopping after finding the increase, 18 euros.", "Multiplying 120 by 15 without dividing by 100."],
            examinerNote: "Accept $1.15\\times120=138$ for full marks (oe).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shirt originally costs 50 euros. It is reduced by $20\\%$ in a sale. What is the sale price, in euros?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40$ euros" },
              { id: "b", text: "$10$ euros" },
              { id: "c", text: "$70$ euros" },
              { id: "d", text: "$30$ euros" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage decrease", statement: "New amount = original minus the percentage of the original; paying $80\\%$ of the price is equivalent." },
            ],
            steps: [
              { reasoning: "$20\\%$ of 50 is 10, so the sale price is $50-10=40$ euros.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $40$ euros",
            commonErrors: ["Adding the 20% to get 70.", "Stopping at the reduction, 10 euros."],
            examinerNote: "B1 for 40.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Mia is explaining percentage increase to a friend.",
          parts: [
            { label: "a", prompt: "Write down the two steps needed to increase a quantity by $p\\%$.", marks: 1 },
            { label: "b", prompt: "Use your steps to increase 60 by $35\\%$.", marks: 1 },
            { label: "c", prompt: "Explain why increasing by $35\\%$ is not the same as multiplying by 35.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage increase", statement: "Find $p\\%$ of the original, then add it to the original." },
              { kind: "definition", name: "Percentage", statement: "$35\\%=\\frac{35}{100}=0.35$; a percentage is a proportion, not a multiplier of 35." },
            ],
            steps: [
              { part: "a", reasoning: "State: find $p\\%$ of the quantity (multiply by $\\frac{p}{100}$), then add it to the original.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Evaluate $0.35\\times60=21$, then $60+21=81$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiplying by 35 would give 35 times the quantity; a percentage must first be converted to a decimal or fraction ($0.35$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) find $35\\%$ of 60, then add (b) $81$ (c) $35\\%$ is $0.35$, not 35",
            commonErrors: ["Multiplying by 35 instead of 0.35.", "Forgetting to add the increase back to the original."],
            examinerNote: "In (c) the explanation must mention converting the percentage to a decimal or fraction (oe).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.08$ as a percentage.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 8, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decimal to percentage", statement: "Multiply by 100 to change a decimal to a percentage." },
            ],
            steps: [
              { reasoning: "Multiply by 100: $0.08\\times100=8$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8\\%$",
            commonErrors: ["Writing $0.8\\%$ by multiplying by 10 only."],
            examinerNote: "B1 for 8%.",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A toy originally costs 45 euros. In a sale it is reduced by $30\\%$. Later the reduced price is increased by $10\\%$.",
          parts: [
            { label: "a", prompt: "Work out the sale price, in euros.", marks: 2 },
            { label: "b", prompt: "Work out the final price after the $10\\%$ increase, in euros.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Sale price", answer: 31.5, unit: "euros" },
              { label: "(b) Final price", answer: 34.65, tolerance: 0.01, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage decrease", statement: "New amount = original minus the percentage of the original." },
              { kind: "principle", name: "Percentage increase", statement: "New amount = reduced price plus the percentage of the reduced price." },
            ],
            steps: [
              { part: "a", reasoning: "Find $30\\%$ of 45.", working: "0.3\\times45=13.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract from the original.", working: "45-13.5=31.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find $10\\%$ of the sale price and add it.", working: "0.1\\times31.5=3.15,\\quad 31.5+3.15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "34.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $31.5$ euros (b) $34.65$ euros",
            commonErrors: ["In (b) increasing 45 by 10% instead of the sale price, giving 49.5.", "Adding 30% and 10% to get a 20% reduction overall."],
            examinerNote: "Follow through from (a) in (b) (ft).",
          },
        },
        {
          id: "mypm1-u1-fractions-decimals-percentages-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three friends each scored on a test marked out of different totals: Kim scored $\\frac{4}{5}$, Luis scored $78\\%$ and Nora scored $0.8$.",
          parts: [
            { label: "a", prompt: "Write Kim's score as a percentage.", marks: 1 },
            { label: "b", prompt: "Write Nora's score as a percentage.", marks: 1 },
            { label: "c", prompt: "Write Luis's score as a decimal.", marks: 1 },
            { label: "d", prompt: "Who scored the highest? Justify your answer.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Kim's score", answer: 80, unit: "%" },
              { label: "(b) Nora's score", answer: 80, unit: "%" },
              { label: "(c) Luis's score as a decimal", answer: 0.78 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fraction to percentage", statement: "Divide numerator by denominator and multiply by 100." },
              { kind: "principle", name: "Fair comparison", statement: "Scores in different forms must be converted to a common form before comparing." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{4}{5}=0.8=80\\%$.", working: "80", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$0.8=80\\%$.", working: "80", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide 78 by 100.", working: "0.78", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Kim and Nora both scored $80\\%$, higher than Luis's $78\\%$ (or $0.78$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $80\\%$ (b) $80\\%$ (c) $0.78$ (d) Kim and Nora tie at $80\\%$, above Luis",
            commonErrors: ["Writing $\\frac{4}{5}$ as $45\\%$ by concatenating digits.", "Comparing $0.8$ and $78$ directly without converting."],
            examinerNote: "In (d) accept 'Kim and Nora' or either one with the justification that they tie.",
          },
        },
      ],
    },
  ],
};
