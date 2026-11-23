import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ess12-u4-lesson-4-2",
  code: "4-2",
  title: "Space Technology Spinoffs",
  goal: "I CAN identify technologies developed for space that benefit Earth.",
  standards: ["HS-ESS1-7"],
  vocabulary: [
    { term: "Spinoff", definition: "Space tech adapted for Earth." },
    { term: "Memory foam", definition: "NASA material." },
    { term: "GPS", definition: "Satellite navigation." },
    { term: "Medical imaging", definition: "Space-derived tech." },
    { term: "Water purification", definition: "Space life support tech." },
  ],
  concepts: [
    {
      id: "ess12-u4-space-tech",
      title: "Space technology spinoffs",
      skill: "Identify space-derived technologies.",
      lesson: {
        sections: [
          {
            heading: "What are spinoffs?",
            body: "Technologies developed for space missions often find Earth applications: NASA invented memory foam for crash protection, developed water purification for astronauts, and created imaging tech for medical diagnostics.",
          },
          {
            heading: "Everyday benefits",
            body: "GPS navigation, weather satellites, satellite communications, medical imaging (MRI/CT), insulated materials, and even camera phones use space-derived technology. Space research drives innovation that improves daily life.",
          },
        ],
        keyFormulas: [
          { name: "Spinoff", statement: "Space → Earth tech." },
          { name: "Memory foam", statement: "NASA crash protection." },
          { name: "GPS", statement: "Satellite navigation." },
        ],
        workedExample: {
          problem: "Name one everyday item that uses space technology.",
          solution: "A smartphone camera — CCD sensors were developed for space imaging.",
        },
      },
      questions: [
        {
          id: "ess12-u4-space-tech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'spinoff' technology is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "space junk"
                    },
                    {
                              "id": "b",
                              "text": "space tech adapted for Earth use"
                    },
                    {
                              "id": "c",
                              "text": "a failed mission"
                    },
                    {
                              "id": "d",
                              "text": "space tourism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Spinoff",
                              "statement": "Space tech → Earth application."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spinoffs are space technologies adapted for everyday Earth use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** space tech adapted for Earth use",
          "commonErrors": [
                    "Thinking spinoffs are failures."
          ]
},
        },
        {
          id: "ess12-u4-space-tech-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which technology originated from space research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the wheel"
                    },
                    {
                              "id": "b",
                              "text": "memory foam"
                    },
                    {
                              "id": "c",
                              "text": "the telephone"
                    },
                    {
                              "id": "d",
                              "text": "the printing press"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Memory foam",
                              "statement": "NASA-developed material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Memory foam was developed by NASA for astronaut seat cushioning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** memory foam",
          "commonErrors": [
                    "Choosing a pre-space invention."
          ]
},
        },
        {
          id: "ess12-u4-space-tech-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name 3 space spinoffs mentioned: memory foam, GPS, medical imaging — how many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Spinoffs",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 spinoffs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counting only one."
          ]
},
        },
        {
          id: "ess12-u4-space-tech-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why space research benefits Earth even when its primary goal is exploring space.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spinoffs",
                              "statement": "Secondary benefits."
                    },
                    {
                              "kind": "technique",
                              "name": "Example",
                              "statement": "Real applications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Space missions require solving extreme problems — extreme temperatures, vacuum, limited resources. Solutions developed (materials, life support, imaging, computing) often transfer to Earth applications like medical devices, insulation and navigation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains the innovation transfer mechanism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Space challenges → Earth solutions.**",
          "commonErrors": [
                    "Saying space research is wasteful."
          ]
},
        },
      ],
    },
  ],
};
