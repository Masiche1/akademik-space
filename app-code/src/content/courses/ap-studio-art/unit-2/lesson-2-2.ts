import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apsa-u2-lesson-2-2",
  code: "2-2",
  title: "Portfolio Development",
  goal: "I CAN curate and present a cohesive portfolio for assessment.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Portfolio curation", definition: "Selecting strongest works showing range and depth — quality over quantity." },
    { term: "Artist statement", definition: "Written reflection explaining concept, process, intent — accompanies portfolio." },
    { term: "Documentation", definition: "Photographing work professionally — accurate color, scale reference." },
    { term: "Presentation order", definition: "Sequencing works for narrative flow — strongest work placement matters." },
    { term: "Rubric criteria", definition: "Investigation, execution, presentation — AP scoring dimensions." },
    { term: "Reflection", definition: "Critiquing own work honestly — identifying strengths and growth areas." },
  ],
  concepts: [
    {
      id: "apsa-u2-portfolio-development",
      title: "Curating your portfolio",
      skill: "Select, document, and present portfolio works effectively.",
      lesson: {
        sections: [
          {
            heading: "Selection",
            body: "Choose works showing: strongest execution, range of approaches, conceptual depth, technical growth — tell complete story.",
          },
          {
            heading: "Presentation",
            body: "Artist statement explains concept/process; documentation must be accurate (color, scale); order works for narrative flow — opening/closing impact.",
          },
        ],
        keyFormulas: [
          { name: "Portfolio components", statement: "12 sustained + 5 selected + artist statement + documentation" },
          { name: "Scoring dimensions", statement: "Investigation / Execution / Presentation" },
        ],
        workedExample: {
          problem: "Select 5 works from 12-work investigation",
          solution: "Choose works showing: strongest concept execution, technical variety, visual impact, development range — tell story of investigation's breadth and depth.",
        },
      },
      questions: [
        {
          id: "apsa-u2-portfolio-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The artist statement accompanies the portfolio to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "replace artwork"
                    },
                    {
                              "id": "b",
                              "text": "explain concept, process, and intent"
                    },
                    {
                              "id": "c",
                              "text": "list materials"
                    },
                    {
                              "id": "d",
                              "text": "justify poor work"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Artist statement",
                              "statement": "Explains concept + process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Artist statement explains concept, process, intent — helps assessors understand what artist was exploring and why; critical for evaluation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Explain concept + process",
          "commonErrors": [
                    "Thinking it's just description — it's interpretation."
          ]
},
        },
        {
          id: "apsa-u2-portfolio-development-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "AP Studio Art scoring evaluates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only technical skill"
                    },
                    {
                              "id": "b",
                              "text": "investigation, execution, and presentation"
                    },
                    {
                              "id": "c",
                              "text": "commercial viability"
                    },
                    {
                              "id": "d",
                              "text": "art historical knowledge"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Scoring criteria",
                              "statement": "Three dimensions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AP scoring evaluates: Investigation (conceptual depth), Execution (technical quality), Presentation (portfolio/statement quality) — holistic assessment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three matter — brilliant concept poorly executed scores lower than good execution of solid concept.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Investigation + execution + presentation",
          "commonErrors": [
                    "Focusing only on technique — all dimensions matter."
          ]
},
        },
        {
          id: "apsa-u2-portfolio-development-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If portfolio needs 12 sustained + 5 selected + 1 artist statement, total submission components? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Components",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add",
                              "statement": "$12 + 5 + 1 = 18$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$12 + 5 + 1 = 18$ components (though works may overlap between sections).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $18$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "18",
          "commonErrors": [
                    "Forgetting artist statement or miscounting."
          ]
},
        },
        {
          id: "apsa-u2-portfolio-development-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why portfolio curation matters. What makes a strong selection vs. just 'best' works?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Portfolio curation",
                              "statement": "Narrative selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Curation tells story — selected works should show range (different approaches/media), depth (conceptual exploration), growth (technical development), impact (visual strength).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "'Best' works might all be similar — strong selection shows investigation's breadth; include works that demonstrate process, not just polish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Order matters — strongest work first/last creates impact; flow between works creates narrative; curation is editorial decision.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Curation = narrative, not just best works",
          "commonErrors": [
                    "Selecting only 'best' — need range + story."
          ]
},
        },
        {
          id: "apsa-u2-portfolio-development-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how the artist statement affects portfolio evaluation. What should it accomplish?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Artist statement",
                              "statement": "Interpretive frame."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Artist statement frames interpretation — explains what artist was exploring, why, how process evolved; helps assessors understand intent behind visual choices.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Effective statement: articulates concept clearly, describes process honestly (including failures), reflects on growth — shows conceptual thinking, not just description.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weak statement: vague ('I like painting'), defensive, or merely describes technique — misses opportunity to demonstrate conceptual depth; statement reveals artist's thinking.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: artist statement is interpretive frame — determines how assessors read visual work; articulate concept + process = stronger evaluation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Statement frames interpretation — reveals conceptual thinking",
          "commonErrors": [
                    "Treating as afterthought — it's integral to evaluation."
          ]
},
        },
      ],
    },
  ],
};
