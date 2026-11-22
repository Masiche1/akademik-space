import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypms4-u1-lesson-1-2",
  code: "1-2",
  title: "Inequalities",
  goal: "I CAN solve linear and compound inequalities, represent solutions on a number line, and find integer solutions to double inequalities.",
  standards: [
    "MYP Maths: Number",
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Inequality", definition: "A statement that two quantities are not equal, using $<$, $>$, $\\le$ or $\\ge$." },
    { term: "Compound inequality", definition: "An inequality with two parts joined by 'and', e.g. $2<3x+1\\le10$." },
    { term: "Solution set", definition: "All values that satisfy an inequality; often a range shown on a number line." },
    { term: "Number line", definition: "A line showing numbers in order, used to represent inequality solutions." },
    { term: "Integer solutions", definition: "Whole-number values that satisfy an inequality, e.g. $x \\in \\{2,3,4\\}$." },
  ],
  concepts: [
    {
      id: "mypms4-u1-linear-ineq",
      title: "Solving linear inequalities",
      skill: "Solve linear inequalities, remembering to reverse the sign when multiplying or dividing by a negative.",
      lesson: {
        sections: [
          {
            heading: "Inequality symbols",
            body: "The symbols $<$ (less than), $>$ (greater than), $\\le$ (less than or equal to) and $\\ge$ (greater than or equal to) compare quantities. The solution of an inequality is usually a range of values, not a single value.",
          },
          {
            heading: "Solving inequalities",
            body: "Solve inequalities like equations: isolate the variable using inverse operations. **Key rule**: when you multiply or divide both sides by a **negative** number, **reverse the inequality sign**. For example, $-2x<8$ becomes $x>-4$ after dividing by $-2$.",
          },
          {
            heading: "Number lines",
            body: "Represent solutions on a number line: an **open circle** for $<$ or $>$ (value not included) and a **closed (filled) circle** for $\\le$ or $\\ge$ (value included). Shade the direction of the solution.",
          },
        ],
        keyFormulas: [
          { name: "Sign reversal", statement: "Multiplying or dividing by a negative reverses $<$↔$>$ and $\\le$↔$\\ge$" },
          { name: "Number line", statement: "Open circle = excluded; closed circle = included" },
        ],
        workedExample: {
          problem: "Solve $3x-4\\le11$ and represent the solution on a number line.",
          solution: "$3x\\le15$, so $x\\le5$. On a number line, a closed circle at 5 with shading to the left.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-ineq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+7>12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<19$" },
              { id: "b", text: "$x>5$" },
              { id: "c", text: "$x>19$" },
              { id: "d", text: "$x<5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Isolate the variable using inverse operations." },
            ],
            steps: [
              { reasoning: "Subtract 7 from both sides to get $x>5$.", working: "x>12-7=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x>5$",
            commonErrors: ["Subtracting instead of adding, or reversing the sign unnecessarily."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-ineq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x<12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-36$" },
              { id: "b", text: "$x>4$" },
              { id: "c", text: "$x>-4$" },
              { id: "d", text: "$x<-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing by a negative reverses the inequality." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-3$ and reverse the sign.", working: "x>\\frac{12}{-3}", marks: 1, markCode: "M" },
              { reasoning: "$x>-4$.", working: "x>-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>-4$",
            commonErrors: ["Forgetting to reverse the sign — the most common error."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the compound inequality $2<3x+1\\le10$, giving your answer in the form $a<x\\le b$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1<x\\le3$" },
              { id: "b", text: "$1<x<3$" },
              { id: "c", text: "$\\frac{1}{3}<x\\le3$" },
              { id: "d", text: "$\\frac{1}{3}<x<3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequalities", statement: "Solve each part, keeping the original inequality directions." },
            ],
            steps: [
              { reasoning: "Subtract 1: $1<3x\\le9$.", working: "1<3x\\le9", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3 (positive, no reversal): $\\frac{1}{3}<x\\le3$.", working: "\\frac{1}{3}<x\\le3", marks: 1, markCode: "M" },
              { reasoning: "Check directions: left part strict, right part inclusive.", working: "a<x\\le b", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{3}<x\\le3$",
            commonErrors: ["Reversing both signs, or making both strict/inclusive."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cinema allows at most 120 people in a screen. Adult tickets cost 12 (currency units) and child tickets cost 8. The screen must earn at least 1000 from ticket sales.",
          parts: [
            { label: "a", prompt: "Write an inequality for the total number of people.", marks: 2 },
            { label: "b", prompt: "Write an inequality for the total ticket revenue using $a$ adults and $c$ children.", marks: 3 },
            { label: "c", prompt: "If there are 60 adults, find the minimum number of children needed to meet the revenue target.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling with inequalities", statement: "Translate constraints into inequalities using the correct variables." },
            ],
            steps: [
              { part: "a", reasoning: "Let $a$ = adults, $c$ = children; total $\\le120$.", working: "a+c\\le120", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inequality.", working: "a+c\\le120", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Revenue = $12a+8c$.", working: "12a+8c", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At least 1000 means $\\ge1000$.", working: "12a+8c\\ge1000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inequality with non-negativity noted.", working: "12a+8c\\ge1000,\\ a,c\\ge0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With $a=60$: $720+8c\\ge1000$, so $8c\\ge280$.", working: "8c\\ge280", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$c\\ge35$.", working: "c\\ge35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Minimum 35 children (check capacity: $60+35=95\\le120$ OK).", working: "c=35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a+c\\le120$ (b) $12a+8c\\ge1000$ (c) 35 children",
            commonErrors: ["Using $>$ instead of $\\ge$ for 'at least'."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u1-ineq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x-3<5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>8$" },
              { id: "b", text: "$x<8$" },
              { id: "c", text: "$x<2$" },
              { id: "d", text: "$x>2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Isolate the variable using inverse operations." },
            ],
            steps: [
              { reasoning: "Add 3 to both sides: $x<8$.", working: "x<5+3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x<8$",
            commonErrors: ["Subtracting 3 instead of adding."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-ineq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+4\\le9$. State the largest integer solution.",
          response: {
            type: "numeric",
            parts: [{ label: "Largest integer solution", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Isolate the variable, then choose the largest integer in the solution set." },
            ],
            steps: [
              { reasoning: "$x\\le5$; since $x$ can equal 5, the largest integer is 5.", working: "x\\le5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Answering 4 — forgetting $\\le$ includes the boundary."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypms4-u1-ineq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x>20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<15$" },
              { id: "b", text: "$x>4$" },
              { id: "c", text: "$x<4$" },
              { id: "d", text: "$x>15$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Divide both sides by a positive number; the sign is unchanged." },
            ],
            steps: [
              { reasoning: "Divide both sides by 5: $x>4$.", working: "x>4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x>4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>4$",
            commonErrors: ["Reversing the sign even though we divided by a positive number."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-2x\\ge10$. State the boundary value of $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "Boundary value of $x$", answer: -5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing by a negative reverses the inequality." },
            ],
            steps: [
              { reasoning: "Divide by $-2$ and reverse: $x\\le-5$.", working: "x\\le-5", marks: 1, markCode: "M" },
              { reasoning: "The boundary value is $-5$.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le-5$; boundary $-5$",
            commonErrors: ["Writing $x\\ge-5$ — forgetting to reverse the sign."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3(x-2)<12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<6$" },
              { id: "b", text: "$x<4$" },
              { id: "c", text: "$x<14$" },
              { id: "d", text: "$x>6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Expand or divide first, then isolate $x$." },
            ],
            steps: [
              { reasoning: "Divide by 3: $x-2<4$, so $x<6$.", working: "x-2<4\\Rightarrow x<6", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x<6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<6$",
            commonErrors: ["Dividing only part of the left side by 3."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $-4x+1>9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>2$" },
              { id: "b", text: "$x>-2$" },
              { id: "c", text: "$x<-10$" },
              { id: "d", text: "$x<-2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Subtract first, then divide by the negative coefficient and reverse." },
            ],
            steps: [
              { reasoning: "Subtract 1: $-4x>8$.", working: "-4x>8", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-4$ and reverse: $x<-2$.", working: "x<-2", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x<-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<-2$",
            commonErrors: ["Reversing before isolating, or dividing $8$ by $-4$ incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve the compound inequality $6\\le2x+2<10$. How many integer solutions are there?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of integer solutions", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequalities", statement: "Subtract 2 from all parts, then divide by 2 (positive, no reversal)." },
            ],
            steps: [
              { reasoning: "$4\\le2x<8$, so $2\\le x<4$.", working: "2\\le x<4", marks: 1, markCode: "M" },
              { reasoning: "Integers: $x=2,3$ — two solutions.", working: "x\\in\\{2,3\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 integer solutions: $x=2,3$",
            commonErrors: ["Including 4 — the right side is strict."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $4-3x\\le19$. State the boundary value of $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "Boundary value of $x$", answer: -5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "After isolating, dividing by a negative reverses $\\le$ to $\\ge$." },
            ],
            steps: [
              { reasoning: "Subtract 4: $-3x\\le15$.", working: "-3x\\le15", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-3$ and reverse: $x\\ge-5$.", working: "x\\ge-5", marks: 1, markCode: "M" },
              { reasoning: "The boundary value is $-5$.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge-5$; boundary $-5$",
            commonErrors: ["Giving $x\\le-5$ — forgetting to reverse the sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Solve each inequality, stating whether the inequality sign reverses.",
          parts: [
            { label: "a", prompt: "Solve $-5x<20$.", marks: 2 },
            { label: "b", prompt: "Solve $7-2x\\ge1$.", marks: 2 },
            { label: "c", prompt: "Solve $\\frac{x}{3}>4$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Multiplying or dividing by a negative reverses the inequality." },
            ],
            steps: [
              { part: "a", reasoning: "Divide by $-5$ and reverse: $x>-4$.", working: "x>-4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the solution with correct direction.", working: "x>-4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 7: $-2x\\ge-6$; divide by $-2$ and reverse: $x\\le3$.", working: "x\\le3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "x\\le3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply by 3 (positive): $x>12$.", working: "x>12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution.", working: "x>12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x>-4$ (b) $x\\le3$ (c) $x>12$",
            commonErrors: ["In (b), dividing $-6$ by $-2$ correctly but forgetting to reverse."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u1-ineq-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5x-3>2x+9$. State the smallest integer solution.",
          response: {
            type: "numeric",
            parts: [{ label: "Smallest integer solution", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Collect $x$ terms on one side, constants on the other." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and add 3: $3x>12$, so $x>4$.", working: "3x>12\\Rightarrow x>4", marks: 1, markCode: "M" },
              { reasoning: "$x>4$ is strict, so the smallest integer greater than 4 is 5.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>4$; smallest integer $5$",
            commonErrors: ["Answering 4 — $x>4$ excludes 4."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "The inequality $x\\ge-2$ and $x<3$ has solution shown on a number line. List all integer solutions and describe how each endpoint is drawn (open or closed circle).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Number line", statement: "Closed circle for $\\ge$/$\\le$; open circle for $>$/$<$." },
            ],
            steps: [
              { reasoning: "Integer solutions: $x \\in \\{-2,-1,0,1,2\\}$ — include $-2$, exclude 3.", working: "x \\in \\{-2,-1,0,1,2\\}", marks: 1, markCode: "M" },
              { reasoning: "$x\\ge-2$ gives a closed (filled) circle at $-2$.", working: "\\text{closed at }-2", marks: 1, markCode: "M" },
              { reasoning: "$x<3$ gives an open circle at 3, shading to the left.", working: "\\text{open at }3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\in \\{-2,-1,0,1,2\\}$; closed circle at $-2$, open circle at 3, shaded between",
            commonErrors: ["Including 3 — the $<$ excludes it."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-ineq-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which inequality has the solution $x\\le-3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\le3$" },
              { id: "b", text: "$-x\\le3$" },
              { id: "c", text: "$3x\\ge-9$" },
              { id: "d", text: "$2x\\le-6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Check each option by solving; watch for negative coefficients." },
            ],
            steps: [
              { reasoning: "Option (a): $2x\\le-6$ gives $x\\le-3$. ✓", working: "x\\le-3", marks: 1, markCode: "M" },
              { reasoning: "Option (c): $-x\\le3$ gives $x\\ge-3$ — wrong direction. Option (d): $x\\ge-3$ — wrong direction.", working: "x\\ge-3", marks: 1, markCode: "M" },
              { reasoning: "Only (a) gives $x\\le-3$.", working: "x\\le-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $2x\\le-6$",
            commonErrors: ["Choosing (d) without checking the direction."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u1-compound",
      title: "Compound inequalities and sequences",
      skill: "Find integer solutions to compound inequalities and describe number sequences and their rules.",
      lesson: {
        sections: [
          {
            heading: "Compound inequalities",
            body: "A **compound inequality** like $-2\\le x<5$ means $x$ is greater than or equal to $-2$ **and** less than 5. To find **integer solutions**, list all whole numbers in the range: $x \\in \\{-2,-1,0,1,2,3,4\\}$.",
          },
          {
            heading: "Double inequalities",
            body: "When solving $a<bx+c<d$, subtract $c$ from all parts, then divide by $b$. If $b$ is negative, **reverse both inequality signs**. The solution is a range between two bounds.",
          },
          {
            heading: "Number sequences",
            body: "A **sequence** is an ordered list of numbers. A **linear sequence** changes by a constant difference each term: 5, 8, 11, 14, ... (difference 3). The $n$th term of a linear sequence is $a+(n-1)d$ where $a$ is the first term and $d$ the common difference.",
          },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$a+(n-1)d$" },
          { name: "Integer solutions", statement: "List all whole numbers in the solution range" },
        ],
        workedExample: {
          problem: "Find the integer solutions of $-3<2x+1\\le7$.",
          solution: "Subtract 1: $-4<2x\\le6$; divide by 2: $-2<x\\le3$. Integer solutions: $x \\in \\{-1,0,1,2,3\\}$.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a solution to $x \\ge 3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-1$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=3$" },
              { id: "d", text: "$x=0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inequality symbols", statement: "$\\ge$ means 'greater than or equal to'." },
            ],
            steps: [
              { reasoning: "$x=3$ satisfies $x\\ge3$ since 3 equals 3.", working: "x=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x=3$",
            commonErrors: ["Choosing $x=2$ — that's less than 3."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u1-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the integer solutions of $1\\le x<4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{1,2,3\\}$" },
              { id: "b", text: "$\\{2,3\\}$" },
              { id: "c", text: "$\\{1,2,3,4,5\\}$" },
              { id: "d", text: "$\\{1,2,3,4\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integer solutions", statement: "$\\le$ includes the bound; $<$ excludes it." },
            ],
            steps: [
              { reasoning: "Include 1 (closed), exclude 4 (open).", working: "x \\in \\{1,2,3\\}", marks: 1, markCode: "M" },
              { reasoning: "State the set.", working: "\\{1,2,3\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\{1,2,3\\}$",
            commonErrors: ["Including 4 — the $<$ excludes it."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the 10th term of the sequence 7, 11, 15, 19, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "40" },
              { id: "b", text: "37" },
              { id: "c", text: "47" },
              { id: "d", text: "43" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=7$, $d=4$." },
            ],
            steps: [
              { reasoning: "Identify $a=7$ and $d=4$.", working: "a=7,\\ d=4", marks: 1, markCode: "M" },
              { reasoning: "Substitute $n=10$: $7+9\\times4=7+36=43$.", working: "7+9\\times4=43", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "43", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$43$",
            commonErrors: ["Using $n=10$ instead of $n-1=9$ multiplications of $d$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sequence has first term 4 and common difference 5.",
          parts: [
            { label: "a", prompt: "Write down the first four terms.", marks: 2 },
            { label: "b", prompt: "Find the 20th term.", marks: 2 },
            { label: "c", prompt: "Find the smallest $n$ for which the $n$th term exceeds 200.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$" },
            ],
            steps: [
              { part: "a", reasoning: "Terms: 4, 9, 14, 19.", working: "4,9,14,19", marks: 1, markCode: "M" },
              { part: "a", reasoning: "List all four correctly.", working: "4,9,14,19", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$4+19\\times5=4+95=99$.", working: "4+19\\times5=99", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the 20th term.", working: "99", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up inequality: $4+(n-1)5>200$.", working: "4+5(n-1)>200", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve: $5(n-1)>196$, so $n-1>39.2$, $n>40.2$.", working: "n-1>39.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Smallest integer $n=41$; check: $4+40\\times5=204>200$.", working: "n=41", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "n=41", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4, 9, 14, 19 (b) 99 (c) $n=41$",
            commonErrors: ["Rounding $n>40.2$ down to 40 instead of up."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u1-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a solution to $x<4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$" },
              { id: "b", text: "$x=6$" },
              { id: "c", text: "$x=4$" },
              { id: "d", text: "$x=3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inequality symbols", statement: "$<$ means strictly less than — the boundary is excluded." },
            ],
            steps: [
              { reasoning: "$x=3<4$ satisfies the inequality; 4, 5 and 6 do not.", working: "x=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x=3$",
            commonErrors: ["Choosing $x=4$ — the strict inequality excludes the boundary."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypms4-u1-comp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many integer solutions does $-1\\le x<2$ have?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of integer solutions", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integer solutions", statement: "Include the $\\le$ endpoint, exclude the $<$ endpoint." },
            ],
            steps: [
              { reasoning: "Integers are $-1,0,1$ — three values.", working: "x\\in\\{-1,0,1\\}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Including 2 — the $<$ excludes it."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypms4-u1-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 20th term of the sequence 3, 7, 11, 15, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "80" },
              { id: "b", text: "79" },
              { id: "c", text: "75" },
              { id: "d", text: "83" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=3$, $d=4$." },
            ],
            steps: [
              { reasoning: "Identify $a=3$ and $d=4$.", working: "a=3,\\ d=4", marks: 1, markCode: "M" },
              { reasoning: "$3+19\\times4=3+76=79$.", working: "3+19\\times4=79", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$79$",
            commonErrors: ["Using $n=20$ instead of $n-1=19$ multiplications of $d$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 8th term of the sequence 10, 7, 4, 1, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$a_8$", answer: -11 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=10$, $d=-3$." },
            ],
            steps: [
              { reasoning: "The common difference is $-3$.", working: "d=-3", marks: 1, markCode: "M" },
              { reasoning: "$10+7\\times(-3)=10-21=-11$.", working: "10-21=-11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-11$",
            commonErrors: ["Adding 3 each term instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the integer solutions of $1<2x\\le8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{0,1,2,3,4\\}$" },
              { id: "b", text: "$\\{2,3,4\\}$" },
              { id: "c", text: "$\\{1,2,3,4\\}$" },
              { id: "d", text: "$\\{2,3,4,5\\}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequalities", statement: "Divide all parts by 2: $\\frac{1}{2}<x\\le4$." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}<x\\le4$; integers 1, 2, 3, 4 all satisfy this ($x=1$ gives $2x=2$, and $1<2\\le8$).", working: "x \\in \\{1,2,3,4\\}", marks: 1, markCode: "M" },
              { reasoning: "Check boundary: $x=0$ gives $2x=0$, not $>1$ — excluded; $x=5$ gives $2x=10>8$ — excluded.", working: "\\{1,2,3,4\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\{1,2,3,4\\}$",
            commonErrors: ["Excluding 1 — $2(1)=2$ does satisfy $1<2x$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $-3\\le2x+1<7$ and list all integer solutions.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\in \\{-2,-1,0,1,2\\}$" },
              { id: "b", text: "$x \\in \\{-3,-2,-1,0,1,2\\}$" },
              { id: "c", text: "$x \\in \\{-2,-1,0,1\\}$" },
              { id: "d", text: "$x \\in \\{-1,0,1,2,3\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequalities", statement: "Subtract 1, then divide by 2; keep both directions." },
            ],
            steps: [
              { reasoning: "Subtract 1: $-4\\le2x<6$; divide by 2: $-2\\le x<3$.", working: "-2\\le x<3", marks: 1, markCode: "M" },
              { reasoning: "Include $-2$ ($\\le$), exclude 3 ($<$).", working: "x \\in \\{-2,-1,0,1,2\\}", marks: 1, markCode: "M" },
              { reasoning: "State the set.", working: "\\{-2,-1,0,1,2\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\in \\{-2,-1,0,1,2\\}$",
            commonErrors: ["Including 3 — the right side is strict."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the 15th term of the sequence 5, 9, 13, 17, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$a_{15}$", answer: 61 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=5$, $d=4$." },
            ],
            steps: [
              { reasoning: "Identify $a=5$ and $d=4$.", working: "a=5,\\ d=4", marks: 1, markCode: "M" },
              { reasoning: "$5+14\\times4=5+56=61$.", working: "5+56=61", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$61$",
            commonErrors: ["Using $15\\times4$ instead of $14\\times4$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sequence has first term 6 and common difference $-4$. Find the 9th term.",
          response: {
            type: "numeric",
            parts: [{ label: "$a_9$", answer: -26 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=6$, $d=-4$." },
            ],
            steps: [
              { reasoning: "Use $a=6$, $d=-4$, $n=9$.", working: "a=6,\\ d=-4,\\ n=9", marks: 1, markCode: "M" },
              { reasoning: "$6+8\\times(-4)=6-32$.", working: "6-32", marks: 1, markCode: "M" },
              { reasoning: "$a_9=-26$.", working: "-26", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-26$",
            commonErrors: ["Multiplying $-4$ by 9 instead of 8."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student solves a compound inequality and lists its integer solutions.",
          parts: [
            { label: "a", prompt: "Solve $1<3x-2\\le13$, giving your answer in the form $a<x\\le b$.", marks: 3 },
            { label: "b", prompt: "List all integer solutions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequalities", statement: "Add 2 to all parts, then divide by 3 (positive, no reversal)." },
            ],
            steps: [
              { part: "a", reasoning: "Add 2: $3<3x\\le15$.", working: "3<3x\\le15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 3: $1<x\\le5$.", working: "1<x\\le5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check directions: left strict, right inclusive.", working: "1<x\\le5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exclude 1 ($<$), include 5 ($\\le$).", working: "x \\in \\{2,3,4,5\\}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "List the integers in order.", working: "2,3,4,5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the set.", working: "\\{2,3,4,5\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1<x\\le5$ (b) $x \\in \\{2,3,4,5\\}$",
            commonErrors: ["Including 1 — the left inequality is strict."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b).",
          },
        },
        {
          id: "mypms4-u1-comp-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The $n$th term of a sequence is $4n-7$. Find the smallest value of $n$ for which the $n$th term exceeds 100.",
          response: {
            type: "numeric",
            parts: [{ label: "$n$", answer: 27 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "nth term", statement: "Set up an inequality $4n-7>100$ and solve for the smallest integer $n$." },
            ],
            steps: [
              { reasoning: "Set up: $4n-7>100$.", working: "4n-7>100", marks: 1, markCode: "M" },
              { reasoning: "$4n>107$, so $n>26.75$; smallest integer is 27.", working: "n>26.75", marks: 1, markCode: "M" },
              { reasoning: "Check: $4(27)-7=101>100$. ✓", working: "n=27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=27$",
            commonErrors: ["Rounding $26.75$ down to 26 instead of up to 27."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would decide whether a sequence is arithmetic, geometric or quadratic, giving one example of each type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sequence types", statement: "Constant first difference → arithmetic; constant ratio → geometric; constant second difference → quadratic." },
            ],
            steps: [
              { reasoning: "Check first differences: constant means arithmetic, e.g. 3, 7, 11, 15.", working: "\\text{constant first difference}", marks: 1, markCode: "M" },
              { reasoning: "Check ratios: constant means geometric, e.g. 2, 6, 18, 54.", working: "\\text{constant ratio}", marks: 1, markCode: "M" },
              { reasoning: "Check second differences: constant means quadratic, e.g. 1, 4, 9, 16 (second difference 2).", working: "\\text{constant second difference}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arithmetic: constant first difference; geometric: constant ratio; quadratic: constant second difference.",
            commonErrors: ["Giving examples without stating the test."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-comp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these sequences is geometric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3, 6, 12, 24, ..." },
              { id: "b", text: "7, 5, 3, 1, ..." },
              { id: "c", text: "2, 4, 6, 8, ..." },
              { id: "d", text: "1, 4, 9, 16, ..." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "Each term is the previous term multiplied by a constant ratio." },
            ],
            steps: [
              { reasoning: "Check ratios in (b): $6\\div3=2$, $12\\div6=2$, $24\\div12=2$ — constant ratio 2.", working: "r=2", marks: 1, markCode: "M" },
              { reasoning: "The others have constant differences, not ratios.", working: "\\text{arithmetic or quadratic}", marks: 1, markCode: "M" },
              { reasoning: "Select the geometric sequence.", working: "3,6,12,24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 3, 6, 12, 24, ...",
            commonErrors: ["Choosing (a) — it has a constant difference, not a ratio."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
