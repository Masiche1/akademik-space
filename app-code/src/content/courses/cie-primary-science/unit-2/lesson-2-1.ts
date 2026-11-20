import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cips-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 4 — Forces and Motion",
  goal: "I CAN describe pushes, pulls and simple forces.",
  standards: ["Cambridge Primary Science 0097 Stage 4: forces",
  "Cambridge Primary Science 0097 framework substrands: 4Pf"],
  stage: 4,
  vocabulary: [
    { term: "Force", definition: "A push or pull that can change an object's motion." },
    { term: "Gravity", definition: "The force that pulls objects towards the Earth." },
    { term: "Friction", definition: "A force that slows things down when surfaces rub together." },
    { term: "Push", definition: "A force that moves something away from you." },
    { term: "Pull", definition: "A force that moves something towards you." },
  ],
  concepts: [
    {
      id: "cips-u2-s4-forces",
      title: "Pushes and pulls",
      skill: "Identify forces and their effects at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "What is a force?",
            body: "A force is a push or pull. Forces can make things move, stop, speed up, slow down, or change direction.",
          },
          {
            heading: "Gravity and friction",
            body: "Gravity pulls everything towards the Earth. Friction acts when two surfaces rub together and slows movement.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What force makes a ball fall when you drop it?",
          solution: "Gravity pulls the ball towards the Earth.",
        },
      },
      questions: [
        {
          id: "cips-u2-s4-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a force?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A push or pull" }, { id: "b", text: "A kind of energy" }, { id: "c", text: "A measurement" }, { id: "d", text: "A material" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Force", statement: "A push or pull." }],
            steps: [{ reasoning: "A force is a push or pull.", marks: 1, markCode: "B" }],
            finalAnswer: "A push or pull",
          },
        },
        {
          id: "cips-u2-s4-fo-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name the force that pulls objects towards the Earth.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Friction" }, { id: "b", text: "Magnetism" }, { id: "c", text: "Gravity" }, { id: "d", text: "Air resistance" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gravity", statement: "Pulls objects towards Earth." }],
            steps: [{ reasoning: "Gravity pulls objects towards the Earth.", marks: 1, markCode: "B" }],
            finalAnswer: "Gravity",
          },
        },
        {
          id: "cips-u2-s4-fo-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does friction do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Friction", statement: "Slows movement between surfaces." }],
            steps: [
              { reasoning: "Friction acts when surfaces rub together.", marks: 1, markCode: "B" },
              { reasoning: "It slows things down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Slows movement",
          },
        },
        {
          id: "cips-u2-s4-fo-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a push and an example of a pull.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Push and pull", statement: "Correct examples." }],
            steps: [
              { reasoning: "Push example: kicking a ball, pushing a door.", marks: 1, markCode: "B" },
              { reasoning: "Pull example: opening a drawer, pulling a rope.", marks: 1, markCode: "B" },
              { reasoning: "Both examples are correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. push a door, pull a drawer",
          },
        },
      ],
    },
    {
      id: "cips-u2-s4-motion",
      title: "Speed and movement",
      skill: "Describe speed, distance and simple motion at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Speed",
            body: "Speed is how fast something moves. A car going 60 km/h is faster than a bicycle going 15 km/h.",
          },
          {
            heading: "Distance and time",
            body: "Distance is how far something travels. Time is how long it takes. Speed = distance ÷ time.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$speed = distance \\div time$" },
        ],
        workedExample: {
          problem: "A car travels 120 km in 2 hours. What is its speed?",
          solution: "$120 \\div 2 = 60$ km/h.",
        },
      },
      questions: [
        {
          id: "cips-u2-s4-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is speed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "How far something goes" }, { id: "b", text: "How fast something moves" }, { id: "c", text: "How heavy something is" }, { id: "d", text: "How long something takes" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Speed", statement: "How fast something moves." }],
            steps: [{ reasoning: "Speed is how fast something moves.", marks: 1, markCode: "B" }],
            finalAnswer: "How fast",
          },
        },
        {
          id: "cips-u2-s4-mo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A runner covers 100 m in 20 seconds. What is their speed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "speed = distance ÷ time." }],
            steps: [
              { reasoning: "$100 \\div 20 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Speed is 5 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 m/s",
          },
        },
        {
          id: "cips-u2-s4-mo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is faster: a car travelling 60 km in 1 hour, or a train travelling 180 km in 3 hours?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed comparison", statement: "Calculate each speed." }],
            steps: [
              { reasoning: "Car: $60 \\div 1 = 60$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "Train: $180 \\div 3 = 60$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "They are equally fast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both 60 km/h",
          },
        },
        {
          id: "cips-u2-s4-mo-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist rides 15 km in 1 hour. How far would they go in 3 hours at the same speed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 45, unit: "km" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "distance = speed × time." }],
            steps: [
              { reasoning: "Speed $= 15 \\div 1 = 15$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "$15 \\times 3 = 45$ km.", marks: 1, markCode: "M" },
              { reasoning: "They would travel 45 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 km",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-s4-forces-notes",
      title: "Stage 4 forces and motion — revision notes",
      summary: "Pushes and pulls, gravity, friction, speed calculation.",
      sections: [
        { heading: "Forces", body: "Force = push or pull. Gravity pulls down; friction slows surfaces rubbing. Forces change motion." },
        { heading: "Speed", body: "speed = distance ÷ time. Compare speeds by calculating each one." },
      ],
    },
  ],
};
