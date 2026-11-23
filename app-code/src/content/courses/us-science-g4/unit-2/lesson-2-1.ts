import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "sci4-u2-lesson-2-1",
  code: "2-1",
  title: "What are Waves?",
  goal: "I CAN explain what waves are and how they transfer energy.",
  standards: ["PS4.A"],
  vocabulary: [
    { term: "Wave", definition: "Energy moving." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Transfer", definition: "Move without matter." },
    { term: "Vibration", definition: "Back-and-forth motion." },
    { term: "Frequency", definition: "How often it vibrates." },
    { term: "Amplitude", definition: "How big the wave." },
    { term: "Medium", definition: "What it travels through." },
    { term: "Peak", definition: "Highest point." },
  ],
  concepts: [
    {
      id: "sci4-u2-waves-basics",
      title: "What are waves?",
      skill: "Explain that waves transfer energy through vibrations without moving matter.",
      lesson: {
        sections: [
          {
            heading: "Waves move energy",
            body: "A **wave** is **energy** moving through a **medium** (or space) by **vibration**. The matter itself doesn't travel — only the **energy** does.",
          },
          {
            heading: "Parts of a wave",
            body: "**Frequency** = how often it vibrates; **amplitude** = how big it is; **wavelength** = distance between peaks.",
          },
        ],
        keyFormulas: [
          { name: "Wave", statement: "Vibration + medium = energy transfer without matter movement." },
        ],
        workedExample: {
          problem: "When you drop a stone in water, ripples spread out. What moves?",
          solution: "**Energy** moves outward as waves — the water molecules vibrate but don't travel with the wave.",
        },
      },
      questions: [
        {
          id: "sci4-u2-waves-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A wave transfers...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "matter"
                    },
                    {
                              "id": "b",
                              "text": "energy"
                    },
                    {
                              "id": "c",
                              "text": "nothing"
                    },
                    {
                              "id": "d",
                              "text": "only light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wave = energy transfer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wave = energy transfer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy",
          "commonErrors": [
                    "Thinks matter moves."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a water wave, the water molecules...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "travel with the wave"
                    },
                    {
                              "id": "b",
                              "text": "vibrate in place"
                    },
                    {
                              "id": "c",
                              "text": "disappear"
                    },
                    {
                              "id": "d",
                              "text": "turn to energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vibrate in place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vibrate in place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "vibrate in place",
          "commonErrors": [
                    "Thinks they travel."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why a wave can transfer energy without moving the medium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Waves",
                              "statement": "Vibration explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains vibration + energy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Particles vibrate back and forth, passing energy to neighbors without traveling.'**",
          "commonErrors": [
                    "Thinks matter moves.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Frequency' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wave size"
                    },
                    {
                              "id": "b",
                              "text": "how often it vibrates"
                    },
                    {
                              "id": "c",
                              "text": "wave speed"
                    },
                    {
                              "id": "d",
                              "text": "wave length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Frequency = vibration rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frequency = vibration rate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how often it vibrates",
          "commonErrors": [
                    "Confuses with amplitude."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two waves: one with high frequency, one with low frequency. How do they differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Waves",
                              "statement": "Frequency comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares frequencies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'High frequency = more vibrations per second = higher pitch sound.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No explanation."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wave\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "Energy moving."
                    },
                    {
                              "id": "c",
                              "text": "Move without matter."
                    },
                    {
                              "id": "d",
                              "text": "Back-and-forth motion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wave\" means Energy moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wave\" means Energy moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wave** = Energy moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move without matter."
                    },
                    {
                              "id": "b",
                              "text": "Back-and-forth motion."
                    },
                    {
                              "id": "c",
                              "text": "How often it vibrates."
                    },
                    {
                              "id": "d",
                              "text": "Ability to do work."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back-and-forth motion."
                    },
                    {
                              "id": "b",
                              "text": "Move without matter."
                    },
                    {
                              "id": "c",
                              "text": "How often it vibrates."
                    },
                    {
                              "id": "d",
                              "text": "How big the wave."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move without matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move without matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move without matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
