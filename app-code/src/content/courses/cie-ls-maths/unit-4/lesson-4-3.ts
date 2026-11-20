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
              { id: "b", text: "$x < 7$" },
              { id: "c", text: "$x > 17$" },
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
              { id: "a", text: "$x = \\frac{y-2}{3}$" },
              { id: "b", text: "$x = \\frac{y+2}{3}$" },
              { id: "c", text: "$x = 3y - 2$" },
              { id: "d", text: "$x = \\frac{y}{3} + 2$" },
            ],
            correctChoiceId: "a",
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
