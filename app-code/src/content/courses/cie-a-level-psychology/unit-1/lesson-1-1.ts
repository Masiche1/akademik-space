import type { Lesson } from "../../../types.ts";

export const lesson711: Lesson = {
  id: "ciealpsy-u1-lesson-1-1",
  code: "1-1",
  title: "Social Influence: Conformity and Obedience",
  goal: "I CAN explain conformity and obedience, and analyse classic studies.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 1: Social influence"],
  
  vocabulary: [
    { term: "Conformity", definition: "Changing behaviour to match group norms." },
    { term: "Compliance", definition: "Following group pressure while privately disagreeing." },
    { term: "Identification", definition: "Adopting group values because you accept the group." },
    { term: "Internalisation", definition: "Permanently adopting group norms." },
    { term: "Obedience", definition: "Following orders from an authority figure." },
    { term: "Agentic state", definition: "Obeying because you see yourself as an agent of authority." },
  ],
  concepts: [
    {
      id: "ciealpsy-u1-s1-infl",
      title: "Social influence",
      skill: "Explain conformity, obedience and evaluate studies.",
      lesson: {
        sections: [
          {
            heading: "Types of conformity",
            body: "Compliance: public agreement, private disagreement (Asch line study). Internalisation: genuine acceptance (Sherif). Obedience: following authority orders (Milgram).",
          },
          {
            heading: "Explanations",
            body: "Normative social influence: want to be liked/accepted → conformity. Informational influence: want to be right → conformity. Obedience explained by agentic state, legitimacy of authority.",
          },
          {
            heading: "Classic studies",
            body: "Asch: ~33% conformity on clear wrong answers. Milgram: ~65% obedience to 450V. Situational factors: proximity, legitimacy, proximity of victim. Dispositional: authoritarian personality.",
          },
        ],
        keyFormulas: [
          { name: "Conformity", statement: "match group norms" },
          { name: "Asch", statement: "~33% conformity" },
          { name: "Milgram", statement: "~65% obedience" },
        ],
        workedExample: {
          problem: "Distinguish normative vs informational social influence.",
          solution: "Normative = fear of rejection (want to be liked). Informational = uncertainty about correct answer (want to be right).",
        },
      },
      questions: [
        {
          id: "ciealpsy-u1-infl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is conformity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Following orders"
                    },
                    {
                              "id": "b",
                              "text": "Changing behaviour to match group norms"
                    },
                    {
                              "id": "c",
                              "text": "A type of memory"
                    },
                    {
                              "id": "d",
                              "text": "An attachment style"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conformity",
                              "statement": "Match group norms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conformity = matching group norms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Match group norms"
},
        },
        {
          id: "ciealpsy-u1-infl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between normative and informational social influence?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NSI vs ISI",
                              "statement": "Liked vs right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normative = want to be liked/accepted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Informational = want to be right/uncertain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Liked vs right"
},
        },
        {
          id: "ciealpsy-u1-infl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What did Milgram's obedience study find?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Milgram",
                              "statement": "Obedience to authority."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "~65% administered highest shock despite learner protests.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Participants obeyed authority figure (experimenter).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Situational factors affected obedience level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "65% obedience to authority"
},
        },
        {
          id: "ciealpsy-u1-infl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define conformity, compliance, internalisation, obedience, agentic state, normative influence. (b) What is conformity? (c) What is obedience? (d) What did Asch find? (e) What did Milgram find? (f) What is normative influence? (g) What is informational influence? (h) Evaluate whether Milgram's study was ethical.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Social influence",
                              "statement": "Conformity/obedience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Match group norms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Follow orders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) ~33% conformity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) ~65% obedience.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Want to be liked.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Want to be right.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Deception, distress — but scientific value argued.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Social influence analysis."
},
        },
        {
          id: "ciealpsy-u1-infl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of conformity involves publicly agreeing with the group while privately disagreeing?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Identification" },
              { "id": "b", "text": "Internalisation" },
              { "id": "c", "text": "Obedience" },
              { "id": "d", "text": "Compliance" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Compliance", "statement": "Public agreement, private disagreement." }
            ],
            "steps": [
              { "reasoning": "Compliance means going along with the group publicly while privately disagreeing.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(d)** Compliance"
          }
        },
        {
          id: "ciealpsy-u1-infl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what proportion of participants conformed in Asch's classic line-judgement study?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "About 90%" },
              { "id": "b", "text": "About 10%" },
              { "id": "c", "text": "About 33%" },
              { "id": "d", "text": "About 65%" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "context", "name": "Asch", "statement": "~33% conformity on critical trials." }
            ],
            "steps": [
              { "reasoning": "Asch found roughly one third of responses conformed to the wrong majority answer.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(c)** About 33%"
          }
        },
        {
          id: "ciealpsy-u1-infl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many participants took part in Milgram's original obedience experiment?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 40 }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "context", "name": "Milgram", "statement": "40 male volunteers." }
            ],
            "steps": [
              { "reasoning": "Milgram's original study used 40 participants.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "40"
          }
        },
        {
          id: "ciealpsy-u1-infl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the maximum voltage shown on the shock generator in Milgram's study (in volts)?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 450 }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "context", "name": "Milgram", "statement": "Shock generator labelled up to 450V." }
            ],
            "steps": [
              { "reasoning": "The generator was labelled from 15V to a maximum of 450V.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "450"
          }
        },
        {
          id: "ciealpsy-u1-infl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Milgram's terms, what is the 'agentic state'?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A state of reduced obedience" },
              { "id": "b", "text": "A type of conformity to peers" },
              { "id": "c", "text": "A mental illness caused by stress" },
              { "id": "d", "text": "Believing you are merely an agent carrying out the wishes of an authority figure" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Agentic state", "statement": "Seeing yourself as an agent of authority." }
            ],
            "steps": [
              { "reasoning": "The agentic state means the person feels they are just carrying out orders for an authority.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(d)** Believing you are an agent of authority"
          }
        },
        {
          id: "ciealpsy-u1-infl-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change to Milgram's procedure produced the HIGHEST level of obedience?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Moving the learner to a different building" },
              { "id": "b", "text": "The teacher and learner being in the same room, with the learner visible" },
              { "id": "c", "text": "The experimenter giving orders by telephone" },
              { "id": "d", "text": "The learner being released from the chair between trials" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "principle", "name": "Proximity", "statement": "Closer victim and authority increase obedience." }
            ],
            "steps": [
              { "reasoning": "Proximity of the victim increased obedience; distance reduced it.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** Learner visible in the same room"
          }
        },
        {
          id: "ciealpsy-u1-infl-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately what percentage of Asch's participants conformed on at least one of the 18 trials?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 75 }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "context", "name": "Asch", "statement": "~75% conformed at least once." }
            ],
            "steps": [
              { "reasoning": "Although only ~33% of individual responses conformed, about 75% of participants conformed on at least one trial.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "75"
          }
        },
        {
          id: "ciealpsy-u1-infl-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the proximity of the victim affects obedience, referring to Milgram's variations.",
          response: {
            "type": "open"
          },
          markscheme: {
            "principles": [
              { "kind": "principle", "name": "Proximity of victim", "statement": "Closer victim reduces obedience." }
            ],
            "steps": [
              { "reasoning": "When the learner was in a different room or building, obedience decreased.", "marks": 1, "markCode": "M" },
              { "reasoning": "Seeing and hearing the victim's distress makes disobedience harder, reducing obedience.", "marks": 1, "markCode": "M" },
              { "reasoning": "This shows obedience is partly situational — proximity of the victim is a key factor.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Closer victim -> less obedience"
          }
        },
        {
          id: "ciealpsy-u1-infl-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which dispositional factor is associated with higher levels of obedience?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "High self-esteem" },
              { "id": "b", "text": "Internal locus of control" },
              { "id": "c", "text": "Extraversion" },
              { "id": "d", "text": "Authoritarian personality" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Authoritarian personality", "statement": "Disposition linked to obedience to authority." }
            ],
            "steps": [
              { "reasoning": "The authoritarian personality (Adorno et al.) is the dispositional explanation for obedience.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(d)** Authoritarian personality"
          }
        },
        {
          id: "ciealpsy-u1-infl-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish between internalisation and compliance, giving an example of each.",
          response: {
            "type": "open"
          },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Conformity types", "statement": "Internalisation = genuine acceptance; compliance = public only." }
            ],
            "steps": [
              { "reasoning": "Internalisation: genuinely adopting the group's norms and values.", "marks": 1, "markCode": "M" },
              { "reasoning": "Compliance: publicly going along while privately disagreeing.", "marks": 1, "markCode": "M" },
              { "reasoning": "Example of internalisation: truly accepting a group's attitude after joining.", "marks": 1, "markCode": "M" },
              { "reasoning": "Example of compliance: Asch participants agreeing publicly while privately knowing the line answers were wrong.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Internalisation = genuine; compliance = public only"
          }
        },
        {
          id: "ciealpsy-u1-infl-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many trials did each participant complete in Asch's line-judgement study?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 18 }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "context", "name": "Asch", "statement": "18 trials per participant." }
            ],
            "steps": [
              { "reasoning": "Each participant judged 18 pairs of lines, 12 of which were critical trials.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "18"
          }
        },
        {
          id: "ciealpsy-u1-infl-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the ethics of Milgram's obedience study.",
          response: {
            "type": "open"
          },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Ethics", "statement": "Consent, deception, protection from harm, debrief." }
            ],
            "steps": [
              { "reasoning": "Participants were deceived about the true purpose of the study.", "marks": 1, "markCode": "M" },
              { "reasoning": "They suffered significant distress with no genuine right to withdraw.", "marks": 1, "markCode": "M" },
              { "reasoning": "Informed consent was compromised because participants did not know shocks were fake.", "marks": 1, "markCode": "M" },
              { "reasoning": "Counter-argument: the study produced valuable insights into obedience to authority.", "marks": 1, "markCode": "A" },
              { "reasoning": "Debriefing was offered afterwards, which partially addresses the harm.", "marks": 1, "markCode": "A" },
              { "reasoning": "Overall judgement: ethically unacceptable by modern standards despite scientific value.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Deception and distress are unethical, but the scientific value was great"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u1-infl-notes",
      title: "Social influence — notes",
      summary: "Conformity=group norms; obedience=authority. Asch ~33%, Milgram ~65%.",
      sections: [
        { heading: "Key idea", body: "Both conformity and obedience show powerful social pressures." },
        { heading: "Ethics", body: "Classic studies raise consent/debrief issues." },
      ],
    },
  ],
};
