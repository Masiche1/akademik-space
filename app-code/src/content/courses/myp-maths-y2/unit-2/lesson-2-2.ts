import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypm2-u2-lesson-2-2",
  code: "2-2",
  title: "Equations and Inequalities",
  goal: "I CAN solve equations with unknowns on both sides, brackets and simple fractions, and solve, represent and form linear inequalities from real-life contexts.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Equation", definition: "A statement that two expressions are equal, such as $3x+4=2x+9$. It is true only for certain values of the unknown." },
    { term: "Inverse operation", definition: "An operation that undoes another, such as subtraction undoing addition." },
    { term: "Inequality", definition: "A statement comparing two expressions using $<$, $>$, $\\le$ or $\\ge$, such as $x>4$." },
    { term: "Solution set", definition: "All the values that make an inequality true. It is usually shown on a number line." },
    { term: "Integer solution", definition: "A whole-number value (positive, negative or zero) that satisfies an inequality." },
    { term: "Open and closed circle", definition: "On a number line, an open circle means the end value is not included ($<$ or $>$). A closed circle means it is included ($\\le$ or $\\ge$)." },
  ],
  concepts: [
    {
      id: "mypm2-u2-equations",
      title: "Equations with unknowns on both sides, brackets and fractions",
      skill: "Solve linear equations by balancing, including brackets and simple fractions.",
      lesson: {
        sections: [
          {
            heading: "Unknowns on both sides",
            body: "Do the same operation to both sides to keep the equation balanced. Collect the $x$ terms on one side and the numbers on the other. For $3x+4=2x+9$, subtract $2x$ from both sides to get $x+4=9$, then subtract 4 to get $x=5$. Check by substituting back: $3(5)+4=19$ and $2(5)+9=19$.",
          },
          {
            heading: "Brackets",
            body: "Expand brackets first, then collect terms. For $5(x-2)=3x+8$, expand to $5x-10=3x+8$, then $2x=18$, so $x=9$.",
          },
          {
            heading: "Simple fractions",
            body: "Remove a fraction by multiplying **every** term on both sides by the denominator. For $\\frac{2x+1}{3}=x+2$, multiply both sides by 3: $2x+1=3(x+2)=3x+6$. Then $x=-5$. Remember to multiply the whole right-hand side, including the 2.",
          },
        ],
        keyFormulas: [
          { name: "Balancing rule", statement: "Whatever you do to one side of an equation, do to the other" },
          { name: "Clearing a fraction", statement: "$\\frac{A}{n}=B$ becomes $A=nB$" },
        ],
        workedExample: {
          problem: "Solve $4(x+1)=2x+14$.",
          solution: "Expand: $4x+4=2x+14$. Subtract $2x$ from both sides: $2x+4=14$. Subtract 4: $2x=10$. Divide by 2: $x=5$. Check: $4(6)=24$ and $2(5)+14=24$.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x+4=2x+9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$" },
              { id: "b", text: "$x=13$" },
              { id: "c", text: "$x=-5$" },
              { id: "d", text: "$x=\\frac{13}{5}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides to keep the equation true." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ from both sides, then subtract 4 from both sides.", working: "3x+4=2x+9\\Rightarrow x+4=9\\Rightarrow x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=5$",
            commonErrors: ["Adding $2x$ instead of subtracting it, giving $5x=13$.", "Getting the sign wrong when moving 4, giving $x=13$.", "Moving terms to the wrong side, giving $x=-5$."],
            examinerNote: "B1 for x = 5.",
          },
        },
        {
          id: "mypm2-u2-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5(x-2)=3x+8$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$." },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Expand the bracket, then collect the $x$ terms on one side and the numbers on the other.", working: "5x-10=3x+8\\Rightarrow 2x=18", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by 2. Check: $5(9-2)=35$ and $3(9)+8=35$.", working: "x=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=9$",
            commonErrors: ["Expanding to $5x-2$ (multiplying only the first term).", "Writing $5x-10=3x+8$ then $8x=18$ by adding $3x$."],
            examinerNote: "M1 for 5x - 10 = 3x + 8 seen, with one correct rearrangement. A1 cao.",
          },
        },
        {
          id: "mypm2-u2-equations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{2x+1}{3}=x+2$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term on both sides by the denominator." },
              { kind: "law", name: "Expanding a bracket", statement: "$3(x+2)=3x+6$." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3, so the whole of the right-hand side is multiplied.", working: "2x+1=3(x+2)", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect terms: subtract $2x$ and subtract 6 from both sides.", working: "2x+1=3x+6\\Rightarrow -5=x", marks: 1, markCode: "M" },
              { reasoning: "State the solution. Check: left side $\\frac{-10+1}{3}=-3$, right side $-5+2=-3$.", working: "x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-5$",
            commonErrors: ["Writing $2x+1=x+2\\times3$, multiplying only the 2 by 3.", "Dividing by 3 instead of multiplying."],
            examinerNote: "M1 for 2x + 1 = 3(x + 2) oe. M1 for correct rearrangement. A1 cao.",
          },
        },
        {
          id: "mypm2-u2-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Lena has 45 euros in her savings box and adds 6 euros every week. Her friend Omar has 20 euros and adds 11 euros every week. After $w$ weeks, Lena has $45+6w$ euros.",
          parts: [
            { label: "a", prompt: "Write an expression, in terms of $w$, for the amount Omar has after $w$ weeks. Find his amount after 4 weeks, in euros.", marks: 2 },
            { label: "b", prompt: "Form and solve an equation to find after how many weeks Lena and Omar have the same amount.", marks: 2 },
            { label: "c", prompt: "How many euros does each of them have at that time? Check that both amounts agree.", marks: 2 },
            { label: "d", prompt: "Lena shares her savings equally among three charities. Each charity receives 21 euros. Form and solve an equation to find how many weeks Lena had saved.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Omar after 4 weeks (euros)", answer: 64 },
              { label: "(b) number of weeks", answer: 5 },
              { label: "(c) amount each (euros)", answer: 75 },
              { label: "(d) weeks saved", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an expression", statement: "Starting amount plus (weekly amount $\\times$ number of weeks)." },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Omar starts with 20 euros and adds 11 each week.", working: "20+11w", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Substitute $w=4$.", working: "20+11\\times4=64", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The amounts are equal, so set the two expressions equal.", working: "45+6w=20+11w", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect terms: subtract $6w$ and 20 from both sides, then divide by 5.", working: "25=5w\\Rightarrow w=5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $w=5$ into Lena's expression.", working: "45+6\\times5=75", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check with Omar's expression: $20+11\\times5=75$. Both agree.", working: "75", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Her total is divided by 3 and each share is 21.", working: "\\frac{45+6w}{3}=21", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply both sides by 3: $45+6w=63$, so $6w=18$.", working: "w=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20+11w$; 64 euros (b) $45+6w=20+11w$, so 5 weeks (c) 75 euros each (d) $\\frac{45+6w}{3}=21$, so $w=3$",
            commonErrors: ["Writing Omar's amount as $11+20w$ (swapping start and rate).", "Writing $\\frac{45+6w}{3}=21$ as $45+2w=21$ (dividing only one term).", "Collecting terms with the wrong signs, giving $-5w=25$ and $w=-5$."],
            examinerNote: "In (d) accept $45+6w=63$ if the division by 3 is clear. Award A1 in (b) only if both sides are balanced correctly.",
          },
        },
        {
          id: "mypm2-u2-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x+6=14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=10$" },
              { id: "c", text: "$x=8$" },
              { id: "d", text: "$x=20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides to keep the equation true." },
            ],
            steps: [
              { reasoning: "Subtract 6, then divide by 2.", working: "2x=8\\Rightarrow x=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=4$",
            commonErrors: ["Subtracting 6 from 14 but not dividing, giving 8."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-equations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x-5=10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=15$" },
              { id: "b", text: "$x=5$" },
              { id: "c", text: "$x=\\frac{5}{3}$" },
              { id: "d", text: "$x=-5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Add 5 to both sides, then divide by 3.", working: "3x=15\\Rightarrow x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=5$",
            commonErrors: ["Subtracting 5 instead of adding, giving $x=\\frac{5}{3}$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-equations-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4x+7=3x+19$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides to keep the equation true." },
            ],
            steps: [
              { reasoning: "Collect the $x$ terms on one side and the numbers on the other.", working: "4x+7=3x+19\\Rightarrow x=12", marks: 1, markCode: "M" },
              { reasoning: "Check: $4(12)+7=55$ and $3(12)+19=55$.", working: "x=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=12$",
            commonErrors: ["Subtracting $4x$ instead of $3x$, giving $-x+7=19$ and $x=-12$."],
            examinerNote: "M1 for a correct rearrangement. A1 cao.",
          },
        },
        {
          id: "mypm2-u2-equations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2(x+3)=16$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Expand the bracket, then solve.", working: "2x+6=16\\Rightarrow2x=10", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2 and check: $2(5+3)=16$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Dividing only the bracket by 2, giving $x+3=8$ incorrectly handled or $x+3=16$."],
            examinerNote: "M1 for $2x+6=16$ or $x+3=8$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u2-equations-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $\\frac{5x}{2}=10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=25$" },
              { id: "c", text: "$x=5$" },
              { id: "d", text: "$x=20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 2, then divide by 5.", working: "5x=20\\Rightarrow x=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=4$",
            commonErrors: ["Dividing 10 by 5 and forgetting the 2, giving 2 or 25."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-equations-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x+9=2x+20$ and check your answer by substituting it into the original equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and 9 from both sides.", working: "3x+9=2x+20\\Rightarrow x=11", marks: 1, markCode: "M" },
              { reasoning: "Check: left side $3(11)+9=42$ and right side $2(11)+20=42$, so the answer is correct.", working: "42=42", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=11$",
            commonErrors: ["Finding $x$ but not checking, or checking in a rearranged equation instead of the original."],
            examinerNote: "The R mark requires a check in the original equation.",
          },
        },
        {
          id: "mypm2-u2-equations-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{2x+1}{3}=x-1$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term on both sides by the denominator." },
              { kind: "law", name: "Expanding a bracket", statement: "$3(x-1)=3x-3$" },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3, so the whole right-hand side is multiplied.", working: "2x+1=3(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect terms.", working: "2x+1=3x-3\\Rightarrow x=4", marks: 1, markCode: "M" },
              { reasoning: "Check: left side $\\frac{9}{3}=3$ and right side $4-1=3$.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Writing $2x+1=x-1\\times3$, multiplying only part of the right side."],
            examinerNote: "M1 for $2x+1=3(x-1)$ oe. M1 for correct rearrangement. A1 cao.",
          },
        },
        {
          id: "mypm2-u2-equations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation has the solution $x=-2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x+8=2$" },
              { id: "b", text: "$2x-5=1$" },
              { id: "c", text: "$x+4=7$" },
              { id: "d", text: "$5x=10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing an equation", statement: "A solution makes both sides of the equation equal." },
            ],
            steps: [
              { reasoning: "Substitute $x=-2$: left side $3(-2)+8=2$, right side $2$, so it balances.", working: "-6+8=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3x+8=2$",
            commonErrors: ["Checking only one side of each equation."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-equations-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $4(x-1)=2x+6$ and show that your answer satisfies the equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Expand the bracket, then collect terms.", working: "4x-4=2x+6\\Rightarrow2x=10", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "Check in the original: $4(5-1)=16$ and $2(5)+6=16$.", working: "16=16", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Expanding to $4x-1$ instead of $4x-4$."],
            examinerNote: "The R mark requires a check showing both sides equal.",
          },
        },
        {
          id: "mypm2-u2-equations-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three times a number plus 4 is equal to twice the same number plus 13. Find the number, showing the equation you form and how you solve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an equation", statement: "Translate the words into an equation with one unknown." },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Let the number be $n$; 'three times the number plus 4' is $3n+4$ and 'twice the number plus 13' is $2n+13$.", working: "3n+4=2n+13", marks: 1, markCode: "M" },
              { reasoning: "Collect terms: subtract $2n$ and 4 from both sides.", working: "n=9", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "n=9", marks: 1, markCode: "A" },
              { reasoning: "Check: $3(9)+4=31$ and $2(9)+13=31$.", working: "31=31", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The number is $9$",
            commonErrors: ["Forming $3n+4=2n+13$ as $3(n+4)=2(n+13)$, distributing the multiplier over the whole phrase."],
            examinerNote: "The equation must be correct for M1. The check earns R1.",
          },
        },
        {
          id: "mypm2-u2-equations-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Tom has some savings. He receives 15 euros each month for pocket money and spends 9 euros each month on games. After $m$ months his savings are $40+15m-9m$ euros.",
          parts: [
            { label: "a", prompt: "Simplify the expression for Tom's savings.", marks: 1 },
            { label: "b", prompt: "Work out his savings after 8 months, in euros.", marks: 2 },
            { label: "c", prompt: "After how many months will his savings first reach 100 euros? Show the equation you solve.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Savings after 8 months", answer: 88, unit: "euros" },
              { label: "(c) Number of months", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an expression", statement: "Starting amount plus (monthly change $\\times$ months)." },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Collect the like terms $15m-9m=6m$.", working: "40+6m", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $m=8$.", working: "40+6\\times8=40+48", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "88", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the savings equal to 100 and solve.", working: "40+6m=100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract 40 and divide by 6.", working: "6m=60\\Rightarrow m=10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer and check: $40+6\\times10=100$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40+6m$ (b) $88$ euros (c) $m=10$ months",
            commonErrors: ["Writing $15m-9m=24m$.", "Solving $40+6m=100$ as $6m=140$."],
            examinerNote: "In (c) the equation must be formed before solving.",
          },
        },
        {
          id: "mypm2-u2-equations-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two friends, Ana and Ben, are saving money. Ana starts with 30 euros and saves 5 euros per week. Ben starts with 10 euros and saves 8 euros per week. After $w$ weeks, Ana has $30+5w$ euros.",
          parts: [
            { label: "a", prompt: "Write an expression for Ben's savings after $w$ weeks, and find his savings after 6 weeks.", marks: 2 },
            { label: "b", prompt: "Form and solve an equation to find after how many weeks they have the same amount.", marks: 3 },
            { label: "c", prompt: "How much does each have at that time? Check both expressions agree.", marks: 1 },
            { label: "d", prompt: "Ben gives Ana 10 euros. Write a new expression for each person's savings after the transfer, and find after how many more weeks they will again have the same amount.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Ben after 6 weeks", answer: 58, unit: "euros" },
              { label: "(b) Number of weeks", answer: 6.67, tolerance: 0.01 },
              { label: "(c) Amount each", answer: 63.33, tolerance: 0.01, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an expression", statement: "Starting amount plus (weekly amount $\\times$ weeks)." },
              { kind: "principle", name: "Balancing an equation", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Ben starts with 10 and adds 8 each week.", working: "10+8w", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Substitute $w=6$.", working: "10+8\\times6=58", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the two expressions equal.", working: "30+5w=10+8w", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect terms: subtract $5w$ and 10 from both sides.", working: "20=3w", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 3.", working: "w=\\frac{20}{3}\\approx6.67", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $w=\\frac{20}{3}$ into either expression: Ana gives $30+\\frac{100}{3}=\\frac{190}{3}$ and Ben gives $10+\\frac{160}{3}=\\frac{190}{3}$. They agree.", working: "\\frac{190}{3}\\text{ euros}\\approx63.33", marks: 1, markCode: "A" },
              { part: "d", reasoning: "After the transfer Ana has $30+5w-10=20+5w$ and Ben has $10+8w+10=20+8w$.", working: "20+5w,\\ 20+8w", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They can never be equal again because Ben always saves 3 euros more per week and they now start equal; the gap only grows.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10+8w$; 58 euros (b) $w=\\frac{20}{3}\\approx6.67$ weeks (c) about 63.33 euros each (d) they start equal but Ben saves more each week, so they are never equal again",
            commonErrors: ["In (d) solving $20+5w=20+8w$ to get $w=0$ and saying they are equal immediately after the transfer — technically true at that instant but the intended insight is they diverge."],
            examinerNote: "In (b) accept $w=6\\frac23$ or $6.67$. In (d) accept 'they are equal only at the moment of transfer' for full marks.",
          },
        },
      ],
    },
    {
      id: "mypm2-u2-inequalities",
      title: "Linear inequalities",
      skill: "Solve linear inequalities, represent them on a number line and form them from contexts.",
      lesson: {
        sections: [
          {
            heading: "Solving inequalities",
            body: "Solve an inequality like an equation: do the same to both sides. For $3x-4\\le11$, add 4 to get $3x\\le15$, then divide by 3 to get $x\\le5$. The solution is a set of values, not one number.",
          },
          {
            heading: "Negative numbers and the number line",
            body: "When you multiply or divide both sides by a **negative** number, reverse the inequality sign. For $7-2x>1$, subtract 7 to get $-2x>-6$, then divide by $-2$ to get $x<3$. Alternatively add $2x$ to both sides and avoid dividing by a negative. On a number line, use an open circle for $<$ and $>$ and a closed circle for $\\le$ and $\\ge$. An integer solution is a whole number in the solution set: for $x<3$ the largest integer is 2.",
          },
          {
            heading: "Forming inequalities from contexts",
            body: "Words such as \"at most\", \"no more than\" and \"up to\" mean $\\le$. \"At least\" and \"minimum\" mean $\\ge$. \"Fewer than\" means $<$. Define the variable, write the inequality, solve it, then interpret the answer in the context, for example choosing only whole numbers of people.",
          },
        ],
        keyFormulas: [
          { name: "Reversing the sign", statement: "If $a<b$ then $-a>-b$" },
          { name: "Sign meanings", statement: "$<$ less than, $\\le$ at most, $>$ more than, $\\ge$ at least" },
        ],
        workedExample: {
          problem: "Solve $2x+3\\ge11$ and list the integer solutions that are less than 8.",
          solution: "Subtract 3: $2x\\ge8$. Divide by 2: $x\\ge4$. On a number line this is a closed circle at 4 with a line going right. The integers from 4 that are less than 8 are 4, 5, 6 and 7.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+5>9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>4$" },
              { id: "b", text: "$x<4$" },
              { id: "c", text: "$x>14$" },
              { id: "d", text: "$x>-4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides. The sign stays the same unless you multiply or divide by a negative number." },
            ],
            steps: [
              { reasoning: "Subtract 5 from both sides.", working: "x+5>9\\Rightarrow x>4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x>4$",
            commonErrors: ["Reversing the sign for no reason, giving $x<4$.", "Adding 5 instead of subtracting, giving $x>14$.", "Subtracting 9 from 5, giving $x>-4$."],
            examinerNote: "B1 for x > 4.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x-4\\le11$. Find the largest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer $x$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Use inverse operations on both sides, keeping the inequality sign." },
              { kind: "definition", name: "Integer", statement: "A whole number, positive, negative or zero." },
            ],
            steps: [
              { reasoning: "Add 4 to both sides, then divide by 3.", working: "3x\\le15\\Rightarrow x\\le5", marks: 1, markCode: "M" },
              { reasoning: "The largest whole number that is at most 5 is 5, because the sign includes 5.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le5$; the largest integer is $5$",
            commonErrors: ["Giving 4 because the sign was treated as $<$.", "Subtracting 4 instead of adding, giving $x\\le\\frac{7}{3}$."],
            examinerNote: "M1 for x <= 5 or 3x <= 15. A1 for 5.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $7-2x>1$. Find the largest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer $x$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
              { kind: "law", name: "Dividing by a negative", statement: "Multiplying or dividing both sides by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Subtract 7 from both sides.", working: "-2x>-6", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $-2$ and reverse the sign.", working: "x<3", marks: 1, markCode: "A" },
              { reasoning: "The sign is strict, so 3 is not included. The largest integer less than 3 is 2. Check: $7-2(2)=3>1$, but $7-2(3)=1$ is not greater than 1.", working: "2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x<3$; the largest integer is $2$",
            commonErrors: ["Not reversing the sign, giving $x>3$.", "Giving 3 as the answer even though $x=3$ is excluded."],
            examinerNote: "M1 for -2x > -6 oe. A1 for x < 3. R1 for 2 with the strict sign recognised.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school is hiring a coach for a trip. The coach company charges a fixed fee of 120 euros plus 8 euros for each student. The school budget is at most 400 euros. Let $n$ be the number of students.",
          parts: [
            { label: "a", prompt: "Write an inequality in $n$ for the cost staying within the budget.", marks: 2 },
            { label: "b", prompt: "Solve your inequality to find the greatest number of students who can go.", marks: 2 },
            { label: "c", prompt: "At least 20 students must go for the trip to run. Write this as an inequality. List the possible values of $n$ if $n$ is also at most 35.", marks: 2 },
            { label: "d", prompt: "A different company charges 5 euros per student and a fixed fee of 200 euros. For which values of $n$ is this company cheaper than the first company? Justify your answer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) greatest number of students", answer: 35 },
              { label: "(c) number of possible values of $n$", answer: 16 },
              { label: "(d) smallest whole number of students for which the second company is cheaper", answer: 27 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an inequality", statement: "\"At most\" means $\\le$; \"at least\" means $\\ge$." },
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides, reversing the sign only when multiplying or dividing by a negative number." },
            ],
            steps: [
              { part: "a", reasoning: "The cost is the fixed fee plus 8 euros per student.", working: "120+8n", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The cost must be at most 400 euros.", working: "120+8n\\le400", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 120 and divide by 8.", working: "8n\\le280\\Rightarrow n\\le35", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$n$ is a whole number and 35 satisfies the inequality, so at most 35 students can go.", working: "35", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At least 20 means $n\\ge20$. Combine with $n\\le35$.", working: "20\\le n\\le35", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The integers from 20 to 35 inclusive: $35-20+1=16$ values.", working: "16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Second company is cheaper when its cost is less than the first company's cost.", working: "200+5n<120+8n\\Rightarrow 80<3n", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 3: $n>26.67$, so the smallest whole number is 27. Check: $n=27$ gives 335 and 336 euros; $n=26$ gives 330 and 328 euros.", working: "n\\ge27", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $120+8n\\le400$ (b) $n\\le35$, so 35 students (c) $20\\le n\\le35$, giving 16 values (d) $n>\\frac{80}{3}$, so $n\\ge27$",
            commonErrors: ["Using $<$ instead of $\\le$, giving at most 34 students.", "Counting 35-20=15 values and forgetting to include both ends.", "In (d) rounding 26.67 down to 26."],
            examinerNote: "In (d) accept n > 26.67 for M1 and A1 only if the whole-number conclusion n >= 27 is stated.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x-3<7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<10$" },
              { id: "b", text: "$x>10$" },
              { id: "c", text: "$x<4$" },
              { id: "d", text: "$x>-4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides; the sign stays the same." },
            ],
            steps: [
              { reasoning: "Add 3 to both sides.", working: "x-3<7\\Rightarrow x<10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x<10$",
            commonErrors: ["Reversing the sign for no reason."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-inequalities-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x>8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>16$" },
              { id: "b", text: "$x>4$" },
              { id: "c", text: "$x<4$" },
              { id: "d", text: "$x>-4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Divide both sides by 2; dividing by a positive number keeps the sign.", working: "x>4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x>4$",
            commonErrors: ["Reversing the sign to $x<4$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-inequalities-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x+5\\le17$. Find the largest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer $x$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Use inverse operations on both sides, keeping the sign." },
            ],
            steps: [
              { reasoning: "Subtract 5 and divide by 2.", working: "2x\\le12\\Rightarrow x\\le6", marks: 1, markCode: "M" },
              { reasoning: "The largest whole number at most 6 is 6.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le6$; largest integer is $6$",
            commonErrors: ["Giving 7 because the boundary was treated as strict."],
            examinerNote: "M1 for $x\\le6$ oe. A1 for 6.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $10-3x<1$. Find the smallest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Smallest integer $x$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
              { kind: "law", name: "Dividing by a negative", statement: "Multiplying or dividing by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Subtract 10, then divide by $-3$ and reverse the sign.", working: "-3x<-9\\Rightarrow x>3", marks: 1, markCode: "M" },
              { reasoning: "The smallest whole number greater than 3 is 4. Check: $10-3(4)=-2<1$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>3$; smallest integer is $4$",
            commonErrors: ["Not reversing the sign, giving $x<-3$."],
            examinerNote: "M1 for $x>3$ or $-3x<-9$ oe. A1 for 4.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which inequality has the solution $x\\ge-2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+2\\ge0$" },
              { id: "b", text: "$2-x\\ge0$" },
              { id: "c", text: "$x-2\\ge0$" },
              { id: "d", text: "$-x-2\\ge0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Isolate $x$ using inverse operations; reverse the sign only when multiplying or dividing by a negative." },
            ],
            steps: [
              { reasoning: "Subtract 2 from both sides of (a): $x\\ge-2$. Check the others give different solutions.", working: "x+2\\ge0\\Rightarrow x\\ge-2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x+2\\ge0$",
            commonErrors: ["Choosing (b), which gives $x\\le2$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-inequalities-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x-7>8$ and write down two integer solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Add 7 and divide by 3.", working: "3x>15\\Rightarrow x>5", marks: 1, markCode: "M" },
              { reasoning: "Any integer greater than 5 works, e.g. 6 and 7.", working: "x=6,\\ x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>5$; integer solutions include 6, 7, 8, ...",
            commonErrors: ["Writing $x\\ge5$, which wrongly includes 5."],
            examinerNote: "Accept any two integers greater than 5.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5-2x\\ge11$. Find the largest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer $x$", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
              { kind: "law", name: "Dividing by a negative", statement: "Multiplying or dividing both sides by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Subtract 5 from both sides.", working: "-2x\\ge6", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-2$ and reverse the sign.", working: "x\\le-3", marks: 1, markCode: "A" },
              { reasoning: "The largest whole number at most $-3$ is $-3$; check: $5-2(-3)=11\\ge11$.", working: "-3", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x\\le-3$; largest integer is $-3$",
            commonErrors: ["Not reversing the sign, giving $x\\ge-3$."],
            examinerNote: "M1 for $-2x\\ge6$ oe. A1 for $x\\le-3$. R1 for $-3$ with the inclusive sign recognised.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A number line shows a closed circle at $-1$ with shading to the right. Which inequality does it represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-1$" },
              { id: "b", text: "$x\\le-1$" },
              { id: "c", text: "$x>-1$" },
              { id: "d", text: "$x\\ge-1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Open and closed circle", statement: "A closed circle includes the end value ($\\le$ or $\\ge$); shading right means greater than." },
            ],
            steps: [
              { reasoning: "Closed circle means the end value is included and shading right means $x$ is greater than or equal to $-1$.", working: "x\\ge-1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x\\ge-1$",
            commonErrors: ["Choosing (c), which would need an open circle."],
            examinerNote: "B1 for choice (d).",
          },
        },
        {
          id: "mypm2-u2-inequalities-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why solving $-3x<12$ gives $x>-4$, and describe how the number line looks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing by a negative", statement: "Multiplying or dividing both sides by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-3$; because $-3$ is negative the sign reverses from $<$ to $>$.", working: "x>-4", marks: 1, markCode: "M" },
              { reasoning: "The solution is $x>-4$, an open circle at $-4$ shading right.", working: "(-4,\\infty)", marks: 1, markCode: "A" },
              { reasoning: "The reversal is needed because multiplying both sides of an inequality by a negative flips the order: e.g. $-3(-5)=15>12$ and $-3(-4)=12$ is not less than 12.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x>-4$, shown with an open circle at $-4$ shading right.",
            commonErrors: ["Keeping $<$ and getting $x<-4$."],
            examinerNote: "The R mark is for a correct reason for reversing the sign.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cinema ticket costs 8 euros and popcorn costs 3 euros. Sam has at most 30 euros. Let $t$ be the number of tickets and $p$ the number of popcorns. Sam buys 2 popcorns. Explain how to form an inequality for the number of tickets he can buy and solve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an inequality", statement: "\"At most\" means $\\le$; total cost must not exceed the budget." },
            ],
            steps: [
              { reasoning: "Total cost is $8t+2\\times3=8t+6$, which must be at most 30.", working: "8t+6\\le30", marks: 1, markCode: "M" },
              { reasoning: "Subtract 6 and divide by 8.", working: "8t\\le24\\Rightarrow t\\le3", marks: 1, markCode: "M" },
              { reasoning: "State the solution set and interpret it: $t$ is a whole number, so $t=0,1,2,3$.", working: "t\\in\\{0,1,2,3\\}", marks: 1, markCode: "A" },
              { reasoning: "Interpretation: Sam can buy at most 3 tickets because 4 tickets would cost $32+6=38>30$ euros.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$t\\le3$, so at most 3 tickets",
            commonErrors: ["Forgetting the 2 popcorns in the cost.", "Using $<$ instead of $\\le$ and excluding 3."],
            examinerNote: "The R mark is for interpreting the answer in context with a check.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A phone plan costs 12 euros per month plus 0.50 euros per GB of data. A student has a budget of at most 20 euros per month for the plan.",
          parts: [
            { label: "a", prompt: "Write an inequality for the number of GB, $g$, the student can use.", marks: 2 },
            { label: "b", prompt: "Solve the inequality.", marks: 2 },
            { label: "c", prompt: "The student also needs at least 4 GB for her lessons. List the possible whole-number values of $g$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) Number of possible values of $g$", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an inequality", statement: "\"At most\" means $\\le$; \"at least\" means $\\ge$." },
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "The monthly cost is $12+0.5g$ euros.", working: "12+0.5g", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The cost must be at most 20.", working: "12+0.5g\\le20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 12 and divide by 0.5.", working: "0.5g\\le8\\Rightarrow g\\le16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "g\\le16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Combine with $g\\ge4$: $4\\le g\\le16$.", working: "4\\le g\\le16", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Whole numbers from 4 to 16 inclusive: $16-4+1=13$ values.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12+0.5g\\le20$ (b) $g\\le16$ (c) $4\\le g\\le16$, giving 13 values",
            commonErrors: ["Counting 16-4=12 values and forgetting to include both ends."],
            examinerNote: "In (b) accept g <= 16 GB.",
          },
        },
        {
          id: "mypm2-u2-inequalities-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school trip needs a coach. Company A charges a fixed fee of 150 euros plus 6 euros per student. Company B charges 10 euros per student with no fixed fee. Let $n$ be the number of students.",
          parts: [
            { label: "a", prompt: "Write an inequality for the values of $n$ for which Company B is cheaper than Company A.", marks: 2 },
            { label: "b", prompt: "Solve the inequality to find when Company B is cheaper.", marks: 2 },
            { label: "c", prompt: "For what values of $n$ is Company A cheaper? Justify your answer.", marks: 2 },
            { label: "d", prompt: "The school budget is at most 400 euros for the coach. Write an inequality for each company and find the greatest number of students that can go with each company.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Greatest number of students for which B is cheaper", answer: 37 },
              { label: "(d) Greatest number with company A", answer: 41 },
              { label: "(d) Greatest number with company B", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming an inequality", statement: "Compare costs with $<$ or $\\le$ depending on the context." },
              { kind: "principle", name: "Solving inequalities", statement: "Do the same operation to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Company B is cheaper when its cost is less than Company A's.", working: "10n<150+6n", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This is the required inequality.", working: "10n<150+6n", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract $6n$ from both sides, then divide by 4.", working: "4n<150\\Rightarrow n<37.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Since $n$ is a whole number, the greatest value is 37. Check: $n=37$ gives A $=372$ and B $=370$, so B is cheaper.", working: "37", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Company A is cheaper when $150+6n<10n$, i.e. $n>37.5$, so for whole numbers $n\\ge38$.", working: "n\\ge38", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Check: $n=38$ gives A $=378$ and B $=380$, so A is cheaper.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Company A: $150+6n\\le400\\Rightarrow6n\\le250\\Rightarrow n\\le41.67$, so $n\\le41$. Company B: $10n\\le400\\Rightarrow n\\le40$.", working: "n\\le41,\\ n\\le40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both greatest values.", working: "41\\text{ and }40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10n<150+6n$ (b) $n<37.5$, so B is cheaper for at most 37 students (c) A is cheaper for $n\\ge38$ (d) A: 41 students, B: 40 students",
            commonErrors: ["Rounding 37.5 up to 38 for part (b), which makes A cheaper.", "Using $\\le$ instead of $<$ in part (a), wrongly including the equal-cost case."],
            examinerNote: "In (b) accept n < 37.5 with the whole-number conclusion 37.",
          },
        },
      ],
    },
  ],
};
