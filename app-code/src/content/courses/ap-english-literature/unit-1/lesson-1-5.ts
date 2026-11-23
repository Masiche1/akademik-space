import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "apelit-u1-lesson-1-5",
  code: "1-5",
  title: "Literary Terms and Textual Evidence",
  goal: "I CAN use precise literary terminology and select effective textual evidence.",
  standards: ["AP Lit 5.x"],
  vocabulary: [
    { term: "Allusion", definition: "An indirect reference to another work, event, or figure." },
    { term: "Juxtaposition", definition: "Placing contrasting elements side by side." },
    { term: "Paradox", definition: "An apparently self-contradictory statement that may be true." },
    { term: "Oxymoron", definition: "A compressed paradox in two words ('deafening silence')." },
    { term: "Evidence selection", definition: "Choosing quotes that are specific, revealing, and analyzable." },
    { term: "Quotation integration", definition: "Weaving quotes into sentences with context and commentary." },
  ],
  concepts: [
    {
      id: "apelit-u1-literary-terms",
      title: "Terms and evidence",
      skill: "Deploy precise terminology and select evidence that supports analysis.",
      lesson: {
        sections: [
          {
            heading: "Precision matters",
            body: "Use the exact term — 'metaphor' not 'comparison', 'irony' not 'unexpected'. Vague terminology ('the author uses figurative language') wastes the chance to show analytical precision. Name the specific device, then analyze its effect.",
          },
          {
            heading: "Selecting evidence",
            body: "Strong evidence is **specific** (a line or phrase, not 'the whole poem'), **revealing** (shows the device or theme clearly), and **analyzable** (you can say something interesting about it). One well-chosen quote analyzed deeply beats five quotes listed superficially.",
          },
        ],
        keyFormulas: [
          { name: "Evidence formula", statement: "Quote → context → device → effect → theme" },
          { name: "Precision rule", statement: "Name the exact device before analyzing it" },
        ],
        workedExample: {
          problem: "Choose evidence for a thesis about irony in a story where a character 'congratulates' a rival's failure.",
          solution: "Select the exact line with the congratulation, quote it precisely, identify it as verbal/situational irony, and explain how the gap between surface politeness and real hostility reveals character.",
        },
      },
      questions: [
        {
          id: "apelit-u1-literary-terms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A compressed paradox in two words is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "allusion"
                    },
                    {
                              "id": "b",
                              "text": "oxymoron"
                    },
                    {
                              "id": "c",
                              "text": "juxtaposition"
                    },
                    {
                              "id": "d",
                              "text": "metonymy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oxymoron",
                              "statement": "Two-word paradox."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Deafening silence', 'cruel kindness' — two-word contradictions are oxymorons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Oxymoron",
          "commonErrors": [
                    "Confusing oxymoron with paradox."
          ]
},
        },
        {
          id: "apelit-u1-literary-terms-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best textual evidence is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "long — more is better"
                    },
                    {
                              "id": "b",
                              "text": "specific, revealing, and analyzable"
                    },
                    {
                              "id": "c",
                              "text": "the first quote you find"
                    },
                    {
                              "id": "d",
                              "text": "famous lines from the text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence quality",
                              "statement": "Specificity and analyzability matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective evidence is a precise phrase you can analyze deeply — length and fame are irrelevant.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Specific and analyzable",
          "commonErrors": [
                    "Choosing evidence by length rather than quality."
          ]
},
        },
        {
          id: "apelit-u1-literary-terms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'the author uses figurative language' is a weak analytical claim, and how to strengthen it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Analytical precision",
                              "statement": "Name the specific device and its effect."
                    },
                    {
                              "kind": "context",
                              "name": "Claim quality",
                              "statement": "Specific claims can be argued; vague ones cannot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The claim is vague — 'figurative language' covers dozens of devices with different effects; it identifies nothing specific.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strengthen by naming the exact device ('the extended metaphor of the garden-as-life'), quoting the specific language, and explaining its precise effect on theme or tone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: could someone disagree with your claim? A specific claim invites debate; a vague one is unfalsifiable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Name the specific device, quote the language, explain the precise effect",
          "commonErrors": [
                    "Thinking more words = stronger analysis."
          ]
},
        },
        {
          id: "apelit-u1-literary-terms-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how allusion works and why it can be powerful — or risky — in a text.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Allusion",
                              "statement": "Indirect reference to another text/event."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluating technique",
                              "statement": "Weigh power and risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Allusion invokes a shared cultural or literary reference — it imports an entire narrative's meaning in a few words, creating depth for readers who catch it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Power: compression and resonance — one reference carries layers of meaning. Risk: readers who miss the reference lose the layer entirely; it can also feel showy if the reference doesn't earn its place.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong answers evaluate whether the allusion is essential or decorative.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Allusion compresses meaning via shared reference — powerful for informed readers, risky for others",
          "commonErrors": [
                    "Defining allusion without analyzing its rhetorical stakes."
          ]
},
        },
      ],
    },
  ],
};
