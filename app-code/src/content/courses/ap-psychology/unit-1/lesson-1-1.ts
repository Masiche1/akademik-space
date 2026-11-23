import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "appsych-u1-lesson-1-1",
  code: "1-1",
  title: "Neurons and the Brain",
  goal: "I CAN explain how neurons communicate and how brain structures relate to function.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell transmitting information via electrical and chemical signals." },
    { term: "Action potential", definition: "Electrical impulse traveling along a neuron's axon." },
    { term: "Synapse", definition: "Gap between neurons where neurotransmitters are released." },
    { term: "Neurotransmitter", definition: "Chemical messenger crossing the synapse (dopamine, serotonin, GABA)." },
    { term: "Cerebral cortex", definition: "Outer brain layer handling higher cognition — divided into lobes." },
    { term: "Plasticity", definition: "Brain's ability to reorganize and form new connections." },
  ],
  concepts: [
    {
      id: "appsych-u1-neurons-brain",
      title: "Neural communication and brain structure",
      skill: "Explain neural signaling and brain-behavior relationships.",
      lesson: {
        sections: [
          {
            heading: "Neural communication",
            body: "Neurons transmit information via action potentials (electrical) and neurotransmitters (chemical); synapses allow selective signaling; reuptake recycles neurotransmitters.",
          },
          {
            heading: "Brain organization",
            body: "Cerebral cortex lobes specialize (frontal=planning, temporal=memory, parietal=sensation, occipital=vision); deeper structures regulate emotion (amygdala), memory (hippocampus), and homeostasis (hypothalamus).",
          },
        ],
        keyFormulas: [
          { name: "Neuron parts", statement: "Dendrites (receive) → Soma (integrate) → Axon (transmit) → Synapse (release)" },
          { name: "Lobes", statement: "Frontal (executive) / Temporal (memory) / Parietal (touch) / Occipital (vision)" },
        ],
        workedExample: {
          problem: "How does an action potential transmit information?",
          solution: "Dendrites receive signals → soma integrates → if threshold reached, action potential fires along axon → neurotransmitters released at synapse → bind to receptors on next neuron → signal continues or stops.",
        },
      },
      questions: [
        {
          id: "appsych-u1-neurons-brain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Neurotransmitters are released from the ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dendrites"
                    },
                    {
                              "id": "b",
                              "text": "terminal buttons of the axon"
                    },
                    {
                              "id": "c",
                              "text": "soma"
                    },
                    {
                              "id": "d",
                              "text": "myelin sheath"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synaptic transmission",
                              "statement": "Neurotransmitters released at axon terminals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neurotransmitters are stored in vesicles at axon terminal buttons and released into the synapse when an action potential arrives.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Axon terminal buttons",
          "commonErrors": [
                    "Confusing with dendrites (receiving end)."
          ]
},
        },
        {
          id: "appsych-u1-neurons-brain-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The amygdala is primarily associated with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "memory formation"
                    },
                    {
                              "id": "b",
                              "text": "emotional processing, especially fear"
                    },
                    {
                              "id": "c",
                              "text": "motor control"
                    },
                    {
                              "id": "d",
                              "text": "vision"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Amygdala",
                              "statement": "Emotional processing center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The amygdala processes emotions, especially fear and aggression — damage produces emotional blunting and fear recognition deficits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It works with the hippocampus for emotional memory.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Emotional processing",
          "commonErrors": [
                    "Confusing with hippocampus (memory)."
          ]
},
        },
        {
          id: "appsych-u1-neurons-brain-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A neuron's resting potential is about -70 millivolts. If an action potential peaks at +40 millivolts, what is the total voltage change? Enter the number (mV).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Change (mV)",
                              "answer": 110
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Voltage difference",
                              "statement": "$40 - (-70) = 110$ mV."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$40 - (-70) = 110$ mV change during depolarization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $110$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "110",
          "commonErrors": [
                    "Subtracting wrong direction (-110)."
          ]
},
        },
        {
          id: "appsych-u1-neurons-brain-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how neurotransmitters affect behavior, using depression and SSRIs as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Neurotransmitters",
                              "statement": "Chemical messengers shape behavior."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Connect chemistry to behavior."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neurotransmitters like serotonin, dopamine, and norepinephrine regulate mood, motivation, and emotion; imbalances are linked to disorders.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Depression involves low serotonin activity; SSRIs (fluoxetine, sertraline) block serotonin reuptake, increasing synaptic availability and improving mood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This demonstrates the biological basis of psychological disorders and pharmacological treatment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Neurotransmitter imbalances affect mood; SSRIs increase serotonin availability",
          "commonErrors": [
                    "Thinking SSRIs 'add' serotonin — they block reuptake."
          ]
},
        },
        {
          id: "appsych-u1-neurons-brain-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the claim that 'the brain is the mind.' How do neuroscience and psychology's other perspectives complicate this reductionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Mind-brain relationship",
                              "statement": "Reductionism vs. emergentism."
                    },
                    {
                              "kind": "skill",
                              "name": "Critical analysis",
                              "statement": "Evaluate a philosophical claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support: brain damage alters personality (Phineas Gage); split-brain studies show separate hemispheres process differently; neural correlates of consciousness exist — evidence for physical basis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complications: subjective experience ('qualia') resists reduction; cognitive processes involve emergent properties not reducible to neurons; culture and environment shape brain development (plasticity).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Alternative views: dualism (separate mind), emergentism (mind emerges from but isn't identical to brain), and embodied cognition challenge simple reduction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: brain is necessary but perhaps not sufficient for mind — the relationship remains philosophy's 'hard problem.'",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Brain necessary for mind but reductionism is contested",
          "commonErrors": [
                    "Simple yes/no — the relationship is philosophically complex."
          ]
},
        },
      ],
    },
  ],
};
