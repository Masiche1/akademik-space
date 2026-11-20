import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cils-u9-lesson-9-1",
  code: "9-1",
  title: "Science foundations review",
  goal: "I CAN review working scientifically, cells, classification and basic biology.",
  standards: ["0893 Science: foundations"],
  vocabulary: [
    { term: "Hypothesis", definition: "Testable prediction based on observation." },
    { term: "Control variable", definition: "Variable kept constant to ensure fair test." },
    { term: "Prokaryote", definition: "Cell without nucleus — bacteria." },
    { term: "Eukaryote", definition: "Cell with nucleus — plants, animals, fungi." },
    { term: "Binomial nomenclature", definition: "Two-part scientific name — genus + species." },
    { term: "Homeostasis", definition: "Maintaining stable internal conditions." },
  ],
  concepts: [
    {
      id: "cils-u9-foundations",
      title: "Working scientifically",
      skill: "Review scientific method, variables, measurement and data analysis.",
      lesson: {
        sections: [
          {
            heading: "Scientific method",
            body: "Observation → question → hypothesis → experiment → data → analysis → conclusion. Repeat for reliability.",
          },
          {
            heading: "Variables",
            body: "Independent (what you change), dependent (what you measure), controlled (what you keep same).",
          },
          {
            heading: "Measurement",
            body: "Use appropriate instruments, SI units, estimate uncertainties, repeat readings for accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Method", statement: "Hypothesis→experiment→data→analysis→conclusion; control variables." },
        ],
        workedExample: {
          problem: "How to test if temperature affects reaction rate?",
          solution: "Change temperature (independent), measure rate (dependent), control concentration/volume/catalyst.",
        },
      },
      questions: [
        {
          id: "cils-u9-foun-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testable prediction" },
              { id: "b", text: "Fact" },
              { id: "c", text: "Theory" },
              { id: "d", text: "Opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis", statement: "Testable prediction." },
            ],
            steps: [
              { reasoning: "Hypothesis = testable prediction.", working: "prediction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testable prediction",
            commonErrors: ["Choosing (c) — theory is established, hypothesis is testable."],
          },
        },
        {
          id: "cils-u9-foun-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three types of variables.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Variables", statement: "Independent, dependent, controlled." },
            ],
            steps: [
              { reasoning: "Three types.", working: "variables", marks: 1, markCode: "M" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent, dependent, controlled.",
            commonErrors: ["Missing controlled."],
          },
        },
        {
          id: "cils-u9-foun-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test for plant growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair test", statement: "Control variables, repeat, measure dependent variable." },
            ],
            steps: [
              { reasoning: "Change one variable (e.g. light) — independent.", working: "independent", marks: 1, markCode: "M" },
              { reasoning: "Measure growth (height/biomass) — dependent.", working: "dependent", marks: 1, markCode: "M" },
              { reasoning: "Control: water, soil, temperature, plant type.", working: "controls", marks: 1, markCode: "M" },
              { reasoning: "Design clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change light, measure growth, control water/soil/temp/plant type.",
            commonErrors: ["Changing multiple variables — unfair."],
          },
        },
        {
          id: "cils-u9-foun-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review scientific method.",
          parts: [
            { label: "a", prompt: "Describe scientific method steps.", marks: 3 },
            { label: "b", prompt: "Define variables.", marks: 2 },
            { label: "c", prompt: "How to ensure reliability?", marks: 2 },
            { label: "d", prompt: "How to ensure validity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific method", statement: "Hypothesis→experiment→data→analysis→conclusion; variables; reliability/validity." },
            ],
            steps: [
              { part: "a", reasoning: "Observation→question→hypothesis→experiment→data→analysis→conclusion.", working: "steps", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent (change), dependent (measure), controlled (keep same).", working: "variables", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Repeat trials, consistent results, control variables.", working: "reliability", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Test what intended, appropriate method, accurate measurements.", working: "validity", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) method steps (b) variables (c) repeat/control (d) appropriate method",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Steps correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Reliability vs validity confusion — repeat vs appropriate method."],
          },
        },
      ],
    },
    {
      id: "cils-u9-biology",
      title: "Biology review: cells to ecosystems",
      skill: "Review cell biology, plant/animal systems and ecology.",
      lesson: {
        sections: [
          {
            heading: "Cell biology",
            body: "Prokaryote (no nucleus) vs eukaryote (nucleus). Organelles: nucleus, mitochondria, ribosomes, cell membrane. Specialisation → tissues → organs → systems.",
          },
          {
            heading: "Plant systems",
            body: "Photosynthesis, transport (xylem/phloem), reproduction, tropisms. Leaf structure optimised for light/gas exchange.",
          },
          {
            heading: "Animal systems",
            body: "Digestion, circulation, respiration, nervous, hormonal, reproduction. Homeostasis maintains internal balance.",
          },
        ],
        keyFormulas: [
          { name: "Biology", statement: "Cells→tissues→organs→systems; photosynthesis; homeostasis; ecosystems." },
        ],
        workedExample: {
          problem: "How do cells become specialised?",
          solution: "Gene expression differs — same DNA, different proteins → different cell types/functions.",
        },
      },
      questions: [
        {
          id: "cils-u9-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell type has a nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eukaryote" },
              { id: "b", text: "Prokaryote" },
              { id: "c", text: "Virus" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eukaryote", statement: "Has nucleus — plants, animals, fungi." },
            ],
            steps: [
              { reasoning: "Eukaryote = nucleus.", working: "eukaryote", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Eukaryote",
            commonErrors: ["Choosing (d) — prokaryotes lack nucleus."],
          },
        },
        {
          id: "cils-u9-bio-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is homeostasis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Maintaining stable internal conditions." },
            ],
            steps: [
              { reasoning: "Stable internal environment despite changes.", working: "stable", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maintaining stable internal conditions — temperature, glucose, water.",
            commonErrors: ["Saying 'growing' — that's development, not homeostasis."],
          },
        },
        {
          id: "cils-u9-bio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain cell specialisation with example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specialisation", statement: "Same DNA, different gene expression → different cell types." },
            ],
            steps: [
              { reasoning: "All cells have same DNA but express different genes.", working: "genes", marks: 1, markCode: "M" },
              { reasoning: "Red blood cells: no nucleus, haemoglobin for O₂ transport.", working: "RBC", marks: 1, markCode: "M" },
              { reasoning: "Nerve cells: long fibres for signal transmission.", working: "neurons", marks: 1, markCode: "M" },
              { reasoning: "Specialisation explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same DNA, different genes expressed → specialised cells (RBC, neurons).",
            commonErrors: ["Saying 'different DNA' — same DNA, different expression."],
          },
        },
        {
          id: "cils-u9-bio-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review biology topics.",
          parts: [
            { label: "a", prompt: "Describe cell structure.", marks: 3 },
            { label: "b", prompt: "Explain photosynthesis.", marks: 2 },
            { label: "c", prompt: "Describe human body systems.", marks: 3 },
            { label: "d", prompt: "Explain homeostasis.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biology review", statement: "Cells, photosynthesis, body systems, homeostasis." },
            ],
            steps: [
              { part: "a", reasoning: "Nucleus, mitochondria, ribosomes, membrane — eukaryotic structure.", working: "structure", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂+water→glucose+oxygen using light; chloroplasts; limiting factors.", working: "photosynthesis", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digestive, circulatory, respiratory, nervous, hormonal, reproductive.", working: "systems", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiple correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Stable internal conditions via negative feedback.", working: "homeostasis", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) cell structure (b) photosynthesis (c) body systems (d) homeostasis",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Structure correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple systems.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Cell specialisation ≠ different DNA."],
          },
        },
      ],
    },
    {
      id: "cils-u9-physics",
      title: "Physics review: forces to waves",
      skill: "Review forces, energy, electricity and waves.",
      lesson: {
        sections: [
          {
            heading: "Forces",
            body: "F=ma; weight=mg; pressure=F/A; moment=Fd; density=m/V. Balanced=equilibrium; unbalanced=acceleration.",
          },
          {
            heading: "Energy and electricity",
            body: "Energy conservation; efficiency; V=IR; P=VI; E=Pt. Heat transfer: conduction/convection/radiation.",
          },
          {
            heading: "Waves",
            body: "Sound: longitudinal, needs medium. Light: transverse, EM spectrum. Frequency=pitch; amplitude=loudness.",
          },
        ],
        keyFormulas: [
          { name: "Physics", statement: "F=ma; V=IR; P=VI; energy conservation; wave properties." },
        ],
        workedExample: {
          problem: "Calculate power: 12V, 2A.",
          solution: "P = VI = 12 × 2 = 24 W.",
        },
      },
      questions: [
        {
          id: "cils-u9-phys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = I × R" },
              { id: "b", text: "V = I ÷ R" },
              { id: "c", text: "R = V × I" },
              { id: "d", text: "I = V + R" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = IR." },
            ],
            steps: [
              { reasoning: "V = IR.", working: "IR", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** V = I × R",
            commonErrors: ["Inverting — V=IR."],
          },
        },
        {
          id: "cils-u9-phys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is energy conservation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation", statement: "Energy can't be created/destroyed — only transferred." },
            ],
            steps: [
              { reasoning: "Energy transforms between forms, total constant.", working: "conserved", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy can't be created/destroyed — only transferred between forms.",
            commonErrors: ["Saying 'lost as heat' — still conserved, just wasted."],
          },
        },
        {
          id: "cils-u9-phys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sound and light waves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Waves", statement: "Sound: longitudinal, needs medium; light: transverse, EM, vacuum OK." },
            ],
            steps: [
              { reasoning: "Sound: longitudinal, needs medium, slower.", working: "sound", marks: 1, markCode: "M" },
              { reasoning: "Light: transverse, EM spectrum, vacuum.", working: "light", marks: 1, markCode: "M" },
              { reasoning: "Both transfer energy without matter.", working: "common", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound: longitudinal, needs medium; light: transverse, EM, vacuum OK.",
            commonErrors: ["Both need medium — light doesn't."],
          },
        },
        {
          id: "cils-u9-phys-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review physics topics.",
          parts: [
            { label: "a", prompt: "Describe forces and motion.", marks: 3 },
            { label: "b", prompt: "Explain energy transfer.", marks: 2 },
            { label: "c", prompt: "Describe electricity basics.", marks: 2 },
            { label: "d", prompt: "Explain wave properties.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Physics review", statement: "Forces, energy, electricity, waves." },
            ],
            steps: [
              { part: "a", reasoning: "F=ma, weight=mg, pressure=F/A; balanced/unbalanced forces.", working: "forces", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy transforms but conserved; efficiency measures useful fraction.", working: "energy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "V=IR, P=VI, circuits, series/parallel.", working: "electricity", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sound/light properties; frequency, amplitude, wavelength.", working: "waves", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) forces/motion (b) energy conservation (c) V=IR/P=VI (d) wave properties",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Forces correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Energy 'used up' — it transforms to other forms."],
          },
        },
      ],
    },
    {
      id: "cils-u9-chemistry",
      title: "Chemistry review: matter to reactions",
      skill: "Review states of matter, chemical reactions and acids/bases.",
      lesson: {
        sections: [
          {
            heading: "Matter",
            body: "States: solid/liquid/gas. Particle theory: energy determines arrangement. Phase changes: melting, evaporation, condensation.",
          },
          {
            heading: "Reactions",
            body: "Chemical change: new substance formed. Word equations: reactants→products. Mass conserved — atoms rearrange.",
          },
          {
            heading: "Acids and bases",
            body: "pH<7 acid, >7 alkali, =7 neutral. Indicators: litmus, universal. Neutralisation: acid+alkali→salt+water.",
          },
        ],
        keyFormulas: [
          { name: "Chemistry", statement: "States/particle theory; reactions=reactants→products; pH scale; neutralisation." },
        ],
        workedExample: {
          problem: "Write word equation for neutralisation.",
          solution: "hydrochloric acid + sodium hydroxide → sodium chloride + water.",
        },
      },
      questions: [
        {
          id: "cils-u9-chem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formation of new substance" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Boiling" },
              { id: "d", text: "Dissolving" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical reaction", statement: "New substance formed." },
            ],
            steps: [
              { reasoning: "Chemical change = new substance.", working: "new substance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Formation of new substance",
            commonErrors: ["Choosing (c) — boiling is physical change."],
          },
        },
        {
          id: "cils-u9-chem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is neutralisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "Acid + alkali → salt + water." },
            ],
            steps: [
              { reasoning: "Acid+alkali→salt+water.", working: "reaction", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acid + alkali → salt + water.",
            commonErrors: ["Saying 'mixing' — it's chemical reaction."],
          },
        },
        {
          id: "cils-u9-chem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain particle theory of states of matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Particle theory", statement: "Solid: fixed positions; liquid: slide; gas: free movement." },
            ],
            steps: [
              { reasoning: "Solid: particles tightly packed, vibrate in place.", working: "solid", marks: 1, markCode: "M" },
              { reasoning: "Liquid: close but slide past each other.", working: "liquid", marks: 1, markCode: "M" },
              { reasoning: "Gas: far apart, move freely.", working: "gas", marks: 1, markCode: "M" },
              { reasoning: "Theory explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solid=fixed; liquid=slide; gas=free — particle arrangement determines state.",
            commonErrors: ["Same description for all — different arrangements."],
          },
        },
        {
          id: "cils-u9-chem-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review chemistry topics.",
          parts: [
            { label: "a", prompt: "Describe states of matter.", marks: 2 },
            { label: "b", prompt: "Explain chemical reactions.", marks: 3 },
            { label: "c", prompt: "Describe acids and alkalis.", marks: 2 },
            { label: "d", prompt: "Explain neutralisation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Chemistry review", statement: "States, reactions, acids/bases, neutralisation." },
            ],
            steps: [
              { part: "a", reasoning: "Solid/liquid/gas; particle arrangements differ.", working: "states", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New substance formed; reactants→products; mass conserved.", working: "reactions", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Acid pH<7 sour; alkali pH>7 bitter/soapy.", working: "acids/bases", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Acid+alkali→salt+water; indicators show pH.", working: "neutralisation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) states (b) reactions/mass conserved (c) pH<7/>7 (d) salt+water",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Reactions correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Neutralisation = salt+water, not just mixing."],
          },
        },
      ],
    },
    {
      id: "cils-u9-capstone",
      title: "Science capstone: exam preparation",
      skill: "Apply all science knowledge to exam-style questions and practical assessment.",
      lesson: {
        sections: [
          {
            heading: "Exam strategy",
            body: "Read carefully, show working, use scientific terms, explain mechanisms, check units. For practicals: control variables, repeat, analyse.",
          },
          {
            heading: "Key equations",
            body: "speed=d/t; a=(v-u)/t; F=ma; W=mg; p=F/A; M=Fd; ρ=m/V; V=IR; P=VI; E=Pt.",
          },
          {
            heading: "Time management",
            body: "Answer easier questions first, mark difficult ones, review at end. Don't spend too long on one question.",
          },
        ],
        keyFormulas: [
          { name: "Exam prep", statement: "All equations + scientific method + time management." },
        ],
        workedExample: {
          problem: "How to approach 'explain' questions?",
          solution: "Scientific terms + mechanism + cause-effect link + specific details.",
        },
      },
      questions: [
        {
          id: "cils-u9-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first in an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all questions" },
              { id: "b", text: "Start hardest" },
              { id: "c", text: "Skip reading" },
              { id: "d", text: "Guess everything" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read questions first." },
            ],
            steps: [
              { reasoning: "Read all questions first — plan time.", working: "read", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Starting hardest — wastes time."],
          },
        },
        {
          id: "cils-u9-cap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Read carefully, show working, check units." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "techniques", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Read carefully, show working, check units, use scientific terms, explain mechanisms.",
            commonErrors: ["Only one technique — need multiple."],
          },
        },
        {
          id: "cils-u9-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to answer 'explain' questions effectively?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explain technique", statement: "Scientific terms + mechanism + cause-effect + specifics." },
            ],
            steps: [
              { reasoning: "Use correct scientific terminology.", working: "terms", marks: 1, markCode: "M" },
              { reasoning: "Explain mechanism — how/why it happens.", working: "mechanism", marks: 1, markCode: "M" },
              { reasoning: "Link cause to effect clearly.", working: "link", marks: 1, markCode: "M" },
              { reasoning: "Be specific — avoid vague answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scientific terms + mechanism + cause-effect + specifics.",
            commonErrors: ["Just stating facts — need explanation."],
          },
        },
        {
          id: "cils-u9-cap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for science exam.",
          parts: [
            { label: "a", prompt: "List key equations to remember.", marks: 3 },
            { label: "b", prompt: "Describe exam strategy.", marks: 2 },
            { label: "c", prompt: "How to handle difficult questions?", marks: 2 },
            { label: "d", prompt: "What to do in last 5 minutes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Equations + strategy + time management." },
            ],
            steps: [
              { part: "a", reasoning: "speed=d/t, a=(v-u)/t, F=ma, W=mg, p=F/A, M=Fd, ρ=m/V, V=IR, P=VI, E=Pt.", working: "equations", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Six+ correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read questions, answer easy first, show working, check units.", working: "strategy", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mark it, move on, return later with fresh eyes.", working: "difficult", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Review answers, check units, ensure all questions attempted.", working: "final", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) key equations (b) read/answer/show work (c) mark and return (d) review/check",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Six+ equations.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Spending too long on hard questions — mark and move on."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u9-review-notes",
      title: "Science review — revision notes",
      summary: "All topics recap: foundations, biology, physics, chemistry, exam skills.",
      sections: [
        {
          heading: "Complete syllabus recap",
          body: "Working scientifically → cells → plants → human body → materials → energy → forces → electricity → Earth → ecosystems → integrated → exam skills.",
        },
        {
          heading: "Key equations",
          body: "speed=d/t; a=(v-u)/t; F=ma; W=mg; p=F/A; M=Fd; ρ=m/V; V=IR; P=VI; E=Pt; pH scale; word equations.",
        },
      ],
    },
  ],
};
