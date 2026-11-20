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
              { id: "a", text: "Shared values and consensus" },
              { id: "b", text: "Class conflict over ownership of production" },
              { id: "c", text: "Individual psychology" },
              { id: "d", text: "Religious beliefs" },
            ],
            correctChoiceId: "b",
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
      ],
    },
  ],
};
