import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cieict-u2-lesson-2-3",
  code: "2-3",
  title: "Presentation Design",
  goal: "I CAN create effective presentations using slide software and multimedia elements.",
  standards: ["Cambridge IGCSE ICT 0417: presentations", "0417 section: presentation software"],
  
  vocabulary: [
    { term: "Slide", definition: "Single screen in a presentation." },
    { term: "Transition", definition: "Effect moving between slides." },
    { term: "Animation", definition: "Movement of elements within a slide." },
    { term: "Master slide", definition: "Template applied to all slides." },
    { term: "Speaker notes", definition: "Hidden text for presenter reminders." },
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
          solution: "Slide 1: title; 2-3: problem; 4-6: causes/effects; 7-8: solutions; 9: data chart; 10: conclusion+Q&A.",
        },
      },
      questions: [
        {
          id: "cieict-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a master slide?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Template applied to all slides"
                    },
                    {
                              "id": "b",
                              "text": "The first slide"
                    },
                    {
                              "id": "c",
                              "text": "A type of animation"
                    },
                    {
                              "id": "d",
                              "text": "A network device"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Master slide",
                              "statement": "Consistent template."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Master slide = design applied to all.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Template for all slides"
},
        },
        {
          id: "cieict-u2-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a transition and an animation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transition vs animation",
                              "statement": "Between vs within slides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transition=between slides; animation=within slide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Between vs within"
},
        },
        {
          id: "cieict-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should presentations have minimal text per slide? What should replace it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Slide design",
                              "statement": "Visuals over text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Audiences can't read and listen simultaneously.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Replace with images, charts, keywords.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Keeps audience engaged.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Visuals not walls of text"
},
        },
        {
          id: "cieict-u2-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define slide, transition, animation, master slide, speaker notes, audience. (b) What is a good presentation structure? (c) Why use master slides? (d) When use transitions/animations? (e) What are speaker notes for? (f) How do you engage an audience? (g) What makes a bad presentation? (h) Design a 5-slide pitch for a school charity event.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Presentations",
                              "statement": "Structure, design, delivery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Intro→content→conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Consistent professional design.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Subtle emphasis, not distraction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Presenter reminders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Questions, stories, visuals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Walls of text, no structure, poor timing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid charity pitch outline.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Effective presentation design and delivery."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-pr-notes",
      title: "Presentations — notes",
      summary: "Minimal text + strong visuals; master slides for consistency; structure intro→content→conclusion.",
      sections: [
        { heading: "Key idea", body: "Slides support the speaker — don't replace them." },
        { heading: "Design", body: "Consistent theme, clear hierarchy, appropriate media." },
      ],
    },
  ],
};
