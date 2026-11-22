import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "his-u6-lesson-6-4",
  code: "6-4",
  title: "The Post-Cold War World Order and Human Rights",
  goal: "I CAN describe the new world order after 1991 and evaluate international responses to genocide, humanitarian crises and global governance.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Unipolar moment", definition: "The post-1991 period when the United States was the sole superpower without a rival bloc." },
    { term: "Humanitarian intervention", definition: "Military or civilian action to protect populations from mass atrocities, authorised by states or the UN." },
    { term: "Responsibility to Protect (R2P)", definition: "UN doctrine (2005) that states must protect populations; the international community may intervene if they fail." },
    { term: "Genocide", definition: "Acts committed with intent to destroy, in whole or in part, a national, ethnic, racial or religious group." },
    { term: "ICC", definition: "International Criminal Court (est. 2002), which prosecutes individuals for genocide, war crimes and crimes against humanity." },
    { term: "Refugee", definition: "A person forced to flee their country due to persecution or armed conflict, protected under international law." },
  ],
  concepts: [
    {
      id: "his-u6-new-world-order",
      title: "A new world order",
      skill: "Describe the post-1991 international order, evaluate the role of the UN and humanitarian intervention, and analyse the rise of new powers.",
      lesson: {
        sections: [
          {
            heading: "The unipolar moment and institutions",
            body: "With the Soviet collapse in 1991, the United States became the **sole superpower** — the 'unipolar moment'. The **United Nations** expanded its role in peacekeeping and humanitarian missions, and the end of the Cold War enabled cooperation on issues like nuclear non-proliferation. Yet the UN's Security Council remained paralysed when the great powers disagreed (e.g. over Iraq).",
          },
          {
            heading: "Humanitarian intervention",
            body: "The 1990s saw intervention justified on humanitarian grounds: UN-sanctioned operations in **Somalia** and **Bosnia**, and NATO's bombing of **Kosovo** (1999) without explicit UN approval. Later, **Libya** (2011) showed both the promise and limits of intervention — regime change followed by state collapse. The **Responsibility to Protect** doctrine (2005) codified intervention against mass atrocities.",
          },
          {
            heading: "The rise of new powers",
            body: "US dominance proved temporary. **China** emerged as an economic and military rival, while **India** grew in influence. Regional powers (Brazil, Turkey, Iran, Saudi Arabia) asserted autonomy; the EU and others promoted multilateralism. By the 2010s–2020s the order had become **multipolar and contested**, with US–China rivalry shaping global politics.",
          },
        ],
        keyFormulas: [
          { name: "Post-1991 order", statement: "US unipolarity → later multipolarity (China, India, regional powers)" },
          { name: "Intervention test", statement: "UN mandate preferred → humanitarian justification → contested legality/legitimacy" },
          { name: "R2P", statement: "Sovereignty is conditional on protecting populations from atrocities" },
        ],
        workedExample: {
          problem: "Evaluate the claim that the post-1991 world was a 'unipolar moment'.",
          solution: "Initially true: the US was the only superpower with unmatched military and economic reach. But the rise of China, India and regional powers, plus US overextension (Iraq, Afghanistan), eroded unipolarity — making the term accurate for the 1990s but not the 2010s onward.",
        },
      },
      questions: [
        {
          id: "his-u6-nwoq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'unipolar moment' refers to the period after 1991 when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "China replaced the Soviet Union as superpower" },
              { id: "b", text: "Europe unified into a single state" },
              { id: "c", text: "The UN became the world's only superpower" },
              { id: "d", text: "The United States was the sole dominant superpower" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unipolar moment", statement: "Era of single-superpower dominance by the US after the Cold War." },
            ],
            steps: [
              { reasoning: "After 1991 the US was the only superpower without a rival bloc — a unipolar system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The United States was the sole dominant superpower",
            commonErrors: ["Confusing unipolarity with multipolar or bipolar systems."],
          },
        },
        {
          id: "his-u6-nwoq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two examples of humanitarian intervention after the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Humanitarian intervention", statement: "Military action to protect civilians from atrocities (Bosnia, Kosovo, Libya)." },
            ],
            steps: [
              { reasoning: "NATO intervention in Bosnia (1995) helped end ethnic cleansing and enforce the Dayton Accords.", marks: 1, markCode: "M" },
              { reasoning: "NATO bombing of Kosovo (1999) aimed to stop Serbian atrocities against Albanians, though without explicit UN approval.", marks: 1, markCode: "M" },
              { reasoning: "Libya (2011) intervention toppled Gaddafi but led to state collapse — a contested example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bosnia (1995), Kosovo (1999) and Libya (2011) as examples of intervention with mixed outcomes.",
            commonErrors: ["Listing UN peacekeeping as intervention or omitting consequences."],
          },
        },
        {
          id: "his-u6-nwoq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the post-1991 world order changed the role of the United Nations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "UN role", statement: "Expanded peacekeeping and humanitarian mandates, but constrained by great-power vetoes." },
            ],
            steps: [
              { reasoning: "With no Cold War deadlock, the UN expanded peacekeeping and humanitarian missions in the 1990s.", marks: 1, markCode: "M" },
              { reasoning: "It gained new mandates in areas like disarmament, human rights and 'never again' atrocity prevention.", marks: 1, markCode: "M" },
              { reasoning: "However, Security Council vetoes by the US, Russia and China paralysed action on major crises (e.g. Syria).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: greater ambition but persistent structural limits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expanded peacekeeping/humanitarian role but limited by great-power vetoes.",
            commonErrors: ["Claiming the UN became omnipotent or irrelevant — both extremes are wrong."],
          },
        },
        {
          id: "his-u6-nwoq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the claim that US unipolarity defined the post-Cold War era.",
          parts: [
            { label: "a", prompt: "Identify two features of US dominance after 1991.", marks: 2 },
            { label: "b", prompt: "Explain how the rise of new powers challenged US dominance.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the 'unipolar moment' was temporary or lasting.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unipolarity assessed", statement: "US dominance in 1990s → erosion by China, India, regional powers and overextension." },
            ],
            steps: [
              { part: "a", reasoning: "Unmatched military power and economic leadership (IMF/World Bank dominance).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "China's economic growth and military modernisation created a peer competitor.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "India and regional powers (Brazil, Turkey, Iran) asserted autonomy, reducing US control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "US overextension (Iraq, Afghanistan) and financial crises weakened its relative power.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For 'temporary': by the 2010s the order was clearly multipolar with US–China rivalry.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "For 'lasting': the US retained unmatched military and financial reach; no rival matched its alliance network.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: unipolar for the 1990s, transitioning to multipolar.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Military + economic dominance. (b) China, India, regional powers. (c) Temporary — transitioning to multipolar.",
            commonErrors: ["Ignoring the persistence of US military and financial primacy."],
          },
        },
        {
          id: "his-u6-nwoq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'unipolar moment' after 1991 described:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UN control of all military forces" },
              { id: "b", text: "A return to colonial empires" },
              { id: "c", text: "The United States as the sole superpower" },
              { id: "d", text: "A world with many equal superpowers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Unipolar moment", statement: "With the USSR gone, the US was the world's only superpower in the 1990s." },
            ],
            steps: [
              { reasoning: "The Soviet collapse left the US unmatched militarily and economically.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** US as sole superpower",
            commonErrors: ["Assuming the post-1991 order remained bipolar."],
          },
        },
        {
          id: "his-u6-nwoq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "NATO's bombing of Kosovo in 1999 was controversial because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Occurred without explicit UN approval" },
              { id: "b", text: "Was authorised by the UN Security Council" },
              { id: "c", text: "Aimed to restore Yugoslav sovereignty" },
              { id: "d", text: "Targeted Russian territory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Kosovo intervention", statement: "NATO bombed Kosovo on humanitarian grounds without explicit UN approval." },
            ],
            steps: [
              { reasoning: "The intervention bypassed the Security Council, raising legality questions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Without explicit UN approval",
            commonErrors: ["Claiming the UN authorised the Kosovo bombing."],
          },
        },
        {
          id: "his-u6-nwoq7",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The 2011 intervention in Libya illustrated the limits of humanitarian intervention because it led to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regime change followed by state collapse" },
              { id: "b", text: "A stable democratic transition" },
              { id: "c", text: "A permanent UN peacekeeping force" },
              { id: "d", text: "Reunification of Libya and Sudan" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Libya 2011", statement: "Intervention toppled Gaddafi but left Libya fractured and failing." },
            ],
            steps: [
              { reasoning: "Regime change without a plan produced state collapse, not stability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regime change then state collapse",
            commonErrors: ["Treating the Libya intervention as an unqualified success."],
          },
        },
        {
          id: "his-u6-nwoq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Responsibility to Protect' (R2P) doctrine was codified in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1999" },
              { id: "c", text: "2015" },
              { id: "d", text: "2005" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "R2P", statement: "The UN adopted R2P in 2005, making sovereignty conditional on protecting populations." },
            ],
            steps: [
              { reasoning: "R2P was endorsed at the 2005 World Summit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 2005",
            commonErrors: ["Confusing R2P's adoption with the Kosovo intervention."],
          },
        },
        {
          id: "his-u6-nwoq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "By the 2010s–2020s, the post-1991 international order had become:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multipolar and contested, with US–China rivalry" },
              { id: "b", text: "Controlled by the United Nations" },
              { id: "c", text: "Bipolar again under Russia and the US" },
              { id: "d", text: "Stable and permanently unipolar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Multipolar order", statement: "China, India and regional powers eroded US unipolarity." },
            ],
            steps: [
              { reasoning: "The rise of China, India and regional powers made the order multipolar.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Multipolar and contested",
            commonErrors: ["Assuming unipolarity persisted indefinitely."],
          },
        },
        {
          id: "his-u6-nwoq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The UN Security Council was often paralysed after 1991 because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lacked a peacekeeping budget" },
              { id: "b", text: "It had been abolished" },
              { id: "c", text: "All members opposed intervention" },
              { id: "d", text: "Great-power disagreement — e.g. over Iraq — blocked action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "UN paralysis", statement: "Permanent-member vetoes let great powers block action when they disagreed." },
            ],
            steps: [
              { reasoning: "Disagreements among the great powers paralysed the Council on issues like Iraq.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Great-power disagreement",
            commonErrors: ["Claiming the UN ceased to function entirely."],
          },
        },
        {
          id: "his-u6-nwoq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Soviet collapse created the unipolar moment; (b) NATO bombed Kosovo; (c) the R2P doctrine was codified.",
          response: { type: "numeric", parts: [{ label: "Soviet collapse", answer: 1991 }, { label: "Kosovo bombing", answer: 1999 }, { label: "R2P codified", answer: 2005 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-Cold War chronology", statement: "1991 unipolarity; 1999 Kosovo; 2005 R2P." },
            ],
            steps: [
              { reasoning: "The USSR dissolved in 1991.", working: "1991", marks: 1, markCode: "M" },
              { reasoning: "Kosovo was bombed in 1999.", working: "1999", marks: 1, markCode: "M" },
              { reasoning: "R2P was adopted in 2005.", working: "2005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1991; 1999; 2005",
            commonErrors: ["Confusing the Kosovo intervention (1999) with R2P (2005)."],
          },
        },
        {
          id: "his-u6-nwoq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) NATO's Kosovo intervention; (b) the Libya intervention; (c) the R2P doctrine adopted.",
          response: { type: "numeric", parts: [{ label: "Kosovo", answer: 1999 }, { label: "Libya intervention", answer: 2011 }, { label: "R2P adopted", answer: 2005 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Intervention chronology", statement: "1999 Kosovo; 2005 R2P; 2011 Libya." },
            ],
            steps: [
              { reasoning: "Kosovo was bombed in 1999.", working: "1999", marks: 1, markCode: "M" },
              { reasoning: "Libya was intervened in during 2011.", working: "2011", marks: 1, markCode: "M" },
              { reasoning: "R2P was adopted in 2005.", working: "2005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1999; 2011; 2005",
            commonErrors: ["Confusing the order of R2P and the Libya intervention."],
          },
        },
        {
          id: "his-u6-nwoq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Soviet collapse (1991) and the Kosovo intervention (1999); (b) between Kosovo (1999) and R2P (2005); (c) between the Soviet collapse (1991) and the Libya intervention (2011).",
          response: { type: "numeric", parts: [{ label: "1991 to 1999", answer: 8 }, { label: "1999 to 2005", answer: 6 }, { label: "1991 to 2011", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1999 - 1991 = 8$ years.", working: "1999 - 1991 = 8", marks: 1, markCode: "M" },
              { reasoning: "$2005 - 1999 = 6$ years.", working: "2005 - 1999 = 6", marks: 1, markCode: "M" },
              { reasoning: "$2011 - 1991 = 20$ years.", working: "2011 - 1991 = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 6; 20 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-nwoq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Soviet collapse; NATO's Kosovo intervention; the R2P doctrine codified; the Libya intervention.",
          response: { type: "numeric", parts: [{ label: "Soviet collapse", answer: 1 }, { label: "Kosovo", answer: 2 }, { label: "R2P codified", answer: 3 }, { label: "Libya intervention", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Intervention chronology", statement: "1991 → 1999 → 2005 → 2011." },
            ],
            steps: [
              { reasoning: "The collapse (1991) is earliest.", working: "1991", marks: 1, markCode: "M" },
              { reasoning: "Kosovo (1999) preceded R2P (2005).", working: "1999 < 2005", marks: 1, markCode: "M" },
              { reasoning: "Libya (2011) is latest; all ordered correctly.", working: "2005 < 2011", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collapse 1, Kosovo 2, R2P 3, Libya 4",
            commonErrors: ["Placing R2P before the Kosovo intervention."],
          },
        },
        {
          id: "his-u6-nwoq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the start of the unipolar moment (1991) and Kosovo (1999); (b) between Kosovo (1999) and Libya (2011); (c) between R2P (2005) and Libya (2011).",
          response: { type: "numeric", parts: [{ label: "1991 to 1999", answer: 8 }, { label: "1999 to 2011", answer: 12 }, { label: "2005 to 2011", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1999 - 1991 = 8$ years.", working: "1999 - 1991 = 8", marks: 1, markCode: "M" },
              { reasoning: "$2011 - 1999 = 12$ years.", working: "2011 - 1999 = 12", marks: 1, markCode: "M" },
              { reasoning: "$2011 - 2005 = 6$ years.", working: "2011 - 2005 = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 12; 6 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-nwoq16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of permanent members of the UN Security Council; (b) the number of UN-sanctioned or NATO humanitarian interventions named in the lesson (Somalia, Bosnia, Kosovo, Libya); (c) the number of rising powers named (China, India and regional powers).",
          response: { type: "numeric", parts: [{ label: "UNSC permanent members", answer: 5 }, { label: "Interventions named", answer: 4 }, { label: "Rising powers named", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "New world order facts", statement: "5 permanent members; Somalia, Bosnia, Kosovo, Libya; China, India, Brazil, Turkey, Iran, Saudi Arabia." },
            ],
            steps: [
              { reasoning: "The Security Council has five permanent members.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Somalia, Bosnia, Kosovo and Libya — four cases.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "China, India, Brazil, Turkey, Iran and Saudi Arabia — six named powers.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5; 4; 6",
            commonErrors: ["Miscounting the named interventions or powers."],
          },
        },
      ],
    },
    {
      id: "his-u6-human-rights-challenges",
      title: "Human rights and global challenges",
      skill: "Analyse the international response to genocide, examine refugee crises and assess the role of international criminal justice and global governance.",
      lesson: {
        sections: [
          {
            heading: "Genocide and failed prevention",
            body: "The post-Cold War era saw repeated mass atrocities. The **Rwandan genocide** (1994) killed ~800,000 Tutsis and moderate Hutus in 100 days while the UN withdrew. **Srebrenica** (1995) was Europe's worst atrocity since WWII — ~8,000 Bosnian Muslim men and boys were executed by Serb forces despite a UN 'safe area'. Both exposed the gap between 'never again' rhetoric and action.",
          },
          {
            heading: "Refugees and displacement",
            body: "Conflict and persecution produced mass displacement: Rwandan refugees (1994), Syrian refugees (from 2011), Rohingya fleeing Myanmar, and others. The international system struggled: the **1951 Refugee Convention** and UNHCR provided frameworks, but wealthy states often restricted asylum, and 'burden sharing' remained uneven. Climate change added new displacement pressures.",
          },
          {
            heading: "International criminal justice and new challenges",
            body: "The **International Criminal Court** (2002) was created to prosecute individuals for genocide, war crimes and crimes against humanity — though major powers (US, China, Russia) never ratified it and it faced enforcement limits. Other tribunals addressed Yugoslavia and Rwanda. **Global governance** expanded to health (WHO, COVID-19) and climate (Paris Agreement 2015), framing security as collective and transnational.",
          },
        ],
        keyFormulas: [
          { name: "Atrocity response gap", statement: "Genocide Convention + R2P + peacekeeping vs. Security Council veto + state sovereignty" },
          { name: "ICC limits", statement: "Individual accountability + no immunity for heads of state, but enforcement depends on state cooperation" },
          { name: "New security agenda", statement: "Climate + health + pandemics treated as transnational security threats" },
        ],
        workedExample: {
          problem: "Why did the international community fail to prevent the Rwandan genocide?",
          solution: "The UN peacekeeping mission was under-resourced and withdrawn as violence escalated; the Security Council lacked political will to intervene; and state sovereignty norms blocked action — despite early warnings of impending genocide.",
        },
      },
      questions: [
        {
          id: "his-u6-hrq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The International Criminal Court (ICC) was established primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prosecute individuals for genocide, war crimes and crimes against humanity" },
              { id: "b", text: "Try disputes between states" },
              { id: "c", text: "Enforce international trade law" },
              { id: "d", text: "Replace national courts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ICC", statement: "Court prosecuting individuals for international crimes (est. 2002)." },
            ],
            steps: [
              { reasoning: "The ICC prosecutes individuals for genocide, war crimes and crimes against humanity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prosecute individuals for international crimes",
            commonErrors: ["Confusing the ICC with the ICJ, which settles disputes between states."],
          },
        },
        {
          id: "his-u6-hrq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two consequences of the Rwandan genocide of 1994.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Rwanda 1994", statement: "~800,000 killed in 100 days; UN failure led to major reforms." },
            ],
            steps: [
              { reasoning: "Humanitarian: mass killing and displacement of Tutsis and moderate Hutus; refugee crisis in the region.", marks: 1, markCode: "M" },
              { reasoning: "Political: exposed UN and international failure, leading to R2P debates and changes in peacekeeping doctrine.", marks: 1, markCode: "M" },
              { reasoning: "Legal: contributed to later international criminal accountability efforts (ICTR, ICC).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass casualties and displacement plus reform of international intervention and accountability.",
            commonErrors: ["Describing causes of the genocide instead of its consequences."],
          },
        },
        {
          id: "his-u6-hrq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why international responses to mass atrocities remain inconsistent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atrocity response", statement: "Norms exist but enforcement depends on political will, vetoes and state sovereignty." },
            ],
            steps: [
              { reasoning: "International norms (Genocide Convention, R2P) are widely accepted but non-binding in practice.", marks: 1, markCode: "M" },
              { reasoning: "The Security Council veto allows great powers to block action (e.g. Syria), paralysing the UN.", marks: 1, markCode: "M" },
              { reasoning: "State sovereignty and non-interference norms still constrain intervention despite R2P.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: response depends on geopolitical interest, not just moral principle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Norms exist but vetoes, sovereignty and selective political will produce inconsistency.",
            commonErrors: ["Claiming the international community never intervenes or always does."],
          },
        },
        {
          id: "his-u6-hrq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the effectiveness of international institutions in addressing global challenges after 1991.",
          parts: [
            { label: "a", prompt: "Identify two global challenges that emerged or intensified after the Cold War.", marks: 2 },
            { label: "b", prompt: "Explain the role of the UN and ICC in addressing these challenges.", marks: 3 },
            { label: "c", prompt: "Evaluate the limitations of international institutions in this period.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Global governance", statement: "Institutions set norms and act in some crises, but sovereignty and power politics limit enforcement." },
            ],
            steps: [
              { part: "a", reasoning: "Examples: genocide/atrocity prevention, refugee crises, climate change, pandemics, terrorism.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two challenges identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "UN: peacekeeping, humanitarian missions, norm-setting (R2P, SDGs) — but dependent on member-state consent.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "ICC: prosecutes individuals for international crimes but lacks enforcement power and universal membership.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "WHO and climate agreements show expanded governance in health and environment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limits: Security Council vetoes, non-ratification by major powers (US, China, Russia), sovereignty norms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Selectivity: response depends on geopolitical interest rather than consistent principle.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: institutions set norms effectively but enforce inconsistently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Atrocities, refugees, climate, health. (b) UN norm-setting/peacekeeping; ICC accountability. (c) Vetoes and sovereignty limit enforcement.",
            commonErrors: ["One-sided praise or dismissal of international institutions."],
          },
        },
        {
          id: "his-u6-hrq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Rwandan genocide occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1995" },
              { id: "b", text: "1990" },
              { id: "c", text: "1994" },
              { id: "d", text: "1999" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Rwandan genocide", statement: "The genocide of Tutsis and moderate Hutus took place in 1994." },
            ],
            steps: [
              { reasoning: "The genocide occurred in 1994.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1994",
            commonErrors: ["Confusing Rwanda (1994) with Srebrenica (1995)."],
          },
        },
        {
          id: "his-u6-hrq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately how many people were killed in the Rwandan genocide, and over what period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 8,000 over ten years" },
              { id: "b", text: "About 3,000 in a single day" },
              { id: "c", text: "About 100,000 over five years" },
              { id: "d", text: "About 800,000 in roughly 100 days" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Rwanda toll", statement: "~800,000 Tutsis and moderate Hutus were killed in about 100 days." },
            ],
            steps: [
              { reasoning: "The genocide killed roughly 800,000 people in about 100 days.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ~800,000 in ~100 days",
            commonErrors: ["Confusing the Rwanda toll with Srebrenica's."],
          },
        },
        {
          id: "his-u6-hrq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Srebrenica (1995) is described as Europe's worst atrocity since WWII because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ended the Yugoslav wars" },
              { id: "b", text: "It involved chemical weapons" },
              { id: "c", text: "It was Europe's first genocide" },
              { id: "d", text: "About 8,000 Bosnian Muslim men and boys were executed despite a UN 'safe area'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Srebrenica", statement: "Serb forces executed ~8,000 Bosnian Muslim men and boys in a UN-declared safe area." },
            ],
            steps: [
              { reasoning: "The massacre occurred inside a supposed UN safe area.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ~8,000 executed in a 'safe area'",
            commonErrors: ["Confusing Srebrenica with the Rwandan genocide."],
          },
        },
        {
          id: "his-u6-hrq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The International Criminal Court (ICC) was created in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2015" },
              { id: "b", text: "1994" },
              { id: "c", text: "1945" },
              { id: "d", text: "2002" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "ICC", statement: "The ICC began operating in 2002 to prosecute individuals for genocide, war crimes and crimes against humanity." },
            ],
            steps: [
              { reasoning: "The Rome Statute created the ICC, which began work in 2002.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 2002",
            commonErrors: ["Confusing the ICC with the earlier ad hoc tribunals."],
          },
        },
        {
          id: "his-u6-hrq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which major powers never ratified the ICC Statute?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The United States, China and Russia" },
              { id: "b", text: "France, Germany and Japan" },
              { id: "c", text: "India, Brazil and South Africa" },
              { id: "d", text: "The UK, Canada and Australia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "ICC limits", statement: "The US, China and Russia never joined the ICC, limiting its reach." },
            ],
            steps: [
              { reasoning: "The three non-ratifiers were the US, China and Russia.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** US, China and Russia",
            commonErrors: ["Naming countries that did ratify the Statute."],
          },
        },
        {
          id: "his-u6-hrq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Paris Agreement of 2015 is significant for human rights and global governance because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Treated climate change as a collective transnational security challenge" },
              { id: "b", text: "Ended all wars" },
              { id: "c", text: "Created a world government" },
              { id: "d", text: "Abolished the United Nations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Paris Agreement", statement: "The 2015 accord framed climate change as a shared security and governance problem." },
            ],
            steps: [
              { reasoning: "The Agreement committed states to joint climate action — a new global-governance agenda.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Climate as transnational challenge",
            commonErrors: ["Overstating the Agreement as a binding world government."],
          },
        },
        {
          id: "his-u6-hrq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Rwandan genocide; (b) the Srebrenica massacre; (c) the ICC established.",
          response: { type: "numeric", parts: [{ label: "Rwanda genocide", answer: 1994 }, { label: "Srebrenica", answer: 1995 }, { label: "ICC established", answer: 2002 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Atrocity chronology", statement: "1994 Rwanda; 1995 Srebrenica; 2002 ICC." },
            ],
            steps: [
              { reasoning: "The genocide occurred in 1994.", working: "1994", marks: 1, markCode: "M" },
              { reasoning: "Srebrenica occurred in July 1995.", working: "1995", marks: 1, markCode: "M" },
              { reasoning: "The ICC began operating in 2002.", working: "2002", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1994; 1995; 2002",
            commonErrors: ["Confusing Rwanda (1994) with Srebrenica (1995)."],
          },
        },
        {
          id: "his-u6-hrq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the approximate number killed in Rwanda, in hundreds of thousands; (b) the approximate number of days the genocide lasted; (c) the approximate number executed at Srebrenica.",
          response: { type: "numeric", parts: [{ label: "Rwanda dead (hundred-thousands)", answer: 8 }, { label: "Genocide duration (days)", answer: 100 }, { label: "Srebrenica victims", answer: 8000 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Atrocity figures", statement: "~800,000 dead in ~100 days; ~8,000 at Srebrenica." },
            ],
            steps: [
              { reasoning: "Roughly 800,000 were killed — eight hundred-thousands.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "The genocide lasted about 100 days.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "About 8,000 were executed at Srebrenica.", working: "8000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8; 100; 8000",
            commonErrors: ["Confusing the death tolls of the two atrocities."],
          },
        },
        {
          id: "his-u6-hrq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Rwandan genocide (1994) and Srebrenica (1995); (b) between Srebrenica (1995) and the ICC (2002); (c) between the ICC (2002) and the Paris Agreement (2015).",
          response: { type: "numeric", parts: [{ label: "1994 to 1995", answer: 1 }, { label: "1995 to 2002", answer: 7 }, { label: "2002 to 2015", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1995 - 1994 = 1$ year.", working: "1995 - 1994 = 1", marks: 1, markCode: "M" },
              { reasoning: "$2002 - 1995 = 7$ years.", working: "2002 - 1995 = 7", marks: 1, markCode: "M" },
              { reasoning: "$2015 - 2002 = 13$ years.", working: "2015 - 2002 = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 7; 13 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-hrq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Rwandan genocide; the Srebrenica massacre; the ICC established; the Paris Agreement.",
          response: { type: "numeric", parts: [{ label: "Rwanda genocide", answer: 1 }, { label: "Srebrenica", answer: 2 }, { label: "ICC established", answer: 3 }, { label: "Paris Agreement", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Human rights chronology", statement: "1994 → 1995 → 2002 → 2015." },
            ],
            steps: [
              { reasoning: "Rwanda (1994) is earliest.", working: "1994", marks: 1, markCode: "M" },
              { reasoning: "Srebrenica (1995) followed Rwanda.", working: "1995", marks: 1, markCode: "M" },
              { reasoning: "The ICC (2002) preceded the Paris Agreement (2015); all ordered correctly.", working: "2002 < 2015", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rwanda 1, Srebrenica 2, ICC 3, Paris 4",
            commonErrors: ["Placing Srebrenica before Rwanda."],
          },
        },
        {
          id: "his-u6-hrq15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the 1951 Refugee Convention; (b) the Rwandan genocide; (c) the ICC established.",
          response: { type: "numeric", parts: [{ label: "Refugee Convention", answer: 1951 }, { label: "Rwanda genocide", answer: 1994 }, { label: "ICC established", answer: 2002 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Refugee and justice chronology", statement: "1951 Convention; 1994 genocide; 2002 ICC." },
            ],
            steps: [
              { reasoning: "The Refugee Convention dates from 1951.", working: "1951", marks: 1, markCode: "M" },
              { reasoning: "The genocide occurred in 1994.", working: "1994", marks: 1, markCode: "M" },
              { reasoning: "The ICC began in 2002.", working: "2002", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1951; 1994; 2002",
            commonErrors: ["Confusing the Convention's date with the ICC's."],
          },
        },
        {
          id: "his-u6-hrq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the 1951 Refugee Convention; the Rwandan genocide; the Srebrenica massacre; the ICC established.",
          response: { type: "numeric", parts: [{ label: "Refugee Convention", answer: 1 }, { label: "Rwanda genocide", answer: 2 }, { label: "Srebrenica", answer: 3 }, { label: "ICC established", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Human rights chronology", statement: "1951 → 1994 → 1995 → 2002." },
            ],
            steps: [
              { reasoning: "The Convention (1951) is earliest.", working: "1951", marks: 1, markCode: "M" },
              { reasoning: "Rwanda (1994) preceded Srebrenica (1995).", working: "1994 < 1995", marks: 1, markCode: "M" },
              { reasoning: "The ICC (2002) is latest; all ordered correctly.", working: "1995 < 2002", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Convention 1, Rwanda 2, Srebrenica 3, ICC 4",
            commonErrors: ["Placing Srebrenica before Rwanda."],
          },
        },
      ],
    },
  ],
};
