import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cipum-u6-lesson-6-3",
  code: "6-3",
  title: "Vectors and Further Coordinate Geometry",
  goal: "I CAN use vector methods and apply coordinate geometry techniques.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics 1/2: vectors, coordinate geometry",
  ],
  vocabulary: [
    {
      term: "Position vector",
      definition: "Vector from origin to point — r = (x, y, z).",
    },
    { term: "Displacement vector", definition: "Vector between two points." },
    { term: "Scalar product", definition: "a·b = |a||b|cos θ — projection." },
    {
      term: "Vector product",
      definition: "a×b — perpendicular vector, magnitude = area.",
    },
    {
      term: "Collinear",
      definition: "Points on same line — vectors parallel.",
    },
    { term: "Coplanar", definition: "Points/vectors in same plane." },
    { term: "Locus", definition: "Set of points satisfying a condition." },
    {
      term: "Parametric equations",
      definition: "x = f(t), y = g(t) — curve traced by parameter.",
    },
    {
      term: "Polar coordinates",
      definition: "(r, θ) — distance and angle from origin.",
    },
    { term: "Cartesian to polar", definition: "x = r cos θ, y = r sin θ." },
  ],
  concepts: [
    {
      id: "cipum-u6-vec",
      title: "Vectors in 2D and 3D",
      skill: "Perform vector operations and apply scalar/vector products.",
      lesson: {
        sections: [
          {
            heading: "Vector operations",
            body: "**Addition**: component-wise. **Scalar multiplication**: ka. **Magnitude**: |a| = √(a₁²+a₂²+a₃²). **Unit vector**: a/|a|. **Dot product**: a·b = a₁b₁+a₂b₂+a₃b₃ = |a||b|cos θ. **Cross product**: a×b perpendicular to both, |a×b| = |a||b|sin θ.",
          },
          {
            heading: "Geometric applications",
            body: "**Collinear**: AB = λBC for some scalar λ. **Perpendicular**: a·b = 0. **Angle between**: cos θ = a·b/(|a||b|). **Area of triangle**: ½|a×b|. **Volume of parallelepiped**: |a·(b×c)|.",
          },
          {
            heading: "Vector equations of lines",
            body: "**Line**: r = a + λb — position vector a, direction b. **Plane**: r·n = d — normal n, distance d. **Intersection**: solve simultaneous equations.",
          },
        ],
        keyFormulas: [
          { name: "Dot product", statement: "a·b = Σaᵢbᵢ = |a||b|cos θ" },
          { name: "Cross product", statement: "|a×b| = |a||b|sin θ" },
          { name: "Line", statement: "r = a + λb" },
          { name: "Plane", statement: "r·n = d" },
        ],
        workedExample: {
          problem: "Find angle between a = (1,2,0) and b = (0,1,1).",
          solution:
            "a·b = 2; |a| = √5, |b| = √2. cos θ = 2/√10 ≈ 0.632 → θ ≈ 50.8°.",
        },
      },
      questions: [
        {
          id: "cipum-u6-v1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The magnitude of vector (3, 4, 0) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "12" },
              { id: "d", text: "25" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Magnitude", statement: "√(9+16) = 5." },
            ],
            steps: [{ reasoning: "|a| = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5.",
          },
        },
        {
          id: "cipum-u6-v1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dot product a·b equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Σaᵢbᵢ" },
              { id: "b", text: "|a||b|sin θ" },
              { id: "c", text: "a×b" },
              { id: "d", text: "|a|+|b|" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dot product", statement: "Σaᵢbᵢ." },
            ],
            steps: [{ reasoning: "a·b = Σaᵢbᵢ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Σaᵢbᵢ.",
          },
        },
        {
          id: "cipum-u6-v1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If a·b = 0, vectors are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular" },
              { id: "b", text: "Parallel" },
              { id: "c", text: "Equal" },
              { id: "d", text: "No relation" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dot product",
                statement: "a·b=0 → perpendicular.",
              },
            ],
            steps: [{ reasoning: "Perpendicular.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Perpendicular.",
          },
        },
        {
          id: "cipum-u6-v1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cross product a×b is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular to both a and b" },
              { id: "b", text: "Parallel to a" },
              { id: "c", text: "A scalar" },
              { id: "d", text: "Zero always" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross product",
                statement: "Perpendicular to both.",
              },
            ],
            steps: [{ reasoning: "a×b ⊥ both.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Perpendicular.",
          },
        },
        {
          id: "cipum-u6-v1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "|a×b| equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "|a||b|sin θ" },
              { id: "b", text: "|a||b|cos θ" },
              { id: "c", text: "a·b" },
              { id: "d", text: "|a|+|b|" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross magnitude",
                statement: "|a||b|sin θ.",
              },
            ],
            steps: [
              { reasoning: "|a×b| = |a||b|sin θ.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) |a||b|sinθ.",
          },
        },
        {
          id: "cipum-u6-v1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A unit vector has magnitude:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "Variable" },
              { id: "d", text: "−1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit vector",
                statement: "|a| = 1.",
              },
            ],
            steps: [
              { reasoning: "Unit = magnitude 1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-v1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Vector equation of a line is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "r = a + λb" },
              { id: "b", text: "r = aλb" },
              { id: "c", text: "r = ab" },
              { id: "d", text: "r = a/b" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line", statement: "r = a + λb." },
            ],
            steps: [{ reasoning: "r = a + λb.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) r=a+λb.",
          },
        },
        {
          id: "cipum-u6-v1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three points are collinear if their position vectors satisfy:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AB = λBC for some scalar λ" },
              { id: "b", text: "AB·BC = 0" },
              { id: "c", text: "AB = BC" },
              { id: "d", text: "No condition" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collinear", statement: "AB = λBC." },
            ],
            steps: [{ reasoning: "AB = λBC.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) AB=λBC.",
          },
        },
        {
          id: "cipum-u6-v1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angle between vectors uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cos θ = a·b/(|a||b|)" },
              { id: "b", text: "sin θ = a·b/(|a||b|)" },
              { id: "c", text: "tan θ" },
              { id: "d", text: "No formula" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angle",
                statement: "cos θ = a·b/|a||b|.",
              },
            ],
            steps: [{ reasoning: "cos θ formula.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) cos formula.",
          },
        },
        {
          id: "cipum-u6-v1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area of triangle formed by vectors a and b is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "½|a×b|" },
              { id: "b", text: "|a×b|" },
              { id: "c", text: "½a·b" },
              { id: "d", text: "|a||b|" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangle area",
                statement: "½|a×b|.",
              },
            ],
            steps: [{ reasoning: "Area = ½|a×b|.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) ½|a×b|.",
          },
        },
        {
          id: "cipum-u6-v1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "(2, 1) + (3, −4) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(5, −3)" },
              { id: "b", text: "(5, 5)" },
              { id: "c", text: "(−1, 5)" },
              { id: "d", text: "(6, −3)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition", statement: "Component-wise." },
            ],
            steps: [{ reasoning: "(5, −3).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (5,−3).",
          },
        },
        {
          id: "cipum-u6-v1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "3·(2, −1) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(6, −3)" },
              { id: "b", text: "(5, 2)" },
              { id: "c", text: "(6, 3)" },
              { id: "d", text: "(2/3, −1/3)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scalar mult",
                statement: "Component-wise.",
              },
            ],
            steps: [{ reasoning: "(6, −3).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (6,−3).",
          },
        },
        {
          id: "cipum-u6-v1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "(1, 2)·(3, 4) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "10" },
              { id: "c", text: "7" },
              { id: "d", text: "−5" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dot product",
                statement: "1·3 + 2·4 = 11.",
              },
            ],
            steps: [{ reasoning: "= 11.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 11.",
          },
        },
        {
          id: "cipum-u6-v1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "(1, 0, 0)×(0, 1, 0) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(0, 0, 1)" },
              { id: "b", text: "(0, 0, −1)" },
              { id: "c", text: "(1, 1, 0)" },
              { id: "d", text: "(0, 1, 0)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cross product", statement: "i×j = k." },
            ],
            steps: [{ reasoning: "= (0,0,1).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (0,0,1).",
          },
        },
        {
          id: "cipum-u6-v1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unit vector in direction of (3, 4) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(3/5, 4/5)" },
              { id: "b", text: "(3, 4)" },
              { id: "c", text: "(1/5, 1/5)" },
              { id: "d", text: "(0.3, 0.4, 0)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit vector", statement: "(3,4)/5." },
            ],
            steps: [{ reasoning: "(3/5, 4/5).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (3/5,4/5).",
          },
        },
        {
          id: "cipum-u6-v1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "cos θ for angle between (1,0) and (0,1) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "−1" },
              { id: "d", text: "0.5" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angle", statement: "a·b = 0 → θ = 90°." },
            ],
            steps: [{ reasoning: "cos θ = 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0.",
          },
        },
        {
          id: "cipum-u6-v1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "The vector equation r = a + λb describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A straight line" },
              { id: "b", text: "A plane" },
              { id: "c", text: "A circle" },
              { id: "d", text: "A sphere" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Line equation",
                statement: "Straight line.",
              },
            ],
            steps: [{ reasoning: "Line.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Line.",
          },
        },
        {
          id: "cipum-u6-v1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "In r = a + λb, b is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction vector" },
              { id: "b", text: "Position vector" },
              { id: "c", text: "Normal" },
              { id: "d", text: "Origin" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direction vector",
                statement: "b = direction.",
              },
            ],
            steps: [{ reasoning: "b = direction.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Direction.",
          },
        },
        {
          id: "cipum-u6-v1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "a×b = −(b×a) because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cross product is anti-commutative" },
              { id: "b", text: "Commutative" },
              { id: "c", text: "Associative" },
              { id: "d", text: "No reason" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anti-commutative",
                statement: "a×b = −b×a.",
              },
            ],
            steps: [
              { reasoning: "Anti-commutative.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Anti-commutative.",
          },
        },
        {
          id: "cipum-u6-v1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between dot product and cross product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dot vs cross",
                statement: "Scalar vs vector.",
              },
            ],
            steps: [
              {
                reasoning: "Dot: scalar — a·b = |a||b|cos θ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cross: vector — a×b ⊥ both, magnitude |a||b|sin θ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dot = scalar; cross = vector.",
          },
        },
        {
          id: "cipum-u6-v1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the vector equation of a line and explain λ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Line equation",
                statement: "r = a + λb.",
              },
            ],
            steps: [
              {
                reasoning: "r = a + λb: a = point on line, b = direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "λ is parameter — different values give different points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "r = a + λb; λ = parameter.",
          },
        },
        {
          id: "cipum-u6-v1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to find the angle between two vectors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angle between",
                statement: "cos θ = a·b/|a||b|.",
              },
            ],
            steps: [
              {
                reasoning: "Compute dot product a·b.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute magnitudes |a| and |b|.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "cos θ = a·b/(|a||b|) → θ = arccos(...).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "cos θ = a·b/(|a||b|).",
          },
        },
        {
          id: "cipum-u6-v1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area of triangle with vertices A(1,0,0), B(0,1,0), C(0,0,1).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Triangle area", statement: "½|AB×AC|." },
            ],
            steps: [
              {
                reasoning: "AB = (−1,1,0), AC = (−1,0,1).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "AB×AC = (1·1−0·0, 0·(−1)−(−1)·1, (−1)·0−1·(−1)) = (1,1,1).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "|AB×AC| = √3.", marks: 1, markCode: "M" },
              { reasoning: "Area = ½√3 ≈ 0.866.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "√3/2.",
          },
        },
        {
          id: "cipum-u6-v1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two vectors are parallel if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a×b = 0" },
              { id: "b", text: "a·b = 0" },
              { id: "c", text: "|a| = |b|" },
              { id: "d", text: "a = −b" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel", statement: "a×b = 0." },
            ],
            steps: [
              { reasoning: "a×b = 0 → parallel.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) a×b=0.",
          },
        },
        {
          id: "cipum-u6-v1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the scalar triple product a·(b×c) used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scalar triple",
                statement: "Volume of parallelepiped.",
              },
            ],
            steps: [
              {
                reasoning: "Gives volume of parallelepiped formed by a, b, c.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Zero if vectors coplanar.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Parallelepiped volume.",
          },
        },
        {
          id: "cipum-u6-v1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the cross product gives a vector perpendicular to both inputs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross product",
                statement: "Determinant definition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Definition via determinant ensures perpendicularity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "a·(a×b) = 0 and b·(a×b) = 0 by construction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direction follows right-hand rule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "By definition — perpendicular to both.",
          },
        },
        {
          id: "cipum-u6-v1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The position vector of point P(x, y) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(x, y)" },
              { id: "b", text: "(y, x)" },
              { id: "c", text: "(x+y, x−y)" },
              { id: "d", text: "(0, 0)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Position vector",
                statement: "(x, y).",
              },
            ],
            steps: [{ reasoning: "= (x, y).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (x,y).",
          },
        },
        {
          id: "cipum-u6-v1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the displacement vector from A(1,2) to B(4,6).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Displacement", statement: "B − A." },
            ],
            steps: [
              {
                reasoning: "AB = B − A = (4−1, 6−2) = (3, 4).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "AB = (3, 4).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(3, 4).",
          },
        },
        {
          id: "cipum-u6-v1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the shortest distance from point P(1,2,3) to line r = (1,0,0) + λ(0,1,1).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Point-line distance",
                statement: "|AP×b|/|b|.",
              },
            ],
            steps: [
              {
                reasoning: "AP = (0,2,3); direction b = (0,1,1).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "AP×b = (2·1−3·1, 3·0−0·1, 0·1−2·0) = (−1,0,0). |AP×b| = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "|b| = √2. Distance = 1/√2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "d = 1/√2 ≈ 0.707.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/√2.",
          },
        },
        {
          id: "cipum-u6-v1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the cross product only defined in 3D (not 2D)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross product",
                statement: "Needs 3 dimensions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cross product gives vector perpendicular to both — needs 3D space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In 2D, perpendicular is unique direction (scalar).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perpendicular needs 3D.",
          },
        },
      ],
    },
    {
      id: "cipum-u6-coord",
      title: "Further coordinate geometry",
      skill: "Apply polar coordinates, parametric equations and loci.",
      lesson: {
        sections: [
          {
            heading: "Polar coordinates",
            body: "**Point**: (r, θ) — distance r from origin, angle θ from positive x-axis. **Conversion**: x = r cos θ, y = r sin θ. **r² = x²+y²**, θ = arctan(y/x). Polar curves: r = f(θ) — e.g., circle r = a, cardioid r = a(1+cos θ).",
          },
          {
            heading: "Parametric equations",
            body: "Curve given by x = f(t), y = g(t) — parameter t traces curve. Eliminate t for Cartesian equation. Useful for circles (x = a cos t, y = a sin t), cycloids, trajectories.",
          },
          {
            heading: "Loci",
            body: "**Locus**: set of points satisfying condition. Examples: perpendicular bisector of segment; circle = constant distance; parabola = equidistant from point and line. Useful for geometric proofs.",
          },
        ],
        keyFormulas: [
          { name: "Polar conversion", statement: "x = r cos θ, y = r sin θ" },
          { name: "r from Cartesian", statement: "r = √(x²+y²)" },
          { name: "θ from Cartesian", statement: "θ = arctan(y/x)" },
          { name: "Parametric circle", statement: "x = a cos t, y = a sin t" },
        ],
        workedExample: {
          problem: "Convert (x,y) = (1,1) to polar.",
          solution: "r = √2, θ = π/4. Polar = (√2, π/4).",
        },
      },
      questions: [
        {
          id: "cipum-u6-cg1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polar coordinates are written as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(r, θ)" },
              { id: "b", text: "(x, y)" },
              { id: "c", text: "(θ, r)" },
              { id: "d", text: "(r, x)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar", statement: "(r, θ)." },
            ],
            steps: [{ reasoning: "(r, θ).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (r,θ).",
          },
        },
        {
          id: "cipum-u6-cg1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar coordinates, r represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance from origin" },
              { id: "b", text: "Angle" },
              { id: "c", text: "x-coordinate" },
              { id: "d", text: "y-coordinate" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar r", statement: "Distance." },
            ],
            steps: [{ reasoning: "r = distance.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Distance.",
          },
        },
        {
          id: "cipum-u6-cg1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar coordinates, θ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angle from positive x-axis" },
              { id: "b", text: "Distance" },
              { id: "c", text: "x-coordinate" },
              { id: "d", text: "y-coordinate" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar θ", statement: "Angle." },
            ],
            steps: [{ reasoning: "θ = angle.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Angle.",
          },
        },
        {
          id: "cipum-u6-cg1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "x = r cos θ and y = r sin θ convert:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polar to Cartesian" },
              { id: "b", text: "Cartesian to polar" },
              { id: "c", text: "No conversion" },
              { id: "d", text: "3D to 2D" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conversion",
                statement: "Polar → Cartesian.",
              },
            ],
            steps: [
              { reasoning: "Polar → Cartesian.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Polar→Cartesian.",
          },
        },
        {
          id: "cipum-u6-cg1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "r = √(x²+y²) converts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cartesian to polar" },
              { id: "b", text: "Polar to Cartesian" },
              { id: "c", text: "No conversion" },
              { id: "d", text: "3D" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conversion",
                statement: "Cartesian → polar.",
              },
            ],
            steps: [
              { reasoning: "Cartesian → polar.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Cartesian→polar.",
          },
        },
        {
          id: "cipum-u6-cg1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A locus is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set of points satisfying a condition" },
              { id: "b", text: "A single point" },
              { id: "c", text: "A line only" },
              { id: "d", text: "No definition" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Locus",
                statement: "Points satisfying condition.",
              },
            ],
            steps: [
              { reasoning: "Locus = point set.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Point set.",
          },
        },
        {
          id: "cipum-u6-cg1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Parametric equations give:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "x = f(t), y = g(t) — curve traced by parameter",
              },
              { id: "b", text: "Only x" },
              { id: "c", text: "Only y" },
              { id: "d", text: "No curve" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parametric",
                statement: "x=f(t), y=g(t).",
              },
            ],
            steps: [
              {
                reasoning: "Parametric = parameter curve.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) x=f(t),y=g(t).",
          },
        },
        {
          id: "cipum-u6-cg1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The perpendicular bisector of a segment is a locus of points:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equidistant from endpoints" },
              { id: "b", text: "On the segment" },
              { id: "c", text: "At endpoints" },
              { id: "d", text: "No points" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perp bisector",
                statement: "Equidistant.",
              },
            ],
            steps: [
              { reasoning: "Equidistant points.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Equidistant.",
          },
        },
        {
          id: "cipum-u6-cg1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle in polar form (centered at origin) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "r = a (constant)" },
              { id: "b", text: "r = θ" },
              { id: "c", text: "θ = constant" },
              { id: "d", text: "r = 0" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar circle",
                statement: "r = const.",
              },
            ],
            steps: [{ reasoning: "r = a.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) r=a.",
          },
        },
        {
          id: "cipum-u6-cg1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "θ in polar coordinates is measured from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive x-axis" },
              { id: "b", text: "y-axis" },
              { id: "c", text: "Origin" },
              { id: "d", text: "Negative x-axis" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar angle",
                statement: "From +x axis.",
              },
            ],
            steps: [{ reasoning: "From +x axis.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) +x axis.",
          },
        },
        {
          id: "cipum-u6-cg1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point (r, θ) = (2, π/3) converts to Cartesian as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(1, √3)" },
              { id: "b", text: "(√3, 1)" },
              { id: "c", text: "(2, π/3)" },
              { id: "d", text: "(0.5, √3/2)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "x=2cos(π/3)=1, y=2sin(π/3)=√3.",
              },
            ],
            steps: [{ reasoning: "(1, √3).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (1,√3).",
          },
        },
        {
          id: "cipum-u6-cg1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point (x,y) = (0, 3) converts to polar as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(3, π/2)" },
              { id: "b", text: "(3, 0)" },
              { id: "c", text: "(0, π/2)" },
              { id: "d", text: "(3, π)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cartesian→polar",
                statement: "r=3, θ=π/2.",
              },
            ],
            steps: [{ reasoning: "(3, π/2).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) (3,π/2).",
          },
        },
        {
          id: "cipum-u6-cg1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Parametric equations x = cos t, y = sin t give:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unit circle" },
              { id: "b", text: "Line" },
              { id: "c", text: "Parabola" },
              { id: "d", text: "Ellipse" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parametric circle",
                statement: "x²+y²=1.",
              },
            ],
            steps: [{ reasoning: "Unit circle.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Unit circle.",
          },
        },
        {
          id: "cipum-u6-cg1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "To eliminate parameter t from x = f(t), y = g(t):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solve one equation for t, substitute" },
              { id: "b", text: "Add them" },
              { id: "c", text: "Multiply them" },
              { id: "d", text: "No method" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eliminate t",
                statement: "Solve for t, substitute.",
              },
            ],
            steps: [
              { reasoning: "Solve + substitute.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Solve+substitute.",
          },
        },
        {
          id: "cipum-u6-cg1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Polar curve r = 2cos θ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circle radius 1 centered at (1,0)" },
              { id: "b", text: "Circle radius 2 at origin" },
              { id: "c", text: "Line" },
              { id: "d", text: "Parabola" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar curve",
                statement: "r=2cosθ → (x−1)²+y²=1.",
              },
            ],
            steps: [{ reasoning: "Circle at (1,0).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Circle.",
          },
        },
        {
          id: "cipum-u6-cg1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The locus equidistant from two points is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular bisector" },
              { id: "b", text: "Circle" },
              { id: "c", text: "Line through points" },
              { id: "d", text: "Parabola" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Locus", statement: "Perp bisector." },
            ],
            steps: [{ reasoning: "Perp bisector.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Perp bisector.",
          },
        },
        {
          id: "cipum-u6-cg1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Polar coordinates are most useful for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Curves with rotational symmetry" },
              { id: "b", text: "Straight lines" },
              { id: "c", text: "No advantage" },
              { id: "d", text: "3D shapes" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar advantage",
                statement: "Rotational symmetry.",
              },
            ],
            steps: [
              { reasoning: "Rotational symmetry.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Rotational symmetry.",
          },
        },
        {
          id: "cipum-u6-cg1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "θ = arctan(y/x) gives angle but may need adjustment for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quadrant of point" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Magnitude" },
              { id: "d", text: "Sign of r" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quadrant",
                statement: "Adjust for quadrant.",
              },
            ],
            steps: [
              { reasoning: "Quadrant adjustment.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Quadrant.",
          },
        },
        {
          id: "cipum-u6-cg1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Parametric equations are useful for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Curves hard to express as y = f(x)" },
              { id: "b", text: "Only lines" },
              { id: "c", text: "No curves" },
              { id: "d", text: "3D only" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parametric use",
                statement: "Complex curves.",
              },
            ],
            steps: [{ reasoning: "Complex curves.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Complex curves.",
          },
        },
        {
          id: "cipum-u6-cg1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between polar and Cartesian coordinates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coordinate systems",
                statement: "Distance+angle vs x,y.",
              },
            ],
            steps: [
              {
                reasoning: "Cartesian: (x, y) — perpendicular distances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polar: (r, θ) — distance + angle from origin.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cartesian = x,y; polar = r,θ.",
          },
        },
        {
          id: "cipum-u6-cg1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the conversion formulas between polar and Cartesian.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conversion",
                statement: "x=r cosθ, y=r sinθ.",
              },
            ],
            steps: [
              {
                reasoning: "x = r cos θ, y = r sin θ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "r = √(x²+y²), θ = arctan(y/x).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x=r cosθ; r=√(x²+y²).",
          },
        },
        {
          id: "cipum-u6-cg1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when polar coordinates are preferable to Cartesian.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar advantage",
                statement: "Rotational symmetry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Curves with rotational symmetry (circles, spirals).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "r = f(θ) simpler than y = f(x) for such curves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cartesian better for straight lines and parabolas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rotational symmetry → polar.",
          },
        },
        {
          id: "cipum-u6-cg1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert polar curve r = 4cos θ to Cartesian equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "r² = x²+y², x = r cos θ.",
              },
            ],
            steps: [
              {
                reasoning: "r = 4cos θ → r² = 4r cos θ → x²+y² = 4x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "x² − 4x + y² = 0 → (x−2)² + y² = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Circle center (2,0), radius 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(x−2)² + y² = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(x−2)²+y²=4.",
          },
        },
        {
          id: "cipum-u6-cg1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Parametric equations x = t², y = t describe:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parabola y² = x" },
              { id: "b", text: "Line" },
              { id: "c", text: "Circle" },
              { id: "d", text: "Ellipse" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parametric", statement: "y² = x." },
            ],
            steps: [{ reasoning: "y² = t² = x.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Parabola.",
          },
        },
        {
          id: "cipum-u6-cg1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a cardioid in polar form?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cardioid",
                statement: "r = a(1+cos θ).",
              },
            ],
            steps: [
              {
                reasoning: "r = a(1 + cos θ) — heart-shaped curve.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Symmetric about x-axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "r = a(1+cos θ).",
          },
        },
        {
          id: "cipum-u6-cg1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how parametric equations can represent curves not expressible as y = f(x).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parametric advantage",
                statement: "Multi-valued curves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some curves fail vertical line test (circle, ellipse).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Parametric x=f(t), y=g(t) handles these naturally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each t gives one point — no ambiguity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Handles non-function curves.",
          },
        },
        {
          id: "cipum-u6-cg1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polar curve r = θ is called a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spiral" },
              { id: "b", text: "Circle" },
              { id: "c", text: "Line" },
              { id: "d", text: "Ellipse" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spiral",
                statement: "r = θ → spiral.",
              },
            ],
            steps: [{ reasoning: "Spiral.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Spiral.",
          },
        },
        {
          id: "cipum-u6-cg1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert (r,θ) = (3, π) to Cartesian.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "x=r cosθ, y=r sinθ.",
              },
            ],
            steps: [
              {
                reasoning: "x = 3cos(π) = −3, y = 3sin(π) = 0.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(−3, 0).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(−3, 0).",
          },
        },
        {
          id: "cipum-u6-cg1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find Cartesian equation of r = 2/(1−cos θ).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "Multiply by denominator.",
              },
            ],
            steps: [
              {
                reasoning: "r(1−cos θ) = 2 → r − r cos θ = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "r = √(x²+y²), r cos θ = x → √(x²+y²) − x = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "√(x²+y²) = x + 2 → x²+y² = x²+4x+4 → y² = 4x+4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "y² = 4(x+1) — parabola.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "y² = 4(x+1).",
          },
        },
        {
          id: "cipum-u6-cg1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are loci useful in coordinate geometry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loci",
                statement: "Geometric conditions → equations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Translate geometric conditions into algebraic equations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Useful for proving properties and finding unknown points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Geometry → algebra.",
          },
        },
      ],
    },
  ],
};
