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
              { id: "a", text: "Nuclear disarmament" },
              { id: "b", text: "Gorbachev's policy of openness" },
              { id: "c", text: "Military buildup" },
              { id: "d", text: "Economic restructuring" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u1-sd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who introduced glasnost and perestroika in the USSR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gorbachev" },
              { id: "b", text: "Stalin" },
              { id: "c", text: "Yeltsin" },
              { id: "d", text: "Brezhnev" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorbachev",
                statement: "Soviet leader 1985-91 who introduced the reforms.",
              },
            ],
            steps: [
              {
                reasoning: "Gorbachev introduced glasnost/perestroika.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Gorbachev",
            commonErrors: ["Confusing with Yeltsin, his successor."],
          },
        },
        {
          id: "oleh-u1-sd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did perestroika introduce into the Soviet economy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreign colonial rule" },
              { id: "b", text: "Military conscription" },
              { id: "c", text: "Total state control of all prices" },
              { id: "d", text: "Market elements and private enterprise" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perestroika",
                statement: "Economic restructuring with market elements.",
              },
            ],
            steps: [
              {
                reasoning: "Market elements/private enterprise.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Market elements and private enterprise",
            commonErrors: ["Confusing perestroika with glasnost."],
          },
        },
        {
          id: "oleh-u1-sd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Gorbachev become leader of the USSR?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1985 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorbachev",
                statement: "Became leader in 1985.",
              },
            ],
            steps: [
              { reasoning: "Gorbachev leader from 1985.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1985",
          },
        },
        {
          id: "oleh-u1-sd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What were 'black markets' in the USSR?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Black markets",
                statement: "Unofficial markets trading scarce goods.",
              },
            ],
            steps: [
              {
                reasoning: "Unofficial/illegal trading.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Result of shortages in command economy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unofficial markets where scarce goods were traded illegally, caused by shortages.",
            commonErrors: ["Describing legal markets."],
          },
        },
        {
          id: "oleh-u1-sd-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which country did the Solidarity movement arise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Romania" },
              { id: "b", text: "Poland" },
              { id: "c", text: "Hungary" },
              { id: "d", text: "Czechoslovakia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solidarity",
                statement: "Polish trade union movement.",
              },
            ],
            steps: [
              { reasoning: "Solidarity was Polish.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Poland",
            commonErrors: ["Confusing with other Eastern European movements."],
          },
        },
        {
          id: "oleh-u1-sd-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two ways military spending harmed the Soviet economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Military spending",
                statement: "Drained resources+technology lag.",
              },
            ],
            steps: [
              {
                reasoning: "Drained resources from civilian needs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Technology lagged behind West.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Military spending drained resources and left technology lagging.",
            commonErrors: ["Only one way explained."],
          },
        },
        {
          id: "oleh-u1-sd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many independent states did the USSR break up into in 1991?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dissolution",
                statement: "USSR broke into 15 states.",
              },
            ],
            steps: [
              {
                reasoning: "USSR dissolved into 15 states.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "oleh-u1-sd-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened to living standards in the USSR despite its resources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They doubled" },
              { id: "b", text: "They declined" },
              { id: "c", text: "They stayed the same" },
              { id: "d", text: "They improved steadily" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Living standards",
                statement: "Declined despite resources.",
              },
            ],
            steps: [
              {
                reasoning: "Inefficiency lowered living standards.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** They declined",
            commonErrors: ["Assuming resources meant wealth."],
          },
        },
        {
          id: "oleh-u1-sd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which effect did glasnost have on Soviet society?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ended the Cold War immediately" },
              { id: "b", text: "It increased censorship" },
              { id: "c", text: "It exposed corruption and encouraged demands for change" },
              { id: "d", text: "It strengthened unity under the Party" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glasnost effect",
                statement: "Exposed problems, encouraged change.",
              },
            ],
            steps: [
              {
                reasoning: "Openness exposed failures and encouraged demands.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Exposed corruption and encouraged demands for change",
            commonErrors: ["Saying it strengthened control."],
          },
        },
        {
          id: "oleh-u1-sd-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Soviet decline.",
          parts: [
            { label: "a", prompt: "Define glasnost.", marks: 1 },
            { label: "b", prompt: "Define perestroika.", marks: 2 },
            { label: "c", prompt: "Two economic problems?", marks: 2 },
            { label: "d", prompt: "Name one nationalist movement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Soviet decline",
                statement: "Definitions+problems+nationalism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Openness/transparency.",
                marks: 1,
                markCode: "AO1",
              },
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
                reasoning: "Baltic states/Caucasus/Central Asia/Solidarity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) glasnost (b) perestroika (c) problems (d) nationalism",
          },
        },
        {
          id: "oleh-u1-sd-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did Solidarity win elections in Poland?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1989 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solidarity",
                statement: "Won Polish elections in 1989.",
              },
            ],
            steps: [
              {
                reasoning: "Solidarity won elections 1989.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1989",
          },
        },
        {
          id: "oleh-u1-sd-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Explain how reforms and nationalism led to Soviet collapse.",
          parts: [
            { label: "a", prompt: "Effect of glasnost?", marks: 2 },
            { label: "b", prompt: "Effect of perestroika?", marks: 2 },
            { label: "c", prompt: "Nationalist movements?", marks: 2 },
            { label: "d", prompt: "Outcome?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collapse",
                statement: "Reforms+nationalism→dissolution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exposed corruption/failures.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Encouraged demands for change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Market elements caused chaos/shortages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Weakened economic control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Republics sought independence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Baltic/Caucasus/Central Asia.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "USSR dissolved 1991.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) glasnost (b) perestroika (c) nationalism (d) collapse",
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
              { id: "a", text: "1995" },
              { id: "b", text: "1991" },
              { id: "c", text: "1985" },
              { id: "d", text: "1989" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u1-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the Berlin Wall fall?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1989 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Wall",
                statement: "Fell 9 November 1989.",
              },
            ],
            steps: [
              { reasoning: "Wall fell Nov 1989.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1989",
          },
        },
        {
          id: "oleh-u1-cp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the Velvet Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peaceful overthrow of communism in Czechoslovakia" },
              { id: "b", text: "USSR coup attempt" },
              { id: "c", text: "Fall of the Berlin Wall" },
              { id: "d", text: "German reunification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Velvet Revolution",
                statement: "1989 peaceful revolution in Czechoslovakia.",
              },
            ],
            steps: [
              {
                reasoning: "Velvet Revolution = Czechoslovakia 1989.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Peaceful overthrow of communism in Czechoslovakia",
            commonErrors: ["Confusing with other 1989 revolutions."],
          },
        },
        {
          id: "oleh-u1-cp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was Germany reunified?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1990 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reunification",
                statement: "East and West Germany united 1990.",
              },
            ],
            steps: [
              { reasoning: "Reunification October 1990.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1990",
          },
        },
        {
          id: "oleh-u1-cp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happened in Romania in 1989?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Romania 1989",
                statement: "Violent overthrow of Ceaușescu.",
              },
            ],
            steps: [
              {
                reasoning: "Violent revolution/overthrow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ceaușescu regime fell; unlike other peaceful revolutions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Romania saw a violent overthrow — Ceaușescu executed, unlike the peaceful revolutions elsewhere.",
            commonErrors: ["Describing it as peaceful."],
          },
        },
        {
          id: "oleh-u1-cp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who became Russia's leader after the USSR dissolved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Putin" },
              { id: "b", text: "Brezhnev" },
              { id: "c", text: "Gorbachev" },
              { id: "d", text: "Yeltsin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Yeltsin",
                statement: "Russia's first post-Soviet leader.",
              },
            ],
            steps: [
              {
                reasoning: "Yeltsin led Russia after 1991.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Yeltsin",
            commonErrors: ["Confusing with Gorbachev."],
          },
        },
        {
          id: "oleh-u1-cp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What was the August 1991 coup attempt in the USSR?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "August coup",
                statement: "Hardliners tried to seize power; failed.",
              },
            ],
            steps: [
              {
                reasoning: "Hardliners attempted coup against Gorbachev.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Failed due to popular resistance/Yeltsin.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Hardline communists tried to seize power in August 1991; the coup failed after public resistance led by Yeltsin.",
            commonErrors: ["Saying it succeeded."],
          },
        },
        {
          id: "oleh-u1-cp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which month and year did the USSR dissolve?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1991, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dissolution",
                statement: "USSR dissolved December 1991.",
              },
            ],
            steps: [
              {
                reasoning: "December 1991, Gorbachev resigned.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1991",
          },
        },
        {
          id: "oleh-u1-cp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which state absorbed East Germany during reunification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poland" },
              { id: "b", text: "West Germany" },
              { id: "c", text: "France" },
              { id: "d", text: "Austria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reunification",
                statement: "West absorbed East — currency, laws, institutions.",
              },
            ],
            steps: [
              {
                reasoning: "West German institutions absorbed East.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** West Germany",
            commonErrors: ["Thinking it was equal merger."],
          },
        },
        {
          id: "oleh-u1-cp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What was the last major Cold War issue resolved by German reunification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Korean War boundary" },
              { id: "b", text: "The Cuban Missile Crisis" },
              { id: "c", text: "Whether unified Germany would join NATO" },
              { id: "d", text: "The status of Berlin's airlift" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NATO membership",
                statement: "Unified Germany joined NATO.",
              },
            ],
            steps: [
              {
                reasoning: "NATO membership for Germany resolved.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Whether unified Germany would join NATO",
            commonErrors: ["Confusing with earlier Berlin issues."],
          },
        },
        {
          id: "oleh-u1-cp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the 1989 revolutions in Eastern Europe.",
          parts: [
            { label: "a", prompt: "Which countries revolted?", marks: 2 },
            { label: "b", prompt: "How did most regimes fall?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1989 revolutions",
                statement: "Poland/Hungary/Czechoslovakia/Romania.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Poland, Hungary, Czechoslovakia, Romania (any two).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "All four named.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Mostly peaceful protests/elections within months.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Romania violent exception.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Poland (Solidarity), Hungary, Czechoslovakia (Velvet Revolution), Romania (violent) — most fell peacefully within months.",
          },
        },
        {
          id: "oleh-u1-cp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did Gorbachev resign and the USSR dissolve?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1991 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gorbachev resignation",
                statement: "Resigned December 1991.",
              },
            ],
            steps: [
              {
                reasoning: "Resignation December 1991.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1991",
          },
        },
        {
          id: "oleh-u1-cp-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how the collapse of the USSR ended the Cold War.",
          parts: [
            { label: "a", prompt: "1989 Eastern Europe revolutions?", marks: 2 },
            { label: "b", prompt: "German reunification?", marks: 2 },
            { label: "c", prompt: "August 1991 coup?", marks: 2 },
            { label: "d", prompt: "December 1991 outcome?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "End of Cold War",
                statement: "Revolutions→reunification→coup→dissolution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Communist regimes collapsed across Eastern Europe.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Berlin Wall fell; Soviet sphere ended.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "East+West united October 1990.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "West absorbed East; NATO membership resolved.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Hardliners attempted coup August 1991.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Failed — weakened Soviet state.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Gorbachev resigned December 1991.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "USSR dissolved into 15 states; Russia largest successor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Cold War officially ended.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) 1989 revolutions (b) reunification (c) failed coup (d) dissolution ended Cold War",
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
