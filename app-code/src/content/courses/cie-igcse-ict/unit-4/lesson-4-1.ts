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
              { id: "a", text: "Hardware" },
              { id: "b", text: "Software" },
              { id: "c", text: "Data" },
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
