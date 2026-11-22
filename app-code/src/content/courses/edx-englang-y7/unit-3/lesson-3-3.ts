import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "el7-u3-lesson-3-3",
  code: "3-3",
  title: "Presentations and Debates",
  goal: "I CAN deliver confident presentations and participate constructively in debates.",
  standards: ["Edexcel KS3 English Language — Spoken Language"],
  vocabulary: [
    {
      term: "Presentation",
      definition:
        "A structured spoken delivery to inform or persuade an audience.",
    },
    {
      term: "Debate",
      definition: "A formal discussion where opposing viewpoints are argued.",
    },
    {
      term: "Visual aid",
      definition: "Slides, images or objects supporting spoken content.",
    },
    {
      term: "Rebuttal",
      definition:
        "A response that challenges or counters an opponent's argument.",
    },
  ],
  concepts: [
    {
      id: "el7-u3-presentations",
      title: "Delivering Presentations",
      skill:
        "Structure and deliver engaging presentations with visual aids and confident delivery.",
      lesson: {
        sections: [
          {
            heading: "Presentation structure",
            body: "**Introduction**: hook + what you'll cover (tell them). **Body**: 3 main points maximum — each with an example or statistic. **Conclusion**: summarise key points + memorable closing line or call to action.\n\n**The rule of three**: audiences remember three points best. Keep slides minimal — keywords and images, not paragraphs of text. Your spoken words carry the detail; slides support, not replace.",
          },
          {
            heading: "Delivery skills",
            body: "**Eye contact**: sweep the room, don't fixate on notes or one person. **Posture**: stand tall, move naturally, avoid fidgeting. **Voice**: vary pace and volume; don't rush. **Nerves**: practice reduces anxiety; deep breaths before starting; remember the audience wants you to succeed.\n\n**Handling questions**: listen fully before answering, it's OK to say 'I don't know but I can find out', keep answers concise.",
          },
        ],
        keyFormulas: [
          {
            name: "Presentation structure",
            statement: "Hook → 3 points → memorable close.",
          },
          {
            name: "Slide design",
            statement: "Keywords + images, not text paragraphs.",
          },
        ],
        workedExample: {
          problem:
            "Structure a 5-minute presentation on 'The benefits of reading'.",
          solution:
            "Hook: 'The average person spends 6 hours online daily but only 17 minutes reading.' Points: stress reduction, knowledge/empathy, better sleep. Close: 'Tonight, read just 10 pages.'",
        },
      },
      questions: [
        {
          id: "el7-u3-presentations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'rule of three' in presentations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Presentations should last three minutes" },
              { id: "b", text: "Make three jokes" },
              { id: "c", text: "Audiences remember three main points best" },
              { id: "d", text: "Use three colours on slides" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Rule of three",
                statement:
                  "Three main points are most memorable for audiences.",
              },
            ],
            steps: [
              {
                reasoning: "Rule of three = 3 key points optimal.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(c)** Three points most memorable",
            commonErrors: ["Literal interpretation."],
          },
        },
        {
          id: "el7-u3-presentations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should slides contain keywords rather than paragraphs of text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Slide design",
                statement:
                  "Slides support speech — text overload competes with speaker.",
              },
            ],
            steps: [
              {
                reasoning: "Audience can't read and listen simultaneously.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Keywords reinforce spoken points.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Speaker remains focus.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Slides should support, not compete with, speech — keywords reinforce; paragraphs distract.",
            commonErrors: [
              "Slides = script view.",
              "No cognitive load reason.",
            ],
          },
        },
        {
          id: "el7-u3-presentations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can presenters manage nervousness?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nervousness management",
                statement:
                  "Preparation, breathing, reframing, practice reduce anxiety.",
              },
            ],
            steps: [
              {
                reasoning: "Thorough preparation builds confidence.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Deep breathing calms physically.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning: "Reframe nerves as excitement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Practice reduces uncertainty.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Prepare thoroughly, breathe deeply, reframe anxiety as energy, and practice — nerves are normal and manageable.",
            commonErrors: [
              "'Don't be nervous' view.",
              "No practical strategies.",
            ],
          },
        },
        {
          id: "el7-u3-presentations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a presentation arguing 'School uniforms should be abolished'.",
          parts: [
            { label: "a", prompt: "Write a hook opening.", marks: 2 },
            { label: "b", prompt: "Plan your three main points.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest a closing call to action.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation planning",
                statement: "Hook + 3 points + call to action.",
              },
            ],
            steps: [
              {
                reasoning: "Hook engages on topic.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Three distinct, relevant points.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Points logically ordered.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Clear call to action.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "Actionable and appropriate.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "e.g. Hook: 'Every morning, millions of students wear outfits chosen by adults.' Points: self-expression, equality, comfort. Close: 'Sign the petition / talk to your headteacher.'",
            commonErrors: ["No hook.", "Points not distinct."],
          },
        },
      ],
    },
    {
      id: "el7-u3-debates",
      title: "Debating and Formal Discussion",
      skill:
        "Construct and deliver arguments in formal debates and structured discussions.",
      lesson: {
        sections: [
          {
            heading: "Debate structure",
            body: "Formal debates have **roles**: first proposition (opening arguments), second proposition (supporting), first opposition (opening counter), second opposition (rebuttal), then summary speeches. Each speaker has time limits.\n\n**Effective debaters**: state claims clearly, support with evidence/examples, rebut opponents' strongest points, stay on topic, respect opponents while disagreeing. The goal is persuasion through logic, not winning through aggression.",
          },
          {
            heading: "Argumentation skills",
            body: "**Claim → evidence → reasoning**: never assert without support. **Anticipate rebuttals**: address likely counter-arguments before opponents raise them. **Signposting**: 'My first point is...', 'Turning to my opponent's claim...'.\n\n**POI handling** (points of information): accept relevant questions graciously, decline irrelevant ones politely ('I will address that in my second point'). Maintain composure — emotional responses weaken logical positions.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument structure",
            statement: "Claim → evidence → reasoning.",
          },
          {
            name: "Debate etiquette",
            statement: "Respect opponents, stay on topic, rebut logically.",
          },
        ],
        workedExample: {
          problem:
            "Debate motion: 'Homework should be abolished'. Give your first proposition argument.",
          solution:
            "'Homework disadvantages outweigh benefits: it reduces free time essential for development (evidence: WHO guidelines), widens inequality (unequal home support), and research shows limited academic benefit beyond primary years.'",
        },
      },
      questions: [
        {
          id: "el7-u3-debates-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'rebuttal' in a debate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point of information" },
              {
                id: "b",
                text: "A response that challenges or counters an opponent's argument",
              },
              { id: "c", text: "A summary speech" },
              { id: "d", text: "The opening argument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rebuttal",
                statement: "Response challenging opponent's argument.",
              },
            ],
            steps: [
              {
                reasoning: "Rebuttal = counter-argument response.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Response challenging opponent's argument",
            commonErrors: ["Confusing with opening."],
          },
        },
        {
          id: "el7-u3-debates-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should debaters address counter-arguments before opponents raise them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Anticipating rebuttals",
                statement: "Pre-empting objections strengthens your position.",
              },
            ],
            steps: [
              {
                reasoning: "Shows thorough preparation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Weakens opponents' potential attacks.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Demonstrates balanced thinking.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Anticipating rebuttals shows preparation and weakens opponents' attacks before they're made.",
            commonErrors: ["Only 'good strategy'.", "No mechanism explained."],
          },
        },
        {
          id: "el7-u3-debates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does respectful disagreement strengthen a debate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Debate etiquette",
                statement:
                  "Respectful tone keeps focus on ideas, builds credibility.",
              },
            ],
            steps: [
              {
                reasoning: "Keeps focus on arguments not personalities.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Builds speaker credibility.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Encourages genuine engagement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Models civil discourse.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Respectful disagreement keeps focus on ideas, builds credibility and models civil discourse.",
            commonErrors: ["Aggression wins view.", "No credibility link."],
          },
        },
        {
          id: "el7-u3-debates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Motion: 'School uniforms should be compulsory'. You're first proposition.",
          parts: [
            {
              label: "a",
              prompt: "State your first argument with evidence.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Anticipate one opposition argument.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest a rebuttal to that opposition argument.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Debate argumentation",
                statement: "Claim+evidence → anticipate → rebut.",
              },
            ],
            steps: [
              {
                reasoning: "Clear argument with supporting evidence.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Evidence relevant and credible.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Likely opposition argument identified.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Anticipation shows preparation.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Effective rebuttal with reasoning.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "e.g. 'Uniforms reduce bullying based on appearance (evidence: studies). Opposition may argue uniforms suppress individuality — rebuttal: individuality expressed through choices within uniform policy.'",
            commonErrors: ["No evidence.", "Weak rebuttal."],
          },
        },
      ],
    },
  ],
};
