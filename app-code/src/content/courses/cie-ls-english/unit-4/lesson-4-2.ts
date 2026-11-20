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
              { id: "a", text: "Climax" },
              { id: "b", text: "Resolution" },
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
              { id: "a", text: "'I am angry with you.'" },
              { id: "b", text: "'Fine. Do whatever you want.'" },
              { id: "c", text: "'The meeting is at three o'clock.'" },
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
