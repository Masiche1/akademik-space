import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apgov-u2-lesson-2-2",
  code: "2-2",
  title: "Voting Behavior and Participation",
  goal: "I CAN explain why people vote and patterns in electoral behavior.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Voter turnout", definition: "Percentage of eligible voters who cast ballots; US rates are low (~55-60% presidential)." },
    { term: "Party identification", definition: "Stable psychological attachment to a party — strongest predictor of vote choice." },
    { term: "Retrospective voting", definition: "Voting based on past performance (economy, incumbents)." },
    { term: "Prospective voting", definition: "Voting based on future expectations/campaign promises." },
    { term: "Voter ID laws", definition: "Requirements to show identification at polls — debated as turnout barriers." },
    { term: "Gerrymandering", definition: "Drawing district boundaries to advantage a party — can reduce competitiveness." },
  ],
  concepts: [
    {
      id: "apgov-u2-voting-behavior",
      title: "Why people vote",
      skill: "Explain voting behavior models and turnout factors.",
      lesson: {
        sections: [
          {
            heading: "Vote choice models",
            body: "Party ID is strongest predictor; retrospective voting (economy, incumbents) and prospective voting (candidates' positions) also matter; candidate personality affects marginal voters.",
          },
          {
            heading: "Turnout factors",
            body: "Registration requirements, voting laws, competitiveness, mobilization, and demographics affect turnout; US rates lag other democracies partly due to registration and Election Day rules.",
          },
        ],
        keyFormulas: [
          { name: "Vote choice", statement: "Party ID (strongest) + retrospective (economy) + prospective (promises) + candidate traits" },
          { name: "Turnout", statement: "Registration + voting laws + competitiveness + mobilization + demographics" },
        ],
        workedExample: {
          problem: "Why is US voter turnout lower than other democracies?",
          solution: "Registration barriers (must register separately), fewer election days (single Tuesday vs. weekend voting in Europe), and less party mobilization contribute; compulsory voting countries have ~90%+ turnout.",
        },
      },
      questions: [
        {
          id: "apgov-u2-voting-behavior-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Party identification is the strongest predictor of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "voter turnout"
                    },
                    {
                              "id": "b",
                              "text": "vote choice"
                    },
                    {
                              "id": "c",
                              "text": "political knowledge"
                    },
                    {
                              "id": "d",
                              "text": "campaign donations"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Party ID",
                              "statement": "Stable psychological attachment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Party identification — long-term attachment to a party — is the single strongest predictor of how people vote.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vote choice",
          "commonErrors": [
                    "Confusing with turnout predictors."
          ]
},
        },
        {
          id: "apgov-u2-voting-behavior-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Retrospective voting means voters ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "vote based on future promises"
                    },
                    {
                              "id": "b",
                              "text": "evaluate incumbents' past performance"
                    },
                    {
                              "id": "c",
                              "text": "always vote for their party"
                    },
                    {
                              "id": "d",
                              "text": "split their ticket randomly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Retrospective voting",
                              "statement": "Judging incumbents on past record."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retrospective voting judges incumbents on past performance — especially the economy; voters reward success and punish failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's why economic conditions strongly predict presidential election outcomes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Judging past performance",
          "commonErrors": [
                    "Confusing with prospective voting (future promises)."
          ]
},
        },
        {
          id: "apgov-u2-voting-behavior-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "US presidential turnout is about 55-60%. If 250 million Americans are eligible and 150 million vote, what percentage is that? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$150/250 \\times 100 = 60\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$150 / 250 \\times 100 = 60\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $60$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Using wrong base or arithmetic errors."
          ]
},
        },
        {
          id: "apgov-u2-voting-behavior-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how gerrymandering affects elections and why it's controversial.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Gerrymandering",
                              "statement": "District manipulation for partisan advantage."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Explain mechanism and controversy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gerrymandering draws district boundaries to concentrate or spread voters — 'packing' opponents into few districts or 'cracking' them across many — producing uncompetitive seats.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Effects: reduced competitiveness, extreme partisanship (safe seats reward primary challenges), distorted representation — party can win majority of seats with minority of votes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Controversy: both parties gerrymander; courts have ruled it's a 'political question' (Rucho 2019) leaving reform to states — some states now use independent commissions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Gerrymandering creates uncompetitive seats and distorts representation",
          "commonErrors": [
                    "Treating it as always illegal — courts have largely left it to states."
          ]
},
        },
        {
          id: "apgov-u2-voting-behavior-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze whether voter ID laws increase election integrity or suppress turnout. What evidence supports each view?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Voter ID debate",
                              "statement": "Integrity vs. access tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrity view: proponents argue ID prevents fraud; studies show in-person voter fraud is extremely rare (~0.0003%); ID requirements disproportionately affect elderly, minority, and low-income voters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Suppression view: strict ID laws reduce turnout among disadvantaged groups by 2-3 percentage points; obtaining ID requires documents and travel costs that burden poor voters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: states with strict ID show lower turnout among affected demographics; courts have struck down some laws as discriminatory.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: evidence suggests minimal fraud prevention but measurable turnout suppression — the tradeoff favors access over negligible integrity gains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Voter ID laws suppress turnout more than they prevent fraud",
          "commonErrors": [
                    "Accepting fraud claims without evidence — in-person fraud is vanishingly rare."
          ]
},
        },
      ],
    },
  ],
};
