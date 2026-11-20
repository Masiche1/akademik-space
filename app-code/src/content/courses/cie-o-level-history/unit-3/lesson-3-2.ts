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
              { id: "a", text: "Versailles Treaty resentment" },
              { id: "b", text: "Invasion of Poland" },
              { id: "c", text: "Nazi-Soviet Pact" },
              { id: "d", text: "Declaration of war" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "1 September 1939" },
              { id: "b", text: "3 September 1939" },
              { id: "c", text: "1 September 1938" },
              { id: "d", text: "August 1939" },
            ],
            correctChoiceId: "a",
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
