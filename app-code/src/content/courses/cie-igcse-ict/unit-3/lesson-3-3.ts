import type { Lesson } from "../../../types.ts";

export const lesson98: Lesson = {
  id: "cieict-u3-lesson-3-3",
  code: "3-3",
  title: "E-commerce and Web Tools",
  goal: "I CAN evaluate e-commerce platforms and use web tools for business purposes.",
  standards: ["Cambridge IGCSE ICT 0417: e-commerce", "0417: web tools"],

  vocabulary: [
    { term: "E-commerce", definition: "Buying/selling goods/services online." },
    {
      term: "Shopping cart",
      definition: "Virtual basket for online purchases.",
    },
    {
      term: "Payment gateway",
      definition: "Service processing online payments securely.",
    },
    {
      term: "B2B/B2C",
      definition: "Business-to-business vs business-to-consumer.",
    },
    {
      term: "Online marketplace",
      definition: "Platform connecting buyers and sellers.",
    },
    {
      term: "Inventory management",
      definition: "Tracking stock levels and orders.",
    },
  ],
  concepts: [
    {
      id: "cieict-u3-s3-ecom",
      title: "E-commerce",
      skill: "Understand e-commerce models and tools at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "E-commerce models",
            body: "B2C (business to consumer — Amazon), B2B (business to business — wholesale), C2C (consumer to consumer — eBay). Online marketplaces connect buyers/sellers; payment gateways process transactions securely.",
          },
          {
            heading: "Business tools",
            body: "Inventory management tracks stock, order processing handles sales, customer databases store buyer info, analytics track sales/performance. Evaluate platforms by features, fees, security, scalability.",
          },
        ],
        keyFormulas: [
          { name: "B2C/B2B/C2C", statement: "consumer/business models" },
          {
            name: "Payment gateway",
            statement: "secure transaction processing",
          },
          { name: "Marketplace", statement: "buyer-seller platform" },
        ],
        workedExample: {
          problem:
            "Compare selling on your own website vs an online marketplace.",
          solution:
            "Own site: more control, branding, but need traffic + payment setup. Marketplace: built-in audience + trust, but fees + less control.",
        },
      },
      questions: [
        {
          id: "cieict-u3-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is e-commerce?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A programming language",
              },
              {
                id: "b",
                text: "A network cable",
              },
              {
                id: "c",
                text: "Buying/selling goods/services online",
              },
              {
                id: "d",
                text: "A type of computer",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "E-commerce",
                statement: "Online trade.",
              },
            ],
            steps: [
              {
                reasoning: "E-commerce = internet-based buying/selling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Online buying/selling",
          },
        },
        {
          id: "cieict-u3-ec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between B2C and B2B e-commerce?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "B2C vs B2B",
                statement: "Consumer vs business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B2C=business to consumer (retail); B2B=business to business (wholesale).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples for each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consumer vs business sales",
          },
        },
        {
          id: "cieict-u3-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a payment gateway and why is it important for e-commerce?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Payment gateway",
                statement: "Secure payment processing.",
              },
            ],
            steps: [
              {
                reasoning: "Gateway processes payments securely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Encrypts card data; PCI compliance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Essential for secure transactions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secure payment processing",
          },
        },
        {
          id: "cieict-u3-ec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define e-commerce, shopping cart, payment gateway, B2B/B2C, online marketplace, inventory management. (b) What is B2C vs B2B vs C2C? (c) What is a shopping cart? (d) Why use a payment gateway? (e) What is an online marketplace? (f) What is inventory management? (g) Compare own website vs marketplace selling. (h) Evaluate which model suits a school charity shop.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "E-commerce",
                statement: "Models, tools, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Consumer/business models explained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Virtual basket for purchases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Secure transaction processing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Buyer-seller platform.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Track stock/orders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Control vs audience trade-off.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid model evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "E-commerce models and business tools.",
          },
        },
        {
          id: "cieict-u3-ec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'B2C' e-commerce mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Consumers selling to each other, e.g. eBay",
              },
              {
                id: "b",
                text: "Business selling directly to individual consumers, e.g. Amazon",
              },
              {
                id: "c",
                text: "One business selling to another business",
              },
              {
                id: "d",
                text: "Selling goods in a physical shop",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "B2C",
                statement: "Business-to-consumer sales.",
              },
            ],
            steps: [
              {
                reasoning: "B2C is businesses selling to individual customers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Business-to-consumer",
          },
        },
        {
          id: "cieict-u3-ec-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An item priced at $80 is discounted by 25%. What is the sale price in dollars?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 60,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discount",
                statement: "Price - (price x discount%).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discount = 80 x 0.25 = $20; sale price = 80 - 20 = $60.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$60",
          },
        },
        {
          id: "cieict-u3-ec-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An online marketplace charges a 10% selling fee. What fee is paid on a sale of $250?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 25,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fees",
                statement: "Sale x fee%.",
              },
            ],
            steps: [
              {
                reasoning: "250 x 0.10 = $25.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$25",
          },
        },
        {
          id: "cieict-u3-ec-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a payment gateway in e-commerce?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It delivers physical goods to customers",
              },
              {
                id: "b",
                text: "It stores inventory counts",
              },
              {
                id: "c",
                text: "It designs the website layout",
              },
              {
                id: "d",
                text: "It securely processes online payments between buyer and seller",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Payment gateway",
                statement: "Secure transaction processing.",
              },
            ],
            steps: [
              {
                reasoning: "Gateways encrypt and process card payments safely.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Secure payment processing",
          },
        },
        {
          id: "cieict-u3-ec-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one advantage and one disadvantage of selling through an online marketplace instead of your own website.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Marketplace trade-offs",
                statement: "Audience vs control and fees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: built-in audience, trust and payment infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: fees charged and less control over branding/customer data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Audience vs fees/control",
          },
        },
        {
          id: "cieict-u3-ec-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shop starts with 100 items in stock, sells 35 and then receives a restock of 20. How many items are in stock now?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 85,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inventory",
                statement: "Start - sold + restock.",
              },
            ],
            steps: [
              {
                reasoning: "100 - 35 + 20 = 85 items.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "85 items",
          },
        },
        {
          id: "cieict-u3-ec-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a C2C (consumer-to-consumer) e-commerce platform?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A government tax portal",
              },
              {
                id: "b",
                text: "eBay, where individuals sell to other individuals",
              },
              {
                id: "c",
                text: "A supermarket's own website",
              },
              {
                id: "d",
                text: "A manufacturer's wholesale site",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "C2C",
                statement: "Consumer-to-consumer sales.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marketplaces like eBay connect individual buyers and sellers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "eBay",
          },
        },
        {
          id: "cieict-u3-ec-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An online store receives 200 orders and successfully fulfils 180. What percentage of orders were fulfilled?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 90,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fulfilment rate",
                statement: "Fulfilled / orders x 100.",
              },
            ],
            steps: [
              {
                reasoning: "180 / 200 x 100 = 90%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "cieict-u3-ec-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is inventory management important for an e-commerce business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inventory management",
                statement: "Tracking stock levels and orders.",
              },
            ],
            steps: [
              {
                reasoning: "It prevents selling items that are out of stock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It helps plan restocking and avoids over-ordering.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Prevents stockouts and overstocking",
          },
        },
        {
          id: "cieict-u3-ec-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A business has monthly revenue of $5000 and 40% comes from online sales. How much revenue comes from online sales in dollars?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$2000",
              },
              {
                id: "b",
                text: "$1000",
              },
              {
                id: "c",
                text: "$4000",
              },
              {
                id: "d",
                text: "$1500",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage",
                statement: "Total x percentage.",
              },
            ],
            steps: [
              {
                reasoning: "5000 x 0.40 = $2000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2000",
          },
        },
        {
          id: "cieict-u3-ec-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a 'shopping cart' do on an e-commerce website?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Stores selected items temporarily before checkout",
              },
              {
                id: "b",
                text: "Processes the payment securely",
              },
              {
                id: "c",
                text: "Manages the seller's stock database",
              },
              {
                id: "d",
                text: "Delivers the goods physically",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shopping cart",
                statement: "Virtual basket for purchases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The cart collects items before payment and checkout.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Temporary item collection",
          },
        },
        {
          id: "cieict-u3-ec-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A small business must choose between building its own e-commerce website and selling on an online marketplace. Evaluate the two options using appropriate criteria.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Platform evaluation",
                statement: "Features, fees, security, scalability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Own site: more control over branding and customer data but needs traffic and payment setup.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Marketplace: built-in audience and trust but charges fees and limits control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consider security, fees, scalability and target customers before deciding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Balanced evaluation of control vs audience",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-ec-notes",
      title: "E-commerce — notes",
      summary:
        "B2C/B2B/C2C models; payment gateways secure transactions; marketplaces provide audience.",
      sections: [
        {
          heading: "Key idea",
          body: "Choose model based on customers, scale and control needs.",
        },
        {
          heading: "Security",
          body: "Payment gateways encrypt card data — never store directly.",
        },
      ],
    },
  ],
};
