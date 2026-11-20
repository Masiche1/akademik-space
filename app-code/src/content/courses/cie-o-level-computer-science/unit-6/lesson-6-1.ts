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
            { id: "a", text: "Feedback to adjust the process" }, { id: "b", text: "More wires" }, { id: "c", text: "A bigger computer" }, { id: "d", text: "No sensors" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Consistent quality" }, { id: "b", text: "Always needs no maintenance" }, { id: "c", text: "Never fails" }, { id: "d", text: "Handles any situation" },
          ], correctChoiceId: "a" },
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
