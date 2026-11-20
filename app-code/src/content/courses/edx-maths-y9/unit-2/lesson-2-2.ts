import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edm9-u2-lesson-2-2",
  code: "2-2",
  title: "Equations and Formulae",
  goal: "I CAN solve simultaneous linear equations, rearrange formulae and solve linear inequalities.",
  standards: ["Y9 Algebra"],
  vocabulary: [
    { term: "Simultaneous equations", definition: "Two or more equations with the same unknowns, which must both be true at the same time." },
    { term: "Elimination", definition: "A method that removes one unknown by adding or subtracting the two equations." },
    { term: "Subject of a formula", definition: "The letter on its own on one side of a formula, such as $v$ in $v = u + at$." },
    { term: "Inequality", definition: "A statement comparing two values using $<$, $>$, $\\le$ or $\\ge$." },
    { term: "Inverse operation", definition: "An operation that undoes another, for example subtraction undoes addition." },
    { term: "Integer", definition: "A whole number, positive, negative or zero." },
  ],
  concepts: [
    {
      id: "edm9-u2-simultaneous-equations",
      title: "Simultaneous linear equations",
      skill: "Solve a pair of linear simultaneous equations by elimination and use them to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Elimination",
            body: "To solve two equations with two unknowns, make the coefficients of one letter the same size, then add or subtract the equations to **eliminate** that letter. If the signs of the matching terms are the same, **subtract**; if they are different, **add**. Solve the resulting equation for one unknown, then substitute back into one of the original equations to find the other.",
          },
          {
            heading: "Matching coefficients and checking",
            body: "Sometimes you need to multiply one or both equations first. For $3x + 2y = 16$ and $5x - 3y = 14$, multiply the first by 3 and the second by 2 so that both have $6y$ terms with opposite signs. Always check your answer by substituting both values into the equation you did **not** use for the substitution.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Same signs: subtract the equations. Different signs: add the equations." },
        ],
        workedExample: {
          problem: "Solve $2x + y = 11$ and $x - y = 1$.",
          solution: "The $y$ terms have opposite signs, so add the equations: $3x = 12$, so $x = 4$. Substitute into $x - y = 1$: $4 - y = 1$, so $y = 3$. Check in $2x + y = 11$: $8 + 3 = 11$.",
        },
      },
      questions: [
        {
          id: "edm9-u2-simultaneous-equations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x + y = 7$ and $x - y = 3$. Which pair of values is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 5,\\; y = 2$" },
              { id: "b", text: "$x = 2,\\; y = 5$" },
              { id: "c", text: "$x = 4,\\; y = 3$" },
              { id: "d", text: "$x = 10,\\; y = -3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Add the equations when the signs of a matching term are different." }],
            steps: [
              { reasoning: "The $y$ terms have opposite signs, so add the equations to eliminate $y$.", working: "2x = 10 \\Rightarrow x = 5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 5$ into $x + y = 7$.", working: "5 + y = 7 \\Rightarrow y = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = 5,\\; y = 2$",
            commonErrors: ["Swapping the values of $x$ and $y$.", "Subtracting instead of adding, which does not eliminate $y$."],
          },
        },
        {
          id: "edm9-u2-simultaneous-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve the simultaneous equations $2x + y = 11$ and $x - y = 1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 4 },
              { label: "$y$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Add the equations when the signs of a matching term are different." }],
            steps: [
              { reasoning: "The $y$ terms are $+y$ and $-y$, so add the equations.", working: "3x = 12", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "x = 4", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $x - y = 1$. Check in the other equation: $8 + 3 = 11$.", working: "4 - y = 1 \\Rightarrow y = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4,\\; y = 3$",
            commonErrors: ["Subtracting the equations when the signs are different.", "Not finding the second unknown."],
            examinerNote: "Allow trial and improvement only if both equations are verified. Otherwise full marks need a valid method.",
          },
        },
        {
          id: "edm9-u2-simultaneous-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve the simultaneous equations $3x + 2y = 16$ and $5x - 3y = 14$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 4 },
              { label: "$y$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Make the coefficients of one unknown equal in size, then add or subtract." }],
            steps: [
              { reasoning: "Multiply the first equation by 3 and the second by 2 so both have a $6y$ term.", working: "9x + 6y = 48 \\quad\\text{and}\\quad 10x - 6y = 28", marks: 1, markCode: "M" },
              { reasoning: "The $y$ terms have opposite signs, so add.", working: "19x = 76", marks: 1, markCode: "M" },
              { reasoning: "Divide by 19.", working: "x = 4", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $3x + 2y = 16$. Check in the second equation: $20 - 6 = 14$.", working: "12 + 2y = 16 \\Rightarrow y = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4,\\; y = 2$",
            commonErrors: ["Multiplying only one side of an equation.", "Subtracting when the signs are different, giving a wrong value of $x$."],
          },
        },
        {
          id: "edm9-u2-simultaneous-equations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "At a cinema, an adult ticket costs £$a$ and a child ticket costs £$c$. Two adults and three children pay £31 in total. Three adults and one child pay £29 in total.",
          parts: [
            { label: "a", prompt: "Write down two equations in $a$ and $c$ for this information.", marks: 2 },
            { label: "b", prompt: "Solve your equations to find the cost of an adult ticket and the cost of a child ticket.", marks: 4 },
            { label: "c", prompt: "Work out the total cost of 4 adult tickets and 2 child tickets, in pounds.", marks: 2 },
            { label: "d", prompt: "Sam says, 'Five adults and four children would cost exactly £60.' Is Sam correct? You must show your working.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) adult ticket (£)", answer: 8 },
              { label: "(b) child ticket (£)", answer: 5 },
              { label: "(c) total cost (£)", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming equations", statement: "Translate each sentence into an equation using the unknown prices." },
              { kind: "principle", name: "Elimination", statement: "Make the coefficients of one unknown equal in size, then add or subtract." },
            ],
            steps: [
              { part: "a", reasoning: "Two adults and three children cost £31.", working: "2a + 3c = 31", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Three adults and one child cost £29.", working: "3a + c = 29", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the second equation by 3 to match the $c$ terms.", working: "9a + 3c = 87", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The $c$ terms have the same sign, so subtract the first equation.", working: "9a + 3c - (2a + 3c) = 87 - 31 \\Rightarrow 7a = 56", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 7.", working: "a = 8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into $3a + c = 29$. Check: $2(8) + 3(5) = 31$.", working: "24 + c = 29 \\Rightarrow c = 5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply each ticket price by the number of tickets.", working: "4 \\times 8 + 2 \\times 5 = 32 + 10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 42", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Work out the cost of 5 adults and 4 children.", working: "5 \\times 8 + 4 \\times 5 = 40 + 20 = 60", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The total is exactly £60, so Sam is correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2a + 3c = 31$ and $3a + c = 29$. (b) Adult £8, child £5. (c) £42. (d) Yes, Sam is correct: $40 + 20 = 60$.",
            commonErrors: ["Writing the equations with the unknowns the wrong way round.", "Subtracting the wrong way and getting a negative value.", "Not checking the solution in the other equation."],
            examinerNote: "Part (c) and (d) ft from part (b) if both values are positive.",
          },
        },
      ],
    },
    {
      id: "edm9-u2-formulae-inequalities",
      title: "Rearranging formulae and solving linear inequalities",
      skill: "Change the subject of a formula and solve linear inequalities, including double inequalities.",
      lesson: {
        sections: [
          {
            heading: "Changing the subject",
            body: "To make a letter the subject, undo the operations around it in reverse order, doing the same to both sides. For $y = 3x + 2$: subtract 2 to get $y - 2 = 3x$, then divide by 3 to get $x = \\frac{y - 2}{3}$. If the letter is squared, take the square root as the last step. Keep the whole of one side together when you divide.",
          },
          {
            heading: "Linear inequalities",
            body: "Solve inequalities like equations: do the same to both sides. The sign stays the same unless you multiply or divide by a **negative** number, when it must be reversed. For $3x - 5 \\le 16$: add 5 to get $3x \\le 21$, then divide by 3 to get $x \\le 7$. For a double inequality like $-3 < 2x + 1 \\le 9$, do the same to all three parts: $-4 < 2x \\le 8$, so $-2 < x \\le 4$. Integer solutions are the whole numbers in that range.",
          },
        ],
        keyFormulas: [
          { name: "Inequality rule", statement: "Reverse the inequality sign when multiplying or dividing by a negative number." },
        ],
        workedExample: {
          problem: "Solve $-3 < 2x + 1 \\le 9$ and list the integer solutions.",
          solution: "Subtract 1 from each part: $-4 < 2x \\le 8$. Divide each part by 2: $-2 < x \\le 4$. The integers are $-1, 0, 1, 2, 3, 4$.",
        },
      },
      questions: [
        {
          id: "edm9-u2-formulae-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make $x$ the subject of $y = 3x + 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = \\dfrac{y - 2}{3}$" },
              { id: "b", text: "$x = \\dfrac{y}{3} - 2$" },
              { id: "c", text: "$x = 3y - 2$" },
              { id: "d", text: "$x = \\dfrac{y + 2}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Inverse operations", statement: "Undo operations in reverse order, doing the same to both sides." }],
            steps: [
              { reasoning: "Subtract 2 from both sides.", working: "y - 2 = 3x", marks: 1, markCode: "M" },
              { reasoning: "Divide the whole of the left side by 3.", working: "x = \\frac{y - 2}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = \\frac{y - 2}{3}$",
            commonErrors: ["Dividing only $y$ by 3, as in (b).", "Adding 2 instead of subtracting, as in (d)."],
          },
        },
        {
          id: "edm9-u2-formulae-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve the inequality $3x - 5 \\le 16$. Write down the largest integer value of $x$ that satisfies it.",
          response: { type: "numeric", parts: [{ label: "Largest integer $x$", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Solving inequalities", statement: "Do the same to both sides; reverse the sign only for a negative multiplier or divisor." }],
            steps: [
              { reasoning: "Add 5 to both sides and then divide by 3.", working: "3x \\le 21 \\Rightarrow x \\le 7", marks: 1, markCode: "M" },
              { reasoning: "The largest integer satisfying $x \\le 7$ is 7.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\le 7$; the largest integer is $7$.",
            commonErrors: ["Subtracting 5 instead of adding it.", "Giving 6 because the sign is mistaken for $<$."],
          },
        },
        {
          id: "edm9-u2-formulae-inequalities-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The formula $v^2 = u^2 + 2as$ is used in physics. Make $a$ the subject of the formula, then work out the value of $a$ when $v = 13$, $u = 5$ and $s = 8$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Inverse operations", statement: "Undo operations in reverse order, doing the same to both sides." }],
            steps: [
              { reasoning: "Subtract $u^2$ from both sides.", working: "v^2 - u^2 = 2as", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $2s$.", working: "a = \\frac{v^2 - u^2}{2s}", marks: 1, markCode: "A" },
              { reasoning: "Substitute the values: $13^2 = 169$, $5^2 = 25$.", working: "a = \\frac{169 - 25}{16} = \\frac{144}{16} = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = \\frac{v^2 - u^2}{2s}$; $a = 9$.",
            commonErrors: ["Writing $(v - u)^2$ instead of $v^2 - u^2$.", "Dividing by $2$ and $s$ separately in the wrong order."],
            examinerNote: "Check: $25 + 2 \\times 9 \\times 8 = 25 + 144 = 169 = 13^2$.",
          },
        },
        {
          id: "edm9-u2-formulae-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The formula $C = \\dfrac{5(F - 32)}{9}$ converts a temperature of $F$ degrees Fahrenheit into $C$ degrees Celsius.",
          parts: [
            { label: "a", prompt: "Make $F$ the subject of the formula.", marks: 3 },
            { label: "b", prompt: "Work out the temperature in degrees Fahrenheit when $C = 35$.", marks: 2 },
            { label: "c", prompt: "Solve the inequality $4x - 7 > 2x + 5$. Enter the critical value that $x$ must be greater than.", marks: 2 },
            { label: "d", prompt: "Solve $-3 < 2x + 1 \\le 9$. Work out the sum of all the integer values of $x$ that satisfy it.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) temperature in °F", answer: 95 },
              { label: "(c) critical value", answer: 6 },
              { label: "(d) sum of integers", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo operations in reverse order, doing the same to both sides." },
              { kind: "principle", name: "Solving inequalities", statement: "Do the same to every part; reverse the sign only for a negative multiplier or divisor." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply both sides by 9.", working: "9C = 5(F - 32)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide both sides by 5.", working: "\\frac{9C}{5} = F - 32", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add 32 to both sides.", working: "F = \\frac{9C}{5} + 32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $C = 35$.", working: "F = \\frac{9 \\times 35}{5} + 32 = 63 + 32", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 95", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract $2x$ and add 7 to both sides.", working: "2x > 12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 2.", working: "x > 6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract 1 from each part, then divide each part by 2.", working: "-4 < 2x \\le 8 \\Rightarrow -2 < x \\le 4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "List the integers in the range: $-1, 0, 1, 2, 3, 4$.", working: "-1, 0, 1, 2, 3, 4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add them.", working: "-1 + 0 + 1 + 2 + 3 + 4 = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $F = \\frac{9C}{5} + 32$. (b) $95^\\circ$F. (c) $x > 6$. (d) $-2 < x \\le 4$; integers sum to $9$.",
            commonErrors: ["Adding 32 before multiplying out, giving $F = \\frac{9(C + 32)}{5}$.", "Including $-2$ because the left sign is mistaken for $\\le$.", "Excluding 4 because the right sign is mistaken for $<$."],
            examinerNote: "Part (b) ft from a correct rearrangement. Allow substitution into the original formula.",
          },
        },
      ],
    },
  ],
};
