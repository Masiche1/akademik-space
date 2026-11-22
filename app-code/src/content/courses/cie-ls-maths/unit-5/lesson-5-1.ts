import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cilm-u5-lesson-5-1",
  code: "5-1",
  title: "Angles and angle rules",
  goal: "I CAN identify angle types, apply angle rules, and calculate missing angles.",
  standards: ["0862 Geometry: angles"],
  vocabulary: [
    { term: "Acute angle", definition: "An angle less than $90°$." },
    { term: "Right angle", definition: "Exactly $90°$ — the corner of a square." },
    { term: "Obtuse angle", definition: "An angle between $90°$ and $180°$." },
    { term: "Straight line", definition: "$180°$ — angles on a straight line sum to $180°$." },
    { term: "Vertically opposite", definition: "Angles opposite each other when two lines cross — always equal." },
    { term: "Corresponding angles", definition: "Angles in the same position at each intersection of a transversal — equal when lines are parallel." },
  ],
  concepts: [
    {
      id: "cilm-u5-angles",
      title: "Angle types and rules",
      skill: "Identify angle types and apply rules: straight line $180°$, around a point $360°$, vertically opposite equal.",
      lesson: {
        sections: [
          {
            heading: "Classifying angles",
            body: "- **Acute**: $<90°$\n- **Right**: $=90°$\n- **Obtuse**: $90°<x<180°$\n- **Reflex**: $>180°$\n- **Straight**: $=180°$\n- **Full turn**: $=360°$",
          },
          {
            heading: "Key angle rules",
            body: "- **On a straight line**: angles sum to $180°$\n- **Around a point**: angles sum to $360°$\n- **Vertically opposite**: always equal\n- **At a point on a line**: adjacent angles sum to $180°$",
          },
          {
            heading: "Working backwards",
            body: "If three angles around a point are $80°, 110°, x$: $x = 360 - 80 - 110 = 170°$. Always check: does the answer make sense (right type of angle)?",
          },
        ],
        keyFormulas: [
          { name: "Straight line", statement: "Adjacent angles on a line sum to $180°$." },
          { name: "Around a point", statement: "Angles around a full turn sum to $360°$." },
          { name: "Vertically opposite", statement: "Opposite angles at an intersection are equal." },
        ],
        workedExample: {
          problem: "Two angles on a straight line are $65°$ and $x$. Find $x$.",
          solution: "$x = 180 - 65 = 115°$ — obtuse, makes sense.",
        },
      },
      questions: [
        {
          id: "cilm-u5-ang-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of angle is $120°$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Obtuse" },
              { id: "b", text: "Right" },
              { id: "c", text: "Reflex" },
              { id: "d", text: "Acute" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle types", statement: "$90°<120°<180°$ — obtuse." },
            ],
            steps: [
              { reasoning: "$120°$ is between $90°$ and $180°$ → obtuse.", working: "90<120<180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Obtuse",
            commonErrors: ["Choosing (d) — reflex is $>180°$."],
          },
        },
        {
          id: "cilm-u5-ang-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two angles on a straight line are $x$ and $75°$. Find $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Straight line", statement: "Angles sum to $180°$: $x+75=180$." },
            ],
            steps: [
              { reasoning: "$x = 180 - 75 = 105°$.", working: "180-75=105", marks: 1, markCode: "M" },
              { reasoning: "$x=105°$ — obtuse, sensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 105°$",
            commonErrors: ["$180+75$ — subtract, not add, for angles on a line."],
          },
        },
        {
          id: "cilm-u5-ang-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three angles around a point are $95°$, $130°$ and $x$. Find $x$ and identify its type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angles around a point", statement: "Sum $=360°$; classify result." },
            ],
            steps: [
              { reasoning: "$x = 360 - 95 - 130 = 135°$.", working: "360-225=135", marks: 1, markCode: "M" },
              { reasoning: "$x = 135°$.", marks: 1, markCode: "M" },
              { reasoning: "$135°$ is between $90°$ and $180°$ — obtuse.", working: "90<135<180", marks: 1, markCode: "M" },
              { reasoning: "Answer with type.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 135°$ — obtuse",
            commonErrors: ["Using $180°$ instead of $360°$ — around a point is a full turn."],
          },
        },
        {
          id: "cilm-u5-ang-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two straight lines cross, forming four angles. One angle is $70°$.",
          parts: [
            { label: "a", prompt: "Find the vertically opposite angle.", marks: 2 },
            { label: "b", prompt: "Find the adjacent angle on the same straight line.", marks: 2 },
            { label: "c", prompt: "Find the fourth angle.", marks: 2 },
            { label: "d", prompt: "Explain why vertically opposite angles are always equal.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intersecting lines", statement: "Vertically opposite = equal; adjacent on line = supplementary." },
            ],
            steps: [
              { part: "a", reasoning: "Vertically opposite $=70°$ (equal).", working: "70°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adjacent on straight line: $180-70=110°$.", working: "110°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fourth angle also $110°$ (vertically opposite the adjacent).", working: "110°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each pair forms linear pairs with the same adjacent angles — if $a+b=180$ and $c+b=180$ then $a=c$.", working: "\\text{linear pairs}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoning sound.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $70°$ (b) $110°$ (c) $110°$ (d) both equal $180°$ minus the same adjacent angle",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Proof explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) saying $70°$ — the fourth angle is vertically opposite the $110°$ angle."],
          },
        },
        {
          id: "cilm-u5-ang-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these angles is a reflex angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120°$" },
              { id: "b", text: "$45°$" },
              { id: "c", text: "$210°$" },
              { id: "d", text: "$90°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle types", statement: "Reflex angles are greater than $180°$." },
            ],
            steps: [
              { reasoning: "$210°>180°$ — the only reflex angle.", working: "210>180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $210°$",
            commonErrors: ["Choosing (c) — $120°$ is obtuse, not reflex."],
          },
        },
        {
          id: "cilm-u5-ang-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two angles on a straight line are $x$ and $48°$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 132 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Straight line", statement: "Angles sum to $180°$: $x+48=180$." },
            ],
            steps: [
              { reasoning: "$x = 180-48 = 132°$.", working: "180-48=132", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$x = 132°$",
            commonErrors: ["$180+48$ — subtract for angles on a straight line."],
          },
        },
        {
          id: "cilm-u5-ang-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three angles around a point are $100°$, $140°$ and $y$. Find $y$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Around a point", statement: "Angles around a full turn sum to $360°$." },
            ],
            steps: [
              { reasoning: "$y = 360 - 100 - 140 = 120°$.", working: "360-240=120", marks: 1, markCode: "M" },
              { reasoning: "$y = 120°$ — obtuse, sensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 120°$",
            commonErrors: ["Using $180°$ — around a point is a full $360°$ turn."],
          },
        },
        {
          id: "cilm-u5-ang-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two straight lines cross. One of the angles formed is $55°$. What is the size of the vertically opposite angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$35°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "$125°$" },
              { id: "d", text: "$55°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vertically opposite", statement: "Vertically opposite angles are equal." },
            ],
            steps: [
              { reasoning: "Vertically opposite angles are equal: $55°$.", working: "55°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $55°$",
            commonErrors: ["Choosing (b) — that's the adjacent angle on the straight line."],
          },
        },
        {
          id: "cilm-u5-ang-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles around a point are $x$, $2x$ and $3x$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angles around a point", statement: "$x+2x+3x=360$ → $6x=360$ → $x=60$." },
            ],
            steps: [
              { reasoning: "$6x = 360$ so $x = 60$.", working: "6x=360", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$x = 60°$",
            commonErrors: ["Setting $6x=180$ — around a point is $360°$."],
          },
        },
        {
          id: "cilm-u5-ang-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two straight lines cross. An angle and the angle next to it on the same straight line are $y$ and $2y$. Find $y$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear pair", statement: "Adjacent angles on a straight line sum to $180°$: $y+2y=180$." },
            ],
            steps: [
              { reasoning: "The two angles lie on a straight line, so they sum to $180°$.", working: "y+2y=180", marks: 1, markCode: "M" },
              { reasoning: "$3y = 180$ → $y = 60$.", working: "y=60", marks: 1, markCode: "M" },
              { reasoning: "$y = 60°$; the other angle is $120°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 60°$",
            commonErrors: ["Using $360°$ — only TWO angles on a straight line sum to $180°$."],
          },
        },
        {
          id: "cilm-u5-ang-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of exactly $90°$ is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Obtuse angle" },
              { id: "b", text: "Right angle" },
              { id: "c", text: "Reflex angle" },
              { id: "d", text: "Acute angle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle types", statement: "Right angle $=90°$ exactly." },
            ],
            steps: [
              { reasoning: "$90°$ exactly is a right angle.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Right angle",
            commonErrors: ["Choosing (a) — acute is LESS than $90°$."],
          },
        },
        {
          id: "cilm-u5-ang-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four angles around a point are $70°$, $110°$, $90°$ and $x$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Around a point", statement: "Angles sum to $360°$: $x = 360-270$." },
            ],
            steps: [
              { reasoning: "Known angles total $70+110+90=270°$.", working: "270", marks: 1, markCode: "M" },
              { reasoning: "$x = 360-270 = 90°$.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 90°$",
            commonErrors: ["Subtracting from $180°$ instead of $360°$."],
          },
        },
        {
          id: "cilm-u5-ang-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Angles on a straight line are $65°$, $x$ and $45°$. Find $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60°$" },
              { id: "b", text: "$70°$" },
              { id: "c", text: "$75°$" },
              { id: "d", text: "$80°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Straight line", statement: "Angles sum to $180°$: $x = 180-110 = 70°$." },
            ],
            steps: [
              { reasoning: "$x = 180 - 65 - 45 = 70°$.", working: "180-110=70", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $70°$",
            commonErrors: ["Choosing (c) — check: $65+70+45=180$ ✓."],
          },
        },
        {
          id: "cilm-u5-ang-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two straight lines cross. One of the angles is $110°$.",
          parts: [
            { label: "a", prompt: "Find the vertically opposite angle.", marks: 2 },
            { label: "b", prompt: "Find the angle adjacent to it on the same straight line.", marks: 2 },
            { label: "c", prompt: "Explain why vertically opposite angles are always equal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intersecting lines", statement: "Vertically opposite equal; adjacent on a line supplementary." },
            ],
            steps: [
              { part: "a", reasoning: "Vertically opposite angles are equal: $110°$.", working: "110°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adjacent on straight line: $180-110=70°$.", working: "70°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each vertically opposite angle forms linear pairs with the same adjacent angle, so both equal $180°$ minus that angle.", working: "180-a", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $110°$ (b) $70°$ (c) both equal $180°$ minus the same adjacent angle",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) giving $110°$ — adjacent angles on a straight line are supplementary."],
          },
        },
        {
          id: "cilm-u5-ang-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Angles around a point are $3x$, $5x$ and $4x$. What is the largest angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120°$" },
              { id: "b", text: "$150°$" },
              { id: "c", text: "$160°$" },
              { id: "d", text: "$140°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angles around a point", statement: "$12x=360$ → $x=30$; largest $=5x=150°$." },
            ],
            steps: [
              { reasoning: "$3x+5x+4x=12x=360$ → $x=30$; largest $5x=150°$.", working: "5\\times30=150", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $150°$",
            commonErrors: ["Choosing (d) — largest is $5x$, not $4x$ or the sum."],
          },
        },
        {
          id: "cilm-u5-ang-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Around point $O$, the angles are $80°$, $x$ and $y$, where $y = 3x$. Find $x$ and $y$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angles around a point", statement: "$80+x+y=360$ with $y=3x$ gives $4x=280$." },
            ],
            steps: [
              { reasoning: "Form the equation: $80+x+3x=360$ → $4x=280$.", working: "4x=280", marks: 1, markCode: "M" },
              { reasoning: "$x=70$, so $y=3\\times70=210$.", working: "x=70,y=210", marks: 1, markCode: "M" },
              { reasoning: "$x=70°$, $y=210°$ (reflex).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 70°$, $y = 210°$",
            commonErrors: ["Using $180°$ for the total instead of $360°$."],
          },
        },
      ],
    },
    {
      id: "cilm-u5-parallel-angles",
      title: "Angles in parallel lines",
      skill: "Use corresponding, alternate and co-interior angle rules for parallel lines cut by a transversal.",
      lesson: {
        sections: [
          {
            heading: "The transversal",
            body: "When a line crosses two parallel lines, it creates angle pairs:\n\n- **Corresponding**: same position — equal\n- **Alternate**: opposite sides, between the lines — equal\n- **Co-interior** (same-side interior): same side, between the lines — sum to $180°$",
          },
          {
            heading: "Quick reference",
            body: "- Corresponding angles: **equal**\n- Alternate angles: **equal**\n- Co-interior angles: **sum to 180°**\n\nIf the lines aren't parallel, none of these rules apply.",
          },
          {
            heading: "Worked pattern",
            body: "Parallel lines cut by transversal: if one angle is $65°$, its corresponding angle is also $65°$, its alternate is $65°$, and its co-interior is $115°$.",
          },
        ],
        keyFormulas: [
          { name: "Parallel line angles", statement: "Corresponding = alternate (equal); co-interior = 180° sum." },
        ],
        workedExample: {
          problem: "Two parallel lines are cut by a transversal. One angle is $110°$. Find the co-interior angle.",
          solution: "Co-interior angles sum to $180°$: $180 - 110 = 70°$.",
        },
      },
      questions: [
        {
          id: "cilm-u5-par-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two parallel lines are cut by a transversal. A corresponding angle pair are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sum to $180°$" },
              { id: "b", text: "Sum to $360°$" },
              { id: "c", text: "Always $90°$" },
              { id: "d", text: "Equal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Corresponding angles", statement: "Equal when lines are parallel." },
            ],
            steps: [
              { reasoning: "Corresponding angles are equal.", working: "equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Equal",
            commonErrors: ["Choosing (b) — that's co-interior angles."],
          },
        },
        {
          id: "cilm-u5-par-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Parallel lines cut by a transversal form an angle of $72°$. Find the alternate angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Alternate angles", statement: "Alternate angles are equal." },
            ],
            steps: [
              { reasoning: "Alternate angles equal: $72°$.", working: "72°", marks: 1, markCode: "M" },
              { reasoning: "Answer: $72°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72°$",
            commonErrors: ["$180-72=108°$ — that's co-interior, not alternate."],
          },
        },
        {
          id: "cilm-u5-par-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Parallel lines $AB$ and $CD$ are cut by transversal $EF$. Angle $AEF = 65°$ and angle $CFE = x$. Identify the relationship and find $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angle identification", statement: "Identify angle pair type first, then apply rule." },
            ],
            steps: [
              { reasoning: "Angles on opposite sides of transversal, between parallel lines — alternate angles.", working: "\\text{alternate}", marks: 1, markCode: "M" },
              { reasoning: "Alternate angles equal: $x = 65°$.", working: "x=65°", marks: 1, markCode: "M" },
              { reasoning: "Correct answer.", marks: 1, markCode: "M" },
              { reasoning: "Relationship identified correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 65°$ (alternate angles are equal)",
            commonErrors: ["Using $180°$ sum — that's for co-interior angles on the SAME side."],
          },
        },
        {
          id: "cilm-u5-par-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A zigzag line crosses three parallel lines.",
          parts: [
            { label: "a", prompt: "If the first angle is $50°$, find the corresponding angle on line 2.", marks: 2 },
            { label: "b", prompt: "Find the co-interior angle on line 2.", marks: 2 },
            { label: "c", prompt: "If the zigzag turns, explain how alternate angles help track the direction.", marks: 2 },
            { label: "d", prompt: "State the condition required for these angle rules to apply.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel angle rules", statement: "Corresponding/alternate equal; co-interior supplementary; requires parallel lines." },
            ],
            steps: [
              { part: "a", reasoning: "Corresponding angles equal: $50°$.", working: "50°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Co-interior: $180-50=130°$.", working: "130°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alternate angles track the zigzag direction — equal angles mean parallel travel.", working: "\\text{direction}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasonable explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Lines MUST be parallel — rules don't apply to non-parallel lines.", working: "\\text{parallel required}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Condition stated.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation of why.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $50°$ (b) $130°$ (c) alternate angles preserve direction (d) lines must be parallel",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Direction explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Condition explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Applying rules without checking lines are parallel."],
          },
        },
        {
          id: "cilm-u5-par-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a transversal crosses two parallel lines, alternate angles are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal" },
              { id: "b", text: "Sum to $180°$" },
              { id: "c", text: "Always $90°$" },
              { id: "d", text: "Sum to $360°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Alternate angles", statement: "Alternate angles are equal when lines are parallel." },
            ],
            steps: [
              { reasoning: "Alternate angles are equal.", working: "equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Equal",
            commonErrors: ["Choosing (b) — that's the co-interior rule."],
          },
        },
        {
          id: "cilm-u5-par-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Parallel lines are cut by a transversal. A corresponding angle is $58°$. Find the co-interior angle on the same side.",
          response: { type: "numeric", parts: [{ label: "co-interior angle", answer: 122 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Co-interior angles", statement: "Co-interior angles sum to $180°$: $180-58=122$." },
            ],
            steps: [
              { reasoning: "Co-interior angles sum to $180°$: $180-58=122°$.", working: "180-58=122", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$122°$",
            commonErrors: ["Answering $58°$ — co-interior angles are supplementary, not equal."],
          },
        },
        {
          id: "cilm-u5-par-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Parallel lines are cut by a transversal forming an angle of $47°$. Find the alternate angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Alternate angles", statement: "Alternate angles are equal." },
            ],
            steps: [
              { reasoning: "Alternate angles equal: $47°$.", working: "47°", marks: 1, markCode: "M" },
              { reasoning: "Answer: $47°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$47°$",
            commonErrors: ["$180-47=133°$ — that's co-interior, not alternate."],
          },
        },
        {
          id: "cilm-u5-par-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Co-interior angles formed by parallel lines and a transversal always...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are $90°$ each" },
              { id: "b", text: "Sum to $180°$" },
              { id: "c", text: "Are equal" },
              { id: "d", text: "Sum to $360°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Co-interior angles", statement: "Same-side interior angles sum to $180°$." },
            ],
            steps: [
              { reasoning: "Co-interior angles sum to $180°$.", working: "180°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sum to $180°$",
            commonErrors: ["Choosing (a) — equal describes corresponding and alternate angles."],
          },
        },
        {
          id: "cilm-u5-par-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One angle formed by a transversal crossing two parallel lines is $125°$. Find the corresponding angle.",
          response: { type: "numeric", parts: [{ label: "corresponding angle", answer: 125 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Corresponding angles", statement: "Corresponding angles are equal: $125°$." },
            ],
            steps: [
              { reasoning: "Corresponding angles equal: $125°$.", working: "125°", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$125°$",
            commonErrors: ["$180-125=55$ — that would be co-interior."],
          },
        },
        {
          id: "cilm-u5-par-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two parallel lines are cut by a transversal. One of the angles is $65°$. Find the sizes of the other three angles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "All four angles", statement: "Corresponding and alternate equal ($65°$); co-interior supplementary ($115°$)." },
            ],
            steps: [
              { reasoning: "Corresponding angle $=65°$ (equal).", working: "65°", marks: 1, markCode: "M" },
              { reasoning: "Alternate angle $=65°$ (equal).", working: "65°", marks: 1, markCode: "M" },
              { reasoning: "Co-interior angle $=180-65=115°$.", working: "115°", marks: 1, markCode: "M" },
              { reasoning: "All three values stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65°$, $65°$ and $115°$",
            commonErrors: ["Giving $115°$ for the alternate angle — alternate angles are equal, not supplementary."],
          },
        },
        {
          id: "cilm-u5-par-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The parallel-line angle rules (corresponding equal, co-interior supplementary) apply only when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The angles are acute" },
              { id: "b", text: "The transversal is perpendicular" },
              { id: "c", text: "The two lines are parallel" },
              { id: "d", text: "The two lines are the same length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Condition for rules", statement: "These rules require parallel lines — they fail for non-parallel lines." },
            ],
            steps: [
              { reasoning: "The rules only hold when the lines are parallel.", working: "parallel", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The two lines are parallel",
            commonErrors: ["Applying the rules without checking the lines are parallel."],
          },
        },
        {
          id: "cilm-u5-par-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two co-interior angles formed by parallel lines are $103°$ and $x$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 77 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Co-interior angles", statement: "Co-interior angles sum to $180°$: $x=180-103=77$." },
            ],
            steps: [
              { reasoning: "$x = 180-103 = 77°$.", working: "180-103=77", marks: 1, markCode: "M" },
              { reasoning: "$x = 77°$ — acute, sensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 77°$",
            commonErrors: ["$103°$ — co-interior angles are supplementary, not equal."],
          },
        },
        {
          id: "cilm-u5-par-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The acute angle between a transversal and a parallel line is $38°$. What is the obtuse angle on the same side between the lines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$38°$" },
              { id: "b", text: "$142°$" },
              { id: "c", text: "$52°$" },
              { id: "d", text: "$128°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Co-interior", statement: "Same-side interior angles sum to $180°$: $180-38=142$." },
            ],
            steps: [
              { reasoning: "Co-interior $=180-38=142°$.", working: "180-38=142", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $142°$",
            commonErrors: ["Choosing (b) — that's the corresponding/alternate acute angle, not co-interior."],
          },
        },
        {
          id: "cilm-u5-par-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two parallel lines are cut by a transversal. One of the angles is $70°$.",
          parts: [
            { label: "a", prompt: "Find the corresponding angle.", marks: 2 },
            { label: "b", prompt: "Find the alternate angle.", marks: 2 },
            { label: "c", prompt: "Find the co-interior angle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel angle rules", statement: "Corresponding = alternate (equal); co-interior sums to $180°$." },
            ],
            steps: [
              { part: "a", reasoning: "Corresponding angles equal: $70°$.", working: "70°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alternate angles equal: $70°$.", working: "70°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Co-interior: $180-70=110°$.", working: "110°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $70°$ (b) $70°$ (c) $110°$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Applying the wrong rule — match the angle pair type first."],
          },
        },
        {
          id: "cilm-u5-par-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The acute angle between a transversal and one parallel line is $42°$. What is the co-interior angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$138°$" },
              { id: "b", text: "$48°$" },
              { id: "c", text: "$42°$" },
              { id: "d", text: "$90°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Co-interior angles", statement: "Co-interior angles sum to $180°$: $180-42=138$." },
            ],
            steps: [
              { reasoning: "Co-interior $=180-42=138°$.", working: "180-42=138", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $138°$",
            commonErrors: ["Choosing (a) — equal applies to corresponding/alternate, not co-interior."],
          },
        },
        {
          id: "cilm-u5-par-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain, using angle rules, why alternate angles formed by a transversal crossing two parallel lines are equal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angle proof", statement: "Corresponding angles are equal; vertically opposite angles are equal — alternate angles equal follows." },
            ],
            steps: [
              { reasoning: "The angle and its alternate are each equal to the same corresponding angle on the other line.", working: "\\text{same corresponding}", marks: 1, markCode: "M" },
              { reasoning: "Corresponding angles are equal (parallel lines) and vertically opposite angles are equal.", working: "corr + VO", marks: 1, markCode: "M" },
              { reasoning: "Therefore the alternate angles must be equal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both equal the same corresponding angle (via corresponding + vertically opposite rules).",
            commonErrors: ["Just stating 'they are equal' without using corresponding/vertically opposite reasoning."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u5-angles-notes",
      title: "Angles — revision notes",
      summary: "Angle types, rules for lines and points, parallel line angles.",
      sections: [
        {
          heading: "Basic rules",
          body: "Straight line $=180°$; around point $=360°$; vertically opposite equal. Acute $<90°$, right $=90°$, obtuse $90-180°$, reflex $>180°$.",
        },
        {
          heading: "Parallel lines",
          body: "Corresponding = alternate (equal); co-interior sums to $180°$. Requires parallel lines — check first!",
        },
      ],
    },
  ],
};
