import type { Difficulty, Lesson, MarkPrinciple, MarkStep, Markscheme, Question, QuestionPart, QuestionResponse } from "../../../types.ts";

type StepTuple = [string, number, MarkStep["markCode"], string?];
type StructStepTuple = [string, string, number, MarkStep["markCode"], string?];
type PartTuple = [string, string, number];

function prin(kind: MarkPrinciple["kind"], name: string, statement: string): MarkPrinciple { return { kind, name, statement }; }
function step(reasoning: string, marks: number, markCode: MarkStep["markCode"], working?: string, part?: string): MarkStep {
  const s: MarkStep = { reasoning, marks, markCode };
  if (working !== undefined) s.working = working;
  if (part !== undefined) s.part = part;
  return s;
}
function scheme(principles: MarkPrinciple[], steps: MarkStep[], finalAnswer: string, commonErrors?: string[]): Markscheme {
  const m: Markscheme = { principles, steps, finalAnswer };
  if (commonErrors && commonErrors.length) m.commonErrors = commonErrors;
  return m;
}
function makeQ(id: string, difficulty: Difficulty, totalMarks: number, stem: string, response: QuestionResponse, markscheme: Markscheme, parts?: QuestionPart[]): Question {
  const q: Question = { id, difficulty, totalMarks, stem, response, markscheme };
  if (parts) q.parts = parts;
  return q;
}
function mcq(id: string, difficulty: Difficulty, stem: string, choices: [string, string, string, string], correct: "a" | "b" | "c" | "d", principle: MarkPrinciple, reasoning: string, commonError?: string): Question {
  const textById = { a: choices[0], b: choices[1], c: choices[2], d: choices[3] };
  return makeQ(id, difficulty, 1, stem, { type: "mcq", choices: [{ id: "a", text: choices[0] }, { id: "b", text: choices[1] }, { id: "c", text: choices[2] }, { id: "d", text: choices[3] }], correctChoiceId: correct }, scheme([principle], [step(reasoning, 1, "B")], `**(${correct})** ${textById[correct]}`, commonError ? [commonError] : undefined));
}
function num(id: string, difficulty: Difficulty, stem: string, answer: number, unit: string | undefined, principle: MarkPrinciple, reasoning: string, working: string, finalAnswer: string, markCode: MarkStep["markCode"] = "M", commonError?: string): Question {
  const part: { label: string; answer: number; unit?: string } = { label: "a", answer, ...(unit !== undefined ? { unit } : {}) };
  return makeQ(id, difficulty, 1, stem, { type: "numeric", parts: [part] }, scheme([principle], [step(reasoning, 1, markCode, working)], finalAnswer, commonError ? [commonError] : undefined));
}
function open(id: string, difficulty: Difficulty, totalMarks: number, stem: string, principle: MarkPrinciple, steps: StepTuple[], finalAnswer: string, commonError?: string): Question {
  return makeQ(id, difficulty, totalMarks, stem, { type: "open" }, scheme([principle], steps.map((s) => step(s[0], s[1], s[2], s[3])), finalAnswer, commonError ? [commonError] : undefined));
}
function struct(id: string, difficulty: Difficulty, stem: string, parts: PartTuple[], principle: MarkPrinciple, steps: StructStepTuple[], finalAnswer: string, commonError?: string): Question {
  const total = parts.reduce((sum, p) => sum + p[2], 0);
  return makeQ(id, difficulty, total, stem, { type: "open" }, scheme([principle], steps.map((s) => step(s[1], s[2], s[3], s[4], s[0])), finalAnswer, commonError ? [commonError] : undefined), parts.map((p) => ({ label: p[0], prompt: p[1], marks: p[2] })));
}

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
              { id: "a", text: "Pill" },
              { id: "b", text: "Condom" },
              { id: "c", text: "Sterilisation" },
              { id: "d", text: "IUD" },
            ],
            correctChoiceId: "b",
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
        mcq("olbio-u8-contraception-sti-q5", "foundation", "The contraceptive pill mainly works by:", ["Preventing ovulation using hormones", "Blocking sperm physically", "Stopping implantation only", "Killing sperm"], "a", prin("property", "Hormonal contraception", "The pill uses hormones to prevent ovulation."), "Recall the mechanism.", "It does not physically block sperm."),
        mcq("olbio-u8-contraception-sti-q6", "foundation", "An IUD prevents pregnancy mainly by:", ["Preventing implantation in the uterus", "Stopping ovulation always", "Killing all sperm", "Blocking the cervix permanently"], "a", prin("property", "IUD", "An IUD prevents the embryo implanting in the uterus."), "Recall the mechanism.", "It does not necessarily stop ovulation."),
        mcq("olbio-u8-contraception-sti-q7", "core", "Sexually transmitted infections are spread by:", ["Sexual contact", "Airborne droplets", "Contaminated food", "Mosquito bites only"], "a", prin("property", "STI transmission", "STIs spread through sexual contact with an infected person."), "Recall the route.", "They are not mainly airborne or food-borne."),
        mcq("olbio-u8-contraception-sti-q8", "core", "HIV is caused by a:", ["Virus", "Bacterium", "Fungus", "Protozoan"], "a", prin("property", "HIV", "HIV is a virus that attacks immune cells."), "Recall the pathogen type.", "Chlamydia/gonorrhoea are bacterial; HIV is viral."),
        mcq("olbio-u8-contraception-sti-q9", "challenge", "Condoms are unique among common contraceptives because they:", ["Prevent both pregnancy and STI transmission", "Only prevent pregnancy", "Are permanent", "Require hormones"], "a", prin("property", "Condom", "Condoms are a barrier that blocks sperm and pathogens."), "Recall the dual protection.", "Other methods do not block STIs."),
        num("olbio-u8-contraception-sti-q10", "foundation", "The methods listed are condom, pill, IUD, sterilisation and natural. How many methods are listed?", 5, "methods", prin("property", "Contraception methods", "Condom, pill, IUD, sterilisation and natural are five methods."), "Count the methods.", "5", "**5 methods**"),
        num("olbio-u8-contraception-sti-q11", "core", "STIs are grouped into bacterial and viral types. How many broad types are there?", 2, "types", prin("property", "STI types", "STIs are classified as bacterial or viral."), "Count the types.", "2", "**2 types**"),
        num("olbio-u8-contraception-sti-q12", "core", "A condom is about 98% effective and the pill about 99%. Calculate the percentage-point difference in effectiveness.", 1, "percentage points", prin("property", "Effectiveness difference", "Difference = higher - lower percentage."), "Subtract condom from pill.", "99 - 98 = 1", "**1 percentage point**"),
        num("olbio-u8-contraception-sti-q13", "challenge", "HIV attacks immune cells. If a CD4 count falls from 1000 to 200 cells/mm3, calculate the percentage decrease.", 80, "%", prin("property", "Percentage decrease", "Percentage = decrease / original x 100."), "Compute decrease then percentage.", "(1000 - 200) / 1000 x 100 = 80", "**80% decrease**"),
        open("olbio-u8-contraception-sti-q14", "core", 3, "Describe two types of contraception and how each works.", prin("property", "Contraception", "Barrier blocks sperm; hormonal prevents ovulation; IUD prevents implantation."), [["Barrier methods like condoms physically block sperm from reaching the egg.", 1, "M"], ["Hormonal methods like the pill prevent ovulation.", 1, "M"], ["State how each works.", 1, "A"]], "Barrier methods block sperm; hormonal methods prevent ovulation; IUDs prevent implantation.", "Saying the pill blocks sperm physically."),
        open("olbio-u8-contraception-sti-q15", "challenge", 4, "Explain how HIV leads to AIDS.", prin("property", "HIV/AIDS", "HIV destroys immune cells, leading to AIDS and opportunistic infections."), [["HIV is a virus that attacks immune system cells.", 1, "M"], ["The immune system becomes weakened.", 1, "M"], ["The body cannot fight infections effectively.", 1, "M"], ["This advanced stage is AIDS, allowing opportunistic infections.", 1, "A"]], "HIV destroys immune cells; without a working immune system the person develops AIDS and opportunistic infections.", "Saying HIV directly kills the person."),
        struct("olbio-u8-contraception-sti-q16", "challenge", "A student compares contraception methods and STIs.", [["a", "Describe a barrier method and how it works.", 2], ["b", "Describe a hormonal method and how it works.", 2], ["c", "Name one method that also prevents STIs.", 1], ["d", "Distinguish a bacterial from a viral STI.", 2], ["e", "State two ways to reduce STI risk.", 2]], prin("property", "Contraception and STIs", "Barrier blocks sperm/pathogens; hormonal prevents ovulation; STIs are bacterial or viral."), [["a", "Condom is a barrier method.", 1, "M"], ["a", "It physically blocks sperm and pathogens.", 1, "A"], ["b", "The pill is hormonal contraception.", 1, "M"], ["b", "It prevents ovulation using hormones.", 1, "A"], ["c", "The condom prevents STI transmission.", 1, "A"], ["d", "Bacterial STIs like chlamydia are treatable with antibiotics.", 1, "M"], ["d", "Viral STIs like HIV have no simple cure.", 1, "A"], ["e", "Using condoms reduces STI risk.", 1, "M"], ["e", "Screening and monogamy also reduce risk.", 1, "A"]], "(a) condom barrier (b) pill prevents ovulation (c) condom for STIs (d) bacterial vs viral (e) condoms/screening", "Claiming all contraceptives prevent STIs."),
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
              { id: "a", text: "The placenta" },
              { id: "b", text: "Amniotic fluid" },
              { id: "c", text: "A type of hormone" },
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
        mcq("olbio-u8-birth-q5", "foundation", "During labour, uterine contractions are stimulated by:", ["Oxytocin", "Insulin", "Adrenaline", "Thyroxine"], "a", prin("property", "Oxytocin", "Oxytocin stimulates uterine contractions during labour."), "Recall the hormone.", "Progesterone maintains pregnancy; oxytocin drives labour."),
        mcq("olbio-u8-birth-q6", "foundation", "Milk production after birth is stimulated by:", ["Prolactin", "Oxytocin", "Insulin", "Glucagon"], "a", prin("property", "Prolactin", "Prolactin stimulates milk production by the mammary glands."), "Recall the hormone.", "Oxytocin helps milk ejection; prolactin makes milk."),
        mcq("olbio-u8-birth-q7", "core", "The stages of labour are:", ["Cervix dilation, baby delivery, placenta delivery", "Ovulation, fertilisation, implantation", "Menstruation, repair, luteal", "Inspiration, expiration, rest"], "a", prin("property", "Labour stages", "Labour proceeds through dilation, delivery of baby, then placenta."), "Recall the sequence.", "The other options are unrelated processes."),
        mcq("olbio-u8-birth-q8", "core", "Breast milk is beneficial because it contains:", ["Antibodies and balanced nutrients", "Only water", "No proteins", "Toxins"], "a", prin("property", "Breast milk", "Breast milk provides antibodies and ideal nutrition."), "Recall the composition.", "It is nutrient-rich, not just water."),
        mcq("olbio-u8-birth-q9", "challenge", "Colostrum is important for a newborn because it provides:", ["Passive immunity through antibodies", "Permanent immunity", "Adult hormones", "Digestion enzymes only"], "a", prin("property", "Colostrum", "Colostrum is rich in antibodies giving passive immunity."), "Recall the immune role.", "It is the first milk, not permanent immunity."),
        num("olbio-u8-birth-q10", "foundation", "Colostrum is produced as the baby's first milk. How many times is it the first milk?", 1, "time", prin("property", "Colostrum", "Colostrum is the first milk produced after birth."), "Read the fact.", "1", "**First milk**"),
        num("olbio-u8-birth-q11", "core", "Labour has three stages: cervix dilation, baby delivery and placenta delivery. How many stages are there?", 3, "stages", prin("property", "Labour stages", "Three stages of labour."), "Count the stages.", "3", "**3 stages**"),
        num("olbio-u8-birth-q12", "core", "A pregnancy lasts about 40 weeks. How many days is that (1 week = 7 days)?", 280, "days", prin("property", "Pregnancy length", "40 weeks x 7 days = 280 days."), "Multiply weeks by 7.", "40 x 7 = 280", "**280 days**"),
        num("olbio-u8-birth-q13", "challenge", "Colostrum contains about 5 times more antibodies than mature breast milk. If mature milk has 2 units, how many units are in colostrum?", 10, "units", prin("property", "Colostrum antibodies", "Colostrum antibody level = 5 x mature milk."), "Multiply by 5.", "2 x 5 = 10", "**10 units**"),
        open("olbio-u8-birth-q14", "core", 3, "State two benefits of breastfeeding for the baby.", prin("property", "Breastfeeding", "Provides antibodies, ideal nutrition and bonding."), [["It provides antibodies giving passive immunity.", 1, "M"], ["It supplies balanced, easily digested nutrition.", 1, "M"], ["It also promotes bonding and reduces infection risk.", 1, "A"]], "Breastfeeding gives antibodies/passive immunity, ideal nutrition and bonding.", "Listing only nutritional benefit."),
        open("olbio-u8-birth-q15", "challenge", 4, "Describe the stages of labour.", prin("property", "Labour", "Dilation of cervix, delivery of baby, delivery of placenta."), [["The cervix dilates to allow passage.", 1, "M"], ["Uterine contractions push the baby out.", 1, "M"], ["The baby is delivered.", 1, "M"], ["The placenta is delivered after the baby.", 1, "A"]], "Labour proceeds through cervical dilation, baby delivery and placenta delivery.", "Forgetting the placenta is delivered last."),
        struct("olbio-u8-birth-q16", "challenge", "A student describes childbirth and infant feeding.", [["a", "Name the hormone that stimulates labour contractions.", 1], ["b", "List the three stages of labour.", 3], ["c", "Explain the role of colostrum.", 2], ["d", "State two benefits of breast milk.", 2], ["e", "Name the hormone that stimulates milk production.", 1]], prin("property", "Birth and feeding", "Oxytocin drives labour; prolactin makes milk; colostrum gives antibodies."), [["a", "Oxytocin stimulates contractions.", 1, "A"], ["b", "Cervix dilation is the first stage.", 1, "M"], ["b", "Baby delivery is the second stage.", 1, "M"], ["b", "Placenta delivery is the third stage.", 1, "A"], ["c", "Colostrum is the first milk.", 1, "M"], ["c", "It is rich in antibodies for passive immunity.", 1, "A"], ["d", "Breast milk gives ideal balanced nutrition.", 1, "M"], ["d", "It also promotes bonding and reduces infection.", 1, "A"], ["e", "Prolactin stimulates milk production.", 1, "A"]], "(a) oxytocin (b) dilation/baby/placenta (c) antibodies/passive immunity (d) nutrition/bonding (e) prolactin", "Confusing oxytocin (labour) with prolactin (milk)."),
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
