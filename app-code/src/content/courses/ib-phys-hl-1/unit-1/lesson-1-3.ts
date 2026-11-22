import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "physhl-u1-lesson-1-3",
  code: "1-3",
  title: "Rotational Kinetic Energy and Rolling Motion",
  goal: "I CAN calculate rotational kinetic energy, apply energy conservation to rolling objects, and solve problems involving objects rolling without slipping down inclined planes.",
  standards: ["Paper 1", "Paper 2", "AHL A2"],
  vocabulary: [
    {
      term: "Rotational kinetic energy",
      definition:
        "The kinetic energy of a rotating object: $E_k = \\frac{1}{2}I\\omega^2$ — rotational analogue of $\\frac{1}{2}mv^2$.",
    },
    {
      term: "Rolling without slipping",
      definition:
        "Motion where the contact point is instantaneously at rest relative to the surface: $v = \\omega r$.",
    },
    {
      term: "Total kinetic energy of rolling object",
      definition:
        "Sum of translational and rotational KE: $E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
    },
    {
      term: "Angular impulse",
      definition:
        "The rotational analogue of impulse: $\\Delta L = \\tau_{avg} \\Delta t$ — change in angular momentum.",
    },
    {
      term: "Moment of inertia about axis",
      definition:
        "$I$ depends on the chosen rotation axis; the parallel axis theorem: $I = I_{cm} + Md^2$.",
    },
    {
      term: "Centre of mass",
      definition:
        "The point where the entire mass of a body can be considered to act for translational motion.",
    },
  ],
  concepts: [
    {
      id: "physhl-u1-rot-ke",
      title: "Rotational kinetic energy",
      skill:
        "Calculate rotational kinetic energy, apply energy conservation to rotating systems, and combine translational and rotational KE.",
      lesson: {
        sections: [
          {
            heading: "Rotational kinetic energy",
            body: "A rotating object has kinetic energy due to its rotation: $E_k = \\frac{1}{2}I\\omega^2$, the rotational analogue of translational $E_k = \\frac{1}{2}mv^2$. For an object both translating AND rotating (like a rolling ball), the total kinetic energy is the sum: $E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
          },
          {
            heading: "Energy conservation",
            body: "When energy is conserved (no friction losses), the total mechanical energy before equals after: gravitational PE converts to translational + rotational KE. For a rolling object down an incline: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Substituting $\\omega = v/r$ for rolling without slipping gives $v$ in terms of $h$.",
          },
          {
            heading: "Comparing objects",
            body: "Different objects have different fractions of energy in rotation vs translation. A hoop ($I = MR^2$) has more rotational KE than a disc ($I = \\frac{1}{2}MR^2$) for the same mass, radius and speed — so a hoop rolls slower down an incline than a disc of the same mass and radius.",
          },
        ],
        keyFormulas: [
          {
            name: "Rotational KE",
            statement: "$E_k = \\frac{1}{2}I\\omega^2$",
          },
          {
            name: "Total KE (rolling)",
            statement: "$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$",
          },
          {
            name: "Energy conservation",
            statement: "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$",
          },
        ],
        workedExample: {
          problem:
            "A solid disc ($I = \\frac{1}{2}MR^2$, $M = 2.0$ kg, $R = 0.30$ m) rolls without slipping at $v = 4.0$ m/s. Calculate its total kinetic energy.",
          solution:
            "$\\omega = v/R = 4.0/0.30 = 13.3$ rad/s. Translational KE $= \\frac{1}{2} \\times 2.0 \\times 16 = 16$ J. Rotational KE $= \\frac{1}{2} \\times 0.5 \\times 2.0 \\times 0.09 \\times 13.3^2 = 8$ J. Total = 24 J.",
        },
      },
      questions: [
        {
          id: "physhl-u1-rke-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The rotational kinetic energy of a spinning object is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E_k = I\\omega$" },
              { id: "b", text: "$E_k = \\tau\\theta$" },
              { id: "c", text: "$E_k = \\frac{1}{2}I\\omega^2$" },
              { id: "d", text: "$E_k = \\frac{1}{2}mv^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotational KE",
                statement: "$E_k = \\frac{1}{2}I\\omega^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rotational KE is the rotational analogue of $\\frac{1}{2}mv^2$ with $I$ replacing $m$ and $\\omega$ replacing $v$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $E_k = \\frac{1}{2}I\\omega^2$",
            commonErrors: [
              "Using $I\\omega$ (that's angular momentum, not energy).",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A hoop ($I = MR^2$) and a solid cylinder ($I = \\frac{1}{2}MR^2$) of the same mass and radius roll down an incline. Which reaches the bottom first and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "More rotational KE fraction → slower rolling; cylinder has less rotational KE.",
              },
            ],
            steps: [
              {
                reasoning: "Both have same $mgh$ available energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cylinder has smaller $I$ → less energy goes into rotation → more into translation → faster.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Cylinder reaches bottom first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cylinder — less rotational KE means faster translational speed.",
            commonErrors: [
              "Saying hoop is faster — more rotational inertia means slower rolling.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A solid sphere ($I = \\frac{2}{5}MR^2$, $M = 3.0$ kg, $R = 0.20$ m) rolls without slipping from rest down a 2.0 m high incline. Calculate its speed at the bottom ($g = 9.81$ m/s²).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/R$.",
              },
            ],
            steps: [
              {
                reasoning: "Set up energy equation.",
                working:
                  "mgh = \\frac{1}{2}mv^2 + \\frac{1}{2} \\times \\frac{2}{5}MR^2 \\times (v/R)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$.",
                working: "mgh = \\frac{7}{10}mv^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve for v: $v = \\sqrt{\\frac{10gh}{7}} = \\sqrt{\\frac{10 \\times 9.81 \\times 2.0}{7}}$.",
                working: "v = \\sqrt{28.0} = 5.29 m/s",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$v = 5.3$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 5.3$ m/s",
            commonErrors: [
              "Forgetting rotational KE — using only $mgh = \\frac{1}{2}mv^2$ gives wrong answer.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A yo-yo consists of two discs ($I = \\frac{1}{2}MR^2$) of total mass 0.20 kg and radius 0.050 m, falling while the string unwinds.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the energy equation for the falling yo-yo (translational + rotational KE = loss of GPE).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Derive an expression for the speed $v$ after falling height $h$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate $v$ after falling 1.0 m.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/R$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "For yo-yo $I = \\frac{1}{2}MR^2$, $\\omega = v/R$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Substitute: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2} \\times \\frac{1}{2}MR^2 \\times v^2/R^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$v = \\sqrt{\\frac{4gh}{3}}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$v = \\sqrt{\\frac{4 \\times 9.81 \\times 1.0}{3}} = \\sqrt{13.08} = 3.62$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$v = 3.6$ m/s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Comparison: slower than free fall ($\\sqrt{2gh} = 4.43$ m/s) due to rotational KE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. (b) $v = \\sqrt{4gh/3}$. (c) 3.6 m/s.",
            commonErrors: [
              "Treating yo-yo as point mass — it has both translational and rotational KE.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The rotational kinetic energy of a rigid body spinning with angular velocity $\\omega$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E_k = I\\omega^2$" },
              { id: "b", text: "$E_k = \\frac{1}{2}I\\omega^2$" },
              { id: "c", text: "$E_k = I\\omega$" },
              { id: "d", text: "$E_k = \\frac{1}{2}I^2\\omega$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotational KE",
                statement:
                  "$E_k = \\frac{1}{2}I\\omega^2$ — analogue of $\\frac{1}{2}mv^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rotational KE mirrors translational KE with $I \\to m$ and $\\omega \\to v$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $E_k = \\frac{1}{2}I\\omega^2$",
            commonErrors: [
              "Using $I\\omega$ — that is angular momentum, not energy.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For an object that is both translating and rotating (such as a rolling ball), the total kinetic energy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only $\\frac{1}{2}I\\omega^2$" },
              { id: "b", text: "only $\\frac{1}{2}mv^2$" },
              { id: "c", text: "$mv^2 + I\\omega^2$" },
              { id: "d", text: "$\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Total KE",
                statement:
                  "Translational and rotational KE add: $E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A rolling object has KE from translation of the centre of mass AND rotation about it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** sum of translational and rotational KE",
            commonErrors: [
              "Counting only translational KE — rotation contributes too.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Objects of the same mass and radius are released from rest at the top of the same incline. Which reaches the bottom with the greatest speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "solid cylinder ($I = \\frac{1}{2}MR^2$)" },
              { id: "b", text: "rod about its end ($I = \\frac{1}{3}ML^2$)" },
              { id: "c", text: "hoop ($I = MR^2$)" },
              { id: "d", text: "solid sphere ($I = \\frac{2}{5}MR^2$)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "Smaller $I$ → smaller fraction of energy in rotation → faster translational speed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For fixed $mgh$, $v = \\sqrt{2gh/(1 + I/MR^2)}$ — smaller $I/MR^2$ gives larger $v$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sphere has smallest $I/MR^2 = 0.4$ → fastest. Choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** solid sphere",
            commonErrors: [
              "Thinking heavier rotation helps — more rotational inertia means slower rolling.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an object rolling without slipping, the angular velocity $\\omega$ is related to its linear speed $v$ and radius $r$ by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\omega = vr$" },
              { id: "b", text: "$\\omega = v^2/r$" },
              { id: "c", text: "$\\omega = v/r$" },
              { id: "d", text: "$\\omega = r/v$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement: "$v = \\omega r \\Rightarrow \\omega = v/r$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The rim speed $\\omega r$ equals the centre-of-mass speed $v$ when rolling without slipping.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\omega = v/r$",
            commonErrors: [
              "Multiplying instead of dividing — larger radius means smaller $\\omega$ for the same $v$.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A wheel has moment of inertia 0.40 kg m$^2$ and spins at 15 rad s$^{-1}$. Calculate its rotational kinetic energy.",
          parts: [{ label: "a", prompt: "Rotational KE in joules.", marks: 3 }],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "J", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotational KE",
                statement: "$E_k = \\frac{1}{2}I\\omega^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Apply $E_k = \\frac{1}{2}I\\omega^2 = \\frac{1}{2} \\times 0.40 \\times 15^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$E_k = \\frac{1}{2} \\times 0.40 \\times 225 = 45$ J.",
                working: "E_k = 0.5 \\times 0.40 \\times 225",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$E_k = 45$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "45 J",
            commonErrors: [
              "Forgetting the factor of $\\frac{1}{2}$ or squaring $I$ instead of $\\omega$.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A solid disc of mass 2.0 kg and radius 0.20 m rolls without slipping at $v = 5.0$ m/s. Calculate its total kinetic energy ($I = \\frac{1}{2}MR^2$).",
          parts: [
            { label: "a", prompt: "Total kinetic energy in joules.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 37.5, unit: "J", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total KE",
                statement:
                  "$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/r$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Translational KE $= \\frac{1}{2} \\times 2.0 \\times 25 = 25$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$I = \\frac{1}{2} \\times 2.0 \\times 0.04 = 0.04$ kg m$^2$; $\\omega = 5.0/0.20 = 25$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rotational KE $= \\frac{1}{2} \\times 0.04 \\times 625 = 12.5$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Total $= 25 + 12.5 = 37.5$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "37.5 J",
            commonErrors: [
              "Using only translational KE (25 J) — the rotational part adds 12.5 J.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A solid cylinder ($I = \\frac{1}{2}MR^2$) rolls without slipping from rest down a rough incline through a vertical height of 1.5 m. The cylinder has radius 0.10 m. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its speed at the bottom.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate its angular velocity at the bottom.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.43, unit: "m s^-1", tolerance: 0.01 },
              { label: "b", answer: 44.3, unit: "rad s^-1", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/R$ → $v = \\sqrt{4gh/3}$ for a cylinder.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Energy: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$ → $v = \\sqrt{4gh/3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$v = \\sqrt{4 \\times 9.81 \\times 1.5/3} = \\sqrt{19.62}$.",
                working: "v = \\sqrt{19.62}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 4.43$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\omega = v/R = 4.43/0.10 = 44.3$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 4.43 m s⁻¹. (b) 44.3 rad s⁻¹.",
            commonErrors: [
              "Using $v = \\sqrt{2gh}$ — that ignores rotational KE.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A hoop of mass 1.0 kg and radius 0.20 m rolls without slipping at $v = 3.0$ m/s. Calculate its total kinetic energy ($I = MR^2$).",
          parts: [
            { label: "a", prompt: "Total kinetic energy in joules.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9, unit: "J", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total KE",
                statement:
                  "$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/R$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Translational KE $= \\frac{1}{2} \\times 1.0 \\times 9 = 4.5$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$\\omega = 3.0/0.20 = 15$ rad s$^{-1}$ and $I = 1.0 \\times 0.04 = 0.04$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rotational KE $= \\frac{1}{2} \\times 0.04 \\times 225 = 4.5$ J — equal to translational for a hoop.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Total $= 4.5 + 4.5 = 9$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 J",
            commonErrors: [
              "Assuming the hoop's rotational KE equals a disc's — hoop has $I = MR^2$, twice the disc value.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A solid sphere of mass 2.0 kg and radius 0.10 m ($I = \\frac{2}{5}MR^2$) rolls without slipping from rest down a height of 0.80 m. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its speed at the bottom.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate its total kinetic energy at the bottom.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.35, unit: "m s^-1", tolerance: 0.01 },
              { label: "b", answer: 15.7, unit: "J", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$mgh = \\frac{1}{2}mv^2(1 + I/MR^2)$; for sphere $v = \\sqrt{10gh/7}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$ → $v = \\sqrt{10gh/7}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$v = \\sqrt{10 \\times 9.81 \\times 0.80/7} = \\sqrt{11.21}$.",
                working: "v = \\sqrt{11.21}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 3.35$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Total KE equals lost GPE: $E_k = mgh = 2.0 \\times 9.81 \\times 0.80$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$E_k = 15.7$ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3.35 m s⁻¹. (b) 15.7 J.",
            commonErrors: [
              "Computing KE as $\\frac{1}{2}mv^2$ only — must include rotational term (or use $mgh$ directly).",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A solid cylinder ($I = \\frac{1}{2}MR^2$) rolls without slipping at speed $v$. What fraction of its total kinetic energy is rotational?",
          parts: [
            {
              label: "a",
              prompt: "Fraction of KE that is rotational.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.333, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy split",
                statement:
                  "Rotational KE $= \\frac{1}{2}I\\omega^2 = \\frac{1}{4}mv^2$ for a cylinder; translational $= \\frac{1}{2}mv^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Translational KE $= \\frac{1}{2}mv^2$; rotational KE $= \\frac{1}{2} \\times \\frac{1}{2}MR^2 \\times (v/R)^2 = \\frac{1}{4}mv^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Total $= \\frac{3}{4}mv^2$; fraction rotational $= (\\frac{1}{4})/(\\frac{3}{4}) = \\frac{1}{3}$.",
                working: "fraction = (1/4)/(3/4) = 1/3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Fraction $= 0.333$ (one third).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.333 (one third)",
            commonErrors: [
              "Quoting the rotational KE itself ($\\frac{1}{4}mv^2$) instead of the fraction of total.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A hoop and a solid cylinder of the same mass and radius are released together from rest at the top of the same incline. Explain, using energy considerations, why the cylinder reaches the bottom first.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "Larger $I$ sends a larger fraction of $mgh$ into rotation, leaving less for translation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both objects start with the same gravitational PE $mgh$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At the bottom, $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The hoop has $I = MR^2$ — twice the cylinder's $\\frac{1}{2}MR^2$ — so more energy goes into rotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less energy remains as translational KE $\\frac{1}{2}mv^2$, so the hoop's speed is smaller.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Therefore the cylinder reaches the bottom first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cylinder: smaller $I$ → less rotational KE → faster translation → arrives first.",
            commonErrors: [
              "Ignoring that both gain the same $mgh$ — the difference is how it splits.",
            ],
          },
        },
        {
          id: "physhl-u1-rke-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A solid cylinder of mass 5.0 kg and radius 0.20 m ($I = \\frac{1}{2}MR^2$) rolls without slipping down a vertical height of 2.0 m. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its speed at the bottom.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate its total kinetic energy at the bottom.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate its angular velocity at the bottom.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the result for $v$ does not depend on the mass or radius of the cylinder.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$; for cylinder $v = \\sqrt{4gh/3}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$mgh = \\frac{3}{4}mv^2$ → $v = \\sqrt{4gh/3} = \\sqrt{4 \\times 9.81 \\times 2.0/3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = \\sqrt{26.16}$.",
                working: "v = \\sqrt{26.16}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 5.11$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Total KE $= mgh = 5.0 \\times 9.81 \\times 2.0 = 98.1$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$E_k = 98.1$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\omega = v/R = 5.11/0.20 = 25.5$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\omega = 25.5$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$m$ cancels from both sides of the energy equation, and $R$ cancels via $\\omega = v/R$ — only $I/MR^2$ (shape) matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 5.11 m s⁻¹. (b) 98.1 J. (c) 25.5 rad s⁻¹. (d) $m$ and $R$ cancel — only shape matters.",
            commonErrors: [
              "Thinking a heavier cylinder rolls faster — speed depends only on height and shape.",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u1-rolling",
      title: "Rolling without slipping",
      skill:
        "Apply the condition $v = \\omega r$ to relate linear and angular quantities, and solve problems involving rolling objects on inclines and flat surfaces.",
      lesson: {
        sections: [
          {
            heading: "The rolling condition",
            body: "An object **rolls without slipping** when the contact point is instantaneously at rest relative to the surface. This requires $v = \\omega r$: the linear speed of the centre of mass equals the tangential speed at the rim. The angular velocity $\\omega$ is related to the linear speed by $\\omega = v/r$. This single condition links translational and rotational motion.",
          },
          {
            heading: "Forces on a rolling object",
            body: "For a rolling object on an incline: gravity component $mg\\sin\\theta$ down the slope, friction $f$ up the slope (necessary for rotation!). Friction does NO work because the contact point doesn't slide — it enables rolling but doesn't dissipate energy. Translational: $ma = mg\\sin\\theta - f$. Rotational: $\\tau = fR = I\\alpha$.",
          },
          {
            heading: "Energy approach",
            body: "The energy method is usually simpler: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ with $\\omega = v/R$. The result depends only on $I$ — not on mass, radius or angle of incline (as long as rolling without slipping is maintained).",
          },
        ],
        keyFormulas: [
          {
            name: "Rolling condition",
            statement: "$v = \\omega r$ or $\\omega = v/r$",
          },
          {
            name: "Rolling KE total",
            statement: "$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$",
          },
          {
            name: "Friction role",
            statement:
              "Static friction enables rolling; does no work (no slipping).",
          },
        ],
        workedExample: {
          problem:
            "A cylinder rolls without slipping with $v = 3.0$ m/s and $r = 0.10$ m. Find its angular velocity.",
          solution: "$\\omega = v/r = 3.0/0.10 = 30$ rad/s.",
        },
      },
      questions: [
        {
          id: "physhl-u1-roll-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an object rolling without slipping, the relationship between linear speed $v$ and angular velocity $\\omega$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$v = \\omega r$" },
              { id: "b", text: "$v = I\\omega$" },
              { id: "c", text: "$v = \\omega / r$" },
              { id: "d", text: "$v = \\omega r^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement: "$v = \\omega r$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rolling without slipping: rim speed equals centre speed → $v = \\omega r$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $v = \\omega r$",
            commonErrors: [
              "Reversing the relationship — larger $r$ means smaller $\\omega$ for same $v$.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why friction is necessary for a ball to roll without slipping down an incline, even though it does no work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Static friction in rolling",
                statement:
                  "Friction provides torque for rotation; static friction does no work (no slipping).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Friction up the slope provides the torque that spins the ball.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Without friction, ball would slide not roll.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Static friction does no work because contact point has zero velocity — enables rolling without energy loss.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Friction provides torque; does no work because no slipping.",
            commonErrors: [
              "Saying 'friction slows the ball' — static friction enables rolling without dissipating energy.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A solid cylinder ($I = \\frac{1}{2}MR^2$) and a hoop ($I = MR^2$) of the same mass roll down a 30° incline of length 5.0 m. Calculate the speed of each at the bottom ($g = 9.81$ m/s²).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$mgh = \\frac{1}{2}mv^2(1 + I/MR^2)$ → $v = \\sqrt{2gh/(1+I/MR^2)}$",
              },
            ],
            steps: [
              {
                reasoning: "Height $h = 5.0 \\sin 30° = 2.5$ m.",
                working: "h = 5.0 \\times 0.5 = 2.5 m",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cylinder: $v = \\sqrt{2 \\times 9.81 \\times 2.5/(1+0.5)} = \\sqrt{32.7} = 5.72$ m/s.",
                working: "v_cyl = \\sqrt{49.05/1.5} = 5.72 m/s",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hoop: $v = \\sqrt{49.05/(1+1)} = \\sqrt{24.5} = 4.95$ m/s.",
                working: "v_hoop = \\sqrt{49.05/2} = 4.95 m/s",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cylinder faster — less rotational inertia.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cylinder: 5.7 m/s; Hoop: 5.0 m/s.",
            commonErrors: [
              "Using same speed for both — different $I$ gives different speeds.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A solid sphere ($I = \\frac{2}{5}MR^2$, $M = 4.0$ kg, $R = 0.15$ m) rolls without slipping up a rough incline after being launched at $v = 6.0$ m/s.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the total kinetic energy of the sphere at launch.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the maximum height reached (energy conservation).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate the angular velocity at launch.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "Total KE = translational + rotational; conserved during rolling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\omega = v/R = 6.0/0.15 = 40$ rad/s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Translational KE $= \\frac{1}{2} \\times 4.0 \\times 36 = 72$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rotational KE $= \\frac{1}{2} \\times \\frac{2}{5} \\times 4.0 \\times 0.0225 \\times 1600 = 28.8$ J; total $= 101$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$mgh = E_k$ → $h = 101/(4.0 \\times 9.81) = 2.57$ m.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$h = 2.6$ m.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "All KE converts to GPE at max height.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "$\\omega = v/R = 6.0/0.15 = 40$ rad/s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\omega = 40$ rad/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) ~101 J. (b) 2.6 m. (c) 40 rad/s.",
            commonErrors: [
              "Ignoring rotational KE — would give h = 1.84 m instead of 2.6 m.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an object rolling without slipping, the velocity of the contact point relative to the ground is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "equal to $2v$" },
              { id: "b", text: "equal to $v$" },
              { id: "c", text: "instantaneously zero" },
              { id: "d", text: "equal to $\\omega r/2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling without slipping",
                statement:
                  "The contact point is instantaneously at rest relative to the surface.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No slipping means the contact point has zero velocity relative to the ground at each instant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** instantaneously zero",
            commonErrors: [
              "Thinking the contact point moves at speed $v$ — only the centre moves at $v$.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A ball rolls down a rough incline. The force of friction on the ball acts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "perpendicular to the slope" },
              { id: "b", text: "there is no friction when rolling" },
              {
                id: "c",
                text: "up the slope, providing the torque that spins the ball",
              },
              { id: "d", text: "down the slope, opposing the motion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Static friction in rolling",
                statement:
                  "Friction up the slope exerts torque about the centre, causing rotation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without friction there is no torque and the ball would slide rather than roll.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Friction acts up the slope, providing the angular acceleration — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** up the slope, providing torque",
            commonErrors: [
              "Thinking friction always opposes motion down the slope — here it acts UP the slope.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two wheels roll without slipping at the same linear speed $v$. Wheel A has radius 0.10 m and wheel B has radius 0.20 m. Which has the greater angular velocity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cannot be determined" },
              { id: "b", text: "they are equal" },
              { id: "c", text: "wheel B" },
              { id: "d", text: "wheel A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement:
                  "$\\omega = v/r$ — smaller $r$ gives larger $\\omega$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\omega = v/r$: for fixed $v$, halving $r$ doubles $\\omega$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wheel A (smaller radius) has greater $\\omega$ — choice (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** wheel A",
            commonErrors: [
              "Thinking larger wheels spin faster — for the same $v$ they spin slower.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Static friction acting on a ball rolling without slipping does no work because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "friction always does negative work" },
              {
                id: "b",
                text: "the contact point is instantaneously at rest relative to the surface",
              },
              { id: "c", text: "the ball is accelerating" },
              { id: "d", text: "there is no friction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Static friction",
                statement:
                  "Work = force $\\times$ displacement of point of application; zero displacement → zero work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work done by friction requires displacement of the contact point — which is instantaneously zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** contact point at rest → no work",
            commonErrors: [
              "Thinking friction dissipates energy — static friction in rolling is non-dissipative.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A wheel of radius 0.35 m rolls without slipping at a speed of 7.0 m/s. Calculate its angular velocity.",
          parts: [
            {
              label: "a",
              prompt: "Angular velocity in rad s$^{-1}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement: "$\\omega = v/r$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $\\omega = v/r = 7.0/0.35$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide to obtain the angular velocity.",
                working: "\\omega = 7.0/0.35",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\omega = 20$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\omega = 20$ rad s⁻¹",
            commonErrors: ["Multiplying $v \\times r$ instead of dividing."],
          },
        },
        {
          id: "physhl-u1-roll-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A hoop of radius 0.25 m rolls without slipping with angular velocity 40 rad s$^{-1}$. Calculate its linear speed.",
          parts: [
            { label: "a", prompt: "Linear speed in m s$^{-1}$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "m s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement: "$v = \\omega r$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $v = \\omega r = 40 \\times 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Multiply to obtain the speed.",
                working: "v = 40 \\times 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 10$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v = 10$ m s⁻¹",
            commonErrors: [
              "Dividing instead of multiplying — speed is $\\omega r$, not $\\omega/r$.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A solid sphere ($I = \\frac{2}{5}MR^2$) of radius 0.10 m rolls without slipping from rest down a rough incline through a vertical height of 0.50 m. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its speed at the bottom.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate its angular velocity at the bottom.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.65, unit: "m s^-1", tolerance: 0.01 },
              { label: "b", answer: 26.5, unit: "rad s^-1", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "$v = \\sqrt{10gh/7}$ for a solid sphere; $\\omega = v/R$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$mgh = \\frac{7}{10}mv^2$ → $v = \\sqrt{10gh/7} = \\sqrt{10 \\times 9.81 \\times 0.50/7}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = \\sqrt{7.01}$.",
                working: "v = \\sqrt{7.01}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 2.65$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\omega = v/R = 2.65/0.10 = 26.5$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2.65 m s⁻¹. (b) 26.5 rad s⁻¹.",
            commonErrors: [
              "Using the cylinder formula $\\sqrt{4gh/3}$ — sphere has $I = \\frac{2}{5}MR^2$.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A solid disc and a hoop, each of mass 2.0 kg and radius 0.15 m, roll without slipping from rest down the same rough incline through a vertical height of 1.2 m. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate the speed of the disc at the bottom.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the speed of the hoop at the bottom.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.96, unit: "m s^-1", tolerance: 0.01 },
              { label: "b", answer: 3.43, unit: "m s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy conservation",
                statement:
                  "Disc: $v = \\sqrt{4gh/3}$; hoop ($I=MR^2$): $v = \\sqrt{gh}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Disc: $v = \\sqrt{4 \\times 9.81 \\times 1.2/3} = \\sqrt{15.70}$.",
                working: "v_disc = \\sqrt{15.70}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v_{disc} = 3.96$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Hoop: $mgh = mv^2$ → $v = \\sqrt{gh} = \\sqrt{9.81 \\times 1.2} = \\sqrt{11.77}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$v_{hoop} = 3.43$ m s$^{-1}$ — slower than the disc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Disc: 3.96 m s⁻¹. (b) Hoop: 3.43 m s⁻¹.",
            commonErrors: [
              "Using the same speed for both — different $I$ gives different speeds.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A solid cylinder of mass 3.0 kg and radius 0.20 m rolls without slipping up a rough incline. It is launched at the bottom with speed 8.0 m/s. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its total kinetic energy at launch.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the maximum vertical height it reaches.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 144, unit: "J", tolerance: 0.01 },
              { label: "b", answer: 4.89, unit: "m", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling energy",
                statement:
                  "Total KE $= \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ converts fully to GPE at max height.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\omega = 8.0/0.20 = 40$ rad s$^{-1}$; translational KE $= \\frac{1}{2} \\times 3.0 \\times 64 = 96$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$I = \\frac{1}{2} \\times 3.0 \\times 0.04 = 0.06$ kg m$^2$; rotational KE $= \\frac{1}{2} \\times 0.06 \\times 1600 = 48$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Total KE $= 96 + 48 = 144$ J.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$mgh = 144$ → $h = 144/(3.0 \\times 9.81)$.",
                working: "h = 144/29.43",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$h = 4.89$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 144 J. (b) 4.89 m.",
            commonErrors: [
              "Using only translational KE — rotational KE also converts to GPE.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A hoop of radius 0.25 m rolls without slipping at $v = 5.0$ m/s. Calculate its angular velocity.",
          parts: [
            {
              label: "a",
              prompt: "Angular velocity in rad s$^{-1}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rolling condition",
                statement: "$\\omega = v/r$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $\\omega = v/r = 5.0/0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide to obtain the angular velocity.",
                working: "\\omega = 5.0/0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\omega = 20$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\omega = 20$ rad s⁻¹",
            commonErrors: [
              "The hoop's shape does not change the rolling condition $v = \\omega r$.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why friction is essential for a ball to roll without slipping down an incline, even though static friction does no work on the ball.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Static friction in rolling",
                statement:
                  "Friction provides torque for rotation; being static, it dissipates no energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gravity alone exerts no torque about the ball's centre (it acts through the centre of mass).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without friction the ball would slide down without rotating — slipping, not rolling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Friction up the slope provides the torque $\\tau = fR$ that produces angular acceleration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because the contact point is instantaneously at rest, no energy is dissipated — friction enables rolling without loss.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Thus friction is both necessary for rotation and non-dissipative — a subtle but crucial point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Friction supplies the torque for rotation; static friction does no work since the contact point doesn't slide.",
            commonErrors: [
              "Claiming friction slows the ball — it converts translational motion into rotation without energy loss.",
            ],
          },
        },
        {
          id: "physhl-u1-roll-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A solid sphere ($I = \\frac{2}{5}MR^2$, $R = 0.12$ m) rolls without slipping from rest down a rough incline at $20°$ to the horizontal, covering a distance of 8.0 m along the slope. ($g = 9.81$ m/s²)",
          parts: [
            {
              label: "a",
              prompt: "Calculate its speed at the bottom of the incline.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the time taken to reach the bottom.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate its angular velocity at the bottom.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State why friction doing no work means mechanical energy is conserved during the roll.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rolling on incline",
                statement:
                  "Vertical drop $h = L\\sin\\theta$; $v = \\sqrt{10gh/7}$ for sphere; acceleration $a = \\frac{5}{7}g\\sin\\theta$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Height dropped $h = 8.0 \\sin 20° = 2.74$ m; $v = \\sqrt{10 \\times 9.81 \\times 2.74/7}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = \\sqrt{38.4} = 6.19$ m s$^{-1}$.",
                working: "v = \\sqrt{38.4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$v = 6.2$ m s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$a = \\frac{5}{7}g\\sin 20° = \\frac{5}{7} \\times 9.81 \\times 0.342 = 2.40$ m s$^{-2}$; $t = \\sqrt{2L/a} = \\sqrt{16/2.40}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$t = 2.58$ s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\omega = v/R = 6.19/0.12 = 51.6$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\omega = 51.6$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Static friction does no work (contact point at rest) and the surface is smooth apart from rolling, so total mechanical energy is conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 6.2 m s⁻¹. (b) 2.58 s. (c) 51.6 rad s⁻¹. (d) No work done by friction → energy conserved.",
            commonErrors: [
              "Using $a = g\\sin\\theta$ (frictionless slide) — rolling sphere accelerates at $\\frac{5}{7}g\\sin\\theta$.",
            ],
          },
        },
      ],
    },
  ],
};
