import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "olbio-u11-lesson-11-1",
  code: "11-1",
  title: "Biotechnology",
  goal: "I CAN describe the use of microorganisms and enzymes in biotechnology: fermentation, antibiotics and genetic engineering.",
  standards: ["5090 11.1", "5090 11.2"],
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
      id: "olbio-u11-fermentation",
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
          id: "olbio-u11-fermentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What gas produced during bread-making makes dough rise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u11-fermentation-q2",
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
          id: "olbio-u11-fermentation-q3",
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
          id: "olbio-u11-fermentation-q4",
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
          id: "olbio-u11-fermentation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of yeast fermentation used in brewing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol and carbon dioxide" },
              { id: "b", text: "Oxygen and glucose" },
              { id: "c", text: "Protein and fat" },
              { id: "d", text: "Lactic acid and water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Yeast fermentation", statement: "Anaerobic yeast respiration produces ethanol and CO₂." },
            ],
            steps: [
              { reasoning: "Recall the products.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ethanol and carbon dioxide",
            commonErrors: ["Choosing lactic acid — that is yoghurt/cheese fermentation."],
          },
        },
        {
          id: "olbio-u11-fermentation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which microorganisms are used to make yoghurt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penicillium mould" },
              { id: "b", text: "Lactic acid bacteria" },
              { id: "c", text: "Photosynthetic algae" },
              { id: "d", text: "Yeast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Yoghurt production", statement: "Lactic acid bacteria ferment lactose to produce yoghurt." },
            ],
            steps: [
              { reasoning: "Recall the organism used.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Lactic acid bacteria",
            commonErrors: ["Choosing yeast — that makes ethanol/CO₂ for bread and beer."],
          },
        },
        {
          id: "olbio-u11-fermentation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organism produces penicillin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Escherichia coli" },
              { id: "b", text: "Lactobacillus" },
              { id: "c", text: "Saccharomyces yeast" },
              { id: "d", text: "Penicillium mould" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Penicillin", statement: "Penicillin is produced by Penicillium mould." },
            ],
            steps: [
              { reasoning: "Recall the source organism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Penicillium mould",
            commonErrors: ["Choosing bacteria used for insulin — penicillin comes from mould."],
          },
        },
        {
          id: "olbio-u11-fermentation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are antibiotics not used to treat viral infections?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Viruses are destroyed by sunlight" },
              { id: "b", text: "Antibiotics kill human cells first" },
              { id: "c", text: "Viruses are too large for antibiotics" },
              { id: "d", text: "Antibiotics target bacterial processes, not viruses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotics", statement: "Antibiotics inhibit bacteria; viruses are not affected in the same way." },
            ],
            steps: [
              { reasoning: "Recall antibiotic specificity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Antibiotics target bacterial processes, not viruses",
            commonErrors: ["Thinking antibiotics work on all pathogens."],
          },
        },
        {
          id: "olbio-u11-fermentation-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why must a fermenter be kept sterile during antibiotic production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To cool the fermenter" },
              { id: "b", text: "To make the product taste better" },
              { id: "c", text: "To increase oxygen supply" },
              { id: "d", text: "To prevent contaminating microbes competing for nutrients or spoiling the product" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sterile fermentation", statement: "Contaminants compete for nutrients and may degrade the product." },
            ],
            steps: [
              { reasoning: "Recall the reason for sterility.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To prevent contaminating microbes competing for nutrients or spoiling the product",
            commonErrors: ["Choosing taste — sterility is about purity and yield."],
          },
        },
        {
          id: "olbio-u11-fermentation-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Three fermentation batches produce 240 g of product in total. Calculate the average mass per batch.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total / number of batches." },
            ],
            steps: [
              { reasoning: "Divide total mass by batches.", working: "240 / 3 = 80", marks: 1, markCode: "M" },
            ],
            finalAnswer: "80 g",
            commonErrors: ["Multiplying by 3 instead of dividing."],
          },
        },
        {
          id: "olbio-u11-fermentation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A brewery fills 600 bottles from 750 L of wort. Calculate the average volume per bottle.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.25, unit: "L" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average volume", statement: "Average = total volume / number of bottles." },
            ],
            steps: [
              { reasoning: "Divide volume by bottles.", working: "750 / 600 = 1.25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1.25 L",
            commonErrors: ["Dividing bottles by litres — invert the calculation."],
          },
        },
        {
          id: "olbio-u11-fermentation-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Five fermenters each produce 45 kg of penicillin. Calculate the total mass produced.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 225, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total yield", statement: "Total = per fermenter × number of fermenters." },
            ],
            steps: [
              { reasoning: "Multiply yield by fermenter number.", working: "45 × 5 = 225", marks: 1, markCode: "M" },
            ],
            finalAnswer: "225 kg",
            commonErrors: ["Adding instead of multiplying when each fermenter has the same yield."],
          },
        },
        {
          id: "olbio-u11-fermentation-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Of the 225 kg of penicillin produced, 60 kg is used for testing. Calculate the mass remaining for sale.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 165, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining mass", statement: "Remaining = produced − used." },
            ],
            steps: [
              { reasoning: "Subtract the test amount.", working: "225 - 60 = 165", marks: 1, markCode: "M" },
            ],
            finalAnswer: "165 kg",
            commonErrors: ["Adding 60 kg instead of subtracting."],
          },
        },
        {
          id: "olbio-u11-fermentation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bread dough produces 25 cm³ of CO₂ per 100 g of flour. Calculate the CO₂ produced from 400 g of flour.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gas production", statement: "CO₂ = rate per mass × mass of flour." },
            ],
            steps: [
              { reasoning: "Scale the rate to 400 g.", working: "25 × 4 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 cm³",
            commonErrors: ["Using 25 cm³ directly for 400 g."],
          },
        },
        {
          id: "olbio-u11-fermentation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process is anaerobic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Osmosis" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Aerobic respiration" },
              { id: "d", text: "Alcoholic fermentation by yeast" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermentation", statement: "Fermentation occurs without oxygen." },
            ],
            steps: [
              { reasoning: "Identify the oxygen-free process.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Alcoholic fermentation by yeast",
            commonErrors: ["Choosing aerobic respiration — it requires oxygen."],
          },
        },
        {
          id: "olbio-u11-fermentation-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the conditions needed in a fermenter for industrial antibiotic production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fermenter conditions", statement: "Sterile, optimal temperature/pH, nutrients and correct oxygen level." },
            ],
            steps: [
              { reasoning: "Keep conditions sterile to prevent contamination.", working: "\\text{sterile}", marks: 1, markCode: "M" },
              { reasoning: "Maintain optimal temperature and pH for the mould.", working: "\\text{temp/pH}", marks: 1, markCode: "M" },
              { reasoning: "Supply nutrients and mix/agitate for growth.", working: "\\text{nutrients}", marks: 1, markCode: "M" },
              { reasoning: "Control oxygen level appropriate to the organism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A fermenter must be sterile, supply nutrients, maintain optimal temperature and pH, agitate for mixing, and provide the correct oxygen level so Penicillium can grow and produce penicillin.",
            commonErrors: ["Saying 'as much oxygen as possible' — the required oxygen level depends on the process."],
          },
        },
      ],
    },
    {
      id: "olbio-u11-genetic-engineering",
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
          id: "olbio-u11-genetic-engineering-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloning organisms" },
              { id: "b", text: "Natural selection" },
              { id: "c", text: "Direct manipulation of genes to produce desired traits" },
              { id: "d", text: "Breeding animals selectively" },
            ],
            correctChoiceId: "c",
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
          id: "olbio-u11-genetic-engineering-q2",
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
          id: "olbio-u11-genetic-engineering-q3",
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
          id: "olbio-u11-genetic-engineering-q4",
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
          id: "olbio-u11-genetic-engineering-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a plasmid in genetic engineering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the host organism" },
              { id: "b", text: "It acts as a vector carrying the desired gene" },
              { id: "c", text: "It kills the host cell" },
              { id: "d", text: "It is the protein product" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasmid vector", statement: "A plasmid carries the inserted gene into the host cell." },
            ],
            steps: [
              { reasoning: "Recall the vector role.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It acts as a vector carrying the desired gene",
            commonErrors: ["Confusing plasmid with host — the host is the bacterium."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is commonly used as the host in insulin production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penicillium mould" },
              { id: "b", text: "Escherichia coli bacterium" },
              { id: "c", text: "Yeast only" },
              { id: "d", text: "Human liver cell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin production", statement: "Genetically modified bacteria such as E. coli produce human insulin." },
            ],
            steps: [
              { reasoning: "Recall the host used.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Escherichia coli bacterium",
            commonErrors: ["Choosing human cells — bacteria are used for production."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which trait is commonly engineered into crop plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production of insulin" },
              { id: "b", text: "Resistance to pests or herbicides" },
              { id: "c", text: "Ability to photosynthesise faster only" },
              { id: "d", text: "Ability to live without water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "GM crops", statement: "GM crops often carry pest resistance or herbicide tolerance." },
            ],
            steps: [
              { reasoning: "Recall common GM traits.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Resistance to pests or herbicides",
            commonErrors: ["Choosing insulin — that is a medical product, not a crop trait."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of immobilised enzymes in industry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cannot be reused" },
              { id: "b", text: "They are always free" },
              { id: "c", text: "They work at any temperature" },
              { id: "d", text: "They can be reused and easily recovered" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Immobilised enzymes", statement: "Immobilisation allows reuse and easy recovery." },
            ],
            steps: [
              { reasoning: "Recall the industrial advantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They can be reused and easily recovered",
            commonErrors: ["Choosing 'cannot be reused' — that is the opposite."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a concern about genetically modified crops?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cannot be grown in fields" },
              { id: "b", text: "Modified genes may spread to wild relatives or have unknown long-term effects" },
              { id: "c", text: "They always increase biodiversity" },
              { id: "d", text: "They produce no food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "GM concerns", statement: "Gene flow and unknown ecological/health effects are concerns." },
            ],
            steps: [
              { reasoning: "Recall a valid concern.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Modified genes may spread to wild relatives or have unknown long-term effects",
            commonErrors: ["Saying GM crops have no benefits — evaluation needs balance."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plasmid has 4000 base pairs and a 500 base-pair gene is inserted. Calculate the size of the recombinant plasmid.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4500, unit: "base pairs" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recombinant size", statement: "New size = original plasmid + insert." },
            ],
            steps: [
              { reasoning: "Add the insert length.", working: "4000 + 500 = 4500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4500 base pairs",
            commonErrors: ["Subtracting the insert instead of adding it."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Of 1000 GM crop plants, 750 are pest-resistant. Calculate the percentage that are pest-resistant.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = resistant / total × 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage.", working: "750/1000 × 100 = 75", marks: 1, markCode: "M" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Using 1000/750 — resistant plants are the numerator."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A culture starts with 50 bacteria and doubles every generation. Calculate the number after three generations.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "bacteria" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Doubling", statement: "Population = initial × 2^generations." },
            ],
            steps: [
              { reasoning: "Apply three doublings.", working: "50 × 2^3 = 400", marks: 1, markCode: "M" },
            ],
            finalAnswer: "400 bacteria",
            commonErrors: ["Adding 50 each generation instead of doubling."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "One immobilised enzyme preparation can be used for 5 batches. How many preparations are needed for 20 batches?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "preparations" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reuse calculation", statement: "Preparations = batches / uses per preparation." },
            ],
            steps: [
              { reasoning: "Divide batches by uses per preparation.", working: "20 / 5 = 4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4 preparations",
            commonErrors: ["Multiplying 20 × 5 — reuse reduces the number needed."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Six fermenters produce 1200 doses of insulin in total. Calculate the average number of doses per fermenter.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "doses" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average yield", statement: "Average = total / number of fermenters." },
            ],
            steps: [
              { reasoning: "Divide total doses by fermenters.", working: "1200 / 6 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 doses",
            commonErrors: ["Multiplying by 6 instead of dividing."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is genetically engineered insulin often cheaper than insulin extracted from animals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no purification" },
              { id: "b", text: "It is produced inside human patients" },
              { id: "c", text: "It is made from sunlight only" },
              { id: "d", text: "Bacteria produce it quickly and cheaply in fermenters" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "GE insulin advantage", statement: "Bacterial production is fast, cheap and consistent." },
            ],
            steps: [
              { reasoning: "Recall the production advantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Bacteria produce it quickly and cheaply in fermenters",
            commonErrors: ["Thinking it needs no purification — it still must be extracted and purified."],
          },
        },
        {
          id: "olbio-u11-genetic-engineering-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the steps used to produce human insulin using genetic engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin production", statement: "Gene → plasmid vector → bacterial host → insulin → extraction." },
            ],
            steps: [
              { reasoning: "Isolate the human insulin gene.", working: "\\text{gene isolated}", marks: 1, markCode: "M" },
              { reasoning: "Insert the gene into a plasmid vector.", working: "\\text{plasmid}", marks: 1, markCode: "M" },
              { reasoning: "Introduce the plasmid into bacteria which reproduce and make insulin.", working: "\\text{host produces}", marks: 1, markCode: "M" },
              { reasoning: "Extract and purify the insulin for medical use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The human insulin gene is isolated, inserted into a bacterial plasmid, the plasmid is put into bacteria, the bacteria reproduce and produce insulin, and the insulin is extracted and purified.",
            commonErrors: ["Using human cells for production — bacteria are the usual host."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u11-biotech-notes",
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
