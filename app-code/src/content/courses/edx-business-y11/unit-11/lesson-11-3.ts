import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "ebz11-u11-lesson-11-3",
  code: "11-3",
  title: "Distribution and Customer Service",
  goal: "I CAN explain channels of distribution and evaluate how customer service builds loyalty and competitive advantage.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing", "4BS0: place and customer service in the marketing mix"],
  
  vocabulary: [
    { term: "Channel of distribution", definition: "The route a product takes from producer to consumer." },
    { term: "Wholesaler", definition: "Intermediary that buys in bulk from producers and sells smaller quantities to retailers." },
    { term: "Retailer", definition: "Business that sells directly to final consumers." },
    { term: "Direct distribution", definition: "Producer sells straight to the consumer with no intermediaries." },
    { term: "After-sales service", definition: "Support given after purchase — repairs, returns, warranties." },
    { term: "Customer loyalty", definition: "Repeat purchasing driven by satisfaction with product and service." },
  ],
  concepts: [
    {
      id: "ebz11-u11-channels",
      title: "Channels of Distribution",
      skill: "Compare direct and indirect distribution and justify channel choices.",
      lesson: {
        sections: [
          {
            heading: "Direct vs indirect",
            body: "**Direct distribution**: producer → consumer (own shops, website, mail order). Keeps control, keeps all profit margin, gives direct customer contact — but requires capital for shops/storage and limits reach.\n\n**Indirect distribution**: producer → wholesaler → retailer → consumer. Widens reach massively and shares storage/selling costs — but adds margins (higher consumer prices), reduces control over presentation and service, and intermediaries may push rival brands.",
          },
          {
            heading: "Choosing a channel",
            body: "Factors: **product type** (perishable goods need short channels; bulky goods use wholesalers), **market** (geography, customer habits), **cost** (margins vs own logistics costs), **control needed** (brand image may require direct sales), and **business size** (small firms often rely on retailers). Many businesses use a **mix** — e.g. own website plus stockists.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A small bakery sells cakes. Should it sell only through its own shop or also supply local cafés? Compare channels.",
          solution: "Own shop = direct, higher margin, control; supplying cafés = indirect, wider reach but lower margin per cake.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-channels-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a channel of distribution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The way a product is advertised"
                    },
                    {
                              "id": "b",
                              "text": "The route a product takes from producer to consumer"
                    },
                    {
                              "id": "c",
                              "text": "The price charged to retailers"
                    },
                    {
                              "id": "d",
                              "text": "A type of customer service"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Channel of distribution",
                              "statement": "Route from producer to consumer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Channel = the path product travels to reach buyers.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Route from producer to consumer",
          "commonErrors": [
                    "Confusing with promotion."
          ]
},
        },
        {
          id: "ebz11-u11-channels-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one advantage of direct distribution over using intermediaries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Direct distribution",
                              "statement": "Keeps margin and control; needs capital and limits reach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producer keeps full margin — no wholesaler/retailer cut.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Full control over presentation, pricing and customer contact.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher margin and full control.",
          "commonErrors": [
                    "Listing a disadvantage."
          ]
},
        },
        {
          id: "ebz11-u11-channels-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two disadvantages of selling through intermediaries (wholesalers and retailers).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Indirect distribution costs",
                              "statement": "Margins, reduced control, rival brands at point of sale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each intermediary adds a margin — consumer price higher or producer margin squeezed.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less control over display, service and stock; retailers may push rival products.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher prices/margins lost + reduced control.",
          "commonErrors": [
                    "Repeating advantages."
          ]
},
        },
        {
          id: "ebz11-u11-channels-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A handmade jewellery maker currently sells only at craft fairs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two additional channels of distribution.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage of each suggestion.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Channel expansion",
                              "statement": "Online store and stockists widen reach while fairs remain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Online store/website — reach national/global customers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Supply local boutiques/stockists — intermediary reach.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Online: low cost, 24/7 sales; stockists: wider local reach.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Online store + stockists for wider reach.",
          "commonErrors": [
                    "Channels without advantage explanation."
          ]
},
        },
        {
          id: "ebz11-u11-channels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare direct and indirect distribution for a perishable food producer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Channel choice by product",
                              "statement": "Perishables need short, fast channels — direct or local."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct/local: short chain keeps product fresh, full margin, control — but limited reach and capital needed.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Indirect via distant wholesalers risks delays and spoilage — long chains unsuitable for perishables.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Perishables suit short direct channels; long indirect chains risk spoilage.",
          "commonErrors": [
                    "Generic comparison ignoring perishability."
          ]
},
        },
        {
          id: "ebz11-u11-channels-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A smartphone maker sells through its own website and 500 retail stores worldwide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the channel used by the website and by the stores.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one disadvantage of each channel.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the maker should keep both channels.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Multi-channel strategy",
                              "statement": "Direct site = margin/control; retail stores = reach/try-before-buy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Website = direct distribution; stores = indirect via retailers.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Direct: keeps margin and data; stores: huge reach and customers can handle the product.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Direct: less chance to try; stores: margins shared, less control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Keep both — they serve different needs; judgement on balance of margin vs reach.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Direct + indirect complement each other; keeping both is justified.",
          "commonErrors": [
                    "No evaluation in (c)."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u11-customerservice",
      title: "Customer Service and Loyalty",
      skill: "Explain the role of customer service at each stage of purchase and evaluate its impact on loyalty.",
      lesson: {
        sections: [
          {
            heading: "Stages of service",
            body: "**Pre-sale**: accurate information, helpful staff, easy browsing. **At sale**: efficient checkout, friendly service, correct pricing. **After-sales**: returns and refunds, repairs and warranties, complaints handling, follow-up.\n\nGood service at every stage builds **customer satisfaction**, which drives **repeat purchases**, positive word-of-mouth and **customer loyalty** — cheaper to keep customers than to win new ones.",
          },
          {
            heading: "Service as competitive advantage",
            body: "When products are similar, service differentiates — e.g. same phone, better returns policy wins the sale. Methods: training staff, clear returns policies, loyalty schemes, complaint resolution, online support. **Costs vs benefits**: service costs money but loyal customers spend more over time and recommend the business. Poor service loses customers quickly — one bad experience can outweigh many good ones via reviews and social media.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Two cafés sell identical coffee at the same price. Café A has slow service; Café B remembers regulars' orders. Which wins repeat customers and why?",
          solution: "Café B — better service builds satisfaction and loyalty; customers return despite identical product and price.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-customerservice-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is after-sales service?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Advertising before purchase"
                    },
                    {
                              "id": "b",
                              "text": "Support given after the customer buys"
                    },
                    {
                              "id": "c",
                              "text": "Discounts at checkout"
                    },
                    {
                              "id": "d",
                              "text": "Training new staff"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "After-sales service",
                              "statement": "Post-purchase support — returns, repairs, warranties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After-sales = support after the purchase.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Support after purchase",
          "commonErrors": [
                    "Confusing with pre-sale."
          ]
},
        },
        {
          id: "ebz11-u11-customerservice-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two examples of after-sales service.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "After-sales examples",
                              "statement": "Returns, repairs, warranties, complaint handling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Returns/refunds policy for faulty or unwanted goods.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Repairs, warranties or helplines after purchase.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Returns policy + repairs/warranty.",
          "commonErrors": [
                    "Listing pre-sale activities."
          ]
},
        },
        {
          id: "ebz11-u11-customerservice-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways good customer service benefits a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Service benefits",
                              "statement": "Loyalty, repeat sales, positive reputation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Satisfied customers return and spend more — loyalty is cheaper than acquiring new customers.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Positive word-of-mouth and reviews attract new customers; service differentiates similar products.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Repeat sales/loyalty + reputation and differentiation.",
          "commonErrors": [
                    "Only one benefit."
          ]
},
        },
        {
          id: "ebz11-u11-customerservice-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An online clothing shop has rising returns. Suggest three service improvements.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two improvements to reduce returns.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest one improvement to handle returns that do occur.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Service improvement",
                              "statement": "Better information/fit reduces returns; smooth process handles them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Detailed size guides and customer reviews/photos to set expectations.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Accurate product descriptions and fabric information.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Easy, fast refunds/exchanges to keep customers loyal despite returns.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Better product info to prevent returns; easy refunds to retain customers.",
          "commonErrors": [
                    "Only handling returns, not preventing them."
          ]
},
        },
        {
          id: "ebz11-u11-customerservice-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A restaurant wants to improve customer service. Evaluate investing in staff training versus a loyalty app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Service investment",
                              "statement": "Training improves the core experience; loyalty app rewards repeat visits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Staff training directly improves service quality — the core driver of satisfaction; higher upfront cost.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Loyalty app encourages repeat visits cheaply but can't fix poor service — best combined with training.",
                              "marks": 3,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Training is fundamental; loyalty app complements it — ideally both.",
          "commonErrors": [
                    "One-sided comparison."
          ]
},
        },
        {
          id: "ebz11-u11-customerservice-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two rival phone shops sell identical phones at identical prices. Shop A offers free returns and a loyalty discount; Shop B offers neither but has slightly faster checkout.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define customer service and customer loyalty.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how Shop A's policies could build loyalty.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which shop is likely to win more repeat customers.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Service and loyalty",
                              "statement": "Service policies reduce risk and reward repeats — key when products are identical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Customer service = support before/during/after sale; loyalty = repeat buying from satisfaction.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Free returns reduce purchase risk; loyalty discount rewards repeat business — both raise satisfaction.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Shop A likely wins — risk reduction and rewards outweigh slightly slower checkout; judgement on balance.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Shop A's service policies build loyalty; likely wins repeat customers.",
          "commonErrors": [
                    "Ignoring the identical-product context in (c)."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u11-service-notes",
      title: "Distribution and customer service — notes",
      summary: "Channels move products producer→consumer: direct keeps margin/control, indirect adds reach but costs margin. Great service builds loyalty — cheaper than winning new customers.",
      sections: [
        { heading: "Key idea", body: "Direct = own shops/websites (margin, control); indirect = wholesalers/retailers (reach, shared costs)." },
        { heading: "Channel choice", body: "Match channel to product, market, cost and control needs; many firms use a mix." },
        { heading: "Service", body: "Pre-sale, at-sale and after-sales service drive satisfaction → loyalty → repeat sales." },
      ],
    },
  ],
};
