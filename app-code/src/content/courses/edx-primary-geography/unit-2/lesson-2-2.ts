import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edxpg-u2-lesson-2-2",
  code: "2-2",
  title: "The UK's Place in Europe and the World",
  goal: "I CAN explain the UK's position in Europe and its global links.",
  standards: ["Y5-Y6 Geography", "UK in the world"],
  vocabulary: [
    {
      term: "Island nation",
      definition: "A country completely surrounded by water.",
    },
    {
      term: "Channel Tunnel",
      definition:
        "A tunnel under the English Channel linking England to France.",
    },
    {
      term: "Commonwealth",
      definition:
        "A group of countries, many former British colonies, that share links with the UK.",
    },
    {
      term: "Time zone",
      definition: "A region of the world with the same time — UK is GMT/BST.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u2-europe",
      title: "UK and Europe",
      skill: "Describe the UK's position in Europe and connections.",
      lesson: {
        sections: [
          {
            heading: "Geographic position",
            body: "The UK is an island off the northwest coast of mainland Europe. The English Channel separates it from France — about 34 km wide at the narrowest point (Dover to Calais). The Channel Tunnel runs under the sea, carrying trains between Folkestone and Calais in about 35 minutes. Ferries also cross the Channel.",
          },
          {
            heading: "European links",
            body: "The UK has strong links with Europe — trade, travel, culture and history. Millions travel between the UK and Europe each year. The UK was part of the European Union (EU) from 1973 to 2020 (Brexit), and still has close economic and cultural ties. Language, football and tourism connect the UK to Europe.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do people travel between the UK and France?",
          solution: "Channel Tunnel (train), ferries, or flights.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-eu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What separates the UK from France?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Atlantic Ocean" },
              { id: "b", text: "The English Channel" },
              { id: "c", text: "The North Sea" },
              { id: "d", text: "The Irish Sea" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK geography",
                statement: "English Channel separates UK and France.",
              },
            ],
            steps: [
              { reasoning: "Channel = UK-France.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** English Channel",
            commonErrors: ["Wrong body of water."],
          },
        },
        {
          id: "edxpg-u2-eu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Channel Tunnel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A bridge over the sea" },
              {
                id: "b",
                text: "A tunnel under the English Channel for trains",
              },
              { id: "c", text: "A ferry route" },
              { id: "d", text: "A road tunnel in London" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Channel Tunnel",
                statement: "Train tunnel under the Channel.",
              },
            ],
            steps: [
              { reasoning: "Tunnel for trains.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Train tunnel",
            commonErrors: ["Thinking it's a bridge or road."],
          },
        },
        {
          id: "edxpg-u2-eu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three ways people travel between the UK and mainland Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK-Europe links",
                statement: "Tunnel, ferry, air.",
              },
            ],
            steps: [
              { reasoning: "Channel Tunnel — train.", marks: 1, markCode: "M" },
              {
                reasoning: "Ferry — ship across the Channel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flight — plane to European cities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tunnel, ferry, flight",
            commonErrors: ["Missing main methods."],
          },
        },
        {
          id: "edxpg-u2-eu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The UK left the EU in 2020 (Brexit). Explain one way this has affected UK life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brexit impact",
                statement: "Changed trade, travel and law.",
              },
            ],
            steps: [
              {
                reasoning: "Trade — new rules and checks on goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Travel — passport/visa changes for some travel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Law — UK makes own laws, not EU rules.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Trade rules + travel changes + own laws",
            commonErrors: ["Vague or incorrect effects."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-global",
      title: "UK Global Links",
      skill: "Describe the UK's historical and modern global connections.",
      lesson: {
        sections: [
          {
            heading: "Empire and Commonwealth",
            body: "The UK once had the largest empire in history — at its peak it ruled about a quarter of the world's land and people. Many countries were British colonies: India, Australia, Canada, parts of Africa and the Caribbean. Today, the Commonwealth is a voluntary group of 56 countries, many with historical ties to Britain — sharing the English language, law and culture.",
          },
          {
            heading: "Modern global role",
            body: "The UK remains a global player: a major financial centre (London), a nuclear power, a permanent member of the UN Security Council, and a cultural exporter (music, film, TV). London is one of the world's most visited cities. The UK trades with countries worldwide and hosts diverse communities from every continent.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name three Commonwealth countries.",
          solution: "India, Australia, Canada (also Nigeria, Jamaica, etc.)",
        },
      },
      questions: [
        {
          id: "edxpg-u2-glob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Commonwealth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of government" },
              {
                id: "b",
                text: "A group of countries with historical ties to Britain",
              },
              { id: "c", text: "A UK city" },
              { id: "d", text: "An empire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commonwealth",
                statement: "Group with British historical ties.",
              },
            ],
            steps: [
              {
                reasoning: "Commonwealth = tied countries.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tied countries",
            commonErrors: ["Confusing with empire."],
          },
        },
        {
          id: "edxpg-u2-glob-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one country that was once a British colony.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "France" },
              { id: "b", text: "India" },
              { id: "c", text: "Germany" },
              { id: "d", text: "Spain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "British Empire",
                statement: "India was a colony.",
              },
            ],
            steps: [{ reasoning: "India = colony.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** India",
            commonErrors: ["European countries that weren't colonies."],
          },
        },
        {
          id: "edxpg-u2-glob-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways the UK's history affects it today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical legacy",
                statement: "Empire shaped language, culture, institutions.",
              },
            ],
            steps: [
              {
                reasoning: "English language spread globally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Legal/political systems exported — common law, democracy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cultural influence — music, sport, institutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Language + institutions + culture",
            commonErrors: ["No real links."],
          },
        },
        {
          id: "edxpg-u2-glob-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Is the British Empire's legacy positive or negative? Give arguments for both sides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Empire evaluation",
                statement: "Mixed legacy — benefits and harms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive — infrastructure, English language, institutions, trade.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative — exploitation, slavery, loss of independence, poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced view — both true, depends on perspective.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Both — benefits + harms",
            commonErrors: ["One-sided answer."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-time",
      title: "UK Time and Climate",
      skill: "Understand UK time zones and climate patterns.",
      lesson: {
        sections: [
          {
            heading: "UK time",
            body: "The UK uses Greenwich Mean Time (GMT) in winter and British Summer Time (BST, GMT+1) in summer — clocks go forward in March and back in October. The prime meridian (0° longitude) passes through Greenwich, London — the UK's contribution to world timekeeping. The UK is in the same time zone as Portugal and western parts of Europe.",
          },
          {
            heading: "UK climate",
            body: "The UK has a temperate maritime climate — mild because of the warm Gulf Stream from the Atlantic. Winters are cool (rarely below freezing), summers are warm but not hot. Rain falls all year — the west (Scotland, Wales) is wetter than the southeast. The UK gets about 1500 hours of sunshine a year. Climate change is bringing more extreme weather — hotter summers, heavier rain.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Why is the UK milder than other places at the same latitude?",
          solution: "Gulf Stream brings warm water from the Atlantic.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GMT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of clock" },
              { id: "b", text: "Greenwich Mean Time — UK winter time" },
              { id: "c", text: "A London district" },
              { id: "d", text: "A timezone in America" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GMT",
                statement: "Greenwich Mean Time.",
              },
            ],
            steps: [
              { reasoning: "GMT = winter time.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Greenwich Mean Time",
            commonErrors: ["Confusing with BST."],
          },
        },
        {
          id: "edxpg-u2-time-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is the UK climate mild compared to other countries at the same latitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is closer to the equator" },
              { id: "b", text: "The Gulf Stream warms it" },
              { id: "c", text: "It has no seasons" },
              { id: "d", text: "It is an island" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UK climate",
                statement: "Gulf Stream moderates climate.",
              },
            ],
            steps: [
              { reasoning: "Gulf Stream warms.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gulf Stream",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edxpg-u2-time-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the UK's climate in three sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK climate",
                statement: "Temperate maritime.",
              },
            ],
            steps: [
              {
                reasoning: "Mild winters and cool summers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rain all year — wetter in west.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Due to Atlantic influence/Gulf Stream.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mild, wet, Atlantic-influenced",
            commonErrors: ["Extreme climate described."],
          },
        },
        {
          id: "edxpg-u2-time-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how climate change might affect the UK in the future.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate change",
                statement: "More extreme weather expected.",
              },
            ],
            steps: [
              {
                reasoning: "Hotter summers — heatwaves more common.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Heavier rainfall and flooding risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rising sea levels — coastal flooding risk.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Heatwaves + flooding + sea level rise",
            commonErrors: ["No specific impacts."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-summary",
      title: "UK Summary",
      skill: "Summarise UK geography.",
      lesson: {
        sections: [
          {
            heading: "Key facts",
            body: "UK = England, Scotland, Wales, Northern Ireland. Capital London. Island off NW Europe. English Channel to France. Temperate maritime climate — mild, wet. Global links: Commonwealth, Empire legacy, London financial centre. Time: GMT/BST.",
          },
          {
            heading: "Physical geography",
            body: "Scotland Highlands, Lake District, Pennines mountains. Wales mountains. Flat southeast. Lough Neagh biggest lake. Diverse landscapes from geology and glaciation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise the UK in 5 bullet points.",
          solution:
            "4 countries, island, mild climate, global links, diverse landscapes.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-sum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the four countries of the UK?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "England, Scotland, Wales, Ireland" },
              { id: "b", text: "England, Scotland, Wales, Northern Ireland" },
              { id: "c", text: "Britain, Ireland, Scotland, Wales" },
              { id: "d", text: "England, Wales, Cornwall, Scotland" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK countries",
                statement: "England, Scotland, Wales, NI.",
              },
            ],
            steps: [{ reasoning: "Correct four.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Correct four",
            commonErrors: ["Including Republic of Ireland."],
          },
        },
        {
          id: "edxpg-u2-sum-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What body of water separates the UK from mainland Europe?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK position",
                statement: "English Channel.",
              },
            ],
            steps: [{ reasoning: "English Channel.", marks: 2, markCode: "B" }],
            finalAnswer: "The English Channel",
            commonErrors: ["Wrong water body."],
          },
        },
        {
          id: "edxpg-u2-sum-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the UK's climate and explain why it is mild.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK climate",
                statement: "Temperate maritime.",
              },
            ],
            steps: [
              {
                reasoning: "Mild winters, cool summers, rain all year.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gulf Stream/Atlantic influence moderates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wetter in west, drier in southeast.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mild+wet+Atlantic influence",
            commonErrors: ["Extreme climate."],
          },
        },
        {
          id: "edxpg-u2-sum-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the UK's global position today — strengths and weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UK global position",
                statement: "Influence vs challenges.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strengths — financial centre, culture, language, alliances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weaknesses — post-Brexit trade, smaller than before, dependence on imports.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced evaluation.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Strengths + weaknesses balanced",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
