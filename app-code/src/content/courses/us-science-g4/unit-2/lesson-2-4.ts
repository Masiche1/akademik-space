import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "sci4-u2-lesson-2-4",
  code: "2-4",
  title: "Energy Transfer",
  goal: "I CAN explain how energy transfers through waves.",
  standards: ["PS4.C"],
  vocabulary: [
    { term: "Transfer", definition: "Move energy." },
    { term: "Wave", definition: "Energy moving." },
    { term: "Source", definition: "Where energy starts." },
    { term: "Receiver", definition: "Where it ends." },
    { term: "Convert", definition: "Change form." },
    { term: "Kinetic", definition: "Energy of motion." },
    { term: "Potential", definition: "Stored energy." },
    { term: "Transform", definition: "Change type." },
  ],
  concepts: [
    {
      id: "sci4-u2-energy-transfer",
      title: "Energy transfer",
      skill: "Explain how energy transfers and transforms through waves.",
      lesson: {
        sections: [
          {
            heading: "Energy moves",
            body: "**Energy** can **transfer** (move) or **transform** (change form). Light energy can become **heat**; sound energy is **kinetic** energy of vibrating particles.",
          },
          {
            heading: "Example",
            body: "Sunlight (light energy) hits your skin and you feel warm (heat energy) — energy **transferred and transformed**.",
          },
        ],
        keyFormulas: [
          { name: "Energy", statement: "Transfer + transform = energy changes forms." },
        ],
        workedExample: {
          problem: "A bell rings. Trace the energy: what starts it and how does it reach your ears?",
          solution: "Striker hits bell (kinetic) -> bell vibrates -> air particles vibrate -> sound waves travel -> your ears detect vibration.",
        },
      },
      questions: [
        {
          id: "sci4-u2-energy-transfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only transfer"
                    },
                    {
                              "id": "b",
                              "text": "transfer and transform"
                    },
                    {
                              "id": "c",
                              "text": "only transform"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Transfer + transform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transfer + transform.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transfer and transform",
          "commonErrors": [
                    "Thinks it only moves."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sunlight hitting your skin shows energy...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "being destroyed"
                    },
                    {
                              "id": "b",
                              "text": "transferring and transforming"
                    },
                    {
                              "id": "c",
                              "text": "staying the same"
                    },
                    {
                              "id": "d",
                              "text": "disappearing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light -> heat = transfer + transform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light -> heat = transfer + transform.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transferring and transforming",
          "commonErrors": [
                    "Thinks it's destroyed."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trace energy through a system: e.g., a flashlight turning on. What forms does energy take?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "Energy transformation trace."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces energy forms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Battery chemical -> electrical -> light + heat.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "Wrong forms."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Kinetic energy' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stored energy"
                    },
                    {
                              "id": "b",
                              "text": "energy of motion"
                    },
                    {
                              "id": "c",
                              "text": "light energy"
                    },
                    {
                              "id": "d",
                              "text": "heat energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Kinetic = motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kinetic = motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy of motion",
          "commonErrors": [
                    "Confuses with potential."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how energy transforms from a power plant to a light bulb in your room.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "Transformation chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces transformations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies forms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Fuel chemical -> heat -> mechanical -> electrical -> light + heat in bulb.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "Missing forms."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy moving."
                    },
                    {
                              "id": "b",
                              "text": "Move energy."
                    },
                    {
                              "id": "c",
                              "text": "Where energy starts."
                    },
                    {
                              "id": "d",
                              "text": "Where it ends."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-energy-transfer-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wave\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where energy starts."
                    },
                    {
                              "id": "b",
                              "text": "Where it ends."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
                    },
                    {
                              "id": "d",
                              "text": "Energy moving."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "sci4-u2-energy-transfer-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where it ends."
                    },
                    {
                              "id": "b",
                              "text": "Where energy starts."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
                    },
                    {
                              "id": "d",
                              "text": "Energy of motion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Source\" means Where energy starts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where energy starts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Source** = Where energy starts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
