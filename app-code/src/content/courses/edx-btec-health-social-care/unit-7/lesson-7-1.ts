import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edxbtechsc-u7-lesson-7-1",
  code: "7-1",
  title: "Safeguarding Frameworks and Legislation",
  goal: "I CAN explain the safeguarding framework, key legislation and the duties of care workers in protecting adults and children.",
  standards: ["BTEC L3 National Health and Social Care — Unit 7: Safeguarding and Care Planning in Practice"],
  
  vocabulary: [
    { term: "Safeguarding", definition: "Protecting people's health, wellbeing and human rights, and enabling them to live free from harm, abuse and neglect." },
    { term: "Adult at risk", definition: "Person aged 18+ who has needs for care and support, is experiencing or at risk of abuse or neglect, and as a result cannot protect themselves." },
    { term: "Child protection", definition: "The process of protecting children from abuse, neglect and exploitation; involves statutory services and safeguarding partners." },
    { term: "Making Safeguarding Personal", definition: "Approach putting the person at the centre of safeguarding, focusing on their wishes and outcomes rather than process." },
    { term: "Duty of care", definition: "Legal and moral obligation to act in the best interests of those in your care and avoid harm." },
    { term: "Capacity", definition: "A person's ability to make a specific decision at a specific time, assessed under the Mental Capacity Act 2005." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u7-l1-framework",
      title: "The safeguarding framework",
      skill: "Explain the safeguarding framework for adults and children and the principles of Making Safeguarding Personal.",
      lesson: {
        sections: [
          {
            heading: "Adult safeguarding",
            body: "The **Care Act 2014** sets out adult safeguarding duties: local authorities must inquire when they suspect an adult at risk is experiencing or at risk of abuse or neglect and the adult cannot protect themselves. Key principles:\n\n- **Empowerment** — people are supported to make their own decisions and give informed consent.\n- **Prevention** — action taken before harm occurs.\n- **Proportionality** — response is proportionate to risk.\n- **Protection** — support for those most at risk.\n- **Partnership** — local services work together.\n- **Accountability** — transparency and accountability in safeguarding.\n\n**Making Safeguarding Personal** ensures the person's views, wishes and desired outcomes drive the safeguarding plan.",
          },
          {
            heading: "Child safeguarding",
            body: "**Children Act 1989/2004** and **Working Together to Safeguard Children** set the framework. The four categories of abuse: **physical, emotional, sexual and neglect**. Key principles: the child's welfare is paramount; safeguarding is everyone's responsibility; early help prevents escalation.\n\nEveryone who works with children has a duty to recognise signs of abuse and report concerns to the designated safeguarding lead or children's services. **Female genital mutilation (FGM)** and **child sexual exploitation (CSE)** are specific safeguarding concerns requiring specialist responses.",
          },
        ],
        keyFormulas: [
          { name: "Safeguarding principles", statement: "empowerment, prevention, proportionality, protection, partnership, accountability" },
          { name: "Adult at risk", statement: "18+, care needs, abuse/neglect risk, cannot self-protect" },
          { name: "Child abuse categories", statement: "physical, emotional, sexual, neglect" },
        ],
        workedExample: {
          problem: "A care worker notices unexplained bruising on a client's arm. Explain how the safeguarding framework guides the response.",
          solution: "The worker should not ignore or confront the client. They should record the observation accurately, report to their manager/designated safeguarding lead, and follow local safeguarding procedures — which may lead to a Section 42 enquiry under the Care Act. The adult's wishes are considered throughout (Making Safeguarding Personal), but the worker has a duty to escalate concerns.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-saf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'safeguarding' and state who it applies to.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Safeguarding",
                              "statement": "Protecting health, wellbeing and rights from harm/abuse/neglect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Safeguarding defined.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Applies to children and adults at risk.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Protecting people from harm, abuse and neglect — applies to children and adults at risk."
},
        },
        {
          id: "edxbtechsc-u7-saf-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the six principles of adult safeguarding under the Care Act 2014.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Safeguarding principles",
                              "statement": "Six principles underpin adult safeguarding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Empowerment, prevention, proportionality, protection, partnership, accountability.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Empowerment, prevention, proportionality, protection, partnership, accountability."
},
        },
        {
          id: "edxbtechsc-u7-saf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'Making Safeguarding Personal' and why it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Making Safeguarding Personal",
                              "statement": "Person-centred safeguarding outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Puts the person's wishes and desired outcomes at the centre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Focuses on what the person wants to achieve, not just process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Respects autonomy and promotes empowerment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Safeguarding centred on the person's wishes and outcomes, respecting their autonomy."
},
        },
        {
          id: "edxbtechsc-u7-saf-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the duty of care and describe two situations where a care worker might face a conflict between duty of care and a client's wishes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Duty of care",
                              "statement": "Obligation to act in best interests and avoid harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Duty of care defined: act in best interests, avoid harm, work within competence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conflict 1, e.g. client refusing medication that worker believes necessary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conflict 2, e.g. client wanting to go out alone despite fall risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolution: assess capacity, involve family/professionals, follow procedures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Duty of care = act in best interests; conflicts arise with autonomy and are managed via capacity assessment and procedures."
},
        },
        {
          id: "edxbtechsc-u7-saf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the four categories of child abuse and give one sign of each that a care worker might observe.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Child abuse categories",
                              "statement": "Physical, emotional, sexual, neglect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Physical abuse defined + sign, e.g. unexplained bruises.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Emotional abuse defined + sign, e.g. withdrawal, low self-esteem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sexual abuse defined + sign, e.g. inappropriate behaviour, distress.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Neglect defined + sign, e.g. poor hygiene, hunger, untreated illness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All signs require reporting to designated safeguarding lead.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Four abuse categories each with a possible observable sign."
},
        },
        {
          id: "edxbtechsc-u7-saf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) the definition of safeguarding;\n(b) the six safeguarding principles;\n(c) what 'adult at risk' means;\n(d) the four categories of child abuse;\n(e) the role of the Mental Capacity Act in safeguarding;\n(f) why 'Making Safeguarding Personal' matters;\n(g) the duty of every care worker to report concerns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Safeguarding overview",
                              "statement": "Framework, principles, legislation, duties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Safeguarding defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Six principles listed.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Adult at risk defined.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Four abuse categories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) MCA: assess capacity for specific decisions; best interests if lacking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) MSP puts person at centre of safeguarding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Everyone must report concerns — duty to protect.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete safeguarding framework overview."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u7-l1-legislation",
      title: "Key legislation in safeguarding",
      skill: "Describe the main legislation protecting adults and children and how it affects care practice.",
      lesson: {
        sections: [
          {
            heading: "Adult protection legislation",
            body: "**Care Act 2014**: adult safeguarding duties, wellbeing duty, personal budgets, carer's assessment. **Mental Capacity Act 2005**: presumption of capacity, best interests decisions, lasting power of attorney, deprivation of liberty safeguards (DoLS). **Human Rights Act 1998**: right to life, dignity, privacy, non-discrimination. **Equality Act 2010**: prohibits discrimination in services. **Data Protection Act 2018/GDPR**: protects personal information; information sharing must be lawful and proportionate.\n\n**Safeguarding Vulnerable Groups Act 2006**: vetting and barring scheme (DBS checks) for those working with vulnerable people.",
          },
          {
            heading: "Child protection legislation",
            body: "**Children Act 1989**: welfare of the child is paramount; parental responsibility. **Children Act 2004**: Every Child Matters — five outcomes (be healthy, stay safe, enjoy and achieve, make a positive contribution, achieve economic wellbeing). **Working Together to Safeguard Children**: statutory guidance on inter-agency cooperation.\n\n**Female Genital Mutilation Act 2003**: criminalises FGM; mandatory reporting for professionals. **Modern Slavery Act 2015**: addresses trafficking and exploitation. All legislation requires workers to know their duties and follow local safeguarding procedures.",
          },
        ],
        keyFormulas: [
          { name: "Care Act 2014", statement: "adult safeguarding, wellbeing duty, personal budgets" },
          { name: "Mental Capacity Act", statement: "presumption of capacity, best interests, DoLS" },
          { name: "Every Child Matters", statement: "five outcomes for children's wellbeing" },
        ],
        workedExample: {
          problem: "Explain how the Mental Capacity Act affects a care worker supporting a client who wants to refuse a bath.",
          solution: "The worker must assume the client has capacity unless assessed otherwise. Capacity is decision-specific — the client may have capacity to refuse a bath even if they struggle with other tasks. If they have capacity, their decision must be respected (even if it seems unwise). If they lack capacity, the worker must act in their best interests, involving family and professionals, and consider least restrictive options.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u7-leg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two key pieces of legislation that protect adults from abuse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Adult protection legislation",
                              "statement": "Care Act, MCA, Human Rights Act, Equality Act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two, e.g. Care Act 2014 and Mental Capacity Act 2005.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any two: Care Act 2014, Mental Capacity Act 2005, Human Rights Act 1998, Equality Act 2010."
},
        },
        {
          id: "edxbtechsc-u7-leg-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the five outcomes of 'Every Child Matters'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Every Child Matters",
                              "statement": "Five wellbeing outcomes for children."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Be healthy, stay safe, enjoy and achieve, make a positive contribution, achieve economic wellbeing.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Be healthy; stay safe; enjoy and achieve; make a positive contribution; achieve economic wellbeing."
},
        },
        {
          id: "edxbtechsc-u7-leg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the presumption of capacity under the Mental Capacity Act and why it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mental Capacity Act",
                              "statement": "Presume capacity unless assessed otherwise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every adult is presumed to have capacity unless proven otherwise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capacity is decision-specific and time-specific.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Matters because it protects autonomy and prevents unnecessary intervention.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Presumption of capacity protects autonomy; assessment is decision-specific."
},
        },
        {
          id: "edxbtechsc-u7-leg-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the Data Protection Act 2018 affects information sharing in health and social care.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data Protection Act",
                              "statement": "Protects personal data; sharing must be lawful."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personal data must be processed lawfully, fairly and transparently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Information should only be shared when necessary and proportionate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Safeguarding may require sharing without consent if risk is serious.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Workers must follow local information-sharing policies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data must be shared lawfully and proportionately; safeguarding may override consent."
},
        },
        {
          id: "edxbtechsc-u7-leg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how the Care Act 2014 and Mental Capacity Act 2005 work together in adult safeguarding, giving an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Legislative interplay",
                              "statement": "Care Act = safeguarding duties; MCA = capacity framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Care Act: local authority duty to inquire into abuse/neglect of adults at risk.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MCA: assess whether adult has capacity for specific decisions.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If lacks capacity: act in best interests; if has capacity: respect decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: client refusing care — assess capacity, then act accordingly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Care Act triggers safeguarding; MCA determines capacity and best-interests response."
},
        },
        {
          id: "edxbtechsc-u7-leg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) three key adult protection laws;\n(b) the role of the Mental Capacity Act;\n(c) two child protection laws;\n(d) the purpose of DBS checks;\n(e) why information sharing must be proportionate;\n(f) the duty to report under FGM legislation;\n(g) how legislation affects daily care practice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Safeguarding legislation",
                              "statement": "Multiple laws protect adults and children."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Three adult laws, e.g. Care Act, MCA, Human Rights Act.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) MCA role: capacity assessment, best interests, DoLS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two child laws, e.g. Children Act 1989/2004, Working Together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) DBS checks vet workers for suitability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Proportionate sharing = only necessary information, lawful basis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) FGM: mandatory reporting by professionals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Legislation shapes daily practice: documentation, reporting, capacity checks.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete overview of safeguarding legislation and its practice impact."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u7-safeguarding-notes",
      title: "Safeguarding frameworks and legislation — notes",
      summary: "Care Act + MCA protect adults; Children Act + Working Together protect children. Everyone has a duty to report.",
      sections: [
        { heading: "Key idea", body: "Safeguarding is everyone's responsibility — know the framework and report concerns." },
        { heading: "Legislation", body: "Care Act (adults), Children Act (children), MCA (capacity), Data Protection (information)." },
      ],
    },
  ],
};
