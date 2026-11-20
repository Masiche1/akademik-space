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
                              "text": "Variable manipulated by researcher"
                    },
                    {
                              "id": "b",
                              "text": "Variable measured"
                    },
                    {
                              "id": "c",
                              "text": "Uncontrolled variable"
                    },
                    {
                              "id": "d",
                              "text": "A type of study"
                    }
          ],
          "correctChoiceId": "a"
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
