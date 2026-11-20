import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypb4-u2-lesson-2-3",
  code: "2-3",
  title: "Homeostasis and Reproduction",
  goal: "I CAN describe how the body maintains homeostasis (temperature and glucose control) and compare asexual and sexual reproduction.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Homeostasis", definition: "Maintenance of stable internal conditions despite external changes." },
    { term: "Negative feedback", definition: "Mechanism where a change triggers a response that reverses the change — maintains set point." },
    { term: "Insulin", definition: "Hormone lowering blood glucose by promoting glucose uptake into cells and glycogen storage." },
    { term: "Glucagon", definition: "Hormone raising blood glucose by promoting glycogen breakdown in liver." },
    { term: "Asexual reproduction", definition: "Production of genetically identical offspring from one parent without gamete fusion." },
    { term: "Sexual reproduction", definition: "Fusion of male and female gametes producing genetically varied offspring." },
  ],
  concepts: [
    {
      id: "mypb4-u2-homeostasis",
      title: "Homeostasis: temperature and glucose",
      skill: "Explain negative feedback in thermoregulation and blood glucose control.",
      lesson: {
        sections: [
          {
            heading: "Temperature regulation",
            body: "Body temperature maintained ~37°C by hypothalamus. **Too hot**: sweat glands secrete sweat (evaporative cooling), blood vessels dilate (vasodilation) → more heat loss, hairs lie flat. **Too cold**: shivering generates heat, blood vessels constrict (vasoconstriction) → less heat loss, hairs erect trap air.",
          },
          {
            heading: "Blood glucose control",
            body: "Glucose rises after eating → **insulin** (pancreas) → cells absorb glucose, liver stores as glycogen → glucose falls. Glucose falls (fasting/exercise) → **glucagon** → liver breaks glycogen → glucose rises. Failure: diabetes (insulin deficiency/resistance → high blood glucose).",
          },
          {
            heading: "Negative feedback",
            body: "All homeostatic mechanisms are negative feedback: deviation from set point → response → return to set point → response stops. Prevents runaway change.",
          },
        ],
        keyFormulas: [
          { name: "Hot response", statement: "Sweat + vasodilation + hairs flat" },
          { name: "Cold response", statement: "Shiver + vasoconstriction + hairs erect" },
          { name: "Glucose", statement: "Insulin lowers, glucagon raises" },
        ],
        workedExample: {
          problem: "Blood glucose rises after a sugary drink. Explain the response.",
          solution: "Pancreas detects high glucose → secretes insulin → cells absorb glucose, liver stores glycogen → glucose returns to normal.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-homeo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maintaining stable internal conditions despite external changes" },
              { id: "b", text: "Growing to adult size" },
              { id: "c", text: "Repairing damaged tissues" },
              { id: "d", text: "Producing offspring" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal environment via feedback mechanisms." },
            ],
            steps: [
              { reasoning: "Homeostasis = keeping internal conditions constant.", working: "\\text{homeostasis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stable internal conditions",
            commonErrors: ["Confusing with growth or reproduction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-homeo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulin", statement: "Lowers blood glucose by promoting uptake and glycogen storage." },
            ],
            steps: [
              { reasoning: "Insulin lowers glucose; glucagon raises it.", working: "\\text{insulin}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{insulin}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin",
            commonErrors: ["Confusing insulin and glucagon."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the body's response when body temperature rises above 37°C.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sweat glands secrete sweat (evaporative cooling), blood vessels dilate to increase heat loss, hairs lie flat" },
              { id: "b", text: "Shivering increases heat production" },
              { id: "c", text: "Blood vessels constrict to trap heat" },
              { id: "d", text: "Hairs erect to trap air" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thermoregulation", statement: "Hot → cooling responses via negative feedback." },
            ],
            steps: [
              { reasoning: "Sweating + vasodilation increase heat loss.", working: "\\text{sweat,dilate}", marks: 1, markCode: "M" },
              { reasoning: "Hairs lie flat reducing insulation.", working: "\\text{hairs flat}", marks: 1, markCode: "M" },
              { reasoning: "State the responses.", working: "\\text{cooling}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sweating, vasodilation, hairs flat",
            commonErrors: ["Giving cold responses."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare asexual and sexual reproduction.",
          parts: [
            { label: "a", prompt: "Define each type of reproduction.", marks: 2 },
            { label: "b", prompt: "Compare offspring genetic variation.", marks: 2 },
            { label: "c", prompt: "Give two advantages of asexual reproduction.", marks: 2 },
            { label: "d", prompt: "Give two advantages of sexual reproduction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reproduction", statement: "Asexual = identical, fast; sexual = varied, adaptable." },
            ],
            steps: [
              { part: "a", reasoning: "Asexual: one parent, no gamete fusion → identical offspring.", working: "\\text{asexual}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sexual: gamete fusion → varied offspring.", working: "\\text{sexual}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Asexual offspring genetically identical to parent.", working: "\\text{identical}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sexual offspring varied due to meiosis + fertilization.", working: "\\text{varied}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fast — no mate needed; preserves successful genotype.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second advantage.", working: "\\text{genotype preserved}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Genetic variation → adaptability to changing environments.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evolutionary potential; avoids inbreeding depression.", working: "\\text{adaptability}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) definitions (b) identical vs varied (c) fast, preserves genotype (d) variation, adaptability",
            commonErrors: ["In (c), saying asexual creates variety."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-homeo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is negative feedback in homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A change triggers a response that reverses the change, restoring the set point" },
              { id: "b", text: "The body always heats up when cold" },
              { id: "c", text: "Conditions change randomly" },
              { id: "d", text: "Responses amplify the initial change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative feedback", statement: "Deviation from set point → corrective response → return to set point → response stops." },
            ],
            steps: [
              { reasoning: "Negative feedback counters the deviation — stabilising.", working: "\\text{reverses}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Response reverses the change",
            commonErrors: ["Confusing with positive feedback which amplifies."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-homeo-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which hormone raises blood glucose levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glucagon", statement: "Raises blood glucose by promoting glycogen breakdown in liver." },
            ],
            steps: [
              { reasoning: "Glucagon raises glucose; insulin lowers it.", working: "\\text{glucagon}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{raise}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucagon",
            commonErrors: ["Confusing insulin and glucagon."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the body's response when core temperature drops below 37°C.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shivering generates heat, blood vessels constrict to reduce heat loss, hairs erect to trap air" },
              { id: "b", text: "Sweating increases heat loss" },
              { id: "c", text: "Blood vessels dilate to warm skin" },
              { id: "d", text: "Hairs lie flat to release heat" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold response", statement: "Shivering + vasoconstriction + hair erection = heat conservation and generation." },
            ],
            steps: [
              { reasoning: "Shivering muscle contractions generate heat.", working: "\\text{shiver}", marks: 1, markCode: "M" },
              { reasoning: "Vasoconstriction reduces blood flow to skin → less heat loss.", working: "\\text{constrict}", marks: 1, markCode: "M" },
              { reasoning: "Hairs erect trap insulating air layer.", working: "\\text{hairs}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shivering, vasoconstriction, hairs erect",
            commonErrors: ["Giving hot responses."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Normal body temperature is about 37°C. (a) How many degrees above normal is a fever of 39°C? (b) How many degrees below normal is hypothermia at 35°C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature deviation", statement: "Deviation = actual - set point." },
            ],
            steps: [
              { reasoning: "$39 - 37 = 2$°C above.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "$37 - 35 = 2$°C below.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2°C, b) 2°C",
            commonErrors: ["In (b), giving -2 without direction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Normal fasting blood glucose is about 5 mmol/L. After a meal it rises to 8 mmol/L, then insulin returns it to 5 mmol/L. (a) By how much did glucose rise after the meal? (b) By how much did insulin lower it? (c) What is the set point glucose level?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Glucose deviation", statement: "Change = peak - set point = set point - return value." },
            ],
            steps: [
              { reasoning: "Rise $= 8 - 5 = 3$ mmol/L.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Fall $= 8 - 5 = 3$ mmol/L.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Set point = 5 mmol/L.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 3, c) 5 mmol/L",
            commonErrors: ["In (c), using 8 — that's the peak not set point."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sweat production increases with temperature: 0 mL/h at 37°C, 50 mL/h at 38°C, 100 mL/h at 39°C, 200 mL/h at 40°C. Assuming a linear increase between 38°C and 39°C only: (a) sweat rate at 38.5°C? (b) total sweat in 2 hours at 39°C? (c) sweat in 30 minutes at 40°C? (d) sweat rate needed to remove 300 mL in 2 hours at constant 39°C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75 },
              { label: "b", answer: 200 },
              { label: "c", answer: 100 },
              { label: "d", answer: 150 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sweat rate", statement: "Linear interpolation between given points; total = rate x time." },
            ],
            steps: [
              { reasoning: "At 38.5°C halfway between 50 and 100 → 75 mL/h.", working: "75", marks: 1, markCode: "M" },
              { reasoning: "$100 \\times 2 = 200$ mL in 2 h.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "$200 \\times 0.5 = 100$ mL in 30 min.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "$300 / 2 = 150$ mL/h needed.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 75, b) 200 mL, c) 100 mL, d) 150 mL/h",
            commonErrors: ["In (a), assuming the 38→39 linear rule extends beyond."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many hormones are directly involved in blood glucose control (insulin and glucagon)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glucose hormones", statement: "Insulin lowers; glucagon raises — two antagonistic hormones." },
            ],
            steps: [
              { reasoning: "Insulin + glucagon = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Including adrenaline — it has minor glucose effects."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Insulin action lowers blood glucose from 9 mmol/L to 5 mmol/L over 30 minutes. (a) By how much did glucose fall? (b) What was the average rate of fall per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 0.133 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "Fall = initial - final; rate = change / time." },
            ],
            steps: [
              { reasoning: "Fall $= 9 - 5 = 4$ mmol/L.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Rate $= 4 / 30 \\approx 0.133$ mmol/L per min.", working: "0.133", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4 mmol/L, b) ~0.13 mmol/L/min",
            commonErrors: ["In (b), dividing by 60 instead of 30."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Body temperature set point is 37°C. At 38.5°C the sweat rate is 100 mL/h plus an extra 20% per °C above 37°C. (a) What is the temperature deviation? (b) What sweat rate is needed at 38.5°C? (c) How much extra sweat is produced per hour compared with 37°C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5 },
              { label: "b", answer: 130 },
              { label: "c", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Thermoregulation rate", statement: "Deviation = T - 37; extra % = 20 x deviation; rate = base x (1 + extra%)." },
            ],
            steps: [
              { reasoning: "Deviation $= 38.5 - 37 = 1.5$°C.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "Extra $= 20 \\times 1.5 = 30\\%$; rate $= 100 \\times 1.3 = 130$ mL/h.", working: "130", marks: 1, markCode: "M" },
              { reasoning: "Extra sweat $= 130 - 100 = 30$ mL/h.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1.5°C, b) 130 mL/h, c) 30 mL/h",
            commonErrors: ["In (c), answering 30% instead of mL."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-homeo-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following homeostasis terms.",
          parts: [
            { label: "a", prompt: "Homeostasis", marks: 1 },
            { label: "b", prompt: "Negative feedback", marks: 1 },
            { label: "c", prompt: "Insulin", marks: 1 },
            { label: "d", prompt: "Glucagon", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis terms", statement: "Stable internal conditions via feedback; insulin/glucagon antagonists." },
            ],
            steps: [
              { part: "a", reasoning: "Maintaining stable internal conditions despite changes.", working: "\\text{stable}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Response that reverses deviation from set point.", working: "\\text{reverses}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Hormone lowering blood glucose.", working: "\\text{lower}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Hormone raising blood glucose.", working: "\\text{raise}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Homeostasis=stable conditions; negative feedback=reverses change; insulin=lowers glucose; glucagon=raises glucose",
            commonErrors: ["Swapping insulin and glucagon."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-homeo-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how the body regulates blood glucose after a meal and during fasting.",
          parts: [
            { label: "a", prompt: "What happens to blood glucose after a meal?", marks: 1 },
            { label: "b", prompt: "What does the pancreas release and what does it do?", marks: 2 },
            { label: "c", prompt: "What happens during fasting/exercise?", marks: 1 },
            { label: "d", prompt: "What does the pancreas release then and what does it do?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Glucose homeostasis", statement: "Insulin lowers glucose (fed state); glucagon raises it (fasting)." },
            ],
            steps: [
              { part: "a", reasoning: "Glucose rises as digested food is absorbed.", working: "\\text{rises}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pancreas releases insulin.", working: "\\text{insulin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Insulin → cells absorb glucose, liver stores glycogen → glucose falls.", working: "\\text{glycogen}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Glucose falls as cells use it for respiration.", working: "\\text{falls}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Pancreas releases glucagon.", working: "\\text{glucagon}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Glucagon → liver breaks down glycogen → glucose rises.", working: "\\text{glycogen breakdown}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glucose rises (b) insulin→uptake+glycogen (c) glucose falls (d) glucagon→glycogen breakdown",
            commonErrors: ["Reversing the two hormones."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-homeo-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does failure of insulin production or action lead to dangerously high blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Without insulin, cells cannot absorb glucose and the liver cannot store it as glycogen — glucose accumulates in blood" },
              { id: "b", text: "Glucagon stops being produced" },
              { id: "c", text: "The pancreas produces too much insulin" },
              { id: "d", text: "Cells start producing glucose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diabetes mechanism", statement: "Insulin deficiency/resistance → no glucose uptake or glycogen storage → hyperglycaemia." },
            ],
            steps: [
              { reasoning: "Insulin promotes glucose uptake into cells and glycogen storage.", working: "\\text{insulin role}", marks: 1, markCode: "M" },
              { reasoning: "Without it, glucose stays in blood → high levels.", working: "\\text{accumulates}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Glucose cannot be absorbed or stored",
            commonErrors: ["Saying glucagon is the problem."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u2-reproduction",
      title: "Reproduction and Development",
      skill: "Describe sexual reproduction in plants and humans, and explain development from fertilization to birth.",
      lesson: {
        sections: [
          {
            heading: "Human reproduction",
            body: "Sperm (testes) + egg (ovaries) → fertilization in oviduct → zygote → embryo implants in uterus → placenta exchanges nutrients/wastes → baby born after ~40 weeks. Menstruation cycle prepares uterus monthly.",
          },
          {
            heading: "Plant reproduction",
            body: "Flower structure: petals (attract), sepals (protect), stamens (male: anther+filament), carpels (female: stigma+style+ovary). Pollination (wind/insects) → fertilization in ovule → seed develops → fruit forms from ovary wall. Seeds disperse by wind, animals, water.",
          },
          {
            heading: "Development",
            body: "Fertilized egg divides rapidly (cleavage) → blastocyst → implantation → embryo → fetus (organ formation) → birth. In plants: seed germination → seedling → mature plant.",
          },
        ],
        keyFormulas: [
          { name: "Flower parts", statement: "Stamen (male), carpel (female), petals, sepals" },
          { name: "Pollination→seed", statement: "Pollination → fertilization → seed → fruit" },
          { name: "Human development", statement: "Zygote → embryo → fetus → birth (~40 weeks)" },
        ],
        workedExample: {
          problem: "Trace the development of a fertilized human egg.",
          solution: "Zygote divides → morula → blastocyst → implants in uterus → embryo → fetus → born after ~40 weeks.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilization occur in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oviduct (fallopian tube)" },
              { id: "b", text: "Uterus" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Vagina" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilization site", statement: "Oviduct — where sperm meets egg." },
            ],
            steps: [
              { reasoning: "Fertilization occurs in the oviduct.", working: "\\text{oviduct}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oviduct",
            commonErrors: ["Choosing uterus — implantation site, not fertilization."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-rep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the placenta?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exchanges nutrients and wastes between mother and fetus" },
              { id: "b", text: "Produces hormones only" },
              { id: "c", text: "Protects fetus from all disease" },
              { id: "d", text: "Stores food for baby" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Placenta", statement: "Exchange organ — nutrients/wastes between maternal and fetal blood." },
            ],
            steps: [
              { reasoning: "Placenta transfers O₂/nutrients to fetus, removes CO₂/wastes.", working: "\\text{exchange}", marks: 1, markCode: "M" },
              { reasoning: "State the function.", working: "\\text{placenta}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exchanges nutrients/wastes",
            commonErrors: ["Saying blood mixes directly — it doesn't."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the structure of a typical insect-pollinated flower and explain how each part helps reproduction.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bright petals attract insects; nectaries reward them; stamens produce pollen; sticky stigma traps pollen; ovary contains ovules" },
              { id: "b", text: "All parts are identical" },
              { id: "c", text: "Only petals matter" },
              { id: "d", text: "Wind carries pollen to stigma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flower structure", statement: "Each part adapted for pollination and seed production." },
            ],
            steps: [
              { reasoning: "Petals/nectaries attract pollinators.", working: "\\text{attract}", marks: 1, markCode: "M" },
              { reasoning: "Stamens produce pollen; stigma receives it.", working: "\\text{pollen,stigma}", marks: 1, markCode: "M" },
              { reasoning: "Ovary → ovules → seeds after fertilization.", working: "\\text{ovary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Petals attract, stamens pollen, stigma receives, ovary seeds",
            commonErrors: ["Missing the role of the ovary/ovules."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe sexual reproduction in flowering plants from pollination to seed dispersal.",
          parts: [
            { label: "a", prompt: "Define pollination.", marks: 1 },
            { label: "b", prompt: "Describe double fertilization in plants.", marks: 3 },
            { label: "c", prompt: "Explain how the ovary and ovules develop after fertilization.", marks: 2 },
            { label: "d", prompt: "Describe two methods of seed dispersal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plant reproduction", statement: "Pollination → fertilization → seed/fruit → dispersal." },
            ],
            steps: [
              { part: "a", reasoning: "Transfer of pollen from anther to stigma.", working: "\\text{pollination}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pollen tube grows down style to ovary.", working: "\\text{pollen tube}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One sperm fertilizes egg → zygote; second fuses with polar nuclei → endosperm.", working: "\\text{double fertilization}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zygote → embryo; endosperm feeds it.", working: "\\text{embryo+endosperm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ovary wall → fruit; ovules → seeds.", working: "\\text{fruit+seed}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Describe development.", working: "\\text{development}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wind (light, winged seeds) or animal (fleshy fruit eaten, seeds dispersed).", working: "\\text{wind/animal}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second method.", working: "\\text{dispersal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pollen transfer (b) pollen tube, double fertilization (c) ovary→fruit, ovule→seed (d) wind/animal dispersal",
            commonErrors: ["In (b), describing only single fertilization."],
            examinerNote: "A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-rep-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where are sperm cells produced in males?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testes" },
              { id: "b", text: "Ovaries" },
              { id: "c", text: "Prostate gland" },
              { id: "d", text: "Seminal vesicle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gametogenesis", statement: "Sperm produced in testes; eggs in ovaries." },
            ],
            steps: [
              { reasoning: "Testes are the male gonads producing sperm.", working: "\\text{testes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testes",
            commonErrors: ["Choosing seminal vesicle — it stores fluid, not sperm."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-rep-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main function of the placenta during pregnancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exchanges nutrients and wastes between mother and fetus without blood mixing" },
              { id: "b", text: "Produces all fetal hormones" },
              { id: "c", text: "Protects fetus from all infection" },
              { id: "d", text: "Stores food for the baby" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Placenta", statement: "Exchange organ — O₂/nutrients to fetus, CO₂/wastes back; blood does not mix." },
            ],
            steps: [
              { reasoning: "Placenta transfers substances between maternal and fetal blood.", working: "\\text{exchange}", marks: 1, markCode: "M" },
              { reasoning: "State function.", working: "\\text{placenta}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exchanges nutrients/wastes between mother and fetus",
            commonErrors: ["Saying maternal and fetal blood mix."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain 'double fertilization' in flowering plants.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One sperm fertilizes the egg forming the zygote while a second sperm fuses with polar nuclei forming the endosperm" },
              { id: "b", text: "Two eggs are fertilized to make twins" },
              { id: "c", text: "Two pollen grains fertilize one ovule" },
              { id: "d", text: "The same sperm fertilizes twice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double fertilization", statement: "Unique to angiosperms: one sperm + egg → zygote; second sperm + polar nuclei → endosperm." },
            ],
            steps: [
              { reasoning: "Pollen tube delivers two sperm nuclei to ovule.", working: "\\text{pollen tube}", marks: 1, markCode: "M" },
              { reasoning: "One sperm + egg → zygote (embryo); second + polar nuclei → endosperm (food).", working: "\\text{zygote+endosperm}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One sperm→zygote, second→endosperm",
            commonErrors: ["Describing only single fertilization."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many parts make up a stamen (male flower part)? (b) How many parts make up a carpel (female flower part)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flower structure", statement: "Stamen = anther + filament (2); carpel = stigma + style + ovary (3)." },
            ],
            steps: [
              { reasoning: "Anther + filament = 2 parts.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Stigma + style + ovary = 3 parts.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2, b) 3",
            commonErrors: ["Counting petals as part of stamen/carpet."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Human pregnancy lasts about 40 weeks. (a) Approximately how many days is this? (b) How many trimesters divide pregnancy? (c) Approximately how many months is 40 weeks?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 280 },
              { label: "b", answer: 3 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pregnancy duration", statement: "40 weeks x 7 = 280 days; 3 trimesters; ~9 months." },
            ],
            steps: [
              { reasoning: "$40 \\times 7 = 280$ days.", working: "280", marks: 1, markCode: "M" },
              { reasoning: "Three trimesters.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "40 weeks ≈ 9 months.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 280 days, b) 3, c) ~9 months",
            commonErrors: ["Using 30 days per month incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant produces 1200 seeds. Wind disperses 60%, animals disperse 30%, and water disperses the rest. (a) How many seeds are wind-dispersed? (b) How many are animal-dispersed? (c) How many are water-dispersed? (d) Verify the total equals 1200.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 720 },
              { label: "b", answer: 360 },
              { label: "c", answer: 120 },
              { label: "d", answer: 1200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Seed dispersal", statement: "Water % = 100 - 60 - 30 = 10%; count = %/100 x total." },
            ],
            steps: [
              { reasoning: "Wind $= 0.60 \\times 1200 = 720$.", working: "720", marks: 1, markCode: "M" },
              { reasoning: "Animal $= 0.30 \\times 1200 = 360$.", working: "360", marks: 1, markCode: "M" },
              { reasoning: "Water $= 1200 - 720 - 360 = 120$.", working: "120", marks: 1, markCode: "M" },
              { reasoning: "Total $= 720 + 360 + 120 = 1200$.", working: "1200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 720, b) 360, c) 120, d) 1200",
            commonErrors: ["In (c), assuming water gets 30% like animals."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many gametes fuse together during fertilization?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilization", statement: "Fusion of one male and one female gamete = 2 gametes." },
            ],
            steps: [
              { reasoning: "Sperm + egg = 2 gametes.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the zygote as a third gamete."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-rep-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A woman ovulates approximately once every 28 days. (a) About how many eggs are released per year? (b) How many menstrual cycles occur per year?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 13 },
              { label: "b", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ovarian cycle", statement: "Cycles per year = 365 / 28 ≈ 13." },
            ],
            steps: [
              { reasoning: "$365 / 28 \\approx 13$ cycles and eggs per year.", working: "13", marks: 1, markCode: "M" },
              { reasoning: "One ovulation per cycle → also 13 eggs.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) ~13, b) ~13",
            commonErrors: ["Multiplying by 28 instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a flowering plant, the pollen grain (male gametophyte) is haploid. If the sporophyte plant has 24 chromosomes: (a) How many chromosomes are in the pollen grain? (b) How many in the egg cell? (c) How many in the fertilized zygote?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 12 },
              { label: "c", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant ploidy", statement: "Gametes haploid = sporophyte/2; zygote restores diploid." },
            ],
            steps: [
              { reasoning: "Pollen (gametophyte) $= 24/2 = 12$.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "Egg also haploid: 12.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "Zygote $= 12 + 12 = 24$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 12, b) 12, c) 24",
            commonErrors: ["Giving gametes 24 chromosomes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-rep-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name the parts of a flower and state the function of each.",
          parts: [
            { label: "a", prompt: "Stamen", marks: 1 },
            { label: "b", prompt: "Carpel", marks: 1 },
            { label: "c", prompt: "Petals", marks: 1 },
            { label: "d", prompt: "Sepals", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flower parts", statement: "Stamen=male (pollen); carpel=female (ovules); petals=attract; sepals=protect." },
            ],
            steps: [
              { part: "a", reasoning: "Male part — anther produces pollen.", working: "\\text{pollen}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Female part — ovary contains ovules.", working: "\\text{ovules}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brightly coloured to attract pollinators.", working: "\\text{attract}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Protect the flower bud before opening.", working: "\\text{protect}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stamen=pollen; carpel=ovules; petals=attract; sepals=protect",
            commonErrors: ["Swapping stamen and carpel functions."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-rep-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Describe human development from fertilization to birth.",
          parts: [
            { label: "a", prompt: "Where and how does fertilization occur?", marks: 1 },
            { label: "b", prompt: "What happens to the zygote after fertilization?", marks: 2 },
            { label: "c", prompt: "What is the role of the placenta?", marks: 1 },
            { label: "d", prompt: "How long does development take and what are the stages?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human development", statement: "Zygote → embryo → fetus → birth (~40 weeks); placenta exchanges materials." },
            ],
            steps: [
              { part: "a", reasoning: "Sperm meets egg in oviduct.", working: "\\text{oviduct}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zygote divides repeatedly (cleavage) → blastocyst.", working: "\\text{divide}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blastocyst implants in uterus → embryo.", working: "\\text{implant}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exchanges nutrients/wastes/gases between mother and fetus.", working: "\\text{exchange}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "~40 weeks; embryo → fetus (organs form) → birth.", working: "\\text{40 weeks}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Stages in order.", working: "\\text{stages}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oviduct (b) zygote→blastocyst→implant (c) exchange organ (d) 40 weeks, embryo→fetus→birth",
            commonErrors: ["Saying fertilization occurs in the uterus."],
            examinerNote: "M1 for (a), M1 A1 for (b), A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-rep-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do plants and animals disperse seeds/offspring away from the parent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To reduce competition for light, water and nutrients and colonise new areas" },
              { id: "b", text: "To escape predators only" },
              { id: "c", text: "To increase genetic diversity directly" },
              { id: "d", text: "Seeds cannot germinate near parents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dispersal advantage", statement: "Reduces competition and spreads species to new habitats." },
            ],
            steps: [
              { reasoning: "Dispersal spreads offspring to new locations.", working: "\\text{spread}", marks: 1, markCode: "M" },
              { reasoning: "Less competition for resources near parent.", working: "\\text{competition}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reduces competition and colonises new areas",
            commonErrors: ["Saying dispersal is only about predators."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
