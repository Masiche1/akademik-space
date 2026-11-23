import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apelit-u3-lesson-3-1",
  code: "3-1",
  title: "Building a Literary Argument",
  goal: "I CAN construct a defensible thesis and support it with textual evidence.",
  standards: ["AP Lit 17.x"],
  vocabulary: [
    { term: "Literary argument", definition: "A reasoned claim about a text's meaning or method." },
    { term: "Defensible thesis", definition: "A claim that can be supported by evidence and contested." },
    { term: "Evidence selection", definition: "Choosing quotes that reveal technique or theme." },
    { term: "Counterargument", definition: "Acknowledging and addressing alternative readings." },
    { term: "Complexity", definition: "Acknowledging nuance and ambiguity in interpretation." },
    { term: "Synthesis", definition: "Connecting evidence into a coherent argument." },
  ],
  concepts: [
    {
      id: "apelit-u3-literary-argument",
      title: "Literary argument",
      skill: "Build defensible theses supported by integrated evidence.",
      lesson: {
        sections: [
          {
            heading: "The literary argument",
            body: "A literary argument claims something specific about how a text works or means — 'the novel suggests that memory both preserves and distorts identity' is arguable; 'the novel is about memory' is a topic. The thesis must be specific enough to be contested and supported enough to be defensible.",
          },
          {
            heading: "Evidence and complexity",
            body: "Evidence must be **integrated** (woven into sentences with context), **analyzed** (explained, not just quoted), and **sufficient** (enough to support the claim). The strongest arguments acknowledge complexity — 'while X appears to suggest Y, closer reading reveals Z' — showing you've wrestled with the text's ambiguities.",
          },
        ],
        keyFormulas: [
          { name: "Thesis test", statement: "Specific + arguable + about method or meaning" },
          { name: "Evidence formula", statement: "Quote → context → analysis → significance" },
        ],
        workedExample: {
          problem: "Develop a thesis for a poem about a decaying house.",
          solution: "'The poem uses the decaying house as an extended metaphor for inherited trauma — each room's deterioration mirrors a family member's psychological state, suggesting that damage passes through generations like architecture.' Specific claim about method (extended metaphor) and meaning (inherited trauma).",
        },
      },
      questions: [
        {
          id: "apelit-u3-literary-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong literary thesis ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "states the obvious theme"
                    },
                    {
                              "id": "b",
                              "text": "makes a specific, arguable claim about method or meaning"
                    },
                    {
                              "id": "c",
                              "text": "lists devices used"
                    },
                    {
                              "id": "d",
                              "text": "summarizes the plot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Defensible thesis",
                              "statement": "Specific + arguable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A thesis must be specific enough to argue and broad enough to be interesting — 'the poem uses X to suggest Y' beats 'the poem is about Z'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Specific and arguable",
          "commonErrors": [
                    "Writing topic statements instead of claims."
          ]
},
        },
        {
          id: "apelit-u3-literary-argument-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best way to acknowledge complexity in an essay is to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "say 'it depends'"
                    },
                    {
                              "id": "b",
                              "text": "show awareness of competing interpretations while defending your own"
                    },
                    {
                              "id": "c",
                              "text": "list both sides without choosing"
                    },
                    {
                              "id": "d",
                              "text": "avoid strong claims"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Nuanced argument",
                              "statement": "Acknowledge then defend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sophistication means acknowledging alternative readings then explaining why yours is better supported — 'while some might read X, the evidence suggests Y because...' — not fence-sitting.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Acknowledge alternatives, defend yours",
          "commonErrors": [
                    "Confusing complexity with indecision."
          ]
},
        },
        {
          id: "apelit-u3-literary-argument-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'integrated evidence' matters more than 'quoted evidence' in literary essays.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence integration",
                              "statement": "Quote in context with analysis."
                    },
                    {
                              "kind": "skill",
                              "name": "Citation technique",
                              "statement": "Weave, don't drop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrated evidence is woven into your sentences with context and followed by analysis — it shows you understand the quote's place in the text; dropped quotes (standalone block quotes) interrupt flow and suggest you're displaying rather than analyzing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Integration also forces precision — you must introduce the quote accurately and connect it grammatically, demonstrating control.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: could the quote be removed without damaging your sentence? If yes, it's not integrated.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Weave quotes into analysis, don't drop them",
          "commonErrors": [
                    "Block-quoting without integration."
          ]
},
        },
        {
          id: "apelit-u3-literary-argument-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student's thesis is 'the character is conflicted.' Strengthen it into a defensible literary argument.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Thesis development",
                              "statement": "Vague → specific → arguable."
                    },
                    {
                              "kind": "context",
                              "name": "Claim quality",
                              "statement": "What makes an argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Conflicted' is vague — conflicted about WHAT, shown HOW? Strengthen: 'the character's divided loyalties — to family duty and personal desire — are enacted through her contradictory actions, suggesting that the text views moral compromise as both necessary and corrosive.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The strong version specifies the conflict (family vs desire), the method (contradictory actions), and the arguable claim (necessary but corrosive) — it's a position someone could contest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: could someone disagree with your thesis using the same text? If not, it's not arguable enough.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Specify conflict, method, and arguable claim",
          "commonErrors": [
                    "Accepting vague characterizations as theses."
          ]
},
        },
      ],
    },
  ],
};
