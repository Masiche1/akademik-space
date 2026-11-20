import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cils-u1-lesson-1-1",
  code: "1-1",
  title: "The nature of science",
  goal: "I CAN explain what science is, how scientific knowledge develops, and why evidence matters.",
  standards: ["0893 Working scientifically: nature of science"],
  vocabulary: [
    { term: "Science", definition: "Systematic study of the natural world through observation and experiment." },
    { term: "Hypothesis", definition: "A testable prediction about how something works." },
    { term: "Theory", definition: "A well-tested explanation supported by lots of evidence." },
    { term: "Law", definition: "A statement describing what always happens under certain conditions." },
    { term: "Fact", definition: "An observation that has been verified repeatedly." },
    { term: "Peer review", definition: "Checking scientists' work by other experts before publication." },
  ],
  concepts: [
    {
      id: "cils-u1-nature",
      title: "How science works",
      skill: "Distinguish facts, laws, theories and hypotheses; explain how scientific knowledge grows.",
      lesson: {
        sections: [
          {
            heading: "Science as a process",
            body: "Science is not just facts — it's a method: observe → ask questions → hypothesise → test → analyse → communicate. Knowledge is provisional: new evidence can change what we think we know.",
          },
          {
            heading: "Fact vs law vs theory vs hypothesis",
            body: "- **Fact**: directly observed (water boils at 100°C at sea level)\n- **Law**: describes patterns (Newton's laws of motion)\n- **Theory**: explains why (germ theory of disease)\n- **Hypothesis**: a guess to test ('plants grow faster with more light')",
          },
          {
            heading: "Why science changes",
            body: "New tools, better measurements and unexpected results can revise old ideas — e.g. we once thought the Earth was flat. Science is self-correcting through peer review and replication.",
          },
        ],
        keyFormulas: [
          { name: "Scientific method", statement: "Observe → hypothesise → experiment → analyse → conclude → communicate." },
        ],
        workedExample: {
          problem: "'All swans are white' was once accepted. A black swan was found in Australia. What does this show about scientific knowledge?",
          solution: "One counterexample disproved the generalisation — scientific claims must be testable and open to revision.",
        },
      },
      questions: [
        {
          id: "cils-u1-nature-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Plants given fertiliser will grow taller'" },
              { id: "b", text: "'Water is made of hydrogen and oxygen'" },
              { id: "c", text: "'Gravity pulls objects toward Earth'" },
              { id: "d", text: "'I measured the mass as 50 g'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis", statement: "A testable prediction, not yet proven." },
            ],
            steps: [
              { reasoning: "(a) is a prediction that can be tested; (b) is established fact, (c) is a law, (d) is an observation.", working: "testable prediction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'Plants given fertiliser will grow taller'",
            commonErrors: ["Choosing (c) — a law describes what happens, not a prediction to test."],
          },
        },
        {
          id: "cils-u1-nature-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between a scientific law and a scientific theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Law vs theory", statement: "Law describes WHAT happens; theory explains WHY." },
            ],
            steps: [
              { reasoning: "Law: describes observed pattern (e.g. gravity pulls masses together).", working: "describes", marks: 1, markCode: "M" },
              { reasoning: "Theory: explains the mechanism (e.g. general relativity explains gravity).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A law describes what always happens; a theory explains why it happens.",
            commonErrors: ["Thinking theories are 'unproven laws' — theories are strongly supported explanations."],
          },
        },
        {
          id: "cils-u1-nature-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims 'scientific facts never change, so science is boring.' Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nature of science", statement: "Scientific knowledge is provisional and improves — that's a strength, not boredom." },
            ],
            steps: [
              { reasoning: "Some facts are stable (elements, basic measurements) but explanations evolve.", working: "provisional", marks: 1, markCode: "M" },
              { reasoning: "New evidence and technology drive revision — e.g. atomic model refined over time.", working: "new evidence", marks: 1, markCode: "M" },
              { reasoning: "Self-correction via peer review makes science reliable AND dynamic.", working: "peer review", marks: 1, markCode: "M" },
              { reasoning: "Evaluated claim with reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Partly true — core facts are stable, but scientific understanding evolves with new evidence; this makes science dynamic, not boring.",
            commonErrors: ["Agreeing completely — ignores how scientific understanding has changed."],
          },
        },
        {
          id: "cils-u1-nature-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the statement: 'Evolution is just a theory, so it might not be true.'",
          parts: [
            { label: "a", prompt: "Explain what 'theory' means in science.", marks: 2 },
            { label: "b", prompt: "Distinguish scientific theory from everyday 'theory' (a guess).", marks: 2 },
            { label: "c", prompt: "Give evidence supporting evolution as a scientific theory.", marks: 3 },
            { label: "d", prompt: "Evaluate whether the statement misunderstands science.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theory vs guess", statement: "Scientific theories are extensively tested explanations, not mere guesses." },
            ],
            steps: [
              { part: "a", reasoning: "Theory = well-supported explanation backed by extensive evidence.", working: "well-supported", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear definition.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Everyday theory = untested idea; scientific theory = tested, peer-reviewed, predictive.", working: "tested vs untested", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Distinction clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence: fossils, DNA similarities, observed speciation, antibiotic resistance.", working: "fossils, DNA", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiple lines of evidence given.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evidence accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Statement misunderstands — 'theory' in science means strongly supported, not uncertain.", working: "misunderstanding", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) theory = tested explanation (b) vs everyday guess (c) fossils, DNA, observed changes (d) statement misunderstands scientific 'theory'",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Definition correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Distinction clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Evidence given.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Evaluated.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["Treating 'theory' as 'guess' — the everyday meaning differs from scientific."],
          },
        },
      ],
    },
    {
      id: "cils-u1-evidence",
      title: "Evidence and variables",
      skill: "Identify variables in investigations and explain why controls matter.",
      lesson: {
        sections: [
          {
            heading: "Variables",
            body: "- **Independent**: what you change (e.g. amount of fertiliser)\n- **Dependent**: what you measure (e.g. plant height)\n- **Controlled**: kept the same (e.g. light, water, pot size)",
          },
          {
            heading: "Why controls matter",
            body: "Without controlling other variables, you can't tell what caused the change. If plant A gets more fertiliser AND more light, you can't isolate the fertiliser effect.",
          },
          {
            heading: "Fair tests",
            body: "A fair test changes only ONE variable. Repeat trials improve reliability — one result could be a fluke.",
          },
        ],
        keyFormulas: [
          { name: "Variables", statement: "Independent = changed; dependent = measured; controlled = kept constant." },
        ],
        workedExample: {
          problem: "Testing whether salt affects ice melting: you put salt on ice in a warm room and plain ice in a cold room. What's wrong?",
          solution: "Temperature is uncontrolled — the warm room could melt ice faster regardless of salt. Fair test needs same temperature.",
        },
      },
      questions: [
        {
          id: "cils-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment testing fertiliser on plant growth, the plant height is the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dependent variable" },
              { id: "b", text: "Independent variable" },
              { id: "c", text: "Control variable" },
              { id: "d", text: "Constant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent variable", statement: "The measured outcome that responds to changes." },
            ],
            steps: [
              { reasoning: "Height is measured — it depends on fertiliser amount.", working: "dependent", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Dependent variable",
            commonErrors: ["Choosing (b) — fertiliser amount is independent, not height."],
          },
        },
        {
          id: "cils-u1-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should experiments be repeated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reliability", statement: "Repeats reduce effect of anomalies and show if result is consistent." },
            ],
            steps: [
              { reasoning: "Single results may be flukes or errors.", working: "flukes", marks: 1, markCode: "M" },
              { reasoning: "Repeats show consistency → reliable conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeats improve reliability — show whether results are consistent or due to chance.",
            commonErrors: ["Saying 'to get more data' without explaining reliability."],
          },
        },
        {
          id: "cils-u1-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests paper airplane distance: plane A has larger wings, plane B is lighter. A flies 12 m, B flies 15 m. Can we conclude lighter planes fly further? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variables", statement: "Two variables changed — can't isolate cause; need controlled comparison." },
            ],
            steps: [
              { reasoning: "Wingspan AND weight differ — two variables changed.", working: "two variables", marks: 1, markCode: "M" },
              { reasoning: "Can't tell whether weight or wingspan caused distance difference.", working: "can't isolate", marks: 1, markCode: "M" },
              { reasoning: "Need to test one variable at a time with others controlled.", working: "fair test", marks: 1, markCode: "M" },
              { reasoning: "Clear evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — two variables changed; can't isolate whether weight or wingspan caused the difference. Need fair test.",
            commonErrors: ["Concluding weight is the cause — confounded variables."],
          },
        },
        {
          id: "cils-u1-ev-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design a fair test: Does water temperature affect how fast sugar dissolves?",
          parts: [
            { label: "a", prompt: "State the independent variable.", marks: 1 },
            { label: "b", prompt: "State the dependent variable.", marks: 1 },
            { label: "c", prompt: "List three variables to control.", marks: 3 },
            { label: "d", prompt: "Describe how you would make the test fair and reliable.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Experimental design", statement: "One variable changed; others controlled; repeats for reliability." },
            ],
            steps: [
              { part: "a", reasoning: "Water temperature.", working: "temperature", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Time taken to dissolve (or rate of dissolving).", working: "time/rate", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sugar amount, water volume, stirring, container shape.", working: "controls", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Three valid controls.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use same sugar amount, water volume, stir same way; vary only temperature.", working: "one variable", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Repeat each temperature 3 times; measure carefully.", working: "repeats", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reliable method.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete design.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temperature (b) dissolving time (c) sugar amount, water volume, stirring (d) control all but temperature, repeat trials",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "2-3", descriptor: "Controls listed.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Few/invalid.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Fair + reliable.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Changing multiple variables — must isolate temperature only."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u1-nature-science-notes",
      title: "Nature of science — revision notes",
      summary: "Scientific method, fact/law/theory/hypothesis, variables and fair tests.",
      sections: [
        {
          heading: "Science",
          body: "Systematic, evidence-based, self-correcting. Facts observed; laws describe; theories explain; hypotheses predict. Peer review and replication build reliability.",
        },
        {
          heading: "Investigations",
          body: "Independent = changed; dependent = measured; controlled = constant. Fair test = one variable. Repeat trials for reliability.",
        },
      ],
    },
  ],
};
