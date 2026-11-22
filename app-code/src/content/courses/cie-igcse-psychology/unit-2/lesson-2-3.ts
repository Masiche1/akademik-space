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
              { id: "a", text: "About 25%" },
              { id: "b", text: "About 10%" },
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
        {
          id: "cieipsych-u2-soc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Asch's line-judgement studies, participants gave the majority's incorrect answer on roughly what percentage of trials?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 5%" },
              { id: "b", text: "About 65%" },
              { id: "c", text: "About 37%" },
              { id: "d", text: "About 90%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Asch conformity",
                statement: "People often conform to a wrong majority answer when unsure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Asch found conformity on about 37% of critical trials when participants were unsure of the correct line length.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) About 37%.",
            commonErrors: [
              "Confusing Asch's conformity rate with Milgram's obedience rate.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a conformity exercise, 18 of 24 students publicly agreed with a wrong group answer. What percentage conformed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage calculation",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "18 / 24 = 0.75, so 75% conformed.",
                working: "18 / 24 \\times 100 = 75",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
            commonErrors: ["Answering 0.75 instead of 75%."],
          },
        },
        {
          id: "cieipsych-u2-soc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compliance is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Publicly conforming while privately disagreeing"
              },
              { id: "b", text: "Following an authority figure's orders" },
              { id: "c", text: "Refusing to change behaviour under pressure" },
              { id: "d", text: "Genuinely accepting the group's view" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compliance",
                statement: "Public agreement with a group while privately disagreeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compliance means outward agreement for social reasons even when private beliefs differ; obedience is following authority orders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Publicly conforming while privately disagreeing.",
            commonErrors: [
              "Confusing compliance with obedience or genuine conversion.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how group size, unanimity and task ambiguity can affect conformity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conformity factors",
                statement: "Larger, unanimous groups and ambiguous tasks increase conformity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger groups increase pressure to conform because the majority seems more convincing or harder to resist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unanimity increases conformity because there is no dissenting ally; one ally greatly reduces conformity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ambiguous tasks increase conformity because informational influence leads people to assume the group is right when unsure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conformity rises with larger groups, unanimous groups and ambiguous tasks.",
            commonErrors: [
              "Listing factors without explaining how each affects conformity.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an obedience study, 39 of 60 participants obeyed to the maximum level. What percentage obeyed fully?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 65, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Obedience percentage",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "39 / 60 = 0.65, so 65% obeyed fully.",
                working: "39 / 60 \\times 100 = 65",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "65%",
            commonErrors: ["Answering 0.65 instead of 65%."],
          },
        },
        {
          id: "cieipsych-u2-soc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain diffusion of responsibility as an explanation of obedience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion of responsibility",
                statement: "Responsibility for harmful actions is shared or shifted, reducing personal guilt.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People feel less personally responsible when an authority figure gives the orders and others appear involved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The experimenter or authority is seen as responsible for consequences, so the participant feels only an agent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduced accountability helps explain why people obey orders they might refuse to initiate themselves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Responsibility is shared or shifted to authority, lowering personal guilt and increasing obedience.",
            commonErrors: [
              "Confusing diffusion of responsibility with the agentic state, though both explain obedience.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which condition was most likely to reduce obedience in Milgram-style studies?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Several confederates urging the participant to continue"
              },
              {
                id: "b",
                text: "The learner being brought closer and visibly protesting"
              },
              {
                id: "c",
                text: "The participant being told the learner had agreed beforehand"
              },
              {
                id: "d",
                text: "The experimenter remaining unseen in another room"
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Milgram variations",
                statement: "Obedience falls when the victim is closer or the authority is less immediate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Greater proximity to the victim and visible distress made the harm harder to ignore, reducing obedience; remote authority can increase it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The learner being brought closer and visibly protesting.",
            commonErrors: [
              "Thinking an unseen experimenter increases obedience — proximity and legitimacy matter.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an Asch-style study, a participant made 30 critical-trial judgments and conformed on 18. (a) What percentage of judgments showed conformity? (b) On how many judgments did the participant resist conformity?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60, unit: "%" },
              { label: "b", answer: 12, unit: "judgments" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Conformity calculation",
                statement: "Conformity percentage = conforming trials / total trials × 100; resistance = total − conforming.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "18 / 30 = 0.60, so 60% of judgments showed conformity.",
                working: "18 / 30 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "30 − 18 = 12 judgments showed resistance to conformity.",
                working: "30 - 18 = 12",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 60%  (b) 12 judgments",
            commonErrors: [
              "Using 30 as the conforming number instead of 18.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An authority figure's legitimacy refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The number of people in the room"
              },
              {
                id: "b",
                text: "How loudly the orders are given"
              },
              {
                id: "c",
                text: "The perceived right to give orders based on role or status"
              },
              {
                id: "d",
                text: "The person's physical strength"
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Legitimate authority",
                statement: "Authority perceived as having a rightful role to give orders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Legitimacy comes from recognised role, status or right to command; it helps explain why people obey authority figures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The perceived right to give orders based on role or status.",
            commonErrors: [
              "Confusing legitimacy with physical power or volume.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an obedience study, 48 of 80 participants obeyed fully. What percentage obeyed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage calculation",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "48 / 80 = 0.60, so 60% obeyed fully.",
                working: "48 / 80 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60%",
            commonErrors: ["Answering 0.60 instead of 60%."],
          },
        },
        {
          id: "cieipsych-u2-soc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A nurse follows a doctor's questionable order because she sees herself as carrying out the doctor's responsibility rather than her own. Which explanation best fits this behaviour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compliance with peers" },
              { id: "b", text: "Informational social influence" },
              { id: "c", text: "Normative social influence" },
              { id: "d", text: "Agentic state" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agentic state",
                statement: "People obey when they see themselves as agents of a legitimate authority.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shifting responsibility to the doctor and seeing herself as carrying out orders matches Milgram's agentic-state explanation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Agentic state.",
            commonErrors: [
              "Choosing conformity explanations — this is obedience to authority, not group conformity.",
            ],
          },
        },
        {
          id: "cieipsych-u2-soc-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which criticism most directly questions the ecological validity of Milgram's obedience experiments?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The sample included too many cultures"
              },
              {
                id: "b",
                text: "The artificial laboratory setting may not reflect real-world obedience"
              },
              {
                id: "c",
                text: "The results were impossible to replicate"
              },
              {
                id: "d",
                text: "Participants may have guessed the shocks were fake"
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ecological validity",
                statement: "Findings should reflect real-world settings and behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A controlled laboratory with an actor learner may not represent everyday obedience, which directly limits ecological validity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The artificial laboratory setting may not reflect real-world obedience.",
            commonErrors: [
              "Choosing cultural bias or deception — those are separate criticisms.",
            ],
          },
        },
      ],
    },
  ],
};
