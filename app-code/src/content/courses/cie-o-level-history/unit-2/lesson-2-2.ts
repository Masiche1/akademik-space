import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "oleh-u2-lesson-2-2",
  code: "2-2",
  title: "International Organisations and Global Issues",
  goal: "I CAN describe international organisations and global issues like climate change and human rights.",
  standards: ["2130: International organisations"],
  vocabulary: [
    {
      term: "UN",
      definition: "United Nations — founded 1945 for peace and cooperation.",
    },
    {
      term: "NATO",
      definition: "North Atlantic Treaty Organization — military alliance.",
    },
    {
      term: "EU",
      definition: "European Union — political and economic union.",
    },
    { term: "WHO", definition: "World Health Organization — health agency." },
    {
      term: "Climate change",
      definition: "Long-term change in global temperatures.",
    },
    {
      term: "Human rights",
      definition: "Fundamental rights all humans are entitled to.",
    },
  ],
  concepts: [
    {
      id: "oleh-u2-organisations",
      title: "International organisations",
      skill: "Describe UN, NATO, EU and other global bodies.",
      lesson: {
        sections: [
          {
            heading: "United Nations",
            body: "Founded 1945 — maintains peace, develops friendly relations, promotes human rights. Main bodies: General Assembly (all members), Security Council (5 permanent members with veto), Secretariat (Secretary-General).",
          },
          {
            heading: "NATO and EU",
            body: "NATO: military alliance — collective defence (attack one = attack all). EU: political/economic union — single market, common currency (euro), free movement. Both expanded after Cold War.",
          },
          {
            heading: "Specialised agencies",
            body: "WHO: health (COVID-19 response). UNESCO: education/culture. UNICEF: children's welfare. WTO: trade rules. IMF/World Bank: economic development. All coordinate global responses.",
          },
        ],
        keyFormulas: [
          {
            name: "Organisations",
            statement:
              "UN=peace; NATO=defence; EU=economic; WHO/UNICEF=specialised.",
          },
        ],
        workedExample: {
          problem:
            "How does the UN Security Council differ from General Assembly?",
          solution:
            "Security Council: 15 members, 5 permanent with veto — powerful decisions. General Assembly: all 193 members — recommendations only.",
        },
      },
      questions: [
        {
          id: "oleh-u2-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is NATO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic union" },
              { id: "b", text: "Trade organisation" },
              { id: "c", text: "Military alliance for collective defence" },
              { id: "d", text: "Health agency" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO",
                statement: "Military alliance.",
              },
            ],
            steps: [
              {
                reasoning: "NATO = military alliance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Military alliance",
            commonErrors: ["Confusing with EU."],
          },
        },
        {
          id: "oleh-u2-io-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the five permanent members of the Security Council?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "P5",
                statement: "USA, Russia, China, UK, France.",
              },
            ],
            steps: [
              { reasoning: "Any three correct.", marks: 1, markCode: "AO1" },
              { reasoning: "All five.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "USA, Russia, China, UK, France.",
            commonErrors: ["Including Germany/Japan."],
          },
        },
        {
          id: "oleh-u2-io-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare UN General Assembly and Security Council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UN bodies",
                statement: "All members vs 15 members+veto.",
              },
            ],
            steps: [
              {
                reasoning: "GA: all 193 members, recommendations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "SC: 15 members, 5 permanent veto.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different powers.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "GA=all members+recommendations; SC=15+veto+decisions.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "oleh-u2-io-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "International organisations.",
          parts: [
            { label: "a", prompt: "Define NATO.", marks: 1 },
            { label: "b", prompt: "Define EU.", marks: 2 },
            { label: "c", prompt: "P5 members?", marks: 2 },
            { label: "d", prompt: "UN vs Security Council?", marks: 2 },
            { label: "e", prompt: "Name a specialised agency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organisations",
                statement: "Definitions+comparison+agencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Military alliance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Political/economic union.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Single market/euro.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "USA/Russia/China/UK/France.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "All five.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "GA vs SC differences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Powers differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "WHO/UNICEF/UNESCO/WTO.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) NATO (b) EU (c) P5 (d) UN vs SC (e) agency",
          },
        },
        {
          id: "oleh-u2-io-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the United Nations founded?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1945 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UN",
                statement: "Founded 1945.",
              },
            ],
            steps: [
              { reasoning: "UN founded 1945.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1945",
          },
        },
        {
          id: "oleh-u2-io-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does NATO's 'collective defence' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An attack on one member is an attack on all" },
              { id: "b", text: "Shared currency" },
              { id: "c", text: "Members share one army" },
              { id: "d", text: "Free trade between members" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective defence",
                statement: "Attack one = attack all.",
              },
            ],
            steps: [
              {
                reasoning: "Article 5 collective defence principle.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** An attack on one member is an attack on all",
            commonErrors: ["Confusing with EU free movement."],
          },
        },
        {
          id: "oleh-u2-io-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many permanent members does the UN Security Council have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "P5",
                statement: "Five permanent members with veto.",
              },
            ],
            steps: [
              { reasoning: "P5 = USA, Russia, China, UK, France.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "oleh-u2-io-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the European Union?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EU",
                statement: "Political/economic union with single market.",
              },
            ],
            steps: [
              {
                reasoning: "Political and economic union.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Single market, euro, free movement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Political and economic union — single market, common currency (euro), free movement of people.",
            commonErrors: ["Confusing with NATO."],
          },
        },
        {
          id: "oleh-u2-io-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which specialised UN agency looks after children's welfare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UNESCO" },
              { id: "b", text: "UNICEF" },
              { id: "c", text: "WTO" },
              { id: "d", text: "WHO" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UNICEF",
                statement: "Children's welfare agency.",
              },
            ],
            steps: [
              { reasoning: "UNICEF = children.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** UNICEF",
            commonErrors: ["Confusing with WHO."],
          },
        },
        {
          id: "oleh-u2-io-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the powers of the UN General Assembly and Security Council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UN bodies",
                statement: "GA recommendations vs SC decisions+veto.",
              },
            ],
            steps: [
              {
                reasoning: "GA: all members, recommendations only.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "SC: 15 members, 5 permanent with veto.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "SC makes binding decisions.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "GA=all members, recommendations; SC=15 members+5 veto powers, binding decisions.",
            commonErrors: ["Only describing one body."],
          },
        },
        {
          id: "oleh-u2-io-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many members does the UN General Assembly have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 193, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "General Assembly",
                statement: "All ~193 member states.",
              },
            ],
            steps: [
              {
                reasoning: "General Assembly includes all members.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "193",
          },
        },
        {
          id: "oleh-u2-io-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisations manage international economic development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "WHO and UNESCO" },
              { id: "b", text: "IMF and World Bank" },
              { id: "c", text: "NATO and EU" },
              { id: "d", text: "UNICEF and WTO" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IMF/World Bank",
                statement: "Economic development bodies.",
              },
            ],
            steps: [
              {
                reasoning: "IMF and World Bank handle economics.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** IMF and World Bank",
            commonErrors: ["Confusing with health agencies."],
          },
        },
        {
          id: "oleh-u2-io-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What special power do the five permanent Security Council members hold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The right to dissolve the UN" },
              { id: "b", text: "The veto" },
              { id: "c", text: "Control of the World Bank" },
              { id: "d", text: "Command of NATO forces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Veto",
                statement: "P5 can block resolutions.",
              },
            ],
            steps: [
              {
                reasoning: "Permanent members hold veto power.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The veto",
            commonErrors: ["Confusing with other powers."],
          },
        },
        {
          id: "oleh-u2-io-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "International organisations.",
          parts: [
            { label: "a", prompt: "UN main aims?", marks: 2 },
            { label: "b", prompt: "NATO vs EU?", marks: 2 },
            { label: "c", prompt: "Name two specialised agencies.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organisations",
                statement: "UN+NATO/EU+agencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Peace, friendly relations, human rights.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Founded 1945.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "NATO=military defence; EU=economic/political.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two agencies.",
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
            finalAnswer: "(a) UN aims (b) NATO vs EU (c) agencies",
          },
        },
        {
          id: "oleh-u2-io-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was NATO founded?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1949 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NATO",
                statement: "Founded 1949.",
              },
            ],
            steps: [
              { reasoning: "NATO founded 1949.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1949",
          },
        },
        {
          id: "oleh-u2-io-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate the role of international organisations in maintaining peace and cooperation.",
          parts: [
            { label: "a", prompt: "UN structure and powers?", marks: 2 },
            { label: "b", prompt: "NATO's role?", marks: 2 },
            { label: "c", prompt: "Specialised agencies' role?", marks: 2 },
            { label: "d", prompt: "Overall assessment?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organisations",
                statement: "UN+NATO+agencies+assessment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GA all members; SC 15+veto.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Peace/security mandate since 1945.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Military alliance/collective defence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Expanded after Cold War.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "WHO/UNICEF/UNESCO/WTO coordinate responses.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Health/education/trade functions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Essential but limited by politics/veto.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) UN (b) NATO (c) agencies (d) assessment",
          },
        },
      ],
    },
    {
      id: "oleh-u2-global-issues",
      title: "Global issues: climate change and human rights",
      skill: "Describe climate change and human rights as global issues.",
      lesson: {
        sections: [
          {
            heading: "Climate change",
            body: "Global warming: greenhouse gases trap heat → rising temperatures. Effects: sea level rise, extreme weather, ecosystem disruption. Agreements: Kyoto Protocol (1997), Paris Agreement (2015) — limit warming to 1.5-2°C.",
          },
          {
            heading: "Human rights",
            body: "Universal Declaration of Human Rights (1948): life, liberty, security, education, etc. Violations: slavery, torture, discrimination, child labour. International Criminal Court prosecutes war crimes/crimes against humanity.",
          },
          {
            heading: "Other global issues",
            body: "Poverty: 700m+ live in extreme poverty. Inequality: growing gap rich/poor. Disease: HIV/AIDS, malaria, COVID-19. Refugees: 100m+ displaced by conflict/climate.",
          },
        ],
        keyFormulas: [
          {
            name: "Global issues",
            statement:
              "Climate=warming+agreements; Rights=declaration+violations+ICC.",
          },
        ],
        workedExample: {
          problem: "What is the Paris Agreement?",
          solution:
            "2015 international agreement to limit global warming to 1.5-2°C above pre-industrial levels.",
        },
      },
      questions: [
        {
          id: "oleh-u2-gi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar flares" },
              { id: "b", text: "Natural cycles only" },
              { id: "c", text: "Volcanic eruptions" },
              { id: "d", text: "Greenhouse gases trapping heat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate change",
                statement: "Greenhouse gases trap heat.",
              },
            ],
            steps: [
              { reasoning: "Greenhouse effect.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Greenhouse gases",
            commonErrors: ["Saying it's purely natural."],
          },
        },
        {
          id: "oleh-u2-gi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Universal Declaration of Human Rights?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UDHR",
                statement: "1948 declaration of fundamental rights.",
              },
            ],
            steps: [
              { reasoning: "Fundamental rights.", marks: 1, markCode: "AO1" },
              { reasoning: "1948.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1948 declaration of fundamental human rights.",
            commonErrors: ["Saying it's a treaty."],
          },
        },
        {
          id: "oleh-u2-gi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two effects of climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate effects",
                statement:
                  "Sea level rise, extreme weather, ecosystem disruption.",
              },
            ],
            steps: [
              { reasoning: "Sea level rise.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Extreme weather events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ecosystem/species loss.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sea level rise+extreme weather+ecosystem disruption.",
            commonErrors: ["Only one effect."],
          },
        },
        {
          id: "oleh-u2-gi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Global issues.",
          parts: [
            { label: "a", prompt: "Climate change cause?", marks: 1 },
            { label: "b", prompt: "Two effects?", marks: 2 },
            { label: "c", prompt: "UDHR?", marks: 2 },
            { label: "d", prompt: "Paris Agreement?", marks: 2 },
            { label: "e", prompt: "Name another global issue.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global issues",
                statement: "Climate+rights+agreements+other.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greenhouse gases.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two effects.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "1948 declaration.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Fundamental rights.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "2015 agreement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Limit warming 1.5-2°C.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Poverty/inequality/disease/refugees.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) greenhouse (b) effects (c) UDHR (d) Paris (e) other issue",
          },
        },
        {
          id: "oleh-u2-gi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Universal Declaration of Human Rights adopted?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1948 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UDHR",
                statement: "Adopted 1948.",
              },
            ],
            steps: [
              { reasoning: "UDHR adopted 1948.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1948",
          },
        },
        {
          id: "oleh-u2-gi-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the Paris Agreement aim to limit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade tariffs" },
              { id: "b", text: "Refugee numbers" },
              { id: "c", text: "Nuclear weapons" },
              { id: "d", text: "Global warming to 1.5-2°C above pre-industrial levels" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paris Agreement",
                statement: "Limit warming to 1.5-2°C.",
              },
            ],
            steps: [
              {
                reasoning: "Paris targets 1.5-2°C warming limit.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Global warming to 1.5-2°C above pre-industrial levels",
            commonErrors: ["Confusing with Kyoto."],
          },
        },
        {
          id: "oleh-u2-gi-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Paris Agreement signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2015 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paris Agreement",
                statement: "Signed 2015.",
              },
            ],
            steps: [
              { reasoning: "Paris Agreement 2015.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2015",
          },
        },
        {
          id: "oleh-u2-gi-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the International Criminal Court (ICC)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICC",
                statement: "Prosecutes war crimes and crimes against humanity.",
              },
            ],
            steps: [
              {
                reasoning: "Prosecutes serious international crimes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "War crimes/crimes against humanity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "International court that prosecutes war crimes and crimes against humanity.",
            commonErrors: ["Confusing with the UN Security Council."],
          },
        },
        {
          id: "oleh-u2-gi-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a human rights violation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freedom of speech" },
              { id: "b", text: "Slavery" },
              { id: "c", text: "Voting" },
              { id: "d", text: "Free education" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Violations",
                statement: "Slavery, torture, discrimination, child labour.",
              },
            ],
            steps: [
              { reasoning: "Slavery is a violation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Slavery",
            commonErrors: ["Choosing a right, not a violation."],
          },
        },
        {
          id: "oleh-u2-gi-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two effects of climate change on the world.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate effects",
                statement: "Sea level rise, extreme weather, ecosystem loss.",
              },
            ],
            steps: [
              {
                reasoning: "Sea level rise threatens coastlines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Extreme weather events increase.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ecosystems/species disrupted.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Sea level rise, more extreme weather, ecosystem/species disruption.",
            commonErrors: ["Only one effect explained."],
          },
        },
        {
          id: "oleh-u2-gi-q11",
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
              { reasoning: "Kyoto adopted 1997.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1997",
          },
        },
        {
          id: "oleh-u2-gi-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What causes the 'greenhouse effect'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar panels" },
              { id: "b", text: "Ocean currents only" },
              { id: "c", text: "Greenhouse gases trapping heat in the atmosphere" },
              { id: "d", text: "The Moon's gravity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse effect",
                statement: "Gases trap heat → warming.",
              },
            ],
            steps: [
              {
                reasoning: "Greenhouse gases trap heat.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Greenhouse gases trapping heat in the atmosphere",
            commonErrors: ["Thinking it's purely natural."],
          },
        },
        {
          id: "oleh-u2-gi-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Over 100 million people are displaced worldwide mainly due to what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conflict and climate change" },
              { id: "b", text: "Trade agreements" },
              { id: "c", text: "Tourism" },
              { id: "d", text: "Voluntary migration for work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refugees",
                statement: "100m+ displaced by conflict/climate.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict and climate drive displacement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Conflict and climate change",
            commonErrors: ["Choosing economic migration."],
          },
        },
        {
          id: "oleh-u2-gi-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Global issues.",
          parts: [
            { label: "a", prompt: "Climate change — cause and agreement?", marks: 2 },
            { label: "b", prompt: "Human rights — declaration and violations?", marks: 2 },
            { label: "c", prompt: "Name two other global issues.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global issues",
                statement: "Climate+rights+other issues.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greenhouse gases cause warming.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Kyoto/Paris agreements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "UDHR 1948.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Violations: slavery/torture/etc.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two issues.",
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
            finalAnswer: "(a) climate (b) rights (c) other issues",
          },
        },
        {
          id: "oleh-u2-gi-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many people (in millions) live in extreme poverty worldwide?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 700, tolerance: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extreme poverty",
                statement: "700m+ people.",
              },
            ],
            steps: [
              {
                reasoning: "Over 700 million in extreme poverty.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "700",
          },
        },
        {
          id: "oleh-u2-gi-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate the world's response to climate change and human rights abuses.",
          parts: [
            { label: "a", prompt: "Causes of climate change?", marks: 2 },
            { label: "b", prompt: "International climate agreements?", marks: 2 },
            { label: "c", prompt: "Human rights framework?", marks: 2 },
            { label: "d", prompt: "Overall assessment?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global issues",
                statement: "Causes+agreements+rights+assessment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greenhouse gases from human activity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Rising temperatures/effects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Kyoto 1997; Paris 2015.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Aim: limit warming 1.5-2°C.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "UDHR 1948; ICC prosecutes abuses.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Violations persist despite framework.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Cooperation exists but enforcement limited.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) causes (b) agreements (c) rights (d) assessment",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u2-2-2-notes",
      title: "International organisations — notes",
      summary: "UN, NATO, EU, climate change and human rights.",
      sections: [
        {
          heading: "Organisations",
          body: "UN=peace; NATO=defence; EU=economic; WHO/UNICEF=specialised. P5=USA/Russia/China/UK/France.",
        },
        {
          heading: "Global issues",
          body: "Climate=greenhouse+Paris Agreement; rights=UDHR+ICC; poverty/disease/refugees.",
        },
      ],
    },
  ],
};
