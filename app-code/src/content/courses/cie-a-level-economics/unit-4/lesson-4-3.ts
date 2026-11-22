import type { Lesson } from "../../../types.ts";

export const lesson443: Lesson = {
  id: "ciealecon-u4-lesson-4-3",
  code: "4-3",
  title: "Development Policies",
  goal: "I CAN explain development strategies and aid effectiveness.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: development policy"],
  
  vocabulary: [
    { term: "ODA", definition: "Official Development Assistance." },
    { term: "Remittances", definition: "Money sent by migrants to home country." },
    { term: "Microfinance", definition: "Small loans to poor entrepreneurs." },
    { term: "Fair trade", definition: "Trading ensuring fair prices for producers." },
    { term: "Capacity building", definition: "Developing skills/institutions." },
    { term: "Conditionality", definition: "IMF/World Bank loan conditions." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s3-pol",
      title: "Development policies",
      skill: "Evaluate development strategies.",
      lesson: {
        sections: [
          {
            heading: "Aid types",
            body: "ODA: government aid. Private investment: FDI. Remittances: migrant money. Trade: market access. Each has benefits/limitations.",
          },
          {
            heading: "Microfinance",
            body: "Small loans to poor — Yunus Nobel Prize. Empowers entrepreneurship but may not reach poorest or create sustainable businesses.",
          },
          {
            heading: "Fair trade",
            body: "Ensures minimum prices, premiums for development. Limited reach but improves producer incomes.",
          },
        ],
        keyFormulas: [
          { name: "ODA", statement: "official aid" },
          { name: "Remittances", statement: "migrant money" },
          { name: "Microfinance", statement: "small loans" },
        ],
        workedExample: {
          problem: "Does aid help development? Evaluate.",
          solution: "Can fund infrastructure/education but may create dependency, corruption, misallocation. Effectiveness depends on governance and design.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is microfinance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small loans to poor entrepreneurs"
                    },
                    {
                              "id": "b",
                              "text": "Large infrastructure projects"
                    },
                    {
                              "id": "c",
                              "text": "Trade agreements"
                    },
                    {
                              "id": "d",
                              "text": "Government aid"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Microfinance",
                              "statement": "Small loans."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Microfinance = small loans to poor.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Small loans"
},
        },
        {
          id: "ciealecon-u4-pol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are remittances?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Remittances",
                              "statement": "Migrant money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Money sent by migrants to home country.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Significant income source for many countries.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Migrant money"
},
        },
        {
          id: "ciealecon-u4-pol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the benefits and limitations of aid?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Aid",
                              "statement": "Benefits vs limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefits: infrastructure, education, emergency relief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitations: dependency, corruption, misallocation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Effectiveness depends on governance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Benefits vs limitations"
},
        },
        {
          id: "ciealecon-u4-pol-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ODA, remittances, microfinance, fair trade, capacity building, conditionality. (b) What is ODA? (c) What is microfinance? (d) What are remittances? (e) What are benefits of aid? (f) What are limitations? (g) What is fair trade? (h) Evaluate whether aid helps or hinders development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development policy",
                              "statement": "Evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Official aid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Small loans.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Migrant money.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Infrastructure, education.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Dependency, corruption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fair producer prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Development policies."
},
        },
        {
          id: "ciealecon-u4-pol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "ODA (Official Development Assistance) refers to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "loans made by private commercial banks" },
              { id: "b", text: "earnings from commodity exports" },
              { id: "c", text: "aid given by governments to promote development in developing countries" },
              { id: "d", text: "money sent home by migrant workers" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "ODA", statement: "Official Development Assistance." } ],
            steps: [ { reasoning: "ODA is government aid — grants or concessional loans — intended to promote economic development and welfare in developing countries.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** government aid for development"
          }
        },
        {
          id: "ciealecon-u4-pol-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A likely benefit of remittances for a developing country is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "guaranteed government tax revenue" },
              { id: "b", text: "the elimination of poverty" },
              { id: "c", text: "a steady flow of foreign currency income to households" },
              { id: "d", text: "an immediate fall in population growth" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Remittances", statement: "Money sent by migrants to home country." } ],
            steps: [ { reasoning: "Remittances provide households with foreign exchange income for consumption, saving and investment; they are significant for many developing economies.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** steady foreign currency income to households"
          }
        },
        {
          id: "ciealecon-u4-pol-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A limitation of microfinance as a development strategy is that it",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "can only be used for infrastructure projects" },
              { id: "b", text: "requires large amounts of collateral" },
              { id: "c", text: "may fail to reach the very poorest who cannot demonstrate repayment capacity" },
              { id: "d", text: "is always funded directly by governments" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Microfinance", statement: "Small loans to poor entrepreneurs." } ],
            steps: [ { reasoning: "Microfinance targets poor entrepreneurs but the very poorest often lack the skills or income streams to repay even small loans, so they may be excluded.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** may miss the very poorest"
          }
        },
        {
          id: "ciealecon-u4-pol-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Conditionality attached to IMF and World Bank loans is controversial because it",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always guarantees the success of the borrowing country" },
              { id: "b", text: "applies only to developed countries" },
              { id: "c", text: "has no economic rationale whatsoever" },
              { id: "d", text: "can force spending cuts and privatisation that harm the poorest" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Conditionality", statement: "IMF/World Bank loan conditions." } ],
            steps: [ { reasoning: "Conditions such as austerity and privatisation are meant to restore debt sustainability but can reduce public services and hurt the poor, making them politically controversial.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(a)** cuts and privatisation can harm the poor"
          }
        },
        {
          id: "ciealecon-u4-pol-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Country D receives $1.4 billion in ODA and has a GNI of $200 billion. Calculate ODA as a percentage of GNI.",
          response: { type: "numeric", parts: [ { label: "a", answer: 0.7, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "ODA/GNI ratio", statement: "ODA / GNI x 100." } ],
            steps: [ { reasoning: "ODA/GNI = $1.4bn / $200bn x 100 = 0.7% — the benchmark target set by the UN for donor countries.", working: "1.4 / 200 x 100 = 0.7", marks: 1, markCode: "M" } ],
            finalAnswer: "ODA = 0.7% of GNI"
          }
        },
        {
          id: "ciealecon-u4-pol-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Remittances to Country E total $9 billion while its GDP is $60 billion. Calculate remittances as a percentage of GDP.",
          response: { type: "numeric", parts: [ { label: "a", answer: 15, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Remittances/GDP", statement: "Remittances / GDP x 100." } ],
            steps: [ { reasoning: "Remittances/GDP = $9bn / $60bn x 100 = 15%, showing how significant migrant income is relative to domestic output.", working: "9 / 60 x 100 = 15", marks: 1, markCode: "M" } ],
            finalAnswer: "Remittances = 15% of GDP"
          }
        },
        {
          id: "ciealecon-u4-pol-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A microfinance institution makes 200 loans of $500 each. Calculate the total value of loans disbursed.",
          response: { type: "numeric", parts: [ { label: "a", answer: 100000, unit: "dollars" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Total lending", statement: "Number of loans x loan size." } ],
            steps: [ { reasoning: "Total = 200 x $500 = $100,000. Many small loans together can mobilise significant capital for poor entrepreneurs.", working: "200 x 500 = 100000", marks: 1, markCode: "M" } ],
            finalAnswer: "Total loans = $100,000"
          }
        },
        {
          id: "ciealecon-u4-pol-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Aid to Country F is $4 billion per year and total government revenue is $50 billion. Calculate aid as a percentage of government revenue.",
          response: { type: "numeric", parts: [ { label: "a", answer: 8, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Aid/revenue ratio", statement: "Aid / government revenue x 100." } ],
            steps: [ { reasoning: "Aid/revenue = $4bn / $50bn x 100 = 8%. A high ratio signals dependence on external financing.", working: "4 / 50 x 100 = 8", marks: 1, markCode: "M" } ],
            finalAnswer: "Aid = 8% of government revenue"
          }
        },
        {
          id: "ciealecon-u4-pol-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fair-trade cooperative sells coffee at a guaranteed minimum price of $8 per kg, while the world market price is $5 per kg. A farmer sells 10,000 kg under the fair-trade scheme.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "dollars per kg" },
              { label: "b", answer: 30000, unit: "dollars" }
            ]
          },
          markscheme: {
            principles: [ { kind: "formula", name: "Fair trade premium", statement: "(Minimum price - market price) x quantity." } ],
            steps: [
              { reasoning: "Premium per kg = $8 - $5 = $3 per kg.", working: "8 - 5 = 3", marks: 1, markCode: "M" },
              { reasoning: "Total extra revenue = $3 x 10,000 kg = $30,000, plus any fair-trade premium paid to the cooperative for community projects.", working: "3 x 10000 = 30000", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Premium $3/kg; extra revenue $30,000"
          }
        },
        {
          id: "ciealecon-u4-pol-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the effectiveness of microfinance as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [ { kind: "skill", name: "Microfinance", statement: "Benefits vs limitations." } ],
            steps: [
              { reasoning: "Microfinance gives poor entrepreneurs, often women, access to capital they cannot get from banks, supporting small businesses and raising incomes.", marks: 1, markCode: "M" },
              { reasoning: "Group lending and high repayment rates show it can be financially sustainable, but small loans may be too small for major investment and may exclude the very poorest.", marks: 1, markCode: "M" },
              { reasoning: "Overall it is a useful complementary tool but not sufficient alone — effectiveness depends on context, supporting services and the wider economic environment.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Useful but limited development tool"
          }
        },
        {
          id: "ciealecon-u4-pol-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The effectiveness of aid in promoting development depends most on",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the currency in which the aid is paid" },
              { id: "b", text: "whether the aid must be repaid with interest" },
              { id: "c", text: "the quality of governance and how the aid is allocated" },
              { id: "d", text: "the size of the donor country's economy" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Aid effectiveness", statement: "Governance and allocation matter." } ],
            steps: [ { reasoning: "Where governance is weak, aid may be misallocated or lost to corruption; effective allocation towards infrastructure, education and health determines development impact.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(a)** governance and allocation"
          }
        },
        {
          id: "ciealecon-u4-pol-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Capacity building in development refers to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "developing the skills, knowledge and institutions of a country" },
              { id: "b", text: "constructing physical roads and ports" },
              { id: "c", text: "setting import quotas on manufactures" },
              { id: "d", text: "repaying foreign debt on schedule" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Capacity building", statement: "Developing skills/institutions." } ],
            steps: [ { reasoning: "Capacity building means strengthening a country's human skills, institutions and administrative capability so it can manage its own development.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** developing skills and institutions"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-pol-notes",
      title: "Development policy — notes",
      summary: "ODA, remittances, microfinance, fair trade. Aid effectiveness depends on governance.",
      sections: [
        { heading: "Key idea", body: "Multiple approaches to development — effectiveness varies by context." },
        { heading: "Conditionality", body: "IMF/World Bank loans require reforms — controversial." },
      ],
    },
  ],
};
