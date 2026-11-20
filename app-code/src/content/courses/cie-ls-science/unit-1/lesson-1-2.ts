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
              { id: "a", text: "Measuring cylinder" },
              { id: "b", text: "Ruler" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Balance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Instruments", statement: "Measuring cylinder is designed for volume." },
            ],
            steps: [
              { reasoning: "Measuring cylinders measure liquid volume in ml.", working: "cylinder", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Measuring cylinder",
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
              { id: "a", text: "Line graph" },
              { id: "b", text: "Bar chart" },
              { id: "c", text: "Pie chart" },
              { id: "d", text: "Pictogram" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graph choice", statement: "Continuous change over time → line graph." },
            ],
            steps: [
              { reasoning: "Temperature varies continuously → line graph shows trend.", working: "line", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Line graph",
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
