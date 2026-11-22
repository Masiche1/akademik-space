import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "his-u1-lesson-1-4",
  code: "1-4",
  title: "The Medieval and Early Modern World",
  goal: "I CAN describe the major civilisations and developments of 750–1789 and explain the transition to the modern state system.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Caliphate", definition: "Political-religious state led by a caliph; the Abbasid Caliphate centred on Baghdad (750–1258)." },
    { term: "Pax Mongolica", definition: "'Mongol Peace' — relative stability and safe trade across Eurasia under Mongol rule (13th–14th centuries)." },
    { term: "Crusades", definition: "Series of religious wars (1095–1291) in which Christian armies attempted to seize the Holy Land from Muslim rulers." },
    { term: "Mercantilism", definition: "Economic doctrine that national power depends on accumulating bullion through exports, colonies and restricted imports." },
    { term: "Sovereign state", definition: "A political community with supreme authority over a defined territory and population, recognised by other states." },
    { term: "Westphalia", definition: "The 1648 Peace of Westphalia, ending the Thirty Years' War and establishing principles of state sovereignty." },
  ],
  concepts: [
    {
      id: "his-u1-medieval-world",
      title: "The medieval world, 750–1400",
      skill: "Describe the achievements of Islamic, Byzantine and Mongol civilisations and explain European recovery after 1000 CE.",
      lesson: {
        sections: [
          {
            heading: "The Islamic Golden Age",
            body: "After the Abbasid revolution of 750, **Baghdad** became the centre of a vast Islamic civilisation. Scholars translated Greek, Persian and Indian texts into Arabic; advances in **astronomy, mathematics (algebra, zero), medicine and optics** flourished under figures like al-Khwarizmi and Ibn Sina (Avicenna). Long-distance trade linked Europe, Africa and Asia through networks such as the Silk Roads and Indian Ocean routes.",
          },
          {
            heading: "Byzantium, Mongols and the Crusades",
            body: "The **Byzantine Empire** preserved Roman law and Orthodox Christianity until 1453, acting as a bridge between Europe and the Islamic world. The **Mongol Empire** (Genghis Khan, 1206) conquered the largest contiguous land empire in history; under the **Pax Mongolica** Silk Road trade revived and merchants like Marco Polo travelled safely. The **Crusades** (1095–1291) were a series of religious wars over the Holy Land that increased contact between Europe and the Middle East but ultimately failed militarily.",
          },
          {
            heading: "European recovery: towns and universities",
            body: "After 1000 CE, Europe recovered demographically and economically: the **agrarian revolution** (three-field system, heavy plough) raised yields, freeing labour for towns and trade. Guilds organised craft production; the **university** emerged (Bologna, Paris, Oxford) as institutions of learning and credentialling. Kings consolidated power, laying groundwork for the sovereign state.",
          },
        ],
        keyFormulas: [
          { name: "Abbasid centre", statement: "Baghdad = capital of the Islamic Golden Age (750–1258)" },
          { name: "Mongol order", statement: "Pax Mongolica → safe roads → revived Eurasian trade" },
          { name: "European revival", statement: "Agrarian surplus → towns + guilds + universities" },
        ],
        workedExample: {
          problem: "Explain one way in which the Mongol Empire contributed to global exchange in the 13th and 14th centuries.",
          solution: "Under the Pax Mongolica, Mongol control of the Silk Roads made travel relatively safe, so merchants, missionaries and travellers (e.g. Marco Polo) moved between Europe and Asia, spreading goods, ideas and technologies.",
        },
      },
      questions: [
        {
          id: "his-u1-medq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Pax Mongolica' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Crusader states in the Holy Land" },
              { id: "b", text: "The Mongol alliance with Byzantium" },
              { id: "c", text: "A period of relative peace and safe trade under Mongol rule" },
              { id: "d", text: "The Mongol conquest of China" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pax Mongolica", statement: "Period of stability and protected trade routes across the Mongol Empire." },
            ],
            steps: [
              { reasoning: "The Pax Mongolica was the era of Mongol-enforced order that made long-distance trade safer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Period of peace and safe trade under Mongol rule",
            commonErrors: ["Confusing it with the Mongol military conquests themselves."],
          },
        },
        {
          id: "his-u1-medq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two achievements of the Islamic Golden Age.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Islamic Golden Age achievements", statement: "Advances in science, mathematics, medicine and trade centred on Baghdad." },
            ],
            steps: [
              { reasoning: "Scientific and mathematical advances: algebra, the decimal system and zero, astronomy and optics developed in Baghdad.", marks: 1, markCode: "M" },
              { reasoning: "Medical and scholarly output: hospitals and encyclopaedic works by figures such as Ibn Sina preserved and extended Greek learning.", marks: 1, markCode: "M" },
              { reasoning: "Trade networks linked Europe, Africa and Asia, spreading goods and knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scientific/mathematical advances and a flourishing medical-scholarly culture sustained by long-distance trade.",
            commonErrors: ["Listing wars or conquests instead of civilisational achievements."],
          },
        },
        {
          id: "his-u1-medq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the consequences of the Crusades for relations between Europe and the Middle East.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crusade consequences", statement: "Military failure but increased contact; trade, technology transfer and lasting religious hostility." },
            ],
            steps: [
              { reasoning: "The Crusades failed to hold the Holy Land permanently — the last crusader state fell in 1291.", marks: 1, markCode: "M" },
              { reasoning: "Contact with the Islamic world stimulated European trade and the transfer of goods, science and technology.", marks: 1, markCode: "M" },
              { reasoning: "However, they deepened religious hostility and mistrust between Christianity and Islam that persisted for centuries.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: militarily unsuccessful but culturally and economically consequential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Military failure, but trade and cultural exchange alongside deepened religious hostility.",
            commonErrors: ["Treating the Crusades as a total European victory or a purely religious event."],
          },
        },
        {
          id: "his-u1-medq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors behind European recovery and growth after 1000 CE.",
          parts: [
            { label: "a", prompt: "Identify two agricultural or technological changes that boosted medieval European output.", marks: 2 },
            { label: "b", prompt: "Explain how economic growth supported the rise of towns and universities.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of agriculture compared with other factors in European recovery.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medieval recovery", statement: "Agrarian surplus + climate + trade revival enabled urbanisation and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Three-field rotation and the heavy plough increased yields and freed labour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both changes identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Surplus food supported non-farming populations, allowing towns and craft guilds to grow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wealthy towns and the Church funded universities as centres of learning and credentialling.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Trade revival and revived learning connected urban growth to scholarship.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Agriculture was the necessary foundation, but climate improvement, trade revival and political stability also contributed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs agriculture against these other factors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on relative importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three-field system, heavy plough. (b) Surplus → towns/guilds → universities. (c) Necessary but one of several factors.",
            commonErrors: ["Attributing recovery to a single cause."],
          },
        },
        {
          id: "his-u1-medq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Baghdad became the centre of the Islamic Golden Age under:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Mongol Ilkhanate" },
              { id: "b", text: "The Abbasid Caliphate" },
              { id: "c", text: "The Umayyad Caliphate based in Damascus" },
              { id: "d", text: "The Ottoman Empire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Abbasid Caliphate", statement: "After 750, Baghdad was the capital of the Abbasid Caliphate and its golden age of learning." },
            ],
            steps: [
              { reasoning: "The Abbasid revolution of 750 moved the capital to Baghdad, centre of the Golden Age.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The Abbasid Caliphate",
            commonErrors: ["Confusing Abbasids with the earlier Umayyads or later Ottomans."],
          },
        },
        {
          id: "his-u1-medq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Marco Polo is associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leading the Crusades to the Holy Land" },
              { id: "b", text: "Travelling to China during the Pax Mongolica era" },
              { id: "c", text: "Conquering China for the Mongols" },
              { id: "d", text: "Founding the first European universities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Marco Polo", statement: "Venetian traveller who journeyed to China under Mongol protection in the 13th century." },
            ],
            steps: [
              { reasoning: "Polo's travels were possible because the Pax Mongolica made the journey relatively safe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Travel to China under the Pax Mongolica",
            commonErrors: ["Treating Polo as a conqueror or crusader."],
          },
        },
        {
          id: "his-u1-medq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Crusades were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A series of religious wars to seize the Holy Land from Muslim rulers" },
              { id: "b", text: "Internal European civil wars" },
              { id: "c", text: "Mongol conquests of Russia" },
              { id: "d", text: "Trade embargoes between Italian city-states" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crusades", statement: "Religious wars (1095–1291) in which Christian armies tried to take the Holy Land." },
            ],
            steps: [
              { reasoning: "The Crusades were religious-military campaigns for control of the Holy Land.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Religious wars for the Holy Land",
            commonErrors: ["Confusing the Crusades with Mongol or internal European wars."],
          },
        },
        {
          id: "his-u1-medq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The three-field system improved medieval agriculture by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminating the need for fallow land entirely" },
              { id: "b", text: "Rotating crops to restore soil fertility and raise yields" },
              { id: "c", text: "Banning common pasture land" },
              { id: "d", text: "Introducing slave labour on plantations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Three-field system", statement: "Rotation of crops across three fields increased output and freed labour for towns." },
            ],
            steps: [
              { reasoning: "Rotating crops restored nutrients and allowed two harvests per year instead of one.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Crop rotation raising yields",
            commonErrors: ["Claiming it removed fallow entirely — it reduced but did not eliminate it."],
          },
        },
        {
          id: "his-u1-medq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains how the Mongol Empire facilitated Eurasian exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Pax Mongolica made travel safe, reviving Silk Road trade and the movement of goods, ideas and people" },
              { id: "b", text: "It conquered all of Europe and Asia" },
              { id: "c", text: "It forced European traders to convert to Islam" },
              { id: "d", text: "It banned all trade to protect its borders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pax Mongolica", statement: "Mongol-enforced order made long-distance trade relatively safe, enabling exchange." },
            ],
            steps: [
              { reasoning: "Mongol control of the routes reduced banditry, so merchants and travellers could move safely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Safe routes revived trade and exchange",
            commonErrors: ["Confusing the Pax (peace/trade) with the Mongol wars of conquest."],
          },
        },
        {
          id: "his-u1-medq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Abbasid revolution moved the caliphate to Baghdad; (b) the Crusades began; (c) Genghis Khan founded the Mongol Empire.",
          response: { type: "numeric", parts: [{ label: "Abbasid revolution", answer: 750 }, { label: "Crusades begin", answer: 1095 }, { label: "Mongol Empire founded", answer: 1206 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Medieval chronology", statement: "750 → 1095 → 1206." },
            ],
            steps: [
              { reasoning: "The Abbasid revolution occurred in 750.", working: "750", marks: 1, markCode: "M" },
              { reasoning: "The First Crusade was called in 1095.", working: "1095", marks: 1, markCode: "M" },
              { reasoning: "Genghis Khan united the Mongols in 1206.", working: "1206", marks: 1, markCode: "A" },
            ],
            finalAnswer: "750; 1095; 1206",
            commonErrors: ["Confusing the founding of the Mongol Empire with later conquests."],
          },
        },
        {
          id: "his-u1-medq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Abbasid Caliphate began; (b) the Crusades began; (c) the last Crusader state fell.",
          response: { type: "numeric", parts: [{ label: "Abbasid Caliphate begins", answer: 750 }, { label: "Crusades begin", answer: 1095 }, { label: "Last Crusader state falls", answer: 1291 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Medieval chronology", statement: "Abbasids 750; Crusades 1095–1291." },
            ],
            steps: [
              { reasoning: "The Abbasid Caliphate began in 750.", working: "750", marks: 1, markCode: "M" },
              { reasoning: "The Crusades began in 1095.", working: "1095", marks: 1, markCode: "M" },
              { reasoning: "The last Crusader state (Acre) fell in 1291.", working: "1291", marks: 1, markCode: "A" },
            ],
            finalAnswer: "750; 1095; 1291",
            commonErrors: ["Confusing the start and end of the Crusades."],
          },
        },
        {
          id: "his-u1-medq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Abbasid revolution, the First Crusade, the founding of the Mongol Empire, Marco Polo's travels to China.",
          response: { type: "numeric", parts: [{ label: "Abbasid revolution", answer: 1 }, { label: "First Crusade", answer: 2 }, { label: "Mongol Empire founded", answer: 3 }, { label: "Marco Polo's travels", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Medieval chronology", statement: "750 → 1095 → 1206 → c.1270s." },
            ],
            steps: [
              { reasoning: "Abbasid revolution 750 — earliest.", working: "750", marks: 1, markCode: "M" },
              { reasoning: "First Crusade 1095 — second.", working: "1095", marks: 1, markCode: "M" },
              { reasoning: "Mongol Empire founded 1206 — third.", working: "1206", marks: 1, markCode: "M" },
              { reasoning: "Polo travelled to China in the 1270s — latest.", working: "1270s", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Abbasid 1, Crusade 2, Mongol Empire 3, Polo 4",
            commonErrors: ["Placing the Crusades before the Abbasid revolution."],
          },
        },
        {
          id: "his-u1-medq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Genghis Khan unified the Mongol tribes; (b) the First Crusade was launched; (c) Baghdad fell to the Mongols, ending the Abbasid Caliphate.",
          response: { type: "numeric", parts: [{ label: "Mongol unification", answer: 1206 }, { label: "First Crusade", answer: 1095 }, { label: "Baghdad falls", answer: 1258 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Medieval chronology", statement: "1206 unification; 1095 Crusade; 1258 Baghdad falls." },
            ],
            steps: [
              { reasoning: "Genghis Khan unified the tribes in 1206.", working: "1206", marks: 1, markCode: "M" },
              { reasoning: "The First Crusade began in 1095.", working: "1095", marks: 1, markCode: "M" },
              { reasoning: "Baghdad fell to Hulagu's Mongols in 1258.", working: "1258", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1206; 1095; 1258",
            commonErrors: ["Confusing the Mongol founding date with the fall of Baghdad."],
          },
        },
        {
          id: "his-u1-medq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the duration of the Abbasid Caliphate in years (750–1258); (b) the duration of the Crusades in years (1095–1291); (c) the number of years between the First Crusade (1095) and the founding of the Mongol Empire (1206).",
          response: { type: "numeric", parts: [{ label: "Abbasid duration", answer: 508 }, { label: "Crusade duration", answer: 196 }, { label: "Crusade to Mongol Empire", answer: 111 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Duration = end year minus start year." },
            ],
            steps: [
              { reasoning: "$1258 - 750$.", working: "1258 - 750 = 508", marks: 1, markCode: "M" },
              { reasoning: "$1291 - 1095$.", working: "1291 - 1095 = 196", marks: 1, markCode: "M" },
              { reasoning: "$1206 - 1095$.", working: "1206 - 1095 = 111", marks: 1, markCode: "A" },
            ],
            finalAnswer: "508; 196; 111 years",
            commonErrors: ["Off-by-one errors in subtraction."],
          },
        },
        {
          id: "his-u1-medq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Pax Mongolica promoted Eurasian exchange in the 13th and 14th centuries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pax Mongolica", statement: "Mongol-enforced order made the Silk Roads safe, enabling trade and cultural exchange." },
            ],
            steps: [
              { reasoning: "Mongol control suppressed banditry and standardised tolls along the Silk Roads.", marks: 1, markCode: "M" },
              { reasoning: "Merchants like Marco Polo could travel safely between Europe and Asia.", marks: 1, markCode: "M" },
              { reasoning: "Goods, technologies, religions and ideas moved in both directions along protected routes.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the Pax created a golden age of Eurasian connectivity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Safe routes under Mongol rule revived trade and the movement of goods, ideas and people.",
            commonErrors: ["Confusing the Pax with the violence of the conquests themselves."],
          },
        },
        {
          id: "his-u1-medq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors behind European recovery and growth after 1000 CE.",
          parts: [
            { label: "a", prompt: "Identify two agricultural or technological changes that boosted output.", marks: 2 },
            { label: "b", prompt: "Explain how economic growth supported towns and universities.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of agriculture compared with other factors in Europe's recovery.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Medieval recovery", statement: "Agrarian surplus + climate + trade revival enabled urbanisation and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: three-field rotation and the heavy plough.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two changes identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Surplus food freed labour from farming, allowing towns and craft guilds to grow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wealthy towns and the Church funded universities as centres of learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Trade revival carried goods and ideas into the growing urban centres.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Agriculture was the necessary foundation, but climate improvement and trade revival also mattered.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Political consolidation by kings strengthened states and institutions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs agriculture against climate, trade and political factors in a judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three-field system, heavy plough. (b) Surplus → towns/guilds → universities. (c) Necessary foundation; other factors also vital.",
            commonErrors: ["Attributing recovery to agriculture alone."],
          },
        },
      ],
    },
    {
      id: "his-u1-early-modern-states",
      title: "Early modern states and wars, 1400–1789",
      skill: "Describe the rise of sovereign nation-states, explain the impact of religious wars and the Thirty Years' War, and analyse colonial empires and mercantilism.",
      lesson: {
        sections: [
          {
            heading: "Sovereign states and religious conflict",
            body: "Between 1400 and 1789, European rulers built **sovereign nation-states**: centralised taxation, standing armies, bureaucracies and the claim to supreme authority within defined borders. The **Reformation** (1517) split Western Christianity, triggering wars of religion — the French Wars of Religion and the Thirty Years' War (1618–1648). The **Peace of Westphalia** (1648) confirmed state sovereignty and the principle of cuius regio, eius religio.",
          },
          {
            heading: "Colonial empires and mercantilism",
            body: "European powers built overseas empires: Spain and Portugal in the Americas, then the Dutch, English and French in Asia and Africa. **Mercantilism** guided policy — accumulating bullion through export surpluses, colonies supplying raw materials and markets for finished goods, and navigation acts restricting trade. Colonies also spread Christianity and European languages.",
          },
          {
            heading: "Enlightenment and the modern order",
            body: "The **Enlightenment** (17th–18th centuries) applied reason to politics and society: thinkers like Locke and Montesquieu argued for limited government, rights and the separation of powers. These ideas, combined with fiscal-military pressures on absolutist states, contributed to revolutions (American 1776, French 1789) and the modern concept of popular sovereignty.",
          },
        ],
        keyFormulas: [
          { name: "Westphalia principle", statement: "Cuius regio, eius religio — ruler determines religion of territory" },
          { name: "Mercantilist equation", statement: "Exports + colonies → bullion → national power" },
          { name: "Sovereign state", statement: "Supreme authority over territory + population + recognised borders" },
        ],
        workedExample: {
          problem: "How did the Thirty Years' War contribute to the modern state system?",
          solution: "The war devastated Central Europe, but the Peace of Westphalia (1648) ended religious wars by recognising the sovereignty of states within fixed borders — a key step toward the modern international system.",
        },
      },
      questions: [
        {
          id: "his-u1-eomq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Peace of Westphalia (1648) is significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ended the Thirty Years' War and recognised state sovereignty" },
              { id: "b", text: "Started the Age of Exploration" },
              { id: "c", text: "Created the first colonial empire" },
              { id: "d", text: "Established the Holy Roman Empire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Westphalia", statement: "1648 settlement ending the Thirty Years' War and confirming state sovereignty." },
            ],
            steps: [
              { reasoning: "Westphalia ended the Thirty Years' War and established principles of territorial sovereignty.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ended the Thirty Years' War and recognised sovereignty",
            commonErrors: ["Confusing Westphalia with the Peace of Utrecht or earlier treaties."],
          },
        },
        {
          id: "his-u1-eomq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two features of mercantilist economic policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Mercantilism", statement: "Colonies + export surplus + bullion accumulation = national power." },
            ],
            steps: [
              { reasoning: "Colonial exploitation: colonies supplied raw materials and served as captive markets for the mother country's manufactures.", marks: 1, markCode: "M" },
              { reasoning: "Trade restriction: navigation acts and tariffs aimed to maximise exports and limit imports.", marks: 1, markCode: "M" },
              { reasoning: "Goal: accumulate bullion (gold/silver) as the measure of national wealth and power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colonial monopoly over trade and export-led accumulation of bullion as national power.",
            commonErrors: ["Describing free trade or laissez-faire instead of mercantilism."],
          },
        },
        {
          id: "his-u1-eomq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how religious conflict shaped European politics between 1517 and 1648.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Religious wars", statement: "Reformation split → wars of religion → sovereignty settlement." },
            ],
            steps: [
              { reasoning: "The Reformation (1517) divided Western Christianity into Catholic and Protestant states and movements.", marks: 1, markCode: "M" },
              { reasoning: "Wars of religion (French Wars of Religion, Thirty Years' War) devastated regions and strengthened state authority to end them.", marks: 1, markCode: "M" },
              { reasoning: "Rulers used religion to legitimise power but also subordinated churches to state control.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: religious conflict accelerated the development of sovereign, secular-leaning states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reformation → wars of religion → strengthened and secularised state authority.",
            commonErrors: ["Focusing only on doctrine without connecting to state-building."],
          },
        },
        {
          id: "his-u1-eomq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impact of European colonial expansion between 1500 and 1789.",
          parts: [
            { label: "a", prompt: "Identify two regions where European powers established colonies or trading posts.", marks: 2 },
            { label: "b", prompt: "Explain how mercantilist policies benefited the colonising powers.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of colonialism for the colonised peoples.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Colonial impact", statement: "Europe gained bullion, markets and resources; colonies suffered exploitation and demographic catastrophe." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: Spanish America, Portuguese Brazil, Dutch/English/French possessions in Asia and Africa.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid regions identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Colonies supplied cheap raw materials and captive markets, boosting exports.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bullion, sugar and silver flows enriched European treasuries and funded states and navies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Navigation acts and monopolies excluded rivals, concentrating wealth.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Negative: indigenous populations devastated by disease, enslavement and exploitation (e.g. encomienda, Atlantic slave trade).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Some argue limited gains (crops, Christianity, infrastructure) but costs outweighed benefits for most colonised peoples.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on overall impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Americas, Asia/Africa trading posts. (b) Raw materials + markets + bullion. (c) Mostly devastating for colonised peoples.",
            commonErrors: ["One-sided accounts ignoring demographic catastrophe or European gains."],
          },
        },
        {
          id: "his-u1-eomq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Cuius regio, eius religio' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ruler determines the religion of his territory" },
              { id: "b", text: "Trade routes belong to the state" },
              { id: "c", text: "All states must remain Catholic" },
              { id: "d", text: "The Pope appoints all bishops" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cuius regio, eius religio", statement: "Westphalian principle that each ruler chose the religion of his territory." },
            ],
            steps: [
              { reasoning: "The phrase means 'whose region, his religion' — rulers set the faith of their lands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ruler determines the territory's religion",
            commonErrors: ["Confusing it with papal supremacy or religious tolerance."],
          },
        },
        {
          id: "his-u1-eomq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Mercantilism held that national power depended on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building large navies only" },
              { id: "b", text: "Spreading religion abroad" },
              { id: "c", text: "Accumulating bullion through export surpluses and colonies" },
              { id: "d", text: "Free trade and minimal government" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mercantilism", statement: "Doctrine that wealth = bullion; colonies and export surpluses built national power." },
            ],
            steps: [
              { reasoning: "Mercantilists measured wealth in gold and silver accumulated via trade surplus and colonies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Accumulating bullion via exports and colonies",
            commonErrors: ["Confusing mercantilism with free trade or laissez-faire."],
          },
        },
        {
          id: "his-u1-eomq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Thirty Years' War (1618–1648) ended with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Treaty of Utrecht" },
              { id: "b", text: "The Peace of Augsburg" },
              { id: "c", text: "The Concordat of Bologna" },
              { id: "d", text: "The Peace of Westphalia" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Peace of Westphalia", statement: "1648 settlement ending the Thirty Years' War and confirming state sovereignty." },
            ],
            steps: [
              { reasoning: "The Peace of Westphalia (1648) concluded the Thirty Years' War.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Peace of Westphalia",
            commonErrors: ["Confusing Westphalia with other peace treaties."],
          },
        },
        {
          id: "his-u1-eomq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Enlightenment thinkers such as Locke argued for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limited government, natural rights and the consent of the governed" },
              { id: "b", text: "Theocracy and church control of the state" },
              { id: "c", text: "Hereditary privilege for all classes" },
              { id: "d", text: "Absolute monarchy and divine right" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Enlightenment ideas", statement: "Locke and others championed limited government, rights and popular sovereignty." },
            ],
            steps: [
              { reasoning: "Enlightenment political thought challenged absolutism with ideas of rights and consent.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Limited government and natural rights",
            commonErrors: ["Confusing Enlightenment ideas with absolutist or theocratic doctrine."],
          },
        },
        {
          id: "his-u1-eomq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains how Westphalia contributed to the modern state system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It abolished all armies in Europe" },
              { id: "b", text: "It created the first global empire" },
              { id: "c", text: "It united all European states under the Pope" },
              { id: "d", text: "It confirmed state sovereignty within fixed borders and ended religious wars as a basis of conflict" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Westphalian system", statement: "1648 settlement established sovereign states with recognised borders — a foundation of international relations." },
            ],
            steps: [
              { reasoning: "Westphalia recognised rulers' authority over territory and ended wars fought over religion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Confirmed sovereignty and ended religious wars",
            commonErrors: ["Treating Westphalia as a military or religious settlement only."],
          },
        },
        {
          id: "his-u1-eomq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Luther posted the Ninety-Five Theses; (b) the Peace of Westphalia was signed; (c) the French Revolution began.",
          response: { type: "numeric", parts: [{ label: "Luther's theses", answer: 1517 }, { label: "Peace of Westphalia", answer: 1648 }, { label: "French Revolution begins", answer: 1789 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Early modern chronology", statement: "1517 → 1648 → 1789." },
            ],
            steps: [
              { reasoning: "Luther's theses were posted in 1517.", working: "1517", marks: 1, markCode: "M" },
              { reasoning: "Westphalia was signed in 1648.", working: "1648", marks: 1, markCode: "M" },
              { reasoning: "The French Revolution began in 1789.", working: "1789", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1517; 1648; 1789",
            commonErrors: ["Confusing the Reformation's start with Westphalia."],
          },
        },
        {
          id: "his-u1-eomq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Thirty Years' War began; (b) the Peace of Westphalia ended it; (c) the duration of the war in years.",
          response: { type: "numeric", parts: [{ label: "War begins", answer: 1618 }, { label: "Peace of Westphalia", answer: 1648 }, { label: "Duration (years)", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Thirty Years' War", statement: "1618–1648, lasting thirty years." },
            ],
            steps: [
              { reasoning: "The war began in 1618.", working: "1618", marks: 1, markCode: "M" },
              { reasoning: "Westphalia ended it in 1648.", working: "1648", marks: 1, markCode: "M" },
              { reasoning: "$1648 - 1618 = 30$ years.", working: "1648 - 1618 = 30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1618; 1648; 30",
            commonErrors: ["Off-by-one errors in the duration calculation."],
          },
        },
        {
          id: "his-u1-eomq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Luther's Ninety-Five Theses, the start of the Thirty Years' War, the Peace of Westphalia, the American Declaration of Independence.",
          response: { type: "numeric", parts: [{ label: "Luther's theses", answer: 1 }, { label: "Thirty Years' War begins", answer: 2 }, { label: "Peace of Westphalia", answer: 3 }, { label: "American Declaration", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Early modern chronology", statement: "1517 → 1618 → 1648 → 1776." },
            ],
            steps: [
              { reasoning: "Theses 1517 — earliest.", working: "1517", marks: 1, markCode: "M" },
              { reasoning: "Thirty Years' War began 1618 — second.", working: "1618", marks: 1, markCode: "M" },
              { reasoning: "Westphalia 1648 — third.", working: "1648", marks: 1, markCode: "M" },
              { reasoning: "Declaration 1776 — latest.", working: "1776", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theses 1, Thirty Years' War 2, Westphalia 3, Declaration 4",
            commonErrors: ["Placing Westphalia before the war it ended."],
          },
        },
        {
          id: "his-u1-eomq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the American Revolution began; (b) the French Revolution began; (c) the Peace of Westphalia was signed.",
          response: { type: "numeric", parts: [{ label: "American Revolution begins", answer: 1775 }, { label: "French Revolution begins", answer: 1789 }, { label: "Peace of Westphalia", answer: 1648 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Revolution chronology", statement: "Westphalia 1648; America 1775; France 1789." },
            ],
            steps: [
              { reasoning: "American Revolution began in 1775.", working: "1775", marks: 1, markCode: "M" },
              { reasoning: "French Revolution began in 1789.", working: "1789", marks: 1, markCode: "M" },
              { reasoning: "Westphalia was signed in 1648.", working: "1648", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1775; 1789; 1648",
            commonErrors: ["Confusing Westphalia (1648) with later revolutionary dates."],
          },
        },
        {
          id: "his-u1-eomq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) the duration of the Thirty Years' War (1618–1648); (b) between Luther's theses (1517) and Westphalia (1648); (c) between Westphalia (1648) and the American Declaration (1776).",
          response: { type: "numeric", parts: [{ label: "Thirty Years' War duration", answer: 30 }, { label: "Theses to Westphalia", answer: 131 }, { label: "Westphalia to Declaration", answer: 128 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Duration and intervals are end year minus start year." },
            ],
            steps: [
              { reasoning: "$1648 - 1618$.", working: "1648 - 1618 = 30", marks: 1, markCode: "M" },
              { reasoning: "$1648 - 1517$.", working: "1648 - 1517 = 131", marks: 1, markCode: "M" },
              { reasoning: "$1776 - 1648$.", working: "1776 - 1648 = 128", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30; 131; 128 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u1-eomq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how mercantilist policies benefited the colonising powers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mercantilist gains", statement: "Colonies supplied raw materials and captive markets, enriching the metropole." },
            ],
            steps: [
              { reasoning: "Colonies provided cheap raw materials (sugar, silver, furs) for European industry.", marks: 1, markCode: "M" },
              { reasoning: "Navigation acts and monopolies reserved colonial trade for the mother country.", marks: 1, markCode: "M" },
              { reasoning: "Bullion and goods flows enriched treasuries and funded states and navies.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: mercantilism concentrated wealth and power in Europe at colonial expense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Raw materials, captive markets and bullion flows enriched and strengthened the colonising powers.",
            commonErrors: ["Describing mercantilism without linking it to concrete gains."],
          },
        },
        {
          id: "his-u1-eomq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the development of the sovereign state system between 1400 and 1789.",
          parts: [
            { label: "a", prompt: "Describe two features of the sovereign nation-state.", marks: 2 },
            { label: "b", prompt: "Explain how the wars of religion and Westphalia shaped the state system.", marks: 3 },
            { label: "c", prompt: "Evaluate the Enlightenment's contribution to revolutionary change.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sovereign state system", statement: "Centralised authority over territory → religious conflict → sovereignty settlement → revolutionary ideas." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: centralised taxation, standing armies, bureaucracies, supreme authority over territory.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The Reformation split Christianity, triggering wars of religion across Europe.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Thirty Years' War devastated Central Europe but ended with Westphalia (1648).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Westphalia confirmed sovereignty within fixed borders — the basis of the modern state system.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Enlightenment ideas (rights, consent, limited government) challenged absolutism.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They inspired the American and French revolutions and the idea of popular sovereignty.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: ideas were necessary but fiscal and political pressures also drove revolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Centralisation, standing armies, bureaucracy. (b) Wars → Westphalia sovereignty. (c) Ideas inspired revolutions but were not the sole cause.",
            commonErrors: ["Treating the sovereign state system as inevitable rather than constructed."],
          },
        },
      ],
    },
  ],
};
