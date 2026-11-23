import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "epk-u3-lesson-3-4",
  code: "3-4",
  title: "Find Letters in Words",
  goal: "I CAN spot a letter in a word or name.",
  standards: ["ELOF-PK.LL.ALPH.4"],
  vocabulary: [
    { term: "Find", definition: "Locate something." },
    { term: "Spot", definition: "Notice or see." },
    { term: "Letter in word", definition: "A letter that appears in a word." },
    { term: "Name", definition: "A person's name has letters." },
    { term: "Scan", definition: "Look through words to find a letter." },
  ],
  concepts: [
    {
      id: "epk-u3-find-letters",
      title: "Finding letters",
      skill: "Locate a specific letter within words or names.",
      lesson: {
        sections: [
          {
            heading: "Spot the letter",
            body: "Look at a word and find a letter: in 'cat', can you find 'a'? In 'dog', can you find 'g'? Scan each letter.",
          },
          {
            heading: "Letters in names",
            body: "Your name has letters: S-a-m has 'S', 'a' and 'm'. Practice finding letters in your own name.",
          },
        ],
        keyFormulas: [
          { name: "Find letter", statement: "Scan a word letter by letter to locate a target letter." },
        ],
        workedExample: {
          problem: "Find the letter 't' in 'cat'.",
          solution: "c-a-**t** — the letter 't' is at the end.",
        },
      },
      questions: [
        {
          id: "epk-u3-find-letters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word contains the letter 'a'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dog"
                    },
                    {
                              "id": "b",
                              "text": "cat"
                    },
                    {
                              "id": "c",
                              "text": "sun"
                    },
                    {
                              "id": "d",
                              "text": "pig"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'cat' has an 'a'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'cat' has an 'a'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**cat**",
          "commonErrors": [
                    "Picks word without 'a'."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Does the word 'dog' contain the letter 'g'?",
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
                              "text": "Only in uppercase"
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
                              "statement": "d-o-**g** — yes, 'g' is there."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "d-o-**g** — yes, 'g' is there.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes**",
          "commonErrors": [
                    "Misses the letter."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the letter 's' in your name or a word. Where is it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Find letter",
                              "statement": "Scan for the target letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds 's' and says its position.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam' -> s at the start**",
          "commonErrors": [
                    "Cannot find letter.",
                    "Wrong position."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many times does 'a' appear in 'banana'?",
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
                              "text": "0"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "b-a-n-a-n-a = 'a' appears 3 times."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "b-a-n-a-n-a = 'a' appears 3 times.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Miscounts."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Look at the word 'elephant'. Find and point to the letters e, l and p.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Find letters",
                              "statement": "Scan word for target letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds 'e' correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finds 'l' and 'p' correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e-l-e-p-h-a-n-t: e, l, p all present**",
          "commonErrors": [
                    "Cannot find letters.",
                    "Wrong letters."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Find\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Notice or see."
                    },
                    {
                              "id": "b",
                              "text": "Locate something."
                    },
                    {
                              "id": "c",
                              "text": "A letter that appears in a word."
                    },
                    {
                              "id": "d",
                              "text": "A person's name has letters."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Find\" means Locate something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Find\" means Locate something.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Find** = Locate something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A letter that appears in a word."
                    },
                    {
                              "id": "b",
                              "text": "A person's name has letters."
                    },
                    {
                              "id": "c",
                              "text": "Look through words to find a letter."
                    },
                    {
                              "id": "d",
                              "text": "Notice or see."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Spot\" means Notice or see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spot\" means Notice or see.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Spot** = Notice or see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-find-letters-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter in word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A person's name has letters."
                    },
                    {
                              "id": "b",
                              "text": "A letter that appears in a word."
                    },
                    {
                              "id": "c",
                              "text": "Look through words to find a letter."
                    },
                    {
                              "id": "d",
                              "text": "Locate something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter in word\" means A letter that appears in a word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter in word\" means A letter that appears in a word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter in word** = A letter that appears in a word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
