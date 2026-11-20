import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieisoc-u2-lesson-2-2",
  code: "2-2",
  title: "Beliefs in society: religion and ideology",
  goal: "I CAN explain the functions of religion in society and how beliefs shape social behaviour.",
  standards: [
    "Cambridge IGCSE Sociology 0495",
    "Section 2: Culture and identity",
  ],
  vocabulary: [
    {
      term: "Religion",
      definition:
        "A system of beliefs, practices and organisations centred on the sacred or supernatural.",
    },
    {
      term: "Secularisation",
      definition:
        "The declining influence of religion in public and private life.",
    },
    {
      term: "Ideology",
      definition:
        "A system of ideas that justifies or challenges the existing social order.",
    },
    {
      term: "Social cohesion",
      definition: "The bonds that hold a society together.",
    },
    {
      term: "Fundamentalism",
      definition:
        "Strict adherence to literal religious texts and traditional values.",
    },
    {
      term: "Civil religion",
      definition:
        "Shared secular beliefs and rituals that bind a nation, e.g. national ceremonies.",
    },
  ],
  concepts: [
    {
      id: "cieisoc-u2-beliefs",
      title: "Religion and ideology in society",
      skill:
        "Explain the social functions of religion and the role of ideology.",
      lesson: {
        sections: [
          {
            heading: "Functions of religion",
            body: "Functionalists argue religion promotes **social cohesion** — shared rituals and beliefs unite members. It also provides **meaning and comfort** in suffering, reinforces **social norms** (moral codes) and can legitimate the social order. Critics note it can also divide societies along religious lines or justify inequality.",
          },
          {
            heading: "Secularisation",
            body: "Many sociologists argue religion's influence has declined in modern societies — falling attendance, religion confined to private life, science replacing religious explanations. However, religion persists in new forms (New Age, fundamentalism) and in some societies remains central — so 'secularisation' is debated rather than universally accepted.",
          },
          {
            heading: "Ideology",
            body: "An **ideology** is a body of ideas legitimising or challenging power — e.g. capitalism, socialism, nationalism, feminism. Marxists see dominant ideology as serving ruling-class interests by making inequality seem natural. Ideologies shape institutions, policy and everyday common sense — what people take for granted as 'normal'.",
          },
        ],
        keyFormulas: [
          {
            name: "Religion functions",
            statement:
              "Cohesion + meaning + moral order + legitimacy (functionalists)",
          },
          {
            name: "Ideology question",
            statement: "Whose interests does this set of ideas serve?",
          },
        ],
        workedExample: {
          problem:
            "How might a functionalist and a Marxist each view religion's role in society?",
          solution:
            "Functionalist: religion binds society through shared rituals and values. Marxist: religion is 'the opium of the people' — it dulls suffering and legitimises the inequalities that cause it.",
        },
      },
      questions: [
        {
          id: "cieisoc-u2-bel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secularisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The growth of new religious movements" },
              {
                id: "b",
                text: "The declining influence of religion in society",
              },
              { id: "c", text: "State control of churches" },
              { id: "d", text: "The separation of church and state" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secularisation",
                statement:
                  "Declining social and political influence of religion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Secularisation = religion losing influence; new religious movements and church-state separation are different concepts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The declining influence of religion in society.",
            commonErrors: [
              "Confusing secularisation with the mere existence of multiple religions.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two functions of religion identified by functionalist sociologists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Functionalist view of religion",
                statement:
                  "Religion maintains social order through cohesion and shared values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Social cohesion: shared rituals and beliefs create bonds and a sense of collective identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Moral regulation: religious teachings reinforce norms — e.g. prohibitions that support social order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Meaning and comfort: religion helps individuals cope with suffering, death and uncertainty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cohesion through shared rituals, moral regulation of behaviour, and meaning in suffering.",
            commonErrors: [
              "Listing functions without explaining how they maintain society.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by an 'ideology' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ideology",
                statement:
                  "A system of ideas that justifies or challenges the social order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ideology = a coherent set of beliefs about how society should be organised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It legitimates existing arrangements (e.g. capitalism) or challenges them (e.g. socialism).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: the ideology of meritocracy suggests inequality is earned and just.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A system of ideas justifying or challenging the social order — e.g. capitalism, meritocracy, feminism.",
            commonErrors: [
              "Confusing ideology with 'brainwashing' or 'propaganda' only.",
            ],
          },
        },
        {
          id: "cieisoc-u2-bel-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that religion is becoming less important in modern societies.",
          parts: [
            {
              label: "a",
              prompt: "Present evidence supporting secularisation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Present evidence against secularisation and reach a judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Secularisation debate",
                statement:
                  "Declining institutional religion vs persistent/new forms of belief.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Evidence: falling church attendance, religion confined to private life, science replacing religious explanations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Government and law operate on secular principles in many societies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Younger generations identify less with organised religion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Against: new religious movements, fundamentalism and informal spirituality persist or grow.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Religion remains central in many non-Western societies — secularisation may be a Western pattern only.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: institutional religion declines in some societies, but belief itself has not disappeared — 'believing without belonging'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Falling attendance, privatisation, science. (b) New movements, non-Western persistence — institutional decline but not disappearance of belief.",
            commonErrors: [
              "One-sided answers ignoring either the evidence or the counter-evidence.",
            ],
          },
        },
      ],
    },
  ],
};
