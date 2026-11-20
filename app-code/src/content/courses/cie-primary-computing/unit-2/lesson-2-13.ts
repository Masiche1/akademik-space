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
                              "text": "A description of what the program must do"
                    },
                    {
                              "id": "b",
                              "text": "A computer part"
                    },
                    {
                              "id": "c",
                              "text": "A type of virus"
                    },
                    {
                              "id": "d",
                              "text": "A coding language"
                    }
          ],
          "correctChoiceId": "a"
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
