import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cils-u8-lesson-8-2",
  code: "8-2",
  title: "Ecosystems and environmental issues",
  goal: "I CAN describe ecosystems, food webs, human impact and sustainability.",
  standards: ["0893 Biology: ecology"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms + their environment interacting." },
    { term: "Habitat", definition: "Place where organism lives." },
    { term: "Biodiversity", definition: "Variety of life in an ecosystem." },
    { term: "Food web", definition: "Interconnected food chains showing energy flow." },
    { term: "Decomposer", definition: "Breaks down dead matter — bacteria, fungi." },
    { term: "Sustainability", definition: "Using resources without depleting them for future." },
  ],
  concepts: [
    {
      id: "cils-u8-ecosystems",
      title: "Ecosystems",
      skill: "Describe ecosystem components, energy flow and biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem components",
            body: "Producers (plants) → consumers (herbivores, carnivores, omnivores) → decomposers (bacteria, fungi). Abiotic: sunlight, water, soil, air.",
          },
          {
            heading: "Energy flow",
            body: "Sun → producers (photosynthesis) → herbivores → carnivores. ~10% energy transferred each level — pyramid shape.",
          },
          {
            heading: "Biodiversity",
            body: "Variety of species, genes, ecosystems. Higher biodiversity = more stable ecosystem — resistant to change.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Producers→consumers→decomposers; ~10% energy per level; biodiversity = stability." },
        ],
        workedExample: {
          problem: "Why are top predators rare?",
          solution: "Only ~10% energy transfers each level — need huge energy input to support few predators.",
        },
      },
      questions: [
        {
          id: "cils-u8-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Community of organisms + environment" },
              { id: "b", text: "Just animals" },
              { id: "c", text: "Only plants" },
              { id: "d", text: "Weather system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecosystem", statement: "Organisms + environment interacting." },
            ],
            steps: [
              { reasoning: "Ecosystem = biotic + abiotic.", working: "ecosystem", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Community of organisms + environment",
            commonErrors: ["Choosing (b) — includes plants, fungi, environment."],
          },
        },
        {
          id: "cils-u8-eco-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is biodiversity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Variety of life — species, genes, ecosystems." },
            ],
            steps: [
              { reasoning: "Variety of species/life forms.", working: "variety", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variety of life in an ecosystem — species, genes, ecosystems.",
            commonErrors: ["Saying 'number of animals' — includes all life."],
          },
        },
        {
          id: "cils-u8-eco-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how energy flows through an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy flow", statement: "Sun→producers→consumers→decomposers; ~10% per level." },
            ],
            steps: [
              { reasoning: "Sun provides energy; producers capture via photosynthesis.", working: "producers", marks: 1, markCode: "M" },
              { reasoning: "Consumers eat producers/each other — energy transfers.", working: "consumers", marks: 1, markCode: "M" },
              { reasoning: "~90% lost as heat each level — only ~10% transfers.", working: "10%", marks: 1, markCode: "M" },
              { reasoning: "Flow explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sun→producers→consumers→decomposers; ~10% energy per level.",
            commonErrors: ["Saying 'energy cycles' — it flows one way."],
          },
        },
        {
          id: "cils-u8-eco-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate an ecosystem.",
          parts: [
            { label: "a", prompt: "Define ecosystem and habitat.", marks: 2 },
            { label: "b", prompt: "Describe trophic levels.", marks: 3 },
            { label: "c", prompt: "Explain role of decomposers.", marks: 2 },
            { label: "d", prompt: "Why is biodiversity important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ecosystems", statement: "Producers/consumers/decomposers; biodiversity=stability." },
            ],
            steps: [
              { part: "a", reasoning: "Ecosystem=organisms+environment; habitat=where organism lives.", working: "definitions", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Producers→herbivores→carnivores→top predators; decomposers recycle.", working: "levels", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Break down dead matter → release nutrients → recycle elements.", working: "decomposers", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "More species = more stable, resistant to change, more resources.", working: "importance", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ecosystem/habitat (b) trophic levels (c) recycle nutrients (d) stability/resilience",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Levels correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Decomposers as 'waste' — they recycle nutrients."],
          },
        },
      ],
    },
    {
      id: "cils-u8-human-impact",
      title: "Human impact and sustainability",
      skill: "Describe human effects on environment and sustainable practices.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "Deforestation, pollution (air/water/land), climate change, habitat loss, overfishing, waste. Each affects biodiversity and ecosystems.",
          },
          {
            heading: "Climate change",
            body: "Greenhouse gases (CO₂, methane) trap heat → global warming → sea level rise, extreme weather, species loss.",
          },
          {
            heading: "Sustainability",
            body: "Renewable energy, recycling, reducing waste, sustainable farming, conservation. Meet needs without compromising future.",
          },
        ],
        keyFormulas: [
          { name: "Sustainability", statement: "Meet present needs without harming future — reduce, reuse, recycle." },
        ],
        workedExample: {
          problem: "How does deforestation affect climate?",
          solution: "Trees absorb CO₂ — cutting them reduces carbon sink AND releases stored carbon → more greenhouse gases.",
        },
      },
      questions: [
        {
          id: "cils-u8-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deforestation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clearing forests" },
              { id: "b", text: "Planting trees" },
              { id: "c", text: "Building houses" },
              { id: "d", text: "Recycling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deforestation", statement: "Clearing/removing forests." },
            ],
            steps: [
              { reasoning: "Deforestation = forest removal.", working: "clearing", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Clearing forests",
            commonErrors: ["Choosing (b) — that's reforestation."],
          },
        },
        {
          id: "cils-u8-impact-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two greenhouse gases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Greenhouse gases", statement: "CO₂, methane, water vapour, nitrous oxide." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "gases", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂, methane, water vapour, nitrous oxide (any two).",
            commonErrors: ["Saying 'oxygen' — that's not a greenhouse gas."],
          },
        },
        {
          id: "cils-u8-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how climate change affects ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Climate change", statement: "Rising temps → habitat loss, species extinction, disrupted food chains." },
            ],
            steps: [
              { reasoning: "Higher temps → habitats change/disappear (polar ice melt).", working: "habitat", marks: 1, markCode: "M" },
              { reasoning: "Species can't adapt fast enough → extinction risk.", working: "extinction", marks: 1, markCode: "M" },
              { reasoning: "Food chains disrupted — timing mismatches (e.g. flowers bloom before pollinators arrive).", working: "food chains", marks: 1, markCode: "M" },
              { reasoning: "Multiple effects explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss, species extinction, disrupted food chains — multiple impacts.",
            commonErrors: ["Only mentioning temperature — need ecosystem effects."],
          },
        },
        {
          id: "cils-u8-impact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate sustainability practices.",
          parts: [
            { label: "a", prompt: "Define sustainability.", marks: 1 },
            { label: "b", prompt: "Name two human environmental impacts.", marks: 2 },
            { label: "c", prompt: "Describe two sustainable practices.", marks: 3 },
            { label: "d", prompt: "Why is sustainability important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustainability", statement: "Meet needs without compromising future — reduce/reuse/recycle." },
            ],
            steps: [
              { part: "a", reasoning: "Using resources without depleting for future generations.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deforestation, pollution, climate change, habitat loss.", working: "impacts", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Renewable energy, recycling, sustainable farming, conservation.", working: "practices", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ensures resources for future, protects biodiversity, reduces pollution.", working: "importance", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple reasons.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) meet needs without depleting (b) deforestation/pollution (c) renewables/recycling/conservation (d) future resources/biodiversity",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two+ impacts.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ practices.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple reasons.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Sustainability = just recycling — broader concept."],
          },
        },
      ],
    },
    {
      id: "cils-u8-review",
      title: "Science review and exam skills",
      skill: "Apply scientific knowledge to exam-style questions and practical skills.",
      lesson: {
        sections: [
          {
            heading: "Exam strategy",
            body: "Read questions carefully, show working, check units, use markscheme keywords. For practicals: control variables, repeat readings, analyse data.",
          },
          {
            heading: "Key concepts recap",
            body: "Working scientifically, cells, plants, human body, materials, energy, forces, electricity, Earth, ecosystems — core syllabus coverage.",
          },
          {
            heading: "Practical skills",
            body: "Plan fair tests, identify variables, use equipment safely, record data, draw conclusions, evaluate methods.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Fair tests, variables, data analysis, conclusions — apply scientific method." },
        ],
        workedExample: {
          problem: "How to answer 'explain' questions?",
          solution: "Use scientific terms, give mechanism/reason, link cause to effect, be specific.",
        },
      },
      questions: [
        {
          id: "cils-u8-rev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three types of variables in an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent, dependent, controlled" },
              { id: "b", text: "Fast, slow, medium" },
              { id: "c", text: "Hot, cold, warm" },
              { id: "d", text: "Big, small, medium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Variables", statement: "Independent, dependent, controlled." },
            ],
            steps: [
              { reasoning: "Three variable types.", working: "variables", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Independent, dependent, controlled",
            commonErrors: ["Missing controlled — all three needed."],
          },
        },
        {
          id: "cils-u8-rev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do when writing scientific explanations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam technique", statement: "Use scientific terms, explain mechanism, link cause-effect." },
            ],
            steps: [
              { reasoning: "Use correct terminology.", working: "terms", marks: 1, markCode: "M" },
              { reasoning: "Explain mechanism and link cause to effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use scientific terms, explain mechanism, link cause to effect.",
            commonErrors: ["Just stating facts — need explanation."],
          },
        },
        {
          id: "cils-u8-rev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to evaluate an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Check reliability, validity, identify errors, suggest improvements." },
            ],
            steps: [
              { reasoning: "Reliability: repeat results consistent?", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Validity: did it test what intended?", working: "validity", marks: 1, markCode: "M" },
              { reasoning: "Identify errors/improvements: control variables, better equipment, more repeats.", working: "improvements", marks: 1, markCode: "M" },
              { reasoning: "Evaluation comprehensive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check reliability/validity, identify errors, suggest improvements.",
            commonErrors: ["Only saying 'it worked' — need critical evaluation."],
          },
        },
        {
          id: "cils-u8-rev-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply scientific skills to a practical question.",
          parts: [
            { label: "a", prompt: "How to design a fair test?", marks: 3 },
            { label: "b", prompt: "What data to collect?", marks: 2 },
            { label: "c", prompt: "How to analyse results?", marks: 2 },
            { label: "d", prompt: "How to draw conclusions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific method", statement: "Control variables, collect data, analyse, conclude — systematic approach." },
            ],
            steps: [
              { part: "a", reasoning: "Identify variables, control others, repeat trials, use same equipment.", working: "design", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dependent variable measurements, repeats, units, table format.", working: "data", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Look for patterns/trends, calculate averages, compare groups.", working: "analysis", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Link results to hypothesis, explain mechanism, acknowledge limitations.", working: "conclusions", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) control variables (b) measure dependent (c) find patterns (d) link to hypothesis",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No controls — unfair test."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u8-impact-notes",
      title: "Ecosystems and review — revision notes",
      summary: "Ecosystems, human impact, sustainability, exam skills.",
      sections: [
        {
          heading: "Ecosystems",
          body: "Producers→consumers→decomposers; ~10% energy per level. Biodiversity=stability. Humans impact: deforestation, pollution, climate change.",
        },
        {
          heading: "Exam skills",
          body: "Fair tests, variables, data analysis, conclusions. Use scientific terms, explain mechanisms, evaluate methods.",
        },
      ],
    },
  ],
};
