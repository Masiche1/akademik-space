import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cipum-u6-lesson-6-1",
  code: "6-1",
  title: "Complex Numbers: Cartesian and Polar Form",
  goal: "I CAN perform operations on complex numbers in Cartesian and polar form, including De Moivre's theorem.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics 2: complex numbers",
  ],
  vocabulary: [
    { term: "Complex number", definition: "z = x + iy where i² = −1." },
    { term: "Real part", definition: "Re(z) = x — horizontal component." },
    { term: "Imaginary part", definition: "Im(z) = y — vertical component." },
    { term: "Conjugate", definition: "z* = x − iy — reflection in real axis." },
    { term: "Modulus", definition: "|z| = √(x² + y²) — distance from origin." },
    { term: "Argument", definition: "arg(z) = angle from positive real axis." },
    { term: "Polar form", definition: "z = r(cos θ + i sin θ) = r cis θ." },
    { term: "Euler form", definition: "z = re^(iθ) — exponential form." },
    {
      term: "De Moivre's theorem",
      definition: "(cos θ + i sin θ)^n = cos nθ + i sin nθ.",
    },
    {
      term: "Roots of unity",
      definition: "Solutions of z^n = 1 — n equally spaced points.",
    },
  ],
  concepts: [
    {
      id: "cipum-u6-cn-cartesian",
      title: "Complex numbers in Cartesian form",
      skill:
        "Perform arithmetic with complex numbers and find modulus, argument and conjugate.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic",
            body: "**Addition**: (x₁+iy₁) + (x₂+iy₂) = (x₁+x₂) + i(y₁+y₂). **Multiplication**: (x₁+iy₁)(x₂+iy₂) = (x₁x₂−y₁y₂) + i(x₁y₂+x₂y₁). **Division**: multiply by conjugate of denominator. **i² = −1**, i³ = −i, i⁴ = 1.",
          },
          {
            heading: "Modulus, argument, conjugate",
            body: "**|z|** = √(x²+y²). **arg(z)** = arctan(y/x) adjusted for quadrant — principal value in (−π, π]. **Conjugate** z* = x−iy. Properties: |z|² = zz*, arg(z*) = −arg(z).",
          },
          {
            heading: "Argand diagram",
            body: "Complex numbers plotted as points (x, y) — real axis horizontal, imaginary vertical. Addition = vector addition. Multiplication by i = rotation by 90° anticlockwise.",
          },
        ],
        keyFormulas: [
          { name: "Modulus", statement: "|z| = √(x²+y²)" },
          { name: "Argument", statement: "arg(z) = arctan(y/x)" },
          { name: "Conjugate", statement: "z* = x − iy" },
          {
            name: "Multiplication",
            statement: "(a+bi)(c+di) = (ac−bd) + i(ad+bc)",
          },
        ],
        workedExample: {
          problem: "Find modulus and argument of z = 3 + 4i.",
          solution: "|z| = √(9+16) = 5. arg(z) = arctan(4/3) ≈ 0.927 rad.",
        },
      },
      questions: [
        {
          id: "cipum-u6-c1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "i² equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−1" },
              { id: "b", text: "1" },
              { id: "c", text: "i" },
              { id: "d", text: "0" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "i", statement: "i² = −1." },
            ],
            steps: [{ reasoning: "i² = −1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −1.",
          },
        },
        {
          id: "cipum-u6-c1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The conjugate of 3 + 4i is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 − 4i" },
              { id: "b", text: "−3 + 4i" },
              { id: "c", text: "−3 − 4i" },
              { id: "d", text: "4 − 3i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conjugate",
                statement: "Change sign of imaginary part.",
              },
            ],
            steps: [{ reasoning: "z* = 3−4i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3−4i.",
          },
        },
        {
          id: "cipum-u6-c1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "|3 + 4i| =",
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
              { kind: "skill", name: "Modulus", statement: "√(9+16) = 5." },
            ],
            steps: [{ reasoning: "|z| = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5.",
          },
        },
        {
          id: "cipum-u6-c1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "i³ equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−i" },
              { id: "b", text: "i" },
              { id: "c", text: "−1" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Powers of i",
                statement: "i³ = i²·i = −i.",
              },
            ],
            steps: [{ reasoning: "i³ = −i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −i.",
          },
        },
        {
          id: "cipum-u6-c1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The real part of 5 − 2i is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "−2" },
              { id: "c", text: "3" },
              { id: "d", text: "7" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Re", statement: "Re(z) = 5." },
            ],
            steps: [{ reasoning: "Re = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5.",
          },
        },
        {
          id: "cipum-u6-c1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The imaginary part of 5 − 2i is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−2" },
              { id: "b", text: "5" },
              { id: "c", text: "2" },
              { id: "d", text: "7" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Im", statement: "Im(z) = −2." },
            ],
            steps: [{ reasoning: "Im = −2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −2.",
          },
        },
        {
          id: "cipum-u6-c1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "(2 + i) + (3 − 2i) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 − i" },
              { id: "b", text: "5 + 3i" },
              { id: "c", text: "6 − i" },
              { id: "d", text: "5 + i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Addition",
                statement: "Add real and imaginary parts.",
              },
            ],
            steps: [
              { reasoning: "(2+3) + i(1−2) = 5 − i.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 5−i.",
          },
        },
        {
          id: "cipum-u6-c1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "(1 + i)² =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2i" },
              { id: "b", text: "1 + 2i" },
              { id: "c", text: "2" },
              { id: "d", text: "i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "(1+i)(1+i) = 1+2i+i² = 2i.",
              },
            ],
            steps: [{ reasoning: "(1+i)² = 2i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2i.",
          },
        },
        {
          id: "cipum-u6-c1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "arg(1 + i) equals (principal value):",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "π/4" },
              { id: "b", text: "π/2" },
              { id: "c", text: "π/3" },
              { id: "d", text: "π" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument",
                statement: "arctan(1/1) = π/4.",
              },
            ],
            steps: [{ reasoning: "arg = π/4.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) π/4.",
          },
        },
        {
          id: "cipum-u6-c1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A complex number and its conjugate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have the same modulus" },
              { id: "b", text: "Have opposite modulus" },
              { id: "c", text: "Are equal" },
              { id: "d", text: "Are unrelated" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjugate",
                statement: "|z| = |z*|.",
              },
            ],
            steps: [{ reasoning: "Same modulus.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Same modulus.",
          },
        },
        {
          id: "cipum-u6-c1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "(2 + i)(3 − i) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7 + i" },
              { id: "b", text: "5 + 5i" },
              { id: "c", text: "7 − i" },
              { id: "d", text: "6 + i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "(6−(−1)) + i(−2+3) = 7+i.",
              },
            ],
            steps: [{ reasoning: "= 7 + i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 7+i.",
          },
        },
        {
          id: "cipum-u6-c1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "i⁴ equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "−1" },
              { id: "c", text: "i" },
              { id: "d", text: "−i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Powers of i",
                statement: "i⁴ = (i²)² = (−1)² = 1.",
              },
            ],
            steps: [{ reasoning: "i⁴ = 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-c1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "|−3 + 4i| =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "25" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Modulus", statement: "√(9+16) = 5." },
            ],
            steps: [{ reasoning: "|z| = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 5.",
          },
        },
        {
          id: "cipum-u6-c1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "arg(−1 + i) principal value =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3π/4" },
              { id: "b", text: "π/4" },
              { id: "c", text: "−3π/4" },
              { id: "d", text: "π/2" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument",
                statement: "Second quadrant: π − π/4 = 3π/4.",
              },
            ],
            steps: [{ reasoning: "arg = 3π/4.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3π/4.",
          },
        },
        {
          id: "cipum-u6-c1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiplying by i rotates a complex number by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90° anticlockwise" },
              { id: "b", text: "90° clockwise" },
              { id: "c", text: "180°" },
              { id: "d", text: "No rotation" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotation",
                statement: "×i = +90° rotation.",
              },
            ],
            steps: [
              { reasoning: "×i = 90° anticlockwise.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 90° anticlockwise.",
          },
        },
        {
          id: "cipum-u6-c1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "zz* equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "|z|² (real)" },
              { id: "b", text: "0" },
              { id: "c", text: "z²" },
              { id: "d", text: "Complex" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjugate product",
                statement: "zz* = |z|².",
              },
            ],
            steps: [{ reasoning: "zz* = |z|².", marks: 1, markCode: "M" }],
            finalAnswer: "(a) |z|².",
          },
        },
        {
          id: "cipum-u6-c1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "(3 + 2i) − (1 − i) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 + 3i" },
              { id: "b", text: "4 + i" },
              { id: "c", text: "2 − i" },
              { id: "d", text: "4 + 3i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subtraction",
                statement: "(3−1) + i(2−(−1)) = 2+3i.",
              },
            ],
            steps: [{ reasoning: "= 2 + 3i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2+3i.",
          },
        },
        {
          id: "cipum-u6-c1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "arg(z*) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−arg(z)" },
              { id: "b", text: "arg(z)" },
              { id: "c", text: "π − arg(z)" },
              { id: "d", text: "0" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjugate arg",
                statement: "arg(z*) = −arg(z).",
              },
            ],
            steps: [
              { reasoning: "arg(z*) = −arg(z).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) −arg(z).",
          },
        },
        {
          id: "cipum-u6-c1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "z = 0 has argument:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Undefined" },
              { id: "b", text: "0" },
              { id: "c", text: "π/2" },
              { id: "d", text: "π" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "arg(0)", statement: "Undefined." },
            ],
            steps: [
              { reasoning: "arg(0) undefined.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Undefined.",
          },
        },
        {
          id: "cipum-u6-c1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between modulus and argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modulus vs arg",
                statement: "Distance vs angle.",
              },
            ],
            steps: [
              {
                reasoning: "Modulus |z|: distance from origin — real number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Argument arg(z): angle from positive real axis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Modulus = distance; argument = angle.",
          },
        },
        {
          id: "cipum-u6-c1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the formula for multiplying complex numbers in Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication",
                statement: "(a+bi)(c+di).",
              },
            ],
            steps: [
              {
                reasoning: "(a+bi)(c+di) = (ac−bd) + i(ad+bc).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Uses i² = −1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(ac−bd) + i(ad+bc).",
          },
        },
        {
          id: "cipum-u6-c1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why multiplication by i corresponds to rotation by 90°.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotation",
                statement: "i = cis(π/2).",
              },
            ],
            steps: [
              {
                reasoning: "i = cos(π/2) + i sin(π/2) — unit vector at 90°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiplication adds arguments — arg increases by π/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Modulus unchanged → pure rotation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "i adds π/2 to argument → 90° rotation.",
          },
        },
        {
          id: "cipum-u6-c1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve z² = −4 in Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Square roots",
                statement: "z² = −4 → z = ±2i.",
              },
            ],
            steps: [
              { reasoning: "z² = −4 → z = ±√(−4).", marks: 1, markCode: "M" },
              {
                reasoning: "√(−4) = 2i (since (2i)² = −4).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "z = 2i or z = −2i.", marks: 1, markCode: "M" },
              { reasoning: "Two solutions: ±2i.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "z = ±2i.",
          },
        },
        {
          id: "cipum-u6-c1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "(1 + i)³ =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−2 + 2i" },
              { id: "b", text: "2 + 2i" },
              { id: "c", text: "−2 − 2i" },
              { id: "d", text: "2i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Powers",
                statement: "(1+i)³ = (1+i)(2i) = 2i+2i² = −2+2i.",
              },
            ],
            steps: [{ reasoning: "= −2 + 2i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −2+2i.",
          },
        },
        {
          id: "cipum-u6-c1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Argand diagram?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argand diagram",
                statement: "Complex plane.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Graph of complex numbers — real axis horizontal, imaginary vertical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z = x + iy plotted at point (x, y).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complex plane — (x, y) point.",
          },
        },
        {
          id: "cipum-u6-c1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why arg has multiple values but we use principal value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Principal arg",
                statement: "Unique value needed.",
              },
            ],
            steps: [
              {
                reasoning: "arg(z) defined up to multiples of 2π.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Principal value restricted to (−π, π].",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensures unique answer for calculations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Unique value in (−π, π].",
          },
        },
        {
          id: "cipum-u6-c1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "i⁵ equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "i" },
              { id: "b", text: "−i" },
              { id: "c", text: "−1" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Powers of i",
                statement: "i⁵ = i⁴·i = i.",
              },
            ],
            steps: [{ reasoning: "i⁵ = i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) i.",
          },
        },
        {
          id: "cipum-u6-c1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find Re and Im of (2+i)(3−i).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "(2+i)(3−i) = 7+i.",
              },
            ],
            steps: [
              {
                reasoning: "(2+i)(3−i) = (6+1) + i(3−2) = 7 + i.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Re = 7, Im = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Re = 7, Im = 1.",
          },
        },
        {
          id: "cipum-u6-c1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find all complex numbers z such that z² = 5 − 12i.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Square roots",
                statement: "Solve z² = w.",
              },
            ],
            steps: [
              {
                reasoning: "Let z = a + bi: (a+bi)² = a²−b² + 2abi = 5 − 12i.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "a² − b² = 5 and 2ab = −12 → ab = −6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "a² + b² = |w| = √(25+144) = 13. Solve: a²=9, b²=4 → a=±3, b=∓2 (opposite signs).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z = 3 − 2i or z = −3 + 2i.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "z = 3−2i or −3+2i.",
          },
        },
        {
          id: "cipum-u6-c1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the geometric interpretation of complex multiplication?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric mult",
                statement: "Rotation + scaling.",
              },
            ],
            steps: [
              {
                reasoning: "Multiplication adds arguments → rotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moduli multiply → scaling.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rotation + scaling.",
          },
        },
      ],
    },
    {
      id: "cipum-u6-cn-polar",
      title: "Polar form and De Moivre's theorem",
      skill:
        "Convert between Cartesian and polar form and apply De Moivre's theorem.",
      lesson: {
        sections: [
          {
            heading: "Polar form",
            body: "**z = r(cos θ + i sin θ)** where r = |z|, θ = arg(z). Also **z = re^(iθ)** (Euler form). Conversion: x = r cos θ, y = r sin θ. r = √(x²+y²), θ = arctan(y/x).",
          },
          {
            heading: "Operations in polar form",
            body: "**Multiplication**: r₁r₂ cis(θ₁+θ₂). **Division**: (r₁/r₂) cis(θ₁−θ₂). **Powers**: z^n = r^n cis(nθ) — De Moivre's theorem. Much easier than Cartesian for powers.",
          },
          {
            heading: "Roots of unity",
            body: "z^n = 1 has n solutions: z = cis(2πk/n) for k = 0,1,...,n−1. Equally spaced on unit circle. Sum of all n-th roots of unity = 0 (for n > 1).",
          },
        ],
        keyFormulas: [
          { name: "Polar form", statement: "z = r cis θ = r(cosθ + i sinθ)" },
          { name: "Euler form", statement: "z = re^(iθ)" },
          { name: "De Moivre", statement: "(cis θ)^n = cis(nθ)" },
          {
            name: "nth roots of unity",
            statement: "cis(2πk/n), k = 0,...,n−1",
          },
        ],
        workedExample: {
          problem: "Express z = 1 + i in polar form and find z⁴.",
          solution: "r = √2, θ = π/4. z⁴ = (√2)⁴ cis(4·π/4) = 4 cis(π) = −4.",
        },
      },
      questions: [
        {
          id: "cipum-u6-c2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polar form of z = r(cos θ + i sin θ) is also written:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "r cis θ" },
              { id: "b", text: "r + iθ" },
              { id: "c", text: "cis(rθ)" },
              { id: "d", text: "rθ" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "cis",
                statement: "cis θ = cos θ + i sin θ.",
              },
            ],
            steps: [{ reasoning: "r cis θ.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) r cis θ.",
          },
        },
        {
          id: "cipum-u6-c2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar form z = r cis θ, r is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The modulus |z|" },
              { id: "b", text: "The argument" },
              { id: "c", text: "The real part" },
              { id: "d", text: "The imaginary part" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar r", statement: "r = |z|." },
            ],
            steps: [{ reasoning: "r = modulus.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Modulus.",
          },
        },
        {
          id: "cipum-u6-c2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar form z = r cis θ, θ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The argument arg(z)" },
              { id: "b", text: "The modulus" },
              { id: "c", text: "The real part" },
              { id: "d", text: "The imaginary part" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polar θ", statement: "θ = arg(z)." },
            ],
            steps: [{ reasoning: "θ = argument.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Argument.",
          },
        },
        {
          id: "cipum-u6-c2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Euler form of z is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "re^(iθ)" },
              { id: "b", text: "r cis θ only" },
              { id: "c", text: "x + iy" },
              { id: "d", text: "e^(iθ)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Euler", statement: "z = re^(iθ)." },
            ],
            steps: [{ reasoning: "Euler = re^(iθ).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) re^(iθ).",
          },
        },
        {
          id: "cipum-u6-c2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "cis θ is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cos θ + i sin θ" },
              { id: "b", text: "cos θ − i sin θ" },
              { id: "c", text: "sin θ + i cos θ" },
              { id: "d", text: "e^θ" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "cis",
                statement: "cis θ = cos θ + i sin θ.",
              },
            ],
            steps: [
              {
                reasoning: "cis θ = cos θ + i sin θ.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) cos θ + i sin θ.",
          },
        },
        {
          id: "cipum-u6-c2-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "De Moivre's theorem states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(cis θ)^n = cis(nθ)" },
              { id: "b", text: "(cis θ)^n = n cis θ" },
              { id: "c", text: "cis(θ^n) = nθ" },
              { id: "d", text: "(r cis θ)^n = rn cis θ" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "De Moivre",
                statement: "(cis θ)^n = cis(nθ).",
              },
            ],
            steps: [
              { reasoning: "De Moivre = cis(nθ).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) cis(nθ).",
          },
        },
        {
          id: "cipum-u6-c2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "z = 2 cis(π/3) has modulus:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "π/3" },
              { id: "c", text: "2π/3" },
              { id: "d", text: "√3" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polar reading", statement: "r = 2." },
            ],
            steps: [{ reasoning: "r = 2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2.",
          },
        },
        {
          id: "cipum-u6-c2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "z = 2 cis(π/3) has argument:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "π/3" },
              { id: "b", text: "2" },
              { id: "c", text: "2π/3" },
              { id: "d", text: "π/6" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polar reading", statement: "θ = π/3." },
            ],
            steps: [{ reasoning: "θ = π/3.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) π/3.",
          },
        },
        {
          id: "cipum-u6-c2-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The nth roots of unity are solutions of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "z^n = 1" },
              { id: "b", text: "z^n = 0" },
              { id: "c", text: "z = 1" },
              { id: "d", text: "z^n = −1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roots of unity",
                statement: "z^n = 1.",
              },
            ],
            steps: [{ reasoning: "z^n = 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) z^n = 1.",
          },
        },
        {
          id: "cipum-u6-c2-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Roots of unity lie on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unit circle, equally spaced" },
              { id: "b", text: "Real axis" },
              { id: "c", text: "Imaginary axis" },
              { id: "d", text: "Random positions" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roots of unity",
                statement: "Unit circle, equally spaced.",
              },
            ],
            steps: [
              {
                reasoning: "Unit circle, equally spaced.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unit circle.",
          },
        },
        {
          id: "cipum-u6-c2-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "z = 3 cis(π/2) in Cartesian form is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3i" },
              { id: "b", text: "3" },
              { id: "c", text: "3 + 3i" },
              { id: "d", text: "−3i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "3(cos π/2 + i sin π/2) = 3i.",
              },
            ],
            steps: [{ reasoning: "= 3i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3i.",
          },
        },
        {
          id: "cipum-u6-c2-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "z = 2 cis(π) in Cartesian form is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−2" },
              { id: "b", text: "2" },
              { id: "c", text: "2i" },
              { id: "d", text: "−2i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "2(cos π + i sin π) = −2.",
              },
            ],
            steps: [{ reasoning: "= −2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −2.",
          },
        },
        {
          id: "cipum-u6-c2-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Polar form of z = 1 + i is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "√2 cis(π/4)" },
              { id: "b", text: "2 cis(π/4)" },
              { id: "c", text: "√2 cis(π/2)" },
              { id: "d", text: "2 cis(π/2)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cartesian→Polar",
                statement: "r=√2, θ=π/4.",
              },
            ],
            steps: [{ reasoning: "√2 cis(π/4).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) √2 cis(π/4).",
          },
        },
        {
          id: "cipum-u6-c2-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiplication in polar form: (r₁ cis θ₁)(r₂ cis θ₂) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "r₁r₂ cis(θ₁+θ₂)" },
              { id: "b", text: "r₁r₂ cis(θ₁−θ₂)" },
              { id: "c", text: "(r₁+r₂) cis(θ₁+θ₂)" },
              { id: "d", text: "r₁r₂ cis(θ₁θ₂)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar mult",
                statement: "r₁r₂ cis(θ₁+θ₂).",
              },
            ],
            steps: [
              {
                reasoning: "Moduli multiply, args add.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) r₁r₂ cis(θ₁+θ₂).",
          },
        },
        {
          id: "cipum-u6-c2-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Division in polar form: (r₁ cis θ₁)/(r₂ cis θ₂) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(r₁/r₂) cis(θ₁−θ₂)" },
              { id: "b", text: "(r₁/r₂) cis(θ₁+θ₂)" },
              { id: "c", text: "r₁r₂ cis(θ₁−θ₂)" },
              { id: "d", text: "(r₁/r₂) cis(θ₁θ₂)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar div",
                statement: "(r₁/r₂) cis(θ₁−θ₂).",
              },
            ],
            steps: [
              {
                reasoning: "Moduli divide, args subtract.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) (r₁/r₂) cis(θ₁−θ₂).",
          },
        },
        {
          id: "cipum-u6-c2-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "(cis(π/6))⁶ =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cis(π) = −1" },
              { id: "b", text: "cis(π/36)" },
              { id: "c", text: "cis(π/3)" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "De Moivre",
                statement: "(cis θ)^n = cis(nθ) → cis(π).",
              },
            ],
            steps: [
              {
                reasoning: "cis(6·π/6) = cis(π) = −1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) −1.",
          },
        },
        {
          id: "cipum-u6-c2-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cube roots of unity are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1, cis(2π/3), cis(4π/3)" },
              { id: "b", text: "1, −1" },
              { id: "c", text: "1, i, −i" },
              { id: "d", text: "Only 1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Roots of unity",
                statement: "cis(2πk/3), k=0,1,2.",
              },
            ],
            steps: [
              {
                reasoning: "1, cis(2π/3), cis(4π/3).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Three roots.",
          },
        },
        {
          id: "cipum-u6-c2-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sum of all nth roots of unity (n > 1) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "n" },
              { id: "d", text: "−1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sum of roots",
                statement: "Sum = 0.",
              },
            ],
            steps: [
              { reasoning: "Symmetric → sum = 0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 0.",
          },
        },
        {
          id: "cipum-u6-c2-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "cis(−θ) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cos θ − i sin θ" },
              { id: "b", text: "cos θ + i sin θ" },
              { id: "c", text: "−cos θ + i sin θ" },
              { id: "d", text: "−cos θ − i sin θ" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "cis(−θ)",
                statement: "cos θ − i sin θ.",
              },
            ],
            steps: [
              { reasoning: "cis(−θ) = conjugate.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) cos θ − i sin θ.",
          },
        },
        {
          id: "cipum-u6-c2-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert z = 2 cis(π/3) to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar→Cartesian",
                statement: "x = r cos θ, y = r sin θ.",
              },
            ],
            steps: [
              {
                reasoning: "x = 2cos(π/3) = 1, y = 2sin(π/3) = √3.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "z = 1 + √3 i.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "z = 1 + √3 i.",
          },
        },
        {
          id: "cipum-u6-c2-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State De Moivre's theorem and its use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "De Moivre",
                statement: "Powers of complex numbers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(cis θ)^n = cis(nθ) — or (r cis θ)^n = r^n cis(nθ).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Used to find powers and roots of complex numbers easily.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(r cis θ)^n = r^n cis(nθ).",
          },
        },
        {
          id: "cipum-u6-c2-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why polar form makes powers easier than Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polar advantage",
                statement: "Multiply modulus, add argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cartesian multiplication is complex binomial expansion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Polar: modulus raised to n, argument multiplied by n — simple.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "De Moivre's theorem gives direct formula.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Modulus^n, argument×n — much simpler.",
          },
        },
        {
          id: "cipum-u6-c2-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use De Moivre to find (1 + i)⁸.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "De Moivre", statement: "Polar power." },
            ],
            steps: [
              { reasoning: "1 + i = √2 cis(π/4).", marks: 1, markCode: "M" },
              {
                reasoning: "(√2)⁸ = 2⁴ = 16; 8·π/4 = 2π.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(1+i)⁸ = 16 cis(2π) = 16.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 16 (real).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16.",
          },
        },
        {
          id: "cipum-u6-c2-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "cis(π/2) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "i" },
              { id: "b", text: "−1" },
              { id: "c", text: "−i" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "cis values",
                statement: "cis(π/2) = cos π/2 + i sin π/2 = i.",
              },
            ],
            steps: [{ reasoning: "= i.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) i.",
          },
        },
        {
          id: "cipum-u6-c2-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the modulus and argument of z = −1 − i.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polar conversion",
                statement: "r = √2, θ = −3π/4.",
              },
            ],
            steps: [
              {
                reasoning:
                  "r = √(1+1) = √2; θ = arctan(−1/−1) in third quadrant = −3π/4 (or 5π/4).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Principal arg = −3π/4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "√2 cis(−3π/4).",
          },
        },
        {
          id: "cipum-u6-c2-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the geometric meaning of De Moivre's theorem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric De Moivre",
                statement: "Repeated rotation+scaling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiplying by z = rotation by arg(z) + scaling by |z|.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z^n = n repeated rotations and scalings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: modulus^n, argument×n — matches formula.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Repeated rotation + scaling.",
          },
        },
        {
          id: "cipum-u6-c2-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "cis(π) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "−1" },
              { id: "b", text: "1" },
              { id: "c", text: "i" },
              { id: "d", text: "−i" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "cis values", statement: "cis(π) = −1." },
            ],
            steps: [{ reasoning: "cis(π) = −1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) −1.",
          },
        },
        {
          id: "cipum-u6-c2-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Express z = −2i in polar form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cartesian→Polar",
                statement: "r=2, θ=−π/2.",
              },
            ],
            steps: [
              {
                reasoning: "r = 2; point (0,−2) → θ = −π/2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "z = 2 cis(−π/2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 cis(−π/2).",
          },
        },
        {
          id: "cipum-u6-c2-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find all fourth roots of 16.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Roots", statement: "z⁴ = 16." },
            ],
            steps: [
              {
                reasoning:
                  "16 = 16 cis(0). Fourth roots: modulus 16^(1/4) = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Arguments: 0, π/2, π, 3π/2 (i.e., 2πk/4).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "z = 2 cis(0), 2 cis(π/2), 2 cis(π), 2 cis(3π/2).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "z = 2, 2i, −2, −2i.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "±2, ±2i.",
          },
        },
        {
          id: "cipum-u6-c2-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the advantage of Euler form re^(iθ)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Euler form",
                statement: "Compact exponential.",
              },
            ],
            steps: [
              {
                reasoning: "Compact: re^(iθ) instead of r(cosθ + i sinθ).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiplication = add exponents; powers = multiply exponent — very clean.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compact + easy operations.",
          },
        },
      ],
    },
  ],
};
