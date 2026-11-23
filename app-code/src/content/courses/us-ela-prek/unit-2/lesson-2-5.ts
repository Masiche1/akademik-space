import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "epk-u2-lesson-2-5",
  code: "2-5",
  title: "Ending Sounds",
  goal: "I CAN hear the last sound in a word.",
  standards: ["ELOF-PK.LL.PHONO.5"],
  vocabulary: [
    { term: "Ending sound", definition: "The last sound you hear in a word." },
    { term: "Final sound", definition: "The sound at the end." },
    { term: "Last sound", definition: "The sound you hear last." },
    { term: "Final phoneme", definition: "The last single sound." },
    { term: "Sound out", definition: "Say the word slowly to hear all sounds." },
  ],
  concepts: [
    {
      id: "epk-u2-ending-sounds",
      title: "Ending sounds",
      skill: "Identify the last sound in a spoken word.",
      lesson: {
        sections: [
          {
            heading: "Last sound",
            body: "Every word ends with a sound. 'Cat' ends with 't', 'sun' ends with 'n'. Say the word slowly and listen to the **last sound**.",
          },
          {
            heading: "Beginning and ending",
            body: "We already know beginning sounds. Now listen for **ending sounds** — the opposite end. 'Dog' starts with 'd' and ends with 'g'.",
          },
        ],
        keyFormulas: [
          { name: "Ending sound", statement: "The last phoneme heard when saying a word slowly." },
        ],
        workedExample: {
          problem: "What is the ending sound of 'dog'?",
          solution: "Say it slowly: d-o-**g**. The last sound is **'g'**.",
        },
      },
      questions: [
        {
          id: "epk-u2-ending-sounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ending sound of 'cat'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "k"
                    },
                    {
                              "id": "b",
                              "text": "t"
                    },
                    {
                              "id": "c",
                              "text": "a"
                    },
                    {
                              "id": "d",
                              "text": "c"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'cat' ends with the 't' sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'cat' ends with the 't' sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**t**",
          "commonErrors": [
                    "Picks a middle or beginning sound."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the ending sound of 'sun'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "s"
                    },
                    {
                              "id": "b",
                              "text": "u"
                    },
                    {
                              "id": "c",
                              "text": "n"
                    },
                    {
                              "id": "d",
                              "text": "o"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'sun' ends with 'n'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sun' ends with 'n'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**n**",
          "commonErrors": [
                    "Picks beginning sound."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say the word 'fish' slowly. What is the last sound you hear?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ending sound",
                              "statement": "Last phoneme of 'fish'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 'sh'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sh**",
          "commonErrors": [
                    "Says a different sound.",
                    "Cannot isolate last sound."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word ends with the 'g' sound?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cat"
                    },
                    {
                              "id": "b",
                              "text": "dog"
                    },
                    {
                              "id": "c",
                              "text": "sun"
                    },
                    {
                              "id": "d",
                              "text": "hat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'dog' ends with 'g'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'dog' ends with 'g'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**dog**",
          "commonErrors": [
                    "Picks word with different ending."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick three words. For each, say it slowly and name the last sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ending sounds",
                              "statement": "Isolate final phoneme of each word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 3 words slowly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names correct last sound for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'cat'->t, 'sun'->n, 'dog'->g**",
          "commonErrors": [
                    "Cannot isolate sounds.",
                    "Wrong sounds."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ending sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The sound at the end."
                    },
                    {
                              "id": "b",
                              "text": "The last sound you hear in a word."
                    },
                    {
                              "id": "c",
                              "text": "The sound you hear last."
                    },
                    {
                              "id": "d",
                              "text": "The last single sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Ending sound\" means The last sound you hear in a word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ending sound\" means The last sound you hear in a word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Ending sound** = The last sound you hear in a word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Final sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The sound you hear last."
                    },
                    {
                              "id": "b",
                              "text": "The last single sound."
                    },
                    {
                              "id": "c",
                              "text": "Say the word slowly to hear all sounds."
                    },
                    {
                              "id": "d",
                              "text": "The sound at the end."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Final sound\" means The sound at the end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Final sound\" means The sound at the end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Final sound** = The sound at the end.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u2-ending-sounds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Last sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The last single sound."
                    },
                    {
                              "id": "b",
                              "text": "The sound you hear last."
                    },
                    {
                              "id": "c",
                              "text": "Say the word slowly to hear all sounds."
                    },
                    {
                              "id": "d",
                              "text": "The last sound you hear in a word."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Last sound\" means The sound you hear last."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Last sound\" means The sound you hear last.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Last sound** = The sound you hear last.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
