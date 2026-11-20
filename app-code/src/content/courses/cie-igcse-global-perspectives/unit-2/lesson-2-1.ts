import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ciegp-u2-lesson-2-1",
  code: "2-1",
  title: "Advanced Research Methods",
  goal: "I CAN conduct rigorous primary research ethically and triangulate findings.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: advanced research", "0457: methods"],
  
  vocabulary: [
    { term: "Primary research", definition: "Collecting your own data first-hand." },
    { term: "Survey", definition: "Structured questionnaire collecting responses." },
    { term: "Interview", definition: "Face-to-face or remote questioning." },
    { term: "Sample", definition: "Subset of population studied." },
    { term: "Triangulation", definition: "Cross-checking via multiple methods/sources." },
    { term: "Ethics", definition: "Moral principles guiding research conduct." },
  ],
  concepts: [
    {
      id: "ciegp-u2-s1-advres",
      title: "Advanced research methods",
      skill: "Design and conduct primary research at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Primary research design",
            body: "Surveys need clear questions, representative samples, unbiased wording. Interviews give depth but small samples. Choose method matching research question: surveys for breadth, interviews for depth.",
          },
          {
            heading: "Ethics and rigour",
            body: "Obtain consent, ensure anonymity, avoid harm, be honest about limitations. Triangulate: combine methods and sources to verify findings. Acknowledge sample limitations.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "surveys, interviews, observation" },
          { name: "Triangulation", statement: "multiple methods verify" },
          { name: "Ethics", statement: "consent, anonymity, no harm" },
        ],
        workedExample: {
          problem: "Design primary research on 'student attitudes to homework'.",
          solution: "Survey 100 students (random sample) + 10 interviews for depth. Questions: frequency, perceived value, stress levels. Ensure consent + anonymity.",
        },
      },
      questions: [
        {
          id: "ciegp-u2-ar-q1",
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
                              "statement": "First-hand data."
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
          id: "ciegp-u2-ar-q2",
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
                              "statement": "Multi-method verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cross-check via multiple methods/sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases reliability/validity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multi-method verification"
},
        },
        {
          id: "ciegp-u2-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What ethical rules apply to surveying people about sensitive topics?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research ethics",
                              "statement": "Consent, anonymity, no harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informed consent + right to withdraw.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anonymity/confidentiality.",
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
          id: "ciegp-u2-ar-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary research, survey, interview, sample, triangulation, ethics. (b) When is primary better than secondary? (c) What makes a representative sample? (d) Why avoid leading questions? (e) What is validity vs reliability? (f) Give 3 ethical rules for interviews. (g) How would you research 'should uniforms be compulsory?' (h) Evaluate limitations of your method in (g).",
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
      id: "ciegp-u2-ar-notes",
      title: "Advanced research — notes",
      summary: "Primary research needs design, ethics, representative samples; triangulate for reliability.",
      sections: [
        { heading: "Key idea", body: "Rigorous research acknowledges limitations honestly." },
        { heading: "Ethics", body: "Consent, anonymity, no harm — always." },
      ],
    },
  ],
};
