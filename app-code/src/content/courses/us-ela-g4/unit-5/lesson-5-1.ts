import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ela4-u5-lesson-5-1",
  code: "5-1",
  title: "Introducing Claims",
  goal: "I CAN introduce a topic and state a clear claim.",
  standards: ["W.4.1a"],
  vocabulary: [
    { term: "Claim", definition: "What you believe." },
    { term: "Topic", definition: "What it's about." },
    { term: "Introduce", definition: "Start with." },
    { term: "State", definition: "Say clearly." },
    { term: "Position", definition: "Your side." },
    { term: "Thesis", definition: "Main argument." },
    { term: "Opinion", definition: "What you think." },
    { term: "Argument", definition: "Reasoned position." },
  ],
  concepts: [
    {
      id: "ela4-u5-claims",
      title: "Introducing claims",
      skill: "Introduce a topic and state a clear claim.",
      lesson: {
        sections: [
          {
            heading: "Claim",
            body: "A **claim** is what you believe and will argue. **Introduce** the **topic** first, then **state** your claim clearly: 'Recess should be longer because students need exercise.'",
          },
          {
            heading: "Clear vs vague",
            body: "'School lunches are bad' is vague. 'School lunches should include more vegetables because students need nutrition' is a **clear claim**.",
          },
        ],
        keyFormulas: [
          { name: "Claim", statement: "Topic + position + reason = clear claim." },
        ],
        workedExample: {
          problem: "Write a claim about homework.",
          solution: "'Homework should be limited to 30 minutes because students need time for play and family.'",
        },
      },
      questions: [
        {
          id: "ela4-u5-claims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'claim' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact"
                    },
                    {
                              "id": "b",
                              "text": "what you believe and will argue"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Claim = position to argue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Claim = position to argue.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what you believe and will argue**",
          "commonErrors": [
                    "Confuses with fact."
          ]
},
        },
        {
          id: "ela4-u5-claims-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A clear claim should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "be vague"
                    },
                    {
                              "id": "b",
                              "text": "state position + reason"
                    },
                    {
                              "id": "c",
                              "text": "ask a question"
                    },
                    {
                              "id": "d",
                              "text": "have no reason"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Position + reason = clear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Position + reason = clear.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**state position + reason**",
          "commonErrors": [
                    "Vague or no reason."
          ]
},
        },
        {
          id: "ela4-u5-claims-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Introduce a topic and write a clear claim with a reason.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Claim",
                              "statement": "Topic + position + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes clear claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Topic: homework. Claim: should be limited because students need play time.'**",
          "commonErrors": [
                    "Vague.",
                    "No reason."
          ]
},
        },
        {
          id: "ela4-u5-claims-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Introduce the topic' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "argue immediately"
                    },
                    {
                              "id": "b",
                              "text": "start by naming what you're discussing"
                    },
                    {
                              "id": "c",
                              "text": "skip to conclusion"
                    },
                    {
                              "id": "d",
                              "text": "end early"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Introduce = name the topic first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduce = name the topic first.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**start by naming what you're discussing**",
          "commonErrors": [
                    "Jumps to argument."
          ]
},
        },
        {
          id: "ela4-u5-claims-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two different claims about the same topic. Which is stronger? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Claim",
                              "statement": "Two claims + stronger + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two claims.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues stronger.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Weak: 'Homework is bad.' Strong: 'Homework should be limited because students need balance.'**",
          "commonErrors": [
                    "One claim only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u5-claims-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Claim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "What you believe."
                    },
                    {
                              "id": "c",
                              "text": "Start with."
                    },
                    {
                              "id": "d",
                              "text": "Say clearly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Claim\" means What you believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Claim\" means What you believe.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Claim** = What you believe.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-claims-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start with."
                    },
                    {
                              "id": "b",
                              "text": "Say clearly."
                    },
                    {
                              "id": "c",
                              "text": "Your side."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-claims-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduce\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say clearly."
                    },
                    {
                              "id": "b",
                              "text": "Start with."
                    },
                    {
                              "id": "c",
                              "text": "Your side."
                    },
                    {
                              "id": "d",
                              "text": "Main argument."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduce\" means Start with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduce\" means Start with.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduce** = Start with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
