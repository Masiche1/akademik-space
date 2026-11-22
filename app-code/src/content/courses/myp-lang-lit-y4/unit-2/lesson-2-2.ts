import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mll4-u2-lesson-2-2",
  code: "2-2",
  title: "Persuasive Techniques and Modality",
  goal: "I CAN identify persuasive techniques and modal verbs in texts and explain how they influence the audience.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Persuasive technique", definition: "A language choice designed to influence the reader — emotive language, rhetorical questions, repetition." },
    { term: "Modal verb", definition: "Verbs expressing possibility, necessity or obligation — can, must, should, might, will." },
    { term: "Emotive language", definition: "Words chosen to trigger emotion — 'devastating', 'beautiful', 'cruel'." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Direct address", definition: "Speaking directly to the reader — 'you', 'we', 'our'." },
  ],
  concepts: [
    {
      id: "mll4-u2-persuasive-techniques",
      title: "Persuasive techniques",
      skill: "Identify and analyse persuasive techniques in texts.",
      lesson: {
        sections: [
          {
            heading: "Common persuasive techniques",
            body: "Key techniques: **emotive language** ('heartbreaking'), **rhetorical questions** ('Do we really want this?'), **repetition** ('We must act. We must change. We must win.'), **direct address** ('You can make a difference'), **rule of three** ('government of the people, by the people, for the people'), **hyperbole** ('the best ever').",
          },
          {
            heading: "How techniques work",
            body: "Each technique has a **purpose**: emotive language creates feeling; rhetorical questions make the audience think; repetition creates rhythm and emphasis; rule of three is memorable. Identify the technique, then ask **what effect** it has on this audience.",
          },
          {
            heading: "Beyond identification",
            body: "Don't just name techniques — explain their **effect**. 'The rhetorical question makes readers question their own position.' 'The repetition of 'must' creates urgency.' Technique + audience + effect = strong analysis.",
          },
        ],
        keyFormulas: [
          { name: "Persuasion analysis", statement: "Technique + Audience + Effect = persuasive impact." },
        ],
        workedExample: {
          problem: "'Don't let our children suffer. Act now!' — identify two techniques.",
          solution: "Emotive language ('suffer') creates guilt/fear; imperative 'Act now!' is direct command creating urgency.",
        },
      },
      questions: [
        {
          id: "mll4-u2-persuasive-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question in a quiz" },
              { id: "b", text: "A question asked for effect, not expecting an answer" },
              { id: "c", text: "A question expecting a factual answer" },
              { id: "d", text: "A question with a mark scheme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhetorical question", statement: "A question asked for effect, not expecting an answer." }],
            steps: [{ reasoning: "Criterion A (Analysing): rhetorical question = for effect — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A question asked for effect",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Advertisement",
            author: "Written for Akademik Space",
            text: "'Tired of slow internet? Our lightning-fast fibre will change your life. Join thousands of satisfied customers — act now!'",
          },
          stem: "Identify two persuasive techniques in this advertisement and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive techniques", statement: "Emotive language, rhetorical questions, urgency create persuasion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): rhetorical question 'Tired of slow internet?' — engages reader's problem directly.", evidence: "Tired of slow internet?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): emotive language 'change your life' + urgency 'act now' — creates desire and pressure.", evidence: "change your life", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhetorical question engages problem; 'change your life' + 'act now' create desire and urgency.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "'We must act. We must change. We must fight for our children's future. Government of the people, by the people, for the people — that is the America we deserve.'",
          },
          stem: "Analyse the persuasive techniques used here — identify at least two and explain their combined effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition and rule of three", statement: "Repetition creates rhythm/emphasis; rule of three is memorable." }],
            steps: [
              { reasoning: "Criterion A (Analysing): repetition — 'We must act/change/fight' creates urgency and rhythm.", evidence: "We must act. We must change. We must fight", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): rule of three — 'government of the people, by the people, for the people' is memorable and echoes Lincoln.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): combined effect — builds momentum and emotional conviction, making the argument feel inevitable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition creates urgency; rule of three is memorable; combined effect builds momentum and conviction.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the persuasive technique in: 'Every minute you delay, another child goes hungry.'", marks: 1 },
            { label: "b", prompt: "Explain its effect on the reader.", marks: 2 },
            { label: "c", prompt: "Suggest a different technique that could replace it and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Emotive + urgency", statement: "Time pressure + emotional imagery creates urgency." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): emotive language + urgency — 'another child goes hungry' creates guilt/time pressure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): makes reader feel responsible and time-pressured — delays feel costly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'every minute' + 'another' creates escalating urgency.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): alternative — e.g. statistical evidence or direct appeal; explains why it might be more convincing.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): justifies choice — different technique appeals to logic vs emotion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Emotive language + urgency. (b) Creates guilt/time pressure. (c) e.g. statistics — appeals to logic rather than emotion.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is emotive language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words from foreign languages" },
              { id: "b", text: "Words that trigger emotion — 'heartbreaking', 'beautiful'" },
              { id: "c", text: "Words that are difficult to spell" },
              { id: "d", text: "Long words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Emotive language", statement: "Words chosen to trigger emotion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): emotive = emotional words — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Words that trigger emotion",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Advertisement",
            author: "Written for Akademik Space",
            text: "'Tired of boring meals? Our new meal kit brings restaurant-quality food to your door. Join 50,000 happy customers — try it free for a week!'",
          },
          stem: "Identify two persuasive techniques and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive techniques", statement: "Emotive language, social proof, free trial create persuasion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Tired of boring meals?' — rhetorical question engages reader's problem.", evidence: "Tired of boring meals?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): '50,000 happy customers' — social proof; 'try it free' — reduces risk/urgency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhetorical question + social proof ('50,000 customers') + free trial — engages problem and reduces risk.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'rule of three' in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using three parallel items for rhythm and memorability" },
              { id: "b", text: "Repeating one word three times" },
              { id: "c", text: "Writing three paragraphs" },
              { id: "d", text: "Using three long words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Rule of three", statement: "Using three parallel items — memorable and rhythmic." }],
            steps: [
              { reasoning: "Criterion A (Analysing): three parallel items — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): creates rhythm and memorability — easier to recall than two or four.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Using three parallel items for rhythm and memorability",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "'We did not come here to play. We came to fight. We came to win. Our children deserve better — and we will not rest until they have it.'",
          },
          stem: "Identify and analyse the persuasive techniques used here.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive techniques", statement: "Repetition, rule of three, direct address create urgency and conviction." }],
            steps: [
              { reasoning: "Criterion A (Analysing): repetition — 'We did not come here to... We came to...' creates rhythm and emphasis.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): rule of three — 'play, fight, win' — memorable parallel structure.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Our children deserve better' — emotive language + direct address; 'will not rest' — strong commitment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition + rule of three + emotive language — builds urgency and conviction.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Do we really want our children to suffer?'" },
              { id: "b", text: "'What time is it?'" },
              { id: "c", text: "'Where is the library?'" },
              { id: "d", text: "'How many students are there?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhetorical question", statement: "Question for effect, not expecting answer." }],
            steps: [
              { reasoning: "Criterion A (Analysing): (b) is rhetorical — used for emotional effect, not information.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others are genuine information-seeking questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 'Do we really want our children to suffer?'",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Appeal",
            author: "Written for Akademik Space",
            text: "'Imagine your child coming home hungry because there's no food. Imagine them crying because mum can't afford milk. We can change this — but only if you act today.'",
          },
          stem: "Analyse the persuasive techniques and their combined effect on the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Emotive persuasion", statement: "Emotive imagery + direct address + urgency create powerful persuasion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): emotive language — 'hungry', 'crying', 'can't afford milk' — triggers guilt and empathy.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): repetition — 'Imagine...' twice — makes reader visualise the scenario.", evidence: "Imagine your child coming home hungry", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): direct address 'you' + urgency 'act today' — personal responsibility and time pressure.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): combined effect — reader feels guilt, empathy and urgency — strong emotional persuasion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emotive imagery + repetition + direct address + urgency — creates guilt, empathy and pressure to act.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Campaign",
            author: "Written for Akademik Space",
            text: "'Stop plastic pollution. Every bottle you throw away takes 450 years to decompose. Our oceans are drowning in plastic — and your choices matter. Switch to reusable bottles today.'",
          },
          parts: [
            { label: "a", prompt: "Identify three persuasive techniques used.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each technique.", marks: 2 },
            { label: "c", prompt: "Is this more effective at persuading or informing? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive techniques", statement: "Statistics, emotive language, direct address, call to action." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): techniques — statistics ('450 years'), emotive language ('drowning'), direct address ('your choices'), call to action ('Switch today').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): at least three correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): statistics create urgency ('450 years'); 'drowning' creates emotional impact; 'your choices' personalises responsibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): call to action gives clear next step — 'Switch to reusable bottles today'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): more persuasive — emotional appeal + urgency + call to action outweigh informational aspect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Statistics, emotive language, direct address, call to action. (b) Urgency, emotion, personal responsibility, clear action. (c) Persuasive — emotional appeal dominates.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'direct address' in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing in the third person" },
              { id: "b", text: "Writing long sentences" },
              { id: "c", text: "Using formal titles" },
              { id: "d", text: "Speaking directly to the reader — 'you', 'we', 'our'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Direct address", statement: "Speaking directly to the reader using 'you', 'we', 'our'." }],
            steps: [
              { reasoning: "Criterion A (Analysing): direct address = 'you'/'we' — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Speaking directly to the reader — 'you', 'we', 'our'",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "'Warning: This product contains nuts. Not suitable for anyone with allergies. Read the label carefully before use.'",
          },
          stem: "Is this text persuasive? Identify any persuasive techniques and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Informative vs persuasive", statement: "Warnings inform rather than persuade — but may use urgency." }],
            steps: [
              { reasoning: "Criterion A (Analysing): primarily informative — states facts (nuts, allergies, label).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Warning', 'carefully' add urgency but no persuasion to buy/act — it's a safety notice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mostly informative — 'Warning' adds urgency but no persuasive intent; it's a safety notice.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which technique creates urgency in persuasion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using long words" },
              { id: "b", text: "Describing the product" },
              { id: "c", text: "Time pressure — 'act now', 'limited time', 'last chance'" },
              { id: "d", text: "Listing ingredients" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Urgency", statement: "Time pressure creates urgency — 'act now', 'limited time'." }],
            steps: [
              { reasoning: "Criterion A (Analysing): time pressure = urgency — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): makes reader feel they must act immediately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Time pressure — 'act now', 'limited time', 'last chance'",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Petition",
            author: "Written for Akademik Space",
            text: "'Our school library is closing. The books will be sold. The reading corner will become a storage room. Is this what we want for our children? Sign the petition — every signature matters.'",
          },
          stem: "Analyse the persuasive techniques and their effect on the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasive techniques", statement: "Emotive language, rhetorical question, direct address, call to action." }],
            steps: [
              { reasoning: "Criterion A (Analysing): emotive language — 'closing', 'sold', 'storage room' — creates loss and sadness.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): rhetorical question — 'Is this what we want?' — makes reader question and engage.", evidence: "Is this what we want for our children?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): direct address + call to action — 'Sign the petition' — clear next step; 'every signature matters' — makes reader feel important.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): combined effect — guilt, engagement, empowerment — strong persuasion to sign.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emotive language + rhetorical question + call to action — creates guilt, engagement, and motivation to sign.",
          },
        },
        {
          id: "mll4-u2-persuasive-techniques-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two advertisements.",
          extract: {
            title: "Two Ads",
            author: "Written for Akademik Space",
            text: "Ad A: 'The best phone ever made. Revolutionary camera. Unbeatable performance. Order now!'\n\nAd B: 'Our phone lasts 2 days on one charge — tested and proven. 500,000 users agree. Try it free for 30 days.'",
          },
          parts: [
            { label: "a", prompt: "Identify the persuasive technique used in each ad.", marks: 2 },
            { label: "b", prompt: "Compare their effectiveness.", marks: 2 },
            { label: "c", prompt: "Which ad would you trust more? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Technique and credibility", statement: "Evidence-based claims persuade more than unsupported superlatives." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A uses hyperbole/superlatives ('best ever', 'revolutionary', 'unbeatable') + urgency ('Order now').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): B uses evidence ('tested and proven', '500,000 users') + risk reduction ('free for 30 days').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A is emotional/urgent but unconvincing — no evidence; B is credible with specifics.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A may grab attention; B persuades through credibility.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B more trustworthy — verifiable claims vs A's empty superlatives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = hyperbole/urgency; B = evidence/risk reduction. (b) A grabs attention; B persuades credibly. (c) B — verifiable claims.",
          },
        },
      ],
    },
    {
      id: "mll4-u2-modality",
      title: "Modal verbs and certainty",
      skill: "Analyse how modal verbs express certainty, obligation and possibility, and how they shape persuasive force.",
      lesson: {
        sections: [
          {
            heading: "What modal verbs do",
            body: "Modal verbs show **attitude**: **must/should** = obligation ('You must act'), **can/could/might** = possibility ('This might work'), **will/would** = future/certainty, **may** = permission/possibility. They reveal how certain or forceful the writer is.",
          },
          {
            heading: "Modality and persuasion",
            body: "Strong modality ('must', 'will') = confident, urgent, commanding. Weak modality ('might', 'could') = cautious, tentative, polite. Persuasive texts often use strong modality to push action: 'We must act now.' But overuse can sound arrogant — skilled writers balance.",
          },
          {
            heading: "Analysing modality",
            body: "Ask: what does this modal verb **express**? (obligation? possibility? certainty?) What's the **effect**? 'We must act' is stronger than 'We might consider acting' — the first commands, the second suggests. Modality = the writer's stance.",
          },
        ],
        keyFormulas: [
          { name: "Modality spectrum", statement: "Must/Will (strong) ←→ Should/Ought ←→ Could/Might (weak): obligation to possibility." },
        ],
        workedExample: {
          problem: "Compare: 'You must vote' vs 'You might want to vote.'",
          solution: "'Must' = strong obligation, commanding; 'might' = weak suggestion, tentative — different persuasive force.",
        },
      },
      questions: [
        {
          id: "mll4-u2-modality-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which modal verb expresses the strongest obligation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "might" },
              { id: "b", text: "could" },
              { id: "c", text: "may" },
              { id: "d", text: "must" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Modality", statement: "Modal verbs express certainty/obligation — 'must' is strongest obligation." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'must' = strongest obligation — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** must",
          },
        },
        {
          id: "mll4-u2-modality-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Appeals",
            author: "Written for Akademik Space",
            text: "Appeal A: 'You must recycle. It is our duty.'\n\nAppeal B: 'You might consider recycling — it could help.'",
          },
          stem: "Compare the modality in these two appeals — which is more forceful and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality", statement: "'Must' = strong obligation; 'might/could' = weak suggestion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Appeal A uses 'must' + 'duty' — strong obligation, commanding.", evidence: "must recycle", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Appeal B uses 'might/could' — weak suggestion, tentative; A is more forceful.", evidence: "might consider", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Appeal A is more forceful — 'must' and 'duty' express strong obligation vs B's tentative 'might/could'.",
          },
        },
        {
          id: "mll4-u2-modality-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "'We cannot ignore this crisis. We must act now — delay will cost lives. Some might say it's too late, but we will not accept that.'",
          },
          stem: "Analyse the modality — identify strong and weak modal verbs and explain their combined effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality analysis", statement: "Strong modals command; weak modals hedge — combination creates urgency + resolve." }],
            steps: [
              { reasoning: "Criterion A (Analysing): strong modals — 'cannot', 'must', 'will' — create urgency and determination.", evidence: "must act now", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'might say' — weak modal acknowledging opposition, then 'will not accept' rebuts strongly.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): combination — strong modals dominate, creating commanding urgency; the weak 'might' is used strategically to dismiss doubt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong modals ('must', 'will') dominate for urgency; 'might' strategically acknowledges doubt before strong rebuttal.",
          },
        },
        {
          id: "mll4-u2-modality-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the modal verbs in: 'We should protect the environment. We must act now.'", marks: 1 },
            { label: "b", prompt: "Explain the difference in force between 'should' and 'must'.", marks: 2 },
            { label: "c", prompt: "Rewrite 'We should consider helping' using a stronger modal and explain the effect.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality", statement: "'Should' = advice; 'must' = obligation — different force." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'should' and 'must' identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'should' = recommendation/advice (optional); 'must' = obligation (required).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'must' creates stronger urgency and less room for refusal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): stronger rewrite — e.g. 'We must help' or 'We have to help'; explains increased force.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): modal correctly used with appropriate register.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'should', 'must'. (b) 'should' = advice; 'must' = obligation. (c) e.g. 'We must help' — stronger command.",
          },
        },
        {
          id: "mll4-u2-modality-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which modal verb expresses possibility rather than obligation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "will" },
              { id: "b", text: "must" },
              { id: "c", text: "might" },
              { id: "d", text: "should" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Modality", statement: "'Might/could' = possibility; 'must/should' = obligation." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'might' = possibility — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** might",
          },
        },
        {
          id: "mll4-u2-modality-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Requests",
            author: "Written for Akademik Space",
            text: "Request A: 'You must submit your work by Friday.'\n\nRequest B: 'You could submit your work by Friday if that works for you.'",
          },
          stem: "Compare the modality in these two requests — which is more forceful?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality", statement: "'Must' = obligation; 'could' = suggestion — different force." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses 'must' — strong obligation, no room for refusal; B uses 'could' + 'if that works' — polite suggestion.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A is more forceful; B is tentative and considerate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A more forceful — 'must' commands; 'could' suggests politely.",
          },
        },
        {
          id: "mll4-u2-modality-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'modality' refer to in language analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How certain or forceful the writer is, expressed through modal verbs" },
              { id: "b", text: "The number of clauses" },
              { id: "c", text: "The tense of the verb" },
              { id: "d", text: "The mood of the sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Modality", statement: "Modality = how certain/forceful the writer is, expressed through modal verbs." }],
            steps: [
              { reasoning: "Criterion A (Analysing): modality = degree of certainty/force — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'must' strong, 'might' weak — spectrum of force.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** How certain or forceful the writer is, expressed through modal verbs",
          },
        },
        {
          id: "mll4-u2-modality-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Warnings",
            author: "Written for Akademik Space",
            text: "Warning A: 'You must wear a helmet. It is required by law.'\n\nWarning B: 'You might want to consider wearing a helmet — it could be safer.'",
          },
          stem: "Compare the modality in these two warnings. Which is more effective?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality and effectiveness", statement: "Strong modality suits safety-critical messages; weak suits suggestions." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses 'must' + 'required by law' — strong obligation, appropriate for safety.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses 'might want to consider', 'could be' — weak suggestion, undermines urgency.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A more effective for safety — clear obligation; B too tentative for a life-saving message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A more effective — 'must' + legal requirement vs B's weak 'might/could' suggestion.",
          },
        },
        {
          id: "mll4-u2-modality-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which modal verb expresses the weakest obligation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "should" },
              { id: "b", text: "must" },
              { id: "c", text: "will" },
              { id: "d", text: "could" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality spectrum", statement: "Must/will strong ←→ should ←→ could/might weak." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'could' = weakest — (c).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): expresses mere possibility, not obligation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** could",
          },
        },
        {
          id: "mll4-u2-modality-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "'We cannot ignore the evidence. We must act now. Some might argue we should wait, but we will not accept delay.'",
          },
          stem: "Analyse the modality — identify strong and weak modal verbs and their combined effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality analysis", statement: "Strong modals command; weak modals hedge — combination creates urgency." }],
            steps: [
              { reasoning: "Criterion A (Analysing): strong modals — 'cannot', 'must', 'will' — create urgency and determination.", evidence: "must act now", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'might argue', 'should wait' — weak modals representing opposition, then 'will not accept' rebuts.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): strong modals dominate — the weak ones are used strategically to dismiss doubt.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): combined effect — commanding urgency with resolve; no room for hesitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong modals ('must', 'will') dominate for urgency; weak 'might/should' strategically dismissed.",
          },
        },
        {
          id: "mll4-u2-modality-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Advice",
            author: "Written for Akademik Space",
            text: "'You should exercise regularly. You must eat your vegetables. You might want to consider sleeping more.'",
          },
          parts: [
            { label: "a", prompt: "Identify the modal verbs and their strength.", marks: 2 },
            { label: "b", prompt: "Explain why different modal verbs are used for different advice.", marks: 2 },
            { label: "c", prompt: "Rewrite 'You might want to consider sleeping more' using stronger modality.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality and advice", statement: "Different advice needs different force — obligation vs suggestion." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'should' = recommendation; 'must' = obligation (strongest); 'might' = weak suggestion.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'must' strongest, 'should' moderate, 'might' weakest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'must' for non-negotiable health basics; 'should' for important but flexible; 'might' for optional suggestions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): stronger modality = more urgent/important advice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): stronger rewrite — e.g. 'You should sleep more' or 'You must get enough sleep' — increases urgency.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 'should' moderate, 'must' strong, 'might' weak. (b) Different advice needs different force. (c) e.g. 'You should sleep more' — stronger.",
          },
        },
        {
          id: "mll4-u2-modality-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'must' express that 'might' doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Past tense" },
              { id: "b", text: "Strong obligation" },
              { id: "c", text: "Permission" },
              { id: "d", text: "Possibility" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Modal verbs", statement: "'Must' = obligation; 'might' = possibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'must' = obligation — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Strong obligation",
          },
        },
        {
          id: "mll4-u2-modality-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Opinions",
            author: "Written for Akademik Space",
            text: "Opinion A: 'This will definitely work — I am certain.'\n\nOpinion B: 'This might work — I'm not sure.'",
          },
          stem: "Compare the certainty expressed in these two opinions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality and certainty", statement: "'Will' = certainty; 'might' = uncertainty." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses 'will definitely', 'certain' — strong certainty.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses 'might', 'not sure' — uncertainty; A is confident, B is tentative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = certain ('will definitely'); B = uncertain ('might', 'not sure').",
          },
        },
        {
          id: "mll4-u2-modality-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which modal verb would be LEAST appropriate in a safety warning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "might" },
              { id: "b", text: "must" },
              { id: "c", text: "should" },
              { id: "d", text: "will" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Modality and context", statement: "Safety warnings need strong modality; 'might' is too weak." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'might' too weak for safety — (c).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): safety requires obligation ('must', 'should').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** might",
          },
        },
        {
          id: "mll4-u2-modality-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Proposal",
            author: "Written for Akademik Space",
            text: "'We could consider the proposal. It might have benefits. We should examine the evidence before deciding.'",
          },
          stem: "Analyse the modality here — what does the writer's choice of modal verbs suggest about their stance?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality and stance", statement: "Weak modals signal caution/open-mindedness; strong signal conviction." }],
            steps: [
              { reasoning: "Criterion A (Analysing): all modals are weak — 'could', 'might', 'should' — cautious, tentative stance.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'could consider', 'might have' — no commitment; 'should examine' — advice but not decision.", evidence: "could consider", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): suggests writer is open but undecided — weighing options rather than advocating.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): appropriate for deliberative context — careful consideration before commitment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak modals ('could', 'might', 'should') = cautious, undecided stance — open to possibility, not committed.",
          },
        },
        {
          id: "mll4-u2-modality-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two appeals.",
          extract: {
            title: "Two Appeals",
            author: "Written for Akademik Space",
            text: "Appeal A: 'We must change the system. We cannot accept the status quo.'\n\nAppeal B: 'We might consider whether the system needs changing.'",
          },
          parts: [
            { label: "a", prompt: "Identify the modal verbs in each appeal.", marks: 1 },
            { label: "b", prompt: "Compare the force and urgency of each.", marks: 2 },
            { label: "c", prompt: "Which would be more effective for a protest speech? Explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality and persuasion", statement: "Strong modals create urgency; weak modals create hesitation." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A: 'must', 'cannot'; B: 'might', 'consider'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A strong obligation + refusal to accept — commanding urgency; B weak possibility + hedging — tentative.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A demands action; B merely suggests consideration — very different force.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A more effective for protest — urgency and conviction inspire action; B too weak to motivate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): protests need strong modality to create momentum and commitment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: must/cannot; B: might/consider. (b) A = commanding urgency; B = tentative suggestion. (c) A more effective for protest — strong modality inspires action.",
          },
        },
      ],
    },
  ],
};
