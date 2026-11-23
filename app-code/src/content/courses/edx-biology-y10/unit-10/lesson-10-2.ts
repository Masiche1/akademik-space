import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ebi10-u10-lesson-10-2",
  code: "10-2",
  title: "Genetic Engineering and Cloning",
  goal: "I CAN describe recombinant DNA technology, transgenic organisms, cloning and plant tissue culture.",
  standards: ["4BI1 5.5", "4BI1 5.6", "4BI1 5.7", "4BI1 5.8"],
  
  vocabulary: [
    { term: "Genetic engineering", definition: "The direct manipulation of an organism's genes to produce desired characteristics." },
    { term: "Recombinant DNA", definition: "DNA made by joining DNA from two different sources." },
    { term: "Restriction enzyme", definition: "An enzyme that cuts DNA at specific base sequences, used to isolate genes." },
    { term: "Ligase", definition: "An enzyme that joins DNA fragments together." },
    { term: "Transgenic organism", definition: "An organism containing a gene from another species." },
    { term: "Clone", definition: "A genetically identical copy of an organism." },
    { term: "Tissue culture", definition: "Growing plants or cells from small pieces of tissue under sterile conditions." },
  ],
  concepts: [
    {
      id: "ebi10-u10-recombinant-dna",
      title: "Recombinant DNA and transgenic organisms",
      skill: "Describe the steps of genetic engineering and give examples of transgenic organisms and their uses.",
      lesson: {
        sections: [
          {
            heading: "Making recombinant DNA",
            body: "Genetic engineering inserts a gene from one organism into another to produce a desired protein or trait. The steps are:\n\n1. **Isolate the gene** — a restriction enzyme cuts the DNA at specific base sequences to release the target gene\n2. **Insert into a vector** — the gene is joined into a plasmid (a small ring of bacterial DNA) using **ligase**\n3. **Insert into host** — the recombinant plasmid is introduced into bacteria (or other host cells)\n4. **Expression** — the host cell reads the new gene and produces the protein\n\nThe result is **recombinant DNA** — DNA from two sources joined together.",
          },
          {
            heading: "Transgenic organisms and uses",
            body: "An organism containing a foreign gene is **transgenic**. Examples and uses:\n\n- **Human insulin** — the insulin gene is inserted into bacteria, which produce human insulin for diabetics\n- **GM crops** — crops given genes for pest resistance (e.g. Bt toxin), herbicide tolerance, or improved nutrition (e.g. golden rice with vitamin A)\n- **Pharmaceuticals** — bacteria/yeast engineered to produce vaccines, growth hormone, clotting factors\n- **Research** — transgenic animals (e.g. mice) used to study gene function and disease\n\n**Benefits**: increased yields, reduced pesticide use, production of medicines, disease-resistant crops.\n\n**Risks/concerns**: unknown long-term ecological effects, gene transfer to wild species, loss of biodiversity, ethical objections to modifying organisms.",
          },
          {
            heading: "Ethical and safety issues",
            body: "Genetic engineering raises concerns about:\n- **Biosafety** — could engineered genes escape and harm ecosystems?\n- **Biodiversity** — could GM crops outcompete wild relatives?\n- **Food safety** — could GM foods cause allergies?\n- **Ethics** — is it right to modify living organisms?\n- **Corporate control** — who owns genetically modified seeds?\n\nRegulations and testing are designed to minimise risks while allowing beneficial applications.",
          },
        ],
        keyFormulas: [
          { name: "Recombinant DNA steps", statement: "Cut gene (restriction enzyme) $\\rightarrow$ join to plasmid (ligase) $\\rightarrow$ insert into host $\\rightarrow$ expression" },
          { name: "Key enzymes", statement: "Restriction enzyme = cuts DNA; ligase = joins DNA fragments" },
        ],
        workedExample: {
          problem: "Describe how human insulin is produced using genetically modified bacteria.",
          solution: "The human insulin gene is isolated using a restriction enzyme and inserted into a bacterial plasmid using ligase. The plasmid is introduced into bacteria, which then produce human insulin protein. The insulin is extracted and purified for medical use.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-recombinant-dna-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme is used to cut DNA at specific sequences in genetic engineering?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Restriction enzyme"
                    },
                    {
                              "id": "b",
                              "text": "Amylase"
                    },
                    {
                              "id": "c",
                              "text": "Lipase"
                    },
                    {
                              "id": "d",
                              "text": "Catalase"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Restriction enzyme",
                              "statement": "Cuts DNA at specific base sequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Restriction enzymes cut DNA; the others are digestive enzymes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Restriction enzyme",
          "commonErrors": [
                    "Confusing restriction enzymes (DNA cutting) with digestive enzymes."
          ]
},
        },
        {
          id: "ebi10-u10-recombinant-dna-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two steps in producing a transgenic organism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Genetic engineering steps",
                              "statement": "Isolate gene, insert into vector, transfer to host, express."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two correct steps: cut gene with restriction enzyme; insert into plasmid with ligase; introduce into host cell; select/express.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct step.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. isolate gene + insert into plasmid (also transfer to host, express protein).",
          "commonErrors": [
                    "Listing only one step or giving vague answers like 'mix DNA'."
          ]
},
        },
        {
          id: "ebi10-u10-recombinant-dna-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how bacteria are used to produce human insulin.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Insulin production",
                              "statement": "Human insulin gene inserted into bacteria via recombinant DNA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Human insulin gene is isolated using restriction enzymes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gene inserted into bacterial plasmid using ligase; plasmid introduced into bacteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bacteria produce human insulin, which is extracted and purified for diabetics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Insulin gene $\\rightarrow$ plasmid $\\rightarrow$ bacteria $\\rightarrow$ insulin produced and extracted.",
          "commonErrors": [
                    "Saying bacteria 'grow' insulin naturally; the human gene must be inserted."
          ]
},
        },
        {
          id: "ebi10-u10-recombinant-dna-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A scientist wants to produce a transgenic plant resistant to a herbicide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define genetic engineering.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the steps to create the transgenic plant.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give two potential benefits of herbicide-resistant crops.",
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
                              "name": "Genetic engineering",
                              "statement": "Direct manipulation of genes to produce desired traits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Direct manipulation of an organism's genes/DNA.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Aim: produce desired characteristics such as herbicide resistance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Isolate resistance gene with restriction enzyme; insert into vector using ligase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Introduce into plant cells; grow and select plants expressing the trait.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Benefits: herbicide kills weeds without harming crop; higher yields / easier weed control.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) manipulate genes for traits (b) isolate $\\rightarrow$ vector $\\rightarrow$ host $\\rightarrow$ select (c) higher yield, easier weed control",
          "commonErrors": [
                    "Only describing the benefit without the process."
          ]
},
        },
        {
          id: "ebi10-u10-recombinant-dna-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Golden rice has been genetically modified to produce beta-carotene (vitamin A).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the role of restriction enzymes and ligase in making recombinant DNA.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why golden rice was developed.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss one benefit and one concern about GM crops.",
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
                              "name": "GM crops",
                              "statement": "Genes inserted to improve nutrition, pest resistance, yield."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Restriction enzyme cuts DNA at specific sequences to isolate the gene.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ligase joins the gene to the vector/plasmid.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Vitamin A deficiency causes blindness and malnutrition in rice-eating populations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Beta-carotene in the rice provides vitamin A, addressing the deficiency.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Benefit: improves nutrition and health of millions; concern: unknown ecological effects / gene escape / biodiversity loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Concern correctly identified with reasoning — balanced judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) restriction cuts, ligase joins (b) vitamin A deficiency in rice-eating populations (c) benefit + concern",
          "commonErrors": [
                    "Confusing restriction enzymes with ligase functions."
          ]
},
        },
        {
          id: "ebi10-u10-recombinant-dna-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on genetic engineering.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the steps involved in producing recombinant DNA.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Give three examples of transgenic organisms and their uses.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the advantages and disadvantages of genetic engineering.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Recombinant DNA",
                              "statement": "Cut gene, join to vector, insert into host, express."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Restriction enzyme cuts DNA to isolate the target gene.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Gene joined to a plasmid vector using ligase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Recombinant plasmid introduced into a host cell (e.g. bacteria).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Host expresses the gene, producing the desired protein.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Three examples: insulin-producing bacteria; GM crops (Bt/herbicide-resistant); golden rice; vaccine production; transgenic animals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each example correctly linked to its use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Third distinct example correctly described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Advantages: medicine production, pest resistance, higher yields.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Disadvantages: ecological risks, ethical concerns, unknown long-term effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluation weighs benefits against risks with a judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) cut-join-insert-express (b) insulin bacteria/GM crops/golden rice (c) advantages vs risks evaluated",
          "commonErrors": [
                    "Only listing advantages or only disadvantages; evaluation needs both."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u10-cloning-tissue-culture",
      title: "Cloning and plant tissue culture",
      skill: "Describe cloning by nuclear transfer, plant propagation and tissue culture, and evaluate their uses.",
      lesson: {
        sections: [
          {
            heading: "What is a clone?",
            body: "A **clone** is a genetically identical copy of an organism. Natural cloning occurs in asexual reproduction (e.g. bacteria dividing, strawberry runners, plant cuttings). Artificial cloning produces genetically identical individuals from a single parent.",
          },
          {
            heading: "Animal cloning by nuclear transfer",
            body: "The most famous example is **Dolly the sheep** (1996). The process is **somatic cell nuclear transfer**:\n\n1. An egg cell is taken from a donor animal and its nucleus removed\n2. A body cell (somatic cell) is taken from the animal to be cloned\n3. The nucleus of the body cell is inserted into the enucleated egg\n4. The egg is stimulated to divide, forming an embryo\n5. The embryo is implanted into a surrogate mother\n6. The offspring is genetically identical to the donor of the body cell\n\nUses: preserving endangered species, producing animals with desirable traits (e.g. pharmaceutical production in transgenic animals), research.",
          },
          {
            heading: "Plant cloning and tissue culture",
            body: "Plants are easily cloned because many cells remain totipotent (able to develop into a whole plant). Methods:\n\n- **Cuttings** — a stem or leaf piece is planted and grows roots\n- **Tissue culture (micropropagation)** — small pieces of plant tissue are grown on sterile nutrient gel under controlled conditions; they form callus then plantlets\n\n**Advantages of tissue culture**: rapid production of many identical plants, disease-free plants, conservation of rare species, production of uniform crops.\n\n**Limitations**: all plants are genetically identical (no variation), susceptible to the same diseases, requires sterile conditions and equipment.",
          },
        ],
        keyFormulas: [
          { name: "Somatic cell nuclear transfer", statement: "Remove egg nucleus $\\rightarrow$ insert donor nucleus $\\rightarrow$ stimulate division $\\rightarrow$ implant embryo" },
          { name: "Clone definition", statement: "Genetically identical copy produced asexually" },
        ],
        workedExample: {
          problem: "Describe how a rare orchid could be cloned using tissue culture.",
          solution: "A small piece of orchid tissue is sterilised and placed on nutrient gel in a sterile vessel. Under controlled temperature and light it forms a callus and then plantlets. These are separated and grown into identical orchid plants, rapidly increasing numbers for conservation or sale.",
        },
      },
      questions: [
        {
          id: "ebi10-u10-cloning-tissue-culture-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a clone?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A genetically identical copy of an organism"
                    },
                    {
                              "id": "b",
                              "text": "A hybrid of two species"
                    },
                    {
                              "id": "c",
                              "text": "A mutated organism"
                    },
                    {
                              "id": "d",
                              "text": "A transgenic organism"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Clone",
                              "statement": "Genetically identical copy produced asexually."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clones are genetically identical; hybrids and mutants differ.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** A genetically identical copy",
          "commonErrors": [
                    "Confusing a clone (identical) with a hybrid (mixed genes)."
          ]
},
        },
        {
          id: "ebi10-u10-cloning-tissue-culture-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two uses of plant tissue culture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tissue culture uses",
                              "statement": "Rapid propagation, disease-free plants, conservation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two valid uses: rapid mass production of identical plants; producing disease-free plants; conserving rare species; uniform crops.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second distinct use.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. mass propagation of identical plants; disease-free plant production.",
          "commonErrors": [
                    "Only mentioning 'growing plants' without a specific use."
          ]
},
        },
        {
          id: "ebi10-u10-cloning-tissue-culture-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a plant can be cloned from a cutting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Plant cloning",
                              "statement": "Cutting grows roots and develops into identical plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A stem or leaf cutting is taken from the parent plant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The cutting is planted in suitable growing medium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It develops roots and grows into a new plant genetically identical to the parent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cutting $\\rightarrow$ roots develop $\\rightarrow$ genetically identical plant.",
          "commonErrors": [
                    "Saying the new plant has mixed genes; cuttings produce clones."
          ]
},
        },
        {
          id: "ebi10-u10-cloning-tissue-culture-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Dolly the sheep was the first mammal cloned by nuclear transfer.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the steps of somatic cell nuclear transfer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two potential uses of animal cloning.",
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
                              "name": "Nuclear transfer",
                              "statement": "Donor nucleus into enucleated egg $\\rightarrow$ embryo $\\rightarrow$ clone."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Egg cell nucleus removed; donor body cell nucleus inserted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Egg stimulated to divide forming embryo; implanted into surrogate mother.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Offspring is genetically identical to the donor of the body cell.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uses: conserving endangered species; producing pharmaceutical animals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Further uses: research; preserving desirable traits — two valid uses required.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) remove egg nucleus, insert donor nucleus, stimulate, implant (b) conservation, pharmaceuticals, research",
          "commonErrors": [
                    "Saying the clone is identical to the surrogate mother; it is identical to the nucleus donor."
          ]
},
        },
        {
          id: "ebi10-u10-cloning-tissue-culture-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A botanist wants to mass-produce a rare orchid species.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how tissue culture could be used to clone the orchid.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss one advantage and one disadvantage of cloning plants by tissue culture.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why tissue culture produces genetically identical plants.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Tissue culture",
                              "statement": "Sterile tissue on nutrient gel $\\rightarrow$ callus $\\rightarrow$ plantlets."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Small tissue piece sterilised and placed on nutrient gel in sterile conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Under controlled temp/light it forms callus then plantlets; separated and grown into plants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Rapid production of many identical plants from one parent.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: rapid mass production / disease-free plants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Disadvantage: no genetic variation / all susceptible to same diseases.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "All plantlets grow from the same parent tissue, so they have identical genes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) sterile tissue $\\rightarrow$ callus $\\rightarrow$ plantlets (b) fast/disease-free vs no variation (c) same parent genes",
          "commonErrors": [
                    "Saying tissue culture produces genetically varied plants; it produces clones."
          ]
},
        },
        {
          id: "ebi10-u10-cloning-tissue-culture-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on cloning and tissue culture.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define clone and describe how animal cloning by nuclear transfer works.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe how plant tissue culture produces clones.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the uses and limitations of cloning.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cloning",
                              "statement": "Genetically identical copies produced asexually."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Clone = genetically identical copy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Nuclear transfer: remove egg nucleus, insert donor body-cell nucleus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Stimulate division to form embryo; implant into surrogate mother.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Offspring genetically identical to the nucleus donor.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Tissue piece sterilised, placed on nutrient gel under controlled conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Forms callus then plantlets; separated and grown into identical plants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rapid production of identical, disease-free plants.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses: conservation of endangered species, mass propagation, research.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitations: no genetic variation, ethical concerns, technical difficulty, cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Balanced evaluation of cloning's benefits and drawbacks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) clone def + nuclear transfer steps (b) tissue culture process (c) uses + limitations evaluated",
          "commonErrors": [
                    "Confusing animal cloning (nuclear transfer) with plant tissue culture."
          ]
},
        },
      ],
    },
  ],

};
