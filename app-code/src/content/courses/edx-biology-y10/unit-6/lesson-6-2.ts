import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ebi10-u6-lesson-6-2",
  code: "6-2",
  title: "Human Reproduction",
  goal: "I CAN describe male and female reproductive systems, the menstrual cycle, fertilisation, pregnancy and secondary sexual characteristics.",
  standards: ["4BI1 3.8", "4BI1 3.9", "4BI1 3.10B", "4BI1 3.11", "4BI1 3.12", "4BI1 3.13"],
  
  vocabulary: [
    { term: "Gamete", definition: "A sex cell; sperm in males and ova/eggs in females." },
    { term: "Testes", definition: "Male organs that produce sperm and testosterone." },
    { term: "Ovary", definition: "Female organ that produces ova and hormones such as oestrogen and progesterone." },
    { term: "Menstrual cycle", definition: "The monthly cycle of hormone-controlled changes preparing the uterus for pregnancy." },
    { term: "Fertilisation", definition: "Fusion of a sperm nucleus and an ovum nucleus to form a zygote." },
    { term: "Placenta", definition: "The organ that exchanges nutrients, gases and wastes between mother and embryo." },
    { term: "Amniotic fluid", definition: "Fluid surrounding the embryo that protects it from bumps and drying out." },
  ],
  concepts: [
    {
      id: "ebi10-u6-reproductive-systems",
      title: "Male and female reproductive systems",
      skill: "Describe the structure and function of human reproductive organs and the role of the placenta.",
      lesson: {
        sections: [
          {
            heading: "Male and female systems",
            body: "The **male reproductive system** produces and delivers sperm. The **testes** produce sperm and testosterone; sperm pass through ducts and are stored before ejaculation. The **female reproductive system** produces ova in the **ovaries**, transports them through the oviducts and provides a site for fertilisation and pregnancy in the uterus. The **cervix** and vagina allow sperm entry and birth.\n\nBoth systems have adaptations for their functions: sperm are small, mobile and contain little cytoplasm; ova are larger and contain nutrients. Gametes are haploid so fertilisation restores the diploid chromosome number.",
          },
          {
            heading: "Fertilisation, placenta and embryo protection",
            body: "Fertilisation usually occurs in the **oviduct** when a sperm fuses with an ovum to form a zygote. The zygote divides and implants in the uterus. The **placenta** develops as a disc of maternal and fetal tissue with many villi. It allows exchange of oxygen, nutrients, carbon dioxide and urea between maternal blood and fetal blood, but the two blood supplies do not mix.\n\nThe embryo is surrounded by **amniotic fluid** inside the amniotic sac. The fluid cushions the embryo against bumps, keeps it moist and allows movement. The umbilical cord connects the embryo to the placenta.",
          },
        ],
        keyFormulas: [
          { name: "Gametes", statement: "sperm + ovum → zygote (diploid)" },
          { name: "Placenta", statement: "exchange of nutrients, gases and wastes; maternal/fetal blood do not mix" },
          { name: "Amniotic fluid", statement: "cushions and protects the developing embryo" },
          { name: "Testes/Ovaries", statement: "testes → sperm + testosterone; ovaries → ova + oestrogen/progesterone" },
        ],
        workedExample: {
          problem: "Explain why the placenta has a large surface area and why maternal and fetal blood should not mix.",
          solution: "Many villi increase surface area for efficient diffusion/exchange. Keeping blood separate prevents the mother's immune system rejecting fetal cells and allows selective exchange without mixing blood groups.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-reproductive-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where are sperm produced in the male reproductive system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Testes"
                    },
                    {
                              "id": "b",
                              "text": "Prostate gland"
                    },
                    {
                              "id": "c",
                              "text": "Urethra"
                    },
                    {
                              "id": "d",
                              "text": "Bladder"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Testes",
                              "statement": "Produce sperm and testosterone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sperm are produced in the testes; other structures store or transport them.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Testes",
          "commonErrors": [
                    "Choosing the urethra, which carries urine and semen."
          ]
},
        },
        {
          id: "ebi10-u6-reproductive-systems-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the chromosome number in a human body cell and in a human gamete.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Body cell",
                              "answer": 46
                    },
                    {
                              "label": "Gamete",
                              "answer": 23
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Diploid and haploid",
                              "statement": "Body cells are diploid; gametes are haploid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Human body cells have 46 chromosomes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Gametes have half the number, 23 chromosomes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Body cell 46; gamete 23.",
          "commonErrors": [
                    "Giving 23 for body cells or 46 for gametes."
          ]
},
        },
        {
          id: "ebi10-u6-reproductive-systems-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two adaptations of sperm and one adaptation of an ovum for fertilisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Gamete adaptations",
                              "statement": "Sperm mobility and ovum nutrients aid fertilisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sperm have a tail/flagellum for swimming towards the ovum.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Sperm contain many mitochondria to release energy for movement.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "An ovum contains cytoplasm and nutrients to support early embryo development.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sperm: tail and mitochondria; ovum: nutrients for embryo.",
          "commonErrors": [
                    "Saying ova are small and mobile like sperm."
          ]
},
        },
        {
          id: "ebi10-u6-reproductive-systems-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "During pregnancy, the embryo receives oxygen and nutrients from the mother.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the organ that allows exchange between mother and embryo.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain how oxygen and nutrients move from mother to embryo.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why waste products move in the opposite direction.",
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
                              "name": "Placenta",
                              "statement": "Exchange organ with large surface area."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The placenta.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen and nutrients diffuse across the placenta from maternal blood to fetal blood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The placenta's villi provide a large surface area for efficient exchange.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Carbon dioxide and urea diffuse from fetal blood to maternal blood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This occurs down concentration gradients so wastes are removed by the mother.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Placenta (b) diffusion of O2/nutrients (c) diffusion of CO2/urea back to mother.",
          "commonErrors": [
                    "Saying maternal and fetal blood mix directly."
          ]
},
        },
        {
          id: "ebi10-u6-reproductive-systems-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A pregnant woman is advised to avoid alcohol and certain medicines.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how substances reach the embryo from the mother.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two reasons why harmful substances could affect the embryo.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Placental transfer",
                              "statement": "Small molecules can cross the placenta."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substances in maternal blood can diffuse across the placenta.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The placenta does not block all chemicals, especially small soluble molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "They can then enter fetal blood via the umbilical cord.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The embryo's organs are developing and may be damaged by toxins.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alcohol or medicines may interfere with cell division or organ formation.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) diffusion across placenta/umbilical cord (b) developing organs vulnerable to toxins.",
          "commonErrors": [
                    "Claiming the placenta completely protects the embryo from all substances."
          ]
},
        },
        {
          id: "ebi10-u6-reproductive-systems-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An embryo is developing inside the uterus.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the role of the amniotic fluid.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the role of the umbilical cord.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why the embryo needs a placenta rather than receiving nutrients directly from the mother's stomach.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Embryo support",
                              "statement": "Placenta, amniotic fluid and cord support development."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Amniotic fluid surrounds and cushions the embryo.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It protects against bumps and keeps the embryo moist.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It allows the embryo to move and develop.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The umbilical cord connects embryo to placenta.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It contains blood vessels carrying nutrients and oxygen to embryo and wastes back.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It links fetal and placental circulation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The embryo needs a specialised exchange organ close to maternal blood supply.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The placenta provides large surface area and selective exchange.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Direct stomach contact would not provide efficient gas/nutrient exchange or protection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Placenta also prevents blood mixing while supplying embryo continuously.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) cushioning/moisture/protection (b) transport link to placenta (c) efficient selective exchange.",
          "commonErrors": [
                    "Saying nutrients come from the mother's stomach rather than bloodstream via placenta."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u6-menstrual-pregnancy",
      title: "Menstrual cycle, fertilisation and development",
      skill: "Explain hormonal control of the menstrual cycle and the events of fertilisation and pregnancy.",
      lesson: {
        sections: [
          {
            heading: "The menstrual cycle",
            body: "The **menstrual cycle** is about 28 days and prepares the uterus lining for pregnancy. **FSH** from the pituitary stimulates follicle development in the ovary. Follicles release **oestrogen**, which stimulates the uterus lining to thicken and stimulates a surge in **LH**. LH causes **ovulation**, releasing an ovum. After ovulation the follicle becomes the **corpus luteum**, which secretes **progesterone** to maintain the uterus lining. If no fertilisation occurs, progesterone falls, the lining is shed and menstruation begins.",
          },
          {
            heading: "Fertilisation and pregnancy",
            body: "After ovulation the ovum travels along the oviduct. If sperm are present, fertilisation can occur in the oviduct, forming a zygote. The zygote divides into a ball of cells, moves to the uterus and implants in the lining. Hormones such as progesterone help maintain pregnancy. The embryo develops into a fetus and is protected by amniotic fluid. Birth occurs when the baby is fully developed.",
          },
        ],
        keyFormulas: [
          { name: "FSH", statement: "stimulates follicle development and oestrogen release" },
          { name: "LH", statement: "triggers ovulation" },
          { name: "Oestrogen", statement: "builds uterine lining; stimulates LH surge" },
          { name: "Progesterone", statement: "maintains uterine lining; falls before menstruation if no pregnancy" },
        ],
        workedExample: {
          problem: "Explain why ovulation usually occurs around day 14 of a 28-day cycle.",
          solution: "Rising oestrogen from developing follicles triggers an LH surge. LH causes the mature follicle to release an ovum, usually mid-cycle around day 14.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-menstrual-pregnancy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone triggers ovulation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "FSH"
                    },
                    {
                              "id": "b",
                              "text": "LH"
                    },
                    {
                              "id": "c",
                              "text": "Progesterone"
                    },
                    {
                              "id": "d",
                              "text": "Testosterone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "LH",
                              "statement": "LH triggers ovulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A surge in LH causes the follicle to release an ovum.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) LH",
          "commonErrors": [
                    "Choosing FSH, which stimulates follicle development."
          ]
},
        },
        {
          id: "ebi10-u6-menstrual-pregnancy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the main roles of oestrogen and progesterone in the menstrual cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ovarian hormones",
                              "statement": "Oestrogen builds lining; progesterone maintains it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oestrogen stimulates the uterus lining to thicken and helps trigger LH release.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Progesterone maintains the lining after ovulation and supports early pregnancy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Oestrogen builds lining; progesterone maintains it.",
          "commonErrors": [
                    "Saying progesterone causes ovulation; LH does."
          ]
},
        },
        {
          id: "ebi10-u6-menstrual-pregnancy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the sequence of events from ovulation to implantation in the uterus.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fertilisation to implantation",
                              "statement": "Ovum travels, fertilises, divides and implants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The ovum is released from the ovary and travels along the oviduct.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "If fertilised by sperm, a zygote forms and divides repeatedly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The ball of cells reaches the uterus and implants in the thickened lining.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ovum → oviduct → fertilisation → cell division → implantation.",
          "commonErrors": [
                    "Saying fertilisation occurs in the uterus; it usually occurs in the oviduct."
          ]
},
        },
        {
          id: "ebi10-u6-menstrual-pregnancy-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A woman has irregular menstrual cycles and a doctor measures hormone levels.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why FSH and LH are important for ovulation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one reason low LH could prevent pregnancy.",
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
                              "name": "FSH and LH",
                              "statement": "Pituitary hormones control ovarian cycle."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FSH stimulates follicle growth in the ovary.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Developing follicles release oestrogen, which helps trigger LH release.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "LH then causes ovulation by releasing the ovum.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Low LH may prevent ovulation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without an ovum there is nothing to fertilise, so pregnancy cannot begin.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) FSH→follicles/oestrogen; LH→ovulation (b) no ovum means no fertilisation.",
          "commonErrors": [
                    "Saying FSH directly triggers ovulation; LH is the surge hormone."
          ]
},
        },
        {
          id: "ebi10-u6-menstrual-pregnancy-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A fertilised ovum implants in the uterus.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why progesterone must remain high after implantation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two ways the developing embryo is protected.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Pregnancy maintenance",
                              "statement": "Progesterone maintains uterine lining; amniotic fluid protects embryo."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Progesterone maintains the thickened uterine lining.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It prevents the lining from being shed as in menstruation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "This allows the embryo to remain implanted and receive nutrients.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The amniotic sac and fluid cushion the embryo against bumps.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The placenta provides nutrients and removes wastes while umbilical cord connects embryo.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Progesterone keeps lining for implantation (b) amniotic fluid cushions; placenta/cord supply and remove wastes.",
          "commonErrors": [
                    "Saying progesterone directly nourishes the embryo; it maintains the uterus."
          ]
},
        },
        {
          id: "ebi10-u6-menstrual-pregnancy-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student draws the menstrual cycle and marks days 1, 7, 14 and 28.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the likely event on day 14 and explain the hormone causing it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens to progesterone after day 14 if fertilisation does not occur.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain what happens if fertilisation does occur after ovulation.",
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
                              "name": "Menstrual cycle",
                              "statement": "Hormones control ovulation, implantation and menstruation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ovulation is likely around day 14.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "An LH surge triggers release of the ovum.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oestrogen from follicles stimulates the LH surge.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without pregnancy the corpus luteum degenerates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Progesterone falls, so the uterine lining is no longer maintained.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The lining breaks down and is shed as menstruation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sperm may fertilise the ovum in the oviduct.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A zygote forms, divides and implants in the uterus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Progesterone stays high to maintain the lining.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The embryo develops with support from placenta and amniotic fluid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Ovulation day 14 due LH surge (b) progesterone falls, menstruation (c) fertilisation, implantation, maintained pregnancy.",
          "commonErrors": [
                    "Thinking menstruation occurs because the ovum is not fertilised in the ovary rather than uterine lining changes."
          ]
},
        },
      ],
    },
  ],

};
