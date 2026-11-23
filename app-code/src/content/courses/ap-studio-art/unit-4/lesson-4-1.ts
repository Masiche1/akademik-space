import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "apsa-u4-lesson-4-1",
  code: "4-1",
  title: "3D Design Principles",
  goal: "I CAN apply 3D design principles: form, space, structure, and materiality.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Form", definition: "3D shape — geometric vs. organic; positive form vs. negative space." },
    { term: "Space", definition: "Volume occupied vs. void — how form relates to surrounding space." },
    { term: "Structure", definition: "How form is supported — armature, carving, construction." },
    { term: "Materiality", definition: "Physical properties of materials — weight, texture, durability, meaning." },
    { term: "Scale", definition: "Size relative to human body/environment — intimate vs. monumental." },
    { term: "Site-specific", definition: "Work designed for particular location — integrates with environment." },
  ],
  concepts: [
    {
      id: "apsa-u4-3d-design-principles",
      title: "3D design fundamentals",
      skill: "Apply 3D design principles for sculpture and objects.",
      lesson: {
        sections: [
          {
            heading: "3D elements",
            body: "Form (shape/volume), space (positive/negative), structure (support), materiality (physical properties) — sculpture adds dimension beyond 2D.",
          },
          {
            heading: "3D principles",
            body: "Balance (physical stability), scale (size relationships), emphasis (focal point in 3D), unity (coherence across views), rhythm (repeated forms).",
          },
        ],
        keyFormulas: [
          { name: "3D elements", statement: "Form / Space / Structure / Materiality / Scale / Site" },
          { name: "3D challenges", statement: "Physical stability / Multiple viewpoints / Material constraints" },
        ],
        workedExample: {
          problem: "Design a sculpture for outdoor site",
          solution: "Consider: scale (monumental vs. intimate), material (weather-resistant), structure (stable in wind), site (integrates with landscape), viewpoints (visible from multiple angles).",
        },
      },
      questions: [
        {
          id: "apsa-u4-3d-design-principles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Negative space in sculpture refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "material removed"
                    },
                    {
                              "id": "b",
                              "text": "void/empty space around and within form"
                    },
                    {
                              "id": "c",
                              "text": "dark areas"
                    },
                    {
                              "id": "d",
                              "text": "invisible parts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative space",
                              "statement": "Void around/between form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative space is void around/between forms — defines shape as much as positive form; Henry Moore's reclining figures use negative space as actively as solid form.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Void around form",
          "commonErrors": [
                    "Confusing with material absence only."
          ]
},
        },
        {
          id: "apsa-u4-3d-design-principles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Site-specific sculpture differs from portable because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is smaller"
                    },
                    {
                              "id": "b",
                              "text": "is designed for and integrates with particular location"
                    },
                    {
                              "id": "c",
                              "text": "uses cheaper materials"
                    },
                    {
                              "id": "d",
                              "text": "is temporary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Site-specific",
                              "statement": "Location-integrated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Site-specific sculpture designed for particular location — responds to architecture, landscape, history; often can't be moved without losing meaning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: Richard Serra's 'Tilted Arc' (controversial removal), Christo's wrapped buildings — site IS meaning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Designed for specific location",
          "commonErrors": [
                    "Thinking it's just 'big sculpture' — it's location-integrated."
          ]
},
        },
        {
          id: "apsa-u4-3d-design-principles-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If sculpture weighs 50 kg and armature supports 40%, how many kg does armature support? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Kg",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$50 \\times 0.4 = 20$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$50 \\times 0.4 = 20$ kg supported.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $20$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Math errors."
          ]
},
        },
        {
          id: "apsa-u4-3d-design-principles-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how materiality affects meaning in sculpture. Why does material choice matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Materiality",
                              "statement": "Material = meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Material carries meaning — marble = permanence/classical, bronze = monumentality, wood = organic/warmth, steel = industrial/modern, found objects = cultural references.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Material properties affect expression — weight (light vs. heavy), texture (smooth vs. rough), durability (permanent vs. ephemeral); material IS part of message.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Material choice reveals concept — Eva Hesse's latex (fragile, organic) vs. Richard Serra's steel (industrial, massive) express different ideas through material.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Material = meaning; properties affect expression",
          "commonErrors": [
                    "Thinking material is neutral — it communicates."
          ]
},
        },
        {
          id: "apsa-u4-3d-design-principles-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the challenges unique to 3D art vs. 2D. What must sculptors consider that painters don't?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "3D challenges",
                              "statement": "Physical existence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Physical stability: sculpture must stand — gravity, balance, structure; can't just 'look right' on flat surface; engineering considerations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Multiple viewpoints: viewers walk around — must work from all angles; unlike painting (single viewpoint); composition is 3D not 2D.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Material constraints: physical materials have properties — weight, cost, durability; carving subtracts, constructing adds; process is physical not just visual.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: 3D art has physical challenges 2D lacks — stability, multi-viewpoint composition, material constraints; sculpture exists in real space affecting viewers physically.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3D adds physical challenges: stability, viewpoints, materials",
          "commonErrors": [
                    "Applying 2D thinking — 3D is fundamentally different."
          ]
},
        },
      ],
    },
  ],
};
