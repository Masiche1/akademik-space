import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cilgp-u1-lesson-1-1",
  code: "1-1",
  title: "Researching Global Issues",
  goal: "I CAN formulate research questions on global issues and gather reliable information.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Research",
    "Cambridge Global Perspectives skills: research",
  ],

  vocabulary: [
    {
      term: "Global issue",
      definition: "A problem affecting people across countries.",
    },
    {
      term: "Research question",
      definition: "A focused question guiding investigation.",
    },
    {
      term: "Primary source",
      definition: "Original data/document created first-hand.",
    },
    {
      term: "Secondary source",
      definition: "Information about primary sources.",
    },
    { term: "Bias", definition: "Slanted presentation favouring one view." },
    {
      term: "Corroboration",
      definition: "Checking claims against multiple sources.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u1-s1-res",
      title: "Research skills for global issues",
      skill:
        "Formulate questions and gather reliable evidence at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Choosing a question",
            body: "Good research questions are specific and arguable: 'How does climate change affect food production in South Asia?' not 'Is climate change bad?' Frame questions that can be investigated with evidence.",
          },
          {
            heading: "Reliable sources",
            body: "Use reputable organisations (UN, NGOs, peer-reviewed studies), cross-check claims across sources, and note publication dates. Social media posts are leads, not evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Research question",
            statement: "specific + arguable + investigable",
          },
          { name: "Corroborate", statement: "verify across 2+ sources" },
        ],
        workedExample: {
          problem: "Turn 'poverty is bad' into a researchable question.",
          solution:
            "'What are the main causes of urban poverty in one developing country, and which solutions have shown evidence of success?'",
        },
      },
      questions: [
        {
          id: "cilgp-u1-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good research question?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Short and simple",
              },
              {
                id: "b",
                text: "Is famous",
              },
              {
                id: "c",
                text: "Has a yes/no answer",
              },
              {
                id: "d",
                text: "Specific, arguable, investigable",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Focused investigable query.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Good questions are specific, arguable, answerable with evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Specific + arguable + investigable",
          },
        },
        {
          id: "cilgp-u1-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a primary and secondary source? Give an example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Source types",
                statement: "Original vs about.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary = original (survey data, treaty); secondary = about it (news report).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples given.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Original vs commentary",
          },
        },
        {
          id: "cilgp-u1-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should you corroborate a claim before using it? What does 'corroboration' mean?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Corroboration",
                statement: "Multi-source verification.",
              },
            ],
            steps: [
              {
                reasoning: "Single sources may be wrong or biased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Corroboration = confirm across independent sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strengthens reliability of evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Verify across sources for reliability",
          },
        },
        {
          id: "cilgp-u1-rs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define global issue, research question, primary source, secondary source, bias, corroboration. (b) Improve this question: 'Is plastic bad?' (c) Give 3 reliable source types for climate research. (d) What is bias in a source? (e) Why check publication dates? (f) Why are social media posts weak evidence? (g) Design a research plan for 'water scarcity in one region'. (h) Evaluate this source: anonymous blog post claiming 'vaccines cause autism'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research",
                statement: "Questions, sources, reliability.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Improved specific question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Three valid source types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Slanted favouring one view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Old data may be outdated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Unverified, often opinion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid research plan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Unreliable — debunked claim, no sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Research methodology and source evaluation.",
          },
        },
        {
          id: "cilgp-u1-rs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which source is most reliable for statistics on global literacy rates?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A viral social media video",
              },
              {
                id: "b",
                text: "A United Nations report",
              },
              {
                id: "c",
                text: "An anonymous blog post",
              },
              {
                id: "d",
                text: "A celebrity's opinion tweet",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliable sources",
                statement: "Reputable organisations provide trustworthy data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "UN reports are reputable, data-based and corroborated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A United Nations report",
          },
        },
        {
          id: "cilgp-u1-rs-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a class survey of 150 students, 45 recycle regularly. What percentage recycle regularly?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 30,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Part divided by whole, times 100.",
              },
            ],
            steps: [
              {
                reasoning: "45 / 150 = 0.3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.3 x 100 = 30%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "cilgp-u1-rs-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons why checking a source's publication date matters in research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source currency",
                statement: "Old data may be outdated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Old data may no longer reflect current reality (e.g. technology, statistics).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recent sources are more likely to be accurate for fast-changing global issues.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Outdated data risk; currency matters for changing issues",
          },
        },
        {
          id: "cilgp-u1-rs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is bias in a source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Slanted presentation favouring one view",
              },
              {
                id: "b",
                text: "A type of primary source",
              },
              {
                id: "c",
                text: "A research question",
              },
              {
                id: "d",
                text: "A correct fact",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Slanted presentation.",
              },
            ],
            steps: [
              {
                reasoning: "Bias favours one viewpoint over others.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Slanted presentation favouring one view",
          },
        },
        {
          id: "cilgp-u1-rs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Your team must check 9 claims during research. If each of 3 members checks the same number, how many claims does each member check?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Sharing work",
                statement: "Total divided by number of people.",
              },
            ],
            steps: [
              {
                reasoning: "9 / 3 = 3 claims each.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cilgp-u1-rs-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite the weak question 'Is fast fashion bad?' as a strong research question.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Question framing",
                statement: "Specific + arguable + investigable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies the weakness: vague, yes/no, not arguable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds specificity (e.g. environmental impact of fast fashion).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Question is arguable and investigable with evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'What are the main environmental impacts of fast fashion, and which alternatives show evidence of lower impact?'",
          },
        },
        {
          id: "cilgp-u1-rs-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are peer-reviewed studies generally more reliable than personal blogs?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They have more pictures",
              },
              {
                id: "b",
                text: "They are always shorter",
              },
              {
                id: "c",
                text: "They are checked by other experts before publication",
              },
              {
                id: "d",
                text: "They are free to read",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Peer review adds expert checking.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer review means experts verified methods and claims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Expert checking before publication",
          },
        },
        {
          id: "cilgp-u1-rs-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A presentation lasts 10 minutes. Source evaluation is allocated 40% of the time. How many minutes is that?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
                unit: "minutes",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of time",
                statement: "Total x percentage.",
              },
            ],
            steps: [
              {
                reasoning: "40% of 10 minutes = 0.4 x 10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.4 x 10 = 4 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 minutes",
          },
        },
        {
          id: "cilgp-u1-rs-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A website claims '97% of scientists agree climate change is human-caused' but gives no author, method or sample. Evaluate this source for your research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Check authorship, method, transparency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing author and method — cannot verify credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Statistic may be real but needs corroboration from named studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use as a lead only; find the original peer-reviewed source.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unverifiable claim — treat as lead, corroborate with named studies",
          },
        },
        {
          id: "cilgp-u1-rs-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a primary source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A textbook summary of findings",
              },
              {
                id: "b",
                text: "An encyclopedia entry",
              },
              {
                id: "c",
                text: "A news article about the survey",
              },
              {
                id: "d",
                text: "Original survey data collected by researchers",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "Original first-hand data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original data is primary; reports about it are secondary.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Original survey data",
          },
        },
        {
          id: "cilgp-u1-rs-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Of 30 students in a class, 20% did not complete their homework. How many students completed it?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 24,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage complement",
                statement: "100% - given percentage = remaining share.",
              },
            ],
            steps: [
              {
                reasoning: "80% completed: 0.8 x 30 = 24.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 24 students.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cilgp-u1-rs-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a mini research plan for 'Should schools ban mobile phones?' covering: (a) one strong research question, (b) two reliable source types, (c) how you will check for bias, (d) how you will corroborate your key claims.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research plan",
                statement: "Question, sources, bias check, corroboration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Specific arguable question, e.g. 'How does a phone ban affect student wellbeing and attainment?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two reputable sources, e.g. education studies, government reports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid bias check, e.g. compare perspectives of students, teachers, parents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid corroboration method, e.g. verify each claim across two independent sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Complete research plan with question, sources, bias check and corroboration",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-rs-notes",
      title: "Research — notes",
      summary:
        "Specific arguable questions; primary vs secondary sources; corroborate claims across sources.",
      sections: [
        {
          heading: "Key idea",
          body: "Good research starts with a focused, answerable question.",
        },
        {
          heading: "Sources",
          body: "Trust reputable organisations; verify across multiple sources.",
        },
      ],
    },
  ],
};
