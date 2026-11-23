import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "bio10-u3-lesson-3-3",
  code: "3-3",
  title: "Homeostasis and Feedback Loops",
  goal: "I CAN explain homeostasis, identify positive and negative feedback loops, and describe how organisms maintain stable internal conditions.",
  standards: ["HS-LS1-3"],
  vocabulary: [
    { term: "Homeostasis", definition: "Maintenance of stable internal conditions despite external changes." },
    { term: "Negative feedback", definition: "Feedback that opposes change, restoring set point (most common)." },
    { term: "Positive feedback", definition: "Feedback that amplifies change, moving away from set point." },
    { term: "Set point", definition: "Target value for a physiological variable (e.g., 37°C body temp)." },
    { term: "Receptor", definition: "Component detecting change in a variable." },
    { term: "Effector", definition: "Component producing response to correct the variable." },
    { term: "Thermoregulation", definition: "Maintaining body temperature within narrow range." },
  ],
  concepts: [
    {
      id: "bio10-u3-homeostasis",
      title: "Homeostasis and feedback",
      skill: "Describe negative and positive feedback loops and their roles in maintaining homeostasis.",
      lesson: {
        sections: [
          {
            heading: "What is homeostasis?",
            body: "**Homeostasis** is maintaining stable internal conditions (temperature, pH, blood glucose, water balance) despite external changes. Organisms regulate variables within narrow ranges called **set points**.",
          },
          {
            heading: "Negative feedback",
            body: "Negative feedback **opposes** change, restoring the set point. Most homeostatic mechanisms use it:\n\n1. **Receptor** detects deviation\n2. **Control center** processes information\n3. **Effector** produces response\n4. Response reduces deviation → back to set point\n\nExamples: thermoregulation, blood glucose regulation, blood pressure.",
          },
          {
            heading: "Positive feedback",
            body: "Positive feedback **amplifies** change, moving away from set point. Rare but useful for processes that need rapid completion:\n\n- **Childbirth**: oxytocin stimulates contractions → more oxytocin → stronger contractions until delivery\n- **Blood clotting**: platelets release chemicals → more platelets arrive → clot grows\n\nPositive feedback always has a stopping mechanism.",
          },
        ],
        keyFormulas: [
          { name: "Negative feedback", statement: "Opposes change → restores set point" },
          { name: "Positive feedback", statement: "Amplifies change → completes process" },
        ],
        workedExample: {
          problem: "Describe the negative feedback loop for body temperature when you get too hot.",
          solution: "Receptors in skin/hypothalamus detect high temp → hypothalamus signals sweat glands and blood vessels → sweating cools body, vasodilation increases heat loss → temp returns to 37°C.",
        },
      },
      questions: [
        {
          id: "bio10-u3-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth of an organism" },
              { id: "b", text: "Maintenance of stable internal conditions" },
              { id: "c", text: "Reproduction of cells" },
              { id: "d", text: "Movement of substances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Homeostasis", statement: "Stable internal conditions despite external changes." }],
            steps: [{ reasoning: "Homeostasis maintains stable internal environment.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Stable internal conditions",
            commonErrors: ["Confusing with equilibrium in chemistry."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-homeostasis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of positive feedback and explain why it's useful.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Positive feedback", statement: "Amplifies change to complete a process quickly." }],
            steps: [
              { reasoning: "Example: childbirth — oxytocin stimulates contractions.", marks: 1, markCode: "B" },
              { reasoning: "Contractions stimulate more oxytocin release → stronger contractions.", marks: 1, markCode: "R" },
              { reasoning: "This rapidly completes delivery; stops when baby is born.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Childbirth oxytocin loop; amplifies contractions for rapid delivery.",
            commonErrors: ["Using negative feedback example."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u3-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the negative feedback loop for blood glucose regulation after a meal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Negative feedback", statement: "High glucose → insulin → glucose uptake → back to normal." }],
            steps: [
              { reasoning: "After meal, blood glucose rises above set point (~70-100 mg/dL).", marks: 1, markCode: "B" },
              { reasoning: "Pancreas releases insulin.", marks: 1, markCode: "B" },
              { reasoning: "Insulin signals cells to uptake glucose and liver to store glycogen.", marks: 1, markCode: "R" },
              { reasoning: "Glucose returns to normal; insulin secretion decreases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High glucose → insulin → uptake/storage → normal glucose.",
            commonErrors: ["Forgetting insulin's role."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u3-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your body temperature rises above 37°C on a hot day.",
          parts: [
            { label: "a", prompt: "Identify the receptor, control center and effector in thermoregulation.", marks: 3 },
            { label: "b", prompt: "Describe two effector responses that cool the body.", marks: 3 },
            { label: "c", prompt: "Explain why this is negative feedback.", marks: 2 },
            { label: "d", prompt: "What would happen if the feedback loop failed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thermoregulation", statement: "Negative feedback maintains ~37°C." },
              { kind: "principle", name: "Feedback loop", statement: "Receptor → control → effector → response." },
            ],
            steps: [
              { reasoning: "Receptor: temperature sensors in skin and hypothalamus.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Control center: hypothalamus.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Effector: sweat glands and blood vessels.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Sweating: evaporation cools skin.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Vasodilation: blood vessels dilate, increasing heat loss.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Behavioral responses: seek shade, reduce activity.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Response opposes the change (cooling when hot), restoring set point.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "This is the definition of negative feedback.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Body temperature would rise dangerously (hyperthermia), potentially fatal.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Enzymes denature, proteins fail, organs shut down.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) receptors/hypothalamus/sweat glands+vessels (b) sweating+vasodilation (c) opposes change (d) hyperthermia.",
            commonErrors: ["Confusing positive and negative feedback."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u3-thermoregulation",
      title: "Thermoregulation and osmoregulation",
      skill: "Describe how organisms regulate temperature and water balance.",
      lesson: {
        sections: [
          {
            heading: "Thermoregulation",
            body: "**Endotherms** (birds, mammals) generate internal heat; **ectotherms** (reptiles, amphibians) rely on environment. Humans maintain ~37°C via:\n\n- **Too hot**: sweating, vasodilation, behavioral cooling\n- **Too cold**: shivering, vasoconstriction, behavioral warming (huddling, clothing)",
          },
          {
            heading: "Osmoregulation",
            body: "Maintaining water and solute balance:\n\n- **Kidneys**: filter blood, reabsorb water/nutrients, excrete waste\n- **Antidiuretic hormone (ADH)**: controls water reabsorption\n- **Aldosterone**: regulates sodium/potassium\n\nFreshwater organisms excrete dilute urine; marine organisms conserve water.",
          },
          {
            heading: "Other homeostatic systems",
            body: "- **Blood pH**: buffers + respiratory/kidney compensation (7.35-7.45)\n- **Blood pressure**: baroreceptors, RAAS system\n- **Calcium**: parathyroid hormone, vitamin D, calcitonin",
          },
        ],
        keyFormulas: [
          { name: "Endotherm", statement: "Generates internal heat (birds, mammals)" },
          { name: "Osmoregulation", statement: "Kidneys regulate water and solute balance" },
        ],
        workedExample: {
          problem: "How does the body respond to dehydration?",
          solution: "Low water → hypothalamus detects → ADH released → kidneys reabsorb more water → concentrated urine → water conserved.",
        },
      },
      questions: [
        {
          id: "bio10-u3-thermoregulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between endotherms and ectotherms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endotherms are cold-blooded" },
              { id: "b", text: "Endotherms generate internal heat; ectotherms rely on environment" },
              { id: "c", text: "Ectotherms are warm-blooded" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Endothermy", statement: "Endotherms generate heat internally; ectotherms use environment." }],
            steps: [{ reasoning: "Endotherms (birds, mammals) produce their own heat; ectotherms (reptiles) depend on environment.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Internal heat generation",
            commonErrors: ["Reversing the terms."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-thermoregulation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two mechanisms the body uses to cool down when overheated.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cooling mechanisms", statement: "Sweating and vasodilation increase heat loss." }],
            steps: [
              { reasoning: "Sweating: sweat evaporates from skin, cooling it.", marks: 1, markCode: "B" },
              { reasoning: "Vasodilation: blood vessels near skin dilate, releasing heat.", marks: 1, markCode: "B" },
              { reasoning: "Both increase heat loss to restore 37°C.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Sweating and vasodilation.",
            commonErrors: ["Listing warming mechanisms."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u3-thermoregulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antidiuretic hormone (ADH) regulates water balance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "ADH", statement: "Increases water reabsorption in kidneys." }],
            steps: [
              { reasoning: "Dehydration or high blood solute triggers ADH release from pituitary.", marks: 1, markCode: "R" },
              { reasoning: "ADH makes kidney tubules more permeable to water.", marks: 1, markCode: "B" },
              { reasoning: "More water reabsorbed → concentrated urine → water conserved.", marks: 1, markCode: "B" },
              { reasoning: "When hydrated, ADH decreases → dilute urine.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ADH increases water reabsorption; concentrated urine when dehydrated.",
            commonErrors: ["Thinking ADH causes water loss."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u3-thermoregulation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A person exercises vigorously on a hot day.",
          parts: [
            { label: "a", prompt: "Describe two thermoregulatory responses.", marks: 3 },
            { label: "b", prompt: "Explain why sweating is less effective in high humidity.", marks: 3 },
            { label: "c", prompt: "How does the body conserve water during exercise?", marks: 2 },
            { label: "d", prompt: "What happens if thermoregulation fails completely?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thermoregulation", statement: "Sweating, vasodilation, behavioral responses." },
              { kind: "principle", name: "Humidity effect", statement: "High humidity reduces evaporation rate." },
            ],
            steps: [
              { reasoning: "Sweating increases for evaporative cooling.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Vasodilation releases heat from skin.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Behavioral: seek shade, reduce activity, hydrate.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "High humidity means air already saturated with water vapor.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Evaporation requires water to evaporate; saturated air slows this.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Less cooling → body temperature rises despite sweating.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "ADH increases water reabsorption; thirst triggers drinking.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Kidneys produce concentrated urine to conserve water.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Hyperthermia: body temp rises dangerously.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Enzyme denaturation, organ failure, death if untreated.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) sweating/vasodilation/behavioral (b) humidity slows evaporation (c) ADH+thirst (d) hyperthermia.",
            commonErrors: ["Thinking sweating always cools."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
