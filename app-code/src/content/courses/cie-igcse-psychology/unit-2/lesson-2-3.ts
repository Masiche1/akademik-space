import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieipsych-u2-lesson-2-3",
  code: "2-3",
  title: "Social behaviour: conformity and obedience",
  goal: "I CAN describe classic studies of conformity and obedience and evaluate their findings.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 2: Social psychology",
  ],
  vocabulary: [
    {
      term: "Conformity",
      definition:
        "Changing one's behaviour or beliefs to match group pressure.",
    },
    {
      term: "Compliance",
      definition: "Publicly conforming while privately disagreeing.",
    },
    {
      term: "Obedience",
      definition: "Following orders from an authority figure.",
    },
    {
      term: "Normative social influence",
      definition: "Conforming to be liked and accepted by the group.",
    },
    {
      term: "Informational social influence",
      definition: "Conforming because we believe the group is right.",
    },
    {
      term: "Agentic state",
      definition:
        "Milgram's idea that people obey because they see themselves as agents of authority.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u2-social",
      title: "Conformity and obedience",
      skill:
        "Explain classic findings on group influence and authority, and evaluate them.",
      lesson: {
        sections: [
          {
            heading: "Conformity",
            body: "**Asch's line studies** showed people conform to a wrong majority answer ~37% of the time when unsure — driven by **normative influence** (wanting acceptance) and **informational influence** (assuming the group knows better). Conformity increases with group size, unanimity and the task's ambiguity.",
          },
          {
            heading: "Obedience",
            body: "**Milgram's experiments** found ~65% of participants obeyed orders to give apparently harmful electric shocks to a 'learner' — people obey authority even against conscience. Explanations: the **agentic state** (seeing oneself as an agent of authority), **diffusion of responsibility** and the experimenter's **legitimacy and proximity**. The learner was actually an actor and no real shocks were given.",
          },
          {
            heading: "Evaluation",
            body: "Both studies reveal the power of social context but face criticisms: **ethical problems** (deception, distress — though debriefing occurred), **low ecological validity** (artificial lab settings) and **cultural bias** (mostly American participants). Replications show obedience varies by culture — lower in cultures emphasising individualism.",
          },
        ],
        keyFormulas: [
          {
            name: "Conformity drivers",
            statement:
              "Normative (acceptance) + informational (assume group right)",
          },
          {
            name: "Obedience drivers",
            statement:
              "Agentic state + diffusion of responsibility + legitimate authority",
          },
        ],
        workedExample: {
          problem:
            "Why might someone give an incorrect answer in a group setting even when they know the right one?",
          solution:
            "Normative social influence — they conform publicly to avoid rejection, even while privately knowing the correct answer (compliance).",
        },
      },
      questions: [
        {
          id: "cieipsych-u2-soc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Milgram's studies, approximately what percentage of participants obeyed to the maximum shock level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 10%" },
              { id: "b", text: "About 25%" },
              { id: "c", text: "About 65%" },
              { id: "d", text: "About 95%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Milgram obedience",
                statement: "~65% obeyed fully despite apparent harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Milgram found roughly two-thirds of participants gave maximum shocks — the 'learner' was an actor and no real shocks occurred.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) About 65%.",
            commonErrors: [
              "Thinking real harm was caused — the learner was an accomplice.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between normative and informational social influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Two influences",
                statement:
                  "Normative = want acceptance; informational = assume group is right.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Normative influence: conform to be liked and accepted — public agreement may mask private disagreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informational influence: conform because the group seems better informed — we genuinely adopt the group view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: agreeing with friends' music choice (normative) vs following crowd evacuation advice (informational).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Normative = social acceptance; informational = assuming the group is correct.",
            commonErrors: [
              "Treating both as 'peer pressure' without the distinction.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'agentic state' as an explanation of obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agentic state",
                statement:
                  "Obedience shifts responsibility to the authority figure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the agentic state, people see themselves as instruments of authority rather than autonomous agents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Moral responsibility is diffused to the experimenter/authority — 'I was just following orders'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This explains obedience even when actions conflict with personal conscience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Obedience occurs when people adopt an agentic mindset, shifting responsibility to authority.",
            commonErrors: [
              "Saying people obey because they are 'evil' or 'weak' — the explanation is situational.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate Milgram's obedience experiments.",
          parts: [
            {
              label: "a",
              prompt: "Describe the procedure and key finding.",
              marks: 2,
            },
            { label: "b", prompt: "Identify two ethical issues.", marks: 2 },
            {
              label: "c",
              prompt: "Evaluate the study's validity and reliability.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Milgram evaluation",
                statement:
                  "Powerful findings but ethical and ecological-validity concerns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Procedure: participants administered (fake) electric shocks on an experimenter's orders; 'learner' was an actor.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Finding: ~65% obeyed to maximum level — obedience to authority is disturbingly common.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Deception: participants were misled about the study's true purpose and the shocks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Distress: participants showed severe stress; consent was compromised by deception.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Validity: artificial lab setting may not reflect real-world obedience; participants knew it was an experiment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reliability: findings replicated across variations (proximity, legitimacy) strengthening confidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shock procedure, 65% obedience. (b) Deception and distress. (c) Validity questioned by artificiality; reliability supported by replications.",
            commonErrors: [
              "Claiming real people were harmed — debriefing occurred and shocks were fake.",
            ],
          },
        },
      ],
    },
  ],
};
