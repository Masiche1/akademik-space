import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olec-u2-lesson-2-3",
  code: "2-3",
  title: "Government Intervention",
  goal: "I CAN explain taxes, subsidies and price controls in markets.",
  standards: ["2281 2.3"],
  vocabulary: [
    { term: "Indirect tax", definition: "Tax on goods/services (VAT, excise duty)." },
    { term: "Subsidy", definition: "Government payment to producers to lower costs." },
    { term: "Price ceiling", definition: "Maximum legal price (rent control)." },
    { term: "Price floor", definition: "Minimum legal price (minimum wage)." },
    { term: "Incidence of tax", definition: "Who actually bears the tax burden." },
    { term: "Deadweight loss", definition: "Loss of total surplus from market distortion." },
  ],
  concepts: [
    {
      id: "olec-u2-intervention",
      title: "Taxes and subsidies",
      skill: "Explain how indirect taxes and subsidies affect markets.",
      lesson: {
        sections: [
          { heading: "Indirect tax", body: "Tax on goods (VAT, fuel duty). Shifts supply left → higher price, lower quantity. Burden shared between consumers (higher price) and producers (lower revenue)." },
          { heading: "Subsidy", body: "Government payment to producers. Shifts supply right → lower price, higher quantity. Burden on government; benefits consumers and producers." },
          { heading: "Incidence", body: "Who bears the tax depends on elasticity — more inelastic side bears more burden." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government imposes VAT on cigarettes. Who bears most of the burden if demand is inelastic?",
          solution: "Consumers — inelastic demand means they can't reduce consumption much, so they pay most of the tax.",
        },
      },
      questions: [
        {
          id: "olec-u2-int-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An indirect tax is levied on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Goods and services" }, { id: "b", text: "Income only" }, { id: "c", text: "Wealth only" }, { id: "d", text: "Profits only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Indirect tax", statement: "On goods." }], steps: [{ reasoning: "Goods/services tax.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-int-q2", difficulty: "core", totalMarks: 2,
          stem: "How does a subsidy affect supply?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Subsidy", statement: "Supply shift." }], steps: [
            { reasoning: "Lowers costs → supply increases → rightward shift.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Subsidy increases supply — curve shifts right." },
        },
        {
          id: "olec-u2-int-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an indirect tax affects price and quantity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Indirect tax", statement: "Market effect." }], steps: [
            { reasoning: "Supply shifts left (higher costs).", marks: 1, markCode: "AO2" },
            { reasoning: "Price rises, quantity falls.", marks: 1, markCode: "AO2" },
            { reasoning: "Burden shared between consumers and producers.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Tax shifts supply left → higher price, lower quantity." },
        },
        {
          id: "olec-u2-int-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Government intervention review.",
          parts: [
            { label: "a", prompt: "Define indirect tax.", marks: 1 },
            { label: "b", prompt: "Define subsidy.", marks: 1 },
            { label: "c", prompt: "Tax effect on supply?", marks: 1 },
            { label: "d", prompt: "Subsidy effect on supply?", marks: 1 },
            { label: "e", prompt: "Who bears tax burden?", marks: 2 },
            { label: "f", prompt: "Price ceiling vs floor?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Intervention", statement: "Taxes, subsidies, controls." },
          ], steps: [
            { part: "a", reasoning: "Tax on goods/services.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Payment to producers.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Supply shifts left.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Supply shifts right.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Shared; depends on elasticity.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Ceiling=max price→shortage; floor=min price→surplus.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear contrast.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) tax def (b) subsidy def (c) tax→left (d) sub→right (e) shared (f) ceiling/floor" },
        },
      ],
    },
    {
      id: "olec-u2-controls",
      title: "Price Controls",
      skill: "Explain price ceilings, price floors and their consequences.",
      lesson: {
        sections: [
          { heading: "Price ceiling", body: "Maximum legal price below equilibrium — e.g. rent control. Causes shortage: quantity demanded > supplied. May lead to black markets and reduced quality." },
          { heading: "Price floor", body: "Minimum legal price above equilibrium — e.g. minimum wage, agricultural price supports. Causes surplus: quantity supplied > demanded." },
          { heading: "Consequences", body: "Both create inefficiency — shortages or surpluses, misallocation of resources, and may require further government intervention." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government sets minimum wage above equilibrium. What happens?",
          solution: "Labour supply exceeds demand → unemployment (surplus of workers).",
        },
      },
      questions: [
        {
          id: "olec-u2-pc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A price ceiling is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Maximum legal price" }, { id: "b", text: "Minimum legal price" }, { id: "c", text: "Market price" }, { id: "d", text: "Equilibrium price" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Price ceiling", statement: "Max price." }], steps: [{ reasoning: "Ceiling = maximum.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u2-pc-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a price floor cause?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Price floor", statement: "Surplus." }], steps: [
            { reasoning: "Minimum price above equilibrium → surplus.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Surplus — supply exceeds demand." },
        },
        {
          id: "olec-u2-pc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why rent control (price ceiling) may cause housing shortages.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Rent control", statement: "Shortage." }], steps: [
            { reasoning: "Low rent → high demand for housing.", marks: 1, markCode: "AO2" },
            { reasoning: "Landlords have less incentive to supply/maintain.", marks: 1, markCode: "AO2" },
            { reasoning: "Supply falls → shortage.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Low prices → excess demand + reduced supply → shortage." },
        },
        {
          id: "olec-u2-pc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Price controls review.",
          parts: [
            { label: "a", prompt: "Define price ceiling.", marks: 1 },
            { label: "b", prompt: "Define price floor.", marks: 1 },
            { label: "c", prompt: "Ceiling effect?", marks: 1 },
            { label: "d", prompt: "Floor effect?", marks: 1 },
            { label: "e", prompt: "Example of each?", marks: 2 },
            { label: "f", prompt: "Why are controls often problematic?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Price controls", statement: "Types and effects." },
          ], steps: [
            { part: "a", reasoning: "Maximum legal price.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Minimum legal price.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Shortage.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Surplus.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Ceiling=rent control; floor=minimum wage.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both examples.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Creates shortages/surpluses, black markets, inefficiency.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Distorts market signals.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear problems.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) ceiling (b) floor (c) shortage (d) surplus (e) rent/min wage (f) distortions" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u2-2-3-notes", title: "Government intervention — notes", summary: "Taxes, subsidies and price controls.",
      sections: [
        { heading: "Taxes/subsidies", body: "Tax shifts supply left (P↑,Q↓); subsidy shifts right (P↓,Q↑); incidence depends on elasticity." },
        { heading: "Price controls", body: "Ceiling→shortage; floor→surplus; distort markets and create inefficiency." },
      ] },
  ],
};
