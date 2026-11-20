import type { Lesson } from "../../../types.ts";

export const lesson105: Lesson = {
  id: "ciegp-u1-lesson-1-5",
  code: "1-5",
  title: "Reflection and Communication",
  goal: "I CAN reflect on the research process and communicate findings effectively.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: reflection and communication", "0457: presentation"],
  
  vocabulary: [
    { term: "Reflection", definition: "Thinking about experience to learn from it." },
    { term: "Communication", definition: "Exchanging information clearly." },
    { term: "Presentation", definition: "Structured delivery of findings." },
    { term: "Audience", definition: "Who will receive your message." },
    { term: "Synthesis", definition: "Combining findings into coherent whole." },
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
          { name: "Reflection", statement: "what happened → what it means → what changes" },
          { name: "Presentation", statement: "hook→evidence→analysis→conclusion→recommendations" },
        ],
        workedExample: {
          problem: "Present your GP research findings on 'online privacy' to your class.",
          solution: "Hook: surprising statistic. Evidence: research findings. Analysis: perspectives. Conclusion: balanced view. Recommendations: practical steps. Acknowledge limitations.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-rc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reflection in GP?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thinking about experience to learn from it"
                    },
                    {
                              "id": "b",
                              "text": "Looking in a mirror"
                    },
                    {
                              "id": "c",
                              "text": "Writing a summary"
                    },
                    {
                              "id": "d",
                              "text": "Copying notes"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reflection",
                              "statement": "Learning from experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflection = deeper thinking about experience.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Learning from experience"
},
        },
        {
          id: "ciegp-u1-rc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the structure of an effective presentation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Presentation structure",
                              "statement": "Hook→evidence→analysis→conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hook→evidence→analysis→conclusion→recommendations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Logical flow engaging audience.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hook→evidence→analysis→conclusion→recommendations"
},
        },
        {
          id: "ciegp-u1-rc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why acknowledge limitations in research? Give an example limitation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Limitations",
                              "statement": "Honest research assessment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows rigour; readers understand scope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. small sample size, time constraints.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strengthens credibility.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Honesty + scope awareness"
},
        },
        {
          id: "ciegp-u1-rc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflection, communication, presentation, audience, synthesis, limitations. (b) What questions does reflection ask? (c) What is presentation structure? (d) How do you adapt to audience? (e) What is synthesis? (f) Why acknowledge limitations? (g) Give an example limitation. (h) Write a reflection on completing a GP project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reflection",
                              "statement": "Learning and communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) What learned/assumptions challenged/changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Hook→evidence→analysis→conclusion→recommendations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Language/depth/examples adapted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Integrated findings into whole.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Shows rigour, honesty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid limitation example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid reflection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reflection and communication skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-rc-notes",
      title: "Reflection — notes",
      summary: "Reflect on learning and limitations; present findings with clear structure adapted to audience.",
      sections: [
        { heading: "Key idea", body: "Reflection turns research into learning." },
        { heading: "Communication", body: "Structure + audience adaptation + honest limitations." },
      ],
    },
  ],
};
