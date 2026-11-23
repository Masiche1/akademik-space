import type { Lesson } from "../../../types.ts";

const SOCIAL_POST = {
  title: "Social Media Post",
  author: "@LocalNewsDaily",
  source: "Original social media post",
  text: "BREAKING: Council confirms cycle lane will DEFINITELY be scrapped next month!!! Residents are FURIOUS after leaked emails show planners ignored safety warnings!!! Share this before they delete it!!! #MarshLane #Cycling",
};

const NEWS_ARTICLE = {
  title: "Article: 'Cycle Lane Plan Under Review'",
  author: "By R. Calloway, Education Correspondent",
  source: "Original news article",
  text: "The council confirmed on Tuesday that the proposed cycle lane on Marsh Lane is 'under review', but declined to say whether the scheme would proceed. A spokesperson said the project was 'being assessed against current budgets and resident feedback'.\n\nThe announcement follows months of consultation, during which the residents' association submitted a 400-signature petition. Local campaigner Priya Shah described the review as 'a step in the right direction' but said the association would 'keep pushing for a safe route to the school'.\n\nNo decision is expected before the autumn budget meeting. Cycling UK has called for the scheme to be prioritised, citing a 40% rise in school-cycle journeys in the area since 2022.",
};

const WILDLIFE_POST = {
  title: "Social Media Post",
  author: "@GreenFactsHub",
  source: "Original social media post",
  text: "Study proves owls are going extinct because of 5G towers!!! Scientists KNEW and stayed silent!!! Wake up sheeple, demand answers!!! Link in bio (donate to our cause)!!!",
};

const WILDLIFE_ARTICLE = {
  title: "Article: 'New Report on Owl Populations'",
  author: "By J. Mensah, Environment Reporter",
  source: "Original news article",
  text: "A report published by the British Trust for Ornithology has found that barn owl numbers in the study region have fallen 18% since 2015, a decline researchers attribute mainly to loss of rough grazing land and reduced vole populations.\n\nThe report does not link the decline to electromagnetic radiation or telecommunications infrastructure. Dr Helen Rao, who led the study, said: 'Habitat loss is the driver we can act on now. It's important we focus resources where the evidence points.'\n\nConservation groups have welcomed the findings and called for agri-environment schemes to include owl-friendly field margins. The trust plans a follow-up survey in 2026.",
};

