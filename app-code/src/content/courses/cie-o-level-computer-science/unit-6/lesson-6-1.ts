import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olcs-u6-lesson-6-1",
  code: "6-1",
  title: "Automated Systems",
  goal: "I CAN explain how sensors, processors and actuators create automated systems and evaluate their pros and cons.",
  standards: ["2210 6.1.1", "2210 6.1.2"],
  vocabulary: [
    { term: "Automation", definition: "A process performed by machines/computers with little or no human input." },
    { term: "Automated system", definition: "System using sensors, processors and actuators to monitor and control a process." },
    { term: "Feedback", definition: "Using output information to adjust the process — keeps systems at a set point." },
    { term: "Open-loop system", definition: "Control without feedback — runs a set sequence regardless of results." },
    { term: "Closed-loop system", definition: "Control with feedback — adjusts based on measured output." },
  ],
  concepts: [
    {
      id: "olcs-u6-automation",
      title: "Automated systems and feedback",
      skill: "Describe automated control and distinguish open-loop from closed-loop systems.",
      lesson: {
        sections: [
          { heading: "Components", body: "An automated system combines:\n\n- **Sensors** — measure the environment/process.\n- **Processor/microcontroller** — compares readings to targets and decides actions.\n- **Actuators** — carry out physical actions (motors, valves, heaters).\n\nLoop: sense → process → act → sense again." },
          { heading: "Open vs closed loop", body: "- **Open-loop**: no feedback — e.g. a timer-controlled sprinkler runs for a set time regardless of soil moisture. Simple but can't correct errors.\n- **Closed-loop**: uses feedback — e.g. a thermostat reads temperature and switches the heater on/off to maintain a set point. More accurate but more complex." },
          { heading: "Examples", body: "Washing machines, traffic lights, production lines, central heating, greenhouse control, self-driving components." },
        ],
        keyFormulas: [
          { name: "Loop", statement: "Sense → Process → Act → feedback" },
        ],
        workedExample: {
          problem: "Is a washing machine's spin cycle open-loop or closed-loop? Explain.",
          solution: "Often open-loop for the timer, but load sensors can make parts closed-loop by adjusting water/time based on measured load.",
        },
      },
      questions: [
        {
          id: "olcs-u6-au-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A closed-loop system differs from open-loop because it uses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No sensors" },
            { id: "b", text: "More wires" },
            { id: "c", text: "Feedback to adjust the process" },
            { id: "d", text: "A bigger computer" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Closed-loop", statement: "Uses feedback." }], steps: [{ reasoning: "Closed-loop = feedback.", working: "\\text{feedback}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Feedback" },
        },
        {
          id: "olcs-u6-au-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the three components of an automated system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Automation components", statement: "Sensor, processor, actuator." }], steps: [
            { reasoning: "Correct components.", working: "\\text{sensor-processor-actuator}", marks: 1, markCode: "M" },
            { reasoning: "All three named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sensors, processor, actuators." },
        },
        {
          id: "olcs-u6-au-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a closed-loop system is more accurate than an open-loop one.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Feedback accuracy", statement: "Measures and corrects output." }], steps: [
            { reasoning: "Open-loop can't detect errors.", working: "\\text{no check}", marks: 1, markCode: "M" },
            { reasoning: "Closed-loop measures actual output.", working: "\\text{measure}", marks: 1, markCode: "M" },
            { reasoning: "Adjusts input to reach set point.", working: "\\text{adjust}", marks: 1, markCode: "M" },
            { reasoning: "Maintains consistent results.", marks: 1, markCode: "A" },
          ], finalAnswer: "Feedback lets it measure and correct output, maintaining a set point." },
        },
        {
          id: "olcs-u6-au-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Automated systems review.",
          parts: [
            { label: "a", prompt: "List the three components of an automated system.", marks: 2 },
            { label: "b", prompt: "Distinguish open-loop from closed-loop.", marks: 3 },
            { label: "c", prompt: "Give an example of a closed-loop system.", marks: 2 },
            { label: "d", prompt: "Explain the sense-process-act loop.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Feedback loop", statement: "Measure → decide → act → repeat." },
          ], steps: [
            { part: "a", reasoning: "Sensors/processor/actuators.", working: "\\text{3 parts}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Open-loop: no feedback.", working: "\\text{open}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Closed-loop: uses feedback.", working: "\\text{closed}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Closed is more accurate.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Thermostat/greenhouse.", working: "\\text{thermostat}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Sensors measure environment.", working: "\\text{sense}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Processor decides, actuator acts, loop repeats.", working: "\\text{act}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sensor/processor/actuator (b) no vs feedback (c) thermostat (d) sense→process→act" },
        },
        {
          id: "olcs-u6-au-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An actuator's job in an automated system is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Measure temperature" },
            { id: "b", text: "Display text" },
            { id: "c", text: "Store data" },
            { id: "d", text: "Produce physical movement or action" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Converts signals into physical action." }], steps: [{ reasoning: "Actuators carry out physical actions.", working: "\\text{act}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Produce physical action" },
        },
        {
          id: "olcs-u6-au-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many main components make up an automated system: sensors, processor, actuators?",
          response: { type: "numeric", parts: [{ label: "Number of components", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Components", statement: "Sensor, processor, actuator." }], steps: [
            { reasoning: "Three components named.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u6-au-q7", difficulty: "core", totalMarks: 1,
          stem: "An open-loop system…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot repeat actions" },
            { id: "b", text: "Runs a set sequence without feedback" },
            { id: "c", text: "Needs no sensors" },
            { id: "d", text: "Always uses feedback" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Open-loop", statement: "No feedback control." }], steps: [{ reasoning: "Open-loop runs blind, no feedback.", working: "\\text{no feedback}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Runs without feedback" },
        },
        {
          id: "olcs-u6-au-q8", difficulty: "core", totalMarks: 1,
          stem: "How many components must a closed-loop automated system have: sensors, processor, actuators?",
          response: { type: "numeric", parts: [{ label: "Number of components", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Components", statement: "Sensor, processor, actuator." }], steps: [
            { reasoning: "Same three components; feedback uses the sensors.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u6-au-q9", difficulty: "core", totalMarks: 1,
          stem: "A central heating thermostat that switches the heater on and off is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Manual control only" },
            { id: "b", text: "Closed-loop control" },
            { id: "c", text: "Artificial intelligence" },
            { id: "d", text: "Open-loop control" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Thermostat", statement: "Feedback maintains set point." }], steps: [{ reasoning: "Thermostat uses feedback → closed-loop.", working: "\\text{feedback}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Closed-loop control" },
        },
        {
          id: "olcs-u6-au-q10", difficulty: "core", totalMarks: 2,
          stem: "Give one example of an open-loop system and one of a closed-loop system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Examples", statement: "Open: timer systems; closed: thermostat." }], steps: [
            { reasoning: "Open-loop: timer sprinkler, washing machine timer.", working: "\\text{timer}", marks: 1, markCode: "M" },
            { reasoning: "Closed-loop: thermostat, greenhouse control.", working: "\\text{thermostat}", marks: 1, markCode: "A" },
          ], finalAnswer: "Open: timer sprinkler; closed: thermostat." },
        },
        {
          id: "olcs-u6-au-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Closed-loop systems are more accurate than open-loop systems because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They use more power" },
            { id: "b", text: "They need no sensors" },
            { id: "c", text: "Feedback lets them measure and correct output" },
            { id: "d", text: "They are cheaper" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Feedback", statement: "Measures and corrects output." }], steps: [{ reasoning: "Feedback corrects deviations.", working: "\\text{correct}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Feedback corrects output" },
        },
        {
          id: "olcs-u6-au-q12", difficulty: "core", totalMarks: 1,
          stem: "A closed-loop system needs feedback to work. How many essential feedback connections are required?",
          response: { type: "numeric", parts: [{ label: "Feedback connections", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Feedback", statement: "At least one feedback path." }], steps: [
            { reasoning: "One feedback path from sensor back to processor.", working: "1", marks: 1, markCode: "B" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u6-au-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a timer-controlled sprinkler is open-loop, and what change would make it closed-loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Open vs closed", statement: "Feedback determines the type." }], steps: [
            { reasoning: "Timer runs a fixed time regardless of conditions.", working: "\\text{fixed}", marks: 1, markCode: "M" },
            { reasoning: "No measurement of soil moisture.", working: "\\text{no measure}", marks: 1, markCode: "M" },
            { reasoning: "Add a soil moisture sensor feeding back to the controller.", working: "\\text{sensor}", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Timer runs blind (open-loop); adding a soil-moisture sensor creates feedback (closed-loop)." },
        },
        {
          id: "olcs-u6-au-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The biggest drawback of open-loop control is that it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Costs too much" },
            { id: "b", text: "Needs the internet" },
            { id: "c", text: "Is too slow" },
            { id: "d", text: "Cannot detect or correct errors" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Open-loop limit", statement: "No error correction." }], steps: [{ reasoning: "Without feedback, errors go uncorrected.", working: "\\text{no check}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cannot correct errors" },
        },
        {
          id: "olcs-u6-au-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many main components an automated system needs and how many examples of automated systems the lesson lists.",
          response: { type: "numeric", parts: [
            { label: "Components", answer: 3 },
            { label: "Examples listed", answer: 6 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Automation", statement: "3 components; 6 examples." }], steps: [
            { reasoning: "Sensor, processor, actuator.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Washing machine, traffic lights, production line, heating, greenhouse, self-driving.", working: "6", marks: 1, markCode: "A" },
          ], finalAnswer: "3 components; 6 examples" },
        },
        {
          id: "olcs-u6-au-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Automated systems review.",
          parts: [
            { label: "a", prompt: "List the three components of an automated system.", marks: 2 },
            { label: "b", prompt: "Distinguish open-loop from closed-loop.", marks: 3 },
            { label: "c", prompt: "Give an example of a closed-loop system.", marks: 2 },
            { label: "d", prompt: "Explain the sense-process-act loop.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Feedback loop", statement: "Measure → decide → act → repeat." },
          ], steps: [
            { part: "a", reasoning: "Sensors/processor/actuators.", working: "\\text{3 parts}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Open-loop: no feedback.", working: "\\text{open}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Closed-loop: uses feedback.", working: "\\text{closed}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Closed is more accurate.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Thermostat/greenhouse.", working: "\\text{thermostat}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Sensors measure; processor decides; actuator acts.", working: "\\text{loop}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Repeats continuously.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 parts (b) no vs feedback (c) thermostat (d) sense→process→act" },
        },
      ],
    },
    {
      id: "olcs-u6-proscons",
      title: "Pros and cons of automation",
      skill: "Evaluate the benefits and drawbacks of automated systems for workers and society.",
      lesson: {
        sections: [
          { heading: "Advantages", body: "- **Consistency**: machines don't tire — uniform quality.\n- **Speed/efficiency**: faster than humans, 24/7 operation.\n- **Safety**: removes humans from dangerous environments (welding, bomb disposal, deep sea).\n- **Precision**: repeatable accuracy beyond human ability.\n- **Cost**: lower long-term labour costs." },
          { heading: "Disadvantages", body: "- **Job losses**: routine tasks automated → unemployment, need for reskilling.\n- **Cost**: high initial investment in hardware/software.\n- **Reliability**: system failures can halt production entirely.\n- **Lack of judgement**: can't handle unexpected situations well.\n- **Maintenance**: needs specialist technicians." },
          { heading: "Evaluation", body: "Automation is best where tasks are repetitive, dangerous or precision-critical; human judgement remains valuable for complex, creative or unpredictable work." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Should a car factory automate welding? Give one advantage and one disadvantage.",
          solution: "Advantage: consistent, safe, fast welding. Disadvantage: high setup cost and job losses for welders.",
        },
      },
      questions: [
        {
          id: "olcs-u6-pc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is an advantage of automation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Handles any situation" },
            { id: "b", text: "Always needs no maintenance" },
            { id: "c", text: "Never fails" },
            { id: "d", text: "Consistent quality" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Automation pros", statement: "Consistency, speed, safety." }], steps: [{ reasoning: "Automation gives consistency.", working: "\\text{consistent}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Consistent quality" },
        },
        {
          id: "olcs-u6-pc-q2", difficulty: "core", totalMarks: 2,
          stem: "State one disadvantage of automation for workers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Automation cons", statement: "Job losses, cost, rigidity." }], steps: [
            { reasoning: "Job losses for routine tasks.", working: "\\text{job losses}", marks: 1, markCode: "M" },
            { reasoning: "Correct disadvantage.", marks: 1, markCode: "A" },
          ], finalAnswer: "Job losses / high cost / lack of judgement." },
        },
        {
          id: "olcs-u6-pc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why automation is particularly suitable for dangerous tasks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Safety", statement: "Machines replace humans in hazards." }], steps: [
            { reasoning: "Removes humans from danger.", working: "\\text{no human risk}", marks: 1, markCode: "M" },
            { reasoning: "Machines can work in toxic/extreme environments.", working: "\\text{extreme env}", marks: 1, markCode: "M" },
            { reasoning: "Examples: bomb disposal, deep sea, welding.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Automation performs hazardous tasks without risking human life or health." },
        },
        {
          id: "olcs-u6-pc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Automation evaluation review.",
          parts: [
            { label: "a", prompt: "State two advantages of automation.", marks: 2 },
            { label: "b", prompt: "State two disadvantages.", marks: 2 },
            { label: "c", prompt: "Give an example where automation is clearly beneficial.", marks: 2 },
            { label: "d", prompt: "Give an example where human work is preferable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Human vs machine", statement: "Machines: repetitive/precise; humans: judgement/creativity." },
          ], steps: [
            { part: "a", reasoning: "Consistency/speed/safety.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second advantage.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Job losses/cost.", working: "\\text{cons}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second disadvantage.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dangerous/precision task.", working: "\\text{danger}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Creative/judgement task.", working: "\\text{creative}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Humans handle unpredictability/empathy.", working: "\\text{unpredictable}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid example.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) consistency/safety (b) jobs/cost (c) dangerous task (d) creative/judgement task" },
        },
        {
          id: "olcs-u6-pc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which is a disadvantage of automation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Job losses for routine tasks" },
            { id: "b", text: "24/7 operation" },
            { id: "c", text: "High precision" },
            { id: "d", text: "Consistent quality" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Automation cons", statement: "Job losses, cost, rigidity." }], steps: [{ reasoning: "Job losses are a disadvantage.", working: "\\text{jobs}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Job losses" },
        },
        {
          id: "olcs-u6-pc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many advantages of automation are listed: consistency, speed, safety, precision, cost?",
          response: { type: "numeric", parts: [{ label: "Number of advantages", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Advantages", statement: "Five listed." }], steps: [
            { reasoning: "Five advantages named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u6-pc-q7", difficulty: "core", totalMarks: 1,
          stem: "Automation is most suitable for tasks that are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unpredictable" },
            { id: "b", text: "Creative" },
            { id: "c", text: "Repetitive and precision-critical" },
            { id: "d", text: "Socially interactive" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Suitability", statement: "Machines suit repetitive, precise work." }], steps: [{ reasoning: "Repetitive/precise tasks suit automation.", working: "\\text{repetitive}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Repetitive and precision-critical" },
        },
        {
          id: "olcs-u6-pc-q8", difficulty: "core", totalMarks: 1,
          stem: "An automated production line can operate 24 hours a day. How many hours per day does it run?",
          response: { type: "numeric", parts: [{ label: "Hours per day", answer: 24 }] },
          markscheme: { principles: [{ kind: "principle", name: "24/7 operation", statement: "Machines don't need rest." }], steps: [
            { reasoning: "24 hours per day.", working: "24", marks: 1, markCode: "B" },
          ], finalAnswer: "24" },
        },
        {
          id: "olcs-u6-pc-q9", difficulty: "core", totalMarks: 1,
          stem: "A key disadvantage of automation for workers is that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Machines never tire" },
            { id: "b", text: "Error rates fall" },
            { id: "c", text: "Output is faster" },
            { id: "d", text: "Routine jobs may be replaced" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Job losses", statement: "Routine tasks get automated." }], steps: [{ reasoning: "Workers lose routine jobs.", working: "\\text{jobs}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Routine jobs may be replaced" },
        },
        {
          id: "olcs-u6-pc-q10", difficulty: "core", totalMarks: 2,
          stem: "State one advantage and one disadvantage of automation for society.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade-offs", statement: "Efficiency vs jobs/cost." }], steps: [
            { reasoning: "Advantage: consistency/speed/safety.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { reasoning: "Disadvantage: job losses/high cost.", working: "\\text{cons}", marks: 1, markCode: "A" },
          ], finalAnswer: "Advantage: efficiency/safety; disadvantage: job losses/cost." },
        },
        {
          id: "olcs-u6-pc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A company might regret investing in full automation because of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Workers working too fast" },
            { id: "b", text: "Machines being too accurate" },
            { id: "c", text: "Products selling too well" },
            { id: "d", text: "High initial cost and ongoing maintenance" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Costs", statement: "High setup and maintenance." }], steps: [{ reasoning: "Automation is expensive to buy and maintain.", working: "\\text{cost}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** High cost and maintenance" },
        },
        {
          id: "olcs-u6-pc-q12", difficulty: "core", totalMarks: 1,
          stem: "Automation saves 2 hours of labour per unit on a line producing 50 units. How many labour hours are saved?",
          response: { type: "numeric", parts: [{ label: "Hours saved", answer: 100 }] },
          markscheme: { principles: [{ kind: "principle", name: "Efficiency", statement: "Savings scale with output." }], steps: [
            { reasoning: "2 × 50 = 100 hours.", working: "100", marks: 1, markCode: "B" },
          ], finalAnswer: "100" },
        },
        {
          id: "olcs-u6-pc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate whether a hospital pharmacy should automate medicine dispensing.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Evaluation", statement: "Weigh pros against cons." }], steps: [
            { reasoning: "Pros: accuracy, speed, safety (no human error).", working: "\\text{pros}", marks: 1, markCode: "M" },
            { reasoning: "Cons: high cost, maintenance, job losses.", working: "\\text{cons}", marks: 1, markCode: "M" },
            { reasoning: "Human judgement needed for unusual cases.", working: "\\text{judgement}", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "Automation gives accuracy and speed but costs money and removes jobs; a balanced or hybrid approach may suit a pharmacy." },
        },
        {
          id: "olcs-u6-pc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Human workers remain preferable for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Welding" },
            { id: "b", text: "Spray painting" },
            { id: "c", text: "Tasks needing judgement, creativity or empathy" },
            { id: "d", text: "Assembly lines" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Human strengths", statement: "Judgement and creativity." }], steps: [{ reasoning: "Humans excel at judgement/empathy.", working: "\\text{judgement}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Tasks needing judgement/creativity" },
        },
        {
          id: "olcs-u6-pc-q15", difficulty: "core", totalMarks: 2,
          stem: "Count the advantages and disadvantages of automation described in this lesson.",
          response: { type: "numeric", parts: [
            { label: "Advantages", answer: 5 },
            { label: "Disadvantages", answer: 5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Trade-offs", statement: "5 pros and 5 cons listed." }], steps: [
            { reasoning: "Consistency, speed, safety, precision, cost.", working: "5", marks: 1, markCode: "M" },
            { reasoning: "Job losses, cost, reliability, judgement, maintenance.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "5 advantages; 5 disadvantages" },
        },
        {
          id: "olcs-u6-pc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Automation evaluation review.",
          parts: [
            { label: "a", prompt: "State two advantages of automation.", marks: 2 },
            { label: "b", prompt: "State two disadvantages.", marks: 2 },
            { label: "c", prompt: "Give an example where automation is clearly beneficial.", marks: 2 },
            { label: "d", prompt: "Give an example where human work is preferable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Human vs machine", statement: "Machines: repetitive/precise; humans: judgement/creativity." },
          ], steps: [
            { part: "a", reasoning: "Consistency/speed/safety.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second advantage.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Job losses/cost.", working: "\\text{cons}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second disadvantage.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dangerous/precision task.", working: "\\text{danger}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Creative/judgement task.", working: "\\text{creative}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Humans handle unpredictability/empathy.", working: "\\text{unpredictable}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid example.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) pros (b) cons (c) dangerous task (d) creative task" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u6-6-1-notes", title: "Automated systems — notes", summary: "Sensor-processor-actuator loop, open vs closed loop, pros/cons.",
      sections: [
        { heading: "Loop", body: "Sense → Process → Act. Closed-loop uses feedback for accuracy; open-loop runs blind." },
        { heading: "Evaluation", body: "Pros: consistency, speed, safety, precision. Cons: job losses, cost, rigidity." },
      ] },
  ],
};
