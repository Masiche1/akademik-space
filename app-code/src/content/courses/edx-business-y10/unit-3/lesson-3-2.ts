import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ebz10-u3-lesson-3-2",
  code: "3-2",
  title: "Inventory and Supply Chain",
  goal: "I CAN explain inventory management and supply chain operations.",
  standards: ["Edexcel IGCSE Business 4BS0 — Operations Management"],
  vocabulary: [
    {
      term: "Inventory",
      definition: "Stock of raw materials, work in progress, finished goods.",
    },
    {
      term: "Just-in-time (JIT)",
      definition: "Receiving materials only when needed — minimal stock.",
    },
    {
      term: "Supply chain",
      definition: "Network from raw materials to customer.",
    },
    {
      term: "Stock holding cost",
      definition: "Cost of storing inventory — space, insurance, waste.",
    },
    { term: "Stock-out cost", definition: "Lost sales when out of stock." },
  ],
  concepts: [
    {
      id: "ebz10-u3-inventory",
      title: "Inventory Management",
      skill: "Balance stock levels to minimise costs and stock-outs.",
      lesson: {
        sections: [
          {
            heading: "Why inventory matters",
            body: "**Too much stock**: storage costs, capital tied up, risk of obsolescence/damage, insurance costs. **Too little stock**: stock-outs → lost sales, production delays, customer dissatisfaction.\n\n**The balance**: enough stock to meet demand but not so much it wastes money. **Economic order quantity (EOQ)**: optimal order size balancing ordering and holding costs.",
          },
          {
            heading: "Just-in-time",
            body: "**JIT**: materials arrive exactly when needed — Toyota pioneered. **Benefits**: less storage space, lower holding costs, less waste, cash not tied up. **Risks**: supply disruption stops production, no buffer stock, requires reliable suppliers and accurate forecasting.\n\n**Examples**: supermarket restocking daily, car manufacturer receiving parts on production line.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A shop orders 100 units weekly but only sells 80. What's the problem?",
          solution:
            "Overstocking — 20 units wasted storage space and capital each week.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-inventory-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is just-in-time (JIT) inventory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receiving materials only when needed" },
              { id: "b", text: "Selling old stock cheaply" },
              { id: "c", text: "Storing extra stock for emergencies" },
              { id: "d", text: "Ordering large quantities rarely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "JIT",
                statement:
                  "Materials arrive exactly when needed — minimal stock.",
              },
            ],
            steps: [
              {
                reasoning: "JIT = materials when needed.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** When needed",
            commonErrors: ["Bulk ordering confused."],
          },
        },
        {
          id: "ebz10-u3-inventory-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two costs of holding too much inventory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory costs",
                statement: "Storage, capital, obsolescence, insurance.",
              },
            ],
            steps: [
              {
                reasoning: "Storage space and insurance costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Capital tied up — can't use elsewhere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Risk of damage, theft, obsolescence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Storage costs, capital tied up, damage/obsolescence risk.",
            commonErrors: ["Only one cost.", "No business impact."],
          },
        },
        {
          id: "ebz10-u3-inventory-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the risk of just-in-time for a business dependent on one supplier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JIT risk",
                statement:
                  "No buffer stock — supplier failure stops production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No buffer stock — production stops if supply fails.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Single supplier = single point of failure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Delivery delays halt operations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mitigate: backup suppliers, safety stock.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "No buffer → supplier failure stops production; mitigate with backups.",
            commonErrors: ["No risk identified.", "No mitigation."],
          },
        },
        {
          id: "ebz10-u3-inventory-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A restaurant wants to reduce food waste.",
          parts: [
            {
              label: "a",
              prompt: "Explain two causes of food waste in restaurants.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two inventory management solutions.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waste reduction",
                statement: "Better forecasting + JIT ordering.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Over-ordering — stock expires before use.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Poor demand forecasting — unpredictable orders.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) JIT ordering — order fresh daily.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Track sales data to forecast demand.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) over-ordering/poor forecasting (b) JIT+demand tracking",
            commonErrors: ["No cause.", "No solution."],
          },
        },
      ],
    },
    {
      id: "ebz10-u3-supplychain",
      title: "Supply Chain Management",
      skill: "Understand supply chain operations and logistics.",
      lesson: {
        sections: [
          {
            heading: "Supply chain stages",
            body: "**Sourcing**: find and vet suppliers. **Procurement**: order raw materials. **Production**: manufacture goods. **Warehousing**: store finished products. **Distribution**: deliver to customers/retailers. **After-sales**: returns, repairs.\n\n**Supply chain management**: coordinating all stages to get product to customer efficiently — right product, right place, right time, right cost.",
          },
          {
            heading: "Logistics and technology",
            body: "**Logistics**: planning, implementing, controlling movement of goods — transport, warehousing, inventory. **Technology**: ERP systems, RFID tracking, GPS, automated warehouses — improve efficiency and visibility.\n\n**Challenges**: supply disruptions (natural disasters, pandemics), transportation costs, demand fluctuations, ethical sourcing. **Resilience**: multiple suppliers, buffer stock, flexible logistics.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A smartphone company sources chips, assembles in China, ships to US stores. Map the supply chain.",
          solution:
            "Chip supplier → assembly plant → shipping → distribution centres → retail stores.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-supplychain-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a supply chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Network from raw materials to customer" },
              { id: "b", text: "A chain of retail stores" },
              { id: "c", text: "A type of production line" },
              { id: "d", text: "A management hierarchy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supply chain",
                statement: "Network from raw materials to customer.",
              },
            ],
            steps: [
              {
                reasoning: "Supply chain = raw materials to customer.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Raw materials to customer",
            commonErrors: ["Retail only confused."],
          },
        },
        {
          id: "ebz10-u3-supplychain-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three stages of a typical supply chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supply chain stages",
                statement: "Sourcing, production, distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Sourcing/procurement and production.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Distribution/delivery to customer.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Any three valid stages.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Sourcing, production, warehousing, distribution.",
            commonErrors: ["Only two stages.", "Wrong stages."],
          },
        },
        {
          id: "ebz10-u3-supplychain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how technology improves supply chain management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply chain tech",
                statement: "Visibility, efficiency, real-time tracking.",
              },
            ],
            steps: [
              {
                reasoning: "ERP systems coordinate all stages.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "RFID/GPS track goods in real-time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Automation reduces errors and costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better forecasting reduces waste.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "ERP+tracking+automation = efficiency, visibility, less waste.",
            commonErrors: ["No technology named.", "No benefit."],
          },
        },
        {
          id: "ebz10-u3-supplychain-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company relies on a single supplier in another country.",
          parts: [
            {
              label: "a",
              prompt: "Identify two risks of this supply chain.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two ways to make it more resilient.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply chain resilience",
                statement: "Multiple suppliers + buffer stock reduce risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Single point of failure — supplier problems halt production.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Geopolitical/trade disruption risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Develop backup suppliers.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Keep safety stock / diversify sourcing.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) single point failure/geopolitical risk (b) backup suppliers+safety stock",
            commonErrors: ["No risk.", "No mitigation."],
          },
        },
      ],
    },
  ],
};
