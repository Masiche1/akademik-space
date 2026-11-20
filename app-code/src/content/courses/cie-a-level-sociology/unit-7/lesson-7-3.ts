import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "asoc-u7-lesson-7-3",
  code: "7-3",
  title: "Religion in Contemporary Society",
  goal: "I CAN evaluate religion's role in contemporary society and future trends.",
  standards: ["9699 P4: Religion and post-modernity"],
  vocabulary: [
    {
      term: "Fundamentalism",
      definition: "Strict adherence to traditional religious beliefs.",
    },
    {
      term: "Religious revival",
      definition: "Renewed religious influence after decline.",
    },
    {
      term: "Spiritual but not religious",
      definition: "Personal spirituality without organised religion.",
    },
    {
      term: "Secular society",
      definition: "Society where religion has little public influence.",
    },
    {
      term: "Pluralism",
      definition: "Coexistence of multiple religious traditions.",
    },
    {
      term: "Religious marketplace",
      definition: "Competition among religions for followers.",
    },
  ],
  concepts: [
    {
      id: "asoc-u7-contemporary",
      title: "Religion in contemporary society",
      skill: "Evaluate religion's current role and future trends.",
      lesson: {
        sections: [
          {
            heading: "Current state",
            body: "Organised religion declining in West but remains strong in Global South and among some groups. Fundamentalism rising in response to modernity. 'Spiritual but not religious' growing — people keep beliefs without institutions.",
          },
          {
            heading: "Pluralism and competition",
            body: "Modern societies have diverse religions coexisting — pluralism. Religious marketplace: religions compete for followers like products. Can lead to moderation (to appeal broadly) or intensification (to retain core).",
          },
          {
            heading: "Future trends",
            body: "Possible continued decline of organised religion in West; continued strength elsewhere. Hybrid spiritualities growing. Religion may remain politically and culturally significant even if less institutionally central.",
          },
        ],
        keyFormulas: [
          {
            name: "Contemporary religion",
            statement:
              "Declining West/strong South; pluralism; fundamentalism; personalised spirituality.",
          },
        ],
        workedExample: {
          problem: "Is religion dying out?",
          solution:
            "Not simply — organised forms decline in West but religion persists globally in new and traditional forms.",
        },
      },
      questions: [
        {
          id: "asoc-u7-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'spiritual but not religious' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Personal spirituality without organised religion",
              },
              { id: "b", text: "Anti-religious stance" },
              { id: "c", text: "Atheism" },
              { id: "d", text: "Church attendance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SBNR",
                statement: "Spirituality without institutions.",
              },
            ],
            steps: [
              {
                reasoning: "SBNR = personal not organised.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Personal spirituality without organised religion",
            commonErrors: ["Confusing with atheism."],
          },
        },
        {
          id: "asoc-u7-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is religious pluralism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluralism",
                statement: "Multiple religions coexist.",
              },
            ],
            steps: [
              {
                reasoning: "Diverse religions coexist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No single dominant faith.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Coexistence of multiple religious traditions in one society.",
            commonErrors: ["Confusing with tolerance only."],
          },
        },
        {
          id: "asoc-u7-co-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that religion is in decline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion decline",
                statement: "West declining vs global persistence.",
              },
            ],
            steps: [
              {
                reasoning: "West: falling attendance.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Global South: strong.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Personalised spirituality persists.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Declining in West but persists globally and personally — not simply dying.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-co-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Contemporary religion.",
          parts: [
            { label: "a", prompt: "Current state of religion?", marks: 2 },
            { label: "b", prompt: "Religious pluralism?", marks: 2 },
            { label: "c", prompt: "Fundamentalism rise?", marks: 2 },
            { label: "d", prompt: "Future trends?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contemporary religion",
                statement: "State+pluralism+fundamentalism+future.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Decline West/strength South.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "SBNR growing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Multiple religions coexist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Marketplace competition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Response to modernity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Strict traditional beliefs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Continued decline West.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Strength elsewhere.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Hybrid spiritualities.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) state (b) pluralism (c) fundamentalism (d) future",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u7-7-3-notes",
      title: "Contemporary religion — notes",
      summary: "Current state, pluralism, fundamentalism, future trends.",
      sections: [
        {
          heading: "State/future",
          body: "Decline in West, strength in South; pluralism; fundamentalism; personalised spirituality growing.",
        },
        {
          heading: "Trends",
          body: "Religious marketplace; hybrid beliefs; religion remains politically/culturally significant.",
        },
      ],
    },
  ],
};
