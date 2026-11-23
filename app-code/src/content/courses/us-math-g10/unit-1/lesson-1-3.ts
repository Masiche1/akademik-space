import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m10-u1-lesson-1-3",
  code: "1-3",
  title: "Writing Geometric Proofs",
  goal: "I CAN write a two-column proof using definitions, postulates and theorems.",
  standards: ["G-CO.9", "G-CO.11", "G-SRT.5"],
  vocabulary: [
    { term: "Two-column proof", definition: "Statements on the left, reasons on the right, aligned row by row." },
    { term: "Postulate", definition: "A rule accepted without proof, such as SAS or the segment addition postulate." },
    { term: "Theorem", definition: "A statement proven from postulates and definitions, such as vertical angles are equal." },
    { term: "Reflexive property", definition: "$XY = XY$ — a segment or angle equals itself; often the missing piece in proofs." },
    { term: "Transitive / substitution", definition: "If $a = b$ and $b = c$ then $a = c$; replace equals with equals." },
  ],
  concepts: [
    {
      id: "m10-u1-geometric-proofs",
      title: "Proof structure",
      skill: "Chain statements and reasons from givens to the conclusion.",
      lesson: {
        sections: [
          {
            heading: "How proofs work",
            body: "A proof starts from the **givens** and ends at the **prove** statement. Each row pairs a **statement** (what is true) with a **reason** (why it is true): a definition, postulate, theorem, or algebraic property. The reflexive property — a shared side equals itself — is the most common hidden given.",
          },
          {
            heading: "Common proof moves",
            body: "Look for vertical angles, linear pairs, a shared side (reflexive), midpoint/bisector definitions, and CPCTC after proving triangles congruent. Flow proofs tell the same story in boxes and arrows; both require every claim to have a legal reason.",
          },
        ],
        keyFormulas: [
          { name: "Proof row", statement: "Statement + reason (definition, postulate, theorem, property)" },
          { name: "Reflexive property", statement: "$AB = AB$ — use for shared sides and angles" },
        ],
        workedExample: {
          problem: "Given $M$ is the midpoint of $AB$ and $N$ is the midpoint of $CD$, with $AB = CD$. Prove $AM = CN$.",
          solution: "1. $AM = \\frac{1}{2}AB$ and $CN = \\frac{1}{2}CD$ (midpoint definition). 2. $AB = CD$ (given). 3. $AM = CN$ (substitution / half of equals).",
        },
      },
      questions: [
        {
          id: "m10-u1-geometric-proofs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a two-column proof, each row contains ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a statement and a reason"
                    },
                    {
                              "id": "b",
                              "text": "two statements"
                    },
                    {
                              "id": "c",
                              "text": "a diagram and a label"
                    },
                    {
                              "id": "d",
                              "text": "only algebra"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Two-column proof",
                              "statement": "Statements paired with justifications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every row pairs what is true with why it is true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** a statement and a reason",
          "commonErrors": [
                    "Thinking proofs are just lists of facts."
          ]
},
        },
        {
          id: "m10-u1-geometric-proofs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which reason justifies 'vertical angles are congruent' in a proof?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reflexive property"
                    },
                    {
                              "id": "b",
                              "text": "Vertical angles theorem"
                    },
                    {
                              "id": "c",
                              "text": "SAS postulate"
                    },
                    {
                              "id": "d",
                              "text": "Segment addition"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Theorem vs property",
                              "statement": "Vertical angles equality is a proven theorem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The vertical angles theorem states opposite angles at an intersection are congruent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct reason.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Vertical angles theorem",
          "commonErrors": [
                    "Citing a postulate for something that is a theorem."
          ]
},
        },
        {
          id: "m10-u1-geometric-proofs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proof needs to show a shared side $PQ$ equals itself. Name the property that is cited.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reflexive property",
                              "statement": "Any quantity equals itself."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$PQ = PQ$ is the reflexive property of equality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct property.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Reflexive property",
          "commonErrors": [
                    "Calling it symmetric or transitive."
          ]
},
        },
        {
          id: "m10-u1-geometric-proofs-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given: $\\overline{AB} \\cong \\overline{CD}$, $M$ midpoint of $AB$, $N$ midpoint of $CD$. Prove $AM \\cong CN$ in two columns (at least 3 rows).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "given",
                              "name": "Midpoint",
                              "statement": "Midpoint divides a segment into two equal parts."
                    },
                    {
                              "kind": "property",
                              "name": "Substitution",
                              "statement": "Equal halves of equal wholes are equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1. $AM = \\frac{1}{2}AB$, $CN = \\frac{1}{2}CD$ — midpoint definition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "2. $AB = CD$ — given.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "3. $AM = CN$ — substitution (halves of equal segments). Conclusion reached.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$AM \\cong CN$ via midpoint definition + substitution",
          "commonErrors": [
                    "Using the whole segments' congruence without halving both sides."
          ]
},
        },
      ],
    },
  ],
};
