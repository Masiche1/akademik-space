import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "biohl-u5-lesson-5-2",
  code: "5-2",
  title: "Communities, Energy Flow and Species Interactions",
  goal: "I CAN quantify energy transfer through trophic levels, distinguish the types of ecological pyramid, and analyse interspecific interactions including competition, predation, mutualism and keystone effects.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL C.1", "AHL C.2"],
  vocabulary: [
    { term: "Trophic level", definition: "A feeding position in a food chain or web: producers, primary consumers, secondary consumers and so on." },
    { term: "Food web", definition: "An interconnected network of feeding relationships showing how energy flows through a community." },
    { term: "Ecological pyramid", definition: "A diagram of numbers, biomass or energy at successive trophic levels; energy pyramids are always upright." },
    { term: "Net primary productivity", definition: "The energy or biomass remaining after producers' own respiration — the energy actually available to consumers." },
    { term: "Competitive exclusion", definition: "The principle that two species competing for the same limiting resource cannot coexist indefinitely; one excludes the other." },
    { term: "Keystone species", definition: "A species whose impact on community structure is disproportionately large relative to its abundance; its removal triggers trophic cascades." },
  ],
  concepts: [
    {
      id: "biohl-u5-energy-flow",
      title: "Trophic structure and energy flow",
      skill: "Calculate energy transfer between trophic levels and interpret the three types of ecological pyramid.",
      lesson: {
        sections: [
          {
            heading: "Trophic levels and the food web",
            body: "Energy enters an ecosystem through **producers** (photosynthesis) and flows to **primary consumers** (herbivores), **secondary consumers** (carnivores) and **decomposers**. A **food chain** is a single pathway; a **food web** is the realistic network of overlapping chains. Most ecosystems support only 3–5 trophic levels because energy is lost at each transfer — roughly $90\\%$ is lost as heat through respiration, excretion and uneaten tissue.",
          },
          {
            heading: "The ten per cent rule",
            body: "Only about **$10\\%$** of the energy at one trophic level is transferred to the next. If producers fix $10\\ 000\\ \\text{kJ m}^{-2}$ per year, herbivores receive about $1\\ 000\\ \\text{kJ m}^{-2}$ and carnivores about $100\\ \\text{kJ m}^{-2}$. This explains why top predators are rare, why food chains are short, and why humans eating plants obtain far more energy than those eating meat.",
          },
          {
            heading: "Ecological pyramids",
            body: "Three pyramids can be drawn: **pyramid of numbers** (counts per level — may be inverted, e.g. one tree supports many insects), **pyramid of biomass** (dry mass per level — usually upright but can invert with fast-turnover producers like phytoplankton), and **pyramid of energy** (energy flow per level — always upright because energy cannot be recycled). **NPP = GPP − respiration**: only NPP is available to the next trophic level.",
          },
        ],
        keyFormulas: [
          { name: "Ten per cent rule", statement: "About $10\\%$ of energy transfers between trophic levels; $90\\%$ is lost as heat and waste" },
          { name: "NPP", statement: "$\\text{NPP} = \\text{GPP} - \\text{respiration}$" },
          { name: "Energy pyramid", statement: "Always upright — energy flows one way and cannot be recycled" },
        ],
        workedExample: {
          problem: "Producers in a grassland fix $20\\ 000\\ \\text{kJ m}^{-2}$ per year (GPP). Producers respire $8\\ 000\\ \\text{kJ m}^{-2}$. Herbivores transfer $10\\%$ of available energy upward. Find the NPP and the energy reaching secondary consumers.",
          solution: "NPP $= 20\\,000 - 8\\,000 = 12\\,000\\ \\text{kJ m}^{-2}$ per year. Herbivores receive $10\\% \\times 12\\,000 = 1\\,200\\ \\text{kJ m}^{-2}$, and secondary consumers receive $10\\% \\times 1\\,200 = 120\\ \\text{kJ m}^{-2}$ per year.",
        },
      },
      questions: [
        {
          id: "biohl-u5-energy-flow-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what percentage of the energy entering a trophic level is typically transferred to the next trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90\\%$" },
              { id: "b", text: "$50\\%$" },
              { id: "c", text: "$10\\%$" },
              { id: "d", text: "$1\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent law", statement: "Roughly $10\\%$ of energy is transferred between trophic levels; about $90\\%$ is lost as heat, waste and uneaten tissue." },
            ],
            steps: [
              { reasoning: "Recall that energy transfer between trophic levels averages about 10%.", working: "10\\%", marks: 1, markCode: "M" },
              { reasoning: "This is why food chains are short and top predators are scarce.", working: "\\text{short chains}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $10\\%$",
            commonErrors: ["Choosing $90\\%$ — that is the proportion LOST, not transferred."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A grassland ecosystem has GPP of $30\\ 000\\ \\text{kJ m}^{-2}$ per year and producer respiration of $12\\ 000\\ \\text{kJ m}^{-2}$ per year. What is the net primary productivity (NPP) available to herbivores?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30\\,000\\ \\text{kJ m}^{-2}$" },
              { id: "b", text: "$18\\,000\\ \\text{kJ m}^{-2}$" },
              { id: "c", text: "$42\\,000\\ \\text{kJ m}^{-2}$" },
              { id: "d", text: "$12\\,000\\ \\text{kJ m}^{-2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NPP", statement: "$\\text{NPP} = \\text{GPP} - \\text{respiration}$; only NPP is available to consumers." },
            ],
            steps: [
              { reasoning: "NPP equals gross primary productivity minus producer respiration.", working: "\\text{NPP} = \\text{GPP} - R", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $30\\,000 - 12\\,000$.", working: "30\\,000 - 12\\,000", marks: 1, markCode: "M" },
              { reasoning: "This gives $18\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "= 18\\,000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $18\\,000\\ \\text{kJ m}^{-2}$",
            commonErrors: ["Using GPP directly — forgetting to subtract respiration gives $30\\,000$, which overstates available energy."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A lake food web shows the following pyramid of numbers: 1 phytoplankton species (millions of cells), 3 zooplankton species, 2 small fish species and 1 osprey species. Why can this pyramid be inverted while the energy pyramid cannot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy pyramids can never invert because energy is recycled between levels" },
              { id: "b", text: "Number pyramids can invert because few large producers can support many small consumers; energy always decreases upward so energy pyramids are always upright" },
              { id: "c", text: "Energy pyramids are always upright because producers are always the most numerous" },
              { id: "d", text: "Number pyramids cannot invert; only biomass pyramids can" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pyramid types", statement: "Pyramids of numbers can invert (few large producers support many consumers); pyramids of energy are always upright because energy is lost at each transfer." },
            ],
            steps: [
              { reasoning: "Numbers depend on individual size — one huge phytoplankton bloom or tree can support vast numbers of tiny consumers.", working: "\\text{size vs number}", marks: 1, markCode: "M" },
              { reasoning: "Energy must flow upward and $\\sim 90\\%$ is lost each level, so energy content strictly decreases — energy pyramids cannot invert.", working: "\\text{energy lost}", marks: 1, markCode: "M" },
              { reasoning: "The lake example shows few producer species supporting many consumer individuals — an inverted number pyramid.", working: "\\text{inverted numbers}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) gives the correct contrast between the two pyramid types.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Number pyramids can invert because few large producers can support many small consumers; energy always decreases upward so energy pyramids are always upright",
            commonErrors: ["Claiming energy is recycled — energy flows one way; only matter (nutrients) is recycled."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In a marine ecosystem, phytoplankton fix $50\\ 000\\ \\text{kJ m}^{-2}$ per year (GPP), of which $20\\ 000\\ \\text{kJ m}^{-2}$ is lost to phytoplankton respiration. Zooplankton eat phytoplankton with $10\\%$ transfer efficiency, small fish eat zooplankton at $10\\%$, and tuna eat small fish at $10\\%$.",
          parts: [
            { label: "a", prompt: "Calculate the NPP available to zooplankton.", marks: 2 },
            { label: "b", prompt: "Calculate the energy reaching tuna each year, showing each transfer step.", marks: 2 },
            { label: "c", prompt: "Explain why tuna populations are necessarily small even though the ocean is vast.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim that 'eating fish is an inefficient way to feed people' using the energy-transfer calculations and one additional ecological consideration.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent rule", statement: "About $10\\%$ of energy transfers between trophic levels; $\\text{NPP}=\\text{GPP}-\\text{respiration}$." },
            ],
            steps: [
              { part: "a", reasoning: "NPP $= 50\\,000 - 20\\,000 = 30\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "50\\,000 - 20\\,000 = 30\\,000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This is the energy available to primary consumers (zooplankton).", working: "\\text{NPP} = 30\\,000", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zooplankton get $10\\% \\times 30\\,000 = 3\\,000$; small fish get $10\\% \\times 3\\,000 = 300$; tuna get $10\\% \\times 300 = 30\\ \\text{kJ m}^{-2}$.", working: "300 \\times 0.10 = 30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only $30\\ \\text{kJ m}^{-2}$ per year reaches the top predator — three transfers each lose $90\\%$.", working: "30\\ \\text{kJ m}^{-2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each trophic level needs a large base of energy below it; at $10\\%$ efficiency the top level can support only a few individuals per unit area.", working: "\\text{energy pyramid}\\Rightarrow\\text{few top predators}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Tuna are therefore scarce, wide-ranging and slow to recover from overfishing.", working: "\\text{low density}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Supporting reasoning: producing 1 kg of tuna requires roughly 10 kg of fish, which requires 100 kg of zooplankton, which requires 1 000 kg of phytoplankton — an order-of-magnitude loss per step.", working: "1 \\to 10 \\to 100 \\to 1000\\ \\text{kg}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Counterpoint: fish farming and sustainable wild fisheries can be efficient; the claim is an over-simplification — judgement should weigh feed conversion ratios and sustainability.", working: "\\text{nuanced evaluation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $30\\,000\\ \\text{kJ m}^{-2}$ per year; (b) $30\\ \\text{kJ m}^{-2}$ reaches tuna ($30\\,000 \\to 3\\,000 \\to 300 \\to 30$); (c) the $10\\%$ rule means the top level has tiny energy support, so few individuals can exist; (d) trophic inefficiency makes predatory fish costly to produce, though aquaculture and sustainable management complicate the claim",
            commonErrors: ["Multiplying GPP by $0.1$ three times without subtracting respiration first — NPP must be used as the herbivore-available energy."],
            examinerNote: "M1 A1 (a), M1 A1 (b), R1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-energy-flow-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which type of ecological pyramid is always upright?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of numbers" },
              { id: "b", text: "Pyramid of biomass" },
              { id: "c", text: "Pyramid of energy" },
              { id: "d", text: "All three pyramids are always upright" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Energy pyramid", statement: "Energy pyramids are always upright because energy flows one way and about $90\\%$ is lost at each trophic transfer." },
            ],
            steps: [
              { reasoning: "Number and biomass pyramids can invert (e.g. one tree supports many insects; fast-turnover phytoplankton).", working: "\\text{numbers/biomass can invert}", marks: 1, markCode: "M" },
              { reasoning: "Energy cannot be recycled and always decreases upward, so the energy pyramid cannot invert.", working: "\\text{option c}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Pyramid of energy",
            commonErrors: ["Assuming biomass pyramids always decrease — they can invert where producers reproduce faster than consumers."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why is net primary productivity (NPP) always less than gross primary productivity (GPP)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because some producers are eaten before photosynthesising" },
              { id: "b", text: "Because producers use some of the energy they fix for their own respiration" },
              { id: "c", text: "Because energy is lost as heat to the atmosphere" },
              { id: "d", text: "Because only $10\\%$ of light reaches producers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NPP", statement: "$\\text{NPP} = \\text{GPP} - \\text{respiration}$; producers respire some fixed carbon for their own metabolism." },
            ],
            steps: [
              { reasoning: "GPP is total energy fixed by photosynthesis; producers must respire to stay alive, using part of that energy.", working: "\\text{NPP} = \\text{GPP} - R", marks: 1, markCode: "M" },
              { reasoning: "Only the remainder (NPP) is stored as biomass and available to consumers.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because producers use some of the energy they fix for their own respiration",
            commonErrors: ["Confusing NPP with the $10\\%$ transfer loss — that is a separate loss between trophic levels."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Why is a food web considered a more realistic model of an ecosystem than a single food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because food webs include decomposers while food chains do not" },
              { id: "b", text: "Because most organisms feed at several trophic levels and on several prey, so energy flows through many overlapping pathways" },
              { id: "c", text: "Because food chains cannot show predators" },
              { id: "d", text: "Because food webs always contain more species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food web", statement: "An interconnected network of feeding relationships; most species occupy multiple trophic roles and eat several prey." },
            ],
            steps: [
              { reasoning: "A food chain is a single linear pathway — an oversimplification.", working: "\\text{chain = 1 path}", marks: 1, markCode: "M" },
              { reasoning: "In reality organisms eat multiple prey and are eaten by multiple predators, creating overlapping pathways.", working: "\\text{multiple pathways}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly describes the network of feeding relationships.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because most organisms feed at several trophic levels and on several prey, so energy flows through many overlapping pathways",
            commonErrors: ["Claiming food chains omit decomposers — the key point is multiple feeding pathways, not decomposer inclusion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement best explains why food chains rarely exceed four or five trophic levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because producers cannot fix enough energy for more levels" },
              { id: "b", text: "Because about $90\\%$ of energy is lost at each transfer, so too little remains to support higher levels" },
              { id: "c", text: "Because top predators reproduce too slowly" },
              { id: "d", text: "Because decomposers consume all energy before it reaches the top" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent rule", statement: "About $10\\%$ of energy transfers between trophic levels; losses compound, leaving almost nothing after 4-5 levels." },
            ],
            steps: [
              { reasoning: "Each level retains only about $10\\%$ of the energy below it; after several transfers the remainder cannot sustain a population.", working: "0.1^n \\to 0", marks: 1, markCode: "M" },
              { reasoning: "This energy limitation, not reproduction or decomposers, sets the maximum chain length.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because about $90\\%$ of energy is lost at each transfer, so too little remains to support higher levels",
            commonErrors: ["Blaming decomposers — they recycle matter, but the limit on trophic levels is energy loss as heat."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-energy-flow-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Producers in an ecosystem fix $25\\,000\\ \\text{kJ m}^{-2}$ per year (GPP) and respire $10\\,000\\ \\text{kJ m}^{-2}$ per year. Calculate the net primary productivity (NPP) available to herbivores.",
          response: { type: "numeric", parts: [{ label: "NPP (kJ m$^{-2}$ yr$^{-1}$)", answer: 15000 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "NPP", statement: "$\\text{NPP} = \\text{GPP} - \\text{respiration}$." },
            ],
            steps: [
              { reasoning: "NPP equals GPP minus producer respiration.", working: "\\text{NPP} = \\text{GPP} - R", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values: $25\\,000 - 10\\,000$.", working: "25\\,000 - 10\\,000", marks: 1, markCode: "M" },
              { reasoning: "This gives $15\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "= 15\\,000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\,000\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Using GPP directly — respiration must be subtracted first."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An ecosystem has NPP of $15\\,000\\ \\text{kJ m}^{-2}$ per year. Assuming a $10\\%$ transfer efficiency at each trophic level, calculate the energy received by (a) primary consumers (herbivores) and (b) secondary consumers (carnivores).",
          response: { type: "numeric", parts: [{ label: "Energy to herbivores (kJ m$^{-2}$ yr$^{-1}$)", answer: 1500 }, { label: "Energy to carnivores (kJ m$^{-2}$ yr$^{-1}$)", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent rule", statement: "About $10\\%$ of the energy at one trophic level is transferred to the next." },
            ],
            steps: [
              { reasoning: "Herbivores receive $10\\%$ of NPP: $0.10 \\times 15\\,000$.", working: "0.10 \\times 15\\,000", marks: 1, markCode: "M" },
              { reasoning: "This gives $1\\,500\\ \\text{kJ m}^{-2}$ per year to herbivores.", working: "= 1\\,500", marks: 1, markCode: "A" },
              { reasoning: "Carnivores receive $10\\%$ of the herbivore level: $0.10 \\times 1\\,500$.", working: "0.10 \\times 1\\,500", marks: 1, markCode: "M" },
              { reasoning: "This gives $150\\ \\text{kJ m}^{-2}$ per year to carnivores.", working: "= 150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1\\,500\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$; (b) $150\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Applying $10\\%$ to GPP instead of NPP — only NPP is available to consumers."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Producers in a grassland fix $40\\,000\\ \\text{kJ m}^{-2}$ per year. Using a $10\\%$ transfer efficiency at each trophic level, calculate the energy received by (a) primary consumers and (b) secondary consumers each year.",
          response: { type: "numeric", parts: [{ label: "Energy to primary consumers (kJ m$^{-2}$ yr$^{-1}$)", answer: 4000 }, { label: "Energy to secondary consumers (kJ m$^{-2}$ yr$^{-1}$)", answer: 400 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent rule", statement: "Each trophic transfer retains about $10\\%$ of the energy; two transfers retain $0.1^2 = 1\\%$." },
            ],
            steps: [
              { reasoning: "Primary consumers receive $10\\%$ of producer energy: $0.10 \\times 40\\,000$.", working: "0.10 \\times 40\\,000", marks: 1, markCode: "M" },
              { reasoning: "This gives $4\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "= 4\\,000", marks: 1, markCode: "A" },
              { reasoning: "Secondary consumers receive $10\\%$ of the primary-consumer level: $0.10 \\times 4\\,000$ (or $1\\%$ of $40\\,000$).", working: "0.10 \\times 4\\,000", marks: 1, markCode: "M" },
              { reasoning: "This gives $400\\ \\text{kJ m}^{-2}$ per year.", working: "= 400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4\\,000\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$; (b) $400\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Applying $10\\%$ once instead of twice — secondary consumers are two transfers above producers."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 5,
          stem: "In a lake, phytoplankton fix $60\\,000\\ \\text{kJ m}^{-2}$ per year (GPP) and respire $20\\,000\\ \\text{kJ m}^{-2}$ per year. Energy transfer between trophic levels is $10\\%$.",
          response: { type: "numeric", parts: [{ label: "NPP (kJ m$^{-2}$ yr$^{-1}$)", answer: 40000 }, { label: "Energy reaching secondary consumers (kJ m$^{-2}$ yr$^{-1}$)", answer: 400 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "NPP and ten per cent rule", statement: "$\\text{NPP}=\\text{GPP}-\\text{respiration}$; $10\\%$ transfers per trophic level." },
            ],
            steps: [
              { reasoning: "NPP $= 60\\,000 - 20\\,000 = 40\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "60\\,000 - 20\\,000", marks: 1, markCode: "M" },
              { reasoning: "This is the energy available to primary consumers.", working: "= 40\\,000", marks: 1, markCode: "A" },
              { reasoning: "Zooplankton (primary) get $10\\% \\times 40\\,000 = 4\\,000$; small fish (secondary) get $10\\% \\times 4\\,000$.", working: "0.10 \\times 0.10 \\times 40\\,000", marks: 1, markCode: "M" },
              { reasoning: "Secondary consumers receive $400\\ \\text{kJ m}^{-2}$ per year — only $1\\%$ of the original GPP.", working: "= 400", marks: 1, markCode: "A" },
              { reasoning: "The two sequential $10\\%$ transfers compound to a $99\\%$ cumulative loss.", working: "0.1^2 = 0.01", marks: 1, markCode: "A" },
            ],
            finalAnswer: "NPP $= 40\\,000\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$; secondary consumers receive $400\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Starting the $10\\%$ chain from GPP — respiration must be subtracted first to get NPP."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Producers fix $50\\,000\\ \\text{kJ m}^{-2}$ per year. Using the ten per cent rule, how much energy reaches secondary consumers each year?",
          response: { type: "numeric", parts: [{ label: "Energy to secondary consumers (kJ m$^{-2}$ yr$^{-1}$)", answer: 500 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Ten per cent rule", statement: "Two trophic transfers retain $0.1 \\times 0.1 = 1\\%$ of producer energy." },
            ],
            steps: [
              { reasoning: "Secondary consumers are two transfers above producers: $50\\,000 \\times 0.10 \\times 0.10$.", working: "50\\,000 \\times 0.01", marks: 1, markCode: "M" },
              { reasoning: "This gives $500\\ \\text{kJ m}^{-2}$ per year.", working: "= 500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Applying $10\\%$ only once — two trophic levels lie between producers and secondary consumers."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Field measurements show that herbivores in a meadow actually transfer only $8\\%$ of the available NPP upward. If NPP is $25\\,000\\ \\text{kJ m}^{-2}$ per year, calculate the energy received by herbivores.",
          response: { type: "numeric", parts: [{ label: "Energy to herbivores (kJ m$^{-2}$ yr$^{-1}$)", answer: 2000 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Transfer efficiency", statement: "Energy transferred $= \\text{efficiency} \\times \\text{NPP}$; measured efficiencies vary around the $10\\%$ rule." },
            ],
            steps: [
              { reasoning: "The transfer applies to NPP (the energy available to consumers), not GPP.", working: "\\text{use NPP}", marks: 1, markCode: "M" },
              { reasoning: "Compute $0.08 \\times 25\\,000$.", working: "0.08 \\times 25\\,000", marks: 1, markCode: "M" },
              { reasoning: "Herbivores receive $2\\,000\\ \\text{kJ m}^{-2}$ per year.", working: "= 2\\,000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\,000\\ \\text{kJ m}^{-2}\\ \\text{yr}^{-1}$",
            commonErrors: ["Using $10\\%$ instead of the measured $8\\%$ — the question supplies a specific efficiency."],
          },
        },
        {
          id: "biohl-u5-energy-flow-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A grassland food web includes grasses, grasshoppers, mice, snakes, hawks and decomposers. Producers fix $50\\,000\\ \\text{kJ m}^{-2}$ per year.",
          parts: [
            { label: "a", prompt: "Distinguish between a pyramid of numbers, a pyramid of biomass and a pyramid of energy.", marks: 2 },
            { label: "b", prompt: "Explain why only the energy pyramid must always be upright.", marks: 2 },
            { label: "c", prompt: "Explain what NPP represents and why it — not GPP — determines the energy available to herbivores.", marks: 2 },
            { label: "d", prompt: "Evaluate the usefulness of a food chain versus a food web for predicting the effect of removing hawks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyramid types", statement: "Numbers = counts, biomass = dry mass, energy = energy flow per level; only energy is guaranteed to decrease upward." },
            ],
            steps: [
              { part: "a", reasoning: "Pyramid of numbers counts individuals per level; pyramid of biomass shows dry mass per level; pyramid of energy shows energy flow per level.", working: "\\text{count, mass, energy}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three definitions must be correct.", working: "\\text{3 definitions}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy flows one way and $\\sim90\\%$ is lost as heat at each transfer, so energy content strictly decreases — the pyramid cannot invert.", working: "\\text{one-way flow}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Numbers and biomass can invert (e.g. few large producers supporting many small consumers).", working: "\\text{others can invert}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "NPP $= \\text{GPP} - \\text{respiration}$ is the energy stored as producer biomass after their own metabolic costs.", working: "\\text{NPP} = \\text{GPP} - R", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Only stored biomass can be eaten, so herbivores can access NPP, not the respired fraction.", working: "\\text{only NPP edible}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A food chain would predict only a snake/mouse response; a food web captures alternative prey and predator pathways, giving a more realistic prediction of community effects.", working: "\\text{web = robust}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "However, webs require much more data; a simplified chain may suffice for a first approximation.", working: "\\text{data cost}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) numbers = counts, biomass = dry mass, energy = energy flow; (b) energy always decreases upward because it cannot be recycled and $\\sim90\\%$ is lost per transfer; (c) NPP is stored producer energy after respiration — the only fraction herbivores can consume; (d) food webs better capture indirect effects and alternative pathways but need more data",
            commonErrors: ["Claiming biomass pyramids are always upright — they can invert with fast-turnover producers like phytoplankton."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-energy-flow-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "A food chain runs: phytoplankton $\\rightarrow$ zooplankton $\\rightarrow$ small fish $\\rightarrow$ tuna. Phytoplankton NPP is $30\\,000\\ \\text{kJ m}^{-2}$ per year and transfer efficiency is $10\\%$ per level.",
          parts: [
            { label: "a", prompt: "Name the trophic level occupied by each organism in the chain.", marks: 2 },
            { label: "b", prompt: "Discuss why a human diet based on tuna is energetically far less efficient than one based on crops or herbivorous fish.", marks: 2 },
            { label: "c", prompt: "Evaluate one ecological argument against expanding tuna aquaculture as a protein source.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic levels", statement: "Producers = level 1, herbivores = level 2, carnivores = levels 3+; each transfer keeps $\\sim10\\%$ of energy." },
            ],
            steps: [
              { part: "a", reasoning: "Phytoplankton are producers (level 1), zooplankton primary consumers (level 2), small fish secondary consumers (level 3) and tuna tertiary consumers (level 4).", working: "1,2,3,4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four trophic levels must be correctly assigned.", working: "\\text{4 levels}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tuna sit at level 4, so only $0.1^3 = 0.1\\%$ of producer energy reaches them; crops sit at level 1 with $100\\%$ availability — an enormous efficiency gap.", working: "0.1^3 = 0.001", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Feeding people lower on the food chain conserves land, water and energy — a key argument for sustainable diets.", working: "\\text{eat low}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tuna farming typically feeds wild-caught fishmeal, so it can increase pressure on wild fish stocks rather than relieve it — the 'feed conversion' problem.", working: "\\text{fishmeal input}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Other concerns: escapes of farmed fish, disease transfer and waste pollution — aquaculture is not automatically sustainable.", working: "\\text{externalities}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) phytoplankton producer, zooplankton primary consumer, small fish secondary consumer, tuna tertiary consumer; (b) tuna retain only $\\sim0.1\\%$ of producer energy versus $100\\%$ for crops — huge efficiency loss; (c) tuna farming often depends on wild fishmeal and creates pollution/escape risks, so it may not reduce fishing pressure",
            commonErrors: ["Counting trophic levels from zero — producers are level 1."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
    {
      id: "biohl-u5-community-interactions",
      title: "Interspecific interactions and community structure",
      skill: "Classify species interactions by their effect on each participant and explain keystone species, competitive exclusion and trophic cascades.",
      lesson: {
        sections: [
          {
            heading: "Types of interaction",
            body: "Interactions are classified by their effect on each species: **competition** (−/−), **predation and herbivory** (+/−), **parasitism** (+/−), **mutualism** (+/+), and **commensalism** (+/0). Competition may be **interference** (direct aggression) or **exploitation** (indirect, through shared resource depletion). **Competitive exclusion** states that two species with identical niches cannot coexist — one is driven to extinction locally, as Gause showed with paramecia.",
          },
          {
            heading: "Keystone species and trophic cascades",
            body: "A **keystone species** has effects disproportionate to its abundance. Sea otters control sea urchin numbers, which in turn protects kelp forests; wolves in Yellowstone reduced elk browsing, allowing willow and aspen recovery that benefited beavers and birds. Removing a keystone triggers a **trophic cascade** — changes that ripple through multiple trophic levels.",
          },
          {
            heading: "Community structure",
            body: "Species richness and evenness describe community diversity. Niche differentiation — partitioning of resources such as feeding times or prey sizes — allows competitors to coexist (resource partitioning, e.g. Darwin's finches). Community structure emerges from the balance of all interactions and is sensitive to disturbance, invasions and environmental change.",
          },
        ],
        keyFormulas: [
          { name: "Interaction notation", statement: "+ benefit, − harm, 0 neutral for each species" },
          { name: "Competitive exclusion", statement: "Two species cannot share an identical niche indefinitely" },
          { name: "Resource partitioning", statement: "Niche differentiation reduces competition and permits coexistence" },
        ],
        workedExample: {
          problem: "Sea otters decline in number along a coastline. Sea urchin numbers then explode and kelp forests disappear. Identify the interaction types and the concept demonstrated.",
          solution: "Otters **predate** on urchins (+/−); urchins **graze** on kelp (+/−). The otter is a **keystone species**: its decline released urchins from predation, and the resulting **trophic cascade** destroyed the kelp forest — an effect far larger than the otters' abundance would predict.",
        },
      },
      questions: [
        {
          id: "biohl-u5-community-interactions-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Bees collect nectar from flowers while pollinating them. Both species benefit. What is this interaction called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parasitism" },
              { id: "b", text: "Commensalism" },
              { id: "c", text: "Mutualism" },
              { id: "d", text: "Competition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutualism", statement: "An interaction in which both species benefit (+/+), e.g. bee-flower pollination." },
            ],
            steps: [
              { reasoning: "Both bees (food) and flowers (pollination) gain — a +/+ interaction.", working: "+/+", marks: 1, markCode: "M" },
              { reasoning: "A +/+ interaction is mutualism.", working: "\\text{mutualism}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Mutualism",
            commonErrors: ["Calling it commensalism — commensalism is +/0 where one species is unaffected."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Gause grew two Paramecium species in the same culture with a single shared food source. One species always outcompeted and eliminated the other. Which principle does this demonstrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competitive exclusion" },
              { id: "b", text: "Resource partitioning" },
              { id: "c", text: "Trophic cascade" },
              { id: "d", text: "Character displacement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Competitive exclusion principle", statement: "Two species competing for exactly the same limiting resource cannot coexist; the better competitor excludes the other." },
            ],
            steps: [
              { reasoning: "Both paramecia used the same single food resource — identical niches.", working: "\\text{identical niches}", marks: 1, markCode: "M" },
              { reasoning: "One species consistently eliminated the other — direct evidence for competitive exclusion.", working: "\\text{exclusion}", marks: 1, markCode: "M" },
              { reasoning: "Coexistence in nature requires niche differentiation, which was absent in the experiment.", working: "\\text{niche needed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Competitive exclusion",
            commonErrors: ["Choosing resource partitioning — partitioning is how species AVOID exclusion by dividing resources."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In Yellowstone, reintroduced wolves reduced elk numbers and changed elk behaviour (less time in open valleys). Willow and aspen recovered, benefiting beavers, songbirds and fish. What is the most accurate interpretation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wolves directly increased willow growth through pollination" },
              { id: "b", text: "A trophic cascade: wolves (keystone predator) altered elk herbivory, releasing vegetation and benefiting multiple trophic levels" },
              { id: "c", text: "Competitive exclusion removed the elk population entirely" },
              { id: "d", text: "The wolves and elk formed a mutualistic relationship" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trophic cascade", statement: "A top predator's effect propagates down trophic levels, restructuring the whole community." },
              { kind: "definition", name: "Keystone species", statement: "Disproportionate impact relative to abundance; wolves qualify." },
            ],
            steps: [
              { reasoning: "Wolves prey on elk (+/−), reducing elk numbers and altering their grazing behaviour.", working: "\\text{predation effect}", marks: 1, markCode: "M" },
              { reasoning: "Reduced elk browsing allowed willow/aspen to recover — a release of producers from herbivory.", working: "\\text{vegetation release}", marks: 1, markCode: "M" },
              { reasoning: "Beavers, birds and fish then benefited — effects cascaded through several trophic levels.", working: "\\text{multi-level effects}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly identifies the trophic cascade mechanism.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A trophic cascade: wolves (keystone predator) altered elk herbivory, releasing vegetation and benefiting multiple trophic levels",
            commonErrors: ["Attributing the vegetation recovery to direct wolf effects — the mechanism runs through elk behaviour and numbers."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A kelp forest ecosystem supports sea otters, sea urchins, kelp and the fish that shelter in kelp. Fisheries data show otter numbers have fallen by 80% over a decade while urchin numbers have tripled and kelp cover has collapsed.",
          parts: [
            { label: "a", prompt: "Identify the interaction between otters and urchins and between urchins and kelp, using +/−/0 notation.", marks: 2 },
            { label: "b", prompt: "Explain why the otter is described as a keystone species in this ecosystem.", marks: 2 },
            { label: "c", prompt: "Describe the trophic cascade that followed the otter decline.", marks: 2 },
            { label: "d", prompt: "Evaluate two conservation strategies for restoring the kelp forest and predict which would act fastest.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Keystone species and trophic cascade", statement: "Removing a keystone predator releases its prey, which then over-exploits a lower trophic level, restructuring the community." },
            ],
            steps: [
              { part: "a", reasoning: "Otters eat urchins: + for otters, − for urchins. Urchins graze kelp: + for urchins, − for kelp.", working: "\\text{otter/urchin }+/-\\text{; urchin/kelp }+/-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both are predator-prey (herbivore) interactions benefiting the consumer at the prey's expense.", working: "\\text{predation/herbivory}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Despite modest abundance, otters suppress urchin numbers enough to keep kelp forests — an effect far exceeding their biomass.", working: "\\text{disproportionate effect}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Their removal caused ecosystem collapse, confirming keystone status.", working: "\\text{collapse on removal}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fewer otters → more urchins → heavy kelp grazing → kelp loss → loss of fish habitat and food-web disruption.", working: "\\text{cascade chain}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effects propagated through at least three trophic levels — a true trophic cascade.", working: "\\text{3+ levels}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Strategy 1: reintroduce/protect otters — restores top-down control but slow (population growth takes years).", working: "\\text{otter reintroduction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Strategy 2: cull urchins directly — faster kelp recovery but requires ongoing effort; ideally combine both.", working: "\\text{urchin culling}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) otter/urchin +/− predation; urchin/kelp +/− herbivory; (b) otters disproportionately control urchins and hence kelp — keystone status confirmed by collapse after decline; (c) otter loss → urchin explosion → kelp collapse → fish habitat loss; (d) otter protection is slow but self-sustaining; urchin culling acts faster but needs maintenance — combined approach best",
            commonErrors: ["Describing the otter-urchin link as mutualism — only the otter benefits."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-community-interactions-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Barnacles attach to the skin of a whale. The barnacles gain a free ride and feeding opportunities, while the whale is unaffected. What is this interaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parasitism" },
              { id: "b", text: "Mutualism" },
              { id: "c", text: "Commensalism" },
              { id: "d", text: "Competition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Commensalism", statement: "A +/0 interaction in which one species benefits and the other is unaffected, e.g. barnacles on whales." },
            ],
            steps: [
              { reasoning: "Barnacles benefit (+) while the whale experiences no measurable cost or benefit (0) — a +/0 interaction.", working: "+/0", marks: 1, markCode: "M" },
              { reasoning: "A +/0 interaction is commensalism.", working: "\\text{commensalism}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Commensalism",
            commonErrors: ["Calling it mutualism — mutualism requires BOTH species to benefit (+/+)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Using +/−/0 notation for the effect on each species, how is a predator–prey interaction classified?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "+ for predator, + for prey" },
              { id: "b", text: "+ for predator, − for prey" },
              { id: "c", text: "− for predator, + for prey" },
              { id: "d", text: "− for both species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interaction notation", statement: "+ benefit, − harm, 0 neutral, listed for each species in order." },
            ],
            steps: [
              { reasoning: "The predator gains food (+) while the prey is killed or harmed (−).", working: "+/-", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly gives + for the predator and − for the prey.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** + for predator, − for prey",
            commonErrors: ["Reversing the signs — the predator always benefits at the prey's expense."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Darwin's finches on the Galápagos Islands coexist by feeding at different heights and eating different seed sizes. What is this mechanism called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competitive exclusion" },
              { id: "b", text: "Resource partitioning (niche differentiation)" },
              { id: "c", text: "Trophic cascade" },
              { id: "d", text: "Character displacement through predation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resource partitioning", statement: "Niche differentiation — species divide resources (food, space, time) to reduce competition and coexist." },
            ],
            steps: [
              { reasoning: "The finches share a habitat but divide resources by feeding height and seed size — niche differentiation.", working: "\\text{divided resources}", marks: 1, markCode: "M" },
              { reasoning: "Dividing resources reduces competition, allowing coexistence — this is resource partitioning.", working: "\\text{coexistence}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) correctly names the mechanism.", working: "\\text{option b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Resource partitioning (niche differentiation)",
            commonErrors: ["Choosing competitive exclusion — exclusion occurs when niches are IDENTICAL; partitioning prevents it."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Two lizard species in a desert have exactly the same diet, microhabitat and activity time. According to the competitive exclusion principle, what is the most likely outcome?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They will coexist indefinitely at equal densities" },
              { id: "b", text: "They will partition resources and diverge" },
              { id: "c", text: "One species will exclude the other locally" },
              { id: "d", text: "They will form a mutualism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Competitive exclusion principle", statement: "Two species competing for exactly the same limiting resources cannot coexist indefinitely; one excludes the other." },
            ],
            steps: [
              { reasoning: "Identical diet, microhabitat and activity time mean identical niches — direct competition for the same resources.", working: "\\text{identical niches}", marks: 1, markCode: "M" },
              { reasoning: "The competitive exclusion principle predicts one species will be driven out locally.", working: "\\text{exclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** One species will exclude the other locally",
            commonErrors: ["Assuming equal competition means coexistence — the principle requires niche differentiation for stable coexistence."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u5-community-interactions-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A food web study records 30 feeding interactions: 7 are predator–prey, 3 are herbivory, 1 is parasitism and the remaining 19 include 18 mutualisms and 1 commensalism. How many of the 30 interactions are +/− (one benefits, one is harmed)?",
          response: { type: "numeric", parts: [{ label: "Number of +/− interactions", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interaction notation", statement: "Predation, herbivory and parasitism are all +/− interactions; mutualism is +/+ and commensalism is +/0." },
            ],
            steps: [
              { reasoning: "Predation (7), herbivory (3) and parasitism (1) are all +/−: $7 + 3 + 1$.", working: "7 + 3 + 1", marks: 1, markCode: "M" },
              { reasoning: "This gives $11$ +/− interactions; mutualism and commensalism do not count.", working: "= 11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$ interactions",
            commonErrors: ["Including mutualisms — mutualism is +/+, not +/−."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "After wolves were reintroduced to a region, the local elk population — previously at $400$ animals — rose to $640$ within five years. Calculate the percentage increase in the elk population.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Compute the absolute increase: $640 - 400 = 240$.", working: "640 - 400 = 240", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original population and multiply by 100: $\\frac{240}{400} \\times 100$.", working: "\\frac{240}{400} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives a $60\\%$ increase.", working: "= 60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\%$ increase",
            commonErrors: ["Dividing by the NEW population — percentage change always uses the original value as denominator."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A quadrat survey of a meadow community records $20$ individual organisms belonging to $5$ species, with counts of $8$, $6$, $4$, $1$ and $1$ individuals respectively. Calculate (a) the species richness and (b) the proportion of the community made up by the most abundant species, as a percentage.",
          response: { type: "numeric", parts: [{ label: "Species richness", answer: 5 }, { label: "Proportion of most abundant species (%)", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Species richness", statement: "The number of different species present in a community, regardless of abundance." },
            ],
            steps: [
              { reasoning: "Species richness is simply the count of distinct species: $5$.", working: "5 \\text{ species}", marks: 1, markCode: "M" },
              { reasoning: "This gives a richness of $5$.", working: "= 5", marks: 1, markCode: "A" },
              { reasoning: "The most abundant species has $8$ individuals out of $20$: $\\frac{8}{20} \\times 100$.", working: "\\frac{8}{20} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $40\\%$ of the community.", working: "= 40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$ species; (b) $40\\%$",
            commonErrors: ["Confusing richness with total individuals — richness counts species, not organisms."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 4,
          stem: "Along a coastline, sea otter numbers fell from $500$ to $100$ over a decade. Sea urchin density rose from $10\\ \\text{m}^{-2}$ to $40\\ \\text{m}^{-2}$ in the same period.",
          response: { type: "numeric", parts: [{ label: "Percentage decline in otters", answer: 80, unit: "%" }, { label: "Percentage increase in urchins", answer: 300, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$; releases from predation can produce large prey increases." },
            ],
            steps: [
              { reasoning: "Otter decline $= \\frac{500 - 100}{500} \\times 100 = \\frac{400}{500} \\times 100$.", working: "\\frac{400}{500} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives an $80\\%$ decline in otters.", working: "= 80\\%", marks: 1, markCode: "A" },
              { reasoning: "Urchin increase $= \\frac{40 - 10}{10} \\times 100 = \\frac{30}{10} \\times 100$.", working: "\\frac{30}{10} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives a $300\\%$ increase — consistent with release from predation pressure.", working: "= 300\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $80\\%$ decline in otters; (b) $300\\%$ increase in urchins",
            commonErrors: ["Dividing the urchin change by the new value — use the original $10\\ \\text{m}^{-2}$ as the base."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a survey of 30 interspecific interactions in a rockpool community, 12 are classified as +/−, 15 as +/+, and 3 as +/0. What percentage of interactions are +/−?",
          response: { type: "numeric", parts: [{ label: "Percentage of +/− interactions", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interaction notation", statement: "+/− interactions include predation, herbivory and parasitism." },
            ],
            steps: [
              { reasoning: "Compute $\\frac{12}{30} \\times 100$.", working: "\\frac{12}{30} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives $40\\%$.", working: "= 40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: ["Including +/+ mutualisms in the +/− count — mutualism benefits both species."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In Gause's classic experiment, Paramecium caudatum alone reached a population of $400$ individuals. When grown with the superior competitor P. aurelia, only $20$ P. caudatum survived. Calculate the percentage reduction in P. caudatum numbers caused by competition.",
          response: { type: "numeric", parts: [{ label: "Percentage reduction", answer: 95, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Competitive exclusion", statement: "Two species sharing one limiting resource cannot coexist; the inferior competitor is excluded." },
            ],
            steps: [
              { reasoning: "Compute the reduction: $400 - 20 = 380$ individuals lost.", working: "400 - 20 = 380", marks: 1, markCode: "M" },
              { reasoning: "Express as a percentage of the original $400$: $\\frac{380}{400} \\times 100$.", working: "\\frac{380}{400} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "This gives a $95\\%$ reduction — near-complete exclusion.", working: "= 95\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$95\\%$ reduction",
            commonErrors: ["Using $20$ as the base — percentage change is always relative to the original (solitary) population."],
          },
        },
        {
          id: "biohl-u5-community-interactions-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A coral reef community contains corals, algae, parrotfish (herbivores), sharks (carnivores), cleaner wrasse (mutualists) and a parasitic copepod.",
          parts: [
            { label: "a", prompt: "Classify each named interaction using +/−/0 notation.", marks: 2 },
            { label: "b", prompt: "Explain the competitive exclusion principle and give one condition that allows competitors to coexist.", marks: 2 },
            { label: "c", prompt: "Describe how a keystone predator can generate a trophic cascade in such a community.", marks: 2 },
            { label: "d", prompt: "Evaluate the role of resource partitioning in maintaining reef biodiversity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Community interactions", statement: "Interactions range from +/+ mutualism to −/− competition; keystone species and niche partitioning structure communities." },
            ],
            steps: [
              { part: "a", reasoning: "Parrotfish grazing algae = +/− herbivory; sharks eating fish = +/− predation; cleaner wrasse removing parasites = +/+ mutualism; copepod on fish = +/− parasitism.", working: "herbivory, predation, mutualism, parasitism", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four interaction types must be correctly classified with signs.", working: "\\text{4 types}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Competitive exclusion: two species sharing an identical niche cannot coexist — one is eliminated.", working: "\\text{identical niche} \\to \\text{exclusion}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Coexistence is possible when species partition resources (different feeding times, prey sizes or microhabitats).", working: "\\text{resource partitioning}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A keystone predator (e.g. sharks) controls herbivore numbers; removing it releases herbivores to overgraze algae, which then affects corals and the whole web.", working: "\\text{top-down control}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effects propagate through multiple trophic levels — a trophic cascade restructuring the community.", working: "\\text{trophic cascade}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Partitioning reduces competition so more species can coexist, raising biodiversity — but it requires distinct resource niches to exist.", working: "\\text{more niches = more species}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Where resources are truly identical, exclusion still occurs — partitioning explains coexistence, not its guarantee.", working: "\\text{limits of partitioning}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) herbivory +/−, predation +/−, mutualism +/+, parasitism +/−; (b) identical niches cannot coexist — partitioning enables coexistence; (c) keystone predator removal releases prey, cascading through levels; (d) partitioning supports high diversity but only where distinct niches exist",
            commonErrors: ["Classifying cleaner wrasse as commensalism — both fish and wrasse benefit, so it is mutualism."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u5-community-interactions-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 6,
          stem: "A farmer wants to control an aphid pest on his crop. He can introduce a parasitic wasp that attacks only aphids, or spray a broad-spectrum insecticide that kills aphids, ladybirds and pollinating bees.",
          parts: [
            { label: "a", prompt: "Distinguish between interference and exploitation competition, giving one example of each relevant to this farm.", marks: 2 },
            { label: "b", prompt: "Predict the short-term and long-term outcomes of each pest-control method for the wider farm community.", marks: 2 },
            { label: "c", prompt: "Evaluate which method a conservation-minded farmer should choose and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Competition types", statement: "Interference = direct aggression over resources; exploitation = indirect depletion of a shared resource." },
            ],
            steps: [
              { part: "a", reasoning: "Interference is direct confrontation (e.g. aphids and ladybird larvae fighting over the same leaf); exploitation is indirect — one species reduces a shared resource (e.g. aphids and other sap-feeders depleting plant sap).", working: "\\text{direct vs indirect}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both examples must correctly illustrate the two competition types.", working: "\\text{2 examples}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The wasp gives targeted, self-sustaining control but may take seasons to establish; the insecticide gives immediate knock-down but also kills beneficial insects and may select for resistant aphids.", working: "\\text{targeted vs broad}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Long-term, biological control preserves natural enemies (ladybirds keep aphids in check) while chemical control can cause pest resurgence and pollinator loss.", working: "\\text{long-term effects}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The conservation-minded choice is the parasitic wasp: it is species-specific (+/− only on aphids), preserves pollinators and ladybirds, and is self-sustaining.", working: "\\text{wasp = sustainable}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The insecticide's collateral damage to bees and natural enemies creates worse pest problems later — an example of a trophic-level side effect.", working: "\\text{collateral damage}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) interference = direct aggression (aphids vs ladybird larvae on leaves); exploitation = shared resource depletion (sap-feeders draining phloem); (b) wasp gives slow but self-sustaining control preserving beneficials; insecticide gives fast knock-down but kills bees/ladybirds and risks resistance; (c) choose the wasp — targeted, sustainable, preserves community structure",
            commonErrors: ["Treating all pest control as equal — specificity determines the community-level consequences."],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c).",
          },
        },
      ],
    },
  ],
};
