import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mll4-u2-lesson-2-3",
  code: "2-3",
  title: "Analysing Persuasive Texts",
  goal: "I CAN analyse persuasive texts by identifying techniques, modality and intended audience, and evaluate their effectiveness.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Persuasive text", definition: "A text designed to influence the reader's beliefs or actions — ads, speeches, reviews." },
    { term: "Intended audience", definition: "The specific group the text aims to persuade." },
    { term: "Bias", definition: "A preference or prejudice that affects objectivity." },
    { term: "Credibility", definition: "Whether the writer/speaker seems trustworthy and knowledgeable." },
    { term: "Call to action", definition: "A direct request for the reader to do something." },
  ],
  concepts: [
    {
      id: "mll4-u2-persuasive-analysis",
      title: "Analysing persuasive texts",
      skill: "Break down a persuasive text: identify techniques, modality, audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "The analysis framework",
            body: "For any persuasive text, ask: **What's the purpose?** (sell, convince, inspire?) **Who's the audience?** (parents, teens, experts?) **What techniques?** (emotive language, statistics, rhetorical questions?) **What modality?** (must vs might?) **How credible?** (evidence, authority, bias?)",
          },
          {
            heading: "Evidence and credibility",
            body: "Strong persuasion uses **evidence**: statistics, expert quotes, examples. Weak persuasion relies on emotion alone. Ask: does the text **prove** its claims or just **assert** them? 'Studies show' is stronger than 'everyone knows'. Credibility = does the writer seem trustworthy?",
          },
          {
            heading: "Identifying bias",
            body: "All persuasion has **bias** — the writer wants you to think a certain way. Identify it: what does the writer want you to believe? What's omitted? What's exaggerated? Recognising bias doesn't mean rejecting the text — it means reading it critically.",
          },
        ],
        keyFormulas: [
          { name: "Persuasion analysis", statement: "Purpose + Audience + Techniques + Modality + Credibility = full analysis." },
        ],
        workedExample: {
          problem: "'Don't let your child fall behind! Our proven method guarantees results. Sign up today!'",
          solution: "Purpose: sell courses. Audience: worried parents. Techniques: emotive language ('fall behind'), guarantee claim, urgency ('sign up today'). Weakness: no evidence for 'proven' or 'guarantees'.",
        },
      },
      questions: [
        {
          id: "mll4-u2-persuasive-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first question to ask when analysing a persuasive text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long is it?" },
              { id: "b", text: "What's its purpose?" },
              { id: "c", text: "Who wrote it?" },
              { id: "d", text: "Is it in a book?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Analysis order", statement: "Purpose first — what does the text want to achieve?" }],
            steps: [{ reasoning: "Criterion A (Analysing): purpose is the starting point — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** What's its purpose?",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Campaign",
            author: "Written for Akademik Space",
            text: "'Our new phone has the best camera ever made. Millions of customers agree. Don't miss out — order now!'",
          },
          stem: "Analyse this advertisement: identify the purpose, audience, and one persuasive technique.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion analysis", statement: "Purpose + audience + technique = structured analysis." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — to sell the phone; audience — consumers wanting the latest tech.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): technique — 'best ever' is hyperbole; 'millions agree' is social proof; 'order now' is urgency.", evidence: "best camera ever", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: sell phone. Audience: tech consumers. Techniques: hyperbole ('best ever'), social proof ('millions agree'), urgency ('order now').",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Campaigns",
            author: "Written for Akademik Space",
            text: "Campaign A: 'Eat vegetables — they're good for you.'\n\nCampaign B: 'A Harvard study found that people who eat 5 portions of vegetables daily live 3 years longer. Your body will thank you.'",
          },
          stem: "Which campaign is more persuasive? Compare their use of evidence and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence vs assertion", statement: "Specific evidence persuades more than vague claims." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Campaign A asserts without evidence — 'good for you' is vague; Campaign B cites a study with specific findings.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B's 'Harvard study' adds credibility; '5 portions' and '3 years longer' are concrete and verifiable.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is more persuasive — evidence + specificity + authority outweigh vague assertion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Campaign B more persuasive — uses credible evidence (Harvard study) and specific data vs A's vague assertion.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the persuasive technique: 'Join the millions who've already switched.'", marks: 1 },
            { label: "b", prompt: "Explain the technique's effect and assess its credibility.", marks: 2 },
            { label: "c", prompt: "Suggest one piece of evidence that would strengthen this claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Social proof", statement: "Claiming others have done it creates pressure to conform." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): social proof / bandwagon technique.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): effect — makes reader feel joining is normal/expected, creates FOMO.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): credibility — 'millions' is unverified; no source given, could be exaggeration.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): evidence — e.g. 'According to a 2023 survey, 2 million users switched' — sourced statistic.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): explains why evidence strengthens persuasion — verifiable vs vague claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Social proof. (b) Creates conformity pressure but 'millions' is unverified. (c) e.g. sourced statistic — verifiable evidence.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of most advertising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To inform about history" },
              { id: "b", text: "To persuade the reader to buy or act" },
              { id: "c", text: "To entertain" },
              { id: "d", text: "To educate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Persuasive purpose", statement: "Advertising aims to persuade — sell products or change behaviour." }],
            steps: [
              { reasoning: "Criterion A (Analysing): advertising persuades — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To persuade the reader to buy or act",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Campaign",
            author: "Written for Akademik Space",
            text: "'Don't miss out! Our summer sale ends Sunday. Everything must go — up to 70% off. Shop now or regret it!'",
          },
          stem: "Identify the purpose, audience and two persuasive techniques in this advertisement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion analysis", statement: "Purpose + audience + techniques = structured analysis." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — sell products (sale); audience — shoppers looking for deals.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): techniques — urgency ('ends Sunday', 'Don't miss out'), discount appeal ('70% off'), fear of missing out ('regret it').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: sell products. Audience: deal-seeking shoppers. Techniques: urgency, discount, FOMO.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'intended audience' in persuasive analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The critics who review texts" },
              { id: "b", text: "The specific group the text aims to persuade" },
              { id: "c", text: "The people who wrote the text" },
              { id: "d", text: "Everyone who reads anything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Intended audience", statement: "The specific group the text aims to persuade." }],
            steps: [
              { reasoning: "Criterion A (Analysing): intended audience = who the writer wants to reach — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): determined by language, register, examples and concerns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The specific group the text aims to persuade",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Appeals",
            author: "Written for Akademik Space",
            text: "Appeal A: 'This supplement is amazing! Everyone should take it. You'll feel incredible!'\n\nAppeal B: 'A 2023 clinical trial involving 1,000 participants found this supplement improved energy levels by 30%. Side effects were minimal.'",
          },
          stem: "Compare these two appeals — which is more persuasive and credible?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence vs assertion", statement: "Specific evidence persuades more than vague claims." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses vague superlatives ('amazing', 'everyone', 'incredible') — no evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B cites specific study ('2023 clinical trial', '1,000 participants', '30%') and mentions side effects — credible.", evidence: "2023 clinical trial involving 1,000 participants", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B more persuasive — verifiable evidence vs unsupported claims; honesty about side effects adds credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Appeal B more persuasive/credible — specific study vs vague superlatives.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'social proof' mean in persuasion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proof that is social" },
              { id: "b", text: "Claiming others have done/chosen it — 'join millions'" },
              { id: "c", text: "Evidence from studies" },
              { id: "d", text: "A type of advertisement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Social proof", statement: "Claiming others have done it creates conformity pressure." }],
            steps: [
              { reasoning: "Criterion A (Analysing): social proof = others have done it — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'join millions' implies it's normal/expected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Claiming others have done/chosen it",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'Dear parents, I write to you as a concerned teacher. Our students spend 7 hours daily on screens — a 40% increase in five years. Research links excessive screen time to anxiety and poor sleep. We must act — our children's wellbeing depends on it.'",
          },
          stem: "Analyse this persuasive letter using the full framework: purpose, audience, techniques, modality, credibility.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion framework", statement: "Purpose + audience + techniques + modality + credibility = full analysis." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — persuade parents to act on screen time; audience — parents of students.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): techniques — statistics ('7 hours', '40%'), authority ('concerned teacher'), emotive language ('wellbeing depends on it').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): modality — 'must act' strong obligation; credibility — specific data, teacher authority, research reference.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): strong persuasion — evidence + authority + emotion; credible and targeted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: persuade parents. Audience: parents. Techniques: statistics, authority, emotion. Modality: strong. Credible.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two campaign messages.",
          extract: {
            title: "Two Campaigns",
            author: "Written for Akademik Space",
            text: "Campaign A: 'Save the planet! Trees are dying. We must act NOW before it's too late!'\n\nCampaign B: 'A single tree absorbs 22kg of CO2 per year. Planting 1,000 trees offsets a family's annual carbon footprint. Join our community tree-planting programme — 5,000 volunteers already participate.'",
          },
          parts: [
            { label: "a", prompt: "Compare the persuasive techniques used in each.", marks: 2 },
            { label: "b", prompt: "Which is more credible? Explain.", marks: 2 },
            { label: "c", prompt: "Which would be more effective for fundraising? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion comparison", statement: "Emotional urgency vs evidence-based persuasion." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A uses urgency ('NOW', 'too late'), emotive language ('dying'), strong modality ('must act').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): B uses statistics ('22kg CO2', '1,000 trees'), social proof ('5,000 volunteers'), specific action ('tree-planting programme').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B more credible — verifiable data, specific programme, volunteer numbers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A relies on emotion and urgency with no evidence — less credible.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B more effective for fundraising — specifics ('22kg', '1,000 trees') make donation feel tangible and worthwhile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = urgency/emotion; B = statistics/social proof. (b) B more credible — evidence vs emotion. (c) B — specifics make donation tangible.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'call to action' in persuasion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A phone call" },
              { id: "b", text: "A direct request for the reader to do something" },
              { id: "c", text: "A type of argument" },
              { id: "d", text: "A legal term" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Call to action", statement: "Direct request for reader to do something." }],
            steps: [
              { reasoning: "Criterion A (Analysing): call to action = request to act — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A direct request for the reader to do something",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'After trying 50 meal kits, this is the best. The recipes are simple, the ingredients fresh, and cleanup takes 5 minutes. My family requests it every week.'",
          },
          stem: "Analyse this review: identify the purpose, audience and evidence used.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion analysis", statement: "Reviews persuade through personal experience and specific evidence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — persuade readers to try/buy the meal kit; audience — busy families/meal planners.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): evidence — '50 meal kits tried', '5 minutes cleanup', 'family requests weekly' — specific, personal credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: persuade to buy. Audience: families. Evidence: personal experience + specifics ('50 kits', '5 minutes').",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is stronger evidence in a persuasive text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Everyone knows this works'" },
              { id: "b", text: "'A 2023 study of 500 people showed 80% improvement'" },
              { id: "c", text: "'It's obvious'" },
              { id: "d", text: "'Trust me'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Evidence quality", statement: "Specific, verifiable evidence beats vague assertions." }],
            steps: [
              { reasoning: "Criterion A (Analysing): specific study data = strongest evidence — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others are vague/unverifiable claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'A 2023 study of 500 people showed 80% improvement'",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Petition",
            author: "Written for Akademik Space",
            text: "'Dear council, we, the undersigned residents, urge you to reconsider the proposed bypass. It will destroy 50 acres of ancient woodland and increase noise pollution for 2,000 homes. We propose alternative routes that cost 20% less.'",
          },
          stem: "Analyse this petition using the persuasion framework — purpose, audience, techniques, credibility.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion analysis", statement: "Purpose + audience + techniques + credibility = full analysis." }],
            steps: [
              { reasoning: "Criterion A (Analysing): purpose — persuade council to reject bypass; audience — local council decision-makers.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): techniques — specific data ('50 acres', '2,000 homes'), 'we, the undersigned' collective authority, alternative proposal.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): credibility — specific numbers, resident status ('undersigned residents'), constructive alternative ('cost 20% less').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): strong persuasion — evidence-based, offers solution not just complaint.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose: stop bypass. Audience: council. Techniques: data, collective authority, alternative. Credible — specific + constructive.",
          },
        },
        {
          id: "mll4-u2-persuasive-analysis-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two political messages.",
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            text: "Message A: 'Vote for change! Our opponents have failed you for too long. It's time for a new direction.'\n\nMessage B: 'Our plan includes: free school meals for all, 10,000 new homes, and investment in green energy. Funded by closing tax loopholes — costing the average family £2 per week.'",
          },
          parts: [
            { label: "a", prompt: "Compare the persuasive techniques used.", marks: 2 },
            { label: "b", prompt: "Which is more credible? Explain.", marks: 2 },
            { label: "c", prompt: "Which would be more effective in a debate? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Political persuasion", statement: "Attack opponents vs offer concrete policies." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A uses attack ('opponents failed'), urgency ('too long', 'time'), vague promise ('new direction').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): B uses specific policies ('free school meals', '10,000 homes'), funding source ('tax loopholes'), cost transparency ('£2 per week').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B more credible — specific policies, funding explanation, cost transparency.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A relies on vague attacks and promises — no evidence or specifics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B more effective in debate — specifics invite scrutiny but show substance; A is all rhetoric.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = attack/vague; B = specific policies/funding. (b) B more credible — specifics vs rhetoric. (c) B — substance beats attacks.",
          },
        },
      ],
    },
    {
      id: "mll4-u2-bias-credibility",
      title: "Bias and credibility",
      skill: "Identify bias in persuasive texts and assess the writer's credibility.",
      lesson: {
        sections: [
          {
            heading: "What is bias?",
            body: "**Bias** = a preference that distorts objectivity. Persuasive texts are inherently biased — they want you to agree. The question isn't 'is it biased?' (it will be) but 'how biased, and in what direction?'",
          },
          {
            heading: "Spotting bias",
            body: "Look for: **loaded words** ('regime' vs 'government'), **one-sided evidence** (only pro-argument facts), **omissions** (what's not mentioned?), **false balance** ('some say X, others say Y' when evidence strongly favours one). Bias can be subtle — watch word choice.",
          },
          {
            heading: "Assessing credibility",
            body: "**Credible**: balanced, acknowledges opposing views, cites sources, admits uncertainty. **Not credible**: extreme claims, attacks opponents, no evidence, appeals only to emotion. A credible writer doesn't need to hide their position — they just present it honestly.",
          },
        ],
        keyFormulas: [
          { name: "Credibility test", statement: "Balanced + sourced + acknowledges opposition = credible. One-sided + emotional = biased." },
        ],
        workedExample: {
          problem: "'Obviously the only sensible choice is X. Anyone who disagrees is naive.' — identify bias.",
          solution: "'Obviously' assumes agreement; 'only sensible' dismisses alternatives; 'naive' attacks opponents — strong bias, low credibility.",
        },
      },
      questions: [
        {
          id: "mll4-u2-bias-credibility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bias in a persuasive text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A factual error" },
              { id: "b", text: "A preference that distorts objectivity" },
              { id: "c", text: "A long argument" },
              { id: "d", text: "A formal tone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bias", statement: "Bias = preference that distorts objectivity." }],
            steps: [{ reasoning: "Criterion A (Analysing): bias = distorts objectivity — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A preference that distorts objectivity",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'This film is undoubtedly the worst ever made. The director clearly has no talent, and anyone who praises it has no taste.'",
          },
          stem: "Identify two signs of bias/low credibility in this review.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bias indicators", statement: "Extreme claims, attacks on opponents, no evidence = low credibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'undoubtedly the worst ever' — extreme absolute claim, no evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'no talent', 'no taste' — attacks people rather than analysing the film; no balanced view.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extreme claim ('worst ever'), personal attacks ('no talent', 'no taste') — low credibility.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Articles",
            author: "Written for Akademik Space",
            text: "Article A: 'The new policy will devastate the economy, critics say. Supporters argue it will create jobs. The truth remains unclear.'\n\nArticle B: 'The new policy will devastate the economy. Critics point to historical precedents. Supporters offer no evidence.'",
          },
          stem: "Which article is more credible? Compare their treatment of opposing views and evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Credibility", statement: "Credible = acknowledges both sides, notes evidence quality." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Article A gives both sides ('critics say', 'supporters argue') and admits uncertainty ('truth remains unclear').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Article B presents one view as fact ('will devastate'), dismisses supporters ('no evidence') — biased.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A is more credible — balanced presentation, acknowledges uncertainty; B is one-sided advocacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Article A more credible — balanced, acknowledges both views and uncertainty; B is one-sided.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the bias in: 'The so-called experts claim this works, but real people know better.'", marks: 1 },
            { label: "b", prompt: "Explain how this language undermines credibility.", marks: 2 },
            { label: "c", prompt: "Rewrite it neutrally while keeping the same underlying claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "'So-called' and 'real people' are dismissive, loaded terms." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'so-called' dismisses experts; 'real people know better' creates false authority.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): undermines credibility by attacking the opposition's legitimacy rather than addressing their arguments.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'real people' is vague emotional appeal — no evidence, just us-vs-them.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): neutral rewrite — e.g. 'Some experts claim this works, but many users report it doesn't.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes loaded terms, presents both sides neutrally.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'So-called' dismisses experts; 'real people' false authority. (b) Attacks legitimacy not arguments. (c) e.g. 'Some experts claim this works, but many users report it doesn't.'",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'loaded language' in biased writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words with heavy meanings" },
              { id: "b", text: "Words chosen to trigger emotion or prejudice" },
              { id: "c", text: "Long words" },
              { id: "d", text: "Foreign words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Loaded language", statement: "Words chosen to trigger emotion or prejudice." }],
            steps: [
              { reasoning: "Criterion A (Analysing): loaded = emotionally charged — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Words chosen to trigger emotion or prejudice",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'This film is a masterpiece. The director is a genius. Anyone who disagrees clearly has no taste.'",
          },
          stem: "Identify two signs of bias/low credibility in this review.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bias indicators", statement: "Absolute claims, attacks on opponents, no evidence = low credibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'masterpiece', 'genius' — absolute superlatives with no evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Anyone who disagrees has no taste' — attacks opponents, dismisses alternative views.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Superlatives ('masterpiece', 'genius') + attack on dissenters ('no taste') — biased, low credibility.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a writer credible in a persuasive text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making extreme claims" },
              { id: "b", text: "Being balanced, sourced and acknowledging opposition" },
              { id: "c", text: "Using emotional language" },
              { id: "d", text: "Attacking opponents" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Credibility", statement: "Balanced, sourced, acknowledges opposition = credible." }],
            steps: [
              { reasoning: "Criterion A (Analysing): balanced + sourced + acknowledges opposition = credible — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): extreme claims and attacks undermine credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Being balanced, sourced and acknowledging opposition",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Reports",
            author: "Written for Akademik Space",
            text: "Report A: 'The new law will reduce crime, officials claim. Critics argue it may increase police powers. The full impact remains uncertain.'\n\nReport B: 'The new law will reduce crime. Officials are confident. Critics are wrong.'",
          },
          stem: "Which report is more credible? Compare their treatment of opposing views.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Credibility", statement: "Credible = acknowledges both sides, notes uncertainty." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A gives both views ('officials claim', 'critics argue') and admits uncertainty ('remains uncertain').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B presents one view as fact, dismisses critics ('Critics are wrong') — one-sided.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A more credible — balanced, acknowledges uncertainty; B is advocacy disguised as reporting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Report A more credible — balanced views + uncertainty vs B's one-sided dismissal.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which phrase shows bias?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The study found...'" },
              { id: "b", text: "'The so-called experts claim...'" },
              { id: "c", text: "'According to the report...'" },
              { id: "d", text: "'Data shows...'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "'So-called' dismisses legitimacy — biased phrasing." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'so-called' is dismissive/loaded — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others are neutral, attributed statements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'The so-called experts claim...'",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "'The government's disastrous new policy will destroy the economy. Only fools would support it. The opposition has the answers.'",
          },
          stem: "Identify three signs of bias in this article and explain how they undermine credibility.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bias indicators", statement: "Loaded words, personal attacks, one-sided claims = biased." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'disastrous' — loaded/emotive word, not neutral description.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Only fools would support it' — attacks supporters, no evidence.", evidence: "Only fools would support it", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'will destroy' — absolute prediction; 'opposition has the answers' — partisan advocacy, no balance.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): undermines credibility — emotional, one-sided, attacks opponents rather than arguing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Disastrous' (loaded), 'only fools' (attack), 'will destroy' (absolute) — biased, low credibility.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two reviews of the same restaurant.",
          extract: {
            title: "Two Reviews",
            author: "Written for Akademik Space",
            text: "Review A: 'Terrible food, rude service, overpriced. Avoid at all costs.'\n\nReview B: 'The pasta was overcooked and the service was slow on our visit, though the bread was excellent. At £40 per person it's pricey, but the atmosphere was lovely. Worth it for a special occasion.'",
          },
          parts: [
            { label: "a", prompt: "Identify the bias in Review A.", marks: 1 },
            { label: "b", prompt: "Explain why Review B is more credible.", marks: 2 },
            { label: "c", prompt: "What does Review B do that Review A doesn't?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Credibility in reviews", statement: "Balanced reviews with specifics are more credible than blanket criticism." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A is one-sided negative — 'terrible', 'rude', 'overpriced', 'avoid at all costs' — no balance or specifics.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B acknowledges both flaws ('overcooked', 'slow') and strengths ('bread excellent', 'atmosphere lovely').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B gives specific context ('£40 per person', 'special occasion') — nuanced judgment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B provides specifics, balance, and situational advice ('worth it for special occasion').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A just dismisses; B helps reader decide — more useful and trustworthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: one-sided negative. (b) B: balanced with specifics and context. (c) B: specifics + nuance + situational advice.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'false balance' in biased writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Presenting both sides equally when evidence strongly favours one" },
              { id: "b", text: "A balanced argument" },
              { id: "c", text: "A fair review" },
              { id: "d", text: "Equal word count" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "False balance", statement: "Presenting both sides equally when evidence strongly favours one." }],
            steps: [
              { reasoning: "Criterion A (Analysing): false balance = equal weight despite evidence — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Presenting both sides equally when evidence strongly favours one",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Opinion",
            author: "Written for Akademik Space",
            text: "'Some say exercise is good. Others say it doesn't matter. The truth is probably somewhere in between.'",
          },
          stem: "Is this balanced or biased? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Balanced vs biased", statement: "Balance = fair representation; bias = distortion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): appears balanced — gives 'some say', 'others say', 'truth in between'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): but may be false balance — evidence strongly favours exercise; 'probably somewhere in between' is vague, not evidence-based.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Appears balanced but may be false balance — 'in between' is vague vs evidence favouring exercise.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which indicates LOW credibility?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Citing multiple sources" },
              { id: "b", text: "Making extreme claims with no evidence" },
              { id: "c", text: "Acknowledging uncertainty" },
              { id: "d", text: "Presenting both sides" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Credibility indicators", statement: "Evidence, balance, uncertainty = credible; extreme claims = low credibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): extreme claims without evidence = low credibility — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others indicate credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Making extreme claims with no evidence",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Advertorial",
            author: "Written for Akademik Space",
            text: "'Independent experts agree this supplement is revolutionary. Unlike other brands, ours is scientifically proven. Don't be fooled by cheaper alternatives.'",
          },
          stem: "Identify the bias in this advertorial and explain how it manipulates the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Advertising bias", statement: "Advertorials disguise persuasion as information — watch for unnamed 'experts' and false comparisons." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Independent experts agree' — unnamed experts, no sources = unverifiable appeal to authority.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'scientifically proven' — vague claim, no study cited.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Don't be fooled by cheaper alternatives' — attacks competitors, implies they're inferior without evidence.", evidence: "Don't be fooled by cheaper alternatives", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): disguised as independent review but is actually promotion — biased advertising.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unnamed 'experts', vague 'proven', attacks on competitors — disguised advertising, low credibility.",
          },
        },
        {
          id: "mll4-u2-bias-credibility-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two articles about a new policy.",
          extract: {
            title: "Two Articles",
            author: "Written for Akademik Space",
            text: "Article A: 'The policy has both supporters and critics. Proponents cite job creation; opponents worry about environmental impact. Independent analysis suggests a mixed outcome.'\n\nArticle B: 'The policy is an unmitigated disaster. Supporters are deluded. The evidence is clear — everyone knows it will fail.'",
          },
          parts: [
            { label: "a", prompt: "Identify the bias in Article B.", marks: 1 },
            { label: "b", prompt: "Explain why Article A is more credible.", marks: 2 },
            { label: "c", prompt: "What would a truly credible article add that Article A lacks?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Credibility", statement: "Credible = balanced, sourced, specific; biased = one-sided, emotional." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): B is one-sided — 'unmitigated disaster', 'deluded', 'everyone knows' — emotional, no evidence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A gives both sides ('supporters', 'critics') and cites independent analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A is balanced and acknowledges complexity ('mixed outcome') — more credible.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A could add specific evidence — cite studies, name sources, give data.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'independent analysis' is vague — naming the analysis would strengthen credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) B: one-sided emotional. (b) A: balanced + independent analysis. (c) A could add specific sources/data.",
          },
        },
      ],
    },
  ],
};
