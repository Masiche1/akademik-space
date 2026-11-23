import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apelit-u3-lesson-3-2",
  code: "3-2",
  title: "The Comparative Essay",
  goal: "I CAN write a timed essay comparing two texts on a common theme.",
  standards: ["AP Lit 18.x"],
  vocabulary: [
    { term: "Comparative essay", definition: "Analyzing two texts in relation to each other." },
    { term: "Common theme", definition: "A shared subject treated differently." },
    { term: "Point-by-point", definition: "Alternating analysis of each text on a shared lens." },
    { term: "Block method", definition: "Discussing each text fully, then comparing." },
    { term: "Synthesis", definition: "Combining insights into unified argument." },
    { term: "Time management", definition: "Allocating time between reading, planning, writing." },
  ],
  concepts: [
    {
      id: "apelit-u3-comparative-essay",
      title: "The comparative essay",
      skill: "Structure and write a comparative essay under time pressure.",
      lesson: {
        sections: [
          {
            heading: "Comparative structure",
            body: "Two main approaches: **point-by-point** (each paragraph analyzes both texts on one lens — stronger synthesis) and **block** (each text gets its own section — clearer but risks becoming parallel summaries). Point-by-point usually produces better comparative analysis because it forces genuine relation.",
          },
          {
            heading: "Timed strategy",
            body: "For a 40-minute comparative essay: ~10 min reading both texts and identifying your lens, ~5 min outlining, ~20 min writing, ~5 min revision. The lens should be specific — 'how each text treats mortality' beats 'how each text is different'.",
          },
        ],
        keyFormulas: [
          { name: "Comparative essay", statement: "Lens → alternate texts per paragraph → synthesis conclusion" },
          { name: "Time split", statement: "10 read + 5 plan + 20 write + 5 revise" },
        ],
        workedExample: {
          problem: "Outline a comparative essay on how two poems treat nature — one Romantic, one Modernist.",
          solution: "Lens: nature's relationship to the self. Para 1: Romantic poem's nature as spiritual mirror — quotes showing communion. Para 2: Modernist poem's nature as indifferent force — quotes showing alienation. Synthesis: the shift from nature-as-teacher to nature-as-indifferent reflects changing worldviews — form and content intertwine.",
        },
      },
      questions: [
        {
          id: "apelit-u3-comparative-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point-by-point structure in a comparative essay ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "discusses each text fully before comparing"
                    },
                    {
                              "id": "b",
                              "text": "alternates analysis of both texts on a shared lens in each paragraph"
                    },
                    {
                              "id": "c",
                              "text": "only compares endings"
                    },
                    {
                              "id": "d",
                              "text": "is always better than block method"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Point-by-point",
                              "statement": "Both texts per paragraph on one lens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point-by-point analyzes both texts on each shared lens in turn — forcing genuine comparison rather than parallel summary.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Alternate texts on shared lens",
          "commonErrors": [
                    "Confusing with block method."
          ]
},
        },
        {
          id: "apelit-u3-comparative-essay-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best comparative lens is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a broad topic like 'love'"
                    },
                    {
                              "id": "b",
                              "text": "a specific question like 'how each text uses nature imagery to explore mortality'"
                    },
                    {
                              "id": "c",
                              "text": "the authors' biographies"
                    },
                    {
                              "id": "d",
                              "text": "which text is better"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lens selection",
                              "statement": "Specific question enabling analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A good lens is specific enough to generate analysis — 'how each text treats mortality through X technique' — not just a topic.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Specific analytical question",
          "commonErrors": [
                    "Choosing too broad a lens."
          ]
},
        },
        {
          id: "apelit-u3-comparative-essay-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why point-by-point structure usually produces better comparative analysis than block structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Comparative structure",
                              "statement": "Relation vs parallel summary."
                    },
                    {
                              "kind": "skill",
                              "name": "Structural strategy",
                              "statement": "Force genuine comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point-by-point forces each paragraph to relate both texts on one lens — the comparison is built into the structure; block method risks becoming two separate summaries with a comparison tacked on.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The block method's danger: each text gets analyzed in isolation, then 'compared' superficially — the reader sees two essays, not one comparative argument.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Point-by-point's discipline: every paragraph must answer 'how are these texts different/similar ON THIS LENS?'",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Point-by-point builds comparison into structure",
          "commonErrors": [
                    "Choosing block method for safety but producing parallel summaries."
          ]
},
        },
        {
          id: "apelit-u3-comparative-essay-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes 'Poem A is about nature and Poem B is about death.' Diagnose the problem and fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative diagnosis",
                              "statement": "Topic vs analysis."
                    },
                    {
                              "kind": "context",
                              "name": "Synthesis",
                              "statement": "What the comparison reveals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem: this states topics, not analysis — no claim about HOW they treat their subjects or what the comparison reveals; it's parallel summary disguised as comparison.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fix: choose a lens connecting them — 'both poems use natural imagery, but Poem A's nature nurtures while Poem B's nature is indifferent — the contrast reveals a shift from Romantic communion to Modernist alienation.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The fix transforms topic-statements into a comparative claim — the texts' DIFFERENCE on a shared subject IS the analysis.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Topics → shared lens + comparative claim",
          "commonErrors": [
                    "Confusing stating topics with making an argument."
          ]
},
        },
      ],
    },
  ],
};
