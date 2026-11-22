import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const PRESENTEROMPT: TextExtract = {
  title: "Presentation Prompt: Should Phones Be Allowed in Class?",
  author: "Written for Akademik Space",
  text: "Prepare a 3-minute presentation arguing whether phones should be allowed in class. Use at least one visual aid (slide, poster, or prop). Speak clearly, maintain eye contact, and acknowledge counterarguments.",
};

const WEAKPRESENTATION: TextExtract = {
  title: "Student Presentation Transcript",
  author: "Written for Akademik Space",
  text: "So, um, phones. They're, like, really important. Everyone has them. My mom says I need mine for safety. But also they're distracting. Kids use them in class. I don't know. That's basically it. Any questions?",
};

export const lesson42: Lesson = {
  id: "ela8-u4-lesson-4-2",
  code: "4-2",
  title: "Presentations: Structure and Delivery",
  goal: "I CAN prepare and deliver effective presentations with visual aids and appropriate delivery skills.",
  standards: ["SL.8.4", "SL.8.5", "SL.8.6"],
  vocabulary: [
    {
      term: "Presentation",
      definition: "Formal talk delivered to an audience with a clear purpose.",
    },
    {
      term: "Visual aid",
      definition: "Slide, poster, or prop that supports the presentation.",
    },
    {
      term: "Thesis",
      definition: "Main argument or position of the presentation.",
    },
    {
      term: "Transition",
      definition:
        "Phrase connecting ideas — 'first', 'however', 'in conclusion'.",
    },
    {
      term: "Eye contact",
      definition: "Looking at audience members to engage them.",
    },
    {
      term: "Pace",
      definition: "Speed of delivery — appropriate for comprehension.",
    },
  ],
  concepts: [
    {
      id: "ela8-u4-presentation",
      title: "Structuring effective presentations",
      skill:
        "Organize presentations with hook, thesis, evidence, counterargument, and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Presentation structure",
            body: "Strong presentations follow: **hook** (grab attention — question, statistic, story), **thesis** (clear position), **body** (2-3 reasons with evidence), **counterargument** (acknowledge opposition), **conclusion** (restatement + call to action). For phones in class: hook ('94% of teens have phones'), thesis ('phones should be allowed for educational use'), reasons (research, emergencies, accessibility), counterargument ('distraction' → respond with data).",
          },
          {
            heading: "Visual aids",
            body: "Visual aids **support** — they don't replace — your words. Slides should have minimal text (keywords, not paragraphs), clear images, and reinforce your points. Don't read slides verbatim; use them as prompts. A good visual aid answers 'what does the audience need to SEE to understand?' — a chart for statistics, a diagram for processes.",
          },
        ],
        keyFormulas: [
          {
            name: "Presentation structure",
            statement:
              "Hook → thesis → body (reasons+evidence) → counterargument → conclusion.",
          },
          {
            name: "Visual aid rule",
            statement: "Support, don't replace — minimal text, clear images.",
          },
          {
            name: "Don't read slides",
            statement: "Slides are prompts, not scripts.",
          },
        ],
        workedExample: {
          problem: "Why is the weak presentation ineffective?",
          solution:
            "No hook, no clear thesis, no evidence, vague reasons ('really important'), no counterargument, abrupt ending. It states opinions without structure or support.",
        },
      },
      questions: [
        {
          id: "ela8-u4-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENTEROMPT,
          stem: "What should a presentation's visual aid do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contain all the text to be read" },
              { id: "b", text: "Support and reinforce the speaker's points" },
              { id: "c", text: "Replace the speaker's words" },
              { id: "d", text: "Be as complicated as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual aid",
                statement: "Supports, doesn't replace.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Visual aids reinforce points — they're not scripts or replacements for speaking.",
                evidence: "at least one visual aid",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Support and reinforce the speaker's points.",
            commonErrors: ["Choosing (a) — visual aids support, not replace."],
          },
        },
        {
          id: "ela8-u4-presentation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKPRESENTATION,
          stem: "Identify three weaknesses in the student presentation and explain how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Presentation critique",
                statement: "Spot structural and delivery weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: no clear thesis — 'phones are important' is vague, not a position.",
                evidence: "They're, like, really important",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness 2: no evidence — 'my mom says' is anecdote, not research.",
                evidence: "My mom says I need mine for safety",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness 3: no counterargument or conclusion — 'that's basically it' is abrupt.",
                evidence: "That's basically it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Weaknesses: vague thesis, no evidence, no counterargument/conclusion. Fix with structure and support.",
            commonErrors: [
              "Identifying only delivery issues — structure is also weak.",
            ],
          },
        },
        {
          id: "ela8-u4-presentation-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENTEROMPT,
          stem: "Write a presentation outline for 'Should phones be allowed in class?' Include hook, thesis, 2 reasons with evidence, counterargument, and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Presentation outlining",
                statement: "Structure for effective persuasion.",
              },
              {
                kind: "skill",
                name: "Counterargument",
                statement: "Acknowledge opposition.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Hook: '94% of teens have smartphones — they're already part of daily life.'",
                evidence: "Should phones be allowed in class?",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Thesis: 'Phones should be allowed for educational use because they provide research access and emergency contact.'",
                evidence: "arguing whether phones should be allowed",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reasons + evidence: 'Studies show phones improve research access; they enable emergency communication.'",
                evidence: "Use at least one visual aid",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument + conclusion: 'Some say phones distract — but structured use with teacher guidance maximizes benefits.'",
                evidence: "acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Hook (94% have phones) → Thesis (allow for educational use) → Reasons (research access, emergencies) + evidence → Counterargument ('distraction' → 'structured use') → Conclusion (phones enhance learning when guided).",
            commonErrors: [
              "Outline without counterargument — prompt requires acknowledging opposition.",
            ],
          },
        },
        {
          id: "ela8-u4-presentation-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENTEROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name three delivery skills for effective presentations.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why eye contact matters.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery skills",
                statement: "Engage audience effectively.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Eye contact, pace, volume (or body language, voice variety).",
                evidence: "Speak clearly, maintain eye contact",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Eye contact connects speaker to audience — shows confidence and engagement.",
                evidence: "maintain eye contact",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Eye contact, pace, volume. (b) Eye contact connects speaker to audience — shows confidence and engagement.",
            commonErrors: ["Listing skills without explaining their function."],
          },
        },
      ],
    },
    {
      id: "ela8-u4-presentation2",
      title: "Digital media and multimedia presentations",
      skill: "Evaluate and use digital media effectively in presentations.",
      lesson: {
        sections: [
          {
            heading: "Digital media types",
            body: "Presentations can use: **slides** (PowerPoint/Google Slides), **videos** (short clips), **podcasts/audio**, **interactive polls**, **infographics**. Each serves different purposes — slides for structured points, videos for demonstrations, polls for audience engagement. Choose media that enhances, not distracts from, your message.",
          },
          {
            heading: "Evaluating digital content",
            body: "When using digital media, ask: Is it **relevant** to my topic? Is it **accurate** and credible? Is it **accessible** (can all audience members see/hear it)? Does it **support** my argument or just decorate? Poor media choices undermine credibility — a funny video that doesn't relate to your topic hurts more than helps.",
          },
        ],
        keyFormulas: [
          {
            name: "Media types",
            statement: "Slides, videos, podcasts, polls, infographics.",
          },
          {
            name: "Media evaluation",
            statement: "Relevant, accurate, accessible, supportive.",
          },
          {
            name: "Enhance don't distract",
            statement: "Media should support message, not replace it.",
          },
        ],
        workedExample: {
          problem: "Why might a funny but unrelated video hurt a presentation?",
          solution:
            "It distracts from the topic and undermines credibility — audience remembers the entertainment, not your argument. Media must be relevant and supportive.",
        },
      },
      questions: [
        {
          id: "ela8-u4-presentation2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENTEROMPT,
          stem: "What makes digital media effective in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It replaces the speaker" },
              { id: "b", text: "It supports and enhances the message" },
              { id: "c", text: "It's as complicated as possible" },
              { id: "d", text: "It's flashy and entertaining" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Effective media",
                statement: "Supports message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective media enhances understanding — not just entertainment or decoration.",
                evidence: "Use at least one visual aid",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. It supports and enhances the message.",
            commonErrors: ["Choosing (a) — entertainment isn't effectiveness."],
          },
        },
        {
          id: "ela8-u4-presentation2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENTEROMPT,
          stem: "Evaluate this visual aid choice: a 5-minute comedy video for a presentation on climate change. Explain why it might not work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media evaluation",
                statement: "Relevance and support matter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relevance: comedy video doesn't relate to climate change topic.",
                evidence: "Should Phones Be Allowed in Class?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Support: entertainment doesn't support argument — distracts from evidence.",
                evidence: "Use at least one visual aid",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Better choice: infographic showing climate data or short documentary clip.",
                evidence: "poster, or prop",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Comedy video is irrelevant and distracting — doesn't support climate change argument. Better: infographic or documentary clip.",
            commonErrors: [
              "Thinking entertainment = engagement — must be relevant engagement.",
            ],
          },
        },
        {
          id: "ela8-u4-presentation2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENTEROMPT,
          stem: "Design a visual aid for your phones presentation and explain how it supports your argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual design",
                statement: "Media should clarify and support.",
              },
              {
                kind: "skill",
                name: "Argument support",
                statement: "Visuals reinforce evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Design: infographic showing '94% of teens have phones' + 'X% use for research' — data visualization.",
                evidence: "at least one visual aid",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Supports thesis: visual shows phones are ubiquitous and useful — reinforces 'allow for educational use'.",
                evidence: "arguing whether phones should be allowed",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Minimal text, clear data — audience can grasp key points quickly.",
                evidence: "slide, poster, or prop",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The aid enhances understanding without replacing verbal explanation.",
                evidence: "Speak clearly",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: infographic showing phone ownership statistics + educational use data — supports 'allow for educational use' thesis with visual evidence.",
            commonErrors: [
              "Designing visual that's just decorative — must support argument.",
            ],
          },
        },
        {
          id: "ela8-u4-presentation2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENTEROMPT,
          parts: [
            {
              label: "a",
              prompt: "Name three criteria for effective visual aids.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why 'relevance' matters most.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media criteria",
                statement: "Relevant, accurate, supportive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Relevant, accurate, accessible (or supportive, clear).",
                evidence: "Use at least one visual aid",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Irrelevant media distracts and undermines credibility — must connect to topic and argument.",
                evidence: "visual aid",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Relevant, accurate, accessible. (b) Irrelevant media distracts and undermines credibility — must connect to topic.",
            commonErrors: ["Listing criteria without explaining priority."],
          },
        },
      ],
    },
  ],
};
