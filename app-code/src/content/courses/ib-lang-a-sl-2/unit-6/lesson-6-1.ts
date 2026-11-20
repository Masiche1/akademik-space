import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "langa-u6-lesson-6-1",
  code: "6-1",
  title: "Oral Presentation Skills",
  goal: "I CAN deliver a clear, structured oral presentation on a literary topic.",
  standards: ["Oral", "Presentation", "Communication"],
  vocabulary: [
    { term: "Oral presentation", definition: "A structured spoken delivery to an audience — analysis, argument or reflection." },
    { term: "Delivery", definition: "How the presentation is spoken: pace, pause, volume, eye contact, gesture." },
    { term: "Structure", definition: "The organisation of the presentation: opening, development, conclusion." },
    { term: "Signposting", definition: "Verbal cues that guide the listener: 'firstly', 'more importantly', 'to conclude'." },
    { term: "Audience awareness", definition: "Adapting language and pace to the listeners' needs and expectations." },
    { term: "Confidence", definition: "Composure under pressure — preparation, breathing, and treating nerves as energy." },
  ],
  concepts: [
    {
      id: "langa-u6-oral-basics",
      title: "Oral presentation basics",
      skill: "Structure and deliver an oral presentation with clear opening, development and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "An oral presentation needs a **clear arc**: **opening** (hook + thesis), **development** (2-3 points with evidence), **conclusion** (synthesis + memorable close). Unlike writing, the listener cannot re-read — signpost explicitly: 'The first point is...', 'Turning now to...'.",
          },
          {
            heading: "Delivery",
            body: "**Pace** — slightly slower than conversation; pauses mark transitions. **Volume** — projected, not shouted. **Eye contact** — distributed across the audience, not fixed on notes. **Gesture** — natural, purposeful, not fidgeting. **Breathing** — steady, especially before key points.",
          },
          {
            heading: "Audience awareness",
            body: "The audience cannot look things up. Define terms briefly; signpost structure; avoid jargon unless explained. If the audience looks lost, slow down and repeat the key point — do not speed up.",
          },
        ],
        keyFormulas: [
          { name: "Presentation arc", statement: "Opening (hook + thesis) → Development (points + evidence) → Conclusion (synthesis)" },
          { name: "Delivery checklist", statement: "Pace + pause + volume + eye contact + gesture + breathing" },
        ],
        workedExample: {
          problem: "Your presentation runs 2 minutes over. What do you cut?",
          solution: "Cut the middle point's secondary evidence — keep the thesis, the strongest point and the conclusion. Never cut the opening or closing; they frame everything.",
        },
      },
      questions: [
        {
          id: "langa-u6-oq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the correct structure for an oral presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction, body, conclusion" },
              { id: "b", text: "Opening, development, conclusion" },
              { id: "c", text: "Point 1, point 2, point 3" },
              { id: "d", text: "Greeting, speech, thanks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation structure", statement: "Opening (hook + thesis) → Development → Conclusion." },
            ],
            steps: [
              { reasoning: "The arc is opening, development, conclusion — with explicit signposting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Opening, development, conclusion",
          },
        },
        {
          id: "langa-u6-oq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why signposting is more important in oral presentations than in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral signposting", statement: "Listeners cannot re-read; transitions must be explicit." },
            ],
            steps: [
              { reasoning: "In writing, structure is visible — headings, paragraphs, transitions on the page.", marks: 1, markCode: "M" },
              { reasoning: "In speech, the listener hears one thing at a time — without signposts, they lose the thread.", marks: 1, markCode: "M" },
              { reasoning: "Phrases like 'the first point', 'turning now to', 'to conclude' orient the listener in real time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oral listeners cannot re-read — explicit signposting is the only way they can track the argument's structure.",
            commonErrors: ["Assuming the audience can follow structure without being guided."],
          },
        },
        {
          id: "langa-u6-oq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You are giving a 5-minute presentation on 'The Role of Memory in Literature'. Write the opening (30 seconds) and closing (30 seconds).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opening and closing", statement: "Hook + thesis at the start; synthesis + memorable close at the end." },
            ],
            steps: [
              { reasoning: "Opening example: 'Every novel is an act of memory — but whose memory, and what does it cost to keep? Today I will argue that literature does not simply represent memory but enacts it — through form, structure and voice.'", marks: 2, markCode: "M" },
              { reasoning: "Closing example: 'We have seen memory as archive, as wound, as performance. The texts agree on one thing: memory is not what we keep but what we do. Thank you.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Opening: hook question + thesis. Closing: synthesis of points + memorable final line.",
            commonErrors: ["Opening with 'Hello, my name is...' and no thesis; closing that trails off."],
          },
        },
        {
          id: "langa-u6-oq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a delivery plan for a 5-minute oral presentation on the following extract.",
          extract: {
            title: "The Gate (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            { label: "a", prompt: "Write the opening (hook + thesis).", marks: 2 },
            { label: "b", prompt: "Outline three development points with evidence.", marks: 4 },
            { label: "c", prompt: "Write the closing synthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation preparation", statement: "Opening + development + closing, all signposted." },
            ],
            steps: [
              { part: "a", reasoning: "Opening example: 'Three lines that contain a whole philosophy — this poem figures existence as a debt incurred without consent. I will show how personification, imagery and rhythm build that claim.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Point 1: personification — 'morning opened its iron gate' gives the day mechanical agency; evidence: 'iron gate'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Point 2: debt imagery — 'like a debt / I never agreed to pay' converts light into obligation; evidence: the enjambed image.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Point 3: rhythm — the three-line structure with falling cadence enacts the verdict-like finality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each point is signposted and linked to the thesis — form creates meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Closing example: 'The poem's form is its argument — the iron gate, the unpaid debt, the falling rhythm all say the same thing: existence as imposed obligation. Thank you.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Opening: hook + thesis. Development: personification, debt imagery, rhythm — each with evidence and signposting. Closing: synthesis of form-as-argument.",
            commonErrors: ["No signposting; points without evidence; closing that repeats rather than synthesises."],
          },
        },
        {
          id: "langa-u6-oq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is an example of signposting in an oral presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Um, like, you know" },
              { id: "b", text: "The first point I want to make is..." },
              { id: "c", text: "Sorry, I lost my place" },
              { id: "d", text: "Anyway, moving on" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signposting", statement: "Verbal cues that guide the listener through the argument's structure." },
            ],
            steps: [
              { reasoning: "Signposts orient the listener — 'the first point' marks where the argument is.", marks: 1, markCode: "M" },
              { reasoning: "Filler, apologies and vague transitions do not guide the listener.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The first point I want to make is...",
          },
        },
        {
          id: "langa-u6-oq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The opening of an oral presentation should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thank the audience and apologise for nerves" },
              { id: "b", text: "Present a hook and state the thesis" },
              { id: "c", text: "Define every literary term you will use" },
              { id: "d", text: "Read the extract aloud word for word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation opening", statement: "Hook + thesis frames the whole presentation." },
            ],
            steps: [
              { reasoning: "The opening must capture attention and announce the argument.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Present a hook and state the thesis",
          },
        },
        {
          id: "langa-u6-oq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A conclusion should synthesise rather than simply repeat the development points because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is quicker to deliver" },
              { id: "b", text: "It draws the points together into a judgement the listener can retain" },
              { id: "c", text: "It avoids using further evidence" },
              { id: "d", text: "It is easier to memorise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion as synthesis", statement: "The close converts points into a single memorable judgement." },
            ],
            steps: [
              { reasoning: "Repetition adds nothing; synthesis shows how the points relate.", marks: 1, markCode: "M" },
              { reasoning: "A judgement gives the listener something to remember.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It draws the points together into a judgement the listener can retain",
          },
        },
        {
          id: "langa-u6-oq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Halfway through your presentation several listeners look confused. The best response is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak faster to finish sooner" },
              { id: "b", text: "Slow down, pause and restate the key point" },
              { id: "c", text: "Skip the remaining points entirely" },
              { id: "d", text: "Apologise repeatedly and continue as before" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience awareness", statement: "If the audience looks lost, slow down and repeat — never speed up." },
            ],
            steps: [
              { reasoning: "Confusion signals the message is not landing; speed makes it worse.", marks: 1, markCode: "M" },
              { reasoning: "Slowing down and restating re-establishes contact with the audience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Slow down, pause and restate the key point",
          },
        },
        {
          id: "langa-u6-oq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which delivery element refers to how loudly and clearly you project your voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pace" },
              { id: "b", text: "Volume" },
              { id: "c", text: "Gesture" },
              { id: "d", text: "Eye contact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery elements", statement: "Volume = loudness and clarity of projection." },
            ],
            steps: [
              { reasoning: "Volume controls how loudly the voice carries.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Volume",
          },
        },
        {
          id: "langa-u6-oq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Eye contact during a presentation should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed on your notes" },
              { id: "b", text: "Distributed across the audience" },
              { id: "c", text: "Focused on the teacher only" },
              { id: "d", text: "Avoided entirely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Eye contact", statement: "Distributed eye contact engages the whole audience and signals confidence." },
            ],
            steps: [
              { reasoning: "Scanning the audience makes every listener feel addressed.", marks: 1, markCode: "M" },
              { reasoning: "Fixed or avoided eye contact disconnects the speaker from listeners.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Distributed across the audience",
          },
        },
        {
          id: "langa-u6-oq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain two differences between delivering a literary analysis orally and writing it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Oral vs written delivery", statement: "Speech is transient and embodied; writing is permanent and revisable." },
            ],
            steps: [
              { reasoning: "A reader can re-read and check structure on the page; a listener hears each point once — signposting must be explicit.", marks: 1, markCode: "M" },
              { reasoning: "Writing carries meaning in sentences alone; speech adds pace, pause, volume and gesture as meaning channels.", marks: 1, markCode: "M" },
              { reasoning: "A written text cannot respond to confusion; an oral delivery can adapt to visible audience reactions.", marks: 1, markCode: "M" },
              { reasoning: "Writing can be edited after drafting; speech must be prepared thoroughly in advance because there is no second draft.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oral delivery is transient (needs signposting), embodied (pace/voice/gesture carry meaning), interactive (can adapt to the audience) and uneditable — unlike writing.",
            commonErrors: ["Listing differences without explaining their effect on delivery."],
          },
        },
        {
          id: "langa-u6-oq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a 30-second opening for a presentation titled 'Memory in Literature'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opening construction", statement: "Hook + thesis + signposted direction in roughly 30 seconds." },
            ],
            steps: [
              { reasoning: "Hook example: 'Every novel is an act of remembering — but who gets to remember, and at what cost?'", marks: 1, markCode: "M" },
              { reasoning: "Thesis example: 'I will argue that literature does not simply represent memory but enacts it through form, voice and structure.'", marks: 1, markCode: "M" },
              { reasoning: "Signpost the development: 'First I will examine memory as archive, then as wound, and finally as performance.'", marks: 1, markCode: "M" },
              { reasoning: "Delivery note: measured pace, pause after the hook, eye contact with the audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hook question + clear thesis + preview of points, delivered at measured pace.",
            commonErrors: ["Opening with greetings only; no thesis; running past 30 seconds."],
          },
        },
        {
          id: "langa-u6-oq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan the development section of a 5-minute presentation on the following extract.",
          extract: {
            title: "The Gate (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            { label: "a", prompt: "Identify three development points, each with one anchor.", marks: 4 },
            { label: "b", prompt: "Write the sentence that transitions from the last point to your conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Development planning", statement: "Points + evidence + signposted flow." },
            ],
            steps: [
              { part: "a", reasoning: "Point 1: personification — 'morning opened its iron gate' gives the day mechanical agency; anchor: 'iron gate'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Point 2: debt imagery — light becomes an obligation; anchor: 'like a debt / I never agreed to pay'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Point 3: brevity and falling rhythm — three lines enact a verdict-like finality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each point links back to a thesis about existence as imposed obligation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: 'So what does this three-line verdict finally suggest — that form itself is the argument?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The transition signals movement to synthesis without announcing it mechanically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Three anchored points (personification, debt imagery, rhythm) plus a guiding transition into the synthesis.",
            commonErrors: ["Points without anchors; transitions that announce rather than guide."],
          },
        },
        {
          id: "langa-u6-oq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Your presentation is running 90 seconds over. Write your 'cut list' strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Cut evidence, never the frame — opening and closing are protected." },
            ],
            steps: [
              { reasoning: "Never cut the opening or closing — they frame everything.", marks: 1, markCode: "M" },
              { reasoning: "Rank development points by strength; drop the weakest first.", marks: 1, markCode: "M" },
              { reasoning: "Cut secondary evidence and examples before cutting claims.", marks: 1, markCode: "M" },
              { reasoning: "Prepare a 30-second 'short version' of the development in advance.", marks: 1, markCode: "M" },
              { reasoning: "Rehearse with a timer so you know which sections expand under pressure.", marks: 1, markCode: "M" },
              { reasoning: "Deliver at a steady pace — rushing to recover time signals panic and loses the audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protect the frame, rank points, cut evidence first, prepare a short version, rehearse timed, and never rush.",
            commonErrors: ["Cutting the conclusion; speeding up instead of cutting; no pre-planned short version."],
          },
        },
        {
          id: "langa-u6-oq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare delivery notes for a 4-minute oral presentation on the following extract.",
          extract: {
            title: "The Lighthouse (extract)",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "On the last night of his watch, a ship answered his beam — one horn, low and clear, as if the sea had finally remembered his name.",
          },
          parts: [
            { label: "a", prompt: "Write the opening hook and thesis.", marks: 2 },
            { label: "b", prompt: "Outline two development points, each with a quotation anchor.", marks: 4 },
            { label: "c", prompt: "Write the closing synthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation preparation", statement: "Hook + thesis → anchored points → synthesis." },
            ],
            steps: [
              { part: "a", reasoning: "Opening example: 'Recognition arrives at the moment of retirement — this extract is about usefulness and its end. I will argue the sea's memory makes the lighthouse keeper's life meaningful.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Point 1: timing — 'the last night of his watch' makes recognition coincide with obsolescence; anchor: 'last night of his watch'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Point 2: personification — 'the sea had finally remembered his name' grants the sea memory and agency; anchor: 'remembered his name'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both points signposted and linked to the thesis about meaning at the end of usefulness.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Closing example: 'The extract suggests that being needed is not enough — we are sustained by being remembered. The horn answers the beam because the sea remembers the name. Thank you.'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Opening: hook + thesis on recognition and usefulness. Development: timing and personification anchors. Closing: synthesis on being remembered.",
            commonErrors: ["No anchors; points unlinked to thesis; closing that repeats rather than synthesises."],
          },
        },
        {
          id: "langa-u6-oq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse what makes a closing line memorable, then write one for a presentation on 'Technology and Humanity'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Memorable close", statement: "Synthesis + brevity + concrete image; the 'thank you' comes after the line, not instead of it." },
            ],
            steps: [
              { reasoning: "A memorable close synthesises the argument into one claim, not a list of points.", marks: 1, markCode: "M" },
              { reasoning: "Brevity gives it weight — one sentence the listener can hold.", marks: 1, markCode: "M" },
              { reasoning: "A concrete image or aphorism sticks where abstraction fades.", marks: 1, markCode: "M" },
              { reasoning: "Example line: 'The machine hums its one note — but only we choose which note, and why.'", marks: 1, markCode: "M" },
              { reasoning: "Deliver it after a pause, then pause again before 'thank you' so the line lands.", marks: 1, markCode: "M" },
              { reasoning: "The line must grow out of the presentation's thesis, not be a generic flourish.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Memorable closes synthesise briefly into a concrete, thesis-linked line — delivered with pauses, with thanks after.",
            commonErrors: ["Generic closing ('thank you for listening'); trailing off; no synthesis."],
          },
        },
      ],
    },
    {
      id: "langa-u6-confidence",
      title: "Confidence and composure",
      skill: "Manage nerves and deliver with composure under pressure.",
      lesson: {
        sections: [
          {
            heading: "Nerves as energy",
            body: "Nervousness is not weakness — it is **energy**. The adrenaline that makes your hands shake also sharpens your focus. Reframe: 'I am excited, not afraid.' The goal is not to eliminate nerves but to channel them into energy.",
          },
          {
            heading: "Preparation as confidence",
            body: "Confidence comes from **preparation**, not personality. Know your material thoroughly; practise aloud; time yourself; prepare for likely questions. The more prepared you are, the less nerves matter.",
          },
          {
            heading: "Composure techniques",
            body: "**Breathing** — slow, deep breaths before starting. **Pause** — a pause before a key point signals confidence, not weakness. **Eye contact** — look at friendly faces first. **Pace** — slow down when nervous; rushing signals panic. **Recovery** — if you lose your place, pause, breathe, and continue — the audience won't know unless you tell them.",
          },
        ],
        keyFormulas: [
          { name: "Nerves reframe", statement: "Excited, not afraid — channel energy into delivery" },
          { name: "Composure checklist", statement: "Breathe + pause + eye contact + slow pace + recover gracefully" },
        ],
        workedExample: {
          problem: "Your mind goes blank mid-presentation. What do you do?",
          solution: "Pause, breathe, and say 'Let me think about that' — then return to your last signposted point. The audience will wait; panic is what they notice, not the pause.",
        },
      },
      questions: [
        {
          id: "langa-u6-cq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The best way to manage presentation nerves is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid presentations" },
              { id: "b", text: "Prepare thoroughly and channel energy" },
              { id: "c", text: "Memorise every word" },
              { id: "d", text: "Speak as fast as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Confidence management", statement: "Preparation + energy channeling." },
            ],
            steps: [
              { reasoning: "Confidence comes from preparation and reframing nerves as energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prepare thoroughly and channel energy",
          },
        },
        {
          id: "langa-u6-cq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'pause' is a powerful delivery technique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pause technique", statement: "Pauses signal confidence and give the audience time to process." },
            ],
            steps: [
              { reasoning: "A pause before a key point creates anticipation — the audience leans in.", marks: 1, markCode: "M" },
              { reasoning: "Pauses mark transitions — they give the listener time to absorb the previous point.", marks: 1, markCode: "M" },
              { reasoning: "Pauses signal composure — rushing signals panic; pausing signals control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pauses create anticipation, mark transitions and signal composure — silence is a delivery tool, not a failure.",
            commonErrors: ["Filling every pause with 'um' or 'uh'."],
          },
        },
        {
          id: "langa-u6-cq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You lose your place mid-presentation and your mind goes blank. Write your recovery script (what you say and do).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recovery technique", statement: "Pause, breathe, return to last signpost — do not announce the blank." },
            ],
            steps: [
              { reasoning: "Immediate action: stop, breathe, make eye contact with a friendly face.", marks: 1, markCode: "M" },
              { reasoning: "Script: 'Let me think about that for a moment' — or simply pause silently; the audience will wait.", marks: 1, markCode: "M" },
              { reasoning: "Recovery: return to your last signposted point — 'As I was saying about the first point...' — the audience knows where you are.", marks: 1, markCode: "M" },
              { reasoning: "Do not apologise or explain — 'sorry, I forgot' draws attention to the blank; confidence is performed by continuing as if nothing happened.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pause, breathe, 'let me think', return to last signpost — never announce the blank.",
            commonErrors: ["Apologising or explaining the blank; rushing to fill the silence."],
          },
        },
        {
          id: "langa-u6-cq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a delivery plan for a 5-minute presentation, including timing, transitions and recovery strategies.",
          extract: {
            title: "The Lighthouse (extract)",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "On the last night of his watch, a ship answered his beam — one horn, low and clear, as if the sea had finally remembered his name.",
          },
          parts: [
            { label: "a", prompt: "Give the timing breakdown (opening, development, closing).", marks: 2 },
            { label: "b", prompt: "Write the three key transitions.", marks: 3 },
            { label: "c", prompt: "List three recovery strategies for common problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery planning", statement: "Timing + transitions + recovery." },
            ],
            steps: [
              { part: "a", reasoning: "Timing example: 30 seconds opening, 4 minutes development (three points), 30 seconds closing.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Transition 1 (opening to point 1): 'The extract's power lies in its timing — recognition arrives at the moment of retirement.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transition 2 (point 1 to point 2): 'But timing is only half the story — the image of the sea remembering is equally important.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transition 3 (to closing): 'So what does this extract finally suggest about recognition and usefulness?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recovery 1 (blank mind): pause, breathe, return to last signpost.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recovery 2 (rushing): slow down deliberately — 'Let me slow down here' — and take a breath.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recovery 3 (losing audience): return to a key quotation and explain it simply — re-engage through concrete detail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timing: 30s/4min/30s. Transitions signal point shifts. Recovery: pause+breathe, slow down, return to quotation.",
            commonErrors: ["No timing plan; no recovery strategies; transitions that announce rather than guide."],
          },
        },
        {
          id: "langa-u6-cq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reframing 'I am nervous' as 'I am excited' works because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes the adrenaline from your body" },
              { id: "b", text: "The same arousal is interpreted positively, channelling energy into delivery" },
              { id: "c", text: "It lowers your heart rate" },
              { id: "d", text: "It guarantees a calm delivery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nerves reframe", statement: "Excited, not afraid — channel energy into delivery." },
            ],
            steps: [
              { reasoning: "Nervousness and excitement share the same physiology — only the label changes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Same arousal, positive interpretation",
          },
        },
        {
          id: "langa-u6-cq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The most reliable source of presentation confidence is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural personality" },
              { id: "b", text: "Thorough preparation" },
              { id: "c", text: "A lucky audience" },
              { id: "d", text: "Memorising every word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Preparation as confidence", statement: "Confidence comes from preparation, not personality." },
            ],
            steps: [
              { reasoning: "Knowing the material removes the fear of the unknown.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Thorough preparation",
          },
        },
        {
          id: "langa-u6-cq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A deliberate pause before a key point is effective because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Signals weakness to the audience" },
              { id: "b", text: "Creates anticipation, marks the transition and signals composure" },
              { id: "c", text: "Gives you time to remember your script" },
              { id: "d", text: "Shortens the presentation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pause technique", statement: "Pauses create anticipation, mark transitions and signal control." },
            ],
            steps: [
              { reasoning: "Silence before a point makes the audience lean in.", marks: 1, markCode: "M" },
              { reasoning: "It also separates points and reads as confidence, not panic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creates anticipation, marks the transition and signals composure",
          },
        },
        {
          id: "langa-u6-cq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "When you feel nervous during a presentation, the recommended pace is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As fast as possible" },
              { id: "b", text: "Deliberately slower than feels natural" },
              { id: "c", text: "Exactly conversational speed" },
              { id: "d", text: "Variable and unpredictable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pace control", statement: "Slow down when nervous — rushing signals panic." },
            ],
            steps: [
              { reasoning: "Nervous speakers speed up; deliberate slowness restores control.", marks: 1, markCode: "M" },
              { reasoning: "A steady slow pace also gives the audience processing time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deliberately slower than feels natural",
          },
        },
        {
          id: "langa-u6-cq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Making eye contact with friendly faces first helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It flatters the teacher" },
              { id: "b", text: "It establishes early connection and builds confidence gradually" },
              { id: "c", text: "It avoids harder questions" },
              { id: "d", text: "It is required by exam rules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Eye contact strategy", statement: "Start with friendly faces to build early rapport." },
            ],
            steps: [
              { reasoning: "Early positive responses steady the speaker before addressing the whole room.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Establishes early connection and builds confidence gradually",
          },
        },
        {
          id: "langa-u6-cq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The audience is most likely to notice panic through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A brief, thoughtful pause" },
              { id: "b", text: "Rushing, filler words and apologising" },
              { id: "c", text: "A steady, projected voice" },
              { id: "d", text: "A planned transition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composure signals", statement: "Panic shows through pace, fillers and apologies — not through pauses." },
            ],
            steps: [
              { reasoning: "Rushing and 'um'/'sorry' are the audible markers of panic.", marks: 1, markCode: "M" },
              { reasoning: "Pauses, steady voice and planned transitions read as control.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rushing, filler words and apologising",
          },
        },
        {
          id: "langa-u6-cq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain two composure techniques and how each works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composure techniques", statement: "Breathing and pausing are the two most controllable delivery tools." },
            ],
            steps: [
              { reasoning: "Technique 1 — breathing: slow, deep breaths before starting lower heart rate and steady the voice.", marks: 2, markCode: "M" },
              { reasoning: "Technique 2 — pausing: a deliberate pause before key points creates anticipation, marks transitions and signals control rather than panic.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Breathing calms physiology; pausing signals composure and gives the audience processing time.",
            commonErrors: ["Naming techniques without explaining their mechanism."],
          },
        },
        {
          id: "langa-u6-cq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a 5-minute pre-presentation routine for managing nerves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-presentation routine", statement: "A fixed routine converts anxiety into prepared energy." },
            ],
            steps: [
              { reasoning: "Arrive early; find your position and test voice/projection without the audience.", marks: 1, markCode: "M" },
              { reasoning: "Silent rehearsal: run the opening line and thesis in your head once, slowly.", marks: 1, markCode: "M" },
              { reasoning: "Visualisation: picture the first 30 seconds going well — the hook landing, the audience attentive.", marks: 1, markCode: "M" },
              { reasoning: "Reframe + breathe: say 'I am excited, not afraid' and take three slow breaths before starting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrive, rehearse the opening silently, visualise success, reframe nerves as excitement and breathe — then begin.",
            commonErrors: ["Cramming notes at the last minute; no fixed routine; starting cold."],
          },
        },
        {
          id: "langa-u6-cq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan how you will handle three disruptions during your presentation.",
          parts: [
            { label: "a", prompt: "A technical failure (screen or microphone dies).", marks: 2 },
            { label: "b", prompt: "You lose your place mid-presentation.", marks: 2 },
            { label: "c", prompt: "A difficult or hostile question from the audience.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Disruption management", statement: "Pause, breathe, adapt — composure is performed by continuing as if nothing happened." },
            ],
            steps: [
              { part: "a", reasoning: "Stay calm; say 'let me continue without the slide' and deliver the point from memory or notes; do not apologise repeatedly.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Pause, breathe, return to your last signposted point — 'As I was saying about the first point...' — the audience will follow the signpost.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Acknowledge the question, answer what you can honestly, and offer to discuss further after — never guess or become defensive.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Technical failure: continue verbally. Lost place: pause + return to signpost. Hostile question: acknowledge, answer honestly, defer if needed.",
            commonErrors: ["Apologising or explaining the problem; freezing; guessing at answers."],
          },
        },
        {
          id: "langa-u6-cq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a personal nerve-management strategy for high-pressure exam conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nerve-management strategy", statement: "Preparation + reframe + physiology + recovery + review." },
            ],
            steps: [
              { reasoning: "Preparation standard: practise aloud under timed conditions so the task feels familiar, not novel.", marks: 1, markCode: "M" },
              { reasoning: "Reframe script: replace 'I hope I don't mess up' with 'I am excited to show what I know.'", marks: 1, markCode: "M" },
              { reasoning: "Physiology: three slow breaths before starting; steady exhale during pauses.", marks: 1, markCode: "M" },
              { reasoning: "Recovery script: 'Let me think about that' then return to the last signposted point — never announce the blank.", marks: 1, markCode: "M" },
              { reasoning: "Focus anchor: pick one friendly face for the opening to stabilise eye contact.", marks: 1, markCode: "M" },
              { reasoning: "Post-performance review: note what steadied you and what to adjust — nerves data, not failure data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timed practice, positive reframe, breathing, recovery script, focus anchor and post-review — a repeatable system for pressure.",
            commonErrors: ["Strategies that rely on eliminating nerves rather than channelling them."],
          },
        },
        {
          id: "langa-u6-cq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a delivery plan for a 5-minute commentary on the following extract, including composure strategies.",
          extract: {
            title: "The Door (extract)",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The door was neither open nor closed. She stood before it for an hour, her hand on the handle, feeling the wood's cool indifference.\n\nThen she walked away — not because she had decided, but because the door had not.",
          },
          parts: [
            { label: "a", prompt: "Give the timing breakdown.", marks: 2 },
            { label: "b", prompt: "Write two delivery notes showing where you will pause and why.", marks: 3 },
            { label: "c", prompt: "List two recovery strategies for common problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composed delivery plan", statement: "Timing + planned pauses + recovery = controlled performance." },
            ],
            steps: [
              { part: "a", reasoning: "Timing example: 30 seconds opening, 4 minutes development (structure, language, theme), 30 seconds closing.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Pause 1: after 'neither open nor closed' — let the paradox land before explaining it.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pause 2: before 'not because she had decided' — the turn deserves silence so the reversal lands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pauses are planned, not accidental — each marks a structural turn in the extract.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recovery 1 (blank mind): pause, breathe, return to last signpost.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recovery 2 (rushing): deliberately slow down — 'let me slow down here' — and take a breath.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recovery 3 (losing the audience): return to a key quotation and explain it simply to re-engage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timing: 30s/4min/30s. Pauses planned at the paradox and the reversal. Recovery: pause+breathe, slow down, return to quotation.",
            commonErrors: ["No timing plan; unplanned pauses; no recovery strategies."],
          },
        },
        {
          id: "langa-u6-cq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim: 'The best presenters feel no nerves.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating confidence claims", statement: "Composure is managed, not the absence of arousal." },
            ],
            steps: [
              { reasoning: "The claim is false — performance arousal is universal; even experienced speakers feel it.", marks: 1, markCode: "M" },
              { reasoning: "Nerves are energy, not weakness — the same adrenaline sharpens focus.", marks: 1, markCode: "M" },
              { reasoning: "Preparation and reframing manage nerves; they do not eliminate them.", marks: 1, markCode: "M" },
              { reasoning: "The audience reads delivery — pace, pauses, eye contact — not your internal state.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the goal is to channel arousal, not to feel nothing.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: 'the best presenters feel nerves and deliver anyway' is the accurate version of the claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nerves are universal and useful; composure is performed through preparation, reframing and delivery control.",
            commonErrors: ["Agreeing that confidence means feeling calm; ignoring the audience's perspective."],
          },
        },
      ],
    },
  ],
};
