import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mll5-u1-lesson-1-1",
  code: "1-1",
  title: "Narrative Perspective and Voice",
  goal: "I CAN analyse narrative perspective — first person, third person, omniscient — and explain how voice shapes meaning and reader response.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Narrative perspective", definition: "The vantage point from which a story is told — who is 'I' or 'they'?" },
    { term: "First person", definition: "Narrator is a character in the story — 'I', 'me', 'my'." },
    { term: "Third person", definition: "Narrator is outside the story — 'he', 'she', 'they'." },
    { term: "Omniscient", definition: "Narrator knows everything — all characters' thoughts and all events." },
    { term: "Unreliable narrator", definition: "A narrator whose account can't be fully trusted." },
    { term: "Free indirect discourse", definition: "Third-person narration that adopts a character's thoughts and voice." },
  ],
  concepts: [
    {
      id: "mll5-u1-narrative-perspective",
      title: "How perspective shapes meaning",
      skill: "Identify narrative perspective and analyse its effect on meaning and reader response.",
      lesson: {
        sections: [
          {
            heading: "Types of perspective",
            body: "**First person** ('I'): intimate, subjective, limited to one character's knowledge. **Third person limited**: outside narrator focused on one character. **Third person omniscient**: god-like, knows all thoughts/events. **Free indirect**: third person adopting character's voice ('She would never forgive him. How dare he?').",
          },
          {
            heading: "What perspective reveals",
            body: "Perspective determines **what we know** and **how we feel**. First person creates intimacy but limits information — we only know what 'I' knows. Omniscient gives breadth but distance. The narrator's **bias** shapes interpretation — we see through their eyes.",
          },
          {
            heading: "Unreliable narration",
            body: "Some narrators can't be trusted: they may be **biased**, **mistaken**, or **deceiving**. 'I never lie' — from an unreliable narrator, this signals doubt. Ask: does the narrator's account match the evidence? Perspective + reliability = interpretive challenge.",
          },
        ],
        keyFormulas: [
          { name: "Perspective effects", statement: "First = intimate/limited; Third omniscient = broad/distant; Unreliable = questioning." },
        ],
        workedExample: {
          problem: "'I never liked her. She always made me feel small.' — What perspective and what does it reveal?",
          solution: "First person, unreliable — 'never liked' is absolute, suggesting bias; we question whether the narrator's judgment is fair.",
        },
      },
      questions: [
        {
          id: "mll5-u1-narrative-perspective-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is free indirect discourse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A stage direction" },
              { id: "b", text: "First-person narration" },
              { id: "c", text: "A direct quote" },
              { id: "d", text: "Third-person narration adopting a character's voice and thoughts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Free indirect discourse", statement: "Third-person narration adopting character's voice/thoughts." }],
            steps: [{ reasoning: "Criterion A (Analysing): free indirect = third person + character voice — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Third-person narration adopting a character's voice and thoughts",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Opening A (first person): 'I knew immediately she was lying. Her eyes wouldn't meet mine.'\n\nOpening B (omniscient): 'She lied. He knew it. Neither spoke. The silence stretched between them like a wire.'",
          },
          stem: "Compare these two perspectives — what does each reveal and what does each limit?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective analysis", statement: "First person = subjective certainty; omniscient = objective distance." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is first person — 'I knew', subjective certainty, limited to narrator's view; B is omniscient — 'He knew it' gives both perspectives.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A creates intimacy but bias ('I knew she was lying'); B creates dramatic irony — reader sees both sides, more objective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = intimate but biased (one view); B = omniscient, shows both sides — different truth claims.",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Narrator",
            author: "Written for Akademik Space",
            text: "'I didn't steal the money. I wouldn't do such a thing. But everyone knows I needed it — I was desperate. Desperate people do desperate things, don't they?'",
          },
          stem: "Is this narrator reliable? Analyse the language that suggests unreliability.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Unreliable narrator", statement: "Absolute claims, self-justification, rhetorical questions suggest bias." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I wouldn't do such a thing' — absolute denial suggests protesting too much; 'everyone knows I needed it' shifts blame.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Desperate people do desperate things, don't they?' — rhetorical question invites reader to excuse the narrator.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): self-serving justifications ('I was desperate') suggest the narrator is rationalizing — unreliable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unreliable — absolute denials, blame-shifting, rhetorical self-justification suggest bias.",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the narrative perspective in: 'She wondered if he would ever forgive her. The thought made her chest ache.'", marks: 1 },
            { label: "b", prompt: "Explain what this perspective allows the reader to know.", marks: 2 },
            { label: "c", prompt: "What would change if this were first person instead?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective transformation", statement: "Third limited → first person changes intimacy and knowledge." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): third person limited — 'she wondered' focuses on one character's thoughts.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): reader knows her thoughts/feelings but not his — limited perspective creates suspense.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'chest ache' gives physical/emotional interiority — intimate but not first-person direct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): first person would be more intimate ('I wondered') but more subjective — 'I' replaces 'she', direct thoughts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): changes distance — first person feels more confessional; third limited feels observed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Third limited. (b) Her thoughts known, his not — suspense. (c) First person = more intimate but more subjective.",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story opens: 'I ran to the door. I didn't know who was waiting.' What perspective is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free indirect discourse" },
              { id: "b", text: "First person — the narrator is a character using 'I'" },
              { id: "c", text: "Second person" },
              { id: "d", text: "Third person omniscient" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "First person", statement: "Narrator is a character — 'I', 'me', 'my'." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'I ran', 'I didn't know' — narrator is inside the story — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** First person — the narrator is a character using 'I'",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many distinct narrative perspectives are used in this extract?",
          extract: {
            title: "Three Openings",
            author: "Written for Akademik Space",
            text: "Opening A (first person): 'I knew she was hiding something.'\n\nOpening B (third limited): 'He watched her face for signs of guilt.'\n\nOpening C (omniscient): 'She lied. He believed her. Both were wrong.'",
          },
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying perspective", statement: "Pronouns and knowledge scope reveal the vantage point." }],
            steps: [{ reasoning: "Criterion A (Analysing): A = first person ('I'), B = third limited ('he watched her'), C = omniscient (knows both are wrong) — three perspectives.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might an author choose first person instead of omniscient narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the story objective and impartial" },
              { id: "b", text: "To avoid describing any emotions" },
              { id: "c", text: "To give the reader access to every character's thoughts" },
              { id: "d", text: "To create intimacy and subjectivity, limited to one character's knowledge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective effects", statement: "First person = intimate, subjective, limited knowledge." }],
            steps: [{ reasoning: "Criterion A (Analysing): first person gives intimacy but limits knowledge to 'I' — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** To create intimacy and subjectivity, limited to one character's knowledge",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'I wrote the letter years ago and I've regretted it ever since. She never wrote back. I tell myself she didn't deserve an answer — but I check the post every day anyway.'",
          },
          stem: "What limitation does this first-person perspective create for the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reader cannot know what other characters are thinking" },
              { id: "b", text: "The narrator can describe events they never witnessed" },
              { id: "c", text: "The narrator becomes an unreliable third-person voice" },
              { id: "d", text: "The reader learns everyone's private thoughts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Limited perspective", statement: "First person limits knowledge to the narrator's experience and bias." }],
            steps: [{ reasoning: "Criterion A (Analysing): first person — we only know what 'I' knows; 'she didn't deserve an answer' is the narrator's self-justification — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** The reader cannot know what other characters are thinking",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A first-person narrator says: 'Everyone agreed I was right.' What should a critical reader question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The narrator's spelling" },
              { id: "b", text: "The narrator's reliability — 'everyone agreed' is an unverifiable, self-serving claim" },
              { id: "c", text: "Whether the story has a happy ending" },
              { id: "d", text: "Whether the grammar is correct" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Unreliable narration", statement: "Absolute, unverifiable claims can signal narrator bias." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'everyone agreed' is unverifiable and self-serving — question reliability — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The narrator's reliability — 'everyone agreed' is an unverifiable, self-serving claim",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Scene",
            author: "Written for Akademik Space",
            text: "'I told him the truth. She laughed. They both left.'",
          },
          stem: "How many different pronoun-based perspective markers ('I', 'she', 'they') appear in this sentence?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective markers", statement: "Pronouns signal whose vantage point is used." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'I' (first), 'she' (third singular), 'they' (third plural) — 3 markers.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Confession",
            author: "Written for Akademik Space",
            text: "'I never meant for anyone to get hurt. Ask anyone — I was the kindest boy on the street. The others were the ones who started it. I only did what I had to do.'",
          },
          stem: "Analyse this narrator's reliability — what language suggests they may not be telling the whole truth?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Unreliable narrator", statement: "Denial, blame-shifting and self-praise signal bias." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I never meant' and 'I was the kindest' — absolute self-praise suggests protesting too much.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'The others were the ones who started it' — blame-shifting away from the narrator.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'I only did what I had to do' — self-justification frames violence as necessity, typical of unreliable narration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unreliable — absolute self-praise, blame-shifting and justification suggest the narrator is hiding their role.",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an omniscient narrator know?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only their own thoughts" },
              { id: "b", text: "Only what they can see" },
              { id: "c", text: "Nothing at all" },
              { id: "d", text: "Everything — all characters' thoughts and all events, past and future" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Omniscient", statement: "God-like narrator who knows all thoughts and events." }],
            steps: [{ reasoning: "Criterion A (Analysing): omniscient = knows everything — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Everything — all characters' thoughts and all events, past and future",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the perspective in: 'You walk into the room and everyone stares.'", marks: 1 },
            { label: "b", prompt: "Explain one effect of addressing the reader as 'you'.", marks: 2 },
            { label: "c", prompt: "Rewrite the opening in third person limited, keeping the same scene.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Second person and perspective shift", statement: "'You' narration immerses the reader; third limited observes one character." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): second person — 'you' addresses the reader directly as protagonist.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'you' creates immediacy and immersion — reader becomes the character; also can feel intrusive or unnatural.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): blurs reader/character boundary — reader experiences events directly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. 'She walked into the room and everyone stared.' — third limited observes her.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): consistent third-person pronouns, observed rather than experienced viewpoint.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Second person. (b) Immersion — reader becomes character. (c) e.g. 'She walked into the room and everyone stared.'",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Counting Voices",
            author: "Written for Akademik Space",
            text: "'I never trusted him.\n\nHe never trusted me either.\n\nThe letter lay unopened between them.'",
          },
          stem: "How many perspective shifts occur between the three lines?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Perspective shifts", statement: "Each change of vantage point is a shift." }],
            steps: [{ reasoning: "Criterion A (Analysing): line 1 first person ('I'), line 2 switches to 'he' (her view), line 3 omniscient-neutral — 2 shifts.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Observation",
            author: "Written for Akademik Space",
            text: "'She wouldn't admit it, but everyone could see it in her eyes. He had no idea what was coming.'",
          },
          stem: "Which narrative technique is used here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First-person narration" },
              { id: "b", text: "A stage direction" },
              { id: "c", text: "Direct speech" },
              { id: "d", text: "Free indirect discourse — third person adopting a character's unspoken thoughts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Free indirect discourse", statement: "Third-person narration coloured by a character's thoughts and voice." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'she wouldn't admit it' reads like her private thought in third person — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Free indirect discourse — third person adopting a character's unspoken thoughts",
          },
        },
        {
          id: "mll5-u1-narrative-perspective-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the perspective in: 'We were the lucky ones, my sister and I. We ran before the sirens.'", marks: 1 },
            { label: "b", prompt: "Explain how this perspective creates solidarity or distance for the reader.", marks: 2 },
            { label: "c", prompt: "What information would an omniscient version add that this cannot?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Collective first person", statement: "'We' narration creates shared experience and group identity." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): first person plural — 'we' — narrator speaks for a group.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'we' creates solidarity — reader joins the group experience; also can create distance if reader is not part of 'we'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'my sister and I' shows the 'we' is specific — intimacy plus group belonging.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): omniscient could show other characters' reactions, the cause of the sirens, events beyond the group's view.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): breadth vs intimacy trade-off — 'we' limits knowledge to the group but deepens shared experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) First person plural. (b) Solidarity through shared 'we'. (c) Omniscient adds other viewpoints and wider context.",
          },
        },
      ],
    },
    {
      id: "mll5-u1-voice-style",
      title: "Voice, tone and style",
      skill: "Analyse how an author's voice — diction, syntax, tone — creates distinctive style and meaning.",
      lesson: {
        sections: [
          {
            heading: "What is voice?",
            body: "**Voice** = the author's distinctive way of expressing themselves — word choice, sentence patterns, attitude. It's like recognizing a friend by their speech. Voice is created through **diction** (word choice), **syntax** (sentence structure), **tone** (attitude toward subject).",
          },
          {
            heading: "Diction and register",
            body: "**Diction** = word choice. Formal diction ('utilize', 'commence') vs informal ('use', 'start'). **Connotation** = emotional associations ('slim' vs 'skinny'). **Denotation** = literal meaning. Skilled writers choose words for both meaning and effect.",
          },
          {
            heading: "Tone and syntax",
            body: "**Tone** = the writer's attitude — ironic, sincere, bitter, playful. **Syntax** = sentence structure — short sentences for urgency, long for flow, fragments for drama. Voice emerges from all these choices working together.",
          },
        ],
        keyFormulas: [
          { name: "Voice components", statement: "Voice = Diction + Syntax + Tone + Attitude." },
        ],
        workedExample: {
          problem: "'The corpse lay there, stiff and gray. Life, that brief spark, had guttered out.' vs 'Grandpa died yesterday.' — Compare voices.",
          solution: "First = literary, metaphorical ('spark', 'guttered out'), formal; second = plain, direct, colloquial — very different voices for different purposes.",
        },
      },
      questions: [
        {
          id: "mll5-u1-voice-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What creates an author's distinctive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their publisher" },
              { id: "b", text: "Word choice, sentence structure and attitude" },
              { id: "c", text: "The length of their books" },
              { id: "d", text: "Only their name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Voice", statement: "Voice = diction + syntax + tone + attitude." }],
            steps: [{ reasoning: "Criterion A (Analysing): voice from word choice/structure/attitude — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Word choice, sentence structure and attitude",
          },
        },
        {
          id: "mll5-u1-voice-style-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'The old man shuffled down the street, his rheumy eyes scanning the crowd for familiar faces.'\n\nVersion B: 'An old guy shuffled down the street, squinting around for people he knew.'",
          },
          stem: "Compare the diction — how does word choice create different voices?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Diction and voice", statement: "Formal/literary diction vs colloquial creates different voices." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses formal/literary diction — 'rheumy', 'scanning', 'familiar faces' — elevated, descriptive.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): B uses colloquial — 'old guy', 'squinting', 'people he knew' — casual, accessible; different voice, same content.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A = literary diction ('rheumy', 'scanning'); B = colloquial ('guy', 'squinting') — different voices, same scene.",
          },
        },
        {
          id: "mll5-u1-voice-style-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'Oh, splendid. Another Monday. Another week of this dreary existence. How thrilling.'",
          },
          stem: "Analyse the tone — what attitude does the writer convey and how?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone analysis", statement: "Tone = attitude conveyed through word choice and structure." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Oh, splendid', 'How thrilling' — positive words used ironically to express negativity.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'dreary existence' reveals true attitude — bored, cynical.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): contrast between surface praise and underlying complaint creates irony — tone is sarcastic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sarcastic/cynical tone — positive words ('splendid', 'thrilling') used ironically to express boredom.",
          },
        },
        {
          id: "mll5-u1-voice-style-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the tone in: 'What a lovely day. The rain hasn't stopped for three days.'", marks: 1 },
            { label: "b", prompt: "Explain the technique used to create this tone.", marks: 2 },
            { label: "c", prompt: "Rewrite it to convey genuine happiness instead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone through irony", statement: "Positive words + negative content = ironic tone." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): ironic/sarcastic tone — 'lovely day' contradicted by rain complaint.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): irony — positive statement ('lovely') clashes with negative reality (rain) — creates sarcasm.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): reader recognizes the contradiction — tone emerges from the gap between words and meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): genuine version — e.g. 'What a lovely day — I love the rain!' or 'It's pouring, but I don't mind.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes irony, uses consistent positive language.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Ironic/sarcastic. (b) Positive words clash with negative content. (c) e.g. 'What a lovely day — I love the rain!'",
          },
        },
        {
          id: "mll5-u1-voice-style-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'diction'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Word choice" },
              { id: "b", text: "Punctuation" },
              { id: "c", text: "Paragraph length" },
              { id: "d", text: "Sentence structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Diction", statement: "Diction = word choice." }],
            steps: [{ reasoning: "Criterion D (Using language): diction = word choice — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** Word choice",
          },
        },
        {
          id: "mll5-u1-voice-style-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Complaint",
            author: "Written for Akademik Space",
            text: "'What a day. Who could have predicted this? Why did it have to rain?'",
          },
          stem: "How many rhetorical questions appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical questions", statement: "Questions without expected answers create effect." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'Who could have predicted this?' and 'Why did it have to rain?' — 2 questions; 'What a day' is exclamatory, not a question.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-voice-style-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'She is slim' and 'She is skinny' have the same denotation. What differs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The spelling" },
              { id: "b", text: "The connotation — 'slim' is positive, 'skinny' is negative" },
              { id: "c", text: "The literal dictionary meaning" },
              { id: "d", text: "The grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Emotional associations attached to a word beyond its literal meaning." }],
            steps: [{ reasoning: "Criterion D (Using language): same denotation, different connotation — 'slim' positive, 'skinny' negative — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** The connotation — 'slim' is positive, 'skinny' is negative",
          },
        },
        {
          id: "mll5-u1-voice-style-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Announcement",
            author: "Written for Akademik Space",
            text: "'Due to unforeseen circumstances, the event has been postponed. We apologize for any inconvenience this may cause.'",
          },
          stem: "What tone does this announcement convey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angry and blaming" },
              { id: "b", text: "Formal, impersonal and bureaucratic" },
              { id: "c", text: "Playful and joking" },
              { id: "d", text: "Warm and personal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Tone = writer's attitude, conveyed through word choice and phrasing." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'unforeseen circumstances', 'postponed', 'inconvenience' — formal, impersonal — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Formal, impersonal and bureaucratic",
          },
        },
        {
          id: "mll5-u1-voice-style-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'The commotion was quite extraordinary.'\n\nVersion B: 'What a mad scene that was!'",
          },
          stem: "Which version uses more informal diction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are equally formal" },
              { id: "b", text: "Version A — 'commotion' and 'extraordinary' are formal" },
              { id: "c", text: "Neither is informal" },
              { id: "d", text: "Version B — 'mad scene', 'what a' are colloquial" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and diction", statement: "Formal vs colloquial diction creates different voices." }],
            steps: [{ reasoning: "Criterion D (Using language): B uses colloquial 'mad scene' — informal voice — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(d)** Version B — 'mad scene', 'what a' are colloquial",
          },
        },
        {
          id: "mll5-u1-voice-style-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Job Advert",
            author: "Written for Akademik Space",
            text: "Version A: 'Candidates will commence duties on the appointed date.'\n\nVersion B: 'You'll start work on your first day.'",
          },
          stem: "Compare the voice of these two versions — what does each signal about the employer?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Voice and register", statement: "Formal vs direct language constructs different institutional voices." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses formal, impersonal diction — 'candidates', 'commence', 'appointed' — bureaucratic, distant voice.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): B uses direct second person — 'You'll start' — friendlier, more personal voice.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A = formal/bureaucratic voice; B = direct/personal voice — different employer identities.",
          },
        },
        {
          id: "mll5-u1-voice-style-q11",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'A triumph. A towering achievement. Cinema has never been the same.'",
          },
          stem: "How many superlative/absolute praise words appear in this review?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Hyperbole and tone", statement: "Excessive praise can signal irony rather than sincerity." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'triumph', 'towering', 'never been the same' — 3 absolute praise words; their excess suggests sarcasm.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-voice-style-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I am going to purchase a meal.'" },
              { id: "b", text: "'Gonna grab some food.'" },
              { id: "c", text: "'Let's grub.'" },
              { id: "d", text: "'Wanna eat?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Formal register", statement: "Formal language is precise, impersonal and follows conventions." }],
            steps: [{ reasoning: "Criterion D (Using language): 'I am going to purchase' — formal verbs, no contractions — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** 'I am going to purchase a meal.'",
          },
        },
        {
          id: "mll5-u1-voice-style-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the tone in: 'Well, that went exactly as planned.' (said after a disaster)", marks: 1 },
            { label: "b", prompt: "Name the technique creating this tone.", marks: 2 },
            { label: "c", prompt: "Rewrite the line to convey the same situation sincerely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verbal irony", statement: "Positive words used to mean the opposite create ironic tone." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): ironic — 'exactly as planned' contradicts the disaster.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): verbal irony — saying the opposite of what is meant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): understatement amplifies the irony — 'exactly as planned' is mild praise for failure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): sincere version — e.g. 'That went terribly — nothing went as planned.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes irony, uses direct negative language matching the situation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Ironic. (b) Verbal irony/understatement. (c) e.g. 'That went terribly — nothing went as planned.'",
          },
        },
        {
          id: "mll5-u1-voice-style-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "'Run. Now. Don't look back.'",
          },
          stem: "How many imperative sentences does this extract contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Imperatives and pace", statement: "Commands create urgency and drive pace." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Run.', 'Now.', 'Don't look back.' — 3 imperatives; short syntax creates urgency.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-voice-style-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'Dear Sir, I write to express my utter disappointment with your service.'",
          },
          stem: "What is the dominant tone of this letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ironic and joking" },
              { id: "b", text: "Neutral and factual" },
              { id: "c", text: "Formal but angry — 'utter disappointment' is a strong negative judgement" },
              { id: "d", text: "Casual and friendly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone analysis", statement: "Formal register can still carry strong emotion." }],
            steps: [{ reasoning: "Criterion A (Analysing): formal structure ('Dear Sir') + 'utter disappointment' = formal but angry — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Formal but angry — 'utter disappointment' is a strong negative judgement",
          },
        },
        {
          id: "mll5-u1-voice-style-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify two diction choices in: 'The professor pontificated for an hour.'", marks: 1 },
            { label: "b", prompt: "What connotation does 'pontificated' carry?", marks: 2 },
            { label: "c", prompt: "Rewrite the sentence neutrally and explain what changes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loaded diction", statement: "Word choice carries attitude through connotation." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'pontificated' — unusual, elevated verb; 'for an hour' — implies excessive length.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'pontificated' connotes self-important, pompous speech — suggests the professor is tedious or arrogant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): choosing this word over 'spoke' or 'lectured' reveals the writer's critical attitude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): neutral rewrite — e.g. 'The professor spoke for an hour.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): neutral version removes judgement — reader no longer guided to see the speech negatively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Pontificated', 'for an hour'. (b) Connotes pompous, tedious speech. (c) e.g. 'The professor spoke for an hour' — removes judgement.",
          },
        },
      ],
    },
  ],
};
