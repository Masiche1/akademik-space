import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eias-soc-u4-lesson-4-1",
  code: "4-1",
  title: "Crime, Deviance and Social Control",
  goal: "I CAN define crime and deviance and explain social control.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 4 — Crime and Deviance"],
  vocabulary: [
    {
      term: "Crime",
      definition: "Behaviour breaking legal rules — punishable by law.",
    },
    {
      term: "Deviance",
      definition: "Behaviour violating social norms — may not be illegal.",
    },
    {
      term: "Social control",
      definition: "Mechanisms ensuring conformity — laws, norms, sanctions.",
    },
    {
      term: "Formal social control",
      definition: "Laws, police, courts — official institutions.",
    },
    {
      term: "Informal social control",
      definition: "Peer pressure, family, shame — unofficial.",
    },
    { term: "Sanction", definition: "Reward or punishment for behaviour." },
  ],
  concepts: [
    {
      id: "eias-soc-u4-crime",
      title: "Crime and Deviance Defined",
      skill: "Distinguish crime from deviance and explain social control.",
      lesson: {
        sections: [
          {
            heading: "Crime vs deviance",
            body: "**Crime**: breaks legal rules — theft, assault, murder. Punishable by law. **Deviance**: violates social norms — may not be illegal (e.g., body modification, unconventional dress). All crime is deviant; not all deviance is crime.\n\n**Relative nature**: what's deviant varies by culture/time — homosexuality was criminal in UK until 1967. **Functionalist view**: deviance necessary — defines boundaries, can lead to change.",
          },
          {
            heading: "Social control",
            body: "**Formal**: laws, police, courts, prisons — official enforcement. **Informal**: family, peers, community, shame, gossip — unofficial pressure. **Internalised**: self-control — we police ourselves.\n\n**Evaluation**: social control maintains order but can be oppressive — laws may reflect power of dominant groups.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Person breaks law but not social norms. Type?",
          solution: "Crime but not deviant.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-cd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is deviance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Criminal behaviour" },
              { id: "b", text: "Normal behaviour" },
              { id: "c", text: "Breaking law" },
              { id: "d", text: "Violating social norms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deviance",
                statement: "Norm violation.",
              },
            ],
            steps: [
              {
                reasoning: "Deviance = norm violation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Norm violation",
            commonErrors: ["Crime confused."],
          },
        },
        {
          id: "eias-soc-u4-cd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish crime and deviance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Crime vs deviance",
                statement: "Legal vs norm.",
              },
            ],
            steps: [
              {
                reasoning: "Crime: breaks law — punishable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deviance: violates norms — may not be illegal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All crime deviant; not all deviance crime.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Crime=legal, deviance=norm violation.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u4-cd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain formal and informal social control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social control",
                statement: "Official + unofficial.",
              },
            ],
            steps: [
              {
                reasoning: "Formal: laws, police, courts — official.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Informal: family, peers, shame — unofficial.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Internalised: self-control — we police ourselves.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both maintain order — different mechanisms.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Formal+informal+internalised.",
            commonErrors: ["Only formal.", "Only informal."],
          },
        },
        {
          id: "eias-soc-u4-cd-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Body modification (tattoos, piercings) seen as deviant.",
          parts: [
            { label: "a", prompt: "Is it crime or deviance?", marks: 3 },
            {
              label: "b",
              prompt: "Explain social control response.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviance response",
                statement: "Norms + sanctions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Deviance — violates norms, not necessarily law.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Depends on context — workplace vs personal.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Informal control — disapproval, gossip, exclusion.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Formal control — dress codes, workplace rules.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Norms changing — tattoos now mainstream.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) deviance (b) informal+formal+changing",
            commonErrors: ["Crime.", "No response."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-theories",
      title: "Theories of Crime and Deviance",
      skill: "Explain functionalist, Marxist and interactionist theories.",
      lesson: {
        sections: [
          {
            heading: "Functionalist theory",
            body: "**Durkheim**: deviance necessary — defines boundaries, reinforces norms. **Merton's strain theory**: crime results from gap between cultural goals (success) and structural means (education, jobs) — 'strain'. Responses: conformity, innovation, ritualism, retreatism, rebellion.\n\n**Evaluation**: explains why crime occurs but not why some conform; assumes consensus.",
          },
          {
            heading: "Marxist and interactionist",
            body: "**Marxist**: crime results from inequality — capitalism creates poverty, competition, alienation. Law reflects ruling-class interests — protects property, not people. **Interactionist**: labelling theory — crime is created by reaction, not act itself. Primary vs secondary deviance — label becomes self-fulfilling.\n\n**Evaluation**: Marxist explains structural causes but ignores individual choice; interactionist shows power of labels but may overstate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Poor person steals food due to poverty. Theory?",
          solution: "Marxist — inequality.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-th-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is Merton's strain theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labelling theory" },
              { id: "b", text: "Crime from gap between goals and means" },
              { id: "c", text: "Class conflict" },
              { id: "d", text: "Crime is genetic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strain theory",
                statement: "Goals vs means.",
              },
            ],
            steps: [
              {
                reasoning: "Strain = goals-means gap.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Goals-means gap",
            commonErrors: ["Genetic confused."],
          },
        },
        {
          id: "eias-soc-u4-th-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two responses in strain theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strain responses",
                statement: "Five adaptations.",
              },
            ],
            steps: [
              {
                reasoning: "Conformity — accept goals and means.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Innovation — accept goals, reject means (crime).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retreatism — reject both (addiction).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Conformity, innovation, ritualism, retreatism, rebellion.",
            commonErrors: ["Only one.", "Wrong response."],
          },
        },
        {
          id: "eias-soc-u4-th-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Marxist view of crime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist crime",
                statement: "Inequality + law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capitalism creates inequality — poverty, competition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alienation — workers disconnected, desperate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Law reflects ruling class — protects property, not people.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Crime is response to unjust system.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Inequality→crime, law protects ruling class.",
            commonErrors: ["Functionalist.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u4-th-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Person labelled 'criminal' after minor offence, becomes career criminal.",
          parts: [
            { label: "a", prompt: "Explain using labelling theory.", marks: 4 },
            { label: "b", prompt: "Evaluate interactionist view.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labelling eval",
                statement: "Label → self-fulfilling.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Label applied — 'criminal' identity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Internalised — person accepts label, acts accordingly.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Shows power of reaction — crime created by response.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) But may overstate — ignores real harm, victimisation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) label→identity (b) power but overstated",
            commonErrors: ["No theory.", "Perfect theory."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u4-prevention",
      title: "Crime Prevention and Punishment",
      skill: "Explain crime prevention strategies and punishment aims.",
      lesson: {
        sections: [
          {
            heading: "Crime prevention",
            body: "**Situational**: reduce opportunities — CCTV, locks, lighting. **Social**: address causes — education, jobs, community. **Environmental**: design out crime — CPTED (crime prevention through environmental design). **Restorative justice**: repair harm — victim-offender mediation.\n\n**Evaluation**: situational effective short-term but displaces crime; social addresses causes but expensive; restorative reduces reoffending.",
          },
          {
            heading: "Punishment aims",
            body: "**Retribution**: punishment as revenge — 'eye for eye'. **Deterrence**: discourage future crime — fear of punishment. **Rehabilitation**: reform offender — education, therapy. **Incapacitation**: remove from society — prison. **Restoration**: repair harm — compensation, community service.\n\n**Evaluation**: punishment may not deter — rational choice vs impulsive crime; rehabilitation effective but costly.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "CCTV cameras reduce theft in shop. Strategy?",
          solution: "Situational prevention.",
        },
      },
      questions: [
        {
          id: "eias-soc-u4-prev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is situational crime prevention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing opportunities for crime" },
              { id: "b", text: "Addressing poverty" },
              { id: "c", text: "Rehabilitation" },
              { id: "d", text: "Restorative justice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Situational prevention",
                statement: "Reduce opportunities.",
              },
            ],
            steps: [
              {
                reasoning: "Situational = reduce opportunities.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reduce opportunities",
            commonErrors: ["Social confused."],
          },
        },
        {
          id: "eias-soc-u4-prev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two aims of punishment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punishment aims",
                statement: "Retribution, deterrence, rehab.",
              },
            ],
            steps: [
              {
                reasoning: "Retribution — punishment as revenge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deterrence — discourage future crime.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rehabilitation — reform offender.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Retribution, deterrence, rehabilitation, incapacitation.",
            commonErrors: ["Only one.", "Wrong aim."],
          },
        },
        {
          id: "eias-soc-u4-prev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain restorative justice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Restorative justice",
                statement: "Repair harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Focus on repairing harm — victim-offender mediation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Offender takes responsibility — apology, compensation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces reoffending — empathy, accountability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alternative to punishment — community-based.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Repair harm via mediation.",
            commonErrors: ["Punishment.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u4-prev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "City has high crime rate, considers prevention strategies.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two prevention approaches.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Evaluate deterrence as punishment aim.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prevention eval",
                statement: "Approaches + limits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Situational — CCTV, lighting, design.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Social — jobs, education, community programmes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Deterrence: rational choice — fear of punishment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) But impulsive crime — not always rational; harsh punishment may not deter.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) situational+social (b) deterrence limited",
            commonErrors: ["One approach.", "No eval."],
          },
        },
      ],
    },
  ],
};
