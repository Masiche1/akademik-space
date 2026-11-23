import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "ela0-u3-lesson-3-5",
  code: "3-5",
  title: "Compare Texts",
  goal: "I CAN compare an informational text and a story.",
  standards: ["RI.K.9", "RL.K.9"],
  vocabulary: [
    { term: "Compare", definition: "Look at same and different." },
    { term: "Informational", definition: "Teaches facts." },
    { term: "Story", definition: "A tale with characters." },
    { term: "Fiction", definition: "Made-up story." },
    { term: "Nonfiction", definition: "Real information." },
    { term: "Same", definition: "Alike." },
    { term: "Different", definition: "Not alike." },
    { term: "Purpose", definition: "Why the text exists." },
  ],
  concepts: [
    {
      id: "ela0-u3-compare-texts",
      title: "Comparing texts",
      skill: "Compare informational texts and stories by purpose and content.",
      lesson: {
        sections: [
          {
            heading: "Two kinds of text",
            body: "A **story** (fiction) is made up — it has characters and a plot. An **informational text** (nonfiction) teaches **facts** — real information.",
          },
          {
            heading: "Compare them",
            body: "Compare by **purpose**: stories entertain; info texts teach. Compare by **content**: stories have characters/events; info texts have facts/topics.",
          },
        ],
        keyFormulas: [
          { name: "Compare texts", statement: "Story=entertain+characters; Info=teach+facts." },
        ],
        workedExample: {
          problem: "Compare 'The Three Little Pigs' (story) and 'All About Pigs' (info). How are they different?",
          solution: "Story is made up with characters; info text teaches real facts about pigs.",
        },
      },
      questions: [
        {
          id: "ela0-u3-compare-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'story' (fiction) is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "real facts"
                    },
                    {
                              "id": "b",
                              "text": "a made-up tale with characters"
                    },
                    {
                              "id": "c",
                              "text": "a list"
                    },
                    {
                              "id": "d",
                              "text": "a diagram"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Story = made-up tale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Story = made-up tale.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**made-up tale**",
          "commonErrors": [
                    "Thinks story is nonfiction."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An informational text teaches...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made-up stories"
                    },
                    {
                              "id": "b",
                              "text": "real facts"
                    },
                    {
                              "id": "c",
                              "text": "jokes"
                    },
                    {
                              "id": "d",
                              "text": "poems only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Info text teaches real facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Info text teaches real facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**real facts**",
          "commonErrors": [
                    "Thinks info is fiction."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare a story and an informational text on the same topic. How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare texts",
                              "statement": "Story vs info differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Story is made up with characters; info teaches real facts.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Says they're the same."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'purpose' of an informational text is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "entertain"
                    },
                    {
                              "id": "b",
                              "text": "teach facts"
                    },
                    {
                              "id": "c",
                              "text": "make you laugh"
                    },
                    {
                              "id": "d",
                              "text": "scare you"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Info text purpose = teach facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Info text purpose = teach facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**teach facts**",
          "commonErrors": [
                    "Thinks purpose is entertainment."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two texts (one story, one informational). Name two ways they are different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare texts",
                              "statement": "Purpose + content differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two differences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains purpose difference.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Story entertains with characters; info teaches facts about topic.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one difference."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Look at same and different."
                    },
                    {
                              "id": "c",
                              "text": "A tale with characters."
                    },
                    {
                              "id": "d",
                              "text": "Made-up story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Look at same and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Look at same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Look at same and different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tale with characters."
                    },
                    {
                              "id": "b",
                              "text": "Made-up story."
                    },
                    {
                              "id": "c",
                              "text": "Real information."
                    },
                    {
                              "id": "d",
                              "text": "Teaches facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-compare-texts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Made-up story."
                    },
                    {
                              "id": "b",
                              "text": "A tale with characters."
                    },
                    {
                              "id": "c",
                              "text": "Real information."
                    },
                    {
                              "id": "d",
                              "text": "Alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story\" means A tale with characters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story\" means A tale with characters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story** = A tale with characters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
