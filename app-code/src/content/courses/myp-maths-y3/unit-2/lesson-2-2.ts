import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypm3-u2-lesson-2-2",
  code: "2-2",
  title: "Equations and Inequalities",
  goal: "I CAN solve linear equations with unknowns on both sides and with brackets or fractions, and solve and represent linear inequalities.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Inequality", definition: "A statement that two expressions are not equal, using $<$, $>$, $\\le$ or $\\ge$." },
    { term: "Solution set", definition: "All the values that make an inequality true; often shown on a number line." },
    { term: "Compound inequality", definition: "Two inequalities joined, e.g. $-3<x\\le5$, meaning $x$ is greater than $-3$ and at most 5." },
    { term: "Checking a solution", definition: "Substituting the answer back into the original equation to verify it." },
  ],
  concepts: [
    {
      id: "mypm3-u2-linear-equations",
      title: "Solving linear equations",
      skill: "Solve equations with unknowns on both sides, with brackets and with fractions, and check solutions.",
      lesson: {
        sections: [
          {
            heading: "Unknowns on both sides",
            body: `Collect the unknown terms on one side and the numbers on the other. Whatever you do to one side, do to the other.

$5x-3=2x+9 \\Rightarrow 3x=12 \\Rightarrow x=4$. Check: $5(4)-3=17$ and $2(4)+9=17$.`,
          },
          {
            heading: "Brackets",
            body: `Expand brackets first, then solve as usual.

$3(x+2)=x+14 \\Rightarrow 3x+6=x+14 \\Rightarrow 2x=8 \\Rightarrow x=4$.`,
          },
          {
            heading: "Fractions",
            body: `Eliminate fractions by multiplying every term by the lowest common denominator (LCD).

$\\frac{x}{2}+\\frac{x}{3}=5$: LCD is 6, so $3x+2x=30$, giving $5x=30$, $x=6$.`,
          },
        ],
        keyFormulas: [
          { name: "Balance principle", statement: "Whatever operation is applied to one side of an equation must be applied to the other." },
        ],
        workedExample: {
          problem: "Solve $\\frac{x-1}{3}=\\frac{x+2}{4}$.",
          solution: "Multiply both sides by 12 (the LCD): $4(x-1)=3(x+2)$, so $4x-4=3x+6$, giving $x=10$. Check: $\\frac{9}{3}=3$ and $\\frac{12}{4}=3$.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-linear-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $7x+4=3x+20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$" },
              { id: "b", text: "$x=6$" },
              { id: "c", text: "$x=8$" },
              { id: "d", text: "$x=4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Apply the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Collect $x$ terms and numbers.", working: "4x=16\\Rightarrow x=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=4$",
            commonErrors: ["Subtracting $x$ terms incorrectly, e.g. $10x=16$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2(x-3)=x+4$, and check your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Expand brackets first, then solve." },
            ],
            steps: [
              { reasoning: "Expand and collect terms.", working: "2x-6=x+4\\Rightarrow x=10", marks: 1, markCode: "M" },
              { reasoning: "Check by substitution.", working: "2(10-3)=14\\text{ and }10+4=14\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=10$",
            commonErrors: ["Expanding $2(x-3)$ as $2x-3$.", "Not checking the answer."],
            examinerNote: "M1 for correct equation, A1 for verified answer.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\frac{x+1}{4}-\\frac{x-2}{3}=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term by the LCD (12) before solving." },
            ],
            steps: [
              { reasoning: "Multiply through by 12.", working: "3(x+1)-4(x-2)=12", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect.", working: "3x+3-4x+8=12\\Rightarrow -x+11=12\\Rightarrow x=-1", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{0}{4}-\\frac{-3}{3}=0-(-1)=1$.", working: "\\frac{-1+1}{4}-\\frac{-1-2}{3}=0+1=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-1$",
            commonErrors: ["Multiplying only the fraction terms by 12, not the 1.", "Sign error when expanding $-4(x-2)$."],
            examinerNote: "M1 for clearing fractions correctly, M1 for solving, A1 for verified answer.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A taxi company charges a fixed fee of 3 euros plus 2 euros per kilometre. A journey costs 19 euros.",
          parts: [
            { label: "a", prompt: "Write an equation for the cost $C$ of a journey of $d$ kilometres.", marks: 1 },
            { label: "b", prompt: "Form an equation for this particular journey.", marks: 1 },
            { label: "c", prompt: "Solve the equation to find the distance travelled.", marks: 2 },
            { label: "d", prompt: "A second company charges 4 euros plus 1.5 euros per kilometre. For what journey distance would the two companies charge the same amount? Solve and check.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming equations from context", statement: "Translate the verbal description into an algebraic equation." },
              { kind: "principle", name: "Balance principle", statement: "Apply the same operations to both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Fixed fee plus per-kilometre charge.", working: "C=2d+3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute $C=19$.", working: "19=2d+3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract 3 and divide by 2.", working: "2d=16\\Rightarrow d=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the distance.", working: "8\\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the second company's cost equation and equate.", working: "4+1.5d=2d+3\\Rightarrow 1=0.5d", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $d$.", working: "d=2\\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check company 1: $2(2)+3=7$ euros.", working: "2\\times2+3=7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check company 2: $4+1.5(2)=7$ euros — equal.", working: "4+1.5\\times2=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C=2d+3$ (b) $19=2d+3$ (c) $d=8$ km (d) $d=2$ km, both charge 7 euros",
            commonErrors: ["In (d), writing the second equation as $4d+1.5$ instead of $1.5d+4$.", "Not checking the answer in (d)."],
            examinerNote: "B1 for equations, M1 A1 for solving, M1 A1 for verification in (d).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x+7=22$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=7$" },
              { id: "b", text: "$x=6$" },
              { id: "c", text: "$x=5$" },
              { id: "d", text: "$x=8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Apply the same operation to both sides." },
            ],
            steps: [
              { reasoning: "Subtract 7 then divide by 3: $3x=15$, so $x=5$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=5$",
            commonErrors: ["Dividing 22 by 3 before removing the 7."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $4x-2=2x+10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=6$" },
              { id: "b", text: "$x=4$" },
              { id: "c", text: "$x=12$" },
              { id: "d", text: "$x=8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Collect unknown terms on one side and numbers on the other." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and add 2: $2x=12$, so $x=6$.", working: "x=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=6$",
            commonErrors: ["Subtracting $4x$ and $2x$ to get $6x=12$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $2(x+3)=x+11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=17$" },
              { id: "c", text: "$x=5$" },
              { id: "d", text: "$x=6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Expand brackets before collecting terms." },
            ],
            steps: [
              { reasoning: "Expand: $2x+6=x+11$, so $x=5$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=5$",
            commonErrors: ["Expanding $2(x+3)$ as $2x+3$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x/3+2=6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=24$" },
              { id: "b", text: "$x=8$" },
              { id: "c", text: "$x=18$" },
              { id: "d", text: "$x=12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Subtract 2 then multiply both sides by 3." },
            ],
            steps: [
              { reasoning: "$x/3=4$, so $x=12$.", working: "x=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=12$",
            commonErrors: ["Multiplying only the left side by 3."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x-4=2x+11$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Collect x terms and constants on opposite sides." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and add 4: $3x=15$.", working: "3x=15", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Subtracting $5x$ and $2x$ incorrectly."],
            examinerNote: "M1 for $3x=15$, A1 for 5.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3(x-2)=2x+1$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Expand brackets first, then collect terms." },
            ],
            steps: [
              { reasoning: "Expand: $3x-6=2x+1$, so $x=7$.", working: "x=7", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
            commonErrors: ["Expanding $3(x-2)$ as $3x-2$."],
            examinerNote: "M1 for expanded equation, A1 for 7.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $(x+1)/4=(x-2)/3$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term by the LCD 12." },
            ],
            steps: [
              { reasoning: "Multiply by 12: $3(x+1)=4(x-2)$, so $3x+3=4x-8$.", working: "3x+3=4x-8", marks: 1, markCode: "M" },
              { reasoning: "Solve: $x=11$.", working: "x=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=11$",
            commonErrors: ["Multiplying only one side by 12."],
            examinerNote: "M1 for cleared equation, A1 for 11.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the best first step to solve $x/2+x/3=5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiply only the left side by 6" },
              { id: "b", text: "Divide both sides by 5" },
              { id: "c", text: "Add the fractions to get $x/5=5$" },
              { id: "d", text: "Multiply every term by 6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term by the lowest common denominator." },
            ],
            steps: [
              { reasoning: "LCD of 2 and 3 is 6; multiply all terms by 6 to get $3x+2x=30$.", working: "multiply by 6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Multiply every term by 6",
            commonErrors: ["Multiplying only the fraction terms, not the 5."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which value satisfies $2x-3=7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=7$" },
              { id: "d", text: "$x=4$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking a solution", statement: "Substitute the value back into the original equation." },
            ],
            steps: [
              { reasoning: "Solve: $2x=10$, so $x=5$; check $2(5)-3=7$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x=5$",
            commonErrors: ["Forgetting to add 3 before dividing by 2."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $2(x-1)/3=(x+4)/2$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clearing fractions", statement: "Multiply every term by the LCD 6." },
            ],
            steps: [
              { reasoning: "Multiply by 6: $4(x-1)=3(x+4)$, so $4x-4=3x+12$.", working: "4x-4=3x+12", marks: 1, markCode: "M" },
              { reasoning: "Solve: $x=16$.", working: "x=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=16$",
            commonErrors: ["Expanding $4(x-1)$ as $4x-1$."],
            examinerNote: "M1 for cleared equation, A1 for 16.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone plan costs a fixed fee of 5 euros plus 0.20 euros per minute. A customer's bill is 15 euros. Write an equation and find the number of minutes used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming equations from context", statement: "Total cost = fixed fee + rate × minutes." },
            ],
            steps: [
              { reasoning: "Let m be minutes: $15 = 5 + 0.2m$.", working: "15 = 5 + 0.2m", marks: 1, markCode: "M" },
              { reasoning: "Subtract 5 and divide by 0.2.", working: "0.2m = 10 \\Rightarrow m = 50", marks: 1, markCode: "M" },
              { reasoning: "State the answer in context.", working: "50 minutes", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=50$ minutes",
            commonErrors: ["Dividing 15 by 0.2 without removing the fixed fee."],
            examinerNote: "M1 for equation, M1 for solving, A1 for context answer.",
          },
        },
        {
          id: "mypm3-u2-linear-equations-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $3x+2=5x-8$ and check your answer by substitution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "Collect x terms and constants on opposite sides." },
              { kind: "principle", name: "Checking a solution", statement: "Substitute the solution into the original equation." },
            ],
            steps: [
              { reasoning: "Solve: $10=2x$, so $x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "Check left side: $3(5)+2=17$.", working: "17", marks: 1, markCode: "M" },
              { reasoning: "Check right side: $5(5)-8=17$; both sides equal, so the solution is correct.", working: "17=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$; check gives $17=17$.",
            commonErrors: ["Not checking the answer."],
            examinerNote: "M1 for solution, M1 for left side, A1 for verified equality.",
          },
        },
      ],
    },
    {
      id: "mypm3-u2-inequalities",
      title: "Linear inequalities",
      skill: "Solve linear inequalities, solve compound inequalities, and represent solution sets on a number line.",
      lesson: {
        sections: [
          {
            heading: "Solving inequalities",
            body: `Solve like an equation, but remember: **multiplying or dividing by a negative number reverses the inequality sign**.

$3x-5<10 \\Rightarrow 3x<15 \\Rightarrow x<5$.

$-2x>6 \\Rightarrow x<-3$ (sign reversed!).`,
          },
          {
            heading: "Representing on a number line",
            body: "Use an **open circle** for $<$ or $>$ (the boundary is not included) and a **closed circle** for $\\le$ or $\\ge$ (it is included). Shade the side of the line where the inequality is true.",
          },
          {
            heading: "Compound inequalities",
            body: "A **compound inequality** combines two conditions. $-3<x\\le5$ means $x>-3$ **and** $x\\le5$ — the solution is the overlap of both conditions on the number line.",
          },
        ],
        keyFormulas: [
          { name: "Sign reversal", statement: "Multiplying or dividing an inequality by a negative reverses $<$ to $>$ and vice versa" },
          { name: "Compound inequality", statement: "$a<x\\le b$ means $x>a$ and $x\\le b$" },
        ],
        workedExample: {
          problem: "Solve $5-2x\\ge11$ and describe the solution set.",
          solution: "$-2x\\ge6$. Dividing by $-2$ reverses the sign: $x\\le-3$. On a number line, a closed circle at $-3$ shaded to the left.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $4x+1<9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<3$" },
              { id: "b", text: "$x<2$" },
              { id: "c", text: "$x\\le2$" },
              { id: "d", text: "$x>2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Same operations as equations; reverse the sign only when multiplying/dividing by a negative." },
            ],
            steps: [
              { reasoning: "Subtract 1 and divide by 4 (positive, so no reversal).", working: "4x<8\\Rightarrow x<2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x<2$",
            commonErrors: ["Dividing by 4 but reversing the sign unnecessarily."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x+2\\le14$. Give your answer as an inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing by $-3$ reverses $\\le$ to $\\ge$." },
            ],
            steps: [
              { reasoning: "Subtract 2: $-3x\\le12$.", working: "-3x\\le12", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-3$ and reverse the sign.", working: "x\\ge-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge-4$",
            commonErrors: ["Forgetting to reverse the sign, giving $x\\le-4$.", "Reversing when only subtracting (no division by negative)."],
            examinerNote: "M1 for correct manipulation, A1 for correct sign.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the compound inequality $-4<2x+1\\le9$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequality", statement: "Solve both parts simultaneously; the solution is the overlap." },
            ],
            steps: [
              { reasoning: "Subtract 1 from all three parts.", working: "-5<2x\\le8", marks: 1, markCode: "M" },
              { reasoning: "Divide all parts by 2 (positive, no reversal).", working: "-2.5<x\\le4", marks: 1, markCode: "M" },
              { reasoning: "State the compound inequality.", working: "-2.5<x\\le4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2.5<x\\le4$",
            commonErrors: ["Reversing only one side of the compound inequality.", "Splitting into two separate answers instead of keeping the overlap."],
            examinerNote: "M1 for correct subtraction, M1 for correct division, A1 for final compound form.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cinema has 240 seats. For a film screening, the manager wants to sell tickets at 8 euros each and needs to cover costs of at least 1500 euros. Adult tickets cost 8 euros and child tickets cost 5 euros. Let $a$ be the number of adult tickets and $c$ the number of child tickets sold.",
          parts: [
            { label: "a", prompt: "Write down an inequality for the number of tickets that can be sold (seat limit).", marks: 2 },
            { label: "b", prompt: "Write down an inequality for the revenue needed to cover costs.", marks: 2 },
            { label: "c", prompt: "If 150 child tickets are sold, find the minimum number of adult tickets needed to cover costs.", marks: 2 },
            { label: "d", prompt: "Explain whether selling 150 child tickets and the minimum number of adult tickets from part (c) is possible within the seat limit, and what this means for the manager.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming inequalities from context", statement: "Translate constraints into inequalities using the given variables." },
              { kind: "principle", name: "Checking feasibility", statement: "Verify that a solution satisfies all constraints simultaneously." },
            ],
            steps: [
              { part: "a", reasoning: "Total tickets cannot exceed 240 seats.", working: "a+c\\le240", marks: 1, markCode: "B" },
              { part: "a", reasoning: "State the inequality.", working: "a+c\\le240", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Revenue is $8a+5c$ and must be at least 1500.", working: "8a+5c\\ge1500", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inequality.", working: "8a+5c\\ge1500", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $c=150$: $8a+750\\ge1500$.", working: "8a\\ge750", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve: $a\\ge93.75$, so minimum whole number is 94.", working: "a\\ge93.75\\Rightarrow a_{\\min}=94", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check seats: $94+150=244>240$ — exceeds the seat limit.", working: "94+150=244>240", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude: this combination is not possible; the manager must sell fewer child tickets or find another way to cover costs.", working: "\\text{infeasible}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $a+c\\le240$ (b) $8a+5c\\ge1500$ (c) minimum 94 adult tickets (d) $94+150=244>240$, so this is not possible within the seat limit",
            commonErrors: ["In (c), rounding 93.75 down to 93 instead of up to 94.", "In (d), not checking the seat constraint."],
            examinerNote: "B1 A1 for inequalities, M1 A1 for minimum, R1 R1 for feasibility analysis.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x+3<11$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<4$" },
              { id: "b", text: "$x\\le4$" },
              { id: "c", text: "$x>4$" },
              { id: "d", text: "$x<7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Use the same steps as equations; reverse only when multiplying or dividing by a negative." },
            ],
            steps: [
              { reasoning: "Subtract 3 and divide by 2: $2x<8$, so $x<4$.", working: "x<4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x<4$",
            commonErrors: ["Reversing the sign although 2 is positive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $-x+5>2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>-3$" },
              { id: "b", text: "$x>3$" },
              { id: "c", text: "$x<-3$" },
              { id: "d", text: "$x<3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Subtract 5, then divide by -1 and reverse the sign." },
            ],
            steps: [
              { reasoning: "$-x>-3$; dividing by -1 reverses to $x<3$.", working: "x<3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x<3$",
            commonErrors: ["Forgetting to reverse when dividing by -1."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $3x-1\\ge8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\le3$" },
              { id: "b", text: "$x>3$" },
              { id: "c", text: "$x\\ge9$" },
              { id: "d", text: "$x\\ge3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Add 1 then divide by 3; 3 is positive so no reversal." },
            ],
            steps: [
              { reasoning: "$3x\\ge9$, so $x\\ge3$.", working: "x\\ge3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x\\ge3$",
            commonErrors: ["Reversing the inequality unnecessarily."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the compound inequality $-2<x\\le4$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x$ is greater than -2 and less than 4" },
              { id: "b", text: "$x$ is between -2 and 4 inclusive" },
              { id: "c", text: "$x$ is at least -2 and less than 4" },
              { id: "d", text: "$x$ is greater than -2 and at most 4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound inequality", statement: "$a<x\\le b$ means $x>a$ and $x\\le b$." },
            ],
            steps: [
              { reasoning: "The left inequality is strict and the right includes equality.", working: "x>-2 and x\\le4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x$ is greater than -2 and at most 4",
            commonErrors: ["Treating $\\le$ as strict or $<$ as inclusive."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which inequality has solution $x\\ge-2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+3\\le1$" },
              { id: "b", text: "$x+3\\ge1$" },
              { id: "c", text: "$-x\\ge2$" },
              { id: "d", text: "$x-3\\ge1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Solve each option and compare the solution set." },
            ],
            steps: [
              { reasoning: "$x+3\\ge1$ gives $x\\ge-2$.", working: "x\\ge-2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x+3\\ge1$",
            commonErrors: ["Ignoring the sign reversal in option (c)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-inequalities-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the boundary value of $x$ for $4x-7\\le13$.",
          response: { type: "numeric", parts: [{ label: "Boundary value", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Solve the corresponding equation to find the boundary." },
            ],
            steps: [
              { reasoning: "Add 7 and divide by 4: $4x\\le20$.", working: "4x\\le20", marks: 1, markCode: "M" },
              { reasoning: "The boundary is $x=5$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Reversing the sign although 4 is positive."],
            examinerNote: "M1 for $4x\\le20$, A1 for boundary 5.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the boundary value of $x$ for $-2x+1<9$.",
          response: { type: "numeric", parts: [{ label: "Boundary value", answer: -4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing by -2 reverses the inequality." },
            ],
            steps: [
              { reasoning: "Subtract 1: $-2x<8$; divide by -2 and reverse.", working: "x>-4", marks: 1, markCode: "M" },
              { reasoning: "The boundary value is -4.", working: "x=-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-4$",
            commonErrors: ["Forgetting the sign reversal and giving boundary 4."],
            examinerNote: "M1 for manipulation, A1 for boundary -4.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve the compound inequality $-1<2x+1\\le9$.",
          response: { type: "numeric", parts: [{ label: "Lower boundary", answer: -1 }, { label: "Upper boundary", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequality", statement: "Apply the same operation to all three parts and keep the overlap." },
            ],
            steps: [
              { reasoning: "Subtract 1 from all parts: $-2<2x\\le8$.", working: "-2<2x\\le8", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2: $-1<x\\le4$, so boundaries are -1 and 4.", working: "-1<x\\le4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1<x\\le4$",
            commonErrors: ["Reversing only one side of the compound inequality."],
            examinerNote: "M1 for subtraction, A1 for both boundaries.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A club needs revenue of at least 800 euros. Adult tickets cost 6 euros and child tickets cost 4 euros. If 100 child tickets are sold, find the minimum whole number of adult tickets needed.",
          response: { type: "numeric", parts: [{ label: "Minimum adult tickets", answer: 67 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming inequalities from context", statement: "Revenue must satisfy $6a+4c\\ge800$." },
            ],
            steps: [
              { reasoning: "Substitute $c=100$: $6a+400\\ge800$, so $6a\\ge400$.", working: "6a\\ge400", marks: 1, markCode: "M" },
              { reasoning: "Solve and round up to a whole ticket: $a\\ge66.67$, so minimum is 67.", working: "a=67", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$67$ adult tickets",
            commonErrors: ["Rounding 66.67 down to 66."],
            examinerNote: "M1 for inequality, A1 for 67.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the boundary value of $x$ for $(2x-1)/3\\le5$.",
          response: { type: "numeric", parts: [{ label: "Boundary value", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Multiply by 3, add 1, then divide by 2." },
            ],
            steps: [
              { reasoning: "Multiply by 3: $2x-1\\le15$; add 1: $2x\\le16$.", working: "2x\\le16", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2: boundary $x=8$.", working: "x=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$",
            commonErrors: ["Multiplying only part of the left side by 3."],
            examinerNote: "M1 for $2x\\le16$, A1 for boundary 8.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how to show the solution of $-2\\le x<5$ on a number line, including the circles and shading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number line representation", statement: "Closed circle includes the boundary; open circle excludes it; shade the overlap." },
            ],
            steps: [
              { reasoning: "At -2 use a closed circle because $x\\ge-2$ includes -2.", working: "closed circle at -2", marks: 1, markCode: "R" },
              { reasoning: "At 5 use an open circle because $x<5$ excludes 5.", working: "open circle at 5", marks: 1, markCode: "R" },
              { reasoning: "Shade the region between -2 and 5.", working: "shade between -2 and 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closed circle at -2, open circle at 5, shade between them.",
            commonErrors: ["Using open and closed circles the wrong way round."],
            examinerNote: "R1 for each circle, A1 for shading.",
          },
        },
        {
          id: "mypm3-u2-inequalities-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why solving $-3x>6$ gives $x<-3$, and describe how you would check whether $x=-4$ is a solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing an inequality by a negative reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Divide both sides by -3 and reverse $>$ to $<$.", working: "x<-3", marks: 1, markCode: "M" },
              { reasoning: "Explain the reversal: multiplying by a negative flips the order of numbers.", working: "negative divisor reverses sign", marks: 1, markCode: "R" },
              { reasoning: "Check $x=-4$: $-3(-4)=12>6$, so -4 is in the solution set.", working: "12>6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<-3$; $x=-4$ is a solution because $12>6$.",
            commonErrors: ["Writing $x>-3$ by forgetting the reversal."],
            examinerNote: "M1 for solution, R1 for reversal reason, A1 for check.",
          },
        },
      ],
    },
  ],
};
