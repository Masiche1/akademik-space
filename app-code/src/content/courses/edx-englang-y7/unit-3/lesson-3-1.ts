import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "el7-u3-lesson-3-1",
  code: "3-1",
  title: "Effective Speaking and Listening",
  goal: "I CAN speak clearly and listen actively in formal and informal contexts.",
  standards: ["Edexcel KS3 English Language — Spoken Language"],
  vocabulary: [
    {
      term: "Active listening",
      definition:
        "Fully concentrating on the speaker, processing meaning and responding appropriately.",
    },
    {
      term: "Register",
      definition: "Level of formality in speech — formal, informal, neutral.",
    },
    {
      term: "Paralanguage",
      definition: "Non-verbal aspects of speech — tone, pace, volume, pauses.",
    },
    {
      term: "Turn-taking",
      definition:
        "The rules governing when speakers take and give up the floor.",
    },
  ],
  concepts: [
    {
      id: "el7-u3-speaking",
      title: "Effective Speaking",
      skill:
        "Adapt speech for purpose, audience and context using clarity, pace and appropriate language.",
      lesson: {
        sections: [
          {
            heading: "Adapting speech",
            body: "Effective speakers match register to context: **formal** for presentations and interviews (full sentences, precise vocabulary, measured pace); **informal** for friends (contractions, slang, faster pace).\n\n**Paralanguage matters**: vary pace for emphasis, pause for effect, adjust volume for the space, use gestures and eye contact. Monotone delivery loses audiences regardless of content quality.",
          },
          {
            heading: "Structure in speech",
            body: "Spoken language needs **signposting**: 'First...', 'Moving on to...', 'To conclude...'. Unlike writing, listeners can't re-read — repetition and signposting aid comprehension.\n\n**Opening and closing**: start with a hook (question, fact, anecdote); end with a clear summary or memorable line. Avoid 'um', 'like', 'you know' fillers — pause silently instead.",
          },
        ],
        keyFormulas: [
          {
            name: "Speech adaptation",
            statement: "Match register, pace, volume to audience and context.",
          },
          {
            name: "Signposting",
            statement: "Verbal cues guiding listeners through your points.",
          },
        ],
        workedExample: {
          problem:
            "Give a two-sentence hook for a presentation on climate change.",
          solution:
            "'In 2050, our children will ask why we knew about rising seas and did nothing. Today I want to explain what we can still do.'",
        },
      },
      questions: [
        {
          id: "el7-u3-speaking-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'paralanguage'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Body language only" },
              { id: "b", text: "The words spoken" },
              {
                id: "c",
                text: "Non-verbal aspects of speech — tone, pace, volume",
              },
              { id: "d", text: "Written language" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paralanguage",
                statement:
                  "How something is said — tone, pace, volume, pauses.",
              },
            ],
            steps: [
              {
                reasoning: "Paralanguage = vocal delivery features.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Tone, pace, volume, pauses",
            commonErrors: ["Confusing with words themselves."],
          },
        },
        {
          id: "el7-u3-speaking-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is signposting important in spoken presentations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Signposting",
                statement:
                  "Listeners can't re-read — verbal cues guide comprehension.",
              },
            ],
            steps: [
              {
                reasoning: "Listeners can't revisit spoken words.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Signposts structure the argument audibly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Improves audience comprehension.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Signposting guides listeners through points — spoken language can't be re-read like text.",
            commonErrors: [
              "Only 'looks professional'.",
              "No listener-centred reason.",
            ],
          },
        },
        {
          id: "el7-u3-speaking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does pace and pause affect the impact of speech?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Delivery control",
                statement:
                  "Pace creates emphasis; pauses create weight and allow processing.",
              },
            ],
            steps: [
              {
                reasoning: "Slow pace = emphasis, gravity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fast pace = urgency, energy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pauses let key points land.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Varied delivery sustains attention.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Pace and pauses control emphasis and impact — monotone delivery loses audiences.",
            commonErrors: ["One-pace-fits-all.", "No effect explained."],
          },
        },
        {
          id: "el7-u3-speaking-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a 60-second spoken presentation on 'Why exercise matters'.",
          parts: [
            { label: "a", prompt: "Write a hook opening.", marks: 2 },
            { label: "b", prompt: "Plan three signposted points.", marks: 3 },
            { label: "c", prompt: "Suggest a closing technique.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Speech planning",
                statement: "Hook + signposted points + strong close.",
              },
            ],
            steps: [
              {
                reasoning: "Hook engages immediately.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Three distinct points planned.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Signposting language included.",
                marks: 1,
                markCode: "AO4",
                part: "b",
              },
              {
                reasoning: "Closing technique: summary/call/question.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "Closing memorable/fitting.",
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
              "e.g. Hook: 'Your body is the only vehicle you'll ever own.' Points: health, mood, longevity. Close: 'So tonight, take that first step.'",
            commonErrors: ["No hook.", "No signposting."],
          },
        },
      ],
    },
    {
      id: "el7-u3-listening",
      title: "Active Listening and Discussion",
      skill:
        "Listen critically, respond appropriately and contribute to discussions.",
      lesson: {
        sections: [
          {
            heading: "Active listening skills",
            body: "Active listening means: **focus** on the speaker without planning your reply, **process** their words, **respond** appropriately. Signs of active listening: eye contact, nodding, relevant questions, building on what was said.\n\n**Barriers to listening**: distractions, assumptions ('I already know what they'll say'), emotional reactions, rehearsing responses instead of hearing. Overcoming these takes deliberate effort.",
          },
          {
            heading: "Discussion skills",
            body: "Effective discussion requires **turn-taking** (wait for natural pauses, don't interrupt), **building on others' points** ('That's interesting because...'), and **disagreeing respectfully** ('I see it differently because...').\n\n**Critical listening**: distinguish facts from opinions, notice unsupported claims, ask clarifying questions ('What evidence supports that?'). Good listeners make discussions richer — they add perspective rather than just waiting to speak.",
          },
        ],
        keyFormulas: [
          {
            name: "Active listening",
            statement: "Focus + process + respond appropriately.",
          },
          {
            name: "Discussion etiquette",
            statement: "Turn-taking, building, respectful disagreement.",
          },
        ],
        workedExample: {
          problem:
            "Someone says 'Homework is pointless.' Respond as an active listener.",
          solution:
            "'That's a strong claim — what makes you say that? I see it differently because homework can consolidate learning, but I'd be interested in your reasoning.'",
        },
      },
      questions: [
        {
          id: "el7-u3-listening-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'active listening'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hearing while doing something else" },
              { id: "b", text: "Taking notes only" },
              { id: "c", text: "Talking while others speak" },
              {
                id: "d",
                text: "Fully concentrating, processing meaning and responding appropriately",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active listening",
                statement:
                  "Full concentration + processing + appropriate response.",
              },
            ],
            steps: [
              {
                reasoning: "Active = engaged, not passive.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Full concentration + processing + response",
            commonErrors: ["Passive hearing view."],
          },
        },
        {
          id: "el7-u3-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two signs of active listening in a discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Active listening signs",
                statement:
                  "Eye contact, nodding, relevant questions, building on points.",
              },
            ],
            steps: [
              {
                reasoning: "Any two valid signs given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signs are observable behaviours.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signs demonstrate engagement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. eye contact, nodding, asking relevant questions, referencing earlier points.",
            commonErrors: ["Vague 'paying attention'.", "Not observable."],
          },
        },
        {
          id: "el7-u3-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can you disagree respectfully in a discussion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Respectful disagreement",
                statement:
                  "Acknowledge viewpoint, then present counter-evidence calmly.",
              },
            ],
            steps: [
              {
                reasoning: "Acknowledge the other viewpoint first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Present your reasoning calmly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoid personal attacks.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Stay open to persuasion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Acknowledge their view, then calmly present your reasoning with evidence — never attack the person.",
            commonErrors: ["Aggressive disagreement.", "No acknowledgement."],
          },
        },
        {
          id: "el7-u3-listening-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a class debate on 'Homework should be abolished', a classmate argues: 'Homework is pointless busywork that steals our free time.'",
          parts: [
            {
              label: "a",
              prompt:
                "Write an active-listening response that acknowledges their point.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Present a counter-argument respectfully.",
              marks: 3,
            },
            { label: "c", prompt: "Ask a clarifying question.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Debate response",
                statement: "Acknowledge → counter with evidence → clarify.",
              },
            ],
            steps: [
              {
                reasoning: "Acknowledgement of their point.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Genuine engagement shown.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Counter-argument with reasoning.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Respectful tone maintained.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Relevant clarifying question.",
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
              "e.g. 'I understand the frustration — too much homework can feel pointless. But research shows spaced practice improves retention...'",
            commonErrors: ["Dismissive tone.", "No counter-evidence."],
          },
        },
      ],
    },
  ],
};
