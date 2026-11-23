import type { Lesson } from "../../../types.ts";

export const lesson802: Lesson = {
  id: "edxbtechsc-u8-lesson-8-2",
  code: "8-2",
  title: "Mental Health Law and the Care Pathway",
  goal: "I CAN describe the Mental Health Act, compulsory powers and the assessment and care pathway for mental health.",
  standards: ["BTEC L3 National Health and Social Care — Unit 8: Mental Health and Wellbeing (extended certificate)"],
  
  vocabulary: [
    { term: "Mental Health Act 1983", definition: "Primary legislation allowing compulsory detention and treatment of people with mental disorder." },
    { term: "Section 2", definition: "MHA section for detention for assessment in hospital for up to 28 days." },
    { term: "Section 3", definition: "MHA section for detention for treatment in hospital for up to 6 months, renewable." },
    { term: "Approved Mental Health Professional", definition: "Qualified professional who can apply for compulsory detention under the MHA." },
    { term: "Care Programme Approach", definition: "System of assessment, planning and review for people with mental health needs." },
    { term: "Deprivation of Liberty Safeguards", definition: "Legal framework protecting people who lack capacity and are deprived of liberty in care settings." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u8-l2-mha",
      title: "The Mental Health Act and Compulsory Powers",
      skill: "Describe the Mental Health Act 1983/2007 and the powers of compulsory detention.",
      lesson: {
        sections: [
          {
            heading: "Purpose and safeguards",
            body: "The **Mental Health Act 1983** (amended 2007) allows compulsory detention ('sectioning') of people with a **mental disorder** of a nature or degree that warrants detention in the interests of their health or safety or for the protection of others. Powers require two doctors and an **Approved Mental Health Professional (AMHP)**. Safeguards include **nearest relative** rights, **tribunals** to challenge detention, and regular **reviews**.",
          },
          {
            heading: "Key sections",
            body: "**Section 2**: detention for **assessment** — up to 28 days, cannot be renewed. **Section 3**: detention for **treatment** — initially up to 6 months, renewable. **Section 5(2)**: emergency holding power (doctor's holding power) up to 72 hours pending formal sectioning. **Section 136**: police power to remove someone from a public place to a place of safety. The 2007 amendments expanded definition to include personality disorder and improved patient rights and after-care duties.",
          },
        ],
        keyFormulas: [
          { name: "Section 2", statement: "Assessment — up to 28 days, not renewable." },
          { name: "Section 3", statement: "Treatment — 6 months, renewable." },
          { name: "Section 5(2)", statement: "Emergency holding — up to 72 hours." },
          { name: "Section 136", statement: "Police removal to place of safety." },
        ],
        workedExample: {
          problem: "A GP believes a patient with severe psychosis is at risk of harming themselves and others but refuses admission. Explain the legal route to hospital admission.",
          solution: "The GP refers to an AMHP and two doctors, who assess whether the MHA criteria are met. If so, the AMHP can apply for Section 2 (assessment) or Section 3 (treatment) detention in hospital.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l2-mha-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Under the Mental Health Act 1983, Section 3 allows detention for:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Assessment only, for up to 28 days"
                    },
                    {
                              "id": "b",
                              "text": "Treatment, initially for up to 6 months"
                    },
                    {
                              "id": "c",
                              "text": "Emergency holding for up to 72 hours"
                    },
                    {
                              "id": "d",
                              "text": "Removal from a public place"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Section 3",
                              "statement": "Detention for treatment, initially up to 6 months, renewable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Section 3 = treatment detention for up to 6 months.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — treatment, 6 months"
},
        },
        {
          id: "edxbtechsc-u8-l2-mha-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two professionals who must be involved for a person to be compulsorily detained under the MHA.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compulsory detention requirements",
                              "statement": "Two doctors and an AMHP required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two doctors (one approved under MHA).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "An Approved Mental Health Professional (AMHP).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Two doctors + one AMHP"
},
        },
        {
          id: "edxbtechsc-u8-l2-mha-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between Section 2 and Section 3 of the Mental Health Act.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MHA sections 2 and 3",
                              "statement": "Assessment vs treatment detention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Section 2 = detention for assessment, up to 28 days, not renewable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Section 3 = detention for treatment, initially 6 months, renewable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Purpose differs: assessment vs actual treatment under section.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Section 2 = assessment (28 days); Section 3 = treatment (6 months renewable)"
},
        },
        {
          id: "edxbtechsc-u8-l2-mha-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) What is meant by 'compulsory detention' under the MHA? (b) Name the legislation. (c) State the criteria for detention. (d) Describe two safeguards protecting detained patients. (e) Explain why the MHA is described as balancing individual rights with public safety.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MHA balance",
                              "statement": "Compulsory powers balanced by legal safeguards and patient rights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Legal authority to hold someone in hospital against their will.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mental Health Act 1983 (amended 2007).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Mental disorder of nature/degree warranting detention for health/safety or protection of others.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Two safeguards: nearest relative rights, tribunal appeals, independent reviews, advocates.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Detention protects person and others but restricts liberty — safeguards restore balance.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "MHA allows justified compulsory detention with safeguards for patient rights."
},
        },
        {
          id: "edxbtechsc-u8-l2-mha-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A care worker finds a service user in acute psychosis in a public park, agitated and shouting that they will 'end it all'. (a) State the relevant MHA power for removing them to safety. (b) Explain what happens next under that power. (c) Describe two actions the care worker should take immediately. (d) Explain why Section 5(2) might be used by the receiving doctor.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "MHA emergency powers",
                              "statement": "Section 136 removes to place of safety; Section 5(2) is a doctor's holding power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Section 136 — police power to remove from public place to place of safety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Taken to a place of safety (e.g. police station or hospital) for assessment, max 24 hours (extendable).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two actions: stay with person, call emergency services/AMHP, keep safe distance, do not argue with delusions.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(d) Section 5(2) lets a doctor hold the person for up to 72 hours pending formal MHA assessment.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Section 136 removes to safety; Section 5(2) holds up to 72 hours for assessment."
},
        },
        {
          id: "edxbtechsc-u8-l2-mha-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss compulsory powers under the Mental Health Act 1983/2007. Your answer should cover: (a) when the MHA applies; (b) the roles of the AMHP and doctors; (c) Sections 2, 3 and 5(2) and their durations; (d) three safeguards for detained patients; (e) arguments for and against compulsory detention; (f) how care workers should respond to a person at risk of being sectioned.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Compulsory detention",
                              "statement": "Legal powers to detain, balanced by safeguards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Mental disorder of nature/degree warranting detention for health/safety or others' protection.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) AMHP applies and coordinates assessment; two doctors provide medical opinions.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Section 2 = 28 days assessment; Section 3 = 6 months treatment renewable; Section 5(2) = 72-hour holding power.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Safeguards: nearest relative, tribunals/appeals, independent reviews, advocates, least restrictive principle.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) For: prevents harm, enables treatment; against: restricts liberty and autonomy.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(f) Calm the person, involve AMHP/GP early, support the person's voice, follow local policy.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "MHA compulsory detention is justified by risk but heavily safeguarded to protect patient rights."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u8-l2-pathway",
      title: "Mental Health Assessment and the Care Pathway",
      skill: "Describe mental health assessment, the Care Programme Approach and crisis intervention.",
      lesson: {
        sections: [
          {
            heading: "Assessment and the Care Programme Approach",
            body: "**Mental health assessment** gathers information about symptoms, history, risk, strengths and social circumstances — often using structured tools. The **Care Programme Approach (CPA)** is the standard framework: (1) assessment of needs, (2) a written **care plan** agreed with the person, (3) allocation of a **key worker**, and (4) regular **review**. The CPA is person-centred — goals are meaningful to the individual.",
          },
          {
            heading: "The care pathway and crisis response",
            body: "The pathway typically runs: recognition of need → GP or self-referral → assessment → treatment (talking therapies, medication, social support) → review and step-down → relapse prevention. **Crisis intervention** focuses on immediate safety: de-escalation, crisis plans agreed in advance, 24-hour crisis lines, and emergency services. Early warning signs and crisis plans reduce the need for compulsory admission.",
          },
        ],
        keyFormulas: [
          { name: "CPA cycle", statement: "Assessment → care plan → key worker → review." },
          { name: "Care pathway", statement: "Recognition → assessment → treatment → review → relapse prevention." },
          { name: "Crisis plan", statement: "Agreed early-warning signs and agreed responses, made while well." },
        ],
        workedExample: {
          problem: "Describe the four stages of the Care Programme Approach for a person diagnosed with bipolar disorder.",
          solution: "Assessment of mental health and social needs; agreed care plan covering medication, therapy and crisis plan; allocation of a key worker for coordination; regular reviews to adjust treatment and monitor recovery.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u8-l2-cp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Care Programme Approach (CPA) consists of which four stages?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Admission, treatment, discharge, follow-up"
                    },
                    {
                              "id": "b",
                              "text": "Assessment, care plan, key worker, review"
                    },
                    {
                              "id": "c",
                              "text": "Diagnosis, medication, therapy, discharge"
                    },
                    {
                              "id": "d",
                              "text": "Referral, triage, treatment, closure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CPA",
                              "statement": "Assessment → care plan → key worker → review."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CPA = four-stage cycle of assessment, planning, coordination and review.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — assessment, plan, key worker, review"
},
        },
        {
          id: "edxbtechsc-u8-l2-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the purpose of a crisis plan in mental health care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Crisis plan",
                              "statement": "Agreed early-warning signs and responses made while the person is well."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies early-warning signs of deterioration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists agreed actions (who to contact, coping strategies) to prevent crisis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pre-agreed responses to early-warning signs to prevent or manage crisis"
},
        },
        {
          id: "edxbtechsc-u8-l2-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three features of a person-centred mental health care plan.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Person-centred care plan",
                              "statement": "Plan reflects the individual's goals, strengths and preferences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Goals are meaningful to the person, not imposed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes strengths, preferences, social support and crisis plan.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Developed and reviewed with the person actively involved.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-centred plans reflect individual goals, strengths and preferences."
},
        },
        {
          id: "edxbtechsc-u8-l2-cp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define mental health assessment. (b) Name four areas it should cover. (c) Explain the role of the key worker in the CPA. (d) Describe how reviews should be conducted. (e) State why the care plan should include a crisis plan.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mental health assessment",
                              "statement": "Structured gathering of needs, risks and strengths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Systematic gathering of information about symptoms, needs and circumstances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Any four: symptoms, history, risk, strengths, social circumstances, medication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Coordinates care, single point of contact, monitors plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Regular, person-centred, evidence-based, adjusts plan as needed.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(e) Crisis plans enable early response and reduce need for compulsory powers.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Assessment → plan → key worker → review, all person-centred with crisis planning."
},
        },
        {
          id: "edxbtechsc-u8-l2-cp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A person with recurrent depression reports they are 'slipping again' — sleeping badly, withdrawing, and having dark thoughts. (a) Identify this as a crisis situation or early-warning stage. (b) Explain three actions the key worker should take. (c) Describe how the care plan should be reviewed. (d) State when compulsory powers might become relevant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Crisis prevention and response",
                              "statement": "Early-warning signs trigger agreed plan actions before crisis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Early-warning stage — signs of relapse before full crisis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three actions: contact GP/psychiatrist, activate crisis plan, increase support, review medication, assess risk of self-harm.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(c) Review assessment, adjust treatment, strengthen support network, update crisis plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) If risk of harm to self/others and unable to engage voluntarily, MHA powers may be considered.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Act on early-warning signs via the care plan; escalate to MHA only if risk requires it."
},
        },
        {
          id: "edxbtechsc-u8-l2-cp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the mental health care pathway and the Care Programme Approach. Your answer should cover: (a) the stages of the care pathway from recognition to recovery; (b) what a mental health assessment involves; (c) the four stages of the CPA; (d) the role of the key worker; (e) how crisis planning fits into the pathway; (f) why a person-centred approach improves outcomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mental health care pathway",
                              "statement": "Structured journey from recognition through treatment to recovery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Recognition → GP/self-referral → assessment → treatment → review/step-down → relapse prevention.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Assessment covers symptoms, history, risk, strengths, social needs, medication.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) CPA: assessment, care plan, key worker, review.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Key worker coordinates care and is single point of contact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Crisis plans agreed while well enable early intervention and prevent compulsory admission.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(f) Person-centred goals increase engagement, adherence and recovery.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "The CPA provides a structured, person-centred pathway from assessment to recovery with crisis planning."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u8-l2-notes",
      title: "Mental Health Law and Care Pathway — notes",
      summary: "MHA 1983 allows compulsory detention (Sections 2, 3, 5(2), 136); the CPA structures assessment, planning, key worker and review.",
      sections: [
        { heading: "MHA powers", body: "Section 2 = 28-day assessment; Section 3 = 6-month treatment; Section 5(2) = 72-hour holding; Section 136 = police removal to safety." },
        { heading: "Safeguards", body: "Two doctors + AMHP required; nearest relative, tribunals and reviews protect patient rights." },
        { heading: "CPA", body: "Assessment → care plan → key worker → review, with crisis plans agreed while the person is well." },
      ],
    },
  ],
};
