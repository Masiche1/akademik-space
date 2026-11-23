import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "phys11-u7-lesson-7-2",
  code: "7-2",
  title: "Newton's Third Law, Momentum, and Collisions",
  goal: "I CAN apply Newton's third law and conservation of momentum to collision problems.",
  standards: [
    "HS-PS2-1",
    "HS-PS2-2",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    {
      term: "Newton's third law",
      definition: "Every action has equal and opposite reaction.",
    },
    { term: "Momentum", definition: "Mass × velocity: p = mv." },
    { term: "Impulse", definition: "Force × time: J = FΔt = Δp." },
    {
      term: "Conservation of momentum",
      definition: "Total momentum constant in isolated system.",
    },
    { term: "Elastic collision", definition: "Kinetic energy conserved." },
    {
      term: "Inelastic collision",
      definition: "Kinetic energy not conserved.",
    },
    { term: "Recoil", definition: "Backward momentum from forward action." },
  ],
  concepts: [
    {
      id: "phys11-u7-third-law",
      title: "Newton's third law",
      skill: "Identify action-reaction pairs and apply to real situations.",
      lesson: {
        sections: [
          {
            heading: "Newton's third law",
            body: "For every action, there is an equal and opposite reaction.\n\n$$\\vec{F}_{AB} = -\\vec{F}_{BA}$$\n\nForces act on **different objects**, not same object.",
          },
          {
            heading: "Examples",
            body: "- Rocket: exhaust pushed down → rocket pushed up.\n- Walking: foot pushes ground back → ground pushes foot forward.\n- Recoil: gun pushes bullet forward → bullet pushes gun backward.",
          },
        ],
        keyFormulas: [
          { name: "Newton's 3rd", statement: "$F_{AB} = -F_{BA}$" },
          {
            name: "Action-reaction",
            statement: "Equal magnitude, opposite direction, different objects",
          },
        ],
        workedExample: {
          problem: "Why does a rocket move forward?",
          solution:
            "Exhaust pushed down (action) → rocket pushed up (reaction).",
        },
      },
      questions: [
        {
          id: "phys11-u7-third-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Newton's third law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = ma" },
              { id: "b", text: "Every action has equal opposite reaction" },
              { id: "c", text: "Inertia" },
              { id: "d", text: "Energy conservation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's 3rd",
                statement: "Equal and opposite forces on different objects.",
              },
            ],
            steps: [
              { reasoning: "Action-reaction pairs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Equal and opposite reaction",
            commonErrors: ["F = ma."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-third-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Book on table: weight 50 N down, normal 50 N up. Are these Newton's third law pair?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Action-reaction",
                statement: "Must act on different objects.",
              },
            ],
            steps: [
              {
                reasoning: "Weight acts on book; normal acts on book.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Both act on same object → NOT third law pair.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: No — same object.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No — they act on the same object.",
            commonErrors: ["Thinking equal/opposite = third law."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u7-third-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a gun recoil when fired?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Recoil",
                statement: "Bullet forward → gun backward.",
              },
            ],
            steps: [
              {
                reasoning: "Gun pushes bullet forward (action).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Bullet pushes gun backward (reaction).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Equal and opposite forces.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: Newton's third law.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Newton's third law — equal and opposite forces.",
            commonErrors: ["Not identifying pair."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-third-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyze action-reaction pairs in: rocket launch, walking, swimming.",
          parts: [
            { label: "a", prompt: "Rocket: action and reaction?", marks: 3 },
            { label: "b", prompt: "Walking: action and reaction?", marks: 3 },
            { label: "c", prompt: "Swimming: action and reaction?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton's 3rd",
                statement: "Equal and opposite on different objects.",
              },
            ],
            steps: [
              {
                reasoning: "Rocket: exhaust pushed down → rocket pushed up.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Walking: foot pushes ground back → ground pushes foot forward.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Swimming: hands push water backward → water pushes hands forward.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "All pairs equal and opposite on different objects.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) exhaust/rocket (b) foot/ground (c) hands/water.",
            commonErrors: ["Same object pairs."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-momentum",
      title: "Momentum and impulse",
      skill: "Calculate momentum and impulse; apply conservation of momentum.",
      lesson: {
        sections: [
          {
            heading: "Momentum",
            body: "$$p = mv$$\n\nVector quantity — direction matters. Units: kg·m/s.",
          },
          {
            heading: "Impulse",
            body: "$$J = F\\Delta t = \\Delta p$$\n\nForce × time = change in momentum. Extending time reduces force (crumple zones).",
          },
          {
            heading: "Conservation of momentum",
            body: "In isolated system: $\\sum p_{before} = \\sum p_{after}$\n\nTotal momentum constant.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$" },
          { name: "Impulse", statement: "$J = F\\Delta t = \\Delta p$" },
          {
            name: "Conservation",
            statement: "$\\sum p_{before} = \\sum p_{after}$",
          },
        ],
        workedExample: {
          problem:
            "10 kg object at 5 m/s hits wall, stops in 0.1s. Average force?",
          solution: "$\\Delta p = 0 - 50 = -50$ kg·m/s; $F = 50/0.1 = 500$ N.",
        },
      },
      questions: [
        {
          id: "phys11-u7-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mv" },
              { id: "b", text: "ma" },
              { id: "c", text: "mv²" },
              { id: "d", text: "F/t" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Momentum", statement: "$p = mv$." },
            ],
            steps: [{ reasoning: "p = mv.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** mv",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u7-momentum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "5 kg object at 10 m/s. Momentum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "p = mv", statement: "p = 5×10" },
            ],
            steps: [
              { reasoning: "$p = 5 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "= 50 kg·m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 kg·m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 kg·m/s.",
            commonErrors: ["Wrong calculation."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u7-momentum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ball 0.5 kg at 20 m/s hits wall, stops in 0.05s. Average force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$F = \\Delta p/\\Delta t$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta p = 0 - 0.5(20) = -10$ kg·m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$F = 10/0.05 = 200$ N.", marks: 1, markCode: "M" },
              {
                reasoning: "Direction: opposite to motion.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 200 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 N.",
            commonErrors: ["Wrong Δp."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u7-momentum-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two objects collide: A = 2 kg at 5 m/s right, B = 3 kg at 3 m/s left.",
          parts: [
            { label: "a", prompt: "Total momentum before?", marks: 3 },
            {
              label: "b",
              prompt: "If they stick together, velocity after?",
              marks: 4,
            },
            { label: "c", prompt: "Kinetic energy conserved?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Momentum conservation",
                statement: "Total p constant; KE may not be.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$p_A = 2(5) = 10$; $p_B = 3(-3) = -9$; total = 1 kg·m/s right.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$v = 1/5 = 0.2$ m/s right (total mass 5 kg).",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.2 m/s right.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "KE before = ½(2)(25) + ½(3)(9) = 25+13.5 = 38.5 J; after = ½(5)(0.04) = 0.1 J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "KE not conserved → inelastic collision.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 1 kg·m/s (b) 0.2 m/s (c) inelastic.",
            commonErrors: ["Momentum not conserved."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-collisions",
      title: "Collisions and conservation",
      skill: "Analyze elastic and inelastic collisions.",
      lesson: {
        sections: [
          {
            heading: "Types of collisions",
            body: "- **Elastic**: KE conserved (billiard balls, ideal).\n- **Inelastic**: KE not conserved (crash, clay).\n- **Perfectly inelastic**: objects stick together.",
          },
          {
            heading: "Conservation equations",
            body: "Momentum always conserved: $m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'$\n\nKE conserved only in elastic: $\\frac{1}{2}m_1v_1^2 + \\frac{1}{2}m_2v_2^2 = \\frac{1}{2}m_1v_1'^2 + \\frac{1}{2}m_2v_2'^2$",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "Always conserved" },
          { name: "KE", statement: "Conserved only in elastic" },
          { name: "Perfectly inelastic", statement: "Objects stick together" },
        ],
        workedExample: {
          problem:
            "2 kg at 3 m/s hits stationary 1 kg, stick together. Final velocity?",
          solution: "$p = 6$ kg·m/s; $v = 6/3 = 2$ m/s.",
        },
      },
      questions: [
        {
          id: "phys11-u7-collisions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's conserved in all collisions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy" },
              { id: "b", text: "Momentum" },
              { id: "c", text: "Both" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conservation",
                statement: "Momentum always; KE only elastic.",
              },
            ],
            steps: [
              {
                reasoning: "Momentum conserved in all collisions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Momentum",
            commonErrors: ["Kinetic energy."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-collisions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Difference between elastic and inelastic collision?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Collision types",
                statement: "Elastic: KE conserved; inelastic: not.",
              },
            ],
            steps: [
              {
                reasoning: "Elastic: KE conserved (bounces).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Inelastic: KE lost (sticks/deforms).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Momentum conserved in both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Elastic conserves KE; inelastic doesn't.",
            commonErrors: ["Momentum not conserved."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u7-collisions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ball 0.2 kg at 10 m/s hits wall elastically, rebounds at 10 m/s. Impulse?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$J = \\Delta p = m(v_f - v_i)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\Delta p = 0.2(10 - (-10)) = 0.2(20) = 4$ kg·m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 4 N·s.", marks: 1, markCode: "M" },
              {
                reasoning: "Direction: away from wall.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 4 N·s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 N·s.",
            commonErrors: ["Wrong sign."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u7-collisions-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Car crash: 1000 kg at 20 m/s hits stationary 1000 kg car. They stick together.",
          parts: [
            { label: "a", prompt: "Momentum before?", marks: 2 },
            { label: "b", prompt: "Velocity after?", marks: 3 },
            { label: "c", prompt: "KE before?", marks: 2 },
            { label: "d", prompt: "KE after?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perfectly inelastic",
                statement: "Objects stick; KE lost.",
              },
            ],
            steps: [
              {
                reasoning: "$p = 1000(20) + 0 = 20000$ kg·m/s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$v = 20000/2000 = 10$ m/s.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 10 m/s.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "KE before = ½(1000)(400) = 200000 J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "KE after = ½(2000)(100) = 100000 J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "KE lost = 100000 J → inelastic.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 20000 (b) 10m/s (c) 200000J (d) 100000J.",
            commonErrors: ["KE conserved."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-applications",
      title: "Momentum applications",
      skill: "Apply momentum concepts to real-world safety and engineering.",
      lesson: {
        sections: [
          {
            heading: "Safety applications",
            body: "- **Crumple zones**: extend collision time → reduce force.\n- **Airbags**: increase contact time → reduce peak force.\n- **Seatbelts**: prevent ejection, distribute force.\n- **Helmets**: extend impact time.",
          },
          {
            heading: "Impulse-momentum",
            body: "$F = \\Delta p/\\Delta t$ — longer time = smaller force for same momentum change.\n\nThis is why crumple zones work: same momentum change, longer time, less force.",
          },
        ],
        keyFormulas: [
          { name: "Impulse", statement: "$J = F\\Delta t$" },
          { name: "Force reduction", statement: "Longer Δt → smaller F" },
          { name: "Safety", statement: "Design to extend collision time" },
        ],
        workedExample: {
          problem: "Why do crumple zones reduce injury?",
          solution:
            "Extend collision time → same momentum change but smaller average force.",
        },
      },
      questions: [
        {
          id: "phys11-u7-apps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do crumple zones protect passengers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduce speed instantly" },
              { id: "b", text: "Extend collision time, reducing force" },
              { id: "c", text: "Increase friction" },
              { id: "d", text: "Block impact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Impulse",
                statement: "Longer time → smaller force.",
              },
            ],
            steps: [
              {
                reasoning: "Crumple zones extend Δt → reduce F.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Extend collision time",
            commonErrors: ["Reduce speed instantly."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-apps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do airbags reduce injury?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Airbags",
                statement: "Increase contact time → reduce force.",
              },
            ],
            steps: [
              {
                reasoning: "Airbag inflates to cushion impact.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Extends time of momentum change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Same Δp but smaller average force.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Increase contact time → reduce force.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u7-apps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is a longer stopping distance safer than a shorter one?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Impulse",
                statement: "F = Δp/Δt; longer Δt = smaller F.",
              },
            ],
            steps: [
              {
                reasoning: "Same momentum change required.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Longer distance → longer time.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Smaller average force on occupant.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: reduced force = less injury.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Longer time → smaller force.",
            commonErrors: ["Not linking to force."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-apps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Safety design: passenger 70 kg, car crash from 20 m/s to 0 in 0.1s (no airbag) vs 0.3s (airbag).",
          parts: [
            { label: "a", prompt: "Momentum change?", marks: 2 },
            { label: "b", prompt: "Average force without airbag?", marks: 3 },
            { label: "c", prompt: "Average force with airbag?", marks: 3 },
            { label: "d", prompt: "Force reduction?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$F = \\Delta p/\\Delta t$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta p = 70 \\times 20 = 1400$ kg·m/s.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$F = 1400/0.1 = 14000$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 14000 N.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$F = 1400/0.3 = 4667$ N.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 4667 N.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Reduction = 14000 − 4667 = 9333 N (67% reduction).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 1400 (b) 14000N (c) 4667N (d) 9333N reduction.",
            commonErrors: ["Wrong Δp."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
