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
              { id: "a", text: "Atheism" },
              { id: "b", text: "Church attendance" },
              { id: "c", text: "Anti-religious stance" },
              {
                id: "d",
                text: "Personal spirituality without organised religion",
              },
            ],
            correctChoiceId: "d",
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
              "**(d)** Personal spirituality without organised religion",
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
        {
          id: "asoc-u7-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fundamentalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A political system" },
              { id: "b", text: "A scientific movement" },
              { id: "c", text: "Rejection of all religion" },
              {
                id: "d",
                text: "Strict adherence to traditional religious beliefs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fundamentalism",
                statement: "Strict traditional beliefs.",
              },
            ],
            steps: [
              {
                reasoning: "Fundamentalism = strict tradition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Strict adherence to traditional religious beliefs",
            commonErrors: ["Confusing with secularism."],
          },
        },
        {
          id: "asoc-u7-co-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'religious marketplace'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Religious marketplace",
                statement: "Competition for followers.",
              },
            ],
            steps: [
              {
                reasoning: "Religions compete.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Like products for followers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Competition among religions for followers, like products in a market.",
            commonErrors: ["Confusing with spiritual marketplace."],
          },
        },
        {
          id: "asoc-u7-co-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In contemporary society, organised religion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing everywhere" },
              {
                id: "b",
                text: "Declining in the West but strong in the Global South",
              },
              { id: "c", text: "Only political" },
              { id: "d", text: "Extinct" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Current state",
                statement: "West decline/South strength.",
              },
            ],
            steps: [
              {
                reasoning: "Regional variation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Declining in the West but strong in the Global South",
            commonErrors: ["Overgeneralising decline."],
          },
        },
        {
          id: "asoc-u7-co-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that religion remains politically significant despite secularisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Political religion",
                statement: "Public influence vs decline.",
              },
            ],
            steps: [
              {
                reasoning: "Laws/politics less religious.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Still influential (US, Middle East).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cultural/political significance.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Public influence varies — religion remains politically significant in many contexts despite secular trends.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-co-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Religious pluralism means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only secular beliefs" },
              { id: "b", text: "No religion at all" },
              { id: "c", text: "One dominant religion" },
              {
                id: "d",
                text: "Multiple religious traditions coexist",
              },
            ],
            correctChoiceId: "d",
          },
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
                reasoning: "Pluralism = diversity.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Multiple religious traditions coexist",
            commonErrors: ["Confusing with tolerance."],
          },
        },
        {
          id: "asoc-u7-co-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'religious revival'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Religious revival",
                statement: "Renewed religious influence.",
              },
            ],
            steps: [
              {
                reasoning: "Renewed influence after decline.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Challenges decline thesis.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Renewed religious influence after a period of decline.",
            commonErrors: ["Confusing with NRM."],
          },
        },
        {
          id: "asoc-u7-co-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Competition in the religious marketplace can lead religions to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Merge into one church" },
              {
                id: "b",
                text: "Moderate to appeal broadly or intensify to retain core followers",
              },
              { id: "c", text: "Disappear completely" },
              { id: "d", text: "Only intensify" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketplace",
                statement: "Moderate or intensify.",
              },
            ],
            steps: [
              {
                reasoning: "Two possible responses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)** Moderate to appeal broadly or intensify to retain core followers",
            commonErrors: ["One-sided answer."],
          },
        },
        {
          id: "asoc-u7-co-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess likely future trends for religion in contemporary society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Future trends",
                statement: "Decline vs persistence.",
              },
            ],
            steps: [
              {
                reasoning: "Continued Western decline.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Strength elsewhere.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Hybrid/personalised forms.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Continued decline in West, strength elsewhere, growing hybrid spiritualities — religion persists in new forms.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "asoc-u7-co-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Hybrid spiritualities' refer to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Combining elements from different traditions",
              },
              { id: "b", text: "Organised churches" },
              { id: "c", text: "Scientific beliefs" },
              { id: "d", text: "Ancient rituals only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybrid",
                statement: "Mixed traditions.",
              },
            ],
            steps: [
              {
                reasoning: "Hybrid = mixed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Combining elements from different traditions",
            commonErrors: ["Confusing with single tradition."],
          },
        },
        {
          id: "asoc-u7-co-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Religion in contemporary society.",
          parts: [
            { label: "a", prompt: "Define 'spiritual but not religious'.", marks: 1 },
            {
              label: "b",
              prompt: "Pluralism and the religious marketplace?",
              marks: 3,
            },
            { label: "c", prompt: "Fundamentalism?", marks: 2 },
            { label: "d", prompt: "Future trends?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contemporary religion",
                statement: "SBNR+pluralism+fundamentalism+future.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Spirituality without institutions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Multiple religions coexist.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Competition for followers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Moderate or intensify.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Strict traditional beliefs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Response to modernity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Continued Western decline.",
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
              "(a) SBNR (b) pluralism/marketplace (c) fundamentalism (d) future",
          },
        },
        {
          id: "asoc-u7-co-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why might religion remain culturally significant even if less institutionally central?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It disappears completely" },
              { id: "b", text: "Only in museums" },
              { id: "c", text: "It has no influence" },
              {
                id: "d",
                text: "It shapes values, identity and politics",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural significance",
                statement: "Shapes society.",
              },
            ],
            steps: [
              {
                reasoning: "Influence beyond institutions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)** It shapes values, identity and politics",
            commonErrors: ["Assuming decline = disappearance."],
          },
        },
        {
          id: "asoc-u7-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that religion is 'dying out' in contemporary society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion dying?",
                statement: "West decline vs global persistence.",
              },
            ],
            steps: [
              {
                reasoning: "West: falling attendance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Global South: strong.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Personalised forms persist.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Organised forms decline in West but religion persists globally and personally — not simply dying out.",
            commonErrors: ["One-sided."],
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
