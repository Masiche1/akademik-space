import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cilgp-u2-lesson-2-1",
  code: "2-1",
  title: "Deep Research on Global Challenges",
  goal: "I CAN conduct in-depth research on complex global challenges using multiple methods.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Research", "Cambridge Global Perspectives skills: research"],
  stage: 9,
  vocabulary: [
    { term: "Primary research", definition: "Collecting your own data — surveys, interviews." },
    { term: "Secondary research", definition: "Using existing published data." },
    { term: "Triangulation", definition: "Cross-checking findings via multiple methods/sources." },
    { term: "Sample", definition: "Subset of population studied." },
    { term: "Validity", definition: "Whether research measures what it claims." },
    { term: "Ethics", definition: "Moral principles guiding research conduct." },
  ],
  concepts: [
    {
      id: "cilgp-u2-s1-deepres",
      title: "Advanced research methods",
      skill: "Combine primary and secondary research ethically at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Primary vs secondary",
            body: "Secondary research uses existing data — fast but may be outdated or biased. Primary research (surveys, interviews, observations) gives fresh relevant data but needs careful design: representative samples, clear questions, ethical consent.",
          },
          {
            heading: "Rigour",
            body: "Triangulate: combine methods and sources. Check validity (does it measure the right thing?), reliability (consistent results?), and acknowledge limitations in your findings.",
          },
        ],
        keyFormulas: [
          { name: "Triangulation", statement: "multiple methods/sources" },
          { name: "Primary", statement: "collect own data" },
          { name: "Secondary", statement: "use existing data" },
        ],
        workedExample: {
          problem: "Research 'youth attitudes to climate change' — design a method.",
          solution: "Secondary: review surveys/reports. Primary: questionnaire to 100 students + 5 interviews. Triangulate findings; note sample limitations.",
        },
      },
      questions: [
        {
          id: "cilgp-u2-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is primary research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Collecting your own data first-hand"
                    },
                    {
                              "id": "b",
                              "text": "Reading books"
                    },
                    {
                              "id": "c",
                              "text": "Using Wikipedia"
                    },
                    {
                              "id": "d",
                              "text": "Guessing answers"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary research",
                              "statement": "First-hand data collection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = you collect the data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Collecting own data"
},
        },
        {
          id: "cilgp-u2-dr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is triangulation and why use it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Triangulation",
                              "statement": "Multiple verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cross-check findings via multiple methods/sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases reliability/validity of conclusions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multi-method verification"
},
        },
        {
          id: "cilgp-u2-dr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What ethical considerations apply when surveying people about sensitive topics?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research ethics",
                              "statement": "Consent, anonymity, sensitivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informed consent + right to withdraw.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anonymity/confidentiality of responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoid harm; sensitive wording.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Consent, anonymity, no harm"
},
        },
        {
          id: "cilgp-u2-dr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary research, secondary research, triangulation, sample, validity, ethics. (b) When is primary research better? (c) What is a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate the limitations of your method in (g).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research methods",
                              "statement": "Primary, ethics, validity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Fresh, specific, relevant data needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Reflects population diversity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Biases responses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Validity=right thing; reliability=consistent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid ethical rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid mixed-methods plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid limitations acknowledged.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Advanced research methodology."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-dr-notes",
      title: "Deep research — notes",
      summary: "Primary=own data; secondary=existing. Triangulate, check validity/reliability, follow ethics.",
      sections: [
        { heading: "Key idea", body: "Rigorous research acknowledges limitations honestly." },
        { heading: "Ethics", body: "Consent, anonymity, no harm — always." },
      ],
    },
  ],
};
