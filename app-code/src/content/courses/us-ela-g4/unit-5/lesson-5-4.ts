import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ela4-u5-lesson-5-4",
  code: "5-4",
  title: "Writing Conclusions",
  goal: "I CAN write conclusions that restate the claim and summarize reasons.",
  standards: ["W.4.1d"],
  vocabulary: [
    { term: "Conclusion", definition: "End of argument." },
    { term: "Restate", definition: "Say again." },
    { term: "Summarize", definition: "Short version." },
    { term: "Claim", definition: "Position." },
    { term: "Reasons", definition: "Why." },
    { term: "Call to action", definition: "What to do." },
    { term: "Strong ending", definition: "Memorable finish." },
    { term: "Wrap up", definition: "Finish the argument." },
  ],
  concepts: [
    {
      id: "ela4-u5-argument-conclusions",
      title: "Writing conclusions",
      skill: "Write conclusions that restate the claim and summarize key reasons.",
      lesson: {
        sections: [
          {
            heading: "End strong",
            body: "The **conclusion** **restates** your **claim** and **summarizes** your main **reasons**. It can end with a **call to action** or strong statement.",
          },
          {
            heading: "Example",
            body: "'In conclusion, longer recess benefits students by improving health and focus. Schools should give kids more time to play.'",
          },
        ],
        keyFormulas: [
          { name: "Conclusion", statement: "Restate claim + summarize reasons + strong ending." },
        ],
        workedExample: {
          problem: "Write a conclusion for an argument about reading.",
          solution: "'In conclusion, reading every day improves vocabulary, imagination and school success. Parents and teachers should encourage daily reading.'",
        },
      },
      questions: [
        {
          id: "ela4-u5-argument-conclusions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conclusion' should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "introduce new ideas"
                    },
                    {
                              "id": "b",
                              "text": "restate claim + summarize reasons"
                    },
                    {
                              "id": "c",
                              "text": "ask questions"
                    },
                    {
                              "id": "d",
                              "text": "skip the argument"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Restate + summarize."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Restate + summarize.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**restate claim + summarize reasons**",
          "commonErrors": [
                    "Introduces new ideas."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'In conclusion' signals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "the end of the argument"
                    },
                    {
                              "id": "c",
                              "text": "a new topic"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Signals the end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Signals the end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the end of the argument**",
          "commonErrors": [
                    "Wrong signal."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a 2-sentence conclusion that restates your claim and summarizes two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Restate + summarize."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes complete conclusion.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'In conclusion, exercise is essential because it improves health and focus. Everyone should be active daily.'**",
          "commonErrors": [
                    "New ideas.",
                    "No restatement."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'call to action' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a question"
                    },
                    {
                              "id": "b",
                              "text": "what you want readers to do"
                    },
                    {
                              "id": "c",
                              "text": "a fact"
                    },
                    {
                              "id": "d",
                              "text": "an opinion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Call to action = what to do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Call to action = what to do.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what you want readers to do**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two different conclusions for the same argument. Which is stronger? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conclusion",
                              "statement": "Two conclusions + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two conclusions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues stronger.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Weak: 'That's my argument.' Strong: 'In conclusion... schools should act now.'**",
          "commonErrors": [
                    "One conclusion only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say again."
                    },
                    {
                              "id": "b",
                              "text": "End of argument."
                    },
                    {
                              "id": "c",
                              "text": "Short version."
                    },
                    {
                              "id": "d",
                              "text": "Position."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means End of argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means End of argument.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = End of argument.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Restate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short version."
                    },
                    {
                              "id": "b",
                              "text": "Position."
                    },
                    {
                              "id": "c",
                              "text": "Why."
                    },
                    {
                              "id": "d",
                              "text": "Say again."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Restate\" means Say again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Restate\" means Say again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Restate** = Say again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-conclusions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summarize\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Position."
                    },
                    {
                              "id": "b",
                              "text": "Short version."
                    },
                    {
                              "id": "c",
                              "text": "Why."
                    },
                    {
                              "id": "d",
                              "text": "What to do."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summarize\" means Short version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summarize\" means Short version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summarize** = Short version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
