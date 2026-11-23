import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ebz11-u11-lesson-11-1",
  code: "11-1",
  title: "Pricing Strategies",
  goal: "I CAN compare cost-based, competition-based and demand-based pricing methods and evaluate which suits a given business.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing", "4BS0: pricing in the marketing mix"],
  
  vocabulary: [
    { term: "Cost-plus pricing", definition: "Setting price = total cost per unit plus a percentage markup." },
    { term: "Penetration pricing", definition: "Launching at a low price to gain market share quickly." },
    { term: "Skimming", definition: "Launching at a high price to recover costs from early adopters." },
    { term: "Promotional pricing", definition: "Temporary price cuts to stimulate short-term sales." },
    { term: "Competition-based pricing", definition: "Setting price by reference to what rivals charge." },
    { term: "Psychological pricing", definition: "Pricing just below a round number, e.g. £9.99, to seem cheaper." },
  ],
  concepts: [
    {
      id: "ebz11-u11-costpricing",
      title: "Cost-Based and Competition-Based Pricing",
      skill: "Calculate cost-plus prices and explain how competition-based pricing works.",
      lesson: {
        sections: [
          {
            heading: "Cost-plus pricing",
            body: "**Cost-plus pricing** sets price by adding a percentage markup to cost: **price = cost per unit × (1 + markup%)** or **price = cost + markup amount**. Simple and guarantees each sale covers costs plus profit — but ignores what customers are willing to pay and what rivals charge.\n\nExample: unit cost £8, 25% markup → price = £8 × 1.25 = £10.",
          },
          {
            heading: "Competition-based pricing",
            body: "**Competition-based pricing** sets price by looking at rivals — matching their price, slightly undercutting to win share, or pricing above to signal quality. Works well in markets with many similar products (e.g. petrol, groceries) where customers compare prices easily.\n\n**Psychological pricing** (£9.99 instead of £10) is often combined with these methods to make prices seem lower. Risk: a price war can push all firms' profits down.",
          },
        ],
        keyFormulas: [
          { name: "Cost-plus price", statement: "Unit cost × (1 + markup%) or cost + markup" },
        ],
        workedExample: {
          problem: "A mug costs £4 to make. The business wants a 50% markup. What price should it charge?",
          solution: "Price = £4 × (1 + 0.50) = £4 × 1.5 = £6.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-costpricing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cost-plus pricing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pricing below rivals to gain share"
                    },
                    {
                              "id": "b",
                              "text": "Setting price = cost plus a percentage markup"
                    },
                    {
                              "id": "c",
                              "text": "Charging the highest price the market will bear"
                    },
                    {
                              "id": "d",
                              "text": "Discounting temporarily to boost sales"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cost-plus pricing",
                              "statement": "Cost per unit plus a percentage markup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost-plus = cost + markup.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Cost plus markup",
          "commonErrors": [
                    "Confusing with penetration pricing."
          ]
},
        },
        {
          id: "ebz11-u11-costpricing-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Unit cost is £12 and the markup is 25%. Calculate the selling price.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Price (£)",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cost-plus price",
                              "statement": "£12 × 1.25 = £15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Markup = 25% × £12 = £3; price = £12 + £3 = £15.",
                              "marks": 3,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "£15",
          "commonErrors": [
                    "Added 25 to the price instead of 25%."
          ]
},
        },
        {
          id: "ebz11-u11-costpricing-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give one advantage and one disadvantage of cost-plus pricing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Cost-plus evaluation",
                              "statement": "Simple and covers costs; but ignores demand and rivals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: simple, guarantees costs covered plus profit margin.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: ignores customer willingness to pay and competitor prices — may over/underprice.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Simple/covers costs; but ignores demand and competition.",
          "commonErrors": [
                    "Only one side evaluated."
          ]
},
        },
        {
          id: "ebz11-u11-costpricing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bakery makes cakes at £3 each and wants a 60% markup. Rivals sell similar cakes at £4.50.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the cost-plus price.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the bakery might not use this price.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Price vs competition",
                              "statement": "Cost-plus price £4.80 is above rivals' £4.50 — may lose sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) £3 × 1.60 = £4.80.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) £4.80 > rivals' £4.50 → customers may switch; need competition-based pricing or differentiation.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "£4.80 cost-plus, but rivals charge £4.50 — risky to charge more without differentiation.",
          "commonErrors": [
                    "Calculating markup wrong; not linking to rivals in (b)."
          ]
},
        },
        {
          id: "ebz11-u11-costpricing-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare cost-plus pricing and competition-based pricing for a supermarket selling bread.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Pricing methods",
                              "statement": "Cost-plus ignores rivals; competition-based tracks them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost-plus: simple, ensures margin, but bread is a price-sensitive commodity — cost-plus may overprice.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Competition-based: matches/undercuts rival prices — essential in a crowded market where customers compare prices.",
                              "marks": 3,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Bread needs competition-based pricing; cost-plus risks losing sales.",
          "commonErrors": [
                    "No comparison — describing only one method."
          ]
},
        },
        {
          id: "ebz11-u11-costpricing-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A furniture maker has unit costs of £200 and currently prices at cost-plus 40%. A new rival enters at £260.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the current price.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the new rival and suggest a pricing response.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the maker should switch fully to competition-based pricing.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Pricing under competition",
                              "statement": "Cost-plus sets £280 vs rival £260; response depends on differentiation and costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) £200 × 1.40 = £280.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Rival at £260 undercuts; maker may match, differentiate (quality/design), or hold price if brand strong.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Pure competition pricing risks margin erosion; hybrid (track rivals + cost floor) usually best — judgement.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "£280; respond by matching/differentiating; pure competition pricing not always best.",
          "commonErrors": [
                    "No judgement in (c).",
                    "Wrong percentage calculation."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u11-demandpricing",
      title: "Demand-Based Pricing",
      skill: "Distinguish penetration, skimming and promotional pricing and judge when each is appropriate.",
      lesson: {
        sections: [
          {
            heading: "Penetration and skimming",
            body: "**Penetration pricing**: launch at a LOW price to win market share fast, then raise prices once established. Best when the market is price-sensitive and economies of scale reward high volume. Risk: early losses; customers may resist later price rises.\n\n**Skimming**: launch at a HIGH price to recover development costs quickly from customers willing to pay (early adopters), then gradually reduce. Best for innovative, unique products with little competition. Risk: attracts competitors if margins look attractive.",
          },
          {
            heading: "Promotional pricing",
            body: "**Promotional pricing** = temporary price reductions — sales, multi-buys, seasonal discounts — to stimulate short-term demand. Useful for clearing stock, attracting new customers and responding to rivals' offers. Risks: customers may wait for discounts (training them to buy only on promotion), reduced profit margins, and the perception of a 'normal' high price.\n\n**Choosing between them**: penetration for mass markets and price-sensitive products; skimming for innovative premium products; promotional pricing as a tactic within either strategy.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A new smartphone app has no rivals. Should the developer use skimming or penetration pricing? Justify.",
          solution: "Skimming — no competition means early adopters will pay a high price, recovering development costs before rivals enter and prices fall.",
        },
      },
      questions: [
        {
          id: "ebz11-u11-demandpricing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is penetration pricing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Launching at a high price then reducing"
                    },
                    {
                              "id": "b",
                              "text": "Launching at a low price to gain market share"
                    },
                    {
                              "id": "c",
                              "text": "Setting price equal to rivals"
                    },
                    {
                              "id": "d",
                              "text": "Temporary discount for a sale"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Penetration pricing",
                              "statement": "Low launch price to win share, raised later."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Penetration = low entry price for market share.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Low price to gain share",
          "commonErrors": [
                    "Confusing with skimming."
          ]
},
        },
        {
          id: "ebz11-u11-demandpricing-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is skimming pricing and when is it most suitable?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Skimming",
                              "statement": "High launch price for innovative products with little competition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition: high launch price to recover costs from early adopters.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Suitable for innovative/unique products with little competition.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "High launch price; best for innovative products.",
          "commonErrors": [
                    "Describing penetration instead."
          ]
},
        },
        {
          id: "ebz11-u11-demandpricing-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give one advantage and one disadvantage of penetration pricing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Penetration evaluation",
                              "statement": "Gains share fast but early profits are low and price rises may be resisted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: wins market share quickly; economies of scale as volume grows.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disadvantage: low early margins; customers may resist later price increases.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Fast share gain; but low margins and resistance to later rises.",
          "commonErrors": [
                    "One side only."
          ]
},
        },
        {
          id: "ebz11-u11-demandpricing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A new energy drink competes with five established brands. Recommend a launch pricing strategy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend either penetration or skimming pricing.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Justify your recommendation.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Launch pricing choice",
                              "statement": "Crowded market → penetration; unique innovation → skimming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Penetration pricing — crowded market with price-sensitive consumers.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Low price wins share quickly; skimming would fail since rivals offer alternatives.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Penetration — must win share in a crowded market.",
          "commonErrors": [
                    "Choosing skimming without justification."
          ]
},
        },
        {
          id: "ebz11-u11-demandpricing-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain three drawbacks of relying heavily on promotional pricing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Promotional pricing risks",
                              "statement": "Margin erosion, trained bargain-hunting, brand devaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lower margins on every discounted sale reduce overall profit.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Customers learn to wait for sales — normal-price sales fall.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Frequent discounts can damage the brand's premium image.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Margin loss, bargain-hunting customers, brand damage.",
          "commonErrors": [
                    "Only one drawback."
          ]
},
        },
        {
          id: "ebz11-u11-demandpricing-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A tech firm launches a revolutionary headset with no direct competitors, then plans its pricing over three years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define skimming and penetration pricing.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Recommend a launch price strategy and justify it.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how the firm should change prices as competitors enter.",
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
                              "name": "Product life and pricing",
                              "statement": "Skim early while unique; shift to competition-based as rivals enter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Skimming = high launch price, lowered later; penetration = low launch price, raised later.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Skimming — no competitors, early adopters pay premium, recover R&D costs.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) As rivals enter, reduce prices toward competition-based levels to defend share.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Skim at launch (unique), then move to competitive pricing.",
          "commonErrors": [
                    "Static pricing plan — not adjusting to competition."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u11-pricing-notes",
      title: "Pricing strategies — notes",
      summary: "Cost-plus covers costs; competition-based tracks rivals; penetration wins share with low prices; skimming maximises early profit on innovations; promotional pricing is temporary.",
      sections: [
        { heading: "Key idea", body: "Match the method to the market: cost-plus for simple coverage, competition-based for crowded markets, penetration for share, skimming for innovations." },
        { heading: "Formula", body: "Cost-plus price = unit cost × (1 + markup%)." },
        { heading: "Risk", body: "Promotional pricing trains customers to wait for discounts and cuts margins." },
      ],
    },
  ],
};
