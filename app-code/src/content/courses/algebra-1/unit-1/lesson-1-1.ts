import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "alg1-u1-lesson-1-1",
  code: "1-1",
  title: "Solving Multi-Step Equations",
  goal: "I CAN solve multi-step linear equations, including equations with variables on both sides, and identify identities and equations with no solution.",
  standards: ["HSA-REI.A.1", "HSA-REI.B.3"],
  vocabulary: [
    { term: "Equivalent equations", definition: "Equations with the same solution set, produced by applying the same reversible operation to both sides." },
    { term: "Distributive property", definition: "The property $a(b+c)=ab+ac$, used to multiply a factor by every term inside parentheses." },
    { term: "Like terms", definition: "Terms with the same variable part and exponent, which can be combined by adding or subtracting their coefficients." },
    { term: "Identity", definition: "An equation true for every value of its variable; its solution set is all real numbers." },
    { term: "No-solution equation", definition: "An equation that simplifies to a false statement, so no value of its variable satisfies it." },
    { term: "Solution", definition: "A value that makes an equation true when substituted for its variable." },
  ],
  concepts: [
    {
      id: "alg1-u1-1-1-multistep",
      title: "Distribute, combine, and solve",
      skill: "Solve linear equations by simplifying each side and isolating the variable using equivalent operations.",
      lesson: {
        sections: [
          {
            heading: "Simplify before isolating the variable",
            body: "A reliable order is to **distribute**, combine like terms on each side, then use inverse operations to isolate the variable. Keep each equation balanced by applying an operation to both sides. For example, in $3(2x-4)+5=17$, distribute first and combine constants before dividing.",
          },
          {
            heading: "Variables on both sides",
            body: "When the variable appears on both sides, collect variable terms on one side and constants on the other. Subtracting $2x$ from both sides of $5x+4=2x+16$ gives $3x+4=16$. The choice of side is flexible; choose the one that keeps coefficients manageable. Check a proposed solution in the original equation, especially when parentheses or negative coefficients occur.",
          },
        ],
        keyFormulas: [
          { name: "Distributive property", statement: "$a(b+c)=ab+ac$ and $a(b-c)=ab-ac$" },
          { name: "Properties of equality", statement: "If $a=b$, then $a+c=b+c$ and $ac=bc$; for $c\\ne0$, $a/c=b/c$." },
        ],
        workedExample: {
          problem: "Solve $4(2x-3)+5=3x+14$.",
          solution: "Distribute and combine: $8x-12+5=3x+14$, so $8x-7=3x+14$. Subtract $3x$ from both sides and add $7$ to both sides: $5x=21$. Divide by $5$: $x=\\frac{21}{5}$. Substitution gives $4(\\frac{42}{5}-3)+5=\\frac{77}{5}$ and $3(\\frac{21}{5})+14=\\frac{77}{5}$, so the solution checks.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-1-multistep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $3(x+4)-2=19$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3$" },
            { id: "b", text: "$x=5$" },
            { id: "c", text: "$x=7$" },
            { id: "d", text: "$x=9$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$." },
              { kind: "property", name: "Properties of equality", statement: "Applying the same operation to both sides preserves equivalent equations." },
            ],
            steps: [
              { reasoning: "Distribute, then add 2 to both sides to isolate the variable term.", working: "3x+12-2=19 \\implies 3x+10=19 \\implies 3x=9", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by 3.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=3$",
            commonErrors: ["Distributing 3 to $x$ but not to 4.", "Subtracting 2 from 19 instead of undoing $-2$ by adding 2 to both sides."],
          },
        },
        {
          id: "alg1-u1-1-1-multistep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5x-7=2x+11$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Properties of equality", statement: "Adding or subtracting the same quantity on both sides preserves equality; dividing both sides by the same nonzero number preserves equality." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ from both sides to collect variable terms on one side.", working: "3x-7=11", marks: 1, markCode: "M" },
              { reasoning: "Add 7 to both sides, then divide by 3.", working: "3x=18 \\implies x=6", marks: 1, markCode: "A" },
              { reasoning: "Check in the original equation: both sides equal 23.", working: "5(6)-7=23=2(6)+11", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=6$",
            commonErrors: ["Moving a term across the equals sign without changing its operation.", "Dividing only one term rather than the entire side."],
          },
        },
        {
          id: "alg1-u1-1-1-multistep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2(3x-5)-4=3(x+2)+2x$. Show how you handle the variable terms on both sides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$." },
              { kind: "property", name: "Properties of equality", statement: "The same operation applied to both sides yields an equivalent equation." },
            ],
            steps: [
              { reasoning: "Distribute on both sides and combine constants or like terms.", working: "6x-10-4=3x+6+2x \\implies 6x-14=5x+6", marks: 1, markCode: "M" },
              { reasoning: "Subtract $5x$ from both sides to collect variable terms.", working: "x-14=6", marks: 1, markCode: "M" },
              { reasoning: "Add 14 to both sides.", working: "x=20", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=20$ in the original equation; each side equals 106.", working: "2(60-5)-4=106 \\quad\\text{and}\\quad 3(22)+40=106", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=20$",
            commonErrors: ["Combining $3x+2x$ as $5x$ is valid, but combining unlike terms such as $6x-14$ is not."],
            examinerNote: "Award the check mark only when the original equation, not just a simplified form, is verified.",
          },
        },
        {
          id: "alg1-u1-1-1-multistep-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A gym offers two ways to pay for $n$ visits in a month.\n\n- **Plan A**: a $\\$45$ monthly fee plus $\\$6$ per visit.\n- **Plan B**: a $\\$4$ account fee plus $\\$5$ per pass. A member needs $2n+1$ passes for $n$ visits (one entry pass for the month plus two passes per visit).",
          parts: [
            { label: "a", prompt: "Write the cost of Plan B as an expression in $n$ and simplify it.", marks: 2 },
            { label: "b", prompt: "Solve for the number of visits $n$ at which the two plans cost the same.", marks: 3 },
            { label: "c", prompt: "Find the common cost, in dollars, at that number of visits.", marks: 2 },
            { label: "d", prompt: "A member plans 12 visits. Which plan is cheaper and by how many dollars? Explain why Plan A is cheaper for every number of visits above your answer to (b).", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) Number of visits at equal cost", answer: 9 },
            { label: "(c) Common cost in dollars", answer: 99 },
            { label: "(d) Savings with the cheaper plan at 12 visits, in dollars", answer: 12 },
          ] },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$." },
              { kind: "property", name: "Properties of equality", statement: "Adding or subtracting the same quantity on both sides, and dividing by a nonzero number, gives an equivalent equation." },
              { kind: "principle", name: "Linear cost models", statement: "Cost $=$ fixed fee $+$ rate $\\times$ quantity; the plan with the smaller rate is cheaper once the quantity is large enough." },
            ],
            steps: [
              { part: "a", reasoning: "Fee plus price per pass times number of passes, then distribute.", working: "C_B=4+5(2n+1)=4+10n+5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Combine the constants.", working: "C_B=10n+9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plan A is $C_A=6n+45$. Equal cost means equal expressions.", working: "6n+45=10n+9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect variable terms on one side and constants on the other (subtract $6n$ and $9$).", working: "36=4n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 4.", working: "n=9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $n=9$ into either cost expression.", working: "C_A=6(9)+45=99", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check with Plan B to confirm the costs agree.", working: "C_B=10(9)+9=99", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate both plans at 12 visits.", working: "C_A=6(12)+45=117,\\quad C_B=10(12)+9=129", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Plan A is cheaper by the difference.", working: "129-117=12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Plan B's cost rises by $\\$10$ per visit versus $\\$6$ for Plan A, so after the break-even point at 9 visits Plan B's extra cost keeps growing and Plan A stays cheaper.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $C_B=10n+9$; (b) $n=9$ visits; (c) $\\$99$; (d) Plan A is cheaper by $\\$12$, because its cost per visit ($\\$6$) is less than Plan B's ($\\$10$).",
            commonErrors: ["Distributing 5 over $2n$ but not over 1, giving $10n+4$.", "Forgetting the $\\$4$ account fee when writing Plan B.", "Answering with the cost in (b) instead of the number of visits."],
            examinerNote: "Accept a substitution check in both plans as evidence for the accuracy mark in (c).",
          },
        },
      ],
    },
    {
      id: "alg1-u1-1-1-solution-types",
      title: "Identities and equations with no solution",
      skill: "Classify an equation after simplifying both sides and justify its solution set.",
      lesson: {
        sections: [
          {
            heading: "When the variable disappears",
            body: "After distributing, combining like terms, and collecting terms, an equation may reduce to a statement with no variable. If it becomes a true statement such as $8=8$, every real number satisfies the original equation: it is an **identity**. If it becomes a false statement such as $8=3$, no value can make the equation true: it has **no solution**.",
          },
          {
            heading: "Distinguish the cases carefully",
            body: "Do not stop simply because the variable cancels. Finish simplifying both sides and compare the constants. For $4(x+2)=4x+8$, both sides are identical for all $x$. For $4(x+2)=4x+5$, cancellation leaves $8=5$, which is impossible. These conclusions come from the equation itself, not from choosing a test value.",
          },
        ],
        keyFormulas: [
          { name: "Identity condition", statement: "$\\text{variable terms cancel and the resulting statement is true} \\implies$ all real numbers are solutions." },
          { name: "No-solution condition", statement: "$\\text{variable terms cancel and the resulting statement is false} \\implies$ no solution." },
        ],
        workedExample: {
          problem: "Classify $2(3x+1)=6x+2$ and $2(3x+1)=6x+7$.",
          solution: "For the first equation, distribute to get $6x+2=6x+2$. Subtracting $6x$ gives $2=2$, a true statement, so it is an identity with all real numbers as solutions. For the second, distribute to get $6x+2=6x+7$. Subtracting $6x$ gives $2=7$, a false statement, so it has no solution.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-1-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement correctly classifies $5(x-2)=5x-10$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It has the single solution $x=0$." },
            { id: "b", text: "It has no solution." },
            { id: "c", text: "It is an identity, so every real number is a solution." },
            { id: "d", text: "It has exactly two solutions." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b-c)=ab-ac$." },
              { kind: "definition", name: "Identity", statement: "An equation that simplifies to a true statement and is satisfied by every value in its domain." },
            ],
            steps: [
              { reasoning: "Distribute on the left; both sides become the same expression.", working: "5x-10=5x-10", marks: 1, markCode: "M" },
              { reasoning: "Subtracting $5x$ leaves a true statement, so every real value works.", working: "-10=-10", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** It is an identity; every real number is a solution.",
            commonErrors: ["Calling it no solution because the variable cancels, without checking the remaining statement."],
          },
        },
        {
          id: "alg1-u1-1-1-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify $3(2x+4)=6x+9$ as having one solution, no solution, or all real numbers as solutions. Explain by simplifying.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$." },
              { kind: "definition", name: "No-solution equation", statement: "An equation that simplifies to a false statement has no solution." },
            ],
            steps: [
              { reasoning: "Distribute on the left.", working: "6x+12=6x+9", marks: 1, markCode: "M" },
              { reasoning: "Subtract $6x$ from both sides.", working: "12=9", marks: 1, markCode: "A" },
              { reasoning: "The resulting statement is false, regardless of $x$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "No solution.",
            commonErrors: ["Reporting all real numbers merely because the variable cancels."],
          },
        },
        {
          id: "alg1-u1-1-1-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For what value of $k$ is $(k+2)x+6=4x+6$ an identity? For what value of $k$ does the equation have no solution? Give and justify both values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Identity", statement: "An identity results when the variable coefficients and constant terms agree, leaving a true statement for every $x$." },
              { kind: "definition", name: "No solution", statement: "If equal variable coefficients leave unequal constants, the resulting false statement has no solution." },
            ],
            steps: [
              { reasoning: "For an identity, match the coefficients of $x$ on both sides.", working: "k+2=4 \\implies k=2", marks: 1, markCode: "M" },
              { reasoning: "With $k=2$, both constants are 6, so the equation is true for every $x$.", working: "4x+6=4x+6", marks: 1, markCode: "R" },
              { reasoning: "For no solution, the coefficients must match so the variable cancels; otherwise there is one solution.", working: "k+2=4 \\implies k=2", marks: 1, markCode: "M" },
              { reasoning: "At $k=2$, the constants match as well, so no value of $k$ produces a false constant statement. Therefore no such value exists.", working: "6=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identity when $k=2$. There is **no value of $k$** for which this equation has no solution.",
            commonErrors: ["Assuming there must be a value of $k$ in each category. The constants are fixed and equal, preventing a no-solution case."],
            examinerNote: "A complete answer must recognize that the no-solution condition is impossible for the given equation.",
          },
        },
        {
          id: "alg1-u1-1-1-types-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A tutoring center charges $3(4m+5)$ dollars for $m$ months on **Plan P**. **Plan Q** charges $12m+c$ dollars for $m$ months, where $c$ is a one-time sign-up fee in dollars. A parent wants to know when the plans cost the same.",
          parts: [
            { label: "a", prompt: "Write the equation for equal cost and simplify the left side.", marks: 2 },
            { label: "b", prompt: "Show that the plans cost the same for every number of months when $c=15$.", marks: 2 },
            { label: "c", prompt: "Show that the plans never cost the same when $c=9$.", marks: 2 },
            { label: "d", prompt: "**Plan R** charges $10m+7$ dollars. Solve for the value of $m$ at which Plan P and Plan R cost the same, and explain whether this can happen.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$." },
              { kind: "definition", name: "Identity", statement: "An equation that reduces to a true statement is satisfied by every value of the variable." },
              { kind: "definition", name: "No-solution equation", statement: "An equation that reduces to a false statement is satisfied by no value of the variable." },
            ],
            steps: [
              { part: "a", reasoning: "Distribute on the left side.", working: "3(4m+5)=12m+15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Set the two costs equal.", working: "12m+15=12m+c", marks: 1, markCode: "A" },
              { part: "b", reasoning: "With $c=15$, subtract $12m$ from both sides.", working: "12m+15=12m+15 \\implies 15=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The statement is true whatever $m$ is, so the equation is an identity: the plans cost the same for every number of months.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "With $c=9$, subtract $12m$ from both sides.", working: "12m+15=12m+9 \\implies 15=9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The statement is false for every $m$, so there is no solution: the plans never cost the same.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set Plan P equal to Plan R and collect terms.", working: "12m+15=10m+7 \\implies 2m=-8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 2.", working: "m=-4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A negative number of months is impossible, so the plans never cost the same in practice. Plan P starts higher ($\\$15$ versus $\\$7$) and grows faster, so Plan P is always more expensive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $12m+15=12m+c$; (b) reduces to $15=15$, an identity; (c) reduces to $15=9$, no solution; (d) $m=-4$, which is not a valid number of months, so Plan P and Plan R never cost the same.",
            commonErrors: ["Concluding there is one solution because the variable cancelled, rather than comparing the remaining constants.", "Reporting $m=-4$ as a valid answer without checking the context."],
            examinerNote: "In (d) the interpretation mark requires a reference to the solution being outside the context (negative months).",
          },
        },
      ],
    },
  ],
};
