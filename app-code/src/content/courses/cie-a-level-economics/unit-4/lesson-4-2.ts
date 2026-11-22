import type { Lesson } from "../../../types.ts";

export const lesson442: Lesson = {
  id: "ciealecon-u4-lesson-4-2",
  code: "4-2",
  title: "Causes of Underdevelopment",
  goal: "I CAN explain causes of poverty and underdevelopment.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: causes"],
  
  vocabulary: [
    { term: "Vicious circle of poverty", definition: "Poverty → low savings → low investment → low productivity → poverty." },
    { term: "Malthusian trap", definition: "Population growth outpaces resources." },
    { term: "Colonialism", definition: "Historical exploitation by colonial powers." },
    { term: "Dependency theory", definition: "Developing countries dependent on developed." },
    { term: "Structural adjustment", definition: "IMF/World Bank reform conditions." },
    { term: "Debt trap", definition: "Unable to repay loans, interest compounds." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s2-cause",
      title: "Causes of underdevelopment",
      skill: "Analyse development barriers.",
      lesson: {
        sections: [
          {
            heading: "Economic causes",
            body: "Low savings → low investment → low productivity → low income. Vicious circle. Limited capital, technology, infrastructure.",
          },
          {
            heading: "Social causes",
            body: "Poor education, health, gender inequality, population growth. Human capital deficiency.",
          },
          {
            heading: "Political/institutional",
            body: "Corruption, weak governance, conflict, colonial legacy. Dependency on primary products.",
          },
        ],
        keyFormulas: [
          { name: "Vicious circle", statement: "poverty cycle" },
          { name: "Dependency", statement: "reliance on developed" },
          { name: "Debt trap", statement: "loan burden" },
        ],
        workedExample: {
          problem: "Why do poor countries stay poor?",
          solution: "Low income → low savings → low investment → low productivity → low income. Vicious circle persists.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-cause-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the vicious circle of poverty?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of tax"
                    },
                    {
                              "id": "b",
                              "text": "Poverty → low savings → low investment → low productivity → poverty"
                    },
                    {
                              "id": "c",
                              "text": "A business cycle"
                    },
                    {
                              "id": "d",
                              "text": "A trade barrier"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vicious circle",
                              "statement": "Poverty cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poverty cycle: low income→low savings→low investment→low productivity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Poverty cycle"
},
        },
        {
          id: "ciealecon-u4-cause-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is dependency theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dependency",
                              "statement": "Developing reliance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Developing countries dependent on developed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unequal trade relationships.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Developing reliance"
},
        },
        {
          id: "ciealecon-u4-cause-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main causes of underdevelopment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Underdevelopment",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic: low savings, investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Social: poor education/health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Political: corruption, conflict, colonial legacy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic, social, political causes"
},
        },
        {
          id: "ciealecon-u4-cause-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define vicious circle, Malthusian trap, colonialism, dependency theory, structural adjustment, debt trap. (b) What is vicious circle? (c) What is dependency theory? (d) What are economic causes? (e) What are social causes? (f) What are political causes? (g) What is debt trap? (h) Evaluate whether poverty is primarily economic or political.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Underdevelopment",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Poverty cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Developing reliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Low savings, investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Education, health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Corruption, conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Loan burden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Causes of underdevelopment."
},
        },
        {
          id: "ciealecon-u4-cause-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Malthusian trap describes a situation where",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "savings exceed investment" },
              { id: "b", text: "wages rise faster than productivity" },
              { id: "c", text: "population growth outpaces the growth of resources" },
              { id: "d", text: "foreign debt is automatically forgiven" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Malthusian trap", statement: "Population growth outpaces resources." } ],
            steps: [ { reasoning: "The Malthusian trap occurs when population grows faster than the food and resources needed to support it, keeping incomes at subsistence.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** population growth outpaces resources"
          }
        },
        {
          id: "ciealecon-u4-cause-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of a colonial legacy that can hinder development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong, well-enforced property rights" },
              { id: "b", text: "Economies still dependent on exporting primary products" },
              { id: "c", text: "A diversified manufacturing export base" },
              { id: "d", text: "High HDI scores across the population" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [ { kind: "context", name: "Colonialism", statement: "Historical exploitation shapes structures." } ],
            steps: [ { reasoning: "Colonial powers often built economies geared to extracting primary products, leaving post-independence states dependent on low-value exports with unstable prices.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** dependence on primary product exports"
          }
        },
        {
          id: "ciealecon-u4-cause-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a social (rather than economic) cause of underdevelopment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inadequate physical infrastructure" },
              { id: "b", text: "Low levels of domestic savings" },
              { id: "c", text: "Poor access to education and healthcare" },
              { id: "d", text: "Declining terms of trade" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Social causes", statement: "Education, health, gender inequality." } ],
            steps: [ { reasoning: "Education and health are social factors affecting human capital; savings, infrastructure and terms of trade are economic factors.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** poor access to education and healthcare"
          }
        },
        {
          id: "ciealecon-u4-cause-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Dependency theory suggests that developing countries remain poor partly because",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "their populations are too small to grow" },
              { id: "b", text: "all foreign aid is always unconditional" },
              { id: "c", text: "they save too large a share of their income" },
              { id: "d", text: "unequal trade relationships transfer economic surplus to developed economies" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Dependency theory", statement: "Developing reliance on developed economies." } ],
            steps: [ { reasoning: "Dependency theory argues developing countries occupy a subordinate position in the global economy, exporting cheap primary goods and importing expensive manufactures, locking in unequal exchange.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(a)** unequal trade transfers surplus"
          }
        },
        {
          id: "ciealecon-u4-cause-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A household in a low-income country earns $20,000 a year and saves $2,000. Calculate the household's savings ratio.",
          response: { type: "numeric", parts: [ { label: "a", answer: 10, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Savings ratio", statement: "Saving / income x 100." } ],
            steps: [ { reasoning: "Savings ratio = $2,000 / $20,000 x 100 = 10%. Low savings ratios help explain the low-investment trap.", working: "2000 / 20000 x 100 = 10", marks: 1, markCode: "M" } ],
            finalAnswer: "Savings ratio = 10%"
          }
        },
        {
          id: "ciealecon-u4-cause-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's population is 10 million and grows by 2% per year. Calculate the increase in population over one year.",
          response: { type: "numeric", parts: [ { label: "a", answer: 200000, unit: "people" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Population growth", statement: "Population x growth rate." } ],
            steps: [ { reasoning: "Increase = 10,000,000 x 0.02 = 200,000 people per year.", working: "1e7 x 0.02 = 200000", marks: 1, markCode: "M" } ],
            finalAnswer: "200,000 people"
          }
        },
        {
          id: "ciealecon-u4-cause-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A developing country spends $120 million a year repaying foreign debt, while its total export earnings are $400 million. Calculate the debt service ratio as a percentage of export earnings.",
          response: { type: "numeric", parts: [ { label: "a", answer: 30, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Debt service ratio", statement: "Debt repayments / export earnings x 100." } ],
            steps: [ { reasoning: "Debt service ratio = $120m / $400m x 100 = 30%, a heavy burden that crowds out development spending.", working: "120 / 400 x 100 = 30", marks: 1, markCode: "M" } ],
            finalAnswer: "Debt service ratio = 30%"
          }
        },
        {
          id: "ciealecon-u4-cause-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Country C has a GDP of $600 billion and gross capital formation (investment) equal to 15% of GDP. Calculate the level of investment.",
          response: { type: "numeric", parts: [ { label: "a", answer: 90, unit: "billion dollars" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Investment share", statement: "Investment = % of GDP x GDP." } ],
            steps: [ { reasoning: "Investment = 0.15 x $600 billion = $90 billion. A low investment share is a key feature of the vicious circle of poverty.", working: "0.15 x 600 = 90", marks: 1, markCode: "M" } ],
            finalAnswer: "Investment = $90 billion"
          }
        },
        {
          id: "ciealecon-u4-cause-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A worker in a low-income country earns $1,000 a month, spends $800 on consumption and saves the remainder.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "dollars per month" },
              { label: "b", answer: 20, unit: "%" }
            ]
          },
          markscheme: {
            principles: [ { kind: "formula", name: "Savings", statement: "Saving = income - consumption." } ],
            steps: [
              { reasoning: "Amount saved = $1,000 - $800 = $200 per month.", working: "1000 - 800 = 200", marks: 1, markCode: "M" },
              { reasoning: "Savings ratio = $200 / $1,000 x 100 = 20% of income.", working: "200 / 1000 x 100 = 20", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Saves $200; savings ratio = 20%"
          }
        },
        {
          id: "ciealecon-u4-cause-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the vicious circle of poverty can persist in a low-income country.",
          response: { type: "open" },
          markscheme: {
            principles: [ { kind: "skill", name: "Vicious circle", statement: "Self-reinforcing poverty cycle." } ],
            steps: [
              { reasoning: "Low incomes mean households cannot save much, so there is little capital for investment.", marks: 1, markCode: "M" },
              { reasoning: "Low investment keeps productivity and incomes low, which in turn keeps savings and investment low — each stage reinforces the next.", marks: 1, markCode: "M" },
              { reasoning: "Without an external shock such as aid, investment in human capital or institutional reform, the cycle is self-perpetuating.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Low income → low savings → low investment → low productivity → low income"
          }
        },
        {
          id: "ciealecon-u4-cause-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which policy is most likely to help break the vicious circle of poverty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Banning all foreign aid" },
              { id: "b", text: "Further cuts in government spending" },
              { id: "c", text: "Public investment in education and infrastructure" },
              { id: "d", text: "Subsidising consumption without investment" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Development policy", statement: "Breaking the poverty cycle." } ],
            steps: [ { reasoning: "Investment in education and infrastructure raises human and physical capital, lifting productivity and incomes — the key to escaping the vicious circle.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(a)** investment in education and infrastructure"
          }
        },
        {
          id: "ciealecon-u4-cause-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Structural adjustment programmes typically require borrowing countries to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "nationalise all key industries" },
              { id: "b", text: "raise tariffs on all imports" },
              { id: "c", text: "reduce government spending and liberalise markets" },
              { id: "d", text: "fix the exchange rate permanently" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Structural adjustment", statement: "IMF/World Bank reform conditions." } ],
            steps: [ { reasoning: "Structural adjustment programmes attach conditions such as fiscal austerity, privatisation and trade liberalisation to IMF/World Bank lending.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** reduce spending and liberalise markets"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-cause-notes",
      title: "Underdevelopment — notes",
      summary: "Vicious circle, dependency, colonialism, corruption → persistent poverty.",
      sections: [
        { heading: "Key idea", body: "Underdevelopment has economic, social, political dimensions." },
        { heading: "Cycle", body: "Low income→low investment→low productivity→low income." },
      ],
    },
  ],
};
