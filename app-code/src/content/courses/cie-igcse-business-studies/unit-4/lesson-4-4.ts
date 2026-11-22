import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "cieibs-u4-lesson-4-4",
  code: "4-4",
  title: "People in Depth: Motivation, Recruitment and Leadership",
  goal: "I CAN apply motivation theories, explain recruitment and training, and assess leadership styles.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Human resources section",
  ],
  vocabulary: [
    {
      term: "Maslow's hierarchy",
      definition: "Five levels of human needs motivating behaviour.",
    },
    {
      term: "Herzberg's theory",
      definition:
        "Hygiene factors prevent dissatisfaction; motivators create satisfaction.",
    },
    {
      term: "Recruitment",
      definition: "The process of finding and hiring new employees.",
    },
    {
      term: "Training",
      definition: "Developing employees' skills for their roles.",
    },
    {
      term: "Autocratic leadership",
      definition: "Leader makes all decisions alone.",
    },
    {
      term: "Democratic leadership",
      definition: "Leader consults employees before deciding.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s4-people",
      title: "Motivation, recruitment and leadership",
      skill: "Apply motivation theories and assess people-management choices.",
      lesson: {
        sections: [
          {
            heading: "Motivation theories",
            body: "Maslow's hierarchy ranks needs: physiological, safety, social, esteem, self-actualisation — lower needs must be met before higher ones motivate. Herzberg distinguishes hygiene factors (pay, conditions — their absence causes dissatisfaction) from motivators (achievement, recognition, responsibility — their presence creates satisfaction). Taylor's scientific management pays by output; Mayo's human relations emphasises social needs.",
          },
          {
            heading: "Recruitment and training",
            body: "Recruitment involves job analysis, advertising, selecting and appointing. Internal recruitment develops existing staff; external brings new skills. Induction introduces new starters; on-the-job training learns while working; off-the-job training (courses, workshops) builds specific skills. Training improves productivity, motivation and flexibility.",
          },
          {
            heading: "Leadership and communication",
            body: "Autocratic leaders decide alone — fast but demotivating. Democratic leaders consult — slower but committed staff. Laissez-faire leaders delegate fully — suits expert teams. Effective communication flows downward (instructions), upward (feedback) and horizontally (between departments); barriers include poor channels, language and overload.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-pp-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is Maslow's hierarchy of needs?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Five levels of human needs that motivate behaviour",
          },
          { id: "b", text: "A list of business objectives" },
          { id: "c", text: "A recruitment technique" },
          { id: "d", text: "A method of calculating profit" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Maslow",
            statement: "Five-level needs hierarchy.",
          },
        ],
        steps: [
          {
            reasoning:
              "Maslow's hierarchy ranks human needs from basic (physiological) to advanced (self-actualisation).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** Five levels of human needs that motivate behaviour",
      },
    },
    {
      id: "cieibs-u4-pp-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "According to Herzberg, what are 'hygiene factors'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Financial incentives only" },
          { id: "b", text: "Factors whose absence causes dissatisfaction" },
          { id: "c", text: "Factors that create job satisfaction" },
          { id: "d", text: "Training methods for new staff" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Hygiene factors",
            statement: "Absence causes dissatisfaction.",
          },
        ],
        steps: [
          {
            reasoning:
              "Hygiene factors (pay, conditions, security) prevent dissatisfaction but do not create satisfaction.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Factors whose absence causes dissatisfaction",
      },
    },
    {
      id: "cieibs-u4-pp-q3",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Name the five levels of Maslow's hierarchy in order.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Maslow's hierarchy",
            statement: "Physiological to self-actualisation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Physiological, safety, social, esteem, self-actualisation — in that order.",
            marks: 2,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Physiological, safety, social, esteem, self-actualisation",
      },
    },
    {
      id: "cieibs-u4-pp-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'autocratic' leadership?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Leader delegates everything" },
          { id: "b", text: "Leader shares ownership" },
          { id: "c", text: "Leader makes all decisions alone" },
          { id: "d", text: "Leader consults employees before deciding" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Autocratic leadership",
            statement: "Decisions alone.",
          },
        ],
        steps: [
          {
            reasoning:
              "Autocratic leadership makes all decisions without consultation — fast but can demotivate.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Leader makes all decisions alone",
      },
    },
    {
      id: "cieibs-u4-pp-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the first step of the recruitment process?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Job analysis — defining the role's requirements" },
          { id: "b", text: "Offering the job" },
          { id: "c", text: "Training the new employee" },
          { id: "d", text: "Interviewing candidates" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Recruitment",
            statement: "Job analysis first.",
          },
        ],
        steps: [
          {
            reasoning:
              "Recruitment begins with job analysis — defining the skills and qualities the role requires.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Job analysis — defining the role's requirements",
      },
    },
    {
      id: "cieibs-u4-pp-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how Herzberg's theory differs from Maslow's.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Herzberg",
            statement: "Hygiene vs motivators.",
          },
          {
            kind: "definition",
            name: "Maslow",
            statement: "Hierarchy of needs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Maslow sees needs as a hierarchy — lower needs must be satisfied before higher ones motivate.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Herzberg sees two separate factors: hygiene factors prevent dissatisfaction while motivators (achievement, recognition, responsibility) create satisfaction.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "In practice both suggest pay alone is insufficient — recognition and growth opportunities motivate more than hygiene factors.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Maslow = hierarchy; Herzberg = two-factor (hygiene vs motivators).",
        commonErrors: ["Treating the theories as identical."],
      },
    },
    {
      id: "cieibs-u4-pp-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare internal and external recruitment.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Internal recruitment",
            statement: "Promote existing staff.",
          },
          {
            kind: "definition",
            name: "External recruitment",
            statement: "Hire from outside.",
          },
        ],
        steps: [
          {
            reasoning:
              "Internal recruitment promotes existing staff — boosts motivation, saves time and cost, and the candidate is known, but limits new ideas and may cause resentment among unsuccessful staff.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "External recruitment brings fresh skills and perspectives but costs more, takes longer, and new hires need induction.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The choice depends on whether the role needs proven internal knowledge or new external expertise.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Internal = cheaper, motivating, limited pool; external = new skills, costlier.",
        commonErrors: ["Claiming internal recruitment always better."],
      },
    },
    {
      id: "cieibs-u4-pp-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two benefits of training employees.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Training benefits",
            statement: "Productivity, flexibility, motivation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Training improves productivity and reduces errors — workers perform tasks correctly and efficiently.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It increases flexibility — multi-skilled workers can cover different roles and adapt to change.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Training boosts motivation and retention — employees feel valued and are less likely to leave.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Productivity, flexibility and motivation gains.",
        commonErrors: ["Listing training methods rather than benefits."],
      },
    },
    {
      id: "cieibs-u4-pp-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare on-the-job and off-the-job training.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "On-the-job",
            statement: "Learn while working.",
          },
          {
            kind: "definition",
            name: "Off-the-job",
            statement: "Courses and workshops.",
          },
        ],
        steps: [
          {
            reasoning:
              "On-the-job training (shadowing, mentoring) is practical and cheap but can disrupt production and quality varies with the trainer.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Off-the-job training (courses, workshops) is structured and consistent but costs more and removes workers from production.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Many firms combine both: off-the-job for core skills, on-the-job for practical application.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "On-the-job = practical/cheap; off-the-job = structured/costly.",
        commonErrors: ["Treating them as alternatives only."],
      },
    },
    {
      id: "cieibs-u4-pp-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which leadership style involves the leader delegating most decisions?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Bureaucratic" },
          { id: "b", text: "Autocratic" },
          { id: "c", text: "Democratic" },
          { id: "d", text: "Laissez-faire" },
        ],
        dorrectChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Laissez-faire",
            statement: "Delegates fully.",
          },
        ],
        steps: [
          {
            reasoning:
              "Laissez-faire leadership delegates most decisions to employees — suits expert, self-motivated teams.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Laissez-faire",
      },
    },
    {
      id: "cieibs-u4-pp-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) Name the three directions of communication flow. (b) Which carries instructions downward?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Communication flow",
            statement: "Downward, upward, horizontal.",
          },
        ],
        steps: [
          {
            reasoning:
              "The three directions are downward, upward and horizontal (across departments).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Downward communication carries instructions, policies and feedback from management to staff.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "a) Downward, upward, horizontal; b) Downward",
      },
    },
    {
      id: "cieibs-u4-pp-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two advantages of democratic leadership.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Democratic leadership",
            statement: "Consultation builds commitment.",
          },
        ],
        steps: [
          {
            reasoning:
              "Consulting employees uses their knowledge — decisions are better informed and problems are identified early.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Involvement builds commitment and motivation — staff feel valued and are more likely to support decisions.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It develops employees' skills and prepares them for future leadership roles.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Better decisions and higher motivation through involvement.",
        commonErrors: ["Ignoring the time cost of consultation."],
      },
    },
    {
      id: "cieibs-u4-pp-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether democratic leadership is always the best leadership style.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Style suitability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: democratic leadership is often effective but not universally best.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: better decisions, motivated staff, developed skills.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: slow in crises, requires skilled and willing staff, may fail with inexperienced teams or urgent decisions.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: democratic suits stable, skilled teams; autocratic may be needed in emergencies.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Effective in stable skilled teams; context-dependent.",
        commonErrors: ["Declaring one style universally best."],
      },
    },
    {
      id: "cieibs-u4-pp-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether training is a worthwhile investment for a small business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "technique", name: "Assessment", statement: "Training ROI." },
        ],
        steps: [
          {
            reasoning:
              "Thesis: training benefits a small business but must be chosen carefully given limited resources.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: productivity gains, fewer errors, flexibility, motivation and retention of key staff.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Costs: time and money; risk that trained staff leave for competitors; may be too costly for very small firms.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: targeted training pays off; indiscriminate spending does not.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Worthwhile when targeted at key skills.",
        commonErrors: ["Ignoring the risk of staff leaving."],
      },
    },
    {
      id: "cieibs-u4-pp-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the view that money is the best motivator.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Money as motivator.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: money motivates but is not the best or only motivator.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: pay is a hygiene factor — its absence demotivates, and piece-rate pay can boost output.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: Herzberg's motivators (achievement, recognition, responsibility) create lasting satisfaction; money alone has diminishing returns.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: adequate pay is essential but recognition and growth motivate more deeply.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Money is necessary but not sufficient as a motivator.",
        commonErrors: ["One-sided view on pay."],
      },
    },
    {
      id: "cieibs-u4-pp-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the impact of poor communication on a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Communication barriers.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: poor communication causes errors, delays and demotivation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Effects: instructions misunderstood → mistakes and rework; poor upward feedback → management unaware of problems; horizontal gaps → departments fail to coordinate.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Barriers: unclear channels, jargon, information overload, physical distance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: communication is vital — clear channels and feedback loops are essential management tools.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Poor communication causes errors and demotivation.",
        commonErrors: ["Listing barriers without consequences."],
      },
    },
    {
      id: "cieibs-u4-pp-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'induction' in the employment context?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Introducing new employees to the organisation and their role",
          },
          { id: "b", text: "Firing an employee" },
          { id: "c", text: "Promoting an employee" },
          { id: "d", text: "Writing a job advert" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Induction",
            statement: "Welcome and orient new starters.",
          },
        ],
        steps: [
          {
            reasoning:
              "Induction introduces new employees to the organisation, its rules, culture and their role.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Introducing new employees to the organisation and their role",
      },
    },
    {
      id: "cieibs-u4-pp-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why Maslow's hierarchy is useful for managers.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Maslow utility",
            statement: "Diagnose employee needs.",
          },
        ],
        steps: [
          {
            reasoning:
              "It helps managers identify which needs employees are trying to satisfy — diagnosing what motivates them.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It shows that basic needs (pay, security) must be met before higher needs (recognition, growth) can motivate.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Managers can tailor rewards: adequate pay first, then recognition, responsibility and development opportunities.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Helps managers diagnose needs and prioritise motivators.",
      },
    },
    {
      id: "cieibs-u4-pp-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the steps in the recruitment process.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "skill",
            name: "Recruitment process",
            statement: "Analysis to appointment.",
          },
        ],
        steps: [
          {
            reasoning:
              "Job analysis defines the role's tasks and required skills.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning: "Advertising or internal notice attracts candidates.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Selection through applications, interviews and tests leads to appointment and induction.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Job analysis → advertise → select → appoint → induct.",
      },
    },
    {
      id: "cieibs-u4-pp-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether a business should promote from within or hire externally for senior roles.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Internal vs external promotion.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: internal promotion motivates staff but may lack fresh perspectives.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages of internal: proven performance, motivation, lower cost, continuity.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages of external: new ideas, specialist skills, outside experience, can challenge existing culture.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: internal promotion suits stability; external suits roles needing new expertise or change.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Context-dependent; internal for stability, external for new skills.",
        commonErrors: ["Absolute recommendation without context."],
      },
    },
      ],
    },
  ],
};
