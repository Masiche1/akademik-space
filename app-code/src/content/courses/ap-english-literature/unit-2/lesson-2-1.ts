import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apelit-u2-lesson-2-1",
  code: "2-1",
  title: "Ambiguity and Multiple Interpretations",
  goal: "I CAN analyze ambiguous texts and construct defensible interpretations.",
  standards: ["AP Lit 13.x"],
  vocabulary: [
    { term: "Ambiguity", definition: "Deliberate openness to multiple valid readings." },
    { term: "Unreliable narration", definition: "A narrator whose account cannot be fully trusted." },
    { term: "Interpretation", definition: "A reasoned account of a text's meaning." },
    { term: "Evidence-based reading", definition: "Grounding interpretation in specific textual details." },
    { term: "Interpretive humility", definition: "Acknowledging what a text leaves unresolved." },
    { term: "Close vs distant reading", definition: "Detail-focused vs pattern-focused analysis." },
  ],
  concepts: [
    {
      id: "apelit-u2-ambiguity",
      title: "Ambiguity and interpretation",
      skill: "Analyze ambiguous texts and defend interpretations with evidence.",
      lesson: {
        sections: [
          {
            heading: "Ambiguity as feature",
            body: "Great literature often refuses single meanings — ambiguity is a feature, not a flaw. A text that means 'love conquers all' AND 'love destroys' in different readings is richer than one with a simple message. The analytical task is not to resolve ambiguity but to argue for a defensible interpretation.",
          },
          {
            heading: "Unreliable narration",
            body: "When a narrator can't be trusted — whether through self-deception, bias, or deliberate distortion — the reader must read BETWEEN the lines. What the narrator omits, misremembers, or misinterprets becomes evidence of the text's deeper concerns.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "Claim → textual evidence → acknowledge complexity" },
          { name: "Ambiguity rule", statement: "Multiple valid readings = richness, not confusion" },
        ],
        workedExample: {
          problem: "A narrator insists 'I don't care' while describing vivid emotional details about a lost love. Interpret.",
          solution: "The gap between claimed indifference and detailed memory suggests denial or suppressed grief — the narrator's words contradict their attention. The ambiguity (caring or not?) is the point: the text enacts the very denial it describes.",
        },
      },
      questions: [
        {
          id: "apelit-u2-ambiguity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ambiguity in literature ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is always a flaw"
                    },
                    {
                              "id": "b",
                              "text": "can be a deliberate feature inviting multiple readings"
                    },
                    {
                              "id": "c",
                              "text": "means the text is confusing"
                    },
                    {
                              "id": "d",
                              "text": "should be resolved quickly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Ambiguity",
                              "statement": "Openness to multiple meanings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ambiguity is often deliberate — great texts sustain multiple valid interpretations; it's richness, not confusion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Deliberate openness",
          "commonErrors": [
                    "Treating ambiguity as a problem to eliminate."
          ]
},
        },
        {
          id: "apelit-u2-ambiguity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An unreliable narrator requires readers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "trust everything they say"
                    },
                    {
                              "id": "b",
                              "text": "read between the lines — what they omit or distort is evidence"
                    },
                    {
                              "id": "c",
                              "text": "ignore their emotions"
                    },
                    {
                              "id": "d",
                              "text": "focus only on plot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Unreliable narration",
                              "statement": "Gap between account and truth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With an unreliable narrator, what they DON'T say matters as much as what they do — omissions and distortions are evidence of deeper truths.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Read between the lines",
          "commonErrors": [
                    "Taking unreliable narration at face value."
          ]
},
        },
        {
          id: "apelit-u2-ambiguity-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an unreliable narrator creates meaning through what they DON'T say.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Narrative gaps",
                              "statement": "Absence as evidence."
                    },
                    {
                              "kind": "skill",
                              "name": "Inference analysis",
                              "statement": "Reading the silences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The unreliable narrator's omissions are as meaningful as their statements — what they avoid, forget, or misremember reveals what they cannot face; the gaps in their account map the gaps in their self-knowledge.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: a narrator who never mentions a sibling's death but describes their empty room — the avoidance IS the grief.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong analysis treats silence and distortion as evidence, not absence of evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Omissions and distortions reveal what the narrator can't confront",
          "commonErrors": [
                    "Only analyzing what is said, ignoring what's avoided."
          ]
},
        },
        {
          id: "apelit-u2-ambiguity-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says 'there's only one correct interpretation.' Argue against this position using literary reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Interpretive pluralism",
                              "statement": "Multiple defensible readings."
                    },
                    {
                              "kind": "skill",
                              "name": "Argumentation",
                              "statement": "Defend ambiguity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Texts are ambiguous by nature — language is underdetermined; different readers bring different contexts; the same line can sustain multiple defensible readings grounded in evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But 'multiple interpretations' doesn't mean 'anything goes' — interpretations must be evidence-based and defensible; the constraint is textual support, not a single answer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The best literature rewards reinterpretation — if a text could only mean one thing, it would be a puzzle, not art.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Multiple evidence-based readings are valid; the constraint is textual support",
          "commonErrors": [
                    "Confusing interpretive openness with relativism."
          ]
},
        },
      ],
    },
  ],
};
