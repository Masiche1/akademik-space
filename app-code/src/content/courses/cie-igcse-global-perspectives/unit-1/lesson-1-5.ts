import type { Lesson } from "../../../types.ts";

export const lesson105: Lesson = {
  id: "ciegp-u1-lesson-1-5",
  code: "1-5",
  title: "Reflection and Communication",
  goal: "I CAN reflect on the research process and communicate findings effectively.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: reflection and communication",
    "0457: presentation",
  ],

  vocabulary: [
    {
      term: "Reflection",
      definition: "Thinking about experience to learn from it.",
    },
    { term: "Communication", definition: "Exchanging information clearly." },
    { term: "Presentation", definition: "Structured delivery of findings." },
    { term: "Audience", definition: "Who will receive your message." },
    {
      term: "Synthesis",
      definition: "Combining findings into coherent whole.",
    },
    { term: "Limitations", definition: "Acknowledged weaknesses in research." },
  ],
  concepts: [
    {
      id: "ciegp-u1-s5-refl",
      title: "Reflection and communication",
      skill: "Reflect critically and present findings at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Critical reflection",
            body: "Reflection asks: What did I learn? What assumptions did I challenge? How has my thinking changed? What limitations did my research have? Honest reflection strengthens the project.",
          },
          {
            heading: "Effective communication",
            body: "Structure: hook → evidence → analysis → conclusion → recommendations. Adapt to audience: academic for teachers, accessible for public. Visual aids make data memorable. Acknowledge limitations honestly.",
          },
        ],
        keyFormulas: [
          {
            name: "Reflection",
            statement: "what happened → what it means → what changes",
          },
          {
            name: "Presentation",
            statement: "hook→evidence→analysis→conclusion→recommendations",
          },
        ],
        workedExample: {
          problem:
            "Present your GP research findings on 'online privacy' to your class.",
          solution:
            "Hook: surprising statistic. Evidence: research findings. Analysis: perspectives. Conclusion: balanced view. Recommendations: practical steps. Acknowledge limitations.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-rc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reflection in GP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing a summary",
              },
              {
                id: "b",
                text: "Looking in a mirror",
              },
              {
                id: "c",
                text: "Copying notes",
              },
              {
                id: "d",
                text: "Thinking about experience to learn from it",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Learning from experience.",
              },
            ],
            steps: [
              {
                reasoning: "Reflection = deeper thinking about experience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Learning from experience",
          },
        },
        {
          id: "ciegp-u1-rc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the structure of an effective presentation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Presentation structure",
                statement: "Hook→evidence→analysis→conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Hook→evidence→analysis→conclusion→recommendations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Logical flow engaging audience.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hook→evidence→analysis→conclusion→recommendations",
          },
        },
        {
          id: "ciegp-u1-rc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why acknowledge limitations in research? Give an example limitation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Limitations",
                statement: "Honest research assessment.",
              },
            ],
            steps: [
              {
                reasoning: "Shows rigour; readers understand scope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. small sample size, time constraints.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strengthens credibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Honesty + scope awareness",
          },
        },
        {
          id: "ciegp-u1-rc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflection, communication, presentation, audience, synthesis, limitations. (b) What questions does reflection ask? (c) What is presentation structure? (d) How do you adapt to audience? (e) What is synthesis? (f) Why acknowledge limitations? (g) Give an example limitation. (h) Write a reflection on completing a GP project.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement: "Learning and communication.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) What learned/assumptions challenged/changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Hook→evidence→analysis→conclusion→recommendations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Language/depth/examples adapted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Integrated findings into whole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Shows rigour, honesty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid limitation example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reflection and communication skills.",
          },
        },
        {
          id: "ciegp-u1-rc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the strongest opening hook for a presentation on water scarcity?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Apologising for your research",
              },
              {
                id: "b",
                text: "Reading your whole essay aloud",
              },
              {
                id: "c",
                text: "A surprising statistic or vivid question about daily water use",
              },
              {
                id: "d",
                text: "A long list of definitions",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hook",
                statement: "Grab attention immediately.",
              },
            ],
            steps: [
              {
                reasoning: "Hooks use surprising facts, questions or stories.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Surprising statistic or vivid question",
          },
        },
        {
          id: "ciegp-u1-rc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should a presentation adapt its language to its audience? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience adaptation",
                statement: "Match language to listeners.",
              },
            ],
            steps: [
              {
                reasoning: "Different audiences understand different levels of detail and jargon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. technical terms for teachers vs everyday examples for the public.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Match detail/jargon to audience — example given",
          },
        },
        {
          id: "ciegp-u1-rc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Synthesis in a project conclusion means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Combining findings into a coherent whole",
              },
              {
                id: "b",
                text: "Listing sources alphabetically",
              },
              {
                id: "c",
                text: "Deleting weak evidence",
              },
              {
                id: "d",
                text: "Copying all findings verbatim",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining into coherent whole.",
              },
            ],
            steps: [
              {
                reasoning: "Synthesis integrates findings, not just summarises.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Combining findings into coherent whole",
          },
        },
        {
          id: "ciegp-u1-rc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two questions a good reflection should answer about your research process.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Reflection",
                statement: "What changed and what limited the work.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. What did I learn about the issue or method?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. What assumptions did I challenge?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also valid: limitations, what I'd do differently.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Learning gained + assumptions challenged / limitations",
          },
        },
        {
          id: "ciegp-u1-rc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do visual aids improve a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They replace the need for evidence",
              },
              {
                id: "b",
                text: "They fill time",
              },
              {
                id: "c",
                text: "They prove the research was hard",
              },
              {
                id: "d",
                text: "They make data memorable and clear",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Visual aids",
                statement: "Support spoken points.",
              },
            ],
            steps: [
              {
                reasoning: "Visuals make data memorable and support spoken points.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Make data memorable and clear",
          },
        },
        {
          id: "ciegp-u1-rc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why acknowledging limitations in your research makes your findings MORE credible, not less.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Limitations",
                statement: "Honesty strengthens credibility.",
              },
            ],
            steps: [
              {
                reasoning: "It shows you understand the scope of your evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It helps readers judge how far conclusions can be generalised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hiding weaknesses would damage trust if discovered.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shows rigour; helps readers judge scope",
          },
        },
        {
          id: "ciegp-u1-rc-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is signposting in a presentation? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Signposting",
                statement: "Verbal cues guiding listeners.",
              },
            ],
            steps: [
              {
                reasoning: "Signposting tells the audience where you are in the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. 'My research question was... Now I'll present my key findings.'",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Verbal cues guiding listeners — example given",
          },
        },
        {
          id: "ciegp-u1-rc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your presentation must convince your school council to fund a 'meat-free Monday' pilot. Describe how you would structure the 5-minute pitch.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive presentation",
                statement: "Structure for audience and purpose.",
              },
            ],
            steps: [
              {
                reasoning: "Hook: a striking statistic about school meals or food emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: research findings with costs/benefits for the school.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Address counter-argument: cost, student resistance, alternatives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Call to action: specific request to fund a one-term pilot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hook→evidence→counter→specific CTA",
          },
        },
        {
          id: "ciegp-u1-rc-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correct order of a GP presentation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sources→questions→end",
              },
              {
                id: "b",
                text: "Random order is fine",
              },
              {
                id: "c",
                text: "Conclusion→evidence→question→method",
              },
              {
                id: "d",
                text: "Hook→evidence→analysis→conclusion→recommendations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation structure",
                statement: "Hook→evidence→analysis→conclusion→recommendations.",
              },
            ],
            steps: [
              {
                reasoning: "The standard logical flow for GP presentations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hook→evidence→analysis→conclusion→recommendations",
          },
        },
        {
          id: "ciegp-u1-rc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a reflection written AFTER completing the research more valuable than planning it beforehand?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection timing",
                statement: "Reflect on what actually happened.",
              },
            ],
            steps: [
              {
                reasoning: "It can honestly assess what was learned and what went wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It allows comparison between intended and actual outcomes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Honest assessment of actual experience",
          },
        },
        {
          id: "ciegp-u1-rc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a viva, the BEST response to 'What is a limitation of your research?' is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Blaming the examiner",
              },
              {
                id: "b",
                text: "Changing the subject",
              },
              {
                id: "c",
                text: "A specific honest limitation, e.g. 'I only surveyed students at my school'",
              },
              {
                id: "d",
                text: "'There are no limitations.'",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Viva honesty",
                statement: "Admit limitations specifically.",
              },
            ],
            steps: [
              {
                reasoning: "Specific honest limitations score better than denials or bluffing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific honest limitation",
          },
        },
        {
          id: "ciegp-u1-rc-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a 4-sentence reflection on a GP project where you discovered your initial assumption was wrong. What does good reflection include?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Critical reflection",
                statement: "Learning, changed thinking, limitations.",
              },
            ],
            steps: [
              {
                reasoning: "States what was initially assumed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains what evidence changed that view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reflects on how thinking or method changed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acknowledges limitations of the research honestly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows genuine learning rather than a summary of findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Assumption→evidence→changed thinking→limitations→learning",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-rc-notes",
      title: "Reflection — notes",
      summary:
        "Reflect on learning and limitations; present findings with clear structure adapted to audience.",
      sections: [
        {
          heading: "Key idea",
          body: "Reflection turns research into learning.",
        },
        {
          heading: "Communication",
          body: "Structure + audience adaptation + honest limitations.",
        },
      ],
    },
  ],
};
