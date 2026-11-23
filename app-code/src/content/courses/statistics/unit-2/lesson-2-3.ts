import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "stats-u2-lesson-2-3",
  code: "2-3",
  title: "Conditional Probability and Bayes",
  goal: "I CAN calculate conditional probabilities and apply Bayes' theorem.",
  standards: ["S-CP.A.3", "S-CP.A.4", "S-CP.A.5", "S-CP.B.6", "S-CP.B.7", "S-CP.B.8", "S-CP.B.9"],
  vocabulary: [
    { term: "Conditional", definition: "P(A|B) given B." },
    { term: "Bayes", definition: "Update probability with evidence." },
    { term: "Prior", definition: "Initial probability." },
    { term: "Posterior", definition: "Updated probability." },
    { term: "False positive", definition: "Test error." },
    { term: "Sensitivity", definition: "True positive rate." },
    { term: "Specificity", definition: "True negative rate." },
  ],
  concepts: [
    {
      id: "stats-u2-conditional-probability",
      title: "Conditional probability and Bayes",
      skill: "Calculate conditional probabilities and apply Bayes' theorem.",
      lesson: {
        sections: [
          {
            heading: "Conditional probability",
            body: "P(A|B) = P(A and B)/P(B) — probability of A given B occurred. Example: P(disease | positive test) uses only the positive test group, not the whole population.",
          },
          {
            heading: "Bayes' theorem",
            body: "Bayes updates probabilities with new evidence: posterior ∝ likelihood × prior. Medical testing example: even with accurate tests, rare diseases mean most positives are false positives — base rate matters enormously.",
          },
        ],
        keyFormulas: [
          { name: "Conditional", statement: "P(A|B) = P(A∩B)/P(B)." },
          { name: "Bayes", statement: "Posterior ∝ likelihood × prior." },
        ],
        workedExample: {
          problem: "Disease affects 1% of population. Test is 99% accurate. If you test positive, what's P(disease|positive)?",
          solution: "Use Bayes: with 10,000 people, ~100 have disease (99 test positive) and ~9,900 don't (1% false positive = ~99). P(disease|+) = 99/(99+99) ≈ 50% — much lower than intuition suggests.",
        },
      },
      questions: [
        {
          id: "stats-u2-conditional-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "P(A|B) means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "P(B|A)"
                    },
                    {
                              "id": "b",
                              "text": "probability of A given B occurred"
                    },
                    {
                              "id": "c",
                              "text": "P(A) × P(B)"
                    },
                    {
                              "id": "d",
                              "text": "P(A) + P(B)"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conditional",
                              "statement": "A given B."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P(A|B) is the probability of A occurring given that B has occurred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** probability of A given B occurred",
          "commonErrors": [
                    "Reversing the condition."
          ]
},
        },
        {
          id: "stats-u2-conditional-probability-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bayes' theorem is used to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count outcomes"
                    },
                    {
                              "id": "b",
                              "text": "update probabilities with new evidence"
                    },
                    {
                              "id": "c",
                              "text": "find means"
                    },
                    {
                              "id": "d",
                              "text": "draw graphs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bayes",
                              "statement": "Update with evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bayes' theorem updates prior probabilities to posterior probabilities given new evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** update probabilities with new evidence",
          "commonErrors": [
                    "Confusing with basic probability."
          ]
},
        },
        {
          id: "stats-u2-conditional-probability-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "P(A and B) = 0.24, P(B) = 0.6. What is P(A|B)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Probability",
                              "answer": 0.4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conditional",
                              "statement": "$0.24/0.6 = 0.4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$P(A|B) = 0.24/0.6 = 0.4$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0.4$",
          "commonErrors": [
                    "Multiplying instead of dividing."
          ]
},
        },
        {
          id: "stats-u2-conditional-probability-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A disease affects 0.1% of people. A test is 99% sensitive and 99% specific. If you test positive, explain why P(disease|+) is much lower than 99%.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Base rate",
                              "statement": "Rare disease → few true cases."
                    },
                    {
                              "kind": "skill",
                              "name": "Bayes",
                              "statement": "False positives outnumber true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With 0.1% prevalence, in 100,000 people only ~100 have the disease. The test catches ~99 true positives but also gives ~1,000 false positives (1% of 99,900 healthy). So P(disease|+) ≈ 99/(99+1000) ≈ 9% — far below intuition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains base rate effect correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Base rate: false positives outnumber true positives.**",
          "commonErrors": [
                    "Assuming 99% accuracy means 99% chance of disease."
          ]
},
        },
      ],
    },
  ],
};
