import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mll5-u2-lesson-2-3",
  code: "2-3",
  title: "Critical Language Analysis",
  goal: "I CAN conduct critical language analysis — examining how word choice, grammar and structure create meaning, power and ideology.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Critical analysis", definition: "Examining how language choices create meaning, power and ideology — not just what it says." },
    { term: "Loaded language", definition: "Words with strong emotional/ideological connotations — 'regime' vs 'government'." },
    { term: "Nominalization", definition: "Turning actions into nouns — 'decide' → 'decision' — can hide agency." },
    { term: "Modality", definition: "Degree of certainty — 'must' vs 'might'." },
    { term: "Transitivity", definition: "How actions are represented — who does what to whom." },
    { term: "Evaluation", definition: "Words that judge — 'terrible', 'wonderful', 'alleged'." },
  ],
  concepts: [
    {
      id: "mll5-u2-critical-analysis",
      title: "Critical language analysis",
      skill: "Deconstruct texts by analysing word choice, grammar and structure for hidden meanings.",
      lesson: {
        sections: [
          {
            heading: "Beyond surface meaning",
            body: "Critical analysis asks **how** the text means, not just **what** it says. 'The government implemented the policy' vs 'The policy was implemented' — passive hides who decided. Word choice reveals attitude: 'freedom fighters' vs 'terrorists' — same people, different labels.",
          },
          {
            heading: "Key analytical tools",
            body: "Look for: **loaded words** ('regime', 'alleged', 'so-called'), **nominalization** ('the implementation of' vs 'they implemented'), **modality** ('must' vs 'might'), **transitivity** (who acts on whom), **evaluation** (judgmental adjectives). Each choice reveals ideology.",
          },
          {
            heading: "Ideology in language",
            body: "All texts have **ideology** — assumptions about how the world works. 'The market decides' assumes markets are natural. 'Criminals' vs 'offenders' vs 'suspects' — each word carries assumptions. Critical reading exposes these hidden frameworks.",
          },
        ],
        keyFormulas: [
          { name: "Critical analysis", statement: "Word choice + Grammar + Structure = Hidden ideology." },
        ],
        workedExample: {
          problem: "'The alleged offender was detained by authorities.' — What's hidden?",
          solution: "'Alleged' presumes guilt; 'detained' is euphemistic for arrested; 'authorities' is vague — hides specific agents. Passive voice removes who acted.",
        },
      },
      questions: [
        {
          id: "mll5-u2-critical-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nominalization?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding adjectives" },
              { id: "b", text: "Making words longer" },
              { id: "c", text: "A type of spelling" },
              { id: "d", text: "Turning verbs into nouns — often hiding who does the action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nominalization", statement: "Verb → noun transformation that can hide agency." }],
            steps: [{ reasoning: "Criterion A (Analysing): nominalization = verb to noun — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Turning verbs into nouns — often hiding who does the action",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Reports",
            author: "Written for Akademik Space",
            text: "Report A: 'The minister announced the policy.'\n\nReport B: 'The policy announcement was made by the minister.'",
          },
          stem: "Compare these — how does word order and structure change emphasis?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Agency in syntax", statement: "Active voice names the actor; passive obscures it." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is active — 'minister announced' puts agent first, clear responsibility.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is passive — 'announcement was made' puts event first, agent at end ('by the minister') — less emphasis on who.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = active (agent first); B = passive (event first, agent buried) — different emphasis on responsibility.",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "'The so-called 'activists' gathered outside the courthouse, causing disruption. Authorities were forced to intervene.'",
          },
          stem: "Analyse the loaded language — what ideology does it reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "'So-called' and 'disruption' delegitimize the protesters." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'so-called' — dismisses 'activists' as not deserving the name; loaded, delegitimizing.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'causing disruption' — frames protest as problem, not legitimate expression; 'forced to intervene' justifies authorities.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): ideology — supports authority, delegitimizes dissent; language reveals bias against protesters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'So-called' delegitimizes; 'disruption' frames protest negatively — ideology supporting authority over dissent.",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify two features of loaded language in: 'The radical group threatened the community.'", marks: 1 },
            { label: "b", prompt: "Explain the ideology revealed by these choices.", marks: 2 },
            { label: "c", prompt: "Rewrite neutrally while preserving the facts.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language analysis", statement: "Adjectives and framing reveal ideology." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'radical' = delegitimizing label; 'threatened' = judgmental framing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'radical' positions group as extreme/illegitimate; 'threatened' presumes malicious intent — ideology supporting establishment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'community' implies group is outsider threat — 'us vs them' framing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): neutral rewrite — e.g. 'The group gathered outside the community centre.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes loaded adjectives, presents facts neutrally.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'Radical', 'threatened'. (b) Delegitimizes group, presumes malice, us-vs-them. (c) e.g. 'The group gathered outside the community centre.'",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            text: "Sentence A: 'They implemented the changes.'\n\nSentence B: 'The implementation of changes occurred.'",
          },
          stem: "Which sentence uses nominalization?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence B — 'implementation' turns the verb into a noun" },
              { id: "b", text: "Both" },
              { id: "c", text: "Sentence A" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Nominalization", statement: "Verb → noun transformation can hide agency." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'implementation' = nominalized verb — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Sentence B — 'implementation' turns the verb into a noun",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Headline",
            author: "Written for Akademik Space",
            text: "'Corrupt officials swindle millions from desperate citizens.'",
          },
          stem: "How many loaded/evaluative words appear in this headline?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "Judgmental words carry ideology." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'corrupt', 'swindle', 'desperate' — 3 loaded/evaluative words.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Claims",
            author: "Written for Akademik Space",
            text: "Claim A: 'The policy will definitely fail.'\n\nClaim B: 'The policy might possibly fail.'",
          },
          stem: "What differs between these claims?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Claim A uses passive voice" },
              { id: "b", text: "Nothing — same meaning" },
              { id: "c", text: "Claim B is longer" },
              { id: "d", text: "Modality — 'will definitely' is certain; 'might possibly' is hedged and uncertain" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Modality", statement: "Degree of certainty conveyed by modal verbs." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'will definitely' vs 'might possibly' — certainty vs hedging — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Modality — 'will definitely' is certain; 'might possibly' is hedged",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Reports",
            author: "Written for Akademik Space",
            text: "Report A: 'Protesters clashed with police.'\n\nReport B: 'Police dispersed a gathering.'",
          },
          stem: "What does Report B hide through its transitivity choices?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing is hidden" },
              { id: "b", text: "It uses too much detail" },
              { id: "c", text: "It names too many people" },
              { id: "d", text: "It omits the protesters as actors and frames 'dispersed' neutrally — the clash/violence is erased" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Transitivity", statement: "Who acts on whom shapes what is visible." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'dispersed a gathering' — protesters unnamed, violence softened — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** It omits the protesters as actors and frames 'dispersed' neutrally",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Phrase",
            author: "Written for Akademik Space",
            text: "'The market decided the price.'",
          },
          stem: "What ideology does this sentence naturalise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That markets are neutral and natural — hiding human decisions behind an abstraction" },
              { id: "b", text: "That markets don't exist" },
              { id: "c", text: "No ideology is present" },
              { id: "d", text: "That prices are always fair" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ideology in language", statement: "Abstractions can hide human agency and naturalise power." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'market decided' treats market as agent — naturalises economic power — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** That markets are neutral and natural — hiding human decisions",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "The film was tedious, the acting wooden, and the plot predictable.",
          },
          stem: "How many evaluative adjectives appear in this sentence?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation", statement: "Judgmental adjectives reveal the writer's stance." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'tedious', 'wooden', 'predictable' — 3 evaluative adjectives.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Statement",
            author: "Written for Akademik Space",
            text: "'The so-called experts predict catastrophe.'",
          },
          stem: "Rewrite this neutrally, then explain what the original's language does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "'So-called' and 'catastrophe' delegitimise and dramatise." }],
            steps: [
              { reasoning: "Criterion C (Producing text): neutral rewrite — e.g. 'Some analysts predict difficulties.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion A (Analysing): 'so-called' dismisses 'experts' as unqualified — undermines their authority.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'catastrophe' is hyperbolic loaded vocabulary — dramatizes to provoke fear; neutral version removes bias.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neutral version removes 'so-called' and 'catastrophe' — original delegitimises experts and dramatizes.",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'loaded language'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poetic language only" },
              { id: "b", text: "Language that is too long" },
              { id: "c", text: "Language with many facts" },
              { id: "d", text: "Words with strong emotional or ideological connotations — 'regime' vs 'government'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Loaded language", statement: "Words carrying emotional/ideological weight." }],
            steps: [{ reasoning: "Criterion A (Analysing): loaded language = emotionally/ideologically weighted words — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Words with strong emotional or ideological connotations",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the loaded words in: 'The lazy bureaucrats wasted tax dollars on useless programs.'", marks: 1 },
            { label: "b", prompt: "Explain the ideology these choices reveal.", marks: 2 },
            { label: "c", prompt: "Rewrite neutrally while preserving the facts.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language analysis", statement: "Adjectives and framing reveal anti-government ideology." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'lazy', 'wasted', 'useless' — three judgmental adjectives.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'lazy' attacks character; 'wasted' presumes no value; 'useless' judges outcome — all assume government waste and incompetence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): ideology = anti-bureaucratic, small-government framing — language does the arguing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): neutral — e.g. 'The government allocated funds to several programs.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes evaluative adjectives; facts stated without judgement.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'Lazy', 'wasted', 'useless'. (b) Anti-bureaucratic ideology. (c) e.g. 'The government allocated funds to several programs.'",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "'The decision was made. The policy was implemented. Results were observed.'",
          },
          stem: "How many passive constructions appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Passive voice", statement: "Passive constructions hide the agent." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'was made', 'was implemented', 'were observed' — 3 passives.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Sentence",
            author: "Written for Akademik Space",
            text: "'Tensions were inflamed by recent events.'",
          },
          stem: "What does this sentence obscure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tense of the sentence" },
              { id: "b", text: "The spelling of 'inflamed'" },
              { id: "c", text: "Nothing — it is fully transparent" },
              { id: "d", text: "Who or what caused the tensions — 'were inflamed' is passive and 'recent events' is vague" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Hidden agency", statement: "Passive + vague noun phrases obscure causation." }],
            steps: [{ reasoning: "Criterion A (Analysing): passive hides agent; 'recent events' vague — causation obscured — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Who or what caused the tensions — passive + vague 'recent events'",
          },
        },
        {
          id: "mll5-u2-critical-analysis-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the grammatical feature in: 'The decision to intervene was reached after lengthy deliberations.'", marks: 1 },
            { label: "b", prompt: "Explain how this feature distances the reader from agency.", marks: 2 },
            { label: "c", prompt: "Rewrite it actively and explain the shift in emphasis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nominalization and agency", statement: "Turning actions into nouns hides who decides." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): nominalization — 'decision' and 'deliberations' turn verbs into nouns; plus passive 'was reached'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'decision was reached' — no decider named; nominalizations make the process sound abstract and inevitable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'after lengthy deliberations' adds bureaucratic weight — emphasises process over the people making choices.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): active — e.g. 'The council debated for hours, then voted to intervene.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): names actors ('council', 'voted') — accountability and human agency restored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nominalization + passive. (b) Hides deciders, makes process abstract/inevitable. (c) e.g. 'The council debated... then voted to intervene.'",
          },
        },
      ],
    },
    {
      id: "mll5-u2-ideology-discourse",
      title: "Discourse and ideology",
      skill: "Analyse how discourse — systems of language use — constructs and maintains ideology.",
      lesson: {
        sections: [
          {
            heading: "What is discourse?",
            body: "**Discourse** = the way language is used in a society or institution — medical discourse, legal discourse, media discourse. Each has conventions, assumptions and power structures. Discourse doesn't just describe reality; it **constructs** it.",
          },
          {
            heading: "Discourse and power",
            body: "Institutions control discourse: doctors use technical language that excludes patients; lawyers use jargon that empowers them; media frame events through particular lenses. **Who controls the discourse controls reality** — their version becomes 'common sense'.",
          },
          {
            heading: "Counter-discourse",
            body: "Marginalized groups develop **counter-discourse** — alternative ways of talking that challenge dominant ideology. 'Person with disability' vs 'disabled' challenges medical model. 'Black Lives Matter' vs 'All Lives Matter' challenges colorblind discourse. Language is a site of struggle.",
          },
        ],
        keyFormulas: [
          { name: "Discourse analysis", statement: "Institution + Language conventions + Assumptions = Ideology." },
        ],
        workedExample: {
          problem: "'The patient presented with symptoms of...' vs 'I feel really bad.' — What discourse difference?",
          solution: "Medical discourse ('presented with symptoms') is technical, clinical, excludes laypeople; everyday discourse ('feel really bad') is accessible but less precise.",
        },
      },
      questions: [
        {
          id: "mll5-u2-ideology-discourse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is discourse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of essay" },
              { id: "b", text: "A public debate" },
              { id: "c", text: "The way language is used in a society or institution" },
              { id: "d", text: "A speech" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Discourse", statement: "Language use patterns in society/institutions." }],
            steps: [{ reasoning: "Criterion A (Analysing): discourse = institutional language patterns — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** The way language is used in a society or institution",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Statements",
            author: "Written for Akademik Space",
            text: "Doctor: 'The patient exhibits symptoms consistent with influenza.'\n\nPatient: 'I think I've got the flu.'",
          },
          stem: "Compare these — what does each discourse reveal about power and knowledge?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Discourse and power", statement: "Technical language creates distance and authority." }],
            steps: [
              { reasoning: "Criterion A (Analysing): doctor's discourse — 'exhibits symptoms', 'consistent with' — clinical, precise, authoritative.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): patient's discourse — 'I think', 'got the flu' — uncertain, everyday, less authoritative; power imbalance visible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Doctor = clinical/authoritative; patient = everyday/uncertain — discourse reveals expertise power imbalance.",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Headlines",
            author: "Written for Akademik Space",
            text: "Headline A: 'Illegal immigrants flood the border.'\n\nHeadline B: 'Asylum seekers arrive seeking safety.'",
          },
          stem: "Analyse the discourse in these headlines — what ideology does each construct?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Media discourse", statement: "Word choice frames events through ideological lenses." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses 'illegal', 'flood' — criminalizes, dehumanizes (flood = natural disaster/invasion).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses 'asylum seekers', 'seeking safety' — humanizes, emphasizes vulnerability and legitimacy.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): same event, opposite ideologies — 'illegal' vs 'asylum', 'flood' vs 'seek safety' — discourse constructs reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = anti-immigration ideology (illegal, flood); B = pro-asylum ideology (seekers, safety) — same event, different realities.",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the discourse type in: 'The defendant was remanded in custody pending trial.'", marks: 1 },
            { label: "b", prompt: "Explain how this language creates distance from the reader.", marks: 2 },
            { label: "c", prompt: "Rewrite it in everyday language — what is gained and lost?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Legal discourse", statement: "Legal language is precise but excludes laypeople." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): legal discourse — 'defendant', 'remanded in custody', 'pending trial'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): technical terms require legal knowledge — excludes non-experts; creates authority distance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'remanded' is Latin-derived, formal — impersonal, institutional tone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): everyday — 'The accused was kept in jail until the trial.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): gains accessibility; loses precision (legal terms have exact meanings).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Legal discourse. (b) Technical terms exclude laypeople, create authority. (c) 'The accused was kept in jail until trial' — accessible but less precise.",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'counter-discourse'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of legal document" },
              { id: "b", text: "Alternative ways of talking that challenge dominant ideology" },
              { id: "c", text: "A speech against the government" },
              { id: "d", text: "Silent protest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Counter-discourse", statement: "Alternative language use challenging dominant ideology." }],
            steps: [{ reasoning: "Criterion A (Analysing): counter-discourse = alternative talk challenging dominance — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Alternative ways of talking that challenge dominant ideology",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "The patient presented with acute symptoms; the physician administered treatment and monitored vital signs.",
          },
          stem: "How many technical/medical terms appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Technical discourse", statement: "Specialist vocabulary marks institutional discourse." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'presented', 'acute symptoms', 'administered', 'vital signs' — medical terms = 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Statements",
            author: "Written for Akademik Space",
            text: "Lawyer: 'The defendant shall be remanded.'\n\nDefendant's mother: 'Are they keeping him in jail?'",
          },
          stem: "What does this contrast reveal about discourse and power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mother is more educated" },
              { id: "b", text: "Both speak the same discourse" },
              { id: "c", text: "Jargon has no power effect" },
              { id: "d", text: "Legal jargon empowers the lawyer and excludes the mother — technical discourse marks expertise and status" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Discourse and power", statement: "Technical language creates authority and exclusion." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'remanded' vs 'keeping him in jail' — jargon excludes layperson — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Legal jargon empowers the lawyer and excludes the mother",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Slogans",
            author: "Written for Akademik Space",
            text: "Slogan A: 'All Lives Matter.'\n\nSlogan B: 'Black Lives Matter.'",
          },
          stem: "Why do these slogans represent competing discourses?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One is a question, one is a statement" },
              { id: "b", text: "They are identical in meaning" },
              { id: "c", text: "Each frames the issue differently — 'all' universalises while 'Black' centres a specific group facing specific violence" },
              { id: "d", text: "They are in different languages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Discourse", statement: "Word choice frames reality through ideological lenses." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'all' vs 'Black' — different framings of same concern — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Each frames the issue differently — 'all' universalises, 'Black' centres specific injustice",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'who controls the discourse controls reality' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only newspapers matter" },
              { id: "b", text: "Institutions that dominate language use shape what counts as 'common sense' and truth" },
              { id: "c", text: "Reality doesn't exist" },
              { id: "d", text: "Writers should control readers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Discourse and power", statement: "Dominant discourse shapes what is accepted as common sense." }],
            steps: [{ reasoning: "Criterion A (Analysing): controlling discourse = controlling accepted reality — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Institutions that dominate language use shape what counts as 'common sense'",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "'The implementation of the policy resulted in the termination of services.'",
          },
          stem: "How many nominalizations appear in this sentence?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Nominalization", statement: "Verbs turned into nouns obscure agency." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'implementation', 'termination', 'resulted' — nominalized forms = 3 (implementation, termination, result as noun).", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Headlines",
            author: "Written for Akademik Space",
            text: "Headline A: 'Violent protesters terrorize city centre.'\n\nHeadline B: 'Residents demand action after protest turns violent.'",
          },
          stem: "Analyse the discourse in these headlines — how does each frame the protest differently?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Media discourse", statement: "Headline word choice frames events through ideological lenses." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A — 'violent', 'terrorize' — protest framed as threat; protesters as aggressors.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B — 'residents demand action' — centres residents' grievance; protest becomes backdrop to their demands.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'turns violent' in B is passive-ish — violence happens, agency blurred; different ideological framing of same event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A frames protesters as terrorists; B centres residents' demands — same event, opposite ideological frames.",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'discourse' in critical language analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A speech only" },
              { id: "b", text: "A type of essay" },
              { id: "c", text: "The patterned ways language is used within a society or institution" },
              { id: "d", text: "A public argument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Discourse", statement: "Institutional language patterns and conventions." }],
            steps: [{ reasoning: "Criterion A (Analysing): discourse = patterned institutional language — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** The patterned ways language is used within a society or institution",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the discourse type in: 'The infant demonstrated object permanence during the assessment.'", marks: 1 },
            { label: "b", prompt: "Explain who this discourse empowers and who it excludes.", marks: 2 },
            { label: "c", prompt: "Rewrite it in everyday language — what is gained and lost?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Professional discourse", statement: "Technical language empowers experts and excludes laypeople." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): developmental psychology/clinical discourse — 'demonstrated', 'object permanence', 'assessment'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): empowers professionals — precise, authoritative; excludes parents — they can't easily use or question the terms.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'infant' clinical vs 'baby' everyday — distance created between expert and family.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): everyday — e.g. 'The baby showed she understands things stay even when hidden.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): gains accessibility for parents; loses precision ('object permanence' is a technical term with specific meaning).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clinical/psychological discourse. (b) Empowers experts, excludes parents. (c) Everyday version — accessible but less precise.",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'Dear Sir or Madam, I am writing to formally request an update regarding my application.'",
          },
          stem: "How many formal register markers appear in this letter?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Formal register", statement: "Formal markers signal institutional discourse." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Dear Sir or Madam', 'formally', 'regarding' — 3 formal markers.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Label",
            author: "Written for Akademik Space",
            text: "'The regime's propaganda machine churns out lies.'",
          },
          stem: "Whose interests does calling a government a 'regime' serve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No one's — it is neutral" },
              { id: "b", text: "The government's own interests" },
              { id: "c", text: "The readers' interests only" },
              { id: "d", text: "Opposition interests — 'regime' delegitimizes the government, framing it as illegitimate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded language", statement: "Labels like 'regime' serve ideological interests." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'regime' vs 'government' — delegitimizing label serves opponents — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Opposition interests — 'regime' delegitimizes the government",
          },
        },
        {
          id: "mll5-u2-ideology-discourse-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the discourse in: 'The suspect was apprehended and is currently in custody.'", marks: 1 },
            { label: "b", prompt: "Explain how this discourse differs from everyday language and why it matters.", marks: 2 },
            { label: "c", prompt: "Rewrite in everyday language and explain what changes in tone and authority.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Institutional discourse", statement: "Formal institutional language conveys authority and distance." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): police/legal discourse — 'suspect', 'apprehended', 'custody'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): technical terms ('apprehended', 'custody') are impersonal and precise — they convey institutional authority and exclude lay understanding.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'suspect' presumes guilt-adjacent status vs 'person' — discourse shapes perception of innocence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): everyday — e.g. 'Police caught the man, and he's in jail now.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): loses institutional authority/precision but gains accessibility; 'caught' is more vivid than 'apprehended'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Police/legal discourse. (b) Technical, authoritative, excludes laypeople; 'suspect' shapes guilt perception. (c) 'Police caught the man...' — accessible, less authoritative.",
          },
        },
      ],
    },
  ],
};
