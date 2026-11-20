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
              {
                id: "a",
                text: "Rivalry between USA and USSR without direct war",
              },
              { id: "b", text: "A nuclear war" },
              { id: "c", text: "A trade agreement" },
              { id: "d", text: "A peace treaty" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Rivalry without direct war",
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
              { id: "a", text: "USSR blocked land routes to West Berlin" },
              { id: "b", text: "USA invaded Berlin" },
              { id: "c", text: "Berlin wall built" },
              { id: "d", text: "Nuclear attack" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** USSR blocked land routes",
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
