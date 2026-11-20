// Generates Pearson Edexcel IAS/IAL practical-skills units for Biology, Chemistry and Physics.
// Usage: node scripts/gen-ial-ias-practical.cjs
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "content", "courses");

const q = (id, difficulty, totalMarks, stem, response, markscheme) => ({
  id, difficulty, totalMarks, stem, response, markscheme,
});
const mcq = (id, stem, choices, correctChoiceId, principle, answerText, commonErrors = []) => q(
  id, "foundation", 1, stem,
  { type: "mcq", choices: choices.map((text, i) => ({ id: String.fromCharCode(97 + i), text })), correctChoiceId },
  { principles: [principle], steps: [{ reasoning: answerText, marks: 1, markCode: "B" }], finalAnswer: `**(${correctChoiceId})** ${answerText}`, commonErrors },
);
const numeric = (id, difficulty, stem, answer, unit, tolerance, principles, steps, finalAnswer, commonErrors = [], totalMarks = 3) => q(
  id, difficulty, totalMarks, stem,
  { type: "numeric", parts: [{ label: "Answer", answer, tolerance, unit }] },
  {
    principles,
    steps: steps.map((s, i) => (typeof s === "string" ? step(s, i === steps.length - 1 ? totalMarks - (steps.length - 1) : 1, i === steps.length - 1 ? "A" : "M") : s)),
    finalAnswer,
    commonErrors,
  },
);
const open = (id, difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors = []) => q(
  id, difficulty, totalMarks, stem, { type: "open" },
  { principles, steps, finalAnswer, commonErrors },
);
const structured = (id, stem, parts, principles, steps, finalAnswer, commonErrors = []) => ({
  id, difficulty: "challenge", totalMarks: parts.reduce((sum, p) => sum + p.marks, 0), stem, parts,
  response: { type: "open" },
  markscheme: { principles, steps, finalAnswer, commonErrors },
});
const step = (reasoning, marks, markCode = "B", part) => ({ reasoning, marks, markCode, ...(part ? { part } : {}) });
const prin = (kind, name, statement) => ({ kind, name, statement });
const sec = (heading, body) => ({ heading, body });
const formula = (name, statement) => ({ name, statement });

function lesson(id, code, title, goal, standards, vocab, concepts) {
  return { id, code, title, goal, standards, vocabulary: vocab, concepts };
}
function concept(id, title, skill, sections, keyFormulas, workedExample, questions) {
  return { id, title, skill, lesson: { sections, keyFormulas, workedExample }, questions };
}
function unit(id, code, title, description, lessons) {
  return { id, code, title, description, lessons };
}
function writeLessonFile(courseDir, unitNum, lessonNum, lessonObj, exportName) {
  const dir = path.join(root, courseDir, `unit-${unitNum}`);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `lesson-${unitNum}-${lessonNum}.ts`);
  const body = `import type { Lesson } from "../../../types.ts";\n\nexport const ${exportName}: Lesson = ${JSON.stringify(lessonObj, null, 2)};\n`;
  fs.writeFileSync(file, body);
  return `import { ${exportName} } from "./lesson-${unitNum}-${lessonNum}.ts";`;
}
function writeUnitIndex(courseDir, unitNum, unitObj, lessonImports) {
  const dir = path.join(root, courseDir, `unit-${unitNum}`);
  fs.mkdirSync(dir, { recursive: true });
  const exportName = `unit${unitNum}`;
  const index = `import type { Unit } from "../../../types.ts";\n${lessonImports.join("\n")}\n\nexport const ${exportName}: Unit = {\n  id: ${JSON.stringify(unitObj.id)},\n  code: ${JSON.stringify(unitObj.code)},\n  title: ${JSON.stringify(unitObj.title)},\n  description: ${JSON.stringify(unitObj.description)},\n  lessons: [${unitObj.lessons.map((_, i) => `lesson${unitNum}${i + 1}`).join(", ")}],\n};\n`;
  fs.writeFileSync(path.join(dir, "index.ts"), index);
}

// ---------- practical concept profiles ----------
function vocabPractical(subject) {
  return [
    { term: "Independent variable", definition: "The variable deliberately changed by the investigator." },
    { term: "Dependent variable", definition: "The variable measured or observed as a result." },
    { term: "Control variable", definition: "A variable kept constant so the test is fair." },
    { term: "Reliability", definition: "Consistency of repeated measurements or results." },
    { term: "Validity", definition: "Whether the method measures what it claims to measure." },
    { term: "Anomalous result", definition: "A result that does not fit the pattern of the others." },
    { term: "Uncertainty", definition: "Estimated range of doubt in a measurement." },
    { term: "${subject} core practical", definition: "A specified practical technique required by the Pearson Edexcel ${subject} specification." },
  ].map((v) => ({ term: v.term.replace("${subject}", subject), definition: v.definition.replace("${subject}", subject) }));
}

