import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ecn11-u2-lesson-5-1",
  code: "5-1",
  title: "Exchange Rates",
  goal: "I CAN explain exchange rates and their effects on trade and inflation.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Exchange rate",
      definition: "Value of one currency in terms of another.",
    },
    { term: "Appreciation", definition: "Currency value rises — stronger." },
    { term: "Depreciation", definition: "Currency value falls — weaker." },
    {
      term: "Floating exchange rate",
      definition: "Determined by market supply/demand.",
    },
    {
      term: "Fixed exchange rate",
      definition: "Set by government/central bank.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u2-exchange",
      title: "Exchange Rate Determination",
      skill: "Understand what determines exchange rates.",
      lesson: {
        sections: [
          {
            heading: "Floating rates",
            body: "**Floating**: determined by supply/demand for currency. **Demand factors**: exports (foreigners need currency to buy), investment inflows, speculation. **Supply factors**: imports (need foreign currency), capital outflows.\n\n**Stronger currency**: more demand or less supply — appreciation. **Weaker**: less demand or more supply — depreciation.",
          },
          {
            heading: "Fixed vs floating",
            body: "**Fixed**: government/central bank maintains rate — stability but requires reserves, may need intervention. **Floating**: automatic adjustment — absorbs shocks but volatile.\n\n**Managed float**: central bank intervenes occasionally — most common in practice.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "UK exports increase. Pound effect?",
          solution: "More demand for pounds → appreciation.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-exchange-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What determines a floating exchange rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supply and demand for the currency" },
              { id: "b", text: "Government decree" },
              { id: "c", text: "Random chance" },
              { id: "d", text: "Gold reserves only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Floating rate",
                statement: "Supply/demand determined.",
              },
            ],
            steps: [
              {
                reasoning: "Floating = supply/demand.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Supply and demand",
            commonErrors: ["Fixed confused."],
          },
        },
        {
          id: "ecn11-u2-exchange-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do higher UK interest rates affect the pound?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rates",
                statement: "Higher rates → capital inflows → appreciation.",
              },
            ],
            steps: [
              {
                reasoning: "Higher rates attract foreign investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Demand for pounds increases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pound appreciates — stronger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Higher rates → capital inflows → pound appreciates.",
            commonErrors: ["Depreciation.", "No mechanism."],
          },
        },
        {
          id: "ecn11-u2-exchange-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one disadvantage of a fixed exchange rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Fixed rates",
                statement: "Stability vs reserves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: stability — certainty for trade/investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: discipline on government policy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: requires reserves/intervention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantage: may be unsustainable — speculators attack.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Stable/certainty; requires reserves, may collapse.",
            commonErrors: ["Only one side.", "No drawback."],
          },
        },
        {
          id: "ecn11-u2-exchange-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "UK inflation is higher than EU inflation.",
          parts: [
            { label: "a", prompt: "Effect on UK exports to EU?", marks: 3 },
            { label: "b", prompt: "Effect on UK imports from EU?", marks: 3 },
            { label: "c", prompt: "Exchange rate likely movement?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation and exchange rates",
                statement: "Higher inflation → weaker currency.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Higher UK prices → exports less competitive.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) EU customers buy less UK goods.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) UK prices rise → imports relatively cheaper.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) UK buys more EU goods.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Pound likely depreciates — competitiveness adjusts.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) exports less competitive (b) imports cheaper (c) pound depreciates",
            commonErrors: ["Wrong direction.", "No adjustment."],
          },
        },
      ],
    },
    {
      id: "ecn11-u2-effects",
      title: "Effects of Exchange Rate Changes",
      skill:
        "Analyse how appreciation/depreciation affects trade and inflation.",
      lesson: {
        sections: [
          {
            heading: "Depreciation effects",
            body: "**Exports cheaper** → more competitive abroad → exports rise. **Imports expensive** → fewer imports → import substitution. **Inflation**: import prices rise → cost-push inflation. **Employment**: export sectors grow.\n\n**Appreciation**: opposite — exports expensive, imports cheap, disinflation, import competition.",
          },
          {
            heading: "Balance of payments",
            body: "**Current account**: trade in goods/services + income + transfers. **Capital account**: investment flows. **Overall BoP** = current + capital. **Deficit**: spending more abroad than earning — must finance by borrowing/selling assets.\n\n**Exchange rate adjustment**: depreciation helps reduce current account deficit — exports cheaper, imports dearer.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Pound depreciates 20%. Effect on UK exports?",
          solution: "UK goods cheaper abroad → exports increase.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-effects-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens to exports when currency depreciates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They become cheaper and more competitive" },
              { id: "b", text: "They become more expensive" },
              { id: "c", text: "No change" },
              { id: "d", text: "They stop completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation",
                statement: "Exports cheaper → more competitive.",
              },
            ],
            steps: [
              {
                reasoning: "Depreciation → cheaper exports.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Cheaper/more competitive",
            commonErrors: ["Appreciation confused."],
          },
        },
        {
          id: "ecn11-u2-effects-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does depreciation affect inflation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Import prices",
                statement: "Weaker currency → dearer imports → cost-push.",
              },
            ],
            steps: [
              {
                reasoning: "Imports cost more in domestic currency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Firms pass costs to consumers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost-push inflation rises.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Dearer imports → cost-push inflation.",
            commonErrors: ["Disinflation.", "No mechanism."],
          },
        },
        {
          id: "ecn11-u2-effects-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why depreciation can help reduce a trade deficit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BoP adjustment",
                statement: "Cheaper exports, dearer imports.",
              },
            ],
            steps: [
              {
                reasoning: "Exports cheaper → foreigners buy more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Imports dearer → domestic consumers buy less foreign.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both improve current account balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "J-curve: may worsen initially before improving.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Cheaper exports + dearer imports → current account improves.",
            commonErrors: ["Worse deficit.", "No mechanism."],
          },
        },
        {
          id: "ecn11-u2-effects-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Pound appreciates sharply against the euro.",
          parts: [
            { label: "a", prompt: "Effect on UK exporters?", marks: 3 },
            { label: "b", prompt: "Effect on UK consumers?", marks: 3 },
            { label: "c", prompt: "Effect on UK inflation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appreciation effects",
                statement: "Exports expensive, imports cheap.",
              },
            ],
            steps: [
              {
                reasoning: "(a) UK goods more expensive in eurozone.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Exporters lose competitiveness — sales fall.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) EU goods cheaper in pounds — more choice.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Import prices fall — cheaper goods.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Cheaper imports → disinflationary pressure.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) exports expensive/sales fall (b) imports cheap/more choice (c) disinflation",
            commonErrors: ["Wrong direction.", "No inflation link."],
          },
        },
      ],
    },
  ],
};
