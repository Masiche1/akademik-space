import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ediasbio-u5-lesson-5-3",
  code: "5-3",
  title: "Reproduction",
  goal: "I CAN describe human reproduction, fertilisation, development and contraception.",
  standards: ["WBI15 Coordination and heredity", "Reproduction"],
  
  vocabulary: [
    { term: "Gamete", definition: "Sex cell (sperm or ovum) carrying half the chromosomes." },
    { term: "Fertilisation", definition: "Fusion of sperm and ovum nuclei to form a zygote." },
    { term: "Zygote", definition: "Fertilised egg cell that divides to form an embryo." },
    { term: "Placenta", definition: "Organ where maternal and fetal blood exchange gases and nutrients (no direct mixing)." },
    { term: "Umbilical cord", definition: "Cord connecting fetus to placenta carrying blood vessels." },
    { term: "Contraception", definition: "Methods preventing fertilisation or pregnancy." },
    { term: "Puberty", definition: "Period of sexual development triggered by sex hormones." },
  ],
  concepts: [
    {
      id: "ediasbio-u5-repro",
      title: "Human reproductive systems and fertilisation",
      skill: "Describe the reproductive systems, gametes and fertilisation.",
      lesson: {
        sections: [
          {
            heading: "Male system",
            body: "Testes produce sperm and testosterone. Sperm travel via epididymis → vas deferens → urethra. Semen = sperm + secretions; ejaculation delivers sperm into the vagina during intercourse.",
          },
          {
            heading: "Female system",
            body: "Ovaries produce ova and oestrogen/progesterone. Ova travel: ovary → oviduct (fertilisation site) → uterus (implantation) → cervix → vagina. The uterus lining (endometrium) thickens each menstrual cycle for implantation.",
          },
          {
            heading: "Fertilisation",
            body: "Sperm must reach the ovum in the oviduct. Only one sperm fertilises: its nucleus fuses with the ovum nucleus → diploid zygote. The zygote divides by mitosis and travels to the uterus for implantation. Hormones (FSH, LH) control the menstrual cycle and ovulation.",
          },
        ],
        keyFormulas: [
          { name: "Gametes", statement: "Sperm (male) + ovum (female) — haploid" },
          { name: "Fertilisation", statement: "Sperm nucleus + ovum nucleus → zygote (diploid)" },
          { name: "Site", statement: "Fertilisation: oviduct; implantation: uterus" },
        ],
        workedExample: {
          problem: "Where do fertilisation and implantation occur?",
          solution: "Fertilisation occurs in the oviduct (fallopian tube) where sperm meets ovum. The zygote then divides and implants in the thickened endometrium of the uterus.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilisation normally occur?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Uterus"
                    },
                    {
                              "id": "b",
                              "text": "Ovary"
                    },
                    {
                              "id": "c",
                              "text": "Oviduct"
                    },
                    {
                              "id": "d",
                              "text": "Cervix"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fertilisation site",
                              "statement": "Oviduct (fallopian tube)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fertilisation occurs in the oviduct.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Oviduct"
},
        },
        {
          id: "ediasbio-u5-rp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the male and female gametes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gametes",
                              "statement": "Sperm and ovum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Male gamete: sperm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Female gamete: ovum (egg).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sperm and ovum"
},
        },
        {
          id: "ediasbio-u5-rp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what happens immediately after fertilisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Zygote development",
                              "statement": "Zygote divides by mitosis and implants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sperm nucleus fuses with ovum nucleus → diploid zygote.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Zygote divides repeatedly by mitosis forming an embryo (ball of cells).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Embryo travels down oviduct to uterus.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Embryo implants in the endometrium.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Zygote → mitosis → embryo → implantation"
},
        },
        {
          id: "ediasbio-u5-rp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish between the roles of the ovary and the uterus.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Ovary vs uterus",
                              "statement": "Gamete production vs pregnancy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ovary produces ova and releases sex hormones (oestrogen, progesterone).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ovum is released at ovulation each cycle.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Uterus is the site of implantation and development of embryo/fetus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Endometrium thickens each cycle to receive the embryo.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Fetus is nourished via placenta in uterus.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Ovary: ova + hormones; uterus: implantation + development"
},
        },
        {
          id: "ediasbio-u5-rp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Trace the path of an ovum from ovary to uterus.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Trace the path of sperm from testes to outside the body.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name the hormone produced by testes.",
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
                              "name": "Reproductive tracts",
                              "statement": "Paths of gametes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ovary → oviduct → uterus (via cervix/vagina out).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct path stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Testes → epididymis → vas deferens → urethra.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correct path stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Testosterone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hormone named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ovum and sperm paths; testosterone"
},
        },
        {
          id: "ediasbio-u5-rp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define gamete. (b) Name the male and female gametes. (c) Name the site of fertilisation. (d) Define zygote. (e) What is the zygote's chromosome number? (f) What process forms the embryo? (g) Where does implantation occur? (h) Name the male sex hormone. (i) Name two female sex hormones.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define gamete.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Name the gametes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Fertilisation site.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define zygote.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Zygote chromosome number.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Process forming embryo.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Implantation site.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Male sex hormone.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "Two female sex hormones.",
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
                              "name": "Reproduction",
                              "statement": "Gametes, fertilisation, development."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Haploid sex cell.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sperm (male) and ovum (female).",
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
                              "reasoning": "Oviduct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Fertilised egg cell.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Diploid (2n, e.g. 46 in humans).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Mitosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Uterus (endometrium).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Testosterone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Oestrogen and progesterone.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Gametes, fertilisation and development",
          "commonErrors": [
                    "Saying fertilisation occurs in the uterus."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u5-dev",
      title: "Development, birth and contraception",
      skill: "Describe pregnancy development, the placenta and contraception.",
      lesson: {
        sections: [
          {
            heading: "Pregnancy development",
            body: "After implantation the embryo develops: placenta forms and umbilical cord connects fetus to placenta. Fetus grows inside amniotic sac with amniotic fluid. Placenta exchanges gases/nutrients/wastes between maternal and fetal blood (kept separate); umbilical cord carries blood between fetus and placenta.",
          },
          {
            heading: "Birth",
            body: "Near full term (~40 weeks), hormones trigger labour: uterus contracts, cervix dilates, fetus passes through birth canal. After birth the placenta is expelled; breasts produce milk stimulated by prolactin/oxytocin.",
          },
          {
            heading: "Contraception and STIs",
            body: "Barrier methods: condoms (also protect against STIs), diaphragm. Hormonal: contraceptive pill, implants. Other: IUD, sterilisation, natural methods. STIs include HIV/AIDS, chlamydia, gonorrhoea — prevented by condoms and treated with antibiotics (not viruses).",
          },
        ],
        keyFormulas: [
          { name: "Placenta", statement: "Exchange surface: O₂/nutrients in, CO₂/wastes out — no blood mixing" },
          { name: "Contraception", statement: "Barrier, hormonal, IUD, sterilisation, natural" },
        ],
        workedExample: {
          problem: "Why is the umbilical cord essential?",
          solution: "It contains blood vessels linking the fetus to the placenta — carrying oxygen and nutrients from mother to fetus and carbon dioxide/wastes back — without mixing maternal and fetal blood.",
        },
      },
      questions: [
        {
          id: "ediasbio-u5-dev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What connects the fetus to the placenta?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Oviduct"
                    },
                    {
                              "id": "b",
                              "text": "Umbilical cord"
                    },
                    {
                              "id": "c",
                              "text": "Endometrium"
                    },
                    {
                              "id": "d",
                              "text": "Cervix"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Umbilical cord",
                              "statement": "Vessel-containing link to placenta."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Umbilical cord connects fetus to placenta.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Umbilical cord"
},
        },
        {
          id: "ediasbio-u5-dev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two functions of the placenta.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Placenta",
                              "statement": "Exchange organ between mother and fetus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: gas exchange, nutrient supply, waste removal, hormone production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second function named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. gas exchange and nutrient/waste exchange"
},
        },
        {
          id: "ediasbio-u5-dev-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why maternal and fetal blood do not mix in the placenta.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Placenta barrier",
                              "statement": "Exchange by diffusion across membranes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Placenta has separate maternal and fetal blood supplies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exchange occurs by diffusion across placental membranes, not mixing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Oxygen/nutrients diffuse to fetal blood; CO₂/wastes diffuse out.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Keeps circulations separate while still exchanging substances.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Diffusion across membranes; blood supplies stay separate"
},
        },
        {
          id: "ediasbio-u5-dev-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare barrier and hormonal methods of contraception.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Contraception",
                              "statement": "Physical vs hormonal prevention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Barrier (condom, diaphragm): physically prevents sperm reaching ovum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Barrier also reduces STI transmission.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Hormonal (pill, implant): prevents ovulation or alters cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hormonal does not protect against STIs.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both aim to prevent fertilisation/pregnancy.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Barrier blocks sperm; hormonal prevents ovulation"
},
        },
        {
          id: "ediasbio-u5-dev-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the role of the amniotic sac.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two hormonal contraceptive methods.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one advantage of condoms over the pill.",
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
                              "name": "Pregnancy support",
                              "statement": "Sac cushions fetus; methods differ."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Amniotic sac contains amniotic fluid cushioning the fetus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Protects from physical shock and infection.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Contraceptive pill and implant/patch/injection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two valid hormonal methods.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Condoms also protect against STIs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pill gives no STI protection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Amniotic sac; hormonal methods; STI protection"
},
        },
        {
          id: "ediasbio-u5-dev-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define placenta. (b) Define umbilical cord. (c) State two substances crossing the placenta to the fetus. (d) State two substances crossing back to the mother. (e) What is the amniotic sac? (f) Name two barrier contraceptives. (g) Name two hormonal contraceptives. (h) Why do condoms reduce STI risk?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define placenta.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Define umbilical cord.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Two substances to fetus.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Two substances back to mother.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Define amniotic sac.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Two barrier contraceptives.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Two hormonal contraceptives.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why condoms reduce STI risk.",
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
                              "name": "Pregnancy and contraception",
                              "statement": "Placenta exchange and prevention methods."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Organ exchanging substances between mother and fetus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cord linking fetus to placenta carrying vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Oxygen and nutrients (glucose/amino acids).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second substance.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Carbon dioxide and urea/wastes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Second waste product.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Fluid-filled sac cushioning fetus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Condom and diaphragm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Pill and implant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Physically blocks exchange of sexual fluids.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Placenta, umbilical cord, contraception",
          "commonErrors": [
                    "Saying maternal and fetal blood mix."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u5-repro-notes",
      title: "Reproduction — notes",
      summary: "Gametes → fertilisation in oviduct → zygote → implantation in uterus; placenta exchanges substances; contraception prevents pregnancy.",
      sections: [
        { heading: "Fertilisation", body: "Sperm + ovum → zygote in oviduct; mitosis → embryo → implants in uterus." },
        { heading: "Placenta", body: "Exchanges O₂/nutrients for CO₂/wastes by diffusion; umbilical cord links fetus to placenta; amniotic sac cushions." },
        { heading: "Contraception", body: "Barrier (condom — STI protection), hormonal (pill/implant), IUD, sterilisation, natural." },
      ],
    },
  ],
};
