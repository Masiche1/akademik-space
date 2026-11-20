import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olcs-u6-lesson-6-3",
  code: "6-3",
  title: "Artificial Intelligence",
  goal: "I CAN describe AI, its main characteristics and how AI systems operate.",
  standards: ["2210 6.3.1", "2210 6.3.2", "2210 6.3.3"],
  vocabulary: [
    { term: "Artificial intelligence (AI)", definition: "Computer systems performing tasks that normally need human intelligence." },
    { term: "Machine learning", definition: "AI technique where systems learn patterns from data rather than explicit rules." },
    { term: "Neural network", definition: "Computing model inspired by the brain — layers of connected nodes learning patterns." },
    { term: "Training data", definition: "Examples fed to an AI system so it can learn patterns." },
    { term: "Algorithm", definition: "Step-by-step procedure a computer follows to solve a problem." },
    { term: "Expert system", definition: "AI system emulating a human expert's decision-making in a narrow domain." },
  ],
  concepts: [
    {
      id: "olcs-u6-ai-basics",
      title: "What is AI",
      skill: "Define AI, distinguish it from conventional programming, and describe its characteristics.",
      lesson: {
        sections: [
          { heading: "AI vs conventional programs", body: "A conventional program follows explicit rules written by a programmer — same input always gives same output. **AI** systems learn patterns from **training data** and make decisions/probabilistic outputs — they can handle ambiguous, unstructured inputs (images, speech, text)." },
          { heading: "Main characteristics", body: "- **Learning**: improves with more data/experience.\n- **Pattern recognition**: identifies objects, faces, spam, fraud.\n- **Decision-making**: chooses actions under uncertainty.\n- **Adaptation**: adjusts behaviour based on new information.\n- **Narrow vs general**: most AI is narrow (one task); general AI (human-level across all tasks) doesn't exist yet." },
          { heading: "How AI systems work", body: "1. Collect large amounts of training data.\n2. A model (e.g. neural network) learns patterns by adjusting internal weights.\n3. The trained model makes predictions/decisions on new inputs.\n4. Feedback improves the model over time." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does a spam filter use AI?",
          solution: "It was trained on thousands of labelled emails (spam/not spam) to learn patterns; it then classifies new emails by likelihood.",
        },
      },
      questions: [
        {
          id: "olcs-u6-ai-q1", difficulty: "foundation", totalMarks: 1,
          stem: "AI differs from conventional programming because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Learns patterns from data" }, { id: "b", text: "Uses no electricity" }, { id: "c", text: "Is always right" }, { id: "d", text: "Needs no data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "AI", statement: "Learns from data vs fixed rules." }], steps: [{ reasoning: "AI learns patterns.", working: "\\text{learn}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Learns from data" },
        },
        {
          id: "olcs-u6-ai-q2", difficulty: "core", totalMarks: 2,
          stem: "What is training data in an AI system?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Training data", statement: "Examples the AI learns from." }], steps: [
            { reasoning: "Data used to train the model.", working: "\\text{examples}", marks: 1, markCode: "M" },
            { reasoning: "Teaches patterns.", marks: 1, markCode: "A" },
          ], finalAnswer: "Examples fed to the AI so it can learn patterns." },
        },
        {
          id: "olcs-u6-ai-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a neural network 'learns' from training data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Neural learning", statement: "Adjust weights to reduce errors." }], steps: [
            { reasoning: "Input passes through layers of nodes.", working: "\\text{layers}", marks: 1, markCode: "M" },
            { reasoning: "Compare output to correct answer; measure error.", working: "\\text{error}", marks: 1, markCode: "M" },
            { reasoning: "Adjust internal weights to reduce error.", working: "\\text{weights}", marks: 1, markCode: "M" },
            { reasoning: "Repeat until accurate.", marks: 1, markCode: "A" },
          ], finalAnswer: "It adjusts internal weights across layers to minimise errors on training examples." },
        },
        {
          id: "olcs-u6-ai-q4", difficulty: "challenge", totalMarks: 9,
          stem: "AI fundamentals review.",
          parts: [
            { label: "a", prompt: "Define artificial intelligence.", marks: 2 },
            { label: "b", prompt: "Distinguish AI from conventional programs.", marks: 2 },
            { label: "c", prompt: "Define machine learning.", marks: 2 },
            { label: "d", prompt: "Explain why AI needs large amounts of training data.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Machine learning", statement: "Learning patterns from data." },
          ], steps: [
            { part: "a", reasoning: "Systems doing tasks needing human intelligence.", working: "\\text{human-like}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Conventional: fixed rules.", working: "\\text{rules}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "AI: learns patterns from data.", working: "\\text{patterns}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "AI technique learning from data, not rules.", working: "\\text{ML}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "More data → better pattern coverage.", working: "\\text{coverage}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reduces bias/errors.", working: "\\text{accuracy}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Enables generalisation to new cases.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) human-intelligence tasks (b) rules vs learning (c) learn from data (d) better patterns/accuracy" },
        },
      ],
    },
    {
      id: "olcs-u6-ai-systems",
      title: "How AI systems operate",
      skill: "Describe the components and operation of AI systems including expert systems.",
      lesson: {
        sections: [
          { heading: "AI system components", body: "- **Input**: data from sensors, text, images, users.\n- **Knowledge/model**: trained neural network, rules, or database.\n- **Processing**: algorithms analyse input against the model.\n- **Output**: predictions, decisions, recommendations, actions.\n- **Learning loop**: feedback on outcomes improves the model." },
          { heading: "Expert systems", body: "A type of AI that emulates a human expert's decision-making in a narrow field. Contains:\n\n- a **knowledge base** of facts/rules\n- an **inference engine** applying rules to reach conclusions\n\nUsed in medicine (diagnosis), finance, engineering — explainable but limited to their domain." },
          { heading: "Limitations", body: "AI can be biased by training data, make confident mistakes, lacks true understanding, and raises ethical issues (privacy, job displacement, autonomous decisions)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does a medical expert system diagnose?",
          solution: "It takes symptoms as input, applies rules from its knowledge base via the inference engine, and outputs a likely diagnosis with reasoning.",
        },
      },
      questions: [
        {
          id: "olcs-u6-as-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An expert system consists of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A knowledge base and inference engine" }, { id: "b", text: "Only a database" }, { id: "c", text: "A robot arm" }, { id: "d", text: "A web browser" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Expert system", statement: "Knowledge base + inference engine." }], steps: [{ reasoning: "Expert system = KB + engine.", working: "\\text{KB+engine}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Knowledge base + inference engine" },
        },
        {
          id: "olcs-u6-as-q2", difficulty: "core", totalMarks: 2,
          stem: "State the role of the inference engine in an expert system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Inference engine", statement: "Applies rules to reach conclusions." }], steps: [
            { reasoning: "Applies rules to inputs.", working: "\\text{apply rules}", marks: 1, markCode: "M" },
            { reasoning: "Produces conclusions/diagnoses.", marks: 1, markCode: "A" },
          ], finalAnswer: "It applies the knowledge base's rules to the input to reach conclusions." },
        },
        {
          id: "olcs-u6-as-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one limitation of AI systems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "AI limits", statement: "Bias, errors, no true understanding." }], steps: [
            { reasoning: "Can be biased by training data.", working: "\\text{bias}", marks: 1, markCode: "M" },
            { reasoning: "May make confident mistakes.", working: "\\text{errors}", marks: 1, markCode: "M" },
            { reasoning: "Lacks genuine understanding/awareness.", marks: 1, markCode: "M" },
            { reasoning: "Clear limitation.", marks: 1, markCode: "A" },
          ], finalAnswer: "AI can be biased by data, make confident errors, and lacks true understanding." },
        },
        {
          id: "olcs-u6-as-q4", difficulty: "challenge", totalMarks: 9,
          stem: "AI systems review.",
          parts: [
            { label: "a", prompt: "List the main components of an AI system.", marks: 3 },
            { label: "b", prompt: "Define an expert system.", marks: 2 },
            { label: "c", prompt: "State the role of the knowledge base.", marks: 2 },
            { label: "d", prompt: "Give one ethical concern about AI.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Knowledge base", statement: "Facts/rules the system uses." },
          ], steps: [
            { part: "a", reasoning: "Input/model/processing/output.", working: "\\text{components}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second component.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Third component.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "AI emulating human expert decisions.", working: "\\text{expert}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "In a narrow domain.", working: "\\text{narrow}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Stores facts and rules.", working: "\\text{facts+rules}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Used by inference engine.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Bias/privacy/job loss/autonomy.", working: "\\text{ethics}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid concern.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) input/model/output (b) expert emulation (c) facts+rules (d) bias/privacy/jobs" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u6-6-3-notes", title: "Artificial intelligence — notes", summary: "AI vs conventional, machine learning, expert systems, limitations.",
      sections: [
        { heading: "AI", body: "Learns patterns from training data vs fixed rules. Neural networks adjust weights to minimise error." },
        { heading: "Expert systems", body: "Knowledge base + inference engine emulating expert decisions in narrow domains." },
        { heading: "Limits", body: "Bias, confident errors, no true understanding; ethical concerns." },
      ] },
  ],
};
