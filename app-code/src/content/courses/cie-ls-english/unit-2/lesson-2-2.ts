import type { Lesson } from "../../../types.ts";

const argumentExtract = {
  title: "Should School Phones Be Banned?",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Every break time in our school now looks the same: thirty students in a corridor, thirty faces lit from below by screens. Nobody talks. Nobody looks up. The head teacher says phones are 'a distraction', but the problem is not the phones — it is what we have stopped doing while holding them.\n\nSupporters of a ban say phones damage concentration and sleep. There is evidence for this: studies show students who sleep with phones in their rooms get less rest. But banning phones treats the symptom. The real question is why so many of us choose a screen over the person sitting next to us.\n\nI am not saying phones are harmless. I am saying a ban would make us feel virtuous without making us smarter. We need rules about when phones are used — but we also need to remember how to talk to each other again. That is the harder lesson, and no policy can teach it for us.",
};

const biographyExtract = {
  title: "The Woman Who Mapped the Wind",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "In 1884, a young woman named Sophia Snow walked into the US Weather Bureau in Washington and asked for a job. Her qualifications were unusual: she had spent years recording wind and cloud patterns in her notebook, drawn by hand, because she had no instruments worth the name.\n\nThe Bureau hired her as a 'computer' — the job title then given to people, mostly women, who performed calculations. Sophia spent her days reducing observations to numbers and her evenings drawing the weather maps that ships' captains would use to avoid storms. Her maps were so accurate that captains began requesting them by name.\n\nSophia never married, never travelled far from Washington, and never owned a telescope. Yet her wind maps saved lives for thirty years. When she died in 1927, the shipping journals called her 'the woman who read the sky' — a title she would probably have found rather silly. She had simply noticed things other people walked past.",
};

