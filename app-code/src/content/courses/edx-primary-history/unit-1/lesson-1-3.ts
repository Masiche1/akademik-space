import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edxph-u1-lesson-1-3",
  code: "1-3",
  title: "Asking Historical Questions",
  goal: "I CAN ask and investigate historical questions.",
  standards: ["Y3-Y5 History", "Historical enquiry"],
  vocabulary: [
    {
      term: "Historical question",
      definition: "A question about the past that can be investigated.",
    },
    { term: "Evidence", definition: "Information that supports an answer." },
    {
      term: "Enquiry",
      definition: "A careful investigation to find out something.",
    },
    {
      term: "Interpretation",
      definition: "What we think something means based on evidence.",
    },
  ],
  concepts: [
    {
      id: "edxph-u1-questions",
      title: "Good Historical Questions",
      skill: "Frame questions that can be answered with evidence.",
      lesson: {
        sections: [
          {
            heading: "What makes a good question?",
            body: "Good historical questions can be answered with evidence: 'When did the Romans come to Britain?' 'Why did people build castles?' 'How did people travel 1000 years ago?' Poor questions can't be answered: 'What was it like to be a Roman?' (too broad, no evidence). A good question is specific and has sources that can help answer it.",
          },
          {
            heading: "Investigating questions",
            body: "To investigate a historical question: 1) Ask a clear question. 2) Find sources — books, artefacts, websites, museums. 3) Look for evidence that answers the question. 4) Put evidence together. 5) Draw a conclusion. 6) Evaluate — is the evidence strong enough?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Is 'Why did William win the Battle of Hastings?' a good historical question?",
          solution:
            "Yes — specific, answerable with evidence about the battle.",
        },
      },
      questions: [
        {
          id: "edxph-u1-q-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good historical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is very difficult" },
              { id: "b", text: "It can be answered with evidence" },
              { id: "c", text: "It has no answer" },
              { id: "d", text: "It is about the future" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical questions",
                statement: "Answerable with evidence.",
              },
            ],
            steps: [
              { reasoning: "Answerable = good.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Answerable",
            commonErrors: ["Wrong criterion."],
          },
        },
        {
          id: "edxph-u1-q-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good historical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What was it like to live 1000 years ago?" },
              { id: "b", text: "When did the Romans invade Britain?" },
              { id: "c", text: "Was the past good or bad?" },
              { id: "d", text: "What is history?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question quality",
                statement: "Specific + answerable.",
              },
            ],
            steps: [
              {
                reasoning: "Specific date question = good.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** When did Romans invade",
            commonErrors: ["Too broad chosen."],
          },
        },
        {
          id: "edxph-u1-q-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the steps for investigating a historical question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Historical enquiry",
                statement: "Ask→find→evidence→conclude→evaluate.",
              },
            ],
            steps: [
              { reasoning: "Ask a clear question.", marks: 1, markCode: "M" },
              {
                reasoning: "Find sources and gather evidence.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Conclude and evaluate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ask→sources→evidence→conclude→evaluate",
            commonErrors: ["Missing steps."],
          },
        },
        {
          id: "edxph-u1-q-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might two historians give different answers to the same historical question? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Evidence can be read differently.",
              },
            ],
            steps: [
              { reasoning: "Different sources used.", marks: 1, markCode: "M" },
              {
                reasoning: "Sources may be biased or incomplete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpretations differ — no single 'right' answer always.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Different sources + interpretations",
            commonErrors: ["Saying one is always wrong."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-change",
      title: "Change Over Time",
      skill: "Understand how and why things change over time.",
      lesson: {
        sections: [
          {
            heading: "Continuity and change",
            body: "History studies both change and continuity. Change is when things are different — new inventions, different beliefs, new ways of living. Continuity is when things stay the same — humans still need food, shelter, love. Good historians look at both: what changed and what stayed the same.",
          },
          {
            heading: "Causes of change",
            body: "Things change for reasons: inventions (printing press changed how information spread), migration (people bring new ideas), war and conquest (Romans changed Britain), trade (new goods and ideas), and natural events. Understanding causes helps explain why things are as they are today.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Give one example of change and one of continuity over history.",
          solution:
            "Change: printing press spread books. Continuity: humans still need food and shelter.",
        },
      },
      questions: [
        {
          id: "edxph-u1-chg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is continuity in history?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When everything changes" },
              { id: "b", text: "When things stay the same" },
              { id: "c", text: "A type of war" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuity",
                statement: "Things staying the same.",
              },
            ],
            steps: [
              { reasoning: "Continuity = same.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Staying the same",
            commonErrors: ["Confusing with change."],
          },
        },
        {
          id: "edxph-u1-chg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of historical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humans needing food" },
              { id: "b", text: "The printing press spreading books" },
              { id: "c", text: "Families living together" },
              { id: "d", text: "Children playing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical change",
                statement: "New things over time.",
              },
            ],
            steps: [
              {
                reasoning: "Printing press = change.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Printing press",
            commonErrors: ["Continuity chosen."],
          },
        },
        {
          id: "edxph-u1-chg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of change and one of continuity over the past 100 years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change vs continuity",
                statement: "Both happen over time.",
              },
            ],
            steps: [
              {
                reasoning: "Change example — e.g. computers/phones invented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Continuity example — e.g. families, food, shelter.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. computers vs families",
            commonErrors: ["Two of same type."],
          },
        },
        {
          id: "edxph-u1-chg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two causes of historical change and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Causes of change",
                statement: "Inventions, migration, war, trade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cause 1 with example — e.g. invention → printing press.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cause 2 with example — e.g. conquest → Roman Britain.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanations.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "e.g. invention+conquest with examples",
            commonErrors: ["No examples."],
          },
        },
      ],
    },
    {
      id: "edxph-u1-evaluate",
      title: "Evaluating Historical Claims",
      skill: "Judge whether historical claims are supported by evidence.",
      lesson: {
        sections: [
          {
            heading: "Claims and evidence",
            body: "A historical claim is a statement about the past — 'The Romans built roads', 'Castles were built for defence'. To check if a claim is true, look for evidence: do sources support it? Are they reliable? One source might be wrong or biased. Good historians check multiple sources before accepting a claim.",
          },
          {
            heading: "Being critical",
            body: "Not all sources are equally reliable. A coin with a date is strong evidence; a story passed down might change over time. Official documents might be biased. Archaeological finds are hard evidence. Always ask: who made this source? Why? Could they be wrong? This critical thinking is the heart of history.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is 'Castles were built for defence' supported by evidence?",
          solution: "Yes — thick walls, arrowslits, moats support this.",
        },
      },
      questions: [
        {
          id: "edxph-u1-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a historical claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A proven fact" },
              { id: "b", text: "A statement about the past" },
              { id: "c", text: "A type of source" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historical claim",
                statement: "Statement about past.",
              },
            ],
            steps: [
              { reasoning: "Claim = statement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Statement about past",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u1-eval-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do you check if a historical claim is true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ask your teacher" },
              { id: "b", text: "Look for supporting evidence" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Check the date" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Evaluating claims",
                statement: "Evidence supports claims.",
              },
            ],
            steps: [
              { reasoning: "Evidence = check.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Evidence",
            commonErrors: ["No evidence check."],
          },
        },
        {
          id: "edxph-u1-eval-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two things to consider when judging whether a source is reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source reliability",
                statement: "Bias, age, purpose.",
              },
            ],
            steps: [
              {
                reasoning: "Who made it and why (bias/purpose).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "How close to the events (primary vs secondary).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corroboration with other sources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bias+age+corroboration",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "edxph-u1-eval-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A website says 'The Romans never built anything in Britain.' Evaluate this claim using what you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Claim evaluation",
                statement: "Test against evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check evidence — Roman roads, walls, towns, coins exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Website likely wrong or biased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiple sources confirm Roman presence.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "False — evidence contradicts",
            commonErrors: ["Accepting blindly."],
          },
        },
      ],
    },
  ],
};
