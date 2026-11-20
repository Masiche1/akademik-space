import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cilgp-u1-lesson-1-5",
  code: "1-5",
  title: "Reflection and Personal Action",
  goal: "I CAN reflect on my learning and plan personal action on global issues.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Reflection", "Cambridge Global Perspectives skills: reflection"],
  
  vocabulary: [
    { term: "Reflection", definition: "Thinking about experiences to learn from them." },
    { term: "Action plan", definition: "Steps to take to address an issue." },
    { term: "Agency", definition: "Ability to influence change." },
    { term: "Sustainability", definition: "Meeting needs without harming future." },
    { term: "Empathy", definition: "Understanding others' feelings/perspectives." },
    { term: "Accountability", definition: "Taking responsibility for actions." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s5-refl",
      title: "Reflection and action",
      skill: "Reflect critically and plan meaningful action at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Critical reflection",
            body: "Reflection asks: What did I learn? What assumptions did I challenge? How has my thinking changed? What could I do differently? It's not just 'what happened' but 'what does it mean'.",
          },
          {
            heading: "Personal action",
            body: "Action plans should be realistic: what specifically will you do, by when, and how will you measure impact? Small consistent actions beat grand gestures.",
          },
        ],
        keyFormulas: [
          { name: "Reflection", statement: "what happened → what it means → what changes" },
          { name: "Action plan", statement: "specific + realistic + measurable" },
        ],
        workedExample: {
          problem: "After researching plastic pollution, write a personal action plan.",
          solution: "This month: carry reusable bottle + bag. This term: start school recycling club. Measure: count single-use items avoided weekly.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reflection in Global Perspectives?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thinking about experiences to learn from them"
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
          id: "cilgp-u1-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a good action plan? Give two features.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Action plan",
                              "statement": "Specific, realistic, measurable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific steps with timeline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Realistic + measurable impact.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Specific + realistic + measurable"
},
        },
        {
          id: "cilgp-u1-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between 'what happened' and 'what it means' in reflection?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reflection depth",
                              "statement": "Event vs meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'What happened' = description of event.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "'What it means' = interpretation/learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Deep reflection goes beyond description.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Description vs interpretation"
},
        },
        {
          id: "cilgp-u1-rf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reflection, action plan, agency, sustainability, empathy, accountability. (b) Why is reflection important in GP? (c) What questions does critical reflection ask? (d) What makes an action plan realistic? (e) Give an example of small sustainable action. (f) What is empathy in global issues? (g) How do you measure action impact? (h) Write a reflection + action plan after researching 'food waste'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reflection",
                              "statement": "Learning and action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Deepens learning, changes thinking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) What learned/assumptions challenged/changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Achievable steps + resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid small action example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Understanding others' perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Metrics/counts/observable change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid reflection + action plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reflection and personal action planning."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-rf-notes",
      title: "Reflection — notes",
      summary: "Reflect on learning and challenge assumptions; plan specific, measurable personal actions.",
      sections: [
        { heading: "Key idea", body: "Reflection turns experience into learning." },
        { heading: "Action", body: "Small consistent actions > grand gestures." },
      ],
    },
  ],
};
