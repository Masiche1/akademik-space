import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ediasbio-u8-lesson-8-3",
  code: "8-3",
  title: "Vaccination and Disease Control",
  goal: "I CAN explain how vaccines work, herd immunity and public health measures for disease control.",
  standards: ["WBI11 Health and disease", "Vaccination and disease control"],
  
  vocabulary: [
    { term: "Vaccine", definition: "Preparation containing weakened/killed pathogen or antigen that stimulates immunity." },
    { term: "Vaccination", definition: "Introducing a vaccine to produce active immunity." },
    { term: "Primary response", definition: "First immune response to an antigen — slow, produces memory cells." },
    { term: "Secondary response", definition: "Faster, stronger immune response on re-exposure to an antigen." },
    { term: "Herd immunity", definition: "Protection of unvaccinated individuals when most of a population is immune." },
    { term: "Immunisation programme", definition: "Scheduled vaccination of a population against specific diseases." },
    { term: "Vector control", definition: "Measures reducing disease-carrying organisms, e.g. mosquito nets." },
    { term: "Public health", definition: "Measures protecting population health: sanitation, vaccination, education." },
  ],
  concepts: [
    {
      id: "ediasbio-u8-vac",
      title: "Vaccines and immunisation",
      skill: "Explain vaccine action, memory cells, herd immunity and vaccination programmes.",
      lesson: {
        sections: [
          {
            heading: "How vaccines work",
            body: "A **vaccine** contains a weakened (attenuated), killed or part of a pathogen, or its toxins (toxoid). It cannot cause disease but presents the **antigen** to the immune system. The **primary response** is slow — few antibodies, but **memory cells** are produced. On real infection the **secondary response** is fast and strong, eliminating the pathogen before symptoms develop.",
          },
          {
            heading: "Herd immunity and programmes",
            body: "When most of a population is vaccinated, unvaccinated people are protected because the pathogen cannot spread easily — **herd immunity**. Vaccination programmes (e.g. MMR, polio, diphtheria-tetanus) have eradicated smallpox and nearly eliminated polio and measles. High coverage is needed because some people cannot be vaccinated (infants, immunocompromised).",
          },
          {
            heading: "Benefits and concerns",
            body: "Vaccines are among the most effective public health measures — cheap, prevent disease and disability, protect vulnerable groups. Concerns: mild side effects (sore arm, low fever), rare allergic reactions, and unfounded fears linking vaccines to autism (disproven). Ethical issues include compulsory vaccination and equitable global access.",
          },
        ],
        keyFormulas: [
          { name: "Vaccine", statement: "Weakened/killed pathogen or antigen → stimulates immunity without disease" },
          { name: "Primary vs secondary", statement: "Slow first response + memory → fast strong secondary" },
          { name: "Herd immunity", statement: "High vaccination coverage protects the unvaccinated" },
        ],
        workedExample: {
          problem: "Explain how the measles vaccine protects a child who has never had measles.",
          solution: "The vaccine contains weakened measles virus antigens. The child's immune system mounts a primary response producing antibodies and memory cells without causing disease. If exposed to real measles later, the secondary response rapidly neutralises the virus — usually before symptoms appear.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-vac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a vaccine typically contain?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Live virulent pathogens"
                    },
                    {
                              "id": "b",
                              "text": "Weakened or killed pathogen antigens"
                    },
                    {
                              "id": "c",
                              "text": "Antibiotics"
                    },
                    {
                              "id": "d",
                              "text": "White blood cells"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vaccine",
                              "statement": "Weakened/killed pathogen or antigen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vaccines contain weakened, killed or partial pathogens/antigens.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Weakened or killed pathogen antigens"
},
        },
        {
          id: "ediasbio-u8-vac-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define herd immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Herd immunity",
                              "statement": "Population-level protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When most of a population is immune/vaccinated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pathogen cannot spread easily, protecting unvaccinated individuals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "High immunity protects the unvaccinated via reduced spread"
},
        },
        {
          id: "ediasbio-u8-vac-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how vaccination produces immunity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vaccination",
                              "statement": "Antigen → memory cells → secondary response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vaccine introduces antigens without causing disease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Primary response produces antibodies and memory cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "On real infection, secondary response is faster and stronger.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Pathogen eliminated before symptoms — active immunity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vaccine → primary response + memory cells → fast secondary response"
},
        },
        {
          id: "ediasbio-u8-vac-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the primary and secondary immune responses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Primary vs secondary response",
                              "statement": "First vs re-exposure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary: first exposure; slow antibody production; may cause symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Primary produces memory cells.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Secondary: re-exposure; much faster and stronger antibody production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secondary often clears pathogen before symptoms appear.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Secondary underlies vaccine protection and lifelong immunity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Primary slow+memory; secondary fast+strong"
},
        },
        {
          id: "ediasbio-u8-vac-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State what a vaccine contains.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why vaccines do not usually cause disease.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one benefit of vaccination programmes.",
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
                              "name": "Vaccination",
                              "statement": "Contents, safety, benefits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Weakened/killed pathogen, part of pathogen, or toxoid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Contains antigens but cannot cause disease.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pathogens are weakened/killed — cannot replicate or cause illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Antigens still trigger immune response safely.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Eradication of smallpox / near-elimination of polio or measles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Prevents disease and disability cheaply at population level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vaccine contents, safety, programme benefits"
},
        },
        {
          id: "ediasbio-u8-vac-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Define vaccine. (b) Give two types of vaccine content. (c) What is the primary response? (d) What are memory cells? (e) What is the secondary response? (f) Define herd immunity. (g) Why is high vaccination coverage needed? (h) Name one disease eradicated by vaccination. (i) Give one side effect of vaccines. (j) Why is vaccination considered cost-effective?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define vaccine.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Two vaccine contents.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Define primary response.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define memory cells.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Define secondary response.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define herd immunity.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Why high coverage needed.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Eradicated disease.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "One vaccine side effect.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Why cost-effective.",
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
                              "name": "Vaccination",
                              "statement": "Immunisation and herd immunity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Preparation with weakened/killed pathogen or antigen stimulating immunity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Weakened/attenuated pathogen and killed pathogen (or toxoid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second type.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "First slow immune response to antigen producing memory cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Long-lived lymphocytes enabling faster secondary response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Faster, stronger response on re-exposure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Protection of unvaccinated when most population is immune.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Some cannot be vaccinated (infants, immunocompromised); coverage stops spread.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Smallpox.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Mild fever, sore arm, redness (rare allergy).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Cheap prevention vs costly treatment and lost productivity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Vaccination, memory, herd immunity",
          "commonErrors": [
                    "Thinking vaccines contain live virulent pathogens."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u8-ctrl",
      title: "Antibiotic resistance and public health",
      skill: "Explain antibiotic resistance, vector control and public health measures for disease.",
      lesson: {
        sections: [
          {
            heading: "Antibiotic resistance management",
            body: "Antibiotics treat bacterial infections only. Resistance arises by natural selection and spreads. Management: complete antibiotic courses, only prescribe when necessary, develop new antibiotics, hospital hygiene to prevent spread of resistant strains (MRSA, drug-resistant TB). Antibiotics in livestock feed contribute to resistance.",
          },
          {
            heading: "Vector and environmental control",
            body: "**Malaria control**: insecticide-treated bed nets, indoor spraying, draining standing water, antimalarial drugs, vaccine development. **General**: safe water supply, sanitation/sewage treatment, food hygiene, pest control, quarantine of cases. **Vector control** breaks transmission without needing to treat every person.",
          },
          {
            heading: "Public health and lifestyle disease",
            body: "Public health measures protect whole populations: vaccination programmes, health education (smoking, diet, exercise, safe sex), screening programmes, clean water and sanitation. **Non-communicable diseases** (CHD, type 2 diabetes, some cancers) are reduced by lifestyle changes: balanced diet, not smoking, regular exercise, limited alcohol. Government policies: sugar taxes, smoking bans, food labelling.",
          },
        ],
        keyFormulas: [
          { name: "Resistance control", statement: "Complete courses; prescribe only when needed; new drugs; hygiene" },
          { name: "Vector control", statement: "Nets, spraying, draining breeding sites" },
          { name: "NCD prevention", statement: "Diet, no smoking, exercise, limited alcohol" },
        ],
        workedExample: {
          problem: "A region has high malaria rates. Suggest three control strategies and explain how each breaks transmission.",
          solution: "Insecticide-treated bed nets prevent mosquito bites during sleep; indoor residual spraying kills mosquitoes; draining standing water removes breeding sites. Each reduces human-mosquito contact, breaking the transmission cycle.",
        },
      },
      questions: [
        {
          id: "ediasbio-u8-ctrl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure best prevents malaria transmission?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Antibiotics for everyone"
                    },
                    {
                              "id": "b",
                              "text": "Insecticide-treated bed nets"
                    },
                    {
                              "id": "c",
                              "text": "Boiling all water"
                    },
                    {
                              "id": "d",
                              "text": "Vitamin supplements"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Vector control",
                              "statement": "Nets prevent mosquito bites."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bed nets block Anopheles mosquitoes transmitting malaria.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Insecticide-treated bed nets"
},
        },
        {
          id: "ediasbio-u8-ctrl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways antibiotic resistance can be reduced.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Resistance control",
                              "statement": "Reduce selection pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete antibiotic courses and prescribe only when necessary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hospital hygiene / develop new antibiotics / reduce agricultural use.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Complete courses; prudent prescribing; hygiene"
},
        },
        {
          id: "ediasbio-u8-ctrl-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how safe water and sanitation reduce disease.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sanitation",
                              "statement": "Breaks faecal-oral route."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Safe water removes waterborne pathogens (cholera, typhoid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sewage treatment prevents faecal contamination of water/food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Breaks faecal-oral transmission route.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Reduces diarrhoeal disease, a major cause of child mortality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Clean water + sewage break faecal-oral spread"
},
        },
        {
          id: "ediasbio-u8-ctrl-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why non-communicable diseases are increasing and how they can be prevented.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NCD prevention",
                              "statement": "Lifestyle risk factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NCDs (CHD, diabetes, cancer) linked to diet, smoking, inactivity, alcohol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modern diets high in fat/salt/sugar and sedentary lifestyles raise risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prevention: balanced diet, not smoking, regular exercise, limited alcohol.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Screening and early detection improve outcomes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Government policies (taxes, bans, labelling) support healthy choices.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Lifestyle changes + screening + policy prevent NCDs"
},
        },
        {
          id: "ediasbio-u8-ctrl-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three measures to control malaria.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why completing antibiotic courses matters.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give two lifestyle changes reducing non-communicable disease risk.",
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
                              "name": "Disease control",
                              "statement": "Vectors, antibiotics, lifestyle."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bed nets, indoor spraying, draining standing water (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Three measures.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Kills all susceptible bacteria; prevents resistant survivors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Incomplete courses select for resistance.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Not smoking and regular exercise (or balanced diet, limited alcohol).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second change named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Malaria control; antibiotic courses; lifestyle prevention"
},
        },
        {
          id: "ediasbio-u8-ctrl-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Name three malaria control measures. (b) What is vector control? (c) Give an example vector. (d) Why complete antibiotic courses? (e) Give an example of antibiotic resistance. (f) Name two public health measures. (g) What is a non-communicable disease? (h) Give two examples. (i) Give two lifestyle changes preventing NCDs. (j) Why is vaccination a cost-effective public health measure?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Three malaria measures.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define vector control.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Example vector.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Why complete courses.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Resistance example.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Two public health measures.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define NCD.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Two NCD examples.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Two lifestyle changes.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Why cost-effective.",
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
                              "name": "Disease control",
                              "statement": "Vectors, resistance, public health."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bed nets, spraying, draining breeding sites (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Three measures.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Measures reducing disease-carrying organisms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Anopheles mosquito.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Kills all susceptible bacteria; prevents resistance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "MRSA or drug-resistant TB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Vaccination programmes and safe water/sanitation (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Disease not spread between people.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "CHD and diabetes (or cancer, asthma).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Not smoking and regular exercise (or diet, limited alcohol).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Cheap prevention avoids costly treatment and disability.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Disease control and public health",
          "commonErrors": [
                    "Using antibiotics for viral diseases."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u8-ctrl-notes",
      title: "Vaccination and disease control — notes",
      summary: "Vaccines present antigens → primary response + memory cells → fast secondary response; herd immunity protects populations; resistance managed by completing courses; vector control and sanitation stop spread.",
      sections: [
        { heading: "Vaccines", body: "Weakened/killed pathogen or antigen → immune response without disease → memory cells → fast secondary response; smallpox eradicated; herd immunity needs high coverage." },
        { heading: "Resistance", body: "Antibiotics treat bacteria only; natural selection produces MRSA/TB resistance; complete courses and prudent use reduce it." },
        { heading: "Public health", body: "Vector control (nets, spraying, draining), safe water/sewage, vaccination, health education; NCDs prevented by diet, no smoking, exercise." },
      ],
    },
  ],
};
