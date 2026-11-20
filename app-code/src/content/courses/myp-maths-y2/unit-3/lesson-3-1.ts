import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypm2-u3-lesson-3-1",
  code: "3-1",
  title: "Circles and Area",
  goal: "I CAN find the circumference and area of circles and semicircles, work out arc lengths and sector areas, and find the volume of prisms and cylinders, giving answers in terms of pi or rounded.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
    "MYP Maths: Geometry and trigonometry",
  ],
  vocabulary: [
    { term: "Radius", definition: "The distance from the centre of a circle to any point on its edge." },
    { term: "Diameter", definition: "A straight line through the centre of a circle joining two points on its edge. It is twice the radius." },
    { term: "Circumference", definition: "The distance around the edge of a circle." },
    { term: "Arc", definition: "A part of the circumference of a circle." },
    { term: "Sector", definition: "The region of a circle between two radii and the arc that joins them." },
    { term: "Prism", definition: "A solid with the same cross-section along its whole length." },
    { term: "Cylinder", definition: "A prism whose cross-section is a circle." },
  ],
  concepts: [
    {
      id: "mypm2-u3-circle-measures",
      title: "Circumference and area of circles",
      skill: "Use $C=\\pi d$ and $A=\\pi r^2$ for circles and semicircles, giving answers in terms of $\\pi$ or as decimals.",
      lesson: {
        sections: [
          {
            heading: "Parts of a circle",
            body: "The **radius** $r$ goes from the centre to the edge. The **diameter** $d$ goes right across through the centre, so $d=2r$. The **circumference** is the distance around the edge. A chord joins two points on the edge, and a tangent touches the circle at exactly one point.",
          },
          {
            heading: "Circumference and area",
            body: "For every circle the circumference divided by the diameter is the same number, $\\pi\\approx3.14159$. This gives $C=\\pi d=2\\pi r$. The area is $A=\\pi r^2$. Remember to square only the radius, not $\\pi$. A semicircle has half the area, $\\frac12\\pi r^2$, and its perimeter is half the circumference plus the diameter.",
          },
          {
            heading: "Answers in terms of pi",
            body: "An answer written in terms of $\\pi$, such as $36\\pi\\ \\text{cm}^2$, is exact. A decimal such as $113.1\\ \\text{cm}^2$ is rounded. Leave $\\pi$ in your answer when the question asks for it, and use the $\\pi$ button on your calculator when you need a decimal.",
          },
        ],
        keyFormulas: [
          { name: "Circumference", statement: "$C=\\pi d=2\\pi r$" },
          { name: "Area of a circle", statement: "$A=\\pi r^2$" },
          { name: "Area of a semicircle", statement: "$A=\\frac12\\pi r^2$" },
        ],
        workedExample: {
          problem: "A circle has radius $7\\ \\text{cm}$. Find its circumference and area in terms of $\\pi$.",
          solution: "$C=2\\pi r=2\\times\\pi\\times7=14\\pi\\ \\text{cm}$. $A=\\pi r^2=\\pi\\times7^2=49\\pi\\ \\text{cm}^2$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-circle-measures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has a diameter of $10\\ \\text{cm}$. What is its circumference, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\pi\\ \\text{cm}$" },
              { id: "b", text: "$10\\pi\\ \\text{cm}$" },
              { id: "c", text: "$20\\pi\\ \\text{cm}$" },
              { id: "d", text: "$25\\pi\\ \\text{cm}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=\\pi d$, where $d$ is the diameter." },
            ],
            steps: [
              { reasoning: "The diameter is given, so multiply it by $\\pi$.", working: "C=\\pi\\times10=10\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $10\\pi\\ \\text{cm}$",
            commonErrors: ["Using the radius, $5$, as the multiplier (answer a).", "Using $2\\pi d$ (answer c).", "Using the area formula with the radius (answer d)."],
          },
        },
        {
          id: "mypm2-u3-circle-measures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has a radius of $6\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Substitute the radius into the area formula.", working: "A=\\pi\\times6^2", marks: 1, markCode: "M" },
              { reasoning: "Square 6 and read off the coefficient of $\\pi$.", working: "A=36\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=36$, so the area is $36\\pi\\ \\text{cm}^2$",
            commonErrors: ["Calculating $(\\pi\\times6)^2$ or $\\pi\\times 12$.", "Using the diameter formula and getting $12\\pi$ or $6\\pi$."],
          },
        },
        {
          id: "mypm2-u3-circle-measures-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circle has a circumference of $18\\pi\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 81 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Use the circumference to find the radius.", working: "2\\pi r=18\\pi \\Rightarrow r=9", marks: 1, markCode: "M" },
              { reasoning: "Substitute the radius into the area formula.", working: "A=\\pi\\times9^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A=81\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=81$, so the area is $81\\pi\\ \\text{cm}^2$",
            commonErrors: ["Taking $18$ as the diameter or the radius.", "Squaring $18$ to get $324\\pi$."],
          },
        },
        {
          id: "mypm2-u3-circle-measures-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A circular pond has a radius of $4\\ \\text{m}$. A path of width $1\\ \\text{m}$ goes all the way around the pond, so the outer edge of the path is a circle of radius $5\\ \\text{m}$. A fence is built along the outer edge of the path. The fence is made from panels that are each $2\\ \\text{m}$ long. Use the $\\pi$ button on your calculator where a decimal is needed.",
          parts: [
            { label: "a", prompt: "The area of the pond is $k\\pi\\ \\text{m}^2$. Find $k$.", marks: 2 },
            { label: "b", prompt: "The area of the path is $p\\pi\\ \\text{m}^2$. Find $p$.", marks: 2 },
            { label: "c", prompt: "Work out the length of the fence, in metres, correct to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Work out the smallest number of panels needed to complete the fence. Explain why you round the way you do.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) k", answer: 16 },
              { label: "(b) p", answer: 9 },
              { label: "(c) Length of fence", answer: 31.4, tolerance: 0.05, unit: "m" },
              { label: "(d) Number of panels", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$." },
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
              { kind: "principle", name: "Area of a ring", statement: "The area of the path is the area of the larger circle minus the area of the smaller circle." },
            ],
            steps: [
              { part: "a", reasoning: "Use the pond radius of 4 m.", working: "A=\\pi\\times4^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "A=16\\pi", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The path is the larger circle (radius 5) minus the pond.", working: "25\\pi-16\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract.", working: "9\\pi", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The fence follows the outer circle of radius 5 m.", working: "C=2\\pi\\times5=10\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 1 decimal place.", working: "10\\pi=31.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the fence length by the length of one panel.", working: "31.416\\div2=15.7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Part of a panel is not enough to close the fence, so round up to a whole number.", working: "16", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $16$ (b) $9$ (c) $31.4\\ \\text{m}$ (d) $16$ panels, rounded up because 15 panels would leave a gap",
            commonErrors: ["Finding the path area as $\\pi\\times1^2$ instead of subtracting two circle areas.", "Using the pond radius for the fence.", "Rounding 15.7 down to 15 in part (d)."],
            examinerNote: "In (d) the R mark is for the reason for rounding up, not just the number 16.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has a diameter of $8\\ \\text{cm}$. What is its circumference, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\pi\\ \\text{cm}$" },
              { id: "b", text: "$8\\pi\\ \\text{cm}$" },
              { id: "c", text: "$16\\pi\\ \\text{cm}$" },
              { id: "d", text: "$64\\pi\\ \\text{cm}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=\\pi d$." },
            ],
            steps: [
              { reasoning: "Multiply the diameter by $\\pi$.", working: "C=\\pi\\times8=8\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $8\\pi\\ \\text{cm}$",
            commonErrors: ["Using $2\\pi d$, giving $16\\pi$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has a radius of $5\\ \\text{cm}$. What is its area, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\pi\\ \\text{cm}^2$" },
              { id: "b", text: "$25\\pi\\ \\text{cm}^2$" },
              { id: "c", text: "$5\\pi\\ \\text{cm}^2$" },
              { id: "d", text: "$50\\pi\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Square the radius and multiply by $\\pi$.", working: "A=\\pi\\times5^2=25\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $25\\pi\\ \\text{cm}^2$",
            commonErrors: ["Using $2\\pi r$, the circumference, giving $10\\pi$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has a circumference of $12\\pi\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Use the circumference to find the radius: $2r=12$, so $r=6$.", working: "2\\pi r=12\\pi\\Rightarrow r=6", marks: 1, markCode: "M" },
              { reasoning: "Square the radius for the area coefficient.", working: "A=\\pi\\times6^2=36\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=36$, so the area is $36\\pi\\ \\text{cm}^2$",
            commonErrors: ["Taking 12 as the radius, giving $144\\pi$."],
            examinerNote: "M1 for $r=6$. A1 for $k=36$.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A circle has a radius of $9\\ \\text{cm}$. Its circumference is $k\\pi\\ \\text{cm}$. What is the value of $k$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$81$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
            ],
            steps: [
              { reasoning: "Use $C=2\\pi r$ with $r=9$: $C=18\\pi$, so $k=18$.", working: "2\\times9=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $k=18$",
            commonErrors: ["Using $\\pi r$ instead of $2\\pi r$, giving 9 (a).", "Squaring the radius, giving 81 (d)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A semicircle has a radius of $4\\ \\text{cm}$. What is its area, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\pi\\ \\text{cm}^2$" },
              { id: "b", text: "$16\\pi\\ \\text{cm}^2$" },
              { id: "c", text: "$4\\pi\\ \\text{cm}^2$" },
              { id: "d", text: "$32\\pi\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a semicircle", statement: "$A=\\frac12\\pi r^2$." },
            ],
            steps: [
              { reasoning: "Half the area of a circle of radius 4: $\\frac12\\pi\\times16=8\\pi$.", working: "\\frac12\\times16\\pi=8\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8\\pi\\ \\text{cm}^2$",
            commonErrors: ["Forgetting to halve, giving $16\\pi$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between the formulas $C=\\pi d$ and $A=\\pi r^2$: what does each one measure, and why does the area formula use $r^2$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=\\pi d$: distance around the edge." },
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$: space inside the circle." },
            ],
            steps: [
              { reasoning: "$C=\\pi d$ gives the distance around the edge; it is a length, measured in cm or m.", marks: 1, markCode: "R" },
              { reasoning: "$A=\\pi r^2$ gives the space enclosed; it is an area, measured in cm$^2$ or m$^2$. The $r^2$ appears because area is two-dimensional: both the 'width' and 'height' of the circle scale with the radius.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$C=\\pi d$ is a length around the edge; $A=\\pi r^2$ is an area, and $r^2$ reflects the two dimensions.",
            commonErrors: ["Saying the area formula uses $r^2$ because the radius is squared for no reason."],
            examinerNote: "The key idea is length vs area (one vs two dimensions).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circle has a diameter of $14\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 49 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$, where $r$ is the radius." },
            ],
            steps: [
              { reasoning: "The radius is half the diameter: $r=7$.", working: "r=14\\div2=7", marks: 1, markCode: "M" },
              { reasoning: "Square the radius.", working: "A=\\pi\\times7^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A=49\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=49$, so the area is $49\\pi\\ \\text{cm}^2$",
            commonErrors: ["Using the diameter 14 in the area formula, giving $196\\pi$."],
            examinerNote: "M1 for $r=7$. M1 for $\\pi r^2$ substitution. A1 for $k=49$.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Circle A has radius $6\\ \\text{cm}$. Circle B has diameter $12\\ \\text{cm}$. Which statement about their areas is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circle A has twice the area of circle B" },
              { id: "b", text: "Circle B has twice the area of circle A" },
              { id: "c", text: "The areas are equal" },
              { id: "d", text: "Circle A has four times the area of circle B" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Diameter and radius", statement: "The diameter is twice the radius, so a diameter of 12 cm means a radius of 6 cm." },
            ],
            steps: [
              { reasoning: "Circle B's radius is $12\\div2=6$ cm, the same as circle A, so the areas are equal: $36\\pi$ cm$^2$ each.", working: "\\pi\\times6^2=36\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The areas are equal",
            commonErrors: ["Thinking diameter 12 is 'bigger' than radius 6 without converting."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circular garden has radius $10\\ \\text{m}$. A fence is built around the edge using straight panels each $4\\ \\text{m}$ long. Explain how you would find the number of panels needed, and why you round up rather than down.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
            ],
            steps: [
              { reasoning: "Find the circumference of the garden.", working: "C=2\\pi\\times10=20\\pi\\approx62.83\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the panel length: $62.83\\div4\\approx15.7$ panels.", working: "15.7", marks: 1, markCode: "M" },
              { reasoning: "15 panels would leave a gap, so round up to 16 panels to complete the fence.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "About 15.7 panels, so 16 panels are needed (round up because part of a panel is still needed).",
            commonErrors: ["Rounding 15.7 down to 15, leaving a gap."],
            examinerNote: "The R mark is for the reason for rounding up.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has radius $7\\ \\text{cm}$. One student uses $\\pi=3.14$ and gets an area of $153.86\\ \\text{cm}^2$. Another uses $\\pi=\\frac{22}{7}$ and gets $154\\ \\text{cm}^2$. Explain why the answers differ and which is closer to the exact answer $49\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pi", statement: "$\\pi\\approx3.14159$ is irrational; $3.14$ and $\\frac{22}{7}$ are both approximations." },
            ],
            steps: [
              { reasoning: "The area is $\\pi\\times7^2=49\\pi$; the value depends on which approximation of $\\pi$ is used.", marks: 1, markCode: "M" },
              { reasoning: "With $\\pi=3.14$: $49\\times3.14=153.86$.", working: "153.86", marks: 1, markCode: "M" },
              { reasoning: "With $\\pi=\\frac{22}{7}$: $49\\times\\frac{22}{7}=7\\times22=154$.", working: "154", marks: 1, markCode: "A" },
              { reasoning: "$\\frac{22}{7}=3.142857\\ldots$ is closer to the true $\\pi\\approx3.14159$ than 3.14? Check: $|3.142857-3.14159|=0.00127$ vs $|3.14-3.14159|=0.00159$, so $\\frac{22}{7}$ is slightly closer, and the answer 154 is closer to $49\\pi\\approx153.94$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$49\\pi\\approx153.94\\ \\text{cm}^2$; $\\frac{22}{7}$ gives the closer approximation (154 vs 153.86).",
            commonErrors: ["Saying one answer is 'wrong' — both are approximations."],
            examinerNote: "The R mark is for comparing the approximations to the true value of $\\pi$.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A circular running track has an inner radius of $30\\ \\text{m}$ and an outer radius of $36\\ \\text{m}$.",
          parts: [
            { label: "a", prompt: "Work out the area of the track itself (the ring between the two circles), in terms of $\\pi$.", marks: 2 },
            { label: "b", prompt: "Work out the length of one complete lap on the inner edge, in terms of $\\pi$.", marks: 2 },
            { label: "c", prompt: "A runner completes 5 laps on the inner edge. Work out the total distance run, in metres, correct to 1 decimal place.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of track coefficient", answer: 396 },
              { label: "(b) Lap length coefficient", answer: 60 },
              { label: "(c) Total distance", answer: 942.5, tolerance: 0.1, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$" },
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$" },
              { kind: "principle", name: "Area of a ring", statement: "The track area is the outer circle minus the inner circle." },
            ],
            steps: [
              { part: "a", reasoning: "Outer area minus inner area: $\\pi\\times36^2-\\pi\\times30^2$.", working: "1296\\pi-900\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract.", working: "396\\pi\\ \\text{m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $C=2\\pi r$ with $r=30$.", working: "2\\pi\\times30=60\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the lap length.", working: "60\\pi\\ \\text{m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Five laps: $5\\times60\\pi=300\\pi$.", working: "300\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 1 decimal place: $300\\times3.14159=942.48$.", working: "942.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $396\\pi\\ \\text{m}^2$ (b) $60\\pi\\ \\text{m}$ (c) $942.5\\ \\text{m}$",
            commonErrors: ["In (a) subtracting the radii first: $\\pi(36-30)^2=36\\pi$."],
            examinerNote: "In (c) accept 942.4 or 942.5.",
          },
        },
        {
          id: "mypm2-u3-circle-measures-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A circular fountain has radius $3\\ \\text{m}$. A paved area surrounds it out to a radius of $5\\ \\text{m}$. Paving costs 25 euros per square metre.",
          parts: [
            { label: "a", prompt: "Work out the area of the paved ring, in terms of $\\pi$.", marks: 2 },
            { label: "b", prompt: "Work out the cost of paving the ring, in euros, correct to the nearest euro. Use $\\pi=3.14159$.", marks: 2 },
            { label: "c", prompt: "A hedge is planted around the outer edge of the paved area. Each hedge plant covers $0.5\\ \\text{m}$ of edge. Work out how many plants are needed, correct to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why the number of plants must be rounded up, not to the nearest whole number.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of ring coefficient", answer: 16 },
              { label: "(b) Cost of paving", answer: 1257, unit: "euros" },
              { label: "(c) Number of plants", answer: 63 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$" },
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$" },
              { kind: "principle", name: "Area of a ring", statement: "The paved area is the outer circle minus the inner circle." },
            ],
            steps: [
              { part: "a", reasoning: "Outer minus inner: $\\pi\\times5^2-\\pi\\times3^2=25\\pi-9\\pi$.", working: "16\\pi\\ \\text{m}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the coefficient.", working: "16", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area $=16\\pi\\approx50.265$ m$^2$; multiply by 25.", working: "50.265\\times25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round: $1256.6\\to1257$ euros.", working: "1257", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Outer circumference $=2\\pi\\times5=10\\pi\\approx31.416$ m; divide by 0.5.", working: "31.416\\div0.5=62.83", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round up to whole plants: 63.", working: "63", marks: 1, markCode: "A" },
              { part: "d", reasoning: "62.83 plants means part of a plant is still needed to cover the whole edge; 62 plants would leave a gap.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So the answer must be rounded up to the next whole number.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $16\\pi\\ \\text{m}^2$ (b) about 1257 euros (c) 63 plants (d) rounding up because 62 plants would leave a gap",
            commonErrors: ["In (a) computing $\\pi(5-3)^2=4\\pi$.", "In (c) rounding 62.83 to 63 without justification — the justification is needed in (d)."],
            examinerNote: "In (b) accept 1256 or 1257.",
          },
        },
      ],
    },
    {
      id: "mypm2-u3-sectors-prisms",
      title: "Arcs, sectors, compound shapes, prisms and cylinders",
      skill: "Find arc lengths and sector areas as fractions of a circle, areas of compound shapes with circles, and volumes of prisms and cylinders.",
      lesson: {
        sections: [
          {
            heading: "Arcs and sectors as fractions of a circle",
            body: "A sector with angle $\\theta$ is the fraction $\\frac{\\theta}{360}$ of the whole circle. So the arc length is $\\frac{\\theta}{360}\\times2\\pi r$ and the sector area is $\\frac{\\theta}{360}\\times\\pi r^2$. For example, a $90^\\circ$ sector is one quarter of the circle.",
          },
          {
            heading: "Compound shapes",
            body: "Split a compound shape into rectangles, triangles and parts of circles, find each area, then add or subtract. A rectangle with a semicircle on one side has area equal to the rectangle plus $\\frac12\\pi r^2$, where $r$ is half the side the semicircle sits on.",
          },
          {
            heading: "Volume of prisms and cylinders",
            body: "For any prism, volume $=$ area of cross-section $\\times$ length. A cylinder is a prism with a circular cross-section, so $V=\\pi r^2h$. To change cubic metres to litres, multiply by $1000$, because $1\\ \\text{m}^3=1000\\ \\text{litres}$.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$\\dfrac{\\theta}{360}\\times2\\pi r$" },
          { name: "Sector area", statement: "$\\dfrac{\\theta}{360}\\times\\pi r^2$" },
          { name: "Volume of a prism", statement: "$V=\\text{cross-section area}\\times\\text{length}$" },
          { name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
        ],
        workedExample: {
          problem: "Find the volume of a cylinder with radius $3\\ \\text{cm}$ and height $10\\ \\text{cm}$, in terms of $\\pi$.",
          solution: "$V=\\pi r^2h=\\pi\\times3^2\\times10=90\\pi\\ \\text{cm}^3$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-sectors-prisms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sector has an angle of $90^\\circ$ and a radius of $4\\ \\text{cm}$. What is the length of its arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi\\ \\text{cm}$" },
              { id: "b", text: "$2\\pi\\ \\text{cm}$" },
              { id: "c", text: "$4\\pi\\ \\text{cm}$" },
              { id: "d", text: "$8\\pi\\ \\text{cm}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "Arc length $=\\frac{\\theta}{360}\\times2\\pi r$." },
            ],
            steps: [
              { reasoning: "The sector is a quarter of the circle, so the arc is a quarter of the circumference $8\\pi$.", working: "\\frac{90}{360}\\times2\\pi\\times4=\\frac14\\times8\\pi=2\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2\\pi\\ \\text{cm}$",
            commonErrors: ["Giving the whole circumference, $8\\pi$.", "Giving the area of the quarter circle, $4\\pi$."],
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sector has an angle of $120^\\circ$ and a radius of $6\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "Sector area $=\\frac{\\theta}{360}\\times\\pi r^2$." },
            ],
            steps: [
              { reasoning: "The sector is $\\frac{120}{360}=\\frac13$ of the circle.", working: "\\frac{120}{360}\\times\\pi\\times6^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac13\\times36\\pi=12\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=12$, so the area is $12\\pi\\ \\text{cm}^2$",
            commonErrors: ["Using the circumference formula, giving $4\\pi$.", "Using the fraction $\\frac{120}{180}$."],
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shape is made from a rectangle $10\\ \\text{cm}$ long and $6\\ \\text{cm}$ wide, with a semicircle attached to one of the $6\\ \\text{cm}$ sides. The diameter of the semicircle is that $6\\ \\text{cm}$ side. Work out the total area of the shape in $\\text{cm}^2$, correct to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 74.1, tolerance: 0.05, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a semicircle", statement: "$A=\\frac12\\pi r^2$." },
              { kind: "principle", name: "Compound shapes", statement: "Total area is the sum of the areas of the parts." },
            ],
            steps: [
              { reasoning: "Area of the rectangle.", working: "10\\times6=60", marks: 1, markCode: "B" },
              { reasoning: "The semicircle has diameter 6, so radius 3.", working: "\\frac12\\times\\pi\\times3^2=4.5\\pi=14.137", marks: 1, markCode: "M" },
              { reasoning: "Add and round.", working: "60+14.137=74.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$74.1\\ \\text{cm}^2$",
            commonErrors: ["Using 6 as the radius of the semicircle.", "Forgetting to halve the circle area."],
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A water tank is a cylinder with a radius of $2\\ \\text{m}$ and a height of $5\\ \\text{m}$. Use the $\\pi$ button on your calculator where a decimal is needed. The tank is filled by a pump that delivers $500$ litres every minute. A second container is a triangular prism. Its cross-section is a right-angled triangle with shorter sides $6\\ \\text{cm}$ and $8\\ \\text{cm}$, and the prism is $10\\ \\text{cm}$ long.",
          parts: [
            { label: "a", prompt: "The area of the circular base of the tank is $k\\pi\\ \\text{m}^2$. Find $k$.", marks: 1 },
            { label: "b", prompt: "Work out the volume of the tank in $\\text{m}^3$, correct to 1 decimal place.", marks: 2 },
            { label: "c", prompt: "Given that $1\\ \\text{m}^3=1000$ litres, work out the capacity of the tank in litres, to the nearest litre.", marks: 2 },
            { label: "d", prompt: "Work out the volume of the triangular prism in $\\text{cm}^3$.", marks: 2 },
            { label: "e", prompt: "How many minutes does the pump take to fill the empty tank? Give your answer to 1 decimal place.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) k", answer: 4 },
              { label: "(b) Volume of tank", answer: 62.8, tolerance: 0.05, unit: "m³" },
              { label: "(c) Capacity", answer: 62832, tolerance: 1, unit: "litres" },
              { label: "(d) Volume of prism", answer: 240, unit: "cm³" },
              { label: "(e) Time to fill", answer: 125.7, tolerance: 0.1, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$, base area times height." },
              { kind: "formula", name: "Volume of a prism", statement: "Volume $=$ cross-section area $\\times$ length." },
              { kind: "principle", name: "Unit conversion", statement: "$1\\ \\text{m}^3=1000$ litres." },
            ],
            steps: [
              { part: "a", reasoning: "Base area with radius 2.", working: "\\pi\\times2^2=4\\pi", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the base area by the height.", working: "V=4\\pi\\times5=20\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 1 decimal place.", working: "20\\pi=62.8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply by 1000 to change cubic metres to litres.", working: "62.8318\\times1000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to the nearest litre.", working: "62\\,832", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The cross-section is a right-angled triangle, so use half base times height, then multiply by the length.", working: "\\frac12\\times6\\times8\\times10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "24\\times10=240", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Divide the capacity by the pumping rate.", working: "62\\,831.85\\div500", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate to 1 decimal place.", working: "125.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ (b) $62.8\\ \\text{m}^3$ (c) $62\\,832$ litres (d) $240\\ \\text{cm}^3$ (e) $125.7$ minutes",
            commonErrors: ["Using the diameter 4 as the radius, giving $16\\pi$.", "Forgetting to multiply by 1000, or dividing by 1000.", "Using $\\frac12\\times6\\times8$ as the volume without multiplying by the length."],
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sector has angle $60^\\circ$ and radius $6\\ \\text{cm}$. What is the length of its arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi\\ \\text{cm}$" },
              { id: "b", text: "$2\\pi\\ \\text{cm}$" },
              { id: "c", text: "$6\\pi\\ \\text{cm}$" },
              { id: "d", text: "$12\\pi\\ \\text{cm}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "Arc length $=\\frac{\\theta}{360}\\times2\\pi r$." },
            ],
            steps: [
              { reasoning: "The sector is $\\frac{60}{360}=\\frac16$ of the circle; circumference is $12\\pi$, so the arc is $\\frac{12\\pi}{6}=2\\pi$.", working: "\\frac{60}{360}\\times2\\pi\\times6=2\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2\\pi\\ \\text{cm}$",
            commonErrors: ["Giving the whole circumference $12\\pi$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cylinder has radius $2\\ \\text{cm}$ and height $5\\ \\text{cm}$. What is its volume, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\pi\\ \\text{cm}^3$" },
              { id: "b", text: "$20\\pi\\ \\text{cm}^3$" },
              { id: "c", text: "$25\\pi\\ \\text{cm}^3$" },
              { id: "d", text: "$4\\pi\\ \\text{cm}^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$." },
            ],
            steps: [
              { reasoning: "Base area $\\times$ height: $\\pi\\times2^2\\times5=20\\pi$.", working: "4\\pi\\times5=20\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20\\pi\\ \\text{cm}^3$",
            commonErrors: ["Using the diameter or forgetting to square the radius."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sector has angle $90^\\circ$ and radius $8\\ \\text{cm}$. Its area is $k\\pi\\ \\text{cm}^2$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "Sector area $=\\frac{\\theta}{360}\\times\\pi r^2$." },
            ],
            steps: [
              { reasoning: "The sector is a quarter of the circle: $\\frac{90}{360}\\times\\pi\\times8^2$.", working: "\\frac14\\times64\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "16\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=16$, so the area is $16\\pi\\ \\text{cm}^2$",
            commonErrors: ["Using the full circle area $64\\pi$."],
            examinerNote: "M1 for the quarter fraction. A1 for $k=16$.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A prism has a rectangular cross-section $3\\ \\text{cm}$ by $4\\ \\text{cm}$ and is $10\\ \\text{cm}$ long. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70\\ \\text{cm}^3$" },
              { id: "b", text: "$120\\ \\text{cm}^3$" },
              { id: "c", text: "$60\\ \\text{cm}^3$" },
              { id: "d", text: "$240\\ \\text{cm}^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a prism", statement: "Volume $=$ cross-section area $\\times$ length." },
            ],
            steps: [
              { reasoning: "Cross-section area $3\\times4=12$ cm$^2$; volume $=12\\times10=120$ cm$^3$.", working: "12\\times10=120", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $120\\ \\text{cm}^3$",
            commonErrors: ["Adding the dimensions instead of multiplying.", "Forgetting the length factor."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sector has angle $180^\\circ$ and radius $5\\ \\text{cm}$. What is the length of its arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\pi\\ \\text{cm}$" },
              { id: "b", text: "$10\\pi\\ \\text{cm}$" },
              { id: "c", text: "$2.5\\pi\\ \\text{cm}$" },
              { id: "d", text: "$\\pi\\ \\text{cm}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "Arc length $=\\frac{\\theta}{360}\\times2\\pi r$." },
            ],
            steps: [
              { reasoning: "A $180^\\circ$ sector is half the circle; half of $10\\pi$ is $5\\pi$.", working: "\\frac{180}{360}\\times10\\pi=5\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5\\pi\\ \\text{cm}$",
            commonErrors: ["Giving the whole circumference $10\\pi$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the area of a sector is $\\frac{\\theta}{360}$ of the area of the whole circle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sector as a fraction", statement: "A sector with angle $\\theta$ is the fraction $\\frac{\\theta}{360}$ of the full circle." },
            ],
            steps: [
              { reasoning: "There are 360 degrees in a full turn, so an angle of $\\theta$ is the fraction $\\frac{\\theta}{360}$ of the full circle.", marks: 1, markCode: "R" },
              { reasoning: "Therefore the sector's area is the same fraction of the full area $\\pi r^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The sector angle is $\\frac{\\theta}{360}$ of a full turn, so its area is that fraction of $\\pi r^2$.",
            commonErrors: ["Saying the fraction is $\\frac{\\theta}{180}$."],
            examinerNote: "The reasoning must connect the angle fraction to the area fraction.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cylinder has radius $3\\ \\text{cm}$ and height $7\\ \\text{cm}$. Its volume is $k\\pi\\ \\text{cm}^3$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 63 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$." },
            ],
            steps: [
              { reasoning: "Find the base area: $\\pi\\times3^2=9\\pi$.", working: "9\\pi", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the height 7.", working: "9\\pi\\times7=63\\pi", marks: 1, markCode: "M" },
              { reasoning: "State the coefficient.", working: "k=63", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=63$, so the volume is $63\\pi\\ \\text{cm}^3$",
            commonErrors: ["Using the diameter as the radius."],
            examinerNote: "M1 for $9\\pi$. M1 for $\\times7$. A1 for $k=63$.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two cylinders have the same height of $3\\ \\text{cm}$. Cylinder A has radius $3\\ \\text{cm}$ and cylinder B has radius $4\\ \\text{cm}$. Which has the greater volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cylinder A" },
              { id: "b", text: "Cylinder B" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$; the radius is squared, so it has a bigger effect." },
            ],
            steps: [
              { reasoning: "A: $\\pi\\times9\\times3=27\\pi$. B: $\\pi\\times16\\times3=48\\pi$. B is greater.", working: "27\\pi<48\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cylinder B",
            commonErrors: ["Thinking equal heights mean equal volumes."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A shape is a square of side $8\\ \\text{cm}$ with a quarter-circle of radius $8\\ \\text{cm}$ removed from one corner. Explain how you would find the area of the remaining shape, and work out the area in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Split the shape into parts, find each area, then add or subtract." },
            ],
            steps: [
              { reasoning: "The remaining area is the square minus the quarter circle.", working: "64-\\frac14\\pi\\times8^2", marks: 1, markCode: "M" },
              { reasoning: "The quarter circle has area $\\frac14\\times64\\pi=16\\pi$.", working: "16\\pi", marks: 1, markCode: "M" },
              { reasoning: "Subtract: the area is $64-16\\pi$ cm$^2$ (about $13.7$ cm$^2$).", working: "64-16\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$64-16\\pi\\ \\text{cm}^2$ (about $13.7\\ \\text{cm}^2$)",
            commonErrors: ["Adding the quarter circle instead of subtracting."],
            examinerNote: "Accept the decimal 13.7 or exact $64-16\\pi$.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cylindrical tank has radius $1.5\\ \\text{m}$ and height $2\\ \\text{m}$. Explain how you would find its capacity in litres, including the unit conversion you need.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
              { kind: "principle", name: "Unit conversion", statement: "$1\\ \\text{m}^3=1000$ litres." },
            ],
            steps: [
              { reasoning: "Find the volume in cubic metres: $V=\\pi\\times1.5^2\\times2=4.5\\pi\\approx14.14$ m$^3$.", working: "4.5\\pi", marks: 1, markCode: "M" },
              { reasoning: "Convert cubic metres to litres by multiplying by 1000.", working: "14.14\\times1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: about $14\\,137$ litres.", working: "14\\,137", marks: 1, markCode: "A" },
              { reasoning: "The conversion is needed because volume is measured in m$^3$ but capacity in litres; $1\\text{ m}^3$ holds 1000 litres.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "About $14\\,137$ litres ($4.5\\pi\\times1000$)",
            commonErrors: ["Dividing by 1000 instead of multiplying."],
            examinerNote: "Accept 14137 or 14136 litres.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A circular pizza has radius $12\\ \\text{cm}$. It is cut into 8 equal slices.",
          parts: [
            { label: "a", prompt: "Work out the area of the whole pizza in terms of $\\pi$.", marks: 1 },
            { label: "b", prompt: "Work out the area of one slice in terms of $\\pi$.", marks: 2 },
            { label: "c", prompt: "Work out the length of the curved edge of one slice in terms of $\\pi$.", marks: 2 },
            { label: "d", prompt: "Two slices are eaten. Work out the area of pizza remaining, in terms of $\\pi$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of pizza coefficient", answer: 144 },
              { label: "(b) Area of one slice coefficient", answer: 18 },
              { label: "(c) Curved edge coefficient", answer: 3 },
              { label: "(d) Remaining area coefficient", answer: 108 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$" },
              { kind: "formula", name: "Arc length", statement: "Arc length $=\\frac{\\theta}{360}\\times2\\pi r$" },
            ],
            steps: [
              { part: "a", reasoning: "Area of the whole pizza: $\\pi\\times12^2=144\\pi$.", working: "144\\pi", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Each slice is $\\frac18$ of the circle, so its angle is $\\frac{360}{8}=45^\\circ$ and its area is $\\frac18\\times144\\pi$.", working: "18\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The curved edge is $\\frac18$ of the circumference $24\\pi$.", working: "\\frac{24\\pi}{8}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "3\\pi\\ \\text{cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Six slices remain: $6\\times18\\pi=108\\pi$.", working: "108\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $144\\pi$ (b) $18\\pi\\ \\text{cm}^2$ (c) $3\\pi\\ \\text{cm}$ (d) $108\\pi\\ \\text{cm}^2$",
            commonErrors: ["In (c) using the radius as the arc length."],
            examinerNote: "In (b) accept the sector formula $\\frac{45}{360}\\times144\\pi$.",
          },
        },
        {
          id: "mypm2-u3-sectors-prisms-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A sculpture is a cylinder of radius $4\\ \\text{cm}$ and height $15\\ \\text{cm}$ with a hemisphere (half a sphere) of radius $4\\ \\text{cm}$ on top. The total height including the hemisphere is not needed. Separately, a Toblerone-style triangular prism box has a cross-section that is an equilateral triangle of side $6\\ \\text{cm}$ and length $20\\ \\text{cm}$.",
          parts: [
            { label: "a", prompt: "Work out the volume of the cylindrical part in terms of $\\pi$.", marks: 2 },
            { label: "b", prompt: "Work out the volume of the whole sculpture. The volume of a hemisphere of radius $r$ is $\\frac23\\pi r^3$.", marks: 2 },
            { label: "c", prompt: "Work out the volume of the triangular prism. The area of an equilateral triangle of side $s$ is $\\frac{\\sqrt3}{4}s^2$.", marks: 2 },
            { label: "d", prompt: "A water bottle is a cylinder of radius $3.5\\ \\text{cm}$ and height $22\\ \\text{cm}$. Work out its capacity in millilitres, correct to the nearest millilitre. Use $1\\ \\text{cm}^3=1$ ml and $\\pi=3.14159$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume of cylinder coefficient", answer: 240 },
              { label: "(b) Volume of sculpture", answer: 887.6, tolerance: 0.1, unit: "cm³" },
              { label: "(c) Volume of prism", answer: 311.77, tolerance: 0.01, unit: "cm³" },
              { label: "(d) Capacity", answer: 847, tolerance: 1, unit: "ml" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V=\\pi r^2h$" },
              { kind: "formula", name: "Volume of a hemisphere", statement: "$V=\\frac23\\pi r^3$" },
              { kind: "formula", name: "Volume of a prism", statement: "Volume $=$ cross-section area $\\times$ length." },
              { kind: "principle", name: "Unit conversion", statement: "$1\\ \\text{cm}^3=1$ ml." },
            ],
            steps: [
              { part: "a", reasoning: "Cylinder volume: $\\pi\\times4^2\\times15$.", working: "240\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the coefficient.", working: "240", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hemisphere volume: $\\frac23\\pi\\times4^3=\\frac{128}{3}\\pi\\approx42.67\\pi$.", working: "\\frac23\\pi\\times64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add to the cylinder: total $=\\left(240+\\frac{128}{3}\\right)\\pi=\\frac{848}{3}\\pi\\approx887.6$ cm$^3$.", working: "\\frac{848}{3}\\pi\\approx887.6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cross-section area $=\\frac{\\sqrt3}{4}\\times6^2=9\\sqrt3\\approx15.59$ cm$^2$.", working: "9\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by the length 20: $180\\sqrt3\\approx311.77$ cm$^3$.", working: "180\\sqrt3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Volume $=\\pi\\times3.5^2\\times22=\\pi\\times269.5\\approx846.6$ cm$^3$.", working: "269.5\\pi", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert cm$^3$ to ml (1 cm$^3$ = 1 ml) and round.", working: "846.6\\to847", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the capacity.", working: "847\\text{ ml}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $240\\pi\\ \\text{cm}^3$ (b) $\\left(240+\\frac{128}{3}\\right)\\pi\\approx888\\ \\text{cm}^3$ (c) $180\\sqrt3\\approx312\\ \\text{cm}^3$ (d) about $847$ ml",
            commonErrors: ["In (b) using the full sphere volume $\\frac43\\pi r^3$ instead of the hemisphere $\\frac23\\pi r^3$."],
            examinerNote: "In (b) accept 887.6 or 888. In (d) accept 846 or 847.",
          },
        },
      ],
    },
  ],
};
