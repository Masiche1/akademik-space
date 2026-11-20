import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cils-u8-lesson-8-3",
  code: "8-3",
  title: "Integrated science: systems thinking",
  goal: "I CAN connect concepts across biology, chemistry and physics in real-world problems.",
  standards: ["0893 Science: integrated thinking"],
  vocabulary: [
    { term: "System", definition: "Interconnected components working together." },
    { term: "Feedback", definition: "Output affecting input — positive amplifies, negative stabilises." },
    { term: "Equilibrium", definition: "Balanced state where opposing forces/processes equal." },
    { term: "Synergy", definition: "Combined effect greater than sum of parts." },
    { term: "Trade-off", definition: "Improving one thing worsens another." },
    { term: "Emergent property", definition: "Behaviour of whole system not predictable from parts." },
  ],
  concepts: [
    {
      id: "cils-u8-systems",
      title: "Systems thinking",
      skill: "Describe how systems work — components, interactions, feedback.",
      lesson: {
        sections: [
          {
            heading: "What is a system?",
            body: "Components + interactions + boundaries. Inputs → processes → outputs. Feedback loops regulate or amplify.",
          },
          {
            heading: "Feedback loops",
            body: "Negative feedback: counteracts change (thermostat, blood glucose). Positive feedback: amplifies (childbirth contractions, climate tipping points).",
          },
          {
            heading: "Real-world systems",
            body: "Human body (homeostasis), ecosystems (energy flow), climate (greenhouse effect), economy (supply/demand).",
          },
        ],
        keyFormulas: [
          { name: "Systems", statement: "Components+interactions+feedback; negative stabilises, positive amplifies." },
        ],
        workedExample: {
          problem: "How does negative feedback regulate temperature?",
          solution: "High temp → sweat → cooling → temp drops → sweating stops — self-regulating loop.",
        },
      },
      questions: [
        {
          id: "cils-u8-sys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interconnected components working together" },
              { id: "b", text: "Single object" },
              { id: "c", text: "Random events" },
              { id: "d", text: "Isolated parts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "System", statement: "Components+interactions working together." },
            ],
            steps: [
              { reasoning: "System = interconnected components.", working: "system", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Interconnected components working together",
            commonErrors: ["Choosing (d) — systems are about connections."],
          },
        },
        {
          id: "cils-u8-sys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is negative feedback?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative feedback", statement: "Counteracts change — stabilises system." },
            ],
            steps: [
              { reasoning: "Output reduces input deviation — maintains equilibrium.", working: "stabilises", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feedback that counteracts change — stabilises system at set point.",
            commonErrors: ["Confusing with positive — negative stabilises."],
          },
        },
        {
          id: "cils-u8-sys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ecosystems are systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ecosystem as system", statement: "Components (organisms) interact; energy flows; feedback maintains balance." },
            ],
            steps: [
              { reasoning: "Organisms are components — producers, consumers, decomposers.", working: "components", marks: 1, markCode: "M" },
              { reasoning: "Interactions: eating, competition, symbiosis — energy/nutrient flow.", working: "interactions", marks: 1, markCode: "M" },
              { reasoning: "Feedback: population changes affect food supply → population adjusts.", working: "feedback", marks: 1, markCode: "M" },
              { reasoning: "System explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Organisms interact; energy flows; feedback maintains balance — it's a system.",
            commonErrors: ["Just listing organisms — need interactions and feedback."],
          },
        },
        {
          id: "cils-u8-sys-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse systems in the real world.",
          parts: [
            { label: "a", prompt: "Define system and give example.", marks: 2 },
            { label: "b", prompt: "Explain negative vs positive feedback.", marks: 3 },
            { label: "c", prompt: "Describe ecosystem as system.", marks: 2 },
            { label: "d", prompt: "What happens when system disrupted?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Systems thinking", statement: "Components+interactions+feedback; negative stabilises, positive amplifies." },
            ],
            steps: [
              { part: "a", reasoning: "Components+interactions; e.g. body, ecosystem, climate.", working: "system", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Negative: counteracts change (thermostat); positive: amplifies (climate tipping).", working: "feedback types", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distinction clear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Organisms interact; energy flows; feedback maintains balance.", working: "ecosystem", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cascade effects — removing one component affects whole system.", working: "disruption", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) components+interactions (b) negative stabilises/positive amplifies (c) energy flow+feedback (d) cascade effects",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Distinction clear.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Positive feedback isn't 'good' — it's amplifying."],
          },
        },
      ],
    },
    {
      id: "cils-u8-integrated",
      title: "Integrated science: real-world applications",
      skill: "Connect biology, chemistry and physics to solve real problems.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis + energy",
            body: "Plants convert light→chemical energy (glucose). Efficiency matters — better photosynthesis = more food/energy.",
          },
          {
            heading: "Body systems + chemistry",
            body: "Digestion uses enzymes (biochemistry). Breathing exchanges gases (physics/chemistry). Circulation transports (physics).",
          },
          {
            heading: "Ecosystems + physics",
            body: "Energy flow through food chains follows thermodynamics. Climate = energy balance (solar input vs heat loss).",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Biology+chemistry+physics combine — photosynthesis, body systems, ecosystems." },
        ],
        workedExample: {
          problem: "How is photosynthesis an energy conversion?",
          solution: "Light energy → chemical energy (glucose) — physics (light) + chemistry (reaction) + biology (plant).",
        },
      },
      questions: [
        {
          id: "cils-u8-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which subject areas does photosynthesis involve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biology, chemistry, physics" },
              { id: "b", text: "Only biology" },
              { id: "c", text: "Only chemistry" },
              { id: "d", text: "Only physics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Integration", statement: "Photosynthesis involves all three subjects." },
            ],
            steps: [
              { reasoning: "Light (physics), reaction (chemistry), plant biology.", working: "all three", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Biology, chemistry, physics",
            commonErrors: ["Choosing (b) — it's integrated."],
          },
        },
        {
          id: "cils-u8-int-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does the human body use chemistry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Body chemistry", statement: "Enzymes, reactions, pH balance — chemical processes throughout." },
            ],
            steps: [
              { reasoning: "Enzymes catalyse reactions; hormones are chemicals; pH maintained.", working: "chemistry", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzymes, hormone chemistry, pH balance — body uses chemistry constantly.",
            commonErrors: ["Only mentioning food — chemistry is everywhere."],
          },
        },
        {
          id: "cils-u8-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how energy flows through an ecosystem using physics concepts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy flow", statement: "Energy transfers/degrades — follows thermodynamics." },
            ],
            steps: [
              { reasoning: "Solar energy → chemical (photosynthesis) → kinetic (movement) → heat (lost).", working: "transfers", marks: 1, markCode: "M" },
              { reasoning: "Each transfer loses ~90% as heat — energy degrades.", working: "degradation", marks: 1, markCode: "M" },
              { reasoning: "Follows physics — energy conserved but quality decreases.", working: "physics", marks: 1, markCode: "M" },
              { reasoning: "Integrated explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy transfers/degrades through food chain — ~10% efficient each level.",
            commonErrors: ["Only biology — need physics concepts."],
          },
        },
        {
          id: "cils-u8-int-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply integrated science to real problems.",
          parts: [
            { label: "a", prompt: "How is climate an energy system?", marks: 3 },
            { label: "b", prompt: "How do body systems integrate chemistry and physics?", marks: 3 },
            { label: "c", prompt: "Why is photosynthesis efficient/inefficient?", marks: 2 },
            { label: "d", prompt: "Give another integrated example.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integration", statement: "Climate=energy balance; body=chemistry+physics; photosynthesis=energy conversion." },
            ],
            steps: [
              { part: "a", reasoning: "Solar input vs heat loss; greenhouse gases trap energy — energy balance determines temp.", working: "energy balance", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Digestion uses enzymes (chemistry); circulation uses pressure/flow (physics); nervous uses electrical signals.", working: "integration", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple systems integrated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only ~1-2% solar energy captured — most reflected/lost; inefficient but sufficient.", working: "efficiency", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Electric car (physics+chemistry), vaccine (biology+chemistry), agriculture (all three).", working: "example", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) energy balance (b) enzymes+circulation+nerves (c) ~1-2% efficient (d) e.g. electric car",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple systems.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Treating subjects separately — integration is key."],
          },
        },
      ],
    },
    {
      id: "cils-u8-capstone",
      title: "Science capstone: designing solutions",
      skill: "Use scientific knowledge to design and evaluate solutions to problems.",
      lesson: {
        sections: [
          {
            heading: "Problem-solving approach",
            body: "Identify problem → research → brainstorm solutions → evaluate → implement → monitor. Use science to inform decisions.",
          },
          {
            heading: "Example: clean water",
            body: "Problem: water pollution. Solutions: filtration (chemistry), treatment plants (biology+chemistry), regulations (social).",
          },
          {
            heading: "Example: renewable energy",
            body: "Solar panels (physics+chemistry), wind turbines (physics), storage (chemistry). Trade-offs: cost vs sustainability.",
          },
        ],
        keyFormulas: [
          { name: "Capstone", statement: "Apply science to real problems — identify, research, evaluate, implement." },
        ],
        workedExample: {
          problem: "Design a solution for plastic pollution.",
          solution: "Reduce single-use plastics, improve recycling (chemistry), biodegradable alternatives (chemistry), regulations, education.",
        },
      },
      questions: [
        {
          id: "cils-u8-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in solving a scientific problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify the problem clearly" },
              { id: "b", text: "Buy equipment" },
              { id: "c", text: "Write conclusion" },
              { id: "d", text: "Skip research" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem-solving", statement: "Identify problem first." },
            ],
            steps: [
              { reasoning: "Clear problem definition first.", working: "identify", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Identify the problem clearly",
            commonErrors: ["Jumping to solutions — need clear problem first."],
          },
        },
        {
          id: "cils-u8-cap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two steps in scientific problem-solving.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Problem-solving", statement: "Identify, research, brainstorm, evaluate, implement, monitor." },
            ],
            steps: [
              { reasoning: "Any two valid steps.", working: "steps", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify problem, research, brainstorm, evaluate, implement (any two).",
            commonErrors: ["Skipping evaluation — important step."],
          },
        },
        {
          id: "cils-u8-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a solution for water pollution using science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applied science", statement: "Use chemistry (treatment), biology (ecosystems), physics (flow) to solve." },
            ],
            steps: [
              { reasoning: "Identify sources: industrial, agricultural, domestic.", working: "sources", marks: 1, markCode: "M" },
              { reasoning: "Solutions: filtration, treatment plants, regulations, education.", working: "solutions", marks: 1, markCode: "M" },
              { reasoning: "Apply science: chemistry (purification), biology (ecosystem restoration), physics (water flow).", working: "science", marks: 1, markCode: "M" },
              { reasoning: "Integrated approach.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify sources → treatment (chemistry) + ecosystem protection (biology) + flow management (physics).",
            commonErrors: ["Only one solution — need integrated approach."],
          },
        },
        {
          id: "cils-u8-cap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design and evaluate a scientific solution.",
          parts: [
            { label: "a", prompt: "Identify a real-world problem.", marks: 1 },
            { label: "b", prompt: "Research possible solutions.", marks: 2 },
            { label: "c", prompt: "Evaluate solutions (pros/cons).", marks: 3 },
            { label: "d", prompt: "Recommend best solution.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Design thinking", statement: "Identify→research→evaluate→recommend — systematic approach." },
            ],
            steps: [
              { part: "a", reasoning: "Clear problem identified (e.g. plastic pollution, energy).", working: "problem", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple solutions researched with scientific basis.", working: "research", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Valid options.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each solution evaluated: effectiveness, cost, feasibility, impact.", working: "evaluation", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced assessment.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Thorough.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Best solution justified with science, practical considerations.", working: "recommendation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justified choice.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Well-reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) problem identified (b) solutions researched (c) pros/cons evaluated (d) best justified",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Research good.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Thorough evaluation.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No evaluation — just listing solutions."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u8-integrated-notes",
      title: "Integrated science — revision notes",
      summary: "Systems thinking, real-world applications, problem-solving.",
      sections: [
        {
          heading: "Systems",
          body: "Components+interactions+feedback. Negative stabilises (thermostat), positive amplifies (climate). Ecosystems, body, climate are systems.",
        },
        {
          heading: "Applications",
          body: "Photosynthesis=energy conversion. Body=chemistry+physics. Ecosystems=energy flow. Solve real problems: identify→research→evaluate→implement.",
        },
      ],
    },
  ],
};
