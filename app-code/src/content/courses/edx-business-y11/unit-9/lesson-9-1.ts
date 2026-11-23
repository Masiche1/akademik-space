import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ebz11-u9-lesson-9-1",
  code: "9-1",
  title: "Business Growth Strategies",
  goal: "I CAN distinguish internal and external growth and evaluate growth decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — Business growth and scale"],
  
  vocabulary: [
    { term: "Organic growth", definition: "Growing internally by increasing sales of existing products or developing new ones in existing markets." },
    { term: "External growth", definition: "Growing by joining with or acquiring other businesses." },
    { term: "Merger", definition: "Two businesses combine to form a single new business, usually as equals." },
    { term: "Takeover", definition: "One business buys control of another, which then becomes part of the buyer." },
    { term: "Joint venture", definition: "Two or more businesses agree to set up and run a new enterprise together." },
    { term: "Franchise", definition: "Buying the right to trade under an established business's name and methods for a fee." },
    { term: "Economies of scale", definition: "Cost advantages a business gains as it grows larger." },
    { term: "Diseconomies of scale", definition: "Rising average costs that occur when a business becomes too large." },
  ],
  concepts: [
    {
      id: "ebz11-u9-growth-types",
      title: "Internal and External Growth",
      skill: "Distinguish organic growth from mergers, takeovers, joint ventures and franchises.",
      lesson: {
        sections: [
          {
            heading: "Internal (organic) growth",
            body: "Businesses grow **organically** by selling more of existing products, entering new markets, or developing new products — all using their own resources. Advantages: controlled pace, culture preserved, profits retained, lower risk. Disadvantages: slow, limited by existing resources and markets. Common routes: market penetration (more sales to existing customers), market development (new customers/regions), product development (new products for existing customers).",
          },
          {
            heading: "External growth",
            body: "**Merger** — two firms combine as near-equals into a new entity; shares costs and reaches new markets but can cause culture clashes and job losses. **Takeover** — one firm buys another; fast access to customers, technology and market share, but expensive and may destroy the acquired firm's culture. **Joint venture** — firms create a new shared enterprise for a specific project; shares risk and expertise but partners may disagree. **Franchise** — buy the right to trade under an established name/methods; proven business model and brand support, but fees/royalties reduce profit and the franchisor controls key decisions. **Licensing** — allow another firm to make/sell your product for a fee — low-risk income but less control.",
          },
        ],
        keyFormulas: [
          { name: "Organic growth", statement: "more sales / new products / new markets using own resources" },
          { name: "External growth", statement: "merger, takeover, joint venture, franchise, licensing" },
        ],
        workedExample: {
          problem: "A coffee shop chain wants to expand into a new country quickly. Compare a takeover of a local chain versus opening its own stores.",
          solution: "Takeover: instant market presence, existing customers and staff, local knowledge — but high cost and possible culture clashes. Organic expansion: slower and costlier per store but full control, consistent brand culture, and no debt from acquisition. The choice depends on speed needed, available capital and risk appetite.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-growth-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is organic growth?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Buying another company"
                    },
                    {
                              "id": "b",
                              "text": "Growing using the business's own resources and existing operations"
                    },
                    {
                              "id": "c",
                              "text": "Selling the business"
                    },
                    {
                              "id": "d",
                              "text": "Franchising abroad"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organic growth",
                              "statement": "Internal growth using own resources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organic growth = expand internally without buying other firms.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Internal growth with own resources"
},
        },
        {
          id: "ebz11-u9-growth-types-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between a merger and a takeover.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merger vs takeover",
                              "statement": "Combine as equals vs one buys the other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Merger: two businesses combine to form a new firm, usually as near-equals.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Takeover: one business buys control of another which becomes part of the buyer.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear contrast — equality vs acquisition.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Merger=equal combination; takeover=one buys control of the other.",
          "commonErrors": [
                    "Treating them as identical.",
                    "Wrong direction of control."
          ]
},
        },
        {
          id: "ebz11-u9-growth-types-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages of organic growth compared with external growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Organic vs external",
                              "statement": "Organic = controlled, cultural continuity; external = fast but risky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage 1: growth is controlled and steady — the firm keeps its culture and way of working.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Advantage 2: profits are retained (no acquisition costs/debt) and risk is lower.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Controlled pace, culture preserved, lower risk/profit retained.",
          "commonErrors": [
                    "Advantages that apply to external growth."
          ]
},
        },
        {
          id: "ebz11-u9-growth-types-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A successful local bakery wants to expand nationally.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the bakery might choose franchising as its growth method.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one drawback of franchising for the bakery (franchisor).",
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
                              "name": "Franchising",
                              "statement": "Sell the brand/method — rapid expansion with franchisees' capital."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Franchising lets others fund and run new outlets — fast expansion using franchisees' capital and effort.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Drawback: franchisees' poor performance damages the brand; or royalties are a share of profit, not full ownership of outlet profits.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Alternative drawback: less control over how outlets are run day-to-day.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) fast expansion on others' capital. (b) brand risk/less profit or less control.",
          "commonErrors": [
                    "(a) saying franchising is organic growth.",
                    "(b) drawback that is actually a benefit."
          ]
},
        },
        {
          id: "ebz11-u9-growth-types-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two firms in the same industry are considering growth options.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Firm A merges with a similar-sized competitor. Explain one advantage and one risk of this merger.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Firm B sets up a joint venture with a foreign firm to enter a new market. Explain one advantage of this approach.",
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
                              "name": "External growth methods",
                              "statement": "Merger shares scale but risks culture clash; JV shares risk and expertise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Advantage: combined market share, shared costs → economies of scale.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Advantage: access to the other's customers/technology.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Risk: culture clash, job losses, integration problems.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: shares risk and cost of entering the new market; gains local partner's knowledge/contacts.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Alternative: partners may disagree on decisions — but for (b) one advantage suffices.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) scale/costs vs culture clash. (b) shared risk + local knowledge.",
          "commonErrors": [
                    "Confusing merger and joint venture.",
                    "Risk listed as advantage."
          ]
},
        },
        {
          id: "ebz11-u9-growth-types-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A family-owned electronics firm wants to grow and is weighing up its options.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define organic growth and external growth.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name three external growth methods.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one advantage of a takeover for this firm.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one disadvantage of a takeover for this firm.",
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
                              "name": "Growth strategy choice",
                              "statement": "Internal = controlled; external = fast but costly/risky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Organic = grow internally with own resources; external = grow by joining/acquiring other firms.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Any three: merger, takeover, joint venture, franchise, licensing.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Advantage: instant access to the target's customers, technology and market share.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Disadvantage: high cost/debt; or integration problems, culture clash, job losses.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions; (b) three methods; (c) fast market access; (d) cost/integration risk.",
          "commonErrors": [
                    "Takeover confused with merger.",
                    "Disadvantage that is generic, not takeover-specific."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u9-scale",
      title: "Economies and Diseconomies of Scale",
      skill: "Explain why growing firms gain cost advantages and when growth becomes counterproductive.",
      lesson: {
        sections: [
          {
            heading: "Economies of scale",
            body: "As firms grow they can gain **internal economies**: **purchasing economies** (bulk-buying discounts), **technical economies** (specialist machinery only viable at scale), **managerial economies** (hiring specialists), **financial economies** (cheaper borrowing — banks trust bigger firms), **marketing economies** (spreading advertising over more sales). **External economies** come from the industry growing — e.g. a cluster of firms supports specialist suppliers and a skilled labour pool. Larger scale can also mean **market power** — influencing prices.",
          },
          {
            heading: "Diseconomies of scale",
            body: "Beyond a certain size, average costs can RISE — **diseconomies of scale**: communication breakdowns across layers of management; workers feeling remote from decisions (motivation falls); coordination problems between departments; bureaucracy and slow decisions; industrial relations conflict. Firms respond by **delayering**, decentralising decisions to divisions, and using IT for communication. The challenge is to capture economies while avoiding diseconomies — growth must be managed, not just pursued.",
          },
        ],
        keyFormulas: [
          { name: "Economies of scale", statement: "average cost falls as output rises" },
          { name: "Diseconomies of scale", statement: "average cost rises when firm becomes too large/complex" },
        ],
        workedExample: {
          problem: "A bakery doubles output and its average cost per loaf falls from 80p to 65p. Later, after opening 200 stores, average cost rises to 75p. Explain both movements.",
          solution: "First, economies of scale: bulk flour purchases, bigger ovens and shared marketing cut average cost. Later, diseconomies: 200 stores became hard to coordinate — communication delays, inconsistent quality and demotivated staff raised average costs.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-scale-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are economies of scale?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Costs that rise as output increases"
                    },
                    {
                              "id": "b",
                              "text": "Cost advantages gained as a business grows larger"
                    },
                    {
                              "id": "c",
                              "text": "Government subsidies"
                    },
                    {
                              "id": "d",
                              "text": "Higher prices charged to customers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Economies of scale",
                              "statement": "Cost advantages from larger scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economies of scale = lower average costs as firm grows.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Cost advantages from growth"
},
        },
        {
          id: "ebz11-u9-scale-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of internal economies of scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal economies",
                              "statement": "Purchasing, technical, managerial, financial, marketing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purchasing economies — bulk-buying discounts on raw materials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Technical economies — specialist machinery/economies of size in production.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Managerial/financial/marketing economies — specialists, cheaper finance, shared advertising.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: purchasing, technical, managerial, financial, marketing.",
          "commonErrors": [
                    "Listing diseconomies."
          ]
},
        },
        {
          id: "ebz11-u9-scale-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a growing firm might achieve purchasing economies of scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Purchasing economies",
                              "statement": "Bulk orders earn supplier discounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Larger firms order bigger quantities of inputs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Suppliers offer volume discounts — lower price per unit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower input cost per unit reduces average total cost at higher output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May also gain better credit terms or exclusive supply deals.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Bulk buying → supplier discounts → lower unit costs.",
          "commonErrors": [
                    "Saying prices rise with size."
          ]
},
        },
        {
          id: "ebz11-u9-scale-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A fast-growing online retailer finds that average costs have started rising despite higher sales.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what diseconomies of scale are.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two possible causes of diseconomies in this retailer.",
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
                              "name": "Diseconomies",
                              "statement": "Average cost rises when firm becomes too large/complex."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Diseconomies = rising average costs when a business becomes too large to manage efficiently.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cause 1: communication breakdowns across many staff/departments — orders get lost or delayed.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cause 2: coordination problems between warehouses/systems, or demotivated staff feeling remote.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) rising average costs from excessive size. (b) communication/coordination failures or demotivation.",
          "commonErrors": [
                    "Calling it economies of scale.",
                    "Causes unrelated to size/complexity."
          ]
},
        },
        {
          id: "ebz11-u9-scale-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A manufacturer wants the benefits of scale without diseconomies.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the firm could achieve economies of scale.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways it could reduce diseconomies if it grows too large.",
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
                              "name": "Managing scale",
                              "statement": "Exploit scale advantages; decentralise and flatten to avoid diseconomies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Way 1: bulk-buy materials for purchasing economies; or invest in specialist machinery for technical economies.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Way 2: spread advertising/marketing costs over larger output; negotiate better finance.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Way 1: delayer — remove management layers to speed communication and decisions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Way 2: decentralise — give divisions autonomy to decide closer to operations; use IT.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) purchasing/technical/marketing economies. (b) delayering, decentralisation/IT.",
          "commonErrors": [
                    "Diseconomy fixes that are actually economies.",
                    "Vague 'communicate better' without mechanism."
          ]
},
        },
        {
          id: "ebz11-u9-scale-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small firm doubles in size over two years; profits rise but so do coordination problems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define economies of scale.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two economies the firm may have gained.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Define diseconomies of scale.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two diseconomies the firm may now face and how to reduce them.",
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
                              "name": "Scale effects",
                              "statement": "Growth gives cost advantages then coordination costs; manage the trade-off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Cost advantages gained as the business grows larger — lower average costs.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Economy 1: purchasing — bulk discounts on inputs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Economy 2: technical/managerial/financial — specialist equipment, experts, cheaper finance.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Diseconomies = rising average costs when the firm becomes too large/complex.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Diseconomy 1: communication breakdowns — fix with IT/flatter structure.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Diseconomy 2: demotivated staff/coordination problems — decentralise, train, delegate.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) cost advantages of size; (b) two economies; (c) rising costs from excess size; (d) two diseconomies + fixes.",
          "commonErrors": [
                    "Definitions swapped.",
                    "Fixes not linked to specific diseconomy."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u9-growth-notes",
      title: "Growth and scale — revision notes",
      summary: "Organic growth = own resources (slow, controlled); external = mergers, takeovers, JVs, franchises (fast, risky). Growth brings economies of scale (lower average costs) but too much size causes diseconomies (rising costs from coordination problems).",
      sections: [
        { heading: "Key idea", body: "Match growth method to speed, capital and risk needs; control growth to capture economies without diseconomies." },
        { heading: "External methods", body: "Merger=equal combine; takeover=buy control; JV=shared new venture; franchise=licensed brand." },
        { heading: "Scale", body: "Economies: purchasing, technical, managerial, financial, marketing. Diseconomies: communication, coordination, motivation." },
      ],
    },
  ],
};
