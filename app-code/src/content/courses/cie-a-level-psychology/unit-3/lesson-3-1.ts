import type { Lesson } from "../../../types.ts";

export const lesson731: Lesson = {
  id: "ciealpsy-u3-lesson-3-1",
  code: "3-1",
  title: "Treatment: CBT and Drug Therapy",
  goal: "I CAN explain CBT and drug therapy for psychological disorders.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 2: treatments"],
  
  vocabulary: [
    { term: "CBT", definition: "Cognitive behavioural therapy — combines thoughts and behaviour." },
    { term: "Cognitive restructuring", definition: "Challenging and replacing negative thoughts." },
    { term: "SSRI", definition: "Selective serotonin reuptake inhibitor." },
    { term: "Placebo effect", definition: "Improvement due to belief, not treatment." },
    { term: "Ethical issues", definition: "Consent, deception, harm." },
    { term: "Symptom vs cause", definition: "Treating symptoms vs underlying causes." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s1-treat",
      title: "Treatments",
      skill: "Explain CBT and drug therapy.",
      lesson: {
        sections: [
          {
            heading: "CBT",
            body: "Combines cognitive (change thoughts) + behavioural (change actions). Used for depression, anxiety, OCD. Short-term, structured. Evidence-based, effective. Requires motivation, insight.",
          },
          {
            heading: "Drug therapy",
            body: "Antidepressants (SSRIs increase serotonin), anxiolytics (reduce anxiety), antipsychotics (schizophrenia). Quick symptom relief. Side effects, dependence, placebo effects.",
          },
          {
            heading: "Evaluation",
            body: "CBT: addresses causes, long-lasting, but requires effort. Drugs: fast, accessible, but symptoms return without drugs, side effects.",
          },
        ],
        keyFormulas: [
          { name: "CBT", statement: "thoughts + behaviour" },
          { name: "SSRI", statement: "serotonin" },
          { name: "Placebo", statement: "belief effect" },
        ],
        workedExample: {
          problem: "Compare CBT vs drug therapy for depression.",
          solution: "CBT: addresses cognitive causes, longer-lasting, requires effort. Drugs: faster, easier, but relapse risk, side effects.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-trt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is CBT?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cognitive behavioural therapy"
                    },
                    {
                              "id": "b",
                              "text": "A type of drug"
                    },
                    {
                              "id": "c",
                              "text": "A brain scan"
                    },
                    {
                              "id": "d",
                              "text": "A memory technique"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Thoughts + behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT = cognitive + behavioural therapy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cognitive behavioural therapy"
},
        },
        {
          id: "ciealpsy-u3-trt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are SSRIs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SSRI",
                              "statement": "Antidepressant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selective serotonin reuptake inhibitors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increase serotonin availability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Serotonin reuptake inhibitors"
},
        },
        {
          id: "ciealpsy-u3-trt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the placebo effect?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Placebo",
                              "statement": "Belief effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improvement due to belief, not treatment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complicates treatment evaluation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Need double-blind studies to control.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Belief effect"
},
        },
        {
          id: "ciealpsy-u3-trt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CBT, cognitive restructuring, SSRI, placebo effect, ethical issues, symptom vs cause. (b) What is CBT? (c) What are SSRIs? (d) What is placebo effect? (e) How does CBT work? (f) How do drugs work? (g) Compare CBT vs drugs. (h) Evaluate drug therapy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Treatment",
                              "statement": "CBT/drugs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Thoughts + behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Serotonin drugs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Belief effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Change thoughts + actions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Chemical balance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) CBT addresses causes; drugs symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Fast but side effects, relapse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Treatment comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-trt-notes",
      title: "Treatments — notes",
      summary: "CBT addresses causes; drugs treat symptoms. Both have strengths/limits.",
      sections: [
        { heading: "Key idea", body: "Different approaches target different aspects of disorders." },
        { heading: "Evaluation", body: "CBT evidence-based but effortful; drugs fast but side effects." },
      ],
    },
  ],
};
