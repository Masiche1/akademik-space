import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cils-u9-lesson-9-2",
  code: "9-2",
  title: "Integrated science problems",
  goal: "I CAN solve problems that combine biology, chemistry and physics.",
  standards: ["0893 Science: integrated problems"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Light→chemical energy conversion in plants." },
    { term: "Respiration", definition: "Glucose + oxygen → energy + CO₂ + water." },
    { term: "Enzyme", definition: "Protein catalyst — speeds reactions." },
    { term: "pH", definition: "Measure of acidity/alkalinity — 0-14 scale." },
    { term: "Density", definition: "Mass per volume — kg/m³." },
    { term: "Efficiency", definition: "Useful output ÷ total input × 100%." },
  ],
  concepts: [
    {
      id: "cils-u9-integrated",
      title: "Integrated science problems",
      skill: "Apply multiple science disciplines to real-world scenarios.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis and respiration",
            body: "Photosynthesis: CO₂+water→glucose+oxygen (stores energy). Respiration: glucose+oxygen→energy+CO₂+water (releases energy). Complementary processes.",
          },
          {
            heading: "Enzymes in body",
            body: "Digestive enzymes (amylase, protease, lipase) break food; temperature and pH affect activity — denaturation at extremes.",
          },
          {
            heading: "Energy systems",
            body: "Food→glucose→ATP (energy currency). Body systems: digestive (breakdown), circulatory (transport), respiratory (O₂). All integrated.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Photosynthesis stores energy; respiration releases it; enzymes catalyse; body systems integrated." },
        ],
        workedExample: {
          problem: "How do plants and animals relate energetically?",
          solution: "Plants photosynthesise (store energy); animals respire (release energy) — complementary cycle.",
        },
      },
      questions: [
        {
          id: "cils-u9-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do photosynthesis and respiration have in common?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both occur only in plants" },
              { id: "b", text: "Both involve glucose, CO₂ and oxygen" },
              { id: "c", text: "Both need light" },
              { id: "d", text: "Both produce oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis/respiration", statement: "Both involve glucose, CO₂, oxygen — opposite directions." },
            ],
            steps: [
              { reasoning: "Both use same molecules, opposite directions.", working: "same molecules", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Both involve glucose, CO₂ and oxygen",
            commonErrors: ["Choosing (b) — only photosynthesis produces oxygen."],
          },
        },
        {
          id: "cils-u9-int-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do enzymes affect reactions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enzymes", statement: "Catalyse reactions — lower activation energy, not consumed." },
            ],
            steps: [
              { reasoning: "Speed up reactions without being used up.", working: "catalyst", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzymes catalyse reactions — speed them up without being consumed.",
            commonErrors: ["Saying 'consumed' — enzymes are catalysts."],
          },
        },
        {
          id: "cils-u9-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how body systems work together during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "System integration", statement: "Muscles need O₂/glucose; respiratory supplies O₂; circulatory delivers; digestive provides glucose." },
            ],
            steps: [
              { reasoning: "Muscles need energy — glucose + oxygen for respiration.", working: "energy need", marks: 1, markCode: "M" },
              { reasoning: "Respiratory system increases breathing — more O₂.", working: "respiratory", marks: 1, markCode: "M" },
              { reasoning: "Circulatory system increases heart rate — delivers O₂/glucose faster.", working: "circulatory", marks: 1, markCode: "M" },
              { reasoning: "Systems integrated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscles need O₂/glucose → respiratory supplies O₂ → circulatory delivers — all coordinated.",
            commonErrors: ["Only one system — need integration."],
          },
        },
        {
          id: "cils-u9-int-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Solve an integrated science problem.",
          parts: [
            { label: "a", prompt: "How do plants provide energy for animals?", marks: 2 },
            { label: "b", prompt: "How does the body process this energy?", marks: 3 },
            { label: "c", prompt: "What happens during exercise?", marks: 2 },
            { label: "d", prompt: "How is this efficient/inefficient?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy flow", statement: "Plants→animals→energy; body systems coordinate; efficiency limited." },
            ],
            steps: [
              { part: "a", reasoning: "Photosynthesis stores solar energy as glucose — food chain energy source.", working: "plants", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Digestion breaks food→glucose; absorption; respiration releases energy as ATP.", working: "processing", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Systems integrated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscles need more O₂/glucose; breathing/heart rate increase.", working: "exercise", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Only ~10% energy transfers each trophic level — inefficient but necessary.", working: "efficiency", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) photosynthesis stores energy (b) digestion+respiration release (c) O₂/glucose demand↑ (d) ~10% per level",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Systems integrated.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Only biology — need energy flow perspective."],
          },
        },
        {
          id: "cils-u9-int-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of processes are complementary — one stores energy, the other releases it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis and respiration" },
              { id: "b", text: "Diffusion and osmosis" },
              { id: "c", text: "Evaporation and condensation" },
              { id: "d", text: "Digestion and excretion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy cycle", statement: "Photosynthesis stores energy; respiration releases it." },
            ],
            steps: [
              { reasoning: "Photosynthesis stores, respiration releases — complementary.", working: "complementary", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Photosynthesis and respiration",
            commonErrors: ["Choosing physical processes — the link is energy storage/release."],
          },
        },
        {
          id: "cils-u9-int-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sunlight provides $1000$ kJ of energy to a field. Plants convert $100$ kJ into glucose. Calculate the efficiency of photosynthesis as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$efficiency = \\frac{useful}{total} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{100}{1000} \\times 100$.", working: "100/1000 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Simplify the fraction.", working: "0.1 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Forgetting $\\times 100$ — answer would be $0.1$."],
          },
        },
        {
          id: "cils-u9-int-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how temperature affects enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enzymes", statement: "Rate increases with temperature up to optimum, then falls as enzymes denature." },
            ],
            steps: [
              { reasoning: "Rising temperature increases molecular movement and collision frequency.", working: "collisions", marks: 1, markCode: "M" },
              { reasoning: "Activity peaks at the optimum temperature.", working: "optimum", marks: 1, markCode: "M" },
              { reasoning: "Beyond optimum, enzymes denature — shape changes and substrate no longer fits.", working: "denature", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate rises to an optimum then falls as enzymes denature at high temperature.",
            commonErrors: ["Saying activity keeps increasing — enzymes denature."],
          },
        },
        {
          id: "cils-u9-int-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which enzyme digests starch in the human alimentary canal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bile" },
              { id: "b", text: "Protease" },
              { id: "c", text: "Amylase" },
              { id: "d", text: "Lipase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amylase", statement: "Enzyme that breaks down starch into sugars." },
            ],
            steps: [
              { reasoning: "Amylase digests starch.", working: "amylase", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Amylase",
            commonErrors: ["Confusing with protease (protein) or lipase (fats)."],
          },
        },
        {
          id: "cils-u9-int-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Aerobic respiration of one glucose molecule releases about $36$ units of usable energy. How much energy is released from $2$ glucose molecules?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Respiration yield", statement: "Energy released scales with glucose amount." },
            ],
            steps: [
              { reasoning: "Multiply $36 \\times 2$.", working: "36 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Correct total.", working: "72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$ units",
            commonErrors: ["Adding instead of multiplying, or using $18$."],
          },
        },
        {
          id: "cils-u9-int-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace the path of energy from sunlight to muscle contraction.",
          parts: [
            { label: "a", prompt: "How do plants capture sunlight?", marks: 2 },
            { label: "b", prompt: "How do animals obtain this energy?", marks: 2 },
            { label: "c", prompt: "How does the body convert food to usable energy?", marks: 2 },
            { label: "d", prompt: "How do muscles use this energy?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy flow", statement: "Sun→photosynthesis→food→digestion→respiration→ATP→muscle work." },
            ],
            steps: [
              { part: "a", reasoning: "Photosynthesis converts light energy to chemical energy in glucose.", working: "photosynthesis", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Energy stored correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Animals eat plants/other animals; energy passes through food chain.", working: "food chain", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Path described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digestion breaks food to glucose; respiration releases energy as ATP.", working: "ATP", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conversion explained.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "ATP powers muscle contraction — chemical energy becomes movement.", working: "muscles", marks: 1, markCode: "M" },
              { part: "d", reasoning: "End use identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) photosynthesis stores (b) food chain transfers (c) respiration→ATP (d) ATP powers muscles",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Stopping at 'food gives energy' — need ATP and respiration link."],
          },
        },
        {
          id: "cils-u9-int-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does enzyme activity drop sharply at very high temperatures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enzymes denature — their shape changes permanently" },
              { id: "b", text: "Reactions stop being exothermic" },
              { id: "c", text: "pH becomes neutral" },
              { id: "d", text: "The substrate runs out" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denaturation", statement: "Heat permanently changes enzyme shape so substrate cannot bind." },
            ],
            steps: [
              { reasoning: "High temperature denatures enzymes.", working: "denature", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Enzymes denature — their shape changes permanently",
            commonErrors: ["Thinking activity just slows — denaturation is permanent."],
          },
        },
        {
          id: "cils-u9-int-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Producers in an ecosystem capture $5000$ kJ of energy. Herbivores receive $500$ kJ. Calculate the percentage of energy transferred.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transfer efficiency", statement: "$\\frac{received}{available} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{500}{5000} \\times 100$.", working: "500/5000 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Simplify to $0.1 \\times 100$.", working: "0.1 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Inverting the ratio — producers to herbivores, not reverse."],
          },
        },
        {
          id: "cils-u9-int-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the body maintains a steady blood glucose level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Homeostasis", statement: "Glucose is stored as glycogen when high and released when low — negative feedback." },
            ],
            steps: [
              { reasoning: "After eating, glucose rises; insulin converts excess to glycogen in liver/muscles.", working: "insulin", marks: 1, markCode: "M" },
              { reasoning: "When glucose falls (e.g. exercise), glucagon releases stored glycogen as glucose.", working: "glucagon", marks: 1, markCode: "M" },
              { reasoning: "Negative feedback keeps glucose within a narrow range.", working: "feedback", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin stores excess glucose as glycogen; glucagon releases it — negative feedback.",
            commonErrors: ["Describing digestion only — need hormonal control."],
          },
        },
        {
          id: "cils-u9-int-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "During exercise, which system delivers oxygen and glucose to muscle cells fastest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circulatory system" },
              { id: "b", text: "Nervous system" },
              { id: "c", text: "Reproductive system" },
              { id: "d", text: "Digestive system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circulatory system", statement: "Blood transports oxygen, glucose and wastes." },
            ],
            steps: [
              { reasoning: "Blood (circulation) carries O₂/glucose to muscles.", working: "circulatory", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Circulatory system",
            commonErrors: ["Choosing digestive — it absorbs nutrients but blood transports them."],
          },
        },
        {
          id: "cils-u9-int-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A person's heart rate rises from $60$ beats per minute at rest to $120$ bpm during exercise. Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage increase", statement: "$\\frac{new - old}{old} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{120 - 60}{60} \\times 100$.", working: "60/60 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage increase.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100\\%$",
            commonErrors: ["Dividing by 120 instead of the original 60."],
          },
        },
        {
          id: "cils-u9-int-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Solve an integrated science problem: how do plants and animals exchange matter and energy?",
          parts: [
            { label: "a", prompt: "Describe the gases exchanged between plants and animals.", marks: 2 },
            { label: "b", prompt: "Explain how food chains transfer energy.", marks: 3 },
            { label: "c", prompt: "Describe how the human body coordinates energy supply during exercise.", marks: 2 },
            { label: "d", prompt: "Explain why energy transfer between trophic levels is inefficient.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integration", statement: "Gas exchange cycle; ~10% energy transfer; body systems coordinate; heat losses." },
            ],
            steps: [
              { part: "a", reasoning: "Plants take in $CO_2$ and release $O_2$; animals do the reverse in respiration.", working: "gases", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complementary cycle correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy flows sun→producers→herbivores→carnivores; ~10% per level.", working: "chains", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Direction and loss stated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Respiratory rate and heart rate increase; O₂/glucose delivery rises.", working: "exercise", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Coordination explained.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Most energy lost as heat, movement, undigested waste — only ~10% passes on.", working: "losses", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) complementary gases (b) ~10%/level (c) breathing+heart rate up (d) heat/waste losses",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Flow explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Treating photosynthesis and respiration as unrelated."],
          },
        },
      ],
    },
    {
      id: "cils-u9-experiments",
      title: "Practical science skills",
      skill: "Apply experimental design, data analysis and evaluation.",
      lesson: {
        sections: [
          {
            heading: "Experimental design",
            body: "Identify variables, control others, repeat trials, use appropriate equipment, ensure safety.",
          },
          {
            heading: "Data analysis",
            body: "Record accurately, calculate averages, identify trends, draw graphs, look for anomalies.",
          },
          {
            heading: "Evaluation",
            body: "Reliability (repeatability), validity (tests what intended), identify errors, suggest improvements.",
          },
        ],
        keyFormulas: [
          { name: "Practical skills", statement: "Design→data→analysis→evaluation; control variables; repeat for reliability." },
        ],
        workedExample: {
          problem: "How to improve an experiment's reliability?",
          solution: "Repeat trials, control variables better, use more precise equipment, average results.",
        },
      },
      questions: [
        {
          id: "cils-u9-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fair test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only one variable changed" },
              { id: "b", text: "Random results" },
              { id: "c", text: "No controls" },
              { id: "d", text: "All variables changed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fair test", statement: "Only independent variable changed; others controlled." },
            ],
            steps: [
              { reasoning: "Fair test = one variable changed.", working: "one variable", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Only one variable changed",
            commonErrors: ["Choosing (b) — that's unfair."],
          },
        },
        {
          id: "cils-u9-exp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to improve reliability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reliability", statement: "Repeat trials, control variables, precise equipment." },
            ],
            steps: [
              { reasoning: "Repeat trials + control variables + better equipment.", working: "improve", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeat trials, control variables, use precise equipment.",
            commonErrors: ["Only repeating — need controls too."],
          },
        },
        {
          id: "cils-u9-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an experiment to test photosynthesis rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Experiment design", statement: "Change light/CO₂, measure O₂ bubbles or starch, control temperature/water/plant." },
            ],
            steps: [
              { reasoning: "Independent: light intensity or CO₂ concentration.", working: "independent", marks: 1, markCode: "M" },
              { reasoning: "Dependent: rate (bubbles/min or starch test).", working: "dependent", marks: 1, markCode: "M" },
              { reasoning: "Controls: temperature, water, plant species, CO₂ (if not variable).", working: "controls", marks: 1, markCode: "M" },
              { reasoning: "Design clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change light/CO₂, measure rate, control temp/water/plant.",
            commonErrors: ["Multiple variables — unfair test."],
          },
        },
        {
          id: "cils-u9-exp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate an experiment.",
          parts: [
            { label: "a", prompt: "Describe experimental design.", marks: 2 },
            { label: "b", prompt: "What data to collect?", marks: 2 },
            { label: "c", prompt: "How to analyse results?", marks: 2 },
            { label: "d", prompt: "How to evaluate?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Design→data→analysis→evaluation; reliability/validity." },
            ],
            steps: [
              { part: "a", reasoning: "Variables identified, controlled, repeated.", working: "design", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dependent variable measurements, repeats, units.", working: "data", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Trends, averages, graphs, anomalies.", working: "analysis", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reliability (repeatable?), validity (tests intended?), errors, improvements.", working: "evaluation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple aspects.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Thorough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variables/controls (b) measurements/repeats (c) trends/averages (d) reliability/validity/errors",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Thorough.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No evaluation — just presenting data."],
          },
        },
        {
          id: "cils-u9-exp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment, what is the dependent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The factor you keep constant" },
              { id: "b", text: "The factor you measure" },
              { id: "c", text: "The hypothesis" },
              { id: "d", text: "The factor you change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent variable", statement: "The outcome measured in response to the independent variable." },
            ],
            steps: [
              { reasoning: "Dependent = measured result.", working: "measured", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The factor you measure",
            commonErrors: ["Confusing with independent variable (what is changed)."],
          },
        },
        {
          id: "cils-u9-exp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three repeat measurements give $3.1$, $3.3$ and $3.2$ cm. Calculate the mean.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.2, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum $\\div$ count." },
            ],
            steps: [
              { reasoning: "Sum $= 9.6$; divide by 3.", working: "9.6/3", marks: 1, markCode: "M" },
              { reasoning: "Correct mean.", working: "3.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.2$ cm",
            commonErrors: ["Not dividing by the number of repeats."],
          },
        },
        {
          id: "cils-u9-exp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how to draw a line graph of experimental results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Graphing", statement: "Label axes with variables and units; plot points; draw best-fit line." },
            ],
            steps: [
              { reasoning: "Independent variable on x-axis, dependent on y-axis, both labelled with units.", working: "axes", marks: 1, markCode: "M" },
              { reasoning: "Plot points accurately and draw a best-fit line or curve.", working: "line", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Label axes with units, plot points, draw best-fit line.",
            commonErrors: ["Joining points dot-to-dot instead of best-fit line."],
          },
        },
        {
          id: "cils-u9-exp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an anomalous result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mean of all results" },
              { id: "b", text: "A result that does not fit the pattern" },
              { id: "c", text: "The highest result" },
              { id: "d", text: "A repeated result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "A result that does not fit the pattern of the others — likely error." },
            ],
            steps: [
              { reasoning: "Anomaly = doesn't fit the trend.", working: "pattern", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A result that does not fit the pattern",
            commonErrors: ["Thinking any extreme value is anomalous — it must break the pattern."],
          },
        },
        {
          id: "cils-u9-exp-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Four time measurements are $10.1$, $10.3$, $9.9$ and $10.2$ s. Calculate the range.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "s" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Range", statement: "Range = largest value $-$ smallest value." },
            ],
            steps: [
              { reasoning: "Largest $10.3$, smallest $9.9$; subtract.", working: "10.3 - 9.9", marks: 1, markCode: "M" },
              { reasoning: "Correct range.", working: "0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$ s",
            commonErrors: ["Subtracting smallest from largest incorrectly or using mean."],
          },
        },
        {
          id: "cils-u9-exp-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate an experiment testing whether fertiliser affects plant growth.",
          parts: [
            { label: "a", prompt: "Identify the variables in a fair design.", marks: 2 },
            { label: "b", prompt: "Describe the data you would collect.", marks: 2 },
            { label: "c", prompt: "Explain how you would analyse the results.", marks: 2 },
            { label: "d", prompt: "Evaluate the reliability and validity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Variables→data→analysis→reliability/validity." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: fertiliser amount; dependent: plant height/biomass; controlled: light, water, soil, plant type.", working: "variables", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Height/mass measurements at intervals, repeats, units recorded.", working: "data", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Calculate means, plot graph, look for trend between fertiliser and growth.", working: "analysis", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Analysis described.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reliability: repeats give consistent results; validity: measures growth directly.", working: "evaluation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both assessed with judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) IV/DV/controls (b) growth measurements (c) means+graph+trend (d) reliability/validity judgement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Both assessed.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Presenting data without evaluating it."],
          },
        },
        {
          id: "cils-u9-exp-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change most improves the validity of an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working faster" },
              { id: "b", text: "Taking more repeat readings" },
              { id: "c", text: "Using brighter colours in the report" },
              { id: "d", text: "Measuring the intended variable accurately with suitable apparatus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Validity", statement: "The experiment tests what it claims to test." },
            ],
            steps: [
              { reasoning: "Validity = accurate measurement of the intended variable.", working: "intended", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Measuring the intended variable accurately with suitable apparatus",
            commonErrors: ["Choosing (a) — repeats improve reliability, not validity."],
          },
        },
        {
          id: "cils-u9-exp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student completes $18$ out of $20$ trials successfully. Calculate the percentage success rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage", statement: "$\\frac{part}{whole} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{18}{20} \\times 100$.", working: "18/20 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\%$",
            commonErrors: ["Using 20 as numerator or forgetting $\\times 100$."],
          },
        },
        {
          id: "cils-u9-exp-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between reliability and validity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Reliability vs validity", statement: "Reliability = consistent repeats; validity = tests the intended variable." },
            ],
            steps: [
              { reasoning: "Reliability: repeated trials give similar results.", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Validity: the method actually measures what it claims to.", working: "validity", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction with example awareness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reliability = consistent results on repeat; validity = measures the intended variable.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "cils-u9-exp-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the best way to reduce the effect of random error in measurements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat readings and calculate the mean" },
              { id: "b", text: "Round all results to whole numbers" },
              { id: "c", text: "Take one careful reading" },
              { id: "d", text: "Ignore the highest reading" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Random error", statement: "Repeating and averaging cancels out random variations." },
            ],
            steps: [
              { reasoning: "Repeats + mean reduce random error.", working: "mean", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Repeat readings and calculate the mean",
            commonErrors: ["Ignoring readings without justification — anomalies need investigation."],
          },
        },
        {
          id: "cils-u9-exp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Readings are recorded as $2.5 \\pm 0.1$ cm. Calculate the maximum possible range of the true value.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.2, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Uncertainty range", statement: "Max value $-$ min value = $2 \\times$ uncertainty." },
            ],
            steps: [
              { reasoning: "Max $= 2.6$, min $= 2.4$; range $= 2.6 - 2.4$.", working: "2.6 - 2.4", marks: 1, markCode: "M" },
              { reasoning: "Equivalently $2 \\times 0.1$.", working: "2 \\times 0.1", marks: 1, markCode: "M" },
              { reasoning: "Correct range.", working: "0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2$ cm",
            commonErrors: ["Answering $0.1$ — that is the uncertainty, not the full range."],
          },
        },
        {
          id: "cils-u9-exp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review practical science skills.",
          parts: [
            { label: "a", prompt: "Describe the steps of experimental design.", marks: 3 },
            { label: "b", prompt: "Explain how to record and present data.", marks: 2 },
            { label: "c", prompt: "Describe how to analyse results.", marks: 2 },
            { label: "d", prompt: "Explain what makes an experiment reliable and valid.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practical skills", statement: "Design→record→analyse→evaluate." },
            ],
            steps: [
              { part: "a", reasoning: "Identify variables, control others, choose apparatus, repeat trials, ensure safety.", working: "design", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiple design elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Record immediately in tables with units; calculate means; present in graphs.", working: "record", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find trends, calculate averages, identify anomalies, draw conclusions.", working: "analyse", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reliable = repeatable consistent results; valid = tests intended variable.", working: "reliability/validity", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both distinguished.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variables/controls/repeats (b) tables+units+graphs (c) trends/anomalies (d) repeatable + intended",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Design comprehensive.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Both correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Confused.", part: "d" },
            ],
            commonErrors: ["Presenting data without evaluating reliability/validity."],
          },
        },
      ],
    },
    {
      id: "cils-u9-synthesis",
      title: "Science synthesis: connecting topics",
      skill: "Connect all science topics into coherent understanding.",
      lesson: {
        sections: [
          {
            heading: "Big picture",
            body: "Science studies matter, energy, life. Everything interconnected — cells make organisms, organisms form ecosystems, ecosystems affect climate.",
          },
          {
            heading: "Energy theme",
            body: "Photosynthesis stores solar energy; food chains transfer it; body systems use it; waste heat returns to environment.",
          },
          {
            heading: "Systems theme",
            body: "Body systems, ecosystems, climate — all interconnected systems with feedback, balance, and emergent properties.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Matter+energy+life interconnected; systems thinking unifies science." },
        ],
        workedExample: {
          problem: "How does everything connect?",
          solution: "Sun→plants→animals→decomposers→nutrients→plants; energy flows through all systems.",
        },
      },
      questions: [
        {
          id: "cils-u9-syn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What unifies all science topics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only chemistry" },
              { id: "b", text: "Matter, energy and life" },
              { id: "c", text: "Only physics" },
              { id: "d", text: "Only biology" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Science unity", statement: "Matter, energy, life — interconnected." },
            ],
            steps: [
              { reasoning: "All science studies these.", working: "unified", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Matter, energy and life",
            commonErrors: ["Choosing single subject — science is integrated."],
          },
        },
        {
          id: "cils-u9-syn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does energy flow through ecosystems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy flow", statement: "Sun→producers→consumers→decomposers; ~10% per level." },
            ],
            steps: [
              { reasoning: "Energy transfers through food chain.", working: "flow", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sun→producers→consumers→decomposers; ~10% energy per level.",
            commonErrors: ["Energy cycles — it flows one way."],
          },
        },
        {
          id: "cils-u9-syn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how systems thinking unifies science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Systems thinking", statement: "All science domains are systems — components, interactions, feedback." },
            ],
            steps: [
              { reasoning: "Body systems, ecosystems, climate — all have components+interactions.", working: "systems", marks: 1, markCode: "M" },
              { reasoning: "Feedback loops regulate — homeostasis in body, balance in ecosystems.", working: "feedback", marks: 1, markCode: "M" },
              { reasoning: "Same principles apply across biology, chemistry, physics.", working: "unified", marks: 1, markCode: "M" },
              { reasoning: "Unifying explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All domains are systems with components, interactions, feedback — unified approach.",
            commonErrors: ["Just listing systems — need unifying principle."],
          },
        },
        {
          id: "cils-u9-syn-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Synthesize science knowledge.",
          parts: [
            { label: "a", prompt: "How are cells related to ecosystems?", marks: 2 },
            { label: "b", prompt: "How does energy connect all topics?", marks: 3 },
            { label: "c", prompt: "Why is systems thinking important?", marks: 2 },
            { label: "d", prompt: "Give example of interconnected science.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Cells→organisms→ecosystems; energy flows through all; systems unify." },
            ],
            steps: [
              { part: "a", reasoning: "Cells make organisms; organisms form ecosystems — hierarchy.", working: "hierarchy", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sun→photosynthesis→food chains→body energy→heat loss — energy unifies.", working: "energy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple connections.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Helps understand complex problems — see connections, predict effects.", working: "importance", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Photosynthesis (all three), climate change (all three), human body (all three).", working: "example", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cells→organisms→ecosystems (b) energy flows all (c) understand connections (d) e.g. photosynthesis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple connections.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Treating topics separately — synthesis needed."],
          },
        },
        {
          id: "cils-u9-syn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theme unites all areas of science — biology, chemistry and physics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the human body" },
              { id: "b", text: "Only machines" },
              { id: "c", text: "Matter, energy and their interactions" },
              { id: "d", text: "Only living things" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Science unity", statement: "All science studies matter, energy and their interactions." },
            ],
            steps: [
              { reasoning: "Matter and energy underpin every science topic.", working: "matter/energy", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Matter, energy and their interactions",
            commonErrors: ["Choosing a single-subject answer — science is integrated."],
          },
        },
        {
          id: "cils-u9-syn-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A food chain has producers with $10000$ kJ of energy. Calculate the energy reaching organisms at the fourth trophic level, assuming $10\\%$ transfer per level.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trophic transfer", statement: "About $10\\%$ of energy passes to each successive level." },
            ],
            steps: [
              { reasoning: "Level 1: $10000 \\times 0.1 = 1000$ kJ.", working: "10000 \\times 0.1", marks: 1, markCode: "M" },
              { reasoning: "Level 2: $1000 \\times 0.1 = 100$ kJ; level 3: $100 \\times 0.1 = 10$ kJ.", working: "1000 \\times 0.1; 100 \\times 0.1", marks: 1, markCode: "M" },
              { reasoning: "Fourth level receives $10$ kJ.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ kJ",
            commonErrors: ["Stopping after two transfers or using $100\\%$."],
          },
        },
        {
          id: "cils-u9-syn-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of a feedback loop in a system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback", statement: "A change triggers a response that counteracts or amplifies it." },
            ],
            steps: [
              { reasoning: "Any valid example: temperature regulation, blood glucose, thermostat.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Feedback mechanism correctly described.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. body temperature: overheating triggers sweating to cool down.",
            commonErrors: ["Describing a one-way process without feedback."],
          },
        },
        {
          id: "cils-u9-syn-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisms complete nutrient cycles by breaking down dead material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Herbivores" },
              { id: "b", text: "Predators" },
              { id: "c", text: "Decomposers" },
              { id: "d", text: "Producers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposers", statement: "Fungi and bacteria that break down dead organisms, recycling nutrients." },
            ],
            steps: [
              { reasoning: "Decomposers recycle nutrients.", working: "decomposers", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Decomposers",
            commonErrors: ["Choosing producers — they capture energy, not decompose."],
          },
        },
        {
          id: "cils-u9-syn-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Producers capture $2000$ kJ and primary consumers receive $200$ kJ. What percentage of energy is transferred?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Transfer percentage", statement: "$\\frac{transferred}{original} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{200}{2000} \\times 100$.", working: "200/2000 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\%$",
            commonErrors: ["Reversing numerator and denominator."],
          },
        },
        {
          id: "cils-u9-syn-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a change in one part of a system affects the whole.",
          parts: [
            { label: "a", prompt: "Give an example of interconnected systems in science.", marks: 2 },
            { label: "b", prompt: "Describe how a change in one component affects others.", marks: 2 },
            { label: "c", prompt: "Explain why feedback matters in systems.", marks: 2 },
            { label: "d", prompt: "Describe an emergent property of a system.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Systems thinking", statement: "Components interact; changes propagate; feedback regulates; systems have emergent properties." },
            ],
            steps: [
              { part: "a", reasoning: "e.g. human body systems, ecosystem food web, climate system.", working: "example", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Valid system identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Change in one part affects others through interactions — e.g. fewer plants → less food for herbivores.", working: "propagation", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chain explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Feedback loops correct or counteract changes — maintain balance or amplify change.", working: "feedback", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Role explained.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Emergent property: whole system behaves differently from parts alone — e.g. homeostasis, ecosystem stability.", working: "emergent", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) valid system (b) change propagates (c) feedback regulates (d) emergent property",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Describing parts separately without showing interactions."],
          },
        },
        {
          id: "cils-u9-syn-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does the amount of energy decrease at each trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is destroyed at each level" },
              { id: "b", text: "Most energy is lost as heat, movement and waste" },
              { id: "c", text: "Decomposers absorb all the energy" },
              { id: "d", text: "Predators eat less than plants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy losses", statement: "Energy is conserved but most is lost as heat and waste — only ~10% transfers." },
            ],
            steps: [
              { reasoning: "Energy lost as heat/waste at each level; ~10% passes on.", working: "losses", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Most energy is lost as heat, movement and waste",
            commonErrors: ["Choosing (a) — energy is not destroyed, just transferred/lost as heat."],
          },
        },
        {
          id: "cils-u9-syn-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "If producers hold $20000$ kJ and only $5\\%$ of energy transfers at each level, calculate the energy reaching secondary consumers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Compound transfer", statement: "Apply the transfer percentage at each successive level." },
            ],
            steps: [
              { reasoning: "Level 1: $20000 \\times 0.05 = 1000$ kJ.", working: "20000 \\times 0.05", marks: 1, markCode: "M" },
              { reasoning: "Level 2: $1000 \\times 0.05 = 50$ kJ.", working: "1000 \\times 0.05", marks: 1, markCode: "M" },
              { reasoning: "Secondary consumers receive $50$ kJ.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ kJ",
            commonErrors: ["Using $10\\%$ instead of the stated $5\\%$, or stopping after one transfer."],
          },
        },
        {
          id: "cils-u9-syn-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the human body as an integrated system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Body as system", statement: "Organ systems interact to maintain homeostasis." },
            ],
            steps: [
              { reasoning: "Name interacting systems: digestive, circulatory, respiratory, nervous, etc.", working: "systems", marks: 1, markCode: "M" },
              { reasoning: "Explain interactions maintaining stable internal conditions.", working: "homeostasis", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interacting organ systems maintain homeostasis — e.g. respiratory supplies O₂, circulatory delivers it.",
            commonErrors: ["Listing systems without showing interactions."],
          },
        },
        {
          id: "cils-u9-syn-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which answer best demonstrates systems thinking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explaining how a change in one system affects others" },
              { id: "b", text: "Listing facts about each topic separately" },
              { id: "c", text: "Answering only calculation questions" },
              { id: "d", text: "Memorising definitions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Systems thinking", statement: "Focus on interactions and effects across components." },
            ],
            steps: [
              { reasoning: "Systems thinking = interactions and ripple effects.", working: "interactions", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Explaining how a change in one system affects others",
            commonErrors: ["Choosing isolated facts — systems thinking requires connections."],
          },
        },
        {
          id: "cils-u9-syn-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Temperature readings over five days are $21$, $23$, $22$, $24$, $20$ °C. Calculate the mean temperature.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 22, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum $\\div$ count." },
            ],
            steps: [
              { reasoning: "Sum $= 110$; divide by 5.", working: "110/5", marks: 1, markCode: "M" },
              { reasoning: "Correct mean with unit.", working: "22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$22$ °C",
            commonErrors: ["Arithmetic slip in the sum or forgetting units."],
          },
        },
        {
          id: "cils-u9-syn-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Synthesize your science knowledge across all topics.",
          parts: [
            { label: "a", prompt: "Explain how cells relate to ecosystems.", marks: 2 },
            { label: "b", prompt: "Describe how energy connects all science topics.", marks: 3 },
            { label: "c", prompt: "Explain why systems thinking unifies science.", marks: 2 },
            { label: "d", prompt: "Give an example where biology, chemistry and physics combine.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Hierarchy cells→organisms→ecosystems; energy flows everywhere; systems unify." },
            ],
            steps: [
              { part: "a", reasoning: "Cells make tissues/organs/organisms; organisms form populations, communities, ecosystems.", working: "hierarchy", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Levels linked.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sun→photosynthesis→food chains→respiration→heat — energy links biology and physics; reactions involve chemistry.", working: "energy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple connections.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear synthesis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "All domains are systems of interacting components with feedback — one framework applies everywhere.", working: "unify", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. photosynthesis (light physics + chemistry + biology) or human body (all three).", working: "example", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid integrated example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) hierarchy (b) energy flows all topics (c) systems framework (d) e.g. photosynthesis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple links.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Treating topics in isolation — synthesis requires connections."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u9-integration-notes",
      title: "Integrated science — revision notes",
      summary: "Problem-solving, practical skills, systems thinking.",
      sections: [
        {
          heading: "Integration",
          body: "Photosynthesis↔respiration; enzymes catalyse; body systems coordinate; ecosystems transfer energy.",
        },
        {
          heading: "Practical skills",
          body: "Design fair tests, collect data, analyse trends, evaluate reliability/validity. Systems thinking unifies all science.",
        },
      ],
    },
  ],
};
