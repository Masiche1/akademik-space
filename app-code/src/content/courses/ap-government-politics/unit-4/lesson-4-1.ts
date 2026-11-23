import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "apgov-u4-lesson-4-1",
  code: "4-1",
  title: "Civil Rights and Policy",
  goal: "I CAN explain civil rights legal developments and policy-making processes.",
  standards: ["Unit 6"],
  vocabulary: [
    { term: "Civil rights", definition: "Protections against discrimination based on race, gender, religion, etc." },
    { term: "Suspect classification", definition: "Race/national origin get strict scrutiny — laws must serve compelling interest." },
    { term: "Rational basis review", definition: "Lowest scrutiny — laws need only legitimate government interest." },
    { term: "Civil liberties vs. civil rights", definition: "Liberties = government restraint; rights = protection from discrimination." },
    { term: "Policy process", definition: "Agenda setting → formulation → adoption → implementation → evaluation." },
    { term: "Entitlement programs", definition: "Mandatory spending (Social Security, Medicare) vs. discretionary spending." },
  ],
  concepts: [
    {
      id: "apgov-u4-civil-rights-policy",
      title: "Rights, discrimination, and policy",
      skill: "Distinguish civil liberties/rights and trace policy processes.",
      lesson: {
        sections: [
          {
            heading: "Civil rights law",
            body: "14th Amendment's equal protection clause bans discrimination; Brown (1954), Civil Rights Act (1964), Voting Rights Act (1965) enforced it; courts use strict scrutiny for race.",
          },
          {
            heading: "Policy process",
            body: "Issues reach agenda through interest groups, media, crises; Congress passes laws; agencies implement; courts review — each stage offers veto points.",
          },
        ],
        keyFormulas: [
          { name: "Scrutiny levels", statement: "Strict (race) / Intermediate (gender) / Rational basis (most other)" },
          { name: "Policy stages", statement: "Agenda → formulation → adoption → implementation → evaluation" },
        ],
        workedExample: {
          problem: "Why does race get 'strict scrutiny' while other classifications don't?",
          solution: "Race is a 'suspect classification' — historically used to oppress; strict scrutiny requires laws to serve compelling government interest and be narrowly tailored, making racial discrimination almost impossible.",
        },
      },
      questions: [
        {
          id: "apgov-u4-civil-rights-policy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Civil liberties differ from civil rights because liberties ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "protect against discrimination"
                    },
                    {
                              "id": "b",
                              "text": "restrict government action rather than require equal treatment"
                    },
                    {
                              "id": "c",
                              "text": "apply only to states"
                    },
                    {
                              "id": "d",
                              "text": "are less important"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Liberties vs. rights",
                              "statement": "Restraint vs. equality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Civil liberties limit government power (speech, religion); civil rights require equal treatment (anti-discrimination).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Restrict government action",
          "commonErrors": [
                    "Conflating the two concepts."
          ]
},
        },
        {
          id: "apgov-u4-civil-rights-policy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Strict scrutiny applies to laws that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "affect economic activity"
                    },
                    {
                              "id": "b",
                              "text": "classify by race or national origin"
                    },
                    {
                              "id": "c",
                              "text": "regulate speech"
                    },
                    {
                              "id": "d",
                              "text": "affect voting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strict scrutiny",
                              "statement": "Highest standard for suspect classifications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strict scrutiny applies to suspect classifications (race, national origin) — laws must serve compelling interest and be narrowly tailored to survive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It makes racial discrimination nearly impossible to justify.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Classify by race/national origin",
          "commonErrors": [
                    "Thinking it applies to all laws — most get rational basis review."
          ]
},
        },
        {
          id: "apgov-u4-civil-rights-policy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Civil Rights Act of 1964 passed the Senate 73-27. How many votes did it receive? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Votes",
                              "answer": 73
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Read tally",
                              "statement": "$73$ for passage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Senate passed the CRA 73-27 after a 75-day filibuster — longest in Senate history.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $73$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "73",
          "commonErrors": [
                    "Giving 'no' votes (27)."
          ]
},
        },
        {
          id: "apgov-u4-civil-rights-policy-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the five stages of the policy process and identify where interest groups have most influence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Policy process",
                              "statement": "Five stages with veto points."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Map stages and influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agenda setting: issues reach policy agenda through interest groups, media, crises — groups lobby to define problems.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Formulation: interest groups shape proposals; think tanks provide expertise; Congress drafts legislation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adoption: congressional votes, presidential signature/veto, judicial review — multiple veto points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Implementation/evaluation: agencies enforce; courts review; outcomes assessed — interest groups monitor throughout.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Policy flows through five stages; interest groups influence throughout",
          "commonErrors": [
                    "Skipping stages or ignoring veto points."
          ]
},
        },
        {
          id: "apgov-u4-civil-rights-policy-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether the policy process favors some interests over others. Who wins and who loses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Policy bias",
                              "statement": "Interest group influence vs. equal access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantages: well-organized, well-funded groups (business, defense, agriculture) have sustained access; expertise and resources shape proposals; 'iron triangles' (agency + committee + interest group) dominate some policies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disadvantages: diffuse interests (consumers, taxpayers, future generations) lack organization; poor and minority communities underrepresented; crises can bypass normal process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counterweights: pluralism suggests competing groups balance; elections provide accountability; media can amplify marginalized voices.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: policy process favors organized, wealthy interests — but democratic mechanisms provide some counterbalance; outcomes reflect power, not just merit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Policy favors organized interests but democratic mechanisms provide counterbalance",
          "commonErrors": [
                    "Equal access myth — resource disparities matter."
          ]
},
        },
      ],
    },
  ],
};
