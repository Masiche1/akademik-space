import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ebz10-u3-lesson-3-3",
  code: "3-3",
  title: "Technology in Operations",
  goal: "I CAN explain how technology affects operations management.",
  standards: ["Edexcel IGCSE Business 4BS0 — Operations Management"],
  vocabulary: [
    {
      term: "Automation",
      definition:
        "Using machines/computers to perform tasks without human input.",
    },
    {
      term: "CAD/CAM",
      definition:
        "Computer-aided design/manufacturing — design and produce digitally.",
    },
    {
      term: "Robotics",
      definition: "Programmable machines performing tasks — welding, assembly.",
    },
    {
      term: "IoT",
      definition: "Internet of Things — connected devices sharing data.",
    },
    {
      term: "3D printing",
      definition: "Additive manufacturing — building objects layer by layer.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u3-automation",
      title: "Automation and Robotics",
      skill: "Understand how automation and robotics transform operations.",
      lesson: {
        sections: [
          {
            heading: "Automation in operations",
            body: "**Manufacturing**: robots weld, paint, assemble — faster, more precise, consistent quality, work 24/7. **Warehousing**: automated picking, sorting, packing — Amazon-style fulfilment centres. **Quality**: machine vision inspects products — detects defects humans miss.\n\n**Benefits**: higher productivity, consistent quality, lower unit costs at scale, safer for dangerous tasks. **Drawbacks**: high setup cost, job losses, less flexibility, maintenance needed.",
          },
          {
            heading: "CAD/CAM and 3D printing",
            body: "**CAD**: design products digitally — faster prototyping, easy modifications, precise measurements. **CAM**: machines follow CAD designs — CNC machines cut, drill, shape with precision.\n\n**3D printing**: additive manufacturing — build objects layer by layer from digital file. Used for prototypes, custom parts, medical implants. **Benefits**: rapid prototyping, mass customisation, less waste. **Limitations**: slow for mass production, limited materials.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A car factory uses robots for welding. What are two benefits and one drawback?",
          solution:
            "Benefits: consistent quality, 24/7 operation. Drawback: high setup cost, job losses.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-automation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is automation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiring more workers" },
              { id: "b", text: "Making products by hand" },
              { id: "c", text: "Selling products online" },
              {
                id: "d",
                text: "Using machines to perform tasks automatically",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Automation",
                statement: "Machines perform tasks without human input.",
              },
            ],
            steps: [
              {
                reasoning: "Automation = machines do tasks automatically.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Machines automatically",
            commonErrors: ["Manual labour confused."],
          },
        },
        {
          id: "ebz10-u3-automation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of using robots in manufacturing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Robotics benefits",
                statement: "Precision, consistency, 24/7 operation.",
              },
            ],
            steps: [
              {
                reasoning: "More precise and consistent than humans.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Work 24/7 without breaks — higher output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Safer for dangerous tasks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Precision, consistency, 24/7, safety.",
            commonErrors: ["Only one benefit.", "No manufacturing link."],
          },
        },
        {
          id: "ebz10-u3-automation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 3D printing is useful for prototyping but not mass production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "3D printing",
                statement: "Great for custom/one-off, slow for mass.",
              },
            ],
            steps: [
              {
                reasoning: "Prototyping: fast, cheap, custom designs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can iterate designs quickly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mass production: too slow, layer-by-layer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Injection moulding etc. faster for volume.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Fast/cheap prototyping; too slow for mass production.",
            commonErrors: ["Always better assumed.", "No comparison."],
          },
        },
        {
          id: "ebz10-u3-automation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A furniture company is considering automation.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two processes that could be automated.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify two drawbacks of automation for this business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation decision",
                statement: "Balance efficiency gains vs costs/job losses.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cutting/assembly — repetitive, precise tasks.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sanding/finishing — dangerous, repetitive.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) High setup cost — expensive machines.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Job losses — staff displacement.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cutting/assembly/sanding (b) cost/job losses",
            commonErrors: ["Everything automated.", "No drawback."],
          },
        },
      ],
    },
    {
      id: "ebz10-u3-iot",
      title: "IoT and Data in Operations",
      skill: "Understand how IoT and data improve operations.",
      lesson: {
        sections: [
          {
            heading: "Internet of Things",
            body: "**IoT** = devices connected to internet sharing data — sensors on machines, vehicles, products. **Applications**: predictive maintenance (sensors detect wear before failure), inventory tracking (RFID), quality monitoring (cameras detect defects), energy management (smart meters).\n\n**Smart factory**: fully connected production — machines communicate, adjust settings automatically, optimise production in real-time.",
          },
          {
            heading: "Data and analytics",
            body: "**Big data**: vast amounts of operational data — production rates, defect rates, machine performance, customer orders. **Analytics**: analysing data to find patterns, predict problems, optimise processes.\n\n**Benefits**: predict maintenance needs, reduce downtime, optimise inventory, improve quality, personalise products. **Challenges**: data security, privacy, need for skilled analysts, system costs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Sensors on a machine detect vibration increasing — what does this allow?",
          solution:
            "Predictive maintenance — fix before breakdown, reduce downtime.",
        },
      },
      questions: [
        {
          id: "ebz10-u3-iot-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Internet of Things (IoT)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Connected devices sharing data" },
              { id: "b", text: "A type of robot" },
              { id: "c", text: "An online shop" },
              { id: "d", text: "A social media platform" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IoT",
                statement: "Connected devices sharing data via internet.",
              },
            ],
            steps: [
              {
                reasoning: "IoT = connected devices sharing data.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Connected devices",
            commonErrors: ["Social media confused."],
          },
        },
        {
          id: "ebz10-u3-iot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways IoT improves operations management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IoT benefits",
                statement: "Predictive maintenance, real-time tracking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Predictive maintenance — sensors detect problems early.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real-time inventory/asset tracking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quality monitoring — cameras detect defects.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Predictive maintenance, tracking, quality monitoring.",
            commonErrors: ["Only one benefit.", "No operations link."],
          },
        },
        {
          id: "ebz10-u3-iot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how data analytics helps a business reduce costs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data analytics",
                statement: "Find patterns → optimise → reduce waste.",
              },
            ],
            steps: [
              {
                reasoning: "Analyse production data — find inefficiencies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Predict demand — optimise inventory levels.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify defect patterns — improve quality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduce waste, downtime, overstocking.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Data reveals inefficiencies → optimise → less waste/cost.",
            commonErrors: ["No data use.", "No cost link."],
          },
        },
        {
          id: "ebz10-u3-iot-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A warehouse uses IoT sensors and data analytics.",
          parts: [
            {
              label: "a",
              prompt: "Describe two ways IoT helps warehouse operations.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify two challenges of implementing IoT.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IoT implementation",
                statement: "Efficiency gains vs cost/security challenges.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Real-time inventory tracking — know stock levels.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Automated picking/packing — faster fulfilment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) High implementation cost — sensors, systems.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Data security/privacy risks.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) tracking/automation (b) cost/security",
            commonErrors: ["No benefit.", "No challenge."],
          },
        },
      ],
    },
  ],
};
