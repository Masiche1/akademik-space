import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "oleh-u3-lesson-3-1",
  code: "3-1",
  title: "The Peace Treaties of 1919–23",
  goal: "I CAN explain the main terms of the peace treaties and their consequences.",
  standards: ["2130/2147: The twentieth century — peace treaties 1919–23"],
  vocabulary: [
    {
      term: "Treaty of Versailles",
      definition: "1919 treaty ending war between Germany and the Allies.",
    },
    {
      term: "War Guilt clause",
      definition: "Article 231 — Germany accepted blame for the war.",
    },
    {
      term: "Reparations",
      definition: "Compensation Germany had to pay for war damage.",
    },
    {
      term: "Mandates",
      definition:
        "Colonies taken from defeated powers, administered by victors.",
    },
    {
      term: "League of Nations",
      definition: "International organisation created to keep peace.",
    },
    {
      term: "Self-determination",
      definition: "Right of peoples to choose their own government.",
    },
  ],
  concepts: [
    {
      id: "oleh-u3-versailles",
      title: "Terms of the Treaty of Versailles",
      skill: "Describe the main terms of the 1919 peace treaties.",
      lesson: {
        sections: [
          {
            heading: "Versailles terms",
            body: "Territory: Germany lost Alsace-Lorraine to France, Eupen-Malmedy to Belgium, West Prussia/Posen to Poland (creating Polish Corridor), overseas colonies became mandates. Military: army limited to 100,000, no air force, navy restricted, Rhineland demilitarised. Economic: £6,600 million reparations. Political: Article 231 war guilt clause; League of Nations created.",
          },
          {
            heading: "Other treaties",
            body: "St Germain (Austria-Hungary): new states created — Czechoslovakia, Yugoslavia, Austria-Hungary dissolved. Trianon (Hungary): lost two-thirds of territory. Neuilly (Bulgaria): lost territory to Greece/Romania/Yugoslavia. Sèvres (Ottoman Empire): Turkey lost Arab lands; later replaced by Lausanne 1923.",
          },
          {
            heading: "Impact",
            body: "Treaties created new nations but left grievances: Germany felt humiliated ('Diktat'), Italy felt cheated ('mutilated victory'), Japan wanted racial equality clause rejected. Set stage for later revisionism and conflict.",
          },
        ],
        keyFormulas: [
          {
            name: "Peace treaties",
            statement:
              "Versailles: guilt+reparations+territory loss+demilitarisation; new states created.",
          },
        ],
        workedExample: {
          problem: "Why did Germany hate the Treaty of Versailles?",
          solution:
            "War guilt clause (humiliation), massive reparations, territorial losses (Polish Corridor split Germany), military restrictions — seen as dictated ('Diktat').",
        },
      },
      questions: [
        {
          id: "oleh-u3-vt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which clause made Germany accept blame for WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Article 231 (war guilt clause)" },
              { id: "b", text: "Article 232" },
              { id: "c", text: "The reparations clause" },
              { id: "d", text: "The Rhineland clause" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "War guilt clause",
                statement: "Article 231 — Germany accepted blame.",
              },
            ],
            steps: [{ reasoning: "Article 231.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Article 231",
            commonErrors: ["Confusing with reparations."],
          },
        },
        {
          id: "oleh-u3-vt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two territorial losses Germany suffered under Versailles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Territorial losses",
                statement: "Alsace-Lorraine, Polish Corridor, colonies.",
              },
            ],
            steps: [
              { reasoning: "Any two losses.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Alsace-Lorraine to France; West Prussia/Posen to Poland; overseas colonies as mandates.",
            commonErrors: ["Only one loss."],
          },
        },
        {
          id: "oleh-u3-vt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the peace treaties of 1919–23 create lasting problems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treaty problems",
                statement: "Grievances + unresolved issues.",
              },
            ],
            steps: [
              {
                reasoning: "German humiliation/reparations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Italian 'mutilated victory'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Unresolved issues (Poland corridor etc).",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Treaties created grievances (German humiliation, Italian disappointment) and left unresolved territorial issues.",
            commonErrors: ["Only describing terms."],
          },
        },
        {
          id: "oleh-u3-vt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Peace treaties 1919–23.",
          parts: [
            { label: "a", prompt: "Main Versailles terms?", marks: 3 },
            { label: "b", prompt: "Other treaties?", marks: 2 },
            { label: "c", prompt: "New states created?", marks: 2 },
            { label: "d", prompt: "Why problems arose?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treaties",
                statement: "Terms+other treaties+states+problems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Guilt/reparations/military.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Territory loss.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "St Germain/Trianon/Neuilly.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning:
                  "Czechoslovakia/Yugoslavia/Austria-Hungary dissolved.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Grievances created.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Unresolved issues.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Versailles (b) other treaties (c) new states (d) problems",
          },
        },
      ],
    },
    {
      id: "oleh-u3-league",
      title: "The League of Nations",
      skill: "Evaluate the League's structure, successes and failures.",
      lesson: {
        sections: [
          {
            heading: "Structure and aims",
            body: "Created by Treaty of Versailles to prevent war through collective security — member states would act together against aggression. Bodies: Assembly (all members), Council (great powers), Permanent Court of International Justice. USA never joined — weakened from start.",
          },
          {
            heading: "Successes",
            body: "Resolved minor disputes: Åland Islands (1921), Upper Silesia (1922), Memel (1924), Corfu crisis partially (1923). Humanitarian work — refugees, health, slavery. Showed international cooperation possible.",
          },
          {
            heading: "Failures",
            body: "Manchuria 1931 (Japan ignored League), Abyssinia 1935 (Italy invaded, League imposed weak sanctions — no oil ban), Rhineland 1936 (Hitler remilitarised, no action). No army to enforce decisions — relied on members' willingness. Lack of US support fatal.",
          },
        ],
        keyFormulas: [
          {
            name: "League",
            statement:
              "Collective security; successes=minor disputes; failures=Manchuria+Abyssinia+Rhineland.",
          },
        ],
        workedExample: {
          problem: "Why did the League fail over Abyssinia?",
          solution:
            "Italy ignored sanctions; oil ban not imposed; no military enforcement; members prioritised self-interest over collective security.",
        },
      },
      questions: [
        {
          id: "oleh-u3-lf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the League's main purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prevent war through collective security" },
              { id: "b", text: "Manage colonial empires" },
              { id: "c", text: "Control trade routes" },
              { id: "d", text: "Supervise disarmament only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "League aim",
                statement: "Collective security against aggression.",
              },
            ],
            steps: [{ reasoning: "Prevent war.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Prevent war through collective security",
            commonErrors: ["Confusing with UN functions."],
          },
        },
        {
          id: "oleh-u3-lf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two successes of the League.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "League successes",
                statement: "Minor disputes resolved.",
              },
            ],
            steps: [
              { reasoning: "Any two successes.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Åland Islands, Upper Silesia, Memel, Corfu (partial), humanitarian work.",
            commonErrors: ["Listing failures."],
          },
        },
        {
          id: "oleh-u3-lf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the League fail over Abyssinia?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League failure",
                statement: "Weak sanctions, no enforcement.",
              },
            ],
            steps: [
              {
                reasoning: "Sanctions lacked oil ban.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Members prioritised self-interest.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No military force to enforce.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Weak sanctions (no oil), self-interested members, no military enforcement — League couldn't stop Italy.",
            commonErrors: ["Blaming only Italy."],
          },
        },
        {
          id: "oleh-u3-lf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The League of Nations.",
          parts: [
            { label: "a", prompt: "Aims and structure?", marks: 3 },
            { label: "b", prompt: "Two successes?", marks: 2 },
            { label: "c", prompt: "Three failures?", marks: 3 },
            { label: "d", prompt: "Overall verdict?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League",
                statement: "Aims+successes+failures+verdict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Collective security aim.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Assembly/Council/Court.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "No US membership.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Any two successes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Any three failures.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Weighed judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) aims (b) successes (c) failures (d) verdict",
          },
        },
      ],
    },
    {
      id: "oleh-u3-wwii-causes",
      title: "The Road to World War II",
      skill:
        "Explain the causes of WWII including appeasement and the Nazi-Soviet Pact.",
      lesson: {
        sections: [
          {
            heading: "Hitler's foreign policy",
            body: "Hitler aimed to overturn Versailles: rearmament (1935), remilitarise Rhineland (1936), Anschluss with Austria (1938), Sudetenland (Munich 1938), Czechoslovakia (1939). Appeasement — Britain/France gave in hoping to avoid war; failed when Hitler took rest of Czechoslovakia and invaded Poland.",
          },
          {
            heading: "Mussolini and Japan",
            body: "Mussolini invaded Abyssinia 1935 — League failed to stop him. Japan invaded Manchuria 1931 and China 1937 — ignored by League. Axis powers (Germany, Italy, Japan) coordinated aggression.",
          },
          {
            heading: "Outbreak of war",
            body: "Nazi-Soviet Pact August 1939 — secret protocol dividing Poland. Germany invaded Poland 1 September 1939 — Britain/France declared war. USSR invaded eastern Poland 17 September. Phoney War until April 1940 when Germany invaded Denmark/Norway then France.",
          },
        ],
        keyFormulas: [
          {
            name: "WWII causes",
            statement:
              "Versailles grievances+appeasement+Axis aggression+Nazi-Soviet Pact→Poland invasion.",
          },
        ],
        workedExample: {
          problem: "Why did appeasement fail?",
          solution:
            "Hitler kept demanding more; giving in at Munich encouraged further aggression — only delayed, not prevented, war.",
        },
      },
      questions: [
        {
          id: "oleh-u3-ww-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was appeasement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving in to Hitler's demands to avoid war" },
              { id: "b", text: "Military alliance against Germany" },
              { id: "c", text: "Economic sanctions on Japan" },
              { id: "d", text: "League of Nations policy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appeasement",
                statement: "Concessions to avoid war.",
              },
            ],
            steps: [
              { reasoning: "Conceding to Hitler.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Giving in to Hitler's demands to avoid war",
            commonErrors: ["Thinking it was resistance."],
          },
        },
        {
          id: "oleh-u3-ww-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Nazi-Soviet Pact?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nazi-Soviet Pact",
                statement: "1939 non-aggression + secret Poland split.",
              },
            ],
            steps: [
              { reasoning: "Non-aggression pact.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Secret protocol dividing Poland.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "1939 agreement: Germany and USSR wouldn't attack each other; secret protocol split Poland.",
            commonErrors: ["Thinking it was an alliance."],
          },
        },
        {
          id: "oleh-u3-ww-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did WWII begin in September 1939?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII outbreak",
                statement: "Poland invasion → declarations of war.",
              },
            ],
            steps: [
              {
                reasoning: "Hitler invaded Poland Sept 1.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Britain/France honoured guarantees.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Declared war Sept 3.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Germany invaded Poland; Britain/France declared war to honour guarantees to Poland.",
            commonErrors: ["Saying Japan caused it."],
          },
        },
        {
          id: "oleh-u3-ww-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Road to WWII.",
          parts: [
            {
              label: "a",
              prompt: "Appeasement — policy and events?",
              marks: 3,
            },
            { label: "b", prompt: "Axis aggression?", marks: 2 },
            { label: "c", prompt: "Nazi-Soviet Pact?", marks: 2 },
            { label: "d", prompt: "Outbreak of war?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII causes",
                statement: "Appeasement+Axis+Pact+outbreak.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Concessions to avoid war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Munich 1938 example.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Why it failed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Manchuria/Abyssinia/China.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Axis powers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Non-aggression pact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Secret Poland split.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Poland invasion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Britain/France declared war.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) appeasement (b) Axis (c) Pact (d) outbreak",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u3-3-notes",
      title: "1919–39 — notes",
      summary: "Versailles, League, appeasement, causes of WWII.",
      sections: [
        {
          heading: "Treaties/League",
          body: "Versailles: guilt+reparations+territory+demilitarisation; new states; League failed over Manchuria/Abyssinia.",
        },
        {
          heading: "WWII",
          body: "Appeasement failed; Axis aggression; Nazi-Soviet Pact; Poland invasion → war.",
        },
      ],
    },
  ],
};
