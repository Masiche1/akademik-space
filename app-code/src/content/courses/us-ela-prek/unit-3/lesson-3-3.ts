import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "epk-u3-lesson-3-3",
  code: "3-3",
  title: "Letter Sounds",
  goal: "I CAN say the sound a letter makes.",
  standards: ["ELOF-PK.LL.ALPH.3"],
  vocabulary: [
    { term: "Letter sound", definition: "The sound a letter makes, like 'b' for ball." },
    { term: "Phoneme", definition: "A single sound." },
    { term: "Short sound", definition: "The most common sound, like 'a' in apple." },
    { term: "Consonant", definition: "A letter that is not a vowel." },
    { term: "Vowel", definition: "A, E, I, O, U — the vowel letters." },
  ],
  concepts: [
    {
      id: "epk-u3-letter-sounds",
      title: "Letter sounds",
      skill: "Say the sound letters make.",
      lesson: {
        sections: [
          {
            heading: "Sound vs name",
            body: "The letter **B** is named 'bee' but makes the sound 'buh' (as in 'ball'). The **sound** is what you hear in words.",
          },
          {
            heading: "Short sounds",
            body: "Most consonants have a 'short' sound: b, d, f, g, h, j, k, l, m, n, p, r, s, t, v, w, y, z. Vowels (a, e, i, o, u) have sounds too.",
          },
        ],
        keyFormulas: [
          { name: "Letter sound", statement: "The phoneme a letter makes in words: b->'buh', a->'ah'." },
        ],
        workedExample: {
          problem: "What sound does the letter S make?",
          solution: "S makes the 'ssss' sound, like in **'sun'**.",
        },
      },
      questions: [
        {
          id: "epk-u3-letter-sounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sound does the letter B make?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bee"
                    },
                    {
                              "id": "b",
                              "text": "buh"
                    },
                    {
                              "id": "c",
                              "text": "ah"
                    },
                    {
                              "id": "d",
                              "text": "eh"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "B makes the 'buh' sound (as in 'ball'), not the name 'bee'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B makes the 'buh' sound (as in 'ball'), not the name 'bee'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**buh**",
          "commonErrors": [
                    "Confuses name with sound."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What sound does the letter A make in 'apple'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ay"
                    },
                    {
                              "id": "b",
                              "text": "ah"
                    },
                    {
                              "id": "c",
                              "text": "eh"
                    },
                    {
                              "id": "d",
                              "text": "ee"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "A makes 'ah' in 'apple' (short sound)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A makes 'ah' in 'apple' (short sound).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**ah**",
          "commonErrors": [
                    "Says the letter name 'ay'."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say the sound the letter M makes. Then say a word that starts with it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter sound",
                              "statement": "M makes 'mmm' sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 'mmm' and a word like 'moon'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**mmm — 'moon'**",
          "commonErrors": [
                    "Says letter name not sound.",
                    "Wrong word."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a VOWEL letter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "B"
                    },
                    {
                              "id": "b",
                              "text": "A"
                    },
                    {
                              "id": "c",
                              "text": "T"
                    },
                    {
                              "id": "d",
                              "text": "S"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Vowels are A, E, I, O, U."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vowels are A, E, I, O, U.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A**",
          "commonErrors": [
                    "Picks a consonant."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name the sound for three letters: B, S, M. Give a word for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter sounds",
                              "statement": "B->buh, S->sss, M->mmm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 letter sounds.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives correct word for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**B->'ball', S->'sun', M->'moon'**",
          "commonErrors": [
                    "Wrong sounds.",
                    "No words."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single sound."
                    },
                    {
                              "id": "b",
                              "text": "The sound a letter makes, like 'b' for ball."
                    },
                    {
                              "id": "c",
                              "text": "The most common sound, like 'a' in apple."
                    },
                    {
                              "id": "d",
                              "text": "A letter that is not a vowel."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter sound\" means The sound a letter makes, like 'b' for ball."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter sound\" means The sound a letter makes, like 'b' for ball.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter sound** = The sound a letter makes, like 'b' for ball.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Phoneme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The most common sound, like 'a' in apple."
                    },
                    {
                              "id": "b",
                              "text": "A letter that is not a vowel."
                    },
                    {
                              "id": "c",
                              "text": "A, E, I, O, U — the vowel letters."
                    },
                    {
                              "id": "d",
                              "text": "A single sound."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Phoneme\" means A single sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Phoneme\" means A single sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Phoneme** = A single sound.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-letter-sounds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Short sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A letter that is not a vowel."
                    },
                    {
                              "id": "b",
                              "text": "The most common sound, like 'a' in apple."
                    },
                    {
                              "id": "c",
                              "text": "A, E, I, O, U — the vowel letters."
                    },
                    {
                              "id": "d",
                              "text": "The sound a letter makes, like 'b' for ball."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Short sound\" means The most common sound, like 'a' in apple."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Short sound\" means The most common sound, like 'a' in apple.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Short sound** = The most common sound, like 'a' in apple.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
