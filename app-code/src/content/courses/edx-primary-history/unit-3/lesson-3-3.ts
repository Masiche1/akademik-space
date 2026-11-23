import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edxph-u3-lesson-3-3",
  code: "3-3",
  title: "Tudors and the Industrial Revolution",
  goal: "I CAN describe Tudor England and the Industrial Revolution.",
  standards: ["Y5-Y6 History", "Tudors and industry"],
  vocabulary: [
    { term: "Tudor", definition: "The dynasty ruling England 1485-1603." },
    {
      term: "Reformation",
      definition: "The split of the Christian Church in the 1500s.",
    },
    {
      term: "Industrial Revolution",
      definition: "Period of rapid industrialisation from ~1760.",
    },
    {
      term: "Enclosure",
      definition: "Fencing off common land for private farming.",
    },
  ],
  concepts: [
    {
      id: "edxph-u3-tudors",
      title: "The Tudor Dynasty",
      skill: "Describe key Tudor monarchs and events.",
      lesson: {
        sections: [
          {
            heading: "Tudor monarchs",
            body: "Tudors ruled 1485-1603: Henry VII founded the dynasty after defeating Richard III at Bosworth. Henry VIII broke with Rome, made himself head of the Church of England, and had six wives. Edward VI was a child king; Mary I restored Catholicism ('Bloody Mary'); Elizabeth I defeated the Spanish Armada and presided over the Elizabethan golden age.",
          },
          {
            heading: "Tudor achievements",
            body: "Tudors: united England and Wales, explored America (Cabot, Drake), defeated Spain (Armada 1588), produced Shakespeare and the Globe Theatre, and built grand palaces (Hampton Court). Tudor style — half-timbered houses, portraits, music — is iconic. The period saw the beginnings of the English language's modern form.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who defeated the Spanish Armada?",
          solution: "Elizabeth I (1588).",
        },
      },
      questions: [
        {
          id: "edxph-u3-tud-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How long did the Tudors rule England?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 years" },
              { id: "b", text: "About 118 years" },
              { id: "c", text: "50 years" },
              { id: "d", text: "200 years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tudor period",
                statement: "1485-1603.",
              },
            ],
            steps: [
              { reasoning: "1485-1603 = 118 years.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** ~118 years",
            commonErrors: ["Wrong duration."],
          },
        },
        {
          id: "edxph-u3-tud-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who defeated the Spanish Armada in 1588?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Henry VIII" },
              { id: "b", text: "Elizabeth I" },
              { id: "c", text: "Mary I" },
              { id: "d", text: "Henry VII" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spanish Armada",
                statement: "Elizabeth I.",
              },
            ],
            steps: [
              { reasoning: "Elizabeth = Armada.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Elizabeth I",
            commonErrors: ["Wrong monarch."],
          },
        },
        {
          id: "edxph-u3-tud-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two famous Tudor monarchs and one thing each is known for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tudor monarchs",
                statement: "Henry VIII, Elizabeth I.",
              },
            ],
            steps: [
              {
                reasoning: "Monarch 1 + achievement, e.g. Henry VIII — Church.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Monarch 2 + achievement, e.g. Elizabeth I — Armada.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Henry VIII+Elizabeth I",
            commonErrors: ["Wrong pairings."],
          },
        },
        {
          id: "edxph-u3-tud-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why was the Elizabethan era called a 'golden age'? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elizabethan golden age",
                statement: "Cultural + naval success.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shakespeare, theatre, exploration — cultural flourishing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Defeat of Armada — naval power, national confidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stable rule under Elizabeth I.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Culture+naval power+stability",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-industry",
      title: "The Industrial Revolution",
      skill: "Describe the causes and effects of industrialisation.",
      lesson: {
        sections: [
          {
            heading: "What was it?",
            body: "The Industrial Revolution (~1760-1840) transformed Britain from an agricultural to an industrial nation. Key inventions: steam engine (Watt), spinning jenny (Hargreaves), power loom, steam locomotive (Stephenson). Factories replaced home workshops; iron, coal and textiles drove growth. Towns grew rapidly — Manchester became 'Cottonopolis'.",
          },
          {
            heading: "Effects",
            body: "Positive: more goods, cheaper products, economic growth, new jobs. Negative: long hours, child labour, pollution, poor living conditions in factory towns, exploitation. The revolution spread worldwide — transforming economies and societies. It also led to political change — workers organised for rights, unions formed, and democracy expanded.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two inventions of the Industrial Revolution.",
          solution: "Steam engine; spinning jenny.",
        },
      },
      questions: [
        {
          id: "edxph-u3-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Industrial Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A war" },
              { id: "b", text: "Shift from farming to factory production" },
              { id: "c", text: "A building boom" },
              { id: "d", text: "A type of government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Industrial Revolution",
                statement: "Farming→factories.",
              },
            ],
            steps: [
              { reasoning: "IR = industrialisation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Farming→factories",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edxph-u3-ind-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who invented the steam engine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "James Watt" },
              { id: "b", text: "Isambard Kingdom Brunel" },
              { id: "c", text: "George Stephenson" },
              { id: "d", text: "Robert Fulton" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steam engine",
                statement: "James Watt.",
              },
            ],
            steps: [
              { reasoning: "Watt = steam engine.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(a)** James Watt",
            commonErrors: ["Wrong inventor."],
          },
        },
        {
          id: "edxph-u3-ind-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two positive and two negative effects of the Industrial Revolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR effects",
                statement: "Growth vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Positive — more goods, economic growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive — new jobs/technologies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative — pollution, child labour, poor conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Growth+jobs vs pollution+labour",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "edxph-u3-ind-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Industrial Revolution changed the way people lived and worked.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IR social change",
                statement: "Work + living changed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Work — factories replaced home workshops; regular hours.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Living — people moved to towns; urbanisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social — new class divisions, workers vs owners.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Work+living+social changes",
            commonErrors: ["Only economic view."],
          },
        },
      ],
    },
    {
      id: "edxph-u3-imperial",
      title: "The British Empire",
      skill: "Describe the growth and impact of the British Empire.",
      lesson: {
        sections: [
          {
            heading: "Empire building",
            body: "The British Empire grew from trading posts to the largest empire in history — at its peak (1920s) it ruled about a quarter of the world's land and people. It included India, Canada, Australia, parts of Africa and the Caribbean. The empire was built through trade, colonisation, military conquest, and settlement.",
          },
          {
            heading: "Empire's legacy",
            body: "The empire had mixed effects: it spread English language, law and institutions worldwide; built railways and infrastructure; but also exploited resources, enslaved people, and imposed British rule. After WWII many colonies gained independence — the empire largely dissolved by the 1970s. The Commonwealth remains as a voluntary association.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "When was the British Empire at its largest?",
          solution: "1920s — about a quarter of the world.",
        },
      },
      questions: [
        {
          id: "edxph-u3-emp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the British Empire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A trading company" },
              { id: "b", text: "Territories ruled by Britain worldwide" },
              { id: "c", text: "A military base" },
              { id: "d", text: "A type of government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "British Empire",
                statement: "Global territories.",
              },
            ],
            steps: [
              { reasoning: "Empire = global rule.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Global territories",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u3-emp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which country was the 'Jewel in the Crown' of the empire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Canada" },
              { id: "b", text: "India" },
              { id: "c", text: "Australia" },
              { id: "d", text: "South Africa" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "British Empire",
                statement: "India = jewel.",
              },
            ],
            steps: [{ reasoning: "India = jewel.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** India",
            commonErrors: ["Wrong country."],
          },
        },
        {
          id: "edxph-u3-emp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one positive and one negative effect of the British Empire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Empire effects",
                statement: "Mixed legacy.",
              },
            ],
            steps: [
              {
                reasoning: "Positive — language, law, infrastructure spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative — exploitation, slavery, loss of independence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Positive+negative effects",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "edxph-u3-emp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the British Empire declined after WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Empire decline",
                statement: "Costs + independence movements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Britain weakened economically and militarily after WWII.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Colonies demanded independence — nationalism grew.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost of maintaining empire too high — peaceful decolonisation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Weakness+nationalism+costs",
            commonErrors: ["No real reasons."],
          },
        },
      ],
    },
  ],
};
