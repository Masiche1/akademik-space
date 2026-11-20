import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "his-u1-lesson-1-3",
  code: "1-3",
  title: "Imperialism and the Origins of World War I",
  goal: "I CAN explain the causes of European imperialism, analyse the events that led to the outbreak of WWI, and evaluate the role of alliances and militarism.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Imperialism", definition: "Policy of extending a nation's power through colonisation, territory acquisition or economic dominance." },
    { term: "Scramble for Africa", definition: "Rapid European colonisation of Africa between 1880 and 1914, formalised at the Berlin Conference (1884–85)." },
    { term: "Alliance system", definition: "Network of defence treaties (e.g. Triple Alliance, Triple Entente) that turned regional conflicts into general wars." },
    { term: "Militarism", definition: "Glorification of military strength; arms races and war planning made conflict more likely." },
    { term: "Nationalism", definition: "Intense loyalty to one's nation; in the Balkans it fuelled irredentism against the Austro-Hungarian and Ottoman empires." },
    { term: "July Crisis", definition: "The diplomatic chain reaction (June–August 1914) that converted the assassination of Archduke Franz Ferdinand into a general European war." },
  ],
  concepts: [
    {
      id: "his-u1-imperialism",
      title: "Causes and course of European imperialism",
      skill: "Explain economic, political and ideological motives for imperialism and describe the partition of Africa and Asia.",
      lesson: {
        sections: [
          {
            heading: "Motives for empire",
            body: "Industrial powers sought raw materials (rubber, ivory, minerals), markets for manufactured goods, strategic ports and national prestige. Ideological motives included spreading Christianity and 'civilising missions'. Social Darwinism was misused to justify racial superiority. The Berlin Conference (1884–85) set rules for partitioning Africa without consulting Africans.",
          },
          {
            heading: "The Scramble for Africa",
            body: "By 1914, only Liberia and Ethiopia remained independent. European powers used superior weapons, medicine and divide-and-rule tactics. Extraction of minerals and cash crops (rubber, cocoa) enriched metropoles but destroyed local economies. Arbitrary borders drawn by Europeans created lasting ethnic conflicts still visible today.",
          },
          {
            heading: "Imperialism in Asia",
            body: "Britain consolidated control of India after the 1857 revolt (direct rule from 1858); France took Indochina; the Dutch controlled the Dutch East Indies; Japan modernised rapidly after 1868 (Meiji Restoration) and defeated China (1895) and Russia (1905), challenging European dominance.",
          },
        ],
        keyFormulas: [
          { name: "Imperial motives", statement: "Resources + markets + strategy + prestige + ideology" },
          { name: "Berlin Conference", statement: "1884–85: rules for partitioning Africa" },
        ],
        workedExample: {
          problem: "Explain why the Berlin Conference is seen as evidence of imperialist attitudes.",
          solution: "European powers divided Africa among themselves without African representation — treating the continent as an object to be partitioned rather than a set of sovereign peoples.",
        },
      },
      questions: [
        {
          id: "his-u1-imq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Conference (1884–85) was primarily concerned with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending the slave trade" },
              { id: "b", text: "Partitioning Africa among European powers" },
              { id: "c", text: "Founding the League of Nations" },
              { id: "d", text: "Abolishing colonialism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Conference", statement: "European powers established rules for dividing African territory." },
            ],
            steps: [
              { reasoning: "The conference set rules for claiming African territories.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Partitioning Africa",
            commonErrors: ["Thinking it concerned anti-slavery — it concerned territorial claims."],
          },
        },
        {
          id: "his-u1-imq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Identify two economic motives for European imperialism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Imperial economics", statement: "Raw materials and markets for industrial goods." },
            ],
            steps: [
              { reasoning: "Access to raw materials (rubber, ivory, minerals, cotton) for European industry.", marks: 1, markCode: "M" },
              { reasoning: "Captive markets for surplus manufactured goods and investment outlets.", marks: 1, markCode: "M" },
              { reasoning: "Both economic motives clearly stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Raw materials and captive markets.",
            commonErrors: ["Listing only political or ideological motives."],
          },
        },
        {
          id: "his-u1-imq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two long-term consequences of the European partition of Africa.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imperial legacy", statement: "Artificial borders, economic dependency, cultural disruption." },
            ],
            steps: [
              { reasoning: "Arbitrary borders ignored ethnic boundaries, creating states prone to internal conflict after independence.", marks: 1, markCode: "M" },
              { reasoning: "Colonial economies were built around resource extraction, leaving dependency and underdevelopment.", marks: 1, markCode: "M" },
              { reasoning: "Western institutions, languages and boundaries were imposed, disrupting indigenous societies.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: imperialism's legacy shaped modern African politics and economics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Artificial borders and economic dependency/dependency structures.",
            commonErrors: ["Describing conquest without analysing consequences."],
          },
        },
        {
          id: "his-u1-imq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the July Crisis (1914) that led to World War I.",
          parts: [
            { label: "a", prompt: "Describe the assassination that triggered the crisis.", marks: 2 },
            { label: "b", prompt: "Explain how alliances turned a regional dispute into a general war.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of militarism and nationalism in making war inevitable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "July Crisis", statement: "Assassination → ultimatum → alliance chain → general war." },
            ],
            steps: [
              { part: "a", reasoning: "Gavrilo Princip, a Serb nationalist, assassinated Archduke Franz Ferdinand in Sarajevo (28 June 1914).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Austria-Hungary blamed Serbia and issued an ultimatum.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Russia mobilised to support Serbia (Slavic ally); Germany declared war on Russia and France.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Germany's Schlieffen Plan required attacking France via Belgium, drawing in Britain.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alliance commitments pulled in all major powers within weeks.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Militarism: arms races and war plans made leaders confident of quick victory.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nationalism: Balkan nationalism threatened Austria-Hungary; public opinion supported war.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: underlying tensions made war likely; the assassination was the trigger, not the cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Franz Ferdinand assassinated. (b) Alliance chain reaction → general war. (c) Deep causes made war likely; assassination was trigger.",
            commonErrors: ["Blaming the assassination alone — deeper structural causes mattered."],
          },
        },
        {
          id: "his-u1-imq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "By 1914, the only African states still independent of European rule were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Egypt and Morocco" },
              { id: "b", text: "Liberia and Ethiopia" },
              { id: "c", text: "Nigeria and Kenya" },
              { id: "d", text: "South Africa and Algeria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Scramble for Africa", statement: "By 1914 only Liberia and Ethiopia remained independent." },
            ],
            steps: [
              { reasoning: "Liberia and Ethiopia were the only two independent African states by 1914.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Liberia and Ethiopia",
            commonErrors: ["Including colonies that were already under European control."],
          },
        },
        {
          id: "his-u1-imq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Direct British rule of India after the 1857 revolt is known as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The East India Company" },
              { id: "b", text: "The Raj" },
              { id: "c", text: "The Mughal Empire" },
              { id: "d", text: "The British Commonwealth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "The Raj", statement: "British Crown rule over India from 1858 after the East India Company's dissolution." },
            ],
            steps: [
              { reasoning: "After 1857, the Crown replaced the East India Company and ruled India directly — the Raj.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The Raj",
            commonErrors: ["Confusing the Raj with earlier Company rule."],
          },
        },
        {
          id: "his-u1-imq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Imperialists misused Social Darwinism to justify:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free trade between nations" },
              { id: "b", text: "Claimed European racial and civilisational superiority over colonised peoples" },
              { id: "c", text: "The abolition of slavery" },
              { id: "d", text: "International arbitration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Social Darwinism", statement: "Distorted evolutionary theory used to justify racial hierarchy and empire." },
            ],
            steps: [
              { reasoning: "Social Darwinist ideas were invoked to claim Europeans were 'fitter' and entitled to rule.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Claimed European superiority",
            commonErrors: ["Thinking Social Darwinism was a scientific consensus rather than a justification."],
          },
        },
        {
          id: "his-u1-imq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Japan's defeat of Russia in 1905 was significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ended the Russo-Japanese War with Russian victory" },
              { id: "b", text: "Was the first time an Asian power defeated a European great power, challenging assumptions of white dominance" },
              { id: "c", text: "Led to Japan joining the League of Nations" },
              { id: "d", text: "Paved the way for European partition of Japan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Russo-Japanese War", statement: "Japan's 1905 victory shocked the world and inspired anti-colonial movements." },
            ],
            steps: [
              { reasoning: "Japan's victory demonstrated Asian military modernisation could defeat Europe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** First Asian defeat of a European power",
            commonErrors: ["Misreading who won the war — Japan defeated Russia."],
          },
        },
        {
          id: "his-u1-imq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which factor best explains why European powers partitioned Africa so rapidly after 1880?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single European conference decided all borders at once" },
              { id: "b", text: "The combination of industrial demand for resources, nationalist rivalry and superior technology" },
              { id: "c", text: "African kingdoms voluntarily ceded their territories" },
              { id: "d", text: "Religious missions requested colonial annexation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scramble causes", statement: "Economic motives + nationalist rivalry + technological/military superiority drove rapid partition." },
            ],
            steps: [
              { reasoning: "The Scramble combined economic greed, inter-power rivalry and European technological advantage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Economic demand + rivalry + superiority",
            commonErrors: ["Reducing the Scramble to a single motive."],
          },
        },
        {
          id: "his-u1-imq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Berlin Conference began; (b) the partition of Africa was effectively complete; (c) the Indian Rebellion against British rule.",
          response: { type: "numeric", parts: [{ label: "Berlin Conference begins", answer: 1884 }, { label: "Partition effectively complete", answer: 1914 }, { label: "Indian Rebellion", answer: 1857 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Imperial chronology", statement: "1857 rebellion; 1884–85 Berlin; partition complete by 1914." },
            ],
            steps: [
              { reasoning: "The Berlin Conference met in 1884–85.", working: "1884", marks: 1, markCode: "M" },
              { reasoning: "By 1914 nearly all Africa was colonised.", working: "1914", marks: 1, markCode: "M" },
              { reasoning: "The Indian Rebellion (Sepoy Mutiny) occurred in 1857.", working: "1857", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1884; 1914; 1857",
            commonErrors: ["Confusing the conference dates with the scramble's endpoints."],
          },
        },
        {
          id: "his-u1-imq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the year the Berlin Conference began; (b) the year it concluded; (c) the number of African states still independent in 1914.",
          response: { type: "numeric", parts: [{ label: "Conference begins", answer: 1884 }, { label: "Conference concludes", answer: 1885 }, { label: "Independent African states 1914", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Conference", statement: "1884–85; only Liberia and Ethiopia remained independent by 1914." },
            ],
            steps: [
              { reasoning: "The conference opened in 1884.", working: "1884", marks: 1, markCode: "M" },
              { reasoning: "It concluded in 1885.", working: "1885", marks: 1, markCode: "M" },
              { reasoning: "Two states remained independent: Liberia and Ethiopia.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1884; 1885; 2",
            commonErrors: ["Giving only one year for the conference or miscounting independent states."],
          },
        },
        {
          id: "his-u1-imq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Indian Rebellion against British rule, the Berlin Conference, Japan's defeat of Russia, the effective completion of the partition of Africa.",
          response: { type: "numeric", parts: [{ label: "Indian Rebellion", answer: 1 }, { label: "Berlin Conference", answer: 2 }, { label: "Russo-Japanese War", answer: 3 }, { label: "Partition complete", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Imperial chronology", statement: "1857 → 1884 → 1905 → 1914." },
            ],
            steps: [
              { reasoning: "Indian Rebellion 1857 — earliest.", working: "1857", marks: 1, markCode: "M" },
              { reasoning: "Berlin Conference 1884–85 — second.", working: "1884", marks: 1, markCode: "M" },
              { reasoning: "Russo-Japanese War 1905 — third.", working: "1905", marks: 1, markCode: "M" },
              { reasoning: "Partition complete by 1914 — latest.", working: "1914", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rebellion 1, Berlin 2, Russo-Japanese 3, partition complete 4",
            commonErrors: ["Placing the 1905 war before the Berlin Conference."],
          },
        },
        {
          id: "his-u1-imq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event in Japan's rise: (a) the Meiji Restoration; (b) Japan's defeat of China; (c) Japan's defeat of Russia.",
          response: { type: "numeric", parts: [{ label: "Meiji Restoration", answer: 1868 }, { label: "Defeat of China", answer: 1895 }, { label: "Defeat of Russia", answer: 1905 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Japan's rise", statement: "Meiji 1868; China war 1895; Russia war 1905." },
            ],
            steps: [
              { reasoning: "The Meiji Restoration began in 1868.", working: "1868", marks: 1, markCode: "M" },
              { reasoning: "Japan defeated China in 1895.", working: "1895", marks: 1, markCode: "M" },
              { reasoning: "Japan defeated Russia in 1905.", working: "1905", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1868; 1895; 1905",
            commonErrors: ["Swapping the China and Russia war dates."],
          },
        },
        {
          id: "his-u1-imq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years from the Berlin Conference (1884) to the completion of the partition (1914); (b) the number of years between the Indian Rebellion (1857) and the Meiji Restoration (1868); (c) the number of independent African states in 1914.",
          response: { type: "numeric", parts: [{ label: "Berlin to partition complete", answer: 30 }, { label: "Rebellion to Meiji", answer: 11 }, { label: "Independent African states", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract years for intervals; recall the count of independent states." },
            ],
            steps: [
              { reasoning: "$1914 - 1884$.", working: "1914 - 1884 = 30", marks: 1, markCode: "M" },
              { reasoning: "$1868 - 1857$.", working: "1868 - 1857 = 11", marks: 1, markCode: "M" },
              { reasoning: "Liberia and Ethiopia — two states.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30; 11; 2",
            commonErrors: ["Arithmetic slips or miscounting independent states."],
          },
        },
        {
          id: "his-u1-imq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Berlin Conference illustrates imperialist attitudes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Berlin Conference", statement: "Europeans partitioned Africa among themselves without African representation." },
            ],
            steps: [
              { reasoning: "European powers drew rules for claiming territory without consulting African peoples.", marks: 1, markCode: "M" },
              { reasoning: "It treated Africa as an object to be divided rather than a set of sovereign societies.", marks: 1, markCode: "M" },
              { reasoning: "The conference accelerated the Scramble by legitimising rapid territorial claims.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: a clear expression of Eurocentric imperialist thinking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Europeans divided Africa without African input — treating it as property to partition.",
            commonErrors: ["Describing the conference neutrally without evaluating its imperialist character."],
          },
        },
        {
          id: "his-u1-imq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of European imperialism in Africa.",
          parts: [
            { label: "a", prompt: "Identify two motives driving European expansion in Africa.", marks: 2 },
            { label: "b", prompt: "Describe how the partition of Africa was carried out.", marks: 3 },
            { label: "c", prompt: "Evaluate the long-term consequences of imperial rule for Africa.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Imperialism in Africa", statement: "Economic/political motives → conquest and partition → lasting exploitation and instability." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: raw materials and markets, strategic ports, national prestige, 'civilising mission'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two motives identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Berlin Conference (1884–85) set rules for territorial claims.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Europeans used superior weapons, medicine and divide-and-rule tactics to conquer.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Arbitrary borders were drawn ignoring ethnic boundaries.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Negative: extraction economies, cultural disruption, and borders that fuelled post-independence conflict.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Some argue limited gains (infrastructure, Christianity, education) but costs dominated.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs short-term colonial gains against long-term African underdevelopment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Resources, markets, prestige. (b) Berlin rules + force + arbitrary borders. (c) Exploitation and instability outweighed limited gains.",
            commonErrors: ["One-sided accounts ignoring either motives or consequences."],
          },
        },
      ],
    },
    {
      id: "his-u1-wwi",
      title: "World War I: Course and Consequences",
      skill: "Describe the major phases and features of WWI (trench warfare, new weapons) and analyse its political and social consequences.",
      lesson: {
        sections: [
          {
            heading: "Trench warfare and stalemate",
            body: "The Western Front became a network of trenches from the North Sea to Switzerland. Machine guns, barbed wire, artillery and poison gas made frontal attacks suicidal. Stalemate lasted until 1918; battles like the Somme (1916) and Verdun (1916) produced millions of casualties for minimal territorial gain.",
          },
          {
            heading: "Turning points",
            body: "Russia exited after the 1917 revolutions; the USA entered in 1917, providing fresh troops and supplies. Germany's 1918 Spring Offensive failed; Allied counterattacks (Hundred Days) pushed Germany to collapse. The armistice was signed on 11 November 1918.",
          },
          {
            heading: "Consequences",
            body: "~17 million dead, empires destroyed (German, Austro-Hungarian, Ottoman, Russian), and the Treaty of Versailles (1919) imposed heavy reparations and war guilt on Germany — breeding resentment exploited by Hitler. New states emerged in Eastern Europe; women's roles expanded; the League of Nations was created but lacked enforcement power.",
          },
        ],
        keyFormulas: [
          { name: "Western Front", statement: "Trench stalemate 1914–1918; Somme, Verdun" },
          { name: "US entry", statement: "1917: fresh manpower tipped balance" },
          { name: "Versailles", statement: "War guilt + reparations → German resentment" },
        ],
        workedExample: {
          problem: "Explain why the Treaty of Versailles is considered a cause of WWII.",
          solution: "The treaty's war guilt clause and massive reparations humiliated Germany, destabilised its economy and fuelled revanchist nationalism — conditions Hitler exploited to gain power and pursue expansion.",
        },
      },
      questions: [
        {
          id: "his-u1-wq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Trench warfare on the Western Front is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rapid mobile warfare" },
              { id: "b", text: "Static stalemate with huge casualties" },
              { id: "c", text: "Naval blockade" },
              { id: "d", text: "Guerrilla warfare" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Trench warfare", statement: "Defensive trenches + machine guns → stalemate with massive losses." },
            ],
            steps: [
              { reasoning: "Trenches produced static, attritional warfare.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Static stalemate",
            commonErrors: ["Thinking WWI was like WWII's mobile warfare."],
          },
        },
        {
          id: "his-u1-wq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two reasons why the USA's entry in 1917 was significant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "US entry", statement: "Fresh troops, economic power, morale." },
            ],
            steps: [
              { reasoning: "The USA brought ~2 million fresh troops by 1918, breaking German manpower limits.", marks: 1, markCode: "M" },
              { reasoning: "US economic power provided loans, supplies and shipping that sustained the Allies.", marks: 1, markCode: "M" },
              { reasoning: "German collapse followed within a year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Manpower and economic power tipped the war.",
            commonErrors: ["Ignoring the economic dimension of US entry."],
          },
        },
        {
          id: "his-u1-wq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Treaty of Versailles contributed to the conditions for WWII.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Versailles legacy", statement: "War guilt + reparations → resentment → Nazi exploitation." },
            ],
            steps: [
              { reasoning: "Article 231 assigned sole war guilt to Germany, a national humiliation.", marks: 1, markCode: "M" },
              { reasoning: "Reparations (~132 billion gold marks) crippled the German economy and fuelled hyperinflation.", marks: 1, markCode: "M" },
              { reasoning: "Territorial losses and military restrictions bred revanchism; Hitler promised to reverse them.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Versailles created grievances that undermined the post-war order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "War guilt, reparations and territorial losses fuelled German resentment exploited by Hitler.",
            commonErrors: ["Treating Versailles as irrelevant to WWII."],
          },
        },
        {
          id: "his-u1-wq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the social consequences of World War I.",
          parts: [
            { label: "a", prompt: "Describe two ways the war affected the role of women.", marks: 3 },
            { label: "b", prompt: "Explain the impact of the war on colonial peoples.", marks: 2 },
            { label: "c", prompt: "Evaluate whether WWI was a 'total war' and what that meant for civilians.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "WWI social impact", statement: "Total mobilisation affected all of society." },
            ],
            steps: [
              { part: "a", reasoning: "Women entered factories and services in large numbers, replacing male workers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Suffrage movements gained momentum; many countries extended the vote after the war.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Some gains were reversed post-war as men returned — partial change only.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Colonial troops (e.g. Indian, African) fought for empires that denied them equal rights.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Exposure to Europe fuelled nationalist demands; colonies became restive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total war: economies, propaganda and societies fully mobilised for victory.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Civilians faced rationing, bombing, disease and massive casualties.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: boundaries between front and home front dissolved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Women's labour + suffrage gains. (b) Colonial troops fuelled nationalism. (c) Total war mobilised all society.",
            commonErrors: ["Treating the war's impact as only military."],
          },
        },
        {
          id: "his-u1-wq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Battles of the Somme and Verdun (1916) are remembered for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decisive victories that ended the war" },
              { id: "b", text: "Massive casualties for minimal territorial gain" },
              { id: "c", text: "The introduction of tanks" },
              { id: "d", text: "Naval engagements in the Atlantic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Somme and Verdun", statement: "1916 battles exemplified attritional slaughter with little territorial change." },
            ],
            steps: [
              { reasoning: "Both battles produced enormous casualties without decisive territorial results.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Massive casualties, minimal gain",
            commonErrors: ["Treating them as decisive victories."],
          },
        },
        {
          id: "his-u1-wq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Schlieffen Plan involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A naval blockade of Britain" },
              { id: "b", text: "A rapid German attack on France through Belgium to avoid a two-front war" },
              { id: "c", text: "Trench warfare on the Eastern Front" },
              { id: "d", text: "Alliances with Italy and the Ottomans" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Schlieffen Plan", statement: "German strategy to defeat France quickly via Belgium before turning east." },
            ],
            steps: [
              { reasoning: "The plan aimed at a fast victory over France through neutral Belgium.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rapid attack on France via Belgium",
            commonErrors: ["Confusing it with general trench warfare or naval strategy."],
          },
        },
        {
          id: "his-u1-wq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The armistice ending World War I was signed on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "28 June 1914" },
              { id: "b", text: "11 November 1918" },
              { id: "c", text: "28 June 1919" },
              { id: "d", text: "11 November 1919" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Armistice", statement: "WWI ended with the armistice of 11 November 1918." },
            ],
            steps: [
              { reasoning: "The armistice was signed at 11 a.m. on 11 November 1918.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 11 November 1918",
            commonErrors: ["Confusing the armistice with the Treaty of Versailles (June 1919)."],
          },
        },
        {
          id: "his-u1-wq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Article 231 of the Treaty of Versailles is known as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The League of Nations covenant" },
              { id: "b", text: "The 'war guilt' clause assigning sole responsibility for the war to Germany" },
              { id: "c", text: "The disarmament provision" },
              { id: "d", text: "The clause creating Poland" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Article 231", statement: "The 'war guilt clause' making Germany pay reparations for causing the war." },
            ],
            steps: [
              { reasoning: "Article 231 assigned sole blame for the war to Germany and justified reparations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The 'war guilt' clause",
            commonErrors: ["Confusing it with other Versailles articles or the League covenant."],
          },
        },
        {
          id: "his-u1-wq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which factor best explains the USA's entry into WWI in 1917?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct German attack on American territory" },
              { id: "b", text: "Unrestricted submarine warfare, the Zimmerman Telegram and economic ties to the Allies" },
              { id: "c", text: "A formal alliance obligation to Britain" },
              { id: "d", text: "The assassination of an American diplomat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "US entry", statement: "Submarine warfare, Zimmerman Telegram and Allied economic ties brought the US in." },
            ],
            steps: [
              { reasoning: "German unrestricted submarine warfare sank American ships; the Zimmerman Telegram revealed a German-Mexican plot.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Submarine warfare + Zimmerman Telegram + economic ties",
            commonErrors: ["Claiming the US had a formal military alliance with Britain."],
          },
        },
        {
          id: "his-u1-wq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the start of WWI; (b) the US entered the war; (c) the armistice; (d) the Treaty of Versailles was signed.",
          response: { type: "numeric", parts: [{ label: "WWI begins", answer: 1914 }, { label: "US enters", answer: 1917 }, { label: "Armistice", answer: 1918 }, { label: "Treaty of Versailles", answer: 1919 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWI chronology", statement: "1914 → 1917 → 1918 → 1919." },
            ],
            steps: [
              { reasoning: "WWI began in 1914.", working: "1914", marks: 1, markCode: "M" },
              { reasoning: "The US entered in 1917.", working: "1917", marks: 1, markCode: "M" },
              { reasoning: "The armistice was signed in 1918.", working: "1918", marks: 1, markCode: "M" },
              { reasoning: "Versailles was signed in 1919.", working: "1919", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1914; 1917; 1918; 1919",
            commonErrors: ["Confusing the armistice year with the Treaty year."],
          },
        },
        {
          id: "his-u1-wq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the start of WWI; (b) the Battle of the Somme; (c) the armistice ending the war.",
          response: { type: "numeric", parts: [{ label: "WWI begins", answer: 1914 }, { label: "Battle of the Somme", answer: 1916 }, { label: "Armistice", answer: 1918 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWI chronology", statement: "1914 → 1916 → 1918." },
            ],
            steps: [
              { reasoning: "WWI began in 1914.", working: "1914", marks: 1, markCode: "M" },
              { reasoning: "The Somme was fought in 1916.", working: "1916", marks: 1, markCode: "M" },
              { reasoning: "The armistice was signed in 1918.", working: "1918", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1914; 1916; 1918",
            commonErrors: ["Dating the Somme to 1915 or 1917."],
          },
        },
        {
          id: "his-u1-wq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the assassination of Franz Ferdinand, Britain and France declare war, the Battle of the Somme, the US enters the war, the armistice.",
          response: { type: "numeric", parts: [{ label: "Assassination of Franz Ferdinand", answer: 1 }, { label: "Britain and France declare war", answer: 2 }, { label: "Battle of the Somme", answer: 3 }, { label: "US enters the war", answer: 4 }, { label: "Armistice", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWI chronology", statement: "June 1914 → Aug 1914 → 1916 → 1917 → Nov 1918." },
            ],
            steps: [
              { reasoning: "Assassination June 1914 — earliest.", working: "1914-06", marks: 1, markCode: "M" },
              { reasoning: "Britain and France declared war August 1914 — second.", working: "1914-08", marks: 1, markCode: "M" },
              { reasoning: "Somme 1916 — third.", working: "1916", marks: 1, markCode: "M" },
              { reasoning: "US entered 1917 — fourth.", working: "1917", marks: 1, markCode: "M" },
              { reasoning: "Armistice November 1918 — latest.", working: "1918-11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Assassination 1, declarations 2, Somme 3, US entry 4, armistice 5",
            commonErrors: ["Placing the US entry before the Somme."],
          },
        },
        {
          id: "his-u1-wq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Russia exited the war after revolution; (b) Germany launched its Spring Offensive; (c) the Treaty of Versailles was signed.",
          response: { type: "numeric", parts: [{ label: "Russia exits the war", answer: 1917 }, { label: "German Spring Offensive", answer: 1918 }, { label: "Treaty of Versailles", answer: 1919 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "WWI endgame", statement: "Russia out 1917; Spring Offensive 1918; Versailles 1919." },
            ],
            steps: [
              { reasoning: "Russia withdrew after the 1917 revolutions.", working: "1917", marks: 1, markCode: "M" },
              { reasoning: "The Spring Offensive occurred in 1918.", working: "1918", marks: 1, markCode: "M" },
              { reasoning: "Versailles was signed in 1919.", working: "1919", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1917; 1918; 1919",
            commonErrors: ["Confusing Russia's exit with Germany's defeat."],
          },
        },
        {
          id: "his-u1-wq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the duration of WWI in years (1914–1918); (b) the number of years between US entry (1917) and the armistice (1918); (c) the number of empires destroyed by the war.",
          response: { type: "numeric", parts: [{ label: "Duration of WWI", answer: 4 }, { label: "US entry to armistice", answer: 1 }, { label: "Empires destroyed", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract years for intervals; recall empires destroyed (German, Austro-Hungarian, Ottoman, Russian)." },
            ],
            steps: [
              { reasoning: "$1918 - 1914$.", working: "1918 - 1914 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1918 - 1917$.", working: "1918 - 1917 = 1", marks: 1, markCode: "M" },
              { reasoning: "Four empires collapsed: German, Austro-Hungarian, Ottoman, Russian.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 years; 1 year; 4 empires",
            commonErrors: ["Under-counting the empires destroyed."],
          },
        },
        {
          id: "his-u1-wq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Western Front became a war of attrition and stalemate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Attrition", statement: "Defensive technology (machine guns, wire, artillery) made breakthrough nearly impossible." },
            ],
            steps: [
              { reasoning: "Machine guns, barbed wire and massed artillery gave defenders decisive advantage.", marks: 1, markCode: "M" },
              { reasoning: "Trenches from the North Sea to Switzerland made movement nearly impossible.", marks: 1, markCode: "M" },
              { reasoning: "Offensive tactics could not overcome defensive firepower — attacks became suicidal.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: stalemate until new technology or exhaustion changed the balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Defensive technology and trench lines made breakthroughs impossible → attrition.",
            commonErrors: ["Describing WWI as mobile warfare like WWII."],
          },
        },
        {
          id: "his-u1-wq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of World War I.",
          parts: [
            { label: "a", prompt: "Describe the key events of the July Crisis (June–August 1914).", marks: 3 },
            { label: "b", prompt: "Explain how the alliance system turned a regional crisis into a general war.", marks: 3 },
            { label: "c", prompt: "Evaluate whether war in 1914 was inevitable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "WWI causes", statement: "Deep structural causes + July Crisis trigger + alliance chain reaction." },
            ],
            steps: [
              { part: "a", reasoning: "Gavrilo Princip assassinated Archduke Franz Ferdinand in Sarajevo, 28 June 1914.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Austria-Hungary issued an ultimatum to Serbia; Serbia's partial acceptance was rejected.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Austria-Hungary declared war on Serbia (28 July); Russia mobilised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Russia mobilised to defend Serbia (Slavic ally); Germany declared war on Russia and France.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Germany's Schlieffen Plan required attacking France via Belgium, drawing in Britain.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alliance commitments pulled in all major powers within weeks.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Long-term militarism, nationalism and imperial rivalry made war likely.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluative judgement: the assassination was the trigger; deeper causes made war probable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Assassination → ultimatum → declarations. (b) Alliance chain → general war. (c) War likely given deep causes; assassination was trigger.",
            commonErrors: ["Blaming only the assassination and ignoring alliances."],
          },
        },
      ],
    },
  ],
};
