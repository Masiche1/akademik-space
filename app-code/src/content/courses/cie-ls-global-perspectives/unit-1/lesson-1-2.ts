import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cilgp-u1-lesson-1-2",
  code: "1-2",
  title: "Analysing Evidence and Perspectives",
  goal: "I CAN analyse evidence critically and understand different perspectives on an issue.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Analysis",
    "Cambridge Global Perspectives skills: analysis",
  ],

  vocabulary: [
    {
      term: "Perspective",
      definition: "A particular viewpoint shaped by experience/culture.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group affected by or affecting an issue.",
    },
    { term: "Evidence", definition: "Facts/data supporting a claim." },
    { term: "Inference", definition: "Conclusion drawn from evidence." },
    {
      term: "Assumption",
      definition: "Unstated belief underlying an argument.",
    },
    { term: "Counter-argument", definition: "Reasoning against a position." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s2-ana",
      title: "Critical analysis of evidence and perspectives",
      skill:
        "Analyse evidence quality and multiple viewpoints at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Multiple perspectives",
            body: "Every issue affects stakeholders differently: a factory closing hurts workers but may help environment. Understanding all perspectives — not just your own — is core to global perspectives work.",
          },
          {
            heading: "Analysing evidence",
            body: "Check: Is the evidence relevant to the claim? Is it sufficient? Are there alternative explanations? Strong analysis distinguishes fact from interpretation and acknowledges uncertainty.",
          },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "viewpoint shaped by context" },
          { name: "Counter-argument", statement: "strongest opposing view" },
        ],
        workedExample: {
          problem:
            "Analyse: 'Building a dam provides clean energy.' What perspectives and evidence matter?",
          solution:
            "Supporters: clean energy, flood control. Opponents: displaced communities, ecosystem damage. Evidence: energy output, relocation costs, environmental impact studies.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of evidence",
              },
              {
                id: "b",
                text: "Person/group affected by an issue",
              },
              {
                id: "c",
                text: "A voting system",
              },
              {
                id: "d",
                text: "A research tool",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Affected party.",
              },
            ],
            steps: [
              {
                reasoning: "Stakeholders are affected by/affect issues.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Affected person/group",
          },
        },
        {
          id: "cilgp-u1-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between evidence and inference?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence vs inference",
                statement: "Data vs conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence = facts/data observed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inference = conclusion drawn from it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Data vs conclusion",
          },
        },
        {
          id: "cilgp-u1-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two perspectives on 'social media use by teenagers' and one evidence type for each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspectives",
                statement: "Multiple viewpoints + evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. Parents: safety concerns — evidence: cyberbullying stats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Teens: social connection — evidence: usage surveys.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both perspectives + evidence each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two perspectives with evidence",
          },
        },
        {
          id: "cilgp-u1-an-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective, stakeholder, evidence, inference, assumption, counter-argument. (b) List 4 stakeholders in 'should city build a new airport?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Ice caps are melting, therefore sea levels will rise.' (h) Analyse both sides of 'universal basic income'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis",
                statement: "Perspectives, evidence, inference.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Four valid stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Perspective+evidence pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Unstated underlying belief.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Tests strength of position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Relevance, sufficiency, reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) 'Sea levels will rise' is the inference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced analysis of UBI.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Critical analysis of evidence and perspectives.",
          },
        },
        {
          id: "cilgp-u1-an-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an inference?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Raw data collected in a survey",
              },
              {
                id: "b",
                text: "A conclusion drawn from evidence",
              },
              {
                id: "c",
                text: "A type of source",
              },
              {
                id: "d",
                text: "A personal opinion unconnected to data",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "Conclusion drawn from evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inference interprets evidence; it is not the evidence itself.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A conclusion drawn from evidence",
          },
        },
        {
          id: "cilgp-u1-an-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey of 80 students, 40 prefer online learning to classroom learning. What percentage prefer online learning?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 50,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "40 / 80 = 0.5 = 50%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50%",
          },
        },
        {
          id: "cilgp-u1-an-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one stakeholder and one perspective for the issue 'should school canteens go vegetarian?'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspectives",
                statement: "Stakeholder viewpoint.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valid stakeholder, e.g. students, parents, canteen staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Perspective linked to that stakeholder, e.g. students want choice; environmentalists want lower emissions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. students — want choice and familiar food",
          },
        },
        {
          id: "cilgp-u1-an-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is an inference rather than evidence?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'The survey had 200 respondents'",
              },
              {
                id: "b",
                text: "'Rising seas will flood many coastal cities'",
              },
              {
                id: "c",
                text: "'The report was published in 2024'",
              },
              {
                id: "d",
                text: "'Sea levels are rising by 3.4 mm per year'",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "Conclusion drawn from data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Will flood' is a prediction/conclusion; the others are facts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "'Rising seas will flood many coastal cities'",
          },
        },
        {
          id: "cilgp-u1-an-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A group of 5 members must share 20 evidence cards equally. How many cards does each member get?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal sharing",
                statement: "Total / number of people.",
              },
            ],
            steps: [
              {
                reasoning: "20 / 5 = 4 cards each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cilgp-u1-an-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the assumption in this argument: 'If every student is given a laptop, school attainment will improve.'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Assumption",
                statement: "Unstated belief underlying an argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The argument assumes access to technology is the main barrier to attainment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It also assumes students will use laptops for learning, not distraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakening the assumption weakens the whole argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assumes technology access, not other factors, limits attainment",
          },
        },
        {
          id: "cilgp-u1-an-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A factory closing reduces pollution but leaves 500 workers unemployed. What does this illustrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Facts never matter",
              },
              {
                id: "b",
                text: "Evidence is always unreliable",
              },
              {
                id: "c",
                text: "Different stakeholders have different perspectives on the same issue",
              },
              {
                id: "d",
                text: "Collaboration always fails",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement: "Same issue, different impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Environment gains, workers lose — classic multi-perspective issue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Different stakeholders, different perspectives",
          },
        },
        {
          id: "cilgp-u1-an-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Each piece of analysis follows 3 steps: state the evidence, explain what it shows, link it to the issue. A student analyses 5 pieces of evidence fully. How many analysis steps were completed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Analysis chain",
                statement: "Evidence -> meaning -> link, per item.",
              },
            ],
            steps: [
              {
                reasoning: "3 steps x 5 items = 15 steps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 15.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cilgp-u1-an-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyse both sides of 'should homework be compulsory?' Give one perspective with supporting evidence for each side.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced analysis",
                statement: "Both perspectives with evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Supporters: builds independent study skills — evidence: studies linking homework to attainment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opponents: causes stress, reduces family time — evidence: wellbeing surveys.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced — no side dismissed, evidence attached to each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two perspectives, each with evidence",
          },
        },
        {
          id: "cilgp-u1-an-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is a counter-argument?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reasoning against a position",
              },
              {
                id: "b",
                text: "A voting method",
              },
              {
                id: "c",
                text: "The main claim of a text",
              },
              {
                id: "d",
                text: "A type of statistic",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-argument",
                statement: "Opposing reasoning.",
              },
            ],
            steps: [
              {
                reasoning: "Counter-arguments challenge the main position.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reasoning against a position",
          },
        },
        {
          id: "cilgp-u1-an-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A report is 12 pages long. The analysis section must fill 25% of the report. How many pages is the analysis section?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
                unit: "pages",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of total",
                statement: "Total x fraction.",
              },
            ],
            steps: [
              {
                reasoning: "25% of 12 = 0.25 x 12 = 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 3 pages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 pages",
          },
        },
        {
          id: "cilgp-u1-an-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Define inference, assumption and counter-argument. (b) Give the inference in: 'Ocean temperatures are rising, therefore coral reefs are bleaching.' (c) Identify one assumption in: 'Social media is harmful to teenagers.' (d) Give the strongest counter-argument to that claim.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis",
                statement: "Evidence vs inference; test assumptions.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All three definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 'Coral reefs are bleaching' is the inference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid assumption, e.g. all social media use is harmful, or harm outweighs benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Strong counter, e.g. social media supports connection and learning for many teens.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Definitions, inference identified, assumption tested, counter given",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-an-notes",
      title: "Analysis — notes",
      summary:
        "Consider all stakeholder perspectives; distinguish evidence from inference; test assumptions.",
      sections: [
        {
          heading: "Key idea",
          body: "Strong analysis weighs multiple viewpoints fairly.",
        },
        {
          heading: "Evidence",
          body: "Check relevance, sufficiency, reliability — not just quantity.",
        },
      ],
    },
  ],
};
