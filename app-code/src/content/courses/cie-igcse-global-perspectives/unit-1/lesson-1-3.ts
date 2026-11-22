import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ciegp-u1-lesson-1-3",
  code: "1-3",
  title: "Analysing Perspectives and Evidence",
  goal: "I CAN analyse multiple perspectives and evaluate evidence quality on global issues.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: analysis",
    "0457: perspectives",
  ],

  vocabulary: [
    {
      term: "Perspective",
      definition: "Viewpoint shaped by experience/culture.",
    },
    {
      term: "Stakeholder",
      definition: "Person/group affected by or affecting issue.",
    },
    { term: "Evidence", definition: "Facts/data supporting claims." },
    { term: "Inference", definition: "Conclusion drawn from evidence." },
    { term: "Counter-argument", definition: "Reasoning against a position." },
    { term: "Assumption", definition: "Unstated belief underlying argument." },
  ],
  concepts: [
    {
      id: "ciegp-u1-s3-persp",
      title: "Perspectives and evidence analysis",
      skill: "Analyse viewpoints and evidence at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Multiple perspectives",
            body: "Every global issue affects stakeholders differently. Map who gains, who loses, who's excluded. Consider cultural, economic, political contexts shaping each viewpoint.",
          },
          {
            heading: "Evidence evaluation",
            body: "Check relevance (does it address the question?), sufficiency (enough evidence?), reliability (trustworthy source?). Distinguish fact from inference; identify assumptions underlying claims.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          {
            name: "Evidence check",
            statement: "relevant + sufficient + reliable",
          },
        ],
        workedExample: {
          problem:
            "Analyse perspectives on 'should cities ban cars from centres?'",
          solution:
            "Supporters: cleaner air, safer streets. Opponents: accessibility, business impact. Evidence needed: air quality data, economic studies, resident surveys.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Person/group affected by an issue",
              },
              {
                id: "b",
                text: "A voting system",
              },
              {
                id: "c",
                text: "A type of evidence",
              },
              {
                id: "d",
                text: "A research tool",
              },
            ],
            correctChoiceId: "a",
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
                reasoning: "Stakeholders affected by/affect issues.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Affected person/group",
          },
        },
        {
          id: "ciegp-u1-pe-q2",
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
                reasoning:
                  "Evidence = facts/data; inference = conclusion drawn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distinguish to avoid treating opinion as fact.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Data vs conclusion",
          },
        },
        {
          id: "ciegp-u1-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify two perspectives on 'social media use by teenagers' with evidence for each.",
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
                  "e.g. Parents: safety concerns — cyberbullying stats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Teens: social connection — usage surveys.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both perspectives + evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two perspectives with evidence",
          },
        },
        {
          id: "ciegp-u1-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define perspective, stakeholder, evidence, inference, counter-argument, assumption. (b) List 4 stakeholders in 'should schools ban phones?'. (c) Give one perspective + evidence for each. (d) What is an assumption? (e) Why consider counter-arguments? (f) How do you evaluate evidence quality? (g) Find the inference in: 'Pollution is rising, therefore health will worsen.' (h) Analyse both sides of 'universal basic income'.",
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
                reasoning: "(e) Tests position strength.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Relevance, sufficiency, reliability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) 'Health will worsen' is inference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced UBI analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perspective and evidence analysis.",
          },
        },
        {
          id: "ciegp-u1-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a counter-argument?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A voting method",
              },
              {
                id: "b",
                text: "Reasoning against a position",
              },
              {
                id: "c",
                text: "A type of evidence",
              },
              {
                id: "d",
                text: "A research survey",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-argument",
                statement: "Reasoning against a position.",
              },
            ],
            steps: [
              {
                reasoning: "Counter-argument = the opposing reasoning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reasoning against a position",
          },
        },
        {
          id: "ciegp-u1-pe-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should a GP analysis consider perspectives of stakeholders who are excluded from decision-making?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder analysis",
                statement: "Include excluded voices.",
              },
            ],
            steps: [
              {
                reasoning: "They often bear the costs of decisions made by others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ignoring them gives an incomplete, biased picture of the issue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "They bear costs; ignoring them biases the analysis",
          },
        },
        {
          id: "ciegp-u1-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the claim 'Air pollution is rising, so hospital admissions will increase', the inference is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Air pollution is rising",
              },
              {
                id: "b",
                text: "Both clauses are evidence",
              },
              {
                id: "c",
                text: "There is no inference",
              },
              {
                id: "d",
                text: "Hospital admissions will increase",
              },
            ],
            correctChoiceId: "d",
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
                reasoning: "'Will increase' is the conclusion drawn, not the fact stated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hospital admissions will increase",
          },
        },
        {
          id: "ciegp-u1-pe-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the hidden assumption in this argument: 'We should give every child a laptop because technology improves learning.'",
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
                reasoning: "Assumes technology itself improves learning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Assumes all children can access/use laptops equally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ignores alternative explanations like teacher quality or home support.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Technology improves learning + equal access assumed",
          },
        },
        {
          id: "ciegp-u1-pe-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of sufficient evidence for an analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A single statistic with no context",
              },
              {
                id: "b",
                text: "One person's opinion",
              },
              {
                id: "c",
                text: "Corroborated data from multiple reliable sources",
              },
              {
                id: "d",
                text: "A headline only",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence quality",
                statement: "Sufficient = enough + corroborated.",
              },
            ],
            steps: [
              {
                reasoning: "Sufficient evidence covers the claim from reliable, corroborated sources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Corroborated data from reliable sources",
          },
        },
        {
          id: "ciegp-u1-pe-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three stakeholders for the issue 'Should fast food advertising to children be banned?' and give one concern for each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder mapping",
                statement: "Identify affected parties and concerns.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. children — health and informed choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. parents — cost vs health concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. food companies — profits and employment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Three valid stakeholders with concerns",
          },
        },
        {
          id: "ciegp-u1-pe-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a fact and an opinion in evidence evaluation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fact vs opinion",
                statement: "Verifiable vs subjective.",
              },
            ],
            steps: [
              {
                reasoning: "Facts can be verified with evidence; opinions are subjective views.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both may appear in sources — distinguish before using as evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Verifiable vs subjective",
          },
        },
        {
          id: "ciegp-u1-pe-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse two contrasting perspectives on 'universal basic income' and the evidence each side might use.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perspective analysis",
                statement: "Balanced viewpoints with evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Supporters: poverty reduction, dignity — pilot programme results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Critics: cost, work incentive, inflation — fiscal studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both perspectives must be fairly represented without judgement yet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence quality differs — weigh reliability of each source type.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two balanced perspectives with appropriate evidence",
          },
        },
        {
          id: "ciegp-u1-pe-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evidence is most useful when it is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "In a foreign language",
              },
              {
                id: "b",
                text: "Long and complicated",
              },
              {
                id: "c",
                text: "Recent regardless of source",
              },
              {
                id: "d",
                text: "Relevant, sufficient and reliable",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence check",
                statement: "Relevant + sufficient + reliable.",
              },
            ],
            steps: [
              {
                reasoning: "The three criteria for useful evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Relevant, sufficient and reliable",
          },
        },
        {
          id: "ciegp-u1-pe-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might two stakeholders describe the same event differently? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspectives",
                statement: "Position shapes perception.",
              },
            ],
            steps: [
              {
                reasoning: "Different positions, interests and experiences shape interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. a factory closure seen as 'job losses' by workers vs 'pollution reduction' by residents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Position/interests shape interpretation — example given",
          },
        },
        {
          id: "ciegp-u1-pe-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which perspective is most likely missing from a report written only by a multinational company about its supply chain?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The company's management",
              },
              {
                id: "b",
                text: "The factory workers and local communities affected",
              },
              {
                id: "c",
                text: "The company's shareholders",
              },
              {
                id: "d",
                text: "The report's editors",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective gaps",
                statement: "Author's position determines included voices.",
              },
            ],
            steps: [
              {
                reasoning: "Affected workers and communities are typically excluded from company-authored reports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Factory workers and local communities",
          },
        },
        {
          id: "ciegp-u1-pe-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A classmate writes: 'Obesity is caused by lazy individuals who choose badly.' Analyse this claim from a structural perspective and identify two missing viewpoints.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural analysis",
                statement: "Systems, not just individuals.",
              },
            ],
            steps: [
              {
                reasoning: "The claim ignores structural causes: food environments, pricing, marketing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ignores economic constraints — healthy food often costs more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Missing viewpoint: low-income communities' access to fresh food.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Missing viewpoint: food industry marketing and regulation influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced conclusion: individual choice exists but is constrained by systems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structural causes + food industry + access perspectives missing",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-pe-notes",
      title: "Analysis — notes",
      summary:
        "Map stakeholder perspectives; distinguish evidence from inference; test assumptions.",
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
