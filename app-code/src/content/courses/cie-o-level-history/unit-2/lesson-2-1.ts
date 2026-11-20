import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "oleh-u2-lesson-2-1",
  code: "2-1",
  title: "Post-Cold War International Relations",
  goal: "I CAN describe international relations since 1991 including UN, NATO expansion and new threats.",
  standards: ["2130: Post-Cold War world"],
  vocabulary: [
    {
      term: "UN",
      definition:
        "United Nations — international organisation for peace and cooperation.",
    },
    {
      term: "NATO expansion",
      definition: "Former Soviet states joining NATO after 1991.",
    },
    { term: "9/11", definition: "September 11 2001 terrorist attacks on USA." },
    {
      term: "War on Terror",
      definition: "US-led campaign against terrorism after 9/11.",
    },
    {
      term: "Iraq War",
      definition: "2003 invasion of Iraq by US-led coalition.",
    },
    {
      term: "Globalisation",
      definition:
        "Increasing interconnectedness of world economies and cultures.",
    },
  ],
  concepts: [
    {
      id: "oleh-u2-post-cold-war",
      title: "New world order",
      skill: "Describe changes in international relations after 1991.",
      lesson: {
        sections: [
          {
            heading: "UN and peacekeeping",
            body: "UN expanded role — peacekeeping missions in Balkans, Africa, Middle East. Security Council permanent members: USA, Russia, China, UK, France. UN agencies: WHO, UNICEF, UNESCO.",
          },
          {
            heading: "NATO expansion",
            body: "Former Warsaw Pact states and Soviet republics joined NATO — Poland, Hungary, Czech Republic (1999), Baltic states (2004). Russia viewed expansion as threat — contributed to tensions.",
          },
          {
            heading: "New threats",
            body: "Terrorism: 9/11 attacks → War on Terror. Climate change: international agreements (Kyoto, Paris). Cyber warfare: new domain of conflict. Pandemics: COVID-19 showed global interdependence.",
          },
        ],
        keyFormulas: [
          {
            name: "Post-Cold War",
            statement:
              "UN peacekeeping+NATO expansion+terrorism+climate change.",
          },
        ],
        workedExample: {
          problem: "Why did NATO expand after 1991?",
          solution:
            "Former Soviet states sought security guarantees against Russian influence — voluntary alliance choice.",
        },
      },
      questions: [
        {
          id: "oleh-u2-pw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the UN Security Council?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Body responsible for international peace and security",
              },
              { id: "b", text: "Economic organisation" },
              { id: "c", text: "Military alliance" },
              { id: "d", text: "Trade agreement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Security Council",
                statement: "Peace and security body.",
              },
            ],
            steps: [
              {
                reasoning: "Security Council = peace/security.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Peace and security",
            commonErrors: ["Confusing with General Assembly."],
          },
        },
        {
          id: "oleh-u2-pw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two new threats after the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "New threats",
                statement:
                  "Terrorism, climate change, cyber warfare, pandemics.",
              },
            ],
            steps: [
              { reasoning: "Any two threats.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Terrorism, climate change, cyber warfare, pandemics.",
            commonErrors: ["Saying 'nuclear war'."],
          },
        },
        {
          id: "oleh-u2-pw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NATO expanded after 1991.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NATO expansion",
                statement: "Security guarantees+voluntary choice.",
              },
            ],
            steps: [
              {
                reasoning: "Former Soviet states sought security.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Protection against Russian influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Voluntary alliance choice.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Security guarantees against Russian influence.",
            commonErrors: ["Saying forced membership."],
          },
        },
        {
          id: "oleh-u2-pw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Post-Cold War world.",
          parts: [
            { label: "a", prompt: "UN role?", marks: 1 },
            { label: "b", prompt: "NATO expansion?", marks: 2 },
            { label: "c", prompt: "Two new threats?", marks: 2 },
            { label: "d", prompt: "9/11 significance?", marks: 2 },
            { label: "e", prompt: "Climate change agreements?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-Cold War",
                statement: "UN+NATO+threats+9/11+climate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Peacekeeping/security.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Former Soviet states joined.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Security guarantees.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two threats.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Triggered War on Terror.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Changed US foreign policy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Kyoto/Paris.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "International cooperation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) UN (b) NATO (c) threats (d) 9/11 (e) climate",
          },
        },
      ],
    },
    {
      id: "oleh-u2-conflicts",
      title: "Post-Cold War conflicts",
      skill:
        "Describe major conflicts since 1991 including Iraq and Afghanistan.",
      lesson: {
        sections: [
          {
            heading: "Iraq War (2003)",
            body: "US-led coalition invaded Iraq claiming WMD. Saddam Hussein overthrown. Long occupation — insurgency, sectarian violence. US withdrew 2011. Regional instability continued.",
          },
          {
            heading: "Afghanistan War (2001-2021)",
            body: "After 9/11, US invaded Afghanistan to remove Taliban. 20-year war — Taliban insurgency persisted. US withdrew 2021 — Taliban regained control. Longest US war.",
          },
          {
            heading: "Other conflicts",
            body: "Balkans: Yugoslav wars 1990s — ethnic cleansing, NATO intervention. Syria: civil war since 2011 — refugee crisis. Ukraine: Russia annexed Crimea 2014, full invasion 2022 — ongoing conflict.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflicts",
            statement:
              "Iraq=2003; Afghanistan=2001-21; Balkans=1990s; Ukraine=2014/2022.",
          },
        ],
        workedExample: {
          problem: "Why did the Afghanistan War last so long?",
          solution:
            "Taliban insurgency+rough terrain+weak central government made conventional victory impossible.",
        },
      },
      questions: [
        {
          id: "oleh-u2-cf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the US invade Iraq?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2003" },
              { id: "b", text: "2001" },
              { id: "c", text: "1991" },
              { id: "d", text: "2011" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iraq War",
                statement: "2003 invasion.",
              },
            ],
            steps: [
              { reasoning: "Iraq invaded 2003.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 2003",
            commonErrors: ["Confusing with Afghanistan."],
          },
        },
        {
          id: "oleh-u2-cf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the justification for the Iraq invasion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iraq justification",
                statement: "Claimed WMD possession.",
              },
            ],
            steps: [
              { reasoning: "Claimed WMD.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Remove Saddam Hussein.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Claimed WMD possession; remove Saddam.",
            commonErrors: ["Saying it was for oil only."],
          },
        },
        {
          id: "oleh-u2-cf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Afghanistan War lasted 20 years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Afghanistan",
                statement: "Insurgency+terrain+weak government.",
              },
            ],
            steps: [
              {
                reasoning: "Taliban insurgency persisted.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rough mountainous terrain.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weak central government.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Insurgency+terrain+weak government → long war.",
            commonErrors: ["Saying it was easy victory."],
          },
        },
        {
          id: "oleh-u2-cf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Post-Cold War conflicts.",
          parts: [
            { label: "a", prompt: "Iraq invasion year?", marks: 1 },
            { label: "b", prompt: "Iraq justification?", marks: 2 },
            { label: "c", prompt: "Afghanistan war duration?", marks: 2 },
            { label: "d", prompt: "Why so long?", marks: 2 },
            { label: "e", prompt: "Name another conflict.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflicts",
                statement: "Dates+justifications+duration+other.",
              },
            ],
            steps: [
              { part: "a", reasoning: "2003.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "WMD claim.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Remove Saddam.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "2001-2021.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "20 years.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Insurgency/terrain.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Weak government.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Balkans/Syria/Ukraine.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) 2003 (b) WMD (c) 20 years (d) insurgency (e) other conflict",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u2-2-1-notes",
      title: "Post-Cold War — notes",
      summary: "UN, NATO expansion, new threats, Iraq/Afghanistan wars.",
      sections: [
        {
          heading: "Changes",
          body: "UN peacekeeping+NATO expansion+terrorism+climate change. Iraq=2003; Afghanistan=2001-21.",
        },
        {
          heading: "Conflicts",
          body: "Iraq=WMD claim; Afghanistan=Taliban insurgency; Balkans=ethnic cleansing; Ukraine=2014/2022.",
        },
      ],
    },
  ],
};
