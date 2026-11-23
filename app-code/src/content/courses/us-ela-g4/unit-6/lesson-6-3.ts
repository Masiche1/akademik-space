import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ela4-u6-lesson-6-3",
  code: "6-3",
  title: "Dialogue and Pacing",
  goal: "I CAN use dialogue and pacing to develop characters and action.",
  standards: ["W.4.3c"],
  vocabulary: [
    { term: "Dialogue", definition: "What characters say." },
    { term: "Pacing", definition: "Speed of story." },
    { term: "Action", definition: "What happens." },
    { term: "Description", definition: "Words that paint picture." },
    { term: "Show", definition: "Demonstrate." },
    { term: "Tell", definition: "Explain directly." },
    { term: "Character voice", definition: "How they speak." },
    { term: "Sensory detail", definition: "Sights, sounds, etc." },
  ],
  concepts: [
    {
      id: "ela4-u6-dialogue-pacing",
      title: "Dialogue and pacing",
      skill: "Use dialogue and pacing to develop characters and move action.",
      lesson: {
        sections: [
          {
            heading: "Dialogue",
            body: "**Dialogue** reveals character through what they say and how they speak. **Pacing** controls speed — slow down for important moments, speed up for action.",
          },
          {
            heading: "Show don't tell",
            body: "**Show** through action and dialogue rather than **tell** directly: instead of 'Sam was angry', write 'Sam slammed the door and shouted.'",
          },
        ],
        keyFormulas: [
          { name: "Dialogue", statement: "What they say + how they say it = character." },
          { name: "Pacing", statement: "Slow for important, fast for action." },
        ],
        workedExample: {
          problem: "Rewrite 'Mia was scared' using show-don't-tell.",
          solution: "'Mia's hands shook as she peeked into the dark hallway.'",
        },
      },
      questions: [
        {
          id: "ela4-u6-dialogue-pacing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dialogue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plot"
                    },
                    {
                              "id": "b",
                              "text": "what characters say"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Dialogue = what they say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialogue = what they say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what characters say**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Show, don't tell' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "explain everything"
                    },
                    {
                              "id": "b",
                              "text": "demonstrate through action/dialogue"
                    },
                    {
                              "id": "c",
                              "text": "skip details"
                    },
                    {
                              "id": "d",
                              "text": "use dialogue only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Show through action/dialogue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Show through action/dialogue.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**demonstrate through action/dialogue**",
          "commonErrors": [
                    "Tells instead of shows."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rewrite 'Sam was nervous' using show-don't-tell (action + dialogue or sensory detail).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Show",
                              "statement": "Action/dialogue rewrite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows not tells.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam's hands trembled as he reached for the microphone. \"I... I can't do this,\" he whispered.'**",
          "commonErrors": [
                    "Still tells.",
                    "No action."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Pacing' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the characters"
                    },
                    {
                              "id": "b",
                              "text": "the speed at which the story moves"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the dialogue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pacing = story speed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pacing = story speed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the speed at which the story moves**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a short scene using dialogue. Make sure each character's voice sounds different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dialogue",
                              "statement": "Dialogue + distinct voices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes dialogue.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Distinct voices.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Mia: \"Let's go!\" Jake: \"Wait, I need my map.\" Mia: \"I'll grab yours.\"'**",
          "commonErrors": [
                    "Same voice.",
                    "No dialogue."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dialogue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speed of story."
                    },
                    {
                              "id": "b",
                              "text": "What characters say."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Words that paint picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Dialogue\" means What characters say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dialogue\" means What characters say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Dialogue** = What characters say.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pacing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Words that paint picture."
                    },
                    {
                              "id": "c",
                              "text": "Demonstrate."
                    },
                    {
                              "id": "d",
                              "text": "Speed of story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Pacing\" means Speed of story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pacing\" means Speed of story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pacing** = Speed of story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-dialogue-pacing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Action\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words that paint picture."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Demonstrate."
                    },
                    {
                              "id": "d",
                              "text": "Explain directly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Action\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Action\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Action** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
