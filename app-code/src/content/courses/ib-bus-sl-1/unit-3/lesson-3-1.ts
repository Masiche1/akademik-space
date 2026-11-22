import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "bus-u3-lesson-3-1",
  code: "3-1",
  title: "Human resource functions and motivation",
  goal: "I CAN describe HR functions such as recruitment and training, and explain the main theories of motivation.",
  standards: ["Paper 1", "Paper 2", "Topic 3.1"],
  vocabulary: [
    {
      term: "Human resources (HR)",
      definition:
        "The department responsible for recruiting, training, paying and managing employees.",
    },
    {
      term: "Recruitment",
      definition:
        "The process of finding and attracting suitable candidates for a vacancy.",
    },
    {
      term: "Selection",
      definition:
        "Choosing the best candidate from applicants through interviews and tests.",
    },
    {
      term: "Training",
      definition: "Teaching employees the skills needed to perform their jobs.",
    },
    {
      term: "Motivation",
      definition:
        "The internal drive that makes people behave in certain ways at work.",
    },
    {
      term: "Maslow's hierarchy",
      definition:
        "A theory that people satisfy needs in order: physiological, safety, social, esteem, self-actualisation.",
    },
    {
      term: "Herzberg's two-factor theory",
      definition:
        "Hygiene factors prevent dissatisfaction; motivators create satisfaction.",
    },
    {
      term: "Scientific management",
      definition:
        "Taylor's approach: break jobs into simple tasks and pay by output.",
    },
  ],
  concepts: [
    {
      id: "bus-u3-hr",
      title: "HR functions: recruitment, selection and training",
      skill:
        "Describe the stages of recruitment and selection and explain why training matters.",
      lesson: {
        sections: [
          {
            heading: "Recruitment and selection",
            body: "**Recruitment** identifies the need for staff, writes a job description and person specification, then advertises and attracts candidates. **Selection** screens applications (CVs), holds interviews and may use tests to choose the best candidate. A structured process reduces the risk of hiring unsuitable staff — costly in both money and morale.",
          },
          {
            heading: "Training and development",
            body: "**Induction** introduces new starters to the organisation; **on-the-job training** teaches skills while working; **off-the-job training** (courses, workshops) builds broader knowledge. Training raises productivity, reduces errors and improves staff morale. It also helps firms adapt to new technology and methods.",
          },
          {
            heading: "Why HR matters",
            body: "People are often a firm's most important asset. Effective HR reduces labour turnover, fills skills gaps and ensures legal compliance (contracts, health and safety). Poor HR — high turnover, untrained staff — directly damages performance and customer service.",
          },
        ],
        keyFormulas: [
          {
            name: "Recruitment stages",
            statement:
              "Identify need → job description → advertise → apply → select → appoint",
          },
          {
            name: "Training types",
            statement: "Induction, on-the-job, off-the-job",
          },
        ],
        workedExample: {
          problem:
            "A shop needs two sales assistants. Outline the steps from deciding the need to appointing staff.",
          solution:
            "Write job description and person spec, advertise locally and online, screen CVs, interview shortlisted candidates, check references, then appoint and provide induction training.",
        },
      },
      questions: [
        {
          id: "bus-u3-hr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The process of choosing the best candidate from a pool of applicants is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Appraisal" },
              { id: "b", text: "Selection" },
              { id: "c", text: "Recruitment" },
              { id: "d", text: "Induction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection",
                statement:
                  "Choosing the best candidate from applicants via interviews and tests.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choosing among applicants is selection; attracting them is recruitment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Selection",
            commonErrors: [
              "Confusing recruitment (attracting) with selection (choosing).",
            ],
          },
        },
        {
          id: "bus-u3-hr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company calculates labour turnover as (leavers / average employees) x 100. With 12 leavers and 150 average employees, find the turnover rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Turnover (%)", answer: 8, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Labour turnover",
                statement: "Turnover = (leavers / average employees) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turnover formula.",
                working: "\\frac{12}{150} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide and multiply.",
                working: "0.08 \\times 100 = 8",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the rate.",
                working: "8\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.08."],
          },
        },
        {
          id: "bus-u3-hr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why training is an investment rather than a cost for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training as investment",
                statement:
                  "Training raises productivity and reduces errors, paying back over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trained staff work faster and make fewer mistakes, raising output per worker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Better service improves customer satisfaction and sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher morale and retention reduce future recruitment costs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the return exceeds the initial cost for most firms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Training raises productivity and morale, so returns outweigh costs over time.",
            commonErrors: [
              "Treating training purely as an expense with no returns.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A growing tech firm has high staff turnover and many customer complaints about service quality.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons why high labour turnover is damaging.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how the firm could improve its recruitment and training.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether investing in training will reduce the turnover.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Turnover costs",
                statement:
                  "Recruitment, induction and lost productivity raise costs when staff leave.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Constant recruiting and training is expensive and disrupts teams.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Loss of experienced staff lowers service quality and morale.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Improve selection: clearer person specification, structured interviews, references.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Better induction and on-the-job training for new starters.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Off-the-job courses to build skills and career paths that retain staff.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Training raises skills and morale, which can improve retention — but pay and management matter too.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement linking training to turnover causes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Recruitment costs, lost skills, lower morale. (b) Better selection, induction, ongoing training. (c) Helps but must address other causes too.",
            commonErrors: ["Assuming training alone fixes turnover."],
          },
        },
        {
          id: "bus-u3-hr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A document listing the duties, responsibilities and working conditions of a job is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Person specification" },
              { id: "b", text: "Job description" },
              { id: "c", text: "Appraisal form" },
              { id: "d", text: "Organisation chart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job description",
                statement:
                  "A document describing the duties, responsibilities and conditions of a job.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Job descriptions set out duties; person specifications list the qualities candidates need.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Job description",
            commonErrors: [
              "Confusing a job description with a person specification.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the first stage of the recruitment process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identifying the need for new staff" },
              { id: "b", text: "Advertising the vacancy" },
              { id: "c", text: "Interviewing candidates" },
              { id: "d", text: "Checking references" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recruitment",
                statement:
                  "Identifying the need for staff, then attracting, screening and appointing candidates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recruitment begins by identifying the staffing need before any advertising or interviewing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Identifying the need for new staff",
            commonErrors: ["Starting recruitment at the advertising stage."],
          },
        },
        {
          id: "bus-u3-hr-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A business had 18 employee leavers last year and an average of 200 employees. Calculate the labour turnover rate (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Turnover (%)", answer: 9, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Labour turnover",
                statement: "Turnover = (leavers / average employees) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turnover formula.",
                working: "18 / 200 = 0.09",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express it as a percentage.",
                working: "0.09 x 100 = 9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the rate.",
                working: "9%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.09."],
          },
        },
        {
          id: "bus-u3-hr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm spends $24,000 on staff training for 40 employees in one year. Calculate the average training cost per employee ($).",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per employee ($)", answer: 600, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost per employee",
                statement: "Total training cost / number of employees",
              },
            ],
            steps: [
              {
                reasoning: "Divide total cost by number of employees.",
                working: "24000 / 40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost with units.",
                working: "600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$600$",
            commonErrors: ["Dividing in the wrong direction — 40 / 24000."],
          },
        },
        {
          id: "bus-u3-hr-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two ways in which induction training benefits a new employee and the business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Induction training",
                statement:
                  "Introducing new starters to rules, culture and contacts reduces early errors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Induction explains company rules, culture and key contacts, reducing anxiety and mistakes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For the business, faster productivity and fewer errors lower costs and improve service.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Well-inducted staff integrate quickly and understand expectations.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: induction is a worthwhile early investment in new staff.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Induction reduces early errors for the employee and speeds up productivity for the business.",
            commonErrors: [
              "Describing only benefits to the employee or only to the business.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why high labour turnover can damage a firm's customer service.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Turnover and service",
                statement:
                  "Losing experienced staff removes skills and disrupts service consistency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Constant loss of experienced staff leaves less skilled, confident employees facing customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated recruitment and induction disrupt teams and create inconsistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customers notice poorer service, which damages reputation and sales.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: turnover hurts service through lost skills and disruption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Turnover removes experienced staff and disrupts teams, lowering service quality.",
            commonErrors: [
              "Discussing only the costs of recruitment, not the service impact.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A supermarket chain finds that new cashiers make many errors during their first month.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two methods the firm could use to train new cashiers.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two problems caused by hiring untrained staff.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the firm should extend training beyond the induction period.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training methods",
                statement:
                  "On-the-job and off-the-job training build the skills needed for the role.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "On-the-job training at the till plus off-the-job courses on customer service.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Methods clearly matched to cashier skills.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Errors raise costs through refunds, waste and lost sales.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Poor service damages customer satisfaction and staff morale.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Longer training costs money and time but builds deeper skills and fewer errors.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Recommendation should weigh training costs against error costs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on extending training.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) On-the-job and off-the-job training. (b) Errors raise costs and damage service. (c) Worthwhile if error costs exceed training costs.",
            commonErrors: [
              "Recommending training without weighing its cost against the errors it prevents.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Training that takes place while the employee is actually performing the job is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On-the-job training" },
              { id: "b", text: "Off-the-job training" },
              { id: "c", text: "Induction" },
              { id: "d", text: "External training" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "On-the-job training",
                statement:
                  "Teaching skills while the employee performs real tasks at work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learning while doing the actual job is on-the-job training.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** On-the-job training",
            commonErrors: [
              "Confusing induction (first-day introduction) with on-the-job training.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which document describes the personal qualities, skills and experience a successful candidate should have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Staff handbook" },
              { id: "b", text: "Job description" },
              { id: "c", text: "Organisation chart" },
              { id: "d", text: "Person specification" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Person specification",
                statement:
                  "A list of the personal qualities, skills and experience required of a candidate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The person specification describes the ideal candidate; the job description covers duties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Person specification",
            commonErrors: [
              "Confusing person specification (person) with job description (duties).",
            ],
          },
        },
        {
          id: "bus-u3-hr-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Last year 45 employees left a firm that had an average of 300 employees. Calculate the labour turnover rate (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Turnover (%)", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Labour turnover",
                statement: "Turnover = (leavers / average employees) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the turnover formula.",
                working: "45 / 300 = 0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express it as a percentage.",
                working: "0.15 x 100 = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the rate.",
                working: "15%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.15."],
          },
        },
        {
          id: "bus-u3-hr-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two reasons why businesses invest in training their employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training returns",
                statement:
                  "Training raises productivity and retention, paying back over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Training raises productivity and reduces errors, improving output and quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It improves morale and retention, lowering future recruitment and induction costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Better staff capability strengthens competitiveness and customer service.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: training is an investment whose returns exceed its costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Training raises productivity and staff retention, so returns outweigh costs.",
            commonErrors: ["Listing benefits without explaining the returns."],
          },
        },
        {
          id: "bus-u3-hr-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Describe two ways a business can make its induction programme more effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effective induction",
                statement:
                  "A structured programme with support reduces early errors and speeds integration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Provide a clear schedule covering culture, rules, health and safety and key contacts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pair new starters with a mentor or buddy for ongoing support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structured induction reduces early mistakes and builds confidence.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: planned induction improves the new starter's early performance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear schedules and buddy/mentor support make induction more effective.",
            commonErrors: [
              "Listing activities without explaining how they help new starters.",
            ],
          },
        },
        {
          id: "bus-u3-hr-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Ensuring that employment contracts, health and safety rules and equal opportunities laws are followed is an HR responsibility called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performance-related pay" },
              { id: "b", text: "Legal compliance" },
              { id: "c", text: "Recruitment" },
              { id: "d", text: "Selection" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Legal compliance",
                statement:
                  "Ensuring employment contracts and workplace laws are followed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Following employment law and health and safety rules is legal compliance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Legal compliance",
            commonErrors: [
              "Confusing compliance duties with recruitment or selection.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u3-motivation",
      title: "Theories of motivation",
      skill:
        "Explain Maslow's hierarchy, Herzberg's two-factor theory and Taylor's scientific management.",
      lesson: {
        sections: [
          {
            heading: "Maslow's hierarchy of needs",
            body: "**Maslow** argued people satisfy needs in a sequence: physiological (food, pay), safety (job security), social (belonging), esteem (recognition) and self-actualisation (fulfilment). A satisfied lower need stops motivating; the next need up takes over. Managers should address lower needs before expecting higher-level motivation.",
          },
          {
            heading: "Herzberg's two-factor theory",
            body: "**Herzberg** split factors into **hygiene factors** (pay, conditions, supervision, security) which only prevent dissatisfaction, and **motivators** (achievement, recognition, responsibility, advancement, growth) which create satisfaction. Raising pay removes complaints but does not motivate; motivators do.",
          },
          {
            heading: "Taylor and scientific management",
            body: "**Frederick Taylor** studied workers and concluded pay should link directly to output — the **piece-rate** system — with tasks broken into simple, timed steps. Efficiency rose but jobs became boring and repetitive. Taylor is the classic example of financial motivation; Maslow and Herzberg show its limits.",
          },
        ],
        keyFormulas: [
          {
            name: "Maslow order",
            statement:
              "Physiological → safety → social → esteem → self-actualisation",
          },
          {
            name: "Herzberg",
            statement:
              "Hygiene factors prevent dissatisfaction; motivators create satisfaction",
          },
          {
            name: "Taylor",
            statement:
              "Break jobs into simple tasks; pay by output (piece-rate)",
          },
        ],
        workedExample: {
          problem:
            "A manager raises all salaries by 10% but motivation does not improve. Explain using Herzberg.",
          solution:
            "Pay is a hygiene factor — it removes dissatisfaction but does not motivate. To motivate, the manager should add motivators: recognition, responsibility, promotion opportunities and varied work.",
        },
      },
      questions: [
        {
          id: "bus-u3-mot-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Herzberg, which factor is a 'motivator' rather than a 'hygiene factor'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Job security" },
              { id: "b", text: "Recognition for good work" },
              { id: "c", text: "Working conditions" },
              { id: "d", text: "Salary level" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg motivators",
                statement:
                  "Achievement, recognition, responsibility, advancement, growth create satisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pay, conditions and security are hygiene factors; recognition is a motivator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Recognition for good work",
            commonErrors: [
              "Assuming higher pay automatically motivates — Herzberg says it only prevents dissatisfaction.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Maslow's hierarchy, which need comes immediately after safety needs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social needs" },
              { id: "b", text: "Esteem needs" },
              { id: "c", text: "Self-actualisation" },
              { id: "d", text: "Physiological needs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow hierarchy",
                statement:
                  "Physiological, safety, social, esteem, self-actualisation.",
              },
            ],
            steps: [
              {
                reasoning: "Order: physiological, safety, then social.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Social needs",
            commonErrors: ["Skipping a level — order must be exact."],
          },
        },
        {
          id: "bus-u3-mot-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how Taylor's scientific management approach motivates workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scientific management",
                statement:
                  "Simplify tasks and pay workers by output (piece-rate).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Jobs are broken into simple, timed tasks to maximise efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Workers are paid per unit produced, so effort directly raises pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher output therefore means higher earnings — a financial incentive.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: motivation is purely financial and output-linked.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Piece-rate pay links earnings directly to output, incentivising effort.",
            commonErrors: ["Describing Taylor as a human-relations theorist."],
          },
        },
        {
          id: "bus-u3-mot-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A factory pays piece-rates but output and morale are both falling.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain how piece-rate pay is supposed to motivate workers.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Using Herzberg, explain why piece-rate pay may have failed to motivate.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Recommend two motivators the factory could introduce.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation theory application",
                statement:
                  "Financial incentives address hygiene needs; motivators create satisfaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Pay per unit produced directly rewards higher effort and output.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear link between effort and earnings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Pay is a hygiene factor — it prevents dissatisfaction but does not create motivation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Piece-rates may create stress, repetition and no sense of achievement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Lack of motivators (recognition, responsibility, growth) explains falling morale.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two Herzberg motivators: recognition schemes, job enrichment, promotion opportunities, team projects.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both recommendations clearly motivational.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Pay linked to output. (b) Hygiene only; no motivators like recognition or growth. (c) Recognition, job enrichment, advancement.",
            commonErrors: [
              "Saying more pay is always the answer — Herzberg says hygiene factors only prevent dissatisfaction.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Maslow's hierarchy of needs, which need is satisfied last (highest)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-actualisation needs" },
              { id: "b", text: "Esteem needs" },
              { id: "c", text: "Safety needs" },
              { id: "d", text: "Social needs" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow hierarchy",
                statement:
                  "Physiological, safety, social, esteem, self-actualisation — in that order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Self-actualisation is the top of Maslow's hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Self-actualisation needs",
            commonErrors: ["Confusing esteem needs with self-actualisation."],
          },
        },
        {
          id: "bus-u3-mot-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Paying workers a set amount for each unit they produce is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salaried pay" },
              { id: "b", text: "Piece-rate pay" },
              { id: "c", text: "Bonus pay" },
              { id: "d", text: "Time-rate pay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Piece-rate pay",
                statement:
                  "Paying a fixed amount for each unit of output produced.",
              },
            ],
            steps: [
              {
                reasoning: "Pay per unit produced is piece-rate pay (Taylor).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Piece-rate pay",
            commonErrors: ["Confusing piece-rate with time-rate pay."],
          },
        },
        {
          id: "bus-u3-mot-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A worker produces 400 units in a week and is paid $0.30 for each unit. Calculate the worker's weekly pay ($).",
          response: {
            type: "numeric",
            parts: [{ label: "Weekly pay ($)", answer: 120, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Piece-rate earnings",
                statement: "Pay = units produced x rate per unit",
              },
            ],
            steps: [
              {
                reasoning: "Multiply units by the rate per unit.",
                working: "400 x 0.30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "120",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the pay with units.",
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120$",
            commonErrors: ["Adding instead of multiplying units by the rate."],
          },
        },
        {
          id: "bus-u3-mot-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In an annual survey, 60 out of 120 employees said they felt motivated at work. Calculate the percentage of motivated employees (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Motivated (%)", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Divide motivated staff by total staff.",
                working: "60 / 120 = 0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 100 to express as a percentage.",
                working: "0.5 x 100 = 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "50%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.5."],
          },
        },
        {
          id: "bus-u3-mot-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why improving working conditions may not increase employee motivation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Herzberg hygiene factors",
                statement:
                  "Working conditions prevent dissatisfaction but do not create motivation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Working conditions are hygiene factors — they prevent dissatisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once conditions are acceptable, they no longer drive effort or satisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only motivators such as recognition and responsibility build real motivation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: better conditions reduce complaints but need motivators to inspire.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Working conditions are hygiene factors — they remove dissatisfaction but do not motivate.",
            commonErrors: [
              "Claiming better conditions always motivate — Herzberg disagrees.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using Maslow's hierarchy, explain why a worker struggling to pay rent may not respond to a 'team spirit' initiative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maslow hierarchy",
                statement:
                  "Lower needs must be satisfied before higher needs motivate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rent worries are physiological and safety needs — the lowest levels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "While these are unmet, social belonging ('team spirit') has little motivational power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Maslow predicts motivation comes from addressing lower needs first.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: financial security must be addressed before belonging initiatives work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unmet lower needs (pay, security) dominate, so social initiatives cannot motivate.",
            commonErrors: [
              "Applying Maslow without linking rent worries to lower-level needs.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A call centre pays agents per call handled. Staff now rush calls and complaints about service quality are rising.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two Herzberg 'hygiene factors' the call centre should maintain.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why piece-rate pay has failed to motivate quality service.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Recommend two non-financial motivators for the call centre.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation theory application",
                statement:
                  "Hygiene factors prevent dissatisfaction; motivators create satisfaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Hygiene factors such as working conditions, supervision and job security prevent dissatisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Correctly identified and linked to the centre's context.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Pay is a hygiene factor — it prevents dissatisfaction but does not create motivation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Pay per call rewards speed, so agents sacrifice quality — a misaligned incentive.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Conclusion: financial incentives alone cannot produce quality motivation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any two Herzberg motivators: recognition, responsibility, training or advancement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both recommendations are clearly non-financial motivators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Hygiene factors like conditions and supervision. (b) Pay is hygiene only and rewards speed. (c) Recognition, responsibility, training.",
            commonErrors: [
              "Assuming more pay will fix a quality problem Herzberg attributes to missing motivators.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to Herzberg, which of the following is a 'hygiene factor'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Achievement" },
              { id: "b", text: "Working conditions" },
              { id: "c", text: "Recognition" },
              { id: "d", text: "Responsibility" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg hygiene factors",
                statement:
                  "Pay, conditions, supervision, security — prevent dissatisfaction only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Achievement, recognition and responsibility are motivators; conditions are hygiene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Working conditions",
            commonErrors: [
              "Classifying motivators like recognition as hygiene factors.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Frederick Taylor's scientific management approach motivates workers mainly through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Financial incentives linked to output" },
              { id: "b", text: "Flexible working hours" },
              { id: "c", text: "Team-building activities" },
              { id: "d", text: "Job rotation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scientific management",
                statement:
                  "Simplify tasks and pay workers by output (piece-rate).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taylor linked pay directly to output via piece-rate systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Financial incentives linked to output",
            commonErrors: [
              "Attributing human-relations methods to Taylor's approach.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm pays workers $0.25 per unit produced. A worker produces 600 units in one week. Calculate the worker's weekly earnings ($).",
          response: {
            type: "numeric",
            parts: [{ label: "Weekly earnings ($)", answer: 150, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Piece-rate earnings",
                statement: "Earnings = units produced x rate per unit",
              },
            ],
            steps: [
              {
                reasoning: "Multiply units by the rate per unit.",
                working: "600 x 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the earnings with units.",
                working: "150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150$",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "bus-u3-mot-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two limitations of relying only on financial rewards to motivate workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limits of financial motivation",
                statement:
                  "Money prevents dissatisfaction but does not create lasting satisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Money is a hygiene factor — it cannot create the satisfaction motivators provide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Output-based pay can encourage quantity over quality and discourage teamwork.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different workers value different motivators beyond pay.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: financial rewards work best combined with other motivators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Financial rewards alone satisfy only basic needs and can harm quality and teamwork.",
            commonErrors: [
              "Claiming money always motivates — Herzberg shows its limits.",
            ],
          },
        },
        {
          id: "bus-u3-mot-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In Maslow's theory, once a lower-level need is satisfied:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Needs are satisfied in random order" },
              { id: "b", text: "It continues to motivate strongly" },
              { id: "c", text: "The worker loses all motivation" },
              { id: "d", text: "The next higher need becomes the motivator" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maslow hierarchy",
                statement:
                  "A satisfied need stops motivating; the next level up takes over.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maslow's needs are satisfied in sequence — the next need motivates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The next higher need becomes the motivator",
            commonErrors: ["Thinking satisfied needs keep motivating forever."],
          },
        },
        {
          id: "bus-u3-mot-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which theorist argued that jobs should be broken into simple tasks and workers paid by output?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taylor" },
              { id: "b", text: "Herzberg" },
              { id: "c", text: "Belbin" },
              { id: "d", text: "Maslow" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Taylor's scientific management",
                statement:
                  "Break jobs into simple, timed tasks; pay by output (piece-rate).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scientific management is associated with Frederick Taylor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Taylor",
            commonErrors: ["Confusing Taylor with Maslow or Herzberg."],
          },
        },
      ],
    },
  ],
};
