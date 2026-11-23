import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "apbio-u3-lesson-3-4",
  code: "3-4",
  title: "The Immune System",
  goal: "I CAN distinguish innate and adaptive immunity and explain antibody response.",
  standards: ["IMM-1"],
  vocabulary: [
    { term: "Innate immunity", definition: "Nonspecific first-line defenses: barriers, phagocytes, inflammation, fever." },
    { term: "Adaptive immunity", definition: "Specific, memory-forming response: B cells (antibodies) and T cells (cell-mediated)." },
    { term: "Antigen", definition: "Any molecule recognized as foreign by the immune system." },
    { term: "Antibody", definition: "Y-shaped protein that binds specific antigens — produced by plasma B cells." },
    { term: "Memory cell", definition: "Long-lived immune cell enabling faster secondary response." },
    { term: "Vaccination", definition: "Controlled exposure to antigen generating memory without disease." },
  ],
  concepts: [
    {
      id: "apbio-u3-immune-system",
      title: "Immune defense",
      skill: "Compare immune branches and explain immunological memory.",
      lesson: {
        sections: [
          {
            heading: "Two branches",
            body: "**Innate immunity** is immediate and nonspecific: skin/mucosa barriers, phagocytes (neutrophils, macrophages), natural killer cells, inflammation, fever. **Adaptive immunity** is slower but specific: B cells produce antibodies against particular antigens; helper T cells coordinate; cytotoxic T cells kill infected/cancerous cells.",
          },
          {
            heading: "Memory and vaccination",
            body: "First exposure produces a primary response (slow, IgM then IgG). **Memory B and T cells** persist; on re-exposure the **secondary response** is faster and stronger (mostly IgG). Vaccines exploit this — presenting antigen without disease so memory forms. Autoimmune disease = self-attack; allergies = overreaction to harmless antigens.",
          },
        ],
        keyFormulas: [
          { name: "Secondary response", statement: "Faster and stronger than primary due to memory cells" },
          { name: "Antibody types", statement: "IgM (first responder), IgG (memory/main), IgA (mucosa), IgE (allergies)" },
        ],
        workedExample: {
          problem: "Why does a second infection with the same pathogen cause milder symptoms?",
          solution: "Memory B/T cells from the first exposure mount a faster, stronger secondary response — more antibody produced sooner, pathogens cleared before symptoms develop.",
        },
      },
      questions: [
        {
          id: "apbio-u3-immune-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antibodies are produced by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "T cells"
                    },
                    {
                              "id": "b",
                              "text": "B cells (plasma cells)"
                    },
                    {
                              "id": "c",
                              "text": "red blood cells"
                    },
                    {
                              "id": "d",
                              "text": "platelets"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plasma B cells",
                              "statement": "Differentiated B cells secreting antibodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B cells differentiate into plasma cells that secrete antigen-specific antibodies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Plasma B cells",
          "commonErrors": [
                    "Attributing antibody production to T cells (they help coordinate, don't secrete antibodies)."
          ]
},
        },
        {
          id: "apbio-u3-immune-system-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Skin and stomach acid are examples of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adaptive immunity"
                    },
                    {
                              "id": "b",
                              "text": "innate immunity barriers"
                    },
                    {
                              "id": "c",
                              "text": "antibody response"
                    },
                    {
                              "id": "d",
                              "text": "memory cells"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Innate defenses",
                              "statement": "Physical/chemical barriers act first, nonspecifically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Barriers like skin, mucus, and stomach acid are nonspecific innate defenses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Innate immunity",
          "commonErrors": [
                    "Classifying barriers as adaptive — they aren't specific or memory-forming."
          ]
},
        },
        {
          id: "apbio-u3-immune-system-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A vaccine contains a weakened pathogen. What does it primarily generate? Enter 1 for 'antibodies directly', 2 for 'memory cells', 3 for 'antigens only'.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Result",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Vaccination",
                              "statement": "Controlled antigen exposure builds immunological memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vaccines stimulate B/T cell activation producing antibodies AND long-lived memory cells — best answer is memory cells (2).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$ (memory cells)",
          "commonErrors": [
                    "Thinking vaccines provide antibodies directly like a serum."
          ]
},
        },
        {
          id: "apbio-u3-immune-system-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between the primary and secondary immune responses, and explain how vaccines exploit this.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Primary",
                              "statement": "First exposure: slow, IgM-heavy, lower antibody levels."
                    },
                    {
                              "kind": "comparison",
                              "name": "Secondary",
                              "statement": "Re-exposure: fast, IgG-heavy, higher levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary response: takes days, IgM then IgG, moderate antibody production — symptoms may occur.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secondary: memory cells enable rapid, massive IgG response — pathogens cleared before illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vaccines present harmless antigen so the body builds memory cells — real infection later triggers fast secondary response.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Memory cells enable faster/stronger secondary response; vaccines pre-build it",
          "commonErrors": [
                    "Saying vaccines inject ready-made antibodies."
          ]
},
        },
      ],
    },
  ],
};
