import type { Lesson } from "../../../types.ts";

export const lesson634: Lesson = {
  id: "ciealhis-u3-lesson-3-4",
  code: "3-4",
  title: "Historical Significance and Chronology",
  goal: "I CAN evaluate historical significance and organise chronologically.",
  standards: ["Cambridge A Level History 9489", "Paper 3: significance"],
  
  vocabulary: [
    { term: "Significance", definition: "Historical importance." },
    { term: "Chronology", definition: "Arrangement of events in time." },
    { term: "Periodisation", definition: "Division of history into periods." },
    { term: "Turning point", definition: "Event changing historical direction." },
    { term: "Scale", definition: "Size/scope of impact." },
    { term: "Duration", definition: "Length of impact." },
  ],
  concepts: [
    {
      id: "ciealhis-u3-s4-sig",
      title: "Significance and chronology",
      skill: "Evaluate historical importance.",
      lesson: {
        sections: [
          {
            heading: "Significance",
            body: "Impact: who/what affected? Scale: how widespread? Duration: short/long-term? Legacy: lasting consequences? Turning point?",
          },
          {
            heading: "Chronology",
            body: "Understanding sequence matters — cause and effect. Timeline shows patterns and turning points. Periodisation divides history into eras.",
          },
        ],
        keyFormulas: [
          { name: "Significance", statement: "historical importance" },
          { name: "Chronology", statement: "time order" },
          { name: "Turning point", statement: "direction change" },
        ],
        workedExample: {
          problem: "Was the fall of Berlin Wall significant?",
          solution: "Yes — symbolised Cold War end, led to German reunification, inspired Eastern European revolutions.",
        },
      },
      questions: [
        {
          id: "ciealhis-u3-sg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical significance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A map"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A statistical method"
                    },
                    {
                              "id": "d",
                              "text": "Historical importance"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Significance",
                              "statement": "Historical importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Significance = historical importance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical importance"
},
        },
        {
          id: "ciealhis-u3-sg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a turning point?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Turning point",
                              "statement": "Direction change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Event changing historical direction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Marks major shift in events.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Direction change event"
},
        },
        {
          id: "ciealhis-u3-sg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you evaluate historical significance?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact: who/what affected?",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scale, duration, legacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Turning point?",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Impact, scale, duration, legacy"
},
        },
        {
          id: "ciealhis-u3-sg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define significance, chronology, periodisation, turning point, scale, duration. (b) What is significance? (c) What is chronology? (d) How evaluate significance? (e) What is periodisation? (f) What is turning point? (g) Why is chronology important? (h) Evaluate which 20th century event was most significant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Significance",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Historical importance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Time order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Impact, scale, duration, legacy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Historical periods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Direction change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cause/effect, patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid evaluation with justification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical significance evaluation."
},
        },
        {
          id: "ciealhis-u3-sg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Chronology refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of historical source"
                    },
                    {
                              "id": "b",
                              "text": "A statistical method"
                    },
                    {
                              "id": "c",
                              "text": "A map of historical events"
                    },
                    {
                              "id": "d",
                              "text": "The arrangement of events in time order"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chronology",
                              "statement": "Time order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chronology is the arrangement of events in time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Events in time order"
},
        },
        {
          id: "ciealhis-u3-sg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many factors does the lesson list for evaluating significance — impact, scale, duration, legacy and turning point?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "Five factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact, scale, duration, legacy, turning point — five factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealhis-u3-sg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'turning point' is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A minor or routine event"
                    },
                    {
                              "id": "b",
                              "text": "An event that changes the direction of history"
                    },
                    {
                              "id": "c",
                              "text": "The end of a war"
                    },
                    {
                              "id": "d",
                              "text": "A chronological list"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Turning point",
                              "statement": "Direction change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A turning point marks a major shift in historical direction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Changes historical direction"
},
        },
        {
          id: "ciealhis-u3-sg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In assessing significance, 'duration' refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The cost of the event"
                    },
                    {
                              "id": "b",
                              "text": "The date the event occurred"
                    },
                    {
                              "id": "c",
                              "text": "How long the event's impact lasted"
                    },
                    {
                              "id": "d",
                              "text": "The location of the event"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Duration",
                              "statement": "Length of impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Duration measures how long the impact lasted.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Length of impact"
},
        },
        {
          id: "ciealhis-u3-sg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the Berlin Wall fall?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 1989
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Berlin Wall",
                              "statement": "Fell 1989."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Berlin Wall fell in November 1989.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1989"
},
        },
        {
          id: "ciealhis-u3-sg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Periodisation is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Counting historical events"
                    },
                    {
                              "id": "b",
                              "text": "A type of map projection"
                    },
                    {
                              "id": "c",
                              "text": "A historical source"
                    },
                    {
                              "id": "d",
                              "text": "Dividing history into distinct periods or eras"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Periodisation",
                              "statement": "Historical periods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Periodisation divides history into eras for analysis.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Dividing history into eras"
},
        },
        {
          id: "ciealhis-u3-sg-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The significance framework names how many core aspects — impact, scale, duration and legacy — before asking whether the event was a turning point?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "Four aspects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact, scale, duration, legacy — four aspects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealhis-u3-sg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'scale' of an event refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How widespread its impact was"
                    },
                    {
                              "id": "b",
                              "text": "Its date"
                    },
                    {
                              "id": "c",
                              "text": "Its geographic location only"
                    },
                    {
                              "id": "d",
                              "text": "Its financial cost"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scale",
                              "statement": "Widespreadness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scale measures how widespread the impact was.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** How widespread the impact was"
},
        },
        {
          id: "ciealhis-u3-sg-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how a historian might evaluate the significance of the September 11, 2001 attacks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "9/11 evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact: triggered wars in Afghanistan and Iraq, reshaped US foreign policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scale: global — affected security, economics and society worldwide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Duration/legacy: ongoing 'War on Terror', surveillance expansion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Turning point: arguably the start of the post-9/11 era.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Major turning point: wars, security shift, lasting legacy"
},
        },
        {
          id: "ciealhis-u3-sg-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which event is LEAST likely to be considered a 'turning point' in history?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The fall of the Berlin Wall"
                    },
                    {
                              "id": "b",
                              "text": "A local annual festival held in one town"
                    },
                    {
                              "id": "c",
                              "text": "The end of World War II"
                    },
                    {
                              "id": "d",
                              "text": "The Cuban Missile Crisis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Turning point",
                              "statement": "Major shift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A local festival lacks the scale to change historical direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Local festival"
},
        },
        {
          id: "ciealhis-u3-sg-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The Cold War is conventionally dated 1947 to 1991. How many years did it last?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 44
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "fact",
                              "name": "Cold War",
                              "statement": "1947-1991."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1991 - 1947 = 44 years.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "44"
},
        },
        {
          id: "ciealhis-u3-sg-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate which was more significant: the fall of the Berlin Wall (1989) or the Cuban Missile Crisis (1962).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Significance",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cuban Missile Crisis: closest approach to nuclear war; led to hotline and test ban.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Berlin Wall fall: symbolised Cold War end; enabled German reunification and Eastern European change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weighs scale, duration and legacy of each.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Considers alternative views — crisis as deterrence success vs wall as liberation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Defensible conclusion justified by criteria.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Both turning points; wall more transformative, crisis more dangerous"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u3-sg-notes",
      title: "Significance — notes",
      summary: "Significance=historical importance. Evaluate impact, scale, duration, legacy.",
      sections: [
        { heading: "Key idea", body: "Not all events are equally significant — evaluate carefully." },
        { heading: "Chronology", body: "Understanding sequence reveals cause/effect and turning points." },
      ],
    },
  ],
};
