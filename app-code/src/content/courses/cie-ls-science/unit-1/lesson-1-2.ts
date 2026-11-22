import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cils-u1-lesson-1-2",
  code: "1-2",
  title: "Measurement and data",
  goal: "I CAN choose appropriate instruments, units and record data accurately.",
  standards: ["0893 Working scientifically: measurement"],
  vocabulary: [
    { term: "SI units", definition: "Standard international units — metres, kilograms, seconds, etc." },
    { term: "Precision", definition: "How finely an instrument measures — more decimal places = more precise." },
    { term: "Accuracy", definition: "How close a measurement is to the true value." },
    { term: "Meniscus", definition: "Curve at top of liquid in a measuring cylinder — read at bottom of curve." },
    { term: "Zero error", definition: "Instrument reading when measuring nothing — must be corrected for." },
    { term: "Significant figures", definition: "Digits that carry meaning — avoid false precision." },
  ],
  concepts: [
    {
      id: "cils-u1-measurement",
      title: "Measuring accurately",
      skill: "Select instruments, read scales correctly, and understand precision vs accuracy.",
      lesson: {
        sections: [
          {
            heading: "Choosing instruments",
            body: "Match instrument to measurement: ruler for length (mm precision), measuring cylinder for volume (ml), balance for mass (g), thermometer for temperature (°C), stopwatch for time (s).",
          },
          {
            heading: "Precision vs accuracy",
            body: "- **Precision**: consistent readings (tight grouping)\n- **Accuracy**: close to true value\n\nA broken scale can give precise but inaccurate readings — always zero-check.",
          },
          {
            heading: "Reading scales",
            body: "Read at eye level. For cylinders, read the bottom of the meniscus. Estimate to one extra digit beyond the scale marks.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Record value + unit; estimate to half the smallest division." },
        ],
        workedExample: {
          problem: "A ruler marked in mm measures a pencil at 14.3 cm. What's the precision and how should it be recorded?",
          solution: "Precision = 0.1 cm (estimated between mm marks). Record as 14.3 cm — the 3 is an estimate.",
        },
      },
      questions: [
        {
          id: "cils-u1-meas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which instrument measures volume most precisely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ruler" },
              { id: "b", text: "Balance" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Measuring cylinder" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Instruments", statement: "Measuring cylinder is designed for volume." },
            ],
            steps: [
              { reasoning: "Measuring cylinders measure liquid volume in ml.", working: "cylinder", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Measuring cylinder",
            commonErrors: ["Choosing (b) — rulers measure length, not volume."],
          },
        },
        {
          id: "cils-u1-meas-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between precision and accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precision vs accuracy", statement: "Precision = consistency; accuracy = closeness to true value." },
            ],
            steps: [
              { reasoning: "Precision: repeated measurements cluster tightly.", working: "consistent", marks: 1, markCode: "M" },
              { reasoning: "Accuracy: measurement matches true value — may need calibration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Precision is how consistent measurements are; accuracy is how close they are to the true value.",
            commonErrors: ["Using the terms interchangeably — they measure different things."],
          },
        },
        {
          id: "cils-u1-meas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stopwatch shows 0.5 s when not running. You time an event as 12.5 s. What is the corrected time? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Zero error", statement: "Zero error must be subtracted: $12.5 - 0.5 = 12.0$ s." },
            ],
            steps: [
              { reasoning: "Identify zero error of $0.5$ s.", working: "0.5s", marks: 1, markCode: "M" },
              { reasoning: "Subtract: $12.5 - 0.5 = 12.0$ s.", working: "12.0s", marks: 1, markCode: "M" },
              { reasoning: "$12.0$ s corrected.", marks: 1, markCode: "M" },
              { reasoning: "Explanation of zero error.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.0$ s (subtract zero error)",
            commonErrors: ["Adding the zero error — must subtract."],
          },
        },
        {
          id: "cils-u1-meas-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You need to measure the volume of an irregular stone.",
          parts: [
            { label: "a", prompt: "Describe the method using a measuring cylinder.", marks: 3 },
            { label: "b", prompt: "Why can't you measure it directly with a ruler?", marks: 2 },
            { label: "c", prompt: "How would you ensure an accurate reading?", marks: 2 },
            { label: "d", prompt: "If the stone floats, describe an alternative method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Displacement", statement: "Volume = water displaced = final − initial readings." },
            ],
            steps: [
              { part: "a", reasoning: "Fill cylinder partially, record volume, lower stone in, record new volume, subtract.", working: "displacement", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear steps.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Irregular shape has no simple length/width/height for formula.", working: "irregular", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reasoning correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read meniscus at eye level, bottom of curve; ensure stone fully submerged.", working: "meniscus", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accuracy measures.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use a denser liquid or attach a weight; or use overflow can.", working: "alternative", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid alternative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) displacement method (b) irregular shape (c) eye level, meniscus, submerged (d) denser liquid/weight/overflow",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Method correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Alternative valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Measuring stone's dimensions — displacement is correct method."],
          },
        },
        {
          id: "cils-u1-meas-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which instrument is most appropriate for measuring mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermometer" },
              { id: "b", text: "Balance" },
              { id: "c", text: "Ruler" },
              { id: "d", text: "Measuring cylinder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Instruments", statement: "A balance measures mass; a ruler measures length." }],
            steps: [{ reasoning: "Balances are designed to measure mass.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Balance",
          },
        },
        {
          id: "cils-u1-meas-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ruler has a zero error of 0.2 cm. An object measures 15.4 cm on this ruler. Enter the corrected length in cm.",
          response: { type: "numeric", parts: [{ label: "Corrected length", answer: 15.2, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Zero error", statement: "Subtract the zero error from the measured value." }],
            steps: [{ reasoning: "$15.4-0.2 = 15.2$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$15.2$ cm",
          },
        },
        {
          id: "cils-u1-meas-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why an instrument with a zero error can still give precise readings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Precision vs accuracy", statement: "Precision is consistency; zero error affects accuracy." }],
            steps: [
              { reasoning: "Repeated readings can be very consistent even if all are shifted by the same error.", marks: 1, markCode: "M" },
              { reasoning: "The systematic zero error is corrected to improve accuracy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Readings may be tightly grouped, but the zero error shifts all values, so accuracy requires correction.",
          },
        },
        {
          id: "cils-u1-meas-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where should you read the level of water in a measuring cylinder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Side of the cylinder" },
              { id: "b", text: "Top of the meniscus from above" },
              { id: "c", text: "Bottom of the meniscus at eye level" },
              { id: "d", text: "Base of the cylinder" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Meniscus", statement: "Read at eye level at the bottom of the curved surface." }],
            steps: [{ reasoning: "The bottom of the meniscus gives the correct volume reading.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Bottom of the meniscus at eye level",
          },
        },
        {
          id: "cils-u1-meas-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water volume rises from 40 cm³ to 67 cm³ after a stone is added. Enter the stone's volume in cm³.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 27, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Displacement", statement: "Volume displaced = final reading minus initial reading." }],
            steps: [{ reasoning: "$67-40 = 27$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "$27$ cm³",
          },
        },
        {
          id: "cils-u1-meas-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose suitable instruments for measuring temperature and time, and give their usual units.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Instruments", statement: "Thermometer for temperature; stopwatch or timer for time." }],
            steps: [
              { reasoning: "Use a thermometer for temperature and a stopwatch or timer for time.", marks: 1, markCode: "M" },
              { reasoning: "Units are degrees Celsius and seconds respectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thermometer in °C; stopwatch or timer in s.",
          },
        },
        {
          id: "cils-u1-meas-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which description defines precision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of experiments" },
              { id: "b", text: "How close measurements are to the true value" },
              { id: "c", text: "How consistent repeated measurements are" },
              { id: "d", text: "The largest possible unit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Precision", statement: "Precision describes consistency of repeated measurements." }],
            steps: [{ reasoning: "Precision is about repeatability, not closeness to truth.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** How consistent repeated measurements are",
          },
        },
        {
          id: "cils-u1-meas-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Five lengths are 10.1, 10.3, 10.2, 10.2 and 10.2 cm. Enter the mean length in cm.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 10.2, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(10.1+10.3+10.2+10.2+10.2)\\div 5 = 10.2$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$10.2$ cm",
          },
        },
        {
          id: "cils-u1-meas-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an appropriate SI unit for time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second" },
              { id: "b", text: "Litre" },
              { id: "c", text: "Metre" },
              { id: "d", text: "Gram" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "SI units", statement: "The second is the SI unit of time." }],
            steps: [{ reasoning: "Metre is length, gram is mass and litre is volume.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Second",
          },
        },
        {
          id: "cils-u1-meas-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A balance reads 0.5 g with no object on it. An object reads 24.5 g. Enter the corrected mass in g.",
          response: { type: "numeric", parts: [{ label: "Corrected mass", answer: 24, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Zero error", statement: "Corrected value = reading minus zero error." }],
            steps: [{ reasoning: "$24.5-0.5 = 24.0$ g.", marks: 1, markCode: "A" }],
            finalAnswer: "$24.0$ g",
          },
        },
        {
          id: "cils-u1-meas-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A thermometer gives consistent readings but they are all 2 °C below the true temperature. Explain the situation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Accuracy", statement: "Accuracy is closeness to the true value." }],
            steps: [
              { reasoning: "The thermometer is precise because readings are consistent.", marks: 1, markCode: "M" },
              { reasoning: "It is inaccurate because every value is below the true temperature.", marks: 1, markCode: "M" },
              { reasoning: "Calibration or correction is needed to improve accuracy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The thermometer is precise but inaccurate; calibration can correct the systematic error.",
          },
        },
        {
          id: "cils-u1-meas-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ruler is marked in millimetres. Which measurement shows the best use of an estimated digit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14 cm" },
              { id: "b", text: "about 14" },
              { id: "c", text: "14.327 cm" },
              { id: "d", text: "14.3 cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading scales", statement: "Estimate to one digit beyond the smallest division." }],
            steps: [{ reasoning: "14.3 cm estimates to one decimal place beyond mm marks.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 14.3 cm",
          },
        },
      ],
    },
    {
      id: "cils-u1-data",
      title: "Recording and presenting data",
      skill: "Organise data in tables, identify anomalies, and choose appropriate graphs.",
      lesson: {
        sections: [
          {
            heading: "Data tables",
            body: "Record raw data clearly with units. Add column for repeats/calculations. Identify anomalies — values far from others that may be errors.",
          },
          {
            heading: "Choosing graphs",
            body: "- **Line graph**: continuous data over time\n- **Bar chart**: comparing categories\n- **Scatter graph**: relationship between two variables",
          },
          {
            heading: "Anomalies",
            body: "Anomalous results shouldn't be deleted — investigate cause. If clearly an error (spill, misread), exclude with justification; repeat if possible.",
          },
        ],
        keyFormulas: [
          { name: "Anomaly", statement: "A result far from the pattern — investigate before deciding." },
        ],
        workedExample: {
          problem: "Reaction times: 0.3, 0.4, 0.3, 2.1, 0.4 s. What should you do with 2.1 s?",
          solution: "It's anomalous — check if student was distracted; repeat the measurement rather than silently deleting.",
        },
      },
      questions: [
        {
          id: "cils-u1-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which graph best shows how temperature changes over a day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pictogram" },
              { id: "b", text: "Bar chart" },
              { id: "c", text: "Line graph" },
              { id: "d", text: "Pie chart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graph choice", statement: "Continuous change over time → line graph." },
            ],
            steps: [
              { reasoning: "Temperature varies continuously → line graph shows trend.", working: "line", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Line graph",
            commonErrors: ["Choosing (b) — bar charts compare discrete categories."],
          },
        },
        {
          id: "cils-u1-data-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an anomaly in experimental data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anomaly", statement: "A result far outside the pattern of other results." },
            ],
            steps: [
              { reasoning: "Definition: result inconsistent with others.", working: "inconsistent", marks: 1, markCode: "M" },
              { reasoning: "Should be investigated, not automatically deleted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A result that doesn't fit the pattern — investigate cause before excluding.",
            commonErrors: ["Deleting anomalies without explanation — they may reveal something."],
          },
        },
        {
          id: "cils-u1-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Results for dissolving times: 45, 47, 46, 89, 44 s. Describe what you notice and what to do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Anomaly handling", statement: "89 s is anomalous — investigate cause, repeat if possible." },
            ],
            steps: [
              { reasoning: "89 s is far above others (~45 s) — anomalous.", working: "89\\text{ anomalous}", marks: 1, markCode: "M" },
              { reasoning: "Possible causes: not stirred, cold water, timing error.", working: "causes", marks: 1, markCode: "M" },
              { reasoning: "Repeat measurement or investigate; don't just delete.", working: "repeat", marks: 1, markCode: "M" },
              { reasoning: "Appropriate handling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "89 s is anomalous — investigate possible causes and repeat rather than silently discard.",
            commonErrors: ["Averaging it in without comment — hides the anomaly."],
          },
        },
        {
          id: "cils-u1-data-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You measure plant growth over 4 weeks.",
          parts: [
            { label: "a", prompt: "Design a data table for recording height weekly.", marks: 3 },
            { label: "b", prompt: "Which graph type shows growth trend best?", marks: 2 },
            { label: "c", prompt: "Week 3 reading is 3× higher than expected. What do you do?", marks: 2 },
            { label: "d", prompt: "How would you calculate average weekly growth?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Data handling", statement: "Table with weeks/replicates/heights; line graph for trend; anomalies investigated; mean growth calculated." },
            ],
            steps: [
              { part: "a", reasoning: "Table: Week 1-4 columns, rows for replicates, cells for height (cm).", working: "table", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Units included.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Well-designed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Line graph — continuous growth over time.", working: "line", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct choice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check for error (misread, damage); repeat if possible; note as anomaly.", working: "investigate", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Appropriate action.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total growth ÷ 4 weeks, or mean of weekly increases.", working: "mean growth", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) table weeks × replicates with units (b) line graph (c) investigate/repeat (d) total ÷ weeks or mean weekly increase",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Table good.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Handled well.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Poor.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Method correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) deleting the point — must investigate first."],
          },
        },
        {
          id: "cils-u1-data-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which graph is best for comparing the masses of five different fruits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Line graph" },
              { id: "b", text: "Scatter graph" },
              { id: "c", text: "Bar chart" },
              { id: "d", text: "Pie chart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Graph choice", statement: "Bar charts compare discrete categories." }],
            steps: [{ reasoning: "Fruit types are categories, so a bar chart is appropriate.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Bar chart",
          },
        },
        {
          id: "cils-u1-data-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data values are 3, 5, 7, 9 and 11. Enter the mean value.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(3+5+7+9+11)\\div 5 = 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cils-u1-data-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two features a good data table should include.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Data tables", statement: "Tables need clear headings, units and repeat readings." }],
            steps: [
              { reasoning: "Clear column headings identify what each value means.", marks: 1, markCode: "M" },
              { reasoning: "Units and room for repeats make data interpretable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear headings and units, with space for repeat readings.",
          },
        },
        {
          id: "cils-u1-data-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which graph is best for investigating whether temperature affects dissolving rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scatter graph" },
              { id: "b", text: "Bar chart only" },
              { id: "c", text: "Pictogram" },
              { id: "d", text: "Pie chart" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Graph choice", statement: "Scatter graphs show relationships between two continuous variables." }],
            steps: [{ reasoning: "Temperature and rate are continuous variables.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Scatter graph",
          },
        },
        {
          id: "cils-u1-data-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data are 10, 11, 12, 13 and 31. Enter the number of likely anomalous values.",
          response: { type: "numeric", parts: [{ label: "Anomalies", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Anomaly", statement: "An anomalous result is far outside the pattern of other values." }],
            steps: [{ reasoning: "31 is far from the cluster 10–13, so it is anomalous.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u1-data-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe what you should do when one result is much higher than the others.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Anomalies", statement: "Investigate anomalies before deciding whether to exclude them." }],
            steps: [
              { reasoning: "Check for a possible cause such as a spill, misreading or timing error.", marks: 1, markCode: "M" },
              { reasoning: "Repeat the measurement if possible.", marks: 1, markCode: "M" },
              { reasoning: "Only exclude it if the error is justified, and state this in the report.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Investigate the cause, repeat if possible, and exclude only with justification.",
          },
        },
        {
          id: "cils-u1-data-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which graph best shows changes in temperature during one day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pie chart" },
              { id: "b", text: "Bar chart" },
              { id: "c", text: "Pictogram" },
              { id: "d", text: "Line graph" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Graph choice", statement: "Line graphs show continuous change over time." }],
            steps: [{ reasoning: "Temperature changes continuously through the day.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Line graph",
          },
        },
        {
          id: "cils-u1-data-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurements are 4, 8, 6, 10 and 7 cm. Enter the range in cm.",
          response: { type: "numeric", parts: [{ label: "Range", answer: 6, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Range", statement: "Range = largest minus smallest value." }],
            steps: [{ reasoning: "$10-4 = 6$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$6$ cm",
          },
        },
        {
          id: "cils-u1-data-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should every measurement in a table include a unit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the table colourful" },
              { id: "b", text: "To show what quantity and scale are being reported" },
              { id: "c", text: "To remove the need for repeats" },
              { id: "d", text: "To prove the result is correct" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Units", statement: "Measurements must include units to be meaningful." }],
            steps: [{ reasoning: "Units identify the quantity and scale of the value.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** To show what quantity and scale are being reported",
          },
        },
        {
          id: "cils-u1-data-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A plant's heights are 9, 10 and 11 cm in weeks 1–3. Enter the mean height in cm.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(9+10+11)\\div 3 = 10$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$10$ cm",
          },
        },
        {
          id: "cils-u1-data-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a scatter graph may be better than a bar chart for some investigations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Graph choice", statement: "Scatter graphs reveal relationships between continuous variables." }],
            steps: [
              { reasoning: "Scatter graphs plot two continuous variables against each other.", marks: 1, markCode: "M" },
              { reasoning: "They can reveal trends or correlations between variables.", marks: 1, markCode: "M" },
              { reasoning: "Bar charts are better for comparing categories, not relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scatter graphs show relationships between continuous variables, while bar charts compare categories.",
          },
        },
        {
          id: "cils-u1-data-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should be done with repeat measurements in a data table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hide values that differ" },
              { id: "b", text: "Record all values so consistency can be checked" },
              { id: "c", text: "Replace them with estimates" },
              { id: "d", text: "Record only the highest value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Repeats", statement: "All repeat values should be recorded for analysis." }],
            steps: [{ reasoning: "Recording repeats allows means, ranges and anomalies to be assessed.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Record all values so consistency can be checked",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u1-measurement-notes",
      title: "Measurement and data — revision notes",
      summary: "Instruments, precision vs accuracy, anomalies, graph choice.",
      sections: [
        {
          heading: "Measuring",
          body: "Match instrument to quantity. Precision = consistency; accuracy = closeness to true value. Read meniscus at eye level; correct for zero error.",
        },
        {
          heading: "Data",
          body: "Tables with units; line graphs for trends; bar charts for categories. Anomalies: investigate, don't delete silently.",
        },
      ],
    },
  ],
};
