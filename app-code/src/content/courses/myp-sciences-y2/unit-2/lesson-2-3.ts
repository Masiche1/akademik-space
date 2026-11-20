import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "myps2-u2-lesson-2-3",
  code: "2-3",
  title: "Reproduction and Health",
  goal: "I CAN describe the human reproductive systems, puberty, fertilisation and development, explain how microorganisms cause disease and how the immune system, vaccines and antibiotics protect us, and evaluate public health measures.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Systems",
    "Related concept: Consequences",
    "Global context: Fairness and development",
  ],
  vocabulary: [
    { term: "Fertilisation", definition: "The fusion of the nucleus of a sperm cell with the nucleus of an egg cell to form a zygote." },
    { term: "Puberty", definition: "The stage of life when the body changes and becomes able to reproduce, controlled by sex hormones." },
    { term: "Placenta", definition: "The organ in the uterus through which a foetus receives oxygen and nutrients and loses waste, by diffusion." },
    { term: "Pathogen", definition: "A microorganism that causes disease, such as a bacterium or virus." },
    { term: "Antibody", definition: "A protein made by white blood cells that attaches to a specific antigen on a pathogen." },
    { term: "Vaccination", definition: "Giving a harmless form of a pathogen so the body makes antibodies and memory cells before real infection." },
  ],
  concepts: [
    {
      id: "myps2-u2-reproduction-puberty",
      title: "Human reproduction and puberty",
      skill: "Describe the male and female reproductive systems, the changes of puberty, the menstrual cycle, fertilisation and development of a foetus.",
      lesson: {
        sections: [
          {
            heading: "Reproductive systems and puberty",
            body: "- **Male**: the **testes** make sperm cells and the hormone testosterone. Sperm travel along the **sperm duct** and out through the **penis** in semen.\n- **Female**: the **ovaries** release egg cells, one at a time, into the **oviduct**. The **uterus** (womb) is where a baby develops, and the **cervix** is the narrow opening at its base.\n\nDuring **puberty**, sex hormones (testosterone in boys, oestrogen in girls) cause changes. Boys grow facial hair and their voice deepens. Girls develop breasts and start the menstrual cycle. Both grow quickly, develop body hair and become able to reproduce.",
          },
          {
            heading: "The menstrual cycle",
            body: "The menstrual cycle lasts about 28 days. The lining of the uterus thickens to prepare for a baby. Around day 14, an egg is released from an ovary (**ovulation**). If the egg is not fertilised, the lining breaks down and leaves the body through the vagina as a period, and the cycle starts again. An egg survives about one day after release.",
          },
          {
            heading: "Fertilisation and development",
            body: "Fertilisation happens in the oviduct, when the nucleus of a sperm fuses with the nucleus of an egg to make a **zygote**. The zygote divides by cell division to make a ball of cells, the **embryo**, which sinks into the lining of the uterus (**implantation**). It develops into a **foetus**.\n\nThe **placenta** lets oxygen and nutrients diffuse from the mother's blood into the foetus's blood and wastes such as carbon dioxide diffuse the other way. The blood of the mother and foetus do not mix. The **umbilical cord** connects the foetus to the placenta. Harmful substances such as nicotine, alcohol and some viruses can cross the placenta.",
          },
        ],
        keyFormulas: [
          { name: "Fertilisation", statement: "sperm nucleus + egg nucleus $\\rightarrow$ zygote" },
          { name: "Cycle", statement: "Ovulation at about day 14 of a 28-day cycle" },
          { name: "Placenta", statement: "Oxygen and nutrients go to the foetus; carbon dioxide and waste go to the mother, by diffusion" },
        ],
        workedExample: {
          problem: "A foetus has a mass of 300 g at 20 weeks and 1500 g at 30 weeks. Calculate the mean increase in mass per week.",
          solution: "Increase $=1500-300=1200\\text{ g}$ over 10 weeks. Mean increase $=\\dfrac{1200}{10}=120\\text{ g per week}$.",
        },
      },
      questions: [
        {
          id: "myps2-u2-reproduction-puberty-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilisation normally take place in the human female reproductive system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ovary" },
              { id: "b", text: "Oviduct" },
              { id: "c", text: "Cervix" },
              { id: "d", text: "Uterus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation", statement: "Fertilisation is the fusion of a sperm nucleus with an egg nucleus; it takes place in the oviduct." },
            ],
            steps: [
              { reasoning: "The egg travels along the oviduct, where it meets sperm and is fertilised.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oviduct",
            commonErrors: ["Choosing the uterus, where the embryo implants and develops, not where fertilisation occurs.", "Choosing the ovary, where eggs are released from."],
            examinerNote: "B1 for oviduct. Allow 'fallopian tube'.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A foetus has a mass of 400 g at 22 weeks and 3000 g at 38 weeks.\n\nCalculate the mean increase in mass per week, in grams.",
          response: { type: "numeric", parts: [{ label: "Mean increase", answer: 162.5, unit: "g per week", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean rate of change", statement: "$\\text{mean increase per week}=\\dfrac{\\text{total increase}}{\\text{number of weeks}}$" },
            ],
            steps: [
              { reasoning: "Find the total increase in mass and the number of weeks.", working: "3000-400=2600\\text{ g},\\quad 38-22=16\\text{ weeks}", marks: 1, markCode: "M" },
              { reasoning: "Divide the increase by the number of weeks.", working: "\\frac{2600}{16}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "=162.5\\text{ g per week}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$162.5\\text{ g per week}$",
            commonErrors: ["Dividing 3000 by 38.", "Using 2600 / 22 by using the wrong number of weeks."],
            examinerNote: "M1 for 2600 (or 16). M1 for 2600 / 16. A1 for 162.5 (allow 163). Allow ecf.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A foetus develops in the uterus of its mother and is joined to her by the placenta.\n\nExplain how the foetus obtains oxygen and gets rid of carbon dioxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Substances move from a higher to a lower concentration." },
              { kind: "property", name: "Placenta", statement: "The placenta is the exchange surface between the mother's blood and the foetus's blood; the two bloods do not mix." },
            ],
            steps: [
              { reasoning: "Oxygen is at a higher concentration in the mother's blood than in the foetus's blood in the placenta.", marks: 1, markCode: "B" },
              { reasoning: "So oxygen diffuses across the placenta from the mother's blood into the foetus's blood.", marks: 1, markCode: "B" },
              { reasoning: "Carbon dioxide is at a higher concentration in the foetus's blood, so it diffuses into the mother's blood.", marks: 1, markCode: "B" },
              { reasoning: "The foetus's blood travels to and from the placenta along the umbilical cord, and the mother's body removes the carbon dioxide when she breathes out.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Oxygen diffuses from the mother's blood to the foetus's blood across the placenta; carbon dioxide diffuses from the foetus's blood to the mother's blood. Blood is carried by the umbilical cord and the mother breathes the carbon dioxide out.",
            commonErrors: ["Saying the foetus breathes air or that the mother's blood flows directly into the foetus.", "Not mentioning diffusion or concentration."],
            examinerNote: "Allow 'passes through' for diffuses in the first mark only if the direction is correct. Reject 'blood mixes'.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sam and Priya are discussing the changes of puberty and the stages of human reproduction in a health class.",
          parts: [
            { label: "a", prompt: "Name the hormone that causes changes in boys during puberty and **one** change it causes.", marks: 2 },
            { label: "b", prompt: "Describe what happens to the lining of the uterus if an egg is not fertilised.", marks: 1 },
            { label: "c", prompt: "Describe what happens from the moment a sperm reaches an egg until the embryo is implanted in the uterus.", marks: 3 },
            { label: "d", prompt: "Explain why a pregnant woman should not smoke or drink alcohol.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Puberty", statement: "Testosterone causes the changes in boys; oestrogen causes the changes in girls." },
              { kind: "definition", name: "Fertilisation", statement: "The nucleus of a sperm fuses with the nucleus of an egg to form a zygote." },
              { kind: "property", name: "Placenta", statement: "Harmful substances in the mother's blood, such as nicotine and alcohol, can cross the placenta." },
            ],
            steps: [
              { part: "a", reasoning: "The hormone is testosterone.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "One change, for example voice deepens, facial hair grows, testes produce sperm, growth spurt.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The lining breaks down and is lost through the vagina in a period (menstruation).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The sperm nucleus fuses with the egg nucleus (fertilisation) to form a zygote.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The zygote divides by cell division to form a ball of cells, the embryo.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The embryo moves down the oviduct and sinks into (implants in) the lining of the uterus.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Nicotine, alcohol and other harmful substances pass from the mother's blood across the placenta into the foetus's blood.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "They can harm the development of the foetus, for example causing a low birth mass or damage to organs and the brain.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Testosterone; for example deeper voice (b) It breaks down and leaves as a period (c) Fertilisation forms a zygote, which divides into an embryo that implants in the uterus lining (d) Harmful substances cross the placenta and damage the foetus's development",
            commonErrors: ["Naming oestrogen in (a).", "Saying the sperm 'joins' the egg without saying that the nuclei fuse.", "Saying the foetus breathes in the smoke."],
            examinerNote: "(a) The second mark is independent of the hormone name. Reject 'oestrogen'. (d) Allow 'low birth mass', 'brain damage', 'miscarriage'.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do the testes produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Egg cells and oestrogen" },
              { id: "b", text: "Sperm cells and testosterone" },
              { id: "c", text: "Only testosterone" },
              { id: "d", text: "Only sperm cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Testes", statement: "The testes make sperm cells and the hormone testosterone." },
            ],
            steps: [
              { reasoning: "The testes produce both sperm and testosterone; eggs and oestrogen are produced by the ovaries.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sperm cells and testosterone",
            commonErrors: ["Choosing only one product; the testes make both."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a typical 28-day menstrual cycle, on about which day is an egg released from an ovary (ovulation)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Day 1" },
              { id: "b", text: "Day 7" },
              { id: "c", text: "Day 14" },
              { id: "d", text: "Day 28" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovulation", statement: "In a 28-day cycle, ovulation (egg release) occurs at about day 14." },
            ],
            steps: [
              { reasoning: "Ovulation happens around the middle of the cycle, about day 14.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Day 14",
            commonErrors: ["Choosing day 1, when the period starts."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The egg travelling down the oviduct" },
              { id: "b", text: "The fusion of the nucleus of a sperm with the nucleus of an egg" },
              { id: "c", text: "The embryo attaching to the uterus lining" },
              { id: "d", text: "The release of an egg from an ovary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation", statement: "Fertilisation is the fusion of a sperm nucleus with an egg nucleus to form a zygote; it happens in the oviduct." },
            ],
            steps: [
              { reasoning: "Fertilisation is the fusion of the two nuclei; implantation and ovulation are different stages.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The fusion of the nucleus of a sperm with the nucleus of an egg",
            commonErrors: ["Confusing fertilisation with implantation."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A foetus has a mass of 200 g at 20 weeks and 1400 g at 32 weeks of pregnancy.\n\nCalculate the mean increase in the foetus's mass per week.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean increase", answer: 100, tolerance: 0.01, unit: "g per week" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean increase", statement: "mean increase = (final mass - initial mass) / number of weeks" },
            ],
            steps: [
              { reasoning: "Find the total increase and the time.", working: "\\frac{1400 - 200}{32 - 20} = \\frac{1200}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 100\\text{ g per week}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 g per week",
            commonErrors: ["Dividing by 32 instead of the 12-week difference.", "Forgetting to subtract the initial mass."],
            examinerNote: "M1 for (1400-200)/12 oe. A1 for 100.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A foetus has a mass of 400 g at 24 weeks and 1000 g at 32 weeks.\n\nCalculate the mean increase in mass per week.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean increase", answer: 75, tolerance: 0.01, unit: "g per week" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean increase", statement: "mean increase = (final mass - initial mass) / number of weeks" },
            ],
            steps: [
              { reasoning: "Increase = $1000 - 400 = 600$ g over $32 - 24 = 8$ weeks.", working: "\\frac{600}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 75\\text{ g per week}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75 g per week",
            commonErrors: ["Dividing by 32 (total weeks) instead of 8."],
            examinerNote: "M1 for 600/8 oe. A1 for 75.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A woman's menstrual cycle lasts 30 days. Ovulation usually occurs halfway through the cycle.\n\nOn about which day of her cycle is an egg released?",
          response: {
            type: "numeric",
            parts: [{ label: "Day of ovulation", answer: 15, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovulation", statement: "Ovulation occurs about halfway through the menstrual cycle." },
            ],
            steps: [
              { reasoning: "Halfway through a 30-day cycle is day 15.", working: "30 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 15\\text{th day}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About day 15",
            commonErrors: ["Giving day 30 (the end of the cycle)."],
            examinerNote: "M1 for 30/2 oe. A1 for 15.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A foetus has a mass of 250 g at 18 weeks and 1750 g at 30 weeks of pregnancy.\n\nCalculate the mean increase in mass per week and state whether the foetus is growing faster or slower in the second half of this period compared with the whole period.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean increase", answer: 125, tolerance: 0.01, unit: "g per week" },
              { label: "Total increase", answer: 1500, tolerance: 0, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean increase", statement: "mean increase = (final mass - initial mass) / weeks" },
            ],
            steps: [
              { reasoning: "Total increase = $1750 - 250 = 1500$ g.", working: "1750 - 250", marks: 1, markCode: "M" },
              { reasoning: "Divide by the number of weeks ($30 - 18 = 12$).", working: "1500 \\div 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 125\\text{ g per week}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "125 g per week; total increase 1500 g",
            commonErrors: ["Dividing 1500 by 30 instead of 12."],
            examinerNote: "M1 for total 1500. M1 for /12. A1 for 125.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the menstrual cycle, including what happens to the uterus lining, when ovulation occurs, and what happens if the egg is not fertilised.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Menstrual cycle", statement: "The cycle is about 28 days: the uterus lining thickens, ovulation occurs near day 14, and if the egg is not fertilised the lining breaks down as a period." },
            ],
            steps: [
              { reasoning: "The cycle lasts about 28 days and repeats.", marks: 1, markCode: "B" },
              { reasoning: "The lining of the uterus thickens to prepare for a possible pregnancy.", marks: 1, markCode: "B" },
              { reasoning: "Around day 14 an egg is released from an ovary (ovulation).", marks: 1, markCode: "B" },
              { reasoning: "If the egg is not fertilised, the lining breaks down and leaves the body through the vagina as a period, and the cycle restarts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A ~28-day cycle: uterus lining thickens, egg released near day 14, and if unfertilised the lining breaks down as a period and the cycle restarts.",
            commonErrors: ["Saying the lining always thickens every day."],
            examinerNote: "B1 for each stage; require all four for full marks.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of the placenta and umbilical cord in the development of a foetus, including why the mother's and foetus's blood do not mix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Placenta", statement: "The placenta lets oxygen and nutrients diffuse from mother to foetus and wastes diffuse back; the bloods do not mix." },
            ],
            steps: [
              { reasoning: "The placenta is the exchange surface between mother and foetus.", marks: 1, markCode: "B" },
              { reasoning: "Oxygen and nutrients diffuse from the mother's blood into the foetus's blood; carbon dioxide and waste diffuse back.", marks: 1, markCode: "B" },
              { reasoning: "The umbilical cord connects the foetus to the placenta, carrying the blood to and from it.", marks: 1, markCode: "B" },
              { reasoning: "The bloods do not mix so the foetus's blood pressure stays separate and the exchange happens by diffusion across the placenta; harmful substances can still cross.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The placenta exchanges oxygen/nutrients for wastes by diffusion; the umbilical cord connects foetus to placenta; the bloods do not mix but substances (including harmful ones) can cross.",
            commonErrors: ["Saying the bloods mix in the placenta."],
            examinerNote: "B1 placenta function. B1 diffusion both ways. B1 umbilical cord. R1 no mixing / substances cross. Allow oe.",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone is mainly responsible for the changes of puberty in girls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testosterone" },
              { id: "b", text: "Oestrogen" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Puberty hormones", statement: "Oestrogen causes the changes of puberty in girls; testosterone causes them in boys." },
            ],
            steps: [
              { reasoning: "Oestrogen is the main female sex hormone of puberty; testosterone is the male one.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oestrogen",
            commonErrors: ["Choosing testosterone, the male hormone."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the embryo implant and develop during pregnancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ovary" },
              { id: "b", text: "The oviduct" },
              { id: "c", text: "The lining of the uterus" },
              { id: "d", text: "The cervix" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Implantation", statement: "The embryo sinks into and implants in the lining of the uterus, where it develops into a foetus." },
            ],
            steps: [
              { reasoning: "After fertilisation in the oviduct, the embryo travels to the uterus and implants in its lining.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The lining of the uterus",
            commonErrors: ["Choosing the oviduct, where fertilisation happens."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-reproduction-puberty-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A doctor is explaining reproduction to a class. The class timeline for one pregnancy is: sperm released -> fertilisation -> zygote -> embryo -> implantation -> foetus -> birth.",
          parts: [
            { label: "a", prompt: "Name the organ where fertilisation occurs and the organ where the foetus develops.", marks: 2 },
            { label: "b", prompt: "Describe what happens to the cells between fertilisation and implantation.", marks: 2 },
            { label: "c", prompt: "Explain how the foetus receives oxygen and nutrients and gets rid of carbon dioxide.", marks: 2 },
            { label: "d", prompt: "Evaluate why it is important for a pregnant woman to avoid alcohol and tobacco.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation and development", statement: "Fertilisation is in the oviduct; the zygote divides into an embryo that implants in the uterus and develops into a foetus supplied by the placenta." },
            ],
            steps: [
              { part: "a", reasoning: "Fertilisation occurs in the oviduct (fallopian tube).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The foetus develops in the uterus (womb).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The zygote divides repeatedly by cell division.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The dividing cells form a ball of cells, the embryo, which travels to the uterus and implants in the lining.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The placenta lets oxygen and nutrients diffuse from the mother's blood to the foetus and carbon dioxide/waste diffuse back.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The umbilical cord connects the foetus to the placenta; the bloods do not mix but substances can cross.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Alcohol and nicotine can cross the placenta into the foetus's blood.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "They can harm development (low birth mass, organ/brain damage), so avoiding them protects the foetus; this is a benefit outweighing any claimed relaxation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Oviduct; uterus (b) Zygote divides into embryo which implants in uterus lining (c) Placenta diffusion + umbilical cord (d) Harmful substances cross placenta and damage the foetus.",
            commonErrors: ["In (a) swapping the two organs.", "In (d) saying the foetus 'breathes' the alcohol directly."],
            examinerNote: "(a) Allow 'fallopian tube' for oviduct. (d) Allow oe for harm examples.",
          },
        },
      ],
    },
    {
      id: "myps2-u2-disease-immunity-health",
      title: "Disease, immunity and public health",
      skill: "Explain how microorganisms cause disease, how the immune system, vaccines and antibiotics work, and evaluate public health measures.",
      lesson: {
        sections: [
          {
            heading: "Microorganisms and disease",
            body: "A **pathogen** is a microorganism that causes disease. **Bacteria** (for example the cause of food poisoning) and **viruses** (for example the cause of measles, influenza and COVID-19) are the main types in humans. Pathogens spread through the air by coughs and sneezes, in contaminated food and water, by touch and through animals such as mosquitoes. Pathogens reproduce quickly in the body and release toxins that make us ill.",
          },
          {
            heading: "The immune system, vaccines and antibiotics",
            body: "The body has barriers such as skin, and white blood cells that attack pathogens by engulfing them or by making **antibodies**. Each antibody fits one **antigen** on a pathogen. After infection, **memory cells** stay in the blood, so a second infection is fought faster.\n\nA **vaccine** contains a harmless form of a pathogen (dead, weakened or part of it). The body makes antibodies and memory cells without causing the disease. If a vaccinated person is infected later, the response is fast.\n\n**Antibiotics** kill bacteria or stop them growing, but they do **not** work on viruses. Overuse of antibiotics lets resistant bacteria survive and spread.",
          },
          {
            heading: "Evaluating public health measures",
            body: "When many people are vaccinated, the pathogen finds it harder to spread, which also protects people who cannot be vaccinated (**herd immunity**). Other measures include clean water, sanitation, handwashing and quarantine. When you evaluate a measure, weigh the benefits (fewer cases and deaths) against limits such as cost, access and the need for people to follow the advice. Access to health care is unequal between countries, which affects fairness and development.",
          },
        ],
        keyFormulas: [
          { name: "Vaccination coverage", statement: "$\\dfrac{\\text{number vaccinated}}{\\text{total population}}\\times100$" },
          { name: "Antibiotics", statement: "Work on bacteria, not on viruses" },
          { name: "Vaccination", statement: "Harmless antigens $\\rightarrow$ antibodies and memory cells $\\rightarrow$ fast response later" },
        ],
        workedExample: {
          problem: "In a town of 5000 people, 4250 have been vaccinated against measles. Calculate the percentage vaccinated.",
          solution: "Percentage $=\\dfrac{4250}{5000}\\times100=85\\%$.",
        },
      },
      questions: [
        {
          id: "myps2-u2-disease-immunity-health-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antibiotics are used to treat which type of infection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Influenza caused by a virus" },
              { id: "b", text: "A throat infection caused by bacteria" },
              { id: "c", text: "Measles caused by a virus" },
              { id: "d", text: "The common cold caused by a virus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotics", statement: "Antibiotics kill bacteria or stop them growing; they do not work on viruses." },
            ],
            steps: [
              { reasoning: "Only the throat infection is caused by bacteria, so only it can be treated by an antibiotic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A throat infection caused by bacteria",
            commonErrors: ["Choosing a viral infection because antibiotics are thought to cure all diseases."],
            examinerNote: "B1 for the bacterial infection.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a village of 8000 people, 6800 have been vaccinated against a disease.\n\nCalculate the percentage of the population that has been vaccinated.",
          response: { type: "numeric", parts: [{ label: "Percentage vaccinated", answer: 85, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{whole}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide the number vaccinated by the total population and multiply by 100.", working: "\\frac{6800}{8000}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=85\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$85\\%$",
            commonErrors: ["Dividing 8000 by 6800.", "Giving 6800 / 8000 = 0.85 without converting to a percentage."],
            examinerNote: "M1 for 6800 / 8000 x 100 (oe). A1 for 85. Allow 0.85 for M1 only.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child is given a vaccine against a disease. Months later she is exposed to the pathogen but does not become ill.\n\nExplain how the vaccine protected the child.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vaccination", statement: "A vaccine contains harmless antigens that trigger the production of antibodies and memory cells." },
              { kind: "definition", name: "Antibody", statement: "An antibody is a protein made by white blood cells that fits a specific antigen on a pathogen." },
            ],
            steps: [
              { reasoning: "The vaccine contains a harmless form of the pathogen (dead, weakened or part of it) with its antigens.", marks: 1, markCode: "B" },
              { reasoning: "White blood cells recognise the antigens and make specific antibodies.", marks: 1, markCode: "B" },
              { reasoning: "Memory cells stay in the blood after vaccination.", marks: 1, markCode: "B" },
              { reasoning: "When the real pathogen enters later, memory cells quickly make large numbers of antibodies, so the pathogen is destroyed before it causes illness.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The vaccine contained harmless antigens, white blood cells made antibodies and memory cells; on later infection the response was fast, so the pathogen was destroyed before she became ill.",
            commonErrors: ["Saying the vaccine contains antibodies.", "Saying the vaccine 'kills the pathogen' directly.", "Not mentioning memory cells or a faster second response."],
            examinerNote: "Reject 'vaccine contains the disease'. Allow 'weak / dead / inactive form of the pathogen'.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Measles is a disease caused by a virus. The table shows data for two regions in the same year.\n\n- Region A: 95% of children vaccinated; 10 cases per 100 000 people\n- Region B: 60% of children vaccinated; 250 cases per 100 000 people\n\nRegion B has few clinics, and many families live a long way from the nearest one.",
          parts: [
            { label: "a", prompt: "Explain why antibiotics would not be used to treat measles.", marks: 2 },
            { label: "b", prompt: "Calculate how many times greater the number of cases per 100 000 people is in region B than in region A.", marks: 2 },
            { label: "c", prompt: "Explain how a high level of vaccination in region A also protects people who have not been vaccinated.", marks: 2 },
            { label: "d", prompt: "Suggest **two** reasons why fewer children are vaccinated in region B.", marks: 2 },
            { label: "e", prompt: "Evaluate **one** public health measure, other than vaccination, that could reduce the spread of infectious diseases in region B.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotics", statement: "Antibiotics work on bacteria, not on viruses." },
              { kind: "principle", name: "Herd immunity", statement: "When most of a population is immune, a pathogen cannot spread easily, which protects those who are not immune." },
              { kind: "principle", name: "Evaluating measures", statement: "Weigh the benefits of a measure against its costs, access and the need for people to follow it." },
            ],
            steps: [
              { part: "a", reasoning: "Measles is caused by a virus, and antibiotics only work on bacteria.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Viruses reproduce inside body cells, where antibiotics do not act, so they cannot be killed.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide the cases in region B by the cases in region A.", working: "\\frac{250}{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Most people are immune, so there are few infected people to pass on the virus.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the virus spreads less easily and unvaccinated people are less likely to come into contact with it (herd immunity).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "One reason, for example few clinics or long distances to reach them.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A second reason, for example cost, lack of vaccine supply, lack of information, or families not trusting the vaccine.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Name a measure with a benefit, for example clean drinking water or handwashing education reduces spread of waterborne and contact diseases.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Give a limitation or condition, for example building water systems is expensive, or people need to follow the advice.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Measles is caused by a virus; antibiotics only affect bacteria (b) 25 times (c) Few infected people so the virus spreads less (herd immunity) (d) Any two of: few clinics, distance, cost, supply, information, trust (e) A named measure with a benefit and a limitation",
            commonErrors: ["Saying measles is caused by bacteria.", "In (b) subtracting the cases (240).", "In (c) saying that unvaccinated people are 'immune' because others are vaccinated."],
            examinerNote: "(b) Reject 240. (d) The two reasons must be different. (e) Both a benefit and a limitation are needed for full marks; allow quarantine, sanitation, health education.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pathogen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A white blood cell that fights infection" },
              { id: "b", text: "A microorganism that causes disease" },
              { id: "c", text: "A protein made by the immune system" },
              { id: "d", text: "A vaccine containing dead virus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pathogen", statement: "A pathogen is a microorganism, such as a bacterium or virus, that causes disease." },
            ],
            steps: [
              { reasoning: "Pathogens are disease-causing microorganisms; white cells and antibodies are part of the immune response.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A microorganism that causes disease",
            commonErrors: ["Confusing a pathogen with an antibody or white blood cell."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of memory cells after an infection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They digest the pathogen directly" },
              { id: "b", text: "They stay in the blood so a second infection is fought faster" },
              { id: "c", text: "They produce antibiotics" },
              { id: "d", text: "They carry oxygen to the tissues" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Memory cells", statement: "After infection, memory cells remain so the body responds faster and more strongly to a second infection." },
            ],
            steps: [
              { reasoning: "Memory cells 'remember' the pathogen and speed up the immune response on re-exposure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They stay in the blood so a second infection is fought faster",
            commonErrors: ["Thinking memory cells make antibiotics."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a vaccine contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A full-strength live pathogen" },
              { id: "b", text: "A harmless form of the pathogen (dead, weakened or part of it)" },
              { id: "c", text: "Antibiotics that kill bacteria" },
              { id: "d", text: "White blood cells from another person" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vaccination", statement: "A vaccine contains a harmless form of a pathogen that triggers antibody and memory cell production without causing the disease." },
            ],
            steps: [
              { reasoning: "Vaccines use dead, weakened or partial pathogens — enough to trigger immunity but not to cause the disease.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A harmless form of the pathogen (dead, weakened or part of it)",
            commonErrors: ["Thinking the vaccine contains a full-strength pathogen."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a town of 4000 people, 3600 have been vaccinated against influenza.\n\nCalculate the percentage of people vaccinated.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage vaccinated", answer: 90, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaccination coverage", statement: "$\\dfrac{\\text{vaccinated}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Divide vaccinated by total and multiply by 100.", working: "\\frac{3600}{4000} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 90\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90%",
            commonErrors: ["Dividing 4000 by 3600."],
            examinerNote: "M1 for 3600/4000 x100. A1 for 90%.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a village of 6000 people, 1800 have received a measles vaccination.\n\nCalculate the percentage of the population vaccinated.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage vaccinated", answer: 30, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaccination coverage", statement: "$\\dfrac{\\text{vaccinated}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Divide vaccinated by total and multiply by 100.", working: "\\frac{1800}{6000} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Giving 0.3 without multiplying by 100."],
            examinerNote: "M1 for 1800/6000 x100. A1 for 30%.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A city has 8000 residents and 6800 of them have been vaccinated against COVID-19.\n\nCalculate the vaccination coverage as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage vaccinated", answer: 85, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaccination coverage", statement: "$\\dfrac{\\text{vaccinated}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Divide vaccinated by total and multiply by 100.", working: "\\frac{6800}{8000} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 85\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "85%",
            commonErrors: ["Subtracting to get 1200 instead of dividing."],
            examinerNote: "M1 for 6800/8000 x100. A1 for 85%.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Health officials want at least 95% vaccination coverage to achieve herd immunity in a town of 20 000 people. Currently 18 800 people are vaccinated.\n\nCalculate the current vaccination coverage as a percentage and state whether herd immunity has been reached.",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage vaccinated", answer: 94, tolerance: 0.01, unit: "%" },
              { label: "Number still needed for 95%", answer: 200, tolerance: 0, unit: "people" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaccination coverage", statement: "$\\dfrac{\\text{vaccinated}}{\\text{total}} \\times 100$" },
              { kind: "principle", name: "Herd immunity", statement: "Herd immunity needs a high percentage (here 95%) of the population immune." },
            ],
            steps: [
              { reasoning: "Current percentage = $\\frac{18800}{20000} \\times 100$.", working: "= 94\\%", marks: 1, markCode: "M" },
              { reasoning: "94% is below 95%, so herd immunity is not yet reached.", marks: 1, markCode: "B" },
              { reasoning: "95% of 20000 = 19000; shortfall = $19000 - 18800 = 200$ people.", working: "19000 - 18800 = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "94%; herd immunity not reached; 200 more people needed",
            commonErrors: ["Stopping at 94% without comparing to 95%.", "Calculating 5% of 18800 instead of 20000."],
            examinerNote: "M1 for 94%. B1 for 'not reached'. A1 for 200.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how vaccination protects an individual from disease, including the roles of antibodies, memory cells and the immune response on later exposure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vaccination", statement: "A vaccine contains a harmless form of a pathogen that stimulates antibody and memory cell production without causing the disease." },
            ],
            steps: [
              { reasoning: "The vaccine introduces harmless antigens from the pathogen into the body.", marks: 1, markCode: "B" },
              { reasoning: "White blood cells make antibodies specific to those antigens, and memory cells are produced.", marks: 1, markCode: "B" },
              { reasoning: "The person does not get sick because the vaccine form is harmless.", marks: 1, markCode: "B" },
              { reasoning: "On later exposure to the real pathogen, memory cells trigger a faster, stronger antibody response that destroys it before disease develops.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The vaccine's harmless antigens trigger antibody and memory cell production; on later infection the memory cells give a fast, strong response that prevents disease.",
            commonErrors: ["Saying the vaccine kills the pathogen directly."],
            examinerNote: "B1 harmless antigens. B1 antibodies + memory cells. B1 no disease from vaccine. R1 fast secondary response. Allow oe.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Antibiotics are often prescribed for viral infections such as influenza, even though they only work on bacteria. Explain why this is a problem, and describe how antibiotic resistance develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotics", statement: "Antibiotics kill bacteria or stop them growing; they do not work on viruses." },
            ],
            steps: [
              { reasoning: "Antibiotics have no effect on viruses, so prescribing them for influenza does not help the patient.", marks: 1, markCode: "B" },
              { reasoning: "The unnecessary use still exposes bacteria in the body and environment to the antibiotic.", marks: 1, markCode: "B" },
              { reasoning: "Bacteria that happen to be resistant survive while susceptible ones are killed; the resistant bacteria reproduce and spread.", marks: 1, markCode: "R" },
              { reasoning: "Over time this makes infections harder to treat, so antibiotics must be used only when needed and courses completed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Antibiotics don't work on viruses, so they can't treat influenza; unnecessary use lets resistant bacteria survive and spread, making future infections harder to treat.",
            commonErrors: ["Saying antibiotics kill viruses."],
            examinerNote: "B1 no effect on viruses. B1 unnecessary exposure. R1 resistant survive/spread. R1 consequence / responsible use. Allow oe.",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a way infectious pathogens can spread between people?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only through direct blood transfusion" },
              { id: "b", text: "Through the air in coughs and sneezes, contaminated food and water, and touch" },
              { id: "c", text: "Only through genetic inheritance" },
              { id: "d", text: "Only through vaccination" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transmission", statement: "Pathogens spread through the air (coughs/sneezes), contaminated food and water, touch and animals such as mosquitoes." },
            ],
            steps: [
              { reasoning: "Infectious diseases spread by droplets, contaminated food/water, contact and vectors; they are not inherited genetically.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Through the air in coughs and sneezes, contaminated food and water, and touch",
            commonErrors: ["Thinking infectious diseases are inherited."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is herd immunity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every person in a population is vaccinated" },
              { id: "b", text: "When most of a population is immune, the pathogen cannot spread easily and unvaccinated people are also protected" },
              { id: "c", text: "A vaccine that works on all diseases" },
              { id: "d", text: "Immunity passed from mother to baby only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Herd immunity", statement: "When most of a population is immune, the pathogen finds few hosts and spreads less, protecting even those who are not immune." },
            ],
            steps: [
              { reasoning: "Herd immunity protects the whole community because the pathogen cannot spread when most people are immune.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** When most of a population is immune, the pathogen cannot spread easily and unvaccinated people are also protected",
            commonErrors: ["Thinking every person must be vaccinated."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-disease-immunity-health-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A health charity runs a vaccination campaign in two regions.\n\n| Region | Population | Vaccinated | Cases of measles this year |\n| --- | --- | --- | --- |\n| A | 10 000 | 9 500 | 10 |\n| B | 10 000 | 6 000 | 250 |",
          parts: [
            { label: "a", prompt: "Calculate the vaccination coverage in each region as a percentage.", marks: 2 },
            { label: "b", prompt: "Calculate how many times more measles cases occurred in region B than region A.", marks: 2 },
            { label: "c", prompt: "Explain why region A has far fewer cases even though some people are not vaccinated.", marks: 2 },
            { label: "d", prompt: "Evaluate **one** reason why vaccination coverage might be lower in region B, and suggest one way to improve it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaccination coverage", statement: "$\\dfrac{\\text{vaccinated}}{\\text{total}} \\times 100$" },
              { kind: "principle", name: "Herd immunity", statement: "High coverage means few hosts, so the pathogen spreads less." },
            ],
            steps: [
              { part: "a", reasoning: "Region A: $\\frac{9500}{10000} \\times 100 = 95\\%$.", working: "95\\%", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Region B: $\\frac{6000}{10000} \\times 100 = 60\\%$.", working: "60\\%", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide the cases in B by the cases in A.", working: "250 \\div 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 25\\text{ times}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Region A has 95% coverage, so most people are immune and the virus cannot spread easily.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This is herd immunity: unvaccinated people are protected because there are few infected people to pass it on.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "One reason for low coverage: clinics are far away, vaccines cost money, or people lack information/trust.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "One improvement: mobile vaccination clinics, free vaccines, or health education campaigns; each has a cost/effort limitation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) A: 95%, B: 60% (b) 25 times (c) Herd immunity at 95% coverage (d) Reason + improvement, e.g. distance/cost -> mobile clinics or free vaccines.",
            commonErrors: ["In (b) subtracting to give 240.", "In (c) saying everyone in A is vaccinated."],
            examinerNote: "(a) M1 for each correct percentage. (b) M1 for 250/10. A1 for 25. (d) Reason and improvement must be linked.",
          },
        },
      ],
    },
  ],
};
