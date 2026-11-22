import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "langa-u1-lesson-1-1",
  code: "1-1",
  title: "Genres and Text Types: Prose, Poetry and Drama",
  goal: "I CAN identify the conventions of prose, poetry and drama and explain how genre shapes meaning.",
  standards: ["Reading", "Analysis", "Text types"],
  vocabulary: [
    { term: "Genre", definition: "A category of text sharing conventions, purposes and audience expectations, e.g. novel, sonnet, tragedy." },
    { term: "Text type", definition: "A form defined by purpose and structure, e.g. article, letter, review, speech — distinct from genre." },
    { term: "Narrative voice", definition: "Who tells the story and from what position: first person, third person limited or omniscient." },
    { term: "Stanza", definition: "A grouped set of lines in a poem; its shape and rhyme pattern are part of the poem's form." },
    { term: "Stage direction", definition: "Instructions in a play text describing movement, tone, setting or delivery." },
    { term: "Soliloquy", definition: "A speech in which a character speaks alone on stage, revealing inner thoughts directly to the audience." },
  ],
  concepts: [
    {
      id: "langa-u1-prose-fiction",
      title: "Prose fiction: narrative and perspective",
      skill: "Identify prose sub-genres (novel, short story) and analyse how narrative voice, perspective and structure shape meaning.",
      lesson: {
        sections: [
          {
            heading: "The prose text",
            body: "Prose fiction is written in paragraphs rather than verse. The **novel** is long-form, often exploring character development and social worlds; the **short story** compresses narrative into a single arc with concentrated symbolism. Key analytical features are **narrative voice** (who speaks), **perspective** (first, second or third person; limited or omniscient) and **structure** (linear, flashback, frame narrative, epistolary).",
          },
          {
            heading: "Voice and perspective",
            body: "A **first-person narrator** filters events through one character's bias — we see what they notice and misunderstand. A **third-person omniscient** narrator can move between minds and comment directly, creating authority or irony. An **unreliable narrator** deliberately contradicts the evidence, inviting the reader to doubt. Choosing the narrator is itself a meaning-making decision.",
          },
          {
            heading: "Structure as meaning",
            body: "Structure includes chapter divisions, chronological order, flashbacks and endings. A story told backwards, or ending on an unresolved moment, changes how the reader judges the events. Analyse **where** information is revealed, not just **what** is revealed.",
          },
        ],
        keyFormulas: [
          { name: "Narrative questions", statement: "Who narrates? From what perspective? How much do they know? Why might the author choose this voice?" },
          { name: "Structure signals", statement: "Flashback, frame narrative, non-linear order and ending type all carry meaning." },
        ],
        workedExample: {
          problem: "A short story opens: 'I killed him on a Sunday morning.' Analyse what the opening establishes.",
          solution: "The first-person voice creates intimacy and immediacy; the flat, factual tone contrasts with the shocking content, producing irony or unease; the compressed sentence mimics a guilty confession. Voice, tone and structure work together before any plot is known.",
        },
      },
      questions: [
        {
          id: "langa-u1-gq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which narrative perspective gives the reader access to many characters' thoughts and a broader view of events?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First person limited" },
              { id: "b", text: "Third person omniscient" },
              { id: "c", text: "Second person" },
              { id: "d", text: "Stream of consciousness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Omniscient narrator", statement: "A third-person narrator who can access all characters' thoughts and events." },
            ],
            steps: [
              { reasoning: "Omniscient narration moves between minds and sees the whole story.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Third person omniscient",
            commonErrors: ["Confusing omniscient with first person — 'I' can only report what one character knows."],
          },
        },
        {
          id: "langa-u1-gq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways an author might use narrative structure to shape a reader's response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural devices", statement: "Non-linear order, flashback, frame narrative and ending choice all direct interpretation." },
            ],
            steps: [
              { reasoning: "Non-linear order or flashback can withhold crucial information, creating suspense or irony as the reader reinterprets earlier events.", marks: 1, markCode: "M" },
              { reasoning: "A frame narrative distances the inner story, inviting judgement of the teller as well as the events.", marks: 1, markCode: "M" },
              { reasoning: "The ending (resolved, ironic, open) determines whether the reader feels closure, shock or lingering doubt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structure controls what the reader knows when, and therefore how events are judged.",
            commonErrors: ["Listing devices without explaining their effect on meaning."],
          },
        },
        {
          id: "langa-u1-gq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effects of first-person and third-person narration in prose fiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative voice comparison", statement: "First person = intimacy, bias, unreliability; third person = breadth, authority, distance." },
            ],
            steps: [
              { reasoning: "First person creates immediacy and subjectivity — the reader is trapped in one mind, which can be unreliable or biased.", marks: 1, markCode: "M" },
              { reasoning: "Third person omniscient offers breadth and authorial commentary but can reduce intimacy and create distance.", marks: 1, markCode: "M" },
              { reasoning: "Third person limited retains some subjectivity while allowing more flexibility than 'I'.", marks: 1, markCode: "R" },
              { reasoning: "The choice depends on purpose: confession, satire and documentary realism suit different voices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First person: intimate, biased, possibly unreliable. Third person: broader, more authoritative, more distant.",
            commonErrors: ["Claiming one voice is always better rather than suited to different purposes."],
          },
        },
        {
          id: "langa-u1-gq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse how narrative voice and structure work together in the following extract.",
          extract: {
            title: "A Confession",
            author: "Written for Akademik Space",
            source: "Original short story opening",
            text: "I have lied about this before. The police will tell you I told the truth the first time, and perhaps I did, but only because the first time I was still deciding what the truth would be.\n\nNow it is simpler. She left at dawn and I watched from the window until the road took her. I did not follow. That is the part they never understand: I could have followed, and I chose the window.",
          },
          parts: [
            { label: "a", prompt: "Identify the narrative voice and explain its effect.", marks: 2 },
            { label: "b", prompt: "Analyse the effect of the opening admission 'I have lied about this before'.", marks: 3 },
            { label: "c", prompt: "Evaluate how the final sentence complicates the narrator's self-image.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unreliable first-person narration", statement: "A narrator who admits deception forces the reader to question every claim." },
            ],
            steps: [
              { part: "a", reasoning: "First-person 'I' narrator, apparently confessing to a crime or deception.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Creates intimacy but also unreliability — the reader cannot trust the account.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The admission establishes the narrator as dishonest before any facts are given, so the reader reads defensively.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Only because the first time I was still deciding what the truth would be' shows truth as constructed, not reported.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The repetition of 'truth' across the sentence turns a legal concept into a psychological one.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'I chose the window' claims agency and restraint, but choosing not to act is itself presented as damning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The narrator's self-justification ('I did not follow') is undercut by his own admission of choice, deepening moral ambiguity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unreliable first-person confession. (b) Truth is presented as constructed; reader distrusts the account. (c) Passivity is reframed as choice, deepening guilt.",
            commonErrors: ["Treating the narrator's account as factual rather than constructed."],
          },
        },
        {
          id: "langa-u1-gq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most clearly distinguishes the short story from the novel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It compresses a complete narrative arc into a single concentrated form" },
              { id: "b", text: "It contains no dialogue or description" },
              { id: "c", text: "It must be narrated in the first person" },
              { id: "d", text: "It always resolves happily" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Short story vs novel", statement: "The short story compresses one arc into a concentrated form; the novel develops at length." },
            ],
            steps: [
              { reasoning: "The defining trait of the short story is compression: one arc, few characters, concentrated symbolism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It compresses a complete narrative arc into a single concentrated form",
            commonErrors: ["Equating short length with first-person narration — the two are unrelated."],
          },
        },
        {
          id: "langa-u1-gq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Second-person narration ('you open the door') primarily creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "omniscient authority over what happens" },
              { id: "b", text: "immersion by casting the reader as a participant in events" },
              { id: "c", text: "a reliable eyewitness account" },
              { id: "d", text: "a detached, documentary tone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Second-person narration", statement: "Addressing the reader as 'you' makes them a character inside the story." },
            ],
            steps: [
              { reasoning: "'You' places the reader inside the action as an actor, not an observer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Immersion by casting the reader as a participant",
            commonErrors: ["Confusing second person with omniscient narration — 'you' restricts rather than expands knowledge."],
          },
        },
        {
          id: "langa-u1-gq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A novel tells its story backwards, ending with the event that began it. The strongest analytical description of this structural choice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It simplifies the plot for younger readers." },
              { id: "b", text: "It signals that the narrator cannot be trusted." },
              { id: "c", text: "It withholds the cause until the end, forcing the reader to reinterpret earlier scenes as consequences." },
              { id: "d", text: "It imitates the editing style of film." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-linear structure", statement: "Reversing chronology makes earlier events read as effects before their cause is known." },
            ],
            steps: [
              { reasoning: "Telling backwards withholds the originating event, so the reader must hold scenes in suspense.", marks: 1, markCode: "M" },
              { reasoning: "Once the cause arrives, earlier scenes are reinterpreted — meaning is produced by the structure, not just the events.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Withholding the cause forces reinterpretation of earlier scenes",
            commonErrors: ["Describing the order without explaining how it changes the reader's judgement."],
          },
        },
        {
          id: "langa-u1-gq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            source: "Original short story opening",
            text: "Nobody warned us. The door was already open. The lights were off. Somewhere inside, something turned over in its sleep.",
          },
          stem: "Which effect does the opening's style create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A flat, matter-of-fact tone that renders the uncanny details unsettlingly ordinary." },
              { id: "b", text: "A formal, ceremonial atmosphere." },
              { id: "c", text: "A confessional, intimate tone." },
              { id: "d", text: "Comic exaggeration through hyperbole." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone and pacing", statement: "Short declaratives and plain diction create flatness; flatness intensifies the strange content." },
            ],
            steps: [
              { reasoning: "Short declarative sentences report the impossible ('something turned over in its sleep') without emphasis.", marks: 1, markCode: "M" },
              { reasoning: "The mismatch between flat delivery and uncanny content produces unease.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Flat tone makes the uncanny feel matter-of-fact",
            commonErrors: ["Identifying 'short sentences' without linking them to the effect of flatness."],
          },
        },
        {
          id: "langa-u1-gq9",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Not Angry",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "\"I am not angry,\" I said. My hands were shaking. On the table, the cup had a chip in its rim shaped exactly like a tooth.",
          },
          stem: "Which feature most strongly suggests the narrator may be unreliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The gap between the narrator's claim ('not angry') and the physical evidence of shaking hands." },
              { id: "b", text: "The chipped cup on the table." },
              { id: "c", text: "The use of the first person." },
              { id: "d", text: "The dialogue tag 'I said'." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unreliable narration", statement: "When a narrator's self-description contradicts the details they report, the reader learns to doubt them." },
            ],
            steps: [
              { reasoning: "The narrator asserts 'I am not angry' while reporting hands that are shaking.", marks: 1, markCode: "M" },
              { reasoning: "The contradiction is between claim and evidence — the reader, not the narrator, detects it.", marks: 1, markCode: "M" },
              { reasoning: "First person alone does not imply unreliability; it is the contradiction that does.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The contradiction between claim and physical evidence",
            commonErrors: ["Assuming all first-person narrators are unreliable — the contradiction is the signal."],
          },
        },
        {
          id: "langa-u1-gq10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a first-person narrator can be unreliable and one effect this has on the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unreliable narration", statement: "A narrator can distort facts, select evidence or misread themselves; the reader must reconstruct the truth." },
            ],
            steps: [
              { reasoning: "Deliberate deception: the narrator lies or invents events, as in a fabricated confession.", marks: 1, markCode: "M" },
              { reasoning: "Biased or partial memory: the narrator selects what to report and misreads their own motives.", marks: 1, markCode: "M" },
              { reasoning: "The reader becomes an active detective, weighing claims against clues and judging the teller.", marks: 1, markCode: "R" },
              { reasoning: "This produces irony and moral ambiguity — meaning arises from the gap between account and evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unreliability arises from lies, bias or self-deception; it turns the reader into a judge of the narrator.",
            commonErrors: ["Listing types of unreliability without explaining the reader's changed role."],
          },
        },
        {
          id: "langa-u1-gq11",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Surveyor",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Mara marked the boundary stone and did not look at the house. Behind her, the door opened — she heard it, the particular sigh of old wood — but she kept writing in her notebook. The land was hers to measure; what happened inside it was not.",
          },
          stem: "Analyse how narrative perspective and focalisation shape meaning in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Focalisation", statement: "Third-person limited focalisation filters events through one character's attention and priorities." },
            ],
            steps: [
              { reasoning: "The narration is third-person limited, focalised through Mara: we receive only what she notices and chooses to record.", marks: 1, markCode: "M" },
              { reasoning: "Her professional detachment ('kept writing in her notebook') is enacted by the syntax — the door's opening is subordinated to her work.", marks: 1, markCode: "M" },
              { reasoning: "The personified 'sigh of old wood' gives the house an interior life that Mara refuses to acknowledge.", marks: 1, markCode: "M" },
              { reasoning: "Because the reader sees what Mara will not, the perspective creates dramatic irony — we judge her avoidance.", marks: 1, markCode: "R" },
              { reasoning: "The final sentence states her rule — land measurable, life not — making the extract a study in deliberate blindness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limited focalisation through Mara enacts her detachment; the reader sees the domestic event she refuses, producing irony about professional control.",
            commonErrors: ["Describing the events without linking them to whose perception filters them."],
          },
        },
        {
          id: "langa-u1-gq12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A novel opens with a character telling a story, then returns to that character's present at the end. This 'frame narrative' primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "eliminates the need for a plot" },
              { id: "b", text: "guarantees that the inner story is true" },
              { id: "c", text: "forces the events into strict chronological order" },
              { id: "d", text: "distances the inner story so the reader judges both teller and tale" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Frame narrative", statement: "A story inside a story creates a teller whose motives colour everything told." },
            ],
            steps: [
              { reasoning: "The outer frame supplies a narrator with reasons for telling, so the inner tale is always read through a personality.", marks: 1, markCode: "M" },
              { reasoning: "Returning to the present at the end lets the reader measure what the telling changed.", marks: 1, markCode: "M" },
              { reasoning: "The frame also protects the reader: we judge the teller's reliability before trusting the tale.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It distances the inner story so the reader judges both teller and tale",
            commonErrors: ["Assuming the frame merely adds background rather than shaping interpretation."],
          },
        },
        {
          id: "langa-u1-gq13",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Letters Never Sent",
            author: "Written for Akademik Space",
            source: "Original diary extract",
            text: "March 3 — I wrote to her today. I did not send it.\n\nMarch 19 — Found the letter in my coat pocket. It is longer than I remember writing.\n\nApril 2 — I have stopped calling the unsent letters drafts. A draft is meant to become something. These are finished. They just have no address.",
          },
          stem: "Analyse how the epistolary/diary structure shapes meaning in this extract.",
          parts: [
            { label: "a", prompt: "Identify the structural form and its effect on narrative voice.", marks: 2 },
            { label: "b", prompt: "Analyse how the gaps between the dated entries create meaning.", marks: 3 },
            { label: "c", prompt: "Evaluate what is gained and lost by the letters being 'never sent'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Epistolary/diary form", statement: "Dated fragments create intimacy and let time itself become a structural element." },
            ],
            steps: [
              { part: "a", reasoning: "The dated entries are a diary form — private, immediate, unpolished voice addressed to the writer alone.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The brevity of each entry mimics reluctance: the writer cannot sustain the confession across a page.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The sixteen-day gap between March 3 and March 19 withholds what happened — the reader fills the silence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'It is longer than I remember writing' suggests the unsent letters grow beyond the writer's control — meaning accumulates in the gaps.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The accelerating entries (March to April 2) enact obsession — the ritual of not-sending becomes the story.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "What is gained: absolute honesty, since no reader is anticipated. What is lost: connection — 'no address' literalises emotional isolation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The final redefinition of 'drafts' into 'finished' shows the writer has made peace with permanent non-communication — a bleak resolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Diary form gives an intimate but withheld voice. (b) Date gaps turn time into meaning — silence carries the story. (c) Unsent letters buy honesty but guarantee isolation.",
            commonErrors: ["Summarising the entries without analysing what the gaps and form contribute."],
          },
        },
        {
          id: "langa-u1-gq14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Three A.M.",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "You wake at three in the morning and the house is not asleep — it is only pretending. You make tea you do not drink. On the stairs, your coat is still hanging where you left it last winter, and for a moment you do not recognise the person who wore it.",
          },
          stem: "Analyse the effects of second-person narration in this extract.",
          parts: [
            { label: "a", prompt: "Identify the narrative voice and explain its immediate effect on the reader.", marks: 2 },
            { label: "b", prompt: "Analyse the imagery of the 'pretending' house and the unrecognised coat.", marks: 3 },
            { label: "c", prompt: "Evaluate how the extract sustains ambiguity about whether 'you' is a person or a type.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Second-person narration", statement: "'You' immerses the reader but also generalises them into a type." },
            ],
            steps: [
              { part: "a", reasoning: "The second-person 'you' makes the reader the protagonist — we experience the insomnia directly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The effect is forced intimacy: the extract presumes to know our 3 a.m. habits.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The house that is 'not asleep — only pretending' personifies domestic space as a fellow insomniac, deepening the uncanny.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tea 'you do not drink' renders the ritual meaningless — habit persisting without purpose.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The coat 'you do not recognise' literalises self-alienation: the past self becomes a stranger in your own hallway.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The extract never names or individuates 'you', so it reads both as a specific person's night and as every sleepless person's.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This doubleness is the point: second person offers empathy through impersonality — we are all briefly 'you'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ambiguity is productive rather than confusing: the reader supplies their own biography, making the extract participatory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Second person forces intimacy and impersonality at once. (b) Personified house and unrecognised coat stage self-alienation. (c) 'You' is both individual and universal — the ambiguity invites the reader's own night.",
            commonErrors: ["Treating 'you' as a single character rather than a deliberately ambiguous address."],
          },
        },
        {
          id: "langa-u1-gq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Argument",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "By the time the ambulance came, the argument was already over — though neither of us knew it yet. I remember standing in the kitchen doorway, holding the letter, watching my brother read the first line and go very still.",
          },
          stem: "Analyse how the opening uses prolepsis (flash-forward) to create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prolepsis", statement: "Announcing a future event in advance makes the present scene read as its cause." },
            ],
            steps: [
              { reasoning: "The first sentence jumps ahead to 'the ambulance' — a future crisis is disclosed before the scene that leads to it.", marks: 1, markCode: "M" },
              { reasoning: "Because the ambulance is announced, every detail of the kitchen scene acquires ominous weight: the letter, the stillness.", marks: 1, markCode: "M" },
              { reasoning: "'Though neither of us knew it yet' adds tragic irony — the reader knows what the characters cannot.", marks: 1, markCode: "M" },
              { reasoning: "The flash-forward converts a domestic argument into a countdown; suspense replaces curiosity about what happens.", marks: 1, markCode: "R" },
              { reasoning: "Structurally, the extract thus begins at the story's emotional climax and rewinds — meaning is framed by consequence.", marks: 1, markCode: "A" },
              { reasoning: "The device also mimics memory: we often recall a crisis through the moment before it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prolepsis discloses the ambulance in advance, turning the kitchen scene into its inevitable cause and steeping ordinary details in dread.",
            commonErrors: ["Noting the flash-forward without explaining how it changes the reading of the present scene."],
          },
        },
        {
          id: "langa-u1-gq16",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "What the River Took",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "We never spoke about the summer the river took the bridge. Father called it 'the accident', with quotation marks he never used anywhere else, and that was how we all learned that some things are not accidents but choices we agree not to name.",
          },
          stem: "Analyse how narrative voice conveys a family's unspoken history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative voice and silence", statement: "What a narrator refuses to say, and how they phrase what they do say, reveals communal history." },
            ],
            steps: [
              { reasoning: "The first-person plural 'we' makes the voice communal — the silence belongs to the whole family, not one person.", marks: 1, markCode: "M" },
              { reasoning: "Father's scare quotes around 'the accident' expose the euphemism: the family knows the word is wrong but uses it anyway.", marks: 1, markCode: "M" },
              { reasoning: "'Choices we agree not to name' extends the silence into complicity — every member participates in the not-speaking.", marks: 1, markCode: "M" },
              { reasoning: "The voice thus enacts what it describes: the extract is about an absence, told in the grammar of avoidance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The communal 'we' and euphemistic 'accident' show a family-wide pact of silence; the voice performs the very unspoken history it describes.",
            commonErrors: ["Summarising the event without analysing how the phrasing itself enacts silence."],
          },
        },
      ],
    },
    {
      id: "langa-u1-poetry-drama",
      title: "Poetry and drama conventions",
      skill: "Identify poetic forms and dramatic conventions and analyse how form contributes to meaning.",
      lesson: {
        sections: [
          {
            heading: "The poetic text",
            body: "Poetry is organised in **lines and stanzas** rather than paragraphs. **Form** includes line length, stanza shape, **rhyme scheme**, **meter** (the rhythm of stressed and unstressed syllables) and **sound devices** such as alliteration, assonance and onomatopoeia. A **sonnet** has fourteen lines in a fixed pattern; **free verse** deliberately abandons regular meter.",
          },
          {
            heading: "Dramatic text",
            body: "Drama is written to be performed. Its conventions include **dialogue**, **stage directions**, **soliloquies** and **asides**, and structural units such as **acts and scenes**. Tragedy, comedy and tragicomedy are genres with different audience expectations. Because drama is heard and seen, **tone of voice, pauses and movement** — signalled by stage directions — carry meaning that silent reading must reconstruct.",
          },
          {
            heading: "Form as meaning",
            body: "A poem's form is never neutral: a strict sonnet might express confinement; broken lines might enact fragmentation. In drama, a character's long soliloquy slows time and exposes interiority; rapid exchanges create tension. Ask: **why this form, for this content?**",
          },
        ],
        keyFormulas: [
          { name: "Poetic analysis checklist", statement: "Form (stanza, meter, rhyme) + sound (alliteration, assonance) + imagery + shift/turn" },
          { name: "Dramatic analysis checklist", statement: "Genre conventions + dialogue + stage directions + soliloquy/aside + structure" },
        ],
        workedExample: {
          problem: "A poem has short, jagged lines and irregular stanzas describing a city. What might the form suggest?",
          solution: "The irregular, fragmented lineation may mirror the chaos or sensory overload of the city; lack of regular rhyme could suggest disorder or modernity. Form enacts the subject rather than merely describing it.",
        },
      },
      questions: [
        {
          id: "langa-u1-pq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature is unique to drama as a text type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stanzas" },
              { id: "b", text: "First-person narration" },
              { id: "c", text: "Rhyme scheme" },
              { id: "d", text: "Stage directions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Drama conventions", statement: "Stage directions instruct performance and are unique to plays." },
            ],
            steps: [
              { reasoning: "Stage directions exist only in dramatic texts written for performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Stage directions",
            commonErrors: ["Stanzas and rhyme belong to poetry; narration to prose."],
          },
        },
        {
          id: "langa-u1-pq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways a poet's choice of form can create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Form and meaning", statement: "Lineation, stanza shape, meter and rhyme pattern are expressive choices, not decoration." },
            ],
            steps: [
              { reasoning: "Lineation: breaking a sentence across lines controls pace and emphasis, directing the reader's breath and attention.", marks: 1, markCode: "M" },
              { reasoning: "Stanza shape and rhyme scheme create patterns that can suggest order, constraint, intimacy or disruption.", marks: 1, markCode: "M" },
              { reasoning: "Meter: regular rhythm can evoke ritual or calm; irregular rhythm can enact anxiety or fragmentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form enacts content: line breaks control pace, patterns suggest order or disorder, meter carries emotional rhythm.",
            commonErrors: ["Identifying form features without linking them to effect."],
          },
        },
        {
          id: "langa-u1-pq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Soliloquy",
            author: "Written for Akademik Space",
            source: "Original dramatic extract",
            text: "(She stands alone. The candles gutter.)\n\nANNA: Is this what I wanted? A quiet room and a quiet conscience. They are not the same thing, whatever the books say. I had the power — that is what I keep telling myself — and I spent it like coin I never earned.\n\n(She blows out one candle, then stops.)\n\nANNA: No. Not yet. There is still time to be brave.",
          },
          stem: "Analyse how the conventions of drama convey Anna's state of mind in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic conventions", statement: "Soliloquy reveals interiority; stage directions supply visual and symbolic context." },
            ],
            steps: [
              { reasoning: "The soliloquy lets the audience hear Anna's private reasoning directly — her self-accusation is unfiltered.", marks: 1, markCode: "M" },
              { reasoning: "The stage direction 'the candles gutter' and her blowing out one candle create symbolic visual meaning: dwindling hope, a life being extinguished.", marks: 1, markCode: "M" },
              { reasoning: "The contradiction between 'quiet conscience' and her self-doubt, and 'the power' versus 'coin I never earned', reveals guilt and self-deception.", marks: 1, markCode: "R" },
              { reasoning: "The final line 'There is still time to be brave' shows hesitation giving way to resolve — the pause after blowing out the candle stages indecision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soliloquy exposes guilt; candle symbolism enacts dwindling resolve; the ending stages a turn from doubt to determination.",
            commonErrors: ["Ignoring stage directions and treating the extract as prose."],
          },
        },
        {
          id: "langa-u1-pq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse how poetic form contributes to meaning in the following poem.",
          extract: {
            title: "The Gate",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.\n\nAll day the hinges kept their tune —\na small, ungrateful music\nthat followed me from room\nto room, refusing to be still.",
          },
          parts: [
            { label: "a", prompt: "Identify two formal features of the poem.", marks: 2 },
            { label: "b", prompt: "Analyse how imagery in lines 1-3 creates meaning.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the irregular line lengths and stanza break.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Form and imagery", statement: "Imagery carries literal meaning; lineation and stanza structure shape pace and emphasis." },
            ],
            steps: [
              { part: "a", reasoning: "Free verse with irregular line lengths; two quatrain-like stanzas with an enjambed opening.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "End-stopped and enjambed lines mixed; no regular rhyme scheme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Iron gate' personifies morning as harsh and mechanical; 'let the light in like a debt' makes light an obligation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'A debt I never agreed to pay' casts the speaker as unwilling debtor — involuntary existence or imposed duty.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The extended metaphor links morning, light and debt, giving the poem a moral or existential pressure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Short lines ('from room / to room') compress space and mimic the restlessness described.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The stanza break after 'pay' isolates the debt image, giving it weight before the hinge motif continues.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Irregularity prevents a settled rhythm — form enacts the 'refusing to be still' it describes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Free verse, irregular lineation, mixed end-stopping. (b) Personified morning and debt imagery create involuntary obligation. (c) Form enacts restlessness; stanza break isolates the central image.",
            commonErrors: ["Paraphrasing the poem without analysing formal choices."],
          },
        },
        {
          id: "langa-u1-pq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sonnet is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "any poem of fourteen lines" },
              { id: "b", text: "a poem of fourteen lines in a fixed rhyme and meter pattern" },
              { id: "c", text: "a dramatic monologue in verse" },
              { id: "d", text: "a poem that always contains a volta" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sonnet", statement: "A sonnet has fourteen lines with a fixed rhyme scheme and, traditionally, regular meter." },
            ],
            steps: [
              { reasoning: "Fourteen lines is necessary but not sufficient — the fixed rhyme and meter pattern define the form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A poem of fourteen lines in a fixed rhyme and meter pattern",
            commonErrors: ["Thinking any fourteen-line poem is a sonnet — the form requires fixed pattern."],
          },
        },
        {
          id: "langa-u1-pq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Free verse is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the deliberate abandonment of regular meter and rhyme" },
              { id: "b", text: "a fixed rhyme scheme" },
              { id: "c", text: "strict iambic pentameter" },
              { id: "d", text: "identical-length stanzas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Free verse", statement: "Free verse rejects regular meter and rhyme while retaining lineation as a meaningful unit." },
            ],
            steps: [
              { reasoning: "'Free' refers specifically to freedom from regular metrical and rhyme patterns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Deliberate abandonment of regular meter and rhyme",
            commonErrors: ["Assuming free verse is 'unstructured' — lineation and rhythm remain meaningful."],
          },
        },
        {
          id: "langa-u1-pq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The 'volta' (turn) in a sonnet is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the first line's refrain" },
              { id: "b", text: "a shift in tone or argument, often at the ninth line or in the final couplet" },
              { id: "c", text: "the poet's signature" },
              { id: "d", text: "the title of the poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volta", statement: "The volta is the sonnet's turn — a pivot where the poem's argument or mood reverses." },
            ],
            steps: [
              { reasoning: "The volta marks a structural and emotional pivot, typically before the final couplet.", marks: 1, markCode: "M" },
              { reasoning: "It is what separates the sonnet's 'problem' from its 'resolution'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A shift in tone or argument, often at line nine or the final couplet",
            commonErrors: ["Confusing the volta with a refrain — a refrain repeats; a volta turns."],
          },
        },
        {
          id: "langa-u1-pq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A soliloquy differs from an aside in that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a soliloquy is addressed to the audience while an aside is spoken alone" },
              { id: "b", text: "an aside reveals inner thoughts while a soliloquy addresses other characters" },
              { id: "c", text: "a soliloquy is a longer speech in which a character, alone on stage, reveals inner thoughts unaware of being overheard" },
              { id: "d", text: "they are identical conventions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Soliloquy vs aside", statement: "Soliloquy: alone, unaware, interior. Aside: to the audience, while others on stage remain unaware." },
            ],
            steps: [
              { reasoning: "In a soliloquy the character is alone and speaks their private thoughts; in an aside they address the audience while pretending to converse.", marks: 1, markCode: "M" },
              { reasoning: "Length also distinguishes them: soliloquies are extended, asides brief.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A soliloquy is a longer, alone-on-stage speech revealing inner thoughts",
            commonErrors: ["Reversing the two conventions — the aside is the audience-directed one."],
          },
        },
        {
          id: "langa-u1-pq9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Dramatic irony occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the narrator comments on the action" },
              { id: "b", text: "the audience knows something the characters do not" },
              { id: "c", text: "stage directions contradict the dialogue" },
              { id: "d", text: "a character lies to another character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dramatic irony", statement: "Dramatic irony depends on the audience's superior knowledge of the situation." },
            ],
            steps: [
              { reasoning: "The defining feature is informational asymmetry: the audience understands what characters miss.", marks: 1, markCode: "M" },
              { reasoning: "This produces tension, comedy or pathos depending on what is at stake.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The audience knows something the characters do not",
            commonErrors: ["Confusing dramatic irony with ordinary lying — the key is the audience's knowledge, not deception."],
          },
        },
        {
          id: "langa-u1-pq10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Daybreak",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  The kettle screamed\n2  a thin, bright note\n3  and the whole kitchen\n4  tipped sideways\n5  into morning.",
          },
          stem: "Which analysis of sound and lineation is most accurate for this extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The end-stopped lines slow the poem into elegiac stillness." },
              { id: "b", text: "Heavy consonance of 'k', 't' and 'd' produces a muffled, sleepy sound." },
              { id: "c", text: "The repeated 'ee' vowel sounds and the verb 'screamed' create an onomatopoeic shrillness that makes the kitchen's transition into morning feel violent." },
              { id: "d", text: "Regular iambic pentameter gives the poem a ceremonial calm." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and lineation", statement: "Assonance and onomatopoeia make sound audible; enjambment controls the pace of revelation." },
            ],
            steps: [
              { reasoning: "'Screamed', 'kettle', 'thin', 'bright', 'kitchen', 'sideways' repeat the 'ee'/'i' vowel — a shrill assonance.", marks: 1, markCode: "M" },
              { reasoning: "The enjambed lines 3-5 spill into 'morning', so the kitchen's 'tipping' is enacted by the running syntax.", marks: 1, markCode: "M" },
              { reasoning: "The sound is harsh and bright — matching a startle, not a calm ceremony or muffled sleep.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Shrill assonance and onomatopoeia make the transition into morning feel violent",
            commonErrors: ["Naming a device without matching the described sound to the actual vowels in the lines."],
          },
        },
        {
          id: "langa-u1-pq11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways dialogue in drama can reveal power relationships between characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue and power", statement: "Who speaks, who is interrupted, who commands and who evades are all dramatised through talk." },
            ],
            steps: [
              { reasoning: "Turn-taking and interruption: the character who talks over others, or refuses to yield the floor, holds power.", marks: 1, markCode: "M" },
              { reasoning: "Question and answer dynamics: one character asks, the other must justify — the questioner controls the terms.", marks: 1, markCode: "M" },
              { reasoning: "Evasion versus directness: a character who answers questions plainly occupies a position of confidence or authority.", marks: 1, markCode: "M" },
              { reasoning: "Register and address: titles, commands and insults encode hierarchy directly in the words chosen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dialogue dramatises power through turn-taking, questioning, evasion and forms of address.",
            commonErrors: ["Quoting dialogue without analysing who controls the exchange."],
          },
        },
        {
          id: "langa-u1-pq12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Harbour",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The boats came home\nlike arguments ending —\ntheir ropes still taut,\ntheir crews too tired to untie the day.\n\nOn the pier, someone counted gulls\nas if they were coins\nthat might, any moment,\nbe spent on a better morning.",
          },
          stem: "Analyse how figurative language and form work together in this poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language and form", statement: "Simile, metaphor and lineation jointly create the poem's exhausted, tentative mood." },
            ],
            steps: [
              { reasoning: "'Like arguments ending' — simile casting homecoming as truce, not triumph; the day's labour was conflict.", marks: 1, markCode: "M" },
              { reasoning: "'Too tired to untie the day' — metaphor: the day is a knot the crews cannot undo; exhaustion is rendered as failed action.", marks: 1, markCode: "M" },
              { reasoning: "'Gulls as coins... spent on a better morning' — extended metaphor of hope as currency, fragile and hypothetical ('might').", marks: 1, markCode: "M" },
              { reasoning: "The short, irregular lines and the final isolated 'be spent on a better morning' slow the poem to a hesitant close.", marks: 1, markCode: "M" },
              { reasoning: "Form enacts content: the poem's weariness is in its broken rhythm, its hope only a possibility held in suspension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Similes of truce and debt give the harbour an exhausted mood; broken lineation performs the same tiredness the images describe.",
            commonErrors: ["Listing images without connecting them to the poem's rhythm."],
          },
        },
        {
          id: "langa-u1-pq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Waiting Room",
            author: "Written for Akademik Space",
            source: "Original dramatic extract",
            text: "(Two BENCHES. A CLOCK ticks. MARCUS sits, hands folded. The DOCTOR enters, sees him, and sits on the other bench.)\n\nMARCO: You were late.\nDOCTOR: Everyone is late to something.\nMARCO: Even the dead?\nDOCTOR: (Long pause.) Especially the living.\n(Silence. The clock ticks. MARCO stands, but does not leave.)",
          },
          stem: "Analyse how dialogue and stage directions convey the relationship between Marcus and the Doctor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dramatic dialogue", statement: "In drama, power, intimacy and avoidance are enacted through speech, silence and stage business." },
            ],
            steps: [
              { reasoning: "Marcus's opening accusation ('You were late') is delivered to a man who was not expected — the 'lateness' is emotional, not temporal.", marks: 1, markCode: "M" },
              { reasoning: "The Doctor's deflection ('Everyone is late to something') universalises the charge, refusing to engage personally.", marks: 1, markCode: "M" },
              { reasoning: "'Even the dead?' / 'Especially the living' — the exchange moves from accusation to existential dread; the Doctor's aphorism displays control of the conversation.", marks: 1, markCode: "M" },
              { reasoning: "The stage direction 'Long pause' before the answer stages the Doctor's calculation — he chooses his words.", marks: 1, markCode: "M" },
              { reasoning: "Marcus standing but not leaving externalises the bind: he cannot leave and cannot confront — the stage picture is the relationship.", marks: 1, markCode: "M" },
              { reasoning: "The ticking clock supplies the only forward motion; together the directions show two men held in suspended, unequal intimacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dialogue shows Marcus accusing and the Doctor deflecting with control; stage directions (pause, standing without leaving, ticking clock) stage a relationship suspended between confrontation and endurance.",
            commonErrors: ["Quoting lines without using the stage directions to explain the power balance."],
          },
        },
        {
          id: "langa-u1-pq14",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Instructions for a Hard Day",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "When it rains, count the windows\nthat face your street and pretend\nthey are not yours. When the letter comes,\ndo not open it at the kitchen table —\nopen it where the light is honest.\n\nWhen you cannot answer, answer anyway,\nbut answer to the wall,\nnot to their faces.\n\nWhen night comes, do not lock the door.\nLeave it open a little,\nso the day can leave too.",
          },
          stem: "Analyse how the poem's imperative voice and extended imagery serve its purpose.",
          parts: [
            { label: "a", prompt: "Identify the poem's dominant voice and explain its effect.", marks: 2 },
            { label: "b", prompt: "Analyse the extended imagery of light, windows and doors.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of the final instruction, 'so the day can leave too'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imperative voice and extended metaphor", statement: "Commands create a counsellor's intimacy; sustained spatial imagery gives coping strategies a physical form." },
            ],
            steps: [
              { part: "a", reasoning: "The poem is built of imperatives ('count', 'pretend', 'do not open') — a voice advising a 'you' through a bad day.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The effect is intimate and pragmatic: the poem behaves like instructions for survival, not lyric self-expression.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Windows 'pretend they are not yours' — the poem teaches emotional distance through architecture.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Where the light is honest' personifies light as truth-teller; reading bad news in honesty rather than comfort.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Doors recur: answering 'to the wall, not to their faces' and leaving the door open extend the boundary imagery — protection without isolation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'So the day can leave too' reverses the logic: the open door is not for intruders but for departure — letting go, not guarding.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The line break isolates the phrase, giving the poem's bleakest kindness its final, quiet emphasis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Imperatives create a counsellor's voice. (b) Windows, light and doors become tools for emotional boundaries. (c) The open door finally means release — grief advised to depart.",
            commonErrors: ["Listing the commands without analysing how the spatial imagery unifies them."],
          },
        },
        {
          id: "langa-u1-pq15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Verdict",
            author: "Written for Akademik Space",
            source: "Original dramatic extract",
            text: "(A bare stage. A JUDGE sits at a table. A MAN stands before her.)\n\nJUDGE: State your name.\nMAN: (After a long pause.) I don't remember.\nJUDGE: That is not an answer.\nMAN: It is the only true one.\n(JUDGE looks at her papers. She does not write.)\nJUDGE: Then we will wait until you remember, or until the law forgets you.",
          },
          stem: "Analyse how this extract uses dramatic conventions to explore identity and authority.",
          parts: [
            { label: "a", prompt: "Identify the dramatic genre and two conventions the extract employs.", marks: 2 },
            { label: "b", prompt: "Analyse how dialogue and stage directions establish power between the Judge and the Man.", marks: 3 },
            { label: "c", prompt: "Evaluate the ambiguity of the final line for the play's treatment of justice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Trial drama", statement: "Courtroom drama stages the collision of institutional authority and individual truth." },
            ],
            steps: [
              { part: "a", reasoning: "The extract belongs to trial/courtroom drama — a ritualised confrontation between institution and individual.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conventions used: formal address ('State your name'), procedural dialogue, and stage business (papers, not writing).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Judge commands with procedural questions; the Man counters with an answer that is formally invalid but existentially true.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'She does not write' — the stage direction shows the institution literally unable to record his truth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Man's stillness versus the Judge's seated authority visualises power: he stands because the system requires it, not because he is free.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'Until the law forgets you' makes waiting itself the sentence — time becomes punishment for an identity the court cannot process.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The alternatives offered ('remember' or 'be forgotten') are equally bleak — the play suggests justice has no category for him.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The bare stage reinforces this: there is nowhere for identity to hide, only the table and the waiting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Trial drama using procedural dialogue and stage business. (b) Power is procedural: the Judge's questions versus the Man's unrecordable truth. (c) The ending equates justice with waiting or erasure — identity has no legal form.",
            commonErrors: ["Treating the extract as a realistic court scene without analysing what the bare stage and silence contribute."],
          },
        },
        {
          id: "langa-u1-pq16",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Accounts",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The sea keeps its accounts\nin foam and gull-cries,\nand every wave that breaks\nis a small unpaid debt returned.",
          },
          stem: "Analyse how the poem's imagery and tone work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor and tone", statement: "The sea-as-accountant metaphor sustains an ironic, almost mocking tone toward nature." },
            ],
            steps: [
              { reasoning: "'Keeps its accounts' personifies the sea as a bookkeeper — nature figured as bureaucracy.", marks: 1, markCode: "M" },
              { reasoning: "'Foam and gull-cries' become ledger entries — sound converted into record.", marks: 1, markCode: "M" },
              { reasoning: "'A small unpaid debt returned' is oxymoronic — a debt cannot be both unpaid and returned; the paradox gives the poem its ironic edge.", marks: 1, markCode: "M" },
              { reasoning: "The tone is quietly mocking: the vast sea reduced to petty accounting suggests human systems projected onto nature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The bookkeeping metaphor and its oxymoronic 'unpaid debt returned' create a quietly ironic tone — nature imagined as a petty accountant.",
            commonErrors: ["Describing the metaphor without noticing the oxymoron that gives it its irony."],
          },
        },
      ],
    },
  ],
};
