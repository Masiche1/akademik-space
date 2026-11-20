import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cips-u2-lesson-2-3",
  code: "2-3",
  title: "Stage 6 — Earth, Space and Environment",
  goal: "I CAN describe Earth, the solar system and the environment.",
  standards: ["Cambridge Primary Science 0097 Stage 6: Earth and space",
  "Cambridge Primary Science 0097 framework substrands: 6ESp, 6ESc, 6ESs, 6SIC"],
  stage: 6,
  vocabulary: [
    { term: "Solar system", definition: "The Sun and all the planets, moons and other objects that orbit it." },
    { term: "Orbit", definition: "The path an object follows around another object." },
    { term: "Recycling", definition: "Turning waste materials into new products." },
    { term: "Renewable", definition: "A resource that can be replaced naturally, like sunlight or wind." },
    { term: "Non-renewable", definition: "A resource that cannot be replaced, like coal or oil." },
  ],
  concepts: [
    {
      id: "cips-u2-s6-space",
      title: "Earth and the solar system",
      skill: "Describe the solar system at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "The solar system",
            body: "The Sun is at the centre. Eight planets orbit it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Earth is the only planet known to have life.",
          },
          {
            heading: "Day and night",
            body: "Earth spins on its axis once every 24 hours, causing day and night. It orbits the Sun once every year, causing seasons.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What causes day and night on Earth?",
          solution: "Earth rotating (spinning) on its axis.",
        },
      },
      questions: [
        {
          id: "cips-u2-s6-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which planet do we live on?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mars" }, { id: "b", text: "Earth" }, { id: "c", text: "Venus" }, { id: "d", text: "Jupiter" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Earth", statement: "Our home planet." }],
            steps: [{ reasoning: "We live on Earth.", marks: 1, markCode: "B" }],
            finalAnswer: "Earth",
          },
        },
        {
          id: "cips-u2-s6-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes day and night?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rotation", statement: "Earth spins on its axis." }],
            steps: [
              { reasoning: "Earth rotates (spins) on its axis.", marks: 1, markCode: "B" },
              { reasoning: "This makes different parts face the Sun at different times.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Earth rotates",
          },
        },
        {
          id: "cips-u2-s6-sp-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name the planet closest to the Sun.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Venus" }, { id: "b", text: "Mercury" }, { id: "c", text: "Earth" }, { id: "d", text: "Mars" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Planet order", statement: "Mercury is closest to the Sun." }],
            steps: [{ reasoning: "Mercury is the closest planet to the Sun.", marks: 1, markCode: "B" }],
            finalAnswer: "Mercury",
          },
        },
        {
          id: "cips-u2-s6-sp-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is Earth the only planet known to have life?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Habitability", statement: "Earth has the right conditions." }],
            steps: [
              { reasoning: "Earth has liquid water.", marks: 1, markCode: "B" },
              { reasoning: "It has an atmosphere with oxygen.", marks: 1, markCode: "B" },
              { reasoning: "The temperature is suitable for life.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Right conditions for life",
          },
        },
      ],
    },
    {
      id: "cips-u2-s6-environment",
      title: "Environment and sustainability",
      skill: "Understand recycling and renewable resources at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Recycling",
            body: "Recycling turns waste into new products, saving resources and reducing pollution. Paper, plastic, glass and metal can all be recycled.",
          },
          {
            heading: "Renewable vs non-renewable",
            body: "Renewable resources (sunlight, wind, water) never run out. Non-renewable resources (coal, oil, gas) will run out and cause pollution.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is sunlight renewable or non-renewable?",
          solution: "Renewable — sunlight will always be available.",
        },
      },
      questions: [
        {
          id: "cips-u2-s6-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does recycling mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Throwing things away" }, { id: "b", text: "Turning waste into new products" }, { id: "c", text: "Burning rubbish" }, { id: "d", text: "Buying new things" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Recycling", statement: "Waste → new products." }],
            steps: [{ reasoning: "Recycling turns waste into new products.", marks: 1, markCode: "B" }],
            finalAnswer: "Waste to new products",
          },
        },
        {
          id: "cips-u2-s6-en-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable resource?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coal" }, { id: "b", text: "Oil" }, { id: "c", text: "Wind" }, { id: "d", text: "Gas" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Renewable", statement: "Never runs out." }],
            steps: [{ reasoning: "Wind is renewable; coal, oil and gas are non-renewable.", marks: 1, markCode: "B" }],
            finalAnswer: "Wind",
          },
        },
        {
          id: "cips-u2-s6-en-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is recycling important?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Recycling", statement: "Saves resources, reduces pollution." }],
            steps: [
              { reasoning: "It saves natural resources.", marks: 1, markCode: "B" },
              { reasoning: "It reduces pollution and landfill waste.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Saves resources, reduces pollution",
          },
        },
        {
          id: "cips-u2-s6-en-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name one renewable and one non-renewable energy source and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy sources", statement: "Renewable never runs out." }],
            steps: [
              { reasoning: "Renewable example: solar, wind, hydro.", marks: 1, markCode: "B" },
              { reasoning: "Non-renewable example: coal, oil, gas.", marks: 1, markCode: "B" },
              { reasoning: "Renewable sources will not run out; non-renewable will.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. solar (renewable), coal (non-renewable)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-s6-earth-notes",
      title: "Stage 6 Earth and environment — revision notes",
      summary: "Solar system, day and night, recycling, renewable resources.",
      sections: [
        { heading: "Space", body: "Sun at centre; 8 planets orbit. Earth spins → day/night; orbits Sun → year/seasons." },
        { heading: "Environment", body: "Recycle waste; use renewable resources (sun, wind) to reduce pollution." },
      ],
    },
  ],
};
