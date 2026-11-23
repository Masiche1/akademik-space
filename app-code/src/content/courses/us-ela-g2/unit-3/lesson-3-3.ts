import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ela2-u3-lesson-3-3",
  code: "3-3",
  title: "Text Features",
  goal: "I CAN use text features to understand informational texts.",
  standards: ["RI.2.5", "RI.2.6"],
  vocabulary: [
    { term: "Text feature", definition: "Part that helps find info." },
    { term: "Heading", definition: "Section title." },
    { term: "Label", definition: "Word naming picture." },
    { term: "Caption", definition: "Words explaining picture." },
    { term: "Glossary", definition: "Words + meanings." },
    { term: "Index", definition: "Topics + pages." },
    { term: "Illustration", definition: "Picture in text." },
    { term: "Photograph", definition: "Real picture." },
  ],
  concepts: [
    {
      id: "ela2-u3-text-features",
      title: "Text features",
      skill: "Use headings, labels, captions, glossaries and illustrations to find information.",
      lesson: {
        sections: [
          {
            heading: "Parts that help",
            body: "**Text features** help us find info: **headings** tell section topics, **labels** name pictures, **captions** explain them, **glossaries** define words, **indexes** list topics.",
          },
          {
            heading: "Use them",
            body: "Look at title, headings and pictures before reading — they tell us what the text is about.",
          },
        ],
        keyFormulas: [
          { name: "Text features", statement: "Headings, labels, captions, glossary, index, illustrations." },
        ],
        workedExample: {
          problem: "You want to know what a big picture shows. Where do you look?",
          solution: "Look at the **caption** or **label** — they explain the picture.",
        },
      },
      questions: [
        {
          id: "ela2-u3-text-features-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'heading' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture"
                    },
                    {
                              "id": "b",
                              "text": "a title that tells what a section is about"
                    },
                    {
                              "id": "c",
                              "text": "a word"
                    },
                    {
                              "id": "d",
                              "text": "a number"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Heading = section title."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heading = section title.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**section title**",
          "commonErrors": [
                    "Confuses with caption."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'caption' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a heading"
                    },
                    {
                              "id": "b",
                              "text": "words that explain a picture"
                    },
                    {
                              "id": "c",
                              "text": "a glossary"
                    },
                    {
                              "id": "d",
                              "text": "an index"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Caption = explains picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Caption = explains picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**explains picture**",
          "commonErrors": [
                    "Confuses with label."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at an informational text. Name two text features and how each helps you.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Text features",
                              "statement": "Name features + how they help."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 features + uses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Heading tells section topic; caption explains picture.'**",
          "commonErrors": [
                    "Cannot name features.",
                    "No uses."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'glossary' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a list of words and meanings"
                    },
                    {
                              "id": "b",
                              "text": "a picture"
                    },
                    {
                              "id": "c",
                              "text": "a heading"
                    },
                    {
                              "id": "d",
                              "text": "an index"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Glossary = words + meanings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glossary = words + meanings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**words + meanings**",
          "commonErrors": [
                    "Confuses with index."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use a text feature to find information: look at index or glossary to find a topic or word meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Text features",
                              "statement": "Use index/glossary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses a feature correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finds the information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Used glossary to find nocturnal = active at night.'**",
          "commonErrors": [
                    "Cannot use feature.",
                    "Cannot find info."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text feature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Section title."
                    },
                    {
                              "id": "b",
                              "text": "Part that helps find info."
                    },
                    {
                              "id": "c",
                              "text": "Word naming picture."
                    },
                    {
                              "id": "d",
                              "text": "Words explaining picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means Part that helps find info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means Part that helps find info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = Part that helps find info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word naming picture."
                    },
                    {
                              "id": "b",
                              "text": "Words explaining picture."
                    },
                    {
                              "id": "c",
                              "text": "Words + meanings."
                    },
                    {
                              "id": "d",
                              "text": "Section title."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Heading\" means Section title."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heading\" means Section title.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Heading** = Section title.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u3-text-features-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Label\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words explaining picture."
                    },
                    {
                              "id": "b",
                              "text": "Word naming picture."
                    },
                    {
                              "id": "c",
                              "text": "Words + meanings."
                    },
                    {
                              "id": "d",
                              "text": "Topics + pages."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Label\" means Word naming picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Label\" means Word naming picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Label** = Word naming picture.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
