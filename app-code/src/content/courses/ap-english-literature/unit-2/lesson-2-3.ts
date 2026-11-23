import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apelit-u2-lesson-2-3",
  code: "2-3",
  title: "Complex and Ambiguous Texts",
  goal: "I CAN analyze texts that resist easy interpretation.",
  standards: ["AP Lit 15.x"],
  vocabulary: [
    { term: "Complex text", definition: "A text requiring sustained analysis and resisting single readings." },
    { term: "Surface vs depth", definition: "Literal meaning vs deeper significance." },
    { term: "Intertextuality", definition: "How texts reference and transform other texts." },
    { term: "Genre subversion", definition: "Texts that violate their genre's expectations." },
    { term: "Reader response", definition: "How a text positions its audience." },
    { term: "Sustained analysis", definition: "Building an argument across the whole text." },
  ],
  concepts: [
    {
      id: "apelit-u2-complex-texts",
      title: "Complex texts",
      skill: "Analyze texts that resist easy interpretation.",
      lesson: {
        sections: [
          {
            heading: "Reading complex texts",
            body: "AP-level texts resist easy answers — they contain contradictions, unreliable narrators, ambiguous symbols, and multiple valid readings. The analytical challenge is sustaining an argument across the whole text, not cherry-picking examples. Look for patterns: what recurs? What contradicts? What does the text refuse to resolve?",
          },
          {
            heading: "Intertextuality and subversion",
            body: "Texts talk to each other — a poem might allude to and transform an earlier one; a novel might subvert its genre's expectations. Recognizing these relationships deepens analysis: what is the text doing WITH its sources or conventions?",
          },
        ],
        keyFormulas: [
          { name: "Complex text", statement: "Contradictions + patterns + refusals → sustained argument" },
          { name: "Intertextuality", statement: "Reference → transformation → new meaning" },
        ],
        workedExample: {
          problem: "A 'horror' story ends ambiguously — was it supernatural or psychological? How to analyze?",
          solution: "The ambiguity IS the meaning — the text refuses to resolve whether the horror is external or internal, suggesting the two are indistinguishable. Analyze how the text sustains both readings through specific details rather than choosing one.",
        },
      },
      questions: [
        {
          id: "apelit-u2-complex-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A complex literary text typically ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "has one clear meaning"
                    },
                    {
                              "id": "b",
                              "text": "resists single interpretation and sustains analysis"
                    },
                    {
                              "id": "c",
                              "text": "is poorly written"
                    },
                    {
                              "id": "d",
                              "text": "is always modernist"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Complexity",
                              "statement": "Resistance to easy answers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complex texts contain contradictions, ambiguity, and multiple valid readings — they reward sustained analysis, not quick answers.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Resists easy answers",
          "commonErrors": [
                    "Assuming complexity = confusion."
          ]
},
        },
        {
          id: "apelit-u2-complex-texts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Intertextuality means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a text within a text"
                    },
                    {
                              "id": "b",
                              "text": "how texts reference, echo, or transform other texts"
                    },
                    {
                              "id": "c",
                              "text": "multiple narrators"
                    },
                    {
                              "id": "d",
                              "text": "footnotes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Intertextuality",
                              "statement": "Text-to-text relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intertextuality is the web of references between texts — allusions, parodies, transformations — where meaning emerges from the relationship.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Text-to-text relationships",
          "commonErrors": [
                    "Confusing with frame narrative."
          ]
},
        },
        {
          id: "apelit-u2-complex-texts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'sustained analysis' matters more than 'finding examples' in complex texts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sustained argument",
                              "statement": "Whole-text coherence."
                    },
                    {
                              "kind": "context",
                              "name": "Complexity",
                              "statement": "Patterns over instances."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complex texts require tracking patterns across the whole — a single example proves little; sustained analysis shows how contradictions, ambiguities, and shifts build a coherent (if complex) meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Examples are evidence for an argument; the argument must account for the WHOLE text — including what seems contradictory or unresolved.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: does your interpretation explain the text's most difficult moments, not just its easiest?",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Sustained analysis builds whole-text arguments from patterns",
          "commonErrors": [
                    "Cherry-picking convenient examples."
          ]
},
        },
        {
          id: "apelit-u2-complex-texts-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A text deliberately refuses to resolve its central ambiguity. Argue why this refusal might be the text's most meaningful choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Productive ambiguity",
                              "statement": "Refusal as statement."
                    },
                    {
                              "kind": "skill",
                              "name": "Argument from form",
                              "statement": "What non-resolution means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Refusing resolution can be the point — the ambiguity enacts the text's theme (e.g., a story about uncertainty that itself refuses certainty); resolution would betray the subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also respects reader agency — the text trusts readers to hold contradiction rather than delivering a packaged answer; ambiguity mirrors life's own unresolved tensions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strongest argument: the refusal IS meaning — the text performs what it describes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Refusal can enact theme — non-resolution as statement",
          "commonErrors": [
                    "Assuming every text should resolve its questions."
          ]
},
        },
      ],
    },
  ],
};
