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
                              "text": "A type of memory"
                    },
                    {
                              "id": "b",
                              "text": "A brain structure"
                    },
                    {
                              "id": "c",
                              "text": "A learning process"
                    },
                    {
                              "id": "d",
                              "text": "Emotional bond between infant and caregiver"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ciealpsy-u1-att-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bowlby argued that attachment evolved through natural selection primarily because it:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches the infant to speak"
                    },
                    {
                              "id": "b",
                              "text": "Promotes the survival and protection of the infant"
                    },
                    {
                              "id": "c",
                              "text": "Makes the infant popular with peers"
                    },
                    {
                              "id": "d",
                              "text": "Removes the need for a caregiver"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Evolutionary function",
                              "statement": "Attachment evolved for survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bowlby saw attachment as an evolved behaviour that keeps the infant close to a protective caregiver, aiding survival.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Promotes survival and protection of the infant"
},
        },
        {
          id: "ciealpsy-u1-att-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many episodes does Ainsworth's Strange Situation procedure contain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 8 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strange Situation",
                              "statement": "8 episodes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Strange Situation consists of 8 short episodes involving separations and reunions with the caregiver and a stranger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "ciealpsy-u1-att-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Strange Situation, an infant who explores freely, shows little distress when the caregiver leaves and ignores the caregiver on reunion is classified as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Insecure-avoidant"
                    },
                    {
                              "id": "b",
                              "text": "Insecure-resistant"
                    },
                    {
                              "id": "c",
                              "text": "Secure"
                    },
                    {
                              "id": "d",
                              "text": "Disorganised"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insecure-avoidant",
                              "statement": "Ignores caregiver on reunion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Free exploration with little distress and ignoring the caregiver on reunion is the avoidant pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Insecure-avoidant"
},
        },
        {
          id: "ciealpsy-u1-att-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately what percentage of infants were classified as securely attached in Ainsworth's original Strange Situation study?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 62.5, "tolerance": 2.5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strange Situation",
                              "statement": "Secure ~60-65%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Around 60-65% of infants were classified as securely attached.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "62.5"
},
        },
        {
          id: "ciealpsy-u1-att-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bowlby's term 'sensitive responding' refers to the caregiver's tendency to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ignore the infant to encourage independence"
                    },
                    {
                              "id": "b",
                              "text": "Respond appropriately and promptly to the infant's signals and needs"
                    },
                    {
                              "id": "c",
                              "text": "Punish all undesirable behaviour immediately"
                    },
                    {
                              "id": "d",
                              "text": "Provide food on a fixed schedule regardless of the infant's state"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sensitive responding",
                              "statement": "Caregiver responds to infant's cues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensitive responding means the caregiver notices and appropriately meets the infant's needs, especially in the first year.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Respond appropriately to the infant's signals"
},
        },
        {
          id: "ciealpsy-u1-att-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many distinct attachment types did Ainsworth identify through the Strange Situation?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strange Situation",
                              "statement": "3 attachment types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ainsworth identified secure, insecure-avoidant and insecure-resistant attachment types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u1-att-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An infant who clings to the caregiver when distressed but cannot be comforted by them during reunion shows which attachment type?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Disorganised"
                    },
                    {
                              "id": "b",
                              "text": "Insecure-avoidant"
                    },
                    {
                              "id": "c",
                              "text": "Insecure-resistant"
                    },
                    {
                              "id": "d",
                              "text": "Secure"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insecure-resistant",
                              "statement": "Clings but resists comfort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clinging with an inability to be comforted is the resistant pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Insecure-resistant"
},
        },
        {
          id: "ciealpsy-u1-att-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In samples studied by Ainsworth, approximately what percentage of infants were classified as insecure-avoidant?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 20, "tolerance": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strange Situation",
                              "statement": "Avoidant ~20%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "About 20% of infants show insecure-avoidant attachment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20"
},
        },
        {
          id: "ciealpsy-u1-att-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'internal working model' in Bowlby's theory is best described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A list of the three attachment types"
                    },
                    {
                              "id": "b",
                              "text": "A brain scan image of the attachment centre"
                    },
                    {
                              "id": "c",
                              "text": "A cultural stereotype about mothers"
                    },
                    {
                              "id": "d",
                              "text": "A mental representation of relationships built from early attachment experiences"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internal working model",
                              "statement": "Mental template for relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The internal working model is the set of expectations about relationships formed from the infant's early experiences with the primary caregiver.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental representation of relationships"
},
        },
        {
          id: "ciealpsy-u1-att-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the reunion behaviour shown by each of the three attachment types identified by Ainsworth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Attachment types",
                              "statement": "Secure, avoidant, resistant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secure infants seek contact with the caregiver and are quickly comforted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insecure-avoidant infants ignore or actively avoid the caregiver and may continue exploring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Insecure-resistant infants cling to the caregiver but remain distressed and cannot be comforted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Secure seeks comfort; avoidant ignores; resistant clings without comfort"
},
        },
        {
          id: "ciealpsy-u1-att-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two cultural variations in attachment identified by Van Ijzendoorn's meta-analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Cultural variations",
                              "statement": "Secure majority; Germany avoidant, Japan resistant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Secure attachment was the majority type across the cultures studied.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Germany showed higher rates of insecure-avoidant attachment, linked to cultural values of independence and early self-reliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Japan showed higher rates of insecure-resistant attachment, linked to close physical contact and less separation in caregiving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Variations suggest attachment patterns are shaped by caregiving practices and cultural norms, not just universal biology.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Secure majority; Germany more avoidant, Japan more resistant"
},
        },
        {
          id: "ciealpsy-u1-att-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define attachment, monotropy, internal working model, Strange Situation, secure attachment, insecure-avoidant attachment and sensitive responding. (b) What is attachment? (c) What is monotropy? (d) What is the internal working model? (e) How does the Strange Situation assess attachment? (f) Outline the behaviour of securely attached infants. (g) Outline the behaviour of insecure-avoidant and insecure-resistant infants. (h) Evaluate Bowlby's theory of attachment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Attachment",
                              "statement": "Theory, types and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Emotional bond between infant and caregiver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) One primary attachment figure, usually the mother.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Mental representation of relationships shaped by early attachment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 8 episodes of separations and reunions classified by reunion behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Seeks contact, shows distress on separation, is comforted on reunion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Avoidant ignores caregiver; resistant clings but cannot be comforted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Evolutionary basis and predictive power are strengths; cultural bias and determinism are weaknesses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Attachment theory and types analysis."
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