function baseSections(example, level) {
  const adv = level === "ial";
  return [
    sec("Variables and fair testing", `Investigations of ${example} must identify the independent variable (what is changed), dependent variable (what is measured) and control variables (what is kept constant). ${adv ? "At IAL you should also justify why each control matters and predict how changing it would affect the result." : "At IAS you should be able to state the controls needed for a standard core practical."}`),
    sec("Reliability and validity", `Reliability is improved by repeats, averaging and checking calibration. Validity means the method actually measures the intended quantity — for example, using the correct wavelength filter in ${example}. ${adv ? "Discuss systematic error, random error and how each affects validity and reliability." : "Identify whether an error is systematic or random and suggest one improvement."}`),
    sec("Anomalies and improvements", `Anomalous results should be identified, not deleted automatically. Check apparatus, technique and calculations before deciding whether to exclude them. ${adv ? "Suggest quantitative improvements such as narrower uncertainty intervals, more repeats or a refined method." : "Suggest one practical improvement that would make the result more reliable."}`),
  ];
}

function questionsFor(p, prefix, unitNum, lessonNum, conceptNum) {
  const base = `${prefix}-u${unitNum}-l${lessonNum}c${conceptNum}`;
  const qs = [];
  if (p.kind === "variables") {
    qs.push(mcq(`${base}-q1`, "In an investigation of ${example}, which variable is the dependent variable?", ["The variable deliberately changed", "The variable measured as the result", "A variable kept constant", "The instrument used"], "b",
      prin("definition", "Variables", "Dependent variable = measured result."), "The dependent variable is the result being measured.", ["Choosing the independent variable."]));
    qs.push(numeric(`${base}-q2`, "core", "Three repeat readings of a length are 12.4 cm, 12.5 cm and 12.3 cm. Calculate the mean to 3 significant figures.", 12.4, "cm", 0.01,
      [prin("method", "Mean", "Mean = sum / number of readings.")],
      [step("Add the readings: $12.4+12.5+12.3=37.2$.", 1, "M"), step("Divide by 3: $37.2/3=12.4$.", 1, "M"), step("Mean = 12.4 cm.", 1, "A")],
      "12.4 cm", ["Dividing by the wrong number of readings."]));
    qs.push(open(`${base}-q3`, "challenge", 4, "Explain why control variables are needed in a ${example} investigation and give two examples of controls.",
      [prin("principle", "Fair test", "Only the independent variable should affect the dependent variable.")],
      [step("Control variables keep conditions constant.", 1, "B"), step("Without them the result may be affected by another factor.", 1, "B"), step("Example control 1 appropriate to ${example}.", 1, "A"), step("Example control 2 appropriate to ${example}.", 1, "A")],
      "Controls make the test fair; two valid controls", ["Listing variables without explaining why."]));
    qs.push(structured(`${base}-q4`, "A student investigates ${example}. (a) Identify the independent, dependent and two control variables. (b) Explain why repeating the measurement improves reliability. (c) Suggest one improvement to the method and justify it.",
      [{ label: "a", prompt: "Variables", marks: 3 }, { label: "b", prompt: "Reliability", marks: 4 }, { label: "c", prompt: "Improvement", marks: 3 }],
      [prin("principle", "Experimental design", "Variables, repeats and validity.")],
      [step("Independent and dependent variables identified.", 1, "M", "a"), step("Two valid control variables.", 1, "A", "a"), step("Variables linked to ${example}.", 1, "A", "a"),
       step("Repeats reduce random error.", 1, "M", "b"), step("Averaging improves precision.", 1, "M", "b"), step("Anomalies can be identified.", 1, "A", "b"), step("Reliability defined and applied.", 1, "A", "b"),
       step("Valid improvement suggested.", 1, "M", "c"), step("Improvement linked to validity/reliability.", 1, "A", "c"), step("Justification given.", 1, "A", "c")],
      "Variables identified; repeats improve reliability; justified improvement", ["Changing more than one variable."]));
  } else if (p.kind === "reliability") {
    qs.push(mcq(`${base}-q1`, "Which action most improves the reliability of a ${example} measurement?", ["Taking one reading carefully", "Repeating and averaging readings", "Using a bigger apparatus", "Guessing the result"], "b",
      prin("definition", "Reliability", "Consistency through repeats."), "Repeats and averaging improve reliability.", ["Assuming one careful reading is enough."]));
    qs.push(numeric(`${base}-q2`, "core", "A measurement is $4.00 \\pm 0.20$ cm. Calculate the percentage uncertainty.", 5.0, "%", 0.1,
      [prin("formula", "Percentage uncertainty", "$\\%\\text{ uncertainty}=(\\Delta x/x)\\times100$.")],
      [step("Use $\\%\\text{unc}=(0.20/4.00)\\times100$.", 1, "M"), step("$=0.05\\times100=5.0$.", 1, "M"), step("Percentage uncertainty = 5.0%.", 1, "A")],
      "5.0%", ["Using the absolute uncertainty as a percentage."]));
    qs.push(open(`${base}-q3`, "challenge", 4, "Distinguish between random and systematic error in a ${example} investigation, giving one example of each.",
      [prin("definition", "Errors", "Random = scatter; systematic = consistent offset.")],
      [step("Random error causes scatter around the mean.", 1, "B"), step("Example: reaction time or reading inconsistencies.", 1, "A"), step("Systematic error shifts all results the same way.", 1, "B"), step("Example: zero error or calibration fault.", 1, "A")],
      "Random=scatter; systematic=consistent offset", ["Saying repeats remove systematic error."]));
    qs.push(structured(`${base}-q4`, "Results for ${example} are 8.1, 8.4, 8.0 and 12.9. (a) Identify the anomalous result and justify your choice. (b) Calculate the mean after removing it. (c) Explain how the anomaly affects reliability and validity.",
      [{ label: "a", prompt: "Anomaly", marks: 3 }, { label: "b", prompt: "Mean", marks: 3 }, { label: "c", prompt: "Effect", marks: 4 }],
      [prin("principle", "Data evaluation", "Anomalies, mean and validity.")],
      [step("12.9 identified as anomalous.", 1, "B", "a"), step("It is far from the cluster 8.0-8.4.", 1, "A", "a"), step("Justification based on pattern.", 1, "A", "a"),
       step("Mean of 8.1, 8.4, 8.0 = $24.5/3$.", 1, "M", "b"), step("$=8.17$ (3 s.f.).", 1, "M", "b"), step("Mean $\\approx 8.17$.", 1, "A", "b"),
       step("Anomaly reduces reliability if included.", 1, "B", "c"), step("It may indicate a procedural mistake.", 1, "A", "c"), step("Removing it can improve validity if justified.", 1, "A", "c"), step("Conclusion stated.", 1, "R", "c")],
      "Anomaly identified; mean $\\approx8.17$; effect explained", ["Deleting anomalies without justification."]));
  } else if (p.kind === "apparatus") {
    qs.push(mcq(`${base}-q1`, "What is the resolution of a metre rule graduated in millimetres?", ["1 m", "1 cm", "1 mm", "0.1 mm"], "c",
      prin("definition", "Resolution", "Smallest readable division."), "A mm-graduated rule has 1 mm resolution.", ["Confusing resolution with range."]));
    qs.push(numeric(`${base}-q2`, "core", "Convert $2500$ mm to metres.", 2.5, "m", 0.01,
      [prin("definition", "Unit conversion", "$1\\text{ mm}=0.001\\text{ m}$.")],
      [step("$1\\text{ mm}=0.001\\text{ m}$.", 1, "M"), step("$2500\\times0.001=2.5$.", 1, "M"), step("$=2.5\\text{ m}$.", 1, "A")],
      "2.5 m", ["Dividing instead of multiplying."]));
    qs.push(open(`${base}-q3`, "challenge", 4, "Explain two sources of uncertainty when using ${example} apparatus and how to reduce each.",
      [prin("principle", "Uncertainty", "Resolution and technique affect uncertainty.")],
      [step("Source 1: instrument resolution/zero error.", 1, "B"), step("Reduce by calibration/zeroing.", 1, "A"), step("Source 2: parallax or technique.", 1, "B"), step("Reduce by consistent technique/repeats.", 1, "A")],
      "Resolution/zero error and parallax/technique; reductions", ["Listing uncertainties without reductions."]));
    qs.push(structured(`${base}-q4`, "For ${example}, a student records a volume as $25.0 \\pm 0.5$ cm$^3$. (a) State the resolution of the apparatus used. (b) Calculate the percentage uncertainty. (c) Suggest two improvements to reduce the uncertainty.",
      [{ label: "a", prompt: "Resolution", marks: 2 }, { label: "b", prompt: "Percentage uncertainty", marks: 4 }, { label: "c", prompt: "Improvements", marks: 4 }],
      [prin("formula", "Uncertainty", "Resolution and $\\%\\text{unc}=(\\Delta x/x)\\times100$.")],
      [step("Resolution $\\approx 1$ cm$^3$ (or consistent with $\\pm0.5$).", 1, "B", "a"), step("Uncertainty stated as half the smallest division.", 1, "A", "a"),
       step("Use $\\%\\text{unc}=(0.5/25.0)\\times100$.", 1, "M", "b"), step("$=0.02\\times100$.", 1, "M", "b"), step("$=2.0$%.", 1, "M", "b"), step("Percentage uncertainty = 2.0%.", 1, "A", "b"),
       step("Improvement 1: use a more precise instrument.", 1, "B", "c"), step("Improvement 2: repeat and average/consistent reading.", 1, "A", "c"), step("Both linked to reduced uncertainty.", 1, "A", "c"), step("Conclusion.", 1, "R", "c")],
      "Resolution stated; $2.0$%; two improvements", ["Using full range instead of half for uncertainty."]));
  } else if (p.kind === "techniques") {
    qs.push(mcq(`${base}-q1`, "Which technique is most appropriate for ${example}?", [p.techWrong1, p.techCorrect, p.techWrong2, p.techWrong3], "b",
      prin("definition", "Technique", `Correct method for ${p.example}.`), `The appropriate technique is ${p.techCorrect.toLowerCase()}.`, ["Choosing an unrelated technique."]));
    qs.push(numeric(`${base}-q2`, "challenge", p.calcStem, p.calcAnswer, p.calcUnit, p.calcTol,
      [prin("formula", "Calculation", p.calcPrinciple)],
      p.calcSteps.map((s, i) => step(s, i === p.calcSteps.length - 1 ? 1 : 1, i === p.calcSteps.length - 1 ? "A" : "M")),
      p.calcFinal, p.calcErrors));
    qs.push(open(`${base}-q3`, "challenge", 4, "Describe the procedure for ${example}, including the key measurement and one safety consideration.",
      [prin("method", "Procedure", "Ordered steps, measurement and safety.")],
      [step("First step of the procedure.", 1, "B"), step("Key measurement identified.", 1, "B"), step("Second step/recording.", 1, "A"), step("Safety consideration appropriate to ${example}.", 1, "A")],
      "Coherent procedure with measurement and safety", ["Missing the measured quantity."]));
    qs.push(structured(`${base}-q4`, "A student carries out ${example}. (a) State the independent, dependent and control variables. (b) Describe how the key measurement is made. (c) Evaluate the reliability of the method and suggest one improvement.",
      [{ label: "a", prompt: "Variables", marks: 3 }, { label: "b", prompt: "Measurement", marks: 3 }, { label: "c", prompt: "Evaluation", marks: 4 }],
      [prin("method", "Practical evaluation", "Variables, measurement and reliability.")],
      [step("Independent variable identified.", 1, "M", "a"), step("Dependent variable identified.", 1, "A", "a"), step("Control variable identified.", 1, "A", "a"),
       step("Apparatus/technique for measurement described.", 1, "M", "b"), step("Units and repeats mentioned.", 1, "A", "b"), step("Measurement linked to result.", 1, "A", "b"),
       step("Reliability assessed.", 1, "B", "c"), step("Systematic/random error considered.", 1, "A", "c"), step("Valid improvement suggested.", 1, "M", "c"), step("Conclusion.", 1, "R", "c")],
      "Variables, measurement and evaluation", ["Describing apparatus without linking to the result."]));
  } else if (p.kind === "processing") {
    qs.push(mcq(`${base}-q1`, "Which graph is most appropriate for showing how ${example} changes with time?", ["A pie chart", "A line graph", "A bar chart of categories", "A pictogram"], "b",
      prin("convention", "Graph choice", "Continuous variables use line graphs."), "Time against a continuous variable uses a line graph.", ["Choosing a chart for categorical data."]));
    qs.push(numeric(`${base}-q2`, "core", "The mean of $4.2, 4.5, 4.4, 4.3$ and $4.6$ is required to 2 significant figures.", 4.4, "", 0.05,
      [prin("method", "Mean", "Mean = sum / count.")],
      [step("Sum $=4.2+4.5+4.4+4.3+4.6=22.0$.", 1, "M"), step("Divide by 5: $22.0/5=4.40$.", 1, "M"), step("Mean $=4.4$ to 2 s.f.", 1, "A")],
      "4.4", ["Rounding before adding."]));
    qs.push(open(`${base}-q3`, "challenge", 4, "Explain how to process and present data from ${example}, including axes, units and how to identify a trend.",
      [prin("convention", "Data presentation", "Axes, units, trend.")],
      [step("Independent variable on x-axis, dependent on y-axis.", 1, "B"), step("Both axes labelled with units.", 1, "A"), step("Trend described using data.", 1, "A"), step("Anomalies/errors considered.", 1, "A")],
      "Correct axes/units and trend interpretation", ["Plotting without units."]));
    qs.push(structured(`${base}-q4`, "Data for ${example} are shown in a table described in words. (a) State how the data should be plotted. (b) Describe the trend shown. (c) Explain how the data support a conclusion about ${example}.",
      [{ label: "a", prompt: "Plotting", marks: 3 }, { label: "b", prompt: "Trend", marks: 3 }, { label: "c", prompt: "Conclusion", marks: 4 }],
      [prin("convention", "Data analysis", "Plot, trend, conclusion.")],
      [step("Correct graph type and axes.", 1, "M", "a"), step("Units and labels included.", 1, "A", "a"), step("Scale appropriate.", 1, "A", "a"),
       step("Trend described quantitatively.", 1, "M", "b"), step("Trend linked to ${example}.", 1, "A", "b"), step("Direction/magnitude stated.", 1, "A", "b"),
       step("Conclusion supported by data.", 1, "B", "c"), step("Evidence referenced.", 1, "A", "c"), step("Limitations considered.", 1, "A", "c"), step("Final judgement.", 1, "R", "c")],
      "Correct plotting; trend; supported conclusion", ["Conclusion not linked to evidence."]));
  } else {
    qs.push(mcq(`${base}-q1`, "Which is the best definition of validity in ${example}?", ["Consistency of repeats", "Measuring what the investigation claims to measure", "Using the most expensive apparatus", "Taking many readings"], "b",
      prin("definition", "Validity", "Measuring the intended quantity."), "Validity means measuring what is claimed.", ["Confusing validity with reliability."]));
    qs.push(numeric(`${base}-q2`, "challenge", p.evalStem, p.evalAnswer, p.evalUnit, p.evalTol,
      [prin("formula", "Evaluation", p.evalPrinciple)],
      p.evalSteps.concat([p.evalFinalStep]),
      p.evalFinal, p.evalErrors, 5));
    qs.push(open(`${base}-q3`, "challenge", 4, "Evaluate the method used for ${example}, identifying one strength and one limitation.",
      [prin("principle", "Evaluation", "Strengths and limitations.")],
      [step("Strength identified.", 1, "B"), step("Strength justified.", 1, "A"), step("Limitation identified.", 1, "B"), step("Limitation justified/suggested improvement.", 1, "A")],
      "Balanced evaluation", ["Listing strengths only."]));
    qs.push(structured(`${base}-q4`, "A student concludes that ${example} gives a reliable result. (a) State two reasons supporting reliability. (b) Identify one limitation of the method. (c) Suggest how the investigation could be improved and justify the improvement.",
      [{ label: "a", prompt: "Reliability", marks: 3 }, { label: "b", prompt: "Limitation", marks: 3 }, { label: "c", prompt: "Improvement", marks: 4 }],
      [prin("principle", "Evaluation", "Reliability, limitations, improvement.")],
      [step("Reliability point 1.", 1, "M", "a"), step("Reliability point 2.", 1, "A", "a"), step("Link to ${example}.", 1, "A", "a"),
       step("Limitation identified.", 1, "B", "b"), step("Limitation explained.", 1, "A", "b"), step("Effect on result considered.", 1, "A", "b"),
       step("Improvement suggested.", 1, "M", "c"), step("Improvement justified.", 1, "A", "c"), step("Expected effect stated.", 1, "A", "c"), step("Conclusion.", 1, "R", "c")],
      "Reliability, limitation and justified improvement", ["Suggesting improvements without justification."]));
  }
  return qs;
}

