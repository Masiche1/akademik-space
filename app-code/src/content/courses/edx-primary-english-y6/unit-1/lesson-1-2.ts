import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edpe6-u1-lesson-1-2",
  code: "1-2",
  title: "Nuanced Language and Connotation",
  goal: "I CAN understand connotation and choose words with precise shades of meaning.",
  standards: ["Year 6 Spelling and Vocabulary"],
  vocabulary: [
    {
      term: "Connotation",
      definition: "Emotional/associative meaning beyond dictionary definition.",
    },
    { term: "Denotation", definition: "Literal dictionary meaning." },
    { term: "Register", definition: "Level of formality." },
    { term: "Nuance", definition: "Subtle difference in meaning." },
  ],
  concepts: [
    {
      id: "edpe6-u1-connotation",
      title: "Connotation and denotation",
      skill: "Distinguish literal meaning from emotional associations.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "**Denotation** = dictionary meaning ('home' = place where you live). **Connotation** = feelings/associations ('home' = warmth, safety, belonging; 'house' = just a building).",
          },
          {
            heading: "Shades of meaning",
            body: "'Slim' vs 'skinny' vs 'thin' — all mean not fat, but 'slim' is positive, 'skinny' negative, 'thin' neutral. Word choice creates tone.",
          },
        ],
        keyFormulas: [
          { name: "Denotation", statement: "Literal meaning" },
          { name: "Connotation", statement: "Emotional associations" },
          { name: "Nuance", statement: "Subtle meaning differences" },
        ],
        workedExample: {
          problem: "Compare 'home' and 'house'.",
          solution:
            "Home has warmth/belonging connotation; house is just a building.",
        },
      },
      questions: [
        {
          id: "edpe6-u1-cn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is denotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional meaning" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Literal dictionary meaning" },
              { id: "d", text: "Slang" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denotation",
                statement: "Literal meaning.",
              },
            ],
            steps: [
              { reasoning: "Denotation = literal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Literal dictionary meaning",
            commonErrors: ["Confusing with connotation."],
          },
        },
        {
          id: "edpe6-u1-cn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's the connotation of 'skinny'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Positive" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Connotation",
                statement: "skinny has negative associations.",
              },
            ],
            steps: [
              { reasoning: "Identify association.", marks: 1, markCode: "M" },
              { reasoning: "Answer: negative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Negative",
            commonErrors: ["Missing negative connotation."],
          },
        },
        {
          id: "edpe6-u1-cn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'slim' and 'skinny'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuance",
                statement: "slim=positive; skinny=negative.",
              },
            ],
            steps: [
              { reasoning: "Both mean not fat.", marks: 1, markCode: "M" },
              {
                reasoning: "Different connotations explained.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both mean not fat, but slim is positive/complimentary while skinny is negative",
            commonErrors: ["Only denotation or no nuance."],
          },
        },
        {
          id: "edpe6-u1-cn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Choose the best word for each context: 'slim/skinny/thin' — describing an athlete, a sick person, a neutral measurement.",
          parts: [
            { label: "a", prompt: "Athlete", marks: 1 },
            { label: "b", prompt: "Sick person", marks: 1 },
            { label: "c", prompt: "Neutral measurement", marks: 1 },
            { label: "d", prompt: "Why these choices?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contextual word choice",
                statement:
                  "slim (positive), skinny (negative), thin (neutral).",
              },
            ],
            steps: [
              { part: "a", reasoning: "slim chosen.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "skinny chosen.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "thin chosen.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Connotations explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "slim (athlete), skinny (sick), thin (neutral); connotations differ",
            commonErrors: ["Wrong connotations or no reasoning."],
          },
        },
      ],
    },
    {
      id: "edpe6-u1-phrases",
      title: "Idiom and phrase mastery",
      skill: "Use idioms and figurative phrases accurately in context.",
      lesson: {
        sections: [
          {
            heading: "Sophisticated idioms",
            body: "'Bite the bullet' = face difficulty; 'burn the midnight oil' = work late; 'hit the nail on the head' = exactly right; 'in the same boat' = same situation; 'the ball is in your court' = your decision.",
          },
          {
            heading: "Using idioms well",
            body: "Don't overuse — one or two per piece adds flavour. Ensure they fit the context and register. Formal writing needs formal idioms or none.",
          },
        ],
        keyFormulas: [
          { name: "Idiom", statement: "Non-literal fixed phrase" },
          { name: "Register match", statement: "Idiom suits context" },
          { name: "Moderation", statement: "Don't overuse" },
        ],
        workedExample: {
          problem: "Use 'hit the nail on the head' in a sentence.",
          solution:
            "'Her analysis of the problem really hit the nail on the head.'",
        },
      },
      questions: [
        {
          id: "edpe6-u1-id-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'bite the bullet' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give up" },
              { id: "b", text: "Be angry" },
              { id: "c", text: "Eat something" },
              { id: "d", text: "Face difficulty bravely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "bite the bullet = face difficulty.",
              },
            ],
            steps: [
              { reasoning: "Non-literal meaning.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Face difficulty bravely",
            commonErrors: ["Literal meaning."],
          },
        },
        {
          id: "edpe6-u1-id-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'the ball is in your court' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You're in trouble" },
              { id: "b", text: "It's your decision" },
              { id: "c", text: "Wait" },
              { id: "d", text: "Play tennis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "ball in your court = your turn/decision.",
              },
            ],
            steps: [
              {
                reasoning: "Idiom meaning identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: your decision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It's your decision",
            commonErrors: ["Literal meaning."],
          },
        },
        {
          id: "edpe6-u1-id-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'burn the midnight oil' and use it appropriately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom",
                statement: "Work late into the night.",
              },
            ],
            steps: [
              { reasoning: "Meaning explained.", marks: 1, markCode: "M" },
              { reasoning: "Sentence written.", marks: 1, markCode: "A" },
              { reasoning: "Appropriate context.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Work late; e.g. 'She burned the midnight oil finishing her essay.'",
            commonErrors: ["Wrong meaning or context."],
          },
        },
        {
          id: "edpe6-u1-id-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a formal sentence using an idiom appropriately (or explain why you wouldn't).",
          parts: [
            { label: "a", prompt: "Choose appropriate idiom", marks: 1 },
            { label: "b", prompt: "Use in formal context", marks: 1 },
            { label: "c", prompt: "Ensure register matches", marks: 1 },
            { label: "d", prompt: "Sentence is effective", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Idiom in context",
                statement: "Formal idiom or explanation of inappropriateness.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Suitable idiom.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Formal context.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Register matched.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Effective use.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The committee decided to bite the bullet and implement the unpopular but necessary reforms.'",
            commonErrors: ["Informal idiom or forced use."],
          },
        },
      ],
    },
  ],
};
