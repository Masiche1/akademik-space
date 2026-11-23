import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ediasbio-u8-lesson-8-1",
  code: "8-1",
  title: "Pathogens, Transmission and Antibiotics",
  goal: "I CAN describe pathogens and diseases, routes of transmission and the use and limits of antibiotics.",
  standards: ["WBI11 Health and disease", "Pathogens and transmission"],
  
  vocabulary: [
    { term: "Pathogen", definition: "Microorganism that causes disease, e.g. bacterium, virus, fungus, protozoan." },
    { term: "Communicable disease", definition: "Disease that can spread from person to person or via vectors." },
    { term: "Non-communicable disease", definition: "Disease not spread between people, e.g. cancer, CHD, diabetes." },
    { term: "Vector", definition: "Organism that carries and transmits pathogens, e.g. mosquito." },
    { term: "Toxin", definition: "Poison produced by a pathogen that damages host tissues." },
    { term: "Antibiotic", definition: "Substance that kills or inhibits the growth of bacteria." },
    { term: "Antibiotic resistance", definition: "Ability of bacteria to survive antibiotics due to genetic change." },
    { term: "MRSA", definition: "Methicillin-resistant Staphylococcus aureus — antibiotic-resistant bacterium." },
  ],
  concepts: [
    {
      id: "ediasbio-u8-path",
      title: "Pathogens and types of disease",
      skill: "Identify pathogen types, examples of disease and distinguish communicable from non-communicable disease.",
      lesson: {
        sections: [
          {
            heading: "Types of pathogen",
            body: "**Bacteria** are single-celled prokaryotes — e.g. *Mycobacterium tuberculosis* (TB), *Vibrio cholerae* (cholera). **Viruses** are non-living particles needing host cells — e.g. influenza, HIV, measles. **Fungi** — e.g. athlete's foot, ringworm. **Protozoa** — single-celled eukaryotes, e.g. *Plasmodium* causing malaria.",
          },
          {
            heading: "How pathogens cause disease",
            body: "Pathogens damage the body by destroying cells directly, releasing **toxins** (e.g. cholera toxin causes severe diarrhoea and dehydration), or triggering damaging immune responses. Malaria parasites destroy red blood cells and liver cells. The severity depends on pathogen load, virulence and the host's immune response.",
          },
          {
            heading: "Communicable vs non-communicable",
            body: "**Communicable** diseases spread between hosts — TB, cholera, influenza, malaria, HIV/AIDS. **Non-communicable** diseases are not transmitted — coronary heart disease, cancer, type 2 diabetes, asthma; many are linked to lifestyle (diet, smoking, inactivity) or genetic factors. Some diseases (e.g. some cancers) have both infectious and lifestyle causes.",
          },
        ],
        keyFormulas: [
          { name: "Pathogen types", statement: "Bacteria, viruses, fungi, protozoa" },
          { name: "Disease mechanisms", statement: "Cell destruction, toxins, immune damage" },
          { name: "Communicable", statement: "Spreads between hosts/vectors; non-communicable does not" },
        ],
        workedExample: {
          problem: "A patient has severe watery diarrhoea after drinking contaminated water. Identify the likely pathogen type and explain the main danger.",
          solution: "Cholera is caused by the bacterium Vibrio cholerae, which produces a toxin that makes intestinal cells secrete huge amounts of water — causing rapid dehydration and electrolyte loss, which can be fatal without rehydration treatment.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-path-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a protozoan pathogen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Influenza virus"
                    },
                    {
                              "id": "b",
                              "text": "Plasmodium (malaria)"
                    },
                    {
                              "id": "c",
                              "text": "Penicillium mould"
                    },
                    {
                              "id": "d",
                              "text": "Tuberculosis bacterium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathogen types",
                              "statement": "Bacteria, viruses, fungi, protozoa."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plasmodium is a protozoan causing malaria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Plasmodium (malaria)"
},
        },
        {
          id: "ediasbio-u8-path-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between a communicable and a non-communicable disease, with one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Communicable disease",
                              "statement": "Spreads vs not spreads."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Communicable spreads between people/vectors, e.g. TB or malaria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Non-communicable does not spread, e.g. CHD or cancer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communicable spreads (TB); non-communicable doesn't (CHD)"
},
        },
        {
          id: "ediasbio-u8-path-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how pathogens cause disease in the body.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Pathogenesis",
                              "statement": "Damage by toxins and cell destruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pathogens can destroy host cells directly (e.g. viruses, malaria parasites).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many release toxins damaging tissues (e.g. cholera toxin).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Immune responses to infection can also damage tissues.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Result: symptoms such as fever, diarrhoea, tissue damage or organ failure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Toxins, cell destruction and immune damage cause symptoms"
},
        },
        {
          id: "ediasbio-u8-path-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare bacteria and viruses as pathogens.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Bacteria vs viruses",
                              "statement": "Cellular vs non-living particles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bacteria are single-celled prokaryotic organisms; viruses are non-living particles of genetic material in a protein coat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bacteria can be killed by antibiotics; viruses cannot.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Viruses must enter host cells to replicate; bacteria replicate independently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: TB/cholera (bacteria); influenza/HIV (viruses).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both cause communicable disease but need different treatments.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Bacteria = living cells; viruses = non-living, need host cells"
},
        },
        {
          id: "ediasbio-u8-path-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four types of pathogen.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give one disease caused by each of two pathogen types.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two ways pathogens damage the body.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pathogens",
                              "statement": "Types, examples, damage."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bacteria, viruses, fungi, protozoa.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All four named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any valid pair: TB/cholera/typhoid (bacteria), influenza/HIV (viruses), athlete's foot (fungi), malaria (protozoa).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second valid pair.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Releasing toxins and destroying cells directly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second mechanism: triggering damaging immune responses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pathogen types, examples, damage mechanisms"
},
        },
        {
          id: "ediasbio-u8-path-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "(a) Define pathogen. (b) Name the four pathogen types. (c) Give one example of each type. (d) What is a toxin? (e) Name one toxin-producing disease. (f) Distinguish communicable from non-communicable disease. (g) Give one example of each. (h) How does malaria spread? (i) What cells does Plasmodium damage? (j) Why are non-communicable diseases often called lifestyle diseases?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define pathogen.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Four pathogen types.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Example of each.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Define toxin.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Toxin disease example.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Communicable vs non-communicable.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "One example of each.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "How malaria spreads.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Cells damaged by Plasmodium.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Why lifestyle diseases.",
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
                              "name": "Pathogens and disease",
                              "statement": "Types, spread, damage."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Microorganism causing disease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bacteria, viruses, fungi, protozoa.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All four named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "TB/cholera, influenza/HIV, athlete's foot, malaria (one each).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "All four examples.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Poison produced by pathogen damaging tissues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Cholera (or tetanus/diphtheria).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Communicable spreads between hosts; non-communicable does not.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Malaria/TB (communicable); CHD/cancer (non-communicable).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Via infected Anopheles mosquito bites.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Red blood cells and liver cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Linked to diet, smoking, inactivity rather than infection.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Pathogens, disease types, transmission basics",
          "commonErrors": [
                    "Calling all diseases communicable."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u8-trans",
      title: "Transmission routes and antibiotics",
      skill: "Describe routes of disease transmission and explain antibiotic action and resistance.",
      lesson: {
        sections: [
          {
            heading: "Routes of transmission",
            body: "**Direct contact** — skin-to-skin (e.g. athlete's foot, some STIs). **Droplet/aerosol** — coughing/sneezing spreads influenza, TB. **Faecal-oral** — contaminated food/water spreads cholera, typhoid. **Vector-borne** — mosquitoes transmit malaria and dengue. **Blood/body fluids** — HIV via shared needles or unprotected sex. **Vertical** — mother to baby (e.g. HIV, rubella).",
          },
          {
            heading: "Breaking the chain of infection",
            body: "Control measures target each link: **hygiene and handwashing**, safe drinking water and sanitation, food hygiene, vaccination, vector control (nets, draining breeding sites, insecticides), quarantine/isolation of cases, safe injection practices, public health education.",
          },
          {
            heading: "Antibiotics and resistance",
            body: "Antibiotics are chemicals (often from fungi) that kill (**bactericidal**) or inhibit (**bacteriostatic**) bacteria — useless against viruses. Misuse (not finishing courses, unnecessary prescriptions, use in animals) selects resistant bacteria: MRSA and drug-resistant TB are examples. Resistance arises by **natural selection** — random mutations conferring resistance survive and multiply. Complete courses kill all susceptible bacteria, reducing resistance.",
          },
        ],
        keyFormulas: [
          { name: "Transmission routes", statement: "Contact, droplets, faecal-oral, vector, blood/body fluids" },
          { name: "Antibiotics", statement: "Kill/inhibit bacteria only — not viruses" },
          { name: "Resistance", statement: "Natural selection of resistant mutants (MRSA, TB)" },
        ],
        workedExample: {
          problem: "Why must a full course of antibiotics be completed even after symptoms improve?",
          solution: "Stopping early leaves the most resistant bacteria alive; they multiply and may cause a resistant infection (e.g. MRSA). Completing the course kills all susceptible bacteria so resistance is less likely to develop.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which disease is spread by a mosquito vector?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cholera"
                    },
                    {
                              "id": "b",
                              "text": "Malaria"
                    },
                    {
                              "id": "c",
                              "text": "Athlete's foot"
                    },
                    {
                              "id": "d",
                              "text": "Influenza"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vector",
                              "statement": "Organism transmitting pathogens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anopheles mosquitoes transmit malaria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Malaria"
},
        },
        {
          id: "ediasbio-u8-trans-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two routes by which pathogens can be transmitted.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transmission",
                              "statement": "Routes pathogens spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: direct contact, droplets, faecal-oral, vector-borne, blood/body fluids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second route named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. droplets and faecal-oral"
},
        },
        {
          id: "ediasbio-u8-trans-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why antibiotics cannot be used to treat influenza.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Antibiotics",
                              "statement": "Act on bacteria only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antibiotics kill or inhibit bacteria by targeting bacterial structures/processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Influenza is caused by a virus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Viruses lack the targets antibiotics attack (no cell wall etc.).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Treatment is supportive care; antivirals may be used in severe cases.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Antibiotics act only on bacteria, not viruses"
},
        },
        {
          id: "ediasbio-u8-trans-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how antibiotic resistance develops in bacteria such as MRSA.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Natural selection",
                              "statement": "Resistance via mutation and selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Random mutations in bacterial DNA can produce antibiotic resistance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "When antibiotics are used, susceptible bacteria are killed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resistant bacteria survive and reproduce — natural selection.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Resistance genes spread; the population becomes resistant (MRSA).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Overuse/incomplete courses increase selection pressure.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mutations + antibiotic selection → resistant bacteria"
},
        },
        {
          id: "ediasbio-u8-trans-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three routes of disease transmission.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two measures that break the chain of infection.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Distinguish bactericidal from bacteriostatic antibiotics.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Transmission and antibiotics",
                              "statement": "Routes, control, antibiotic types."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Droplet/aerosol, faecal-oral, vector-borne, contact, blood/body fluids (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Three routes named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Handwashing/sanitation and vaccination/vector control.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second measure named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bactericidal kills bacteria; bacteriostatic inhibits growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both types distinguished.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Transmission routes, control measures, antibiotic types"
},
        },
        {
          id: "ediasbio-u8-trans-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Name four routes of transmission. (b) Give an example disease for one route. (c) What is a vector? (d) Give an example vector and disease. (e) What do antibiotics act on? (f) Do antibiotics work on viruses? (g) Distinguish bactericidal from bacteriostatic. (h) What is MRSA? (i) Why does resistance develop? (j) Why must courses be completed?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Four transmission routes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Example disease for one route.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Define vector.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Vector + disease example.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "What antibiotics act on.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Do antibiotics work on viruses?",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Bactericidal vs bacteriostatic.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "What is MRSA.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Why resistance develops.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Why complete courses.",
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
                              "name": "Transmission and antibiotics",
                              "statement": "Routes, vectors, resistance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Contact, droplets, faecal-oral, vector-borne (any four valid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Four routes named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "E.g. droplets → influenza/TB; faecal-oral → cholera.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Organism carrying/transmitting pathogens.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Mosquito → malaria/dengue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Bacteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "No — viruses unaffected.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Bactericidal kills; bacteriostatic inhibits growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Methicillin-resistant Staphylococcus aureus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Natural selection of resistant mutants under antibiotic pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Kills all susceptible bacteria; prevents resistant survivors.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Transmission routes, antibiotics, resistance",
          "commonErrors": [
                    "Thinking antibiotics treat viral infections."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u8-trans-notes",
      title: "Pathogens and transmission — notes",
      summary: "Pathogens: bacteria, viruses, fungi, protozoa; routes: contact, droplets, faecal-oral, vector, blood; antibiotics kill bacteria only; resistance via natural selection (MRSA).",
      sections: [
        { heading: "Pathogens", body: "Bacteria (TB, cholera), viruses (flu, HIV), fungi (athlete's foot), protozoa (malaria). Damage via toxins and cell destruction." },
        { heading: "Transmission", body: "Contact, droplets, faecal-oral, vector-borne (mosquito→malaria), blood/body fluids (HIV). Control: hygiene, sanitation, vaccination, vector control." },
        { heading: "Antibiotics", body: "Bacteria only, not viruses. Resistance = natural selection; complete courses prevent resistant survivors." },
      ],
    },
  ],
};
