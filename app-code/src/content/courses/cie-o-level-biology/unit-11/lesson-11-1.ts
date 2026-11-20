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
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Hydrogen" },
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
              { id: "a", text: "Direct manipulation of genes to produce desired traits" },
              { id: "b", text: "Breeding animals selectively" },
              { id: "c", text: "Cloning organisms" },
              { id: "d", text: "Natural selection" },
            ],
            correctChoiceId: "a",
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
