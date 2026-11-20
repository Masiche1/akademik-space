module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson11",
    lesson: {
      id: "cipg-u1-lesson-1-1", code: "1-1",
      title: "Stage 1 — Asking Questions and Finding Information",
      goal: "I CAN ask questions about a topic and find simple information from provided sources.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: research", "Cambridge Primary Global Perspectives 0838 strand: Research"],
      stage: 1,
      vocabulary: [
        { term: "Research", definition: "Finding out information about a topic." },
        { term: "Question", definition: "Something you want to find out." },
        { term: "Source", definition: "Where information comes from — book, picture, person." },
        { term: "Topic", definition: "The subject you are finding out about." },
        { term: "Fact", definition: "Something true that can be checked." },
        { term: "Answer", definition: "What you find out from research." },
      ],
      concept: {
        id: "cipg-u1-s1-research", title: "Asking questions and finding information",
        skill: "Form simple research questions and gather information at Stage 1 level.",
        sections: [
          { heading: "Why research?", body: "Global Perspectives starts with curiosity — asking questions about the world around us. Good research begins with a clear question: 'What do pandas eat?' or 'Why is the sky blue?'" },
          { heading: "Finding information", body: "At Stage 1, sources are provided — picture books, simple texts, websites chosen by your teacher. Look at pictures, listen to words, and record what you find using simple charts or drawings." },
        ],
        keyFormulas: [
          { name: "Research question", statement: "clear question about a topic" },
          { name: "Source", statement: "where information comes from" },
        ],
        workedExample: {
          problem: "Topic: 'Our school garden'. Write one research question and name a source.",
          solution: "Question: 'What plants grow in our garden?' Source: look at the garden itself / a picture book about plants.",
        },
        questions: [
          {
            id: "cipg-u1-rq-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is research?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Finding out information about a topic" }, { id: "b", text: "Writing a story" }, { id: "c", text: "Drawing pictures" }, { id: "d", text: "Playing a game" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Research", statement: "Finding information." }],
              steps: [{ reasoning: "Research = gathering information on a topic.", marks: 1, markCode: "M" }],
              finalAnswer: "Finding information",
            },
          },
          {
            id: "cipg-u1-rq-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Write one good research question about animals.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Research questions", statement: "Clear, focused questions." }],
              steps: [
                { reasoning: "Clear question, e.g. 'What do rabbits eat?'", marks: 1, markCode: "M" },
                { reasoning: "About animals specifically.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. 'What do rabbits eat?'",
            },
          },
          {
            id: "cipg-u1-rq-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a source? Name two simple sources a Stage 1 child could use for research.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sources", statement: "Information origins." }],
              steps: [
                { reasoning: "Source = where information comes from.", marks: 1, markCode: "M" },
                { reasoning: "Two valid: picture book, provided website, teacher, picture cards.", marks: 2, markCode: "M" },
              ],
              finalAnswer: "e.g. book + picture cards",
            },
          },
          {
            id: "cipg-u1-rq-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define research. (b) What is a research question? (c) Write a research question about your school. (d) Name three sources you could use. (e) What is a fact? (f) How would you record what you find at Stage 1? (g) Why is asking questions important? (h) Design a mini-research plan: topic, question, source, recording method.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research basics", statement: "Questions, sources, recording." }],
              steps: [
                { reasoning: "(a) Finding information on a topic.", marks: 1, markCode: "M" },
                { reasoning: "(b) Clear question you want answered.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid school-related question.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three sources: book, website, person.", marks: 1, markCode: "M" },
                { reasoning: "(e) Checkable true information.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pictograms, drawings, simple charts.", marks: 1, markCode: "M" },
                { reasoning: "(g) Curiosity leads to learning.", marks: 1, markCode: "M" },
                { reasoning: "(h) Coherent mini-plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Research questions, sources, recording, planning.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-rq-notes", title: "Asking questions — notes",
      summary: "Research = asking questions + finding information from sources. Record simply: drawings, pictograms.",
      sections: [
        { heading: "Key idea", body: "Start with a clear question, then gather information." },
        { heading: "Stage 1", body: "Use provided sources; record with pictures and simple charts." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson12",
    lesson: {
      id: "cipg-u1-lesson-1-2", code: "1-2",
      title: "Stage 1 — Talking About What You Found",
      goal: "I CAN talk about information I found and share simple findings with others.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
      stage: 1,
      vocabulary: [
        { term: "Share", definition: "To tell others what you found out." },
        { term: "Finding", definition: "Something you discovered through research." },
        { term: "Explain", definition: "To tell what something means in simple words." },
        { term: "Show", definition: "To display your work or pictures." },
        { term: "Listener", definition: "The person hearing what you share." },
        { term: "Clear", definition: "Easy to understand." },
      ],
      concept: {
        id: "cipg-u1-s1-share", title: "Sharing findings",
        skill: "Communicate simple research findings clearly at Stage 1 level.",
        sections: [
          { heading: "Sharing what you found", body: "After researching, share your findings — tell friends, show pictures, draw what you learned. Use simple sentences: 'I found out that pandas eat bamboo.'" },
          { heading: "Being clear", body: "Speak slowly, face your listener, and use your pictures or objects to help. If someone asks a question, try to answer simply. Sharing helps others learn what you discovered." },
        ],
        keyFormulas: [
          { name: "Share", statement: "tell/show others your findings" },
          { name: "Clear", statement: "slow, simple, face the listener" },
        ],
        workedExample: {
          problem: "You researched frogs. Share one finding in a simple sentence.",
          solution: "'I found out that frogs start life as tadpoles in water.'",
        },
        questions: [
          {
            id: "cipg-u1-sh-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does it mean to share your findings?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Tell others what you discovered" }, { id: "b", text: "Hide your work" }, { id: "c", text: "Delete your notes" }, { id: "d", text: "Keep it secret" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Share", statement: "Communicate findings." }],
              steps: [{ reasoning: "Sharing = telling/showing others your discoveries.", marks: 1, markCode: "M" }],
              finalAnswer: "Tell others your findings",
            },
          },
          {
            id: "cipg-u1-sh-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Give two ways to share research findings at Stage 1.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sharing", statement: "Verbal, visual, written." }],
              steps: [
                { reasoning: "e.g. talk to the class / show pictures.", marks: 1, markCode: "M" },
                { reasoning: "e.g. draw findings / simple chart.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. talk + show pictures",
            },
          },
          {
            id: "cipg-u1-sh-q3", difficulty: "core", totalMarks: 3,
            stem: "Write one clear sentence to share a finding about weather. Then explain why clear sharing helps others.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Clear communication", statement: "Simple accurate sentences." }],
              steps: [
                { reasoning: "Valid clear sentence about weather.", marks: 1, markCode: "M" },
                { reasoning: "Clear = easy for listener to understand.", marks: 1, markCode: "M" },
                { reasoning: "Others learn from your findings.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Clear sentence; helps others learn",
            },
          },
          {
            id: "cipg-u1-sh-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define share and finding. (b) Name three ways to share findings. (c) Write a sentence sharing a finding about animals. (d) Why face your listener when talking? (e) What helps make sharing clear? (f) What could you use to show your findings visually? (g) How do you respond if someone asks a question? (h) Design a 30-second 'show and tell' about your research.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Communication", statement: "Sharing methods, clarity." }],
              steps: [
                { reasoning: "(a) Share=tell others; finding=discovery.", marks: 1, markCode: "M" },
                { reasoning: "(b) Talk, pictures, drawings, charts.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid animal finding sentence.", marks: 1, markCode: "M" },
                { reasoning: "(d) Shows respect; helps listener focus.", marks: 1, markCode: "M" },
                { reasoning: "(e) Slow, simple words, visual aids.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pictures, charts, real objects.", marks: 1, markCode: "M" },
                { reasoning: "(g) Answer simply or say 'let me check'.", marks: 1, markCode: "M" },
                { reasoning: "(h) Structured mini-presentation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sharing methods, clarity, visual aids, responding.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-sh-notes", title: "Sharing — notes",
      summary: "Share findings by talking, showing pictures, drawing. Be clear: slow, simple, face listeners.",
      sections: [
        { heading: "Key idea", body: "Good sharing helps everyone learn from your research." },
        { heading: "Tips", body: "Use visuals; answer questions simply." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson13",
    lesson: {
      id: "cipg-u1-lesson-1-3", code: "1-3",
      title: "Stage 1 — Working Together and Sharing Ideas",
      goal: "I CAN work with others, share ideas and listen to different opinions.",
      standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: collaboration", "Cambridge Primary Global Perspectives 0838 strand: Collaboration"],
      stage: 1,
      vocabulary: [
        { term: "Collaborate", definition: "To work together with others." },
        { term: "Idea", definition: "A thought or suggestion." },
        { term: "Opinion", definition: "What someone thinks or feels about something." },
        { term: "Listen", definition: "To pay attention to what others say." },
        { term: "Take turns", definition: "Let everyone have a chance to speak." },
        { term: "Team", definition: "A group working together." },
      ],
      concept: {
        id: "cipg-u1-s1-collab", title: "Working together",
        skill: "Share ideas, listen and take turns in group work at Stage 1 level.",
        sections: [
          { heading: "Working in a team", body: "Collaboration means working together — sharing ideas, listening to others, and taking turns. Everyone's idea is important, even if it's different from yours." },
          { heading: "Sharing opinions", body: "An opinion is what someone thinks — 'I think we should plant sunflowers'. Listen carefully, say your own ideas politely, and let others have their turn. Good teams combine everyone's best ideas." },
        ],
        keyFormulas: [
          { name: "Collaborate", statement: "work together, share ideas" },
          { name: "Take turns", statement: "everyone gets to speak" },
        ],
        workedExample: {
          problem: "Your group must choose a class pet. How do you collaborate?",
          solution: "Share ideas ('I think a hamster'), listen to others, take turns, then agree on the best choice together.",
        },
        questions: [
          {
            id: "cipg-u1-co-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does collaborate mean?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Work together with others" }, { id: "b", text: "Work alone" }, { id: "c", text: "Copy someone's work" }, { id: "d", text: "Argue with friends" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Collaborate", statement: "Work together." }],
              steps: [{ reasoning: "Collaboration = joint work and shared ideas.", marks: 1, markCode: "M" }],
              finalAnswer: "Work together",
            },
          },
          {
            id: "cipg-u1-co-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an opinion and how is it different from a fact?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Opinion vs fact", statement: "Belief vs checkable truth." }],
              steps: [
                { reasoning: "Opinion = what someone thinks/feels.", marks: 1, markCode: "M" },
                { reasoning: "Fact = checkable true information.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Belief vs truth",
            },
          },
          {
            id: "cipg-u1-co-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is taking turns important in group work? Give an example of sharing an idea politely.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Collaboration", statement: "Turns and polite ideas." }],
              steps: [
                { reasoning: "Turns let everyone contribute and feel included.", marks: 1, markCode: "M" },
                { reasoning: "Polite example: 'I think... what do you think?'", marks: 1, markCode: "M" },
                { reasoning: "Listening to others improves the result.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Inclusion; polite idea-sharing",
            },
          },
          {
            id: "cipg-u1-co-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define collaborate, opinion, take turns. (b) Why is every idea important? (c) How do you share an idea politely? (d) What should you do while others speak? (e) What happens if only one person talks? (f) Give an example of a group decision. (g) How do teams combine ideas? (h) Design group rules for a class project.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Collaboration", statement: "Ideas, turns, listening, decisions." }],
              steps: [
                { reasoning: "(a) All three definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Different ideas → better solutions.", marks: 1, markCode: "M" },
                { reasoning: "(c) 'I think...' + invite others' views.", marks: 1, markCode: "M" },
                { reasoning: "(d) Listen carefully without interrupting.", marks: 1, markCode: "M" },
                { reasoning: "(e) Others feel excluded; fewer ideas.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid group decision example.", marks: 1, markCode: "M" },
                { reasoning: "(g) Combine best parts of everyone's ideas.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid group rules.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Collaboration, opinions, turns, listening, decisions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipg-u1-co-notes", title: "Collaboration — notes",
      summary: "Work together: share ideas, listen, take turns. Opinions differ; facts can be checked.",
      sections: [
        { heading: "Key idea", body: "Teams produce better results when everyone contributes." },
        { heading: "Politeness", body: "'I think...' invites discussion; listening builds on ideas." },
      ],
    },
  },
];
