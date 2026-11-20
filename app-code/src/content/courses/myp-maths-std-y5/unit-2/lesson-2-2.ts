import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypms5-u2-lesson-2-2",
  code: "2-2",
  title: "Simultaneous Equations and Quadratics",
  goal: "I CAN solve pairs of simultaneous equations, solve quadratic equations by factorisation and formula, and interpret quadratic graphs.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Simultaneous equations", definition: "Two or more equations that must be satisfied at the same time; their solutions are the intersection points." },
    { term: "Substitution", definition: "Solving one equation for a variable and substituting into the other." },
    { term: "Elimination", definition: "Adding or subtracting equations to eliminate one variable." },
    { term: "Quadratic equation", definition: "An equation of the form $ax^2+bx+c=0$ with $a\\ne0$." },
    { term: "Discriminant", definition: "$b^2-4ac$; determines the number of real roots." },
  ],
  concepts: [
    {
      id: "mypms5-u2-simult",
      title: "Simultaneous equations",
      skill: "Solve linear simultaneous equations by substitution and elimination, including word problems.",
      lesson: {
        sections: [
          {
            heading: "Substitution method",
            body: "Best when one equation has a variable with coefficient 1. Solve for that variable, substitute into the other equation, solve, then back-substitute. Example: $3x+y=10$, $x-y=2$ → $y=x-2$ → $3x+(x-2)=10$ → $4x=12$ → $x=3$, $y=1$.",
          },
          {
            heading: "Elimination method",
            body: "Multiply equations to make coefficients of one variable equal (or opposite), then add or subtract. Example: $2x+3y=12$, $4x-3y=4$ → add: $6x=16$ → $x=\\frac{8}{3}$. Better: $2x+3y=13$, $3x-2y=1$ → $4x+6y=26$, $9x-6y=3$ → add: $13x=29$... use: $x+y=7$, $2x-y=8$ → add: $3x=15$, $x=5$, $y=2$.",
          },
          {
            heading: "Word problems",
            body: "Define variables clearly, write two equations from the conditions, solve simultaneously. Always check answers satisfy both original equations.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Solve one equation, substitute into other" },
          { name: "Elimination", statement: "Make coefficients equal, add/subtract" },
          { name: "Check", statement: "Substitute back into both equations" },
        ],
        workedExample: {
          problem: "Solve $2x+y=10$ and $3x-y=5$.",
          solution: "Add equations: $5x=15$, $x=3$; then $y=10-6=4$. Check: $2(3)+4=10$ ✓ and $3(3)-4=5$ ✓.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-sim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+y=5$ and $x-y=1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3, y=2$" },
              { id: "b", text: "$x=2, y=3$" },
              { id: "c", text: "$x=4, y=1$" },
              { id: "d", text: "$x=1, y=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add: $2x=6$, $x=3$; subtract: $2y=4$, $y=2$." },
            ],
            steps: [
              { reasoning: "Add equations: $2x=6$ → $x=3$; then $y=5-3=2$.", working: "x=3,y=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=3, y=2$",
            commonErrors: ["Adding instead of subtracting for $y$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-sim-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x+2y=16$ and $x-y=2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4, y=2$" },
              { id: "b", text: "$x=5, y=3$" },
              { id: "c", text: "$x=3, y=1$" },
              { id: "d", text: "$x=6, y=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "From $x-y=2$: $x=y+2$; substitute into first." },
            ],
            steps: [
              { reasoning: "$3(y+2)+2y=16 \\Rightarrow 5y+6=16 \\Rightarrow y=2$; $x=4$.", working: "x=4,y=2", marks: 1, markCode: "M" },
              { reasoning: "Check: $12+4=16$ ✓, $4-2=2$ ✓.", working: "x=4,y=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4, y=2$",
            commonErrors: ["Substituting $y=x-2$ incorrectly into first equation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-sim-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two numbers have sum 20 and difference of squares 80. Find the numbers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 and 8" },
              { id: "b", text: "14 and 6" },
              { id: "c", text: "15 and 5" },
              { id: "d", text: "16 and 4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Let numbers be $a,b$: $a+b=20$, $a^2-b^2=80$ → $(a+b)(a-b)=80$ → $a-b=4$." },
            ],
            steps: [
              { reasoning: "$a^2-b^2=(a+b)(a-b)=20(a-b)=80$ → $a-b=4$.", working: "a-b=4", marks: 1, markCode: "M" },
              { reasoning: "$a+b=20$, $a-b=4$ → $a=12$, $b=8$.", working: "a=12,b=8", marks: 1, markCode: "M" },
              { reasoning: "Check: $144-64=80$ ✓.", working: "12\\text{ and }8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 and 8",
            commonErrors: ["Using $a-b=80$ directly instead of factoring."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-sim-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cinema sells adult tickets for 12 and child tickets for 8. On one day 250 tickets sold for 2640.",
          parts: [
            { label: "a", prompt: "Write two equations for adults $a$ and children $c$.", marks: 2 },
            { label: "b", prompt: "Solve the equations.", marks: 3 },
            { label: "c", prompt: "If the cinema wants revenue of 3000 with same ticket prices and same total tickets, how many more adult tickets are needed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Two conditions → two equations." },
            ],
            steps: [
              { part: "a", reasoning: "$a+c=250$ (tickets) and $12a+8c=2640$ (revenue).", working: "a+c=250,\\ 12a+8c=2640", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both equations.", working: "a+c=250,\\ 12a+8c=2640", marks: 1, markCode: "A" },
              { part: "b", reasoning: "From first: $c=250-a$; substitute: $12a+8(250-a)=2640$ → $12a+2000-8a=2640$ → $4a=640$ → $a=160$, $c=90$.", working: "a=160,c=90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $c$: $c=250-160=90$.", working: "c=90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: $160+90=250$ ✓; $12(160)+8(90)=1920+720=2640$ ✓.", working: "160\\text{ adults},90\\text{ children}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let $x$ = extra adults replacing children: need $2640+360=3000$; each swap adds $12-8=4$. Swaps needed: $\\frac{360}{4}=90$; but only 90 children — all become adults? Then revenue $=12(250)=3000$ exactly!", working: "3000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All 250 as adults: $12(250)=3000$. So 90 more adults (all children converted).", working: "90\\text{ more adults}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a+c=250$, $12a+8c=2640$ (b) 160 adults, 90 children (c) 90 more adults",
            commonErrors: ["In (c), assuming same mix of tickets can reach 3000."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms5-u2-sim-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+y=8$ and $x-y=2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5, y=3$" },
              { id: "b", text: "$x=3, y=5$" },
              { id: "c", text: "$x=4, y=4$" },
              { id: "d", text: "$x=6, y=2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Add equations: $2x=10$; subtract: $2y=6$." }],
            steps: [{ reasoning: "Add to get $x=5$, then $y=3$.", working: "x=5,y=3", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $x=5, y=3$",
          },
        },
        {
          id: "mypms5-u2-sim-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x+y=9$ and $x+y=4$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Substitution", statement: "From second equation $y=4-x$; substitute." }],
            steps: [{ reasoning: "$2x+(4-x)=9 \\Rightarrow x=5$.", working: "x=5", marks: 1, markCode: "B" }],
            finalAnswer: "$x=5$",
          },
        },
        {
          id: "mypms5-u2-sim-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x+3y=12$ and $4x-3y=6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3, y=2$" },
              { id: "b", text: "$x=2, y=3$" },
              { id: "c", text: "$x=4, y=1$" },
              { id: "d", text: "$x=1, y=4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Add equations to eliminate $y$: $6x=18$." }],
            steps: [
              { reasoning: "$x=3$; substitute to get $y=2$.", working: "x=3,y=2", marks: 1, markCode: "M" },
              { reasoning: "Check both equations.", working: "x=3,y=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3, y=2$",
          },
        },
        {
          id: "mypms5-u2-sim-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pen costs $p$ and a pencil costs $c$. Two pens and three pencils cost 13; one pen and one pencil cost 5. Find $p$.",
          response: { type: "numeric", parts: [{ label: "$p$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Modelling", statement: "Write $2p+3c=13$ and $p+c=5$." }],
            steps: [
              { reasoning: "Double the second equation: $2p+2c=10$; subtract from first to get $c=3$, then $p=2$.", working: "p=2,c=3", marks: 1, markCode: "M" },
              { reasoning: "State the pen price.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p=2$",
          },
        },
        {
          id: "mypms5-u2-sim-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x+y=10$ and $x-y=2$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Substitution", statement: "From $x-y=2$, $x=y+2$; substitute into the first equation." }],
            steps: [
              { reasoning: "$3(y+2)+y=10 \\Rightarrow 4y+6=10 \\Rightarrow y=1$.", working: "y=1", marks: 1, markCode: "M" },
              { reasoning: "$x=1+2=3$.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
          },
        },
        {
          id: "mypms5-u2-sim-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the solution of $2x+y=5$ and $2x+y=7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No solution" },
              { id: "b", text: "$x=6, y=-7$" },
              { id: "c", text: "Infinitely many solutions" },
              { id: "d", text: "$x=1, y=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Consistency", statement: "Identical left sides but different constants cannot both hold." }],
            steps: [
              { reasoning: "Subtracting gives $0=2$, impossible.", working: "0=2", marks: 1, markCode: "M" },
              { reasoning: "The lines are parallel and distinct.", working: "\\text{parallel}", marks: 1, markCode: "M" },
              { reasoning: "State no solution.", working: "\\text{no solution}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No solution",
          },
        },
        {
          id: "mypms5-u2-sim-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $x=2y$ and $3x+y=14$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Substitution", statement: "Substitute $x=2y$: $3(2y)+y=14$." }],
            steps: [
              { reasoning: "$7y=14 \\Rightarrow y=2$.", working: "y=2", marks: 1, markCode: "M" },
              { reasoning: "$x=2(2)=4$.", working: "x=4", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
          },
        },
        {
          id: "mypms5-u2-sim-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Solve a ticket problem.",
          parts: [
            { label: "a", prompt: "A museum sells adult tickets for 10 and child tickets for 6. On a day, 120 tickets sell for 960. Write two equations.", marks: 2 },
            { label: "b", prompt: "Solve for adults $a$ and children $c$.", marks: 2 },
            { label: "c", prompt: "If revenue must be 1020 with the same 120 tickets, find how many child tickets must become adult tickets.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Modelling", statement: "Use ticket count and revenue equations." }],
            steps: [
              { part: "a", reasoning: "$a+c=120$ and $10a+6c=960$.", working: "a+c=120,10a+6c=960", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both equations.", working: "a+c=120,10a+6c=960", marks: 1, markCode: "A" },
              { part: "b", reasoning: "From first $c=120-a$; substitute: $10a+6(120-a)=960 \\Rightarrow 4a+720=960 \\Rightarrow a=60$, $c=60$.", working: "a=60,c=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the numbers.", working: "60\\text{ and }60", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Need extra 60; each child-to-adult swap adds 4, so 15 swaps.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a+c=120$, $10a+6c=960$ (b) 60 adults, 60 children (c) 15",
          },
        },
        {
          id: "mypms5-u2-sim-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x+3y=27$ and $2x+3y=12$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Subtract equations to eliminate $y$: $3x=15$." }],
            steps: [
              { reasoning: "$x=5$; then $y=\\frac{27-25}{3}=\\frac23$.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "State $x=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
          },
        },
        {
          id: "mypms5-u2-sim-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many solutions do $3x-2y=6$ and $6x-4y=12$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infinitely many" },
              { id: "b", text: "None" },
              { id: "c", text: "Exactly one" },
              { id: "d", text: "Two" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Dependent equations", statement: "Second equation is twice the first, so same line." }],
            steps: [
              { reasoning: "Divide second by 2: $3x-2y=6$, identical to first.", working: "3x-2y=6", marks: 1, markCode: "M" },
              { reasoning: "Same line gives infinitely many points.", working: "\\text{same line}", marks: 1, markCode: "M" },
              { reasoning: "State the number of solutions.", working: "\\infty", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Infinitely many",
          },
        },
        {
          id: "mypms5-u2-sim-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x-y=3$ and $x+y=11$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Elimination", statement: "Add equations: $2x=14$." }],
            steps: [
              { reasoning: "$x=7$; then $y=4$.", working: "x=7,y=4", marks: 1, markCode: "M" },
              { reasoning: "State $x=7$.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
          },
        },
        {
          id: "mypms5-u2-sim-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why checking the solution in both original equations is important after solving a simultaneous pair. Give one reason and one example of an error it can catch.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Verification", statement: "A solution must satisfy every original equation." }],
            steps: [
              { reasoning: "Substitution or elimination can introduce arithmetic slips.", working: "\\text{slips possible}", marks: 1, markCode: "M" },
              { reasoning: "Checking both equations confirms the pair is valid.", working: "\\text{check both}", marks: 1, markCode: "M" },
              { reasoning: "State the reason clearly.", working: "\\text{verification}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Verification ensures both equations are satisfied",
          },
        },
      ],
    },
    {
      id: "mypms5-u2-quadratic",
      title: "Quadratic Equations and Graphs",
      skill: "Solve quadratics by factorisation, completing the square and formula; interpret graphs and discriminant.",
      lesson: {
        sections: [
          {
            heading: "Solving methods",
            body: "**Factorisation**: if $ax^2+bx+c$ factors, set each bracket to zero. **Formula**: $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$. **Completing the square**: $x^2+bx=(x+\\frac{b}{2})^2-\\frac{b^2}{4}$ — useful for vertex form.",
          },
          {
            heading: "The discriminant",
            body: "$\\Delta=b^2-4ac$: $\\Delta>0$ two real roots; $\\Delta=0$ one repeated root; $\\Delta<0$ no real roots. Use to determine intersections without solving.",
          },
          {
            heading: "Interpreting quadratic graphs",
            body: "Parabola opens up ($a>0$) or down ($a<0$). Vertex at $x=-\\frac{b}{2a}$. Roots = $x$-intercepts. Maximum/minimum value at vertex. For $y=ax^2+bx+c$, $y$-intercept is $c$.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Discriminant", statement: "$\\Delta=b^2-4ac$" },
          { name: "Vertex", statement: "$x=-\\frac{b}{2a}$" },
        ],
        workedExample: {
          problem: "Solve $2x^2-5x+2=0$ and find the discriminant.",
          solution: "Factorise: $(2x-1)(x-2)=0$ → $x=\\frac{1}{2}$ or $x=2$. $\\Delta=25-16=9>0$ — two real roots ✓.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-quad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x^2-5x+6=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$ or $x=3$" },
              { id: "b", text: "$x=1$ or $x=6$" },
              { id: "c", text: "$x=-2$ or $x=-3$" },
              { id: "d", text: "$x=5$ or $x=1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorisation", statement: "$(x-2)(x-3)=0$ → $x=2$ or $x=3$." },
            ],
            steps: [
              { reasoning: "Factorise: $(x-2)(x-3)=0$; roots $x=2,3$.", working: "x=2,3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=2$ or $x=3$",
            commonErrors: ["Sign error in factorisation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-quad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use the formula to solve $x^2+4x-1=0$ (leave in surd form).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2\\pm\\sqrt{5}$" },
              { id: "b", text: "$x=2\\pm\\sqrt{5}$" },
              { id: "c", text: "$x=-4\\pm\\sqrt{17}$" },
              { id: "d", text: "$x=-2\\pm\\sqrt{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-4\\pm\\sqrt{16+4}}{2}=\\frac{-4\\pm\\sqrt{20}}{2}=\\frac{-4\\pm2\\sqrt{5}}{2}=-2\\pm\\sqrt{5}$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{-4\\pm\\sqrt{16-4(1)(-1)}}{2}=\\frac{-4\\pm\\sqrt{20}}{2}$.", working: "\\frac{-4\\pm\\sqrt{20}}{2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\sqrt{20}=2\\sqrt{5}$; $x=-2\\pm\\sqrt{5}$.", working: "-2\\pm\\sqrt{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2\\pm\\sqrt{5}$",
            commonErrors: ["Forgetting to divide $\\sqrt{20}$ by 2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-quad-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For what value of $k$ does $x^2+6x+k=0$ have exactly one real root?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$k=9$" },
              { id: "b", text: "$k=3$" },
              { id: "c", text: "$k=6$" },
              { id: "d", text: "$k=36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "One root when $\\Delta=0$: $36-4k=0$ → $k=9$." },
            ],
            steps: [
              { reasoning: "Set $\\Delta=0$: $6^2-4(1)(k)=0$ → $36=4k$.", working: "36-4k=0", marks: 1, markCode: "M" },
              { reasoning: "$k=9$.", working: "k=9", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "k=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=9$",
            commonErrors: ["Setting $\\Delta>0$ instead of $\\Delta=0$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-quad-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ball is thrown upward; its height $h$ metres after $t$ seconds is $h=20t-5t^2$.",
          parts: [
            { label: "a", prompt: "Find when the ball hits the ground.", marks: 2 },
            { label: "b", prompt: "Find the maximum height reached.", marks: 3 },
            { label: "c", prompt: "When is the ball at height 15 m?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic modelling", statement: "Ground: $h=0$; max: vertex; height: solve $h=15$." },
            ],
            steps: [
              { part: "a", reasoning: "$20t-5t^2=0$ → $5t(4-t)=0$ → $t=0$ or $t=4$; hits ground at $t=4$ s.", working: "t=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the time.", working: "t=4\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertex at $t=-\\frac{b}{2a}=\\frac{20}{10}=2$ s.", working: "t=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$h(2)=20(2)-5(4)=40-20=20$ m.", working: "h=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the max height.", working: "20\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$20t-5t^2=15$ → $5t^2-20t+15=0$ → $t^2-4t+3=0$ → $(t-1)(t-3)=0$.", working: "t=1\\text{ or }t=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve: $t=1$ s and $t=3$ s.", working: "t=1,3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both times.", working: "t=1\\text{ s and }t=3\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 s (b) 20 m (c) 1 s and 3 s",
            commonErrors: ["In (a), giving $t=0$ as the answer — that's launch, not landing."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms5-u2-quad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x^2-7x+10=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$ or $x=5$" },
              { id: "b", text: "$x=1$ or $x=10$" },
              { id: "c", text: "$x=-2$ or $x=-5$" },
              { id: "d", text: "$x=7$ or $x=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Factorisation", statement: "$(x-2)(x-5)=0$." }],
            steps: [{ reasoning: "Factorise and set each bracket to zero.", working: "x=2,5", marks: 1, markCode: "B" }],
            finalAnswer: "$x=2$ or $x=5$",
          },
        },
        {
          id: "mypms5-u2-quad-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the positive solution of $x^2=49$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Square root", statement: "$x=\\pm7$; choose the positive root." }],
            steps: [{ reasoning: "Take the positive square root.", working: "7", marks: 1, markCode: "B" }],
            finalAnswer: "$x=7$",
          },
        },
        {
          id: "mypms5-u2-quad-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $x^2+4x+4=0$, what does the discriminant show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One repeated real root" },
              { id: "b", text: "Two distinct real roots" },
              { id: "c", text: "No real roots" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac=16-16=0$." }],
            steps: [
              { reasoning: "Compute $\\Delta=0$.", working: "\\Delta=0", marks: 1, markCode: "M" },
              { reasoning: "Interpret as one repeated root.", working: "\\text{one root}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One repeated real root",
          },
        },
        {
          id: "mypms5-u2-quad-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2+5x+6=0$. Give the larger root.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Factorisation", statement: "$(x+2)(x+3)=0$ gives $x=-2,-3$." }],
            steps: [
              { reasoning: "Factorise: roots $-2$ and $-3$.", working: "-2,-3", marks: 1, markCode: "M" },
              { reasoning: "Larger root is $-2$.", working: "-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$",
          },
        },
        {
          id: "mypms5-u2-quad-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y=x^2-6x+5$, find the $x$-coordinate of the vertex.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Vertex", statement: "$x=-\\frac{b}{2a}=\\frac{6}{2}=3$." }],
            steps: [
              { reasoning: "Use the vertex formula.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "State the coordinate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
          },
        },
        {
          id: "mypms5-u2-quad-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the $y$-intercept of $y=2x^2-3x+4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "-3" },
              { id: "c", text: "0" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Intercept", statement: "Set $x=0$; the constant term is the intercept." }],
            steps: [
              { reasoning: "At $x=0$, $y=4$.", working: "y=4", marks: 1, markCode: "M" },
              { reasoning: "State the intercept.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "mypms5-u2-quad-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2x^2-8=0$. Give the positive solution.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Rearrange", statement: "$2x^2=8 \\Rightarrow x^2=4$." }],
            steps: [
              { reasoning: "Divide by 2: $x^2=4$.", working: "x^2=4", marks: 1, markCode: "M" },
              { reasoning: "$x=\\pm2$; positive solution is 2.", working: "x=2", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$",
          },
        },
        {
          id: "mypms5-u2-quad-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Solve quadratics and interpret features.",
          parts: [
            { label: "a", prompt: "Solve $x^2-9=0$.", marks: 1 },
            { label: "b", prompt: "Solve $x^2+2x-15=0$ by factorisation.", marks: 2 },
            { label: "c", prompt: "For $y=x^2-4x+3$, state the $y$-intercept and vertex $x$-coordinate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Quadratics", statement: "Use factorisation, difference of squares and vertex formula." }],
            steps: [
              { part: "a", reasoning: "$x=\\pm3$.", working: "x=\\pm3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$(x+5)(x-3)=0$ gives $x=-5$ or $x=3$.", working: "x=-5,3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both roots.", working: "x=-5,3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y$-intercept is $c=3$; vertex $x=\\frac{4}{2}=2$.", working: "3,2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both features.", working: "3,2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=\\pm3$ (b) $x=-5,3$ (c) $y$-intercept 3, vertex $x=2$",
          },
        },
        {
          id: "mypms5-u2-quad-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x^2-8x+15=0$. Give the smaller root.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Factorisation", statement: "$(x-3)(x-5)=0$." }],
            steps: [{ reasoning: "Roots are 3 and 5; smaller is 3.", working: "3", marks: 1, markCode: "B" }],
            finalAnswer: "$x=3$",
          },
        },
        {
          id: "mypms5-u2-quad-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which parabola opens downward?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-x^2+2$" },
              { id: "b", text: "$y=x^2+2$" },
              { id: "c", text: "$y=2x^2$" },
              { id: "d", text: "$y=x^2-x+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Parabola direction", statement: "Opens downward when $a<0$." }],
            steps: [
              { reasoning: "Only $y=-x^2+2$ has negative leading coefficient.", working: "a<0", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-x^2+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-x^2+2$",
          },
        },
        {
          id: "mypms5-u2-quad-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the maximum value of $y=-x^2+6x-5$.",
          response: { type: "numeric", parts: [{ label: "$y_{\\max}$", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Vertex", statement: "Vertex at $x=\\frac{-6}{2(-1)}=3$; evaluate $y(3)$." }],
            steps: [
              { reasoning: "$y(3)=-9+18-5=4$.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "mypms5-u2-quad-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the discriminant $\\Delta=b^2-4ac$ tells you the number of real roots of $ax^2+bx+c=0$. Include all three cases.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Discriminant", statement: "$\\Delta$ is the expression under the square root in the quadratic formula." }],
            steps: [
              { reasoning: "$\\Delta>0$ gives two distinct real roots.", working: "\\Delta>0", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta=0$ gives one repeated root; $\\Delta<0$ gives no real roots.", working: "\\Delta=0,\\Delta<0", marks: 1, markCode: "M" },
              { reasoning: "State the three cases clearly.", working: "\\text{three cases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two roots if $\\Delta>0$, one if $\\Delta=0$, none if $\\Delta<0$",
          },
        },
      ],
    },
    {
      id: "mypms5-u2-sequences",
      title: "Sequences and Series",
      skill: "Identify arithmetic and geometric sequences, find nth terms, and calculate sums.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "Common difference $d$. $n$th term: $u_n=a+(n-1)d$. Sum of first $n$ terms: $S_n=\\frac{n}{2}[2a+(n-1)d]$ or $S_n=\\frac{n}{2}(u_1+u_n)$.",
          },
          {
            heading: "Geometric sequences",
            body: "Common ratio $r$. $n$th term: $u_n=ar^{n-1}$. Sum: $S_n=\\frac{a(r^n-1)}{r-1}$ for $r\\ne1$. For infinite sum ($|r|<1$): $S_\\infty=\\frac{a}{1-r}$.",
          },
          {
            heading: "Choosing the right formula",
            body: "Arithmetic: equal differences between terms. Geometric: equal ratios. Check by computing $d=u_2-u_1$ vs $r=\\frac{u_2}{u_1}$. Fibonacci-type sequences have neither — find pattern by inspection.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth", statement: "$u_n=a+(n-1)d$" },
          { name: "Geometric nth", statement: "$u_n=ar^{n-1}$" },
          { name: "Geometric sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$" },
        ],
        workedExample: {
          problem: "Find the 10th term and sum of first 10 terms of 3, 7, 11, 15, ...",
          solution: "$d=4$, $a=3$; $u_{10}=3+9(4)=39$; $S_{10}=\\frac{10}{2}(3+39)=210$.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of 5, 9, 13, 17, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "2" },
              { id: "c", text: "8" },
              { id: "d", text: "-4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "$d=u_2-u_1=9-5=4$." },
            ],
            steps: [
              { reasoning: "$d=9-5=4$.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 4",
            commonErrors: ["Computing ratio instead of difference."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-seq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 8th term of the geometric sequence 2, 6, 18, 54, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4374" },
              { id: "b", text: "1458" },
              { id: "c", text: "486" },
              { id: "d", text: "13122" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth", statement: "$r=3$, $u_8=2\\times3^7=2\\times2187=4374$." },
            ],
            steps: [
              { reasoning: "$r=\\frac{6}{2}=3$; $u_8=2\\times3^7=4374$.", working: "4374", marks: 1, markCode: "M" },
              { reasoning: "State the term.", working: "4374", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4374",
            commonErrors: ["Using $3^8$ instead of $3^7$ for the 8th term."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-seq-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum of the first 20 terms of the arithmetic sequence 4, 9, 14, 19, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1030" },
              { id: "b", text: "1010" },
              { id: "c", text: "1050" },
              { id: "d", text: "950" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sum", statement: "$u_{20}=4+19(5)=99$; $S_{20}=\\frac{20}{2}(4+99)=10\\times103=1030$." },
            ],
            steps: [
              { reasoning: "$d=5$; $u_{20}=4+19(5)=99$; $S_{20}=\\frac{20}{2}(4+99)=10\\times103=1030$.", working: "1030", marks: 1, markCode: "M" },
              { reasoning: "Verify: $u_1+u_{20}=4+99=103$; $10\\times103=1030$.", working: "1030", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "1030", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1030",
            commonErrors: ["Using $n=20$ in $u_n$ formula incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-seq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ball dropped from 100 m rebounds to 60% of its previous height each bounce.",
          parts: [
            { label: "a", prompt: "Find the height after the 3rd bounce.", marks: 2 },
            { label: "b", prompt: "Find the total distance travelled before the ball first hits the ground.", marks: 1 },
            { label: "c", prompt: "Find the total distance travelled during all bounces (up and down).", marks: 3 },
            { label: "d", prompt: "Find the sum to infinity of the successive peak heights (100, 60, 36, ...).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric series", statement: "Heights: 100, 60, 36, ... with $r=0.6$." },
            ],
            steps: [
              { part: "a", reasoning: "Heights after bounces: $100(0.6)^3=100(0.216)=21.6$ m.", working: "21.6\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the height.", working: "21.6\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "First fall: 100 m.", working: "100\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total bounce distance: $2(60+36+21.6+...)$; sum of heights $S_\\infty=\\frac{60}{1-0.6}=150$; total $=100+2(150)=400$ m.", working: "400\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Total $=100+2S_\\infty=100+300=400$ m.", working: "400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the total.", working: "400\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$S_\\infty=\\frac{a}{1-r}=\\frac{100}{1-0.6}=\\frac{100}{0.4}=250$ m.", working: "250\\text{ m}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the sum.", working: "250\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 21.6 m (b) 100 m (c) 400 m (d) 250 m",
            commonErrors: ["In (c), forgetting to double the bounce heights for up-and-down."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u2-seq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of 2, 6, 18, 54, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "12" },
              { id: "d", text: "\\frac13" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Common ratio", statement: "$r=\\frac{u_2}{u_1}=\\frac62=3$." }],
            steps: [{ reasoning: "Divide consecutive terms.", working: "3", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 3",
          },
        },
        {
          id: "mypms5-u2-seq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the 10th term of the arithmetic sequence 7, 11, 15, ...",
          response: { type: "numeric", parts: [{ label: "$u_{10}$", answer: 43 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Arithmetic nth", statement: "$u_n=a+(n-1)d$ with $a=7$, $d=4$." }],
            steps: [{ reasoning: "$u_{10}=7+9(4)=43$.", working: "43", marks: 1, markCode: "B" }],
            finalAnswer: "$43$",
          },
        },
        {
          id: "mypms5-u2-seq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the $n$th term of 4, 7, 10, 13, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n+1$" },
              { id: "b", text: "$4n$" },
              { id: "c", text: "$3n+4$" },
              { id: "d", text: "$n+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Arithmetic nth", statement: "$a=4$, $d=3$: $u_n=4+(n-1)3=3n+1$." }],
            steps: [
              { reasoning: "Identify $a=4$ and $d=3$.", working: "a=4,d=3", marks: 1, markCode: "M" },
              { reasoning: "Simplify $u_n=3n+1$.", working: "3n+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_n=3n+1$",
          },
        },
        {
          id: "mypms5-u2-seq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum of the first 10 terms of 2, 5, 8, ...",
          response: { type: "numeric", parts: [{ label: "$S_{10}$", answer: 155 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Arithmetic sum", statement: "$u_{10}=2+9(3)=29$; $S_{10}=\\frac{10}{2}(2+29)=155$." }],
            steps: [
              { reasoning: "Find $u_{10}=29$.", working: "u_{10}=29", marks: 1, markCode: "M" },
              { reasoning: "Compute $S_{10}=5(31)=155$.", working: "155", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$155$",
          },
        },
        {
          id: "mypms5-u2-seq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 6th term of the geometric sequence 5, 10, 20, ...",
          response: { type: "numeric", parts: [{ label: "$u_6$", answer: 160 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Geometric nth", statement: "$r=2$, $u_6=5\\times2^5=160$." }],
            steps: [
              { reasoning: "Identify $r=2$.", working: "r=2", marks: 1, markCode: "M" },
              { reasoning: "Compute $5\\times32=160$.", working: "160", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$160$",
          },
        },
        {
          id: "mypms5-u2-seq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which sequence is geometric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "81, 27, 9, ..." },
              { id: "b", text: "5, 9, 13, ..." },
              { id: "c", text: "2, 4, 7, ..." },
              { id: "d", text: "1, 4, 9, ..." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Geometric", statement: "Equal ratio $r=\\frac13$ between consecutive terms." }],
            steps: [
              { reasoning: "Check ratios: $\\frac{27}{81}=\\frac13$ and $\\frac9{27}=\\frac13$.", working: "r=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Other options have no constant ratio.", working: "\\text{no constant ratio}", marks: 1, markCode: "M" },
              { reasoning: "State the geometric sequence.", working: "81,27,9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "81, 27, 9, ...",
          },
        },
        {
          id: "mypms5-u2-seq-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum to infinity of 12+6+3+...",
          response: { type: "numeric", parts: [{ label: "$S_\\infty$", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Infinite geometric sum", statement: "$S_\\infty=\\frac{a}{1-r}$ with $a=12$, $r=\\frac12$." }],
            steps: [
              { reasoning: "Identify $r=\\frac12$.", working: "r=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "$S_\\infty=\\frac{12}{1-\\frac12}=24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$",
          },
        },
        {
          id: "mypms5-u2-seq-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Use sequence formulas.",
          parts: [
            { label: "a", prompt: "For 3, 8, 13, ..., find the 20th term.", marks: 2 },
            { label: "b", prompt: "For 4, 12, 36, ..., find the 5th term.", marks: 2 },
            { label: "c", prompt: "State whether each sequence is arithmetic or geometric.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Sequences", statement: "Arithmetic uses $d$; geometric uses $r$." }],
            steps: [
              { part: "a", reasoning: "$d=5$; $u_{20}=3+19(5)=98$.", working: "98", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the term.", working: "98", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$r=3$; $u_5=4\\times3^4=324$.", working: "324", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the term.", working: "324", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First is arithmetic; second is geometric.", working: "\\text{arith, geom}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 98 (b) 324 (c) arithmetic then geometric",
          },
        },
        {
          id: "mypms5-u2-seq-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the 30th term of 3, 8, 13, ...",
          response: { type: "numeric", parts: [{ label: "$u_{30}$", answer: 148 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Arithmetic nth", statement: "$u_{30}=3+29(5)=148$." }],
            steps: [{ reasoning: "Use $a=3$, $d=5$, $n=30$.", working: "148", marks: 1, markCode: "B" }],
            finalAnswer: "$148$",
          },
        },
        {
          id: "mypms5-u2-seq-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum of the first 5 terms of 2, 6, 18, 54, 162.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "242" },
              { id: "b", text: "240" },
              { id: "c", text: "486" },
              { id: "d", text: "121" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Geometric sum", statement: "$S_5=\\frac{2(3^5-1)}{3-1}=3^5-1=242$." }],
            steps: [
              { reasoning: "Use $a=2$, $r=3$, $n=5$.", working: "S_5=242", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "242", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$242$",
          },
        },
        {
          id: "mypms5-u2-seq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 8th term of 3, 6, 12, ...",
          response: { type: "numeric", parts: [{ label: "$u_8$", answer: 384 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Geometric nth", statement: "$r=2$, $u_8=3\\times2^7=384$." }],
            steps: [
              { reasoning: "Identify $r=2$.", working: "r=2", marks: 1, markCode: "M" },
              { reasoning: "Compute $3\\times128=384$.", working: "384", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$384$",
          },
        },
        {
          id: "mypms5-u2-seq-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the condition for an infinite geometric series to have a finite sum, and why $12+6+3+...$ qualifies. State the sum.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Infinite sum", statement: "$S_\\infty=\\frac{a}{1-r}$ exists when $|r|<1$." }],
            steps: [
              { reasoning: "Here $r=\\frac12$, so $|r|<1$ and the sum converges.", working: "r=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Compute $S_\\infty=\\frac{12}{1-\\frac12}=24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "State the condition and sum.", working: "|r|<1,\\ S_\\infty=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$|r|<1$; sum is 24",
          },
        },
      ],
    },
  ],
};
