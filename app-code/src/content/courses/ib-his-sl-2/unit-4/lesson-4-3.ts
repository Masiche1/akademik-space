import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "his-u4-lesson-4-3",
  code: "4-3",
  title: "Decolonisation in Detail: Suez, Algeria and African Independence",
  goal: "I CAN explain the significance of the Suez Crisis, analyse the Algerian war of independence, and describe the wave of African independence and the challenges of the new nations.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Decolonisation", definition: "The process by which colonial powers granted independence to their overseas territories." },
    { term: "Suez Crisis", definition: "1956 Anglo-French-Israeli invasion of Egypt after Nasser nationalised the Suez Canal." },
    { term: "Non-Aligned Movement", definition: "Group of states (led by Nehru, Nasser, Tito) refusing alliance with either Cold War bloc." },
    { term: "FLN", definition: "Front de Libération Nationale — Algerian nationalist movement that fought France (1954–62)." },
    { term: "Apartheid", definition: "South Africa's system of racial segregation and white-minority rule (1948–1994)." },
    { term: "Neocolonialism", definition: "Continued economic dominance of former colonies by ex-colonial powers or corporations." },
  ],
  concepts: [
    {
      id: "his-u4-suez-algeria",
      title: "The Suez Crisis and the Algerian war",
      skill: "Explain the causes and significance of the Suez Crisis and analyse the Algerian struggle for independence.",
      lesson: {
        sections: [
          {
            heading: "Suez Crisis, 1956",
            body: "Egypt's President **Nasser** nationalised the Suez Canal in July 1956, threatening British and French economic interests. Britain, France and Israel invaded in October. The US and USSR — rivals for influence over the newly independent world — both condemned the invasion, forcing a humiliating withdrawal. Suez marked the end of Britain and France as great powers and accelerated the shift of global influence to the superpowers and the new nations.",
          },
          {
            heading: "The Algerian war, 1954–1962",
            body: "Algeria had been a French colony since 1830, with over a million European settlers (**pieds-noirs**). The **FLN** launched armed struggle in 1954. The war was brutal: French forces used torture and collective punishment; the FLN fought a guerrilla campaign. After de Gaulle returned to power and negotiations, independence was granted in 1962 after a referendum — around one million Algerians had died, and nearly a million pieds-noirs fled to France.",
          },
          {
            heading: "Significance of both crises",
            body: "Suez showed European powers could no longer act without superpower consent, boosting Arab and Third World nationalism. Algeria's war demonstrated that determined colonial subjects could defeat a European power, though at enormous cost. Both events fed the **Non-Aligned Movement** and the broader decolonisation wave.",
          },
        ],
        keyFormulas: [
          { name: "Suez sequence", statement: "Nasser nationalises canal July 1956 → invasion Oct 1956 → US/USSR pressure → withdrawal" },
          { name: "Algerian war", statement: "FLN uprising 1954 → guerrilla war → de Gaulle negotiations → independence 1962" },
        ],
        workedExample: {
          problem: "Why was Suez a turning point in the decline of European power?",
          solution: "Britain and France were forced to withdraw by pressure from the US and USSR — the new superpowers — revealing that former colonial powers could no longer act independently in the nuclear age.",
        },
      },
      questions: [
        {
          id: "his-u4-deq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Suez Crisis of 1956 was triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet invasion of Egypt" },
              { id: "b", text: "Egypt joining NATO" },
              { id: "c", text: "An Israeli attack on Egypt" },
              { id: "d", text: "Nasser's nationalisation of the Suez Canal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Suez trigger", statement: "Nasser nationalised the Suez Canal in July 1956, provoking the Anglo-French-Israeli invasion." },
            ],
            steps: [
              { reasoning: "The trigger was Nasser's nationalisation of the canal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Nasser's nationalisation of the canal",
            commonErrors: ["Confusing the trigger (nationalisation) with the response (invasion)."],
          },
        },
        {
          id: "his-u4-deq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two reasons why the Algerian war was especially difficult for France.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Algerian war difficulty", statement: "Large settler population, FLN guerrilla tactics, international opinion, domestic crisis." },
            ],
            steps: [
              { reasoning: "Algeria was considered part of France itself, with a large European settler (pied-noir) population that resisted independence.", marks: 1, markCode: "M" },
              { reasoning: "The FLN used guerrilla tactics across difficult terrain; French forces relied on torture and repression that turned opinion against them.", marks: 1, markCode: "M" },
              { reasoning: "International condemnation (UN, Cold War context) and domestic unrest in France made the war politically unsustainable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Settler opposition, guerrilla war and French tactics, plus international and domestic pressure.",
            commonErrors: ["Treating Algeria as an ordinary colony rather than a department of France with settlers."],
          },
        },
        {
          id: "his-u4-deq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the significance of the Suez Crisis for the international order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suez significance", statement: "Exposed decline of European powers; accelerated superpower dominance and Third World nationalism." },
            ],
            steps: [
              { reasoning: "Britain and France were forced to withdraw under US and USSR pressure, showing their dependence on the superpowers.", marks: 1, markCode: "M" },
              { reasoning: "The US emerged as the dominant Western power; the USSR gained prestige in the Arab world.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: Nasser became a hero of Arab and anti-colonial nationalism; the Non-Aligned Movement strengthened.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: marked the end of the era when European powers could act alone on the world stage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "End of independent European great-power action; boost to superpower rivalry and Third World nationalism.",
            commonErrors: ["Treating Suez as a minor colonial dispute rather than a structural turning point."],
          },
        },
        {
          id: "his-u4-deq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Examine the causes and course of Algerian independence.",
          parts: [
            { label: "a", prompt: "Explain why Algerian nationalism grew after 1945.", marks: 2 },
            { label: "b", prompt: "Describe the course of the war of independence (1954–1962).", marks: 3 },
            { label: "c", prompt: "Evaluate the costs of independence for Algeria.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Algerian independence", statement: "Nationalist grievance → FLN guerrilla war → de Gaulle negotiations → independence 1962." },
            ],
            steps: [
              { part: "a", reasoning: "Algerians were denied equal rights despite being formally French citizens; discrimination and poverty fuelled nationalism.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Post-1945 anti-colonial currents (Vietnam, India) and FLN organisation created a mass movement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "FLN launched armed struggle on 1 November 1954; guerrilla war spread across Algeria.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "France escalated — torture, repression, a 1958 coup brought de Gaulle to power.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Negotiations led to a 1962 referendum and independence; nearly a million Algerians had died.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Devastating human cost — around one million dead, ~million pieds-noirs exiled to France.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Long-term: instability and military rule shaped post-independence Algeria.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Discrimination and post-war nationalism. (b) FLN uprising → guerrilla war → de Gaulle → 1962 independence. (c) Huge casualties and exile.",
            commonErrors: ["Ignoring the scale of violence and the pied-noir exodus."],
          },
        },
        {
          id: "his-u4-deq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Egypt's President Nasser nationalised the Suez Canal in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1962" },
              { id: "b", text: "1956" },
              { id: "c", text: "1948" },
              { id: "d", text: "1952" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Suez Crisis", statement: "Nasser nationalised the canal in July 1956, provoking the Anglo-French-Israeli invasion." },
            ],
            steps: [
              { reasoning: "The nationalisation occurred in July 1956.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1956",
            commonErrors: ["Confusing the nationalisation (1956) with Algerian independence (1962)."],
          },
        },
        {
          id: "his-u4-deq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In October 1956, the Suez Canal was invaded by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Egypt and Syria" },
              { id: "b", text: "Britain, France and Israel" },
              { id: "c", text: "NATO forces" },
              { id: "d", text: "The United States and the USSR" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Suez invasion", statement: "Britain, France and Israel invaded Egypt in October 1956." },
            ],
            steps: [
              { reasoning: "The three invading powers were Britain, France and Israel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Britain, France and Israel",
            commonErrors: ["Naming the superpowers as the invaders — they pressured the invaders to withdraw."],
          },
        },
        {
          id: "his-u4-deq7",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The outcome of the Suez Crisis showed that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Britain and France could act independently of the superpowers" },
              { id: "b", text: "Egypt won a decisive military victory" },
              { id: "c", text: "The canal was permanently closed" },
              { id: "d", text: "European powers could no longer act without superpower consent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suez significance", statement: "US and USSR pressure forced withdrawal, exposing the decline of European great-power status." },
            ],
            steps: [
              { reasoning: "Both superpowers condemned the invasion, forcing a humiliating withdrawal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Superpower consent was now required",
            commonErrors: ["Describing Suez as a military victory rather than a political humiliation."],
          },
        },
        {
          id: "his-u4-deq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The FLN launched its armed struggle for Algerian independence in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1830" },
              { id: "c", text: "1954" },
              { id: "d", text: "1962" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Algerian war", statement: "The FLN began armed struggle in 1954; independence came in 1962." },
            ],
            steps: [
              { reasoning: "The FLN uprising began in November 1954.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1954",
            commonErrors: ["Confusing the start of the war (1954) with independence (1962)."],
          },
        },
        {
          id: "his-u4-deq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Algeria gained independence in 1962 following:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A military coup by the FLN" },
              { id: "b", text: "Negotiations led by de Gaulle and a referendum" },
              { id: "c", text: "The collapse of the French Fourth Republic" },
              { id: "d", text: "Direct UN intervention" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Algerian independence", statement: "De Gaulle's negotiations and a 1962 referendum ended the war." },
            ],
            steps: [
              { reasoning: "De Gaulle returned to power, negotiated with the FLN and held a referendum granting independence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** De Gaulle's negotiations and referendum",
            commonErrors: ["Attributing independence to military victory alone."],
          },
        },
        {
          id: "his-u4-deq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'pieds-noirs' in the Algerian war were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UN peacekeepers" },
              { id: "b", text: "Algerian independence fighters" },
              { id: "c", text: "French conscript soldiers" },
              { id: "d", text: "European settlers living in Algeria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pieds-noirs", statement: "The over one million European settlers in Algeria, most of whom fled to France after 1962." },
            ],
            steps: [
              { reasoning: "Pieds-noirs were the European settler community in Algeria.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** European settlers in Algeria",
            commonErrors: ["Confusing pieds-noirs with the FLN fighters."],
          },
        },
        {
          id: "his-u4-deq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Nasser nationalised the Suez Canal; (b) the FLN launched armed struggle in Algeria; (c) Algeria won independence.",
          response: { type: "numeric", parts: [{ label: "Suez nationalised", answer: 1956 }, { label: "FLN uprising", answer: 1954 }, { label: "Algerian independence", answer: 1962 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Suez–Algeria chronology", statement: "1954 FLN; 1956 Suez; 1962 independence." },
            ],
            steps: [
              { reasoning: "The canal was nationalised in 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "The FLN uprising began in 1954.", working: "1954", marks: 1, markCode: "M" },
              { reasoning: "Independence came in 1962.", working: "1962", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1956; 1954; 1962",
            commonErrors: ["Confusing the FLN uprising (1954) with Algerian independence (1962)."],
          },
        },
        {
          id: "his-u4-deq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) France conquered Algeria; (b) the Suez invasion took place; (c) the Algerian independence referendum.",
          response: { type: "numeric", parts: [{ label: "French conquest", answer: 1830 }, { label: "Suez invasion", answer: 1956 }, { label: "Independence referendum", answer: 1962 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Colonial chronology", statement: "1830 conquest; 1956 Suez; 1962 referendum." },
            ],
            steps: [
              { reasoning: "France conquered Algeria in 1830.", working: "1830", marks: 1, markCode: "M" },
              { reasoning: "The Suez invasion occurred in 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "The referendum was held in 1962.", working: "1962", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1830; 1956; 1962",
            commonErrors: ["Confusing the 1830 conquest with the 1954 uprising."],
          },
        },
        {
          id: "his-u4-deq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the French conquest of Algeria (1830) and the FLN uprising (1954); (b) between the uprising (1954) and independence (1962); (c) between the Suez invasion (1956) and Algerian independence (1962).",
          response: { type: "numeric", parts: [{ label: "1830 to 1954", answer: 124 }, { label: "1954 to 1962", answer: 8 }, { label: "1956 to 1962", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1954 - 1830 = 124$ years of colonial rule.", working: "1954 - 1830 = 124", marks: 1, markCode: "M" },
              { reasoning: "$1962 - 1954 = 8$ years of war.", working: "1962 - 1954 = 8", marks: 1, markCode: "M" },
              { reasoning: "$1962 - 1956 = 6$ years.", working: "1962 - 1956 = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "124; 8; 6 years",
            commonErrors: ["Miscomputing the long 1830–1954 interval."],
          },
        },
        {
          id: "his-u4-deq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): France conquered Algeria; the FLN launched armed struggle; the Suez Canal was nationalised; Algeria won independence.",
          response: { type: "numeric", parts: [{ label: "French conquest", answer: 1 }, { label: "FLN uprising", answer: 2 }, { label: "Suez nationalised", answer: 3 }, { label: "Independence", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Decolonisation chronology order", statement: "1830 → 1954 → 1956 → 1962." },
            ],
            steps: [
              { reasoning: "The conquest (1830) is earliest.", working: "1830", marks: 1, markCode: "M" },
              { reasoning: "The FLN uprising (1954) preceded Suez (1956).", working: "1954 < 1956", marks: 1, markCode: "M" },
              { reasoning: "Independence (1962) is latest; all ordered correctly.", working: "1962", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conquest 1, FLN 2, Suez 3, independence 4",
            commonErrors: ["Placing Suez before the FLN uprising."],
          },
        },
        {
          id: "his-u4-deq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of powers that invaded Egypt in 1956; (b) the approximate number of Algerians who died in the war, in millions; (c) the approximate number of pieds-noirs who fled to France, in millions.",
          response: { type: "numeric", parts: [{ label: "Invading powers", answer: 3 }, { label: "Algerian dead (millions)", answer: 1, unit: "million" }, { label: "Pieds-noirs fled (millions)", answer: 1, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cost of the crises", statement: "Three invading powers; roughly one million Algerian dead; nearly one million pieds-noirs exiled." },
            ],
            steps: [
              { reasoning: "Britain, France and Israel — three powers invaded.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Around one million Algerians died in the war.", working: "1 million", marks: 1, markCode: "M" },
              { reasoning: "Nearly one million pieds-noirs fled to France.", working: "1 million", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 1 million; 1 million",
            commonErrors: ["Exaggerating or minimising the casualty figures."],
          },
        },
        {
          id: "his-u4-deq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the FLN launched armed struggle; the Suez Canal was nationalised; de Gaulle returned to power; Algeria won independence.",
          response: { type: "numeric", parts: [{ label: "FLN uprising", answer: 1 }, { label: "Suez nationalised", answer: 2 }, { label: "De Gaulle returns", answer: 3 }, { label: "Independence", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Algerian war chronology", statement: "1954 uprising → 1956 Suez → de Gaulle 1958 → 1962 independence." },
            ],
            steps: [
              { reasoning: "The FLN uprising (1954) is earliest.", working: "1954", marks: 1, markCode: "M" },
              { reasoning: "Suez (1956) preceded de Gaulle's return (1958).", working: "1956 < 1958", marks: 1, markCode: "M" },
              { reasoning: "De Gaulle's return (1958) preceded independence (1962); all ordered correctly.", working: "1958 < 1962", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "FLN 1, Suez 2, de Gaulle 3, independence 4",
            commonErrors: ["Placing independence before de Gaulle's return."],
          },
        },
      ],
    },
    {
      id: "his-u4-africa-new-nations",
      title: "African independence and the new nations",
      skill: "Describe the wave of African independence in the 1950s–60s and analyse the challenges facing new nations.",
      lesson: {
        sections: [
          {
            heading: "The wave of independence",
            body: "Decolonisation swept Africa: **Ghana** became the first sub-Saharan colony to gain independence (1957, led by **Kwame Nkrumah**), followed by Nigeria (1960), most French colonies in 1960 ('the Year of Africa'), and Portuguese colonies only after prolonged wars (Angola, Mozambique 1975). The **OAU** (Organisation of African Unity, 1963) sought unity and liberation of remaining colonies, especially southern Africa.",
          },
          {
            heading: "Challenges of the new nations",
            body: "New states inherited borders drawn by colonisers, often grouping rival ethnicities — a recipe for instability. They faced **neocolonialism**: continued economic dependence on ex-colonial powers and multinational corporations controlling resources. Many became one-party states or military dictatorships (e.g. Mobutu in Zaire). Cold War rivalry often fuelled coups and civil wars.",
          },
          {
            heading: "Southern Africa's longer struggle",
            body: "White-minority rule persisted longest: **apartheid** in South Africa (1948–1994) enforced racial segregation through law. Independence struggles — Zimbabwe (1980), Namibia (1990) — and internal resistance (ANC, Steve Biko) eventually ended minority rule; Nelson Mandela became president in 1994. Portugal's African colonies fought wars of liberation from 1961 to 1974.",
          },
        ],
        keyFormulas: [
          { name: "Decolonisation milestones", statement: "Ghana 1957 → 'Year of Africa' 1960 → Portuguese colonies 1975" },
          { name: "Post-independence challenges", statement: "Artificial borders + neocolonial economics + Cold War interference + weak institutions" },
        ],
        workedExample: {
          problem: "Why did many African states struggle after independence despite gaining sovereignty?",
          solution: "Colonial borders grouped rival groups, economies depended on exporting raw materials to ex-colonial powers, institutions were thin, and Cold War powers backed rival factions — producing instability and authoritarian rule.",
        },
      },
      questions: [
        {
          id: "his-u4-afq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which country was the first sub-Saharan African colony to gain independence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "South Africa" },
              { id: "b", text: "Ghana" },
              { id: "c", text: "Nigeria" },
              { id: "d", text: "Kenya" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ghana independence", statement: "Ghana gained independence in 1957 under Kwame Nkrumah, the first sub-Saharan colony." },
            ],
            steps: [
              { reasoning: "Ghana (then the Gold Coast) became independent in 1957.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ghana",
            commonErrors: ["Confusing Ghana (1957) with Nigeria (1960) or other 1960 independences."],
          },
        },
        {
          id: "his-u4-afq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two challenges faced by newly independent African states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "New nation challenges", statement: "Artificial borders, neocolonial economics, weak institutions, Cold War interference." },
            ],
            steps: [
              { reasoning: "Artificial colonial borders grouped rival ethnic and linguistic communities, fuelling conflict.", marks: 1, markCode: "M" },
              { reasoning: "Neocolonialism: economies remained dependent on exporting raw materials to ex-colonial powers.", marks: 1, markCode: "M" },
              { reasoning: "Weak institutions and Cold War rivalry produced coups, civil wars and one-party states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Border problems, economic dependence, weak institutions and superpower interference.",
            commonErrors: ["Listing only economic problems while ignoring political and ethnic challenges."],
          },
        },
        {
          id: "his-u4-afq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why apartheid survived so long in South Africa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Apartheid endurance", statement: "White-minority state with strong security apparatus, Cold War support and economic resources resisted change." },
            ],
            steps: [
              { reasoning: "The National Party built a powerful security state that suppressed internal resistance (ANC, PAC, Steve Biko).", marks: 1, markCode: "M" },
              { reasoning: "Economic strength and Western (especially US) tolerance provided resources and diplomatic cover.", marks: 1, markCode: "M" },
              { reasoning: "Cold War context: Pretoria presented itself as a bulwark against communism in southern Africa.", marks: 1, markCode: "R" },
              { reasoning: "It fell only when internal resistance, sanctions and the end of the Cold War combined (1990–94).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong state repression, economic power, Western tolerance and Cold War anti-communism delayed change until 1994.",
            commonErrors: ["Explaining apartheid's origins rather than its endurance."],
          },
        },
        {
          id: "his-u4-afq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the successes and failures of decolonisation in Africa.",
          parts: [
            { label: "a", prompt: "Describe the scale and speed of African independence.", marks: 2 },
            { label: "b", prompt: "Explain two reasons why independence proved difficult for new states.", marks: 3 },
            { label: "c", prompt: "Evaluate whether decolonisation achieved its goals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decolonisation assessment", statement: "Rapid political independence achieved, but economic and political challenges persisted." },
            ],
            steps: [
              { part: "a", reasoning: "Dozens of states gained independence in the 1950s–60s; 1960 alone ('Year of Africa') saw ~17 new nations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "By the mid-1970s only southern Africa's white-minority states remained under colonial rule.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Artificial borders and ethnic divisions produced instability and conflict.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neocolonial economics kept dependence on ex-colonial powers and raw-material exports.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Thin institutions and Cold War interference produced coups and one-party rule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Success: self-determination achieved, colonial rule ended, new identities and states formed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Failure: poverty, conflict and authoritarianism persisted — formal sovereignty without full autonomy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: political decolonisation succeeded; economic decolonisation remained incomplete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rapid, broad independence 1957–75. (b) Borders, neocolonial economics, weak institutions. (c) Political success, economic limits.",
            commonErrors: ["Claiming decolonisation either fully succeeded or fully failed without nuance."],
          },
        },
        {
          id: "his-u4-afq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ghana became the first sub-Saharan African colony to gain independence in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1947" },
              { id: "b", text: "1960" },
              { id: "c", text: "1957" },
              { id: "d", text: "1952" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ghana's independence", statement: "Ghana became independent in 1957 under Kwame Nkrumah." },
            ],
            steps: [
              { reasoning: "Ghana gained independence in 1957.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1957",
            commonErrors: ["Confusing Ghana (1957) with the 'Year of Africa' (1960)."],
          },
        },
        {
          id: "his-u4-afq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Kwame Nkrumah was the leader who secured Ghana's independence and later promoted:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "French assimilation policy" },
              { id: "b", text: "Pan-African unity" },
              { id: "c", text: "Apartheid in southern Africa" },
              { id: "d", text: "A return to British rule" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Kwame Nkrumah", statement: "Nkrumah led Ghana to independence and championed Pan-African unity." },
            ],
            steps: [
              { reasoning: "Nkrumah became Ghana's first prime minister and promoted African unity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pan-African unity",
            commonErrors: ["Confusing Nkrumah with South Africa's apartheid leaders."],
          },
        },
        {
          id: "his-u4-afq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Year of Africa' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1960, when many colonies — especially French ones — gained independence" },
              { id: "b", text: "1957, when Ghana became independent" },
              { id: "c", text: "1963, when the OAU was founded" },
              { id: "d", text: "1975, when Portugal's colonies became independent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Year of Africa", statement: "1960 saw a wave of independence, notably of most French colonies." },
            ],
            steps: [
              { reasoning: "Seventeen African states gained independence in 1960.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1960",
            commonErrors: ["Confusing the Year of Africa (1960) with Ghana's independence (1957)."],
          },
        },
        {
          id: "his-u4-afq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Organisation of African Unity (OAU) was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1963" },
              { id: "b", text: "1960" },
              { id: "c", text: "1957" },
              { id: "d", text: "1975" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "OAU", statement: "The OAU was established in 1963 to promote African unity and liberation." },
            ],
            steps: [
              { reasoning: "The OAU was founded in 1963.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1963",
            commonErrors: ["Confusing the OAU (1963) with the Year of Africa (1960)."],
          },
        },
        {
          id: "his-u4-afq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "'Neocolonialism' in the context of new African states refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The return of traditional tribal structures" },
              { id: "b", text: "Continued economic dependence on ex-colonial powers and multinational corporations" },
              { id: "c", text: "The direct military reoccupation of Africa by Europe" },
              { id: "d", text: "A formal union of African states" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neocolonialism", statement: "Political independence without economic autonomy — dependence on ex-colonial markets and corporations." },
            ],
            steps: [
              { reasoning: "New states remained dependent on raw-material exports and foreign capital despite sovereignty.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Continued economic dependence",
            commonErrors: ["Confusing neocolonialism with formal colonial rule."],
          },
        },
        {
          id: "his-u4-afq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Nelson Mandela became South Africa's first post-apartheid president in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1994" },
              { id: "b", text: "1980" },
              { id: "c", text: "1990" },
              { id: "d", text: "1985" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mandela and apartheid", statement: "Apartheid ended in 1994; Mandela became president that year." },
            ],
            steps: [
              { reasoning: "Mandela won the 1994 election and became president.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1994",
            commonErrors: ["Confusing Namibia's independence (1990) with South Africa's transition (1994)."],
          },
        },
        {
          id: "his-u4-afq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Ghana's independence; (b) the 'Year of Africa'; (c) the OAU founded.",
          response: { type: "numeric", parts: [{ label: "Ghana independent", answer: 1957 }, { label: "Year of Africa", answer: 1960 }, { label: "OAU founded", answer: 1963 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Decolonisation milestones", statement: "1957 Ghana; 1960 Year of Africa; 1963 OAU." },
            ],
            steps: [
              { reasoning: "Ghana became independent in 1957.", working: "1957", marks: 1, markCode: "M" },
              { reasoning: "The Year of Africa was 1960.", working: "1960", marks: 1, markCode: "M" },
              { reasoning: "The OAU was founded in 1963.", working: "1963", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1957; 1960; 1963",
            commonErrors: ["Confusing Ghana (1957) with the Year of Africa (1960)."],
          },
        },
        {
          id: "his-u4-afq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Portugal's African colonies (Angola and Mozambique) became independent; (b) Zimbabwe gained independence; (c) Namibia gained independence.",
          response: { type: "numeric", parts: [{ label: "Portuguese colonies", answer: 1975 }, { label: "Zimbabwe independent", answer: 1980 }, { label: "Namibia independent", answer: 1990 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Southern African chronology", statement: "1975 Angola/Mozambique; 1980 Zimbabwe; 1990 Namibia." },
            ],
            steps: [
              { reasoning: "Angola and Mozambique became independent in 1975.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "Zimbabwe gained independence in 1980.", working: "1980", marks: 1, markCode: "M" },
              { reasoning: "Namibia gained independence in 1990.", working: "1990", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1975; 1980; 1990",
            commonErrors: ["Confusing Zimbabwe (1980) with Namibia (1990)."],
          },
        },
        {
          id: "his-u4-afq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between Ghana's independence (1957) and the Year of Africa (1960); (b) between the OAU's founding (1963) and Portuguese decolonisation (1975); (c) between Namibia's independence (1990) and Mandela's presidency (1994).",
          response: { type: "numeric", parts: [{ label: "1957 to 1960", answer: 3 }, { label: "1963 to 1975", answer: 12 }, { label: "1990 to 1994", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1960 - 1957 = 3$ years.", working: "1960 - 1957 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1975 - 1963 = 12$ years.", working: "1975 - 1963 = 12", marks: 1, markCode: "M" },
              { reasoning: "$1994 - 1990 = 4$ years.", working: "1994 - 1990 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 12; 4 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u4-afq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Ghana's independence; the 'Year of Africa'; the OAU founded; Portugal's colonies became independent.",
          response: { type: "numeric", parts: [{ label: "Ghana independent", answer: 1 }, { label: "Year of Africa", answer: 2 }, { label: "OAU founded", answer: 3 }, { label: "Portuguese colonies independent", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Decolonisation order", statement: "1957 → 1960 → 1963 → 1975." },
            ],
            steps: [
              { reasoning: "Ghana (1957) is earliest.", working: "1957", marks: 1, markCode: "M" },
              { reasoning: "The Year of Africa (1960) followed Ghana.", working: "1960", marks: 1, markCode: "M" },
              { reasoning: "The OAU (1963) preceded 1975; all ordered correctly.", working: "1963 < 1975", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ghana 1, Year of Africa 2, OAU 3, Portugal's colonies 4",
            commonErrors: ["Placing the OAU before the Year of Africa."],
          },
        },
        {
          id: "his-u4-afq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of years apartheid lasted (1948–1994); (b) the year Zimbabwe gained independence; (c) the year Mandela became president.",
          response: { type: "numeric", parts: [{ label: "Apartheid duration", answer: 46 }, { label: "Zimbabwe independence", answer: 1980 }, { label: "Mandela president", answer: 1994 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Southern Africa chronology", statement: "Apartheid 1948–1994; Zimbabwe 1980; Mandela 1994." },
            ],
            steps: [
              { reasoning: "$1994 - 1948 = 46$ years of apartheid.", working: "1994 - 1948 = 46", marks: 1, markCode: "M" },
              { reasoning: "Zimbabwe became independent in 1980.", working: "1980", marks: 1, markCode: "M" },
              { reasoning: "Mandela became president in 1994.", working: "1994", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46; 1980; 1994",
            commonErrors: ["Miscomputing the duration of apartheid."],
          },
        },
        {
          id: "his-u4-afq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): apartheid introduced in South Africa; Ghana's independence; the OAU founded; Mandela becomes president.",
          response: { type: "numeric", parts: [{ label: "Apartheid introduced", answer: 1 }, { label: "Ghana independent", answer: 2 }, { label: "OAU founded", answer: 3 }, { label: "Mandela president", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Southern African chronology order", statement: "1948 → 1957 → 1963 → 1994." },
            ],
            steps: [
              { reasoning: "Apartheid (1948) is earliest.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "Ghana (1957) preceded the OAU (1963).", working: "1957 < 1963", marks: 1, markCode: "M" },
              { reasoning: "Mandela's presidency (1994) is latest; all ordered correctly.", working: "1994", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Apartheid 1, Ghana 2, OAU 3, Mandela 4",
            commonErrors: ["Placing Ghana before apartheid's introduction."],
          },
        },
      ],
    },
  ],
};
