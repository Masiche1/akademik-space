import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "his-u3-lesson-3-2",
  code: "3-2",
  title: "Decolonisation and Independence",
  goal: "I CAN describe the process of decolonisation after WWII, analyse key independence movements, and explain why some colonies achieved freedom through negotiation while others fought wars.",
  standards: ["Paper 1", "Paper 2", "Topic 8"],
  vocabulary: [
    {
      term: "Decolonisation",
      definition:
        "The process by which colonies gained independence from European powers, mainly 1945–1975.",
    },
    {
      term: "Non-Aligned Movement",
      definition:
        "Group of newly independent states (led by Nehru, Nasser, Tito) refusing alliance with either Cold War bloc.",
    },
    {
      term: "Partition",
      definition:
        "Division of British India into India and Pakistan (1947), causing mass migration and communal violence.",
    },
    {
      term: "Suez Crisis",
      definition:
        "1956 Anglo-French-Israeli invasion of Egypt after nationalisation of the Suez Canal; forced withdrawal by US pressure.",
    },
    {
      term: "Algerian War",
      definition:
        "1954–1962 war of independence against France; France's 'Algérie française' policy collapsed.",
    },
    {
      term: "Bandung Conference",
      definition:
        "1955 meeting of Asian and African states promoting anti-colonial solidarity and non-alignment.",
    },
  ],
  concepts: [
    {
      id: "his-u3-decolonisation-causes",
      title: "Causes and early stages of decolonisation",
      skill:
        "Explain the factors that weakened colonial rule after WWII and describe early independence movements.",
      lesson: {
        sections: [
          {
            heading: "Why empires fell",
            body: "WWII exhausted European powers economically and militarily; colonial troops' service raised expectations of equality; nationalist movements gained strength; the UN and superpowers pressured colonialism; and the Atlantic Charter (1941) had promised self-determination. Ideological opposition to colonialism grew in both blocs.",
          },
          {
            heading: "India and Pakistan (1947)",
            body: "India's independence movement (Gandhi's non-violent resistance, Nehru's Congress) forced British withdrawal, but partition into Hindu India and Muslim Pakistan caused ~15 million migrations and ~1 million deaths in communal violence. Kashmir remained disputed — a continuing flashpoint.",
          },
          {
            heading: "Ghana and the 'wind of change'",
            body: "Ghana became the first sub-Saharan African colony to gain independence (1957) under Kwame Nkrumah. Britain's Harold Macmillan declared the 'wind of change' was blowing through Africa (1960) — most British and French African colonies gained independence in the early 1960s.",
          },
        ],
        keyFormulas: [
          {
            name: "Decolonisation drivers",
            statement:
              "Exhausted Europe + nationalism + UN pressure + superpower rivalry",
          },
          {
            name: "Key dates",
            statement: "India 1947, Ghana 1957, 'Year of Africa' 1960",
          },
        ],
        workedExample: {
          problem:
            "Why did India achieve independence relatively peacefully compared with Algeria?",
          solution:
            "Britain's smaller settler population and Gandhi's mass non-violent movement enabled negotiated withdrawal; France had a large settler community in Algeria and treated it as integral territory — leading to war.",
        },
      },
      questions: [
        {
          id: "his-u3-dq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ghana's independence in 1957 was significant because it was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first country to join the UN" },
              { id: "b", text: "The last British colony" },
              {
                id: "c",
                text: "The first African country to gain independence",
              },
              {
                id: "d",
                text: "The first sub-Saharan colony to gain independence",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Ghana independence",
                statement:
                  "First sub-Saharan African colony to gain independence (1957).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ghana (formerly Gold Coast) was first sub-Saharan colony independent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** First sub-Saharan colony",
            commonErrors: [
              "Confusing with first African country overall — Egypt etc. predate.",
            ],
          },
        },
        {
          id: "his-u3-dq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Identify two causes of decolonisation after WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation causes",
                statement:
                  "European exhaustion, nationalism, international pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "European powers were economically and militarily exhausted by WWII, unable to maintain empires.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nationalist movements gained mass support; colonial troops' wartime service raised expectations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "UN and superpower pressure against colonialism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "European exhaustion + nationalism + international pressure.",
            commonErrors: ["Listing only one factor."],
          },
        },
        {
          id: "his-u3-dq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the partition of India (1947) was so violent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition violence",
                statement:
                  "Religious division + mass migration + weak state institutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partition divided along religious lines — Hindu majority India, Muslim Pakistan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "~15 million people migrated; minorities feared persecution in the 'wrong' state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Communal violence, massacres and refugee crises overwhelmed weak new governments.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: rushed partition + religious hatred = catastrophe.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Religious division + mass migration + communal violence.",
            commonErrors: ["Treating partition as a clean administrative act."],
          },
        },
        {
          id: "his-u3-dq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the process of decolonisation in Africa.",
          parts: [
            {
              label: "a",
              prompt: "Describe the 'wind of change' period (1957–1965).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why some colonies gained independence peacefully while others fought.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the long-term consequences of decolonisation for Africa.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "African decolonisation",
                statement:
                  "Rapid independence 1957–65; mixed peaceful/violent paths.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ghana 1957 → Nigeria, Senegal etc. 1960 ('Year of Africa') → most colonies independent by mid-1960s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Timeline of rapid decolonisation accurately described.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Coherent account of the 'wind of change' period.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Peaceful: British/French West Africa negotiated independence; settler colonies (Kenya, Algeria) fought wars.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Settler presence and strategic value determined resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Explanation of why paths differed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Consequences: new states but colonial borders created instability; economic dependency continued.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluative judgement on success/failure of decolonisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 1957–65 wave of independence. (b) Negotiated vs settler wars. (c) Sovereignty gained; borders/dependency problems remained.",
            commonErrors: [
              "Treating independence as ending all colonial problems.",
            ],
          },
        },
        {
          id: "his-u3-dq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Atlantic Charter (1941) promised:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The creation of the UN" },
              { id: "b", text: "A permanent alliance against Germany" },
              { id: "c", text: "The end of all colonial empires" },
              {
                id: "d",
                text: "Self-determination for peoples and no territorial aggrandisement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Atlantic Charter",
                statement:
                  "1941 Anglo-American declaration promising self-determination.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Charter pledged respect for self-determination — later used against colonialism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Self-determination for peoples",
            commonErrors: [
              "Confusing it with the UN Charter or later declarations.",
            ],
          },
        },
        {
          id: "his-u3-dq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Kwame Nkrumah led:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "India's independence movement" },
              {
                id: "b",
                text: "Ghana's independence movement and first sub-Saharan independence (1957)",
              },
              { id: "c", text: "Kenya's Mau Mau uprising" },
              { id: "d", text: "The Algerian war of independence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Kwame Nkrumah",
                statement: "Led Gold Coast/Ghana to independence in 1957.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nkrumah led Ghana's movement, the first sub-Saharan colony to gain independence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Ghana's independence movement",
            commonErrors: ["Confusing him with Gandhi or Algerian leaders."],
          },
        },
        {
          id: "his-u3-dq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "India and Pakistan were partitioned in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1950" },
              { id: "c", text: "1957" },
              { id: "d", text: "1947" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Partition of India",
                statement:
                  "British India divided into India and Pakistan in 1947.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partition and independence occurred in August 1947.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 1947",
            commonErrors: [
              "Confusing it with Ghana (1957) or later independence dates.",
            ],
          },
        },
        {
          id: "his-u3-dq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'wind of change' referred to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Harold Macmillan's 1960 declaration that African colonialism was ending",
              },
              { id: "b", text: "The end of the Cold War" },
              { id: "c", text: "A Soviet propaganda campaign" },
              { id: "d", text: "A hurricane that delayed independence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wind of change",
                statement:
                  "Macmillan's 1960 speech acknowledging the coming end of African colonial rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The phrase described the rapid wave of African decolonisation in the early 1960s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Macmillan's 1960 speech on African independence",
            commonErrors: [
              "Treating it as a literal weather event or Cold War term.",
            ],
          },
        },
        {
          id: "his-u3-dq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why decolonisation accelerated after WWII?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The combination of European exhaustion, rising nationalism and international/UN pressure",
              },
              {
                id: "b",
                text: "European powers voluntarily gave up empires out of generosity",
              },
              {
                id: "c",
                text: "Colonial peoples lost all interest in independence",
              },
              {
                id: "d",
                text: "The League of Nations enforced decolonisation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decolonisation drivers",
                statement:
                  "Exhausted Europe + nationalism + international pressure = rapid independence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "WWII left European powers too weak to maintain empires against rising nationalist movements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** European exhaustion + nationalism + international pressure",
            commonErrors: [
              "Attributing decolonisation to European generosity.",
            ],
          },
        },
        {
          id: "his-u3-dq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Atlantic Charter was signed; (b) India and Pakistan became independent; (c) Ghana became independent; (d) the 'Year of Africa'.",
          response: {
            type: "numeric",
            parts: [
              { label: "Atlantic Charter", answer: 1941 },
              { label: "India and Pakistan independence", answer: 1947 },
              { label: "Ghana independence", answer: 1957 },
              { label: "Year of Africa", answer: 1960 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation chronology",
                statement: "1941 → 1947 → 1957 → 1960.",
              },
            ],
            steps: [
              {
                reasoning: "Atlantic Charter August 1941.",
                working: "1941",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "India/Pakistan August 1947.",
                working: "1947",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ghana 1957.",
                working: "1957",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year of Africa 1960.",
                working: "1960",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1941; 1947; 1957; 1960",
            commonErrors: [
              "Confusing Ghana (1957) with the Year of Africa (1960).",
            ],
          },
        },
        {
          id: "his-u3-dq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) India and Pakistan gained independence; (b) Ghana became independent; (c) the 'Year of Africa'.",
          response: {
            type: "numeric",
            parts: [
              { label: "India and Pakistan", answer: 1947 },
              { label: "Ghana", answer: 1957 },
              { label: "Year of Africa", answer: 1960 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation chronology",
                statement: "1947 → 1957 → 1960.",
              },
            ],
            steps: [
              {
                reasoning: "Independence 1947.",
                working: "1947",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ghana 1957.",
                working: "1957",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year of Africa 1960.",
                working: "1960",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1947; 1957; 1960",
            commonErrors: ["Confusing the independence dates."],
          },
        },
        {
          id: "his-u3-dq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the Atlantic Charter, India and Pakistan's independence, Ghana's independence, the 'Year of Africa', the peak of decolonisation (most colonies independent).",
          response: {
            type: "numeric",
            parts: [
              { label: "Atlantic Charter", answer: 1 },
              { label: "India and Pakistan", answer: 2 },
              { label: "Ghana", answer: 3 },
              { label: "Year of Africa", answer: 4 },
              { label: "Peak decolonisation", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decolonisation chronology",
                statement: "1941 → 1947 → 1957 → 1960 → mid-1960s.",
              },
            ],
            steps: [
              {
                reasoning: "Atlantic Charter 1941 — earliest.",
                working: "1941",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "India/Pakistan 1947 — second.",
                working: "1947",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ghana 1957 — third.",
                working: "1957",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year of Africa 1960 — fourth.",
                working: "1960",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Most colonies independent by mid-1960s — latest.",
                working: "1960s",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Charter 1, India 2, Ghana 3, Year of Africa 4, peak 5",
            commonErrors: ["Placing Ghana after the Year of Africa."],
          },
        },
        {
          id: "his-u3-dq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the figure for each item about the partition of India: (a) the approximate number of people who migrated; (b) the approximate number of deaths in communal violence; (c) the number of years between Indian independence (1947) and Ghana's (1957).",
          response: {
            type: "numeric",
            parts: [
              { label: "Migrants (millions)", answer: 15, unit: "million" },
              { label: "Deaths (millions)", answer: 1, unit: "million" },
              { label: "Years India to Ghana", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Partition figures",
                statement:
                  "~15 million migrated; ~1 million died; 1947→1957 = 10 years.",
              },
            ],
            steps: [
              {
                reasoning: "About 15 million people migrated during partition.",
                working: "15 \\times 10^6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Communal violence killed roughly 1 million people.",
                working: "1 \\times 10^6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1957 - 1947$.",
                working: "1957 - 1947 = 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "~15 million; ~1 million; 10 years",
            commonErrors: ["Misremembering the scale of migration and deaths."],
          },
        },
        {
          id: "his-u3-dq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between Indian independence (1947) and the Year of Africa (1960); (b) between Ghana's independence (1957) and the Year of Africa (1960); (c) the approximate duration of the main decolonisation period (1945–1975).",
          response: {
            type: "numeric",
            parts: [
              { label: "India to Year of Africa", answer: 13 },
              { label: "Ghana to Year of Africa", answer: 3 },
              { label: "Decolonisation period", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Interval calculation",
                statement: "Subtract earlier year from later year.",
              },
            ],
            steps: [
              {
                reasoning: "$1960 - 1947$.",
                working: "1960 - 1947 = 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1960 - 1957$.",
                working: "1960 - 1957 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1975 - 1945$.",
                working: "1975 - 1945 = 30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13; 3; 30 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-dq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why India achieved independence relatively peacefully compared with Algeria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "India vs Algeria",
                statement:
                  "Britain's smaller settler presence and Gandhi's non-violence enabled negotiation; France's settler community in Algeria led to war.",
              },
            ],
            steps: [
              {
                reasoning:
                  "India had a large nationalist movement but fewer European settlers to defend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gandhi's mass non-violent resistance made continued colonial rule politically untenable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Britain could negotiate withdrawal; France treated Algeria as integral territory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: settler presence and colonial doctrine determined the path to independence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fewer settlers + non-violent movement enabled British negotiation; French settler community forced war.",
            commonErrors: ["Ignoring the role of settler populations."],
          },
        },
        {
          id: "his-u3-dq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of decolonisation in Asia and Africa.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two factors that drove decolonisation after WWII.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe the independence of India and the partition of 1947.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the long-term consequences of decolonisation for the new states.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decolonisation",
                statement:
                  "Exhausted Europe + nationalism + international pressure → independence with mixed legacies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Examples: European exhaustion after WWII, rising nationalism, UN and superpower pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two factors identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Gandhi's non-violent movement and Nehru's Congress pressured Britain to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Partition into India and Pakistan caused mass migration and communal violence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Kashmir remained disputed — an enduring flashpoint.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Positive: sovereignty and self-rule achieved; new nations joined the UN.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Negative: colonial borders created ethnic divisions; economic dependency continued.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Weighs political gains against economic and territorial problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Exhaustion, nationalism, pressure. (b) Gandhi/Nehru → independence but partition violence. (c) Sovereignty gained; borders and dependency problems remained.",
            commonErrors: [
              "Treating independence as ending all colonial problems.",
            ],
          },
        },
      ],
    },
    {
      id: "his-u3-non-aligned",
      title: "The Non-Aligned Movement and New Nations",
      skill:
        "Describe the emergence of newly independent states, the Non-Aligned Movement, and their role in Cold War politics.",
      lesson: {
        sections: [
          {
            heading: "New nations and the Cold War",
            body: "Newly independent states (India, Egypt, Indonesia, Ghana) were courted by both superpowers — aid, arms and ideology competed for their allegiance. Most refused to join either bloc, instead pursuing independent development paths.",
          },
          {
            heading: "Non-Aligned Movement",
            body: "Founded at Bandung (1955) and formalised at Belgrade (1961), the NAM included Nehru (India), Nasser (Egypt), Tito (Yugoslavia) and Sukarno (Indonesia). It championed anti-colonialism, neutrality in the Cold War, and South-South cooperation. It was never truly neutral — members often leaned toward one side when interests required.",
          },
          {
            heading: "Challenges of independence",
            body: "New states faced legacies of colonial borders (ethnic divisions), economic dependency on former rulers, Cold War interference (coups, proxy wars), and the challenge of building institutions from scratch. Many became 'client states' despite non-alignment rhetoric.",
          },
        ],
        keyFormulas: [
          {
            name: "NAM founders",
            statement: "Nehru, Nasser, Tito, Sukarno — Bandung 1955",
          },
          {
            name: "NAM aims",
            statement:
              "Anti-colonialism + neutrality + South-South cooperation",
          },
        ],
        workedExample: {
          problem: "Was the Non-Aligned Movement genuinely neutral?",
          solution:
            "Partially — members refused formal alliance but often accepted aid from both sides and sometimes leaned toward one bloc when their interests were threatened (e.g. Egypt toward USSR after Suez).",
        },
      },
      questions: [
        {
          id: "his-u3-namq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Bandung Conference (1955) is associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Suez Crisis" },
              { id: "b", text: "The end of the Cold War" },
              { id: "c", text: "The rise of the Non-Aligned Movement" },
              { id: "d", text: "Founding the UN" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Bandung Conference",
                statement:
                  "1955 Asian-African meeting promoting non-alignment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bandung was a precursor to the Non-Aligned Movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Non-Aligned Movement",
            commonErrors: ["Confusing with other conferences."],
          },
        },
        {
          id: "his-u3-namq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Name two leaders associated with the Non-Aligned Movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM leaders",
                statement: "Nehru, Nasser, Tito, Sukarno.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of Nehru (India), Nasser (Egypt), Tito (Yugoslavia), Sukarno (Indonesia).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both leaders correctly identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Accurate attribution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nehru, Nasser, Tito or Sukarno.",
            commonErrors: ["Naming Cold War superpower leaders instead."],
          },
        },
        {
          id: "his-u3-namq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why newly independent states struggled to remain non-aligned.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-alignment limits",
                statement:
                  "Economic needs + security threats + superpower pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economic dependency on former colonial powers and need for aid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Security threats (e.g. invasions, civil wars) forced states to seek superpower protection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both superpowers competed aggressively for influence via aid, arms and propaganda.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: non-alignment was aspirational more than practical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic needs + security threats + superpower competition limited neutrality.",
            commonErrors: ["Treating non-alignment as a simple choice."],
          },
        },
        {
          id: "his-u3-namq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the significance of the Non-Aligned Movement in international relations.",
          parts: [
            {
              label: "a",
              prompt: "Describe the NAM's founding principles.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain its role in the Cold War.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate its achievements and limitations.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NAM significance",
                statement:
                  "Third force in Cold War; anti-colonial solidarity; limited practical impact.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Principles: anti-colonialism, neutrality in Cold War, peaceful coexistence, South-South cooperation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Founded Bandung 1955, formalised Belgrade 1961.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Role: gave newly independent states collective voice; challenged superpower dominance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Criticised both blocs; supported decolonisation (e.g. Algeria).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Provided alternative to bloc membership — though members often leaned one way.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Achievements: amplified Global South voice; anti-colonial solidarity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitations: never truly neutral; divisions among members; limited economic power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate: symbolic significance exceeded practical impact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Anti-colonial + neutral principles. (b) Third force voice. (c) Symbolic impact > practical power.",
            commonErrors: ["Overstating NAM's practical influence."],
          },
        },
        {
          id: "his-u3-namq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Non-Aligned Movement was formally established at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "New York, 1945" },
              { id: "b", text: "Belgrade, 1961" },
              { id: "c", text: "Moscow, 1956" },
              { id: "d", text: "Bandung, 1955" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM founding",
                statement:
                  "Bandung (1955) was the precursor; the NAM was formalised at Belgrade (1961).",
              },
            ],
            steps: [
              {
                reasoning:
                  "The NAM was formally established at the Belgrade Conference of 1961.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Belgrade, 1961",
            commonErrors: [
              "Confusing Bandung (1955) with the formal founding (1961).",
            ],
          },
        },
        {
          id: "his-u3-namq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Jawaharlal Nehru was the leader of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Indonesia" },
              { id: "b", text: "India" },
              { id: "c", text: "Egypt" },
              { id: "d", text: "Yugoslavia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nehru",
                statement:
                  "India's first prime minister and a founder of the NAM.",
              },
            ],
            steps: [
              {
                reasoning: "Nehru led India and championed non-alignment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** India",
            commonErrors: ["Confusing him with Nasser, Tito or Sukarno."],
          },
        },
        {
          id: "his-u3-namq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Bandung Conference was held in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1955" },
              { id: "b", text: "1945" },
              { id: "c", text: "1961" },
              { id: "d", text: "1975" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Bandung Conference",
                statement:
                  "1955 Asian-African meeting promoting anti-colonial solidarity — a precursor to NAM.",
              },
            ],
            steps: [
              {
                reasoning: "Bandung was held in 1955.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 1955",
            commonErrors: ["Confusing it with the Belgrade founding (1961)."],
          },
        },
        {
          id: "his-u3-namq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "NAM members primarily sought:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recolonisation by Europe" },
              { id: "b", text: "Military alliance with the USSR" },
              {
                id: "c",
                text: "Independence from both Cold War blocs through neutrality and South-South cooperation",
              },
              { id: "d", text: "Membership in NATO" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-alignment",
                statement:
                  "Refusing formal alliance with either bloc while pursuing independent development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NAM members rejected alliance with either superpower bloc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Independence from both blocs",
            commonErrors: ["Thinking NAM meant alliance with the USSR."],
          },
        },
        {
          id: "his-u3-namq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why NAM members struggled to remain neutral?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Economic needs for aid, security threats, and aggressive superpower competition for influence",
              },
              { id: "b", text: "They were forced to join NATO" },
              { id: "c", text: "They rejected all foreign assistance" },
              { id: "d", text: "The UN prohibited neutrality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-alignment limits",
                statement:
                  "Economic dependency + security needs + superpower pressure undermined neutrality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New states needed aid and protection; both superpowers competed aggressively for their allegiance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Economic needs + security threats + superpower competition",
            commonErrors: ["Treating non-alignment as a simple free choice."],
          },
        },
        {
          id: "his-u3-namq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Bandung Conference; (b) the NAM was formally established at Belgrade; (c) the number of years between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "Bandung Conference", answer: 1955 },
              { label: "Belgrade founding", answer: 1961 },
              { label: "Years between", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM chronology",
                statement: "Bandung 1955; Belgrade 1961; 6 years apart.",
              },
            ],
            steps: [
              {
                reasoning: "Bandung was 1955.",
                working: "1955",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Belgrade was 1961.",
                working: "1961",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1961 - 1955 = 6$ years.",
                working: "1961 - 1955 = 6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1955; 1961; 6 years",
            commonErrors: [
              "Arithmetic slips or confusing the two conferences.",
            ],
          },
        },
        {
          id: "his-u3-namq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) India's independence; (b) the Bandung Conference; (c) the NAM's formal founding at Belgrade.",
          response: {
            type: "numeric",
            parts: [
              { label: "India independent", answer: 1947 },
              { label: "Bandung", answer: 1955 },
              { label: "Belgrade NAM", answer: 1961 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM chronology",
                statement: "1947 → 1955 → 1961.",
              },
            ],
            steps: [
              {
                reasoning: "India independent 1947.",
                working: "1947",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bandung 1955.",
                working: "1955",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Belgrade 1961.",
                working: "1961",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1947; 1955; 1961",
            commonErrors: ["Confusing Bandung with Belgrade."],
          },
        },
        {
          id: "his-u3-namq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): India's independence, the Bandung Conference, the Suez Crisis, the NAM's formal founding at Belgrade.",
          response: {
            type: "numeric",
            parts: [
              { label: "India independent", answer: 1 },
              { label: "Bandung", answer: 2 },
              { label: "Suez Crisis", answer: 3 },
              { label: "Belgrade NAM", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM chronology",
                statement: "1947 → 1955 → 1956 → 1961.",
              },
            ],
            steps: [
              {
                reasoning: "India 1947 — earliest.",
                working: "1947",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bandung 1955 — second.",
                working: "1955",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suez 1956 — third.",
                working: "1956",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Belgrade 1961 — latest.",
                working: "1961",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "India 1, Bandung 2, Suez 3, Belgrade 4",
            commonErrors: ["Placing Belgrade before Suez."],
          },
        },
        {
          id: "his-u3-namq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Indonesia gained independence; (b) Nasser's Egypt nationalised the Suez Canal; (c) the NAM was founded at Belgrade.",
          response: {
            type: "numeric",
            parts: [
              { label: "Indonesia independent", answer: 1949 },
              { label: "Suez nationalised", answer: 1956 },
              { label: "NAM founded", answer: 1961 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NAM chronology",
                statement: "Indonesia 1949; Suez 1956; Belgrade 1961.",
              },
            ],
            steps: [
              {
                reasoning: "Indonesia became independent in 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nasser nationalised the canal in 1956.",
                working: "1956",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NAM founded 1961.",
                working: "1961",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1949; 1956; 1961",
            commonErrors: [
              "Confusing Indonesia's independence date with India's.",
            ],
          },
        },
        {
          id: "his-u3-namq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between Bandung (1955) and Belgrade (1961); (b) between India's independence (1947) and Bandung (1955); (c) between the NAM's founding (1961) and the end of the Cold War (approx. 1991).",
          response: {
            type: "numeric",
            parts: [
              { label: "Bandung to Belgrade", answer: 6 },
              { label: "India to Bandung", answer: 8 },
              { label: "NAM to Cold War end", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Interval calculation",
                statement: "Subtract earlier year from later year.",
              },
            ],
            steps: [
              {
                reasoning: "$1961 - 1955$.",
                working: "1961 - 1955 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1955 - 1947$.",
                working: "1955 - 1947 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1991 - 1961$.",
                working: "1991 - 1961 = 30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6; 8; 30 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-namq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Non-Aligned Movement was never truly neutral.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NAM neutrality limits",
                statement:
                  "Members refused formal alliance but often leaned toward one bloc when interests required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Members accepted aid and arms from both superpowers — creating dependencies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Security threats forced states to seek protection, often from one bloc (e.g. Egypt toward USSR after Suez).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Superpower competition made genuine neutrality impractical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: non-alignment was aspirational more than absolute.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aid dependencies and security needs meant members often leaned toward one bloc — neutrality was partial.",
            commonErrors: ["Treating NAM members as perfectly neutral."],
          },
        },
        {
          id: "his-u3-namq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the significance of the Non-Aligned Movement in international relations.",
          parts: [
            {
              label: "a",
              prompt: "Describe the NAM's founding principles.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain its role in the Cold War.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate its achievements and limitations.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NAM significance",
                statement:
                  "Third force in Cold War; anti-colonial solidarity; symbolic impact exceeded practical power.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Principles: anti-colonialism, neutrality, peaceful coexistence, South-South cooperation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Founded Bandung 1955, formalised Belgrade 1961.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Role: gave newly independent states a collective voice; challenged superpower dominance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Criticised both blocs; supported decolonisation (e.g. Algeria).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Provided an alternative to bloc membership — though members often leaned one way.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Achievements: amplified Global South voice; anti-colonial solidarity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitations: never truly neutral; divisions; limited economic power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate: symbolic significance exceeded practical impact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Anti-colonial + neutral principles. (b) Third force voice. (c) Symbolic impact > practical power.",
            commonErrors: ["Overstating NAM's practical influence."],
          },
        },
      ],
    },
  ],
};
