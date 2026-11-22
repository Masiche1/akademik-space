import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieisoc-u1-lesson-1-3",
  code: "1-3",
  title: "Sociological theories: functionalism and Marxism",
  goal: "I CAN describe functionalist and Marxist theories and compare their views of society.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 1: Sociology and sociological methods",
  ],
  vocabulary: [
    {
      term: "Functionalism",
      definition:
        "Theory viewing society as a system of interdependent parts working together for stability.",
    },
    {
      term: "Social facts",
      definition:
        "Durkheim's term for external social forces that constrain individual behaviour.",
    },
    {
      term: "Marxism",
      definition:
        "Theory seeing society shaped by class conflict over economic ownership.",
    },
    {
      term: "Bourgeoisie",
      definition: "The capitalist class owning the means of production.",
    },
    {
      term: "Proletariat",
      definition: "The working class selling its labour power.",
    },
    {
      term: "Consensus",
      definition:
        "General agreement in society about values, norms and how institutions should work.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u1-theory",
      title: "Functionalism and Marxism compared",
      skill:
        "Explain the core ideas of functionalism and Marxism and evaluate their differences.",
      lesson: {
        sections: [
          {
            heading: "Functionalism",
            body: "Pioneered by **Durkheim**, functionalism sees society as an organism whose parts (family, education, religion, economy) each perform functions keeping the whole stable. **Social facts** — norms, laws, institutions — constrain individuals. Society rests on **consensus**: shared values and cooperation. Conflict is seen as dysfunction to be managed.",
          },
          {
            heading: "Marxism",
            body: "Marx argued society is shaped by **class conflict** over ownership of production. The **bourgeoisie** owns capital; the **proletariat** sells labour. Institutions (law, education, media) serve the ruling class by reproducing inequality. Unlike functionalism's harmony, Marxism sees society as fundamentally divided — stability is maintained by the dominant class's power, not consent.",
          },
          {
            heading: "Comparing the theories",
            body: "Functionalism asks how parts contribute to social order; Marxism asks who benefits from that order. Functionalists see education as transmitting shared culture; Marxists see it reproducing class inequality. Both are **structural theories** — they explain society through large-scale forces rather than individual choices.",
          },
        ],
        keyFormulas: [
          {
            name: "Functionalist lens",
            statement: "Parts → functions → consensus → stability",
          },
          {
            name: "Marxist lens",
            statement:
              "Ownership → class conflict → institutions serve the ruling class",
          },
        ],
        workedExample: {
          problem:
            "How would functionalists and Marxists each explain the role of schools in society?",
          solution:
            "Functionalists: schools transmit shared values and skills, integrating society. Marxists: schools reproduce class inequality by rewarding middle-class culture and preparing workers for their class positions.",
        },
      },
      questions: [
        {
          id: "cieisoc-u1-thy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Marxism argues that society is primarily shaped by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious beliefs" },
              { id: "b", text: "Individual psychology" },
              { id: "c", text: "Class conflict over ownership of production" },
              { id: "d", text: "Shared values and consensus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxism",
                statement:
                  "Society shaped by class conflict over economic ownership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marxism centres on class conflict between bourgeoisie and proletariat; consensus is the functionalist view.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Class conflict over ownership of production.",
            commonErrors: ["Confusing Marxism with functionalism."],
          },
        },
        {
          id: "cieisoc-u1-thy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the functionalist view of society using the idea of 'social facts'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functionalism & social facts",
                statement:
                  "Society is a system of interdependent parts held together by shared norms — Durkheim's 'social facts'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Functionalism sees society as an organism — family, education, economy each perform functions for the whole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Durkheim's 'social facts' are external forces (norms, laws, institutions) that constrain individual behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Society holds together through consensus — shared values produce stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Society is a stable system of parts performing functions, held together by social facts and consensus.",
            commonErrors: [
              "Describing functionalism as ignoring individuals entirely.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does Marxism explain the persistence of inequality in society?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist inequality",
                statement:
                  "Inequality is reproduced by institutions serving the ruling class.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The bourgeoisie owns the means of production and controls economic resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Institutions — law, education, media — legitimate and reproduce ruling-class advantage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The working class is kept dependent through wage labour, so inequality persists across generations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inequality persists because institutions serve the capitalist class and reproduce class advantage.",
            commonErrors: [
              "Saying Marxism denies inequality exists rather than explaining its reproduction.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare functionalist and Marxist explanations of education.",
          parts: [
            {
              label: "a",
              prompt: "State the functionalist view of education's role.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the Marxist view of education's role.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate which theory better explains educational inequality.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theory comparison",
                statement:
                  "Functionalism = social integration; Marxism = class reproduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Functionalists: education transmits shared culture and skills, preparing individuals for their roles and integrating society.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It serves society's needs — meritocracy allocating roles by ability.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Marxists: education reproduces class inequality — middle-class culture is rewarded, working-class pupils are channeled into lower-status work.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It legitimises inequality by framing it as 'merit' while serving capitalist labour needs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Marxism better explains persistent class gaps in attainment; functionalism struggles to explain why 'meritocracy' reproduces inequality.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "However functionalism explains how education creates consensus and shared identity — a complete answer weighs both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Integration and skills. (b) Class reproduction. (c) Marxism explains inequality better; functionalism explains consensus.",
            commonErrors: [
              "Describing both theories identically or ignoring the evaluation part.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The bourgeoisie in Marxist theory refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle class of professionals" },
              { id: "b", text: "The working class selling its labour" },
              {
                id: "c",
                text: "The capitalist class owning the means of production",
              },
              { id: "d", text: "Government officials" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bourgeoisie",
                statement:
                  "The capitalist class owning the means of production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bourgeoisie = owners of capital; proletariat = workers selling labour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The capitalist class owning the means of production.",
            commonErrors: ["Confusing bourgeoisie with proletariat."],
          },
        },
        {
          id: "cieisoc-u1-thy-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'consensus' and state which theory emphasises it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consensus",
                statement:
                  "General agreement in society about values, norms and institutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consensus = shared agreement about values and how society should work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Functionalism emphasises consensus; Marxism emphasises conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Consensus is shared agreement about society's values; it is central to functionalism, contrasted with Marxist conflict.",
            commonErrors: [
              "Attributing consensus to Marxism rather than functionalism.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the functionalist concept of 'social facts' as developed by Durkheim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social facts",
                statement:
                  "External social forces — norms, laws, institutions — that constrain individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social facts exist outside the individual — laws, customs, institutions are 'out there' in society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They exert coercive pressure — people conform to norms even when they disagree.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They explain social order: individuals are shaped by society rather than purely by personal choice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Social facts are external forces — norms, laws and institutions — that constrain and shape individual behaviour.",
            commonErrors: [
              "Describing social facts as personal beliefs rather than external forces.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Marxists view the role of institutions such as law and the media.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist institutions",
                statement:
                  "Institutions serve the ruling class by legitimising and reproducing inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Law and media are not neutral — they reflect and protect the interests of the bourgeoisie.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They legitimate inequality — making class advantage seem natural, fair or deserved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They reproduce class positions — e.g. education and media reward middle-class culture and values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Marxists see institutions as serving the ruling class — legitimising inequality and reproducing class advantage.",
            commonErrors: [
              "Suggesting institutions are neutral rather than class-serving.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The proletariat refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The peasant farmers only" },
              { id: "b", text: "The political ruling elite" },
              {
                id: "c",
                text: "The working class that sells its labour power",
              },
              {
                id: "d",
                text: "The class that owns the means of production",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proletariat",
                statement: "The working class selling its labour power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proletariat = workers without ownership of production; bourgeoisie = owners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The working class that sells its labour power.",
            commonErrors: ["Confusing proletariat with bourgeoisie."],
          },
        },
        {
          id: "cieisoc-u1-thy-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why functionalists see conflict as a 'dysfunction' in society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist order",
                statement:
                  "Society works through cooperation; conflict disrupts the social system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Functionalists assume society rests on consensus — shared values produce cooperation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conflict disrupts the interdependence of parts — institutions fail to perform their functions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore conflict is 'dysfunction' — something to be managed or resolved, not the engine of change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conflict is dysfunction because it disrupts the consensus and interdependence that keep society stable.",
            commonErrors: [
              "Assuming functionalists welcome conflict as a source of change — they do not.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which theory sees society as fundamentally divided by class conflict?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Feminism" },
              { id: "b", text: "Marxism" },
              { id: "c", text: "Symbolic interactionism" },
              { id: "d", text: "Functionalism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxism",
                statement:
                  "Theory seeing society shaped by class conflict over production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marxism centres class conflict; functionalism centres consensus and integration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Marxism.",
            commonErrors: ["Confusing Marxist conflict theory with functionalist consensus theory."],
          },
        },
        {
          id: "cieisoc-u1-thy-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what Marx meant by describing religion as 'the opium of the people'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marx on religion",
                statement:
                  "Religion dulls the pain of inequality and legitimises the existing order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Religion offers comfort and meaning in suffering — easing the pain caused by exploitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Like opium, it numbs awareness of injustice rather than curing its causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It legitimises inequality by promising reward in the afterlife, discouraging challenge to the social order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religion dulls the suffering caused by inequality and legitimises the order that produces it — hence 'opium'.",
            commonErrors: [
              "Reading the quote as praise for religion's comfort rather than criticism of its social function.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Both functionalism and Marxism are described as 'structural' theories because they:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Explain society through large-scale forces like institutions and class",
              },
              { id: "b", text: "Reject the idea that society shapes individuals" },
              { id: "c", text: "Study only small face-to-face interactions" },
              {
                id: "d",
                text: "Focus on individual psychology and personal choice",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural theory",
                statement:
                  "Explains behaviour through large-scale social forces rather than individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both theories prioritise society's structures — institutions, class — over individual choice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) They explain society through large-scale forces such as institutions and class.",
            commonErrors: [
              "Confusing structural theories with micro-level interactionist approaches.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two key differences between functionalist and Marxist views of society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theory comparison",
                statement:
                  "Consensus vs conflict; integration vs class reproduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Basis of order: functionalists see consensus and shared values; Marxists see class conflict and coercion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "View of institutions: functionalists see them serving society's needs; Marxists see them serving the ruling class.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "View of inequality: functionalists see it as functional role allocation; Marxists see it as exploitation to be abolished.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "View of change: functionalists favour gradual adjustment; Marxists foresee revolutionary transformation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consensus vs conflict; institutions serving society vs serving the ruling class; stability vs revolution.",
            commonErrors: [
              "Listing differences without explaining what each theory claims.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two main social classes identified by Marx and state what distinguishes them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxist classes",
                statement:
                  "Bourgeoisie owns production; proletariat sells labour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bourgeoisie — capitalist class owning the means of production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Proletariat — working class selling labour power for wages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Bourgeoisie (owners of production) and proletariat (workers selling labour).",
            commonErrors: [
              "Naming classes without stating the ownership distinction.",
            ],
          },
        },
        {
          id: "cieisoc-u1-thy-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine which theory — functionalism or Marxism — provides the better explanation of social order.",
          parts: [
            {
              label: "a",
              prompt: "Outline the functionalist explanation of social order.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Compare with Marxism and reach a justified judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating theories of order",
                statement:
                  "Functionalism explains integration; Marxism explains order through ruling-class power.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Functionalism: order rests on consensus — shared values and norms coordinate behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Institutions perform functions — family socialises, education skills, religion integrates — keeping society stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Social facts constrain individuals, so most people conform most of the time.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Marxism counters: order is maintained by the dominant class's control of institutions and coercion, not consent.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Marxism better explains persistent inequality and conflict; functionalism struggles to explain why order serves the powerful.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: functionalism explains everyday integration well, but Marxism gives the deeper account of whose interests order serves — a balanced answer weighs both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Order via consensus and institutional functions. (b) Marxism sees order maintained by class power — better explains inequality, weaker on everyday integration.",
            commonErrors: [
              "Describing both theories without any evaluative judgement.",
            ],
          },
        },
      ],
    },
  ],
};
