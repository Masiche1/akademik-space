import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieisoc-u2-lesson-2-1",
  code: "2-1",
  title: "Culture and identity",
  goal: "I CAN explain what culture is and how identity is formed through socialisation.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 2: Culture and identity",
  ],
  vocabulary: [
    {
      term: "Culture",
      definition:
        "The shared beliefs, values, norms, symbols and practices of a society or group.",
    },
    {
      term: "Subculture",
      definition:
        "A group within a culture sharing distinctive values or practices — e.g. youth, religious, occupational.",
    },
    {
      term: "Identity",
      definition:
        "Who a person understands themselves to be — shaped by social categories and personal experience.",
    },
    {
      term: "Social identity",
      definition:
        "The part of identity derived from group memberships — class, ethnicity, gender, religion.",
    },
    {
      term: "Counter-culture",
      definition:
        "A subculture that rejects dominant cultural values — e.g. punk, hippie movements.",
    },
    {
      term: "Material culture",
      definition:
        "Physical objects of a society — technology, buildings, clothing.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u2-culture",
      title: "Culture and the formation of identity",
      skill:
        "Explain culture, subcultures and how socialisation shapes identity.",
      lesson: {
        sections: [
          {
            heading: "What is culture?",
            body: "Culture includes **non-material** elements — beliefs, values, norms, language, symbols — and **material** elements — tools, buildings, clothing, technology. Shared culture is what makes a society coherent: it tells members what is normal, valuable and expected.",
          },
          {
            heading: "Subcultures and counter-cultures",
            body: "Within any culture, **subcultures** share the mainstream but add distinctive practices — youth fashion, religious communities, occupational groups. **Counter-cultures** actively reject dominant values — e.g. 1960s hippies rejecting materialism. Subcultures can become sources of identity and resistance.",
          },
          {
            heading: "How identity forms",
            body: "Identity is shaped by **social categories** (class, ethnicity, gender, religion) and by **socialisation** — family, school, peers and media teach us who we 'should' be. Individuals also exercise **agency**, crafting personal identities within these constraints. Identity can be **ascribed** (fixed at birth, e.g. ethnicity) or **achieved** (earned through choices, e.g. profession).",
          },
        ],
        keyFormulas: [
          {
            name: "Culture layers",
            statement:
              "Non-material (beliefs/norms/language) + material (objects/technology)",
          },
          {
            name: "Identity sources",
            statement: "Social categories + socialisation + personal agency",
          },
        ],
        workedExample: {
          problem:
            "A teenager adopts a distinctive dress style shared by a music scene. Is this a subculture? How does it affect identity?",
          solution:
            "Yes — a youth/music subculture. It provides belonging and a distinctive identity, marking the teen as part of a group while still sharing mainstream culture.",
        },
      },
      questions: [
        {
          id: "cieisoc-u2-cult-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A subculture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A group that rejects all mainstream values" },
              {
                id: "b",
                text: "A group within a culture sharing distinctive practices",
              },
              { id: "c", text: "A foreign culture" },
              { id: "d", text: "A religious doctrine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subculture",
                statement:
                  "Distinctive group within the wider culture sharing practices and values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subcultures share mainstream culture but add distinctive features; counter-cultures are the ones that reject dominant values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A group within a culture sharing distinctive practices.",
            commonErrors: ["Confusing subculture with counter-culture."],
          },
        },
        {
          id: "cieisoc-u2-cult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between material and non-material culture, with an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material vs non-material",
                statement:
                  "Material = physical objects; non-material = ideas, beliefs, norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Material culture: physical objects — buildings, tools, clothing, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: smartphones or traditional clothing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-material culture: beliefs, values, norms, language — e.g. the value placed on punctuality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Material = objects (smartphones); non-material = ideas (values, norms, language).",
            commonErrors: [
              "Giving examples of only one type or mixing the categories.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the family acts as an agent of socialisation in shaping identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Family socialisation",
                statement:
                  "Primary agent transmitting language, values and role expectations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Family is the first and most influential agent — children learn language and basic norms there.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Parents model gender, class and cultural roles — e.g. who does housework, attitudes to authority.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This early imprinting shapes core identity before other agents act.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Family transmits language, values and role models first, forming the core of identity.",
            commonErrors: [
              "Claiming identity is fixed at birth rather than socially shaped.",
            ],
          },
        },
        {
          id: "cieisoc-u2-cult-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the view that identity is entirely determined by socialisation.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways socialisation shapes identity.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the role of individual agency in forming identity.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity formation",
                statement:
                  "Socialisation provides the framework; agency allows individual interpretation and choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Agents (family, school, peers, media) transmit the norms, values and role expectations of society.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Social categories — class, ethnicity, gender — position individuals and shape available identities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Repeated reinforcement makes certain identities seem 'natural' — e.g. gender roles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Agency: individuals reinterpret and choose — e.g. adopting a different religion, career or lifestyle.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Identities are not fixed — people negotiate, resist and change who they are.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: socialisation constrains the menu of identities, but agency selects and reshapes within it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Agents and categories shape identity. (b) Agency allows choice and change within social constraints.",
            commonErrors: [
              "Arguing identity is either fully determined or fully free — both extremes fail.",
            ],
          },
        },
      ],
    },
  ],
};
