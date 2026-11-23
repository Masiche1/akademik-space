import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "satrw-u1-lesson-1-3",
  code: "1-3",
  title: "Inferences and Implications",
  goal: "I CAN draw logical inferences from passages.",
  standards: ["SAT RW 1.x"],
  vocabulary: [
    { term: "Inference", definition: "A conclusion drawn from evidence — reading between lines." },
    { term: "Implied", definition: "Suggested but not stated." },
    { term: "Logical inference", definition: "Follows necessarily from the text." },
    { term: "Assumption", definition: "What must be true for the argument to work." },
    { term: "Over-inference", definition: "Going beyond what the text supports." },
    { term: "Textual evidence", definition: "The passage detail grounding the inference." },
  ],
  concepts: [
    {
      id: "satrw-u1-inference",
      title: "Inferences",
      skill: "Draw supported inferences without over-reaching.",
      lesson: {
        sections: [
          {
            heading: "Inference vs assumption",
            body: "An **inference** is what the text supports — you can point to evidence; an **assumption** is what you bring. SAT inference questions ask what MUST be true given the passage — the answer follows logically, not just plausibly. 'The author implies X' means X is supported, not certain.",
          },
          {
            heading: "Avoiding over-inference",
            body: "The trap: choosing an answer that's PLAUSIBLE but not SUPPORTED. 'The character is probably sad' might be reasonable but if the text doesn't show sadness, it's over-inference. The correct answer is the one the text most directly supports — conservative, not speculative.",
          },
        ],
        keyFormulas: [
          { name: "Inference test", statement: "Can I point to the exact text supporting this?" },
          { name: "Over-inference", statement: "Plausible but unsupported = wrong answer" },
        ],
        workedExample: {
          problem: "Text: 'She checked the lock three times before leaving.' What can we infer?",
          solution: "She is cautious or anxious about security — the repeated checking implies concern. We CANNOT infer she's paranoid (too strong) or that she's been burglarized (not stated). The inference stays close to the evidence.",
        },
      },
      questions: [
        {
          id: "satrw-u1-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An inference is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stated directly in the text"
                    },
                    {
                              "id": "b",
                              "text": "a conclusion drawn from evidence"
                    },
                    {
                              "id": "c",
                              "text": "an opinion"
                    },
                    {
                              "id": "d",
                              "text": "a guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inference",
                              "statement": "Evidence-based conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inference draws conclusions from evidence — between the lines but grounded in them; not stated directly, not mere opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Evidence-based conclusion",
          "commonErrors": [
                    "Confusing with explicit statement."
          ]
},
        },
        {
          id: "satrw-u1-inference-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best inference answer is the one that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is most interesting"
                    },
                    {
                              "id": "b",
                              "text": "is most directly supported by the text"
                    },
                    {
                              "id": "c",
                              "text": "uses the strongest vocabulary"
                    },
                    {
                              "id": "d",
                              "text": "covers everything mentioned"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Inference selection",
                              "statement": "Textual support over plausibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct inferences are the most textually supported — plausible-sounding but unsupported options are the trap.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Most directly supported",
          "commonErrors": [
                    "Choosing the most dramatic interpretation."
          ]
},
        },
        {
          id: "satrw-u1-inference-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'plausible' inference answers are often wrong on the SAT.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Over-inference",
                              "statement": "Plausible ≠ supported."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SAT distractors are designed to be plausible — 'the character is probably lonely' sounds reasonable but if the text doesn't support loneliness specifically, it's wrong; the test rewards textual fidelity over real-world likelihood.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The correct answer is conservative — it says only what the text directly implies, even if less interesting; interesting-but-unsupported is the trap.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strategy: for each option, ask 'where in the text does it say/imply this?' — no textual anchor = wrong.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Plausible distractors fail the textual-support test",
          "commonErrors": [
                    "Choosing interesting over supported."
          ]
},
        },
        {
          id: "satrw-u1-inference-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Text: 'The committee approved the budget unanimously, though several members had expressed private reservations.' What can we infer about the members?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Nuance in evidence",
                              "statement": "Public vs private positions."
                    },
                    {
                              "kind": "skill",
                              "name": "Precise inference",
                              "statement": "What 'though' signals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 'though' clause signals contrast — members publicly supported but privately had reservations; we can infer they may not have fully agreed despite the unanimous vote.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "We CANNOT infer they opposed it (they approved), were dishonest (reservations may be legitimate), or regretted it (not stated) — the inference is limited to the stated contrast.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strong inference respects the text's precision — 'though' creates a gap between public action and private feeling that the inference must capture exactly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Members had private doubts despite public unanimity",
          "commonErrors": [
                    "Over-inferring opposition or regret."
          ]
},
        },
      ],
    },
  ],
};
