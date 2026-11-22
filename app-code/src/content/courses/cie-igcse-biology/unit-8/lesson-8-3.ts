import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cieb-u8-lesson-8-3",
  code: "8-3",
  title: "Contraception, STIs and Birth",
  goal: "I CAN describe contraception methods, sexually transmitted infections, and the process of birth and breastfeeding.",
  standards: ["0653 8.3"],
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
      id: "cieb-u8-contraception-sti",
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
          id: "cieb-u8-contraception-sti-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which contraceptive method also prevents STI transmission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condom" },
              { id: "b", text: "Sterilisation" },
              { id: "c", text: "IUD" },
              { id: "d", text: "Pill" },
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
          id: "cieb-u8-contraception-sti-q2",
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
          id: "cieb-u8-contraception-sti-q3",
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
          id: "cieb-u8-contraception-sti-q4",
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
        {
          id: "cieb-u8-contraception-sti-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does the contraceptive pill prevent pregnancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its hormones prevent ovulation" },
              { id: "b", text: "It prevents implantation only" },
              { id: "c", text: "It kills sperm in the vagina" },
              { id: "d", text: "It physically blocks sperm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hormonal contraception", statement: "Pills/patches alter hormones to prevent ovulation." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{hormones} \\to \\text{no ovulation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Its hormones prevent ovulation",
            commonErrors: ["Choosing 'blocks sperm' — that's a barrier method like the condom."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of STIs is caused by bacteria and can be treated with antibiotics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HIV and herpes" },
              { id: "b", text: "Chlamydia and gonorrhoea" },
              { id: "c", text: "HPV and HIV" },
              { id: "d", text: "Herpes and HPV" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bacterial STIs", statement: "Chlamydia and gonorrhoea are bacterial and treatable with antibiotics." },
            ],
            steps: [
              { reasoning: "Match infections to type.", working: "\\text{chlamydia, gonorrhoea} = \\text{bacterial}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chlamydia and gonorrhoea",
            commonErrors: ["Choosing HIV — HIV is viral and has no cure."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main way an IUD prevents pregnancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops ovulation" },
              { id: "b", text: "It blocks sperm physically" },
              { id: "c", text: "It sterilises the ovaries" },
              { id: "d", text: "It prevents implantation of the embryo" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "IUD", statement: "Prevents implantation in the uterus lining." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{IUD} \\to \\text{blocks implantation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It prevents implantation of the embryo",
            commonErrors: ["Choosing 'stops ovulation' — that's the pill's mechanism."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what sterilisation means as a method of contraception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sterilisation", statement: "Permanent method blocking sperm/egg tubes." },
            ],
            steps: [
              { reasoning: "Describe the procedure.", working: "\\text{tubes blocked}", marks: 1, markCode: "M" },
              { reasoning: "State it is permanent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sterilisation permanently blocks the tubes carrying sperm or eggs (e.g. vas deferens or oviducts) so gametes cannot meet — it is a permanent method of contraception.",
            commonErrors: ["Saying it is reversible — sterilisation is permanent."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of viral STIs among the following: HIV, chlamydia, herpes and gonorrhoea.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "STIs" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "STI types", statement: "Viral: HIV, herpes, HPV. Bacterial: chlamydia, gonorrhoea." },
            ],
            steps: [
              { reasoning: "Identify viral cases: HIV and herpes.", working: "\\text{HIV, herpes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting chlamydia — it is bacterial, not viral."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A woman takes the combined contraceptive pill for 21 days followed by a break each 28-day cycle. State the number of days she takes active pills per cycle.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 21, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Combined pill regimen", statement: "21 active pill days then a 7-day break." },
            ],
            steps: [
              { reasoning: "Recall the regimen.", working: "\\text{21 active days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21 days",
            commonErrors: ["Answering 7 — that's the break length, not the active-pill days."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The combined pill is taken for 21 active days followed by a 7-day break in each 28-day cycle. State (a) the number of active-pill days and (b) the number of break days.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "a", answer: 21, unit: "days" },
              { label: "b", answer: 7, unit: "days" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Combined pill regimen", statement: "21 active days + 7-day break = 28-day cycle." },
            ],
            steps: [
              { reasoning: "State the active-pill days.", working: "21", marks: 1, markCode: "A" },
              { reasoning: "State the break days.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 21 days (b) 7 days",
            commonErrors: ["Swapping the values — 21 is active, 7 is the break."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways in which STIs can be prevented.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "STI prevention", statement: "Condoms, screening, monogamy, treating partners." },
            ],
            steps: [
              { reasoning: "Give two prevention methods.", working: "\\text{condoms, screening, monogamy}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Using condoms, regular screening, having fewer sexual partners (monogamy), and ensuring partners are treated.",
            commonErrors: ["Only naming contraception for pregnancy — focus on blocking transmission."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare barrier and hormonal methods of contraception.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Barrier vs hormonal", statement: "Barrier physically blocks sperm; hormonal alters hormones to prevent ovulation. Only condoms block STIs." },
            ],
            steps: [
              { reasoning: "Barrier method: physical block to sperm.", working: "\\text{blocks sperm}", marks: 1, markCode: "M" },
              { reasoning: "Hormonal method: prevents ovulation via hormones.", working: "\\text{prevents ovulation}", marks: 1, markCode: "M" },
              { reasoning: "Condom uniquely also blocks STI pathogens.", working: "\\text{condom + STIs}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Barrier methods (condom, diaphragm) physically prevent sperm reaching the egg and the condom also blocks STI transmission; hormonal methods (pill, patch) use hormones to prevent ovulation but do not protect against STIs.",
            commonErrors: ["Saying hormonal methods block sperm — they prevent ovulation instead."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the importance of contraception for individuals and for public health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Why contraception matters", statement: "Prevents unwanted pregnancy, enables family planning, reduces STI spread." },
            ],
            steps: [
              { reasoning: "Prevents unwanted pregnancy and allows family planning.", working: "\\text{family planning}", marks: 1, markCode: "M" },
              { reasoning: "Gives women reproductive choice.", working: "\\text{reproductive choice}", marks: 1, markCode: "M" },
              { reasoning: "Condoms reduce STI transmission — public health benefit.", working: "\\text{STI reduction}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contraception prevents unwanted pregnancy, allows people to plan their families and gives women reproductive choice; condoms also reduce the spread of STIs, benefiting public health.",
            commonErrors: ["Only discussing pregnancy — include the STI/public-health angle."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which contraceptive method is unique in also preventing STI transmission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IUD" },
              { id: "b", text: "Condom" },
              { id: "c", text: "Sterilisation" },
              { id: "d", text: "Pill" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Condom", statement: "Only common method that both prevents pregnancy and blocks STI pathogens." },
            ],
            steps: [
              { reasoning: "Recall the unique method.", working: "\\text{condom}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Condom",
            commonErrors: ["Choosing the pill — it prevents pregnancy but not STIs."],
          },
        },
        {
          id: "cieb-u8-contraception-sti-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a permanent method of contraception?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pill" },
              { id: "b", text: "Condom" },
              { id: "c", text: "Sterilisation" },
              { id: "d", text: "IUD" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sterilisation", statement: "Permanent blocking of the sperm/egg tubes." },
            ],
            steps: [
              { reasoning: "Recall which method is permanent.", working: "\\text{sterilisation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sterilisation",
            commonErrors: ["Choosing IUD — it is long-acting but removable, not permanent."],
          },
        },
      ],
    },
    {
      id: "cieb-u8-birth",
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
          id: "cieb-u8-birth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is colostrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amniotic fluid" },
              { id: "b", text: "A type of hormone" },
              { id: "c", text: "The placenta" },
              { id: "d", text: "First milk rich in antibodies" },
            ],
            correctChoiceId: "d",
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
          id: "cieb-u8-birth-q2",
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
          id: "cieb-u8-birth-q3",
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
          id: "cieb-u8-birth-q4",
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
        {
          id: "cieb-u8-birth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone stimulates uterine contractions during labour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Oxytocin" },
              { id: "c", text: "Progesterone" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Oxytocin", statement: "Stimulates uterine contractions during labour." },
            ],
            steps: [
              { reasoning: "Match hormone to role.", working: "\\text{oxytocin} \\to \\text{contractions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxytocin",
            commonErrors: ["Choosing progesterone — that maintains the pregnancy lining, not contractions."],
          },
        },
        {
          id: "cieb-u8-birth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone stimulates milk production by the mammary glands after birth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prolactin" },
              { id: "b", text: "Oxytocin" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Oestrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Prolactin", statement: "Stimulates milk production (lactation) after birth." },
            ],
            steps: [
              { reasoning: "Match hormone to milk production.", working: "\\text{prolactin} \\to \\text{milk}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Prolactin",
            commonErrors: ["Choosing oxytocin — oxytocin drives labour contractions."],
          },
        },
        {
          id: "cieb-u8-birth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens during the first stage of labour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cervix dilates" },
              { id: "b", text: "Colostrum is produced" },
              { id: "c", text: "The placenta is delivered" },
              { id: "d", text: "The baby is delivered" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stages of labour", statement: "Dilation of cervix → delivery of baby → delivery of placenta." },
            ],
            steps: [
              { reasoning: "Recall the first stage.", working: "\\text{cervix dilation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The cervix dilates",
            commonErrors: ["Choosing 'baby delivered' — that's the second stage."],
          },
        },
        {
          id: "cieb-u8-birth-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of main stages of labour.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "stages" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Labour stages", statement: "Three stages: dilation, baby delivery, placenta delivery." },
            ],
            steps: [
              { reasoning: "Recall the count.", working: "\\text{3 stages}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting the placenta is delivered as a separate stage."],
          },
        },
        {
          id: "cieb-u8-birth-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of chromosomes in the body cells of a newborn baby.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Body cell chromosomes", statement: "Human body cells are diploid: 46 chromosomes." },
            ],
            steps: [
              { reasoning: "Recall the diploid number.", working: "\\text{2n} = 46", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46",
            commonErrors: ["Answering 23 — that's the gamete (haploid) number."],
          },
        },
        {
          id: "cieb-u8-birth-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many hormones are described as controlling childbirth and milk production in this topic (oxytocin and prolactin)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "hormones" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Birth hormones", statement: "Oxytocin (contractions) and prolactin (milk production)." },
            ],
            steps: [
              { reasoning: "Count the hormones named.", working: "\\text{oxytocin} + \\text{prolactin} = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Including progesterone — it maintains pregnancy, not labour contractions."],
          },
        },
        {
          id: "cieb-u8-birth-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between colostrum and breast milk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Colostrum vs breast milk", statement: "Colostrum is the first milk, very antibody-rich; breast milk follows with balanced nutrition." },
            ],
            steps: [
              { reasoning: "Colostrum is produced first after birth.", working: "\\text{first milk}", marks: 1, markCode: "M" },
              { reasoning: "Colostrum is richer in antibodies; breast milk is balanced nutrition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colostrum is the first milk produced after birth and is especially rich in antibodies; breast milk follows and provides balanced, easily digested nutrition.",
            commonErrors: ["Saying they are identical — colostrum is the antibody-rich first milk."],
          },
        },
        {
          id: "cieb-u8-birth-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the three stages of labour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stages of labour", statement: "Dilation of cervix → delivery of baby → delivery of placenta." },
            ],
            steps: [
              { reasoning: "Stage 1: cervix dilates.", working: "\\text{dilation}", marks: 1, markCode: "M" },
              { reasoning: "Stage 2: baby delivered.", working: "\\text{baby delivery}", marks: 1, markCode: "M" },
              { reasoning: "Stage 3: placenta delivered.", working: "\\text{placenta delivery}", marks: 1, markCode: "M" },
              { reasoning: "Complete sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stage 1: the cervix dilates as the uterus contracts; stage 2: the baby is delivered; stage 3: the placenta is delivered.",
            commonErrors: ["Forgetting the placenta is delivered after the baby."],
          },
        },
        {
          id: "cieb-u8-birth-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how hormones control childbirth and milk production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Birth hormones", statement: "Oxytocin → uterine contractions; prolactin → milk production." },
            ],
            steps: [
              { reasoning: "Oxytocin released during labour.", working: "\\text{oxytocin}", marks: 1, markCode: "M" },
              { reasoning: "Oxytocin stimulates rhythmic uterine contractions pushing the fetus out.", working: "\\text{contractions}", marks: 1, markCode: "M" },
              { reasoning: "Prolactin stimulates milk production by mammary glands after birth.", working: "\\text{prolactin} \\to \\text{milk}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxytocin stimulates the rhythmic contractions of the uterus that drive labour and delivery; after birth, prolactin stimulates the mammary glands to produce milk.",
            commonErrors: ["Swapping the hormones — oxytocin for labour, prolactin for milk."],
          },
        },
        {
          id: "cieb-u8-birth-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct order of the stages of labour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cervix dilation → baby delivery → placenta delivery" },
              { id: "b", text: "Baby delivery → cervix dilation → placenta delivery" },
              { id: "c", text: "Cervix dilation → placenta delivery → baby delivery" },
              { id: "d", text: "Placenta delivery → baby delivery → cervix dilation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Labour sequence", statement: "Dilation → baby → placenta." },
            ],
            steps: [
              { reasoning: "Recall the order.", working: "\\text{dilation} \\to \\text{baby} \\to \\text{placenta}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cervix dilation → baby delivery → placenta delivery",
            commonErrors: ["Placing placenta before the baby — the placenta is delivered last."],
          },
        },
        {
          id: "cieb-u8-birth-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One important component of breast milk and colostrum for the baby is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antibodies" },
              { id: "b", text: "DNA" },
              { id: "c", text: "Testosterone" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Colostrum/breast milk", statement: "Rich in antibodies giving the baby passive immunity." },
            ],
            steps: [
              { reasoning: "Recall the key component.", working: "\\text{antibodies}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Antibodies",
            commonErrors: ["Choosing a hormone — the key benefit is antibodies/immunity."],
          },
        },
        {
          id: "cieb-u8-birth-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why breastfeeding reduces the risk of infection in babies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Breastfeeding immunity", statement: "Colostrum and breast milk contain antibodies providing passive immunity." },
            ],
            steps: [
              { reasoning: "Milk contains antibodies from the mother.", working: "\\text{antibodies}", marks: 1, markCode: "M" },
              { reasoning: "These give the baby passive immunity until its own immune system matures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colostrum and breast milk contain antibodies produced by the mother; these give the baby passive immunity, helping it fight infections before its own immune system fully develops.",
            commonErrors: ["Saying 'it kills germs directly' — the antibodies provide immunity, they don't sterilise."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u8-contraception-notes",
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
