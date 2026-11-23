import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apgov-u2-lesson-2-1",
  code: "2-1",
  title: "Public Opinion and Political Socialization",
  goal: "I CAN explain how opinions form and how they're measured.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Political socialization", definition: "Process by which people acquire political beliefs — family, school, media, peers." },
    { term: "Public opinion", definition: "Aggregate of individual attitudes on political issues." },
    { term: "Sampling", definition: "Method of selecting representative subset of population for surveys." },
    { term: "Margin of error", definition: "Statistical uncertainty in polls (e.g., ±3%)." },
    { term: "Likert scale", definition: "Survey response format from strongly disagree to strongly agree." },
    { term: "Push poll", definition: "Deceptive survey designed to influence rather than measure opinion." },
  ],
  concepts: [
    {
      id: "apgov-u2-public-opinion",
      title: "How opinions form and are measured",
      skill: "Explain political socialization and polling methods.",
      lesson: {
        sections: [
          {
            heading: "Socialization",
            body: "Family is the strongest influence; school, peers, media, and religion also shape beliefs; agents can reinforce or challenge each other.",
          },
          {
            heading: "Polling",
            body: "Scientific polls use random sampling to represent populations; margin of error quantifies uncertainty; non-random samples produce biased results.",
          },
        ],
        keyFormulas: [
          { name: "Poll quality", statement: "Random sample + representative + adequate size + unbiased questions = reliable poll" },
          { name: "Margin of error", statement: "Typically ±3-4% for national polls with ~1000 respondents" },
        ],
        workedExample: {
          problem: "Why can a poll of 1,000 people predict a national election?",
          solution: "Random sampling ensures representativeness; statistical theory shows ~1000 random respondents yields ±3% margin — enough to predict outcomes within a few points. The key is randomness, not size alone.",
        },
      },
      questions: [
        {
          id: "apgov-u2-public-opinion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The strongest agent of political socialization is typically ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the media"
                    },
                    {
                              "id": "b",
                              "text": "the family"
                    },
                    {
                              "id": "c",
                              "text": "school"
                    },
                    {
                              "id": "d",
                              "text": "peers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Political socialization",
                              "statement": "Family as primary influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Family is typically the strongest agent — children absorb parents' party identification, ideology, and political values early.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Family",
          "commonErrors": [
                    "Overstating media influence — family usually dominates."
          ]
},
        },
        {
          id: "apgov-u2-public-opinion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A random sample is important in polling because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guarantees accuracy"
                    },
                    {
                              "id": "b",
                              "text": "ensures every member of population has equal chance of selection"
                    },
                    {
                              "id": "c",
                              "text": "is cheaper"
                    },
                    {
                              "id": "d",
                              "text": "eliminates bias"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Random sampling",
                              "statement": "Equal probability of selection for all population members."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Random sampling ensures representativeness — every person has equal chance of being selected, allowing statistical inference to the whole population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Non-random samples (voluntary, convenience) produce biased results regardless of size.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Equal selection probability",
          "commonErrors": [
                    "Thinking larger samples fix bias — randomization matters more than size."
          ]
},
        },
        {
          id: "apgov-u2-public-opinion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poll of 1,000 voters has a margin of error of ±3%. If Candidate A leads 48%-45%, is the lead statistically significant? Enter 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Significant?",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare margin",
                              "statement": "Lead = 3%; combined MoE ≈ ±4.2% — not significant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lead = $48 - 45 = 3\\%$; margin of error applies to each candidate separately (~±3% each, combined ~±4.2%); a 3% lead is within margin — NOT statistically significant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $0$ (not significant).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Treating any lead as significant — must exceed margin of error."
          ]
},
        },
        {
          id: "apgov-u2-public-opinion-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why scientific polling requires random sampling, and describe two common polling errors.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Polling methodology",
                              "statement": "Randomness + common errors."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Explain methods and pitfalls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Random sampling ensures every population member has equal selection probability — enabling statistical inference; without it, results can't generalize.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Error 1 — sampling error: even random samples deviate from true population; margin of error quantifies this uncertainty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Error 2 — non-sampling error: biased questions ('Do you support the president's disastrous policy?'), low response rates, or coverage gaps (excluding cell-phone-only voters) distort results.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Random sampling enables inference; errors include sampling and non-sampling bias",
          "commonErrors": [
                    "Focusing only on sample size — methodology matters more."
          ]
},
        },
        {
          id: "apgov-u2-public-opinion-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether public opinion leads or follows policy in American democracy. Use examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Opinion-policy relationship",
                              "statement": "Which drives which?"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion leads: civil rights — public opinion shifted before legislation; LGBTQ+ rights — opinion changed before Obergefell; politicians often follow majority opinion for reelection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Policy leads: Social Security — initially opposed, now untouchable; Medicare — opposed at passage, now popular; gun control — opinion stable despite policy changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Synthesis: relationship is bidirectional — opinion shapes policy through elections; policy shapes opinion through experience and framing; elite cues influence both.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: opinion generally leads on moral issues (civil rights, abortion) but policy can reshape opinion on material issues (entitlements).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Opinion and policy influence each other; opinion leads on moral issues",
          "commonErrors": [
                    "One-directional view — the relationship is reciprocal."
          ]
},
        },
      ],
    },
  ],
};
