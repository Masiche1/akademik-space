import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "oleh-u1-lesson-1-1",
  code: "1-1",
  title: "Origins of the Cold War",
  goal: "I CAN explain the causes of the Cold War between the USA and USSR.",
  standards: ["2130: Cold War origins"],
  vocabulary: [
    {
      term: "Cold War",
      definition:
        "Political/military rivalry between USA and USSR without direct war.",
    },
    {
      term: "Iron Curtain",
      definition: "Dividing line between Soviet East and Western Europe.",
    },
    {
      term: "Containment",
      definition: "US policy to prevent spread of communism.",
    },
    {
      term: "Truman Doctrine",
      definition: "US commitment to support free peoples against communism.",
    },
    {
      term: "Marshall Plan",
      definition: "US economic aid to rebuild Western Europe.",
    },
    { term: "NATO", definition: "Western military alliance formed 1949." },
  ],
  concepts: [
    {
      id: "oleh-u1-cold-war-causes",
      title: "Causes of the Cold War",
      skill:
        "Explain ideological, political and economic causes of the Cold War.",
      lesson: {
        sections: [
          {
            heading: "Ideological differences",
            body: "USA: capitalism, democracy, individual freedom. USSR: communism, one-party state, collective ownership. Mutually exclusive systems — each saw the other as a threat to its way of life.",
          },
          {
            heading: "Post-war Europe",
            body: "WWII left Europe devastated. USSR occupied Eastern Europe — set up communist governments (Poland, Hungary, Czechoslovakia, East Germany). USA feared Soviet expansion → containment policy.",
          },
          {
            heading: "Key events",
            body: "Iron Curtain speech (1946): Churchill warns of Soviet threat. Truman Doctrine (1947): US aid to Greece/Turkey. Marshall Plan (1947): $13bn aid to Western Europe. NATO (1949): military alliance. Warsaw Pact (1955): Soviet counter-alliance.",
          },
        ],
        keyFormulas: [
          {
            name: "Cold War causes",
            statement:
              "Ideology+Soviet expansion+containment=NATO/Warsaw Pact.",
          },
        ],
        workedExample: {
          problem: "Why did the USA adopt containment?",
          solution:
            "Fearing Soviet expansion into Western Europe — needed to prevent communism spreading.",
        },
      },
      questions: [
        {
          id: "oleh-u1-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Cold War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A nuclear war" },
              {
                id: "b",
                text: "Rivalry between USA and USSR without direct war",
              },
              { id: "c", text: "A trade agreement" },
              { id: "d", text: "A peace treaty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cold War",
                statement: "USA-USSR rivalry without direct war.",
              },
            ],
            steps: [
              {
                reasoning: "Cold War = no direct war.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Rivalry without direct war",
            commonErrors: ["Thinking it was a hot war."],
          },
        },
        {
          id: "oleh-u1-cw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Truman Doctrine?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Truman Doctrine",
                statement:
                  "US commitment to support free peoples against communism.",
              },
            ],
            steps: [
              { reasoning: "Support free peoples.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Against communist expansion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "US commitment to support free peoples against communism.",
            commonErrors: ["Confusing with Marshall Plan."],
          },
        },
        {
          id: "oleh-u1-cw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two causes of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cold War causes",
                statement: "Ideology+expansion+containment.",
              },
            ],
            steps: [
              {
                reasoning: "Ideological differences (capitalism vs communism).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviet expansion into Eastern Europe.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "US containment response.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ideology+Soviet expansion+containment.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "oleh-u1-cw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cold War origins.",
          parts: [
            { label: "a", prompt: "Define Cold War.", marks: 1 },
            { label: "b", prompt: "Define Truman Doctrine.", marks: 2 },
            { label: "c", prompt: "Two ideological differences?", marks: 2 },
            {
              label: "d",
              prompt: "Why did USSR occupy Eastern Europe?",
              marks: 2,
            },
            { label: "e", prompt: "What was the Marshall Plan?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Origins",
                statement: "Definitions+ideology+expansion+Marshall.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rivalry no war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Support free peoples.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Against communism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Capitalism vs communism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Democracy vs one-party.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Security buffer zone.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Spread communism.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "e", reasoning: "$13bn aid.", marks: 1, markCode: "AO1" },
              {
                part: "e",
                reasoning: "Rebuild Western Europe.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Cold War (b) Truman (c) ideology (d) expansion (e) Marshall",
          },
        },
        {
          id: "oleh-u1-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Churchill give his 'Iron Curtain' speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1955" },
              { id: "b", text: "1946" },
              { id: "c", text: "1945" },
              { id: "d", text: "1949" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron Curtain speech",
                statement: "Churchill warned of Soviet threat in 1946.",
              },
            ],
            steps: [
              {
                reasoning: "Speech given 1946.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** 1946",
            commonErrors: ["Confusing with NATO year."],
          },
        },
        {
          id: "oleh-u1-cw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the Marshall Plan?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "US economic aid to rebuild Western Europe",
              },
              { id: "b", text: "A trade embargo on the USSR" },
              { id: "c", text: "A nuclear arms treaty" },
              { id: "d", text: "A military alliance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marshall Plan",
                statement: "$13bn aid to rebuild Western Europe.",
              },
            ],
            steps: [
              {
                reasoning: "Economic aid, not military.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** US economic aid to rebuild Western Europe",
            commonErrors: ["Confusing with NATO."],
          },
        },
        {
          id: "oleh-u1-cw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Warsaw Pact formed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1955 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Warsaw Pact",
                statement: "Soviet counter-alliance formed 1955.",
              },
            ],
            steps: [
              { reasoning: "Warsaw Pact 1955.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1955",
          },
        },
        {
          id: "oleh-u1-cw-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'Iron Curtain'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron Curtain",
                statement: "Dividing line between Soviet East and West.",
              },
            ],
            steps: [
              {
                reasoning: "Churchill's term for the divide.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Separated communist East from West.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Dividing line between Soviet-controlled Eastern Europe and the West.",
            commonErrors: ["Thinking it was a physical wall only."],
          },
        },
        {
          id: "oleh-u1-cw-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which country was the leading member of NATO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poland" },
              { id: "b", text: "USA" },
              { id: "c", text: "France" },
              { id: "d", text: "USSR" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO leader",
                statement: "USA led the Western alliance.",
              },
            ],
            steps: [
              { reasoning: "USA led NATO.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** USA",
            commonErrors: ["Choosing USSR (Warsaw Pact)."],
          },
        },
        {
          id: "oleh-u1-cw-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Truman Doctrine announced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1947 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Truman Doctrine",
                statement: "Announced 1947.",
              },
            ],
            steps: [
              { reasoning: "Truman Doctrine 1947.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1947",
          },
        },
        {
          id: "oleh-u1-cw-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the USA feared Soviet expansion in Eastern Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "US fear",
                statement: "Communist spread threatened Western Europe.",
              },
            ],
            steps: [
              {
                reasoning: "USSR occupied Eastern Europe.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Communist governments installed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fear of spread to Western Europe.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Led to containment policy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "USSR occupied Eastern Europe and installed communist governments — USA feared communism would spread west, prompting containment.",
            commonErrors: ["Only one point developed."],
          },
        },
        {
          id: "oleh-u1-cw-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which features belong to the capitalist system?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Democracy, individual freedom, private ownership",
              },
              { id: "b", text: "No political parties" },
              { id: "c", text: "One-party state, collective ownership" },
              { id: "d", text: "State control of all production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capitalism",
                statement: "Democracy+individual freedom+private ownership.",
              },
            ],
            steps: [
              {
                reasoning: "Capitalism = private ownership.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Democracy, individual freedom, private ownership",
            commonErrors: ["Choosing communist features."],
          },
        },
        {
          id: "oleh-u1-cw-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the USSR test its first atomic bomb?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1949 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "USSR atomic bomb",
                statement: "First tested 1949.",
              },
            ],
            steps: [
              { reasoning: "USSR bomb 1949.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1949",
          },
        },
        {
          id: "oleh-u1-cw-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why did the USSR set up communist governments in Eastern Europe?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eastern Europe",
                statement: "Security buffer + spread communism.",
              },
            ],
            steps: [
              {
                reasoning: "Security buffer zone.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Spread communist influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "To create a buffer zone against Western attack and spread communism.",
            commonErrors: ["Only giving one reason."],
          },
        },
        {
          id: "oleh-u1-cw-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the policy of containment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preventing the spread of communism" },
              { id: "b", text: "Containing trade with Asia" },
              { id: "c", text: "Containing nuclear weapons" },
              { id: "d", text: "Containing population growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Containment",
                statement: "Stop spread of communism.",
              },
            ],
            steps: [
              {
                reasoning: "Containment = stop communism.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Preventing the spread of communism",
            commonErrors: ["Confusing with nuclear policy."],
          },
        },
        {
          id: "oleh-u1-cw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ideology contributed to the start of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ideology",
                statement: "Capitalism vs communism = mutual threat.",
              },
            ],
            steps: [
              {
                reasoning: "USA = capitalism/democracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "USSR = communism/one-party state.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each saw the other as a threat.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Capitalism and communism were mutually exclusive — each side saw the other as a threat to its way of life.",
            commonErrors: ["Only one side described."],
          },
        },
      ],
    },
    {
      id: "oleh-u1-cold-war-events",
      title: "Early Cold War crises",
      skill: "Describe the Berlin Blockade, Korean War and early crises.",
      lesson: {
        sections: [
          {
            heading: "Berlin Blockade (1948-49)",
            body: "USSR blocked all land routes to West Berlin. USA responded with Berlin Airlift — flew supplies for 11 months. USSR lifted blockade — first Cold War crisis resolved without war.",
          },
          {
            heading: "Korean War (1950-53)",
            body: "North Korea (communist) invaded South Korea. UN forces led by USA intervened; China backed North. Stalemate at 38th parallel — armistice 1953. First 'hot' conflict of Cold War.",
          },
          {
            heading: "Arms race",
            body: "Both sides developed nuclear weapons — USA 1945, USSR 1949. Hydrogen bomb 1952/1953. MAD (Mutual Assured Destruction): both could destroy each other → nuclear deterrence. Arms race escalated tension.",
          },
        ],
        keyFormulas: [
          {
            name: "Early crises",
            statement:
              "Berlin=airlift; Korea=UN+China; Arms race=nuclear deterrence.",
          },
        ],
        workedExample: {
          problem: "Why was the Berlin Airlift significant?",
          solution:
            "First major confrontation — USA showed resolve without war; established pattern of crisis management.",
        },
      },
      questions: [
        {
          id: "oleh-u1-ce-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Berlin Blockade?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "USA invaded Berlin" },
              { id: "b", text: "Nuclear attack" },
              { id: "c", text: "USSR blocked land routes to West Berlin" },
              { id: "d", text: "Berlin wall built" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Blockade",
                statement: "USSR blocked land routes.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade = land routes blocked.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** USSR blocked land routes",
            commonErrors: ["Confusing with wall."],
          },
        },
        {
          id: "oleh-u1-ce-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How did USA respond to the Berlin Blockade?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Airlift",
                statement: "Flew supplies for 11 months.",
              },
            ],
            steps: [
              { reasoning: "Airlift supplies.", marks: 1, markCode: "AO1" },
              {
                reasoning: "11 months until blockade lifted.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Berlin Airlift — flew supplies for 11 months.",
            commonErrors: ["Saying military invasion."],
          },
        },
        {
          id: "oleh-u1-ce-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the Korean War's significance in the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Korean War",
                statement: "First 'hot' conflict; UN vs China+USSR.",
              },
            ],
            steps: [
              {
                reasoning: "First direct military conflict.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "UN forces led by USA.", marks: 1, markCode: "AO1" },
              {
                reasoning: "China backed North Korea.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stalemate → armistice.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "First 'hot' conflict; stalemate at 38th parallel.",
            commonErrors: ["Saying it was decisive victory."],
          },
        },
        {
          id: "oleh-u1-ce-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Early Cold War crises.",
          parts: [
            { label: "a", prompt: "Berlin Blockade cause?", marks: 1 },
            { label: "b", prompt: "Berlin Airlift response?", marks: 2 },
            { label: "c", prompt: "Korean War parties?", marks: 2 },
            { label: "d", prompt: "Arms race significance?", marks: 2 },
            { label: "e", prompt: "What is MAD?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crises",
                statement: "Berlin+Korea+arms race+MAD.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "USSR blocked routes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Flew supplies.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "11 months.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "UN+USA vs China+North.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct parties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Nuclear escalation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Deterrence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Mutual destruction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Prevents war.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) blockade (b) airlift (c) Korea (d) arms race (e) MAD",
          },
        },
        {
          id: "oleh-u1-ce-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Berlin Blockade lifted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1948" },
              { id: "b", text: "1949" },
              { id: "c", text: "1950" },
              { id: "d", text: "1955" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Blockade",
                statement: "Lifted in 1949 after 11-month airlift.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade lifted 1949.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** 1949",
            commonErrors: ["Confusing start/end years."],
          },
        },
        {
          id: "oleh-u1-ce-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which country led the UN forces in the Korean War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "China" },
              { id: "b", text: "USA" },
              { id: "c", text: "USSR" },
              { id: "d", text: "Britain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UN forces",
                statement: "Led by the USA.",
              },
            ],
            steps: [
              { reasoning: "USA led UN forces.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** USA",
            commonErrors: ["Choosing USSR or China."],
          },
        },
        {
          id: "oleh-u1-ce-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Korean War armistice signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1953 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Korean armistice",
                statement: "Signed 1953.",
              },
            ],
            steps: [
              { reasoning: "Armistice 1953.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1953",
          },
        },
        {
          id: "oleh-u1-ce-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What did MAD stand for in the arms race?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAD",
                statement: "Mutual Assured Destruction.",
              },
            ],
            steps: [
              {
                reasoning: "Mutual Assured Destruction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both sides could destroy each other.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Mutual Assured Destruction — nuclear deterrence preventing war.",
            commonErrors: ["Guessing letters wrongly."],
          },
        },
        {
          id: "oleh-u1-ce-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the USSR test its first atomic bomb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1955" },
              { id: "b", text: "1952" },
              { id: "c", text: "1949" },
              { id: "d", text: "1945" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "USSR bomb",
                statement: "First atomic test 1949.",
              },
            ],
            steps: [
              { reasoning: "USSR bomb 1949.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** 1949",
            commonErrors: ["Confusing with USA 1945."],
          },
        },
        {
          id: "oleh-u1-ce-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "For how many months did the Berlin Airlift supply West Berlin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Airlift",
                statement: "Lasted 11 months.",
              },
            ],
            steps: [
              { reasoning: "Airlift lasted 11 months.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "oleh-u1-ce-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Korean War ended in stalemate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Korean stalemate",
                statement: "Neither side could win decisively.",
              },
            ],
            steps: [
              {
                reasoning: "UN advance stopped at 38th parallel.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Chinese intervention prevented victory.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Neither side could win decisively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Armistice signed 1953.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Neither side could win — armistice at the 38th parallel in 1953.",
            commonErrors: ["Saying one side won."],
          },
        },
        {
          id: "oleh-u1-ce-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the 38th parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soviet defensive line" },
              { id: "b", text: "UN headquarters line" },
              { id: "c", text: "Border between Germany and Poland" },
              { id: "d", text: "Dividing line between North and South Korea" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "38th parallel",
                statement: "Divided North and South Korea.",
              },
            ],
            steps: [
              {
                reasoning: "Korea divided at 38th parallel.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Dividing line between North and South Korea",
            commonErrors: ["Linking to Germany."],
          },
        },
        {
          id: "oleh-u1-ce-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did the USA test its first hydrogen bomb?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1952 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "H-bomb",
                statement: "USA tested first H-bomb 1952.",
              },
            ],
            steps: [
              { reasoning: "USA H-bomb 1952.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1952",
          },
        },
        {
          id: "oleh-u1-ce-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the significance of the Korean War for the Cold War?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Korea significance",
                statement: "First 'hot' conflict; proxy war pattern.",
              },
            ],
            steps: [
              {
                reasoning: "First direct military conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Showed proxy war pattern.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "First 'hot' conflict — showed superpowers fighting through proxies.",
            commonErrors: ["Saying it ended the Cold War."],
          },
        },
        {
          id: "oleh-u1-ce-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how long did the Berlin Blockade last?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 years" },
              { id: "b", text: "1 month" },
              { id: "c", text: "10 days" },
              { id: "d", text: "11 months" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blockade duration",
                statement: "1948–49, about 11 months.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade ~11 months.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** 11 months",
            commonErrors: ["Confusing with wall duration."],
          },
        },
        {
          id: "oleh-u1-ce-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the arms race affected the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arms race",
                statement: "Nuclear escalation + MAD deterrence.",
              },
            ],
            steps: [
              {
                reasoning: "Both sides developed nuclear weapons.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Escalation increased tension.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "MAD acted as deterrent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Also raised crisis risk.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Nuclear escalation raised tension but MAD deterred direct war — a dangerous balance.",
            commonErrors: ["Only describing weapons."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u1-1-1-notes",
      title: "Cold War origins — notes",
      summary: "Causes, early crises and arms race.",
      sections: [
        {
          heading: "Causes",
          body: "Ideology+Soviet expansion+containment→NATO/Warsaw Pact. Berlin=airlift; Korea=UN+China; Arms race=MAD.",
        },
        {
          heading: "Key events",
          body: "Truman Doctrine, Marshall Plan, NATO 1949, Warsaw Pact 1955.",
        },
      ],
    },
  ],
};
