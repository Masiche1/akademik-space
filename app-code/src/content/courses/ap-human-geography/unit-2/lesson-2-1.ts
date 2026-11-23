import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "aphg-u2-lesson-2-1",
  code: "2-1",
  title: "Cultural Diffusion",
  goal: "I CAN explain how cultures spread and interact.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Cultural diffusion", definition: "Spread of cultural traits (ideas, practices, technologies) between groups." },
    { term: "Relocation diffusion", definition: "Spread through physical movement of people carrying culture." },
    { term: "Hierarchical diffusion", definition: "Spread from major centers to surrounding areas (core to periphery)." },
    { term: "Contagious diffusion", definition: "Rapid spread through direct contact like disease." },
    { term: "Stimulus diffusion", definition: "Spread of underlying idea without the specific trait (e.g., fast food concept without exact menu)." },
    { term: "Acculturation", definition: "Cultural change resulting from contact between groups — adoption of traits from another culture." },
  ],
  concepts: [
    {
      id: "aphg-u2-cultural-diffusion",
      title: "How culture spreads",
      skill: "Distinguish diffusion types and explain cultural exchange.",
      lesson: {
        sections: [
          {
            heading: "Diffusion types",
            body: "Relocation: people carry culture (immigration). Hierarchical: major cities spread to smaller (fashion trends). Contagious: rapid spread like disease (viral trends). Stimulus: idea spreads without specific form (fast food concept).",
          },
          {
            heading: "Cultural interaction",
            body: "Acculturation (adopting traits), assimilation (full adoption), amalgamation (blending), cultural landscape reflects these processes.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion types", statement: "Relocation / Hierarchical / Contagious / Stimulus" },
          { name: "Cultural interaction", statement: "Acculturation / Assimilation / Amalgamation / Multiculturalism" },
        ],
        workedExample: {
          problem: "How did hip-hop spread globally?",
          solution: "Relocation diffusion: hip-hop originated in Bronx (1970s), spread via migration, media, and artists; hierarchical diffusion: from major cities (NY, LA) to smaller markets; contagious diffusion: viral spread through social media and music.",
        },
      },
      questions: [
        {
          id: "aphg-u2-cultural-diffusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hierarchical diffusion occurs when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "people carry culture through migration"
                    },
                    {
                              "id": "b",
                              "text": "culture spreads from major centers to smaller ones"
                    },
                    {
                              "id": "c",
                              "text": "ideas spread like disease"
                    },
                    {
                              "id": "d",
                              "text": "concepts spread without form"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hierarchical diffusion",
                              "statement": "Core to periphery spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchical diffusion spreads from major urban centers to smaller areas — fashion trends start in big cities then diffuse outward.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Major centers to smaller",
          "commonErrors": [
                    "Confusing with relocation (people moving)."
          ]
},
        },
        {
          id: "aphg-u2-cultural-diffusion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Stimulus diffusion differs from other diffusion because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spreads faster"
                    },
                    {
                              "id": "b",
                              "text": "spreads the idea without the specific trait"
                    },
                    {
                              "id": "c",
                              "text": "only happens through migration"
                    },
                    {
                              "id": "d",
                              "text": "is always positive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stimulus diffusion",
                              "statement": "Idea spreads without form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stimulus diffusion transmits the underlying concept without the specific trait — e.g., fast food spread globally but menus adapt to local tastes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's about the 'idea' not the 'thing.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Idea without specific form",
          "commonErrors": [
                    "Confusing with contagious (full trait spread)."
          ]
},
        },
        {
          id: "aphg-u2-cultural-diffusion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a cultural trait spreads from New York City to 50 smaller cities, then to 500 towns, this demonstrates which diffusion type? Enter 1 for hierarchical, 2 for contagious.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Type",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pattern recognition",
                              "statement": "Major center → smaller = hierarchical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spread from major city to smaller cities/towns is hierarchical diffusion — core to periphery pattern.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$ (hierarchical).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Confusing with contagious (rapid all directions)."
          ]
},
        },
        {
          id: "aphg-u2-cultural-diffusion-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare relocation and contagious diffusion, with examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Diffusion types",
                              "statement": "People-carried vs. contact-spread."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparison",
                              "statement": "Distinguish mechanisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relocation diffusion: culture carried by migrating people — immigrants bring food, language, religion to new lands; e.g., Italian cuisine to America via Italian immigrants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Contagious diffusion: rapid spread through direct contact — viral trends, diseases, memes spread person-to-person; e.g., COVID-19 spread contagiously.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: relocation requires physical movement; contagious spreads through contact without migration.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Relocation = people move; Contagious = contact spread",
          "commonErrors": [
                    "Conflating the two — different mechanisms."
          ]
},
        },
        {
          id: "aphg-u2-cultural-diffusion-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how cultural diffusion can lead to both cultural enrichment and cultural loss. Provide examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Diffusion's double edge",
                              "statement": "Exchange vs. erosion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enrichment: fusion cuisines, multilingualism, hybrid music (reggaeton = reggae + hip-hop); cultural exchange creates new forms richer than originals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Loss: dominant cultures overwhelm minority traditions — indigenous languages die, local crafts disappear; 'cultural imperialism' via media homogenizes global culture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: English dominates internet (90%+ of web content); French language declining globally; yet creole languages and fusion cultures emerge as resistance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: diffusion enriches through exchange but can erase diversity — outcome depends on power dynamics and local resilience.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Diffusion enriches and erodes — depends on power dynamics",
          "commonErrors": [
                    "One-sided — diffusion has both effects."
          ]
},
        },
      ],
    },
  ],
};
