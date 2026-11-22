import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cipg-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 6 — Synthesising Research into Action",
  goal: "I CAN combine research, analysis, evaluation and communication into a complete project with real-world action.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 6: all strands",
    "Cambridge Primary Global Perspectives 0838 strands: Research, Analysis, Evaluation, Reflection, Collaboration, Communication",
  ],
  stage: 6,
  vocabulary: [
    {
      term: "Synthesis",
      definition:
        "Combining research, analysis and evaluation into one coherent whole.",
    },
    { term: "Outcome", definition: "The result or impact of your project." },
    {
      term: "Deliverable",
      definition: "The final product — presentation, poster, report.",
    },
    {
      term: "Impact assessment",
      definition: "Measuring what difference your project made.",
    },
    {
      term: "Sustainability",
      definition: "Whether the change continues after the project ends.",
    },
    {
      term: "Legacy",
      definition: "The lasting effect your project leaves behind.",
    },
  ],
  concepts: [
    {
      id: "cipg-u2-s6-synth",
      title: "Synthesising into action",
      skill:
        "Integrate all six skills into a complete project with measurable outcomes at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "The full cycle",
            body: "Stage 6 projects use all six strands: research an issue → analyse perspectives and causes → evaluate solutions → reflect on your role → collaborate with others → communicate findings and take action.",
          },
          {
            heading: "Measuring impact",
            body: "Ask: What changed because of your project? Did behaviour change? Was the solution sustainable? Document outcomes — before/after data, testimonials, photos. A project isn't complete until you've assessed its real-world impact.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis",
            statement:
              "research+analysis+evaluation+reflection+collaboration+communication",
          },
          { name: "Impact", statement: "measurable change from your project" },
        ],
        workedExample: {
          problem:
            "You ran 'Meat-Free Monday' at school for a month. How do you assess impact?",
          solution:
            "Compare waste data before/after, survey student attitudes, count participation, interview canteen staff. Document findings and suggest continuation.",
        },
      },
      questions: [
        {
          id: "cipg-u2-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does synthesis mean in Global Perspectives?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A computer program",
              },
              {
                id: "b",
                text: "A school subject",
              },
              {
                id: "c",
                text: "A type of music",
              },
              {
                id: "d",
                text: "Combining all skills into a coherent whole",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Integrating all strands.",
              },
            ],
            steps: [
              {
                reasoning: "Synthesis = combining research through action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Combining all skills",
          },
        },
        {
          id: "cipg-u2-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to measure a project's impact.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Impact",
                statement: "Measurable change.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. before/after data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. surveys, participation counts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. data comparison + surveys",
          },
        },
        {
          id: "cipg-u2-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is sustainability important for a project's impact? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sustainability",
                statement: "Long-term change.",
              },
            ],
            steps: [
              {
                reasoning: "Temporary change fades; sustainable continues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. habit vs one-off event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Design for continuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Long-term vs temporary change",
          },
        },
        {
          id: "cipg-u2-sy-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define synthesis, outcome, deliverable, impact assessment, sustainability, legacy. (b) Describe the full Global Perspectives project cycle. (c) Design a project on 'reducing school waste'. (d) How will you measure success? (e) What makes it sustainable? (f) What legacy could it leave? (g) How do all six strands appear in your project? (h) Evaluate your project's likely impact.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "Full cycle, impact, sustainability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Research→analyse→evaluate→reflect→collaborate→communicate→act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid comprehensive project design.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid measurement method.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Continuation plan/habit formation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid legacy description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) All six strands identified in project.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Realistic impact evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete project cycle with impact assessment.",
          },
        },
        {
          id: "cipg-u2-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'outcome'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The first step of a project",
              },
              {
                id: "b",
                text: "The result or impact of your project",
              },
              {
                id: "c",
                text: "A type of presentation",
              },
              {
                id: "d",
                text: "A group member's job",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outcome",
                statement: "Result of the project.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An outcome is what the project achieved or changed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Result or impact of the project",
          },
        },
        {
          id: "cipg-u2-sy-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A project produced 3 deliverables: a poster, a video and a report. (a) How many deliverables did it produce? (b) If the team adds 2 more deliverables, how many will there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deliverable",
                statement: "Final product of a project.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 deliverables listed.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 + 2 = 5 deliverables.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3; 5",
          },
        },
        {
          id: "cipg-u2-sy-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which best measures a project's impact?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Measuring the poster size",
              },
              {
                id: "b",
                text: "Comparing before and after data",
              },
              {
                id: "c",
                text: "Guessing whether it worked",
              },
              {
                id: "d",
                text: "Counting how many friends you have",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Impact assessment",
                statement: "Measurable change.",
              },
            ],
            steps: [
              {
                reasoning: "Before/after comparison shows what changed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Before and after data",
          },
        },
        {
          id: "cipg-u2-sy-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Before a litter project, 20 students dropped litter each day. After the project, only 10 did. (a) How many students dropped litter before? (b) How many fewer students dropped litter after?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 20,
              },
              {
                label: "b",
                answer: 10,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Impact assessment",
                statement: "Measuring behaviour change.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 20 before.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 20 - 10 = 10 fewer.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "20 before; 10 fewer",
          },
        },
        {
          id: "cipg-u2-sy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is sustainability important for a project's impact?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is only important for big projects",
              },
              {
                id: "b",
                text: "It makes the project cheaper only",
              },
              {
                id: "c",
                text: "It removes the need to measure impact",
              },
              {
                id: "d",
                text: "Temporary change fades; sustainable change lasts",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Long-term change matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Impact that disappears quickly is not lasting change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Change must last",
          },
        },
        {
          id: "cipg-u2-sy-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a recycling project, 4 students recycled in week 1 and 9 students recycled in week 4. (a) How many recycled in week 1? (b) How many recycled in week 4? (c) By how many did recycling increase?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 9,
              },
              {
                label: "c",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Impact assessment",
                statement: "Tracking change over time.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 in week 1.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 9 in week 4.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 9 - 4 = 5 increase.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "4, 9, 5",
          },
        },
        {
          id: "cipg-u2-sy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a project's 'legacy'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The first meeting the team had",
              },
              {
                id: "b",
                text: "The lasting effect it leaves behind",
              },
              {
                id: "c",
                text: "The team's grades",
              },
              {
                id: "d",
                text: "A type of poster",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Legacy",
                statement: "Lasting effect.",
              },
            ],
            steps: [
              {
                reasoning: "Legacy is what remains after the project ends.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Lasting effect left behind",
          },
        },
        {
          id: "cipg-u2-sy-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A school's compost project cut weekly food waste from 8 kg to 3 kg. (a) How much waste was there before? (b) How much waste was there after? (c) By how much did waste decrease?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 8,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 5,
                unit: "kg",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Impact assessment",
                statement: "Measuring waste reduction.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 8 kg before.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 kg after.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 8 - 3 = 5 kg decrease.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "8, 3, 5 kg",
          },
        },
        {
          id: "cipg-u2-sy-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'synthesis' mean in a Global Perspectives project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Finishing the project early",
              },
              {
                id: "b",
                text: "Working alone on the project",
              },
              {
                id: "c",
                text: "Combining research, analysis, evaluation and action into one coherent whole",
              },
              {
                id: "d",
                text: "Writing a very long report",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Integrating all strands.",
              },
            ],
            steps: [
              {
                reasoning: "Synthesis weaves all six skills into one project.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Combining all skills coherently",
          },
        },
        {
          id: "cipg-u2-sy-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A project plan lists 6 stages: research, analyse, evaluate, reflect, collaborate, communicate. (a) How many stages are listed? (b) If all six are completed, how many strands does the project use? (c) If a project skips 2 stages, how many stages remain? (d) If each stage takes 1 week, how many weeks does the project take?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 6,
              },
              {
                label: "c",
                answer: 4,
              },
              {
                label: "d",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project cycle",
                statement: "All strands in sequence.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 stages listed.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 6 strands used.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 - 2 = 4 stages remain.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 6 stages x 1 week = 6 weeks.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "6, 6, 4, 6",
          },
        },
        {
          id: "cipg-u2-sy-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the strongest evidence that a project had impact?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Everyone saying it was fun",
              },
              {
                id: "b",
                text: "Finishing before the deadline",
              },
              {
                id: "c",
                text: "Measurable change, like data or behaviour change",
              },
              {
                id: "d",
                text: "A very colourful poster",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Impact assessment",
                statement: "Measurable change counts.",
              },
            ],
            steps: [
              {
                reasoning: "Real impact is shown by measurable change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Measurable change",
          },
        },
        {
          id: "cipg-u2-sy-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define synthesis, outcome, deliverable, sustainability, legacy. (b) Describe the full Global Perspectives project cycle in order. (c) Design a project to reduce plastic use at school. (d) How will you measure its success? (e) What makes your project sustainable? (f) What legacy could it leave? (g) Where do all six strands appear in your project? (h) Evaluate the likely real-world impact of your project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "Full cycle, impact, sustainability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Correct order: research, analyse, evaluate, reflect, collaborate, communicate, act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid comprehensive plastic-reduction project.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid measurement: waste counts, surveys, before/after data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Continuation plan or habit formation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Valid legacy: lasting habits, policy change, awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) All six strands identified in the project.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Realistic impact evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete project cycle with impact assessment.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-sy-notes",
      title: "Synthesising — notes",
      summary:
        "Combine all six strands into a complete project. Measure impact; ensure sustainability.",
      sections: [
        {
          heading: "Key idea",
          body: "A project isn't done until impact is measured and change is sustainable.",
        },
        {
          heading: "Cycle",
          body: "Research → analyse → evaluate → reflect → collaborate → communicate → act.",
        },
      ],
    },
  ],
};
