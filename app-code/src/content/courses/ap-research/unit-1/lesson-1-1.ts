import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apr-u1-lesson-1-1",
  code: "1-1",
  title: "Research Design",
  goal: "I CAN design rigorous academic research with appropriate methods and controls.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Research design", definition: "Overall plan for conducting study — determines how questions answered." },
    { term: "Methodology", definition: "Specific procedures for data collection and analysis." },
    { term: "Variable", definition: "Measurable characteristic that can vary — independent, dependent, control." },
    { term: "Control group", definition: "Group not receiving treatment — baseline for comparison." },
    { term: "Validity", definition: "Whether study measures what it claims to measure." },
    { term: "Reliability", definition: "Consistency of results across repetitions." },
  ],
  concepts: [
    {
      id: "apr-u1-research-design",
      title: "Designing research",
      skill: "Create rigorous research designs with appropriate methodology.",
      lesson: {
        sections: [
          {
            heading: "Research types",
            body: "Quantitative (numerical data, statistics), qualitative (interviews, observations), mixed methods (both); choice depends on research question.",
          },
          {
            heading: "Design elements",
            body: "Variables must be measurable; controls isolate effects; validity ensures measuring right thing; reliability ensures consistent results.",
          },
        ],
        keyFormulas: [
          { name: "Research types", statement: "Quantitative / Qualitative / Mixed methods" },
          { name: "Validity vs. reliability", statement: "Right thing measured vs. consistent results" },
        ],
        workedExample: {
          problem: "Design study on 'Does caffeine improve exam performance?'",
          solution: "Independent variable: caffeine (present/absent); dependent: exam score; control group: no caffeine; random assignment; measure scores statistically — but confounders (sleep, preparation) must be controlled.",
        },
      },
      questions: [
        {
          id: "apr-u1-research-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A control group is used to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "receive the treatment"
                    },
                    {
                              "id": "b",
                              "text": "provide baseline for comparison with treatment group"
                    },
                    {
                              "id": "c",
                              "text": "increase sample size"
                    },
                    {
                              "id": "d",
                              "text": "replace statistics"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Control group",
                              "statement": "Baseline for comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control group receives no treatment — provides baseline to measure treatment effect; without it, can't tell if change is due to treatment or other factors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Baseline for comparison",
          "commonErrors": [
                    "Confusing with treatment group."
          ]
},
        },
        {
          id: "apr-u1-research-design-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Validity differs from reliability because validity asks ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are results consistent?"
                    },
                    {
                              "id": "b",
                              "text": "does it measure what it claims?"
                    },
                    {
                              "id": "c",
                              "text": "is sample large?"
                    },
                    {
                              "id": "d",
                              "text": "is it cheap?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Validity",
                              "statement": "Measuring the right thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Validity asks whether the study measures what it claims — accuracy of measurement; reliability asks consistency — same results on repetition. A scale can be reliable (consistent) but not valid (measuring wrong thing).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both essential — valid AND reliable measurement needed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Does it measure what it claims",
          "commonErrors": [
                    "Conflating validity and reliability."
          ]
},
        },
        {
          id: "apr-u1-research-design-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a study has 200 participants and needs 15% control group, how many in control? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Control size",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$200 \\times 0.15 = 30$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$200 \\times 0.15 = 30$ participants in control group.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $30$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "30",
          "commonErrors": [
                    "Using wrong percentage or total."
          ]
},
        },
        {
          id: "apr-u1-research-design-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between quantitative and qualitative research methods. When would each be appropriate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Research methods",
                              "statement": "Quantitative vs. qualitative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quantitative: numerical data, statistics, experiments — 'How many students prefer X?' Measurable, generalizable, objective; appropriate for testing hypotheses, measuring prevalence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Qualitative: interviews, observations, textual analysis — 'Why do students prefer X?' Deep understanding, context, meaning; appropriate for exploring phenomena, understanding experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mixed methods combines both — quantitative shows 'what,' qualitative explains 'why'; choice depends on research question nature.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Quantitative = measurable patterns; Qualitative = deep understanding",
          "commonErrors": [
                    "Thinking one is always better — depends on question."
          ]
},
        },
        {
          id: "apr-u1-research-design-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the ethical considerations in research design. What makes research unethical?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Research ethics",
                              "statement": "Participant protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informed consent: participants must voluntarily agree knowing risks/benefits; deception requires justification and debriefing; confidentiality protects privacy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Harm prevention: no physical/psychological harm; vulnerable populations need extra protection; power imbalances (teacher-student, doctor-patient) compromise voluntary consent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unethical research: lack of consent, undisclosed risks, coercion, data misuse, plagiarism — violates participant trust and research integrity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: ethical research prioritizes participant welfare over findings — IRB approval required precisely because research can harm; methodology must be ethically sound as well as scientifically valid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ethics requires consent, protection, and integrity — participant welfare first",
          "commonErrors": [
                    "Assuming research is inherently ethical — requires active safeguards."
          ]
},
        },
      ],
    },
  ],
};
