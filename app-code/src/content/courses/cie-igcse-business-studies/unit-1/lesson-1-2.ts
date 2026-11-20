import type { Lesson } from "../../../types.ts";

export const lesson252: Lesson = {
  id: "cieibs-u1-lesson-1-2",
  code: "1-2",
  title: "Types of Business Organisation",
  goal: "I CAN compare sole traders, partnerships, private and public limited companies.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: types of business"],
  
  vocabulary: [
    { term: "Sole trader", definition: "Business owned and run by one person." },
    { term: "Partnership", definition: "Business owned by 2+ people sharing profits." },
    { term: "Private limited company", definition: "Company with limited liability, shares not publicly traded." },
    { term: "Public limited company", definition: "Company selling shares to public on stock exchange." },
    { term: "Limited liability", definition: "Owners' personal assets protected from business debts." },
    { term: "Shareholder", definition: "Owner of company shares." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s2-org",
      title: "Business organisation types",
      skill: "Compare business structures at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Unincorporated businesses",
            body: "Sole trader: one owner, unlimited liability, easy to set up, keeps all profit. Partnership: 2+ owners, shared profits/liabilities, more capital, shared decisions.",
          },
          {
            heading: "Incorporated companies",
            body: "Private limited (Ltd): limited liability, shares not sold publicly, easier to raise capital than sole trader. Public limited (PLC): sells shares publicly, limited liability, can raise large capital, more regulations.",
          },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "1 owner, unlimited liability" },
          { name: "Partnership", statement: "2+ owners, shared liability" },
          { name: "Ltd/PLC", statement: "limited liability, shares" },
        ],
        workedExample: {
          problem: "Why might a growing business convert from sole trader to Ltd?",
          solution: "Limited liability protects personal assets; can issue shares to raise capital; more credibility with customers/suppliers.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sole trader?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business owned and run by one person"
                    },
                    {
                              "id": "b",
                              "text": "Company with shareholders"
                    },
                    {
                              "id": "c",
                              "text": "Partnership of two people"
                    },
                    {
                              "id": "d",
                              "text": "Government business"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sole trader",
                              "statement": "One-person business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sole trader = one owner, unlimited liability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One-person business"
},
        },
        {
          id: "cieibs-u1-org-q2",
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
                              "statement": "Protected personal assets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Owners' personal assets protected from business debts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Applies to companies (Ltd/PLC).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protected personal assets"
},
        },
        {
          id: "cieibs-u1-org-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare sole trader and private limited company.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Business comparison",
                              "statement": "Structure comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sole trader: unlimited liability, easy setup, keeps all profit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ltd: limited liability, can raise capital via shares.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ltd more complex to set up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sole trader vs Ltd comparison"
},
        },
        {
          id: "cieibs-u1-org-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sole trader, partnership, private limited company, public limited company, limited liability, shareholder. (b) What is a sole trader? (c) What is a partnership? (d) What is a private limited company? (e) What is a public limited company? (f) What is limited liability? (g) Why convert to Ltd? (h) Choose the best structure for a small bakery.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Business structures",
                              "statement": "Comparison and selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) One-person business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Shared ownership business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Limited liability, private shares.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Public shares on stock exchange.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Protected personal assets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Liability protection, capital raising.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid structure choice with reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business organisation types."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-org-notes",
      title: "Business structures — notes",
      summary: "Sole trader=1 owner; partnership=shared; Ltd/PLC=limited liability+shares. Choose by size/risk/capital needs.",
      sections: [
        { heading: "Key idea", body: "Liability protection vs simplicity — trade-off in business structure choice." },
        { heading: "PLC", body: "Public shares enable large capital raising but more regulation." },
      ],
    },
  ],
};
