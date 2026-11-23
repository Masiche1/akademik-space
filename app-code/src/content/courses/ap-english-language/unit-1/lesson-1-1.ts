import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apel-u1-lesson-1-1",
  code: "1-1",
  title: "Claims, Evidence, and Appeals",
  goal: "I CAN identify an author's claim and evaluate how evidence and appeals support it.",
  standards: ["AP Lang 1.x"],
  vocabulary: [
    { term: "Claim", definition: "The central argument or position an author advances." },
    { term: "Evidence", definition: "Facts, examples, data, or testimony used to support a claim." },
    { term: "Ethos", definition: "Appeal to credibility — the speaker's character or authority." },
    { term: "Pathos", definition: "Appeal to emotion — intended to make readers feel." },
    { term: "Logos", definition: "Appeal to logic — reasoning, evidence, and structure." },
    { term: "Warrant", definition: "The unstated assumption connecting evidence to claim." },
  ],
  concepts: [
    {
      id: "apel-u1-claims-evidence",
      title: "Claims, evidence, and appeals",
      skill: "Identify the claim and analyze the rhetorical strategies supporting it.",
      lesson: {
        sections: [
          {
            heading: "Claims and warrants",
            body: "Every argument rests on a **claim** supported by **evidence**. The connection between them is the **warrant** — often unstated. Strong analysis asks: what assumption must a reader accept for this evidence to prove the claim? Challenging the warrant is often the sharpest critical move.",
          },
          {
            heading: "The rhetorical appeals",
            body: "**Ethos** builds credibility through expertise, character, or shared values. **Pathos** engages emotion — vivid imagery, personal anecdote, charged language. **Logos** relies on logic — statistics, causal reasoning, analogies. Most effective arguments blend all three; analysis should identify which dominates and why.",
          },
        ],
        keyFormulas: [
          { name: "Appeals", statement: "Ethos = credibility; pathos = emotion; logos = logic" },
          { name: "Warrant", statement: "Unstated link between evidence and claim" },
        ],
        workedExample: {
          problem: "A columnist writes: 'As a nurse for twenty years, I can tell you that vaccination saves lives — last year my ward saw three unvaccinated children nearly die of measles.' Identify claim, evidence, appeal.",
          solution: "Claim: vaccination saves lives. Evidence: twenty years of experience and three specific cases. Appeals: ethos (professional credibility as a nurse) blended with pathos (vivid, emotional cases).",
        },
      },
      questions: [
        {
          id: "apel-u1-claims-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An appeal to the speaker's credibility or authority is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pathos"
                    },
                    {
                              "id": "b",
                              "text": "ethos"
                    },
                    {
                              "id": "c",
                              "text": "logos"
                    },
                    {
                              "id": "d",
                              "text": "kairos"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethos",
                              "statement": "Credibility-based appeal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethos relies on the speaker's character, expertise, or trustworthiness.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Ethos",
          "commonErrors": [
                    "Confusing ethos with the other appeals."
          ]
},
        },
        {
          id: "apel-u1-claims-evidence-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A writer cites 'studies show' repeatedly without naming them. This weakens ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ethos"
                    },
                    {
                              "id": "b",
                              "text": "logos — unverifiable evidence"
                    },
                    {
                              "id": "c",
                              "text": "pathos"
                    },
                    {
                              "id": "d",
                              "text": "the claim itself"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence quality",
                              "statement": "Vague sourcing undermines logical appeal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unverifiable 'studies' weaken logos — readers cannot evaluate the reasoning.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Logos",
          "commonErrors": [
                    "Thinking named studies are required for ethos."
          ]
},
        },
        {
          id: "apel-u1-claims-evidence-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the claim, one piece of evidence, and one appeal in this sentence: 'Having buried dozens of neighbors lost to smoking, I urge every parent: ban flavored vapes from schools before another child is hooked.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rhetorical identification",
                              "statement": "Claim + evidence + appeal in one sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Claim: flavored vapes should be banned from schools.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evidence: 'dozens of neighbors lost to smoking' — anecdotal loss; appeal: pathos (grief, parental fear) with implied ethos of community member.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Claim: ban vapes; evidence: neighbors' deaths; appeal: pathos/ethos",
          "commonErrors": [
                    "Missing that the claim is embedded in the imperative 'urge'."
          ]
},
        },
        {
          id: "apel-u1-claims-evidence-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyze how an author might use a concession ('I grant that opponents have a point, but...') rhetorically. Explain both its risk and benefit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Concession",
                              "statement": "Acknowledging opposing view builds ethos."
                    },
                    {
                              "kind": "skill",
                              "name": "Strategic analysis",
                              "statement": "Appears fair while steering back to claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Concession acknowledges the opposing side — builds ethos by appearing fair-minded and strengthens the eventual rebuttal.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: if the concession is too generous, it can undermine the author's own position; if too token, it looks insincere.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit: it pre-empts counterarguments and makes the author's claim seem more reasonable by contrast.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Concession builds ethos and pre-empts rebuttal, but risks weakening the claim",
          "commonErrors": [
                    "Treating concession as weakness rather than strategy."
          ]
},
        },
      ],
    },
  ],
};
