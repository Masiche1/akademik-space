import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olbus-u4-lesson-4-1",
  code: "4-1",
  title: "Motivation",
  goal: "I CAN explain motivation theories and apply them to workplace situations.",
  standards: ["7100 4.1"],
  vocabulary: [
    { term: "Motivation", definition: "The drive to achieve goals and perform well." },
    { term: "Intrinsic motivation", definition: "Motivation from internal satisfaction." },
    { term: "Extrinsic motivation", definition: "Motivation from external rewards." },
    { term: "Maslow's hierarchy", definition: "Theory that people satisfy needs in order of priority." },
    { term: "Herzberg's theory", definition: "Hygiene factors prevent dissatisfaction; motivators create satisfaction." },
    { term: "Financial rewards", definition: "Pay, bonuses, benefits used to motivate." },
  ],
  concepts: [
    {
      id: "olbus-u4-motivation",
      title: "Motivation theories",
      skill: "Explain Maslow and Herzberg theories and their application.",
      lesson: {
        sections: [
          { heading: "Maslow's hierarchy", body: "People satisfy needs in order: physiological → safety → social → esteem → self-actualisation. Lower needs must be met before higher ones motivate." },
          { heading: "Herzberg's theory", body: "Two factors: **hygiene factors** (pay, conditions, job security) prevent dissatisfaction but don't motivate; **motivators** (achievement, recognition, responsibility, growth) create satisfaction and motivation." },
          { heading: "Application", body: "Managers use financial rewards (extrinsic) and job design, recognition, autonomy (intrinsic) to motivate employees." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An employee has good pay but feels unfulfilled. Which Herzberg factor is missing?",
          solution: "A motivator — e.g. lack of recognition, responsibility or growth opportunities.",
        },
      },
      questions: [
        {
          id: "olbus-u4-mo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Maslow's hierarchy orders needs from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Financial to social" },
            { id: "b", text: "Random order" },
            { id: "c", text: "Basic to advanced" },
            { id: "d", text: "Advanced to basic" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Maslow", statement: "Basic→advanced." }], steps: [{ reasoning: "Physiological first.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish hygiene factors from motivators (Herzberg).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Herzberg", statement: "Two factor types." }], steps: [
            { reasoning: "Hygiene prevent dissatisfaction; motivators create satisfaction.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Hygiene = prevent dissatisfaction; motivators = create satisfaction." },
        },
        {
          id: "olbus-u4-mo-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a manager might apply Maslow's theory to motivate staff.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Maslow application", statement: "Need-based motivation." }], steps: [
            { reasoning: "Meet basic needs first (pay, security).", marks: 1, markCode: "AO2" },
            { reasoning: "Then address social, esteem, self-actualisation needs.", marks: 1, markCode: "AO2" },
            { reasoning: "E.g. team building, recognition, training.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Satisfy lower needs first, then build belonging, esteem and growth." },
        },
        {
          id: "olbus-u4-mo-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Motivation review.",
          parts: [
            { label: "a", prompt: "Define motivation.", marks: 1 },
            { label: "b", prompt: "Name Maslow's five needs in order.", marks: 2 },
            { label: "c", prompt: "Hygiene vs motivators?", marks: 2 },
            { label: "d", prompt: "Two financial motivators?", marks: 1 },
            { label: "e", prompt: "Two non-financial motivators?", marks: 1 },
            { label: "f", prompt: "Which theory would explain why a raise doesn't motivate an unhappy employee?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Motivation", statement: "Theories and application." },
          ], steps: [
            { part: "a", reasoning: "Drive to perform well.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Physiological, safety, social, esteem, self-actualisation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct order.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Hygiene prevent dissatisfaction; motivators create satisfaction.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Pay, bonuses, benefits.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Recognition, responsibility, growth, autonomy.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Herzberg — pay is hygiene, not motivator.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 5 needs (c) hygiene/motivators (d) pay/bonus (e) recognition/growth (f) Herzberg" },
        },
        {
          id: "olbus-u4-mo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Maslow's hierarchy of needs begins with…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Self-actualisation" },
            { id: "b", text: "Physiological needs" },
            { id: "c", text: "Social needs" },
            { id: "d", text: "Esteem needs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Maslow", statement: "Basic needs first." }], steps: [{ reasoning: "Physiological needs are the base.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q6", difficulty: "core", totalMarks: 1,
          stem: "According to Herzberg, which of the following is a motivator?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Working conditions" },
            { id: "b", text: "Salary level" },
            { id: "c", text: "Recognition for good work" },
            { id: "d", text: "Job security" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Herzberg", statement: "Motivators." }], steps: [{ reasoning: "Recognition is a motivator; the others are hygiene factors.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Intrinsic motivation comes from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A promotion" },
            { id: "b", text: "Free lunches" },
            { id: "c", text: "Internal satisfaction from the work itself" },
            { id: "d", text: "A cash bonus" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Intrinsic motivation", statement: "Internal drive." }], steps: [{ reasoning: "Intrinsic = satisfaction from the work itself.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q8", difficulty: "core", totalMarks: 2,
          stem: "An employee earns $2,000 per month plus a 10% bonus for hitting targets. What is the bonus amount?",
          response: { type: "numeric", parts: [{ label: "a", answer: 200, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Bonus", statement: "% of pay." }], steps: [
            { part: "a", reasoning: "10% × 2000 = 200.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Bonus = $200.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $200" },
        },
        {
          id: "olbus-u4-mo-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A company pays sales staff a 5% commission on sales. A salesperson has a base salary of $1,500 and sells $40,000 of products. (a) What is the commission? (b) What is the total pay?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2000, unit: "$" },
            { label: "b", answer: 3500, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Commission", statement: "% of sales." }], steps: [
            { part: "a", reasoning: "5% × 40000 = 2000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "1500 + 2000 = 3500.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Total pay = $3,500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $2,000; **(b)** $3,500" },
        },
        {
          id: "olbus-u4-mo-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain the difference between intrinsic and extrinsic motivation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Motivation types", statement: "Internal vs external." }], steps: [
            { reasoning: "Intrinsic = satisfaction from the work itself.", marks: 1, markCode: "AO1" },
            { reasoning: "Extrinsic = motivation from external rewards like pay.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Intrinsic is internal satisfaction; extrinsic is external rewards." },
        },
        {
          id: "olbus-u4-mo-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a pay rise alone may not motivate an unhappy employee, using Herzberg's theory.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Herzberg", statement: "Hygiene vs motivators." }], steps: [
            { reasoning: "Pay is a hygiene factor — its absence causes dissatisfaction.", marks: 1, markCode: "AO2" },
            { reasoning: "Improving hygiene removes dissatisfaction but does not motivate.", marks: 1, markCode: "AO2" },
            { reasoning: "Motivators like recognition and growth are needed for satisfaction.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Pay is hygiene; without motivators like recognition, motivation stays low." },
        },
        {
          id: "olbus-u4-mo-q12", difficulty: "challenge", totalMarks: 1,
          stem: "In Maslow's hierarchy, which need is addressed after social needs?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Self-actualisation" },
            { id: "b", text: "Esteem needs" },
            { id: "c", text: "Physiological needs" },
            { id: "d", text: "Safety needs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Maslow", statement: "Need order." }], steps: [{ reasoning: "Order: physiological → safety → social → esteem → self-actualisation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Esteem needs" },
        },
        {
          id: "olbus-u4-mo-q13", difficulty: "core", totalMarks: 2,
          stem: "Two employees share a $3,000 team bonus equally. How much does each receive?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1500, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Bonus share", statement: "Equal split." }], steps: [
            { part: "a", reasoning: "3000 ÷ 2 = 1500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Each receives $1,500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $1,500" },
        },
        {
          id: "olbus-u4-mo-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Hygiene factors in Herzberg's theory…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are only financial rewards" },
            { id: "b", text: "Are unimportant" },
            { id: "c", text: "Prevent dissatisfaction but do not motivate" },
            { id: "d", text: "Always motivate employees" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Hygiene factors", statement: "Prevent dissatisfaction." }], steps: [{ reasoning: "Hygiene factors prevent dissatisfaction only.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q15", difficulty: "core", totalMarks: 2,
          stem: "A profit-sharing scheme gives staff 8% of company profits. If profit is $75,000, how much is shared among staff?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit sharing", statement: "% of profit." }], steps: [
            { part: "a", reasoning: "8% × 75000 = 6000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Shared amount = $6,000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $6,000" },
        },
        {
          id: "olbus-u4-mo-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Motivation extended review.",
          parts: [
            { label: "a", prompt: "Define motivation.", marks: 1 },
            { label: "b", prompt: "Name Maslow's five needs in order.", marks: 2 },
            { label: "c", prompt: "Distinguish hygiene factors from motivators.", marks: 2 },
            { label: "d", prompt: "Name two financial motivators.", marks: 1 },
            { label: "e", prompt: "Name two non-financial motivators.", marks: 1 },
            { label: "f", prompt: "Which theory explains why a pay rise does not motivate an unhappy employee?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Motivation", statement: "Theories and application." },
          ], steps: [
            { part: "a", reasoning: "Drive to perform well.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Physiological, safety, social, esteem, self-actualisation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct order.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Hygiene prevent dissatisfaction; motivators create satisfaction.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Pay, bonuses, benefits.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Recognition, responsibility, growth, autonomy.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Herzberg — pay is hygiene, not motivator.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 5 needs (c) hygiene/motivators (d) pay/bonus (e) recognition/growth (f) Herzberg" },
        },
      ],
    },
    {
      id: "olbus-u4-rewards",
      title: "Financial and Non-Financial Rewards",
      skill: "Compare financial and non-financial methods of motivation.",
      lesson: {
        sections: [
          { heading: "Financial rewards", body: "Salary, wages, bonuses, commission, profit sharing, pension, health benefits. Directly linked to performance in some schemes." },
          { heading: "Non-financial rewards", body: "Job security, recognition, promotion, training, flexible hours, better working conditions, autonomy. Often more sustainable motivators." },
          { heading: "Choosing", body: "Best results often combine both — financial rewards attract and retain; non-financial rewards motivate and satisfy." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A company offers flexible working hours and training opportunities. Which reward type?",
          solution: "Non-financial rewards — they motivate through job satisfaction rather than money.",
        },
      },
      questions: [
        {
          id: "olbus-u4-rw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Non-financial rewards include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recognition and flexible hours" },
            { id: "b", text: "Pension" },
            { id: "c", text: "Salary and bonuses" },
            { id: "d", text: "Commission" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Non-financial rewards", statement: "Non-monetary." }], steps: [{ reasoning: "Recognition/flexibility/training.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two financial rewards.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Financial rewards", statement: "Monetary." }], steps: [
            { reasoning: "Salary, bonuses, commission, profit sharing, pension — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: salary, bonuses, commission, profit sharing, pension." },
        },
        {
          id: "olbus-u4-rw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why non-financial rewards can be more effective than financial ones.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Non-financial rewards", statement: "Sustainable motivation." }], steps: [
            { reasoning: "Address higher-level needs (esteem, growth).", marks: 1, markCode: "AO2" },
            { reasoning: "Create lasting satisfaction, not just short-term boost.", marks: 1, markCode: "AO2" },
            { reasoning: "Lower cost to business.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They satisfy deeper needs and create lasting motivation at lower cost." },
        },
        {
          id: "olbus-u4-rw-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Rewards review.",
          parts: [
            { label: "a", prompt: "Name two financial rewards.", marks: 2 },
            { label: "b", prompt: "Name two non-financial rewards.", marks: 2 },
            { label: "c", prompt: "When is financial reward most effective?", marks: 2 },
            { label: "d", prompt: "When is non-financial most effective?", marks: 2 },
            { label: "e", prompt: "Ideal approach?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Rewards", statement: "Types and application." },
          ], steps: [
            { part: "a", reasoning: "Two financial rewards.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two non-financial rewards.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Performance-linked pay for sales/production roles.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Knowledge workers valuing autonomy/growth.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Combine both.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 financial (b) 2 non-financial (c) performance roles (d) knowledge work (e) combine" },
        },
        {
          id: "olbus-u4-rw-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Commission is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Payment based on the value of sales made" },
            { id: "b", text: "A fixed monthly salary" },
            { id: "c", text: "A non-financial reward" },
            { id: "d", text: "A pension payment" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Commission", statement: "Sales-based pay." }], steps: [{ reasoning: "Commission = pay linked to sales value.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q6", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a non-financial reward?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bonus payment" },
            { id: "b", text: "Commission" },
            { id: "c", text: "Flexible working hours" },
            { id: "d", text: "Profit sharing" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Non-financial rewards", statement: "Non-monetary." }], steps: [{ reasoning: "Flexible hours are non-financial; others are monetary.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Profit sharing means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Employees receive a share of company profits" },
            { id: "b", text: "Salaries are automatically reduced" },
            { id: "c", text: "Profits are donated to charity" },
            { id: "d", text: "Staff pay the company profits" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Profit sharing", statement: "Share of profits." }], steps: [{ reasoning: "Profit sharing = employees get a profit share.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q8", difficulty: "core", totalMarks: 2,
          stem: "A salesperson earns $1,200 base pay plus 3% commission on $30,000 of sales. What is the commission?",
          response: { type: "numeric", parts: [{ label: "a", answer: 900, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Commission", statement: "% of sales." }], steps: [
            { part: "a", reasoning: "3% × 30000 = 900.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Commission = $900.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $900" },
        },
        {
          id: "olbus-u4-rw-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Employee A earns a $2,000 salary plus an $800 bonus. Employee B earns a $2,500 salary. (a) What is Employee A's total pay? (b) How much more does Employee A earn than Employee B?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2800, unit: "$" },
            { label: "b", answer: 300, unit: "$" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Total pay", statement: "Salary + bonus." }], steps: [
            { part: "a", reasoning: "2000 + 800 = 2800.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "2800 - 2500 = 300.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "A earns $300 more.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $2,800; **(b)** $300" },
        },
        {
          id: "olbus-u4-rw-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of profit sharing for employers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit sharing", statement: "Employer benefit." }], steps: [
            { reasoning: "Links pay to performance, motivating staff.", marks: 1, markCode: "AO2" },
            { reasoning: "Aligns employee interests with company success.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Motivates staff and aligns their interests with company performance." },
        },
        {
          id: "olbus-u4-rw-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why combining financial and non-financial rewards is often the best approach.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reward systems", statement: "Combined approach." }], steps: [
            { reasoning: "Financial rewards attract and retain staff.", marks: 1, markCode: "AO2" },
            { reasoning: "Non-financial rewards motivate and satisfy deeper needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Together they cover different employee needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Financial rewards retain; non-financial rewards motivate — combining covers all needs." },
        },
        {
          id: "olbus-u4-rw-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which reward is most directly linked to individual sales performance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pension" },
            { id: "b", text: "Commission" },
            { id: "c", text: "Training" },
            { id: "d", text: "Job security" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Commission", statement: "Performance-linked." }], steps: [{ reasoning: "Commission varies directly with sales.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Commission" },
        },
        {
          id: "olbus-u4-rw-q13", difficulty: "core", totalMarks: 2,
          stem: "A company spends $10,000 on bonuses shared equally among 20 staff. How much does each person receive?",
          response: { type: "numeric", parts: [{ label: "a", answer: 500, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Bonus per person", statement: "Total / staff." }], steps: [
            { part: "a", reasoning: "10000 ÷ 20 = 500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Each receives $500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $500" },
        },
        {
          id: "olbus-u4-rw-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Non-financial rewards often include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only cash payments" },
            { id: "b", text: "Higher taxes" },
            { id: "c", text: "Longer working hours" },
            { id: "d", text: "Recognition, training and autonomy" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Non-financial rewards", statement: "Non-monetary." }], steps: [{ reasoning: "Recognition/training/autonomy are non-financial.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q15", difficulty: "core", totalMarks: 2,
          stem: "An employee earns a salary of $1,800 per month and receives a 10% pay rise. What is the new monthly salary?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1980, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Pay rise", statement: "Salary × 1.1." }], steps: [
            { part: "a", reasoning: "1800 × 1.1 = 1980.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "New salary = $1,980.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $1,980" },
        },
        {
          id: "olbus-u4-rw-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Rewards extended review.",
          parts: [
            { label: "a", prompt: "Name two financial rewards.", marks: 2 },
            { label: "b", prompt: "Name two non-financial rewards.", marks: 2 },
            { label: "c", prompt: "When is financial reward most effective?", marks: 2 },
            { label: "d", prompt: "When is non-financial reward most effective?", marks: 2 },
            { label: "e", prompt: "What is the ideal approach to rewarding staff?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Rewards", statement: "Types and application." },
          ], steps: [
            { part: "a", reasoning: "Two financial rewards.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two non-financial rewards.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Performance-linked pay for sales/production roles.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Knowledge workers valuing autonomy/growth.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Combine both.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 financial (b) 2 non-financial (c) performance roles (d) knowledge work (e) combine" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u4-4-1-notes", title: "Motivation — notes", summary: "Maslow, Herzberg and reward systems.",
      sections: [
        { heading: "Theories", body: "Maslow: needs hierarchy. Herzberg: hygiene prevents dissatisfaction, motivators create satisfaction." },
        { heading: "Rewards", body: "Financial (pay, bonuses) + non-financial (recognition, flexibility, growth) — combine for best results." },
      ] },
  ],
};
