import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cile-u4-lesson-4-2",
  code: "4-2",
  title: "Narrative writing: plot and structure",
  goal: "I CAN plan and structure a narrative with a clear opening, rising tension, climax and satisfying resolution.",
  standards: ["0861 Writing: narrative structure"],
  vocabulary: [
    { term: "Plot", definition: "The sequence of events in a story — what happens and why." },
    { term: "Exposition", definition: "The opening that establishes character, setting and situation." },
    { term: "Rising action", definition: "Events that build tension toward the climax." },
    { term: "Climax", definition: "The turning point of highest tension where the central conflict peaks." },
    { term: "Resolution", definition: "The aftermath — how the conflict is settled or left unresolved." },
    { term: "Foreshadowing", definition: "Clues planted early that hint at later events." },
  ],
  concepts: [
    {
      id: "cile-u4-plot-structure",
      title: "Plot and narrative structure",
      skill: "Plan a narrative arc — exposition, rising action, climax, resolution — and use pacing and foreshadowing effectively.",
      lesson: {
        sections: [
          {
            heading: "The narrative arc",
            body: "- **Exposition**: who, where, when — the status quo before trouble.\n- **Rising action**: complications escalate; tension builds.\n- **Climax**: the moment everything changes — maximum tension.\n- **Resolution**: aftermath; loose ends tied (or deliberately left).",
          },
          {
            heading: "Pacing and tension",
            body: "- **Speed up**: short sentences, short paragraphs, action verbs, dialogue.\n- **Slow down**: long sentences, description, internal thought — for reflection or dread.\n- **Climax**: usually fastest — the reader should feel the rush.\n- **Resolution**: slows again — allows the reader to breathe and reflect.",
          },
          {
            heading: "Foreshadowing",
            body: "Plant small clues early that make the climax feel inevitable in hindsight: a mention of a storm before it hits, a character's fear before it is realised. Foreshadowing rewards attentive readers.",
          },
        ],
        keyFormulas: [
          { name: "Narrative arc", statement: "Exposition → rising action → climax → resolution. Pace fast at climax, slow at resolution." },
        ],
        workedExample: {
          problem: "A story about a student who must give a speech. Where is the climax?",
          solution: "The climax is the moment they step on stage — maximum tension, the point of no return. Everything before builds to it; everything after shows the aftermath.",
        },
      },
      questions: [
        {
          id: "cile-u4-plot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a narrative arc introduces the characters and setting before the conflict begins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resolution" },
              { id: "b", text: "Climax" },
              { id: "c", text: "Exposition" },
              { id: "d", text: "Rising action" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exposition", statement: "The opening that establishes who, where, when before conflict." },
            ],
            steps: [
              { reasoning: "Exposition sets the status quo.", working: "\\text{exposition}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Exposition",
            commonErrors: ["Choosing rising action — that is the build-up, not the setup."],
          },
        },
        {
          id: "cile-u4-plot-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a writer can use pacing to build tension before a climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Sentence/paragraph length controls tension — shorter = faster, longer = slower." },
            ],
            steps: [
              { reasoning: "Technique: vary sentence length — long for build-up, short for impact.", working: "\\text{sentence length}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: gradual acceleration mirrors rising tension; the climax feels like a release.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "By lengthening sentences and paragraphs during build-up (slow dread) then shortening them at the climax (rapid release), the writer makes tension accumulate and then break.",
            commonErrors: ["Saying 'write faster' without explaining sentence-level control."],
          },
        },
        {
          id: "cile-u4-plot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a story where the ending feels unearned because nothing was foreshadowed. Explain what foreshadowing is and how it would fix this problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "Early clues make later events feel inevitable in hindsight." },
            ],
            steps: [
              { reasoning: "Define foreshadowing: planting hints before the event.", working: "\\text{early hints}", marks: 1, markCode: "AO2" },
              { reasoning: "Problem: without clues, the ending feels random, not inevitable.", working: "\\text{random vs inevitable}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: plant small details early — a mention of a storm, a fear, an object.", working: "\\text{plant details}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: the climax feels like it was always coming — satisfying, not arbitrary.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Foreshadowing is planting early clues that make later events feel inevitable. Without it, endings feel arbitrary; with it, the climax feels like the natural consequence of earlier hints — satisfying and earned.",
            commonErrors: ["Confusing foreshadowing with flashback — foreshadowing looks forward, flashback looks back."],
          },
        },
        {
          id: "cile-u4-plot-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are planning a narrative about a student preparing for a school play.",
          parts: [
            { label: "a", prompt: "Describe the exposition — who, where, what is the status quo?", marks: 2 },
            { label: "b", prompt: "List two events for the rising action that build tension.", marks: 2 },
            { label: "c", prompt: "Identify the climax and explain why it is the peak.", marks: 2 },
            { label: "d", prompt: "Describe the resolution and suggest one piece of foreshadowing you would plant.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Each stage must fulfil its function — setup, escalation, peak, aftermath." },
            ],
            steps: [
              { part: "a", reasoning: "Exposition establishes character, setting, pre-conflict state.", working: "\\text{setup}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear and specific.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two escalating complications.", working: "\\text{complications}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Each raises tension logically.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Climax identified — the moment of maximum tension.", working: "\\text{peak}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Why it is the peak explained.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Resolution described — aftermath and emotional outcome.", working: "\\text{aftermath}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Foreshadowing planted early.", working: "\\text{foreshadow}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Foreshadowing links to climax convincingly.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) exposition setup (b) two escalating complications (c) climax at peak tension (d) resolution + foreshadowing linking to climax",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear exposition.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two logical escalating events.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax identified and justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Resolution plus convincing foreshadowing.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (b) listing unrelated events rather than escalating complications."],
          },
        },
        {
          id: "cile-u4-plot-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of the narrative arc is the turning point of highest tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rising action" },
              { id: "b", text: "Resolution" },
              { id: "c", text: "Climax" },
              { id: "d", text: "Exposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "The moment the central conflict peaks — maximum tension." },
            ],
            steps: [
              { reasoning: "The climax is the turning point where tension is highest.", working: "\\text{peak tension}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Climax",
            commonErrors: ["Choosing (b) — rising action builds toward the climax but is not the peak itself."],
          },
        },
        {
          id: "cile-u4-plot-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should the resolution of a narrative usually slow the pace down?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Sentence and paragraph length controls the reader's breathing rhythm." },
            ],
            steps: [
              { reasoning: "After the climax's rush, slowing lets the reader absorb the outcome.", working: "\\text{absorb}", marks: 1, markCode: "AO2" },
              { reasoning: "Reflection needs space — long sentences and description suit the aftermath.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Slowing the pace after the climax lets the reader absorb the outcome and reflect — long sentences and description suit the aftermath, just as short sentences suited the peak.",
            commonErrors: ["Saying 'the story is ending' — the reason is emotional processing, not chronology."],
          },
        },
        {
          id: "cile-u4-plot-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways a writer can build tension during the rising action of a story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rising action", statement: "Complications must escalate logically toward the climax." },
            ],
            steps: [
              { reasoning: "Way 1: introduce escalating complications — each event raises the stakes further.", working: "\\text{escalation}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: control pacing — shorten sentences and paragraphs as tension grows.", working: "\\text{pacing}", marks: 1, markCode: "AO2" },
              { reasoning: "Both must build toward the climax rather than repeating the same level of tension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Escalating complications (each event raises the stakes) and accelerating pacing (shorter sentences and paragraphs) build tension — both must climb toward the climax.",
            commonErrors: ["Listing events that do not increase in stakes — tension must rise, not plateau."],
          },
        },
        {
          id: "cile-u4-plot-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the arc 'exposition → rising action → climax → resolution', what does 'rising action' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening description of the setting" },
              { id: "b", text: "The moment the protagonist first appears" },
              { id: "c", text: "The final scene where everything is resolved" },
              { id: "d", text: "The events that build tension toward the climax" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rising action", statement: "The series of events that escalate tension toward the climax." },
            ],
            steps: [
              { reasoning: "Rising action is the build-up — complications that raise tension.", working: "\\text{build-up}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The events that build tension toward the climax",
            commonErrors: ["Choosing (a) — exposition is the opening setup, not the build-up."],
          },
        },
        {
          id: "cile-u4-plot-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's climax feels flat because it is written in long, descriptive sentences. Explain how pacing could fix this and rewrite one moment of the climax with appropriate sentence length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing at climax", statement: "The climax should be the fastest point — short sentences create urgency." },
            ],
            steps: [
              { reasoning: "Problem: long descriptive sentences slow the climax — tension drains away.", working: "\\text{drained}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: shorten sentences and paragraphs — fragments and action verbs speed the moment.", working: "\\text{short/fast}", marks: 1, markCode: "AO2" },
              { reasoning: "Rewrite shows the technique applied — e.g. 'She ran. The door was open. No — closed. Locked.'", marks: 1, markCode: "AO2" },
              { reasoning: "Result: the reader feels the rush of the peak moment.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'She ran. The corridor stretched ahead, lights strobing. Footsteps behind — closer. She reached the door. Locked.' — short sentences and fragments create urgency at the climax.",
            commonErrors: ["Explaining pacing without demonstrating it in a rewrite."],
          },
        },
        {
          id: "cile-u4-plot-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between the climax and the resolution of a story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax vs resolution", statement: "Climax = peak tension and turning point; resolution = aftermath." },
            ],
            steps: [
              { reasoning: "Climax: the moment of maximum tension where the conflict peaks and turns.", working: "\\text{peak}", marks: 1, markCode: "AO2" },
              { reasoning: "Resolution: what happens after — how the conflict is settled or left open.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The climax is the turning point of maximum tension; the resolution is the aftermath showing how the conflict is settled — peak versus consequence.",
            commonErrors: ["Treating the climax and resolution as the same thing — they are distinct stages."],
          },
        },
        {
          id: "cile-u4-plot-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is most likely to be the climax of a story about a school play?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Afterwards, everyone agreed it had been wonderful." },
              { id: "b", text: "The audience settled into their seats." },
              { id: "c", text: "She had always loved performing." },
              { id: "d", text: "The curtains opened and her voice cracked on the first line." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "Maximum tension — the moment everything changes." },
            ],
            steps: [
              { reasoning: "Stepping on stage is the point of no return — peak tension.", working: "\\text{point of no return}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The curtains opened and her voice cracked on the first line.",
            commonErrors: ["Choosing (d) — that is the resolution, not the climax."],
          },
        },
        {
          id: "cile-u4-plot-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Plan the rising action for a story about a student who loses their dog. List three escalating complications in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Escalation", statement: "Each complication must raise the stakes higher than the last." },
            ],
            steps: [
              { reasoning: "First complication: the dog goes missing — immediate problem.", working: "\\text{loss}", marks: 1, markCode: "AO2" },
              { reasoning: "Second complication: searching fails / a deadline or danger approaches.", working: "\\text{failure/danger}", marks: 1, markCode: "AO2" },
              { reasoning: "Third complication: stakes peak — evidence suggests the dog may not be found.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 1. The dog slips its lead and vanishes. 2. Hours of searching fail as night falls and rain begins. 3. A neighbour reports seeing the dog near the busy road — time is running out.",
            commonErrors: ["Events that repeat the same stakes instead of escalating."],
          },
        },
        {
          id: "cile-u4-plot-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ending type deliberately leaves the central question of the story unanswered?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resonant" },
              { id: "b", text: "Resolved" },
              { id: "c", text: "Open" },
              { id: "d", text: "Circular" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Open ending", statement: "Deliberately unresolved — invites the reader to imagine what happens next." },
            ],
            steps: [
              { reasoning: "An open ending leaves the question dangling on purpose.", working: "\\text{deliberate}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Open",
            commonErrors: ["Confusing 'open' with 'unfinished' — open is a deliberate choice."],
          },
        },
        {
          id: "cile-u4-plot-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are planning a narrative about a student who discovers a hidden talent.",
          parts: [
            { label: "a", prompt: "Describe the exposition — who, where, what is the status quo?", marks: 2 },
            { label: "b", prompt: "List two rising-action events that build tension.", marks: 2 },
            { label: "c", prompt: "Identify the climax and explain why it is the peak.", marks: 2 },
            { label: "d", prompt: "Describe the resolution and suggest one piece of foreshadowing planted earlier.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Each stage must fulfil its function — setup, escalation, peak, aftermath." },
            ],
            steps: [
              { part: "a", reasoning: "Exposition establishes character, setting, pre-discovery state.", working: "\\text{setup}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear and specific.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two escalating complications.", working: "\\text{complications}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Each raises tension logically.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Climax identified — moment of maximum tension.", working: "\\text{peak}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Why it is the peak explained.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Resolution described — aftermath and emotional outcome.", working: "\\text{aftermath}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Foreshadowing planted earlier in the story.", working: "\\text{foreshadow}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Foreshadowing links convincingly to the climax.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) exposition setup (b) two escalating events (c) climax at peak tension (d) resolution + foreshadowing linking to climax",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear exposition.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two logical escalating events.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax identified and justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Resolution plus convincing foreshadowing.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) suggesting foreshadowing that does not connect to the climax."],
          },
        },
        {
          id: "cile-u4-plot-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two reasons why pacing should vary across a narrative rather than staying constant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing variety", statement: "Variation controls tension and gives the reader moments to breathe and reflect." },
            ],
            steps: [
              { reasoning: "Reason 1: fast pacing at the climax creates urgency; slow build-up creates dread.", working: "\\text{contrast}", marks: 1, markCode: "AO2" },
              { reasoning: "Reason 2: slow sections allow reflection and description — constant speed flattens emotion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Varying pace creates contrast — fast sections build urgency at the climax while slow sections allow dread to accumulate and give the reader space to reflect.",
            commonErrors: ["Saying 'it keeps things interesting' without explaining the tension mechanism."],
          },
        },
        {
          id: "cile-u4-plot-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which detail would most effectively foreshadow a storm that becomes the story's climax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The characters eat lunch together." },
              { id: "b", text: "The main character has red hair." },
              { id: "c", text: "The story takes place in a town." },
              { id: "d", text: "Dark clouds gather on the horizon while the radio warns of a storm front." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "Early clues make later events feel inevitable in hindsight." },
            ],
            steps: [
              { reasoning: "Dark clouds and a storm warning plant the idea of the storm before it arrives.", working: "\\text{early clue}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dark clouds gather on the horizon while the radio warns of a storm front.",
            commonErrors: ["Choosing details unrelated to the coming event — foreshadowing must point forward."],
          },
        },
      ],
    },
    {
      id: "cile-u4-dialogue",
      title: "Dialogue and voice",
      skill: "Write effective dialogue that reveals character, advances plot and sounds authentic.",
      lesson: {
        sections: [
          {
            heading: "What dialogue does",
            body: "- **Reveals character**: word choice, rhythm, what is said vs unsaid.\n- **Advances plot**: characters act through speech — decisions, conflicts, revelations.\n- **Controls pace**: short exchanges speed things up; long speeches slow them down.\n- **Creates voice**: each character should sound distinct.",
          },
          {
            heading: "Authentic dialogue",
            body: "- **Subtext**: characters rarely say exactly what they mean — 'I'm fine' often means 'I'm not'.\n- **Idiolect**: each character has their own vocabulary, catchphrases, rhythm.\n- **Interruptions and pauses**: 'I was—' '—never mind.' Real speech is messy.\n- **Avoid exposition**: characters should not explain the plot to each other unnaturally.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue rules", statement: "Dialogue must reveal character, advance action, and sound like real speech — with subtext, distinct voices, and natural rhythm." },
        ],
        workedExample: {
          problem: "Two characters meet after an argument. Write a line showing unresolved tension.",
          solution: "'So.' / 'So.' — the single-word exchange conveys everything: neither wants to speak first. Subtext does the work.",
        },
      },
      questions: [
        {
          id: "cile-u4-dial-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of subtext in dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The meeting is at three o'clock.'" },
              { id: "b", text: "'Fine. Do whatever you want.'" },
              { id: "c", text: "'I am angry with you.'" },
              { id: "d", text: "'I like your new haircut.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtext", statement: "Characters say one thing but mean another — 'Fine' means 'I'm not fine'." },
            ],
            steps: [
              { reasoning: "'Fine. Do whatever you want' says agreement but means resentment.", working: "\\text{subtext}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'Fine. Do whatever you want.'",
            commonErrors: ["Choosing (a) — it states the feeling directly, no subtext."],
          },
        },
        {
          id: "cile-u4-dial-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways dialogue can reveal character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue and character", statement: "Word choice, rhythm and subtext reveal personality." },
            ],
            steps: [
              { reasoning: "Way 1: vocabulary — formal vs slang, technical vs simple.", working: "\\text{vocabulary}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: subtext — what they avoid saying reveals more than what they say.", working: "\\text{subtext}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vocabulary/register (word choice) and subtext (what is avoided or implied) — both reveal character through speech.",
            commonErrors: ["Saying 'dialogue shows what they say' — it shows how they say it and what they don't say."],
          },
        },
        {
          id: "cile-u4-dial-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this unnatural dialogue to sound authentic while keeping the same information: 'As you know, our father left us ten years ago and mother never talks about him.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Natural dialogue", statement: "Characters do not explain shared history to each other; they speak around it." },
            ],
            steps: [
              { reasoning: "Problem: characters telling each other what they both know is unnatural.", working: "\\text{unnatural exposition}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: use subtext and implication — 'She still sets his place at dinner.'", working: "\\text{subtext}", marks: 1, markCode: "AO2" },
              { reasoning: "Alternative: one character asks, the other deflects — shows avoidance.", working: "\\text{deflection}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: same information conveyed indirectly, more realistic.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'She still sets his place at the table.' / 'Don't.' — the detail implies the history without exposition; the one-word response shows the topic's pain.",
            commonErrors: ["Keeping the same information but adding 'um' — authenticity requires restructuring, not just fillers."],
          },
        },
        {
          id: "cile-u4-dial-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a dialogue scene between two characters who have just argued.",
          parts: [
            { label: "a", prompt: "Write three lines of dialogue showing unresolved tension (subtext).", marks: 3 },
            { label: "b", prompt: "Explain how each line reveals character or relationship.", marks: 2 },
            { label: "c", prompt: "Identify one way the dialogue advances the plot.", marks: 2 },
            { label: "d", prompt: "Suggest how the scene's pacing could be adjusted for more impact.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue craft", statement: "Subtext, distinct voices, plot advancement and pacing control." },
            ],
            steps: [
              { part: "a", reasoning: "Three lines with subtext — characters say one thing, mean another.", working: "\\text{subtext}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Lines are distinct in voice and rhythm.", working: "\\text{distinct voices}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Tension is palpable without being stated.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Each line's character/relationship revelation explained.", working: "\\text{revelation}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Explanations are specific and accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Plot advancement identified — decision, revelation or escalation.", working: "\\text{advancement}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear link to story progression.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Pacing suggestion made (shorter/longer lines, pauses, interruptions).", working: "\\text{pacing}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Suggestion justified by desired effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) three subtextual lines (b) explanations (c) plot advancement identified (d) pacing adjustment justified",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Subtextual, distinct dialogue.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Some subtext.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate explanations.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Plot advancement identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Pacing suggestion justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Writing direct statements of feeling instead of subtext."],
          },
        },
        {
          id: "cile-u4-dial-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which line of dialogue best shows that a character is lying?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Why do you always doubt me?'" },
              { id: "b", text: "'Honestly? I have no idea where I was.'" },
              { id: "c", text: "'I told you already — ask someone else.'" },
              { id: "d", text: "'I was at the library all afternoon.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtext", statement: "Evading the question rather than answering it signals deception." },
            ],
            steps: [
              { reasoning: "(b) refuses to answer directly — the evasion suggests guilt.", working: "\\text{evasion}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'Honestly? I have no idea where I was.'",
            commonErrors: ["Choosing (a) — a direct answer is not evidence of lying."],
          },
        },
        {
          id: "cile-u4-dial-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways dialogue can advance the plot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue and plot", statement: "Speech can reveal information, force decisions or escalate conflict." },
            ],
            steps: [
              { reasoning: "Way 1: revealing information — a character discloses a secret or fact that changes events.", working: "\\text{revelation}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: forcing decisions or conflict — an ultimatum or argument pushes the story forward.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Dialogue advances plot by revealing information (secrets, facts that change events) and by forcing decisions or escalating conflict (ultimatums, arguments).",
            commonErrors: ["Saying 'characters talk' — advancement means the speech changes what happens next."],
          },
        },
        {
          id: "cile-u4-dial-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why giving each character a distinct 'voice' matters in dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Idiolect", statement: "Each character should have their own vocabulary, rhythm and mannerisms." },
            ],
            steps: [
              { reasoning: "Without distinct voices, speakers become interchangeable — the reader cannot tell them apart.", working: "\\text{indistinguishable}", marks: 1, markCode: "AO2" },
              { reasoning: "Distinct vocabulary and rhythm reveal personality and background.", working: "\\text{personality}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: dialogue becomes characterisation as well as action.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Distinct voices let readers identify speakers without tags, reveal personality through word choice and rhythm, and turn dialogue into characterisation as well as plot.",
            commonErrors: ["Saying 'it sounds realistic' without explaining how voice reveals character."],
          },
        },
        {
          id: "cile-u4-dial-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which line of dialogue uses an interruption to show tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I was going to say—' '—never mind. Forget it.'" },
              { id: "b", text: "'The meeting starts at three o'clock.'" },
              { id: "c", text: "'We should probably leave soon.'" },
              { id: "d", text: "'She always arrives early.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interruptions", statement: "Cutting off speech mimics real conversation and signals emotion." },
            ],
            steps: [
              { reasoning: "The cut-off 'never mind' shows someone silencing or overruling the other — tension.", working: "\\text{cut-off}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 'I was going to say—' '—never mind. Forget it.'",
            commonErrors: ["Choosing a polite exchange — interruption specifically signals conflict."],
          },
        },
        {
          id: "cile-u4-dial-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this stilted dialogue to sound authentic while keeping the meaning: 'I am very angry that you forgot my birthday.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Natural dialogue", statement: "Real speech is indirect, emotional and imperfect — not a stated feeling." },
            ],
            steps: [
              { reasoning: "Problem: stating 'I am very angry' directly is artificial.", working: "\\text{stated feeling}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: show through subtext and deflection — 'You forgot.' or sarcasm.", working: "\\text{subtext}", marks: 1, markCode: "AO2" },
              { reasoning: "Make it sound spoken — shorter, less formal, with natural rhythm.", marks: 1, markCode: "AO2" },
              { reasoning: "Result: same meaning, authentic voice.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'You forgot.' / 'I know.' — the minimal exchange conveys hurt and anger through what is unsaid; or 'Oh, did I? Funny — I could have sworn today was— whatever.' — sarcasm and deflection reveal the feeling naturally.",
            commonErrors: ["Keeping 'I am angry' and adding 'um' — authenticity requires restructuring, not fillers."],
          },
        },
        {
          id: "cile-u4-dial-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'subtext' in dialogue and why is it powerful?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtext", statement: "Characters say one thing but mean another." },
            ],
            steps: [
              { reasoning: "Subtext: the gap between what is said and what is meant — 'I'm fine' meaning 'I'm not'.", working: "\\text{gap}", marks: 1, markCode: "AO2" },
              { reasoning: "Power: it lets readers infer emotion — engagement makes the feeling more convincing.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Subtext is the gap between what characters say and what they mean — it lets readers infer emotion rather than being told, making dialogue feel real and layered.",
            commonErrors: ["Defining subtext as 'hidden meaning' without the said-vs-meant contrast."],
          },
        },
        {
          id: "cile-u4-dial-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of characters avoiding exposition unnaturally?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You still haven't told me why you lied.'" },
              { id: "b", text: "'I can't believe you told her.'" },
              { id: "c", text: "'As you know, we have been friends since we were five.'" },
              { id: "d", text: "'That was the last time I ever trusted you.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Avoiding exposition", statement: "Characters do not explain shared history to each other." },
            ],
            steps: [
              { reasoning: "'As you know' flags information both characters already share — unnatural.", working: "\\text{'as you know'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'As you know, we have been friends since we were five.'",
            commonErrors: ["Choosing lines that reveal conflict — conflict is natural; shared-history explanation is not."],
          },
        },
        {
          id: "cile-u4-dial-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two characters meet for the first time in your story. Write two lines of dialogue that establish their distinct voices — one formal, one informal — without naming them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Idiolect", statement: "Word choice, sentence length and register distinguish speakers." },
            ],
            steps: [
              { reasoning: "Formal voice: longer sentences, precise vocabulary, polite phrasing.", working: "\\text{formal}", marks: 1, markCode: "AO2" },
              { reasoning: "Informal voice: contractions, slang or fragments, casual rhythm.", working: "\\text{informal}", marks: 1, markCode: "AO2" },
              { reasoning: "Both lines sound spoken and distinct — not interchangeable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. Formal: 'Good afternoon. I understand you wished to discuss the matter regarding the hall booking.' Informal: 'Yeah, hi — so, about the hall thing, you free now?'",
            commonErrors: ["Both characters using the same register — voices must contrast."],
          },
        },
        {
          id: "cile-u4-dial-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which dialogue exchange best controls pace by speeding the scene up?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long speeches with detailed descriptions" },
              { id: "b", text: "A character monologue lasting a page" },
              { id: "c", text: "Quick one-word exchanges: 'Run.' 'Now?' 'Now!'" },
              { id: "d", text: "Narration describing the weather for a paragraph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pace in dialogue", statement: "Short rapid exchanges accelerate; long speeches decelerate." },
            ],
            steps: [
              { reasoning: "Fragmented rapid-fire lines create urgency and speed.", working: "\\text{rapid}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Quick one-word exchanges: 'Run.' 'Now?' 'Now!'",
            commonErrors: ["Choosing (a) — long speeches slow the pace down."],
          },
        },
        {
          id: "cile-u4-dial-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a dialogue scene in which two siblings argue about a secret one of them kept.",
          parts: [
            { label: "a", prompt: "Write four lines of dialogue with subtext showing the tension.", marks: 3 },
            { label: "b", prompt: "Explain how each line reveals character or relationship.", marks: 2 },
            { label: "c", prompt: "Identify one way the dialogue advances the plot.", marks: 2 },
            { label: "d", prompt: "Suggest one way the scene's pacing could be adjusted for impact.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue craft", statement: "Subtext, distinct voices, plot advancement and pacing control." },
            ],
            steps: [
              { part: "a", reasoning: "Four lines with subtext — said vs meant.", working: "\\text{subtext}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Distinct voices and rhythm between siblings.", working: "\\text{voices}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Tension palpable without being stated.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Each line's character/relationship revelation explained.", working: "\\text{revelation}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Explanations specific and accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Plot advancement identified — revelation or escalation.", working: "\\text{advancement}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear link to story progression.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Pacing suggestion made (shorter/longer lines, pauses, interruptions).", working: "\\text{pacing}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Suggestion justified by desired effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) four subtextual lines (b) explanations (c) plot advancement identified (d) pacing adjustment justified",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Subtextual, distinct dialogue.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Some subtext.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate explanations.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Plot advancement identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Pacing suggestion justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Writing direct statements of feeling instead of subtext."],
          },
        },
        {
          id: "cile-u4-dial-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two reasons why dialogue should not be used to explain the plot to the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Avoiding exposition", statement: "Characters do not tell each other what both already know." },
            ],
            steps: [
              { reasoning: "Reason 1: it sounds artificial — real people do not recite shared facts.", working: "\\text{artificial}", marks: 1, markCode: "AO2" },
              { reasoning: "Reason 2: it wastes dialogue's power — speech should reveal character and advance action.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Expository dialogue sounds artificial because real people do not recite shared facts, and it wastes dialogue's function — speech should reveal character and advance action instead.",
            commonErrors: ["Saying 'it is boring' — the reasons are artificiality and lost function."],
          },
        },
        {
          id: "cile-u4-dial-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which rewrite best replaces direct emotion with authentic subtext?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You'll send me a postcard, won't you? From wherever you go.'" },
              { id: "b", text: "'I feel very emotional about this.'" },
              { id: "c", text: "'This makes me extremely unhappy.'" },
              { id: "d", text: "'I am so sad that you are leaving.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtext", statement: "Asking for a postcard implies the sadness without naming it." },
            ],
            steps: [
              { reasoning: "(b) implies grief through a small request — the reader infers the feeling.", working: "\\text{implied}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'You'll send me a postcard, won't you? From wherever you go.'",
            commonErrors: ["Choosing a line that names the emotion — subtext requires implication."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u4-plot-dialogue-notes",
      title: "Plot and dialogue — revision notes",
      summary: "Narrative arc, pacing, foreshadowing, and writing authentic dialogue.",
      sections: [
        {
          heading: "Narrative arc",
          body: "Exposition → rising action → climax → resolution. Pace: slow build-up, fast climax, slow resolution. Foreshadow early for earned endings.",
        },
        {
          heading: "Dialogue",
          body: "Reveal character through vocabulary, rhythm, subtext. Characters should not explain shared history. Use interruptions, pauses, deflection for authenticity.",
        },
        {
          heading: "Writing checklist",
          body: "Does each stage of the arc fulfil its function? Is tension building logically? Does dialogue sound like real speech? Is the ending earned?",
        },
      ],
    },
  ],
};
