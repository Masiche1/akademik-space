import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mla5-u3-lesson-3-1",
  code: "3-1",
  title: "Academic Register, Hedging and Complex Syntax",
  goal: "I CAN use academic register, hedging, nominalisation and complex sentence structures accurately in speaking and writing.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Criterion B: Reading",
  ],
  vocabulary: [
    { term: "Register", definition: "The level of formality appropriate to context, audience and purpose." },
    { term: "Hedging", definition: "Language that qualifies a claim, such as 'suggests', 'may' or 'appears'." },
    { term: "Nominalisation", definition: "Turning a verb or adjective into a noun, e.g. 'decide' -> 'decision'." },
    { term: "Subordination", definition: "Joining clauses where one depends on another using conjunctions or relative pronouns." },
    { term: "Precision", definition: "Using exact words rather than vague or exaggerated terms." },
  ],
  concepts: [
    {
      id: "mla5-u3-academic-register",
      title: "Academic register and hedging",
      skill: "Choose formal, precise and appropriately cautious language for academic contexts.",
      lesson: {
        sections: [
          {
            heading: "Register choices",
            body: "Academic register avoids contractions, slang, excessive emotion and unsupported absolutes. Compare informal 'Kids these days are so lazy' with academic 'Some adolescents may appear disengaged, although the causes are complex.' The second is more precise, cautious and analytical.",
          },
          {
            heading: "Hedging devices",
            body: "Hedging protects accuracy: **modal verbs** ('may', 'might', 'could'), **adverbs** ('perhaps', 'generally', 'tends to'), **verbs** ('suggest', 'indicate', 'appear') and **noun phrases** ('some evidence', 'a tendency'). Hedging is not weakness; it shows awareness of uncertainty.",
          },
          {
            heading: "Precision over intensity",
            body: "Academic writing favours precise verbs and nouns over dramatic adjectives. Instead of 'a terrible disaster', write 'a significant disruption with widespread consequences'. Instead of 'everyone knows', write 'research indicates'. Precision makes claims easier to evaluate.",
          },
        ],
        keyFormulas: [
          { name: "Hedging toolkit", statement: "may / suggests / appears / tends to / some evidence / is consistent with" },
          { name: "Register contrast", statement: "Informal intensity -> academic precision + qualification" },
        ],
        workedExample: {
          problem: "Revise: 'Phones are destroying students' attention.'",
          solution: "'Excessive phone use may be associated with reduced attention, although the relationship depends on context.'",
        },
      },
      questions: [
        {
          id: "mla5-u3-academic-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is most academic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Everyone knows social media is bad.'" },
              { id: "b", text: "'Phones are the worst thing ever.'" },
              { id: "c", text: "'Social media may contribute to reduced attention in some adolescents.'" },
              { id: "d", text: "'Social media is totally ruining kids.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic register", statement: "Formal, precise and hedged language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b is precise, qualified and academic.", working: "hedged", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'Social media may contribute to reduced attention in some adolescents.'",
            commonErrors: ["Choosing dramatic but imprecise language."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Sentence A: 'The policy failed completely.'\nSentence B: 'The policy appears to have had limited success, possibly due to implementation problems.'",
          },
          stem: "Explain how hedging changes the meaning and why it is more academic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedging", statement: "Qualifiers make claims cautious and evidence-based." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — A is absolute and unsupported; B is qualified.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'appears', 'possibly' and 'limited' allow uncertainty.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — B offers possible explanation rather than final judgement.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Hedging makes the claim cautious, precise and open to evidence; it is more academic because it avoids unsupported absolutes.",
            commonErrors: ["Thinking hedging makes writing weaker rather than more accurate."],
            examinerNote: "Must explain function of hedging.",
          },
        },
        {
          id: "mla5-u3-academic-register-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Informal Paragraph",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Kids these days are glued to their phones. It's so bad for them. Everyone knows it. Schools should just ban phones forever because that's the only way to fix it.",
          },
          stem: "Rewrite the paragraph in academic register and identify three changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register transformation", statement: "Replace informal absolutes with precise, qualified academic language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes slang ('kids', 'glued', 'so bad').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces absolutes ('everyone knows', 'forever') with hedged claims.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds qualification and possible explanation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — maintains meaning while improving precision.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Academic version uses 'adolescents', 'may', 'some evidence', 'appears' and avoids absolute claims.",
            commonErrors: ["Changing words but keeping unsupported absolutes."],
            examinerNote: "Must identify specific register changes.",
          },
        },
        {
          id: "mla5-u3-academic-register-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Writing Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite the following for an academic audience and explain your choices.\n\n'Banning homework is stupid. Kids need free time, and teachers don't even mark it properly. That's why schools are failing.'",
          },
          stem: "Complete the tasks.",
          parts: [
            { label: "a", prompt: "Rewrite the paragraph in academic register.", marks: 4 },
            { label: "b", prompt: "Identify two hedging devices you used.", marks: 2 },
            { label: "c", prompt: "Explain why your version is more precise.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic transformation", statement: "Precision, hedging and formal structure." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — removes insult and absolutes.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — replaces 'kids' with 'students' or 'adolescents'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — adds hedging and qualification.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — maintains a clear argument.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — identifies two valid hedging devices.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — identifies the second hedging device accurately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explanation identifies replacement of vague or absolute language.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explanation links precision to evidence and qualification.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) academic rewrite (b) hedging devices (c) precision explanation.",
            commonErrors: ["Making it formal but still unsupported or absolute."],
            examinerNote: "Rewrite should sound academic and remain logically careful.",
          },
        },
        {
          id: "mla5-u3-academic-register-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is written in academic register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kids these days are so lazy, honestly." },
              { id: "b", text: "Some adolescents may appear disengaged, although the causes are complex." },
              { id: "c", text: "It's totally obvious that teachers are to blame." },
              { id: "d", text: "Everyone knows phones are ruining everything." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic register", statement: "Formal, precise and cautious language without slang or absolutes." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — (b) is precise, hedged and analytical.", working: "academic", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Some adolescents may appear disengaged, although the causes are complex.",
            commonErrors: ["Choosing confident-sounding informal language."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of hedging in academic writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show awareness of uncertainty and protect accuracy" },
              { id: "b", text: "To make the writer seem unsure and weak" },
              { id: "c", text: "To fill space in a paragraph" },
              { id: "d", text: "To avoid using evidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hedging", statement: "Cautious language that reflects uncertainty accurately." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — hedging signals calibrated confidence, not weakness.", working: "accuracy", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** To show awareness of uncertainty and protect accuracy",
            commonErrors: ["Seeing hedging as a flaw."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Draft Sentence",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Draft: 'Phones are destroying students' attention and it's honestly terrifying.'",
          },
          stem: "Which feature makes this sentence non-academic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too short" },
              { id: "b", text: "It uses absolute claims and emotional language" },
              { id: "c", text: "It uses the word 'students'" },
              { id: "d", text: "It mentions phones" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register diagnosis", statement: "Absolutes ('destroying') and emotion ('terrifying') break academic register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'destroying' is absolute; 'terrifying' is emotive.", working: "absolute+emotive", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It uses absolute claims and emotional language",
            commonErrors: ["Focusing on topic rather than register."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Academic Sentence",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "The results may indicate a link, although the sample was limited and the effect might vary between groups.",
          },
          stem: "How many hedging expressions appear in the sentence?",
          response: {
            type: "numeric",
            parts: [{ label: "Hedging expressions", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hedge counting", statement: "'May', 'although', 'might' and 'limited' qualify the claim." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'may indicate', 'although', 'limited', 'might vary' = 4.", working: "4", marks: 1, markCode: "D" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing 'might' or 'limited'."],
            examinerNote: "Accept 4.",
          },
        },
        {
          id: "mla5-u3-academic-register-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Revise into academic register: 'Homework is pointless and everyone hates it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register revision", statement: "Replace absolutes and emotion with precise, cautious claims." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes absolutes 'pointless' and 'everyone'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces with hedged, precise language such as 'may be ineffective for some'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — result is analytical and appropriately cautious.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'Homework may be ineffective for some students, although its value depends on design and purpose.'",
            commonErrors: ["Keeping the absolute claim with only minor edits."],
            examinerNote: "Must remove absolutes and add qualification.",
          },
        },
        {
          id: "mla5-u3-academic-register-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Version A: 'The policy was a terrible disaster.' Version B: 'The policy caused a significant disruption with widespread consequences.'",
          },
          stem: "Which version demonstrates 'precision over intensity'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both equally" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Version B" },
              { id: "d", text: "Version A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision over intensity", statement: "Precise nouns and measured adjectives replace dramatic language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — B replaces 'terrible disaster' with 'significant disruption'.", working: "precise", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Version B",
            commonErrors: ["Thinking stronger adjectives are more academic."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Draft Paragraph",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Draft: 'Social media is destroying teen mental health, no doubt about it. Studies show it's super bad. But maybe some kids use it fine.'",
          },
          stem: "Analyse what is wrong with this paragraph's register and how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register correction", statement: "Remove absolutes, slang and vague claims; add precision and evidence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — problem 1: absolute 'destroying' and 'no doubt'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — problem 2: slang 'super bad' and vague 'studies show'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — problem 3: weak hedge 'maybe some kids use it fine'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — fix: hedged precise claims with named evidence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Rewrite with hedging, precise vocabulary and specific evidence.",
            commonErrors: ["Only fixing the slang, not the absolutes."],
            examinerNote: "Must identify multiple register problems.",
          },
        },
        {
          id: "mla5-u3-academic-register-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Sentence A: 'The results are consistent with the hypothesis, although replication is needed.' Sentence B: 'The results are crazy awesome and totally prove the hypothesis.'",
          },
          stem: "How many informal markers appear in Sentence B, and how many hedges appear in Sentence A?",
          response: {
            type: "numeric",
            parts: [
              { label: "Informal markers in B", answer: 2 },
              { label: "Hedges in A", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register comparison", statement: "Count informal markers versus hedging devices." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'crazy awesome' and 'totally' = 2 informal markers.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'consistent with' and 'although replication is needed' = 2 hedges.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 informal; 2 hedges.",
            commonErrors: ["Counting 'the' as a hedge."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u3-academic-register-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Weak Claim",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Weak: 'Everyone knows that exercise is good for you.'",
          },
          stem: "How many absolute or unsupported expressions does this sentence contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Absolute expressions", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Absolute claims", statement: "'Everyone knows' and 'good for you' are unsupported absolutes." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Everyone knows' and 'good for you' = 2 absolutes.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Missing 'everyone knows'."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u3-academic-register-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The data are correlational. Which verb best matches this evidence strength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "suggest" },
              { id: "b", text: "prove" },
              { id: "c", text: "shout" },
              { id: "d", text: "guarantee" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb strength matching", statement: "'Suggest' matches correlational; 'prove' implies causation." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correlational data support 'suggest', not 'prove'.", working: "suggest", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** suggest",
            commonErrors: ["Using 'prove' for correlational data."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-register-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Draft Paragraph",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Draft: 'Uniforms are amazing because they stop rich kids showing off. But some say they kill creativity, which is kinda true tbh. Overall uniforms are just better, fight me.'",
          },
          stem: "Read the draft and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify three register problems.", marks: 3 },
            { label: "b", prompt: "Rewrite the first claim academically.", marks: 2 },
            { label: "c", prompt: "Rewrite the counter-claim academically.", marks: 2 },
            { label: "d", prompt: "Write a hedged concluding sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register revision", statement: "Remove slang, absolutes and confrontation; add precision and hedging." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — problem 1: slang 'kinda', 'tbh', 'fight me'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — problem 2: absolute 'are just better'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — problem 3: emotive 'amazing', 'kill creativity'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — academic rewrite uses precise causal language.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — removes slang and absolutes.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — counter-claim hedged and precise.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — acknowledges opposing view respectfully.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion uses 'may', 'depends on' or similar hedge.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) slang; absolute; emotive (b) academic claim (c) hedged counter (d) hedged conclusion.",
            commonErrors: ["Fixing only the slang."],
            examinerNote: "(d) must include hedging.",
          },
        },
        {
          id: "mla5-u3-academic-register-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Hedged Claim",
            author: "Written for Akademik Space",
            source: "Academic writing practice",
            text: "Writer: 'The data suggest a possible link, although replication is needed.'",
          },
          stem: "Why is hedging not a weakness in academic writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids taking a position" },
              { id: "b", text: "It impresses markers" },
              { id: "c", text: "It makes sentences longer" },
              { id: "d", text: "It shows the writer's claim matches the strength of the evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hedging as rigour", statement: "Hedged claims align with evidence strength." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'suggest'/'may' match correlational evidence appropriately.", working: "rigour", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It shows the writer's claim matches the strength of the evidence",
            commonErrors: ["Seeing caution as indecision."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u3-complex-syntax",
      title: "Nominalisation and complex syntax",
      skill: "Use nominalisation and complex sentences to create academic cohesion and precision.",
      lesson: {
        sections: [
          {
            heading: "Nominalisation",
            body: "Nominalisation turns actions into concepts: 'students decided' -> 'the decision by students'; 'the policy failed' -> 'the failure of the policy'. This creates a denser, more analytical style typical of academic writing. Use it for key concepts, not every verb.",
          },
          {
            heading: "Complex sentences",
            body: "Complex sentences combine main and subordinate clauses to show relationships: cause ('because'), contrast ('although'), condition ('if') and concession ('while'). Example: 'Although the policy was well designed, its implementation was inconsistent, which may explain the limited results.' The structure mirrors the reasoning.",
          },
          {
            heading: "Balance and clarity",
            body: "Complexity should serve meaning, not display. Avoid sentences so long that the reader loses the main point. Break ideas into clear clauses, use punctuation carefully and check that each sentence has one main claim with supporting detail. Academic writing is sophisticated but readable.",
          },
        ],
        keyFormulas: [
          { name: "Nominalisation", statement: "decide -> decision; fail -> failure; improve -> improvement" },
          { name: "Complex relationships", statement: "although / because / while / which / that" },
        ],
        workedExample: {
          problem: "Combine: 'The study failed. The sample was small.'",
          solution: "'The study's failure may be partly explained by its small sample.'",
        },
      },
      questions: [
        {
          id: "mla5-u3-complex-syntax-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nominalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding a subject to every sentence" },
              { id: "b", text: "Using more adjectives" },
              { id: "c", text: "Making sentences shorter" },
              { id: "d", text: "Turning a verb or adjective into a noun" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nominalisation", statement: "Conversion of verb/adjective to noun." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — nominalisation = verb/adjective to noun.", working: "noun", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Turning a verb or adjective into a noun",
            commonErrors: ["Confusing nominalisation with simplification."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sentence Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Simple: 'The policy failed. The sample was small.'\nComplex: 'The policy's failure may be partly explained by the small sample size.'",
          },
          stem: "Identify the nominalisation and the logical relationship created.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Syntax analysis", statement: "Nominalisation creates abstraction; conjunctions show relationship." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — nominalisation: 'failure' from 'failed'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — relationship: possible cause/explanation via 'may be explained by'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complex sentence integrates two ideas more precisely.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Failure' nominalises 'failed'; complex sentence shows possible causal relationship.",
            commonErrors: ["Missing that 'may' adds uncertainty."],
            examinerNote: "Must identify both nominalisation and relationship.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Complex Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Although the intervention was carefully designed, which suggests strong institutional commitment, its effects were limited, possibly because the target group had already developed fixed habits.",
          },
          stem: "Analyse the sentence structure and explain how it conveys nuance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Syntactic analysis", statement: "Subordinate clauses add concession, explanation and uncertainty." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Although' signals concession: design was good but effects limited.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'which suggests' adds interpretation: commitment.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'possibly because' offers hedged explanation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence conveys layered nuance rather than simple cause-effect.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The sentence uses concession, interpretation and hedged explanation to convey a nuanced, qualified claim.",
            commonErrors: ["Treating it as one simple statement."],
            examinerNote: "Must identify multiple layers of meaning.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Syntax Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite the following using nominalisation and at least one complex sentence. Then explain your choices.\n\n'The government decided to ban phones. The decision was unpopular. Students complained because they lost access to learning tools.'",
          },
          stem: "Complete the tasks.",
          parts: [
            { label: "a", prompt: "Rewrite using nominalisation.", marks: 2 },
            { label: "b", prompt: "Add a complex sentence with a subordinate clause.", marks: 3 },
            { label: "c", prompt: "Explain two choices you made.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic syntax production", statement: "Nominalisation and subordination for precision and cohesion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — uses nominalisation e.g. 'decision', 'implementation', 'complaints'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — sentence remains clear.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — complex sentence includes subordinate clause.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — relationship between ideas is explicit.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — punctuation and grammar accurate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains choice 1 accurately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains choice 2 accurately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explanation shows how syntax improves precision or flow.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) nominalised rewrite (b) complex sentence (c) explanations.",
            commonErrors: ["Overusing nominalisation and losing clarity."],
            examinerNote: "Complexity must serve precision, not obscure meaning.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nominalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turning an action into a noun, e.g. 'decide' -> 'decision'" },
              { id: "b", text: "Using only simple sentences" },
              { id: "c", text: "Removing all verbs from a sentence" },
              { id: "d", text: "Adding more adjectives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nominalisation", statement: "Converting verbs/actions into nouns for denser academic style." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — nominalisation turns actions into concepts.", working: "verb->noun", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Turning an action into a noun, e.g. 'decide' -> 'decision'",
            commonErrors: ["Confusing nominalisation with simplification."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What relationship does the connector 'although' usually signal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Example" },
              { id: "b", text: "Cause and effect" },
              { id: "c", text: "Addition" },
              { id: "d", text: "Concession or contrast" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Concessive connector", statement: "'Although' introduces a concession before the main point." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'although' concedes a point before contrast.", working: "concession", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Concession or contrast",
            commonErrors: ["Confusing concession with cause."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Complex Sentence",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "Although the policy was well designed, its implementation was inconsistent, which may explain the limited results.",
          },
          stem: "Which clause carries the main claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Although the policy was well designed" },
              { id: "b", text: "All equally" },
              { id: "c", text: "which may explain the limited results" },
              { id: "d", text: "its implementation was inconsistent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clause analysis", statement: "The main clause follows the concessive 'although' clause." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'its implementation was inconsistent' is the main claim.", working: "main clause", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** its implementation was inconsistent",
            commonErrors: ["Choosing the concessive clause as main."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Sentence Set",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "S1: 'The study failed.' S2: 'The sample was small.' S3: 'The authors recommend replication.' S4: 'Although results were promising, confidence was low.'",
          },
          stem: "How many sentences contain a subordinate or concessive clause?",
          response: {
            type: "numeric",
            parts: [{ label: "Complex sentences", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence classification", statement: "Only S4 has a subordinate/concessive clause." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — S4 ('Although...') is the only complex sentence = 1.", working: "1", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting all four as complex."],
            examinerNote: "Accept 1.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Nominalise these verbs to create academic noun phrases: 'decide', 'fail', 'improve'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nominalisation", statement: "decide -> decision; fail -> failure; improve -> improvement." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'decide' -> 'decision'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'fail' -> 'failure'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'improve' -> 'improvement'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "decision; failure; improvement",
            commonErrors: ["Using 'decidement' or other non-standard forms."],
            examinerNote: "Standard nominal forms required.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "Version A: 'The study was small. The sample was limited. The results may not generalise.' Version B: 'Because the study was small and its sample limited, the results may not generalise.'",
          },
          stem: "Which version is more academically cohesive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Version B" },
              { id: "c", text: "Version A" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complex syntax", statement: "Subordination shows causal relationship more precisely." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — B links cause ('because') to effect explicitly.", working: "subordination", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Version B",
            commonErrors: ["Thinking more sentences always means more clarity."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Combine these into one complex sentence showing concession: 'The study was small. The sample was limited. The results were consistent.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence combining", statement: "Use 'although/while' to concede limitations before the main finding." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — combines all three ideas into one sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses concessive connector 'although' or 'while'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — main claim ('results were consistent') is preserved as the focus.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence is grammatical and readable.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'Although the study was small and its sample limited, the results were consistent.'",
            commonErrors: ["Making the concession the main clause."],
            examinerNote: "Must be one grammatical complex sentence.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Sentence Set",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "S1: 'Sleep affects memory.' S2: 'Although sleep affects memory, its role in learning is complex.' S3: 'The effect varies by age.' S4: 'While the effect varies by age, consistent patterns emerge.'",
          },
          stem: "How many sentences use subordination, and how many use simple structure?",
          response: {
            type: "numeric",
            parts: [
              { label: "Subordinated sentences", answer: 2 },
              { label: "Simple sentences", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence classification", statement: "Count sentences with subordinate clauses versus simple ones." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — S2 and S4 are subordinated = 2.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — S1 and S3 are simple = 2.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 subordinated; 2 simple.",
            commonErrors: ["Counting S3 as complex because it is short."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Syntax Benefit",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "Nominalisation creates a denser, more analytical style typical of academic writing.",
          },
          stem: "How many benefits of nominalisation are stated?",
          response: {
            type: "numeric",
            parts: [{ label: "Benefits", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nominalisation benefit", statement: "Denser style + analytical tone." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'denser' and 'more analytical' = 2 benefits.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'academic' as a benefit."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which connector best introduces a concession in an academic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "because" },
              { id: "b", text: "for example" },
              { id: "c", text: "although" },
              { id: "d", text: "as a result" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connector selection", statement: "'Although' marks concession; 'because' marks cause." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'although' introduces conceded contrast.", working: "although", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** although",
            commonErrors: ["Choosing a causal connector for concession."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Jumbled Sentences",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "J1: 'The study failed.' J2: 'The sample was small.' J3: 'The authors published anyway.' J4: 'The results were inconclusive.'",
          },
          stem: "Read the sentences and complete the tasks.",
          parts: [
            { label: "a", prompt: "Combine J1 and J2 to show cause using 'because' or 'due to'.", marks: 2 },
            { label: "b", prompt: "Combine J3 and J4 to show concession using 'although' or 'while'.", marks: 2 },
            { label: "c", prompt: "Nominalise 'fail' and 'publish' to create a denser sentence.", marks: 2 },
            { label: "d", prompt: "Write one sentence combining all four ideas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Syntactic transformation", statement: "Subordination, concession and nominalisation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — causal connector used correctly.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — sentence is grammatical.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — concessive connector used correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — sentence is grammatical.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — 'failure' and 'publication' used correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — denser sentence is grammatical.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — all four ideas combined coherently.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — relationships (cause/concession) are clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) causal combine (b) concessive combine (c) nominalised (d) full combination.",
            commonErrors: ["Losing ideas when combining."],
            examinerNote: "Each part must preserve meaning.",
          },
        },
        {
          id: "mla5-u3-complex-syntax-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Over-complex Sentence",
            author: "Written for Akademik Space",
            source: "Syntax practice",
            text: "Sentence: 'Although the study, which was conducted in one school and which had a small sample that may have affected validity, showed promising results that could possibly indicate a trend, the authors, who were cautious, recommended replication.'",
          },
          stem: "What is the main risk of this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too formal" },
              { id: "b", text: "It is so complex the main point is hard to find" },
              { id: "c", text: "It is too short" },
              { id: "d", text: "It uses too much evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clarity over complexity", statement: "Complexity should serve meaning, not display." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — nested clauses bury the main claim.", working: "clarity", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It is so complex the main point is hard to find",
            commonErrors: ["Thinking longer = more academic."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
  ],
};
