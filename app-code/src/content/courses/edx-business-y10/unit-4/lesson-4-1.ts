import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ebz10-u4-lesson-4-1",
  code: "4-1",
  title: "Workforce Planning, Recruitment and Selection",
  goal: "I CAN plan staffing needs and explain recruitment, selection and induction methods.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources Management"],
  
  vocabulary: [
    { term: "Workforce planning", definition: "Forecasting the number and type of employees a business will need." },
    { term: "Job analysis", definition: "Examining the tasks, duties and skills required for a job." },
    { term: "Job description", definition: "Document setting out the main duties and responsibilities of a job." },
    { term: "Person specification", definition: "Document listing the qualifications, skills and qualities needed for a job." },
    { term: "Internal recruitment", definition: "Filling vacancies from within the existing workforce." },
    { term: "External recruitment", definition: "Filling vacancies from outside the organisation." },
    { term: "Induction", definition: "Introduction given to new employees about the organisation, job and rules." },
  ],
  concepts: [
    {
      id: "ebz10-u4-workforce-planning",
      title: "Workforce Planning and Job Analysis",
      skill: "Forecast staffing requirements and use job analysis to define roles.",
      lesson: {
        sections: [
          {
            heading: "Why workforce planning matters",
            body: "Businesses must predict how many employees they need, what skills are required and when recruitment should happen. Poor planning can cause labour shortages, excessive wage bills or missed opportunities. Planning considers business growth, technology, seasonal demand, employee turnover and available skills.",
          },
          {
            heading: "Job analysis",
            body: "Job analysis breaks a role into its tasks, responsibilities, working conditions and required skills. It produces a **job description** and a **person specification**. The job description tells applicants what the job involves; the person specification tells them what qualifications and personal qualities are needed.",
          },
          {
            heading: "Using workforce data",
            body: "Businesses use sales forecasts, production plans, staff turnover records and skills audits to estimate future labour demand. They compare this with the current workforce and identify gaps before advertising vacancies.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A café expects demand to rise by 20% in summer. How should it plan staffing?",
          solution: "Forecast extra staff hours, identify skills needed, decide whether to recruit part-time seasonal workers and start recruitment early enough to train them.",
        },
      },
      questions: [
        {
          id: "ebz10-u4-wfp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is job analysis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Paying employees for overtime"
                    },
                    {
                              "id": "b",
                              "text": "Examining the tasks, duties and skills needed for a job"
                    },
                    {
                              "id": "c",
                              "text": "Listing all employees in the company"
                    },
                    {
                              "id": "d",
                              "text": "Checking whether staff are punctual"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Job analysis",
                              "statement": "Analysis of the duties and requirements of a job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Job analysis examines tasks, duties and required skills for a role.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Examining the tasks, duties and skills needed for a job",
          "commonErrors": [
                    "Confusing job analysis with payroll or attendance monitoring."
          ]
},
        },
        {
          id: "ebz10-u4-wfp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three factors that influence workforce planning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Workforce planning",
                              "statement": "Staffing needs depend on demand, skills, turnover and technology."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Business growth or falling demand changes the number of employees needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "New skills may be needed as technology or products change.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employee turnover, seasonal peaks and recruitment lead times affect planning.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Demand forecasts, skills requirements, turnover and seasonal demand.",
          "commonErrors": [
                    "Listing unrelated business objectives.",
                    "No link to future staffing needs."
          ]
},
        },
        {
          id: "ebz10-u4-wfp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business uses both a job description and a person specification when recruiting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Job description vs person specification",
                              "statement": "One describes the job; the other describes the ideal employee."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A job description sets out duties, responsibilities and working conditions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It helps applicants decide whether the role suits them and reduces unsuitable applications.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A person specification lists qualifications, skills, experience and personal qualities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It gives a fair basis for shortlisting candidates and helps interview questions.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Job description defines the role; person specification defines the required person.",
          "commonErrors": [
                    "Treating both documents as the same.",
                    "No link to recruitment decisions."
          ]
},
        },
        {
          id: "ebz10-u4-wfp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A secondary school expects enrolment to rise next year and may need more teaching and support staff.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two workforce planning factors the school should consider.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two recruitment approaches it could use.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Staff planning for growth",
                              "statement": "Forecast demand, then choose an appropriate recruitment route."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Expected enrolment increase means more pupils and possibly more classes.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It must also consider required skills, qualifications and current staff vacancies.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advertise externally for qualified teachers through job boards or recruitment agencies.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Promote or redeploy existing staff for support roles where suitable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Plan for higher demand and skills, then recruit externally for specialists and internally for suitable roles.",
          "commonErrors": [
                    "No connection to enrolment growth.",
                    "Recruitment suggestion not suited to the role."
          ]
},
        },
        {
          id: "ebz10-u4-wfp-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A retailer expects a 30% rise in sales during the December holiday period.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two staffing problems this seasonal increase could create.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend a staffing plan for the peak period.",
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
                              "name": "Seasonal staffing",
                              "statement": "Demand peaks require extra labour, training and flexible contracts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sales and customer service may exceed current staff capacity.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Finding and training temporary staff quickly can be difficult.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Recruit seasonal staff early using temporary or part-time contracts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use existing staff overtime and schedule breaks to cover peaks safely.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Forecast weekly demand so staffing matches busy periods rather than the whole year.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Recruit seasonal staff early, use flexible hours and match staffing to weekly peaks.",
          "commonErrors": [
                    "No seasonal staffing strategy.",
                    "Ignoring training or welfare needs."
          ]
},
        },
        {
          id: "ebz10-u4-wfp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing technology company plans to open a second office and hire 25 employees.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what job analysis would involve for the new roles.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the purpose of a job description and a person specification.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Compare internal and external recruitment for this expansion.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend one recruitment approach and justify it.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Workforce expansion",
                              "statement": "Analyse roles, document requirements and choose the best recruitment route."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Identify each new role's tasks, responsibilities and working conditions.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Determine skills, qualifications and experience required.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A job description explains duties and expectations of the job.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "A person specification explains the ideal candidate's qualifications and qualities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Internal recruitment is quicker and motivates staff but may limit the talent pool.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "External recruitment brings new skills and ideas but takes longer and costs more.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Recommend a balanced approach: promote suitable internal staff and recruit externally for specialist skills.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Analyse roles, produce job documents, compare internal/external routes and use a balanced recruitment plan.",
          "commonErrors": [
                    "No job analysis detail.",
                    "No justified recommendation."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u4-recruitment-selection",
      title: "Recruitment and Selection Methods",
      skill: "Choose appropriate recruitment and selection methods for different roles.",
      lesson: {
        sections: [
          {
            heading: "Recruitment methods",
            body: "Businesses advertise vacancies through job websites, newspapers, social media, recruitment agencies and careers events. Internal vacancies can be filled through promotion, transfer or redundancy pools. External recruitment widens the talent pool but may cost more and take longer.",
          },
          {
            heading: "Selection methods",
            body: "Common selection methods include application forms, CVs, interviews, aptitude tests, psychometric tests and practical assessments. Interviews allow two-way communication but can be biased; tests can be objective but may not reflect real job performance.",
          },
          {
            heading: "Induction and training",
            body: "After selection, new employees should receive an **induction** covering contracts, health and safety, company policies, role expectations and introductions to colleagues. Induction reduces early mistakes and improves retention.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A hotel needs six front-desk staff quickly. Which recruitment and selection approach is suitable?",
          solution: "Advertise online and through local colleges, use application forms and group interviews, then offer induction and on-the-job training.",
        },
      },
      questions: [
        {
          id: "ebz10-u4-rec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is internal recruitment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hiring candidates from outside the business"
                    },
                    {
                              "id": "b",
                              "text": "Using a recruitment agency overseas"
                    },
                    {
                              "id": "c",
                              "text": "Filling a vacancy from within the existing workforce"
                    },
                    {
                              "id": "d",
                              "text": "Advertising in a national newspaper"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal recruitment",
                              "statement": "Vacancies filled through existing employees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal recruitment uses promotion, transfer or existing staff rather than external applicants.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Filling a vacancy from within the existing workforce",
          "commonErrors": [
                    "Confusing internal recruitment with external recruitment."
          ]
},
        },
        {
          id: "ebz10-u4-rec-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits of internal recruitment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Internal recruitment",
                              "statement": "Uses known employees and creates career progression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees already know the organisation, culture and procedures.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It can be quicker and cheaper than external recruitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It motivates staff by showing promotion and development opportunities.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Faster, cheaper, motivated staff and known capabilities.",
          "commonErrors": [
                    "Only listing benefits without explanation.",
                    "Confusing with external recruitment."
          ]
},
        },
        {
          id: "ebz10-u4-rec-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare application forms and interviews as selection methods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Application forms vs interviews",
                              "statement": "Forms screen applicants; interviews assess suitability interactively."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Application forms collect standard information cheaply and quickly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They are easy to compare but may not reveal motivation or communication skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Interviews allow follow-up questions and two-way communication.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They can be biased or influenced by appearance unless structured carefully.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Forms are efficient screening tools; interviews provide deeper assessment but can be subjective.",
          "commonErrors": [
                    "No comparison.",
                    "Only advantages or only disadvantages."
          ]
},
        },
        {
          id: "ebz10-u4-rec-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A café needs two part-time baristas and one head chef.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a recruitment method for the baristas and explain why.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a recruitment method for the head chef and explain why.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Role-specific recruitment",
                              "statement": "Match recruitment channels and selection methods to the role."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Advertise locally online or through colleges because baristas are relatively easy to recruit.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Use application forms and short practical interviews or trial shifts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use specialist job websites, agencies or headhunting because the role is senior and scarce.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use structured interviews and references or a practical cooking assessment.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use quick local recruitment for baristas; use specialist channels and rigorous assessment for the chef.",
          "commonErrors": [
                    "Same method for both roles.",
                    "No link to role requirements."
          ]
},
        },
        {
          id: "ebz10-u4-rec-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company currently selects all staff using one unstructured interview.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two limitations of relying only on interviews.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend two additional selection methods and justify them.",
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
                              "name": "Selection validity",
                              "statement": "Multiple methods reduce bias and improve prediction of job performance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Interviews can be influenced by interviewer bias or first impressions.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Candidates may give rehearsed answers and the interview may not test real skills.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add application forms or CV screening to shortlist objectively.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add aptitude, numerical or practical tests relevant to the job.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use references or trial tasks to verify claims and performance.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Interviews alone are biased and limited; combine screening, tests and practical assessment.",
          "commonErrors": [
                    "No limitation explained.",
                    "Suggestions unrelated to the role."
          ]
},
        },
        {
          id: "ebz10-u4-rec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A manufacturing firm must hire five apprentices and one finance manager.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend a recruitment method for the apprentices.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend a recruitment method for the finance manager.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two selection methods for the finance manager.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the firm should provide induction for both groups.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Recruitment planning",
                              "statement": "Different roles need different sourcing and assessment methods."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Partner with colleges or training providers and advertise apprenticeship programmes locally.",
                              "marks": 3,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use specialist job sites, professional networks or agencies for an experienced finance manager.",
                              "marks": 3,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use structured interviews with technical finance questions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use numerical or accounting tests plus references or a case-study assessment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Induction explains policies, safety, culture and role expectations.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "d",
                              "reasoning": "It reduces early errors, improves retention and helps apprentices and managers integrate quickly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Use education partnerships for apprentices, specialist channels and rigorous tests for the manager, plus induction for both.",
          "commonErrors": [
                    "No distinction between roles.",
                    "No justification or induction value."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u4-recruitment-notes",
      title: "Workforce planning, recruitment and selection — notes",
      summary: "Plan staffing from demand forecasts, define jobs through job analysis, then choose recruitment and selection methods suited to each role.",
      sections: [
        { heading: "Workforce planning", body: "Forecast demand, skills and turnover before recruiting." },
        { heading: "Job documents", body: "Job description = duties; person specification = ideal candidate." },
        { heading: "Selection", body: "Use several methods: forms, interviews, tests, references and practical assessment." },
        { heading: "Induction", body: "Introduce policies, safety, role expectations and colleagues to new staff." },
      ],
    },
  ],
};
