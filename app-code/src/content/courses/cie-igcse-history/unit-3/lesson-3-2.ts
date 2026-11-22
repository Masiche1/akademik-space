import type { Lesson } from "../../../types.ts";

export const lesson352: Lesson = {
  id: "cieihis-u3-lesson-3-2",
  code: "3-2",
  title: "Historical Skills: Source Analysis",
  goal: "I CAN analyse historical sources for reliability, bias and usefulness.",
  standards: ["Cambridge IGCSE History 0470", "Paper 2: source analysis"],

  vocabulary: [
    {
      term: "Primary source",
      definition: "Source created at the time of events.",
    },
    { term: "Secondary source", definition: "Source created after events." },
    { term: "Reliability", definition: "Trustworthiness/accuracy of source." },
    { term: "Bias", definition: "Prejudice affecting source perspective." },
    {
      term: "Usefulness",
      definition: "Value of source for answering question.",
    },
    {
      term: "Corroboration",
      definition: "Cross-checking sources for accuracy.",
    },
  ],
  concepts: [
    {
      id: "cieihis-u3-s2-source",
      title: "Source analysis",
      skill: "Analyse historical sources critically.",
      lesson: {
        sections: [
          {
            heading: "Source evaluation",
            body: "Who created it? When? Why? What's the purpose? Is it primary or secondary? What's the content? Who is the intended audience?",
          },
          {
            heading: "Reliability vs usefulness",
            body: "Reliable = accurate/trustworthy. Useful = relevant to question. A source can be reliable but not useful, or useful but biased/unreliable.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "created at the time" },
          { name: "Secondary", statement: "created after" },
          { name: "Reliability", statement: "trustworthiness" },
        ],
        workedExample: {
          problem:
            "A government report praising its own policies. How would you evaluate it?",
          solution:
            "Likely biased — government has interest in positive portrayal. Useful for understanding official perspective but not neutral facts.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-src-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Source created at the time of events",
              },
              {
                id: "b",
                text: "A type of map",
              },
              {
                id: "c",
                text: "Source created after events",
              },
              {
                id: "d",
                text: "A modern textbook",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "Contemporary source.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = created at time of events.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Contemporary source",
          },
        },
        {
          id: "cieihis-u3-src-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between reliability and usefulness?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability vs usefulness",
                statement: "Trust vs relevance.",
              },
            ],
            steps: [
              {
                reasoning: "Reliable = accurate/trustworthy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Useful = relevant to question.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trust vs relevance",
          },
        },
        {
          id: "cieihis-u3-src-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you evaluate a historical source?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Critical analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Who created it? When? Why?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "What's the purpose? Audience?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reliability, bias, usefulness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Who/when/why/purpose analysis",
          },
        },
        {
          id: "cieihs-u3-src-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary source, secondary source, reliability, bias, usefulness, corroboration. (b) What is a primary source? (c) What is a secondary source? (d) What is reliability? (e) What is bias? (f) How do you evaluate sources? (g) What is corroboration? (h) Evaluate a government report praising its own policies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source analysis",
                statement: "Critical evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Contemporary source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Post-event source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Trustworthiness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Prejudice affecting perspective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Who/when/why/purpose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Cross-checking sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Biased but useful for official view.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Source analysis skills.",
          },
        },
        {
          id: "cieihis-u3-src-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a secondary source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A source created after the events it describes",
              },
              {
                id: "b",
                text: "A source written by a government official",
              },
              {
                id: "c",
                text: "A source created at the time of the events",
              },
              {
                id: "d",
                text: "A photograph taken during the event",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary source",
                statement: "Post-event source.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A secondary source is created after the events it describes, such as textbooks or later histories.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A source created after the events it describes",
          },
        },
        {
          id: "cieihis-u3-src-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A history textbook about the Second World War was published in 2000, five years after the war ended in 1945. How many years after the war's end was it published?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 55,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Source date gap",
                statement: "2000 minus 1945.",
              },
            ],
            steps: [
              {
                reasoning: "2000 minus 1945 = 55 years after the war ended.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "55",
          },
        },
        {
          id: "cieihis-u3-src-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corroboration in historical source analysis?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Cross-checking sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cross-checking claims across multiple sources to verify accuracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Agreement between independent sources increases confidence in a claim.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cross-checking sources for accuracy",
          },
        },
        {
          id: "cieihis-u3-src-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A government report praises its own policies. What is the main weakness of this source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It contains no factual information",
              },
              {
                id: "b",
                text: "It is a secondary source",
              },
              {
                id: "c",
                text: "It is likely biased in favour of the government",
              },
              {
                id: "d",
                text: "It was written too long ago to be useful",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source bias",
                statement: "Purpose affects perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A government has an interest in presenting its policies positively, so the report is likely biased.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It is likely biased in favour of the government",
          },
        },
        {
          id: "cieihis-u3-src-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A memoir describing events of 1955 was published in 1970 — how many years after the events? (b) A biography of a 1945 leader was published in 1995 — how many years later?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
              {
                label: "b",
                answer: 50,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Source gaps",
                statement: "15 and 50 years.",
              },
            ],
            steps: [
              {
                reasoning: "1970 minus 1955 = 15 years.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "1995 minus 1945 = 50 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 15, b) 50",
          },
        },
        {
          id: "cieihis-u3-src-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "When evaluating a historical source, which question is most important for judging its reliability?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "How many copies were sold?",
              },
              {
                id: "b",
                text: "Who created it and why?",
              },
              {
                id: "c",
                text: "How long is the source?",
              },
              {
                id: "d",
                text: "What colour is the cover?",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Author and purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Knowing who created a source and why reveals its perspective and likely bias, which is central to judging reliability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Who created it and why?",
          },
        },
        {
          id: "cieihis-u3-src-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a biased source can still be useful to historians.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Biased sources",
                statement: "Usefulness despite bias.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A biased source still reveals the perspective, aims and propaganda of its creator or group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can provide evidence about attitudes, policies or events even if its account is one-sided.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When corroborated against other sources, its bias can be identified and its reliable content extracted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bias reveals perspective; useful with corroboration",
          },
        },
        {
          id: "cieihis-u3-src-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best describes the difference between a reliable source and a useful source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Useful sources are always written by historians",
              },
              {
                id: "b",
                text: "A source cannot be reliable and useful at the same time",
              },
              {
                id: "c",
                text: "Reliable and useful mean exactly the same thing",
              },
              {
                id: "d",
                text: "Reliable means trustworthy; useful means relevant to the question being asked",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliability vs usefulness",
                statement: "Trust vs relevance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reliability concerns accuracy and trustworthiness; usefulness concerns relevance to the specific historical question.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Reliable means trustworthy; useful means relevant to the question being asked",
          },
        },
        {
          id: "cieihis-u3-src-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An event occurred in 1963 and a biography of a participant was published in 2003 — how many years later? (b) The Cold War began in 1947 and a history of it was published in 1997 — how many years later?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 40,
              },
              {
                label: "b",
                answer: 50,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Source gaps",
                statement: "40 and 50 years.",
              },
            ],
            steps: [
              {
                reasoning: "2003 minus 1963 = 40 years.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "1997 minus 1947 = 50 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 40, b) 50",
          },
        },
        {
          id: "cieihis-u3-src-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A government publishes a report praising its handling of a crisis. Assess the usefulness of this source for a historian studying the crisis.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Source usefulness",
                statement: "Judged answer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: the source is useful but limited — it reveals the government's official perspective but is likely biased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Useful aspects: access to official information, insight into government thinking and propaganda.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: self-interest produces bias, omissions and exaggeration; cannot be trusted for neutral facts without corroboration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: best used alongside independent sources to separate fact from official narrative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Useful for official perspective but biased — corroborate",
          },
        },
        {
          id: "cieihis-u3-src-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bias in a historical source?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A factual error in the source",
              },
              {
                id: "b",
                text: "The language the source is written in",
              },
              {
                id: "c",
                text: "Prejudice affecting the source's perspective",
              },
              {
                id: "d",
                text: "The length of the source",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Prejudice in perspective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bias is prejudice or one-sidedness that affects a source's perspective and reliability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Prejudice affecting the source's perspective",
          },
        },
        {
          id: "cieihis-u3-src-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how historians use corroboration to evaluate the reliability of sources.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Corroboration",
                statement: "Cross-checking method.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Historians compare claims across multiple independent sources to see whether they agree.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Agreement between sources increases confidence that a claim is accurate; disagreement reveals bias or error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Corroboration helps build a more reliable picture than any single source can provide.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compare sources; agreement raises confidence",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-src-notes",
      title: "Source analysis — notes",
      summary:
        "Primary=contemporary; secondary=later. Evaluate who/when/why/purpose. Reliability≠usefulness.",
      sections: [
        {
          heading: "Key idea",
          body: "Critical source analysis reveals perspective, bias and limitations.",
        },
        {
          heading: "Corroboration",
          body: "Cross-check multiple sources to verify accuracy.",
        },
      ],
    },
  ],
};
