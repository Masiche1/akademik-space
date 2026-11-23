module.exports = [
  {
    file: "lesson-4-1.ts",
    exportName: "lesson41",
    lesson: {
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
        { term: "Induction", definition: "Introduction given to new employees about the organisation, job and rules." }
      ],
      concepts: [
        {
          id: "ebz10-u4-workforce-planning",
          title: "Workforce Planning and Job Analysis",
          skill: "Forecast staffing requirements and use job analysis to define roles.",
          sections: [
            {
              heading: "Why workforce planning matters",
              body: "Businesses must predict how many employees they need, what skills are required and when recruitment should happen. Poor planning can cause labour shortages, excessive wage bills or missed opportunities. Planning considers business growth, technology, seasonal demand, employee turnover and available skills."
            },
            {
              heading: "Job analysis",
              body: "Job analysis breaks a role into its tasks, responsibilities, working conditions and required skills. It produces a **job description** and a **person specification**. The job description tells applicants what the job involves; the person specification tells them what qualifications and personal qualities are needed."
            },
            {
              heading: "Using workforce data",
              body: "Businesses use sales forecasts, production plans, staff turnover records and skills audits to estimate future labour demand. They compare this with the current workforce and identify gaps before advertising vacancies."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A café expects demand to rise by 20% in summer. How should it plan staffing?",
            solution: "Forecast extra staff hours, identify skills needed, decide whether to recruit part-time seasonal workers and start recruitment early enough to train them."
          },
          questions: [
            {
              id: "ebz10-u4-wfp-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is job analysis?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Paying employees for overtime" },
                  { id: "b", text: "Examining the tasks, duties and skills needed for a job" },
                  { id: "c", text: "Listing all employees in the company" },
                  { id: "d", text: "Checking whether staff are punctual" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Job analysis", statement: "Analysis of the duties and requirements of a job." }],
                steps: [{ reasoning: "Job analysis examines tasks, duties and required skills for a role.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Examining the tasks, duties and skills needed for a job",
                commonErrors: ["Confusing job analysis with payroll or attendance monitoring."]
              }
            },
            {
              id: "ebz10-u4-wfp-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three factors that influence workforce planning.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Workforce planning", statement: "Staffing needs depend on demand, skills, turnover and technology." }],
                steps: [
                  { reasoning: "Business growth or falling demand changes the number of employees needed.", marks: 1, markCode: "AO1" },
                  { reasoning: "New skills may be needed as technology or products change.", marks: 1, markCode: "AO1" },
                  { reasoning: "Employee turnover, seasonal peaks and recruitment lead times affect planning.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Demand forecasts, skills requirements, turnover and seasonal demand.",
                commonErrors: ["Listing unrelated business objectives.", "No link to future staffing needs."]
              }
            },
            {
              id: "ebz10-u4-wfp-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain why a business uses both a job description and a person specification when recruiting.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Job description vs person specification", statement: "One describes the job; the other describes the ideal employee." }],
                steps: [
                  { reasoning: "A job description sets out duties, responsibilities and working conditions.", marks: 1, markCode: "AO1" },
                  { reasoning: "It helps applicants decide whether the role suits them and reduces unsuitable applications.", marks: 1, markCode: "AO2" },
                  { reasoning: "A person specification lists qualifications, skills, experience and personal qualities.", marks: 1, markCode: "AO1" },
                  { reasoning: "It gives a fair basis for shortlisting candidates and helps interview questions.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Job description defines the role; person specification defines the required person.",
                commonErrors: ["Treating both documents as the same.", "No link to recruitment decisions."]
              }
            },
            {
              id: "ebz10-u4-wfp-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A secondary school expects enrolment to rise next year and may need more teaching and support staff.",
              parts: [
                { label: "a", prompt: "Identify two workforce planning factors the school should consider.", marks: 3 },
                { label: "b", prompt: "Suggest two recruitment approaches it could use.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Staff planning for growth", statement: "Forecast demand, then choose an appropriate recruitment route." }],
                steps: [
                  { part: "a", reasoning: "Expected enrolment increase means more pupils and possibly more classes.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It must also consider required skills, qualifications and current staff vacancies.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Advertise externally for qualified teachers through job boards or recruitment agencies.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Promote or redeploy existing staff for support roles where suitable.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Plan for higher demand and skills, then recruit externally for specialists and internally for suitable roles.",
                commonErrors: ["No connection to enrolment growth.", "Recruitment suggestion not suited to the role."]
              }
            },
            {
              id: "ebz10-u4-wfp-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A retailer expects a 30% rise in sales during the December holiday period.",
              parts: [
                { label: "a", prompt: "Explain two staffing problems this seasonal increase could create.", marks: 4 },
                { label: "b", prompt: "Recommend a staffing plan for the peak period.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Seasonal staffing", statement: "Demand peaks require extra labour, training and flexible contracts." }],
                steps: [
                  { part: "a", reasoning: "Sales and customer service may exceed current staff capacity.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Finding and training temporary staff quickly can be difficult.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Recruit seasonal staff early using temporary or part-time contracts.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use existing staff overtime and schedule breaks to cover peaks safely.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Forecast weekly demand so staffing matches busy periods rather than the whole year.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Recruit seasonal staff early, use flexible hours and match staffing to weekly peaks.",
                commonErrors: ["No seasonal staffing strategy.", "Ignoring training or welfare needs."]
              }
            },
            {
              id: "ebz10-u4-wfp-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A growing technology company plans to open a second office and hire 25 employees.",
              parts: [
                { label: "a", prompt: "Explain what job analysis would involve for the new roles.", marks: 3 },
                { label: "b", prompt: "Describe the purpose of a job description and a person specification.", marks: 3 },
                { label: "c", prompt: "Compare internal and external recruitment for this expansion.", marks: 2 },
                { label: "d", prompt: "Recommend one recruitment approach and justify it.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Workforce expansion", statement: "Analyse roles, document requirements and choose the best recruitment route." }],
                steps: [
                  { part: "a", reasoning: "Identify each new role's tasks, responsibilities and working conditions.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Determine skills, qualifications and experience required.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "A job description explains duties and expectations of the job.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "A person specification explains the ideal candidate's qualifications and qualities.", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "Internal recruitment is quicker and motivates staff but may limit the talent pool.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "External recruitment brings new skills and ideas but takes longer and costs more.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Recommend a balanced approach: promote suitable internal staff and recruit externally for specialist skills.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Analyse roles, produce job documents, compare internal/external routes and use a balanced recruitment plan.",
                commonErrors: ["No job analysis detail.", "No justified recommendation."]
              }
            }
          ]
        },
        {
          id: "ebz10-u4-recruitment-selection",
          title: "Recruitment and Selection Methods",
          skill: "Choose appropriate recruitment and selection methods for different roles.",
          sections: [
            {
              heading: "Recruitment methods",
              body: "Businesses advertise vacancies through job websites, newspapers, social media, recruitment agencies and careers events. Internal vacancies can be filled through promotion, transfer or redundancy pools. External recruitment widens the talent pool but may cost more and take longer."
            },
            {
              heading: "Selection methods",
              body: "Common selection methods include application forms, CVs, interviews, aptitude tests, psychometric tests and practical assessments. Interviews allow two-way communication but can be biased; tests can be objective but may not reflect real job performance."
            },
            {
              heading: "Induction and training",
              body: "After selection, new employees should receive an **induction** covering contracts, health and safety, company policies, role expectations and introductions to colleagues. Induction reduces early mistakes and improves retention."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A hotel needs six front-desk staff quickly. Which recruitment and selection approach is suitable?",
            solution: "Advertise online and through local colleges, use application forms and group interviews, then offer induction and on-the-job training."
          },
          questions: [
            {
              id: "ebz10-u4-rec-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is internal recruitment?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Hiring candidates from outside the business" },
                  { id: "b", text: "Using a recruitment agency overseas" },
                  { id: "c", text: "Filling a vacancy from within the existing workforce" },
                  { id: "d", text: "Advertising in a national newspaper" }
                ],
                correctChoiceId: "c"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal recruitment", statement: "Vacancies filled through existing employees." }],
                steps: [{ reasoning: "Internal recruitment uses promotion, transfer or existing staff rather than external applicants.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Filling a vacancy from within the existing workforce",
                commonErrors: ["Confusing internal recruitment with external recruitment."]
              }
            },
            {
              id: "ebz10-u4-rec-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three benefits of internal recruitment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Internal recruitment", statement: "Uses known employees and creates career progression." }],
                steps: [
                  { reasoning: "Employees already know the organisation, culture and procedures.", marks: 1, markCode: "AO1" },
                  { reasoning: "It can be quicker and cheaper than external recruitment.", marks: 1, markCode: "AO2" },
                  { reasoning: "It motivates staff by showing promotion and development opportunities.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Faster, cheaper, motivated staff and known capabilities.",
                commonErrors: ["Only listing benefits without explanation.", "Confusing with external recruitment."]
              }
            },
            {
              id: "ebz10-u4-rec-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Compare application forms and interviews as selection methods.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Application forms vs interviews", statement: "Forms screen applicants; interviews assess suitability interactively." }],
                steps: [
                  { reasoning: "Application forms collect standard information cheaply and quickly.", marks: 1, markCode: "AO1" },
                  { reasoning: "They are easy to compare but may not reveal motivation or communication skills.", marks: 1, markCode: "AO2" },
                  { reasoning: "Interviews allow follow-up questions and two-way communication.", marks: 1, markCode: "AO1" },
                  { reasoning: "They can be biased or influenced by appearance unless structured carefully.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Forms are efficient screening tools; interviews provide deeper assessment but can be subjective.",
                commonErrors: ["No comparison.", "Only advantages or only disadvantages."]
              }
            },
            {
              id: "ebz10-u4-rec-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A café needs two part-time baristas and one head chef.",
              parts: [
                { label: "a", prompt: "Suggest a recruitment method for the baristas and explain why.", marks: 3 },
                { label: "b", prompt: "Suggest a recruitment method for the head chef and explain why.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Role-specific recruitment", statement: "Match recruitment channels and selection methods to the role." }],
                steps: [
                  { part: "a", reasoning: "Advertise locally online or through colleges because baristas are relatively easy to recruit.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Use application forms and short practical interviews or trial shifts.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use specialist job websites, agencies or headhunting because the role is senior and scarce.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Use structured interviews and references or a practical cooking assessment.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Use quick local recruitment for baristas; use specialist channels and rigorous assessment for the chef.",
                commonErrors: ["Same method for both roles.", "No link to role requirements."]
              }
            },
            {
              id: "ebz10-u4-rec-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A company currently selects all staff using one unstructured interview.",
              parts: [
                { label: "a", prompt: "Explain two limitations of relying only on interviews.", marks: 4 },
                { label: "b", prompt: "Recommend two additional selection methods and justify them.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Selection validity", statement: "Multiple methods reduce bias and improve prediction of job performance." }],
                steps: [
                  { part: "a", reasoning: "Interviews can be influenced by interviewer bias or first impressions.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Candidates may give rehearsed answers and the interview may not test real skills.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Add application forms or CV screening to shortlist objectively.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Add aptitude, numerical or practical tests relevant to the job.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use references or trial tasks to verify claims and performance.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Interviews alone are biased and limited; combine screening, tests and practical assessment.",
                commonErrors: ["No limitation explained.", "Suggestions unrelated to the role."]
              }
            },
            {
              id: "ebz10-u4-rec-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A manufacturing firm must hire five apprentices and one finance manager.",
              parts: [
                { label: "a", prompt: "Recommend a recruitment method for the apprentices.", marks: 3 },
                { label: "b", prompt: "Recommend a recruitment method for the finance manager.", marks: 3 },
                { label: "c", prompt: "Suggest two selection methods for the finance manager.", marks: 2 },
                { label: "d", prompt: "Explain why the firm should provide induction for both groups.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Recruitment planning", statement: "Different roles need different sourcing and assessment methods." }],
                steps: [
                  { part: "a", reasoning: "Partner with colleges or training providers and advertise apprenticeship programmes locally.", marks: 3, markCode: "AO3" },
                  { part: "b", reasoning: "Use specialist job sites, professional networks or agencies for an experienced finance manager.", marks: 3, markCode: "AO3" },
                  { part: "c", reasoning: "Use structured interviews with technical finance questions.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Use numerical or accounting tests plus references or a case-study assessment.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Induction explains policies, safety, culture and role expectations.", marks: 1, markCode: "AO1" },
                  { part: "d", reasoning: "It reduces early errors, improves retention and helps apprentices and managers integrate quickly.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Use education partnerships for apprentices, specialist channels and rigorous tests for the manager, plus induction for both.",
                commonErrors: ["No distinction between roles.", "No justification or induction value."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u4-recruitment-notes",
      title: "Workforce planning, recruitment and selection — notes",
      summary: "Plan staffing from demand forecasts, define jobs through job analysis, then choose recruitment and selection methods suited to each role.",
      sections: [
        { heading: "Workforce planning", body: "Forecast demand, skills and turnover before recruiting." },
        { heading: "Job documents", body: "Job description = duties; person specification = ideal candidate." },
        { heading: "Selection", body: "Use several methods: forms, interviews, tests, references and practical assessment." },
        { heading: "Induction", body: "Introduce policies, safety, role expectations and colleagues to new staff." }
      ]
    }
  },
  {
    file: "lesson-4-2.ts",
    exportName: "lesson42",
    lesson: {
      id: "ebz10-u4-lesson-4-2",
      code: "4-2",
      title: "Training, Motivation and Performance",
      goal: "I CAN explain staff training, motivation theories and performance management.",
      standards: ["Edexcel IGCSE Business 4BS0 — Human Resources Management"],
      vocabulary: [
        { term: "Induction training", definition: "Initial training introducing new employees to the organisation and job." },
        { term: "On-the-job training", definition: "Training while doing the actual job." },
        { term: "Off-the-job training", definition: "Training away from the workplace, such as courses or workshops." },
        { term: "Motivation", definition: "The forces that drive employees to work effectively." },
        { term: "Performance appraisal", definition: "Regular review of an employee's work against objectives." },
        { term: "SMART objective", definition: "Specific, measurable, achievable, realistic and time-bound target." }
      ],
      concepts: [
        {
          id: "ebz10-u4-training-development",
          title: "Staff Training and Development",
          skill: "Choose and evaluate different training methods.",
          sections: [
            {
              heading: "Types of training",
              body: "**Induction** introduces new staff to the business. **On-the-job training** happens while working, such as shadowing or mentoring; it is relevant and cheap but can disrupt production. **Off-the-job training** includes courses, workshops and simulations; it gives focused learning but costs time and money."
            },
            {
              heading: "Why training matters",
              body: "Training improves skills, productivity, quality and safety. It helps employees adapt to new technology and gives them career development, which can improve motivation and retention."
            },
            {
              heading: "Evaluating training",
              body: "Businesses should check whether training changed knowledge, skills or behaviour and whether it improved performance. Methods include tests, observation, feedback from managers and measuring productivity or error rates."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A call-centre employee needs to learn a new customer database. Which training method fits?",
            solution: "Use off-the-job software training followed by supervised on-the-job practice using the database."
          },
          questions: [
            {
              id: "ebz10-u4-train-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is off-the-job training?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Learning while performing the normal job" },
                  { id: "b", text: "Training away from the workplace" },
                  { id: "c", text: "Reading the staff handbook" },
                  { id: "d", text: "Watching a colleague work" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Off-the-job training", statement: "Formal training outside normal work activities." }],
                steps: [{ reasoning: "Off-the-job training takes place away from the workplace, such as courses or workshops.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Training away from the workplace",
                commonErrors: ["Confusing off-the-job with on-the-job training."]
              }
            },
            {
              id: "ebz10-u4-train-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three benefits of staff training to a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Training benefits", statement: "Better skills, productivity, quality and retention." }],
                steps: [
                  { reasoning: "Employees develop skills needed for their jobs and new technology.", marks: 1, markCode: "AO1" },
                  { reasoning: "Better skills can raise productivity and product or service quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Development opportunities can motivate staff and reduce turnover.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Improved skills, productivity, quality, safety and retention.",
                commonErrors: ["Only one benefit.", "No business outcome linked."]
              }
            },
            {
              id: "ebz10-u4-train-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Compare on-the-job and off-the-job training.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "On-the-job vs off-the-job", statement: "Workplace practice versus formal external learning." }],
                steps: [
                  { reasoning: "On-the-job training is practical and directly relevant to the role.", marks: 1, markCode: "AO1" },
                  { reasoning: "It can disrupt work and mistakes may affect customers or production.", marks: 1, markCode: "AO2" },
                  { reasoning: "Off-the-job training gives focused time and often expert instruction.", marks: 1, markCode: "AO1" },
                  { reasoning: "It costs more and may not reflect the real workplace unless followed by practice.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "On-the-job is practical but disruptive; off-the-job is focused but costly.",
                commonErrors: ["No comparison.", "Advantages listed without drawbacks."]
              }
            },
            {
              id: "ebz10-u4-train-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A restaurant introduces a new point-of-sale system and food-safety rules.",
              parts: [
                { label: "a", prompt: "Recommend one on-the-job training method for the system.", marks: 3 },
                { label: "b", prompt: "Recommend one off-the-job training method for food safety.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Training selection", statement: "Match the method to the skill and risk involved." }],
                steps: [
                  { part: "a", reasoning: "Use supervised practice or shadowing during quiet periods so staff learn the real system.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "Pair new users with experienced colleagues for immediate feedback.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use an accredited food-hygiene course because safety rules require formal knowledge.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Follow with a short workplace check to confirm staff apply the rules correctly.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Supervised practice for the system; accredited food-hygiene training for safety.",
                commonErrors: ["Method does not match the skill.", "No link to safety or system requirements."]
              }
            },
            {
              id: "ebz10-u4-train-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A business spends a large sum on training but sees no improvement in productivity.",
              parts: [
                { label: "a", prompt: "Explain two possible reasons for this failure.", marks: 4 },
                { label: "b", prompt: "Suggest two ways to improve the training programme.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Training evaluation", statement: "Training must be relevant, transferred to work and measured." }],
                steps: [
                  { part: "a", reasoning: "The training may not match actual job needs or skills gaps.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Staff may not apply learning because managers or systems do not support it.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Identify specific skills gaps through appraisal or observation before training.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Evaluate outcomes using productivity measures, tests or feedback.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Give employees time and coaching to use new skills at work.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Training may be irrelevant or unsupported; align it with gaps and measure workplace transfer.",
                commonErrors: ["Assumes more spending always helps.", "No evaluation method."]
              }
            },
            {
              id: "ebz10-u4-train-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A logistics firm is introducing electric delivery vans and a new route-planning software.",
              parts: [
                { label: "a", prompt: "Explain why induction should be updated for new drivers.", marks: 3 },
                { label: "b", prompt: "Compare on-the-job and off-the-job training for learning the software.", marks: 3 },
                { label: "c", prompt: "Suggest one safety training method for electric vans.", marks: 2 },
                { label: "d", prompt: "Explain how the firm could evaluate whether training worked.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Technology training", statement: "New equipment requires induction, practical training and safety evaluation." }],
                steps: [
                  { part: "a", reasoning: "New drivers must learn vehicle controls, charging procedures and safety rules.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Induction ensures everyone understands changes before driving.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "On-the-job gives real route practice but may slow deliveries.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Off-the-job gives focused software instruction but needs practice afterward.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "A combination is best: course first, then supervised use.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Use practical training on electric-vehicle safety, charging and emergency procedures.", marks: 2, markCode: "AO3" },
                  { part: "d", reasoning: "Measure delivery times, software errors, safety incidents and driver feedback.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Update induction, combine software course with supervised practice, train EV safety and measure outcomes.",
                commonErrors: ["No safety training.", "No evaluation or mixed-method justification."]
              }
            }
          ]
        },
        {
          id: "ebz10-u4-motivation-performance",
          title: "Motivation and Performance Management",
          skill: "Apply motivation theories and manage employee performance.",
          sections: [
            {
              heading: "Motivation theories",
              body: "**Maslow's hierarchy** suggests employees move from basic needs to security, social needs, esteem and self-actualisation. **Herzberg** separates hygiene factors such as pay and conditions from motivators such as achievement, recognition and responsibility. **McGregor's Theory X and Y** contrast assumptions that workers dislike work with assumptions that they seek responsibility."
            },
            {
              heading: "Financial and non-financial rewards",
              body: "Financial rewards include salary, bonuses, commission and overtime pay. Non-financial rewards include praise, recognition, flexible hours, training opportunities and interesting work. Different employees are motivated by different factors."
            },
            {
              heading: "Performance management",
              body: "Businesses set **SMART objectives**, monitor progress, give feedback and review performance through appraisals. Appraisals identify strengths, development needs and future objectives. Effective feedback should be timely, specific and constructive."
            }
          ],
          keyFormulas: [
            { name: "SMART objective", statement: "Specific, Measurable, Achievable, Realistic, Time-bound" }
          ],
          workedExample: {
            problem: "A sales assistant is given the objective 'increase sales'. How could it be improved?",
            solution: "Make it SMART: 'Increase monthly sales by 10% within three months by contacting 20 customers each week.'"
          },
          questions: [
            {
              id: "ebz10-u4-mot-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "In Herzberg's theory, which is a motivator rather than a hygiene factor?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Salary" },
                  { id: "b", text: "Recognition" },
                  { id: "c", text: "Working conditions" },
                  { id: "d", text: "Company policy" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Herzberg motivators", statement: "Achievement, recognition, responsibility and growth create motivation." }],
                steps: [{ reasoning: "Recognition is a motivator; salary, conditions and policy are hygiene factors.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Recognition",
                commonErrors: ["Confusing hygiene factors with motivators."]
              }
            },
            {
              id: "ebz10-u4-mot-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three non-financial ways to motivate employees.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Non-financial motivation", statement: "Recognition, autonomy, development and job interest motivate staff." }],
                steps: [
                  { reasoning: "Praise or public recognition for good work.", marks: 1, markCode: "AO1" },
                  { reasoning: "Give responsibility, autonomy or interesting projects.", marks: 1, markCode: "AO1" },
                  { reasoning: "Offer training, promotion opportunities or flexible working.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Recognition, responsibility/autonomy, training, flexible hours and interesting work.",
                commonErrors: ["Only financial rewards.", "No examples."]
              }
            },
            {
              id: "ebz10-u4-mot-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain what is meant by a SMART objective and why businesses use them.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "SMART objectives", statement: "Clear targets that guide performance management." }],
                steps: [
                  { reasoning: "SMART means specific, measurable, achievable, realistic and time-bound.", marks: 1, markCode: "AO1" },
                  { reasoning: "Specific and measurable targets remove ambiguity.", marks: 1, markCode: "AO2" },
                  { reasoning: "Achievable, realistic and time-bound targets are fair and motivating.", marks: 1, markCode: "AO2" },
                  { reasoning: "They make performance easier to monitor, review and reward.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "SMART objectives are clear, fair targets that support appraisal and motivation.",
                commonErrors: ["Only expanding the acronym.", "No performance management link."]
              }
            },
            {
              id: "ebz10-u4-mot-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A team leader wants to improve motivation in a repetitive warehouse team.",
              parts: [
                { label: "a", prompt: "Explain two Herzberg motivators that could be used.", marks: 3 },
                { label: "b", prompt: "Suggest one financial and one non-financial reward.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Applying motivation theory", statement: "Use motivators and rewards suited to the role." }],
                steps: [
                  { part: "a", reasoning: "Give employees more responsibility, such as leading a shift or improving processes.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Recognise achievement publicly and provide training or promotion opportunities.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Financial reward could be a productivity bonus or overtime pay.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Non-financial reward could be flexible breaks, team events or involvement in decisions.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Use responsibility, recognition, development plus suitable financial and non-financial rewards.",
                commonErrors: ["Theory name only.", "Rewards not linked to the warehouse role."]
              }
            },
            {
              id: "ebz10-u4-mot-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A company holds annual appraisals but employees say feedback is vague and objectives are unrealistic.",
              parts: [
                { label: "a", prompt: "Explain two problems with the current appraisal system.", marks: 4 },
                { label: "b", prompt: "Recommend two improvements to performance management.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Effective appraisals", statement: "Feedback and objectives should be specific, fair and regular." }],
                steps: [
                  { part: "a", reasoning: "Vague feedback does not tell employees what to improve.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Unrealistic objectives demotivate staff and make appraisal unfair.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Set SMART objectives agreed with the employee at the start of the period.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Give regular, specific feedback and discuss development needs.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Hold more frequent reviews rather than relying on one annual meeting.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Improve objectives and feedback frequency; use SMART targets and regular constructive reviews.",
                commonErrors: ["No specific problem.", "Recommendation not linked to appraisal."]
              }
            },
            {
              id: "ebz10-u4-mot-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A customer-service company wants to raise motivation and reduce staff turnover.",
              parts: [
                { label: "a", prompt: "Explain how Maslow's hierarchy could guide motivation.", marks: 3 },
                { label: "b", prompt: "Explain how Herzberg's theory differs from financial rewards alone.", marks: 3 },
                { label: "c", prompt: "Suggest two performance-management tools the company could use.", marks: 2 },
                { label: "d", prompt: "Evaluate whether motivation alone will reduce turnover.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Motivation and retention", statement: "Different needs require different rewards and management systems." }],
                steps: [
                  { part: "a", reasoning: "Ensure pay meets basic and security needs before expecting higher motivation.", marks: 1, markCode: "AO2" },
                  { part: "a", reasoning: "Then support social, esteem and achievement needs through teamwork and recognition.", marks: 1, markCode: "AO2" },
                  { part: "a", reasoning: "Different employees may be at different levels of the hierarchy.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Financial rewards prevent dissatisfaction but may not create lasting motivation.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Herzberg motivators such as achievement, responsibility and growth create satisfaction.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The best approach combines fair pay with meaningful work and recognition.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Use SMART objectives and regular appraisals to clarify expectations.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Use feedback, coaching and development plans to support improvement.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Motivation helps but turnover also depends on pay, workload, management and career prospects.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Use needs-based rewards plus Herzberg motivators and appraisal; motivation alone may not fix turnover.",
                commonErrors: ["One theory only.", "No evaluation of other turnover causes."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u4-training-motivation-notes",
      title: "Training, motivation and performance — notes",
      summary: "Choose training methods to match skills, use motivation theories to design rewards, and manage performance with SMART objectives and appraisals.",
      sections: [
        { heading: "Training", body: "Induction, on-the-job and off-the-job training serve different purposes." },
        { heading: "Motivation", body: "Maslow, Herzberg and McGregor explain different employee needs." },
        { heading: "Performance", body: "SMART objectives and regular feedback make appraisal effective." },
        { heading: "Evaluation", body: "Check whether training and motivation actually improve performance." }
      ]
    }
  },
  {
    file: "lesson-4-3.ts",
    exportName: "lesson43",
    lesson: {
      id: "ebz10-u4-lesson-4-3",
      code: "4-3",
      title: "Employment Contracts, Pay and Employee Relations",
      goal: "I CAN explain employment rights, pay systems and employee relations.",
      standards: ["Edexcel IGCSE Business 4BS0 — Human Resources Management"],
      vocabulary: [
        { term: "Employment contract", definition: "Agreement setting out rights and duties of employer and employee." },
        { term: "Gross pay", definition: "Pay before deductions such as tax and national insurance." },
        { term: "Net pay", definition: "Pay received after deductions." },
        { term: "Discrimination", definition: "Unfair treatment because of a protected characteristic." },
        { term: "Grievance procedure", definition: "Formal process for employees to raise workplace problems." },
        { term: "Trade union", definition: "Organisation representing employees in negotiations with employers." },
        { term: "Collective bargaining", definition: "Negotiation between employers and employee representatives." }
      ],
      concepts: [
        {
          id: "ebz10-u4-contracts-pay-rights",
          title: "Contracts, Pay and Employment Rights",
          skill: "Understand contracts, pay calculations and legal protections.",
          sections: [
            {
              heading: "Employment contracts and pay",
              body: "An **employment contract** states job title, duties, hours, pay, holiday and notice. Employers must follow minimum wage laws and working-time rules. Pay may be calculated hourly, weekly, monthly or by salary. Gross pay is before deductions; net pay is after tax and other deductions."
            },
            {
              heading: "Rights and protections",
              body: "Employees have protection against discrimination, unsafe working conditions and unfair dismissal. Businesses must provide a safe workplace, reasonable hours and appropriate contracts. Health and safety rules require risk assessment and protective equipment where needed."
            },
            {
              heading: "Types of employment",
              body: "Permanent staff have ongoing contracts; temporary staff are employed for a fixed period; part-time workers work fewer hours; casual workers are employed as needed. Each arrangement affects flexibility, cost and employee security."
            }
          ],
          keyFormulas: [
            { name: "Gross pay", statement: "Hours worked × hourly rate before deductions" },
            { name: "Net pay", statement: "Gross pay − deductions" }
          ],
          workedExample: {
            problem: "An employee works 160 hours at £12.50 per hour. Deductions are 20%. Calculate gross and net pay.",
            solution: "Gross pay = 160 × £12.50 = £2,000. Deductions = 20% × £2,000 = £400. Net pay = £2,000 − £400 = £1,600."
          },
          questions: [
            {
              id: "ebz10-u4-contract-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is an employment contract?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A document listing only salary" },
                  { id: "b", text: "Agreement setting out employer and employee rights and duties" },
                  { id: "c", text: "A letter offering a job" },
                  { id: "d", text: "A trade union agreement" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Employment contract", statement: "Legal agreement on job terms and responsibilities." }],
                steps: [{ reasoning: "A contract defines duties, pay, hours, holidays and notice for both parties.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Agreement setting out rights and duties",
                commonErrors: ["Confusing contract with job offer or union agreement."]
              }
            },
            {
              id: "ebz10-u4-contract-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "An employee works 160 hours at £12.50 per hour. Deductions are 20%. Calculate gross pay and net pay.",
              response: {
                type: "numeric",
                parts: [
                  { label: "Gross pay", answer: 2000, unit: "£" },
                  { label: "Net pay", answer: 1600, unit: "£" }
                ]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Pay calculation", statement: "Gross pay = hours × rate; net pay = gross pay − deductions." }],
                steps: [
                  { reasoning: "Calculate gross pay before deductions: 160 × £12.50 = £2,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Calculate deductions of 20%: £400.", marks: 1, markCode: "AO2" },
                  { reasoning: "Subtract deductions to find net pay: £1,600.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Gross pay £2,000; net pay £1,600.",
                commonErrors: ["Applying deductions to hours rather than gross pay.", "Forgetting to subtract deductions."]
              }
            },
            {
              id: "ebz10-u4-contract-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two legal protections employees have at work.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Employment rights", statement: "Laws protect pay, safety, hours and fair treatment." }],
                steps: [
                  { reasoning: "Employees are protected from discrimination based on characteristics such as age, gender or disability.", marks: 2, markCode: "AO1" },
                  { reasoning: "Employers must provide a safe workplace and reasonable working hours.", marks: 2, markCode: "AO1" }
                ],
                finalAnswer: "Protection from discrimination and a right to a safe workplace and reasonable hours.",
                commonErrors: ["Only one protection.", "Vague statement without legal context."]
              }
            },
            {
              id: "ebz10-u4-contract-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A small business wants to employ staff for a busy summer season.",
              parts: [
                { label: "a", prompt: "Compare permanent and temporary contracts for this situation.", marks: 3 },
                { label: "b", prompt: "Recommend a suitable contract type and justify it.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Contract choice", statement: "Match employment type to demand and flexibility." }],
                steps: [
                  { part: "a", reasoning: "Permanent contracts give security but may create ongoing costs after summer.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Temporary contracts match seasonal demand but may be less stable for staff.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Use temporary or part-time contracts for the summer peak.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "This controls labour costs while still providing enough staff for demand.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Use temporary or part-time contracts for seasonal demand.",
                commonErrors: ["No comparison.", "Recommendation ignores cost or flexibility."]
              }
            },
            {
              id: "ebz10-u4-contract-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A factory worker is asked to work 60 hours in one week without rest breaks.",
              parts: [
                { label: "a", prompt: "Explain two risks to the employer.", marks: 4 },
                { label: "b", prompt: "Recommend two actions the employer should take.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Working time and safety", statement: "Excessive hours can breach law and increase accidents." }],
                steps: [
                  { part: "a", reasoning: "The employer may break working-time rules and face legal penalties.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Tired staff are more likely to have accidents, harming safety and productivity.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Schedule reasonable hours and ensure adequate rest breaks.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use additional staff or overtime planning rather than unsafe hours.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Review workload and health and safety risk assessments.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Reduce hours, provide breaks, review safety and use proper staffing or planning.",
                commonErrors: ["Only legal risk or only safety risk.", "No practical action."]
              }
            },
            {
              id: "ebz10-u4-contract-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A retail manager dismisses an employee after she reports unsafe shelving without following procedure.",
              parts: [
                { label: "a", prompt: "Identify two possible employment-law issues.", marks: 3 },
                { label: "b", prompt: "Explain why the dismissal may be unfair.", marks: 3 },
                { label: "c", prompt: "Suggest two actions the employer should have taken.", marks: 2 },
                { label: "d", prompt: "Recommend how the employer should handle the situation now.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Fair dismissal", statement: "Dismissal must follow fair procedure and protect whistleblowers and safety rights." }],
                steps: [
                  { part: "a", reasoning: "The employee may have been dismissed for raising a health and safety concern.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "The employer may have failed to follow disciplinary or dismissal procedure.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Raising safety concerns is protected, so dismissal could be victimisation or unfair dismissal.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "No fair investigation or warning makes the decision unjustified.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Investigate the shelving risk and fix it promptly.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Follow a fair disciplinary or grievance procedure before any dismissal.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Apologise or reinstate if appropriate and review procedures with managers.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Potential unfair/victimisation dismissal; investigate risk, follow procedure and review management practice.",
                commonErrors: ["Only one legal issue.", "No procedural fix or remedy."]
              }
            }
          ]
        },
        {
          id: "ebz10-u4-employee-relations",
          title: "Employee Relations and Representation",
          skill: "Explain employee voice, disputes and collective representation.",
          sections: [
            {
              heading: "Employee voice",
              body: "Employees can communicate through suggestion schemes, team meetings, surveys and one-to-one appraisals. Good communication helps identify problems early, improves morale and supports better decisions."
            },
            {
              heading: "Disputes and procedures",
              body: "A **grievance** is an employee complaint about work; a **disciplinary** process addresses misconduct or poor performance. Fair procedures should be clear, consistent and give employees a chance to respond. Trade unions may represent employees in these processes."
            },
            {
              heading: "Trade unions and collective bargaining",
              body: "Trade unions negotiate pay, conditions and disputes through **collective bargaining**. They can improve job security and represent staff collectively, but conflict may arise if negotiations fail, potentially leading to strikes or other industrial action."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Staff complain about shift patterns. What process should the employer use?",
            solution: "Use the grievance procedure, listen to representatives, investigate and respond with a fair decision or negotiated change."
          },
          questions: [
            {
              id: "ebz10-u4-rel-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is collective bargaining?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Negotiation between employer and employee representatives" },
                  { id: "b", text: "A company selling products abroad" },
                  { id: "c", text: "Hiring temporary workers" },
                  { id: "d", text: "A customer loyalty programme" }
                ],
                correctChoiceId: "a"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Collective bargaining", statement: "Negotiation between employer and employee representatives." }],
                steps: [{ reasoning: "Collective bargaining concerns pay, conditions and disputes negotiated by representatives or unions.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Negotiation between employer and employee representatives",
                commonErrors: ["Confusing bargaining with ordinary sales or hiring."]
              }
            },
            {
              id: "ebz10-u4-rel-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three ways employees can communicate concerns to management.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Employee voice", statement: "Formal and informal channels let staff raise issues." }],
                steps: [
                  { reasoning: "Use suggestion schemes or employee surveys.", marks: 1, markCode: "AO1" },
                  { reasoning: "Raise issues in team meetings or one-to-one appraisals.", marks: 1, markCode: "AO1" },
                  { reasoning: "Use a grievance procedure or union representative for formal complaints.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Surveys, meetings/appraisals, suggestion schemes and grievance procedures.",
                commonErrors: ["Only one channel.", "Channels not linked to raising concerns."]
              }
            },
            {
              id: "ebz10-u4-rel-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the difference between a grievance and a disciplinary procedure.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Grievance vs disciplinary", statement: "Employee complaint versus employer concern about conduct." }],
                steps: [
                  { reasoning: "A grievance is raised by an employee about a workplace problem.", marks: 1, markCode: "AO1" },
                  { reasoning: "It concerns issues such as unfair treatment, workload or safety.", marks: 1, markCode: "AO1" },
                  { reasoning: "A disciplinary procedure addresses employee misconduct or poor performance.", marks: 1, markCode: "AO1" },
                  { reasoning: "It may lead to warnings, training or dismissal if justified.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Grievance = employee complaint; disciplinary = employer action about conduct/performance.",
                commonErrors: ["Same process assumed.", "No examples."]
              }
            },
            {
              id: "ebz10-u4-rel-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A warehouse has rising accidents and poor communication between shifts.",
              parts: [
                { label: "a", prompt: "Explain two employee-relations problems.", marks: 3 },
                { label: "b", prompt: "Suggest two ways to improve relations and communication.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Industrial relations", statement: "Communication and fair procedures reduce conflict and improve safety." }],
                steps: [
                  { part: "a", reasoning: "Poor communication between shifts can cause accidents and missed hazards.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Staff may feel unheard, lowering morale and trust.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Introduce shift handover meetings or logs to share safety information.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Use a grievance procedure and safety representatives to investigate concerns.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Improve shift communication and create formal channels for safety concerns.",
                commonErrors: ["Only accident issue.", "No communication solution."]
              }
            },
            {
              id: "ebz10-u4-rel-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A transport company faces demands for higher pay from its drivers' union.",
              parts: [
                { label: "a", prompt: "Explain two possible outcomes if negotiations fail.", marks: 4 },
                { label: "b", prompt: "Recommend a balanced approach for the company.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Collective disputes", statement: "Failed bargaining can lead to industrial action or costly compromise." }],
                steps: [
                  { part: "a", reasoning: "Drivers may strike or take other industrial action, disrupting services.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "The company may face lost revenue, reputation damage and higher eventual costs.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Enter collective bargaining early and listen to union representatives.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Consider non-pay benefits or phased pay rises to reach agreement.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Communicate business constraints honestly while seeking a fair solution.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Negotiate through collective bargaining and seek compromise to avoid disruption.",
                commonErrors: ["Only one outcome.", "No negotiation or compromise."]
              }
            },
            {
              id: "ebz10-u4-rel-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A call centre has high absence, many grievances and no union recognition.",
              parts: [
                { label: "a", prompt: "Explain two reasons employee relations may be poor.", marks: 3 },
                { label: "b", prompt: "Explain the role of a grievance procedure.", marks: 3 },
                { label: "c", prompt: "Suggest two ways management could improve communication.", marks: 2 },
                { label: "d", prompt: "Evaluate whether recognising a trade union would help.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Employee relations strategy", statement: "Fair procedures, communication and representation improve trust." }],
                steps: [
                  { part: "a", reasoning: "Staff may feel workload or pay concerns are ignored.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Lack of clear procedures can make complaints feel pointless.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "A grievance procedure gives employees a formal route to raise problems.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "It requires investigation, response and possible resolution or appeal.", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "Hold regular team meetings and publish clear policies.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Use surveys or one-to-one check-ins to identify issues early.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "A union could provide representation and improve collective voice.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "But it may also create formal conflict if management is unwilling to negotiate.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Improve procedures and communication; union recognition may help but depends on management cooperation.",
                commonErrors: ["Only lists problems.", "Union recommendation not evaluated."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u4-employment-notes",
      title: "Contracts, pay and employee relations — notes",
      summary: "Employment contracts protect rights, gross and net pay differ by deductions, and fair procedures plus representation support good industrial relations.",
      sections: [
        { heading: "Contracts", body: "Contracts set duties, pay, hours, holidays and notice." },
        { heading: "Pay", body: "Gross pay = hours × rate; net pay = gross pay − deductions." },
        { heading: "Rights", body: "Protect against discrimination, unsafe work and unfair dismissal." },
        { heading: "Relations", body: "Grievance, disciplinary, unions and collective bargaining manage disputes." }
      ]
    }
  }
];
