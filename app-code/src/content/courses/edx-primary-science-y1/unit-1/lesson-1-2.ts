import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edps1-u1-lesson-1-2",
  code: "1-2",
  title: "The Human Body",
  goal: "I CAN name body parts and understand what they do.",
  standards: ["Year 1 Science: Humans"],
  vocabulary: [
    { term: "Skeleton", definition: "The framework of bones inside the body." },
    { term: "Muscle", definition: "Tissue that helps us move." },
    {
      term: "Organ",
      definition: "A body part that does a special job, like the heart.",
    },
    {
      term: "Sense organ",
      definition:
        "Body part that helps us sense: eyes, ears, nose, tongue, skin.",
    },
  ],
  concepts: [
    {
      id: "edps1-u1-body",
      title: "Body parts and their jobs",
      skill: "Name body parts and describe what they do.",
      lesson: {
        sections: [
          {
            heading: "Main body parts",
            body: "**Head**: brain, eyes (see), ears (hear), nose (smell), mouth/tongue (taste, eat). **Body**: heart (pump blood), lungs (breathe), stomach (digest food), arms and legs (move).",
          },
          {
            heading: "Keeping healthy",
            body: "We keep our bodies healthy by: eating healthy food, drinking water, exercising, sleeping, washing, and visiting the doctor when sick.",
          },
        ],
        keyFormulas: [
          { name: "Sense organs", statement: "Eyes, ears, nose, tongue, skin" },
          { name: "Heart", statement: "Pumps blood around body" },
          { name: "Lungs", statement: "Take in air" },
        ],
        workedExample: {
          problem: "Which body parts help you taste food?",
          solution:
            "Tongue and mouth — taste buds detect sweet, salty, sour, bitter.",
        },
      },
      questions: [
        {
          id: "edps1-u1-bo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part helps us see?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ears" },
              { id: "b", text: "Eyes" },
              { id: "c", text: "Nose" },
              { id: "d", text: "Skin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sense organs",
                statement: "Eyes = sight.",
              },
            ],
            steps: [{ reasoning: "Eyes see.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Eyes",
            commonErrors: ["Wrong organ."],
          },
        },
        {
          id: "edps1-u1-bo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the heart do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digests food" },
              { id: "b", text: "Pumps blood" },
              { id: "c", text: "Breathes air" },
              { id: "d", text: "Thinks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart", statement: "Pumps blood." },
            ],
            steps: [
              { reasoning: "Heart function.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pumps blood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pumps blood",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps1-u1-bo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways to keep your body healthy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Healthy body",
                statement: "Exercise, healthy food, sleep, washing.",
              },
            ],
            steps: [
              { reasoning: "Way 1 given.", marks: 1, markCode: "A" },
              { reasoning: "Way 2 given.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Exercise regularly; eat healthy food'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u1-bo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match each sense organ to its job: eyes, ears, nose, tongue.",
          parts: [
            { label: "a", prompt: "Eyes", marks: 1 },
            { label: "b", prompt: "Ears", marks: 1 },
            { label: "c", prompt: "Nose", marks: 1 },
            { label: "d", prompt: "Tongue", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sense organs",
                statement: "Eyes=see; ears=hear; nose=smell; tongue=taste.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Eyes = see.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ears = hear.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Nose = smell.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Tongue = taste.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "eyes=see, ears=hear, nose=smell, tongue=taste",
            commonErrors: ["Mismatched organs/jobs."],
          },
        },
      ],
    },
    {
      id: "edps1-u1-grow",
      title: "Growth and change",
      skill: "Understand how humans grow and change over time.",
      lesson: {
        sections: [
          {
            heading: "Growing up",
            body: "Humans grow from babies to children to adults. We get taller, stronger, learn new skills. Growth happens over many years.",
          },
          {
            heading: "Changes over time",
            body: "We lose baby teeth and grow adult teeth. Our bodies change shape. We learn to walk, talk, read. Each stage has new abilities.",
          },
        ],
        keyFormulas: [
          { name: "Growth", statement: "Get bigger/stronger over time" },
          { name: "Development", statement: "Learn new skills" },
          { name: "Life stages", statement: "Baby → child → adult" },
        ],
        workedExample: {
          problem: "Name two things babies can't do that adults can.",
          solution: "Walk and talk — these develop over time.",
        },
      },
      questions: [
        {
          id: "edps1-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens as humans grow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They shrink" },
              { id: "b", text: "They get bigger and stronger" },
              { id: "c", text: "Nothing changes" },
              { id: "d", text: "They stay the same" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth",
                statement: "Get bigger/stronger.",
              },
            ],
            steps: [{ reasoning: "Growth = bigger.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** They get bigger and stronger",
            commonErrors: ["Wrong understanding."],
          },
        },
        {
          id: "edps1-u1-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a change that happens as children grow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They stop eating" },
              { id: "b", text: "They lose baby teeth" },
              { id: "c", text: "They can't walk" },
              { id: "d", text: "They shrink" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Lose baby teeth.",
              },
            ],
            steps: [
              { reasoning: "Identify change.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: lose baby teeth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** They lose baby teeth",
            commonErrors: ["Wrong change."],
          },
        },
        {
          id: "edps1-u1-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two skills babies learn as they grow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Walk, talk, eat solids.",
              },
            ],
            steps: [
              { reasoning: "Skill 1 given.", marks: 1, markCode: "A" },
              { reasoning: "Skill 2 given.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Walk; talk'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u1-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order these life stages from youngest to oldest: adult, baby, teenager, child.",
          parts: [
            { label: "a", prompt: "Youngest", marks: 1 },
            { label: "b", prompt: "Next", marks: 1 },
            { label: "c", prompt: "Next", marks: 1 },
            { label: "d", prompt: "Oldest", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Life stages",
                statement: "baby → child → teenager → adult.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Baby first.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Child second.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Teenager third.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Adult last.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "baby → child → teenager → adult",
            commonErrors: ["Wrong order."],
          },
        },
      ],
    },
  ],
};
