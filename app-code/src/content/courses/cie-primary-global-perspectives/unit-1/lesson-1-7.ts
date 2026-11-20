import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cipg-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 3 — Checking Sources and Facts",
  goal: "I CAN check if information is true by looking at sources carefully.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
  stage: 3,
  vocabulary: [
    { term: "Reliable", definition: "Trustworthy — likely to be true." },
    { term: "Check", definition: "To test if something is true." },
    { term: "Author", definition: "The person or group who made the information." },
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
          { name: "Reliable source", statement: "expert author, recent, checkable" },
          { name: "Check", statement: "who, when, does it match other sources" },
        ],
        workedExample: {
          problem: "Two sources say different things about a celebrity. How do you decide?",
          solution: "Check who wrote each — a news site vs a gossip blog. Look at dates and evidence. Trust the more reliable, recent source with evidence.",
        },
      },
      questions: [
        {
          id: "cipg-u1-vf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a source reliable?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Written by a knowledgeable author and recent"
                    },
                    {
                              "id": "b",
                              "text": "Has exciting pictures"
                    },
                    {
                              "id": "c",
                              "text": "Is very short"
                    },
                    {
                              "id": "d",
                              "text": "Says what you want to hear"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reliable",
                              "statement": "Trustworthy source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expert author + recent + checkable = reliable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Expert, recent, checkable"
},
        },
        {
          id: "cipg-u1-vf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things to check before believing information.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Source checking",
                              "statement": "Author, date, agreement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. who wrote it / when.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. does another source agree.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. author + date/agreement"
},
        },
        {
          id: "cipg-u1-vf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A website says 'Scientists prove chocolate cures cancer!' What is suspicious? How would you check?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Red flags",
                              "statement": "Amazing claims need checking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Too-good claim; check for evidence/source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Look for named scientists, publication, other sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Likely false/exaggerated — verify elsewhere.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Suspicious claim; verify with experts"
},
        },
        {
          id: "cipg-u1-vf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reliable, author, date, bias, verify. (b) List three source-checking questions. (c) Why do dates matter? (d) What is bias? (e) Two websites disagree — how decide? (f) Why might a source be out of date? (g) What are 'red flags' in information? (h) Design a source-evaluation checklist.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluation",
                              "statement": "Reliability, bias, verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three valid checks: who/when/evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Old info may be wrong/outdated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Unfair favouring of one side.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Compare reliability, evidence, dates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Knowledge changes over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Warning signs of unreliable info.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid checklist.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Source evaluation: reliability, bias, dates."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-vf-notes",
      title: "Checking sources — notes",
      summary: "Reliable = expert author, recent, evidence. Check who/when; beware bias and amazing claims.",
      sections: [
        { heading: "Key idea", body: "Not all information is true — verify before believing." },
        { heading: "Red flags", body: "No author, old date, one-sided, too-amazing claims." },
      ],
    },
  ],
};
