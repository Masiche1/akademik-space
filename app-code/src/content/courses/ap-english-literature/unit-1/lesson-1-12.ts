import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "apelit-u1-lesson-1-12",
  code: "1-12",
  title: "Open-Ended Literary Analysis",
  goal: "I CAN construct an argument on an unseen or loosely prompted text.",
  standards: ["AP Lit 12.x"],
  vocabulary: [
    { term: "Open prompt", definition: "An essay prompt offering a general direction rather than a specific passage." },
    { term: "Text selection", definition: "Choosing which text(s) and which aspects to analyze." },
    { term: "Argument construction", definition: "Building a defensible claim from chosen evidence." },
    { term: "Flexibility", definition: "Adapting analysis to whatever text best serves the argument." },
    { term: "Sophistication", definition: "Nuanced claims, awareness of complexity." },
  ],
  concepts: [
    {
      id: "apelit-u1-open-ended",
      title: "Open-ended analysis",
      skill: "Construct an argument on an open prompt with chosen texts.",
      lesson: {
        sections: [
          {
            heading: "The open prompt challenge",
            body: "Unlike passage analysis, open prompts require YOU to choose texts and angles. The risk is choosing a text you can't analyze deeply; the opportunity is choosing one that lets you argue something genuinely interesting. Pick the text you know best, not the one you think sounds impressive.",
          },
          {
            heading: "Argument first",
            body: "Decide your CLAIM before choosing evidence — what do you want to argue about literature, identity, power, mortality? Then select texts that genuinely support it. A well-argued familiar text beats a forced connection to an impressive one.",
          },
        ],
        keyFormulas: [
          { name: "Open prompt", statement: "Choose text you know → decide claim → select evidence → argue" },
          { name: "Selection rule", statement: "Familiar + analyzable > impressive + unfamiliar" },
        ],
        workedExample: {
          problem: "Prompt: 'Write an essay about the role of storytelling in literature.' Choose a text and angle.",
          solution: "Choose a novel where a character tells stories within the story — e.g., Scheherazade framing or a novel about oral tradition. Angle: storytelling as survival strategy — characters who narrate survive; those who don't, don't. This makes a specific, arguable claim using a text you know.",
        },
      },
      questions: [
        {
          id: "apelit-u1-open-ended-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For an open-ended prompt, the best text to choose is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the most famous one"
                    },
                    {
                              "id": "b",
                              "text": "one you know deeply and can analyze"
                    },
                    {
                              "id": "c",
                              "text": "the longest one"
                    },
                    {
                              "id": "d",
                              "text": "one you've never read"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Text selection",
                              "statement": "Knowledge enables depth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choose the text you can analyze most deeply — familiarity enables the close reading and evidence selection the rubric rewards.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Familiar and analyzable",
          "commonErrors": [
                    "Choosing for impressiveness over analyzability."
          ]
},
        },
        {
          id: "apelit-u1-open-ended-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best strategy for an open prompt is to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start writing immediately"
                    },
                    {
                              "id": "b",
                              "text": "decide your claim, then select supporting texts and evidence"
                    },
                    {
                              "id": "c",
                              "text": "summarize several texts"
                    },
                    {
                              "id": "d",
                              "text": "pick the hardest text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument construction",
                              "statement": "Claim drives selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Claim-first: decide what you're arguing, then choose texts that genuinely support it — evidence serves argument, not the reverse.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Claim first, then select evidence",
          "commonErrors": [
                    "Letting text choice drive a weak argument."
          ]
},
        },
        {
          id: "apelit-u1-open-ended-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'deciding your claim before choosing texts' matters in an open prompt.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Argument-driven selection",
                              "statement": "Claim determines evidence."
                    },
                    {
                              "kind": "skill",
                              "name": "Strategic planning",
                              "statement": "Reverse the usual instinct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Claim-first prevents the common trap of choosing impressive texts then forcing connections — if you decide your argument first, you select texts that genuinely support it, producing coherent analysis rather than strained links.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also clarifies selection: you don't need the most famous text, you need the one that best serves YOUR argument — a well-argued familiar text beats a forced connection.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The reverse (text-first) often produces summary disguised as analysis.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Claim-first ensures coherent argument and honest text selection",
          "commonErrors": [
                    "Choosing texts first then retrofitting a claim."
          ]
},
        },
        {
          id: "apelit-u1-open-ended-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student argues 'I should pick the text I'm most confident I'll get a high score on.' Evaluate this strategy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Strategic selection",
                              "statement": "Confidence vs capability."
                    },
                    {
                              "kind": "skill",
                              "name": "Exam strategy",
                              "statement": "Weigh comfort against quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Confidence matters — a text you know lets you write with control and depth rather than desperately recalling details; fluency enables the sophistication the rubric rewards.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But 'safe' isn't always best — if your confident text only supports a shallow thesis, you'll produce competent but unremarkable analysis; sometimes a slightly less familiar text enables a more interesting argument.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The real criterion: which text lets you make the STRONGEST arguable claim with the evidence you can actually deploy.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Choose the text enabling the strongest arguable claim, not just the safest",
          "commonErrors": [
                    "Choosing purely for safety or purely for impressiveness."
          ]
},
        },
      ],
    },
  ],
};
