import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cips-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 2 — Human Body and Senses",
  goal: "I CAN identify body parts and understand the five senses.",
  standards: ["Cambridge Primary Science 0097 Stage 2: humans",
  "Cambridge Primary Science 0097 framework substrands: 2Bs"],
  stage: 2,
  vocabulary: [
    { term: "Sense", definition: "A way of finding out about the world: sight, hearing, smell, taste, touch." },
    { term: "Skeleton", definition: "The framework of bones that supports the body." },
    { term: "Muscle", definition: "Body tissue that helps you move." },
    { term: "Organ", definition: "A body part that does a specific job, like the heart or lungs." },
    { term: "Healthy", definition: "In good physical condition." },
  ],
  concepts: [
    {
      id: "cips-u1-s2-body",
      title: "The human body",
      skill: "Identify major body parts and organs at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Body systems",
            body: "The skeleton gives the body shape and protects organs. Muscles help you move. The heart pumps blood and the lungs help you breathe.",
          },
          {
            heading: "Staying healthy",
            body: "Eat healthy food, exercise, get enough sleep and wash your hands to stay healthy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does the heart do?",
          solution: "The heart pumps blood around the body to carry oxygen and nutrients.",
        },
      },
      questions: [
        {
          id: "cips-u1-s2-bd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ pumps blood around the body?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The lungs" }, { id: "b", text: "The heart" }, { id: "c", text: "The stomach" }, { id: "d", text: "The brain" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Heart", statement: "Pumps blood around the body." }],
            steps: [{ reasoning: "The heart pumps blood.", marks: 1, markCode: "B" }],
            finalAnswer: "The heart",
          },
        },
        {
          id: "cips-u1-s2-bd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to stay healthy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Healthy habits", statement: "Eat well, exercise, sleep." }],
            steps: [
              { reasoning: "Eat healthy food and exercise.", marks: 1, markCode: "B" },
              { reasoning: "Get enough sleep and wash hands.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. eat well, exercise",
          },
        },
        {
          id: "cips-u1-s2-bd-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do muscles help you do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Muscles", statement: "Help the body move." }],
            steps: [
              { reasoning: "Muscles help you move your body.", marks: 1, markCode: "B" },
              { reasoning: "They work with bones to allow movement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Move",
          },
        },
        {
          id: "cips-u1-s2-bd-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important to wash your hands?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hygiene", statement: "Washing removes germs." }],
            steps: [
              { reasoning: "Hands carry germs.", marks: 1, markCode: "B" },
              { reasoning: "Washing hands removes germs and prevents illness.", marks: 1, markCode: "B" },
              { reasoning: "It helps keep you and others healthy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "To remove germs",
          },
        },
      ],
    },
    {
      id: "cips-u1-s2-senses",
      title: "The five senses",
      skill: "Identify and use the five senses at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Five senses",
            body: "Sight uses eyes, hearing uses ears, smell uses the nose, taste uses the tongue, and touch uses skin.",
          },
          {
            heading: "Using senses",
            body: "Your senses send information to your brain. You use them to learn about the world around you.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which sense do you use to hear music?",
          solution: "Hearing — you use your ears to hear sounds.",
        },
      },
      questions: [
        {
          id: "cips-u1-s2-sn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense do you use to smell a flower?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sight" }, { id: "b", text: "Smell" }, { id: "c", text: "Taste" }, { id: "d", text: "Touch" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Smell", statement: "Nose detects smells." }],
            steps: [{ reasoning: "You use your nose (smell) to smell a flower.", marks: 1, markCode: "B" }],
            finalAnswer: "Smell",
          },
        },
        {
          id: "cips-u1-s2-sn-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name the sense organ for taste.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eyes" }, { id: "b", text: "Ears" }, { id: "c", text: "Tongue" }, { id: "d", text: "Skin" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Taste", statement: "Tongue detects tastes." }],
            steps: [{ reasoning: "The tongue is the organ for taste.", marks: 1, markCode: "B" }],
            finalAnswer: "Tongue",
          },
        },
        {
          id: "cips-u1-s2-sn-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which two senses do you use when eating an ice cream?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Senses", statement: "Identify relevant senses." }],
            steps: [
              { reasoning: "You use taste (tongue) to taste it.", marks: 1, markCode: "B" },
              { reasoning: "You use touch (skin) to feel cold.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Taste and touch",
          },
        },
        {
          id: "cips-u1-s2-sn-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a rainy day using two of your senses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Senses", statement: "Use different senses in description." }],
            steps: [
              { reasoning: "Describes what you see or hear (rain, grey sky, sounds).", marks: 1, markCode: "B" },
              { reasoning: "Describes another sense (cold air, smell of wet earth).", marks: 1, markCode: "B" },
              { reasoning: "Both descriptions are clear and accurate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Two sensory descriptions",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-s2-body-notes",
      title: "Stage 2 body and senses — revision notes",
      summary: "Body systems, healthy habits, five senses.",
      sections: [
        { heading: "Body", body: "Skeleton supports, muscles move, heart pumps blood, lungs breathe. Wash hands and eat well to stay healthy." },
        { heading: "Senses", body: "Sight-eyes, hearing-ears, smell-nose, taste-tongue, touch-skin." },
      ],
    },
  ],
};