// The ${example} placeholders above are filled by replacing in the final strings.
function fill(obj, example) {
  return JSON.parse(JSON.stringify(obj).split("${example}").join(example));
}

function makeConcept(ctx, prefix, unitNum, lessonNum, conceptNum) {
  const example = ctx.example;
  const kind = ctx.kind;
  const title = ctx.title;
  const skill = ctx.skill;
  const sections = ctx.sections || baseSections(example, ctx.level);
  const keyFormulas = ctx.keyFormulas || [formula("Key principle", `${example}: identify variables, control conditions, repeat measurements and evaluate uncertainty.`)];
  const workedExample = ctx.workedExample || {
    problem: `Describe how you would make a measurement in ${example} reliable.`,
    solution: "Identify the variables, keep controls constant, repeat readings, calculate uncertainty and suggest improvements.",
  };
  const qs = fill(questionsFor({ ...ctx, kind }, prefix, unitNum, lessonNum, conceptNum), example);
  return concept(`${prefix}-u${unitNum}-l${lessonNum}c${conceptNum}-${kind}`, title, skill, sections, keyFormulas, workedExample, qs);
}

function lessonFor(prefix, unitNum, lessonNum, title, goal, standards, subject, specs, level) {
  const vocab = vocabPractical(subject);
  const concepts = specs.map((s, i) => makeConcept({ ...s, level }, prefix, unitNum, lessonNum, i + 1));
  return lesson(`${prefix}-u${unitNum}-lesson-${unitNum}-${lessonNum}`, `${unitNum}-${lessonNum}`, title, goal, standards, vocab, concepts);
}

