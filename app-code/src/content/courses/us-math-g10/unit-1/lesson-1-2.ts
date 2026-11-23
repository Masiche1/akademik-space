import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m10-u1-lesson-1-2",
  code: "1-2",
  title: "Triangle Congruence Criteria",
  goal: "I CAN identify and apply SSS, SAS, ASA, AAS and HL to prove triangles congruent.",
  standards: ["G-CO.7", "G-CO.8"],
  vocabulary: [
    { term: "Congruent", definition: "Same size and shape; all corresponding sides and angles equal." },
    { term: "SSS", definition: "Three pairs of equal sides prove congruence." },
    { term: "SAS", definition: "Two sides and the included angle equal prove congruence." },
    { term: "ASA / AAS", definition: "Two angles and a side equal prove congruence (AAS uses a non-included side)." },
    { term: "HL", definition: "Right triangles with equal hypotenuse and one leg are congruent." },
  ],
  concepts: [
    {
      id: "m10-u1-triangle-congruence",
      title: "Congruence criteria",
      skill: "Match given information to the correct congruence postulate.",
      lesson: {
        sections: [
          {
            heading: "The five criteria",
            body: "Triangles are congruent if **SSS** (three sides), **SAS** (two sides and the *included* angle), **ASA** (two angles and the included side), **AAS** (two angles and a non-included side), or **HL** (right triangles: hypotenuse and leg) match. SSA is **not** a valid criterion — it can produce two different triangles.",
          },
          {
            heading: "Included vs non-included",
            body: "In SAS the angle must be *between* the two sides; in ASA the side must be *between* the two angles. If the given parts don't match a criterion, the triangles may still be congruent by a two-step proof using vertical angles or a shared side.",
          },
        ],
        keyFormulas: [
          { name: "Valid criteria", statement: "SSS, SAS, ASA, AAS, HL — never SSA" },
          { name: "CPCTC", statement: "Congruent triangles have Corresponding Parts Congruent" },
        ],
        workedExample: {
          problem: "Triangles $ABC$ and $DEF$ have $AB = DE$, $BC = EF$, and $\\angle B = \\angle E$. Are they congruent?",
          solution: "Yes — two sides and the included angle ($\\angle B$ is between $AB$ and $BC$) satisfy SAS.",
        },
      },
      questions: [
        {
          id: "m10-u1-triangle-congruence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which criterion requires the angle to be *between* the two sides?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "SSS"
                    },
                    {
                              "id": "b",
                              "text": "SAS"
                    },
                    {
                              "id": "c",
                              "text": "ASA"
                    },
                    {
                              "id": "d",
                              "text": "HL"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SAS",
                              "statement": "Two sides and the included angle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SAS requires the angle included between the two given sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** SAS",
          "commonErrors": [
                    "Confusing SAS with SSA, which is invalid."
          ]
},
        },
        {
          id: "m10-u1-triangle-congruence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Right triangles $PQR$ and $STU$ have hypotenuses $PR = SU$ and legs $QR = TU$. Which criterion proves them congruent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "SAS"
                    },
                    {
                              "id": "b",
                              "text": "ASA"
                    },
                    {
                              "id": "c",
                              "text": "HL"
                    },
                    {
                              "id": "d",
                              "text": "SSS"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HL",
                              "statement": "Right triangles: hypotenuse and one leg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equal hypotenuses and one equal leg in right triangles is exactly HL.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct criterion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** HL",
          "commonErrors": [
                    "Reaching for SSS when only two sides are known."
          ]
},
        },
        {
          id: "m10-u1-triangle-congruence-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In triangles $ABC$ and $XYZ$: $AB = XY$, $\\angle A = \\angle X$, $\\angle C = \\angle Z$. Name the congruence criterion that applies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AAS",
                              "statement": "Two angles and a non-included side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two angles ($A$, $C$) plus side $AB$ — the side is not between them, so AAS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct criterion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "AAS",
          "commonErrors": [
                    "Calling it ASA because the side is present — check whether it is included."
          ]
},
        },
        {
          id: "m10-u1-triangle-congruence-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Segments $AC$ and $BD$ bisect each other at $E$. Prove that $\\triangle AEB \\cong \\triangle CED$ and state what CPCTC lets you conclude about $AB$ and $CD$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "given",
                              "name": "Bisecting segments",
                              "statement": "$AE = CE$ and $BE = DE$ by definition of bisect."
                    },
                    {
                              "kind": "theorem",
                              "name": "Vertical angles",
                              "statement": "$\\angle AEB = \\angle CED$."
                    },
                    {
                              "kind": "method",
                              "name": "SAS + CPCTC",
                              "statement": "Two sides and included angle, then corresponding parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$AE = CE$ and $BE = DE$ (bisected), and $\\angle AEB = \\angle CED$ (vertical angles).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "SAS proves $\\triangle AEB \\cong \\triangle CED$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "CPCTC gives $AB = CD$ and $\\angle EAB = \\angle ECD$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\triangle AEB \\cong \\triangle CED$ by SAS; $AB = CD$ by CPCTC",
          "commonErrors": [
                    "Claiming congruence without citing the vertical angles."
          ]
},
        },
      ],
    },
  ],
};
