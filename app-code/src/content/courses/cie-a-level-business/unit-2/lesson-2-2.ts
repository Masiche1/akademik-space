import type { Lesson } from "../../../types.ts";

export const lesson382: Lesson = {
  id: "ciealbus-u2-lesson-2-2",
  code: "2-2",
  title: "Human Resource Management",
  goal: "I CAN explain HRM functions and motivation theories.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: HRM"],

  vocabulary: [
    { term: "HRM", definition: "Managing human resources." },
    { term: "Recruitment", definition: "Hiring new employees." },
    { term: "Training", definition: "Developing employee skills." },
    { term: "Motivation", definition: "Driving employee performance." },
    {
      term: "Maslow's hierarchy",
      definition:
        "Needs hierarchy: physiological→safety→belonging→esteem→self-actualisation.",
    },
    { term: "Herzberg's theory", definition: "Hygiene factors vs motivators." },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s2-hrm",
      title: "Human resource management",
      skill: "Understand HRM functions and motivation.",
      lesson: {
        sections: [
          {
            heading: "HRM functions",
            body: "Recruitment and selection, training and development, performance management, remuneration, industrial relations, health and safety.",
          },
          {
            heading: "Motivation theories",
            body: "Maslow: hierarchy of needs — lower needs must be met before higher. Herzberg: hygiene factors (salary, conditions) prevent dissatisfaction; motivators (achievement, recognition) create satisfaction.",
          },
        ],
        keyFormulas: [
          { name: "HRM", statement: "human resource management" },
          { name: "Maslow", statement: "needs hierarchy" },
          { name: "Herzberg", statement: "hygiene vs motivators" },
        ],
        workedExample: {
          problem:
            "An employee is paid well but unmotivated. What could explain this?",
          solution:
            "Herzberg: salary is hygiene factor — prevents dissatisfaction but doesn't motivate. Need motivators: recognition, achievement, responsibility.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-hr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is HRM?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Managing human resources",
              },
              {
                id: "b",
                text: "Finance",
              },
              {
                id: "c",
                text: "Operations",
              },
              {
                id: "d",
                text: "Marketing",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HRM",
                statement: "Human resources.",
              },
            ],
            steps: [
              {
                reasoning: "HRM = managing human resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Human resources",
          },
        },
        {
          id: "ciealbus-u2-hr-q2",
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
                  "Hierarchy of needs: physiological→safety→belonging→esteem→self-actualisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower needs must be met first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Needs hierarchy",
          },
        },
        {
          id: "ciealbus-u2-hr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Herzberg's two-factor theory?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg",
                statement: "Hygiene vs motivators.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hygiene factors prevent dissatisfaction (salary, conditions).",
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
                reasoning: "Different factors for different outcomes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hygiene vs motivators",
          },
        },
        {
          id: "ciealbus-u2-hr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define HRM, recruitment, training, motivation, Maslow's hierarchy, Herzberg's theory. (b) What is HRM? (c) What are HRM functions? (d) What is Maslow's hierarchy? (e) What is Herzberg's theory? (f) Compare Maslow and Herzberg. (g) How does motivation affect productivity? (h) Evaluate which motivation theory is most useful for managers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "HRM",
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
                reasoning: "(b) Human resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Recruitment, training, performance, remuneration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Needs hierarchy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Hygiene vs motivators.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Maslow hierarchy vs Herzberg factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Motivated employees more productive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Context-dependent evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "HRM and motivation theories.",
          },
        },
        {
          id: "ciealbus-u2-hr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Maslow's hierarchy of needs, food, water and shelter are examples of which need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Self-actualisation needs" },
              { id: "b", text: "Safety needs" },
              { id: "c", text: "Esteem needs" },
              { id: "d", text: "Physiological needs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Maslow",
                statement:
                  "Physiological needs are the most basic: food, water, shelter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Food, water and shelter are physiological — the lowest level of Maslow's hierarchy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Physiological needs",
          },
        },
        {
          id: "ciealbus-u2-hr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The process of attracting and hiring new employees is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "appraisal" },
              { id: "b", text: "induction" },
              { id: "c", text: "recruitment" },
              { id: "d", text: "training" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recruitment",
                statement: "Attracting and hiring new employees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recruitment covers attracting applicants and selecting new employees.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Recruitment",
          },
        },
        {
          id: "ciealbus-u2-hr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to Herzberg, which of the following is a 'motivator' rather than a hygiene factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company policy" },
              { id: "b", text: "Recognition for achievement" },
              { id: "c", text: "Salary level" },
              { id: "d", text: "Working conditions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herzberg",
                statement:
                  "Motivators create satisfaction; hygiene factors prevent dissatisfaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recognition and achievement are motivators; salary, conditions and policy are hygiene factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Recognition for achievement",
          },
        },
        {
          id: "ciealbus-u2-hr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An employee is paid well but still lacks job satisfaction. Herzberg would explain this because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the employee's physiological needs are unmet" },
              {
                id: "b",
                text: "salary is a hygiene factor — it prevents dissatisfaction but does not motivate",
              },
              { id: "c", text: "pay is the only motivator that matters" },
              { id: "d", text: "all motivation theories are wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hygiene factors",
                statement:
                  "Salary and conditions prevent dissatisfaction but do not motivate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pay removes dissatisfaction but real motivation needs motivators like recognition and achievement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Salary is hygiene — it does not motivate",
          },
        },
        {
          id: "ciealbus-u2-hr-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm employs 40 workers paid £2,000 per month each. (a) Calculate the total monthly wage bill. (b) If all wages rise by 5%, calculate the new total monthly wage bill.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80000, unit: "£" },
              { label: "b", answer: 84000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wage bill",
                statement:
                  "Total wages = number of employees x wage per employee.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Wage bill = 40 x 2000.",
                working: "40 \\times 2000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) New bill = 80000 x 1.05.",
                working: "80000 \\times 1.05",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£80,000 and £84,000",
          },
        },
        {
          id: "ciealbus-u2-hr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An employee earns £12 per hour for 35 hours per week. Overtime is paid at time-and-a-half (£18 per hour). (a) Calculate the weekly pay with no overtime. (b) Calculate the weekly pay with 5 hours of overtime.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 420, unit: "£" },
              { label: "b", answer: 510, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Wage calculation",
                statement:
                  "Pay = hours x hourly rate; overtime at premium rate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Pay = 35 x 12.",
                working: "35 \\times 12",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Pay = basic + 5 x 18.",
                working: "420 + (5 \\times 18)",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£420 and £510",
          },
        },
        {
          id: "ciealbus-u2-hr-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why a business invests in training and development for its employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Training",
                statement: "Developing employee skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Training improves skills, productivity and quality of output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can motivate staff, improve retention and give competitive advantage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Training raises productivity, motivation and competitiveness.",
          },
        },
        {
          id: "ciealbus-u2-hr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare Maslow's hierarchy of needs with Herzberg's two-factor theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Motivation theories",
                statement: "Maslow hierarchy vs Herzberg factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maslow: needs are hierarchical — lower needs must be satisfied before higher ones motivate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Herzberg: separate hygiene factors (prevent dissatisfaction) from motivators (create satisfaction).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both explain motivation but differ on whether the same factors drive satisfaction and motivation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Maslow = needs hierarchy; Herzberg = hygiene vs motivators.",
          },
        },
        {
          id: "ciealbus-u2-hr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A manager offers a 10% pay rise to a demotivated team but performance does not improve. Which theory best explains this?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Maslow — pay only satisfies physiological needs",
              },
              { id: "b", text: "Scientific management — pay is irrelevant" },
              { id: "c", text: "Theory X — workers cannot be motivated" },
              {
                id: "d",
                text: "Herzberg — pay is a hygiene factor; motivators like recognition are needed",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Applying Herzberg",
                statement:
                  "Pay prevents dissatisfaction; motivators drive performance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Herzberg predicts pay rises alone won't motivate — recognition and achievement are needed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Herzberg — hygiene vs motivators",
          },
        },
        {
          id: "ciealbus-u2-hr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate whether a business should spend money on employee training programmes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Training costs vs benefits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: higher productivity, better quality, motivation, retention of skilled staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Costs: direct spending plus lost output while staff are being trained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: worthwhile where skills gaps exist, but must be relevant and measured.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Training pays off if targeted at real skill gaps.",
          },
        },
        {
          id: "ciealbus-u2-hr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A firm makes a profit of £600,000 and employs 30 people. (a) Calculate profit per employee. (b) If it expands to 40 employees while profit stays at £600,000, calculate the new profit per employee.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20000, unit: "£" },
              { label: "b", answer: 15000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit per employee",
                statement:
                  "Profit per employee = total profit / number of employees.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit per employee = 600000 / 30.",
                working: "600000 \\div 30",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Profit per employee = 600000 / 40.",
                working: "600000 \\div 40",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£20,000 and £15,000",
          },
        },
        {
          id: "ciealbus-u2-hr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate which motivation theory — Maslow's or Herzberg's — is more useful to a manager.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement:
                  "Compare practical usefulness of motivation theories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maslow is intuitive — managers can ensure basic needs (pay, security) before seeking higher motivation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Herzberg is more actionable — it separates pay/conditions (hygiene) from achievement and recognition (motivators).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both are simplifications of real motivation, which is influenced by culture and individual differences.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: Herzberg offers clearer management guidance; Maslow gives useful context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Herzberg is more actionable for managers; Maslow provides useful context.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-hr-notes",
      title: "HRM — notes",
      summary:
        "HRM functions: recruitment→training→performance→remuneration. Maslow vs Herzberg motivation.",
      sections: [
        {
          heading: "Key idea",
          body: "Human resources are key competitive advantage — motivation drives performance.",
        },
        {
          heading: "Theories",
          body: "Maslow: needs hierarchy. Herzberg: hygiene prevents dissatisfaction, motivators create satisfaction.",
        },
      ],
    },
  ],
};
