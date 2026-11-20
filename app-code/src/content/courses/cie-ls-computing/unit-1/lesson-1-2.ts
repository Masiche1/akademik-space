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
                              "text": "Input, process, output"
                    },
                    {
                              "id": "c",
                              "text": "Variables, functions, loops"
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
