import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cieb-u6-lesson-6-1",
  code: "6-1",
  title: "Homeostasis and Temperature Control",
  goal: "I CAN explain homeostasis, negative feedback, and how the body regulates temperature.",
  standards: ["0653 6.1", "0653 6.2"],
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
      id: "cieb-u6-homeostasis",
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
          id: "cieb-u6-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homeostasis is the maintenance of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A stable internal environment" },
              { id: "b", text: "A constant external temperature" },
              { id: "c", text: "High blood pressure" },
              { id: "d", text: "Maximum growth rate" },
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
          id: "cieb-u6-homeostasis-q2",
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
          id: "cieb-u6-homeostasis-q3",
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
            commonErrors: ["Describing positive feedback (which amplifies — not IGCSE focus)."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q4",
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
        {
          id: "cieb-u6-homeostasis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homeostasis is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum rate of growth" },
              { id: "b", text: "Keeping the external temperature constant" },
              { id: "c", text: "Maintenance of stable internal conditions despite external changes" },
              { id: "d", text: "Maintaining high blood pressure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal conditions despite changes in the external environment." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{stable internal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Maintenance of stable internal conditions despite external changes",
            commonErrors: ["Choosing 'external temperature' — homeostasis concerns the INTERNAL environment."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Normal blood glucose is about 90 mg/dL. A reading of 72 mg/dL is how many mg/dL below normal?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18, unit: "mg/dL" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood glucose set point", statement: "Normal fasting glucose ≈ 90 mg/dL." },
            ],
            steps: [
              { reasoning: "Subtract the reading from the set point.", working: "90 - 72", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 18 \\text{ mg/dL}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 mg/dL below normal",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define negative feedback.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative feedback", statement: "A mechanism where a detected change triggers a response that reverses it, restoring the set point." },
            ],
            steps: [
              { reasoning: "Give the definition.", working: "\\text{response reverses change}", marks: 1, markCode: "M" },
              { reasoning: "Complete: returns to set point.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Negative feedback is a mechanism in which a change is detected and triggers a response that reverses the change, returning the variable to its set point.",
            commonErrors: ["Describing positive feedback (which amplifies the change)."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a negative feedback loop, the receptor's role is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce the response" },
              { id: "b", text: "Detect the change" },
              { id: "c", text: "Store energy" },
              { id: "d", text: "Coordinate the response" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Feedback components", statement: "Receptor detects → coordinator processes → effector responds." },
            ],
            steps: [
              { reasoning: "Match role to component.", working: "\\text{receptor detects}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Detect the change",
            commonErrors: ["Choosing 'produce the response' — that's the effector."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps of a negative feedback loop when body temperature rises above normal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature feedback", statement: "Receptors detect rise → hypothalamus coordinates → effectors (sweat glands, blood vessels) respond → temperature falls." },
            ],
            steps: [
              { reasoning: "Receptors detect the temperature rise.", working: "\\text{detect} \\uparrow T", marks: 1, markCode: "M" },
              { reasoning: "Hypothalamus coordinates the response.", working: "\\text{hypothalamus}", marks: 1, markCode: "M" },
              { reasoning: "Effectors sweat and vasodilate → temperature falls back to set point.", working: "\\text{sweat + vasodilate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature receptors detect the rise; the hypothalamus coordinates a response; sweat glands produce sweat and blood vessels near the skin dilate, increasing heat loss until temperature returns to the set point.",
            commonErrors: ["Stopping at 'the body sweats' — include the detect → coordinate → respond loop."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why homeostasis is important for cells, and what would happen if temperature regulation failed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Homeostasis importance", statement: "Cells need stable conditions; enzymes work best near 37°C and are denatured by excessive heat." },
            ],
            steps: [
              { reasoning: "Cells need stable temperature, pH, glucose etc. for enzyme-controlled reactions.", working: "\\text{stable conditions}", marks: 1, markCode: "M" },
              { reasoning: "Enzymes have an optimum temperature (~37°C).", working: "\\text{enzyme optimum}", marks: 1, markCode: "M" },
              { reasoning: "If too hot, enzymes denature; if too cold, reactions slow.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: cells cannot function properly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cells need stable internal conditions for enzyme-controlled reactions; if temperature control fails, enzymes denature when too hot or reactions slow when too cold, so cells cannot function properly and the organism may die.",
            commonErrors: ["Only saying 'it would be uncomfortable' — link to enzyme function."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structure coordinates the body's temperature response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kidney" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Stomach" },
              { id: "d", text: "Hypothalamus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature coordinator", statement: "The hypothalamus coordinates thermoregulation." },
            ],
            steps: [
              { reasoning: "Recall the coordinator.", working: "\\text{hypothalamus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Hypothalamus",
            commonErrors: ["Choosing kidney — the kidney coordinates water balance, not temperature."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When blood glucose falls below normal, the pancreas releases:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ADH" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucagon trigger", statement: "Low blood glucose → pancreas releases glucagon to raise it." },
            ],
            steps: [
              { reasoning: "Match hormone to condition.", working: "\\text{low glucose} \\to \\text{glucagon}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glucagon",
            commonErrors: ["Choosing insulin — that is released when glucose is HIGH."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production of bile" },
              { id: "b", text: "Control of blood glucose concentration" },
              { id: "c", text: "Digestion of food" },
              { id: "d", text: "Growth of hair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Homeostasis examples", statement: "Temperature, blood glucose and water balance are homeostatically controlled." },
            ],
            steps: [
              { reasoning: "Identify the regulated variable.", working: "\\text{glucose control}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Control of blood glucose concentration",
            commonErrors: ["Choosing digestion — that's a one-way process, not regulation of a set point."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaporating 1 g of sweat removes about 2.4 kJ of heat energy from the body. How much heat is removed when 10 g of sweat evaporates?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Evaporative cooling", statement: "Each gram of sweat evaporated removes ~2.4 kJ of heat." },
            ],
            steps: [
              { reasoning: "Multiply heat per gram by mass.", working: "2.4 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 24 \\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 kJ",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the negative feedback loop that maintains body temperature near 37°C.",
          parts: [
            { label: "a", prompt: "Identify the receptor and coordinator.", marks: 2 },
            { label: "b", prompt: "Describe the response when temperature rises above normal.", marks: 3 },
            { label: "c", prompt: "Describe the response when temperature falls below normal.", marks: 3 },
            { label: "d", prompt: "Explain why this is called 'negative' feedback.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation loop", statement: "Receptors + hypothalamus detect; effectors respond; change is reversed." },
            ],
            steps: [
              { part: "a", reasoning: "Receptors: temperature sensors in skin/hypothalamus. Coordinator: hypothalamus.", working: "\\text{sensors + hypothalamus}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sweat glands produce sweat (evaporative cooling).", working: "\\text{sweating}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blood vessels near skin dilate → more heat loss.", working: "\\text{vasodilation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hairs lie flat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Blood vessels constrict → less heat loss.", working: "\\text{vasoconstriction}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shivering generates heat.", working: "\\text{shivering}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hairs stand up for insulation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Response opposes/reverses the change → 'negative'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) receptors/hypothalamus (b) sweat, vasodilate, hairs flat (c) vasoconstrict, shiver, hairs erect (d) response reverses the change",
            commonErrors: ["In (d) saying 'negative means bad' — it means the response opposes the change."],
          },
        },
        {
          id: "cieb-u6-homeostasis-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Normal body temperature is 37°C. Express this temperature in degrees Fahrenheit.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 98.6, unit: "°F" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature conversion", statement: "°F = °C × 9/5 + 32." },
            ],
            steps: [
              { reasoning: "Apply the conversion formula.", working: "37 \\times \\frac{9}{5} + 32", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 98.6 \\text{ °F}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "98.6 °F",
            commonErrors: ["Multiplying by 9/5 without adding 32, or using the wrong formula."],
          },
        },
      ],
    },
    {
      id: "cieb-u6-temperature",
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
          id: "cieb-u6-temperature-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response helps cool the body when hot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vasoconstriction" },
              { id: "b", text: "Shivering" },
              { id: "c", text: "Hairs standing up" },
              { id: "d", text: "Vasodilation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling response", statement: "Vasodilation + sweating when hot." },
            ],
            steps: [
              { reasoning: "Recall the response.", working: "\\text{vasodilation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Vasodilation",
            commonErrors: ["Choosing shivering — that's for cold."],
          },
        },
        {
          id: "cieb-u6-temperature-q2",
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
          id: "cieb-u6-temperature-q3",
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
          id: "cieb-u6-temperature-q4",
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
        {
          id: "cieb-u6-temperature-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which responses help the body cool down when it is overheated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shivering and vasoconstriction" },
              { id: "b", text: "Sweating and vasodilation" },
              { id: "c", text: "Hairs standing up" },
              { id: "d", text: "Huddling together" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling responses", statement: "When hot: sweating (evaporative cooling) + vasodilation (heat loss)." },
            ],
            steps: [
              { reasoning: "Recall the hot responses.", working: "\\text{sweat + vasodilate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sweating and vasodilation",
            commonErrors: ["Choosing shivering — that's a cold response that generates heat."],
          },
        },
        {
          id: "cieb-u6-temperature-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fever raises body temperature to 40°C. Convert 40°C to degrees Fahrenheit.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 104, unit: "°F" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature conversion", statement: "°F = °C × 9/5 + 32." },
            ],
            steps: [
              { reasoning: "Apply the conversion formula.", working: "40 \\times \\frac{9}{5} + 32", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 104 \\text{ °F}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "104 °F",
            commonErrors: ["Forgetting to add 32 after scaling."],
          },
        },
        {
          id: "cieb-u6-temperature-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two responses of the body when it gets too cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cold responses", statement: "Vasoconstriction, shivering, hairs stand up." },
            ],
            steps: [
              { reasoning: "Give two responses.", working: "\\text{vasoconstrict, shiver, hairs}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vasoconstriction (reduces heat loss) and shivering (generates heat); hairs may also stand up for insulation.",
            commonErrors: ["Listing sweating — that's a heat response."],
          },
        },
        {
          id: "cieb-u6-temperature-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Vasoconstriction helps conserve heat by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrowing the blood vessels near the skin" },
              { id: "b", text: "Producing sweat" },
              { id: "c", text: "Relaxing all muscles" },
              { id: "d", text: "Widening the blood vessels near the skin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vasoconstriction", statement: "Narrowing skin vessels reduces blood flow to the surface → less heat lost." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{vessels narrow} \\to \\text{less heat loss}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Narrowing the blood vessels near the skin",
            commonErrors: ["Describing vasodilation — that increases heat loss when hot."],
          },
        },
        {
          id: "cieb-u6-temperature-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's temperature rises from 36.5°C to 38.2°C during an infection. Calculate the increase in temperature.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.7, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature change", statement: "Increase = final temperature − initial temperature." },
            ],
            steps: [
              { reasoning: "Subtract initial from final.", working: "38.2 - 36.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 1.7 \\text{ °C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.7 °C increase",
            commonErrors: ["Subtracting in the wrong order and giving a negative value."],
          },
        },
        {
          id: "cieb-u6-temperature-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how hairs on the skin help thermoregulation in both hot and cold conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hair and insulation", statement: "Erect hairs trap air (insulation) when cold; lying flat reduces insulation when hot." },
            ],
            steps: [
              { reasoning: "When cold, hairs stand up (erect).", working: "\\text{hairs erect}", marks: 1, markCode: "M" },
              { reasoning: "They trap a layer of air providing insulation.", working: "\\text{air trapped}", marks: 1, markCode: "M" },
              { reasoning: "When hot, hairs lie flat reducing insulation.", working: "\\text{hairs flat}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: helps conserve or lose heat appropriately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When cold, hairs stand erect and trap a layer of insulating air next to the skin, reducing heat loss; when hot, hairs lie flat so less insulation is trapped and heat is lost more easily.",
            commonErrors: ["Only describing the cold response — the question asks for both conditions."],
          },
        },
        {
          id: "cieb-u6-temperature-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Body temperature is kept near 37°C mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It saves energy" },
              { id: "b", text: "It prevents all infections" },
              { id: "c", text: "It matches room temperature" },
              { id: "d", text: "Enzymes work best at this temperature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enzyme optimum", statement: "Enzymes have an optimum temperature near 37°C." },
            ],
            steps: [
              { reasoning: "Recall the reason.", working: "\\text{enzyme optimum} \\approx 37\\text{°C}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Enzymes work best at this temperature",
            commonErrors: ["Choosing 'room temperature' — thermoregulation is about internal temperature."],
          },
        },
        {
          id: "cieb-u6-temperature-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the negative feedback loop that returns body temperature to normal after overheating.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling feedback", statement: "Heat detected → effectors increase heat loss → temperature falls → responses reduce." },
            ],
            steps: [
              { reasoning: "Receptors detect raised temperature.", working: "\\text{detect} \\uparrow T", marks: 1, markCode: "M" },
              { reasoning: "Sweating and vasodilation increase heat loss.", working: "\\text{heat loss} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Body temperature falls back towards set point.", working: "\\text{T} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Response reduces as normal temperature is restored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature receptors detect the rise and the hypothalamus triggers sweating and vasodilation, increasing heat loss; as the body cools back towards 37°C the responses reduce, completing the negative feedback loop.",
            commonErrors: ["Not closing the loop — mention the temperature returning to set point."],
          },
        },
        {
          id: "cieb-u6-temperature-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response generates heat when the body is cold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vasodilation" },
              { id: "b", text: "Hairs lying flat" },
              { id: "c", text: "Sweating" },
              { id: "d", text: "Shivering" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Shivering", statement: "Involuntary muscle contractions in shivering generate heat." },
            ],
            steps: [
              { reasoning: "Recall the heat-generating response.", working: "\\text{shivering} \\to \\text{heat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Shivering",
            commonErrors: ["Choosing sweating — that cools the body."],
          },
        },
        {
          id: "cieb-u6-temperature-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In hypothermia, body temperature falls from 37°C to 34.5°C. Calculate the drop in temperature.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature change", statement: "Drop = initial − final temperature." },
            ],
            steps: [
              { reasoning: "Subtract final from initial.", working: "37 - 34.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 2.5 \\text{ °C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5 °C drop",
            commonErrors: ["Subtracting in the wrong order and reporting a negative drop."],
          },
        },
        {
          id: "cieb-u6-temperature-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the body's temperature responses by measuring skin temperature and sweat production in hot and cold conditions.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the difference in sweat production between hot and cold conditions.", marks: 1 },
            { label: "c", prompt: "Explain the physiological responses in hot conditions.", marks: 3 },
            { label: "d", prompt: "Explain the physiological responses in cold conditions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation", statement: "Hot: sweat + vasodilate + hairs flat. Cold: vasoconstrict + shiver + hairs erect." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: ambient condition (hot/cold). Dependent: skin temperature/sweat production.", working: "\\text{condition vs response}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Much more sweat when hot.", working: "\\text{sweat} \\uparrow \\text{ when hot}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sweating → evaporative cooling.", working: "\\text{sweat}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vasodilation → more blood to skin → heat loss.", working: "\\text{vasodilation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hairs lie flat.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Vasoconstriction → less heat loss.", working: "\\text{vasoconstriction}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Shivering → generates heat.", working: "\\text{shivering}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Hairs stand up for insulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) hot/cold condition vs skin temperature/sweat (b) more sweat when hot (c) sweat+vasodilate+hairs flat (d) vasoconstrict+shiver+hairs erect",
            commonErrors: ["In (c)/(d) swapping the responses — check which condition each belongs to."],
          },
        },
        {
          id: "cieb-u6-temperature-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a behavioural response to cold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drinking iced water" },
              { id: "b", text: "Putting on warm clothing and huddling" },
              { id: "c", text: "Removing layers of clothing" },
              { id: "d", text: "Sitting in front of a fan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Behavioural responses", statement: "Behavioural responses include huddling, warm clothing, exercise when cold; shade/light clothing when hot." },
            ],
            steps: [
              { reasoning: "Identify the cold response.", working: "\\text{warm clothing/huddle}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Putting on warm clothing and huddling",
            commonErrors: ["Choosing fan or iced water — those are hot-weather behaviours."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u6-homeostasis-notes",
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
