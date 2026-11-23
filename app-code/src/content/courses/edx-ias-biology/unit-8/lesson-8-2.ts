import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ediasbio-u8-lesson-8-2",
  code: "8-2",
  title: "The Immune Response",
  goal: "I CAN describe barriers, phagocytes and the specific immune response including antibodies and memory cells.",
  standards: ["WBI11 Health and disease", "Immune response"],
  
  vocabulary: [
    { term: "Immune system", definition: "Body's defence system against pathogens." },
    { term: "Phagocyte", definition: "White blood cell that engulfs and digests pathogens." },
    { term: "Lymphocyte", definition: "White blood cell of specific immunity — B cells and T cells." },
    { term: "Antibody", definition: "Y-shaped protein produced by plasma cells that binds specific antigens." },
    { term: "Antigen", definition: "Foreign molecule (e.g. on pathogen surface) recognised by the immune system." },
    { term: "Memory cell", definition: "Long-lived lymphocyte enabling faster secondary immune response." },
    { term: "Active immunity", definition: "Immunity from own immune response after infection or vaccination." },
    { term: "Passive immunity", definition: "Short-term immunity from antibodies received from another source." },
  ],
  concepts: [
    {
      id: "ediasbio-u8-barrier",
      title: "Barriers and phagocytes",
      skill: "Describe nonspecific defences and the role of phagocytes.",
      lesson: {
        sections: [
          {
            heading: "First line of defence — barriers",
            body: "Physical and chemical barriers keep pathogens out: **skin** (physical barrier, slightly acidic), **mucous membranes** trap pathogens (mucus + cilia sweep them out of airways), **stomach acid** kills ingested microbes, **lysozyme** enzyme in tears/saliva destroys bacterial cell walls, **ear wax** traps particles.",
          },
          {
            heading: "Second line — phagocytosis",
            body: "If barriers are breached, **phagocytes** (neutrophils and macrophages) engulf pathogens by **phagocytosis**: the cell membrane engulfs the pathogen into a phagosome, which fuses with lysosomes containing digestive enzymes; the pathogen is digested and residual waste expelled. Macrophages also present antigens to lymphocytes.",
          },
          {
            heading: "Inflammation and fever",
            body: "Injury or infection triggers **inflammation**: blood vessels dilate (redness, heat, swelling) and become more permeable so phagocytes reach the site; histamine mediates the response. **Fever** raises body temperature, which speeds immune reactions but can damage cells if extreme.",
          },
        ],
        keyFormulas: [
          { name: "Barriers", statement: "Skin, mucus/cilia, stomach acid, lysozyme" },
          { name: "Phagocytosis", statement: "Engulf → phagosome → lysosome digestion" },
          { name: "Inflammation", statement: "Vasodilation + permeability → phagocyte recruitment" },
        ],
        workedExample: {
          problem: "A splinter introduces bacteria under the skin. Describe the immediate immune response.",
          solution: "Skin barrier is breached → inflammation: vessels dilate and become permeable, phagocytes migrate to the site and engulf bacteria by phagocytosis; macrophages present antigens to activate lymphocytes for a specific response if needed.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-barrier-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme in tears and saliva destroys bacterial cell walls?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Amylase"
                    },
                    {
                              "id": "b",
                              "text": "Lysozyme"
                    },
                    {
                              "id": "c",
                              "text": "Pepsin"
                    },
                    {
                              "id": "d",
                              "text": "Lipase"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lysozyme",
                              "statement": "Antibacterial enzyme in secretions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lysozyme breaks down bacterial cell walls.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Lysozyme"
},
        },
        {
          id: "ediasbio-u8-barrier-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two physical or chemical barriers that prevent infection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Barriers",
                              "statement": "Skin, mucus, acid, lysozyme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: skin, mucous membranes, stomach acid, lysozyme, ear wax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second barrier named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. skin and stomach acid"
},
        },
        {
          id: "ediasbio-u8-barrier-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the process of phagocytosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Phagocytosis",
                              "statement": "Engulf and digest pathogens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phagocyte engulfs pathogen — membrane forms phagosome.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phagosome fuses with lysosome containing digestive enzymes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pathogen is digested into harmless products.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Waste products are expelled; pathogens destroyed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Engulf → phagosome → lysosome digestion"
},
        },
        {
          id: "ediasbio-u8-barrier-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the role of inflammation in fighting infection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inflammation",
                              "statement": "Vascular response recruits phagocytes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Damaged/infected tissue releases histamine and other signals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blood vessels dilate — increased blood flow (redness, heat).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vessels become more permeable — plasma leaks out causing swelling.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Phagocytes migrate through vessel walls to the infection site.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Concentrates immune cells where needed; may cause pain.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Inflammation delivers phagocytes to infection site"
},
        },
        {
          id: "ediasbio-u8-barrier-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three barrier defences.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define phagocytosis.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the role of fever in defence.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Nonspecific immunity",
                              "statement": "Barriers, phagocytes, fever."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Skin, mucus/cilia, stomach acid, lysozyme (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Three named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phagocyte engulfs and digests pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phagosome + lysosome detail.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Raises temperature, speeding immune reactions and inhibiting pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "But extreme fever damages host cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Barriers, phagocytosis, fever"
},
        },
        {
          id: "ediasbio-u8-barrier-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Name four barrier defences. (b) What does lysozyme do? (c) What do cilia do in airways? (d) Define phagocyte. (e) Name two types of phagocyte. (f) Define phagocytosis. (g) What organelle digests the pathogen? (h) What is inflammation? (why does it occur) (i) What is fever? (j) Give one benefit of fever.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Four barrier defences.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Lysozyme function.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Role of cilia.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define phagocyte.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Two phagocyte types.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define phagocytosis.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Digesting organelle.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "What/why inflammation.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Define fever.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Benefit of fever.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nonspecific immunity",
                              "statement": "Barriers, phagocytes, inflammation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Skin, mucus, stomach acid, lysozyme (any four).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Four named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Destroys bacterial cell walls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sweep mucus and trapped pathogens out of airways.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "White blood cell engulfing/digesting pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Neutrophils and macrophages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Engulfing and digesting pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Lysosome.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Vascular response (vasodilation, permeability) to recruit phagocytes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Raised body temperature during infection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Speeds immune reactions/inhibits pathogen growth.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Nonspecific defences: barriers, phagocytes, inflammation, fever",
          "commonErrors": [
                    "Calling phagocytosis part of specific immunity — it is nonspecific."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u8-spec",
      title: "Specific immunity: antibodies and lymphocytes",
      skill: "Describe B and T lymphocytes, antibodies, memory cells and active/passive immunity.",
      lesson: {
        sections: [
          {
            heading: "Lymphocytes and antibodies",
            body: "**B lymphocytes** mature into **plasma cells** that secrete **antibodies** — Y-shaped proteins each specific to one **antigen**. Antibodies bind antigens to: agglutinate pathogens, opsonise (coat them for phagocytes), neutralise toxins, and mark cells for destruction. **T lymphocytes** include helper T cells (coordinate the response) and cytotoxic T cells (destroy infected host cells).",
          },
          {
            heading: "Memory cells and secondary response",
            body: "After an infection some lymphocytes become long-lived **memory cells**. On re-exposure to the same antigen, memory cells trigger a much faster, stronger **secondary response** — often eliminating the pathogen before symptoms appear. This is the basis of immunity after infection or vaccination.",
          },
          {
            heading: "Active and passive immunity",
            body: "**Active immunity**: the body makes its own antibodies — after natural infection or vaccination; long-lasting due to memory cells. **Passive immunity**: ready-made antibodies are received — e.g. antibodies in breast milk (colostrum), antivenom, antibody injections; short-term because no memory cells are made. Babies get temporary passive immunity from the mother.",
          },
        ],
        keyFormulas: [
          { name: "B cells", statement: "→ plasma cells → antibodies specific to one antigen" },
          { name: "T cells", statement: "Helper coordinate; cytotoxic destroy infected cells" },
          { name: "Active vs passive", statement: "Own antibodies + memory vs received antibodies, short-term" },
        ],
        workedExample: {
          problem: "Why does a person who has had measles rarely catch it again?",
          solution: "The first infection generated memory cells. On re-exposure the secondary immune response is faster and stronger — antibodies are produced in large amounts quickly, neutralising the virus before it causes disease.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-spec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cells produce antibodies?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Phagocytes"
                    },
                    {
                              "id": "b",
                              "text": "Plasma cells"
                    },
                    {
                              "id": "c",
                              "text": "Red blood cells"
                    },
                    {
                              "id": "d",
                              "text": "Platelets"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plasma cells",
                              "statement": "Secrete antibodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plasma cells (from B lymphocytes) produce antibodies.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Plasma cells"
},
        },
        {
          id: "ediasbio-u8-spec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between active and passive immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active vs passive immunity",
                              "statement": "Own vs received antibodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active: body produces own antibodies (infection/vaccine), long-lasting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Passive: receives ready-made antibodies (breast milk, antivenom), short-term.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Active = own response; passive = received antibodies"
},
        },
        {
          id: "ediasbio-u8-spec-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how antibodies help destroy pathogens.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Antibody action",
                              "statement": "Bind specific antigens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antibodies bind specifically to antigens on the pathogen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They agglutinate pathogens into clumps for easier phagocytosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They neutralise toxins and mark cells for destruction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Opsonisation coats pathogens aiding phagocyte recognition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Antibodies bind antigens: agglutinate, neutralise, opsonise"
},
        },
        {
          id: "ediasbio-u8-spec-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the role of memory cells in immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Memory cells",
                              "statement": "Faster secondary response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Some lymphocytes become long-lived memory cells after infection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They 'remember' the specific antigen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "On re-exposure they trigger a faster, stronger secondary response.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Antibodies produced in larger quantities more quickly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Pathogen often eliminated before symptoms appear — basis of vaccination.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Memory cells → fast strong secondary response"
},
        },
        {
          id: "ediasbio-u8-spec-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish B lymphocytes from T lymphocytes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two ways antibodies destroy pathogens.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one example of passive immunity.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lymphocytes",
                              "statement": "B cells → antibodies; T cells → cell-mediated."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "B cells → plasma cells → antibodies; T cells coordinate/destroy infected cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both roles stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Agglutination and neutralisation of toxins (or opsonisation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second mechanism.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Antibodies in breast milk/colostrum or antivenom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Example explained as received antibodies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "B vs T cells; antibody actions; passive immunity example"
},
        },
        {
          id: "ediasbio-u8-spec-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Define antigen. (b) Define antibody. (c) Which cells produce antibodies? (d) Name two T cell types and roles. (e) What do memory cells do? (f) Define active immunity. (g) Define passive immunity. (h) Give one example of passive immunity. (i) Why is secondary response faster? (j) How do antibodies mark pathogens for phagocytes?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define antigen.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Define antibody.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Cells producing antibodies.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Two T cell types + roles.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Role of memory cells.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define active immunity.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define passive immunity.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Passive immunity example.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Why secondary response faster.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "How antibodies mark pathogens.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specific immunity",
                              "statement": "Antigens, antibodies, memory."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Foreign molecule recognised by immune system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Y-shaped protein binding specific antigens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Plasma cells (from B lymphocytes).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Helper T cells coordinate; cytotoxic T cells destroy infected cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both types with roles.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Long-lived cells enabling faster secondary response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Immunity from body's own response (infection/vaccine).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Immunity from received antibodies (breast milk, antivenom).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Colostrum/antivenom/antibody injection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Memory cells already present → immediate large antibody production.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "j",
                              "reasoning": "Opsonisation — coating pathogens for phagocyte recognition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Specific immunity: antibodies, lymphocytes, memory",
          "commonErrors": [
                    "Confusing active with passive immunity."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u8-spec-notes",
      title: "The immune response — notes",
      summary: "Barriers (skin, mucus, acid) + phagocytes give nonspecific defence; lymphocytes give specific defence via antibodies; memory cells → faster secondary response; active vs passive immunity.",
      sections: [
        { heading: "Nonspecific", body: "Skin/mucus/acid barriers; phagocytes engulf pathogens (phagocytosis); inflammation and fever recruit/aid defence." },
        { heading: "Specific", body: "B cells → plasma cells → antibodies (agglutinate, neutralise, opsonise); T cells coordinate and kill infected cells; memory cells → faster secondary response." },
        { heading: "Immunity types", body: "Active = own antibodies (infection/vaccine, long-lasting); passive = received antibodies (colostrum, antivenom, short-term)." },
      ],
    },
  ],
};
