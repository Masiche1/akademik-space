import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eias-econ-u1-lesson-1-1",
  code: "1-1",
  title: "Demand, Supply and Market Equilibrium",
  goal: "I CAN explain demand, supply, equilibrium and price determination.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 1 — Introduction to Markets"],
  vocabulary: [
    {
      term: "Demand",
      definition: "Quantity consumers willing to buy at each price.",
    },
    {
      term: "Supply",
      definition: "Quantity producers willing to sell at each price.",
    },
    {
      term: "Equilibrium",
      definition: "Price where quantity demanded = quantity supplied.",
    },
    { term: "Shortage", definition: "Demand exceeds supply at current price." },
    { term: "Surplus", definition: "Supply exceeds demand at current price." },
    {
      term: "Market clearing",
      definition: "Equilibrium price where all willing buyers/sellers trade.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u1-demand",
      title: "Demand and Supply Analysis",
      skill: "Explain demand/supply shifts and equilibrium determination.",
      lesson: {
        sections: [
          {
            heading: "Demand and supply curves",
            body: "**Demand** slopes down: higher price → less quantity demanded (income & substitution effects). **Supply** slopes up: higher price → more quantity supplied (profit incentive).\n\n**Equilibrium**: intersection of curves — price where Qd = Qs. Market clears — no surplus or shortage. Price above equilibrium → surplus → price falls. Below → shortage → price rises.",
          },
          {
            heading: "Shifts vs movements",
            body: "**Movement along curve**: price change causes quantity change. **Shift of curve**: non-price factor changes demand/supply at all prices.\n\n**Demand shifters**: income, tastes, prices of substitutes/complements, expectations. **Supply shifters**: input costs, technology, taxes/subsidies, number of firms.",
          },
        ],
        keyFormulas: [
          {
            name: "Equilibrium",
            statement: "Quantity demanded = quantity supplied.",
          },
        ],
        workedExample: {
          problem: "Demand rises at all prices. Effect on equilibrium?",
          solution: "Price and quantity both rise.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-ds-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is market equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price where demand = supply" },
              { id: "b", text: "Highest price" },
              { id: "c", text: "Average price" },
              { id: "d", text: "Lowest price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilibrium",
                statement: "Qd = Qs.",
              },
            ],
            steps: [
              {
                reasoning: "Equilibrium = demand equals supply.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Qd = Qs",
            commonErrors: ["Highest confused."],
          },
        },
        {
          id: "eias-econ-u1-ds-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that shift the demand curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand shifters",
                statement: "Non-price factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Income changes — normal goods demand rises with income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tastes/preferences change — trends, advertising.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prices of substitutes or complements change.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Income, tastes, related prices.",
            commonErrors: ["Price itself.", "Only one."],
          },
        },
        {
          id: "eias-econ-u1-ds-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a price above equilibrium creates a surplus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surplus",
                statement: "Qs > Qd above eq.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High price → quantity supplied exceeds quantity demanded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Producers can't sell all output — unsold stock accumulates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Competition forces price down toward equilibrium.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Surplus persists until price falls to clear market.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Qs>Qd at high price → price falls.",
            commonErrors: ["Shortage.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u1-ds-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new study shows coffee improves health.",
          parts: [
            {
              label: "a",
              prompt: "Explain effect on coffee demand.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Show effect on equilibrium price and quantity.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand shift",
                statement: "Taste change shifts curve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Health benefit → tastes change → demand curve shifts right.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) More consumers willing to buy at each price.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) At original price, demand exceeds supply → shortage.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Price rises → quantity supplied increases, demanded decreases.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) New equilibrium: higher price AND higher quantity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) demand shifts right (b) P↑ Q↑",
            commonErrors: ["Movement along.", "P falls."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u1-price",
      title: "Price Mechanism and Resource Allocation",
      skill: "Explain how prices allocate resources and signal information.",
      lesson: {
        sections: [
          {
            heading: "Functions of price",
            body: "**Rationing**: prices limit demand — scarce goods go to those who value most. **Signalling**: prices convey information — high price signals scarcity, low signals surplus. **Incentive**: profit motive drives supply — high prices encourage production.\n\n**Efficiency**: prices guide resources to where valued most — allocative efficiency when price = marginal cost.",
          },
          {
            heading: "Price mechanism limits",
            body: "May fail with: monopoly power (price set above MC), externalities (social costs ignored), public goods (no market), asymmetric information. → Market failure → government intervention needed.\n\n**Example**: housing prices signal shortage → developers build more → eventually balances.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Oil prices rise. What signals does this send?",
          solution:
            "Scarcity signal → explore more, conserve, switch to alternatives.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-pm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the rationing function of price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax collection" },
              { id: "b", text: "Setting wages" },
              { id: "c", text: "Profit sharing" },
              {
                id: "d",
                text: "Allocating scarce goods to highest-value users",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rationing",
                statement: "Scarcity allocation.",
              },
            ],
            steps: [
              {
                reasoning: "Rationing = allocate scarce goods.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Scarcity allocation",
            commonErrors: ["Wages confused."],
          },
        },
        {
          id: "eias-econ-u1-pm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functions of the price mechanism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price functions",
                statement: "Ration, signal, incentivise.",
              },
            ],
            steps: [
              {
                reasoning: "Rationing — allocate scarce resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signalling — convey scarcity/surplus information.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Incentive — motivate production/consumption responses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Rationing, signalling, incentives.",
            commonErrors: ["Only one.", "Wrong function."],
          },
        },
        {
          id: "eias-econ-u1-pm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the price mechanism can fail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market failure",
                statement: "Price mechanism limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Externalities — prices ignore social costs/benefits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public goods — no market price possible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Market power — monopolies set prices above MC.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Asymmetric information — buyers/sellers have unequal knowledge.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Externalities, public goods, monopoly, info.",
            commonErrors: ["Always works.", "Only one."],
          },
        },
        {
          id: "eias-econ-u1-pm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A market for a good has positive externalities.",
          parts: [
            {
              label: "a",
              prompt: "Explain why free market under-provides this good.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest government intervention.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Externality",
                statement: "Social > private benefit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Price reflects private benefit only — ignores social benefit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Market produces less than socially optimal quantity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Subsidy — reduces cost, increases supply.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or direct provision — government supplies the good.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) under-provision (b) subsidy/provision",
            commonErrors: ["Over-provision.", "No intervention."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u1-elasticity",
      title: "Elasticity of Demand",
      skill: "Calculate and interpret price, income and cross elasticity.",
      lesson: {
        sections: [
          {
            heading: "Price elasticity of demand (PED)",
            body: "**PED** = %ΔQd ÷ %ΔP. **Elastic (>1)**: demand very sensitive — luxury goods, many substitutes. **Inelastic (<1)**: demand insensitive — necessities, addictions, few substitutes. **Unit elastic (=1)**: revenue constant.\n\n**PED = 0**: perfectly inelastic (insulin). **PED = ∞**: perfectly elastic (horizontal demand).",
          },
          {
            heading: "Income and cross elasticity",
            body: "**YED** = %ΔQd ÷ %ΔIncome. Positive = normal good; negative = inferior good. **XED** = %ΔQd of A ÷ %ΔPrice of B. Positive = substitutes; negative = complements.\n\n**Revenue and PED**: elastic demand → price cut raises revenue; inelastic → price rise raises revenue.",
          },
        ],
        keyFormulas: [
          {
            name: "PED",
            statement: "% change in quantity demanded ÷ % change in price.",
          },
          { name: "YED", statement: "% change in Qd ÷ % change in income." },
          {
            name: "XED",
            statement: "% change in Qd of A ÷ % change in price of B.",
          },
        ],
        workedExample: {
          problem: "Price rises 10%, quantity falls 20%. PED?",
          solution: "−20 ÷ 10 = −2 (elastic, use absolute value).",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-el-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PED measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensitivity of demand to price changes" },
              { id: "b", text: "Supply response" },
              { id: "c", text: "Price level" },
              { id: "d", text: "Total revenue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PED",
                statement: "Demand sensitivity.",
              },
            ],
            steps: [
              {
                reasoning: "PED = demand response to price.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Demand sensitivity",
            commonErrors: ["Price level confused."],
          },
        },
        {
          id: "eias-econ-u1-el-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price falls 10%, quantity rises 5%. PED? Is demand elastic or inelastic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "PED", statement: "%ΔQd ÷ %ΔP." },
            ],
            steps: [
              { reasoning: "PED = 5 ÷ 10 = 0.5.", marks: 1, markCode: "AO2" },
              {
                reasoning: "PED < 1 → inelastic demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quantity responds less than price — necessities.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "0.5 — inelastic.",
            commonErrors: ["Wrong sign handling.", "Elastic."],
          },
        },
        {
          id: "eias-econ-u1-el-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a firm with elastic demand might cut prices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elasticity and revenue",
                statement: "Price-revenue link.",
              },
            ],
            steps: [
              {
                reasoning: "Elastic demand → % quantity rise > % price fall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total revenue increases despite lower price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gains market share from competitors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May also reduce costs via scale economies.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Quantity gain outweighs price cut → revenue up.",
            commonErrors: ["Revenue falls.", "Inelastic."],
          },
        },
        {
          id: "eias-econ-u1-el-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Good A's price rises; demand for good B rises too.",
          parts: [
            {
              label: "a",
              prompt: "What does this suggest about A and B?",
              marks: 3,
            },
            { label: "b", prompt: "Explain using cross elasticity.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "XED",
                statement: "Substitutes positive.",
              },
            ],
            steps: [
              {
                reasoning: "(a) A and B are substitutes — consumers switch.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Higher A price makes B relatively cheaper.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) XED = %ΔQd of B ÷ %ΔP of A > 0 → substitutes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Complements would show negative XED — demand falls together.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Business implication: price A carefully — affects B sales.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) substitutes (b) XED positive",
            commonErrors: ["Complements.", "No XED."],
          },
        },
      ],
    },
  ],
};
