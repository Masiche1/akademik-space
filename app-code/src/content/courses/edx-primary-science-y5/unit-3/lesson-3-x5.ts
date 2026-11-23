import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edps5-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Materials, Forces, Light, Sound and Space",
  goal: "I CAN answer materials, forces, light, sound and space exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Materials, Forces, Light, Sound and Space",
  ],

  vocabulary: [
    {
      term: "Fair test",
      definition: "An investigation where only one variable is changed.",
    },
    {
      term: "Independent variable",
      definition: "The thing you deliberately change in an investigation.",
    },
    {
      term: "Dependent variable",
      definition: "The thing you measure or observe as a result.",
    },
    {
      term: "Conclusion",
      definition: "What the results show, linked back to the question.",
    },
  ],
  concepts: [
    {
      id: "edps5-u3-exam5-concept",
      title: "Materials, Forces, Light, Sound and Space — exam practice",
      skill:
        "Apply materials, forces, light, sound and space techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise materials, forces, light, sound and space in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for materials, forces, light, sound and space.",
          },
        ],
      },
      questions: [
        {
          id: "edps5-u3-x5-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a controlled variable in testing which material insulates best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same volume of water" },
              { id: "b", text: "Material type" },
              { id: "c", text: "Temperature change" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Volume stays the same.",
              },
            ],
            steps: [
              { reasoning: "Volume stays the same.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Same volume of water",
          },
        },
        {
          id: "edps5-u3-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are decomposers important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They recycle nutrients back to the soil" },
              { id: "b", text: "They eat everything" },
              { id: "c", text: "They make food" },
              { id: "d", text: "They pollinate plants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Decomposers return nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers return nutrients.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** They recycle nutrients back to the soil",
          },
        },
        {
          id: "edps5-u3-x5-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How could you separate iron filings from sand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use a magnet" },
              { id: "b", text: "Filter" },
              { id: "c", text: "Evaporate" },
              { id: "d", text: "Distil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Materials",
                statement: "Magnet attracts iron.",
              },
            ],
            steps: [
              { reasoning: "Magnet attracts iron.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Use a magnet",
          },
        },
        {
          id: "edps5-u3-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a series circuit, what happens to current if one bulb breaks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All bulbs go out" },
              { id: "b", text: "Other bulbs stay on" },
              { id: "c", text: "Bulbs get brighter" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical processes",
                statement: "Series = one path.",
              },
            ],
            steps: [
              { reasoning: "Series = one path.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** All bulbs go out",
          },
        },
        {
          id: "edps5-u3-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What causes the seasons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth's tilted axis orbiting the Sun" },
              { id: "b", text: "Distance from Sun only" },
              { id: "c", text: "The Moon's phases" },
              { id: "d", text: "Ocean currents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth and space",
                statement: "Tilted axis → uneven heating.",
              },
            ],
            steps: [
              {
                reasoning: "Tilted axis → uneven heating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Earth's tilted axis orbiting the Sun",
          },
        },
        {
          id: "edps5-u3-x5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why repeat a measurement three times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check reliability and find anomalies" },
              { id: "b", text: "To waste time" },
              { id: "c", text: "To confuse results" },
              { id: "d", text: "Once is always enough" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Working scientifically",
                statement: "Repeats improve reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Repeats improve reliability.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** To check reliability and find anomalies",
          },
        },
        {
          id: "edps5-u3-x5-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are decomposers important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They recycle nutrients back to the soil" },
              { id: "b", text: "They eat everything" },
              { id: "c", text: "They make food" },
              { id: "d", text: "They pollinate plants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living things",
                statement: "Decomposers return nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers return nutrients.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** They recycle nutrients back to the soil",
          },
        },
      ],
    },
  ],
};