function buildPracticalUnit({ courseDir, prefix, unitNum, unitId, code, title, description, subject, level, unitCode, techniques, calcs }) {
  const standards = [unitCode];
  const lessonsData = [
    {
      title: "Designing and Controlling Investigations",
      goal: "I CAN identify variables, controls, reliability and validity in a practical investigation.",
      specs: [
        { kind: "variables", title: "Variables and fair testing", skill: "Identify independent, dependent and control variables.", example: techniques.design, sections: baseSections(techniques.design, level) },
        { kind: "reliability", title: "Reliability, validity and anomalies", skill: "Evaluate repeatability, validity and anomalous results.", example: techniques.design, sections: baseSections(techniques.design, level) },
      ],
    },
    {
      title: "Apparatus, Measurement and Techniques",
      goal: "I CAN select apparatus, estimate uncertainty and describe core practical techniques.",
      specs: [
        { kind: "apparatus", title: "Apparatus and measurement", skill: "Choose instruments and estimate uncertainty.", example: techniques.measure, sections: baseSections(techniques.measure, level) },
        { kind: "techniques", title: "Core practical techniques", skill: "Apply the required practical method safely and accurately.", example: techniques.technique, sections: baseSections(techniques.technique, level),
          techCorrect: techniques.techCorrect, techWrong1: techniques.techWrong1, techWrong2: techniques.techWrong2, techWrong3: techniques.techWrong3,
          calcStem: calcs.techStem, calcAnswer: calcs.techAnswer, calcUnit: calcs.techUnit, calcTol: calcs.techTol, calcPrinciple: calcs.techPrinciple, calcSteps: calcs.techSteps, calcFinal: calcs.techFinal, calcErrors: calcs.techErrors },
      ],
    },
    {
      title: "Processing Data and Evaluating Results",
      goal: "I CAN process data, identify trends and evaluate the reliability of a practical result.",
      specs: [
        { kind: "processing", title: "Processing and presenting data", skill: "Plot, describe and interpret practical data.", example: techniques.data, sections: baseSections(techniques.data, level) },
        { kind: "evaluation", title: "Evaluation and uncertainty", skill: "Assess uncertainty, limitations and improvements.", example: techniques.eval, sections: baseSections(techniques.eval, level),
          evalStem: calcs.evalStem, evalAnswer: calcs.evalAnswer, evalUnit: calcs.evalUnit, evalTol: calcs.evalTol, evalPrinciple: calcs.evalPrinciple, evalSteps: calcs.evalSteps, evalFinalStep: calcs.evalFinalStep, evalFinal: calcs.evalFinal, evalErrors: calcs.evalErrors },
      ],
    },
  ];

  const imports = [];
  const lessonObjs = [];
  lessonsData.forEach((ld, idx) => {
    const lessonNum = idx + 1;
    const lessonObj = lessonFor(prefix, unitNum, lessonNum, ld.title, ld.goal, standards, subject, ld.specs, level);
    lessonObjs.push(lessonObj);
    imports.push(writeLessonFile(courseDir, unitNum, lessonNum, lessonObj, `lesson${unitNum}${lessonNum}`));
  });
  writeUnitIndex(courseDir, unitNum, { id: unitId, code, title, description, lessons: lessonObjs.map((_, i) => `lesson${unitNum}${i + 1}`) }, imports);
  console.log(`wrote ${courseDir}/unit-${unitNum}`);
}

