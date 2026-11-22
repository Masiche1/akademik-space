import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "oleh-u3-lesson-3-2",
  code: "3-2",
  title: "Causes of World War II",
  goal: "I CAN analyse the long-term and short-term causes of WWII and evaluate interpretations.",
  standards: ["2130/2147: The twentieth century — causes of WWII"],
  vocabulary: [
    {
      term: "Appeasement",
      definition: "Conceding to aggressor's demands to avoid conflict.",
    },
    { term: "Anschluss", definition: "1938 union of Austria with Germany." },
    {
      term: "Munich Agreement",
      definition: "1938 deal giving Sudetenland to Germany.",
    },
    {
      term: "Phoney War",
      definition:
        "Period Sept 1939–April 1940 of little fighting after Poland fell.",
    },
    { term: "Axis powers", definition: "Germany, Italy, Japan alliance." },
    {
      term: "Guarantee to Poland",
      definition: "British/French promise to defend Poland (1939).",
    },
  ],
  concepts: [
    {
      id: "oleh-u3-wwii-longterm",
      title: "Long-term causes of WWII",
      skill: "Explain how Versailles, economic crisis and ideology led to war.",
      lesson: {
        sections: [
          {
            heading: "Versailles legacy",
            body: "Treaty created German resentment — revisionist powers (Germany, Italy, Japan) wanted to overturn settlements. Poland Corridor and demilitarised Rhineland seen as national humiliations to be reversed.",
          },
          {
            heading: "Economic and ideological factors",
            body: "Great Depression 1929 fuelled extremism — Nazis promised jobs/order, fascists gained support. Ideological clash: fascism vs democracy/communism. Failure of collective security (League weaknesses) encouraged aggression.",
          },
          {
            heading: "Aggressor expansion",
            body: "Japan: Manchuria 1931, China 1937. Italy: Abyssinia 1935. Germany: Rhineland 1936, Anschluss 1938, Sudetenland 1938, Czechoslovakia 1939. Each aggression unchallenged emboldened the next.",
          },
        ],
        keyFormulas: [
          {
            name: "WWII long-term",
            statement:
              "Versailles resentment+Depression extremism+League failure+aggressor expansion.",
          },
        ],
        workedExample: {
          problem: "How did the Depression contribute to WWII?",
          solution:
            "Economic hardship boosted extremist parties; people accepted aggressive leaders promising solutions; trade barriers deepened international tensions.",
        },
      },
      questions: [
        {
          id: "oleh-u3-wl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which event is classed as a long-term cause of WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Invasion of Poland" },
              { id: "b", text: "Nazi-Soviet Pact" },
              { id: "c", text: "Versailles Treaty resentment" },
              { id: "d", text: "Declaration of war" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Long-term causes",
                statement: "Background conditions, not immediate triggers.",
              },
            ],
            steps: [
              {
                reasoning: "Versailles = background.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Versailles Treaty resentment",
            commonErrors: ["Confusing long vs short term."],
          },
        },
        {
          id: "oleh-u3-wl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How did the Depression help extremists gain power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression effect",
                statement: "Economic crisis boosted extremist parties.",
              },
            ],
            steps: [
              {
                reasoning: "Unemployment/hardship.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "People turned to extremism.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unemployment and hardship made voters support extremist parties promising order and jobs.",
            commonErrors: ["Unrelated answers."],
          },
        },
        {
          id: "oleh-u3-wl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how League of Nations failures encouraged aggression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "League failure",
                statement: "Unchallenged aggression emboldened aggressors.",
              },
            ],
            steps: [
              {
                reasoning: "Manchuria/Abyssinia unpunished.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Aggressors saw weakness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Further aggression followed.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "League couldn't stop Japan/Italy — aggressors saw collective security as hollow, escalating expansion.",
            commonErrors: ["Blaming League for causing aggression."],
          },
        },
        {
          id: "oleh-u3-wl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Long-term causes of WWII.",
          parts: [
            { label: "a", prompt: "Versailles legacy?", marks: 3 },
            { label: "b", prompt: "Economic/ideological factors?", marks: 3 },
            { label: "c", prompt: "Aggressor expansion?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-term causes",
                statement: "Versailles+Depression+League+expansion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "German resentment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Revisionist powers.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Depression→extremism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ideological clash.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Collective security failure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Japan/Italy/Germany expansion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Unchallenged aggression.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Escalation clear.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) Versailles (b) economic/ideological (c) expansion",
          },
        },
        {
          id: "oleh-u3-wl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a SHORT-term cause of WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Great Depression" },
              { id: "b", text: "The rise of fascism" },
              { id: "c", text: "The invasion of Poland in 1939" },
              { id: "d", text: "The Treaty of Versailles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Long vs short term",
                statement: "Short-term = immediate triggers.",
              },
            ],
            steps: [
              {
                reasoning: "Poland invasion was the immediate trigger.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The invasion of Poland in 1939",
            commonErrors: ["Confusing long and short term."],
          },
        },
        {
          id: "oleh-u3-wl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was 'Lebensraum'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A League of Nations body" },
              { id: "b", text: "A type of submarine" },
              { id: "c", text: "A German welfare programme" },
              { id: "d", text: "Nazi idea of 'living space' for German expansion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lebensraum",
                statement: "Nazi 'living space' expansion ideology.",
              },
            ],
            steps: [
              {
                reasoning: "Lebensraum = living space for expansion.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Nazi idea of 'living space' for German expansion",
            commonErrors: ["Confusing with economic policy."],
          },
        },
        {
          id: "oleh-u3-wl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Great Depression begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1929 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Great Depression",
                statement: "Began 1929 (Wall Street Crash).",
              },
            ],
            steps: [
              { reasoning: "Depression began 1929.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1929",
          },
        },
        {
          id: "oleh-u3-wl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How did the Great Depression help extremist parties gain power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression effect",
                statement: "Economic crisis boosted extremism.",
              },
            ],
            steps: [
              {
                reasoning: "Mass unemployment and hardship.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Voters turned to parties promising order/jobs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unemployment and hardship made voters support extremist parties promising order and jobs.",
            commonErrors: ["Unrelated answers."],
          },
        },
        {
          id: "oleh-u3-wl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which powers are classed as 'revisionist' — wanting to overturn the Versailles settlement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spain and Portugal" },
              { id: "b", text: "USSR and Poland" },
              { id: "c", text: "Germany, Italy and Japan" },
              { id: "d", text: "Britain, France and USA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revisionist powers",
                statement: "Germany, Italy, Japan.",
              },
            ],
            steps: [
              {
                reasoning: "Revisionists wanted to overturn treaties.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Germany, Italy and Japan",
            commonErrors: ["Including the victors."],
          },
        },
        {
          id: "oleh-u3-wl-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Treaty of Versailles created long-term resentment in Germany.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Versailles legacy",
                statement: "Guilt+reparations+territory loss=resentment.",
              },
            ],
            steps: [
              {
                reasoning: "War guilt clause (Article 231) humiliated Germany.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Massive reparations burdened economy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Territorial losses (Polish Corridor) seen as national humiliation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "War guilt, reparations, territorial losses and military limits created lasting German resentment.",
            commonErrors: ["Only one grievance."],
          },
        },
        {
          id: "oleh-u3-wl-q11",
          difficulty: "core",
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
                statement: "Invaded 1931.",
              },
            ],
            steps: [
              { reasoning: "Manchuria invaded 1931.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1931",
          },
        },
        {
          id: "oleh-u3-wl-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which ideological clash contributed to WWII?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capitalism versus feudalism" },
              { id: "b", text: "Christianity versus Islam" },
              { id: "c", text: "Monarchy versus republic" },
              { id: "d", text: "Fascism versus democracy and communism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ideological clash",
                statement: "Fascism vs democracy/communism.",
              },
            ],
            steps: [
              {
                reasoning: "Ideological conflict deepened tensions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Fascism versus democracy and communism",
            commonErrors: ["Unrelated ideological pairs."],
          },
        },
        {
          id: "oleh-u3-wl-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why did unchallenged aggression embolden the Axis powers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They were invited to expand" },
              { id: "b", text: "The League's failures showed collective security was weak" },
              { id: "c", text: "The USA supported them" },
              { id: "d", text: "The USSR declared war on them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aggressor expansion",
                statement: "League weakness encouraged aggression.",
              },
            ],
            steps: [
              {
                reasoning: "Unpunished aggression emboldened aggressors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** The League's failures showed collective security was weak",
            commonErrors: ["Saying aggression was invited."],
          },
        },
        {
          id: "oleh-u3-wl-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Long-term causes of WWII.",
          parts: [
            { label: "a", prompt: "Versailles legacy?", marks: 2 },
            { label: "b", prompt: "Economic/ideological factors?", marks: 2 },
            { label: "c", prompt: "Aggressor expansion?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-term causes",
                statement: "Versailles+Depression+expansion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "German resentment/revisionism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Territorial/military humiliations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Depression→extremism; ideological clash.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "League failure encouraged aggression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Japan/Italy/Germany expansion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Each unchallenged step emboldened next.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) Versailles (b) economic/ideological (c) expansion",
          },
        },
        {
          id: "oleh-u3-wl-q15",
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
          id: "oleh-u3-wl-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the long-term causes of World War II.",
          parts: [
            { label: "a", prompt: "Versailles legacy?", marks: 2 },
            { label: "b", prompt: "Economic and ideological factors?", marks: 3 },
            { label: "c", prompt: "Aggressor expansion?", marks: 2 },
            { label: "d", prompt: "Overall significance?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-term causes",
                statement: "Versailles+Depression+League+expansion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "German resentment/revisionist powers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Territorial/military grievances.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Depression→extremist support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Ideological clash fascism vs democracy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "League failure encouraged aggression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Japan/Italy/Germany expansion unchallenged.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Escalation pattern clear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Created conditions for war.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Needed short-term triggers too.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) Versailles (b) economic/ideological (c) expansion (d) significance",
          },
        },
      ],
    },
    {
      id: "oleh-u3-wwii-shortterm",
      title: "Short-term Causes and Outbreak",
      skill: "Explain the immediate events that triggered WWII.",
      lesson: {
        sections: [
          {
            heading: "Appeasement and guarantees",
            body: "Britain/France appeased Hitler — Munich 1938 gave Sudetenland; guaranteed Poland March 1939 after Hitler took Czechoslovakia. Hitler's pact with USSR August 1939 removed two-front war fear — secret protocol divided Poland.",
          },
          {
            heading: "Invasion of Poland",
            body: "Germany invaded Poland 1 September 1939 (Blitzkrieg). USSR invaded eastern Poland 17 September. Britain/France declared war 3 September. Poland fell quickly — 'Phoney War' until April 1940.",
          },
          {
            heading: "Expansion of war",
            body: "April 1940: Germany invaded Denmark/Norway, then France/Benelux — France fell June 1940. Battle of Britain (air war) prevented invasion. Italy entered June 1940. War became global with Japan's attack on Pearl Harbor December 1941.",
          },
        ],
        keyFormulas: [
          {
            name: "WWII triggers",
            statement:
              "Appeasement→guarantee→Pact→Poland invasion→war; then France falls, Pearl Harbor.",
          },
        ],
        workedExample: {
          problem: "What made Hitler invade Poland in 1939?",
          solution:
            "Secure eastern flank via Nazi-Soviet Pact, free from western war (appeasement had failed), expand living space (Lebensraum) per Nazi ideology.",
        },
      },
      questions: [
        {
          id: "oleh-u3-ws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did Germany invade Poland?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "August 1939" },
              { id: "b", text: "1 September 1938" },
              { id: "c", text: "1 September 1939" },
              { id: "d", text: "3 September 1939" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poland invasion",
                statement: "1 Sept 1939.",
              },
            ],
            steps: [
              {
                reasoning: "Sept 1 invasion; Sept 3 declarations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 1 September 1939",
            commonErrors: ["Confusing with declarations."],
          },
        },
        {
          id: "oleh-u3-ws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Phoney War?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phoney War",
                statement: "Sept 1939–April 1940 little fighting.",
              },
            ],
            steps: [
              {
                reasoning: "After Poland fell, little action.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Until April 1940 invasion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Period after Poland fell where little fighting occurred until Germany attacked west in April 1940.",
            commonErrors: ["Confusing with real fighting."],
          },
        },
        {
          id: "oleh-u3-ws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why did the Nazi-Soviet Pact make German invasion of Poland possible?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pact effect",
                statement: "Secured eastern flank.",
              },
            ],
            steps: [
              { reasoning: "No war with USSR.", marks: 1, markCode: "AO1" },
              { reasoning: "Secure eastern flank.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Could focus on Poland/west.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Pact guaranteed USSR wouldn't attack — Germany could invade Poland without two-front war risk.",
            commonErrors: ["Saying USSR helped invade."],
          },
        },
        {
          id: "oleh-u3-ws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Outbreak of WWII.",
          parts: [
            { label: "a", prompt: "Appeasement end?", marks: 2 },
            { label: "b", prompt: "Guarantee to Poland?", marks: 2 },
            { label: "c", prompt: "Nazi-Soviet Pact?", marks: 2 },
            { label: "d", prompt: "War declared?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outbreak",
                statement: "Appeasement→guarantee→Pact→war.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Munich 1938.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Failed policy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "March 1939 guarantee.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "After Czechoslovakia taken.",
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
                reasoning: "Poland invaded Sept 1.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Britain/France declared Sept 3.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear sequence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) appeasement end (b) guarantee (c) Pact (d) war",
          },
        },
        {
          id: "oleh-u3-ws-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When did Britain and France guarantee Poland's borders?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "June 1940" },
              { id: "b", text: "March 1939" },
              { id: "c", text: "August 1939" },
              { id: "d", text: "September 1939" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Guarantee to Poland",
                statement: "March 1939, after Hitler took Czechoslovakia.",
              },
            ],
            steps: [
              {
                reasoning: "Guarantee given March 1939.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** March 1939",
            commonErrors: ["Confusing with declarations of war."],
          },
        },
        {
          id: "oleh-u3-ws-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What effectively ended appeasement in March 1939?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Nazi-Soviet Pact" },
              { id: "b", text: "Hitler took the rest of Czechoslovakia" },
              { id: "c", text: "Pearl Harbor" },
              { id: "d", text: "The invasion of Poland" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appeasement end",
                statement: "Hitler seized rest of Czechoslovakia.",
              },
            ],
            steps: [
              {
                reasoning: "Czechoslovakia's seizure ended appeasement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Hitler took the rest of Czechoslovakia",
            commonErrors: ["Confusing with Poland invasion."],
          },
        },
        {
          id: "oleh-u3-ws-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Germany invade France and the Low Countries?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1940 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of France",
                statement: "Invaded April-May 1940.",
              },
            ],
            steps: [
              { reasoning: "France invaded 1940.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1940",
          },
        },
        {
          id: "oleh-u3-ws-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was Blitzkrieg?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blitzkrieg",
                statement: "'Lightning war' — fast combined-arms tactic.",
              },
            ],
            steps: [
              {
                reasoning: "Fast combined air/armour/infantry assault.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Used against Poland/France/USSR.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "'Lightning war' — rapid combined-arms attack using tanks, aircraft and infantry.",
            commonErrors: ["Thinking it was a defensive tactic."],
          },
        },
        {
          id: "oleh-u3-ws-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happened on 7 December 1941?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Battle of Britain began" },
              { id: "b", text: "VE Day" },
              { id: "c", text: "Germany invaded Poland" },
              { id: "d", text: "Japan attacked Pearl Harbor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pearl Harbor",
                statement: "Dec 1941 — USA enters war.",
              },
            ],
            steps: [
              {
                reasoning: "Pearl Harbor attack Dec 1941.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Japan attacked Pearl Harbor",
            commonErrors: ["Confusing dates."],
          },
        },
        {
          id: "oleh-u3-ws-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why did the war become truly global in December 1941?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global war",
                statement: "Pearl Harbor → USA enters.",
              },
            ],
            steps: [
              {
                reasoning: "Japan's Pearl Harbor attack.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "USA entered war against Axis.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Pearl Harbor attack brought the USA into the war — fighting became genuinely global.",
            commonErrors: ["Vague 'more countries joined' answer."],
          },
        },
        {
          id: "oleh-u3-ws-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year did France fall to Germany?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1940 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of France",
                statement: "France fell June 1940.",
              },
            ],
            steps: [
              { reasoning: "France fell 1940.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1940",
          },
        },
        {
          id: "oleh-u3-ws-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the Battle of Britain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Naval battle in the Pacific" },
              { id: "b", text: "Air battle that prevented German invasion of Britain" },
              { id: "c", text: "Battle for Stalingrad" },
              { id: "d", text: "Ground battle in Poland" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Battle of Britain",
                statement: "1940 air battle; RAF won.",
              },
            ],
            steps: [
              {
                reasoning: "Air superiority prevented invasion.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Air battle that prevented German invasion of Britain",
            commonErrors: ["Confusing with D-Day."],
          },
        },
        {
          id: "oleh-u3-ws-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "When did Italy enter WWII on Germany's side?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "December 1941" },
              { id: "b", text: "June 1940" },
              { id: "c", text: "September 1939" },
              { id: "d", text: "August 1945" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Italy enters",
                statement: "June 1940.",
              },
            ],
            steps: [
              {
                reasoning: "Italy entered June 1940.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** June 1940",
            commonErrors: ["Confusing with later events."],
          },
        },
        {
          id: "oleh-u3-ws-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The outbreak of WWII.",
          parts: [
            { label: "a", prompt: "End of appeasement?", marks: 1 },
            { label: "b", prompt: "Guarantee to Poland?", marks: 1 },
            { label: "c", prompt: "Nazi-Soviet Pact?", marks: 2 },
            { label: "d", prompt: "War declared?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outbreak",
                statement: "Appeasement→guarantee→Pact→war.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hitler took Czechoslovakia March 1939.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Guarantee given March 1939.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Non-aggression pact August 1939.",
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
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) appeasement end (b) guarantee (c) Pact (d) war",
          },
        },
        {
          id: "oleh-u3-ws-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Japan attack Pearl Harbor?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1941 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pearl Harbor",
                statement: "December 1941.",
              },
            ],
            steps: [
              { reasoning: "Pearl Harbor 1941.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1941",
          },
        },
        {
          id: "oleh-u3-ws-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the immediate causes of WWII's outbreak in 1939.",
          parts: [
            { label: "a", prompt: "Appeasement and its end?", marks: 2 },
            { label: "b", prompt: "Guarantee to Poland?", marks: 2 },
            { label: "c", prompt: "Nazi-Soviet Pact?", marks: 2 },
            { label: "d", prompt: "Invasion and declarations of war?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Short-term causes",
                statement: "Appeasement→guarantee→Pact→invasion→war.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Munich 1938 concessions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Failed when Hitler took Czechoslovakia.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "March 1939 guarantee to Poland.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Committed Britain/France to defend Poland.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Pact August 1939 removed two-front war fear.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Secret protocol divided Poland.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Germany invaded Poland 1 Sept 1939.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "USSR invaded eastern Poland 17 Sept.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Britain/France declared war 3 Sept; sequence clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) appeasement (b) guarantee (c) Pact (d) invasion and declarations",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u3-3-2-notes",
      title: "WWII causes — notes",
      summary:
        "Long-term (Versailles, Depression) and short-term (appeasement, Pact, Poland).",
      sections: [
        {
          heading: "Long-term",
          body: "Versailles resentment; Depression→extremism; League failure; Axis expansion.",
        },
        {
          heading: "Short-term",
          body: "Munich→guarantee→Pact→Poland invasion Sept 1939→war; Phoney War; France falls.",
        },
      ],
    },
  ],
};
