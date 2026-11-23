import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "satrw-u2-lesson-2-2",
  code: "2-2",
  title: "Text Structure and Organization",
  goal: "I CAN analyze how passages are organized.",
  standards: ["SAT RW 6.x"],
  vocabulary: [
    { term: "Text structure", definition: "How ideas are organized — chronological, cause-effect, compare-contrast." },
    { term: "Chronological", definition: "Time order — events in sequence." },
    { term: "Cause-effect", definition: "One thing leads to another." },
    { term: "Compare-contrast", definition: "Showing similarities/differences." },
    { term: "Problem-solution", definition: "Issue raised then addressed." },
    { term: "Transition words", definition: "Signals of structure — however, therefore, for example." },
  ],
  concepts: [
    {
      id: "satrw-u2-text-structure",
      title: "Text structure",
      skill: "Identify organizational patterns and their effects.",
      lesson: {
        sections: [
          {
            heading: "Structure types",
            body: "**Chronological** (time order — history, process), **cause-effect** (X leads to Y — explanation, argument), **compare-contrast** (similarities/differences — analysis), **problem-solution** (issue → resolution — persuasion, advice). Recognizing structure helps predict what comes next and evaluate whether the text delivers on its organization.",
          },
          {
            heading: "Transitions as signals",
            body: "Transition words reveal structure: 'however/although' signal contrast; 'therefore/consequently' signal cause-effect; 'for example/for instance' signal illustration; 'first/second/finally' signal sequence. SAT questions ask about the function of a transition or paragraph — the transition word tells you the relationship.",
          },
        ],
        keyFormulas: [
          { name: "Transitions", statement: "however=contrast; therefore=cause; for example=illustration" },
          { name: "Structure purpose", statement: "Organization serves the argument — analyze if it works" },
        ],
        workedExample: {
          problem: "A passage: problem stated → three attempted solutions → best solution argued. What structure?",
          solution: "Problem-solution — the organization builds toward recommending the best solution; each attempted solution is a stepping stone, structure mirrors the reasoning process.",
        },
      },
      questions: [
        {
          id: "satrw-u2-text-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'However' as a transition signals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "addition"
                    },
                    {
                              "id": "b",
                              "text": "contrast"
                    },
                    {
                              "id": "c",
                              "text": "cause-effect"
                    },
                    {
                              "id": "d",
                              "text": "example"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Contrast transition",
                              "statement": "However = but."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'However' signals contrast — the following clause opposes or qualifies the previous.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Contrast",
          "commonErrors": [
                    "Confusing with addition."
          ]
},
        },
        {
          id: "satrw-u2-text-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A passage organized problem → attempts → best solution uses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "chronological order"
                    },
                    {
                              "id": "b",
                              "text": "problem-solution structure"
                    },
                    {
                              "id": "c",
                              "text": "compare-contrast"
                    },
                    {
                              "id": "d",
                              "text": "random order"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Problem-solution",
                              "statement": "Issue then resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem-solution structure raises an issue then resolves it — the attempted solutions build toward the best one.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Problem-solution",
          "commonErrors": [
                    "Missing the structural pattern."
          ]
},
        },
        {
          id: "satrw-u2-text-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how recognizing text structure helps answer comprehension questions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure awareness",
                              "statement": "Organization predicts content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Structure tells you what to expect — chronological means time order, cause-effect means X leads to Y, problem-solution means resolution coming; this predicts content and helps locate answers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also reveals purpose — if a text is structured as problem-solution, its goal is persuasion; understanding structure helps evaluate whether the text achieves its aim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Transitions within structure signal relationships — 'however' warns of contrast, 'therefore' signals conclusion; recognizing these speeds comprehension.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Structure predicts content + reveals purpose",
          "commonErrors": [
                    "Reading without tracking organization."
          ]
},
        },
        {
          id: "satrw-u2-text-structure-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A text presents two theories then argues one is better. What structure is this, and how does it serve the purpose?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Compare-then-judge",
                              "statement": "Evaluation through comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This is compare-contrast with evaluation — presenting both theories fairly then arguing for one; the structure builds credibility (acknowledging alternatives) before the judgment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It serves persuasive purpose — comparing first makes the preferred theory seem earned rather than asserted; the reader sees the alternatives were considered.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Recognizing this structure helps answer 'why does the author mention Theory B?' — to set up the contrast that makes Theory A's superiority convincing.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Compare-contrast + evaluation = persuasive structure",
          "commonErrors": [
                    "Missing the strategic purpose of comparison."
          ]
},
        },
      ],
    },
  ],
};
