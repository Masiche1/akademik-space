import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mla5-u1-lesson-1-3",
  code: "1-3",
  title: "Interpreting Nuanced Media and Cultural Texts",
  goal: "I CAN interpret complex media texts, recognise cultural assumptions, compare perspectives across contexts and infer meaning beyond literal content.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Subtext", definition: "The underlying meaning or attitude beneath the surface text." },
    { term: "Cultural assumption", definition: "A belief or value treated as normal within a particular culture or context." },
    { term: "Perspective", definition: "The viewpoint shaped by culture, experience, position or purpose." },
    { term: "Irony", definition: "A contrast between what is said and what is meant, often used critically." },
    { term: "Representation", definition: "The way people, groups or ideas are portrayed in media." },
  ],
  concepts: [
    {
      id: "mla5-u1-media-nuance",
      title: "Nuance in media texts",
      skill: "Detect subtext, irony, framing and cultural assumptions in complex media.",
      lesson: {
        sections: [
          {
            heading: "Surface and subtext",
            body: "Media texts often say one thing and imply another. A report may state facts neutrally while its ordering, omissions and word choice frame the story. Ask: What is included? What is left out? What would a different audience need to know?",
          },
          {
            heading: "Irony and understatement",
            body: "Irony appears when praise sounds like criticism or criticism sounds polite: 'What a wonderfully convenient excuse.' Understatement minimises something important: 'The decision was perhaps not entirely popular.' These devices require inference; the literal meaning is not the full meaning.",
          },
          {
            heading: "Framing",
            body: "Framing is the angle through which an event is presented. The same protest may be called a 'riot' by one source and a 'demonstration' by another. Labels carry value. Compare several sources to identify what each frame foregrounds and what it hides.",
          },
        ],
        keyFormulas: [
          { name: "Nuance signals", statement: "Included vs omitted / literal vs implied / labelled vs framed" },
          { name: "Framing cues", statement: "riot vs demonstration / crisis vs challenge / victims vs participants" },
        ],
        workedExample: {
          problem: "Headline: 'Officials welcome 'spontaneous' festival crowds'. What might 'spontaneous' imply?",
          solution: "It may imply the crowd was not fully authorised or that the writer is questioning the official account.",
        },
      },
      questions: [
        {
          id: "mla5-u1-media-nuance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'framing' in media analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The technical quality of a video" },
              { id: "b", text: "The angle or perspective through which an event is presented" },
              { id: "c", text: "The length of a headline" },
              { id: "d", text: "The number of facts included" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Framing", statement: "The perspective or angle used to present an event." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — framing = angle/perspective.", working: "perspective", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The angle or perspective through which an event is presented",
            commonErrors: ["Confusing framing with factual accuracy."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Headline A: 'Students march for safer crossings'\nHeadline B: 'Traffic disrupted as students block major road'",
          },
          stem: "Explain how the two headlines frame the same event differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Headline framing", statement: "Word choice foregrounds purpose in A and disruption in B." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — A frames students by purpose: safer crossings.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — B frames event by impact: traffic disrupted.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — different labels ('march' vs 'block') carry different values.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A emphasises the students' purpose; B emphasises disruption and uses more negative wording.",
            commonErrors: ["Saying one headline is false rather than differently framed."],
            examinerNote: "Must explain framing, not truth value.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The minister described the protest as 'largely peaceful', though residents reported broken windows and clashes with police. Officials praised the crowd's 'patriotic energy', while organisers insisted they had requested a permit weeks earlier. The article gives equal space to both claims but does not explain the permit dispute or quote independent witnesses.",
          },
          stem: "Analyse the article's use of reported speech, labels and balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Reported claims, labels and balance must be evaluated." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'largely peaceful' conflicts with reported clashes, creating ambiguity.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'patriotic energy' is evaluative; 'organisers insisted' signals dispute.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — equal space is given but context and witnesses are omitted.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — apparent balance may mask missing verification.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The article appears balanced but relies on disputed claims and omits independent verification and context.",
            commonErrors: ["Assuming equal space automatically means balanced reporting."],
            examinerNote: "Must assess balance through evidence quality.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Cultural News Item",
            author: "Written for Akademik Space",
            source: "Intercultural media practice",
            text: "A festival in a coastal city drew international visitors. Local organisers described it as a celebration of heritage and hospitality. Some international media framed the event as a 'colourful spectacle', emphasising costumes and food while omitting its religious significance. A local journalist wrote that outsiders often mistake public display for understanding, and that respectful participation requires learning the meanings behind the rituals. The festival ended with a community dinner open to all visitors.",
          },
          stem: "Read the item and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify two different purposes or perspectives on the festival.", marks: 2 },
            { label: "b", prompt: "What does the phrase 'colourful spectacle' omit?", marks: 2 },
            { label: "c", prompt: "Explain the local journalist's warning about public display.", marks: 2 },
            { label: "d", prompt: "Write a 80-100 word response showing cultural awareness.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural media interpretation", statement: "Recognise representation, omission and respectful participation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — local purpose: heritage/hospitality; international frame: spectacle.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — identifies both insider and outsider perspectives.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — omits religious significance and deeper meanings.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — focuses on surface aesthetics rather than context.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — public display can be mistaken for full understanding.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — respectful participation requires learning meanings.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — response is culturally sensitive, accurate and respectful.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — response avoids appropriation and remains within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) heritage celebration vs spectacle (b) religious significance/context (c) display is not understanding (d) culturally aware response.",
            commonErrors: ["Treating all cultural representation as equivalent."],
            examinerNote: "(d) should avoid appropriation or stereotypes.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'subtext' in a media text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The underlying meaning or attitude beneath the surface text" },
              { id: "b", text: "The font size used in a headline" },
              { id: "c", text: "The literal meaning of every word" },
              { id: "d", text: "A direct quotation from a source" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "Meaning implied beneath the surface text." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — subtext is implied, not literal.", working: "implied", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The underlying meaning or attitude beneath the surface text",
            commonErrors: ["Confusing subtext with literal content."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A writer calls a serious problem 'a minor hiccup'. What device is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal description" },
              { id: "b", text: "Neutral reporting" },
              { id: "c", text: "Direct quotation" },
              { id: "d", text: "Understatement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Understatement", statement: "Minimising language that makes something seem smaller than it is." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'minor hiccup' minimises a serious problem.", working: "understatement", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Understatement",
            commonErrors: ["Reading 'hiccup' literally as a small event."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Headline A: 'Council approves new cycling lanes'\nHeadline B: 'Chaos as cars gridlock streets during lane protest'",
          },
          stem: "Which headline frames the event more negatively?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both equally" },
              { id: "b", text: "Headline B" },
              { id: "c", text: "Headline A" },
              { id: "d", text: "Neither — both are neutral" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Headline framing", statement: "Words like 'chaos' and 'gridlock' carry negative evaluation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'chaos' and 'gridlock' frame disruption negatively.", working: "negative frame", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Headline B",
            commonErrors: ["Assuming both headlines are equally neutral."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Labels in Reporting",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "One source calls the gathering a 'riot'; another calls it a 'demonstration'; a third calls it a 'crisis'.",
          },
          stem: "How many value-laden labels are used to describe the same event?",
          response: {
            type: "numeric",
            parts: [{ label: "Labels", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framing labels", statement: "Different labels for one event reveal different frames." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'riot', 'demonstration', 'crisis' = 3 labels.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing that all three describe the same event."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Report Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The minister 'warmly welcomed' the delegates, describing the talks as 'frank and productive'. Delegates, however, described the session as 'tense' and left early.",
          },
          stem: "Identify the subtext in the minister's description and the contrast with the delegates' account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtext detection", statement: "Official positive language can contrast sharply with participant accounts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — subtext: 'warmly welcomed' and 'frank and productive' present an official positive frame.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — contrast: delegates say 'tense' and left early.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — implication: official account may downplay conflict.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Official warmth contrasts with delegates' 'tense' account; subtext suggests a rosier official frame.",
            commonErrors: ["Accepting the minister's description as the full truth."],
            examinerNote: "Must identify both accounts and the implied discrepancy.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Commentary Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "'What a wonderfully convenient excuse,' the columnist wrote, praising the minister's explanation for the delay.",
          },
          stem: "What does the columnist's 'praise' actually convey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genuine admiration" },
              { id: "b", text: "Ironic criticism of the excuse" },
              { id: "c", text: "Support for the minister's actions" },
              { id: "d", text: "Confusion about the delay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Excessive praise in a critical context signals the opposite." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'wonderfully convenient' is ironic given 'excuse'.", working: "irony", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ironic criticism of the excuse",
            commonErrors: ["Reading the praise literally."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The factory closure was announced 'reluctantly' after months of 'consultation'. Local residents described the consultation as a 'formality', noting that no alternative sites were offered. The article quotes the company's statement at length but gives residents only one short paragraph.",
          },
          stem: "Analyse the article's framing, balance and omissions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Evaluate labels, balance of voices and omitted context." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'reluctantly' and 'consultation' are company-framed labels; residents call it a 'formality'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — imbalance: company statement quoted at length; residents get one paragraph.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — omission: no alternative sites were offered.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — conclusion: framing favours the company's account.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The article frames the closure through company language, gives it more space, and omits that no alternatives were offered.",
            commonErrors: ["Assuming quoting both sides equals balanced reporting."],
            examinerNote: "Must address framing, balance and omission.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Two Reports",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Report 1 mentions the 'victims' of the flood and the 'heroic' rescue. Report 2 mentions 'affected residents' and the 'response effort'.",
          },
          stem: "How many emotionally loaded words appear in Report 1, and how many neutral alternatives appear in Report 2?",
          response: {
            type: "numeric",
            parts: [
              { label: "Loaded words in Report 1", answer: 2 },
              { label: "Neutral alternatives in Report 2", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Loaded language", statement: "'Victims' and 'heroic' carry emotion; 'affected residents' is more neutral." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'victims' and 'heroic' = 2 loaded words.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'affected residents' and 'response effort' = 2 neutral phrases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 loaded; 2 neutral.",
            commonErrors: ["Counting 'flood' or 'rescue' as loaded."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Headline Pair",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Source A: 'Protesters demand action'. Source B: 'Troublemakers disrupt downtown'.",
          },
          stem: "How many words in the two headlines carry clearly different evaluations of the same event?",
          response: {
            type: "numeric",
            parts: [{ label: "Differently valued words", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framing comparison", statement: "'Protesters' vs 'troublemakers' and 'demand' vs 'disrupt' frame differently." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Protesters'/'Troublemakers' and 'demand'/'disrupt' = 3 contrasted pairs.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'action' or 'downtown' as evaluative."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A report mentions every detail of an event except the victims' accounts. What does this omission suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The framing may privilege official or perpetrator perspectives" },
              { id: "b", text: "The victims had nothing to say" },
              { id: "c", text: "The report is guaranteed to be false" },
              { id: "d", text: "Nothing — omissions are always accidental" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Omission analysis", statement: "What is left out reveals whose perspective the text privileges." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — omitting victims' voices privileges other perspectives.", working: "perspective", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The framing may privilege official or perpetrator perspectives",
            commonErrors: ["Assuming omissions carry no meaning."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-media-nuance-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Media Item: School Closure",
            author: "Written for Akademik Space",
            source: "Intercultural media practice",
            text: "A school announced it would close its library to 'streamline resources'. Students described the move as 'the end of quiet study space'. The local newspaper headlined the story 'School modernises learning', while a student blog used 'School silences readers'. Both reports mentioned the same budget figures but interpreted them differently: the paper called the savings 'efficient', the blog called them 'a false economy'.",
          },
          stem: "Read the item and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify two different frames used for the same decision.", marks: 2 },
            { label: "b", prompt: "What does 'streamline resources' omit or soften?", marks: 2 },
            { label: "c", prompt: "Explain how 'efficient' and 'false economy' interpret the same figures differently.", marks: 2 },
            { label: "d", prompt: "Write a 80-100 word media response showing awareness of framing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framing analysis", statement: "Identify frames, omissions and competing interpretations of the same facts." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — frame 1: 'modernises learning' (positive); frame 2: 'silences readers' (negative).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — both frames identified with their sources.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'streamline' softens the loss of a valued space.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — omits student attachment to the library.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'efficient' frames savings positively; 'false economy' frames them as short-sighted.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — same figures, opposite evaluations.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — response identifies framing explicitly and stays balanced.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — response is clear, accurate and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) modernises vs silences (b) softens loss (c) positive vs negative reading of savings (d) framing-aware response.",
            commonErrors: ["Treating the two reports as simply contradictory facts."],
            examinerNote: "(d) should name the framing, not just pick a side.",
          },
        },
        {
          id: "mla5-u1-media-nuance-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Commentary",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The editorial praised the plan as 'bold, visionary and utterly flawless' — words chosen, readers noted, by the same agency that designed the plan.",
          },
          stem: "What does the final clause imply about the editorial's praise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The editorial is neutral reporting" },
              { id: "b", text: "The plan is definitely flawless" },
              { id: "c", text: "The praise is fully independent" },
              { id: "d", text: "The praise may be compromised by a conflict of interest" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conflict of interest", statement: "Source authorship by interested parties undermines apparent praise." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the praising agency designed the plan, so praise is suspect.", working: "conflict", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The praise may be compromised by a conflict of interest",
            commonErrors: ["Accepting superlative praise without checking the source."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u1-cultural-texts",
      title: "Comparing cultural perspectives",
      skill: "Compare how cultural context shapes interpretation and produce nuanced cross-cultural comparisons.",
      lesson: {
        sections: [
          {
            heading: "Culture and interpretation",
            body: "The same text can carry different meanings across cultures because of values, history and social norms. A direct refusal may be polite in one context and blunt in another. A smile may signal happiness, embarrassment or politeness depending on context. Always infer from situation, not stereotype.",
          },
          {
            heading: "Avoiding cultural generalisation",
            body: "Do not say 'In Japan, people...' or 'In Brazil, everyone...' as if cultures are uniform. Use cautious language: 'In some contexts', 'many people may', 'this can vary'. Compare **specific practices** rather than essentialising whole groups. Evidence should come from texts, interviews or documented examples.",
          },
          {
            heading: "Cross-cultural comparison",
            body: "A strong comparison identifies a **similarity**, a **difference**, a possible **reason** and a **limit** to the comparison. For example: 'Both cultures value hospitality, but the form differs: one may emphasise formal invitation while another emphasises spontaneous welcome.' This is more precise than 'Culture A is formal and Culture B is warm.'",
          },
        ],
        keyFormulas: [
          { name: "Cultural caution", statement: "In some contexts / may vary / specific practice rather than whole culture" },
          { name: "Comparison structure", statement: "Similarity + difference + reason + limit" },
        ],
        workedExample: {
          problem: "Compare gift-giving in two cultures where one avoids opening gifts immediately.",
          solution: "Similarity: gift-giving expresses respect. Difference: timing of opening. Possible reason: modesty or privacy norms. Limit: practice may vary by region and relationship.",
        },
      },
      questions: [
        {
          id: "mla5-u1-cultural-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can the same gesture have different meanings across cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because culture, history and social norms shape interpretation" },
              { id: "b", text: "Because gestures cannot be observed" },
              { id: "c", text: "Because language is irrelevant" },
              { id: "d", text: "Because gestures are always random" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural context", statement: "Interpretation depends on cultural and social context." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — context shapes meaning.", working: "context", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because culture, history and social norms shape interpretation",
            commonErrors: ["Assuming gestures have universal meaning."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "Description A: 'In the meeting, Ana smiled but did not object when the proposal was challenged.'\n\nDescription B: 'In the meeting, Ana smiled and later privately expressed strong disagreement with the proposal.'",
          },
          stem: "How might a culturally aware reader interpret Ana's smile in each description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contextual inference", statement: "Smile may signal politeness or conceal disagreement; context matters." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — in A, smile plus no objection may signal polite restraint.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — in B, smile may mask disagreement later revealed privately.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — reader should not assume smile = agreement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The smile may be polite or conceal disagreement; context shows it is not necessarily agreement.",
            commonErrors: ["Reading the smile as straightforward approval."],
            examinerNote: "Must be cautious and context-based.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Cross-Cultural Excerpt",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "In Country X, students often address teachers by formal titles and wait to be invited to speak. In Country Y, students are encouraged to question teachers openly in class. A student moving from X to Y may initially interpret direct questions as disrespectful, while teachers in Y may see silence as uncertainty rather than respect.",
          },
          stem: "Explain the possible sources of miscommunication and how each side might interpret the other's behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural communication", statement: "Different norms for authority and participation cause misreading." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — student from X may see open questioning as disrespectful.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — teachers from Y may see silence as uncertainty rather than respect.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cause: different norms for authority and classroom participation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — solution requires explicit norms and mutual explanation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Miscommunication arises from different norms: questioning may seem disrespectful to one side and silence may seem uncertain to the other.",
            commonErrors: ["Labeling one culture as correct."],
            examinerNote: "Must explain both interpretations without stereotyping.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Comparative Text",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "In one community, celebrations are public and inclusive: neighbours cook together and visitors are welcomed without formal invitation. In another, celebrations may be family-centred and require advance notice, with rituals that outsiders are not expected to understand fully. Both communities describe their practice as 'hospitality', but the scale, timing and level of openness differ. A visitor who assumes one model applies everywhere may unintentionally cause offence.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "State one similarity and one difference between the two practices.", marks: 2 },
            { label: "b", prompt: "Why might a visitor cause offence?", marks: 2 },
            { label: "c", prompt: "Write a cautious comparison sentence using 'may' or 'can'.", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word response advising a visitor.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced cross-cultural comparison", statement: "Compare practices while avoiding generalisation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — similarity: both value hospitality; difference: public/open vs family/formal.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — similarity and difference both clearly stated.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — offence can arise from assuming one model applies everywhere.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — different norms about invitation and participation explain risk.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — comparison uses cautious modal language.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — sentence is accurate and specific.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — advice is respectful, practical and culturally aware.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — advice avoids stereotyping and remains within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) hospitality shared; openness differs (b) wrong assumptions about invitation (c) cautious comparison (d) respectful advice.",
            commonErrors: ["Using absolute statements like 'In this culture everyone...'."],
            examinerNote: "(c) and (d) should avoid stereotyping.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should writers avoid statements like 'In Japan, everyone...' when discussing culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it overgeneralises a diverse group" },
              { id: "b", text: "Because cultures have no differences" },
              { id: "c", text: "Because 'everyone' is always grammatically wrong" },
              { id: "d", text: "Because Japanese culture cannot be discussed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Avoiding generalisation", statement: "Cultures are diverse; avoid 'all/always/every' claims about whole groups." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'everyone' treats a diverse group as uniform.", working: "overgeneralisation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because it overgeneralises a diverse group",
            commonErrors: ["Thinking cultural description itself is forbidden."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is the most culturally cautious way to describe a practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In some contexts, people may do X." },
              { id: "b", text: "It is natural that everyone does X." },
              { id: "c", text: "All members of the group do X." },
              { id: "d", text: "In this culture, people always do X." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cautious language", statement: "'In some contexts' and 'may' avoid essentialising cultures." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'in some contexts' and 'may' limit the claim appropriately.", working: "cautious", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In some contexts, people may do X.",
            commonErrors: ["Choosing absolute phrasing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Classroom Observation",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "When the teacher asked a question, several students remained silent and looked at their desks. In this school, students are expected to wait to be invited before speaking.",
          },
          stem: "What is the most likely explanation for the silence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The teacher asked no question" },
              { id: "b", text: "The students were following the norm of waiting to be invited" },
              { id: "c", text: "The students were deliberately rude" },
              { id: "d", text: "The students did not understand the language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contextual inference", statement: "Behaviour should be interpreted through the stated cultural norm." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — silence matches the stated norm of waiting for invitation.", working: "norm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The students were following the norm of waiting to be invited",
            commonErrors: ["Interpreting silence as rudeness without context."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Cautious Comparison",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "In some communities, celebrations may be public, while in others they can be more family-centred; practices can also vary by region and relationship.",
          },
          stem: "How many cautious modal or limiting expressions appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Cautious expressions", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedged comparison", statement: "'May', 'can', 'some' and 'vary' limit cultural claims." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'some', 'may', 'while' is structural; count 'may', 'can', 'some', 'can', 'vary' = accept 4-5.", working: "4-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 or 5",
            commonErrors: ["Counting 'the' or 'in' as limiting expressions."],
            examinerNote: "Accept 4 or 5 depending on whether 'some' and 'vary' are counted.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q9",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Business Encounter",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "During the negotiation, Mr Ito smiled and said 'that may be difficult'. His colleague later explained that in this context a smile accompanied by hesitation can signal polite disagreement rather than agreement.",
          },
          stem: "Interpret Mr Ito's smile and words in context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural inference", statement: "Gestures and hedged words carry context-dependent meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'that may be difficult' is a hedged refusal, not agreement.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — the explanation states smile plus hesitation signals polite disagreement.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — conclusion: he is declining politely rather than accepting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Mr Ito is politely disagreeing; the smile masks hesitation, not consent.",
            commonErrors: ["Reading the smile as agreement."],
            examinerNote: "Must use the stated context, not stereotypes.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Interpretations",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "Statement A: 'People from Region X are always formal in meetings.' Statement B: 'In some formal settings in Region X, people may use titles and wait to be invited to speak.'",
          },
          stem: "Which statement is more interculturally responsible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statement A" },
              { id: "b", text: "Statement B" },
              { id: "c", text: "Neither can be written" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specificity over generalisation", statement: "Specific practices with cautious language beat whole-culture claims." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — B limits to 'some settings' and uses 'may'.", working: "specific/cautious", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Statement B",
            commonErrors: ["Choosing the simpler absolute statement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Exchange Excerpt",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "A student from a culture where direct disagreement is valued told a classmate 'your idea will not work'. The classmate, from a culture where indirectness preserves harmony, heard the comment as a personal attack and withdrew. Neither explained their interpretation to the other.",
          },
          stem: "Explain the sources of miscommunication and how each side might have interpreted the other's behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural communication", statement: "Different norms for directness cause mutual misreading." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — speaker intended honest, direct feedback on the idea.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — listener heard attack on the person, not the idea.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cause: different norms for directness and face-saving.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — solution: explicit norms and clarification, not assumption.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Directness norms clashed: one meant idea-feedback, the other heard personal attack; clarification was missing.",
            commonErrors: ["Labeling one culture as rude or the other as oversensitive."],
            examinerNote: "Must explain both interpretations without stereotyping.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Comparison Table",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "The text states one similarity (both value hospitality) and two differences (public versus family-centred celebrations; spontaneous versus advance-notice invitations).",
          },
          stem: "How many similarities and how many differences does the text state?",
          response: {
            type: "numeric",
            parts: [
              { label: "Similarities", answer: 1 },
              { label: "Differences", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison counting", statement: "Track stated similarities and differences precisely." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — one similarity: hospitality.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — two differences: scale/openness and invitation norms.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1 similarity; 2 differences.",
            commonErrors: ["Counting hospitality itself as a difference."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Definition",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "In intercultural studies, a 'cultural assumption' is a belief treated as normal within a particular context.",
          },
          stem: "How many key elements define a cultural assumption in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural assumption", statement: "A belief treated as normal within a particular context." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — elements: a belief + treated as normal in a context = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'particular' as an element."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structure produces the strongest cross-cultural comparison?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single sentence about one culture only" },
              { id: "b", text: "A list of stereotypes about each culture" },
              { id: "c", text: "Culture A is formal; Culture B is warm." },
              { id: "d", text: "Similarity + difference + possible reason + limit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison structure", statement: "Similarity, difference, reason and limit produce nuanced comparison." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the four-part structure is the most precise and cautious.", working: "4-part", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Similarity + difference + possible reason + limit",
            commonErrors: ["Choosing the simplest contrast without qualification."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Comparative Text: Gift-Giving",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "In Community P, gifts are opened immediately in front of the giver, and refusing a gift can seem rude. In Community Q, gifts may be opened privately later, and a gift may be politely declined once before acceptance. Both communities use gift-giving to express respect, but the timing, openness and rules of refusal differ. Visitors who assume their own norms apply may unintentionally cause offence.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "State one similarity and one difference between the practices.", marks: 2 },
            { label: "b", prompt: "Why might a visitor cause offence?", marks: 2 },
            { label: "c", prompt: "Write one cautious comparison sentence using 'may' or 'can'.", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word response advising a visitor.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced cross-cultural comparison", statement: "Compare practices while avoiding generalisation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — similarity: both express respect; difference: immediate public opening vs private later opening.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — similarity and difference both clearly stated.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — offence arises from applying home norms (e.g., expecting immediate opening or no refusal ritual).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — different rules about timing and refusal explain the risk.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — sentence uses 'may'/'can' and is accurate and specific.", marks: 2, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — advice is respectful, practical and culturally aware.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — advice avoids stereotyping and stays within range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) respect shared; timing/opening differs (b) wrong assumptions about norms (c) cautious sentence (d) respectful advice.",
            commonErrors: ["Using absolute statements like 'In this culture everyone...'."],
            examinerNote: "(c) and (d) should avoid stereotyping.",
          },
        },
        {
          id: "mla5-u1-cultural-texts-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Writer's Note",
            author: "Written for Akademik Space",
            source: "Intercultural reading practice",
            text: "Instead of writing 'In Country X, people are always late', a careful writer says 'Punctuality norms may vary across regions and situations in Country X.'",
          },
          stem: "Why is the second version more interculturally responsible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses more difficult vocabulary" },
              { id: "b", text: "It agrees with every reader" },
              { id: "c", text: "It is longer" },
              { id: "d", text: "It avoids an absolute generalisation about a whole country" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuanced description", statement: "Hedged, variable language respects internal diversity." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'may vary' acknowledges diversity; 'always' essentialises.", working: "nuance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It avoids an absolute generalisation about a whole country",
            commonErrors: ["Thinking longer sentences are automatically better."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
  ],
};
