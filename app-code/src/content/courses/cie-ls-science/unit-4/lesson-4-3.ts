import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cils-u4-lesson-4-3",
  code: "4-3",
  title: "Hormones and reproduction",
  goal: "I CAN describe how hormones regulate body functions and how human reproduction works.",
  standards: ["0893 Biology: hormones and reproduction"],
  vocabulary: [
    { term: "Hormone", definition: "Chemical messenger produced by endocrine glands, carried by blood." },
    { term: "Insulin", definition: "Hormone lowering blood glucose — produced by pancreas." },
    { term: "Adrenaline", definition: "Hormone preparing body for fight/flight — raises heart rate." },
    { term: "Puberty", definition: "Stage when reproductive hormones develop secondary sexual characteristics." },
    { term: "Fertilisation", definition: "Fusion of sperm and egg forming a zygote." },
    { term: "Placenta", definition: "Organ exchanging nutrients/waste between mother and fetus." },
  ],
  concepts: [
    {
      id: "cils-u4-hormones",
      title: "Hormones",
      skill: "Explain how hormones differ from nerves and describe key hormones and their effects.",
      lesson: {
        sections: [
          {
            heading: "Hormones vs nerves",
            body: "Nerves: fast, specific, short-lived. Hormones: slower, widespread via blood, longer-lasting effects.",
          },
          {
            heading: "Key hormones",
            body: "- **Insulin** (pancreas): lowers blood glucose\n- **Glucagon** (pancreas): raises blood glucose\n- **Adrenaline** (adrenal glands): fight/flight — heart rate up, glucose released\n- **Thyroxine** (thyroid): controls metabolic rate",
          },
          {
            heading: "Diabetes",
            body: "Type 1: pancreas doesn't make insulin — needs injections. Type 2: cells don't respond to insulin — often linked to diet/obesity.",
          },
        ],
        keyFormulas: [
          { name: "Hormones", statement: "Chemical messengers via blood — slower but longer-lasting than nerves." },
        ],
        workedExample: {
          problem: "Why does adrenaline make your heart race?",
          solution: "Adrenaline released in stress → increases heart rate and glucose — prepares body for action.",
        },
      },
      questions: [
        {
          id: "cils-u4-hor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulin", statement: "Lowers blood glucose by promoting glucose uptake/storage." },
            ],
            steps: [
              { reasoning: "Insulin = glucose down; glucagon = glucose up.", working: "insulin", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Insulin",
            commonErrors: ["Choosing (b) — glucagon raises glucose."],
          },
        },
        {
          id: "cils-u4-hor-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do hormones differ from nerve impulses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hormones vs nerves", statement: "Hormones: slower, blood-borne, widespread, longer-lasting." },
            ],
            steps: [
              { reasoning: "Nerves fast/specific; hormones slow/widespread via blood.", working: "comparison", marks: 1, markCode: "M" },
              { reasoning: "Hormonal effects last longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nerves are fast and specific; hormones travel in blood, act more slowly but longer.",
            commonErrors: ["Only saying 'slower' — need both speed and distribution differences."],
          },
        },
        {
          id: "cils-u4-hor-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how insulin and glucagon maintain blood glucose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Glucose homeostasis", statement: "Insulin lowers high glucose; glucagon raises low glucose — negative feedback." },
            ],
            steps: [
              { reasoning: "High glucose → pancreas releases insulin → cells absorb glucose, store as glycogen.", working: "insulin", marks: 1, markCode: "M" },
              { reasoning: "Low glucose → glucagon released → glycogen→glucose.", working: "glucagon", marks: 1, markCode: "M" },
              { reasoning: "Opposite actions maintain balance — negative feedback.", working: "feedback", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin lowers high glucose; glucagon raises low glucose — balanced pair.",
            commonErrors: ["Forgetting glucagon — need both directions."],
          },
        },
        {
          id: "cils-u4-hor-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the fight-or-flight response.",
          parts: [
            { label: "a", prompt: "What triggers adrenaline release?", marks: 2 },
            { label: "b", prompt: "List three bodily changes adrenaline causes.", marks: 3 },
            { label: "c", prompt: "Explain why these changes help.", marks: 2 },
            { label: "d", prompt: "What happens after the threat passes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adrenaline", statement: "Stress → adrenaline → increased heart rate, glucose, alertness — prepares for action." },
            ],
            steps: [
              { part: "a", reasoning: "Fear/stress/danger detected by brain → signals adrenal glands.", working: "trigger", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heart rate up, breathing faster, glucose released, pupils dilate, blood to muscles.", working: "changes", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Prepares body for rapid action — more O₂/glucose to muscles.", working: "prepare", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Adrenaline levels fall → body returns to normal (homeostasis).", working: "return", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stress triggers adrenal glands (b) heart↑/glucose↑/alertness (c) prepares for action (d) adrenaline falls, returns normal",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple changes.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Saying 'adrenaline stays high' — it's temporary."],
          },
        },
      ],
    },
    {
      id: "cils-u4-reproduction",
      title: "Human reproduction",
      skill: "Describe the male and female reproductive systems and the stages of reproduction.",
      lesson: {
        sections: [
          {
            heading: "Reproductive systems",
            body: "Male: testes produce sperm + testosterone. Female: ovaries produce eggs + oestrogen; uterus for embryo; oviducts for fertilisation.",
          },
          {
            heading: "Fertilisation and development",
            body: "Sperm meets egg in oviduct → zygote → divides → implants in uterus → placenta exchanges nutrients → fetus develops ~9 months → birth.",
          },
          {
            heading: "Menstrual cycle",
            body: "~28-day cycle: egg released (ovulation ~day 14) → uterus lining thickens → if no fertilisation, lining shed (period). Hormones (oestrogen, progesterone) control it.",
          },
        ],
        keyFormulas: [
          { name: "Reproduction", statement: "Sperm+egg→zygote→embryo→fetus→birth; placenta nourishes fetus." },
        ],
        workedExample: {
          problem: "What is the role of the placenta?",
          solution: "Exchanges nutrients and oxygen from mother to fetus; removes waste — but blood doesn't mix.",
        },
      },
      questions: [
        {
          id: "cils-u4-repro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilisation typically occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oviduct (fallopian tube)" },
              { id: "b", text: "Uterus" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Vagina" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation", statement: "Sperm+egg fuse in oviduct → zygote travels to uterus." },
            ],
            steps: [
              { reasoning: "Fertilisation happens in oviduct, not uterus.", working: "oviduct", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oviduct (fallopian tube)",
            commonErrors: ["Choosing (b) — uterus is where embryo implants, not where fertilisation occurs."],
          },
        },
        {
          id: "cils-u4-repro-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the placenta do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Placenta", statement: "Exchanges nutrients/O₂/waste between mother and fetus." },
            ],
            steps: [
              { reasoning: "Transfers nutrients and oxygen mother→fetus; waste fetus→mother.", working: "exchange", marks: 1, markCode: "M" },
              { reasoning: "Blood doesn't mix — selective exchange.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Placenta exchanges nutrients and oxygen to fetus, removes waste — blood doesn't mix.",
            commonErrors: ["Saying 'shared blood' — they're separate circulations."],
          },
        },
        {
          id: "cils-u4-repro-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the menstrual cycle and the role of hormones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Menstrual cycle", statement: "~28 days; oestrogen/progesterone control lining and ovulation." },
            ],
            steps: [
              { reasoning: "Uterus lining thickens under oestrogen/progesterone.", working: "lining", marks: 1, markCode: "M" },
              { reasoning: "Ovulation ~day 14 — egg released.", working: "ovulation", marks: 1, markCode: "M" },
              { reasoning: "No fertilisation → hormone drop → lining shed (period).", working: "period", marks: 1, markCode: "M" },
              { reasoning: "Cycle explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hormones thicken lining → ovulation day ~14 → if no fertilisation, lining shed.",
            commonErrors: ["Confusing ovulation with fertilisation."],
          },
        },
        {
          id: "cils-u4-repro-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace development from fertilisation to birth.",
          parts: [
            { label: "a", prompt: "What happens at fertilisation?", marks: 2 },
            { label: "b", prompt: "Describe embryo development.", marks: 3 },
            { label: "c", prompt: "Explain the placenta's role.", marks: 2 },
            { label: "d", prompt: "What happens at birth?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Development", statement: "Zygote→embryo→fetus→birth; placenta nourishes throughout." },
            ],
            steps: [
              { part: "a", reasoning: "Sperm+egg fuse in oviduct → zygote.", working: "zygote", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zygote divides→embryo→implants in uterus→develops organs→fetus.", working: "stages", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stages correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exchanges nutrients/O₂/waste — fetus nourished without blood mixing.", working: "exchange", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "After ~9 months, contractions push baby through cervix/vagina.", working: "birth", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sperm+egg→zygote (b) divides→embryo→fetus (c) nutrient exchange (d) ~9 months→birth",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Stages correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Saying 'baby eats through placenta' — exchange, not eating."],
          },
        },
      ],
    },
    {
      id: "cils-u4-ecology-bridge",
      title: "Bridging to ecosystems",
      skill: "Connect human biology to ecosystem concepts — energy flow, food chains, interdependence.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "Sun → producers (photosynthesis) → consumers → decomposers. Energy lost as heat at each level (~90%).",
          },
          {
            heading: "Food chains",
            body: "Grass → grasshopper → frog → snake → eagle. Arrows show energy flow direction. Decomposers recycle nutrients.",
          },
          {
            heading: "Interdependence",
            body: "Species depend on each other — pollinators need flowers, predators control prey. Removing one species affects whole ecosystem.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Energy flows sun→producers→consumers→decomposers; ~10% transferred each level." },
        ],
        workedExample: {
          problem: "Why are there fewer eagles than grasshoppers?",
          solution: "Only ~10% energy transfers each level — top predators need huge energy input, so fewer can be supported.",
        },
      },
      questions: [
        {
          id: "cils-u4-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grass" },
              { id: "b", text: "Lion" },
              { id: "c", text: "Fungus" },
              { id: "d", text: "Worm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "Makes own food via photosynthesis — plants/algae." },
            ],
            steps: [
              { reasoning: "Grass photosynthesises — producer.", working: "grass", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Grass",
            commonErrors: ["Choosing (c) — fungus is decomposer."],
          },
        },
        {
          id: "cils-u4-eco-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do arrows in a food chain represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain arrows", statement: "Show direction of energy flow — who eats whom." },
            ],
            steps: [
              { reasoning: "Arrow points from food to eater — energy transfer direction.", working: "energy flow", marks: 1, markCode: "M" },
              { reasoning: "Not 'eats' arrow — it's energy direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrows show energy flow — from organism eaten to organism that eats it.",
            commonErrors: ["Reading as 'eats' — arrow points to predator, not prey."],
          },
        },
        {
          id: "cils-u4-eco-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why energy decreases at each trophic level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy pyramid", statement: "~90% energy lost as heat/metabolic processes each level." },
            ],
            steps: [
              { reasoning: "Most energy used for respiration, movement, maintaining body temperature — lost as heat.", working: "heat loss", marks: 1, markCode: "M" },
              { reasoning: "Only ~10% transferred to next level.", working: "10%", marks: 1, markCode: "M" },
              { reasoning: "Result: fewer organisms at higher levels — pyramid shape.", working: "pyramid", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "~90% lost as heat/metabolism each level — only ~10% reaches next.",
            commonErrors: ["Saying 'energy destroyed' — it's lost as heat, not destroyed."],
          },
        },
        {
          id: "cils-u4-eco-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe a food chain and its importance.",
          parts: [
            { label: "a", prompt: "Draw/describe a simple food chain.", marks: 2 },
            { label: "b", prompt: "Identify producers, consumers, decomposers.", marks: 2 },
            { label: "c", prompt: "Explain what happens if a species is removed.", marks: 3 },
            { label: "d", prompt: "Why are decomposers essential?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Food chain", statement: "Energy flow; removal affects whole chain; decomposers recycle nutrients." },
            ],
            steps: [
              { part: "a", reasoning: "e.g. grass→rabbit→fox — energy flow arrows.", working: "chain", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Valid chain.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Grass=producer; rabbit/fox=consumers; bacteria/fungi=decomposers.", working: "roles", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Remove grass → rabbits starve → foxes lose food → chain collapses.", working: "cascading", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effect explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear impact.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Break down dead matter → release nutrients for producers — recycle elements.", working: "recycle", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) grass→rabbit→fox (b) producer/consumers/decomposers (c) cascade effect (d) recycle nutrients",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Chain valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Roles correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Impact explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Thinking energy cycles — it flows one way, matter cycles."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u4-hormones-notes",
      title: "Hormones, reproduction and ecosystems — revision notes",
      summary: "Insulin/glucagon, adrenaline, reproduction stages, food chains.",
      sections: [
        {
          heading: "Hormones & reproduction",
          body: "Insulin↓glucose, glucagon↑glucose. Adrenaline=stress response. Fertilisation in oviduct→zygote→embryo→fetus→birth; placenta exchanges.",
        },
        {
          heading: "Ecosystems",
          body: "Producers→consumers→decomposers. ~10% energy per level. Arrows=energy flow. Removal cascades; decomposers recycle nutrients.",
        },
      ],
    },
  ],
};
