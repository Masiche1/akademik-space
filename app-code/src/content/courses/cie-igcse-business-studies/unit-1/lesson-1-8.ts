import type { Lesson } from "../../../types.ts";

export const lesson258: Lesson = {
  id: "cieibs-u1-lesson-1-8",
  code: "1-8",
  title: "Human Resources and Motivation",
  goal: "I CAN explain HR functions and motivation theories.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: human resources",
  ],

  vocabulary: [
    { term: "Human resources", definition: "Management of employees." },
    { term: "Recruitment", definition: "Hiring new employees." },
    { term: "Training", definition: "Developing employee skills." },
    { term: "Motivation", definition: "Drive to achieve goals." },
    {
      term: "Maslow's hierarchy",
      definition: "Motivation theory: needs hierarchy.",
    },
    {
      term: "Herzberg's theory",
      definition: "Motivation: hygiene vs motivator factors.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u1-s8-hr",
      title: "Human resources",
      skill: "Understand HR functions and motivation.",
      lesson: {
        sections: [
          {
            heading: "HR functions",
            body: "Recruitment: attract/select candidates. Training: develop skills. Appraisal: evaluate performance. Discipline: manage conduct. Remuneration: pay/benefits. Motivation: encourage performance.",
          },
          {
            heading: "Motivation theories",
            body: "Maslow: hierarchy of needs (physiological→safety→social→esteem→self-actualisation). Herzberg: hygiene factors (pay, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction.",
          },
        ],
        keyFormulas: [
          {
            name: "HR functions",
            statement: "recruit, train, appraise, remunerate",
          },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem:
            "An employee is paid well but feels unappreciated. What motivates them?",
          solution:
            "Herzberg: pay is hygiene factor (prevents dissatisfaction). Recognition/achievement are motivators — need praise, challenging work, growth opportunities.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-hr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is human resources?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A legal requirement",
              },
              {
                id: "b",
                text: "A type of tax",
              },
              {
                id: "c",
                text: "Management of employees",
              },
              {
                id: "d",
                text: "A marketing strategy",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HR",
                statement: "Employee management.",
              },
            ],
            steps: [
              {
                reasoning: "HR = managing employees.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Employee management",
          },
        },
        {
          id: "cieibs-u1-hr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is Maslow's hierarchy?",
          response: {
            type: "open",
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
                reasoning:
                  "Hierarchy of needs: physiological→safety→social→esteem→self-actualisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower needs must be met before higher.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Needs hierarchy",
          },
        },
        {
          id: "cieibs-u1-hr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between Herzberg's hygiene and motivator factors?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Herzberg",
                statement: "Hygiene vs motivators.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hygiene factors prevent dissatisfaction (pay, conditions).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Motivators create satisfaction (achievement, recognition).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both needed for motivation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hygiene vs motivators",
          },
        },
        {
          id: "cieibs-u1-hr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define human resources, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HR? (c) What is recruitment? (d) What is training? (e) What is Maslow's hierarchy? (f) What is Herzberg's theory? (g) Give 3 hygiene factors. (h) Design a motivation programme for a restaurant.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "HR",
                statement: "Functions, motivation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Employee management.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Hiring employees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Developing skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Needs hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Hygiene vs motivators.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three valid hygiene factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid motivation programme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Human resources and motivation.",
          },
        },
        {
          id: "cieibs-u1-hr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Maslow's hierarchy of needs, which need is at the lowest level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-actualisation" },
              { id: "b", text: "Physiological" },
              { id: "c", text: "Social" },
              { id: "d", text: "Esteem" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow's hierarchy",
                statement:
                  "Physiological -> safety -> social -> esteem -> self-actualisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physiological needs (food, shelter) are the base level.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Physiological",
          },
        },
        {
          id: "cieibs-u1-hr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Herzberg, which of the following is a motivator factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salary level" },
              { id: "b", text: "Company policy" },
              { id: "c", text: "Recognition for achievement" },
              { id: "d", text: "Working conditions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg",
                statement:
                  "Hygiene factors prevent dissatisfaction; motivators create satisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recognition is a motivator; pay and conditions are hygiene factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Recognition for achievement",
          },
        },
        {
          id: "cieibs-u1-hr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business spends $20,000 on training 40 employees and runs 120 appraisals a year for its 30 staff. (a) Calculate the training cost per employee. (b) Calculate the average number of appraisals per employee per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500, unit: "$" },
              { label: "b", answer: 4, unit: "appraisals" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "HR cost analysis",
                statement:
                  "Cost per employee = total cost / number of employees.",
              },
            ],
            steps: [
              {
                reasoning: "Training per employee = 20000 / 40 = $500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Appraisals per employee = 120 / 30 = 4 per year.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $500, b) 4 appraisals",
          },
        },
        {
          id: "cieibs-u1-hr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between hygiene factors and motivator factors in Herzberg's theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg",
                statement:
                  "Hygiene prevents dissatisfaction; motivators create satisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hygiene factors (pay, conditions, policy) only prevent dissatisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Motivators (achievement, recognition, growth) actively motivate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Hygiene = prevent dissatisfaction; motivators = create satisfaction",
          },
        },
        {
          id: "cieibs-u1-hr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is recruitment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Firing underperforming staff" },
              { id: "b", text: "Paying employees" },
              { id: "c", text: "Training existing staff" },
              { id: "d", text: "Attracting and selecting new employees" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recruitment",
                statement: "Attracting and selecting candidates for jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Recruitment is the hiring process.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Attracting and selecting new employees",
          },
        },
        {
          id: "cieibs-u1-hr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm had an average of 50 employees. During the year it hired 10 and 8 employees left. (a) Calculate the labour turnover rate as a percentage of average staff. (b) Calculate the net change in staff numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16, unit: "%" },
              { label: "b", answer: 2, unit: "employees" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Labour turnover",
                statement: "Turnover = leavers / average staff x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Turnover = 8 / 50 x 100 = 16%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net change = 10 hired - 8 left = +2 employees.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 16%, b) +2 employees",
          },
        },
        {
          id: "cieibs-u1-hr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Using Herzberg's theory, explain why an employee who is well paid but receives no recognition may still feel unmotivated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg",
                statement:
                  "Pay is a hygiene factor; recognition is a motivator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pay prevents dissatisfaction but does not motivate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lack of recognition removes a key motivator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "So the employee avoids dissatisfaction but feels no satisfaction — applied to scenario.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pay = hygiene only; missing recognition = no motivation",
          },
        },
        {
          id: "cieibs-u1-hr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of staff appraisal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To set the company's prices" },
              { id: "b", text: "To evaluate employee performance" },
              { id: "c", text: "To design the product" },
              { id: "d", text: "To recruit new staff" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appraisal",
                statement: "Evaluating employee performance.",
              },
            ],
            steps: [
              {
                reasoning: "Appraisals review and assess performance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Evaluate employee performance",
          },
        },
        {
          id: "cieibs-u1-hr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm has 60 employees and spends $90,000 on annual salaries, plus $30,000 on benefits. (a) Calculate total remuneration. (b) Calculate remuneration per employee.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120000, unit: "$" },
              { label: "b", answer: 2000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Remuneration",
                statement: "Total pay = salaries + benefits.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 90000 + 30000 = $120,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Per employee = 120000 / 60 = $2,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $120,000, b) $2,000",
          },
        },
        {
          id: "cieibs-u1-hr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "List Maslow's hierarchy of needs in order and explain why lower-level needs must be satisfied before higher-level needs motivate employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement:
                  "Physiological, safety, social, esteem, self-actualisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Correct order: physiological -> safety -> social -> esteem -> self-actualisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "People prioritise basic needs like food and security first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher needs only motivate once lower ones are reasonably met.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physiological, safety, social, esteem, self-actualisation",
          },
        },
        {
          id: "cieibs-u1-hr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a function of human resources management?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Managing employee pay and benefits" },
              { id: "b", text: "Designing the website" },
              { id: "c", text: "Choosing suppliers" },
              { id: "d", text: "Setting machine prices" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HR functions",
                statement: "Recruit, train, appraise, remunerate, motivate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Remuneration (pay and benefits) is a core HR function.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Managing pay and benefits",
          },
        },
        {
          id: "cieibs-u1-hr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define human resources, recruitment, training, appraisal, remuneration, motivation. (b) What is recruitment? (c) What is training? (d) What is remuneration? (e) State the order of Maslow's hierarchy. (f) Distinguish hygiene from motivator factors. (g) A firm has 80 staff and 12 leave in a year. Calculate labour turnover rate. (h) A manager wants to motivate staff — suggest two actions based on Herzberg and justify them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "HR and motivation",
                statement: "Functions and theories.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Attracting and selecting new employees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Developing employee skills.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(d) Pay and benefits.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "(e) Physiological, safety, social, esteem, self-actualisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Hygiene prevents dissatisfaction; motivators create satisfaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Turnover = 12/80 x 100 = 15%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Two valid motivator actions, e.g. recognition and challenging work, justified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "HR functions and motivation theories.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-hr-notes",
      title: "HR — notes",
      summary:
        "HR=recruit, train, appraise, remunerate. Maslow=needs hierarchy; Herzberg=hygiene vs motivators.",
      sections: [
        {
          heading: "Key idea",
          body: "Motivation requires both hygiene factors and motivators.",
        },
        {
          heading: "Maslow",
          body: "Lower needs (physiological, safety) must be met before higher (esteem, self-actualisation).",
        },
      ],
    },
  ],
};
