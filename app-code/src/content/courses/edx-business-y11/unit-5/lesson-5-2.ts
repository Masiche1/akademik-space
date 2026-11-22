import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ebz11-u5-lesson-5-2",
  code: "5-2",
  title: "Motivation and Leadership",
  goal: "I CAN explain motivation theories and leadership styles.",
  standards: ["Edexcel IGCSE Business 4BS0 — Human Resources"],
  vocabulary: [
    {
      term: "Motivation",
      definition: "The drive to achieve goals — intrinsic or extrinsic.",
    },
    {
      term: "Intrinsic motivation",
      definition: "Internal satisfaction — achievement, recognition.",
    },
    {
      term: "Extrinsic motivation",
      definition: "External rewards — pay, promotion, benefits.",
    },
    {
      term: "Maslow's hierarchy",
      definition: "Theory of needs — physiological to self-actualisation.",
    },
    { term: "Herzberg's theory", definition: "Hygiene factors vs motivators." },
  ],
  concepts: [
    {
      id: "ebz11-u5-motivation",
      title: "Motivation Theories",
      skill: "Understand intrinsic/extrinsic motivation and key theories.",
      lesson: {
        sections: [
          {
            heading: "Intrinsic vs extrinsic",
            body: "**Intrinsic**: comes from within — job satisfaction, achievement, interesting work, recognition. **Extrinsic**: external rewards — pay, bonuses, promotion, job security.\n\n**Maslow's hierarchy**: needs in order — physiological (food, shelter) → safety → social (belonging) → esteem (recognition) → self-actualisation (fulfilment). Lower needs must be met before higher ones motivate.\n\n**Herzberg's theory**: **hygiene factors** (pay, conditions, security) prevent dissatisfaction but don't motivate. **Motivators** (achievement, recognition, growth) actually motivate.",
          },
          {
            heading: "Taylor vs Mayo",
            body: "**Taylor (scientific management)**: workers are rational — pay by output, standardise tasks, close supervision. **Mayo (human relations)**: workers are social — motivation comes from belonging, recognition, group dynamics. Mayo's Hawthorne experiments showed attention itself motivates.\n\n**Modern view**: combine both — fair pay AND meaningful work, good conditions AND recognition.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A worker gets a pay rise but still unhappy. Herzberg would say...",
          solution:
            "Pay is hygiene factor — prevents dissatisfaction but doesn't motivate. Need achievement/recognition.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-motivation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is intrinsic motivation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Job security" },
              { id: "b", text: "Promotion" },
              { id: "c", text: "Pay and bonuses" },
              { id: "d", text: "Internal satisfaction from the work itself" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intrinsic motivation",
                statement: "Internal satisfaction — achievement, recognition.",
              },
            ],
            steps: [
              {
                reasoning: "Intrinsic = internal satisfaction.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Internal satisfaction",
            commonErrors: ["Extrinsic confused."],
          },
        },
        {
          id: "ebz11-u5-motivation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "According to Herzberg, what are hygiene factors?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hygiene factors",
                statement:
                  "Pay, conditions, security — prevent dissatisfaction.",
              },
            ],
            steps: [
              {
                reasoning: "Hygiene = pay, conditions, job security.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevent dissatisfaction but don't motivate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Motivators are achievement, recognition, growth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Pay/conditions/security — prevent dissatisfaction, don't motivate.",
            commonErrors: ["Motivators confused.", "No distinction."],
          },
        },
        {
          id: "ebz11-u5-motivation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Maslow's hierarchy and how it applies to workplace motivation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maslow",
                statement: "Needs hierarchy — lower first.",
              },
            ],
            steps: [
              {
                reasoning: "Physiological/safety needs first — pay, security.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social/esteem needs — belonging, recognition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Self-actualisation — fulfilment, growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Must meet lower needs before higher motivate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Hierarchy of needs — meet basic first, then higher needs motivate.",
            commonErrors: ["No order.", "No workplace link."],
          },
        },
        {
          id: "ebz11-u5-motivation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company wants to motivate its staff.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two extrinsic motivators.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two intrinsic motivators.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why both types are needed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation mix",
                statement:
                  "Extrinsic prevents dissatisfaction; intrinsic motivates.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Performance bonuses, promotion opportunities.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Any valid extrinsic reward.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Interesting work, recognition, autonomy.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Any valid intrinsic factor.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Herzberg: hygiene prevents dissatisfaction; motivators drive performance.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) bonuses/promotion (b) interesting work/recognition (c) both needed per Herzberg",
            commonErrors: ["Only one type.", "No theory link."],
          },
        },
      ],
    },
    {
      id: "ebz11-u5-leadership",
      title: "Leadership Styles",
      skill: "Compare autocratic, democratic and laissez-faire leadership.",
      lesson: {
        sections: [
          {
            heading: "Leadership styles",
            body: "**Autocratic**: leader decides everything — fast decisions, clear direction, but staff feel undervalued, less creative. **Democratic**: consults staff — motivated, creative, but slower decisions. **Laissez-faire**: minimal direction — freedom, good for experts, but can lack coordination.\n\n**Situational leadership**: best style depends on situation — crisis needs autocratic, creative work needs democratic, expert teams need laissez-faire.",
          },
          {
            heading: "Leadership vs management",
            body: "**Management**: planning, organising, controlling — keeps business running. **Leadership**: vision, inspiration, direction — leads people. Good leaders also manage; good managers should also lead.\n\n**Traits**: communication, integrity, decisiveness, empathy, vision. **Impact**: leadership style affects motivation, culture, performance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A hospital needs quick decisions during emergency. Best style?",
          solution: "Autocratic — fast, decisive action needed.",
        },
      },
      questions: [
        {
          id: "ebz11-u5-leadership-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is autocratic leadership?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leader consults staff" },
              { id: "b", text: "Leader gives complete freedom" },
              { id: "c", text: "Leader shares profits" },
              { id: "d", text: "Leader makes all decisions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Autocratic",
                statement: "Leader makes all decisions — no consultation.",
              },
            ],
            steps: [
              {
                reasoning: "Autocratic = leader decides all.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Leader decides all",
            commonErrors: ["Democratic confused."],
          },
        },
        {
          id: "ebz11-u5-leadership-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of democratic leadership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Democratic leadership",
                statement: "Consultation → motivation, better decisions.",
              },
            ],
            steps: [
              {
                reasoning: "Staff feel valued — more motivated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better decisions — uses staff knowledge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds teamwork and communication.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Motivation, better decisions, teamwork.",
            commonErrors: ["Autocratic advantages.", "Only one."],
          },
        },
        {
          id: "ebz11-u5-leadership-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why situational leadership is often most effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Situational leadership",
                statement: "Best style depends on situation.",
              },
            ],
            steps: [
              {
                reasoning: "Different situations need different styles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Crisis → autocratic for speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creative work → democratic for input.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expert teams → laissez-faire for autonomy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Match style to situation — crisis=autocratic, creative=democratic.",
            commonErrors: ["One style always.", "No examples."],
          },
        },
        {
          id: "ebz11-u5-leadership-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new manager at a design agency wants to choose a leadership style.",
          parts: [
            {
              label: "a",
              prompt: "Compare autocratic and democratic for this context.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Recommend a style with justification.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Leadership choice",
                statement: "Match style to work type.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Autocratic: fast decisions but stifles creativity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Democratic: creative input but slower.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Recommend democratic for creative work.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(b) Justify: designers need autonomy/input for innovation.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) autocratic=fast vs democratic=creative (b) democratic for design",
            commonErrors: ["Wrong recommendation.", "No justification."],
          },
        },
      ],
    },
  ],
};
