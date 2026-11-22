import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "edps2-u3-lesson-3-1",
  code: "3-1",
  title: "Forces and Movement",
  goal: "I CAN describe pushes, pulls and how forces change movement.",
  standards: ["Year 2 Science: Forces"],
  vocabulary: [
    { term: "Force", definition: "A push or pull that can change movement." },
    {
      term: "Friction",
      definition: "Force that slows moving objects when surfaces rub together.",
    },
    { term: "Gravity", definition: "Force that pulls objects towards Earth." },
    {
      term: "Air resistance",
      definition: "Force that slows objects moving through air.",
    },
  ],
  concepts: [
    {
      id: "edps2-u3-forces",
      title: "Pushes, pulls and friction",
      skill: "Identify forces and describe their effects on movement.",
      lesson: {
        sections: [
          {
            heading: "Forces in action",
            body: "A **push** moves things away; a **pull** moves them towards. Forces can start movement, stop it, speed it up, slow it down, or change direction. More force = bigger change.",
          },
          {
            heading: "Friction",
            body: "**Friction** is a force that acts when surfaces rub together — it slows things down. Rough surfaces create more friction (slows more); smooth surfaces less. Brakes use friction to stop vehicles.",
          },
        ],
        keyFormulas: [
          { name: "Push/pull", statement: "Away / towards" },
          { name: "Friction", statement: "Slows rubbing surfaces" },
          {
            name: "Force effects",
            statement: "Start, stop, speed up, slow, turn",
          },
        ],
        workedExample: {
          problem: "Why do brakes stop a bike?",
          solution:
            "Brake pads rub the wheel creating friction that slows and stops it.",
        },
      },
      questions: [
        {
          id: "edps2-u3-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is friction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air pressure" },
              { id: "b", text: "A push forward" },
              { id: "c", text: "A force that slows rubbing surfaces" },
              { id: "d", text: "A type of gravity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Friction",
                statement: "Slows rubbing surfaces.",
              },
            ],
            steps: [
              {
                reasoning: "Friction = rubbing force.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** A force that slows rubbing surfaces",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps2-u3-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which surface creates more friction: rough or smooth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Rough" },
              { id: "c", text: "Both same" },
              { id: "d", text: "Smooth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction",
                statement: "Rough = more friction.",
              },
            ],
            steps: [
              { reasoning: "Identify surface.", marks: 1, markCode: "M" },
              { reasoning: "Answer: rough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rough",
            commonErrors: ["Wrong surface."],
          },
        },
        {
          id: "edps2-u3-fo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two effects a force can have on a moving object.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Force effects",
                statement: "Speed up, slow down, stop, change direction.",
              },
            ],
            steps: [
              { reasoning: "Effect 1.", marks: 1, markCode: "A" },
              { reasoning: "Effect 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Speed it up; change direction'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps2-u3-fo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a ball rolls further on smooth floor than carpet.",
          parts: [
            { label: "a", prompt: "Friction difference", marks: 1 },
            { label: "b", prompt: "Effect on motion", marks: 1 },
            { label: "c", prompt: "Comparison made", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction",
                statement: "Carpet = more friction = stops sooner.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Friction compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Comparison clear.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Carpet has more friction which slows the ball faster; smooth floor has less so ball rolls further",
            commonErrors: ["No friction link."],
          },
        },
      ],
    },
    {
      id: "edps2-u3-gravity",
      title: "Gravity and air resistance",
      skill: "Understand gravity and air resistance effects.",
      lesson: {
        sections: [
          {
            heading: "Gravity",
            body: "**Gravity** pulls everything towards Earth — that's why things fall down, not up. Heavier objects feel stronger gravity but fall at the same rate (in a vacuum). Things with more air resistance fall slower.",
          },
          {
            heading: "Air resistance",
            body: "When objects move through air, air pushes back — **air resistance**. Flat surfaces catch more air (slow down faster); pointed/streamlined shapes slip through (less resistance). Parachutes use lots of air resistance to slow descent.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Pulls towards Earth" },
          { name: "Air resistance", statement: "Slows movement through air" },
          { name: "Streamlined", statement: "Less air resistance" },
        ],
        workedExample: {
          problem: "Why does a parachute slow a fall?",
          solution: "Its large surface area creates lots of air resistance.",
        },
      },
      questions: [
        {
          id: "edps2-u3-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does gravity do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pushes things up" },
              { id: "b", text: "Makes things float" },
              { id: "c", text: "Creates wind" },
              { id: "d", text: "Pulls things towards Earth" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gravity",
                statement: "Pulls towards Earth.",
              },
            ],
            steps: [
              { reasoning: "Gravity pulls down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Pulls things towards Earth",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edps2-u3-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a feather fall slower than a rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More air resistance" },
              { id: "b", text: "It's lighter only" },
              { id: "c", text: "Gravity doesn't affect it" },
              { id: "d", text: "It's magic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Air resistance",
                statement: "Feather catches more air.",
              },
            ],
            steps: [
              { reasoning: "Identify cause.", marks: 1, markCode: "M" },
              { reasoning: "Answer: air resistance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** More air resistance",
            commonErrors: ["Missing air resistance."],
          },
        },
        {
          id: "edps2-u3-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What shape creates least air resistance when moving through air?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Streamlining",
                statement: "Pointed/streamlined shapes.",
              },
            ],
            steps: [
              { reasoning: "Shape identified.", marks: 1, markCode: "A" },
              { reasoning: "Reason given.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Streamlined/pointed shapes — they slip through air easily",
            commonErrors: ["Flat/wide shape chosen."],
          },
        },
        {
          id: "edps2-u3-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a parachute uses air resistance to keep someone safe.",
          parts: [
            { label: "a", prompt: "What parachute does", marks: 1 },
            { label: "b", prompt: "Air resistance role", marks: 1 },
            { label: "c", prompt: "Safety benefit", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Air resistance",
                statement: "Large canopy = lots of resistance = slow fall.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Purpose stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Resistance explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Safety explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Parachute's large canopy creates air resistance that slows descent, making landing safe",
            commonErrors: ["No resistance link."],
          },
        },
      ],
    },
  ],
};
