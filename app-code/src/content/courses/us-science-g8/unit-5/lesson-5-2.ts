import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "s8-u5-lesson-5-2",
  code: "5-2",
  title: "Forces in Everyday Situations",
  goal: "I CAN identify and describe contact and non-contact forces, distinguish between balanced and unbalanced forces, and explain how forces affect motion.",
  standards: [
    "MS-PS2-1",
    "MS-PS2-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Force",
      definition: "A push or pull that can change an object's motion or shape.",
    },
    {
      term: "Contact force",
      definition:
        "A force that requires physical contact, such as friction or tension.",
    },
    {
      term: "Non-contact force",
      definition:
        "A force that acts at a distance, such as gravity or magnetism.",
    },
    {
      term: "Balanced forces",
      definition:
        "Forces that are equal and opposite, resulting in no change in motion.",
    },
    {
      term: "Unbalanced forces",
      definition: "Forces that are not equal, causing acceleration.",
    },
    {
      term: "Net force",
      definition: "The overall force on an object after combining all forces.",
    },
    {
      term: "Normal force",
      definition: "The support force exerted by a surface on an object.",
    },
  ],
  concepts: [
    {
      id: "s8-u5-force-types",
      title: "Types of forces",
      skill:
        "Identify contact and non-contact forces and describe their effects.",
      lesson: {
        sections: [
          {
            heading: "Contact forces",
            body: "Contact forces require physical contact:\n\n- **Friction**: opposes motion between surfaces.\n- **Tension**: pulls on ropes, strings, cables.\n- **Normal force**: support force from surfaces (prevents objects falling through floors).\n- **Applied force**: direct push or pull.",
          },
          {
            heading: "Non-contact forces",
            body: "Non-contact forces act at a distance:\n\n- **Gravity**: pulls objects toward each other (Earth pulls objects down).\n- **Magnetic force**: attracts or repels magnetic materials.\n- **Electrical force**: attracts or repels charged particles.\n\nThese forces can act without touching.",
          },
        ],
        keyFormulas: [
          {
            name: "Contact forces",
            statement: "Friction, tension, normal, applied — require contact.",
          },
          {
            name: "Non-contact forces",
            statement: "Gravity, magnetic, electrical — act at distance.",
          },
          {
            name: "Force effects",
            statement: "Can change motion, shape, or both.",
          },
        ],
        workedExample: {
          problem: "Classify: a magnet picking up a paperclip.",
          solution: "Magnetic force — non-contact force acting at a distance.",
        },
      },
      questions: [
        {
          id: "s8-u5-force-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a non-contact force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Tension" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Normal force" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-contact force",
                statement: "Acts at a distance without contact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gravity acts at a distance; friction, tension and normal require contact.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Gravity.",
            commonErrors: ["Choosing a contact force."],
          },
        },
        {
          id: "s8-u5-force-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example each of a contact force and a non-contact force.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Force types",
                statement:
                  "Contact requires touch; non-contact acts at distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contact: friction (walking), tension (rope), normal (floor support).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Non-contact: gravity (falling), magnetic (magnet), electrical (static).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Correctly identifies the distinction.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Contact: friction/tension/normal. Non-contact: gravity/magnetic/electrical.",
            commonErrors: ["Mixing up the categories."],
          },
        },
        {
          id: "s8-u5-force-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a table exerts a normal force on a book.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal force",
                statement: "Support force perpendicular to surface.",
              },
            ],
            steps: [
              {
                reasoning: "Book pushes down on table due to gravity.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Table pushes up on book with equal force (Newton's third law).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This upward force is the normal force, perpendicular to the surface.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Normal force prevents book from falling through table.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Table pushes up on book; normal force balances gravity.",
            commonErrors: ["Saying normal force is gravity."],
          },
        },
        {
          id: "s8-u5-force-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person pushes a box across the floor.",
          parts: [
            {
              label: "a",
              prompt: "Identify all forces acting on the box.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Which are contact forces? Which are non-contact?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What happens if the push force equals friction?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Force analysis",
                statement: "Identify all forces and their types.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Applied force (push), friction, gravity (weight), normal force.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Contact: applied, friction, normal. Non-contact: gravity.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "If push = friction, net force = 0; box moves at constant velocity (or stays still).",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Push, friction, gravity, normal (b) Contact: push/friction/normal; non-contact: gravity (c) Balanced → constant velocity.",
            commonErrors: ["Missing the normal force."],
          },
        },
      ],
    },
    {
      id: "s8-u5-balanced-forces",
      title: "Balanced and Unbalanced Forces",
      skill:
        "Distinguish between balanced and unbalanced forces and predict motion changes.",
      lesson: {
        sections: [
          {
            heading: "Balanced forces",
            body: "**Balanced forces** are equal and opposite, resulting in **zero net force**. An object with balanced forces:\n\n- At rest stays at rest.\n- In motion continues at constant velocity.\n\nExample: a book on a table — gravity pulls down, normal force pushes up equally.",
          },
          {
            heading: "Unbalanced forces",
            body: "**Unbalanced forces** have a net force in one direction, causing acceleration. Example: pushing a box harder than friction → box accelerates forward.\n\nThe **net force** is the vector sum of all forces. If forces are equal but in the same direction, they add; if opposite, they subtract.",
          },
        ],
        keyFormulas: [
          {
            name: "Balanced forces",
            statement: "Net force = 0; no acceleration.",
          },
          {
            name: "Unbalanced forces",
            statement: "Net force ≠ 0; causes acceleration.",
          },
          { name: "Net force", statement: "Vector sum of all forces." },
        ],
        workedExample: {
          problem:
            "A box is pushed with 50 N right and 30 N left. What's the net force and motion?",
          solution:
            "Net force = 50 - 30 = 20 N right. Box accelerates right at $a = F/m$.",
        },
      },
      questions: [
        {
          id: "s8-u5-balanced-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when forces on an object are balanced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Object accelerates" },
              { id: "b", text: "Object stays at rest or constant velocity" },
              { id: "c", text: "Object speeds up" },
              { id: "d", text: "Object changes direction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Balanced forces",
                statement: "Net force = 0; no acceleration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balanced forces result in zero net force — no change in motion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Object stays at rest or constant velocity.",
            commonErrors: ["Choosing (a): that's unbalanced."],
          },
        },
        {
          id: "s8-u5-balanced-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A book rests on a table. Identify the balanced forces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Balanced forces",
                statement: "Gravity down = normal force up.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity pulls book down.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Table exerts normal force upward.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "These are equal and opposite → balanced → book stays at rest.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Gravity (down) = normal force (up) → balanced → at rest.",
            commonErrors: ["Missing one of the forces."],
          },
        },
        {
          id: "s8-u5-balanced-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two people push a box: one pushes 40 N right, the other 25 N left. What happens?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net force",
                statement: "Vector sum of forces.",
              },
            ],
            steps: [
              {
                reasoning: "Forces are in opposite directions → subtract.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net force = 40 - 25 = 15 N right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unbalanced → box accelerates to the right.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Acceleration depends on box mass: $a = F/m$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Net force = 15 N right → box accelerates right.",
            commonErrors: ["Adding instead of subtracting opposite forces."],
          },
        },
        {
          id: "s8-u5-balanced-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A car travels at constant speed on a level road.",
          parts: [
            {
              label: "a",
              prompt: "Are the forces balanced or unbalanced? Explain.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify the forces acting on the car.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What would happen if the engine force increased?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Constant velocity",
                statement: "Balanced forces → constant velocity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Balanced — constant velocity means zero net force.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Engine force forward = friction + air resistance backward; gravity down = normal force up.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "If engine force > friction, net force forward → car accelerates.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Balanced (b) Engine = friction; gravity = normal (c) Accelerates if engine force increases.",
            commonErrors: ["Saying constant speed means no forces."],
          },
        },
      ],
    },
    {
      id: "s8-u5-force-motion",
      title: "Forces and Motion Changes",
      skill:
        "Explain how forces change motion: start, stop, speed up, slow down, change direction.",
      lesson: {
        sections: [
          {
            heading: "How forces affect motion",
            body: "Forces can change motion in several ways:\n\n- **Start motion**: unbalanced force on stationary object → accelerates.\n- **Stop motion**: unbalanced force opposing motion → decelerates to stop.\n- **Speed up**: net force in direction of motion → accelerates.\n- **Slow down**: net force opposite to motion → decelerates.\n- **Change direction**: force perpendicular to motion → changes direction (e.g., turning a car).",
          },
          {
            heading: "Force diagrams",
            body: "**Force diagrams** show all forces acting on an object as arrows. Arrow length represents force magnitude; arrow direction represents force direction. They help visualize net force and predict motion.",
          },
        ],
        keyFormulas: [
          {
            name: "Force effects",
            statement: "Start, stop, speed up, slow down, change direction.",
          },
          {
            name: "Force diagram",
            statement: "Arrows show magnitude and direction of forces.",
          },
          {
            name: "Net force direction",
            statement: "Determines acceleration direction.",
          },
        ],
        workedExample: {
          problem: "A ball is thrown upward. What forces act on it?",
          solution:
            "Gravity pulls down; air resistance opposes motion (down when rising, up when falling).",
        },
      },
      questions: [
        {
          id: "s8-u5-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when a net force acts on a stationary object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays at rest" },
              { id: "b", text: "It starts moving" },
              { id: "c", text: "It speeds up only" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Force and motion",
                statement: "Net force causes acceleration from rest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unbalanced force on stationary object causes it to start moving.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** It starts moving.",
            commonErrors: ["Choosing (a): that's balanced forces."],
          },
        },
        {
          id: "s8-u5-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a car turns using forces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Turning",
                statement: "Sideways force changes direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tires push sideways on road; road pushes back (friction).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This sideways force is perpendicular to motion.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Perpendicular force changes direction without changing speed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sideways friction force perpendicular to motion changes direction.",
            commonErrors: ["Saying car turns by pushing backward."],
          },
        },
        {
          id: "s8-u5-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown straight up and comes back down. Describe the forces at each stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Projectile motion",
                statement: "Gravity acts throughout; air resistance varies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Going up: gravity pulls down, air resistance also down → decelerates.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At top: velocity = 0 momentarily; gravity still acts.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Coming down: gravity pulls down, air resistance up → accelerates but slower than gravity alone.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Gravity acts throughout; air resistance changes direction with motion.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Gravity acts throughout; air resistance opposes motion (down going up, up coming down).",
            commonErrors: ["Saying gravity turns off at the top."],
          },
        },
        {
          id: "s8-u5-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Draw a force diagram for a book on a sloped surface.",
          parts: [
            { label: "a", prompt: "What forces act on the book?", marks: 3 },
            { label: "b", prompt: "Draw the force diagram.", marks: 3 },
            {
              label: "c",
              prompt: "At what angle does the book start to slide?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Force diagram",
                statement: "Show all forces as arrows.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gravity (down), normal force (perpendicular to surface), friction (up the slope).",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Diagram: weight arrow down, normal perpendicular to slope, friction up slope.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "When gravity component parallel to slope exceeds friction.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Gravity, normal, friction (b) Arrows in correct directions (c) When gravity component > friction.",
            commonErrors: ["Missing friction or normal force."],
          },
        },
      ],
    },
  ],
};
