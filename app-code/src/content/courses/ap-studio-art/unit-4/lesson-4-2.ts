import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "apsa-u4-lesson-4-2",
  code: "4-2",
  title: "Sculpture Techniques",
  goal: "I CAN apply carving, modeling, and construction techniques.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Carving", definition: "Subtractive — removing material (stone, wood) to reveal form." },
    { term: "Modeling", definition: "Additive — building form (clay, wax) — can be cast later." },
    { term: "Construction", definition: "Assembling materials — welding, fastening, collaging." },
    { term: "Casting", definition: "Creating multiple copies from mold — bronze, plaster." },
    { term: "Assemblage", definition: "Combining found objects — readymade, collage 3D." },
    { term: "Installation", definition: "Environment-scale work — viewer enters/art interacts." },
  ],
  concepts: [
    {
      id: "apsa-u4-sculpture-techniques",
      title: "Sculpture processes",
      skill: "Apply carving, modeling, construction, and casting techniques.",
      lesson: {
        sections: [
          {
            heading: "Subtractive vs. additive",
            body: "Carving removes material (stone reveals figure); modeling adds material (clay builds form); different processes create different relationships to material.",
          },
          {
            heading: "Advanced techniques",
            body: "Casting (mold → multiple copies), construction (assemble parts), assemblage (found objects), installation (environment-scale) — expand beyond traditional sculpture.",
          },
        ],
        keyFormulas: [
          { name: "Carving", statement: "Subtractive — remove material" },
          { name: "Modeling", statement: "Additive — build material" },
          { name: "Casting", statement: "Mold → multiple copies" },
          { name: "Assemblage", statement: "Found objects combined" },
        ],
        workedExample: {
          problem: "Choose technique for 'fragile human figure'",
          solution: "Modeling in clay then casting in bronze — clay allows detailed form, bronze provides permanence/weight; or carving wood for organic warmth — technique follows concept.",
        },
      },
      questions: [
        {
          id: "apsa-u4-sculpture-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Carving is a ___. process.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "additive"
                    },
                    {
                              "id": "b",
                              "text": "subtractive"
                    },
                    {
                              "id": "c",
                              "text": "constructive"
                    },
                    {
                              "id": "d",
                              "text": "digital"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carving",
                              "statement": "Subtractive process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carving is subtractive — removing material to reveal form; Michelangelo 'freed' figures from marble blocks.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Subtractive",
          "commonErrors": [
                    "Confusing with modeling (additive)."
          ]
},
        },
        {
          id: "apsa-u4-sculpture-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Assemblage differs from traditional sculpture by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "using better materials"
                    },
                    {
                              "id": "b",
                              "text": "combining found objects rather than single material"
                    },
                    {
                              "id": "c",
                              "text": "being larger"
                    },
                    {
                              "id": "d",
                              "text": "being permanent"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Assemblage",
                              "statement": "Found objects combined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assemblage combines found objects — Picasso's bull head (bicycle seat + handlebars), Duchamp's readymades; challenges 'art' definition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It questions what counts as sculpture — everyday objects become art through context.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Found objects combined",
          "commonErrors": [
                    "Thinking it's just 'collage' — it's 3D found objects."
          ]
},
        },
        {
          id: "apsa-u4-sculpture-techniques-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If bronze casting creates 10 copies from one mold, how many total sculptures? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Copies",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Read",
                              "statement": "10 copies from mold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bronze casting creates multiple identical copies — 10 from one mold (edition size).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Confusing mold with copies."
          ]
},
        },
        {
          id: "apsa-u4-sculpture-techniques-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare carving and modeling. How does each process affect the artist's relationship to material?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Carving vs. modeling",
                              "statement": "Subtractive vs. additive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carving (subtractive): artist removes material — must visualize final form within block; destructive (can't un-remove); reveals form hidden in material.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Modeling (additive): artist builds material — can adjust, add, smooth; forgiving (can change); creates form from nothing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relationship to material differs: carving respects material's limits (must work within block); modeling imposes form on pliable material — different power dynamics.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Carving=subtractive/destructive; Modeling=additive/adjustable",
          "commonErrors": [
                    "Conflating processes — they create different relationships."
          ]
},
        },
        {
          id: "apsa-u4-sculpture-techniques-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how casting changed sculpture's relationship to originality. What does 'multiple originals' mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Casting and originality",
                              "statement": "Edition vs. unique."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traditional sculpture: unique original (one-of-a-kind); casting creates multiple 'originals' — identical copies from same mold; challenges uniqueness concept.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Edition concept: artist approves limited number (e.g., 10 casts) — each 'original' but part of edition; later casts less valuable; authenticity tied to artist's authorization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This parallels printmaking (limited editions) — originality becomes about artist's hand/intent not physical uniqueness; conceptual originality > material uniqueness.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: casting decouples originality from uniqueness — multiple authorized originals possible; value shifts from 'one of a kind' to 'artist-sanctioned edition.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Casting enables editions — originality = authorization not uniqueness",
          "commonErrors": [
                    "Thinking copies aren't original — editions are legitimate."
          ]
},
        },
      ],
    },
  ],
};
