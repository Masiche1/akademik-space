import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "econ-u1-lesson-1-4",
  code: "1-4",
  title: "What Economics Is and How Economists Think",
  goal: "I CAN explain scarcity, choice, positive and normative analysis, ceteris paribus and economic models, and evaluate the strengths and limits of economic methodology.",
  standards: ["Paper 1", "Paper 2", "Topic 1.4"],
  vocabulary: [
    { term: "Scarcity", definition: "The fundamental economic problem: unlimited wants but limited resources." },
    { term: "Choice", definition: "Deciding which wants to satisfy given scarce resources — every choice involves an opportunity cost." },
    { term: "Positive statement", definition: "A factual claim that can be tested or verified, e.g. 'Inflation is 5%'." },
    { term: "Normative statement", definition: "A value judgement about what ought to happen, e.g. 'Inflation should be lower'." },
    { term: "Ceteris paribus", definition: "Latin for 'all other things being equal' — a simplifying assumption holding other variables constant." },
    { term: "Economic model", definition: "A simplified representation of economic behaviour used to explain and predict." },
    { term: "Deduction", definition: "Reasoning from general principles to specific conclusions." },
    { term: "Induction", definition: "Reasoning from observed data and specific cases to general principles." },
  ],
  concepts: [
    {
      id: "econ-u1-nature-of-economics",
      title: "The nature of economics",
      skill: "Explain scarcity, choice, positive versus normative statements, ceteris paribus, models and assumptions.",
      lesson: {
        sections: [
          {
            heading: "Scarcity and choice",
            body: "Economics studies how societies allocate **scarce** resources among **unlimited** wants. Because resources are limited, every choice involves giving something up — the **opportunity cost**. Economics asks: what to produce, how to produce it, and for whom to produce it. These are the **three basic economic questions**.",
          },
          {
            heading: "Positive and normative statements",
            body: "A **positive** statement is factual and testable — 'The minimum wage causes some job losses.' Economists aim for positive analysis. A **normative** statement is a value judgement — 'The minimum wage should be raised.' Normative claims cannot be proven right or wrong by evidence alone; they depend on objectives and ethics. Good exam answers separate the two clearly.",
          },
          {
            heading: "Ceteris paribus and models",
            body: "Real economies are too complex to analyse in full, so economists build **models** — simplified representations — using **assumptions** such as **ceteris paribus** ('all other things being equal'). A demand model might hold income, tastes and prices of other goods constant to isolate the price effect. Models sacrifice realism for clarity and predictive power, but their conclusions depend on the assumptions being reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Positive vs normative", statement: "Positive = testable fact; Normative = value judgement" },
          { name: "Ceteris paribus", statement: "'All other things being equal' — hold other variables constant" },
          { name: "Three questions", statement: "What to produce? How to produce? For whom?" },
        ],
        workedExample: {
          problem: "Classify each statement as positive or normative: (a) 'Unemployment in the country is 6%.' (b) 'The government should spend more on health.'",
          solution: "(a) Positive — it is a factual claim that can be measured and verified. (b) Normative — it expresses a value judgement about what ought to be done; reasonable people can disagree.",
        },
      },
      questions: [
        {
          id: "econ-u1-natq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In economics, 'ceteris paribus' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All other things changing equally" },
              { id: "b", text: "All other things being held constant" },
              { id: "c", text: "Other variables cannot be measured" },
              { id: "d", text: "All economic agents are identical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ceteris paribus", statement: "A Latin phrase meaning 'all other things being equal' — used to isolate one variable." },
            ],
            steps: [
              { reasoning: "Ceteris paribus is a simplifying assumption that holds other factors constant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** All other things being held constant",
            commonErrors: ["Confusing ceteris paribus with the idea that other variables do not exist at all."],
          },
        },
        {
          id: "econ-u1-natq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a positive statement and a normative statement, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive statement", statement: "A factual claim that can be tested or verified against evidence." },
              { kind: "definition", name: "Normative statement", statement: "A value judgement about what ought to happen." },
            ],
            steps: [
              { reasoning: "Positive statements are testable — they can be proven true or false by data.", marks: 1, markCode: "M" },
              { reasoning: "Normative statements express opinions or values and cannot be settled by evidence alone.", marks: 1, markCode: "M" },
              { reasoning: "Valid example of each, e.g. 'Inflation is 4%' vs 'Inflation is too high'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive = testable fact; normative = value judgement. Examples required.",
            commonErrors: ["Giving a positive statement without a normative example, or vice versa."],
          },
        },
        {
          id: "econ-u1-natq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country can produce a maximum of 100 tonnes of wheat or 200 litres of milk. The PPF is linear.",
          response: {
            type: "numeric",
            parts: [
              { label: "Milk sacrificed to produce 50 more tonnes of wheat", answer: 100, unit: "litres" },
              { label: "Wheat sacrificed to produce 60 more litres of milk", answer: 30, unit: "tonnes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost on a linear PPF", statement: "Constant opportunity cost = exchange rate between goods = 200/100 = 2 milk per wheat" },
            ],
            steps: [
              { reasoning: "The opportunity cost of 1 tonne of wheat is 200/100 = 2 litres of milk.", working: "200 \\div 100 = 2", marks: 1, markCode: "M" },
              { reasoning: "50 tonnes of wheat therefore costs 50 x 2 = 100 litres of milk.", working: "50 \\times 2 = 100", marks: 1, markCode: "A" },
              { reasoning: "Conversely 1 litre of milk costs 1/2 = 0.5 tonnes of wheat, so 60 litres cost 60 x 0.5 = 30 tonnes.", working: "60 \\times 0.5 = 30", marks: 1, markCode: "M" },
              { reasoning: "Final answer 30 tonnes of wheat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 litres of milk; 30 tonnes of wheat",
            commonErrors: ["Using the wrong exchange rate — 1 wheat = 2 milk, not the reverse."],
          },
        },
        {
          id: "econ-u1-natq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A government minister states: 'We should raise taxes on cigarettes because smoking causes illness.'",
          parts: [
            { label: "a", prompt: "Identify the positive and the normative parts of the minister's statement.", marks: 2 },
            { label: "b", prompt: "Explain what ceteris paribus means and why economists use it.", marks: 3 },
            { label: "c", prompt: "Evaluate the use of economic models in analysing a policy such as a cigarette tax.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive vs normative", statement: "Positive = testable; normative = value judgement." },
              { kind: "definition", name: "Ceteris paribus", statement: "All other variables held constant to isolate one effect." },
            ],
            steps: [
              { part: "a", reasoning: "'Smoking causes illness' is positive — testable by data.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'We should raise taxes' is normative — a value judgement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ceteris paribus means holding all other relevant variables constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economists use it because real economies are too complex to model fully.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It isolates the effect of one variable but is an unrealistic simplification.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Models clarify relationships and generate testable predictions — useful for policy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But assumptions may fail (e.g. consumers may switch brands), so conclusions need evaluation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: models are valuable tools but must be checked against real data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Illness claim = positive; tax recommendation = normative. (b) Holding other variables constant to isolate effects. (c) Useful but reliant on assumptions — verify with evidence.",
            commonErrors: ["Treating the whole statement as one type without splitting positive and normative parts."],
          },
        },
        {
          id: "econ-u1-natq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a normative statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployment in the country is 7%" },
              { id: "b", text: "The minimum wage should be increased" },
              { id: "c", text: "Interest rates were raised by 0.5%" },
              { id: "d", text: "Exports rose by 3% last year" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Normative statement", statement: "A value judgement about what ought to happen — cannot be proven by data alone." },
            ],
            steps: [
              { reasoning: "'Should be increased' expresses a value judgement, not a testable fact.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The minimum wage should be increased",
            commonErrors: ["Choosing a factual claim that can be verified with data."],
          },
        },
        {
          id: "econ-u1-natq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT one of the three basic economic questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What to produce?" },
              { id: "b", text: "How to produce?" },
              { id: "c", text: "For whom to produce?" },
              { id: "d", text: "When to produce?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Basic economic questions", statement: "What to produce? How to produce? For whom to produce?" },
            ],
            steps: [
              { reasoning: "Only the three listed questions are required — 'when' is not one of them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** When to produce?",
            commonErrors: ["Adding extra questions not in the standard list."],
          },
        },
        {
          id: "econ-u1-natq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Economists use ceteris paribus in their models in order to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make models more complicated" },
              { id: "b", text: "Isolate the effect of one variable by holding others constant" },
              { id: "c", text: "Guarantee the model is always correct" },
              { id: "d", text: "Eliminate the need for data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ceteris paribus", statement: "Hold all other variables constant to isolate the effect of the variable being studied." },
            ],
            steps: [
              { reasoning: "Ceteris paribus simplifies analysis by removing the influence of other factors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Isolate the effect of one variable by holding others constant",
            commonErrors: ["Thinking ceteris paribus makes models perfectly realistic."],
          },
        },
        {
          id: "econ-u1-natq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Define scarcity and state what it means for economic agents to make choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scarcity", statement: "Unlimited wants but finite resources." },
            ],
            steps: [
              { reasoning: "Scarcity means human wants are unlimited while resources are finite.", marks: 1, markCode: "M" },
              { reasoning: "Because resources cannot satisfy all wants, agents must choose.", marks: 1, markCode: "M" },
              { reasoning: "Each choice involves sacrificing the next best alternative — opportunity cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scarcity forces choices because resources are insufficient for all wants; choices carry opportunity costs.",
            commonErrors: ["Defining scarcity without linking it to choice."],
          },
        },
        {
          id: "econ-u1-natq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A local council says: 'The new stadium cost $500 million, and it was excellent value for money.' Classify each part of the statement as positive or normative and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive vs normative", statement: "Positive = testable fact; normative = value judgement." },
            ],
            steps: [
              { reasoning: "'Cost $500 million' is positive — a factual, verifiable figure.", marks: 1, markCode: "M" },
              { reasoning: "'Excellent value for money' is normative — a subjective judgement open to disagreement.", marks: 1, markCode: "M" },
              { reasoning: "Positive claims can be checked against data; normative claims depend on values and objectives.", marks: 1, markCode: "M" },
              { reasoning: "Clear justification distinguishing the two parts earns the final mark.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cost figure = positive; value judgement = normative.",
            commonErrors: ["Classifying the whole statement as one type."],
          },
        },
        {
          id: "econ-u1-natq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why economists build models even though models are deliberately simplified.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose of models", statement: "Simplification makes complex economies analysable and generates testable predictions." },
            ],
            steps: [
              { reasoning: "Real economies involve millions of agents and variables — too complex to analyse fully.", marks: 1, markCode: "M" },
              { reasoning: "Models strip out detail to isolate key relationships (e.g. price and demand).", marks: 1, markCode: "M" },
              { reasoning: "They generate testable predictions that can be checked against real-world data.", marks: 1, markCode: "M" },
              { reasoning: "The cost is reduced realism — conclusions hold only if assumptions are reasonable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Models simplify to make analysis possible and predictions testable, at the cost of realism.",
            commonErrors: ["Claiming models aim to describe reality perfectly."],
          },
        },
        {
          id: "econ-u1-natq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A transport minister claims: 'Raising fuel taxes will reduce traffic congestion because higher prices discourage driving.'",
          parts: [
            { label: "a", prompt: "Identify the positive and normative parts of the claim.", marks: 2 },
            { label: "b", prompt: "Explain what assumptions (including ceteris paribus) the claim relies on.", marks: 3 },
            { label: "c", prompt: "Evaluate how useful an economic model would be in testing this claim.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive vs normative", statement: "Testable prediction vs value judgement." },
              { kind: "definition", name: "Ceteris paribus", statement: "Holding other variables constant to isolate the tax effect." },
            ],
            steps: [
              { part: "a", reasoning: "'Higher prices discourage driving' is a testable (positive) claim about behaviour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The implied recommendation to raise taxes is normative — a policy value judgement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ceteris paribus: hold incomes, public transport quality and other factors constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assumes drivers respond to price and have alternatives available.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assumes no offsetting effects (e.g. people moving further out).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A model can isolate the price effect and generate a testable prediction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But real behaviour is complex — people may switch cars, routes or timing; second-round effects matter.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: models help frame the question but conclusions must be verified with data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Behaviour claim = positive; policy = normative. (b) Holds other factors constant, assumes price responsiveness. (c) Useful but needs empirical verification.",
            commonErrors: ["Treating the whole claim as purely positive or purely normative."],
          },
        },
        {
          id: "econ-u1-natq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For each statement, state whether it is positive or normative: (a) 'The new bridge cost $500 million.' (b) 'The bridge was worth the money spent.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive vs normative", statement: "Positive = verifiable fact; normative = value judgement." },
            ],
            steps: [
              { reasoning: "(a) is positive — the cost is a measurable, verifiable fact.", marks: 1, markCode: "M" },
              { reasoning: "(b) is normative — 'worth it' is a subjective value judgement.", marks: 1, markCode: "M" },
              { reasoning: "Both classifications correctly identified with brief justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Positive; (b) normative.",
            commonErrors: ["Classifying 'worth the money' as positive because it mentions a number."],
          },
        },
        {
          id: "econ-u1-natq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When economists build a demand model, ceteris paribus typically means holding constant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the price of the good" },
              { id: "b", text: "Income, tastes and the prices of other goods" },
              { id: "c", text: "The number of consumers" },
              { id: "d", text: "Nothing — all variables change together" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ceteris paribus in demand", statement: "Hold non-price determinants constant to isolate the price-quantity relationship." },
            ],
            steps: [
              { reasoning: "To study price's effect on demand, other determinants are held constant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Income, tastes and the prices of other goods",
            commonErrors: ["Thinking the good's own price is held constant — it is the variable being studied."],
          },
        },
        {
          id: "econ-u1-natq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A government debates helping low-income households either with cash transfers or with subsidised prices for basic goods.",
          parts: [
            { label: "a", prompt: "Distinguish between the positive and normative aspects of this policy debate.", marks: 2 },
            { label: "b", prompt: "Explain how ceteris paribus could be applied when comparing the two policies.", marks: 2 },
            { label: "c", prompt: "Evaluate the use of economic models to decide between the policies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive vs normative", statement: "Testable effects vs value judgements about which policy is better." },
              { kind: "definition", name: "Ceteris paribus", statement: "Hold other factors constant to compare policy effects." },
            ],
            steps: [
              { part: "a", reasoning: "Positive: how each policy affects income, prices and consumption — testable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Normative: which policy 'should' be chosen — a value judgement about equity vs efficiency.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ceteris paribus: hold household incomes, prices of other goods and government budget constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This isolates the effect of the policy instrument itself on behaviour and welfare.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Models can compare predicted effects on consumption, prices and fiscal cost.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But assumptions may fail — e.g. cash may be saved rather than spent; subsidies may benefit non-target groups.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: models inform but real behavioural responses need empirical evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Effects = positive; choice = normative. (b) Hold other variables constant. (c) Useful for comparison but verify assumptions with data.",
            commonErrors: ["Treating the policy choice itself as purely positive."],
          },
        },
        {
          id: "econ-u1-natq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An economy has a linear PPF allowing a maximum of 200 consumer goods or 100 capital goods. It chooses to produce 120 consumer goods. Calculate the number of capital goods it can produce.",
          response: {
            type: "numeric",
            parts: [{ label: "Capital goods produced", answer: 40 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear PPF opportunity cost", statement: "OC per unit = max of other good / max of this good" },
            ],
            steps: [
              { reasoning: "Each consumer good costs 100/200 = 0.5 capital goods.", working: "100/200 = 0.5", marks: 1, markCode: "M" },
              { reasoning: "120 consumer goods cost 120 x 0.5 = 60 capital goods.", working: "120 \\times 0.5 = 60", marks: 1, markCode: "M" },
              { reasoning: "Capital goods produced = 100 - 60 = 40.", working: "100 - 60 = 40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 capital goods",
            commonErrors: ["Using 200/100 instead of 100/200 for the exchange rate."],
          },
        },
        {
          id: "econ-u1-natq16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the claim that 'economics is a science'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Economics as science", statement: "Uses models, assumptions and empirical testing like other sciences, but deals with human behaviour." },
            ],
            steps: [
              { reasoning: "For: economics builds models, makes testable predictions and uses real-world data — scientific method.", marks: 1, markCode: "M" },
              { reasoning: "Against: human behaviour is less predictable than physical phenomena; experiments are limited.", marks: 1, markCode: "M" },
              { reasoning: "Normative value judgements also feature in economics, unlike pure sciences.", marks: 1, markCode: "R" },
              { reasoning: "Reasoned judgement: economics is a social science — systematic and evidence-based but less certain than natural sciences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Economics is a social science: scientific methods applied to human behaviour, with greater uncertainty.",
            commonErrors: ["Arguing only one side without evaluation."],
          },
        },
      ],
    },
    {
      id: "econ-u1-economic-methodology",
      title: "Economic methodology",
      skill: "Explain deductive and inductive reasoning, the role of real-world data, and the limits of economic analysis.",
      lesson: {
        sections: [
          {
            heading: "Deduction and induction",
            body: "**Deduction** moves from general principles to specific conclusions — 'Humans respond to incentives, so a tax cut will raise consumption.' **Induction** moves from observed data to general principles — collecting survey data on consumer spending to infer how taxes affect behaviour. Economics uses both: theory generates hypotheses, and data tests them.",
          },
          {
            heading: "Real-world data",
            body: "Economists rely on **real-world data**: national statistics, surveys, price indices, employment figures. Data allows theories to be tested — if a model predicts one thing and the data shows another, the model is revised. However, data can be unreliable: it may be outdated, mismeasured, or distorted by informal economic activity.",
          },
          {
            heading: "Evaluation of models and limits",
            body: "No model captures every detail of a real economy. Simplifying assumptions make analysis possible but can lead to wrong predictions if the assumptions fail. Economists must **evaluate** models: are the assumptions realistic? Do predictions match evidence? Economic analysis also faces limits — human behaviour is unpredictable, and policies have **unintended consequences** that models may miss.",
          },
        ],
        keyFormulas: [
          { name: "Deduction", statement: "General principle → specific conclusion" },
          { name: "Induction", statement: "Observed data → general principle" },
          { name: "Theory testing", statement: "Hypothesis → data → confirm or revise model" },
        ],
        workedExample: {
          problem: "An economist claims 'rising interest rates reduce investment'. Is this deduction or induction, and how could it be tested?",
          solution: "It is a deductive claim derived from the general principle that borrowing becomes costlier. It can be tested inductively by collecting data on interest rates and investment spending across countries or time periods, then checking whether the relationship holds.",
        },
      },
      questions: [
        {
          id: "econ-u1-metq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Reasoning from general economic principles to specific predictions is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Induction" },
              { id: "b", text: "Deduction" },
              { id: "c", text: "Ceteris paribus" },
              { id: "d", text: "Aggregation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deduction", statement: "Reasoning from general principles to specific conclusions." },
            ],
            steps: [
              { reasoning: "Deduction moves from general theory to particular predictions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deduction",
            commonErrors: ["Reversing deduction and induction."],
          },
        },
        {
          id: "econ-u1-metq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by an economic model and why economists use models.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Economic model", statement: "A simplified representation of economic behaviour used to explain and predict." },
            ],
            steps: [
              { reasoning: "A model is a simplified representation that strips out irrelevant detail.", marks: 1, markCode: "M" },
              { reasoning: "It is built on assumptions such as ceteris paribus.", marks: 1, markCode: "M" },
              { reasoning: "Models make complex economies analysable and generate testable predictions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A simplified representation used to explain, predict and test economic relationships.",
            commonErrors: ["Claiming models are meant to describe reality perfectly — they deliberately simplify."],
          },
        },
        {
          id: "econ-u1-metq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how economists use real-world data to evaluate economic theories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Empirical testing", statement: "Data is used to test whether a theory's predictions match observed outcomes." },
            ],
            steps: [
              { reasoning: "Economists collect data — national statistics, surveys, price indices — to test predictions.", marks: 1, markCode: "M" },
              { reasoning: "If data confirms predictions, confidence in the theory grows; if not, the theory is revised.", marks: 1, markCode: "M" },
              { reasoning: "Data quality matters — unreliable or incomplete data can give misleading tests.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: data is essential but imperfect; theory and evidence must be used together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data tests predictions; matching evidence supports the theory, mismatch forces revision.",
            commonErrors: ["Saying data alone proves a theory — correlation does not prove causation."],
          },
        },
        {
          id: "econ-u1-metq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Economists disagree about whether a new tax will reduce consumption. One builds a model assuming rational consumers; another surveys actual spending patterns.",
          parts: [
            { label: "a", prompt: "Define inductive reasoning and explain how the second economist is using it.", marks: 2 },
            { label: "b", prompt: "Explain one advantage of using real-world data in economic analysis.", marks: 2 },
            { label: "c", prompt: "Evaluate the limits of economic analysis when policies have unintended consequences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Induction", statement: "Reasoning from observed data to general principles." },
              { kind: "principle", name: "Limits of analysis", statement: "Models simplify and may miss complex real-world interactions." },
            ],
            steps: [
              { part: "a", reasoning: "Induction moves from specific observations to general principles.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The survey approach gathers actual spending data to infer behaviour patterns.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Real data grounds theory in reality and reveals whether predictions hold.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It can expose flaws in models built on unrealistic assumptions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Models may miss feedback effects — e.g. a tax may shift spending rather than reduce it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Human behaviour is hard to predict and policies trigger second-round effects.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: analysis is useful but conclusions should be tentative and monitored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Induction = data → general principle; the survey uses it. (b) Grounds theory, tests predictions. (c) Unintended effects and behavioural unpredictability limit certainty.",
            commonErrors: ["Ignoring that both deductive models and inductive data have weaknesses."],
          },
        },
        {
          id: "econ-u1-metq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Reasoning from observed data and specific cases to a general principle is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deduction" },
              { id: "b", text: "Induction" },
              { id: "c", text: "Ceteris paribus" },
              { id: "d", text: "Normative analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Induction", statement: "Reasoning from observed data/specific cases to general principles." },
            ],
            steps: [
              { reasoning: "Induction moves from particular observations to general conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Induction",
            commonErrors: ["Reversing induction and deduction."],
          },
        },
        {
          id: "econ-u1-metq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of real-world economic data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A textbook diagram of demand" },
              { id: "b", text: "National employment statistics published by the government" },
              { id: "c", text: "An economist's personal opinion" },
              { id: "d", text: "A hypothetical model assumption" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Real-world data", statement: "Observed statistics such as employment figures, price indices and survey results." },
            ],
            steps: [
              { reasoning: "Employment statistics are collected real-world observations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** National employment statistics published by the government",
            commonErrors: ["Choosing a model or opinion rather than observed data."],
          },
        },
        {
          id: "econ-u1-metq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If an economic model's prediction is contradicted by real-world data, economists should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore the data" },
              { id: "b", text: "Revise the model or its assumptions" },
              { id: "c", text: "Assume the data is always wrong" },
              { id: "d", text: "Stop using economics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theory testing", statement: "Evidence that contradicts predictions leads to revision of the theory." },
            ],
            steps: [
              { reasoning: "Models are tested against data; a mismatch means the model or assumptions need revision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Revise the model or its assumptions",
            commonErrors: ["Defending the model regardless of evidence."],
          },
        },
        {
          id: "econ-u1-metq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Define deductive reasoning and give one example of its use in economics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deduction", statement: "Reasoning from general principles to specific conclusions." },
            ],
            steps: [
              { reasoning: "Deduction moves from a general principle to a specific prediction.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'Consumers respond to prices' → 'a higher tax will reduce demand for the taxed good'.", marks: 1, markCode: "M" },
              { reasoning: "Valid example clearly stated earns the final mark.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deduction = general principle → specific conclusion; e.g. price incentive → demand prediction.",
            commonErrors: ["Defining deduction as data-driven reasoning."],
          },
        },
        {
          id: "econ-u1-metq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how economists use both deduction and induction in their work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deduction and induction", statement: "Theory generates hypotheses deductively; data tests them inductively." },
            ],
            steps: [
              { reasoning: "Deduction: start from general principles (e.g. profit maximisation) to derive predictions.", marks: 1, markCode: "M" },
              { reasoning: "Induction: collect data (surveys, statistics) to test whether predictions hold in reality.", marks: 1, markCode: "M" },
              { reasoning: "The two work together: theory → hypothesis → data → confirm or revise.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: economics needs both reasoning methods for robust conclusions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deduction generates predictions; induction tests them with data.",
            commonErrors: ["Describing only one method."],
          },
        },
        {
          id: "econ-u1-metq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why economists must use simplifying assumptions in their models, and state one risk of doing so.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Assumptions in models", statement: "Simplification is necessary but risky if assumptions are unrealistic." },
            ],
            steps: [
              { reasoning: "Real economies are too complex — millions of agents and variables — to model fully.", marks: 1, markCode: "M" },
              { reasoning: "Assumptions (e.g. ceteris paribus) isolate key relationships and make analysis tractable.", marks: 1, markCode: "M" },
              { reasoning: "Risk: if assumptions fail in reality, predictions can be wrong.", marks: 1, markCode: "M" },
              { reasoning: "Economists must therefore evaluate assumptions and test predictions against data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Assumptions make models possible; unrealistic assumptions risk wrong predictions.",
            commonErrors: ["Claiming assumptions are always harmless or always fatal."],
          },
        },
        {
          id: "econ-u1-metq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Economists disagree about whether raising the minimum wage reduces employment. One builds a model assuming perfectly competitive labour markets; another studies actual employment data after minimum wage rises.",
          parts: [
            { label: "a", prompt: "Explain how each approach uses deduction or induction.", marks: 2 },
            { label: "b", prompt: "Explain one advantage of each approach.", marks: 3 },
            { label: "c", prompt: "Evaluate how economists might resolve the disagreement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deduction vs induction", statement: "Model = deductive prediction; data study = inductive evidence." },
            ],
            steps: [
              { part: "a", reasoning: "The model approach is deductive — derives a prediction from theory (competitive markets).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The data approach is inductive — observes employment outcomes to infer the real effect.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Model advantage: clear logic, isolates the mechanism, generates testable predictions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Data advantage: reflects real-world complexity including monopsony power and informal work.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Data can reveal effects the simplified model misses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Resolution: test the model's prediction against the data; refine assumptions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Check whether competitive-market assumptions hold in the labour market studied.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: disagreement narrows when theory and evidence are combined.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Model = deduction; data study = induction. (b) Model gives clarity; data gives realism. (c) Test predictions against evidence and revise.",
            commonErrors: ["Declaring one method superior without recognising they complement each other."],
          },
        },
        {
          id: "econ-u1-metq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Unintended consequences of a policy are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main goals the policy was designed to achieve" },
              { id: "b", text: "Effects of the policy that were not foreseen by policymakers" },
              { id: "c", text: "Costs that were budgeted in advance" },
              { id: "d", text: "Benefits enjoyed by the intended recipients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unintended consequences", statement: "Effects of a policy that were not intended or predicted." },
            ],
            steps: [
              { reasoning: "Unintended consequences are unforeseen side-effects of policy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Effects of the policy that were not foreseen by policymakers",
            commonErrors: ["Confusing unintended consequences with the policy's main objectives."],
          },
        },
        {
          id: "econ-u1-metq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why real-world economic data can be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Data limitations", statement: "Data may be outdated, mismeasured or distorted by informal activity." },
            ],
            steps: [
              { reasoning: "Data can be outdated — collected before conditions changed.", marks: 1, markCode: "M" },
              { reasoning: "Measurement errors or different definitions can distort figures.", marks: 1, markCode: "M" },
              { reasoning: "Informal economic activity is often unrecorded, understating true output.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data may be outdated, mismeasured or incomplete (e.g. informal sector).",
            commonErrors: ["Claiming economic data is always accurate."],
          },
        },
        {
          id: "econ-u1-metq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An economist surveys 600 consumers to study how a recent tax change affected their spending.",
          parts: [
            { label: "a", prompt: "Identify whether this study uses induction or deduction and explain why.", marks: 2 },
            { label: "b", prompt: "Explain one advantage of collecting primary survey data.", marks: 2 },
            { label: "c", prompt: "Evaluate the limits of generalising the survey's findings.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Induction", statement: "Reasoning from observed data to general principles." },
            ],
            steps: [
              { part: "a", reasoning: "The survey is inductive — it gathers specific observations to infer general behaviour patterns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The economist is not starting from a theory but building evidence from data.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Primary data can be tailored to the exact research question and recent in time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It may capture behaviour that existing statistics miss.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sample may not represent the whole population — selection bias risk.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Respondents may misreport spending or behave differently when surveyed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: findings suggestive but should be triangulated with other data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inductive — data → general principle. (b) Tailored and current. (c) Sampling and reporting biases limit generalisation.",
            commonErrors: ["Assuming a survey automatically proves causation."],
          },
        },
        {
          id: "econ-u1-metq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between economic theory and empirical evidence, explaining how they relate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theory vs evidence", statement: "Theory = deductive framework; evidence = data testing it." },
            ],
            steps: [
              { reasoning: "Economic theory consists of models and principles derived deductively.", marks: 1, markCode: "M" },
              { reasoning: "Empirical evidence is real-world data used to test those theories.", marks: 1, markCode: "M" },
              { reasoning: "When evidence matches predictions, the theory is supported; mismatches force revision.", marks: 1, markCode: "M" },
              { reasoning: "They are complementary — neither alone is sufficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theory generates predictions; empirical evidence tests them — together they advance economics.",
            commonErrors: ["Treating theory and evidence as competing rather than complementary."],
          },
        },
        {
          id: "econ-u1-metq16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the usefulness of economic forecasting given the unpredictability of human behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forecasting limits", statement: "Models simplify and human behaviour is hard to predict." },
            ],
            steps: [
              { reasoning: "Forecasts are useful — they guide government, business and investment decisions.", marks: 1, markCode: "M" },
              { reasoning: "But models rely on assumptions that may not hold, reducing accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Human behaviour is complex and can change suddenly (e.g. shocks, expectations).", marks: 1, markCode: "R" },
              { reasoning: "Reasoned judgement: forecasts are valuable but inherently uncertain — best treated as probable scenarios.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Forecasting is useful for planning but limited by behavioural unpredictability and model assumptions.",
            commonErrors: ["Claiming forecasts are either perfectly accurate or useless."],
          },
        },
      ],
    },
  ],
};
