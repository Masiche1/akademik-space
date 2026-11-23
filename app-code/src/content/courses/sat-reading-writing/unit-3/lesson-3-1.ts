import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "satrw-u3-lesson-3-1",
  code: "3-1",
  title: "Transitions and Logical Connectors",
  goal: "I CAN choose transitions that express the correct logical relationship.",
  standards: ["SAT RW 7.x"],
  vocabulary: [
    { term: "Transition", definition: "Word/phrase connecting ideas — signals relationship." },
    { term: "Additive", definition: "Also, furthermore, moreover — adds information." },
    { term: "Contrast", definition: "However, but, although — shows difference." },
    { term: "Cause-effect", definition: "Therefore, consequently, thus — shows result." },
    { term: "Example", definition: "For example, for instance — illustrates." },
    { term: "Concession", definition: "Although, granted, while — acknowledges opposing view." },
  ],
  concepts: [
    {
      id: "satrw-u3-transitions",
      title: "Transitions",
      skill: "Select transitions expressing correct logical relationships.",
      lesson: {
        sections: [
          {
            heading: "Transitions signal relationships",
            body: "Every transition announces how sentences relate: 'however' = contrast, 'therefore' = result, 'for example' = illustration, 'moreover' = addition. SAT questions blank a transition and offer choices — the correct one matches the LOGICAL relationship between sentences, not just 'sounds right'.",
          },
          {
            heading: "Common traps",
            body: "'However' vs 'therefore' — contrast vs cause. 'Moreover' vs 'for example' — addition vs illustration. The trap: choosing a transition that fits ONE sentence but not the relationship — read BOTH sides of the blank to determine the actual logic.",
          },
        ],
        keyFormulas: [
          { name: "Contrast", statement: "however / but / although / whereas" },
          { name: "Cause", statement: "therefore / consequently / thus / hence" },
          { name: "Addition", statement: "moreover / furthermore / also / in addition" },
        ],
        workedExample: {
          problem: "'The data was inconclusive. ___, the researchers continued the study.' Which transition?",
          solution: "'Nevertheless' or 'still' — despite inconclusive results (contrast/obstacle), they continued; 'therefore' would mean results CAUSED continuation, but inconclusive data doesn't cause it — the logic is concession/contrast.",
        },
      },
      questions: [
        {
          id: "satrw-u3-transitions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'However' signals a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cause-effect"
                    },
                    {
                              "id": "b",
                              "text": "contrast"
                    },
                    {
                              "id": "c",
                              "text": "addition"
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
                              "reasoning": "'However' introduces contrast — the following clause opposes or qualifies the previous.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Contrast",
          "commonErrors": [
                    "Confusing with cause."
          ]
},
        },
        {
          id: "satrw-u3-transitions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The experiment failed. ___, the team learned valuable lessons.' Best transition?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Therefore"
                    },
                    {
                              "id": "b",
                              "text": "Nevertheless"
                    },
                    {
                              "id": "c",
                              "text": "For example"
                    },
                    {
                              "id": "d",
                              "text": "Moreover"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Transition selection",
                              "statement": "Contrast despite failure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Nevertheless' = despite the failure (contrast/obstacle), they learned — 'therefore' would wrongly suggest failure CAUSED learning.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Nevertheless",
          "commonErrors": [
                    "Choosing therefore — misreads the logic."
          ]
},
        },
        {
          id: "satrw-u3-transitions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Many species are endangered. ___, the panda population has declined 30%.' Best transition?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "However"
                    },
                    {
                              "id": "b",
                              "text": "For example"
                    },
                    {
                              "id": "c",
                              "text": "Therefore"
                    },
                    {
                              "id": "d",
                              "text": "Although"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Example transition",
                              "statement": "Specific case illustrates general claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'For example' — the panda is a specific instance of the general claim about endangered species.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "For example",
          "commonErrors": [
                    "Choosing however — misses the illustrative relationship."
          ]
},
        },
        {
          id: "satrw-u3-transitions-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to choose the correct transition — what should you analyze?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Logical analysis",
                              "statement": "Determine relationship first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Read BOTH sentences around the blank — determine the LOGICAL relationship (contrast, cause, addition, example, concession) BEFORE choosing; the transition must match that relationship, not just sound fluent.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ask: does sentence 2 oppose, result from, add to, or illustrate sentence 1? 'However' only works if there's actual contrast; 'therefore' only if there's actual causation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Trap: transitions that fit grammatically but misrepresent the logic — fluency ≠ correctness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Determine logical relationship first, then match transition",
          "commonErrors": [
                    "Choosing by ear rather than logic."
          ]
},
        },
        {
          id: "satrw-u3-transitions-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "'The treatment showed promise in trials. ___, long-term effects remain unknown.' Evaluate 'however' vs 'therefore' vs 'nevertheless' here.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Nuanced transition",
                              "statement": "Partial contrast with concession."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'However' works — unknown effects contrast with promise; 'nevertheless' is weaker (implies despite the unknowns, promise continues — but the sentence doesn't say that); 'therefore' is wrong (unknowns don't result from promise).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Best: 'however' or 'although' — the unknowns QUALIFY the promise; the relationship is concessive-contrast: positive BUT incomplete.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Nuanced: 'although promising, long-term effects remain unknown' restructures entirely — sometimes the best 'transition' is restructuring the sentence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "However/although — concessive contrast",
          "commonErrors": [
                    "Choosing therefore — no causal link."
          ]
},
        },
      ],
    },
  ],
};
