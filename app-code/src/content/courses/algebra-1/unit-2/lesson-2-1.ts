import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "alg1-u2-lesson-2-1",
  code: "2-1",
  title: "Solving Systems by Graphing and Substitution",
  goal: "I CAN solve a system of linear equations by graphing or substitution and classify it by its number of solutions.",
  standards: ["HSA-REI.C.6", "HSA-REI.D.11"],
  vocabulary: [
    { term: "System of linear equations", definition: "A set of linear equations whose variables must have values that satisfy every equation at the same time." },
    { term: "Solution to a system", definition: "An ordered pair that makes every equation in the system true; on a graph, it is a point common to all the lines." },
    { term: "Consistent system", definition: "A system with at least one solution; it may have one solution or infinitely many solutions." },
    { term: "Inconsistent system", definition: "A system with no solution; two distinct parallel lines are inconsistent." },
    { term: "Dependent system", definition: "A system whose equations represent the same line, so every point on that line is a solution." },
    { term: "Independent system", definition: "A system whose lines intersect at exactly one point, giving exactly one solution." },
  ],
  concepts: [
    {
      id: "alg1-u2-graph-systems",
      title: "Solutions and graphs of systems",
      skill: "Use a graph or the equations of two lines to find their common solution and determine how many solutions exist.",
      lesson: {
        sections: [
          {
            heading: "The intersection is the solution",
            body: `A solution to a system must satisfy both equations. On a graph, that means the solution is a point on both lines: their point of intersection. If the intersection has coordinates $(a,b)$, verify it by substituting $x=a$ and $y=b$ into each original equation.

When graphing, write both equations in a comparable form such as $y=mx+b$. Plot each line accurately using its slope and intercept, then read the intersection. A table of values or substitution can confirm a graph reading, especially when the intersection is not at an integer coordinate.`,
          },
          {
            heading: "Classifying the number of solutions",
            body: `Two lines with different slopes meet once, so the system is **consistent and independent** and has one solution. Distinct parallel lines never meet, so the system is **inconsistent** and has no solution. If both equations describe the same line, the system is **consistent and dependent** and has infinitely many solutions.

In slope-intercept form, compare slopes and intercepts. Different slopes mean one intersection. Equal slopes with different $y$-intercepts mean parallel lines. Equal slopes and equal intercepts mean the same line. These conclusions are exact; do not decide that lines are parallel just because a hand-drawn graph looks close.`,
          },
        ],
        keyFormulas: [
          { name: "Slope-intercept form", statement: "$y=mx+b$, where $m$ is the slope and $b$ is the $y$-intercept." },
          { name: "Number of intersections", statement: "Different slopes $\\Rightarrow$ one solution; equal slopes and unequal intercepts $\\Rightarrow$ no solution; equal slopes and equal intercepts $\\Rightarrow$ infinitely many solutions." },
        ],
        workedExample: {
          problem: "Solve the system by graphing or comparing slopes: $y=2x+1$ and $y=-x+4$.",
          solution: "The first line has slope $2$ and $y$-intercept $1$; the second has slope $-1$ and $y$-intercept $4$. The slopes differ, so the lines intersect once. Set the expressions for $y$ equal to find the exact intersection: $2x+1=-x+4$, so $3x=3$ and $x=1$. Then $y=2(1)+1=3$. The solution is $(1,3)$; substituting it into the second equation also gives $3=-1+4$. The system is **consistent and independent**.",
        },
      },
      questions: [
        {
          id: "alg1-u2-gs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A graph shows two lines intersecting at $(2,-1)$. Which statement must be true?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The system has no solution because the lines cross." },
            { id: "b", text: "$(2,-1)$ satisfies both equations in the system." },
            { id: "c", text: "Every point on either line is a solution to the system." },
            { id: "d", text: "The lines have equal slopes and different intercepts." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solution to a system", statement: "A solution is an ordered pair that satisfies every equation in the system." },
              { kind: "principle", name: "Graphical solution", statement: "The intersection of two graphs is a point common to both equations." },
            ],
            steps: [
              { reasoning: "A point where the lines cross lies on both graphs, so its coordinates satisfy both equations.", working: "(x,y)=(2,-1)", marks: 1, markCode: "B" },
              { reasoning: "Therefore the intersection gives the system's unique solution; the other statements describe parallel or coincident lines instead.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $(2,-1)$ satisfies both equations in the system.",
            commonErrors: ["Choosing (c) because each line contains infinitely many points; only points common to both lines solve the system."],
          },
        },
        {
          id: "alg1-u2-gs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve the system $y=3x-2$ and $y=x+4$. Enter the $x$-coordinate of the intersection.",
          response: { type: "numeric", parts: [{ label: "$x$-coordinate", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equal outputs at an intersection", statement: "At a common point, both expressions for $y$ have the same value." },
              { kind: "property", name: "Equality property", statement: "If $a=b$ and $c=d$, equations may be combined by setting equal expressions for the same quantity equal." },
            ],
            steps: [
              { reasoning: "Set the two expressions for $y$ equal because the intersection has one shared $y$-value.", working: "3x-2=x+4", marks: 1, markCode: "M" },
              { reasoning: "Collect variable terms on one side and constants on the other.", working: "2x=6", marks: 1, markCode: "A" },
              { reasoning: "Divide by 2 to obtain the intersection's $x$-coordinate.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ (the complete solution is $(3,7)$).",
            commonErrors: ["Setting the equations equal as $3x-2=x+4$ but then combining terms with the wrong signs."],
          },
        },
        {
          id: "alg1-u2-gs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify the system $2x+3y=6$ and $4x+6y=15$. State the number of solutions and justify the classification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Equivalent equations", statement: "Multiplying an equation by a nonzero constant gives an equivalent equation with the same solution set." },
              { kind: "theorem", name: "Parallel-line criterion", statement: "Lines with equal slopes and different intercepts are distinct parallel lines and have no common point." },
              { kind: "definition", name: "Inconsistent system", statement: "An inconsistent system has no solution." },
            ],
            steps: [
              { reasoning: "Put both equations into comparable form by isolating $y$.", working: "2x+3y=6 \\implies y=-\\frac{2}{3}x+2 \\\\ 4x+6y=15 \\implies y=-\\frac{2}{3}x+\\frac{5}{2}", marks: 1, markCode: "M" },
              { reasoning: "The slopes match, but the intercepts differ, so these are distinct parallel lines.", working: "-\\frac{2}{3}=-\\frac{2}{3}, \\qquad 2\\ne\\frac{5}{2}", marks: 1, markCode: "A" },
              { reasoning: "Distinct parallel lines do not intersect, so there is no ordered pair satisfying both equations.", marks: 1, markCode: "R" },
              { reasoning: "Name the classification using the definition.", working: "\\text{inconsistent; 0 solutions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The system is **inconsistent** and has **no solution**.",
            commonErrors: ["Calling the system dependent because the coefficients of the second equation are close to twice those of the first; the right-hand side is not twice 6."],
            examinerNote: "For full credit, identify both the equal slopes and unequal intercepts, or give an equivalent algebraic contradiction.",
          },
        },
        {
          id: "alg1-u2-gs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two shops rent bikes. Shop A charges $C=10+6h$ dollars for $h$ hours. Shop B charges $C=22+3h$ dollars for $h$ hours. Each equation is graphed as a line, with hours on the horizontal axis and cost on the vertical axis.",
          parts: [
            { label: "a", prompt: "State the slope and $y$-intercept of each line and explain what each means in this context.", marks: 2 },
            { label: "b", prompt: "Find the number of hours at which the two shops cost the same, and that cost.", marks: 3 },
            { label: "c", prompt: "For a 6-hour rental, which shop is cheaper and by how many dollars?", marks: 2 },
            { label: "d", prompt: "Shop C charges $C=25+6h$. Explain, using slopes and intercepts, why the system formed by Shop A and Shop C has no solution, and what this means for a customer.", marks: 2 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Hours at equal cost", answer: 4, unit: "h" },
            { label: "(b) Cost at that point, in dollars", answer: 34 },
            { label: "(c) Savings at 6 hours, in dollars", answer: 6 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solution to a system", statement: "A solution is an ordered pair satisfying both equations; graphically it is the intersection point of the lines." },
              { kind: "principle", name: "Slope and intercept in context", statement: "In $y=mx+b$, $m$ is the rate of change (cost per hour) and $b$ is the starting value (fixed fee)." },
              { kind: "theorem", name: "Parallel-line criterion", statement: "Lines with equal slopes and different intercepts are distinct parallel lines with no common point." },
            ],
            steps: [
              { part: "a", reasoning: "Shop A: slope 6 means $\\$6$ per hour; $y$-intercept 10 is a $\\$10$ fixed fee. Shop B: slope 3 means $\\$3$ per hour; intercept 22 is a $\\$22$ fixed fee.", working: "m_A=6,\\ b_A=10;\\quad m_B=3,\\ b_B=22", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Interpret: Shop B starts higher but grows more slowly, so the lines must cross.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "At the intersection both costs are equal, so set the expressions equal.", working: "10+6h=22+3h", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect terms and solve for $h$.", working: "3h=12 \\implies h=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into either equation and check with the other.", working: "C=10+6(4)=34,\\quad 22+3(4)=34", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate both cost equations at $h=6$.", working: "C_A=10+36=46,\\quad C_B=22+18=40", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shop B is cheaper; subtract.", working: "46-40=6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Shop A and Shop C have the same slope but different intercepts.", working: "6=6,\\quad 10\\ne25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The lines are distinct and parallel, so they never meet: the system is inconsistent. Shop C is always $\\$15$ more expensive than Shop A.", working: "25-10=15", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Shop A: slope 6, intercept 10; Shop B: slope 3, intercept 22; (b) $4$ hours, $\\$34$; (c) Shop B, by $\\$6$; (d) parallel lines, no solution; Shop C always costs $\\$15$ more.",
            commonErrors: ["Reading the intercept as the hourly rate.", "Stating the intersection as $(34,4)$ with coordinates reversed.", "Concluding that Shop C and Shop A have a solution because both slopes are positive."],
          },
        },
      ],
    },
    {
      id: "alg1-u2-substitution",
      title: "Solving systems by substitution",
      skill: "Solve a linear system by substituting an equivalent expression and interpret the resulting equation.",
      lesson: {
        sections: [
          {
            heading: "Substitute an equivalent expression",
            body: `Substitution is especially efficient when one equation already has a variable isolated. Replace that variable in the other equation with its equal expression. Solve the resulting one-variable equation, then substitute the value back into either original equation to find the other coordinate.

For example, if $y=2x-1$, then every solution has a $y$-value equal to $2x-1$. In a second equation, replacing $y$ by $2x-1$ preserves the solutions common to both equations. Keep parentheses around substituted expressions when needed, and check the final ordered pair in both originals.`,
          },
          {
            heading: "What the final equation tells you",
            body: `After substitution and simplification, an equation such as $0=5$ is false, so no values satisfy the system: it is inconsistent. An identity such as $0=0$ is true for every value of the remaining variable, meaning the equations describe the same line and the system has infinitely many solutions. A solvable equation such as $3x=12$ gives one value and, after back-substitution, one ordered pair.

Writing the algebraic conclusion is essential. Do not report $0=0$ as a solution pair; it signals infinitely many solutions. Likewise, $0=5$ is not a value for a variable; it signals no solution.`,
          },
        ],
        keyFormulas: [
          { name: "Substitution principle", statement: "If $y=f(x)$, replace $y$ by $f(x)$ in another equation; solve, then substitute back." },
          { name: "Classification by reduced equation", statement: "A true identity such as $0=0$ gives infinitely many solutions; a false statement such as $0=5$ gives no solution." },
        ],
        workedExample: {
          problem: "Solve by substitution: $y=2x+1$ and $3x+y=11$.",
          solution: "Substitute $2x+1$ for $y$ in the second equation: $3x+(2x+1)=11$. Then $5x+1=11$, so $x=2$. Substitute back: $y=2(2)+1=5$. The solution is $(2,5)$. Check: $3(2)+5=11$, so the ordered pair satisfies both equations.",
        },
      },
      questions: [
        {
          id: "alg1-u2-sub-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Given $y=x+3$ and $2x+y=12$, which equation correctly results from substituting for $y$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x+(x-3)=12$" },
            { id: "b", text: "$2x+(x+3)=12$" },
            { id: "c", text: "$2x+y+x+3=12$" },
            { id: "d", text: "$2(x+3)=12$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Substitution", statement: "An expression equal to a variable may replace that variable in another equation." },
              { kind: "property", name: "Equality preservation", statement: "Replacing a quantity by an equal quantity preserves the equation's solutions." },
            ],
            steps: [
              { reasoning: "The first equation states that $y$ equals $x+3$.", working: "y=x+3", marks: 1, markCode: "B" },
              { reasoning: "Replace only $y$ in $2x+y=12$ with the entire expression $x+3$.", working: "2x+(x+3)=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2x+(x+3)=12$",
            commonErrors: ["Using $x-3$ instead of the expression $x+3$ given for $y$.", "Multiplying $2$ by $x+3$ when the original term is $2x+y$."],
          },
        },
        {
          id: "alg1-u2-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $y=2x-4$ and $x+y=8$. Enter the value of $y$ in the solution.",
          response: { type: "numeric", parts: [{ label: "$y$-coordinate", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution principle", statement: "Replace a variable by an equal expression to obtain an equivalent equation." },
              { kind: "law", name: "Solving a linear equation", statement: "Use inverse operations to isolate the variable while preserving equality." },
            ],
            steps: [
              { reasoning: "Replace $y$ in the second equation using the first equation.", working: "x+(2x-4)=8", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms and isolate $x$.", working: "3x-4=8 \\\\ 3x=12 \\\\ x=4", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=4$ into $y=2x-4$.", working: "y=2(4)-4=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The solution is $(4,4)$, so $y=4$.",
            commonErrors: ["Stopping after finding $x$ when the question asks for the $y$-coordinate."],
          },
        },
        {
          id: "alg1-u2-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use substitution to classify the system $y=2x+1$ and $2y=4x+2$. Explain what the result means for the number of solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Equivalent equations", statement: "Dividing both sides of an equation by the same nonzero number preserves its solution set." },
              { kind: "principle", name: "Substitution", statement: "Substitute an expression equal to a variable into another equation to find common solutions." },
              { kind: "definition", name: "Dependent system", statement: "A dependent system represents the same line in each equation and has infinitely many solutions." },
            ],
            steps: [
              { reasoning: "Simplify the second equation so it can be compared with the first.", working: "2y=4x+2 \\\\ y=2x+1", marks: 1, markCode: "M" },
              { reasoning: "Substitute $y=2x+1$ from the first equation into the simplified second equation.", working: "2x+1=2x+1", marks: 1, markCode: "M" },
              { reasoning: "Subtract $2x+1$ from both sides; the result is an identity, true for every real $x$.", working: "0=0", marks: 1, markCode: "A" },
              { reasoning: "Both equations describe the same line, so the system is dependent and has infinitely many solutions.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The system is **consistent and dependent** with **infinitely many solutions**: every point on $y=2x+1$ is a solution.",
            commonErrors: ["Reporting $(0,0)$ as the only solution because the simplification gives $0=0$.", "Calling the system inconsistent because no single numerical value of $x$ was found."],
            examinerNote: "State that the identity holds for every real $x$ and connect it to the two equations representing the same line.",
          },
        },
        {
          id: "alg1-u2-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school store sells notebooks for $\\$3$ each and pens for $\\$1$ each. On Monday the number of pens sold, $p$, was $4$ fewer than three times the number of notebooks sold, $n$. Monday's total revenue was $\\$62$.",
          parts: [
            { label: "a", prompt: "Write a system of two equations in $n$ and $p$ for Monday.", marks: 2 },
            { label: "b", prompt: "Use substitution to find the number of notebooks sold.", marks: 3 },
            { label: "c", prompt: "Find the number of pens sold and check your solution in both equations.", marks: 2 },
            { label: "d", prompt: "On Tuesday the same relationship $p=3n-4$ held, but a student claims the revenue from the sale of $2n$ notebooks and $2p$ pens was $\\$130$, that is, $6n+2p=130$. Use substitution to show whether this is possible.", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Notebooks sold", answer: 11 },
            { label: "(c) Pens sold", answer: 29 },
            { label: "(d) Value of $n$ in the claim", answer: 11.5 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "An expression equal to a variable may replace that variable in another equation, giving an equation in one variable." },
              { kind: "principle", name: "Revenue model", statement: "Revenue equals price times quantity, summed over item types." },
              { kind: "principle", name: "Context constraint", statement: "A count of items must be a nonnegative whole number; a mathematical solution outside this is not valid in context." },
            ],
            steps: [
              { part: "a", reasoning: "Translate the relationship between pens and notebooks.", working: "p=3n-4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Translate the revenue condition (price times quantity).", working: "3n+p=62", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Replace $p$ in the revenue equation by $3n-4$ (keep parentheses).", working: "3n+(3n-4)=62", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine like terms and add 4 to both sides.", working: "6n-4=62 \\implies 6n=66", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by 6.", working: "n=11", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute back into $p=3n-4$.", working: "p=3(11)-4=29", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check both equations: the pens condition and the revenue.", working: "29=33-4,\\quad 3(11)+29=62", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Substitute $p=3n-4$ into the claimed revenue equation.", working: "6n+2(3n-4)=130 \\implies 12n-8=130", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "12n=138 \\implies n=11.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Then $p=3(11.5)-4=30.5$. Neither is a whole number, so the claim is impossible for counts of items.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $p=3n-4$, $3n+p=62$; (b) $n=11$; (c) $p=29$; (d) the algebra gives $n=11.5$, which is not a whole number of notebooks, so the claim is impossible.",
            commonErrors: ["Writing $p=4-3n$ for 'four fewer than three times'.", "Dropping parentheses so that $3n+3n-4$ becomes $3n+3n+4$.", "Accepting $n=11.5$ as valid without checking that items are counted in whole numbers."],
          },
        },
      ],
    },
  ],
};
