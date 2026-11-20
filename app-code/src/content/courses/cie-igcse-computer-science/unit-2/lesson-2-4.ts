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
                              "text": "Sensor, processor, actuator"
                    },
                    {
                              "id": "b",
                              "text": "Input, output, storage"
                    },
                    {
                              "id": "c",
                              "text": "Hardware, software, data"
                    },
                    {
                              "id": "d",
                              "text": "CPU, RAM, disk"
                    }
          ],
          "correctChoiceId": "a"
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
