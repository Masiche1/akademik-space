module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "ebz11-u9-lesson-9-1", code: "9-1",
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
          id: "ebz11-u9-growth-types", title: "Internal and External Growth",
          skill: "Distinguish organic growth from mergers, takeovers, joint ventures and franchises.",
          sections: [
            { heading: "Internal (organic) growth", body: "Businesses grow **organically** by selling more of existing products, entering new markets, or developing new products — all using their own resources. Advantages: controlled pace, culture preserved, profits retained, lower risk. Disadvantages: slow, limited by existing resources and markets. Common routes: market penetration (more sales to existing customers), market development (new customers/regions), product development (new products for existing customers)." },
            { heading: "External growth", body: "**Merger** — two firms combine as near-equals into a new entity; shares costs and reaches new markets but can cause culture clashes and job losses. **Takeover** — one firm buys another; fast access to customers, technology and market share, but expensive and may destroy the acquired firm's culture. **Joint venture** — firms create a new shared enterprise for a specific project; shares risk and expertise but partners may disagree. **Franchise** — buy the right to trade under an established name/methods; proven business model and brand support, but fees/royalties reduce profit and the franchisor controls key decisions. **Licensing** — allow another firm to make/sell your product for a fee — low-risk income but less control." },
          ],
          keyFormulas: [
            { name: "Organic growth", statement: "more sales / new products / new markets using own resources" },
            { name: "External growth", statement: "merger, takeover, joint venture, franchise, licensing" },
          ],
          workedExample: {
            problem: "A coffee shop chain wants to expand into a new country quickly. Compare a takeover of a local chain versus opening its own stores.",
            solution: "Takeover: instant market presence, existing customers and staff, local knowledge — but high cost and possible culture clashes. Organic expansion: slower and costlier per store but full control, consistent brand culture, and no debt from acquisition. The choice depends on speed needed, available capital and risk appetite.",
          },
          questions: [
            {
              id: "ebz11-u9-growth-types-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is organic growth?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Buying another company" },
                { id: "b", text: "Growing using the business's own resources and existing operations" },
                { id: "c", text: "Selling the business" },
                { id: "d", text: "Franchising abroad" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organic growth", statement: "Internal growth using own resources." }],
                steps: [{ reasoning: "Organic growth = expand internally without buying other firms.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Internal growth with own resources",
              },
            },
            {
              id: "ebz11-u9-growth-types-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between a merger and a takeover.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Merger vs takeover", statement: "Combine as equals vs one buys the other." }],
                steps: [
                  { reasoning: "Merger: two businesses combine to form a new firm, usually as near-equals.", marks: 1, markCode: "AO1" },
                  { reasoning: "Takeover: one business buys control of another which becomes part of the buyer.", marks: 1, markCode: "AO1" },
                  { reasoning: "Clear contrast — equality vs acquisition.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Merger=equal combination; takeover=one buys control of the other.",
                commonErrors: ["Treating them as identical.", "Wrong direction of control."],
              },
            },
            {
              id: "ebz11-u9-growth-types-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two advantages of organic growth compared with external growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Organic vs external", statement: "Organic = controlled, cultural continuity; external = fast but risky." }],
                steps: [
                  { reasoning: "Advantage 1: growth is controlled and steady — the firm keeps its culture and way of working.", marks: 2, markCode: "AO2" },
                  { reasoning: "Advantage 2: profits are retained (no acquisition costs/debt) and risk is lower.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Controlled pace, culture preserved, lower risk/profit retained.",
                commonErrors: ["Advantages that apply to external growth."],
              },
            },
            {
              id: "ebz11-u9-growth-types-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A successful local bakery wants to expand nationally.",
              parts: [
                { label: "a", prompt: "Explain why the bakery might choose franchising as its growth method.", marks: 2 },
                { label: "b", prompt: "Explain one drawback of franchising for the bakery (franchisor).", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Franchising", statement: "Sell the brand/method — rapid expansion with franchisees' capital." }],
                steps: [
                  { reasoning: "(a) Franchising lets others fund and run new outlets — fast expansion using franchisees' capital and effort.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Drawback: franchisees' poor performance damages the brand; or royalties are a share of profit, not full ownership of outlet profits.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Alternative drawback: less control over how outlets are run day-to-day.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) fast expansion on others' capital. (b) brand risk/less profit or less control.",
                commonErrors: ["(a) saying franchising is organic growth.", "(b) drawback that is actually a benefit."],
              },
            },
            {
              id: "ebz11-u9-growth-types-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two firms in the same industry are considering growth options.",
              parts: [
                { label: "a", prompt: "Firm A merges with a similar-sized competitor. Explain one advantage and one risk of this merger.", marks: 3 },
                { label: "b", prompt: "Firm B sets up a joint venture with a foreign firm to enter a new market. Explain one advantage of this approach.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "External growth methods", statement: "Merger shares scale but risks culture clash; JV shares risk and expertise." }],
                steps: [
                  { reasoning: "(a) Advantage: combined market share, shared costs → economies of scale.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Advantage: access to the other's customers/technology.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Risk: culture clash, job losses, integration problems.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Advantage: shares risk and cost of entering the new market; gains local partner's knowledge/contacts.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Alternative: partners may disagree on decisions — but for (b) one advantage suffices.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) scale/costs vs culture clash. (b) shared risk + local knowledge.",
                commonErrors: ["Confusing merger and joint venture.", "Risk listed as advantage."],
              },
            },
            {
              id: "ebz11-u9-growth-types-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A family-owned electronics firm wants to grow and is weighing up its options.",
              parts: [
                { label: "a", prompt: "Define organic growth and external growth.", marks: 3 },
                { label: "b", prompt: "Name three external growth methods.", marks: 2 },
                { label: "c", prompt: "Explain one advantage of a takeover for this firm.", marks: 2 },
                { label: "d", prompt: "Explain one disadvantage of a takeover for this firm.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Growth strategy choice", statement: "Internal = controlled; external = fast but costly/risky." }],
                steps: [
                  { reasoning: "(a) Organic = grow internally with own resources; external = grow by joining/acquiring other firms.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Any three: merger, takeover, joint venture, franchise, licensing.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Advantage: instant access to the target's customers, technology and market share.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Disadvantage: high cost/debt; or integration problems, culture clash, job losses.", marks: 3, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definitions; (b) three methods; (c) fast market access; (d) cost/integration risk.",
                commonErrors: ["Takeover confused with merger.", "Disadvantage that is generic, not takeover-specific."],
              },
            },
          ],
        },
        {
          id: "ebz11-u9-scale", title: "Economies and Diseconomies of Scale",
          skill: "Explain why growing firms gain cost advantages and when growth becomes counterproductive.",
          sections: [
            { heading: "Economies of scale", body: "As firms grow they can gain **internal economies**: **purchasing economies** (bulk-buying discounts), **technical economies** (specialist machinery only viable at scale), **managerial economies** (hiring specialists), **financial economies** (cheaper borrowing — banks trust bigger firms), **marketing economies** (spreading advertising over more sales). **External economies** come from the industry growing — e.g. a cluster of firms supports specialist suppliers and a skilled labour pool. Larger scale can also mean **market power** — influencing prices." },
            { heading: "Diseconomies of scale", body: "Beyond a certain size, average costs can RISE — **diseconomies of scale**: communication breakdowns across layers of management; workers feeling remote from decisions (motivation falls); coordination problems between departments; bureaucracy and slow decisions; industrial relations conflict. Firms respond by **delayering**, decentralising decisions to divisions, and using IT for communication. The challenge is to capture economies while avoiding diseconomies — growth must be managed, not just pursued." },
          ],
          keyFormulas: [
            { name: "Economies of scale", statement: "average cost falls as output rises" },
            { name: "Diseconomies of scale", statement: "average cost rises when firm becomes too large/complex" },
          ],
          workedExample: {
            problem: "A bakery doubles output and its average cost per loaf falls from 80p to 65p. Later, after opening 200 stores, average cost rises to 75p. Explain both movements.",
            solution: "First, economies of scale: bulk flour purchases, bigger ovens and shared marketing cut average cost. Later, diseconomies: 200 stores became hard to coordinate — communication delays, inconsistent quality and demotivated staff raised average costs.",
          },
          questions: [
            {
              id: "ebz11-u9-scale-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What are economies of scale?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Costs that rise as output increases" },
                { id: "b", text: "Cost advantages gained as a business grows larger" },
                { id: "c", text: "Government subsidies" },
                { id: "d", text: "Higher prices charged to customers" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Economies of scale", statement: "Cost advantages from larger scale." }],
                steps: [{ reasoning: "Economies of scale = lower average costs as firm grows.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Cost advantages from growth",
              },
            },
            {
              id: "ebz11-u9-scale-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three examples of internal economies of scale.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal economies", statement: "Purchasing, technical, managerial, financial, marketing." }],
                steps: [
                  { reasoning: "Purchasing economies — bulk-buying discounts on raw materials.", marks: 1, markCode: "AO1" },
                  { reasoning: "Technical economies — specialist machinery/economies of size in production.", marks: 1, markCode: "AO1" },
                  { reasoning: "Managerial/financial/marketing economies — specialists, cheaper finance, shared advertising.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: purchasing, technical, managerial, financial, marketing.",
                commonErrors: ["Listing diseconomies."],
              },
            },
            {
              id: "ebz11-u9-scale-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a growing firm might achieve purchasing economies of scale.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Purchasing economies", statement: "Bulk orders earn supplier discounts." }],
                steps: [
                  { reasoning: "Larger firms order bigger quantities of inputs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Suppliers offer volume discounts — lower price per unit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lower input cost per unit reduces average total cost at higher output.", marks: 1, markCode: "AO2" },
                  { reasoning: "May also gain better credit terms or exclusive supply deals.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Bulk buying → supplier discounts → lower unit costs.",
                commonErrors: ["Saying prices rise with size."],
              },
            },
            {
              id: "ebz11-u9-scale-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A fast-growing online retailer finds that average costs have started rising despite higher sales.",
              parts: [
                { label: "a", prompt: "Explain what diseconomies of scale are.", marks: 2 },
                { label: "b", prompt: "Give two possible causes of diseconomies in this retailer.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Diseconomies", statement: "Average cost rises when firm becomes too large/complex." }],
                steps: [
                  { reasoning: "(a) Diseconomies = rising average costs when a business becomes too large to manage efficiently.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cause 1: communication breakdowns across many staff/departments — orders get lost or delayed.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cause 2: coordination problems between warehouses/systems, or demotivated staff feeling remote.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) rising average costs from excessive size. (b) communication/coordination failures or demotivation.",
                commonErrors: ["Calling it economies of scale.", "Causes unrelated to size/complexity."],
              },
            },
            {
              id: "ebz11-u9-scale-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A manufacturer wants the benefits of scale without diseconomies.",
              parts: [
                { label: "a", prompt: "Explain two ways the firm could achieve economies of scale.", marks: 3 },
                { label: "b", prompt: "Explain two ways it could reduce diseconomies if it grows too large.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Managing scale", statement: "Exploit scale advantages; decentralise and flatten to avoid diseconomies." }],
                steps: [
                  { reasoning: "(a) Way 1: bulk-buy materials for purchasing economies; or invest in specialist machinery for technical economies.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Way 2: spread advertising/marketing costs over larger output; negotiate better finance.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Way 1: delayer — remove management layers to speed communication and decisions.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Way 2: decentralise — give divisions autonomy to decide closer to operations; use IT.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) purchasing/technical/marketing economies. (b) delayering, decentralisation/IT.",
                commonErrors: ["Diseconomy fixes that are actually economies.", "Vague 'communicate better' without mechanism."],
              },
            },
            {
              id: "ebz11-u9-scale-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A small firm doubles in size over two years; profits rise but so do coordination problems.",
              parts: [
                { label: "a", prompt: "Define economies of scale.", marks: 2 },
                { label: "b", prompt: "Explain two economies the firm may have gained.", marks: 3 },
                { label: "c", prompt: "Define diseconomies of scale.", marks: 2 },
                { label: "d", prompt: "Explain two diseconomies the firm may now face and how to reduce them.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Scale effects", statement: "Growth gives cost advantages then coordination costs; manage the trade-off." }],
                steps: [
                  { reasoning: "(a) Cost advantages gained as the business grows larger — lower average costs.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Economy 1: purchasing — bulk discounts on inputs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Economy 2: technical/managerial/financial — specialist equipment, experts, cheaper finance.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Diseconomies = rising average costs when the firm becomes too large/complex.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Diseconomy 1: communication breakdowns — fix with IT/flatter structure.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Diseconomy 2: demotivated staff/coordination problems — decentralise, train, delegate.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) cost advantages of size; (b) two economies; (c) rising costs from excess size; (d) two diseconomies + fixes.",
                commonErrors: ["Definitions swapped.", "Fixes not linked to specific diseconomy."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u9-growth-notes", title: "Growth and scale — revision notes",
      summary: "Organic growth = own resources (slow, controlled); external = mergers, takeovers, JVs, franchises (fast, risky). Growth brings economies of scale (lower average costs) but too much size causes diseconomies (rising costs from coordination problems).",
      sections: [
        { heading: "Key idea", body: "Match growth method to speed, capital and risk needs; control growth to capture economies without diseconomies." },
        { heading: "External methods", body: "Merger=equal combine; takeover=buy control; JV=shared new venture; franchise=licensed brand." },
        { heading: "Scale", body: "Economies: purchasing, technical, managerial, financial, marketing. Diseconomies: communication, coordination, motivation." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "ebz11-u9-lesson-9-2", code: "9-2",
      title: "Innovation and Technology",
      goal: "I CAN explain product and process innovation and evaluate the impact of technology on business.",
      standards: ["Edexcel IGCSE Business 4BS0 — Innovation, technology and change"],
      vocabulary: [
        { term: "Product innovation", definition: "Developing new or improved goods or services for customers." },
        { term: "Process innovation", definition: "Improving how products are made or delivered — new methods, machinery or systems." },
        { term: "Research and development (R&D)", definition: "Formal activity to create new products, processes or knowledge." },
        { term: "Automation", definition: "Using machines/computers to perform tasks previously done by people." },
        { term: "CAD/CAM", definition: "Computer-aided design/manufacture — designing and producing via computer systems." },
        { term: "Obsolescence", definition: "A product or skill becoming outdated and worthless." },
        { term: "Competitive advantage", definition: "Something a business does better than rivals, giving it an edge." },
      ],
      concepts: [
        {
          id: "ebz11-u9-innovation", title: "Product and Process Innovation",
          skill: "Explain why businesses innovate and distinguish product from process innovation.",
          sections: [
            { heading: "Types of innovation", body: "**Product innovation** creates new or improved goods/services — e.g. a phone maker adding a camera. **Process innovation** improves how things are made or delivered — e.g. a car plant using robots, or a restaurant switching to online ordering. Innovation often involves **R&D** — formal spending on research to create new products/processes. Innovation can be **radical** (completely new — e.g. the internet) or **incremental** (improvements to existing products — e.g. a better battery)." },
            { heading: "Why businesses innovate", body: "**Reasons**: competition — rivals innovate so must you; changing customer tastes and expectations; extending product life cycles; reducing costs via process innovation; creating competitive advantage and premium pricing; entering new markets. **Benefits**: higher sales and market share, efficiency gains, differentiation, survival. **Costs/risks**: R&D is expensive and may fail; new products need marketing; process change disrupts production; innovations can be copied by rivals; new technology can make skills/stock obsolete." },
          ],
          keyFormulas: [
            { name: "Product innovation", statement: "new/improved goods or services for customers" },
            { name: "Process innovation", statement: "new/improved ways of making or delivering" },
          ],
          workedExample: {
            problem: "A bicycle maker invests in R&D to develop an electric bike (product innovation) and a robot welding line (process innovation). Explain the different aims of each.",
            solution: "The electric bike aims to create a new product that attracts customers and commands a premium — product innovation targets demand. The robot welding line aims to cut production costs and improve consistency — process innovation targets efficiency. Together they could give both higher revenue and lower costs.",
          },
          questions: [
            {
              id: "ebz11-u9-innovation-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is process innovation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Developing a new product for customers" },
                { id: "b", text: "Improving the way products are made or delivered" },
                { id: "c", text: "Selling products online" },
                { id: "d", text: "Hiring more staff" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Process innovation", statement: "Improved methods of production/delivery." }],
                steps: [{ reasoning: "Process innovation = better ways of making/delivering, not the product itself.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Improving production/delivery methods",
              },
            },
            {
              id: "ebz11-u9-innovation-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between product innovation and process innovation, giving an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Innovation types", statement: "Product = what is sold; process = how it is made/delivered." }],
                steps: [
                  { reasoning: "Product innovation: new/improved goods or services — e.g. adding a camera to a phone.", marks: 1, markCode: "AO1" },
                  { reasoning: "Process innovation: new/improved production or delivery methods — e.g. robot assembly line.", marks: 1, markCode: "AO1" },
                  { reasoning: "Clear distinction: what customers buy vs how it is produced.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Product=new/improved offering; process=better production/delivery — with examples.",
                commonErrors: ["Examples without type labels."],
              },
            },
            {
              id: "ebz11-u9-innovation-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two reasons why businesses invest in research and development.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "R&D motives", statement: "Competition, changing tastes, differentiation, efficiency." }],
                steps: [
                  { reasoning: "Reason 1: keep pace with rivals — competitors innovate, so the firm must to stay competitive.", marks: 2, markCode: "AO2" },
                  { reasoning: "Reason 2: respond to changing customer tastes/times, or reduce costs through process innovation.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Competition/innovation race and changing customer needs or cost reduction.",
                commonErrors: ["Saying R&D is required by law."],
              },
            },
            {
              id: "ebz11-u9-innovation-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A furniture company is deciding whether to spend £2m on R&D for a new smart sofa.",
              parts: [
                { label: "a", prompt: "Explain two potential benefits of this product innovation.", marks: 3 },
                { label: "b", prompt: "Explain one risk of the investment.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Innovation evaluation", statement: "New products can differentiate and earn premiums but R&D may fail." }],
                steps: [
                  { reasoning: "(a) Benefit: differentiated product can command premium prices and attract new customers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit: extends product range/life cycle and can open new markets.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Risk: R&D may fail — the product may not sell, leaving £2m wasted; rivals may copy it.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) differentiation/premium, new markets. (b) R&D failure/copying.",
                commonErrors: ["Risk that is not innovation-specific.", "Benefits without link to new product."],
              },
            },
            {
              id: "ebz11-u9-innovation-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A manufacturer is choosing between investing in product innovation or process innovation.",
              parts: [
                { label: "a", prompt: "Explain one way product innovation could benefit the firm.", marks: 2 },
                { label: "b", prompt: "Explain one way process innovation could benefit the firm.", marks: 2 },
                { label: "c", prompt: "Explain one drawback common to both types of innovation.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Innovation trade-offs", statement: "Product targets demand; process targets efficiency; both cost money and can fail." }],
                steps: [
                  { reasoning: "(a) Product innovation benefit: new/improved products attract customers and can earn higher prices.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Process innovation benefit: cheaper/faster/more consistent production lowers unit costs.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Drawback: development costs money and may not pay off; innovation can be copied by rivals.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) demand/prices; (b) efficiency/costs; (c) cost + copying risk.",
                commonErrors: ["Product/process benefits swapped.", "Drawback that applies to only one type."],
              },
            },
            {
              id: "ebz11-u9-innovation-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A traditional retailer is losing customers to online competitors.",
              parts: [
                { label: "a", prompt: "Define product innovation and process innovation.", marks: 3 },
                { label: "b", prompt: "Suggest one product innovation the retailer could pursue.", marks: 2 },
                { label: "c", prompt: "Suggest one process innovation the retailer could pursue.", marks: 2 },
                { label: "d", prompt: "Explain one risk the retailer faces in innovating.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Innovating to compete", statement: "Respond to rivals with new products and better processes, weighed against cost/risk." }],
                steps: [
                  { reasoning: "(a) Product innovation = new/improved goods/services for customers; process = improved production/delivery methods.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Product idea: click-and-collect, personalised recommendations, new product lines — anything new for customers.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Process idea: online ordering system, automated warehouse, faster delivery logistics.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Risk: innovation is costly and may fail or be copied; disruption during implementation.", marks: 3, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definitions; (b) customer-facing innovation; (c) operational innovation; (d) cost/failure/copying.",
                commonErrors: ["Suggestions that are neither product nor process innovation.", "Risk unrelated to innovation."],
              },
            },
          ],
        },
        {
          id: "ebz11-u9-technology", title: "Technology and Automation",
          skill: "Evaluate how new technology affects productivity, employment and competitiveness.",
          sections: [
            { heading: "Technology in business", body: "**ICT** (information and communication technology) supports nearly every function — email and video calls for communication, databases for stock and customer records, e-commerce for sales, and accounting software. **Automation** uses machines/computers for tasks previously done by people — robot arms in assembly, self-service checkouts, automated warehouses. **CAD/CAM** lets designers create products on screen and machines produce them directly — faster, more accurate, less waste." },
            { heading: "Impact of technology", body: "**Benefits**: higher productivity and consistency; lower labour costs per unit; 24/7 operation; better information for decisions; new products/services possible. **Costs/risks**: high capital cost; staff need retraining; jobs lost to automation — unemployment and skills obsolescence; over-reliance creates vulnerability (system failure stops the business); security risks (data breaches); implementation disruption. Technology gives competitive advantage only if rivals cannot easily copy it, and it must fit the business's strategy and skills." },
          ],
          keyFormulas: [
            { name: "Automation", statement: "machines/computers replacing human tasks" },
            { name: "CAD/CAM", statement: "computer design + computer-controlled manufacture" },
          ],
          workedExample: {
            problem: "A warehouse replaces 30 pickers with an automated system costing £500,000. Output doubles and errors fall. Evaluate the decision.",
            solution: "Benefits: labour costs fall per unit, output and accuracy rise, system works 24/7. Costs: £500,000 capital, 30 jobs lost, retraining needed for remaining staff, dependence on the system. Payback depends on labour savings vs the investment — the firm should also consider the social/reputational impact of redundancies.",
          },
          questions: [
            {
              id: "ebz11-u9-technology-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is automation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Using machines or computers to do tasks previously done by people" },
                { id: "b", text: "A type of staff training" },
                { id: "c", text: "Selling products abroad" },
                { id: "d", text: "A marketing technique" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Automation", statement: "Machines replacing human tasks." }],
                steps: [{ reasoning: "Automation = machines/computers doing tasks humans used to do.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Machines doing human tasks",
              },
            },
            {
              id: "ebz11-u9-technology-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three benefits to a business of introducing new technology.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Technology benefits", statement: "Productivity, cost, consistency, information." }],
                steps: [
                  { reasoning: "Higher productivity/efficiency — machines work faster, longer, more consistently.", marks: 1, markCode: "AO1" },
                  { reasoning: "Lower unit labour costs once investment is recovered.", marks: 1, markCode: "AO1" },
                  { reasoning: "Better information for decisions (databases, ICT) or new products possible.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: productivity, lower costs, consistency, better info, new products.",
                commonErrors: ["Listing drawbacks as benefits."],
              },
            },
            {
              id: "ebz11-u9-technology-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two problems a business may face when introducing automation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Automation problems", statement: "Cost, job losses, retraining, dependence." }],
                steps: [
                  { reasoning: "Problem 1: high capital cost — the machinery must earn its investment back.", marks: 2, markCode: "AO2" },
                  { reasoning: "Problem 2: job losses and need to retrain remaining staff; morale/industrial relations issues.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "High cost and job losses/retraining — or dependence on systems.",
                commonErrors: ["Problems unrelated to automation."],
              },
            },
            {
              id: "ebz11-u9-technology-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A factory replaces manual assembly with robots.",
              parts: [
                { label: "a", prompt: "Explain two benefits the factory gains.", marks: 3 },
                { label: "b", prompt: "Explain one problem the factory may face with its workforce.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Automation trade-offs", statement: "Efficiency gains vs employment and cost burdens." }],
                steps: [
                  { reasoning: "(a) Benefit: robots work faster and consistently — higher output and quality.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit: lower unit labour costs over time and 24/7 operation possible.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Problem: redundancies — displaced workers need retraining or lose jobs; morale may fall.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) productivity/quality, lower costs. (b) redundancies/retraining.",
                commonErrors: ["Benefits that are actually costs.", "Workforce problem that is not realistic."],
              },
            },
            {
              id: "ebz11-u9-technology-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A small business is considering investing in computer-aided design and manufacture (CAD/CAM).",
              parts: [
                { label: "a", prompt: "Explain what CAD/CAM means.", marks: 2 },
                { label: "b", prompt: "Give two benefits CAD/CAM could bring.", marks: 2 },
                { label: "c", prompt: "Give one drawback.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "CAD/CAM", statement: "Computer design linked to computer-controlled production." }],
                steps: [
                  { reasoning: "(a) CAD = designing products on computer; CAM = machines produce directly from the design.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: faster, more accurate design and production; less material waste.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: easy to modify designs and produce customised/batch variations.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Drawback: very high capital cost; needs skilled staff to operate.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) computer design+manufacture. (b) speed/accuracy, flexibility. (c) cost/skills.",
                commonErrors: ["CAD and CAM defined identically.", "Drawback unrelated to the technology."],
              },
            },
            {
              id: "ebz11-u9-technology-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An established manufacturer wants to modernise with new technology.",
              parts: [
                { label: "a", prompt: "Define automation.", marks: 2 },
                { label: "b", prompt: "Explain two benefits automation could bring to the manufacturer.", marks: 3 },
                { label: "c", prompt: "Explain two problems the manufacturer might face.", marks: 3 },
                { label: "d", prompt: "Suggest one way to reduce the workforce problems of automation.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Technology adoption", statement: "Automation raises efficiency but brings cost, employment and skill challenges." }],
                steps: [
                  { reasoning: "(a) Automation = machines/computers performing tasks previously done by people.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: higher productivity, consistency and output quality.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: lower unit labour costs and ability to operate longer hours.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Problem: high capital cost — investment must be recovered.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Problem: job losses and need for retraining; dependence on the system.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. retrain displaced workers for technical/maintenance roles or redeploy them.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) productivity, cost; (c) capital cost, jobs/skills; (d) retrain/redeploy.",
                commonErrors: ["Benefits and problems swapped.", "No concrete workforce solution."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u9-innovation-notes", title: "Innovation and technology — revision notes",
      summary: "Product innovation = new/improved offerings; process innovation = better production/delivery. Both driven by competition and changing tastes but cost money and can be copied. Technology (automation, CAD/CAM, ICT) raises productivity but brings capital costs, job losses and dependence.",
      sections: [
        { heading: "Key idea", body: "Product innovation targets demand/prices; process innovation targets efficiency/costs." },
        { heading: "Risks", body: "R&D may fail; innovations can be copied; automation displaces workers and creates dependence." },
        { heading: "Management", body: "Retrain and redeploy staff; phase technology adoption; keep systems maintained and secure." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "ebz11-u9-lesson-9-3", code: "9-3",
      title: "E-commerce and Globalisation",
      goal: "I CAN explain e-commerce models and the impact of globalisation on businesses.",
      standards: ["Edexcel IGCSE Business 4BS0 — E-commerce and global influences"],
      vocabulary: [
        { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
        { term: "B2C", definition: "Business-to-consumer e-commerce — firms selling directly to individual customers." },
        { term: "B2B", definition: "Business-to-business e-commerce — firms selling to other businesses." },
        { term: "C2C", definition: "Consumer-to-consumer e-commerce — individuals selling to each other, e.g. auction sites." },
        { term: "Bricks and mortar", definition: "Traditional physical shop premises, as opposed to online-only selling." },
        { term: "Globalisation", definition: "The growing integration of world markets, driven by trade, technology and investment." },
        { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
        { term: "Outsourcing", definition: "Contracting work or production to another firm, often abroad." },
      ],
      concepts: [
        {
          id: "ebz11-u9-ecommerce", title: "E-commerce Models",
          skill: "Describe e-commerce types and evaluate its benefits and limitations.",
          sections: [
            { heading: "Types of e-commerce", body: "**B2C** — businesses sell to individual consumers online (e.g. online clothing shops). **B2B** — businesses sell to other businesses (e.g. a wholesaler's online catalogue). **C2C** — consumers sell to each other via platforms (e.g. auction and marketplace sites). Businesses can be **pure e-tailers** (online only), **bricks-and-mortar** (shops only), or **bricks-and-clicks** (both — e.g. click-and-collect)." },
            { heading: "Benefits and limitations", body: "**Benefits**: reach customers nationally/globally 24/7; lower costs (no shop rent, less staff); easy price comparison and personalised marketing; quick setup and scaling. **Limitations**: customers cannot see/touch products — returns and trust issues; delivery costs and delays; need for IT skills and website maintenance; online competition is intense; some products (fresh food, bulky items) are hard to sell online; security/privacy concerns; smaller firms struggle against big online rivals." },
          ],
          keyFormulas: [
            { name: "B2C / B2B / C2C", statement: "who sells to whom: business→consumer, business→business, consumer→consumer" },
            { name: "Bricks-and-clicks", statement: "physical shops + online sales combined" },
          ],
          workedExample: {
            problem: "A local bookstore opens a website selling to individuals and also lists used books for customers to sell to each other. Classify both activities.",
            solution: "Selling books on its website to individuals = B2C e-commerce. The platform letting customers sell to each other = C2C (marketplace). If it also buys stock from publishers online, those transactions would be B2B.",
          },
          questions: [
            {
              id: "ebz11-u9-ecommerce-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is B2C e-commerce?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Business selling to another business" },
                { id: "b", text: "Business selling directly to individual consumers" },
                { id: "c", text: "Consumers selling to each other" },
                { id: "d", text: "Selling in a physical shop" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "B2C", statement: "Business-to-consumer online sales." }],
                steps: [{ reasoning: "B2C = business sells directly to individual customers online.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Business to individual consumers",
              },
            },
            {
              id: "ebz11-u9-ecommerce-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between B2B and C2C e-commerce.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "B2B vs C2C", statement: "Who sells to whom." }],
                steps: [
                  { reasoning: "B2B: a business sells goods/services to another business — e.g. wholesale supplies ordered online.", marks: 1, markCode: "AO1" },
                  { reasoning: "C2C: individual consumers sell to each other — e.g. auction/marketplace sites.", marks: 1, markCode: "AO1" },
                  { reasoning: "Clear contrast of seller and buyer in each.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "B2B=firm→firm; C2C=consumer→consumer.",
                commonErrors: ["Confusing B2C with C2C."],
              },
            },
            {
              id: "ebz11-u9-ecommerce-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits a small business gains from selling online.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "E-commerce benefits", statement: "Reach, cost, convenience, data." }],
                steps: [
                  { reasoning: "Benefit 1: reaches customers beyond the local area — national/global market 24/7.", marks: 2, markCode: "AO2" },
                  { reasoning: "Benefit 2: lower costs — no shop rent, fewer staff; or better customer data for marketing.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Wider reach/24-7 trading and lower costs or better customer data.",
                commonErrors: ["Benefits that apply only to large firms."],
              },
            },
            {
              id: "ebz11-u9-ecommerce-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A clothing shop currently sells only in its store and is considering going online.",
              parts: [
                { label: "a", prompt: "Explain two benefits of adding online sales for this shop.", marks: 3 },
                { label: "b", prompt: "Explain one limitation of selling clothes online.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bricks-and-clicks", statement: "Online extends reach but has product-specific limits." }],
                steps: [
                  { reasoning: "(a) Benefit: reach customers who cannot visit the store — wider market.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit: sell 24/7; existing stock and brand support online sales (bricks-and-clicks).", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Limitation: customers cannot try clothes on — sizing/returns problems and trust issues.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) wider reach, 24/7 sales. (b) cannot try on → returns/trust issues.",
                commonErrors: ["Limitation unrelated to clothing."],
              },
            },
            {
              id: "ebz11-u9-ecommerce-q5", difficulty: "challenge", totalMarks: 6,
              stem: "An online-only toy seller competes with a chain of physical toy shops.",
              parts: [
                { label: "a", prompt: "Explain two advantages the online seller has over the shops.", marks: 3 },
                { label: "b", prompt: "Explain two advantages the physical shops have over the online seller.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Online vs physical", statement: "Reach/cost vs experience/immediacy." }],
                steps: [
                  { reasoning: "(a) Advantage: lower costs — no shop rent; wider reach — sell nationally 24/7.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Advantage: easy for customers to compare prices; personalised marketing via data.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Advantage: customers can see/touch toys and get immediate purchase — no delivery wait.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Advantage: personal service/advice builds loyalty; no delivery costs for buyers.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) cost + reach. (b) experience/immediacy + service.",
                commonErrors: ["Advantages that belong to the wrong side."],
              },
            },
            {
              id: "ebz11-u9-ecommerce-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A traditional retailer is deciding whether to move fully online.",
              parts: [
                { label: "a", prompt: "Define e-commerce.", marks: 2 },
                { label: "b", prompt: "Explain two benefits of selling online.", marks: 3 },
                { label: "c", prompt: "Explain two limitations of selling online.", marks: 3 },
                { label: "d", prompt: "Suggest why keeping the physical shop as well (bricks-and-clicks) might be better than going fully online.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "E-commerce decision", statement: "Online = reach/cost; physical = experience/trust; hybrid balances both." }],
                steps: [
                  { reasoning: "(a) E-commerce = buying and selling goods/services over the internet.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit 1: reach customers nationally/globally, trading 24/7.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit 2: lower costs (no rent/staff) or better customer data.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Limitation 1: customers cannot see/touch products — returns and trust issues.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Limitation 2: delivery costs/delays; intense online competition; need IT skills.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Keeps both customer groups — online reach plus in-store experience/trust; hedges risk.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) reach/cost; (c) experience/delivery limits; (d) hybrid serves both.",
                commonErrors: ["Limitations that are actually benefits.", "(d) answer that just repeats benefits."],
              },
            },
          ],
        },
        {
          id: "ebz11-u9-globalisation", title: "Globalisation",
          skill: "Explain drivers of globalisation and evaluate its impact on businesses.",
          sections: [
            { heading: "What globalisation is", body: "**Globalisation** is the increasing integration of national economies into a global market. Drivers: **trade liberalisation** (tariffs and trade barriers falling); **ICT and transport** (cheap communication and faster shipping); **MNCs** investing across borders; **labour mobility**; consumer demand for variety and lower prices. The result: businesses can buy inputs and sell products almost anywhere, face competitors worldwide, and source production where costs are lowest." },
            { heading: "Impacts on business", body: "**Opportunities**: access to huge new markets; cheaper inputs from low-cost suppliers; overseas production reduces costs (outsourcing/offshoring); economies of scale from global sales. **Threats**: intense foreign competition at home; jobs moved abroad to cheaper labour; dependence on exchange rates and global supply chains; ethical issues (labour standards, environmental impact overseas); vulnerability to global shocks (pandemics, trade disputes). Success depends on adapting products to local markets, managing currency risk and competing on more than price." },
          ],
          keyFormulas: [
            { name: "Globalisation drivers", statement: "trade liberalisation, ICT, transport, MNC investment" },
            { name: "MNC", statement: "company operating in more than one country" },
          ],
          workedExample: {
            problem: "A UK clothing brand moves production to a lower-cost country. Explain one benefit and one risk.",
            solution: "Benefit: lower labour/production costs → higher profit margins or lower prices to compete. Risk: dependence on foreign suppliers — exchange rate changes, shipping delays or ethical/labour-standard criticism can hurt the brand.",
          },
          questions: [
            {
              id: "ebz11-u9-globalisation-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is globalisation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A type of company tax" },
                { id: "b", text: "The growing integration of world markets and economies" },
                { id: "c", text: "Selling only within one country" },
                { id: "d", text: "A government trade ban" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Globalisation", statement: "Integration of world markets." }],
                steps: [{ reasoning: "Globalisation = economies becoming more interconnected.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Integration of world markets",
              },
            },
            {
              id: "ebz11-u9-globalisation-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three drivers of globalisation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Globalisation drivers", statement: "Trade liberalisation, ICT/transport, MNCs, labour mobility." }],
                steps: [
                  { reasoning: "Falling trade barriers — tariffs and quotas reduced.", marks: 1, markCode: "AO1" },
                  { reasoning: "ICT and transport — cheap communication and faster shipping.", marks: 1, markCode: "AO1" },
                  { reasoning: "MNC investment and labour mobility across borders.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: trade liberalisation, ICT/transport, MNCs, labour mobility.",
                commonErrors: ["Listing impacts rather than drivers."],
              },
            },
            {
              id: "ebz11-u9-globalisation-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two opportunities globalisation gives to businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation opportunities", statement: "New markets, cheaper inputs, scale." }],
                steps: [
                  { reasoning: "Opportunity 1: access to huge overseas markets — more customers for products.", marks: 2, markCode: "AO2" },
                  { reasoning: "Opportunity 2: cheaper inputs/production abroad → lower costs; or economies of scale from global sales.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "New markets and cheaper inputs/scale.",
                commonErrors: ["Threats listed as opportunities."],
              },
            },
            {
              id: "ebz11-u9-globalisation-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A domestic manufacturer faces cheaper imports and considers moving production abroad.",
              parts: [
                { label: "a", prompt: "Explain one opportunity moving production abroad gives the manufacturer.", marks: 2 },
                { label: "b", prompt: "Explain two threats the manufacturer faces from globalisation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation trade-offs", statement: "Cost advantages abroad vs competition and dependency at home." }],
                steps: [
                  { reasoning: "(a) Opportunity: lower production costs in a lower-wage country → higher margins or lower prices.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Threat 1: cheaper foreign imports compete on price at home.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Threat 2: dependence on foreign suppliers — exchange rates, shipping, ethical criticism; or job losses at home.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) lower costs. (b) price competition + dependency/job losses.",
                commonErrors: ["Opportunity that is actually a threat.", "Threats unrelated to globalisation."],
              },
            },
            {
              id: "ebz11-u9-globalisation-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A UK company sets up factories in three countries.",
              parts: [
                { label: "a", prompt: "What term describes a company operating in more than one country?", marks: 1 },
                { label: "b", prompt: "Explain two benefits of being a multinational for this company.", marks: 3 },
                { label: "c", prompt: "Explain one ethical issue the company should consider overseas.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC impacts", statement: "Global reach brings scale and access but ethical and dependency risks." }],
                steps: [
                  { reasoning: "(a) Multinational corporation (MNC).", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: access to local markets, customers and resources in each country.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: economies of scale and ability to source production where costs are lowest.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Ethical issue: labour standards/wages of overseas workers, or environmental impact of factories.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) MNC. (b) markets/access, scale/costs. (c) labour standards or environment.",
                commonErrors: ["Benefits that are not multinational-specific.", "Ethical issue unrelated to overseas operations."],
              },
            },
            {
              id: "ebz11-u9-globalisation-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Globalisation is increasing competition for businesses in the firm's home country.",
              parts: [
                { label: "a", prompt: "Define globalisation.", marks: 2 },
                { label: "b", prompt: "Give two drivers of globalisation.", marks: 2 },
                { label: "c", prompt: "Explain two ways globalisation threatens domestic businesses.", marks: 3 },
                { label: "d", prompt: "Explain two ways a domestic business could respond to globalisation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation response", statement: "Threats: foreign competition, job/cost pressures; responses: innovate, differentiate, export." }],
                steps: [
                  { reasoning: "(a) Globalisation = growing integration of world markets and economies.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Drivers: falling trade barriers, ICT/transport, MNC investment.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Threat 1: cheaper foreign imports undercut domestic prices.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Threat 2: jobs moved abroad; or pressure on wages/costs; loss of market share.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Response 1: innovate/differentiate — quality, service, niche products rivals cannot match.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Response 2: export to new markets or outsource production to cut costs.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) drivers; (c) price competition/jobs; (d) differentiate/innovate, export/outsource.",
                commonErrors: ["Drivers listed as impacts.", "Responses that ignore competition."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u9-globalisation-notes", title: "E-commerce and globalisation — revision notes",
      summary: "E-commerce types: B2C, B2B, C2C; online = reach/cost, physical = experience/trust. Globalisation = integrated world markets driven by trade liberalisation, ICT and MNCs — opportunities (markets, cheap inputs) vs threats (foreign competition, job losses, dependency).",
      sections: [
        { heading: "Key idea", body: "Match the sales channel to the product and customer; compete globally on more than price." },
        { heading: "E-commerce", body: "Bricks-and-clicks hedges risk — online reach plus in-store trust and experience." },
        { heading: "Globalisation", body: "MNCs gain scale and market access but face ethical issues and supply-chain dependence." },
      ],
    },
  },
];
