import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpe2-u3-lesson-3-1",
  code: "3-1",
  title: "Sentence Types and Conjunctions",
  goal: "I CAN write statements, questions, commands and exclamations joined by conjunctions.",
  standards: ["Year 2 Writing"],
  vocabulary: [
    {
      term: "Statement",
      definition: "A sentence that tells something: 'The sky is blue.'",
    },
    {
      term: "Question",
      definition: "A sentence that asks something: 'Where are you?'",
    },
    {
      term: "Command",
      definition:
        "A sentence that tells someone to do something: 'Close the door.'",
    },
    {
      term: "Exclamation",
      definition: "A sentence showing strong feeling: 'What a goal!'",
    },
    {
      term: "Conjunction",
      definition: "A joining word: and, but, or, so, because.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u3-sentencetypes",
      title: "Four sentence types",
      skill:
        "Identify and write statements, questions, commands and exclamations.",
      lesson: {
        sections: [
          {
            heading: "The four types",
            body: "**Statement** tells: 'The dog is big.' **Question** asks: 'Is the dog big?' **Command** tells someone to do: 'Sit down.' **Exclamation** shows feeling: 'What a big dog!' Each has different punctuation.",
          },
          {
            heading: "Punctuation matters",
            body: "Statements and commands end with full stops; questions end with ?; exclamations end with !. Reading them correctly helps you understand meaning.",
          },
        ],
        keyFormulas: [
          { name: "Statement/command", statement: "Ends with ." },
          { name: "Question", statement: "Ends with ?" },
          { name: "Exclamation", statement: "Ends with !" },
        ],
        workedExample: {
          problem: "What type is 'Don't touch that!'?",
          solution:
            "Command — tells someone what not to do, with exclamation for emphasis.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of sentence is 'Where is my hat?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question" },
              { id: "b", text: "Statement" },
              { id: "c", text: "Command" },
              { id: "d", text: "Exclamation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Question",
                statement: "Asks something, ends with ?.",
              },
            ],
            steps: [
              { reasoning: "Asks for information.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Question",
            commonErrors: ["Choosing statement — it tells not asks."],
          },
        },
        {
          id: "edpe2-u3-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a command?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What a big door!" },
              { id: "b", text: "Is the door open?" },
              { id: "c", text: "The door is open." },
              { id: "d", text: "Close the door." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command",
                statement: "Tells someone to do something.",
              },
            ],
            steps: [
              { reasoning: "Identify instruction.", marks: 1, markCode: "M" },
              { reasoning: "Answer: Close the door.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Close the door.",
            commonErrors: ["Choosing a statement."],
          },
        },
        {
          id: "edpe2-u3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence of each type about a dog: statement, question, command.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence types",
                statement: "One of each type written correctly.",
              },
            ],
            steps: [
              { reasoning: "Statement written.", marks: 1, markCode: "A" },
              {
                reasoning: "Question written with ?.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Command written.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The dog is big.' 'Is it yours?' 'Sit down.'",
            commonErrors: ["Wrong punctuation for type."],
          },
        },
        {
          id: "edpe2-u3-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the same idea as all four sentence types about a cat on a mat.",
          parts: [
            { label: "a", prompt: "Statement", marks: 1 },
            { label: "b", prompt: "Question", marks: 1 },
            { label: "c", prompt: "Command", marks: 1 },
            { label: "d", prompt: "Exclamation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence types",
                statement: "All four types about same topic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Statement correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Question correct with ?.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Command correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Exclamation correct with !.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "'The cat is on the mat.' 'Is the cat on the mat?' 'Look at the cat!' 'What a cute cat!'",
            commonErrors: ["Types not clearly different."],
          },
        },
      ],
    },
    {
      id: "edpe2-u3-conjunctions",
      title: "Joining sentences with conjunctions",
      skill: "Use and, but, or, so, because to join ideas.",
      lesson: {
        sections: [
          {
            heading: "Joining words",
            body: "**and** adds ideas: 'I like tea and coffee.' **but** shows contrast: 'I wanted to play but it rained.' **because** gives a reason: 'I stayed inside because it was cold.' **so** shows result: 'It rained so we stayed home.'",
          },
          {
            heading: "Joining sentences",
            body: "Combine two short sentences: 'I like cats. I like dogs.' → 'I like cats and dogs.' Or: 'I wanted to go out. It was raining.' → 'I wanted to go out but it was raining.'",
          },
        ],
        keyFormulas: [
          { name: "and", statement: "Adds ideas" },
          { name: "but", statement: "Shows contrast" },
          { name: "because", statement: "Gives reason" },
          { name: "so", statement: "Shows result" },
        ],
        workedExample: {
          problem: "Join these: 'I was hungry. I made a sandwich.'",
          solution: "I was hungry so I made a sandwich.",
        },
      },
      questions: [
        {
          id: "edpe2-u3-cj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which joining word shows contrast? 'I wanted to play ___ it was raining.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "because" },
              { id: "b", text: "so" },
              { id: "c", text: "but" },
              { id: "d", text: "and" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conjunctions",
                statement: "but shows contrast.",
              },
            ],
            steps: [
              {
                reasoning: "Wanted vs rained = contrast.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Choosing 'and' — no contrast."],
          },
        },
        {
          id: "edpe2-u3-cj-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Join these sentences: 'I like pizza. I like pasta.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like pizza because I like pasta." },
              { id: "b", text: "I like pizza but I like pasta." },
              { id: "c", text: "I like pizza so I like pasta." },
              { id: "d", text: "I like pizza and I like pasta." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjunctions",
                statement: "and adds similar ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Both are likes — use and.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: and.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I like pizza and I like pasta.",
            commonErrors: ["Using 'but' for similar ideas."],
          },
        },
        {
          id: "edpe2-u3-cj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these with the best conjunction: 'I stayed home. It was raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjunctions",
                statement: "because or since — rain is reason.",
              },
            ],
            steps: [
              { reasoning: "Identify relationship.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct conjunction used.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Sentence makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I stayed home because it was raining.",
            commonErrors: ["Wrong conjunction — 'and' doesn't show reason."],
          },
        },
        {
          id: "edpe2-u3-cj-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Join these three sentences using conjunctions: 'I was tired. I wanted to play. It was bedtime.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conjunctions",
                statement:
                  "e.g. 'I was tired but I wanted to play because it was almost bedtime.'",
              },
            ],
            steps: [
              {
                reasoning: "First conjunction joins ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second conjunction joins reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sentence flows logically.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Makes sense overall.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'I was tired but wanted to play because it was nearly bedtime.'",
            commonErrors: ["Contradictory or illogical joins."],
          },
        },
      ],
    },
  ],
};
