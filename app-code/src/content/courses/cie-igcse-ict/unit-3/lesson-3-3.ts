import type { Lesson } from "../../../types.ts";

export const lesson98: Lesson = {
  id: "cieict-u3-lesson-3-3",
  code: "3-3",
  title: "E-commerce and Web Tools",
  goal: "I CAN evaluate e-commerce platforms and use web tools for business purposes.",
  standards: ["Cambridge IGCSE ICT 0417: e-commerce", "0417: web tools"],
  
  vocabulary: [
    { term: "E-commerce", definition: "Buying/selling goods/services online." },
    { term: "Shopping cart", definition: "Virtual basket for online purchases." },
    { term: "Payment gateway", definition: "Service processing online payments securely." },
    { term: "B2B/B2C", definition: "Business-to-business vs business-to-consumer." },
    { term: "Online marketplace", definition: "Platform connecting buyers and sellers." },
    { term: "Inventory management", definition: "Tracking stock levels and orders." },
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
          { name: "Payment gateway", statement: "secure transaction processing" },
          { name: "Marketplace", statement: "buyer-seller platform" },
        ],
        workedExample: {
          problem: "Compare selling on your own website vs an online marketplace.",
          solution: "Own site: more control, branding, but need traffic + payment setup. Marketplace: built-in audience + trust, but fees + less control.",
        },
      },
      questions: [
        {
          id: "cieict-u3-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is e-commerce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Buying/selling goods/services online"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "E-commerce",
                              "statement": "Online trade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "E-commerce = internet-based buying/selling.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online buying/selling"
},
        },
        {
          id: "cieict-u3-ec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between B2C and B2B e-commerce?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "B2C vs B2B",
                              "statement": "Consumer vs business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B2C=business to consumer (retail); B2B=business to business (wholesale).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Consumer vs business sales"
},
        },
        {
          id: "cieict-u3-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a payment gateway and why is it important for e-commerce?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Payment gateway",
                              "statement": "Secure payment processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gateway processes payments securely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Encrypts card data; PCI compliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Essential for secure transactions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Secure payment processing"
},
        },
        {
          id: "cieict-u3-ec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define e-commerce, shopping cart, payment gateway, B2B/B2C, online marketplace, inventory management. (b) What is B2C vs B2B vs C2C? (c) What is a shopping cart? (d) Why use a payment gateway? (e) What is an online marketplace? (f) What is inventory management? (g) Compare own website vs marketplace selling. (h) Evaluate which model suits a school charity shop.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "E-commerce",
                              "statement": "Models, tools, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Consumer/business models explained.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Virtual basket for purchases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Secure transaction processing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Buyer-seller platform.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Track stock/orders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Control vs audience trade-off.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid model evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "E-commerce models and business tools."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-ec-notes",
      title: "E-commerce — notes",
      summary: "B2C/B2B/C2C models; payment gateways secure transactions; marketplaces provide audience.",
      sections: [
        { heading: "Key idea", body: "Choose model based on customers, scale and control needs." },
        { heading: "Security", body: "Payment gateways encrypt card data — never store directly." },
      ],
    },
  ],
};