export const lesson22: Lesson = {
  id: "cile-u2-lesson-2-2",
  code: "2-2",
  title: "Sentence structure and style",
  goal: "I CAN analyse how sentence length, variety, openings and rhetorical devices shape meaning and style.",
  standards: ["0861 Reading: sentence-level analysis"],
  vocabulary: [
    { term: "Sentence variety", definition: "Mixing short and long sentences to control pace and emphasis." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Emotive language", definition: "Words chosen to provoke feeling rather than simply inform." },
    { term: "Rule of three", definition: "Grouping items in threes for rhythm and emphasis ('we came, we saw, we conquered')." },
    { term: "Repetition", definition: "Repeating a word or phrase for emphasis or rhythm." },
    { term: "Pace", definition: "The speed at which a text seems to move, controlled by sentence length." },
  ],
  concepts: [
    {
      id: "cile-u2-sentence-structure",
      title: "Sentence structure and pace",
      skill: "Analyse how sentence length, openings and structure control pace, emphasis and reader response.",
      lesson: {
        sections: [
          {
            heading: "Sentence length and pace",
            body: "- **Short sentences**: punchy, urgent, dramatic — 'The storm hit.'\n- **Long sentences**: flowing, descriptive, cumulative — build detail before the payoff.\n- Writers control pace deliberately: a long build-up followed by a short sentence creates impact.",
          },
          {
            heading: "Openings and endings",
            body: "- **Opening sentences** establish voice and hook: a question, a command, a shocking fact.\n- **Final sentences** deliver the point or twist the knife: 'That is the harder lesson, and no policy can teach it for us.'",
          },
          {
            heading: "Rhetorical devices at sentence level",
            body: "- **Rhetorical question**: 'why so many of us choose a screen over the person sitting next to us' — involves the reader.\n- **Rule of three**: lists in threes feel complete and memorable.\n- **Repetition**: 'We need rules... we also need...' — reinforces the argument.",
          },
        ],
        keyFormulas: [
          { name: "Structure → effect", statement: "Identify the structural choice, describe its rhythm, then state the effect on pace, emphasis or reader response." },
        ],
        workedExample: {
          problem: "'Banning phones treats the symptom.' Why is this short sentence effective after longer ones?",
          solution: "The short sentence lands like a verdict after the longer explanation. It is emphatic and memorable — the brevity itself signals a blunt truth.",
        },
      },
      questions: [
        {
          id: "cile-u2-sent-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "What is the effect of the short sentence 'Banning phones treats the symptom'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses the reader" },
              { id: "b", text: "It introduces a new topic slowly" },
              { id: "c", text: "It creates emphasis and finality" },
              { id: "d", text: "It summarises the whole text" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short sentence emphasis", statement: "Short sentences after longer ones land with force." },
            ],
            steps: [
              { reasoning: "The bluntness of the short sentence gives it verdict-like force.", working: "\\text{verdict-like}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** It creates emphasis and finality",
            commonErrors: ["Choosing (a) — the sentence is clear, not confusing."],
          },
        },
        {
          id: "cile-u2-sent-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: argumentExtract,
          stem: "Identify one rhetorical device in 'The real question is why so many of us choose a screen over the person sitting next to us.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question", statement: "A question asked for effect, drawing the reader into the argument." },
            ],
            steps: [
              { reasoning: "The sentence poses a 'why' question that is not meant to be answered literally.", working: "\\text{'why' question}", marks: 1, markCode: "AO2" },
              { reasoning: "It challenges the reader to examine their own behaviour.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical question — it forces the reader to confront their own screen habits rather than passively receive information.",
            commonErrors: ["Calling it a factual question or failing to explain its persuasive function."],
          },
        },
        {
          id: "cile-u2-sent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: argumentExtract,
          stem: "Analyse how sentence variety controls the pace and emphasis of the argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Mixing long and short sentences controls pace; short sentences emphasise." },
            ],
            steps: [
              { reasoning: "Evidence: long sentences build ideas ('The head teacher says phones are...').", working: "\\text{long build-up}", marks: 1, markCode: "AO2" },
              { reasoning: "Short sentences punctuate key points ('Banning phones treats the symptom').", working: "\\text{short verdict}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: pace slows for explanation, accelerates for conclusions — creates rhythm.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: variety keeps the argument engaging and makes points memorable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The alternation of long explanatory sentences and short verdicts controls pace — slow for reasoning, fast for conclusions — creating rhythm and making key points land with emphasis.",
            commonErrors: ["Describing sentence length without linking it to pace or emphasis."],
          },
        },
        {
          id: "cile-u2-sent-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: argumentExtract,
          stem: "The extract is a short argument against banning school phones.",
          parts: [
            { label: "a", prompt: "Quote the opening sentence and explain its effect on the reader.", marks: 2 },
            { label: "b", prompt: "Identify two rhetorical devices used in the middle paragraphs.", marks: 2 },
            { label: "c", prompt: "Explain the effect of the final sentence's length and wording.", marks: 2 },
            { label: "d", prompt: "How does the writer's sentence-level style support the argument's purpose?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Style serves purpose", statement: "Sentence choices must be linked to persuasive purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: 'Every break time in our school now looks the same: thirty students... thirty faces lit from below by screens.'", working: "\\text{thirty/thirty}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: vivid, slightly alarming image hooks the reader immediately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Device 1: rhetorical question ('why so many of us choose...').", working: "\\text{rhetorical question}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Device 2: rule of three / repetition ('We need rules... we also need...').", working: "\\text{repetition}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Final sentence is long and conclusive — a challenge, not a summary.", working: "\\text{long, conclusive}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'no policy can teach it for us' places responsibility on the reader — persuasive push.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Style mirrors argument: image hooks, questions involve, verdicts emphasise, challenge concludes.", working: "\\text{style mirrors argument}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The style itself performs persuasion — it does not just state a view.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion linking technique to purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) the 'thirty/thirty' image shocks and hooks (b) rhetorical question; repetition/'we need' (c) long conclusive challenge places responsibility on the reader (d) style performs persuasion — hooks, involves, emphasises, concludes",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Quotation plus accurate effect.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two devices correctly identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Final sentence's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Style-purpose link argued convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial link.", part: "d" },
            ],
            commonErrors: ["In (d) listing techniques without connecting them to persuasion."],
          },
        },
        {
          id: "cile-u2-sent-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "According to the opening image, how many students are in the corridor?",
          response: { type: "numeric", parts: [{ label: "Students", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening hook", statement: "A vivid opening image grabs attention before the argument begins." },
            ],
            steps: [
              { reasoning: "The image states 'thirty students in a corridor, thirty faces'.", working: "30", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering a different number — the image repeats 'thirty' twice."],
          },
        },
        {
          id: "cile-u2-sent-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "How many of these sentences from the argument are QUESTIONS? 'Every break time in our school now looks the same.' 'Why do so many of us choose a screen over the person next to us?' 'Banning phones treats the symptom.' 'That is the harder lesson.'",
          response: { type: "numeric", parts: [{ label: "Questions", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short sentence emphasis", statement: "The briefest sentence lands hardest." },
            ],
            steps: [
              { reasoning: "Only the 'why do so many of us choose...' sentence is a question = 1; it functions as a rhetorical question.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting statements ending in periods — check for the question mark and interrogative form."],
          },
        },
        {
          id: "cile-u2-sent-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: biographyExtract,
          stem: "Explain the effect of the biography's opening sentence: 'In 1884, a young woman named Sophia Snow walked into the US Weather Bureau in Washington and asked for a job.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening sentence", statement: "A specific date, name and action create an immediate factual hook." },
            ],
            steps: [
              { reasoning: "The date and name ground the story in fact — it reads like a record, not fiction.", working: "\\text{1884; Sophia Snow}", marks: 1, markCode: "AO2" },
              { reasoning: "'Asked for a job' creates instant narrative momentum — what happened next?", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The precise date, name and simple action create a factual hook — the reader is immediately inside a real event and wants to know what happened next.",
            commonErrors: ["Saying it is 'boring' — the specificity is what makes it gripping."],
          },
        },
        {
          id: "cile-u2-sent-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: argumentExtract,
          stem: "Explain the effect of the repetition in 'We need rules about when phones are used — but we also need to remember how to talk to each other again.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repetition", statement: "Repeating 'we need' links two demands and gives them equal weight." },
            ],
            steps: [
              { reasoning: "'We need ... we also need' repeats the structure, binding the two demands together.", working: "\\text{'we need' x2}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: rules alone are not enough — the second 'need' carries the writer's real point.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The repeated 'we need' links rules and human connection as twin demands, while 'also' quietly makes the second — talking to each other — the deeper point.",
            commonErrors: ["Identifying repetition without explaining its argumentative effect."],
          },
        },
        {
          id: "cile-u2-sent-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "Which sentence contains a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every break time in our school now looks the same" },
              { id: "b", text: "Banning phones treats the symptom" },
              { id: "c", text: "The real question is why so many of us choose a screen over the person sitting next to us" },
              { id: "d", text: "That is the harder lesson" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question", statement: "A question asked for effect, not expecting an answer." },
            ],
            steps: [
              { reasoning: "'Why so many of us choose...' challenges the reader without expecting an answer.", working: "\\text{'why' question}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The real question is why so many of us choose a screen over the person sitting next to us",
            commonErrors: ["Choosing (d) — it is a statement, not a question."],
          },
        },
        {
          id: "cile-u2-sent-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: biographyExtract,
          stem: "Explain the effect of the rule of three in 'Sophia never married, never travelled far from Washington, and never owned a telescope.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rule of three", statement: "Three parallel items create rhythm and completeness — here, three absences." },
            ],
            steps: [
              { reasoning: "Three 'never' phrases are parallel — same structure, same rhythm.", working: "\\text{never x3}", marks: 1, markCode: "AO2" },
              { reasoning: "The rule of three makes the list feel complete — these are the limits of her world.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: her lack of conventional success makes her achievement seem purer — she did it with nothing.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The rule of three 'never' phrases create a rhythmic, complete sense of her limitations — no marriage, no travel, no telescope — making her achievement seem all the more remarkable.",
            commonErrors: ["Listing the three items without explaining the rhythmic/completeness effect."],
          },
        },
        {
          id: "cile-u2-sent-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: argumentExtract,
          stem: "Analyse the final sentence: 'That is the harder lesson, and no policy can teach it for us.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concluding sentence", statement: "A final sentence can deliver the argument's real point and place responsibility on the reader." },
            ],
            steps: [
              { reasoning: "It names 'the harder lesson' — shifting from phones to human connection.", working: "\\text{harder lesson}", marks: 1, markCode: "AO2" },
              { reasoning: "'No policy can teach it for us' absolves institutions and burdens the individual.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: ends not with a solution but a challenge — the argument's true demand.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The final sentence redirects the argument from policy to personal responsibility — 'no policy can teach it for us' challenges the reader to act, making the ending a demand rather than a summary.",
            commonErrors: ["Saying it 'summarises' — it actually escalates the argument's demand."],
          },
        },
        {
          id: "cile-u2-sent-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: biographyExtract,
          stem: "Which sentence in the biography is the shortest and most emphatic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Bureau hired her as a 'computer'" },
              { id: "b", text: "Sophia spent her days reducing observations to numbers" },
              { id: "c", text: "She had simply noticed things other people walked past." },
              { id: "d", text: "Her qualifications were unusual" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short sentence emphasis", statement: "A short, simple closing sentence delivers the biographical point with quiet force." },
            ],
            steps: [
              { reasoning: "The final sentence is short and carries the extract's whole point.", working: "\\text{short, conclusive}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** She had simply noticed things other people walked past.",
            commonErrors: ["Choosing (d) — it is short but mid-text; the emphatic one lands the ending."],
          },
        },
        {
          id: "cile-u2-sent-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "How many times is 'Nobody' repeated in 'Nobody talks. Nobody looks up.'?",
          response: { type: "numeric", parts: [{ label: "Repetitions of 'Nobody'", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repetition and pace", statement: "Two short parallel sentences create a frozen, joyless rhythm." },
            ],
            steps: [
              { reasoning: "'Nobody' appears once in each of the two sentences = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the sentences instead — 'Nobody' itself appears twice."],
          },
        },
        {
          id: "cile-u2-sent-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: biographyExtract,
          stem: "Analyse how sentence structure shapes the pace of the biography's third paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety and pace", statement: "The paragraph alternates a long cumulative sentence with short ones to control rhythm." },
            ],
            steps: [
              { reasoning: "'Sophia never married, never travelled far..., and never owned a telescope' is a long, cumulative list.", working: "\\text{long list}", marks: 1, markCode: "AO2" },
              { reasoning: "'Yet her wind maps saved lives for thirty years' is a short turn — the payoff.", working: "\\text{short payoff}", marks: 1, markCode: "AO2" },
              { reasoning: "The long build-up of absences makes the short achievement sentence land harder.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: pace slows for the list of lacks, then snaps forward for the triumph.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The paragraph builds a long cumulative list of absences, then snaps into the short 'saved lives for thirty years' — the contrast in length makes the achievement feel sudden and emphatic.",
            commonErrors: ["Describing sentences without linking length to pace or emphasis."],
          },
        },
        {
          id: "cile-u2-sent-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: argumentExtract,
          stem: "You are analysing the sentence-level style of the phone-ban argument.",
          parts: [
            { label: "a", prompt: "Quote the opening sentence and explain its effect.", marks: 2 },
            { label: "b", prompt: "Identify two rhetorical devices in the middle of the argument.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'I am not saying phones are harmless. I am saying...'", marks: 2 },
            { label: "d", prompt: "How does sentence-level style support the writer's persuasive purpose?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Style serves purpose", statement: "Hooks, questions, verdicts and qualification all serve persuasion." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: the 'thirty/thirty' image of screen-lit faces.", working: "\\text{thirty/thirty}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: vivid, unsettling hook that implicates the reader.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Device 1: rhetorical question ('why so many of us choose...').", working: "\\text{rhetorical question}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Device 2: repetition ('We need rules ... we also need').", working: "\\text{repetition}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The 'I am not saying ... I am saying' structure concedes then pivots.", working: "\\text{concede + pivot}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effect: makes the writer seem fair-minded while sharpening the real point.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Style mirrors argument: image hooks, questions involve, verdicts emphasise, concession builds trust.", working: "\\text{style = argument}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The style performs persuasion rather than just stating a view.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion linking technique to purpose.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) the 'thirty/thirty' image hooks with an unsettling scene (b) rhetorical question; repetition of 'we need' (c) 'not saying/ saying' concedes then pivots — fair but sharper (d) hooks, questions, verdicts and concession all perform the persuasion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Quotation plus accurate effect.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two devices correctly identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Concession-pivot structure explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Style-purpose link argued convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial link.", part: "d" },
            ],
            commonErrors: ["In (d) listing techniques without connecting them to persuasion."],
          },
        },
        {
          id: "cile-u2-sent-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: biographyExtract,
          stem: "You are analysing the sentence-level style of the biography.",
          parts: [
            { label: "a", prompt: "Explain the effect of the opening sentence's structure.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the rule of three in 'never married, never travelled..., never owned'.", marks: 2 },
            { label: "c", prompt: "Explain the effect of the final sentence's brevity.", marks: 2 },
            { label: "d", prompt: "How does the sentence-level style serve the biographical purpose?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structure serves purpose", statement: "Factual openings, rhythmic lists and short closings shape a respectful biography." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: date + name + action — factual, immediate.", working: "\\text{1884; asked for a job}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: reads like a record; hooks without embellishment.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Three parallel 'never' phrases create rhythm and completeness.", working: "\\text{never x3}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Effect: her lacks make the achievement purer.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Final sentence is short and simple — 'simply noticed'.", working: "\\text{short close}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effect: quiet emphasis — the whole biography lands in one plain sentence.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Style is factual and restrained — suits an admiring but honest biography.", working: "\\text{restrained}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Emphasis falls on achievement, not embellishment.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) factual opening hooks like a record (b) rule of three makes her lacks feel complete, heightening achievement (c) short close lands the point quietly (d) restrained, factual style suits honest admiration",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Opening effect explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Rule of three effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Brevity effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Style-purpose link explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid link.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it is formal' without linking to biographical purpose."],
          },
        },
      ],
    },
    {
      id: "cile-u2-word-choice",
      title: "Word choice and connotation",
      skill: "Analyse how a writer's word choices carry connotation and reveal attitude.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "- **Denotation**: the dictionary meaning — 'slim' and 'skinny' both mean thin.\n- **Connotation**: the feelings and associations a word carries — 'slim' is positive, 'skinny' is negative.\n- Writers choose words for their connotations to shape the reader's attitude.",
          },
          {
            heading: "Field of associated words",
            body: "Words cluster around themes: a writer describing a storm might choose 'howled', 'screeched', 'ferocious' — all carrying menace. Replacing neutral words with loaded ones reveals the writer's stance.",
          },
          {
            heading: "Analysing word choice",
            body: "1. Quote the word or phrase.\n2. Give its denotation (literal meaning).\n3. Identify its connotation (feelings/associations).\n4. State how it shapes the reader's view of the subject.",
          },
        ],
        keyFormulas: [
          { name: "Word → connotation → attitude", statement: "The connotation of a word reveals the writer's attitude towards what it describes." },
        ],
        workedExample: {
          problem: "Biography extract: 'the woman who read the sky'. Connotation of 'read'?",
          solution: "Denotation: interpreted. Connotation: skill, patience, almost intimacy — she understood the sky the way a scholar reads a text. It dignifies her informal skill.",
        },
      },
      questions: [
        {
          id: "cile-u2-word-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "In 'thirty faces lit from below by screens', what feeling does 'lit from below' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Professional efficiency" },
              { id: "b", text: "Boredom" },
              { id: "c", text: "Something slightly sinister or unnatural" },
              { id: "d", text: "Warmth and comfort" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "Under-lighting is associated with horror and the unnatural — it makes the scene feel unsettling." },
            ],
            steps: [
              { reasoning: "Faces lit from below is a classic unsettling image.", working: "\\text{under-lighting}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Something slightly sinister or unnatural",
            commonErrors: ["Choosing (a) — under-lighting suggests the opposite of warmth."],
          },
        },
        {
          id: "cile-u2-word-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: biographyExtract,
          stem: "Explain the connotation of calling Sophia a 'computer' in the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Historical term", statement: "'Computer' originally meant a person who computed; the word now means a machine." },
            ],
            steps: [
              { reasoning: "Denotation: her job title at the Weather Bureau.", working: "\\text{job title}", marks: 1, markCode: "AO2" },
              { reasoning: "Connotation/irony: today 'computer' means a machine — her skilled human work is now done by devices, making her achievement quietly poignant.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It was her actual job title, but today the word means a machine — the irony dignifies her human skill and hints that her work is now done by computers.",
            commonErrors: ["Saying 'computer' is an insult — it was a legitimate title."],
          },
        },
        {
          id: "cile-u2-word-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: argumentExtract,
          stem: "Analyse how the writer's word choices in the final paragraph reveal their attitude to the phone ban.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "Words like 'virtue', 'symptom', 'harder lesson' carry judgement." },
            ],
            steps: [
              { reasoning: "'feel virtuous' — implies the ban offers empty moral comfort, not real change.", working: "\\text{'virtue' = empty comfort}", marks: 1, markCode: "AO2" },
              { reasoning: "'treats the symptom' — medical metaphor frames the ban as superficial.", working: "\\text{'symptom' = superficial}", marks: 1, markCode: "AO2" },
              { reasoning: "'the harder lesson' — implies real change requires effort the ban avoids.", working: "\\text{'harder lesson'}", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: the writer sees the ban as well-meaning but inadequate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Virtuous', 'symptom' and 'harder lesson' frame the ban as feel-good but superficial — the writer respects the intention but doubts the solution.",
            commonErrors: ["Listing words without explaining their connotative effect."],
          },
        },
        {
          id: "cile-u2-word-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: biographyExtract,
          stem: "The biography uses carefully chosen words to shape our view of Sophia.",
          parts: [
            { label: "a", prompt: "Quote two words or phrases with positive connotations.", marks: 2 },
            { label: "b", prompt: "Explain how 'saved lives' shapes our view of her work.", marks: 2 },
            { label: "c", prompt: "What is the effect of 'a title she would probably have found rather silly'?", marks: 2 },
            { label: "d", prompt: "How do the word choices create a tone that is admiring but not sentimental?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation and tone", statement: "Positive words build admiration; ironic or deflating phrases keep it honest." },
            ],
            steps: [
              { part: "a", reasoning: "Positive phrases: 'saved lives', 'read the sky', 'by name'.", working: "\\text{'saved lives'}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate quotations.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Saved lives' elevates her maps from data to moral achievement.", working: "\\text{moral achievement}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes her skill consequential, not merely technical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It deflates the heroic title — she was modest, not self-important.", working: "\\text{modest}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Keeps the admiration honest by showing she would reject praise.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Admiring words ('saved lives', 'read the sky') build respect.", working: "\\text{admiring}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Deflating details ('rather silly', 'never owned a telescope') prevent sentimentality.", working: "\\text{deflating}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Balance creates a believable, respectful portrait.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'saved lives', 'read the sky', 'by name' (b) elevates her maps to moral achievement (c) deflates the title, showing modesty (d) admiration balanced by deflating detail = honest respect",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate quotations of positive language.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "'Saved lives' effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained with modesty link.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tone analysed convincingly through word choice.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial analysis.", part: "d" },
            ],
            commonErrors: ["In (d) describing tone without referencing specific word choices."],
          },
        },
        {
          id: "cile-u2-word-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "What is the connotation of calling phones 'a distraction'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Useful and efficient" },
              { id: "b", text: "Illegal and dangerous" },
              { id: "c", text: "Expensive and rare" },
              { id: "d", text: "Something that diverts attention from what matters" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Distraction' implies phones pull attention away from more important things." },
            ],
            steps: [
              { reasoning: "A 'distraction' is something that diverts from the main focus — here, learning and people.", working: "\\text{diverts attention}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Something that diverts attention from what matters",
            commonErrors: ["Choosing (d) — 'distraction' is negative but not as extreme as 'dangerous'."],
          },
        },
        {
          id: "cile-u2-word-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: biographyExtract,
          stem: "How many of these words carry a POSITIVE connotation in the biography? 'accurate', 'requested', 'rather silly', 'saved'.",
          response: { type: "numeric", parts: [{ label: "Positive words", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Read' suggests skill — the biography admires Sophia; 'rather silly' is the deflating exception." },
            ],
            steps: [
              { reasoning: "'Accurate' and 'saved' are positive; 'requested' is neutral and 'rather silly' is negative.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'requested' — it is neutral, not positive."],
          },
        },
        {
          id: "cile-u2-word-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: argumentExtract,
          stem: "Explain the connotation of 'a ban would make us feel virtuous without making us smarter'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Virtuous' implies empty moral comfort — feeling good without real change." },
            ],
            steps: [
              { reasoning: "'Virtuous' suggests moral self-satisfaction rather than genuine improvement.", working: "\\text{'virtue' = self-satisfaction}", marks: 1, markCode: "AO2" },
              { reasoning: "Paired with 'without making us smarter' it frames the ban as feel-good but ineffective.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Virtuous' implies hollow moral satisfaction — the ban would make people feel good without achieving real change.",
            commonErrors: ["Taking 'virtue' literally as a positive quality rather than ironic."],
          },
        },
        {
          id: "cile-u2-word-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: biographyExtract,
          stem: "Explain the effect of 'a title she would probably have found rather silly'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deflating detail", statement: "Suggesting she would find praise 'silly' keeps the admiration honest and modest." },
            ],
            steps: [
              { reasoning: "'Rather silly' deflates the heroic title 'the woman who read the sky'.", working: "\\text{'rather silly'}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: shows her modesty — she did the work for its own sake, not for praise.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It deflates the heroic title, showing Sophia's modesty — she would have dismissed the praise, making the admiration more believable.",
            commonErrors: ["Saying it insults her — it actually dignifies her modesty."],
          },
        },
        {
          id: "cile-u2-word-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: biographyExtract,
          stem: "How many of these words have a NEGATIVE connotation in the biography? 'accurate', 'requested', 'rather silly', 'saved'.",
          response: { type: "numeric", parts: [{ label: "Negative words", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Silly' suggests foolishness — negative, even when applied to praise." },
            ],
            steps: [
              { reasoning: "Only 'rather silly' is negative; the others are neutral or positive.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'accurate' or 'saved' — both are positive."],
          },
        },
        {
          id: "cile-u2-word-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: argumentExtract,
          stem: "Analyse the connotation of 'what we have stopped doing while holding them' in 'the problem is not the phones — it is what we have stopped doing while holding them'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded phrase", statement: "'What we have stopped doing' implies loss — skills and habits abandoned." },
            ],
            steps: [
              { reasoning: "'Stopped doing' implies a decline — we once did something and lost it.", working: "\\text{'stopped doing' = loss}", marks: 1, markCode: "AO2" },
              { reasoning: "It shifts blame from the phone itself to human behaviour — we chose screens over people.", marks: 1, markCode: "AO2" },
              { reasoning: "Connotation of regret: the writer mourns lost connection, not just bad policy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'What we have stopped doing' connotes loss and regret — skills and habits abandoned — shifting blame from phones to our own choices.",
            commonErrors: ["Reading it neutrally without the connotation of decline and regret."],
          },
        },
        {
          id: "cile-u2-word-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: biographyExtract,
          stem: "Analyse the connotation of 'She had simply noticed things other people walked past.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Walked past' implies others were blind or indifferent; 'simply noticed' implies unforced skill." },
            ],
            steps: [
              { reasoning: "'Walked past' suggests others overlooked what she saw — their blindness, her gift.", working: "\\text{'walked past' = overlooked}", marks: 1, markCode: "AO2" },
              { reasoning: "'Simply noticed' makes her skill seem effortless — observation, not genius.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they create a quietly admiring tone — her achievement was available to anyone who paid attention.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Walked past' implies others were indifferent while she paid attention; 'simply noticed' makes her skill seem effortless — a quietly admiring tribute.",
            commonErrors: ["Saying 'walked past' is literal without its connotation of being overlooked."],
          },
        },
        {
          id: "cile-u2-word-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: argumentExtract,
          stem: "How many of these words have a NEGATIVE connotation? 'concentration', 'sleep', 'damage', 'rules'.",
          response: { type: "numeric", parts: [{ label: "Negative words", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Damage' implies harm and destruction — stronger negativity than the neutral terms." },
            ],
            steps: [
              { reasoning: "Only 'damage' is negative — it frames phones as harmful; the others are neutral.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'concentration' — it is neutral."],
          },
        },
        {
          id: "cile-u2-word-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: biographyExtract,
          stem: "In 'the woman who read the sky', what is the denotation of 'read'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interpreted, as one interprets a text" },
              { id: "b", text: "Predicted accurately" },
              { id: "c", text: "Looked at casually" },
              { id: "d", text: "Wrote down in a notebook" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denotation", statement: "The literal dictionary meaning — here, 'interpreted' or 'decoded'." },
            ],
            steps: [
              { reasoning: "'Read' literally means to interpret signs — like reading a text.", working: "\\text{interpreted}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Interpreted, as one interprets a text",
            commonErrors: ["Choosing (a) — 'read' implies active interpretation, not casual looking."],
          },
        },
        {
          id: "cile-u2-word-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: biographyExtract,
          stem: "Analyse how the biography's word choices create a tone that is admiring but not sentimental.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation and tone", statement: "Admiring words build respect; deflating details keep it honest." },
            ],
            steps: [
              { reasoning: "Admiring words: 'saved lives', 'read the sky', 'by name' — elevate her work.", working: "\\text{saved lives; read the sky}", marks: 1, markCode: "AO2" },
              { reasoning: "Deflating details: 'rather silly', 'never owned a telescope' — prevent sentimentality.", working: "\\text{'rather silly'; telescope}", marks: 1, markCode: "AO2" },
              { reasoning: "The balance creates respect without hagiography — she is human, not a saint.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: tone is admiring because of the achievement words, honest because of the deflating ones.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Admiring words ('saved lives', 'read the sky') build respect, while deflating details ('rather silly', 'never owned a telescope') keep it honest — the balance creates believable admiration without sentimentality.",
            commonErrors: ["Describing the tone without citing specific word choices."],
          },
        },
        {
          id: "cile-u2-word-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: argumentExtract,
          stem: "You are analysing the word choices in the phone-ban argument.",
          parts: [
            { label: "a", prompt: "Quote two words or phrases with negative connotations.", marks: 2 },
            { label: "b", prompt: "Explain the connotation of 'treats the symptom'.", marks: 2 },
            { label: "c", prompt: "Explain the connotation of 'the harder lesson'.", marks: 2 },
            { label: "d", prompt: "How do the word choices reveal the writer's stance on the ban?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "Medical and moral metaphors frame the ban as superficial; the writer's stance is sceptical but fair." },
            ],
            steps: [
              { part: "a", reasoning: "Negative phrase 1: 'a distraction'.", working: "\\text{'distraction'}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Negative phrase 2: 'damage concentration and sleep'.", working: "\\text{'damage'}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Symptom' is a medical metaphor — the ban treats a surface sign, not the disease.", working: "\\text{'symptom' = surface}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Connotation: the real problem is deeper — human disconnection.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "'Harder lesson' implies real change requires effort the ban avoids.", working: "\\text{'harder lesson'}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It frames connection as a lesson to be learned, not a rule to be imposed.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "The writer sees the ban as well-meaning but inadequate.", working: "\\text{well-meaning but inadequate}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Medical metaphors ('symptom') and moral framing ('virtue') reveal scepticism.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: word choice reveals a fair but doubtful stance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'a distraction'; 'damage' (b) 'symptom' frames the ban as treating a surface sign, not the real problem (c) 'harder lesson' implies real change needs effort, not rules (d) medical/moral metaphors reveal a fair but sceptical stance",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate negative quotations.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "'Symptom' connotation explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "'Harder lesson' connotation explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Stance revealed convincingly through word choice.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial analysis.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the writer dislikes phones' — the stance is about the ban, not phones."],
          },
        },
        {
          id: "cile-u2-word-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: biographyExtract,
          stem: "You are analysing the word choices in the Sophia Snow biography.",
          parts: [
            { label: "a", prompt: "Explain the connotation of calling her a 'computer'.", marks: 2 },
            { label: "b", prompt: "Explain the effect of 'saved lives'.", marks: 2 },
            { label: "c", prompt: "Explain the connotation of 'things other people walked past'.", marks: 2 },
            { label: "d", prompt: "How do the word choices create an admiring but honest tone?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation and tone", statement: "Elevating words build admiration; ironic or plain words keep it honest." },
            ],
            steps: [
              { part: "a", reasoning: "'Computer' was her real title, but today means a machine — quiet irony.", working: "\\text{title vs machine}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: dignifies her human skill — her work is now done by devices.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Saved lives' elevates her maps from data to moral achievement.", working: "\\text{moral achievement}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes her skill consequential, not merely technical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "'Walked past' implies others overlooked her gift — their blindness, her attention.", working: "\\text{'walked past'}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'Simply noticed' makes her skill seem effortless and available.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Admiring words ('saved lives', 'read the sky') build respect.", working: "\\text{admiring}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Deflating words ('rather silly', 'simply') keep it honest — believable, not sentimental.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'computer' was her title; today means machine — dignifies her human skill (b) 'saved lives' makes her work morally consequential (c) 'walked past' implies others overlooked her gift (d) admiration balanced by deflating/plain words = honest respect",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "'Computer' connotation explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "'Saved lives' effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "'Walked past' connotation explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Tone balance explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "d" },
            ],
            commonErrors: ["In (a) saying 'computer' is an insult — it was a legitimate job title."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u2-style-notes",
      title: "Sentence style and word choice — revision notes",
      summary: "Sentence variety, rhetorical devices, connotation and how they serve purpose.",
      sections: [
        {
          heading: "Sentence level",
          body: "Short sentences = emphasis. Long sentences = flow. Openings hook; endings land the point. Rhetorical questions involve the reader; repetition reinforces.",
        },
        {
          heading: "Word level",
          body: "Denotation = dictionary meaning. Connotation = feelings/associations. Writers choose words for connotation to reveal attitude — always analyse the feeling, not just the meaning.",
        },
        {
          heading: "Exam technique",
          body: "Quote → name technique → explain effect → link to purpose/tone. Never just identify; always analyse.",
        },
      ],
    },
  ],
};
