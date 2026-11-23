import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ediasbio-u9-lesson-9-2",
  code: "9-2",
  title: "Skeletal Muscle and Contraction",
  goal: "I CAN describe the structure of skeletal muscle and explain the sliding-filament mechanism of contraction.",
  standards: ["WBI15 Respiration, Muscles and the Internal Environment", "Muscle contraction"],
  
  vocabulary: [
    { term: "Skeletal muscle", definition: "Striated muscle attached to bones, under voluntary control, made of parallel fibres." },
    { term: "Muscle fibre", definition: "Single muscle cell containing many nuclei, mitochondria and myofibrils." },
    { term: "Myofibril", definition: "Long cylindrical organelle inside a muscle fibre made of repeating sarcomeres." },
    { term: "Sarcomere", definition: "Contractile unit between two Z-lines containing actin and myosin filaments." },
    { term: "Actin / myosin", definition: "Thin / thick protein filaments that slide past each other during contraction." },
    { term: "Sarcoplasmic reticulum", definition: "Membranous network in muscle fibres storing and releasing calcium ions." },
    { term: "Motor unit", definition: "A motor neurone and all the muscle fibres it innervates." },
  ],
  concepts: [
    {
      id: "ediasbio-u9-muscle",
      title: "Structure of skeletal muscle",
      skill: "Describe the levels of organisation in skeletal muscle and the band pattern of a sarcomere.",
      lesson: {
        sections: [
          {
            heading: "Levels of organisation",
            body: "A whole muscle is made of bundles of muscle fibres. Each fibre is a multinucleate cell containing myofibrils, mitochondria for ATP supply, and a sarcoplasmic reticulum storing Ca2+. Each myofibril is a chain of sarcomeres — the basic contractile units lying between Z-lines.",
          },
          {
            heading: "Filaments and bands",
            body: "Thin actin filaments and thick myosin filaments overlap in the sarcomere. The I-band contains actin only, the A-band contains both filaments, the H-zone contains myosin only, and the M-line is at the centre. Troponin and tropomyosin sit on actin and block the myosin-binding sites at rest.",
          },
          {
            heading: "Motor units",
            body: "A motor neurone plus the fibres it supplies is a motor unit. Stimulating a motor unit contracts all its fibres (all-or-none). Force is graded by recruiting more motor units (summation). Fast fibres contract quickly but fatigue; slow fibres are fatigue-resistant.",
          },
        ],
        keyFormulas: [
          { name: "Sarcomere", statement: "Contractile unit between two Z-lines" },
          { name: "Bands", statement: "I-band = actin only; A-band = actin + myosin; H-zone = myosin only; M-line = centre" },
          { name: "Contraction change", statement: "I-band and H-zone shorten; A-band stays the same length" },
        ],
        workedExample: {
          problem: "During muscle contraction, which regions of the sarcomere change length?",
          solution: "The I-band and H-zone shorten because actin slides over myosin; the A-band (length of the myosin filament) stays constant and the Z-lines move closer together.",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-mus-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the basic contractile unit of a muscle fibre?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Myofibril"
                    },
                    {
                              "id": "b",
                              "text": "Sarcomere"
                    },
                    {
                              "id": "c",
                              "text": "Muscle fibre"
                    },
                    {
                              "id": "d",
                              "text": "Motor unit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sarcomere",
                              "statement": "Basic contractile unit between Z-lines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The sarcomere is the contractile unit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Sarcomere"
},
        },
        {
          id: "ediasbio-u9-mus-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two protein filaments found in a sarcomere and state which is thicker.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Actin and myosin",
                              "statement": "Thin actin, thick myosin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thin filaments: actin; thick filaments: myosin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Myosin is the thicker filament.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Actin (thin) and myosin (thick)"
},
        },
        {
          id: "ediasbio-u9-mus-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the structure of a sarcomere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sarcomere structure",
                              "statement": "Z-lines to Z-lines with actin/myosin bands."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A sarcomere extends from one Z-line to the next.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thin actin and thick myosin filaments overlap within it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "I-band (actin only), A-band (both), H-zone (myosin only) and M-line at centre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Troponin and tropomyosin are associated with actin and block binding sites at rest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Z-line to Z-line; actin + myosin with I/A/H bands"
},
        },
        {
          id: "ediasbio-u9-mus-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the roles of troponin and tropomyosin in muscle contraction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Troponin and tropomyosin",
                              "statement": "Ca2+-regulated blocking of actin binding sites."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At rest, tropomyosin covers the myosin-binding sites on actin, preventing cross-bridge formation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Troponin binds calcium ions released from the sarcoplasmic reticulum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ca2+ binding to troponin causes tropomyosin to move, exposing the binding sites.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Myosin heads can then bind actin and contraction proceeds.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This prevents contraction without a nerve signal raising Ca2+.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Troponin senses Ca2+; tropomyosin blocks/unblocks actin sites"
},
        },
        {
          id: "ediasbio-u9-mus-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the membrane surrounding a muscle fibre.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Name the organelle that stores calcium ions in a muscle fibre.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Define a motor unit.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how muscle force is graded using motor units.",
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
                              "name": "Motor units",
                              "statement": "Neuron + fibres; all-or-none, graded by recruitment."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sarcolemma.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sarcoplasmic reticulum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "A motor unit is a motor neurone plus all the muscle fibres it innervates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both components named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Stimulating a motor unit contracts all its fibres (all-or-none).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "More motor units are recruited for greater force; summation of twitches smooths contraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sarcolemma; SR; motor neurone + fibres; graded by recruitment"
},
        },
        {
          id: "ediasbio-u9-mus-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the structure of skeletal muscle from the whole organ to the protein filaments.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the levels of organisation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name the protein filaments and their associated proteins.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the band pattern of a sarcomere.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State the role of the sarcoplasmic reticulum.",
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
                              "name": "Muscle organisation",
                              "statement": "Muscle → fibres → myofibrils → sarcomeres → filaments."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Whole muscle contains bundles of muscle fibres.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each fibre is a multinucleate cell containing myofibrils, mitochondria and SR.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Myofibrils are chains of sarcomeres between Z-lines.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Actin (thin) and myosin (thick) filaments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Troponin and tropomyosin associated with actin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Z-lines define sarcomere ends; M-line at centre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "I-band = actin only; A-band = actin + myosin; H-zone = myosin only.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "I-band and H-zone shorten on contraction; A-band constant.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Stores Ca2+ ions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Releases Ca2+ on stimulation to trigger contraction; pumps it back for relaxation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hierarchy of organisation, filaments, bands, SR role"
},
        },
      ],
    },
    {
      id: "ediasbio-u9-sliding",
      title: "The sliding-filament mechanism",
      skill: "Explain excitation-contraction coupling and the cross-bridge cycle.",
      lesson: {
        sections: [
          {
            heading: "Excitation-contraction coupling",
            body: "A motor neurone releases acetylcholine at the neuromuscular junction, generating an action potential along the sarcolemma and down T-tubules. This triggers the sarcoplasmic reticulum to release Ca2+ into the sarcoplasm. Ca2+ binds troponin, tropomyosin moves, and myosin-binding sites on actin are exposed.",
          },
          {
            heading: "The cross-bridge cycle",
            body: "Myosin heads bind to exposed actin sites forming cross-bridges. A power stroke pulls the thin filament toward the M-line. ATP binds the myosin head, causing detachment; ATP is hydrolysed to ADP + Pi, re-cocking the head for the next stroke. The cycle repeats, sliding actin over myosin so the sarcomere shortens.",
          },
          {
            heading: "Relaxation",
            body: "When stimulation stops, Ca2+ is actively pumped back into the sarcoplasmic reticulum using ATP. Tropomyosin returns to block the actin sites, cross-bridges detach, and the sarcomere lengthens. Without ATP (e.g. after death), myosin cannot detach — this is rigor mortis.",
          },
        ],
        keyFormulas: [
          { name: "Trigger", statement: "Nerve impulse → ACh → action potential → SR releases Ca2+" },
          { name: "Cross-bridge", statement: "Myosin binds actin → power stroke → ATP detaches head → ATP hydrolysis re-cocks" },
          { name: "Result", statement: "Actin slides over myosin; I-band and H-zone shorten; A-band unchanged" },
        ],
        workedExample: {
          problem: "Why does rigor mortis occur after death?",
          solution: "No ATP is produced after death, so myosin heads cannot detach from actin binding sites. Cross-bridges remain locked in place and muscles stay contracted.",
        },
      },
      questions: [
        {
          id: "ediasbio-u9-sli-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ion triggers muscle contraction by binding to troponin?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Na+"
                    },
                    {
                              "id": "b",
                              "text": "K+"
                    },
                    {
                              "id": "c",
                              "text": "Ca2+"
                    },
                    {
                              "id": "d",
                              "text": "Cl-"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Calcium trigger",
                              "statement": "Ca2+ released from SR binds troponin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calcium ions trigger contraction via troponin.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Ca2+"
},
        },
        {
          id: "ediasbio-u9-sli-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the role of ATP in the cross-bridge cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "ATP in cross-bridge cycle",
                              "statement": "ATP detaches myosin and re-cocks it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ATP binding causes the myosin head to detach from actin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hydrolysis of ATP to ADP + Pi re-cocks (energises) the head for the next power stroke.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "ATP detaches myosin heads and powers re-cocking"
},
        },
        {
          id: "ediasbio-u9-sli-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe excitation-contraction coupling.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Excitation-contraction coupling",
                              "statement": "Nerve impulse → Ca2+ release → binding sites exposed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motor neurone releases acetylcholine, generating an action potential along the sarcolemma and T-tubules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The sarcoplasmic reticulum releases Ca2+ into the sarcoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ca2+ binds troponin, causing tropomyosin to move.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Myosin-binding sites on actin are exposed, allowing contraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Impulse → ACh → action potential → Ca2+ → sites exposed"
},
        },
        {
          id: "ediasbio-u9-sli-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the sliding-filament theory of muscle contraction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sliding filament",
                              "statement": "Actin slides over myosin powered by ATP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Myosin heads bind exposed sites on actin to form cross-bridges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A power stroke pulls the thin actin filament toward the M-line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ATP detaches the head and is hydrolysed to re-cock it; the cycle repeats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The sarcomere shortens: I-band and H-zone shorten while A-band stays constant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Z-lines move closer together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cross-bridges pull actin over myosin; I-band and H-zone shorten"
},
        },
        {
          id: "ediasbio-u9-sli-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the ion that is pumped back into the sarcoplasmic reticulum during relaxation.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Why does relaxation require ATP?",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "What is rigor mortis?",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State what happens to the length of the I-band during contraction.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Relaxation and rigor",
                              "statement": "Ca2+ reuptake needs ATP; no ATP → locked cross-bridges."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ca2+ (calcium ions).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pumping Ca2+ back into the SR is active transport against its concentration gradient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Active transport requires ATP hydrolysis.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rigor mortis is persistent muscle contraction after death.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without ATP, myosin heads cannot detach from actin, so cross-bridges stay locked.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "The I-band shortens.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ca2+; ATP for Ca2+ pump; rigor = locked cross-bridges; I-band shortens"
},
        },
        {
          id: "ediasbio-u9-sli-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain how a nerve impulse causes skeletal muscle contraction.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe transmission at the neuromuscular junction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of calcium ions.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe the cross-bridge cycle.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Describe relaxation and rigor mortis.",
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
                              "name": "Muscle contraction sequence",
                              "statement": "Impulse → Ca2+ → cross-bridges → relaxation needs ATP."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Motor neurone releases acetylcholine into the synaptic cleft.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "ACh binds receptors on the sarcolemma → action potential propagates along sarcolemma/T-tubules.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Action potential triggers SR to release Ca2+ into sarcoplasm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ca2+ binds troponin on actin filaments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Tropomyosin moves, exposing myosin-binding sites.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Myosin heads bind exposed actin sites forming cross-bridges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Power stroke pulls actin toward M-line; ATP detaches head and re-cocks it via hydrolysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cycle repeats → sarcomere shortens, filaments slide.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "On relaxation, Ca2+ is pumped back into SR, tropomyosin re-blocks sites, cross-bridges detach.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Without ATP (after death) myosin cannot detach → rigor mortis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "NMJ → Ca2+ release → cross-bridge cycling → ATP-dependent relaxation"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u9-mus-notes",
      title: "Muscle structure and contraction — notes",
      summary: "Muscle → fibres → myofibrils → sarcomeres. Nerve impulse → Ca2+ → cross-bridge cycle slides actin over myosin; ATP needed to detach and relax.",
      sections: [
        { heading: "Key idea", body: "Contraction is not shortening of filaments — actin slides over myosin. I-band and H-zone shorten; A-band stays constant." },
        { heading: "ATP link", body: "ATP is needed for the power stroke cycle (detachment/re-cocking) and for pumping Ca2+ back during relaxation." },
      ],
    },
  ],
};
