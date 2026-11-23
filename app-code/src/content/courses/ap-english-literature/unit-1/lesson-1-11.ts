import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "apelit-u1-lesson-1-11",
  code: "1-11",
  title: "Comparative Literary Analysis",
  goal: "I CAN analyze multiple texts and synthesize insights across them.",
  standards: ["AP Lit 11.x"],
  vocabulary: [
    { term: "Comparative analysis", definition: "Analyzing two or more texts in relation to each other." },
    { term: "Common theme", definition: "A shared subject treated differently across texts." },
    { term: "Contrast", definition: "How texts differ in method or message." },
    { term: "Synthesis", definition: "Combining insights into a unified argument." },
    { term: "Intertextuality", definition: "How texts reference or respond to each other." },
    { term: "Thesis across texts", definition: "A claim about what the texts collectively reveal." },
  ],
  concepts: [
    {
      id: "apelit-u1-comparative-lit",
      title: "Comparative analysis",
      skill: "Compare texts on theme, method, and effect.",
      lesson: {
        sections: [
          {
            heading: "Comparative strategy",
            body: "Comparison isn't parallel summaries — it's relational analysis. Choose a **lens** (theme, technique, or effect) and analyze how each text handles it. 'Both deal with isolation' is a start; 'Poem A enacts isolation through fragmentation while Novel B describes it through social detail' is analysis.",
          },
          {
            heading: "Synthesis",
            body: "The best comparative essays don't just contrast — they **synthesize**: what do the texts' differences reveal together? Often the most interesting claim is about what each text's approach says that the other's doesn't.",
          },
        ],
        keyFormulas: [
          { name: "Comparison structure", statement: "Lens → Text A analysis → Text B analysis → synthesis" },
          { name: "Synthesis question", statement: "What do the differences reveal together?" },
        ],
        workedExample: {
          problem: "Compare how two poems treat loss — one through direct statement, one through imagery.",
          solution: "Lens: methods of expressing grief. Poem A states loss directly ('I am devastated') — immediate but limited; Poem B uses recurring imagery (empty chairs, untended gardens) — indirect but resonant. Synthesis: directness conveys urgency, indirection invites the reader's own grief — each method positions the reader differently.",
        },
      },
      questions: [
        {
          id: "apelit-u1-comparative-lit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Effective comparative analysis ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summarizes each text separately"
                    },
                    {
                              "id": "b",
                              "text": "uses a shared lens to relate texts"
                    },
                    {
                              "id": "c",
                              "text": "lists similarities only"
                    },
                    {
                              "id": "d",
                              "text": "compares authors' biographies"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Comparative lens",
                              "statement": "Shared frame for relation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparison works through a lens — theme, technique, or effect — relating texts rather than summarizing them side by side.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Shared lens",
          "commonErrors": [
                    "Writing two unrelated summaries."
          ]
},
        },
        {
          id: "apelit-u1-comparative-lit-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The strongest comparative thesis ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "says both texts are good"
                    },
                    {
                              "id": "b",
                              "text": "makes a claim about what the texts' differences reveal together"
                    },
                    {
                              "id": "c",
                              "text": "picks a winner"
                    },
                    {
                              "id": "d",
                              "text": "lists all similarities"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Synthesis",
                              "statement": "What differences reveal together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A strong comparative thesis synthesizes — 'where Poem A's directness conveys urgency, Poem B's indirection creates space for reader grief' — claiming something neither text says alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Synthesis claim",
          "commonErrors": [
                    "Choosing sides instead of synthesizing."
          ]
},
        },
        {
          id: "apelit-u1-comparative-lit-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between comparing texts and synthesizing them — why does synthesis score higher?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Comparison vs synthesis",
                              "statement": "Relating vs combining into new insight."
                    },
                    {
                              "kind": "skill",
                              "name": "Analytical depth",
                              "statement": "What the whole exceeds the parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comparison identifies how texts are alike or different; synthesis asks what the relationship REVEALS — the insight that emerges only from holding both texts together.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Synthesis scores higher because it produces a claim no single-text analysis could make — it's the most sophisticated form of literary thinking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: does your thesis require both texts, or could it be written about one?",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Synthesis produces insight requiring both texts",
          "commonErrors": [
                    "Treating comparison as an end in itself."
          ]
},
        },
        {
          id: "apelit-u1-comparative-lit-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two texts treat the same theme with opposite methods. Explain how this opposition could be analytically productive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Opposition as method",
                              "statement": "Contrast reveals assumptions."
                    },
                    {
                              "kind": "skill",
                              "name": "Dialectical analysis",
                              "statement": "Thesis-antithesis-synthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposite methods on the same theme create a natural experiment — the contrast exposes what each method assumes and what it can/cannot achieve; the reader sees the theme's range by seeing its limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: one text argues love heals through direct confession, another shows love destroying through the same openness — the opposition asks whether vulnerability is salvation or destruction, deepening both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The productive tension: neither text is simply 'right' — the opposition IS the meaning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Opposition reveals each method's assumptions and the theme's range",
          "commonErrors": [
                    "Forcing agreement where contrast is more interesting."
          ]
},
        },
      ],
    },
  ],
};
