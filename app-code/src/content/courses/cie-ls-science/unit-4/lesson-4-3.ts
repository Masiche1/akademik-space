import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cils-u4-lesson-4-3",
  code: "4-3",
  title: "Hormones and reproduction",
  goal: "I CAN describe how hormones regulate body functions and how human reproduction works.",
  standards: ["0893 Biology: hormones and reproduction"],
  vocabulary: [
    { term: "Hormone", definition: "Chemical messenger produced by endocrine glands, carried by blood." },
    { term: "Insulin", definition: "Hormone lowering blood glucose — produced by pancreas." },
    { term: "Adrenaline", definition: "Hormone preparing body for fight/flight — raises heart rate." },
    { term: "Puberty", definition: "Stage when reproductive hormones develop secondary sexual characteristics." },
    { term: "Fertilisation", definition: "Fusion of sperm and egg forming a zygote." },
    { term: "Placenta", definition: "Organ exchanging nutrients/waste between mother and fetus." },
  ],
  concepts: [
    {
      id: "cils-u4-hormones",
      title: "Hormones",
      skill: "Explain how hormones differ from nerves and describe key hormones and their effects.",
      lesson: {
        sections: [
          {
            heading: "Hormones vs nerves",
            body: "Nerves: fast, specific, short-lived. Hormones: slower, widespread via blood, longer-lasting effects.",
          },
          {
            heading: "Key hormones",
            body: "- **Insulin** (pancreas): lowers blood glucose\n- **Glucagon** (pancreas): raises blood glucose\n- **Adrenaline** (adrenal glands): fight/flight — heart rate up, glucose released\n- **Thyroxine** (thyroid): controls metabolic rate",
          },
          {
            heading: "Diabetes",
            body: "Type 1: pancreas doesn't make insulin — needs injections. Type 2: cells don't respond to insulin — often linked to diet/obesity.",
          },
        ],
        keyFormulas: [
          { name: "Hormones", statement: "Chemical messengers via blood — slower but longer-lasting than nerves." },
        ],
        workedExample: {
          problem: "Why does adrenaline make your heart race?",
          solution: "Adrenaline released in stress → increases heart rate and glucose — prepares body for action.",
        },
      },
      questions: [
        {
          id: "cils-u4-hor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Thyroxine" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulin", statement: "Lowers blood glucose by promoting glucose uptake/storage." },
            ],
            steps: [
              { reasoning: "Insulin = glucose down; glucagon = glucose up.", working: "insulin", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Insulin",
            commonErrors: ["Choosing (b) — glucagon raises glucose."],
          },
        },
        {
          id: "cils-u4-hor-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do hormones differ from nerve impulses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hormones vs nerves", statement: "Hormones: slower, blood-borne, widespread, longer-lasting." },
            ],
            steps: [
              { reasoning: "Nerves fast/specific; hormones slow/widespread via blood.", working: "comparison", marks: 1, markCode: "M" },
              { reasoning: "Hormonal effects last longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nerves are fast and specific; hormones travel in blood, act more slowly but longer.",
            commonErrors: ["Only saying 'slower' — need both speed and distribution differences."],
          },
        },
        {
          id: "cils-u4-hor-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how insulin and glucagon maintain blood glucose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Glucose homeostasis", statement: "Insulin lowers high glucose; glucagon raises low glucose — negative feedback." },
            ],
            steps: [
              { reasoning: "High glucose → pancreas releases insulin → cells absorb glucose, store as glycogen.", working: "insulin", marks: 1, markCode: "M" },
              { reasoning: "Low glucose → glucagon released → glycogen→glucose.", working: "glucagon", marks: 1, markCode: "M" },
              { reasoning: "Opposite actions maintain balance — negative feedback.", working: "feedback", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin lowers high glucose; glucagon raises low glucose — balanced pair.",
            commonErrors: ["Forgetting glucagon — need both directions."],
          },
        },
        {
          id: "cils-u4-hor-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the fight-or-flight response.",
          parts: [
            { label: "a", prompt: "What triggers adrenaline release?", marks: 2 },
            { label: "b", prompt: "List three bodily changes adrenaline causes.", marks: 3 },
            { label: "c", prompt: "Explain why these changes help.", marks: 2 },
            { label: "d", prompt: "What happens after the threat passes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adrenaline", statement: "Stress → adrenaline → increased heart rate, glucose, alertness — prepares for action." },
            ],
            steps: [
              { part: "a", reasoning: "Fear/stress/danger detected by brain → signals adrenal glands.", working: "trigger", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heart rate up, breathing faster, glucose released, pupils dilate, blood to muscles.", working: "changes", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Prepares body for rapid action — more O₂/glucose to muscles.", working: "prepare", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Adrenaline levels fall → body returns to normal (homeostasis).", working: "return", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stress triggers adrenal glands (b) heart↑/glucose↑/alertness (c) prepares for action (d) adrenaline falls, returns normal",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple changes.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Saying 'adrenaline stays high' — it's temporary."],
          },
        },
        {
          id: "cils-u4-hor-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone controls metabolic rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thyroxine" },
              { id: "b", text: "Adrenaline" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Oestrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Thyroxine", statement: "Thyroxine controls metabolic rate." }],
            steps: [{ reasoning: "Thyroxine is produced by the thyroid gland.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Thyroxine",
          },
        },
        {
          id: "cils-u4-hor-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson names insulin, glucagon, adrenaline and thyroxine. Enter the number of hormones.",
          response: { type: "numeric", parts: [{ label: "Hormones", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hormones", statement: "Four hormones are listed." }],
            steps: [{ reasoning: "Four hormones are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u4-hor-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between type 1 and type 2 diabetes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Diabetes", statement: "Type 1 involves little/no insulin; type 2 involves poor insulin response." }],
            steps: [
              { reasoning: "Type 1 diabetes is caused by failure to produce insulin.", marks: 1, markCode: "M" },
              { reasoning: "Type 2 involves cells responding poorly to insulin.", marks: 1, markCode: "M" },
              { reasoning: "Type 2 is often linked to diet and lifestyle.", marks: 1, markCode: "A" }],
            finalAnswer: "Type 1 is insulin deficiency; type 2 is reduced insulin response often linked to lifestyle.",
          },
        },
        {
          id: "cils-u4-hor-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is adrenaline produced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pancreas" },
              { id: "b", text: "Adrenal glands" },
              { id: "c", text: "Thyroid" },
              { id: "d", text: "Liver only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Adrenaline", statement: "Adrenaline is produced by the adrenal glands." }],
            steps: [{ reasoning: "Adrenal glands release adrenaline during stress.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Adrenal glands",
          },
        },
        {
          id: "cils-u4-hor-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Blood glucose rises from 5 mmol/L to 9 mmol/L. Enter the increase in mmol/L.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 4, unit: "mmol/L" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Change", statement: "Increase = final value minus initial value." }],
            steps: [{ reasoning: "$9-5 = 4$ mmol/L.", marks: 1, markCode: "A" }],
            finalAnswer: "$4$ mmol/L",
          },
        },
        {
          id: "cils-u4-hor-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how insulin and glucagon form a negative feedback system for blood glucose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Glucose homeostasis", statement: "Insulin lowers high glucose; glucagon raises low glucose." }],
            steps: [
              { reasoning: "High glucose triggers insulin release.", marks: 1, markCode: "M" },
              { reasoning: "Insulin lowers glucose by promoting uptake and storage.", marks: 1, markCode: "M" },
              { reasoning: "Low glucose triggers glucagon, which raises glucose again.", marks: 1, markCode: "A" }],
            finalAnswer: "Insulin and glucagon act oppositely to keep blood glucose within a narrow range.",
          },
        },
        {
          id: "cils-u4-hor-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an endocrine gland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A muscle that contracts" },
              { id: "b", text: "A type of neuron" },
              { id: "c", text: "A gland that releases hormones into the blood" },
              { id: "d", text: "A digestive enzyme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Endocrine gland", statement: "Endocrine glands secrete hormones into the bloodstream." }],
            steps: [{ reasoning: "Hormones travel in blood to target cells.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** A gland that releases hormones into the blood",
          },
        },
        {
          id: "cils-u4-hor-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Blood glucose falls from 8 mmol/L to 5 mmol/L after insulin action. Enter the final glucose concentration.",
          response: { type: "numeric", parts: [{ label: "Final glucose", answer: 5, unit: "mmol/L" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Glucose regulation", statement: "Insulin reduces blood glucose toward normal." }],
            steps: [{ reasoning: "The final value is 5 mmol/L.", marks: 1, markCode: "A" }],
            finalAnswer: "$5$ mmol/L",
          },
        },
        {
          id: "cils-u4-hor-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How are hormones transported around the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Along nerves only" },
              { id: "b", text: "By gravity alone" },
              { id: "c", text: "In the blood" },
              { id: "d", text: "Through bones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hormones", statement: "Hormones are carried by the bloodstream." }],
            steps: [{ reasoning: "Blood distributes hormones to target cells.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** In the blood",
          },
        },
        {
          id: "cils-u4-hor-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Adrenaline can increase heart rate, breathing rate, blood glucose and pupil size. Enter the number of effects listed.",
          response: { type: "numeric", parts: [{ label: "Effects", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Adrenaline", statement: "Four effects are listed." }],
            steps: [{ reasoning: "Four effects are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u4-hor-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why hormonal responses are usually slower than nerve impulses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Hormones vs nerves", statement: "Hormones travel in blood and act on many cells; nerves are fast and specific." }],
            steps: [
              { reasoning: "Hormones must be released into the bloodstream.", marks: 1, markCode: "M" },
              { reasoning: "They diffuse to target cells, which takes time.", marks: 1, markCode: "M" },
              { reasoning: "Effects are widespread and longer-lasting than nerve signals.", marks: 1, markCode: "A" }],
            finalAnswer: "Hormones travel in blood and act more slowly but over wider areas and longer periods.",
          },
        },
        {
          id: "cils-u4-hor-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes type 1 diabetes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too little water only" },
              { id: "b", text: "The pancreas fails to produce enough insulin" },
              { id: "c", text: "Too much adrenaline" },
              { id: "d", text: "Too much thyroxine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Type 1 diabetes", statement: "Type 1 involves insulin deficiency." }],
            steps: [{ reasoning: "Lack of insulin prevents glucose regulation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The pancreas fails to produce enough insulin",
          },
        },
      ],
    },
    {
      id: "cils-u4-reproduction",
      title: "Human reproduction",
      skill: "Describe the male and female reproductive systems and the stages of reproduction.",
      lesson: {
        sections: [
          {
            heading: "Reproductive systems",
            body: "Male: testes produce sperm + testosterone. Female: ovaries produce eggs + oestrogen; uterus for embryo; oviducts for fertilisation.",
          },
          {
            heading: "Fertilisation and development",
            body: "Sperm meets egg in oviduct → zygote → divides → implants in uterus → placenta exchanges nutrients → fetus develops ~9 months → birth.",
          },
          {
            heading: "Menstrual cycle",
            body: "~28-day cycle: egg released (ovulation ~day 14) → uterus lining thickens → if no fertilisation, lining shed (period). Hormones (oestrogen, progesterone) control it.",
          },
        ],
        keyFormulas: [
          { name: "Reproduction", statement: "Sperm+egg→zygote→embryo→fetus→birth; placenta nourishes fetus." },
        ],
        workedExample: {
          problem: "What is the role of the placenta?",
          solution: "Exchanges nutrients and oxygen from mother to fetus; removes waste — but blood doesn't mix.",
        },
      },
      questions: [
        {
          id: "cils-u4-repro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilisation typically occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vagina" },
              { id: "b", text: "Uterus" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Oviduct (fallopian tube)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation", statement: "Sperm+egg fuse in oviduct → zygote travels to uterus." },
            ],
            steps: [
              { reasoning: "Fertilisation happens in oviduct, not uterus.", working: "oviduct", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oviduct (fallopian tube)",
            commonErrors: ["Choosing (b) — uterus is where embryo implants, not where fertilisation occurs."],
          },
        },
        {
          id: "cils-u4-repro-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the placenta do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Placenta", statement: "Exchanges nutrients/O₂/waste between mother and fetus." },
            ],
            steps: [
              { reasoning: "Transfers nutrients and oxygen mother→fetus; waste fetus→mother.", working: "exchange", marks: 1, markCode: "M" },
              { reasoning: "Blood doesn't mix — selective exchange.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Placenta exchanges nutrients and oxygen to fetus, removes waste — blood doesn't mix.",
            commonErrors: ["Saying 'shared blood' — they're separate circulations."],
          },
        },
        {
          id: "cils-u4-repro-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the menstrual cycle and the role of hormones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Menstrual cycle", statement: "~28 days; oestrogen/progesterone control lining and ovulation." },
            ],
            steps: [
              { reasoning: "Uterus lining thickens under oestrogen/progesterone.", working: "lining", marks: 1, markCode: "M" },
              { reasoning: "Ovulation ~day 14 — egg released.", working: "ovulation", marks: 1, markCode: "M" },
              { reasoning: "No fertilisation → hormone drop → lining shed (period).", working: "period", marks: 1, markCode: "M" },
              { reasoning: "Cycle explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hormones thicken lining → ovulation day ~14 → if no fertilisation, lining shed.",
            commonErrors: ["Confusing ovulation with fertilisation."],
          },
        },
        {
          id: "cils-u4-repro-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace development from fertilisation to birth.",
          parts: [
            { label: "a", prompt: "What happens at fertilisation?", marks: 2 },
            { label: "b", prompt: "Describe embryo development.", marks: 3 },
            { label: "c", prompt: "Explain the placenta's role.", marks: 2 },
            { label: "d", prompt: "What happens at birth?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Development", statement: "Zygote→embryo→fetus→birth; placenta nourishes throughout." },
            ],
            steps: [
              { part: "a", reasoning: "Sperm+egg fuse in oviduct → zygote.", working: "zygote", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zygote divides→embryo→implants in uterus→develops organs→fetus.", working: "stages", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stages correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exchanges nutrients/O₂/waste — fetus nourished without blood mixing.", working: "exchange", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "After ~9 months, contractions push baby through cervix/vagina.", working: "birth", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sperm+egg→zygote (b) divides→embryo→fetus (c) nutrient exchange (d) ~9 months→birth",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Stages correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Saying 'baby eats through placenta' — exchange, not eating."],
          },
        },
        {
          id: "cils-u4-repro-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do the testes produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline only" },
              { id: "b", text: "Eggs and oestrogen" },
              { id: "c", text: "Insulin only" },
              { id: "d", text: "Sperm and testosterone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Testes", statement: "Testes produce sperm and testosterone." }],
            steps: [{ reasoning: "Testes are male reproductive glands.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sperm and testosterone",
          },
        },
        {
          id: "cils-u4-repro-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The menstrual cycle is about 28 days. Enter the number of days.",
          response: { type: "numeric", parts: [{ label: "Days", answer: 28, unit: "days" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Menstrual cycle", statement: "The cycle is approximately 28 days." }],
            steps: [{ reasoning: "The stated cycle length is 28 days.", marks: 1, markCode: "A" }],
            finalAnswer: "$28$ days",
          },
        },
        {
          id: "cils-u4-repro-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the functions of the ovaries.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ovaries", statement: "Ovaries produce eggs and hormones." }],
            steps: [
              { reasoning: "Ovaries produce egg cells.", marks: 1, markCode: "M" },
              { reasoning: "They also release oestrogen and progesterone.", marks: 1, markCode: "A" }],
            finalAnswer: "Ovaries produce eggs and release reproductive hormones.",
          },
        },
        {
          id: "cils-u4-repro-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the embryo implant after fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ovary" },
              { id: "b", text: "Testis" },
              { id: "c", text: "Skin" },
              { id: "d", text: "Uterus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Implantation", statement: "The embryo implants in the uterus." }],
            steps: [{ reasoning: "The uterus lining supports embryo development.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Uterus",
          },
        },
        {
          id: "cils-u4-repro-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When sperm and egg fuse, they form one cell. Enter the number of cells formed.",
          response: { type: "numeric", parts: [{ label: "Cells", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Zygote", statement: "Fertilisation produces one zygote." }],
            steps: [{ reasoning: "Two gametes fuse to form one zygote.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u4-repro-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the placenta supports the developing fetus.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Placenta", statement: "The placenta exchanges nutrients, oxygen and waste." }],
            steps: [
              { reasoning: "Nutrients and oxygen pass from mother to fetus.", marks: 1, markCode: "M" },
              { reasoning: "Waste products pass from fetus to mother.", marks: 1, markCode: "M" },
              { reasoning: "Maternal and fetal blood remain separate.", marks: 1, markCode: "A" }],
            finalAnswer: "The placenta exchanges nutrients and oxygen to the fetus and removes waste without mixing blood.",
          },
        },
        {
          id: "cils-u4-repro-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormones help control the menstrual cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin and glucagon" },
              { id: "b", text: "Oestrogen and progesterone" },
              { id: "c", text: "Adrenaline only" },
              { id: "d", text: "Thyroxine only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Menstrual cycle", statement: "Oestrogen and progesterone regulate the cycle." }],
            steps: [{ reasoning: "These hormones control lining thickening and ovulation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oestrogen and progesterone",
          },
        },
        {
          id: "cils-u4-repro-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Human development before birth takes about 9 months. Enter the number of months.",
          response: { type: "numeric", parts: [{ label: "Months", answer: 9, unit: "months" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Development", statement: "Gestation is about nine months." }],
            steps: [{ reasoning: "The stated development time is 9 months.", marks: 1, markCode: "A" }],
            finalAnswer: "$9$ months",
          },
        },
        {
          id: "cils-u4-repro-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is formed when sperm fertilises an egg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A placenta only" },
              { id: "b", text: "A sperm cell" },
              { id: "c", text: "A zygote" },
              { id: "d", text: "An egg only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fertilisation", statement: "Sperm + egg forms a zygote." }],
            steps: [{ reasoning: "The fused cell is called a zygote.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** A zygote",
          },
        },
        {
          id: "cils-u4-repro-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reproductive structures named: testes, ovaries, uterus and oviducts. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Structures", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Reproductive structures", statement: "Four structures are listed." }],
            steps: [{ reasoning: "Four structures are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u4-repro-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the menstrual cycle in terms of the uterus lining and ovulation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Menstrual cycle", statement: "Hormones thicken the lining; ovulation releases an egg; shedding occurs without fertilisation." }],
            steps: [
              { reasoning: "Hormones cause the uterus lining to thicken.", marks: 1, markCode: "M" },
              { reasoning: "An egg is released at ovulation.", marks: 1, markCode: "M" },
              { reasoning: "If fertilisation does not occur, the lining is shed.", marks: 1, markCode: "A" }],
            finalAnswer: "Hormones thicken the lining, ovulation releases an egg, and without fertilisation the lining is shed.",
          },
        },
        {
          id: "cils-u4-repro-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during birth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ovaries stop all hormones" },
              { id: "b", text: "The zygote forms in the skin" },
              { id: "c", text: "The placenta produces sperm" },
              { id: "d", text: "The baby passes through the cervix and vagina" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Birth", statement: "Birth involves delivery through the birth canal." }],
            steps: [{ reasoning: "Contractions help the baby move through cervix and vagina.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The baby passes through the cervix and vagina",
          },
        },
      ],
    },
    {
      id: "cils-u4-ecology-bridge",
      title: "Bridging to ecosystems",
      skill: "Connect human biology to ecosystem concepts — energy flow, food chains, interdependence.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "Sun → producers (photosynthesis) → consumers → decomposers. Energy lost as heat at each level (~90%).",
          },
          {
            heading: "Food chains",
            body: "Grass → grasshopper → frog → snake → eagle. Arrows show energy flow direction. Decomposers recycle nutrients.",
          },
          {
            heading: "Interdependence",
            body: "Species depend on each other — pollinators need flowers, predators control prey. Removing one species affects whole ecosystem.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Energy flows sun→producers→consumers→decomposers; ~10% transferred each level." },
        ],
        workedExample: {
          problem: "Why are there fewer eagles than grasshoppers?",
          solution: "Only ~10% energy transfers each level — top predators need huge energy input, so fewer can be supported.",
        },
      },
      questions: [
        {
          id: "cils-u4-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grass" },
              { id: "b", text: "Worm" },
              { id: "c", text: "Fungus" },
              { id: "d", text: "Lion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "Makes own food via photosynthesis — plants/algae." },
            ],
            steps: [
              { reasoning: "Grass photosynthesises — producer.", working: "grass", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Grass",
            commonErrors: ["Choosing (c) — fungus is decomposer."],
          },
        },
        {
          id: "cils-u4-eco-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do arrows in a food chain represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain arrows", statement: "Show direction of energy flow — who eats whom." },
            ],
            steps: [
              { reasoning: "Arrow points from food to eater — energy transfer direction.", working: "energy flow", marks: 1, markCode: "M" },
              { reasoning: "Not 'eats' arrow — it's energy direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrows show energy flow — from organism eaten to organism that eats it.",
            commonErrors: ["Reading as 'eats' — arrow points to predator, not prey."],
          },
        },
        {
          id: "cils-u4-eco-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why energy decreases at each trophic level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy pyramid", statement: "~90% energy lost as heat/metabolic processes each level." },
            ],
            steps: [
              { reasoning: "Most energy used for respiration, movement, maintaining body temperature — lost as heat.", working: "heat loss", marks: 1, markCode: "M" },
              { reasoning: "Only ~10% transferred to next level.", working: "10%", marks: 1, markCode: "M" },
              { reasoning: "Result: fewer organisms at higher levels — pyramid shape.", working: "pyramid", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "~90% lost as heat/metabolism each level — only ~10% reaches next.",
            commonErrors: ["Saying 'energy destroyed' — it's lost as heat, not destroyed."],
          },
        },
        {
          id: "cils-u4-eco-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe a food chain and its importance.",
          parts: [
            { label: "a", prompt: "Draw/describe a simple food chain.", marks: 2 },
            { label: "b", prompt: "Identify producers, consumers, decomposers.", marks: 2 },
            { label: "c", prompt: "Explain what happens if a species is removed.", marks: 3 },
            { label: "d", prompt: "Why are decomposers essential?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Food chain", statement: "Energy flow; removal affects whole chain; decomposers recycle nutrients." },
            ],
            steps: [
              { part: "a", reasoning: "e.g. grass→rabbit→fox — energy flow arrows.", working: "chain", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Valid chain.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Grass=producer; rabbit/fox=consumers; bacteria/fungi=decomposers.", working: "roles", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Remove grass → rabbits starve → foxes lose food → chain collapses.", working: "cascading", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effect explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear impact.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Break down dead matter → release nutrients for producers — recycle elements.", working: "recycle", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) grass→rabbit→fox (b) producer/consumers/decomposers (c) cascade effect (d) recycle nutrients",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Chain valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Roles correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Impact explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Thinking energy cycles — it flows one way, matter cycles."],
          },
        },
        {
          id: "cils-u4-eco-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a decomposer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grass" },
              { id: "b", text: "Rabbit" },
              { id: "c", text: "Eagle" },
              { id: "d", text: "Fungus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Decomposer", statement: "Decomposers break down dead organic matter." }],
            steps: [{ reasoning: "Fungi decompose dead material.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fungus",
          },
        },
        {
          id: "cils-u4-eco-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Producers are trophic level 1. Enter the trophic level of a primary consumer such as a grasshopper.",
          response: { type: "numeric", parts: [{ label: "Level", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Trophic levels", statement: "Primary consumers feed directly on producers." }],
            steps: [{ reasoning: "Grasshopper is one level above producers.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u4-eco-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why an energy pyramid gets narrower at higher trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Energy pyramid", statement: "Only a small fraction of energy is transferred between levels." }],
            steps: [
              { reasoning: "Most energy is used for respiration and other life processes.", marks: 1, markCode: "M" },
              { reasoning: "Much energy is lost as heat.", marks: 1, markCode: "M" },
              { reasoning: "Less energy is available to support organisms at higher levels.", marks: 1, markCode: "A" }],
            finalAnswer: "Energy is lost at each level, so fewer organisms can be supported higher up.",
          },
        },
        {
          id: "cils-u4-eco-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain grass → rabbit → fox, the arrow points from grass to rabbit. What does it represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction of gravity" },
              { id: "b", text: "Direction of water flow" },
              { id: "c", text: "Direction of migration" },
              { id: "d", text: "Direction of energy flow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Food chain", statement: "Arrows show energy transfer direction." }],
            steps: [{ reasoning: "Energy flows from food to consumer.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Direction of energy flow",
          },
        },
        {
          id: "cils-u4-eco-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "About 10% of energy is transferred to the next trophic level. Enter the percentage transferred.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 10, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Energy transfer", statement: "Approximately 10% is transferred each level." }],
            steps: [{ reasoning: "The stated transfer is 10%.", marks: 1, markCode: "A" }],
            finalAnswer: "$10\\%$",
          },
        },
        {
          id: "cils-u4-eco-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how removing a producer affects a food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Food chain", statement: "Producers support all higher trophic levels." }],
            steps: [
              { reasoning: "Primary consumers lose their food source.", marks: 1, markCode: "M" },
              { reasoning: "Secondary consumers then lose prey.", marks: 1, markCode: "M" },
              { reasoning: "The whole chain can collapse without producers.", marks: 1, markCode: "A" }],
            finalAnswer: "Removing producers starves consumers and can collapse the food chain.",
          },
        },
        {
          id: "cils-u4-eco-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of interdependence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollinators depend on flowers while flowers depend on pollination" },
              { id: "b", text: "A plant depends on a car" },
              { id: "c", text: "A mineral depends on oxygen" },
              { id: "d", text: "A rock depends on a cloud" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Interdependence", statement: "Species rely on each other for survival." }],
            steps: [{ reasoning: "Pollinators and flowers benefit each other.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Pollinators depend on flowers while flowers depend on pollination",
          },
        },
        {
          id: "cils-u4-eco-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "If one species is removed from a simple chain, it can affect the levels above and below it. Enter the number of directions affected.",
          response: { type: "numeric", parts: [{ label: "Directions", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Food chain", statement: "Removal can affect organisms that eat it and organisms it eats." }],
            steps: [{ reasoning: "Two directions are affected: prey and predator.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u4-eco-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does energy differ from matter in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both flow one way" },
              { id: "b", text: "Energy is recycled; matter flows one way" },
              { id: "c", text: "Energy flows one way; matter is recycled" },
              { id: "d", text: "Both are recycled" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ecosystem", statement: "Energy flows through systems while matter cycles." }],
            steps: [{ reasoning: "Energy is lost as heat; nutrients are recycled by decomposers.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Energy flows one way; matter is recycled",
          },
        },
        {
          id: "cils-u4-eco-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Food chain: grass → grasshopper → frog → snake. Enter the number of organisms in the chain.",
          response: { type: "numeric", parts: [{ label: "Organisms", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Food chain", statement: "Each arrow connects one organism." }],
            steps: [{ reasoning: "Four organisms are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u4-eco-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why top predators are usually fewer in number than herbivores.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Energy pyramid", statement: "Energy loss limits the number of top consumers." }],
            steps: [
              { reasoning: "Only about 10% of energy reaches each higher level.", marks: 1, markCode: "M" },
              { reasoning: "Top predators need large amounts of energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore fewer individuals can be supported.", marks: 1, markCode: "A" }],
            finalAnswer: "Energy loss means top predators need many prey and are fewer in number.",
          },
        },
        {
          id: "cils-u4-eco-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What process allows producers to make their own food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decomposition" },
              { id: "b", text: "Predation" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Respiration only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Producer", statement: "Producers make food by photosynthesis." }],
            steps: [{ reasoning: "Plants and algae photosynthesise.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Photosynthesis",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u4-hormones-notes",
      title: "Hormones, reproduction and ecosystems — revision notes",
      summary: "Insulin/glucagon, adrenaline, reproduction stages, food chains.",
      sections: [
        {
          heading: "Hormones & reproduction",
          body: "Insulin↓glucose, glucagon↑glucose. Adrenaline=stress response. Fertilisation in oviduct→zygote→embryo→fetus→birth; placenta exchanges.",
        },
        {
          heading: "Ecosystems",
          body: "Producers→consumers→decomposers. ~10% energy per level. Arrows=energy flow. Removal cascades; decomposers recycle nutrients.",
        },
      ],
    },
  ],
};
