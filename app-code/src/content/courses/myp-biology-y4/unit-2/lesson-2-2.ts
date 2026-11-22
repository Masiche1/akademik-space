import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypb4-u2-lesson-2-2",
  code: "2-2",
  title: "Respiratory and Nervous Systems",
  goal: "I CAN explain gas exchange in the lungs and describe how the nervous system coordinates responses.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Alveolus", definition: "Tiny air sac in lungs where gas exchange occurs; thin walls and rich capillary supply." },
    { term: "Ventilation", definition: "Breathing — movement of air into and out of lungs via diaphragm and intercostal muscles." },
    { term: "Neurone", definition: "Nerve cell transmitting electrical impulses; has cell body, dendrites and axon." },
    { term: "Synapse", definition: "Gap between neurones where neurotransmitters pass the signal." },
    { term: "Reflex arc", definition: "Automatic response pathway: receptor → sensory neurone → relay → motor neurone → effector." },
    { term: "Homeostasis", definition: "Maintaining stable internal conditions (temperature, glucose, water) within narrow limits." },
  ],
  concepts: [
    {
      id: "mypb4-u2-respiration",
      title: "Gas exchange and breathing",
      skill: "Describe ventilation and gas exchange at alveoli, and explain adaptations for efficiency.",
      lesson: {
        sections: [
          {
            heading: "Breathing mechanics",
            body: "**Inhalation**: diaphragm contracts and flattens, intercostal muscles contract → thoracic volume increases → pressure drops → air rushes in. **Exhalation**: muscles relax → volume decreases → pressure rises → air pushed out. Passive process during normal breathing.",
          },
          {
            heading: "Alveoli and gas exchange",
            body: "Air travels trachea → bronchi → bronchioles → alveoli. Each alveolus: thin wall (one cell), huge capillary network, moist surface. O₂ diffuses into blood (high→low concentration); CO₂ diffuses out. Surfactant reduces surface tension preventing collapse.",
          },
          {
            heading: "Efficiency adaptations",
            body: "Millions of alveoli = enormous surface area; thin walls = short diffusion distance; constant blood flow maintains gradient; breathing movements renew air supply.",
          },
        ],
        keyFormulas: [
          { name: "Inhalation", statement: "Diaphragm contracts → volume up → pressure down → air in" },
          { name: "Gas exchange", statement: "O₂ in, CO₂ out by diffusion at alveoli" },
          { name: "Adaptations", statement: "Large surface area, thin walls, moist lining" },
        ],
        workedExample: {
          problem: "Why is breathing out normally passive?",
          solution: "During exhalation muscles relax; elastic recoil of lungs and chest wall pushes air out without muscle contraction.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange between air and blood occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveoli" },
              { id: "b", text: "Larynx" },
              { id: "c", text: "Trachea" },
              { id: "d", text: "Bronchi" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveoli", statement: "Site of gas exchange — thin walls, capillary network." },
            ],
            steps: [
              { reasoning: "Alveoli are the exchange surfaces.", working: "\\text{alveoli}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alveoli",
            commonErrors: ["Choosing bronchi — conducting zone, no exchange."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-resp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to the diaphragm during inhalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It expands outward" },
              { id: "b", text: "It contracts and flattens, increasing thoracic volume" },
              { id: "c", text: "It stays unchanged" },
              { id: "d", text: "It relaxes and domes upward" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Breathing", statement: "Diaphragm contracts → thoracic volume increases → air in." },
            ],
            steps: [
              { reasoning: "Diaphragm contracts and flattens on inhalation.", working: "\\text{contracts}", marks: 1, markCode: "M" },
              { reasoning: "Volume increases, pressure drops, air enters.", working: "\\text{volume up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contracts and flattens",
            commonErrors: ["Reversing — relaxed dome = exhalation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how alveoli are adapted for efficient gas exchange.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They contain cilia to move air" },
              { id: "b", text: "Thin walls, huge surface area from millions of alveoli, dense capillary network, moist lining" },
              { id: "c", text: "Thick walls protect them" },
              { id: "d", text: "They store oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alveolar adaptations", statement: "Structure maximizes diffusion rate." },
            ],
            steps: [
              { reasoning: "Thin walls → short diffusion distance.", working: "\\text{thin walls}", marks: 1, markCode: "M" },
              { reasoning: "Millions of alveoli → enormous surface area.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Capillaries maintain concentration gradient; moist lining aids diffusion.", working: "\\text{capillaries}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thin walls, large surface area, capillary supply",
            commonErrors: ["Mentioning only one adaptation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the pathway of air from nose to alveoli and the adaptations along the way.",
          parts: [
            { label: "a", prompt: "List the structures air passes through in order.", marks: 2 },
            { label: "b", prompt: "Explain the role of the trachea and bronchi.", marks: 2 },
            { label: "c", prompt: "Explain gas exchange direction at alveoli.", marks: 2 },
            { label: "d", prompt: "Describe what happens to CO₂ in the blood.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respiratory pathway", statement: "Nose → trachea → bronchi → bronchioles → alveoli." },
            ],
            steps: [
              { part: "a", reasoning: "Nose/mouth → trachea → bronchi → bronchioles → alveoli.", working: "\\text{pathway}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All structures in correct order.", working: "\\text{ordered}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cartilage rings keep airway open; cilia + mucus trap particles.", working: "\\text{cartilage,cilia}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain protection function.", working: "\\text{airway}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "O₂ diffuses from alveoli (high) into blood (low); CO₂ opposite direction.", working: "\\text{O\\_2 in,CO\\_2 out}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain gradient-driven diffusion.", working: "\\text{diffusion}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "CO₂ carried in blood (mostly as bicarbonate) → diffuses into alveoli → exhaled.", working: "\\text{CO\\_2 removal}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the process.", working: "\\text{exhalation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nose→trachea→bronchi→bronchioles→alveoli (b) cartilage+cilia protect airway (c) O₂ in, CO₂ out (d) CO₂ exhaled",
            commonErrors: ["In (c), saying O₂ goes blood→alveoli."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-resp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure contracts and flattens during inhalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Trachea" },
              { id: "c", text: "Diaphragm" },
              { id: "d", text: "Bronchioles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Breathing mechanics", statement: "Diaphragm contracts and flattens → thoracic volume increases → air in." },
            ],
            steps: [
              { reasoning: "The diaphragm is the main breathing muscle.", working: "\\text{diaphragm}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Diaphragm",
            commonErrors: ["Choosing intercostal muscles only."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-resp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of surfactant in the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It carries oxygen in blood" },
              { id: "b", text: "It digests mucus" },
              { id: "c", text: "It reduces surface tension inside alveoli, preventing collapse" },
              { id: "d", text: "It stimulates breathing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Surfactant", statement: "Reduces alveolar surface tension so alveoli don't collapse at end of exhalation." },
            ],
            steps: [
              { reasoning: "Surfactant lowers surface tension of alveolar fluid lining.", working: "\\text{surface tension}", marks: 1, markCode: "M" },
              { reasoning: "Prevents alveolar collapse.", working: "\\text{no collapse}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reduces surface tension, prevents collapse",
            commonErrors: ["Saying surfactant carries gases."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why oxygen diffuses into the blood at the alveoli while carbon dioxide diffuses out, using concentration gradients.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "O₂ is lighter so rises into blood" },
              { id: "b", text: "CO₂ dissolves in water preferentially" },
              { id: "c", text: "Active transport pumps O₂ in and CO₂ out" },
              { id: "d", text: "O₂ concentration is higher in alveolar air than blood; CO₂ concentration is higher in blood than alveolar air — both move down gradients" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas exchange gradients", statement: "Diffusion always moves from high to low concentration." },
            ],
            steps: [
              { reasoning: "Alveolar air rich in O₂, blood poor → O₂ diffuses in.", working: "O_2\\text{ in}", marks: 1, markCode: "M" },
              { reasoning: "Blood rich in CO₂, alveolar air poor → CO₂ diffuses out.", working: "CO_2\\text{ out}", marks: 1, markCode: "M" },
              { reasoning: "Passive diffusion — no energy needed.", working: "\\text{diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both gases diffuse down concentration gradients",
            commonErrors: ["Reversing the CO₂ direction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many lobes does the right lung have? (b) How many lobes does the left lung have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lung lobes", statement: "Right lung = 3 lobes; left lung = 2 lobes (space for heart)." },
            ],
            steps: [
              { reasoning: "Right lung has 3 lobes.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Left lung has 2 lobes.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 2",
            commonErrors: ["Giving both lungs the same lobe count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A person breathes at 12 breaths per minute at rest. (a) How many breaths per hour? (b) How many per day? (c) How many per year (365 days)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 720 },
              { label: "b", answer: 17280 },
              { label: "c", answer: 6307200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Breathing rate", statement: "Per hour = rate x 60; per day = x 24; per year = x 365." },
            ],
            steps: [
              { reasoning: "Per hour $= 12 \\times 60 = 720$.", working: "720", marks: 1, markCode: "M" },
              { reasoning: "Per day $= 720 \\times 24 = 17280$.", working: "17280", marks: 1, markCode: "M" },
              { reasoning: "Per year $= 17280 \\times 365 = 6307200$.", working: "6307200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 720, b) 17280, c) 6307200",
            commonErrors: ["Forgetting the x60 step."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Lung volumes: tidal volume = 500 mL, inspiratory reserve volume = 2000 mL, expiratory reserve volume = 1200 mL, residual volume = 1500 mL. (a) Vital capacity = tidal + inspiratory reserve + expiratory reserve — calculate it. (b) Total lung capacity = vital capacity + residual volume — calculate it. (c) Inspiratory capacity = tidal + inspiratory reserve — calculate it. (d) Expiratory capacity = tidal + expiratory reserve — calculate it.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3700 },
              { label: "b", answer: 5200 },
              { label: "c", answer: 2500 },
              { label: "d", answer: 1700 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lung volumes", statement: "Vital = TV + IRV + ERV; TLC = VC + RV; IC = TV + IRV; EC = TV + ERV." },
            ],
            steps: [
              { reasoning: "VC $= 500 + 2000 + 1200 = 3700$ mL.", working: "3700", marks: 1, markCode: "M" },
              { reasoning: "TLC $= 3700 + 1500 = 5200$ mL.", working: "5200", marks: 1, markCode: "M" },
              { reasoning: "IC $= 500 + 2000 = 2500$ mL.", working: "2500", marks: 1, markCode: "M" },
              { reasoning: "EC $= 500 + 1200 = 1700$ mL.", working: "1700", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3700, b) 5200, c) 2500, d) 1700 mL",
            commonErrors: ["Including residual volume in vital capacity."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main bronchi branch from the trachea (one to each lung)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Airway branching", statement: "Trachea → 2 primary bronchi → bronchioles → alveoli." },
            ],
            steps: [
              { reasoning: "Two lungs → two bronchi.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting bronchioles instead."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-resp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The human lungs contain about 300 million alveoli with a total surface area of roughly 70 m². (a) Express the number of alveoli in hundreds of millions. (b) If each alveolus were a sphere of diameter 0.2 mm, approximately how many alveoli would fit across 1 cm?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Alveolar scale", statement: "300 million = 3 hundred-million; 10 mm / 0.2 mm = 50 alveoli per cm." },
            ],
            steps: [
              { reasoning: "$300\\ \\text{million} = 3 \\times 10^8$ → 3 hundred-millions.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "$1\\ \\text{cm} = 10\\ \\text{mm}$; $10 / 0.2 = 50$.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3 (hundred-million), b) 50",
            commonErrors: ["Using mm directly without converting cm to mm."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Inhaled air contains about 21% oxygen; exhaled air about 16%. For a 500 mL breath: (a) How many mL of O₂ are inhaled? (b) How many mL of O₂ are exhaled? (c) Approximately how much O₂ is absorbed into the blood per breath?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 105 },
              { label: "b", answer: 80 },
              { label: "c", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gas percentage", statement: "Volume of gas = percentage/100 x breath volume; absorbed = inhaled - exhaled." },
            ],
            steps: [
              { reasoning: "Inhaled O₂ $= 0.21 \\times 500 = 105$ mL.", working: "105", marks: 1, markCode: "M" },
              { reasoning: "Exhaled O₂ $= 0.16 \\times 500 = 80$ mL.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "Absorbed $= 105 - 80 = 25$ mL.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 105 mL, b) 80 mL, c) 25 mL",
            commonErrors: ["Forgetting percentages apply to 500 mL breath."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-resp-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following respiratory terms.",
          parts: [
            { label: "a", prompt: "Ventilation", marks: 1 },
            { label: "b", prompt: "Alveolus", marks: 1 },
            { label: "c", prompt: "Surfactant", marks: 1 },
            { label: "d", prompt: "Gas exchange", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Respiratory terms", statement: "Ventilation=breathing; alveolus=air sac; surfactant=anti-collapse agent; gas exchange=diffusion at alveoli." },
            ],
            steps: [
              { part: "a", reasoning: "Movement of air into and out of lungs (breathing).", working: "\\text{breathing}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tiny air sac where gas exchange occurs.", working: "\\text{air sac}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substance reducing surface tension in alveoli.", working: "\\text{surface tension}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Diffusion of O₂ into blood and CO₂ out at alveoli.", working: "\\text{diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ventilation=breathing; alveolus=air sac; surfactant=anti-collapse; gas exchange=O₂/CO₂ diffusion",
            commonErrors: ["Defining ventilation as cellular respiration."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-resp-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain the mechanics of breathing.",
          parts: [
            { label: "a", prompt: "Describe inhalation.", marks: 2 },
            { label: "b", prompt: "Describe exhalation.", marks: 2 },
            { label: "c", prompt: "State which process is passive during normal breathing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Breathing mechanics", statement: "Inhalation: diaphragm+intercostals contract → volume up → pressure down → air in; exhalation: relax → air out." },
            ],
            steps: [
              { part: "a", reasoning: "Diaphragm contracts/flattens; intercostal muscles contract.", working: "\\text{contract}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Thoracic volume increases → pressure drops → air rushes in.", working: "\\text{air in}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Muscles relax → diaphragm domes up → volume decreases.", working: "\\text{relax}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pressure rises → air pushed out.", working: "\\text{air out}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exhalation is passive — elastic recoil, no muscle contraction needed.", working: "\\text{passive}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Inhalation requires muscle contraction (active).", working: "\\text{active in}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diaphragm contracts, volume up, air in (b) relax, volume down, air out (c) exhalation passive",
            commonErrors: ["Saying exhalation requires muscle contraction."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-resp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the structure of alveoli and surrounding capillaries is adapted for efficient gas exchange.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cilia sweep gases into blood" },
              { id: "b", text: "Thin walls give short diffusion distance; millions of alveoli give huge surface area; capillary blood flow maintains the concentration gradient" },
              { id: "c", text: "Alveoli store oxygen for later use" },
              { id: "d", text: "Thick walls protect delicate tissue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alveolar adaptations", statement: "Rate of diffusion ∝ surface area / diffusion distance; gradient maintained by blood flow." },
            ],
            steps: [
              { reasoning: "One-cell-thick walls → minimal diffusion distance.", working: "\\text{thin}", marks: 1, markCode: "M" },
              { reasoning: "Millions of alveoli → enormous surface area.", working: "\\text{area}", marks: 1, markCode: "M" },
              { reasoning: "Constant capillary flow maintains gradient; moist lining aids diffusion.", working: "\\text{gradient}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Thin walls + large area + maintained gradient",
            commonErrors: ["Listing only one adaptation."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u2-nervous",
      title: "The Nervous System",
      skill: "Describe neurone structure, nerve impulse transmission, and reflex actions.",
      lesson: {
        sections: [
          {
            heading: "Neurone structure",
            body: "**Sensory neurone**: receptor → CNS (long axon). **Motor neurone**: CNS → effector (long axon). **Relay neurone**: connects sensory to motor within CNS. Neurones have cell body, dendrites (receive), axon (transmit), myelin sheath (speeds impulse).",
          },
          {
            heading: "Synapses and impulses",
            body: "Impulse travels as electrical signal along axon → reaches synapse → neurotransmitters released → bind receptors on next neurone → new impulse. One-way transmission prevents backflow. Myelin allows saltatory conduction (jumping between nodes) = faster.",
          },
          {
            heading: "Reflex arcs",
            body: "Automatic, fast responses bypassing brain: receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector. Example: touching hot object → hand withdraws before you feel pain. Protects from harm faster than conscious response.",
          },
        ],
        keyFormulas: [
          { name: "Neurone types", statement: "Sensory, motor, relay" },
          { name: "Synapse", statement: "Neurotransmitter gap — one-way signal" },
          { name: "Reflex arc", statement: "Receptor→sensory→relay→motor→effector" },
        ],
        workedExample: {
          problem: "Draw the reflex arc for pulling hand from hot surface.",
          solution: "Heat receptor in skin → sensory neurone → relay neurone in spinal cord → motor neurone → muscle effector contracts → hand withdraws.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-ner-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a synapse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cell body of a neurone" },
              { id: "b", text: "The junction between muscle fibres" },
              { id: "c", text: "The gap between two neurones where neurotransmitters are released" },
              { id: "d", text: "The protective sheath around an axon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synapse", statement: "Gap between neurones; chemical transmission via neurotransmitters." },
            ],
            steps: [
              { reasoning: "Synapse is the junction where signal passes chemically.", working: "\\text{synapse}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gap between neurones",
            commonErrors: ["Confusing with neuromuscular junction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-ner-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the myelin sheath?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provides nutrients to neurones" },
              { id: "b", text: "Protects neurones from damage" },
              { id: "c", text: "Speeds up nerve impulse transmission by saltatory conduction" },
              { id: "d", text: "Stores neurotransmitters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Myelin sheath", statement: "Insulates axon; impulse jumps between nodes = faster." },
            ],
            steps: [
              { reasoning: "Myelin enables saltatory conduction — impulse jumps node to node.", working: "\\text{saltatory}", marks: 1, markCode: "M" },
              { reasoning: "Result: faster transmission.", working: "\\text{faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speeds impulse transmission",
            commonErrors: ["Saying myelin produces neurotransmitters."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the reflex arc for withdrawing hand from a hot object.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receptor → brain → motor neurone → effector" },
              { id: "b", text: "Sensory neurone → brain → sensory neurone → effector" },
              { id: "c", text: "Receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → muscle effector" },
              { id: "d", text: "Receptor → motor neurone → spinal cord → effector" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflex arc", statement: "Automatic response via spinal cord relay — doesn't need brain." },
            ],
            steps: [
              { reasoning: "Heat receptor detects stimulus.", working: "\\text{receptor}", marks: 1, markCode: "M" },
              { reasoning: "Sensory → relay in spinal cord → motor neurone.", working: "\\text{relay}", marks: 1, markCode: "M" },
              { reasoning: "Motor neurone → muscle effector contracts.", working: "\\text{effector}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor → sensory → relay → motor → effector",
            commonErrors: ["Routing through brain — reflexes bypass brain for speed."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a nerve impulse crosses a synapse.",
          parts: [
            { label: "a", prompt: "Describe the structure of a synapse.", marks: 2 },
            { label: "b", prompt: "Explain neurotransmitter release and binding.", marks: 3 },
            { label: "c", prompt: "Explain why synapses are one-way.", marks: 1 },
            { label: "d", prompt: "Describe the role of the myelin sheath in impulse speed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synaptic transmission", statement: "Electrical → chemical → electrical signal across synapse." },
            ],
            steps: [
              { part: "a", reasoning: "Gap between axon terminal and next neurone's dendrite; contains synaptic vesicles.", working: "\\text{gap+vesicles}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe structure.", working: "\\text{synapse}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impulse reaches terminal → Ca²⁺ enters → vesicles fuse → neurotransmitter released.", working: "\\text{release}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neurotransmitter diffuses across gap → binds receptors on postsynaptic membrane.", working: "\\text{binding}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Receptors trigger new impulse in next neurone.", working: "\\text{new impulse}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Receptors only on postsynaptic side; neurotransmitters only released presynaptically → one-way.", working: "\\text{one-way}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Myelin insulates axon; impulse jumps between nodes of Ranvier (saltatory conduction).", working: "\\text{saltatory}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Result: much faster transmission.", working: "\\text{faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gap + vesicles (b) release → bind → new impulse (c) receptors only postsynaptic (d) saltatory conduction speeds signal",
            commonErrors: ["In (b), saying neurotransmitter enters the cell directly."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-ner-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of neurone carries impulses TOWARDS the central nervous system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relay neurone" },
              { id: "b", text: "Effector cell" },
              { id: "c", text: "Motor neurone" },
              { id: "d", text: "Sensory neurone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neurone types", statement: "Sensory: receptor → CNS; motor: CNS → effector; relay: connects within CNS." },
            ],
            steps: [
              { reasoning: "Sensory neurones carry signals to the CNS.", working: "\\text{sensory}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sensory neurone",
            commonErrors: ["Reversing sensory and motor directions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypb4-u2-ner-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the gap between two neurones called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Axon" },
              { id: "b", text: "Synapse" },
              { id: "c", text: "Dendrite" },
              { id: "d", text: "Myelin sheath" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synapse", statement: "Gap between neurones where neurotransmitters pass the signal." },
            ],
            steps: [
              { reasoning: "The synapse is the junction/gap between neurones.", working: "\\text{synapse}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{gap}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Synapse",
            commonErrors: ["Confusing with the axon itself."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a reflex action faster than a conscious response to the same stimulus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflexes use more neurones" },
              { id: "b", text: "Reflexes don't involve neurones" },
              { id: "c", text: "The reflex arc uses only the spinal cord relay, bypassing the brain" },
              { id: "d", text: "The brain is slower than the spinal cord" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflex speed", statement: "Shorter pathway (spinal relay) = faster response; protects from harm." },
            ],
            steps: [
              { reasoning: "Reflex arc relays through spinal cord only.", working: "\\text{spinal}", marks: 1, markCode: "M" },
              { reasoning: "Conscious path goes to brain — longer route, slower.", working: "\\text{brain}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bypasses the brain via spinal relay",
            commonErrors: ["Saying reflexes are 'uncontrolled'."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many types of neurone are there? (b) How many main parts does a typical neurone have (cell body, dendrites, axon)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neurone structure", statement: "3 types (sensory, motor, relay); parts: cell body, dendrites, axon." },
            ],
            steps: [
              { reasoning: "Sensory, motor, relay = 3 types.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Cell body, dendrites, axon = 3 parts.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 3",
            commonErrors: ["Counting myelin sheath as a separate part."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A simple reflex arc consists of: receptor, sensory neurone, relay neurone, motor neurone, effector. (a) How many components does it have? (b) How many types of neurone are involved? (c) How many relay neurones are in a simple reflex arc?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflex arc", statement: "5 components; 3 neurone types; relay in spinal cord (CNS)." },
            ],
            steps: [
              { reasoning: "Receptor + 3 neurones + effector = 5 components.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Sensory, relay, motor = 3 neurone types.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "One relay neurone connects sensory to motor.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 5, b) 3, c) 1 relay neurone",
            commonErrors: ["In (b), counting receptor/effector as neurones."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A myelinated neurone conducts impulses at 120 m/s; an unmyelinated neurone at 0.5 m/s. For a 1 metre axon: (a) time for myelinated impulse? (b) time for unmyelinated impulse? (c) how many times faster is the myelinated neurone? (d) how much time is saved per metre?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.0083 },
              { label: "b", answer: 2 },
              { label: "c", answer: 240 },
              { label: "d", answer: 1.9917 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conduction speed", statement: "Time = distance / speed; myelin enables saltatory conduction." },
            ],
            steps: [
              { reasoning: "Myelinated $t = 1/120 \\approx 0.0083$ s.", working: "0.0083", marks: 1, markCode: "M" },
              { reasoning: "Unmyelinated $t = 1/0.5 = 2$ s.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 120/0.5 = 240$ times faster.", working: "240", marks: 1, markCode: "M" },
              { reasoning: "Time saved $= 2 - 0.0083 \\approx 1.99$ s.", working: "1.99", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) ~0.008 s, b) 2 s, c) 240x, d) ~1.99 s saved",
            commonErrors: ["Inverting speed and time."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many synapses are typically crossed in a simple two-neurone reflex pathway plus relay (sensory→relay→motor)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synaptic connections", statement: "Sensory→relay and relay→motor = 2 synapses in a simple reflex arc." },
            ],
            steps: [
              { reasoning: "Two junctions between the three neurones.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting one synapse per neurone instead of per junction."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-ner-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The central nervous system (CNS) consists of the brain and spinal cord. (a) How many major components does the CNS have? (b) How many neurone types connect within the CNS?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CNS", statement: "Brain + spinal cord = CNS; sensory, motor, relay neurones." },
            ],
            steps: [
              { reasoning: "Brain and spinal cord = 2 components.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Sensory, motor, relay = 3 types.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2, b) 3",
            commonErrors: ["Including peripheral nerves in the CNS."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reflex response takes 0.05 s while a conscious response to the same stimulus takes 0.5 s. (a) How many times faster is the reflex? (b) If a conscious response takes 1.0 s in another case, what would the reflex time be at the same ratio? (c) What is the time difference in the first case?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 0.1 },
              { label: "c", answer: 0.45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Response time ratio", statement: "Ratio = conscious/reflex; difference = conscious - reflex." },
            ],
            steps: [
              { reasoning: "Ratio $= 0.5 / 0.05 = 10$ times faster.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Reflex $= 1.0 / 10 = 0.1$ s.", working: "0.1", marks: 1, markCode: "M" },
              { reasoning: "Difference $= 0.5 - 0.05 = 0.45$ s.", working: "0.45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 10x, b) 0.1 s, c) 0.45 s",
            commonErrors: ["Inverting the ratio (0.1 instead of 10)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-ner-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following nervous system terms.",
          parts: [
            { label: "a", prompt: "Neurone", marks: 1 },
            { label: "b", prompt: "Synapse", marks: 1 },
            { label: "c", prompt: "Neurotransmitter", marks: 1 },
            { label: "d", prompt: "Reflex", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nervous terms", statement: "Neurone=nerve cell; synapse=gap; neurotransmitter=chemical signal; reflex=automatic response." },
            ],
            steps: [
              { part: "a", reasoning: "Nerve cell transmitting electrical impulses.", working: "\\text{nerve cell}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gap between neurones.", working: "\\text{gap}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chemical messenger released at synapse.", working: "\\text{chemical}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Automatic rapid response to stimulus.", working: "\\text{automatic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurone=nerve cell; synapse=gap; neurotransmitter=chemical; reflex=automatic response",
            commonErrors: ["Defining synapse as the neurone itself."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-ner-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Describe how a nerve impulse crosses a synapse.",
          parts: [
            { label: "a", prompt: "What arrives at the synapse?", marks: 1 },
            { label: "b", prompt: "What is released and how?", marks: 2 },
            { label: "c", prompt: "What happens on the other side?", marks: 2 },
            { label: "d", prompt: "Why is transmission one-way?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synaptic transmission", statement: "Electrical → chemical → electrical; neurotransmitter binds postsynaptic receptors." },
            ],
            steps: [
              { part: "a", reasoning: "Electrical impulse reaches axon terminal.", working: "\\text{impulse}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ca²⁺ enters → synaptic vesicles fuse → neurotransmitter released into gap.", working: "\\text{release}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neurotransmitter diffuses across synaptic cleft.", working: "\\text{diffuse}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Binds receptors on postsynaptic membrane → triggers new impulse.", working: "\\text{bind}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "New electrical impulse continues in next neurone.", working: "\\text{new impulse}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Receptors only on postsynaptic side → one-way.", working: "\\text{one-way}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) impulse (b) vesicles release neurotransmitter (c) binds receptors→new impulse (d) receptors only postsynaptic",
            commonErrors: ["Saying neurotransmitter enters the cell directly."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypb4-u2-ner-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What would happen if the myelin sheath around motor neurones were damaged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impulse transmission would slow dramatically — saltatory conduction lost" },
              { id: "b", text: "Impulses would travel faster" },
              { id: "c", text: "Neurotransmitters would increase" },
              { id: "d", text: "Nothing — myelin only insulates against cold" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Myelin function", statement: "Myelin enables saltatory conduction — impulses jump between nodes of Ranvier = much faster." },
            ],
            steps: [
              { reasoning: "Myelin allows impulses to jump node to node.", working: "\\text{saltatory}", marks: 1, markCode: "M" },
              { reasoning: "Damage → continuous slow conduction along axon.", working: "\\text{slow}", marks: 1, markCode: "M" },
              { reasoning: "State the effect.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Transmission slows — saltatory conduction lost",
            commonErrors: ["Thinking myelin produces neurotransmitters."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
