import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "asoc-u7-lesson-7-2",
  code: "7-2",
  title: "The Secularisation Debate",
  goal: "I CAN explain and evaluate the secularisation thesis.",
  standards: ["9699 P4: The secularisation debate, gender and religion"],
  vocabulary: [
    {
      term: "Secularisation",
      definition: "Decline of religious influence in society.",
    },
    { term: "Secular", definition: "Non-religious; separated from religion." },
    {
      term: "Privatisation of religion",
      definition: "Religion becoming personal rather than public.",
    },
    {
      term: "Desacralisation",
      definition: "Sacred explanations replaced by scientific ones.",
    },
    {
      term: "Fundamentalism",
      definition: "Strict adherence to traditional religious beliefs.",
    },
    {
      term: "Post-secular",
      definition: "Religion remaining influential despite secularisation.",
    },
  ],
  concepts: [
    {
      id: "asoc-u7-secularisation",
      title: "The secularisation thesis",
      skill: "Explain the secularisation debate and its criticisms.",
      lesson: {
        sections: [
          {
            heading: "Secularisation thesis",
            body: "Wilson: religion declining in modern societies. Indicators: falling church attendance, fewer people identify as religious, religion loses public influence. Causes: science/rationality, industrialisation, urbanisation, pluralism.",
          },
          {
            heading: "Evidence for",
            body: "Church attendance declined in many Western countries. Religious affiliation weakening. Public life increasingly secular — laws, education, politics not based on religion.",
          },
          {
            heading: "Criticisms",
            body: "Religion may be privatised not dead — people still believe privately. New religious movements growing. Religion remains politically influential (US, Middle East). Global South seeing religious resurgence. 'Post-secular' view — religion persists in new forms.",
          },
        ],
        keyFormulas: [
          {
            name: "Secularisation",
            statement: "Decline vs privatisation/resurgence; evidence mixed.",
          },
        ],
        workedExample: {
          problem: "What is the secularisation thesis?",
          solution:
            "Religion declining in modern society — falling attendance, less public influence, replaced by rational/scientific thinking.",
        },
      },
      questions: [
        {
          id: "asoc-u7-sec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does secularisation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline of religious influence in society" },
              { id: "b", text: "Growth of churches" },
              { id: "c", text: "More religious laws" },
              { id: "d", text: "Scientific education" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secularisation",
                statement: "Decline of religion.",
              },
            ],
            steps: [
              {
                reasoning: "Secularisation = decline.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Decline of religious influence in society",
            commonErrors: ["Confusing with secularism."],
          },
        },
        {
          id: "asoc-u7-sec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two indicators of secularisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secularisation indicators",
                statement: "Attendance, affiliation, public influence.",
              },
            ],
            steps: [
              { reasoning: "Any two indicators.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Falling church attendance, weaker affiliation, less public influence.",
            commonErrors: ["Only one indicator."],
          },
        },
        {
          id: "asoc-u7-sec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the secularisation thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secularisation",
                statement: "Evidence for vs criticisms.",
              },
            ],
            steps: [
              {
                reasoning: "Falling attendance/affiliation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Privatisation not death.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Global resurgence/new movements.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Evidence supports decline in West but religion persists in new/privatised/global forms.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-sec-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Secularisation debate.",
          parts: [
            { label: "a", prompt: "Define secularisation.", marks: 1 },
            { label: "b", prompt: "Two indicators?", marks: 2 },
            { label: "c", prompt: "Causes?", marks: 2 },
            { label: "d", prompt: "Main criticisms?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secularisation",
                statement: "Definition+indicators+causes+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Decline of religion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two indicators.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Science/rationality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Industrialisation/pluralism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Privatisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "New movements.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Political influence remains.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Global resurgence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) indicators (c) causes (d) criticisms",
          },
        },
      ],
    },
    {
      id: "asoc-u7-gender-postmodern",
      title: "Gender, Postmodernity and New Religious Movements",
      skill:
        "Describe gender and religion, postmodern religious trends, and New Age movements.",
      lesson: {
        sections: [
          {
            heading: "Gender and religion",
            body: "Religion often patriarchal — male leaders/gods, women subordinate roles. Feminist theology challenges this. Some religions offer women empowerment (e.g., some Christian denominations ordain women).",
          },
          {
            heading: "Postmodernity and religion",
            body: "Postmodern view: religion in 'spiritual marketplace' — individuals pick and mix beliefs. New Age movements: eclectic, individualistic, focus on self-spirituality, less organised. Decline of organised religion but rise of personalised spirituality.",
          },
          {
            heading: "New religious movements",
            body: "NRMs: cults, sects, New Age. Often respond to modern anxieties. Can be small and short-lived or grow significantly. 'Cult' label often applied pejoratively to unfamiliar groups.",
          },
        ],
        keyFormulas: [
          {
            name: "Religion trends",
            statement:
              "Gender=patriarchy; Postmodern=pick-and-mix; NRM=New Age/spiritual marketplace.",
          },
        ],
        workedExample: {
          problem: "What is the 'spiritual marketplace'?",
          solution:
            "Postmodern view — individuals choose beliefs like consumers, combining elements from different traditions.",
        },
      },
      questions: [
        {
          id: "asoc-u7-gp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'spiritual marketplace'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Individuals pick and mix beliefs like consumers",
              },
              { id: "b", text: "Church selling goods" },
              { id: "c", text: "Religious competition only" },
              { id: "d", text: "Secular shopping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spiritual marketplace",
                statement: "Pick-and-mix beliefs.",
              },
            ],
            steps: [
              {
                reasoning: "Marketplace = consumer choice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Individuals pick and mix beliefs like consumers",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "asoc-u7-gp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What characterises New Age movements?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New Age",
                statement: "Eclectic, individualistic spirituality.",
              },
            ],
            steps: [
              {
                reasoning: "Eclectic/pick-and-mix.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Self-spirituality focus.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Eclectic, individualistic, self-focused spirituality.",
            commonErrors: ["Confusing with organised religion."],
          },
        },
        {
          id: "asoc-u7-gp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the postmodern view of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern religion",
                statement: "Individual choice vs organised decline.",
              },
            ],
            steps: [
              {
                reasoning: "Individuals choose beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Organised religion declining.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Spirituality persists personally.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Postmodern religion is personalised and eclectic — organised forms decline but spirituality persists.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-gp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gender, postmodernity and NRMs.",
          parts: [
            { label: "a", prompt: "Gender and religion?", marks: 2 },
            { label: "b", prompt: "Postmodern religion?", marks: 3 },
            { label: "c", prompt: "New religious movements?", marks: 2 },
            { label: "d", prompt: "New Age characteristics?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion trends",
                statement: "Gender+postmodern+NRM+New Age.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Patriarchy/male leadership.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Feminist challenges.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spiritual marketplace.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Pick-and-mix beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Organised decline.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Small/new groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Respond to anxieties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Eclectic/individualistic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Self-spirituality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) gender (b) postmodern (c) NRM (d) New Age",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u7-7-2-notes",
      title: "Secularisation and new trends — notes",
      summary:
        "Secularisation thesis, gender, postmodern religion, New Age movements.",
      sections: [
        {
          heading: "Secularisation",
          body: "Wilson: religion declining; critics: privatised/resurgent; evidence mixed.",
        },
        {
          heading: "New trends",
          body: "Spiritual marketplace; New Age=eclectic; NRMs respond to modern anxieties; gender issues persist.",
        },
      ],
    },
  ],
};
