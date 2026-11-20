module.exports = [
  {
    file: "lesson-1-7.ts", exportName: "lesson17",
    lesson: {
      id: "cipg-u1-lesson-1-7", code: "1-7",
      title: "Stage 3 — Checking Sources and Facts",
      goal: "I CAN check if information is true by looking at sources carefully.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
      stage: 3,
      vocabulary: [
        { term: "Reliable", definition: "Trustworthy — likely to be true." },
        { term: "Check", definition: "To test if something is true." },
        { term: "Author", definition: "The person or group who made the information." },
        { term: "Date", definition: "When the information was made." },
        { term: "Bias", definition: "When information favours one side unfairly." },
        { term: "Verify", definition: "To confirm information is correct." },
      ],
      concept: {
        id: "cipg-u1-s3-sources", title: "Evaluating sources",
        skill: "Judge whether information is reliable at Stage 3 level.",
        sections: [
          { heading: "Is it true?", body: "Not everything you read or hear is true. Check sources: Who made it? Are they an expert? When was it written? Does it agree with other sources? A reliable source is usually by a knowledgeable author and recent." },
          { heading: "Red flags", body: "Be careful with: ALL CAPS headlines, no author, old dates, one-sided opinions, or claims that sound too amazing. Compare with another source before believing something." },
        ],
        keyFormulas: [
          { name: "Reliable source", statement: "expert author, recent, checkable" },
          { name: "Check", statement: "who, when, does it match other sources" },
        ],
        workedExample: {
          problem: "Two sources say different things about a celebrity. How do you decide?",
          solution: "Check who wrote each — a news site vs a gossip blog. Look at dates and evidence. Trust the more reliable, recent source with evidence.",
        },
        questions: [
          {
            id: "cipg-u1-vf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes a source reliable?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Written by a knowledgeable author and recent" }, { id: "b", text: "Has exciting pictures" }, { id: "c", text: "Is very short" }, { id: "d", text: "Says what you want to hear" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reliable", statement: "Trustworthy source." }],
              steps: [{ reasoning: "Expert author + recent + checkable = reliable.", marks: 1, markCode: "M" }],
              finalAnswer: "Expert, recent, checkable",
            },
          },
          {
            id: "cipg-u1-vf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two things to check before believing information.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Source checking", statement: "Author, date, agreement." }],
              steps: [
                { reasoning: "e.g. who wrote it / when.", marks: 1, markCode: "M" },
                { reasoning: "e.g. does another source agree.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. author + date/agreement",
            },
          },
          {
            id: "cipg-u1-vf-q3", difficulty: "core", totalMarks: 3,
            stem: "A website says 'Scientists prove chocolate cures cancer!' What is suspicious? How would you check?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Red flags", statement: "Amazing claims need checking." }],
              steps: [
                { reasoning: "Too-good claim; check for evidence/source.", marks: 1, markCode: "M" },
                { reasoning: "Look for named scientists, publication, other sources.", marks: 1, markCode: "M" },
                { reasoning: "Likely false/exaggerated — verify elsewhere.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Suspicious claim; verify with experts",
            },
          },
          {
            id: "cipg-u1-vf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define reliable, author, date, bias, verify. (b) List three source-checking questions. (c) Why do dates matter? (d) What is bias? (e) Two websites disagree — how decide? (f) Why might a source be out of date? (g) What are 'red flags' in information? (h) Design a source-evaluation checklist.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Evaluation", statement: "Reliability, bias, verification." }],
              steps: [
                { reasoning: "(a) All five definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Three valid checks: who/when/evidence.", marks: 1, markCode: "M" },
                { reasoning: "(c) Old info may be wrong/outdated.", marks: 1, markCode: "M" },
                { reasoning: "(d) Unfair favouring of one side.", marks: 1, markCode: "M" },
                { reasoning: "(e) Compare reliability, evidence, dates.", marks: 1, markCode: "M" },
                { reasoning: "(f) Knowledge changes over time.", marks: 1, markCode: "M" },
                { reasoning: "(g) Warning signs of unreliable info.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid checklist.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Source evaluation: reliability, bias, dates.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-vf-notes", title: "Checking sources — notes",
      summary: "Reliable = expert author, recent, evidence. Check who/when; beware bias and amazing claims.",
      sections: [
        { heading: "Key idea", body: "Not all information is true — verify before believing." },
        { heading: "Red flags", body: "No author, old date, one-sided, too-amazing claims." },
      ],
    },
  },
  {
    file: "lesson-1-8.ts", exportName: "lesson18",
    lesson: {
      id: "cipg-u1-lesson-1-8", code: "1-8",
      title: "Stage 3 — Seeing Different Viewpoints",
      goal: "I CAN recognise that people see things differently and identify different perspectives.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: analysis", "Cambridge Primary Global Perspectives 0838 strand: Analysis"],
      stage: 3,
      vocabulary: [
        { term: "Perspective", definition: "The way someone sees or thinks about something." },
        { term: "Viewpoint", definition: "An opinion or way of looking at an issue." },
        { term: "Different", definition: "Not the same — varied." },
        { term: "Agree", definition: "To have the same opinion." },
        { term: "Disagree", definition: "To have a different opinion." },
        { term: "Consider", definition: "To think about carefully." },
      ],
      concept: {
        id: "cipg-u1-s3-persp", title: "Different perspectives",
        skill: "Identify and respect different viewpoints at Stage 3 level.",
        sections: [
          { heading: "Different ways of seeing", body: "People see the same thing differently — a rainy day might be 'fun puddles' to one person and 'no football' to another. Your background, experiences and feelings shape your perspective." },
          { heading: "Respecting viewpoints", body: "Just because someone disagrees doesn't mean they're wrong. Consider their reasons before judging. Looking at issues from different perspectives helps you understand the world better and make fairer decisions." },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "how someone sees/thinks about something" },
          { name: "Consider", statement: "think about other viewpoints before judging" },
        ],
        workedExample: {
          problem: "Your friend loves vegetables; you hate them. How might you both see the same dinner differently?",
          solution: "Your friend sees tasty healthy food; you see boring vegetables. Same dinner, different perspectives based on tastes and experiences.",
        },
        questions: [
          {
            id: "cipg-u1-vp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a perspective?",
            response: { type: "mcq", choices: [
              { id: "a", text: "The way someone sees or thinks about something" }, { id: "b", text: "A type of camera" }, { id: "c", text: "A math formula" }, { id: "d", text: "A game score" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Perspective", statement: "Personal viewpoint." }],
              steps: [{ reasoning: "Perspective = individual way of seeing.", marks: 1, markCode: "M" }],
              finalAnswer: "Personal way of seeing",
            },
          },
          {
            id: "cipg-u1-vp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Give an example where two people might disagree about the same thing.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Different viewpoints", statement: "Same thing, different views." }],
              steps: [
                { reasoning: "Valid example: homework (fun vs boring).", marks: 1, markCode: "M" },
                { reasoning: "Explains different perspectives.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. homework views differ",
            },
          },
          {
            id: "cipg-u1-vp-q3", difficulty: "core", totalMarks: 3,
            stem: "Why might someone's perspective differ from yours? Give two reasons.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Perspective causes", statement: "Background and experience." }],
              steps: [
                { reasoning: "Different experiences/backgrounds.", marks: 1, markCode: "M" },
                { reasoning: "Different cultures, ages, beliefs.", marks: 1, markCode: "M" },
                { reasoning: "Shapes how they see things.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Experience/culture differences",
            },
          },
          {
            id: "cipg-u1-vp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define perspective and viewpoint. (b) Give an example of two perspectives on school uniforms. (c) Why do people disagree? (d) What should you do when someone disagrees with you? (e) How does considering other views help? (f) Can two people both be partly right? (g) Describe a time perspectives differed. (h) Why is respect important in discussions?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Perspectives", statement: "Different views, respect." }],
              steps: [
                { reasoning: "(a) Both definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) For: equality; against: self-expression.", marks: 1, markCode: "M" },
                { reasoning: "(c) Different backgrounds/experiences.", marks: 1, markCode: "M" },
                { reasoning: "(d) Listen to their reasons first.", marks: 1, markCode: "M" },
                { reasoning: "(e) Understand complexity, find common ground.", marks: 1, markCode: "M" },
                { reasoning: "(f) Yes — perspectives can overlap.", marks: 1, markCode: "M" },
                { reasoning: "(g) Personal example.", marks: 1, markCode: "M" },
                { reasoning: "(h) Enables fair discussion and learning.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Perspectives, disagreement, respect, understanding.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-vp-notes", title: "Perspectives — notes",
      summary: "People see things differently based on experience/background. Consider other views before judging.",
      sections: [
        { heading: "Key idea", body: "Disagreement often comes from different perspectives, not wrongness." },
        { heading: "Respect", body: "Listen first, then share your view." },
      ],
    },
  },
  {
    file: "lesson-1-9.ts", exportName: "lesson19",
    lesson: {
      id: "cipg-u1-lesson-1-9", code: "1-9",
      title: "Stage 3 — Reflecting on What You Did",
      goal: "I CAN think about what I learned or did and describe how I could do better next time.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: reflection", "Cambridge Primary Global Perspectives 0838 strand: Reflection"],
      stage: 3,
      vocabulary: [
        { term: "Reflect", definition: "To think carefully about something you did." },
        { term: "Learn", definition: "To gain knowledge or skill." },
        { term: "Improve", definition: "To make something better." },
        { term: "Mistake", definition: "Something done wrong." },
        { term: "Success", definition: "Something done well." },
        { term: "Next time", definition: "What you would do differently later." },
      ],
      concept: {
        id: "cipg-u1-s3-reflect", title: "Reflection",
        skill: "Review actions, identify learnings and improvements at Stage 3 level.",
        sections: [
          { heading: "What is reflection?", body: "Reflection means thinking back on what you did — what went well, what didn't, and what you learned. It's how you grow: 'I presented well but forgot to look at the audience.'" },
          { heading: "Improving", body: "Reflection leads to improvement. Ask: What worked? What didn't? What will I do next time? Honest reflection helps you get better at anything — sports, schoolwork, teamwork." },
        ],
        keyFormulas: [
          { name: "Reflect", statement: "think back on what you did" },
          { name: "Improve", statement: "learn from experience for next time" },
        ],
        workedExample: {
          problem: "You gave a class presentation but spoke too quietly. Reflect and plan improvement.",
          solution: "What happened: audience couldn't hear. Next time: practise projecting voice, check volume before starting.",
        },
        questions: [
          {
            id: "cipg-u1-rf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does it mean to reflect?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Think carefully about something you did" }, { id: "b", text: "Forget what happened" }, { id: "c", text: "Ignore mistakes" }, { id: "d", text: "Blame others" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Reflect", statement: "Think back on actions." }],
              steps: [{ reasoning: "Reflection = reviewing your experience.", marks: 1, markCode: "M" }],
              finalAnswer: "Think back on what you did",
            },
          },
          {
            id: "cipg-u1-rf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two questions you could ask when reflecting on group work.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Reflection questions", statement: "What worked, what didn't." }],
              steps: [
                { reasoning: "e.g. what went well / what didn't.", marks: 1, markCode: "M" },
                { reasoning: "e.g. what will I do next time.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. what worked + next time",
            },
          },
          {
            id: "cipg-u1-rf-q3", difficulty: "core", totalMarks: 3,
            stem: "You lost a football match. Reflect: what might you do differently next time?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Reflection", statement: "Learn from experience." }],
              steps: [
                { reasoning: "Honest assessment of what happened.", marks: 1, markCode: "M" },
                { reasoning: "Specific improvement plan.", marks: 1, markCode: "M" },
                { reasoning: "Links reflection to future action.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Assessment + improvement plan",
            },
          },
          {
            id: "cipg-u1-rf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define reflect, improve, mistake, next time. (b) Why is reflection important? (c) Reflect on a recent success. (d) Reflect on a recent mistake. (e) What three questions guide reflection? (f) How does reflection help learning? (g) Why is honest reflection hard? (h) Design a reflection journal format.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Reflection", statement: "Review, learn, improve." }],
              steps: [
                { reasoning: "(a) All four definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Turns experience into learning.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid success reflection.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid mistake reflection.", marks: 1, markCode: "M" },
                { reasoning: "(e) What worked/what didn't/next time.", marks: 1, markCode: "M" },
                { reasoning: "(f) Identifies patterns, builds skills.", marks: 1, markCode: "M" },
                { reasoning: "(g) Requires honesty about weaknesses.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid journal format.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reflection, learning, improvement.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-rf-notes", title: "Reflection — notes",
      summary: "Reflect = think back on what you did. Ask what worked, what didn't, what next time.",
      sections: [
        { heading: "Key idea", body: "Reflection turns experience into improvement." },
        { heading: "Questions", body: "What went well? What didn't? What next time?" },
      ],
    },
  },
  {
    file: "lesson-1-10.ts", exportName: "lesson110",
    lesson: {
      id: "cipg-u1-lesson-1-10", code: "1-10",
      title: "Stage 3 — Presenting Your Findings",
      goal: "I CAN present research findings clearly using words and visuals.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 3: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
      stage: 3,
      vocabulary: [
        { term: "Present", definition: "To show and explain your findings to an audience." },
        { term: "Visual", definition: "A picture, chart or diagram that helps explain." },
        { term: "Structure", definition: "An organised way of presenting — beginning, middle, end." },
        { term: "Audience", definition: "The people listening to your presentation." },
        { term: "Key point", definition: "The most important thing to say." },
        { term: "Summary", definition: "A short version of the main points." },
      ],
      concept: {
        id: "cipg-u1-s3-present", title: "Presenting findings",
        skill: "Organise and deliver a clear presentation at Stage 3 level.",
        sections: [
          { heading: "Structuring a presentation", body: "Good presentations have structure: introduction (what you researched), main points (your findings), conclusion (what you learned). Keep it organised so the audience can follow." },
          { heading: "Using visuals", body: "Pictures, charts and diagrams help audiences understand. Choose visuals that match your points — a chart for data, a diagram for processes. Practise speaking clearly and looking at your audience." },
        ],
        keyFormulas: [
          { name: "Structure", statement: "intro → main points → conclusion" },
          { name: "Visual", statement: "picture/chart that supports your point" },
        ],
        workedExample: {
          problem: "You researched recycling. Plan a 3-part presentation structure.",
          solution: "Intro: why recycling matters. Main: types of recycling + how it works (with chart). Conclusion: what we can do.",
        },
        questions: [
          {
            id: "cipg-u1-pr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a presentation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Showing and explaining findings to an audience" }, { id: "b", text: "A type of game" }, { id: "c", text: "A computer program" }, { id: "d", text: "A book" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Present", statement: "Show findings to audience." }],
              steps: [{ reasoning: "Presentation = organised sharing to listeners.", marks: 1, markCode: "M" }],
              finalAnswer: "Show findings to audience",
            },
          },
          {
            id: "cipg-u1-pr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the three parts of a good presentation structure.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Structure", statement: "Intro, main, conclusion." }],
              steps: [
                { reasoning: "Introduction, main points, conclusion.", marks: 1, markCode: "M" },
                { reasoning: "In correct order.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Intro → main → conclusion",
            },
          },
          {
            id: "cipg-u1-pr-q3", difficulty: "core", totalMarks: 3,
            stem: "Why use visuals in a presentation? Give an example of a visual for a topic about water.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Visuals", statement: "Support understanding." }],
              steps: [
                { reasoning: "Visuals make points clearer/easier to remember.", marks: 1, markCode: "M" },
                { reasoning: "e.g. water cycle diagram or chart of usage.", marks: 1, markCode: "M" },
                { reasoning: "Matches visual to content.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Clarity; e.g. cycle diagram",
            },
          },
          {
            id: "cipg-u1-pr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define present, visual, structure, audience, key point, summary. (b) Plan a presentation structure for 'Our local environment'. (c) Why organise before presenting? (d) What makes a good visual? (e) How do you engage your audience? (f) What if you forget something? (g) How is a summary different from main points? (h) Rehearse: describe your delivery plan.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Presenting", statement: "Structure, visuals, delivery." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid 3-part structure.", marks: 1, markCode: "M" },
                { reasoning: "(c) Audience follows; you stay organised.", marks: 1, markCode: "M" },
                { reasoning: "(d) Clear, relevant, simple.", marks: 1, markCode: "M" },
                { reasoning: "(e) Eye contact, questions, enthusiasm.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pause, continue, don't apologise excessively.", marks: 1, markCode: "M" },
                { reasoning: "(g) Summary=short version; main=details.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid delivery plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Presentation structure, visuals, delivery.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-pr-notes", title: "Presenting — notes",
      summary: "Structure: intro → main → conclusion. Use clear visuals; engage audience; practise delivery.",
      sections: [
        { heading: "Key idea", body: "Organisation makes findings easy to understand." },
        { heading: "Visuals", body: "Match images/charts to your points." },
      ],
    },
  },
];
