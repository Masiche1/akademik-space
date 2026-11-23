import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edxpg-u2-lesson-2-1",
  code: "2-1",
  title: "The United Kingdom",
  goal: "I CAN describe the UK and its four countries.",
  standards: ["Y3-Y5 Geography", "United Kingdom"],
  vocabulary: [
    {
      term: "United Kingdom",
      definition:
        "A country made up of four countries: England, Scotland, Wales and Northern Ireland.",
    },
    {
      term: "Capital city",
      definition: "The main city of a country — London for the UK.",
    },
    {
      term: "Constituent country",
      definition: "One of the four countries that make up the UK.",
    },
    {
      term: "Border",
      definition: "The line between two countries or regions.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u2-uk",
      title: "The Four Countries",
      skill: "Identify the four countries of the UK and their capitals.",
      lesson: {
        sections: [
          {
            heading: "What is the UK?",
            body: "The United Kingdom (UK) is made up of four countries: England, Scotland, Wales and Northern Ireland. They share one government based in London, but each has its own identity, flag and sometimes its own parliament or assembly. The UK is an island nation — surrounded by the sea, with only one land border (to the Republic of Ireland).",
          },
          {
            heading: "The four countries",
            body: "England is the largest and most populous — capital London. Scotland is north of England — capital Edinburgh, famous for mountains (Highlands) and lochs (lakes). Wales is west of England — capital Cardiff, known for mountains and castles. Northern Ireland is across the sea from Scotland — capital Belfast, on the island of Ireland.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the four UK countries and their capitals.",
          solution:
            "England-London, Scotland-Edinburgh, Wales-Cardiff, Northern Ireland-Belfast.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-uk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many countries make up the UK?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK countries",
                statement: "Four countries.",
              },
            ],
            steps: [{ reasoning: "4 countries.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 4",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edxpg-u2-uk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the capital of Scotland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "London" },
              { id: "b", text: "Edinburgh" },
              { id: "c", text: "Cardiff" },
              { id: "d", text: "Belfast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK capitals",
                statement: "Edinburgh = Scotland.",
              },
            ],
            steps: [
              { reasoning: "Edinburgh = Scotland.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Edinburgh",
            commonErrors: ["Wrong capital."],
          },
        },
        {
          id: "edxpg-u2-uk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four countries of the UK and their capital cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK structure",
                statement: "4 countries with capitals.",
              },
            ],
            steps: [
              { reasoning: "England — London.", marks: 1, markCode: "M" },
              { reasoning: "Scotland — Edinburgh.", marks: 1, markCode: "M" },
              {
                reasoning: "Wales — Cardiff; Northern Ireland — Belfast.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "England-London, Scotland-Edinburgh, Wales-Cardiff, NI-Belfast",
            commonErrors: ["Wrong capitals."],
          },
        },
        {
          id: "edxpg-u2-uk-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the UK is called a 'United Kingdom' even though it has four countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UK unity",
                statement: "Shared government and identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Four countries share one central government in London.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They are united as a single sovereign state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each keeps its own identity, flag and culture.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "One government + shared state + own identities",
            commonErrors: ["Saying they are fully independent."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-regions",
      title: "UK Regions and Cities",
      skill: "Identify major UK regions, cities and physical features.",
      lesson: {
        sections: [
          {
            heading: "Physical regions",
            body: "England has distinct regions: the flat southeast (London and surrounding), the hills of the southwest (Cornwall, Devon), the flat fens of East Anglia, and the Pennines and Lake District mountains in the north. Scotland has the Highlands (mountains) and Lowlands (flatter). Wales is mostly mountainous (Snowdonia). Northern Ireland has Lough Neagh, the biggest lake in the UK.",
          },
          {
            heading: "Major cities",
            body: "London is the UK capital and largest city — a global centre for finance, culture and government. Other major cities: Manchester and Birmingham (England), Glasgow and Edinburgh (Scotland), Cardiff (Wales), Belfast (Northern Ireland). Cities have different characters — London is international and busy; smaller cities are quieter.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the mountain ranges in Scotland and Wales.",
          solution:
            "Scotland: Highlands; Wales: Snowdonia (and Cambrian Mountains).",
        },
      },
      questions: [
        {
          id: "edxpg-u2-reg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the largest city in the UK?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Manchester" },
              { id: "b", text: "London" },
              { id: "c", text: "Birmingham" },
              { id: "d", text: "Glasgow" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK cities",
                statement: "London is largest.",
              },
            ],
            steps: [
              { reasoning: "London = largest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** London",
            commonErrors: ["Wrong city."],
          },
        },
        {
          id: "edxpg-u2-reg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the Highlands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A city in England" },
              { id: "b", text: "Mountainous region of Scotland" },
              { id: "c", text: "A lake" },
              { id: "d", text: "A type of weather" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK geography",
                statement: "Highlands = Scottish mountains.",
              },
            ],
            steps: [
              {
                reasoning: "Highlands = Scotland mountains.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Scottish mountains",
            commonErrors: ["Wrong region."],
          },
        },
        {
          id: "edxpg-u2-reg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two physical regions of the UK and where they are.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK regions",
                statement: "Distinct physical areas.",
              },
            ],
            steps: [
              {
                reasoning: "Region 1, e.g. Highlands of Scotland.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Region 2, e.g. Lake District or Pennines.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correctly located.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Highlands (Scotland) + Lake District (England)",
            commonErrors: ["Regions not in UK."],
          },
        },
        {
          id: "edxpg-u2-reg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do different parts of the UK have different landscapes? Explain with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UK landscape diversity",
                statement: "Geology and history shape landscapes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different rock types and ages create different landforms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — Scotland's old mountains vs southeast's flat clay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Glaciation shaped Lake District and lochs.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Geology + glaciation + history",
            commonErrors: ["No real explanation."],
          },
        },
      ],
    },
    {
      id: "edxpg-u2-life",
      title: "Life in the UK",
      skill: "Describe aspects of daily life and culture in the UK.",
      lesson: {
        sections: [
          {
            heading: "Everyday life",
            body: "The UK has a mixed climate — mild winters, cool summers, rain all year. Most people live in towns and cities; the southeast is most densely populated. People speak English (with regional accents and some Welsh/Scottish Gaelic speakers). The UK is known for its schools, NHS healthcare, red buses and black cabs in London, and diverse communities.",
          },
          {
            heading: "Culture and traditions",
            body: "The UK has rich culture: Shakespeare and the Royal Shakespeare Company, The Beatles and modern music, literature from Dickens to J.K. Rowling, and films from James Bond to Harry Potter. Traditions include Bonfire Night (5 November), Trooping the Colour, and Christmas markets. Sport is huge — football, rugby, cricket and tennis at Wimbledon.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two famous UK cultural exports.",
          solution: "The Beatles/music; Harry Potter/books; football.",
        },
      },
      questions: [
        {
          id: "edxpg-u2-life-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the UK climate like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hot and dry all year" },
              { id: "b", text: "Mild with rain all year" },
              { id: "c", text: "Very cold winters" },
              { id: "d", text: "Tropical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK climate",
                statement: "Mild, wet.",
              },
            ],
            steps: [{ reasoning: "Mild + rain.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Mild with rain",
            commonErrors: ["Wrong climate."],
          },
        },
        {
          id: "edxpg-u2-life-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a famous UK tradition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thanksgiving" },
              { id: "b", text: "Bonfire Night" },
              { id: "c", text: "Hanukkah" },
              { id: "d", text: "Diwali" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK traditions",
                statement: "Bonfire Night = 5 Nov.",
              },
            ],
            steps: [
              { reasoning: "Bonfire Night = UK.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bonfire Night",
            commonErrors: ["Other countries' traditions."],
          },
        },
        {
          id: "edxpg-u2-life-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of UK culture that are famous worldwide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UK culture",
                statement: "Music, literature, sport.",
              },
            ],
            steps: [
              {
                reasoning: "Example 1, e.g. The Beatles or Shakespeare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example 2, e.g. Harry Potter or football.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correctly UK.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Beatles + Harry Potter",
            commonErrors: ["Non-UK examples."],
          },
        },
        {
          id: "edxpg-u2-life-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How has immigration shaped modern UK life? Give examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UK diversity",
                statement: "Immigration enriched culture and food.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Food diversity — curry houses, Chinese takeaways, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cultural diversity — festivals, languages, communities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Historical waves — Commonwealth, EU, refugees.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Food + culture + historical waves",
            commonErrors: ["No real examples."],
          },
        },
      ],
    },
  ],
};
