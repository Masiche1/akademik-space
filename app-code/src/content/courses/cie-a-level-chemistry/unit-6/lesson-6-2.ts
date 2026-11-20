import type { Lesson } from "../../../types.ts";

export const lesson612: Lesson = {
  id: "cial-c-u6-lesson-6-2",
  code: "6-2",
  title: "Alcohols, carbonyls and carboxylic acids",
  goal: "I CAN describe reactions of alcohols, aldehydes, ketones and carboxylic acids.",
  standards: ["9701 6.2: oxygen compounds"],
  vocabulary: [
    { term: "Alcohol", definition: "R–OH; classified primary/secondary/tertiary by carbon bearing OH." },
    { term: "Oxidation", definition: "Loss of H / gain of O; alcohols → aldehydes/ketones → acids." },
    { term: "Aldehyde", definition: "R–CHO; oxidises to carboxylic acid." },
    { term: "Ketone", definition: "R–CO–R; resistant to oxidation." },
    { term: "Carboxylic acid", definition: "R–COOH; acidic, forms esters with alcohols." },
    { term: "Esterification", definition: "Carboxylic acid + alcohol → ester + water (conc H₂SO₄ catalyst)." },
  ],
  concepts: [
    {
      id: "cial-c-u6-alcohols-carbonyls",
      title: "Alcohols and carbonyl compounds",
      skill: "Describe oxidation of alcohols and reactions of aldehydes/ketones.",
      lesson: {
        sections: [
          {
            heading: "Alcohol classification",
            body: "Primary (1°): OH on terminal C → oxidises to aldehyde then carboxylic acid. Secondary (2°): OH on middle C → oxidises to ketone only. Tertiary (3°): no H on carbinol C → resistant to oxidation. Test: acidified K₂Cr₂O₇ — orange→green when oxidised.",
          },
          {
            heading: "Aldehydes and ketones",
            body: "Both contain C=O. Aldehyde R–CHO oxidises easily to R–COOH (Tollens' reagent [Ag(NH₃)₂]⁺ gives silver mirror; Fehling's/Benedict's give red Cu₂O). Ketone R–CO–R resists oxidation — distinguish aldehyde from ketone with Tollens'.",
          },
          {
            heading: "Reactions",
            body: "Alcohols: combustion, dehydration (conc H₂SO₄, heat → alkene), esterification. Carbonyls: nucleophilic addition (HCN, NaBH₄ reduction). Carboxylic acids: acidic (H⁺ donor), react with metals/carbonates (CO₂), form esters.",
          },
        ],
        keyFormulas: [
          { name: "Oxidation chain", statement: "1° alcohol → aldehyde → carboxylic acid; 2° → ketone; 3° resistant." },
          { name: "Tollens'", statement: "Aldehyde + [Ag(NH₃)₂]⁺ → silver mirror." },
        ],
        workedExample: {
          problem: "What product forms when propan-1-ol is oxidised?",
          solution: "Primary alcohol → propanal (CH₃CH₂CHO), then propanoic acid with excess oxidant.",
        },
      },
      questions: [
        {
          id: "cial-c-u6-ac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which alcohol class is most resistant to oxidation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tertiary" },
              { id: "b", text: "Primary" },
              { id: "c", text: "Secondary" },
              { id: "d", text: "All oxidise equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Alcohol oxidation", statement: "3° has no H on carbinol C — can't oxidise." }],
            steps: [{ reasoning: "Tertiary alcohols resist oxidation.", marks: 1, markCode: "A" }],
            finalAnswer: "Tertiary",
          },
        },
        {
          id: "cial-c-u6-ac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for esterification of ethanoic acid with ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Esterification", statement: "Acid + alcohol → ester + water (conc H₂SO₄)." }],
            steps: [
              { reasoning: "$CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$.", marks: 1, markCode: "M" },
              { reasoning: "Ethyl ethanoate formed.", marks: 1, markCode: "M" },
              { reasoning: "Equation balanced, reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CH_3COOC_2H_5+H_2O$",
          },
        },
        {
          id: "cial-c-u6-ac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How would you distinguish between ethanal (aldehyde) and propanone (ketone)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Carbonyl tests", statement: "Aldehyde oxidises; ketone doesn't." }],
            steps: [
              { reasoning: "Use Tollens' reagent [Ag(NH₃)₂]⁺.", marks: 1, markCode: "M" },
              { reasoning: "Ethanol→ethanal oxidises: silver mirror forms.", marks: 1, markCode: "M" },
              { reasoning: "Propanone (ketone) does not react.", marks: 1, markCode: "M" },
              { reasoning: "Silver mirror = aldehyde confirmed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Tollens' test — silver mirror = aldehyde",
          },
        },
        {
          id: "cial-c-u6-ac-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Oxygen compounds.",
          parts: [
            { label: "a", prompt: "Classify propan-2-ol as 1°, 2° or 3° and predict its oxidation product.", marks: 3 },
            { label: "b", prompt: "Write the equation for oxidation of ethanol to ethanoic acid.", marks: 3 },
            { label: "c", prompt: "What reagent distinguishes aldehydes from ketones?", marks: 1 },
            { label: "d", prompt: "Write the equation for ethanoic acid reacting with sodium carbonate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Oxygen compounds", statement: "Alcohol oxidation chain; Tollens' for aldehydes; acids + carbonates → CO₂." }],
            steps: [
              { part: "a", reasoning: "Propan-2-ol: OH on middle C = secondary.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oxidises to propanone (ketone).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Cannot go further to acid.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$C_2H_5OH+2[O]\\to CH_3COOH+H_2O$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethanol → ethanoic acid via aldehyde.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tollens' reagent (or Fehling's/Benedict's).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2CH_3COOH+Na_2CO_3\\to 2CH_3COONa+H_2O+CO_2$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "CO₂ evolved; balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2°→propanone (b) ethanol→ethanoic acid (c) Tollens' (d) CO2 evolved",
          },
        },
      ],
    },
    {
      id: "cial-c-u6-carboxylic",
      title: "Carboxylic acids and esters",
      skill: "Describe acidity of carboxylic acids and formation/hydrolysis of esters.",
      lesson: {
        sections: [
          {
            heading: "Carboxylic acid properties",
            body: "R–COOH contains –COOH group: acidic (donates H⁺, weaker than mineral acids but stronger than alcohols/phenols). React with metals → H₂; carbonates → CO₂; bases → salts. Ethanoic acid is the vinegar acid.",
          },
          {
            heading: "Ester formation",
            body: "Carboxylic acid + alcohol ⇌ ester + water, catalysed by conc H₂SO₄ (reversible — remove water to drive forward). Esters have fruity smells — used in flavourings and perfumes. Naming: alkyl alkanoate, e.g. ethyl ethanoate.",
          },
          {
            heading: "Ester hydrolysis",
            body: "Reverse of esterification. Acid hydrolysis (dil H₂SO₄, heat): ester + water → acid + alcohol. Alkaline hydrolysis (NaOH, heat): ester + NaOH → carboxylate salt + alcohol — irreversible (soap making = saponification).",
          },
        ],
        keyFormulas: [
          { name: "Esterification", statement: "$RCOOH+R'OH\\rightleftharpoons RCOOR'+H_2O$" },
          { name: "Saponification", statement: "Ester + NaOH → carboxylate + alcohol (irreversible)." },
        ],
        workedExample: {
          problem: "Name the ester formed from methanol and propanoic acid.",
          solution: "Methyl propanoate: $CH_3OH+CH_3CH_2COOH\\to CH_3CH_2COOCH_3+H_2O$.",
        },
      },
      questions: [
        {
          id: "cial-c-u6-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What functional group defines a carboxylic acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "–COOH" },
              { id: "b", text: "–OH" },
              { id: "c", text: "–CHO" },
              { id: "d", text: "–CO–" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Carboxylic acid", statement: "Contains –COOH group." }],
            steps: [{ reasoning: "Carboxylic acids have –COOH.", marks: 1, markCode: "A" }],
            finalAnswer: "–COOH",
          },
        },
        {
          id: "cial-c-u6-ca-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for propanoic acid reacting with sodium.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Acid + metal", statement: "Carboxylic acid + metal → salt + H₂." }],
            steps: [
              { reasoning: "$2CH_3CH_2COOH+2Na\\to 2CH_3CH_2COONa+H_2$.", marks: 1, markCode: "M" },
              { reasoning: "Sodium propanoate + hydrogen formed.", marks: 1, markCode: "M" },
              { reasoning: "Equation balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2CH_3CH_2COONa+H_2$",
          },
        },
        {
          id: "cial-c-u6-ca-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why esterification is reversible and how industrial production drives it forward.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Esterification equilibrium", statement: "Reversible; remove water shifts right." }],
            steps: [
              { reasoning: "Reaction is equilibrium: acid + alcohol ⇌ ester + water.", marks: 1, markCode: "M" },
              { reasoning: "Water is a product — removing it shifts equilibrium right (Le Chatelier).", marks: 1, markCode: "M" },
              { reasoning: "Conc H₂SO₄ catalyst speeds both directions.", marks: 1, markCode: "M" },
              { reasoning: "Continuous removal of water/ester drives completion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Remove water → shifts right",
          },
        },
        {
          id: "cial-c-u6-ca-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Carboxylic acids and esters.",
          parts: [
            { label: "a", prompt: "What is the functional group of a carboxylic acid?", marks: 1 },
            { label: "b", prompt: "Write the equation for ethanoic acid + ethanol → ester.", marks: 3 },
            { label: "c", prompt: "Name the ester formed.", marks: 1 },
            { label: "d", prompt: "Explain the difference between acid and alkaline hydrolysis of esters.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Esters", statement: "Esterification reversible; acid hydrolysis reversible, alkaline irreversible." }],
            steps: [
              { part: "a", reasoning: "–COOH group.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conc H₂SO₄ catalyst.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reversible arrow used.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethyl ethanoate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Acid hydrolysis: ester + water → acid + alcohol (reversible).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Alkaline: ester + NaOH → carboxylate salt + alcohol.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Alkaline is irreversible — carboxylate doesn't react with water.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Alkaline used in soap-making (saponification).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) -COOH (b) esterification eqn (c) ethyl ethanoate (d) acid rev vs alkaline irrev",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u6-oxygen-compounds-notes",
      title: "Alcohols, carbonyls and carboxylic acids — revision notes",
      summary: "Oxidation of alcohols, carbonyl tests and ester chemistry.",
      sections: [
        {
          heading: "Oxidation chain",
          body: "1° alcohol → aldehyde → carboxylic acid (acidified K₂Cr₂O₇ orange→green). 2° → ketone only. 3° resistant. Tollens' [Ag(NH₃)₂]⁺ gives silver mirror with aldehydes — distinguishes them from ketones.",
        },
        {
          heading: "Esters",
          body: "Acid + alcohol ⇌ ester + water (conc H₂SO₄). Remove water → drives forward. Names: alkyl alkanoate (ethyl ethanoate). Acid hydrolysis reversible; alkaline hydrolysis (NaOH) irreversible → carboxylate + alcohol = saponification (soap).",
        },
        {
          heading: "Exam checklist",
          body: "For oxidation state classification check the carbon bearing –OH: 1°/2°/3° determines product. Always include catalyst and conditions in organic equations.",
        },
      ],
    },
  ],
};
