import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m8-u4-lesson-4-1",
  code: "4-1",
  title: "Capstone: Numbers, Exponents, and Linear Equations",
  goal: "I CAN work with irrational numbers, exponents, and linear equations to solve real problems.",
  standards: ["8.NS.A.1", "8.EE.A.1", "8.EE.B.5", "8.EE.B.6"],
  vocabulary: [
    {
      term: "Irrational number",
      definition:
        "A number that cannot be written as a ratio of integers, like $\\pi$ or $\\sqrt{2}$.",
    },
    {
      term: "Scientific notation",
      definition: "Writing numbers as $a \\times 10^n$ where $1 \\le a < 10$.",
    },
    {
      term: "Exponent",
      definition:
        "The power a base is raised to, indicating repeated multiplication.",
    },
    {
      term: "Linear equation",
      definition:
        "An equation where the variable appears only to the first power.",
    },
    {
      term: "Slope",
      definition:
        "The rate of change of a line: $m = \\frac{\\text{rise}}{\\text{run}}$.",
    },
    {
      term: "Solution",
      definition: "The value of the variable that makes an equation true.",
    },
    { term: "Coefficient", definition: "The number multiplying a variable." },
    {
      term: "Constant",
      definition: "A fixed number in an expression or equation.",
    },
  ],
  concepts: [
    {
      id: "m8-u4-exponents",
      title: "Exponents and scientific notation",
      skill: "Apply exponent rules and scientific notation to real quantities.",
      lesson: {
        sections: [
          {
            heading: "Exponent rules",
            body: "- $a^m \\times a^n = a^{m+n}$\n- $a^m \\div a^n = a^{m-n}$\n- $(a^m)^n = a^{mn}$\n- $a^0 = 1$ (for $a \\ne 0$)\n- $a^{-n} = \\frac{1}{a^n}$",
          },
          {
            heading: "Scientific notation",
            body: "Numbers like $3.2 \\times 10^6$ are easier to work with than $3,200,000$. To convert: move decimal until one digit before it, count places for exponent. Negative exponent = small number.",
          },
          {
            heading: "Real applications",
            body: "Distance to Sun ~$1.5 \\times 10^{11}$ m; a virus ~$1 \\times 10^{-7}$ m; national debt ~$3 \\times 10^{13}$ dollars. Scientific notation makes extreme scales manageable.",
          },
        ],
        keyFormulas: [
          {
            name: "Exponent product",
            statement: "$a^m \\times a^n = a^{m+n}$",
          },
          {
            name: "Scientific notation",
            statement: "$a \\times 10^n$, $1 \\le a < 10$",
          },
        ],
        workedExample: {
          problem:
            "Simplify $2^3 \\times 2^4$ and write $45,000$ in scientific notation.",
          solution:
            "$2^3 \\times 2^4 = 2^7 = 128$; $45,000 = 4.5 \\times 10^4$.",
        },
      },
      questions: [
        {
          id: "m8-u4-exponents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $5^3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$125$" },
              { id: "c", text: "$75$" },
              { id: "d", text: "$243$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exponent",
                statement: "$5^3 = 5 \\times 5 \\times 5$.",
              },
            ],
            steps: [{ reasoning: "$5^3 = 125$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 125",
            commonErrors: ["Multiplying base by exponent."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-exponents-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.00032$ in scientific notation.",
          response: {
            type: "numeric",
            parts: [{ label: "Exponent", answer: -4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scientific notation",
                statement: "$a \\times 10^n$, move decimal, count places.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$0.00032 = 3.2 \\times 10^{-4}$ — decimal moved 4 places.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Exponent is $-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.2 \\times 10^{-4}$",
            commonErrors: ["Wrong sign for negative exponent."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m8-u4-exponents-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A computer has $2^{30}$ bytes of memory. A file is $2^{20}$ bytes. How many files fit? Express as a power of 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponent division",
                statement: "$a^m \\div a^n = a^{m-n}$",
              },
              {
                kind: "principle",
                name: "Powers of same base",
                statement: "Divide by subtracting exponents.",
              },
            ],
            steps: [
              {
                reasoning: "Files $= 2^{30} \\div 2^{20}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 2^{30-20} = 2^{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$2^{10} = 1024$ files.", marks: 1, markCode: "A" },
              {
                reasoning: "Answer: $2^{10} = 1024$ files.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2^{10} = 1024$ files",
            commonErrors: ["Subtracting bases instead of exponents."],
            examinerNote: "M2, A2.",
          },
        },
        {
          id: "m8-u4-exponents-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The distance to the nearest star (Proxima Centauri) is about $4 \\times 10^{13}$ km. Light travels $3 \\times 10^5$ km/s.",
          parts: [
            {
              label: "a",
              prompt:
                "How many seconds does light take to travel that distance?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Convert to years (1 year ≈ $3.15 \\times 10^7$ seconds).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is scientific notation essential here?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If a spacecraft travels at $1 \\times 10^4$ km/s, how many years to reach it?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$t = d/v$" },
              {
                kind: "principle",
                name: "Scientific notation",
                statement: "Makes extreme numbers manageable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$t = (4 \\times 10^{13})/(3 \\times 10^5) = (4/3) \\times 10^8 \\approx 1.33 \\times 10^8$ s.",
                working: "4e13/3e5",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: $\\approx 1.33 \\times 10^8$ seconds.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$1.33 \\times 10^8 / 3.15 \\times 10^7 \\approx 4.2$ years.",
                working: "1.33e8/3.15e7",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: $\\approx 4.2$ years (light travel time).",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Numbers are astronomically large — scientific notation prevents counting errors.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Makes multiplication/division manageable via exponent rules.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "$t = 4 \\times 10^{13} / 10^4 = 4 \\times 10^9$ s $= 4 \\times 10^9/3.15 \\times 10^7 \\approx 127$ years.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 1.33×10⁸ s (b) ~4.2 years (c) handles extreme scales (d) ~127 years.",
            commonErrors: ["Dividing coefficients and exponents incorrectly."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-linear",
      title: "Linear equations and slope",
      skill: "Solve linear equations and interpret slope in real contexts.",
      lesson: {
        sections: [
          {
            heading: "Solving linear equations",
            body: "Isolate the variable: distribute, combine like terms, move variable terms to one side, constants to other, divide by coefficient. Check by substituting back.",
          },
          {
            heading: "Slope meaning",
            body: "$m = \\frac{\\Delta y}{\\Delta x}$ — rise over run. Positive slope: line goes up; negative: goes down; zero: horizontal; undefined: vertical. In context: slope is rate of change ($\\$/$ hour, miles/hour).",
          },
          {
            heading: "Real applications",
            body: "Phone plans: $y = mx + b$ where $m$ = per-unit cost, $b$ = base fee. Distance-time graphs: slope = speed. Cost-revenue: slope of each line compared for profit.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$m = \\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Linear equation", statement: "$y = mx + b$" },
        ],
        workedExample: {
          problem: "Solve $3x - 7 = 2x + 5$.",
          solution: "$3x - 2x = 5 + 7$ → $x = 12$.",
        },
      },
      questions: [
        {
          id: "m8-u4-linear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the slope of the line through (1, 2) and (3, 8)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope",
                statement: "$m = (8-2)/(3-1) = 6/2 = 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = \\frac{8-2}{3-1} = \\frac{6}{2} = 3$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 3",
            commonErrors: ["Dividing wrong differences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-linear-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x + 3 = 18$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Two-step equation",
                statement: "Subtract then divide.",
              },
            ],
            steps: [
              { reasoning: "$5x = 15$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$",
            commonErrors: ["Dividing 18 by 5 first."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m8-u4-linear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A taxi charges $\\$2.50$ base plus $\\$1.80$/mile. Write an equation for cost $C$ after $m$ miles, then find cost for 12 miles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linear model",
                statement: "$C = 1.80m + 2.50$.",
              },
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Slope = rate, intercept = base fee.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$C = 1.80m + 2.50$ — slope $1.80$, intercept $2.50$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$C = 1.80(12) + 2.50 = 21.60 + 2.50$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 24.10$.", marks: 1, markCode: "M" },
              { reasoning: "Cost: $\\$24.10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 1.80m + 2.50$; $\\$24.10$ for 12 miles",
            commonErrors: ["Swapping slope and intercept."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m8-u4-linear-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two phone plans: Plan A is $\\$40$/month with 10 GB included, then $\\$5$/GB over. Plan B is $\\$25$/month with $\\$8$/GB for all usage.",
          parts: [
            {
              label: "a",
              prompt: "Write cost equations for each plan (x = GB used).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "For a user with 8 GB, which is cheaper?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "For a user with 15 GB, which is cheaper?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "At what usage are the plans equal?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Piecewise function",
                statement: "Plan A changes rate after 10 GB.",
              },
              {
                kind: "principle",
                name: "Comparison",
                statement: "Evaluate both and compare.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plan A: $40$ if $x \\le 10$; $40 + 5(x-10)$ if $x > 10$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Plan B: $25 + 8x$.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "At 8 GB: A = $40$; B = $25 + 64 = 89$. Plan A cheaper.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "At 15 GB: A = $40 + 5(5) = 65$; B = $25 + 120 = 145$. Plan A cheaper.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Plan A still cheaper by $80$.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "For $x > 10$: $40 + 5(x-10) = 25 + 8x$ → $5x - 10 = 8x - 15$ → $x = 5/3$ — invalid (not > 10).",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "For $x \\le 10$: $40 = 25 + 8x$ → $x = 15/8 = 1.875$ GB.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) A: piecewise; B: $25+8x$ (b) A (c) A (d) 1.875 GB.",
            commonErrors: [
              "Forgetting Plan A's piecewise nature; solving without checking domain.",
            ],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-geometry",
      title: "Pythagorean Theorem and Volume",
      skill:
        "Apply the Pythagorean Theorem and volume formulas to real problems.",
      lesson: {
        sections: [
          {
            heading: "Pythagorean Theorem",
            body: "For right triangles: $a^2 + b^2 = c^2$ where $c$ is hypotenuse. Use to find missing side or check if triangle is right. Applications: ladders, distances, diagonals.",
          },
          {
            heading: "Volume formulas",
            body: "- **Prism**: $V = Bh$ (base area × height)\n- **Cylinder**: $V = \\pi r^2 h$\n- **Cone**: $V = \\frac{1}{3}\\pi r^2 h$\n- **Sphere**: $V = \\frac{4}{3}\\pi r^3$\n- **Pyramid**: $V = \\frac{1}{3}Bh$",
          },
          {
            heading: "Surface area",
            body: "- **Rectangular prism**: $SA = 2(lw + lh + wh)$\n- **Cylinder**: $SA = 2\\pi r^2 + 2\\pi rh$\n- **Sphere**: $SA = 4\\pi r^2$",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean", statement: "$a^2 + b^2 = c^2$" },
          { name: "Cylinder volume", statement: "$V = \\pi r^2 h$" },
        ],
        workedExample: {
          problem:
            "A ladder 5 m long leans against a wall, base 3 m from wall. How high does it reach?",
          solution:
            "$5^2 = 3^2 + h^2$ → $25 = 9 + h^2$ → $h^2 = 16$ → $h = 4$ m.",
        },
      },
      questions: [
        {
          id: "m8-u4-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right triangle has legs 6 and 8. What is the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$48$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean",
                statement: "$6^2 + 8^2 = 36 + 64 = 100 = c^2$, so $c = 10$.",
              },
            ],
            steps: [
              { reasoning: "$c = \\sqrt{100} = 10$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 10",
            commonErrors: ["Adding legs instead of squares."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "m8-u4-geometry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the volume of a sphere with radius 3 cm. Use $\\pi \\approx 3.14$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Volume", answer: 113.04, tolerance: 0.01, unit: "cm³" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V = \\frac{4}{3} \\times 3.14 \\times 27 = 113.04$ cm³.",
                working: "4/3*3.14*27",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: $113.04$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$113.04$ cm³",
            commonErrors: ["Using $r^2$ instead of $r^3$."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m8-u4-geometry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular box is 10 cm × 6 cm × 4 cm. Find its surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangular prism SA",
                statement: "$SA = 2(lw + lh + wh)$",
              },
            ],
            steps: [
              {
                reasoning: "$lw = 60$, $lh = 40$, $wh = 24$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$SA = 2(60 + 40 + 24) = 2 \\times 124$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 248$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $248$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$248$ cm²",
            commonErrors: ["Forgetting to double or missing a face pair."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m8-u4-geometry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cone has radius 4 cm and height 9 cm. Its volume is $\\frac{1}{3}\\pi r^2 h$.",
          parts: [
            {
              label: "a",
              prompt: "Find the slant height using the Pythagorean Theorem.",
              marks: 3,
            },
            { label: "b", prompt: "Calculate the volume.", marks: 3 },
            {
              label: "c",
              prompt:
                "Calculate lateral surface area ($\\pi r l$ where $l$ is slant height).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare cone and cylinder with same r and h — what fraction is cone's volume?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean",
                statement: "$l = \\sqrt{r^2 + h^2}$",
              },
              {
                kind: "principle",
                name: "Cone vs cylinder",
                statement: "Cone = 1/3 cylinder volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$l = \\sqrt{16 + 81} = \\sqrt{97} \\approx 9.85$ cm.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: $\\approx 9.85$ cm.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$V = \\frac{1}{3} \\times 3.14 \\times 16 \\times 9 = \\frac{1}{3} \\times 451.36$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$\\approx 150.45$ cm³.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: $\\approx 150.45$ cm³.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$SA_{lateral} = \\pi \\times 4 \\times 9.85 \\approx 123.7$ cm².",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Cone is 1/3 of cylinder — the $\\frac{1}{3}$ factor in formula.",
                marks: 1,
                markCode: "B",
                part: "d",
              },
              {
                reasoning:
                  "Same base and height: cone holds one-third the volume.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) ~9.85 cm (b) ~150.45 cm³ (c) ~123.7 cm² (d) 1/3 of cylinder.",
            commonErrors: ["Using h instead of slant height for lateral area."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
