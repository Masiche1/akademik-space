import type { Lesson } from "../../../types.ts";

export const lesson714: Lesson = {
  id: "ciealpsy-u1-lesson-1-4",
  code: "1-4",
  title: "Attachment: Theory and Types",
  goal: "I CAN explain attachment theory, types and cultural variations.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 1: Attachment"],
  
  vocabulary: [
    { term: "Attachment", definition: "Emotional bond between infant and caregiver." },
    { term: "Monotropy", definition: "Bowlby's claim of one primary attachment." },
    { term: "Secure attachment", definition: "Infant uses caregiver as safe base." },
    { term: "Insecure-avoidant", definition: "Infant avoids caregiver on reunion." },
    { term: "Insecure-resistant", definition: "Infant clings but resists comfort." },
    { term: "Strange Situation", definition: "Ainsworth's attachment assessment procedure." },
  ],
  concepts: [
    {
      id: "ciealpsy-u1-s4-att",
      title: "Attachment",
      skill: "Explain attachment theory and types.",
      lesson: {
        sections: [
          {
            heading: "Bowlby's theory",
            body: "Evolutionary: attachment evolved for survival. Monotropy: one primary attachment (usually mother). Sensitive responding in first year critical. Internal working model shapes future relationships.",
          },
          {
            heading: "Ainsworth's Strange Situation",
            body: "8 episodes observing infant with caregiver/stranger. Secure (~60-65%), avoidant (~20%), resistant (~10-15%). Secure: seeks contact, comforted. Avoidant: ignores, explores freely. Resistant: clings, can't be comforted.",
          },
          {
            heading: "Cultural variations",
            body: "Van Ijzendoorn meta-analysis: secure majority across cultures. Germany: more avoidant (independence valued). Japan: more resistant (close physical contact). Israel kibbutzim: communal care.",
          },
        ],
        keyFormulas: [
          { name: "Monotropy", statement: "one primary attachment" },
          { name: "Secure", statement: "~60-65%" },
          { name: "Avoidant", statement: "~20%" },
        ],
        workedExample: {
          problem: "How does attachment affect later development?",
          solution: "Internal working model: secure attachment → positive expectations of relationships → better social/emotional development.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u1-att-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is attachment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Emotional bond between infant and caregiver"
                    },
                    {
                              "id": "b",
                              "text": "A type of memory"
                    },
                    {
                              "id": "c",
                              "text": "A learning process"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Attachment",
                              "statement": "Emotional bond."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attachment = emotional bond.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Emotional bond"
},
        },
        {
          id: "ciealpsy-u1-att-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is monotropy in attachment theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monotropy",
                              "statement": "One primary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bowlby's claim of one primary attachment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Usually mother, but can be any caregiver.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One primary attachment"
},
        },
        {
          id: "ciealpsy-u1-att-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three attachment types identified by Ainsworth?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strange Situation",
                              "statement": "Attachment types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secure: seeks contact, comforted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoidant: ignores, explores freely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resistant: clings, can't be comforted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Secure, avoidant, resistant"
},
        },
        {
          id: "ciealpsy-u1-att-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define attachment, monotropy, secure, avoidant, resistant, Strange Situation. (b) What is attachment? (c) What is monotropy? (d) What are attachment types? (e) What is Strange Situation? (f) What is internal working model? (g) How do cultures differ? (h) Evaluate Bowlby's attachment theory.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Attachment",
                              "statement": "Theory/types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Emotional bond.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) One primary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Secure, avoidant, resistant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Ainsworth procedure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Internal expectations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cultural variations exist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Evolutionary basis but culturally biased.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Attachment theory analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u1-att-notes",
      title: "Attachment — notes",
      summary: "Bowlby: evolutionary, monotropy. Ainsworth: 3 types via Strange Situation.",
      sections: [
        { heading: "Key idea", body: "Early attachment shapes internal working model of relationships." },
        { heading: "Cultural", body: "Secure majority across cultures but variations exist." },
      ],
    },
  ],
};
