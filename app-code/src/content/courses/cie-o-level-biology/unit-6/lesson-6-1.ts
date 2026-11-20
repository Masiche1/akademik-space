import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olbio-u6-lesson-6-1",
  code: "6-1",
  title: "Homeostasis and Temperature Control",
  goal: "I CAN explain homeostasis, negative feedback, and how the body regulates temperature.",
  standards: ["5090 6.1", "5090 6.2"],
  vocabulary: [
    { term: "Homeostasis", definition: "Maintenance of a stable internal environment despite external changes." },
    { term: "Negative feedback", definition: "Mechanism where a change triggers responses that reverse the change, keeping conditions stable." },
    { term: "Thermoregulation", definition: "Control of body temperature within a narrow range (~37°C)." },
    { term: "Vasodilation", definition: "Widening of blood vessels near skin surface → more heat loss." },
    { term: "Vasoconstriction", definition: "Narrowing of blood vessels near skin → less heat loss." },
    { term: "Sweating", definition: "Evaporation of sweat from skin surface cools the body." },
    { term: "Shivering", definition: "Involuntary muscle contractions that generate heat." },
  ],
  concepts: [
    {
      id: "olbio-u6-homeostasis",
      title: "Homeostasis and negative feedback",
      skill: "Define homeostasis and explain how negative feedback maintains stable conditions.",
      lesson: {
        sections: [
          {
            heading: "What is homeostasis?",
            body: "Cells need stable conditions: temperature ~37°C, blood glucose ~90 mg/dL, water/salt balance, pH ~7.4. Homeostasis keeps these within narrow limits using receptors, coordinators (brain/pancreas) and effectors.",
          },
          {
            heading: "Negative feedback loop",
            body: "1. **Receptor** detects change (e.g. temp rises).\n2. **Coordinator** (hypothalamus) processes it.\n3. **Effector** responds (sweat glands, muscles).\n4. Change is **reversed** → back to set point.\n\nThe response opposes the original change — hence 'negative'.",
          },
          {
            heading: "Examples",
            body: "- Temperature control (below).\n- Blood glucose control (insulin/glucagon — lesson 6-2).\n- Water balance (ADH/kidney).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is the feedback called 'negative'?",
          solution: "Because the response opposes/reverses the original change, returning the variable to its set point — it does not amplify it.",
        },
      },
      questions: [
        {
          id: "olbio-u6-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homeostasis is the maintenance of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A stable internal environment" },
              { id: "b", text: "A constant external temperature" },
              { id: "c", text: "Maximum growth rate" },
              { id: "d", text: "High blood pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal conditions despite external changes." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{stable internal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A stable internal environment",
            commonErrors: ["Choosing 'constant external' — homeostasis is about INTERNAL stability."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the three components of a negative feedback loop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feedback loop", statement: "Receptor detects → coordinator processes → effector responds." },
            ],
            steps: [
              { reasoning: "Give the components.", working: "\\text{receptor, coordinator, effector}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor (detects change), coordinator (processes), effector (produces response).",
            commonErrors: ["Including 'stimulus' as separate — stimulus is the initial change."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by 'negative feedback' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative feedback", statement: "Response opposes the change, returning variable to set point." },
            ],
            steps: [
              { reasoning: "Define: response reverses the change.", working: "\\text{opposes change}", marks: 1, markCode: "M" },
              { reasoning: "Result: returns to set point/stable.", working: "\\text{set point}", marks: 1, markCode: "M" },
              { reasoning: "Give example (temperature, glucose, water).", working: "\\text{e.g. temperature}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A mechanism where a detected change triggers a response that reverses it, maintaining a stable set point — e.g. sweating when too hot.",
            commonErrors: ["Describing positive feedback (which amplifies — not O Level focus)."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the negative feedback loop for body temperature control.",
          parts: [
            { label: "a", prompt: "Identify the receptor and coordinator.", marks: 2 },
            { label: "b", prompt: "Describe the response when body temperature rises.", marks: 4 },
            { label: "c", prompt: "Describe the response when body temperature falls.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation", statement: "Hypothalamus detects; effectors: sweat glands, blood vessels, muscles." },
            ],
            steps: [
              { part: "a", reasoning: "Receptor: skin/temperature sensors. Coordinator: hypothalamus.", working: "\\text{hypothalamus}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sweat glands produce sweat → evaporation cools.", working: "\\text{sweating}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vasodilation → more blood to skin → heat loss.", working: "\\text{vasodilation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hairs lie flat.", working: "\\text{hairs flat}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete response.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vasoconstriction → less heat loss.", working: "\\text{vasoconstriction}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shivering → muscle contractions generate heat.", working: "\\text{shivering}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hairs stand up (insulation).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) receptors/hypothalamus (b) sweat, vasodilate, hairs flat (c) vasoconstrict, shiver, hairs erect",
            commonErrors: ["Mixing up vasodilation (hot) and vasoconstriction (cold)."],
          },
        },
      ],
    },
    {
      id: "olbio-u6-temperature",
      title: "Temperature regulation",
      skill: "Describe how the body responds to overheating and overcooling.",
      lesson: {
        sections: [
          {
            heading: "Too hot",
            body: "- **Sweating**: sweat evaporates, taking heat from skin.\n- **Vasodilation**: blood vessels near skin widen → more heat radiated.\n- **Hairs lie flat**: less insulation.\n- (In humans also: behavioural — seek shade, remove clothing.)",
          },
          {
            heading: "Too cold",
            body: "- **Vasoconstriction**: blood vessels near skin narrow → less heat lost.\n- **Shivering**: muscles contract rapidly → heat generated.\n- **Hairs stand up**: trap insulating air layer.\n- (Also: behavioural — huddle, exercise, warm clothing.)",
          },
          {
            heading: "Why it matters",
            body: "Enzymes work best at ~37°C; too hot denatures them, too cold slows reactions. Temperature must stay within a narrow range.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do we shiver when cold?",
          solution: "Shivering is involuntary muscle contraction that generates heat through respiration, warming the body.",
        },
      },
      questions: [
        {
          id: "olbio-u6-temperature-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response helps cool the body when hot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vasodilation" },
              { id: "b", text: "Vasoconstriction" },
              { id: "c", text: "Shivering" },
              { id: "d", text: "Hairs standing up" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling response", statement: "Vasodilation + sweating when hot." },
            ],
            steps: [
              { reasoning: "Recall the response.", working: "\\text{vasodilation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vasodilation",
            commonErrors: ["Choosing shivering — that's for cold."],
          },
        },
        {
          id: "olbio-u6-temperature-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two responses of the body to cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cold responses", statement: "Vasoconstriction, shivering, hairs erect." },
            ],
            steps: [
              { reasoning: "Give two responses.", working: "\\text{vasoconstrict, shiver, hairs}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vasoconstriction (reduces heat loss), shivering (generates heat), hairs stand up (insulation).",
            commonErrors: ["Listing sweating — that's a heat response."],
          },
        },
        {
          id: "olbio-u6-temperature-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sweating helps to cool the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sweating", statement: "Evaporation of sweat takes latent heat from skin." },
            ],
            steps: [
              { reasoning: "Sweat glands secrete sweat onto skin.", working: "\\text{sweat on skin}", marks: 1, markCode: "M" },
              { reasoning: "Evaporation requires heat energy.", working: "\\text{evaporation}", marks: 1, markCode: "M" },
              { reasoning: "Heat taken from skin/body → cooling.", working: "\\text{heat removed}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sweat evaporates from the skin surface; evaporation requires heat energy which is taken from the body, lowering skin temperature.",
            commonErrors: ["Saying 'sweat is cold' — it's the evaporation that cools."],
          },
        },
        {
          id: "olbio-u6-temperature-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the body's responses to overheating and overcooling.",
          parts: [
            { label: "a", prompt: "List two responses to overheating.", marks: 2 },
            { label: "b", prompt: "List two responses to overcooling.", marks: 2 },
            { label: "c", prompt: "Explain the purpose of each response in terms of heat loss/gain.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation", statement: "Hot: increase heat loss (sweat, vasodilate). Cold: decrease heat loss + generate heat (vasoconstrict, shiver)." },
            ],
            steps: [
              { part: "a", reasoning: "Two hot responses.", working: "\\text{sweating, vasodilation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two cold responses.", working: "\\text{vasoconstriction, shivering}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sweating: evaporation removes heat.", working: "\\text{evaporative cooling}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vasodilation: more blood to skin → radiates heat.", working: "\\text{more heat loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vasoconstriction: less blood to skin → less heat loss.", working: "\\text{less heat loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shivering: muscle activity generates heat.", working: "\\text{heat generation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sweating, vasodilation (b) vasoconstriction, shivering (c) explained heat loss/gain mechanisms",
            commonErrors: ["In (c) not distinguishing heat LOSS (hot responses) from heat CONSERVATION+GENERATION (cold responses)."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u6-homeostasis-notes",
      title: "Homeostasis and temperature — revision notes",
      summary: "Negative feedback, thermoregulation responses.",
      sections: [
        {
          heading: "Negative feedback",
          body: "Receptor detects change → coordinator processes → effector responds → change reversed → set point restored. Examples: temperature, blood glucose, water balance.",
        },
        {
          heading: "Temperature",
          body: "Hot: sweating (evaporative cooling), vasodilation (heat loss), hairs flat. Cold: vasoconstriction (conserve heat), shivering (generate heat), hairs erect (insulate).",
        },
        {
          heading: "Exam technique",
          body: "- Always describe the LOOP: detect → coordinate → respond → reverse.\n- Vasodilation = hot response (lose heat); vasoconstriction = cold (conserve heat).",
        },
      ],
    },
  ],
};
