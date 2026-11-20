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
              { id: "a", text: "Both involve glucose, CO₂ and oxygen" },
              { id: "b", text: "Both produce oxygen" },
              { id: "c", text: "Both occur only in plants" },
              { id: "d", text: "Both need light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis/respiration", statement: "Both involve glucose, CO₂, oxygen — opposite directions." },
            ],
            steps: [
              { reasoning: "Both use same molecules, opposite directions.", working: "same molecules", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Both involve glucose, CO₂ and oxygen",
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
              { id: "b", text: "All variables changed" },
              { id: "c", text: "No controls" },
              { id: "d", text: "Random results" },
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
              { id: "a", text: "Matter, energy and life" },
              { id: "b", text: "Only chemistry" },
              { id: "c", text: "Only physics" },
              { id: "d", text: "Only biology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Science unity", statement: "Matter, energy, life — interconnected." },
            ],
            steps: [
              { reasoning: "All science studies these.", working: "unified", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Matter, energy and life",
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
