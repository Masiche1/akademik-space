import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela1-u3-lesson-3-4",
  code: "3-4",
  title: "Pictures and Diagrams",
  goal: "I CAN use pictures and diagrams to understand informational texts.",
  standards: ["RI.1.5", "RI.1.6"],
  vocabulary: [
    { term: "Picture", definition: "Image in text." },
    { term: "Diagram", definition: "Drawing that shows parts." },
    { term: "Illustration", definition: "Picture in text." },
    { term: "Label", definition: "Word naming picture part." },
    { term: "Caption", definition: "Words explaining picture." },
    { term: "Photograph", definition: "Real picture." },
    { term: "Chart", definition: "Shows information." },
    { term: "Map", definition: "Shows places." },
  ],
  concepts: [
    {
      id: "ela1-u3-pictures-diagrams",
      title: "Pictures and diagrams",
      skill: "Use pictures, diagrams, charts and maps to learn about a topic.",
      lesson: {
        sections: [
          {
            heading: "Pictures teach too",
            body: "**Pictures**, **diagrams**, **charts** and **maps** in informational texts show information that words might not. A **diagram** shows **parts** of something; a **map** shows **places**.",
          },
          {
            heading: "Use labels and captions",
            body: "**Labels** name parts of a picture; **captions** explain what the picture shows. Read them to learn more.",
          },
        ],
        keyFormulas: [
          { name: "Visuals", statement: "Picture + label + caption = extra information." },
        ],
        workedExample: {
          problem: "A diagram of a plant shows roots, stem, leaves with labels. What does it teach?",
          solution: "It teaches the **parts of a plant** — labels name each part.",
        },
      },
      questions: [
        {
          id: "ela1-u3-pictures-diagrams-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'diagram' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture only"
                    },
                    {
                              "id": "b",
                              "text": "a drawing that shows parts of something"
                    },
                    {
                              "id": "c",
                              "text": "a story"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Diagram = shows parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diagram = shows parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**shows parts**",
          "commonErrors": [
                    "Thinks it's just a picture."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'map' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "animals"
                    },
                    {
                              "id": "b",
                              "text": "places"
                    },
                    {
                              "id": "c",
                              "text": "food"
                    },
                    {
                              "id": "d",
                              "text": "weather only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Map shows places."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Map shows places.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**places**",
          "commonErrors": [
                    "Picks wrong content."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at a picture or diagram in a text. What does it show? How do labels or captions help?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visuals",
                              "statement": "What picture shows + labels/captions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says what picture shows + how labels help.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Diagram shows frog parts; labels name each part.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Ignores labels."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'label' in a diagram...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is a caption"
                    },
                    {
                              "id": "b",
                              "text": "names a part of the picture"
                    },
                    {
                              "id": "c",
                              "text": "is the title"
                    },
                    {
                              "id": "d",
                              "text": "is a fact"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Label = names picture part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Label = names picture part.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**names part**",
          "commonErrors": [
                    "Confuses with caption."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Look at a diagram or chart in an informational text. Describe what it shows and how it helps you understand the topic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visuals",
                              "statement": "Describe + explain how helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes what it shows.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how it helps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Chart shows frog life cycle stages; helps see the order.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Drawing that shows parts."
                    },
                    {
                              "id": "b",
                              "text": "Image in text."
                    },
                    {
                              "id": "c",
                              "text": "Picture in text."
                    },
                    {
                              "id": "d",
                              "text": "Word naming picture part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture\" means Image in text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture\" means Image in text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture** = Image in text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Diagram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture in text."
                    },
                    {
                              "id": "b",
                              "text": "Word naming picture part."
                    },
                    {
                              "id": "c",
                              "text": "Words explaining picture."
                    },
                    {
                              "id": "d",
                              "text": "Drawing that shows parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Diagram\" means Drawing that shows parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Diagram\" means Drawing that shows parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Diagram** = Drawing that shows parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u3-pictures-diagrams-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word naming picture part."
                    },
                    {
                              "id": "b",
                              "text": "Picture in text."
                    },
                    {
                              "id": "c",
                              "text": "Words explaining picture."
                    },
                    {
                              "id": "d",
                              "text": "Real picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Illustration\" means Picture in text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Illustration\" means Picture in text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Illustration** = Picture in text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
