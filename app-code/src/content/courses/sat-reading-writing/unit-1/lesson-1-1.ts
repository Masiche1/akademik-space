import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "satrw-u1-lesson-1-1",
  code: "1-1",
  title: "Central Ideas and Details",
  goal: "I CAN identify the central idea and key details of a passage.",
  standards: ["SAT RW 1.x"],
  vocabulary: [
    { term: "Central idea", definition: "The passage's main point — what it's fundamentally about." },
    { term: "Supporting detail", definition: "Specific evidence that develops the central idea." },
    { term: "Summarize", definition: "Capture the main point concisely." },
    { term: "Paraphrase", definition: "Restate in your own words." },
    { term: "Scope", definition: "What the passage covers — not everything it mentions." },
    { term: "Main idea vs topic", definition: "Topic = subject; main idea = what the passage SAYS about it." },
  ],
  concepts: [
    {
      id: "satrw-u1-central-idea",
      title: "Central ideas and details",
      skill: "Identify central ideas and distinguish them from topics and details.",
      lesson: {
        sections: [
          {
            heading: "Main idea vs topic",
            body: "The TOPIC is what the passage is about ('climate policy'); the MAIN IDEA is what it SAYS about the topic ('current policies are insufficient because...'). SAT questions test this distinction constantly — 'what is the main idea' answers must make a claim, not just name a subject.",
          },
          {
            heading: "Finding the central idea",
            body: "Look at the introduction and conclusion — the thesis usually lives there. Ask: what is the author arguing or explaining? The central idea is the claim the whole passage supports, not any single detail. Details support; the idea governs.",
          },
        ],
        keyFormulas: [
          { name: "Main idea test", statement: "Does it make a CLAIM about the topic, not just name it?" },
          { name: "Detail role", statement: "Evidence serves the central idea — find what they collectively prove" },
        ],
        workedExample: {
          problem: "A passage describes three failed policies then argues a fourth approach works. What's the main idea?",
          solution: "Not 'policies' (topic) but 'after three failures, approach X succeeds because of reason Y' — the claim the evidence builds toward. The failures are details supporting the central claim.",
        },
      },
      questions: [
        {
          id: "satrw-u1-central-idea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main difference between topic and main idea is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "none — they're the same"
                    },
                    {
                              "id": "b",
                              "text": "topic is the subject; main idea is the claim about it"
                    },
                    {
                              "id": "c",
                              "text": "topic is longer"
                    },
                    {
                              "id": "d",
                              "text": "main idea is always first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Topic vs main idea",
                              "statement": "Subject vs claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Topic names the subject; main idea states what the passage argues about it — 'climate' vs 'climate policy needs reform'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Subject vs claim",
          "commonErrors": [
                    "Confusing topic with thesis."
          ]
},
        },
        {
          id: "satrw-u1-central-idea-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best place to find a passage's main idea is usually ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the middle paragraph"
                    },
                    {
                              "id": "b",
                              "text": "the introduction and conclusion"
                    },
                    {
                              "id": "c",
                              "text": "the longest paragraph"
                    },
                    {
                              "id": "d",
                              "text": "a random detail"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Locating thesis",
                              "statement": "Intro states, conclusion reinforces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introductions typically state the thesis; conclusions reinforce it — the main idea brackets the passage.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Intro and conclusion",
          "commonErrors": [
                    "Searching middle paragraphs first."
          ]
},
        },
        {
          id: "satrw-u1-central-idea-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A passage lists five reasons for a policy, then concludes it should be adopted. What is the main idea vs what are the details?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Idea vs evidence",
                              "statement": "Claim vs support."
                    },
                    {
                              "kind": "skill",
                              "name": "Distinguishing roles",
                              "statement": "What governs vs what serves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main idea: the policy should be adopted — the conclusion's claim; the five reasons are SUPPORTING DETAILS providing evidence for that claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Test: remove a detail and the main idea survives; remove the main idea and the details have no purpose — details serve the claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT questions often ask which detail best supports the main idea — knowing the claim first makes this easier.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Main idea = 'adopt policy'; details = five supporting reasons",
          "commonErrors": [
                    "Listing details as the main idea."
          ]
},
        },
        {
          id: "satrw-u1-central-idea-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says 'the main idea is everything the passage talks about.' Diagnose and fix.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Precision",
                              "statement": "Distinguish coverage from claim."
                    },
                    {
                              "kind": "context",
                              "name": "Scope vs argument",
                              "statement": "What vs why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "That describes the TOPIC/scope — everything mentioned — not the main idea; a passage can cover many topics while arguing one point.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fix: ask 'what is the author trying to prove or explain?' — the main idea is the claim all details support, typically stated or implied in intro/conclusion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The distinction matters: 'covers X, Y, Z' answers 'what is it about'; 'argues A because B' answers 'what is the main idea'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Topic = coverage; main idea = the claim details support",
          "commonErrors": [
                    "Equating coverage with argument."
          ]
},
        },
      ],
    },
  ],
};
