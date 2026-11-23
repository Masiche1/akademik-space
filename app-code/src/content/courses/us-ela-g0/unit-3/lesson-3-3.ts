import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ela0-u3-lesson-3-3",
  code: "3-3",
  title: "Text Features",
  goal: "I CAN use text features and illustrations to understand informational texts.",
  standards: ["RI.K.5", "RI.K.6", "RI.K.7"],
  vocabulary: [
    { term: "Text feature", definition: "A part of a text that helps us find information." },
    { term: "Heading", definition: "A title that tells what a section is about." },
    { term: "Label", definition: "A word that names a picture." },
    { term: "Caption", definition: "Words that explain a picture." },
    { term: "Glossary", definition: "A list of words and meanings." },
    { term: "Index", definition: "A list of topics and page numbers." },
    { term: "Illustration", definition: "A picture in the text." },
  ],
  concepts: [
    {
      id: "ela0-u3-text-features",
      title: "Text features",
      skill: "Use headings, labels, captions, glossaries and illustrations to find information.",
      lesson: {
        sections: [
          {
            heading: "Parts that help",
            body: "**Text features** help us find information: **headings** tell us what a section is about, **labels** name pictures, **captions** explain them, **glossaries** define words, **indexes** list topics.",
          },
          {
            heading: "Use them",
            body: "Before reading, look at the title, headings and pictures. They tell us what the text is about and help us find what we need.",
          },
        ],
        keyFormulas: [
          { name: "Text features", statement: "Headings, labels, captions, glossary, index, illustrations — tools to find info." },
        ],
        workedExample: {
          problem: "You want to know what a big picture shows. Where do you look?",
          solution: "Look at the **caption** or **label** — they explain what the picture shows.",
        },
      },
      questions: [
        {
          id: "ela0-u3-text-features-q1",
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
          id: "ela0-u3-text-features-q2",
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
                              "statement": "Caption = words explaining a picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Caption = words explaining a picture.",
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
          id: "ela0-u3-text-features-q3",
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
          id: "ela0-u3-text-features-q4",
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
          id: "ela0-u3-text-features-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use a text feature to find information: look at the index or glossary to find a topic or word meaning.",
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
          "finalAnswer": "**e.g., 'Used glossary to find 'nocturnal' = active at night.'**",
          "commonErrors": [
                    "Cannot use feature.",
                    "Cannot find info."
          ]
},
        },
        {
          id: "ela0-u3-text-features-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text feature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A title that tells what a section is about."
                    },
                    {
                              "id": "b",
                              "text": "A part of a text that helps us find information."
                    },
                    {
                              "id": "c",
                              "text": "A word that names a picture."
                    },
                    {
                              "id": "d",
                              "text": "Words that explain a picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means A part of a text that helps us find information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means A part of a text that helps us find information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = A part of a text that helps us find information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-text-features-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word that names a picture."
                    },
                    {
                              "id": "b",
                              "text": "Words that explain a picture."
                    },
                    {
                              "id": "c",
                              "text": "A list of words and meanings."
                    },
                    {
                              "id": "d",
                              "text": "A title that tells what a section is about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Heading\" means A title that tells what a section is about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heading\" means A title that tells what a section is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Heading** = A title that tells what a section is about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-text-features-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Label\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words that explain a picture."
                    },
                    {
                              "id": "b",
                              "text": "A word that names a picture."
                    },
                    {
                              "id": "c",
                              "text": "A list of words and meanings."
                    },
                    {
                              "id": "d",
                              "text": "A list of topics and page numbers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Label\" means A word that names a picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Label\" means A word that names a picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Label** = A word that names a picture.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
