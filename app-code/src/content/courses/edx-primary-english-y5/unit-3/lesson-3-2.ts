import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "edpe5-u3-lesson-3-2",
  code: "3-2",
  title: "Persuasive Writing",
  goal: "I CAN write effective persuasive texts using rhetorical techniques.",
  standards: ["Year 5 Writing"],
  vocabulary: [
    {
      term: "Rhetorical question",
      definition: "Question asked for effect, not answer.",
    },
    {
      term: "Rule of three",
      definition: "Using three points for emphasis: 'fast, free, fun'.",
    },
    {
      term: "Emotive language",
      definition: "Words that trigger emotional response.",
    },
    {
      term: "Counterargument",
      definition: "Opposing view acknowledged and refuted.",
    },
  ],
  concepts: [
    {
      id: "edpe5-u3-techniques",
      title: "Persuasive techniques",
      skill: "Use rhetorical devices effectively in persuasive writing.",
      lesson: {
        sections: [
          {
            heading: "Key techniques",
            body: "**Rhetorical questions**: 'Don't you want the best for your child?' **Rule of three**: 'Our product is fast, reliable, affordable.' **Emotive language**: 'trapped', 'free', 'betrayed'. **Repetition**: 'We must act. We must change. We must win.'",
          },
          {
            heading: "Addressing opposition",
            body: "Strong persuasion acknowledges counterarguments: 'Some say it's too expensive, but consider the long-term savings.' This builds credibility.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical question", statement: "Engages reader" },
          { name: "Rule of three", statement: "Three points = memorable" },
          { name: "Counterargument", statement: "Shows balance" },
        ],
        workedExample: {
          problem: "Write a persuasive sentence using rule of three.",
          solution:
            "'Our school garden is beautiful, educational, and good for the environment.'",
        },
      },
      questions: [
        {
          id: "edpe5-u3-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question needing answer" },
              { id: "b", text: "Question asked for effect" },
              { id: "c", text: "A maths problem" },
              { id: "d", text: "A joke" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical question",
                statement: "For effect not answer.",
              },
            ],
            steps: [{ reasoning: "Effect question.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Question asked for effect",
            commonErrors: ["Literal question."],
          },
        },
        {
          id: "edpe5-u3-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of the rule of three?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's good" },
              { id: "b", text: "It's fast, cheap, and reliable" },
              { id: "c", text: "Buy it now" },
              { id: "d", text: "I think it's nice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rule of three",
                statement: "Three points grouped.",
              },
            ],
            steps: [
              { reasoning: "Three items identified.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: fast/cheap/reliable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** fast, cheap, and reliable",
            commonErrors: ["Not three points."],
          },
        },
        {
          id: "edpe5-u3-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a persuasive sentence using a rhetorical question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhetorical question",
                statement: "Engaging question + opinion.",
              },
            ],
            steps: [
              { reasoning: "Question form used.", marks: 1, markCode: "A" },
              { reasoning: "Persuasive purpose.", marks: 1, markCode: "A" },
              { reasoning: "Effective.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'Don't you want your children to have the best education possible?'",
            commonErrors: ["Literal question or weak."],
          },
        },
        {
          id: "edpe5-u3-pt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a 4-sentence persuasion for school recycling using: rhetorical question, rule of three, emotive language.",
          parts: [
            { label: "a", prompt: "Rhetorical question", marks: 1 },
            { label: "b", prompt: "Rule of three", marks: 1 },
            { label: "c", prompt: "Emotive language", marks: 1 },
            { label: "d", prompt: "Call to action", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Persuasive techniques",
                statement: "All techniques used effectively.",
              },
            ],
            steps: [
              { part: "a", reasoning: "RQ used.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Rule of 3 used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Emotive words.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "CTA present.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'Did you know our school throws away tonnes of plastic every week? Recycling is easy, smart, and vital. Our beautiful planet deserves better than mountains of waste. Join us in making a difference today!'",
            commonErrors: ["Missing techniques."],
          },
        },
      ],
    },
    {
      id: "edpe5-u3-narrative",
      title: "Narrative writing",
      skill:
        "Write engaging narratives with character development and plot structure.",
      lesson: {
        sections: [
          {
            heading: "Character development",
            body: "Show character through actions, dialogue, thoughts: 'Maya gritted her teeth' (determined), 'Tom muttered under his breath' (annoyed). Avoid 'telling': don't say 'she was sad' — show tears, silence, body language.",
          },
          {
            heading: "Plot structure",
            body: "Exposition (setup) → rising action (builds tension) → climax (peak) → falling action → resolution. Vary pacing: fast action scenes vs slow descriptive moments.",
          },
        ],
        keyFormulas: [
          {
            name: "Show don't tell",
            statement: "Actions/dialogue reveal character",
          },
          { name: "Rising action", statement: "Builds toward climax" },
          { name: "Pacing", statement: "Vary speed and intensity" },
        ],
        workedExample: {
          problem: "Rewrite 'She was nervous' using show don't tell.",
          solution:
            "'Her hands trembled as she gripped the edge of the stage.'",
        },
      },
      questions: [
        {
          id: "edpe5-u3-nv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show don't tell' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describe everything" },
              { id: "b", text: "Use actions to reveal character" },
              { id: "c", text: "Be brief" },
              { id: "d", text: "Use dialogue only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Show don't tell",
                statement: "Actions reveal character.",
              },
            ],
            steps: [
              { reasoning: "Show = demonstrate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Use actions to reveal character",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpe5-u3-nv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which shows character through action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jack was angry" },
              { id: "b", text: "Jack slammed the door and stomped off" },
              { id: "c", text: "Jack is a boy" },
              { id: "d", text: "Jack has red hair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Show don't tell",
                statement: "Actions reveal emotion.",
              },
            ],
            steps: [
              { reasoning: "Action shows anger.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: slammed/stomped.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** slammed the door and stomped off",
            commonErrors: ["Choosing 'telling'."],
          },
        },
        {
          id: "edpe5-u3-nv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a two-sentence character introduction showing personality through action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character introduction",
                statement: "Actions/dialogue reveal personality.",
              },
            ],
            steps: [
              { reasoning: "Character introduced.", marks: 1, markCode: "A" },
              { reasoning: "Action used.", marks: 1, markCode: "A" },
              { reasoning: "Personality shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Sarah paced the hallway, checking her watch every few seconds. She couldn't stop smiling.'",
            commonErrors: ["Telling not showing."],
          },
        },
        {
          id: "edpe5-u3-nv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a story opening (4 sentences) for: a detective investigating a missing painting.",
          parts: [
            { label: "a", prompt: "Setting and character", marks: 1 },
            { label: "b", prompt: "Problem introduced", marks: 1 },
            { label: "c", prompt: "Show detective's personality", marks: 1 },
            { label: "d", prompt: "Create intrigue", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Story opening",
                statement: "All elements present, engaging.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Setting/character set.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Problem introduced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Personality shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Intrigue created.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Detective Mara Voss entered the empty gallery, her sharp eyes scanning every shadow. The famous painting was gone — no forced door, no signs of struggle. She crouched by the frame, noticing a single thread of red silk. Whoever took it knew exactly what they were doing.'",
            commonErrors: ["Weak or incomplete opening."],
          },
        },
      ],
    },
  ],
};