export const lesson82: Lesson = {
  id: "el11-u8-lesson-8-2",
  code: "8-2",
  title: "Evaluating Sources and Reliability",
  goal: "I CAN evaluate the reliability of sources and identify the techniques used to spread misinformation.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO2"],

  vocabulary: [
    { term: "Source reliability", definition: "How far a source can be trusted, judged by authority, purpose, transparency and corroboration." },
    { term: "Corroboration", definition: "Independent confirmation of a claim by another source." },
    { term: "Misinformation", definition: "False or misleading information shared, whether deliberately or not." },
    { term: "Clickbait", definition: "Headlines or posts designed to attract clicks through exaggeration or withheld information." },
    { term: "Confirmation bias", definition: "The tendency to accept information that supports existing beliefs." },
    { term: "Fact versus opinion", definition: "Distinguishing checkable claims from evaluative judgements." },
  ],
  concepts: [
    {
      id: "el11-u8-source-reliability",
      title: "Judging source reliability",
      skill: "Evaluate a source's reliability using authority, purpose, transparency and corroboration.",
      lesson: {
        sections: [
          {
            heading: "The reliability checklist",
            body: "Ask four questions of any source. **Who** produced it — and what is their expertise or motive? **Why** — what does the source gain from this message? **How** — are claims sourced, dated and checkable? **Can it be corroborated** — does an independent source say the same? A charity's annual report is reliable for its finances but biased about its own impact; a named correspondent in a news outlet is more accountable than an anonymous account.",
          },
          {
            heading: "Comparing sources",
            body: "The strongest evaluation compares versions of the same story. A social post says 'BREAKING... DEFINITELY scrapped'; a news article says 'under review... no decision before autumn'. Same event, different reliability: the article names a spokesperson, gives context (petition, dates) and avoids certainty the facts don't support. The post uses caps, exclamation marks, 'leaked emails' with no link and a donation call — classic low-reliability markers.",
          },
          {
            heading: "Building the answer",
            body: "Structure evaluation as: **claim** → **source features** → **verdict with qualification**. 'More reliable because...' needs at least two features (named source, corroboration, balanced framing); 'less reliable because...' needs red flags (anonymity, unverifiable claims, emotional pressure).",
          },
        ],
        keyFormulas: [
          { name: "Authority", statement: "Does the source have relevant expertise or a track record of accuracy?" },
          { name: "Purpose and motive", statement: "What does the source gain — money, clicks, votes — from this message?" },
          { name: "Corroboration", statement: "Can an independent source confirm the claim?" },
        ],
        workedExample: {
          problem: "Which source is more reliable on the cycle lane — the social post or the news article?",
          solution: "The news article is more reliable. It names its author and a council spokesperson, gives verifiable details (400-signature petition, autumn budget meeting, 40% statistic attributed to Cycling UK) and hedges appropriately ('under review', 'no decision expected'). The social post offers none of this: anonymous handle, unverifiable 'leaked emails', certainty ('DEFINITELY', 'FURIOUS') the facts contradict, and an embedded donation link revealing its purpose. The article can be checked; the post cannot.",
        },
      },
      questions: [
        {
          id: "el11-u8-source-reliability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NEWS_ARTICLE,
          stem: "Which feature most increases the reliability of the news article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses strong headline language." },
              { id: "b", text: "It names its author and sources its claims." },
              { id: "c", text: "It mentions a charity." },
              { id: "d", text: "It is shorter than the social post." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source reliability", statement: "Trustworthiness judged by accountability and checkability." },
            ],
            steps: [
              { reasoning: "The article has a named correspondent, quotes a council spokesperson and Cycling UK, and gives checkable details (petition size, dates) — accountability makes claims verifiable.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It names its author and sources its claims.",
            commonErrors: ["Choosing (a) — strong language is not a reliability feature.", "Choosing (c) — mentioning a charity says nothing about accuracy."],
          },
        },
        {
          id: "el11-u8-source-reliability-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: SOCIAL_POST,
          stem: "Identify two features of the social post that suggest it is unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Red flags", statement: "Features that mark a source as untrustworthy: anonymity, unverifiable claims, emotional pressure." },
            ],
            steps: [
              { reasoning: "The post is anonymous ('@LocalNewsDaily') and makes an unverifiable claim — 'leaked emails' with no link or evidence.", evidence: "leaked emails", marks: 1, markCode: "AO1" },
              { reasoning: "It uses certainty and emotional pressure ('DEFINITELY', 'FURIOUS', 'before they delete it') plus a donation link, revealing a persuasive rather than informative purpose.", evidence: "donate to our cause", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The post is anonymous, cites unverifiable 'leaked emails', asserts certainty ('DEFINITELY scrapped') the facts contradict, and embeds a donation appeal.",
            commonErrors: ["Saying 'it's on social media so it's fake' — evaluate features, not platform.", "Missing the embedded fundraising motive."],
          },
        },
        {
          id: "el11-u8-source-reliability-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: WILDLIFE_POST,
          stem: "Explain how the owl social post misleads its readers, referring to specific claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Misinformation markers", statement: "Exaggerated certainty, conspiracy framing, unverifiable authority and hidden agendas signal misleading content." },
            ],
            steps: [
              { reasoning: "'Study proves' overstates — real studies show correlation and limits; 'proves' claims certainty science rarely offers.", evidence: "Study proves", marks: 1, markCode: "AO2" },
              { reasoning: "The post invents a cause — '5G towers' — which the actual research does not support, substituting a dramatic claim for the real finding (habitat loss).", evidence: "5G towers", marks: 1, markCode: "AO1" },
              { reasoning: "'Scientists KNEW and stayed silent' is a conspiracy frame, and 'donate to our cause' reveals the post's true purpose is fundraising, not information.", evidence: "donate to our cause", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The post overclaims ('Study proves'), substitutes an unsupported cause (5G) for the real one (habitat loss), uses conspiracy framing and hides a fundraising motive.",
            commonErrors: ["Calling it 'fake news' without analysing how it misleads.", "Missing the donation link's purpose."],
          },
        },
        {
          id: "el11-u8-source-reliability-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: WILDLIFE_ARTICLE,
          stem: "A pupil says the owl article is 'more reliable because it sounds scientific'. Evaluate this judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative argument", statement: "Weigh a claim against evidence from the text." },
              { kind: "technique", name: "Surface versus substance", statement: "Scientific-sounding language is not the same as scientific reliability." },
            ],
            steps: [
              { reasoning: "Partial truth: the article does sound authoritative — named author, named trust, quoted expert (Dr Helen Rao), specific figure (18% decline).", marks: 1, markCode: "AO1" },
              { reasoning: "But 'sounds scientific' is not the criterion: the reliability comes from named, checkable sources and hedged claims, not tone.", marks: 2, markCode: "AO2" },
              { reasoning: "The article also discloses limits — 'does not link the decline to electromagnetic radiation' — which is transparency, a real reliability marker the pupil misses.", marks: 1, markCode: "AO1" },
              { reasoning: "Verdict: right conclusion, weak reasoning — reliability rests on accountability and corroboration, not on sounding scientific.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Right conclusion, weak reasoning: the article is reliable because of named sources, checkable figures and disclosed limits — not because it 'sounds scientific'.",
            commonErrors: ["Agreeing that tone = reliability.", "Dismissing the pupil entirely — the conclusion is correct."],
          },
        },
        {
          id: "el11-u8-source-reliability-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOCIAL_POST,
          stem: "Compare the social post and the news article on the cycle lane. You should consider purpose, sourcing and framing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel comparison", statement: "Keep the two texts strictly parallel: same point about each before moving on." },
              { kind: "technique", name: "Purpose analysis", statement: "What each source gains determines how it treats the facts." },
            ],
            steps: [
              { reasoning: "Purposes differ: the post seeks shares and donations (embedded link, 'Share this'); the article informs readers about a process.", marks: 1, markCode: "AO1" },
              { reasoning: "Sourcing: the article quotes a spokesperson, the residents' association and Cycling UK; the post offers only 'leaked emails' with no evidence.", marks: 1, markCode: "AO1" },
              { reasoning: "Framing: the article hedges ('under review', 'no decision expected'); the post asserts certainty ('DEFINITELY scrapped', 'FURIOUS').", marks: 1, markCode: "AO2" },
              { reasoning: "Detail level: the article gives context — petition, consultation, budget date; the post gives drama — caps, exclamation marks, urgency.", marks: 1, markCode: "AO1" },
              { reasoning: "The article can be checked against the council; the post cannot be verified at all.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall the article treats readers as citizens needing accurate process; the post treats them as an audience to be mobilised.", marks: 1, markCode: "AO1" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Compares purpose, sourcing and framing systematically, reaching a justified reliability judgement." },
            { level: "Level 2", marks: "2-3", descriptor: "Identifies some reliability differences but comparison is partial or judgement unsupported." },
            { level: "Level 1", marks: "1", descriptor: "Asserts one source is better without comparative analysis." }
          ],
finalAnswer: "The article informs with named sources, hedged claims and verifiable detail; the post mobilises with anonymous sourcing, certainty and a donation appeal — same event, opposite reliability.",
            commonErrors: ["Comparing length or style rather than purpose and sourcing.", "Missing the embedded fundraising motive."],
          },
        },
        {
          id: "el11-u8-source-reliability-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: NEWS_ARTICLE,
          stem: "Explain why 'no decision is expected before the autumn budget meeting' makes the article more trustworthy than a post claiming the lane 'will DEFINITELY be scrapped'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hedged versus absolute claims", statement: "Precision about uncertainty signals honesty; absolute certainty often signals fabrication." },
            ],
            steps: [
              { reasoning: "The article states what is known — 'under review' — and when a decision might come, matching the facts available.", evidence: "under review", marks: 1, markCode: "AO1" },
              { reasoning: "The post claims a definite outcome ('DEFINITELY be scrapped') that the article shows is not yet decided — an unverifiable absolute.", evidence: "DEFINITELY", marks: 1, markCode: "AO2" },
              { reasoning: "Hedging ('declined to say whether', 'no decision expected') demonstrates the writer respects what can and cannot be known — a mark of accountability.", marks: 1, markCode: "AO1" },
              { reasoning: "Overall, calibrated uncertainty is more credible than confident fabrication.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The article's hedged, time-bound claim matches the facts; the post's absolute 'DEFINITELY' asserts an undecided outcome — calibrated uncertainty signals trustworthiness.",
            commonErrors: ["Thinking certainty sounds more authoritative.", "Missing that 'under review' is the accurate state."],
          },
        },
      ],
    },
    {
      id: "el11-u8-misinformation",
      title: "Spotting misinformation techniques",
      skill: "Identify the techniques used to spread misinformation and explain how to verify claims.",
      lesson: {
        sections: [
          {
            heading: "How misinformation works",
            body: "Misinformation spreads through predictable techniques: **fabricated authority** ('Scientists KNEW'), **false precision** ('80% of samples'), **conspiracy framing** ('they stayed silent'), **emotional hijack** (caps, exclamation, 'WAKE UP'), **false balance** (giving a fringe claim equal weight) and **embedded agenda** (donation links, petition drives).",
          },
          {
            heading: "Fact, opinion and everything between",
            body: "Separate **checkable claims** ('owl numbers fell 18%') from **opinions** ('this is outrageous') and **predictions** ('will go extinct'). Checkable claims can be verified against sources; opinions cannot be 'true' or 'false' but can be well or badly supported. Misinformation exploits the grey zone — a true statistic wrapped in a false conclusion.",
          },
          {
            heading: "Verifying a claim",
            body: "The verification habit: **pause** (does this feel designed to provoke?), **trace** (who originally said this?), **corroborate** (does an independent source agree?), **contextualise** (is this figure from the study or invented?). Five minutes of checking defeats most misinformation.",
          },
        ],
        keyFormulas: [
          { name: "Fabricated authority", statement: "Invoking unnamed experts or 'they knew' to borrow credibility." },
          { name: "False precision", statement: "Specific-looking numbers used to simulate rigour without a checkable source." },
          { name: "True statistic, false conclusion", statement: "A real figure attached to an unsupported inference — the most dangerous misinformation form." },
        ],
        workedExample: {
          problem: "How does the owl post exploit a real concern to spread misinformation?",
          solution: "It takes a genuine issue (owl decline is real — the article confirms an 18% fall) and grafts on a fabricated cause (5G towers), a conspiracy ('scientists stayed silent') and a false authority ('Study proves'). The kernel of truth makes it shareable; the invented parts make it false. This 'true statistic, false conclusion' pattern is the deadliest because it survives casual fact-checking.",
        },
      },
      questions: [
        {
          id: "el11-u8-misinformation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WILDLIFE_POST,
          stem: "Which technique does the owl post use to manufacture credibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It quotes a named scientific study." },
              { id: "b", text: "It invokes unnamed authority — 'Study proves', 'Scientists KNEW'." },
              { id: "c", text: "It provides links to peer-reviewed papers." },
              { id: "d", text: "It cites specific dates and locations." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fabricated authority", statement: "Invoking unnamed experts to borrow credibility." },
            ],
            steps: [
              { reasoning: "'Study proves' and 'Scientists KNEW' invoke authority without naming any study or scientist — fabricated credibility.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It invokes unnamed authority — 'Study proves', 'Scientists KNEW'.",
            commonErrors: ["Choosing (a) — no study is actually named or cited.", "Missing that vague authority is the technique."],
          },
        },
        {
          id: "el11-u8-misinformation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: WILDLIFE_POST,
          stem: "Identify two emotional manipulation techniques in the owl post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotional hijack", statement: "Caps, urgency and accusatory framing bypass rational evaluation." },
            ],
            steps: [
              { reasoning: "All-caps and exclamation marks ('BREAKING'-style urgency, '!!!') create artificial alarm that short-circuits scrutiny.", evidence: "!!!", marks: 1, markCode: "AO2" },
              { reasoning: "'Wake up sheeple, demand answers' uses in-group flattery plus accusation, making readers feel enlightened for sharing.", evidence: "Wake up sheeple", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The post uses artificial urgency (caps, exclamation marks) and accusatory in-group framing ('Wake up sheeple') to bypass rational judgement.",
            commonErrors: ["Calling it 'just enthusiastic writing'.", "Missing the manipulation intent."],
          },
        },
        {
          id: "el11-u8-misinformation-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: WILDLIFE_ARTICLE,
          stem: "The owl article says the report 'does not link the decline to electromagnetic radiation'. Explain why this sentence increases the article's reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Disclosure of limits", statement: "Admitting what evidence does NOT show is a marker of honest reporting." },
            ],
            steps: [
              { reasoning: "By explicitly denying the 5G link, the article separates the real finding (habitat loss) from the viral claim — refusing to let a false conclusion ride on a true statistic.", evidence: "does not link the decline to electromagnetic radiation", marks: 1, markCode: "AO2" },
              { reasoning: "It shows the writer checked the report's actual conclusions rather than recycling the sensational version.", marks: 1, markCode: "AO1" },
              { reasoning: "It pre-empts the reader's likely misconception — exactly the verification habit misinformation tries to prevent.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The sentence discloses the report's actual limits, separating the true finding (habitat loss) from the viral false claim (5G) — a transparency that marks reliable reporting.",
            commonErrors: ["Reading it as the article promoting 5G fears — it does the opposite.", "Missing the fact-checking function."],
          },
        },
        {
          id: "el11-u8-misinformation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: WILDLIFE_POST,
          stem: "Explain how the owl post uses a 'true statistic, false conclusion' structure to mislead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "True statistic, false conclusion", statement: "A real figure attached to an unsupported inference — the most durable misinformation form." },
            ],
            steps: [
              { reasoning: "The underlying concern is real: owl numbers ARE falling — the post's 'extinction' claim exaggerates but isn't invented from nothing.", marks: 1, markCode: "AO1" },
              { reasoning: "The false graft is the cause: '5G towers' appears nowhere in the actual research, which attributes decline to habitat loss.", evidence: "5G towers", marks: 1, markCode: "AO2" },
              { reasoning: "'Study proves' lends the false cause borrowed authority — the kernel of truth makes the whole claim shareable.", marks: 1, markCode: "AO1" },
              { reasoning: "This structure survives casual checking: a reader who verifies 'are owls declining?' finds truth and stops, never checking the cause.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall it demonstrates why verification must check the CONCLUSION, not just the premise.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The post attaches a real concern (owl decline) to a fabricated cause (5G) and borrowed authority ('Study proves') — true premise, false conclusion, built to survive shallow fact-checks.",
            commonErrors: ["Calling the whole post 'true' or 'false' — it's structurally mixed.", "Missing why this pattern is dangerous."],
          },
        },
        {
          id: "el11-u8-misinformation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SOCIAL_POST,
          stem: "A friend shares the cycle-lane social post saying 'the council definitely scrapped it, look at this!' Write a response you could send them that corrects the claim without attacking them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Correction etiquette", statement: "Correct misinformation by adding context, not by shaming the sharer." },
              { kind: "technique", name: "Evidence-led correction", statement: "Replace the false claim with the accurate, sourced version." },
            ],
            steps: [
              { reasoning: "Acknowledge the concern behind the share ('I can see why that post is worrying') before correcting — attacks harden beliefs.", marks: 1, markCode: "AO2" },
              { reasoning: "State the accurate position with the article's sourcing: the lane is 'under review', no decision before autumn.", evidence: "under review", marks: 1, markCode: "AO1" },
              { reasoning: "Point out the specific red flags gently: anonymous account, 'leaked emails' with no link, 'DEFINITELY' certainty.", marks: 1, markCode: "AO1" },
              { reasoning: "Offer the better source rather than just denial — share the news article link so the friend can verify independently.", marks: 1, markCode: "AO2" },
              { reasoning: "Keep tone collaborative: 'worth checking the council's actual announcement' frames correction as help, not correction.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall the response models the verification habit instead of demanding trust.", marks: 1, markCode: "AO1" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Correction acknowledges the friend's concern, states sourced facts, names the red flags and offers a checkable alternative — correcting the claim, not the person." },
            { level: "Level 2", marks: "2-3", descriptor: "Corrects the factual claim but with a preachy tone, missing red flags, or no alternative source offered." },
            { level: "Level 1", marks: "1", descriptor: "Denies the claim without evidence or attacks the friend." }
          ],
finalAnswer: "A good response acknowledges the worry, states the sourced facts ('under review', decision in autumn), names the red flags (anonymous, unverifiable 'leaks', false certainty) and offers the checkable article — correcting the claim, not the person.",
            commonErrors: ["Mocking the friend — guarantees defensiveness.", "Saying 'that's fake' without evidence — replaces one unsupported claim with another."],
          },
        },
        {
          id: "el11-u8-misinformation-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: NEWS_ARTICLE,
          stem: "List the verification steps you would take before believing the claim 'the council has DEFINITELY scrapped the cycle lane'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verification habit", statement: "Pause, trace, corroborate, contextualise — the four-step check." },
            ],
            steps: [
              { reasoning: "Pause and note the red flags: all-caps certainty, anonymous account, 'leaked emails' with no link, embedded donation appeal.", marks: 1, markCode: "AO1" },
              { reasoning: "Trace the claim to its origin — 'leaked emails' from whom? When? The post provides nothing checkable.", marks: 1, markCode: "AO2" },
              { reasoning: "Corroborate with an independent source: the news article quotes a council spokesperson saying 'under review' — direct contradiction.", evidence: "under review", marks: 1, markCode: "AO1" },
              { reasoning: "Contextualise: 'no decision before autumn' means 'scrapped' is currently impossible — the claim fails the timeline test.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Flag the red flags, trace the 'leaks' to nothing, corroborate against the article's 'under review' statement, and note the timeline makes 'scrapped' impossible — the claim fails verification.",
            commonErrors: ["Sharing first, checking never.", "Treating the article as just 'another opinion'."],
          },
        },
      ],
    },
  ],
  notes: [
    "In Section B, source-evaluation questions reward naming specific features — 'anonymous account', 'unverified claim' — not vague verdicts like 'untrustworthy'.",
    "Practise the four-step check (pause, trace, corroborate, contextualise) on every viral claim you see.",
  ],
};
