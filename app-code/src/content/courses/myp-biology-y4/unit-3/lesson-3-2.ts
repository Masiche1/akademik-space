import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypb4-u3-lesson-3-2",
  code: "3-2",
  title: "Ecosystems and Energy Flow",
  goal: "I CAN describe food chains and webs, trophic levels, and explain energy transfer through ecosystems.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms interacting with each other and their abiotic environment." },
    { term: "Food chain", definition: "Linear sequence showing energy transfer: producer → consumer → top predator." },
    { term: "Food web", definition: "Interconnected food chains showing complex feeding relationships." },
    { term: "Trophic level", definition: "Position in food chain: producer (1), primary consumer (2), secondary consumer (3), etc." },
    { term: "Producer", definition: "Autotroph (plant/alga) producing food via photosynthesis — base of food chain." },
    { term: "Decomposer", definition: "Organism (bacteria/fungi) breaking down dead matter, recycling nutrients." },
  ],
  concepts: [
    {
      id: "mypb4-u3-food-chains",
      title: "Food chains and trophic levels",
      skill: "Construct food chains/webs and identify trophic levels and energy flow direction.",
      lesson: {
        sections: [
          {
            heading: "Food chain structure",
            body: "**Producer** (plant) → **Primary consumer** (herbivore) → **Secondary consumer** (carnivore) → **Tertiary consumer** (top predator). Arrows point in direction of energy flow (who eats whom). Decomposers recycle nutrients from all levels.",
          },
          {
            heading: "Food webs",
            body: "Real ecosystems have interconnected chains = **food web**. More complex = more stable. If one species removed, alternative food sources may buffer the effect — but keystone species removal can collapse the web.",
          },
          {
            heading: "Energy pyramid",
            body: "Only ~10% of energy transfers between trophic levels; rest lost as heat, waste, uneaten tissue. This limits food chain length (~4-5 levels max). Energy flows one way (sun → producers → consumers); matter cycles.",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "Producer → herbivore → carnivore → top predator" },
          { name: "Energy transfer", statement: "~10% efficiency between levels" },
          { name: "Arrow direction", statement: "Points to eater (energy flow)" },
        ],
        workedExample: {
          problem: "Grass → rabbit → fox → eagle. Identify trophic levels.",
          solution: "Grass=producer (T1), rabbit=primary consumer (T2), fox=secondary (T3), eagle=tertiary (T4).",
        },
      },
      questions: [
        {
          id: "mypb4-u3-food-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain grass → rabbit → fox, what is the rabbit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary consumer (herbivore)" },
              { id: "b", text: "Producer" },
              { id: "c", text: "Secondary consumer" },
              { id: "d", text: "Top predator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic levels", statement: "Herbivores eating producers = primary consumers." },
            ],
            steps: [
              { reasoning: "Rabbit eats grass (producer) → primary consumer.", working: "\\text{primary consumer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Primary consumer",
            commonErrors: ["Calling it a producer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-food-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do arrows in a food chain represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction of energy flow" },
              { id: "b", text: "Who eats whom only" },
              { id: "c", text: "Movement of organisms" },
              { id: "d", text: "Direction of water flow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arrow meaning", statement: "Arrows show energy transfer direction (producer→consumer)." },
            ],
            steps: [
              { reasoning: "Arrows point from food to eater = energy flow.", working: "\\text{energy flow}", marks: 1, markCode: "M" },
              { reasoning: "State the meaning.", working: "\\text{arrow}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direction of energy flow",
            commonErrors: ["Reading arrows backwards."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are food chains usually limited to 4-5 trophic levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only ~10% of energy transfers between levels; insufficient energy remains for more levels" },
              { id: "b", text: "There aren't enough species" },
              { id: "c", text: "Decomposers eat all top predators" },
              { id: "d", text: "Food chains must be simple" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy pyramid", statement: "~90% energy lost each level → can't support more." },
            ],
            steps: [
              { reasoning: "Only ~10% energy passes to next level.", working: "10\\%", marks: 1, markCode: "M" },
              { reasoning: "Rest lost as heat/waste → insufficient for higher levels.", working: "\\text{energy loss}", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{energy limit}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy loss limits chain length",
            commonErrors: ["Saying matter is lost — it's recycled."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Grass → grasshopper → frog → snake → hawk.",
          parts: [
            { label: "a", prompt: "Label each trophic level.", marks: 2 },
            { label: "b", prompt: "Calculate energy reaching hawk if grass receives 10,000 kJ (10% transfer).", marks: 3 },
            { label: "c", prompt: "Explain why decomposers are essential to the ecosystem.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Energy pyramid", statement: "Each level gets 10% of previous → exponential decay." },
            ],
            steps: [
              { part: "a", reasoning: "Grass=T1, grasshopper=T2, frog=T3, snake=T4, hawk=T5.", working: "T1-T5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All levels correct.", working: "\\text{levels}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Grasshopper: 10000×0.1=1000; frog:100; snake:10; hawk:1 kJ.", working: "10^4\\to1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hawk receives 1 kJ.", working: "1\\text{ kJ}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Show calculation.", working: "0.1^4\\times10000", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Break down dead matter → release nutrients back to soil.", working: "\\text{nutrient recycling}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Return minerals for producers.", working: "\\text{mineral cycle}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Without decomposers nutrients locked in dead tissue.", working: "\\text{essential}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) T1-T5 (b) 1 kJ (c) recycle nutrients to soil",
            commonErrors: ["In (b), forgetting hawk is 4 transfers not 5."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypb4-u3-food-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is always found at the base of every food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A producer" },
              { id: "b", text: "A carnivore" },
              { id: "c", text: "A decomposer" },
              { id: "d", text: "A top predator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain base", statement: "Producers (plants/algae) form the base — they capture energy from the sun." },
            ],
            steps: [
              { reasoning: "Energy enters food chains via producers.", working: "\\text{producer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A producer",
            commonErrors: ["Choosing decomposer — they recycle, not produce."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-food-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do the arrows in a food chain represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The direction of energy flow" },
              { id: "b", text: "The direction of water flow" },
              { id: "c", text: "Migration patterns" },
              { id: "d", text: "Who is bigger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arrow meaning", statement: "Arrows point from food source to eater = direction of energy transfer." },
            ],
            steps: [
              { reasoning: "Arrows show energy flow from prey to predator.", working: "\\text{energy}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{arrow}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direction of energy flow",
            commonErrors: ["Reading arrows as 'who eats whom' reversed."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a food web generally more stable than a single food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple feeding pathways provide redundancy — if one species is lost, alternatives buffer the effect" },
              { id: "b", text: "Food webs have more energy" },
              { id: "c", text: "Food chains are always longer" },
              { id: "d", text: "Webs contain no predators" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food web stability", statement: "Interconnected chains = redundancy → resistance to species loss." },
            ],
            steps: [
              { reasoning: "Multiple food sources for each consumer.", working: "\\text{alternatives}", marks: 1, markCode: "M" },
              { reasoning: "Loss of one species doesn't collapse the whole system.", working: "\\text{buffer}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Redundancy provides stability",
            commonErrors: ["Saying food webs have more total energy."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the food chain grass → rabbit → fox → eagle: (a) What trophic level is the rabbit? (b) What trophic level is the eagle?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic levels", statement: "Producer=1, primary consumer=2, secondary=3, tertiary=4." },
            ],
            steps: [
              { reasoning: "Rabbit eats grass (producer) → primary consumer = level 2.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Eagle = top predator = level 4.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2, b) 4",
            commonErrors: ["Counting grass as level 0."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A producer captures 10,000 kJ of energy. With 10% transfer between trophic levels: (a) Energy at trophic level 2 (herbivore)? (b) Energy at trophic level 3 (carnivore)? (c) How much energy is lost overall?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000 },
              { label: "b", answer: 100 },
              { label: "c", answer: 9900 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transfer", statement: "Each level gets 10% of previous; loss = 10000 - final." },
            ],
            steps: [
              { reasoning: "T2 $= 10000 \\times 0.1 = 1000$ kJ.", working: "1000", marks: 1, markCode: "M" },
              { reasoning: "T3 $= 1000 \\times 0.1 = 100$ kJ.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Lost $= 10000 - 100 = 9900$ kJ.", working: "9900", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1000, b) 100, c) 9900 kJ",
            commonErrors: ["In (c), using only the last level's loss."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A food chain has 5 trophic levels with 20,000 kJ captured by producers. Assuming 10% transfer: (a) Energy at level 2? (b) Energy at level 3? (c) Energy at level 4? (d) Energy at level 5?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000 },
              { label: "b", answer: 200 },
              { label: "c", answer: 20 },
              { label: "d", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy pyramid", statement: "Each level = previous x 0.1." },
            ],
            steps: [
              { reasoning: "T2 $= 20000 \\times 0.1 = 2000$.", working: "2000", marks: 1, markCode: "M" },
              { reasoning: "T3 $= 2000 \\times 0.1 = 200$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "T4 $= 200 \\times 0.1 = 20$.", working: "20", marks: 1, markCode: "M" },
              { reasoning: "T5 $= 20 \\times 0.1 = 2$ kJ.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2000, b) 200, c) 20, d) 2 kJ",
            commonErrors: ["Applying 10% to 20000 each time instead of chaining."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many trophic levels are in the chain grass → grasshopper → frog?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic levels", statement: "Each organism = one trophic level." },
            ],
            steps: [
              { reasoning: "Grass=1, grasshopper=2, frog=3 → 3 levels.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting decomposers as a level in the chain."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-food-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Producers capture 8000 kJ. With 10% transfer through grass → rabbit → fox → eagle: (a) How much energy reaches the rabbit? (b) How much reaches the eagle?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 800 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transfer", statement: "Rabbit = 10% of grass; eagle = 10% of 10% of 10% of grass." },
            ],
            steps: [
              { reasoning: "Rabbit $= 8000 \\times 0.1 = 800$ kJ.", working: "800", marks: 1, markCode: "M" },
              { reasoning: "Eagle $= 8000 \\times 0.001 = 8$ kJ.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 800 kJ, b) 8 kJ",
            commonErrors: ["In (b), applying only two transfers instead of three."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Only 10% of energy transfers between trophic levels. Starting with 50,000 kJ at producers: (a) Energy at level 3? (b) Energy at level 5? (c) What percentage of original energy reaches level 5?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500 },
              { label: "b", answer: 5 },
              { label: "c", answer: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy pyramid", statement: "Tn energy = base x 0.1^(n-1); percentage = energy/base x 100." },
            ],
            steps: [
              { reasoning: "T3 $= 50000 \\times 0.01 = 500$ kJ.", working: "500", marks: 1, markCode: "M" },
              { reasoning: "T5 $= 50000 \\times 0.0001 = 5$ kJ.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= 5/50000 \\times 100 = 0.01\\%$.", working: "0.01\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 500, b) 5 kJ, c) 0.01%",
            commonErrors: ["In (c), answering 0.1% — that's one transfer not four."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-food-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following food chain terms.",
          parts: [
            { label: "a", prompt: "Producer", marks: 1 },
            { label: "b", prompt: "Primary consumer", marks: 1 },
            { label: "c", prompt: "Decomposer", marks: 1 },
            { label: "d", prompt: "Trophic level", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic terms", statement: "Producer=autotroph; primary consumer=herbivore; decomposer=recycles; trophic level=position in chain." },
            ],
            steps: [
              { part: "a", reasoning: "Organism producing own food via photosynthesis.", working: "\\text{photosynthesis}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Herbivore eating producers.", working: "\\text{herbivore}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Breaks down dead matter, recycling nutrients.", working: "\\text{recycle}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Position/feeding level in the food chain.", working: "\\text{level}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Producer=autotroph; primary=herbivore; decomposer=recycles; trophic level=position",
            commonErrors: ["Calling decomposers consumers."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-food-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain why energy pyramids limit food chain length.",
          parts: [
            { label: "a", prompt: "What percentage of energy transfers between levels?", marks: 1 },
            { label: "b", prompt: "Where does the lost energy go?", marks: 2 },
            { label: "c", prompt: "Why does this limit chain length?", marks: 2 },
            { label: "d", prompt: "What is the typical maximum number of levels?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy pyramid", statement: "~10% transfer; ~90% lost as heat/waste/uneaten → insufficient energy for more levels." },
            ],
            steps: [
              { part: "a", reasoning: "About 10%.", working: "10\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lost as heat from respiration.", working: "\\text{heat}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Also lost as waste, uneaten tissue, excretion.", working: "\\text{waste}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each level needs minimum energy to survive; after ~4-5 levels too little remains.", working: "\\text{minimum}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hence chains can't extend further.", working: "\\text{limit}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Usually 4-5 levels max.", working: "4-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10% (b) heat+waste (c) insufficient energy remains (d) 4-5 levels",
            commonErrors: ["Saying matter is lost — it cycles; energy doesn't."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-food-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What would happen to an ecosystem if all decomposers were removed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dead matter would accumulate and nutrients would be locked away — producers would eventually starve" },
              { id: "b", text: "Nothing — decomposers aren't important" },
              { id: "c", text: "More food would be available" },
              { id: "d", text: "Predators would increase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decomposer role", statement: "Decomposers recycle nutrients from dead matter back to soil for producers." },
            ],
            steps: [
              { reasoning: "Without decomposers, dead tissue isn't broken down.", working: "\\text{accumulate}", marks: 1, markCode: "M" },
              { reasoning: "Nutrients locked in dead matter → unavailable to plants.", working: "\\text{nutrients}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Nutrients locked away, ecosystem collapses",
            commonErrors: ["Saying decomposers are optional."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u3-nutrient-cycles",
      title: "Nutrient Cycles and Populations",
      skill: "Describe the carbon and nitrogen cycles and factors affecting population size.",
      lesson: {
        sections: [
          {
            heading: "Carbon cycle",
            body: "Atmospheric CO₂ → photosynthesis → glucose in plants → eaten by animals → respiration returns CO₂. Decomposers respire too. Fossil fuels store carbon → combustion releases CO₂. Ocean absorbs CO₂. Balanced cycle maintains atmospheric CO₂.",
          },
          {
            heading: "Nitrogen cycle",
            body: "Atmospheric N₂ unusable → **nitrogen-fixing bacteria** convert to nitrates → plants absorb → animals eat → **decomposers** return ammonium → **nitrifying bacteria** → nitrates again. **Denitrifying bacteria** return N₂ to atmosphere. Legumes host nitrogen-fixing bacteria in root nodules.",
          },
          {
            heading: "Population dynamics",
            body: "Population size affected by: birth rate, death rate, immigration, emigration. **Carrying capacity** = max population environment supports. Exponential growth → logistic growth → plateau at carrying capacity. Predator-prey cycles oscillate.",
          },
        ],
        keyFormulas: [
          { name: "Carbon cycle", statement: "CO₂ ↔ photosynthesis ↔ respiration ↔ combustion" },
          { name: "Nitrogen cycle", statement: "N₂ → fixation → nitrates → plants → animals → decomposers" },
          { name: "Population", statement: "Births+immigration vs deaths+emigration" },
        ],
        workedExample: {
          problem: "Why can't plants use atmospheric nitrogen directly?",
          solution: "N₂ is inert triple-bonded; only nitrogen-fixing bacteria can convert it to usable nitrates.",
        },
      },
      questions: [
        {
          id: "mypb4-u3-nutrient-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process returns carbon dioxide to the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respiration" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Nitrogen fixation" },
              { id: "d", text: "Absorption" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carbon cycle", statement: "Respiration releases CO₂; photosynthesis absorbs it." },
            ],
            steps: [
              { reasoning: "Respiration releases CO₂ as waste product.", working: "\\text{respiration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Respiration",
            commonErrors: ["Choosing photosynthesis — that absorbs CO₂."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-nutrient-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of nitrogen-fixing bacteria?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convert atmospheric N₂ into usable nitrates/nitrites for plants" },
              { id: "b", text: "Break down dead matter" },
              { id: "c", text: "Produce oxygen" },
              { id: "d", text: "Fix carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen fixation", statement: "Bacteria convert N₂ → nitrates plants can use." },
            ],
            steps: [
              { reasoning: "Fix atmospheric N₂ into plant-usable form.", working: "N_2 \\to \\text{nitrates}", marks: 1, markCode: "M" },
              { reasoning: "State the role.", working: "\\text{fixation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Convert N₂ to nitrates",
            commonErrors: ["Confusing with nitrifying bacteria (different step)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why legume crops (beans, peas) are often rotated with cereals.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legumes host nitrogen-fixing bacteria in root nodules, enriching soil nitrogen for subsequent crops" },
              { id: "b", text: "Legumes kill pests" },
              { id: "c", text: "Legumes use less water" },
              { id: "d", text: "Legumes break up soil only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nitrogen fixation", statement: "Rhizobium in legume nodules fixes N₂ → benefits soil." },
            ],
            steps: [
              { reasoning: "Legume roots host nitrogen-fixing bacteria.", working: "\\text{rhizobium}", marks: 1, markCode: "M" },
              { reasoning: "Bacteria add nitrogen to soil → next crop benefits.", working: "\\text{soil N}", marks: 1, markCode: "M" },
              { reasoning: "State the benefit.", working: "\\text{rotation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Legumes fix nitrogen enriching soil",
            commonErrors: ["Saying legumes 'produce' nitrogen gas."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A deer population in a forest.",
          parts: [
            { label: "a", prompt: "List four factors affecting population size.", marks: 2 },
            { label: "b", prompt: "Define carrying capacity.", marks: 1 },
            { label: "c", prompt: "Explain the difference between exponential and logistic growth.", marks: 3 },
            { label: "d", prompt: "Describe how a predator-prey relationship affects both populations.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Population ecology", statement: "Population size balances births/deaths/immigration/emigration." },
            ],
            steps: [
              { part: "a", reasoning: "Birth rate, death rate, immigration, emigration.", working: "\\text{4 factors}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four listed.", working: "\\text{complete}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Maximum population environment can sustain.", working: "\\text{carrying capacity}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exponential: unlimited growth curve J-shape.", working: "\\text{J-shape}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Logistic: slows near carrying capacity → S-shape plateau.", working: "\\text{S-shape}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain difference.", working: "\\text{carrying capacity}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "More prey → more predators (food); more predators → fewer prey → predator decline → cycle repeats.", working: "\\text{oscillation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Describe the feedback cycle.", working: "\\text{cycle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) births, deaths, immigration, emigration (b) max sustainable (c) exponential J vs logistic S (d) predator-prey oscillation",
            commonErrors: ["In (c), saying logistic keeps growing forever."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-nutrient-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process removes carbon dioxide from the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Respiration" },
              { id: "c", text: "Combustion" },
              { id: "d", text: "Decomposition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carbon cycle", statement: "Photosynthesis absorbs CO₂; respiration, combustion and decomposition release it." },
            ],
            steps: [
              { reasoning: "Photosynthesis uses CO₂ as a reactant.", working: "\\text{photosynthesis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Photosynthesis",
            commonErrors: ["Choosing respiration — it releases CO₂."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-nutrient-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do nitrogen-fixing bacteria convert atmospheric nitrogen into?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrates/nitrites usable by plants" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen fixation", statement: "Bacteria convert N₂ → nitrates/nitrites plants can absorb." },
            ],
            steps: [
              { reasoning: "Fixation produces plant-usable nitrogen compounds.", working: "N_2\\to\\text{nitrates}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{nitrates}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrates/nitrites",
            commonErrors: ["Confusing with nitrifying bacteria."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can't most plants use atmospheric nitrogen ($N_2$) directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The triple bond in N₂ is very strong — plants lack the enzymes to break it" },
              { id: "b", text: "N₂ is too heavy for roots to absorb" },
              { id: "c", text: "N₂ is poisonous to plants" },
              { id: "d", text: "Plants only absorb oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nitrogen fixation necessity", statement: "N≡N triple bond is inert; only specific bacteria can break it." },
            ],
            steps: [
              { reasoning: "N₂ has a very strong triple bond — chemically inert.", working: "N\\equiv N", marks: 1, markCode: "M" },
              { reasoning: "Plants cannot break it; bacteria can.", working: "\\text{bacteria}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Strong triple bond — needs bacteria",
            commonErrors: ["Saying N₂ is unavailable because it's a gas only."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Consider the carbon cycle processes: photosynthesis, respiration, combustion, decomposition. (a) How many of these RELEASE CO₂ to the atmosphere? (b) How many ABSORB CO₂?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carbon cycle", statement: "Photosynthesis absorbs CO₂; respiration, combustion, decomposition release it." },
            ],
            steps: [
              { reasoning: "Respiration + combustion + decomposition release = 3.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Only photosynthesis absorbs = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 1",
            commonErrors: ["Counting photosynthesis as releasing CO₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Soil contains 40 mg of plant-available nitrates. Plants absorb 25 mg, then decomposers return 10 mg as ammonium which nitrifying bacteria convert back to nitrates. (a) How many mg of nitrates remain after plant absorption? (b) How many mg return to the soil as nitrates? (c) What is the final nitrate level?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 10 },
              { label: "c", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Nitrogen cycle flux", statement: "Remaining = initial - absorbed; final = remaining + returned." },
            ],
            steps: [
              { reasoning: "After absorption: $40 - 25 = 15$ mg.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Nitrifiers convert 10 mg ammonium → 10 mg nitrates.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Final $= 15 + 10 = 25$ mg.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 15, b) 10, c) 25 mg",
            commonErrors: ["In (c), using 40 as starting point instead of 15."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A deer population of 200: births = 120, deaths = 80, immigration = 20, emigration = 30 over one year. (a) What is the net change in population? (b) What is the new population size? (c) What is the percentage growth rate? (d) By how many individuals is the new population below carrying capacity of 250?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 230 },
              { label: "c", answer: 15 },
              { label: "d", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population change", statement: "Net = births + immigration - deaths - emigration; growth % = net/original x 100." },
            ],
            steps: [
              { reasoning: "Net $= 120 + 20 - 80 - 30 = 30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "New $= 200 + 30 = 230$.", working: "230", marks: 1, markCode: "M" },
              { reasoning: "Growth $= 30/200 \\times 100 = 15\\%$.", working: "15\\%", marks: 1, markCode: "M" },
              { reasoning: "Below capacity $= 250 - 230 = 20$ individuals.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 30, b) 230, c) 15%, d) 20 below capacity",
            commonErrors: ["Forgetting to subtract emigration."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many named processes are involved in the nitrogen cycle: nitrogen fixation, decomposition, nitrification and denitrification?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen cycle", statement: "Four key processes: fixation, decomposition, nitrification, denitrification." },
            ],
            steps: [
              { reasoning: "Four named processes.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting photosynthesis as part of nitrogen cycle."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A prey population doubles each season in the absence of predators. Starting from 50 individuals: (a) How many after 2 seasons? (b) How many after 3 seasons?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200 },
              { label: "b", answer: 400 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential growth", statement: "Each season doubles: $50 \\times 2^n$." },
            ],
            steps: [
              { reasoning: "After 2 seasons: $50 \\times 4 = 200$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "After 3 seasons: $50 \\times 8 = 400$.", working: "400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 200, b) 400",
            commonErrors: ["Adding 50 per season instead of doubling."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A population grows by 10% per year from 1000 individuals. (a) Population after 1 year? (b) After 2 years? (c) After 3 years?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1100 },
              { label: "b", answer: 1210 },
              { label: "c", answer: 1331 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "Each year x 1.10 (compound, not simple)." },
            ],
            steps: [
              { reasoning: "$1000 \\times 1.1 = 1100$.", working: "1100", marks: 1, markCode: "M" },
              { reasoning: "$1100 \\times 1.1 = 1210$.", working: "1210", marks: 1, markCode: "M" },
              { reasoning: "$1210 \\times 1.1 = 1331$.", working: "1331", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1100, b) 1210, c) 1331",
            commonErrors: ["Adding 100 each year (simple interest error)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following ecology terms.",
          parts: [
            { label: "a", prompt: "Carbon cycle", marks: 1 },
            { label: "b", prompt: "Nitrogen cycle", marks: 1 },
            { label: "c", prompt: "Carrying capacity", marks: 1 },
            { label: "d", prompt: "Decomposer", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecology terms", statement: "Cycles recycle nutrients; carrying capacity = max sustainable population; decomposers recycle matter." },
            ],
            steps: [
              { part: "a", reasoning: "Movement of carbon through atmosphere, organisms, fossil fuels.", working: "\\text{C cycle}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Movement of nitrogen via fixation, nitrification, denitrification.", working: "\\text{N cycle}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Maximum population an environment can sustain.", working: "\\text{max}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Organism breaking down dead matter releasing nutrients.", working: "\\text{breakdown}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carbon cycle=C movement; nitrogen cycle=N movement; carrying capacity=max population; decomposer=recycles matter",
            commonErrors: ["Confusing carrying capacity with population size."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-nutrient-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Describe the nitrogen cycle from atmosphere to plant and back.",
          parts: [
            { label: "a", prompt: "How does atmospheric N₂ become usable?", marks: 2 },
            { label: "b", prompt: "How do plants obtain nitrogen?", marks: 1 },
            { label: "c", prompt: "What happens after animals eat plants?", marks: 1 },
            { label: "d", prompt: "How does nitrogen return to the atmosphere?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Nitrogen cycle", statement: "N₂ → fixation → nitrates → plants → animals → decomposers → nitrifiers/denitrifiers → N₂." },
            ],
            steps: [
              { part: "a", reasoning: "Nitrogen-fixing bacteria convert N₂ to nitrates/nitrites.", working: "\\text{fixation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Some occur free-living or in legume root nodules.", working: "\\text{nodules}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plant roots absorb nitrates from soil.", working: "\\text{absorb}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Animals eat plants → nitrogen in proteins → excreted/die.", working: "\\text{food chain}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Decomposers break down waste → ammonium.", working: "\\text{decompose}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Nitrifying bacteria → nitrates; denitrifying bacteria → N₂ back to atmosphere.", working: "\\text{denitrify}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bacteria fix N₂ (b) roots absorb nitrates (c) via food chain (d) decomposers→nitrifiers→denitrifiers→N₂",
            commonErrors: ["Saying plants absorb N₂ gas directly."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-nutrient-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What happens to an ecosystem if its top predator is removed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prey populations may explode, overgrazing plants and disrupting the whole food web (trophic cascade)" },
              { id: "b", text: "Nothing changes" },
              { id: "c", text: "Only the predator population is affected" },
              { id: "d", text: "Plants increase without limit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trophic cascade", statement: "Removing top predator → prey release → overconsumption → ecosystem-wide effects." },
            ],
            steps: [
              { reasoning: "Without predator, prey numbers rise unchecked.", working: "\\text{prey up}", marks: 1, markCode: "M" },
              { reasoning: "More prey consume more plants → producer decline → whole web affected.", working: "\\text{cascade}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Trophic cascade disrupts ecosystem",
            commonErrors: ["Thinking only one level is affected."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
