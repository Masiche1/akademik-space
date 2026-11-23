import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "chem10-u5-lesson-5-1",
  code: "5-1",
  title: "Capstone: Stoichiometry in the Real World",
  goal: "I CAN apply mole calculations to real chemical processes, evaluate yield and limiting reagents, and identify sources of error in quantitative analysis.",
  standards: ["HS-PS1-7", "SEP: Using Mathematics and Computational Thinking", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Limiting reagent", definition: "The reactant that runs out first and determines how much product forms." },
    { term: "Theoretical yield", definition: "The maximum product predicted by stoichiometry." },
    { term: "Actual yield", definition: "The product actually collected in a reaction." },
    { term: "Percent yield", definition: "Actual yield divided by theoretical yield, times 100." },
    { term: "Side reaction", definition: "An unwanted reaction that consumes reactants or produces byproducts." },
    { term: "Purity", definition: "The fraction of a sample that is the intended compound." },
    { term: "Titration", definition: "A volumetric technique measuring concentration via a reaction of known stoichiometry." },
    { term: "Endpoint", definition: "The point in a titration where the indicator changes, signaling completion." },
  ],
  concepts: [
    {
      id: "chem10-u5-limiting-yield",
      title: "Limiting reagents and yield",
      skill: "Identify the limiting reagent and calculate percent yield in real reactions.",
      lesson: {
        sections: [
          {
            heading: "Limiting reagent",
            body: "In a reaction, the reactant that runs out first is the **limiting reagent** — it determines the maximum product. The excess reagent is **in excess**. To find it: convert each reactant to moles, use stoichiometry to see which produces less product.",
          },
          {
            heading: "Percent yield",
            body: "$$\\text{Percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$\n\nReal yields are always below 100% because of side reactions, incomplete reaction, product loss during transfer, and impurities. Percent yield measures efficiency.",
          },
          {
            heading: "Sources of error",
            body: "- Product lost during filtration or transfer\n- Incomplete reaction (not enough time/heat)\n- Side reactions producing byproducts\n- Measurement errors (balance, volume)\n- Impure starting materials",
          },
        ],
        keyFormulas: [
          { name: "Percent yield", statement: "$\\frac{actual}{theoretical} \\times 100\\%$" },
          { name: "Limiting reagent", statement: "Reactant that produces least product" },
        ],
        workedExample: {
          problem: "A reaction has theoretical yield 50 g but actual yield is 42 g. What is percent yield?",
          solution: "$42/50 \\times 100 = 84\\%$ — typical for a real reaction.",
        },
      },
      questions: [
        {
          id: "chem10-u5-limiting-yield-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the limiting reagent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reactant in excess" },
              { id: "b", text: "The reactant that runs out first" },
              { id: "c", text: "The product formed" },
              { id: "d", text: "The catalyst" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting reagent", statement: "Runs out first, determines product amount." }],
            steps: [{ reasoning: "The limiting reagent is consumed completely first.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Runs out first",
            commonErrors: ["Confusing with excess reagent."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-limiting-yield-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Theoretical yield is 80 g but actual yield is 64 g. Calculate percent yield and give one reason it isn't 100%.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Percent yield", statement: "$\\frac{64}{80} \\times 100 = 80\\%$" }],
            steps: [
              { reasoning: "$64/80 \\times 100 = 80\\%$.", marks: 1, markCode: "M" },
              { reasoning: "Reason: side reactions, incomplete reaction, or product loss.", marks: 1, markCode: "B" },
              { reasoning: "Any one valid source of loss is acceptable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%; e.g., side reactions or product loss.",
            commonErrors: ["Forgetting to multiply by 100."],
            examinerNote: "M1, B1, A1.",
          },
        },
        {
          id: "chem10-u5-limiting-yield-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a reaction, 2.0 mol A and 3.0 mol B react: A + 2B → C. Which is limiting and what is the theoretical yield of C?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting reagent", statement: "Compare product each reactant can make." },
              { kind: "formula", name: "Stoichiometry", statement: "1 mol A → 1 mol C; 2 mol B → 1 mol C." },
            ],
            steps: [
              { reasoning: "A: 2.0 mol can make 2.0 mol C.", marks: 1, markCode: "M" },
              { reasoning: "B: 3.0 mol can make 3.0/2 = 1.5 mol C.", marks: 1, markCode: "M" },
              { reasoning: "B produces less → B is limiting.", marks: 1, markCode: "B" },
              { reasoning: "Theoretical yield = 1.5 mol C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B is limiting; 1.5 mol C.",
            commonErrors: ["Assuming the first-listed reactant is limiting."],
            examinerNote: "M2, B1, A1.",
          },
        },
        {
          id: "chem10-u5-limiting-yield-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In a lab, students react 5.0 g of calcium carbonate with excess hydrochloric acid: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. They collect 1.76 g CO₂.",
          parts: [
            { label: "a", prompt: "Calculate moles of CaCO₃ used (molar mass = 100 g/mol).", marks: 2 },
            { label: "b", prompt: "Calculate theoretical yield of CO₂ (molar mass = 44 g/mol).", marks: 3 },
            { label: "c", prompt: "Calculate percent yield.", marks: 2 },
            { label: "d", prompt: "Give two reasons actual yield is less than theoretical.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = m/M$" },
              { kind: "formula", name: "Percent yield", statement: "$\\frac{actual}{theoretical} \\times 100$" },
            ],
            steps: [
              { reasoning: "$n = 5.0/100 = 0.050$ mol CaCO₃.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "1 mol CaCO₃ → 1 mol CO₂, so 0.050 mol CO₂ theoretical.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Mass = $0.050 \\times 44 = 2.20$ g CO₂.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "$1.76/2.20 \\times 100 = 80\\%$.", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Reason 1: CO₂ gas escapes during collection (not all captured).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Reason 2: incomplete reaction or impurities in CaCO₃.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Any two valid sources accepted.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 0.050 mol (b) 2.20 g (c) 80% (d) gas loss, incomplete reaction.",
            commonErrors: ["Using wrong molar mass; forgetting 1:1 ratio."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u5-analytical",
      title: "Analytical chemistry and titration",
      skill: "Explain titration principles, indicators, and how to evaluate analytical accuracy.",
      lesson: {
        sections: [
          {
            heading: "What titration measures",
            body: "Titration determines concentration by reacting a solution of known concentration (**titrant**) with an unknown (**analyte**) until the reaction is complete. The volume of titrant used reveals the analyte's concentration via stoichiometry.",
          },
          {
            heading: "Indicators and endpoints",
            body: "An **indicator** changes color near the equivalence point. The **endpoint** (color change) should be as close as possible to the **equivalence point** (exact stoichiometric completion). A good indicator changes sharply over a narrow pH range matching the reaction.",
          },
          {
            heading: "Accuracy vs precision",
            body: "**Accuracy**: closeness to true value. **Precision**: consistency of repeated measurements. Good titration needs both: careful technique for accuracy, replicates for precision. Burette readings to ±0.05 mL and rinsing glassware prevent contamination.",
          },
        ],
        keyFormulas: [
          { name: "Titration", statement: "$M_1V_1 = M_2V_2$ for 1:1 reactions" },
          { name: "Endpoint vs equivalence", statement: "Endpoint = color change; equivalence = exact completion" },
        ],
        workedExample: {
          problem: "25.0 mL of 0.10 M NaOH is titrated with 0.20 M HCl. What volume of HCl is needed?",
          solution: "$M_1V_1 = M_2V_2$: $0.10 \\times 25.0 = 0.20 \\times V_2$, so $V_2 = 12.5$ mL.",
        },
      },
      questions: [
        {
          id: "chem10-u5-analytical-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between endpoint and equivalence point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing" },
              { id: "b", text: "Endpoint is the indicator color change; equivalence is exact stoichiometric completion" },
              { id: "c", text: "Endpoint comes first; equivalence comes after" },
              { id: "d", text: "Endpoint is theoretical; equivalence is observed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Endpoint", statement: "Observed color change; equivalence is calculated completion." }],
            steps: [{ reasoning: "Endpoint is what you see; equivalence is what should happen chemically.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Endpoint observed, equivalence calculated",
            commonErrors: ["Treating them as identical."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u5-analytical-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should a burette be rinsed with the titrant before use?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contamination", statement: "Water left in glassware dilutes the titrant." }],
            steps: [
              { reasoning: "Water droplets dilute the titrant, making it less concentrated.", marks: 1, markCode: "B" },
              { reasoning: "Diluted titrant means more volume needed → calculated analyte concentration is wrong (too low).", marks: 1, markCode: "R" },
              { reasoning: "Rinsing with titrant ensures the concentration inside matches the label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water dilutes titrant → wrong volume → wrong concentration.",
            commonErrors: ["Thinking rinsing is just cleanliness."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "chem10-u5-analytical-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two titrations of the same sample give 25.10 mL and 25.15 mL of titrant. A third gives 28.40 mL. Analyze the precision and identify the outlier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Precision", statement: "Consistent measurements cluster together." },
              { kind: "principle", name: "Outlier", statement: "A value far from the cluster suggests error." },
            ],
            steps: [
              { reasoning: "First two (25.10, 25.15) are highly precise — differ by only 0.05 mL.", marks: 1, markCode: "B" },
              { reasoning: "Third (28.40) is an outlier — 3.3 mL higher, likely a technique error.", marks: 1, markCode: "R" },
              { reasoning: "Possible causes: misread burette, bubble in tip, wrong indicator timing.", marks: 1, markCode: "R" },
              { reasoning: "Report should use the two consistent values or repeat the third; discard the outlier with justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First two precise; 28.40 is outlier (technique error); use consistent values.",
            commonErrors: ["Averaging all three blindly."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "chem10-u5-analytical-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student titrates vinegar (acetic acid) with 0.100 M NaOH. Three trials give volumes 24.8, 25.0, 25.2 mL.",
          parts: [
            { label: "a", prompt: "Calculate average NaOH volume.", marks: 2 },
            { label: "b", prompt: "Calculate moles of NaOH used (V in L).", marks: 3 },
            { label: "c", prompt: "Write the balanced equation and find moles of acetic acid.", marks: 2 },
            { label: "d", prompt: "If the vinegar sample was 10.0 mL, calculate acetic acid molarity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average", statement: "$(24.8+25.0+25.2)/3$" },
              { kind: "formula", name: "Titration", statement: "1:1 acid-base reaction" },
            ],
            steps: [
              { reasoning: "Average = $(24.8+25.0+25.2)/3 = 25.0$ mL.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$V = 0.0250$ L; $n = M \\times V = 0.100 \\times 0.0250 = 0.00250$ mol.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: 0.00250 mol NaOH.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$\\text{HC}_2\\text{H}_3\\text{O}_2 + \\text{NaOH} \\rightarrow \\text{NaC}_2\\text{H}_3\\text{O}_2 + \\text{H}_2\\text{O}$ — 1:1.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Moles acetic acid = 0.00250 mol (1:1 ratio).", marks: 1, markCode: "B", part: "c" },
              { reasoning: "$M = n/V = 0.00250/0.0100 = 0.250$ mol/L.", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: 0.250 M acetic acid.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 25.0 mL (b) 0.00250 mol (c) 0.00250 mol acid (d) 0.250 M.",
            commonErrors: ["Forgetting to convert mL to L; wrong stoichiometric ratio."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
