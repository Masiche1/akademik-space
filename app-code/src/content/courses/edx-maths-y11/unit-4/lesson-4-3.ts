import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edm11-u4-lesson-4-3",
  code: "4-3",
  title: "Multi-step Problem Solving",
  goal: "I CAN plan and carry out multi-step geometry, statistics and probability problems, showing clear working and giving reasons.",
  standards: ["4MA1 3.4", "4MA1 3.6", "4MA1 4.1", "4MA1 5.1"],
  vocabulary: [
    { term: "Interior angle", definition: "An angle inside a polygon, between two adjacent sides." },
    { term: "Isosceles triangle", definition: "A triangle with two equal sides and, opposite them, two equal angles." },
    { term: "Mean", definition: "The sum of all the values divided by the number of values." },
    { term: "Frequency table", definition: "A table showing how many times each value (or class) occurs." },
    { term: "Independent events", definition: "Events where the outcome of one does not affect the probability of the other." },
    { term: "Without replacement", definition: "Selecting items one after another without putting any back, so later probabilities change." },
  ],
  concepts: [
    {
      id: "edm11-u4-multistep-geometry",
      title: "Multi-step geometry problems",
      skill: "Combine angle facts, Pythagoras, trigonometry and area to solve problems in several steps.",
      lesson: {
        sections: [
          {
            heading: "Plan before you calculate",
            body: "Read the whole question, mark all given lengths and angles on a sketch, and decide what each step will find. Write each result on the diagram so that later steps can use it.",
          },
          {
            heading: "Choose the right tool",
            body: "Right-angled triangle with two sides known: Pythagoras. One side and an angle, or two sides and an angle needed: trigonometry. Area of a triangle with two sides and the included angle: $\\frac12 ab\\sin C$. Give reasons for angle facts, for example 'angles in a triangle add up to $180^\\circ$'.",
          },
          {
            heading: "Keep accuracy",
            body: "Use unrounded values from your calculator between steps and give the final answer to $3$ significant figures (angles to 1 decimal place).",
          },
        ],
        keyFormulas: [
          { name: "Area of a triangle", statement: "$\\frac12 ab\\sin C$" },
          { name: "Area of a trapezium", statement: "$\\frac12 (a + b) h$" },
        ],
        workedExample: {
          problem: "A ladder of length 5 m leans against a vertical wall with its foot 1.4 m from the wall. How high up the wall does it reach?",
          solution: "$h^2 = 5^2 - 1.4^2 = 25 - 1.96 = 23.04$, so $h = 4.8$ m.",
        },
      },
      questions: [
        {
          id: "edm11-u4-multistep-geometry-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Triangle $ABC$ is isosceles with $AB = AC$. Angle $BAC = 40^\\circ$.\n\nWork out the size of angle $ABC$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$140^\\circ$" },
              { id: "b", text: "$80^\\circ$" },
              { id: "c", text: "$40^\\circ$" },
              { id: "d", text: "$70^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Isosceles triangle", statement: "The angles opposite equal sides are equal." },
              { kind: "theorem", name: "Angle sum of a triangle", statement: "Angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Angles $ABC$ and $ACB$ are equal, so they share the remaining $180^\\circ - 40^\\circ$.", working: "180 - 40 = 140", marks: 1, markCode: "M" },
              { reasoning: "Halve it.", working: "140 \\div 2 = 70^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $70^\\circ$",
            commonErrors: ["Not halving the remaining $140^\\circ$.", "Assuming the base angles equal $40^\\circ$."],
          },
        },
        {
          id: "edm11-u4-multistep-geometry-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A ladder $6.5$ m long stands on horizontal ground and leans against a vertical wall. The foot of the ladder is $2.5$ m from the wall.\n\nCalculate the height above the ground of the point where the ladder touches the wall.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 6, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$\\text{hyp}^2 = a^2 + b^2$" },
            ],
            steps: [
              { reasoning: "The ladder is the hypotenuse, so subtract.", working: "h^2 = 6.5^2 - 2.5^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "h^2 = 42.25 - 6.25 = 36", marks: 1, markCode: "A" },
              { reasoning: "Square root.", working: "h = 6 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ m",
            commonErrors: ["Adding the squares instead of subtracting.", "Forgetting to square root."],
          },
        },
        {
          id: "edm11-u4-multistep-geometry-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "In triangle $ABC$, $AB = 8$ cm, $AC = 11$ cm and angle $BAC = 50^\\circ$.\n\nCalculate the area of triangle $ABC$ and the length of $BC$. Give your answers correct to $3$ significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Area (cm^2)", answer: 33.7, tolerance: 0.05, unit: "cm^2" },
              { label: "$BC$ (cm)", answer: 8.48, tolerance: 0.005, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area formula", statement: "$\\text{Area} = \\frac12 ab\\sin C$" },
              { kind: "formula", name: "Cosine rule", statement: "$a^2 = b^2 + c^2 - 2bc\\cos A$" },
            ],
            steps: [
              { reasoning: "Use the two sides and the included angle.", working: "\\frac12 \\times 8 \\times 11 \\times \\sin 50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $44 \\times 0.76604$.", working: "33.7 \\text{ cm}^2", marks: 1, markCode: "A" },
              { reasoning: "Cosine rule for $BC$.", working: "BC^2 = 8^2 + 11^2 - 2(8)(11)\\cos 50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $185 - 176 \\times 0.64279 = 185 - 113.13$.", working: "BC^2 = 71.87\\ldots", marks: 1, markCode: "A" },
              { reasoning: "Square root.", working: "BC = 8.48 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Area $33.7$ cm$^2$; $BC = 8.48$ cm",
            commonErrors: ["Using $\\cos$ in the area formula.", "Subtracting before multiplying in the cosine rule."],
          },
        },
        {
          id: "edm11-u4-multistep-geometry-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "$ABCD$ is a trapezium. $AB$ is parallel to $DC$. Angles $DAB$ and $ADC$ are both $90^\\circ$. $AB = 7$ cm, $DC = 13$ cm and $AD = 8$ cm.",
          parts: [
            { label: "a", prompt: "Work out the area of the trapezium.", marks: 2 },
            { label: "b", prompt: "Work out the length of $BC$.", marks: 3 },
            { label: "c", prompt: "Calculate the size of the angle $BCD$. Give your answer correct to $1$ decimal place.", marks: 3 },
            { label: "d", prompt: "Work out the perimeter of the trapezium.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) area (cm^2)", answer: 80, unit: "cm^2" },
              { label: "(b) $BC$ (cm)", answer: 10, unit: "cm" },
              { label: "(c) angle $BCD$ (degrees)", answer: 53.1, tolerance: 0.05 },
              { label: "(d) perimeter (cm)", answer: 38, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a trapezium", statement: "$\\frac12 (a+b)h$" },
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$c^2 = a^2 + b^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Use the trapezium formula with height $AD$.", working: "\\frac12 (7 + 13) \\times 8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "80 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Draw a perpendicular from $B$ to $DC$ meeting it at $E$. Then $BE = 8$ and $EC = 13 - 7 = 6$.", working: "EC = 6", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Pythagoras in triangle $BEC$.", working: "BC^2 = 8^2 + 6^2 = 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Square root.", working: "BC = 10 \\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In triangle $BEC$, $BE$ is opposite and $EC$ is adjacent to angle $BCD$.", working: "\\tan BCD = \\frac{8}{6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Inverse tangent.", working: "BCD = \\tan^{-1}\\left(\\frac43\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "BCD = 53.1^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add all four sides.", working: "7 + 10 + 13 + 8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "38 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $80$ cm$^2$. (b) $10$ cm. (c) $53.1^\\circ$. (d) $38$ cm.",
            commonErrors: ["Using $BC$ as the height in the area formula.", "Using $13$ rather than $6$ as the base of the right-angled triangle."],
          },
        },
      ],
    },
    {
      id: "edm11-u4-multistep-stats-prob",
      title: "Multi-step statistics and probability problems",
      skill: "Use frequency tables, averages and probability rules together to solve problems with several stages.",
      lesson: {
        sections: [
          {
            heading: "Mean from a frequency table",
            body: "Add a column for $\\text{value} \\times \\text{frequency}$. The mean is the total of this column divided by the total frequency. If a mean is given, you can work backwards to find a missing frequency or value by forming an equation.",
          },
          {
            heading: "Probability with and without replacement",
            body: "For independent events multiply: $P(A \\text{ and } B) = P(A) \\times P(B)$. For selections without replacement, the second probability has one fewer item in the denominator. 'At least one' is usually easiest as $1 - P(\\text{none})$.",
          },
          {
            heading: "Presenting your answer",
            body: "Show the probability of each branch or the calculation for each class. Give probabilities as fractions or decimals, and averages to a sensible accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Mean from a table", statement: "$\\text{mean} = \\frac{\\sum fx}{\\sum f}$" },
          { name: "Independent events", statement: "$P(A \\text{ and } B) = P(A) \\times P(B)$" },
        ],
        workedExample: {
          problem: "A bag has 4 red and 6 blue counters. Two are taken without replacement. Find the probability both are red.",
          solution: "$\\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$.",
        },
      },
      questions: [
        {
          id: "edm11-u4-multistep-stats-prob-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "The probability that it rains on Saturday is $0.3$. The probability that it rains on Sunday is $0.4$. The events are independent.\n\nWhat is the probability that it rains on both days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.58$" },
              { id: "b", text: "$0.7$" },
              { id: "c", text: "$0.12$" },
              { id: "d", text: "$0.1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A \\text{ and } B) = P(A) \\times P(B)$." },
            ],
            steps: [
              { reasoning: "Multiply the two probabilities.", working: "0.3 \\times 0.4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0.12$",
            commonErrors: ["Adding the probabilities to get $0.7$.", "Subtracting to get $0.1$."],
          },
        },
        {
          id: "edm11-u4-multistep-stats-prob-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The table shows the number of goals scored by a football team in 20 matches.\n\n- 0 goals: 5 matches\n- 1 goal: 7 matches\n- 2 goals: 5 matches\n- 3 goals: 3 matches\n\nWork out the mean number of goals scored per match.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 1.3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean from a frequency table", statement: "$\\text{mean} = \\frac{\\sum fx}{\\sum f}$" },
            ],
            steps: [
              { reasoning: "Multiply each number of goals by its frequency.", working: "0\\times5 + 1\\times7 + 2\\times5 + 3\\times3", marks: 1, markCode: "M" },
              { reasoning: "Add: $0 + 7 + 10 + 9$.", working: "26", marks: 1, markCode: "A" },
              { reasoning: "Divide by the total frequency of $20$.", working: "\\frac{26}{20} = 1.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.3$ goals per match",
            commonErrors: ["Dividing by $4$ (the number of rows).", "Adding the goals column without multiplying by frequency."],
          },
        },
        {
          id: "edm11-u4-multistep-stats-prob-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A bag contains 5 red counters and 3 blue counters. Two counters are taken at random from the bag without replacement.\n\nWork out the probability that the two counters are the same colour. Give your answer as a decimal correct to $3$ decimal places.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.464, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Without replacement", statement: "The second probability has one fewer counter in both the favourable colour and the total." },
              { kind: "law", name: "Addition rule", statement: "For mutually exclusive outcomes, add their probabilities." },
            ],
            steps: [
              { reasoning: "Probability both red.", working: "\\frac58 \\times \\frac47 = \\frac{20}{56}", marks: 1, markCode: "M" },
              { reasoning: "Probability both blue.", working: "\\frac38 \\times \\frac27 = \\frac{6}{56}", marks: 1, markCode: "M" },
              { reasoning: "Add the two cases.", working: "\\frac{26}{56} = \\frac{13}{28}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "0.464", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{13}{28} = 0.464$",
            commonErrors: ["Using denominator $8$ for both picks.", "Finding only the 'both red' case."],
          },
        },
        {
          id: "edm11-u4-multistep-stats-prob-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A teacher recorded the number of books read by each of 25 students in a term.\n\n- 0 books: 2 students\n- 1 book: 5 students\n- 2 books: 8 students\n- 3 books: 6 students\n- 4 books: 4 students\n\nOne of these students is chosen at random, and then a second student is chosen at random from the remaining students.",
          parts: [
            { label: "a", prompt: "Work out the mean number of books read per student.", marks: 3 },
            { label: "b", prompt: "Write down the median number of books.", marks: 1 },
            { label: "c", prompt: "Work out the probability that the first student chosen read exactly 2 books.", marks: 1 },
            { label: "d", prompt: "Work out the probability that both students chosen read exactly 3 books. Give your answer as a decimal correct to $3$ decimal places.", marks: 3 },
            { label: "e", prompt: "Work out the probability that neither student chosen read 0 books. Give your answer as a decimal correct to $3$ decimal places.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) mean", answer: 2.2, tolerance: 0.005 },
              { label: "(b) median", answer: 2 },
              { label: "(c) probability", answer: 0.32, tolerance: 0.001 },
              { label: "(d) probability", answer: 0.05, tolerance: 0.001 },
              { label: "(e) probability", answer: 0.843, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean from a frequency table", statement: "$\\text{mean} = \\frac{\\sum fx}{\\sum f}$" },
              { kind: "law", name: "Without replacement", statement: "After the first selection, the number of students falls by one." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply and add: $0 + 5 + 16 + 18 + 16$.", working: "0\\times2 + 1\\times5 + 2\\times8 + 3\\times6 + 4\\times4 = 55", marks: 2, markCode: "M" },
              { part: "a", reasoning: "Divide by $25$.", working: "\\frac{55}{25} = 2.2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The 13th value is in the group for 2 books (cumulative frequencies $2, 7, 15$).", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Students with 2 books over the total.", working: "\\frac{8}{25} = 0.32", marks: 1, markCode: "B" },
              { part: "d", reasoning: "First student: 6 of 25.", working: "\\frac{6}{25}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second student: 5 of 24 remain.", working: "\\frac{6}{25} \\times \\frac{5}{24}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\frac{30}{600} = 0.05", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Neither read 0 books: 23 of 25 then 22 of 24.", working: "\\frac{23}{25} \\times \\frac{22}{24}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "\\frac{506}{600} = 0.843", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.2$. (b) $2$. (c) $0.32$. (d) $0.05$. (e) $0.843$.",
            commonErrors: ["Not reducing the denominator to 24 for the second pick.", "Dividing the total books by 5 (the number of rows)."],
          },
        },
      ],
    },
  ],
};
