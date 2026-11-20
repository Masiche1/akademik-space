import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cilgp-u1-lesson-1-4",
  code: "1-4",
  title: "Collaboration and Communication",
  goal: "I CAN work collaboratively on global issues and communicate findings clearly.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Collaboration", "Cambridge Global Perspectives skills: collaboration and communication"],
  
  vocabulary: [
    { term: "Collaboration", definition: "Working together toward shared goals." },
    { term: "Communication", definition: "Exchanging information clearly." },
    { term: "Audience", definition: "Who will receive your message." },
    { term: "Presentation", definition: "Structured delivery of findings." },
    { term: "Active listening", definition: "Fully attending to others' contributions." },
    { term: "Consensus", definition: "General agreement among group members." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s4-collab",
      title: "Collaboration and communication",
      skill: "Contribute effectively to group work and present findings at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Effective collaboration",
            body: "Define roles, share tasks fairly, listen actively, resolve disagreements respectfully, and build on each other's ideas. Good teams communicate early and often.",
          },
          {
            heading: "Clear communication",
            body: "Adapt to your audience: peers need context, teachers need rigour, public needs accessible language. Structure presentations: hook → evidence → analysis → conclusion.",
          },
        ],
        keyFormulas: [
          { name: "Collaboration", statement: "roles + listening + shared goals" },
          { name: "Presentation", statement: "hook→evidence→analysis→conclusion" },
        ],
        workedExample: {
          problem: "Your team disagrees on which solution to present. How do you reach consensus?",
          solution: "Each member presents their case with evidence → group evaluates against agreed criteria → choose best-supported option → document reasoning.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-cc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is active listening?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fully attending to others' contributions"
                    },
                    {
                              "id": "b",
                              "text": "Talking louder"
                    },
                    {
                              "id": "c",
                              "text": "Taking notes only"
                    },
                    {
                              "id": "d",
                              "text": "Agreeing with everything"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active listening",
                              "statement": "Full attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active listening = engaged, not just hearing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fully attentive listening"
},
        },
        {
          id: "cilgp-u1-cc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to adapt communication to your audience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Audience adaptation",
                              "statement": "Match message to receiver."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. simpler language for public; technical detail for experts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adjust depth/examples for audience needs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Language level + detail adapted"
},
        },
        {
          id: "cilgp-u1-cc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your group is researching 'online privacy'. How would you divide the work and communicate progress?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Collaboration",
                              "statement": "Roles and communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assign roles: sources, analysis, presentation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Regular check-ins/share findings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Coherent combined output.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Roles + regular updates"
},
        },
        {
          id: "cilgp-u1-cc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define collaboration, communication, audience, presentation, active listening, consensus. (b) What makes a good team? (c) How do you handle disagreement in a group? (d) What is a presentation structure? (e) Why adapt to audience? (f) What is netiquette in online collaboration? (g) How do you ensure everyone's voice is heard? (h) Plan a 10-minute presentation on 'should homework be banned?'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Collaboration",
                              "statement": "Teamwork and presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Roles, trust, communication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Evidence-based respectful discussion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Hook→evidence→analysis→conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Match language/depth to receivers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Polite, clear online behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Rotate roles, invite quiet members.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid presentation plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Collaboration and communication skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-cc-notes",
      title: "Collaboration — notes",
      summary: "Teams need roles, listening and shared goals; presentations need structure and audience adaptation.",
      sections: [
        { heading: "Key idea", body: "Global Perspectives is inherently collaborative — skills matter." },
        { heading: "Communication", body: "Adapt to audience; structure: hook→evidence→analysis→conclusion." },
      ],
    },
  ],
};
