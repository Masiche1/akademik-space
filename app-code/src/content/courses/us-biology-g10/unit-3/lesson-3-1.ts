import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "bio10-u3-lesson-3-1",
  code: "3-1",
  title: "Photosynthesis",
  goal: "I CAN describe the light-dependent and light-independent reactions of photosynthesis and write the overall equation.",
  standards: ["HS-LS1-5", "HS-LS1-6", "HS-LS2-3"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Process converting light energy, CO2 and water into glucose and oxygen." },
    { term: "Chlorophyll", definition: "Green pigment in chloroplasts that absorbs light (mainly red and blue)." },
    { term: "Light-dependent reactions", definition: "Reactions in thylakoid membranes producing ATP and NADPH using light." },
    { term: "Calvin cycle", definition: "Light-independent reactions in stroma fixing CO2 into glucose using ATP and NADPH." },
    { term: "Stomata", definition: "Pores in leaf epidermis allowing CO2 entry and O2/water exit." },
    { term: "Photolysis", definition: "Splitting of water molecules by light, releasing O2, H+ and electrons." },
    { term: "Rubisco", definition: "Enzyme catalyzing CO2 fixation in the Calvin cycle." },
  ],
  concepts: [
    {
      id: "bio10-u3-photosynthesis-basics",
      title: "Photosynthesis overview",
      skill: "Write the photosynthesis equation and locate the reactions in the chloroplast.",
      lesson: {
        sections: [
          {
            heading: "Overall equation",
            body: "$$6CO_2 + 6H_2O + \\text{light energy} \\rightarrow C_6H_{12}O_6 + 6O_2$$\n\nPhotosynthesis converts light energy into chemical energy stored in glucose. It occurs in chloroplasts of plants, algae and some bacteria.",
          },
          {
            heading: "Two stages",
            body: "1. **Light-dependent reactions** (thylakoid membranes): light splits water (photolysis), producing ATP, NADPH and O2.\n2. **Calvin cycle** (stroma): ATP and NADPH power CO2 fixation into glucose — no light needed directly.",
          },
          {
            heading: "Chloroplast structure",
            body: "- **Thylakoids**: flattened sacs containing chlorophyll; stacked into grana\n- **Stroma**: fluid surrounding thylakoids where Calvin cycle occurs\n- **Chlorophyll**: absorbs red/blue light, reflects green (why plants look green)",
          },
        ],
        keyFormulas: [
          { name: "Overall equation", statement: "$6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$" },
          { name: "Stages", statement: "Light reactions (thylakoid) → Calvin cycle (stroma)" },
        ],
        workedExample: {
          problem: "Where in the chloroplast do the light-dependent reactions and Calvin cycle occur?",
          solution: "Light-dependent reactions occur in the thylakoid membranes; the Calvin cycle occurs in the stroma (fluid outside thylakoids).",
        },
      },
      questions: [
        {
          id: "bio10-u3-photosynthesis-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the overall equation for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$" },
              { id: "b", text: "$6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$" },
              { id: "c", text: "$6CO_2 + 6O_2 \\rightarrow C_6H_{12}O_6 + 6H_2O$" },
              { id: "d", text: "$C_6H_{12}O_6 + 6O_2 + light \\rightarrow 6CO_2 + 6H_2O$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Photosynthesis", statement: "$6CO_2 + 6H_2O + light \\rightarrow glucose + O_2$." }],
            steps: [{ reasoning: "Photosynthesis uses CO2 and water with light to make glucose and oxygen.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$",
            commonErrors: ["Reversing the equation (confusing with respiration)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-photosynthesis-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Where do the light-dependent reactions and Calvin cycle occur in the chloroplast?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thylakoid", statement: "Light reactions in thylakoid membranes." },
              { kind: "principle", name: "Stroma", statement: "Calvin cycle in stroma." },
            ],
            steps: [
              { reasoning: "Light-dependent reactions occur in the thylakoid membranes.", marks: 1, markCode: "B" },
              { reasoning: "Calvin cycle occurs in the stroma.", marks: 1, markCode: "B" },
              { reasoning: "Thylakoids contain chlorophyll for light capture; stroma has enzymes for CO2 fixation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Light reactions: thylakoid; Calvin cycle: stroma.",
            commonErrors: ["Reversing the locations."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u3-photosynthesis-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why oxygen produced during photosynthesis comes from water, not carbon dioxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photolysis", statement: "Light splits water molecules, releasing O2." },
              { kind: "principle", name: "Isotope evidence", statement: "O18 labeling proved O2 comes from H2O." },
            ],
            steps: [
              { reasoning: "During light-dependent reactions, water is split (photolysis) releasing O2, H+ and electrons.", marks: 1, markCode: "R" },
              { reasoning: "CO2 provides carbon for glucose but its oxygen atoms end up in glucose and water, not O2.", marks: 1, markCode: "B" },
              { reasoning: "Isotope experiments (using O18) confirmed the O2 originates from water.", marks: 1, markCode: "B" },
              { reasoning: "This was proven by Samuel Ruben and Martin Kamen in the 1940s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O2 comes from photolysis of water, confirmed by isotope labeling.",
            commonErrors: ["Thinking CO2 provides the oxygen gas."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u3-photosynthesis-basics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A plant is placed in a sealed container with light, CO2 and water.",
          parts: [
            { label: "a", prompt: "Write the overall photosynthesis equation.", marks: 2 },
            { label: "b", prompt: "Identify the two stages and where each occurs.", marks: 3 },
            { label: "c", prompt: "What are the products of the light-dependent reactions?", marks: 2 },
            { label: "d", prompt: "If light is turned off, which stage stops immediately and which continues briefly? Explain.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis", statement: "$6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$" },
              { kind: "principle", name: "Light dependence", statement: "Light reactions need light; Calvin cycle uses stored ATP/NADPH." },
            ],
            steps: [
              { reasoning: "$6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Light-dependent reactions: thylakoid membranes.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Calvin cycle: stroma (fluid surrounding thylakoids, containing rubisco and other enzymes).", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Light-dependent produce ATP, NADPH and O2.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "Light-dependent reactions stop immediately (no light).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Calvin cycle continues briefly using remaining ATP/NADPH, then stops when depleted.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Calvin cycle doesn't need light directly, only ATP and NADPH.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) equation (b) thylakoid + stroma (c) ATP, NADPH, O2 (d) light reactions stop, Calvin continues briefly.",
            commonErrors: ["Thinking Calvin cycle needs light."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u3-photosynthesis-mechanism",
      title: "Light reactions and Calvin cycle",
      skill: "Describe the electron transport chain, chemiosmosis, and carbon fixation in detail.",
      lesson: {
        sections: [
          {
            heading: "Light-dependent reactions",
            body: "In thylakoid membranes:\n1. Chlorophyll absorbs light, exciting electrons\n2. Water is split (photolysis): $H_2O \\rightarrow 2H^+ + 2e^- + \\frac{1}{2}O_2$\n3. Electrons flow through electron transport chain, pumping H+ into thylakoid lumen\n4. H+ flows back through ATP synthase → ATP (chemiosmosis)\n5. NADP+ is reduced to NADPH",
          },
          {
            heading: "Calvin cycle",
            body: "In stroma, three phases:\n1. **Carbon fixation**: CO2 + RuBP → 3-PGA (catalyzed by rubisco)\n2. **Reduction**: 3-PGA → G3P using ATP and NADPH\n3. **Regeneration**: RuBP regenerated; some G3P exits to make glucose\n\nNet: 3 CO2 + 9 ATP + 6 NADPH → 1 G3P (needs 2 G3P for glucose).",
          },
          {
            heading: "Factors affecting rate",
            body: "Rate limited by: light intensity, CO2 concentration, temperature (enzyme activity). At low light, rate increases with light; at high light, other factors become limiting.",
          },
        ],
        keyFormulas: [
          { name: "Photolysis", statement: "$H_2O \\rightarrow 2H^+ + 2e^- + \\frac{1}{2}O_2$" },
          { name: "Calvin cycle", statement: "3 CO2 + 9 ATP + 6 NADPH → 1 G3P" },
        ],
        workedExample: {
          problem: "How many CO2 molecules are needed to produce one glucose molecule in the Calvin cycle?",
          solution: "Each turn fixes 1 CO2 and produces 1 G3P. Glucose needs 2 G3P, so 6 turns → 6 CO2 per glucose. This matches the overall equation.",
        },
      },
      questions: [
        {
          id: "bio10-u3-photosynthesis-mechanism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is photolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breaking down glucose" },
              { id: "b", text: "Splitting water molecules using light energy" },
              { id: "c", text: "Fixing CO2 into sugar" },
              { id: "d", text: "Converting light to heat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Photolysis", statement: "Light splits water: $H_2O \\rightarrow 2H^+ + 2e^- + \\frac{1}{2}O_2$." }],
            steps: [{ reasoning: "Photolysis is the light-driven splitting of water.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Splitting water with light",
            commonErrors: ["Confusing with Calvin cycle."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-photosynthesis-mechanism-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is chemiosmosis and how does it produce ATP in photosynthesis?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Chemiosmosis", statement: "H+ gradient drives ATP synthesis through ATP synthase." }],
            steps: [
              { reasoning: "Electron transport chain pumps H+ from stroma into thylakoid lumen.", marks: 1, markCode: "B" },
              { reasoning: "This creates a proton gradient (higher H+ in lumen).", marks: 1, markCode: "R" },
              { reasoning: "H+ flows back through ATP synthase, driving ATP production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proton gradient powers ATP synthase.",
            commonErrors: ["Thinking light directly makes ATP."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u3-photosynthesis-mechanism-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Calvin cycle is called the 'light-independent' reactions even though it depends on light indirectly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Calvin cycle", statement: "Uses ATP and NADPH from light reactions." },
              { kind: "principle", name: "Indirect dependence", statement: "Needs products of light reactions but not light itself." },
            ],
            steps: [
              { reasoning: "Calvin cycle enzymes don't require light directly.", marks: 1, markCode: "B" },
              { reasoning: "It uses ATP and NADPH produced by light-dependent reactions.", marks: 1, markCode: "R" },
              { reasoning: "If light stops, ATP/NADPH deplete and cycle stops — indirect dependence.", marks: 1, markCode: "B" },
              { reasoning: "In vitro experiments showed Calvin cycle can run with artificial ATP/NADPH without light.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No direct light needed; depends on ATP/NADPH from light reactions.",
            commonErrors: ["Thinking Calvin cycle is independent of light entirely."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u3-photosynthesis-mechanism-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "During photosynthesis, the light-dependent reactions produce ATP, NADPH and O2.",
          parts: [
            { label: "a", prompt: "Write the equation for photolysis.", marks: 2 },
            { label: "b", prompt: "Explain how the electron transport chain creates a proton gradient.", marks: 3 },
            { label: "c", prompt: "How does ATP synthase use this gradient?", marks: 2 },
            { label: "d", prompt: "In the Calvin cycle, what happens to the CO2 and what is the final product?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photolysis", statement: "$H_2O \\rightarrow 2H^+ + 2e^- + \\frac{1}{2}O_2$" },
              { kind: "principle", name: "Chemiosmosis", statement: "Proton gradient drives ATP synthesis." },
            ],
            steps: [
              { reasoning: "$H_2O \\rightarrow 2H^+ + 2e^- + \\frac{1}{2}O_2$.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Excited electrons from chlorophyll enter transport chain.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Energy released pumps H+ from stroma into thylakoid lumen.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Lumen H+ concentration rises, creating electrochemical gradient.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "H+ flows back through ATP synthase down gradient.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Flow drives phosphorylation of ADP to ATP.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "CO2 is fixed onto RuBP by rubisco forming 3-PGA.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "3-PGA is reduced to G3P using ATP and NADPH.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Two G3P combine to form glucose; RuBP is regenerated.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) photolysis equation (b) ETC pumps H+ (c) ATP synthase uses gradient (d) CO2→3-PGA→G3P→glucose.",
            commonErrors: ["Forgetting NADPH role in Calvin cycle."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
