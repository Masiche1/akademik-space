import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ela2-u7-lesson-7-3",
  code: "7-3",
  title: "Complete Sentences",
  goal: "I CAN write complete sentences with subject and verb.",
  standards: ["L.2.1", "L.2.2"],
  vocabulary: [
    { term: "Sentence", definition: "Complete thought." },
    { term: "Subject", definition: "Who or what it's about." },
    { term: "Verb", definition: "The action or state." },
    { term: "Complete", definition: "Has all parts." },
    { term: "Fragment", definition: "Incomplete sentence." },
    { term: "Action", definition: "What subject does." },
    { term: "Predicate", definition: "What is said about subject." },
    { term: "Noun", definition: "Person, place, thing." },
  ],
  concepts: [
    {
      id: "ela2-u7-complete-sentences",
      title: "Complete sentences",
      skill: "Write complete sentences with a subject and a verb.",
      lesson: {
        sections: [
          {
            heading: "What makes a sentence?",
            body: "A **complete sentence** has a **subject** (who/what) and a **verb** (action) and tells a complete thought. 'The dog runs.' is complete; 'runs fast' is a **fragment**.",
          },
          {
            heading: "Subject + verb",
            body: "Every sentence needs both: **subject** (the doer) + **verb** (what they do). 'The cat sleeps.' Subject='cat', verb='sleeps'.",
          },
        ],
        keyFormulas: [
          { name: "Complete sentence", statement: "Subject + verb = complete thought." },
          { name: "Fragment", statement: "Missing subject or verb = incomplete." },
        ],
        workedExample: {
          problem: "Is 'runs fast' a complete sentence?",
          solution: "No — it's a **fragment**. Needs a subject: '**The dog** runs fast.'",
        },
      },
      questions: [
        {
          id: "ela2-u7-complete-sentences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "runs fast"
                    },
                    {
                              "id": "b",
                              "text": "The dog runs."
                    },
                    {
                              "id": "c",
                              "text": "big and red"
                    },
                    {
                              "id": "d",
                              "text": "the cat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'The dog runs.' has subject + verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'The dog runs.' has subject + verb.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**The dog runs.**",
          "commonErrors": [
                    "Picks fragment."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'subject' of a sentence is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the action"
                    },
                    {
                              "id": "b",
                              "text": "who or what the sentence is about"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "a punctuation mark"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Subject = who/what it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subject = who/what it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**who/what**",
          "commonErrors": [
                    "Confuses with verb."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete sentence about an animal. Then write a fragment and fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Complete sentence",
                              "statement": "Subject + verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes complete + fixes fragment.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The cat sleeps. Fragment: 'sleeps all day' -> 'The cat sleeps all day.'**",
          "commonErrors": [
                    "Both fragments.",
                    "Cannot fix."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fragment' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a complete sentence"
                    },
                    {
                              "id": "b",
                              "text": "an incomplete sentence missing a part"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a command"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fragment = incomplete."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fragment = incomplete.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**incomplete**",
          "commonErrors": [
                    "Thinks fragment is complete."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write three complete sentences. For each, identify the subject and the verb.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Complete sentences",
                              "statement": "3 sentences + subject/verb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes 3 complete sentences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identifies subject + verb for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog (subj) runs (verb). Cat (subj) sleeps (verb).'**",
          "commonErrors": [
                    "Fragments.",
                    "Cannot identify parts."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who or what it's about."
                    },
                    {
                              "id": "b",
                              "text": "Complete thought."
                    },
                    {
                              "id": "c",
                              "text": "The action or state."
                    },
                    {
                              "id": "d",
                              "text": "Has all parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sentence\" means Complete thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sentence\" means Complete thought.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sentence** = Complete thought.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subject\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The action or state."
                    },
                    {
                              "id": "b",
                              "text": "Has all parts."
                    },
                    {
                              "id": "c",
                              "text": "Incomplete sentence."
                    },
                    {
                              "id": "d",
                              "text": "Who or what it's about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Subject\" means Who or what it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subject\" means Who or what it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Subject** = Who or what it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u7-complete-sentences-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Verb\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has all parts."
                    },
                    {
                              "id": "b",
                              "text": "The action or state."
                    },
                    {
                              "id": "c",
                              "text": "Incomplete sentence."
                    },
                    {
                              "id": "d",
                              "text": "What subject does."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Verb\" means The action or state."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Verb\" means The action or state.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Verb** = The action or state.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
