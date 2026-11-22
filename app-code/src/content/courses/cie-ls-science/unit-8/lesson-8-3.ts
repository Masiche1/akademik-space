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
              { id: "a", text: "Isolated parts" },
              { id: "b", text: "Single object" },
              { id: "c", text: "Random events" },
              { id: "d", text: "Interconnected components working together" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "System", statement: "Components+interactions working together." },
            ],
            steps: [
              { reasoning: "System = interconnected components.", working: "system", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Interconnected components working together",
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
        {
          id: "cils-u8-sys-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Positive feedback does what to a system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amplifies a change" },
              { id: "b", text: "Stops it" },
              { id: "c", text: "Stabilises it" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Positive feedback", statement: "Amplifies change — e.g. contractions during childbirth." }],
            steps: [{ reasoning: "Positive = amplifies.", working: "amplify", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Amplifies a change",
          },
        },
        {
          id: "cils-u8-sys-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermostat uses which type of feedback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive feedback" },
              { id: "b", text: "Random feedback" },
              { id: "c", text: "Negative feedback" },
              { id: "d", text: "No feedback" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Thermostat", statement: "Heating/cooling counteracts temperature change — negative feedback." }],
            steps: [{ reasoning: "Thermostat stabilises = negative.", working: "negative", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Negative feedback",
          },
        },
        {
          id: "cils-u8-sys-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Homeostasis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maintaining stable internal conditions" },
              { id: "b", text: "Reproducing" },
              { id: "c", text: "Growing quickly" },
              { id: "d", text: "Digesting food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Homeostasis", statement: "Keeping internal conditions constant — e.g. body temperature." }],
            steps: [{ reasoning: "Homeostasis = stable internal state.", working: "stable", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Stable internal conditions",
          },
        },
        {
          id: "cils-u8-sys-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Blood glucose regulation uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random control" },
              { id: "b", text: "No regulation" },
              { id: "c", text: "Positive feedback" },
              { id: "d", text: "Negative feedback" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Blood glucose", statement: "Insulin/glucagon counteract glucose changes — negative feedback." }],
            steps: [{ reasoning: "Glucose regulation = negative feedback.", working: "negative", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Negative feedback",
          },
        },
        {
          id: "cils-u8-sys-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Climate tipping points (e.g. ice melt → less reflection → more melt) are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilibrium" },
              { id: "b", text: "Positive feedback" },
              { id: "c", text: "Negative feedback" },
              { id: "d", text: "No feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Tipping points", statement: "Self-reinforcing changes amplify — positive feedback." }],
            steps: [{ reasoning: "Amplifying loop = positive feedback.", working: "positive", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Positive feedback",
          },
        },
        {
          id: "cils-u8-sys-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The economy's supply and demand is an example of a system because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is random" },
              { id: "b", text: "It has no connections" },
              { id: "c", text: "Prices respond to changes in interacting components" },
              { id: "d", text: "It never changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Economic system", statement: "Supply/demand interact with feedback to set prices." }],
            steps: [{ reasoning: "Interacting parts with feedback = system.", working: "feedback", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Interacting components with feedback",
          },
        },
        {
          id: "cils-u8-sys-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Equilibrium in a system means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No inputs" },
              { id: "b", text: "Everything stops" },
              { id: "c", text: "Maximum output" },
              { id: "d", text: "Opposing processes are balanced" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Equilibrium", statement: "Balanced state where opposing forces/processes equal." }],
            steps: [{ reasoning: "Equilibrium = balance.", working: "balance", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Opposing processes balanced",
          },
        },
        {
          id: "cils-u8-sys-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many types of feedback loops exist: negative and positive? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Feedback", statement: "Negative and positive — two types." }],
            steps: [
              { reasoning: "Count feedback types.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Two types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u8-sys-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sweating when hot cools the body by about how many degrees? (Use: if sweating removes heat, estimate temperature drop needed to feel cooler — enter 0 if unchanged.) Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Effect", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Thermoregulation", statement: "Sweating counteracts rise — restores equilibrium; temperature stays roughly constant." }],
            steps: [
              { reasoning: "Negative feedback keeps temp stable ≈ no net change.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Temperature maintained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$ (temperature stays constant)",
          },
        },
        {
          id: "cils-u8-sys-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many components does a basic system have: inputs, processes, outputs? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Parts", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "System parts", statement: "Inputs, processes, outputs — plus feedback and boundaries." }],
            steps: [
              { reasoning: "Count main parts.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three parts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-sys-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A system has 5 interconnected components. If removing 1 causes collapse, how many 'backup' links exist at minimum? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Links", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "System resilience", statement: "If one removal collapses system, redundancy is minimal." }],
            steps: [
              { reasoning: "No redundancy → fragile system.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Minimum backups = 0.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$",
          },
        },
        {
          id: "cils-u8-sys-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how negative feedback maintains equilibrium in a system, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Negative feedback", statement: "Output counteracts deviation → returns system to set point." }],
            steps: [
              { reasoning: "Change occurs (e.g. temperature rises).", working: "change", marks: 1, markCode: "M" },
              { reasoning: "Sensors detect change → response triggered (sweat).", working: "response", marks: 1, markCode: "M" },
              { reasoning: "Response counteracts change → returns to set point.", working: "equilibrium", marks: 1, markCode: "M" },
              { reasoning: "Example accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. body temperature: rise → sweat → cooling → return to normal — self-regulating.",
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
              { id: "b", text: "Only physics" },
              { id: "c", text: "Only biology" },
              { id: "d", text: "Only chemistry" },
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
        {
          id: "cils-u8-int-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis converts light energy into:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat only" },
              { id: "b", text: "Chemical energy (glucose)" },
              { id: "c", text: "Sound" },
              { id: "d", text: "Motion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Photosynthesis", statement: "Light → chemical energy stored in glucose." }],
            steps: [{ reasoning: "Light → chemical energy.", working: "glucose", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Chemical energy (glucose)",
          },
        },
        {
          id: "cils-u8-int-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enzymes in the body are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Types of blood" },
              { id: "b", text: "Nerves" },
              { id: "c", text: "Biological catalysts" },
              { id: "d", text: "Bones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enzymes", statement: "Protein catalysts that speed up reactions." }],
            steps: [{ reasoning: "Enzymes = biological catalysts.", working: "catalysts", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Biological catalysts",
          },
        },
        {
          id: "cils-u8-int-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Breathing (gas exchange in lungs) involves which subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only chemistry" },
              { id: "b", text: "Only geology" },
              { id: "c", text: "Biology and physics (diffusion)" },
              { id: "d", text: "Only math" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Gas exchange", statement: "Diffusion (physics) of O₂/CO₂ across membranes (biology)." }],
            steps: [{ reasoning: "Biology + physics diffusion.", working: "diffusion", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Biology and physics",
          },
        },
        {
          id: "cils-u8-int-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An electric car combines which subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "None" },
              { id: "b", text: "Physics (electricity) and chemistry (battery)" },
              { id: "c", text: "Only biology" },
              { id: "d", text: "Only geology" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Electric car", statement: "Electric motor (physics) + battery chemistry." }],
            steps: [{ reasoning: "Physics + chemistry.", working: "physics+chem", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Physics and chemistry",
          },
        },
        {
          id: "cils-u8-int-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The greenhouse effect is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only biology" },
              { id: "b", text: "Only math" },
              { id: "c", text: "Only geology" },
              { id: "d", text: "Physics (energy balance) + chemistry (gases)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Greenhouse effect", statement: "Gases (chemistry) trap heat — energy balance (physics)." }],
            steps: [{ reasoning: "Chemistry + physics integration.", working: "energy balance", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Physics + chemistry",
          },
        },
        {
          id: "cils-u8-int-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A vaccine involves which subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "None" },
              { id: "b", text: "Only geology" },
              { id: "c", text: "Biology (immune system) and chemistry (formulation)" },
              { id: "d", text: "Only physics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Vaccine", statement: "Immune response (biology) + chemical formulation." }],
            steps: [{ reasoning: "Biology + chemistry.", working: "bio+chem", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Biology and chemistry",
          },
        },
        {
          id: "cils-u8-int-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is photosynthesis considered inefficient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only ~1–2% of solar energy is captured" },
              { id: "b", text: "It is too fast" },
              { id: "c", text: "It uses too much water" },
              { id: "d", text: "It produces no oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Photosynthesis efficiency", statement: "Most solar energy reflected/lost — only small % captured." }],
            steps: [{ reasoning: "Low efficiency ~1–2%.", working: "1-2%", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Only ~1–2% captured",
          },
        },
        {
          id: "cils-u8-int-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many subject areas does integrated science combine? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Subjects", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Integration", statement: "Biology, chemistry, physics — three main areas." }],
            steps: [
              { reasoning: "Count subjects.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three areas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-int-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately what percentage of solar energy do plants capture in photosynthesis? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Photosynthesis efficiency", statement: "Plants capture ~1–2% of solar energy." }],
            steps: [
              { reasoning: "Efficiency ≈ 1–2%.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 2% (accept 1–2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 2\\%$",
          },
        },
        {
          id: "cils-u8-int-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many body systems rely on chemical processes (digestion, hormones, nerves)? Enter the number only (estimate).",
          response: { type: "numeric", parts: [{ label: "Systems", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "context", name: "Body chemistry", statement: "Digestion, endocrine, nervous — many systems use chemistry." }],
            steps: [
              { reasoning: "At least 3 systems use chemistry.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three+ systems.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3+$",
          },
        },
        {
          id: "cils-u8-int-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If plants capture 2% of solar energy and transfer 10% up each trophic level, what percentage reaches a top predator (3 levels up)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 0.002 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Energy transfer", statement: "$2\\% \\times 0.1 \\times 0.1 \\times 0.1 = 0.002\\%$." }],
            steps: [
              { reasoning: "$2 \\times 0.1 \\times 0.1 \\times 0.1 = 0.002$.", working: "2 × 10⁻³", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.002\\%$.", working: "0.002", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.002\\%$",
          },
        },
        {
          id: "cils-u8-int-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an electric car demonstrates integrated science, naming the subjects involved.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Integration", statement: "Physics (motor/electricity), chemistry (battery), engineering/design." }],
            steps: [
              { reasoning: "Electric motor converts electrical→kinetic energy (physics).", working: "motor", marks: 1, markCode: "M" },
              { reasoning: "Battery stores/releases energy via chemical reactions (chemistry).", working: "battery", marks: 1, markCode: "M" },
              { reasoning: "Charging infrastructure, materials, efficiency trade-offs.", working: "systems", marks: 1, markCode: "M" },
              { reasoning: "Multiple subjects identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Motor (physics) + battery (chemistry) + charging systems — integrated design.",
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
              { id: "a", text: "Buy equipment" },
              { id: "b", text: "Write conclusion" },
              { id: "c", text: "Skip research" },
              { id: "d", text: "Identify the problem clearly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem-solving", statement: "Identify problem first." },
            ],
            steps: [
              { reasoning: "Clear problem definition first.", working: "identify", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Identify the problem clearly",
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
        {
          id: "cils-u8-cap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After identifying a problem and researching solutions, what comes next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give up" },
              { id: "b", text: "Skip to implementation" },
              { id: "c", text: "Evaluate the options" },
              { id: "d", text: "Forget the problem" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Problem-solving", statement: "Identify → research → evaluate → implement → monitor." }],
            steps: [{ reasoning: "Evaluation follows research.", working: "evaluate", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Evaluate the options",
          },
        },
        {
          id: "cils-u8-cap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A trade-off in a solution means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improving one aspect worsens another" },
              { id: "b", text: "No cost involved" },
              { id: "c", text: "Only benefits" },
              { id: "d", text: "Everything improves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Trade-off", statement: "Gaining one benefit at cost of another." }],
            steps: [{ reasoning: "Trade-off = benefit vs cost.", working: "trade-off", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Improving one worsens another",
          },
        },
        {
          id: "cils-u8-cap-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a sustainable solution to energy needs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deforestation" },
              { id: "b", text: "More coal plants" },
              { id: "c", text: "Solar panels" },
              { id: "d", text: "Burning more oil" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Renewable energy", statement: "Solar is sustainable; fossil fuels are not." }],
            steps: [{ reasoning: "Solar = renewable.", working: "solar", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Solar panels",
          },
        },
        {
          id: "cils-u8-cap-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Monitoring a solution after implementation is important because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It wastes time" },
              { id: "b", text: "It checks whether it actually works" },
              { id: "c", text: "It is required by law only" },
              { id: "d", text: "It proves nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Monitoring", statement: "Check effectiveness and adjust as needed." }],
            steps: [{ reasoning: "Monitor = verify success.", working: "monitor", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Checks if it works",
          },
        },
        {
          id: "cils-u8-cap-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A good scientific solution should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complicated" },
              { id: "b", text: "Effective, feasible and based on evidence" },
              { id: "c", text: "Based on guesses" },
              { id: "d", text: "Cheap only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Solution criteria", statement: "Effective, feasible, evidence-based, practical." }],
            steps: [{ reasoning: "Good solution = effective + feasible + evidence.", working: "criteria", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Effective, feasible, evidence-based",
          },
        },
        {
          id: "cils-u8-cap-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Water treatment plants combine which subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemistry (purification) and biology (microbes)" },
              { id: "b", text: "Only art" },
              { id: "c", text: "None" },
              { id: "d", text: "Only geology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Water treatment", statement: "Chemical purification + biological filtration." }],
            steps: [{ reasoning: "Chemistry + biology.", working: "chem+bio", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Chemistry and biology",
          },
        },
        {
          id: "cils-u8-cap-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The best solution to plastic pollution would likely involve:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring it" },
              { id: "b", text: "Only banning plastic" },
              { id: "c", text: "Making more plastic" },
              { id: "d", text: "Multiple approaches: reduction, recycling, alternatives" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrated solution", statement: "Multiple complementary approaches needed." }],
            steps: [{ reasoning: "Combined strategies best.", working: "multiple", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Multiple approaches",
          },
        },
        {
          id: "cils-u8-cap-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main steps are in the scientific problem-solving cycle (identify, research, evaluate, implement, monitor)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Steps", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Problem-solving", statement: "Five steps: identify, research, evaluate, implement, monitor." }],
            steps: [
              { reasoning: "Count steps.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Five steps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "cils-u8-cap-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a solution costs $1000 and saves $200 per year, how many years to break even? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Years", answer: 5, unit: "years" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Payback", statement: "$1000 \\div 200 = 5$ years." }],
            steps: [
              { reasoning: "$1000 \\div 200$.", working: "1000 ÷ 200", marks: 1, markCode: "M" },
              { reasoning: "$5$ years.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ \\text{years}$",
          },
        },
        {
          id: "cils-u8-cap-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proposal has 3 options scored: A=8, B=6, C=9 out of 10. What is the highest score? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Score", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Compare scores — highest indicates best option." }],
            steps: [
              { reasoning: "Max of 8, 6, 9.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "Highest = 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
          },
        },
        {
          id: "cils-u8-cap-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Out of 4 solutions evaluated, 2 are feasible and 1 is best. What fraction are feasible? Enter as a decimal.",
          response: { type: "numeric", parts: [{ label: "Fraction", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Fraction", statement: "$2/4 = 0.5$." }],
            steps: [
              { reasoning: "$2 \\div 4$.", working: "2/4", marks: 1, markCode: "M" },
              { reasoning: "$0.5$.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
          },
        },
        {
          id: "cils-u8-cap-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you would evaluate two competing solutions to an environmental problem, naming criteria you would use.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Compare effectiveness, cost, feasibility, environmental impact, long-term sustainability." }],
            steps: [
              { reasoning: "Define criteria: effectiveness, cost, feasibility.", working: "criteria", marks: 1, markCode: "M" },
              { reasoning: "Assess environmental impact and long-term sustainability.", working: "impact", marks: 1, markCode: "M" },
              { reasoning: "Compare options against criteria — identify trade-offs.", working: "compare", marks: 1, markCode: "M" },
              { reasoning: "Justify recommendation with evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare on effectiveness, cost, feasibility, impact, sustainability — justify choice.",
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
