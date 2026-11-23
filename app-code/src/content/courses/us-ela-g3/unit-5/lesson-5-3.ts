import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ela3-u5-lesson-5-3",
  code: "5-3",
  title: "Beginning, Middle, End",
  goal: "I CAN put events in order in my narrative.",
  standards: ["W.3.3"],
  vocabulary: [
    { term: "Sequence", definition: "Order of events." },
    { term: "Beginning", definition: "First part." },
    { term: "Middle", definition: "What happens next." },
    { term: "End", definition: "Last part." },
    { term: "First", definition: "The start." },
    { term: "Then", definition: "What comes next." },
    { term: "Finally", definition: "The last thing." },
    { term: "Order", definition: "Logical sequence." },
  ],
  concepts: [
    {
      id: "ela3-u5-narrative-sequence",
      title: "Sequencing a narrative",
      skill: "Put events in logical order: beginning, middle, end.",
      lesson: {
        sections: [
          {
            heading: "Order matters",
            body: "A narrative has a **sequence** — events in order. **Beginning** (first), **middle** (what happens), **end** (last). Words like 'first', 'then', 'finally' show order.",
          },
          {
            heading: "Make it flow",
            body: "Read your story: does it make sense? Put events in the order they happened.",
          },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "Beginning -> middle -> end; use 'first', 'then', 'finally'." },
        ],
        workedExample: {
          problem: "Put in order: 'I ate dinner. I woke up. I went to school.'",
          solution: "**I woke up -> I went to school -> I ate dinner.**",
        },
      },
      questions: [
        {
          id: "ela3-u5-narrative-sequence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correct sequence is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "end, middle, beginning"
                    },
                    {
                              "id": "b",
                              "text": "beginning, middle, end"
                    },
                    {
                              "id": "c",
                              "text": "middle, end, beginning"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Beginning -> middle -> end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beginning -> middle -> end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**beginning, middle, end**",
          "commonErrors": [
                    "Picks wrong order."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Words like 'first', 'then', 'finally' help...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count"
                    },
                    {
                              "id": "b",
                              "text": "show the order of events"
                    },
                    {
                              "id": "c",
                              "text": "spell"
                    },
                    {
                              "id": "d",
                              "text": "rhyme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "These words show sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "These words show sequence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**show order**",
          "commonErrors": [
                    "Thinks they're just words."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Put these events in order: 'I got home. I went to school. I woke up.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sequence",
                              "statement": "Woke up -> school -> home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders events correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Woke up -> went to school -> got home**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot sequence."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Finally' is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start a story"
                    },
                    {
                              "id": "b",
                              "text": "show the last event"
                    },
                    {
                              "id": "c",
                              "text": "ask a question"
                    },
                    {
                              "id": "d",
                              "text": "describe a character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Finally' = last event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Finally' = last event.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**last event**",
          "commonErrors": [
                    "Confuses with 'first'."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a narrative with three events in order using 'first', 'then', 'finally'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sequence",
                              "statement": "3 events + sequence words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes 3 events in order.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Uses sequence words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'First I woke up, then I ate breakfast, finally I went to school.'**",
          "commonErrors": [
                    "Out of order.",
                    "No sequence words."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First part."
                    },
                    {
                              "id": "b",
                              "text": "Order of events."
                    },
                    {
                              "id": "c",
                              "text": "What happens next."
                    },
                    {
                              "id": "d",
                              "text": "Last part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = Order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Beginning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens next."
                    },
                    {
                              "id": "b",
                              "text": "Last part."
                    },
                    {
                              "id": "c",
                              "text": "The start."
                    },
                    {
                              "id": "d",
                              "text": "First part."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Beginning\" means First part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Beginning\" means First part.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning** = First part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u5-narrative-sequence-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Middle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Last part."
                    },
                    {
                              "id": "b",
                              "text": "What happens next."
                    },
                    {
                              "id": "c",
                              "text": "The start."
                    },
                    {
                              "id": "d",
                              "text": "What comes next."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Middle\" means What happens next."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Middle\" means What happens next.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Middle** = What happens next.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
