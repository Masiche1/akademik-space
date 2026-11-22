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
              { id: "c", text: "Trade agreement" },
              { id: "d", text: "Military alliance" },
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
        {
          id: "oleh-u2-pw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which countries joined NATO in 1999?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Baltic states" },
              { id: "b", text: "Russia and Belarus" },
              { id: "c", text: "Ukraine and Georgia" },
              { id: "d", text: "Poland, Hungary and the Czech Republic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO expansion",
                statement: "Poland, Hungary, Czech Republic joined 1999; Baltics 2004.",
              },
            ],
            steps: [
              {
                reasoning: "1999 first wave: Poland/Hungary/Czech Republic.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Poland, Hungary and the Czech Republic",
            commonErrors: ["Confusing with the 2004 Baltic expansion."],
          },
        },
        {
          id: "oleh-u2-pw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the 'War on Terror' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Cold War arms race" },
              { id: "b", text: "US-led campaign against terrorism after 9/11" },
              { id: "c", text: "UN peacekeeping operations" },
              { id: "d", text: "The Falklands War" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "War on Terror",
                statement: "US-led campaign after 9/11.",
              },
            ],
            steps: [
              {
                reasoning: "US campaign against terrorism post-9/11.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** US-led campaign against terrorism after 9/11",
            commonErrors: ["Confusing with the Cold War."],
          },
        },
        {
          id: "oleh-u2-pw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the 9/11 terrorist attacks occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "9/11",
                statement: "Attacks on USA, September 2001.",
              },
            ],
            steps: [
              { reasoning: "9/11 occurred 2001.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2001",
          },
        },
        {
          id: "oleh-u2-pw-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is NATO expansion since 1991?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO expansion",
                statement: "Former Soviet/Warsaw Pact states joined NATO.",
              },
            ],
            steps: [
              {
                reasoning: "Former Soviet states joined NATO.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Voluntary choice seeking security.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Former Warsaw Pact states and Soviet republics joining NATO for security guarantees.",
            commonErrors: ["Saying NATO forced membership."],
          },
        },
        {
          id: "oleh-u2-pw-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which UN agency coordinates global health responses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UNICEF" },
              { id: "b", text: "WHO" },
              { id: "c", text: "WTO" },
              { id: "d", text: "UNESCO" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WHO",
                statement: "World Health Organization.",
              },
            ],
            steps: [
              { reasoning: "WHO handles health.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** WHO",
            commonErrors: ["Confusing with UNICEF (children)."],
          },
        },
        {
          id: "oleh-u2-pw-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why did NATO expansion concern Russia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Russia and NATO",
                statement: "Expansion seen as security threat.",
              },
            ],
            steps: [
              {
                reasoning: "Russia viewed expansion as threat near its borders.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Contributed to rising tensions.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Russia saw NATO moving closer to its borders as a security threat, fuelling tensions.",
            commonErrors: ["Saying Russia joined NATO."],
          },
        },
        {
          id: "oleh-u2-pw-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Paris Agreement on climate change signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2015 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paris Agreement",
                statement: "Signed 2015 — limit warming 1.5-2°C.",
              },
            ],
            steps: [
              { reasoning: "Paris Agreement 2015.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2015",
          },
        },
        {
          id: "oleh-u2-pw-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is cyber warfare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new domain of conflict using computers and networks" },
              { id: "b", text: "War fought only by drones" },
              { id: "c", text: "Naval blockade" },
              { id: "d", text: "Chemical weapons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cyber warfare",
                statement: "Conflict in digital/cyber domain.",
              },
            ],
            steps: [
              {
                reasoning: "New domain of conflict post-Cold War.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A new domain of conflict using computers and networks",
            commonErrors: ["Confusing with conventional warfare."],
          },
        },
        {
          id: "oleh-u2-pw-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which recent pandemic showed global interdependence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "COVID-19" },
              { id: "b", text: "HIV/AIDS only" },
              { id: "c", text: "Ebola only" },
              { id: "d", text: "Spanish flu" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "COVID-19",
                statement: "Pandemic showing global interdependence.",
              },
            ],
            steps: [
              {
                reasoning: "COVID-19 spread globally fast.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** COVID-19",
            commonErrors: ["Choosing older pandemics."],
          },
        },
        {
          id: "oleh-u2-pw-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Post-Cold War world.",
          parts: [
            { label: "a", prompt: "UN role after 1991?", marks: 2 },
            { label: "b", prompt: "NATO expansion?", marks: 2 },
            { label: "c", prompt: "Name two new threats.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-Cold War",
                statement: "UN+NATO+new threats.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Peacekeeping missions worldwide.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Expanded role in Balkans/Africa/Middle East.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Former Soviet states joined.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Security guarantees sought.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two threats.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) UN peacekeeping (b) NATO expansion (c) threats",
          },
        },
        {
          id: "oleh-u2-pw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Kyoto Protocol adopted?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1997 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kyoto Protocol",
                statement: "Climate agreement adopted 1997.",
              },
            ],
            steps: [
              { reasoning: "Kyoto 1997.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1997",
          },
        },
        {
          id: "oleh-u2-pw-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Explain how the post-Cold War world changed international relations.",
          parts: [
            { label: "a", prompt: "UN peacekeeping role?", marks: 2 },
            { label: "b", prompt: "NATO expansion and Russia?", marks: 2 },
            { label: "c", prompt: "New threats?", marks: 2 },
            { label: "d", prompt: "Overall verdict?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Post-Cold War",
                statement: "UN+NATO+threats+changed relations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "UN ran peacekeeping missions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Balkans/Africa/Middle East.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Former Soviet states joined NATO.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Russia saw it as threat → tensions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Terrorism/climate/cyber/pandemics.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Global cooperation needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Multipolar, more complex threats.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) UN (b) NATO/Russia (c) threats (d) verdict",
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
              { id: "a", text: "1991" },
              { id: "b", text: "2003" },
              { id: "c", text: "2001" },
              { id: "d", text: "2011" },
            ],
            correctChoiceId: "b",
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
        {
          id: "oleh-u2-cf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did the US withdraw from Afghanistan?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2021 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Afghanistan withdrawal",
                statement: "US withdrew 2021.",
              },
            ],
            steps: [
              { reasoning: "US withdrew 2021.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2021",
          },
        },
        {
          id: "oleh-u2-cf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened to Saddam Hussein after the 2003 invasion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He was overthrown" },
              { id: "b", text: "He fled to Europe permanently" },
              { id: "c", text: "He became president of Iraq" },
              { id: "d", text: "He led the insurgency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saddam Hussein",
                statement: "Overthrown in 2003 invasion.",
              },
            ],
            steps: [
              {
                reasoning: "Saddam overthrown by coalition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** He was overthrown",
            commonErrors: ["Saying he remained in power."],
          },
        },
        {
          id: "oleh-u2-cf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Russia annex Crimea?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2014 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crimea",
                statement: "Annexed by Russia 2014.",
              },
            ],
            steps: [
              { reasoning: "Crimea annexed 2014.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2014",
          },
        },
        {
          id: "oleh-u2-cf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happened after the US invaded Iraq in 2003?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iraq aftermath",
                statement: "Occupation+insurgency+withdrawal.",
              },
            ],
            steps: [
              {
                reasoning: "Long occupation; insurgency and sectarian violence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "US withdrew 2011; instability continued.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Occupation led to insurgency and sectarian violence; US withdrew 2011 but instability continued.",
            commonErrors: ["Saying war ended immediately."],
          },
        },
        {
          id: "oleh-u2-cf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What characterised the Yugoslav wars of the 1990s?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade disputes" },
              { id: "b", text: "Colonial independence wars" },
              { id: "c", text: "Ethnic cleansing and NATO intervention" },
              { id: "d", text: "A single naval battle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Yugoslav wars",
                statement: "Ethnic cleansing; NATO intervention.",
              },
            ],
            steps: [
              {
                reasoning: "Ethnic cleansing forced NATO action.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ethnic cleansing and NATO intervention",
            commonErrors: ["Confusing with other conflicts."],
          },
        },
        {
          id: "oleh-u2-cf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why did the Iraq occupation face a prolonged insurgency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iraq insurgency",
                statement: "Resistance to occupation+sectarian divisions.",
              },
            ],
            steps: [
              {
                reasoning: "Resistance to foreign occupation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sectarian divisions (Sunni/Shia) fuelled violence.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Occupation resistance plus deep sectarian divisions sustained a prolonged insurgency.",
            commonErrors: ["Blaming only coalition forces."],
          },
        },
        {
          id: "oleh-u2-cf-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Russia launch its full-scale invasion of Ukraine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2022 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ukraine invasion",
                statement: "Full-scale invasion February 2022.",
              },
            ],
            steps: [
              { reasoning: "Full invasion 2022.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2022",
          },
        },
        {
          id: "oleh-u2-cf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How long did the Afghanistan War last?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 days" },
              { id: "b", text: "About 20 years (2001–2021)" },
              { id: "c", text: "6 months" },
              { id: "d", text: "3 years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Afghanistan War",
                statement: "2001-2021, longest US war.",
              },
            ],
            steps: [
              {
                reasoning: "2001 to 2021 — longest US war.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** About 20 years (2001–2021)",
            commonErrors: ["Confusing with Iraq War length."],
          },
        },
        {
          id: "oleh-u2-cf-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who regained control of Afghanistan in 2021?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Al-Qaeda" },
              { id: "b", text: "The Taliban" },
              { id: "c", text: "ISIS" },
              { id: "d", text: "The Northern Alliance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Taliban",
                statement: "Regained control of Afghanistan 2021.",
              },
            ],
            steps: [
              {
                reasoning: "Taliban regained control after US withdrawal.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The Taliban",
            commonErrors: ["Confusing with other groups."],
          },
        },
        {
          id: "oleh-u2-cf-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Post-Cold War conflicts.",
          parts: [
            { label: "a", prompt: "Iraq War — year and justification?", marks: 2 },
            { label: "b", prompt: "Afghanistan War — duration and cause?", marks: 2 },
            { label: "c", prompt: "Name one other conflict.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflicts",
                statement: "Iraq+Afghanistan+others.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2003 invasion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Claimed WMD; remove Saddam.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "2001-2021.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Response to 9/11; remove Taliban.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Balkans/Syria/Ukraine.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Iraq 2003 WMD (b) Afghanistan 2001-21 (c) other",
          },
        },
        {
          id: "oleh-u2-cf-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the US invade Afghanistan?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Afghanistan invasion",
                statement: "US invaded October 2001.",
              },
            ],
            steps: [
              { reasoning: "Invaded 2001 after 9/11.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2001",
          },
        },
        {
          id: "oleh-u2-cf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the Iraq and Afghanistan wars.",
          parts: [
            { label: "a", prompt: "When did each begin?", marks: 2 },
            { label: "b", prompt: "Justification for each?", marks: 2 },
            { label: "c", prompt: "How did each end?", marks: 2 },
            { label: "d", prompt: "Similarities?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iraq vs Afghanistan",
                statement: "Dates+justifications+endings+similarities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Iraq 2003; Afghanistan 2001.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correct years.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Iraq: WMD claim; Afghanistan: post-9/11.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct justifications.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Iraq: withdrawal 2011; Afghanistan: withdrawal 2021.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Instability followed both.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both faced insurgencies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Long occupations; unclear outcomes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) 2003 vs 2001 (b) WMD vs 9/11 (c) 2011 vs 2021 (d) both long insurgencies",
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
