import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "apelit-u1-lesson-1-7",
  code: "1-7",
  title: "The Prose Analysis Essay",
  goal: "I CAN write an analytical essay on a prose passage with integrated evidence.",
  standards: ["AP Lit 7.x"],
  vocabulary: [
    { term: "Prose passage essay", definition: "The timed essay analyzing a provided prose excerpt." },
    { term: "Thesis", definition: "A defensible claim about how the passage creates meaning." },
    { term: "Close reading", definition: "Line-by-line attention to language choices." },
    { term: "Evidence integration", definition: "Quoting and explaining specific language." },
    { term: "Sophistication", definition: "Nuanced claims, complex syntax, awareness of ambiguity." },
  ],
  concepts: [
    {
      id: "apelit-u1-prose-essay",
      title: "The prose analysis essay",
      skill: "Structure a timed prose analysis with thesis, evidence, and commentary.",
      lesson: {
        sections: [
          {
            heading: "Essay architecture",
            body: "AP Lit essays typically analyze a prose passage for its techniques and effects. Structure: **thesis** (defensible claim about how the passage works), **body paragraphs** (each focused on a technique or pattern with quoted evidence and analysis), **conclusion** (so-what — significance).",
          },
          {
            heading: "What examiners reward",
            body: "The rubric rewards **evidence and commentary** (quoting AND explaining), **sophistication** (nuanced claims, awareness of ambiguity), and **control** (organized, precise prose). Summary of plot earns almost nothing — analysis of HOW the passage works earns everything.",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Thesis → technique+evidence+analysis paragraphs → significance" },
          { name: "Commentary ratio", statement: "Every quote needs at least as much explanation as quotation" },
        ],
        workedExample: {
          problem: "Outline an essay on a passage where a narrator describes leaving home.",
          solution: "Thesis: the passage uses sensory imagery and shifting point of view to portray departure as both relief and loss. Body 1: imagery of the house 'shrinking' — analysis of diminishment metaphor. Body 2: shift to child's perspective — analysis of limited knowledge creating irony. Conclusion: departure as ambiguous threshold.",
        },
      },
      questions: [
        {
          id: "apelit-u1-prose-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an AP Lit prose essay, plot summary is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the most important element"
                    },
                    {
                              "id": "b",
                              "text": "worthless — analysis of technique is what scores"
                    },
                    {
                              "id": "c",
                              "text": "required in every paragraph"
                    },
                    {
                              "id": "d",
                              "text": "the thesis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Analysis vs summary",
                              "statement": "Technique analysis scores; plot recap doesn't."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The rubric rewards analysis of how the passage creates meaning — plot summary demonstrates comprehension but not analysis.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Analysis, not summary",
          "commonErrors": [
                    "Believing summary demonstrates understanding."
          ]
},
        },
        {
          id: "apelit-u1-prose-essay-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The strongest thesis for a prose passage essay ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summarizes what happens"
                    },
                    {
                              "id": "b",
                              "text": "makes a defensible claim about how techniques create meaning"
                    },
                    {
                              "id": "c",
                              "text": "lists all the devices used"
                    },
                    {
                              "id": "d",
                              "text": "states the theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Thesis quality",
                              "statement": "Defensible claim about method and meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A strong thesis argues HOW the passage works — e.g., 'the passage uses shifting perspective to complicate the narrator's claimed indifference' — not just what it says.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Claim about technique and meaning",
          "commonErrors": [
                    "Writing a topic sentence instead of an arguable claim."
          ]
},
        },
        {
          id: "apelit-u1-prose-essay-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'commentary' matters more than 'quotation' in a literature essay, and how to achieve the right balance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Commentary",
                              "statement": "Your analysis of what the quote does."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence integration",
                              "statement": "Quote + explain + connect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quotations are evidence; commentary is the analysis that makes evidence meaningful — a quote without commentary is decoration, commentary without quote is assertion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Balance: introduce the quote briefly, quote precisely, then spend MORE words explaining its device, effect, and significance — typically 2-3 sentences of commentary per quote.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'so what' test: after every quote, ask what it proves about the passage's meaning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Commentary carries the analysis; aim for more explanation than quotation",
          "commonErrors": [
                    "Letting quotes speak for themselves."
          ]
},
        },
        {
          id: "apelit-u1-prose-essay-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes 'the author uses imagery' as their topic sentence. Rewrite it as a strong analytical claim and explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Claim precision",
                              "statement": "Specific + arguable + about meaning."
                    },
                    {
                              "kind": "context",
                              "name": "Sophistication",
                              "statement": "Nuanced claims score higher."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weak: 'uses imagery' — vague, unfalsifiable, just names a category. Strong: 'the passage's recurring images of shrinking and concealment suggest the narrator's reluctance to confront what she is leaving behind' — specific device, arguable interpretation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strong version names WHICH images, WHAT they suggest, and WHY — it's a claim someone could contest, which is what makes it analytical.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sophistication: the strongest theses acknowledge complexity ('while X appears Y, the passage ultimately suggests Z').",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Specific device + arguable interpretation = strong claim",
          "commonErrors": [
                    "Believing naming a device is enough."
          ]
},
        },
      ],
    },
  ],
};
