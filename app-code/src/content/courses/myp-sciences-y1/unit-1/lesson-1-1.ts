import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "myps1-u1-lesson-1-1",
  code: "1-1",
  title: "Scientific Inquiry",
  goal: "I CAN work safely, identify variables and write a testable hypothesis with reasoning, and measure, record and present data to describe trends and spot anomalies.",
  standards: [
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Relationships",
    "Related concept: Evidence",
  ],
  vocabulary: [
    { term: "Hazard", definition: "Something that could cause harm, such as a flammable liquid or a hot surface." },
    { term: "Independent variable", definition: "The variable that the scientist deliberately changes in an investigation." },
    { term: "Dependent variable", definition: "The variable that is measured to see the effect of the change." },
    { term: "Control variable", definition: "A variable that is kept the same so that the test is fair." },
    { term: "Hypothesis", definition: "A testable prediction that includes a scientific reason for the expected result." },
    { term: "Anomaly", definition: "A result that does not fit the pattern of the other results." },
    { term: "Trend", definition: "The general pattern shown by data, for example 'as the temperature rises, the time falls'." },
  ],
  concepts: [
    {
      id: "myps1-u1-lab-safety-variables",
      title: "Safety, variables and hypotheses",
      skill: "Work safely in a laboratory, identify variables, and write a testable question and hypothesis with scientific reasoning.",
      lesson: {
        sections: [
          {
            heading: "Working safely",
            body: "Before an experiment, identify the **hazards** and decide how to reduce the **risk**. Common hazard symbols include flammable (a flame), corrosive (a surface and hand being damaged), toxic (a skull and crossbones) and harmful or irritant (an exclamation mark).\n\nBasic rules: wear safety goggles when heating or using chemicals, tie back long hair, keep bags off the floor, never taste or sniff chemicals directly, and report spills and breakages at once. Hot water and heated glassware can burn, so handle them with care and let them cool.",
          },
          {
            heading: "Variables and fair tests",
            body: "In a fair test you change one thing and measure its effect while everything else stays the same.\n\n- The **independent variable** is the one you change.\n- The **dependent variable** is the one you measure.\n- **Control variables** are kept the same.\n\nA testable question links the two: 'How does the temperature of water affect the time taken for sugar to dissolve?'",
          },
          {
            heading: "Writing a hypothesis",
            body: "A good hypothesis states a prediction **and** a reason from science: 'If the temperature of the water increases, the sugar will dissolve faster, because the particles move faster and collide with the sugar more often.' A prediction without a reason is only a guess.",
          },
        ],
        keyFormulas: [
          { name: "Independent variable", statement: "What you change" },
          { name: "Dependent variable", statement: "What you measure" },
          { name: "Hypothesis", statement: "If (change), then (effect), because (scientific reason)" },
        ],
        workedExample: {
          problem: "A student wants to find out whether the mass of a trolley affects how far it rolls down a ramp. Identify the independent and dependent variables and name one control variable.",
          solution: "The independent variable is the mass of the trolley, because that is what the student changes. The dependent variable is the distance the trolley rolls, because that is what is measured. A control variable is the height (or angle) of the ramp, which must stay the same so that only the mass affects the result.",
        },
      },
      questions: [
        {
          id: "myps1-u1-lab-safety-variables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bottle in the laboratory has a hazard symbol showing a flame. What does this symbol warn about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The substance is toxic" },
              { id: "b", text: "The substance is flammable" },
              { id: "c", text: "The substance is hot" },
              { id: "d", text: "The substance is corrosive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flammable symbol", statement: "A flame symbol warns that a substance catches fire easily." },
            ],
            steps: [
              { reasoning: "The flame symbol means the substance is flammable, so it must be kept away from naked flames and heat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The substance is flammable",
            commonErrors: ["Choosing corrosive, which has a symbol of a surface and hand being eaten away.", "Choosing toxic, which uses a skull and crossbones."],
            examinerNote: "B1 for flammable.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student investigates how the temperature of water affects the time taken for 5 g of sugar to dissolve in 100 cm$^3$ of water.\n\nName the independent variable and the dependent variable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Variables", statement: "The independent variable is changed by the scientist; the dependent variable is measured." },
            ],
            steps: [
              { reasoning: "The independent variable is what the student changes: the temperature of the water.", marks: 1, markCode: "B" },
              { reasoning: "The dependent variable is what is measured: the time taken for the sugar to dissolve.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Independent variable: temperature of the water. Dependent variable: time taken for the sugar to dissolve.",
            commonErrors: ["Swapping the two variables.", "Naming the mass of sugar or volume of water, which are control variables."],
            examinerNote: "B1 for temperature (of the water). B1 for time (taken to dissolve). Reject the two variables given the wrong way round.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says: 'Plants like sunlight.' She decides to investigate how the amount of light affects the height of bean plants.\n\nWrite a hypothesis for her investigation. Your hypothesis must include a prediction and a scientific reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hypothesis with reasoning", statement: "A hypothesis states what will happen to the dependent variable when the independent variable changes, and gives a reason from science." },
              { kind: "definition", name: "Photosynthesis", statement: "Plants use light to make food by photosynthesis, which they need to grow." },
            ],
            steps: [
              { reasoning: "Link the independent variable (amount of light) to the dependent variable (plant height).", marks: 1, markCode: "B" },
              { reasoning: "State a clear direction: more light leads to taller plants.", marks: 1, markCode: "B" },
              { reasoning: "Give the reason: plants need light for photosynthesis, which makes the food needed for growth.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "If the amount of light increases, the bean plants will grow taller, because they can photosynthesise more and make more food for growth.",
            commonErrors: ["Giving a prediction with no scientific reason.", "Writing 'plants like light' as the reason, which is not scientific."],
            examinerNote: "B1 for both variables linked. B1 for a direction (taller / more growth with more light) oe. R1 for photosynthesis / making food as the reason. Allow a hypothesis that predicts a limit (too much light may harm the plant) if it is reasoned.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how the temperature of water affects how quickly 5 g of sugar dissolves in 100 cm$^3$ of water. She uses water at $20\\ ^\\circ\\text{C}$, $40\\ ^\\circ\\text{C}$, $60\\ ^\\circ\\text{C}$ and $80\\ ^\\circ\\text{C}$, stirring with a glass rod, and times how long the sugar takes to disappear.",
          parts: [
            { label: "a", prompt: "State **two** safety precautions the student should take.", marks: 2 },
            { label: "b", prompt: "Name the independent variable and the dependent variable.", marks: 2 },
            { label: "c", prompt: "Name **two** control variables that must be kept the same.", marks: 2 },
            { label: "d", prompt: "The student repeats each temperature three times. Explain why this is a good idea.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk reduction", statement: "Identify the hazard and take a precaution that lowers the chance of harm." },
              { kind: "definition", name: "Variables", statement: "Independent: changed. Dependent: measured. Control: kept the same." },
              { kind: "principle", name: "Repeats", statement: "Repeating and averaging reduces the effect of random error and helps to spot anomalies." },
            ],
            steps: [
              { part: "a", reasoning: "Any two sensible precautions, such as wearing safety goggles, handling hot water carefully, using heat-proof gloves or a tray, or tying back long hair.", marks: 2, markCode: "B" },
              { part: "b", reasoning: "The independent variable is the temperature of the water.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The dependent variable is the time taken for the sugar to dissolve.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any two from: mass of sugar, volume of water, amount of stirring, type of sugar (or size of sugar grains).", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Repeating lets the student calculate a mean, which is more reliable than a single result.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It also helps the student spot an anomalous result, which can be ignored or repeated.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Any two: wear goggles; handle hot water carefully; tie back hair (b) Independent: temperature of water; dependent: time to dissolve (c) Any two: mass of sugar, volume of water, stirring, type of sugar (d) Allows a mean to be calculated, making results more reliable, and anomalies to be spotted.",
            commonErrors: ["In (a) writing 'be careful' without saying what to do.", "In (c) naming temperature or time, which are not control variables.", "In (d) saying repeats make results 'accurate' rather than reliable."],
            examinerNote: "(a) B1 each; reject 'be careful' on its own. (c) Reject temperature and time. (d) Allow 'more reliable' oe for the first mark and 'identify anomalies' oe for the second.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bottle in the laboratory has a hazard symbol showing a surface and a hand being eaten away. What does this symbol warn about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The substance is toxic" },
              { id: "b", text: "The substance is corrosive" },
              { id: "c", text: "The substance is only an irritant" },
              { id: "d", text: "The substance is flammable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Corrosive symbol", statement: "A symbol of a surface and a hand being eaten away warns that the substance is corrosive." },
            ],
            steps: [
              { reasoning: "The corrosive symbol means the substance can damage skin and surfaces, so gloves and goggles are needed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The substance is corrosive",
            commonErrors: ["Choosing toxic, which uses a skull and crossbones.", "Choosing flammable, which uses a flame."],
            examinerNote: "B1 for corrosive.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the investigation 'How does the temperature of water affect the time taken for sugar to dissolve?', which of these is a **control variable**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time taken for the sugar to dissolve" },
              { id: "b", text: "Temperature of the water" },
              { id: "c", text: "Mass of sugar used" },
              { id: "d", text: "How fast the sugar dissolves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Control variable", statement: "A control variable is kept the same so that only the independent variable affects the result." },
            ],
            steps: [
              { reasoning: "The mass of sugar is kept the same; temperature is changed and time is measured.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Mass of sugar used",
            commonErrors: ["Choosing temperature, which is the independent variable.", "Choosing time, which is the dependent variable."],
            examinerNote: "B1 for mass of sugar (or volume of water, stirring).",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these statements is a testable hypothesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants are nice to have in the garden." },
              { id: "b", text: "Plants need water to live." },
              { id: "c", text: "If plants are watered with salty water, they will grow less tall, because salt reduces the water the roots can absorb." },
              { id: "d", text: "Water is very important for plants." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hypothesis with reasoning", statement: "A hypothesis states a prediction that can be tested and gives a reason from science." },
            ],
            steps: [
              { reasoning: "Only (b) links a change (salty water) to an effect (less tall growth) and gives a scientific reason (roots absorb less water).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** If plants are watered with salty water, they will grow less tall, because salt reduces the water the roots can absorb.",
            commonErrors: ["Choosing a statement that is true but cannot be tested, such as 'plants need water'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student is about to heat a test tube of liquid over a Bunsen burner. State **two** safety precautions the student should take.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk reduction", statement: "Identify the hazard (hot liquid, flame) and take a precaution that lowers the chance of harm." },
            ],
            steps: [
              { reasoning: "Any two sensible precautions: wear safety goggles; tie back long hair; point the open end of the test tube away from people; use a heat-proof mat or clamp; never leave the flame unattended.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two: wear safety goggles; tie back long hair; point the test tube away from people; use a heat-proof mat; do not leave the burner unattended.",
            commonErrors: ["Writing 'be careful' without saying what to do.", "Giving a precaution that does not match the hazard, such as 'wear gloves' when heating a test tube by hand."],
            examinerNote: "B1 for each appropriate precaution. Reject 'be careful' on its own.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bottle in the laboratory has a hazard symbol showing a skull and crossbones. What does this symbol warn about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The substance is harmful or an irritant" },
              { id: "b", text: "The substance is corrosive" },
              { id: "c", text: "The substance is flammable" },
              { id: "d", text: "The substance is toxic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Toxic symbol", statement: "A skull and crossbones warns that the substance is toxic and can cause serious harm or death." },
            ],
            steps: [
              { reasoning: "The skull and crossbones is the toxic symbol; harmful or irritant uses an exclamation mark.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The substance is toxic",
            commonErrors: ["Choosing harmful or irritant, which uses an exclamation mark symbol.", "Choosing corrosive, which uses a surface and hand symbol."],
            examinerNote: "B1 for toxic.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student writes: 'If the ramp is higher, the trolley will roll further because it has more energy.'\n\nWhich part of this statement gives the **scientific reason** for the prediction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the trolley will roll further" },
              { id: "b", text: "the ramp" },
              { id: "c", text: "If the ramp is higher" },
              { id: "d", text: "because it has more energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parts of a hypothesis", statement: "A hypothesis has an 'if' part (the change), a 'then' part (the prediction) and a 'because' part (the scientific reason)." },
            ],
            steps: [
              { reasoning: "The reason is the part that explains why, introduced by 'because'.", marks: 1, markCode: "B" },
              { reasoning: "'Because it has more energy' explains the prediction using a science idea.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(d)** because it has more energy",
            commonErrors: ["Choosing the prediction ('will roll further') as the reason.", "Choosing the change ('ramp is higher') as the reason."],
            examinerNote: "B1 for identifying the because clause. R1 for recognising it as the scientific reason.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student times how long a small candle takes to burn in three trials: 94 s, 96 s and 98 s.\n\nCalculate the mean time.",
          response: { type: "numeric", parts: [{ label: "Mean time", answer: 96, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the three readings and divide by 3.", working: "\\text{mean}=\\frac{94+96+98}{3}=\\frac{288}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "96\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96\\text{ s}$",
            commonErrors: ["Dividing by 2 instead of 3.", "Forgetting the unit."],
            examinerNote: "M1 for sum divided by 3. A1 for 96 s.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an investigation of how the height of a ramp affects the distance a trolley rolls, the distances measured were 41 cm, 43 cm and 42 cm.\n\nCalculate the mean distance rolled.",
          response: { type: "numeric", parts: [{ label: "Mean distance", answer: 42, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the three readings and divide by 3.", working: "\\text{mean}=\\frac{41+43+42}{3}=\\frac{126}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "42\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$42\\text{ cm}$",
            commonErrors: ["Adding the readings but forgetting to divide.", "Forgetting the unit."],
            examinerNote: "M1 for 126 divided by 3. A1 for 42 cm.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student records the time taken for sugar to dissolve at $30\\ ^\\circ\\text{C}$: 55 s, 120 s, 57 s and 56 s.\n\nOne of these readings is anomalous. Identify it and calculate the mean of the remaining readings.",
          response: { type: "numeric", parts: [{ label: "Mean of remaining readings", answer: 56, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "An anomaly is a result that does not fit the pattern of the other results." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "The reading of 120 s is far higher than the others and does not fit the pattern, so it is the anomaly.", marks: 1, markCode: "B" },
              { reasoning: "Add the three remaining readings and divide by 3.", working: "\\text{mean}=\\frac{55+57+56}{3}=\\frac{168}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "56\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The anomaly is 120 s; mean of the remaining readings is $56\\text{ s}$.",
            commonErrors: ["Keeping the anomaly in the mean.", "Choosing 55 s as the anomaly because it is the lowest value."],
            examinerNote: "B1 for 120 s. M1 for (55+57+56)/3. A1 for 56 s. Allow ecf if the anomaly identified is used consistently.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student tests whether the mass of a trolley affects the distance it rolls down a ramp. She uses masses of $0.5\\text{ kg}$ and $1.0\\text{ kg}$, and measures the distance rolled in three trials each.\n\n- $0.5\\text{ kg}$ trolley: 41 cm, 43 cm, 42 cm\n- $1.0\\text{ kg}$ trolley: 63 cm, 65 cm, 64 cm\n\nFor each mass, calculate the mean distance rolled, and then calculate the difference between the two mean distances.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean distance for 0.5 kg trolley", answer: 42, unit: "cm" },
              { label: "Mean distance for 1.0 kg trolley", answer: 64, unit: "cm" },
              { label: "Difference between mean distances", answer: 22, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Mean for the $0.5\\text{ kg}$ trolley.", working: "\\frac{41+43+42}{3}=\\frac{126}{3}=42\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Mean for the $1.0\\text{ kg}$ trolley.", working: "\\frac{63+65+64}{3}=\\frac{192}{3}=64\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the smaller mean from the larger mean.", working: "64-42=22\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$42\\text{ cm}$, $64\\text{ cm}$, difference $22\\text{ cm}$",
            commonErrors: ["Dividing by the wrong number of readings.", "Subtracting individual readings instead of the means.", "Giving a negative difference."],
            examinerNote: "M1 for each mean. A1 for 22 cm. Allow ecf on the difference only if both means are shown.",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q15",
          difficulty: "core",
          totalMarks: 7,
          stem: "A student wants to investigate how the amount of sunlight affects the rate at which water evaporates from identical Petri dishes.",
          parts: [
            { label: "a", prompt: "Write a testable question for the investigation.", marks: 1 },
            { label: "b", prompt: "Name the independent variable and the dependent variable.", marks: 2 },
            { label: "c", prompt: "Name **two** control variables that must be kept the same.", marks: 2 },
            { label: "d", prompt: "Write a hypothesis for the investigation, including a prediction and a scientific reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change one variable, measure another and keep the rest the same." },
              { kind: "principle", name: "Hypothesis with reasoning", statement: "A hypothesis states what will happen and gives a reason from science." },
              { kind: "definition", name: "Evaporation", statement: "Evaporation is the escape of particles from the surface of a liquid; more energy makes it faster." },
            ],
            steps: [
              { part: "a", reasoning: "A testable question links the independent and dependent variables, for example 'How does the amount of sunlight affect the rate of evaporation?'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The independent variable is the amount of sunlight.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The dependent variable is the rate (or time taken) for the water to evaporate.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any two from: volume (or surface area) of water, size of the dish, temperature of the room, position of the dish.", marks: 2, markCode: "B" },
              { part: "d", reasoning: "A clear prediction linking sunlight to evaporation rate.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A reason such as sunlight gives particles more energy so they escape faster.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) How does the amount of sunlight affect the rate of evaporation of water? (b) Independent: amount of sunlight; dependent: rate of evaporation (c) Any two: volume of water, size of dish, room temperature, position (d) More sunlight means faster evaporation, because sunlight gives the water particles more energy.",
            commonErrors: ["In (b) swapping the two variables.", "In (c) naming sunlight or evaporation rate, which are not control variables.", "In (d) giving a prediction with no scientific reason."],
            examinerNote: "(a) Accept any question linking light and evaporation. (b) Reject swapped variables. (d) Allow ecf linking variables named in (b).",
          },
        },
        {
          id: "myps1-u1-lab-safety-variables-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how the surface area of sugar affects the time taken to dissolve. She stirs 5 g of sugar (as one lump, as four lumps, or crushed into small pieces) into 100 cm$^3$ of water at $20\\ ^\\circ\\text{C}$ and times how long it takes to disappear. She repeats each test three times.",
          parts: [
            { label: "a", prompt: "State **two** safety precautions the student should take.", marks: 2 },
            { label: "b", prompt: "Name the independent variable and the dependent variable.", marks: 2 },
            { label: "c", prompt: "Name **two** control variables that must be kept the same.", marks: 2 },
            { label: "d", prompt: "Explain why the student repeats each test three times and calculates a mean.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Risk reduction", statement: "Identify the hazard and take a precaution that lowers the chance of harm." },
              { kind: "definition", name: "Variables", statement: "Independent: changed. Dependent: measured. Control: kept the same." },
              { kind: "principle", name: "Repeats", statement: "Repeating and averaging reduces random error and helps to spot anomalies." },
            ],
            steps: [
              { part: "a", reasoning: "Any two sensible precautions, such as wearing safety goggles, keeping the bench tidy, washing hands after handling sugar, or using a clean stirring rod.", marks: 2, markCode: "B" },
              { part: "b", reasoning: "The independent variable is the surface area of the sugar.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The dependent variable is the time taken for the sugar to dissolve.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any two from: mass of sugar, volume of water, temperature of the water, amount of stirring.", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Repeating and averaging makes the result more reliable because random errors are reduced.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It also helps the student identify and deal with an anomalous result.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Any two sensible precautions (b) Independent: surface area of sugar; dependent: time to dissolve (c) Any two: mass of sugar, volume of water, temperature, stirring (d) More reliable results because random error is reduced, and anomalies can be spotted.",
            commonErrors: ["In (b) naming the mass of sugar instead of its surface area as the independent variable.", "In (c) naming surface area or time, which are not control variables.", "In (d) saying repeats make results 'accurate' rather than reliable."],
            examinerNote: "(a) B1 each; reject 'be careful' on its own. (c) Reject surface area and time. (d) Allow 'more reliable' oe for the first mark and 'identify anomalies' oe for the second.",
          },
        },
      ],
    },
    {
      id: "myps1-u1-measuring-recording-graphs",
      title: "Measuring, recording and graphs",
      skill: "Measure with correct units, record data in tables, calculate means, and describe trends and anomalies in graphs and tables.",
      lesson: {
        sections: [
          {
            heading: "Measuring accurately",
            body: "Choose the instrument that fits the job and give every measurement a **unit**.\n\n- Length: ruler or tape measure, in $\\text{mm}$, $\\text{cm}$ or $\\text{m}$.\n- Mass: balance, in $\\text{g}$ or $\\text{kg}$.\n- Volume of liquid: measuring cylinder, in $\\text{cm}^3$ or $\\text{mL}$.\n- Time: stopwatch, in $\\text{s}$.\n- Temperature: thermometer, in $^\\circ\\text{C}$.\n\nRead a measuring cylinder with your eye level with the bottom of the curved surface (the meniscus). A measuring cylinder is more **precise** than a beaker, because its scale is finer.",
          },
          {
            heading: "Recording data in a table",
            body: "Put the independent variable in the first column and the dependent variable in the next. Write the quantity **and its unit in the column heading**, for example 'Time (s)', so the numbers in the table do not need units. Repeat readings and calculate a **mean**:\n\n$$\\text{mean}=\\frac{\\text{sum of readings}}{\\text{number of readings}}$$",
          },
          {
            heading: "Graphs, trends and anomalies",
            body: "On a line graph, the independent variable goes on the horizontal ($x$) axis and the dependent variable on the vertical ($y$) axis. Choose an even scale, label each axis with its unit, plot each point carefully, and draw a smooth line or line of best fit.\n\nDescribe a **trend** in words: 'as the temperature increases, the time decreases'. An **anomaly** is a result that does not fit the pattern. Check it, repeat the measurement if you can, and leave it out of the mean.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
          { name: "Table headings", statement: "Quantity (unit), for example Time (s)" },
          { name: "Graph axes", statement: "Independent variable on the $x$-axis, dependent variable on the $y$-axis" },
        ],
        workedExample: {
          problem: "A student measures the time for a ball to fall: 1.2 s, 1.4 s, 1.3 s and 2.5 s. Identify the anomaly and calculate the mean time without it.",
          solution: "The result of 2.5 s is much larger than the others, so it is the anomaly. Mean of the other three $=\\dfrac{1.2+1.4+1.3}{3}=\\dfrac{3.9}{3}=1.3\\text{ s}$.",
        },
      },
      questions: [
        {
          id: "myps1-u1-measuring-recording-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which piece of equipment should a student use to measure 20 cm$^3$ of water most precisely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test tube" },
              { id: "b", text: "Conical flask" },
              { id: "c", text: "Beaker" },
              { id: "d", text: "Measuring cylinder" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing equipment", statement: "A measuring cylinder has a fine scale and is designed to measure the volume of a liquid." },
            ],
            steps: [
              { reasoning: "A measuring cylinder has a fine scale for volumes, whereas the markings on a beaker or flask are only approximate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Measuring cylinder",
            commonErrors: ["Choosing a beaker because it holds liquid; its scale is rough and not precise."],
            examinerNote: "B1 for measuring cylinder. Allow pipette or burette if given as an open answer.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student measures the rise in temperature of water in three trials: $18.2\\ ^\\circ\\text{C}$, $18.6\\ ^\\circ\\text{C}$ and $18.4\\ ^\\circ\\text{C}$.\n\nCalculate the mean temperature rise.",
          response: { type: "numeric", parts: [{ label: "Mean temperature rise", answer: 18.4, tolerance: 0.01, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the three readings and divide by 3.", working: "\\text{mean}=\\frac{18.2+18.6+18.4}{3}=\\frac{55.2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "\\text{mean}=18.4\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18.4\\ ^\\circ\\text{C}$",
            commonErrors: ["Dividing by 2 or by the wrong number of readings.", "Forgetting the unit."],
            examinerNote: "M1 for sum divided by 3 (oe). A1 for 18.4 with unit. Allow 18.4 without unit for A1 only if the unit is stated elsewhere.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the time taken for sugar to dissolve in water at different temperatures.\n\n- $20\\ ^\\circ\\text{C}$: 80 s\n- $30\\ ^\\circ\\text{C}$: 62 s\n- $40\\ ^\\circ\\text{C}$: 45 s\n- $50\\ ^\\circ\\text{C}$: 85 s\n- $60\\ ^\\circ\\text{C}$: 22 s\n\nIdentify the anomalous result, describe the trend in the other results, and suggest what the student should do about the anomaly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "An anomaly is a result that does not fit the pattern of the other results." },
              { kind: "principle", name: "Describing a trend", statement: "A trend links the independent variable to the dependent variable using words such as 'as ... increases, ... decreases'." },
            ],
            steps: [
              { reasoning: "The result at $50\\ ^\\circ\\text{C}$ (85 s) is much higher than expected and breaks the pattern.", marks: 1, markCode: "B" },
              { reasoning: "In the other results, the time falls as the temperature rises.", marks: 1, markCode: "B" },
              { reasoning: "The student should repeat the measurement at $50\\ ^\\circ\\text{C}$ and replace or ignore the anomaly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The anomaly is 85 s at $50\\ ^\\circ\\text{C}$. As the temperature increases, the time to dissolve decreases. The student should repeat the test at $50\\ ^\\circ\\text{C}$.",
            commonErrors: ["Choosing 22 s as the anomaly just because it is the lowest value.", "Describing the results without saying which way the time changes."],
            examinerNote: "B1 for 50 degrees / 85 s. B1 for time decreases as temperature increases oe. B1 for repeat the reading (at 50 degrees) oe. Ignore 'the experiment was wrong'.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures the height of a bean seedling every two days. The results are: day 0, 3 cm; day 2, 7 cm; day 4, 11 cm; day 6, 15 cm; day 8, 19 cm.",
          parts: [
            { label: "a", prompt: "In a results table, the column headings should include units. Write a suitable heading for the column showing the height.", marks: 1 },
            { label: "b", prompt: "Calculate how much the seedling grew between day 2 and day 8.", marks: 2 },
            { label: "c", prompt: "Describe how the student should draw a line graph of the results.", marks: 3 },
            { label: "d", prompt: "Calculate the average growth in cm per day over the whole 8 days.", marks: 2 },
            { label: "e", prompt: "Describe the trend shown by the data.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tables", statement: "Column headings give the quantity and its unit." },
              { kind: "formula", name: "Rate of growth", statement: "$\\text{average growth per day}=\\dfrac{\\text{total growth}}{\\text{number of days}}$" },
              { kind: "skill", name: "Line graphs", statement: "Independent variable on the $x$-axis, dependent on the $y$-axis, with labelled axes, even scales and plotted points joined by a line." },
            ],
            steps: [
              { part: "a", reasoning: "The heading gives the quantity and unit: 'Height (cm)'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the height on day 2 from the height on day 8.", working: "19-7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "12\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Put time (days), the independent variable, on the $x$-axis and height (cm) on the $y$-axis, each labelled with its unit.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Choose an even scale that uses more than half of each axis.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Plot each point accurately and draw a line of best fit (or join the points with a ruler).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Total growth is $19-3=16\\text{ cm}$, divided by 8 days.", working: "\\frac{19-3}{8}=\\frac{16}{8}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "2\\text{ cm per day}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The seedling's height increases steadily, by about the same amount every 2 days.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Height (cm) (b) 12 cm (c) Days on x-axis, height on y-axis, labelled with units; even scale; plot points and draw a line (d) 2 cm per day (e) Height increases steadily over time.",
            commonErrors: ["In (b) using day 0 instead of day 2 and getting 16 cm.", "In (c) putting height on the horizontal axis.", "In (d) dividing 19 by 8 instead of the growth 16."],
            examinerNote: "(a) Accept Height in cm or Height/cm. (b) Allow ecf for a misread value. (c) Reject axes without labels for the first mark. (d) Allow ecf for total growth from an incorrect (b) only if the method is shown. (e) Allow 'positive correlation' oe.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which piece of equipment should a student use to measure the temperature of water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balance" },
              { id: "b", text: "Thermometer" },
              { id: "c", text: "Stopwatch" },
              { id: "d", text: "Measuring cylinder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Measuring instruments", statement: "A thermometer measures temperature; a stopwatch measures time; a balance measures mass; a measuring cylinder measures volume." },
            ],
            steps: [
              { reasoning: "Temperature is measured with a thermometer, in degrees Celsius.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Thermometer",
            commonErrors: ["Choosing a stopwatch, which measures time."],
            examinerNote: "B1 for thermometer.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When reading the volume of water in a measuring cylinder, where should the student's eye be?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Level with the bottom of the curved surface (meniscus)" },
              { id: "b", text: "Anywhere, as long as the reading is taken quickly" },
              { id: "c", text: "Above the liquid, looking down" },
              { id: "d", text: "At the top of the curved surface" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading a meniscus", statement: "Read the bottom of the meniscus with your eye level with the surface to avoid parallax error." },
            ],
            steps: [
              { reasoning: "Reading at eye level with the bottom of the meniscus gives an accurate volume.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Level with the bottom of the curved surface (meniscus)",
            commonErrors: ["Reading from above or below, which causes parallax error."],
            examinerNote: "B1 for level with the bottom of the meniscus.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student draws a line graph of the time taken for sugar to dissolve (dependent variable) against the temperature of the water (independent variable). Which variable should be plotted on the horizontal ($x$) axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass of sugar" },
              { id: "b", text: "Time taken to dissolve" },
              { id: "c", text: "Temperature of the water" },
              { id: "d", text: "Volume of water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Graph axes", statement: "The independent variable goes on the $x$-axis and the dependent variable on the $y$-axis." },
            ],
            steps: [
              { reasoning: "Temperature is the independent variable, so it goes on the $x$-axis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Temperature of the water",
            commonErrors: ["Choosing time, which is the dependent variable and belongs on the $y$-axis."],
            examinerNote: "B1 for temperature.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student is making a results table for an investigation into how ramp height affects the distance a trolley rolls. Which is the most suitable column heading for the column showing how far the trolley rolls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cm" },
              { id: "b", text: "Distance (cm)" },
              { id: "c", text: "Distance" },
              { id: "d", text: "How far" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Table headings", statement: "A column heading gives the quantity and its unit, for example 'Distance (cm)'." },
            ],
            steps: [
              { reasoning: "The heading must name the quantity and give the unit so the numbers in the column need no units.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Distance (cm)",
            commonErrors: ["Choosing 'Distance' without a unit.", "Choosing 'cm' without naming the quantity."],
            examinerNote: "B1 for Distance (cm) or equivalent with unit.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student measures the time taken for the same sugar sample to dissolve at different temperatures. The results are:\n\n- $20\\ ^\\circ\\text{C}$: 80 s\n- $30\\ ^\\circ\\text{C}$: 62 s\n- $40\\ ^\\circ\\text{C}$: 45 s\n- $50\\ ^\\circ\\text{C}$: 24 s\n- $60\\ ^\\circ\\text{C}$: 70 s\n\nWhich result is the anomaly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\ ^\\circ\\text{C}$: 45 s" },
              { id: "b", text: "$20\\ ^\\circ\\text{C}$: 80 s" },
              { id: "c", text: "$50\\ ^\\circ\\text{C}$: 24 s" },
              { id: "d", text: "$60\\ ^\\circ\\text{C}$: 70 s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "An anomaly is a result that does not fit the pattern of the other results." },
            ],
            steps: [
              { reasoning: "The time falls steadily as temperature rises until $60\\ ^\\circ\\text{C}$, where it jumps to 70 s, breaking the pattern.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $60\\ ^\\circ\\text{C}$: 70 s",
            commonErrors: ["Choosing 24 s at $50\\ ^\\circ\\text{C}$ just because it is the lowest value, but it fits the falling trend.", "Choosing 80 s at $20\\ ^\\circ\\text{C}$, the first result, which fits the pattern."],
            examinerNote: "B1 for the 70 s result at 60 degrees.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student measures the height of a bean seedling (dependent variable) every day for a week (independent variable). She draws a graph but puts the height on the horizontal axis and the day on the vertical axis.\n\nWhich change must she make to the axes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make the scale on each axis start at a different number" },
              { id: "b", text: "Remove the axis labels" },
              { id: "c", text: "Swap the axes: put day on the horizontal axis and height on the vertical axis" },
              { id: "d", text: "No change is needed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Graph axes", statement: "The independent variable goes on the $x$-axis and the dependent variable on the $y$-axis." },
            ],
            steps: [
              { reasoning: "Day is the independent variable, so it belongs on the $x$-axis; height is the dependent variable, so it belongs on the $y$-axis.", marks: 1, markCode: "B" },
              { reasoning: "The student has them the wrong way round, so the axes must be swapped.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Swap the axes: put day on the horizontal axis and height on the vertical axis",
            commonErrors: ["Thinking any axis order is acceptable."],
            examinerNote: "B1 for identifying the swap. R1 for linking to independent/dependent convention.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student measures the length of a metal strip four times: 12.4 mm, 12.6 mm, 12.5 mm and 12.3 mm.\n\nCalculate the mean length.",
          response: { type: "numeric", parts: [{ label: "Mean length", answer: 12.45, tolerance: 0.01, unit: "mm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the four readings and divide by 4.", working: "\\text{mean}=\\frac{12.4+12.6+12.5+12.3}{4}=\\frac{49.8}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "12.45\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.45\\text{ mm}$ (accept $12.5\\text{ mm}$ to 1 decimal place)",
            commonErrors: ["Dividing by 3 instead of 4.", "Rounding incorrectly."],
            examinerNote: "M1 for 49.8 divided by 4. A1 for 12.45 mm or 12.5 mm.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The times taken for a pendulum to complete 10 swings are measured four times: 1.5 s, 1.7 s, 1.6 s and 1.4 s.\n\nCalculate the mean time.",
          response: { type: "numeric", parts: [{ label: "Mean time", answer: 1.55, tolerance: 0.01, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "Add the four readings and divide by 4.", working: "\\text{mean}=\\frac{1.5+1.7+1.6+1.4}{4}=\\frac{6.2}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "1.55\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.55\\text{ s}$",
            commonErrors: ["Dividing by 3 instead of 4.", "Forgetting the unit."],
            examinerNote: "M1 for 6.2 divided by 4. A1 for 1.55 s.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student measures the height of a plant every day: 3.1 cm, 3.2 cm, 9.8 cm, 3.0 cm and 3.3 cm.\n\nOne reading is anomalous. Identify it and calculate the mean of the remaining readings.",
          response: { type: "numeric", parts: [{ label: "Mean of remaining readings", answer: 3.15, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "An anomaly is a result that does not fit the pattern of the other results." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{sum of readings}}{\\text{number of readings}}$" },
            ],
            steps: [
              { reasoning: "The reading of 9.8 cm is far higher than the others and does not fit the slowly rising pattern, so it is the anomaly.", marks: 1, markCode: "B" },
              { reasoning: "Add the four remaining readings and divide by 4.", working: "\\text{mean}=\\frac{3.1+3.2+3.0+3.3}{4}=\\frac{12.6}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "3.15\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The anomaly is 9.8 cm; mean of the remaining readings is $3.15\\text{ cm}$.",
            commonErrors: ["Keeping the anomaly in the mean.", "Choosing 3.0 cm as the anomaly because it is the lowest value."],
            examinerNote: "B1 for 9.8 cm. M1 for 12.6 divided by 4. A1 for 3.15 cm. Allow ecf if consistent.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the height of a bean seedling every 5 days. The results are: day 0, 2 cm; day 5, 5 cm; day 10, 8 cm; day 15, 11 cm; day 20, 14 cm.\n\nAssuming the trend continues steadily, calculate (i) the total growth between day 0 and day 20, (ii) the average growth per day, and (iii) the predicted height on day 25.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total growth between day 0 and day 20", answer: 12, unit: "cm" },
              { label: "Average growth per day", answer: 0.6, tolerance: 0.01, unit: "cm/day" },
              { label: "Predicted height on day 25", answer: 17, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Growth rate", statement: "$\\text{average growth per day}=\\dfrac{\\text{total growth}}{\\text{number of days}}$" },
            ],
            steps: [
              { reasoning: "Subtract the height on day 0 from the height on day 20.", working: "14-2=12\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Divide the total growth by 20 days.", working: "\\frac{12}{20}=0.6\\text{ cm per day}", marks: 1, markCode: "M" },
              { reasoning: "Add 5 more days of growth ($0.6\\times5=3\\text{ cm}$) to the day 20 height.", working: "14+3=17\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12\\text{ cm}$, $0.6\\text{ cm/day}$, $17\\text{ cm}$",
            commonErrors: ["Dividing 14 by 20 instead of the growth 12.", "Predicting 14 + 0.6 instead of adding 5 days of growth."],
            examinerNote: "M1 for each method step. A1 for 17 cm. Allow ecf for the prediction if the rate is correct.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student measures the time taken for sugar to dissolve at five different temperatures and records the results.",
          parts: [
            { label: "a", prompt: "Describe how the student should write the column headings in the results table.", marks: 1 },
            { label: "b", prompt: "State which variable should go on the horizontal axis of a line graph and which on the vertical axis.", marks: 1 },
            { label: "c", prompt: "Describe **two** other features the student should include when drawing the line graph.", marks: 1 },
            { label: "d", prompt: "Describe the trend the student should expect to see in the data.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tables", statement: "Column headings give the quantity and its unit." },
              { kind: "skill", name: "Line graphs", statement: "Independent variable on the $x$-axis, dependent on the $y$-axis, labelled axes, even scale, points plotted and joined by a line." },
            ],
            steps: [
              { part: "a", reasoning: "Each heading gives the quantity and its unit, for example 'Temperature ($^\\circ\\text{C}$)' and 'Time (s)'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Temperature (independent) on the $x$-axis and time to dissolve (dependent) on the $y$-axis, each labelled with its unit.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any two of: an even scale that uses more than half of each axis; accurately plotted points; a line of best fit or ruled line joining the points.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "As the temperature increases, the time taken to dissolve decreases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Headings include quantity and unit, e.g. Temperature ($^\\circ\\text{C}$), Time (s) (b) Temperature on $x$, time on $y$, labelled with units (c) Any two: even scale, plotted points, line of best fit (d) Time decreases as temperature increases.",
            commonErrors: ["In (b) swapping the axes.", "In (c) forgetting the line of best fit or the even scale.", "In (d) describing individual results instead of the overall trend."],
            examinerNote: "(a) Accept 'Temperature in °C' oe. (c) Allow any two correct graph features.",
          },
        },
        {
          id: "myps1-u1-measuring-recording-graphs-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures the mass of a burning candle every 2 minutes. The results are:\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 |\n| --- | --- | --- | --- | --- | --- |\n| Mass (g) | 50.0 | 49.0 | 48.0 | 47.0 | 46.0 |",
          parts: [
            { label: "a", prompt: "Suggest a suitable column heading for a table showing how much mass the candle has lost at each time.", marks: 1 },
            { label: "b", prompt: "Calculate the mass of wax lost after 8 minutes.", marks: 2 },
            { label: "c", prompt: "Describe how the student should draw a line graph of the results.", marks: 3 },
            { label: "d", prompt: "Calculate the average rate of mass loss in grams per minute.", marks: 2 },
            { label: "e", prompt: "Describe the trend shown by the data.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tables", statement: "Column headings give the quantity and its unit." },
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in mass}}{\\text{time taken}}$" },
              { kind: "skill", name: "Line graphs", statement: "Independent variable on the $x$-axis, dependent on the $y$-axis, with labelled axes, even scales and plotted points joined by a line." },
            ],
            steps: [
              { part: "a", reasoning: "The heading gives the quantity and unit, for example 'Mass lost (g)'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the final mass from the initial mass.", working: "50.0-46.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "4.0\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Put time (min), the independent variable, on the $x$-axis and mass (g) on the $y$-axis, each labelled with its unit.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Choose an even scale that uses more than half of each axis.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Plot each point accurately and draw a line of best fit (or join the points with a ruler).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide the mass lost by the time taken.", working: "\\frac{4.0}{8}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "0.5\\text{ g per minute}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The mass of the candle decreases steadily as time goes on (by about the same amount every 2 minutes).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Mass lost (g) (b) 4.0 g (c) Time on $x$-axis, mass on $y$-axis, labelled with units; even scale; plot points and draw a line (d) 0.5 g per minute (e) Mass decreases steadily over time.",
            commonErrors: ["In (b) subtracting in the wrong order or using mass at 6 min instead of 8 min.", "In (c) putting mass on the horizontal axis.", "In (d) dividing by 4 instead of 8 minutes."],
            examinerNote: "(a) Accept Mass lost in g or Mass loss/g. (b) Allow ecf for a misread value. (c) Reject axes without labels for the first mark. (d) Allow ecf for mass lost from an incorrect (b) only if the method is shown. (e) Allow 'negative correlation' oe.",
          },
        },
      ],
    },
  ],
};
