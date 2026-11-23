import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ela4-u3-lesson-3-2",
  code: "3-2",
  title: "Visual Elements in Stories",
  goal: "I CAN analyze illustrations, captions and other visual elements.",
  standards: ["RL.4.7"],
  vocabulary: [
    { term: "Illustration", definition: "Picture in story." },
    { term: "Caption", definition: "Text near picture." },
    { term: "Visual", definition: "Something you see." },
    { term: "Analyze", definition: "Study carefully." },
    { term: "Mood", definition: "Feeling of picture." },
    { term: "Detail", definition: "Small fact." },
    { term: "Interpret", definition: "Figure out meaning." },
    { term: "Evidence", definition: "Supporting detail." },
  ],
  concepts: [
    {
      id: "ela4-u3-visual-elements",
      title: "Visual elements in stories",
      skill: "Analyze illustrations and visual elements to deepen understanding.",
      lesson: {
        sections: [
          {
            heading: "Pictures help",
            body: "**Illustrations** show details not in words. **Captions** explain pictures. Analyze them to **interpret** mood, character feelings, and setting.",
          },
          {
            heading: "Example",
            body: "A dark picture with rain = **mood** of sadness or fear; bright colors = happy mood.",
          },
        ],
        keyFormulas: [
          { name: "Visual", statement: "Illustration + caption + colors = mood + meaning." },
        ],
        workedExample: {
          problem: "Story says 'Sam was happy' but picture shows dark clouds. What does it mean?",
          solution: "The picture may show **sadness** despite the words — visual elements can add or contrast meaning.",
        },
      },
      questions: [
        {
          id: "ela4-u3-visual-elements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'illustration' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a paragraph"
                    },
                    {
                              "id": "b",
                              "text": "a picture in the story"
                    },
                    {
                              "id": "c",
                              "text": "a title"
                    },
                    {
                              "id": "d",
                              "text": "a chapter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Illustration = picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Illustration = picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a picture in the story**",
          "commonErrors": [
                    "Confuses with text."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Visual elements can show...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "mood and feelings that words don't say"
                    },
                    {
                              "id": "c",
                              "text": "only names"
                    },
                    {
                              "id": "d",
                              "text": "only settings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Visuals show mood/feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Visuals show mood/feelings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**mood and feelings that words don't say**",
          "commonErrors": [
                    "Thinks visuals are just decoration."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find an illustration. Describe what it shows that the words don't say. How does it affect the mood?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visual",
                              "statement": "What it shows + mood effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes what it shows.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains mood effect.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Dark clouds + rain = storm mood; words only said 'bad weather'.'**",
          "commonErrors": [
                    "Repeats words.",
                    "No mood."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'caption' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a heading"
                    },
                    {
                              "id": "b",
                              "text": "text that explains a picture"
                    },
                    {
                              "id": "c",
                              "text": "a title"
                    },
                    {
                              "id": "d",
                              "text": "a paragraph"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Caption = explains picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Caption = explains picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**text that explains a picture**",
          "commonErrors": [
                    "Confuses with heading."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two illustrations from different stories. How do the visual choices (color, size, expression) create different moods?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visual",
                              "statement": "Two illustrations + mood comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares illustrations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains mood differences.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Story A: bright colors = happy; Story B: dark colors = sad; color choice sets mood.'**",
          "commonErrors": [
                    "One illustration only.",
                    "No mood."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Text near picture."
                    },
                    {
                              "id": "b",
                              "text": "Picture in story."
                    },
                    {
                              "id": "c",
                              "text": "Something you see."
                    },
                    {
                              "id": "d",
                              "text": "Study carefully."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Illustration\" means Picture in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Illustration\" means Picture in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Illustration** = Picture in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Caption\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something you see."
                    },
                    {
                              "id": "b",
                              "text": "Study carefully."
                    },
                    {
                              "id": "c",
                              "text": "Feeling of picture."
                    },
                    {
                              "id": "d",
                              "text": "Text near picture."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Caption\" means Text near picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Caption\" means Text near picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Caption** = Text near picture.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-visual-elements-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Visual\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Study carefully."
                    },
                    {
                              "id": "b",
                              "text": "Something you see."
                    },
                    {
                              "id": "c",
                              "text": "Feeling of picture."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Visual\" means Something you see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Visual\" means Something you see.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Visual** = Something you see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
