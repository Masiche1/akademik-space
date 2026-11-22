import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "asoc-u7-lesson-7-1",
  code: "7-1",
  title: "Religion and Social Order",
  goal: "I CAN explain religion's role in society and its relationship to social change.",
  standards: [
    "9699 P4: Religion and social order, religion as source of social change",
  ],
  vocabulary: [
    { term: "Sacred", definition: "Things set apart as holy or divine." },
    { term: "Profane", definition: "Ordinary everyday things." },
    {
      term: "Collective conscience",
      definition: "Shared moral beliefs uniting society.",
    },
    {
      term: "Anomie",
      definition: "Normlessness or breakdown of social norms.",
    },
    {
      term: "Totem",
      definition: "Object representing the group's sacred identity.",
    },
    {
      term: "Civil religion",
      definition: "Shared secular beliefs functioning like religion.",
    },
  ],
  concepts: [
    {
      id: "asoc-u7-functionalism",
      title: "Functionalist views of religion",
      skill: "Explain Durkheim's and Parsons' views of religion.",
      lesson: {
        sections: [
          {
            heading: "Durkheim",
            body: "Religion unites society through shared sacred beliefs — the totem represents the group itself. Creates collective conscience, social solidarity. Without religion, anomie (normlessness) results.",
          },
          {
            heading: "Parsons",
            body: "Religion answers ultimate questions (meaning of life, death) that science can't. Provides values supporting social order. 'Civil religion' — shared civic rituals function similarly to religion.",
          },
          {
            heading: "Criticisms",
            body: "Assumes religion is universal and positive — ignores conflict, oppression, and declining religiosity. Doesn't explain religious conflict or fundamentalism.",
          },
        ],
        keyFormulas: [
          {
            name: "Functionalist religion",
            statement:
              "Durkheim=solidarity; Parsons=meaning; criticisms=ignores conflict.",
          },
        ],
        workedExample: {
          problem: "How does Durkheim explain religion's social function?",
          solution:
            "Shared sacred beliefs (totem) create collective conscience and social solidarity.",
        },
      },
      questions: [
        {
          id: "asoc-u7-fu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Durkheim's totem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A holy book" },
              { id: "b", text: "A type of church building" },
              {
                id: "c",
                text: "Object representing the group's sacred identity",
              },
              { id: "d", text: "A religious leader" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Totem",
                statement: "Represents group identity.",
              },
            ],
            steps: [
              {
                reasoning: "Totem = sacred symbol.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Object representing the group's sacred identity",
            commonErrors: ["Confusing with religious text."],
          },
        },
        {
          id: "asoc-u7-fu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is anomie according to Durkheim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anomie",
                statement: "Normlessness/breakdown of norms.",
              },
            ],
            steps: [
              {
                reasoning: "Breakdown of social norms.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Religion prevents it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Normlessness — breakdown of social norms that religion helps prevent.",
            commonErrors: ["Saying it's a disease."],
          },
        },
        {
          id: "asoc-u7-fu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Durkheim's view of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Durkheim",
                statement: "Solidarity vs conflict/decline.",
              },
            ],
            steps: [
              {
                reasoning: "Explains social solidarity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sacred/profane distinction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores conflict/oppression.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Explains unity but ignores religious conflict and decline.",
            commonErrors: ["Description only."],
          },
        },
        {
          id: "asoc-u7-fu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functionalist religion.",
          parts: [
            { label: "a", prompt: "Sacred vs profane?", marks: 2 },
            { label: "b", prompt: "Totem?", marks: 2 },
            { label: "c", prompt: "Anomie?", marks: 2 },
            { label: "d", prompt: "Parsons' view?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism",
                statement: "Concepts+Durkheim+Parsons.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Holy vs ordinary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Sacred symbol.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Represents group.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Normlessness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Religion prevents.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Answers ultimate questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Supports social order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Civil religion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) sacred/profane (b) totem (c) anomie (d) Parsons",
          },
        },
        {
          id: "asoc-u7-fu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did Parsons call 'civil religion'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of church" },
              {
                id: "b",
                text: "Shared civic rituals functioning like religion",
              },
              { id: "c", text: "A political party" },
              { id: "d", text: "A secular law" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Civil religion",
                statement: "Shared secular beliefs like religion.",
              },
            ],
            steps: [
              {
                reasoning: "Civil religion = civic rituals.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Shared civic rituals functioning like religion",
            commonErrors: ["Confusing with a church."],
          },
        },
        {
          id: "asoc-u7-fu-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what Durkheim meant by the 'collective conscience'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective conscience",
                statement: "Shared moral beliefs uniting society.",
              },
            ],
            steps: [
              {
                reasoning: "Shared moral beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Unites society/creates solidarity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The shared moral beliefs that unite society and create solidarity.",
            commonErrors: ["Describing individual conscience."],
          },
        },
        {
          id: "asoc-u7-fu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Durkheim's view, which of the following is 'sacred'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An everyday object like a spoon" },
              { id: "b", text: "Ordinary work" },
              { id: "c", text: "A daily routine" },
              {
                id: "d",
                text: "A totem representing the group's identity",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sacred",
                statement: "Set apart as holy.",
              },
            ],
            steps: [
              {
                reasoning: "Totem = sacred.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** A totem representing the group's identity",
            commonErrors: ["Confusing sacred with profane."],
          },
        },
        {
          id: "asoc-u7-fu-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate Parsons' view that religion provides meaning and supports social order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parsons",
                statement: "Meaning+order vs criticisms.",
              },
            ],
            steps: [
              {
                reasoning: "Answers ultimate questions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Provides values for order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores conflict/decline.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Useful for meaning/order but ignores conflict and declining religiosity.",
            commonErrors: ["Description only."],
          },
        },
        {
          id: "asoc-u7-fu-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Parsons, religion answers which questions that science cannot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Political questions only" },
              { id: "b", text: "Technical questions" },
              { id: "c", text: "Mathematical problems" },
              {
                id: "d",
                text: "Ultimate questions about meaning of life and death",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parsons",
                statement: "Answers ultimate questions.",
              },
            ],
            steps: [
              {
                reasoning: "Ultimate questions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Ultimate questions about meaning of life and death",
            commonErrors: ["Confusing with science."],
          },
        },
        {
          id: "asoc-u7-fu-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does religion prevent anomie, according to Durkheim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anomie",
                statement: "Religion maintains norms.",
              },
            ],
            steps: [
              {
                reasoning: "Shared beliefs maintain norms.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevents normlessness.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Shared religious beliefs reinforce social norms, preventing normlessness.",
            commonErrors: ["Vague answer."],
          },
        },
        {
          id: "asoc-u7-fu-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a criticism of the functionalist view of religion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It denies religion exists" },
              { id: "b", text: "It overstates Marxist ideas" },
              {
                id: "c",
                text: "It ignores conflict, oppression and declining religiosity",
              },
              { id: "d", text: "It focuses on women only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criticism",
                statement: "Ignores conflict/decline.",
              },
            ],
            steps: [
              {
                reasoning: "Too positive/ignores conflict.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** It ignores conflict, oppression and declining religiosity",
            commonErrors: ["Confusing with conflict view."],
          },
        },
        {
          id: "asoc-u7-fu-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Durkheim's and Parsons' explanations of religion's social function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Durkheim vs Parsons",
                statement: "Solidarity vs meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Durkheim=solidarity/totem.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Parsons=meaning/order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both see religion as positive.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Durkheim emphasises solidarity via totem; Parsons emphasises meaning and civil religion — both see religion as functional.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "asoc-u7-fu-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Durkheim's theory, the totem primarily represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Political power" },
              { id: "b", text: "The group's sacred identity" },
              { id: "c", text: "Economic production" },
              { id: "d", text: "The state" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Totem",
                statement: "Represents group.",
              },
            ],
            steps: [
              {
                reasoning: "Totem = group identity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** The group's sacred identity",
            commonErrors: ["Confusing with other symbols."],
          },
        },
        {
          id: "asoc-u7-fu-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functionalist views of religion.",
          parts: [
            { label: "a", prompt: "Sacred vs profane?", marks: 2 },
            { label: "b", prompt: "Collective conscience?", marks: 2 },
            { label: "c", prompt: "Parsons and civil religion?", marks: 2 },
            { label: "d", prompt: "One criticism?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism",
                statement: "Concepts+Durkheim+Parsons+criticism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Holy vs ordinary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Shared moral beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Creates solidarity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Civic rituals like religion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Parsons' concept.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ignores conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Ignores decline/oppression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Assumes universal/positive.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) sacred/profane (b) collective conscience (c) civil religion (d) criticism",
          },
        },
        {
          id: "asoc-u7-fu-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Durkheim argued that without shared religious beliefs, society risks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pluralism" },
              { id: "b", text: "Economic collapse" },
              { id: "c", text: "Religious revival" },
              { id: "d", text: "Anomie (normlessness)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anomie",
                statement: "Normlessness.",
              },
            ],
            steps: [
              {
                reasoning: "No beliefs = anomie.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Anomie (normlessness)",
            commonErrors: ["Confusing with other concepts."],
          },
        },
        {
          id: "asoc-u7-fu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the functionalist view of religion's role in society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functionalism",
                statement: "Positive function vs limitations.",
              },
            ],
            steps: [
              {
                reasoning: "Explains solidarity/meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Totem/collective conscience.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores conflict/decline.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Explains unity and meaning but ignores conflict, oppression and decline — too positive.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "asoc-u7-change-conflict",
      title: "Religion and Social Change (Conflict Views)",
      skill:
        "Explain Marxist and feminist views of religion and its role in change.",
      lesson: {
        sections: [
          {
            heading: "Marxist view",
            body: "Religion is 'opium of the people' — eases suffering, legitimises inequality ('rich man in heaven'). Serves ruling class interests by promising rewards in afterlife. BUT: liberation theology shows religion CAN inspire social change — Marx acknowledged this possibility.",
          },
          {
            heading: "Feminist view",
            body: "Religion reinforces patriarchy — male gods/leaders, women subordinate. Sacred texts often justify gender inequality. Some feminist theology challenges this — womanist/liberation perspectives.",
          },
          {
            heading: "Religion and change",
            body: "Religion can be conservative (resists change) OR radical (inspired civil rights, abolition, liberation movements). Depends on interpretation and context.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflict religion",
            statement:
              "Marxist=opium/legitimises; Feminist=patriarchy; can inspire change.",
          },
        ],
        workedExample: {
          problem: "How does Marx view religion?",
          solution:
            "'Opium of the people' — eases suffering and legitimises inequality for the ruling class.",
        },
      },
      questions: [
        {
          id: "asoc-u7-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did Marx call religion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Engine of progress" },
              { id: "b", text: "Source of truth" },
              { id: "c", text: "Voice of the people" },
              { id: "d", text: "Opium of the people" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marx",
                statement: "Opium of the people.",
              },
            ],
            steps: [{ reasoning: "Marx = opium.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Opium of the people",
            commonErrors: ["Thinking Marx praised religion."],
          },
        },
        {
          id: "asoc-u7-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do feminists view religion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminist religion",
                statement: "Reinforces patriarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Male dominance in religion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Texts justify inequality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Religion reinforces patriarchy through male leadership and texts.",
            commonErrors: ["Saying feminists praise religion."],
          },
        },
        {
          id: "asoc-u7-ch-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Can religion inspire social change? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion & change",
                statement: "Conservative vs radical potential.",
              },
            ],
            steps: [
              {
                reasoning: "Usually legitimises order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Liberation theology/civil rights.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Depends on interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Nuanced answer.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Usually conservative but can inspire change (liberation theology, civil rights).",
            commonErrors: ["Absolute claim either way."],
          },
        },
        {
          id: "asoc-u7-ch-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Conflict views of religion.",
          parts: [
            { label: "a", prompt: "Marxist view?", marks: 3 },
            { label: "b", prompt: "Feminist view?", marks: 2 },
            { label: "c", prompt: "Religion as conservative?", marks: 2 },
            { label: "d", prompt: "Religion inspiring change?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict religion",
                statement: "Marxist+feminist+change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Opium of people.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Legitimises inequality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Serves ruling class.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Patriarchy reinforced.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Male leadership/texts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Resists change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Maintains status quo.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Liberation theology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Civil rights movements.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Marxist (b) feminist (c) conservative (d) change",
          },
        },
        {
          id: "asoc-u7-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to Marx, religion primarily serves whose interests?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The working class" },
              { id: "b", text: "Women only" },
              { id: "c", text: "The ruling class" },
              { id: "d", text: "The clergy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marx",
                statement: "Serves ruling class.",
              },
            ],
            steps: [
              {
                reasoning: "Religion legitimises ruling class.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The ruling class",
            commonErrors: ["Thinking it helps workers."],
          },
        },
        {
          id: "asoc-u7-ch-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'liberation theology' and why is it significant for Marxist views?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liberation theology",
                statement: "Religion inspiring social change.",
              },
            ],
            steps: [
              {
                reasoning: "Christian movement for justice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows religion can challenge inequality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "A movement using religious ideas to fight poverty and injustice — shows religion can inspire change.",
            commonErrors: ["Confusing with functionalism."],
          },
        },
        {
          id: "asoc-u7-ch-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does Marx's phrase 'opium of the people' suggest about religion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religion is purely beneficial" },
              { id: "b", text: "Religion cures all problems" },
              {
                id: "c",
                text: "Religion eases suffering and distracts from real change",
              },
              { id: "d", text: "Religion has no social role" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opium",
                statement: "Eases suffering/legitimises order.",
              },
            ],
            steps: [
              {
                reasoning: "Opium = dulls pain.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Religion eases suffering and distracts from real change",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "asoc-u7-ch-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the feminist view that religion reinforces patriarchy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feminist religion",
                statement: "Patriarchy vs feminist theology.",
              },
            ],
            steps: [
              {
                reasoning: "Male gods/leaders dominate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Texts justify inequality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Feminist theology challenges this.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Strong evidence of patriarchal structures but feminist theology offers resistance — not universally true.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-ch-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Feminists argue that religion often:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reinforces male leadership and gender inequality",
              },
              { id: "b", text: "Empowers women equally" },
              { id: "c", text: "Promotes matriarchy" },
              { id: "d", text: "Has no view on gender" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminist view",
                statement: "Reinforces patriarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Male dominance in religion.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Reinforces male leadership and gender inequality",
            commonErrors: ["Confusing with functionalist view."],
          },
        },
        {
          id: "asoc-u7-ch-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how religion can inspire social change, giving an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion & change",
                statement: "Radical potential.",
              },
            ],
            steps: [
              {
                reasoning: "Religious ideas motivate justice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: civil rights/liberation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Religious beliefs about justice can motivate movements — e.g. civil rights, liberation theology.",
            commonErrors: ["No example given."],
          },
        },
        {
          id: "asoc-u7-ch-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes religion's role in social change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always conservative" },
              { id: "b", text: "Has no role" },
              { id: "c", text: "Always revolutionary" },
              {
                id: "d",
                text: "Can be either, depending on interpretation and context",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion & change",
                statement: "Context-dependent.",
              },
            ],
            steps: [
              {
                reasoning: "Depends on interpretation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Can be either, depending on interpretation and context",
            commonErrors: ["Absolute claim."],
          },
        },
        {
          id: "asoc-u7-ch-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Marxist and feminist critiques of religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marxist vs feminist",
                statement: "Class vs gender critique.",
              },
            ],
            steps: [
              {
                reasoning: "Marx=class/opium.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Feminist=gender/patriarchy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both see religion as oppressive.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Marxists focus on class inequality; feminists on gender inequality — both see religion legitimising oppression.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "asoc-u7-ch-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Marx acknowledged that religion could:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never change" },
              {
                id: "b",
                text: "Inspire social change (e.g. liberation theology)",
              },
              { id: "c", text: "Eliminate class" },
              { id: "d", text: "Only serve women" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marx",
                statement: "Radical potential.",
              },
            ],
            steps: [
              {
                reasoning: "Marx saw change potential.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Inspire social change (e.g. liberation theology)",
            commonErrors: ["Thinking Marx denied all change."],
          },
        },
        {
          id: "asoc-u7-ch-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Religion and social change.",
          parts: [
            { label: "a", prompt: "Explain 'opium of the people'.", marks: 2 },
            {
              label: "b",
              prompt: "How does religion legitimise inequality?",
              marks: 2,
            },
            { label: "c", prompt: "Feminist critique?", marks: 2 },
            {
              label: "d",
              prompt: "Evaluate religion's role in change.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion & change",
                statement: "Marx+feminist+legitimise+evaluate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Eases suffering/distracts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Marx's phrase explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Afterlife rewards/promise.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Accept inequality now.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Patriarchy reinforced.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Male leadership/texts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Usually conservative.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Can inspire change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Depends on context.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) opium (b) legitimise (c) feminist (d) evaluation",
          },
        },
        {
          id: "asoc-u7-ch-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Liberation theology is significant because it shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religion always oppresses" },
              { id: "b", text: "All churches are radical" },
              { id: "c", text: "Religion can inspire social change" },
              { id: "d", text: "Marx was entirely wrong" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liberation theology",
                statement: "Religion for change.",
              },
            ],
            steps: [
              {
                reasoning: "Shows radical potential.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** Religion can inspire social change",
            commonErrors: ["Overgeneralising."],
          },
        },
        {
          id: "asoc-u7-ch-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether religion is mainly a conservative or radical force in society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservative vs radical",
                statement: "Legitimises vs inspires.",
              },
            ],
            steps: [
              {
                reasoning: "Usually legitimises order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can inspire movements.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Context/interpretation matters.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mainly conservative but can be radical — depends on interpretation and context.",
            commonErrors: ["One-sided claim."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u7-7-1-notes",
      title: "Religion and social order — notes",
      summary:
        "Durkheim/Parsons functionalism, Marxist/feminist critiques, religion and change.",
      sections: [
        {
          heading: "Functionalism",
          body: "Durkheim: totem+solidarity+anomie; Parsons: meaning+civil religion.",
        },
        {
          heading: "Conflict",
          body: "Marx: opium/legitimises; feminist: patriarchy; but can inspire change (liberation theology).",
        },
      ],
    },
  ],
};
