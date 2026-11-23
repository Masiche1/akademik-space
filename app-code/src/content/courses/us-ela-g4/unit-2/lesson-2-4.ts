import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ela4-u2-lesson-2-4",
  code: "2-4",
  title: "Word Choice",
  goal: "I CAN analyze how word choice affects meaning and tone.",
  standards: ["RL.4.4"],
  vocabulary: [
    { term: "Word choice", definition: "Which words to use." },
    { term: "Tone", definition: "Feeling of writing." },
    { term: "Connotation", definition: "Feeling a word gives." },
    { term: "Denotation", definition: "Dictionary meaning." },
    { term: "Vivid", definition: "Bright, clear." },
    { term: "Dull", definition: "Boring." },
    { term: "Precise", definition: "Exact." },
    { term: "Author's craft", definition: "Writing technique." },
  ],
  concepts: [
    {
      id: "ela4-u2-word-choice",
      title: "Word choice",
      skill: "Analyze how word choice affects meaning and tone.",
      lesson: {
        sections: [
          {
            heading: "Words matter",
            body: "Authors choose words carefully. **Connotation** = the feeling a word gives ('slim' vs 'skinny'); **denotation** = dictionary meaning. Word choice creates **tone**.",
          },
          {
            heading: "Example",
            body: "'The house was **tiny**' (negative) vs 'The house was **cozy**' (positive) — same size, different feeling.",
          },
        ],
        keyFormulas: [
          { name: "Word choice", statement: "Connotation (feeling) + denotation (meaning) = tone." },
        ],
        workedExample: {
          problem: "Compare 'cheap' and 'inexpensive'. What's the difference?",
          solution: "Both mean low cost (denotation), but 'cheap' sounds negative and 'inexpensive' sounds neutral/positive.",
        },
      },
      questions: [
        {
          id: "ela4-u2-word-choice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Connotation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dictionary meaning"
                    },
                    {
                              "id": "b",
                              "text": "the feeling a word gives"
                    },
                    {
                              "id": "c",
                              "text": "spelling"
                    },
                    {
                              "id": "d",
                              "text": "pronunciation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connotation = feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connotation = feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the feeling a word gives**",
          "commonErrors": [
                    "Confuses with denotation."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Denotation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "feeling"
                    },
                    {
                              "id": "b",
                              "text": "dictionary meaning"
                    },
                    {
                              "id": "c",
                              "text": "tone"
                    },
                    {
                              "id": "d",
                              "text": "spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Denotation = dictionary meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Denotation = dictionary meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**dictionary meaning**",
          "commonErrors": [
                    "Confuses with connotation."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find two words with the same denotation but different connotation (e.g., slim/skinny). Explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word choice",
                              "statement": "Two words + connotation difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds two words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains connotation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Slim (positive) vs skinny (negative); both mean thin.'**",
          "commonErrors": [
                    "Same connotation.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tone' in writing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plot"
                    },
                    {
                              "id": "b",
                              "text": "the feeling or attitude of the writing"
                    },
                    {
                              "id": "c",
                              "text": "the characters"
                    },
                    {
                              "id": "d",
                              "text": "the setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Tone = feeling/attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tone = feeling/attitude.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the feeling or attitude of the writing**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how two different word choices create different tones. Which is more effective?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word choice",
                              "statement": "Two word choices + tone + effectiveness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares word choices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues effectiveness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'grin' (positive) vs 'smirk' (sneaky); 'smirk' more precise for villain.'**",
          "commonErrors": [
                    "Only one choice.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word choice\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling of writing."
                    },
                    {
                              "id": "b",
                              "text": "Which words to use."
                    },
                    {
                              "id": "c",
                              "text": "Feeling a word gives."
                    },
                    {
                              "id": "d",
                              "text": "Dictionary meaning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Word choice\" means Which words to use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word choice\" means Which words to use.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word choice** = Which words to use.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tone\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling a word gives."
                    },
                    {
                              "id": "b",
                              "text": "Dictionary meaning."
                    },
                    {
                              "id": "c",
                              "text": "Bright, clear."
                    },
                    {
                              "id": "d",
                              "text": "Feeling of writing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Tone\" means Feeling of writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tone\" means Feeling of writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tone** = Feeling of writing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-word-choice-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Connotation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dictionary meaning."
                    },
                    {
                              "id": "b",
                              "text": "Feeling a word gives."
                    },
                    {
                              "id": "c",
                              "text": "Bright, clear."
                    },
                    {
                              "id": "d",
                              "text": "Boring."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Connotation\" means Feeling a word gives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Connotation\" means Feeling a word gives.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Connotation** = Feeling a word gives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
