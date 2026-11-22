import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ebz11-u5-lesson-5-1",
  code: "5-1",
  title: "Human Resources: Recruitment and Training",
  goal: "I CAN explain recruitment, selection and training processes.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources"],
  vocabulary: [
    {
      term: "Human resources (HR)",
      definition: "Managing people — recruitment, training, motivation.",
    },
    {
      term: "Recruitment",
      definition: "Process of finding and hiring new staff.",
    },
    {
      term: "Job description",
      definition: "Document describing role responsibilities.",
    },
    {
      term: "Job specification",
      definition: "Person specification — skills, qualifications needed.",
    },
    {
      term: "Induction training",
      definition: "Initial training for new employees.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u5-recruitment",
      title: "Recruitment and Selection",
      skill: "Understand the recruitment process from job analysis to hiring.",
      lesson: {
        sections: [
          {
            heading: "Recruitment process",
            body: "**Job analysis**: identify what the role involves — tasks, skills, qualifications. **Job description**: written summary of role. **Person specification**: ideal candidate — experience, qualifications, personal qualities.\n\n**Advertising**: online job boards, newspapers, social media, recruitment agencies, internal promotion. **Selection**: application forms, CV screening, interviews, tests (aptitude, personality), references. **Offer**: contract, salary, start date.",
          },
          {
            heading: "Internal vs external recruitment",
            body: "**Internal**: promote existing staff — motivation, knows business, cheaper, faster. **External**: new blood, fresh skills, wider talent pool. **Best practice**: balance both — promote where possible, recruit externally for new skills.\n\n**Legal requirements**: equal opportunities, discrimination laws, right to work checks, contracts.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A business needs a new marketing manager. Describe the process.",
          solution:
            "Job analysis → job description/spec → advertise → screen CVs → interview → offer.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-recruitment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between job description and person specification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Description = candidate; spec = role" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Spec = salary; description = benefits" },
              {
                id: "d",
                text: "Job description = role tasks; spec = candidate requirements",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "JD vs spec",
                statement: "JD = role; spec = ideal candidate.",
              },
            ],
            steps: [
              {
                reasoning: "JD = role tasks; spec = candidate requirements.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Role vs candidate",
            commonErrors: ["Swapped."],
          },
        },
        {
          id: "ebz11-u5-recruitment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of internal recruitment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal recruitment",
                statement: "Motivation, knowledge, cheaper.",
              },
            ],
            steps: [
              {
                reasoning: "Motivates staff — shows progression possible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Candidate knows business — less training needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cheaper and faster than external.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Motivation, business knowledge, cheaper/faster.",
            commonErrors: ["External advantages.", "Only one."],
          },
        },
        {
          id: "ebz11-u5-recruitment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might choose external recruitment over internal promotion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External recruitment",
                statement: "Fresh skills, wider pool, objectivity.",
              },
            ],
            steps: [
              {
                reasoning: "Access wider talent pool — new skills/ideas.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Brings fresh perspective — avoids complacency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Internal candidates may not be suitable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More objective selection process.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Wider pool, fresh skills, objectivity — when internal lacks skills.",
            commonErrors: ["Always internal better.", "No reason."],
          },
        },
        {
          id: "ebz11-u5-recruitment-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company needs to hire 10 warehouse workers quickly.",
          parts: [
            {
              label: "a",
              prompt: "Describe the recruitment process.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two selection methods.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recruitment planning",
                statement: "Efficient process for volume hiring.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Job analysis → JD/spec → advertise → screen → interview → offer.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Use job boards/agency for reach.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Group interviews to save time.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(b) Aptitude tests — physical/mental suitability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) References/background checks.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) standard process+group interviews (b) aptitude tests+references",
            commonErrors: ["No process.", "No selection."],
          },
        },
      ],
    },
    {
      id: "ebz11-u5-training",
      title: "Training and Development",
      skill: "Understand types of training and their benefits.",
      lesson: {
        sections: [
          {
            heading: "Types of training",
            body: "**Induction**: first days/weeks — company policies, safety, role basics. **On-the-job**: learn while working — shadowing, mentoring, supervised practice. **Off-the-job**: courses, workshops, college — formal qualifications. **In-house**: company-run training — specific to business needs.\n\n**Development**: long-term growth — leadership programmes, career progression, further education.",
          },
          {
            heading: "Benefits of training",
            body: "**For business**: higher productivity, better quality, fewer mistakes, motivation, adaptability to change. **For employees**: better skills, career progression, job satisfaction, higher earnings.\n\n**Costs**: time away from work, course fees, trainer costs. **ROI**: well-trained staff are more productive and loyal — usually worth the investment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "New staff member joins a bank. What training first?",
          solution:
            "Induction — policies, systems, compliance, then role-specific on-the-job training.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-training-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is induction training?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "External degree" },
              { id: "b", text: "Annual refresher" },
              { id: "c", text: "Initial training for new employees" },
              { id: "d", text: "Advanced leadership course" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Induction",
                statement: "Initial training — policies, safety, role basics.",
              },
            ],
            steps: [
              {
                reasoning: "Induction = initial training.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Initial training",
            commonErrors: ["Advanced confused."],
          },
        },
        {
          id: "ebz11-u5-training-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of training for employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training benefits",
                statement: "Skills, satisfaction, career progression.",
              },
            ],
            steps: [
              {
                reasoning: "Develop skills → better job performance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Job satisfaction and motivation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Career progression and higher earnings.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Skills, satisfaction, career progression.",
            commonErrors: ["Business benefits only.", "Only one."],
          },
        },
        {
          id: "ebz11-u5-training-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare on-the-job and off-the-job training.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Training types",
                statement: "Practical vs theoretical.",
              },
            ],
            steps: [
              {
                reasoning: "On-the-job: learn by doing, practical, immediate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "On-the-job: no formal qualification, may disrupt work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Off-the-job: formal, structured, qualification.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Off-the-job: costlier, time away from work.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "On-job = practical/immediate; off-job = formal/qualified but costly.",
            commonErrors: ["Same thing.", "No comparison."],
          },
        },
        {
          id: "ebz11-u5-training-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business wants to improve staff skills but has a limited budget.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two low-cost training methods.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain two benefits of investing in training.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training ROI",
                statement: "Low-cost methods still yield benefits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) On-the-job mentoring — experienced staff train new.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) In-house workshops — internal trainers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Higher productivity/quality — fewer mistakes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Better motivation/retention — less turnover.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) mentoring/workshops (b) productivity/motivation",
            commonErrors: ["Expensive only.", "No benefit."],
          },
        },
      ],
    },
  ],
};
