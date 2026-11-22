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
              { id: "a", text: "More religious laws" },
              { id: "b", text: "Growth of churches" },
              { id: "c", text: "Decline of religious influence in society" },
              { id: "d", text: "Scientific education" },
            ],
            correctChoiceId: "c",
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
        {
          id: "asoc-u7-sec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is most closely associated with the secularisation thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marx" },
              { id: "b", text: "Parsons" },
              { id: "c", text: "Durkheim" },
              { id: "d", text: "Wilson" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wilson",
                statement: "Secularisation thesis.",
              },
            ],
            steps: [
              {
                reasoning: "Wilson = secularisation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Wilson",
            commonErrors: ["Confusing with other theorists."],
          },
        },
        {
          id: "asoc-u7-sec-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two causes of secularisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Causes",
                statement: "Science, industrialisation, etc.",
              },
            ],
            steps: [
              { reasoning: "Any two causes.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Science/rationality, industrialisation, urbanisation, pluralism.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "asoc-u7-sec-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is evidence FOR secularisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expanding religious laws" },
              { id: "b", text: "New churches everywhere" },
              {
                id: "c",
                text: "Falling church attendance and weaker affiliation",
              },
              { id: "d", text: "Rising church attendance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence",
                statement: "Falling attendance.",
              },
            ],
            steps: [
              {
                reasoning: "Decline indicators.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Falling church attendance and weaker affiliation",
            commonErrors: ["Confusing with criticism."],
          },
        },
        {
          id: "asoc-u7-sec-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that religion is being privatised rather than dying out.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privatisation",
                statement: "Private belief vs public decline.",
              },
            ],
            steps: [
              {
                reasoning: "Public attendance falls.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Private belief persists.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "May not be 'dying'.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Religion may lose public influence but survive as private belief — privatisation not death.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-sec-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Privatisation of religion means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religion disappears entirely" },
              { id: "b", text: "Religion becomes political" },
              {
                id: "c",
                text: "Religion becomes personal rather than public",
              },
              { id: "d", text: "Religion becomes more public" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Privatisation",
                statement: "Personal not public.",
              },
            ],
            steps: [
              {
                reasoning: "Private = personal.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Religion becomes personal rather than public",
            commonErrors: ["Confusing with decline."],
          },
        },
        {
          id: "asoc-u7-sec-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'desacralisation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Desacralisation",
                statement: "Science replaces sacred explanations.",
              },
            ],
            steps: [
              {
                reasoning: "Sacred replaced by science.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rational/scientific worldview.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Sacred explanations replaced by scientific/rational ones.",
            commonErrors: ["Confusing with secularisation."],
          },
        },
        {
          id: "asoc-u7-sec-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a criticism of the secularisation thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no evidence at all" },
              { id: "b", text: "Church attendance is rising" },
              { id: "c", text: "Science has disappeared" },
              {
                id: "d",
                text: "Religion remains politically influential and new movements are growing",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criticism",
                statement: "Religion persists.",
              },
            ],
            steps: [
              {
                reasoning: "Persistence/new movements.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Religion remains politically influential and new movements are growing",
            commonErrors: ["Confusing with evidence for."],
          },
        },
        {
          id: "asoc-u7-sec-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the 'post-secular' view of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-secular",
                statement: "Religion persists in new forms.",
              },
            ],
            steps: [
              {
                reasoning: "Organised decline.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Religion persists differently.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Challenges simple decline.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Post-secular view: religion remains influential in new/personalised forms despite secularisation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-sec-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Religious resurgence in the Global South challenges secularisation because it shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All religion is dying" },
              { id: "b", text: "Wilson was completely right" },
              { id: "c", text: "Religion can remain or grow strong" },
              { id: "d", text: "Science has failed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resurgence",
                statement: "Global persistence.",
              },
            ],
            steps: [
              {
                reasoning: "Resurgence = persistence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** Religion can remain or grow strong",
            commonErrors: ["Misreading the point."],
          },
        },
        {
          id: "asoc-u7-sec-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The secularisation debate.",
          parts: [
            { label: "a", prompt: "Define 'secular'.", marks: 1 },
            { label: "b", prompt: "Two indicators?", marks: 2 },
            { label: "c", prompt: "Two causes?", marks: 2 },
            { label: "d", prompt: "Two criticisms?", marks: 4 },
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
                reasoning: "Non-religious/separated.",
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
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct.",
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
                reasoning: "Political influence.",
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
              "(a) secular (b) indicators (c) causes (d) criticisms",
          },
        },
        {
          id: "asoc-u7-sec-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'post-secular' view argues that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Religion remains influential despite secularisation",
              },
              { id: "b", text: "Religion ended after death" },
              { id: "c", text: "All religion is anti-modern" },
              { id: "d", text: "Science replaced all belief" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Post-secular",
                statement: "Religion persists.",
              },
            ],
            steps: [
              {
                reasoning: "Post-secular = persists.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Religion remains influential despite secularisation",
            commonErrors: ["Confusing with secularisation."],
          },
        },
        {
          id: "asoc-u7-sec-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that the secularisation thesis is Eurocentric.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eurocentrism",
                statement: "West-focused vs global.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence mainly Western.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Global South resurgence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "May not apply globally.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Evidence is Western-focused; religious resurgence elsewhere suggests the thesis may not apply globally.",
            commonErrors: ["One-sided."],
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
              { id: "a", text: "Church selling goods" },
              { id: "b", text: "Religious competition only" },
              {
                id: "c",
                text: "Individuals pick and mix beliefs like consumers",
              },
              { id: "d", text: "Secular shopping" },
            ],
            correctChoiceId: "c",
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
        {
          id: "asoc-u7-gp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "New Age movements are best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Eclectic, individualistic spirituality",
              },
              { id: "b", text: "Organised churches" },
              { id: "c", text: "Scientific organisations" },
              { id: "d", text: "Political parties" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New Age",
                statement: "Eclectic spirituality.",
              },
            ],
            steps: [
              {
                reasoning: "New Age = eclectic.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Eclectic, individualistic spirituality",
            commonErrors: ["Confusing with organised religion."],
          },
        },
        {
          id: "asoc-u7-gp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does religion often reinforce patriarchy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender",
                statement: "Male dominance.",
              },
            ],
            steps: [
              {
                reasoning: "Male leaders/gods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Women subordinate roles.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Through male leadership, male gods and subordinate roles for women.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "asoc-u7-gp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'spiritual marketplace' suggests that individuals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only follow science" },
              { id: "b", text: "Must follow one church" },
              {
                id: "c",
                text: "Pick and mix beliefs from different traditions",
              },
              { id: "d", text: "Reject all spirituality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spiritual marketplace",
                statement: "Consumer choice of beliefs.",
              },
            ],
            steps: [
              {
                reasoning: "Marketplace = choice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Pick and mix beliefs from different traditions",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "asoc-u7-gp-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the postmodern view that organised religion is declining but spirituality persists.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern religion",
                statement: "Organised decline vs personal persistence.",
              },
            ],
            steps: [
              {
                reasoning: "Organised religion declining.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Personal spirituality persists.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Eclectic/pick-and-mix.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Organised forms decline but personalised/eclectic spirituality persists — supported by evidence of declining attendance.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-gp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Feminist theology challenges religion by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Questioning male dominance in religious institutions",
              },
              { id: "b", text: "Banning religion" },
              { id: "c", text: "Accepting patriarchy" },
              { id: "d", text: "Removing sacred texts" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminist theology",
                statement: "Challenges patriarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Challenges male dominance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Questioning male dominance in religious institutions",
            commonErrors: ["Confusing with anti-religion."],
          },
        },
        {
          id: "asoc-u7-gp-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a New Religious Movement (NRM)? Give one characteristic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NRM",
                statement: "New/small religious groups.",
              },
            ],
            steps: [
              {
                reasoning: "New/small religious group.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Responds to modern anxieties.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "A new/small religious group, often responding to modern anxieties.",
            commonErrors: ["Confusing with established churches."],
          },
        },
        {
          id: "asoc-u7-gp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'cult' label is often:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always accurate" },
              {
                id: "b",
                text: "Applied pejoratively to unfamiliar groups",
              },
              { id: "c", text: "A neutral academic term" },
              { id: "d", text: "A legal term" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cult label",
                statement: "Pejorative usage.",
              },
            ],
            steps: [
              {
                reasoning: "Often negative label.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Applied pejoratively to unfamiliar groups",
            commonErrors: ["Taking label literally."],
          },
        },
        {
          id: "asoc-u7-gp-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare organised religion with New Age spirituality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organised vs New Age",
                statement: "Structure vs eclecticism.",
              },
            ],
            steps: [
              {
                reasoning: "Organised = structured/doctrine.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "New Age = eclectic/individual.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both provide meaning.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Organised religion is structured with doctrine; New Age is eclectic and individualistic — both offer meaning.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "asoc-u7-gp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Postmodern religion emphasises:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Individual choice and personal spirituality",
              },
              { id: "b", text: "A single absolute truth" },
              { id: "c", text: "Strict doctrine" },
              { id: "d", text: "Centralised authority" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Postmodern religion",
                statement: "Individual choice.",
              },
            ],
            steps: [
              {
                reasoning: "Postmodern = choice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Individual choice and personal spirituality",
            commonErrors: ["Confusing with fundamentalism."],
          },
        },
        {
          id: "asoc-u7-gp-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gender, postmodernity and new religious movements.",
          parts: [
            { label: "a", prompt: "How is religion patriarchal?", marks: 2 },
            { label: "b", prompt: "What is the spiritual marketplace?", marks: 2 },
            { label: "c", prompt: "Characteristics of NRMs?", marks: 2 },
            { label: "d", prompt: "Evaluate postmodern religion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion trends",
                statement: "Gender+marketplace+NRM+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Male leadership/gods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Women subordinate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Pick-and-mix beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Consumer choice model.",
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
                reasoning: "Organised decline.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Personal persistence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) patriarchy (b) marketplace (c) NRM (d) evaluation",
          },
        },
        {
          id: "asoc-u7-gp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Some religions offer women empowerment through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Banning women" },
              {
                id: "b",
                text: "Ordaining women as leaders",
              },
              { id: "c", text: "Male-only clergy" },
              { id: "d", text: "Removing sacred texts" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender",
                statement: "Some empowerment.",
              },
            ],
            steps: [
              {
                reasoning: "Women can lead.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Ordaining women as leaders",
            commonErrors: ["Assuming all religion is patriarchal."],
          },
        },
        {
          id: "asoc-u7-gp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether new religious movements represent decline or adaptation of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NRMs",
                statement: "Decline vs adaptation.",
              },
            ],
            steps: [
              {
                reasoning: "Organised religion declining.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "NRMs show adaptability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Respond to modern needs.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "NRMs suggest religion adapts rather than simply declines — new forms meet modern needs.",
            commonErrors: ["One-sided."],
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
