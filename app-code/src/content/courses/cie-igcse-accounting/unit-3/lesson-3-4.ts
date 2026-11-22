import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cieiacct-u3-lesson-3-4",
  code: "3-4",
  title: "Partnership accounts",
  goal: "I CAN prepare partnership appropriation accounts including interest on capital and drawings, salaries, and share of profit.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 7: Partnership accounts",
  ],
  vocabulary: [
    {
      term: "Partnership",
      definition:
        "A business owned by two or more people sharing profits according to an agreed ratio.",
    },
    {
      term: "Appropriation account",
      definition:
        "An account distributing net profit among partners: interest on capital, salaries, interest on drawings, then residual profit.",
    },
    {
      term: "Interest on capital",
      definition:
        "Interest paid to partners on their capital balances for the use of their investment.",
    },
    {
      term: "Interest on drawings",
      definition:
        "Interest charged to partners on amounts they withdraw — credited in appropriation, debited to the partner's current account.",
    },
    {
      term: "Partner's current account",
      definition:
        "The account tracking each partner's drawings, salaries, interest and profit share.",
    },
    {
      term: "Residual profit",
      definition:
        "Profit remaining after deducting interest on capital, salaries and interest on drawings — shared in the agreed ratio.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-part-basics",
      title: "Partnership basics and the appropriation account",
      skill: "Prepare a partnership appropriation account.",
      lesson: {
        sections: [
          {
            heading: "What a partnership is",
            body: "A **partnership** is owned by 2+ partners who share profits (and losses) per the partnership agreement. Each partner has a **capital account** (fixed investment) and a **current account** (drawings, salaries, interest, profit share).",
          },
          {
            heading: "Appropriation account",
            body: "The appropriation account distributes net profit in this order: (1) **interest on capital** to each partner, (2) **partner's salary/commission**, (3) **interest on drawings** (credited as partnership income), (4) **residual profit** shared in the agreed ratio. Each partner's current account is credited with interest on capital + salary + residual share, and debited with drawings + interest on drawings.",
          },
          {
            heading: "Key formulas",
            body: "Residual profit = net profit − interest on capital − salaries − interest on drawings. Each partner's profit share = interest on capital + salary + (residual profit × their ratio). Interest on drawings is debited separately to the partner's current account.",
          },
        ],
        keyFormulas: [
          {
            name: "Residual profit",
            statement:
              "Net profit − interest on capital − salaries − interest on drawings",
          },
          {
            name: "Partner's share",
            statement:
              "Interest on capital + salary + residual profit × ratio (interest on drawings debited separately)",
          },
        ],
        workedExample: {
          problem:
            "Net profit \\$20,000. Partners A & B share equally. Interest on capital: A \\$600, B \\$400. Salary A \\$3,000. Find each partner's share.",
          solution:
            "Residual = 20,000 − 600 − 400 − 3,000 = \\$16,000. Each residual = \\$8,000. A share = 600 + 3,000 + 8,000 = \\$11,600. B share = 400 + 8,000 = \\$8,400.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-part-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A partnership is a business owned by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two or more people who share profits according to an agreement",
              },
              { id: "b", text: "One person only" },
              { id: "c", text: "The government" },
              { id: "d", text: "Shareholders only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partnership",
                statement: "2+ owners sharing profits per agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partnership = multiple owners sharing per agreement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two or more people sharing profits.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The appropriation account is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate total sales" },
              {
                id: "b",
                text: "Distribute net profit among partners after interest, salaries and drawings",
              },
              { id: "c", text: "Record purchases" },
              { id: "d", text: "Value inventory" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appropriation account",
                statement: "Distributes profit to partners.",
              },
            ],
            steps: [
              {
                reasoning: "Appropriation distributes net profit to partners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Distribute net profit among partners.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Net profit \\$15,000; partners A and B share equally; no interest or salaries. Calculate each partner's share.",
          response: {
            type: "numeric",
            parts: [{ label: "Each partner's share", answer: 7500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement: "Share = residual profit × profit-sharing ratio.",
              },
            ],
            steps: [
              {
                reasoning: "No deductions — residual = 15,000; each gets half.",
                working: "15000 / 2 = 7500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$7,500 each",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$7,500 each",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Net profit \\$30,000. Interest on capital: A \\$800, B \\$600. No salaries or drawings interest. Residual profit shared 3:2 (A:B). Calculate each partner's total share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 17960, unit: "$" },
              { label: "B's share", answer: 12040, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − interest; share by ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Residual = 30,000 − 800 − 600 = \\$28,600.",
                working: "30000 - 1400 = 28600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A residual = 3/5 × 28,600 = \\$17,160; A share = 800 + 17,160 = \\$17,960.",
                working: "28600 * 3/5 = 17160; 800 + 17160 = 17960",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B residual = 2/5 × 28,600 = \\$11,440; B share = 600 + 11,440 = \\$12,040.",
                working: "28600 * 2/5 = 11440; 600 + 11440 = 12040",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: 17,960 + 12,040 = \\$30,000 ✓.",
                working: "17960 + 12040 = 30000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$17,960; B \\$12,040",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the order in which items are deducted in a partnership appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation order",
                statement:
                  "Interest on capital → salaries → interest on drawings → residual profit.",
              },
            ],
            steps: [
              {
                reasoning: "First: interest on capital to each partner.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second: partner salaries/commission.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third: interest on drawings; then residual profit shared in ratio.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interest on capital, salaries, interest on drawings, residual profit.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Each partner has a capital account and a current account. Explain the difference between them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capital vs current",
                statement:
                  "Capital = fixed investment; current = running balance of drawings, interest, profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capital account: records the partner's fixed investment in the business — relatively stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Current account: records drawings, salaries, interest on capital/drawings, and profit share — the running balance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Together they show the partner's total stake.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Capital = fixed investment; current = running account of drawings, interest and profit share.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Net profit \\$24,000 shared equally by A and B. Interest on capital: A \\$500, B \\$500. A receives salary \\$4,000. Calculate residual profit and each partner's share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 14000, unit: "$" },
              { label: "B's share", answer: 10000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − interest − salary; shared equally.",
              },
            ],
            steps: [
              {
                reasoning: "Residual = 24,000 − 500 − 500 − 4,000 = \\$19,000.",
                working: "24000 - 1000 - 4000 = 19000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each residual share = 19,000 ÷ 2 = \\$9,500.",
                working: "19000 / 2 = 9500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A share = 500 + 4,000 + 9,500 = \\$14,000.",
                working: "500 + 4000 + 9500 = 14000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B share = 500 + 9,500 = \\$10,000. Check: 14,000 + 10,000 = \\$24,000 ✓.",
                working: "14000 + 10000 = 24000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$14,000; B \\$10,000",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why interest on capital is paid before residual profit is shared.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$40,000; interest on capital A \\$1,000, B \\$800; residual shared 3:1. Calculate each partner's share.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation order",
                statement:
                  "Interest compensates capital before profit sharing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Interest on capital rewards partners for investing capital — a return ON capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It is deducted before residual profit so partners with more capital receive commensurate reward.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Only the remaining profit is shared in the agreed ratio.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Residual = 40,000 − 1,000 − 800 = \\$38,200.",
                working: "40000 - 1800 = 38200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A residual = 3/4 × 38,200 = \\$28,650; A share = 1,000 + 28,650 = \\$29,650.",
                working: "38200*3/4=28650; 1000+28650=29650",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B residual = 1/4 × 38,200 = \\$9,550; B share = 800 + 9,550 = \\$10,350.",
                working: "38200*1/4=9550; 800+9550=10350",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Interest rewards capital before profit sharing. (b) A \\$29,650; B \\$10,350.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a partnership and a limited company in terms of liability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liability",
                statement:
                  "Partnership = unlimited liability; company = limited liability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partners have unlimited liability — personally responsible for all business debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Company shareholders have limited liability — only their investment is at risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is a key reason businesses incorporate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Partners: unlimited personal liability. Company shareholders: limited to investment.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the purpose of a partnership appropriation account.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$50,000; interest on capital A \\$1,200, B \\$1,000; A salary \\$5,000; interest on drawings A \\$300, B \\$200; residual shared equally. Calculate each partner's profit share (interest on drawings is debited separately to current accounts).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement:
                  "Residual = NP − interest on capital − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It distributes net profit to partners in the agreed order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It ensures partners are rewarded for capital, work and profit share appropriately.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Interest on drawings is credited as partnership income and debited to partners — reducing their net entitlement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It produces each partner's entitlement for their current account.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Residual = 50,000 − 1,200 − 1,000 − 5,000 − 300 − 200 = \\$42,300.",
                working: "50000 - 2200 - 5000 - 500 = 42300",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each residual share = 42,300 ÷ 2 = \\$21,150.",
                working: "42300 / 2 = 21150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A profit share = 1,200 + 5,000 + 21,150 = \\$27,350 (IoD \\$300 debited separately).",
                working: "1200+5000+21150 = 27350",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B profit share = 1,000 + 21,150 = \\$22,150 (IoD \\$200 debited separately).",
                working: "1000+21150 = 22150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Distributes profit per agreement. (b) A \\$27,350; B \\$22,150 (before IoD debits).",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the appropriation account, profit is distributed in which order?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Interest on capital, salaries/commission, interest on drawings, then residual profit"
              },
              { id: "b", text: "Residual profit first, then interest on capital" },
              { id: "c", text: "Interest on drawings first, then everything else" },
              { id: "d", text: "Salaries first, then residual profit, then interest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation order",
                statement:
                  "Interest on capital → salaries/commission → interest on drawings → residual profit in agreed ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The partnership agreement fixes this order; residual profit is shared last.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interest on capital, salaries, interest on drawings, residual.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Net profit \\$10,000. Partners A and B share equally. Interest on capital: A \\$500, B \\$300. No salaries or drawings interest. Calculate each partner's profit share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 5100, unit: "$" },
              { label: "B's share", answer: 4900, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − interest on capital − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual = 10,000 − 500 − 300 = \\$9,200; each gets \\$4,600.",
                working: "9200 / 2 = 4600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A = 500 + 4,600 = \\$5,100; B = 300 + 4,600 = \\$4,900.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$5,100; B \\$4,900.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how residual profit is calculated in a partnership appropriation account and why it is shared separately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Residual profit",
                statement:
                  "Net profit minus all prior appropriations, shared in the agreed ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual profit = net profit − interest on capital − partner salaries/commission − interest on drawings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prior items are deducted first because the partnership agreement entitles partners to them before sharing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The residual is then divided in the profit-sharing ratio, which may differ from capital ratios.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual = NP − interest on capital − salaries − interest on drawings, then shared in the agreed ratio.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Interest on drawings is shown in the appropriation account as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither — it goes straight to the capital account" },
              {
                id: "b",
                text: "A credit — it is income to the partnership"
              },
              { id: "c", text: "A debit — it reduces residual profit" },
              { id: "d", text: "A debit — it is an expense of the partnership" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest on drawings",
                statement:
                  "It is credited in the appropriation account (partnership income) and debited to the partner's current account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on drawings increases the profit available for sharing — it is a credit in appropriation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A credit.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Net profit \\$30,000. Partners A and B share equally. Interest on capital: A \\$800, B \\$600. Salary A \\$4,000. Interest on drawings: A \\$300, B \\$200. Calculate each partner's profit share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 16850, unit: "$" },
              { label: "B's share", answer: 12650, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual = 30,000 − 800 − 600 − 4,000 − 300 − 200 = \\$24,100; each \\$12,050.",
                working: "30000 - 2400 - 4000 - 500 = 24100; 24100/2 = 12050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A share = 800 + 4,000 + 12,050 = \\$16,850.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B share = 600 + 12,050 = \\$12,650.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$16,850; B \\$12,650.",
          },
        },
        {
          id: "cieiacct-u3-part-basics-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$18,000; A and B share equally; interest on capital A \\$400, B \\$300. Calculate residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate each partner's total profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − interest on capital − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Residual = 18,000 − 400 − 300 = \\$17,300.",
                working: "18000 - 700 = 17300",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each residual share = \\$8,650; A total = 400 + 8,650 = \\$9,050; B total = 300 + 8,650 = \\$8,950.",
                working: "17300/2 = 8650; A = 9050; B = 8950",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Residual \\$17,300; A \\$9,050; B \\$8,950.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-part-interest",
      title: "Interest on capital and drawings",
      skill:
        "Calculate interest on capital and interest on drawings for partners.",
      lesson: {
        sections: [
          {
            heading: "Interest on capital",
            body: "Interest on capital is calculated on each partner's capital balance at the agreed rate. It is credited in the appropriation account and to the partner's current account — increasing their share.",
          },
          {
            heading: "Interest on drawings",
            body: "Interest on drawings is calculated on amounts partners withdraw. It is credited in the appropriation account (partnership income) and debited to the partner's current account — reducing their net entitlement.",
          },
          {
            heading: "Direction of entries",
            body: "Interest on capital: Dr appropriation, Cr partner's current account. Interest on drawings: Dr partner's current account, Cr appropriation. In the appropriation account both are credits; the difference is who bears them.",
          },
        ],
        keyFormulas: [
          {
            name: "Interest on capital",
            statement:
              "Capital balance × interest rate — increases partner's share",
          },
          {
            name: "Interest on drawings",
            statement:
              "Drawings × interest rate — decreases partner's net entitlement",
          },
        ],
        workedExample: {
          problem:
            "Partner A: capital \\$20,000, drawings \\$8,000. Interest on capital 6%, interest on drawings 10%. Calculate both.",
          solution:
            "Interest on capital = 20,000 × 6% = \\$1,200 (credit to A). Interest on drawings = 8,000 × 10% = \\$800 (debit to A).",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-part-interest-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interest on capital is calculated on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The current account balance" },
              { id: "b", text: "The partner's capital account balance" },
              { id: "c", text: "The total profit" },
              { id: "d", text: "The partner's drawings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interest on capital",
                statement: "Capital balance × rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on capital uses the capital account balance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Capital account balance.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interest on drawings is calculated on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The business's total assets" },
              { id: "b", text: "The partner's capital" },
              { id: "c", text: "The profit before tax" },
              {
                id: "d",
                text: "The amounts the partner has withdrawn during the year",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interest on drawings",
                statement: "Drawings × rate.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on drawings uses the drawings amount.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Amounts withdrawn (drawings).",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Partner A has capital \\$25,000 and drawings \\$10,000. Interest on capital is 5%, interest on drawings is 8%. Calculate interest on capital and interest on drawings.",
          response: {
            type: "numeric",
            parts: [
              { label: "Interest on capital", answer: 1250, unit: "$" },
              { label: "Interest on drawings", answer: 800, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest calcs",
                statement: "Capital × rate; drawings × rate.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on capital = 25,000 × 5% = \\$1,250.",
                working: "25000 * 0.05 = 1250",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest on drawings = 10,000 × 8% = \\$800.",
                working: "10000 * 0.08 = 800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interest on capital \\$1,250; interest on drawings \\$800",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Interest on capital is credited to the partner's current account. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest on capital",
                statement:
                  "It's a return to the partner — increases their entitlement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on capital rewards the partner for investing capital in the business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It increases the partner's share of profit, so it's credited to their current account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the appropriation account it is a credit — an allocation of profit to the partner.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It increases the partner's share — credited to current account.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Interest on drawings is debited to the partner's current account. Explain why and state its effect on the partner's share.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest on drawings",
                statement:
                  "Charge for withdrawing capital — reduces partner's net entitlement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drawings reduce the capital available to the business; interest compensates the partnership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It's debited to the partner's current account — reducing their balance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect: the partner's net current account balance is reduced by the interest on drawings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debited to current account; reduces the partner's net entitlement.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "Partner A: capital \\$30,000, drawings \\$12,000. Interest on capital 6%, interest on drawings 10%. Calculate both interest amounts and state which increases and which decreases A's share.",
          response: {
            type: "numeric",
            parts: [
              { label: "Interest on capital", answer: 1800, unit: "$" },
              { label: "Interest on drawings", answer: 1200, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest",
                statement:
                  "Capital × rate increases share; drawings × rate decreases net entitlement.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on capital = 30,000 × 6% = \\$1,800.",
                working: "30000 * 0.06 = 1800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest on drawings = 12,000 × 10% = \\$1,200.",
                working: "12000 * 0.10 = 1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interest on capital increases A's share by \\$1,800; interest on drawings is debited to A's current account, reducing it by \\$1,200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net effect on current account = +\\$600 before residual profit.",
                working: "1800 - 1200 = 600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interest on capital \\$1,800 (increases share); interest on drawings \\$1,200 (debit to current account).",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partner B has capital \\$15,000 and drawings \\$6,000. The partnership agreement specifies 5% interest on capital and 10% on drawings. Calculate B's interest on capital, interest on drawings, and the net effect on B's current account.",
          response: {
            type: "numeric",
            parts: [{ label: "Net interest effect", answer: 150, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net interest",
                statement: "Interest on capital − interest on drawings.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on capital = 15,000 × 5% = \\$750.",
                working: "15000 * 0.05 = 750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest on drawings = 6,000 × 10% = \\$600.",
                working: "6000 * 0.10 = 600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net credit to current account = 750 − 600 = \\$150.",
                working: "750 - 600 = 150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$150 net credit to B's current account",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "In the appropriation account, both interest on capital and interest on drawings appear on the credit side. Explain why, and state how each affects the partner's current account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation credits",
                statement:
                  "Both are allocations of profit within the appropriation account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on capital is a return TO the partner — credited in appropriation, credited to partner's current account (increases their share).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interest on drawings is partnership income — credited in appropriation, but debited to the partner's current account (reduces their net entitlement).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both are credits in the appropriation account because they represent distributions/allocations of the net profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The difference is the partner's current account treatment: IoC increases it, IoD decreases it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both credited in appropriation; IoC credits partner's account, IoD debits it.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between interest on capital and interest on drawings.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Partner A: capital \\$40,000, drawings \\$15,000. Interest on capital 5%, interest on drawings 10%. Calculate both amounts and the net effect on A's current account.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest types",
                statement:
                  "On capital rewards investment; on drawings charges withdrawals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Interest on capital: return paid TO the partner for investing capital — increases their share.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Interest on drawings: charge ON the partner for withdrawing funds — decreases their net entitlement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "One compensates for capital provided; the other penalises early withdrawal.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Interest on capital = 40,000 × 5% = \\$2,000.",
                working: "40000 * 0.05 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Interest on drawings = 15,000 × 10% = \\$1,500.",
                working: "15000 * 0.10 = 1500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Net effect = +\\$500 credit to current account (before residual profit).",
                working: "2000 - 1500 = 500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) On capital = reward for investment; on drawings = charge for withdrawals. (b) \\$2,000 and \\$1,500; net +\\$500.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a partnership agreement specifies rates for interest on capital and interest on drawings.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Partners A and B: capital A \\$50,000, B \\$30,000; drawings A \\$20,000, B \\$8,000. Interest on capital 6% both; interest on drawings 10% both. Calculate each partner's interest on capital and interest on drawings.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership agreement",
                statement: "Rates agreed for fair reward and fair charge.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Partners invest different amounts — interest ensures those who invest more are rewarded fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Partners draw different amounts — interest on drawings ensures withdrawers contribute to the cost of lost capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The agreement prevents disputes by pre-agreeing rates.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It encourages partners to leave capital in the business.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A: IoC = 50,000 × 6% = \\$3,000; IoD = 20,000 × 10% = \\$2,000.",
                working: "3000; 2000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B: IoC = 30,000 × 6% = \\$1,800; IoD = 8,000 × 10% = \\$800.",
                working: "1800; 800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "A net interest = +\\$1,000; B net = +\\$1,000.",
                working: "3000-2000=1000; 1800-800=1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State all four figures.",
                working: "A: \\$3,000/−\\$2,000; B: \\$1,800/−\\$800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Fair reward/charge per agreement. (b) A: \\$3,000 IoC, \\$2,000 IoD. B: \\$1,800 IoC, \\$800 IoD.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interest on capital is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capital balance × agreed interest rate" },
              { id: "b", text: "Drawings × agreed interest rate" },
              { id: "c", text: "Sales × agreed interest rate" },
              { id: "d", text: "Profit share × agreed interest rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest on capital",
                statement: "Capital balance × rate — credited to the partner.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on capital rewards the partner's investment, so it uses the capital balance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Capital balance × rate.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Partner A has capital of \\$15,000 and interest on capital is agreed at 5%. Calculate the interest on capital.",
          response: {
            type: "numeric",
            parts: [{ label: "Interest on capital", answer: 750, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest on capital",
                statement: "Capital × rate.",
              },
            ],
            steps: [
              {
                reasoning: "15,000 × 5%.",
                working: "15000 × 0.05",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest on capital = \\$750.",
                working: "15000 × 0.05 = 750",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$750",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Partner B drew \\$4,000 during the year and interest on drawings is 8%. Calculate the interest on drawings.",
          response: {
            type: "numeric",
            parts: [{ label: "Interest on drawings", answer: 320, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest on drawings",
                statement: "Drawings × rate — reduces the partner's net entitlement.",
              },
            ],
            steps: [
              {
                reasoning: "4,000 × 8%.",
                working: "4000 × 0.08",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest on drawings = \\$320.",
                working: "4000 × 0.08 = 320",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$320",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between interest on capital and interest on drawings, including their effect on a partner's profit share.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest entries",
                statement:
                  "IoC increases a partner's share; IoD decreases it — both appear as credits in the appropriation account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest on capital rewards investment — credited to the partner's current account, increasing their share.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interest on drawings penalises withdrawals — debited to the partner's current account, reducing their net entitlement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the appropriation account both are credits (IoD is partnership income); the difference is who ultimately bears them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IoC increases the share (credit to partner); IoD decreases it (debit to partner) — both credited in appropriation.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Partner A has capital \\$24,000 and drawings of \\$6,000. Interest on capital is 5% and interest on drawings is 10%. Calculate both interest figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Interest on capital", answer: 1200, unit: "$" },
              { label: "Interest on drawings", answer: 600, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest calculations",
                statement:
                  "IoC = capital × rate; IoD = drawings × rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IoC = 24,000 × 5% = \\$1,200.",
                working: "24000 × 0.05 = 1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "IoD = 6,000 × 10% = \\$600.",
                working: "6000 × 0.10 = 600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both figures stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "IoC \\$1,200; IoD \\$600.",
          },
        },
        {
          id: "cieiacct-u3-part-interest-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Partner A: capital \\$30,000, interest on capital 4%. Partner B: capital \\$20,000, interest on capital 4%. Calculate each partner's interest on capital.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A drew \\$5,000 and B drew \\$3,000; interest on drawings is 6% for both. Calculate each partner's interest on drawings.",
              marks: 2,
            },
          ],
          stem: "A partnership agreement specifies interest on capital and drawings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest calculations",
                statement:
                  "IoC = capital × rate; IoD = drawings × rate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A: 30,000 × 4% = \\$1,200; B: 20,000 × 4% = \\$800.",
                working: "30000 × 0.04 = 1200; 20000 × 0.04 = 800",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A: 5,000 × 6% = \\$300; B: 3,000 × 6% = \\$180.",
                working: "5000 × 0.06 = 300; 3000 × 0.06 = 180",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A \\$1,200; B \\$800. (b) A \\$300; B \\$180.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-part-salary",
      title: "Partner salaries and commission",
      skill:
        "Account for partner salaries and commission in the appropriation account.",
      lesson: {
        sections: [
          {
            heading: "Partner salaries",
            body: "A partner who works in the business may receive a **salary** — an agreed fixed amount for their work. It is NOT an expense in the P&L; it's an appropriation of profit, deducted in the appropriation account before residual profit is shared. Debited in appropriation, credited to the partner's current account.",
          },
          {
            heading: "Partner commission",
            body: "**Commission** is paid to a partner based on sales or profit — e.g. 2% of sales. Like salary, it's an appropriation item deducted before residual profit.",
          },
          {
            heading: "Key distinction",
            body: "Employee salaries are expenses (P&L). Partner salaries are profit allocations (appropriation account) — partners cannot be employees of their own partnership.",
          },
        ],
        keyFormulas: [
          {
            name: "Partner salary",
            statement:
              "Fixed amount agreed; deducted in appropriation before residual profit",
          },
          {
            name: "Partner commission",
            statement: "Percentage of sales/profit; deducted in appropriation",
          },
        ],
        workedExample: {
          problem:
            "Net profit \\$25,000. Partner A receives salary \\$6,000. Interest on capital A \\$500, B \\$500. Residual shared equally. Find shares.",
          solution:
            "Residual = 25,000 − 500 − 500 − 6,000 = \\$18,000. Each \\$9,000. A share = 500 + 6,000 + 9,000 = \\$15,500. B share = 500 + 9,000 = \\$9,500.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-part-salary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A partner's salary is treated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A drawing" },
              {
                id: "b",
                text: "An appropriation of profit — deducted in the appropriation account, not an expense",
              },
              { id: "c", text: "Interest on capital" },
              { id: "d", text: "An expense in the profit and loss account" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partner salary",
                statement: "Profit appropriation, not expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partner salary is an appropriation item, not a P&L expense.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Appropriation of profit.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is a partner's salary NOT treated as an expense like an employee's salary?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partner vs employee",
                statement:
                  "Partners share profits; salaries are profit allocations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partners own the business — a salary to them is a distribution of profit, not a cost of employing someone else.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If it were an expense it would reduce profit before shares were calculated — double-counting the reward for work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It's a profit appropriation, not a business expense.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Net profit \\$20,000. Partner A salary \\$5,000. No other appropriations. Residual shared equally by A and B. Calculate each partner's share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 12500, unit: "$" },
              { label: "B's share", answer: 7500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − salary; shared equally.",
              },
            ],
            steps: [
              {
                reasoning: "Residual = 20,000 − 5,000 = \\$15,000.",
                working: "20000 - 5000 = 15000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each residual = 15,000 ÷ 2 = \\$7,500.",
                working: "15000 / 2 = 7500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A share = 5,000 + 7,500 = \\$12,500; B share = \\$7,500.",
                working: "A 12500; B 7500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$12,500; B \\$7,500",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partner commission of 3% on sales is paid to partner A. Sales are \\$100,000. Calculate the commission and state where it's deducted.",
          response: {
            type: "numeric",
            parts: [{ label: "Commission", answer: 3000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Commission",
                statement: "Commission = % × sales; deducted in appropriation.",
              },
            ],
            steps: [
              {
                reasoning: "Commission = 3% × 100,000 = \\$3,000.",
                working: "100000 * 0.03 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It's deducted in the appropriation account before residual profit is shared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State amount and treatment.",
                working: "\\$3,000 in appropriation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$3,000 — deducted in the appropriation account.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the journal entries for a partner's salary of \\$4,000 (credited to the partner's current account).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salary entry",
                statement: "Dr appropriation, Cr partner's current account.",
              },
            ],
            steps: [
              {
                reasoning: "Dr appropriation account \\$4,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr partner's current account \\$4,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It's a credit in the accounts — cash may or may not be paid immediately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr appropriation \\$4,000, Cr partner's current account \\$4,000.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "Net profit \\$35,000. Partner A salary \\$8,000; partner B salary \\$5,000. Interest on capital: A \\$1,000, B \\$800. Residual shared 2:1 (A:B). Calculate each partner's total share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 22467, unit: "$" },
              { label: "B's share", answer: 12533, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement:
                  "Residual = NP − interest − salaries; shared by ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual = 35,000 − 1,000 − 800 − 8,000 − 5,000 = \\$20,200.",
                working: "35000 - 1800 - 13000 = 20200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A residual = 2/3 × 20,200 = \\$13,466.67; A share = 1,000 + 8,000 + 13,466.67 = \\$22,466.67.",
                working: "20200*2/3 = 13466.67; 1000+8000+13466.67 = 22466.67",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B residual = 1/3 × 20,200 = \\$6,733.33; B share = 800 + 5,000 + 6,733.33 = \\$12,533.33.",
                working: "20200*1/3 = 6733.33; 800+5000+6733.33 = 12533.33",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both shares (to nearest dollar).",
                working: "A \\$22,467; B \\$12,533",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A ≈ \\$22,467; B ≈ \\$12,533",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A partner's salary is agreed at \\$500 per month. Calculate the annual salary and state how it appears in the accounts.",
          response: {
            type: "numeric",
            parts: [{ label: "Annual salary", answer: 6000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Salary",
                statement: "Monthly × 12; appropriated not expensed.",
              },
            ],
            steps: [
              {
                reasoning: "Annual = 500 × 12 = \\$6,000.",
                working: "500 * 12 = 6000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debited in appropriation account, credited to partner's current account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State amount.",
                working: "\\$6,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$6,000 per year — appropriated, not expensed.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a partner's salary is NOT shown as an expense in the trading and profit and loss account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$28,000; partner A salary \\$7,000; residual shared equally. Calculate each partner's share.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salary treatment",
                statement: "Partner salary = profit appropriation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Partners are owners, not employees — paying themselves a salary is distributing profit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If expensed it would reduce profit before shares were calculated, understating each partner's reward for work.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It's deducted in the appropriation account AFTER net profit is calculated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Residual = 28,000 − 7,000 = \\$21,000; each residual \\$10,500.",
                working: "28000 - 7000 = 21000; /2 = 10500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A share = 7,000 + 10,500 = \\$17,500; B share = \\$10,500.",
                working: "17500; 10500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both shares.",
                working: "A \\$17,500; B \\$10,500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) It's a profit appropriation, not an expense. (b) A \\$17,500; B \\$10,500.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a partner's salary and a partner's drawings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salary vs drawings",
                statement:
                  "Salary = agreed payment for work; drawings = any withdrawal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Salary: a fixed agreed amount for the partner's work — part of profit appropriation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drawings: any amount the partner takes out — reduces their current account, not linked to work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Salary is calculated in the appropriation account; drawings are recorded in the current account directly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Salary = agreed payment for work; drawings = any withdrawal.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the treatment of partner salaries and commission in the appropriation account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$45,000; partner A salary \\$9,000 and commission 2% of sales (\\$200,000); partner B no salary; interest on capital A \\$1,500, B \\$1,000; residual shared equally. Calculate each partner's share.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − interest − salary − commission.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Partner salaries and commission are profit appropriations — deducted after net profit, before residual sharing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They reward partners for work done, separate from their capital investment return.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They appear as debits in the appropriation account, credits to partners' current accounts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Commission = 2% × 200,000 = \\$4,000.",
                working: "200000 * 0.02 = 4000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Residual = 45,000 − 1,500 − 1,000 − 9,000 − 4,000 = \\$29,500.",
                working: "45000 - 2500 - 13000 = 29500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each residual = 29,500 ÷ 2 = \\$14,750.",
                working: "29500 / 2 = 14750",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A share = 1,500 + 9,000 + 4,000 + 14,750 = \\$29,250; B share = 1,000 + 14,750 = \\$15,750.",
                working: "29250; 15750",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check: 29,250 + 15,750 = \\$45,000 ✓.",
                working: "45000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Appropriations deducted before residual. (b) A \\$29,250; B \\$15,750.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A partner's salary is treated in the accounts as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Part of drawings" },
              { id: "b", text: "A liability owed to an employee" },
              { id: "c", text: "An expense in the profit and loss account" },
              {
                id: "d",
                text: "An appropriation of profit, deducted in the appropriation account"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partner salary",
                statement:
                  "Partners cannot be employees — salary is a profit appropriation, not a P&L expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partner salaries are deducted in the appropriation account before residual profit is shared.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An appropriation of profit.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Partner B receives commission of 2% of sales. Sales for the year are \\$250,000. Calculate the commission.",
          response: {
            type: "numeric",
            parts: [{ label: "Commission", answer: 5000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Partner commission",
                statement: "Commission = agreed % × sales (or profit).",
              },
            ],
            steps: [
              {
                reasoning: "2% × 250,000.",
                working: "0.02 × 250000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Commission = \\$5,000.",
                working: "0.02 × 250000 = 5000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$5,000",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a partner's salary is NOT shown as an expense in the profit and loss account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partner salary",
                statement:
                  "A partner is an owner, not an employee — payments to owners are appropriations of profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A partner cannot be an employee of their own partnership, so the payment is not a business expense.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The salary is deducted in the appropriation account after net profit has been calculated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is credited to the partner's current account as part of their profit share.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Partner salary is a profit appropriation (owner reward), deducted in the appropriation account — not a P&L expense.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Partner commission is usually calculated as a percentage of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sales or profit, as agreed in the partnership agreement"
              },
              { id: "b", text: "Total assets" },
              { id: "c", text: "Always net profit" },
              { id: "d", text: "Always drawings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partner commission",
                statement:
                  "An agreed percentage of sales or profit — deducted in the appropriation account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The base (sales or profit) is set by the partnership agreement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sales or profit per the agreement.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Net profit \\$40,000. Partner A receives salary \\$8,000. Partner B receives commission of 5% of sales of \\$200,000 (= \\$10,000). Interest on capital: A \\$1,000, B \\$1,000. Residual shared equally. Calculate each partner's profit share.",
          response: {
            type: "numeric",
            parts: [
              { label: "A's share", answer: 19000, unit: "$" },
              { label: "B's share", answer: 21000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salary − commission.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual = 40,000 − 1,000 − 1,000 − 8,000 − 10,000 = \\$20,000; each \\$10,000.",
                working: "40000 - 20000 = 20000; 20000/2 = 10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A share = 1,000 + 8,000 + 10,000 = \\$19,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B share = 1,000 + 10,000 + 10,000 = \\$21,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$19,000; B \\$21,000.",
          },
        },
        {
          id: "cieiacct-u3-part-salary-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$22,000; partners A and B share equally. Salary A \\$3,000. Interest on capital A \\$600, B \\$400. Calculate residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate each partner's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 22,000 − 600 − 400 − 3,000 = \\$18,000.",
                working: "22000 - 4000 = 18000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each residual = \\$9,000; A = 600 + 3,000 + 9,000 = \\$12,600; B = 400 + 9,000 = \\$9,400.",
                working: "A = 12600; B = 9400",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Residual \\$18,000; A \\$12,600; B \\$9,400.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-part-goodwill",
      title: "Goodwill and changes in partnership",
      skill:
        "Account for goodwill on admission, retirement and changes in profit-sharing ratio.",
      lesson: {
        sections: [
          {
            heading: "Goodwill",
            body: "**Goodwill** is the value of a business's reputation, customer base and expected future profits — an intangible asset. When a new partner is admitted or a partner retires, goodwill may need to be valued and shared.",
          },
          {
            heading: "Admission of a partner",
            body: "A new partner typically pays a **premium** for goodwill. The premium is credited to the OLD partners' current accounts in their profit-sharing ratio. The new partner's capital account is debited with their investment.",
          },
          {
            heading: "Retirement",
            body: "A retiring partner is paid their capital + current balance PLUS their share of goodwill (if valued). Goodwill is removed from assets and the payment credited to the retiring partner's account.",
          },
        ],
        keyFormulas: [
          {
            name: "Goodwill premium",
            statement:
              "New partner's premium credited to old partners in old ratio",
          },
          {
            name: "Retirement payment",
            statement: "Capital + current balance + share of goodwill",
          },
        ],
        workedExample: {
          problem:
            "Partners A & B (equal) admit C who pays \\$30,000 capital plus \\$10,000 goodwill premium. How is the premium shared?",
          solution:
            "Premium \\$10,000 credited to A and B equally — \\$5,000 each.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-part-goodwill-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goodwill represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inventory" },
              {
                id: "b",
                text: "The value of a business's reputation and expected future profits — an intangible asset",
              },
              { id: "c", text: "Physical assets like buildings" },
              { id: "d", text: "Cash in the bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Goodwill",
                statement: "Intangible value of reputation and future profits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Goodwill = intangible value beyond physical assets.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Intangible value of reputation/future profits.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a new partner is admitted and pays a goodwill premium, who receives the premium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nobody — it's retained" },
              { id: "b", text: "The new partner" },
              {
                id: "c",
                text: "The existing (old) partners, in their existing profit-sharing ratio",
              },
              { id: "d", text: "The business as a whole" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill premium",
                statement:
                  "Old partners sell part of goodwill to the new partner.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The premium compensates old partners for sharing goodwill with the newcomer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Existing partners in their old ratio.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partners A and B share profits equally. New partner C is admitted and pays a goodwill premium of \\$12,000. State how the premium is credited.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Premium sharing",
                statement:
                  "Premium shared among old partners in their old profit ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A and B share equally, so each receives half the premium.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr bank/C's account \\$12,000; Cr A \\$6,000, Cr B \\$6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This recognises that A and B gave up half their goodwill share to C.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cr A \\$6,000, Cr B \\$6,000 — shared equally.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A retiring partner is owed \\$25,000 (capital + current balance) plus a share of goodwill valued at \\$10,000. State the total payment and the accounting treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retirement",
                statement:
                  "Retiring partner paid capital + current + goodwill share.",
              },
            ],
            steps: [
              {
                reasoning: "Total payment = 25,000 + 10,000 = \\$35,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The goodwill asset is written off and the payment credited to the retiring partner's account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Remaining partners effectively 'buy' the retiring partner's share of goodwill.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "\\$35,000 — goodwill written off, payment to retiring partner.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might goodwill NOT be valued when a partner retires?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill optional",
                statement:
                  "Valuation is costly and uncertain — may be ignored by agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Goodwill is difficult to value objectively — it depends on expected future profits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The partnership agreement may specify not to value it, to avoid disputes and cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If not valued, the retiring partner is paid only capital + current balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hard to value; agreement may exclude it — then only capital + current paid.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "Partners A, B, C share profits 2:2:1. New partner D is admitted paying \\$20,000 capital and \\$8,000 goodwill premium. How is the premium shared among A, B, C?",
          response: {
            type: "numeric",
            parts: [
              { label: "A's premium", answer: 3200, unit: "$" },
              { label: "B's premium", answer: 3200, unit: "$" },
              { label: "C's premium", answer: 1600, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Premium sharing",
                statement: "Premium × old partner's ratio share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total ratio parts = 5; A and B get 2/5 each, C gets 1/5.",
                working: "2+2+1 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A = 8,000 × 2/5 = \\$3,200; B = same \\$3,200; C = 8,000 × 1/5 = \\$1,600.",
                working: "3200; 3200; 1600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check total = 3,200 + 3,200 + 1,600 = \\$8,000 ✓",
                working: "8000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State all three shares.",
                working: "A \\$3,200; B \\$3,200; C \\$1,600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$3,200; B \\$3,200; C \\$1,600",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a partner's capital account and current account when a partner retires.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retirement accounts",
                statement: "Both balances are settled on retirement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capital account: the fixed investment — repaid to the retiring partner.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Current account: the running balance of drawings, salaries, interest and profit share — also settled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total entitlement = capital + current balance (+ goodwill if valued).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Capital = investment returned; current = accumulated balance — both paid out.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain what goodwill is and why it matters when partners change.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Partners A and B share equally. C is admitted paying \\$15,000 capital plus \\$9,000 goodwill premium. State the journal entries for the premium.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill",
                statement:
                  "Intangible value shared among partners — must be accounted for on changes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Goodwill = value of reputation, customer base and expected future profits.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "When partners change, existing partners effectively sell part of this value to the newcomer or buyer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Accounting for it ensures each partner is fairly compensated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Dr bank/C's account \\$9,000 (premium received).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cr A \\$4,500 and Cr B \\$4,500 (shared equally as old partners).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State entries clearly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Intangible value shared on partner changes. (b) Dr \\$9,000; Cr A \\$4,500, Cr B \\$4,500.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A partner retires and is paid \\$18,000 for capital + current balance. No goodwill is valued. State the effect on the remaining partners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retirement without goodwill",
                statement:
                  "Payment reduces partnership net assets; remaining partners' shares adjust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The \\$18,000 payment reduces cash/assets of the partnership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The retiring partner's capital and current accounts are closed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Remaining partners' accounts adjust for the new profit-sharing arrangement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assets reduced by \\$18,000; retiring partner's accounts closed; remaining partners adjust.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the accounting treatment when a new partner is admitted with a goodwill premium.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Partners X and Y share profits 3:1. Z is admitted paying \\$25,000 capital and \\$10,000 goodwill premium. Calculate each old partner's share of the premium.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Admission",
                statement:
                  "Premium credited to old partners in old ratio; new partner's capital debited.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "New partner pays capital (investment) plus premium (for goodwill share).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Premium is credited to old partners' current accounts in their existing profit ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "New partner's capital account is debited with their investment; goodwill asset may be recorded.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Profit-sharing ratio is then revised per the new agreement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "X gets 3/4 × 10,000 = \\$7,500; Y gets 1/4 × 10,000 = \\$2,500.",
                working: "7500; 2500",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both shares.",
                working: "X \\$7,500; Y \\$2,500",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 7,500 + 2,500 = 10,000 ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Premium to old partners in old ratio; capital to new partner. (b) X \\$7,500; Y \\$2,500.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goodwill in accounting represents:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The value of the business's reputation and expected future profits"
              },
              { id: "b", text: "The partners' drawings for the year" },
              { id: "c", text: "The value of non-current assets" },
              { id: "d", text: "The total cash in the bank" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Goodwill",
                statement:
                  "An intangible asset — reputation, customer base, expected future profits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Goodwill arises from the business's ability to earn above-average profits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reputation and expected future profits.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A new partner pays a goodwill premium of \\$12,000. The two existing partners share profits in the ratio 3:2. Calculate each old partner's share of the premium.",
          response: {
            type: "numeric",
            parts: [
              { label: "First partner", answer: 7200, unit: "$" },
              { label: "Second partner", answer: 4800, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Goodwill premium",
                statement:
                  "Premium is credited to old partners in their old profit-sharing ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "3/5 × 12,000 = \\$7,200; 2/5 × 12,000 = \\$4,800.",
                working: "12000 × 3/5 = 7200; 12000 × 2/5 = 4800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shares stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$7,200 and \\$4,800.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how goodwill is treated when a new partner is admitted to a partnership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Admission of partner",
                statement:
                  "The new partner pays a premium for goodwill, credited to the old partners.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The new partner typically pays a premium (in addition to capital) for the right to share in the business's goodwill.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The premium is credited to the old partners' current accounts in their old profit-sharing ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The new partner's capital account is debited with their total investment; goodwill itself may be recorded as an asset if valued.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The premium paid by the new partner is credited to the old partners in their old ratio; the new partner's capital is debited with their investment.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a partner retires, their final payment normally consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only their share of residual profit" },
              { id: "b", text: "Only their drawings for the final year" },
              { id: "c", text: "A fixed amount agreed in advance" },
              {
                id: "d",
                text: "Capital balance + current account balance + share of goodwill"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retirement",
                statement:
                  "Retiring partner is paid capital + current balance + goodwill share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The retiring partner is entitled to everything they are owed, including goodwill if valued.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Capital + current balance + goodwill share.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Goodwill is valued at \\$20,000. The existing partners share profits in the ratio 3:1. Calculate each partner's share of the goodwill on retirement of one partner.",
          response: {
            type: "numeric",
            parts: [
              { label: "Partner on 3/4 share", answer: 15000, unit: "$" },
              { label: "Partner on 1/4 share", answer: 5000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Goodwill share",
                statement: "Goodwill shared in the profit-sharing ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "3/4 × 20,000 = \\$15,000; 1/4 × 20,000 = \\$5,000.",
                working: "20000 × 3/4 = 15000; 20000 × 1/4 = 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shares stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = \\$20,000 — fully allocated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$15,000 and \\$5,000.",
          },
        },
        {
          id: "cieiacct-u3-part-goodwill-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Explain what goodwill is and when it needs to be valued in partnership accounting.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Partners X and Y (equal) admit Z who pays \\$8,000 as a goodwill premium. State how the premium is shared.",
              marks: 2,
            },
          ],
          stem: "A partnership changes its membership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill",
                statement:
                  "Intangible asset valued on admission, retirement or change of profit-sharing ratio.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Goodwill = value of reputation and expected future profits; it is valued when a partner is admitted, retires, or the profit-sharing ratio changes.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The \\$8,000 premium is credited to X and Y equally — \\$4,000 each — in their old ratio.",
                working: "8000 / 2 = 4000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Intangible asset valued on membership/ratio changes. (b) X \\$4,000; Y \\$4,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-part-exam",
      title: "Partnership exam practice",
      skill: "Apply partnership accounting to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Partnership questions provide: net profit, capital balances, drawings, interest rates, salaries and profit-sharing ratio. Calculate each appropriation item in order, then each partner's share. Check that shares sum to net profit.",
          },
          {
            heading: "Convention used",
            body: "Residual profit = net profit − interest on capital − salaries − interest on drawings. Partner's profit share = interest on capital + salary + residual share. Interest on drawings is debited separately to the partner's current account.",
          },
        ],
        keyFormulas: [
          {
            name: "Residual profit",
            statement:
              "Net profit − interest on capital − salaries − interest on drawings",
          },
          {
            name: "Partner share",
            statement: "Interest on capital + salary + residual × ratio",
          },
        ],
        workedExample: {
          problem:
            "NP \\$30,000; A & B equal; IoC A \\$600 B \\$400; salary A \\$2,000; IoD A \\$200 B \\$100. Shares?",
          solution:
            "Residual = 30,000 − 600 − 400 − 2,000 − 200 − 100 = \\$26,700; each \\$13,350. A share = 600 + 2,000 + 13,350 = \\$15,950 (IoD \\$200 debited separately). B share = 400 + 13,350 = \\$13,750 (IoD \\$100 debited).",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-part-exam-q1",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$36,000 shared equally by A and B. Interest on capital: A \\$700, B \\$500. A salary \\$3,000. Calculate residual profit and each partner's share.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − interest − salary.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Residual = 36,000 − 700 − 500 − 3,000 = \\$31,800.",
                working: "36000 - 1200 - 3000 = 31800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Each residual share = 31,800 ÷ 2 = \\$15,900.",
                working: "31800 / 2 = 15900",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "A share = 700 + 3,000 + 15,900 = \\$19,600.",
                working: "700 + 3000 + 15900 = 19600",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "B share = 500 + 15,900 = \\$16,400.",
                working: "500 + 15900 = 16400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Check: 19,600 + 16,400 = \\$36,000 ✓.",
                working: "19600 + 16400 = 36000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State final shares.",
                working: "A \\$19,600; B \\$16,400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$19,600; B \\$16,400",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q2",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$48,000. Partners A, B, C share 3:2:1. Interest on capital: A \\$900, B \\$600, C \\$300. No salaries. Calculate each partner's share.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Residual = NP − interest; shared by ratio.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Residual = 48,000 − 900 − 600 − 300 = \\$46,200.",
                working: "48000 - 1800 = 46200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A residual = 3/6 × 46,200 = \\$23,100; A share = 900 + 23,100 = \\$24,000.",
                working: "46200*0.5=23100; 900+23100=24000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "B residual = 2/6 × 46,200 = \\$15,400; B share = 600 + 15,400 = \\$16,000.",
                working: "46200/3=15400; 600+15400=16000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "C residual = 1/6 × 46,200 = \\$7,700; C share = 300 + 7,700 = \\$8,000.",
                working: "46200/6=7700; 300+7700=8000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Check: 24,000 + 16,000 + 8,000 = \\$48,000 ✓.",
                working: "48000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State all three shares.",
                working: "A \\$24,000; B \\$16,000; C \\$8,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A \\$24,000; B \\$16,000; C \\$8,000",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q3",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$25,000. A and B share equally. Interest on capital: A \\$400, B \\$600. Interest on drawings: A \\$150, B \\$250. Calculate residual profit, each partner's profit share, and the interest on drawings debited to each current account.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement:
                  "Residual = NP − IoC − IoD; share = IoC + residual share; IoD debited separately.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 25,000 − 400 − 600 − 150 − 250 = \\$23,600.",
                working: "25000 - 1000 - 400 = 23600",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Each residual share = 23,600 ÷ 2 = \\$11,800.",
                working: "23600 / 2 = 11800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A profit share = 400 + 11,800 = \\$12,200; IoD debit \\$150.",
                working: "400 + 11800 = 12200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "B profit share = 600 + 11,800 = \\$12,400; IoD debit \\$250.",
                working: "600 + 11800 = 12400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check: 12,200 + 12,400 = \\$24,600 = NP − IoD total (25,000 − 400).",
                working: "12200 + 12400 = 24600",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State residual, shares and IoD debits.",
                working:
                  "Residual \\$23,600; A \\$12,200; B \\$12,400; IoD A \\$150, B \\$250",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$23,600; A share \\$12,200 (IoD \\$150 Dr); B share \\$12,400 (IoD \\$250 Dr).",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q4",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between a partner's capital account and current account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Partner A: capital \\$30,000, drawings \\$10,000, salary \\$6,000. Partner B: capital \\$20,000, drawings \\$5,000. Net profit \\$40,000 shared equally. Interest on capital 5% on capital balances; no interest on drawings. Calculate each partner's share and closing current account balances (ignore opening current balances).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership accounts",
                statement: "Capital = investment; current = running balance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Capital account records the fixed investment — stable, shown as non-current liability to partners.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Current account records drawings, salaries, interest and profit share — the running balance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Together they show the partner's total stake in the business.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Interest on capital: A = 30,000 × 5% = \\$1,500; B = 20,000 × 5% = \\$1,000.",
                working: "1500; 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Residual = 40,000 − 1,500 − 1,000 − 6,000 = \\$31,500; each \\$15,750.",
                working: "40000 - 8500 - 6000 = 31500; /2 = 15750",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A share = 1,500 + 6,000 + 15,750 = \\$23,250; current account = 23,250 − 10,000 drawings = \\$13,250 Cr.",
                working: "23250 - 10000 = 13250",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B share = 1,000 + 15,750 = \\$16,750; current account = 16,750 − 5,000 = \\$11,750 Cr.",
                working: "16750 - 5000 = 11750",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Capital = investment; current = running balance. (b) A share \\$23,250, current \\$13,250 Cr; B share \\$16,750, current \\$11,750 Cr.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A partnership's net profit is \\$22,000. Interest on capital totals \\$1,200, salaries total \\$4,000, interest on drawings totals \\$300. Calculate the residual profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Residual profit", answer: 16500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual",
                statement: "NP − IoC − salaries − IoD.",
              },
            ],
            steps: [
              {
                reasoning: "Residual = 22,000 − 1,200 − 4,000 − 300.",
                working: "22000 - 1200 - 4000 - 300 = 16500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$16,500",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "All four appropriation items deducted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$16,500",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q6",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why interest on drawings is credited in the appropriation account but debited to the partner's current account.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$30,000; A & B share equally; IoC A \\$500, B \\$500; IoD A \\$200, B \\$100. Calculate residual profit and each partner's profit share.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IoD treatment",
                statement:
                  "Partnership income in appropriation; charge to partner in current account.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Interest on drawings is income to the partnership — the partner pays the business for using its capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It's credited in appropriation because it's part of profit distribution — it increases the amount available.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It's debited to the partner's current account because it's a charge ON that partner — reducing their net entitlement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "This dual treatment ensures the partner who draws more pays for the privilege while the appropriation account balances.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Residual = 30,000 − 500 − 500 − 200 − 100 = \\$28,700.",
                working: "30000 - 1000 - 300 = 28700",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Each residual = 28,700 ÷ 2 = \\$14,350.",
                working: "28700 / 2 = 14350",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A share = 500 + 14,350 = \\$14,850 (IoD \\$200 Dr separately); B share = 500 + 14,350 = \\$14,850 (IoD \\$100 Dr).",
                working: "14850; 14850",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State residual and shares.",
                working: "Residual \\$28,700; A \\$14,850; B \\$14,850",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Income to partnership, charge to partner. (b) Residual \\$28,700; A \\$14,850; B \\$14,850.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q7",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$24,000; partners A and B share equally. Interest on capital: A \\$600, B \\$400. Salary A \\$2,000. Interest on drawings: A \\$150, B \\$100. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate A's profit share.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate B's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 24,000 − 600 − 400 − 2,000 − 150 − 100 = \\$20,750.",
                working: "24000 - 3250 = 20750",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each residual = \\$10,375; A share = 600 + 2,000 + 10,375 = \\$12,975.",
                working: "20750/2 = 10375; 600+2000+10375 = 12975",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "B share = 400 + 10,375 = \\$10,775.",
                working: "400 + 10375 = 10775",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$20,750; A \\$12,975; B \\$10,775.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q8",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$36,000; partners A and B share profits 3:2. Interest on capital: A \\$900, B \\$600. Salary A \\$3,000. Interest on drawings: A \\$200, B \\$150. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate A's profit share.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate B's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings, shared in the agreed ratio.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 36,000 − 900 − 600 − 3,000 − 200 − 150 = \\$31,150.",
                working: "36000 - 4850 = 31150",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A residual = 3/5 × 31,150 = \\$18,690; A share = 900 + 3,000 + 18,690 = \\$22,590.",
                working: "31150 × 3/5 = 18690; 900+3000+18690 = 22590",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "B residual = 2/5 × 31,150 = \\$12,460; B share = 600 + 12,460 = \\$13,060.",
                working: "31150 × 2/5 = 12460; 600+12460 = 13060",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$31,150; A \\$22,590; B \\$13,060.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q9",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$50,000; partners A, B and C share equally. Interest on capital: A \\$500, B \\$400, C \\$300. Salary A \\$4,000. Interest on drawings \\$100 each. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate A's profit share.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate B's profit share.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate C's profit share.",
              marks: 2,
            },
          ],
          stem: "A three-partner firm prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 50,000 − 500 − 400 − 300 − 4,000 − 300 = \\$44,100.",
                working: "50000 - 5500 = 44100",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each residual = \\$14,700; A share = 500 + 4,000 + 14,700 = \\$19,200.",
                working: "44100/3 = 14700; 500+4000+14700 = 19200",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "B share = 400 + 14,700 = \\$15,100.",
                working: "400 + 14700 = 15100",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "C share = 300 + 14,700 = \\$15,000.",
                working: "300 + 14700 = 15000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$44,100; A \\$19,200; B \\$15,100; C \\$15,000.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$45,000; partners A and B share 2:1. Interest on capital: A \\$1,000, B \\$500. Salary A \\$5,000. Commission to B is 4% of sales of \\$300,000. Interest on drawings: A \\$250, B \\$150. Calculate the residual profit.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate A's profit share.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate B's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account with salary and commission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salary − commission − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Commission = 4% × 300,000 = \\$12,000. Residual = 45,000 − 1,000 − 500 − 5,000 − 12,000 − 250 − 150 = \\$26,100.",
                working: "45000 - 18800 - 400 = 26100",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A residual = 2/3 × 26,100 = \\$17,400; A share = 1,000 + 5,000 + 17,400 = \\$23,400.",
                working: "26100 × 2/3 = 17400; 1000+5000+17400 = 23400",
                marks: 3,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "B residual = 1/3 × 26,100 = \\$8,700; B share = 500 + 12,000 + 8,700 = \\$21,200.",
                working: "26100/3 = 8700; 500+12000+8700 = 21200",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$26,100; A \\$23,400; B \\$21,200.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Net profit \\$28,000; partners A and B share equally. Interest on capital: A \\$700, B \\$500. Salary A \\$3,000. Interest on drawings: A \\$100, B \\$100. Calculate the residual profit and A's profit share.",
          response: {
            type: "numeric",
            parts: [
              { label: "Residual profit", answer: 23600, unit: "$" },
              { label: "A's share", answer: 15500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Residual = 28,000 − 700 − 500 − 3,000 − 100 − 100 = \\$23,600.",
                working: "28000 - 4400 = 23600",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Each residual = \\$11,800; A share = 700 + 3,000 + 11,800 = \\$15,500.",
                working: "23600/2 = 11800; 700+3000+11800 = 15500",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Residual \\$23,600; A share \\$15,500.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q12",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$20,000; partners A, B and C share 2:2:1. Interest on capital: A \\$600, B \\$400, C \\$200. Salary A \\$2,000. Interest on drawings: A \\$150, B \\$100, C \\$50. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate A's and B's profit shares.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate C's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 20,000 − 600 − 400 − 200 − 2,000 − 150 − 100 − 50 = \\$16,500.",
                working: "20000 - 3500 = 16500",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A and B each get 2/5 × 16,500 = \\$6,600 residual. A share = 600 + 2,000 + 6,600 = \\$9,200; B share = 400 + 6,600 = \\$7,000.",
                working: "16500 × 2/5 = 6600; A = 9200; B = 7000",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "C residual = 1/5 × 16,500 = \\$3,300; C share = 200 + 3,300 = \\$3,500.",
                working: "16500/5 = 3300; 200+3300 = 3500",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$16,500; A \\$9,200; B \\$7,000; C \\$3,500.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q13",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$60,000; partners A and B share 3:1. Interest on capital: A \\$1,800, B \\$600. Salary A \\$6,000. Interest on drawings: A \\$400, B \\$200. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate A's profit share.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate B's profit share.",
              marks: 2,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 60,000 − 1,800 − 600 − 6,000 − 400 − 200 = \\$51,000.",
                working: "60000 - 9000 = 51000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A residual = 3/4 × 51,000 = \\$38,250; A share = 1,800 + 6,000 + 38,250 = \\$46,050.",
                working: "51000 × 3/4 = 38250; 1800+6000+38250 = 46050",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "B residual = 1/4 × 51,000 = \\$12,750; B share = 600 + 12,750 = \\$13,350.",
                working: "51000/4 = 12750; 600+12750 = 13350",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$51,000; A \\$46,050; B \\$13,350.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Net profit \\$32,000. Interest on capital: A \\$800, B \\$600. Salary A \\$4,000. Interest on drawings: A \\$200, B \\$100. Calculate the residual profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Residual profit", answer: 26300, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                reasoning: "Total deductions = 800 + 600 + 4,000 + 200 + 100 = \\$5,700.",
                working: "800+600+4000+200+100 = 5700",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Residual = 32,000 − 5,700.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Residual profit = \\$26,300.",
                working: "32000 - 5700 = 26300",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$26,300",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q15",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$15,000; partners A and B share equally. Interest on capital: A \\$400, B \\$300. Salary A \\$2,000. Interest on drawings: A \\$100, B \\$100. Calculate the residual profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate each partner's profit share.",
              marks: 4,
            },
          ],
          stem: "A partnership prepares its appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salaries − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Residual = 15,000 − 400 − 300 − 2,000 − 100 − 100 = \\$12,100.",
                working: "15000 - 2900 = 12100",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each residual = \\$6,050; A share = 400 + 2,000 + 6,050 = \\$8,450.",
                working: "12100/2 = 6050; 400+2000+6050 = 8450",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "B share = 300 + 6,050 = \\$6,350.",
                working: "300 + 6050 = 6350",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$12,100; A \\$8,450; B \\$6,350.",
          },
        },
        {
          id: "cieiacct-u3-part-exam-q16",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Net profit \\$40,000; partners A, B and C share 2:1:1. Interest on capital: A \\$1,000, B \\$600, C \\$400. Salary A \\$5,000. Commission to A is 3% of sales of \\$250,000. Interest on drawings: A \\$300, B \\$200, C \\$100. Calculate the residual profit.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate each partner's profit share.",
              marks: 5,
            },
          ],
          stem: "A partnership prepares its appropriation account with salary, commission and three partners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Residual profit",
                statement:
                  "Residual = NP − IoC − salary − commission − interest on drawings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Commission = 3% × 250,000 = \\$7,500. Residual = 40,000 − 1,000 − 600 − 400 − 5,000 − 7,500 − 300 − 200 − 100 = \\$24,900.",
                working: "40000 - 15100 = 24900",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A residual = 2/4 × 24,900 = \\$12,450; A share = 1,000 + 5,000 + 7,500 + 12,450 = \\$25,950.",
                working: "24900 × 2/4 = 12450; 1000+5000+7500+12450 = 25950",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "B residual = 1/4 × 24,900 = \\$6,225; B share = 600 + 6,225 = \\$6,825.",
                working: "24900/4 = 6225; 600+6225 = 6825",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "C residual = \\$6,225; C share = 400 + 6,225 = \\$6,625.",
                working: "400 + 6225 = 6625",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Residual \\$24,900; A \\$25,950; B \\$6,825; C \\$6,625.",
          },
        },
      ],
    },
  ],
};
