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
              { id: "a", text: "The reparations clause" },
              { id: "b", text: "The Rhineland clause" },
              { id: "c", text: "Article 231 (war guilt clause)" },
              { id: "d", text: "Article 232" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Article 231",
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
        {
          id: "oleh-u3-vt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which treaty dealt with Austria-Hungary after WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Treaty of Trianon" },
              { id: "b", text: "Treaty of St Germain" },
              { id: "c", text: "Treaty of Versailles" },
              { id: "d", text: "Treaty of Neuilly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "St Germain",
                statement: "Treaty with Austria-Hungary.",
              },
            ],
            steps: [
              {
                reasoning: "St Germain dealt with Austria-Hungary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Treaty of St Germain",
            commonErrors: ["Confusing with other treaties."],
          },
        },
        {
          id: "oleh-u3-vt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the 'Diktat'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of weapon" },
              { id: "b", text: "An economic policy" },
              { id: "c", text: "A military alliance" },
              { id: "d", text: "German view that Versailles was dictated to them" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diktat",
                statement: "'Dictated peace' imposed on Germany.",
              },
            ],
            steps: [
              {
                reasoning: "Diktat = imposed treaty.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** German view that Versailles was dictated to them",
            commonErrors: ["Thinking it was a negotiation."],
          },
        },
        {
          id: "oleh-u3-vt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Treaty of Versailles signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1919 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Versailles",
                statement: "Signed 1919.",
              },
            ],
            steps: [
              { reasoning: "Versailles signed 1919.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1919",
          },
        },
        {
          id: "oleh-u3-vt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What were mandates under the peace treaties?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mandates",
                statement: "Colonies administered by victors.",
              },
            ],
            steps: [
              {
                reasoning: "Colonies taken from defeated powers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Administered by victorious powers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Overseas colonies taken from defeated powers and administered by the victors.",
            commonErrors: ["Confusing with reparations."],
          },
        },
        {
          id: "oleh-u3-vt-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which territory did Germany lose to France under Versailles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bavaria" },
              { id: "b", text: "The Rhineland" },
              { id: "c", text: "Alsace-Lorraine" },
              { id: "d", text: "The Ruhr" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alsace-Lorraine",
                statement: "Lost to France under Versailles.",
              },
            ],
            steps: [
              {
                reasoning: "Alsace-Lorraine went to France.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Alsace-Lorraine",
            commonErrors: ["Confusing with other losses."],
          },
        },
        {
          id: "oleh-u3-vt-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two military restrictions Germany faced under Versailles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Military restrictions",
                statement: "Army limit+demilitarised Rhineland+no air force.",
              },
            ],
            steps: [
              {
                reasoning: "Army limited to 100,000; no air force.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rhineland demilitarised; navy restricted.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Army capped at 100,000, no air force, navy restricted, Rhineland demilitarised.",
            commonErrors: ["Only one restriction."],
          },
        },
        {
          id: "oleh-u3-vt-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was Germany's army size limit under the Treaty of Versailles?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100000, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Army limit",
                statement: "German army limited to 100,000.",
              },
            ],
            steps: [
              {
                reasoning: "Army limited to 100,000 men.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "100000",
          },
        },
        {
          id: "oleh-u3-vt-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which treaty dealt with Hungary after WWI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Treaty of St Germain" },
              { id: "b", text: "Treaty of Sèvres" },
              { id: "c", text: "Treaty of Trianon" },
              { id: "d", text: "Treaty of Neuilly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trianon",
                statement: "Treaty with Hungary.",
              },
            ],
            steps: [
              { reasoning: "Trianon = Hungary.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Treaty of Trianon",
            commonErrors: ["Confusing treaties."],
          },
        },
        {
          id: "oleh-u3-vt-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did Italy feel cheated after the peace treaties ('mutilated victory')?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was forced to pay no reparations" },
              { id: "b", text: "It expected more territory than it received" },
              { id: "c", text: "It lost its colonies to France" },
              { id: "d", text: "It was excluded from the League" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutilated victory",
                statement: "Italy felt cheated of promised territory.",
              },
            ],
            steps: [
              {
                reasoning: "Italy expected more gains than received.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** It expected more territory than it received",
            commonErrors: ["Confusing with Germany's grievances."],
          },
        },
        {
          id: "oleh-u3-vt-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Peace treaties 1919–23.",
          parts: [
            { label: "a", prompt: "Main Versailles terms?", marks: 2 },
            { label: "b", prompt: "Other treaties?", marks: 2 },
            { label: "c", prompt: "Why did problems arise?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treaties",
                statement: "Versailles+others+problems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Guilt/reparations/territory/military limits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correct terms.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "St Germain/Trianon/Neuilly/Sèvres.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct treaties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Grievances created (German/Italian).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Unresolved issues remain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Versailles (b) other treaties (c) problems",
          },
        },
        {
          id: "oleh-u3-vt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Treaty of Sèvres signed with the Ottoman Empire?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1920 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sèvres",
                statement: "Signed 1920; replaced by Lausanne 1923.",
              },
            ],
            steps: [
              { reasoning: "Sèvres signed 1920.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1920",
          },
        },
        {
          id: "oleh-u3-vt-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why the peace treaties of 1919–23 created lasting problems.",
          parts: [
            { label: "a", prompt: "German grievances?", marks: 2 },
            { label: "b", prompt: "Other powers' grievances?", marks: 2 },
            { label: "c", prompt: "Unresolved issues?", marks: 2 },
            { label: "d", prompt: "Long-term consequences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treaty consequences",
                statement: "Grievances+unresolved issues→revisionism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "War guilt, reparations, territorial loss, military limits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Seen as 'Diktat' — humiliation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Italy 'mutilated victory'; Japan's racial equality rejected.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Clear examples.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Polish Corridor, minorities, mandates.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Border disputes unresolved.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Revisionist powers sought to overturn treaties.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Set stage for WWII.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear conclusion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) German grievances (b) others (c) unresolved (d) consequences",
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
              { id: "a", text: "Control trade routes" },
              { id: "b", text: "Prevent war through collective security" },
              { id: "c", text: "Manage colonial empires" },
              { id: "d", text: "Supervise disarmament only" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Prevent war through collective security",
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
        {
          id: "oleh-u3-lf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body of the League of Nations included all member states?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Assembly" },
              { id: "b", text: "The Secretariat" },
              { id: "c", text: "The Council" },
              { id: "d", text: "The Permanent Court" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "League Assembly",
                statement: "Included all member states.",
              },
            ],
            steps: [
              {
                reasoning: "Assembly = all members.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The Assembly",
            commonErrors: ["Confusing with the Council."],
          },
        },
        {
          id: "oleh-u3-lf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why was the League of Nations weakened from the start?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It had too many members" },
              { id: "b", text: "Germany was a member" },
              { id: "c", text: "It had its own army" },
              { id: "d", text: "The USA never joined" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "US absence",
                statement: "USA never joined — fatal weakness.",
              },
            ],
            steps: [
              {
                reasoning: "US non-membership weakened League.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** The USA never joined",
            commonErrors: ["Blaming only later failures."],
          },
        },
        {
          id: "oleh-u3-lf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Japan invade Manchuria?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1931 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Manchuria",
                statement: "Invaded 1931; League failed to stop.",
              },
            ],
            steps: [
              { reasoning: "Manchuria invaded 1931.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1931",
          },
        },
        {
          id: "oleh-u3-lf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is collective security?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective security",
                statement: "Members act together against aggression.",
              },
            ],
            steps: [
              {
                reasoning: "All members respond to aggression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shared responsibility for peace.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "System where member states act together against aggression to prevent war.",
            commonErrors: ["Confusing with military alliance."],
          },
        },
        {
          id: "oleh-u3-lf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened in Abyssinia in 1935?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Japan invaded and was expelled" },
              { id: "b", text: "Italy invaded; League imposed weak sanctions" },
              { id: "c", text: "Germany invaded Poland" },
              { id: "d", text: "The League successfully defended it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abyssinia",
                statement: "Italian invasion 1935; weak sanctions.",
              },
            ],
            steps: [
              {
                reasoning: "Italy invaded Abyssinia; League failed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Italy invaded; League imposed weak sanctions",
            commonErrors: ["Saying League stopped Italy."],
          },
        },
        {
          id: "oleh-u3-lf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two successes of the League of Nations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League successes",
                statement: "Minor disputes resolved; humanitarian work.",
              },
            ],
            steps: [
              {
                reasoning: "Resolved Åland Islands/Upper Silesia/Memel.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Humanitarian work — refugees, health.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Resolved minor disputes (Åland, Upper Silesia, Memel) and did humanitarian work.",
            commonErrors: ["Listing major failures instead."],
          },
        },
        {
          id: "oleh-u3-lf-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did Italy invade Abyssinia?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1935 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abyssinia",
                statement: "Invaded 1935.",
              },
            ],
            steps: [
              { reasoning: "Italy invaded 1935.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1935",
          },
        },
        {
          id: "oleh-u3-lf-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did League sanctions fail to stop Italy in Abyssinia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The League had its own army" },
              { id: "b", text: "Italy had League support" },
              { id: "c", text: "No oil ban and members prioritised self-interest" },
              { id: "d", text: "Abyssinia was not a member" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sanctions failure",
                statement: "No oil ban; self-interested members.",
              },
            ],
            steps: [
              {
                reasoning: "Weak sanctions, no military enforcement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** No oil ban and members prioritised self-interest",
            commonErrors: ["Blaming only Italy."],
          },
        },
        {
          id: "oleh-u3-lf-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened when Japan invaded Manchuria in 1931?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Manchuria was defended successfully" },
              { id: "b", text: "The League failed to stop it" },
              { id: "c", text: "Japan was expelled from the League" },
              { id: "d", text: "The USA declared war" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Manchuria",
                statement: "League ignored Japanese aggression.",
              },
            ],
            steps: [
              {
                reasoning: "League took no effective action.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** The League failed to stop it",
            commonErrors: ["Saying League intervened successfully."],
          },
        },
        {
          id: "oleh-u3-lf-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The League of Nations.",
          parts: [
            { label: "a", prompt: "Main aim?", marks: 1 },
            { label: "b", prompt: "Two successes?", marks: 2 },
            { label: "c", prompt: "Two major failures?", marks: 2 },
            { label: "d", prompt: "Overall verdict?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League",
                statement: "Aim+successes+failures+verdict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Collective security/prevent war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two successes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Manchuria/Abyssinia/Rhineland.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Weighed judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) aim (b) successes (c) failures (d) verdict",
          },
        },
        {
          id: "oleh-u3-lf-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Hitler remilitarise the Rhineland?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1936 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhineland",
                statement: "Remilitarised 1936; League took no action.",
              },
            ],
            steps: [
              {
                reasoning: "Remilitarised March 1936.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1936",
          },
        },
        {
          id: "oleh-u3-lf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the successes and failures of the League of Nations.",
          parts: [
            { label: "a", prompt: "Aims and structure?", marks: 2 },
            { label: "b", prompt: "Successes?", marks: 2 },
            { label: "c", prompt: "Failures?", marks: 3 },
            { label: "d", prompt: "Verdict?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League evaluation",
                statement: "Aims+successes+failures+verdict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Collective security aim; Assembly/Council/Court.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "USA never joined — weakness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Minor disputes resolved.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Humanitarian work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Manchuria, Abyssinia, Rhineland.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No army/enforcement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Self-interested members; no US support.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mixed: succeeded in minor cases, failed against aggression.",
                marks: 1,
                markCode: "AO1",
              },
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
              { id: "b", text: "Economic sanctions on Japan" },
              { id: "c", text: "Military alliance against Germany" },
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
        {
          id: "oleh-u3-ww-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Anschluss?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Nazi-Soviet Pact" },
              { id: "b", text: "The 1938 union of Austria with Germany" },
              { id: "c", text: "The invasion of Poland" },
              { id: "d", text: "The Munich Agreement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anschluss",
                statement: "Austria-Germany union 1938.",
              },
            ],
            steps: [
              {
                reasoning: "Anschluss = Austria joined Germany.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** The 1938 union of Austria with Germany",
            commonErrors: ["Confusing with Munich."],
          },
        },
        {
          id: "oleh-u3-ww-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did the Munich Agreement (1938) give to Germany?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poland" },
              { id: "b", text: "Austria" },
              { id: "c", text: "The Sudetenland" },
              { id: "d", text: "Czechoslovakia entirely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Munich Agreement",
                statement: "Gave Sudetenland to Germany.",
              },
            ],
            steps: [
              {
                reasoning: "Munich gave Sudetenland.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** The Sudetenland",
            commonErrors: ["Confusing with later conquest of Czechoslovakia."],
          },
        },
        {
          id: "oleh-u3-ww-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Germany invade Poland, starting WWII?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1939 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WWII outbreak",
                statement: "Poland invaded September 1939.",
              },
            ],
            steps: [
              { reasoning: "Invasion September 1939.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1939",
          },
        },
        {
          id: "oleh-u3-ww-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the secret protocol of the Nazi-Soviet Pact?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secret protocol",
                statement: "Divided Poland between Germany and USSR.",
              },
            ],
            steps: [
              {
                reasoning: "Secret agreement to split Poland.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Also divided spheres of influence in Eastern Europe.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Secret protocol dividing Poland (and spheres of influence) between Germany and the USSR.",
            commonErrors: ["Saying it was public."],
          },
        },
        {
          id: "oleh-u3-ww-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which countries formed the Axis powers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Germany, Italy and Japan" },
              { id: "b", text: "Italy, Spain and Portugal" },
              { id: "c", text: "Germany, USSR and USA" },
              { id: "d", text: "Britain, France and USA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Axis powers",
                statement: "Germany, Italy, Japan.",
              },
            ],
            steps: [
              {
                reasoning: "Axis = Germany/Italy/Japan.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Germany, Italy and Japan",
            commonErrors: ["Including USSR."],
          },
        },
        {
          id: "oleh-u3-ww-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did appeasement fail to prevent WWII?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appeasement failure",
                statement: "Encouraged further aggression; delayed not prevented.",
              },
            ],
            steps: [
              {
                reasoning: "Hitler kept demanding more.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Concessions encouraged further aggression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Failed once Hitler took Czechoslovakia.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Appeasement encouraged Hitler's demands — only delayed, not prevented, war.",
            commonErrors: ["Saying appeasement worked."],
          },
        },
        {
          id: "oleh-u3-ww-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Munich Agreement signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1938 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Munich",
                statement: "Signed September 1938.",
              },
            ],
            steps: [
              { reasoning: "Munich Agreement 1938.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1938",
          },
        },
        {
          id: "oleh-u3-ww-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What triggered Britain and France declaring war on Germany?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Anschluss" },
              { id: "b", text: "Germany's invasion of Poland" },
              { id: "c", text: "Japan's attack on China" },
              { id: "d", text: "The Munich Agreement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "War declared",
                statement: "Poland invasion Sept 1939.",
              },
            ],
            steps: [
              {
                reasoning: "Guarantee to Poland honoured.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Germany's invasion of Poland",
            commonErrors: ["Confusing earlier events."],
          },
        },
        {
          id: "oleh-u3-ww-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which country did Japan invade in 1937?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "China" },
              { id: "b", text: "India" },
              { id: "c", text: "The USSR" },
              { id: "d", text: "Siam" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Japan-China war",
                statement: "Japan invaded China 1937.",
              },
            ],
            steps: [
              { reasoning: "Japan invaded China 1937.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** China",
            commonErrors: ["Confusing with Manchuria 1931."],
          },
        },
        {
          id: "oleh-u3-ww-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Causes of WWII.",
          parts: [
            { label: "a", prompt: "Hitler's foreign policy?", marks: 2 },
            { label: "b", prompt: "Axis aggression?", marks: 2 },
            { label: "c", prompt: "Outbreak of war?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII causes",
                statement: "Hitler+Axis+outbreak.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rearmament, Rhineland, Anschluss, Sudetenland.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Overturning Versailles.",
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
                reasoning: "Axis powers coordinated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Poland invasion Sept 1939.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Britain/France declared war.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Hitler (b) Axis (c) outbreak",
          },
        },
        {
          id: "oleh-u3-ww-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Mussolini invade Abyssinia?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1935 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abyssinia",
                statement: "Invaded 1935.",
              },
            ],
            steps: [
              { reasoning: "Italy invaded 1935.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1935",
          },
        },
        {
          id: "oleh-u3-ww-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the causes of World War II.",
          parts: [
            { label: "a", prompt: "Appeasement — policy and failure?", marks: 2 },
            { label: "b", prompt: "Axis aggression?", marks: 2 },
            { label: "c", prompt: "Nazi-Soviet Pact?", marks: 2 },
            { label: "d", prompt: "Outbreak of war?", marks: 3 },
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
                reasoning: "Concessions to avoid war; Munich 1938.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Encouraged further aggression; failed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Japan/Italy/Germany expansion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Axis powers coordinated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "1939 non-aggression pact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Secret protocol split Poland.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Poland invaded 1 Sept 1939.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Britain/France declared war 3 Sept.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear sequence/explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) appeasement (b) Axis (c) Pact (d) outbreak — causes of WWII",
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
