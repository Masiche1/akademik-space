import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "spk-u5-lesson-5-3",
  code: "5-3",
  title: "Materials for Jobs",
  goal: "I CAN choose the right material for a job.",
  standards: ["ELOF-PK.SCI.MATERIAL.3"],
  vocabulary: [
    { term: "Job", definition: "A task or purpose." },
    { term: "Choose", definition: "Pick the best one." },
    { term: "Suit", definition: "Be right for a purpose." },
    { term: "Waterproof", definition: "Does not let water through." },
    { term: "Durable", definition: "Lasts a long time." },
    { term: "Flexible", definition: "Can bend without breaking." },
    { term: "Absorbent", definition: "Soaks up liquid." },
  ],
  concepts: [
    {
      id: "spk-u5-material-jobs",
      title: "Materials for jobs",
      skill: "Choose appropriate materials for specific purposes.",
      lesson: {
        sections: [
          {
            heading: "Right material for the job",
            body: "Different materials are **suited** to different **jobs**. A raincoat needs **waterproof** material (plastic). A towel needs **absorbent** material (cloth). A bridge needs **durable** material (metal/wood).",
          },
          {
            heading: "Think about properties",
            body: "Ask: what does the job need? If it must not get wet, choose **waterproof**. If it must bend, choose **flexible**. If it must last, choose **durable**.",
          },
        ],
        keyFormulas: [
          { name: "Material for job", statement: "Match properties to purpose: waterproof for rain, absorbent for towels, durable for tools." },
        ],
        workedExample: {
          problem: "What material should a raincoat be made of?",
          solution: "**Plastic or rubber** — they are **waterproof** so water cannot get through.",
        },
      },
      questions: [
        {
          id: "spk-u5-material-jobs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A raincoat should be made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "paper"
                    },
                    {
                              "id": "b",
                              "text": "waterproof material like plastic"
                    },
                    {
                              "id": "c",
                              "text": "cloth"
                    },
                    {
                              "id": "d",
                              "text": "wood"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Raincoat needs waterproof material — plastic/rubber."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raincoat needs waterproof material — plastic/rubber.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Waterproof plastic**",
          "commonErrors": [
                    "Picks absorbent cloth."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A kitchen towel should be made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plastic"
                    },
                    {
                              "id": "b",
                              "text": "absorbent cloth"
                    },
                    {
                              "id": "c",
                              "text": "metal"
                    },
                    {
                              "id": "d",
                              "text": "glass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Towel needs absorbent material — cloth soaks up water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Towel needs absorbent material — cloth soaks up water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Absorbent cloth**",
          "commonErrors": [
                    "Picks waterproof plastic."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for a spoon (plastic, wood, metal). Why is it good for that job?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Material for job",
                              "statement": "Match properties to purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses material + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Plastic — light, doesn't conduct heat, won't break.'**",
          "commonErrors": [
                    "No reason.",
                    "Poor choice."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Durable' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breaks easily"
                    },
                    {
                              "id": "b",
                              "text": "lasts a long time"
                    },
                    {
                              "id": "c",
                              "text": "very soft"
                    },
                    {
                              "id": "d",
                              "text": "very light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Durable = lasts a long time without breaking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Durable = lasts a long time without breaking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lasts long**",
          "commonErrors": [
                    "Confuses with fragile."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For each job (umbrella, shoe, window, blanket), choose a material and explain which property makes it suitable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Material for job",
                              "statement": "Match material + property to job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses materials for all 4.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains property fit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Umbrella=plastic (waterproof); Shoe=leather (durable); Window=glass (transparent); Blanket=cloth (soft/warm).'**",
          "commonErrors": [
                    "Poor matches.",
                    "No property reasoning."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Job\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick the best one."
                    },
                    {
                              "id": "b",
                              "text": "A task or purpose."
                    },
                    {
                              "id": "c",
                              "text": "Be right for a purpose."
                    },
                    {
                              "id": "d",
                              "text": "Does not let water through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Job\" means A task or purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Job\" means A task or purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Job** = A task or purpose.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Be right for a purpose."
                    },
                    {
                              "id": "b",
                              "text": "Does not let water through."
                    },
                    {
                              "id": "c",
                              "text": "Lasts a long time."
                    },
                    {
                              "id": "d",
                              "text": "Pick the best one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Choose\" means Pick the best one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choose\" means Pick the best one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Choose** = Pick the best one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u5-material-jobs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Suit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does not let water through."
                    },
                    {
                              "id": "b",
                              "text": "Be right for a purpose."
                    },
                    {
                              "id": "c",
                              "text": "Lasts a long time."
                    },
                    {
                              "id": "d",
                              "text": "Can bend without breaking."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Suit\" means Be right for a purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Suit\" means Be right for a purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Suit** = Be right for a purpose.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
