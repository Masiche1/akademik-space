import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "pypsc-u3-lesson-3-3",
  code: "3-3",
  title: "Being a Scientist",
  goal: "I CAN observe, predict, test fairly and record results like a scientist.",
  standards: [
    "PYP Science: Science inquiry skills",
    "PYP transdisciplinary theme: How the World Works",
    "PYP transdisciplinary theme: How We Express Ourselves",
  ],
  vocabulary: [
    { term: "Observation", definition: "Using your senses to notice details — what you see, hear, smell, feel." },
    { term: "Prediction", definition: "A guess about what will happen, based on what you already know." },
    { term: "Hypothesis", definition: "A testable 'I think...' statement that a scientist tests." },
    { term: "Variable", definition: "Something that can change in an experiment — the thing you test." },
    { term: "Fair test", definition: "An experiment where only one thing changes so the result is trustworthy." },
    { term: "Conclusion", definition: "What you learned from the experiment — did your prediction come true?" },
  ],
  concepts: [
    {
      id: "pypsc-u3l3-c1-observing-predicting",
      title: "Observing and predicting",
      skill: "Make careful observations and testable predictions.",
      lesson: {
        sections: [
          {
            heading: "Observation",
            body: "Scientists **observe** carefully — they use all their senses and look for details others miss. A good observation is **accurate** (exactly what you see) and **objective** (facts, not opinions). 'The leaf is green and has 5 points' is an observation; 'the leaf is pretty' is an opinion. Observations are the evidence scientists use.",
          },
          {
            heading: "Prediction and hypothesis",
            body: "A **prediction** guesses what will happen: 'I think the ice will melt faster in the sun.' A **hypothesis** is a testable version: 'If ice is placed in sunlight, it will melt faster than ice in shade.' A good hypothesis can be **tested** — you can do an experiment to check if it is true or false.",
          },
        ],
        keyFormulas: [
          { name: "Observation vs opinion", statement: "Observation = fact you can check; opinion = what you think/feel" },
          { name: "Hypothesis format", statement: "'If [variable] then [expected result]'" },
        ],
        workedExample: {
          problem: "Turn this opinion into an observation: 'The flower smells nice.'",
          solution: "Observation: 'The flower smells sweet and floral' — describes what you actually smell, not whether it is 'nice'.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an OBSERVATION rather than an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like the flower" },
              { id: "b", text: "The flower is my favourite" },
              { id: "c", text: "The flower is beautiful" },
              { id: "d", text: "The flower has 5 petals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Observation", statement: "An observation is a factual detail you can verify; opinions are feelings." },
            ],
            steps: [
              { reasoning: "'5 petals' is a checkable fact — the others are opinions or feelings.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The flower has 5 petals",
            commonErrors: ["Choosing 'beautiful' — that is an opinion, not a fact."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a prediction for this experiment: 'Will a seed grow faster in sunlight or shade?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction", statement: "A prediction guesses an outcome based on reasoning." },
            ],
            steps: [
              { reasoning: "A clear prediction, e.g. 'I think the seed will grow faster in sunlight.'", marks: 1, markCode: "M" },
              { reasoning: "It gives a specific outcome to test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any clear prediction, e.g. 'seed grows faster in sunlight because plants need light.'",
            commonErrors: ["Saying 'it depends' — a prediction must commit to an outcome."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says: 'Plants are nice.' Turn this into a testable hypothesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis", statement: "A hypothesis must be testable with 'If... then...'." },
            ],
            steps: [
              { reasoning: "'Plants are nice' is an opinion — cannot be tested.", marks: 1, markCode: "M" },
              { reasoning: "A testable version needs a variable and measurable result, e.g. 'If a plant gets sunlight it will grow taller.'", marks: 1, markCode: "M" },
              { reasoning: "The new statement can be tested by growing plants in light and shade.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'If a plant gets sunlight, it will grow taller than one in shade.'",
            commonErrors: ["Keeping 'nice' — that cannot be measured or tested."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class wants to find out if seeds grow faster in sunlight or shade.",
          parts: [
            { label: "a", prompt: "Write an observation about what a seedling looks like.", marks: 1 },
            { label: "b", prompt: "Write a testable hypothesis for this investigation.", marks: 2 },
            { label: "c", prompt: "Name the variable you will change.", marks: 1 },
            { label: "d", prompt: "Name two things you must keep the same for a fair test.", marks: 2 },
            { label: "e", prompt: "Explain why keeping things the same matters.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fair test design", statement: "Change one variable; keep all else constant for trustworthy results." },
            ],
            steps: [
              { part: "a", reasoning: "An observation, e.g. 'The seedling has two small green leaves.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A testable hypothesis, e.g. 'If a seedling gets sunlight it will grow taller.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It uses 'if... then' with a measurable result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The variable: amount of sunlight (or light vs shade).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two constants, e.g. same type of seed, same soil, same water, same pot.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two valid constants listed.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "If other things change too, you cannot tell which caused the result — the test is unfair.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) observation (b) if-then hypothesis (c) sunlight variable (d) 2 constants (e) fair test isolates cause",
            commonErrors: ["In (d), changing water amount too — only one variable may change."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is an observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rock is beautiful" },
              { id: "b", text: "I like the rock" },
              { id: "c", text: "The rock is grey and rough" },
              { id: "d", text: "The rock is my favourite" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Observation", statement: "An observation is a factual detail that can be checked." },
            ],
            steps: [
              { reasoning: "Grey and rough are checkable facts; the others are opinions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The rock is grey and rough",
            commonErrors: ["Choosing beautiful — that is an opinion."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many senses can help a scientist observe: sight, hearing, smell, taste and touch?",
          response: {
            type: "numeric",
            parts: [{ label: "Senses", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Observation senses", statement: "Observation can use sight, hearing, smell, taste and touch." },
            ],
            steps: [
              { reasoning: "The five senses are listed.", marks: 1, markCode: "M" },
              { reasoning: "There are five senses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only sight — all senses can help observation."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Turn this opinion into an observation: The soup smells nice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Observation", statement: "Observations describe facts you can check, not opinions." },
            ],
            steps: [
              { reasoning: "Nice is an opinion and cannot be measured.", marks: 1, markCode: "M" },
              { reasoning: "A factual version describes the smell, e.g. salty and warm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. The soup smells salty and warm — a checkable description.",
            commonErrors: ["Keeping the word nice — observations need facts."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a statement a hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always true" },
              { id: "b", text: "It can be tested with an experiment" },
              { id: "c", text: "It is a feeling" },
              { id: "d", text: "It cannot be checked" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis", statement: "A hypothesis is a testable statement that can be checked." },
            ],
            steps: [
              { reasoning: "A hypothesis must be testable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It can be tested with an experiment",
            commonErrors: ["Choosing always true — a hypothesis may turn out wrong."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the hypothesis 'If plants get sunlight then they grow taller', how many key parts are there: the variable and the expected result?",
          response: {
            type: "numeric",
            parts: [{ label: "Key parts", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis format", statement: "A hypothesis has an if-part variable and a then-part result." },
            ],
            steps: [
              { reasoning: "The if-part names the variable: sunlight.", marks: 1, markCode: "M" },
              { reasoning: "The then-part names the result: growing taller.", marks: 1, markCode: "M" },
              { reasoning: "There are two key parts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting every word — the key parts are variable and result."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a fair test, how many variables should be changed?",
          response: {
            type: "numeric",
            parts: [{ label: "Changed variables", answer: 1, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "A fair test changes only one variable." },
            ],
            steps: [
              { reasoning: "Only one variable may change.", marks: 1, markCode: "M" },
              { reasoning: "The answer is one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Changing two — that makes the test unfair."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write a testable hypothesis for this question: Will ice melt faster in sunlight or shade?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis", statement: "A hypothesis uses if-then with a measurable result." },
            ],
            steps: [
              { reasoning: "A testable hypothesis, e.g. If ice is in sunlight it will melt faster.", marks: 1, markCode: "M" },
              { reasoning: "It names the variable: sunlight versus shade.", marks: 1, markCode: "M" },
              { reasoning: "It gives a measurable result: melting time or amount melted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. If ice is placed in sunlight, it will melt faster than in shade.",
            commonErrors: ["Writing only a prediction without if-then testable form."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an objective observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The leaf is pretty" },
              { id: "b", text: "The leaf has five points and is green" },
              { id: "c", text: "The leaf is the best" },
              { id: "d", text: "I love the leaf" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Objective observation", statement: "Objective observations are facts that can be verified." },
            ],
            steps: [
              { reasoning: "Five points and green are checkable facts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The leaf has five points and is green",
            commonErrors: ["Choosing pretty — that is an opinion."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many constants are listed for a fair plant test: same seed type, same soil, same water and same pot?",
          response: {
            type: "numeric",
            parts: [{ label: "Constants", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constants", statement: "Constants are the things kept the same in a fair test." },
            ],
            steps: [
              { reasoning: "Seed type, soil, water and pot are constants.", marks: 1, markCode: "M" },
              { reasoning: "There are four constants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting the changed variable as a constant."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the best testable hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants are the best" },
              { id: "b", text: "I think plants are good" },
              { id: "c", text: "Plants are nice" },
              { id: "d", text: "If a plant gets more sunlight it will grow taller" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Testable hypothesis", statement: "A testable hypothesis has a variable and a measurable result." },
            ],
            steps: [
              { reasoning: "The if-then statement can be tested by changing sunlight.", marks: 1, markCode: "M" },
              { reasoning: "Growing taller is measurable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** If a plant gets more sunlight it will grow taller",
            commonErrors: ["Choosing opinions — they cannot be tested."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Plant A gets more light and more water than Plant B. How many variables were changed, making the test unfair?",
          response: {
            type: "numeric",
            parts: [{ label: "Variables changed", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Changing more than one variable makes a test unfair." },
            ],
            steps: [
              { reasoning: "Light and water both changed.", marks: 1, markCode: "M" },
              { reasoning: "Two variables were changed.", marks: 1, markCode: "M" },
              { reasoning: "This makes it impossible to know which caused any difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting one — both light and water changed."],
          },
        },
        {
          id: "pypsc-q-u3l3c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How is a hypothesis different from a simple prediction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A prediction can never be tested" },
              { id: "b", text: "A hypothesis is a testable if-then statement" },
              { id: "c", text: "They are exactly the same" },
              { id: "d", text: "A hypothesis is always an opinion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hypothesis vs prediction", statement: "A hypothesis is a testable prediction in if-then form." },
            ],
            steps: [
              { reasoning: "A hypothesis names a variable and expected result.", marks: 1, markCode: "M" },
              { reasoning: "A prediction may be less formal but both guess an outcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A hypothesis is a testable if-then statement",
            commonErrors: ["Saying they are the same — a hypothesis is more testable and specific."],
          },
        },
      ],
    },
    {
      id: "pypsc-u3l3-c2-experiments",
      title: "Fair testing and recording",
      skill: "Run fair tests, record results and draw conclusions.",
      lesson: {
        sections: [
          {
            heading: "Running a fair test",
            body: "A **fair test** changes only **one thing** — the **variable** — and keeps everything else the same. If testing whether plants need water, give one plant water and one not, but use the same soil, same light, same pot size. Change two things at once and you cannot tell which caused the result. Repeat the test to check it is reliable.",
          },
          {
            heading: "Recording and concluding",
            body: "Scientists **record** results in tables or charts so the data is clear. After testing, they write a **conclusion**: what happened, was the hypothesis right or wrong, and what they learned. A good conclusion uses **evidence** from the results, not just what they expected. Even if the hypothesis was wrong, the experiment taught them something.",
          },
        ],
        keyFormulas: [
          { name: "Fair test rule", statement: "Change ONE variable; keep all others constant" },
          { name: "Conclusion format", statement: "What happened + was hypothesis correct + what we learned" },
        ],
        workedExample: {
          problem: "A test changes light AND water for two plants. Why is this unfair?",
          solution: "Two variables changed — if one plant does better, you cannot tell if light or water caused it. Only one variable should change.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u3l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, how many variables should you change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "None" },
              { id: "c", text: "All of them" },
              { id: "d", text: "Two" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "A fair test changes exactly one variable." },
            ],
            steps: [
              { reasoning: "Only one variable changes in a fair test.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** One",
            commonErrors: ["Choosing 'none' — you must change something to test it."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class tests if plants grow taller with more water. Plant A gets 100 mL daily, Plant B gets 200 mL. What must they keep the same?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constants in fair test", statement: "Everything except the tested variable must be identical." },
            ],
            steps: [
              { reasoning: "Same soil, same pot size, same light, same plant type.", marks: 1, markCode: "M" },
              { reasoning: "Only the water amount differs — that is the variable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same soil, pot, light and plant type — only water amount changes.",
            commonErrors: ["Changing light too — then you cannot tell if water or light caused the difference."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Results: Plant in sunlight grew $12$ cm; plant in shade grew $5$ cm. Write a conclusion for the hypothesis 'Plants need light to grow well.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conclusion", statement: "Conclusion uses evidence: sunlight plant grew $12$ cm vs shade $5$ cm." },
            ],
            steps: [
              { reasoning: "State the result: sun plant grew $12$ cm, shade plant $5$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Compare: sunlight plant grew more than twice as tall.", marks: 1, markCode: "M" },
              { reasoning: "Conclude: hypothesis supported — plants need light to grow well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The sunlight plant grew $12$ cm vs $5$ cm in shade — plants need light to grow well (hypothesis supported).",
            commonErrors: ["Ignoring the numbers — conclusion must use the measured results."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class investigates whether different surfaces affect how far a toy car rolls.",
          parts: [
            { label: "a", prompt: "Write a fair test hypothesis.", marks: 1 },
            { label: "b", prompt: "Name the variable you will change.", marks: 1 },
            { label: "c", prompt: "Name two things to keep the same.", marks: 2 },
            { label: "d", prompt: "How will you record the results?", marks: 1 },
            { label: "e", prompt: "Results: carpet $20$ cm, wood $50$ cm, ice $80$ cm. Write a conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Experiment design", statement: "Hypothesis + one variable + constants + recording + evidence-based conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "A testable hypothesis, e.g. 'If the surface is smoother the car will roll further.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The surface texture (carpet, wood, ice).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two constants, e.g. same car, same starting push/height.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both valid constants.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Measure distance rolled for each surface; record in a table.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Conclusion uses results: ice $80$ cm > wood $50$ > carpet $20$ — smoother surface = further.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Hypothesis supported; friction is less on smoother surfaces.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) if-then hypothesis (b) surface (c) same car+push (d) measure+table (e) smoother=further, hypothesis supported",
            commonErrors: ["In (c), changing the car too — must use same car for fairness."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a fair test, how many variables should change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two" },
              { id: "b", text: "None" },
              { id: "c", text: "One" },
              { id: "d", text: "Every variable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "A fair test changes exactly one variable." },
            ],
            steps: [
              { reasoning: "Only one variable changes so results are trustworthy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** One",
            commonErrors: ["Choosing none — you must change something to test it."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many constants are listed for a plant test: same soil, same pot size, same light and same plant type?",
          response: {
            type: "numeric",
            parts: [{ label: "Constants", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constants", statement: "Constants are kept the same in a fair test." },
            ],
            steps: [
              { reasoning: "Soil, pot size, light and plant type are constants.", marks: 1, markCode: "M" },
              { reasoning: "There are four constants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting the changed variable — constants are what stays the same."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why changing both light and water makes a plant experiment unfair.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Only one variable should change so you know what caused the result." },
            ],
            steps: [
              { reasoning: "Light and water both changed between the plants.", marks: 1, markCode: "M" },
              { reasoning: "If one plant grows better, you cannot tell if light or water caused it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two variables changed, so the cause of any difference is unclear.",
            commonErrors: ["Saying it is still fair — changing two things hides the cause."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a good way to record experiment results?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On the wall as art" },
              { id: "b", text: "By guessing" },
              { id: "c", text: "Only in your head" },
              { id: "d", text: "In a table or chart" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording", statement: "Results are recorded in tables or charts to keep data clear." },
            ],
            steps: [
              { reasoning: "Tables and charts organise measurements clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** In a table or chart",
            commonErrors: ["Relying on memory — recorded data is more reliable."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A plant in sunlight grew 12 cm and a plant in shade grew 5 cm. How many centimetres taller was the sunlight plant?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 7, tolerance: 0, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Comparing results", statement: "Difference = sunlight growth minus shade growth." },
            ],
            steps: [
              { reasoning: "Subtract shade height from sunlight height: 12 - 5.", marks: 1, markCode: "M" },
              { reasoning: "12 - 5 = 7.", marks: 1, markCode: "M" },
              { reasoning: "The sunlight plant was 7 cm taller.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 cm",
            commonErrors: ["Adding the heights instead of subtracting."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many surface results are recorded: carpet 20 cm, wood 50 cm and ice 80 cm?",
          response: {
            type: "numeric",
            parts: [{ label: "Results", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording results", statement: "Each surface gets one measured result." },
            ],
            steps: [
              { reasoning: "Carpet, wood and ice each have a result.", marks: 1, markCode: "M" },
              { reasoning: "There are three results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting distances as separate results — each surface is one result."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Results: carpet 20 cm, wood 50 cm, ice 80 cm. Write a conclusion for the hypothesis that smoother surfaces make a car roll further.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conclusion", statement: "A conclusion uses measured evidence to say if the hypothesis was supported." },
            ],
            steps: [
              { reasoning: "Ice gave 80 cm, wood 50 cm and carpet 20 cm.", marks: 1, markCode: "M" },
              { reasoning: "Smoother surfaces produced longer rolls.", marks: 1, markCode: "M" },
              { reasoning: "The hypothesis is supported by the evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Smoother surfaces made the car roll further; ice 80 cm > wood 50 cm > carpet 20 cm.",
            commonErrors: ["Ignoring the numbers — conclusions must use results."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a scientist repeat an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To use more materials always" },
              { id: "b", text: "To check the result is reliable" },
              { id: "c", text: "To avoid recording" },
              { id: "d", text: "To change the hypothesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reliability", statement: "Repeating a test checks whether results are reliable." },
            ],
            steps: [
              { reasoning: "Repeats show if the result happens again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To check the result is reliable",
            commonErrors: ["Choosing change hypothesis — repeats test the same idea."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many fair-test rules are named: change one variable and keep everything else the same?",
          response: {
            type: "numeric",
            parts: [{ label: "Rules", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test rules", statement: "Change one variable and keep all others constant." },
            ],
            steps: [
              { reasoning: "The two rules are change one variable and keep the rest same.", marks: 1, markCode: "M" },
              { reasoning: "There are two rules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting only the changed variable — keeping constants is also a rule."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the best way to record a fair test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop after one try" },
              { id: "b", text: "Measure the variable and record all results in a table" },
              { id: "c", text: "Change several variables" },
              { id: "d", text: "Write only what you expected" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording", statement: "Measure the variable and record results clearly in a table." },
            ],
            steps: [
              { reasoning: "Recording measurements in a table keeps data organised.", marks: 1, markCode: "M" },
              { reasoning: "Changing several variables or stopping early weakens the test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Measure the variable and record all results in a table",
            commonErrors: ["Writing expectations — record actual measurements."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these tests are unfair: same water but different light; different light and water; same soil but different seed type?",
          response: {
            type: "numeric",
            parts: [{ label: "Unfair tests", answer: 1, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "A fair test changes only one variable." },
            ],
            steps: [
              { reasoning: "Different light and water changes two variables.", marks: 1, markCode: "M" },
              { reasoning: "Same water/different light and same soil/different seed each change one variable.", marks: 1, markCode: "M" },
              { reasoning: "Only one test is unfair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting all three — only the test changing two variables is unfair."],
          },
        },
        {
          id: "pypsc-q-u3l3c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What should a conclusion be based on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A guess with no data" },
              { id: "b", text: "The measured results and evidence" },
              { id: "c", text: "What a friend said" },
              { id: "d", text: "Only what you hoped would happen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conclusion", statement: "Conclusions use evidence from results, not just expectations." },
            ],
            steps: [
              { reasoning: "Measured results provide the evidence for a conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Expectations or guesses are not enough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The measured results and evidence",
            commonErrors: ["Choosing hopes — conclusions need data."],
          },
        },
      ],
    },
  ],
};
