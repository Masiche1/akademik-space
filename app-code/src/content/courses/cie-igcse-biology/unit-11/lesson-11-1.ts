import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cieb-u11-lesson-11-1",
  code: "11-1",
  title: "Biotechnology",
  goal: "I CAN describe the use of microorganisms and enzymes in biotechnology: fermentation, antibiotics and genetic engineering.",
  standards: ["0653 11.1", "0653 11.2"],
  vocabulary: [
    { term: "Fermentation", definition: "Anaerobic respiration by yeast producing ethanol and CO₂." },
    { term: "Antibiotic", definition: "Substance produced by microorganisms that kills or inhibits bacteria." },
    { term: "Penicillin", definition: "Antibiotic produced by Penicillium mould; first widely used antibiotic." },
    { term: "Biotechnology", definition: "Use of living organisms or their components to make useful products." },
    { term: "Genetic engineering", definition: "Direct manipulation of genes to produce desired traits/products." },
    { term: "Fermenter", definition: "Vessel providing optimal conditions for microbial growth and product formation." },
    { term: "Immobilised enzyme", definition: "Enzyme attached to inert material; reusable and easily recovered." },
  ],
  concepts: [
    {
      id: "cieb-u11-fermentation",
      title: "Fermentation and antibiotics",
      skill: "Describe fermentation processes and antibiotic production by microorganisms.",
      lesson: {
        sections: [
          {
            heading: "Fermentation",
            body: "Yeast/bacteria respire anaerobically in a **fermenter** (sterile, optimal temp/pH, oxygen-free for ethanol).\n\nUses: bread (CO₂ raises dough), beer/wine (ethanol), yoghurt/cheese (lactic acid bacteria), insulin (genetically modified bacteria).",
          },
          {
            heading: "Antibiotics",
            body: "- **Penicillin**: discovered from *Penicillium* mould; kills bacteria by disrupting cell wall synthesis.\n- Produced industrially in fermenters.\n- Used to treat bacterial infections (not viruses).",
          },
          {
            heading: "Fermenter conditions",
            body: "Sterile conditions, optimal temperature (~30–40°C), pH control, nutrient supply, oxygen level (aerobic/anaerobic as needed), agitation for mixing.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why must fermenters be sterile for antibiotic production?",
          solution: "Contaminating microorganisms would compete for nutrients and may produce unwanted products or degrade the antibiotic.",
        },
      },
      questions: [
        {
          id: "cieb-u11-fermentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What gas produced during bread-making makes dough rise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Hydrogen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation", statement: "Yeast produces CO₂ + ethanol anaerobically." },
            ],
            steps: [
              { reasoning: "Recall the product.", working: "\\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Choosing oxygen — fermentation is anaerobic."],
          },
        },
        {
          id: "cieb-u11-fermentation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conditions needed in a fermenter for microbial growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermenter conditions", statement: "Sterile, optimal temp/pH, nutrients, oxygen control." },
            ],
            steps: [
              { reasoning: "Give two conditions.", working: "\\text{sterile, temp, pH, nutrients}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sterile conditions and optimal temperature/pH (also: nutrient supply, correct oxygen level).",
            commonErrors: ["Saying 'lots of oxygen always' — depends on process (ethanol needs anaerobic)."],
          },
        },
        {
          id: "cieb-u11-fermentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how penicillin is produced industrially.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Penicillin production", statement: "Penicillium mould grown in fermenter → antibiotic extracted." },
            ],
            steps: [
              { reasoning: "Penicillium mould cultured in fermenter.", working: "\\text{Penicillium}", marks: 1, markCode: "M" },
              { reasoning: "Optimal conditions for growth.", working: "\\text{sterile, temp, pH}", marks: 1, markCode: "M" },
              { reasoning: "Mould produces penicillin as secondary metabolite.", working: "\\text{antibiotic produced}", marks: 1, markCode: "M" },
              { reasoning: "Extracted and purified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Penicillium mould is grown under sterile, optimal conditions in a fermenter; it produces penicillin which is then extracted and purified for medical use.",
            commonErrors: ["Saying 'chemically synthesised' — it's produced by living mould."],
          },
        },
        {
          id: "cieb-u11-fermentation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the role of fermentation in food production.",
          parts: [
            { label: "a", prompt: "Explain bread-making using yeast fermentation.", marks: 3 },
            { label: "b", prompt: "Explain yoghurt/cheese production.", marks: 3 },
            { label: "c", prompt: "State one advantage of fermentation over other methods.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation uses", statement: "Bread: CO₂ rise. Yoghurt/cheese: lactic acid bacteria. Beer/wine: ethanol." },
            ],
            steps: [
              { part: "a", reasoning: "Yeast ferments sugars anaerobically.", working: "\\text{yeast fermentation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "CO₂ produced → dough rises.", working: "\\text{CO}_2 \\to \\text{rise}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ethanol evaporates in baking.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lactic acid bacteria ferment lactose.", working: "\\text{lactic acid bacteria}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Produce lactic acid → sour taste, preservation.", working: "\\text{lactic acid}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cheese: curdling + ageing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage: natural, cheap, preserves food.", working: "\\text{preservation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or: improves flavour/digestibility.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State advantage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) yeast→CO₂→dough rises (b) lactic acid bacteria→acid→yoghurt/cheese (c) preservation/flavour",
            commonErrors: ["In (a) saying 'yeast makes bread soft by itself' — CO₂ gas is the mechanism."],
          },
        },
        {
          id: "cieb-u11-fermentation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the two products of alcoholic fermentation by yeast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and carbon dioxide" },
              { id: "b", text: "Carbon dioxide and water only" },
              { id: "c", text: "Ethanol and nitrogen" },
              { id: "d", text: "Lactic acid and oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation", statement: "Yeast anaerobic respiration → ethanol + CO₂." },
            ],
            steps: [
              { reasoning: "Recall the products.", working: "\\text{ethanol} + \\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ethanol and carbon dioxide",
            commonErrors: ["Choosing lactic acid — that is lactic acid fermentation, not alcoholic."],
          },
        },
        {
          id: "cieb-u11-fermentation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which microorganism is used to produce penicillin industrially?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penicillium mould" },
              { id: "b", text: "Lactobacillus" },
              { id: "c", text: "A virus" },
              { id: "d", text: "Yeast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Penicillin", statement: "Produced by Penicillium mould in fermenters." },
            ],
            steps: [
              { reasoning: "Recall the producing organism.", working: "\\text{Penicillium}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Penicillium mould",
            commonErrors: ["Choosing yeast — yeast is used for bread/beer, not penicillin."],
          },
        },
        {
          id: "cieb-u11-fermentation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For ethanol production by yeast, the fermenter must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At freezing temperature" },
              { id: "b", text: "Full of oxygen" },
              { id: "c", text: "Acidic at pH 1" },
              { id: "d", text: "Oxygen-free (anaerobic)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Anaerobic fermentation", statement: "Ethanol production requires oxygen-free conditions." },
            ],
            steps: [
              { reasoning: "Recall the oxygen requirement.", working: "\\text{anaerobic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen-free (anaerobic)",
            commonErrors: ["Choosing (b) — with oxygen yeast respires aerobically and makes no ethanol."],
          },
        },
        {
          id: "cieb-u11-fermentation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two food products made using fermentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation uses", statement: "Bread, beer/wine, yoghurt/cheese." },
            ],
            steps: [
              { reasoning: "Give two examples.", working: "\\text{bread, beer, yoghurt}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bread (yeast → CO₂) and beer/wine (yeast → ethanol), or yoghurt/cheese (lactic acid bacteria).",
            commonErrors: ["Naming a product not made by fermentation, e.g. fresh milk."],
          },
        },
        {
          id: "cieb-u11-fermentation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In yeast fermentation, glucose (C₆H₁₂O₆, Mr = 180) is converted to ethanol (C₂H₅OH, Mr = 46) and carbon dioxide: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Calculate the mass of ethanol produced from 18 g of glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9.2, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fermentation equation", statement: "$1 \\text{ mol glucose} \\to 2 \\text{ mol ethanol}$" },
            ],
            steps: [
              { reasoning: "Find moles of glucose, then ethanol, then mass.", working: "\\frac{18}{180} = 0.1 \\text{ mol glucose} \\to 0.2 \\text{ mol ethanol} \\to 0.2 \\times 46 = 9.2 \\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "9.2 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9.2 g",
            commonErrors: ["Using 1 mol ethanol per glucose — the equation gives 2 mol."],
          },
        },
        {
          id: "cieb-u11-fermentation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why oxygen must be excluded when producing ethanol by fermentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Anaerobic respiration", statement: "With oxygen, yeast respires aerobically producing CO₂ and water; without oxygen it ferments to ethanol + CO₂." },
            ],
            steps: [
              { reasoning: "With oxygen present, yeast carries out aerobic respiration.", working: "\\text{aerobic respiration}", marks: 1, markCode: "M" },
              { reasoning: "Aerobic respiration produces CO₂ and water, not ethanol.", working: "\\text{CO}_2 + \\text{water}", marks: 1, markCode: "M" },
              { reasoning: "Only anaerobic conditions give alcoholic fermentation.", working: "\\text{anaerobic}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: oxygen must be excluded for ethanol production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "If oxygen is present, yeast respires aerobically, producing only carbon dioxide and water. Ethanol is only produced under anaerobic conditions, so oxygen must be excluded.",
            commonErrors: ["Saying oxygen 'kills' the yeast — it just switches the respiration pathway."],
          },
        },
        {
          id: "cieb-u11-fermentation-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Lactic acid bacteria are used industrially to produce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Yoghurt and cheese" },
              { id: "c", text: "Ethanol for fuel only" },
              { id: "d", text: "Penicillin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lactic acid fermentation", statement: "Lactic acid bacteria ferment lactose → lactic acid → yoghurt/cheese." },
            ],
            steps: [
              { reasoning: "Recall the industrial use.", working: "\\text{yoghurt/cheese}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Yoghurt and cheese",
            commonErrors: ["Choosing penicillin — that is made by Penicillium mould."],
          },
        },
        {
          id: "cieb-u11-fermentation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the role of agitation in a fermenter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Agitation", statement: "Mixing distributes nutrients and keeps conditions uniform." },
            ],
            steps: [
              { reasoning: "It mixes the contents.", working: "\\text{mixing}", marks: 1, markCode: "M" },
              { reasoning: "Purpose: distribute nutrients/oxygen evenly.", working: "\\text{uniform conditions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agitation mixes the fermenter contents so nutrients, microorganisms and gases are distributed evenly, keeping conditions uniform for growth.",
            commonErrors: ["Saying agitation is only for show — it has a functional role."],
          },
        },
        {
          id: "cieb-u11-fermentation-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fermenter produces penicillin at a rate of 2.5 g per hour. How much penicillin is produced in 8 hours?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × time", statement: "$2.5 \\text{ g/h} \\times 8 \\text{ h} = 20 \\text{ g}$" },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "2.5 \\times 8 = 20", marks: 1, markCode: "M" },
            ],
            finalAnswer: "20 g",
            commonErrors: ["Dividing instead of multiplying rate by time."],
          },
        },
        {
          id: "cieb-u11-fermentation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the fermenter conditions needed for ethanol production and for penicillin production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermenter conditions", statement: "Both need sterile, optimal temp/pH and nutrients; oxygen requirement differs." },
            ],
            steps: [
              { reasoning: "Ethanol needs anaerobic conditions.", working: "\\text{no oxygen}", marks: 1, markCode: "M" },
              { reasoning: "Penicillin production is aerobic.", working: "\\text{oxygen required}", marks: 1, markCode: "M" },
              { reasoning: "Both need sterile conditions and optimal temperature/pH.", working: "\\text{sterile + temp/pH}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: oxygen level is the key difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both processes need sterile conditions, optimal temperature, pH control and nutrients; the key difference is oxygen — ethanol fermentation is anaerobic while penicillin production by Penicillium is aerobic.",
            commonErrors: ["Saying both need the same oxygen level — ethanol must exclude oxygen."],
          },
        },
        {
          id: "cieb-u11-fermentation-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Human insulin can be produced industrially by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactic acid bacteria" },
              { id: "b", text: "Genetically modified bacteria grown in a fermenter" },
              { id: "c", text: "Penicillium mould" },
              { id: "d", text: "Extracting it from human donors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin production", statement: "Human insulin gene inserted into bacteria → insulin made in fermenters." },
            ],
            steps: [
              { reasoning: "Recall the production method.", working: "\\text{GM bacteria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Genetically modified bacteria grown in a fermenter",
            commonErrors: ["Choosing (b) — insulin is not extracted from humans; bacteria produce it."],
          },
        },
        {
          id: "cieb-u11-fermentation-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Glucose is fermented by yeast: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. If 0.2 mol of glucose is fully fermented, how many moles of carbon dioxide are produced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fermentation equation", statement: "$1 \\text{ mol glucose} \\to 2 \\text{ mol CO}_2$" },
            ],
            steps: [
              { reasoning: "Use the 1:2 mole ratio.", working: "0.2 \\times 2 = 0.4 \\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "0.4 \\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.4 mol",
            commonErrors: ["Answering 0.2 — forgetting the 2 CO₂ per glucose ratio."],
          },
        },
      ],
    },
    {
      id: "cieb-u11-genetic-engineering",
      title: "Genetic engineering",
      skill: "Describe genetic engineering, insulin production, and enzyme use in industry.",
      lesson: {
        sections: [
          {
            heading: "Genetic engineering",
            body: "Direct manipulation of genes: isolate desired gene → insert into vector (e.g. plasmid) → insert into host (bacterium) → host produces desired protein.\n\nExamples: human insulin in bacteria, GM crops (pest resistance, herbicide tolerance), gene therapy research.",
          },
          {
            heading: "Insulin production",
            body: "Human insulin gene inserted into *E. coli* → bacteria produce insulin → extracted and purified for diabetics. Cheaper and safer than animal insulin.",
          },
          {
            heading: "Enzymes in industry",
            body: "- **Immobilised enzymes**: attached to beads — reusable, easily removed.\n- Uses: biological washing powders (protease/lipase), fructose syrup (isomerase), cheese production (rennet), paper/textile processing.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is genetically engineered insulin better than extracting it from animals?",
          solution: "Bacterial production is cheaper, faster, more consistent, and avoids animal-derived contamination risks.",
        },
      },
      questions: [
        {
          id: "cieb-u11-genetic-engineering-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloning organisms" },
              { id: "b", text: "Natural selection" },
              { id: "c", text: "Breeding animals selectively" },
              { id: "d", text: "Direct manipulation of genes to produce desired traits" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genetic engineering", statement: "Direct gene manipulation for desired products." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{gene manipulation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Direct manipulation of genes",
            commonErrors: ["Choosing selective breeding — that's artificial but not genetic engineering."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one advantage of immobilised enzymes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Immobilised enzymes", statement: "Reusable, easily recovered, don't contaminate product." },
            ],
            steps: [
              { reasoning: "Give advantage.", working: "\\text{reusable/recoverable}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They can be reused and easily recovered, reducing cost and avoiding contamination of the product.",
            commonErrors: ["Saying 'they work faster' — main advantage is reusability."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bacteria can be used to produce human insulin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin production", statement: "Human insulin gene → plasmid → bacteria → insulin." },
            ],
            steps: [
              { reasoning: "Isolate human insulin gene.", working: "\\text{gene isolated}", marks: 1, markCode: "M" },
              { reasoning: "Insert into bacterial plasmid.", working: "\\text{plasmid}", marks: 1, markCode: "M" },
              { reasoning: "Bacteria reproduce and produce insulin.", working: "\\text{bacteria produce}", marks: 1, markCode: "M" },
              { reasoning: "Insulin extracted and purified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The human insulin gene is inserted into a bacterial plasmid; bacteria take up the plasmid and produce insulin as they reproduce; insulin is then extracted and purified.",
            commonErrors: ["Saying 'human cells are used' — bacteria do the production."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the use of genetic engineering in medicine and agriculture.",
          parts: [
            { label: "a", prompt: "Give two medical uses of genetic engineering.", marks: 2 },
            { label: "b", prompt: "Give two agricultural uses.", marks: 2 },
            { label: "c", prompt: "State one advantage.", marks: 2 },
            { label: "d", prompt: "State one concern/disadvantage.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "GE uses", statement: "Medicine: insulin, vaccines. Agriculture: GM crops. Concern: unknown long-term effects." },
            ],
            steps: [
              { part: "a", reasoning: "Medical uses: insulin, vaccines, gene therapy.", working: "\\text{insulin/vaccines}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State two.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Agricultural: pest resistance, herbicide tolerance.", working: "\\text{GM crops}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State two.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Advantage: increased yield, reduced pesticide use, cheaper medicine.", working: "\\text{yield/cheap}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State advantage.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Concern: unknown ecological/health effects.", working: "\\text{unknown effects}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Or: genes may spread to wild relatives.", working: "\\text{gene flow}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete concern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) insulin, vaccines (b) pest resistance, herbicide tolerance (c) yield/cheap (d) unknown long-term effects/gene flow",
            commonErrors: ["In (d) saying 'it's always bad' — evaluation needs balanced points."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a plasmid in genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It acts as a vector carrying the foreign gene into the host cell" },
              { id: "b", text: "It is the host organism" },
              { id: "c", text: "It digests foreign DNA" },
              { id: "d", text: "It produces the desired protein directly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasmid vector", statement: "Small circular DNA used to carry foreign genes into host cells." },
            ],
            steps: [
              { reasoning: "Recall the function of a plasmid.", working: "\\text{vector}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It acts as a vector carrying the foreign gene into the host cell",
            commonErrors: ["Choosing (c) — the host cell produces the protein, not the plasmid itself."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is most commonly used as a host in genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humans" },
              { id: "b", text: "Mammals only" },
              { id: "c", text: "Bacteria (e.g. E. coli)" },
              { id: "d", text: "Viruses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Host", statement: "Bacteria are common hosts — easy to culture and contain plasmids." },
            ],
            steps: [
              { reasoning: "Recall the typical host.", working: "\\text{bacteria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Bacteria (e.g. E. coli)",
            commonErrors: ["Choosing humans — human cells are not used as production hosts at this level."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The first step in producing a genetically engineered protein is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extract the protein" },
              { id: "b", text: "Isolate the gene for the desired product" },
              { id: "c", text: "Kill the host cells" },
              { id: "d", text: "Insert the gene into the host" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "GE steps", statement: "Isolate gene → insert into vector → host → extract product." },
            ],
            steps: [
              { reasoning: "Recall the sequence.", working: "\\text{isolate gene first}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Isolate the gene for the desired product",
            commonErrors: ["Choosing (b) — you cannot insert a gene you have not isolated."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two advantages of producing insulin using bacteria rather than extracting it from animals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bacterial insulin", statement: "Cheaper, faster, consistent, no animal-derived contamination." },
            ],
            steps: [
              { reasoning: "Give two valid advantages.", working: "\\text{cheap, fast, consistent, safe}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It is cheaper and faster to produce, gives a consistent pure product, and avoids contamination risks associated with animal-derived insulin.",
            commonErrors: ["Saying bacteria produce 'better' insulin chemically — it is identical human insulin; the advantage is production method."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the steps involved in producing a pest-resistant genetically modified crop plant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "GM crops", statement: "Isolate pest-resistance gene → vector → plant cells → plant produces protective protein." },
            ],
            steps: [
              { reasoning: "Identify/isolate the gene conferring pest resistance.", working: "\\text{gene isolated}", marks: 1, markCode: "M" },
              { reasoning: "Insert the gene into a plant vector (e.g. plasmid or Agrobacterium).", working: "\\text{vector}", marks: 1, markCode: "M" },
              { reasoning: "Introduce vector into plant cells and regenerate plants.", working: "\\text{plant cells}", marks: 1, markCode: "M" },
              { reasoning: "GM plant produces the protective protein → pests killed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolate the pest-resistance gene, insert it into a plant vector, transfer it into plant cells, and regenerate whole plants that produce the protective protein so pests feeding on them are killed.",
            commonErrors: ["Describing bacterial insulin production instead of plant transformation."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Human insulin consists of two polypeptide chains containing 21 and 30 amino acids respectively. Calculate the total number of amino acids in insulin.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 51, unit: "amino acids" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin structure", statement: "Two chains: 21 + 30 = 51 amino acids." },
            ],
            steps: [
              { reasoning: "Add the two chain lengths.", working: "21 + 30 = 51", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "51 \\text{ amino acids}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "51 amino acids",
            commonErrors: ["Multiplying instead of adding the chain lengths."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a trait introduced into a GM crop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ability to photosynthesise" },
              { id: "b", text: "Herbicide tolerance" },
              { id: "c", text: "Producing seeds" },
              { id: "d", text: "Growing roots" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "GM crops", statement: "Traits include pest resistance and herbicide tolerance." },
            ],
            steps: [
              { reasoning: "Identify the introduced trait.", working: "\\text{herbicide tolerance}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Herbicide tolerance",
            commonErrors: ["Choosing photosynthesis — all plants photosynthesise; GM traits are novel additions."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two concerns about growing genetically modified crops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "GM concerns", statement: "Gene flow to wild relatives, unknown long-term effects, reduced biodiversity." },
            ],
            steps: [
              { reasoning: "Concern 1: GM genes may spread to wild relatives.", working: "\\text{gene flow}", marks: 1, markCode: "M" },
              { reasoning: "Concern 2: long-term health/ecological effects are unknown.", working: "\\text{unknown effects}", marks: 1, markCode: "M" },
              { reasoning: "Develop concern 1.", working: "\\text{wild relatives affected}", marks: 1, markCode: "M" },
              { reasoning: "Develop concern 2 and conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GM genes could spread to wild relatives through cross-pollination, and the long-term effects on health and ecosystems are not fully known — creating uncertainty about growing GM crops.",
            commonErrors: ["Listing only benefits — the question asks for concerns."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fermenter batch produces 250 mg of insulin. Each dose requires 10 mg. Calculate how many doses can be made from one batch.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "doses" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Division", statement: "$\\frac{250}{10} = 25$" },
            ],
            steps: [
              { reasoning: "Divide total insulin by dose size.", working: "250 \\div 10 = 25", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "25 \\text{ doses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 doses",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bacterial culture produces insulin at 0.5 g per litre per hour. Calculate the mass of insulin produced by 200 litres of culture over 4 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × volume × time", statement: "$0.5 \\times 200 \\times 4 = 400 \\text{ g}$" },
            ],
            steps: [
              { reasoning: "Multiply rate by volume and time.", working: "0.5 \\times 200 \\times 4 = 400", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "400 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400 g",
            commonErrors: ["Forgetting to multiply by the volume."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a disadvantage of genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot produce useful proteins" },
              { id: "b", text: "It is always cheaper than conventional methods" },
              { id: "c", text: "It requires no specialist equipment" },
              { id: "d", text: "Unknown long-term effects on health and ecosystems" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "GE concerns", statement: "Long-term effects are uncertain — a key disadvantage." },
            ],
            steps: [
              { reasoning: "Identify the valid disadvantage.", working: "\\text{unknown effects}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Unknown long-term effects on health and ecosystems",
            commonErrors: ["Choosing (c) — GE is specifically used to produce proteins like insulin."],
          },
        },
        {
          id: "cieb-u11-genetic-engineering-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how genetic engineering could be used in gene therapy to treat a genetic disorder.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gene therapy", statement: "Insert a normal copy of a faulty gene so cells produce functional protein." },
            ],
            steps: [
              { reasoning: "Identify the faulty gene causing the disorder.", working: "\\text{faulty gene}", marks: 1, markCode: "M" },
              { reasoning: "Obtain a normal copy of the gene.", working: "\\text{normal gene}", marks: 1, markCode: "M" },
              { reasoning: "Insert the normal gene into the patient's cells using a vector.", working: "\\text{vector delivery}", marks: 1, markCode: "M" },
              { reasoning: "Cells produce functional protein → disorder treated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The faulty gene is identified, a normal copy is inserted into the patient's cells using a vector, and the cells then produce the functional protein needed, treating the disorder.",
            commonErrors: ["Describing insulin production — gene therapy targets the patient's own cells."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u11-biotech-notes",
      title: "Biotechnology — revision notes",
      summary: "Fermentation, antibiotics, genetic engineering, industrial enzymes.",
      sections: [
        {
          heading: "Fermentation",
          body: "Yeast anaerobic → ethanol + CO₂ (bread, beer). Lactic acid bacteria → yoghurt/cheese. Fermenter: sterile, optimal temp/pH, nutrients, correct O₂ level.",
        },
        {
          heading: "Genetic engineering",
          body: "Gene → plasmid → bacteria → product (insulin). GM crops: pest resistance, herbicide tolerance. Immobilised enzymes: reusable for industry.",
        },
        {
          heading: "Exam technique",
          body: "- Fermenter conditions: sterile + optimal temp/pH are the key exam points.\n- GE questions: isolate gene → vector → host → product.\n- Penicillin: Penicillium mould in fermenter → antibiotic extracted.",
        },
      ],
    },
  ],
};
