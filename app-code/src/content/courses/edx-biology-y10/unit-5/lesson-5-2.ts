import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ebi10-u5-lesson-5-2",
  code: "5-2",
  title: "The Nervous System, Synapses and Reflexes",
  goal: "I CAN describe the central and peripheral nervous systems, compare nervous and hormonal control, explain synapses and trace a reflex arc.",
  standards: ["4BI1 2.86", "4BI1 2.87", "4BI1 2.88", "4BI1 2.89", "4BI1 2.90", "4BI1 2.91", "4BI1 2.92"],
  
  vocabulary: [
    { term: "Central nervous system", definition: "The brain and spinal cord, which process information and coordinate responses." },
    { term: "Peripheral nervous system", definition: "The nerves carrying impulses between receptors, effectors and the central nervous system." },
    { term: "Neuron", definition: "A nerve cell that transmits electrical impulses." },
    { term: "Synapse", definition: "The junction between two neurons where a chemical transmitter carries the signal." },
    { term: "Reflex arc", definition: "A rapid automatic pathway from receptor to effector, often involving the spinal cord." },
    { term: "Neurotransmitter", definition: "A chemical released at a synapse that passes the impulse to the next neuron." },
    { term: "Sensory neuron", definition: "A neuron carrying impulses from receptors to the central nervous system." },
  ],
  concepts: [
    {
      id: "ebi10-u5-nervous-coordination",
      title: "Nervous coordination and synapses",
      skill: "Compare nervous and hormonal control and describe how impulses pass between neurons.",
      lesson: {
        sections: [
          {
            heading: "Nervous and hormonal control",
            body: "**Nervous control** uses electrical impulses along neurons. It is **fast**, acts over a **short duration**, and affects a **specific local area**. Signals can travel quickly to muscles or glands.\n\n**Hormonal control** uses chemicals called hormones carried in the blood. It is usually **slower**, but its effects can be **longer lasting** and can act on many organs throughout the body. For example, adrenaline prepares the body for danger over several minutes, while a nervous impulse can make a muscle contract in milliseconds.",
          },
          {
            heading: "Neurons, synapses and neurotransmitters",
            body: "The **central nervous system (CNS)** is the brain and spinal cord. The **peripheral nervous system (PNS)** is the network of nerves carrying impulses between receptors, effectors and the CNS. Neurons are specialised nerve cells with cell bodies, dendrites and axons.\n\nAt a **synapse**, an impulse arriving at the end of one neuron causes **neurotransmitters** to be released into the gap. They diffuse across and bind to receptors on the next neuron, which may then generate a new impulse. This one-way chemical junction controls whether a signal continues and prevents impulses from going backwards.",
          },
        ],
        keyFormulas: [
          { name: "Nervous control", statement: "fast, short-lived, local, electrical impulses" },
          { name: "Hormonal control", statement: "slower, longer-lasting, widespread, chemicals in blood" },
          { name: "Synapse", statement: "neurotransmitter → receptor on next neuron → new impulse" },
        ],
        workedExample: {
          problem: "Compare the nervous system and hormones in responding to a sudden loud noise.",
          solution: "Nerves transmit a fast electrical impulse to muscles so the person may startle or cover their ears. Adrenaline is released more slowly into the blood and produces longer-lasting changes such as increased heart rate.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-nervous-coordination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which parts make up the central nervous system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Brain and spinal cord"
                    },
                    {
                              "id": "b",
                              "text": "Nerves only"
                    },
                    {
                              "id": "c",
                              "text": "Receptors and effectors"
                    },
                    {
                              "id": "d",
                              "text": "Heart and lungs"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CNS",
                              "statement": "The brain and spinal cord."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The CNS consists of the brain and spinal cord; nerves form the peripheral system.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Brain and spinal cord",
          "commonErrors": [
                    "Including all nerves as part of the CNS."
          ]
},
        },
        {
          id: "ebi10-u5-nervous-coordination-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two differences between nervous control and hormonal control.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Nervous vs hormonal",
                              "statement": "Speed, duration and range of action differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nervous control is faster and usually acts over a shorter time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hormonal control is slower but can last longer and affect many parts of the body.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nervous is fast/short/local; hormonal is slower/longer/widespread.",
          "commonErrors": [
                    "Saying hormones are faster than nerves."
          ]
},
        },
        {
          id: "ebi10-u5-nervous-coordination-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens at a synapse when a nerve impulse arrives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synapse",
                              "statement": "A junction where neurotransmitters carry the signal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The impulse causes neurotransmitter vesicles to release chemical messengers into the synaptic gap.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The neurotransmitter diffuses across the gap and binds to receptors on the next neuron.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "If enough receptors are stimulated, a new electrical impulse is generated in the next neuron.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Neurotransmitter release → diffusion across gap → receptor binding → new impulse.",
          "commonErrors": [
                    "Suggesting the electrical impulse crosses the gap directly."
          ]
},
        },
        {
          id: "ebi10-u5-nervous-coordination-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A neuron's axon is damaged so that it cannot transmit impulses to the next neuron.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the likely immediate effect on the response controlled by that pathway.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why neurotransmitter release may fail or be reduced.",
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
                              "name": "Impulse transmission",
                              "statement": "A damaged neuron cannot pass the signal to the next cell."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The signal stops at the damaged neuron, so the coordinated response is delayed, weakened or absent.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Damage may prevent the impulse reaching the synapse.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It may also damage vesicles, membrane or receptors needed for neurotransmitter release and binding.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Less neurotransmitter reaches the next neuron, so it may not reach threshold to fire.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Response delayed/weakened (b) impulse or neurotransmitter release fails, so next neuron may not fire.",
          "commonErrors": [
                    "Assuming one damaged neuron always stops all body responses."
          ]
},
        },
        {
          id: "ebi10-u5-nervous-coordination-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A patient receives a drug that blocks receptors for a neurotransmitter at synapses in the CNS.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how this drug could reduce nervous responses.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest one possible side effect and explain why it occurs.",
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
                              "name": "Synaptic transmission",
                              "statement": "Neurotransmitters must bind to receptors to pass a signal."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The drug occupies or blocks the receptors on the postsynaptic neuron.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The neurotransmitter cannot bind effectively to those receptors.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Fewer receptors are stimulated, so fewer or weaker new impulses are generated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Responses controlled by those pathways are therefore reduced.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "One side effect is reduced coordination, drowsiness or slowed responses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This occurs because many CNS pathways share the same transmitter system.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Blocking them affects more than the intended response.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Receptors blocked → fewer signals across synapses (b) drowsiness/poor coordination due to widespread CNS effect.",
          "commonErrors": [
                    "Saying the drug prevents neurotransmitter release everywhere; it may only block receptors."
          ]
},
        },
        {
          id: "ebi10-u5-nervous-coordination-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the difference between nervous and hormonal responses by comparing the time taken to move a finger after a pinprick with the time taken for adrenaline effects to appear after a frightening event.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent and dependent variables and explain why the comparison is valid.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict which response is faster and explain the reason.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why the hormonal response may last longer than the muscular jerk.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Nervous vs hormonal timing",
                              "statement": "Nerve impulses are faster; hormones persist in blood."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: type of stimulus/coordination system.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: time taken for the response.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The comparison is valid because both measure response time to a stimulus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The nervous response is faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Electrical impulses travel rapidly along neurons and through synapses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hormones must be released and transported in the blood, which is slower.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Adrenaline remains in the bloodstream for some time after release.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "It continues to bind receptors on many target cells until it is broken down or removed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A muscle jerk is a brief contraction controlled directly by nerves.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Therefore the hormonal effect can persist longer than the quick reflex movement.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Type of system vs response time (b) nervous faster because impulses are rapid (c) hormone stays in blood and acts repeatedly.",
          "commonErrors": [
                    "Ignoring that hormonal effects can affect multiple organs for a longer period."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u5-reflex-eye",
      title: "Reflexes and the eye",
      skill: "Trace a reflex arc and describe the eye's structures and responses to light.",
      lesson: {
        sections: [
          {
            heading: "The reflex arc",
            body: "A **reflex** is a rapid, automatic response that protects the body. The pathway is: **receptor → sensory neuron → relay neuron in the spinal cord → motor neuron → effector**. A simple example is withdrawing a finger from a hot object. The response is fast because the impulse passes through the spinal cord rather than first travelling to the brain, although the brain may later become aware of it.",
          },
          {
            heading: "The eye and light response",
            body: "Light enters the eye through the **cornea** and **pupil**. The **lens** focuses light onto the **retina**, which contains light-sensitive receptor cells. The **optic nerve** carries impulses to the brain. The **iris** controls pupil size: in bright light the pupil constricts; in dim light it dilates, so the amount of light entering is adjusted.",
          },
        ],
        keyFormulas: [
          { name: "Reflex arc", statement: "receptor → sensory neuron → relay neuron → motor neuron → effector" },
          { name: "Eye focusing", statement: "light → cornea/lens → retina → optic nerve → brain" },
          { name: "Pupil response", statement: "bright light: constrict; dim light: dilate" },
        ],
        workedExample: {
          problem: "A person touches a hot plate and withdraws the hand. Describe the reflex pathway.",
          solution: "Heat receptors in the skin detect the stimulus. A sensory neuron carries the impulse to the spinal cord, a relay neuron passes it to a motor neuron, and muscles contract to move the hand away.",
        },
      },
      questions: [
        {
          id: "ebi10-u5-reflex-eye-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the reflex pathway carries the impulse from the receptor to the central nervous system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sensory neuron"
                    },
                    {
                              "id": "b",
                              "text": "Motor neuron"
                    },
                    {
                              "id": "c",
                              "text": "Effector"
                    },
                    {
                              "id": "d",
                              "text": "Receptor"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sensory neuron",
                              "statement": "Carries impulses from receptors to the CNS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensory neurons carry impulses towards the CNS; motor neurons carry them to effectors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Sensory neuron",
          "commonErrors": [
                    "Choosing motor neuron, which carries impulses away from the CNS."
          ]
},
        },
        {
          id: "ebi10-u5-reflex-eye-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two structures that focus light onto the retina in the eye.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Eye optics",
                              "statement": "The cornea and lens refract light onto the retina."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cornea is the transparent front part that helps focus light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The lens changes shape to focus light precisely on the retina.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Cornea and lens.",
          "commonErrors": [
                    "Naming the iris, which controls pupil size rather than focusing light."
          ]
},
        },
        {
          id: "ebi10-u5-reflex-eye-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the components of a simple reflex arc in the correct order for withdrawing a hand from a hot object.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reflex arc",
                              "statement": "Receptor → sensory neuron → relay neuron → motor neuron → effector."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat receptors in the skin detect the stimulus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A sensory neuron carries the impulse to a relay neuron in the spinal cord.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A motor neuron carries the impulse to muscles, which contract and withdraw the hand.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Receptor → sensory neuron → relay neuron → motor neuron → effector.",
          "commonErrors": [
                    "Placing the brain before the spinal cord; reflexes are coordinated mainly in the spinal cord."
          ]
},
        },
        {
          id: "ebi10-u5-reflex-eye-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A patient has a damaged relay neuron in the spinal cord. A weak stimulus is applied to the skin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what would happen to the reflex response.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the response may still occur if the stimulus is made much stronger.",
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
                              "name": "Neuronal threshold",
                              "statement": "A neuron must reach threshold to transmit an impulse."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The damaged relay neuron may fail to transmit the impulse, so the motor response is weakened or absent.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A stronger stimulus activates more receptors or produces more impulses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More input can help the damaged pathway reach threshold.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "If enough signal reaches the motor neuron, the effector still responds.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Response weakened/absent (b) stronger stimulus may overcome damaged pathway.",
          "commonErrors": [
                    "Assuming damage always has no effect if the stimulus is stronger."
          ]
},
        },
        {
          id: "ebi10-u5-reflex-eye-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A person walks from a dark room into bright sunlight.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the immediate response of the pupil.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the advantage of this response.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the reverse response when returning to the dark room.",
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
                              "name": "Pupil reflex",
                              "statement": "The pupil adjusts to control light entering the eye."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The pupil constricts in bright light.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This reduces the amount of light entering the eye and prevents damage or overload of receptors.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "In dim light the pupil dilates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This allows more light to reach the retina.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The iris muscles change the pupil size under nervous control.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Pupil constricts (b) less light enters (c) pupil dilates to admit more light.",
          "commonErrors": [
                    "Saying the pupil changes colour or that the lens controls light intensity."
          ]
},
        },
        {
          id: "ebi10-u5-reflex-eye-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student tests whether a reflex response requires the brain by gently touching a student's elbow and observing arm movement. The student also asks them to try to move the arm voluntarily at the same time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the stimulus, receptor and effector in the elbow reflex.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the response is faster than a voluntary movement.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest an ethical and practical improvement to the investigation.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reflex investigation",
                              "statement": "Control stimulation and distinguish reflex from voluntary movement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Stimulus: pressure/touch on the skin at the elbow.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Receptor: touch receptor in the skin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Effector: muscles that move the arm.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A reflex arc passes through the spinal cord with fewer synapses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A voluntary response must travel to the brain and back, taking longer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Therefore the reflex occurs more quickly.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use a consistent, safe stimulus and a standardized position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use several trials and record timing or movement clearly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ensure consent and avoid causing pain.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Compare reflex-only and voluntary trials under the same conditions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Touch stimulus, skin receptor, arm muscles (b) shorter spinal pathway (c) consent, controlled stimulus, repeated trials.",
          "commonErrors": [
                    "Assuming every movement after a stimulus is a reflex; voluntary movement also follows stimuli."
          ]
},
        },
      ],
    },
  ],

};
