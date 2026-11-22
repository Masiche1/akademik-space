import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "bus-u1-lesson-1-2",
  code: "1-2",
  title: "Types of business organisation",
  goal: "I CAN compare sole traders, partnerships, private limited companies and public limited companies in terms of ownership, liability, finance and control.",
  standards: ["Paper 1", "Paper 2", "Topic 1.2"],
  vocabulary: [
    {
      term: "Sole trader",
      definition:
        "A business owned and controlled by one person who keeps all profit and bears all risk.",
    },
    {
      term: "Unlimited liability",
      definition:
        "The owner is personally responsible for all business debts, even beyond the business's assets.",
    },
    {
      term: "Partnership",
      definition:
        "A business owned by two or more people sharing profit, decision-making and liability.",
    },
    {
      term: "Limited liability",
      definition:
        "Owners' loss is restricted to the value of their shares; personal assets are protected.",
    },
    {
      term: "Private limited company (Ltd)",
      definition:
        "A company whose shares are not offered to the general public; often family-owned or owner-managed.",
    },
    {
      term: "Public limited company (PLC)",
      definition:
        "A company allowed to sell shares to the public on a stock exchange.",
    },
    {
      term: "Shareholder",
      definition:
        "An owner of shares in a company who is entitled to dividends and votes.",
    },
  ],
  concepts: [
    {
      id: "bus-u1-unincorporated",
      title: "Sole traders and partnerships",
      skill:
        "Describe the features, advantages and disadvantages of sole traders and partnerships.",
      lesson: {
        sections: [
          {
            heading: "The sole trader",
            body: "A **sole trader** owns and controls the whole business: all profit is theirs and they make every decision. Setup is cheap and simple, there are few legal formalities, and they are close to customers. The fatal weakness is **unlimited liability** — personal possessions can be seized to pay business debts — plus limited finance and heavy workload.",
          },
          {
            heading: "The partnership",
            body: "A **partnership** pools capital, skills and workload between two or more partners. It is still easy to form and partners share decision-making. Like the sole trader it has **unlimited liability**, and partners are jointly liable for each other's business debts — a real risk. A formal **partnership agreement** should define profit shares and roles.",
          },
          {
            heading: "Comparing unincorporated forms",
            body: "Both forms suit small businesses wanting independence and close customer contact. Neither can raise large capital publicly, and both expose owners' personal wealth to business failure. Growth beyond a certain size usually pushes firms toward incorporation as a **limited company**.",
          },
        ],
        keyFormulas: [
          {
            name: "Liability test",
            statement:
              "Sole trader and partnership = unlimited liability; limited companies = limited liability",
          },
          {
            name: "Control",
            statement:
              "Sole trader: one owner decides. Partnership: partners share decisions.",
          },
        ],
        workedExample: {
          problem:
            "A dentist works alone from a small clinic. Which business form is most likely and what is its biggest risk?",
          solution:
            "A sole trader — simple, full control, keeps all profit. Biggest risk: unlimited liability, so if sued or in debt her personal savings and home could be lost.",
        },
      },
      questions: [
        {
          id: "bus-u1-org-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which business form gives its owner unlimited liability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Partnership" },
              { id: "b", text: "Private limited company" },
              { id: "c", text: "Public limited company" },
              { id: "d", text: "Cooperative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unlimited liability",
                statement:
                  "Owners remain personally responsible for all business debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only limited companies and cooperatives give limited liability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A partnership has unlimited liability — therefore choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Partnership",
            commonErrors: [
              "Thinking all partnerships are limited — a limited partnership is a different, rarer form.",
            ],
          },
        },
        {
          id: "bus-u1-org-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two advantages of operating as a sole trader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sole trader advantages",
                statement:
                  "Easy/cheap setup, full control, keep all profit, close to customers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simple and cheap to set up and run, with few legal formalities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The owner keeps all profit and makes all decisions independently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any valid advantage clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Easy setup, full control/independence, keep all profit, close customer contact.",
            commonErrors: ["Listing advantages of limited companies instead."],
          },
        },
        {
          id: "bus-u1-org-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a partnership might dissolve if one partner leaves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership continuity",
                statement:
                  "A partnership has no separate legal identity; it depends on the agreement of its partners.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A partnership is not a separate legal entity — it is an agreement between partners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the partnership agreement does not provide for replacement, the firm may have to be wound up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Loss of capital, skills or customer relationships can also make continuation uneconomic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: continuity depends on the agreement and remaining partners' choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No separate legal identity: without an agreement covering departure, the partnership can dissolve.",
            commonErrors: [
              "Assuming a partnership is a separate legal person like a company.",
            ],
          },
        },
        {
          id: "bus-u1-org-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Two friends plan to open a bakery. They expect rapid growth and will need to borrow heavily from a bank.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify one advantage and one disadvantage of a partnership for this business.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why limited liability might become important as the business grows.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the friends should incorporate as a limited company instead.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choice of business form",
                statement:
                  "Form should match capital needs, risk and growth plans.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Advantage: pooled capital and skills, shared workload.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Disadvantage: unlimited liability — personal assets at risk if debts are not repaid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both sides identified and relevant to the scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Heavy borrowing raises the risk of insolvency; limited liability protects personal wealth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Lenders may also prefer lending to a company.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: limited liability, easier to raise capital, continuity. Against: more formalities, accounts must be published.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement tied to the growth plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Pooled resources vs unlimited liability. (b) Protects personal assets as debts grow. (c) Incorporation sensible if growth and borrowing are large.",
            commonErrors: [
              "Ignoring the heavy borrowing detail that makes liability central.",
            ],
          },
        },
        {
          id: "bus-u1-org-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sole trader's most serious disadvantage is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inability to make a profit" },
              { id: "b", text: "Having to publish all accounts" },
              { id: "c", text: "Unlimited liability" },
              { id: "d", text: "Needing at least two owners" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sole trader weakness",
                statement:
                  "Unlimited liability exposes the owner's personal wealth to business failure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal assets can be seized to pay business debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Unlimited liability",
            commonErrors: [
              "Confusing sole traders with companies — sole traders do not publish accounts.",
            ],
          },
        },
        {
          id: "bus-u1-org-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A partnership must have at least how many owners?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no minimum" },
              { id: "b", text: "Seven" },
              { id: "c", text: "Two" },
              { id: "d", text: "One" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partnership",
                statement:
                  "A business owned by two or more partners sharing profit, decisions and liability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One owner would be a sole trader; a partnership needs at least two.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Two",
            commonErrors: [
              "Confusing the seven-member minimum for a cooperative with a partnership.",
            ],
          },
        },
        {
          id: "bus-u1-org-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Unlimited liability means that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Owners are personally responsible for all business debts",
              },
              { id: "b", text: "The business can borrow without limit" },
              { id: "c", text: "Liability ends when the business closes" },
              { id: "d", text: "Only company assets can be seized" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unlimited liability",
                statement:
                  "Owners remain personally liable for all debts, even beyond business assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal possessions and savings can be used to repay business debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Owners are personally responsible for all business debts",
            commonErrors: [
              "Thinking liability is limited to what the owner invested — that is limited liability.",
            ],
          },
        },
        {
          id: "bus-u1-org-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with a sole trader, a partnership mainly offers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limited liability" },
              { id: "b", text: "Pooled capital, skills and shared workload" },
              { id: "c", text: "The ability to sell shares publicly" },
              { id: "d", text: "Freedom from all business debts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership advantages",
                statement:
                  "Shared capital, skills, ideas and workload between partners.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partnerships pool resources but remain unincorporated — liability is still unlimited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Pooled capital, skills and shared workload",
            commonErrors: [
              "Thinking partnerships give limited liability — they do not.",
            ],
          },
        },
        {
          id: "bus-u1-org-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A risk that is specific to partnerships, but not to sole traders, is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keeping all profit for one person" },
              {
                id: "b",
                text: "Partners being jointly liable for each other's business debts",
              },
              { id: "c", text: "Having to publish full accounts" },
              { id: "d", text: "Difficulty raising any finance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Joint liability",
                statement:
                  "Each partner can be held responsible for the firm's debts, including those run up by others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A sole trader only risks their own decisions; partners share liability for each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Partners being jointly liable for each other's business debts",
            commonErrors: [
              "Missing that joint liability means one partner can pay for another's mistakes.",
            ],
          },
        },
        {
          id: "bus-u1-org-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "As a business grows, it often incorporates as a limited company mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid paying any tax" },
              { id: "b", text: "Keep unlimited liability" },
              { id: "c", text: "Eliminate all competitors" },
              {
                id: "d",
                text: "Gain limited liability and easier access to capital",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reasons to incorporate",
                statement:
                  "Limited liability, separate legal identity, greater capital-raising ability and continuity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger firms face bigger risks and capital needs that unincorporated forms cannot meet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Gain limited liability and easier access to capital",
            commonErrors: ["Thinking incorporation avoids tax — it does not."],
          },
        },
        {
          id: "bus-u1-org-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two disadvantages of operating as a sole trader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sole trader disadvantages",
                statement:
                  "Unlimited liability, limited capital, heavy workload, no continuity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unlimited liability — personal assets are at risk if the business fails.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limited finance — only personal savings or small loans are available.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heavy workload and no one to share decisions or cover absence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any two disadvantages clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unlimited liability and limited capital (also heavy workload, no continuity).",
            commonErrors: [
              "Listing advantages instead — the question asks for disadvantages.",
            ],
          },
        },
        {
          id: "bus-u1-org-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a formal partnership agreement is important for partners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership agreement",
                statement:
                  "A written agreement defining profit shares, roles, decision-making and exit arrangements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It records how profits and losses are shared, avoiding disputes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It defines each partner's role, responsibilities and how decisions are made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It covers what happens if a partner leaves, dies or wants to sell — protecting continuity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Without it, partners rely on default rules and risk conflict.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The agreement prevents disputes by fixing profit shares, roles and exit procedures in advance.",
            commonErrors: [
              "Saying the agreement creates limited liability — it does not.",
            ],
          },
        },
        {
          id: "bus-u1-org-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the risk of joint liability for partners in a partnership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Joint liability",
                statement:
                  "Each partner can be held personally responsible for all the firm's debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If the partnership cannot pay its debts, creditors can claim against any partner's personal assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One partner's reckless or dishonest actions can create debts the others must pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This makes choosing trustworthy partners essential — trust is the main protection.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Unlike shareholders, partners cannot limit their loss to their investment.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: joint liability is the partnership's biggest financial risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any partner can be made to pay all firm debts from personal wealth, even for others' mistakes.",
            commonErrors: [
              "Assuming partners only risk their own share of capital.",
            ],
          },
        },
        {
          id: "bus-u1-org-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Two friends plan to open a small café. They have complementary skills — one is a good baker, the other a good manager — and expect to borrow from a bank.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify one advantage and one disadvantage of operating as a partnership for the café.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the unlimited liability risk given their bank borrowing.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the friends should sign a partnership agreement before trading.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choice of business form",
                statement:
                  "The café's small scale and borrowing needs should guide the choice between partnership and incorporation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Advantage: pooled skills and capital — baker plus manager complements each other.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Disadvantage: unlimited liability — both risk personal assets if the café fails.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both sides clearly linked to the café scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "If the café cannot repay the bank loan, both friends can be pursued for the full debt personally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Savings, cars or homes could be seized — the loan makes liability a real danger.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Yes — an agreement fixes profit shares, roles and exit rules before conflict arises.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: strongly advisable for a two-owner venture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shared skills/capital vs unlimited liability. (b) Both can lose personal assets if the loan defaults. (c) Yes — agreement prevents disputes.",
            commonErrors: [
              "Ignoring the bank loan detail that makes liability central.",
            ],
          },
        },
        {
          id: "bus-u1-org-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two partners agree to share profits in the ratio 60:40. The partnership earns an annual profit of $90,000. Calculate the share received by the partner with 60%.",
          response: {
            type: "numeric",
            parts: [{ label: "Partner's share ($)", answer: 54000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit share",
                statement: "Share = profit x partner's ratio",
              },
            ],
            steps: [
              {
                reasoning: "Apply the 60% share to total profit.",
                working: "90000 x 0.60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the amount.",
                working: "= 54000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the share.",
                working: "54,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$54,000$",
            commonErrors: [
              "Splitting profit equally despite the 60:40 agreement.",
            ],
          },
        },
        {
          id: "bus-u1-org-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sole trader has revenue of $120,000 and total costs of $95,000. Calculate the profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Profit ($)", answer: 25000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = revenue - total costs",
              },
            ],
            steps: [
              {
                reasoning: "Subtract total costs from revenue.",
                working: "120000 - 95000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "= 25000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the profit.",
                working: "25,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25,000$",
            commonErrors: ["Adding revenue and costs instead of subtracting."],
          },
        },
      ],
    },
    {
      id: "bus-u1-limited",
      title: "Limited companies: LTD and PLC",
      skill:
        "Compare private and public limited companies by ownership, share issues, control and sources of finance.",
      lesson: {
        sections: [
          {
            heading: "The private limited company (Ltd)",
            body: "An **Ltd** is a separate legal entity: shareholders' liability is limited to their shares, and the company can own property and sign contracts in its own name. Shares are private — often held by family or a few investors — and there are restrictions on transferring them. Accounts are filed but need not be fully public. This suits owner-managed firms wanting limited liability and continuity.",
          },
          {
            heading: "The public limited company (PLC)",
            body: "A **PLC** can offer shares to the public, usually on a stock exchange, giving access to huge capital for expansion. It must have at least two shareholders and a company secretary, publish full accounts, and meet stricter regulation. Control spreads among many shareholders; professional managers run the business, creating a separation of ownership and control.",
          },
          {
            heading: "Comparing the forms",
            body: "Both give **limited liability** and **perpetual succession**. The key differences: capital-raising ability (PLC far greater), ownership concentration (Ltd concentrated; PLC dispersed), disclosure (PLC publishes more), and typical size (PLC large multinationals; Ltd small to medium firms).",
          },
        ],
        keyFormulas: [
          {
            name: "Separate legal entity",
            statement: "A limited company is legally distinct from its owners",
          },
          {
            name: "Limited liability",
            statement: "Shareholders lose at most the value of their shares",
          },
          {
            name: "PLC share issue",
            statement:
              "Shares may be sold to the general public on a stock exchange",
          },
        ],
        workedExample: {
          problem:
            "A family-owned firm wants limited liability but wishes to keep control within the family. Which form fits and why?",
          solution:
            "A private limited company (Ltd): it provides limited liability and a separate legal identity while shares stay private, so the family keeps control — unlike a PLC where public share sales would dilute ownership.",
        },
      },
      questions: [
        {
          id: "bus-u1-ltd-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A PLC differs from an Ltd mainly because a PLC can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sell shares to the general public" },
              { id: "b", text: "Make a profit" },
              { id: "c", text: "Have limited liability" },
              { id: "d", text: "Be a separate legal entity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC",
                statement:
                  "A public limited company may offer shares to the general public, e.g. on a stock exchange.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both Ltd and PLC have limited liability, legal identity and profit aim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only the PLC can sell shares publicly — therefore choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Sell shares to the general public",
            commonErrors: ["Thinking Ltds cannot have limited liability."],
          },
        },
        {
          id: "bus-u1-ltd-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three advantages of forming a limited company rather than operating as a sole trader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limited company advantages",
                statement:
                  "Limited liability, separate legal entity, easier capital raising, continuity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limited liability protects owners' personal assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Separate legal entity allows the company to contract and own property.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Easier to raise capital (shares/loans) and the business survives owner changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Limited liability, legal identity, capital raising, continuity.",
            commonErrors: ["Omitting limited liability — the key advantage."],
          },
        },
        {
          id: "bus-u1-ltd-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a public limited company may experience a separation of ownership and control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of ownership and control",
                statement:
                  " dispersed shareholders own the firm but professional managers run it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PLC shares are spread among thousands of small shareholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No single shareholder can control decisions; managers run day-to-day operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Managers may pursue their own goals (growth, status) rather than pure shareholder profit.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: owners and controllers are different groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dispersed shareholders own; salaried managers control — goals can diverge.",
            commonErrors: ["Claiming shareholders run the PLC directly."],
          },
        },
        {
          id: "bus-u1-ltd-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A successful private limited company wants to expand internationally but needs large-scale finance.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways a PLC can raise more capital than an Ltd.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe one disadvantage of converting to a PLC.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether the company should convert to a PLC.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital raising",
                statement:
                  "PLCs access public share markets, rights issues and institutional investors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Can sell shares to the general public on a stock exchange — a vast pool of capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Can issue further shares (rights issues) and attract institutional investors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both mechanisms clearly linked to greater capital.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Must publish full accounts, meet stricter regulation, and founders may lose control as shares disperse.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Valid disadvantage clearly stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: capital need is the binding constraint on expansion. Against: loss of control and disclosure costs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Judgement on balance of costs and benefits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Public share issues, rights issues/institutional investors. (b) Disclosure, regulation, loss of control. (c) Convert if capital need outweighs control loss.",
            commonErrors: [
              "Confusing share issue with borrowing — shares sell ownership.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Limited liability means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shares cannot be sold" },
              {
                id: "b",
                text: "Owners can lose at most the value of their shares",
              },
              { id: "c", text: "Owners must pay all debts personally" },
              { id: "d", text: "The business can never fail" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement:
                  "An owner's maximum loss is the value of their shares or investment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal assets are protected if the company cannot pay its debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Owners can lose at most the value of their shares",
            commonErrors: [
              "Confusing limited liability with immunity — owners still lose their investment.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Shares in a private limited company (Ltd) are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worthless after issue" },
              {
                id: "b",
                text: "Kept private and not offered to the general public",
              },
              { id: "c", text: "Sold to anyone on the stock exchange" },
              { id: "d", text: "Issued only to the government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Private limited company",
                statement:
                  "Shares are privately held, often by family or a few investors, with transfer restrictions.",
              },
            ],
            steps: [
              {
                reasoning: "Only a PLC can offer shares publicly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Kept private and not offered to the general public",
            commonErrors: [
              "Assuming all companies can list shares publicly — only PLCs can.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Compared with an Ltd, a PLC is legally required to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have unlimited liability" },
              { id: "b", text: "Be owned by one person" },
              { id: "c", text: "Keep all accounts secret" },
              {
                id: "d",
                text: "Publish full accounts and meet stricter regulation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC disclosure",
                statement:
                  "PLCs must publish accounts and comply with heavier regulation because they sell shares publicly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Public shareholders need transparency, so full disclosure is compulsory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Publish full accounts and meet stricter regulation",
            commonErrors: [
              "Thinking PLCs hide information — they disclose far more than Ltds.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A limited company being a separate legal entity means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Owners cannot be shareholders" },
              {
                id: "b",
                text: "The company and its owners are legally the same",
              },
              { id: "c", text: "The company cannot make contracts" },
              {
                id: "d",
                text: "The company can own property and sign contracts in its own name",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separate legal entity",
                statement:
                  "The company is legally distinct from its owners and can act in its own name.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The firm can own assets, sue and be sued independently of shareholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** The company can own property and sign contracts in its own name",
            commonErrors: [
              "Thinking the company is just an extension of the owner — it is legally distinct.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The separation of ownership and control in a PLC arises mainly because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Shares are dispersed among many small owners while managers run the business",
              },
              { id: "b", text: "Shareholders vote on every daily decision" },
              { id: "c", text: "The government runs the company" },
              { id: "d", text: "Managers own all the shares" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separation of ownership and control",
                statement:
                  "Dispersed shareholders own the firm; professional managers control it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thousands of small shareholders cannot direct operations; salaried managers do.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Shares are dispersed among many small owners while managers run the business",
            commonErrors: [
              "Assuming PLC shareholders run the company day-to-day.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Describe two disadvantages of converting a business into a public limited company.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC disadvantages",
                statement:
                  "Disclosure requirements, regulation, loss of control and takeover risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Must publish full accounts, exposing commercially sensitive information to rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heavier regulation and compliance costs (company secretary, audits).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Original owners may lose control as shares disperse among public investors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any two disadvantages clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Disclosure of accounts, heavier regulation, loss of founder control, takeover risk.",
            commonErrors: [
              "Listing advantages such as capital raising — question asks for disadvantages.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of an Ltd for a small family-owned business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ltd advantages for family firms",
                statement:
                  "Limited liability, private shareholding, retained control and continuity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limited liability protects family members' personal assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shares stay private, so the family keeps control — unlike a PLC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The company survives changes in ownership (perpetual succession).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any two advantages clearly explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Limited liability, retained family control, continuity, moderate disclosure.",
            commonErrors: [
              "Claiming an Ltd can sell shares publicly — only a PLC can.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why a family-owned business might prefer Ltd status rather than converting to a PLC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control vs capital",
                statement:
                  "Ltd keeps ownership concentrated; PLC disperses it in exchange for capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family members want to keep control and pass the business to the next generation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "PLC share sales would dilute family ownership and could invite takeover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An Ltd still gives limited liability and continuity without public disclosure burdens.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "If the firm does not need large-scale public capital, Ltd status is sufficient.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: Ltd suits control-focused firms; PLC suits capital-hungry ones.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ltd preserves family control and limited liability without the disclosure and dilution of a PLC.",
            commonErrors: [
              "Ignoring that an Ltd also provides limited liability — the key need may already be met.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Compare the ways an Ltd and a PLC can raise capital.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital sources",
                statement:
                  "Ltd relies on private investors and loans; PLC can tap public share markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An Ltd can issue shares only to private investors and must seek bank loans or retained profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A PLC can sell shares to the general public on a stock exchange — a far larger pool of capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The PLC can also make rights issues to existing shareholders and attract institutional investors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both can borrow, but the PLC's public profile improves its creditworthiness.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: PLC capital-raising capacity is far greater but comes with loss of control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ltd: private shares and loans. PLC: public share issues, rights issues and institutional investors.",
            commonErrors: ["Claiming an Ltd can float on a stock exchange."],
          },
        },
        {
          id: "bus-u1-ltd-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Three entrepreneurs are choosing between starting their new tech firm as an Ltd or a PLC.",
          parts: [
            {
              label: "a",
              prompt: "Explain two advantages of starting as an Ltd.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain two reasons a PLC might suit a firm needing very large-scale capital.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate which form the entrepreneurs should choose.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choice of company form",
                statement:
                  "Ltd preserves control and privacy; PLC maximises access to capital.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Founders keep control because shares are not sold publicly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Less disclosure and administration than a PLC — simpler to run.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A PLC can sell shares to the general public, raising very large sums.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It can issue further shares repeatedly and attract institutional investors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Public listing also raises the firm's profile and creditworthiness for borrowing.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Choose Ltd if capital needs are modest and control matters; PLC if expansion requires public capital.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement tied to the firm's funding needs and stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Control retained, less disclosure. (b) Public share issues and institutional capital. (c) Match form to capital needs and control priorities.",
            commonErrors: [
              "Recommending a PLC without considering the founders' loss of control.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company has 200,000 shares in issue and pays a dividend of $0.50 per share. Calculate the total dividend payment.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total dividends ($)", answer: 100000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividends",
                statement:
                  "Total dividends = shares in issue x dividend per share",
              },
            ],
            steps: [
              {
                reasoning: "Multiply shares by dividend per share.",
                working: "200000 x 0.50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the total.",
                working: "= 100000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the total dividend.",
                working: "100,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100,000$",
            commonErrors: [
              "Multiplying by the share price rather than the dividend per share.",
            ],
          },
        },
        {
          id: "bus-u1-ltd-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A PLC issues 500,000 new shares at a price of $3 each. Calculate the capital raised.",
          response: {
            type: "numeric",
            parts: [
              { label: "Capital raised ($)", answer: 1500000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Share issue proceeds",
                statement: "Capital raised = number of shares x issue price",
              },
            ],
            steps: [
              {
                reasoning: "Multiply shares issued by the price per share.",
                working: "500000 x 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the proceeds.",
                working: "= 1500000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the capital raised.",
                working: "1,500,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1,500,000$",
            commonErrors: [
              "Confusing share issue price with the company's total share capital.",
            ],
          },
        },
      ],
    },
  ],
};
