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
            { id: "a", text: "Needs no data" },
            { id: "b", text: "Is always right" },
            { id: "c", text: "Uses no electricity" },
            { id: "d", text: "Learns patterns from data" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u6-ai-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Machine learning is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of robot" },
            { id: "b", text: "A network cable" },
            { id: "c", text: "An AI technique that learns patterns from data" },
            { id: "d", text: "A database" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Machine learning", statement: "Learning from data." }], steps: [{ reasoning: "ML learns patterns from data.", working: "\\text{learn}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Learns from data" },
        },
        {
          id: "olcs-u6-ai-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many main characteristics of AI are described: learning, pattern recognition, decision-making, adaptation, narrow vs general?",
          response: { type: "numeric", parts: [{ label: "Number of characteristics", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "AI characteristics", statement: "Five listed." }], steps: [
            { reasoning: "Five characteristics named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u6-ai-q7", difficulty: "core", totalMarks: 1,
          stem: "Training data is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Examples the AI learns patterns from" },
            { id: "b", text: "A password" },
            { id: "c", text: "A type of hardware" },
            { id: "d", text: "The final output" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Training data", statement: "Examples used to learn." }], steps: [{ reasoning: "Training data teaches the model.", working: "\\text{examples}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Examples it learns from" },
        },
        {
          id: "olcs-u6-ai-q8", difficulty: "core", totalMarks: 1,
          stem: "How many steps are in the AI workflow: collect training data, learn patterns, make predictions, improve with feedback?",
          response: { type: "numeric", parts: [{ label: "Workflow steps", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "AI workflow", statement: "Data → learn → predict → improve." }], steps: [
            { reasoning: "Four steps listed.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u6-ai-q9", difficulty: "core", totalMarks: 1,
          stem: "A neural network is a computing model inspired by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The human brain" },
            { id: "b", text: "A web browser" },
            { id: "c", text: "A calculator" },
            { id: "d", text: "A robot arm" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Neural network", statement: "Brain-inspired layered nodes." }], steps: [{ reasoning: "Neural networks mimic the brain.", working: "\\text{brain}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** The human brain" },
        },
        {
          id: "olcs-u6-ai-q10", difficulty: "core", totalMarks: 2,
          stem: "State two ways AI differs from conventional programs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "AI vs conventional", statement: "Learns vs fixed rules." }], steps: [
            { reasoning: "AI learns patterns from data; conventional follows fixed rules.", working: "\\text{learn vs rules}", marks: 1, markCode: "M" },
            { reasoning: "AI handles ambiguous/unstructured input.", working: "\\text{unstructured}", marks: 1, markCode: "A" },
          ], finalAnswer: "AI learns from data and handles unstructured input; conventional programs use fixed rules." },
        },
        {
          id: "olcs-u6-ai-q11", difficulty: "challenge", totalMarks: 1,
          stem: "AI system outputs are often described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rule-based only" },
            { id: "b", text: "Probabilistic, not guaranteed correct" },
            { id: "c", text: "Always correct" },
            { id: "d", text: "Manual decisions" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "AI outputs", statement: "Predictions can be wrong." }], steps: [{ reasoning: "AI gives likely answers, not certainty.", working: "\\text{probability}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Probabilistic, not guaranteed" },
        },
        {
          id: "olcs-u6-ai-q12", difficulty: "core", totalMarks: 1,
          stem: "A typical neural network has input, hidden and output layers. How many layers is that?",
          response: { type: "numeric", parts: [{ label: "Number of layers", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Neural network", statement: "Layered nodes." }], steps: [
            { reasoning: "Input + hidden + output = 3 layers.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u6-ai-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why AI systems need large amounts of training data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Training data", statement: "More data → better learning." }], steps: [
            { reasoning: "More data covers more patterns.", working: "\\text{coverage}", marks: 1, markCode: "M" },
            { reasoning: "Improves accuracy and reduces bias.", working: "\\text{accuracy}", marks: 1, markCode: "M" },
            { reasoning: "Enables generalisation to new cases.", working: "\\text{generalise}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Large training data improves pattern coverage, accuracy and the ability to generalise." },
        },
        {
          id: "olcs-u6-ai-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Most current AI systems are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Conscious" },
            { id: "b", text: "Perfect" },
            { id: "c", text: "Narrow — good at one specific task" },
            { id: "d", text: "General human-level intelligence" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Narrow AI", statement: "One-task specialists." }], steps: [{ reasoning: "Today's AI is narrow, not general.", working: "\\text{narrow}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Narrow AI" },
        },
        {
          id: "olcs-u6-ai-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many steps are in the AI workflow and how many main characteristics of AI are described.",
          response: { type: "numeric", parts: [
            { label: "Workflow steps", answer: 4 },
            { label: "Characteristics", answer: 5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "AI basics", statement: "4 steps; 5 characteristics." }], steps: [
            { reasoning: "Collect, learn, predict, improve.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Learning, recognition, decisions, adaptation, narrow/general.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "4 steps; 5 characteristics" },
        },
        {
          id: "olcs-u6-ai-q16", difficulty: "challenge", totalMarks: 9,
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
            { part: "d", reasoning: "Enables generalisation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) human-intelligence tasks (b) rules vs learning (c) learn from data (d) better patterns" },
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
            { id: "a", text: "A web browser" },
            { id: "b", text: "Only a database" },
            { id: "c", text: "A knowledge base and inference engine" },
            { id: "d", text: "A robot arm" },
          ], correctChoiceId: "c" },
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
        {
          id: "olcs-u6-as-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An expert system consists of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A robot arm" },
            { id: "b", text: "Only a database" },
            { id: "c", text: "A web browser" },
            { id: "d", text: "A knowledge base and an inference engine" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Expert system", statement: "Knowledge base + inference engine." }], steps: [{ reasoning: "Expert system = KB + engine.", working: "\\text{KB+engine}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Knowledge base + inference engine" },
        },
        {
          id: "olcs-u6-as-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many components does an AI system have: input, knowledge/model, processing, output, learning loop?",
          response: { type: "numeric", parts: [{ label: "Number of components", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "AI components", statement: "Input, model, processing, output, learning." }], steps: [
            { reasoning: "Five components named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u6-as-q7", difficulty: "core", totalMarks: 1,
          stem: "The inference engine in an expert system…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Applies rules to reach conclusions" },
            { id: "b", text: "Sends emails" },
            { id: "c", text: "Stores the facts" },
            { id: "d", text: "Displays web pages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Inference engine", statement: "Applies rules to inputs." }], steps: [{ reasoning: "Inference engine applies rules.", working: "\\text{apply rules}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Applies rules to reach conclusions" },
        },
        {
          id: "olcs-u6-as-q8", difficulty: "core", totalMarks: 1,
          stem: "How many main parts make up an expert system: a knowledge base and an inference engine?",
          response: { type: "numeric", parts: [{ label: "Number of parts", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Expert system", statement: "Two main parts." }], steps: [
            { reasoning: "Knowledge base + inference engine = 2.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u6-as-q9", difficulty: "core", totalMarks: 1,
          stem: "Expert systems are best suited to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Creative writing" },
            { id: "b", text: "Narrow domains like medical diagnosis" },
            { id: "c", text: "Driving cars" },
            { id: "d", text: "Every possible task" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Expert systems", statement: "Narrow, rule-based domains." }], steps: [{ reasoning: "Expert systems work in narrow domains.", working: "\\text{narrow}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Narrow domains" },
        },
        {
          id: "olcs-u6-as-q10", difficulty: "core", totalMarks: 2,
          stem: "State two limitations of AI systems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "AI limits", statement: "Bias, errors, no understanding." }], steps: [
            { reasoning: "Any two: bias from data, confident mistakes, no true understanding.", working: "\\text{bias}", marks: 1, markCode: "M" },
            { reasoning: "Second valid limitation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Bias, confident errors, lack of true understanding (any two)." },
        },
        {
          id: "olcs-u6-as-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Bias in AI systems mainly comes from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unrepresentative training data" },
            { id: "b", text: "Slow processors" },
            { id: "c", text: "Small screens" },
            { id: "d", text: "Too much electricity" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "AI bias", statement: "Training data shapes outputs." }], steps: [{ reasoning: "Biased data → biased AI.", working: "\\text{data}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Unrepresentative training data" },
        },
        {
          id: "olcs-u6-as-q12", difficulty: "core", totalMarks: 1,
          stem: "An AI system takes input, processes it against a model, and produces output. Excluding the learning loop, how many main processing components are there?",
          response: { type: "numeric", parts: [{ label: "Processing components", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "AI flow", statement: "Input → model → output." }], steps: [
            { reasoning: "Input, processing/model, output = 3.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u6-as-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why expert systems are 'explainable' yet limited.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Expert systems", statement: "Rule-based = inspectable." }], steps: [
            { reasoning: "Rules can be inspected, so reasoning can be shown.", working: "\\text{rules}", marks: 1, markCode: "M" },
            { reasoning: "Limited to their programmed domain.", working: "\\text{domain}", marks: 1, markCode: "M" },
            { reasoning: "Can't handle cases outside the rules.", working: "\\text{outside rules}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Their rules are inspectable so conclusions can be explained, but they only work within their narrow domain." },
        },
        {
          id: "olcs-u6-as-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A key ethical concern about AI is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bigger files" },
            { id: "b", text: "Faster loading" },
            { id: "c", text: "More colours" },
            { id: "d", text: "Privacy and job displacement" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "AI ethics", statement: "Privacy, jobs, autonomy." }], steps: [{ reasoning: "Privacy and job loss are key concerns.", working: "\\text{ethics}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Privacy and job displacement" },
        },
        {
          id: "olcs-u6-as-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many main parts an expert system has and how many components an AI system has.",
          response: { type: "numeric", parts: [
            { label: "Expert system parts", answer: 2 },
            { label: "AI system components", answer: 5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "AI structures", statement: "2 parts; 5 components." }], steps: [
            { reasoning: "Knowledge base + inference engine.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Input, model, processing, output, learning loop.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "2 parts; 5 components" },
        },
        {
          id: "olcs-u6-as-q16", difficulty: "challenge", totalMarks: 9,
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
            { part: "c", reasoning: "Used by the inference engine.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Bias/privacy/job loss/autonomy.", working: "\\text{ethics}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid concern.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) components (b) expert emulation (c) facts+rules (d) ethics" },
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
