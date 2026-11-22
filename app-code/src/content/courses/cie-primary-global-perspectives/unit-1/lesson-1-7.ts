import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cipg-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 3 — Checking Sources and Facts",
  goal: "I CAN check if information is true by looking at sources carefully.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 3: evaluation",
    "Cambridge Primary Global Perspectives 0838 strand: Evaluation",
  ],
  stage: 3,
  vocabulary: [
    { term: "Reliable", definition: "Trustworthy — likely to be true." },
    { term: "Check", definition: "To test if something is true." },
    {
      term: "Author",
      definition: "The person or group who made the information.",
    },
    { term: "Date", definition: "When the information was made." },
    { term: "Bias", definition: "When information favours one side unfairly." },
    { term: "Verify", definition: "To confirm information is correct." },
  ],
  concepts: [
    {
      id: "cipg-u1-s3-sources",
      title: "Evaluating sources",
      skill: "Judge whether information is reliable at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Is it true?",
            body: "Not everything you read or hear is true. Check sources: Who made it? Are they an expert? When was it written? Does it agree with other sources? A reliable source is usually by a knowledgeable author and recent.",
          },
          {
            heading: "Red flags",
            body: "Be careful with: ALL CAPS headlines, no author, old dates, one-sided opinions, or claims that sound too amazing. Compare with another source before believing something.",
          },
        ],
        keyFormulas: [
          {
            name: "Reliable source",
            statement: "expert author, recent, checkable",
          },
          {
            name: "Check",
            statement: "who, when, does it match other sources",
          },
        ],
        workedExample: {
          problem:
            "Two sources say different things about a celebrity. How do you decide?",
          solution:
            "Check who wrote each — a news site vs a gossip blog. Look at dates and evidence. Trust the more reliable, recent source with evidence.",
        },
      },
      questions: [
        {
          id: "cipg-u1-vf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a source reliable?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Written by a knowledgeable author and recent",
              },
              {
                id: "b",
                text: "Says what you want to hear",
              },
              {
                id: "c",
                text: "Is very short",
              },
              {
                id: "d",
                text: "Has exciting pictures",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reliable",
                statement: "Trustworthy source.",
              },
            ],
            steps: [
              {
                reasoning: "Expert author + recent + checkable = reliable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Expert, recent, checkable",
          },
        },
        {
          id: "cipg-u1-vf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things to check before believing information.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source checking",
                statement: "Author, date, agreement.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. who wrote it / when.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. does another source agree.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. author + date/agreement",
          },
        },
        {
          id: "cipg-u1-vf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A website says 'Scientists prove chocolate cures cancer!' What is suspicious? How would you check?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Red flags",
                statement: "Amazing claims need checking.",
              },
            ],
            steps: [
              {
                reasoning: "Too-good claim; check for evidence/source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Look for named scientists, publication, other sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Likely false/exaggerated — verify elsewhere.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Suspicious claim; verify with experts",
          },
        },
        {
          id: "cipg-u1-vf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reliable, author, date, bias, verify. (b) List three source-checking questions. (c) Why do dates matter? (d) What is bias? (e) Two websites disagree — how decide? (f) Why might a source be out of date? (g) What are 'red flags' in information? (h) Design a source-evaluation checklist.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Reliability, bias, verification.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Three valid checks: who/when/evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Old info may be wrong/outdated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Unfair favouring of one side.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Compare reliability, evidence, dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Knowledge changes over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Warning signs of unreliable info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid checklist.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Source evaluation: reliability, bias, dates.",
          },
        },
        {
          id: "cipg-u1-vf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "When two sources agree",
              },
              {
                id: "b",
                text: "When a source is recent",
              },
              {
                id: "c",
                text: "When information favours one side unfairly",
              },
              {
                id: "d",
                text: "When information is very detailed",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Unfair one-sided information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bias means the information unfairly favours one viewpoint.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unfair one-sided information",
          },
        },
        {
          id: "cipg-u1-vf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A source-checking checklist has 5 checks. A student has completed 3 of them. (a) How many checks are done? (b) How many checks are left?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking sources",
                statement: "Working through a checklist.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 checks completed.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 - 3 = 2 checks left.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3 done; 2 left",
          },
        },
        {
          id: "cipg-u1-vf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 'red flag' in information?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The information has a date",
              },
              {
                id: "b",
                text: "It is written clearly",
              },
              {
                id: "c",
                text: "No author is named",
              },
              {
                id: "d",
                text: "Another source agrees with it",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Red flags",
                statement: "Warning signs of unreliable info.",
              },
            ],
            steps: [
              {
                reasoning: "Missing authorship is a classic red flag.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "No author named",
          },
        },
        {
          id: "cipg-u1-vf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two sources disagree about a fact. Source A is 4 years old; Source B is from this year. (a) How many years newer is Source B? (b) If a third source also agrees with Source B, how many sources agree with B?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source checking",
                statement: "Comparing dates and agreement.",
              },
            ],
            steps: [
              {
                reasoning: "(a) This year minus 4 years = 4 years newer.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) B and the third source = 2 sources agree.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4 years; 2 sources",
          },
        },
        {
          id: "cipg-u1-vf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which source is most reliable for facts about animals?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A friend's guess",
              },
              {
                id: "b",
                text: "An old advertisement",
              },
              {
                id: "c",
                text: "A cartoon website",
              },
              {
                id: "d",
                text: "A book written by a scientist",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliable sources",
                statement: "Expert authors are trustworthy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A scientist's book has expert, checkable information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Scientist's book",
          },
        },
        {
          id: "cipg-u1-vf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fact-check looked at 8 claims: 6 were true and 2 were false. (a) How many claims were true? (b) How many claims were false? (c) How many claims were checked in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 8,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Verifying",
                statement: "Counting checked claims.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 true claims.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 false claims.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 + 2 = 8 claims.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "6, 2, 8",
          },
        },
        {
          id: "cipg-u1-vf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does the date of a source matter?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Old sources are always better",
              },
              {
                id: "b",
                text: "Old information may be wrong or out of date",
              },
              {
                id: "c",
                text: "Newer sources always have pictures",
              },
              {
                id: "d",
                text: "Dates only matter for books",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking dates",
                statement: "Knowledge changes over time.",
              },
            ],
            steps: [
              {
                reasoning: "Old information may no longer be accurate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Old info may be outdated",
          },
        },
        {
          id: "cipg-u1-vf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class checked 8 websites about volcanoes: 5 were reliable and 3 were not. They then checked 4 more websites and found 3 more reliable ones. (a) How many of the first 8 were reliable? (b) How many were not reliable? (c) How many reliable websites have they found in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 8,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating sources",
                statement: "Counting reliable sources.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 of the first 8 were reliable.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 8 - 5 = 3 not reliable.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 5 + 3 = 8 reliable in total.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "5, 3, 8",
          },
        },
        {
          id: "cipg-u1-vf-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A headline in ALL CAPS says 'SHOCKING NEWS!!!' with no author. Why should you be careful?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "You should believe it immediately",
              },
              {
                id: "b",
                text: "Headlines cannot contain news",
              },
              {
                id: "c",
                text: "ALL CAPS headlines are always true",
              },
              {
                id: "d",
                text: "Amazing claims without evidence or an author are red flags",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Red flags",
                statement: "Amazing claims need checking.",
              },
            ],
            steps: [
              {
                reasoning: "Loud claims with no evidence are suspicious.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Suspicious claim; verify elsewhere",
          },
        },
        {
          id: "cipg-u1-vf-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three sources give different dates for the same event: Source A is 10 years old, Source B is 5 years old, Source C is 1 year old. (a) Which source is oldest? (b) Which source is newest? (c) How many years older is Source A than Source C? (d) How many years older is Source B than Source C?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 10,
              },
              {
                label: "b",
                answer: 1,
              },
              {
                label: "c",
                answer: 9,
              },
              {
                label: "d",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking dates",
                statement: "Comparing source ages.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Oldest = 10 years (Source A).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Newest = 1 year (Source C).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 10 - 1 = 9 years older.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 5 - 1 = 4 years older.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "10, 1, 9, 4",
          },
        },
        {
          id: "cipg-u1-vf-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should you do before believing surprising information?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Check it against other reliable sources",
              },
              {
                id: "b",
                text: "Ignore all information",
              },
              {
                id: "c",
                text: "Believe it because it is surprising",
              },
              {
                id: "d",
                text: "Share it with everyone first",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Verifying",
                statement: "Confirm with other sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cross-checking with reliable sources verifies claims.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Check other reliable sources",
          },
        },
        {
          id: "cipg-u1-vf-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define reliable, author, bias, verify. (b) Give two questions to ask when checking a source. (c) Why do dates matter when judging information? (d) What is bias and why is it a problem? (e) Two websites disagree about the same fact — how do you decide? (f) List three 'red flags' in information. (g) Why compare information with another source before believing it? (h) Design a four-question source-checking checklist.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Reliability, bias, verification.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Two valid checks: who wrote it? when? does it match other sources?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Old information may be wrong or outdated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Unfair favouring of one side; misleads readers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Compare reliability, evidence and dates of both.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Three valid red flags: no author, old date, amazing claims, one-sided.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Agreement between sources makes truth more likely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid four-question checklist.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Source evaluation: reliability, bias, dates, verification.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-vf-notes",
      title: "Checking sources — notes",
      summary:
        "Reliable = expert author, recent, evidence. Check who/when; beware bias and amazing claims.",
      sections: [
        {
          heading: "Key idea",
          body: "Not all information is true — verify before believing.",
        },
        {
          heading: "Red flags",
          body: "No author, old date, one-sided, too-amazing claims.",
        },
      ],
    },
  ],
};
