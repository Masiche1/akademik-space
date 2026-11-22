import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eiasbiz-u2-lesson-2-1",
  code: "2-1",
  title: "Recruitment and Selection",
  goal: "I CAN describe the recruitment process and selection methods.",
  standards: ["Edexcel IAS Business WBP01 Unit 2 — Human Resource Management"],
  vocabulary: [
    {
      term: "Recruitment",
      definition: "Process of finding and attracting candidates for a job.",
    },
    {
      term: "Selection",
      definition: "Choosing the best candidate from applicants.",
    },
    {
      term: "Job description",
      definition: "Document detailing role responsibilities and requirements.",
    },
    {
      term: "Person specification",
      definition: "Skills, qualifications and qualities needed.",
    },
    {
      term: "Induction",
      definition: "Introducing new employees to the organisation.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u2-recruit",
      title: "Recruitment Process",
      skill: "Describe stages from vacancy to induction.",
      lesson: {
        sections: [
          {
            heading: "Recruitment stages",
            body: "**Identify need**: vacancy arises — new role or replacement. **Job analysis**: produce job description + person specification. **Advertise**: job boards, agencies, internal, newspapers. **Screen applications**: CVs, covering letters. **Shortlist**: select candidates for interview.\n\n**Interview**: assess suitability — competency, technical, behavioural. **Offer**: employment contract terms. **Induction**: orient new employee — policies, systems, team.",
          },
          {
            heading: "Selection methods",
            body: "**Interviews**: structured (same questions all) vs unstructured. **Tests**: aptitude, personality, technical. **Assessment centres**: group exercises, presentations. **References**: previous employers check performance. **Trial periods**: work trial before permanent hire.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Company needs new accountant. First step?",
          solution: "Identify need — analyse role requirements.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-rec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between recruitment and selection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Recruitment = attracting candidates; selection = choosing best",
              },
              { id: "b", text: "Same thing" },
              { id: "c", text: "Selection is advertising" },
              { id: "d", text: "Recruitment is faster" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recruitment vs selection",
                statement: "Attract vs choose.",
              },
            ],
            steps: [
              {
                reasoning: "Recruit=attract; select=choose.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Attract vs choose",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "eiasbiz-u2-rec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a job description used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job description",
                statement: "Role details.",
              },
            ],
            steps: [
              {
                reasoning: "Details responsibilities and duties of role.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Basis for advertising and candidate assessment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Helps candidates decide if suitable.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Role duties — guides advertising and selection.",
            commonErrors: ["Person spec confused.", "Vague."],
          },
        },
        {
          id: "eiasbiz-u2-rec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two advantages of internal recruitment over external.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal recruitment",
                statement: "Know candidates, cheaper.",
              },
            ],
            steps: [
              {
                reasoning: "Known quantity — performance already observed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cheaper — no advertising costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Motivates staff — career progression visible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Faster — no external search.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Known performance, cheaper, motivates staff.",
            commonErrors: ["External better.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-rec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company must choose between structured and unstructured interviews.",
          parts: [
            { label: "a", prompt: "Explain structured interviews.", marks: 3 },
            {
              label: "b",
              prompt: "Explain unstructured interviews.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Recommend one with justification.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Interview types",
                statement: "Standardised vs flexible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Same questions all candidates — comparable, fair.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Scored against criteria — objective.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Flexible questions — explores personality, fit.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Less comparable — interviewer bias risk.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Structured for fairness/consistency; unstructured for culture fit.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) standardised/fair (b) flexible/biased (c) justified",
            commonErrors: ["No difference.", "No recommendation."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-training",
      title: "Training and Development",
      skill: "Distinguish training methods and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Training types",
            body: "**Induction**: first days/weeks — policies, systems, safety. **On-the-job**: learn while working — shadowing, mentoring. **Off-the-job**: courses, workshops, external training. **In-house**: company-run programmes.\n\n**Development**: long-term growth — leadership programmes, further education, career planning.",
          },
          {
            heading: "Training methods",
            body: "**Lectures**: formal presentations — cheap, large groups. **Workshops**: practical exercises — hands-on. **E-learning**: online modules — flexible, self-paced. **Mentoring**: experienced guides junior. **Job rotation**: move between roles — broad skills.\n\n**Evaluation**: does training improve performance? Measure before/after.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "New staff learn by shadowing experienced colleagues. Method?",
          solution: "On-the-job training.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-train-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is induction training?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advanced leadership course" },
              { id: "b", text: "Technical skills course" },
              {
                id: "c",
                text: "Introduction for new employees to organisation",
              },
              { id: "d", text: "Annual refresher" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Induction",
                statement: "New employee orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Induction = new starter intro.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** New employee intro",
            commonErrors: ["Advanced confused."],
          },
        },
        {
          id: "eiasbiz-u2-train-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of training employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training benefits",
                statement: "Skills, productivity.",
              },
            ],
            steps: [
              {
                reasoning: "Improves skills and productivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces errors and accidents.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Increases job satisfaction and retention.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Skills, fewer errors, retention.",
            commonErrors: ["Only cost.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-train-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare on-the-job and off-the-job training.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Training types",
                statement: "Workplace vs external.",
              },
            ],
            steps: [
              {
                reasoning: "On-job: learn by doing, relevant, no lost time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "On-job: may disrupt work, less structured.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Off-job: focused, expert trainers, no disruption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Off-job: costly, time away from work.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "On-job=practical/costly off; off-job=focused/costly.",
            commonErrors: ["Same thing.", "No comparison."],
          },
        },
        {
          id: "eiasbiz-u2-train-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A retailer wants to train 50 new staff quickly for peak season.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two suitable training methods.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why each suits this situation.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training choice",
                statement: "Match method to needs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) E-learning modules — scalable, fast rollout.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) On-the-job shadowing — practical product knowledge.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) E-learning: 50 staff simultaneously, self-paced.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Shadowing: hands-on customer interaction practice.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) e-learning+shadowing (b) scalable+practical",
            commonErrors: ["Only one.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-motivation",
      title: "Motivation Theories",
      skill: "Apply Maslow and Herzberg theories to workplace motivation.",
      lesson: {
        sections: [
          {
            heading: "Maslow's hierarchy",
            body: "**Physiological**: food, shelter, basic needs. **Safety**: job security, safe conditions. **Social**: belonging, teamwork. **Esteem**: recognition, status. **Self-actualisation**: fulfilment, achieving potential.\n\n**Theory**: people motivated by unmet needs — satisfy lower levels before higher.",
          },
          {
            heading: "Herzberg's two-factor",
            body: "**Hygiene factors**: salary, conditions, security, supervision — prevent dissatisfaction but don't motivate. **Motivators**: achievement, recognition, responsibility, growth — create satisfaction.\n\n**Example**: higher pay removes dissatisfaction (hygiene); praise and promotion motivate (motivators).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Employee wants challenging projects, not just more pay. Which theory?",
          solution:
            "Herzberg — motivators (achievement, growth) vs hygiene (pay).",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-motiv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does Maslow's hierarchy describe?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hierarchy of human needs motivating behaviour",
              },
              { id: "b", text: "Organisational structure" },
              { id: "c", text: "Pay structures" },
              { id: "d", text: "Team dynamics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement: "Needs hierarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Maslow = needs hierarchy.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Needs hierarchy",
            commonErrors: ["Pay confused."],
          },
        },
        {
          id: "eiasbiz-u2-motiv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two hygiene factors in Herzberg's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hygiene factors",
                statement: "Prevent dissatisfaction.",
              },
            ],
            steps: [
              { reasoning: "Salary/pay.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Working conditions, job security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supervision quality, company policy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pay, conditions, security, supervision.",
            commonErrors: ["Motivators.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-motiv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between hygiene factors and motivators.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Hygiene vs motivators",
                statement: "Dissatisfaction vs satisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hygiene: prevent dissatisfaction — pay, conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Motivators: create satisfaction — achievement, recognition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Good hygiene ≠ motivation — need both.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: raise pay (hygiene) + give recognition (motivator).",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Hygiene prevents discontent; motivators create satisfaction.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "eiasbiz-u2-motiv-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Employees at a factory are demotivated despite good pay.",
          parts: [
            { label: "a", prompt: "Apply Herzberg to explain why.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two motivators to introduce.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Herzberg application",
                statement: "Hygiene met, motivators missing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Pay = hygiene — satisfied but doesn't motivate.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Missing motivators — no recognition, growth, responsibility.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Recognition — employee of month, praise.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Responsibility — team leader roles, projects.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) hygiene≠motivation (b) recognition+responsibility",
            commonErrors: ["Pay problem.", "No motivators."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-relations",
      title: "Employee Relations and Legal Framework",
      skill: "Explain employment contracts, rights and dispute resolution.",
      lesson: {
        sections: [
          {
            heading: "Employment rights",
            body: "**Contract**: terms of employment — pay, hours, duties, notice period. **Rights**: minimum wage, working time limits, holiday pay, sick pay, discrimination protection, unfair dismissal protection.\n\n**Discrimination**: illegal based on age, gender, race, disability, religion, sexual orientation — Equality Act 2010 (UK).",
          },
          {
            heading: "Disputes and unions",
            body: "**Trade unions**: represent workers — negotiate pay/conditions collectively. **Collective bargaining**: union-management negotiations. **Dispute resolution**: internal grievance → mediation → arbitration → tribunal.\n\n**Dismissal**: fair reasons (misconduct, capability, redundancy); unfair dismissal gives employee claim.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Worker sacked for pregnancy. Legal issue?",
          solution: "Unfair dismissal + discrimination — automatic unfair.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-rel-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an employment contract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A payslip" },
              { id: "b", text: "A job advert" },
              {
                id: "c",
                text: "Agreement of terms between employer and employee",
              },
              { id: "d", text: "A union document" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Employment contract",
                statement: "Terms agreement.",
              },
            ],
            steps: [
              {
                reasoning: "Contract = agreed terms.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Terms agreement",
            commonErrors: ["Advert confused."],
          },
        },
        {
          id: "eiasbiz-u2-rel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two employee rights protected by law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Employee rights",
                statement: "Wage, hours, protection.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum wage and holiday pay.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Protection from discrimination and unfair dismissal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Working time limits, sick pay.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Wage, hours, holiday, anti-discrimination.",
            commonErrors: ["Only one.", "Not rights."],
          },
        },
        {
          id: "eiasbiz-u2-rel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what collective bargaining is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective bargaining",
                statement: "Union negotiations.",
              },
            ],
            steps: [
              {
                reasoning: "Trade union negotiates with management.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Covers pay, conditions, hours for all members.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stronger negotiating power than individuals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can lead to strikes if agreement fails.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Union-management negotiation of terms.",
            commonErrors: ["Individual contract.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u2-rel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An employee is dismissed after 10 years for minor misconduct.",
          parts: [
            {
              label: "a",
              prompt: "Explain fair vs unfair dismissal.",
              marks: 3,
            },
            { label: "b", prompt: "Analyse this case.", marks: 3 },
            { label: "c", prompt: "Suggest resolution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dismissal law",
                statement: "Fair reasons required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Fair: misconduct, capability, redundancy, legal bar.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unfair: no valid reason or wrong procedure.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Minor misconduct — may be unfair if disproportionate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) 10 years service — strong unfair dismissal claim.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Grievance/tribunal — mediation first.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) fair vs unfair (b) likely unfair (c) tribunal",
            commonErrors: ["Always fair.", "No procedure."],
          },
        },
      ],
    },
  ],
};
