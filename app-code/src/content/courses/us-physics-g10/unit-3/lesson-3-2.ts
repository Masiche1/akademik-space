import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "phys10-u3-lesson-3-2",
  code: "3-2",
  title: "Light and Optics",
  goal: "I CAN describe light behavior including reflection and refraction.",
  standards: ["HS-PS4-3"],
  vocabulary: [
    { term: "Reflection", definition: "Bouncing off surface." },
    { term: "Refraction", definition: "Bending through media." },
    { term: "Lens", definition: "Focuses light." },
    { term: "Mirror", definition: "Reflects light." },
    { term: "Index of refraction", definition: "Bending measure." },
  ],
  concepts: [
    {
      id: "phys10-u3-light-waves",
      title: "Light and optics",
      skill: "Describe reflection, refraction and lenses.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "Light reflects off surfaces (angle in = angle out). Refraction bends light passing between media — why a straw looks bent in water. The index of refraction measures bending.",
          },
          {
            heading: "Lenses and mirrors",
            body: "Convex lenses converge light (magnify), concave diverge. Mirrors reflect: plane mirrors give upright same-size images; concave can focus. The eye's lens focuses light on the retina.",
          },
        ],
        keyFormulas: [
          { name: "Reflection", statement: "Angle in = angle out." },
          { name: "Refraction", statement: "Bends at boundary." },
          { name: "Convex lens", statement: "Converges." },
        ],
        workedExample: {
          problem: "Why does a pencil look bent when placed in a glass of water?",
          solution: "Light from the pencil refracts (bends) passing from water to air, making the pencil appear displaced.",
        },
      },
      questions: [
        {
          id: "phys10-u3-light-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Refraction is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light bouncing"
                    },
                    {
                              "id": "b",
                              "text": "light bending through media"
                    },
                    {
                              "id": "c",
                              "text": "light being absorbed"
                    },
                    {
                              "id": "d",
                              "text": "light splitting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Refraction",
                              "statement": "Bending at media boundary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Refraction is the bending of light when passing between media.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** light bending through media",
          "commonErrors": [
                    "Confusing with reflection."
          ]
},
        },
        {
          id: "phys10-u3-light-waves-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A convex lens ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "diverges light"
                    },
                    {
                              "id": "b",
                              "text": "converges light"
                    },
                    {
                              "id": "c",
                              "text": "absorbs light"
                    },
                    {
                              "id": "d",
                              "text": "reflects only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Convex lens",
                              "statement": "Converges light rays."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convex lenses converge parallel rays to a focal point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** converges light",
          "commonErrors": [
                    "Confusing with concave."
          ]
},
        },
        {
          id: "phys10-u3-light-waves-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light reflects at 30° from the normal. What angle does it leave at?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Angle",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reflection",
                              "statement": "Angle in = angle out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$30^\\circ$ — reflection angle equals incidence angle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$30^\\circ$",
          "commonErrors": [
                    "Using the complement angle."
          ]
},
        },
        {
          id: "phys10-u3-light-waves-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a straw appears bent in a glass of water using refraction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Refraction",
                              "statement": "Bends at air-water boundary."
                    },
                    {
                              "kind": "skill",
                              "name": "Explain",
                              "statement": "Apparent displacement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light from the submerged part of the straw travels from water into air, bending away from the normal. The brain traces the light straight, so the straw appears bent at the water line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains bending direction and apparent position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Refraction bends light; brain misjudges position.**",
          "commonErrors": [
                    "Saying the straw physically bends."
          ]
},
        },
      ],
    },
  ],
};
