import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "biohl-u5-lesson-5-3",
  code: "5-3",
  title: "Nutrient Cycles and Ecological Succession",
  goal: "I CAN describe the carbon, nitrogen and phosphorus cycles with their key processes and rates, and explain primary and secondary succession including pioneer species and climax communities.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL C.2", "AHL C.3"],
  vocabulary: [
    { term: "Nutrient cycle", definition: "The movement of an element or compound through the biotic and abiotic components of an ecosystem, e.g. carbon, nitrogen, phosphorus." },
    { term: "Nitrogen fixation", definition: "Conversion of atmospheric $\\text{N}_2$ into usable nitrogen compounds by nitrogen-fixing bacteria or lightning." },
    { term: "Nitrification", definition: "Oxidation of ammonia to nitrite then nitrate by nitrifying bacteria, making nitrogen available to plants." },
    { term: "Denitrification", definition: "Reduction of nitrate back to $\\text{N}_2$ gas by anaerobic bacteria, returning nitrogen to the atmosphere." },
    { term: "Eutrophication", definition: "Excess nutrient enrichment (usually nitrogen or phosphorus) causing algal blooms, deoxygenation and loss of aquatic life." },
    { term: "Succession", definition: "The directional change in community composition over time following disturbance or on bare substrate." },
  ],
  concepts: [
    {
      id: "biohl-u5-nutrient-cycles",
      title: "Carbon, nitrogen and phosphorus cycles",
      skill: "Trace elements through their biogeochemical cycles and quantify key processes such as fixation rates and eutrophication inputs.",
      lesson: {
        sections: [
          {
            heading: "The carbon cycle",
            body: "Carbon moves between atmosphere ($\\text{CO}_2$, about $0.04\\%$ of air), oceans, biomass and fossil fuels. **Photosynthesis** fixes $\\text{CO}_2$ into organic carbon; **respiration** and decomposition return it. The **ocean carbon sink** absorbs roughly a quarter of anthropogenic $\\text{CO}_2$ emissions, while fossil-fuel burning adds carbon faster than natural sinks can absorb it — the cause of rising atmospheric $\\text{CO}_2$ and climate change.",
          },
          {
            heading: "The nitrogen cycle",
            body: "Atmospheric $\\text{N}_2$ ($78\\%$ of air) is unusable by most organisms. **Nitrogen fixation** by Rhizobium in legume root nodules, free-living bacteria and lightning converts it to ammonia ($\\text{NH}_3$) — legume fixation can supply $100-300\\ \\text{kg N ha}^{-1}$ per year, comparable to synthetic fertiliser. **Nitrification** oxidises ammonia to nitrite then nitrate for plant uptake; **assimilation** incorporates it into proteins. Decomposers release ammonia (**ammonification**), and **denitrification** under anaerobic conditions returns $\\text{N}_2$ to the air, completing the cycle.",
          },
          {
            heading: "The phosphorus cycle and eutrophication",
            body: "Unlike carbon and nitrogen, phosphorus has **no gaseous phase**: it cycles through rocks, soil, water and organisms via weathering, absorption, decomposition and sedimentation. Because it is poorly soluble, phosphorus often limits plant growth — which is why phosphorus-based fertilisers boost yields. Runoff of fertilisers and sewage into lakes causes **eutrophication**: algal blooms block light, die and decompose, and bacterial respiration depletes dissolved oxygen, killing fish. Quantitatively, even small phosphorus additions (a few kg per hectare per year) can trigger eutrophication in nutrient-poor waters.",
          },
        ],
        keyFormulas: [
          { name: "Carbon cycle key fluxes", statement: "Photosynthesis fixes $\\text{CO}_2$; respiration and decomposition return it; oceans absorb about $25\\%$ of emissions" },
          { name: "Nitrogen fixation rate", statement: "Legume-Rhizobium systems: about $100-300\\ \\text{kg N ha}^{-1}\\text{ yr}^{-1}$" },
          { name: "Nitrification", statement: "$\\text{NH}_3 \\rightarrow \\text{NO}_2^- \\rightarrow \\text{NO}_3^-$ by nitrifying bacteria" },
        ],
        workedExample: {
          problem: "A lake receives runoff containing $5\\ \\text{kg of phosphorus per hectare}$ from fertilised farmland. Explain the sequence of events leading to fish kills, naming each process.",
          solution: "Phosphorus (the limiting nutrient) stimulates an **algal bloom**. Algae die and are decomposed by bacteria whose **respiration** consumes dissolved oxygen. Oxygen falls below the threshold fish need (**eutrophication**), causing fish kills — even though only a few kg of phosphorus per hectare were added.",
        },
      },
      questions: [
        {
          id: "biohl-u5-nutrient-cycles-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process converts atmospheric nitrogen gas ($\\text{N}_2$) into a form plants can absorb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrification" },
              { id: "b", text: "Nitrogen fixation" },
              { id: "c", text: "Ammonification" },
              { id: "d", text: "Denitrification" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen fixation", statement: "Conversion of $\\text{N}_2$ gas into ammonia or other usable nitrogen compounds by bacteria or lightning." },
            ],
            steps: [
              { reasoning: "Only fixation breaks the triple bond of $\\text{N}_2$ to make it biologically available.", working: "\\text{N}_2 \\rightarrow \\text{NH}_3", marks: 1, markCode: "M" },
              { reasoning: "The other processes transform already-fixed nitrogen compounds.", working: "\\text{fixation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Nitrogen fixation",
            commonErrors: ["Confusing fixation with nitrification — nitrification converts ammonia to nitrate, not $\\text{N}_2$ gas."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why does the phosphorus cycle differ fundamentally from the carbon and nitrogen cycles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phosphorus is recycled by photosynthesis" },
              { id: "b", text: "Phosphorus moves only through the food chain" },
              { id: "c", text: "Phosphorus cannot be absorbed by plants" },
              { id: "d", text: "Phosphorus has no gaseous atmospheric phase; it cycles through rocks, soil and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phosphorus cycle", statement: "A sedimentary cycle with no gaseous phase — phosphorus moves from rock weathering through soil, water and organisms." },
            ],
            steps: [
              { reasoning: "Carbon and nitrogen have atmospheric reservoirs ($\\text{CO}_2$, $\\text{N}_2$) exchanged by gas processes; phosphorus does not.", working: "\\text{no gas phase}", marks: 1, markCode: "M" },
              { reasoning: "Phosphorus enters via rock weathering and leaves via sedimentation — a slower, sedimentary cycle.", working: "\\text{weathering/sedimentation}", marks: 1, markCode: "M" },
              { reasoning: "Option (a) correctly identifies the absence of an atmospheric phase.", working: "\\text{option a}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Phosphorus has no gaseous atmospheric phase; it cycles through rocks, soil and water",
            commonErrors: ["Claiming phosphorus cycles through the atmosphere — its lack of a gas phase is the key distinction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Farmers rotate legume crops (e.g. clover, beans) with cereals. After several seasons of legume cultivation, cereal yields on the same field improve even without added fertiliser. What explains this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legumes fix atmospheric $\\text{N}_2$ via Rhizobium, enriching soil nitrogen for the following cereal crop" },
              { id: "b", text: "Legumes denitrify the soil, releasing nitrogen gas for plants" },
              { id: "c", text: "Legumes increase soil carbon dioxide which fertilises cereals" },
              { id: "d", text: "Legumes make phosphorus soluble in water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biological nitrogen fixation", statement: "Rhizobium in legume root nodules converts $\\text{N}_2$ to ammonia, adding plant-available nitrogen to the soil." },
            ],
            steps: [
              { reasoning: "Legumes host nitrogen-fixing bacteria that convert atmospheric $\\text{N}_2$ into usable nitrogen.", working: "\\text{N}_2 \\rightarrow \\text{NH}_3", marks: 1, markCode: "M" },
              { reasoning: "This natural fertiliser remains in the soil after the legumes are harvested, benefiting the next crop — the basis of crop rotation.", working: "\\text{soil N enrichment}", marks: 1, markCode: "M" },
              { reasoning: "Denitrification would REMOVE nitrogen as $\\text{N}_2$ gas — the opposite of what is observed.", working: "\\text{not denitrification}", marks: 1, markCode: "R" },
              { reasoning: "Option (a) correctly links legume-Rhizobium fixation to improved cereal yields.", working: "\\text{option a}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Legumes fix atmospheric $\\text{N}_2$ via Rhizobium, enriching soil nitrogen for the following cereal crop",
            commonErrors: ["Thinking legumes add phosphorus — the benefit is specifically nitrogen."],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A temperate lake receives agricultural runoff containing nitrogen and phosphorus fertilisers. Over two summers the lake shows: declining water clarity, dense algal blooms in August, and fish kills in September as dissolved oxygen falls. Dissolved oxygen sensors record near-zero values at the lake bottom in late summer.",
          parts: [
            { label: "a", prompt: "Name the process being described and identify which nutrient is most likely the limiting factor.", marks: 2 },
            { label: "b", prompt: "Explain the sequence of events from fertiliser runoff to fish kills, naming each biological process.", marks: 2 },
            { label: "c", prompt: "Explain why the fish kills occur in late summer rather than immediately after the bloom.", marks: 2 },
            { label: "d", prompt: "Evaluate two management strategies to prevent eutrophication in this lake and its catchment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication", statement: "Nutrient enrichment → algal bloom → decomposition → oxygen depletion → fish kills." },
            ],
            steps: [
              { part: "a", reasoning: "This is eutrophication — nutrient enrichment causing algal blooms and oxygen depletion.", working: "\\text{eutrophication}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Phosphorus is typically the limiting nutrient in freshwater, so even small additions trigger blooms.", working: "\\text{P limiting}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fertilisers enter via runoff → algae absorb nutrients and bloom → algae die → decomposers respire → dissolved oxygen falls → fish die.", working: "\\text{bloom-decompose-deoxygenate}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each step is a named process: nutrient enrichment, photosynthesis/bloom, decomposition, respiration, hypoxia.", working: "\\text{process chain}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The bloom must first build up biomass, then die and be decomposed — bacterial respiration peaks after the bloom crashes, which takes weeks.", working: "\\text{time lag}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Warm late-summer water also holds less oxygen and stratifies, trapping depleted water at depth — both delay and worsen kills.", working: "\\text{stratification}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Strategy 1: reduce fertiliser inputs — buffer strips, precision application, cover crops in the catchment.", working: "\\text{input reduction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Strategy 2: in-lake measures — aeration, algal control or sediment phosphorus removal; these treat symptoms and are less sustainable than catchment management.", working: "\\text{in-lake vs catchment}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) eutrophication, with phosphorus usually limiting in freshwater; (b) runoff nutrients → algal bloom → algal death → decomposition/respiration → oxygen depletion → fish kills; (c) the lag reflects time for biomass to accumulate, die and be decomposed, worsened by warm stratified water; (d) best is reducing catchment inputs (buffer strips, precision fertiliser use); in-lake aeration or algal control treats symptoms",
            commonErrors: ["Suggesting fish kills are caused directly by the algae — the mechanism is oxygen depletion from decomposition."],
            examinerNote: "M1 A1 (a), M1 A1 (b), R1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process returns nitrate ($\\text{NO}_3^-$) back to atmospheric nitrogen gas ($\\text{N}_2$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Denitrification" },
              { id: "b", text: "Nitrogen fixation" },
              { id: "c", text: "Ammonification" },
              { id: "d", text: "Nitrification" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denitrification", statement: "Reduction of nitrate to $\\text{N}_2$ gas by anaerobic bacteria, returning nitrogen to the atmosphere." },
            ],
            steps: [
              { reasoning: "Denitrification is the only listed process that produces $\\text{N}_2$ gas; the others transform fixed nitrogen compounds.", working: "\\text{NO}_3^- \\to \\text{N}_2", marks: 1, markCode: "M" },
              { reasoning: "Option (c) correctly identifies denitrification.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Denitrification",
            commonErrors: ["Confusing nitrification with denitrification — nitrification oxidises ammonia to nitrate, not back to gas."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why is phosphorus often the limiting nutrient for plant growth in many ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it exists only in the atmosphere as a gas" },
              { id: "b", text: "Because plants cannot absorb it in any form" },
              { id: "c", text: "Because it is destroyed by decomposition" },
              { id: "d", text: "Because it is poorly soluble and cycles slowly through rocks, soil and water with no gaseous phase" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phosphorus cycle", statement: "A sedimentary cycle with no atmospheric phase; phosphorus enters via rock weathering and is poorly soluble, making it often limiting." },
            ],
            steps: [
              { reasoning: "Unlike carbon and nitrogen, phosphorus has no gas phase — it must be weathered from rock, a slow process.", working: "\\text{no gas phase}", marks: 1, markCode: "M" },
              { reasoning: "Poor solubility means plant-available phosphate is scarce, so small additions strongly limit growth.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because it is poorly soluble and cycles slowly through rocks, soil and water with no gaseous phase",
            commonErrors: ["Claiming phosphorus is a gas — it has no atmospheric reservoir at all."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which sequence correctly describes the process of eutrophication in a freshwater lake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fish kills $\\rightarrow$ algal bloom $\\rightarrow$ nutrient enrichment" },
              { id: "b", text: "Oxygen depletion $\\rightarrow$ algal bloom $\\rightarrow$ nutrient enrichment" },
              { id: "c", text: "Nutrient enrichment $\\rightarrow$ algal bloom $\\rightarrow$ algal death $\\rightarrow$ decomposition and oxygen depletion $\\rightarrow$ fish kills" },
              { id: "d", text: "Decomposition $\\rightarrow$ nutrient enrichment $\\rightarrow$ algal bloom $\\rightarrow$ more fish" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication", statement: "Nutrient enrichment → algal bloom → algal death → decomposition/respiration → oxygen depletion → fish kills." },
            ],
            steps: [
              { reasoning: "The sequence must start with nutrient input, then bloom, death, decomposition-driven deoxygenation and finally fish kills.", working: "\\text{nutrients}\\to\\text{bloom}\\to\\text{death}\\to\\text{deoxy}", marks: 1, markCode: "M" },
              { reasoning: "Decomposers respire as they break down dead algae, consuming dissolved oxygen — the mechanism of fish kills.", working: "\\text{respiration depletes O}_2", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) gives the correct causal order.", working: "\\text{option a}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Nutrient enrichment $\\rightarrow$ algal bloom $\\rightarrow$ algal death $\\rightarrow$ decomposition and oxygen depletion $\\rightarrow$ fish kills",
            commonErrors: ["Thinking the algae directly poison fish — the kill mechanism is oxygen depletion by decomposers."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The oceans absorb roughly a quarter of anthropogenic $\\text{CO}_2$ emissions, yet atmospheric $\\text{CO}_2$ continues to rise. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emissions exceed the capacity of all natural sinks combined, so $\\text{CO}_2$ accumulates in the atmosphere" },
              { id: "b", text: "The ocean sink has stopped working entirely" },
              { id: "c", text: "Photosynthesis has ceased worldwide" },
              { id: "d", text: "The remaining $75\\%$ of emissions is harmless" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon sinks", statement: "Natural sinks (oceans, land biomass) absorb part of emissions; when inputs exceed sink capacity, atmospheric $\\text{CO}_2$ rises." },
            ],
            steps: [
              { reasoning: "The ocean absorbs $\\sim25\\%$ of emissions, so $\\sim75\\%$ remains — far more than land sinks can take up.", working: "75\\% \\text{ remains}", marks: 1, markCode: "M" },
              { reasoning: "Rising atmospheric $\\text{CO}_2$ therefore means total emissions exceed total sink capacity.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Emissions exceed the capacity of all natural sinks combined, so $\\text{CO}_2$ accumulates in the atmosphere",
            commonErrors: ["Assuming the ocean absorbs everything not emitted — sinks are finite and can be saturated."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Carbon dioxide makes up about $0.04\\%$ of air. Calculate the volume of $\\text{CO}_2$ in a $2500\\ \\text{L}$ sample of air.",
          response: { type: "numeric", parts: [{ label: "Volume of CO$_2$ (L)", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "Volume of gas $= \\text{percentage} \\times \\text{total volume} / 100$." },
            ],
            steps: [
              { reasoning: "Convert the percentage to a decimal: $0.04\\% = 0.0004$.", working: "0.04\\% = 0.0004", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the total volume: $0.0004 \\times 2500$.", working: "0.0004 \\times 2500", marks: 1, markCode: "M" },
              { reasoning: "This gives $1\\ \\text{L}$ of $\\text{CO}_2$.", working: "= 1\\ \\text{L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\ \\text{L}$",
            commonErrors: ["Multiplying by $0.04$ instead of $0.0004$ — percentages must be divided by 100."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A legume-Rhizobium symbiosis fixes nitrogen at a rate of about $200\\ \\text{kg N ha}^{-1}\\ \\text{yr}^{-1}$. A farmer plants this legume on a $6\\ \\text{ha}$ field. Calculate (a) the nitrogen fixed per year and (b) the total nitrogen fixed over a $3$-year rotation.",
          response: { type: "numeric", parts: [{ label: "Nitrogen fixed per year (kg)", answer: 1200 }, { label: "Nitrogen fixed over 3 years (kg)", answer: 3600 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Nitrogen fixation rate", statement: "Legume-Rhizobium systems fix about $100-300\\ \\text{kg N ha}^{-1}\\ \\text{yr}^{-1}$; total $=$ rate $\\times$ area $\\times$ time." },
            ],
            steps: [
              { reasoning: "Annual fixation $= 200 \\times 6$.", working: "200 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "This gives $1200\\ \\text{kg N per year}$.", working: "= 1200", marks: 1, markCode: "A" },
              { reasoning: "Over three years: $1200 \\times 3$.", working: "1200 \\times 3", marks: 1, markCode: "M" },
              { reasoning: "Total fixed $= 3600\\ \\text{kg N}$ — comparable to several bags of fertiliser.", working: "= 3600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1200\\ \\text{kg N yr}^{-1}$; (b) $3600\\ \\text{kg N}$ over 3 years",
            commonErrors: ["Using the per-hectare rate directly for the whole field — multiply by area first."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A lake receives $8\\ \\text{kg of phosphorus per hectare}$ in fertiliser runoff each year. Experiments show an algal bloom is triggered once phosphorus exceeds $2\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$. Calculate (a) how many times the bloom threshold the input represents and (b) the excess phosphorus above the threshold.",
          response: { type: "numeric", parts: [{ label: "Input as multiple of threshold", answer: 4 }, { label: "Excess phosphorus above threshold (kg ha$^{-1}$ yr$^{-1}$)", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting nutrient", statement: "In freshwater, phosphorus is usually limiting; inputs far above the threshold trigger blooms." },
            ],
            steps: [
              { reasoning: "Compute the ratio: $8 / 2$.", working: "\\frac{8}{2}", marks: 1, markCode: "M" },
              { reasoning: "The input is $4$ times the bloom threshold.", working: "= 4", marks: 1, markCode: "A" },
              { reasoning: "Excess above threshold: $8 - 2$.", working: "8 - 2", marks: 1, markCode: "M" },
              { reasoning: "The excess is $6\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$.", working: "= 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ times the threshold; (b) $6\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$ excess",
            commonErrors: ["Subtracting in the wrong order for part (a) — 'times the threshold' means a ratio, not a difference."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 5,
          stem: "A forest ecosystem receives nitrogen inputs of $150\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$ from biological fixation and $100\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$ from fertiliser. Denitrifying bacteria return $80\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$ to the atmosphere.",
          response: { type: "numeric", parts: [{ label: "Total nitrogen inputs (kg ha$^{-1}$ yr$^{-1}$)", answer: 250 }, { label: "Net nitrogen accumulation (kg ha$^{-1}$ yr$^{-1}$)", answer: 170 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nitrogen budget", statement: "Total inputs $=$ fixation $+$ fertiliser; net accumulation $=$ inputs $-$ gaseous losses (denitrification)." },
            ],
            steps: [
              { reasoning: "Sum the two inputs: $150 + 100$.", working: "150 + 100", marks: 1, markCode: "M" },
              { reasoning: "Total inputs $= 250\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$.", working: "= 250", marks: 1, markCode: "A" },
              { reasoning: "Subtract the denitrification loss: $250 - 80$.", working: "250 - 80", marks: 1, markCode: "M" },
              { reasoning: "Net accumulation $= 170\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$.", working: "= 170", marks: 1, markCode: "A" },
              { reasoning: "Only $170$ of the $250$ input kg remains in the ecosystem — $80$ kg returns to the atmosphere as $\\text{N}_2$.", working: "\\text{budget balance}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total inputs $= 250\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$; net accumulation $= 170\\ \\text{kg ha}^{-1}\\ \\text{yr}^{-1}$",
            commonErrors: ["Adding denitrification as an input — it is a LOSS that returns nitrogen to the atmosphere."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Nitrogen gas makes up about $78\\%$ of the atmosphere. Calculate the volume of $\\text{N}_2$ in a $500\\ \\text{L}$ sample of air.",
          response: { type: "numeric", parts: [{ label: "Volume of N$_2$ (L)", answer: 390 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "Volume of gas $= \\text{percentage} \\times \\text{total volume} / 100$." },
            ],
            steps: [
              { reasoning: "Compute $0.78 \\times 500$.", working: "0.78 \\times 500", marks: 1, markCode: "M" },
              { reasoning: "This gives $390\\ \\text{L}$ of $\\text{N}_2$.", working: "= 390", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$390\\ \\text{L}$",
            commonErrors: ["Using $78$ instead of $0.78$ — the percentage must be converted to a decimal first."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "During eutrophication, dissolved oxygen in a lake falls from $9.0\\ \\text{mg L}^{-1}$ to $3.0\\ \\text{mg L}^{-1}$. Calculate (a) the absolute decrease in dissolved oxygen and (b) the percentage decrease.",
          response: { type: "numeric", parts: [{ label: "Absolute decrease (mg L$^{-1}$)", answer: 6 }, { label: "Percentage decrease", answer: 66.7, tolerance: 0.2, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ change} = \\frac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Absolute decrease $= 9.0 - 3.0 = 6.0\\ \\text{mg L}^{-1}$.", working: "9.0 - 3.0", marks: 1, markCode: "M" },
              { reasoning: "This gives $6.0\\ \\text{mg L}^{-1}$.", working: "= 6.0", marks: 1, markCode: "A" },
              { reasoning: "Percentage decrease $= \\frac{6.0}{9.0} \\times 100$.", working: "\\frac{6.0}{9.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $66.7\\%$ — below the $\\sim5\\ \\text{mg L}^{-1}$ threshold most fish need.", working: "= 66.7\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.0\\ \\text{mg L}^{-1}$; (b) $66.7\\%$ decrease",
            commonErrors: ["Dividing by the new value $3.0$ — percentage change uses the original $9.0$ as the base."],
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A farmer rotates clover (a legume) with wheat on the same field and also adds nitrogen fertiliser to neighbouring fields.",
          parts: [
            { label: "a", prompt: "Contrast the carbon and nitrogen cycles with the phosphorus cycle in terms of atmospheric involvement.", marks: 2 },
            { label: "b", prompt: "Trace the path of a nitrogen atom from atmospheric $\\text{N}_2$ to a wheat protein, naming each process.", marks: 2 },
            { label: "c", prompt: "Explain why phosphorus, rather than nitrogen, is most often limiting in natural (unfertilised) ecosystems.", marks: 2 },
            { label: "d", prompt: "Evaluate the environmental trade-offs of the farmer's fertiliser use versus relying on legume rotation alone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biogeochemical cycles", statement: "Carbon and nitrogen have gaseous atmospheric phases; phosphorus is a sedimentary cycle with no gas phase." },
            ],
            steps: [
              { part: "a", reasoning: "Carbon and nitrogen cycle through atmospheric reservoirs ($\\text{CO}_2$, $\\text{N}_2$) via gas-exchange processes; phosphorus has no gaseous phase and moves through rocks, soil and water only.", working: "\\text{gas vs sedimentary}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The phosphorus cycle is therefore much slower and depends on rock weathering.", working: "\\text{slow weathering}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rhizobium in clover nodules fixes $\\text{N}_2$ to ammonia (nitrogen fixation) → nitrifying bacteria oxidise it to nitrite then nitrate (nitrification) → wheat roots absorb nitrate (assimilation) → incorporated into amino acids/proteins.", working: "\\text{fixation}\\to\\text{nitrification}\\to\\text{assimilation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three process names must be correctly ordered.", working: "\\text{3 processes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nitrogen is abundant in air but needs fixation; phosphorus has no atmospheric reservoir and enters only by slow weathering, so soil phosphate is naturally scarce.", working: "\\text{P scarce in soil}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This is why phosphorus additions often produce the largest growth response in unfertilised systems.", working: "\\text{P limits}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Synthetic fertiliser boosts yields quickly but its runoff causes eutrophication; legume rotation fixes nitrogen naturally, cuts costs and protects waterways but fixes less N and takes time to build soil fertility.", working: "\\text{yield vs pollution}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A balanced approach — rotation plus precision fertiliser application — minimises pollution while maintaining yields.", working: "\\text{balanced approach}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) C and N have atmospheric gas phases; P is sedimentary with no gas phase; (b) fixation → nitrification → assimilation into wheat protein; (c) P enters only by slow weathering so soil phosphate is naturally scarce; (d) fertiliser gives fast yields but risks eutrophication; legume rotation is sustainable but slower — a combined precision approach is best",
            commonErrors: ["Saying phosphorus is 'used up' — it is not destroyed, it accumulates in sediments and rocks."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-nutrient-cycles-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "Burning fossil fuels has raised atmospheric $\\text{CO}_2$ from about $280\\ \\text{ppm}$ to over $420\\ \\text{ppm}$. Oceans, forests and soils absorb part of these emissions, yet the concentration keeps rising.",
          parts: [
            { label: "a", prompt: "Explain the role of the ocean as a carbon sink and one limitation of this sink.", marks: 2 },
            { label: "b", prompt: "Discuss how rising atmospheric $\\text{CO}_2$ contributes to climate change.", marks: 2 },
            { label: "c", prompt: "Evaluate the claim that growing biofuel crops is 'carbon neutral'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon cycle and climate", statement: "Photosynthesis fixes $\\text{CO}_2$; oceans absorb $\\sim25\\%$ of emissions; excess $\\text{CO}_2$ enhances the greenhouse effect." },
            ],
            steps: [
              { part: "a", reasoning: "Oceans dissolve $\\text{CO}_2$ and use it in photosynthesis by phytoplankton, absorbing roughly a quarter of anthropogenic emissions — a major carbon sink.", working: "\\text{ocean sink} \\sim 25\\%", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Limitation: dissolved $\\text{CO}_2$ forms carbonic acid, acidifying oceans and harming calcifying organisms — the sink has ecological costs and finite capacity.", working: "\\text{ocean acidification}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\text{CO}_2$ is a greenhouse gas that traps outgoing infrared radiation, enhancing the greenhouse effect and warming the planet.", working: "\\text{greenhouse effect}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Warming drives climate change — sea-level rise, altered rainfall, extreme weather — beyond what natural carbon cycling can offset.", working: "\\text{climate change}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supporting view: biofuel crops absorb $\\text{CO}_2$ while growing, offsetting the $\\text{CO}_2$ released when burned — potentially neutral over the cycle.", working: "\\text{crop absorbs CO}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Counterpoints: land-use change (deforestation) releases stored carbon, fertiliser production emits $\\text{N}_2\\text{O}$, and processing/transport add emissions — neutrality is conditional, not automatic.", working: "\\text{hidden emissions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oceans dissolve and photosynthesise $\\text{CO}_2$ absorbing $\\sim25\\%$ of emissions, but acidification and finite capacity limit the sink; (b) $\\text{CO}_2$ enhances the greenhouse effect, driving warming and climate change; (c) biofuels are only conditionally carbon neutral — land clearing, fertiliser and processing emissions can negate the benefit",
            commonErrors: ["Claiming biofuels are automatically carbon neutral — the full lifecycle must be counted."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
    {
      id: "biohl-u5-succession",
      title: "Primary and secondary succession",
      skill: "Distinguish primary from secondary succession, explain pioneer species and succession mechanisms, and evaluate climax community concepts.",
      lesson: {
        sections: [
          {
            heading: "Primary and secondary succession",
            body: "**Primary succession** begins on bare substrate with no soil — lava flows, new sand dunes, exposed rock after a glacier retreats. **Secondary succession** follows disturbance of an existing community where soil and some organisms remain — abandoned farmland, after fire or flood. Secondary succession is much faster because soil, seed banks and surviving organisms provide a head start.",
          },
          {
            heading: "Pioneer species and mechanisms",
            body: "**Pioneer species** tolerate harsh conditions: lichens and mosses on rock, grasses on dunes. They modify the environment — lichens weather rock and add organic matter, grasses stabilise sand — enabling later species to establish. Three mechanisms drive species replacement: **facilitation** (earlier species make conditions better for later ones), **tolerance** (later species tolerate lower resource levels and outcompete pioneers), and **inhibition** (early occupants resist invasion until they die).",
          },
          {
            heading: "Climax and modern views",
            body: "The traditional **climax community** is a stable end-point (e.g. oak forest). Modern ecology treats succession as less deterministic: disturbance, climate and species pools mean communities often reach a **dynamic equilibrium** or shift between states rather than a fixed climax. Understanding succession guides restoration — e.g. replanting nurse plants to accelerate forest recovery.",
          },
        ],
        keyFormulas: [
          { name: "Primary succession", statement: "Bare substrate, no soil: lava, dunes, glacier retreat" },
          { name: "Secondary succession", statement: "Disturbed but soil-rich site: farmland abandonment, fire, flood" },
          { name: "Succession mechanisms", statement: "Facilitation, tolerance, inhibition" },
        ],
        workedExample: {
          problem: "A farmer abandons a field. Grasses and wildflowers colonise first, then shrubs, then young trees. Name the succession type and the likely mechanism allowing trees to replace shrubs.",
          solution: "This is **secondary succession** — soil and seeds remain after abandonment. Early grasses and wildflowers are pioneers that add organic matter and shade-tolerant shrubs follow; trees eventually outcompete shrubs for light (**tolerance** mechanism) as the canopy develops toward a forest community.",
        },
      },
      questions: [
        {
          id: "biohl-u5-succession-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following represents PRIMARY succession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lichens colonising bare rock exposed by a retreating glacier" },
              { id: "b", text: "Grass colonising a flooded field" },
              { id: "c", text: "Weeds growing on abandoned farmland" },
              { id: "d", text: "Shrubs regrowing after a forest fire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary succession", statement: "Succession on bare substrate with no pre-existing soil or community, e.g. glacier retreat or lava flows." },
            ],
            steps: [
              { reasoning: "Primary succession requires substrate with no soil — bare rock after glacier retreat qualifies.", working: "\\text{no soil}", marks: 1, markCode: "M" },
              { reasoning: "The other options all have existing soil or a prior community — secondary succession.", working: "\\text{secondary elsewhere}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lichens colonising bare rock exposed by a retreating glacier",
            commonErrors: ["Choosing farmland abandonment — that is secondary succession because soil and seed banks remain."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "On a new volcanic island, the first colonisers are wind-dispersed seeds of grasses and ferns, followed decades later by shrubs and eventually trees. What is the role of the grasses and ferns?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are secondary consumers in the food web" },
              { id: "b", text: "They are pioneer species that stabilise substrate and add organic matter for later species" },
              { id: "c", text: "They are the climax community" },
              { id: "d", text: "They inhibit all further succession" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pioneer species", statement: "Stress-tolerant early colonisers that modify the habitat — stabilising substrate, adding organic matter — enabling later species." },
            ],
            steps: [
              { reasoning: "Grasses and ferns arrive first on bare volcanic substrate — classic pioneers.", working: "\\text{first colonisers}", marks: 1, markCode: "M" },
              { reasoning: "They stabilise ash, trap organic matter and build early soil, facilitating shrubs and trees.", working: "\\text{facilitation}", marks: 1, markCode: "M" },
              { reasoning: "They are not the climax (trees come later) and do not permanently inhibit succession.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They are pioneer species that stabilise substrate and add organic matter for later species",
            commonErrors: ["Calling pioneers the climax community — the climax is the later, more stable stage."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two abandoned fields are monitored. Field A is quickly colonised by fast-growing annual weeds that later give way to perennial grasses and shrubs. Field B retains dense stands of a toxic weed that resists invasion for decades. Which succession mechanism best explains Field B's slow change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Facilitation — the weed helps later species" },
              { id: "b", text: "Inhibition — the established weed resists invasion until it dies or is removed" },
              { id: "c", text: "Primary succession because no soil exists" },
              { id: "d", text: "Tolerance — later species outcompete the weed slowly" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inhibition", statement: "Succession mechanism where early occupants resist invasion through competition or toxins until they die or are removed." },
            ],
            steps: [
              { reasoning: "The toxic weed actively prevents other species establishing — that is inhibition, not facilitation.", working: "\\text{resists invasion}", marks: 1, markCode: "M" },
              { reasoning: "Its persistence 'for decades' shows early occupants blocking later species until disturbance or death opens space.", working: "\\text{blocked succession}", marks: 1, markCode: "M" },
              { reasoning: "This contrasts with Field A where pioneers facilitated later stages.", working: "\\text{contrast A}", marks: 1, markCode: "M" },
              { reasoning: "Option (c) correctly names inhibition.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Inhibition — the established weed resists invasion until it dies or is removed",
            commonErrors: ["Choosing tolerance — tolerance describes later species outcompeting earlier ones at low resources, not active resistance by the weed."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A coastal dune system is being restored after tourist damage. Managers must choose between planting marram grass immediately or first adding topsoil and planting nitrogen-fixing shrubs. Natural succession on undisturbed dunes typically runs: annuals → grasses → shrubs → woodland over 50-100 years.",
          parts: [
            { label: "a", prompt: "Distinguish primary from secondary succession and state which type is occurring on the damaged dune.", marks: 2 },
            { label: "b", prompt: "Explain the role of pioneer species in dune succession.", marks: 2 },
            { label: "c", prompt: "Evaluate the two restoration options in terms of succession mechanisms and timescale.", marks: 2 },
            { label: "d", prompt: "Discuss one limitation of aiming for a fixed 'climax community' as the restoration target.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Succession mechanisms", statement: "Pioneers facilitate later species; restoration can accelerate natural processes but must respect limiting factors like salt, wind and low nutrients." },
            ],
            steps: [
              { part: "a", reasoning: "Primary succession starts on bare substrate with no soil; secondary follows disturbance where soil remains.", working: "\\text{primary vs secondary}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tourist-damaged dunes retain some soil and seed bank — this is secondary succession, faster than primary.", working: "\\text{secondary}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pioneers like marram grass stabilise sand with deep roots, trap wind-blown organic matter and tolerate salt spray.", working: "\\text{stabilise + tolerate}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Their modification of the habitat (facilitation) enables less hardy shrubs and trees to establish later.", working: "\\text{facilitation}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Planting marram directly mimics natural succession — cheap and self-sustaining but slow (decades to woodland).", working: "\\text{marram = natural}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adding topsoil and nitrogen-fixers accelerates succession (skips early stages) but costs more and may introduce weeds — a trade-off between speed and naturalness.", working: "\\text{topsoil accelerates}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Climax is not fixed: disturbance, climate change and species availability mean communities reach dynamic equilibria, not permanent endpoints.", working: "\\text{dynamic equilibrium}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A rigid climax target may be unrealistic; restoration should aim for resilient, functioning ecosystems rather than a historical snapshot.", working: "\\text{resilience over snapshot}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) secondary succession — damaged dunes retain soil and propagules; (b) pioneers stabilise sand, tolerate stress and facilitate later species; (c) marram planting is natural but slow; topsoil plus nitrogen-fixers accelerates succession at higher cost and weed risk; (d) climax is not a fixed endpoint — disturbance and change mean restoration should target resilient functioning communities",
            commonErrors: ["Assuming succession always ends at a fixed climax — modern view emphasises dynamic, disturbance-driven communities."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-succession-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which organism is a typical pioneer species on bare rock with no soil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flowering shrubs" },
              { id: "b", text: "Oak trees" },
              { id: "c", text: "Tall grasses" },
              { id: "d", text: "Lichens" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pioneer species", statement: "Stress-tolerant first colonisers (e.g. lichens, mosses) that survive harsh bare-substrate conditions." },
            ],
            steps: [
              { reasoning: "Lichens tolerate bare rock, desiccation and nutrient poverty — classic pioneers; trees and shrubs need soil.", working: "\\text{lichens tolerate rock}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly identifies lichens as pioneers.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lichens",
            commonErrors: ["Choosing grasses — they need at least some soil; bare rock is colonised by lichens first."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the key difference between primary and secondary succession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary succession is faster because there is no competition" },
              { id: "b", text: "Primary succession starts on bare substrate with no soil; secondary follows disturbance where soil and some organisms remain" },
              { id: "c", text: "Secondary succession always ends at a climax community; primary never does" },
              { id: "d", text: "Primary succession involves animals; secondary involves only plants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary vs secondary succession", statement: "Primary: bare substrate, no soil (lava, dunes, glacier retreat). Secondary: disturbed site with soil and propagules remaining (farmland, fire)." },
            ],
            steps: [
              { reasoning: "The defining difference is the starting condition: presence or absence of pre-existing soil and community.", working: "\\text{soil present?}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) states this correctly; secondary succession is also faster, not primary.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Primary succession starts on bare substrate with no soil; secondary follows disturbance where soil and some organisms remain",
            commonErrors: ["Reversing the timescales — secondary succession is much faster because of the soil 'head start'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Lichens on bare rock weather the rock surface and add organic matter, making it possible for mosses and grasses to establish. Which succession mechanism does this illustrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tolerance — later species outcompete the lichens" },
              { id: "b", text: "Inhibition — the lichens block all later species" },
              { id: "c", text: "Climax — the lichens are the final community" },
              { id: "d", text: "Facilitation — early species improve conditions for later species" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Facilitation", statement: "A succession mechanism in which earlier species modify the environment to make it more suitable for later species." },
            ],
            steps: [
              { reasoning: "The lichens actively improve the habitat — weathering rock and adding organic matter — enabling mosses and grasses.", working: "\\text{improve habitat}", marks: 1, markCode: "M" },
              { reasoning: "Improving conditions for later species is the definition of facilitation.", working: "\\text{facilitation}", marks: 1, markCode: "M" },
              { reasoning: "Option (c) correctly identifies the mechanism.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Facilitation — early species improve conditions for later species",
            commonErrors: ["Choosing inhibition — inhibition is when early species PREVENT later colonisation, the opposite of facilitation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does secondary succession typically complete much faster than primary succession on a similar site?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because primary succession involves no animals" },
              { id: "b", text: "Because secondary sites have more sunlight" },
              { id: "c", text: "Because pioneer species grow faster on disturbed soil" },
              { id: "d", text: "Because soil, a seed bank and surviving organisms remain, giving later species a head start" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secondary succession advantage", statement: "Disturbed sites retain soil, nutrients, seeds and surviving organisms, so succession skips the slow soil-forming stage." },
            ],
            steps: [
              { reasoning: "Primary succession must build soil from bare rock over centuries; secondary sites already have soil, seed banks and survivors.", working: "\\text{soil + propagules remain}", marks: 1, markCode: "M" },
              { reasoning: "This head start is why secondary succession (decades) is far faster than primary (centuries).", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because soil, a seed bank and surviving organisms remain, giving later species a head start",
            commonErrors: ["Attributing the speed to the pioneer species — the advantage is the pre-existing soil and propagule bank."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-succession-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A typical primary succession sequence on sand dunes runs: annual plants $\\rightarrow$ perennial grasses $\\rightarrow$ shrubs $\\rightarrow$ trees. How many seral stages occur before the tree stage?",
          response: { type: "numeric", parts: [{ label: "Stages before trees", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Seral stages", statement: "Each community stage in succession is a seral stage; pioneers come first and the climax last." },
            ],
            steps: [
              { reasoning: "Count the stages preceding trees: annual plants, perennial grasses and shrubs.", working: "\\text{annuals, grasses, shrubs}", marks: 1, markCode: "M" },
              { reasoning: "This gives $3$ seral stages before the tree stage.", working: "= 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ stages",
            commonErrors: ["Counting the tree stage itself — the question asks for stages BEFORE trees."],
          },
        },
        {
          id: "biohl-u5-succession-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "On comparable sites, primary succession to a shrub community takes about $100$ years while secondary succession takes about $25$ years. Calculate (a) secondary succession time as a percentage of primary succession time and (b) how many times faster secondary succession is.",
          response: { type: "numeric", parts: [{ label: "Secondary as % of primary", answer: 25, unit: "%" }, { label: "How many times faster", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage and ratio", statement: "$\\% = \\frac{\\text{secondary}}{\\text{primary}} \\times 100$; speed ratio $= \\frac{\\text{primary}}{\\text{secondary}}$." },
            ],
            steps: [
              { reasoning: "Compute $\\frac{25}{100} \\times 100 = 25\\%$.", working: "\\frac{25}{100} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Secondary succession takes $25\\%$ of the primary time.", working: "= 25\\%", marks: 1, markCode: "A" },
              { reasoning: "Compute the speed ratio: $\\frac{100}{25}$.", working: "\\frac{100}{25}", marks: 1, markCode: "M" },
              { reasoning: "Secondary succession is $4$ times faster — consistent with the soil head start.", working: "= 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25\\%$; (b) $4$ times faster",
            commonErrors: ["Inverting the ratio for part (b) — 'how many times faster' divides primary by secondary."],
          },
        },
        {
          id: "biohl-u5-succession-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Species richness is recorded at four seral stages of a dune succession: pioneer stage $3$ species, grassland stage $9$ species, shrubland stage $15$ species and forest stage $22$ species. Calculate (a) the number of species gained between the pioneer and forest stages and (b) the percentage increase in richness over that period.",
          response: { type: "numeric", parts: [{ label: "Species gained", answer: 19 }, { label: "Percentage increase in richness", answer: 633.3, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Species richness", statement: "The number of species in a community; typically rises during succession as niches diversify." },
            ],
            steps: [
              { reasoning: "Species gained $= 22 - 3 = 19$.", working: "22 - 3", marks: 1, markCode: "M" },
              { reasoning: "This gives $19$ additional species.", working: "= 19", marks: 1, markCode: "A" },
              { reasoning: "Percentage increase $= \\frac{19}{3} \\times 100$.", working: "\\frac{19}{3} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $\\approx 633\\%$ — richness more than septupled as the community matured.", working: "\\approx 633\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $19$ species; (b) $\\approx 633\\%$ increase",
            commonErrors: ["Dividing by the forest count — percentage change always uses the starting (pioneer) value as the base."],
          },
        },
        {
          id: "biohl-u5-succession-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 5,
          stem: "On a newly formed volcanic island, soil depth increases by $0.5\\ \\text{cm yr}^{-1}$ during the first $20$ years while lichens and mosses dominate. Once shrubs establish, the soil-building rate doubles to $1.0\\ \\text{cm yr}^{-1}$.",
          response: { type: "numeric", parts: [{ label: "Soil depth after 20 years (cm)", answer: 10 }, { label: "Soil depth after 40 years (cm)", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soil formation in succession", statement: "Pioneer species weather rock and add organic matter, so soil depth — and thus succession rate — accelerates over time." },
            ],
            steps: [
              { reasoning: "First 20 years at $0.5\\ \\text{cm yr}^{-1}$: $0.5 \\times 20$.", working: "0.5 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Soil depth at year 20 $= 10\\ \\text{cm}$.", working: "= 10", marks: 1, markCode: "A" },
              { reasoning: "Next 20 years at the doubled rate: $1.0 \\times 20 = 20\\ \\text{cm}$ added.", working: "1.0 \\times 20 = 20", marks: 1, markCode: "M" },
              { reasoning: "Total depth $= 10 + 20 = 30\\ \\text{cm}$ — the rate doubled once shrubs facilitated soil building.", working: "10 + 20", marks: 1, markCode: "M" },
              { reasoning: "Soil depth after 40 years $= 30\\ \\text{cm}$.", working: "= 30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "After 20 years: $10\\ \\text{cm}$; after 40 years: $30\\ \\text{cm}$",
            commonErrors: ["Applying the $1.0\\ \\text{cm yr}^{-1}$ rate to all 40 years — it only applies after year 20."],
          },
        },
        {
          id: "biohl-u5-succession-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A dune succession sequence passes through $5$ seral stages over a total of $60$ years. Assuming each stage lasts the same time, calculate the average duration of each stage.",
          response: { type: "numeric", parts: [{ label: "Average stage duration (years)", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average duration", statement: "$\\text{time per stage} = \\text{total time} / \\text{number of stages}$." },
            ],
            steps: [
              { reasoning: "Compute $60 / 5$.", working: "60 \\div 5", marks: 1, markCode: "M" },
              { reasoning: "Each stage averages $12$ years.", working: "= 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ years",
            commonErrors: ["Dividing by $4$ — there are $5$ stages, not $4$ intervals between them."],
          },
        },
        {
          id: "biohl-u5-succession-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Vegetation cover on a restored dune is recorded as $20\\%$ at year $5$, $55\\%$ at year $15$ and $90\\%$ at year $30$. Calculate (a) the increase in cover between years 5 and 30 in percentage points and (b) the percentage increase relative to year 5.",
          response: { type: "numeric", parts: [{ label: "Increase in percentage points", answer: 70 }, { label: "Percentage increase", answer: 350, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage-point change is a simple difference; relative $\\%$ change divides by the starting value." },
            ],
            steps: [
              { reasoning: "Percentage-point increase $= 90 - 20 = 70$ points.", working: "90 - 20", marks: 1, markCode: "M" },
              { reasoning: "This gives $70$ percentage points.", working: "= 70", marks: 1, markCode: "A" },
              { reasoning: "Relative increase $= \\frac{70}{20} \\times 100$.", working: "\\frac{70}{20} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $350\\%$ — cover increased $4.5$-fold from its year-5 value.", working: "= 350\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $70$ percentage points; (b) $350\\%$ increase",
            commonErrors: ["Reporting '90%' as the increase — the question asks for the CHANGE from year 5, not the final value."],
          },
        },
        {
          id: "biohl-u5-succession-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A wetland is restored after drainage. Managers must decide whether to plant fast-growing reeds immediately or first re-flood the area and let natural colonisation occur.",
          parts: [
            { label: "a", prompt: "Distinguish primary from secondary succession and state which applies to this drained wetland.", marks: 2 },
            { label: "b", prompt: "Explain the role of pioneer species in wetland succession.", marks: 2 },
            { label: "c", prompt: "Compare facilitation, tolerance and inhibition as mechanisms of species replacement.", marks: 2 },
            { label: "d", prompt: "Evaluate the two restoration strategies in terms of timescale, cost and ecological outcome.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Succession mechanisms", statement: "Pioneers facilitate later species; tolerance and inhibition describe alternative replacement pathways; restoration can accelerate natural succession." },
            ],
            steps: [
              { part: "a", reasoning: "Primary succession starts on bare substrate with no soil; secondary follows disturbance where soil and propagules remain.", working: "\\text{primary vs secondary}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A drained wetland retains soil seed banks and organic matter — this is secondary succession, and faster than primary.", working: "\\text{secondary}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pioneers like reeds and bulrushes tolerate waterlogged, nutrient-poor conditions, stabilise sediment, trap organic matter and provide cover for later species.", working: "\\text{tolerate + stabilise}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Their habitat modification is facilitation, enabling less tolerant sedges, shrubs and eventually woodland species.", working: "\\text{facilitation}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Facilitation: early species improve conditions for later ones; tolerance: later species outcompete earlier ones at lower resource levels; inhibition: early occupants resist invasion until they die or are removed.", working: "\\text{3 mechanisms}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All three mechanisms must be correctly distinguished.", working: "\\text{correct definitions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Planting reeds accelerates cover establishment but costs money and may create a monoculture; re-flooding plus natural colonisation is cheaper and more biodiverse but slower and less predictable.", working: "\\text{speed vs diversity}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A hybrid — re-flood first, then plant nurse species where needed — often balances speed, cost and natural community assembly.", working: "\\text{hybrid approach}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) secondary succession — drained wetland retains soil and seed bank; (b) pioneers tolerate stress, stabilise sediment and facilitate later species; (c) facilitation helps, tolerance outcompetes at low resources, inhibition blocks until death/removal; (d) reed planting is fast but costly and risks monoculture; natural colonisation is slow but diverse — a hybrid approach is best",
            commonErrors: ["Treating succession as a fixed conveyor belt — inhibition can stall it for decades."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-succession-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "A forest reserve is managed by periodic controlled burns every 10 years. Fire-adapted pines and grasses dominate, while fire-sensitive broadleaf saplings keep dying. Ecologists debate whether the reserve is 'recovering' toward an oak forest climax.",
          parts: [
            { label: "a", prompt: "Explain why the concept of a fixed 'climax community' is now viewed as outdated.", marks: 2 },
            { label: "b", prompt: "Predict how the recurring burns will affect community composition over the next 50 years.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the reserve should be managed toward an oak-forest climax or maintained as a fire-adapted community.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dynamic equilibrium", statement: "Modern ecology views communities as reaching dynamic equilibria shaped by disturbance and climate, not fixed climax endpoints." },
            ],
            steps: [
              { part: "a", reasoning: "Climax theory assumed a deterministic endpoint; in reality disturbance, climate change, species pools and stochastic events keep communities shifting between states.", working: "\\text{disturbance + change}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Many ecosystems show multiple stable states rather than one inevitable climax.", working: "\\text{multiple states}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Repeated burns will keep selecting for fire-adapted pines and grasses; fire-sensitive broadleaf saplings will keep dying before reaching maturity.", working: "\\text{fire-adapted win}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Over 50 years the community will stabilise as a fire-maintained pine–grass system, not an oak forest — unless fire regime changes.", working: "\\text{pine-grass equilibrium}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "If the management goal is biodiversity and resilience, the fire-adapted community may be the appropriate target — it is self-sustaining under the natural fire regime.", working: "\\text{fire-adapted target}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "However, if oak forest is desired for conservation or carbon storage, burns must be reduced or suppressed — a trade-off between historical fidelity and ecosystem function.", working: "\\text{trade-off}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed climax is outdated — disturbance and environmental change produce dynamic equilibria and multiple stable states; (b) recurring burns will maintain fire-adapted pines/grasses and exclude oak saplings, stabilising as a fire-maintained community; (c) management should match goals — fire-adapted system for resilience under natural fire regimes, or reduced burning if oak forest is specifically required",
            commonErrors: ["Assuming succession always trends toward a fixed forest — disturbance can hold a community in an early seral state indefinitely."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
  ],
};
