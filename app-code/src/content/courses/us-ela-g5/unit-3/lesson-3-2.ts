import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ela5-u3-lesson-3-2",
  code: "3-2",
  title: "Integrating Media",
  goal: "I CAN integrate knowledge from media (films, images) with text.",
  standards: ["RL.5.7"],
  vocabulary: [
    { term: "Media", definition: "Films, images, audio." },
    { term: "Integrate", definition: "Combine information." },
    { term: "Text", definition: "Written work." },
    { term: "Film", definition: "Movie/video." },
    { term: "Image", definition: "Picture." },
    { term: "Compare", definition: "See similarities/differences." },
    { term: "Analyze", definition: "Study carefully." },
    { term: "Connection", definition: "Link between media and text." },
  ],
  concepts: [
    {
      id: "ela5-u3-integrating-media",
      title: "Integrating media",
      skill: "Combine information from text with media like films and images.",
      lesson: {
        sections: [
          {
            heading: "Text + media",
            body: "You can **integrate** (combine) information from a **text** with **media** like films or images. Compare what they show — same? different? complementary?",
          },
          {
            heading: "Why integrate",
            body: "Media adds **visuals** and **sound**; text adds **detail** and **depth**. Together they give a **complete picture**.",
          },
        ],
        keyFormulas: [
          { name: "Integrate", statement: "Text + media = complete understanding." },
        ],
        workedExample: {
          problem: "A story describes a storm; the film shows it. How do they complement?",
          solution: "Text gives character feelings; film shows the storm's power visually — together more powerful.",
        },
      },
      questions: [
        {
          id: "ela5-u3-integrating-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Integrating media' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignoring the text"
                    },
                    {
                              "id": "b",
                              "text": "combining information from text and media"
                    },
                    {
                              "id": "c",
                              "text": "only watching films"
                    },
                    {
                              "id": "d",
                              "text": "only reading"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Combine text + media."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combine text + media.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "combining information from text and media",
          "commonErrors": [
                    "Ignores one source."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When comparing a film to its book, you should look for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only differences"
                    },
                    {
                              "id": "b",
                              "text": "how they are similar and different"
                    },
                    {
                              "id": "c",
                              "text": "only the film"
                    },
                    {
                              "id": "d",
                              "text": "only the book"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Similarities and differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarities and differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how they are similar and different",
          "commonErrors": [
                    "Only looks at one."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare a scene from a book to its film version. What does each add that the other doesn't?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrating",
                              "statement": "What each adds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares scene.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Book gives thoughts/feelings; film shows visuals/sound effects.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No differences."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Media can include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only books"
                    },
                    {
                              "id": "b",
                              "text": "films, images, audio"
                    },
                    {
                              "id": "c",
                              "text": "only text"
                    },
                    {
                              "id": "d",
                              "text": "only pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Films, images, audio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Films, images, audio.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "films, images, audio",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does integrating media with text deepen your understanding? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrating",
                              "statement": "Effect + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Film shows character's facial expressions; book explains why — together deeper understanding.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Media\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine information."
                    },
                    {
                              "id": "b",
                              "text": "Films, images, audio."
                    },
                    {
                              "id": "c",
                              "text": "Written work."
                    },
                    {
                              "id": "d",
                              "text": "Movie/video."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Media\" means Films, images, audio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Media\" means Films, images, audio.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Media** = Films, images, audio.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Written work."
                    },
                    {
                              "id": "b",
                              "text": "Movie/video."
                    },
                    {
                              "id": "c",
                              "text": "Picture."
                    },
                    {
                              "id": "d",
                              "text": "Combine information."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integrating-media-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movie/video."
                    },
                    {
                              "id": "b",
                              "text": "Written work."
                    },
                    {
                              "id": "c",
                              "text": "Picture."
                    },
                    {
                              "id": "d",
                              "text": "See similarities/differences."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text\" means Written work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text\" means Written work.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text** = Written work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
