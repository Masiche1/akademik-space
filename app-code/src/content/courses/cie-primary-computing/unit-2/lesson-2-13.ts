import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cipc-u2-lesson-2-13",
  code: "2-13",
  title: "Stage 6 — Programming Project: Design and Evaluate",
  goal: "I CAN design, build and evaluate a complete program using decomposition and testing.",
  standards: ["Cambridge Primary Computing 0059 Stage 6: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 6,
  vocabulary: [
    { term: "Specification", definition: "A description of what the program must do." },
    { term: "Design", definition: "Planning the program's structure before coding." },
    { term: "Prototype", definition: "An early working version to test ideas." },
    { term: "Evaluation", definition: "Judging how well the program meets its goals." },
    { term: "Iteration", definition: "Repeating design-build-test cycles to improve." },
    { term: "User feedback", definition: "Opinions from people who tried the program." },
  ],
  concepts: [
    {
      id: "cipc-u2-s6-proj",
      title: "Designing and evaluating programs",
      skill: "Apply the design cycle: spec → design → build → test → evaluate at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "The design cycle",
            body: "Good programs follow: write a specification (what it must do), design the structure (sprites, scripts, variables), build a prototype, test it, get feedback, then improve — iterate until it works well.",
          },
          {
            heading: "Evaluation",
            body: "Evaluate against the specification: does it do everything required? Is it easy to use? Are there bugs? Collect user feedback and suggest improvements. Real programmers iterate — version 1 is rarely final.",
          },
        ],
        keyFormulas: [
          { name: "Design cycle", statement: "spec → design → build → test → evaluate → improve" },
          { name: "Evaluation", statement: "check vs spec + user feedback" },
        ],
        workedExample: {
          problem: "You built a quiz game. List three things to check in evaluation.",
          solution: "1. Does it meet the spec (questions, scoring, end screen)? 2. Are there bugs? 3. Is it fun/easy for users? Get feedback and improve.",
        },
      },
      questions: [
        {
          id: "cipc-u2-pj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a program specification?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A coding language"
                    },
                    {
                              "id": "b",
                              "text": "A computer part"
                    },
                    {
                              "id": "c",
                              "text": "A description of what the program must do"
                    },
                    {
                              "id": "d",
                              "text": "A type of virus"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specification",
                              "statement": "Requirements document."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec defines what the program must achieve.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "What program must do"
},
        },
        {
          id: "cipc-u2-pj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the stages of the design cycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Design cycle",
                              "statement": "Iterative process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spec → design → build → test → evaluate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improve and repeat (iterate).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "spec→design→build→test→evaluate→improve"
},
        },
        {
          id: "cipc-u2-pj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a prototype and the final program? Why build a prototype first?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Prototyping",
                              "statement": "Early testing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prototype = early rough version.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Test ideas cheaply before full build.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Find problems early → less wasted work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Rough version; test ideas early"
},
        },
        {
          id: "cipc-u2-pj-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define specification, prototype, evaluation, iteration. (b) Describe the design cycle. (c) Why write a spec first? (d) What is user feedback and why gather it? (e) Your game has a bug where score doesn't update — which cycle stage? (f) What makes a good evaluation? (g) Design a spec for 'a catching game'. (h) List three improvements after testing your game.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Project management",
                              "statement": "Design cycle, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Spec→design→build→test→evaluate→improve.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Clear target prevents wasted work.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) User opinions; reveals real problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Testing/debugging stage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Checks spec, bugs, usability, improvements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid game spec: basket, falling objects, score, lives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Three plausible improvements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Design cycle, prototyping, evaluation, iteration."
},
        },
        {
          id: "cipc-u2-pj-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a program specification?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The final code" },
            { id: "b", text: "A bug report" },
            { id: "c", text: "A type of computer" },
            { id: "d", text: "A written description of what the program must do" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Specification", statement: "Requirements document." }],
            steps: [
              { reasoning: "A specification lists what the program must do before building starts.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Written description of requirements",
          },
        },
        {
          id: "cipc-u2-pj-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a prototype? Why build one before the final program?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prototype", statement: "Early test version." }],
            steps: [
              { reasoning: "Prototype = early rough version to test ideas.", marks: 1, markCode: "M" },
              { reasoning: "It finds problems cheaply before investing in the final version.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Early test version; finds problems cheaply.",
          },
        },
        {
          id: "cipc-u2-pj-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The design cycle has 4 main stages: design, build, test, evaluate. If you find a bug while testing, which stage do you return to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Delete the program" },
            { id: "b", text: "Publish it anyway" },
            { id: "c", text: "Nowhere — testing is the last stage" },
            { id: "d", text: "Build (to fix the code)" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Design cycle", statement: "Iterate back to fix." }],
            steps: [
              { reasoning: "Bugs found in testing mean going back to build/fix, then retest.", marks: 1, markCode: "M" },
              { reasoning: "The cycle repeats until evaluation is satisfactory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Build — fix then retest",
          },
        },
        {
          id: "cipc-u2-pj-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is evaluation in the design cycle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing the first draft" },
            { id: "b", text: "Judging how well the program meets its specification" },
            { id: "c", text: "Deleting old files" },
            { id: "d", text: "Buying a computer" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Check against requirements." }],
            steps: [
              { reasoning: "Evaluation = checking the finished program against the spec and user needs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Judging against the specification",
          },
        },
        {
          id: "cipc-u2-pj-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why gather user feedback during evaluation? Give one example of useful feedback.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "User feedback", statement: "Real users reveal real problems." }],
            steps: [
              { reasoning: "Users find problems the designer missed.", marks: 1, markCode: "M" },
              { reasoning: "Feedback shows what actually works vs what was assumed.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'the button is too small to click' leads to improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Users reveal real issues; e.g. button too small.",
          },
        },
        {
          id: "cipc-u2-pj-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Your game works but players say it is 'too easy'. Which design cycle stage does this feedback affect, and what do you do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Blame the players" },
            { id: "b", text: "Delete all feedback" },
            { id: "c", text: "Nothing — the game is finished" },
            { id: "d", text: "Evaluation → revise design and rebuild harder levels" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Iterating", statement: "Feedback drives improvements." }],
            steps: [
              { reasoning: "Feedback comes from evaluation; it triggers another design/build cycle.", marks: 1, markCode: "M" },
              { reasoning: "Revise the spec/design (harder levels) and rebuild.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Evaluation → redesign and rebuild",
          },
        },
        {
          id: "cipc-u2-pj-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What makes a good evaluation of a program? Name two things to check.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Good evaluation", statement: "Spec match + usability." }],
            steps: [
              { reasoning: "Check it meets every requirement in the specification.", marks: 1, markCode: "M" },
              { reasoning: "Check it is usable — easy for the intended user to use.", marks: 1, markCode: "M" },
              { reasoning: "Note strengths AND weaknesses to guide improvements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spec compliance + usability; strengths and weaknesses.",
          },
        },
        {
          id: "cipc-u2-pj-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is iteration in the design cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Iteration", statement: "Repeat cycle to improve." }],
            steps: [
              { reasoning: "Iteration = going through the design cycle again to improve.", marks: 1, markCode: "M" },
              { reasoning: "Each pass fixes problems found in testing/evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeating the cycle to improve the program.",
          },
        },
        {
          id: "cipc-u2-pj-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your catching game prototype works but the falling objects move too fast to catch. What is the cheapest stage to fix this?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Delete the prototype" },
            { id: "b", text: "Blame the sprites" },
            { id: "c", text: "Back to build/design — adjust speed, then retest" },
            { id: "d", text: "Evaluation is finished — ship it" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Iterating", statement: "Fix in build, retest." }],
            steps: [
              { reasoning: "Problems found in testing go back to build/design to fix.", marks: 1, markCode: "M" },
              { reasoning: "Adjust speed, retest, re-evaluate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Back to build/design, then retest",
          },
        },
        {
          id: "cipc-u2-pj-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three items that should be in a specification for 'a catching game'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing specs", statement: "Clear testable requirements." }],
            steps: [
              { reasoning: "e.g. player controls a basket with arrow keys.", marks: 1, markCode: "M" },
              { reasoning: "e.g. objects fall from top; catch to score points.", marks: 1, markCode: "M" },
              { reasoning: "e.g. game ends after 60 seconds or 3 misses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. controls, catching/scoring, end conditions.",
          },
        },
        {
          id: "cipc-u2-pj-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "After testing your game, list three improvements you might make and which cycle stage each belongs to.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Improvements", statement: "Map fixes to cycle stages." }],
            steps: [
              { reasoning: "e.g. fix score bug → build stage.", marks: 1, markCode: "M" },
              { reasoning: "e.g. add sound effects → design/build stage.", marks: 1, markCode: "M" },
              { reasoning: "e.g. re-check against spec → evaluation stage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. bug fix=build; features=design; check=evaluation.",
          },
        },
        {
          id: "cipc-u2-pj-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define specification, prototype, evaluation, iteration. (b) Describe the design cycle. (c) Why write a spec first? (d) What is user feedback and why gather it? (e) Your game has a bug where score doesn't update — which cycle stage? (f) What makes a good evaluation? (g) Design a spec for 'a catching game'. (h) List three improvements after testing your game.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Design cycle", statement: "Spec, prototype, test, evaluate, iterate." }],
            steps: [
              { reasoning: "(a) Spec=requirements; prototype=test version; evaluation=check vs spec; iteration=repeat cycle.", marks: 1, markCode: "M" },
              { reasoning: "(b) Design → build → test → evaluate → repeat.", marks: 1, markCode: "M" },
              { reasoning: "(c) Ensures everyone agrees what to build; guides testing.", marks: 1, markCode: "M" },
              { reasoning: "(d) User opinions on the program; reveals real issues.", marks: 1, markCode: "M" },
              { reasoning: "(e) Build stage — fix the bug then retest.", marks: 1, markCode: "M" },
              { reasoning: "(f) Spec match, usability, strengths+weaknesses.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. catch falling objects, score points, timed game.", marks: 1, markCode: "M" },
              { reasoning: "(h) Three valid improvements mapped to stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cycle terms, stages, spec purpose, feedback, bug stage, evaluation, catching spec, improvements.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-pj-notes",
      title: "Design cycle — notes",
      summary: "Spec → design → build → test → evaluate → improve. Iterate until it meets goals.",
      sections: [
        { heading: "Key idea", body: "Programming is iterative — expect to test and improve." },
        { heading: "Evaluation", body: "Check against spec, hunt bugs, gather user feedback." },
      ],
    },
  ],
};
