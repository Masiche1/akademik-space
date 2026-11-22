import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eias-soc-u3-lesson-3-2",
  code: "3-2",
  title: "Fundamentalism and New Religious Movements",
  goal: "I CAN explain religious fundamentalism and new religious movements.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 3 — Beliefs in Society"],
  vocabulary: [
    {
      term: "Fundamentalism",
      definition: "Strict adherence to literal religious texts/traditions.",
    },
    {
      term: "New religious movement",
      definition: "Recently formed religious group — cult, sect.",
    },
    {
      term: "Sect",
      definition: "Breakaway group — strict, often opposed to mainstream.",
    },
    {
      term: "Cult",
      definition: "New religious movement — often deviant, leader-centred.",
    },
    {
      term: "Denomination",
      definition: "Established branch of religion — accepted mainstream.",
    },
    { term: "Secularisation", definition: "Decline of religious influence." },
  ],
  concepts: [
    {
      id: "eias-soc-u3-fundamentalism",
      title: "Religious Fundamentalism",
      skill: "Explain fundamentalism and its causes.",
      lesson: {
        sections: [
          {
            heading: "Fundamentalism defined",
            body: "**Fundamentalism**: strict adherence to literal religious texts — Bible, Quran. Rejects modern interpretations, secular values. Often political — seeks to impose religious law.\n\n**Causes**: reaction to secularisation — threat to identity; globalisation — cultural threat; modernisation — rapid change creates anxiety; political marginalisation — minority groups turn to religion.",
          },
          {
            heading: "Types and effects",
            body: "**Religious fundamentalism**: Christian, Islamic, Jewish, Hindu varieties. **Effects**: social cohesion within group; conflict with outsiders; resistance to change; political mobilisation.\n\n**Evaluation**: fundamentalism provides identity/meaning but can lead to extremism, violence.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Group insists on literal interpretation of religious text, rejects modern values. Type?",
          solution: "Fundamentalism.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-fund-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is religious fundamentalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liberal theology" },
              { id: "b", text: "Strict literal adherence to religious texts" },
              { id: "c", text: "Modern interpretation" },
              { id: "d", text: "Secular values" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fundamentalism",
                statement: "Literal adherence.",
              },
            ],
            steps: [
              {
                reasoning: "Fundamentalism = literal texts.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Literal adherence",
            commonErrors: ["Modern confused."],
          },
        },
        {
          id: "eias-soc-u3-fund-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of fundamentalism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fundamentalism causes",
                statement: "Threat + change.",
              },
            ],
            steps: [
              {
                reasoning: "Reaction to secularisation — threat to identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Globalisation — cultural threat, rapid change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Political marginalisation — minority groups seek strength.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Secularisation, globalisation, marginalisation.",
            commonErrors: ["Only one.", "Wrong cause."],
          },
        },
        {
          id: "eias-soc-u3-fund-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one positive and one negative effect of fundamentalism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fundamentalism effects",
                statement: "Identity vs conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive: provides identity, meaning, community cohesion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Positive: resistance to rapid change — stability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Negative: conflict with outsiders — intolerance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Negative: can lead to extremism, violence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Identity+stability vs conflict+extremism.",
            commonErrors: ["Only positive.", "Only negative."],
          },
        },
        {
          id: "eias-soc-u3-fund-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Fundamentalist group gains political power.",
          parts: [
            {
              label: "a",
              prompt: "Explain appeal of fundamentalism.",
              marks: 4,
            },
            { label: "b", prompt: "Evaluate risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fundamentalism politics",
                statement: "Appeal + risk.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Clear identity — certainty in uncertain world.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Community — belonging, support.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Intolerance — may suppress other views.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Extremism — violence, human rights abuses.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) identity+community (b) intolerance+extremism",
            commonErrors: ["No appeal.", "No risk."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u3-nrm",
      title: "New Religious Movements",
      skill: "Explain new religious movements and their types.",
      lesson: {
        sections: [
          {
            heading: "Types of religious groups",
            body: "**Denomination**: established branch — accepted mainstream (Anglican, Presbyterian). **Sect**: breakaway group — strict, often opposed to mainstream (Amish, Jehovah's Witnesses). **Cult**: new movement — often deviant, leader-centred, controversial (Scientology, Heaven's Gate).\n\n**NRM characteristics**: new, small, often charismatic leader, strict rules, isolation from mainstream.",
          },
          {
            heading: "NRM theories",
            body: "**NRM growth**: response to modernity — meaning in 'disenchanted' world; social deprivation — marginalised groups seek belonging. **Brainwashing thesis**: members coerced — but critics say most join voluntarily. **Audience theory**: NRMs provide answers mainstream fails.\n\n**Evaluation**: NRMs fill spiritual needs but some exploit members — cults controversial.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "New group with charismatic leader, strict rules, isolated members. Type?",
          solution: "Cult.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-nrm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a new religious movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secular movement" },
              { id: "b", text: "Established church" },
              { id: "c", text: "Ancient religion" },
              { id: "d", text: "Recently formed religious group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NRM", statement: "New group." },
            ],
            steps: [
              {
                reasoning: "NRM = recently formed.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** New group",
            commonErrors: ["Denomination confused."],
          },
        },
        {
          id: "eias-soc-u3-nrm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish sect and cult.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sect vs cult",
                statement: "Breakaway vs new.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sect: breakaway from established religion — strict.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Cult: new movement — often deviant, leader-centred.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sect has roots in mainstream; cult is novel.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sect=breakaway, cult=new+deviant.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eias-soc-u3-nrm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NRMs attract members.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NRM appeal",
                statement: "Meaning + belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Meaning — answers in 'disenchanted' world.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Belonging — community for marginalised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Certainty — clear rules, guidance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Charismatic leader — personal appeal.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Meaning+belonging+certainty.",
            commonErrors: ["Brainwashing only.", "No reason."],
          },
        },
        {
          id: "eias-soc-u3-nrm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Person joins NRM, cuts off family/friends.",
          parts: [
            {
              label: "a",
              prompt: "Explain using NRM characteristics.",
              marks: 4,
            },
            { label: "b", prompt: "Evaluate brainwashing thesis.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NRM evaluation",
                statement: "Characteristics + coercion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Isolation — cut off outside influences.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Strict rules — control behaviour, identity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Brainwashing: coercion — but critics say most join voluntarily.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Audience theory — people seek what NRMs offer.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) isolation+rules (b) coercion vs voluntary",
            commonErrors: ["No characteristics.", "No eval."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u3-gender",
      title: "Gender and Religion",
      skill: "Explain gender roles in religion and its social effects.",
      lesson: {
        sections: [
          {
            heading: "Gender in religion",
            body: "**Patriarchal religions**: male leadership, male God imagery — Christianity, Islam, Judaism. **Gender roles**: women subordinate — domestic roles, limited leadership. **Exceptions**: Buddhism, some Hindu traditions — more egalitarian.\n\n**Feminist critique**: religion legitimises patriarchy — 'women should be submissive'. **Liberation theology**: religion can challenge inequality — social justice focus.",
          },
          {
            heading: "Religion and social change",
            body: "**Social gospel**: religion inspires reform — abolition, civil rights. **Fundamentalism**: religion resists change — traditional gender roles. **Secularisation**: declining religion → less influence on gender norms.\n\n**Evaluation**: religion both reinforces and challenges gender inequality — context-dependent.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Religion says women should be submissive to men. Critique?",
          solution: "Feminist — legitimises patriarchy.",
        },
      },
      questions: [
        {
          id: "eias-soc-u3-gender-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is patriarchal religion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Female-led" },
              { id: "b", text: "Egalitarian" },
              { id: "c", text: "Secular" },
              { id: "d", text: "Male-dominated leadership/imagery" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Patriarchal religion",
                statement: "Male dominance.",
              },
            ],
            steps: [
              {
                reasoning: "Patriarchal = male-dominated.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Male dominance",
            commonErrors: ["Egalitarian confused."],
          },
        },
        {
          id: "eias-soc-u3-gender-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two feminist criticisms of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminist critique",
                statement: "Patriarchy legitimation.",
              },
            ],
            steps: [
              {
                reasoning: "Legitimises patriarchy — women subordinate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Male God imagery — reinforces male superiority.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limits women's roles — domestic, not leadership.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Patriarchy, male imagery, limited roles.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-soc-u3-gender-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how religion can challenge inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion + change",
                statement: "Liberation potential.",
              },
            ],
            steps: [
              {
                reasoning: "Social gospel — religion inspires reform.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Liberation theology — challenges poverty, injustice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Civil rights — religious leaders mobilise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Moral authority — religion can pressure change.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Social gospel+liberation+rights.",
            commonErrors: ["Only reinforces.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u3-gender-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Religious texts used to justify gender inequality.",
          parts: [
            { label: "a", prompt: "Explain the mechanism.", marks: 4 },
            { label: "b", prompt: "Suggest counter-arguments.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender + religion",
                statement: "Justification vs reinterpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Literal interpretation — texts seen as divine law.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Authority — challenging religion seen as challenging God.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Reinterpretation — context, metaphor, evolution.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Progressive theology — religion can support equality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) authority+literal (b) reinterpret+progressive",
            commonErrors: ["Fixed view.", "No counter."],
          },
        },
      ],
    },
  ],
};
