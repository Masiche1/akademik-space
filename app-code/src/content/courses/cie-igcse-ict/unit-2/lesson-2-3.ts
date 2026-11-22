import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cieict-u2-lesson-2-3",
  code: "2-3",
  title: "Presentation Design",
  goal: "I CAN create effective presentations using slide software and multimedia elements.",
  standards: [
    "Cambridge IGCSE ICT 0417: presentations",
    "0417 section: presentation software",
  ],

  vocabulary: [
    { term: "Slide", definition: "Single screen in a presentation." },
    { term: "Transition", definition: "Effect moving between slides." },
    { term: "Animation", definition: "Movement of elements within a slide." },
    { term: "Master slide", definition: "Template applied to all slides." },
    {
      term: "Speaker notes",
      definition: "Hidden text for presenter reminders.",
    },
    { term: "Audience", definition: "People viewing the presentation." },
  ],
  concepts: [
    {
      id: "cieict-u2-s3-pres",
      title: "Presentation design",
      skill: "Create effective presentations at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Structure and design",
            body: "Effective presentations: clear structure (intro→content→conclusion), consistent design via master slides, minimal text per slide, visual aids (images, charts), appropriate transitions/animations.",
          },
          {
            heading: "Delivery",
            body: "Speaker notes help presenter; rehearse timing; engage audience with questions; adapt to audience needs; handle technical issues gracefully.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "intro→content→conclusion" },
          { name: "Master slide", statement: "consistent design" },
          { name: "Minimal text", statement: "visuals > walls of text" },
        ],
        workedExample: {
          problem: "Design a 10-slide presentation on 'climate change'.",
          solution:
            "Slide 1: title; 2-3: problem; 4-6: causes/effects; 7-8: solutions; 9: data chart; 10: conclusion+Q&A.",
        },
      },
      questions: [
        {
          id: "cieict-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a master slide?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Template applied to all slides",
              },
              {
                id: "b",
                text: "A network device",
              },
              {
                id: "c",
                text: "A type of animation",
              },
              {
                id: "d",
                text: "The first slide",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Master slide",
                statement: "Consistent template.",
              },
            ],
            steps: [
              {
                reasoning: "Master slide = design applied to all.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Template for all slides",
          },
        },
        {
          id: "cieict-u2-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a transition and an animation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition vs animation",
                statement: "Between vs within slides.",
              },
            ],
            steps: [
              {
                reasoning: "Transition=between slides; animation=within slide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples for each.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Between vs within",
          },
        },
        {
          id: "cieict-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should presentations have minimal text per slide? What should replace it?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Slide design",
                statement: "Visuals over text.",
              },
            ],
            steps: [
              {
                reasoning: "Audiences can't read and listen simultaneously.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Replace with images, charts, keywords.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keeps audience engaged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Visuals not walls of text",
          },
        },
        {
          id: "cieict-u2-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define slide, transition, animation, master slide, speaker notes, audience. (b) What is a good presentation structure? (c) Why use master slides? (d) When use transitions/animations? (e) What are speaker notes for? (f) How do you engage an audience? (g) What makes a bad presentation? (h) Design a 5-slide pitch for a school charity event.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentations",
                statement: "Structure, design, delivery.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Intro→content→conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Consistent professional design.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Subtle emphasis, not distraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Presenter reminders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Questions, stories, visuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Walls of text, no structure, poor timing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid charity pitch outline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Effective presentation design and delivery.",
          },
        },
        {
          id: "cieict-u2-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between a slide transition and an animation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "There is no difference",
              },
              {
                id: "b",
                text: "Transitions happen between slides; animations move elements within a slide",
              },
              {
                id: "c",
                text: "Transitions are for audio; animations are for video",
              },
              {
                id: "d",
                text: "Animations only work on the first slide",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition vs animation",
                statement: "Between slides vs within a slide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transitions occur when moving between slides; animations affect elements on one slide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Between slides vs within a slide",
          },
        },
        {
          id: "cieict-u2-pr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A presentation has 12 slides and must be delivered in 10 minutes. How many seconds per slide does this allow on average?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 50,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timing",
                statement: "Total time / number of slides.",
              },
            ],
            steps: [
              {
                reasoning: "10 min = 600 s; 600 / 12 = 50 s per slide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "50 seconds",
          },
        },
        {
          id: "cieict-u2-pr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 30-slide presentation is divided evenly into 6 sections. How many slides are in each section?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure",
                statement: "Slides / sections.",
              },
            ],
            steps: [
              {
                reasoning: "30 / 6 = 5 slides per section.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5 slides",
          },
        },
        {
          id: "cieict-u2-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of speaker notes in presentation software?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They automatically create the presentation",
              },
              {
                id: "b",
                text: "They are hidden reminders shown only to the presenter",
              },
              {
                id: "c",
                text: "They replace the slides entirely",
              },
              {
                id: "d",
                text: "They are printed on the slides for the audience",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speaker notes",
                statement: "Hidden presenter reminders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Speaker notes help the presenter without appearing on audience slides.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Presenter-only reminders",
          },
        },
        {
          id: "cieict-u2-pr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should slides contain minimal text rather than long paragraphs?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Minimal text",
                statement: "Visuals > walls of text.",
              },
            ],
            steps: [
              {
                reasoning: "Audiences cannot read and listen at the same time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Key points with visuals are more engaging and memorable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Readability and audience engagement",
          },
        },
        {
          id: "cieict-u2-pr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the recommended structure for an effective presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Random order of slides",
              },
              {
                id: "b",
                text: "Introduction -> content -> conclusion",
              },
              {
                id: "c",
                text: "Content first, then introduction, then conclusion",
              },
              {
                id: "d",
                text: "Conclusion -> content -> introduction",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presentation structure",
                statement: "Intro, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear structure guides the audience through the talk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Introduction -> content -> conclusion",
          },
        },
        {
          id: "cieict-u2-pr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 20-slide presentation has charts on 20% of its slides. How many slides contain charts?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "20% of 20 = 4 slides.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4 slides",
          },
        },
        {
          id: "cieict-u2-pr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is it MOST appropriate to use animation in a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To hide information the presenter forgot to prepare",
              },
              {
                id: "b",
                text: "On every element of every slide to impress the audience",
              },
              {
                id: "c",
                text: "Only on the title slide",
              },
              {
                id: "d",
                text: "To make a key point appear or emphasise something at the right moment",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Animation use",
                statement: "Emphasise, don't distract.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Animation should direct attention to key points, not overwhelm.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Emphasise key points",
          },
        },
        {
          id: "cieict-u2-pr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does using a master slide improve a presentation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Master slide",
                statement: "Template applied to all slides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ensures consistent fonts, colours and layout across all slides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Saves time — edit once instead of every slide individually.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistency and time saving",
          },
        },
        {
          id: "cieict-u2-pr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A presentation contains 8 images, each 150 KB. What is the total size of the images in KB?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1200,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Total size",
                statement: "Number x size each.",
              },
            ],
            steps: [
              {
                reasoning: "8 x 150 = 1200 KB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1200 KB",
          },
        },
        {
          id: "cieict-u2-pr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student is presenting technical software to a group of young children. What is the BEST adaptation to make?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cancel the presentation",
              },
              {
                id: "b",
                text: "Use simple language, pictures and examples the children understand",
              },
              {
                id: "c",
                text: "Keep all technical jargon unchanged",
              },
              {
                id: "d",
                text: "Speak faster to finish sooner",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Match content and style to the audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective presenters adapt language and visuals to the audience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simplify language and use familiar examples",
          },
        },
        {
          id: "cieict-u2-pr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Plan a 5-slide presentation on 'the benefits of reading'. Give the purpose of each slide.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation planning",
                statement: "Structure with purpose per slide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slide 1: title/intro; Slide 2: hook or question to engage audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Slides 3-4: main content — key benefits with supporting visuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Slide 5: summary/conclusion and call to action or Q&A.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Intro, hook, content, conclusion structure",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-pr-notes",
      title: "Presentations — notes",
      summary:
        "Minimal text + strong visuals; master slides for consistency; structure intro→content→conclusion.",
      sections: [
        {
          heading: "Key idea",
          body: "Slides support the speaker — don't replace them.",
        },
        {
          heading: "Design",
          body: "Consistent theme, clear hierarchy, appropriate media.",
        },
      ],
    },
  ],
};
