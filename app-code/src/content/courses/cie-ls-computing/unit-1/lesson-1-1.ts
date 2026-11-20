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
                              "text": "It's written in code"
                    },
                    {
                              "id": "c",
                              "text": "It's very long"
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
