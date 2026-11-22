import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "alg1-u2-lesson-2-2",
  code: "2-2",
  title: "Solving Systems by Elimination",
  goal: "I CAN solve systems by adding or subtracting equations, multiplying an equation when needed, and modeling word problems with systems.",
  standards: ["HSA-REI.C.5", "HSA-REI.C.6", "HSA-CED.A.3"],
  vocabulary: [
    { term: "Elimination", definition: "A method for solving a system by combining equations so one variable cancels, leaving an equation with one variable." },
    { term: "Equivalent system", definition: "A system that has exactly the same solution set as the original system." },
    { term: "Linear combination", definition: "An equation formed by multiplying one or both equations by constants and then adding or subtracting them." },
    { term: "Mixture problem", definition: "A situation in which quantities with different prices, concentrations, or attributes are combined, often with a known total and weighted total." },
    { term: "Constraint", definition: "An equation or inequality that a model's variables must satisfy." },
    { term: "Solution", definition: "An ordered pair that makes both original equations true." },
  ],
  concepts: [
    {
      id: "alg1-u2-elimination-method",
      title: "Eliminate a variable",
      skill: "Combine equations directly or after multiplying by nonzero constants to solve a linear system accurately.",
      lesson: {
        sections: [
          {
            heading: "Add or subtract to cancel a variable",
            body: `Elimination uses the fact that adding equal quantities to equal quantities preserves equality. If the coefficients of one variable are opposites, add the equations; if they are equal, subtract one equation from the other. The variable cancels, leaving a one-variable equation. Solve it, then substitute the value into either original equation to find the other variable.

Keep equations aligned and combine like terms carefully. You may multiply an entire equation by a nonzero constant before combining. Multiply every term on both sides, including the constant; changing only one term would create a nonequivalent equation.`,
          },
          {
            heading: "Choose multipliers strategically",
            body: `When neither variable is ready to cancel, choose a variable and make its coefficients opposites. For example, coefficients $3$ and $2$ can be changed to $6$ and $-6$ by multiplying the first equation by $2$ and the second by $-3$. The resulting equations are equivalent to the originals, so their shared solution is unchanged.

Check the final ordered pair in both original equations. If combining produces a false statement such as $0=4$, the system has no solution. If it produces an identity such as $0=0$, the equations are dependent and there are infinitely many solutions.`,
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "If $a+b=c$ and $d+e=f$, then adding or subtracting the complete equations preserves equality; choose coefficients so one variable cancels." },
          { name: "Equation scaling", statement: "Multiplying both sides of an equation by the same nonzero constant produces an equivalent equation." },
        ],
        workedExample: {
          problem: "Solve by elimination: $2x+3y=13$ and $4x-y=5$.",
          solution: "The coefficients of $y$ are $3$ and $-1$. Multiply the second equation by $3$ to obtain $12x-3y=15$. Add it to the first equation: $14x=28$, so $x=2$. Substitute into $4x-y=5$: $8-y=5$, so $y=3$. The solution is $(2,3)$. Check: $2(2)+3(3)=13$ and $4(2)-3=5$.",
        },
      },
      questions: [
        {
          id: "alg1-u2-el-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which operation eliminates $y$ when the equations are $3x+y=10$ and $2x-y=5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multiply the first equation by $-1$ and add." },
            { id: "b", text: "Multiply both equations by $2$." },
            { id: "c", text: "Add the equations." },
            { id: "d", text: "Subtract the second equation from the first." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "property", name: "Additive inverses", statement: "$y+(-y)=0$. Adding equations with opposite coefficients cancels the variable." },
              { kind: "principle", name: "Equation addition", statement: "Adding the left and right sides of two true equations gives another true equation." },
            ],
            steps: [
              { reasoning: "The coefficients of $y$ are $1$ and $-1$, which are opposites.", working: "y+(-y)=0", marks: 1, markCode: "B" },
              { reasoning: "Adding the equations cancels $y$ while retaining an equivalent consequence of the system.", working: "(3x+y)+(2x-y)=10+5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Add the equations.",
            commonErrors: ["Subtracting the equations, which combines the $y$ coefficients as $y-(-y)=2y$ rather than eliminating $y$."],
          },
        },
        {
          id: "alg1-u2-el-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve the system $2x+y=9$ and $3x-y=6$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "$x$-coordinate", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Additive inverses", statement: "Adding equations with opposite coefficients for a variable cancels that variable." },
              { kind: "principle", name: "Substitution check", statement: "A solution must satisfy both original equations." },
            ],
            steps: [
              { reasoning: "Add the equations to cancel $y$.", working: "(2x+y)+(3x-y)=9+6", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms and solve for $x$.", working: "5x=15 \\\\ x=3", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=3$ into either equation; for example, the first gives $y=3$, and both equations are satisfied.", working: "2(3)+3=9, \\qquad 3(3)-3=6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=3$ (the solution is $(3,3)$).",
            commonErrors: ["Adding the $y$ terms instead of recognizing that $y-y=0$."],
          },
        },
        {
          id: "alg1-u2-el-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve the system using elimination: $3x+2y=16$ and $5x-3y=-5$. Give the ordered pair.",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 2 },
            { label: "$y$-coordinate", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "law", name: "Equivalent equation scaling", statement: "Multiplying an equation by a nonzero constant preserves its solution set." },
              { kind: "property", name: "Additive inverses", statement: "Opposite variable coefficients cancel when equations are added." },
              { kind: "principle", name: "Back-substitution", statement: "After finding one variable, substitute it into an original equation to find the other." },
            ],
            steps: [
              { reasoning: "Make the $y$ coefficients opposites by multiplying the first equation by 3 and the second by 2.", working: "9x+6y=48 \\\\ 10x-6y=-10", marks: 1, markCode: "M" },
              { reasoning: "Add the equivalent equations and solve for $x$.", working: "19x=38", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=2$ into the first equation and solve for $y$.", working: "3(2)+2y=16 \\\\ 2y=10 \\\\ y=5", marks: 1, markCode: "A" },
              { reasoning: "State and verify the ordered pair in both original equations.", working: "3(2)+2(5)=16 \\\\ 5(2)-3(5)=-5", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(x,y)=(2,5)$.",
            commonErrors: ["Adding the equations incorrectly after multiplying; the right-hand sides add to $48+(-10)=38$."],
            examinerNote: "Verify both coordinates in the two original equations before finalizing the ordered pair.",
          },
        },
        {
          id: "alg1-u2-el-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A club orders lunch twice from the same restaurant. Let $x$ be the price of a pizza and $y$ the price of a salad, both in dollars. The first order is 3 pizzas and 2 salads for $\\$43$. The second order is 2 pizzas and 5 salads for $\\$47$.",
          parts: [
            { label: "a", prompt: "Write a system of equations for the two orders.", marks: 2 },
            { label: "b", prompt: "Use elimination to find the price of one salad.", marks: 3 },
            { label: "c", prompt: "Find the price of one pizza and verify it in the second order.", marks: 2 },
            { label: "d", prompt: "The restaurant offers a combo of 4 pizzas and 6 salads for $\\$70$. Is it cheaper than buying the items separately? By how much?", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Price of a salad, in dollars", answer: 5 },
            { label: "(c) Price of a pizza, in dollars", answer: 11 },
            { label: "(d) Savings with the combo, in dollars", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "law", name: "Equivalent equation scaling", statement: "Multiplying both sides of an equation by a nonzero constant gives an equivalent equation." },
              { kind: "property", name: "Elimination", statement: "Subtracting (or adding) equations whose coefficients of a variable match (or are opposites) cancels that variable." },
              { kind: "principle", name: "Total cost model", statement: "Cost equals unit price times quantity, summed over item types." },
            ],
            steps: [
              { part: "a", reasoning: "Define the variables and translate the first order.", working: "3x+2y=43", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Translate the second order.", working: "2x+5y=47", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Make the $x$ coefficients equal: multiply the first equation by 2 and the second by 3.", working: "6x+4y=86 \\\\ 6x+15y=141", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract the first from the second to eliminate $x$.", working: "11y=55", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 11.", working: "y=5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $y=5$ into the first equation.", working: "3x+10=43 \\implies x=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify in the second order.", working: "2(11)+5(5)=22+25=47", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Compute the separate price of 4 pizzas and 6 salads.", working: "4(11)+6(5)=44+30=74", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare with the combo price.", working: "74-70=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The combo is cheaper by $\\$4$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $3x+2y=43$, $2x+5y=47$; (b) salad $\\$5$; (c) pizza $\\$11$; (d) the combo is cheaper by $\\$4$.",
            commonErrors: ["Multiplying only the $x$ term when scaling an equation, leaving the constant unchanged.", "Subtracting the right-hand sides in the wrong order ($86-141$).", "Reporting the pizza price when asked for the salad price."],
          },
        },
      ],
    },
    {
      id: "alg1-u2-elimination-models",
      title: "Modeling mixtures and totals",
      skill: "Translate a word problem into two linear equations, solve by elimination, and interpret the result with units.",
      lesson: {
        sections: [
          {
            heading: "Turn quantities into equations",
            body: `Start by defining each variable and its unit. A system often comes from two different kinds of information: a total number or amount, and a total value, cost, or concentration. Write each relationship in words first, then translate it into an equation. Labeling variables prevents a correct calculation from being interpreted backward.

For a mixture of two solutions, the total volume is the sum of the component volumes. The amount of pure ingredient is concentration times volume, so total pure ingredient is the sum of each concentration-volume product. Convert percentages to decimals before using this equation: for example, $20\\%$ is $0.20$.`,
          },
          {
            heading: "Solve and check in context",
            body: `Use elimination when the total equation makes a variable's coefficients easy to cancel. Solve the system, then verify both the total quantity and the weighted total. Finally, check that the answer is realistic: quantities cannot be negative, and the resulting mixture's concentration must lie between the starting concentrations.

The same model works for ticket sales and other totals. If adult and student tickets have different prices, the ticket-count equation represents the number sold while the revenue equation represents price times quantity. A system is useful because both conditions must be true simultaneously.`,
          },
        ],
        keyFormulas: [
          { name: "Total quantity", statement: "$x+y=T$ when two quantities combine to a total $T$." },
          { name: "Weighted mixture amount", statement: "$c_1x+c_2y=c_T(x+y)$, where each $c$ is a concentration written as a decimal." },
        ],
        workedExample: {
          problem: "A lab combines $10\\%$ and $30\\%$ saline solutions to make $10$ liters of $18\\%$ saline. How many liters of each solution are needed?",
          solution: "Let $x$ be liters of $10\\%$ solution and $y$ be liters of $30\\%$ solution. The volume equation is $x+y=10$. The pure-saline equation is $0.10x+0.30y=0.18(10)=1.8$. Multiply the second equation by 100: $10x+30y=180$. Multiply the total equation by 10: $10x+10y=100$. Subtract to get $20y=80$, so $y=4$. Then $x=6$. The mixture needs $6$ liters of $10\\%$ solution and $4$ liters of $30\\%$ solution. Check: $0.10(6)+0.30(4)=1.8$ liters of salt.",
        },
      },
      questions: [
        {
          id: "alg1-u2-model-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A school sells adult tickets for $\\$8$ and student tickets for $\\$5$. If $a$ adult and $s$ student tickets are sold, which expression represents the total revenue?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$8a+5s$" },
            { id: "b", text: "$8s+5a$" },
            { id: "c", text: "$8a+5s=0$" },
            { id: "d", text: "$13(a+s)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Revenue model", statement: "Revenue equals price per item multiplied by the number of items sold, summed across item types." },
              { kind: "definition", name: "Variable meaning", statement: "Each variable represents the quantity named in its definition." },
            ],
            steps: [
              { reasoning: "Adult-ticket revenue is $8$ dollars per ticket times $a$ tickets.", working: "8a", marks: 1, markCode: "M" },
              { reasoning: "Student-ticket revenue is $5s$; add both revenue amounts.", working: "8a+5s", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8a+5s$",
            commonErrors: ["Reversing the prices assigned to adult and student tickets."],
          },
        },
        {
          id: "alg1-u2-model-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A theater sells 20 tickets. Adult tickets cost $\\$9$ and student tickets cost $\\$6$. The total revenue is $\\$150$. How many adult tickets were sold?",
          response: { type: "numeric", parts: [{ label: "Adult tickets", answer: 10, unit: "tickets" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Total-count equation", statement: "The numbers of adult and student tickets sum to the total number sold." },
              { kind: "principle", name: "Revenue equation", statement: "Total revenue is the sum of each ticket price multiplied by its quantity." },
              { kind: "property", name: "Elimination", statement: "Combining equations can cancel a variable while preserving consequences of the system." },
            ],
            steps: [
              { reasoning: "Let $a$ and $s$ represent adult and student tickets; write the count and revenue constraints.", working: "a+s=20 \\\\ 9a+6s=150", marks: 1, markCode: "M" },
              { reasoning: "Multiply the count equation by 6 and subtract it from the revenue equation to cancel $s$.", working: "9a+6s=150 \\\\ 6a+6s=120 \\\\ 3a=30", marks: 1, markCode: "A" },
              { reasoning: "Solve and confirm the count is sensible: $a=10$ and $s=10$ gives the stated total revenue.", working: "a=10; \\quad 9(10)+6(10)=150", marks: 1, markCode: "R" },
            ],
            finalAnswer: "10 adult tickets.",
            commonErrors: ["Using only the total-ticket equation, which cannot distinguish adult from student tickets."],
          },
        },
        {
          id: "alg1-u2-model-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop mixes nuts costing $\\$4$ per pound with nuts costing $\\$10$ per pound to make 12 pounds of a mixture worth $\\$6.50$ per pound. How many pounds of each type are used? Enter the pounds of $\\$4$ nuts.",
          response: { type: "numeric", parts: [{ label: "Pounds of $\\$4$ nuts", answer: 7, unit: "lb" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Total quantity", statement: "The component quantities add to the total mixture quantity." },
              { kind: "principle", name: "Weighted cost", statement: "Total cost equals the sum of unit cost times quantity for each ingredient." },
              { kind: "property", name: "Equivalent equation scaling", statement: "Multiplying both sides of an equation by a nonzero constant preserves its solutions." },
            ],
            steps: [
              { reasoning: "Let $x$ and $y$ be pounds of $4$-dollar and $10$-dollar nuts; translate total weight and total value.", working: "x+y=12 \\\\ 4x+10y=6.50(12)=78", marks: 1, markCode: "M" },
              { reasoning: "Multiply the total-weight equation by 4 and subtract it from the value equation to eliminate $x$.", working: "4x+10y=78 \\\\ 4x+4y=48 \\\\ 6y=30", marks: 1, markCode: "A" },
              { reasoning: "Solve for $y$ and use the total-weight equation to find $x$.", working: "y=5 \\\\ x=12-5=7", marks: 1, markCode: "A" },
              { reasoning: "Check the weighted cost and state the requested quantity.", working: "4(7)+10(5)=78; \\quad \\frac{78}{12}=6.50", marks: 1, markCode: "R" },
            ],
            finalAnswer: "7 pounds of $\\$4$ nuts and 5 pounds of $\\$10$ nuts.",
            commonErrors: ["Averaging $4$ and $10$ without weighting by how many pounds of each type are used.", "Using $6.50$ as the total mixture value instead of multiplying it by 12 pounds."],
            examinerNote: "The cost equation must use total dollars ($78$), not dollars per pound by itself.",
          },
        },
        {
          id: "alg1-u2-model-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A lab technician mixes a $20\\%$ acid solution with a $50\\%$ acid solution. Let $x$ be the liters of the $20\\%$ solution and $y$ the liters of the $50\\%$ solution. The technician needs $30$ liters of a $32\\%$ solution.",
          parts: [
            { label: "a", prompt: "Write two equations: one for the total volume and one for the amount of pure acid.", marks: 2 },
            { label: "b", prompt: "Solve the system by elimination to find $x$ and $y$.", marks: 3 },
            { label: "c", prompt: "Verify the amount of pure acid in the mixture and explain why a $32\\%$ result is reasonable.", marks: 2 },
            { label: "d", prompt: "The technician then asks for $30$ liters of a $60\\%$ solution from the same two solutions. Set up and solve the new system and explain what the solution shows.", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Liters of $20\\%$ solution", answer: 18, unit: "L" },
            { label: "(b) Liters of $50\\%$ solution", answer: 12, unit: "L" },
            { label: "(d) Value of $x$ in the new system", answer: -10, unit: "L" },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Total volume", statement: "The component volumes add to the volume of the mixture." },
              { kind: "principle", name: "Pure-acid amount", statement: "Pure acid equals concentration (as a decimal) times volume; the acid amounts of the parts add to the acid in the mixture." },
              { kind: "property", name: "Elimination", statement: "Scaling equations by nonzero constants and subtracting cancels a variable." },
            ],
            steps: [
              { part: "a", reasoning: "Volumes add to 30 L.", working: "x+y=30", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Pure acid: concentration times volume for each part equals the acid in the mixture.", working: "0.20x+0.50y=0.32(30)=9.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear decimals by multiplying the acid equation by 10, and scale the volume equation by 2 to match the $x$ coefficient.", working: "2x+5y=96 \\\\ 2x+2y=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract to eliminate $x$ and solve for $y$.", working: "3y=36 \\implies y=12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the volume equation.", working: "x=30-12=18", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the acid contributed by each solution.", working: "0.20(18)+0.50(12)=3.6+6=9.6\\text{ L}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by the total volume; the mixture concentration must lie between 20% and 50%.", working: "\\frac{9.6}{30}=0.32=32\\%", marks: 1, markCode: "R" },
              { part: "d", reasoning: "For $60\\%$ the acid equation is $0.20x+0.50y=0.60(30)=18$; scale to $2x+5y=180$ and pair with $2x+2y=60$.", working: "2x+5y=180 \\\\ 2x+2y=60", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract and solve.", working: "3y=120 \\implies y=40,\\quad x=30-40=-10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A negative volume is impossible. Any mixture's concentration lies between 20% and 50%, so 60% cannot be made from these solutions.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x+y=30$, $0.20x+0.50y=9.6$; (b) $18$ L of $20\\%$ and $12$ L of $50\\%$; (c) $9.6$ L of acid, $32\\%$ lies between $20\\%$ and $50\\%$; (d) $x=-10$, $y=40$, which is impossible, so $60\\%$ cannot be made.",
            commonErrors: ["Using $0.32$ instead of $0.32\\times30=9.6$ as the total acid.", "Using percent values such as 20 and 50 in one equation and decimals in another.", "Reporting $x=-10$ as a valid answer without noting that a volume cannot be negative."],
            examinerNote: "In (d), accept either the negative-volume argument or the concentration-range argument for the interpretation mark.",
          },
        },
      ],
    },
  ],
};
