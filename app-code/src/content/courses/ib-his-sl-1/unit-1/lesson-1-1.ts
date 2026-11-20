import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "his-u1-lesson-1-1",
  code: "1-1",
  title: "Early Societies in the Americas and Europe",
  goal: "I CAN describe the achievements and structures of early American and European societies and compare their development.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Civilisation", definition: "A complex society with cities, writing, social hierarchy, specialised labour and centralised authority." },
    { term: "Theocracy", definition: "Rule by religious authority; e.g. Aztec priest-kings claimed divine mandate." },
    { term: "Tribute system", definition: "Conquered peoples paying goods or labour to an imperial centre — basis of Aztec and Inca control." },
    { term: "Feudalism", definition: "Medieval European system of landholding in exchange for military service and labour." },
    { term: "Manorialism", definition: "Economic system where serfs worked land owned by a lord in return for protection." },
    { term: "Renaissance", definition: "Cultural movement (c. 1400–1600) reviving classical learning, art and human-centred values in Europe." },
  ],
  concepts: [
    {
      id: "his-u1-american-societies",
      title: "Early societies of the Americas",
      skill: "Describe the political, economic and cultural features of Olmec, Maya, Aztec and Inca societies and evaluate their achievements.",
      lesson: {
        sections: [
          {
            heading: "Foundations: Olmec and Maya",
            body: "The **Olmec** (c. 1200–400 BCE) are called the 'mother culture' of Mesoamerica: colossal basalt heads, calendar systems and early writing influenced later peoples. The **Maya** (c. 2000 BCE–900 CE) built city-states like Tikal and Palenque with monumental pyramids, a sophisticated calendar, and the only fully developed writing system in the Americas. Maya decline (900–1100 CE) involved drought, warfare and political fragmentation.",
          },
          {
            heading: "Aztec and Inca empires",
            body: "The **Aztec** (Mexica) built Tenochtitlan on a lake island (c. 1325) with chinampas (floating gardens), a tribute empire of ~38 provinces, and human sacrifice tied to religious belief. The **Inca** (Tawantinsuyu, 'land of four quarters') stretched 4,000 km along the Andes, organised through a decimal administration, mit'a labour tax, quipu record-keeping and an extensive road system — without writing or the wheel for transport.",
          },
          {
            heading: "Comparison and evaluation",
            body: "All four societies developed agriculture (maize, potatoes), monumental architecture and complex calendars. Differences: Maya city-states were politically fragmented; Aztec and Inca were centralised empires. All lacked draft animals and wheeled transport; all were vulnerable to European disease and superior weaponry after 1492.",
          },
        ],
        keyFormulas: [
          { name: "Key civilisations", statement: "Olmec → Maya → Aztec (Mesoamerica); Inca (Andes)" },
          { name: "Inca organisation", statement: "Decimal administration + mit'a labour + quipu + roads" },
        ],
        workedExample: {
          problem: "Explain one reason why the Inca empire was able to govern a vast territory without a writing system.",
          solution: "The quipu — knotted cords recording census and tribute data — combined with decimal administration and the mit'a labour obligation allowed central control and resource mobilisation without written records.",
        },
      },
      questions: [
        {
          id: "his-u1-amq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which civilisation is considered the 'mother culture' of Mesoamerica?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Maya" },
              { id: "b", text: "The Aztec" },
              { id: "c", text: "The Olmec" },
              { id: "d", text: "The Inca" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Olmec influence", statement: "Olmec art, calendar and writing foundations influenced later Mesoamerican cultures." },
            ],
            steps: [
              { reasoning: "The Olmec are described as the 'mother culture' of Mesoamerica.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The Olmec",
            commonErrors: ["Confusing Olmec with Maya — the Maya developed later and more complex."],
          },
        },
        {
          id: "his-u1-amq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two methods the Aztec used to control their empire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Aztec control", statement: "Tribute demands, strategic alliances, military threat and religious legitimation." },
            ],
            steps: [
              { reasoning: "Tribute system: conquered provinces paid goods, warriors and labour to Tenochtitlan.", marks: 1, markCode: "M" },
              { reasoning: "Military power: the Aztec army punished rebellion and expanded the tribute network.", marks: 1, markCode: "M" },
              { reasoning: "Religious/political legitimation: the ruler claimed divine mandate and used sacrificial ritual to bind elites.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tribute demands and military enforcement, reinforced by religious legitimation.",
            commonErrors: ["Listing achievements rather than methods of control."],
          },
        },
        {
          id: "his-u1-amq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the political organisation of the Maya and the Inca.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Political comparison", statement: "Maya = fragmented city-states; Inca = centralised empire with decimal bureaucracy." },
            ],
            steps: [
              { reasoning: "Maya organised as competing city-states (Tikal, Palenque) with shifting alliances — no single empire.", marks: 1, markCode: "M" },
              { reasoning: "Inca organised Tawantinsuyu into four suyus under a divine emperor with decimal administration.", marks: 1, markCode: "M" },
              { reasoning: "Inca used quipu and mit'a for control; Maya lacked comparable record-keeping empire-wide.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Maya decentralised and fragile; Inca highly centralised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maya: fragmented city-states; Inca: centralised bureaucratic empire.",
            commonErrors: ["Treating all American civilisations as identical empires."],
          },
        },
        {
          id: "his-u1-amq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the significance of agricultural innovation in the development of early American civilisations.",
          parts: [
            { label: "a", prompt: "Identify two crops that supported American civilisations.", marks: 2 },
            { label: "b", prompt: "Explain how agriculture enabled urban growth.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of agriculture compared with other factors in civilisational development.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Agricultural surplus", statement: "Reliable food surplus frees labour for specialised roles and supports cities." },
            ],
            steps: [
              { part: "a", reasoning: "Maize and potatoes (also quinoa, beans, squash).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct crops identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Surplus food supported non-farming populations: priests, soldiers, administrators.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chinampas and terracing increased yields, enabling dense urban populations like Tenochtitlan.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cities grew because food could be stored and redistributed via tribute.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Agriculture was necessary but not sufficient — writing, calendars, politics and trade also mattered.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weighs agriculture against e.g. religious or military factors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on relative importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Maize, potatoes. (b) Surplus → specialised labour → cities. (c) Necessary foundation but one of several factors.",
            commonErrors: ["Claiming agriculture alone caused civilisation — other institutions were required."],
          },
        },
        {
          id: "his-u1-amq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Maya are distinguished from other American civilisations primarily by their:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Centralised empire ruled by a single emperor" },
              { id: "b", text: "Sophisticated calendar and the only fully developed writing system in the Americas" },
              { id: "c", text: "Use of wheeled transport for armies and trade" },
              { id: "d", text: "Written constitution limiting the ruler's power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Maya achievements", statement: "Maya developed a complex calendar and the Americas' only fully developed writing system." },
            ],
            steps: [
              { reasoning: "The Maya built city-states with monumental architecture, a sophisticated calendar and a fully developed writing system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Calendar and fully developed writing system",
            commonErrors: ["Confusing Maya city-states with a unified empire like the Aztec or Inca."],
          },
        },
        {
          id: "his-u1-amq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Chinampas were:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raised fields built on Andean hillsides" },
              { id: "b", text: "Floating garden islands constructed on Lake Texcoco" },
              { id: "c", text: "Underground irrigation canals" },
              { id: "d", text: "Stone-paved roads linking Inca provinces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chinampas", statement: "Aztec floating gardens built on Lake Texcoco to expand farmland." },
            ],
            steps: [
              { reasoning: "Chinampas were artificial islands of soil and vegetation used by the Aztec around Tenochtitlan.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Floating gardens on Lake Texcoco",
            commonErrors: ["Confusing chinampas with Andean terrace farming."],
          },
        },
        {
          id: "his-u1-amq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Tawantinsuyu' was the Inca name meaning:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Empire of the Sun'" },
              { id: "b", text: "'Land of four quarters'" },
              { id: "c", text: "'City of kings'" },
              { id: "d", text: "'People of the highlands'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tawantinsuyu", statement: "Quechua name for the Inca empire meaning 'land of four quarters'." },
            ],
            steps: [
              { reasoning: "Tawantinsuyu refers to the four suyus (quarters) of the Inca empire.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Land of four quarters",
            commonErrors: ["Confusing the empire's name with a city or dynasty name."],
          },
        },
        {
          id: "his-u1-amq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Inca quipu was used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Record census and tribute data using knotted cords" },
              { id: "b", text: "Write religious texts and literature" },
              { id: "c", text: "Construct roads across the Andes" },
              { id: "d", text: "Predict eclipses and harvests" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quipu", statement: "Knotted-cord record system used by the Inca for administration." },
            ],
            steps: [
              { reasoning: "Quipu cords encoded numerical and administrative data without a writing system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Record census and tribute data",
            commonErrors: ["Assuming quipu was a form of writing — it encoded data, not language."],
          },
        },
        {
          id: "his-u1-amq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement best compares the political organisation of the Maya and the Aztec?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both were unified empires ruled by divine emperors" },
              { id: "b", text: "The Maya were fragmented city-states; the Aztec were a centralised tribute empire" },
              { id: "c", text: "Both were theocratic priest-states with no armies" },
              { id: "d", text: "The Aztec were city-states while the Maya formed one empire" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Maya vs Aztec politics", statement: "Maya: competing city-states; Aztec: centralised tribute empire." },
            ],
            steps: [
              { reasoning: "Maya city-states (Tikal, Palenque) were politically fragmented; the Aztec built a tribute empire around Tenochtitlan.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Maya fragmented; Aztec centralised tribute empire",
            commonErrors: ["Treating all American civilisations as politically identical."],
          },
        },
        {
          id: "his-u1-amq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event in the history of the Americas: (a) the founding of Tenochtitlan; (b) the fall of the Aztec capital to the Spanish; (c) the capture of the Inca emperor Atahualpa.",
          response: { type: "numeric", parts: [{ label: "Tenochtitlan founded", answer: 1325 }, { label: "Fall of Tenochtitlan", answer: 1521 }, { label: "Atahualpa captured", answer: 1532 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "American chronology", statement: "Tenochtitlan founded 1325; fell 1521; Atahualpa captured 1532." },
            ],
            steps: [
              { reasoning: "Tenochtitlan was founded around 1325 on an island in Lake Texcoco.", working: "1325", marks: 1, markCode: "M" },
              { reasoning: "The Spanish under Cortés captured Tenochtitlan in 1521.", working: "1521", marks: 1, markCode: "M" },
              { reasoning: "Pizarro captured Atahualpa in 1532, beginning the conquest of the Inca.", working: "1532", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1325; 1521; 1532",
            commonErrors: ["Confusing the Aztec and Inca conquest dates."],
          },
        },
        {
          id: "his-u1-amq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the figure for each item: (a) the number of suyus (quarters) into which Tawantinsuyu was divided; (b) the approximate number of Aztec tribute provinces; (c) the approximate length of the Inca empire along the Andes in kilometres.",
          response: { type: "numeric", parts: [{ label: "Number of suyus", answer: 4 }, { label: "Aztec tribute provinces", answer: 38 }, { label: "Inca empire length (km)", answer: 4000 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Empire dimensions", statement: "Four suyus; ~38 Aztec provinces; Inca empire ~4,000 km long." },
            ],
            steps: [
              { reasoning: "Tawantinsuyu ('land of four quarters') had four suyus.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "The Aztec tribute empire covered roughly 38 provinces.", working: "38", marks: 1, markCode: "M" },
              { reasoning: "The Inca empire stretched about 4,000 km along the Andes.", working: "4000 \\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 suyus; ~38 provinces; ~4,000 km",
            commonErrors: ["Giving the number of provinces or quarters incorrectly."],
          },
        },
        {
          id: "his-u1-amq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year (BCE or CE) for each development: (a) the beginning of the Olmec 'mother culture' period; (b) the peak of Classic Maya city-building; (c) the start of Inca imperial expansion under Pachacuti.",
          response: { type: "numeric", parts: [{ label: "Olmec period begins", answer: 1200, unit: "BCE" }, { label: "Classic Maya peak", answer: 750, unit: "CE" }, { label: "Pachacuti expansion", answer: 1438, unit: "CE" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "American chronology", statement: "Olmec c.1200 BCE; Classic Maya peak c.750 CE; Pachacuti expansion from 1438." },
            ],
            steps: [
              { reasoning: "The Olmec flourished roughly 1200–400 BCE.", working: "1200 \\text{ BCE}", marks: 1, markCode: "M" },
              { reasoning: "Classic Maya city-states peaked around 750 CE.", working: "750 \\text{ CE}", marks: 1, markCode: "M" },
              { reasoning: "Pachacuti began Inca expansion around 1438.", working: "1438 \\text{ CE}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "c.1200 BCE; c.750 CE; 1438 CE",
            commonErrors: ["Giving BCE dates without BCE notation or vice versa."],
          },
        },
        {
          id: "his-u1-amq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between the founding of Tenochtitlan and its fall; (b) the length of the Inca empire expressed in thousands of kilometres; (c) the number of suyus into which Tawantinsuyu was divided.",
          response: { type: "numeric", parts: [{ label: "Years between founding and fall", answer: 196 }, { label: "Empire length (thousands of km)", answer: 4 }, { label: "Number of suyus", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Chronology calculation", statement: "Subtract founding year from fall year; convert km to thousands; recall administrative divisions." },
            ],
            steps: [
              { reasoning: "Fall minus founding: $1521 - 1325$.", working: "1521 - 1325 = 196", marks: 1, markCode: "M" },
              { reasoning: "4,000 km expressed in thousands is 4.", working: "4000 / 1000 = 4", marks: 1, markCode: "M" },
              { reasoning: "Tawantinsuyu had four suyus ('four quarters').", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "196 years; 4 thousand km; 4 suyus",
            commonErrors: ["Arithmetic slips in the subtraction or unit conversion."],
          },
        },
        {
          id: "his-u1-amq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these civilisations from earliest to latest peak (1 = earliest): Olmec, Classic Maya, Aztec, Inca.",
          response: { type: "numeric", parts: [{ label: "Olmec", answer: 1 }, { label: "Classic Maya", answer: 2 }, { label: "Aztec", answer: 3 }, { label: "Inca", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "American chronology order", statement: "Olmec → Classic Maya → Aztec → Inca by period of greatest development." },
            ],
            steps: [
              { reasoning: "Olmec flourished earliest (c.1200–400 BCE).", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Classic Maya peaked next (c.250–900 CE).", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Aztec empire rose later (14th–16th centuries).", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Inca expansion was latest (15th–16th centuries, overlapping but generally later).", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Olmec 1, Maya 2, Aztec 3, Inca 4",
            commonErrors: ["Placing the Inca before the Aztec — both are late but Inca expansion began later."],
          },
        },
        {
          id: "his-u1-amq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Inca were able to govern a vast empire without a writing system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inca administration", statement: "Quipu records + decimal bureaucracy + mit'a labour + road network replaced writing." },
            ],
            steps: [
              { reasoning: "The quipu — knotted cords — recorded census, tribute and resource data for central control.", marks: 1, markCode: "M" },
              { reasoning: "Decimal administration organised provinces into units of 10,000/1,000 households under local officials.", marks: 1, markCode: "M" },
              { reasoning: "The mit'a labour obligation mobilised corvée labour for state projects without wages.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: administrative techniques compensated for the absence of writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quipu, decimal administration, mit'a labour and roads enabled control without writing.",
            commonErrors: ["Claiming the Inca had a secret writing system — they governed through records and organisation."],
          },
        },
        {
          id: "his-u1-amq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the achievements and limitations of early American civilisations.",
          parts: [
            { label: "a", prompt: "Identify two achievements shared by Olmec, Maya, Aztec and Inca societies.", marks: 2 },
            { label: "b", prompt: "Explain how environment and geography shaped their development.", marks: 3 },
            { label: "c", prompt: "Evaluate why these civilisations were vulnerable to European conquest after 1492.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "American civilisations", statement: "Shared achievements in agriculture and monument-building; environmental adaptation; vulnerability to disease and weaponry." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: domestication of maize (and potatoes in the Andes), monumental architecture, complex calendars.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two shared achievements identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Environment: chinampas and terraces maximised agricultural output in varied terrain.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lake/river and mountain environments shaped settlement, defence and transport (roads in the Andes).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All lacked draft animals and wheeled transport — limiting military and economic mobility.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Vulnerability: no immunity to Eurasian diseases (smallpox, measles) caused catastrophic population loss.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Steel weapons, horses and superior tactics gave small Spanish forces decisive advantages.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs internal strengths (size, organisation) against these disadvantages in an evaluative judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Maize agriculture, monumental architecture/calendars. (b) Environment shaped farming and transport. (c) Disease and weaponry overcame numerical and organisational strength.",
            commonErrors: ["Attributing conquest only to Spanish bravery — disease and technology were decisive."],
          },
        },
      ],
    },
    {
      id: "his-u1-european-societies",
      title: "Medieval and Renaissance Europe",
      skill: "Describe feudal and manorial structures in medieval Europe and explain the cultural changes of the Renaissance and Reformation.",
      lesson: {
        sections: [
          {
            heading: "Feudalism and manorialism",
            body: "After the fall of Rome, European society reorganised around **feudalism**: kings granted land (fiefs) to nobles in exchange for military service; nobles granted land to knights; peasants (**serfs**) worked the land (**manors**) in return for protection. The Church was the largest landowner and preserved learning. This system was decentralised, hierarchical and largely agrarian.",
          },
          {
            heading: "Renaissance",
            body: "From c. 1400 in Italian city-states, the **Renaissance** revived classical Greek and Roman learning. Humanism placed human achievement at the centre; artists like Leonardo and Michelangelo produced new techniques (perspective); printing (Gutenberg, c. 1440) spread ideas rapidly. Patronage from wealthy merchants and the Church funded the arts.",
          },
          {
            heading: "Reformation and exploration",
            body: "In 1517 Luther's Ninety-Five Theses sparked the **Protestant Reformation**, fragmenting Western Christianity and triggering wars of religion. Meanwhile, **Age of Exploration** (15th–17th centuries): Portuguese and Spanish voyages (Dias, da Gama, Columbus, Magellan) opened transoceanic trade, spread Christianity, and initiated European colonisation of the Americas.",
          },
        ],
        keyFormulas: [
          { name: "Feudal hierarchy", statement: "King → nobles → knights → serfs (land for service/labour)" },
          { name: "Renaissance core idea", statement: "Humanism — human potential and classical learning" },
        ],
        workedExample: {
          problem: "Explain how the printing press contributed to both the Renaissance and the Reformation.",
          solution: "Gutenberg's press (c. 1440) made books cheap and widely available, accelerating the spread of humanist texts and, crucially, allowing Luther's writings to reach millions — helping the Reformation succeed where earlier challenges had failed.",
        },
      },
      questions: [
        {
          id: "his-u1-eq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the feudal system, serfs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Owned the land they farmed" },
              { id: "b", text: "Worked land in exchange for protection" },
              { id: "c", text: "Were paid wages in silver" },
              { id: "d", text: "Lent money to nobles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Serfdom", statement: "Serfs worked a lord's land in return for protection and a small plot." },
            ],
            steps: [
              { reasoning: "Serfs were bound to the manor and owed labour in exchange for protection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Worked land for protection",
            commonErrors: ["Confusing serfs with free peasants — serfs were not free to leave."],
          },
        },
        {
          id: "his-u1-eq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two features of Renaissance art or thought.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Renaissance features", statement: "Humanism, classical revival, realism/perspective, individual achievement." },
            ],
            steps: [
              { reasoning: "Humanism: focus on human potential and worldly achievement rather than purely religious themes.", marks: 1, markCode: "M" },
              { reasoning: "Classical revival: imitation of Greek/Roman models in art, architecture and literature.", marks: 1, markCode: "M" },
              { reasoning: "Technical innovation: linear perspective and anatomical realism (e.g. Leonardo's work).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Humanism, classical revival, and techniques like perspective/anatomical realism.",
            commonErrors: ["Describing the Middle Ages instead of the Renaissance."],
          },
        },
        {
          id: "his-u1-eq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Age of Exploration changed the relationship between Europe and the rest of the world.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exploration consequences", statement: "New trade routes, colonisation, disease exchange, resource extraction." },
            ],
            steps: [
              { reasoning: "European powers established trading posts and colonies, shifting economic power westward.", marks: 1, markCode: "M" },
              { reasoning: "The Columbian Exchange transferred crops, animals, diseases — devastating indigenous populations.", marks: 1, markCode: "M" },
              { reasoning: "Silver and bullion flows enriched Europe and funded further expansion.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: began an era of European dominance and global inequality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New trade networks, colonisation, the Columbian Exchange and European economic dominance.",
            commonErrors: ["Only listing voyages without analysing consequences."],
          },
        },
        {
          id: "his-u1-eq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the Protestant Reformation.",
          parts: [
            { label: "a", prompt: "Identify two long-term causes of religious discontent before 1517.", marks: 3 },
            { label: "b", prompt: "Explain Luther's role in triggering the Reformation.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of the printing press in spreading Reformation ideas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reformation causes", statement: "Church corruption, humanist criticism, political tensions, printing." },
            ],
            steps: [
              { part: "a", reasoning: "Corruption: sale of indulgences, pluralism, wealth of clergy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Humanism/biblical scholarship questioned Church authority; also political rulers resented papal power.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both factors identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Luther's 95 Theses (1517) attacked indulgences publicly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "His teachings (justification by faith, priesthood of all believers) challenged Church doctrine.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Refused to recant at Worms (1521), forcing a break with Rome.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Printing spread Luther's pamphlets widely and quickly across Germany and Europe.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: crucial accelerant but not sole cause — political support also mattered.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Corruption + humanist/political tensions. (b) Theses, doctrine, refusal to recant. (c) Crucial accelerant, not sole cause.",
            commonErrors: ["Treating the Reformation as caused only by Luther's personality."],
          },
        },
        {
          id: "his-u1-eq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Feudalism is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A system of landholding in exchange for military service and labour" },
              { id: "b", text: "A free-market economic system" },
              { id: "c", text: "A theory of divine right monarchy" },
              { id: "d", text: "A merchant guild organisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feudalism", statement: "Hierarchy of landholding: fiefs granted in exchange for service; serfs worked the land." },
            ],
            steps: [
              { reasoning: "Feudalism organised society through reciprocal obligations of land, service and protection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Landholding in exchange for service",
            commonErrors: ["Confusing feudalism (political) with manorialism (economic)."],
          },
        },
        {
          id: "his-u1-eq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Manorialism differed from feudalism in that it was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The political system of lord-vassal relations" },
              { id: "b", text: "The economic system of serf labour on a lord's manor" },
              { id: "c", text: "A monastic religious order" },
              { id: "d", text: "A system of naval alliances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Feudalism vs manorialism", statement: "Feudalism = political relations; manorialism = economic organisation of serf labour." },
            ],
            steps: [
              { reasoning: "Manorialism describes the economic system where serfs worked a lord's estate (manor) in return for protection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Economic system of serf labour",
            commonErrors: ["Treating the two terms as identical."],
          },
        },
        {
          id: "his-u1-eq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Gutenberg's printing press (c. 1440) mattered historically because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ended the Crusades to the Holy Land" },
              { id: "b", text: "Made books cheap and spread ideas rapidly" },
              { id: "c", text: "Invented gunpowder and firearms" },
              { id: "d", text: "United the Italian city-states" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Printing press impact", statement: "Cheap printed books accelerated Renaissance humanism and Reformation pamphleteering." },
            ],
            steps: [
              { reasoning: "Movable-type printing drastically reduced book costs and multiplied copies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cheap books spread ideas rapidly",
            commonErrors: ["Confusing the press with military or navigational inventions."],
          },
        },
        {
          id: "his-u1-eq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Luther's Ninety-Five Theses (1517) primarily attacked:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Pope's political authority over Germany" },
              { id: "b", text: "The sale of indulgences" },
              { id: "c", text: "The Holy Roman Emperor's taxes" },
              { id: "d", text: "Islamic influence in Europe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ninety-Five Theses", statement: "Luther's public critique of indulgence-selling sparked the Reformation." },
            ],
            steps: [
              { reasoning: "The Theses attacked the Church's sale of indulgences and sparked debate across Germany.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The sale of indulgences",
            commonErrors: ["Thinking the Theses attacked monarchy or foreign religions."],
          },
        },
        {
          id: "his-u1-eq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which factor best explains why the Age of Exploration began in Iberia (Portugal and Spain)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single voyage by accident that was never repeated" },
              { id: "b", text: "Combined demand for Asian goods, blocked overland routes, crusading and missionary zeal, and royal sponsorship" },
              { id: "c", text: "Pressure from the Church to convert Africa only" },
              { id: "d", text: "A surplus of unemployed sailors with no other employment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causes of exploration", statement: "Economic demand + blocked routes + religion + state support combined to launch exploration." },
            ],
            steps: [
              { reasoning: "Exploration resulted from multiple motives: trade, religion, technology and royal sponsorship working together.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Combined economic, religious and royal motives",
            commonErrors: ["Attributing exploration to a single cause."],
          },
        },
        {
          id: "his-u1-eq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each development: (a) Gutenberg's printing press appeared; (b) Luther posted his Ninety-Five Theses; (c) Columbus first reached the Americas.",
          response: { type: "numeric", parts: [{ label: "Printing press", answer: 1440 }, { label: "Ninety-Five Theses", answer: 1517 }, { label: "Columbus voyage", answer: 1492 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Early modern chronology", statement: "Press c.1440; Columbus 1492; Luther 1517." },
            ],
            steps: [
              { reasoning: "Gutenberg's press appeared around 1440.", working: "1440", marks: 1, markCode: "M" },
              { reasoning: "Luther's theses were posted in 1517.", working: "1517", marks: 1, markCode: "M" },
              { reasoning: "Columbus reached the Americas in 1492.", working: "1492", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1440; 1517; 1492",
            commonErrors: [ "Swapping the order of the dates."],
          },
        },
        {
          id: "his-u1-eq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of years between Gutenberg's press (1440) and Luther's theses (1517); (b) the number of voyages Columbus made to the Americas; (c) the year da Gama reached India by sea.",
          response: { type: "numeric", parts: [{ label: "Years between press and theses", answer: 77 }, { label: "Columbus's voyages", answer: 4 }, { label: "Da Gama reaches India", answer: 1498 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Chronology calculation", statement: "Subtract years for intervals; recall voyage counts and dates." },
            ],
            steps: [
              { reasoning: "Interval: $1517 - 1440$.", working: "1517 - 1440 = 77", marks: 1, markCode: "M" },
              { reasoning: "Columbus made four voyages (1492–1504).", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Vasco da Gama reached India in 1498.", working: "1498", marks: 1, markCode: "A" },
            ],
            finalAnswer: "77 years; 4 voyages; 1498",
            commonErrors: ["Miscounting Columbus's voyages or misdating da Gama."],
          },
        },
        {
          id: "his-u1-eq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the fall of the Western Roman Empire, Gutenberg's printing press, Luther's Ninety-Five Theses, completion of the first circumnavigation.",
          response: { type: "numeric", parts: [{ label: "Fall of Western Rome", answer: 1 }, { label: "Gutenberg's press", answer: 2 }, { label: "Luther's theses", answer: 3 }, { label: "First circumnavigation", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Early modern chronology order", statement: "476 → 1440 → 1517 → 1522." },
            ],
            steps: [
              { reasoning: "Western Rome fell in 476 CE — earliest.", working: "476", marks: 1, markCode: "M" },
              { reasoning: "Gutenberg's press appeared c.1440 — second.", working: "1440", marks: 1, markCode: "M" },
              { reasoning: "Luther's theses (1517) preceded Magellan's expedition completing circumnavigation (1522).", working: "1517 < 1522", marks: 1, markCode: "M" },
              { reasoning: "All four events correctly ordered.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fall of Rome 1, Gutenberg 2, Luther 3, circumnavigation 4",
            commonErrors: ["Placing the circumnavigation before Luther's theses."],
          },
        },
        {
          id: "his-u1-eq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each voyage: (a) Dias rounded the Cape of Good Hope; (b) da Gama reached India by sea; (c) the Magellan expedition completed the first circumnavigation.",
          response: { type: "numeric", parts: [{ label: "Dias rounds the Cape", answer: 1488 }, { label: "Da Gama reaches India", answer: 1498 }, { label: "Circumnavigation completed", answer: 1522 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Exploration chronology", statement: "1488 Cape of Good Hope; 1498 India; 1522 first circumnavigation." },
            ],
            steps: [
              { reasoning: "Bartolomeu Dias rounded the Cape of Good Hope in 1488.", working: "1488", marks: 1, markCode: "M" },
              { reasoning: "Da Gama reached Calicut, India, in 1498.", working: "1498", marks: 1, markCode: "M" },
              { reasoning: "Magellan's expedition (completed by Elcano) returned in 1522.", working: "1522", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1488; 1498; 1522",
            commonErrors: ["Confusing Dias's Cape rounding with da Gama's India voyage."],
          },
        },
        {
          id: "his-u1-eq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the fall of Rome (476) and the start of the Renaissance (c. 1400); (b) between Gutenberg's press (1440) and Luther's theses (1517); (c) between Luther's theses and the completion of the first circumnavigation (1522).",
          response: { type: "numeric", parts: [{ label: "Rome to Renaissance", answer: 924 }, { label: "Press to theses", answer: 77 }, { label: "Theses to circumnavigation", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1400 - 476$.", working: "1400 - 476 = 924", marks: 1, markCode: "M" },
              { reasoning: "$1517 - 1440$.", working: "1517 - 1440 = 77", marks: 1, markCode: "M" },
              { reasoning: "$1522 - 1517$.", working: "1522 - 1517 = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "924; 77; 5 years",
            commonErrors: ["Subtracting in the wrong order or adding instead of subtracting."],
          },
        },
        {
          id: "his-u1-eq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the printing press contributed to both the Renaissance and the Reformation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Print and ideas", statement: "Cheap mass-produced texts spread humanist learning and Reformation pamphlets." },
            ],
            steps: [
              { reasoning: "Printing made books affordable, spreading classical and humanist texts across Europe.", marks: 1, markCode: "M" },
              { reasoning: "Luther's pamphlets and Bible translations reached millions quickly — impossible by manuscript.", marks: 1, markCode: "M" },
              { reasoning: "Standardised texts also spread errors/corrections uniformly, accelerating debate.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the press was a decisive accelerant of both movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cheap books spread humanist learning and Luther's writings, accelerating both movements.",
            commonErrors: ["Treating the press as irrelevant to religious change."],
          },
        },
        {
          id: "his-u1-eq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of the Age of Exploration.",
          parts: [
            { label: "a", prompt: "Identify two motives driving European exploration after 1400.", marks: 2 },
            { label: "b", prompt: "Describe the Columbian Exchange and its effects.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of exploration for Europe and for the Americas.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Age of Exploration", statement: "Economic, religious and political motives → transoceanic exchange with devastating and enriching consequences." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: demand for Asian spices/silk, blocked land routes, missionary zeal, royal prestige and bullion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two motives identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Columbian Exchange: transfer of crops, animals, diseases and peoples between hemispheres.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Old World gained maize, potatoes, tomatoes; New World gained wheat, horses, sugar.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diseases (smallpox, measles) devastated indigenous populations.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Europe: bullion flows, new trade routes, colonial empires and rising economic power.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Americas: demographic catastrophe, conquest, slavery and long-term colonial dependency.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs European gains against the devastation inflicted on indigenous peoples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Trade, religion, prestige. (b) Crop/animal/disease exchange; Americas devastated. (c) Europe enriched; Americas conquered and depopulated.",
            commonErrors: ["One-sided accounts celebrating exploration without the human cost."],
          },
        },
      ],
    },
  ],
};
