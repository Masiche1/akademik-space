import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m7-u2-lesson-2-3",
  code: "2-3",
  title: "Equations and Inequalities",
  goal: "I CAN solve two-step equations and inequalities, graph solution sets, and interpret solutions in context.",
  standards: ["7.EE.B.4", "7.EE.B.4a", "7.EE.B.4b"],
  vocabulary: [
    { term: "Equation", definition: "A statement that two expressions are equal, such as $3x+5=20$." },
    { term: "Inverse operations", definition: "Operations that undo each other: addition and subtraction, multiplication and division." },
    { term: "Inequality", definition: "A statement comparing two expressions using $<$, $>$, $\\le$ or $\\ge$, such as $2x+3<11$." },
    { term: "Solution set", definition: "All the values of the variable that make an equation or inequality true." },
    { term: "Closed circle", definition: "A solid dot on a number line graph showing that the endpoint is included ($\\le$ or $\\ge$). An open circle means the endpoint is not included ($<$ or $>$)." },
    { term: "Properties of equality", definition: "Doing the same operation to both sides of an equation keeps it true." },
  ],
  concepts: [
    {
      id: "m7-u2-two-step-equations",
      title: "Two-step equations",
      skill: "Solve equations of the form px + q = r and p(x + q) = r and check the solution.",
      lesson: {
        sections: [
          {
            heading: "Undoing operations",
            body: "To solve $px+q=r$, undo the operations in reverse order. First subtract $q$ from both sides, then divide both sides by $p$. For $3x+5=20$: $3x=15$, so $x=5$. Always check by substituting: $3(5)+5=20$.",
          },
          {
            heading: "Equations with parentheses",
            body: "For $p(x+q)=r$ you have two equivalent methods. Either **divide both sides by $p$ first**: $x+q=\\frac{r}{p}$, then subtract $q$. Or expand first to get $px+pq=r$. Dividing first is often shorter: $-2(x+3)=14$ gives $x+3=-7$, so $x=-10$.",
          },
          {
            heading: "Choosing an equation to model a story",
            body: "A fixed amount plus a rate gives $px+q=r$ (a $\\$25$ fee plus $\\$12$ per month). A quantity that is the same for each of several groups gives $p(x+q)=r$ (four friends each paying a ticket plus a fee).",
          },
        ],
        keyFormulas: [
          { name: "Form 1", statement: "$px+q=r \\;\\Rightarrow\\; x=\\frac{r-q}{p}$" },
          { name: "Form 2", statement: "$p(x+q)=r \\;\\Rightarrow\\; x=\\frac{r}{p}-q$" },
        ],
        workedExample: {
          problem: "Solve $\\frac{3}{4}x-5=4$.",
          solution: "Add $5$ to both sides: $\\frac{3}{4}x=9$. Multiply both sides by the reciprocal $\\frac{4}{3}$: $x=9\\times\\frac{4}{3}=12$. Check: $\\frac{3}{4}(12)-5=9-5=4$.",
        },
      },
      questions: [
        {
          id: "m7-u2-two-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of $3x+5=20$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=15$" },
              { id: "b", text: "$x=5$" },
              { id: "c", text: "$x=\\frac{25}{3}$" },
              { id: "d", text: "$x=-5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Properties of equality", statement: "Performing the same operation on both sides of an equation gives an equivalent equation." },
            ],
            steps: [
              { reasoning: "Subtract $5$ from both sides, then divide both sides by $3$.", working: "3x=15,\\quad x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=5$",
            commonErrors: ["Adding $5$ instead of subtracting, giving $x=\\frac{25}{3}$.", "Forgetting to divide by $3$, giving $x=15$."],
          },
        },
        {
          id: "m7-u2-two-step-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-2(x+3)=14$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Properties of equality", statement: "Divide both sides by the same nonzero number to keep the equation true." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-2$.", working: "x+3=-7", marks: 1, markCode: "M" },
              { reasoning: "Subtract $3$ from both sides.", working: "x=-10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-10$",
            commonErrors: ["Dividing by $2$ and not $-2$, giving $x+3=7$.", "Expanding to $-2x+3=14$ (not multiplying $3$ by $-2$)."],
            examinerNote: "Accept expanding first: $-2x-6=14$, $-2x=20$, $x=-10$. Check: $-2(-7)=14$.",
          },
        },
        {
          id: "m7-u2-two-step-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2.5(x-4)=-7.5$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Properties of equality", statement: "Use inverse operations on both sides, undoing the last operation performed first." },
            ],
            steps: [
              { reasoning: "Divide both sides by $2.5$.", working: "x-4=\\frac{-7.5}{2.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the quotient; different signs give a negative.", working: "x-4=-3", marks: 1, markCode: "A" },
              { reasoning: "Add $4$ to both sides.", working: "x=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$",
            commonErrors: ["Adding $4$ before dividing by $2.5$ (the parentheses cover the whole expression).", "Sign error in $-7.5\\div2.5$."],
            examinerNote: "Check: $2.5(1-4)=2.5(-3)=-7.5$.",
          },
        },
        {
          id: "m7-u2-two-step-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gym charges a one-time sign-up fee of $\\$25$ plus $\\$12$ per month. Four friends also buy tickets to a concert. Each friend pays the ticket price $x$ plus a $\\$6$ service fee, and the total paid by the four friends is $\\$52$.",
          parts: [
            { label: "a", prompt: "Find the cost, in dollars, of the gym membership for $6$ months.", marks: 2 },
            { label: "b", prompt: "A member has paid $\\$145$ in total. Write and solve an equation to find the number of months $m$.", marks: 2 },
            { label: "c", prompt: "Write and solve an equation to find the ticket price $x$, in dollars.", marks: 2 },
            { label: "d", prompt: "A student solves $4(x+6)=52$ and writes $4x+6=52$, getting $x=11.5$. Explain the error.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost for 6 months", answer: 97, unit: "dollars" },
              { label: "(b) Number of months $m$", answer: 10 },
              { label: "(c) Ticket price $x$", answer: 7, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modeling with equations", statement: "A fixed amount plus a rate gives $px+q=r$. Equal amounts for several people gives $p(x+q)=r$." },
              { kind: "property", name: "Distributive property", statement: "$p(x+q)=px+pq$" },
            ],
            steps: [
              { part: "a", reasoning: "Monthly cost for $6$ months plus the sign-up fee.", working: "25+12\\times6=25+72", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "97", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write the equation and subtract $25$ from both sides.", working: "12m+25=145\\;\\Rightarrow\\;12m=120", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $12$.", working: "m=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write the equation and divide both sides by $4$.", working: "4(x+6)=52\\;\\Rightarrow\\;x+6=13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract $6$.", working: "x=7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The student multiplied only $x$ by $4$ and left $6$ unchanged.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The distributive property requires multiplying every term: $4(x+6)=4x+24$, so the correct equation is $4x+24=52$.", working: "4x=28,\\quad x=7", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$97$ (b) $m=10$ (c) $x=\\$7$ (d) The $6$ was not multiplied by $4$; $4(x+6)=4x+24$.",
            commonErrors: ["Writing $25m+12=145$ (rate and fee swapped).", "Not distributing over the parentheses."],
            examinerNote: "In (b) and (c) the equation must be seen for the method mark.",
          },
        },
      ],
    },
    {
      id: "m7-u2-two-step-inequalities",
      title: "Two-step inequalities",
      skill: "Solve two-step inequalities, graph the solution set on a number line and interpret it in context.",
      lesson: {
        sections: [
          {
            heading: "Solving like an equation, with one new rule",
            body: "Solve with inverse operations just as for an equation. The new rule: when you **multiply or divide both sides by a negative number, reverse the inequality sign**. For $-3x+4\\ge16$: $-3x\\ge12$, so $x\\le-4$.",
          },
          {
            heading: "Graphing the solution set",
            body: "Draw a number line. Use an **open circle** for $<$ or $>$ and a **closed circle** for $\\le$ or $\\ge$. Shade toward the values that make the inequality true: right for \"greater than\", left for \"less than\".",
          },
          {
            heading: "Interpreting in context",
            body: "Many real situations have limits: a budget is a maximum ($\\le$), a minimum score is a minimum ($\\ge$). In context, the solution may need to be a whole number, so $n\\le12.4$ for the number of notebooks means at most $12$.",
          },
        ],
        keyFormulas: [
          { name: "Reversing the sign", statement: "If $a<b$ and $c<0$, then $ac>bc$" },
          { name: "Form", statement: "$px+q<r \\;\\Rightarrow\\; x<\\frac{r-q}{p}$ when $p>0$" },
        ],
        workedExample: {
          problem: "Solve $5-2x<17$ and describe the graph.",
          solution: "Subtract $5$: $-2x<12$. Divide by $-2$ and reverse the sign: $x>-6$. Graph: an open circle at $-6$ with shading to the right.",
        },
      },
      questions: [
        {
          id: "m7-u2-two-step-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of $2x+3<11$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<4$" },
              { id: "b", text: "$x<14$" },
              { id: "c", text: "$x>4$" },
              { id: "d", text: "$x<7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Properties of inequality", statement: "Adding, subtracting, or multiplying/dividing by a positive number keeps the inequality direction." },
            ],
            steps: [
              { reasoning: "Subtract $3$ from both sides, then divide by the positive number $2$; the sign stays the same.", working: "2x<8,\\quad x<4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x<4$",
            commonErrors: ["Adding $3$ instead of subtracting, giving $x<7$.", "Reversing the sign when dividing by a positive number."],
          },
        },
        {
          id: "m7-u2-two-step-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x+4\\ge16$. The solution has the form $x\\le c$. Enter $c$.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: -4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Reversing the inequality", statement: "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Subtract $4$ from both sides.", working: "-3x\\ge12", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-3$ and reverse the sign.", working: "x\\le-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le-4$ (so $c=-4$)",
            commonErrors: ["Not reversing the sign, giving $x\\ge-4$.", "Dividing $12$ by $3$ and giving $x\\le4$."],
            examinerNote: "Check: $x=-5$ gives $-3(-5)+4=19\\ge16$, which is true.",
          },
        },
        {
          id: "m7-u2-two-step-inequalities-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $-2(x+1)\\le10$. The solution has the form $x\\ge c$. Enter $c$.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: -6 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Reversing the inequality", statement: "Dividing both sides by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-2$ and reverse the sign.", working: "x+1\\ge-5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $\\frac{10}{-2}$ correctly as $-5$.", marks: 1, markCode: "A" },
              { reasoning: "Subtract $1$ from both sides.", working: "x\\ge-6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge-6$ (so $c=-6$)",
            commonErrors: ["Forgetting to reverse the sign, giving $x\\le-6$.", "Writing $\\frac{10}{-2}=5$."],
            examinerNote: "Check: $x=0$ gives $-2(1)=-2\\le10$, true; $x=-8$ gives $-2(-7)=14$, false.",
          },
        },
        {
          id: "m7-u2-two-step-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Lena has $\\$50$ to spend. She buys a backpack for $\\$8$ and then buys $n$ notebooks that cost $\\$3.50$ each.",
          parts: [
            { label: "a", prompt: "Write an inequality for $n$ and solve it to find the greatest number of notebooks Lena can buy.", marks: 3 },
            { label: "b", prompt: "Describe the graph of the solution set $n\\le12$ on a number line.", marks: 2 },
            { label: "c", prompt: "Explain why the solution for the number of notebooks must also be a whole number greater than or equal to $0$.", marks: 1 },
            { label: "d", prompt: "Solve $-4x+1>13$. The solution has the form $x<c$. Enter $c$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Greatest number of notebooks", answer: 12 },
              { label: "(d) $c$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modeling with inequalities", statement: "A budget is a maximum, so total cost $\\le$ amount available." },
              { kind: "property", name: "Reversing the inequality", statement: "Dividing both sides by a negative number reverses the inequality sign." },
            ],
            steps: [
              { part: "a", reasoning: "Total cost must not exceed $50$.", working: "3.5n+8\\le50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract $8$ from both sides.", working: "3.5n\\le42", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $3.5$.", working: "n\\le12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The endpoint $12$ is included, so use a closed circle at $12$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Values less than or equal to $12$ are included, so shade to the left.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Notebooks are counted in whole items and cannot be negative, so $n$ is one of $0,1,2,\\ldots,12$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Subtract $1$ from both sides.", working: "-4x>12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by $-4$ and reverse the sign.", working: "x<-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.5n+8\\le50$, so $n\\le12$ (b) closed circle at $12$, shaded left (c) $n$ must be a whole number from $0$ to $12$ (d) $x<-3$",
            commonErrors: ["Using an open circle at $12$ even though spending exactly $\\$50$ is allowed.", "Not reversing the sign in (d), giving $x>-3$."],
            examinerNote: "In (a) accept $3.5n\\le42$ as the first line. Check: $12\\times3.5+8=50$.",
          },
        },
      ],
    },
  ],
};
