import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "geo-u5-lesson-5-2",
  code: "5-2",
  title: "Agricultural Systems and Intensification",
  goal: "I CAN compare subsistence and commercial agriculture and evaluate intensification, including GMOs.",
  standards: ["Paper 1", "Paper 2", "Food and agriculture"],
  vocabulary: [
    { term: "Subsistence agriculture", definition: "Farming primarily for family consumption — low inputs, low yields, mostly in LICs." },
    { term: "Commercial agriculture", definition: "Farming for profit and market sale — high inputs, high yields, mechanised." },
    { term: "Intensive agriculture", definition: "High inputs (labour, capital, chemicals) per unit land — high output." },
    { term: "Extensive agriculture", definition: "Low inputs per unit land — large areas, lower yields (ranching, dryland farming)." },
    { term: "GMO", definition: "Genetically modified organism — crop engineered for traits like pest resistance or drought tolerance." },
    { term: "Monoculture", definition: "Single crop over large areas — efficient but ecologically vulnerable." },
  ],
  concepts: [
    {
      id: "geo-u5-ag-systems",
      title: "Agricultural systems",
      skill: "Compare subsistence and commercial agriculture across input levels, yields, markets and geography.",
      lesson: {
        sections: [
          {
            heading: "Subsistence agriculture",
            body: "Subsistence farmers grow food mainly for family consumption using family labour, minimal inputs and traditional methods. Yields are low but risk is diversified through crop variety. Dominant in sub-Saharan Africa and parts of Asia. Examples: shifting cultivation (slash-and-burn), pastoral nomadism, wet-rice farming. Supports ~2 billion people but often leaves farmers in poverty.",
          },
          {
            heading: "Commercial agriculture",
            body: "Commercial farming produces for market profit using high inputs: machinery, fertilisers, pesticides, irrigation and hired labour. Specialised in cash crops (coffee, cotton, wheat) or livestock. Concentrated in HICs (US, EU) and emerging economies (Brazil, Argentina). Highly productive but environmentally costly — monocultures, soil depletion, emissions.",
          },
          {
            heading: "Intensification vs extensification",
            body: "**Intensive** agriculture gets high output per hectare through inputs — commercial farms, market gardens. **Extensive** agriculture uses large areas with low inputs — ranching, dryland cereals. As population grows, intensification is seen as necessary, but raises sustainability questions.",
          },
        ],
        keyFormulas: [
          { name: "Subsistence", statement: "Family labour + low inputs + food for consumption" },
          { name: "Commercial", statement: "Hired labour + high inputs + cash crops for market" },
          { name: "Intensive vs extensive", statement: "High input/ha vs large area/low input" },
        ],
        workedExample: {
          problem: "Distinguish intensive from extensive agriculture with examples.",
          solution: "Intensive: high inputs per hectare — fertilisers, irrigation, machinery — producing high yields on small areas (market gardens, dairy). Extensive: low inputs over large areas — natural pasture, rain-fed cereals — producing lower yields per hectare but over vast land (Australian sheep stations, US dryland wheat).",
        },
      },
      questions: [
        {
          id: "geo-u5-aq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Subsistence agriculture primarily produces food for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Export markets" },
              { id: "b", text: "Industrial processing" },
              { id: "c", text: "Family consumption" },
              { id: "d", text: "Animal feed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subsistence agriculture", statement: "Farming primarily for family/household consumption, not for sale." },
            ],
            steps: [
              { reasoning: "Subsistence means producing for own consumption.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Family consumption",
            commonErrors: ["Confusing subsistence with commercial — the defining feature is consumption vs sale."],
          },
        },
        {
          id: "geo-u5-aq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two characteristics of commercial agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Commercial agriculture", statement: "High inputs, mechanisation, specialisation, hired labour, cash crops for market." },
            ],
            steps: [
              { reasoning: "High inputs: machinery, fertilisers, pesticides, irrigation per hectare.", marks: 1, markCode: "M" },
              { reasoning: "Specialisation in cash crops or livestock for market sale.", marks: 1, markCode: "M" },
              { reasoning: "Hired labour and capital investment distinguish it from subsistence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High inputs, mechanisation, specialisation, market orientation, hired labour.",
            commonErrors: ["Listing subsistence characteristics — keep the contrast clear."],
          },
        },
        {
          id: "geo-u5-aq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why subsistence agriculture persists in many parts of sub-Saharan Africa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsistence persistence", statement: "Poverty, poor infrastructure, land tenure issues and risk aversion maintain subsistence farming despite low incomes." },
            ],
            steps: [
              { reasoning: "Poverty limits access to inputs (seeds, fertiliser, machinery) needed for commercialisation.", marks: 1, markCode: "M" },
              { reasoning: "Poor roads and markets make selling surplus uneconomic — transport costs exceed returns.", marks: 1, markCode: "M" },
              { reasoning: "Insecure land tenure discourages long-term investment in productivity.", marks: 1, markCode: "R" },
              { reasoning: "Cultural traditions and risk aversion favour diversified subsistence over market dependence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poverty, poor infrastructure, insecure tenure and risk aversion sustain subsistence farming.",
            commonErrors: ["Simplistic 'poverty' answer — explain the mechanisms keeping farmers subsistence."],
          },
        },
        {
          id: "geo-u5-aq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the characteristics and geography of a named agricultural system.",
          parts: [
            { label: "a", prompt: "Identify the named system (subsistence or commercial).", marks: 2 },
            { label: "b", prompt: "Describe its inputs, outputs and geography.", marks: 3 },
            { label: "c", prompt: "Evaluate its sustainability and future prospects.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Agricultural systems", statement: "Systems vary by inputs, outputs, market orientation and geography; sustainability depends on balancing productivity with environmental limits." },
            ],
            steps: [
              { part: "a", reasoning: "Named system (e.g. subsistence rice, commercial wheat, pastoralism).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correctly classified as subsistence or commercial.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inputs described: labour, capital, land, technology.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Outputs: crop type, yield, destination (consumption/market).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Geographic location and environmental setting described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sustainability issue identified (soil, water, biodiversity, emissions).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs current productivity vs long-term viability.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on prospects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named system. (b) Inputs/outputs/geography. (c) Sustainability evaluated.",
            commonErrors: ["Generic description without place-specific detail."],
          },
        },
        {
          id: "geo-u5-aq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Subsistence agriculture is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Family labour, low inputs and production mainly for consumption" },
              { id: "b", text: "High mechanisation and cash crops for export" },
              { id: "c", text: "Complete reliance on hired seasonal labour" },
              { id: "d", text: "Large-scale monoculture on commercial estates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subsistence agriculture", statement: "Family labour + minimal inputs + output primarily for household consumption." },
            ],
            steps: [
              { reasoning: "Subsistence = self-provisioning with family labour and low inputs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Family labour + low inputs + consumption",
            commonErrors: ["Confusing subsistence with commercial farming."],
          },
        },
        {
          id: "geo-u5-aq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Commercial agriculture differs from subsistence farming mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces for market profit using high inputs and hired labour" },
              { id: "b", text: "Uses only family labour" },
              { id: "c", text: "Grows only food crops" },
              { id: "d", text: "Requires no capital investment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Commercial vs subsistence", statement: "Commercial = market-oriented, high inputs, hired labour, specialised cash crops." },
            ],
            steps: [
              { reasoning: "Commercial farming is profit-driven with high inputs and hired labour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Market profit + high inputs",
            commonErrors: ["Listing only crop differences rather than the production logic."],
          },
        },
        {
          id: "geo-u5-aq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Shifting cultivation (slash-and-burn) is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pastoral commercial ranching" },
              { id: "b", text: "Intensive market gardening" },
              { id: "c", text: "Subsistence agriculture" },
              { id: "d", text: "Commercial plantation agriculture" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Shifting cultivation", statement: "Slash-and-burn rotational farming for subsistence — low inputs, family labour." },
            ],
            steps: [
              { reasoning: "Shifting cultivation is a subsistence system with low inputs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Subsistence",
            commonErrors: ["Associating slash-and-burn with commercial clearing for plantations."],
          },
        },
        {
          id: "geo-u5-aq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Intensive agriculture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pastoralism on natural rangeland" },
              { id: "b", text: "High inputs per hectare producing high yields on smaller areas" },
              { id: "c", text: "Farming with no chemical inputs" },
              { id: "d", text: "Low input farming over vast areas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intensive agriculture", statement: "High inputs (fertiliser, irrigation, machinery) per hectare → high output per unit area." },
            ],
            steps: [
              { reasoning: "Intensity is measured by input/output per hectare.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** High input per hectare",
            commonErrors: ["Confusing intensive with extensive farming."],
          },
        },
        {
          id: "geo-u5-aq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why might extensive agriculture persist despite lower yields per hectare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is more profitable per hectare than intensive" },
              { id: "b", text: "It requires no land at all" },
              { id: "c", text: "It suits land-abundant regions where land is cheap and inputs costly" },
              { id: "d", text: "It always produces higher total output per farm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extensive logic", statement: "Extensive suits land-abundant, input-scarce regions — low yield per hectare but viable total output." },
            ],
            steps: [
              { reasoning: "Where land is plentiful and capital scarce, extensive is rational.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Land-abundant, input-scarce regions",
            commonErrors: ["Judging extensive solely on per-hectare yield."],
          },
        },
        {
          id: "geo-u5-aq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Subsistence agriculture supports approximately how many people worldwide?",
          response: { type: "numeric", parts: [{ label: "People supported (billions)", answer: 2, tolerance: 0.3, unit: "billion" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Subsistence population", statement: "Subsistence farming supports ~2 billion people, mainly in sub-Saharan Africa and Asia." },
            ],
            steps: [
              { reasoning: "Recall the population dependent on subsistence farming.", working: "2 \\text{ billion}", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 2$ billion.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 2$ billion people",
            commonErrors: ["Confusing subsistence farmers with all agricultural workers."],
          },
        },
        {
          id: "geo-u5-aq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A commercial farm produces 8 tonnes of wheat per hectare while a subsistence farm produces 2 tonnes per hectare on the same soil. What is the yield ratio (commercial : subsistence)?",
          response: { type: "numeric", parts: [{ label: "Yield ratio", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Yield comparison", statement: "Yield ratio $= \\frac{\\text{commercial yield}}{\\text{subsistence yield}}$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "8 : 2", marks: 1, markCode: "M" },
              { reasoning: "Simplify by dividing by 2.", working: "\\frac{8}{2} = 4", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 4 : 1$.", working: "4 : 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4 : 1$",
            commonErrors: ["Reporting the difference (6 t/ha) rather than the ratio."],
          },
        },
        {
          id: "geo-u5-aq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Pastoral nomadism is best classified as:",
          response: { type: "numeric", parts: [{ label: "System type (1=subsistence, 2=commercial)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Pastoral nomadism", statement: "Mobile livestock herding for subsistence — low inputs, family labour, consumption-oriented." },
            ],
            steps: [
              { reasoning: "Nomadic pastoralism produces mainly for household consumption.", working: "subsistence", marks: 1, markCode: "M" },
              { reasoning: "Type = subsistence (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subsistence (1)",
            commonErrors: ["Confusing nomadic pastoralism with commercial ranching."],
          },
        },
        {
          id: "geo-u5-aq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A region has 500,000 subsistence farm households each farming 2 hectares. What is the total area farmed (in hectares)?",
          response: { type: "numeric", parts: [{ label: "Total farmed area (hectares)", answer: 1000000, tolerance: 0, unit: "ha" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Total area", statement: "Total area $= \\text{households} \\times \\text{area per farm}$." },
            ],
            steps: [
              { reasoning: "Multiply households by area per farm.", working: "500{,}000 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Total $= 1{,}000{,}000$ hectares.", working: "1{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "$1$ million hectares farmed in total.", working: "10^6 \\text{ ha}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1{,}000{,}000$ hectares ($1$ million ha)",
            commonErrors: ["Multiplying by the wrong number of households or area."],
          },
        },
        {
          id: "geo-u5-aq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which combination best characterises commercial agriculture's geography?",
          response: { type: "numeric", parts: [{ label: "Region code (1=HICs + emerging economies, 2=only remote deserts, 3=only equatorial rainforests, 4=only small islands)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Commercial agriculture geography", statement: "Concentrated in HICs (US, EU) and emerging economies (Brazil, Argentina) with capital and infrastructure." },
            ],
            steps: [
              { reasoning: "Commercial farming needs capital, infrastructure and markets — found in HICs and emerging economies.", working: "HICs + emerging", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HICs + emerging economies (1)",
            commonErrors: ["Locating commercial agriculture only in remote or marginal areas."],
          },
        },
        {
          id: "geo-u5-aq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If subsistence farms average 1.5 tonnes/ha and commercial farms average 6 tonnes/ha, how many hectares of subsistence land would be needed to match the output of 1 hectare of commercial land?",
          response: { type: "numeric", parts: [{ label: "Hectares needed", answer: 4, tolerance: 0, unit: "ha" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Land equivalence", statement: "Hectares needed $= \\frac{\\text{commercial yield}}{\\text{subsistence yield}}$." },
            ],
            steps: [
              { reasoning: "Ratio of yields: $6 / 1.5 = 4$.", working: "\\frac{6}{1.5} = 4", marks: 1, markCode: "M" },
              { reasoning: "Need $4$ ha of subsistence land for the output of $1$ ha commercial.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Land equivalence is $4$ hectares.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ hectares",
            commonErrors: ["Inverting the ratio and getting 0.25 ha."],
          },
        },
        {
          id: "geo-u5-aq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Compare subsistence and commercial agricultural systems in a named region.",
          parts: [
            { label: "a", prompt: "Identify the region and describe one subsistence system there.", marks: 2 },
            { label: "b", prompt: "Describe the commercial system (if present) or explain why subsistence dominates.", marks: 3 },
            { label: "c", prompt: "Evaluate the relative sustainability of the two systems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Agricultural systems", statement: "Subsistence (low input, consumption) vs commercial (high input, market) differ in labour, inputs, output and environmental impact." },
            ],
            steps: [
              { part: "a", reasoning: "Named region identified with a subsistence system described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate subsistence characteristics given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Commercial system described or dominance of subsistence explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inputs, labour and market orientation contrasted.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison accurately applied to the region.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Environmental comparison: inputs, monoculture, soil impact.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Social comparison: livelihoods, food security, equity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Region + subsistence system. (b) Commercial contrast. (c) Sustainability evaluated.",
            commonErrors: ["Generic comparison without place-specific detail."],
          },
        },
      ],
    },
    {
      id: "geo-u5-intensification-gmo",
      title: "Intensification and GMOs",
      skill: "Evaluate agricultural intensification, including GMOs, and their environmental and social implications.",
      lesson: {
        sections: [
          {
            heading: "Intensification",
            body: "Intensification raises yields per hectare through fertilisers, irrigation, pesticides, improved varieties and mechanisation. The **Green Revolution** fed billions but caused soil depletion, water pollution, pesticide resistance and biodiversity loss. Newer approaches (**sustainable intensification**) aim to raise yields while reducing environmental harm.",
          },
          {
            heading: "Genetically modified organisms",
            body: "**GMOs** are engineered for traits: pest resistance (Bt cotton), herbicide tolerance (Roundup Ready soy), drought tolerance, enhanced nutrition (Golden Rice). Benefits: higher yields, reduced pesticide use, drought resilience. Concerns: unknown long-term effects, corporate control of seeds, gene flow to wild relatives, loss of traditional varieties.",
          },
          {
            heading: "Debate and regulation",
            body: "GMO adoption varies: widespread in the US, Brazil, Argentina; restricted in EU; banned in some countries. Regulation requires safety testing and labelling. Critics argue GMOs entrench industrial agriculture; supporters cite yield gains feeding growing populations. The debate centres on precaution vs potential.",
          },
        ],
        keyFormulas: [
          { name: "Intensification", statement: "Higher inputs per hectare → higher yields, higher environmental cost" },
          { name: "GMO traits", statement: "Pest resistance, herbicide tolerance, drought tolerance, nutrition" },
          { name: "Sustainable intensification", statement: "Raise yields while reducing environmental harm" },
        ],
        workedExample: {
          problem: "Evaluate the benefits and risks of GM crops.",
          solution: "Benefits: higher yields with less pesticide, drought tolerance helping climate adaptation, potential nutritional enhancement. Risks: unknown long-term health/environmental effects, corporate seed control reducing farmer autonomy, gene flow, erosion of agrobiodiversity. Evidence suggests current GMOs are safe but long-term monitoring and regulation are needed.",
        },
      },
      questions: [
        {
          id: "geo-u5-gq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A common trait engineered into GM crops is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ability to grow without water" },
              { id: "b", text: "Larger fruit size only" },
              { id: "c", text: "Resistance to all diseases" },
              { id: "d", text: "Pest resistance or herbicide tolerance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "GMO traits", statement: "Pest resistance (Bt), herbicide tolerance, drought tolerance, enhanced nutrition." },
            ],
            steps: [
              { reasoning: "Main GMO traits are pest resistance and herbicide tolerance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pest resistance or herbicide tolerance",
            commonErrors: ["Overstating claims — GMOs don't grow without water or resist all diseases."],
          },
        },
        {
          id: "geo-u5-gq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two benefits of agricultural intensification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intensification benefits", statement: "Higher yields per hectare, feeding growing populations, economic efficiency." },
            ],
            steps: [
              { reasoning: "Higher yields per hectare feed more people from less land.", marks: 1, markCode: "M" },
              { reasoning: "Green Revolution varieties dramatically increased cereal production in Asia.", marks: 1, markCode: "M" },
              { reasoning: "Efficient production lowers food prices and improves food security.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher yields, food security, economic efficiency.",
            commonErrors: ["Ignoring the environmental costs — acknowledge both sides."],
          },
        },
        {
          id: "geo-u5-gq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the environmental costs of agricultural intensification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensification costs", statement: "Fertiliser/pesticide pollution, water depletion, soil degradation, biodiversity loss, GHG emissions." },
            ],
            steps: [
              { reasoning: "Synthetic fertilisers and pesticides pollute waterways causing eutrophication.", marks: 1, markCode: "M" },
              { reasoning: "Irrigation depletes aquifers; monocultures degrade soil and reduce biodiversity.", marks: 1, markCode: "M" },
              { reasoning: "Pesticide overuse creates resistance; machinery and chemicals emit GHGs.", marks: 1, markCode: "R" },
              { reasoning: "Green Revolution gains came with significant environmental debt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollution, water depletion, soil degradation, biodiversity loss, emissions.",
            commonErrors: ["Listing only yield benefits — intensification has real environmental costs."],
          },
        },
        {
          id: "geo-u5-gq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the debate over GM crops in a named country or region.",
          parts: [
            { label: "a", prompt: "Identify the named country/region and its GM policy.", marks: 2 },
            { label: "b", prompt: "Explain two arguments for and two against GM crops there.", marks: 4 },
            { label: "c", prompt: "Evaluate the overall position on GM adoption.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "GMO debate", statement: "GMOs offer yield and resilience benefits but raise health, environmental and corporate control concerns — context determines the balance." },
            ],
            steps: [
              { part: "a", reasoning: "Named country (e.g. USA, EU, India) with accurate GM policy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Policy described (permitted, restricted, banned, labelling).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For: higher yields, reduced pesticides, drought tolerance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For: food security, economic benefits to farmers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Against: unknown long-term effects, gene flow, biodiversity loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Against: corporate control, farmer dependency, ethical concerns.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced evaluation of evidence and context.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named country + policy. (b) For/against arguments. (c) Overall judgement.",
            commonErrors: ["One-sided argument — must present both sides."],
          },
        },
        {
          id: "geo-u5-gq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Agricultural intensification refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raising yields per hectare through higher inputs" },
              { id: "b", text: "Expanding farmland into new areas" },
              { id: "c", text: "Switching entirely to organic methods" },
              { id: "d", text: "Reducing all chemical use" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intensification", statement: "Increasing output per hectare via fertilisers, irrigation, pesticides, improved varieties and mechanisation." },
            ],
            steps: [
              { reasoning: "Intensification raises yield per unit area through inputs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Higher yields per hectare",
            commonErrors: ["Confusing intensification (more inputs/ha) with extensification (more land)."],
          },
        },
        {
          id: "geo-u5-gq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A GMO (genetically modified organism) crop is engineered to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace all conventional breeding" },
              { id: "b", text: "Grow only in tropical climates" },
              { id: "c", text: "Express desirable traits such as pest resistance or drought tolerance" },
              { id: "d", text: "Require no water or soil" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "GMO", statement: "Organism genetically engineered for traits like pest resistance (Bt), herbicide tolerance, drought tolerance or nutrition." },
            ],
            steps: [
              { reasoning: "GMOs are modified to express specific beneficial traits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Engineered desirable traits",
            commonErrors: ["Thinking GMOs are grown without any inputs or conditions."],
          },
        },
        {
          id: "geo-u5-gq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Bt cotton is modified to be resistant to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insect pests" },
              { id: "b", text: "Frost" },
              { id: "c", text: "Herbicides only" },
              { id: "d", text: "Drought" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Bt cotton", statement: "Contains a bacterial gene producing insecticidal protein — pest resistance reducing pesticide use." },
            ],
            steps: [
              { reasoning: "Bt cotton resists insect pests via bacterial toxin gene.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Insect pests",
            commonErrors: ["Confusing pest resistance with herbicide tolerance."],
          },
        },
        {
          id: "geo-u5-gq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Roundup Ready soy is an example of a crop engineered for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enhanced vitamin content" },
              { id: "b", text: "Herbicide tolerance" },
              { id: "c", text: "Longer shelf life only" },
              { id: "d", text: "Insect resistance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Roundup Ready", statement: "Herbicide-tolerant soy allowing broad-spectrum weed control." },
            ],
            steps: [
              { reasoning: "Roundup Ready tolerates glyphosate herbicide.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Herbicide tolerance",
            commonErrors: ["Confusing herbicide tolerance with pest resistance."],
          },
        },
        {
          id: "geo-u5-gq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A major environmental concern with herbicide-tolerant GM crops is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They may increase herbicide use and select for resistant weeds" },
              { id: "b", text: "They eliminate all pesticide use permanently" },
              { id: "c", text: "They cannot be grown commercially" },
              { id: "d", text: "They only work in deserts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Herbicide resistance risk", statement: "Tolerance traits can lead to heavier herbicide application and evolved resistant weeds." },
            ],
            steps: [
              { reasoning: "Herbicide-tolerant crops can escalate chemical use and resistance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increased herbicide use + resistance",
            commonErrors: ["Assuming GMOs always reduce chemical inputs."],
          },
        },
        {
          id: "geo-u5-gq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Golden Rice was developed to address:",
          response: { type: "numeric", parts: [{ label: "Target deficiency (1=vitamin A, 2=iron, 3=protein, 4=calcium)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Golden Rice", statement: "GM rice biofortified with beta-carotene to combat vitamin A deficiency." },
            ],
            steps: [
              { reasoning: "Golden Rice targets vitamin A deficiency.", working: "vitamin A", marks: 1, markCode: "M" },
              { reasoning: "Target = vitamin A (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vitamin A deficiency (1)",
            commonErrors: ["Confusing biofortification targets."],
          },
        },
        {
          id: "geo-u5-gq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A Green Revolution wheat variety yields 4 tonnes/ha versus 1.5 tonnes/ha for traditional varieties. What is the yield increase as a percentage?",
          response: { type: "numeric", parts: [{ label: "Yield increase (%)", answer: 166.7, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Yield gain", statement: "Gain $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Difference $= 4 - 1.5 = 2.5$ t/ha.", working: "4 - 1.5 = 2.5", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= 2.5 / 1.5 = 1.667$.", working: "\\frac{2.5}{1.5} = 1.667", marks: 1, markCode: "M" },
              { reasoning: "Yield increase $\\approx 166.7\\%$.", working: "166.7\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 167\\%$ increase",
            commonErrors: ["Dividing by the new yield instead of the traditional one."],
          },
        },
        {
          id: "geo-u5-gq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "GMO adoption is most widespread in which group of countries?",
          response: { type: "numeric", parts: [{ label: "Region code (1=US/Brazil/Argentina, 2=EU, 3=all of Africa, 4=Japan only)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "GMO geography", statement: "Widespread in US, Brazil, Argentina; restricted in EU; banned in some countries." },
            ],
            steps: [
              { reasoning: "Major adopters are the US, Brazil and Argentina.", working: "US/Brazil/Argentina", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "US, Brazil, Argentina (1)",
            commonErrors: ["Assuming uniform global adoption."],
          },
        },
        {
          id: "geo-u5-gq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A farm applies 5 kg/ha of pesticide on conventional cotton but only 2 kg/ha on Bt cotton. If the farm has 200 ha, how many kg of pesticide are saved by using Bt cotton?",
          response: { type: "numeric", parts: [{ label: "Pesticide saved (kg)", answer: 600, tolerance: 0, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Input saving", statement: "Saving $= (\\text{conventional} - \\text{GM}) \\times \\text{area}$." },
            ],
            steps: [
              { reasoning: "Difference per ha $= 5 - 2 = 3$ kg.", working: "5 - 2 = 3", marks: 1, markCode: "M" },
              { reasoning: "Multiply by area: $3 \\times 200$.", working: "3 \\times 200 = 600", marks: 1, markCode: "M" },
              { reasoning: "Pesticide saved $= 600$ kg.", working: "600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600$ kg",
            commonErrors: ["Multiplying the total conventional use by area twice."],
          },
        },
        {
          id: "geo-u5-gq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Gene flow from GM crops to wild relatives is a concern because it:",
          response: { type: "numeric", parts: [{ label: "Concern code (1=transgenes may spread into wild populations, 2=increases crop yield directly, 3=reduces need for water, 4=improves soil fertility)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gene flow", statement: "Transgenes can spread to wild relatives via cross-pollination, with unpredictable ecological effects." },
            ],
            steps: [
              { reasoning: "Gene flow transfers engineered traits into wild gene pools.", working: "gene flow", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transgenes spreading to wild populations (1)",
            commonErrors: ["Confusing gene flow with normal yield benefits."],
          },
        },
        {
          id: "geo-u5-gq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If sustainable intensification raises yields by 25% on existing land, how many additional hectares of new farmland would be avoided if the country needs 4 million tonnes of output from farms averaging 5 tonnes/ha?",
          response: { type: "numeric", parts: [{ label: "Hectares avoided (million)", answer: 0.2, tolerance: 0.01, unit: "million ha" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Land spared", statement: "Land spared $= \\frac{\\text{output}}{\\text{yield}} \\times \\text{yield gain share}$." },
            ],
            steps: [
              { reasoning: "Land needed without gain: $4 / 5 = 0.8$ million ha.", working: "\\frac{4}{5} = 0.8", marks: 1, markCode: "M" },
              { reasoning: "With 25% higher yield: $4 / 6.25 = 0.64$ million ha.", working: "\\frac{4}{6.25} = 0.64", marks: 1, markCode: "M" },
              { reasoning: "Land spared $= 0.8 - 0.64 = 0.16$ million ha $\\approx 0.2$ million ha.", working: "0.16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.16$ million ha ($160{,}000$ ha) spared",
            commonErrors: ["Applying the 25% gain to land area directly rather than yield."],
          },
        },
        {
          id: "geo-u5-gq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the benefits and risks of genetically modified crops.",
          parts: [
            { label: "a", prompt: "Describe two benefits of GM crops with examples.", marks: 3 },
            { label: "b", prompt: "Describe two risks or concerns with examples.", marks: 3 },
            { label: "c", prompt: "Reach a justified conclusion on GM crop adoption.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "GM debate", statement: "GMOs offer yield/pesticide/nutrition gains but raise health, ecological and equity concerns — precaution vs potential." },
            ],
            steps: [
              { part: "a", reasoning: "Benefit 1: higher yields or reduced pesticide (e.g. Bt cotton).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Benefit 2: drought tolerance or nutrition (Golden Rice).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Benefits accurately exemplified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Risk 1: unknown long-term effects or gene flow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk 2: corporate seed control or biodiversity loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risks accurately exemplified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Balanced judgement weighing evidence for and against.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion mentions regulation/monitoring or context-dependence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two benefits. (b) Two risks. (c) Justified conclusion.",
            commonErrors: ["One-sided argument — must present both benefits and risks."],
          },
        },
      ],
    },
  ],
};
