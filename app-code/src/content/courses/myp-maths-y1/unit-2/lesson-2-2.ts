import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypm1-u2-lesson-2-2",
  code: "2-2",
  title: "Linear Equations",
  goal: "I CAN solve one- and two-step equations, check my solutions, and form and solve equations from real-life problems and geometry.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Equation", definition: "A statement that two expressions are equal, such as $3x+1=10$. It contains an equals sign." },
    { term: "Unknown", definition: "The variable in an equation whose value we want to find." },
    { term: "Solution", definition: "The value of the unknown that makes the equation true." },
    { term: "Inverse operation", definition: "An operation that undoes another, such as subtraction undoing addition, or division undoing multiplication." },
    { term: "Balance method", definition: "Solving an equation by doing the same operation to both sides so that they stay equal." },
    { term: "Check", definition: "Substituting a solution back into the original equation to see whether both sides are equal." },
  ],
  concepts: [
    {
      id: "mypm1-u2-solving-equations",
      title: "Solving one- and two-step equations",
      skill: "Solve linear equations using inverse operations and check the solution.",
      lesson: {
        sections: [
          {
            heading: "The balance method",
            body: "An equation is like a set of balanced scales. Whatever you do to one side you must do to the other. To solve $x+7=15$, subtract 7 from both sides to get $x=8$.",
          },
          {
            heading: "Two-step equations",
            body: "Undo the addition or subtraction first, then undo the multiplication or division. To solve $3x-4=11$: add 4 to both sides, $3x=15$, then divide both sides by 3, $x=5$. For $\\frac{x}{4}+2=6$ subtract 2 to get $\\frac{x}{4}=4$, then multiply by 4 to get $x=16$.",
          },
          {
            heading: "Checking your answer",
            body: "Substitute the solution into the **original** equation. If both sides are equal the solution is correct. For $3x-4=11$ with $x=5$: $3\\times5-4=11$, which is true.",
          },
        ],
        keyFormulas: [
          { name: "Balance method", statement: "Do the same operation to both sides of an equation" },
          { name: "Order of solving", statement: "Undo $+$ and $-$ first, then undo $\\times$ and $\\div$" },
        ],
        workedExample: {
          problem: "Solve $5-2x=11$ and check your answer.",
          solution: "Subtract 5 from both sides: $-2x=6$. Divide both sides by $-2$: $x=-3$. Check: $5-2\\times(-3)=5+6=11$, which is correct.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-solving-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x-4=11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$" },
              { id: "b", text: "$x=\\frac{7}{3}$" },
              { id: "c", text: "$x=3$" },
              { id: "d", text: "$x=15$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides to keep the equation balanced." },
            ],
            steps: [
              { reasoning: "Add 4 to both sides, then divide both sides by 3.", working: "3x=15,\\quad x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=5$",
            commonErrors: ["Subtracting 4 instead of adding, giving $3x=7$ and $x=\\frac{7}{3}$.", "Forgetting to divide by 3 and giving 15."],
            examinerNote: "B1 for x = 5.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x}{4}-3=5$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo addition and subtraction first, then multiplication and division." },
            ],
            steps: [
              { reasoning: "Add 3 to both sides.", working: "\\frac{x}{4}=8", marks: 1, markCode: "M" },
              { reasoning: "Multiply both sides by 4.", working: "x=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=32$",
            commonErrors: ["Dividing 8 by 4 to get 2.", "Subtracting 3 from 5 to get 2."],
            examinerNote: "M1 for x/4 = 8. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5-2x=11$ and check your solution by substitution.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides." },
              { kind: "law", name: "Signs in division", statement: "A positive number divided by a negative number is negative." },
            ],
            steps: [
              { reasoning: "Subtract 5 from both sides.", working: "-2x=6", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $-2$.", working: "x=-3", marks: 1, markCode: "A" },
              { reasoning: "Check by substituting into the original equation: both sides equal 11.", working: "5-2\\times(-3)=5+6=11", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=-3$",
            commonErrors: ["Writing $2x=6$ and $x=3$ (losing the negative sign).", "Subtracting 5 from 11 to get $-6$."],
            examinerNote: "R1 requires a correct substitution with both sides evaluated.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Leila is practising solving equations.",
          parts: [
            { label: "a", prompt: "Solve $3x+5=26$.", marks: 2 },
            { label: "b", prompt: "Show how to check that your answer to (a) is correct.", marks: 2 },
            { label: "c", prompt: "Solve $\\frac{x}{4}-3=5$ for $x$ (that is, find $x$ when a number divided by 4, minus 3, equals 5).", marks: 2 },
            { label: "d", prompt: "Leila solves $2x+6=20$ and writes $2x=26$, so $x=13$. Explain her mistake and find the correct value of $x$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$", answer: 7 },
              { label: "(c) $x$", answer: 32 },
              { label: "(d) correct $x$", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides." },
              { kind: "principle", name: "Checking", statement: "A solution is correct if substituting it makes both sides equal." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract 5 from both sides.", working: "3x=21", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide both sides by 3.", working: "x=7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=7$ into the left-hand side of the original equation.", working: "3\\times7+5=21+5=26", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The result equals the right-hand side, so the solution is correct.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Add 3 to both sides.", working: "\\frac{x}{4}=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply both sides by 4.", working: "x=32", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Leila added 6 to the right-hand side. To undo $+6$ she must subtract 6 from both sides.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Subtract 6 then divide by 2.", working: "2x=14,\\quad x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=7$ (b) $3\\times7+5=26$, so correct (c) $x=32$ (d) She added 6 instead of subtracting 6; $x=7$.",
            commonErrors: ["Dividing only the $3x$ term by 3.", "Using the same operation instead of the inverse operation (adding when she should subtract)."],
            examinerNote: "In (d) the explanation must state that the inverse (subtracting) is needed.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+9=14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=23$" },
              { id: "b", text: "$x=5$" },
              { id: "c", text: "$x=-5$" },
              { id: "d", text: "$x=9$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides to keep the equation balanced." },
            ],
            steps: [
              { reasoning: "Subtract 9 from both sides: $x=14-9=5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=5$",
            commonErrors: ["Adding 9 to get 23.", "Subtracting 14 from 9 to get $-5$."],
            examinerNote: "B1 for x = 5.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $4x=28$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=7$" },
              { id: "b", text: "$x=32$" },
              { id: "c", text: "$x=112$" },
              { id: "d", text: "$x=24$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo multiplication by dividing both sides by the same number." },
            ],
            steps: [
              { reasoning: "Divide both sides by 4: $x=28\\div4=7$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=7$",
            commonErrors: ["Multiplying 28 by 4 to get 112.", "Subtracting 4 to get 24."],
            examinerNote: "B1 for x = 7.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $2x+7=19$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=6$" },
              { id: "b", text: "$x=13$" },
              { id: "c", text: "$x=12$" },
              { id: "d", text: "$x=5.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of solving", statement: "Undo addition first, then multiplication." },
            ],
            steps: [
              { reasoning: "Subtract 7 then divide by 2: $2x=12$, $x=6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=6$",
            commonErrors: ["Subtracting 7 from 19 incorrectly to get 26, giving 13.", "Dividing 19 by 2 first."],
            examinerNote: "B1 for x = 6.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x-3=22$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Add 3 to both sides.", working: "5x=25", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by 5.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Subtracting 3 to get $5x=19$.", "Dividing 22 by 5 first."],
            examinerNote: "M1 for 5x = 25. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x}{3}+4=9$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo addition first, then undo division by multiplying both sides." },
            ],
            steps: [
              { reasoning: "Subtract 4 from both sides.", working: "\\frac{x}{3}=5", marks: 1, markCode: "M" },
              { reasoning: "Multiply both sides by 3.", working: "x=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=15$",
            commonErrors: ["Dividing 5 by 3 to get $\\frac{5}{3}$.", "Subtracting 4 from 9 incorrectly."],
            examinerNote: "M1 for x/3 = 5. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is the solution of $7-x=3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=10$" },
              { id: "b", text: "$x=4$" },
              { id: "c", text: "$x=-4$" },
              { id: "d", text: "$x=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Subtracting $x$ from both sides gives $7-3=x$, or add $x$ then subtract 3." },
            ],
            steps: [
              { reasoning: "Add $x$ to both sides: $7=3+x$, so $x=4$. Check: $7-4=3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=4$",
            commonErrors: ["Writing $x=7-3=4$ correctly but choosing 10 by adding."],
            examinerNote: "B1 for x = 4.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\frac{x}{4}-3=5$ and check your solution by substituting it into the original equation.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Undo the subtraction first, then undo the division." },
              { kind: "principle", name: "Checking", statement: "A solution is correct if substituting it makes both sides equal." },
            ],
            steps: [
              { reasoning: "Add 3 to both sides.", working: "\\frac{x}{4}=8", marks: 1, markCode: "M" },
              { reasoning: "Multiply both sides by 4.", working: "x=32", marks: 1, markCode: "A" },
              { reasoning: "Check: $\\frac{32}{4}-3=8-3=5$, which matches the right-hand side.", working: "8-3=5", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=32$",
            commonErrors: ["Writing $\\frac{x}{4}=2$ by subtracting 3 from 5.", "Dividing 8 by 4 to get 2."],
            examinerNote: "R1 requires a correct substitution with both sides evaluated.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation has the solution $x=-2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x+4=10$" },
              { id: "b", text: "$5x-1=-11$" },
              { id: "c", text: "$\\frac{x}{2}-3=2$" },
              { id: "d", text: "$2x+5=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking a solution", statement: "Substitute the value into each equation; the solution makes both sides equal." },
            ],
            steps: [
              { reasoning: "Test each at $x=-2$: (a) $3\\times(-2)+4=-2\\neq10$; (b) $5\\times(-2)-1=-11$, true; (c) $\\frac{-2}{2}-3=-4\\neq2$; (d) $2\\times(-2)+5=1\\neq3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Testing only one equation."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Chloe is solving $6x+5=29$.",
          parts: [
            { label: "a", prompt: "Write down the first step Chloe should do to isolate the term containing $x$.", marks: 1 },
            { label: "b", prompt: "Complete the solution to find $x$.", marks: 1 },
            { label: "c", prompt: "Explain why she must subtract 5 from both sides rather than only from the left.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Whatever is done to one side of an equation must be done to the other to keep them equal." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract 5 from both sides to undo the $+5$.", working: "6x=24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide both sides by 6.", working: "x=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "If only the left side changes, the two sides are no longer equal; the equation would no longer represent the same balance.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) subtract 5 from both sides (b) $x=4$ (c) the sides must stay equal",
            commonErrors: ["Subtracting 5 only from the left.", "Dividing by 5 instead of 6."],
            examinerNote: "In (c) the reason must refer to keeping the equation balanced (oe).",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x-8=3$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo subtraction by adding the same number to both sides." },
            ],
            steps: [
              { reasoning: "Add 8 to both sides.", working: "x=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x=11$",
            commonErrors: ["Subtracting 8 to get $x=-5$."],
            examinerNote: "B1 for x = 11.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Jamal solves three equations in his homework.",
          parts: [
            { label: "a", prompt: "Solve $3x+8=29$.", marks: 1 },
            { label: "b", prompt: "Solve $\\frac{x}{5}-2=4$.", marks: 1 },
            { label: "c", prompt: "Solve $9-2x=1$.", marks: 1 },
            { label: "d", prompt: "For one of these equations, Jamal writes $x=4$ for $9-2x=1$ without checking. Show whether his answer is correct, and if not, give the correct value.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$", answer: 7 },
              { label: "(b) $x$", answer: 30 },
              { label: "(c) correct $x$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "Undo addition/subtraction first, then multiplication/division." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract 8, then divide by 3: $3x=21$.", working: "x=7", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add 2, then multiply by 5: $\\frac{x}{5}=6$.", working: "x=30", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract 9 from both sides: $-2x=-8$, divide by $-2$.", working: "x=4", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Check: $9-2\\times4=9-8=1$, which equals the right-hand side, so $x=4$ is correct.", working: "1=1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=7$ (b) $x=30$ (c) $x=4$ (d) correct: $9-8=1$",
            commonErrors: ["In (b) dividing 6 by 5 instead of multiplying.", "In (d) assuming the unchecked answer is wrong."],
            examinerNote: "In (d) a correct substitution check is required; accepting or rejecting without checking earns nothing.",
          },
        },
        {
          id: "mypm1-u2-solving-equations-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Leo solves $4x-7=13$ and writes the following working.",
          parts: [
            { label: "a", prompt: "Write down the first correct step Leo should do.", marks: 1 },
            { label: "b", prompt: "Complete the solution to find $x$.", marks: 1 },
            { label: "c", prompt: "Leo instead writes $4x-7=13 \\Rightarrow 4x=13-7=6$, so $x=1.5$. Explain his mistake and give the correct value of $x$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance method", statement: "To undo $-7$ you must add 7 to both sides, not subtract it." },
            ],
            steps: [
              { part: "a", reasoning: "Add 7 to both sides to undo the subtraction.", working: "4x=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide both sides by 4.", working: "x=5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Leo subtracted 7 from the right-hand side instead of adding; to undo $-7$ the inverse is $+7$ on both sides.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Correct working: $4x=13+7=20$, so $x=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) add 7 to both sides (b) $x=5$ (c) he subtracted instead of adding; correct $x=5$",
            commonErrors: ["Writing $4x=13-7$ as the first step.", "Dividing 6 by 4 to get 1.5 without noticing the sign error."],
            examinerNote: "In (c) the explanation must name the inverse operation (add, not subtract).",
          },
        },
      ],
    },
    {
      id: "mypm1-u2-forming-equations",
      title: "Forming and solving equations from problems",
      skill: "Form an equation from a real-life or geometric problem, solve it and interpret the answer.",
      lesson: {
        sections: [
          {
            heading: "Turning words into equations",
            body: "Choose a letter for the unknown and say what it means, for example \"let $n$ be the number\". Then write the facts as an equation. \"A number doubled, plus 4, gives 18\" becomes $2n+4=18$.",
          },
          {
            heading: "Equations from geometry",
            body: "Use known facts: the angles in a triangle add up to $180^\\circ$, and the perimeter is the sum of the side lengths. If the angles are $x$, $2x$ and $3x$, then $x+2x+3x=180$, so $6x=180$ and $x=30$.",
          },
          {
            heading: "Interpreting the answer",
            body: "Solve the equation, then answer the original question using the correct units, and check that the answer makes sense. A length cannot be negative and a number of people must be a whole number.",
          },
        ],
        keyFormulas: [
          { name: "Angles in a triangle", statement: "The three angles add up to $180^\\circ$" },
          { name: "Perimeter", statement: "Sum of all the side lengths" },
        ],
        workedExample: {
          problem: "A taxi costs 4 euros plus 2 euros per kilometre. A journey costs 18 euros. How long is the journey?",
          solution: "Let $d$ be the distance in km. Then $4+2d=18$. Subtract 4: $2d=14$. Divide by 2: $d=7$. The journey is 7 km. Check: $4+2\\times7=18$.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-forming-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number is doubled and then 4 is added. The result is 18. Which equation represents this, where $n$ is the number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2n+4=18$" },
              { id: "b", text: "$2(n+4)=18$" },
              { id: "c", text: "$n+8=18$" },
              { id: "d", text: "$4n+2=18$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Translate each operation, in order, into algebra." },
            ],
            steps: [
              { reasoning: "Doubling gives $2n$, then adding 4 gives $2n+4$, which equals 18.", working: "2n+4=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2n+4=18$",
            commonErrors: ["Adding 4 before doubling, giving $2(n+4)$.", "Swapping the 2 and the 4."],
            examinerNote: "B1 for 2n + 4 = 18.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The three angles of a triangle are $x^\\circ$, $2x^\\circ$ and $3x^\\circ$. Form an equation and solve it to find the size of the smallest angle, in degrees.",
          response: { type: "numeric", parts: [{ label: "Smallest angle", answer: 30, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Add the three angles and set the total equal to 180.", working: "x+2x+3x=180,\\quad 6x=180", marks: 1, markCode: "M" },
              { reasoning: "Divide by 6. The smallest angle is $x$.", working: "x=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30^\\circ$",
            commonErrors: ["Setting the sum equal to 360.", "Giving $3x=90$ (the largest angle) as the smallest."],
            examinerNote: "M1 for 6x = 180 oe. A1 for 30.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone plan costs 12 euros per month plus 0.50 euros for each gigabyte (GB) of data used. Jin's bill for one month was 20 euros. Form an equation and solve it to find how many GB Jin used.",
          response: { type: "numeric", parts: [{ label: "Data used", answer: 16, unit: "GB" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Fixed charge plus rate times quantity equals total cost." },
            ],
            steps: [
              { reasoning: "Let $g$ be the number of GB. The cost is the fixed charge plus 0.50 for each GB.", working: "12+0.5g=20", marks: 1, markCode: "M" },
              { reasoning: "Subtract 12 from both sides.", working: "0.5g=8", marks: 1, markCode: "M" },
              { reasoning: "Divide by 0.5.", working: "g=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16 GB",
            commonErrors: ["Writing $12g+0.5=20$.", "Dividing 8 by 2 instead of by 0.5, giving 4."],
            examinerNote: "Accept 12 + 0.5g = 20 or an equivalent equation.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "At a museum, a child ticket costs 3 euros less than an adult ticket. Let an adult ticket cost $p$ euros. A family buys tickets for 2 adults and 3 children and pays 41 euros in total.",
          parts: [
            { label: "a", prompt: "Show that the information can be written as the equation $5p-9=41$.", marks: 2 },
            { label: "b", prompt: "Solve the equation to find the price of an adult ticket, in euros.", marks: 2 },
            { label: "c", prompt: "Find the price of a child ticket and check that the family's total is 41 euros.", marks: 2 },
            { label: "d", prompt: "A school group has the same number, $n$, of adults and children and pays 136 euros. Form an equation and solve it to find $n$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Adult ticket (euros)", answer: 10 },
              { label: "(c) Child ticket (euros)", answer: 7 },
              { label: "(d) $n$", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Express every quantity using the same unknown." },
              { kind: "principle", name: "Balance method", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "A child ticket costs $p-3$ euros. The total cost is 2 adult plus 3 child tickets.", working: "2p+3(p-3)=41", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and collect like terms.", working: "2p+3p-9=41\\Rightarrow 5p-9=41", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Add 9 to both sides.", working: "5p=50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 5.", working: "p=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A child ticket is 3 euros less than 10 euros.", working: "10-3=7", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Check the total cost.", working: "2\\times10+3\\times7=20+21=41", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Each adult and child pair costs $10+7=17$ euros, so the total is $17n$.", working: "17n=136", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 17.", working: "n=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2p+3(p-3)=5p-9=41$ (b) 10 euros (c) 7 euros; $20+21=41$ (d) $17n=136$, $n=8$",
            commonErrors: ["Writing the child price as $p+3$.", "Expanding $3(p-3)$ as $3p-3$.", "In (d), forgetting that adults and children have different prices."],
            examinerNote: "In (a) the expansion of 3(p - 3) must be seen for the R mark.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number is tripled and then 6 is subtracted. The result is 21. Which equation represents this, where $n$ is the number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n-6=21$" },
              { id: "b", text: "$3(n-6)=21$" },
              { id: "c", text: "$6n-3=21$" },
              { id: "d", text: "$3n+6=21$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Translate each operation, in order, into algebra." },
            ],
            steps: [
              { reasoning: "Tripling gives $3n$, then subtracting 6 gives $3n-6$, which equals 21.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n-6=21$",
            commonErrors: ["Subtracting inside the bracket to get $3(n-6)$.", "Swapping 3 and 6 to get $6n-3$."],
            examinerNote: "B1 for 3n - 6 = 21.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle has length $x$ cm and width 4 cm less than the length. Which expression gives its perimeter, in cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x-4$" },
              { id: "b", text: "$2x-4$" },
              { id: "c", text: "$4x-8$" },
              { id: "d", text: "$x-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
            ],
            steps: [
              { reasoning: "Width is $x-4$. Perimeter $=2x+2(x-4)=2x+2x-8=4x-8$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4x-8$",
            commonErrors: ["Forgetting to double the width, giving $2x+(x-4)=3x-4$.", "Expanding $2(x-4)$ as $2x-4$."],
            examinerNote: "B1 for 4x - 8.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The angles of a quadrilateral are $x^\\circ$, $2x^\\circ$, $3x^\\circ$ and $4x^\\circ$. Which equation uses the fact that the angles add up to $360^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+2x+3x+4x=180$" },
              { id: "b", text: "$x+2x+3x+4x=360$" },
              { id: "c", text: "$10x=360$ only, with no sum" },
              { id: "d", text: "$x\\times2x\\times3x\\times4x=360$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a quadrilateral", statement: "The angles in a quadrilateral add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Add the four angle expressions and set equal to 360; $x+2x+3x+4x=10x$.", working: "10x=360", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x+2x+3x+4x=360$",
            commonErrors: ["Using 180, the triangle sum.", "Multiplying the angles instead of adding."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A number $n$ is doubled, then 5 is added, and the result is multiplied by 3 to give 42. Form an equation and solve it to find $n$.",
          response: { type: "numeric", parts: [{ label: "$n$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Translate each operation in order: double, add 5, multiply by 3." },
            ],
            steps: [
              { reasoning: "Write the operations in order: $3(2n+5)=42$.", working: "3(2n+5)=42", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3, subtract 5, divide by 2.", working: "2n+5=14,\\quad 2n=9,\\quad n=4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=4.5$",
            commonErrors: ["Writing $3\\times2n+5=42$.", "Solving to $n=4$ by arithmetic slips."],
            examinerNote: "M1 for a correct equation. A1 for n = 4.5.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cinema sells adult tickets for 9 euros and child tickets for 6 euros. A group buys $a$ adult tickets and $c$ child tickets and pays 75 euros in total. Form an equation and use it to find how much 4 adult tickets and 2 child tickets would cost.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 48, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Total cost = (number of adult tickets $\\times$ 9) + (number of child tickets $\\times$ 6)." },
            ],
            steps: [
              { reasoning: "The equation is $9a+6c=75$. For the new question, substitute $a=4$ and $c=2$ into the cost expression (no need to solve for $a$ and $c$).", working: "9\\times4+6\\times2=36+12", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$ euros",
            commonErrors: ["Trying to solve $9a+6c=75$ for specific values when the question only asks for a cost.", "Using 75 as the cost of 4 adult and 2 child tickets."],
            examinerNote: "M1 for substituting 4 and 2 into the cost expression. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Three consecutive whole numbers add up to 48. If the smallest is $n$, which equation finds $n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n+(n+1)+(n+2)=48$" },
              { id: "b", text: "$n+(n+1)+(n+3)=48$" },
              { id: "c", text: "$n+2n+3n=48$" },
              { id: "d", text: "$n\\times(n+1)\\times(n+2)=48$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Consecutive numbers differ by 1; write each in terms of $n$ and add." },
            ],
            steps: [
              { reasoning: "The three numbers are $n$, $n+1$ and $n+2$; their sum is 48.", working: "n+(n+1)+(n+2)=48", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $n+(n+1)+(n+2)=48$",
            commonErrors: ["Using $n+3$ for the third number.", "Multiplying instead of adding."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The perimeter of an isosceles triangle is 30 cm. Each of the two equal sides is $x$ cm and the base is 6 cm longer than each equal side.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 8, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perimeter", statement: "The perimeter is the sum of all the side lengths." },
            ],
            steps: [
              { reasoning: "The base is $x+6$ cm; the perimeter equation is $x+x+(x+6)=30$.", working: "3x+6=30", marks: 1, markCode: "M" },
              { reasoning: "Subtract 6 from both sides.", working: "3x=24", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "x=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$ cm (sides 8 cm, 8 cm, 14 cm)",
            commonErrors: ["Writing the base as $x-6$.", "Setting the perimeter equal to 60."],
            examinerNote: "M1 for 3x + 6 = 30 oe. M1 for 3x = 24. A1 for x = 8.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A number $n$ is multiplied by 4 and then 7 is added. The result is 31. Which equation gives $n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4n+7=31$" },
              { id: "b", text: "$4(n+7)=31$" },
              { id: "c", text: "$7n+4=31$" },
              { id: "d", text: "$4n-7=31$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Translate each operation, in order, into algebra." },
            ],
            steps: [
              { reasoning: "Multiply by 4 gives $4n$, then add 7 gives $4n+7=31$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4n+7=31$",
            commonErrors: ["Adding 7 before multiplying, giving $4(n+7)$."],
            examinerNote: "B1 for 4n + 7 = 31.",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A taxi firm charges 5 euros plus 1.50 euros per kilometre. Dev's journey cost 20 euros.",
          parts: [
            { label: "a", prompt: "Let $d$ be the distance in km. Write down an equation for the cost of Dev's journey.", marks: 1 },
            { label: "b", prompt: "Solve the equation to find $d$.", marks: 1 },
            { label: "c", prompt: "Explain what the number 5 represents in the context of the journey.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Fixed charge plus rate times distance equals total cost." },
            ],
            steps: [
              { part: "a", reasoning: "Fixed charge 5 plus 1.50 per km.", working: "5+1.5d=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract 5, then divide by 1.5: $1.5d=15$.", working: "d=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The 5 euros is the fixed charge paid no matter how far the journey is (the flag fall).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $5+1.5d=20$ (b) $d=10$ km (c) the fixed charge",
            commonErrors: ["Writing $5d+1.5=20$.", "Dividing 15 by 5 instead of 1.5."],
            examinerNote: "In (c) accept 'starting fare' or 'flag fall' or 'fixed charge' (oe).",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number is halved and then 3 is added. The result is 11. Which equation gives the number $n$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{n}{2}+3=11$" },
              { id: "b", text: "$\\frac{n+3}{2}=11$" },
              { id: "c", text: "$2n+3=11$" },
              { id: "d", text: "$\\frac{n}{2}-3=11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Translate each operation, in order, into algebra." },
            ],
            steps: [
              { reasoning: "Halving gives $\\frac{n}{2}$, then adding 3 gives $\\frac{n}{2}+3=11$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{n}{2}+3=11$",
            commonErrors: ["Adding 3 before halving, giving $\\frac{n+3}{2}$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle's length is 3 cm more than twice its width. The perimeter is 42 cm.",
          parts: [
            { label: "a", prompt: "Let $w$ be the width in cm. Write down an expression for the length.", marks: 1 },
            { label: "b", prompt: "Form an equation for the perimeter and solve it to find $w$.", marks: 2 },
            { label: "c", prompt: "Write down the length of the rectangle.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Width $w$", answer: 6, unit: "cm" },
              { label: "(c) Length", answer: 15, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Express every quantity using the same unknown $w$." },
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
            ],
            steps: [
              { part: "a", reasoning: "Twice the width plus 3.", working: "l=2w+3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Perimeter equation: $2(2w+3)+2w=42$, which simplifies to $6w+6=42$.", working: "6w=36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 6.", working: "w=6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into the length expression.", working: "2\\times6+3=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $l=2w+3$ (b) $w=6$ cm (c) $15$ cm",
            commonErrors: ["Writing the length as $2w-3$.", "Expanding $2(2w+3)$ as $2w+3$."],
            examinerNote: "Follow through from (b) in (c) (ft).",
          },
        },
        {
          id: "mypm1-u2-forming-equations-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sofia is asked: \"Three consecutive even numbers add up to 60. Find the numbers.\" She writes $n+(n+2)+(n+4)=60$ and solves to get $n=18$, giving the numbers 18, 20 and 22.",
          parts: [
            { label: "a", prompt: "Check whether Sofia's answer is correct by adding the three numbers.", marks: 1 },
            { label: "b", prompt: "Explain why her equation and answer are correct (or identify the error if they are not).", marks: 1 },
            { label: "c", prompt: "Write down an alternative equation using $m$ for the middle number, and solve it.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) Middle number $m$", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming equations", statement: "Consecutive even numbers differ by 2." },
            ],
            steps: [
              { part: "a", reasoning: "Add the three numbers.", working: "18+20+22=60", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Even numbers differ by 2, so $n$, $n+2$, $n+4$ is correct; the answer checks out.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "With $m$ the middle number, the numbers are $m-2$, $m$, $m+2$, summing to $3m=60$.", working: "3m=60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 3.", working: "m=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $60$, correct (b) even numbers differ by 2, so her equation is right (c) $3m=60$, $m=20$",
            commonErrors: ["Using $n+1$ and $n+2$ for consecutive even numbers.","Forgetting that $m$ must be even."],
            examinerNote: "In (c) accept $m-2+m+m+2=60$ written out fully.",
          },
        },
      ],
    },
  ],
};
