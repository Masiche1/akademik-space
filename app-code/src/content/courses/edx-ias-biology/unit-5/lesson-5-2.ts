import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ediasbio-u5-lesson-5-2",
  code: "5-2",
  title: "Hormonal Coordination",
  goal: "I CAN describe endocrine glands, hormone action and negative feedback loops.",
  standards: ["WBI15 Coordination and heredity", "Hormonal coordination"],
  
  vocabulary: [
    { term: "Endocrine gland", definition: "Gland that secretes hormones directly into the blood." },
    { term: "Exocrine gland", definition: "Gland that secretes substances through a duct (e.g. salivary glands)." },
    { term: "Hormone", definition: "Chemical messenger carried in the blood that acts on target cells with receptors." },
    { term: "Target cell", definition: "Cell with specific receptors for a particular hormone." },
    { term: "Negative feedback", definition: "When the effect of a hormone reduces its own further release." },
    { term: "Adrenaline", definition: "Hormone from adrenal medulla preparing the body for fight-or-flight." },
    { term: "Thyroxine", definition: "Hormone from the thyroid that controls metabolic rate." },
  ],
  concepts: [
    {
      id: "ediasbio-u5-endo",
      title: "Endocrine system and hormones",
      skill: "Describe endocrine glands, hormone transport and target-cell action.",
      lesson: {
        sections: [
          {
            heading: "Endocrine vs exocrine",
            body: "Endocrine glands (pituitary, thyroid, adrenal, pancreas, ovaries, testes) release hormones into the blood — no ducts. Exocrine glands (salivary, sweat, digestive) release through ducts to a body surface or cavity.",
          },
          {
            heading: "How hormones act",
            body: "Hormones are carried in the blood to all tissues but only affect target cells bearing specific receptors. They are slower and longer-lasting than nerve impulses but can have widespread effects.",
          },
          {
            heading: "Key glands",
            body: "Pituitary: 'master gland' releasing tropic hormones. Thyroid: thyroxine controls metabolic rate. Adrenal medulla: adrenaline. Pancreas: insulin/glucagon. Ovaries/testes: sex hormones (oestrogen/progesterone, testosterone).",
          },
        ],
        keyFormulas: [
          { name: "Endocrine", statement: "Hormones → blood → target cells with receptors" },
          { name: "Exocrine", statement: "Secretions → duct → body surface/cavity" },
        ],
        workedExample: {
          problem: "Why does adrenaline affect the heart and liver but not every cell equally?",
          solution: "Adrenaline travels in the blood to many tissues, but only cells with adrenaline receptors (heart, liver, muscles, airways) respond — receptor binding triggers the response.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-end-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do endocrine glands release hormones?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Through ducts"
                    },
                    {
                              "id": "b",
                              "text": "Into the blood"
                    },
                    {
                              "id": "c",
                              "text": "Through nerves"
                    },
                    {
                              "id": "d",
                              "text": "Into urine"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Endocrine gland",
                              "statement": "Secretes hormones into blood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Endocrine = ductless, into blood.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Into the blood"
},
        },
        {
          id: "ediasbio-u5-end-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two endocrine glands.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Endocrine glands",
                              "statement": "Ductless hormone glands."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: pituitary, thyroid, adrenal, pancreas, ovaries/testes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second correct gland named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. pituitary and thyroid"
},
        },
        {
          id: "ediasbio-u5-end-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what is meant by a target cell.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Target cell",
                              "statement": "Cell with specific hormone receptors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hormones travel in the blood to all body tissues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Only cells with receptors complementary to the hormone respond.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Receptor binding triggers a change inside the cell.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This explains why one hormone affects only some cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Target cell = has receptors for that hormone"
},
        },
        {
          id: "ediasbio-u5-end-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish between endocrine and exocrine glands with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Endocrine vs exocrine",
                              "statement": "Blood vs duct secretion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Endocrine glands are ductless and secrete hormones into the blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: pituitary, thyroid, pancreas islets, adrenal.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Exocrine glands secrete through ducts onto surfaces/cavities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples: salivary glands, sweat glands, digestive glands.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Some glands (pancreas) are both.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Endocrine → blood; exocrine → ducts"
},
        },
        {
          id: "ediasbio-u5-end-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Match each gland to its hormone: thyroid, adrenal medulla, pancreas, ovaries.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why hormonal responses are slower than nerve impulses.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Glands and speed",
                              "statement": "Gland→hormone; blood transport is slow."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Thyroid → thyroxine; adrenal medulla → adrenaline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pancreas → insulin/glucagon; ovaries → oestrogen/progesterone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All four matches correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hormones must travel in the blood to reach target cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nerve impulses travel directly along neurones — faster.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hormonal effects last longer but start slower.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Gland-hormone matches; hormonal slowness explained"
},
        },
        {
          id: "ediasbio-u5-end-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define endocrine and exocrine gland. (b) Name two endocrine glands. (c) Name two exocrine glands. (d) Define hormone. (e) Define target cell. (f) Name the hormone from the thyroid. (g) Name the hormone from the adrenal medulla. (h) Explain why hormones have widespread effects.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define endocrine and exocrine glands.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Two endocrine glands.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two exocrine glands.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define hormone.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Define target cell.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Thyroid hormone.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Adrenal medulla hormone.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why hormones have widespread effects.",
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
                              "name": "Hormonal coordination",
                              "statement": "Glands, transport and target cells."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Endocrine: ductless → blood; exocrine: duct → surface.",
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
                              "reasoning": "Two correct endocrine glands.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second correct gland.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Salivary/sweat/digestive glands.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Chemical messenger carried in blood acting on target cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Cell with receptors specific to a hormone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Thyroxine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Adrenaline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Blood carries hormone to many tissues with receptors.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Endocrine glands and hormone action",
          "commonErrors": [
                    "Saying hormones travel along nerves."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u5-feedback",
      title: "Hormonal feedback and specific hormones",
      skill: "Explain negative feedback loops and the roles of adrenaline and thyroxine.",
      lesson: {
        sections: [
          {
            heading: "Negative feedback",
            body: "Most hormonal systems are self-regulating: the hormone's effect reduces its own secretion. Example pattern: detector → gland → hormone → effect → feedback. This maintains a set point (e.g. blood glucose, metabolic rate).",
          },
          {
            heading: "Adrenaline",
            body: "Released by adrenal medulla during stress/fear/exercise. Effects: increased heart rate and breathing, dilated airways, more glucose released, redirected blood to muscles, pupil dilation — the 'fight or flight' response.",
          },
          {
            heading: "Thyroxine",
            body: "From the thyroid; controls metabolic rate. Controlled by TSH from the pituitary: low thyroxine → more TSH → more thyroxine; high thyroxine → less TSH. Low thyroxine in children → cretinism; in adults → myxoedema.",
          },
        ],
        keyFormulas: [
          { name: "Negative feedback", statement: "Hormone effect reduces further secretion → set point maintained" },
          { name: "Adrenaline", statement: "Heart rate ↑, airways dilate, glucose release ↑, pupils dilate" },
          { name: "Thyroxine", statement: "Controls metabolic rate; controlled by TSH" },
        ],
        workedExample: {
          problem: "Explain the negative feedback control of thyroxine.",
          solution: "Thyroxine raises metabolic rate. When thyroxine is high, it inhibits TSH release from the pituitary; less TSH → less thyroxine → metabolic rate falls. When thyroxine is low, TSH rises → more thyroxine. The set point is maintained.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-fb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is negative feedback in hormonal control?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The hormone increases its own release"
                    },
                    {
                              "id": "b",
                              "text": "The hormone's effect reduces its own further release"
                    },
                    {
                              "id": "c",
                              "text": "Glands stop working"
                    },
                    {
                              "id": "d",
                              "text": "Hormones travel faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative feedback",
                              "statement": "Effect opposes further release."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effect reduces secretion → set point held.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Effect reduces further release"
},
        },
        {
          id: "ediasbio-u5-fb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two effects of adrenaline.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adrenaline",
                              "statement": "Fight-or-flight hormone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: increased heart rate, dilated airways, raised blood glucose, pupil dilation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second correct effect named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. increased heart rate and dilated airways"
},
        },
        {
          id: "ediasbio-u5-fb-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how thyroxine controls metabolic rate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thyroxine",
                              "statement": "Thyroid hormone controlling metabolic rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thyroxine is released by the thyroid gland into the blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It binds target cells and increases the rate of metabolic reactions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Its release is controlled by TSH from the pituitary via feedback.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Deficiency in childhood → cretinism (stunted growth).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Thyroxine raises metabolic rate; TSH feedback controls it"
},
        },
        {
          id: "ediasbio-u5-fb-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the fight-or-flight response to adrenaline.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Adrenaline",
                              "statement": "Prepares body for stress/exercise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adrenal medulla releases adrenaline into blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heart rate and breathing increase → more oxygen to muscles.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Airways dilate; blood diverted to muscles/brain.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Glycogen → glucose released for energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Body prepared for rapid action; effect wears off quickly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Adrenaline → increased HR, breathing, glucose for fight/flight"
},
        },
        {
          id: "ediasbio-u5-fb-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the gland releasing adrenaline and thyroxine.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the hormone that controls thyroxine release.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain negative feedback using thyroxine.",
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
                              "name": "Hormonal feedback",
                              "statement": "Gland → hormone → effect → feedback."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Adrenal medulla → adrenaline; thyroid → thyroxine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both glands correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "TSH (thyroid-stimulating hormone).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "High thyroxine inhibits TSH → less thyroxine released.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Low thyroxine → more TSH → more thyroxine.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Maintains metabolic rate at set point.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Adrenal/thyroid; TSH feedback on thyroxine"
},
        },
        {
          id: "ediasbio-u5-fb-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define negative feedback. (b) Name the gland releasing adrenaline. (c) Give two effects of adrenaline. (d) Name the gland releasing thyroxine. (e) What does thyroxine control? (f) Name the hormone controlling thyroxine. (g) Explain one consequence of thyroxine deficiency. (h) Why are hormonal responses longer-lasting than nervous responses?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define negative feedback.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Gland for adrenaline.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Two adrenaline effects.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Gland for thyroxine.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "What thyroxine controls.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Hormone controlling thyroxine.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Consequence of deficiency.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why hormonal responses last longer.",
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
                              "name": "Hormonal feedback",
                              "statement": "Self-regulating hormone loops."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Effect of hormone reduces its own release → set point held.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Maintains stable internal conditions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Adrenal medulla.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any two: heart rate ↑, airways dilate, glucose ↑, pupils dilate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second effect.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Thyroid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Metabolic rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "TSH from pituitary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Cretinism/myxoedema — low metabolic rate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Hormones persist in blood; effects are on metabolism.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Negative feedback; adrenaline; thyroxine/TSH",
          "commonErrors": [
                    "Saying adrenaline comes from the thyroid."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u5-hormones-notes",
      title: "Hormonal coordination — notes",
      summary: "Endocrine glands release hormones into blood; target cells have receptors; negative feedback maintains set points (e.g. TSH/thyroxine).",
      sections: [
        { heading: "Endocrine vs exocrine", body: "Endocrine: ductless → blood (pituitary, thyroid, adrenal, pancreas, gonads). Exocrine: duct → surface (salivary, sweat)." },
        { heading: "Key hormones", body: "Adrenaline: fight-or-flight. Thyroxine: metabolic rate (controlled by TSH). Insulin/glucagon: blood glucose." },
        { heading: "Feedback", body: "Hormone effect reduces further release → set point maintained." },
      ],
    },
  ],
};
