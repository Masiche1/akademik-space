import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ediasbio-u5-lesson-5-1",
  code: "5-1",
  title: "The Nervous System",
  goal: "I CAN describe neurones, synaptic transmission and the reflex arc.",
  standards: ["WBI15 Coordination and heredity", "Nervous coordination"],
  
  vocabulary: [
    { term: "Neuron(e)", definition: "Specialised cell that transmits electrical impulses." },
    { term: "Dendrite", definition: "Branching fibres that carry impulses towards the cell body." },
    { term: "Axon", definition: "Long fibre that carries impulses away from the cell body." },
    { term: "Myelin sheath", definition: "Insulating layer around axons that speeds up impulse transmission (saltatory conduction)." },
    { term: "Synapse", definition: "Junction between neurones where neurotransmitters pass the impulse." },
    { term: "Neurotransmitter", definition: "Chemical (e.g. acetylcholine) released at a synapse to transmit the impulse." },
    { term: "Reflex arc", definition: "Pathway receptor → sensory neurone → intermediate neurone → motor neurone → effector." },
  ],
  concepts: [
    {
      id: "ediasbio-u5-neuron",
      title: "Neurones and synapses",
      skill: "Describe neurone structure and synaptic transmission.",
      lesson: {
        sections: [
          {
            heading: "Types of neurone",
            body: "Sensory neurones carry impulses from receptors to the CNS; intermediate (relay) neurones connect sensory and motor neurones in the CNS; motor neurones carry impulses from the CNS to effectors (muscles or glands).",
          },
          {
            heading: "Structure of a motor neurone",
            body: "Cell body contains the nucleus; dendrites receive impulses; the axon carries the impulse away, often myelinated. Myelin (Schwann cells) insulates the axon; impulses 'jump' between nodes of Ranvier — faster conduction.",
          },
          {
            heading: "Synaptic transmission",
            body: "An impulse reaches the presynaptic knob → Ca²⁺ enters → vesicles of neurotransmitter (acetylcholine) fuse with the membrane → transmitter diffuses across the synaptic cleft → binds receptors on the postsynaptic membrane → new impulse generated. The transmitter is then broken down (acetylcholinesterase) so the synapse resets.",
          },
        ],
        keyFormulas: [
          { name: "Impulse path", statement: "Dendrites → cell body → axon → synapse" },
          { name: "Synapse", statement: "Impulse → Ca²⁺ in → vesicles release ACh → receptors → new impulse" },
        ],
        workedExample: {
          problem: "Describe what happens at a synapse when an impulse arrives.",
          solution: "Calcium ions enter the presynaptic neurone; vesicles containing acetylcholine fuse with the membrane and release it into the cleft; acetylcholine binds receptors on the postsynaptic membrane generating a new impulse; the transmitter is then hydrolysed so the synapse can fire again.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-neu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which neurone carries impulses from receptors to the CNS?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motor neurone"
                    },
                    {
                              "id": "b",
                              "text": "Sensory neurone"
                    },
                    {
                              "id": "c",
                              "text": "Relay only"
                    },
                    {
                              "id": "d",
                              "text": "Effector neurone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sensory neurone",
                              "statement": "Receptor → CNS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensory neurones go to the CNS.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Sensory neurone"
},
        },
        {
          id: "ediasbio-u5-neu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of the myelin sheath.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Myelin sheath",
                              "statement": "Insulates axon, speeds conduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Myelin insulates the axon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Impulse jumps between nodes of Ranvier — faster transmission.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Insulation → faster impulse conduction"
},
        },
        {
          id: "ediasbio-u5-neu-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the events at a synapse when an impulse arrives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Synaptic transmission",
                              "statement": "Calcium → vesicles → transmitter → receptors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impulse reaches presynaptic knob; Ca²⁺ ions enter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synaptic vesicles fuse with membrane releasing acetylcholine into cleft.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acetylcholine binds receptors on postsynaptic membrane → new impulse.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Transmitter is broken down so the synapse can reset.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ca²⁺ → ACh release → receptor binding → impulse"
},
        },
        {
          id: "ediasbio-u5-neu-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the three types of neurone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Neurone types",
                              "statement": "Sensory, relay, motor by location and direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensory: receptor → CNS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Motor: CNS → effector (muscle/gland).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Intermediate/relay: connects sensory and motor neurones within CNS.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "All carry electrical impulses but differ in position and direction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Relay neurones allow processing/integration of information.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sensory in, motor out, relay connects"
},
        },
        {
          id: "ediasbio-u5-neu-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Label the parts of a motor neurone: cell body, dendrites, axon, myelin sheath, nodes of Ranvier.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why synapses are essential for coordination.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Synapse function",
                              "statement": "One-way chemical relay between cells."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cell body with nucleus; dendrites receive impulses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Axon transmits impulse away; myelin insulates it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Nodes of Ranvier are gaps between myelin segments.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Synapses pass impulses between neurones chemically.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "They ensure one-way transmission and allow integration/filtering.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Different neurotransmitters and receptors enable diverse responses.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Neurone structure; synapses as chemical relays"
},
        },
        {
          id: "ediasbio-u5-neu-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Name the three types of neurone and their directions. (b) Define synapse. (c) Name the main neurotransmitter at vertebrate synapses. (d) State the role of calcium ions. (e) Describe how the synapse is reset after firing. (f) What is the myelin sheath made of? (g) What are nodes of Ranvier? (h) Why does myelination speed conduction?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name and describe the three neurone types.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Define synapse.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Name the neurotransmitter.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Role of calcium ions.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "How the synapse resets.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Myelin sheath composition.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define nodes of Ranvier.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why myelination speeds conduction.",
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
                              "name": "Neurones and synapses",
                              "statement": "Structure and chemical transmission."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sensory: receptor→CNS; motor: CNS→effector; relay: connects within CNS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three correctly named with directions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Directions clear for each.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Junction between neurones across which impulses pass chemically.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Acetylcholine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Triggers vesicle fusion/release of transmitter.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Acetylcholine hydrolysed by acetylcholinesterase.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Schwann cell membranes (lipid-rich).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Gaps between myelin segments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Impulse jumps node to node (saltatory) — faster.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Neurone types, synapse and myelin",
          "commonErrors": [
                    "Saying the impulse is electrical across the synaptic cleft."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u5-reflex",
      title: "Reflexes and the CNS",
      skill: "Describe the reflex arc and compare nervous and hormonal coordination.",
      lesson: {
        sections: [
          {
            heading: "The CNS and PNS",
            body: "Central nervous system = brain + spinal cord — processes information. Peripheral nervous system = nerves carrying impulses between receptors/effectors and the CNS. The brain is protected by the skull and meninges; the spinal cord by vertebrae.",
          },
          {
            heading: "The reflex arc",
            body: "Stimulus → receptor → sensory neurone → (intermediate neurone in spinal cord) → motor neurone → effector → response. Reflexes are fast, automatic and protective (e.g. withdrawal from a hot object, blinking, knee jerk).",
          },
          {
            heading: "Coordination systems",
            body: "Nervous system: fast, specific, short-lived impulses along neurones. Hormonal system: slower, longer-lasting effects via hormones in the blood, widespread. Many responses combine both (e.g. adrenaline). Drugs can interfere: nicotine mimics acetylcholine; curare blocks receptors; caffeine increases alertness.",
          },
        ],
        keyFormulas: [
          { name: "Reflex arc", statement: "Receptor → sensory → intermediate → motor → effector" },
          { name: "Nervous vs hormonal", statement: "Fast/local/electrical vs slow/widespread/chemical" },
        ],
        workedExample: {
          problem: "Trace the reflex arc when you touch a hot pan.",
          solution: "Heat stimulates receptors in skin → sensory neurone → spinal cord (intermediate neurone) → motor neurone → biceps muscle contracts → hand withdraws — all before the brain is consciously aware.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-ref-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of a reflex arc?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Effector → motor → intermediate → sensory → receptor"
                    },
                    {
                              "id": "b",
                              "text": "Receptor → sensory → intermediate → motor → effector"
                    },
                    {
                              "id": "c",
                              "text": "Receptor → motor → sensory → effector"
                    },
                    {
                              "id": "d",
                              "text": "Sensory → receptor → motor → effector"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reflex arc",
                              "statement": "Receptor → sensory → relay → motor → effector."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impulse flows receptor to effector via CNS.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Receptor → sensory → intermediate → motor → effector"
},
        },
        {
          id: "ediasbio-u5-ref-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two parts of the central nervous system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CNS",
                              "statement": "Brain and spinal cord."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Brain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Spinal cord.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Brain and spinal cord"
},
        },
        {
          id: "ediasbio-u5-ref-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why reflex actions are faster than conscious responses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reflex speed",
                              "statement": "Arc via spinal cord bypasses brain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflex arc is a short pathway through the spinal cord only.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Impulse does not need to travel to the brain and back.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fewer synapses → less delay.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Protective responses are automatic and immediate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Short spinal pathway → faster than conscious brain processing"
},
        },
        {
          id: "ediasbio-u5-ref-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare nervous and hormonal coordination.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Nervous vs hormonal",
                              "statement": "Speed, route, duration, target."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nervous: impulses along neurones — very fast (ms).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nervous: specific target cells via synapses; short-lived.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Hormonal: hormones travel in blood — slower (seconds/minutes).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hormonal: widespread effect on cells with receptors; long-lasting.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Many responses combine both systems (e.g. fight-or-flight).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Nervous fast/specific; hormonal slow/widespread"
},
        },
        {
          id: "ediasbio-u5-ref-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "List the five components of a reflex arc in order.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two examples of reflex actions.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how a drug like curare could disrupt a reflex.",
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
                              "name": "Reflex arc and drugs",
                              "statement": "Arc components; drugs block synapses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Receptor → sensory neurone → intermediate neurone → motor neurone → effector.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct order with all components.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Withdrawal from heat; blinking; knee jerk; pupil reflex.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two valid examples.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Curare blocks acetylcholine receptors at synapses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Impulses cannot pass → muscles cannot contract → reflex fails.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reflex arc, examples, drug effect"
},
        },
        {
          id: "ediasbio-u5-ref-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define CNS and PNS. (b) Name the parts of the CNS. (c) List the reflex arc components in order. (d) Give two examples of reflexes. (e) Explain why reflexes are protective. (f) Describe one way drugs affect synapses. (g) Compare nervous and hormonal coordination. (h) What is an effector?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define CNS and PNS.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Parts of CNS.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Reflex arc order.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Two reflex examples.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Why reflexes are protective.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "One drug effect on synapses.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Nervous vs hormonal coordination.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Define effector.",
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
                              "name": "Coordination",
                              "statement": "CNS/PNS, reflex arc, drug action."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "CNS: brain + spinal cord; PNS: nerves to/from CNS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Brain and spinal cord.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Receptor → sensory → intermediate → motor → effector.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two valid reflex examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Second example.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Automatic rapid withdrawal prevents injury.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "E.g. curame blocks ACh receptors / nicotine mimics ACh.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Nervous fast/electrical vs hormonal slow/blood-borne.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "h",
                              "reasoning": "Muscle or gland that carries out the response.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "CNS, reflex arc and drug effects",
          "commonErrors": [
                    "Placing the brain in the reflex pathway before the spinal cord."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u5-nervous-notes",
      title: "Nervous system — notes",
      summary: "Sensory/relay/motor neurones; synapses use acetylcholine; reflex arc is fast and protective via the spinal cord.",
      sections: [
        { heading: "Neurone types", body: "Sensory: receptor→CNS. Relay: within CNS. Motor: CNS→effector." },
        { heading: "Synapse", body: "Impulse → Ca²⁺ → vesicles release acetylcholine → receptors → impulse; transmitter hydrolysed to reset." },
        { heading: "Reflex vs conscious", body: "Reflex arc via spinal cord is faster and automatic; brain processes consciously afterwards." },
      ],
    },
  ],
};
