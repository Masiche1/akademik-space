import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "his-u1-lesson-1-2",
  code: "1-2",
  title: "Revolutions and the Rise of Nation-States",
  goal: "I CAN explain the causes and consequences of the Atlantic revolutions and analyse the forces of nationalism and industrialisation in the 19th century.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Enlightenment", definition: "18th-century intellectual movement emphasising reason, liberty, equality and natural rights — influenced revolutionary thought." },
    { term: "Social contract", definition: "Idea that political authority derives from the consent of the governed; associated with Locke and Rousseau." },
    { term: "Nationalism", definition: "Belief that a people sharing language, culture or history should form their own state." },
    { term: "Unification", definition: "Process of separate states merging into one nation, e.g. Germany (1871) and Italy (1861/1870)." },
    { term: "Industrial Revolution", definition: "Shift from agrarian to industrial economies beginning in Britain c. 1760, driven by steam, factories and new transport." },
    { term: "Liberalism", definition: "Political ideology favouring constitutional government, free markets and individual rights." },
  ],
  concepts: [
    {
      id: "his-u1-atlantic-revolutions",
      title: "The Atlantic revolutions",
      skill: "Explain the causes of the American, French and Haitian revolutions and compare their outcomes and legacies.",
      lesson: {
        sections: [
          {
            heading: "American Revolution (1775–1783)",
            body: "Colonists rejected British taxation without representation ('No taxation without representation'). Influenced by Enlightenment ideas, they declared independence (1776) and won with French support. The Constitution (1787) created a federal republic with separation of powers — but preserved slavery, a contradiction that would define American history.",
          },
          {
            heading: "French Revolution (1789–1799)",
            body: "France's fiscal crisis, social inequality (Three Estates) and Enlightenment ideas produced revolution: the Declaration of the Rights of Man (1789), execution of Louis XVI (1793), and the Reign of Terror under Robespierre. Napoleon's coup (1799) ended the revolution but spread legal reforms (Code Napoléon) and conquered much of Europe.",
          },
          {
            heading: "Haitian Revolution (1791–1804)",
            body: "The only successful slave revolution: enslaved people overthrew French colonial rule, abolished slavery permanently and established the first Black republic. Led by Toussaint Louverture and Jean-Jacques Dessalines, it shocked Atlantic slave societies and inspired abolitionist movements — while provoking French demands for indemnity that crippled Haiti economically.",
          },
        ],
        keyFormulas: [
          { name: "Common causes", statement: "Taxation, inequality, Enlightenment ideas, inspired by earlier revolutions" },
          { name: "Outcomes", statement: "USA: republic; France: republic → terror → Napoleon; Haiti: independent Black state" },
        ],
        workedExample: {
          problem: "Why is the Haitian Revolution considered the most radical of the Atlantic revolutions?",
          solution: "It was the only one to permanently abolish slavery and create a state governed by formerly enslaved people — directly overturning the racial and economic foundations of Atlantic society, not merely reforming political structures.",
        },
      },
      questions: [
        {
          id: "his-u1-arq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The slogan 'No taxation without representation' was central to which revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The American Revolution" },
              { id: "b", text: "The Russian Revolution" },
              { id: "c", text: "The French Revolution" },
              { id: "d", text: "The Haitian Revolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "American grievances", statement: "Colonists objected to British taxes imposed without colonial representation in Parliament." },
            ],
            steps: [
              { reasoning: "The slogan expressed colonial opposition to British taxation policy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The American Revolution",
            commonErrors: ["Confusing it with French grievances about the Estates system."],
          },
        },
        {
          id: "his-u1-arq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two long-term causes of the French Revolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "French Revolution causes", statement: "Social inequality, fiscal crisis, Enlightenment ideas." },
            ],
            steps: [
              { reasoning: "Social inequality: the Three Estates system gave the First and Second Estates privileges while the Third paid most taxes.", marks: 1, markCode: "M" },
              { reasoning: "Fiscal crisis: war debts (especially from supporting the American Revolution) forced tax increases.", marks: 1, markCode: "M" },
              { reasoning: "Enlightenment ideas spread demands for liberty, equality and popular sovereignty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Estate inequality, fiscal crisis, and Enlightenment ideas.",
            commonErrors: ["Citing only the storming of the Bastille — a trigger, not a cause."],
          },
        },
        {
          id: "his-u1-arq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the outcomes of the American and French revolutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Outcome comparison", statement: "Both created republics but differed in stability, violence and aftermath." },
            ],
            steps: [
              { reasoning: "Both produced written constitutions and republican governments inspired by Enlightenment ideals.", marks: 1, markCode: "M" },
              { reasoning: "American revolution was comparatively moderate and stable; French was far more violent (Terror, executions).", marks: 1, markCode: "M" },
              { reasoning: "French revolution radicalised European politics and led to Napoleon; American preserved slavery.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: similar ideals, very different trajectories.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both republics; America stable but preserved slavery, France violent and led to Napoleon.",
            commonErrors: ["Ignoring the role of violence in differentiating outcomes."],
          },
        },
        {
          id: "his-u1-arq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the significance of the Haitian Revolution in Atlantic history.",
          parts: [
            { label: "a", prompt: "Describe the role of enslaved people in the revolution.", marks: 2 },
            { label: "b", prompt: "Explain why the revolution shocked slave-owning societies.", marks: 3 },
            { label: "c", prompt: "Evaluate its long-term impact on abolition and on Haiti itself.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Haitian significance", statement: "Only successful slave revolution; permanent abolition; inspired and threatened Atlantic powers." },
            ],
            steps: [
              { part: "a", reasoning: "Enslaved workers formed the core of the revolution, led by figures like Toussaint Louverture.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They fought French, Spanish and British forces to win independence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It proved enslaved people could defeat colonial powers — contradicting racial hierarchies.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Slaveholders feared similar uprisings; France and other powers sought to isolate or punish Haiti.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It strengthened abolitionist arguments internationally.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Impact on abolition: inspired anti-slavery movements but also provoked harsher repression.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Impact on Haiti: independence achieved but France demanded indemnity, crippling the economy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Long-term: Haiti became isolated and impoverished — a mixed legacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Enslaved fighters led revolution. (b) Shattered racial assumptions, provoked repression. (c) Inspired abolition but Haiti paid economically.",
            commonErrors: ["Ignoring the indemnity and isolation that followed independence."],
          },
        },
        {
          id: "his-u1-arq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The American Declaration of Independence was adopted in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1789" },
              { id: "b", text: "1783" },
              { id: "c", text: "1776" },
              { id: "d", text: "1787" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Declaration of Independence", statement: "Adopted 4 July 1776, declaring the colonies' separation from Britain." },
            ],
            steps: [
              { reasoning: "The Declaration of Independence dates to 1776.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1776",
            commonErrors: ["Confusing the Declaration (1776) with the Constitution (1787) or Treaty of Paris (1783)."],
          },
        },
        {
          id: "his-u1-arq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Reign of Terror' in revolutionary France is associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "King Louis XVI" },
              { id: "b", text: "Napoleon Bonaparte" },
              { id: "c", text: "Marquis de Lafayette" },
              { id: "d", text: "Maximilien Robespierre" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Reign of Terror", statement: "1793–94 period of mass executions under Robespierre's Committee of Public Safety." },
            ],
            steps: [
              { reasoning: "Robespierre led the Jacobin government that conducted the Terror.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Robespierre",
            commonErrors: ["Confusing Robespierre with Napoleon, who came later."],
          },
        },
        {
          id: "his-u1-arq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Haitian Revolution is considered unique among the Atlantic revolutions because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Was the first revolution in the Americas" },
              { id: "b", text: "Was led by a European monarch" },
              { id: "c", text: "Permanently abolished slavery and created the first Black republic" },
              { id: "d", text: "Produced a constitutional monarchy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Haitian uniqueness", statement: "Only successful slave revolution; permanent abolition; first Black republic." },
            ],
            steps: [
              { reasoning: "Haiti was the only revolution to permanently end slavery and be led by formerly enslaved people.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Permanent abolition and first Black republic",
            commonErrors: ["Thinking it merely reformed colonial rule like the others."],
          },
        },
        {
          id: "his-u1-arq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The French revolutionary slogan 'Liberté, égalité, fraternité' expressed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colonial trade doctrine" },
              { id: "b", text: "Medieval religious ideals" },
              { id: "c", text: "Monarchist principles of order" },
              { id: "d", text: "Enlightenment ideals of liberty and equality" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revolutionary ideals", statement: "Liberty, equality and fraternity derived from Enlightenment thought." },
            ],
            steps: [
              { reasoning: "The slogan embodied Enlightenment values central to revolutionary ideology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Enlightenment ideals",
            commonErrors: ["Attributing the slogan to medieval or monarchist thought."],
          },
        },
        {
          id: "his-u1-arq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which factor best explains France's decision to intervene in the American Revolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "France hoped to reconquer its former Canadian territories" },
              { id: "b", text: "France was treaty-bound to defend all colonies" },
              { id: "c", text: "France sought revenge on Britain and to weaken its rival, encouraged by Enlightenment sympathy for the colonists" },
              { id: "d", text: "The US paid France large sums for protection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "French intervention", statement: "France aided the Americans to weaken Britain and out of ideological sympathy." },
            ],
            steps: [
              { reasoning: "French support was driven by rivalry with Britain and sympathy for revolutionary ideals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Revenge on Britain + ideological sympathy",
            commonErrors: ["Thinking France intervened purely from idealism without strategic motives."],
          },
        },
        {
          id: "his-u1-arq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the American Declaration of Independence; (b) the start of the French Revolution; (c) Haitian independence.",
          response: { type: "numeric", parts: [{ label: "Declaration of Independence", answer: 1776 }, { label: "Start of French Revolution", answer: 1789 }, { label: "Haitian independence", answer: 1804 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Atlantic revolution chronology", statement: "1776 → 1789 → 1804." },
            ],
            steps: [
              { reasoning: "The Declaration was adopted in 1776.", working: "1776", marks: 1, markCode: "M" },
              { reasoning: "The French Revolution began in 1789.", working: "1789", marks: 1, markCode: "M" },
              { reasoning: "Haiti declared independence in 1804.", working: "1804", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1776; 1789; 1804",
            commonErrors: ["Confusing the start and end dates of the Haitian Revolution."],
          },
        },
        {
          id: "his-u1-arq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the US Constitution was drafted; (b) Louis XVI was executed; (c) Napoleon seized power in the coup of Brumaire.",
          response: { type: "numeric", parts: [{ label: "US Constitution drafted", answer: 1787 }, { label: "Execution of Louis XVI", answer: 1793 }, { label: "Napoleon's coup", answer: 1799 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Revolution chronology", statement: "1787 Constitution; 1793 regicide; 1799 coup." },
            ],
            steps: [
              { reasoning: "The US Constitution was drafted in 1787.", working: "1787", marks: 1, markCode: "M" },
              { reasoning: "Louis XVI was executed in January 1793.", working: "1793", marks: 1, markCode: "M" },
              { reasoning: "Napoleon's coup of 18 Brumaire occurred in 1799.", working: "1799", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1787; 1793; 1799",
            commonErrors: ["Swapping the execution and coup dates."],
          },
        },
        {
          id: "his-u1-arq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the American Declaration of Independence, the start of the French Revolution, the start of the Haitian Revolution, Haitian independence.",
          response: { type: "numeric", parts: [{ label: "American Declaration", answer: 1 }, { label: "Start of French Revolution", answer: 2 }, { label: "Start of Haitian Revolution", answer: 3 }, { label: "Haitian independence", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Atlantic chronology order", statement: "1776 → 1789 → 1791 → 1804." },
            ],
            steps: [
              { reasoning: "Declaration of Independence (1776) is earliest.", working: "1776", marks: 1, markCode: "M" },
              { reasoning: "French Revolution began 1789 — second.", working: "1789", marks: 1, markCode: "M" },
              { reasoning: "Haitian Revolution began 1791 — third.", working: "1791", marks: 1, markCode: "M" },
              { reasoning: "Haitian independence (1804) is latest.", working: "1804", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Declaration 1, French Revolution 2, Haitian Revolution start 3, Haitian independence 4",
            commonErrors: ["Placing the Haitian Revolution before the French Revolution."],
          },
        },
        {
          id: "his-u1-arq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the American Revolution began; (b) the American Revolution ended with the Treaty of Paris; (c) the Haitian Revolution began.",
          response: { type: "numeric", parts: [{ label: "American Revolution begins", answer: 1775 }, { label: "Treaty of Paris", answer: 1783 }, { label: "Haitian Revolution begins", answer: 1791 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Revolution dates", statement: "America 1775–1783; Haiti 1791–1804." },
            ],
            steps: [
              { reasoning: "Fighting began at Lexington and Concord in 1775.", working: "1775", marks: 1, markCode: "M" },
              { reasoning: "The Treaty of Paris ended the war in 1783.", working: "1783", marks: 1, markCode: "M" },
              { reasoning: "The Haitian Revolution erupted in 1791.", working: "1791", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1775; 1783; 1791",
            commonErrors: ["Confusing the start of the American Revolution with the Declaration (1776)."],
          },
        },
        {
          id: "his-u1-arq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the American Declaration (1776) and the French Revolution (1789); (b) between the French Revolution's start and Haitian independence (1804); (c) the duration of the Haitian Revolution (1791–1804).",
          response: { type: "numeric", parts: [{ label: "Declaration to French Revolution", answer: 13 }, { label: "French Revolution to Haiti", answer: 15 }, { label: "Duration of Haitian Revolution", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year; duration = end minus start." },
            ],
            steps: [
              { reasoning: "$1789 - 1776$.", working: "1789 - 1776 = 13", marks: 1, markCode: "M" },
              { reasoning: "$1804 - 1789$.", working: "1804 - 1789 = 15", marks: 1, markCode: "M" },
              { reasoning: "$1804 - 1791$.", working: "1804 - 1791 = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13; 15; 13 years",
            commonErrors: ["Arithmetic errors or swapping start/end dates."],
          },
        },
        {
          id: "his-u1-arq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the French Revolution became more radical after 1792.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Radicalisation", statement: "War, foreign invasion fears and internal counter-revolution drove terror and republicanism." },
            ],
            steps: [
              { reasoning: "France went to war with Austria and Prussia (1792); invasion fears radicalised politics.", marks: 1, markCode: "M" },
              { reasoning: "The monarchy's perceived treason and counter-revolutionary threats undermined moderates.", marks: 1, markCode: "M" },
              { reasoning: "Radicals (Jacobins) seized power and created the Republic, then the Terror to defend it.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: external war and internal fear escalated revolutionary violence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "War, invasion fears and counter-revolution drove radicalisation and the Terror.",
            commonErrors: ["Attributing radicalisation only to Robespierre's personality."],
          },
        },
        {
          id: "his-u1-arq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and legacies of the Atlantic revolutions.",
          parts: [
            { label: "a", prompt: "Identify two causes shared by the American, French and Haitian revolutions.", marks: 2 },
            { label: "b", prompt: "Explain how the revolutions influenced one another.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the revolutions achieved their stated ideals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atlantic revolutions", statement: "Shared grievances and Enlightenment ideas; revolutionary contagion; ideals partially realised." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: taxation without representation, social inequality, Enlightenment ideas of rights.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two shared causes identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "American success inspired French radicals; French revolutionary wars spread ideas and conflict to Haiti.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Haitian revolution was inspired by French revolutionary rhetoric of liberty.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each revolution's example emboldened or threatened the others.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "USA: republic and rights but preserved slavery — partial achievement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "France: republic declared but ended in Napoleon's dictatorship; Haiti achieved independence but paid indemnity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs proclaimed ideals against actual outcomes for each revolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Taxation, inequality, Enlightenment ideas. (b) Revolutionary contagion inspired and radicalised each other. (c) Ideals only partially realised — slavery persisted in USA, dictatorship in France, indemnity in Haiti.",
            commonErrors: ["Assuming all three revolutions achieved their ideals fully."],
          },
        },
      ],
    },
    {
      id: "his-u1-nationalism-industry",
      title: "Nationalism, Unification and Industrialisation",
      skill: "Explain how nationalism unified Germany and Italy and analyse the causes and consequences of industrialisation.",
      lesson: {
        sections: [
          {
            heading: "German unification",
            body: "Prussia, under Bismarck, united Germany through 'blood and iron' — three wars (against Denmark 1864, Austria 1866, France 1870–71) and realpolitik. The German Empire was proclaimed at Versailles in 1871, dominated by Prussian militarism and rapid industrialisation.",
          },
          {
            heading: "Italian unification",
            body: "Italy unified through a mix of diplomacy (Cavour), popular nationalism (Mazzini, Garibaldi's Redshirts conquering the South) and Piedmont-Sardinia's leadership. Unified in 1861/1870, Italy remained economically and politically divided (North-South gap persists).",
          },
          {
            heading: "Industrial Revolution",
            body: "Beginning in Britain (coal, iron, cotton), industrialisation spread to Europe and America. Key innovations: steam engine (Watt), spinning jenny, telegraph, railways. Consequences: urbanisation, factory labour, new social classes, imperial competition for markets and raw materials — setting the stage for WWI.",
          },
        ],
        keyFormulas: [
          { name: "German path", statement: "Prussian wars + Bismarck's realpolitik → 1871" },
          { name: "Italian path", statement: "Cavour diplomacy + Garibaldi conquest → 1861/70" },
          { name: "Industrial drivers", statement: "Coal/iron, steam, textiles → factories → urbanisation" },
        ],
        workedExample: {
          problem: "Explain why industrialisation contributed to European imperial rivalry.",
          solution: "Factories required raw materials and markets; industrial powers competed for colonies in Africa and Asia to secure both, intensifying diplomatic tensions that helped cause WWI.",
        },
      },
      questions: [
        {
          id: "his-u1-niq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Bismarck's policy of 'realpolitik' meant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pursuing power through practical means" },
              { id: "b", text: "Following idealistic principles" },
              { id: "c", text: "Avoiding all wars" },
              { id: "d", text: "Delegating decisions to parliament" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Realpolitik", statement: "Politics based on practical power considerations rather than ideology." },
            ],
            steps: [
              { reasoning: "Realpolitik = pragmatic pursuit of power.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Power through practical means",
            commonErrors: ["Confusing with idealism or democracy."],
          },
        },
        {
          id: "his-u1-niq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways industrialisation changed European society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Industrial consequences", statement: "Urbanisation, new social classes, factory conditions." },
            ],
            steps: [
              { reasoning: "Urbanisation: people moved from countryside to industrial cities, creating overcrowding and new infrastructure needs.", marks: 1, markCode: "M" },
              { reasoning: "New social structure: rise of industrial bourgeoisie and urban working class alongside old aristocracy.", marks: 1, markCode: "M" },
              { reasoning: "Working conditions: long hours, child labour, pollution — prompting labour movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Urbanisation, new class structure, harsh factory conditions.",
            commonErrors: ["Only citing technology without social consequences."],
          },
        },
        {
          id: "his-u1-niq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the processes of German and Italian unification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unification comparison", statement: "Germany: Prussian military leadership; Italy: diplomacy + popular movement." },
            ],
            steps: [
              { reasoning: "Germany unified top-down under Prussia through wars and Bismarck's diplomacy.", marks: 1, markCode: "M" },
              { reasoning: "Italy unified through Cavour's diplomacy plus Garibaldi's popular conquest of the South.", marks: 1, markCode: "M" },
              { reasoning: "Germany emerged strong and militaristic; Italy remained regionally divided and weaker.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: different paths produced different national characters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Germany: Prussian wars/Bismarck; Italy: Cavour + Garibaldi; different outcomes.",
            commonErrors: ["Treating unification as a single identical process."],
          },
        },
        {
          id: "his-u1-niq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the Industrial Revolution beginning in Britain.",
          parts: [
            { label: "a", prompt: "Identify two geographical or resource advantages Britain had.", marks: 2 },
            { label: "b", prompt: "Explain the role of innovation in industrialisation.", marks: 3 },
            { label: "c", prompt: "Evaluate why industrialisation spread from Britain to other countries.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Industrial Revolution causes", statement: "Resources, capital, innovation, institutions." },
            ],
            steps: [
              { part: "a", reasoning: "Coal and iron deposits; navigable rivers/coastline for transport.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both factors identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Key inventions: steam engine (Watt), spinning jenny, power loom.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Innovation increased productivity and enabled factory production.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Patents and investment rewarded inventors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Spread via technology transfer, trade, and competition for markets.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Countries adopted industrial methods to compete economically and militarily.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate: spread was uneven — some regions industrialised faster.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Coal/iron, transport. (b) Steam + machinery boosted productivity. (c) Technology transfer and competition.",
            commonErrors: ["Attributing industrialisation to a single cause."],
          },
        },
        {
          id: "his-u1-niq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The German Empire was proclaimed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1848" },
              { id: "b", text: "1861" },
              { id: "c", text: "1884" },
              { id: "d", text: "1871" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "German unification", statement: "German Empire proclaimed at Versailles in 1871 after Prussian victories." },
            ],
            steps: [
              { reasoning: "The empire was proclaimed in January 1871 following the Franco-Prussian War.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1871",
            commonErrors: ["Confusing with Italian unification (1861) or the 1848 revolutions."],
          },
        },
        {
          id: "his-u1-niq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Garibaldi's 'Redshirts' are associated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "British factory workers' movement" },
              { id: "b", text: "Popular conquest of southern Italy during unification" },
              { id: "c", text: "The French revolutionary armies" },
              { id: "d", text: "Prussian military unification of Germany" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Garibaldi", statement: "Garibaldi's volunteer 'Redshirts' conquered Sicily and the South for Italian unity." },
            ],
            steps: [
              { reasoning: "Garibaldi led a popular military expedition that conquered southern Italy in 1860.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Popular conquest of southern Italy",
            commonErrors: ["Attributing the Redshirts to German or French movements."],
          },
        },
        {
          id: "his-u1-niq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Industrial Revolution began in Britain primarily because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its large population of enslaved workers" },
              { id: "b", text: "The absence of any rival powers" },
              { id: "c", text: "Government bans on agriculture" },
              { id: "d", text: "Its abundant coal and iron deposits and navigable transport routes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "British advantages", statement: "Coal/iron, rivers/coastline, capital, institutions and innovations." },
            ],
            steps: [
              { reasoning: "Britain's resource endowment and transport network underpinned early industrialisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Coal, iron and transport advantages",
            commonErrors: ["Attributing industrialisation to a single factor like population alone."],
          },
        },
        {
          id: "his-u1-niq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "James Watt's improvement to the steam engine was significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First invented steam power" },
              { id: "b", text: "Made steam power efficient enough for widespread factory and mine use" },
              { id: "c", text: "Powered the first railway network" },
              { id: "d", text: "Eliminated the need for coal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Watt's steam engine", statement: "Watt's condenser made steam engines practical and efficient." },
            ],
            steps: [
              { reasoning: "Watt's separate condenser greatly improved fuel efficiency, enabling industrial use.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Made steam power practical for industry",
            commonErrors: ["Claiming Watt invented steam power — Newcomen preceded him."],
          },
        },
        {
          id: "his-u1-niq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why industrialisation intensified European imperial rivalry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Industrial workers demanded the end of all colonies" },
              { id: "b", text: "Steamships made trade with colonies unnecessary" },
              { id: "c", text: "Industrial states competed for colonies to secure raw materials and captive markets" },
              { id: "d", text: "Factories produced weapons that made war impossible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Industry and empire", statement: "Industrial economies needed raw materials and markets → colonial competition." },
            ],
            steps: [
              { reasoning: "Factories required resources and markets, driving competition for colonies in Africa and Asia.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Competition for raw materials and markets",
            commonErrors: ["Ignoring the economic link between industry and empire."],
          },
        },
        {
          id: "his-u1-niq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Kingdom of Italy was proclaimed; (b) the German Empire was proclaimed; (c) the British Industrial Revolution is conventionally dated from about.",
          response: { type: "numeric", parts: [{ label: "Kingdom of Italy proclaimed", answer: 1861 }, { label: "German Empire proclaimed", answer: 1871 }, { label: "Industrial Revolution begins (approx.)", answer: 1760 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Unification and industry dates", statement: "Italy 1861; Germany 1871; industrialisation c.1760." },
            ],
            steps: [
              { reasoning: "The Kingdom of Italy was proclaimed in 1861.", working: "1861", marks: 1, markCode: "M" },
              { reasoning: "The German Empire was proclaimed in 1871.", working: "1871", marks: 1, markCode: "M" },
              { reasoning: "Britain's Industrial Revolution is dated from about 1760.", working: "1760", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1861; 1871; c.1760",
            commonErrors: ["Confusing the two unification dates."],
          },
        },
        {
          id: "his-u1-niq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Bismarck's war against Denmark; (b) the Austro-Prussian War; (c) the Franco-Prussian War.",
          response: { type: "numeric", parts: [{ label: "War vs Denmark", answer: 1864 }, { label: "Austro-Prussian War", answer: 1866 }, { label: "Franco-Prussian War", answer: 1870 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Bismarck's wars", statement: "Denmark 1864; Austria 1866; France 1870–71." },
            ],
            steps: [
              { reasoning: "The Danish War occurred in 1864.", working: "1864", marks: 1, markCode: "M" },
              { reasoning: "The Austro-Prussian War occurred in 1866.", working: "1866", marks: 1, markCode: "M" },
              { reasoning: "The Franco-Prussian War began in 1870.", working: "1870", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1864; 1866; 1870",
            commonErrors: ["Misordering the three wars."],
          },
        },
        {
          id: "his-u1-niq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the start of the British Industrial Revolution, the proclamation of the Kingdom of Italy, the capture of Rome completing Italian unity, the proclamation of the German Empire.",
          response: { type: "numeric", parts: [{ label: "Industrial Revolution begins", answer: 1 }, { label: "Kingdom of Italy proclaimed", answer: 2 }, { label: "Rome captured / Italy completed", answer: 3 }, { label: "German Empire proclaimed", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "19th-century chronology", statement: "c.1760 → 1861 → 1870 → 1871." },
            ],
            steps: [
              { reasoning: "Industrialisation began c.1760 — earliest.", working: "1760", marks: 1, markCode: "M" },
              { reasoning: "Italy proclaimed 1861 — second.", working: "1861", marks: 1, markCode: "M" },
              { reasoning: "Rome captured 1870 completing Italy — third.", working: "1870", marks: 1, markCode: "M" },
              { reasoning: "German Empire proclaimed 1871 — latest.", working: "1871", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Industrialisation 1, Italy 1861 2, Rome 1870 3, Germany 1871 4",
            commonErrors: ["Placing German unification before Italy's completion."],
          },
        },
        {
          id: "his-u1-niq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the number of years between each pair of events: (a) from the start of the Industrial Revolution (c. 1760) to German unification (1871); (b) from Italian unification (1861) to German unification (1871); (c) the number of wars Bismarck fought to unify Germany.",
          response: { type: "numeric", parts: [{ label: "1760 to 1871", answer: 111 }, { label: "1861 to 1871", answer: 10 }, { label: "Bismarck's wars", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval and count calculation", statement: "Subtract years; recall the three wars of unification." },
            ],
            steps: [
              { reasoning: "$1871 - 1760$.", working: "1871 - 1760 = 111", marks: 1, markCode: "M" },
              { reasoning: "$1871 - 1861$.", working: "1871 - 1861 = 10", marks: 1, markCode: "M" },
              { reasoning: "Bismarck fought three wars: Denmark (1864), Austria (1866), France (1870).", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "111; 10; 3",
            commonErrors: ["Miscounting Bismarck's wars — three, not two or four."],
          },
        },
        {
          id: "his-u1-niq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Give the figure for each item: (a) the approximate year Mazzini and Garibaldi's movement peaked in Italy; take the year the Kingdom of Italy was proclaimed (1861); (b) the number of years between the two unifications; (c) the number of decades the Industrial Revolution took to spread from Britain to most of Europe (roughly 1760 to 1900).",
          response: { type: "numeric", parts: [{ label: "Italian unification year", answer: 1861 }, { label: "Gap between unifications", answer: 10 }, { label: "Decades for industrial spread", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract years; convert years to decades." },
            ],
            steps: [
              { reasoning: "Kingdom of Italy proclaimed in 1861.", working: "1861", marks: 1, markCode: "M" },
              { reasoning: "$1871 - 1861$.", working: "1871 - 1861 = 10", marks: 1, markCode: "M" },
              { reasoning: "From c.1760 to c.1900 is about 140 years = 14 decades.", working: "(1900 - 1760)/10 = 14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1861; 10 years; 14 decades",
            commonErrors: ["Forgetting to convert years to decades."],
          },
        },
        {
          id: "his-u1-niq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how nationalism acted as both a unifying and a divisive force in 19th-century Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nationalism's dual role", statement: "Unified Germany and Italy but fuelled ethnic rivalries and separatist movements." },
            ],
            steps: [
              { reasoning: "Unifying: nationalism motivated Italian and German unification movements.", marks: 1, markCode: "M" },
              { reasoning: "Divisive: it also fuelled demands of minorities within empires (e.g. Poles, Irish, Balkans).", marks: 1, markCode: "M" },
              { reasoning: "It could strengthen states but also destabilise multi-ethnic empires like Austria-Hungary.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: nationalism built nations while creating new sources of conflict.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unified Italy/Germany but also stirred minority nationalisms and imperial instability.",
            commonErrors: ["Presenting nationalism as only positive or only negative."],
          },
        },
        {
          id: "his-u1-niq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of industrialisation in 19th-century Europe.",
          parts: [
            { label: "a", prompt: "Identify two factors that enabled industrialisation to begin in Britain.", marks: 2 },
            { label: "b", prompt: "Describe two social consequences of industrialisation.", marks: 3 },
            { label: "c", prompt: "Evaluate its role in intensifying imperial rivalry and contributing to WWI.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Industrialisation", statement: "Resource/innovation base → urbanisation and class change → imperial competition." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: coal/iron deposits, transport network, capital/entrepreneurship, innovations like Watt's engine.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two factors identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Urbanisation: mass migration to industrial cities caused overcrowding and poor conditions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "New social classes: industrial bourgeoisie and urban working class emerged alongside the aristocracy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Harsh factory conditions (long hours, child labour) spurred labour movements.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Factories needed raw materials and markets → competition for colonies in Africa and Asia.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Industrial output powered militaries; arms races and economic rivalry fed tensions leading to WWI.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs industrialisation's economic benefits against its contribution to imperial conflict.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Coal/iron, transport, innovation. (b) Urbanisation, new classes, harsh conditions. (c) Industrial needs drove imperial rivalry and arms competition.",
            commonErrors: ["Ignoring the link between industry and empire."],
          },
        },
      ],
    },
  ],
};
