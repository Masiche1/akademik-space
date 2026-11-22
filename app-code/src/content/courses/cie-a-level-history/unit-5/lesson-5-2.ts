import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciealehist-u5-lesson-5-2",
  code: "5-2",
  title: "Decolonisation: Case Studies and Consequences",
  goal: "I CAN analyse specific independence movements and evaluate decolonisation's consequences.",
  standards: ["Cambridge A Level History 9489", "Unit 5: 20th century depth"],
  vocabulary: [
    {
      term: "Decolonisation",
      definition: "Withdrawal of colonial powers, independence.",
    },
    {
      term: "Partition",
      definition: "Division of territory between new states.",
    },
    { term: "Non-alignment", definition: "Refusal to join Cold War blocs." },
    {
      term: "Neocolonialism",
      definition: "Economic control after formal independence.",
    },
    {
      term: "Bandung Conference",
      definition: "1955 meeting of Asian-African states.",
    },
    {
      term: "Settler colony",
      definition: "Colony with large European settler population.",
    },
  ],
  concepts: [
    {
      id: "ciealehist-u5l2-c1-india",
      title: "India's independence and partition",
      skill:
        "Analyse India's independence movement and partition consequences.",
      lesson: {
        sections: [
          {
            heading: "Independence movement",
            body: "Gandhi's non-violent resistance (satyagraha, boycotts, marches) mobilised masses — Salt March 1930, Quit India 1942. Muslim League demanded separate state → Pakistan. WWII weakened Britain → Attlee government granted independence 1947.",
          },
          {
            heading: "Partition consequences",
            body: "Partition created India (Hindu majority) + Pakistan (Muslim majority, East+West). Mass migration (~14 million), communal violence (~1 million deaths), Kashmir dispute unresolved → three wars (1947-48, 1965, 1971 — Bangladesh created). Pakistan split 1971 (East Pakistan → Bangladesh).",
          },
        ],
        keyFormulas: [
          { name: "1947", statement: "Independence + partition" },
          { name: "Migration", statement: "~14 million displaced" },
          { name: "Kashmir", statement: "Unresolved dispute" },
        ],
        workedExample: {
          problem: "Why did partition cause such violence?",
          solution:
            "Sudden division of mixed communities → fear, rumours, communal hatred → mass migration and killings as minorities fled to 'their' side.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "India gained independence in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1950" },
              { id: "b", text: "1947" },
              { id: "c", text: "1930" },
              { id: "d", text: "1945" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Independence", statement: "1947." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1947",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was 'satyagraha'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satyagraha",
                statement: "Truth-force.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gandhi's non-violent resistance — truth-force using boycotts, marches, civil disobedience to morally pressure British; powerful mass mobilisation tool.",
            commonErrors: ["Violence."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the Muslim League demanded a separate Pakistan.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pakistan demand",
                statement: "Separate state.",
              },
            ],
            steps: [
              { reasoning: "Religious identity.", marks: 1, markCode: "M" },
              { reasoning: "Political fear.", marks: 1, markCode: "M" },
              { reasoning: "Jinnah's role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Muslims feared Hindu domination in unified India; Jinnah argued two-nation theory — Hindus and Muslims distinct nations deserving separate states.",
            commonErrors: ["No reasons."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the consequences of India's partition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition consequences",
                statement: "Mass displacement.",
              },
            ],
            steps: [
              { reasoning: "Immediate.", marks: 1, markCode: "M" },
              { reasoning: "Kashmir.", marks: 1, markCode: "M" },
              { reasoning: "Long-term.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "~14m displaced, ~1m killed; Kashmir unresolved → wars; Pakistan split 1971 → Bangladesh; enduring India-Pakistan hostility.",
            commonErrors: ["Peaceful transition."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether partition was inevitable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition debate",
                statement: "Contingency vs inevitability.",
              },
            ],
            steps: [
              { reasoning: "Inevitability case.", marks: 1, markCode: "M" },
              { reasoning: "Alternative case.", marks: 1, markCode: "M" },
              { reasoning: "Historiography.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Muslim League's rising influence + Hindu-Muslim tensions + British 'divide and rule' legacy made partition likely; but united India possible — contingency of 1946-47 decisions mattered.",
            commonErrors: ["Certainty."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'Quit India' movement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Quit India", statement: "1942." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1942 mass civil disobedience demanding immediate British withdrawal — suppressed brutally but showed Indian resolve; accelerated independence timeline.",
            commonErrors: ["WWII action."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Partition created which two countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "India only" },
              { id: "b", text: "India and Pakistan" },
              { id: "c", text: "Pakistan and Bangladesh" },
              { id: "d", text: "India and Bangladesh" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Partition", statement: "India+Pakistan." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** India+Pakistan",
            commonErrors: ["Wrong pair."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two long-term consequences of partition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Long-term",
                statement: "Kashmir, hostility.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. unresolved Kashmir dispute → wars 1947, 1965, 1971; enduring India-Pakistan hostility affecting regional stability and nuclearisation.",
            commonErrors: ["Resolved issues."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did Britain grant independence in 1947 rather than earlier or later?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timing",
                statement: "WWII weakened.",
              },
            ],
            steps: [
              { reasoning: "WWII impact.", marks: 1, markCode: "M" },
              { reasoning: "Domestic pressure.", marks: 1, markCode: "M" },
              { reasoning: "Strategic.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "WWII exhausted Britain economically/militarily; independence movement too strong to suppress; Attlee government chose orderly transfer over chaotic collapse — also Cold War considerations.",
            commonErrors: ["Simple goodwill."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of religion in India's independence and partition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Religion",
                statement: "Identity + division.",
              },
            ],
            steps: [
              { reasoning: "Unity role.", marks: 1, markCode: "M" },
              { reasoning: "Division role.", marks: 1, markCode: "M" },
              { reasoning: "British manipulation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Religion unified resistance against colonialism but also divided Hindu/Muslim interests → partition; British 'divide and rule' policies exacerbated communal tensions.",
            commonErrors: ["One role."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gandhi's method of 'satyagraha' was based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreign military intervention" },
              { id: "b", text: "Non-violent resistance" },
              { id: "c", text: "Armed rebellion" },
              { id: "d", text: "Economic sanctions alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Satyagraha", statement: "Non-violence." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Non-violent resistance",
            commonErrors: ["Violence."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Salt March of 1930?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Salt March", statement: "1930." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gandhi's famous civil disobedience march to the sea to protest the salt tax — symbolised mass mobilisation against British rule and inspired worldwide attention.",
            commonErrors: ["Armed action."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Second World War weakened Britain's ability to hold India.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WWII impact",
                statement: "Exhaustion.",
              },
            ],
            steps: [
              { reasoning: "Economic exhaustion — war costs drained resources.", marks: 1, markCode: "M" },
              { reasoning: "Military overstretch — forces committed globally.", marks: 1, markCode: "M" },
              { reasoning: "Political pressure — independence movement too strong to suppress.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "War bankruptcy, military overstretch and an ungovernable nationalist movement forced Britain to accept transfer of power in 1947.",
            commonErrors: ["Strengthened control."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the significance of the 1971 Bangladesh war for the legacy of partition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1971 war",
                statement: "Partition's legacy.",
              },
            ],
            steps: [
              { reasoning: "East Pakistan grievances — distance, language, economic neglect.", marks: 1, markCode: "M" },
              { reasoning: "Indian intervention supported Bengali independence struggle.", marks: 1, markCode: "M" },
              { reasoning: "Result: East Pakistan became independent Bangladesh.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: showed 1947 partition remained unfinished business.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1971 war proved partition's borders were unstable — East Pakistan seceded as Bangladesh, showing the 1947 settlement was incomplete.",
            commonErrors: ["No connection."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the roles of Gandhi and Jinnah in India's independence movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gandhi vs Jinnah",
                statement: "Different visions.",
              },
            ],
            steps: [
              { reasoning: "Gandhi: mass non-violent mobilisation for united India.", marks: 1, markCode: "M" },
              { reasoning: "Jinnah: led Muslim League demanding separate Pakistan.", marks: 1, markCode: "M" },
              { reasoning: "Both weakened British control but pulled in opposite directions.", marks: 1, markCode: "M" },
              { reasoning: "Outcome: independence achieved but at cost of partition.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gandhi united Indians against colonialism; Jinnah divided them over religion — together they won independence but also partition.",
            commonErrors: ["Same goals."],
          },
        },
        {
          id: "ciealehist-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the partition of India could have been avoided.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition debate",
                statement: "Contingency vs inevitability.",
              },
            ],
            steps: [
              { reasoning: "Inevitability case: rising Hindu-Muslim tensions and Muslim League strength.", marks: 1, markCode: "M" },
              { reasoning: "Alternative case: united India was possible; partition was a political choice.", marks: 1, markCode: "M" },
              { reasoning: "Historiography: scholars debate how much was inevitable vs contingent.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Partition was not inevitable — a united India was achievable — but communal politics, British 'divide and rule' and 1946-47 decisions made it highly likely.",
            commonErrors: ["Certainty."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u5l2-c2-africa",
      title: "African decolonisation: Ghana, Algeria and settler colonies",
      skill:
        "Compare African independence movements and their different paths.",
      lesson: {
        sections: [
          {
            heading: "Ghana and peaceful independence",
            body: "Ghana (Gold Coast) first sub-Saharan colony to gain independence 1957 — Nkrumah's Convention People's Party, positive action then civil disobedience. Model for peaceful decolonisation — 'wind of change' sweeping Africa.",
          },
          {
            heading: "Algeria and settler colonies",
            body: "Algeria 1954-62: FLN guerrilla war vs French settler colony — ~1 million deaths, De Gaulle's return, Evian Accords. Settler colonies (Algeria, Kenya, Rhodesia, South Africa) hardest to decolonise — large European populations resisted. Kenya Mau Mau uprising 1950s suppressed brutally.",
          },
        ],
        keyFormulas: [
          { name: "Ghana 1957", statement: "First sub-Saharan" },
          { name: "Algeria 1954-62", statement: "Guerrilla war" },
          { name: "Settler colonies", statement: "Hardest to leave" },
        ],
        workedExample: {
          problem: "Why was Algerian independence bloodier than Ghana's?",
          solution:
            "Large French settler population (pieds-noirs) with political power + Algeria seen as integral French territory → prolonged guerrilla war vs negotiated transfer.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ghana became independent in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1960" },
              { id: "b", text: "1957" },
              { id: "c", text: "1945" },
              { id: "d", text: "1975" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Ghana", statement: "1957." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1957",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What made Algeria's independence struggle different from Ghana's?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Algeria vs Ghana",
                statement: "War vs negotiation.",
              },
            ],
            steps: [
              { reasoning: "Ghana path.", marks: 1, markCode: "M" },
              { reasoning: "Algeria path.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ghana: negotiated, peaceful transfer. Algeria: 8-year guerrilla war against French settler colony — large European population resisted fiercely.",
            commonErrors: ["Same path."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'settler colonies' were hardest to decolonise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Settler colonies",
                statement: "European populations.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Why harder.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Large European settler populations held political/economic power and saw colony as homeland → violent resistance to independence; Algeria, Kenya, Rhodesia examples.",
            commonErrors: ["Same as others."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse Nkrumah's role in Ghana's independence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nkrumah", statement: "Leader." },
            ],
            steps: [
              { reasoning: "Methods.", marks: 1, markCode: "M" },
              { reasoning: "Movement.", marks: 1, markCode: "M" },
              { reasoning: "Achievement.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "CPP leader, 'positive action' then mass mobilisation → achieved independence 1957 without war; model for pan-Africanism and non-aligned movement.",
            commonErrors: ["Minor role."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'wind of change' thesis for African decolonisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wind of change",
                statement: "Macmillan 1960.",
              },
            ],
            steps: [
              { reasoning: "Thesis.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for.", marks: 1, markCode: "M" },
              { reasoning: "Evidence against.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Macmillan's 1960 speech: African nationalism irresistible — but decolonisation required struggle (Algeria, Kenya wars); colonial powers didn't just 'give' independence.",
            commonErrors: ["Gift theory."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Mau Mau uprising?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Mau Mau", statement: "Kenya 1950s." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Suppression.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kikuyu-led rebellion against British colonial rule in Kenya (1950s) — brutally suppressed (~100k deaths); hastened Kenya's independence 1963.",
            commonErrors: ["Peaceful."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first sub-Saharan African colony to gain independence was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ghana" },
              { id: "b", text: "Nigeria" },
              { id: "c", text: "Algeria" },
              { id: "d", text: "Kenya" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "First", statement: "Ghana." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Ghana",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two consequences of settler colony decolonisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Consequences",
                statement: "Violence + displacement.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. mass casualties (Algeria ~1m) and settler exodus creating refugee crises — also long-term resentment, neocolonial economic ties.",
            commonErrors: ["Peaceful."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did France resist Algerian independence so strongly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "French resistance",
                statement: "Pieds-noirs + status.",
              },
            ],
            steps: [
              { reasoning: "Settler power.", marks: 1, markCode: "M" },
              { reasoning: "National pride.", marks: 1, markCode: "M" },
              { reasoning: "Military involvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1 million pieds-noirs saw Algeria as French; 'Algérie française' was national myth; army deeply involved → De Gaulle's return and eventual negotiated exit despite coup attempts.",
            commonErrors: ["Weak resistance."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the 'neocolonialism' critique of post-independence Africa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neocolonialism",
                statement: "Economic control.",
              },
            ],
            steps: [
              { reasoning: "Argument.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Counter-arguments.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Formal independence but economic dependence — former powers retain trade advantages, resource access, corporate control; 'flag independence' critique; but some growth achieved — complex reality.",
            commonErrors: ["Complete freedom."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'FLN' in the Algerian independence struggle was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A trade union" },
              { id: "b", text: "The National Liberation Front — the independence movement" },
              { id: "c", text: "A colonial militia" },
              { id: "d", text: "A French political party" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "FLN", statement: "Algerian movement." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** National Liberation Front",
            commonErrors: ["French body."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who were the 'pieds-noirs'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pieds-noirs", statement: "French settlers." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "French settlers in Algeria (~1 million) who saw the colony as their homeland — they resisted independence fiercely and many fled after 1962.",
            commonErrors: ["Algerian Muslims."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Kenya's independence struggle was more violent than Ghana's.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kenya vs Ghana",
                statement: "Settler resistance.",
              },
            ],
            steps: [
              { reasoning: "Large settler population with political power.", marks: 1, markCode: "M" },
              { reasoning: "Mau Mau uprising met brutal suppression.", marks: 1, markCode: "M" },
              { reasoning: "Negotiated transfer came only after prolonged conflict.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kenya's large European settler community resisted fiercely; the Mau Mau uprising was suppressed violently before independence in 1963.",
            commonErrors: ["Same path as Ghana."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse why Ghana's independence became a model for other African states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ghana model",
                statement: "Peaceful transfer.",
              },
            ],
            steps: [
              { reasoning: "First sub-Saharan independence 1957 — proof it was possible.", marks: 1, markCode: "M" },
              { reasoning: "Achieved without war — 'positive action' then negotiation.", marks: 1, markCode: "M" },
              { reasoning: "Nkrumah's pan-African leadership inspired other movements.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: demonstrated viable path to freedom.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ghana showed independence could be won peacefully and quickly — Nkrumah's success made him a pan-African icon and inspired movements across the continent.",
            commonErrors: ["Minor influence."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the paths to independence taken by Ghana and Algeria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ghana vs Algeria",
                statement: "Negotiation vs war.",
              },
            ],
            steps: [
              { reasoning: "Ghana: negotiated transfer 1957 with minimal violence.", marks: 1, markCode: "M" },
              { reasoning: "Algeria: eight-year guerrilla war 1954-62 against French settlers.", marks: 1, markCode: "M" },
              { reasoning: "Key difference: settler population size and colonial status.", marks: 1, markCode: "M" },
              { reasoning: "Outcome: Algeria's war left deeper scars and a larger death toll.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ghana won independence through negotiation; Algeria through an eight-year war — settler colonies always meant bloodier decolonisation.",
            commonErrors: ["Same path."],
          },
        },
        {
          id: "ciealehist-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether African decolonisation can be judged a success.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decolonisation success",
                statement: "Political vs economic.",
              },
            ],
            steps: [
              { reasoning: "Political success: almost all colonies gained independence within two decades.", marks: 1, markCode: "M" },
              { reasoning: "Economic failure: neocolonial dependence and underdevelopment persisted.", marks: 1, markCode: "M" },
              { reasoning: "Conflict: coups, civil wars and resource struggles followed independence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Politically transformative — self-rule achieved — but economically incomplete; 'flag independence' without development remains contested.",
            commonErrors: ["One-sided verdict."],
          },
        },
      ],
    },
  ],
};
