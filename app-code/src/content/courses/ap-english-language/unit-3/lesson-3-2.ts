import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apel-u3-lesson-3-2",
  code: "3-2",
  title: "Exam Strategies and Timed Practice",
  goal: "I CAN plan and execute the AP English Language exam efficiently.",
  standards: ["AP Lang 7.x"],
  vocabulary: [
    { term: "Exam format", definition: "Multiple choice (45 questions, 60 min) + three essays (120 min)." },
    { term: "Rhetorical analysis essay", definition: "Analyze ONE provided nonfiction text's rhetorical strategies — 40 min suggested." },
    { term: "Argument essay", definition: "Defend YOUR position on a complex issue — 40 min." },
    { term: "Synthesis essay", definition: "Use multiple provided sources to build YOUR argument — 40 min." },
    { term: "Reading the prompt", definition: "Underline key terms; identify what's actually asked before writing." },
    { term: "Time allocation", definition: "Suggested: ~10 min planning, ~25 min writing, ~5 min revision per essay." },
  ],
  concepts: [
    {
      id: "apel-u3-exam-strategies",
      title: "Exam mastery",
      skill: "Approach each essay type strategically within time constraints.",
      lesson: {
        sections: [
          {
            heading: "Question strategy",
            body: "MCQ: read questions BEFORE the passage to know what to hunt for; process of elimination works on every question. Essays: spend 8-10 minutes annotating/planning before writing — a clear plan prevents rambling. Read the prompt TWICE — the verbs matter ('analyze' vs 'argue' vs 'synthesize').",
          },
          {
            heading: "Essay execution",
            body: "Rhetorical analysis: identify 2-3 strategies, not everything. Argument: clear thesis + 2-3 developed reasons with counterargument. Synthesis: your thesis first, then sources grouped by relationship to it. Every paragraph needs a clear topic sentence and commentary — quotes without analysis score low.",
          },
        ],
        keyFormulas: [
          { name: "Essay timing", statement: "~10 min plan, ~25 min write, ~5 min revise" },
          { name: "Paragraph test", statement: "Topic sentence + evidence + commentary + thesis link" },
        ],
        workedExample: {
          problem: "You have 40 minutes for a synthesis essay. How should you allocate time?",
          solution: "5 min: read prompt + skim sources. 5 min: plan thesis and source groupings. 22 min: write. 5 min: revise thesis alignment and citations. 3 min: buffer.",
        },
      },
      questions: [
        {
          id: "apel-u3-exam-strategies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On the AP Lang exam, the three essays are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summary, analysis, opinion"
                    },
                    {
                              "id": "b",
                              "text": "rhetorical analysis, argument, synthesis"
                    },
                    {
                              "id": "c",
                              "text": "persuasive, narrative, descriptive"
                    },
                    {
                              "id": "d",
                              "text": "two analysis and one summary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exam format",
                              "statement": "Rhetorical analysis + argument + synthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The three essays test analysis of provided text, original argument, and multi-source synthesis.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing with other AP exam formats."
          ]
},
        },
        {
          id: "apel-u3-exam-strategies-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Before writing an AP Lang essay, you should first ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start writing immediately"
                    },
                    {
                              "id": "b",
                              "text": "read the prompt carefully and plan"
                    },
                    {
                              "id": "c",
                              "text": "write the conclusion"
                    },
                    {
                              "id": "d",
                              "text": "count words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Planning",
                              "statement": "Prompt analysis prevents misreading the task."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reading the prompt twice and planning prevents writing the wrong essay type.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Rushing into writing without understanding the task."
          ]
},
        },
        {
          id: "apel-u3-exam-strategies-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 40 minutes for a rhetorical analysis essay, how would you allocate your time? Justify each phase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time management",
                              "statement": "Planning prevents rambling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Model allocation: 8 min reading/annotating text + prompt, 5 min outlining thesis and paragraph topics, 22 min writing, 5 min revision — justified because analysis requires identifying strategies BEFORE writing.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "The key insight: analysis essays fail from writing before identifying strategies.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "~8 min analyze, ~5 plan, ~22 write, ~5 revise",
          "commonErrors": [
                    "Allocating all time to writing with no planning."
          ]
},
        },
        {
          id: "apel-u3-exam-strategies-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A classmate says 'I'll just write more — longer essays score higher.' Evaluate this strategy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Quality over quantity",
                              "statement": "Scores reward analysis, not length."
                    },
                    {
                              "kind": "skill",
                              "name": "Strategic advice",
                              "statement": "Focused development beats padding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Longer essays only score higher if the additional length adds analysis — padding with summary or repetition doesn't earn points.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The rubric rewards thesis, evidence, commentary, sophistication — all qualities of focused development, not word count.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Better strategy: fully develop 2-3 points with commentary than superficially list 6 — depth over breadth.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Length doesn't equal score; focused analysis with commentary beats padding",
          "commonErrors": [
                    "Agreeing that longer = better without qualification."
          ]
},
        },
      ],
    },
  ],
};
