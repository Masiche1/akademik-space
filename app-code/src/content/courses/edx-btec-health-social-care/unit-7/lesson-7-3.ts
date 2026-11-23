import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edxbtechsc-u7-lesson-7-3",
  code: "7-3",
  title: "Care Planning and Person-Centred Practice",
  goal: "I CAN explain person-centred care planning, SMART objectives and how care plans support wellbeing.",
  standards: ["BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice"],
  
  vocabulary: [
    { term: "Care plan", definition: "Document outlining a person's needs, goals, interventions and responsibilities for their care." },
    { term: "Person-centred care", definition: "Care that puts the individual at the centre, respecting their preferences, values and choices." },
    { term: "SMART objective", definition: "Specific, Measurable, Achievable, Relevant, Time-bound goal." },
    { term: "Assessment", definition: "Process of gathering information about a person's needs, strengths and preferences." },
    { term: "Intervention", definition: "Action taken to meet a need or achieve a goal in the care plan." },
    { term: "Review", definition: "Regular evaluation of whether care plan goals are being met and whether the plan needs updating." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u7-l3-careplan",
      title: "The care planning process",
      skill: "Explain the stages of care planning and how to write effective SMART objectives.",
      lesson: {
        sections: [
          {
            heading: "The care planning cycle",
            body: "Care planning is cyclical:\n\n1. **Assessment** — gather information about needs, preferences, strengths, risks.\n2. **Planning** — agree goals and interventions with the person.\n3. **Implementation** — carry out the interventions.\n4. **Review** — evaluate progress and update the plan.\n\nThe person should be actively involved at every stage — their views, wishes and preferences drive the plan. Family/carers may contribute with consent.",
          },
          {
            heading: "SMART objectives",
            body: "Good care plan objectives are **SMART**:\n\n- **Specific**: clearly defined, e.g. 'walk to the shop' not 'improve mobility'.\n- **Measurable**: can be tracked, e.g. 'walk 50 metres with frame'.\n- **Achievable**: realistic given abilities.\n- **Relevant**: linked to the person's goals and values.\n- **Time-bound**: has a timeframe, e.g. 'within 3 months'.\n\nPoor objectives are vague ('improve wellbeing'), unmeasurable ('feel better') or unrealistic. Good objectives enable progress monitoring and accountability.",
          },
        ],
        keyFormulas: [
          { name: "Care planning cycle", statement: "assessment → planning → implementation → review" },
          { name: "SMART", statement: "Specific, Measurable, Achievable, Relevant, Time-bound" },
          { name: "Person-centred", statement: "person's wishes drive the plan" },
        ],
        workedExample: {
          problem: "Rewrite this objective to make it SMART: 'Help Mr Jones with his mobility.'",
          solution: "SMART version: 'Support Mr Jones to walk 50 metres independently using a walking frame, three times per week, within 3 months.' Specific (walk 50m), measurable (distance/frequency), achievable (frame), relevant (mobility goal), time-bound (3 months).",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-plan-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four stages of the care planning cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Care planning cycle",
                              "statement": "Assessment, planning, implementation, review."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assessment → planning → implementation → review.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Assessment, planning, implementation, review."
},
        },
        {
          id: "edxbtechsc-u7-plan-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What does SMART stand for in care planning?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SMART objectives",
                              "statement": "Specific, Measurable, Achievable, Relevant, Time-bound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific, Measurable, Achievable, Relevant, Time-bound.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Specific, Measurable, Achievable, Relevant, Time-bound."
},
        },
        {
          id: "edxbtechsc-u7-plan-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why person-centred care planning is important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Person-centred care",
                              "statement": "Individual's wishes drive care."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Respects autonomy and dignity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Produces more relevant, effective care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improves engagement and outcomes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Person-centred planning respects autonomy and produces better outcomes."
},
        },
        {
          id: "edxbtechsc-u7-plan-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify what's wrong with this objective and rewrite it: 'Improve Mrs Patel's health.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "SMART objectives",
                              "statement": "Must be specific, measurable, achievable, relevant, time-bound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem: vague, not measurable, no timeframe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rewrite: specific health goal, e.g. 'Reduce Mrs Patel's blood pressure to below 140/90 through daily medication and weekly walks'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Measurable: BP target stated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Time-bound: 'within 3 months'.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Original is vague; SMART version specifies measurable goal with timeframe."
},
        },
        {
          id: "edxbtechsc-u7-plan-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care plan for a client with diabetes includes the objective: 'Eat better.'\n(a) Explain why this objective is ineffective.\n(b) Rewrite it as a SMART objective.\n(c) Describe how progress would be monitored.\n(d) Explain when the care plan should be reviewed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "SMART objectives",
                              "statement": "Vague objectives cannot be measured or monitored."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Eat better' is vague, unmeasurable, no timeframe.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) SMART rewrite, e.g. 'Reduce HbA1c below 48 mmol/mol through diet and exercise within 6 months'.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Monitor via HbA1c tests, weight, glucose logs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Review regularly and when health/status changes.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vague objective rewritten as SMART with monitoring and review plan."
},
        },
        {
          id: "edxbtechsc-u7-plan-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) the four stages of care planning;\n(b) what happens at each stage;\n(c) what SMART stands for;\n(d) why person-centred planning matters;\n(e) three things a good care plan should include;\n(f) how to involve family/carers;\n(g) how often care plans should be reviewed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Care planning",
                              "statement": "Cyclical, person-centred, SMART objectives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Four stages listed.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Each stage described.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) SMART defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Person-centred = autonomy, dignity, better outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three elements: needs, goals, interventions, responsibilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Family/carers involved with consent, contribute views.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Regular reviews, e.g. 3-6 monthly or when needs change.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete care planning overview."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u7-l3-practice",
      title: "Person-centred values in practice",
      skill: "Explain how care values are applied in daily practice and the role of confidentiality and consent.",
      lesson: {
        sections: [
          {
            heading: "Applying care values",
            body: "The **6Cs** (NHS values): **Care** (compassionate care), **Compassion** (empathy for suffering), **Competence** (knowledge and skills), **Communication** (clear, honest, effective), **Courage** (speaking up, doing right thing), **Commitment** (dedication to quality care).\n\n**Dignity** means treating people as individuals with worth — privacy, respect, choice. **Equality and diversity** means treating everyone fairly regardless of characteristics. **Anti-discriminatory practice** actively challenges prejudice and promotes inclusion.",
          },
          {
            heading: "Confidentiality and consent",
            body: "**Confidentiality**: personal information must be kept private and only shared when necessary and lawful — e.g. with consent, for safeguarding, or when required by law.\n\n**Consent**: a person must agree to care/treatment. Types: **expressed** (verbal/written), **implied** (cooperation), **retrospective** (after the fact). For people lacking capacity, decisions are made in their **best interests** under the Mental Capacity Act. Consent can be withdrawn at any time.\n\nCare workers must respect confidentiality while recognising that safeguarding concerns may require sharing information.",
          },
        ],
        keyFormulas: [
          { name: "6Cs", statement: "Care, Compassion, Competence, Communication, Courage, Commitment" },
          { name: "Consent types", statement: "expressed, implied, retrospective" },
          { name: "Confidentiality", statement: "share only when necessary and lawful" },
        ],
        workedExample: {
          problem: "A client asks the care worker not to tell anyone about their depression. How should the worker respond?",
          solution: "The worker should respect confidentiality and reassure the client — information is kept private unless there's a safeguarding concern or legal requirement. However, if the client is at risk of harm, the worker has a duty to share information. The worker should explain this limit clearly and involve the client in decisions where possible.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-values-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the six '6Cs' of NHS values.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "6Cs",
                              "statement": "Care, Compassion, Competence, Communication, Courage, Commitment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All six named.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Care, Compassion, Competence, Communication, Courage, Commitment."
},
        },
        {
          id: "edxbtechsc-u7-values-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define dignity and give two examples of how care workers can promote it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dignity",
                              "statement": "Treating people as individuals with worth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dignity defined: respect, privacy, individuality.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example 1, e.g. knocking before entering, privacy during care.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example 2, e.g. using preferred name, offering choices.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Dignity = respect and individuality; promote via privacy, choice, preferred names."
},
        },
        {
          id: "edxbtechsc-u7-values-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between expressed and implied consent.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Consent types",
                              "statement": "Expressed = verbal/written; implied = cooperation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expressed consent: explicit verbal or written agreement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Implied consent: cooperation without explicit statement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both require the person to have capacity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Expressed = explicit agreement; implied = cooperation — both need capacity."
},
        },
        {
          id: "edxbtechsc-u7-values-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain when confidentiality can be breached and give two examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Confidentiality",
                              "statement": "Share only when necessary and lawful."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breach when necessary and lawful: safeguarding concerns, legal requirement, consent given.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example 1, e.g. suspected abuse must be reported.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example 2, e.g. court order or risk to others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Confidentiality breached for safeguarding, legal requirements or with consent."
},
        },
        {
          id: "edxbtechsc-u7-values-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how care workers can apply the 6Cs in daily practice, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "6Cs in practice",
                              "statement": "Values guide daily care interactions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Care: provide compassionate, person-centred care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compassion: show empathy for suffering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Competence: use knowledge and skills correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Communication: clear, honest, effective communication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Courage: speak up, do the right thing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Commitment: dedication to quality care.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All six 6Cs applied with practical examples."
},
        },
        {
          id: "edxbtechsc-u7-values-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) the 6Cs and what each means;\n(b) what dignity means in care;\n(c) the three types of consent;\n(d) when confidentiality can be breached;\n(e) how to support someone who lacks capacity;\n(f) why anti-discriminatory practice matters;\n(g) how values affect daily care interactions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Care values and practice",
                              "statement": "6Cs, dignity, consent, confidentiality, anti-discrimination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Six 6Cs defined.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Dignity = respect, privacy, individuality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three consent types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Confidentiality breach conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Lacks capacity → best interests decisions under MCA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Anti-discrimination = fair treatment for all.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Values guide every interaction: respect, choice, dignity.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete person-centred values and practice overview."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u7-values-notes",
      title: "Care planning and values — notes",
      summary: "Care plans follow assessment → planning → implementation → review with SMART objectives. 6Cs guide practice; consent and confidentiality are fundamental.",
      sections: [
        { heading: "Key idea", body: "Person-centred care puts the individual's wishes, values and choices at the centre." },
        { heading: "Values", body: "6Cs: Care, Compassion, Competence, Communication, Courage, Commitment." },
      ],
    },
  ],
};
