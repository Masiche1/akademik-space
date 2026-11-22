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
              { id: "a", text: "'Gravity pulls objects toward Earth'" },
              { id: "b", text: "'Water is made of hydrogen and oxygen'" },
              { id: "c", text: "'Plants given fertiliser will grow taller'" },
              { id: "d", text: "'I measured the mass as 50 g'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis", statement: "A testable prediction, not yet proven." },
            ],
            steps: [
              { reasoning: "(a) is a prediction that can be tested; (b) is established fact, (c) is a law, (d) is an observation.", working: "testable prediction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Plants given fertiliser will grow taller'",
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
        {
          id: "cils-u1-nature-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is a scientific fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants will always grow best in sunlight" },
              { id: "b", text: "Water freezes at 0 °C at sea level" },
              { id: "c", text: "I think bacteria cause colds" },
              { id: "d", text: "We should test more fertilisers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fact", statement: "An observation verified repeatedly." }],
            steps: [{ reasoning: "Freezing point is repeatedly observed and verified.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Water freezes at 0 °C at sea level",
          },
        },
        {
          id: "cils-u1-nature-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A researcher repeats an experiment three times and obtains 8, 9 and 8 bubbles per minute. Enter the mean number of bubbles per minute.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 8.33, tolerance: 0.01, unit: "bubbles/min" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum of values divided by number of values." }],
            steps: [{ reasoning: "$(8+9+8)\\div 3 = 8.33$.", marks: 1, markCode: "A" }],
            finalAnswer: "$8.33$ bubbles/min",
          },
        },
        {
          id: "cils-u1-nature-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a scientific hypothesis must be testable.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hypothesis", statement: "A prediction that can be investigated by observation or experiment." }],
            steps: [
              { reasoning: "Testable hypotheses can be checked against evidence.", marks: 1, markCode: "M" },
              { reasoning: "This allows evidence to support or reject the prediction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A testable hypothesis can be investigated, so evidence can support or reject it.",
          },
        },
        {
          id: "cils-u1-nature-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes peer review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Students repeat every experiment" },
              { id: "b", text: "Results are hidden from other scientists" },
              { id: "c", text: "Experts check research before publication" },
              { id: "d", text: "A theory becomes a law automatically" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Peer review", statement: "Evaluation of research by independent experts." }],
            steps: [{ reasoning: "Peer review uses expert checking to improve reliability.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Experts check research before publication",
          },
        },
        {
          id: "cils-u1-nature-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Four teams record the same measurement as 4.9, 5.0, 5.1 and 5.0 cm. Enter the mean measurement in cm.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 5, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = total divided by count." }],
            steps: [{ reasoning: "$(4.9+5.0+5.1+5.0)\\div 4 = 5.0$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$5.0$ cm",
          },
        },
        {
          id: "cils-u1-nature-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A theory is sometimes described as 'only a theory'. Explain why this understates scientific theories.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Scientific theory", statement: "A theory is a well-tested explanatory framework, not a guess." }],
            steps: [
              { reasoning: "Scientific theories are supported by many independent lines of evidence.", marks: 1, markCode: "M" },
              { reasoning: "They make predictions that can be tested and have survived testing.", marks: 1, markCode: "M" },
              { reasoning: "Calling one 'only a theory' confuses everyday and scientific meanings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scientific theories are extensively tested explanations, not unsupported guesses.",
          },
        },
        {
          id: "cils-u1-nature-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage comes immediately after forming a hypothesis in the scientific method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testing the hypothesis" },
              { id: "b", text: "Publishing the conclusion" },
              { id: "c", text: "Changing the law" },
              { id: "d", text: "Ignoring the data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Scientific method", statement: "Observe, hypothesise, test, analyse, conclude, communicate." }],
            steps: [{ reasoning: "After a hypothesis, scientists design a test.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Testing the hypothesis",
          },
        },
        {
          id: "cils-u1-nature-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scientist measures a reaction time five times: 0.20, 0.22, 0.21, 0.20 and 0.22 s. Enter the mean time in s.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 0.21, unit: "s" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(0.20+0.22+0.21+0.20+0.22)\\div 5 = 0.21$ s.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.21$ s",
          },
        },
        {
          id: "cils-u1-nature-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "New evidence shows that an old explanation was incomplete. What does this demonstrate about science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All old ideas are wrong" },
              { id: "b", text: "Scientific knowledge can be revised" },
              { id: "c", text: "Experiments are unnecessary" },
              { id: "d", text: "Science never changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Provisional knowledge", statement: "Scientific explanations improve when better evidence appears." }],
            steps: [{ reasoning: "Revision is a normal feature of scientific progress.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Scientific knowledge can be revised",
          },
        },
        {
          id: "cils-u1-nature-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Three repeats give distances of 11, 12 and 13 cm. A fourth gives 35 cm. Enter the mean using only the first three consistent results.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 12, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Selecting data", statement: "Investigate anomalies before deciding whether to include them." }],
            steps: [{ reasoning: "$(11+12+13)\\div 3 = 12$ cm; 35 cm is anomalous.", marks: 1, markCode: "A" }],
            finalAnswer: "$12$ cm",
          },
        },
        {
          id: "cils-u1-nature-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why repeating an experiment can strengthen a scientific conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Replication", statement: "Repeated trials show whether a result is consistent or due to chance." }],
            steps: [
              { reasoning: "Repeats reveal whether results are consistent.", marks: 1, markCode: "M" },
              { reasoning: "Consistent results make the conclusion more reliable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeats show consistency and reduce the chance that a result was accidental.",
          },
        },
        {
          id: "cils-u1-nature-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student says, 'One experiment that supports a hypothesis proves the hypothesis is correct.' Explain why this statement is incorrect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluation", statement: "Evidence from a single investigation may be limited, biased or affected by chance." }],
            steps: [
              { reasoning: "A single experiment may have limitations, errors or uncontrolled variables.", marks: 1, markCode: "M" },
              { reasoning: "Conclusions become stronger when independent evidence and repeated tests support the hypothesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One experiment gives limited evidence; conclusions are more secure when results are repeated and supported by other evidence.",
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
              { id: "a", text: "Control variable" },
              { id: "b", text: "Independent variable" },
              { id: "c", text: "Constant" },
              { id: "d", text: "Dependent variable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent variable", statement: "The measured outcome that responds to changes." },
            ],
            steps: [
              { reasoning: "Height is measured — it depends on fertiliser amount.", working: "dependent", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Dependent variable",
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
        {
          id: "cils-u1-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a test of how light affects seedling height, what is the independent variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil type" },
              { id: "b", text: "Pot size" },
              { id: "c", text: "Seedling height" },
              { id: "d", text: "Amount of light" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Independent variable", statement: "The factor deliberately changed by the investigator." }],
            steps: [{ reasoning: "Light is the factor being varied.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Amount of light",
          },
        },
        {
          id: "cils-u1-ev-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plant heights are 12, 14, 13 and 15 cm. Enter the mean height in cm.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 13.5, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(12+14+13+15)\\div 4 = 13.5$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$13.5$ cm",
          },
        },
        {
          id: "cils-u1-ev-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why controlled variables are needed in an investigation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fair test", statement: "Only the independent variable should differ between groups." }],
            steps: [
              { reasoning: "Controls stop other factors from affecting the result.", marks: 1, markCode: "M" },
              { reasoning: "This allows the effect of the changed variable to be identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Controlled variables ensure that only the tested factor causes the difference in results.",
          },
        },
        {
          id: "cils-u1-ev-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which variable is measured as the outcome in an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Controlled variable" },
              { id: "b", text: "Dependent variable" },
              { id: "c", text: "Constant variable" },
              { id: "d", text: "Independent variable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dependent variable", statement: "The measured response that may depend on the independent variable." }],
            steps: [{ reasoning: "The outcome being measured is dependent.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Dependent variable",
          },
        },
        {
          id: "cils-u1-ev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A seedling grows from 8 cm to 14 cm. Enter the percentage increase in height.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 75, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage change", statement: "Percentage increase = change divided by original × 100." }],
            steps: [{ reasoning: "$(14-8)\\div 8 \\times 100 = 75\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$75\\%$",
          },
        },
        {
          id: "cils-u1-ev-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how you would make a test of fertiliser type fair.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fair test", statement: "Change only fertiliser type and keep all other conditions the same." }],
            steps: [
              { reasoning: "Use the same plant species, age, pot size and soil.", marks: 1, markCode: "M" },
              { reasoning: "Give all plants the same water, light and temperature.", marks: 1, markCode: "M" },
              { reasoning: "Measure the same outcome, such as height, after the same time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Keep all conditions identical except fertiliser type, then measure growth for the same period.",
          },
        },
        {
          id: "cils-u1-ev-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor should be kept constant in a dissolving-time experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stirring method" },
              { id: "b", text: "Mass of sugar" },
              { id: "c", text: "Water temperature" },
              { id: "d", text: "Volume of water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Controlled variable", statement: "All factors except the independent variable should be controlled." }],
            steps: [{ reasoning: "If temperature is the variable being tested, it is not controlled; the others can be.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Water temperature",
          },
        },
        {
          id: "cils-u1-ev-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dissolving times are 30, 34 and 32 s. Enter the range of the results in s.",
          response: { type: "numeric", parts: [{ label: "Range", answer: 4, unit: "s" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Range", statement: "Range = largest value minus smallest value." }],
            steps: [{ reasoning: "$34-30 = 4$ s.", marks: 1, markCode: "A" }],
            finalAnswer: "$4$ s",
          },
        },
        {
          id: "cils-u1-ev-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should an investigation be repeated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check whether results are consistent" },
              { id: "b", text: "To remove all anomalies" },
              { id: "c", text: "To change the hypothesis" },
              { id: "d", text: "To make the experiment shorter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Reliability", statement: "Repeats improve confidence that results are reliable." }],
            steps: [{ reasoning: "Repeated trials test consistency and reliability.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** To check whether results are consistent",
          },
        },
        {
          id: "cils-u1-ev-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Five measurements are 2, 4, 3, 5 and 6 cm. Enter the number of measurements that are greater than 3 cm.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Data counting", statement: "Count values satisfying the stated condition." }],
            steps: [{ reasoning: "Values greater than 3 are 4, 5 and 6: three values.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u1-ev-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two plant groups receive different fertiliser but also different amounts of water. Explain why the test is unfair.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Confounding variable", statement: "If two factors differ, the cause of the result is unclear." }],
            steps: [
              { reasoning: "Fertiliser and water both differ between the groups.", marks: 1, markCode: "M" },
              { reasoning: "Growth could be caused by either factor or both together.", marks: 1, markCode: "M" },
              { reasoning: "A fair test would keep water the same and change only fertiliser.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The test is unfair because water is uncontrolled, so fertiliser is not the only possible cause.",
          },
        },
        {
          id: "cils-u1-ev-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best example of a controlled variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different measurement times" },
              { id: "b", text: "Same amount of water for every plant" },
              { id: "c", text: "Different light levels for each plant" },
              { id: "d", text: "Different fertilisers for each plant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Controlled variable", statement: "A factor kept constant so it does not affect the result." }],
            steps: [{ reasoning: "Keeping water constant controls a possible effect.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Same amount of water for every plant",
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
