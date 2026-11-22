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
            { id: "a", text: "Sensor" },
            { id: "b", text: "Battery" },
            { id: "c", text: "Actuator" },
            { id: "d", text: "Camera" },
          ], correctChoiceId: "c" },
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
        {
          id: "olcs-u6-rb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An end effector is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of sensor" },
            { id: "b", text: "A battery" },
            { id: "c", text: "The tool at the end of a robot arm" },
            { id: "d", text: "A motor" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "End effector", statement: "Working tool at arm's end." }], steps: [{ reasoning: "End effector is the tool (gripper, welder).", working: "\\text{tool}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** The tool at the arm's end" },
        },
        {
          id: "olcs-u6-rb-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many main components does a robot have: sensors, processor, actuators, end effector, power source?",
          response: { type: "numeric", parts: [{ label: "Number of components", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Robot components", statement: "Sensors, processor, actuators, end effector, power." }], steps: [
            { reasoning: "Five components named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u6-rb-q7", difficulty: "core", totalMarks: 1,
          stem: "Degrees of freedom measure…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Weight" },
            { id: "b", text: "Battery life" },
            { id: "c", text: "Independent joint movements" },
            { id: "d", text: "Top speed" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "DOF", statement: "Independent movements." }], steps: [{ reasoning: "DOF = independent joint movements.", working: "\\text{movements}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Independent joint movements" },
        },
        {
          id: "olcs-u6-rb-q8", difficulty: "core", totalMarks: 1,
          stem: "An industrial robot arm has 6 degrees of freedom. How many independent movements can it make?",
          response: { type: "numeric", parts: [{ label: "Degrees of freedom", answer: 6 }] },
          markscheme: { principles: [{ kind: "definition", name: "DOF", statement: "Independent joint movements." }], steps: [
            { reasoning: "6 DOF = 6 independent movements.", working: "6", marks: 1, markCode: "B" },
          ], finalAnswer: "6" },
        },
        {
          id: "olcs-u6-rb-q9", difficulty: "core", totalMarks: 1,
          stem: "A self-driving car that navigates using sensors and AI is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A power supply" },
            { id: "b", text: "An end effector" },
            { id: "c", text: "An autonomous robot" },
            { id: "d", text: "A sensor" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Autonomous robot", statement: "Self-navigating using sensors and AI." }], steps: [{ reasoning: "Self-driving = autonomous robot.", working: "\\text{autonomous}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Autonomous robot" },
        },
        {
          id: "olcs-u6-rb-q10", difficulty: "core", totalMarks: 2,
          stem: "State two types of robots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Robot types", statement: "Industrial, mobile, service, autonomous, domestic." }], steps: [
            { reasoning: "Any valid type: industrial, mobile, service, autonomous, domestic.", working: "\\text{types}", marks: 1, markCode: "M" },
            { reasoning: "Second valid type.", marks: 1, markCode: "A" },
          ], finalAnswer: "Industrial, mobile, service, autonomous or domestic (any two)." },
        },
        {
          id: "olcs-u6-rb-q11", difficulty: "challenge", totalMarks: 1,
          stem: "More degrees of freedom give a robot…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower cost" },
            { id: "b", text: "No need for sensors" },
            { id: "c", text: "Less movement" },
            { id: "d", text: "More dexterity but harder control" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "DOF trade-off", statement: "Flexibility vs control complexity." }], steps: [{ reasoning: "More DOF = more dexterity, harder control.", working: "\\text{dexterity}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** More dexterity but harder control" },
        },
        {
          id: "olcs-u6-rb-q12", difficulty: "core", totalMarks: 1,
          stem: "A robot arm has 4 joints, each providing 1 degree of freedom. How many degrees of freedom does it have in total?",
          response: { type: "numeric", parts: [{ label: "Total DOF", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "DOF", statement: "Independent joint movements." }], steps: [
            { reasoning: "4 joints × 1 DOF = 4.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u6-rb-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a warehouse robot needs both sensors and actuators.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sense-act loop", statement: "Sensors perceive; actuators move." }], steps: [
            { reasoning: "Sensors let it see/detect the environment.", working: "\\text{sensors}", marks: 1, markCode: "M" },
            { reasoning: "Actuators let it move and pick objects.", working: "\\text{actuators}", marks: 1, markCode: "M" },
            { reasoning: "Together they form the sense→act control loop.", working: "\\text{loop}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sensors perceive the environment and actuators move the robot — together they enable the sense-act loop." },
        },
        {
          id: "olcs-u6-rb-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which is NOT a defining trait of a robot?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It can operate automatically" },
            { id: "b", text: "It senses and acts physically" },
            { id: "c", text: "It always needs a human operator" },
            { id: "d", text: "It is reprogrammable" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Robot traits", statement: "Automated sense-act machines." }], steps: [{ reasoning: "Robots can work autonomously — no operator needed.", working: "\\text{autonomous}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Always needs a human operator" },
        },
        {
          id: "olcs-u6-rb-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many main components a robot has and approximately how many degrees of freedom a human arm has.",
          response: { type: "numeric", parts: [
            { label: "Main components", answer: 5 },
            { label: "Human arm DOF (approx.)", answer: 7 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Robot vs human", statement: "5 components; arm ≈ 7 DOF." }], steps: [
            { reasoning: "Sensors, processor, actuators, end effector, power.", working: "5", marks: 1, markCode: "M" },
            { reasoning: "Human arm has about 7 DOF.", working: "7", marks: 1, markCode: "A" },
          ], finalAnswer: "5 components; ≈7 DOF" },
        },
        {
          id: "olcs-u6-rb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Robotics basics review.",
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
            { part: "d", reasoning: "Perceive environment for decisions.", working: "\\text{perceive}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Feed data to processor.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 components (b) joint movements (c) fixed vs self-navigating (d) perceive" },
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
            { id: "a", text: "Cooking meals at home" },
            { id: "b", text: "Writing novels" },
            { id: "c", text: "Teaching children" },
            { id: "d", text: "Welding on production lines" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u6-rr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Robots are commonly used in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cooking meals at home" },
            { id: "b", text: "Teaching toddlers" },
            { id: "c", text: "Writing novels" },
            { id: "d", text: "Manufacturing, e.g. welding and assembly" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Robot uses", statement: "Manufacturing, medicine, logistics." }], steps: [{ reasoning: "Welding/assembly is a classic robot task.", working: "\\text{welding}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Manufacturing" },
        },
        {
          id: "olcs-u6-rr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many sectors are listed for robot use: manufacturing, healthcare, logistics, exploration, domestic, agriculture?",
          response: { type: "numeric", parts: [{ label: "Number of sectors", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "Robot uses", statement: "Six sectors listed." }], steps: [
            { reasoning: "Six sectors named.", working: "6", marks: 1, markCode: "B" },
          ], finalAnswer: "6" },
        },
        {
          id: "olcs-u6-rr-q7", difficulty: "core", totalMarks: 1,
          stem: "A key advantage of robots in manufacturing is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They never need maintenance" },
            { id: "b", text: "They can judge creatively" },
            { id: "c", text: "They need no power" },
            { id: "d", text: "Consistent precision and speed" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Robot pros", statement: "Precision, speed, consistency." }], steps: [{ reasoning: "Robots give consistent precision and speed.", working: "\\text{precision}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Consistent precision and speed" },
        },
        {
          id: "olcs-u6-rr-q8", difficulty: "core", totalMarks: 1,
          stem: "A warehouse robot works 24 hours a day, 7 days a week. How many hours does it work per week?",
          response: { type: "numeric", parts: [{ label: "Hours per week", answer: 168 }] },
          markscheme: { principles: [{ kind: "principle", name: "24/7 operation", statement: "Robots don't need rest." }], steps: [
            { reasoning: "24 × 7 = 168 hours.", working: "168", marks: 1, markCode: "B" },
          ], finalAnswer: "168" },
        },
        {
          id: "olcs-u6-rr-q9", difficulty: "core", totalMarks: 1,
          stem: "Robots are especially valuable for space exploration because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are cheaper than humans" },
            { id: "b", text: "They survive hostile environments humans cannot" },
            { id: "c", text: "They feel curiosity" },
            { id: "d", text: "They need no programming" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Exploration", statement: "Robots endure hostile conditions." }], steps: [{ reasoning: "Robots survive vacuum/radiation where humans can't.", working: "\\text{hostile}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Survive hostile environments" },
        },
        {
          id: "olcs-u6-rr-q10", difficulty: "core", totalMarks: 2,
          stem: "State one advantage and one disadvantage of using robots in society.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade-offs", statement: "Efficiency vs jobs/ethics." }], steps: [
            { reasoning: "Advantage: precision/24-7/safety.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { reasoning: "Disadvantage: job losses/cost/ethics.", working: "\\text{cons}", marks: 1, markCode: "A" },
          ], finalAnswer: "Advantage: precision/safety; disadvantage: job displacement/cost." },
        },
        {
          id: "olcs-u6-rr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A major social concern about increasing robot use is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Faster internet" },
            { id: "b", text: "Longer battery life" },
            { id: "c", text: "Job displacement" },
            { id: "d", text: "Better graphics" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Social impact", statement: "Workers may lose jobs." }], steps: [{ reasoning: "Job displacement is a key concern.", working: "\\text{jobs}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Job displacement" },
        },
        {
          id: "olcs-u6-rr-q12", difficulty: "core", totalMarks: 1,
          stem: "A human warehouse worker works 8-hour shifts, 5 days a week. How many hours does the worker work per week?",
          response: { type: "numeric", parts: [{ label: "Hours per week", answer: 40 }] },
          markscheme: { principles: [{ kind: "principle", name: "Work hours", statement: "8 × 5 = 40." }], steps: [
            { reasoning: "8 × 5 = 40 hours.", working: "40", marks: 1, markCode: "B" },
          ], finalAnswer: "40" },
        },
        {
          id: "olcs-u6-rr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the use of robots for surgery in hospitals.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Evaluation", statement: "Weigh precision against cost/judgement." }], steps: [
            { reasoning: "Pros: precision, less fatigue, smaller incisions.", working: "\\text{pros}", marks: 1, markCode: "M" },
            { reasoning: "Cons: high cost, maintenance, training.", working: "\\text{cons}", marks: 1, markCode: "M" },
            { reasoning: "Lack of human judgement in emergencies.", working: "\\text{judgement}", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "Robots offer precision and endurance but cost much and lack human judgement; benefits must outweigh costs." },
        },
        {
          id: "olcs-u6-rr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Where are robots least suitable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Box packing" },
            { id: "b", text: "Tasks needing human judgement and empathy" },
            { id: "c", text: "Paint spraying" },
            { id: "d", text: "Welding" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Limits", statement: "Robots lack human judgement." }], steps: [{ reasoning: "Judgement/empathy tasks suit humans.", working: "\\text{judgement}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Tasks needing judgement/empathy" },
        },
        {
          id: "olcs-u6-rr-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many use sectors and how many advantages are listed for robots in society.",
          response: { type: "numeric", parts: [
            { label: "Use sectors", answer: 6 },
            { label: "Advantages listed", answer: 5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Robot impact", statement: "6 sectors; 5 advantages." }], steps: [
            { reasoning: "Manufacturing, healthcare, logistics, exploration, domestic, agriculture.", working: "6", marks: 1, markCode: "M" },
            { reasoning: "Consistency, 24/7, precision, safety, no fatigue.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "6 sectors; 5 advantages" },
        },
        {
          id: "olcs-u6-rr-q16", difficulty: "challenge", totalMarks: 9,
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
          ], finalAnswer: "(a) uses (b) pros (c) cons (d) balance efficiency vs judgement" },
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
