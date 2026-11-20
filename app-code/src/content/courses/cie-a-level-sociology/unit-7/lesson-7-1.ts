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
              {
                id: "a",
                text: "Object representing the group's sacred identity",
              },
              { id: "b", text: "A type of church building" },
              { id: "c", text: "A religious leader" },
              { id: "d", text: "A holy book" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Opium of the people" },
              { id: "b", text: "Voice of the people" },
              { id: "c", text: "Engine of progress" },
              { id: "d", text: "Source of truth" },
            ],
            correctChoiceId: "a",
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
