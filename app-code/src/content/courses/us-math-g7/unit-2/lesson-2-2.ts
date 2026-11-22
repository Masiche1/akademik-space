import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m7-u2-lesson-2-2",
  code: "2-2",
  title: "Expressions",
  goal: "I CAN write equivalent expressions using the distributive property, factoring and combining like terms, and solve multi-step problems with rational numbers.",
  standards: ["7.EE.A.1", "7.EE.A.2", "7.EE.B.3"],
  vocabulary: [
    { term: "Equivalent expressions", definition: "Expressions that have the same value for every value of the variable, such as $3(x+2)$ and $3x+6$." },
    { term: "Like terms", definition: "Terms that have the same variable raised to the same power, such as $4x$ and $-9x$. Only like terms can be combined." },
    { term: "Distributive property", definition: "$a(b+c)=ab+ac$. Multiplying a sum by a number is the same as multiplying each term by the number." },
    { term: "Factoring", definition: "Rewriting an expression as a product by taking out a common factor, for example $12x+18=6(2x+3)$." },
    { term: "Coefficient", definition: "The number multiplied by a variable in a term. In $-5x$ the coefficient is $-5$." },
    { term: "Estimation", definition: "Using rounded, compatible numbers to find an approximate answer and check that an exact answer is reasonable." },
  ],
  concepts: [
    {
      id: "m7-u2-equivalent-expressions",
      title: "Equivalent expressions",
      skill: "Use the distributive property, factoring and combining like terms to write equivalent expressions.",
      lesson: {
        sections: [
          {
            heading: "The distributive property",
            body: "Multiply every term inside the parentheses by the number outside, including its sign: $-3(x-4)=-3x+12$. A negative factor changes the sign of every term.",
          },
          {
            heading: "Combining like terms",
            body: "Add or subtract the coefficients of like terms and leave the variable part unchanged: $4x+7-9x+3=-5x+10$. Terms such as $x$ and $x^2$, or $x$ and a plain number, are **not** like terms.",
          },
          {
            heading: "Factoring",
            body: "Factoring reverses the distributive property. Find the greatest common factor of all the terms and take it out: $12x+18=6(2x+3)$. You can check by expanding.",
          },
        ],
        keyFormulas: [
          { name: "Distributive property", statement: "$a(b+c)=ab+ac$" },
          { name: "Factoring", statement: "$ab+ac=a(b+c)$" },
        ],
        workedExample: {
          problem: "Expand and simplify $2(5x-3)-4(x-2)$.",
          solution: "Distribute: $10x-6-4x+8$. The $-4$ multiplies both terms, so $-4(x-2)=-4x+8$. Combine like terms: $(10x-4x)+(-6+8)=6x+2$.",
        },
      },
      questions: [
        {
          id: "m7-u2-equivalent-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression is equivalent to $3(2x-5)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x-8$" },
              { id: "b", text: "$6x+15$" },
              { id: "c", text: "$6x-5$" },
              { id: "d", text: "$6x-15$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Distributive property", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { reasoning: "Multiply both terms inside the parentheses by $3$.", working: "3(2x-5)=6x-15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $6x-15$",
            commonErrors: ["Multiplying only the first term, giving $6x-5$.", "Changing the sign of the constant term, giving $6x+15$."],
          },
        },
        {
          id: "m7-u2-equivalent-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factor $12x+18$ by taking out the greatest common factor of $6$. Write it in the form $6(ax+b)$ and enter the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "$b$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Factoring", statement: "$ab+ac=a(b+c)$" },
            ],
            steps: [
              { reasoning: "Divide the first term by the common factor $6$.", working: "12x\\div6=2x", marks: 1, markCode: "M" },
              { reasoning: "Divide the second term by $6$ and write the factored form.", working: "18\\div6=3,\\quad 12x+18=6(2x+3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6(2x+3)$, so $a=2$ and $b=3$",
            commonErrors: ["Writing $6(2x+18)$ by dividing only the first term.", "Writing $6(2x+12)$."],
            examinerNote: "Check by expanding: $6\\times2x=12x$ and $6\\times3=18$.",
          },
        },
        {
          id: "m7-u2-equivalent-expressions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Expand and simplify $-3(x-4)-2(1-3x)$. Write your answer in the form $px+q$ and enter $p$ and $q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$p$", answer: 3 },
              { label: "$q$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Distributive property", statement: "$a(b+c)=ab+ac$, including when $a$ is negative." },
              { kind: "definition", name: "Like terms", statement: "Terms with the same variable part can be combined by adding their coefficients." },
            ],
            steps: [
              { reasoning: "Distribute $-3$ over $(x-4)$.", working: "-3x+12", marks: 1, markCode: "M" },
              { reasoning: "Distribute $-2$ over $(1-3x)$; the negative factor changes both signs.", working: "-2+6x", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms.", working: "(-3x+6x)+(12-2)=3x+10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x+10$, so $p=3$ and $q=10$",
            commonErrors: ["Writing $-2(1-3x)=-2-6x$ (sign error on the second term).", "Writing $-3(x-4)=-3x-12$."],
            examinerNote: "M1 for each correct expansion. A1 for both coefficients correct.",
          },
        },
        {
          id: "m7-u2-equivalent-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the expression $E=\\frac{1}{2}(8x-6)+3(x+2)-2x$.",
          parts: [
            { label: "a", prompt: "Expand and simplify $E$ to the form $px+q$. Enter $p$ and $q$.", marks: 3 },
            { label: "b", prompt: "Find the value of $E$ when $x=-2$.", marks: 1 },
            { label: "c", prompt: "Factor $10x+15$ completely.", marks: 2 },
            { label: "d", prompt: "Mia says that $5x+3$ is equivalent to $5(x+3)$. Show that she is wrong by choosing a value of $x$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $p$", answer: 5 },
              { label: "(a) $q$", answer: 3 },
              { label: "(b) Value of $E$ when $x=-2$", answer: -7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Distributive property", statement: "$a(b+c)=ab+ac$" },
              { kind: "definition", name: "Equivalent expressions", statement: "Equivalent expressions have the same value for every value of the variable, so one counterexample shows two expressions are not equivalent." },
            ],
            steps: [
              { part: "a", reasoning: "Expand the first two products.", working: "\\tfrac{1}{2}(8x-6)=4x-3,\\quad 3(x+2)=3x+6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Write the full expression and group like terms.", working: "4x-3+3x+6-2x=(4x+3x-2x)+(-3+6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "5x+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=-2$ into the simplified expression.", working: "5(-2)+3=-7", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The greatest common factor of $10$ and $15$ is $5$.", working: "10x+15=5(2x+\\ldots)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide the second term by $5$.", working: "5(2x+3)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Choose a value, for example $x=1$, and evaluate both expressions.", working: "5(1)+3=8,\\quad 5(1+3)=20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The values differ, so the expressions are not equivalent. Mia forgot to multiply the $3$ by $5$: $5(x+3)=5x+15$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $5x+3$ (b) $-7$ (c) $5(2x+3)$ (d) At $x=1$: $8\\ne20$, so not equivalent; $5(x+3)=5x+15$.",
            commonErrors: ["Writing $\\frac{1}{2}(8x-6)=4x-6$ (not halving the second term).", "Substituting into only one of the two expressions in (d)."],
            examinerNote: "In (d) any value of $x$ is a valid counterexample, because $5x+3=5x+15$ has no solution. Accept any correct counterexample.",
          },
        },
      ],
    },
    {
      id: "m7-u2-multi-step-rational-problems",
      title: "Multi-step problems with rational numbers",
      skill: "Solve multi-step real-world problems with fractions, decimals and percents and check answers by estimation.",
      lesson: {
        sections: [
          {
            heading: "Plan, solve, check",
            body: "Read the problem, decide the operations, and choose one number form (all decimals or all fractions) to work with. Write an expression for each step. Convert percents to decimals: $25\\%=0.25$.",
          },
          {
            heading: "Percent changes in one step",
            body: "A discount of $25\\%$ leaves $75\\%$ of the price, so multiply by $0.75$. A tax of $8\\%$ makes the price $108\\%$ of the original, so multiply by $1.08$. Successive changes multiply: do not add the percents.",
          },
          {
            heading: "Estimation",
            body: "Round to friendly numbers to check that your answer is reasonable. $19.8\\%$ of $\\$61.50$ is about $20\\%$ of $\\$60$, which is $\\$12$. An exact answer far from the estimate signals an error.",
          },
        ],
        keyFormulas: [
          { name: "Percent discount", statement: "$\\text{sale price}=\\text{price}\\times(1-r)$" },
          { name: "Percent increase", statement: "$\\text{new amount}=\\text{amount}\\times(1+r)$" },
        ],
        workedExample: {
          problem: "A pair of shoes costs $\\$45$. It is marked down $20\\%$. Find the sale price, then the total including $6\\%$ sales tax.",
          solution: "Sale price: $45\\times0.80=36$, so $\\$36$. With tax: $36\\times1.06=38.16$, so $\\$38.16$.",
        },
      },
      questions: [
        {
          id: "m7-u2-multi-step-rational-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best estimate of $19.8\\%$ of $\\$61.50$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$12$" },
              { id: "b", text: "$\\$6$" },
              { id: "c", text: "$\\$30$" },
              { id: "d", text: "$\\$120$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Estimation", statement: "Round to compatible numbers: $19.8\\%\\approx20\\%$ and $\\$61.50\\approx\\$60$." },
            ],
            steps: [
              { reasoning: "Round to $20\\%$ of $\\$60$, which is one fifth of $\\$60$.", working: "0.2\\times60=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\$12$",
            commonErrors: ["Using $10\\%$ instead of $20\\%$, giving $\\$6$.", "Misplacing the decimal point, giving $\\$120$."],
          },
        },
        {
          id: "m7-u2-multi-step-rational-problems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tom earns $\\$14.50$ per hour and worked $6.5$ hours on Saturday. How much did he earn, in dollars?",
          response: { type: "numeric", parts: [{ label: "Earnings", answer: 94.25, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total earnings", statement: "$\\text{earnings}=\\text{rate}\\times\\text{time}$" },
            ],
            steps: [
              { reasoning: "Multiply the hourly rate by the hours worked.", working: "14.5\\times6.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $14.5\\times6=87$ and $14.5\\times0.5=7.25$.", working: "87+7.25=94.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$94.25$",
            commonErrors: ["Misplacing the decimal point in the product.", "Adding the rate and the hours."],
            examinerNote: "M1 for $14.5\\times6.5$ (oe). A1 cao.",
          },
        },
        {
          id: "m7-u2-multi-step-rational-problems-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A jacket has a regular price of $\\$80$. It is on sale for $25\\%$ off. A sales tax of $8\\%$ is then added to the sale price. Find the final cost, in dollars.",
          response: { type: "numeric", parts: [{ label: "Final cost", answer: 64.8, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change multipliers", statement: "A $r$ discount multiplies by $1-r$; a tax of $r$ multiplies by $1+r$." },
            ],
            steps: [
              { reasoning: "The sale price is $75\\%$ of the regular price.", working: "80\\times0.75=60", marks: 1, markCode: "M" },
              { reasoning: "Tax is applied to the sale price, so multiply by $1.08$.", working: "60\\times1.08", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "64.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$64.80$",
            commonErrors: ["Combining the percents as $25\\%-8\\%=17\\%$ off.", "Taking $25\\%$ off and then adding $8\\%$ of the original price, $\\$80$, instead of $8\\%$ of the sale price."],
            examinerNote: "Accept $80\\times0.75\\times1.08$. A1 cao.",
          },
        },
        {
          id: "m7-u2-multi-step-rational-problems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A class of $30$ students takes a field trip. The bus costs a flat $\\$240$ and each student ticket costs $\\$8.50$.",
          parts: [
            { label: "a", prompt: "Find the total cost of the trip, in dollars.", marks: 2 },
            { label: "b", prompt: "Find the cost per student, in dollars.", marks: 1 },
            { label: "c", prompt: "A fundraiser pays for $40\\%$ of the total cost. Find how much the class still has to pay, in dollars.", marks: 2 },
            { label: "d", prompt: "Use estimation by rounding the ticket price to $\\$9$ to show that your answer to (a) is reasonable.", marks: 2 },
            { label: "e", prompt: "Another class has a total budget of $\\$410$. Write an equation for the number of students $n$ and solve it to find how many students can go.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total cost", answer: 495, unit: "dollars" },
              { label: "(b) Cost per student", answer: 16.5, unit: "dollars" },
              { label: "(c) Amount still to pay", answer: 297, unit: "dollars" },
              { label: "(e) Number of students", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modeling a total cost", statement: "Total cost = fixed cost + (cost per item) $\\times$ (number of items)." },
              { kind: "skill", name: "Estimation", statement: "Round to compatible numbers and check the exact answer is close." },
            ],
            steps: [
              { part: "a", reasoning: "Tickets cost $8.50$ each for $30$ students; add the flat bus cost.", working: "240+8.5\\times30=240+255", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "495", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the total cost by the number of students.", working: "495\\div30=16.5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The class pays the remaining $60\\%$ of the cost.", working: "495\\times0.60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "297", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Round the ticket price to $9$ and compute the estimate.", working: "240+9\\times30=240+270=510", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$510$ is close to $495$ (and slightly higher because $9>8.50$), so $495$ is reasonable.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Write the equation: bus cost plus tickets equals the budget, then subtract $240$ and divide by $8.5$.", working: "240+8.5n=410\\;\\Rightarrow\\;8.5n=170", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Divide both sides by $8.5$.", working: "n=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$495$ (b) $\\$16.50$ (c) $\\$297$ (d) Estimate $\\$510$, close to $\\$495$ (e) $20$ students",
            commonErrors: ["Multiplying the bus cost by the number of students.", "Calculating $40\\%$ of the cost as the amount the class pays rather than the amount the fundraiser pays."],
            examinerNote: "In (c) accept $495-198$. In (d) the comparison must be stated.",
          },
        },
      ],
    },
  ],
};
