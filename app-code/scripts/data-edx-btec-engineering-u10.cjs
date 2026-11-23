module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "edxbteceng-u10-lesson-10-1", code: "10-1",
      title: "Reliability Metrics and Life Data",
      goal: "I CAN calculate reliability metrics and interpret basic failure data.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — maintenance and reliability",
        "Reliability engineering: failure metrics, availability and life data",
      ],
      vocabulary: [
        { term: "Failure", definition: "The inability of a component or system to perform its required function." },
        { term: "MTBF", definition: "Mean time between failures; average operating time per failure for a repairable item." },
        { term: "MTTR", definition: "Mean time to repair; average time to restore a failed item to operation." },
        { term: "Availability", definition: "The proportion of time a system is able to perform its required function." },
        { term: "Failure rate", definition: "The probability of failure per unit time, often expressed per hour." },
        { term: "Bathtub curve", definition: "Failure-rate pattern with early failures, a stable useful-life period and wear-out failures." },
      ],
      concepts: [
        {
          id: "edxbteceng-u10-10-1-met", title: "Reliability and availability metrics",
          skill: "Calculate MTBF, MTTR, failure rate and availability.",
          sections: [
            { heading: "Failure metrics", body: "Reliability is often measured by how often failures occur and how quickly they are repaired. MTBF is total operating time divided by the number of failures for a repairable system. MTTR is total repair time divided by the number of repairs. A longer MTBF indicates higher reliability; a shorter MTTR indicates faster recovery. These metrics must be defined carefully: MTBF applies to repairable systems, while mean time to failure (MTTF) is often used for non-repairable items." },
            { heading: "Availability", body: "Availability combines reliability and maintainability. For a simple steady-state model, availability = MTBF / (MTBF + MTTR). If MTBF is 500 h and MTTR is 20 h, availability = 500 / 520 = 0.9615, or about 96.2 percent. Downtime reduces availability, so improving repair time can be as valuable as reducing failures. Failure rate is approximately the reciprocal of MTBF for an exponential distribution: lambda = 1 / MTBF." },
          ],
          keyFormulas: [
            { name: "MTBF", statement: "MTBF = total operating time / number of failures" },
            { name: "MTTR", statement: "MTTR = total repair time / number of repairs" },
            { name: "Availability", statement: "A = MTBF / (MTBF + MTTR)" },
          ],
          workedExample: {
            problem: "A pump fleet records 8 failures in 4000 operating hours. Total downtime is 160 hours. Find MTBF, MTTR and availability.",
            solution: "MTBF = 4000 / 8 = 500 h. MTTR = 160 / 8 = 20 h. Availability = 500 / (500 + 20) = 0.9615, about 96.2 percent.",
          },
          questions: [
            {
              id: "edxbteceng-u10-met-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does MTBF measure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Average operating time between failures" }, { id: "b", text: "Average time spent repairing" }, { id: "c", text: "Total production output" }, { id: "d", text: "Maximum load capacity" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "MTBF", statement: "Mean time between failures for a repairable system." }],
                steps: [{ reasoning: "MTBF is operating time per failure.", marks: 1, markCode: "M" }],
                finalAnswer: "Operating time between failures",
              },
            },
            {
              id: "edxbteceng-u10-met-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Ten machines run for a total of 1000 hours and experience 4 failures. Calculate MTBF.",
              response: { type: "numeric", parts: [{ label: "MTBF", answer: 250, unit: "h" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "MTBF", statement: "MTBF = operating time / failures." }],
                steps: [
                  { reasoning: "MTBF = 1000 / 4.", marks: 1, markCode: "M" },
                  { reasoning: "MTBF = 250 h.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "250 h",
              },
            },
            {
              id: "edxbteceng-u10-met-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between MTBF and MTTR.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "MTBF versus MTTR", statement: "MTBF measures failure interval; MTTR measures repair duration." }],
                steps: [
                  { reasoning: "MTBF is the average time between failures while running.", marks: 1, markCode: "M" },
                  { reasoning: "MTTR is the average time needed to repair and return to service.", marks: 1, markCode: "M" },
                  { reasoning: "Availability improves when MTBF rises or MTTR falls.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "MTBF = time between failures; MTTR = repair time.",
              },
            },
            {
              id: "edxbteceng-u10-met-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A conveyor has MTBF = 400 h and MTTR = 25 h.",
              parts: [
                { label: "a", prompt: "Calculate availability as a decimal.", marks: 3 },
                { label: "b", prompt: "Express availability as a percentage.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Availability", statement: "A = MTBF / (MTBF + MTTR)." }],
                steps: [
                  { part: "a", reasoning: "A = 400 / (400 + 25) = 400 / 425.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "A = 0.9412.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Percentage = 94.1 percent.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "0.9412, about 94.1 percent",
              },
            },
            {
              id: "edxbteceng-u10-met-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A machine operates for 2000 h and has 5 failures. Repairs take a total of 60 h.",
              parts: [
                { label: "a", prompt: "Calculate MTBF.", marks: 2 },
                { label: "b", prompt: "Calculate MTTR.", marks: 2 },
                { label: "c", prompt: "Calculate the failure rate per operating hour.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Reliability metrics", statement: "MTBF = time/failures; failure rate = failures/time." }],
                steps: [
                  { part: "a", reasoning: "MTBF = 2000 / 5 = 400 h.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "MTTR = 60 / 5 = 12 h.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Failure rate = 5 / 2000 = 0.0025 per hour.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "MTBF 400 h; MTTR 12 h; failure rate 0.0025/h.",
              },
            },
            {
              id: "edxbteceng-u10-met-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A plant records pump failures and downtime for one month.",
              parts: [
                { label: "a", prompt: "State the data needed to calculate MTBF.", marks: 1 },
                { label: "b", prompt: "State the data needed to calculate MTTR.", marks: 1 },
                { label: "c", prompt: "Explain why operating time should exclude repair downtime.", marks: 2 },
                { label: "d", prompt: "Explain how availability affects production output.", marks: 2 },
                { label: "e", prompt: "Suggest one action that could improve availability without changing design.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Reliability data", statement: "Track operating time, failure count and repair duration." }],
                steps: [
                  { part: "a", reasoning: "Total operating time and number of failures.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Total downtime and number of repairs.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "MTBF measures time at risk of failure; repair time is not operating exposure.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Lower availability reduces hours available for production and increases backlog.", marks: 2, markCode: "R" },
                  { part: "e", reasoning: "Improve spares, training, preventive maintenance or faster diagnosis to reduce MTTR.", marks: 3, markCode: "M" },
                ],
                finalAnswer: "Need operating time, failures and repair time; availability drives output; reduce downtime or failures.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u10-10-1-life", title: "Failure patterns and life data",
          skill: "Interpret bathtub curves and simple reliability functions.",
          sections: [
            { heading: "Bathtub curve", body: "The bathtub curve describes how failure rate changes over a product's life. Early failures, or infant mortality, occur soon after start-up because of manufacturing defects or installation errors. The useful-life period has a roughly constant random failure rate. Wear-out failures increase as components age, degrade or approach end of life. Maintenance can reduce early failures through burn-in and inspection, and delay wear-out through lubrication, replacement or redesign." },
            { heading: "Reliability functions", body: "For an exponential distribution, the reliability at time t is R(t) = e^(-t/MTBF), assuming constant failure rate. If t equals MTBF, reliability is about 0.37, meaning only 37 percent are expected to survive to the mean time. For series components, system reliability is the product of component reliabilities. For parallel redundant components, system reliability is higher because all parallel paths must fail. Life data should be analysed only when the failure definition and operating conditions are consistent." },
          ],
          keyFormulas: [
            { name: "Exponential reliability", statement: "R(t) = e^(-t/MTBF)" },
            { name: "Series reliability", statement: "Rsystem = R1 x R2 x ..." },
            { name: "Parallel reliability", statement: "Rsystem = 1 - (1 - R1)(1 - R2) for two paths" },
          ],
          workedExample: {
            problem: "A component has MTBF = 1000 h. Find the probability it survives 500 h under an exponential model.",
            solution: "R(500) = e^(-500/1000) = e^(-0.5) = 0.6065. About 60.7 percent are expected to survive to 500 h.",
          },
          questions: [
            {
              id: "edxbteceng-u10-life-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which region of the bathtub curve represents early failures?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Infant mortality" }, { id: "b", text: "Useful life" }, { id: "c", text: "Wear-out" }, { id: "d", text: "Design life" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Infant mortality", statement: "Early failures soon after start-up." }],
                steps: [{ reasoning: "Early failures are called infant mortality.", marks: 1, markCode: "M" }],
                finalAnswer: "Infant mortality",
              },
            },
            {
              id: "edxbteceng-u10-life-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A component has MTBF = 1000 h. Using R(t) = e^(-t/MTBF), calculate reliability at t = 500 h to 3 significant figures.",
              response: { type: "numeric", parts: [{ label: "R", answer: 0.607, tolerance: 0.001 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Exponential reliability", statement: "R(t) = e^(-t/MTBF)." }],
                steps: [
                  { reasoning: "Exponent = -500/1000 = -0.5.", marks: 1, markCode: "M" },
                  { reasoning: "R = e^(-0.5).", marks: 1, markCode: "M" },
                  { reasoning: "R = 0.6065, about 0.607.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "0.607",
              },
            },
            {
              id: "edxbteceng-u10-life-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what a Weibull shape parameter beta greater than 1 suggests about failures.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Weibull beta", statement: "Beta describes how failure rate changes with time." }],
                steps: [
                  { reasoning: "Beta > 1 indicates an increasing failure rate with age.", marks: 1, markCode: "M" },
                  { reasoning: "This often corresponds to wear-out failures.", marks: 1, markCode: "M" },
                  { reasoning: "Maintenance can target wear mechanisms before failures rise.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Increasing failure rate, likely wear-out.",
              },
            },
            {
              id: "edxbteceng-u10-life-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A pump shows three failure patterns over its life.",
              parts: [
                { label: "a", prompt: "Name the three regions of the bathtub curve.", marks: 1 },
                { label: "b", prompt: "Describe the failure rate in the useful-life region.", marks: 2 },
                { label: "c", prompt: "State one maintenance action for the wear-out region.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bathtub regions", statement: "Early failures, useful life and wear-out have different rates." }],
                steps: [
                  { part: "a", reasoning: "Infant mortality, useful life, wear-out.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Failure rate is approximately constant and often treated as random.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Preventive replacement, lubrication, overhaul or redesign before wear-out.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Infant mortality, useful life, wear-out; constant rate in useful life.",
              },
            },
            {
              id: "edxbteceng-u10-life-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two sensors have reliabilities 0.90 and 0.80 at 1000 h. One system uses them in series; another uses them in parallel.",
              parts: [
                { label: "a", prompt: "Calculate series system reliability.", marks: 3 },
                { label: "b", prompt: "Calculate parallel system reliability.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Series and parallel reliability", statement: "Series multiplies reliabilities; parallel uses redundancy." }],
                steps: [
                  { part: "a", reasoning: "Series R = 0.90 x 0.80 = 0.72.", marks: 3, markCode: "A" },
                  { part: "b", reasoning: "Parallel R = 1 - (1 - 0.90)(1 - 0.80) = 1 - 0.10 x 0.20 = 0.98.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Series 0.72; parallel 0.98.",
              },
            },
            {
              id: "edxbteceng-u10-life-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A manufacturer wants to analyse failures of a new gearbox over six months.",
              parts: [
                { label: "a", prompt: "State the failure definition that should be recorded.", marks: 2 },
                { label: "b", prompt: "List three data fields needed for life analysis.", marks: 3 },
                { label: "c", prompt: "Explain why operating conditions must be recorded.", marks: 2 },
                { label: "d", prompt: "Explain how the bathtub curve could guide maintenance.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Life data collection", statement: "Define failure consistently and record time, cause and conditions." }],
                steps: [
                  { part: "a", reasoning: "Failure = inability to transmit power within specified performance limits.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Operating hours, failure time, failure mode/cause and repair action.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Different loads or environments change failure mechanisms and life.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Early failures suggest burn-in; wear-out suggests scheduled replacement or redesign.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Record consistent failure definition, hours, cause and conditions; use curve to target maintenance.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u10-met-notes", title: "Reliability metrics and life data — notes",
      summary: "MTBF and MTTR drive availability; the bathtub curve links failure timing to maintenance strategy.",
      sections: [
        { heading: "Metrics", body: "MTBF = operating time per failure; MTTR = repair time per failure; availability = MTBF/(MTBF+MTTR)." },
        { heading: "Life data", body: "Early failures, constant useful life and wear-out require different responses." },
        { heading: "Reliability functions", body: "Exponential reliability falls as e^(-t/MTBF); series systems multiply reliability while redundancy improves it." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "edxbteceng-u10-lesson-10-2", code: "10-2",
      title: "Maintenance Strategies and Planning",
      goal: "I CAN compare maintenance strategies and plan maintenance using performance metrics.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — maintenance management",
        "Preventive, predictive and total productive maintenance",
      ],
      vocabulary: [
        { term: "Corrective maintenance", definition: "Maintenance performed after a failure to restore function." },
        { term: "Preventive maintenance", definition: "Scheduled maintenance performed before failure to reduce risk." },
        { term: "Predictive maintenance", definition: "Maintenance triggered by condition monitoring data indicating deterioration." },
        { term: "CMMS", definition: "Computerised maintenance management system for planning and recording maintenance." },
        { term: "TPM", definition: "Total productive maintenance: company-wide approach to maximise equipment effectiveness." },
        { term: "OEE", definition: "Overall equipment effectiveness = availability x performance x quality." },
      ],
      concepts: [
        {
          id: "edxbteceng-u10-10-2-str", title: "Maintenance strategies",
          skill: "Choose corrective, preventive, predictive or condition-based maintenance.",
          sections: [
            { heading: "Corrective versus preventive", body: "Corrective maintenance fixes failures after they occur. It is simple and avoids unnecessary work, but unplanned downtime can be costly. Preventive maintenance is scheduled by time, usage or cycles to prevent failures. It reduces unexpected breakdowns but can waste effort if components are replaced too early. The best interval balances failure risk against maintenance cost and downtime." },
            { heading: "Predictive and condition-based maintenance", body: "Predictive maintenance uses condition monitoring such as vibration, oil analysis, temperature or current to detect deterioration before failure. Condition-based maintenance performs work only when measured condition crosses a threshold. These methods suit expensive or critical assets where failure is costly. They require reliable sensors, trained personnel and clear action limits. A hybrid strategy is common: preventive tasks for routine items, predictive monitoring for critical rotating equipment and corrective repair for low-risk failures." },
          ],
          keyFormulas: [
            { name: "Maintenance strategy", statement: "choose method by criticality, cost, failure mode and detectability" },
            { name: "Condition threshold", statement: "maintenance when measured value exceeds action limit" },
            { name: "Preventive interval", statement: "based on time, cycles or usage" },
          ],
          workedExample: {
            problem: "A critical CNC spindle has expensive downtime. Should the plant use only calendar-based oil changes?",
            solution: "A better strategy combines scheduled lubrication checks with oil analysis and vibration monitoring. Oil changes are performed when analysis shows contamination or viscosity loss, reducing unnecessary maintenance while protecting the spindle.",
          },
          questions: [
            {
              id: "edxbteceng-u10-str-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which maintenance strategy performs work only after a failure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Corrective maintenance" }, { id: "b", text: "Preventive maintenance" }, { id: "c", text: "Predictive maintenance" }, { id: "d", text: "TPM" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Corrective maintenance", statement: "Repair after failure occurs." }],
                steps: [{ reasoning: "Corrective maintenance responds to a failure.", marks: 1, markCode: "M" }],
                finalAnswer: "Corrective maintenance",
              },
            },
            {
              id: "edxbteceng-u10-str-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A gearbox is serviced every 2000 operating hours. State the maintenance strategy and its basis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Preventive maintenance", statement: "Scheduled maintenance before failure based on time or usage." }],
                steps: [
                  { reasoning: "This is preventive maintenance.", marks: 1, markCode: "M" },
                  { reasoning: "The basis is operating hours, a usage-based interval.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Preventive maintenance based on usage.",
              },
            },
            {
              id: "edxbteceng-u10-str-q3", difficulty: "core", totalMarks: 3,
              stem: "Compare corrective and preventive maintenance for a conveyor drive motor.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Maintenance trade-off", statement: "Corrective avoids planned work but risks downtime; preventive reduces risk but may waste effort." }],
                steps: [
                  { reasoning: "Corrective waits for failure, so it is cheaper in labour but may cause unplanned downtime.", marks: 1, markCode: "M" },
                  { reasoning: "Preventive schedules service before failure, improving reliability but using resources earlier.", marks: 1, markCode: "M" },
                  { reasoning: "The choice depends on failure cost, detectability and maintenance cost.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Corrective = reactive; preventive = planned risk reduction.",
              },
            },
            {
              id: "edxbteceng-u10-str-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A plant must choose maintenance strategies for three assets.",
              parts: [
                { label: "a", prompt: "A cheap conveyor roller bearing that fails rarely. Suggest a strategy.", marks: 1 },
                { label: "b", prompt: "A critical CNC spindle with expensive downtime. Suggest a strategy.", marks: 2 },
                { label: "c", prompt: "A hydraulic pump showing slowly rising temperature. Suggest a strategy.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Strategy selection", statement: "Match strategy to criticality, cost and failure detectability." }],
                steps: [
                  { part: "a", reasoning: "Corrective or simple preventive replacement may be acceptable.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Predictive/condition-based monitoring plus preventive lubrication is justified by high downtime cost.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Condition-based monitoring with a temperature action limit is appropriate.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Low-risk asset: corrective/preventive; critical spindle: predictive; pump: condition-based.",
              },
            },
            {
              id: "edxbteceng-u10-str-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A motor bearing has vibration limits: alert at 4.5 mm/s and action at 7.1 mm/s.",
              parts: [
                { label: "a", prompt: "State what condition-based maintenance means.", marks: 2 },
                { label: "b", prompt: "State the action at 5.0 mm/s.", marks: 2 },
                { label: "c", prompt: "State the action at 8.0 mm/s.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Condition-based limits", statement: "Maintenance is triggered when measured condition crosses defined limits." }],
                steps: [
                  { part: "a", reasoning: "Maintenance is performed only when measured condition indicates deterioration.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "5.0 mm/s is above alert but below action, so increase monitoring and plan inspection.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "8.0 mm/s exceeds action limit, so schedule maintenance or replace the bearing promptly.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "CBM uses measured limits; 5 mm/s = monitor; 8 mm/s = act.",
              },
            },
            {
              id: "edxbteceng-u10-str-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A packaging line has frequent small stops and one critical robot cell.",
              parts: [
                { label: "a", prompt: "Suggest a strategy for the frequent small stops.", marks: 2 },
                { label: "b", prompt: "Suggest a strategy for the critical robot cell.", marks: 2 },
                { label: "c", prompt: "Explain why one strategy may not fit all assets.", marks: 2 },
                { label: "d", prompt: "State how maintenance data should be recorded.", marks: 2 },
                { label: "e", prompt: "Explain how strategy review should be triggered.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Maintenance portfolio", statement: "Use different strategies by asset criticality and failure mode." }],
                steps: [
                  { part: "a", reasoning: "Analyse failure data; use preventive checks or quick corrective fixes for low-criticality stops.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Use predictive monitoring and planned maintenance for the robot cell.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Cost, downtime, detectability and safety differ between assets.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Record date, asset, task, condition readings, parts and downtime in a CMMS.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Review after repeated failures, cost changes or new condition data.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Differentiate strategies by asset; record data in CMMS; review when performance changes.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u10-10-2-plan", title: "Maintenance planning and performance",
          skill: "Use CMMS, TPM and OEE to plan and improve maintenance.",
          sections: [
            { heading: "CMMS and planning", body: "A CMMS stores equipment records, maintenance schedules, work orders, spares and history. It helps plan preventive tasks, assign labour, track downtime and analyse failure trends. Good planning considers technician skills, spare parts, production windows and safety requirements. Maintenance windows should be scheduled to minimise production impact while keeping equipment within safe operating limits." },
            { heading: "TPM and OEE", body: "Total productive maintenance involves operators, maintainers and engineers in keeping equipment effective. Its goals include eliminating breakdowns, reducing defects and improving overall equipment effectiveness. OEE = availability x performance x quality. Availability is operating time divided by planned production time. Performance compares actual output with ideal output. Quality is the proportion of good parts. Each factor is expressed as a decimal or percentage, so OEE shows where losses occur." },
          ],
          keyFormulas: [
            { name: "OEE", statement: "OEE = availability x performance x quality" },
            { name: "Availability", statement: "availability = operating time / planned production time" },
            { name: "Performance", statement: "performance = actual output / ideal output" },
          ],
          workedExample: {
            problem: "A machine has availability 0.90, performance 0.95 and quality 0.98. Calculate OEE.",
            solution: "OEE = 0.90 x 0.95 x 0.98 = 0.8379, or 83.8 percent. The main losses are availability and performance.",
          },
          questions: [
            {
              id: "edxbteceng-u10-plan-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does CMMS stand for?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Computerised maintenance management system" }, { id: "b", text: "Continuous machine monitoring system" }, { id: "c", text: "Cost management and scheduling" }, { id: "d", text: "Condition monitoring management software" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "CMMS", statement: "System for planning and recording maintenance." }],
                steps: [{ reasoning: "CMMS = computerised maintenance management system.", marks: 1, markCode: "M" }],
                finalAnswer: "Computerised maintenance management system",
              },
            },
            {
              id: "edxbteceng-u10-plan-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A machine has availability 0.90, performance 0.95 and quality 0.98. Calculate OEE as a percentage to 1 decimal place.",
              response: { type: "numeric", parts: [{ label: "OEE", answer: 83.8, unit: "%" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "OEE", statement: "OEE = availability x performance x quality." }],
                steps: [
                  { reasoning: "OEE = 0.90 x 0.95 x 0.98.", marks: 1, markCode: "M" },
                  { reasoning: "OEE = 0.8379.", marks: 1, markCode: "M" },
                  { reasoning: "OEE = 83.8 percent.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "83.8%",
              },
            },
            {
              id: "edxbteceng-u10-plan-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain two benefits of total productive maintenance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "TPM", statement: "Company-wide approach to maximise equipment effectiveness." }],
                steps: [
                  { reasoning: "TPM reduces breakdowns and defects by involving operators in daily care.", marks: 1, markCode: "M" },
                  { reasoning: "It improves skills, communication and early detection of problems.", marks: 1, markCode: "M" },
                  { reasoning: "It supports higher OEE and more reliable production.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Fewer breakdowns/defects and better teamwork/reliability.",
              },
            },
            {
              id: "edxbteceng-u10-plan-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A machine is planned for 480 minutes. It runs 420 minutes, produces 800 parts against an ideal 900, and has 40 defective parts.",
              parts: [
                { label: "a", prompt: "Calculate availability as a decimal.", marks: 2 },
                { label: "b", prompt: "Calculate performance as a decimal.", marks: 1 },
                { label: "c", prompt: "Calculate quality as a decimal.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "OEE components", statement: "Availability, performance and quality are ratios of actual to ideal." }],
                steps: [
                  { part: "a", reasoning: "Availability = 420 / 480 = 0.875.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Performance = 800 / 900 = 0.889.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Good parts = 800 - 40 = 760; quality = 760 / 800 = 0.95.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Availability 0.875; performance 0.889; quality 0.95.",
              },
            },
            {
              id: "edxbteceng-u10-plan-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A plant wants to reduce unplanned downtime on a bottleneck machine.",
              parts: [
                { label: "a", prompt: "State two preventive maintenance tasks that could help.", marks: 2 },
                { label: "b", prompt: "State two spares-management improvements.", marks: 2 },
                { label: "c", prompt: "Explain how a CMMS supports the plan.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Downtime reduction", statement: "Prevent failures and shorten repair time." }],
                steps: [
                  { part: "a", reasoning: "Scheduled lubrication, belt inspection, filter changes or alignment checks.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Stock critical spares and track usage to avoid waiting for parts.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "CMMS schedules tasks, records history and identifies recurring failures.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Preventive tasks, spare control and CMMS scheduling reduce downtime.",
              },
            },
            {
              id: "edxbteceng-u10-plan-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A CNC cell has OEE about 68 percent. Availability is 0.80, performance 0.90 and quality 0.95.",
              parts: [
                { label: "a", prompt: "Verify the OEE calculation.", marks: 2 },
                { label: "b", prompt: "Identify the largest loss factor.", marks: 1 },
                { label: "c", prompt: "Suggest two actions to improve availability.", marks: 2 },
                { label: "d", prompt: "Suggest two actions to improve performance.", marks: 2 },
                { label: "e", prompt: "Explain why quality should be monitored even when it is high.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "OEE improvement", statement: "Target the lowest OEE factor with specific loss-reduction actions." }],
                steps: [
                  { part: "a", reasoning: "OEE = 0.80 x 0.90 x 0.95 = 0.684 = 68.4 percent.", marks: 2, markCode: "A" },
                  { part: "b", reasoning: "Availability 0.80 is the largest loss.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Reduce breakdowns with preventive maintenance and faster repairs with spares/training.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Reduce minor stops and optimise cycle parameters or tooling.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Small quality losses compound and may indicate tool wear or process drift.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "OEE = 68.4%; improve availability first, then performance; monitor quality for drift.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u10-str-notes", title: "Maintenance strategies and planning — notes",
      summary: "Choose strategy by criticality and detectability; plan work with CMMS and measure performance with OEE.",
      sections: [
        { heading: "Strategies", body: "Corrective repairs after failure; preventive schedules before failure; predictive/condition-based uses measured condition." },
        { heading: "Planning", body: "CMMS stores schedules, work orders, spares and history. Plan around production windows and safety." },
        { heading: "OEE", body: "OEE = availability x performance x quality; target the lowest factor to improve output." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "edxbteceng-u10-lesson-10-3", code: "10-3",
      title: "Fault Diagnosis and Condition Monitoring",
      goal: "I CAN use condition-monitoring data and structured analysis to diagnose faults.",
      standards: [
        "Pearson BTEC Level 3 National Engineering — condition monitoring and fault diagnosis",
        "Vibration, oil analysis, thermography and root-cause analysis",
      ],
      vocabulary: [
        { term: "Condition monitoring", definition: "Periodic measurement of equipment condition to detect deterioration." },
        { term: "Vibration analysis", definition: "Measurement of machine vibration to detect imbalance, misalignment or bearing faults." },
        { term: "Oil analysis", definition: "Testing lubricant for wear particles, contamination and viscosity change." },
        { term: "Thermography", definition: "Measurement of surface temperature using infrared imaging." },
        { term: "FMEA", definition: "Failure mode and effects analysis: systematic ranking of possible failures." },
        { term: "Root cause analysis", definition: "Structured investigation to identify the underlying cause of a failure." },
      ],
      concepts: [
        {
          id: "edxbteceng-u10-10-3-cond", title: "Condition monitoring techniques",
          skill: "Select monitoring techniques and interpret common fault indicators.",
          sections: [
            { heading: "Common monitoring methods", body: "Vibration analysis is effective for rotating equipment such as motors, pumps and gearboxes; bearing defects often appear as high-frequency peaks. Oil analysis detects wear metals, water, fuel dilution and viscosity loss in lubricated systems. Thermography finds hot spots in electrical connections, bearings and process equipment. Ultrasound detects leaks, arcing and early bearing noise. Each technique requires baseline data and clear alarm limits; readings must be interpreted in context rather than in isolation." },
            { heading: "Interpreting indicators", body: "A rising vibration trend may indicate bearing wear or looseness. A sudden temperature rise may indicate friction, blockage or electrical overload. Metal particles in oil suggest gear or bearing wear; coolant contamination suggests a seal leak. The monitoring system should combine measurements with operating conditions, maintenance history and visual inspection. Action limits should trigger investigation, not automatic replacement, unless the risk justifies it." },
          ],
          keyFormulas: [
            { name: "Condition trend", statement: "compare current value with baseline and alarm limits" },
            { name: "Vibration severity", statement: "rising amplitude or new frequencies indicate developing faults" },
            { name: "Oil wear", statement: "increasing wear metals indicate component degradation" },
          ],
          workedExample: {
            problem: "A pump bearing vibration rises from 2.0 mm/s to 5.5 mm/s over three weeks. Explain the likely meaning and action.",
            solution: "The rising trend suggests developing bearing or alignment fault. Inspect alignment and lubrication, increase monitoring frequency and plan maintenance if the action limit is reached.",
          },
          questions: [
            {
              id: "edxbteceng-u10-cond-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which technique is most suitable for detecting hot electrical connections?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Thermography" }, { id: "b", text: "Oil analysis" }, { id: "c", text: "Ultrasonic leak testing" }, { id: "d", text: "Dimensional gauging" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Thermography", statement: "Infrared imaging detects surface temperature differences." }],
                steps: [{ reasoning: "Hot spots indicate resistive or loose connections.", marks: 1, markCode: "M" }],
                finalAnswer: "Thermography",
              },
            },
            {
              id: "edxbteceng-u10-cond-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A bearing vibration reading rises from 2.5 mm/s to 4.0 mm/s. Calculate the percentage increase.",
              response: { type: "numeric", parts: [{ label: "increase", answer: 60, unit: "%" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Percentage change", statement: "Change percent = (new - old) / old x 100." }],
                steps: [
                  { reasoning: "Change = 4.0 - 2.5 = 1.5 mm/s.", marks: 1, markCode: "M" },
                  { reasoning: "Percent = 1.5 / 2.5 x 100 = 60%.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "60%",
              },
            },
            {
              id: "edxbteceng-u10-cond-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what oil analysis can reveal about a gearbox.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Oil analysis", statement: "Lubricant testing reveals wear, contamination and degradation." }],
                steps: [
                  { reasoning: "Wear metals indicate component degradation.", marks: 1, markCode: "M" },
                  { reasoning: "Water, fuel or particles indicate contamination or seal problems.", marks: 1, markCode: "M" },
                  { reasoning: "Viscosity change shows lubricant breakdown or wrong oil.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Wear, contamination and lubricant condition.",
              },
            },
            {
              id: "edxbteceng-u10-cond-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Match monitoring techniques to possible faults on a machine.",
              parts: [
                { label: "a", prompt: "Vibration analysis is best for which fault type?", marks: 1 },
                { label: "b", prompt: "Thermography is best for which fault type?", marks: 1 },
                { label: "c", prompt: "Oil analysis is best for which fault type?", marks: 1 },
                { label: "d", prompt: "Give one reason a single measurement should not trigger immediate replacement.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Technique matching", statement: "Choose the method that detects the relevant failure mechanism." }],
                steps: [
                  { part: "a", reasoning: "Rotating machinery faults such as imbalance, misalignment and bearing wear.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Electrical connections, friction and blocked cooling.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Gear/bearing wear and lubricant contamination in lubricated systems.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Readings can be affected by load, temperature or sensor error; trends and context are needed.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Vibration=rotating faults; thermography=heat; oil=wear/contamination; confirm with trend/context.",
              },
            },
            {
              id: "edxbteceng-u10-cond-q5", difficulty: "challenge", totalMarks: 6,
              stem: "An ultrasonic leak detector and an infrared camera are available in a plant.",
              parts: [
                { label: "a", prompt: "State a fault the ultrasonic detector could find.", marks: 1 },
                { label: "b", prompt: "State a fault the infrared camera could find.", marks: 1 },
                { label: "c", prompt: "Explain why baseline readings are important.", marks: 2 },
                { label: "d", prompt: "Explain how alarm limits should be set.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Condition monitoring setup", statement: "Baselines and limits make measurements meaningful." }],
                steps: [
                  { part: "a", reasoning: "Compressed air or vacuum leaks, electrical arcing or bearing noise.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Overheated connections, motors, bearings or process equipment.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Baselines show normal condition for comparison under similar load.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Set limits from manufacturer data, historical performance and risk.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Ultrasound finds leaks/arcing; IR finds hot spots; use baselines and justified limits.",
              },
            },
            {
              id: "edxbteceng-u10-cond-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A critical pump has monthly vibration and quarterly oil analysis.",
              parts: [
                { label: "a", prompt: "State why vibration is measured monthly.", marks: 2 },
                { label: "b", prompt: "State what oil analysis adds to vibration data.", marks: 2 },
                { label: "c", prompt: "Explain the role of operating load in interpretation.", marks: 2 },
                { label: "d", prompt: "Describe the action process when a limit is exceeded.", marks: 2 },
                { label: "e", prompt: "Explain why records should be kept for several years.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Condition monitoring program", statement: "Combine techniques, context and trend records." }],
                steps: [
                  { part: "a", reasoning: "Monthly checks detect developing rotating faults before failure.", marks: 2, markCode: "R" },
                  { part: "b", reasoning: "Oil analysis detects internal wear and contamination not visible externally.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Load and speed affect vibration and temperature, so comparisons must be like-for-like.", marks: 2, markCode: "R" },
                  { part: "d", reasoning: "Verify measurement, inspect visually, check maintenance history and plan corrective action.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Long-term trends reveal degradation rates and support maintenance decisions.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Use vibration plus oil analysis; interpret under similar load; act on verified trends; keep history.",
              },
            },
          ],
        },
        {
          id: "edxbteceng-u10-10-3-rca", title: "Root cause analysis and FMEA",
          skill: "Use FMEA and structured analysis to find and prevent failure causes.",
          sections: [
            { heading: "Failure mode and effects analysis", body: "FMEA systematically lists possible failure modes for a component or process, their effects, causes and current controls. Each failure mode is ranked, often by risk priority number RPN = severity x occurrence x detection. High RPN items receive design or process changes, inspections or controls. FMEA is proactive: it is used before failures occur to reduce risk. It should be updated when designs, materials or processes change." },
            { heading: "Root cause analysis", body: "Root cause analysis investigates actual failures to find why they happened, not just what failed. Methods include the 5 Whys, fault trees, fishbone diagrams and timeline analysis. A good root cause is specific, verifiable and actionable; 'operator error' is usually too vague unless the system allowed the error. Corrective actions should eliminate or control the cause, and preventive actions should stop recurrence in similar equipment." },
          ],
          keyFormulas: [
            { name: "RPN", statement: "RPN = severity x occurrence x detection" },
            { name: "5 Whys", statement: "ask why repeatedly until the underlying cause is found" },
            { name: "Corrective action", statement: "eliminate or control the verified root cause" },
          ],
          workedExample: {
            problem: "A pump seal fails repeatedly. RPN uses severity 8, occurrence 4 and detection 3. Calculate RPN and state the likely action.",
            solution: "RPN = 8 x 4 x 3 = 96. This is relatively high, so investigate the seal failure mode, improve detection or design out the cause.",
          },
          questions: [
            {
              id: "edxbteceng-u10-rca-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What does FMEA stand for?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Failure mode and effects analysis" }, { id: "b", text: "Fault monitoring and equipment assessment" }, { id: "c", text: "Final maintenance evaluation analysis" }, { id: "d", text: "Factory maintenance error audit" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "FMEA", statement: "Failure mode and effects analysis ranks possible failures." }],
                steps: [{ reasoning: "FMEA identifies failure modes and their effects.", marks: 1, markCode: "M" }],
                finalAnswer: "Failure mode and effects analysis",
              },
            },
            {
              id: "edxbteceng-u10-rca-q2", difficulty: "foundation", totalMarks: 2,
              stem: "An FMEA gives severity 7, occurrence 3 and detection 4. Calculate the RPN.",
              response: { type: "numeric", parts: [{ label: "RPN", answer: 84 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "RPN", statement: "RPN = severity x occurrence x detection." }],
                steps: [
                  { reasoning: "RPN = 7 x 3 x 4.", marks: 1, markCode: "M" },
                  { reasoning: "RPN = 84.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "84",
              },
            },
            {
              id: "edxbteceng-u10-rca-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the purpose of the 5 Whys technique in root cause analysis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "5 Whys", statement: "Repeated questioning reveals underlying causes." }],
                steps: [
                  { reasoning: "Each 'why' moves from symptom to cause.", marks: 1, markCode: "M" },
                  { reasoning: "It avoids stopping at superficial explanations.", marks: 1, markCode: "M" },
                  { reasoning: "The final cause should be specific and actionable.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Repeatedly ask why to reach the underlying cause.",
              },
            },
            {
              id: "edxbteceng-u10-rca-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A conveyor motor overheats every afternoon.",
              parts: [
                { label: "a", prompt: "Give two possible root causes.", marks: 2 },
                { label: "b", prompt: "State one measurement that could confirm a cause.", marks: 1 },
                { label: "c", prompt: "Explain why 'operator error' may be an inadequate root cause.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Root cause analysis", statement: "Identify underlying causes and verify them with evidence." }],
                steps: [
                  { part: "a", reasoning: "Blocked cooling, high ambient temperature, overload or failing bearings.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Measure current draw, bearing temperature or airflow.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "It may hide system factors such as poor training, faulty sensor or unrealistic procedure.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Possible causes: cooling, load, bearings; verify with measurements; operator error needs deeper analysis.",
              },
            },
            {
              id: "edxbteceng-u10-rca-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A gearbox oil change interval is being reviewed after repeated failures.",
              parts: [
                { label: "a", prompt: "State three items an FMEA would list for the gearbox.", marks: 2 },
                { label: "b", prompt: "Explain how severity, occurrence and detection differ.", marks: 2 },
                { label: "c", prompt: "State one action that could reduce occurrence.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "FMEA application", statement: "Rank failure modes by effect, likelihood and detectability." }],
                steps: [
                  { part: "a", reasoning: "Failure modes: bearing wear, seal leak, gear tooth fracture; effects: downtime, contamination, noise.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Severity = effect seriousness; occurrence = likelihood; detection = chance of catching before failure.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Improve lubrication quality, reduce contamination or redesign the weak component.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "List modes/effects; understand S/O/D; reduce occurrence through design or process control.",
              },
            },
            {
              id: "edxbteceng-u10-rca-q6", difficulty: "challenge", totalMarks: 9,
              stem: "A hydraulic press leaks oil and loses pressure during the afternoon shift.",
              parts: [
                { label: "a", prompt: "List the immediate evidence to collect.", marks: 2 },
                { label: "b", prompt: "Use the 5 Whys to move from symptom to possible cause.", marks: 3 },
                { label: "c", prompt: "State one test to verify the suspected cause.", marks: 2 },
                { label: "d", prompt: "Distinguish corrective from preventive action.", marks: 1 },
                { label: "e", prompt: "Explain why similar machines should be checked.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Failure investigation", statement: "Collect evidence, ask why, verify cause and prevent recurrence." }],
                steps: [
                  { part: "a", reasoning: "Leak location, pressure readings, temperature, recent maintenance and oil condition.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Why pressure loss? Low fluid. Why low? Leak. Why leak? Worn seal. Why worn? Contamination or misalignment. Why that? Poor filtration/installation.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Pressure-test the system or inspect the seal and fluid contamination.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Corrective fixes this press; preventive improves filtration/procedure for all similar presses.", marks: 1, markCode: "R" },
                  { part: "e", reasoning: "The same cause may affect other machines with shared design or maintenance practice.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Collect evidence, trace cause with 5 Whys, verify, correct and prevent on similar machines.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbteceng-u10-rca-notes", title: "Condition monitoring and RCA — notes",
      summary: "Use the right monitoring method, verify trends and find root causes with FMEA and structured analysis.",
      sections: [
        { heading: "Monitoring", body: "Vibration for rotating faults, oil analysis for wear/contamination, thermography for heat, ultrasound for leaks/arcing." },
        { heading: "Trends and limits", body: "Baselines and alarm limits make readings meaningful; confirm single readings with context before acting." },
        { heading: "RCA and FMEA", body: "FMEA ranks possible failures; 5 Whys and evidence-based investigation find underlying causes and preventive actions." },
      ],
    },
  },
];
