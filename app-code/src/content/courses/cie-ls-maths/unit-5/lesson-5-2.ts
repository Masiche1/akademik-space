import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cilm-u5-lesson-5-2",
  code: "5-2",
  title: "Triangles and polygons",
  goal: "I CAN classify triangles, find missing angles using the angle sum, and identify polygon properties.",
  standards: ["0862 Geometry: triangles and polygons"],
  vocabulary: [
    { term: "Equilateral triangle", definition: "All three sides equal and all angles $60°$." },
    { term: "Isosceles triangle", definition: "Two equal sides and two equal base angles." },
    { term: "Scalene triangle", definition: "All sides and angles different." },
    { term: "Right-angled triangle", definition: "One angle is exactly $90°$ (Pythagoras applies)." },
    { term: "Angle sum", definition: "The interior angles of any triangle sum to $180°$." },
    { term: "Regular polygon", definition: "All sides equal and all interior angles equal." },
  ],
  concepts: [
    {
      id: "cilm-u5-triangles",
      title: "Triangle types and angle sum",
      skill: "Classify triangles and find missing angles using the $180°$ angle sum.",
      lesson: {
        sections: [
          {
            heading: "Triangle classification",
            body: "- **By sides**: equilateral (all equal), isosceles (two equal), scalene (all different)\n- **By angles**: acute (all $<90°$), right (one $=90°$), obtuse (one $>90°$)",
          },
          {
            heading: "Angle sum = 180°",
            body: "Every triangle's interior angles sum to $180°$. If two angles are known, find the third:\n\n$50° + 60° + x = 180°$ → $x = 70°$",
          },
          {
            heading: "Isosceles angles",
            body: "In an isosceles triangle, the two base angles are equal. If the vertex angle is $40°$: base angles $= \\frac{180-40}{2} = 70°$ each.",
          },
        ],
        keyFormulas: [
          { name: "Triangle sum", statement: "Interior angles sum to $180°$ — always." },
          { name: "Isosceles", statement: "Two base angles equal; vertex angle $+$ $2 \\times$ base $= 180°$." },
        ],
        workedExample: {
          problem: "A triangle has angles $45°$ and $55°$. Find the third angle and classify the triangle.",
          solution: "$x = 180 - 45 - 55 = 80°$. All angles acute → acute-angled triangle.",
        },
      },
      questions: [
        {
          id: "cilm-u5-tri-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has angles $60°, 60°, 60°$. What type is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilateral" },
              { id: "b", text: "Isosceles" },
              { id: "c", text: "Scalene" },
              { id: "d", text: "Right-angled" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilateral", statement: "All angles equal $60°$ → all sides equal." },
            ],
            steps: [
              { reasoning: "All three angles $60°$ → equilateral triangle.", working: "60=60=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Equilateral",
            commonErrors: ["Choosing (b) — isosceles has only TWO equal angles."],
          },
        },
        {
          id: "cilm-u5-tri-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle has angles $35°$ and $95°$. Find the third angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle sum", statement: "$x = 180 - 35 - 95 = 50°$." },
            ],
            steps: [
              { reasoning: "$x = 180 - 130 = 50°$.", working: "180-130=50", marks: 1, markCode: "M" },
              { reasoning: "$x = 50°$ — acute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50°$",
            commonErrors: ["$180 + 35 + 95$ — subtract known angles from $180°$."],
          },
        },
        {
          id: "cilm-u5-tri-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isosceles triangle has a vertex angle of $30°$. Find the two base angles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isosceles angles", statement: "Base angles equal: each $= \\frac{180-30}{2}=75°$." },
            ],
            steps: [
              { reasoning: "Base angles equal each other.", working: "\\text{equal}", marks: 1, markCode: "M" },
              { reasoning: "$2b + 30 = 180$ → $2b = 150$ → $b = 75°$.", working: "b=75°", marks: 1, markCode: "M" },
              { reasoning: "Each base angle $=75°$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $75+75+30=180$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75°$ each",
            commonErrors: ["$150°$ each — forgetting to divide by 2."],
          },
        },
        {
          id: "cilm-u5-tri-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A triangular garden has angles in the ratio $2:3:4$.",
          parts: [
            { label: "a", prompt: "Find the three angles.", marks: 3 },
            { label: "b", prompt: "Classify the triangle by its angles.", marks: 2 },
            { label: "c", prompt: "If the garden needs fencing and two sides are equal, which sides are equal?", marks: 2 },
            { label: "d", prompt: "Explain why a triangle can't have two angles of $100°$ each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio angles", statement: "Angles sum to $180°$; ratio parts scale the total." },
            ],
            steps: [
              { part: "a", reasoning: "Total parts $=9$; each part $=180\\div9=20°$.", working: "20°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Angles: $40°, 60°, 80°$.", working: "40,60,80", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check: $40+60+80=180$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All angles $<90°$ — acute-angled triangle.", working: "\\text{acute}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct classification.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Isosceles requires two equal angles — none are equal, so no equal sides by angle rule; however if two sides equal then opposite angles equal — none equal, so it's scalene.", working: "\\text{scalene}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoning about equal angles→equal sides.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$200°$ already exceeds $180°$ — impossible; third angle would be $-20°$.", working: "200>180", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40°, 60°, 80°$ (b) acute (c) scalene — no equal angles means no equal sides (d) $200°>180°$ impossible",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Angles correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Classification correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Side reasoning.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Impossible explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) using $2+3+4=9$ parts but forgetting angles sum to $180°$, not 9."],
          },
        },
      ],
    },
    {
      id: "cilm-u5-polygons",
      title: "Polygons and their angles",
      skill: "Identify regular polygons, find interior and exterior angles, and use angle sums.",
      lesson: {
        sections: [
          {
            heading: "Polygon angle sums",
            body: "- Interior angles sum: $(n-2) \\times 180°$ where $n$ = number of sides\n- Exterior angles sum: always $360°$\n- Regular polygon: interior angle $= \\frac{(n-2)\\times180}{n}$; exterior $= \\frac{360}{n}$",
          },
          {
            heading: "Examples",
            body: "- Pentagon ($n=5$): interior sum $=540°$; regular interior $=108°$; exterior $=72°$\n- Hexagon ($n=6$): interior sum $=720°$; regular interior $=120°$; exterior $=60°$\n- Octagon ($n=8$): interior sum $=1080°$; regular interior $=135°$; exterior $=45°$",
          },
          {
            heading: "Interior + exterior",
            body: "At each vertex, interior + exterior = $180°$ (they form a straight line). For a regular polygon: $\\frac{(n-2)180}{n} + \\frac{360}{n} = 180$ ✓.",
          },
        ],
        keyFormulas: [
          { name: "Interior sum", statement: "$(n-2) \\times 180°$" },
          { name: "Exterior angle", statement: "Regular polygon: $\\frac{360°}{n}$" },
          { name: "Interior angle", statement: "Regular polygon: $180° - \\frac{360°}{n}$" },
        ],
        workedExample: {
          problem: "Find the interior angle of a regular pentagon.",
          solution: "Exterior $=360\\div5=72°$; interior $=180-72=108°$. Or directly: $\\frac{(5-2)\\times180}{5}=108°$.",
        },
      },
      questions: [
        {
          id: "cilm-u5-poly-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of interior angles of a hexagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$540°$" },
              { id: "b", text: "$720°$" },
              { id: "c", text: "$900°$" },
              { id: "d", text: "$360°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polygon sum", statement: "$(6-2)\\times180=720°$." },
            ],
            steps: [
              { reasoning: "$(n-2)\\times180 = 4\\times180 = 720°$.", working: "4\\times180=720", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $720°$",
            commonErrors: ["Choosing (a) — that's pentagon ($5-2=3\\times180=540$)."],
          },
        },
        {
          id: "cilm-u5-poly-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the exterior angle of a regular octagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exterior angle", statement: "$360\\div8=45°$." },
            ],
            steps: [
              { reasoning: "Exterior angle $=360\\div n = 360\\div8 = 45°$.", working: "360\\div8=45", marks: 1, markCode: "M" },
              { reasoning: "$45°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45°$",
            commonErrors: ["Using interior formula — exterior is simpler: $360/n$."],
          },
        },
        {
          id: "cilm-u5-poly-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Each exterior angle of a regular polygon is $24°$. How many sides does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse polygon", statement: "$n = 360\\div\\text{exterior angle} = 360\\div24 = 15$." },
            ],
            steps: [
              { reasoning: "$n = 360 \\div 24 = 15$.", working: "360\\div24=15", marks: 1, markCode: "M" },
              { reasoning: "$n = 15$ sides.", marks: 1, markCode: "M" },
              { reasoning: "Check: $360\\div15=24°$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "15-sided polygon (pentadecagon).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ sides",
            commonErrors: ["$360\\times24$ — divide, not multiply."],
          },
        },
        {
          id: "cilm-u5-poly-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A regular polygon has interior angles of $156°$.",
          parts: [
            { label: "a", prompt: "Find the exterior angle.", marks: 2 },
            { label: "b", prompt: "Find the number of sides.", marks: 2 },
            { label: "c", prompt: "Verify using the interior angle formula.", marks: 3 },
            { label: "d", prompt: "Name the polygon.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polygon calculations", statement: "Interior + exterior = 180°; exterior = 360/n." },
            ],
            steps: [
              { part: "a", reasoning: "Exterior $=180-156=24°$.", working: "24°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$n=360\\div24=15$.", working: "n=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interior $=180-\\frac{360}{15}=180-24=156°$ ✓.", working: "180-24=156", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verification correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Consistent.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$15$ sides = pentadecagon (or 15-gon).", working: "15-gon", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct name.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $24°$ (b) $15$ sides (c) $180-24=156°$ ✓ (d) pentadecagon",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Exterior correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Sides correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Verified.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Named.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) subtracting from $360°$ instead of $180°$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u5-shapes-notes",
      title: "Triangles and polygons — revision notes",
      summary: "Triangle classification, 180° sum, polygon angle formulas.",
      sections: [
        {
          heading: "Triangles",
          body: "Angles sum to $180°$. Equilateral $=60°$ each; isosceles has equal base angles; scalene all different. Classify by sides AND angles.",
        },
        {
          heading: "Polygons",
          body: "Interior sum $=(n-2)\\times180°$. Regular exterior $=360/n$. Interior $=180-$ exterior. Find $n$ from exterior: $n=360/$ext.",
        },
      ],
    },
  ],
};
