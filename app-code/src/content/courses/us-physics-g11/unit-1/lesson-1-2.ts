import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "phys11-u1-lesson-1-2",
  code: "1-2",
  title: "Newton's Laws",
  goal: "I CAN apply Newton's three laws, find net force and acceleration, and solve problems involving weight, normal force, friction and tension on level surfaces.",
  standards: [
    "HS-PS2-1",
    "SEP: Developing and Using Models",
    "SEP: Using Mathematics and Computational Thinking",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    {
      term: "Net force",
      definition:
        "The vector sum of all forces acting on an object; it determines the object's acceleration.",
    },
    {
      term: "Inertia",
      definition:
        "The tendency of an object to resist changes in its velocity; its measure is mass.",
    },
    {
      term: "Free-body diagram",
      definition:
        "A sketch of a single object showing only the forces acting on it, each as an arrow in the direction of the force.",
    },
    {
      term: "Weight",
      definition:
        "The gravitational force on an object, $F_g = mg$, directed downward.",
    },
    {
      term: "Normal force",
      definition:
        "The contact force a surface exerts on an object, perpendicular to the surface.",
    },
    {
      term: "Friction",
      definition:
        "A contact force opposing relative motion between surfaces, $f = \\mu F_N$ for kinetic friction.",
    },
    {
      term: "Tension",
      definition: "The pulling force transmitted through a rope or string.",
    },
  ],
  concepts: [
    {
      id: "phys11-u1-newtons-laws",
      title: "Newton's three laws and net force",
      skill:
        "State Newton's laws, describe free-body diagrams, and use $F_{net} = ma$ to find acceleration or force in one dimension.",
      lesson: {
        sections: [
          {
            heading: "The three laws",
            body: "- **First law (inertia):** an object keeps its velocity (at rest or moving at constant velocity) unless a nonzero net force acts on it.\n- **Second law:** the acceleration of an object is proportional to the net force and inversely proportional to its mass, $F_{net} = ma$, with the acceleration in the direction of the net force.\n- **Third law:** when object A pushes on object B, B pushes back on A with a force of equal size and opposite direction. The two forces act on **different** objects, so they never cancel each other.\n\nThe unit of force is the newton: $1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2$.",
          },
          {
            heading: "Free-body diagrams and net force",
            body: "To solve a problem, picture a free-body diagram of one object: draw an arrow for each force on it (weight down, normal force up, push or pull, friction opposing motion). Choose a positive direction, add the forces with signs to get $F_{net}$, then use $a = \\frac{F_{net}}{m}$.\n\nBalanced forces ($F_{net} = 0$) mean zero acceleration, which means constant velocity, not necessarily rest.",
          },
        ],
        keyFormulas: [
          { name: "Newton's second law", statement: "$F_{net} = ma$" },
          {
            name: "Unit of force",
            statement: "$1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2$",
          },
          {
            name: "Newton's third law",
            statement: "$F_{A\\text{ on }B} = -F_{B\\text{ on }A}$",
          },
        ],
        workedExample: {
          problem:
            "A $1500\\ \\text{kg}$ car is pushed forward by an engine force of $5000\\ \\text{N}$ against a resistive force of $2000\\ \\text{N}$. Find its acceleration.",
          solution:
            "Take forward as positive: $F_{net} = 5000 - 2000 = 3000\\ \\text{N}$. Then $a = \\frac{F_{net}}{m} = \\frac{3000}{1500} = 2.0\\ \\text{m/s}^2$ forward.",
        },
      },
      questions: [
        {
          id: "phys11-u1-newtons-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hockey puck slides across frictionless ice at a constant $4\\ \\text{m/s}$. According to Newton's first law, what is the net force on the puck?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A forward force that keeps it moving" },
              { id: "b", text: "Equal to the puck's weight" },
              { id: "c", text: "Equal to its mass times $4\\ \\text{m/s}$" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's first law",
                statement:
                  "An object at constant velocity has zero net force acting on it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The velocity is constant, so the acceleration is zero, so the net force is zero. No force is needed to maintain motion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Zero",
            commonErrors: [
              "Believing a force is required to keep an object moving (an Aristotelian idea).",
              "Confusing weight, which is balanced by the normal force, with net force.",
            ],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u1-newtons-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $1200\\ \\text{kg}$ car has an engine force of $4500\\ \\text{N}$ forward and a total resistive force of $1500\\ \\text{N}$ backward. Calculate the car's acceleration.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Acceleration",
                answer: 2.5,
                unit: "m/s²",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement: "$F_{net} = ma$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the net force by subtracting the opposing force.",
                working: "F_{net} = 4500 - 1500 = 3000\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange the second law and substitute.",
                working: "a = \\frac{F_{net}}{m} = \\frac{3000}{1200}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate with units.",
                working: "a = 2.5\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.5\\ \\text{m/s}^2$ forward",
            commonErrors: [
              "Using the engine force alone: $4500 \\div 1200 = 3.75\\ \\text{m/s}^2$.",
              "Adding the forces instead of subtracting.",
            ],
            examinerNote:
              "M1 for $F_{net} = 3000\\ \\text{N}$. M1 for dividing by the mass. A1 for $2.5\\ \\text{m/s}^2$.",
          },
        },
        {
          id: "phys11-u1-newtons-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $0.50\\ \\text{kg}$ cart on a level track starts at rest. A student pulls it with a horizontal force of $3.0\\ \\text{N}$ while friction exerts $1.0\\ \\text{N}$ in the opposite direction.\n\nCalculate (i) the cart's acceleration and (ii) the distance it travels in the first $3.0\\ \\text{s}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(i) acceleration",
                answer: 4.0,
                unit: "m/s²",
                tolerance: 0.01,
              },
              {
                label: "(ii) distance in 3.0 s",
                answer: 18,
                unit: "m",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement: "$F_{net} = ma$",
              },
              {
                kind: "formula",
                name: "Displacement from rest",
                statement: "$\\Delta x = v_i t + \\frac{1}{2}at^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net force is the pull minus friction; divide by the mass.",
                working: "a = \\frac{3.0 - 1.0}{0.50}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "a = 4.0\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The cart starts from rest, so $v_i = 0$.",
                working: "\\Delta x = \\tfrac{1}{2}(4.0)(3.0)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\Delta x = 18\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(i) $4.0\\ \\text{m/s}^2$ (ii) $18\\ \\text{m}$",
            commonErrors: [
              "Using $3.0\\ \\text{N}$ rather than the net force $2.0\\ \\text{N}$, giving $6.0\\ \\text{m/s}^2$.",
              "Forgetting to square the time.",
            ],
            examinerNote: "Allow ecf from (i) into (ii).",
          },
        },
        {
          id: "phys11-u1-newtons-laws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $1500\\ \\text{kg}$ car starts from rest on a straight, level road. The engine produces a forward force of $6000\\ \\text{N}$ and the total resistance is $1500\\ \\text{N}$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the net force on the car.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the car's acceleration.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate how long the car takes to reach $24\\ \\text{m/s}$ from rest.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "At $24\\ \\text{m/s}$ the resistance has grown to $6000\\ \\text{N}$. Using Newton's laws, describe and explain the car's motion from that point.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement: "$F_{net} = ma$",
              },
              {
                kind: "law",
                name: "Newton's first law",
                statement:
                  "With zero net force, an object moves at constant velocity.",
              },
              {
                kind: "formula",
                name: "Acceleration",
                statement: "$a = \\frac{v_f - v_i}{t}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Forces are in opposite directions, so subtract.",
                working: "F_{net} = 6000 - 1500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the result with units.",
                working: "F_{net} = 4500\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply the second law.",
                working: "a = \\frac{4500}{1500}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "a = 3.0\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Rearrange $a = \\frac{v_f - v_i}{t}$ for time with $v_i = 0$.",
                working: "t = \\frac{v_f}{a} = \\frac{24}{3.0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "t = 8.0\\text{ s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Now the resistance equals the engine force, so the net force is zero and the acceleration is zero.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "By the first law, with zero net force the car continues at a constant $24\\ \\text{m/s}$; it has reached its top speed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $4500\\ \\text{N}$ (b) $3.0\\ \\text{m/s}^2$ (c) $8.0\\ \\text{s}$ (d) Net force is zero, so the car moves at constant velocity of $24\\ \\text{m/s}$.",
            commonErrors: [
              "Saying the car stops when the forces balance; balanced forces give constant velocity.",
              "Using $6000\\ \\text{N}$ as the net force in (b), giving $4.0\\ \\text{m/s}^2$.",
            ],
            examinerNote:
              "(b) and (c) allow ecf. (d) Reject 'the car stops' or 'the car slows down'.",
          },
        },
      ],
    },
    {
      id: "phys11-u1-forces-contact",
      title: "Weight, normal force, friction and tension",
      skill:
        "Calculate weight, normal force, kinetic friction ($f = \\mu F_N$) and tension, and solve one- and two-body problems on level surfaces.",
      lesson: {
        sections: [
          {
            heading: "Common forces",
            body: "**Weight** is the gravitational force on an object: $F_g = mg$, with $g = 9.8\\ \\text{m/s}^2$. Mass (in kg) does not change with location; weight (in N) does.\n\nThe **normal force** $F_N$ is perpendicular to the surface. On a level surface with no vertical push or pull, $F_N = mg$.\n\n**Kinetic friction** opposes sliding and has magnitude $f = \\mu F_N$, where $\\mu$ is the coefficient of friction (no units). Friction depends on the surfaces and on $F_N$, not on speed or contact area.\n\n**Tension** $T$ is the pull in a rope. A light rope pulls with the same tension at both ends.",
          },
          {
            heading: "Two-body problems",
            body: "When two objects are connected by a rope and move together, they have the same acceleration. First treat them as one system to find the acceleration, $a = \\frac{F_{net}}{m_1 + m_2}$. Then apply $F_{net} = ma$ to one object alone to find the tension. Check by applying the law to the other object: you must get the same tension.",
          },
        ],
        keyFormulas: [
          {
            name: "Weight",
            statement: "$F_g = mg$, $g = 9.8\\ \\text{m/s}^2$",
          },
          { name: "Kinetic friction", statement: "$f = \\mu F_N$" },
          {
            name: "Level surface",
            statement: "$F_N = mg$ (no vertical applied force)",
          },
        ],
        workedExample: {
          problem:
            "A $20\\ \\text{kg}$ crate is pushed along a level floor with a horizontal force of $100\\ \\text{N}$. The coefficient of kinetic friction is $0.30$. Find the crate's acceleration.",
          solution:
            "$F_N = mg = 20(9.8) = 196\\ \\text{N}$. Friction: $f = 0.30(196) = 58.8\\ \\text{N}$. Net force: $100 - 58.8 = 41.2\\ \\text{N}$. Then $a = \\frac{41.2}{20} = 2.06\\ \\text{m/s}^2 \\approx 2.1\\ \\text{m/s}^2$.",
        },
      },
      questions: [
        {
          id: "phys11-u1-forces-contact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the weight of a $5.0\\ \\text{kg}$ object near Earth's surface? Use $g = 9.8\\ \\text{m/s}^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$49\\ \\text{kg}$" },
              { id: "b", text: "$0.51\\ \\text{N}$" },
              { id: "c", text: "$49\\ \\text{N}$" },
              { id: "d", text: "$5.0\\ \\text{N}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$F_g = mg$" },
            ],
            steps: [
              {
                reasoning: "Multiply mass by $g$ to get a force in newtons.",
                working: "F_g = (5.0)(9.8) = 49\\text{ N}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $49\\ \\text{N}$",
            commonErrors: [
              "Dividing by $g$ (choice b).",
              "Confusing mass in kg with weight in N (choices a and d).",
            ],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "phys11-u1-forces-contact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $20\\ \\text{kg}$ box slides on a level floor. The coefficient of kinetic friction is $0.40$. Use $g = 9.8\\ \\text{m/s}^2$. Calculate the friction force on the box.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Friction force",
                answer: 78.4,
                unit: "N",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic friction",
                statement: "$f = \\mu F_N$",
              },
              {
                kind: "principle",
                name: "Normal force on level ground",
                statement:
                  "$F_N = mg$ when there is no vertical applied force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "On a level surface the normal force balances the weight.",
                working: "F_N = mg = (20)(9.8) = 196\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the friction equation.",
                working: "f = \\mu F_N = (0.40)(196)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "f = 78.4\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$78.4\\ \\text{N}$",
            commonErrors: [
              "Using the mass instead of the weight: $0.40 \\times 20 = 8.0$.",
              "Adding $\\mu$ to the weight instead of multiplying.",
            ],
            examinerNote:
              "M1 for $F_N = 196\\ \\text{N}$. M1 for $\\mu F_N$. A1 for $78\\ \\text{N}$ or $78.4\\ \\text{N}$.",
          },
        },
        {
          id: "phys11-u1-forces-contact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $10\\ \\text{kg}$ box is pulled along a level floor by a horizontal rope with a tension of $60\\ \\text{N}$. The coefficient of kinetic friction between the box and floor is $0.30$. Use $g = 9.8\\ \\text{m/s}^2$ and give the acceleration to 3 significant figures.\n\nCalculate the acceleration of the box.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Acceleration",
                answer: 3.06,
                unit: "m/s²",
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinetic friction",
                statement: "$f = \\mu F_N$, with $F_N = mg$ on level ground",
              },
              {
                kind: "law",
                name: "Newton's second law",
                statement: "$F_{net} = ma$",
              },
            ],
            steps: [
              {
                reasoning: "Find the normal force and friction.",
                working:
                  "F_N = (10)(9.8) = 98\\text{ N};\\quad f = (0.30)(98) = 29.4\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Friction opposes the pull.",
                working: "F_{net} = 60 - 29.4 = 30.6\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply the second law.",
                working: "a = \\frac{F_{net}}{m} = \\frac{30.6}{10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "a = 3.06\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.06\\ \\text{m/s}^2$",
            commonErrors: [
              "Ignoring friction: $60 \\div 10 = 6.0\\ \\text{m/s}^2$.",
              "Using $f = \\mu m$ without $g$.",
            ],
            examinerNote:
              "Allow $3.1\\ \\text{m/s}^2$. Allow ecf for a wrong friction value.",
          },
        },
        {
          id: "phys11-u1-forces-contact-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Block A ($3.0\\ \\text{kg}$) and block B ($2.0\\ \\text{kg}$) rest on a frictionless level table, joined by a light string. A horizontal force of $20\\ \\text{N}$ pulls on block B directly away from block A, so the string pulls A along behind B. Use $g = 9.8\\ \\text{m/s}^2$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the normal force the table exerts on block A.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Calculate the acceleration of the two blocks.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the tension in the string.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Show that applying Newton's second law to block B gives the same tension.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement:
                  "$F_{net} = ma$, applied to the system or to a single block",
              },
              {
                kind: "principle",
                name: "Connected objects",
                statement:
                  "Objects joined by a taut string have the same acceleration, and a light string has the same tension throughout.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Vertical forces balance on A, so the normal force equals its weight.",
                working: "F_N = mg = (3.0)(9.8) = 29.4\\text{ N}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Treat both blocks as one system of mass $5.0\\ \\text{kg}$; the string tension is internal.",
                working: "a = \\frac{F}{m_A + m_B} = \\frac{20}{5.0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "a = 4.0\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The only horizontal force on A is the tension.",
                working: "T = m_A a = (3.0)(4.0)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "T = 12\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "On B, the pull forward and the tension backward give the net force.",
                working: "F - T = m_B a",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Substitute the numbers.",
                working: "20 - T = (2.0)(4.0) = 8.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve; this matches part (c).",
                working: "T = 12\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $29.4\\ \\text{N}$ (b) $4.0\\ \\text{m/s}^2$ (c) $12\\ \\text{N}$ (d) $20 - T = 2.0 \\times 4.0$ gives $T = 12\\ \\text{N}$",
            commonErrors: [
              "Using $20\\ \\text{N}$ as the tension.",
              "Using only block A's mass when finding the acceleration.",
              "Forgetting that tension acts backward on B.",
            ],
            examinerNote:
              "(a) Allow $29\\ \\text{N}$. (c) and (d) allow ecf from (b).",
          },
        },
      ],
    },
  ],
};
