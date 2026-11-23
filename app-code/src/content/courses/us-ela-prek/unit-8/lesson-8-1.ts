import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "epk-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Print and Sounds",
  goal: "I CAN show print awareness and hear beginning sounds.",
  standards: ["ELOF-PK.LL.REVIEW.1"],
  vocabulary: [
    { term: "Review", definition: "Practice everything." },
    { term: "Print", definition: "Words we read." },
    { term: "Sound", definition: "What letters make." },
    { term: "Rhyme", definition: "Words that sound alike at the end." },
    { term: "Letter", definition: "A symbol we read and write." },
  ],
  concepts: [
    {
      id: "epk-u8-review-print-phonics",
      title: "Print and sounds review",
      skill: "Combine print awareness and phonological awareness.",
      lesson: {
        sections: [
          {
            heading: "Print + sounds",
            body: "Print awareness (knowing how to read: left to right, letters make words) and phonological awareness (hearing sounds: rhymes, syllables, beginning sounds) work together.",
          },
          {
            heading: "Put it together",
            body: "Point to a word, say its letters' sounds, and hear if words rhyme. These are the foundations of reading.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Print awareness + phonological awareness = reading foundation." },
        ],
        workedExample: {
          problem: "Point to 'cat' and say its sounds. Does 'cat' rhyme with 'hat'?",
          solution: "c-a-t sounds: /k/-/a/-/t/. 'cat' and 'hat' **rhyme** (same ending sound).",
        },
      },
      questions: [
        {
          id: "epk-u8-review-print-phonics-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading starts at the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bottom right"
                    },
                    {
                              "id": "b",
                              "text": "top left"
                    },
                    {
                              "id": "c",
                              "text": "middle"
                    },
                    {
                              "id": "d",
                              "text": "anywhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Start top left, go right, down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start top left, go right, down.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Top left**",
          "commonErrors": [
                    "Wrong start."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Do 'cat' and 'hat' rhyme?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No"
                    },
                    {
                              "id": "b",
                              "text": "Yes"
                    },
                    {
                              "id": "c",
                              "text": "Only in writing"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Both end with 'at' — they rhyme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both end with 'at' — they rhyme.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes**",
          "commonErrors": [
                    "Thinks rhyme needs same start."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point to a word. Say each letter's sound. Then say a word that rhymes with it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Print + sounds",
                              "statement": "Letter sounds + rhyming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says letter sounds.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says rhyming word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'd-o-g -> /d/-/o/-/g/; rhymes with 'log'.**",
          "commonErrors": [
                    "Cannot sound out.",
                    "No rhyme."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many syllables in 'water'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Wa-ter = 2 syllables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wa-ter = 2 syllables.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Show print awareness (point to where reading starts) and phonological awareness (clap syllables in 'elephant').",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Print + phonics",
                              "statement": "Print direction + syllable count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Points to top left start.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Claps 3 syllables in 'elephant'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Start top left; elephant = 3 beats**",
          "commonErrors": [
                    "Wrong start or count.",
                    "Cannot do both."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Review\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words we read."
                    },
                    {
                              "id": "b",
                              "text": "Practice everything."
                    },
                    {
                              "id": "c",
                              "text": "What letters make."
                    },
                    {
                              "id": "d",
                              "text": "Words that sound alike at the end."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Review\" means Practice everything."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Review\" means Practice everything.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Review** = Practice everything.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Print\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What letters make."
                    },
                    {
                              "id": "b",
                              "text": "Words that sound alike at the end."
                    },
                    {
                              "id": "c",
                              "text": "A symbol we read and write."
                    },
                    {
                              "id": "d",
                              "text": "Words we read."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Print\" means Words we read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Print\" means Words we read.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Print** = Words we read.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-print-phonics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words that sound alike at the end."
                    },
                    {
                              "id": "b",
                              "text": "What letters make."
                    },
                    {
                              "id": "c",
                              "text": "A symbol we read and write."
                    },
                    {
                              "id": "d",
                              "text": "Practice everything."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sound\" means What letters make."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means What letters make.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sound** = What letters make.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
