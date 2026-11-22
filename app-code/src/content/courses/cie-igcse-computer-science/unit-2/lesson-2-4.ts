import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "ciecs-u2-lesson-2-4",
  code: "2-4",
  title: "Automatic Systems and Control",
  goal: "I CAN describe how sensors, processors and actuators create automatic systems.",
  standards: ["Cambridge IGCSE Computer Science 0478: automatic systems", "0478 section 6: automatic systems"],
  
  vocabulary: [
    { term: "Automatic system", definition: "System that operates without human intervention." },
    { term: "Sensor", definition: "Device detecting physical properties." },
    { term: "Processor", definition: "Computes response based on sensor input." },
    { term: "Actuator", definition: "Device performing physical action." },
    { term: "Feedback", definition: "Output returned as input to adjust behaviour." },
    { term: "Closed-loop", definition: "System using feedback to self-correct." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s4-auto",
      title: "Automatic systems",
      skill: "Describe sensor-processor-actuator systems at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The control cycle",
            body: "Automatic systems: sensor detects → processor decides → actuator acts. Example: thermostat senses temperature → processor compares to setpoint → heater turns on/off. Feedback loops continuously adjust.",
          },
          {
            heading: "Feedback and open/closed loop",
            body: "Closed-loop uses feedback to self-correct (thermostat). Open-loop doesn't check result (timer-based irrigation). Closed-loop is more accurate but more complex.",
          },
        ],
        keyFormulas: [
          { name: "Control cycle", statement: "sense→process→act→feedback" },
          { name: "Closed-loop", statement: "feedback self-corrects" },
          { name: "Open-loop", statement: "no feedback check" },
        ],
        workedExample: {
          problem: "Describe how an automatic car park barrier works.",
          solution: "Sensor detects car → processor checks ticket/payment → actuator lifts barrier → sensor detects car passed → barrier lowers.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-au-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three main components of an automatic system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hardware, software, data"
                    },
                    {
                              "id": "b",
                              "text": "CPU, RAM, disk"
                    },
                    {
                              "id": "c",
                              "text": "Sensor, processor, actuator"
                    },
                    {
                              "id": "d",
                              "text": "Input, output, storage"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Automatic system",
                              "statement": "Sense-process-act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The control cycle components.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sensor, processor, actuator"
},
        },
        {
          id: "ciecs-u2-au-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is feedback in a control system?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Feedback",
                              "statement": "Output→input loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feedback = output returned as input.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables self-correction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Output fed back as input"
},
        },
        {
          id: "ciecs-u2-au-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare open-loop and closed-loop control. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Control types",
                              "statement": "Feedback vs no feedback."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Open=no feedback; closed=feedback corrects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. open=timer irrigation; closed=thermostat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Closed-loop more accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Open vs closed loop + examples"
},
        },
        {
          id: "ciecs-u2-au-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define automatic system, sensor, processor, actuator, feedback, closed-loop. (b) Describe the control cycle. (c) Give 3 examples of automatic systems. (d) What is a thermostat's feedback loop? (e) Why is closed-loop more accurate? (f) What is open-loop? (g) Name sensors/actuators in a smart sprinkler. (h) Design an automatic system for school lighting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Automatic systems",
                              "statement": "Sense-process-act, feedback."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Sense→process→act→feedback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three valid examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Senses temp → adjusts heating.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Feedback corrects errors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) No feedback check.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid sensor/actuator list.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid lighting system design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Automatic systems and feedback control."
},
        },
        {
          id: "ciecs-u2-au-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of the automatic-system control cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sense, process, act" },
              { id: "b", text: "Act, sense, process" },
              { id: "c", text: "Process, act, sense" },
              { id: "d", text: "Store, display, delete" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Control cycle", statement: "Sense → process → act." },
            ],
            steps: [
              { reasoning: "Sensors gather input, the processor decides, then the actuator responds.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Sense, process, act",
          },
        },
        {
          id: "ciecs-u2-au-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a control system closed-loop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only works once" },
              { id: "b", text: "It cannot use sensors" },
              { id: "c", text: "It uses feedback to check and correct the result" },
              { id: "d", text: "It never uses a processor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Closed-loop", statement: "Feedback returns output as input." },
            ],
            steps: [
              { reasoning: "Closed-loop systems measure the result and adjust to reach the target.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Uses feedback to self-correct",
          },
        },
        {
          id: "ciecs-u2-au-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of an open-loop system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A thermostat adjusting heating" },
              { id: "b", text: "A car park barrier checking a ticket" },
              { id: "c", text: "A timer-controlled irrigation system" },
              { id: "d", text: "A greenhouse fan responding to temperature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Open-loop", statement: "No feedback check of the result." },
            ],
            steps: [
              { reasoning: "A timer runs for a set period without checking whether watering was needed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Timer-controlled irrigation",
          },
        },
        {
          id: "ciecs-u2-au-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is feedback in an automatic system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The final error message shown to a user" },
              { id: "b", text: "Data stored permanently on disk" },
              { id: "c", text: "Output returned as input so the system can adjust" },
              { id: "d", text: "A list of user passwords" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feedback", statement: "Output is returned as input for correction." },
            ],
            steps: [
              { reasoning: "Feedback lets the system compare the result with the target and correct itself.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Output returned as input",
          },
        },
        {
          id: "ciecs-u2-au-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a thermostat usually described as a closed-loop system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It senses temperature and adjusts heating until the target is reached" },
              { id: "b", text: "It has no sensors" },
              { id: "c", text: "It turns on at a fixed time every day" },
              { id: "d", text: "It cannot be controlled automatically" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thermostat control", statement: "Continuous sensing creates feedback." },
            ],
            steps: [
              { reasoning: "The thermostat keeps measuring temperature and switching heating to maintain the setpoint.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Senses temperature and self-corrects",
          },
        },
        {
          id: "ciecs-u2-au-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In an automatic car park barrier, what does the vehicle sensor provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Input telling the processor a car is present" },
              { id: "b", text: "The final payment receipt" },
              { id: "c", text: "A display font" },
              { id: "d", text: "A permanent storage backup" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Control input", statement: "Sensors provide data for decisions." },
            ],
            steps: [
              { reasoning: "The sensor detects the car and supplies input to the control processor.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Input that a car is present",
          },
        },
        {
          id: "ciecs-u2-au-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermostat switches heating ON below $18^\\circ$C and OFF above $21^\\circ$C. What is the difference between the two thresholds in degrees Celsius?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Control threshold", statement: "Threshold difference = upper - lower." },
            ],
            steps: [
              { reasoning: "21 - 18 = 3 degrees Celsius.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciecs-u2-au-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An irrigation system runs its pump for $15$ minutes every $6$ hours. How many minutes does the pump run in one day?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cycle time", statement: "Cycles per day × run time per cycle." },
            ],
            steps: [
              { reasoning: "There are 4 six-hour periods in a day: 4 * 15 = 60 minutes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "ciecs-u2-au-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sensor is sampled every $2$ seconds for $1$ minute. After each sample, the fan runs for $3$ seconds. (a) How many samples are taken? (b) What is the total fan-on time in seconds?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sampling and actuation", statement: "Samples = time / interval; on-time = samples × duration." },
            ],
            steps: [
              { reasoning: "60 / 2 = 30 samples.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "30 * 3 = 90 seconds of fan-on time.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 30; (b) 90",
          },
        },
        {
          id: "ciecs-u2-au-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A light turns ON below $200$ lux and OFF above $500$ lux. (a) What is the deadband between the thresholds in lux? (b) What is the midpoint lux value between the two thresholds?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300 },
              { label: "b", answer: 350 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Control thresholds", statement: "Deadband = upper - lower; midpoint = average." },
            ],
            steps: [
              { reasoning: "500 - 200 = 300 lux deadband.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "(200 + 500) / 2 = 350 lux midpoint.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 300; (b) 350",
          },
        },
        {
          id: "ciecs-u2-au-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A greenhouse fan runs for $3$ minutes in every $10$-minute cycle. (a) How many minutes does it run per hour? (b) How many minutes per day? (c) What percentage of the time is the fan on?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 18 },
              { label: "b", answer: 432 },
              { label: "c", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Duty cycle", statement: "Duty cycle = on-time / cycle time." },
            ],
            steps: [
              { reasoning: "6 cycles per hour * 3 minutes = 18 minutes per hour.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "18 * 24 = 432 minutes per day.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "3 / 10 * 100 = 30% of the time.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 18; (b) 432; (c) 30",
          },
        },
        {
          id: "ciecs-u2-au-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare an open-loop and a closed-loop system for automatically watering greenhouse plants. Identify sensors, processor decisions, actuators and feedback for the closed-loop design, and explain why closed-loop is more accurate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Greenhouse control", statement: "Closed-loop uses soil-moisture feedback to water only when needed." },
            ],
            steps: [
              { reasoning: "Open-loop example: water on a fixed timer regardless of soil moisture.", marks: 1, markCode: "M" },
              { reasoning: "Closed-loop sensors such as soil-moisture probes provide input.", marks: 1, markCode: "M" },
              { reasoning: "The processor compares moisture with a threshold and the pump/water valve acts.", marks: 1, markCode: "M" },
              { reasoning: "Feedback from continued sensor readings allows correction, making it more accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closed-loop watering uses feedback for accuracy",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-au-notes",
      title: "Automatic systems — notes",
      summary: "Sensor→processor→actuator cycle; closed-loop uses feedback to self-correct.",
      sections: [
        { heading: "Key idea", body: "Automatic systems sense, decide and act without humans." },
        { heading: "Feedback", body: "Closed-loop = more accurate but more complex." },
      ],
    },
  ],
};
