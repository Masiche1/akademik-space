import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cilm-u4-lesson-4-3",
  code: "4-3",
  title: "Inequalities and formulae",
  goal: "I CAN solve linear inequalities, represent them on a number line, and rearrange formulae to change the subject.",
  standards: ["0862 Algebra: inequalities and formulae"],
  vocabulary: [
    { term: "Inequality", definition: "A statement that one quantity is greater or less than another — $x > 5$." },
    { term: "Number line", definition: "A visual representation of numbers in order, used to show inequality solutions." },
    { term: "Open circle", definition: "On a number line, shows the boundary value is NOT included ($>$ or $<$)." },
    { term: "Closed circle", definition: "On a number line, shows the boundary value IS included ($\\ge$ or $\\le$)." },
    { term: "Changing the subject", definition: "Rearranging a formula to isolate a different variable." },
    { term: "Subject of formula", definition: "The variable isolated on one side — in $A=lw$, $A$ is the subject." },
  ],
  concepts: [
    {
      id: "cilm-u4-inequalities",
      title: "Linear inequalities",
      skill: "Solve inequalities like equations, remembering the sign-flip rule for negative multiplication.",
      lesson: {
        sections: [
          {
            heading: "Solving inequalities",
            body: "Same method as equations — inverse operations both sides:\n\n$x + 3 < 10$ → $x < 7$\n\n$3x \\ge 15$ → $x \\ge 5$",
          },
          {
            heading: "The sign-flip rule",
            body: "Multiplying or dividing by a **negative** number reverses the inequality:\n\n$-2x < 10$ → divide by $-2$ → $x > -5$ (flipped!)\n\nThis is the most common error — always check the sign.",
          },
          {
            heading: "Number line representation",
            body: "- $x < 7$: open circle at 7, arrow left\n- $x \\ge 5$: closed circle at 5, arrow right\n- $2 \\le x < 6$: closed at 2, open at 6, shaded between",
          },
        ],
        keyFormulas: [
          { name: "Sign flip", statement: "Multiply/divide by negative → reverse $<$ to $>$ and $\\le$ to $\\ge$." },
        ],
        workedExample: {
          problem: "Solve $5 - 2x \\le 11$ and represent on a number line.",
          solution: "$-2x \\le 6$ → divide by $-2$ (flip): $x \\ge -3$. Closed circle at $-3$, arrow right.",
        },
      },
      questions: [
        {
          id: "cilm-u4-ineq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + 5 > 12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x > 7$" },
              { id: "b", text: "$x > 17$" },
              { id: "c", text: "$x < 7$" },
              { id: "d", text: "$x < 17$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Subtract 5: $x > 12-5 = 7$." },
            ],
            steps: [
              { reasoning: "$x > 7$ — subtracting doesn't flip the sign.", working: "x>7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x > 7$",
            commonErrors: ["Choosing (b) — subtraction never flips the inequality."],
          },
        },
        {
          id: "cilm-u4-ineq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x < 12$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign flip", statement: "Divide by $-3$ → flip: $x > -4$." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-3$ and flip: $x > -4$.", working: "x>-4", marks: 1, markCode: "M" },
              { reasoning: "Check: $x=0$ gives $0<12$ ✓ (true, and $0>-4$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x > -4$",
            commonErrors: ["$x < -4$ — forgot to flip when dividing by negative."],
          },
        },
        {
          id: "cilm-u4-ineq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2x - 3 \\ge 7$ and describe its number-line representation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inequality + number line", statement: "$x \\ge 5$ → closed circle at 5, arrow right." },
            ],
            steps: [
              { reasoning: "$2x \\ge 10$ → $x \\ge 5$.", working: "x\\ge5", marks: 1, markCode: "M" },
              { reasoning: "Closed circle at $5$ (included), arrow pointing right.", working: "\\bullet \\rightarrow", marks: 1, markCode: "M" },
              { reasoning: "All values $\\ge 5$ shaded.", marks: 1, markCode: "M" },
              { reasoning: "Description accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\ge 5$; closed circle at 5, shaded right",
            commonErrors: ["Open circle — $\\ge$ includes the boundary, needs closed circle."],
          },
        },
        {
          id: "cilm-u4-ineq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A climbing wall has routes graded by difficulty.",
          parts: [
            { label: "a", prompt: "Solve $3d - 6 < 12$ where $d$ is difficulty grade.", marks: 3 },
            { label: "b", prompt: "Describe the number-line representation.", marks: 2 },
            { label: "c", prompt: "If grades are whole numbers from 1 to 10, list valid grades.", marks: 2 },
            { label: "d", prompt: "Change the subject of $C = 2\\pi r$ to make $r$ the subject.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inequalities and formulae", statement: "Solve → represent → interpret; rearrange formulae by inverse operations." },
            ],
            steps: [
              { part: "a", reasoning: "$3d < 18$ → $d < 6$.", working: "d<6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solution correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Open circle at $6$, arrow left.", working: "\\circ \\leftarrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct representation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Whole grades $1,2,3,4,5$ (less than 6, at least 1).", working: "1-5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct list.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$r = \\frac{C}{2\\pi}$.", working: "r=\\frac{C}{2\\pi}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct rearrangement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $d<6$ (b) open circle at 6, arrow left (c) grades $1$–$5$ (d) $r=\\frac{C}{2\\pi}$",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Inequality solved.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Number line correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Grades listed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Subject changed.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) including 6 — strict inequality excludes it."],
          },
        },
        {
          id: "cilm-u4-ineq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x - 3 < 7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x < 4$" },
              { id: "b", text: "$x > 4$" },
              { id: "c", text: "$x < 10$" },
              { id: "d", text: "$x > 10$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Add 3 to both sides — direction unchanged." },
            ],
            steps: [
              { reasoning: "$x < 7+3 = 10$.", working: "x<10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x < 10$",
            commonErrors: ["Choosing (b) — addition never flips the inequality."],
          },
        },
        {
          id: "cilm-u4-ineq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x > 14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x > 7$" },
              { id: "b", text: "$x > 28$" },
              { id: "c", text: "$x > 12$" },
              { id: "d", text: "$x < 7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Divide by positive 2 — direction unchanged." },
            ],
            steps: [
              { reasoning: "$x > 14\\div2 = 7$.", working: "x>7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x > 7$",
            commonErrors: ["Choosing (b) — dividing by a positive number does not flip."],
          },
        },
        {
          id: "cilm-u4-ineq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $-x < 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x > 5$" },
              { id: "b", text: "$x > -5$" },
              { id: "c", text: "$x < -5$" },
              { id: "d", text: "$x < 5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign flip", statement: "Dividing by $-1$ flips: $x > -5$." },
            ],
            steps: [
              { reasoning: "Divide by $-1$ and flip: $x > -5$. Check $x=0$: $0<5$ ✓.", working: "x>-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x > -5$",
            commonErrors: ["Choosing (b) — forgot the flip when dividing by negative."],
          },
        },
        {
          id: "cilm-u4-ineq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is the inequality $x \\ge 3$ represented on a number line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open circle at -3, shaded to the right" },
              { id: "b", text: "Closed circle at 3, shaded to the left" },
              { id: "c", text: "Open circle at 3, shaded to the right" },
              { id: "d", text: "Closed circle at 3, shaded to the right" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Number line", statement: "$\\ge$ = included boundary (closed) + greater values (right)." },
            ],
            steps: [
              { reasoning: "Closed circle at 3, arrow right.", working: "\\bullet \\rightarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Closed circle at 3, shaded right",
            commonErrors: ["Choosing (b) — open circle means strict inequality ($>$ or $<$)."],
          },
        },
        {
          id: "cilm-u4-ineq-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $3x + 2 \\le 14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\le 4$" },
              { id: "b", text: "$x < 4$" },
              { id: "c", text: "$x \\ge 4$" },
              { id: "d", text: "$x \\le 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Subtract 2, divide by 3 — $\\le$ stays $\\le$." },
            ],
            steps: [
              { reasoning: "$3x \\le 12$ → $x \\le 4$.", working: "x\\le4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x \\le 4$",
            commonErrors: ["Choosing (c) — $14-2=12$, $12\\div3=4$ not 5."],
          },
        },
        {
          id: "cilm-u4-ineq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x - 5 < 9$. Give the boundary value of $x$.",
          response: { type: "numeric", parts: [{ label: "Boundary", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "$2x<14$ → $x<7$; boundary is 7." },
            ],
            steps: [
              { reasoning: "$2x<14$ → $x<7$; boundary $=7$.", working: "x<7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x < 7$ (boundary $7$)",
            commonErrors: ["$14$ — must divide by 2 after adding 5."],
          },
        },
        {
          id: "cilm-u4-ineq-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the boundary value for: (a) $4x \\le 20$ (b) $-2x > 8$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5 }, { label: "(b)", answer: -4 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Positive division keeps direction; negative division flips." },
            ],
            steps: [
              { reasoning: "(a) $x \\le 5$; boundary $5$.", working: "x\\le5", marks: 1, markCode: "A" },
              { reasoning: "(b) $x < -4$; boundary $-4$.", working: "x<-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$ (b) $-4$",
            commonErrors: ["In (b) $x>4$ — sign flip required when dividing by $-2$."],
          },
        },
        {
          id: "cilm-u4-ineq-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $5 - x \\ge 2$.",
          response: { type: "numeric", parts: [{ label: "Boundary", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inequality solving", statement: "Subtract 5: $-x \\ge -3$; divide by $-1$ (flip): $x \\le 3$." },
            ],
            steps: [
              { reasoning: "$x \\le 3$; boundary $3$.", working: "x\\le3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\le 3$ (boundary $3$)",
            commonErrors: ["$x \\ge 3$ — dividing by $-1$ must flip the sign."],
          },
        },
        {
          id: "cilm-u4-ineq-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $3x - 4 < 11$ and describe its number-line representation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inequality + number line", statement: "$x<5$ → open circle at 5, arrow left." },
            ],
            steps: [
              { reasoning: "$3x<15$ → $x<5$.", working: "x<5", marks: 1, markCode: "M" },
              { reasoning: "Open circle at $5$ (excluded), shaded left.", working: "\\circ \\leftarrow", marks: 1, markCode: "M" },
              { reasoning: "Description correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x < 5$; open circle at 5, shaded left",
            commonErrors: ["Closed circle — strict inequality excludes the boundary."],
          },
        },
        {
          id: "cilm-u4-ineq-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $8 - 2x \\ge 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative coefficient", statement: "Subtract 8, divide by $-2$ and FLIP: $x \\le 3$." },
            ],
            steps: [
              { reasoning: "$-2x \\ge -6$.", working: "-2x\\ge-6", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-2$ and flip: $x \\le 3$.", working: "x\\le3", marks: 1, markCode: "M" },
              { reasoning: "Check $x=0$: $8\\ge2$ ✓ and $0\\le3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\le 3$",
            commonErrors: ["$x \\ge 3$ — forgot to flip when dividing by $-2$."],
          },
        },
        {
          id: "cilm-u4-ineq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $-4x < 12$, represent the solution on a number line, and list all integer values of $x$ that satisfy it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inequality in context", statement: "Flip on dividing by $-4$: $x>-3$; open circle, integers $-2$ upward." },
            ],
            steps: [
              { reasoning: "Divide by $-4$ and flip: $x > -3$.", working: "x>-3", marks: 1, markCode: "M" },
              { reasoning: "Open circle at $-3$, shaded right.", working: "\\circ \\rightarrow", marks: 1, markCode: "M" },
              { reasoning: "Integer solutions: $-2, -1, 0, 1, 2, \\ldots$ (all integers greater than $-3$).", working: "-2,-1,0,\\ldots", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x > -3$; open circle at $-3$; integers $-2, -1, 0, \\ldots$",
            commonErrors: ["Including $-3$ in integer solutions — strict inequality excludes it."],
          },
        },
        {
          id: "cilm-u4-ineq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve the inequality $3x + 1 \\le 10$.",
          parts: [
            { label: "a", prompt: "Solve the inequality.", marks: 3 },
            { label: "b", prompt: "Describe the number-line representation.", marks: 2 },
            { label: "c", prompt: "List all integer solutions.", marks: 1 },
            { label: "d", prompt: "Explain why you did or did not flip the inequality sign.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inequalities", statement: "Solve like equations; flip only when multiplying/dividing by a negative." },
            ],
            steps: [
              { part: "a", reasoning: "$3x \\le 9$ → $x \\le 3$.", working: "x\\le3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct steps.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solution correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Closed circle at $3$ (included), shaded left.", working: "\\bullet \\leftarrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integers: $\\ldots, 0, 1, 2, 3$ — all integers $\\le 3$.", working: "\\le3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No flip needed — only added/subtracted and divided by positive 3.", working: "\\text{positive division}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Rule stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x \\le 3$ (b) closed circle at 3, shaded left (c) integers $\\le 3$ (d) no flip — positive operations only",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Inequality solved.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Number line correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Integers listed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Flip rule explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) open circle — $\\le$ includes the boundary."],
          },
        },
      ],
    },
    {
      id: "cilm-u4-formulae",
      title: "Changing the subject of formulae",
      skill: "Rearrange formulae to isolate different variables using inverse operations.",
      lesson: {
        sections: [
          {
            heading: "The method",
            body: "Treat the subject variable as the unknown and everything else as constants. Apply inverse operations to both sides:\n\n$v = u + at$ — make $t$ the subject:\n- subtract $u$: $v - u = at$\n- divide by $a$: $t = \\frac{v-u}{a}$",
          },
          {
            heading: "With fractions",
            body: "$A = \\frac{1}{2}bh$ — make $h$ the subject:\n- multiply by 2: $2A = bh$\n- divide by $b$: $h = \\frac{2A}{b}$",
          },
          {
            heading: "With the subject inside brackets",
            body: "$P = 2(l + w)$ — make $w$ the subject:\n- divide by 2: $\\frac{P}{2} = l + w$\n- subtract $l$: $w = \\frac{P}{2} - l$",
          },
        ],
        keyFormulas: [
          { name: "Rearranging", statement: "Apply inverse operations to both sides until the target variable is alone." },
        ],
        workedExample: {
          problem: "Make $h$ the subject of $V = \\frac{1}{3}\\pi r^2 h$.",
          solution: "$3V = \\pi r^2 h$ → $h = \\frac{3V}{\\pi r^2}$.",
        },
      },
      questions: [
        {
          id: "cilm-u4-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = 3x + 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = \\frac{y}{3} + 2$" },
              { id: "b", text: "$x = \\frac{y+2}{3}$" },
              { id: "c", text: "$x = 3y - 2$" },
              { id: "d", text: "$x = \\frac{y-2}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Subtract 2, divide by 3: $x=\\frac{y-2}{3}$." },
            ],
            steps: [
              { reasoning: "$y-2=3x$ → $x=\\frac{y-2}{3}$.", working: "x=\\frac{y-2}{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = \\frac{y-2}{3}$",
            commonErrors: ["Choosing (b) — adding 2 instead of subtracting."],
          },
        },
        {
          id: "cilm-u4-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Make $b$ the subject of $A = \\frac{1}{2}bh$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging fractions", statement: "Multiply by 2, divide by $h$: $b=\\frac{2A}{h}$." },
            ],
            steps: [
              { reasoning: "$2A = bh$ → $b = \\frac{2A}{h}$.", working: "b=\\frac{2A}{h}", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b = \\frac{2A}{h}$",
            commonErrors: ["$b = \\frac{A}{2h}$ — multiplying by $\\frac{1}{2}$ instead of 2."],
          },
        },
        {
          id: "cilm-u4-form-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The formula $s = ut + \\frac{1}{2}at^2$ gives distance. Make $a$ the subject.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complex rearranging", statement: "Isolate the $a$ term, then divide by $\\frac{1}{2}t^2$." },
            ],
            steps: [
              { reasoning: "Subtract $ut$: $s - ut = \\frac{1}{2}at^2$.", working: "s-ut=\\frac{1}{2}at^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 2: $2(s-ut) = at^2$.", working: "2(s-ut)=at^2", marks: 1, markCode: "M" },
              { reasoning: "Divide by $t^2$: $a = \\frac{2(s-ut)}{t^2}$.", working: "a=\\frac{2(s-ut)}{t^2}", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = \\frac{2(s - ut)}{t^2}$",
            commonErrors: ["Dividing by $t$ instead of $t^2$ — the whole coefficient $\\frac{1}{2}t^2$ must be divided."],
          },
        },
        {
          id: "cilm-u4-form-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Physics formulae are rearranged for different unknowns.",
          parts: [
            { label: "a", prompt: "Make $u$ the subject of $v = u + at$.", marks: 2 },
            { label: "b", prompt: "Make $t$ the subject of $v = u + at$.", marks: 3 },
            { label: "c", prompt: "Make $F$ the subject of $P = \\frac{F}{A}$.", marks: 2 },
            { label: "d", prompt: "Explain why rearranging formulae is useful in problem-solving.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula rearranging", statement: "Different unknowns need different rearrangements — isolate the target." },
            ],
            steps: [
              { part: "a", reasoning: "$u = v - at$.", working: "u=v-at", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$v - u = at$ → $t = \\frac{v-u}{a}$.", working: "t=\\frac{v-u}{a}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct steps.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct answer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$F = PA$.", working: "F=PA", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Different problems give different knowns — rearranging lets you solve for whichever variable is unknown.", working: "\\text{flexibility}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $u=v-at$ (b) $t=\\frac{v-u}{a}$ (c) $F=PA$ (d) solve for whichever variable is unknown",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Purpose explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) writing $t=\\frac{v-u}{at}$ — dividing by $at$ instead of just $a$ after isolating."],
          },
        },
        {
          id: "cilm-u4-form-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = 5x - 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = \\frac{y + 3}{5}$" },
              { id: "b", text: "$x = \\frac{y}{5} - 3$" },
              { id: "c", text: "$x = \\frac{y - 3}{5}$" },
              { id: "d", text: "$x = 5y + 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Add 3, divide by 5: $x=\\frac{y+3}{5}$." },
            ],
            steps: [
              { reasoning: "$y+3=5x$ → $x=\\frac{y+3}{5}$.", working: "x=\\frac{y+3}{5}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = \\frac{y + 3}{5}$",
            commonErrors: ["Choosing (b) — the $-3$ must move to the left as $+3$."],
          },
        },
        {
          id: "cilm-u4-form-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $h$ the subject of $A = \\frac{1}{2}bh$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$h = \\frac{b}{2A}$" },
              { id: "b", text: "$h = \\frac{2A}{b}$" },
              { id: "c", text: "$h = \\frac{A}{2b}$" },
              { id: "d", text: "$h = 2Ab$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging fractions", statement: "Multiply by 2, divide by $b$." },
            ],
            steps: [
              { reasoning: "$2A=bh$ → $h=\\frac{2A}{b}$.", working: "h=\\frac{2A}{b}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $h = \\frac{2A}{b}$",
            commonErrors: ["Choosing (b) — dividing by 2 instead of multiplying by 2."],
          },
        },
        {
          id: "cilm-u4-form-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make $r$ the subject of $C = 2\\pi r$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$r = \\frac{2\\pi}{C}$" },
              { id: "b", text: "$r = 2\\pi C$" },
              { id: "c", text: "$r = \\frac{C}{2\\pi}$" },
              { id: "d", text: "$r = C - 2\\pi$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Divide both sides by $2\\pi$." },
            ],
            steps: [
              { reasoning: "$r=\\frac{C}{2\\pi}$.", working: "r=\\frac{C}{2\\pi}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $r = \\frac{C}{2\\pi}$",
            commonErrors: ["Choosing (b) — dividing by $2\\pi$ means $C$ over $2\\pi$, not multiplied."],
          },
        },
        {
          id: "cilm-u4-form-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make $t$ the subject of $v = u + at$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t = \\frac{v + u}{a}$" },
              { id: "b", text: "$t = \\frac{v - u}{a}$" },
              { id: "c", text: "$t = \\frac{a}{v - u}$" },
              { id: "d", text: "$t = v - u - a$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Subtract $u$, divide by $a$." },
            ],
            steps: [
              { reasoning: "$v-u=at$ → $t=\\frac{v-u}{a}$.", working: "t=\\frac{v-u}{a}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $t = \\frac{v - u}{a}$",
            commonErrors: ["Choosing (b) — $u$ must be subtracted, not added."],
          },
        },
        {
          id: "cilm-u4-form-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Make $a$ the subject of $F = ma$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a = \\frac{m}{F}$" },
              { id: "b", text: "$a = F - m$" },
              { id: "c", text: "$a = Fm$" },
              { id: "d", text: "$a = \\frac{F}{m}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Divide both sides by $m$." },
            ],
            steps: [
              { reasoning: "$a=\\frac{F}{m}$.", working: "a=\\frac{F}{m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $a = \\frac{F}{m}$",
            commonErrors: ["Choosing (b) — $F=ma$ means $a$ is $F$ divided by $m$."],
          },
        },
        {
          id: "cilm-u4-form-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = 3x + 2$, then find $x$ when $y = 14$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rearranging then substituting", statement: "$x=\\frac{y-2}{3}$; $x=\\frac{14-2}{3}=4$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{14-2}{3}=\\frac{12}{3}=4$.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["$\\frac{14+2}{3}=\\frac{16}{3}$ — sign error in rearranging."],
          },
        },
        {
          id: "cilm-u4-form-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $v = u + at$: (a) Make $u$ the subject and find $u$ when $v=20, a=2, t=5$. (b) Make $t$ the subject and find $t$ when $v=20, u=10, a=2$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 10 }, { label: "(b)", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Changing subject", statement: "$u=v-at$; $t=\\frac{v-u}{a}$." },
            ],
            steps: [
              { reasoning: "(a) $u=20-2\\times5=10$.", working: "u=10", marks: 1, markCode: "A" },
              { reasoning: "(b) $t=\\frac{20-10}{2}=5$.", working: "t=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $u=10$ (b) $t=5$",
            commonErrors: ["In (b) $t=\\frac{20}{2}=10$ — must subtract $u$ first."],
          },
        },
        {
          id: "cilm-u4-form-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Make $w$ the subject of $P = 2(l + w)$, then find $w$ when $P = 30$ and $l = 8$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rearranging with brackets", statement: "$w=\\frac{P}{2}-l$; $w=15-8=7$." },
            ],
            steps: [
              { reasoning: "$\\frac{P}{2}=l+w$ → $w=\\frac{P}{2}-l=15-8=7$.", working: "w=7", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$w = 7$",
            commonErrors: ["$w=30-8=22$ — must halve $P$ before subtracting $l$."],
          },
        },
        {
          id: "cilm-u4-form-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $h$ the subject of $V = \\frac{1}{3}bh$, where $b$ is the base area and $h$ is the height.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rearranging fractions", statement: "Multiply by 3, divide by $b$." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3: $3V=bh$.", working: "3V=bh", marks: 1, markCode: "M" },
              { reasoning: "Divide by $b$: $h=\\frac{3V}{b}$.", working: "h=\\frac{3V}{b}", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h = \\frac{3V}{b}$",
            commonErrors: ["$h=\\frac{V}{3b}$ — must multiply by 3 to clear the fraction, not divide."],
          },
        },
        {
          id: "cilm-u4-form-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $u$ the subject of $v = u + at$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rearranging", statement: "Subtract $at$ from both sides." },
            ],
            steps: [
              { reasoning: "Subtract $at$: $v-at=u$.", working: "u=v-at", marks: 1, markCode: "M" },
              { reasoning: "So $u=v-at$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u = v - at$",
            commonErrors: ["$u=v+a t$ — wrong sign when moving the term."],
          },
        },
        {
          id: "cilm-u4-form-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The formula $s = ut + \\frac{1}{2}at^2$ relates distance $s$, initial velocity $u$, acceleration $a$ and time $t$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complex rearranging", statement: "Isolate the $a$ term, clear the fraction, divide by $\\frac{1}{2}t^2$." },
            ],
            steps: [
              { reasoning: "Subtract $ut$: $s-ut=\\frac{1}{2}at^2$.", working: "s-ut=\\frac{1}{2}at^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 2: $2(s-ut)=at^2$.", working: "2(s-ut)=at^2", marks: 1, markCode: "M" },
              { reasoning: "Divide by $t^2$: $a=\\frac{2(s-ut)}{t^2}$.", working: "a=\\frac{2(s-ut)}{t^2}", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = \\frac{2(s - ut)}{t^2}$",
            commonErrors: ["Dividing by $t$ instead of $t^2$ — the whole coefficient must be divided."],
          },
        },
        {
          id: "cilm-u4-form-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Physics and geometry formulae are rearranged for different unknowns.",
          parts: [
            { label: "a", prompt: "Make $t$ the subject of $v = u + at$.", marks: 2 },
            { label: "b", prompt: "Make $h$ the subject of $A = \\frac{1}{2}bh$.", marks: 2 },
            { label: "c", prompt: "Make $r$ the subject of $C = 2\\pi r$.", marks: 1 },
            { label: "d", prompt: "Explain why rearranging formulae is useful in problem-solving.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula rearranging", statement: "Isolate the target variable using inverse operations." },
            ],
            steps: [
              { part: "a", reasoning: "$v-u=at$ → $t=\\frac{v-u}{a}$.", working: "t=\\frac{v-u}{a}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2A=bh$ → $h=\\frac{2A}{b}$.", working: "h=\\frac{2A}{b}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$r=\\frac{C}{2\\pi}$.", working: "r=\\frac{C}{2\\pi}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Different problems give different knowns — rearranging lets you solve for whichever variable is unknown without re-deriving.", working: "\\text{flexibility}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Saves time and reduces errors.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $t=\\frac{v-u}{a}$ (b) $h=\\frac{2A}{b}$ (c) $r=\\frac{C}{2\\pi}$ (d) solve for any unknown",
            levels: [
              { level: "Level 3", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Purpose explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (b) $h=\\frac{A}{2b}$ — multiply by 2, not divide."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u4-ineq-formulae-notes",
      title: "Inequalities and formulae — revision notes",
      summary: "Solving inequalities, sign-flip rule, number lines, changing the subject.",
      sections: [
        {
          heading: "Inequalities",
          body: "Solve like equations. Negative multiply/divide FLIPS the sign. Open circle = excluded, closed = included. $\\le x <$ means 'between'.",
        },
        {
          heading: "Formulae",
          body: "Isolate target variable with inverse operations. With fractions: multiply by denominator first. Check by substituting back.",
        },
      ],
    },
  ],
};
