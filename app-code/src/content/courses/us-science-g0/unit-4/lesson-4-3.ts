import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "s0-u4-lesson-4-3",
  code: "4-3",
  title: "Float or Sink",
  goal: "I CAN predict and test whether objects float or sink.",
  standards: ["K-PS2-1", "K-PS1-1"],
  vocabulary: [
    { term: "Float", definition: "Stay on top of water." },
    { term: "Sink", definition: "Go down into water." },
    { term: "Water", definition: "The liquid we test in." },
    { term: "Object", definition: "The thing we test." },
    { term: "Predict", definition: "Guess before testing." },
    { term: "Test", definition: "Try it to find out." },
    { term: "Heavy", definition: "Has more weight." },
    { term: "Light", definition: "Has less weight." },
  ],
  concepts: [
    {
      id: "s0-u4-float-sink",
      title: "Float or sink",
      skill: "Predict and test whether objects float or sink in water.",
      lesson: {
        sections: [
          {
            heading: "Float vs sink",
            body: "Some objects **float** (stay on top of water) and some **sink** (go down). You can **predict** which will happen, then **test** to find out.",
          },
          {
            heading: "What affects it?",
            body: "Often **heavy** objects sink and **light** objects float, but it also depends on the material — wood floats, metal sinks, even though both can be heavy or light.",
          },
        ],
        keyFormulas: [
          { name: "Float/Sink", statement: "Predict -> test -> observe. Heavy often sinks, light often floats, but material matters." },
        ],
        workedExample: {
          problem: "Predict: will a wooden block float or sink? A metal spoon? Then test.",
          solution: "**Wooden block floats** (wood floats). **Metal spoon sinks** (metal sinks).",
        },
      },
      questions: [
        {
          id: "s0-u4-float-sink-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Float' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sink"
                    },
                    {
                              "id": "b",
                              "text": "stay on top of water"
                    },
                    {
                              "id": "c",
                              "text": "break"
                    },
                    {
                              "id": "d",
                              "text": "roll"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Float = stay on top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Float = stay on top.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**stay on top**",
          "commonErrors": [
                    "Confuses with sink."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'sink' object...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stays on top"
                    },
                    {
                              "id": "b",
                              "text": "goes down into water"
                    },
                    {
                              "id": "c",
                              "text": "floats"
                    },
                    {
                              "id": "d",
                              "text": "stays still"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sink = goes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sink = goes down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**goes down**",
          "commonErrors": [
                    "Confuses with float."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Predict whether three objects will float or sink, then test them in water. Were your predictions right?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Float/sink",
                              "statement": "Predict + test + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts 3 objects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tests + compares predictions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Predicted wood floats, metal sinks, plastic floats; tests confirmed.'**",
          "commonErrors": [
                    "No predictions.",
                    "No test."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before testing, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "give up"
                    },
                    {
                              "id": "b",
                              "text": "predict what will happen"
                    },
                    {
                              "id": "c",
                              "text": "close your eyes"
                    },
                    {
                              "id": "d",
                              "text": "ignore the object"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Predict first, then test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predict first, then test.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**predict first**",
          "commonErrors": [
                    "Skips prediction."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose two objects. Predict float or sink for each, then test in water. Explain any surprises.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Float/sink",
                              "statement": "Predict + test + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tests + explains results.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Predicted spoon sinks; it did — metal is heavy.'**",
          "commonErrors": [
                    "No prediction.",
                    "No test."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Float\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Go down into water."
                    },
                    {
                              "id": "b",
                              "text": "Stay on top of water."
                    },
                    {
                              "id": "c",
                              "text": "The liquid we test in."
                    },
                    {
                              "id": "d",
                              "text": "The thing we test."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Float\" means Stay on top of water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Float\" means Stay on top of water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Float** = Stay on top of water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sink\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The liquid we test in."
                    },
                    {
                              "id": "b",
                              "text": "The thing we test."
                    },
                    {
                              "id": "c",
                              "text": "Guess before testing."
                    },
                    {
                              "id": "d",
                              "text": "Go down into water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sink\" means Go down into water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sink\" means Go down into water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sink** = Go down into water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-float-sink-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The thing we test."
                    },
                    {
                              "id": "b",
                              "text": "The liquid we test in."
                    },
                    {
                              "id": "c",
                              "text": "Guess before testing."
                    },
                    {
                              "id": "d",
                              "text": "Try it to find out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means The liquid we test in."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means The liquid we test in.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = The liquid we test in.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
