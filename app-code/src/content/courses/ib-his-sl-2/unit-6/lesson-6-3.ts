import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "his-u6-lesson-6-3",
  code: "6-3",
  title: "Terrorism and Recent Global Conflicts",
  goal: "I CAN explain the causes and course of 9/11 and the 'war on terror', and analyse the Iraq and Afghanistan wars, the rise of ISIS and human rights issues.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Al-Qaeda", definition: "Islamist terrorist network led by Osama bin Laden, responsible for the 9/11 attacks." },
    { term: "9/11 attacks", definition: "Terrorist attacks on the US on 11 September 2001 — hijacked planes hit the World Trade Center and the Pentagon." },
    { term: "War on terror", definition: "US-led campaign after 9/11 against terrorist groups, beginning with the invasion of Afghanistan." },
    { term: "Taliban", definition: "Islamist movement that ruled Afghanistan (1996–2001) and harboured al-Qaeda." },
    { term: "ISIS (Islamic State)", definition: "Jihadist group that seized territory in Iraq and Syria (2014–17), committing atrocities." },
    { term: "Guantanamo Bay", definition: "US detention facility at Guantanamo Bay, Cuba, holding 'enemy combatants' — criticised for indefinite detention without trial." },
  ],
  concepts: [
    {
      id: "his-u6-war-on-terror",
      title: "9/11 and the 'war on terror'",
      skill: "Explain the causes of the 9/11 attacks and analyse the US response and its consequences.",
      lesson: {
        sections: [
          {
            heading: "Causes and the attacks",
            body: "Al-Qaeda, led by **Osama bin Laden**, attacked the US on **11 September 2001**: hijacked planes destroyed the Twin Towers and damaged the Pentagon; a fourth crashed in Pennsylvania. Causes included US military presence in the Middle East, support for Israel, sanctions on Iraq, and bin Laden's anti-Western jihadist ideology. Nearly 3,000 people died — the deadliest attack on US soil.",
          },
          {
            heading: "The US response",
            body: "President Bush declared a global **'war on terror'** and invoked the **Patriot Act**, expanding surveillance powers. The US invaded **Afghanistan** (October 2001) to remove the Taliban and destroy al-Qaeda. Captured suspects were sent to **Guantanamo Bay** — indefinite detention without trial drew international condemnation for violating human rights and the Geneva Conventions.",
          },
          {
            heading: "Consequences and critiques",
            body: "The war on terror blurred the line between war and policing, expanded executive power, and was criticised for torture ('enhanced interrogation'), rendition and civilian casualties from drone strikes. Al-Qaeda mutated into affiliates; the campaign destabilised the region. Supporters argued it prevented further attacks; critics argued it created the conditions for new extremism.",
          },
        ],
        keyFormulas: [
          { name: "9/11 → response", statement: "Attacks 11 Sep 2001 → Patriot Act → Afghanistan invasion Oct 2001 → Guantanamo" },
          { name: "War on terror critiques", statement: "Surveillance expansion + indefinite detention + drone strikes + civilian casualties" },
        ],
        workedExample: {
          problem: "Why did the 'war on terror' generate human rights controversy?",
          solution: "Guantanamo's indefinite detention without trial, 'enhanced interrogation' (torture), rendition to third countries and drone strikes killing civilians all raised legal and moral questions about conduct in the conflict.",
        },
      },
      questions: [
        {
          id: "his-u6-tq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 9/11 attacks were carried out by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Al-Qaeda" },
              { id: "b", text: "The Taliban government" },
              { id: "c", text: "The Iraqi government" },
              { id: "d", text: "Iranian agents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11 perpetrator", statement: "Al-Qaeda hijackers carried out the 11 September 2001 attacks." },
            ],
            steps: [
              { reasoning: "Al-Qaeda, led by bin Laden, planned and executed 9/11.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Al-Qaeda",
            commonErrors: ["Confusing the perpetrator (al-Qaeda) with states wrongly blamed (Iraq)."],
          },
        },
        {
          id: "his-u6-tq2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe two consequences of the 9/11 attacks for US domestic policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11 domestic consequences", statement: "Patriot Act surveillance powers, Guantanamo detention, expanded security state." },
            ],
            steps: [
              { reasoning: "Patriot Act: expanded government surveillance and detention powers, weakening civil liberties.", marks: 1, markCode: "M" },
              { reasoning: "Security state growth: airport security, intelligence agencies and counter-terrorism apparatus expanded.", marks: 1, markCode: "M" },
              { reasoning: "Debate over balance: security gains vs erosion of privacy and constitutional protections.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Patriot Act surveillance powers and a greatly expanded security state.",
            commonErrors: ["Focusing only on foreign policy rather than domestic consequences."],
          },
        },
        {
          id: "his-u6-tq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why Guantanamo Bay became a human rights controversy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Guantanamo controversy", statement: "Indefinite detention without trial, 'enemy combatant' status, torture allegations." },
            ],
            steps: [
              { reasoning: "Detainees held indefinitely without charge or trial, classified as 'enemy combatants' to avoid Geneva protections.", marks: 1, markCode: "M" },
              { reasoning: "Allegations of torture ('enhanced interrogation') and inhumane conditions were documented.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: the facility became a symbol of US hypocrisy on human rights and was condemned by allies and UN bodies.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Guantanamo illustrated how the war on terror strained international law and US moral authority.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indefinite detention, 'enemy combatant' loophole and torture allegations made it a symbol of rights abuses.",
            commonErrors: ["Describing Guantanamo as a normal prison rather than a legal black hole."],
          },
        },
        {
          id: "his-u6-tq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the 'war on terror' as a strategy.",
          parts: [
            { label: "a", prompt: "Describe the main elements of the US strategy after 9/11.", marks: 3 },
            { label: "b", prompt: "Explain two criticisms of the strategy.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the war on terror succeeded in its aims.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "War on terror assessment", statement: "Military campaign removed some threats but generated new ones and eroded rights." },
            ],
            steps: [
              { part: "a", reasoning: "Military intervention: invasion of Afghanistan (2001) to remove Taliban and al-Qaeda.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Intelligence and surveillance: drone strikes, NSA surveillance, special operations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Legal framework: Patriot Act, Guantanamo, 'enemy combatant' status.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criticism: civilian casualties and drone strikes fuelled anti-Western resentment and recruitment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Criticism: indefinite detention, torture and rendition violated human rights and international law.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Criticism: al-Qaeda fragmented into affiliates; new groups (ISIS) emerged from the chaos.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Success argument: no comparable attack on the US homeland since 2001; al-Qaeda's core weakened.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: prevented major attacks but destabilised regions and arguably created new threats — partial success.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Military + surveillance + legal framework. (b) Civilian casualties, rights abuses, new groups. (c) Prevented attacks but destabilised regions — mixed.",
            commonErrors: ["All-or-nothing judgement without weighing both security gains and costs."],
          },
        },
        {
          id: "his-u6-tq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The September 11 attacks on the United States occurred on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7 December 1941" },
              { id: "b", text: "11 November 1918" },
              { id: "c", text: "11 September 2001" },
              { id: "d", text: "23 August 1990" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11", statement: "Hijacked planes destroyed the Twin Towers and damaged the Pentagon on 11 September 2001." },
            ],
            steps: [
              { reasoning: "The attacks took place on 11 September 2001.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 11 September 2001",
            commonErrors: ["Confusing 9/11 with Pearl Harbor or VE Day."],
          },
        },
        {
          id: "his-u6-tq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Al-Qaeda, the group behind the 9/11 attacks, was led by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saddam Hussein" },
              { id: "b", text: "Muammar Gaddafi" },
              { id: "c", text: "Osama bin Laden" },
              { id: "d", text: "Ayatollah Khomeini" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Al-Qaeda", statement: "Bin Laden's al-Qaeda orchestrated the 9/11 attacks." },
            ],
            steps: [
              { reasoning: "Osama bin Laden led al-Qaeda.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Osama bin Laden",
            commonErrors: ["Confusing al-Qaeda's leader with other regional figures."],
          },
        },
        {
          id: "his-u6-tq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During the 9/11 attacks, the fourth hijacked plane:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crashed in Pennsylvania after passengers fought back" },
              { id: "b", text: "Hit the Pentagon" },
              { id: "c", text: "Landed safely in Canada" },
              { id: "d", text: "Was shot down over the Atlantic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11 details", statement: "The fourth plane crashed in Pennsylvania after passenger resistance." },
            ],
            steps: [
              { reasoning: "The fourth plane never reached its target, crashing in Pennsylvania.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Crashed in Pennsylvania",
            commonErrors: ["Misidentifying which targets were hit by the four planes."],
          },
        },
        {
          id: "his-u6-tq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Patriot Act, passed after 9/11, primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Declared war on Iraq" },
              { id: "b", text: "Banned all surveillance" },
              { id: "c", text: "Created the Department of Homeland Security" },
              { id: "d", text: "Expanded US government surveillance and security powers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Patriot Act", statement: "The Act greatly expanded surveillance and investigative powers." },
            ],
            steps: [
              { reasoning: "The Patriot Act loosened restrictions on surveillance and detention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Expanded surveillance powers",
            commonErrors: ["Confusing the Patriot Act with the creation of Homeland Security."],
          },
        },
        {
          id: "his-u6-tq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The US invaded Afghanistan in October 2001 primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remove the Taliban and destroy al-Qaeda" },
              { id: "b", text: "Seize Afghan oil fields" },
              { id: "c", text: "Capture Saddam Hussein" },
              { id: "d", text: "Punish Pakistan" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Afghanistan invasion", statement: "The October 2001 invasion targeted the Taliban regime harbouring al-Qaeda." },
            ],
            steps: [
              { reasoning: "The invasion aimed to overthrow the Taliban and eliminate al-Qaeda's base.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Remove the Taliban, destroy al-Qaeda",
            commonErrors: ["Confusing the Afghanistan invasion with the later Iraq War."],
          },
        },
        {
          id: "his-u6-tq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Guantanamo Bay drew international condemnation because it held suspects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As civilian refugees" },
              { id: "b", text: "Only until their trials in US courts" },
              { id: "c", text: "In indefinite detention without trial" },
              { id: "d", text: "Under Geneva Convention protections" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Guantanamo", statement: "Detainees held without trial at Guantanamo raised human-rights and Geneva Convention concerns." },
            ],
            steps: [
              { reasoning: "Indefinite detention without charge or trial violated critics' reading of the laws of war.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Indefinite detention without trial",
            commonErrors: ["Assuming Guantanamo detainees received normal criminal-trial rights."],
          },
        },
        {
          id: "his-u6-tq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the year of the 9/11 attacks; (b) the month (as a number) of the attacks; (c) the month (as a number) of the Afghanistan invasion.",
          response: { type: "numeric", parts: [{ label: "Attack year", answer: 2001 }, { label: "Attack month", answer: 9 }, { label: "Invasion month", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11 chronology", statement: "September 2001 attacks; October 2001 invasion." },
            ],
            steps: [
              { reasoning: "The attacks occurred in 2001.", working: "2001", marks: 1, markCode: "M" },
              { reasoning: "They took place in September.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "The invasion began in October.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2001; 9; 10",
            commonErrors: ["Confusing the month of the attacks with the invasion."],
          },
        },
        {
          id: "his-u6-tq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the approximate number of people killed on 9/11; (b) the number of hijacked planes used; (c) the number of planes that struck their targets.",
          response: { type: "numeric", parts: [{ label: "Approximate deaths", answer: 3000 }, { label: "Planes hijacked", answer: 4 }, { label: "Planes striking targets", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "9/11 details", statement: "~3,000 dead; four planes hijacked; three struck targets." },
            ],
            steps: [
              { reasoning: "Nearly 3,000 people died.", working: "3000", marks: 1, markCode: "M" },
              { reasoning: "Four planes were hijacked.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Three reached their targets; the fourth crashed in Pennsylvania.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3000; 4; 3",
            commonErrors: ["Counting all four planes as reaching targets."],
          },
        },
        {
          id: "his-u6-tq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the end of the Cold War (1991) and the 9/11 attacks (2001); (b) between the 9/11 attacks (2001) and the Taliban retaking Afghanistan (2021); (c) between the Afghanistan invasion (2001) and the Iraq War (2003).",
          response: { type: "numeric", parts: [{ label: "1991 to 2001", answer: 10 }, { label: "2001 to 2021", answer: 20 }, { label: "2001 to 2003", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$2001 - 1991 = 10$ years.", working: "2001 - 1991 = 10", marks: 1, markCode: "M" },
              { reasoning: "$2021 - 2001 = 20$ years of war.", working: "2021 - 2001 = 20", marks: 1, markCode: "M" },
              { reasoning: "$2003 - 2001 = 2$ years.", working: "2003 - 2001 = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10; 20; 2 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-tq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the 9/11 attacks; (b) the Iraq War began; (c) the Taliban retook Afghanistan.",
          response: { type: "numeric", parts: [{ label: "9/11 attacks", answer: 2001 }, { label: "Iraq War begins", answer: 2003 }, { label: "Taliban returns", answer: 2021 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "War on terror chronology", statement: "2001 attacks; 2003 Iraq; 2021 Taliban return." },
            ],
            steps: [
              { reasoning: "The attacks occurred in 2001.", working: "2001", marks: 1, markCode: "M" },
              { reasoning: "The Iraq War began in 2003.", working: "2003", marks: 1, markCode: "M" },
              { reasoning: "The Taliban retook Afghanistan in 2021.", working: "2021", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2001; 2003; 2021",
            commonErrors: ["Confusing the Afghanistan war's start with its end."],
          },
        },
        {
          id: "his-u6-tq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the 9/11 attacks; the US invasion of Afghanistan; the Patriot Act signed; detentions begin at Guantanamo.",
          response: { type: "numeric", parts: [{ label: "9/11 attacks", answer: 1 }, { label: "Afghanistan invasion", answer: 2 }, { label: "Patriot Act", answer: 3 }, { label: "Guantanamo detentions", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Response chronology", statement: "Sep 2001 → Oct 2001 invasion → Oct 2001 Act → Guantanamo 2002." },
            ],
            steps: [
              { reasoning: "The attacks (11 Sep) are earliest.", working: "Sep 11", marks: 1, markCode: "M" },
              { reasoning: "The invasion (early Oct) preceded the Patriot Act (late Oct).", working: "Oct 7 < Oct 26", marks: 1, markCode: "M" },
              { reasoning: "Guantanamo detentions (2002) are latest; all ordered correctly.", working: "2001 < 2002", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Attacks 1, invasion 2, Patriot Act 3, Guantanamo 4",
            commonErrors: ["Placing the Patriot Act before the invasion."],
          },
        },
        {
          id: "his-u6-tq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Cold War ends; the 9/11 attacks; the Iraq War begins; ISIS declares a caliphate.",
          response: { type: "numeric", parts: [{ label: "Cold War ends", answer: 1 }, { label: "9/11 attacks", answer: 2 }, { label: "Iraq War begins", answer: 3 }, { label: "ISIS caliphate", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-Cold War chronology", statement: "1991 → 2001 → 2003 → 2014." },
            ],
            steps: [
              { reasoning: "The Cold War's end (1991) is earliest.", working: "1991", marks: 1, markCode: "M" },
              { reasoning: "9/11 (2001) preceded the Iraq War (2003).", working: "2001 < 2003", marks: 1, markCode: "M" },
              { reasoning: "The ISIS caliphate (2014) is latest; all ordered correctly.", working: "2003 < 2014", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cold War ends 1, 9/11 2, Iraq 3, ISIS 4",
            commonErrors: ["Placing the Iraq War before 9/11."],
          },
        },
      ],
    },
    {
      id: "his-u6-recent-conflicts",
      title: "Iraq, Afghanistan, ISIS and human rights",
      skill: "Analyse the Iraq and Afghanistan wars, the rise of ISIS, and ongoing human rights issues in recent conflicts.",
      lesson: {
        sections: [
          {
            heading: "Iraq and Afghanistan",
            body: "The **Iraq War (2003–11)** began with a US-led invasion justified by claims of weapons of mass destruction later shown false. The invasion toppled Saddam Hussein but unleashed sectarian civil war, insurgency and the rise of ISIS. **Afghanistan** saw a 20-year war (2001–21): initial success against the Taliban gave way to stalemate, corruption and a Taliban resurgence that retook the country in 2021.",
          },
          {
            heading: "ISIS and regional chaos",
            body: "The **Islamic State (ISIS)** exploited the Iraq war's chaos, seizing Mosul and vast territory in 2014 and declaring a caliphate. It committed genocide against Yazidis, enslaved women and carried out mass executions. A US-led coalition retook territory by 2017, but ISIS survived as an insurgency. Syria's civil war (from 2011) produced millions of refugees — the worst humanitarian crisis of the era.",
          },
          {
            heading: "Human rights in recent conflicts",
            body: "Recent conflicts raised acute rights issues: civilian casualties from airstrikes and drones, torture and rendition, refugee crises (Syria, Afghanistan), and the treatment of detainees. The responsibility to protect (R2P) doctrine struggled against sovereignty claims. The post-9/11 era showed how security imperatives repeatedly collided with human rights norms.",
          },
        ],
        keyFormulas: [
          { name: "Conflict timeline", statement: "Afghanistan 2001–21 | Iraq 2003–11 | ISIS caliphate 2014–17 | Syria civil war 2011–" },
          { name: "Human rights issues", statement: "Civilian casualties + torture/rendition + refugees + R2P vs sovereignty" },
        ],
        workedExample: {
          problem: "Why did the Iraq War have such devastating consequences?",
          solution: "The invasion removed the regime but destroyed state institutions, unleashed sectarian conflict between Shia and Sunni, empowered jihadists like ISIS, and created a power vacuum exploited by Iran and others.",
        },
      },
      questions: [
        {
          id: "his-u6-cq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 2003 Iraq War was initially justified by claims of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iraqi attacks on Israel" },
              { id: "b", text: "Iraqi nuclear weapons" },
              { id: "c", text: "Iraqi weapons of mass destruction" },
              { id: "d", text: "Iraqi support for al-Qaeda" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Iraq War justification", statement: "US claimed Iraq possessed WMD — later shown false." },
            ],
            steps: [
              { reasoning: "The official justification was Iraqi WMD possession.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Weapons of mass destruction",
            commonErrors: ["Choosing 'nuclear weapons' — the claim was WMD broadly, not specifically nuclear."],
          },
        },
        {
          id: "his-u6-cq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways ISIS gained control of territory in Iraq and Syria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "ISIS rise", statement: "Exploited post-2003 chaos, sectarian grievances, weak states and social media recruitment." },
            ],
            steps: [
              { reasoning: "Exploited the power vacuum and sectarian conflict created by the Iraq War and Syrian civil war.", marks: 1, markCode: "M" },
              { reasoning: "Recruited from Sunni communities marginalised by Shia-dominated governments; used brutal propaganda.", marks: 1, markCode: "M" },
              { reasoning: "Military tactics: rapid seizure of cities (Mosul 2014) exploiting weak Iraqi/Syrian armies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exploited sectarian chaos and weak states; recruited marginalised Sunnis; seized territory militarily.",
            commonErrors: ["Treating ISIS as a foreign import rather than exploiting local grievances."],
          },
        },
        {
          id: "his-u6-cq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the humanitarian consequences of the wars in Iraq and Syria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Iraq/Syria humanitarian crisis", statement: "Millions displaced, cities destroyed, genocide, refugee flows." },
            ],
            steps: [
              { reasoning: "Syria's civil war displaced over 13 million people — the largest refugee crisis since WWII.", marks: 1, markCode: "M" },
              { reasoning: "ISIS committed genocide against Yazidis and atrocities against civilians in Iraq and Syria.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: destruction of infrastructure (hospitals, water, power) created lasting humanitarian catastrophe.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: military interventions and civil wars produced humanitarian disasters exceeding their strategic aims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass displacement, genocide, destroyed infrastructure — humanitarian catastrophe far exceeding strategic aims.",
            commonErrors: ["Focusing only on military outcomes rather than humanitarian consequences."],
          },
        },
        {
          id: "his-u6-cq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the human rights issues arising from the post-9/11 wars.",
          parts: [
            { label: "a", prompt: "Describe two specific human rights abuses in these conflicts.", marks: 3 },
            { label: "b", prompt: "Explain the tension between security and human rights in the 'war on terror'.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the post-9/11 era strengthened or weakened international human rights norms.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Post-9/11 human rights", statement: "Security measures repeatedly collided with rights — detention, torture, civilian casualties, refugee treatment." },
            ],
            steps: [
              { part: "a", reasoning: "Guantanamo indefinite detention without trial and 'enhanced interrogation' (torture).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Drone strikes and airstrikes causing civilian casualties; rendition to third countries.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also: treatment of refugees and detainees in Iraq/Afghanistan; ISIS atrocities against civilians.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Security argument: extraordinary threats justified extraordinary measures — prevention over due process.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rights argument: torture and indefinite detention violate Geneva Conventions and erode moral authority.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tension: states claimed security imperatives suspended normal legal protections.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weakened: abuses normalised violations; 'enemy combatant' loophole undermined Geneva norms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: the era exposed and often violated rights norms, though it also spurred accountability movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Guantanamo, torture, drone casualties, rendition. (b) Security vs rights tension. (c) Mostly weakened norms, though accountability movements emerged.",
            commonErrors: ["Treating rights issues as abstract rather than concrete abuses with victims."],
          },
        },
        {
          id: "his-u6-cq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Iraq War of 2003–11 began with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A US-led invasion justified by claims of weapons of mass destruction" },
              { id: "b", text: "A NATO bombing campaign" },
              { id: "c", text: "A UN-authorised peacekeeping mission" },
              { id: "d", text: "An Iraqi invasion of Kuwait" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Iraq War", statement: "The 2003 US-led invasion cited WMD claims later shown to be false." },
            ],
            steps: [
              { reasoning: "The invasion was justified by WMD claims that proved unfounded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** US-led invasion over WMD claims",
            commonErrors: ["Confusing the 2003 invasion with the 1991 Gulf War."],
          },
        },
        {
          id: "his-u6-cq6",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The justification for the 2003 Iraq invasion — weapons of mass destruction — was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shown to be false, undermining the war's legitimacy" },
              { id: "b", text: "Later proven accurate" },
              { id: "c", text: "Irrelevant because the UN approved the war" },
              { id: "d", text: "Based on Iraqi nuclear tests" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Iraq WMD claims", statement: "No WMD stockpiles were found; the false justification fuelled criticism of the war." },
            ],
            steps: [
              { reasoning: "Inspectors found no WMD, making the casus belli collapse.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shown to be false",
            commonErrors: ["Assuming the WMD claims were substantiated."],
          },
        },
        {
          id: "his-u6-cq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "ISIS seized Mosul and declared a caliphate in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2017" },
              { id: "b", text: "2011" },
              { id: "c", text: "2014" },
              { id: "d", text: "2003" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "ISIS caliphate", statement: "ISIS captured Mosul and declared a caliphate in 2014." },
            ],
            steps: [
              { reasoning: "The caliphate was declared in June 2014.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 2014",
            commonErrors: ["Confusing the caliphate's declaration (2014) with its territorial defeat (2017)."],
          },
        },
        {
          id: "his-u6-cq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Among its atrocities, ISIS committed genocide against:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Armenians of Syria" },
              { id: "b", text: "The Kurds of Iraq" },
              { id: "c", text: "The Yazidis" },
              { id: "d", text: "The Druze of Lebanon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Yazidi genocide", statement: "ISIS committed genocide against the Yazidi minority in Iraq." },
            ],
            steps: [
              { reasoning: "The Yazidis suffered massacre, enslavement and forced conversion under ISIS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The Yazidis",
            commonErrors: ["Naming a different group than the one targeted for genocide."],
          },
        },
        {
          id: "his-u6-cq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Taliban retook control of Afghanistan in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2017" },
              { id: "b", text: "2014" },
              { id: "c", text: "2021" },
              { id: "d", text: "2001" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Taliban victory", statement: "The Taliban retook Afghanistan in August 2021 as US forces withdrew." },
            ],
            steps: [
              { reasoning: "Kabul fell to the Taliban in August 2021.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 2021",
            commonErrors: ["Confusing the Taliban's return with the war's start in 2001."],
          },
        },
        {
          id: "his-u6-cq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Syrian civil war, which produced millions of refugees, began in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2003" },
              { id: "b", text: "2008" },
              { id: "c", text: "2001" },
              { id: "d", text: "2011" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Syria civil war", statement: "The war began in 2011 amid the Arab Spring and became the era's worst humanitarian crisis." },
            ],
            steps: [
              { reasoning: "Protests against Assad erupted in 2011 and descended into civil war.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 2011",
            commonErrors: ["Confusing Syria's war with Iraq's."],
          },
        },
        {
          id: "his-u6-cq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Iraq War began; (b) the Syrian civil war began; (c) ISIS declared its caliphate.",
          response: { type: "numeric", parts: [{ label: "Iraq War begins", answer: 2003 }, { label: "Syria war begins", answer: 2011 }, { label: "ISIS caliphate", answer: 2014 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Conflict chronology", statement: "2003 Iraq; 2011 Syria; 2014 ISIS." },
            ],
            steps: [
              { reasoning: "The Iraq invasion occurred in 2003.", working: "2003", marks: 1, markCode: "M" },
              { reasoning: "The Syrian civil war began in 2011.", working: "2011", marks: 1, markCode: "M" },
              { reasoning: "The caliphate was declared in 2014.", working: "2014", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2003; 2011; 2014",
            commonErrors: ["Confusing the Iraq and Syria timelines."],
          },
        },
        {
          id: "his-u6-cq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the US-led coalition retook ISIS territory; (b) the Taliban retook Afghanistan; (c) the Syrian civil war began.",
          response: { type: "numeric", parts: [{ label: "ISIS territory retaken", answer: 2017 }, { label: "Taliban returns", answer: 2021 }, { label: "Syria war begins", answer: 2011 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Recent conflict chronology", statement: "2011 Syria; 2017 ISIS defeat; 2021 Taliban." },
            ],
            steps: [
              { reasoning: "The coalition retook ISIS territory by 2017.", working: "2017", marks: 1, markCode: "M" },
              { reasoning: "The Taliban returned in 2021.", working: "2021", marks: 1, markCode: "M" },
              { reasoning: "The Syrian civil war began in 2011.", working: "2011", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2017; 2021; 2011",
            commonErrors: ["Confusing the ISIS defeat (2017) with the caliphate's rise (2014)."],
          },
        },
        {
          id: "his-u6-cq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) the duration of the Iraq War (2003–2011); (b) between the Iraq invasion (2003) and the ISIS caliphate (2014); (c) between the caliphate (2014) and the coalition retaking territory (2017).",
          response: { type: "numeric", parts: [{ label: "Iraq War duration", answer: 8 }, { label: "2003 to 2014", answer: 11 }, { label: "2014 to 2017", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$2011 - 2003 = 8$ years of war.", working: "2011 - 2003 = 8", marks: 1, markCode: "M" },
              { reasoning: "$2014 - 2003 = 11$ years.", working: "2014 - 2003 = 11", marks: 1, markCode: "M" },
              { reasoning: "$2017 - 2014 = 3$ years.", working: "2017 - 2014 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 11; 3 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-cq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the US invasion of Afghanistan; the Iraq War begins; ISIS declares a caliphate; the US-led coalition retakes ISIS territory.",
          response: { type: "numeric", parts: [{ label: "Afghanistan invasion", answer: 1 }, { label: "Iraq War begins", answer: 2 }, { label: "ISIS caliphate", answer: 3 }, { label: "ISIS territory retaken", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Conflict chronology order", statement: "2001 → 2003 → 2014 → 2017." },
            ],
            steps: [
              { reasoning: "The Afghanistan invasion (2001) is earliest.", working: "2001", marks: 1, markCode: "M" },
              { reasoning: "The Iraq War (2003) preceded the caliphate (2014).", working: "2003 < 2014", marks: 1, markCode: "M" },
              { reasoning: "The territorial defeat (2017) is latest; all ordered correctly.", working: "2014 < 2017", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Afghanistan 1, Iraq 2, caliphate 3, retaken 4",
            commonErrors: ["Placing the caliphate before the Iraq War."],
          },
        },
        {
          id: "his-u6-cq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) the duration of the Iraq War (2003–2011); (b) between the start of the Syria civil war (2011) and the Taliban's return (2021); (c) between the ISIS caliphate (2014) and the Taliban's return (2021).",
          response: { type: "numeric", parts: [{ label: "Iraq War duration", answer: 8 }, { label: "2011 to 2021", answer: 10 }, { label: "2014 to 2021", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$2011 - 2003 = 8$ years.", working: "2011 - 2003 = 8", marks: 1, markCode: "M" },
              { reasoning: "$2021 - 2011 = 10$ years.", working: "2021 - 2011 = 10", marks: 1, markCode: "M" },
              { reasoning: "$2021 - 2014 = 7$ years.", working: "2021 - 2014 = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 10; 7 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-cq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of years the Afghanistan War lasted (2001–2021); (b) the number of years the Iraq War lasted (2003–2011); (c) the year ISIS declared its caliphate.",
          response: { type: "numeric", parts: [{ label: "Afghanistan duration", answer: 20 }, { label: "Iraq duration", answer: 8 }, { label: "Caliphate year", answer: 2014 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "War durations", statement: "Afghanistan 20 years; Iraq 8 years; caliphate 2014." },
            ],
            steps: [
              { reasoning: "$2021 - 2001 = 20$ years.", working: "2021 - 2001 = 20", marks: 1, markCode: "M" },
              { reasoning: "$2011 - 2003 = 8$ years.", working: "2011 - 2003 = 8", marks: 1, markCode: "M" },
              { reasoning: "The caliphate was declared in 2014.", working: "2014", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20; 8; 2014",
            commonErrors: ["Misstating the length of the Afghanistan War."],
          },
        },
      ],
    },
  ],
};
