import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "esc7-u3-lesson-3-1",
  code: "3-1",
  title: "Forces and Motion",
  goal: "I CAN describe forces, their effects and the relationship between force, mass and acceleration.",
  standards: ["Edexcel KS3 Science — Physics"],
  vocabulary: [
    { term: "Force", definition: "A push or pull measured in newtons (N)." },
    {
      term: "Newton",
      definition:
        "The SI unit of force — the force needed to accelerate 1 kg at 1 m/s².",
    },
    {
      term: "Friction",
      definition:
        "A force opposing relative motion between surfaces in contact.",
    },
    {
      term: "Gravity",
      definition:
        "The force attracting objects toward each other — weight on Earth.",
    },
  ],
  concepts: [
    {
      id: "esc7-u3-forces",
      title: "Types of Force and Their Effects",
      skill:
        "Identify contact and non-contact forces and describe their effects.",
      lesson: {
        sections: [
          {
            heading: "Contact forces",
            body: "**Friction**: opposes sliding — between surfaces, air resistance on moving objects. **Tension**: pulling force in ropes/strings. **Normal force**: support force from surfaces. **Applied force**: direct push/pull. Contact forces need physical contact.\n\n**Effects of forces**: change shape (squash/stretch), change speed, change direction, start/stop motion. A force is a vector — has magnitude AND direction. Balanced forces → no change in motion; unbalanced → acceleration.",
          },
          {
            heading: "Non-contact forces",
            body: "**Gravity**: attracts masses toward each other — keeps planets in orbit, gives weight. **Magnetism**: attracts/repels magnetic materials — acts at distance. **Electrostatic**: attraction/repulsion between charged objects. Non-contact forces act through fields — no physical contact needed.\n\n**Weight vs mass**: mass = amount of matter (kg, constant everywhere); weight = force of gravity on mass (N, varies with gravity). On Moon, weight is ~1/6 of Earth's but mass unchanged.",
          },
        ],
        keyFormulas: [
          {
            name: "Force effects",
            statement: "Change shape, speed, direction, or start/stop motion.",
          },
          {
            name: "Weight vs mass",
            statement: "Mass=kg constant; weight=N varies with gravity.",
          },
        ],
        workedExample: {
          problem: "A book sits on a table. What forces act on it?",
          solution:
            "Gravity pulls down (weight); table pushes up (normal force) — balanced, so book doesn't move.",
        },
      },
      questions: [
        {
          id: "esc7-u3-forces-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the SI unit of force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watt (W)" },
              { id: "b", text: "Pascal (Pa)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Newton (N)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Newton",
                statement: "SI unit of force.",
              },
            ],
            steps: [
              {
                reasoning: "Force measured in newtons.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Newton (N)",
            commonErrors: ["Confusing with energy units."],
          },
        },
        {
          id: "esc7-u3-forces-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of non-contact forces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-contact forces",
                statement:
                  "Gravity, magnetism, electrostatic — act at distance.",
              },
            ],
            steps: [
              {
                reasoning: "Two valid examples given.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Both are non-contact.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Correct classification.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "e.g. gravity and magnetism (also electrostatic).",
            commonErrors: ["Contact forces listed.", "Only one example."],
          },
        },
        {
          id: "esc7-u3-forces-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between mass and weight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass vs weight",
                statement:
                  "Mass=amount of matter (kg, constant); weight=gravity force (N, varies).",
              },
            ],
            steps: [
              {
                reasoning: "Mass defined correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weight defined correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mass constant, weight varies with gravity.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mass = amount of matter (kg, same everywhere); weight = gravitational force (N, varies with location).",
            commonErrors: ["Used interchangeably.", "No variation explained."],
          },
        },
        {
          id: "esc7-u3-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 2 kg object is on Earth (g = 9.8 N/kg).",
          parts: [
            { label: "a", prompt: "Calculate its weight on Earth.", marks: 3 },
            {
              label: "b",
              prompt: "Calculate its weight on the Moon (g = 1.6 N/kg).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why its mass is the same in both places.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weight = mass × gravity",
                statement: "W = m × g; mass constant, g varies.",
              },
            ],
            steps: [
              {
                reasoning: "(a) W = 2 × 9.8 = 19.6 N.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct formula applied.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) W = 2 × 1.6 = 3.2 N.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Lower gravity = lower weight.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Mass = amount of matter, unchanged by location.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 19.6 N (b) 3.2 N (c) mass constant — amount of matter unchanged",
            commonErrors: ["Wrong formula.", "Mass varies view."],
          },
        },
      ],
    },
    {
      id: "esc7-u3-motion",
      title: "Speed, Motion and Newton's Laws",
      skill: "Calculate speed and describe how forces affect motion.",
      lesson: {
        sections: [
          {
            heading: "Speed and velocity",
            body: "**Speed** = distance ÷ time (m/s or km/h). **Velocity** = speed in a direction (vector). Average speed = total distance / total time. Speedometers measure instantaneous speed; distance-time graphs show journey.\n\n**Acceleration** = change in velocity ÷ time (m/s²). Negative acceleration = deceleration. On distance-time graph: gradient = speed; on velocity-time graph: gradient = acceleration, area = distance.",
          },
          {
            heading: "Newton's laws",
            body: "**First law**: object stays at rest or constant velocity unless unbalanced force acts. **Second law**: F = ma — force = mass × acceleration; more mass needs more force for same acceleration. **Third law**: every action has equal opposite reaction — forces come in pairs on different objects.\n\nExample: pushing a car — car pushes back on you (third law); heavier car accelerates less for same force (second law); car coasts at constant speed when engine off until friction stops it (first law).",
          },
        ],
        keyFormulas: [
          {
            name: "Speed",
            statement: "speed = distance ÷ time; velocity = speed + direction.",
          },
          {
            name: "Newton's 2nd",
            statement: "F = ma — force = mass × acceleration.",
          },
        ],
        workedExample: {
          problem: "A car travels 150 km in 2 hours. Calculate average speed.",
          solution: "150 km ÷ 2 h = 75 km/h.",
        },
      },
      questions: [
        {
          id: "esc7-u3-motion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A car travels 100 m in 20 s. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2000 m/s" },
              { id: "b", text: "20 m/s" },
              { id: "c", text: "0.2 m/s" },
              { id: "d", text: "5 m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed = distance/time",
                statement: "100 m ÷ 20 s = 5 m/s.",
              },
            ],
            steps: [
              { reasoning: "100 ÷ 20 = 5 m/s.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** 5 m/s",
            commonErrors: ["Inverted division."],
          },
        },
        {
          id: "esc7-u3-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State Newton's first law of motion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's 1st law",
                statement:
                  "Object remains at rest or constant velocity unless unbalanced force acts.",
              },
            ],
            steps: [
              {
                reasoning: "Rest or constant velocity state.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Unbalanced force required for change.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer:
              "An object stays at rest or in constant velocity unless acted on by an unbalanced force.",
            commonErrors: ["Vague statement.", "Confused with other laws."],
          },
        },
        {
          id: "esc7-u3-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a heavier object need more force to accelerate at the same rate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's 2nd law",
                statement:
                  "F = ma — same acceleration needs more force for more mass.",
              },
            ],
            steps: [
              { reasoning: "F = ma relationship.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Same a, larger m → larger F needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More inertia/mass resists change.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "F = ma — for same acceleration, force must increase with mass; more mass has more inertia.",
            commonErrors: ["Heavier = slower always view.", "No F=ma link."],
          },
        },
        {
          id: "esc7-u3-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 1000 kg car accelerates at 2 m/s².",
          parts: [
            {
              label: "a",
              prompt: "Calculate the force required (F = ma).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If the force stays the same but mass doubles, calculate new acceleration.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain using Newton's second law.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "F = ma",
                statement: "Force = mass × acceleration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) F = 1000 × 2 = 2000 N.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct calculation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) a = F/m = 2000/2000 = 1 m/s².",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Acceleration halves.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Same force, double mass → half acceleration (F=ma).",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 2000 N (b) 1 m/s² (c) F constant, m doubled → a halved",
            commonErrors: ["Wrong rearrangement.", "No law link."],
          },
        },
      ],
    },
  ],
};
