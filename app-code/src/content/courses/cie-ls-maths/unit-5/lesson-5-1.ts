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
              { id: "a", text: "Acute" },
              { id: "b", text: "Right" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Reflex" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle types", statement: "$90°<120°<180°$ — obtuse." },
            ],
            steps: [
              { reasoning: "$120°$ is between $90°$ and $180°$ → obtuse.", working: "90<120<180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Obtuse",
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
              { id: "a", text: "Equal" },
              { id: "b", text: "Sum to $180°$" },
              { id: "c", text: "Sum to $360°$" },
              { id: "d", text: "Always $90°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Corresponding angles", statement: "Equal when lines are parallel." },
            ],
            steps: [
              { reasoning: "Corresponding angles are equal.", working: "equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Equal",
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
