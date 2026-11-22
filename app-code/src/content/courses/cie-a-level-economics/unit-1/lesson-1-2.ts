import type { Lesson } from "../../../types.ts";

export const lesson412: Lesson = {
  id: "ciealecon-u1-lesson-1-2",
  code: "1-2",
  title: "Elasticity of Demand and Supply",
  goal: "I CAN calculate and interpret price, income and cross elasticity.",
  standards: ["Cambridge A Level Economics 9708", "Paper 1: elasticity"],
  
  vocabulary: [
    { term: "Price elasticity of demand (PED)", definition: "% change in quantity demanded / % change in price." },
    { term: "Income elasticity of demand (YED)", definition: "% change in quantity demanded / % change in income." },
    { term: "Cross elasticity of demand (XED)", definition: "% change in Qd of good A / % change in price of good B." },
    { term: "Price elasticity of supply (PES)", definition: "% change in quantity supplied / % change in price." },
    { term: "Elastic demand", definition: "PED > 1 — quantity changes more than price." },
    { term: "Inelastic demand", definition: "PED < 1 — quantity changes less than price." },
  ],
  concepts: [
    {
      id: "ciealecon-u1-s2-elast",
      title: "Elasticity",
      skill: "Calculate and interpret elasticity measures.",
      lesson: {
        sections: [
          {
            heading: "PED",
            body: "PED = (%ΔQd)/(%ΔP). Elastic (>1): luxury goods, many substitutes. Inelastic (<1): necessities, few substitutes, habit. Unit elastic (=1).",
          },
          {
            heading: "YED",
            body: "YED = (%ΔQd)/(%ΔY). Normal good (>0): demand rises with income. Inferior good (<0): demand falls with income. Necessity (0<YED<1), luxury (>1).",
          },
          {
            heading: "XED",
            body: "XED = (%ΔQd A)/(%ΔP B). Substitute (>0): price of B up → demand for A up. Complement (<0): price of B up → demand for A down.",
          },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQd/%ΔP" },
          { name: "YED", statement: "%ΔQd/%ΔY" },
          { name: "XED", statement: "%ΔQdA/%ΔPB" },
        ],
        workedExample: {
          problem: "Price rises 10%, quantity demanded falls 20%. Calculate PED.",
          solution: "PED = 20/10 = 2. Elastic demand — quantity responds strongly to price.",
        },
      },
      questions: [
        {
          id: "ciealecon-u1-el-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PED = 2 mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inelastic demand"
                    },
                    {
                              "id": "b",
                              "text": "Elastic demand — quantity changes twice as much as price"
                    },
                    {
                              "id": "c",
                              "text": "Unit elastic"
                    },
                    {
                              "id": "d",
                              "text": "No demand response"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PED",
                              "statement": "Elasticity measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PED=2 means elastic — Q responds 2× price change.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Elastic demand"
},
        },
        {
          id: "ciealecon-u1-el-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between normal and inferior goods?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Normal vs inferior",
                              "statement": "YED sign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal: YED > 0, demand rises with income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inferior: YED < 0, demand falls with income.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Normal vs inferior"
},
        },
        {
          id: "ciealecon-u1-el-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What do positive and negative XED values indicate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "XED",
                              "statement": "Cross elasticity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive XED: substitutes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative XED: complements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Determines relationship between goods.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Substitutes vs complements"
},
        },
        {
          id: "ciealecon-u1-el-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define PED, YED, XED, PES, elastic, inelastic. (b) What is PED formula? (c) What is YED? (d) What is XED? (e) What does PED>1 mean? (f) What does YED<0 mean? (g) What does positive XED indicate? (h) Evaluate how elasticity affects pricing decisions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Elasticity",
                              "statement": "Calculation, interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) %ΔQd/%ΔP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) %ΔQd/%ΔY.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) %ΔQdA/%ΔPB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Elastic demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Inferior good.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Substitutes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Elasticity informs pricing strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Elasticity analysis."
},
        },
        {
          id: "ciealecon-u1-el-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A PED of 0.5 tells us that demand for the good is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "perfectly inelastic — quantity does not change" },
            { "id": "b", "text": "price elastic — quantity changes more than proportionately to price" },
            { "id": "c", "text": "unit elastic — total revenue is constant" },
            { "id": "d", "text": "price inelastic — quantity changes less than proportionately to price" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "PED", "statement": "%ΔQd/%ΔP; <1 inelastic." } ],
          "steps": [ { "reasoning": "PED below 1 means quantity demanded responds proportionately less than price.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** price inelastic"
},
        },
        {
          id: "ciealecon-u1-el-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A good with an income elasticity of demand (YED) of -0.4 is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "a normal good" },
            { "id": "b", "text": "a luxury good" },
            { "id": "c", "text": "an inferior good" },
            { "id": "d", "text": "a necessity" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "YED", "statement": "Negative YED = inferior good." } ],
          "steps": [ { "reasoning": "A negative YED means demand falls as income rises — the definition of an inferior good.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** an inferior good"
},
        },
        {
          id: "ciealecon-u1-el-q7", difficulty: "core", totalMarks: 1,
          stem: "A positive cross elasticity of demand (XED) between two goods indicates that they are",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "unrelated goods" },
            { "id": "b", "text": "the same good" },
            { "id": "c", "text": "substitutes" },
            { "id": "d", "text": "complements" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "XED", "statement": "Positive XED = substitutes." } ],
          "steps": [ { "reasoning": "When the price of good B rises and demand for good A rises, XED is positive — the goods are substitutes.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** substitutes"
},
        },
        {
          id: "ciealecon-u1-el-q8", difficulty: "core", totalMarks: 1,
          stem: "A price elasticity of supply (PES) greater than 1 means that",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "quantity supplied responds strongly to a change in price" },
            { "id": "b", "text": "demand is price elastic" },
            { "id": "c", "text": "supply is perfectly inelastic" },
            { "id": "d", "text": "quantity supplied responds weakly to a change in price" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "PES", "statement": "%ΔQs/%ΔP; >1 elastic supply." } ],
          "steps": [ { "reasoning": "PES above 1 means the percentage change in quantity supplied exceeds the percentage change in price — elastic supply.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** quantity supplied responds strongly to a change in price"
},
        },
        {
          id: "ciealecon-u1-el-q9", difficulty: "core", totalMarks: 1,
          stem: "Which good is likely to have the most price-elastic demand?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Table salt" },
            { "id": "b", "text": "Insulin for a diabetic patient" },
            { "id": "c", "text": "A branded smartphone with many close rivals" },
            { "id": "d", "text": "A staple bread loaf in the short run" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "PED determinants", "statement": "Substitutes, luxury status, time." } ],
          "steps": [ { "reasoning": "Many close substitutes and discretionary (luxury) status make demand highly price elastic; necessities like insulin, salt and staple bread are inelastic.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(a)** A branded smartphone with many close rivals"
},
        },
        {
          id: "ciealecon-u1-el-q10", difficulty: "challenge", totalMarks: 1,
          stem: "If demand for a good is price inelastic, a per-unit tax on the good will",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "be borne mainly by consumers, who pay a higher price" },
            { "id": "b", "text": "generate no change in the market price" },
            { "id": "c", "text": "be borne mainly by producers through a much lower net price" },
            { "id": "d", "text": "eliminate deadweight loss" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Tax incidence", "statement": "Burden falls on the less elastic side." } ],
          "steps": [ { "reasoning": "With inelastic demand, consumers cannot easily switch away, so they absorb most of the tax through a higher price; quantity falls little and a deadweight loss still arises.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(a)** be borne mainly by consumers"
},
        },
        {
          id: "ciealecon-u1-el-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The price of a good falls by 10% and quantity demanded rises by 25%. Calculate the price elasticity of demand (PED).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 2.5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "PED", "statement": "%ΔQd / %ΔP." } ],
          "steps": [ { "reasoning": "PED = 25 / 10.", "working": "PED = 25 / 10 = 2.5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "PED = 2.5"
},
        },
        {
          id: "ciealecon-u1-el-q12", difficulty: "core", totalMarks: 1,
          stem: "Consumer income rises by 5% and demand for a good rises by 2.5%. Calculate the income elasticity of demand (YED).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 0.5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "YED", "statement": "%ΔQd / %ΔY." } ],
          "steps": [ { "reasoning": "YED = 2.5 / 5 = 0.5, a normal necessity.", "working": "YED = 2.5 / 5 = 0.5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "YED = 0.5"
},
        },
        {
          id: "ciealecon-u1-el-q13", difficulty: "core", totalMarks: 1,
          stem: "The price of good B rises by 20% and demand for good A rises by 10%. Calculate the cross elasticity of demand (XED) of A with respect to B.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 0.5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "XED", "statement": "%ΔQd of A / %ΔP of B." } ],
          "steps": [ { "reasoning": "XED = 10 / 20 = 0.5, positive so the goods are substitutes.", "working": "XED = 10 / 20 = 0.5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "XED = 0.5"
},
        },
        {
          id: "ciealecon-u1-el-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The price of a good rises by 15% and quantity supplied rises by 45%. Calculate the price elasticity of supply (PES).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 3 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "PES", "statement": "%ΔQs / %ΔP." } ],
          "steps": [ { "reasoning": "PES = 45 / 15 = 3, highly elastic supply.", "working": "PES = 45 / 15 = 3", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "PES = 3"
},
        },
        {
          id: "ciealecon-u1-el-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on elasticity of demand.",
          parts: [
            { "label": "a", "prompt": "Define price elasticity of demand (PED).", "marks": 2 },
            { "label": "b", "prompt": "Distinguish between elastic, inelastic and unit elastic demand using PED values.", "marks": 2 },
            { "label": "c", "prompt": "Give one determinant of the price elasticity of demand.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "PED", "statement": "Responsiveness of Qd to P." } ],
          "steps": [
            { "reasoning": "PED measures the percentage change in quantity demanded divided by the percentage change in price.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "It applies at a point or along the curve and ignores the sign of the price change.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "PED > 1 elastic; PED < 1 inelastic; PED = 1 unit elastic.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Correct interpretation of each category, e.g. elastic means quantity responds proportionately more.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Any valid determinant: availability of substitutes, necessity vs luxury, proportion of income spent, time period.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "Brief explanation of why it affects elasticity, e.g. many substitutes make demand more elastic.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "PED = %ΔQd/%ΔP; >1 elastic, <1 inelastic, =1 unit elastic."
},
        },
        {
          id: "ciealecon-u1-el-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how knowledge of elasticity helps a firm when setting prices and a government when setting indirect taxes.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Elasticity applications", "statement": "Pricing and tax policy." } ],
          "steps": [
            { "reasoning": "A firm facing elastic demand knows a price rise will cause a proportionately larger fall in sales, so it may avoid raising price or cut price to raise total revenue.", "marks": 1, "markCode": "M" },
            { "reasoning": "With inelastic demand the firm can raise price with little loss of sales, increasing revenue.", "marks": 1, "markCode": "M" },
            { "reasoning": "A government can use PED to predict tax incidence: taxes on inelastic goods fall mainly on consumers and raise more revenue.", "marks": 1, "markCode": "M" },
            { "reasoning": "Taxes on elastic goods generate less revenue and more deadweight loss because quantity demanded falls sharply.", "marks": 1, "markCode": "M" },
            { "reasoning": "Elasticity estimates may be unreliable in practice, and demand can shift over time.", "marks": 1, "markCode": "M" },
            { "reasoning": "Overall, elasticity is a powerful but imperfect guide for pricing and taxation decisions.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Elasticity guides revenue-maximising prices and tax incidence, though estimates are uncertain."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u1-el-notes",
      title: "Elasticity — notes",
      summary: "PED=%ΔQd/%ΔP. YED=%ΔQd/%ΔY. XED=%ΔQdA/%ΔPB. Interpret signs and magnitudes.",
      sections: [
        { heading: "Key idea", body: "Elasticity measures responsiveness — crucial for pricing and tax policy." },
        { heading: "Applications", body: "PED informs tax incidence, revenue maximisation; YED for income effects; XED for product relationships." },
      ],
    },
  ],
};
