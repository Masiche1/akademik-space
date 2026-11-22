import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ciegp-u1-lesson-1-2",
  code: "1-2",
  title: "Research Methods and Sources",
  goal: "I CAN gather reliable information using appropriate research methods and sources.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: research methods",
    "0457: sources",
  ],

  vocabulary: [
    {
      term: "Primary source",
      definition: "Original data/document created first-hand.",
    },
    {
      term: "Secondary source",
      definition: "Information about primary sources.",
    },
    { term: "Reliability", definition: "Trustworthiness of a source." },
    { term: "Validity", definition: "Whether source measures what it claims." },
    { term: "Bias", definition: "Slanted presentation favouring one view." },
    {
      term: "Corroboration",
      definition: "Cross-checking claims across sources.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u1-s2-methods",
      title: "Research methods and sources",
      skill: "Gather reliable evidence at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Source types",
            body: "Primary sources: original data (surveys, interviews, official statistics, documents). Secondary sources: analysis/commentary (news, books, reports). Both needed — primary for raw data, secondary for context.",
          },
          {
            heading: "Evaluating reliability",
            body: "Check: author credentials, publication date, purpose, bias, corroboration across sources. Reputable organisations (UN, NGOs, peer-reviewed journals) more reliable than anonymous blogs or social media.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "original data" },
          { name: "Secondary", statement: "analysis/commentary" },
          { name: "Corroborate", statement: "verify across sources" },
        ],
        workedExample: {
          problem:
            "Evaluate this source for a climate research project: 'A blog post claiming vaccines cause autism'.",
          solution:
            "Unreliable: anonymous author, no evidence, debunked claim, biased purpose. Use peer-reviewed medical journals instead.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-mr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A news article",
              },
              {
                id: "b",
                text: "A book about history",
              },
              {
                id: "c",
                text: "A Wikipedia page",
              },
              {
                id: "d",
                text: "Original data created first-hand",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "Original data.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = original first-hand data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Original first-hand data",
          },
        },
        {
          id: "ciegp-u1-mr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corroboration and why is it important?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Multi-source verification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corroboration = confirm across independent sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increases reliability; single sources may be wrong.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-source verification",
          },
        },
        {
          id: "ciegp-u1-mr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three criteria for evaluating source reliability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Source evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Author credentials/expertise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Publication date/relevance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Purpose/bias/corroboration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Credentials, date, bias, corroboration",
          },
        },
        {
          id: "ciegp-u1-mr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary source, secondary source, reliability, validity, bias, corroboration. (b) When use primary vs secondary? (c) What is bias? (d) Why check publication dates? (e) Why are social media posts weak evidence? (f) List 3 reputable source types for global issues. (g) How do you corroborate a claim? (h) Evaluate: 'UN report on refugee statistics' as a source.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research methods",
                statement: "Sources, reliability, corroboration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Primary=raw data; secondary=context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Slanted favouring one view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Old data may be outdated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Unverified, often opinion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three valid source types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Cross-check across independent sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Reliable — UN authority, official data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Research methods and source evaluation.",
          },
        },
        {
          id: "ciegp-u1-mr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a secondary source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Official statistics collected by a ministry",
              },
              {
                id: "b",
                text: "A newspaper article analysing a government report",
              },
              {
                id: "c",
                text: "Your own survey responses",
              },
              {
                id: "d",
                text: "An interview you conducted yourself",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary source",
                statement: "Information about primary sources.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary = analysis/commentary on primary data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A newspaper article analysing a report",
          },
        },
        {
          id: "ciegp-u1-mr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two weaknesses of relying on a single source for a claim.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source reliability",
                statement: "Single sources are risky.",
              },
            ],
            steps: [
              {
                reasoning: "It may be biased or simply wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The claim cannot be corroborated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Bias/error risk + no corroboration",
          },
        },
        {
          id: "ciegp-u1-mr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A blog post with no named author, no date and no evidence is most likely:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Unreliable",
              },
              {
                id: "b",
                text: "A primary source",
              },
              {
                id: "c",
                text: "Highly reliable",
              },
              {
                id: "d",
                text: "Peer-reviewed",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability",
                statement: "Trustworthiness of a source.",
              },
            ],
            steps: [
              {
                reasoning: "No author, date or evidence fails reliability checks.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unreliable",
          },
        },
        {
          id: "ciegp-u1-mr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would evaluate a news article as a source for a global issue project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Check credentials, date, bias, corroboration.",
              },
            ],
            steps: [
              {
                reasoning: "Check the publisher and journalist's credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check publication date and relevance to the issue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weigh bias and corroborate key claims elsewhere.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Credentials + date + bias + corroboration",
          },
        },
        {
          id: "ciegp-u1-mr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Corroborating a claim means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Checking it against independent sources",
              },
              {
                id: "b",
                text: "Citing only one source",
              },
              {
                id: "c",
                text: "Deleting it from your notes",
              },
              {
                id: "d",
                text: "Repeating it louder",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Cross-checking across sources.",
              },
            ],
            steps: [
              {
                reasoning: "Corroboration = verify across independent sources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Checking across independent sources",
          },
        },
        {
          id: "ciegp-u1-mr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three checks you would apply to a survey question before using it in research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey design",
                statement: "Clear, unbiased, appropriate options.",
              },
            ],
            steps: [
              {
                reasoning: "Wording must be clear, unambiguous and unbiased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Response options must cover all reasonable answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Question must actually measure the intended variable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear wording + full options + measures the right thing",
          },
        },
        {
          id: "ciegp-u1-mr-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why are peer-reviewed academic journals generally more reliable than personal blogs?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source hierarchy",
                statement: "Peer review raises reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Articles are checked by experts before publication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They cite evidence and named, credentialled authors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Expert review + evidence + named authors",
          },
        },
        {
          id: "ciegp-u1-mr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the strengths and weaknesses of surveys and interviews for researching 'teenagers' attitudes to screen time'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Method choice",
                statement: "Breadth vs depth trade-off.",
              },
            ],
            steps: [
              {
                reasoning: "Surveys give breadth and representativeness; interviews give depth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surveys risk superficial answers; interviews risk small biased samples.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surveys suit measuring attitudes at scale; interviews suit exploring reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Best approach combines both to triangulate findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Breadth vs depth — combine both for rigour",
          },
        },
        {
          id: "ciegp-u1-mr-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a source, 'validity' means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is very long",
              },
              {
                id: "b",
                text: "It is written in English",
              },
              {
                id: "c",
                text: "It is always correct",
              },
              {
                id: "d",
                text: "It measures what it claims to measure",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validity",
                statement: "Measures what it claims.",
              },
            ],
            steps: [
              {
                reasoning: "Validity = the source measures what it claims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Measures what it claims",
          },
        },
        {
          id: "ciegp-u1-mr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "List two features of a reliable website you could use in GP research.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Website evaluation",
                statement: "Transparency signals reliability.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. named authors with credentials and publication dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. links to reputable sources or a reputable organisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Named authors/dates + reputable backing",
          },
        },
        {
          id: "ciegp-u1-mr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which source is most appropriate for current global refugee statistics?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A UNHCR report",
              },
              {
                id: "b",
                text: "A personal blog",
              },
              {
                id: "c",
                text: "An anonymous social media post",
              },
              {
                id: "d",
                text: "A celebrity tweet",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source selection",
                statement: "Reputable organisations for official data.",
              },
            ],
            steps: [
              {
                reasoning: "UNHCR is the authoritative body for refugee data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A UNHCR report",
          },
        },
        {
          id: "ciegp-u1-mr-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A classmate plans GP research on 'online privacy' using only TikTok videos. Evaluate this approach and suggest improvements.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Research design",
                statement: "Sources, bias, corroboration, mixed methods.",
              },
            ],
            steps: [
              {
                reasoning: "TikTok is opinion-heavy, unverified and algorithm-biased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Claims cannot be corroborated against independent sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use reputable sources: regulators, NGOs, peer-reviewed studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add primary data such as a short survey or interviews.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acknowledge remaining limitations honestly in the project.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weak single-source approach; replace with reputable + corroborated + primary data",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-mr-notes",
      title: "Research methods — notes",
      summary:
        "Primary=original data, secondary=analysis. Evaluate credentials, dates, bias; corroborate claims.",
      sections: [
        {
          heading: "Key idea",
          body: "Reliable research uses verified, corroborated sources.",
        },
        {
          heading: "Bias",
          body: "Check purpose — who benefits from this information?",
        },
      ],
    },
  ],
};
