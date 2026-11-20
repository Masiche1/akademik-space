import type { Lesson } from "../../../types.ts";

export const lesson643: Lesson = {
  id: "ciealhis-u4-lesson-4-3",
  code: "4-3",
  title: "Post-Cold War World",
  goal: "I CAN analyse post-Cold War international relations and conflicts.",
  standards: ["Cambridge A Level History 9489", "Paper 1: post-Cold War"],
  
  vocabulary: [
    { term: "Unipolarity", definition: "US as sole superpower." },
    { term: "9/11", definition: "2001 terrorist attacks on US." },
    { term: "War on Terror", definition: "US-led response to terrorism." },
    { term: "Iraq War", definition: "2003 US-led invasion of Iraq." },
    { term: "Afghanistan War", definition: "2001 US-led intervention." },
    { term: "Multipolarity", definition: "Multiple power centres." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s3-post",
      title: "Post-Cold War",
      skill: "Analyse post-Cold War world order.",
      lesson: {
        sections: [
          {
            heading: "US unipolarity",
            body: "1991: US sole superpower. 'New World Order' — democracy, free markets, US leadership. NATO expansion into Eastern Europe.",
          },
          {
            heading: "Post-9/11",
            body: "2001: terrorist attacks transformed US foreign policy. War on Terror: Afghanistan 2001, Iraq 2003. Challenged US hegemony.",
          },
          {
            heading: "Multipolar emergence",
            body: "China's rise, Russia's resurgence, EU integration. Power shifting from US unipolarity to multipolarity.",
          },
        ],
        keyFormulas: [
          { name: "Unipolar", statement: "US dominance" },
          { name: "9/11", statement: "2001 attacks" },
          { name: "Multipolar", statement: "multiple powers" },
        ],
        workedExample: {
          problem: "How did 9/11 change international relations?",
          solution: "Transformed US foreign policy — War on Terror, Afghanistan/Iraq wars, strained alliances, rise of terrorism as key threat.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-pcw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was unipolarity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "US as sole superpower"
                    },
                    {
                              "id": "b",
                              "text": "Multiple powers"
                    },
                    {
                              "id": "c",
                              "text": "A type of government"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unipolarity",
                              "statement": "US dominance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unipolarity = US sole superpower.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "US sole superpower"
},
        },
        {
          id: "ciealhis-u4-pcw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the War on Terror?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "War on Terror",
                              "statement": "US response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US-led response to terrorism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Afghanistan 2001, Iraq 2003.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "US terrorism response"
},
        },
        {
          id: "ciealhis-u4-pcw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How did 9/11 change international relations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "9/11 impact",
                              "statement": "Changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transformed US foreign policy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "War on Terror, Afghanistan/Iraq.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strained alliances, new threats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Policy transformation"
},
        },
        {
          id: "ciealhis-u4-pcw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define unipolarity, 9/11, War on Terror, Iraq War, Afghanistan War, multipolarity. (b) What was unipolarity? (c) What was 9/11? (d) What was War on Terror? (e) What was Iraq War? (f) What was Afghanistan War? (g) What is multipolarity? (h) Evaluate whether US hegemony is declining.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Post-Cold War",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) US dominance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 2001 attacks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) US terrorism response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 2003 invasion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 2001 intervention.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Multiple powers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) China/Russia rising — multipolar emerging.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Post-Cold War analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-pcw-notes",
      title: "Post-Cold War — notes",
      summary: "US unipolarity→9/11→War on Terror→multipolar emergence.",
      sections: [
        { heading: "Key idea", body: "Post-Cold War world order shifted from bipolar to unipolar to emerging multipolar." },
        { heading: "9/11", body: "Transformed US foreign policy and global security landscape." },
      ],
    },
  ],
};
