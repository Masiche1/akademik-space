import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cils-c-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 7 — Programming Constructs: Sequence, Selection, Iteration",
  goal: "I CAN identify and use the three core programming constructs in algorithms.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 7,
  vocabulary: [
    { term: "Sequence", definition: "Instructions executed one after another in order." },
    { term: "Selection", definition: "Choosing which instructions run based on a condition." },
    { term: "Iteration", definition: "Repeating instructions — loops." },
    { term: "Construct", definition: "A basic building block of programs." },
    { term: "Conditional", definition: "A decision point in a program." },
    { term: "Loop", definition: "Repeated execution of instructions." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s2-constructs",
      title: "Core programming constructs",
      skill: "Recognise and apply sequence, selection and iteration at Stage 7 level.",
      lesson: {
        sections: [
          {
            heading: "The three constructs",
            body: "Every program uses three building blocks: sequence (steps in order), selection (IF/ELSE decisions), iteration (loops repeating). Together they can express any algorithm — this is the structured programming theorem.",
          },
          {
            heading: "Identifying constructs",
            body: "Read any algorithm and label each part: 'step 1, step 2' = sequence; 'if x then' = selection; 'repeat until' = iteration. Real programs mix all three constantly.",
          },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "ordered steps" },
          { name: "Selection", statement: "IF condition THEN...ELSE..." },
          { name: "Iteration", statement: "REPEAT...UNTIL / WHILE" },
        ],
        workedExample: {
          problem: "Classify: 'REPEAT 5 times: move forward; IF at edge THEN turn left'.",
          solution: "Iteration (repeat 5) containing sequence (move) and selection (IF at edge).",
        },
      },
      questions: [
        {
          id: "cils-c-u1-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three core programming constructs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sequence, selection, iteration"
                    },
                    {
                              "id": "b",
                              "text": "Variables, functions, loops"
                    },
                    {
                              "id": "c",
                              "text": "Input, process, output"
                    },
                    {
                              "id": "d",
                              "text": "Hardware, software, data"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Constructs",
                              "statement": "Seq/select/iterate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The three building blocks of all programs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sequence, selection, iteration"
},
        },
        {
          id: "cils-c-u1-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Label each: 'move forward' / 'IF score > 10 THEN win' / 'REPEAT 3 times: jump'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Constructs",
                              "statement": "Identify types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "move = sequence; IF = selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "REPEAT = iteration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "seq/select/iterate"
},
        },
        {
          id: "cils-c-u1-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode using all three constructs for 'cross the road safely'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixed constructs",
                              "statement": "All three in one algorithm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sequence: walk to kerb, look.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Selection: IF green THEN cross ELSE wait.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Iteration: repeat until crossed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All three constructs used"
},
        },
        {
          id: "cils-c-u1-ct-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sequence, selection, iteration, construct, conditional, loop. (b) Why are these called 'constructs'? (c) Write pseudocode for a number-guessing game using all three. (d) Which construct handles 'choose between options'? (e) Which handles 'do it again'? (f) Can a program work with only sequence? Explain. (g) Identify constructs in: 'FOR each student: IF absent THEN mark'. (h) Design an algorithm needing all three constructs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Constructs",
                              "statement": "Seq/select/iterate theory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Building blocks every program uses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid game pseudocode with all three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Iteration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Only straight-line tasks — no decisions/repeats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Iteration (FOR) + selection (IF).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid multi-construct algorithm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Three constructs theory and application."
},
        },
        {
          id: "cils-c-u1-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of sequence in a program?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "IF score > 10 THEN display 'win'"
                    },
                    {
                              "id": "b",
                              "text": "Step 1 get input, step 2 process, step 3 output"
                    },
                    {
                              "id": "c",
                              "text": "WHILE guessing"
                    },
                    {
                              "id": "d",
                              "text": "REPEAT until finished"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sequence",
                              "statement": "Instructions in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ordered steps with no decisions or repeats = sequence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ordered steps = sequence"
},
        },
        {
          id: "cils-c-u1-ct-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An algorithm has: 3 sequence steps, 2 selection steps and 1 iteration step. (a) How many selection steps are there? (b) How many steps are there in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 },
                    { "label": "b", "answer": 6 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Counting constructs",
                              "statement": "Add steps of each type."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Selection steps given as 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "3 + 2 + 1 = 6 steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2 and 6"
},
        },
        {
          id: "cils-c-u1-ct-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which programming construct is used in 'IF temperature < 0 THEN wear coat ELSE wear jacket'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Iteration"
                    },
                    {
                              "id": "b",
                              "text": "Selection"
                    },
                    {
                              "id": "c",
                              "text": "Abstraction"
                    },
                    {
                              "id": "d",
                              "text": "Sequence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Selection",
                              "statement": "Choosing based on a condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IF/THEN/ELSE chooses between options = selection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Selection"
},
        },
        {
          id: "cils-c-u1-ct-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program runs 'FOR i = 1 TO 5: DISPLAY i'. How many times is DISPLAY executed?",
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
                              "name": "FOR loop count",
                              "statement": "Runs once per value."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "i takes 1,2,3,4,5 → 5 executions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "cils-c-u1-ct-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does iteration mean in programming?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making a decision"
                    },
                    {
                              "id": "b",
                              "text": "Steps in order"
                    },
                    {
                              "id": "c",
                              "text": "Repeating instructions"
                    },
                    {
                              "id": "d",
                              "text": "Storing data"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Iteration",
                              "statement": "Repeating instructions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iteration = loops that repeat actions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Repeating instructions"
},
        },
        {
          id: "cils-c-u1-ct-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A loop contains 'REPEAT 3 times: step A; step B'. How many instructions are executed inside the loop in total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 6 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Loop tracing",
                              "statement": "Steps × repeats."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2 steps × 3 repeats = 6 instructions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "cils-c-u1-ct-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which task genuinely requires all three programming constructs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Add two numbers and display the result"
                    },
                    {
                              "id": "b",
                              "text": "Print your name once"
                    },
                    {
                              "id": "c",
                              "text": "Keep guessing until the correct number is found, choosing a different hint each try"
                    },
                    {
                              "id": "d",
                              "text": "Turn the computer off"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Construct necessity",
                              "statement": "All three needed for repeat + decide + order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeating guesses = iteration; choosing hints = selection; ordered steps = sequence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Guessing game with hints"
},
        },
        {
          id: "cils-c-u1-ct-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Pseudocode: '1. INPUT name 2. IF name = \"Sam\" THEN DISPLAY \"hi Sam\" ELSE DISPLAY \"hello\" 3. OUTPUT done'. How many (a) selection statements and (b) sequence steps does it contain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 1 },
                    { "label": "b", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Identify constructs",
                              "statement": "IF = selection; steps = sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "One IF statement = 1 selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Three numbered steps = 3 sequence steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1 and 3"
},
        },
        {
          id: "cils-c-u1-ct-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which construct handles 'choose between two options based on a condition'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Selection"
                    },
                    {
                              "id": "b",
                              "text": "Iteration"
                    },
                    {
                              "id": "c",
                              "text": "Sequence"
                    },
                    {
                              "id": "d",
                              "text": "Decomposition"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Selection",
                              "statement": "Condition-based choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choosing between options = selection construct.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Selection"
},
        },
        {
          id: "cils-c-u1-ct-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Pseudocode: 'FOR EACH of 4 students: IF absent THEN mark X'. How many times is the condition 'absent' checked?",
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
                              "name": "Nested constructs",
                              "statement": "Loop body runs once per item."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR EACH over 4 students → 4 checks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cils-c-u1-ct-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A program uses only sequence — no selection or iteration. What kind of task can it still do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Loop through a list of names"
                    },
                    {
                              "id": "b",
                              "text": "Calculate a fixed recipe of steps, e.g. add two numbers and display the result"
                    },
                    {
                              "id": "c",
                              "text": "Ask the user a question and branch on the answer"
                    },
                    {
                              "id": "d",
                              "text": "Repeat a step until a condition is met"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sequence limits",
                              "statement": "Only straight-line tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sequence alone handles fixed ordered tasks only.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fixed recipe tasks only"
},
        },
        {
          id: "cils-c-u1-ct-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Write pseudocode for a number-guessing game that uses all three constructs: sequence, selection and iteration. (b) Label which part of your pseudocode is sequence, which is selection and which is iteration. (c) Why must the game use iteration? (d) What selection decision does the game need?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mixed constructs",
                              "statement": "All three constructs applied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Valid pseudocode e.g. REPEAT: guess, IF guess = number THEN win ELSE hint UNTIL correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Correct labels for each part.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Repeated guessing requires a loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) IF guess correct / too high / too low decision.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All three constructs in a guessing game."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-ct-notes",
      title: "Constructs — notes",
      summary: "Sequence=order, selection=decisions, iteration=repetition. All programs are built from these three.",
      sections: [
        { heading: "Key idea", body: "Any algorithm = sequences + selections + iterations." },
        { heading: "Identify", body: "Label each part of any algorithm by construct type." },
      ],
    },
  ],
};
