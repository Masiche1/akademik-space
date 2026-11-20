module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson731",
    lesson: {
      id: "ciealpsy-u3-lesson-3-1", code: "3-1",
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
      concept: {
        id: "ciealpsy-u3-s1-treat", title: "Treatments",
        skill: "Explain CBT and drug therapy.",
        sections: [
          { heading: "CBT", body: "Combines cognitive (change thoughts) + behavioural (change actions). Used for depression, anxiety, OCD. Short-term, structured. Evidence-based, effective. Requires motivation, insight." },
          { heading: "Drug therapy", body: "Antidepressants (SSRIs increase serotonin), anxiolytics (reduce anxiety), antipsychotics (schizophrenia). Quick symptom relief. Side effects, dependence, placebo effects." },
          { heading: "Evaluation", body: "CBT: addresses causes, long-lasting, but requires effort. Drugs: fast, accessible, but symptoms return without drugs, side effects." },
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
        questions: [
          {
            id: "ciealpsy-u3-trt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is CBT?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Cognitive behavioural therapy" }, { id: "b", text: "A type of drug" }, { id: "c", text: "A brain scan" }, { id: "d", text: "A memory technique" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "CBT", statement: "Thoughts + behaviour." }],
              steps: [{ reasoning: "CBT = cognitive + behavioural therapy.", marks: 1, markCode: "M" }],
              finalAnswer: "Cognitive behavioural therapy",
            },
          },
          {
            id: "ciealpsy-u3-trt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are SSRIs?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "SSRI", statement: "Antidepressant." }],
              steps: [
                { reasoning: "Selective serotonin reuptake inhibitors.", marks: 1, markCode: "M" },
                { reasoning: "Increase serotonin availability.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Serotonin reuptake inhibitors",
            },
          },
          {
            id: "ciealpsy-u3-trt-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the placebo effect?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Placebo", statement: "Belief effect." }],
              steps: [
                { reasoning: "Improvement due to belief, not treatment.", marks: 1, markCode: "M" },
                { reasoning: "Complicates treatment evaluation.", marks: 1, markCode: "M" },
                { reasoning: "Need double-blind studies to control.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Belief effect",
            },
          },
          {
            id: "ciealpsy-u3-trt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define CBT, cognitive restructuring, SSRI, placebo effect, ethical issues, symptom vs cause. (b) What is CBT? (c) What are SSRIs? (d) What is placebo effect? (e) How does CBT work? (f) How do drugs work? (g) Compare CBT vs drugs. (h) Evaluate drug therapy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Treatment", statement: "CBT/drugs." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Thoughts + behaviour.", marks: 1, markCode: "M" },
                { reasoning: "(c) Serotonin drugs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Belief effect.", marks: 1, markCode: "M" },
                { reasoning: "(e) Change thoughts + actions.", marks: 1, markCode: "M" },
                { reasoning: "(f) Chemical balance.", marks: 1, markCode: "M" },
                { reasoning: "(g) CBT addresses causes; drugs symptoms.", marks: 1, markCode: "M" },
                { reasoning: "(h) Fast but side effects, relapse.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Treatment comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u3-trt-notes", title: "Treatments — notes",
      summary: "CBT addresses causes; drugs treat symptoms. Both have strengths/limits.",
      sections: [
        { heading: "Key idea", body: "Different approaches target different aspects of disorders." },
        { heading: "Evaluation", body: "CBT evidence-based but effortful; drugs fast but side effects." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson732",
    lesson: {
      id: "ciealpsy-u3-lesson-3-2", code: "3-2",
      title: "Development: Piaget's Theory of Cognitive Development",
      goal: "I CAN explain Piaget's stages of cognitive development.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: development"],
      vocabulary: [
        { term: "Schema", definition: "Mental framework for organising knowledge." },
        { term: "Assimilation", definition: "Fitting new info into existing schema." },
        { term: "Accommodation", definition: "Changing schema to fit new info." },
        { term: "Conservation", definition: "Understanding quantity stays same despite appearance." },
        { term: "Egocentrism", definition: "Inability to see others' perspectives." },
        { term: "Object permanence", definition: "Understanding objects exist when out of sight." },
      ],
      concept: {
        id: "ciealpsy-u3-s2-piaget", title: "Piaget",
        skill: "Explain Piaget's stages.",
        sections: [
          { heading: "Piaget's theory", body: "Children develop through stages. Schemas organise knowledge. Assimilation fits new info; accommodation changes schemas. Stages are universal, sequential." },
          { heading: "Stages", body: "Sensorimotor (0-2): object permanence develops. Preoperational (2-7): egocentrism, no conservation. Concrete operational (7-11): conservation, logical thinking. Formal operational (11+): abstract, hypothetical thinking." },
          { heading: "Evaluation", body: "Strengths: revolutionary, stimulated research. Weaknesses: underestimated children, stage overlap, culture bias." },
        ],
        keyFormulas: [
          { name: "Sensorimotor", statement: "0-2 years" },
          { name: "Preoperational", statement: "2-7 years" },
          { name: "Concrete operational", statement: "7-11 years" },
        ],
        workedExample: {
          problem: "Explain why a 5-year-old fails conservation task.",
          solution: "Preoperational stage — can't understand that quantity stays same despite appearance change (centres on one dimension).",
        },
        questions: [
          {
            id: "ciealpsy-u3-piag-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a schema in Piaget's theory?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Mental framework for organising knowledge" }, { id: "b", text: "A brain structure" }, { id: "c", text: "A memory store" }, { id: "d", text: "A learning method" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Schema", statement: "Mental framework." }],
              steps: [{ reasoning: "Schema = mental framework.", marks: 1, markCode: "M" }],
              finalAnswer: "Mental framework",
            },
          },
          {
            id: "ciealpsy-u3-piag-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between assimilation and accommodation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Assimilation/accommodation", statement: "Fit vs change." }],
              steps: [
                { reasoning: "Assimilation: fit new info into existing schema.", marks: 1, markCode: "M" },
                { reasoning: "Accommodation: change schema for new info.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Fit vs change schema",
            },
          },
          {
            id: "ciealpsy-u3-piag-q3", difficulty: "core", totalMarks: 3,
            stem: "What are Piaget's stages of cognitive development?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "model", name: "Piaget stages", statement: "Four stages." }],
              steps: [
                { reasoning: "Sensorimotor, preoperational, concrete operational, formal operational.", marks: 1, markCode: "M" },
                { reasoning: "Each has age range and characteristics.", marks: 1, markCode: "M" },
                { reasoning: "Sequential, universal development.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Four sequential stages",
            },
          },
          {
            id: "ciealpsy-u3-piag-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define schema, assimilation, accommodation, conservation, egocentrism, object permanence. (b) What is schema? (c) What is assimilation? (d) What is accommodation? (e) What are Piaget's stages? (f) What is conservation? (g) What is egocentrism? (h) Evaluate Piaget's theory.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Piaget", statement: "Cognitive development." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Mental framework.", marks: 1, markCode: "M" },
                { reasoning: "(c) Fit into schema.", marks: 1, markCode: "M" },
                { reasoning: "(d) Change schema.", marks: 1, markCode: "M" },
                { reasoning: "(e) Four stages.", marks: 1, markCode: "M" },
                { reasoning: "(f) Quantity understanding.", marks: 1, markCode: "M" },
                { reasoning: "(g) Others' perspective.", marks: 1, markCode: "M" },
                { reasoning: "(h) Revolutionary but underestimated children.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Piaget analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u3-piag-notes", title: "Piaget — notes",
      summary: "Four stages: sensorimotor→preoperational→concrete→formal operational.",
      sections: [
        { heading: "Key idea", body: "Cognitive development through sequential stages with schemas." },
        { heading: "Evaluation", body: "Revolutionary but underestimated children's abilities." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson733",
    lesson: {
      id: "ciealpsy-u3-lesson-3-3", code: "3-3",
      title: "Development: Vygotsky and Theory of Mind",
      goal: "I CAN explain Vygotsky's sociocultural theory and theory of mind.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 3: development"],
      vocabulary: [
        { term: "Zone of proximal development", definition: "Gap between what child can do alone vs with help." },
        { term: "Scaffolding", definition: "Support that helps child achieve more than alone." },
        { term: "Private speech", definition: "Self-talk guiding behaviour." },
        { term: "Theory of mind", definition: "Understanding others have different beliefs/knowledge." },
        { term: "False belief task", definition: "Test of theory of mind (Sally-Anne)." },
        { term: "Autism", definition: "Developmental disorder affecting social communication." },
      ],
      concept: {
        id: "ciealpsy-u3-s3-vygo", title: "Vygotsky & theory of mind",
        skill: "Explain sociocultural development and theory of mind.",
        sections: [
          { heading: "Vygotsky", body: "Sociocultural: learning through social interaction. ZPD: gap between independent and assisted performance. Scaffolding: support enables achievement. Private speech: self-talk guides learning. More culturally aware than Piaget." },
          { heading: "Theory of mind", body: "Understanding that others have different beliefs, desires, knowledge. Develops ~4 years (false belief tasks). Delayed in autism. Essential for social interaction, empathy, deception." },
        ],
        keyFormulas: [
          { name: "ZPD", statement: "assisted vs independent" },
          { name: "Scaffolding", statement: "temporary support" },
          { name: "ToM", statement: "others' beliefs" },
        ],
        workedExample: {
          problem: "Compare Piaget vs Vygotsky on learning.",
          solution: "Piaget: individual discovery through stages. Vygotsky: social interaction, scaffolding, ZPD — more culturally aware.",
        },
        questions: [
          {
            id: "ciealpsy-u3-vyg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the zone of proximal development?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Gap between independent and assisted performance" }, { id: "b", text: "A memory stage" }, { id: "c", text: "A type of attachment" }, { id: "d", text: "A brain structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "ZPD", statement: "Assisted vs independent." }],
              steps: [{ reasoning: "ZPD = gap between alone and with help.", marks: 1, markCode: "M" }],
              finalAnswer: "Assisted vs independent gap",
            },
          },
          {
            id: "ciealpsy-u3-vyg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is theory of mind?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "ToM", statement: "Others' beliefs." }],
              steps: [
                { reasoning: "Understanding others have different beliefs/knowledge.", marks: 1, markCode: "M" },
                { reasoning: "Develops ~4 years, delayed in autism.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Others' beliefs understanding",
            },
          },
          {
            id: "ciealpsy-u3-vyg-q3", difficulty: "core", totalMarks: 3,
            stem: "What is scaffolding in Vygotsky's theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Scaffolding", statement: "Support." }],
              steps: [
                { reasoning: "Support helping child achieve more than alone.", marks: 1, markCode: "M" },
                { reasoning: "Within ZPD, gradually removed.", marks: 1, markCode: "M" },
                { reasoning: "Enables learning beyond independent ability.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Temporary learning support",
            },
          },
          {
            id: "ciealpsy-u3-vyg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define ZPD, scaffolding, private speech, theory of mind, false belief task, autism. (b) What is ZPD? (c) What is theory of mind? (d) What is scaffolding? (e) How does Vygotsky differ from Piaget? (f) What is private speech? (g) How is theory of mind tested? (h) Compare Piaget vs Vygotsky.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Vygotsky/ToM", statement: "Development." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Assisted vs independent.", marks: 1, markCode: "M" },
                { reasoning: "(c) Others' beliefs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Temporary support.", marks: 1, markCode: "M" },
                { reasoning: "(e) Social vs individual.", marks: 1, markCode: "M" },
                { reasoning: "(f) Self-talk.", marks: 1, markCode: "M" },
                { reasoning: "(g) False belief tasks.", marks: 1, markCode: "M" },
                { reasoning: "(h) Piaget individual; Vygotsky social.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Vygotsky/ToM analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u3-vyg-notes", title: "Vygotsky & ToM — notes",
      summary: "ZPD=assisted learning; scaffolding=support. ToM=others' beliefs.",
      sections: [
        { heading: "Key idea", body: "Learning is social — scaffolding enables development." },
        { heading: "ToM", body: "Understanding others' mental states — key for social interaction." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson734",
    lesson: {
      id: "ciealpsy-u3-lesson-3-4", code: "3-4",
      title: "Research Methods: Experimental Design",
      goal: "I CAN describe experimental designs and research methods.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 1: research methods"],
      vocabulary: [
        { term: "Independent variable", definition: "Variable manipulated by researcher." },
        { term: "Dependent variable", definition: "Variable measured." },
        { term: "Confounding variable", definition: "Variable affecting results unintentionally." },
        { term: "Independent groups design", definition: "Different participants in each condition." },
        { term: "Repeated measures design", definition: "Same participants in all conditions." },
        { term: "Matched pairs design", definition: "Participants matched on key variables." },
      ],
      concept: {
        id: "ciealpsy-u3-s4-exp", title: "Experimental design",
        skill: "Describe experimental designs and methods.",
        sections: [
          { heading: "Experimental designs", body: "Independent groups: different participants each condition (no order effects, individual differences). Repeated measures: same participants (controls individual differences, but practice/fatigue effects). Matched pairs: pairs matched on variables (combines benefits, but time-consuming)." },
          { heading: "Research methods", body: "Laboratory experiment: controlled, high internal validity. Field experiment: natural setting, higher ecological validity. Natural experiment: researcher observes natural IV. Quasi-experiment: IV not manipulated." },
          { heading: "Strengths/weaknesses", body: "Lab: control but artificial. Field: realistic but less control. Natural: ethical but no control. Quasi: practical but confounds." },
        ],
        keyFormulas: [
          { name: "IV", statement: "manipulated" },
          { name: "DV", statement: "measured" },
          { name: "Repeated", statement: "same participants" },
        ],
        workedExample: {
          problem: "Choose design for testing effect of music on memory.",
          solution: "Repeated measures: same participants learn with/without music — controls individual differences, counterbalance order.",
        },
        questions: [
          {
            id: "ciealpsy-u3-exp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the independent variable?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Variable manipulated by researcher" }, { id: "b", text: "Variable measured" }, { id: "c", text: "Uncontrolled variable" }, { id: "d", text: "A type of study" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "IV", statement: "Manipulated." }],
              steps: [{ reasoning: "IV = manipulated variable.", marks: 1, markCode: "M" }],
              finalAnswer: "Manipulated variable",
            },
          },
          {
            id: "ciealpsy-u3-exp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is repeated measures design?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Repeated", statement: "Same participants." }],
              steps: [
                { reasoning: "Same participants in all conditions.", marks: 1, markCode: "M" },
                { reasoning: "Controls individual differences but order effects possible.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Same participants all conditions",
            },
          },
          {
            id: "ciealpsy-u3-exp-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare independent groups vs repeated measures.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "comparison", name: "IG vs RM", statement: "Designs." }],
              steps: [
                { reasoning: "IG: different participants, no order effects, individual differences.", marks: 1, markCode: "M" },
                { reasoning: "RM: same participants, controls differences, order effects.", marks: 1, markCode: "M" },
                { reasoning: "Matched pairs combines benefits.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Different vs same participants",
            },
          },
          {
            id: "ciealpsy-u3-exp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define IV, DV, confounding variable, independent groups, repeated measures, matched pairs. (b) What is IV? (c) What is DV? (d) What is repeated measures? (e) What is confounding variable? (f) What are research methods? (g) Compare lab vs field experiments. (h) Choose best design for a study and justify.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Research methods", statement: "Designs." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Manipulated.", marks: 1, markCode: "M" },
                { reasoning: "(c) Measured.", marks: 1, markCode: "M" },
                { reasoning: "(d) Same participants.", marks: 1, markCode: "M" },
                { reasoning: "(e) Unintended influence.", marks: 1, markCode: "M" },
                { reasoning: "(f) Lab, field, natural, quasi.", marks: 1, markCode: "M" },
                { reasoning: "(g) Control vs realism.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid design choice with justification.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Experimental design analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u3-exp-notes", title: "Research methods — notes",
      summary: "IV manipulated, DV measured. Three designs: independent, repeated, matched.",
      sections: [
        { heading: "Key idea", body: "Design choice affects validity, control, and practicality." },
        { heading: "Methods", body: "Lab (control), field (realism), natural (ethical), quasi (practical)." },
      ],
    },
  },
];
