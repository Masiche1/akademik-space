import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "oleh-u1-lesson-1-3",
  code: "1-3",
  title: "End of the Cold War",
  goal: "I CAN explain the collapse of the USSR and end of the Cold War.",
  standards: ["2130: End of Cold War"],
  vocabulary: [
    {
      term: "Gorbachev",
      definition: "Soviet leader 1985-91 — glasnost and perestroika.",
    },
    {
      term: "Glasnost",
      definition: "Gorbachev's policy of openness/transparency.",
    },
    { term: "Perestroika", definition: "Gorbachev's economic restructuring." },
    {
      term: "Solidarity",
      definition: "Polish trade union movement challenging communism.",
    },
    { term: "Reunification", definition: "East and West Germany united 1990." },
    {
      term: "Dissolution",
      definition: "Breakup of USSR into 15 independent states 1991.",
    },
  ],
  concepts: [
    {
      id: "oleh-u1-soviet-decline",
      title: "Soviet decline and reform",
      skill: "Explain economic problems and Gorbachev's reforms.",
      lesson: {
        sections: [
          {
            heading: "Soviet economic problems",
            body: "Command economy inefficient — shortages, poor quality, black markets. Military spending drained resources. Technology lagged behind West. Living standards declined despite resources.",
          },
          {
            heading: "Gorbachev's reforms",
            body: "Glasnost (openness): allowed criticism, freedom of press — exposed problems. Perestroika (restructuring): market elements, private enterprise — but caused chaos, shortages worsened short-term.",
          },
          {
            heading: "Nationalist movements",
            body: "Reforms unleashed nationalist demands — Baltic states, Caucasus, Central Asia sought independence. Solidarity in Poland won elections 1989. Soviet control weakened across Eastern Europe.",
          },
        ],
        keyFormulas: [
          {
            name: "Soviet decline",
            statement: "Economic problems+reforms→nationalism→collapse.",
          },
        ],
        workedExample: {
          problem: "Why did glasnost weaken Soviet control?",
          solution:
            "Openness exposed corruption and failures — undermined legitimacy and encouraged demands for change.",
        },
      },
      questions: [
        {
          id: "oleh-u1-sd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was glasnost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gorbachev's policy of openness" },
              { id: "b", text: "Economic restructuring" },
              { id: "c", text: "Military buildup" },
              { id: "d", text: "Nuclear disarmament" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glasnost",
                statement: "Openness/transparency.",
              },
            ],
            steps: [
              { reasoning: "Glasnost = openness.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Openness",
            commonErrors: ["Confusing with perestroika."],
          },
        },
        {
          id: "oleh-u1-sd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was perestroika?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perestroika",
                statement: "Economic restructuring.",
              },
            ],
            steps: [
              {
                reasoning: "Economic restructuring.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Market elements/private enterprise.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Economic restructuring with market elements.",
            commonErrors: ["Saying it's political reform."],
          },
        },
        {
          id: "oleh-u1-sd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons for Soviet economic decline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic decline",
                statement: "Inefficiency+military spending+technology.",
              },
            ],
            steps: [
              {
                reasoning: "Command economy inefficient.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Military spending drained resources.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Technology lagged.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Inefficiency+military spending+technology lag.",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "oleh-u1-sd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "End of Cold War.",
          parts: [
            { label: "a", prompt: "Define glasnost.", marks: 1 },
            { label: "b", prompt: "Define perestroika.", marks: 2 },
            { label: "c", prompt: "Two economic problems?", marks: 2 },
            { label: "d", prompt: "How did reforms weaken control?", marks: 2 },
            { label: "e", prompt: "What happened to USSR 1991?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collapse",
                statement: "Definitions+problems+reforms+collapse.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Openness.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Economic restructuring.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Market elements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two problems.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Exposed corruption/failures.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Encouraged demands.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Dissolved into 15 states.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "1991.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) glasnost (b) perestroika (c) problems (d) weakened (e) dissolved",
          },
        },
      ],
    },
    {
      id: "oleh-u1-collapse",
      title: "Collapse of communism and Cold War end",
      skill:
        "Describe fall of communism in Eastern Europe and USSR dissolution.",
      lesson: {
        sections: [
          {
            heading: "Eastern Europe 1989",
            body: "Revolutions swept Eastern Europe: Poland (Solidarity wins), Hungary opens border, Czechoslovakia Velvet Revolution, Romania violent overthrow. Berlin Wall falls Nov 9. Most communist regimes collapse within months.",
          },
          {
            heading: "German reunification",
            body: "East Germany's collapse led to reunification Oct 1990 — West German currency, laws, institutions absorbed East. NATO membership for unified Germany — last major Cold War issue resolved.",
          },
          {
            heading: "USSR dissolution",
            body: "August 1991: hardliners attempted coup — failed due to Yeltsin's resistance. Dec 1991: Gorbachev resigns — USSR dissolved into 15 independent states. Russia (Yeltsin) largest successor. Cold War officially ended.",
          },
        ],
        keyFormulas: [
          {
            name: "Collapse",
            statement:
              "1989 revolutions→reunification→1991 dissolution→Cold War ends.",
          },
        ],
        workedExample: {
          problem: "Why did the USSR dissolve rather than reform?",
          solution:
            "Nationalist demands+economic chaos+loss of legitimacy made reform impossible — republics chose independence.",
        },
      },
      questions: [
        {
          id: "oleh-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the USSR dissolve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1991" },
              { id: "b", text: "1989" },
              { id: "c", text: "1985" },
              { id: "d", text: "1995" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "USSR dissolution",
                statement: "1991.",
              },
            ],
            steps: [
              { reasoning: "USSR dissolved 1991.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 1991",
            commonErrors: ["Confusing with 1989."],
          },
        },
        {
          id: "oleh-u1-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was Solidarity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solidarity",
                statement: "Polish trade union challenging communism.",
              },
            ],
            steps: [
              { reasoning: "Polish trade union.", marks: 1, markCode: "AO1" },
              { reasoning: "Won 1989 elections.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Polish trade union that won 1989 elections.",
            commonErrors: ["Saying it's a party."],
          },
        },
        {
          id: "oleh-u1-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why communism collapsed in Eastern Europe in 1989.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1989 revolutions",
                statement: "Reforms+protests+loss of legitimacy.",
              },
            ],
            steps: [
              {
                reasoning: "Gorbachev's reforms encouraged change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mass protests demanded democracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviet control weakened.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reforms+protests+Soviet decline → collapse.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "oleh-u1-cp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "End of Cold War.",
          parts: [
            { label: "a", prompt: "USSR dissolved when?", marks: 1 },
            { label: "b", prompt: "What was Solidarity?", marks: 2 },
            { label: "c", prompt: "1989 revolutions causes?", marks: 3 },
            { label: "d", prompt: "German reunification?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collapse",
                statement: "Dates+Solidarity+causes+reunification.",
              },
            ],
            steps: [
              { part: "a", reasoning: "1991.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Polish union.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Won elections.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reforms/protests/decline.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "East+West united 1990.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "West absorbed East.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "NATO membership.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 1991 (b) Solidarity (c) causes (d) reunification",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u1-1-3-notes",
      title: "End of Cold War — notes",
      summary:
        "Soviet decline, 1989 revolutions, German reunification, USSR dissolution.",
      sections: [
        {
          heading: "Decline",
          body: "Economic problems+glasnost/perestroika→nationalism→collapse.",
        },
        {
          heading: "End",
          body: "1989 revolutions→reunification 1990→USSR dissolved 1991→Cold War ends.",
        },
      ],
    },
  ],
};
