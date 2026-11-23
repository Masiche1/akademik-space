import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";
import { MLK } from "./lesson-3-1.ts";

const OBAMA: TextExtract = {
  title: "A More Perfect Union",
  author: "Barack Obama",
  source: "March 18, 2008",
  text: "'We hold these truths to be self-evident, that all men are created equal' — was the star that guided them through the darkest of nights, the dream of their fathers that they were to carry forward.",
};

const FDR: TextExtract = {
  title: "The Only Thing We Have to Fear",
  author: "Franklin D. Roosevelt",
  source: "First Inaugural Address (1933)",
  text: "So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself — nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.",
};

export const lesson133: Lesson = {
  id: "ela12-u2-lesson-3-3",
  code: "3-3",
  title: "Tracing Ideas Across Speeches",
  goal: "I CAN trace how later American orators invoke and transform earlier founding documents and speeches.",
  standards: ["RL.11-12.9", "RI.11-12.6", "SL.11-12.3"],
  vocabulary: [
    { term: "Intertextuality", definition: "The relationship between texts — how one text echoes, quotes, or answers another." },
    { term: "Allusion", definition: "An indirect reference that invokes another text's authority or meaning." },
    { term: "Lineage", definition: "The chain of texts and speakers passing an idea forward." },
    { term: "Transformation", definition: "How a later speaker changes an earlier idea for a new context." },
    { term: "Callback", definition: "A deliberate reference back to an earlier speech or document." },
    { term: "Canonical text", definition: "A founding document or speech treated as authoritative (Declaration, Gettysburg Address)." },
  ],
  concepts: [
    {
      id: "ela12-u2-intertextuality",
      title: "Speeches as conversations",
      skill: "Trace how later orators quote, transform, and extend earlier texts.",
      lesson: {
        sections: [
          {
            heading: "The Declaration as perpetual source",
            body: "American political speech is a conversation with the Declaration of Independence. King quotes it directly; Obama quotes it in 2008; virtually every inaugural invokes 'self-evident' truths or 'all men are created equal.' Each speaker inherits the text and must decide: repeat it literally, reinterpret it, or claim it has been betrayed.",
          },
          {
            heading: "How orators transform sources",
            body: "Three strategies:\n1. **Literal quotation**: repeating the words to claim their authority\n2. **Reinterpretation**: applying the words to a new context (King applying 'all men' to Black Americans)\n3. **Counter-claim**: arguing the source was betrayed and must be reclaimed\n\nThe most powerful speeches do all three at once.",
          },
          {
            heading: "The lineage of 'freedom'",
            body: "The Declaration promises 'Life, Liberty and the pursuit of Happiness.' Lincoln reframes it as a test ('conceived in Liberty'). King demands it be 'lived out.' Each generation inherits the same words but a different unfinished argument.",
          },
        ],
        keyFormulas: [
          { name: "Intertextuality", statement: "Speeches cite earlier texts to borrow authority or argue they were betrayed." },
          { name: "Transformation", statement: "Later orators apply founding words to new contexts." },
        ],
        workedExample: {
          problem: "How does King's use of the Declaration differ from Obama's?",
          solution: "King quotes to indict — segregation betrays the creed. Obama quotes to console — the dream guides 'through the darkest of nights.' Both invoke authority, but King uses it as accusation while Obama uses it as inheritance.",
        },
      },
      questions: [
        {
          id: "ela12-u2-intertextuality-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OBAMA,
          stem: "What does Obama accomplish by quoting the Declaration in his 2008 speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He proves the Declaration was written by him." },
              { id: "b", text: "He inherits its authority and frames his candidacy as carrying its promise forward." },
              { id: "c", text: "He criticizes the Declaration's authors." },
              { id: "d", text: "He avoids making his own argument." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Lineage", statement: "Later orators quote founding texts to claim their unfinished legacy." }],
            steps: [{ reasoning: "'The star that guided them' and 'dream of their fathers that they were to carry forward' frame Obama as heir to the Declaration's promise.", evidence: "carry forward", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** He inherits its authority as an unfinished promise.",
            commonErrors: ["Reading the quotation as decoration rather than lineage-claiming."],
          },
        },
        {
          id: "ela12-u2-intertextuality-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: MLK,
          stem: "Compare how King (1963) and Obama (2008) invoke the Declaration's 'all men are created equal.' What does each speaker want the quote to do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative intertextuality", statement: "Same source, different rhetorical purpose." },
              { kind: "technique", name: "Quotation function", statement: "Quotation can accuse (King) or inherit (Obama)." },
            ],
            steps: [
              { reasoning: "King quotes to accuse: 'live out the true meaning' implies America has failed to fulfill the creed.", evidence: "live out the true meaning of its creed", marks: 1, markCode: "AO2" },
              { reasoning: "Obama quotes to inherit: 'carry forward' frames the dream as a living tradition, not a betrayed one.", evidence: "carry forward", marks: 1, markCode: "AO2" },
              { reasoning: "King's context is protest — the quote is a standard of judgment; Obama's is ceremony — the quote is a source of hope.", marks: 1, markCode: "AO3" },
              { reasoning: "Both rely on the same authority but deploy it differently: King weaponizes it, Obama inherits it.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "King quotes to condemn segregation as betrayal; Obama quotes to inherit the dream as unfinished hope. Same words, opposite rhetorical work.",
            commonErrors: ["Treating both as simple 'quotations' without distinguishing function."],
          },
        },
        {
          id: "ela12-u2-intertextuality-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FDR,
          stem: "Trace the idea of 'fear' from FDR's 1933 inaugural to later American rhetoric. How has the concept been transformed, and what does that reveal about how orators use lineage?",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Idea tracing", statement: "Follow how a concept moves across speeches, changing meaning with context." },
              { kind: "skill", name: "Lineage analysis", statement: "Explain what a speaker gains by connecting to (or departing from) a predecessor." },
            ],
            steps: [
              { reasoning: "FDR's 'fear itself' names the enemy as internal psychology — 'nameless, unreasoning, unjustified terror.'", evidence: "fear itself", marks: 1, markCode: "AO2" },
              { reasoning: "Later orators (e.g., post-9/11 'fear is the mind-killer') adapt FDR's formulation to new threats — the enemy shifts but the rhetoric of fear-endurance persists.", marks: 1, markCode: "AO4" },
              { reasoning: "FDR uses the concept to mobilize: fear paralyzes, so the speech converts fear into resolve.", marks: 1, markCode: "AO3" },
              { reasoning: "Later speakers invoke FDR's lineage to borrow his authority — 'we have faced fear before' — even as they redefine what fear means.", marks: 1, markCode: "AO3" },
              { reasoning: "The transformation reveals lineage as a resource: orators don't just repeat predecessors; they rewrite them for new crises.", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes that tracing 'fear' across speeches shows American rhetoric is a cumulative argument about enduring national crises.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "FDR names fear as the enemy; later orators adapt his formula to new threats, using his lineage to borrow authority while rewriting the concept.",
            commonErrors: ["Listing speeches without tracing how the idea transforms."],
          },
        },
      ],
    },
    {
      id: "ela12-u2-lineage",
      title: "How lineage works in American oratory",
      skill: "Analyze the three strategies later orators use with earlier texts: quotation, reinterpretation, and counter-claim.",
      lesson: {
        sections: [
          {
            heading: "Quotation as authority",
            body: "When Obama quotes the Declaration, he doesn't argue with it — he borrows its accumulated authority. The quote does work for him: it makes his candidacy seem continuous with the founding. This is the most conservative use of lineage.",
          },
          {
            heading: "Reinterpretation as expansion",
            body: "King's move is subtler: he doesn't reject Jefferson; he argues Jefferson meant more than Jefferson's audience understood. 'All men' meant all men — including the enslaved and segregated. Reinterpretation expands the canon without breaking with it.",
          },
          {
            heading: "Counter-claim as indictment",
            body: "The strongest move: argue the source has been betrayed and must be reclaimed. 'We hold these truths...' becomes an accusation when spoken by someone excluded from its promise. The same words that authorize a president indict a nation.",
          },
        ],
        keyFormulas: [
          { name: "Quotation", statement: "Borrow authority by repeating the source's words." },
          { name: "Reinterpretation", statement: "Apply the source's words to a context its authors didn't intend." },
        ],
        workedExample: {
          problem: "Which strategy does King's 'I have a dream' use with the Declaration?",
          solution: "Reinterpretation and counter-claim: he quotes Jefferson's words literally but applies them to segregation, arguing America has betrayed its own creed — both expanding and indicting.",
        },
      },
      questions: [
        {
          id: "ela12-u2-lineage-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between quotation and reinterpretation in speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quotation borrows authority; reinterpretation changes the source's meaning for a new context." },
              { id: "b", text: "They are the same thing." },
              { id: "c", text: "Reinterpretation is always negative." },
              { id: "d", text: "Quotation is only used by presidents." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Quotation vs reinterpretation", statement: "Borrowing words vs. changing their application." }],
            steps: [{ reasoning: "Quotation repeats the source's words to claim authority; reinterpretation applies them to a new situation the authors didn't address.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Quotation borrows; reinterpretation changes application.",
            commonErrors: ["Treating all citation as the same act."],
          },
        },
        {
          id: "ela12-u2-lineage-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: OBAMA,
          stem: "Analyze how Obama positions himself within the lineage of American oratory. What does he inherit, and what does he add?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Positioning analysis", statement: "Identify what a speaker claims from predecessors and what they contribute." },
              { kind: "technique", name: "Callback", statement: "Deliberate reference to earlier texts creates continuity." },
            ],
            steps: [
              { reasoning: "Obama inherits the Declaration's 'self-evident' truths and the 'dream of their fathers' — he claims continuity with the founding.", evidence: "dream of their fathers that they were to carry forward", marks: 1, markCode: "AO2" },
              { reasoning: "The phrase 'carry forward' makes him an active heir, not a passive repeater — he adds the obligation to continue the work.", marks: 1, markCode: "AO3" },
              { reasoning: "By quoting in a speech about race and division, he applies the founding words to a context the founders couldn't fully address.", marks: 1, markCode: "AO3" },
              { reasoning: "He adds his own voice to the lineage: the dream is 'theirs' but also 'ours' — he extends the 'we' of the Declaration.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Obama inherits the Declaration's promise and adds the obligation to carry it forward — he positions himself as both heir and continuation.",
            commonErrors: ["Describing the quotation without analyzing the positioning."],
          },
        },
        {
          id: "ela12-u2-lineage-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a single quoted phrase can function differently for different speakers. Use the Declaration's 'all men are created equal' across at least two speeches.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Context-dependent meaning", statement: "The same words carry different force depending on who speaks and to whom." },
              { kind: "technique", name: "Intertextuality", statement: "Quotation gains meaning from the relationship between source and new context." },
            ],
            steps: [
              { reasoning: "For Jefferson, the phrase is a founding claim — it establishes the nation's premise.", marks: 1, markCode: "AO2" },
              { reasoning: "For King, it is an accusation — quoting it exposes the gap between promise and practice.", evidence: "live out the true meaning of its creed", marks: 1, markCode: "AO3" },
              { reasoning: "For Obama, it is a legacy — he inherits it as 'the dream of their fathers' to be carried forward.", marks: 1, markCode: "AO3" },
              { reasoning: "The phrase's authority is constant, but its function changes: declaration → indictment → inheritance.", marks: 1, markCode: "AO4" },
              { reasoning: "Each speaker's identity (founder, protester, president) determines how the quote lands.", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes the same words are a different argument depending on who holds them.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The phrase's meaning is stable but its rhetorical work changes: Jefferson declares, King indicts, Obama inherits. Speaker identity determines function.",
            commonErrors: ["Assuming quotation means the same thing regardless of context."],
          },
        },
      ],
    },
  ],
};
