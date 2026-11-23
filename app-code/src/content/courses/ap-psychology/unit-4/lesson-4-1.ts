import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "appsych-u4-lesson-4-1",
  code: "4-1",
  title: "Anxiety and Trauma Disorders",
  goal: "I CAN identify anxiety, OCD, and PTSD symptoms and treatments.",
  standards: ["Unit 14"],
  vocabulary: [
    { term: "Generalized anxiety disorder", definition: "Excessive worry about everyday events lasting 6+ months." },
    { term: "Panic disorder", definition: "Sudden intense fear attacks with physical symptoms (racing heart, shortness of breath)." },
    { term: "Phobias", definition: "Intense irrational fear of specific objects/situations (heights, spiders, flying)." },
    { term: "OCD", definition: "Obsessions (intrusive thoughts) + compulsions (repetitive behaviors to reduce anxiety)." },
    { term: "PTSD", definition: "Post-traumatic stress disorder — flashbacks, nightmares, hypervigilance after trauma." },
    { term: "Exposure therapy", definition: "Gradual exposure to feared stimulus to reduce anxiety — effective for phobias/PTSD." },
  ],
  concepts: [
    {
      id: "appsych-u4-anxiety-disorders",
      title: "Anxiety-related disorders",
      skill: "Identify symptoms and treatments of anxiety disorders.",
      lesson: {
        sections: [
          {
            heading: "Anxiety disorders",
            body: "GAD (chronic worry), panic disorder (acute attacks), phobias (specific fears), OCD (obsessions/compulsions), PTSD (trauma response) — all involve excessive fear/anxiety disrupting function.",
          },
          {
            heading: "Treatments",
            body: "Exposure therapy (gradual confrontation), CBT (cognitive restructuring), SSRIs (medication), relaxation techniques — often combined.",
          },
        ],
        keyFormulas: [
          { name: "Anxiety disorders", statement: "GAD / Panic / Phobias / OCD / PTSD" },
          { name: "Treatments", statement: "Exposure therapy + CBT + medication (SSRIs)" },
        ],
        workedExample: {
          problem: "How does exposure therapy treat phobias?",
          solution: "Gradual, systematic exposure to feared stimulus (spider → picture → real spider) while preventing avoidance — extinction learning reduces fear response through habituation.",
        },
      },
      questions: [
        {
          id: "appsych-u4-anxiety-disorders-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "OCD involves ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only obsessions"
                    },
                    {
                              "id": "b",
                              "text": "obsessions (intrusive thoughts) + compulsions (repetitive behaviors)"
                    },
                    {
                              "id": "c",
                              "text": "only compulsions"
                    },
                    {
                              "id": "d",
                              "text": "panic attacks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OCD",
                              "statement": "Obsessions + compulsions cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OCD involves obsessions (intrusive, distressing thoughts) and compulsions (repetitive behaviors performed to reduce anxiety) — a cycle that temporarily relieves but maintains anxiety.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Obsessions + compulsions",
          "commonErrors": [
                    "Thinking OCD is just cleanliness — it involves various obsessions."
          ]
},
        },
        {
          id: "appsych-u4-anxiety-disorders-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "PTSD develops after ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any stressful event"
                    },
                    {
                              "id": "b",
                              "text": "trauma exposure (combat, assault, disaster)"
                    },
                    {
                              "id": "c",
                              "text": "genetic factors only"
                    },
                    {
                              "id": "d",
                              "text": "childhood only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "PTSD",
                              "statement": "Trauma-induced disorder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PTSD develops after exposure to traumatic events — combat, sexual assault, natural disasters — causing flashbacks, nightmares, hypervigilance, avoidance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Not everyone exposed develops PTSD — vulnerability factors matter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Trauma exposure",
          "commonErrors": [
                    "Thinking any stress causes PTSD — requires traumatic event."
          ]
},
        },
        {
          id: "appsych-u4-anxiety-disorders-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Exposure therapy for phobias typically involves how many gradual steps? Enter a typical number (e.g., 5).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Steps",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hierarchy",
                              "statement": "Typically 4-8 gradual exposure steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exposure therapy uses a fear hierarchy of ~4-8 gradual steps — from imagined to real exposure — allowing habituation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $5$ (typical range 4-8).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Expecting single-step exposure — it's gradual."
          ]
},
        },
        {
          id: "appsych-u4-anxiety-disorders-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the symptoms of GAD, panic disorder, and PTSD. What distinguishes each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Anxiety disorders",
                              "statement": "Different patterns of anxiety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GAD: chronic, excessive worry about everyday events lasting 6+ months — diffuse anxiety without specific trigger; physical symptoms (tension, fatigue).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Panic disorder: sudden, intense fear attacks (panic attacks) with physical symptoms (racing heart, shortness of breath, derealization) — fear of fear itself.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "PTSD: follows trauma exposure — intrusive memories/flashbacks, avoidance, negative mood, hypervigilance; anxiety is trauma-linked rather than generalized.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "GAD = chronic worry; Panic = acute attacks; PTSD = trauma response",
          "commonErrors": [
                    "Conflating the disorders — different triggers and symptom patterns."
          ]
},
        },
        {
          id: "appsych-u4-anxiety-disorders-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether anxiety disorders are 'real' illnesses or just excessive worry. What evidence supports the medical model?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Medical vs. psychological model",
                              "statement": "Is anxiety a disease?"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Medical evidence: anxiety disorders show biological correlates — amygdala hyperactivity, altered neurotransmitters (low GABA, serotonin); SSRIs effectively treat them; twin studies show genetic heritability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Psychological evidence: cognitive biases (attention to threat), learning history (classical conditioning of fear), trauma exposure contribute — suggesting environmental factors matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biopsychosocial view: most disorders result from interaction of biology, psychology, and environment — not purely 'real' or 'imagined.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: anxiety disorders are real medical conditions with biological basis — but psychological and social factors influence onset and severity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Anxiety disorders are real conditions with biological and psychological factors",
          "commonErrors": [
                    "Dismissing as 'just worry' — they involve measurable biological changes."
          ]
},
        },
      ],
    },
  ],
};
