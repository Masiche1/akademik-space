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
              { id: "a", text: "Scalene" },
              { id: "b", text: "Equilateral" },
              { id: "c", text: "Right-angled" },
              { id: "d", text: "Isosceles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilateral", statement: "All angles equal $60°$ → all sides equal." },
            ],
            steps: [
              { reasoning: "All three angles $60°$ → equilateral triangle.", working: "60=60=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Equilateral",
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
        {
          id: "cilm-u5-tri-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle with all three sides of different lengths is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilateral" },
              { id: "b", text: "Regular" },
              { id: "c", text: "Isosceles" },
              { id: "d", text: "Scalene" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triangle types", statement: "Scalene: all sides (and angles) different." },
            ],
            steps: [
              { reasoning: "All sides different → scalene.", working: "scalene", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Scalene",
            commonErrors: ["Choosing (b) — isosceles has two equal sides."],
          },
        },
        {
          id: "cilm-u5-tri-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A triangle has angles $48°$ and $67°$. Find the third angle.",
          response: { type: "numeric", parts: [{ label: "third angle", answer: 65 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle sum", statement: "Angles sum to $180°$: $x = 180-115 = 65$." },
            ],
            steps: [
              { reasoning: "$x = 180-48-67 = 65°$.", working: "180-115=65", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$65°$",
            commonErrors: ["$180+48+67$ — subtract from $180°$."],
          },
        },
        {
          id: "cilm-u5-tri-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An isosceles triangle has a vertex angle of $100°$. Find each base angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isosceles angles", statement: "Base angles equal: $2b+100=180$ → $b=40$." },
            ],
            steps: [
              { reasoning: "$2b = 180-100 = 80$ → $b = 40°$.", working: "b=40", marks: 1, markCode: "M" },
              { reasoning: "Each base angle $=40°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40°$ each",
            commonErrors: ["$80°$ each — forgetting to divide by 2."],
          },
        },
        {
          id: "cilm-u5-tri-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A triangle containing one angle of exactly $90°$ is classified as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isosceles" },
              { id: "b", text: "Equilateral" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Right-angled" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triangle types", statement: "One $90°$ angle → right-angled triangle." },
            ],
            steps: [
              { reasoning: "One angle $=90°$ → right-angled.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Right-angled",
            commonErrors: ["Confusing angle classification with side classification."],
          },
        },
        {
          id: "cilm-u5-tri-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has angles $30°$, $60°$ and $x$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle sum", statement: "Angles sum to $180°$: $x = 180-90 = 90$." },
            ],
            steps: [
              { reasoning: "$x = 180-30-60 = 90°$.", working: "180-90=90", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$x = 90°$",
            commonErrors: ["Adding the known angles instead of subtracting from $180°$."],
          },
        },
        {
          id: "cilm-u5-tri-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The three angles of a triangle are $2x$, $3x$ and $4x$. Find the size of each angle and classify the triangle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio angles", statement: "$9x=180$ → $x=20$; angles $40°, 60°, 80°$; all acute." },
            ],
            steps: [
              { reasoning: "$2x+3x+4x=9x=180$ → $x=20$.", working: "9x=180", marks: 1, markCode: "M" },
              { reasoning: "Angles: $40°, 60°, 80°$.", working: "40,60,80", marks: 1, markCode: "M" },
              { reasoning: "All angles $<90°$ — acute-angled triangle.", working: "acute", marks: 1, markCode: "M" },
              { reasoning: "All values correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40°, 60°, 80°$ — acute-angled",
            commonErrors: ["Using $9x=360$ — triangle sum is $180°$, not $360°$."],
          },
        },
        {
          id: "cilm-u5-tri-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each interior angle of an equilateral triangle measures...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120°$" },
              { id: "b", text: "$45°$" },
              { id: "c", text: "$60°$" },
              { id: "d", text: "$90°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equilateral", statement: "All angles equal: $180\\div3=60°$." },
            ],
            steps: [
              { reasoning: "$180\\div3 = 60°$ each.", working: "60°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $60°$",
            commonErrors: ["Choosing (d) — that's a hexagon's interior angle."],
          },
        },
        {
          id: "cilm-u5-tri-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An isosceles triangle has base angles of $65°$. Find the vertex angle.",
          response: { type: "numeric", parts: [{ label: "vertex angle", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isosceles angles", statement: "Vertex $=180-2\\times65=50$." },
            ],
            steps: [
              { reasoning: "Vertex $= 180 - 65 - 65 = 50°$.", working: "180-130=50", marks: 1, markCode: "M" },
              { reasoning: "$50°$ — acute vertex, sensible for isosceles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50°$",
            commonErrors: ["$130°$ — that's the sum of the two base angles, not the vertex."],
          },
        },
        {
          id: "cilm-u5-tri-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A triangle has angles $50°$, $50°$ and $80°$. How is it best classified by its sides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilateral" },
              { id: "b", text: "Right-angled" },
              { id: "c", text: "Scalene" },
              { id: "d", text: "Isosceles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angles → sides", statement: "Two equal angles ($50°=50°$) mean two equal sides — isosceles." },
            ],
            steps: [
              { reasoning: "Two equal angles → two equal sides → isosceles.", working: "isosceles", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Isosceles",
            commonErrors: ["Choosing (c) — equal angles imply equal opposite sides."],
          },
        },
        {
          id: "cilm-u5-tri-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Isosceles triangle $ABC$ has $AB = AC$.",
          parts: [
            { label: "a", prompt: "If angle $A = 36°$, find each base angle.", marks: 2 },
            { label: "b", prompt: "If instead each base angle were $70°$, find angle $A$.", marks: 2 },
            { label: "c", prompt: "Explain why an equilateral triangle is also isosceles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isosceles angles", statement: "Base angles equal; vertex + 2 × base = $180°$." },
            ],
            steps: [
              { part: "a", reasoning: "Base angles $= (180-36)\\div2 = 72°$.", working: "72°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Angle $A = 180 - 2\\times70 = 40°$.", working: "40°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equilateral has all three sides equal, so it has (at least) two equal sides — meeting the isosceles condition.", working: "3=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $72°$ each (b) $40°$ (c) all sides equal → two equal sides satisfied",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (a) forgetting to divide by 2."],
          },
        },
        {
          id: "cilm-u5-tri-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The angles of a triangle are in the ratio $3:4:5$. What is the smallest angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30°$" },
              { id: "b", text: "$60°$" },
              { id: "c", text: "$45°$" },
              { id: "d", text: "$75°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio angles", statement: "$12$ parts $=180°$ → each part $15°$; smallest $3\\times15=45°$." },
            ],
            steps: [
              { reasoning: "$180\\div12 = 15$ per part; smallest $=3\\times15=45°$.", working: "3\\times15=45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $45°$",
            commonErrors: ["Choosing (a) — that's $2$ parts, not $3$."],
          },
        },
        {
          id: "cilm-u5-tri-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $PQR$, angles $P$ and $Q$ are equal and angle $R = 80°$. Find angles $P$ and $Q$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Isosceles angles", statement: "$2P + 80 = 180$ → $P = 50$." },
            ],
            steps: [
              { reasoning: "Equal angles $P$ and $Q$: $2P + 80 = 180$.", working: "2P+80=180", marks: 1, markCode: "M" },
              { reasoning: "$P = Q = 50°$.", working: "P=Q=50", marks: 1, markCode: "M" },
              { reasoning: "Both angles $=50°$; check $50+50+80=180$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Angles $P = Q = 50°$",
            commonErrors: ["$100°$ each — forgetting the factor of 2."],
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
              { id: "b", text: "$900°$" },
              { id: "c", text: "$720°$" },
              { id: "d", text: "$360°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polygon sum", statement: "$(6-2)\\times180=720°$." },
            ],
            steps: [
              { reasoning: "$(n-2)\\times180 = 4\\times180 = 720°$.", working: "4\\times180=720", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $720°$",
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
        {
          id: "cilm-u5-poly-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a pentagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$900°$" },
              { id: "b", text: "$540°$" },
              { id: "c", text: "$360°$" },
              { id: "d", text: "$720°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polygon sum", statement: "$(5-2)\\times180 = 540°$." },
            ],
            steps: [
              { reasoning: "$(n-2)\\times180 = 3\\times180 = 540°$.", working: "3\\times180=540", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $540°$",
            commonErrors: ["Choosing (c) — that's a hexagon."],
          },
        },
        {
          id: "cilm-u5-poly-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the interior angle of a regular hexagon.",
          response: { type: "numeric", parts: [{ label: "interior angle", answer: 120 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Regular polygon", statement: "Interior $=180-360\\div6=120°$." },
            ],
            steps: [
              { reasoning: "Exterior $=360\\div6=60°$; interior $=180-60=120°$.", working: "120°", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$120°$",
            commonErrors: ["Giving the exterior angle $60°$ instead of interior."],
          },
        },
        {
          id: "cilm-u5-poly-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the exterior angle of a regular pentagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exterior angle", statement: "Exterior $=360\\div5=72°$." },
            ],
            steps: [
              { reasoning: "Exterior angle $=360\\div n = 360\\div5 = 72°$.", working: "360\\div5=72", marks: 1, markCode: "M" },
              { reasoning: "$72°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72°$",
            commonErrors: ["$108°$ — that's the interior angle, not exterior."],
          },
        },
        {
          id: "cilm-u5-poly-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A regular polygon has an exterior angle of $30°$. How many sides does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse polygon", statement: "$n = 360\\div30 = 12$." },
            ],
            steps: [
              { reasoning: "$n = 360\\div30 = 12$ sides.", working: "360\\div30=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $12$ sides",
            commonErrors: ["$360\\times30$ — divide, not multiply."],
          },
        },
        {
          id: "cilm-u5-poly-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a quadrilateral?",
          response: { type: "numeric", parts: [{ label: "sum", answer: 360 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polygon sum", statement: "$(4-2)\\times180 = 360°$." },
            ],
            steps: [
              { reasoning: "$(4-2)\\times180 = 360°$.", working: "2\\times180=360", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$360°$",
            commonErrors: ["$540°$ — that's a pentagon."],
          },
        },
        {
          id: "cilm-u5-poly-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The interior angles of a quadrilateral are $80°$, $100°$, $110°$ and $x$. Find $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Quadrilateral sum", statement: "Interior angles sum to $360°$: $x = 360-290 = 70$." },
            ],
            steps: [
              { reasoning: "Known angles total $80+100+110=290°$.", working: "290", marks: 1, markCode: "M" },
              { reasoning: "$x = 360-290 = 70°$.", working: "360-290=70", marks: 1, markCode: "M" },
              { reasoning: "$x = 70°$ — all angles acute, convex quadrilateral possible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 70°$",
            commonErrors: ["Using $180°$ — that's a triangle's sum; quadrilateral is $360°$."],
          },
        },
        {
          id: "cilm-u5-poly-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At each vertex of any polygon, the interior angle and exterior angle together make...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on the polygon" },
              { id: "b", text: "$180°$" },
              { id: "c", text: "$360°$" },
              { id: "d", text: "$90°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Interior + exterior", statement: "They form a straight line: $180°$." },
            ],
            steps: [
              { reasoning: "Interior + exterior $=180°$ (straight line).", working: "180°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $180°$",
            commonErrors: ["Choosing (c) — $360°$ is the sum of all EXTERIOR angles, not one pair."],
          },
        },
        {
          id: "cilm-u5-poly-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regular polygon has interior angles of $140°$. Find the number of sides.",
          response: { type: "numeric", parts: [{ label: "number of sides", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse polygon", statement: "Exterior $=180-140=40$; $n=360\\div40=9$." },
            ],
            steps: [
              { reasoning: "Exterior $=180-140=40°$; $n = 360\\div40 = 9$.", working: "n=9", marks: 1, markCode: "M" },
              { reasoning: "$9$ sides — a nonagon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$ sides",
            commonErrors: ["$360\\div140$ — must convert to exterior angle first."],
          },
        },
        {
          id: "cilm-u5-poly-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A regular polygon has interior angles of $150°$. How many sides does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse polygon", statement: "Exterior $=30°$; $n=360\\div30=12$." },
            ],
            steps: [
              { reasoning: "Exterior $=180-150=30°$; $n=360\\div30=12$.", working: "n=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $12$ sides",
            commonErrors: ["Choosing (a) — that would need exterior $36°$."],
          },
        },
        {
          id: "cilm-u5-poly-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Each exterior angle of a regular polygon is $18°$.",
          parts: [
            { label: "a", prompt: "Find the number of sides.", marks: 2 },
            { label: "b", prompt: "Find the interior angle.", marks: 2 },
            { label: "c", prompt: "Find the sum of the interior angles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polygon calculations", statement: "$n=360/\\text{ext}$; interior $=180-$ ext; sum $=(n-2)\\times180$." },
            ],
            steps: [
              { part: "a", reasoning: "$n = 360\\div18 = 20$ sides.", working: "n=20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interior $=180-18=162°$.", working: "162°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum $=(20-2)\\times180 = 3240°$.", working: "18\\times180=3240", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ sides (b) $162°$ (c) $3240°$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (c) using $20\\times180$ instead of $(20-2)\\times180$."],
          },
        },
        {
          id: "cilm-u5-poly-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A polygon has an interior angle sum of $900°$. How many sides does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse polygon", statement: "$(n-2)\\times180=900$ → $n-2=5$ → $n=7$." },
            ],
            steps: [
              { reasoning: "$900\\div180 = 5$; $n = 5+2 = 7$ sides.", working: "n=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $7$ sides",
            commonErrors: ["Choosing (b) — forgetting to add 2 back."],
          },
        },
        {
          id: "cilm-u5-poly-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the interior angle of a regular dodecagon ($12$ sides).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Regular polygon", statement: "Exterior $=360\\div12=30°$; interior $=180-30=150°$." },
            ],
            steps: [
              { reasoning: "Exterior angle $=360\\div12 = 30°$.", working: "360\\div12=30", marks: 1, markCode: "M" },
              { reasoning: "Interior $=180-30 = 150°$.", working: "150°", marks: 1, markCode: "M" },
              { reasoning: "Interior angle $=150°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150°$",
            commonErrors: ["Using interior formula $\\frac{(n-2)\\times180}{n}$ incorrectly — the $180-$ exterior method is quicker."],
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
