import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apel-u2-lesson-2-1",
  code: "2-1",
  title: "Building an Argument",
  goal: "I CAN construct a thesis-driven argument with reasoning and evidence.",
  standards: ["AP Lang 4.x"],
  vocabulary: [
    { term: "Argument", definition: "A reasoned position supported by evidence and reasoning." },
    { term: "Reasoning", definition: "The logical connection explaining HOW evidence supports the claim." },
    { term: "Evidence", definition: "Facts, examples, data, expert testimony, or textual details." },
    { term: "Counterargument", definition: "The strongest opposing position — addressing it strengthens your argument." },
    { term: "Refutation", definition: "Explaining why the counterargument fails or is insufficient." },
    { term: "Qualifiers", definition: "Words like 'often', 'in most cases' — show intellectual honesty." },
  ],
  concepts: [
    {
      id: "apel-u2-argument-structure",
      title: "Argument structure",
      skill: "Develop claims with reasoning, evidence, and counterargument.",
      lesson: {
        sections: [
          {
            heading: "The argument engine",
            body: "Claim → reasoning → evidence. Reasoning is the often-neglected middle: it explains WHY the evidence proves the claim. 'Studies show X' is weak; 'Because X operates through mechanism Y, we should expect Z' is strong.",
          },
          {
            heading: "Counterargument and nuance",
            body: "Addressing the strongest opposing view demonstrates intellectual honesty and strengthens your position. Effective refutation concedes what's true in the opposition, then shows why your claim still prevails. Strategic qualifiers ('in most cases', 'when resources allow') make arguments more defensible.",
          },
        ],
        keyFormulas: [
          { name: "Argument chain", statement: "Claim → reasoning → evidence" },
          { name: "Refutation", statement: "Concede → distinguish → rebut" },
        ],
        workedExample: {
          problem: "Strengthen: 'Schools should start later because students are tired.'",
          solution: "Add reasoning and evidence: 'Later start times align the school day with adolescent circadian rhythms, which shift roughly two hours during puberty — a biological reality, not a preference. Districts that delayed start saw measurable gains in attendance and grades.'",
        },
      },
      questions: [
        {
          id: "apel-u2-argument-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The strongest element distinguishing a good argument from an assertion is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "strong feelings"
                    },
                    {
                              "id": "b",
                              "text": "reasoning connecting evidence to claim"
                    },
                    {
                              "id": "c",
                              "text": "long sentences"
                    },
                    {
                              "id": "d",
                              "text": "expert quotes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reasoning",
                              "statement": "The 'how' and 'why' linking evidence to claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reasoning transforms evidence into argument — it's the analytical middle most students skip.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking evidence alone makes an argument."
          ]
},
        },
        {
          id: "apel-u2-argument-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A concession in an argument ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weakens your position"
                    },
                    {
                              "id": "b",
                              "text": "acknowledges a point of the opposition strategically"
                    },
                    {
                              "id": "c",
                              "text": "changes your thesis"
                    },
                    {
                              "id": "d",
                              "text": "is never useful"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Concession",
                              "statement": "Strategic acknowledgment builds credibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conceding a limited point strengthens ethos and pre-empts rebuttal — weakness only if you concede your core claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking any concession loses the argument."
          ]
},
        },
        {
          id: "apel-u2-argument-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the reasoning link for this claim-evidence pair: Claim: 'The city should expand public transit.' Evidence: 'Bus ridership rose 15% last year.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reasoning",
                              "statement": "Explain the mechanism connecting evidence to claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weak: restates evidence. Strong: 'Ridership growth demonstrates latent demand — expanding service would convert occasional riders into regular commuters, reducing road congestion and emissions.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The reasoning links observed demand to projected outcomes — the 'so what' of the evidence.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Reasoning: ridership growth shows unmet demand that expansion would serve",
          "commonErrors": [
                    "Just repeating the statistic without explaining its significance."
          ]
},
        },
        {
          id: "apel-u2-argument-structure-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why addressing a counterargument usually strengthens rather than weakens an argument, and describe how to do it effectively.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Counterargument",
                              "statement": "Acknowledging opposition builds ethos."
                    },
                    {
                              "kind": "skill",
                              "name": "Refutation",
                              "statement": "Concede-then-distinguish-then-rebut."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Addressing counterarguments shows you've considered the issue fully — enhances ethos and pre-empts objections readers might raise.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Effective refutation concedes the valid part, distinguishes your context, then shows why your claim still holds.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ignoring the opposition entirely leaves your argument vulnerable — readers supply the counterargument themselves.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Counterargument strengthens ethos; concede-distinguish-rebut",
          "commonErrors": [
                    "Thinking counterarguments only give opponents ammunition."
          ]
},
        },
      ],
    },
  ],
};
