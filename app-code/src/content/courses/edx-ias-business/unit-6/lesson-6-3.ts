import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "eiasbiz-u6-lesson-6-3",
  code: "6-3",
  title: "Business Ethics and Stakeholders",
  goal: "I CAN identify stakeholders and evaluate ethical business decisions.",
  standards: [
    "Edexcel IAS Business WBP01 Unit 6 — External Influences on Business Activity",
  ],
  vocabulary: [
    {
      term: "Stakeholder",
      definition: "Anyone affected by or affecting the business.",
    },
    {
      term: "Shareholder",
      definition: "Owner of company shares — wants profit/dividends.",
    },
    {
      term: "Primary stakeholder",
      definition: "Directly involved — owners, employees, customers.",
    },
    {
      term: "Secondary stakeholder",
      definition: "Indirectly affected — suppliers, community, government.",
    },
    {
      term: "Business ethics",
      definition: "Moral principles guiding business decisions.",
    },
    {
      term: "Conflict of interest",
      definition: "When personal interests clash with professional duty.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u6-stakeholders",
      title: "Stakeholders and Their Interests",
      skill: "Identify stakeholders and their conflicting interests.",
      lesson: {
        sections: [
          {
            heading: "Stakeholder groups",
            body: "**Primary**: shareholders (profit), employees (jobs/wages), customers (quality/price), suppliers (payment). **Secondary**: government (taxes/regulation), local community (jobs/environment), pressure groups, lenders (repayment).\n\n**Conflicts**: shareholders want max profit → may cut wages; employees want higher pay → reduces profit; customers want low prices → may reduce quality.",
          },
          {
            heading: "Managing stakeholders",
            body: "**Stakeholder theory**: balance all interests — not just shareholders. **Communication**: keep stakeholders informed. **Negotiation**: resolve conflicts through dialogue.\n\n**Example**: factory closure — shareholders want cost savings; employees lose jobs; community loses employment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company considering automation that cuts 100 jobs. Stakeholders?",
          solution:
            "Shareholders (costs), employees (jobs), community (employment), government (unemployment).",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-stake-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anyone affected by or affecting the business" },
              { id: "b", text: "Only shareholders" },
              { id: "c", text: "Only employees" },
              { id: "d", text: "Only customers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected by business.",
              },
            ],
            steps: [
              {
                reasoning: "Stakeholder = anyone affected.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Anyone affected",
            commonErrors: ["Shareholders only."],
          },
        },
        {
          id: "eiasbiz-u6-stake-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of primary stakeholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary stakeholders",
                statement: "Direct involvement.",
              },
            ],
            steps: [
              { reasoning: "Shareholders/owners.", marks: 1, markCode: "AO2" },
              { reasoning: "Employees.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Customers or suppliers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Owners, employees, customers, suppliers.",
            commonErrors: ["Secondary.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u6-stake-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain a conflict between shareholder and employee interests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement: "Profit vs people.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders want max profit — may support cost cuts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Employees want job security, higher wages — higher costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conflict: profit maximisation vs employee welfare.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Resolution: balance — fair wages within profitable limits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Profit vs wages/security — balance needed.",
            commonErrors: ["No conflict.", "One side only."],
          },
        },
        {
          id: "eiasbiz-u6-stake-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A retailer plans to close a store in a small town.",
          parts: [
            {
              label: "a",
              prompt: "Identify three affected stakeholders.",
              marks: 3,
            },
            { label: "b", prompt: "Evaluate the decision for each.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder analysis",
                statement: "Multiple impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Employees — lose jobs.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Local community — lose shopping access/jobs.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Shareholders — may gain from cost savings.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Employees: severe negative — redundancy, hardship.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Community: negative — reduced services, unemployment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Shareholders: positive if store unprofitable — cost savings.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) employees+community+shareholders (b) mixed impacts",
            commonErrors: ["One stakeholder.", "No evaluation."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u6-ethics",
      title: "Business Ethics",
      skill: "Evaluate ethical dilemmas and ethical frameworks.",
      lesson: {
        sections: [
          {
            heading: "Ethical issues",
            body: "**Honesty**: truthful advertising, accurate accounts. **Fairness**: equal treatment, no discrimination. **Responsibility**: environmental impact, product safety. **Integrity**: avoid corruption, conflicts of interest.\n\n**Ethical frameworks**: utilitarian (greatest good), deontological (rules/duty), virtue ethics (character).",
          },
          {
            heading: "Ethical decision-making",
            body: "**Stakeholder analysis**: consider all affected parties. **Consequence evaluation**: short vs long-term impacts. **Legal compliance**: minimum standard — ethics goes beyond. **Company culture**: ethical leadership sets tone.\n\n**Whistleblowing**: reporting unethical practices — protection needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Manager discovers supplier uses child labour. Options?",
          solution: "Report, investigate, switch supplier — ethical duty.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is business ethics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legal compliance only" },
              { id: "b", text: "Company rules" },
              { id: "c", text: "Moral principles guiding decisions" },
              { id: "d", text: "Profit maximisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business ethics",
                statement: "Moral principles.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics = moral principles.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Moral principles",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u6-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of unethical business practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unethical practices",
                statement: "Dishonesty, exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "False advertising — misleading claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Exploiting workers — poor conditions, child labour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tax evasion — illegal avoidance schemes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "False ads, exploitation, tax evasion.",
            commonErrors: ["Only one.", "Legal issue."],
          },
        },
        {
          id: "eiasbiz-u6-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the utilitarian approach to business ethics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Utilitarianism",
                statement: "Greatest good.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Action judged by consequences — greatest good for most.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weigh benefits vs harms across all stakeholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: layoff hurts few but saves company — may be justified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Criticism: ignores rights of minority.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Greatest good for most — consequence-based.",
            commonErrors: ["Rules-based.", "No example."],
          },
        },
        {
          id: "eiasbiz-u6-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An employee discovers their company is dumping waste illegally.",
          parts: [
            { label: "a", prompt: "Identify the ethical issue.", marks: 3 },
            { label: "b", prompt: "Suggest two courses of action.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical dilemma",
                statement: "Duty vs risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Illegal activity — environmental harm, legal breach.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Employee duty — report unethical/illegal behaviour.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Report internally first — to management/ethics officer.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) If ignored, whistleblow to authorities — protected by law.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Document evidence — protect yourself legally.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) illegal dumping (b) report+whistleblow",
            commonErrors: ["Ignore.", "No protection."],
          },
        },
      ],
    },
  ],
};
