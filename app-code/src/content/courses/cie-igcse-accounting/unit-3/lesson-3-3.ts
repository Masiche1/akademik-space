import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieiacct-u3-lesson-3-3",
  code: "3-3",
  title: "Inventory valuation and adjustments",
  goal: "I CAN value inventory using FIFO and AVCO, and adjust for accruals, prepayments, depreciation and doubtful debts.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Sections 5 and 9: Inventory and adjustments",
  ],
  vocabulary: [
    {
      term: "FIFO",
      definition:
        "First In, First Out — inventory valued assuming the oldest stock is sold first.",
    },
    {
      term: "AVCO",
      definition:
        "Average Cost — inventory valued at the weighted average cost of all purchases.",
    },
    {
      term: "Accrual",
      definition:
        "An expense incurred but not yet paid — recorded as an expense and a liability (accrued expense).",
    },
    {
      term: "Prepayment",
      definition:
        "An expense paid in advance — recorded as a current asset (prepayment).",
    },
    {
      term: "Depreciation",
      definition:
        "The systematic allocation of a non-current asset's cost over its useful life.",
    },
    {
      term: "Allowance for doubtful debts",
      definition:
        "An estimated amount provided for debtors expected to default — reduces the value of trade receivables.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-inventory",
      title: "Inventory valuation — FIFO and AVCO",
      skill: "Value closing inventory using FIFO and AVCO methods.",
      lesson: {
        sections: [
          {
            heading: "Why inventory is valued",
            body: "Closing inventory appears in the balance sheet at cost (or net realisable value if lower). The method used affects cost of sales and profit. **FIFO** assumes oldest stock sells first — remaining stock valued at most recent prices. **AVCO** values all stock at the weighted average cost.",
          },
          {
            heading: "FIFO",
            body: "List purchases chronologically. The units remaining in closing inventory are taken from the MOST RECENT purchases. Older purchases are deemed sold first. FIFO usually gives higher inventory value and lower cost of sales in rising prices.",
          },
          {
            heading: "AVCO",
            body: "Total cost of all units available ÷ total units available = average cost per unit. Closing inventory = units remaining × average cost. AVCO smooths price fluctuations.",
          },
        ],
        keyFormulas: [
          {
            name: "FIFO",
            statement:
              "Closing inventory valued at most recent purchase prices",
          },
          {
            name: "AVCO",
            statement:
              "Average cost = total cost ÷ total units; closing inventory = units × average cost",
          },
        ],
        workedExample: {
          problem:
            "Opening inventory 100 units @ \\$10. Purchases: 200 @ \\$12, 150 @ \\$14. 250 units sold. Value closing inventory by FIFO and AVCO.",
          solution:
            "FIFO: closing = 200 units from latest @ \\$14 = \\$2,800. AVCO: total cost = 100×10 + 200×12 + 150×14 = 1,000+2,400+2,100 = \\$5,500; total units 450; avg = \\$12.22; closing 200 × 12.22 = \\$2,444.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-inventory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "FIFO stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First In, First Out" },
              { id: "b", text: "First Item, First Order" },
              { id: "c", text: "Final Inventory, First Out" },
              { id: "d", text: "Full Inventory, Full Output" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FIFO",
                statement: "First In, First Out inventory method.",
              },
            ],
            steps: [
              {
                reasoning: "FIFO = First In, First Out.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) First In, First Out.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "AVCO stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average Cost" },
              { id: "b", text: "Added Value, Cost Only" },
              { id: "c", text: "Annual Value, Current Order" },
              { id: "d", text: "All Valuation, Cost Output" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AVCO",
                statement: "Average Cost inventory method.",
              },
            ],
            steps: [
              { reasoning: "AVCO = Average Cost.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Average Cost.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under FIFO, closing inventory is valued at:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The most recent purchase prices, because oldest stock is assumed sold first",
              },
              { id: "b", text: "The oldest purchase prices" },
              { id: "c", text: "The average of all prices" },
              { id: "d", text: "The selling price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FIFO logic",
                statement: "Oldest sold first → newest remains.",
              },
            ],
            steps: [
              {
                reasoning:
                  "FIFO values remaining stock at the latest purchase costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Most recent purchase prices.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening inventory 50 units @ \\$8. Purchases: 100 @ \\$10, 80 @ \\$12. 120 units sold. Calculate closing inventory value using FIFO.",
          response: {
            type: "numeric",
            parts: [
              { label: "Closing inventory (FIFO)", answer: 1260, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "FIFO",
                statement: "Remaining units valued at most recent prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total units = 50 + 100 + 80 = 230; sold 120 → closing 110 units.",
                working: "230 - 120 = 110",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "FIFO: oldest sold first — closing consists of latest purchases: 80 @ \\$12 + 30 @ \\$10.",
                working: "80*12 + 30*10 = 960 + 300 = 1260",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recompute: 110 units = 80 from last purchase @12 + 30 from second @10 = \\$1,260.",
                working: "\\$1,260",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$1,260",
            commonErrors: ["Using opening inventory cost for closing units."],
          },
        },
        {
          id: "cieiacct-u3-inventory-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Using the same data (opening 50 @ \\$8; purchases 100 @ \\$10, 80 @ \\$12; 120 sold), calculate closing inventory using AVCO.",
          response: {
            type: "numeric",
            parts: [
              { label: "Closing inventory (AVCO)", answer: 1128.7, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AVCO",
                statement:
                  "Average cost = total cost ÷ total units; closing = units × average.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total cost = 50×8 + 100×10 + 80×12 = 400 + 1,000 + 960 = \\$2,360.",
                working: "400 + 1000 + 960 = 2360",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total units = 230; average = 2,360 ÷ 230 = \\$10.26 (approx).",
                working: "2360 / 230 = 10.2609",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closing 110 units × 10.2609 = \\$1,128.70... recompute: 110 × 10.2609 = 1,128.7. State approx \\$1,129.",
                working: "110 * 10.2609 = 1128.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$1,128.70 (approx \\$1,129)",
            commonErrors: ["Answer must match steps: 110 × avg cost."],
          },
        },
        {
          id: "cieiacct-u3-inventory-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Under FIFO with rising prices, compared to AVCO, closing inventory will be:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Higher, and cost of sales lower — FIFO uses latest (higher) prices for remaining stock",
              },
              { id: "b", text: "Lower, and cost of sales higher" },
              { id: "c", text: "Identical to AVCO" },
              { id: "d", text: "Lower, but profit higher" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FIFO vs AVCO effect",
                statement:
                  "In rising prices FIFO leaves higher-cost stock → higher inventory, lower CoS, higher profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "FIFO values remaining stock at latest (higher) prices → higher inventory and lower cost of sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Higher inventory, lower cost of sales.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Opening inventory 200 units @ \\$5. During the year: purchase 1 300 @ \\$6; purchase 2 200 @ \\$7. Sales totalled 450 units. Calculate closing inventory under FIFO and state cost of sales.",
          response: {
            type: "numeric",
            parts: [
              { label: "Closing inventory (FIFO)", answer: 1700, unit: "$" },
              { label: "Cost of sales", answer: 2500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "FIFO",
                statement: "Remaining units from latest purchases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total units = 200 + 300 + 200 = 700; sold 450 → closing 250 units.",
                working: "700 - 450 = 250",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "FIFO closing: 200 @ \\$7 + 50 @ \\$6 = 1,400 + 300 = \\$1,700.",
                working: "200*7 + 50*6 = 1700",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost of sales = total available cost − closing inventory.",
                working:
                  "total = 200*5+300*6+200*7 = 1000+1800+1400=4200; 4200-1700=2500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State answers: closing \\$1,700; cost of sales \\$2,500.",
                working: "\\$1,700 and \\$2,500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Closing inventory \\$1,700; cost of sales \\$2,500",
          },
        },
        {
          id: "cieiacct-u3-inventory-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a business choose AVCO over FIFO for valuing inventory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AVCO advantage",
                statement:
                  "AVCO smooths price fluctuations and is simpler when prices change frequently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "AVCO gives a stable average cost, avoiding distortion when purchase prices fluctuate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is easier to apply when stock is intermingled or prices change often.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can produce a more representative profit figure in volatile markets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "AVCO smooths price fluctuations and is simpler to apply consistently.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Opening inventory 100 @ \\$10; purchases 200 @ \\$12 and 150 @ \\$14; 250 units sold. Calculate closing inventory under FIFO.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate closing inventory under AVCO for the same data.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "FIFO & AVCO",
                statement: "FIFO: latest prices; AVCO: weighted average.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Closing units = 450 − 250 = 200.",
                working: "450 - 250 = 200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "FIFO: 200 units all from latest @ \\$14 = \\$2,800.",
                working: "200 * 14 = 2800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State FIFO value.",
                working: "\\$2,800",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Total cost = 100×10 + 200×12 + 150×14 = 1,000 + 2,400 + 2,100 = \\$5,500.",
                working: "5500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Average = 5,500 ÷ 450 = \\$12.22; closing = 200 × 12.222 = \\$2,444.44.",
                working: "5500/450 = 12.222; 200*12.222 = 2444.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State AVCO value.",
                working: "\\$2,444 (approx)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) FIFO \\$2,800. (b) AVCO ≈ \\$2,444.",
          },
        },
        {
          id: "cieiacct-u3-inventory-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why inventory must be valued consistently from year to year.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A business switches from FIFO to AVCO. State two effects this could have on reported profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency",
                statement:
                  "Consistent methods allow meaningful year-on-year comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Changing methods makes profit figures incomparable — a change could artificially inflate or deflate profit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It undermines the reliability of financial statements for users making decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Accounting standards require consistent application unless a change is justified and disclosed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Effect 1: in rising prices, switching to AVCO may lower closing inventory value vs FIFO → higher cost of sales → lower profit.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Effect 2: it may alter the inventory figure on the balance sheet, changing working capital and liquidity ratios.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Consistency enables comparison and reliability. (b) Could lower profit (higher CoS) and change balance sheet inventory.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-periodic",
      title: "Periodic vs perpetual inventory",
      skill: "Distinguish between periodic and perpetual inventory systems.",
      lesson: {
        sections: [
          {
            heading: "Periodic inventory",
            body: "Inventory is counted physically at period end only. Purchases are recorded in total; cost of sales is calculated at year end: opening inventory + purchases − closing inventory. Simple but stock levels unknown during the year.",
          },
          {
            heading: "Perpetual inventory",
            body: "Records are updated continuously — every receipt and issue is entered immediately. The inventory account always shows current stock value. Requires more administration but enables better control and detects losses quickly.",
          },
        ],
        keyFormulas: [
          {
            name: "Periodic CoS",
            statement:
              "Cost of sales = opening inventory + purchases − closing inventory",
          },
          {
            name: "Perpetual",
            statement: "Inventory account updated with every transaction",
          },
        ],
        workedExample: {
          problem:
            "Opening inventory \\$10,000; purchases \\$50,000; closing inventory \\$12,000. Cost of sales (periodic)?",
          solution: "10,000 + 50,000 − 12,000 = \\$48,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-periodic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a periodic inventory system, inventory is counted:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only at the end of the accounting period" },
              { id: "b", text: "After every sale" },
              { id: "c", text: "Daily" },
              { id: "d", text: "Never — it is estimated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Periodic inventory",
                statement: "Physical count at period end only.",
              },
            ],
            steps: [
              {
                reasoning: "Periodic = count at period end only.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Only at period end.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a perpetual inventory system, the inventory account is updated:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuously — after every receipt and issue" },
              { id: "b", text: "Only at year end" },
              { id: "c", text: "Monthly" },
              { id: "d", text: "Only when discrepancies are found" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perpetual inventory",
                statement: "Updated continuously with each transaction.",
              },
            ],
            steps: [
              {
                reasoning: "Perpetual = continuous updating.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Continuously.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Opening inventory \\$8,000; purchases \\$45,000; closing inventory \\$10,000. Calculate cost of sales under the periodic method.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost of sales", answer: 43000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Periodic CoS",
                statement: "Opening + purchases − closing.",
              },
            ],
            steps: [
              {
                reasoning: "CoS = 8,000 + 45,000 − 10,000.",
                working: "8000 + 45000 - 10000 = 43000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$43,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$43,000",
          },
        },
        {
          id: "cieiacct-u3-periodic-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of a perpetual inventory system over a periodic system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perpetual advantages",
                statement: "Continuous records give better control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stock levels are known at all times — management can reorder before stockouts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Losses (theft, damage) are detected quickly because records are current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More accurate cost of sales and profit figures throughout the year.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two: real-time stock knowledge, quick loss detection, accurate interim figures.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two disadvantages of a perpetual inventory system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perpetual disadvantages",
                statement: "More administration required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Requires more bookkeeping — every transaction must be entered immediately, needing staff/time or software.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher cost to implement and maintain, especially for small businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Errors in recording can accumulate if not checked against physical counts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two: higher admin burden, higher cost, reliance on accurate recording.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business using periodic inventory must still determine closing inventory at year end. Explain how this is done and why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Closing inventory",
                statement: "Physical count valued at cost (FIFO/AVCO).",
              },
            ],
            steps: [
              {
                reasoning: "A physical count of stock is taken at period end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The counted units are valued using an approved method (FIFO or AVCO) at cost or NRV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closing inventory is essential — without it, cost of sales and profit cannot be calculated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physical count valued at cost/NRV; needed to calculate cost of sales and profit.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A trader's records: opening inventory \\$12,000; credit purchases \\$60,000; cash purchases \\$8,000; closing inventory \\$15,000. Calculate cost of sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost of sales", answer: 65000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "CoS",
                statement: "Opening + all purchases − closing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total purchases = credit + cash = 60,000 + 8,000 = \\$68,000.",
                working: "60000 + 8000 = 68000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CoS = 12,000 + 68,000 − 15,000.",
                working: "12000 + 68000 - 15000 = 65000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$65,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both credit and cash purchases are included.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$65,000",
          },
        },
        {
          id: "cieiacct-u3-periodic-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between periodic and perpetual inventory systems.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State which system a large supermarket would likely use and why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory systems",
                statement:
                  "Periodic = count at end; perpetual = continuous records.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Periodic counts stock only at period end; cost of sales calculated then.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Perpetual updates records after every transaction, keeping stock value current.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Perpetual needs more admin but gives real-time control.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A supermarket uses perpetual (barcoding/POS) because it handles thousands of daily transactions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Real-time stock data prevents shortages and detects losses quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Manual periodic counting would be impractical at that scale.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Periodic = end-count; perpetual = continuous. (b) Supermarket uses perpetual for real-time control at scale.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Under a perpetual system, a sale of goods for \\$500 (cost \\$300) is recorded immediately. State the entries (accounts and amounts).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perpetual entries",
                statement:
                  "Each transaction updates inventory and the relevant accounts at once.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dr receivable/cash \\$500 (sale proceeds); Cr sales \\$500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dr cost of sales \\$300; Cr inventory \\$300 (goods leave stock at cost).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This keeps inventory and profit records current after every transaction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr receivable \\$500 / Cr sales \\$500; Dr cost of sales \\$300 / Cr inventory \\$300.",
          },
        },
        {
          id: "cieiacct-u3-periodic-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a small retailer might choose a periodic system.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Opening inventory \\$6,000; purchases \\$35,000; closing inventory \\$8,000; sales \\$55,000; expenses \\$10,000. Calculate gross profit and net profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trading",
                statement:
                  "CoS = opening + purchases − closing; GP = sales − CoS; NP = GP − expenses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lower admin burden — no need to record every stock movement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cheaper to operate; suitable for businesses with limited stock variety.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A single year-end count is sufficient for periodic accounts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "CoS = 6,000 + 35,000 − 8,000 = \\$33,000.",
                working: "6000 + 35000 - 8000 = 33000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "GP = 55,000 − 33,000 = \\$22,000.",
                working: "55000 - 33000 = 22000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "NP = 22,000 − 10,000 = \\$12,000.",
                working: "22000 - 10000 = 12000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State GP and NP.",
                working: "\\$22,000 and \\$12,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Simpler and cheaper for small businesses. (b) GP \\$22,000; NP \\$12,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-adjustments",
      title: "Accruals and prepayments",
      skill: "Adjust for expenses accrued and prepaid at period end.",
      lesson: {
        sections: [
          {
            heading: "Accruals",
            body: "An **accrual** is an expense incurred but not yet paid (e.g. electricity used in December, paid in January). Adjustments: Dr expense account, Cr accrued expense (liability) — or directly adjust the expense. In the trial balance the expense is understated and liabilities understated.",
          },
          {
            heading: "Prepayments",
            body: "A **prepayment** is an expense paid in advance (e.g. insurance paid for 12 months but only 3 months used). The unused portion is a current asset. Adjustments: Dr prepayment (asset), Cr expense — reducing the expense to the amount used.",
          },
          {
            heading: "Revenue side",
            body: "The same logic applies to income: **accrued income** (earned, not received) is Dr income receivable, Cr income; **income received in advance** (unearned) is Dr income, Cr unearned income (liability).",
          },
        ],
        keyFormulas: [
          {
            name: "Accrued expense",
            statement: "Dr expense, Cr accrued expense — expense increased",
          },
          {
            name: "Prepaid expense",
            statement: "Dr prepayment, Cr expense — expense decreased",
          },
        ],
        workedExample: {
          problem:
            "Rent paid \\$12,000 for the year but \\$3,000 relates to next year. Insurance paid \\$2,400 covering 12 months; 4 months relate to next year. Adjust the expenses.",
          solution:
            "Rent: expense should be 12,000 − 3,000 = \\$9,000; prepayment \\$3,000. Insurance: paid 2,400, used 8/12 = \\$1,600 expense; prepayment \\$800.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-adjustments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An accrual is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An expense incurred but not yet paid" },
              { id: "b", text: "An expense paid in advance" },
              { id: "c", text: "Income received but not earned" },
              { id: "d", text: "A prepaid asset" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accrual",
                statement: "Incurred but unpaid expense.",
              },
            ],
            steps: [
              {
                reasoning: "Accrual = expense incurred, payment pending.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Expense incurred but not yet paid.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A prepayment is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An expense paid in advance — the unused portion is a current asset",
              },
              { id: "b", text: "An expense owed but not paid" },
              { id: "c", text: "Income earned but not received" },
              { id: "d", text: "A liability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prepayment",
                statement: "Paid in advance; unused part is an asset.",
              },
            ],
            steps: [
              {
                reasoning: "Prepayment = paid ahead of use.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Expense paid in advance.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Electricity of \\$900 has been used but not paid at year end. State the adjusting entries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Accrued expense",
                statement: "Dr expense, Cr accrued expense (liability).",
              },
            ],
            steps: [
              {
                reasoning: "Dr electricity expense \\$900 (recognise the cost).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr accrued expenses \\$900 (liability until paid).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr electricity \\$900, Cr accrued expense \\$900.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Insurance paid in advance: \\$2,400 paid for 12 months on 1 January; year end is 31 December. \\$400 relates to next year. Calculate the insurance expense for the year and the prepayment.",
          response: {
            type: "numeric",
            parts: [
              { label: "Insurance expense", answer: 2000, unit: "$" },
              { label: "Prepayment", answer: 400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Prepayment",
                statement:
                  "Expense = amount relating to period used; remainder is prepayment asset.",
              },
            ],
            steps: [
              {
                reasoning: "Expense for year = 2,400 − 400 = \\$2,000.",
                working: "2400 - 400 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prepayment = \\$400 (current asset).",
                working: "2400 * 2/12 = 400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both figures.",
                working: "\\$2,000 expense; \\$400 prepayment",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Expense \\$2,000; prepayment \\$400",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rent of \\$1,500 per month is paid quarterly in advance. At year end, 2 months' rent has been paid but not yet used. Calculate the prepayment and the rent expense for those 2 months.",
          response: {
            type: "numeric",
            parts: [{ label: "Prepayment", answer: 3000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Prepayment calc",
                statement: "Unused months × monthly rent = prepayment.",
              },
            ],
            steps: [
              {
                reasoning: "Prepayment = 2 months × \\$1,500 = \\$3,000.",
                working: "2 * 1500 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The expense for the 2 unused months is removed from this year's expenses: credit rent \\$3,000, debit prepayment \\$3,000.",
                working: "3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State prepayment; expense adjustment reduces rent by \\$3,000.",
                working: "\\$3,000 prepayment",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prepayment \\$3,000; rent expense reduced by \\$3,000.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Commission earned but not yet received is \\$750. State the adjusting entry and its effect on profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Accrued income",
                statement:
                  "Dr income receivable (asset), Cr income — increases profit.",
              },
            ],
            steps: [
              {
                reasoning: "Dr accrued income/receivable \\$750 (asset).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr commission income \\$750 (recognise revenue).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Profit increases by \\$750 because the income is now recognised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr accrued income \\$750, Cr commission \\$750; profit up \\$750.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "At year end: rent paid \\$18,000 covering 12 months but only 10 months relate to this year; electricity accrued \\$600; insurance paid \\$3,000 covering 15 months with 3 months relating to next year. Calculate the adjusted rent expense and insurance expense.",
          response: {
            type: "numeric",
            parts: [
              { label: "Adjusted rent expense", answer: 15000, unit: "$" },
              { label: "Adjusted insurance expense", answer: 2400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Adjustments",
                statement:
                  "Expense = amount relating to period used; accrued added; prepaid deducted.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rent: 18,000 × 10/12 = \\$15,000 for this year (2 months prepaid \\$3,000).",
                working: "18000 * 10/12 = 15000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insurance: paid 3,000 for 15 months; used 12/15 = \\$2,400 for the year (3 months next year \\$600 prepaid).",
                working: "3000 * 12/15 = 2400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electricity accrual adds \\$600 expense (separate figure).",
                working: "600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State adjusted rent and insurance expenses.",
                working: "\\$15,000 and \\$2,400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rent expense \\$15,000; insurance expense \\$2,400 (electricity accrual \\$600 separate).",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it necessary to adjust for accruals and prepayments when preparing final accounts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Matching",
                statement: "Expenses must match the period they relate to.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The accruals concept requires expenses to be recognised when incurred, not when paid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without adjustment, profit would be misstated — expenses would be in the wrong period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adjustments ensure the profit and loss account shows the true cost of the period and the balance sheet shows correct assets/liabilities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To match expenses to the correct period and state profit and position accurately.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Distinguish between an accrued expense and a prepaid expense, giving the balance sheet treatment of each.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Rates of \\$2,400 were paid in advance covering 12 months; at year end 4 months relate to next year. State the adjusting entry.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accrual vs prepayment",
                statement: "Accrued = liability; prepaid = asset.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Accrued expense: incurred not paid — liability (creditor) on balance sheet; increases expense.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Prepaid expense: paid not yet used — current asset on balance sheet; decreases expense.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both adjust expenses to the correct period under the accruals concept.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unused = 4/12 × 2,400 = \\$800.",
                working: "2400 * 4/12 = 800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Journal: Dr prepayment \\$800, Cr rates expense \\$800.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This reduces this year's expense to \\$1,600 and creates a \\$800 asset.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Accrued = liability; prepaid = asset. (b) Dr prepayment \\$800, Cr rates \\$800.",
          },
        },
        {
          id: "cieiacct-u3-adjustments-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between accrued income and income received in advance.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "A business receives \\$6,000 rent in advance for 6 months starting next month. State the adjusting entry at the current year end.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income adjustments",
                statement:
                  "Accrued income = asset; income in advance = liability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Accrued income: earned this period but not yet received — Dr income receivable, Cr income; increases profit; asset.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Income received in advance (unearned): cash received but relates to future periods — Dr income, Cr unearned income (liability); decreases current profit; liability.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "All \\$6,000 relates to next year — none earned this year.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Journal: Dr rent income \\$6,000, Cr unearned income (liability) \\$6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This removes the income from this year's profit and shows a \\$6,000 liability.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the entry clearly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Accrued income = asset earned-not-received; unearned = liability received-not-earned. (b) Dr rent income \\$6,000, Cr unearned income \\$6,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-depreciation",
      title: "Depreciation",
      skill:
        "Calculate depreciation using straight line and reducing balance methods.",
      lesson: {
        sections: [
          {
            heading: "What depreciation is",
            body: "**Depreciation** spreads the cost of a non-current asset over its useful life. It is an expense in the P&L and reduces the asset's book value on the balance sheet. It is NOT a cash flow — it's an allocation of cost.",
          },
          {
            heading: "Straight line",
            body: "Depreciation = (cost − residual value) ÷ useful life. Equal charge each year. Simple and common for IGCSE.",
          },
          {
            heading: "Reducing balance",
            body: "Depreciation = (book value at start of year) × rate%. Higher charges early, lower later. The asset never falls below residual value.",
          },
        ],
        keyFormulas: [
          {
            name: "Straight line",
            statement:
              "Annual depreciation = (cost − residual value) ÷ useful life in years",
          },
          {
            name: "Reducing balance",
            statement:
              "Annual depreciation = opening book value × depreciation rate",
          },
          {
            name: "Book value",
            statement: "Book value = cost − accumulated depreciation",
          },
        ],
        workedExample: {
          problem:
            "Machine cost \\$10,000, residual \\$1,000, life 5 years. Straight-line depreciation?",
          solution: "(10,000 − 1,000) ÷ 5 = \\$1,800 per year.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-depreciation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Depreciation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The systematic allocation of a non-current asset's cost over its useful life",
              },
              { id: "b", text: "The loss in value when an asset is sold" },
              { id: "c", text: "A cash expense paid each year" },
              { id: "d", text: "The cost of repairing an asset" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depreciation",
                statement: "Allocation of asset cost over useful life.",
              },
            ],
            steps: [
              {
                reasoning: "Depreciation spreads cost, not a cash payment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Allocation of cost over useful life.",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A machine costs \\$8,000, residual value \\$1,000, useful life 5 years. Calculate annual straight-line depreciation.",
          response: {
            type: "numeric",
            parts: [{ label: "Annual depreciation", answer: 1400, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Straight line",
                statement: "(cost − residual) ÷ life.",
              },
            ],
            steps: [
              {
                reasoning: "(8,000 − 1,000) ÷ 5.",
                working: "7000 / 5 = 1400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$1,400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$1,400 per year",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Book value is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost minus accumulated depreciation" },
              { id: "b", text: "Cost plus depreciation" },
              { id: "c", text: "Selling price minus cost" },
              { id: "d", text: "Residual value only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Book value",
                statement: "Cost − accumulated depreciation.",
              },
            ],
            steps: [
              {
                reasoning: "Book value = cost − accumulated depreciation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cost minus accumulated depreciation.",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Equipment cost \\$12,000, residual \\$2,000, life 5 years (straight line). Calculate the book value at the end of year 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Book value", answer: 6000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SL depreciation",
                statement:
                  "Annual = (12,000 − 2,000) ÷ 5 = \\$2,000; book value = cost − 3 years' depreciation.",
              },
            ],
            steps: [
              {
                reasoning: "Annual depreciation = 10,000 ÷ 5 = \\$2,000.",
                working: "(12000-2000)/5 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accumulated depreciation after 3 years = \\$6,000.",
                working: "2000 * 3 = 6000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Book value = 12,000 − 6,000 = \\$6,000.",
                working: "12000 - 6000 = 6000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$6,000",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A vehicle cost \\$15,000 with residual value \\$3,000. Using reducing balance at 20%, calculate year 1 and year 2 depreciation charges.",
          response: {
            type: "numeric",
            parts: [
              { label: "Year 1 depreciation", answer: 3000, unit: "$" },
              { label: "Year 2 depreciation", answer: 2400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reducing balance",
                statement: "Depreciation = opening book value × rate.",
              },
            ],
            steps: [
              {
                reasoning: "Year 1 = 15,000 × 20% = \\$3,000.",
                working: "15000 * 0.2 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Year 2 opening BV = 15,000 − 3,000 = \\$12,000; depreciation = 12,000 × 20% = \\$2,400.",
                working: "12000 * 0.2 = 2400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both charges.",
                working: "\\$3,000 and \\$2,400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Year 1 \\$3,000; Year 2 \\$2,400",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is depreciation described as a 'non-cash expense'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-cash expense",
                statement:
                  "Depreciation is an allocation of past cost, not a current cash payment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The asset was paid for when purchased — depreciation just spreads that cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No cash leaves the business when depreciation is charged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It appears in the P&L as an expense but is added back in cash flow statements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It's an allocation of a past cost — no cash flows when charged.",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Plant cost \\$20,000, residual \\$4,000, life 8 years (straight line). Calculate: (a) annual depreciation, (b) book value after 5 years.",
          response: {
            type: "numeric",
            parts: [
              { label: "Annual depreciation", answer: 2000, unit: "$" },
              { label: "Book value after 5 years", answer: 10000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SL",
                statement:
                  "Annual = (cost − residual) ÷ life; BV = cost − accumulated dep.",
              },
            ],
            steps: [
              {
                reasoning: "Annual = (20,000 − 4,000) ÷ 8 = \\$2,000.",
                working: "16000 / 8 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accumulated after 5 years = \\$10,000.",
                working: "2000 * 5 = 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Book value = 20,000 − 10,000 = \\$10,000.",
                working: "20000 - 10000 = 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both answers.",
                working: "\\$2,000 and \\$10,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Annual \\$2,000; book value after 5 years \\$10,000",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare straight line and reducing balance depreciation — state one advantage of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation methods",
                statement: "SL = equal charges; RB = higher early charges.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Straight line advantage: simple, equal charges, easy to calculate and understand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reducing balance advantage: charges are higher early when the asset is most productive, better matching expense to benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "RB also reflects that assets often lose more value in early years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SL: simple/equal. RB: matches higher early usage and faster early value loss.",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A machine costs \\$18,000, residual \\$3,000, life 5 years. Calculate annual straight-line depreciation and book value after 4 years.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The machine is sold for \\$5,000 at the end of year 4. Calculate the profit or loss on disposal.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Disposal",
                statement: "Proceeds − book value = profit/loss on disposal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Annual dep = (18,000 − 3,000) ÷ 5 = \\$3,000.",
                working: "15000 / 5 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Accumulated after 4 years = \\$12,000.",
                working: "3000 * 4 = 12000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Book value = 18,000 − 12,000 = \\$6,000.",
                working: "18000 - 12000 = 6000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Proceeds \\$5,000 − book value \\$6,000 = loss of \\$1,000.",
                working: "5000 - 6000 = -1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Loss on disposal \\$1,000 is charged to the P&L.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State loss.",
                working: "\\$1,000 loss",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dep \\$3,000/yr; BV \\$6,000. (b) Loss on disposal \\$1,000.",
          },
        },
        {
          id: "cieiacct-u3-depreciation-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why depreciation is charged even though the asset may not have lost that exact amount in value.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Furnishings cost \\$9,000, residual \\$900, life 6 years (straight line). Calculate annual depreciation and the total depreciation over the asset's life.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation rationale",
                statement: "Matching + prudence — spread cost to match usage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Depreciation matches the cost of using the asset to the periods of use (matching concept).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It doesn't try to measure market value — it's an allocation, not a valuation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It ensures profit reflects the consumption of the asset's benefits.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Annual = (9,000 − 900) ÷ 6 = \\$1,350.",
                working: "8100 / 6 = 1350",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total over life = 6 × 1,350 = \\$8,100 (= cost − residual).",
                working: "1350 * 6 = 8100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State annual and total.",
                working: "\\$1,350 per year; \\$8,100 total",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Book value at end = residual \\$900.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Matches cost to usage; allocation not valuation. (b) \\$1,350/yr; \\$8,100 total; ends at \\$900 residual.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-debts",
      title: "Irrecoverable and doubtful debts",
      skill:
        "Account for irrecoverable debts and allowances for doubtful debts.",
      lesson: {
        sections: [
          {
            heading: "Irrecoverable debts",
            body: "An **irrecoverable debt** is a debt that will never be paid — written off completely. Journal: Dr irrecoverable debts (expense), Cr debtor's account. It reduces both the asset (receivables) and profit.",
          },
          {
            heading: "Allowance for doubtful debts",
            body: "An **allowance** is an estimate of debts unlikely to be paid — made BEFORE they become irrecoverable (prudence concept). It's not a specific debtor; it's a general provision. Journal: Dr allowance expense (P&L), Cr allowance for doubtful debts (contra-asset).",
          },
          {
            heading: "Adjusting the allowance",
            body: "Each year the allowance is adjusted to the required level: if required > existing, debit the increase to expense; if required < existing, credit the decrease (reduces expense). Trade receivables shown net of the allowance.",
          },
        ],
        keyFormulas: [
          {
            name: "Irrecoverable debt",
            statement:
              "Dr irrecoverable debts, Cr debtor — removes the specific debt",
          },
          {
            name: "Allowance",
            statement:
              "Required allowance = % of trade receivables; adjust for increase/decrease",
          },
          {
            name: "Net receivables",
            statement: "Trade receivables − allowance for doubtful debts",
          },
        ],
        workedExample: {
          problem:
            "Trade receivables \\$10,000; 5% allowance required = \\$500. Existing allowance \\$300. Adjustment?",
          solution:
            "Increase needed = 500 − 300 = \\$200. Dr allowance expense \\$200, Cr allowance \\$200.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-debts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An irrecoverable debt is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A debt that will never be recovered — written off completely",
              },
              { id: "b", text: "A debt expected to be paid late" },
              { id: "c", text: "A provision for doubtful debts" },
              { id: "d", text: "A debt owed to the business" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irrecoverable debt",
                statement: "Written off as uncollectable.",
              },
            ],
            steps: [
              {
                reasoning: "Irrecoverable = never to be paid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A debt that will never be recovered.",
          },
        },
        {
          id: "cieiacct-u3-debts-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An allowance for doubtful debts is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An estimate of debts unlikely to be paid, made before they become irrecoverable",
              },
              { id: "b", text: "A specific debtor's account" },
              { id: "c", text: "A cash reserve" },
              { id: "d", text: "A bad debt written off" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allowance",
                statement: "General provision for doubtful debts.",
              },
            ],
            steps: [
              {
                reasoning: "Allowance = estimate, not specific debt.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Estimate of doubtful debts.",
          },
        },
        {
          id: "cieiacct-u3-debts-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A debtor owes \\$2,000 which is now irrecoverable. State the journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Irrecoverable debt",
                statement: "Dr irrecoverable debts, Cr debtor.",
              },
            ],
            steps: [
              {
                reasoning: "Dr irrecoverable debts expense \\$2,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr debtor's account \\$2,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr irrecoverable debts \\$2,000, Cr debtor \\$2,000.",
          },
        },
        {
          id: "cieiacct-u3-debts-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trade receivables are \\$20,000. An allowance of 4% is required. Calculate the allowance and state how trade receivables appear on the balance sheet.",
          response: {
            type: "numeric",
            parts: [
              { label: "Allowance required", answer: 800, unit: "$" },
              { label: "Net receivables", answer: 19200, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allowance",
                statement:
                  "Allowance = % × receivables; net = receivables − allowance.",
              },
            ],
            steps: [
              {
                reasoning: "Allowance = 4% × 20,000 = \\$800.",
                working: "20000 * 0.04 = 800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net receivables = 20,000 − 800 = \\$19,200.",
                working: "20000 - 800 = 19200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State allowance and net figure.",
                working: "\\$800 allowance; \\$19,200 net",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Allowance \\$800; net trade receivables \\$19,200",
          },
        },
        {
          id: "cieiacct-u3-debts-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Existing allowance is \\$500. The required allowance at year end is \\$800. State the adjusting journal entry and its effect on profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allowance adjustment",
                statement: "Increase in allowance → Dr expense, Cr allowance.",
              },
            ],
            steps: [
              {
                reasoning: "Increase needed = 800 − 500 = \\$300.",
                working: "800 - 500 = 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr allowance expense \\$300, Cr allowance for doubtful debts \\$300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Profit decreases by \\$300 (extra expense recognised).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr allowance expense \\$300, Cr allowance \\$300; profit down \\$300.",
          },
        },
        {
          id: "cieiacct-u3-debts-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Existing allowance is \\$900. Required allowance is now \\$600 (receivables fell). State the adjusting entry and its effect on profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allowance decrease",
                statement:
                  "Decrease → Dr allowance, Cr expense (reduces expense).",
              },
            ],
            steps: [
              {
                reasoning: "Decrease = 900 − 600 = \\$300.",
                working: "900 - 600 = 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr allowance for doubtful debts \\$300, Cr allowance expense \\$300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit increases by \\$300 (expense reversed).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr allowance \\$300, Cr allowance expense \\$300; profit up \\$300.",
          },
        },
        {
          id: "cieiacct-u3-debts-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Trade receivables \\$30,000; allowance required 5%; irrecoverable debts written off during year \\$700 (from a debtor whose balance was included in receivables). Existing allowance \\$1,000. Calculate: (a) allowance adjustment needed, (b) net receivables at year end.",
          response: {
            type: "numeric",
            parts: [
              { label: "Allowance adjustment", answer: 465, unit: "$" },
              { label: "Net receivables", answer: 27835, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allowance with write-offs",
                statement:
                  "Write-offs reduce receivables; allowance calculated on remaining balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Receivables after write-off = 30,000 − 700 = \\$29,300.",
                working: "30000 - 700 = 29300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Required allowance = 5% × 29,300 = \\$1,465.",
                working: "29300 * 0.05 = 1465",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adjustment = 1,465 − 1,000 = \\$465 increase.",
                working: "1465 - 1000 = 465",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net receivables = 29,300 − 1,465 = \\$27,835.",
                working: "29300 - 1465 = 27835",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Adjustment +\\$465; net receivables \\$27,835",
            commonErrors: [
              "Calculating allowance on pre-write-off receivables.",
            ],
          },
        },
        {
          id: "cieiacct-u3-debts-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is an allowance for doubtful debts created BEFORE debts become irrecoverable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prudence",
                statement: "Provide for expected losses before they occur.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The prudence concept requires expecting losses rather than being surprised by them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It shows receivables at their realistic recoverable value, not face value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It matches the expected loss to the period the sales were made, giving a truer profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Prudence — provide for expected losses early so receivables and profit are realistic.",
          },
        },
        {
          id: "cieiacct-u3-debts-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Distinguish between an irrecoverable debt and an allowance for doubtful debts.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Receivables \\$15,000; write off \\$400 as irrecoverable; required allowance 10% of remaining receivables; existing allowance \\$800. Calculate the adjustment and net receivables.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt types",
                statement:
                  "Irrecoverable = specific, certain loss; allowance = general estimate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Irrecoverable debt: a specific debtor's debt confirmed uncollectable — written off entirely, charged to expense.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Allowance: a general estimate of ALL doubtful debts — a provision, adjusted annually, not tied to one debtor.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Irrecoverable reduces a specific account; allowance reduces total receivables on the balance sheet.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Receivables after write-off = 15,000 − 400 = \\$14,600.",
                working: "15000 - 400 = 14600",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Required allowance = 10% × 14,600 = \\$1,460; adjustment = 1,460 − 800 = \\$660 increase.",
                working: "14600 * 0.1 = 1460; 1460 - 800 = 660",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net receivables = 14,600 − 1,460 = \\$13,140.",
                working: "14600 - 1460 = 13140",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Irrecoverable = specific write-off; allowance = general provision. (b) Adjustment +\\$660; net receivables \\$13,140.",
          },
        },
        {
          id: "cieiacct-u3-debts-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the accounting treatment of an irrecoverable debt and its effect on the financial statements.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Receivables \\$25,000; irrecoverable debts \\$1,200 written off; required allowance 4% of remaining receivables; existing allowance \\$600. Calculate the allowance adjustment and net receivables.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debt accounting",
                statement:
                  "Write-offs reduce receivables; allowance provides for expected losses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Journal: Dr irrecoverable debts expense, Cr debtor's account — removes the debt.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Effect: trade receivables decrease; profit decreases by the written-off amount.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It appears as an expense in the P&L and reduces the asset on the balance sheet.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If an allowance exists, the write-off is charged against the allowance first where applicable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Receivables after write-off = 25,000 − 1,200 = \\$23,800.",
                working: "25000 - 1200 = 23800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Required allowance = 4% × 23,800 = \\$952; adjustment = 952 − 600 = \\$352 increase.",
                working: "23800 * 0.04 = 952; 952 - 600 = 352",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net receivables = 23,800 − 952 = \\$22,848.",
                working: "23800 - 952 = 22848",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State adjustment and net figure.",
                working: "+\\$352; \\$22,848",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dr expense/Cr debtor; reduces receivables and profit. (b) Adjustment +\\$352; net receivables \\$22,848.",
          },
        },
      ],
    },
  ],
};
