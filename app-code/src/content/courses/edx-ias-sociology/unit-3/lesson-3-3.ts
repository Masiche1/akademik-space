import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eias-soc-u3-lesson-3-3",
  code: "3-3",
  title: "Evaluating Beliefs in Society",
  goal: "I CAN evaluate sociological theories of religion and belief.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 3 — Beliefs in Society"],
  vocabulary: [
    {
      term: "Evaluation",
      definition: "Critical assessment of theory strengths/weaknesses.",
    },
    {
      term: "Falsifiability",
      definition: "Can theory be tested/proven false?",
    },
    {
      term: "Postmodernism",
      definition: "Society of choice, fragmentation, consumer culture.",
    },
    {
      term: "Consumer religion",
      definition: "Religion as consumer choice — pick-and-mix.",
    },
    {
      term: "Spirituality",
      definition: "Personal sense of meaning — not organised religion.",
    },
    {
      term: "Determinism",
      definition: "Behaviour determined by social forces.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u3-evaluation",
      title: "Evaluating Religion Theories",
      skill: "Critically evaluate functionalist and conflict views.",
      lesson: {
        sections: [
          {
            heading: "Strengths and weaknesses",
            body: "**Functionalist**: explains cohesion, meaning — but ignores conflict, assumes consensus, can't explain religious conflict. **Marxist**: explains power, inequality — but too cynical, ignores genuine belief, can't explain why poor people maintain religion despite suffering.\n\n**Postmodern critique**: religion less central — consumer society offers many 'spiritual' products; individual choice replaces tradition.",
          },
          {
            heading: "Current debates",
            body: "**Secularisation vs post-secular**: is religion declining or transforming? **Fundamentalism**: religion as resistance to modernity. **New Age**: spirituality without organisation — individualised belief.\n\n**Evaluation**: no single theory explains all — religion complex, context-dependent.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Theory explains cohesion but ignores religious conflict. Weakness?",
          solution: "Ignores conflict — functionalist limitation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is postmodern religion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Traditional religion" },
              { id: "b", text: "Organised church" },
              { id: "c", text: "Consumer choice, individualised belief" },
              { id: "d", text: "Fundamentalism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Postmodern religion",
                statement: "Consumer choice.",
              },
            ],
            steps: [
              {
                reasoning: "Postmodern = individualised choice.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Consumer choice",
            commonErrors: ["Traditional confused."],
          },
        },
        {
          id: "eias-soc-u3-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two criticisms of functionalist view of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist critique",
                statement: "Consensus bias.",
              },
            ],
            steps: [
              {
                reasoning: "Ignores conflict — religion can divide society.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assumes consensus — not always shared values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can't explain religious change — static view.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Conflict, consensus assumption, static.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-soc-u3-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Marxist criticism of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist critique",
                statement: "Opium + legitimation.",
              },
            ],
            steps: [
              {
                reasoning: "'Opium of people' — distracts from exploitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Legitimises inequality — 'divine right'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Criticism: too cynical — ignores genuine belief.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Can't explain positive effects — welfare, community.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Distracts+legitimises but too cynical.",
            commonErrors: ["Functionalist.", "No criticism."],
          },
        },
        {
          id: "eias-soc-u3-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate secularisation thesis.",
          parts: [
            { label: "a", prompt: "Give two strengths.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secularisation eval",
                statement: "Decline vs revival.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Evidence — declining church attendance in West.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Science — explains world, less need for religion.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Global South — religious growth in Africa/Asia.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) 'Believing without belonging' — identity persists.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) evidence+science (b) global+identity",
            commonErrors: ["Complete decline.", "Only strengths."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u3-spirituality",
      title: "Spirituality and Belief in Modern Society",
      skill: "Explain modern forms of belief and spirituality.",
      lesson: {
        sections: [
          {
            heading: "Modern belief forms",
            body: "**New Age spirituality**: crystals, meditation, astrology — individualised, non-institutional. **Consumer religion**: religion as product — choose what fits lifestyle. **Spiritual but not religious**: identify as spiritual, reject organised religion.\n\n**Detraditionalisation**: traditions weakening — people no longer follow established paths. **Individualisation**: religion becomes personal project — 'pick and mix'.",
          },
          {
            heading: "Implications",
            body: "**Fragmented belief**: no single authority — many options. **Consumer society**: religion competes with other products — must 'sell' itself. **Meaning crisis**: without religion, where find meaning? — existential questions remain.\n\n**Evaluation**: modern belief more diverse, individualised — but still answers fundamental human needs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Person meditates, uses crystals, rejects church. Type?",
          solution: "New Age spirituality.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-spirit-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'spiritual but not religious'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atheist" },
              { id: "b", text: "Church member" },
              {
                id: "c",
                text: "Personal spirituality without organised religion",
              },
              { id: "d", text: "Fundamentalist" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spiritual not religious",
                statement: "Personal belief.",
              },
            ],
            steps: [
              {
                reasoning: "Spiritual not religious = personal.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Personal belief",
            commonErrors: ["Church confused."],
          },
        },
        {
          id: "eias-soc-u3-spirit-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two modern forms of belief.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modern belief",
                statement: "New Age + consumer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New Age spirituality — crystals, meditation, astrology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumer religion — religion as product choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Spiritual not religious — personal, non-institutional.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "New Age, consumer, spiritual-not-religious.",
            commonErrors: ["Traditional only.", "Only one."],
          },
        },
        {
          id: "eias-soc-u3-spirit-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain detraditionalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Detraditionalisation",
                statement: "Traditions weaken.",
              },
            ],
            steps: [
              {
                reasoning: "Established traditions weaken — less followed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "People no longer follow set paths — individual choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Religion becomes personal project — 'pick and mix'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Authority fragmented — many options, no single truth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Traditions weaken → individual choice.",
            commonErrors: ["More tradition.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u3-spirit-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Person rejects organised religion but seeks meaning.",
          parts: [
            { label: "a", prompt: "Suggest modern belief options.", marks: 4 },
            {
              label: "b",
              prompt: "Evaluate whether these meet needs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modern meaning",
                statement: "Options + adequacy.",
              },
            ],
            steps: [
              {
                reasoning: "(a) New Age spirituality — meditation, crystals.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Humanism — secular ethics, meaning without God.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) May provide meaning but lack community/support.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Individualised — may not answer all existential questions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) New Age+humanism (b) meaning but isolated",
            commonErrors: ["No options.", "No eval."],
          },
        },
      ],
    },
  ],
};
