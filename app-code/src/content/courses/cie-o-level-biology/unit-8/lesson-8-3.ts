import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "olbio-u8-lesson-8-3",
  code: "8-3",
  title: "Contraception, STIs and Birth",
  goal: "I CAN describe contraception methods, sexually transmitted infections, and the process of birth and breastfeeding.",
  standards: ["5090 8.3"],
  vocabulary: [
    { term: "Contraception", definition: "Methods preventing pregnancy." },
    { term: "Barrier method", definition: "Physical barrier preventing sperm reaching egg (condom, diaphragm)." },
    { term: "Hormonal contraception", definition: "Pills/patches altering hormones to prevent ovulation." },
    { term: "STI", definition: "Sexually transmitted infection — spread through sexual contact." },
    { term: "HIV/AIDS", definition: "Virus attacking immune system; transmitted via bodily fluids." },
    { term: "Labour", definition: "Process of childbirth — uterine contractions expelling fetus." },
    { term: "Colostrum", definition: "First milk produced after birth; rich in antibodies." },
    { term: "Lactation", definition: "Production of milk by mammary glands after birth." },
  ],
  concepts: [
    {
      id: "olbio-u8-contraception-sti",
      title: "Contraception and STIs",
      skill: "Describe contraception methods and common sexually transmitted infections.",
      lesson: {
        sections: [
          {
            heading: "Contraception methods",
            body: "| Method | How it works |\n|---|---|\n| Condoms | barrier — blocks sperm, prevents STI |\n| Pill | hormones prevent ovulation |\n| IUD | prevents implantation |\n| Sterilisation | permanent — blocks tubes/vas deferens |\n| Natural | fertility awareness — timing |",
          },
          {
            heading: "STIs",
            body: "- **Bacterial**: chlamydia, gonorrhoea — treatable with antibiotics.\n- **Viral**: HIV/AIDS, herpes, HPV — no cure for some.\n- Prevention: condoms, screening, monogamy.\n- HIV attacks immune system → AIDS (opportunistic infections).",
          },
          {
            heading: "Why contraception matters",
            body: "Prevents unwanted pregnancy, allows family planning, prevents STI transmission (condoms), and gives women reproductive choice.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are condoms unique among contraceptives?",
          solution: "They're the only common method that BOTH prevents pregnancy AND blocks STI transmission.",
        },
      },
      questions: [
        {
          id: "olbio-u8-contraception-sti-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which contraceptive method also prevents STI transmission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condom" },
              { id: "b", text: "Pill" },
              { id: "c", text: "IUD" },
              { id: "d", text: "Sterilisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Condom", statement: "Barrier method blocking sperm AND pathogens." },
            ],
            steps: [
              { reasoning: "Recall which method blocks STIs.", working: "\\text{condom}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Condom",
            commonErrors: ["Choosing pill — prevents pregnancy but not STIs."],
          },
        },
        {
          id: "olbio-u8-contraception-sti-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two types of contraception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Contraception", statement: "Barrier, hormonal, IUD, sterilisation, natural." },
            ],
            steps: [
              { reasoning: "Give two methods.", working: "\\text{condom, pill, IUD}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Barrier (condom), hormonal (pill), IUD, sterilisation, or natural methods.",
            commonErrors: ["Only naming one method."],
          },
        },
        {
          id: "olbio-u8-contraception-sti-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how HIV causes disease.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "HIV/AIDS", statement: "Virus attacks immune cells → AIDS → opportunistic infections." },
            ],
            steps: [
              { reasoning: "HIV attacks immune system cells.", working: "\\text{immune cells}", marks: 1, markCode: "M" },
              { reasoning: "Immune system weakened.", working: "\\text{weakened immunity}", marks: 1, markCode: "M" },
              { reasoning: "Body can't fight infections → AIDS.", working: "\\text{AIDS}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HIV attacks and destroys immune system cells, weakening the body's defences; with no effective immune response, opportunistic infections and cancers develop — this stage is AIDS.",
            commonErrors: ["Saying 'HIV directly kills you' — it kills immune cells, leading to AIDS."],
          },
        },
        {
          id: "olbio-u8-contraception-sti-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare different methods of contraception.",
          parts: [
            { label: "a", prompt: "Describe two barrier methods.", marks: 3 },
            { label: "b", prompt: "Describe one hormonal method.", marks: 3 },
            { label: "c", prompt: "State which method also prevents STIs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Contraception", statement: "Barrier blocks sperm; hormonal prevents ovulation; condom blocks STIs." },
            ],
            steps: [
              { part: "a", reasoning: "Condom: male barrier.", working: "\\text{condom}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Diaphragm: female barrier.", working: "\\text{diaphragm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both prevent sperm reaching egg.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pill: hormones prevent ovulation.", working: "\\text{pill}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or patch/injection.", working: "\\text{patch/injection}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Condom.", working: "\\text{condom}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Physical barrier blocks pathogens.", working: "\\text{barrier}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State method and reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) condom/diaphragm barrier (b) pill hormonal prevents ovulation (c) condom — blocks pathogens",
            commonErrors: ["In (c) saying 'all methods prevent STIs' — only condoms do."],
          },
        },
      ],
    },
    {
      id: "olbio-u8-birth",
      title: "Birth and breastfeeding",
      skill: "Describe labour, birth, and the role of colostrum and breastfeeding.",
      lesson: {
        sections: [
          {
            heading: "Labour and birth",
            body: "- **Labour**: uterus contracts rhythmically, pushing fetus toward cervix.\n- **Stages**: dilation of cervix → delivery of baby → delivery of placenta.\n- Assisted by midwife/doctor if needed.",
          },
          {
            heading: "Colostrum and breastfeeding",
            body: "- **Colostrum**: first milk — rich in antibodies giving baby passive immunity.\n- **Breast milk**: ideal nutrition — balanced nutrients, antibodies, easily digested.\n- Breastfeeding also promotes bonding and reduces infection risk.",
          },
          {
            heading: "Hormonal control of birth",
            body: "Oxytocin stimulates uterine contractions during labour. Prolactin stimulates milk production after birth.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is colostrum important for newborns?",
          solution: "It's rich in antibodies providing passive immunity before the baby's own immune system matures.",
        },
      },
      questions: [
        {
          id: "olbio-u8-birth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is colostrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First milk rich in antibodies" },
              { id: "b", text: "A type of hormone" },
              { id: "c", text: "The placenta" },
              { id: "d", text: "Amniotic fluid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Colostrum", statement: "First milk with antibodies." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{first milk + antibodies}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** First milk rich in antibodies",
            commonErrors: ["Choosing 'hormone' — it's a milk secretion."],
          },
        },
        {
          id: "olbio-u8-birth-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two benefits of breastfeeding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Breastfeeding", statement: "Antibodies, ideal nutrition, bonding, reduced infection." },
            ],
            steps: [
              { reasoning: "Give two benefits.", working: "\\text{antibodies, nutrition, bonding}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Provides antibodies (passive immunity), ideal balanced nutrition, promotes bonding, and reduces infection risk.",
            commonErrors: ["Saying 'it's cheaper' — focus on biological benefits."],
          },
        },
        {
          id: "olbio-u8-birth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of oxytocin during labour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Oxytocin", statement: "Stimulates uterine contractions during labour." },
            ],
            steps: [
              { reasoning: "Oxytocin released during labour.", working: "\\text{oxytocin}", marks: 1, markCode: "M" },
              { reasoning: "Stimulates uterine muscle contractions.", working: "\\text{contractions}", marks: 1, markCode: "M" },
              { reasoning: "Pushes fetus toward cervix.", working: "\\text{pushes fetus}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: drives birth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxytocin stimulates rhythmic contractions of the uterine muscles, pushing the fetus toward the cervix and driving the labour process.",
            commonErrors: ["Saying 'progesterone' — that's for maintaining pregnancy, not labour."],
          },
        },
        {
          id: "olbio-u8-birth-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the process of childbirth and the role of breastfeeding.",
          parts: [
            { label: "a", prompt: "Describe the stages of labour.", marks: 3 },
            { label: "b", prompt: "Explain the role of hormones in labour.", marks: 2 },
            { label: "c", prompt: "Explain the importance of colostrum.", marks: 2 },
            { label: "d", prompt: "State two benefits of breast milk.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Birth and feeding", statement: "Labour stages → oxytocin → delivery → colostrum/breast milk benefits." },
            ],
            steps: [
              { part: "a", reasoning: "Cervix dilation.", working: "\\text{dilation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Baby delivery.", working: "\\text{baby}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Placenta delivery.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oxytocin → contractions.", working: "\\text{oxytocin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Drives labour.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rich in antibodies.", working: "\\text{antibodies}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Passive immunity for baby.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ideal nutrition.", working: "\\text{nutrition}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Bonding/reduced infection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) dilation→baby→placenta (b) oxytocin contractions (c) antibodies/passive immunity (d) nutrition, bonding",
            commonErrors: ["In (a) forgetting placenta is delivered after baby."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u8-contraception-notes",
      title: "Contraception, STIs and birth — revision notes",
      summary: "Contraception methods, STIs, labour, colostrum.",
      sections: [
        {
          heading: "Contraception and STIs",
          body: "Barrier (condom — also blocks STIs), hormonal (pill prevents ovulation), IUD, sterilisation. STIs: bacterial (chlamydia, treatable) vs viral (HIV, herpes).",
        },
        {
          heading: "Birth and feeding",
          body: "Labour: cervix dilation → baby → placenta. Oxytocin → contractions. Colostrum: antibodies → passive immunity. Breast milk: ideal nutrition + bonding.",
        },
        {
          heading: "Exam technique",
          body: "- Only condoms prevent BOTH pregnancy AND STIs.\n- Colostrum ≠ breast milk: colostrum is first milk, antibody-rich.",
        },
      ],
    },
  ],
};
