import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieict-u4-lesson-4-1",
  code: "4-1",
  title: "ICT Systems: Hardware, Software and Lifecycle",
  goal: "I CAN explain ICT system components and the systems development lifecycle at IGCSE ICT standard.",
  standards: ["Cambridge IGCSE ICT 0413", "ICT systems"],
  vocabulary: [
    {
      term: "ICT system",
      definition: "Hardware, software, data and people working together.",
    },
    {
      term: "Systems development lifecycle",
      definition: "Stages from problem definition to maintenance.",
    },
    {
      term: "Feasibility study",
      definition: "Checking whether a system is viable before building.",
    },
    {
      term: "Implementation",
      definition: "Installing and rolling out the new system.",
    },
    {
      term: "Maintenance",
      definition: "Ongoing support and updates after implementation.",
    },
  ],
  concepts: [
    {
      id: "cieict-u4-s1-systems",
      title: "ICT systems and lifecycle",
      skill: "Explain system components and lifecycle stages.",
      lesson: {
        sections: [
          {
            heading: "System components",
            body: "An ICT system combines hardware (CPU, memory, storage, peripherals), software (OS, applications), data (databases, files), people (users, developers) and procedures (workflows). All must work together — a fast computer is useless without suitable software and trained users.",
          },
          {
            heading: "Systems development lifecycle",
            body: "Stages: investigation → feasibility study → design → implementation → testing → installation → maintenance. Each stage has outputs feeding the next. Skipping stages (e.g. no testing) causes expensive failures later.",
          },
        ],
        keyFormulas: [
          {
            name: "System parts",
            statement: "hardware + software + data + people + procedures",
          },
          {
            name: "Lifecycle",
            statement:
              "investigate → feasibility → design → implement → test → install → maintain",
          },
        ],
        workedExample: {
          problem:
            "Why is a feasibility study done before designing a new school database system?",
          solution:
            "It checks whether the project is technically, financially and operationally viable — avoiding wasted effort on an impossible system.",
        },
      },
      questions: [
        {
          id: "cieict-u4-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a component of an ICT system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data" },
              { id: "b", text: "Hardware" },
              { id: "c", text: "Software" },
              { id: "d", text: "Weather" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICT system",
                statement: "Hardware+software+data+people+procedures.",
              },
            ],
            steps: [
              {
                reasoning: "Weather is not a system component.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weather",
          },
        },
        {
          id: "cieict-u4-sy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the purpose of the testing stage in the systems development lifecycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Testing",
                statement: "Find and fix faults before installation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Testing identifies faults and checks the system meets requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fixing faults before rollout prevents costly failures in use.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Finds faults and verifies requirements before installation",
          },
        },
        {
          id: "cieict-u4-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A school is building a new attendance system. Explain why user training is part of implementation, not an optional extra.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Implementation",
                statement: "System + users must work together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Even a well-built system fails if staff can't operate it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Training ensures correct data entry, protecting data quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adoption depends on confidence — untrained users revert to old methods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Users must be able to operate it — training ensures adoption and data quality",
          },
        },
        {
          id: "cieict-u4-sy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A company skipped the feasibility stage and built a system that users rejected. Explain the consequences and how the lifecycle would have prevented them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lifecycle value",
                statement: "Early stages prevent late failures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consequence: wasted money and time building an unwanted system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consequence: staff revert to old methods — the investment is wasted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feasibility would have checked user needs and viability first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Design stage would have involved users, preventing the mismatch.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wasted investment and rejection; feasibility + user involvement would have caught it early",
          },
        },
        {
          id: "cieict-u4-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of an ICT system is made up of people who design, use and support it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hardware" },
              { id: "b", text: "Users" },
              { id: "c", text: "Software" },
              { id: "d", text: "Data" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICT system",
                statement: "Hardware+software+data+people+procedures.",
              },
            ],
            steps: [
              {
                reasoning: "Users are the people component of an ICT system.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Users",
          },
        },
        {
          id: "cieict-u4-sy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each of 500 student records requires 2 KB of storage. Calculate the total storage required in KB.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "KB" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Total storage",
                statement:
                  "Total storage equals the number of records multiplied by storage per record.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply 500 records by 2 KB per record to get 1000 KB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1000 KB",
          },
        },
        {
          id: "cieict-u4-sy-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 800 MB file is downloaded in 40 seconds. Calculate the download speed in Mbps.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 160, unit: "Mbps" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data rate",
                statement:
                  "Download speed equals transferred bits divided by time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert 800 MB to megabits by multiplying by 8, giving 6400 megabits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide 6400 megabits by 40 seconds to get 160 Mbps.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "160 Mbps",
          },
        },
        {
          id: "cieict-u4-sy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which stage of the systems development lifecycle immediately follows the feasibility study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testing" },
              { id: "b", text: "Investigation" },
              { id: "c", text: "Maintenance" },
              { id: "d", text: "Design" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lifecycle order",
                statement:
                  "Investigation → feasibility → design → implementation → testing → installation → maintenance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Design follows the feasibility study in the lifecycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Design",
          },
        },
        {
          id: "cieict-u4-sy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A computer has 4 memory modules, each with a capacity of 8 GB. Calculate the total RAM capacity in GB.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32, unit: "GB" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Total capacity",
                statement:
                  "Total capacity equals the number of modules multiplied by capacity per module.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply 4 modules by 8 GB per module to get 32 GB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "32 GB",
          },
        },
        {
          id: "cieict-u4-sy-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the systems development lifecycle, which stage produces a detailed specification of how the system will work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Investigation" },
              { id: "b", text: "Design" },
              { id: "c", text: "Maintenance" },
              { id: "d", text: "Feasibility study" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Design stage",
                statement: "Design creates the detailed system specification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The design stage turns requirements into a detailed specification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Design",
          },
        },
        {
          id: "cieict-u4-sy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best description of implementation in the systems development lifecycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deleting the old system immediately" },
              {
                id: "b",
                text: "Installing the system, migrating data and training users",
              },
              { id: "c", text: "Checking whether the project is viable" },
              { id: "d", text: "Writing the project report" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Implementation",
                statement: "Installing and rolling out the new system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Implementation includes installation, data migration and user training.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Installing the system, migrating data and training users",
          },
        },
        {
          id: "cieict-u4-sy-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A system budget is 45,000 USD. Software costs 18,000 USD and hardware costs 12,000 USD. Calculate the amount remaining for staffing in USD.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15000, unit: "USD" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Budget remaining",
                statement:
                  "Remaining budget equals total budget minus known costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add the software and hardware costs to get 30,000 USD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subtract 30,000 USD from 45,000 USD to get 15,000 USD.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15,000 USD",
          },
        },
        {
          id: "cieict-u4-sy-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A new payroll system produces incorrect tax figures for some employees. Which lifecycle stage should have identified this fault?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testing" },
              { id: "b", text: "Investigation" },
              { id: "c", text: "Design" },
              { id: "d", text: "Feasibility study" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Testing",
                statement: "Testing finds faults before installation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incorrect calculations are faults that testing should detect before rollout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Testing",
          },
        },
        {
          id: "cieict-u4-sy-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A supermarket replaces manual stock checks with an ICT system. Explain why maintenance must continue after installation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lifecycle value",
                statement: "Systems need ongoing support to remain useful.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maintenance applies software updates and security fixes after installation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It fixes faults and adapts the system when business requirements change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Continuing support prevents the system becoming unreliable or obsolete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ongoing maintenance protects the investment and keeps users confident in the system.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Updates, fixes and adaptations keep the system reliable and valuable over time",
          },
        },
        {
          id: "cieict-u4-sy-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three project files occupy 120 MB, 80 MB and 45 MB. Calculate the total storage used in MB.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 245, unit: "MB" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Total file size",
                statement:
                  "Total file size equals the sum of the individual file sizes.",
              },
            ],
            steps: [
              {
                reasoning: "Add 120 MB, 80 MB and 45 MB to get 245 MB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "245 MB",
          },
        },
        {
          id: "cieict-u4-sy-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which lifecycle stage checks whether a project is technically, financially and operationally viable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maintenance" },
              { id: "b", text: "Feasibility study" },
              { id: "c", text: "Investigation" },
              { id: "d", text: "Design" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasibility study",
                statement:
                  "Checking whether a system is viable before building.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The feasibility study checks technical, financial and operational viability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Feasibility study",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u4-sys-notes",
      title: "ICT systems — revision notes",
      summary:
        "System components, lifecycle stages, feasibility, implementation.",
      sections: [
        {
          heading: "Key skills",
          body: "Name all five system components; order the lifecycle correctly; explain why early stages prevent late failures.",
        },
        {
          heading: "Exam tips",
          body: "For 'explain' questions link each lifecycle stage to its purpose — don't just list stage names.",
        },
      ],
    },
  ],
};
