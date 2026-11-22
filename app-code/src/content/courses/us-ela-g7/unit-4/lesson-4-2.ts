import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const PRESENTBRIEF: TextExtract = {
  title: "Presentation Brief: The Lost Dog",
  author: "Written for Akademik Space",
  text: "Task: Give a two-minute presentation to the class about what to do if you find a lost dog.\n\nSuggested structure:\n1. Opening hook — describe a moment when you saw a lost dog, or ask the audience a question.\n2. Main point 1 — stay calm and check the collar for ID tags.\n3. Main point 2 — if there is no tag, take the dog to a nearby vet or call animal control.\n4. Main point 3 — never chase the dog or give it food without checking with an adult.\n5. Closing — remind the audience that one calm person can keep a scared animal safe.\n\nRemember: speak slowly, look at your audience, and end by answering questions.",
};

const DIGITALNOTE: TextExtract = {
  title: "Using Digital Tools in Presentations",
  author: "Written for Akademik Space",
  text: "Digital tools can make a presentation clearer, but only if they serve the message.\n\nSlides should support your words, not replace them. A good slide has one idea and at most six words. If you find yourself reading the slide aloud, the slide has too much text — cut it down and speak the details instead.\n\nImages help when they show something words cannot — a photo of a real lost dog makes the audience feel the stakes. Clip art and decorative backgrounds usually distract.\n\nBefore presenting, test your file on the actual computer you will use. Check that the volume works, that videos play, and that you have a backup plan — a printed copy of your notes — in case the technology fails.",
};

