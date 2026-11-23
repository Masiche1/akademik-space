import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m8-u8-lesson-8-1",
  code: "8-1",
  title: "The Pythagorean Theorem",
  goal: "I CAN apply the Pythagorean Theorem to find missing side lengths in right triangles and solve real-world problems.",
  standards: ["8.G.B.6", "8.G.B.7", "8.G.B.8"],
  vocabulary: [
    {
      term: "Right triangle",
      definition: "A triangle with one 90-degree angle.",
    },
    {
      term: "Hypotenuse",
      definition: "The side opposite the right angle; the longest side.",
    },
    { term: "Legs", definition: "The two sides that form the right angle." },
    {
      term: "Pythagorean Theorem",
      definition: "$a^2 + b^2 = c^2$ where $c$ is hypotenuse.",
    },
    {
      term: "Converse",
      definition: "If $a^2 + b^2 = c^2$, then the triangle is right.",
    },
    {
      term: "Distance formula",
      definition: "Application of Pythagorean Theorem to coordinates.",
    },
  ],
  concepts: [
    {
      id: "m8-u8-pythagorean-basic",
      title: "Basic Pythagorean Theorem",
      skill:
        "Find missing side lengths in right triangles using $a^2 + b^2 = c^2$.",
      lesson: {
        sections: [
          {
            heading: "The theorem",
            body: "In a right triangle, $a^2 + b^2 = c^2$ where $a$ and $b$ are legs, $c$ is hypotenuse. To find hypotenuse: $c = \\sqrt{a^2 + b^2}$. To find leg: $a = \\sqrt{c^2 - b^2}$.",
          },
          {
            heading: "Finding hypotenuse",
            body: "For legs $3$ and $4$: $c = \\sqrt{9 + 16} = \\sqrt{25} = 5$. For legs $5$ and $12$: $c = \\sqrt{25 + 144} = \\sqrt{169} = 13$.",
          },
          {
            heading: "Finding legs",
            body: "For hypotenuse $13$ and leg $5$: $a = \\sqrt{169 - 25} = \\sqrt{144} = 12$. For hypotenuse $10$ and leg $6$: $b = \\sqrt{100 - 36} = \\sqrt{64} = 8$.",
          },
        ],
        keyFormulas: [
          { name: "Theorem", statement: "$a^2 + b^2 = c^2$" },
          { name: "Hypotenuse", statement: "$c = \\sqrt{a^2 + b^2}$" },
          { name: "Leg", statement: "$a = \\sqrt{c^2 - b^2}$" },
        ],
        workedExample: {
          problem: "Find hypotenuse of right triangle with legs $6$ and $8$.",
          solution: "$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$.",
        },
      },
      questions: [
        {
          id: "m8-u8-pythagorean-basic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the hypotenuse of a right triangle with legs $3$ and $4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$c = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
                evidence: "5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Adding legs instead of squares."],
          },
        },
        {
          id: "m8-u8-pythagorean-basic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing leg of a right triangle with hypotenuse $13$ and leg $5$.",
          response: { type: "numeric", parts: [{ label: "Leg", answer: 12 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = \\sqrt{169 - 25} = \\sqrt{144} = 12$.",
                working: "12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "m8-u8-pythagorean-basic-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find missing side for each right triangle.",
          parts: [
            {
              label: "a",
              prompt: "Legs $5$ and $12$; find hypotenuse",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Hypotenuse $10$, leg $6$; find other leg",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Legs $8$ and $15$; find hypotenuse",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$c = \\sqrt{25 + 144} = \\sqrt{169} = 13$.",
                evidence: "13",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$b = \\sqrt{100 - 36} = \\sqrt{64} = 8$.",
                evidence: "8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$c = \\sqrt{64 + 225} = \\sqrt{289} = 17$.",
                evidence: "17",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $13$ (b) $8$ (c) $17$",
            commonErrors: ["Not identifying hypotenuse correctly."],
          },
        },
        {
          id: "m8-u8-pythagorean-basic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find missing sides for each right triangle.",
          parts: [
            {
              label: "a",
              prompt: "Legs $7$ and $24$; find hypotenuse",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Hypotenuse $15$, leg $9$; find other leg",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Legs $20$ and $21$; find hypotenuse",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Hypotenuse $25$, leg $7$; find other leg",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Hypotenuse", answer: 25 },
              { label: "(b) Leg", answer: 12 },
              { label: "(c) Hypotenuse", answer: 29 },
              { label: "(d) Leg", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$c = \\sqrt{49 + 576} = \\sqrt{625} = 25$.",
                working: "25",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$b = \\sqrt{225 - 81} = \\sqrt{144} = 12$.",
                working: "12",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$c = \\sqrt{400 + 441} = \\sqrt{841} = 29$.",
                working: "29",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$b = \\sqrt{625 - 49} = \\sqrt{576} = 24$.",
                working: "24",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $25$ (b) $12$ (c) $29$ (d) $24$",
            commonErrors: ["In (d), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m8-u8-pythagorean-applications",
      title: "Pythagorean Theorem applications",
      skill:
        "Apply the theorem to real-world problems and coordinate geometry.",
      lesson: {
        sections: [
          {
            heading: "Real-world problems",
            body: "Ladder against wall: ladder $10$ ft, base $6$ ft from wall → height = $\\sqrt{100 - 36} = 8$ ft. Distance across rectangle: diagonal = $\\sqrt{l^2 + w^2}$.",
          },
          {
            heading: "Distance formula",
            body: "Distance between points $(x_1, y_1)$ and $(x_2, y_2)$: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. This is Pythagorean Theorem applied to coordinates.",
          },
          {
            heading: "Converse theorem",
            body: "If $a^2 + b^2 = c^2$, the triangle is right. For sides $5, 12, 13$: $25 + 144 = 169$ → right triangle. For $4, 5, 6$: $16 + 25 \\neq 36$ → not right.",
          },
        ],
        keyFormulas: [
          {
            name: "Distance",
            statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$",
          },
          { name: "Converse", statement: "$a^2 + b^2 = c^2$ → right triangle" },
          {
            name: "Real-world",
            statement: "Apply to ladders, distances, diagonals",
          },
        ],
        workedExample: {
          problem: "Find distance between $(1, 2)$ and $(4, 6)$.",
          solution:
            "$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
        },
      },
      questions: [
        {
          id: "m8-u8-pythagorean-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ladder is $10$ ft long and its base is $6$ ft from the wall. How high does it reach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ ft" },
              { id: "b", text: "$4$ ft" },
              { id: "c", text: "$16$ ft" },
              { id: "d", text: "$\\sqrt{136}$ ft" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$h = \\sqrt{100 - 36} = \\sqrt{64} = 8$ ft.",
                evidence: "8",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $8$ ft",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "m8-u8-pythagorean-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(0, 0)$ and $(3, 4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance formula",
                statement: "$d = \\sqrt{\\Delta x^2 + \\Delta y^2}$",
              },
            ],
            steps: [
              {
                reasoning: "$d = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Not applying distance formula correctly."],
          },
        },
        {
          id: "m8-u8-pythagorean-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Is a triangle with sides $5, 12, 13$ a right triangle?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find distance between $(1, 1)$ and $(4, 5)$",
              marks: 1,
            },
            {
              label: "c",
              prompt: "A rectangle is $6$ by $8$. Find diagonal length.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Converse",
                statement: "$a^2 + b^2 = c^2$ → right triangle.",
              },
              {
                kind: "formula",
                name: "Distance formula",
                statement: "$d = \\sqrt{\\Delta x^2 + \\Delta y^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$25 + 144 = 169 = 13^2$ → yes, right triangle.",
                evidence: "yes",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$d = \\sqrt{9 + 16} = 5$.",
                evidence: "5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$d = \\sqrt{36 + 64} = 10$.",
                evidence: "10",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Yes (b) $5$ (c) $10$",
            commonErrors: ["In (a), not checking converse."],
          },
        },
        {
          id: "m8-u8-pythagorean-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Is a triangle with sides $4, 5, 6$ a right triangle?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find distance between $(-1, 2)$ and $(3, -1)$",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A TV screen is $36$ inches wide and $20$ inches tall. Find diagonal.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A flagpole casts a $12$ ft shadow. If pole is $16$ ft tall, how far is the tip of shadow from base?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Converse",
                statement: "$a^2 + b^2 = c^2$ → right triangle.",
              },
              {
                kind: "formula",
                name: "Distance formula",
                statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$16 + 25 = 41 \\neq 36$ → no, not right triangle.",
                evidence: "no",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$d = \\sqrt{16 + 9} = 5$.",
                evidence: "5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$d = \\sqrt{1296 + 400} = \\sqrt{1696} \\approx 41.2$ inches.",
                evidence: "41.2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$d = \\sqrt{144 + 256} = \\sqrt{400} = 20$ ft.",
                evidence: "20",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) No (b) $5$ (c) $\\approx 41.2$ in (d) $20$ ft",
            commonErrors: ["In (d), not identifying right triangle."],
          },
        },
      ],
    },
    {
      id: "m8-u8-pythagorean-reverse",
      title: "Pythagorean triples and special triangles",
      skill: "Recognize Pythagorean triples and solve special right triangles.",
      lesson: {
        sections: [
          {
            heading: "Pythagorean triples",
            body: "Common triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$, $(20,21,29)$. Multiples also work: $(6,8,10)$, $(9,12,15)$, $(10,24,26)$.",
          },
          {
            heading: "Special triangles",
            body: "45-45-90: legs equal, hypotenuse = $\\text{leg} \\times \\sqrt{2}$. 30-60-90: sides in ratio $1 : \\sqrt{3} : 2$.",
          },
          {
            heading: "Irrational hypotenuses",
            body: "Not all right triangles have integer sides. For legs $1$ and $1$: $c = \\sqrt{2}$. For legs $2$ and $3$: $c = \\sqrt{13}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Triples",
            statement: "Integer solutions to $a^2 + b^2 = c^2$",
          },
          { name: "45-45-90", statement: "$c = a\\sqrt{2}$" },
          { name: "30-60-90", statement: "$1 : \\sqrt{3} : 2$" },
        ],
        workedExample: {
          problem: "Find hypotenuse of right triangle with legs $1$ and $1$.",
          solution: "$c = \\sqrt{1 + 1} = \\sqrt{2}$.",
        },
      },
      questions: [
        {
          id: "m8-u8-pythagorean-reverse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a Pythagorean triple?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 4, 5)$" },
              { id: "b", text: "$(2, 3, 4)$" },
              { id: "c", text: "$(1, 2, 3)$" },
              { id: "d", text: "$(5, 6, 7)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pythagorean triple",
                statement: "Integer solutions to $a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$9 + 16 = 25 = 5^2$ → $(3,4,5)$ is a triple.",
                evidence: "3,4,5",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $(3, 4, 5)$",
            commonErrors: ["Not checking $a^2 + b^2 = c^2$."],
          },
        },
        {
          id: "m8-u8-pythagorean-reverse-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a 45-45-90 triangle, if a leg is $5$, what is the hypotenuse?",
          response: {
            type: "numeric",
            parts: [{ label: "Hypotenuse", answer: 7.07 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "45-45-90",
                statement: "$c = a\\sqrt{2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$c = 5\\sqrt{2} \\approx 7.07$.",
                working: "7.07",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "7.07",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5\\sqrt{2} \\approx 7.07$",
            commonErrors: ["Not using $\\sqrt{2}$ factor."],
          },
        },
        {
          id: "m8-u8-pythagorean-reverse-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify which are Pythagorean triples.",
          parts: [
            { label: "a", prompt: "$(6, 8, 10)$", marks: 1 },
            { label: "b", prompt: "$(7, 24, 25)$", marks: 1 },
            { label: "c", prompt: "$(9, 10, 11)$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pythagorean triple",
                statement: "Integer solutions to $a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$36 + 64 = 100 = 10^2$ → yes.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$49 + 576 = 625 = 25^2$ → yes.",
                evidence: "yes",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$81 + 100 = 181 \\neq 121$ → no.",
                evidence: "no",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Yes (b) Yes (c) No",
            commonErrors: ["Not checking all triples."],
          },
        },
        {
          id: "m8-u8-pythagorean-reverse-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Is $(20, 21, 29)$ a Pythagorean triple?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "In 30-60-90 triangle, short leg is $4$. Find hypotenuse.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find hypotenuse of right triangle with legs $2$ and $2$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Is $(11, 60, 61)$ a Pythagorean triple?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pythagorean triple",
                statement: "Integer solutions to $a^2 + b^2 = c^2$.",
              },
              {
                kind: "formula",
                name: "30-60-90",
                statement: "$1 : \\sqrt{3} : 2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$400 + 441 = 841 = 29^2$ → yes.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Hypotenuse = $2 \\times$ short leg = $8$.",
                evidence: "8",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$c = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$.",
                evidence: "2sqrt2",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$121 + 3600 = 3721 = 61^2$ → yes.",
                evidence: "yes",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Yes (b) $8$ (c) $2\\sqrt{2}$ (d) Yes",
            commonErrors: ["In (b), not using ratio correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u8-volume",
      title: "Volume of cylinders, cones, and spheres",
      skill:
        "Calculate volume of three-dimensional figures and apply to real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Cylinder volume",
            body: "$V = \\pi r^2 h$ where $r$ = radius, $h$ = height. For $r = 3$, $h = 10$: $V = \\pi(9)(10) = 90\\pi \\approx 282.7$ cubic units.",
          },
          {
            heading: "Cone volume",
            body: "$V = \\frac{1}{3}\\pi r^2 h$. For $r = 4$, $h = 9$: $V = \\frac{1}{3}\\pi(16)(9) = 48\\pi \\approx 150.8$ cubic units.",
          },
          {
            heading: "Sphere volume",
            body: "$V = \\frac{4}{3}\\pi r^3$. For $r = 6$: $V = \\frac{4}{3}\\pi(216) = 288\\pi \\approx 904.8$ cubic units.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder", statement: "$V = \\pi r^2 h$" },
          { name: "Cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
          { name: "Sphere", statement: "$V = \\frac{4}{3}\\pi r^3$" },
        ],
        workedExample: {
          problem:
            "Find volume of cylinder with radius $5$ cm and height $12$ cm.",
          solution: "$V = \\pi(25)(12) = 300\\pi \\approx 942.5$ cm³.",
        },
      },
      questions: [
        {
          id: "m8-u8-volume-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a cylinder with radius $3$ cm and height $10$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90\\pi$ cm³" },
              { id: "b", text: "$30\\pi$ cm³" },
              { id: "c", text: "$300\\pi$ cm³" },
              { id: "d", text: "$\\pi$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\pi(9)(10) = 90\\pi$ cm³.",
                evidence: "90pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $90\\pi$ cm³",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "m8-u8-volume-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the volume of a sphere with radius $6$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 288 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\frac{4}{3}\\pi(216) = 288\\pi$ cm³.",
                working: "288\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "288",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$288\\pi$ cm³",
            commonErrors: ["Using $r^2$ instead of $r^3$."],
          },
        },
        {
          id: "m8-u8-volume-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find volumes for each solid.",
          parts: [
            { label: "a", prompt: "Cylinder: $r = 2$, $h = 5$", marks: 1 },
            { label: "b", prompt: "Cone: $r = 3$, $h = 4$", marks: 1 },
            { label: "c", prompt: "Sphere: $r = 3$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder",
                statement: "$V = \\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Cone",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\pi(4)(5) = 20\\pi$.",
                evidence: "20pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\frac{1}{3}\\pi(9)(4) = 12\\pi$.",
                evidence: "12pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V = \\frac{4}{3}\\pi(27) = 36\\pi$.",
                evidence: "36pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $20\\pi$ (b) $12\\pi$ (c) $36\\pi$",
            commonErrors: ["In (b), forgetting $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "m8-u8-volume-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find volumes for each solid.",
          parts: [
            { label: "a", prompt: "Cylinder: $r = 5$, $h = 8$", marks: 2 },
            { label: "b", prompt: "Cone: $r = 6$, $h = 10$", marks: 2 },
            { label: "c", prompt: "Sphere: $r = 4$", marks: 2 },
            { label: "d", prompt: "Cylinder: $r = 1$, $h = 100$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume ($\\pi$)", answer: 200 },
              { label: "(b) Volume ($\\pi$)", answer: 120 },
              { label: "(c) Volume ($\\pi$)", answer: 85.33 },
              { label: "(d) Volume ($\\pi$)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder",
                statement: "$V = \\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Cone",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\pi(25)(8) = 200\\pi$.",
                working: "200\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\frac{1}{3}\\pi(36)(10) = 120\\pi$.",
                working: "120\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$V = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi \\approx 85.33\\pi$.",
                working: "256/3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$V = \\pi(1)(100) = 100\\pi$.",
                working: "100\\pi",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $200\\pi$ (b) $120\\pi$ (c) $\\frac{256}{3}\\pi \\approx 85.33\\pi$ (d) $100\\pi$",
            commonErrors: ["In (c), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m8-u8-volume-applications",
      title: "Volume applications",
      skill:
        "Apply volume formulas to real-world problems including composite solids.",
      lesson: {
        sections: [
          {
            heading: "Real-world applications",
            body: "Volume is used for capacity (water tanks, fuel tanks), packaging (boxes, bottles), and construction (concrete, soil). Choose correct formula based on shape.",
          },
          {
            heading: "Composite solids",
            body: "For solids made of multiple shapes, calculate each volume separately and add. For a cylinder with a cone on top: $V = \\pi r^2 h_{cyl} + \\frac{1}{3}\\pi r^2 h_{cone}$.",
          },
          {
            heading: "Density problems",
            body: "Density = mass / volume. To find mass: $m = \\rho V$. To find volume: $V = \\frac{m}{\\rho}$. Units must be consistent.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "Add volumes of components" },
          { name: "Density", statement: "$\\rho = \\frac{m}{V}$" },
          { name: "Capacity", statement: "Volume determines how much fits" },
        ],
        workedExample: {
          problem:
            "A water tank is a cylinder with radius $3$ m and height $5$ m. Find capacity.",
          solution: "$V = \\pi(9)(5) = 45\\pi \\approx 141.4$ m³.",
        },
      },
      questions: [
        {
          id: "m8-u8-volume-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cylindrical tank has radius $2$ m and height $3$ m. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\pi$ m³" },
              { id: "b", text: "$6\\pi$ m³" },
              { id: "c", text: "$24\\pi$ m³" },
              { id: "d", text: "$\\pi$ m³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\pi(4)(3) = 12\\pi$ m³.",
                evidence: "12pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $12\\pi$ m³",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "m8-u8-volume-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cone has radius $3$ cm and height $8$ cm. What is its volume?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\frac{1}{3}\\pi(9)(8) = 24\\pi$ cm³.",
                working: "24\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$24\\pi$ cm³",
            commonErrors: ["Forgetting $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "m8-u8-volume-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Cylinder: $r = 4$, $h = 10$; find volume",
              marks: 1,
            },
            { label: "b", prompt: "Sphere: $r = 5$; find volume", marks: 1 },
            {
              label: "c",
              prompt: "Cone: $r = 2$, $h = 9$; find volume",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder",
                statement: "$V = \\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
              {
                kind: "formula",
                name: "Cone",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\pi(16)(10) = 160\\pi$.",
                evidence: "160pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$V = \\frac{4}{3}\\pi(125) = \\frac{500}{3}\\pi \\approx 166.7\\pi$.",
                evidence: "500/3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V = \\frac{1}{3}\\pi(4)(9) = 12\\pi$.",
                evidence: "12pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $160\\pi$ (b) $\\frac{500}{3}\\pi$ (c) $12\\pi$",
            commonErrors: ["In (b), arithmetic error."],
          },
        },
        {
          id: "m8-u8-volume-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A cylindrical silo has radius $4$ m and height $12$ m. Find capacity in m³.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A spherical water balloon has radius $10$ cm. Find volume.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A cone-shaped cup has radius $4$ cm and height $6$ cm. Find volume.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A composite solid is a cylinder ($r=3$, $h=8$) topped with a cone ($r=3$, $h=4$). Find total volume.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume (m³)", answer: 603.19 },
              { label: "(b) Volume ($\\pi$ cm³)", answer: 4188.79 },
              { label: "(c) Volume ($\\pi$ cm³)", answer: 32 },
              { label: "(d) Volume ($\\pi$)", answer: 96 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder",
                statement: "$V = \\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Sphere",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
              {
                kind: "formula",
                name: "Cone",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
              {
                kind: "skill",
                name: "Composite",
                statement: "Add component volumes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\pi(16)(12) = 192\\pi \\approx 603.19$ m³.",
                working: "192\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$V = \\frac{4}{3}\\pi(1000) = \\frac{4000}{3}\\pi \\approx 4188.79$ cm³.",
                working: "4000/3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V = \\frac{1}{3}\\pi(16)(6) = 32\\pi$ cm³.",
                working: "32\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Cylinder: $\\pi(9)(8) = 72\\pi$; cone: $\\frac{1}{3}\\pi(9)(4) = 12\\pi$; total = $72\\pi + 12\\pi = 84\\pi$.",
                working: "84\\pi",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $192\\pi \\approx 603.19$ m³ (b) $\\frac{4000}{3}\\pi \\approx 4188.79$ cm³ (c) $32\\pi$ cm³ (d) $84\\pi$",
            commonErrors: ["In (d), forgetting cone factor."],
          },
        },
      ],
    },
  ],
};
