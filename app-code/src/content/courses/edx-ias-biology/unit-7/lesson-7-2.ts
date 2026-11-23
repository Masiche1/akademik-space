import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ediasbio-u7-lesson-7-2",
  code: "7-2",
  title: "Photosynthesis",
  goal: "I CAN describe the stages of photosynthesis, chloroplast structure and leaf adaptations for gas exchange.",
  standards: ["WBI14 Photosynthesis", "Plant physiology"],
  
  vocabulary: [
    { term: "Photosynthesis", definition: "Process by which plants make glucose using light energy, CO2 and water." },
    { term: "Chloroplast", definition: "Organelle containing chlorophyll where photosynthesis occurs." },
    { term: "Chlorophyll", definition: "Green pigment absorbing light energy for photosynthesis." },
    { term: "Thylakoid", definition: "Disc-shaped membrane in chloroplasts where light reactions occur." },
    { term: "Stroma", definition: "Fluid-filled space in chloroplast where the Calvin cycle occurs." },
    { term: "Stomata", definition: "Pores in the leaf epidermis for gas exchange, guarded by guard cells." },
    { term: "Palisade mesophyll", definition: "Layer of closely packed, chloroplast-rich cells beneath the upper epidermis." },
    { term: "Compensation point", definition: "Light intensity where photosynthesis and respiration rates are equal." },
  ],
  concepts: [
    {
      id: "ediasbio-u7-photo",
      title: "Photosynthesis in the chloroplast",
      skill: "Describe the light-dependent and light-independent stages of photosynthesis.",
      lesson: {
        sections: [
          {
            heading: "The photosynthesis equation",
            body: "Photosynthesis converts light energy into chemical energy stored in glucose: **6CO2 + 6H2O → C6H12O6 + 6O2** (requires light and chlorophyll). It is the base of nearly all food chains and produces the oxygen we breathe. Photosynthesis occurs in **chloroplasts**, which contain chlorophyll.",
          },
          {
            heading: "Light-dependent reactions",
            body: "In the **thylakoid membranes** (grana), chlorophyll absorbs light energy. Light splits water molecules (photolysis): water → oxygen + hydrogen ions + electrons. The energy is used to make **ATP** and **reduced NADP**, and oxygen is released as a by-product.",
          },
          {
            heading: "Light-independent reactions (Calvin cycle)",
            body: "In the **stroma**, the Calvin cycle uses ATP and reduced NADP to convert carbon dioxide into glucose. No light is needed directly, but the cycle depends on the products of the light reactions. Overall: 6CO2 + 18ATP + 12NADPH → 1 glucose + 6H2O + 18ADP + 12NADP+ (simplified at IAS level: CO2 → glucose).",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis equation", statement: "6CO2 + 6H2O → C6H12O6 + 6O2 (light + chlorophyll)" },
          { name: "Light reactions", statement: "Thylakoid: light splits water → O2 + ATP + reduced NADP" },
          { name: "Calvin cycle", statement: "Stroma: CO2 + ATP + NADPH → glucose" },
        ],
        workedExample: {
          problem: "A leaf is placed in bright light with labelled CO2 containing carbon-14. Where does the carbon end up and why?",
          solution: "The CO2 enters through stomata by diffusion and is fixed into organic molecules during the Calvin cycle in the stroma. With light available, the glucose produced is used or stored; the labelled carbon appears in glucose and other carbohydrates.",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-photo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is released as a by-product of photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Nitrogen"
                    },
                    {
                              "id": "c",
                              "text": "Oxygen"
                    },
                    {
                              "id": "d",
                              "text": "Hydrogen"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "CO2 + water → glucose + oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen is released when water is split.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Oxygen"
},
        },
        {
          id: "ediasbio-u7-photo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the organelle where photosynthesis takes place and the pigment it contains.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chloroplast",
                              "statement": "Site of photosynthesis; chlorophyll pigment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chloroplast.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chlorophyll.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Chloroplast and chlorophyll"
},
        },
        {
          id: "ediasbio-u7-photo-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the light-dependent reactions of photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Light reactions",
                              "statement": "Light → ATP + NADPH + O2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chlorophyll in thylakoids absorbs light energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Light energy splits water molecules (photolysis).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Oxygen is released as a by-product.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "ATP and reduced NADP are produced for the Calvin cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Light splits water → O2 + ATP + reduced NADP"
},
        },
        {
          id: "ediasbio-u7-photo-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how the products of the light-dependent reactions are used in the light-independent reactions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Calvin cycle",
                              "statement": "Uses ATP and NADPH to fix CO2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light reactions make ATP and reduced NADP in thylakoids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "These move to the stroma where the Calvin cycle occurs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ATP provides energy; reduced NADP provides hydrogen for reduction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "CO2 is fixed and converted into glucose.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "The light-independent reactions cannot run without light-reaction products.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "ATP + NADPH drive CO2 → glucose in the stroma"
},
        },
        {
          id: "ediasbio-u7-photo-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation for photosynthesis.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the two regions of the chloroplast where each stage occurs.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the function of chlorophyll.",
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
                              "name": "Photosynthesis",
                              "statement": "Equation, sites, pigment."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbon dioxide + water → glucose + oxygen (light + chlorophyll).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Equation complete.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Light reactions: thylakoid/grana; Calvin cycle: stroma.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both sites correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Absorbs light energy for photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Green colour reflects green light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Equation; thylakoid/stroma; chlorophyll absorbs light"
},
        },
        {
          id: "ediasbio-u7-photo-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Define photosynthesis. (b) Name the organelle and pigment involved. (c) Write the word equation. (d) What is photolysis? (e) What gas is released? (f) Name the products of the light reactions. (g) Where do light reactions occur? (h) What is the Calvin cycle? (i) Why is photosynthesis important to other organisms?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define photosynthesis.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Organelle and pigment.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Word equation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Define photolysis.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Gas released.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Light reaction products.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Site of light reactions.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "What is the Calvin cycle.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Importance to other organisms.",
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
                              "name": "Photosynthesis",
                              "statement": "Light energy → chemical energy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Using light energy, plants convert CO2 and water into glucose and oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Chloroplast and chlorophyll.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Carbon dioxide + water → glucose + oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Light and chlorophyll noted.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Splitting of water using light energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "ATP and reduced NADP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Thylakoid membranes (grana).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Light-independent reactions in stroma fixing CO2 into glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Produces food and oxygen for food chains and atmosphere.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Photosynthesis stages and significance",
          "commonErrors": [
                    "Saying the Calvin cycle needs light directly — it needs light-reaction products."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u7-leaf",
      title: "Leaf structure and gas exchange",
      skill: "Relate leaf adaptations to photosynthesis and describe gas exchange in leaves.",
      lesson: {
        sections: [
          {
            heading: "Leaf adaptations for photosynthesis",
            body: "Leaves are **broad and flat** (large surface area for light capture), **thin** (short diffusion distance), with a **waxy cuticle** (reduces water loss) and **transparent epidermis** (lets light reach mesophyll). **Palisade mesophyll** cells are packed with chloroplasts; **spongy mesophyll** has air spaces for gas diffusion. **Veins** carry water (xylem) and sugars (phloem).",
          },
          {
            heading: "Stomata and gas exchange",
            body: "**Stomata** are pores mainly on the lower epidermis, each flanked by two **guard cells** that swell or shrink to open/close the pore. CO2 diffuses in and O2 diffuses out during the day; water vapour also escapes (transpiration). Guard cells close stomata at night and when water is scarce.",
          },
          {
            heading: "Day and night gas exchange",
            body: "In bright light photosynthesis exceeds respiration: net uptake of CO2 and release of O2. At low light the **compensation point** is reached — photosynthesis = respiration, no net gas exchange. In darkness only respiration occurs: O2 is taken up and CO2 released. Plants respire 24 h a day in all living cells.",
          },
        ],
        keyFormulas: [
          { name: "Adaptations", statement: "Broad/thin leaf, cuticle, palisade+spongy mesophyll, veins" },
          { name: "Stomata", statement: "Guard-cell pores: CO2 in, O2 out, water vapour out" },
          { name: "Compensation point", statement: "Photosynthesis rate = respiration rate; no net exchange" },
        ],
        workedExample: {
          problem: "Why do desert plants often have sunken stomata or reduced leaf area?",
          solution: "Sunken stomata trap moist air and reduce water loss by transpiration; reduced leaf area also limits evaporation. The trade-off is less photosynthesis, so these plants often use CAM photosynthesis (not required at IAS).",
        },
      },
      questions: [
        {
          id: "ediasbio-u7-leaf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which leaf feature maximises light absorption?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thick waxy cuticle"
                    },
                    {
                              "id": "b",
                              "text": "Broad, flat leaf blade"
                    },
                    {
                              "id": "c",
                              "text": "Stomata on upper surface"
                    },
                    {
                              "id": "d",
                              "text": "Long petiole"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Leaf adaptation",
                              "statement": "Large surface area captures more light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Broad flat blade maximises light interception.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Broad, flat leaf blade"
},
        },
        {
          id: "ediasbio-u7-leaf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two cells that control each stoma.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Guard cells",
                              "statement": "Cells flanking stomatal pores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guard cells (a pair).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They swell or shrink to open/close the pore.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Guard cells"
},
        },
        {
          id: "ediasbio-u7-leaf-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of the palisade mesophyll in photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Palisade mesophyll",
                              "statement": "Photosynthetic tissue near upper surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Located just below upper epidermis where light is strongest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cells are elongated and packed with chloroplasts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Large chloroplast number = maximum light absorption per area.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This layer performs most photosynthesis in the leaf.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Palisade layer = main photosynthetic tissue"
},
        },
        {
          id: "ediasbio-u7-leaf-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the gas exchange across a leaf during daylight and explain the role of stomata.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Leaf gas exchange",
                              "statement": "Stomata regulate diffusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stomata open in light: guard cells take in water and swell.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "CO2 diffuses in down its concentration gradient for photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "O2 produced by photosynthesis diffuses out.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Water vapour also escapes — transpiration stream.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Stomata close at night to conserve water.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Stomata open in light: CO2 in, O2 out, water vapour lost"
},
        },
        {
          id: "ediasbio-u7-leaf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three adaptations of a leaf for photosynthesis.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens at the compensation point.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Leaf physiology",
                              "statement": "Adaptations and compensation point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Broad flat blade / thin leaf / palisade mesophyll with chloroplasts / veins / stomata.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second adaptation.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Third adaptation.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Light intensity where photosynthesis rate equals respiration rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "No net uptake of CO2 or release of O2.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Above it glucose accumulates; below it glucose is used.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Leaf adaptations; compensation point definition"
},
        },
        {
          id: "ediasbio-u7-leaf-q6",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "(a) Give two leaf adaptations for capturing light. (b) What is the waxy cuticle's function? (c) Name the two mesophyll layers. (d) Which layer has the most chloroplasts? (e) Where are stomata mostly found? (f) What controls stomatal opening? (g) Which gases diffuse through stomata? (h) What is transpiration? (i) What is the compensation point? (j) Do plants respire at night?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Two light-capture adaptations.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Function of cuticle.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Two mesophyll layers.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Layer with most chloroplasts.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Where stomata are found.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "What controls stomata.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Gases through stomata.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Define transpiration.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Define compensation point.",
                    "marks": 1
          },
          {
                    "label": "j",
                    "prompt": "Do plants respire at night?",
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
                              "name": "Leaf structure",
                              "statement": "Adaptations, stomata, gas exchange."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Broad flat blade and thin leaf (any two valid).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reduces water loss by evaporation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Palisade and spongy mesophyll.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Palisade mesophyll.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Lower epidermis (mainly).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Guard cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "CO2 in, O2 out (water vapour out).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Loss of water vapour through stomata.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Light level where photosynthesis = respiration rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "j",
                              "reasoning": "Yes — respiration occurs 24 h in all living cells.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Leaf anatomy and gas exchange",
          "commonErrors": [
                    "Thinking plants only respire in the dark — they respire constantly."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u7-photo-notes",
      title: "Photosynthesis — notes",
      summary: "6CO2 + 6H2O → glucose + O2 in chloroplasts; light reactions in thylakoids make ATP/NADPH/O2; Calvin cycle in stroma fixes CO2 into glucose; stomata control gas exchange.",
      sections: [
        { heading: "Stages", body: "Light-dependent (thylakoid): light splits water → O2 + ATP + reduced NADP. Light-independent/Calvin cycle (stroma): CO2 + ATP + NADPH → glucose." },
        { heading: "Leaf", body: "Broad thin blade, palisade (most chloroplasts), spongy mesophyll, veins, waxy cuticle, stomata on lower epidermis guarded by guard cells." },
        { heading: "Gas exchange", body: "Day: CO2 in, O2 out; compensation point = photosynthesis equals respiration; plants respire 24 h." },
      ],
    },
  ],
};