export const lesson42: Lesson = {
  id: "ela7-u4-lesson-4-2",
  code: "4-2",
  title: "Presenting Information and Using Digital Media",
  goal: "I CAN organize a presentation, use digital tools effectively, and adapt my delivery to audience and purpose.",
  standards: ["SL.7.4", "SL.7.5", "SL.7.6"],
  vocabulary: [
    {
      term: "Presentation",
      definition:
        "A structured talk designed to inform, persuade, or explain to an audience.",
    },
    {
      term: "Hook",
      definition: "An opening that grabs the audience's attention.",
    },
    {
      term: "Visual aid",
      definition:
        "An image, slide, or object that supports the spoken message.",
    },
    {
      term: "Audience awareness",
      definition: "Adjusting language and detail based on who is listening.",
    },
    {
      term: "Pacing",
      definition:
        "The speed and rhythm of delivery — speaking slowly enough to be understood.",
    },
    {
      term: "Digital media",
      definition:
        "Electronic tools such as slides, videos, and interactive displays.",
    },
  ],
  concepts: [
    {
      id: "ela7-u4-present",
      title: "Structuring a presentation",
      skill:
        "Organize content into a clear opening, body, and close that fits the audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "The shape of a talk",
            body: "A strong presentation has three parts. The **opening** grabs attention — a question, a story, or a surprising fact. The **body** delivers two or three main points, each supported by an example. The **closing** sums up and may ask for action or answer questions. Two minutes sounds long, but three clear points fit comfortably if each gets about thirty seconds.",
          },
          {
            heading: "Matching audience and purpose",
            body: "Before speaking, ask: who is listening and what do they need? A presentation to younger students uses simpler words and more concrete examples; one to adults can use more detail. The purpose decides the ending — an informative talk ends with a summary; a persuasive talk ends with a call to action.",
          },
        ],
        keyFormulas: [
          {
            name: "Presentation structure",
            statement:
              "Hook → main points with examples → closing or call to action.",
          },
          {
            name: "Rule of three",
            statement:
              "Two or three main points are easiest for an audience to remember.",
          },
          {
            name: "Audience check",
            statement: "Adjust vocabulary and examples to who is listening.",
          },
        ],
        workedExample: {
          problem:
            "Why does the lost-dog brief start with 'a moment when you saw a lost dog' or a question?",
          solution:
            "It is a hook — an opening designed to grab attention. The audience decides within seconds whether to listen, so the first line must give them a reason to care. A question ('What would you do if you found a lost dog?') makes them think about themselves, while a story makes the topic concrete before the instructions begin.",
        },
      },
      questions: [
        {
          id: "ela7-u4-present-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PRESENTBRIEF,
          stem: "What is the purpose of the 'hook' in the suggested structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To grab the audience's attention at the start",
              },
              { id: "b", text: "To answer audience questions" },
              { id: "c", text: "To list all the main points quickly" },
              { id: "d", text: "To prove the speaker is an expert" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hook",
                statement: "Attention-grabbing opening.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The brief defines the hook as 'describe a moment... or ask the audience a question' — both are attention-getting devices.",
                evidence:
                  "describe a moment when you saw a lost dog, or ask the audience a question",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The hook grabs attention so the audience wants to keep listening.",
            commonErrors: [
              "Confusing the hook with the closing or the main points.",
            ],
          },
        },
        {
          id: "ela7-u4-present-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PRESENTBRIEF,
          stem: "The brief lists three main points about finding a lost dog. Explain why limiting the talk to three points helps the audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Rule of three",
                statement: "Few main points are easier to remember.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three points fit the two-minute limit — each gets enough time to be explained clearly.",
                evidence: "Give a two-minute presentation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Audiences remember a small number of ideas; five or six points blur together.",
                evidence: "stay calm and check the collar for ID tags",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each point has a clear action the listener can take — check tags, go to a vet, don't chase.",
                evidence:
                  "never chase the dog or give it food without checking with an adult",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Three points fit the time limit and are few enough for the audience to remember and act on.",
            commonErrors: [
              "Saying three is 'the rule' without explaining the memory benefit.",
            ],
          },
        },
        {
          id: "ela7-u4-present-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PRESENTBRIEF,
          stem: "You are giving the lost-dog presentation to a class of first-graders instead of your classmates. Using the brief, explain two changes you would make and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience awareness",
                statement:
                  "Adapt language, examples, and structure to who is listening.",
              },
              {
                kind: "skill",
                name: "Purposeful change",
                statement:
                  "Every adaptation should connect to what the younger audience needs.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Simplify vocabulary — 'animal control' and 'ID tags' may be unknown; use 'call the animal shelter' or 'check the tag on its collar'.",
                evidence: "check the collar for ID tags",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Use concrete, familiar examples — first-graders understand 'ask a grown-up' better than 'check with an adult' phrased formally.",
                evidence: "without checking with an adult",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Slow the pacing and add a picture — younger audiences need visuals and repetition of the three key actions.",
                evidence: "speak slowly, look at your audience",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Keep the hook simple and physical — a question like 'Have you ever seen a dog without an owner?' works better than a complex scenario.",
                evidence: "ask the audience a question",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "For first-graders I would simplify the vocabulary ('call the animal shelter' instead of 'animal control'), use pictures of real dogs, slow down, and repeat the three actions — because younger listeners need concrete words, visuals, and simpler instructions.",
            commonErrors: [
              "Suggesting changes that remove important safety information.",
              "Ignoring the brief's advice to speak slowly and simply.",
            ],
          },
        },
        {
          id: "ela7-u4-present-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PRESENTBRIEF,
          parts: [
            {
              label: "a",
              prompt: "Identify the closing strategy suggested in the brief.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how that closing fits an informative presentation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Closing structure",
                statement: "The ending should match the purpose of the talk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The closing reminds the audience of the main message and invites questions.",
                evidence:
                  "remind the audience that one calm person can keep a scared animal safe",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "An informative talk aims to teach, so ending with the key takeaway reinforces what listeners should remember; questions let them check understanding.",
                evidence: "end by answering questions",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) A reminder of the main message plus an invitation for questions. (b) It reinforces the lesson learned and checks that the audience understood — both fitting for an informative talk.",
            commonErrors: [
              "Saying the closing should ask the audience to donate money — that would fit a persuasive talk, not this one.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u4-digital",
      title: "Using digital media effectively",
      skill:
        "Choose and use slides, images, and technology so they support rather than distract from the message.",
      lesson: {
        sections: [
          {
            heading: "Slides that help, not hurt",
            body: "Digital tools amplify whatever you do — good or bad. A slide with one clear idea helps the audience follow; a slide with a paragraph of text tempts you to read aloud and tempts them to stop listening. The test: cover the slide with your hand — if your spoken words still make sense, the slide is fine; if not, the slide is doing the talking instead of you.",
          },
          {
            heading: "Backup plans and testing",
            body: "Technology fails at the worst times. Always test your file on the actual computer beforehand, check volume and video playback, and bring a low-tech backup — printed notes or a saved PDF. If the projector dies, your presentation should still work because you know your material.",
          },
        ],
        keyFormulas: [
          {
            name: "Slide rule",
            statement:
              "One idea per slide, few words — the slide supports, the speaker delivers.",
          },
          {
            name: "The hand test",
            statement:
              "Cover the slide; if your words still make sense, the slide is working.",
          },
          {
            name: "Backup rule",
            statement:
              "Always have a non-digital backup plan for your presentation.",
          },
        ],
        workedExample: {
          problem:
            "A student puts a full paragraph of text on each slide and reads it aloud. What two problems does this create?",
          solution:
            "First, the audience reads faster than the speaker talks, so they finish the slide and tune out. Second, the speaker is no longer presenting — they are reading, which is boring and suggests they did not prepare. The fix: put only key words on slides and say the details aloud.",
        },
      },
      questions: [
        {
          id: "ela7-u4-digital-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DIGITALNOTE,
          stem: "According to the note, what is wrong with a slide that has a paragraph of text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses too many colors" },
              { id: "b", text: "It is too short" },
              { id: "c", text: "It costs too much to make" },
              {
                id: "d",
                text: "It tempts the speaker to read instead of present",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Slide design",
                statement: "Slides should support, not replace, the speaker.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The note says too much text tempts you to read the slide aloud — the speaker stops presenting and starts reading.",
                evidence:
                  "If you find yourself reading the slide aloud, the slide has too much text",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Too much text turns the presentation into reading.",
            commonErrors: [
              "Choosing (a) — color is never mentioned as the problem.",
            ],
          },
        },
        {
          id: "ela7-u4-digital-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DIGITALNOTE,
          stem: "Explain the 'hand test' for checking whether a slide is helping or hurting a presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "The hand test",
                statement:
                  "A quick check that the speaker, not the slide, carries the message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cover the slide with your hand and continue speaking — if your words still make sense, the slide is supporting you.",
                evidence: "cover the slide with your hand",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "If the presentation falls apart without the slide, the slide contains information you should be saying yourself.",
                evidence: "the slide has too much text",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The test reminds speakers that they, not the technology, are the presentation.",
                evidence: "the slide supports, the speaker delivers",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Cover the slide and keep talking: if your words still work, the slide supports you; if not, the slide is carrying the message instead of you.",
            commonErrors: [
              "Describing a test that involves the audience — the note's test is done by the speaker alone.",
            ],
          },
        },
        {
          id: "ela7-u4-digital-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DIGITALNOTE,
          stem: "A student plans to play a two-minute video during a three-minute presentation about endangered animals. Using the note, evaluate this plan and suggest two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media judgment",
                statement:
                  "Digital tools should serve the message, not replace the speaker.",
              },
              {
                kind: "skill",
                name: "Critical evaluation",
                statement:
                  "Identify why a plan fails and offer specific fixes grounded in the text.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "A two-minute video in a three-minute talk leaves almost no time for the speaker — the audience came to hear the student, not a film.",
                evidence:
                  "Digital tools can make a presentation clearer, but only if they serve the message",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The video may be engaging, but if it contains the main content, the speaker becomes a projectionist.",
                evidence: "the slide supports, the speaker delivers",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Improvement 1: shorten the clip to 20-30 seconds as a hook or example, then explain the key ideas in your own words.",
                evidence: "Images help when they show something words cannot",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Improvement 2: test the video on the actual computer beforehand and have printed notes as a backup.",
                evidence: "test your file on the actual computer you will use",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The plan lets the video do the presenting instead of the student. Better: use a short 20-30 second clip as an example, explain the main points yourself, and test the file beforehand with printed notes as backup.",
            commonErrors: [
              "Saying the video should be banned entirely — the note says tools are fine when they serve the message.",
            ],
          },
        },
        {
          id: "ela7-u4-digital-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DIGITALNOTE,
          parts: [
            {
              label: "a",
              prompt: "List two backup steps the note recommends.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why a backup matters even for a confident speaker.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contingency planning",
                statement: "Prepare for technology failure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Test the file on the actual computer beforehand; bring printed notes as a backup.",
                evidence: "Check that the volume works, that videos play",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Technology can fail unexpectedly — a dead projector or corrupt file shouldn't derail a prepared speaker.",
                evidence:
                  "If the projector dies, your presentation should still work",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Test on the actual computer; bring printed notes. (b) Equipment fails without warning, so a non-digital backup protects the presentation.",
            commonErrors: [
              "Listing 'buy better equipment' — the note focuses on preparation, not hardware.",
            ],
          },
        },
      ],
    },
  ],
};
