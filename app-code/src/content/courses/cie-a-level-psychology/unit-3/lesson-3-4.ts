import type { Lesson } from "../../../types.ts";

export const lesson734: Lesson = {
  id: "ciealpsy-u3-lesson-3-4",
  code: "3-4",
  title: "Research Methods: Experimental Design",
  goal: "I CAN describe experimental designs and research methods.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 1: research methods"],
  
  vocabulary: [
    { term: "Independent variable", definition: "Variable manipulated by researcher." },
    { term: "Dependent variable", definition: "Variable measured." },
    { term: "Confounding variable", definition: "Variable affecting results unintentionally." },
    { term: "Independent groups design", definition: "Different participants in each condition." },
    { term: "Repeated measures design", definition: "Same participants in all conditions." },
    { term: "Matched pairs design", definition: "Participants matched on key variables." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s4-exp",
      title: "Experimental design",
      skill: "Describe experimental designs and methods.",
      lesson: {
        sections: [
          {
            heading: "Experimental designs",
            body: "Independent groups: different participants each condition (no order effects, individual differences). Repeated measures: same participants (controls individual differences, but practice/fatigue effects). Matched pairs: pairs matched on variables (combines benefits, but time-consuming).",
          },
          {
            heading: "Research methods",
            body: "Laboratory experiment: controlled, high internal validity. Field experiment: natural setting, higher ecological validity. Natural experiment: researcher observes natural IV. Quasi-experiment: IV not manipulated.",
          },
          {
            heading: "Strengths/weaknesses",
            body: "Lab: control but artificial. Field: realistic but less control. Natural: ethical but no control. Quasi: practical but confounds.",
          },
        ],
        keyFormulas: [
          { name: "IV", statement: "manipulated" },
          { name: "DV", statement: "measured" },
          { name: "Repeated", statement: "same participants" },
        ],
        workedExample: {
          problem: "Choose design for testing effect of music on memory.",
          solution: "Repeated measures: same participants learn with/without music — controls individual differences, counterbalance order.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the independent variable?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Variable measured"
                    },
                    {
                              "id": "b",
                              "text": "Variable manipulated by researcher"
                    },
                    {
                              "id": "c",
                              "text": "A type of study"
                    },
                    {
                              "id": "d",
                              "text": "Uncontrolled variable"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IV",
                              "statement": "Manipulated."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IV = manipulated variable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Manipulated variable"
},
        },
        {
          id: "ciealpsy-u3-exp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is repeated measures design?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Repeated",
                              "statement": "Same participants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same participants in all conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Controls individual differences but order effects possible.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Same participants all conditions"
},
        },
        {
          id: "ciealpsy-u3-exp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare independent groups vs repeated measures.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "IG vs RM",
                              "statement": "Designs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IG: different participants, no order effects, individual differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RM: same participants, controls differences, order effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Matched pairs combines benefits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Different vs same participants"
},
        },
        {
          id: "ciealpsy-u3-exp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define IV, DV, confounding variable, independent groups, repeated measures, matched pairs. (b) What is IV? (c) What is DV? (d) What is repeated measures? (e) What is confounding variable? (f) What are research methods? (g) Compare lab vs field experiments. (h) Choose best design for a study and justify.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research methods",
                              "statement": "Designs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Manipulated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Measured.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Same participants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Unintended influence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Lab, field, natural, quasi.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Control vs realism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid design choice with justification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Experimental design analysis."
},
        },
        {
          id: "ciealpsy-u3-exp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dependent variable is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The variable manipulated by the researcher"
                    },
                    {
                              "id": "b",
                              "text": "The research hypothesis"
                    },
                    {
                              "id": "c",
                              "text": "An uncontrolled extraneous variable"
                    },
                    {
                              "id": "d",
                              "text": "The variable that is measured by the researcher"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DV",
                              "statement": "Measured variable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The dependent variable is the outcome that is measured and expected to be affected by the IV.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "The variable that is measured"
},
        },
        {
          id: "ciealpsy-u3-exp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many experimental designs are described in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Designs",
                              "statement": "Independent groups, repeated measures, matched pairs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes independent groups, repeated measures and matched pairs designs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-exp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a repeated measures design:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Participants are matched into pairs"
                    },
                    {
                              "id": "b",
                              "text": "The same participants take part in all conditions"
                    },
                    {
                              "id": "c",
                              "text": "Different participants take part in each condition"
                    },
                    {
                              "id": "d",
                              "text": "No variables are measured"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Repeated measures",
                              "statement": "Same participants all conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a repeated measures design each participant experiences every condition, controlling for individual differences.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Same participants in all conditions"
},
        },
        {
          id: "ciealpsy-u3-exp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many research methods are outlined in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Research methods",
                              "statement": "Lab, field, natural, quasi."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson outlines laboratory, field, natural and quasi-experiments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u3-exp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A confounding variable is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The control group"
                    },
                    {
                              "id": "b",
                              "text": "The variable manipulated by the researcher"
                    },
                    {
                              "id": "c",
                              "text": "A variable other than the IV that affects the DV and could distort results"
                    },
                    {
                              "id": "d",
                              "text": "The measured outcome of the study"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Confounding variable",
                              "statement": "Unintended influence on DV."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A confounding variable varies systematically with the IV and affects the DV, making it unclear what caused the result.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Variable unintentionally affecting results"
},
        },
        {
          id: "ciealpsy-u3-exp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many variables are defined in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Variables",
                              "statement": "IV, DV, confounding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson defines the independent variable, dependent variable and confounding variable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-exp-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which design uses the same participants in every condition, thereby controlling for individual differences between participants?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natural experiment"
                    },
                    {
                              "id": "b",
                              "text": "Quasi-experiment"
                    },
                    {
                              "id": "c",
                              "text": "Repeated measures design"
                    },
                    {
                              "id": "d",
                              "text": "Independent groups design"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Repeated measures",
                              "statement": "Controls individual differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Because every participant experiences all conditions, differences between people cannot confound the results — though order effects become a concern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Repeated measures design"
},
        },
        {
          id: "ciealpsy-u3-exp-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many of the three experimental designs attempt to reduce the problem of individual differences between participants?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Designs",
                              "statement": "Repeated measures and matched pairs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeated measures uses the same participants throughout, and matched pairs matches participants on key variables — two designs addressing individual differences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u3-exp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A study compares exam performance of students taught by two different methods, but the researcher cannot randomly assign students to each method. This is best described as a:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Laboratory experiment"
                    },
                    {
                              "id": "b",
                              "text": "Natural experiment"
                    },
                    {
                              "id": "c",
                              "text": "Quasi-experiment"
                    },
                    {
                              "id": "d",
                              "text": "Field experiment"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quasi-experiment",
                              "statement": "IV not fully controlled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When the researcher cannot manipulate or randomly assign the IV, the study is a quasi-experiment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Quasi-experiment"
},
        },
        {
          id: "ciealpsy-u3-exp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain one strength and one weakness of a laboratory experiment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Laboratory experiment",
                              "statement": "Control vs artificiality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: the controlled environment allows variables to be manipulated precisely, giving high internal validity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: the artificial setting may produce unnatural behaviour, lowering ecological validity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The trade-off means lab experiments test cause-and-effect reliably but may not generalise to real life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "High control but low ecological validity"
},
        },
        {
          id: "ciealpsy-u3-exp-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare independent groups and repeated measures designs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "IG vs RM",
                              "statement": "Different vs same participants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Independent groups uses different participants in each condition, avoiding order effects but leaving individual differences as a confound.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Repeated measures uses the same participants, controlling individual differences but introducing practice and fatigue effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Matched pairs attempts to combine the benefits by matching participants before splitting them across conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The choice depends on whether order effects or individual differences pose the greater threat to validity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Independent groups vs repeated measures trade-offs"
},
        },
        {
          id: "ciealpsy-u3-exp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define IV, DV, confounding variable, independent groups design, repeated measures design and matched pairs design. (b) What is the IV? (c) What is the DV? (d) What is a confounding variable? (e) What are the three experimental designs? (f) What are the four research methods? (g) Compare laboratory and field experiments. (h) Choose and justify a design for investigating the effect of background noise on concentration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research methods",
                              "statement": "Designs and methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) The variable manipulated by the researcher.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) The variable measured by the researcher.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) A variable unintentionally affecting the DV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Independent groups, repeated measures, matched pairs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Laboratory, field, natural and quasi-experiments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Lab gives control but is artificial; field is realistic but less controlled.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) A justified design, e.g. repeated measures in a lab to control individual differences, with counterbalancing of noise conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Experimental design analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-exp-notes",
      title: "Research methods — notes",
      summary: "IV manipulated, DV measured. Three designs: independent, repeated, matched.",
      sections: [
        { heading: "Key idea", body: "Design choice affects validity, control, and practicality." },
        { heading: "Methods", body: "Lab (control), field (realism), natural (ethical), quasi (practical)." },
      ],
    },
  ],
};
