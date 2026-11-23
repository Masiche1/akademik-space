import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ess12-u1-lesson-1-4",
  code: "1-4",
  title: "Earth's History and Resources",
  goal: "I CAN explain Earth's history and evaluate resource use.",
  standards: ["HS-ESS1-4", "HS-ESS1-5", "HS-ESS1-6", "HS-ESS1-7", "HS-ESS3-1"],
  vocabulary: [
    { term: "Geologic time", definition: "Earth's 4.5 billion year history." },
    { term: "Fossil record", definition: "Evidence of past life." },
    { term: "Plate tectonics", definition: "Earth's surface movement." },
    { term: "Mineral resource", definition: "Nonliving material useful to humans." },
    { term: "Energy resource", definition: "Fuel source." },
  ],
  concepts: [
    {
      id: "ess12-u1-earth-history",
      title: "Earth's history and resources",
      skill: "Explain Earth's history and resource classification.",
      lesson: {
        sections: [
          {
            heading: "Geologic time and fossils",
            body: "Earth is ~4.5 billion years old. The fossil record documents life over deep time — mass extinctions punctuate the record. Plate tectonics explains continental movement, mountain building and volcanism.",
          },
          {
            heading: "Resources",
            body: "Mineral resources (metals, industrial minerals) and energy resources (fossil fuels, renewables) are extracted from Earth. Resource availability, extraction impacts and sustainability trade-offs guide management decisions.",
          },
        ],
        keyFormulas: [
          { name: "Geologic time", statement: "4.5 billion years." },
          { name: "Fossils", statement: "Past life evidence." },
          { name: "Plate tectonics", statement: "Surface movement." },
        ],
        workedExample: {
          problem: "What evidence shows Earth is billions of years old?",
          solution: "Radioisotope dating of rocks and fossils shows ages up to ~4.5 billion years; the fossil record shows life evolving over deep time.",
        },
      },
      questions: [
        {
          id: "ess12-u1-earth-history-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth is approximately how old?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10,000 years"
                    },
                    {
                              "id": "b",
                              "text": "4.5 billion years"
                    },
                    {
                              "id": "c",
                              "text": "1 million years"
                    },
                    {
                              "id": "d",
                              "text": "100,000 years"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Age",
                              "statement": "~4.5 billion years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth formed about 4.5 billion years ago.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 4.5 billion years",
          "commonErrors": [
                    "Underestimating geologic time."
          ]
},
        },
        {
          id: "ess12-u1-earth-history-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plate tectonics explains ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weather"
                    },
                    {
                              "id": "b",
                              "text": "continental movement and earthquakes"
                    },
                    {
                              "id": "c",
                              "text": "ocean currents only"
                    },
                    {
                              "id": "d",
                              "text": "clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plate tectonics",
                              "statement": "Earth's surface plates move."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plate tectonics explains continental drift, earthquakes, volcanoes and mountain building.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** continental movement and earthquakes",
          "commonErrors": [
                    "Confusing with weather systems."
          ]
},
        },
        {
          id: "ess12-u1-earth-history-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth's age is about 4.5 billion years. How many billion?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Billion",
                              "answer": 4.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Age",
                              "statement": "4.5 billion years."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4.5 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4.5$",
          "commonErrors": [
                    "Saying 4 or 5."
          ]
},
        },
        {
          id: "ess12-u1-earth-history-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how the fossil record provides evidence for both evolution and Earth's long history.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fossil record",
                              "statement": "Documents past life."
                    },
                    {
                              "kind": "technique",
                              "name": "Evidence",
                              "statement": "Layers = time sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fossils appear in sedimentary layers — deeper layers are older. The sequence shows simpler organisms below, more complex above, documenting evolution over billions of years. Radioisotope dating confirms the timescale.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains both evolution and deep time evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Layered fossils = time sequence + evolutionary change.**",
          "commonErrors": [
                    "Mentioning only extinction."
          ]
},
        },
      ],
    },
  ],
};
