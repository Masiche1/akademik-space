import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eias-soc-u3-lesson-3-1",
  code: "3-1",
  title: "Religion and Its Functions",
  goal: "I CAN explain religion's functions from different sociological perspectives.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 3 — Beliefs in Society"],
  vocabulary: [
    {
      term: "Religion",
      definition: "System of beliefs and practices involving sacred things.",
    },
    { term: "Sacred", definition: "Things set apart, worthy of reverence." },
    { term: "Profane", definition: "Ordinary, everyday things." },
    {
      term: "Social cohesion",
      definition: "Bonding of society through shared beliefs.",
    },
    { term: "Anomie", definition: "Normlessness — lack of social norms." },
    {
      term: "False consciousness",
      definition: "Workers unaware of exploitation — Marx.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u3-functions",
      title: "Functions of Religion",
      skill: "Explain functionalist and conflict views of religion.",
      lesson: {
        sections: [
          {
            heading: "Functionalist view",
            body: "**Durkheim**: religion creates social solidarity — shared rituals, beliefs bind society. **Parsons**: religion provides meaning — answers existential questions. **Malinowski**: religion reduces anxiety — especially during crises (illness, death).\n\n**Evaluation**: explains cohesion but ignores conflict — religion can divide (religious wars).",
          },
          {
            heading: "Conflict view",
            body: "**Marx**: religion as 'opium of the people' — distracts workers from exploitation, promises reward in afterlife. **Neo-Marxist**: religion legitimises inequality — 'divine right', wealth as blessing.\n\n**Evaluation**: explains power but too cynical — ignores genuine belief, positive effects.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Religious rituals bring community together. Function?",
          solution: "Social cohesion.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-func-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What did Durkheim say religion provides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pleasure" },
              { id: "b", text: "Social solidarity" },
              { id: "c", text: "Wealth" },
              { id: "d", text: "Power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Durkheim", statement: "Solidarity." },
            ],
            steps: [
              {
                reasoning: "Durkheim: religion → solidarity.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Social solidarity",
            commonErrors: ["Wealth confused."],
          },
        },
        {
          id: "eias-soc-u3-func-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functionalist functions of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalist functions",
                statement: "Cohesion + meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Social cohesion — shared rituals bind society.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Meaning — answers existential questions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Anxiety reduction — coping with crisis.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cohesion, meaning, anxiety reduction.",
            commonErrors: ["Conflict view.", "Only one."],
          },
        },
        {
          id: "eias-soc-u3-func-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Marx's view of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marx religion",
                statement: "Opium of people.",
              },
            ],
            steps: [
              {
                reasoning: "Religion distracts workers from exploitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Promises reward in afterlife — accept suffering now.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Legitimises inequality — 'divine right', wealth as blessing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Opium of the people' — prevents revolution.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Distracts + legitimises inequality.",
            commonErrors: ["Functionalist.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u3-func-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Community church provides charity, support, social events.",
          parts: [
            {
              label: "a",
              prompt: "Explain using functionalist view.",
              marks: 4,
            },
            { label: "b", prompt: "Evaluate Marxist criticism.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion evaluation",
                statement: "Cohesion vs control.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Social cohesion — community bonding.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Welfare function — support for vulnerable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Marxist: charity distracts from inequality — maintains status quo.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) But genuine benefit — can't reduce to control.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cohesion+welfare (b) control but genuine",
            commonErrors: ["Only function.", "Only criticism."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u3-types",
      title: "Types of Religious Belief",
      skill: "Describe major world religions and belief systems.",
      lesson: {
        sections: [
          {
            heading: "Major religions",
            body: "**Christianity**: Bible, Jesus, monotheistic, ~2.4 billion. **Islam**: Quran, Muhammad, monotheistic, ~1.9 billion. **Hinduism**: Vedas, Brahman, polytheistic, ~1.2 billion. **Buddhism**: Four Noble Truths, non-theistic, ~500 million. **Judaism**: Torah, covenant, monotheistic.\n\n**Secular beliefs**: humanism, atheism, agnosticism — non-religious worldviews.",
          },
          {
            heading: "Religious diversity",
            body: "**Monotheism**: one God — Christianity, Islam, Judaism. **Polytheism**: many gods — Hinduism. **Non-theistic**: no God concept — Buddhism. **Syncretism**: blending of beliefs — common in colonised societies.\n\n**Evaluation**: religious diversity challenges simple theories — different functions across religions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Belief in one God, follows Quran. Religion?",
          solution: "Islam.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is monotheism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No God" },
              { id: "b", text: "Nature worship" },
              { id: "c", text: "Many gods" },
              { id: "d", text: "One God" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monotheism", statement: "One God." },
            ],
            steps: [
              { reasoning: "Monotheism = one God.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** One God",
            commonErrors: ["Polytheism confused."],
          },
        },
        {
          id: "eias-soc-u3-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two major world religions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Major religions",
                statement: "Christianity, Islam, Hinduism.",
              },
            ],
            steps: [
              {
                reasoning: "Christianity — Bible, Jesus, monotheistic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Islam — Quran, Muhammad, monotheistic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hinduism — Vedas, polytheistic.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Christianity, Islam, Hinduism, Buddhism.",
            commonErrors: ["Only one.", "Wrong religion."],
          },
        },
        {
          id: "eias-soc-u3-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between monotheism and polytheism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Mono vs poly",
                statement: "One vs many.",
              },
            ],
            steps: [
              {
                reasoning: "Monotheism — one God (Christianity, Islam).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Polytheism — many gods (Hinduism).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Non-theistic — no God concept (Buddhism).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different structures → different practices.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "One vs many gods.",
            commonErrors: ["Same.", "No example."],
          },
        },
        {
          id: "eias-soc-u3-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Society with growing secular and religious populations.",
          parts: [
            { label: "a", prompt: "Describe the diversity.", marks: 4 },
            { label: "b", prompt: "Suggest challenges.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religious diversity",
                statement: "Coexistence + tension.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Multiple faiths + secular — diverse beliefs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Different values, practices — potential conflict.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Tension over public space — symbols, holidays.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Education — religious vs secular curriculum.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) diversity+conflict (b) space+education",
            commonErrors: ["Uniform.", "No challenge."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u3-secularisation",
      title: "Secularisation",
      skill: "Explain secularisation theory and its critics.",
      lesson: {
        sections: [
          {
            heading: "Secularisation thesis",
            body: "**Definition**: decline of religious influence in society — fewer people attend, religion less central. **Causes**: science explains world → religion less needed; urbanisation → weaker community ties; rationalisation → world 'disenchanted'.\n\n**Evidence**: church attendance declining in West; fewer people identify as religious; rise of secular values.",
          },
          {
            heading: "Criticisms",
            body: "**Post-secular**: religion still influential — politics, conflicts, identity. **Religious revival**: growth in Global South — Africa, Asia. **Spirituality**: people less religious but more 'spiritual' — New Age beliefs.\n\n**Evaluation**: secularisation real in West but not universal — global picture complex.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Science explains illness → less need for prayer. Cause?",
          solution: "Rationalisation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-sec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is secularisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline of religious influence" },
              { id: "b", text: "Religious revival" },
              { id: "c", text: "More church attendance" },
              { id: "d", text: "Rise of religion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secularisation",
                statement: "Decline.",
              },
            ],
            steps: [
              {
                reasoning: "Secularisation = religious decline.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Decline",
            commonErrors: ["Revival confused."],
          },
        },
        {
          id: "eias-soc-u3-sec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of secularisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secularisation causes",
                statement: "Science + urbanisation.",
              },
            ],
            steps: [
              {
                reasoning: "Science — explains world, less need for religion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Urbanisation — weaker community ties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rationalisation — world 'disenchanted'.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Science, urbanisation, rationalisation.",
            commonErrors: ["Revival.", "Only one."],
          },
        },
        {
          id: "eias-soc-u3-sec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one criticism of secularisation thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secularisation critique",
                statement: "Not universal.",
              },
            ],
            steps: [
              {
                reasoning: "Religious revival — Global South growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Post-secular — religion still influential in politics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Spirituality — people less religious but 'spiritual'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Secularisation West-specific — not global.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Not universal — revival + spirituality.",
            commonErrors: ["Complete decline.", "No criticism."],
          },
        },
        {
          id: "eias-soc-u3-sec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Church attendance declining but religious identity stable.",
          parts: [
            { label: "a", prompt: "Explain the paradox.", marks: 4 },
            { label: "b", prompt: "Suggest explanations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Believing without belonging",
                statement: "Identity vs practice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) People identify as religious but don't attend — 'believing without belonging'.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Cultural identity — religion as heritage, not practice.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Privatised religion — personal belief, not institutional.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Busy lives — less time for formal worship.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) identity not practice (b) private+busy",
            commonErrors: ["No paradox.", "No explanation."],
          },
        },
      ],
    },
  ],
};
