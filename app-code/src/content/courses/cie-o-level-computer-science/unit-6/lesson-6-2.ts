import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olcs-u6-lesson-6-2",
  code: "6-2",
  title: "Robotics",
  goal: "I CAN describe what makes a robot and evaluate the roles robots play and their pros and cons.",
  standards: ["2210 6.2.1", "2210 6.2.2", "2210 6.2.3"],
  vocabulary: [
    { term: "Robot", definition: "A reprogrammable machine that senses, processes and acts in the physical world." },
    { term: "Actuator", definition: "Component converting signals into physical movement — motors, pistons." },
    { term: "End effector", definition: "The 'hand' or tool at the end of a robot arm (gripper, welder, camera)." },
    { term: "Degrees of freedom", definition: "Independent movements a robot joint can make — more = more flexible." },
    { term: "Industrial robot", definition: "Robot used in manufacturing — welding, assembly, painting." },
    { term: "Autonomous robot", definition: "Robot that operates independently using sensors and AI to navigate." },
  ],
  concepts: [
    {
      id: "olcs-u6-robot-basics",
      title: "What makes a robot",
      skill: "Describe the components and characteristics of a robot.",
      lesson: {
        sections: [
          { heading: "Defining characteristics", body: "A robot typically has:\n\n- **Sensors**: to perceive the environment.\n- **Processor/controller**: to decide actions.\n- **Actuators/motors**: to move physically.\n- **End effector**: gripper, arm, wheel, tool.\n- **Power source**: battery or mains.\n\nKey traits: reprogrammable, can sense and act, often automated." },
          { heading: "Degrees of freedom", body: "Each independent joint movement = one degree of freedom. A human arm has ~7; industrial arms typically 4-6. More freedom = more dexterity but harder control." },
          { heading: "Types", body: "- **Industrial/manipulator**: fixed arms in factories.\n- **Mobile**: wheels/tracks/legs (AGVs, drones).\n- **Service/domestic**: vacuum robots, delivery bots.\n- **Autonomous**: self-navigating using sensors+AI (self-driving cars, exploration robots)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the components a warehouse robot needs to pick and move boxes.",
          solution: "Sensors (cameras/LiDAR to see), processor (plan path), actuators (wheels/arm motors), gripper (end effector), battery (power).",
        },
      },
      questions: [
        {
          id: "olcs-u6-rb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which component converts signals into physical movement in a robot?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Actuator" }, { id: "b", text: "Sensor" }, { id: "c", text: "Battery" }, { id: "d", text: "Camera" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Signal → movement." }], steps: [{ reasoning: "Actuators move robots.", working: "\\text{actuator}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Actuator" },
        },
        {
          id: "olcs-u6-rb-q2", difficulty: "core", totalMarks: 2,
          stem: "State two characteristics that define a robot.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Robot traits", statement: "Sense, process, act; reprogrammable." }], steps: [
            { reasoning: "Senses environment / acts physically.", working: "\\text{sense+act}", marks: 1, markCode: "M" },
            { reasoning: "Reprogrammable / automated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Senses and acts in the physical world; reprogrammable." },
        },
        {
          id: "olcs-u6-rb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the role of the end effector in an industrial robot arm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "End effector", statement: "Tool at arm's end doing the task." }], steps: [
            { reasoning: "It's the working tool (gripper, welder, painter).", working: "\\text{tool}", marks: 1, markCode: "M" },
            { reasoning: "Determines what task the robot can do.", working: "\\text{task}", marks: 1, markCode: "M" },
            { reasoning: "Interchangeable for different jobs.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The end effector is the tool that performs the task — gripper, welder, spray gun — and can be swapped." },
        },
        {
          id: "olcs-u6-rb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Robotics review.",
          parts: [
            { label: "a", prompt: "List three components of a robot.", marks: 3 },
            { label: "b", prompt: "Define degrees of freedom.", marks: 2 },
            { label: "c", prompt: "Distinguish industrial from autonomous robots.", marks: 2 },
            { label: "d", prompt: "State the role of sensors in a robot.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "DOF", statement: "Independent joint movements." },
          ], steps: [
            { part: "a", reasoning: "Sensors/processor/actuators.", working: "\\text{components}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second component.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Third component.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Independent movements a joint can make.", working: "\\text{movements}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "More = more flexible.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Industrial: fixed factory arms.", working: "\\text{fixed}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Autonomous: self-navigating.", working: "\\text{autonomous}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Perceive environment for navigation/decisions.", working: "\\text{perceive}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Feed data to processor.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sensors/processor/actuators (b) joint movements (c) fixed vs self-navigating (d) perceive environment" },
        },
      ],
    },
    {
      id: "olcs-u6-robot-roles",
      title: "Roles and impact of robots",
      skill: "Evaluate where robots are used and their benefits and drawbacks.",
      lesson: {
        sections: [
          { heading: "Where robots are used", body: "- **Manufacturing**: welding, assembly, painting, packing — precision and speed.\n- **Healthcare**: surgical robots, prosthetics, drug dispensing.\n- **Logistics**: warehouse picking, delivery drones/robots.\n- **Exploration**: space probes, deep-sea robots, disaster search.\n- **Domestic**: vacuum robots, lawn mowers, companions.\n- **Agriculture**: harvesting, milking, spraying." },
          { heading: "Advantages", body: "Consistency, 24/7 operation, precision beyond humans, safety in hazardous environments, no fatigue." },
          { heading: "Disadvantages", body: "Job displacement, high cost, maintenance needs, lack of human judgement in unexpected situations, ethical concerns (autonomous weapons, privacy)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Evaluate using robots for warehouse order picking.",
          solution: "Advantages: faster, accurate, 24/7, no injuries. Disadvantages: high cost, job losses, needs maintenance.",
        },
      },
      questions: [
        {
          id: "olcs-u6-rr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is a common use of industrial robots?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Welding on production lines" }, { id: "b", text: "Writing novels" }, { id: "c", text: "Teaching children" }, { id: "d", text: "Cooking meals at home" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Robot uses", statement: "Manufacturing, medicine, logistics." }], steps: [{ reasoning: "Welding is classic robot task.", working: "\\text{welding}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Welding" },
        },
        {
          id: "olcs-u6-rr-q2", difficulty: "core", totalMarks: 2,
          stem: "State one advantage of using robots in manufacturing.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Robot pros", statement: "Precision, speed, consistency." }], steps: [
            { reasoning: "Consistent precision/speed.", working: "\\text{precision}", marks: 1, markCode: "M" },
            { reasoning: "Correct advantage.", marks: 1, markCode: "A" },
          ], finalAnswer: "Precision/consistency/speed/24-7 operation." },
        },
        {
          id: "olcs-u6-rr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why robots are valuable for space exploration.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Exploration robots", statement: "Survive hostile environments." }], steps: [
            { reasoning: "Humans can't survive space/vacuum/radiation.", working: "\\text{hostile}", marks: 1, markCode: "M" },
            { reasoning: "Robots can operate remotely for years.", working: "\\text{remote}", marks: 1, markCode: "M" },
            { reasoning: "Gather data/send images back.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Robots survive hostile environments and operate remotely where humans cannot." },
        },
        {
          id: "olcs-u6-rr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Robots in society review.",
          parts: [
            { label: "a", prompt: "Give two uses of robots in industry.", marks: 2 },
            { label: "b", prompt: "State two advantages of robots.", marks: 2 },
            { label: "c", prompt: "State two disadvantages.", marks: 2 },
            { label: "d", prompt: "Evaluate whether robots should replace human warehouse workers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Robot evaluation", statement: "Balance efficiency vs jobs/judgement." },
          ], steps: [
            { part: "a", reasoning: "Welding/assembly/packing.", working: "\\text{uses}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second use.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Precision/speed.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Safety/24-7.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Job losses/cost.", working: "\\text{cons}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Lack of judgement.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Robots faster/accurate for repetitive picking.", working: "\\text{efficiency}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "But humans handle exceptions/judgement.", working: "\\text{judgement}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) welding/packing (b) precision/safety (c) jobs/cost (d) balance efficiency vs judgement" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u6-6-2-notes", title: "Robotics — notes", summary: "Robot components, degrees of freedom, roles and impact.",
      sections: [
        { heading: "Components", body: "Sensors, processor, actuators, end effector, power. More DOF = more dexterity." },
        { heading: "Impact", body: "Used in manufacturing, medicine, logistics, exploration. Pros: precision/safety; cons: jobs/cost." },
      ] },
  ],
};
