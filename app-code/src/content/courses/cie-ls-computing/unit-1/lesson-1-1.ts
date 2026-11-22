import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cils-c-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 7 — Algorithms and Decomposition",
  goal: "I CAN break problems into precise steps and write algorithms in words and diagrams.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: computational thinking", "Cambridge Lower Secondary Computing 0860 strand: Computational thinking"],
  stage: 7,
  vocabulary: [
    { term: "Algorithm", definition: "A precise step-by-step method for solving a problem." },
    { term: "Decomposition", definition: "Breaking a problem into smaller sub-problems." },
    { term: "Abstraction", definition: "Focusing on important details and ignoring irrelevant ones." },
    { term: "Flowchart", definition: "A diagram showing the steps of an algorithm." },
    { term: "Pseudocode", definition: "Plain-language description of an algorithm's steps." },
    { term: "Precision", definition: "Instructions that are unambiguous and complete." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s1-algo",
      title: "Algorithms and decomposition",
      skill: "Decompose problems and express algorithms precisely at Stage 7 level.",
      lesson: {
        sections: [
          {
            heading: "Precise algorithms",
            body: "An algorithm must be precise — every step clear enough that a computer (or person) could follow it without guessing. 'Get a drink' is vague; 'open fridge, take bottle, close fridge, pour into glass' is precise.",
          },
          {
            heading: "Decomposition and abstraction",
            body: "Break big problems into smaller parts — 'make a cake' becomes: gather ingredients, mix, bake, decorate. Abstraction means ignoring irrelevant detail: a recipe doesn't need to describe the oven's wiring.",
          },
        ],
        keyFormulas: [
          { name: "Algorithm", statement: "precise ordered steps" },
          { name: "Decompose", statement: "big problem → sub-problems" },
          { name: "Abstract", statement: "ignore irrelevant detail" },
        ],
        workedExample: {
          problem: "Write a precise algorithm for making a cup of tea. Identify one abstraction you made.",
          solution: "1. Fill kettle, boil. 2. Put tea bag in cup. 3. Pour boiling water. 4. Wait 3 min. 5. Remove bag. Abstraction: ignoring water chemistry/temperature details beyond 'boiling'.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an algorithm 'precise'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps are clear and unambiguous"
                    },
                    {
                              "id": "b",
                              "text": "It's very long"
                    },
                    {
                              "id": "c",
                              "text": "It's written in code"
                    },
                    {
                              "id": "d",
                              "text": "It uses big words"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Precise algorithm",
                              "statement": "Unambiguous steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precision = no guessing needed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Clear unambiguous steps"
},
        },
        {
          id: "cils-c-u1-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Decompose 'clean your room' into 4 sub-tasks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decomposition",
                              "statement": "Sub-task breakdown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. collect rubbish, put clothes away.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. make bed, organise desk.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. rubbish→clothes→bed→desk"
},
        },
        {
          id: "cils-c-u1-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is abstraction? Give an example of an irrelevant detail a road-crossing algorithm would ignore.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abstraction",
                              "statement": "Ignore irrelevant detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abstraction = focus on key details only.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. ignore road material/paint colour; only need 'wait for green'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplifies without losing function.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Key details only; e.g. ignore road colour"
},
        },
        {
          id: "cils-c-u1-al-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define algorithm, decomposition, abstraction, flowchart, pseudocode, precision. (b) Write a 5-step algorithm for brushing teeth precisely. (c) Decompose 'plan a party' into sub-problems. (d) What detail would you abstract away? (e) Draw/describe a flowchart for 'is it raining?'. (f) Write pseudocode for a simple decision. (g) Why must algorithms be precise? (h) Improve this vague algorithm: 'make breakfast'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Precision, decomposition, abstraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 5 precise ordered steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid sub-problem breakdown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Irrelevant detail identified.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid decision flowchart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid pseudocode.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Computers need exact instructions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Improved precise version.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Algorithms, decomposition, abstraction, flowcharts, pseudocode."
},
        },
        {
          id: "cils-c-u1-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the most precise instruction in an algorithm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get something to drink"
                    },
                    {
                              "id": "b",
                              "text": "Pour 250 ml of water into a glass"
                    },
                    {
                              "id": "c",
                              "text": "Make a nice drink"
                    },
                    {
                              "id": "d",
                              "text": "Do the drink step"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Precise step",
                              "statement": "Exact, measurable instruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exact quantity and action — no guessing needed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pour 250 ml of water into a glass"
},
        },
        {
          id: "cils-c-u1-al-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An algorithm for making a sandwich lists these steps: 1. take two slices of bread, 2. spread butter, 3. add cheese, 4. place second slice on top, 5. cut sandwich in half. How many steps does the algorithm have?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Counting steps",
                              "statement": "Count the numbered instructions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Count the numbered steps: 5.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "cils-c-u1-al-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shows abstraction in a 'cross the road' algorithm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "List every car that passes"
                    },
                    {
                              "id": "b",
                              "text": "Ignore the road material and only check for a green light"
                    },
                    {
                              "id": "c",
                              "text": "Describe the colour and texture of the road surface"
                    },
                    {
                              "id": "d",
                              "text": "Measure the exact width of the road"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abstraction",
                              "statement": "Focus on key details, ignore irrelevant ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abstraction drops irrelevant detail while keeping function.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ignore road material; only check for green light"
},
        },
        {
          id: "cils-c-u1-al-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The problem 'organise a school fair' is decomposed into 4 sub-problems, and each sub-problem is broken into 3 tasks. How many tasks are there in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decomposition count",
                              "statement": "Sub-problems × tasks each."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 sub-problems × 3 tasks = 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-al-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a flowchart, what does a diamond shape usually represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start or end of the algorithm"
                    },
                    {
                              "id": "b",
                              "text": "A process or action"
                    },
                    {
                              "id": "c",
                              "text": "Input or output"
                    },
                    {
                              "id": "d",
                              "text": "A decision or condition"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Flowchart symbols",
                              "statement": "Diamond = decision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diamond shapes mark decision points in flowcharts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "A decision or condition"
},
        },
        {
          id: "cils-c-u1-al-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "An algorithm contains the instruction 'REPEAT 4 times: move forward'. How many times is 'move forward' executed?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Iteration count",
                              "statement": "Loop body runs once per repeat."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "REPEAT 4 times → 4 executions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cils-c-u1-al-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which algorithm is written most precisely?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get to school"
                    },
                    {
                              "id": "b",
                              "text": "Go to school-ish"
                    },
                    {
                              "id": "c",
                              "text": "Walk to the bus stop, check the timetable, board the 8:15 bus"
                    },
                    {
                              "id": "d",
                              "text": "Travel somehow"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Precision",
                              "statement": "Unambiguous, complete steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ordered, specific steps with no guessing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Walk to the bus stop, check timetable, board the 8:15 bus"
},
        },
        {
          id: "cils-c-u1-al-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An algorithm has 6 sequence steps and 1 loop that repeats its 4 steps twice. (a) How many steps are in the sequence part? (b) How many instructions are executed in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 6 },
                    { "label": "b", "answer": 14 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Execution count",
                              "statement": "Loop steps count each iteration."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sequence part has 6 steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "6 + (4 steps × 2 repeats) = 14.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6 and 14"
},
        },
        {
          id: "cils-c-u1-al-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When writing an algorithm to control a traffic light, which detail is best to abstract away?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The order of red, amber and green"
                    },
                    {
                              "id": "b",
                              "text": "How long each light stays on"
                    },
                    {
                              "id": "c",
                              "text": "Whether a pedestrian button is pressed"
                    },
                    {
                              "id": "d",
                              "text": "The exact voltage of the electricity supply"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Abstraction choice",
                              "statement": "Drop irrelevant detail only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Voltage is irrelevant to the light sequence logic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "The exact voltage of the electricity supply"
},
        },
        {
          id: "cils-c-u1-al-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Algorithm: STEP 1 take input number; STEP 2 IF number > 10 THEN STEP 3 display 'big' ELSE STEP 4 display 'small'; STEP 5 stop. The input is 15. How many steps are executed?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Trace algorithm",
                              "statement": "Follow only the taken branch."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "15 > 10 is true → steps 1, 3 and 5 run = 3 steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u1-al-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student writes: 'make a cake: buy ingredients, cook it, eat it'. What is the main problem with this algorithm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It has too many steps"
                    },
                    {
                              "id": "b",
                              "text": "It uses selection when it should not"
                    },
                    {
                              "id": "c",
                              "text": "The steps are too vague to follow without guessing"
                    },
                    {
                              "id": "d",
                              "text": "It uses a loop incorrectly"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Precision",
                              "statement": "Every step must be unambiguous."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Cook it' and 'eat it' give no exact actions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Steps too vague to follow without guessing"
},
        },
        {
          id: "cils-c-u1-al-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Write a precise 5-step algorithm for making a cup of coffee. (b) Decompose 'make breakfast' into 3 sub-problems. (c) Identify one detail you would abstract away from your coffee algorithm. (d) Why does decomposition make algorithms easier to write and test?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Precision, decomposition, abstraction applied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 5 ordered, precise steps e.g. boil water, add coffee, pour, stir, serve.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid 3-way breakdown e.g. prepare, cook, eat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Irrelevant detail identified e.g. cup colour or coffee chemistry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Smaller parts are easier to write, check and fix.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Precise algorithm, decomposition, abstraction, easier testing."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-al-notes",
      title: "Algorithms — notes",
      summary: "Precise ordered steps; decompose big problems; abstract irrelevant detail; flowcharts/pseudocode express them.",
      sections: [
        { heading: "Key idea", body: "Computers can't guess — every step must be exact." },
        { heading: "Tools", body: "Flowcharts for visual logic; pseudocode for text." },
      ],
    },
  ],
};
