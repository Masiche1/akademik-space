import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "satrw-u3-lesson-3-3",
  code: "3-3",
  title: "Rhetorical Synthesis",
  goal: "I CAN combine source materials into a coherent response.",
  standards: ["SAT RW 7.x"],
  vocabulary: [
    { term: "Rhetorical synthesis", definition: "Combining multiple sources into one response." },
    { term: "Source integration", definition: "Weaving quotes/paraphrases into your argument." },
    { term: "Attribution", definition: "Crediting sources properly." },
    { term: "Synthesis vs summary", definition: "Building argument vs listing sources." },
    { term: "Source relationship", definition: "How sources support, complicate, or contradict." },
    { term: "Thesis integration", definition: "Connecting sources to YOUR claim." },
  ],
  concepts: [
    {
      id: "satrw-u3-rhetorical-synthesis",
      title: "Rhetorical synthesis",
      skill: "Integrate multiple sources into a coherent argument.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs summary",
            body: "**Summary** lists what each source says; **synthesis** builds YOUR argument using sources as evidence. The difference: synthesis has a THESIS that sources support or complicate; summary just reports. SAT synthesis questions ask which response best uses the sources — look for argument-driven integration, not source-by-source recap.",
          },
          {
            heading: "Source integration techniques",
            body: "Introduce sources ('According to X...'), quote/paraphrase precisely, then EXPLAIN significance ('this suggests...', 'which complicates...'). The strongest synthesis doesn't just cite — it analyzes how sources relate to each other and to your claim.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Your claim + source support + source complication + your resolution" },
          { name: "Integration", statement: "Introduce → quote/paraphrase → explain significance" },
        ],
        workedExample: {
          problem: "Three sources on school lunches: one praises nutrition, one criticizes cost, one is neutral data. Write a synthesis.",
          solution: "Thesis: school lunch programs face a nutrition-cost tradeoff. Source 1 supports nutrition benefits; Source 2 complicates with cost concerns; Source 3 provides data on participation. Synthesis acknowledges the tension and argues for balanced approach — not just listing each source.",
        },
      },
      questions: [
        {
          id: "satrw-u3-rhetorical-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rhetorical synthesis differs from summary because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's shorter"
                    },
                    {
                              "id": "b",
                              "text": "it builds an argument using sources as evidence"
                    },
                    {
                              "id": "c",
                              "text": "it uses more sources"
                    },
                    {
                              "id": "d",
                              "text": "it's more formal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis vs summary",
                              "statement": "Argument vs recap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesis constructs YOUR argument with sources supporting/complicating it; summary just reports what each source says.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Argument vs recap",
          "commonErrors": [
                    "Confusing synthesis with summary."
          ]
},
        },
        {
          id: "satrw-u3-rhetorical-synthesis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The strongest synthesis response ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summarizes each source in order"
                    },
                    {
                              "id": "b",
                              "text": "weaves sources into a unified argument with a thesis"
                    },
                    {
                              "id": "c",
                              "text": "quotes the longest source"
                    },
                    {
                              "id": "d",
                              "text": "ignores disagreeing sources"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Synthesis quality",
                              "statement": "Unified argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong synthesis has a thesis, integrates sources as evidence (not separate summaries), and addresses how sources relate — including disagreement.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unified argument",
          "commonErrors": [
                    "Writing parallel summaries."
          ]
},
        },
        {
          id: "satrw-u3-rhetorical-synthesis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'source-by-source summary' fails as synthesis, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Synthesis requirement",
                              "statement": "Must build argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Source-by-source summary reports each source separately — 'Source A says X, Source B says Y' — without building YOUR argument; it demonstrates reading but not synthesis.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: 'Smith found X. Jones found Y. Lee found Z.' — three summaries, no argument; vs 'While Smith emphasizes X, Jones complicates it with Y, suggesting that...' — synthesis builds relationships.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: does the response have a THESIS that sources support? If it's just reporting sources, it's summary.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Summary reports sources; synthesis builds argument from them",
          "commonErrors": [
                    "Listing sources without arguing."
          ]
},
        },
        {
          id: "satrw-u3-rhetorical-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two sources contradict each other on a key point. How should a synthesis handle this?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Handling contradiction",
                              "statement": "Acknowledge and resolve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Don't ignore or dismiss — acknowledge the contradiction explicitly ('while Source A argues X, Source B counters Y'), then explain how it informs your position — maybe you side with one, find middle ground, or argue the disagreement itself is meaningful.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ignoring contradiction weakens synthesis — readers notice; acknowledging it shows sophisticated reading and builds credibility for your resolution.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Best: use the disagreement as evidence — 'the fact that experts disagree suggests the issue is genuinely complex, supporting my claim that...'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Acknowledge contradiction, then use it in your argument",
          "commonErrors": [
                    "Ignoring or papering over disagreement."
          ]
},
        },
      ],
    },
  ],
};
