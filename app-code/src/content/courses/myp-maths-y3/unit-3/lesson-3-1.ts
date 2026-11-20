import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypm3-u3-lesson-3-1",
  code: "3-1",
  title: "Pythagoras and Right-Angled Trigonometry",
  goal: "I CAN use Pythagoras' theorem and the sine, cosine and tangent ratios to find missing sides and angles.",
  standards: [
    "MYP Maths: Geometry and trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Pythagoras' theorem", definition: "In a right-angled triangle, $a^2+b^2=c^2$ where $c$ is the hypotenuse." },
    { term: "Hypotenuse", definition: "The side opposite the right angle; always the longest side." },
    { term: "Sine ratio", definition: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
    { term: "Cosine ratio", definition: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
    { term: "Tangent ratio", definition: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
    { term: "Surd", definition: "An exact form like $\\sqrt{5}$ left in root form rather than approximated." },
  ],
  concepts: [
    {
      id: "mypm3-u3-pythagoras",
      title: "Pythagoras' theorem",
      skill: "Use Pythagoras' theorem to find missing sides in 2D and 3D problems, giving exact surd answers where appropriate.",
      lesson: {
        sections: [
          {
            heading: "The theorem",
            body: `In any right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides:

$$a^2+b^2=c^2$$

where $c$ is always the hypotenuse (the side opposite the right angle).`,
          },
          {
            heading: "Finding the hypotenuse",
            body: `Add the squares of the two shorter sides and square-root the result:

$c=\\sqrt{a^2+b^2}=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.`,
          },
          {
            heading: "Finding a shorter side",
            body: `Subtract the square of the known side from the square of the hypotenuse:

$a=\\sqrt{c^2-b^2}$. For $c=13$, $b=5$: $a=\\sqrt{169-25}=\\sqrt{144}=12$.`,
          },
          {
            heading: "3D problems",
            body: "In 3D, find a diagonal of a face first, then use it with the third dimension. For a cuboid of dimensions $a\\times b\\times c$, the space diagonal is $\\sqrt{a^2+b^2+c^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$" },
          { name: "Space diagonal of cuboid", statement: "$d=\\sqrt{a^2+b^2+c^2}$" },
        ],
        workedExample: {
          problem: "A ladder 5 m long leans against a wall. The foot of the ladder is 1.4 m from the wall. How high up the wall does the ladder reach?",
          solution: "The ladder, wall and ground form a right-angled triangle. Height $=\\sqrt{5^2-1.4^2}=\\sqrt{25-1.96}=\\sqrt{23.04}=4.8$ m.",
        },
      },
      questions: [
        {
          id: "mypm3-u3-pythagoras-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right-angled triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 cm" },
              { id: "b", text: "12 cm" },
              { id: "c", text: "14 cm" },
              { id: "d", text: "48 cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$" },
            ],
            steps: [
              { reasoning: "Add squares and square-root.", working: "c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 10 cm",
            commonErrors: ["Adding the lengths instead of the squares: $6+8=14$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the length of the missing side of a right-angled triangle where the hypotenuse is 13 cm and one leg is 5 cm. Give your answer as an exact value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$" },
            ],
            steps: [
              { reasoning: "Subtract the square of the known leg from the square of the hypotenuse.", working: "a=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the square root.", working: "a=12\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ cm",
            commonErrors: ["Adding instead of subtracting: $\\sqrt{169+25}$.", "Forgetting to square-root the result."],
            examinerNote: "M1 for correct rearrangement, A1 for 12.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular box has dimensions 3 cm by 4 cm by 12 cm. Find the exact length of the space diagonal of the box.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in 3D", statement: "Space diagonal $=\\sqrt{a^2+b^2+c^2}$" },
            ],
            steps: [
              { reasoning: "Apply the 3D Pythagoras formula.", working: "d=\\sqrt{3^2+4^2+12^2}=\\sqrt{9+16+144}", marks: 1, markCode: "M" },
              { reasoning: "Simplify inside the root.", working: "\\sqrt{169}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d=13\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ cm",
            commonErrors: ["Using only two dimensions.", "Forgetting to square-root."],
            examinerNote: "M1 for formula, M1 for $\\sqrt{169}$, A1 for 13.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A right-angled triangle has hypotenuse 10 cm and one leg 6 cm.",
          parts: [
            { label: "a", prompt: "Find the length of the other leg, giving an exact value.", marks: 2 },
            { label: "b", prompt: "Find the area of the triangle.", marks: 2 },
            { label: "c", prompt: "A second triangle has legs 5 cm and 12 cm. Find its hypotenuse and state whether it is similar to the first triangle.", marks: 2 },
            { label: "d", prompt: "Explain why the two triangles are or are not similar, using the side lengths.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$" },
              { kind: "principle", name: "Similar triangles", statement: "Triangles are similar if corresponding sides are in the same ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract squares.", working: "a=\\sqrt{10^2-6^2}=\\sqrt{100-36}=\\sqrt{64}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "a=8\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area of right-angled triangle is half the product of the legs.", working: "\\frac{1}{2}\\times6\\times8=24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", working: "24\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the hypotenuse of the second triangle.", working: "c=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare side ratios: $6:8:10=3:4:5$ and $5:12:13$ are different triples, so not similar.", working: "5:12:13\\ne3:4:5", marks: 1, markCode: "R" },
              { part: "d", reasoning: "For similarity, all three side ratios must match; they do not.", working: "\\frac{6}{5}\\ne\\frac{8}{12}\\ne\\frac{10}{13}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude.", working: "\\text{not similar}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $8$ cm (b) $24\\text{ cm}^2$ (c) hypotenuse $13$ cm; not similar (d) side ratios $3:4:5$ vs $5:12:13$ differ",
            commonErrors: ["In (b), using the hypotenuse as a base.", "In (c), assuming all right-angled triangles are similar."],
            examinerNote: "M1 A1 per part; R1 for similarity reasoning.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right-angled triangle has legs 5 cm and 12 cm. What is the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$ cm" },
              { id: "b", text: "$17$ cm" },
              { id: "c", text: "$7$ cm" },
              { id: "d", text: "$60$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ where $c$ is the hypotenuse." },
            ],
            steps: [
              { reasoning: "$c=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$.", working: "13 cm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $13$ cm",
            commonErrors: ["Adding the legs to get 17."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right-angled triangle has legs 8 cm and 15 cm. What is the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$ cm" },
              { id: "b", text: "$23$ cm" },
              { id: "c", text: "$11$ cm" },
              { id: "d", text: "$120$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$." },
            ],
            steps: [
              { reasoning: "$c=\\sqrt{64+225}=\\sqrt{289}=17$.", working: "17 cm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $17$ cm",
            commonErrors: ["Adding squares incorrectly or forgetting the square root."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A right-angled triangle has hypotenuse 10 cm and one leg 6 cm. Find the other leg.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ cm" },
              { id: "b", text: "$4$ cm" },
              { id: "c", text: "$16$ cm" },
              { id: "d", text: "$\\sqrt{136}$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a=\\sqrt{c^2-b^2}$ when finding a shorter side." },
            ],
            steps: [
              { reasoning: "$a=\\sqrt{100-36}=\\sqrt{64}=8$.", working: "8 cm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8$ cm",
            commonErrors: ["Adding the squares instead of subtracting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the space diagonal of a cuboid measuring 2 cm by 3 cm by 6 cm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$ cm" },
              { id: "b", text: "$11$ cm" },
              { id: "c", text: "$\\sqrt{41}$ cm" },
              { id: "d", text: "$36$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in 3D", statement: "Space diagonal $=\\sqrt{a^2+b^2+c^2}$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{4+9+36}=\\sqrt{49}=7$.", working: "7 cm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $7$ cm",
            commonErrors: ["Using only two dimensions."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the hypotenuse of a right-angled triangle with legs 7 cm and 24 cm.",
          response: { type: "numeric", parts: [{ label: "Hypotenuse", answer: 25, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$c=\\sqrt{a^2+b^2}$." },
            ],
            steps: [
              { reasoning: "Add the squares.", working: "\\sqrt{49+576}=\\sqrt{625}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the root.", working: "25 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$ cm",
            commonErrors: ["Adding 7 and 24 to get 31."],
            examinerNote: "M1 for $\\sqrt{625}$, A1 for 25.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing leg of a right-angled triangle with hypotenuse 17 cm and one leg 8 cm.",
          response: { type: "numeric", parts: [{ label: "Missing leg", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a=\\sqrt{c^2-b^2}$." },
            ],
            steps: [
              { reasoning: "Subtract squares: $\\sqrt{289-64}=\\sqrt{225}$.", working: "\\sqrt{225}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ cm",
            commonErrors: ["Adding the squares instead of subtracting."],
            examinerNote: "M1 for $\\sqrt{225}$, A1 for 15.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the space diagonal of a cuboid measuring 1 cm by 2 cm by 2 cm.",
          response: { type: "numeric", parts: [{ label: "Space diagonal", answer: 3, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in 3D", statement: "$d=\\sqrt{a^2+b^2+c^2}$." },
            ],
            steps: [
              { reasoning: "Compute $\\sqrt{1+4+4}=\\sqrt{9}$.", working: "\\sqrt{9}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ cm",
            commonErrors: ["Forgetting one of the three dimensions."],
            examinerNote: "M1 for $\\sqrt{9}$, A1 for 3.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which set of lengths could be the sides of a right-angled triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9, 12, 15" },
              { id: "b", text: "4, 5, 6" },
              { id: "c", text: "7, 8, 10" },
              { id: "d", text: "5, 6, 9" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "Check whether the largest square equals the sum of the other two squares." },
            ],
            steps: [
              { reasoning: "For 9,12,15: $81+144=225=15^2$.", working: "225=225", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 9, 12, 15",
            commonErrors: ["Assuming any three lengths can form a right triangle."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ladder leans against a wall, with the wall and ground forming a right angle. Which length is the hypotenuse of the triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the ladder" },
              { id: "b", text: "the height on the wall" },
              { id: "c", text: "the distance from the wall" },
              { id: "d", text: "the sum of height and distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypotenuse", statement: "The side opposite the right angle." },
            ],
            steps: [
              { reasoning: "The ladder connects the wall to the ground opposite the right angle, so it is the hypotenuse.", working: "ladder is hypotenuse", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the ladder",
            commonErrors: ["Choosing the wall height as the hypotenuse."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 13 m ladder leans against a wall with its foot 5 m from the wall. How high up the wall does it reach?",
          response: { type: "numeric", parts: [{ label: "Height", answer: 12, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$h=\\sqrt{13^2-5^2}$." },
            ],
            steps: [
              { reasoning: "Height = $\\sqrt{169-25}=\\sqrt{144}$.", working: "\\sqrt{144}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12 m", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ m",
            commonErrors: ["Adding 13 and 5 instead of using squares."],
            examinerNote: "M1 for $\\sqrt{144}$, A1 for 12.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A box measures 2 cm by 3 cm by 6 cm. Find the space diagonal by first finding a face diagonal, explaining each Pythagoras step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in 3D", statement: "Use Pythagoras on a face, then again with the third dimension." },
            ],
            steps: [
              { reasoning: "Face diagonal of 2 by 3 face: $\\sqrt{4+9}=\\sqrt{13}$.", working: "\\sqrt{13} cm", marks: 1, markCode: "M" },
              { reasoning: "Use that diagonal with the 6 cm dimension: $d=\\sqrt{13+36}=\\sqrt{49}$.", working: "\\sqrt{49}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the space diagonal.", working: "7 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Space diagonal $=7$ cm.",
            commonErrors: ["Applying $\\sqrt{a^2+b^2+c^2}$ without showing the two-step reasoning."],
            examinerNote: "M1 for face diagonal, M1 for second step, A1 for 7.",
          },
        },
        {
          id: "mypm3-u3-pythagoras-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular garden is 6 m by 8 m. A straight path goes from one corner to the opposite corner. Find the length of the path and explain why Pythagoras applies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "The diagonal of a rectangle forms a right-angled triangle with two sides." },
            ],
            steps: [
              { reasoning: "The corner-to-corner path is the hypotenuse of a right triangle with legs 6 and 8.", working: "path is hypotenuse", marks: 1, markCode: "R" },
              { reasoning: "Compute $d=\\sqrt{6^2+8^2}=\\sqrt{100}$.", working: "\\sqrt{100}", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "10 m", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Path length $=10$ m.",
            commonErrors: ["Adding 6 and 8 to get 14 m."],
            examinerNote: "R1 for identifying hypotenuse, M1 for $\\sqrt{100}$, A1 for 10.",
          },
        },
      ],
    },
    {
      id: "mypm3-u3-trig-ratios",
      title: "Sine, cosine and tangent ratios",
      skill: "Use sin, cos and tan to find missing sides and angles in right-angled triangles.",
      lesson: {
        sections: [
          {
            heading: "The three ratios",
            body: `For a right-angled triangle with angle $\\theta$:

$$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}},\\quad \\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}},\\quad \\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$$

Label the sides relative to $\\theta$ first: opposite, adjacent, hypotenuse.`,
          },
          {
            heading: "Finding a side",
            body: "Choose the ratio that uses the known side and the unknown side. For a hypotenuse of 10 and angle $30^\\circ$, the opposite side is $10\\sin30^\\circ=5$.",
          },
          {
            heading: "Finding an angle",
            body: "Use the **inverse** ratio on a calculator: $\\theta=\\sin^{-1}\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right)$, etc. For opposite 3 and adjacent 4: $\\theta=\\tan^{-1}\\left(\\frac{3}{4}\\right)=36.9^\\circ$.",
          },
        ],
        keyFormulas: [
          { name: "Trigonometric ratios", statement: "$\\sin\\theta=\\frac{opp}{hyp}$, $\\cos\\theta=\\frac{adj}{hyp}$, $\\tan\\theta=\\frac{opp}{adj}$" },
          { name: "Inverse ratios", statement: "$\\theta=\\sin^{-1}(\\frac{opp}{hyp})$ etc." },
        ],
        workedExample: {
          problem: "In a right-angled triangle, the angle is $40^\\circ$ and the adjacent side is 8 cm. Find the hypotenuse.",
          solution: "$\\cos40^\\circ=\\frac{8}{hyp}$, so $hyp=\\frac{8}{\\cos40^\\circ}=\\frac{8}{0.766}=10.4$ cm.",
        },
      },
      questions: [
        {
          id: "mypm3-u3-trig-ratios-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right-angled triangle, $\\sin\\theta=\\frac{3}{5}$. What is $\\cos\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{5}$" },
              { id: "b", text: "$\\frac{4}{5}$" },
              { id: "c", text: "$\\frac{5}{4}$" },
              { id: "d", text: "$\\frac{5}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$" },
            ],
            steps: [
              { reasoning: "If $\\sin\\theta=\\frac{3}{5}$, the sides are 3-4-5, so $\\cos\\theta=\\frac{4}{5}$.", working: "\\cos\\theta=\\frac{4}{5}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{4}{5}$",
            commonErrors: ["Thinking $\\cos\\theta=\\frac{1}{\\sin\\theta}=\\frac{5}{3}$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is 12 cm and one angle is $35^\\circ$. Find the length of the side opposite the angle, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Opposite side", answer: 6.88, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{opp}{hyp}$" },
            ],
            steps: [
              { reasoning: "Use sine: $opp=hyp\\times\\sin\\theta$.", working: "opp=12\\sin35^\\circ=12\\times0.5736", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "opp=6.88\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.88$ cm",
            commonErrors: ["Using cosine instead of sine.", "Dividing by $\\sin35^\\circ$ instead of multiplying."],
            examinerNote: "M1 for correct ratio and substitution, A1 for 6.88.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a right-angled triangle, the adjacent side is 7 cm and the opposite side is 5 cm relative to angle $\\theta$. Find $\\theta$ to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "$\\theta$", answer: 35.5, tolerance: 0.1, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{opp}{adj}$" },
              { kind: "formula", name: "Inverse tangent", statement: "$\\theta=\\tan^{-1}(\\frac{opp}{adj})$" },
            ],
            steps: [
              { reasoning: "Use tangent: $\\tan\\theta=\\frac{5}{7}$.", working: "\\tan\\theta=\\frac{5}{7}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(\\frac{5}{7})=35.537^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Round to 1 d.p.", working: "\\theta=35.5^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=35.5^\\circ$",
            commonErrors: ["Using sine or cosine with sides that are not hypotenuse-related.", "Forgetting the inverse function."],
            examinerNote: "M1 for correct ratio, M1 for inverse, A1 for 35.5.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ramp is 6 m long and makes an angle of $12^\\circ$ with the horizontal ground.",
          parts: [
            { label: "a", prompt: "Find the vertical height of the top of the ramp above the ground, to 3 s.f.", marks: 2 },
            { label: "b", prompt: "Find the horizontal distance from the bottom of the ramp to the point directly below the top, to 3 s.f.", marks: 2 },
            { label: "c", prompt: "A second ramp is 8 m long and makes an angle of $15^\\circ$ with the horizontal. Find its vertical height and compare it with the first ramp.", marks: 2 },
            { label: "d", prompt: "Explain why the second ramp, despite being longer, might be safer for wheelchair users.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) Height", answer: 1.25, tolerance: 0.01, unit: "m" }, { label: "(b) Horizontal distance", answer: 5.87, tolerance: 0.01, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine and cosine ratios", statement: "$\\sin\\theta=\\frac{opp}{hyp}$, $\\cos\\theta=\\frac{adj}{hyp}$" },
              { kind: "principle", name: "Real-world trigonometry", statement: "Model the situation as a right-angled triangle and choose the correct ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Height is opposite the angle: $h=6\\sin12^\\circ$.", working: "h=6\\times0.2079=1.25\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State to 3 s.f.", working: "1.25\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Horizontal distance is adjacent: $d=6\\cos12^\\circ$.", working: "d=6\\times0.9781=5.87\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State to 3 s.f.", working: "5.87\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Height of second ramp: $8\\sin15^\\circ=8\\times0.2588=2.07$ m.", working: "h_2=2.07\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare: $2.07>1.25$, so the second ramp is higher despite being longer.", working: "2.07\\text{ m}>1.25\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A gentler gradient (smaller angle) means less steep slope, which is easier for wheelchairs despite the ramp being longer.", working: "\\text{smaller angle}\\Rightarrow\\text{gentler slope}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude with the accessibility reasoning.", working: "\\text{safer/more accessible}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1.25$ m (b) $5.87$ m (c) second ramp height $2.07$ m, greater than first (d) gentler gradient makes it easier for wheelchair users",
            commonErrors: ["Using sine for the horizontal distance instead of cosine.", "Comparing ramp lengths rather than gradients/angles."],
            examinerNote: "M1 A1 per calculation, R1 R1 for the accessibility reasoning.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the exact value of $\\sin 30^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{\\sqrt{3}}{2}$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\frac{1}{\\sqrt{3}}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{opp}{hyp}$; for 30-60-90 the opposite is half the hypotenuse." },
            ],
            steps: [
              { reasoning: "In a 30-60-90 triangle, the side opposite 30° is half the hypotenuse.", working: "\\sin30^\\circ=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{2}$",
            commonErrors: ["Confusing sine and cosine for 30°."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the exact value of $\\cos 60^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{3}}{2}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine ratio", statement: "$\\cos\\theta=\\frac{adj}{hyp}$; for 60° the adjacent side is half the hypotenuse." },
            ],
            steps: [
              { reasoning: "The adjacent side to 60° is half the hypotenuse.", working: "\\cos60^\\circ=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Swapping sine and cosine values."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the exact value of $\\tan 45^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$\\frac{1}{\\sqrt{3}}$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\sqrt{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{opp}{adj}$; at 45° opposite and adjacent are equal." },
            ],
            steps: [
              { reasoning: "Opposite equals adjacent, so the ratio is 1.", working: "\\tan45^\\circ=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1$",
            commonErrors: ["Using sine or cosine instead of tangent."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For angle $\\theta$, which ratio is $\\frac{\\text{opposite}}{\\text{adjacent}}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sin\\theta$" },
              { id: "b", text: "$\\cos\\theta$" },
              { id: "c", text: "$\\tan\\theta$" },
              { id: "d", text: "$\\cot\\theta$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{opp}{adj}$." },
            ],
            steps: [
              { reasoning: "Opposite over adjacent defines tangent.", working: "\\tan\\theta", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\tan\\theta$",
            commonErrors: ["Choosing sine, which uses the hypotenuse."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a right-angled triangle, which side is always called the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the side opposite the right angle" },
              { id: "b", text: "the shortest side" },
              { id: "c", text: "the side adjacent to angle $\\theta$" },
              { id: "d", text: "the side opposite angle $\\theta$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypotenuse", statement: "The side opposite the right angle; always the longest side." },
            ],
            steps: [
              { reasoning: "The hypotenuse is opposite the 90° angle.", working: "opposite right angle", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the side opposite the right angle",
            commonErrors: ["Confusing hypotenuse with the side opposite $\\theta$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is 10 cm and an angle is $30^\\circ$. Find the side opposite the angle.",
          response: { type: "numeric", parts: [{ label: "Opposite side", answer: 5, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{opp}{hyp}$, so $opp=hyp\\sin\\theta$." },
            ],
            steps: [
              { reasoning: "Use sine: $opp=10\\sin30^\\circ$.", working: "10 \\times \\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ cm",
            commonErrors: ["Using cosine for the opposite side."],
            examinerNote: "M1 for sine substitution, A1 for 5.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is 12 cm and an angle is $60^\\circ$. Find the side adjacent to the angle.",
          response: { type: "numeric", parts: [{ label: "Adjacent side", answer: 6, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine ratio", statement: "$\\cos\\theta=\\frac{adj}{hyp}$, so $adj=hyp\\cos\\theta$." },
            ],
            steps: [
              { reasoning: "Use cosine: $adj=12\\cos60^\\circ$.", working: "12 \\times \\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "6 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ cm",
            commonErrors: ["Using sine instead of cosine for the adjacent side."],
            examinerNote: "M1 for cosine substitution, A1 for 6.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a right-angled triangle, the side opposite $\\theta$ is 5 cm and the adjacent side is 12 cm. Find $\\theta$ to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "$\\theta$", answer: 22.6, tolerance: 0.1, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{opp}{adj}$ and $\\theta=\\tan^{-1}(\\frac{opp}{adj})$." },
            ],
            steps: [
              { reasoning: "$\\tan\\theta=\\frac{5}{12}$, so $\\theta=\\tan^{-1}(5/12)\\approx22.62^\\circ$.", working: "22.6^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Round to 1 decimal place.", working: "22.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=22.6^\\circ$",
            commonErrors: ["Using sine or cosine when opposite and adjacent are known."],
            examinerNote: "M1 for inverse tangent, A1 for 22.6.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a right-angled triangle, the adjacent side to angle $\\theta$ is 8 cm and $\\theta=40^\\circ$. Find the hypotenuse to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Hypotenuse", answer: 10.4, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine ratio", statement: "$\\cos\\theta=\\frac{adj}{hyp}$, so $hyp=\\frac{adj}{\\cos\\theta}$." },
            ],
            steps: [
              { reasoning: "$hyp=\\frac{8}{\\cos40^\\circ}=\\frac{8}{0.766}\\approx10.44$.", working: "10.4 cm", marks: 1, markCode: "M" },
              { reasoning: "Round to 3 s.f.", working: "10.4 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10.4$ cm",
            commonErrors: ["Multiplying by cosine instead of dividing."],
            examinerNote: "M1 for rearrangement, A1 for 10.4.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is 15 cm and an angle is $35^\\circ$. Find the opposite and adjacent sides to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Opposite", answer: 8.6, tolerance: 0.01, unit: "cm" }, { label: "Adjacent", answer: 12.3, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine and cosine ratios", statement: "$opp=hyp\\sin\\theta$ and $adj=hyp\\cos\\theta$." },
            ],
            steps: [
              { reasoning: "Opposite: $15\\sin35^\\circ\\approx8.60$; adjacent: $15\\cos35^\\circ\\approx12.29$.", working: "8.60 and 12.3 cm", marks: 1, markCode: "M" },
              { reasoning: "State both to 3 s.f.", working: "8.60 cm, 12.3 cm", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opposite $8.60$ cm; adjacent $12.3$ cm",
            commonErrors: ["Swapping sine and cosine."],
            examinerNote: "M1 for both calculations, A1 for rounded values.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to choose between sine, cosine and tangent when solving a right-angled triangle, using the labels opposite, adjacent and hypotenuse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometric ratios", statement: "$\\sin\\theta=\\frac{opp}{hyp}$, $\\cos\\theta=\\frac{adj}{hyp}$, $\\tan\\theta=\\frac{opp}{adj}$." },
            ],
            steps: [
              { reasoning: "Label the sides relative to the angle first.", working: "opp, adj, hyp", marks: 1, markCode: "R" },
              { reasoning: "Choose the ratio containing the known side and the unknown side.", working: "match known and unknown", marks: 1, markCode: "M" },
              { reasoning: "Use the inverse ratio when the angle is unknown.", working: "\\theta=\\tan^{-1}(\\frac{opp}{adj}) etc.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Label sides, choose the ratio with the known and unknown sides, and use inverse ratios for angles.",
            commonErrors: ["Using a ratio that does not include the hypotenuse when sine or cosine is needed."],
            examinerNote: "R1 for labelling, M1 for selection, A1 for inverse idea.",
          },
        },
        {
          id: "mypm3-u3-trig-ratios-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ramp A is 10 m long at $10^\\circ$ to the horizontal. Ramp B is 12 m long at $8^\\circ$. Find each ramp's vertical height and comment on which has the gentler gradient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$h=hyp\\sin\\theta$ for the vertical height." },
              { kind: "principle", name: "Gradient", statement: "A smaller angle gives a gentler slope." },
            ],
            steps: [
              { reasoning: "Height A: $10\\sin10^\\circ\\approx1.74$ m.", working: "1.74 m", marks: 1, markCode: "M" },
              { reasoning: "Height B: $12\\sin8^\\circ\\approx1.67$ m.", working: "1.67 m", marks: 1, markCode: "M" },
              { reasoning: "Ramp B has the smaller angle, so it is gentler even though it is longer.", working: "8^\\circ<10^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A $\\approx1.74$ m, B $\\approx1.67$ m; Ramp B is gentler.",
            commonErrors: ["Comparing lengths instead of angles."],
            examinerNote: "M1 for each height, R1 for gradient comment.",
          },
        },
      ],
    },
  ],
};
