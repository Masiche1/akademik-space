import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypms4-u2-lesson-2-2",
  code: "2-2",
  title: "Systems of Equations",
  goal: "I CAN solve pairs of simultaneous equations by substitution and elimination, and interpret solutions in context.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Simultaneous equations", definition: "A pair of equations that must both be true at the same time; their solution is the point where the graphs intersect." },
    { term: "Substitution", definition: "A solving method where one variable is written in terms of the other and substituted into the second equation." },
    { term: "Elimination", definition: "A solving method where one variable is eliminated by adding or subtracting the equations." },
    { term: "Consistent system", definition: "A pair of equations with exactly one solution (intersecting lines)." },
    { term: "Inconsistent system", definition: "A pair of equations with no solution (parallel lines)." },
  ],
  concepts: [
    {
      id: "mypms4-u2-simult",
      title: "Solving simultaneous equations",
      skill: "Solve pairs of linear equations using substitution and elimination, and check solutions.",
      lesson: {
        sections: [
          {
            heading: "What is a solution?",
            body: "A **simultaneous equation** pair has a single solution — the values of $x$ and $y$ that satisfy **both** equations. Geometrically, it is the point where the two lines intersect.",
          },
          {
            heading: "Elimination method",
            body: "If coefficients match, add or subtract the equations to eliminate one variable. For $x+y=7$ and $x-y=1$, adding gives $2x=8$, so $x=4$; then $y=3$. Check: $4+3=7$ and $4-3=1$. ✓",
          },
          {
            heading: "Substitution method",
            body: "Rearrange one equation to make a variable the subject, then substitute into the other. From $y=2x+1$ and $3x+y=11$: substitute to get $3x+(2x+1)=11$, so $5x=10$, $x=2$, $y=5$.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Add/subtract equations to cancel a variable" },
          { name: "Substitution", statement: "Replace a variable with an equivalent expression" },
        ],
        workedExample: {
          problem: "Solve $2x+y=10$ and $x+3y=15$.",
          solution: "Multiply first by 3: $6x+3y=30$. Subtract second: $5x=15$, $x=3$. Then $6+y=10$, $y=4$. Check: $3+12=15$. ✓",
        },
      },
      questions: [
        {
          id: "mypms4-u2-simul-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+y=5$ and $x-y=1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3,\\ y=2$" },
              { id: "b", text: "$x=2,\\ y=3$" },
              { id: "c", text: "$x=4,\\ y=1$" },
              { id: "d", text: "$x=3,\\ y=1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Add: $2x=6$, $x=3$; then $y=2$. Check: $3+2=5$, $3-2=1$.", working: "x=3,\\ y=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=3,\\ y=2$",
            commonErrors: ["Solving only one equation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-simul-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $y=2x+1$ and $3x+y=11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2,\\ y=5$" },
              { id: "b", text: "$x=3,\\ y=7$" },
              { id: "c", text: "$x=1,\\ y=3$" },
              { id: "d", text: "$x=2,\\ y=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Substitute $y=2x+1$ into the second equation." },
            ],
            steps: [
              { reasoning: "$3x+(2x+1)=11$, so $5x=10$, $x=2$, $y=5$.", working: "x=2,\\ y=5", marks: 1, markCode: "M" },
              { reasoning: "Verify: $3(2)+5=11$. ✓", working: "6+5=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2,\\ y=5$",
            commonErrors: ["Substituting incorrectly or not checking."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two numbers have a sum of 20 and a difference of 6. Find the numbers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13 and 7" },
              { id: "b", text: "14 and 6" },
              { id: "c", text: "12 and 8" },
              { id: "d", text: "15 and 5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Translate words into equations: $x+y=20$, $x-y=6$." },
            ],
            steps: [
              { reasoning: "Add equations: $2x=26$, $x=13$; $y=7$.", working: "x=13,\\ y=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $13+7=20$, $13-7=6$. ✓", working: "20\\text{ and }6", marks: 1, markCode: "M" },
              { reasoning: "State the numbers.", working: "13\\text{ and }7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ and $7$",
            commonErrors: ["Setting up $x+y=6$ instead of difference."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Tickets for a concert cost 15 for adults and 10 for children. A group buys 25 tickets for a total of 300.",
          parts: [
            { label: "a", prompt: "Write two equations for the number of adult tickets $a$ and child tickets $c$.", marks: 2 },
            { label: "b", prompt: "Solve the equations to find $a$ and $c$.", marks: 3 },
            { label: "c", prompt: "Check your answer satisfies both equations.", marks: 1 },
            { label: "d", prompt: "If the price of adult tickets rises to 18 while child tickets stay at 10, how many adult tickets can be bought for the same 300 with the same 25 total?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Translate word problems into simultaneous equations." },
            ],
            steps: [
              { part: "a", reasoning: "$a+c=25$ and $15a+10c=300$.", working: "a+c=25,\\ 15a+10c=300", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both equations correct.", working: "\\text{both equations}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "From first: $a=25-c$; substitute: $15(25-c)+10c=300$.", working: "375-5c=300", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$5c=75$, $c=15$, $a=10$.", working: "c=15,\\ a=10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "a=10,\\ c=15", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check: $10+15=25$ and $150+150=300$. ✓", working: "25\\text{ and }300", marks: 1, markCode: "A" },
              { part: "d", reasoning: "New equations: $a+c=25$, $18a+10c=300$.", working: "18a+10c=300", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve: $18(25-c)+10c=300 \\Rightarrow 450-8c=300 \\Rightarrow c=18.75$ — not an integer, so exact solution impossible; the question expects noting non-integer result. $a=6.25$.", working: "c=18.75\\text{ (non-integer)}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $a+c=25$, $15a+10c=300$ (b) $a=10$, $c=15$ (c) verified (d) $a=6.25$, $c=18.75$ — non-integer, so not feasible for whole tickets",
            commonErrors: ["Not noticing the non-integer answer in (d)."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), A1 for (c), M1 R1 for (d).",
          },
        },
        {
          id: "mypms4-u2-simul-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+y=8$ and $x-y=2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5,\\ y=3$" },
              { id: "b", text: "$x=3,\\ y=5$" },
              { id: "c", text: "$x=4,\\ y=4$" },
              { id: "d", text: "$x=6,\\ y=2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add the equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Add: $2x=10$, $x=5$; then $y=3$. Check: $5+3=8$, $5-3=2$. ✓", working: "x=5,\\ y=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=5,\\ y=3$",
            commonErrors: ["Solving only one equation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-simul-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $y=x+2$ and $y=2x-1$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3 }, { label: "$y$", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Set the two expressions for $y$ equal to each other." },
            ],
            steps: [
              { reasoning: "$x+2=2x-1$, so $x=3$; then $y=3+2=5$.", working: "x=3,\\ y=5", marks: 1, markCode: "M" },
              { reasoning: "Check: $2(3)-1=5$. ✓", working: "5=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3,\\ y=5$",
            commonErrors: ["Substituting $x$ for $y$ instead of equating the expressions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x+y=9$ and $x-y=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4,\\ y=1$" },
              { id: "b", text: "$x=4,\\ y=5$" },
              { id: "c", text: "$x=2,\\ y=5$" },
              { id: "d", text: "$x=3,\\ y=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add the equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Add the equations to eliminate $y$: $3x=12$, so $x=4$.", working: "3x=12", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $4-y=3$, so $y=1$; check $2(4)+1=9$. ✓", working: "x=4,\\ y=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4,\\ y=1$",
            commonErrors: ["Arithmetic slips when substituting back."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x+2y=8$ and $2x+y=7$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 2 }, { label: "$y$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Multiply one equation to match coefficients, then eliminate." },
            ],
            steps: [
              { reasoning: "Double the second: $4x+2y=14$; subtract first: $3x=6$, $x=2$.", working: "x=2", marks: 1, markCode: "M" },
              { reasoning: "$2+2y=8$, so $y=3$. Check: $4+3=7$. ✓", working: "y=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2,\\ y=3$",
            commonErrors: ["Subtracting in the wrong order when eliminating."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair of values satisfies both $x+y=10$ and $x-y=4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=7,\\ y=3$" },
              { id: "b", text: "$x=6,\\ y=4$" },
              { id: "c", text: "$x=8,\\ y=2$" },
              { id: "d", text: "$x=7,\\ y=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add: $2x=14$, $x=7$, $y=3$." },
            ],
            steps: [
              { reasoning: "Add the equations: $2x=14$, so $x=7$ and $y=3$.", working: "x=7,\\ y=3", marks: 1, markCode: "M" },
              { reasoning: "Verify: $7+3=10$ and $7-3=4$. ✓", working: "10\\text{ and }4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=7,\\ y=3$",
            commonErrors: ["Choosing a pair that satisfies only one equation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $3x+2y=16$ and $x+2y=8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4,\\ y=2$" },
              { id: "b", text: "$x=2,\\ y=5$" },
              { id: "c", text: "$x=6,\\ y=-1$" },
              { id: "d", text: "$x=3,\\ y=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtract the equations to eliminate $y$ directly." },
            ],
            steps: [
              { reasoning: "Subtract second from first: $2x=8$, $x=4$.", working: "2x=8", marks: 1, markCode: "M" },
              { reasoning: "$4+2y=8$, so $y=2$.", working: "y=2", marks: 1, markCode: "M" },
              { reasoning: "Check: $12+4=16$. ✓", working: "x=4,\\ y=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4,\\ y=2$",
            commonErrors: ["Adding the equations instead of subtracting."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $y=3x-5$ and $2x+y=10$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3 }, { label: "$y$", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Substitute $y=3x-5$ into the second equation." },
            ],
            steps: [
              { reasoning: "$2x+(3x-5)=10$, so $5x=15$, $x=3$.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "$y=3(3)-5=4$.", working: "y=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3,\\ y=4$",
            commonErrors: ["Forgetting to distribute the substitution correctly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2x+3y=13$ and $4x-y=5$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 2 }, { label: "$y$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Rearrange one equation for $y$, then substitute." },
            ],
            steps: [
              { reasoning: "From second: $y=4x-5$; substitute: $2x+3(4x-5)=13$.", working: "2x+3(4x-5)=13", marks: 1, markCode: "M" },
              { reasoning: "$2x+12x-15=13$, so $14x=28$, $x=2$; $y=4(2)-5=3$.", working: "x=2,\\ y=3", marks: 1, markCode: "M" },
              { reasoning: "Check: $4+9=13$ and $8-3=5$. ✓", working: "13\\text{ and }5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2,\\ y=3$",
            commonErrors: ["Sign error when rearranging $4x-y=5$ to $y=4x-5$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Tickets for a show cost 12 for adults and 7 for children. A group buys 20 tickets for a total of 190.",
          parts: [
            { label: "a", prompt: "Write two equations for the number of adult tickets $a$ and child tickets $c$.", marks: 2 },
            { label: "b", prompt: "Solve the equations to find $a$ and $c$.", marks: 2 },
            { label: "c", prompt: "Check that your answer satisfies both equations.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Translate word problems into simultaneous equations." },
            ],
            steps: [
              { part: "a", reasoning: "$a+c=20$ and $12a+7c=190$.", working: "a+c=20,\\ 12a+7c=190", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both equations correct.", working: "\\text{both equations}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$c=20-a$; $12a+7(20-a)=190 \\Rightarrow 5a+140=190 \\Rightarrow a=10$, $c=10$.", working: "a=10,\\ c=10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "a=10,\\ c=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check: $10+10=20$ and $120+70=190$. ✓", working: "20\\text{ and }190", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both equations satisfied.", working: "\\text{verified}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a+c=20$, $12a+7c=190$ (b) $a=10$, $c=10$ (c) verified",
            commonErrors: ["Using 12 and 7 as the number of tickets instead of prices."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u2-simul-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $x+y=13$ and $2x-y=8$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 7 }, { label: "$y$", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add the equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Add: $3x=21$, $x=7$.", working: "x=7", marks: 1, markCode: "M" },
              { reasoning: "$7+y=13$, so $y=6$.", working: "y=6", marks: 1, markCode: "M" },
              { reasoning: "Check: $14-6=8$. ✓", working: "x=7,\\ y=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7,\\ y=6$",
            commonErrors: ["Subtracting instead of adding, giving wrong sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you can check that a pair of values $(x,y)$ is the solution of a pair of simultaneous equations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking solutions", statement: "A solution must satisfy BOTH equations simultaneously." },
            ],
            steps: [
              { reasoning: "Substitute the $x$ and $y$ values into the first equation and verify it holds.", working: "\\text{check eq 1}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the second equation and verify it also holds.", working: "\\text{check eq 2}", marks: 1, markCode: "M" },
              { reasoning: "Only if both checks pass is it a true solution.", working: "\\text{both must hold}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Substitute into both equations; the pair is a solution only if both are satisfied.",
            commonErrors: ["Checking only one equation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-simul-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What can you say about the equations $x+2y=7$ and $2x+4y=10$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have exactly one solution" },
              { id: "b", text: "They have no solution" },
              { id: "c", text: "They have infinitely many solutions" },
              { id: "d", text: "They have two solutions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consistent vs inconsistent", statement: "If equations reduce to a contradiction, there is no solution." },
            ],
            steps: [
              { reasoning: "Double the first: $2x+4y=14$; but second says $2x+4y=10$ — contradiction.", working: "14\\ne10", marks: 1, markCode: "M" },
              { reasoning: "Equivalently $x+2y=7$ and $x+2y=5$ — impossible.", working: "x+2y=5", marks: 1, markCode: "M" },
              { reasoning: "The system is inconsistent: no solution.", working: "\\text{no solution}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No solution",
            commonErrors: ["Not recognising the contradiction."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u2-quadratic",
      title: "Quadratic functions",
      skill: "Recognise quadratic functions, expand and factorise quadratics, and solve quadratic equations.",
      lesson: {
        sections: [
          {
            heading: "What is a quadratic?",
            body: "A **quadratic function** has the form $f(x)=ax^2+bx+c$ where $a\\ne0$. Its graph is a **parabola** — a U-shape (or inverted U if $a<0$). The highest or lowest point is the **vertex**.",
          },
          {
            heading: "Expanding and factorising",
            body: "Expand brackets: $(x+2)(x+5)=x^2+7x+10$. Factorise by finding two numbers that multiply to $c$ and add to $b$: $x^2+7x+10=(x+2)(x+5)$. Special cases: $x^2-9=(x+3)(x-3)$ (difference of two squares).",
          },
          {
            heading: "Solving quadratics",
            body: "Set the quadratic equal to zero and factorise: $x^2+7x+10=0 \\Rightarrow (x+2)(x+5)=0 \\Rightarrow x=-2$ or $x=-5$. If it doesn't factorise neatly, use the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic form", statement: "$ax^2+bx+c$" },
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Difference of squares", statement: "$a^2-b^2=(a+b)(a-b)$" },
        ],
        workedExample: {
          problem: "Solve $x^2-5x+6=0$.",
          solution: "Factorise: $(x-2)(x-3)=0$, so $x=2$ or $x=3$.",
        },
      },
      questions: [
        {
          id: "mypms4-u2-quad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a quadratic function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(x)=3x+1$" },
              { id: "b", text: "$f(x)=x^2-4$" },
              { id: "c", text: "$f(x)=\\frac{1}{x}$" },
              { id: "d", text: "$f(x)=5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadratic", statement: "Highest power of $x$ is 2: $ax^2+bx+c$." },
            ],
            steps: [
              { reasoning: "$x^2-4$ has $x^2$ as the highest power.", working: "x^2-4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $f(x)=x^2-4$",
            commonErrors: ["Choosing a linear function."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u2-quad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise $x^2+9x+20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+4)(x+5)$" },
              { id: "b", text: "$(x+2)(x+10)$" },
              { id: "c", text: "$(x-4)(x-5)$" },
              { id: "d", text: "$(x+3)(x+7)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "Find two numbers multiplying to 20 and adding to 9." },
            ],
            steps: [
              { reasoning: "4 and 5 multiply to 20 and add to 9.", working: "4\\times5=20,\\ 4+5=9", marks: 1, markCode: "M" },
              { reasoning: "$(x+4)(x+5)=x^2+9x+20$. ✓", working: "(x+4)(x+5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+4)(x+5)$",
            commonErrors: ["Choosing factors that don't sum to 9."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $x^2-7x+10=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$ or $x=5$" },
              { id: "b", text: "$x=-2$ or $x=-5$" },
              { id: "c", text: "$x=1$ or $x=10$" },
              { id: "d", text: "$x=3$ or $x=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving quadratics", statement: "Factorise, then set each factor to zero." },
            ],
            steps: [
              { reasoning: "Factorise: $(x-2)(x-5)=0$.", working: "(x-2)(x-5)=0", marks: 1, markCode: "M" },
              { reasoning: "$x-2=0$ or $x-5=0$.", working: "x=2\\text{ or }x=5", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=2,\\ x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$ or $x=5$",
            commonErrors: ["Giving only one solution."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ball is thrown vertically. Its height $h$ metres after $t$ seconds is $h=20t-5t^2$.",
          parts: [
            { label: "a", prompt: "Rewrite $h=20t-5t^2$ in the form $h=at^2+bt+c$ and identify $a$, $b$, $c$.", marks: 2 },
            { label: "b", prompt: "Factorise $20t-5t^2$.", marks: 2 },
            { label: "c", prompt: "Find the times when the ball is at ground level ($h=0$).", marks: 2 },
            { label: "d", prompt: "Explain what the two times in (c) represent physically.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadratic form", statement: "$at^2+bt+c$" },
              { kind: "principle", name: "Factorising", statement: "Take out common factor first." },
            ],
            steps: [
              { part: "a", reasoning: "$h=-5t^2+20t+0$; $a=-5$, $b=20$, $c=0$.", working: "a=-5,\\ b=20,\\ c=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State coefficients.", working: "-5,20,0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$20t-5t^2=5t(4-t)$ or $-5t(t-4)$.", working: "5t(4-t)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: $5t(4-t)=20t-5t^2$. ✓", working: "20t-5t^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$5t(4-t)=0$ gives $t=0$ or $t=4$.", working: "t=0\\text{ or }t=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both times.", working: "t=0,\\ t=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$t=0$ is launch; $t=4$ is landing.", working: "t=0\\text{ launch},\\ t=4\\text{ landing}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Interpret physically.", working: "\\text{starts and lands}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a=-5$, $b=20$, $c=0$ (b) $5t(4-t)$ (c) $t=0$ or $t=4$ (d) launch and landing times",
            commonErrors: ["Missing that $t=0$ is the launch time, not just 'ground level'."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u2-quad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a quadratic function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(x)=x^2+3x-1$" },
              { id: "b", text: "$f(x)=4x-7$" },
              { id: "c", text: "$f(x)=\\frac{2}{x}$" },
              { id: "d", text: "$f(x)=x^3+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadratic", statement: "Highest power of $x$ is 2: $ax^2+bx+c$ with $a\\ne0$." },
            ],
            steps: [
              { reasoning: "$x^2+3x-1$ has highest power 2.", working: "x^2+3x-1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $f(x)=x^2+3x-1$",
            commonErrors: ["Choosing the cubic $x^3+1$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-quad-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $(x+3)(x+4)$. State the coefficient of $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient of $x$", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "$(x+3)(x+4)=x^2+7x+12$; coefficient of $x$ is 7.", working: "x^2+7x+12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Multiplying 3 and 4 to get 12 as the coefficient."],
            examinerNote: "B1 for 7.",
          },
        },
        {
          id: "mypms4-u2-quad-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise $x^2+8x+15$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+3)(x+5)$" },
              { id: "b", text: "$(x+1)(x+15)$" },
              { id: "c", text: "$(x-3)(x-5)$" },
              { id: "d", text: "$(x+2)(x+6)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "Find two numbers multiplying to 15 and adding to 8." },
            ],
            steps: [
              { reasoning: "3 and 5 multiply to 15 and add to 8.", working: "3\\times5=15,\\ 3+5=8", marks: 1, markCode: "M" },
              { reasoning: "$(x+3)(x+5)=x^2+8x+15$. ✓", working: "(x+3)(x+5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+3)(x+5)$",
            commonErrors: ["Choosing 1 and 15 — they add to 16, not 8."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2-9=0$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3 }, { label: "$x$", answer: -3 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Difference of squares", statement: "$x^2-9=(x+3)(x-3)=0$." },
            ],
            steps: [
              { reasoning: "$x^2=9$, so $x=\\pm3$.", working: "x=\\pm3", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=3,\\ x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-3$",
            commonErrors: ["Giving only $x=3$ — forgetting the negative root."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2+2x-8=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$ or $x=-4$" },
              { id: "b", text: "$x=-2$ or $x=4$" },
              { id: "c", text: "$x=1$ or $x=-8$" },
              { id: "d", text: "$x=4$ or $x=-2$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "Find numbers multiplying to $-8$ and adding to 2: 4 and $-2$." },
            ],
            steps: [
              { reasoning: "Factorise: $(x+4)(x-2)=0$.", working: "(x+4)(x-2)=0", marks: 1, markCode: "M" },
              { reasoning: "$x=-4$ or $x=2$.", working: "x=2,\\ x=-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$ or $x=-4$",
            commonErrors: ["Sign errors in the factor pairs."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Expand $(2x+1)(x-3)$, giving your answer in the form $ax^2+bx+c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x^2-5x-3$" },
              { id: "b", text: "$2x^2-7x-3$" },
              { id: "c", text: "$2x^2+x-3$" },
              { id: "d", text: "$2x^2-5x+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding", statement: "FOIL: multiply each term in the first bracket by each in the second." },
            ],
            steps: [
              { reasoning: "$2x\\cdot x=2x^2$; $2x\\cdot(-3)=-6x$; $1\\cdot x=x$; $1\\cdot(-3)=-3$.", working: "2x^2-6x+x-3", marks: 1, markCode: "M" },
              { reasoning: "Combine: $2x^2-5x-3$.", working: "2x^2-5x-3", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "2x^2-5x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x^2-5x-3$",
            commonErrors: ["Sign error on the constant term."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^2=25$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 5 }, { label: "$x$", answer: -5 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Square roots", statement: "$x^2=a$ gives $x=\\pm\\sqrt{a}$." },
            ],
            steps: [
              { reasoning: "$x=\\pm\\sqrt{25}=\\pm5$.", working: "x=\\pm5", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=5,\\ x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$ or $x=-5$",
            commonErrors: ["Forgetting the negative solution."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^2+5x+6=0$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: -2 }, { label: "$x$", answer: -3 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "Find numbers multiplying to 6 and adding to 5: 2 and 3 (both negative)." },
            ],
            steps: [
              { reasoning: "Factorise: $(x+2)(x+3)=0$.", working: "(x+2)(x+3)=0", marks: 1, markCode: "M" },
              { reasoning: "$x+2=0$ or $x+3=0$.", working: "x=-2,\\ x=-3", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=-2,\\ x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ or $x=-3$",
            commonErrors: ["Giving positive solutions $x=2,3$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A rectangle has a length that is 4 cm more than its width, and an area of 96 cm$^2$.",
          parts: [
            { label: "a", prompt: "Let $w$ be the width. Form a quadratic equation for $w$.", marks: 2 },
            { label: "b", prompt: "Solve the equation to find $w$.", marks: 2 },
            { label: "c", prompt: "State the dimensions of the rectangle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Area = length × width; translate into a quadratic." },
            ],
            steps: [
              { part: "a", reasoning: "Length $=w+4$; $w(w+4)=96$, so $w^2+4w-96=0$.", working: "w^2+4w-96=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the equation.", working: "w^2+4w-96=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise: $(w+12)(w-8)=0$, so $w=8$ or $w=-12$; reject negative.", working: "w=8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Width must be positive, so $w=8$.", working: "w=8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length $=8+4=12$.", working: "12\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dimensions: 8 cm by 12 cm.", working: "8\\times12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $w^2+4w-96=0$ (b) $w=8$ (c) 8 cm × 12 cm",
            commonErrors: ["Accepting $w=-12$ as a valid width."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u2-quad-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2x^2+3x-2=0$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 0.5 }, { label: "$x$", answer: -2 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising with leading coefficient", statement: "$(2x-1)(x+2)=2x^2+3x-2$." },
            ],
            steps: [
              { reasoning: "Factorise: $(2x-1)(x+2)=0$.", working: "(2x-1)(x+2)=0", marks: 1, markCode: "M" },
              { reasoning: "$2x-1=0$ gives $x=\\frac{1}{2}$; $x+2=0$ gives $x=-2$.", working: "x=0.5,\\ x=-2", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=0.5,\\ x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0.5$ or $x=-2$",
            commonErrors: ["Incorrect factor pair for the leading coefficient 2."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a quadratic equation $ax^2+bx+c=0$ can have at most two solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic graphs", statement: "A parabola intersects a line (or the $x$-axis) in at most two points." },
            ],
            steps: [
              { reasoning: "The graph of $y=ax^2+bx+c$ is a parabola.", working: "\\text{parabola}", marks: 1, markCode: "M" },
              { reasoning: "Solutions are $x$-intercepts; a parabola can cross the $x$-axis at most twice.", working: "\\text{max 2 intercepts}", marks: 1, markCode: "M" },
              { reasoning: "Therefore at most two solutions.", working: "\\text{at most 2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A parabola meets the $x$-axis in at most two points, so at most two solutions.",
            commonErrors: ["No geometric or algebraic justification."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-quad-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "At which values of $x$ does the graph of $y=x^2-4x+3$ cross the $x$-axis?",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 1 }, { label: "$x$", answer: 3 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "x-intercepts", statement: "Set $y=0$ and solve the quadratic." },
            ],
            steps: [
              { reasoning: "$x^2-4x+3=0$ factorises as $(x-1)(x-3)=0$.", working: "(x-1)(x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "$x=1$ or $x=3$.", working: "x=1,\\ x=3", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "x=1,\\ x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ and $x=3$",
            commonErrors: ["Using $-b$ instead of the roots."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
