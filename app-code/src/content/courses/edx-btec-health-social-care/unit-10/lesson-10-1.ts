import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbtechsc-u10-lesson-10-1",
  code: "10-1",
  title: "Understanding Learning Disability",
  goal: "I CAN describe learning disability, its causes, impact and the legislative framework.",
  standards: ["BTEC L3 National Health and Social Care — Unit 10: Learning Disability and Autism (extended certificate)"],
  
  vocabulary: [
    { term: "Learning disability", definition: "A significantly reduced ability to understand new or complex information, learn new skills, or cope independently — with lifelong impact on everyday life." },
    { term: "Intellectual disability", definition: "Reduced intellectual functioning and adaptive behaviour, often used interchangeably with learning disability." },
    { term: "Adaptive behaviour", definition: "Skills needed for everyday life — communication, self-care, social skills, safety." },
    { term: "SEND", definition: "Special Educational Needs and Disabilities — the framework for supporting children with additional needs in education." },
    { term: "EHCP", definition: "Education, Health and Care Plan — a legal document setting out a child's special educational needs and support." },
    { term: "Person-centred planning", definition: "Planning care around the individual's wishes, strengths and goals." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u10-l1-understanding",
      title: "What is Learning Disability? Causes and Impact",
      skill: "Define learning disability, describe causes and explain its impact on daily life.",
      lesson: {
        sections: [
          {
            heading: "Definition and causes",
            body: "**Learning disability** means a significantly reduced ability to understand new or complex information, learn new skills, or cope independently, with a **lifelong impact** on everyday life. It is defined by reduced intellectual functioning **and** impaired **adaptive behaviour** (communication, self-care, social skills, safety). Causes: **genetic** (Down's syndrome, fragile X), **prenatal** (alcohol — FASD, infection, malnutrition), **perinatal** (premature birth, birth asphyxia) and **postnatal** (illness, injury, neglect).",
          },
          {
            heading: "Impact and the social model",
            body: "Learning disability affects learning, communication, social skills and independence — but impact depends on support and environment. Many people with learning disability live independently, work, have relationships and contribute. The **social model** says disability results from barriers in society (inaccessible information, discrimination, lack of support), not just impairment. Person-centred support enables people to live the lives they choose.",
          },
        ],
        keyFormulas: [
          { name: "Learning disability", statement: "Reduced ability to understand/learn/cope + lifelong impact." },
          { name: "Two criteria", statement: "Reduced intellectual functioning AND impaired adaptive behaviour." },
          { name: "Causes", statement: "Genetic, prenatal, perinatal, postnatal." },
        ],
        workedExample: {
          problem: "A child with Down's syndrome struggles with reading but communicates well and has friends. Does this indicate learning disability?",
          solution: "Yes — Down's syndrome causes reduced intellectual functioning and adaptive challenges. Support should build on strengths (communication, sociability) while addressing learning needs.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l1-ud-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Learning disability is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A temporary difficulty with reading"
                    },
                    {
                              "id": "b",
                              "text": "A significantly reduced ability to understand, learn and cope, with lifelong impact"
                    },
                    {
                              "id": "c",
                              "text": "A mental illness"
                    },
                    {
                              "id": "d",
                              "text": "A physical impairment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Learning disability",
                              "statement": "Reduced ability to understand, learn and cope with lifelong impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LD = significantly reduced ability + lifelong impact on everyday life.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — reduced ability with lifelong impact"
},
        },
        {
          id: "edxbtechsc-u10-l1-ud-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two criteria for diagnosing learning disability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "LD criteria",
                              "statement": "Reduced intellectual functioning + impaired adaptive behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two criteria: significantly reduced intellectual functioning AND impaired adaptive behaviour.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reduced intellectual functioning + impaired adaptive behaviour"
},
        },
        {
          id: "edxbtechsc-u10-l1-ud-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three causes of learning disability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Causes of LD",
                              "statement": "Genetic, prenatal, perinatal, postnatal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genetic: Down's syndrome, fragile X.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prenatal: alcohol (FASD), infection, malnutrition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Perinatal/postnatal: premature birth, illness, injury, neglect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Genetic, prenatal, perinatal and postnatal causes."
},
        },
        {
          id: "edxbtechsc-u10-l1-ud-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define learning disability. (b) State the two diagnostic criteria. (c) Describe three causes. (d) Explain how the social model views disability. (e) Explain why person-centred support matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Learning disability",
                              "statement": "Reduced ability + adaptive impairment; social model sees barriers in society."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Significantly reduced ability to understand, learn and cope with lifelong impact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Reduced intellectual functioning + impaired adaptive behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three causes: genetic, prenatal, perinatal/postnatal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Social model: disability results from barriers (access, discrimination, lack of support), not just impairment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Person-centred support respects choices, enables independence and better outcomes.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Learning disability = reduced ability + adaptive impairment; support should be person-centred."
},
        },
        {
          id: "edxbtechsc-u10-l1-ud-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A young adult with learning disability wants to live independently but struggles with cooking and budgeting. (a) Identify the support need. (b) Explain how person-centred planning would help. (c) Describe three supports that could enable independence. (d) Explain how the social model applies here.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Supporting independence",
                              "statement": "Person-centred planning + targeted support enables choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Support need: daily living skills (cooking, budgeting) for independent living.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Person-centred planning: identify goals, strengths, support needed, review regularly.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three supports: skills training, support worker, technology aids, pictorial guides, community classes.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(d) Social model: barriers (lack of accessible info, support) create disability — remove them.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Person-centred planning + targeted support enables independent living."
},
        },
        {
          id: "edxbtechsc-u10-l1-ud-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss learning disability. Your answer should cover: (a) the definition; (b) the two diagnostic criteria; (c) causes; (d) impact on daily life; (e) the social model; (f) person-centred support; (g) common misconceptions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Learning disability",
                              "statement": "Reduced ability + adaptive impairment; person-centred support enables choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Significantly reduced ability to understand, learn and cope with lifelong impact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Reduced intellectual functioning + impaired adaptive behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Causes: genetic, prenatal, perinatal, postnatal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Impact: learning, communication, social skills, independence — varies with support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Social model: barriers in society create disability.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(f) Person-centred support: respect choices, enable independence, review goals.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Misconceptions: 'can't learn', 'always dependent', 'only children' — all false.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Learning disability is lifelong but with person-centred support people can live independently and contribute."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u10-l1-legislation",
      title: "Legislation and Support Frameworks",
      skill: "Describe legislation and frameworks supporting people with learning disability.",
      lesson: {
        sections: [
          {
            heading: "Education framework",
            body: "The **SEND Code of Practice** guides education for children with special educational needs. An **EHCP** (Education, Health and Care Plan) is a legal document for children with significant needs, setting out required support across education, health and social care. Support ranges from mainstream with adjustments to specialist provision. Early identification enables early intervention.",
          },
          {
            heading: "Rights and protection",
            body: "The **Equality Act 2010** prohibits discrimination and requires **reasonable adjustments**. The **Care Act 2014** sets wellbeing duties and safeguarding responsibilities. The **Mental Capacity Act 2005** protects decision-making for people who lack capacity — assess capacity, support decision-making, act in best interests. The **Human Rights Act 1998** guarantees rights to dignity, privacy and non-discrimination.",
          },
        ],
        keyFormulas: [
          { name: "EHCP", statement: "Legal document for children's SEND support across education, health, social care." },
          { name: "Equality Act 2010", statement: "Prohibits discrimination; requires reasonable adjustments." },
          { name: "MCA 2005", statement: "Assess capacity, support decisions, act in best interests." },
        ],
        workedExample: {
          problem: "A child with learning disability needs extra support in school. What legal framework applies?",
          solution: "Assess needs under the SEND Code of Practice; if significant, request an EHCP which legally requires the support described to be provided.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u10-l1-lg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An EHCP is:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A medical prescription"
                    },
                    {
                              "id": "b",
                              "text": "A legal document setting out a child's SEND support needs"
                    },
                    {
                              "id": "c",
                              "text": "A type of school"
                    },
                    {
                              "id": "d",
                              "text": "A medication"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "EHCP",
                              "statement": "Legal document for children's SEND support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "EHCP = Education, Health and Care Plan — legally binding support document.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** — legal SEND support document"
},
        },
        {
          id: "edxbtechsc-u10-l1-lg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the Equality Act 2010 require providers to do for people with disabilities?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equality Act 2010",
                              "statement": "Prohibits discrimination; requires reasonable adjustments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prohibit discrimination and make reasonable adjustments to enable access and participation.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prohibit discrimination and make reasonable adjustments"
},
        },
        {
          id: "edxbtechsc-u10-l1-lg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of the Mental Capacity Act 2005 in supporting people with learning disability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MCA 2005",
                              "statement": "Assess capacity, support decisions, act in best interests."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assess whether person can make a specific decision at the time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Support decision-making — provide information, time, communication support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If lacking capacity, act in best interests following MCA principles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "MCA protects decision-making — assess capacity, support choices, act in best interests."
},
        },
        {
          id: "edxbtechsc-u10-l1-lg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define SEND. (b) Explain the purpose of an EHCP. (c) Describe what the Equality Act 2010 requires. (d) State the three key principles of the Mental Capacity Act. (e) Explain why legislation matters for people with learning disability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Legislation for LD",
                              "statement": "Legal frameworks protect rights and require support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SEND = Special Educational Needs and Disabilities framework for children.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) EHCP = legal document setting out required support across education, health, social care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Equality Act: prohibits discrimination, requires reasonable adjustments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) MCA principles: assume capacity, support decisions, act in best interests, least restrictive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Legislation protects rights, requires support and prevents discrimination.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Legislation protects rights and requires support for people with learning disability."
},
        },
        {
          id: "edxbtechsc-u10-l1-lg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school refuses to provide extra support for a child with learning disability, calling it 'unfair to other children'. (a) Identify the legislation that applies. (b) Explain what the school must do. (c) Describe the EHCP process if support is needed. (d) Explain what reasonable adjustments might look like.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Legal support for SEND",
                              "statement": "Equality Act + SEND Code + EHCP protect children's rights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SEND Code of Practice, Equality Act 2010, EHCP if needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) School must make reasonable adjustments and provide support — not optional.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) EHCP process: assess needs, request plan, plan legally requires provision.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Adjustments: extra time, adapted materials, support worker, modified curriculum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Schools must provide reasonable adjustments; EHCP legally requires significant support."
},
        },
        {
          id: "edxbtechsc-u10-l1-lg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss legislation and support frameworks for people with learning disability. Your answer should cover: (a) the SEND framework; (b) the EHCP; (c) the Equality Act 2010; (d) the Mental Capacity Act 2005; (e) the Care Act 2014; (f) why legislation protects rights; (g) how these frameworks support person-centred care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "LD legislation",
                              "statement": "Legal frameworks protect rights, require support and enable person-centred care."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) SEND framework: Code of Practice guides education support for children.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) EHCP: legal document for significant needs across education, health, social care.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Equality Act 2010: prohibits discrimination, requires reasonable adjustments.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) MCA 2005: assess capacity, support decisions, act in best interests.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Care Act 2014: wellbeing duty, safeguarding, adult social care duties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Legislation protects against discrimination and ensures support is a right.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "(g) Frameworks enable person-centred, rights-based care.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Legislation protects rights and requires support — enabling person-centred care."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u10-l1-notes",
      title: "Understanding Learning Disability — notes",
      summary: "Learning disability = reduced ability + adaptive impairment, lifelong; legislation protects rights and requires support.",
      sections: [
        { heading: "Definition", body: "Significantly reduced ability to understand, learn and cope with lifelong impact — two criteria: intellectual functioning + adaptive behaviour." },
        { heading: "Causes", body: "Genetic, prenatal (FASD), perinatal, postnatal — but impact depends on support." },
        { heading: "Legislation", body: "EHCP for children, Equality Act 2010, MCA 2005, Care Act 2014 protect rights." },
      ],
    },
  ],
};