// ---------- subject configurations ----------
const configs = [
  {
    subject: "Biology", prefixBio: "ediasbio", prefixIalBio: "edialbio",
    ias: { courseDir: "edx-ias-biology", unitNum: 3, unitId: "ediasbio-u3", code: "3", title: "Practical Skills in Biology I", description: "WBI13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 biology core practicals.", unitCode: "WBI13 Practical Skills in Biology I", level: "ias" },
    ial1: { courseDir: "edx-ial-biology", unitNum: 5, unitId: "edialbio-u5", code: "5", title: "Practical Skills in Biology I", description: "WBI13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 biology core practicals.", unitCode: "WBI13 Practical Skills in Biology I", level: "ial" },
    ial2: { courseDir: "edx-ial-biology", unitNum: 6, unitId: "edialbio-u6", code: "6", title: "Practical Skills in Biology II", description: "WBI16: advanced planning, measurement, data handling and evaluation for the Unit 4 and Unit 5 biology core practicals.", unitCode: "WBI16 Practical Skills in Biology II", level: "ial" },
    techniques: {
      design: "osmosis in dialysis tubing and enzyme-rate investigations",
      measure: "light microscopy, colorimetry and gas-volume measurement",
      technique: "measuring the rate of an enzyme reaction or osmosis",
      data: "rates of reaction and population density data",
      eval: "biological measurement uncertainty and sampling",
      techCorrect: "measure the dependent variable at regular time intervals", techWrong1: "change several variables at once", techWrong2: "use an uncalibrated balance", techWrong3: "record only one reading",
    },
    calcs: {
      techStem: "A root hair cell is $0.080$ mm long and its image in a micrograph is $8.0$ mm. Calculate the magnification.", techAnswer: 100, techUnit: "×", techTol: 0.1, techPrinciple: "magnification = image size / actual size",
      techSteps: ["Use $M=\\text{image size}/\\text{actual size}$.", "Convert to the same units: $8.0\\text{ mm}/0.080\\text{ mm}$.", "$M=100$."], techFinal: "100", techErrors: ["Not converting units before dividing."],
      evalStem: "Two students estimate the same population density as 72 and 80 organisms m$^{-2}$. Calculate the percentage difference.", evalAnswer: 10.5, evalUnit: "%", evalTol: 0.1, evalPrinciple: "percentage difference = |a-b| / mean × 100%",
      evalSteps: ["Difference $=|72-80|=8$.", "Mean $=(72+80)/2=76$.", "$\\%\\text{diff}=(8/76)\\times100=10.5$%.", "$=10.5$%."], evalFinalStep: "Percentage difference = 10.5%", evalFinal: "10.5%", evalErrors: ["Dividing by one value instead of the mean."],
    },
  },
  {
    subject: "Chemistry", prefixBio: "ediaschem", prefixIalBio: "edialchem",
    ias: { courseDir: "edx-ias-chemistry", unitNum: 3, unitId: "ediaschem-u3", code: "3", title: "Practical Skills in Chemistry I", description: "WCH13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 chemistry core practicals.", unitCode: "WCH13 Practical Skills in Chemistry I", level: "ias" },
    ial1: { courseDir: "edx-ial-chemistry", unitNum: 5, unitId: "edialchem-u5", code: "5", title: "Practical Skills in Chemistry I", description: "WCH13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 chemistry core practicals.", unitCode: "WCH13 Practical Skills in Chemistry I", level: "ial" },
    ial2: { courseDir: "edx-ial-chemistry", unitNum: 6, unitId: "edialchem-u6", code: "6", title: "Practical Skills in Chemistry II", description: "WCH16: advanced planning, measurement, data handling and evaluation for the Unit 4 and Unit 5 chemistry core practicals.", unitCode: "WCH16 Practical Skills in Chemistry II", level: "ial" },
    techniques: {
      design: "titration, calorimetry and rates-of-reaction investigations",
      measure: "burettes, pipettes, thermometers, gas syringes and balances",
      technique: "carrying out a titration or measuring a rate of reaction",
      data: "titration volumes, temperature changes and gas volumes",
      eval: "chemical measurement uncertainty and yield calculations",
      techCorrect: "record the titre to the nearest 0.05 cm³", techWrong1: "use a beaker for the titre", techWrong2: "ignore the meniscus", techWrong3: "add indicator after the endpoint",
    },
    calcs: {
      techStem: "$25.0$ cm³ of $0.100$ mol dm$^{-3}$ NaOH neutralises $20.0$ cm³ of an acid. Calculate the acid concentration assuming a 1:1 reaction.", techAnswer: 0.125, techUnit: "mol dm⁻³", techTol: 0.001, techPrinciple: "moles acid = moles alkali for a 1:1 reaction",
      techSteps: ["Moles NaOH $=0.0250\\times0.100=0.00250$ mol.", "Moles acid $=0.00250$ mol.", "Acid concentration $=0.00250/0.0200=0.125$ mol dm$^{-3}$."], techFinal: "0.125 mol dm⁻³", techErrors: ["Not converting cm³ to dm³."],
      evalStem: "A hydrated salt loses $0.36$ g of water from $2.0$ g of sample. Calculate the percentage of water.", evalAnswer: 18.0, evalUnit: "%", evalTol: 0.1, evalPrinciple: "percentage = part / whole × 100%",
      evalSteps: ["Use $\\%=(0.36/2.0)\\times100$.", "$=0.18\\times100$.", "$=18.0$%.", "$=18.0$%."], evalFinalStep: "Percentage water = 18.0%", evalFinal: "18.0%", evalErrors: ["Using the mass of anhydrous salt as the whole."],
    },
  },
  {
    subject: "Physics", prefixBio: "ediasphys", prefixIalBio: "edialphys",
    ias: { courseDir: "edx-ias-physics", unitNum: 3, unitId: "ediasphys-u3", code: "3", title: "Practical Skills in Physics I", description: "WPH13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 physics core practicals.", unitCode: "WPH13 Practical Skills in Physics I", level: "ias" },
    ial1: { courseDir: "edx-ial-physics", unitNum: 3, unitId: "edialphys-u3", code: "3", title: "Practical Skills in Physics I", description: "WPH13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 physics core practicals.", unitCode: "WPH13 Practical Skills in Physics I", level: "ial" },
    ial2: { courseDir: "edx-ial-physics", unitNum: 6, unitId: "edialphys-u6", code: "6", title: "Practical Skills in Physics II", description: "WPH16: advanced planning, measurement, data handling and evaluation for the Unit 4 and Unit 5 physics core practicals.", unitCode: "WPH16 Practical Skills in Physics II", level: "ial" },
    techniques: {
      design: "free-fall, viscosity, Young modulus and electrical-circuit investigations",
      measure: "vernier calipers, stopwatches, voltmeters, ammeters and data loggers",
      technique: "measuring acceleration of free fall or investigating Ohm's law",
      data: "distance-time, velocity-time, current-voltage and oscillation data",
      eval: "physics measurement uncertainty and graph gradients",
      techCorrect: "plot a graph and determine the gradient from the line of best fit", techWrong1: "use a single reading", techWrong2: "ignore units", techWrong3: "join anomalous points",
    },
    calcs: {
      techStem: "A ball falls from rest through $1.8$ m in $0.60$ s. Use $s=ut+\\frac12at^2$ to estimate $g$.", techAnswer: 10.0, techUnit: "m s⁻²", techTol: 0.1, techPrinciple: "for free fall $s=\\frac12gt^2$ when $u=0$",
      techSteps: ["Since $u=0$, $s=\\frac12gt^2$.", "Rearrange: $g=2s/t^2$.", "$g=2(1.8)/(0.60)^2=3.6/0.36=10.0$ m s$^{-2}$."], techFinal: "10.0 m s⁻²", techErrors: ["Using $s=ut+\\frac12at^2$ without setting $u=0$."],
      evalStem: "A sample's count rate falls from $800$ to $200$ counts s$^{-1}$ in $12$ min. Calculate the half-life.", evalAnswer: 6.0, evalUnit: "min", evalTol: 0.1, evalPrinciple: "half-life = time for activity to halve",
      evalSteps: ["$800\\to400$ is one half-life.", "$400\\to200$ is a second half-life.", "Two half-lives take $12$ min, so one half-life $=6.0$ min.", "$=6.0$ min."], evalFinalStep: "Half-life = 6.0 min", evalFinal: "6.0 min", evalErrors: ["Using the full 12 min as one half-life."],
    },
  },
];

for (const cfg of configs) {
  buildPracticalUnit({ ...cfg.ias, prefix: cfg.prefixBio, subject: cfg.subject, techniques: cfg.techniques, calcs: cfg.calcs });
  buildPracticalUnit({ ...cfg.ial1, prefix: cfg.prefixIalBio, subject: cfg.subject, techniques: cfg.techniques, calcs: cfg.calcs });
  buildPracticalUnit({ ...cfg.ial2, prefix: cfg.prefixIalBio, subject: cfg.subject, techniques: cfg.techniques, calcs: cfg.calcs });
}
