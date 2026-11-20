import type { Lesson } from "../../../types.ts";

export const lesson372: Lesson = {
  id: "ciealbus-u1-lesson-1-2",
  code: "1-2",
  title: "Business Ownership and Legal Forms",
  goal: "I CAN compare different forms of business ownership and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: business activity"],
  
  vocabulary: [
    { term: "Sole trader", definition: "Business owned by one person." },
    { term: "Partnership", definition: "Business owned by two or more people." },
    { term: "Private limited company (Ltd)", definition: "Company with limited liability, shares not publicly traded." },
    { term: "Public limited company (PLC)", definition: "Company with shares traded on stock exchange." },
    { term: "Limited liability", definition: "Owners' personal assets protected from business debts." },
    { term: "Unlimited liability", definition: "Owners personally responsible for business debts." },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s2-own",
      title: "Business ownership",
      skill: "Compare legal forms of business.",
      lesson: {
        sections: [
          {
            heading: "Sole trader",
            body: "One owner, unlimited liability, easy setup, owner keeps all profit but bears all risk. Limited capital raising ability.",
          },
          {
            heading: "Partnership",
            body: "Two+ owners share profits/liabilities. Unlimited liability unless LLP. Shared expertise but potential for disputes.",
          },
          {
            heading: "Limited companies",
            body: "Ltd: private shares, limited liability, easier capital raising. PLC: public shares, limited liability, can raise large capital but must disclose information and answer to shareholders.",
          },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "one owner, unlimited liability" },
          { name: "Partnership", statement: "shared ownership" },
          { name: "Ltd/PLC", statement: "limited liability companies" },
        ],
        workedExample: {
          problem: "Why might a growing business convert from sole trader to Ltd?",
          solution: "Limited liability protects personal assets, easier to raise capital by selling shares, more credibility with customers/suppliers.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-own-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sole trader?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business owned by one person"
                    },
                    {
                              "id": "b",
                              "text": "Two or more owners"
                    },
                    {
                              "id": "c",
                              "text": "Public company"
                    },
                    {
                              "id": "d",
                              "text": "Non-profit"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sole trader",
                              "statement": "One owner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sole trader = one owner.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One owner"
},
        },
        {
          id: "ciealbus-u1-own-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is limited liability?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limited liability",
                              "statement": "Assets protected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Owners' personal assets protected from business debts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Applies to limited companies.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Assets protected"
},
        },
        {
          id: "ciealbus-u1-own-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare sole trader and partnership.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ownership comparison",
                              "statement": "Sole trader vs partnership."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sole trader: one owner, unlimited liability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Partnership: shared ownership, shared profits/liabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both easier setup than companies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ownership comparison"
},
        },
        {
          id: "ciealbus-u1-own-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sole trader, partnership, Ltd, PLC, limited liability, unlimited liability. (b) What is a sole trader? (c) What is limited liability? (d) Compare sole trader and partnership. (e) Compare Ltd and PLC. (f) Why convert to limited company? (g) What are advantages of PLC? (h) Evaluate best ownership form for different business sizes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ownership",
                              "statement": "Comparison, implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) One owner.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Assets protected.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Sole trader vs partnership.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Ltd private vs PLC public.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Liability protection, capital raising.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Large capital, credibility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Context-dependent evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business ownership forms."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-own-notes",
      title: "Ownership — notes",
      summary: "Sole trader→partnership→Ltd→PLC. Liability and capital raising drive choices.",
      sections: [
        { heading: "Key idea", body: "Ownership form affects liability, capital access, control, and credibility." },
        { heading: "Growth path", body: "Businesses often start as sole traders and convert to companies as they grow." },
      ],
    },
  ],
};
