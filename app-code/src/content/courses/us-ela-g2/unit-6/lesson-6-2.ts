import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ela2-u6-lesson-6-2",
  code: "6-2",
  title: "Choose a Topic",
  goal: "I CAN choose a topic and tell what I want to teach.",
  standards: ["W.2.2"],
  vocabulary: [
    { term: "Topic", definition: "What we write about." },
    { term: "Choose", definition: "Pick one." },
    { term: "Teach", definition: "Give information." },
    { term: "Interest", definition: "Something we like." },
    { term: "Fact", definition: "Something true." },
    { term: "Explain", definition: "Tell how/why." },
    { term: "Audience", definition: "Who reads it." },
    { term: "Learn", definition: "Gain knowledge." },
  ],
  concepts: [
    {
      id: "ela2-u6-info-topic",
      title: "Choosing a topic",
      skill: "Pick a topic and decide what information to teach.",
      lesson: {
        sections: [
          {
            heading: "Pick something to teach",
            body: "Choose a **topic** you know or want to learn — animals, weather, how things work. Decide what you want to **teach** about it.",
          },
          {
            heading: "Facts to include",
            body: "Think of **facts** you want to share. 'I want to teach that penguins live in cold places.'",
          },
        ],
        keyFormulas: [
          { name: "Choose topic", statement: "Pick a subject + decide what facts to teach." },
        ],
        workedExample: {
          problem: "Choose a topic and say what you want to teach.",
          solution: "Topic: **penguins**. Teach: they live in cold places, have feathers, can't fly but swim well.",
        },
      },
      questions: [
        {
          id: "ela2-u6-info-topic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A good topic for informational writing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "my dog"
                    },
                    {
                              "id": "b",
                              "text": "how penguins stay warm"
                    },
                    {
                              "id": "c",
                              "text": "a made-up dragon"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'How penguins stay warm' teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'How penguins stay warm' teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**how penguins stay warm**",
          "commonErrors": [
                    "Picks fiction or vague."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When choosing a topic, pick something...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "you know nothing about"
                    },
                    {
                              "id": "b",
                              "text": "you know about or want to learn"
                    },
                    {
                              "id": "c",
                              "text": "that is made up"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pick something you know or want to learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pick something you know or want to learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**know or want to learn**",
          "commonErrors": [
                    "Picks unknown."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a topic for informational writing. What facts do you want to teach?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose topic",
                              "statement": "Topic + facts to teach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses topic + facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Topic: rain; teach: clouds make rain, rain waters plants.'**",
          "commonErrors": [
                    "No topic.",
                    "No facts."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Audience' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the topic"
                    },
                    {
                              "id": "b",
                              "text": "who will read the writing"
                    },
                    {
                              "id": "c",
                              "text": "a fact"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Audience = who reads it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Audience = who reads it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**who reads it**",
          "commonErrors": [
                    "Confuses with topic."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose a topic and list three facts you want to teach.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Topic + facts",
                              "statement": "Topic + 3 facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses topic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lists 3 facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Topic: butterflies; facts: start as caterpillars, have wings, drink nectar.'**",
          "commonErrors": [
                    "No topic.",
                    "Fewer than 3 facts."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick one."
                    },
                    {
                              "id": "b",
                              "text": "What we write about."
                    },
                    {
                              "id": "c",
                              "text": "Give information."
                    },
                    {
                              "id": "d",
                              "text": "Something we like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What we write about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What we write about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What we write about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Give information."
                    },
                    {
                              "id": "b",
                              "text": "Something we like."
                    },
                    {
                              "id": "c",
                              "text": "Something true."
                    },
                    {
                              "id": "d",
                              "text": "Pick one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Choose\" means Pick one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choose\" means Pick one.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Choose** = Pick one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u6-info-topic-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teach\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something we like."
                    },
                    {
                              "id": "b",
                              "text": "Give information."
                    },
                    {
                              "id": "c",
                              "text": "Something true."
                    },
                    {
                              "id": "d",
                              "text": "Tell how/why."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Teach\" means Give information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teach\" means Give information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Teach** = Give information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
