// Edexcel International GCSE English Language A (4EA1) - Unit 4
// Spoken Language and Oral Communication
// Run: node scripts/gen-lesson.cjs scripts/data-edx-englang-y10-u4.cjs src/content/courses/edx-englang-y10/unit-4

const bands = (top, part) => {
  const base = part ? { part } : {};
  const hi = "Perceptive, secure and well-developed answer with precise terminology and integrated evidence.";
  const mid = "Clear, relevant points with some development and supporting detail.";
  const lo = "Simple or partial points; limited development or relevance.";
  if (top <= 4) {
    return [
      { ...base, level: "Level 2", marks: `1-${top}`, descriptor: mid },
      { ...base, level: "Level 1", marks: "1-1", descriptor: lo },
    ];
  }
  return [
    { ...base, level: "Level 3", marks: `${top - 1}-${top}`, descriptor: hi },
    { ...base, level: "Level 2", marks: `3-${top - 2}`, descriptor: mid },
    { ...base, level: "Level 1", marks: "1-2", descriptor: lo },
  ];
};

const SPEECH_AUDIENCE = {
  title: "A whole-school assembly speech",
  author: "Year 10 student speaker",
  source: "Spoken language transcript",
  text: "Good morning everyone, and thanks for staying back — I know lunch is usually when you lot get to relax, so I will keep this quick.\n\nBy the end of today you will know exactly which GCSE options you can pick and how to choose the three that suit you best. Let's get into it.\n\nEnglish Language and English Literature are compulsory — no way around that one. After that, you have got real choice. If you are into numbers and problem-solving, Maths and the sciences are solid. If you would rather create than calculate, Art, Drama or Music could be your thing. And if you want to work with people, Business or Psychology might fit.\n\nHere is my top tip: pick subjects you enjoy, not subjects you think sound clever. You will be studying them for two years, so enjoyment matters more than prestige.\n\nAny questions? Come find me at lunch — I brought biscuits.",
};

const SPEECH_TONE = {
  title: "Interview with a youth centre manager",
  author: "Local radio interview",
  source: "Spoken language transcript",
  text: "Interviewer: So, tell us about the new youth centre.\nManager: Yeah, it is, it is been great, honestly. Like, kids come in, they do their homework, there is a kitchen — they can actually cook, which, you know, most of them have never done before.\nInterviewer: And how do you fund it?\nManager: Bit of everything — council grant, local businesses, and the kids themselves pay like two pounds a session. Keeps them invested, d'you know?\nInterviewer: What is next for the centre?\nManager: Erm, well, we are hoping to open the cafe properly next term, so watch this space.",
};

const SPEECH_STRUCTURE = {
  title: "Opening of a class presentation",
  author: "Year 10 student presenter",
  source: "Spoken language script",
  text: "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?",
};

const SPEECH_TRANSCRIPT = {
  title: "Interview with a teenage author",
  author: "School podcast recording",
  source: "Spoken language transcript",
  text: "Interviewer: So, um, how did you start writing?\nGuest: Well, like, I started when I was, I dunno, maybe eleven? My gran used to read to me and I just, you know, wanted to try it myself.\nInterviewer: Was it difficult?\nGuest: Yeah, at first, like, really hard. I wrote this whole story and it was rubbish — honestly, proper rubbish. But my teacher said, 'keep going', so I did.\nInterviewer: What is your advice for people starting out?\nGuest: Erm, just write every day, even if it's rubbish. And read loads — like, way more than you think you need to.",
};

const SPEECH_DELIVERY = {
  title: "Two descriptions of a speech delivery",
  author: "Examiner's observation notes",
  source: "Spoken language observation",
  text: "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time.",
};

module.exports = [
  // ============================== UNIT 4, LESSON 1 ==============================
  {
    file: "lesson-4-1.ts",
    exportName: "lesson41",
    lesson: {
      id: "el10-u4-lesson-4-1",
      code: "4-1",
      title: "Audience, Purpose and Tone in Speech",
      goal: "I CAN analyse how speakers adapt language, tone and register to different audiences and purposes.",
      standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Audience", definition: "The people a speaker is addressing; shape their knowledge, expectations and reactions." },
        { term: "Purpose", definition: "The reason for speaking: to inform, persuade, entertain or instruct." },
        { term: "Register", definition: "The level of formality chosen to suit the audience and occasion." },
        { term: "Tone", definition: "The speaker's attitude towards the subject and audience, such as friendly, serious or urgent." },
        { term: "Direct address", definition: "Speaking directly to the listener using 'you' and 'your'." },
        { term: "Inclusive language", definition: "Wording that includes everyone, such as 'everyone' or 'we', rather than excluding groups." },
      ],
      concepts: [
        {
          id: "el10-u4-audience-purpose",
          title: "Audience and purpose in speech",
          skill: "Explain how speakers choose language to suit a particular audience and purpose.",
          sections: [
            {
              heading: "Why audience matters",
              body: "A speaker who knows their audience adapts three things: the **vocabulary** (simple or specialist), the **examples** (familiar or unfamiliar), and the **level of detail** (basic or in-depth). A Year 10 speaker addressing Year 7 students must explain GCSE options from scratch; the same speaker addressing parents can assume knowledge of qualifications.",
            },
            {
              heading: "Signs of audience adaptation",
              body: "Look for **direct address** ('you will know', 'come find me'), **inclusive pronouns** ('we', 'everyone'), **rhetorical questions** that check understanding, and **shared references** ('assembly', 'lunch'). Formal vocabulary and complete sentences signal a formal register; contractions and slang signal an informal one.",
            },
            {
              heading: "Purpose shapes language",
              body: "The speaker's purpose decides what the language must do. To **inform**, use clear sequencing and definitions. To **persuade**, use emotive words, rhetorical questions and direct appeals. To **entertain**, use humour, anecdotes and a lively tone. In the assembly speech, the purpose is to inform and advise, so the speaker uses simple structures and a friendly tone.",
            },
          ],
          keyFormulas: [
            { name: "Audience", statement: "Speakers adapt vocabulary, examples and detail to what the audience knows and expects." },
            { name: "Purpose", statement: "Inform, persuade or entertain — the purpose determines the language choices." },
            { name: "Direct address", statement: "Using 'you' and 'your' builds a personal link between speaker and listeners." },
          ],
          workedExample: {
            problem: "How does the speaker in the assembly speech adapt the language to the audience?",
            solution: "The speaker uses informal, friendly language suited to students: contractions and casual phrases such as 'you lot' and 'no way around that one' keep the tone relaxed. Direct address ('you will know', 'come find me at lunch') makes the speech personal, and 'my top tip' creates the feel of advice from a peer rather than an authority. Examples are school-based and familiar, such as Art, Drama and choosing three GCSE options, so listeners need no outside knowledge.",
          },
          questions: [
            {
              id: "el10-u4-audience-purpose-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: SPEECH_AUDIENCE,
              stem: "Who is the primary audience of this speech?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Year 7 and Year 8 students" },
                  { id: "b", text: "Parents of students" },
                  { id: "c", text: "Ofsted inspectors" },
                  { id: "d", text: "University lecturers" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Audience", statement: "The people the speaker is addressing." }],
                steps: [{ reasoning: "References to 'assembly', 'lunch' and choosing GCSE options show school students are being addressed.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(a)** School students, because the content and language assume they are choosing GCSE options.",
                commonErrors: ["Choosing parents because advice is given; the speaker addresses students directly."],
              },
            },
            {
              id: "el10-u4-audience-purpose-q2",
              difficulty: "core",
              totalMarks: 2,
              extract: SPEECH_AUDIENCE,
              stem: "Explain two ways the speaker shows awareness of the audience.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Audience adaptation", statement: "Speakers adjust language to what listeners know and expect." }],
                steps: [
                  { reasoning: "The speaker explains GCSE choices from basics ('compulsory', 'real choice'), assuming no prior knowledge.", evidence: "English Language and English Literature are compulsory", marks: 1, markCode: "AO2" },
                  { reasoning: "Casual references to school life ('lunch', 'biscuits') match a student audience.", evidence: "Come find me at lunch — I brought biscuits", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The speaker explains options from scratch and uses familiar school references, showing the language is pitched to students.",
                commonErrors: ["Listing features without explaining how they suit the audience."],
              },
            },
            {
              id: "el10-u4-audience-purpose-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: SPEECH_AUDIENCE,
              stem: "How does the speaker use direct address and inclusive language to engage the audience?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Direct address", statement: "'You' and inclusive pronouns create a personal connection with listeners." }],
                steps: [
                  { reasoning: "Repeated 'you' forms ('you will know', 'you are into') make each listener feel addressed personally.", evidence: "you will know exactly which GCSE options", marks: 1, markCode: "AO2" },
                  { reasoning: "'Everyone' and 'let's' create a shared group feeling, as if speaker and listeners are on the same side.", evidence: "Good morning everyone", marks: 1, markCode: "AO2" },
                  { reasoning: "The closing invitation 'Come find me at lunch' is a direct appeal that keeps the connection going after the speech.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Direct address and inclusive pronouns make the speech feel personal and build rapport with student listeners.",
                commonErrors: ["Describing the features without linking them to engagement."],
              },
            },
            {
              id: "el10-u4-audience-purpose-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SPEECH_AUDIENCE,
              stem: "Analyse how the speaker adapts the language and examples to a student audience rather than a formal or adult audience.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Register", statement: "Informal vocabulary and contractions signal a relaxed, peer-to-peer register." },
                  { kind: "context", name: "Shared knowledge", statement: "Examples drawn from school life assume the audience's experience." },
                ],
                steps: [
                  { reasoning: "Casual, spoken phrases such as 'you lot' and 'no way around that one' are informal, avoiding stiff formal vocabulary.", evidence: "no way around that one", marks: 1, markCode: "AO2" },
                  { reasoning: "Contractions and colloquial phrasing ('it's', 'would rather') imitate natural speech rather than written prose.", marks: 1, markCode: "AO2" },
                  { reasoning: "Examples are all school-based — Art, Drama, Music, choosing three options — so no specialist knowledge is needed.", evidence: "Art, Drama or Music could be your thing", marks: 1, markCode: "AO2" },
                  { reasoning: "The 'top tip' is framed as friendly peer advice ('enjoyment matters more than prestige'), not official guidance.", evidence: "Here is my top tip", marks: 1, markCode: "AO2" },
                  { reasoning: "The overall effect is that a fellow student is speaking, which makes the advice feel trustworthy and accessible.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The informal register, contractions, school-based examples and peer-advice tone all show the speech is pitched precisely to students.",
                commonErrors: ["Identifying informal features but not explaining how they suit the audience."],
              },
            },
            {
              id: "el10-u4-audience-purpose-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: SPEECH_AUDIENCE,
              stem: "Compare the tone of the opening ('thanks for staying back — I know lunch is usually when you lot get to relax') with the tone of the advice ('pick subjects you enjoy'). Explain the effect of this shift.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Tone shift", statement: "A change in tone can move listeners from relaxed to attentive." },
                  { kind: "skill", name: "Tone analysis", statement: "Describing attitude precisely shows understanding of effect." },
                ],
                steps: [
                  { reasoning: "The opening is playful and conspiratorial: 'you lot' and the joke about lunch position the speaker as a friendly peer.", evidence: "you lot get to relax", marks: 1, markCode: "AO2" },
                  { reasoning: "The dash and casual aside ('I'll keep this quick') signal the speaker respects the audience's time.", marks: 1, markCode: "AO2" },
                  { reasoning: "The advice section becomes more serious and sincere: 'top tip', 'enjoyment matters more than prestige' carry weight.", evidence: "enjoyment matters more than prestige", marks: 2, markCode: "AO2" },
                  { reasoning: "The shift earns attention: listeners who were relaxed are now primed to take genuine advice seriously.", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast prevents the speech sounding preachy; sincerity lands because it is set against humour.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "The tone moves from playful peer banter to sincere advice; the contrast earns the audience's attention and makes the key message persuasive.",
                commonErrors: ["Describing both tones without explaining the effect of the contrast."],
              },
            },
            {
              id: "el10-u4-audience-purpose-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SPEECH_AUDIENCE,
              stem: "Read the assembly speech and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the main purpose of the speech.", marks: 1 },
                { label: "b", prompt: "Explain two features of the language that show the audience is students.", marks: 3 },
                { label: "c", prompt: "Analyse how the speaker's tone changes during the speech and the effect of this.", marks: 4 },
                { label: "d", prompt: "Evaluate how effectively the speaker engages the audience overall.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Purpose and audience", statement: "Language choices reveal purpose and the intended listeners." },
                  { kind: "technique", name: "Tone", statement: "The speaker's attitude shifts to serve the message." },
                ],
                steps: [
                  { part: "a", reasoning: "To inform and advise students about choosing GCSE options.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Casual register with colloquialisms ('you lot', 'no way around that one') suits students.", evidence: "no way around that one", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Direct address ('you will know') and inclusive 'let's' create rapport.", evidence: "let's get into it", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Familiar examples such as 'biscuits' and school subjects assume shared experience.", evidence: "I brought biscuits", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The opening is humorous and relaxed ('thanks for staying back', the lunch joke).", evidence: "when you lot get to relax", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The middle is informative with a clear list structure and simple sequencing.", evidence: "If you are into numbers", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The 'top tip' marks a shift to sincere persuasion, giving the advice weight.", evidence: "Here is my top tip", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The closing returns to informality ('I brought biscuits'), ending on warmth rather than formality.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Engagement is strong: humour, direct address, relatable examples and a memorable ending all suit the audience.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "The speech stays focused on its purpose; nothing distracts from the advice about choosing subjects.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(1, "a"),
                  ...bands(3, "b"),
                  ...bands(4, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) To inform and advise students about GCSE options. (b) Colloquial register, direct address and familiar examples all target students. (c) The tone moves from humorous to informative to sincere and back to warm. (d) The speaker engages effectively through humour, rapport and a clear, audience-focused message.",
                commonErrors: ["Retelling the speech rather than analysing language.", "Describing tone without linking it to audience or purpose."],
              },
            },
          ],
        },
        {
          id: "el10-u4-tone-register",
          title: "Tone, register and voice in speech",
          skill: "Analyse tone, register and the speaker's voice in spoken language.",
          sections: [
            {
              heading: "Register: formal and informal",
              body: "**Register** is the level of formality. A formal register uses complete sentences, precise vocabulary and respectful phrasing ('Could you tell us...'). An informal register uses contractions, fillers ('yeah', 'erm', 'like') and everyday vocabulary. Speakers often mix registers deliberately.",
            },
            {
              heading: "Tone and voice",
              body: "**Tone** is the attitude: friendly, serious, urgent, humorous. **Voice** is the distinctive quality of how someone speaks — word choice, rhythm, favourite phrases. In the youth-centre interview, the manager's voice is warm and down-to-earth, which suits a community project talking to local listeners.",
            },
            {
              heading: "Fillers and spoken features",
              body: "Spoken transcripts show **fillers** ('um', 'er', 'like', 'you know') that mark hesitation or thinking time, **repetition** for emphasis ('it is, it is been great'), and **tag questions** ('d'you know?') that invite agreement. These features are not errors in speech; they are part of how spoken language works.",
            },
          ],
          keyFormulas: [
            { name: "Register", statement: "The level of formality chosen to suit audience and occasion." },
            { name: "Tone", statement: "The speaker's attitude towards subject and audience." },
            { name: "Fillers", statement: "Spoken hesitations such as 'um' and 'like' that mark thinking time." },
          ],
          workedExample: {
            problem: "How does the manager's language in the youth-centre interview create an informal, approachable tone?",
            solution: "The manager mixes registers: answering the interviewer's formal question with relaxed, conversational speech. Fillers ('yeah', 'like', 'erm') and repetition ('it is, it is been great') make the delivery sound spontaneous and honest. The informal 'd'you know?' tag invites listeners to agree, while the modest detail 'two pounds a session' makes the project feel real and grounded rather than boastful.",
          },
          questions: [
            {
              id: "el10-u4-tone-register-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: SPEECH_TONE,
              stem: "What does the phrase 'd'you know?' at the end of the manager's answer suggest about their register?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The register is formal and official" },
                  { id: "b", text: "The register is informal and conversational" },
                  { id: "c", text: "The manager is unsure of the facts" },
                  { id: "d", text: "The manager is addressing a written audience" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Register", statement: "The level of formality in language." }],
                steps: [{ reasoning: "The contracted tag question is typical of informal spoken English.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** The phrase is informal and conversational.",
                commonErrors: ["Reading 'd'you know?' as genuine uncertainty; it is a conversational tag."],
              },
            },
            {
              id: "el10-u4-tone-register-q2",
              difficulty: "core",
              totalMarks: 2,
              extract: SPEECH_TONE,
              stem: "Explain the effect of the fillers 'yeah', 'like' and 'erm' in the manager's answers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Fillers", statement: "Spoken hesitations that mark thinking time and create spontaneity." }],
                steps: [
                  { reasoning: "Fillers make the speech sound spontaneous and unscripted, as real speech is.", evidence: "Yeah, it is, it is been great", marks: 1, markCode: "AO2" },
                  { reasoning: "They create an honest, relaxed tone, making the manager seem approachable rather than rehearsed.", evidence: " Erm, well, we are hoping", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The fillers make the delivery sound natural and spontaneous, creating an honest, approachable tone.",
                commonErrors: ["Calling fillers mistakes; they are normal features of speech."],
              },
            },
            {
              id: "el10-u4-tone-register-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: SPEECH_TONE,
              stem: "Compare the interviewer's register with the manager's register and explain why the difference is appropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Register contrast", statement: "Different speakers in the same exchange can use different registers." }],
                steps: [
                  { reasoning: "The interviewer's questions are short, neutral and formulaic ('tell us about', 'what is next'), a professional broadcasting register.", evidence: "And how do you fund it?", marks: 1, markCode: "AO2" },
                  { reasoning: "The manager's answers are conversational, with fillers, contractions and the tag 'd'you know?'.", evidence: "Keeps them invested, d'you know?", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast is appropriate: the interviewer represents the formal medium while the manager represents the community voice.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The interviewer's professional register contrasts with the manager's informal, friendly voice, which suits a community project.",
                commonErrors: ["Describing registers without explaining why the contrast works."],
              },
            },
            {
              id: "el10-u4-tone-register-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SPEECH_TONE,
              stem: "Analyse how the manager's language choices create an approachable and trustworthy tone.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Tone", statement: "Word choice and phrasing convey the speaker's attitude." },
                  { kind: "context", name: "Community voice", statement: "Down-to-earth language suits a local, youth-focused project." },
                ],
                steps: [
                  { reasoning: "Enthusiasm is shown through repetition and informal emphasis: 'it is, it is been great, honestly'.", evidence: "it is, it is been great, honestly", marks: 1, markCode: "AO2" },
                  { reasoning: "Concrete, modest details ('two pounds a session', 'a kitchen') make the project feel genuine rather than promotional.", evidence: "pay like two pounds a session", marks: 2, markCode: "AO2" },
                  { reasoning: "The inclusive 'kids themselves' credits the young people, building goodwill.", marks: 1, markCode: "AO2" },
                  { reasoning: "The tag question 'd'you know?' invites listener agreement, drawing them into the conversation.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "Enthusiastic repetition, modest concrete detail and inclusive phrasing create a warm, trustworthy community voice.",
                commonErrors: ["Listing informal features without linking them to approachability."],
              },
            },
            {
              id: "el10-u4-tone-register-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: SPEECH_TONE,
              stem: "How does the manager balance authority about the project with an informal, friendly manner? Refer to specific language choices.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Register mixing", statement: "Speakers can move between formal and informal levels within one exchange." },
                  { kind: "skill", name: "Voice analysis", statement: "The speaker's distinctive way of expressing ideas shapes credibility." },
                ],
                steps: [
                  { reasoning: "Authority comes from concrete facts: funding sources listed precisely ('council grant, local businesses').", evidence: "council grant, local businesses", marks: 1, markCode: "AO2" },
                  { reasoning: "The confident, declarative explanation of how the centre works signals competence despite informal phrasing.", evidence: "Keeps them invested", marks: 1, markCode: "AO2" },
                  { reasoning: "Friendliness comes from fillers, contractions and the tag 'd'you know?', which soften the authority.", evidence: "which, you know, most of them have never done before", marks: 1, markCode: "AO2" },
                  { reasoning: "The balance works because listeners trust a manager who sounds like a real person, not a spokesperson.", marks: 2, markCode: "AO2" },
                  { reasoning: "Hedging in the final answer ('Erm, well, hoping to') keeps the tone honest about uncertainty.", evidence: "we are hoping to open the cafe properly", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "The manager pairs precise factual knowledge with informal fillers and phrasing, making authority feel warm and credible.",
                commonErrors: ["Treating informality as a lack of authority rather than a deliberate balance."],
              },
            },
            {
              id: "el10-u4-tone-register-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SPEECH_TONE,
              stem: "Read the interview transcript and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify three features of informal spoken language in the manager's answers.", marks: 3 },
                { label: "b", prompt: "Explain how the interviewer's register differs from the manager's.", marks: 2 },
                { label: "c", prompt: "Analyse how the manager's tone creates a particular impression of the youth centre.", marks: 4 },
                { label: "d", prompt: "Evaluate whether the informal tone is effective for this audience.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Spoken features", statement: "Fillers, contractions and tags mark informal speech." },
                  { kind: "context", name: "Audience suitability", statement: "Informal language suits a community radio audience." },
                ],
                steps: [
                  { part: "a", reasoning: "Fillers: 'yeah', 'like', 'erm', 'you know'.", evidence: "it is, it is been great, honestly", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Contractions and colloquialisms: 'd'you know?', 'kids', 'properly'.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Repetition for emphasis: 'it is, it is been great'.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "The interviewer uses short, neutral, formulaic questions — a professional broadcasting register.", evidence: "So, tell us about the new youth centre", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The manager answers in relaxed conversational speech with fillers and tags.", evidence: "Bit of everything", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Enthusiasm: 'it is been great, honestly' conveys pride in the project.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Modest detail ('two pounds a session') makes the centre sound accessible and genuine.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Inclusive credit to 'the kids themselves' portrays the centre as youth-led and empowering.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Hedged optimism ('watch this space') ends on a warm, hopeful note.", evidence: "so watch this space", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The informal tone is effective: it makes the manager trustworthy and the project feel community-rooted.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(2, "b"),
                  ...bands(4, "c"),
                  ...bands(1, "d"),
                ],
                finalAnswer: "(a) Fillers, contractions/colloquialisms and repetition. (b) The interviewer is formal and formulaic; the manager is informal and conversational. (c) The warm, modest, inclusive tone portrays the centre as genuine and youth-led. (d) The tone is effective for a community audience.",
                commonErrors: ["Listing spoken features without effect.", "Ignoring the contrast between the two speakers."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u4-audience-tone-notes",
      title: "Audience, purpose and tone — notes",
      summary: "Speakers adapt vocabulary, examples and register to the audience; tone shifts serve the message.",
      sections: [
        { heading: "Key idea", body: "Analyse how language suits the audience: vocabulary level, examples, formality and direct address." },
        { heading: "Register", body: "Formal = complete sentences and precise vocabulary; informal = contractions, fillers and colloquialisms." },
        { heading: "Tone", body: "Name the attitude precisely — friendly, urgent, humorous — and link it to effect." },
      ],
    },
  },
  // ============================== UNIT 4, LESSON 2 ==============================
  {
    file: "lesson-4-2.ts",
    exportName: "lesson42",
    lesson: {
      id: "el10-u4-lesson-4-2",
      code: "4-2",
      title: "Structure and Delivery in Speech",
      goal: "I CAN explain how speakers structure spoken texts and use delivery to hold an audience's attention.",
      standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
      vocabulary: [
        { term: "Discourse marker", definition: "A word or phrase that signals structure, such as 'first', 'now' or 'finally'." },
        { term: "Signposting", definition: "Telling the audience where you are in the speech, such as 'three things'." },
        { term: "Pace", definition: "The speed of delivery; slowing down marks important points." },
        { term: "Pause", definition: "A deliberate silence that builds anticipation or separates ideas." },
        { term: "Vocal variety", definition: "Changes in volume, pitch and speed that emphasise meaning." },
        { term: "Eye contact", definition: "Looking at listeners to build connection and gauge reactions." },
      ],
      concepts: [
        {
          id: "el10-u4-spoken-structure",
          title: "Structuring a spoken text",
          skill: "Analyse how speakers use openings, signposting and discourse markers to organise speech.",
          sections: [
            {
              heading: "Openings and signposting",
              body: "Speakers must orient listeners quickly because, unlike readers, listeners cannot turn back. Effective openings **greet** ('good afternoon'), **state the topic** and **signpost the structure**: 'three things: first... second... third'. Signposting tells the audience what is coming and what has passed.",
            },
            {
              heading: "Discourse markers",
              body: "Markers such as 'first', 'now, moving on to', 'finally, before I finish' and 'so that is' guide the listener through the speech. They act like signposts on a journey. Repeating the structure at the end ('why it matters, what we can do, and my part') reinforces it in memory.",
            },
            {
              heading: "Closings",
              body: "A strong closing **summarises** the key points, returns to the opening idea, and often ends with a question or call to action. 'Any questions?' invites participation. The summary at the end of the plastic-pollution speech ('So that is plastic pollution') mirrors the promised structure, giving listeners a satisfying finish.",
            },
          ],
          keyFormulas: [
            { name: "Signposting", statement: "Announcing the structure ('three things: first...') orients listeners." },
            { name: "Discourse marker", statement: "'First', 'now', 'finally', 'so that is' — signals movement through the speech." },
            { name: "Circular structure", statement: "Ending by repeating the opening structure reinforces memory." },
          ],
          workedExample: {
            problem: "How does the presenter structure the opening of the plastic-pollution speech?",
            solution: "The speaker opens with a greeting ('good afternoon everyone'), immediately states the topic and promises a clear structure: 'three things: first, why plastic pollution matters; second, what we can do; and third, what I have done myself'. Discourse markers ('first', 'now, moving on to', 'finally, before I finish') move the audience through each section, and the closing ('So that is plastic pollution') mirrors the promised three-part structure so listeners can recall it easily.",
          },
          questions: [
            {
              id: "el10-u4-spoken-structure-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: SPEECH_STRUCTURE,
              stem: "What does the phrase 'three things: first... second... third' do in the speech?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "It lists the names of three students" },
                  { id: "b", text: "It signposts the structure of the speech" },
                  { id: "c", text: "It gives three statistics about pollution" },
                  { id: "d", text: "It asks the audience a question" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Signposting", statement: "Announcing the structure so listeners know what is coming." }],
                steps: [{ reasoning: "The phrase tells listeners the speech will cover three numbered points.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** It signposts the structure.",
                commonErrors: ["Reading it as content rather than structural guidance."],
              },
            },
            {
              id: "el10-u4-spoken-structure-q2",
              difficulty: "core",
              totalMarks: 2,
              extract: SPEECH_STRUCTURE,
              stem: "Explain the function of the discourse markers 'first', 'now, moving on to' and 'finally, before I finish'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Discourse markers", statement: "Words that signal movement through a spoken text." }],
                steps: [
                  { reasoning: "They mark transitions between sections so listeners can follow the structure.", evidence: "now, moving on to what we can do", marks: 1, markCode: "AO2" },
                  { reasoning: "'Finally, before I finish' signals the last section and prepares listeners for the close.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The markers guide listeners through the speech's sections and signal the ending.",
                commonErrors: ["Listing markers without explaining their structural function."],
              },
            },
            {
              id: "el10-u4-spoken-structure-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: SPEECH_STRUCTURE,
              stem: "How does the closing of the speech ('So that is plastic pollution...') reinforce the structure?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Circular structure", statement: "Repeating the opening structure at the end aids recall." }],
                steps: [
                  { reasoning: "The speaker recaps all three promised points in order: 'why it matters, what we can do, and my part'.", evidence: "why it matters, what we can do, and my part", marks: 1, markCode: "AO2" },
                  { reasoning: "This mirrors the opening signpost, so the audience hears the structure completed.", marks: 1, markCode: "AO2" },
                  { reasoning: "The recap gives a satisfying, memorable finish rather than a abrupt stop.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The closing repeats the promised three-part structure, giving listeners a clear, memorable summary.",
                commonErrors: ["Describing the recap without linking it to the opening signpost."],
              },
            },
            {
              id: "el10-u4-spoken-structure-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SPEECH_STRUCTURE,
              stem: "Analyse how the speaker uses signposting and discourse markers to keep listeners oriented throughout the speech.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Signposting", statement: "Announcing structure helps listeners who cannot re-read." },
                  { kind: "skill", name: "Spoken structure", statement: "Markers compensate for the linear nature of speech." },
                ],
                steps: [
                  { reasoning: "The opening states the topic and the number of points: 'three things: first... second... third'.", evidence: "three things: first, why plastic pollution matters", marks: 1, markCode: "AO2" },
                  { reasoning: "Each section begins with a clear marker: 'first', 'now, moving on to', 'finally, before I finish'.", marks: 1, markCode: "AO2" },
                  { reasoning: "These markers are essential because listeners cannot flick back; they must always know where they are.", marks: 1, markCode: "AO2" },
                  { reasoning: "A statistic ('eight million tonnes... every year') is introduced with 'as you can see', tying evidence to the current point.", evidence: "As you can see on this slide", marks: 1, markCode: "AO2" },
                  { reasoning: "The summary at the end closes the loop, confirming that all promised sections were delivered.", evidence: "So that is plastic pollution", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The speaker's consistent signposting and discourse markers keep listeners oriented in a linear medium and deliver a complete, memorable structure.",
                commonErrors: ["Listing markers without explaining why spoken texts need them."],
              },
            },
            {
              id: "el10-u4-spoken-structure-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: SPEECH_STRUCTURE,
              stem: "How does the speaker combine verbal signposting with visual support ('this slide') to structure the presentation? What does this reveal about spoken presentations?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Multimodal presentation", statement: "Speeches combine words, visuals and delivery." },
                  { kind: "context", name: "Spoken vs written", statement: "Listeners need more explicit guidance than readers." },
                ],
                steps: [
                  { reasoning: "The speaker points to the slide ('as you can see on this slide') while giving the statistic, linking words and image.", evidence: "As you can see on this slide", marks: 1, markCode: "AO2" },
                  { reasoning: "The visual supports the statistic ('eight million tonnes') so listeners grasp scale without processing long sentences.", marks: 1, markCode: "AO2" },
                  { reasoning: "Verbal signposting ('first', 'moving on') tells listeners when the visual or point changes.", marks: 1, markCode: "AO2" },
                  { reasoning: "This shows spoken presentations rely on multiple channels: words alone are not enough for a live audience.", marks: 2, markCode: "AO2" },
                  { reasoning: "The combination reduces the cognitive load on listeners, who can watch while listening.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "Verbal markers and visual cues work together to guide listeners; spoken presentations need more explicit scaffolding than written texts.",
                commonErrors: ["Treating the slide reference as incidental rather than part of the structure."],
              },
            },
            {
              id: "el10-u4-spoken-structure-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SPEECH_STRUCTURE,
              stem: "Read the presentation script and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "State the topic and promised structure announced in the opening.", marks: 2 },
                { label: "b", prompt: "Identify three discourse markers used to move between sections.", marks: 3 },
                { label: "c", prompt: "Analyse how the closing summarises the speech.", marks: 3 },
                { label: "d", prompt: "Evaluate how effectively the structure would help a live audience follow the presentation.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Signposting", statement: "Explicit structure guides listeners through speech." },
                  { kind: "skill", name: "Spoken structure", statement: "Markers, openings and closings organise a linear text." },
                ],
                steps: [
                  { part: "a", reasoning: "Topic: plastic pollution.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Structure: three points — why it matters, what we can do, what the speaker has done.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'first' introduces section one.", evidence: "first, why plastic pollution matters", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'now, moving on to' signals the second section.", evidence: "now, moving on to what we can do", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'finally, before I finish' signals the last section and the close.", evidence: "finally, before I finish", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "The summary lists the three points in order: 'why it matters, what we can do, and my part'.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "It mirrors the opening promise, confirming the structure was delivered.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "'So that is' acts as a final discourse marker signalling completion.", evidence: "So that is plastic pollution", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The structure is highly effective for a live audience because every section is announced and recapped.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Listeners cannot re-read, so the explicit guidance is essential and well executed.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) Plastic pollution; three points — why it matters, what we can do, what the speaker has done. (b) 'first', 'now, moving on to', 'finally, before I finish'. (c) The closing recaps the three promised points in order. (d) The structure is very effective for a live audience.",
                commonErrors: ["Listing markers without noting their function.", "Missing the mirror between opening promise and closing summary."],
              },
            },
          ],
        },
        {
          id: "el10-u4-delivery",
          title: "Delivery and non-verbal communication",
          skill: "Analyse how pace, pause, vocal variety, gesture and eye contact shape a speech.",
          sections: [
            {
              heading: "Pace, pause and emphasis",
              body: "**Pace** is the speed of speaking. Slowing down signals importance; speeding up can show excitement or nervousness. A **pause** before a key point builds anticipation. **Vocal variety** — changes in volume, pitch and speed — stops a speech sounding flat and keeps attention.",
            },
            {
              heading: "Body language",
              body: "**Eye contact** with listeners builds connection and shows confidence; staring at notes does the opposite. **Gestures** emphasise points and add energy. **Posture** and movement across the stage show engagement. In the examiner's notes, Speaker B's pauses, varied voice and gestures make the delivery engaging, while Speaker A's fast, quiet reading of notes is dull.",
            },
            {
              heading: "Timing",
              body: "Finishing at the allotted time shows planning. Speaker B 'finished at exactly the allotted time', suggesting rehearsal and control. Running over or finishing far too early suggests poor preparation. Delivery is part of the message: the same words can persuade or fail depending on how they are performed.",
            },
          ],
          keyFormulas: [
            { name: "Pace", statement: "Slow for emphasis, faster for energy; steady pace shows control." },
            { name: "Pause", statement: "A deliberate silence builds anticipation before key points." },
            { name: "Eye contact", statement: "Looking at listeners builds connection; reading notes breaks it." },
            { name: "Vocal variety", statement: "Changes in volume, pitch and speed prevent a flat delivery." },
          ],
          workedExample: {
            problem: "Compare the two deliveries described in the examiner's notes.",
            solution: "Speaker A delivers quickly and quietly while reading notes, finishing early — this suggests nervousness or poor preparation and disengages the audience. Speaker B slows for key points, pauses before new ideas, varies her voice and uses gestures; finishing exactly on time shows rehearsal and control. The same content would land very differently: B's delivery emphasises and involves, A's merely transmits.",
          },
          questions: [
            {
              id: "el10-u4-delivery-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: SPEECH_DELIVERY,
              stem: "According to the examiner's notes, which speaker finishes at exactly the allotted time?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Speaker A" },
                  { id: "b", text: "Speaker B" },
                  { id: "c", text: "Both speakers" },
                  { id: "d", text: "Neither speaker" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Timing", statement: "Finishing at the allotted time shows control and preparation." }],
                steps: [{ reasoning: "Speaker B 'finished at exactly the allotted time'.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** Speaker B.",
                commonErrors: ["Confusing Speaker A's early finish with good timing."],
              },
            },
            {
              id: "el10-u4-delivery-q2",
              difficulty: "core",
              totalMarks: 2,
              extract: SPEECH_DELIVERY,
              stem: "Explain the effect of Speaker B's pauses before each new idea.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Pause", statement: "Deliberate silence builds anticipation and separates ideas." }],
                steps: [
                  { reasoning: "Pauses signal that a new point is coming, giving listeners a moment to reset.", marks: 1, markCode: "AO2" },
                  { reasoning: "They create emphasis and prevent the speech from blurring into one continuous stream.", evidence: "paused before each new idea", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The pauses separate ideas and build anticipation, making each new point land more strongly.",
                commonErrors: ["Describing pauses without linking them to listener attention."],
              },
            },
            {
              id: "el10-u4-delivery-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: SPEECH_DELIVERY,
              stem: "How do gestures and eye contact affect the audience's experience of a speech? Refer to both speakers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Body language", statement: "Gestures and eye contact shape engagement." }],
                steps: [
                  { reasoning: "Speaker B's hand gestures emphasise the statistics, making them more memorable.", evidence: "used hand gestures to emphasise the statistics", marks: 1, markCode: "AO2" },
                  { reasoning: "Speaker A 'rarely looking up from her notes' breaks contact, making the delivery feel distant.", marks: 1, markCode: "AO2" },
                  { reasoning: "Eye contact and gesture together make listeners feel addressed; their absence makes them passive.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Gestures and eye contact involve the audience; Speaker A's note-reading and stillness disengage them.",
                commonErrors: ["Mentioning gestures without explaining their effect on engagement."],
              },
            },
            {
              id: "el10-u4-delivery-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SPEECH_DELIVERY,
              stem: "Analyse how pace and vocal variety contribute to the effectiveness of Speaker B's delivery compared with Speaker A's.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Vocal variety", statement: "Changes in speed, volume and pitch sustain attention." },
                  { kind: "skill", name: "Delivery analysis", statement: "Delivery choices shape how the message is received." },
                ],
                steps: [
                  { reasoning: "Speaker B 'slowed down for the key points', signalling importance through pace.", evidence: "slowed down for the key points", marks: 1, markCode: "AO2" },
                  { reasoning: "Speaker A 'delivered quickly and quietly throughout', which flattens emphasis and suggests nerves.", evidence: "quickly and quietly throughout", marks: 1, markCode: "AO2" },
                  { reasoning: "Speaker B's 'varied voice' prevents monotony; a single level of pitch would lose listeners.", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast shows the same content can persuade or fail depending on delivery.", marks: 1, markCode: "AO2" },
                  { reasoning: "B's controlled pace and finishing exactly on time suggest rehearsal and confidence.", evidence: "finished at exactly the allotted time", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "B's varied pace and voice emphasise key points and sustain attention; A's flat, fast delivery undermines the same content.",
                commonErrors: ["Describing delivery features without comparing their effects."],
              },
            },
            {
              id: "el10-u4-delivery-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: SPEECH_DELIVERY,
              stem: "What do the examiner's notes suggest about the likely confidence and preparation of each speaker? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Delivery as evidence", statement: "How a speech is delivered reveals preparation and confidence." },
                  { kind: "technique", name: "Non-verbal cues", statement: "Eye contact, pace and timing signal composure." },
                ],
                steps: [
                  { reasoning: "Speaker A finishing 'with thirty seconds to spare' suggests she did not pace her speech — poor timing control.", evidence: "thirty seconds to spare", marks: 1, markCode: "AO2" },
                  { reasoning: "Reading from notes throughout and rarely looking up suggests dependence on the script, possibly low confidence.", evidence: "rarely looking up from her notes", marks: 1, markCode: "AO2" },
                  { reasoning: "Speaker B's exact timing implies rehearsal and practiced pacing.", evidence: "finished at exactly the allotted time", marks: 1, markCode: "AO2" },
                  { reasoning: "B's deliberate pauses and varied delivery show she knows her material well enough to perform it, not just read it.", marks: 2, markCode: "AO2" },
                  { reasoning: "Overall the notes contrast an unprepared, nervous delivery with a rehearsed, confident one.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "Speaker A appears under-rehearsed and nervous; Speaker B appears well-prepared and confident, as shown by timing, eye contact and controlled delivery.",
                commonErrors: ["Guessing confidence without citing delivery evidence."],
              },
            },
            {
              id: "el10-u4-delivery-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SPEECH_DELIVERY,
              stem: "Read the examiner's notes on the two deliveries and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify three differences in the two speakers' delivery.", marks: 3 },
                { label: "b", prompt: "Explain the effect of Speaker B's use of pauses and varied voice.", marks: 3 },
                { label: "c", prompt: "Analyse what Speaker A's delivery suggests about her preparation and confidence.", marks: 3 },
                { label: "d", prompt: "Evaluate which delivery would be more persuasive to a live audience and why.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Non-verbal delivery", statement: "Pace, pause, gesture and eye contact shape engagement." },
                  { kind: "context", name: "Confidence cues", statement: "Timing and composure signal preparation." },
                ],
                steps: [
                  { part: "a", reasoning: "Pace: A is fast and quiet; B slows for key points.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Eye contact: A rarely looks up; B engages the audience.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Timing: A finishes thirty seconds early; B finishes exactly on time.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Pauses before new ideas build anticipation and separate points.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "A varied voice prevents monotony and emphasises meaning.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Together they make B's delivery engaging and her statistics memorable.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Finishing early suggests poor pacing and rehearsal.", evidence: "thirty seconds to spare", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Reading notes throughout and little eye contact suggest dependence on the script.", evidence: "rarely looking up from her notes", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The quick, quiet delivery may reflect nervousness, flattening any emphasis.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "B's delivery is far more persuasive because it involves, emphasises and signals confidence.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(1, "d"),
                ],
                finalAnswer: "(a) Pace, eye contact and timing differ. (b) Pauses and vocal variety emphasise and engage. (c) A's early finish and note-reading suggest poor preparation and low confidence. (d) B's delivery is more persuasive.",
                commonErrors: ["Listing differences without effects.", "Assuming fast delivery is confident rather than nervous."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u4-structure-delivery-notes",
      title: "Structure and delivery — notes",
      summary: "Speakers signpost structure with markers; delivery (pace, pause, gesture, eye contact) shapes engagement.",
      sections: [
        { heading: "Key idea", body: "Listeners cannot re-read, so spoken texts need explicit signposting and markers." },
        { heading: "Structure", body: "Openings greet and promise; discourse markers move sections; closings recap." },
        { heading: "Delivery", body: "Pace, pause, vocal variety, gestures and eye contact all affect how the message lands." },
      ],
    },
  },
  // ============================== UNIT 4, LESSON 3 ==============================
  {
    file: "lesson-4-3.ts",
    exportName: "lesson43",
    lesson: {
      id: "el10-u4-lesson-4-3",
      code: "4-3",
      title: "Analysing and Presenting Spoken Language",
      goal: "I CAN analyse spoken language transcripts and plan, deliver and evaluate a formal oral presentation.",
      standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO4", "4EA1 AO5"],
      vocabulary: [
        { term: "Transcript", definition: "A written record of spoken language, including fillers and hesitations." },
        { term: "Hesitation", definition: "A pause or false start showing the speaker is thinking, such as 'um' or 'er'." },
        { term: "Colloquialism", definition: "Informal everyday wording, such as 'kids' or 'rubbish'." },
        { term: "Presentation", definition: "A formal spoken delivery to an audience, often with visual support." },
        { term: "Rehearsal", definition: "Practising a presentation before delivery to improve timing and confidence." },
        { term: "Self-evaluation", definition: "Reviewing one's own performance to identify strengths and improvements." },
      ],
      concepts: [
        {
          id: "el10-u4-transcripts",
          title: "Reading spoken language transcripts",
          skill: "Analyse how transcripts represent speech, including fillers, hesitations and colloquialisms.",
          sections: [
            {
              heading: "What transcripts show",
              body: "A **transcript** is a written record of speech. Unlike edited writing, it preserves **fillers** ('um', 'er'), **hesitations** ('I was, I dunno'), **repetition** ('like, really hard') and **false starts**. These features are not mistakes; they are evidence of how speech is actually produced.",
            },
            {
              heading: "Spoken versus written features",
              body: "Speech tends to be **spontaneous**, **context-dependent** and **interactive**: speakers respond to listeners, use pronouns freely, and rely on shared context. Writing is planned, explicit and self-contained. Colloquialisms ('kids', 'rubbish', 'loads') mark informal spoken register.",
            },
            {
              heading: "Speaker labels and turns",
              body: "Transcripts label turns ('Interviewer:', 'Guest:') so readers can track who speaks. Analyzing a transcript means noting **who** speaks, **what** they say, and **how** the features (fillers, colloquialisms, repetition) shape tone and meaning.",
            },
          ],
          keyFormulas: [
            { name: "Filler", statement: "'um', 'er', 'like' — marks thinking time in spontaneous speech." },
            { name: "Hesitation", statement: "False starts and pauses showing the speaker is formulating ideas." },
            { name: "Colloquialism", statement: "Informal spoken wording such as 'kids' or 'loads'." },
          ],
          workedExample: {
            problem: "How does the interviewer's opening question in the podcast transcript reveal spontaneous speech?",
            solution: "'So, um, how did you start writing?' contains the filler 'um', showing the interviewer is thinking in real time rather than reading a script. The short, direct question is typical of conversational interview style. The guest's answer is even more revealing: 'I was, I dunno, maybe eleven?' shows a false start and self-correction, features impossible in planned writing but natural in speech.",
          },
          questions: [
            {
              id: "el10-u4-transcripts-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: SPEECH_TRANSCRIPT,
              stem: "What does the word 'um' in the interviewer's first question indicate?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The interviewer is reading from a script" },
                  { id: "b", text: "The interviewer is hesitating or thinking" },
                  { id: "c", text: "The interviewer is angry" },
                  { id: "d", text: "The interviewer is formal" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Filler", statement: "A word marking thinking time in spontaneous speech." }],
                steps: [{ reasoning: "'um' is a hesitation showing the speaker is formulating the question.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** The interviewer is hesitating or thinking.",
                commonErrors: ["Treating 'um' as a scripted or formal feature."],
              },
            },
            {
              id: "el10-u4-transcripts-q2",
              difficulty: "core",
              totalMarks: 2,
              extract: SPEECH_TRANSCRIPT,
              stem: "Explain the effect of the guest's false start 'I was, I dunno, maybe eleven?' in the transcript.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "False start", statement: "A speaker begins, abandons and restarts an utterance." }],
                steps: [
                  { reasoning: "The false start shows the guest is recalling the memory in real time, making the answer feel honest and spontaneous.", evidence: "I was, I dunno, maybe eleven?", marks: 1, markCode: "AO2" },
                  { reasoning: "It contrasts with polished writing, where such hesitation would be edited out.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The false start makes the guest sound genuine and unscripted, as real speech is.",
                commonErrors: ["Calling it an error rather than a natural spoken feature."],
              },
            },
            {
              id: "el10-u4-transcripts-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: SPEECH_TRANSCRIPT,
              stem: "Identify three features of informal spoken language in the guest's final answer and explain their effect.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Colloquial register", statement: "Informal wording marks casual spoken language." }],
                steps: [
                  { reasoning: "Colloquialisms: 'just write every day', 'loads', 'rubbish' are informal.", evidence: "just write every day, even if it's rubbish", marks: 1, markCode: "AO2" },
                  { reasoning: "The filler 'Erm' at the start shows thinking time.", evidence: "Erm, just write every day", marks: 1, markCode: "AO2" },
                  { reasoning: "The emphatic 'like, way more' is informal intensification typical of speech.", evidence: "like, way more than you think", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Colloquialisms, fillers and emphatic informal phrasing create a friendly, accessible tone.",
                commonErrors: ["Identifying features without explaining their effect on tone."],
              },
            },
            {
              id: "el10-u4-transcripts-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SPEECH_TRANSCRIPT,
              stem: "Analyse how the transcript shows the difference between spontaneous speech and planned writing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Spontaneity", statement: "Speech contains hesitations and self-correction absent from writing." },
                  { kind: "context", name: "Spoken vs written", statement: "Speech is interactive and unrehearsed; writing is planned." },
                ],
                steps: [
                  { reasoning: "Fillers and hesitations ('um', 'I dunno', 'Erm') show real-time formulation impossible in edited writing.", evidence: "So, um, how did you start writing?", marks: 1, markCode: "AO2" },
                  { reasoning: "False starts and repetition ('like, really hard') reveal thinking aloud rather than a finished text.", evidence: "Yeah, at first, like, really hard", marks: 1, markCode: "AO2" },
                  { reasoning: "The guest's quoted speech ('keep going') shows direct, informal reporting typical of conversation.", evidence: "my teacher said, 'keep going'", marks: 1, markCode: "AO2" },
                  { reasoning: "Colloquialisms ('rubbish', 'loads') mark the casual register of speech.", marks: 1, markCode: "AO2" },
                  { reasoning: "The overall impression is of two people thinking together, not a polished written exchange.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "Fillers, false starts, repetition and colloquialisms mark the transcript as spontaneous speech, unlike planned writing.",
                commonErrors: ["Treating spoken features as errors rather than evidence of spontaneity."],
              },
            },
            {
              id: "el10-u4-transcripts-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: SPEECH_TRANSCRIPT,
              stem: "How do the speaker labels ('Interviewer:', 'Guest:') and turn-taking in the transcript shape the reader's understanding? What might be lost in transcription?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "convention", name: "Turn-taking", statement: "Transcripts label speakers to show who holds the floor." },
                  { kind: "context", name: "Transcription limits", statement: "Written records cannot fully capture delivery." },
                ],
                steps: [
                  { reasoning: "Labels make clear who asks and who answers, so the reader can track the exchange.", evidence: "Interviewer:", marks: 1, markCode: "AO2" },
                  { reasoning: "The alternating short questions and longer answers show an interview format, not a monologue.", marks: 1, markCode: "AO2" },
                  { reasoning: "What is lost: tone of voice, pace, pauses, gesture and facial expression — all part of the original speech.", marks: 2, markCode: "AO2" },
                  { reasoning: "The transcript preserves words but not performance, so analysis must infer delivery from features like fillers.", marks: 1, markCode: "AO2" },
                  { reasoning: "This is why spoken-language analysis focuses on word choice and fillers as evidence of delivery.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "Labels reveal the interview structure; transcription preserves words but loses tone, pace and gesture, which must be inferred.",
                commonErrors: ["Assuming the transcript captures everything about the speech."],
              },
            },
            {
              id: "el10-u4-transcripts-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SPEECH_TRANSCRIPT,
              stem: "Read the podcast transcript and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two features of spontaneous speech in the guest's first answer.", marks: 2 },
                { label: "b", prompt: "Explain how the guest's language creates a friendly, approachable tone.", marks: 3 },
                { label: "c", prompt: "Analyse how the interviewer's questions shape the guest's responses.", marks: 3 },
                { label: "d", prompt: "Evaluate what a transcript cannot show about this conversation.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Spontaneous features", statement: "Fillers, false starts and colloquialisms mark unrehearsed speech." },
                  { kind: "context", name: "Transcription limits", statement: "Written records capture words, not full performance." },
                ],
                steps: [
                  { part: "a", reasoning: "False start: 'I was, I dunno, maybe eleven?'", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Repetition/emphasis: 'like, really hard'.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Colloquialisms ('rubbish', 'loads') make the guest sound relaxed and honest.", evidence: "it was rubbish — honestly, proper rubbish", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Self-deprecating honesty ('proper rubbish') builds rapport with listeners.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Direct quoted speech ('keep going') adds vivid, personal detail.", evidence: "my teacher said, 'keep going'", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Short, open questions ('how did you start', 'was it difficult') invite long, personal answers.", evidence: "Was it difficult?", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The interviewer prompts with 'and how do you fund it' style follow-ups that keep the guest talking.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The neutral, non-leading questions let the guest's voice dominate the transcript.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The transcript cannot show tone of voice, pace, pauses, gesture or facial expression.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "It also cannot show the listeners' reactions or the original audio's emphasis.", marks: 1, markCode: "AO2" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) False start and repetition. (b) Colloquialisms, self-deprecating honesty and quoted speech create approachability. (c) Short open questions invite personal, extended answers. (d) Transcripts lose tone, pace, gesture and listener reaction.",
                commonErrors: ["Ignoring what transcription cannot capture.", "Treating fillers as errors."],
              },
            },
          ],
        },
        {
          id: "el10-u4-presentation",
          title: "Delivering a formal oral presentation",
          skill: "Plan, deliver and evaluate a formal presentation to a live audience.",
          sections: [
            {
              heading: "Planning a presentation",
              body: "A good presentation starts with **clear objectives**: what should the audience know or feel by the end? Choose a **structure** (introduction, three points, conclusion), prepare **visual support** that aids rather than distracts, and **rehearse** to check timing. Aim for the allotted time, not under or over.",
            },
            {
              heading: "Engaging the audience",
              body: "Engagement comes from **direct address**, **rhetorical questions**, **anecdotes** and **varying pace and voice**. Look at the audience, use gestures, and pause before key points. Respond to the room: if listeners look confused, slow down or clarify. The plastic-pollution speech shows how signposting and a statistic on a slide work together.",
            },
            {
              heading: "Evaluating your own delivery",
              body: "After delivering, **self-evaluate**: Did I finish on time? Did I use signposting? Did I make eye contact? Did the audience respond? Use criteria such as clarity, engagement, timing and structure. Recording yourself or getting feedback helps identify improvements for next time.",
            },
          ],
          keyFormulas: [
            { name: "Presentation structure", statement: "Introduction, three signposted points, conclusion and recap." },
            { name: "Timing", statement: "Rehearse to finish at exactly the allotted time." },
            { name: "Engagement", statement: "Direct address, rhetorical questions, varied delivery and eye contact." },
          ],
          workedExample: {
            problem: "A student finishes a five-minute presentation in three minutes with no eye contact. What should they evaluate and improve?",
            solution: "The student should note three problems: (1) finishing early suggests too little content or poor pacing — add depth or slow down; (2) no eye contact disengages the audience — practise looking up from notes; (3) the short length suggests the structure was too thin — expand each of the three points. For next time, rehearse aloud with a timer, mark signposts in the script, and record a practice run to check delivery.",
          },
          questions: [
            {
              id: "el10-u4-presentation-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the first step in planning a good presentation?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Choosing a costume" },
                  { id: "b", text: "Deciding what the audience should know or feel by the end" },
                  { id: "c", text: "Writing as much as possible" },
                  { id: "d", text: "Practising gestures only" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Planning", statement: "Clear objectives come before content and delivery." }],
                steps: [{ reasoning: "Defining the audience outcome shapes everything else in the presentation.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** Deciding the audience outcome.",
                commonErrors: ["Starting with content before clarifying purpose."],
              },
            },
            {
              id: "el10-u4-presentation-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain why rehearsing a presentation is important.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Rehearsal", statement: "Practice improves timing, confidence and delivery." }],
                steps: [
                  { reasoning: "Rehearsal reveals timing problems before the real audience, so the speaker can adjust content.", marks: 1, markCode: "AO5" },
                  { reasoning: "It builds familiarity with the material, reducing dependence on notes and increasing confidence.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Rehearsal checks timing, builds confidence and reduces reliance on notes.",
                commonErrors: ["Saying rehearsal is only about memorising words."],
              },
            },
            {
              id: "el10-u4-presentation-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe three techniques a speaker can use to engage a live audience during a presentation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Audience engagement", statement: "Techniques that involve listeners keep attention." }],
                steps: [
                  { reasoning: "Direct address ('you') makes listeners feel personally involved.", marks: 1, markCode: "AO5" },
                  { reasoning: "Rhetorical questions prompt listeners to think and respond mentally.", marks: 1, markCode: "AO5" },
                  { reasoning: "Varying pace, voice and using gestures prevents monotony and holds attention.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Direct address, rhetorical questions and varied delivery engage the audience.",
                commonErrors: ["Listing techniques without explaining their effect."],
              },
            },
            {
              id: "el10-u4-presentation-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A speaker finishes a five-minute presentation in three minutes and rarely looks up from their notes. Analyse what this suggests about the delivery and what should be improved.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Delivery cues", statement: "Timing and eye contact signal preparation and engagement." },
                  { kind: "skill", name: "Self-evaluation", statement: "Identifying weaknesses guides improvement." },
                ],
                steps: [
                  { reasoning: "Finishing early suggests the content was too thin or the pacing too fast; more depth or slower delivery is needed.", marks: 1, markCode: "AO5" },
                  { reasoning: "Rarely looking up breaks eye contact, making the delivery feel distant and disengaging the audience.", marks: 1, markCode: "AO5" },
                  { reasoning: "Dependence on notes suggests under-rehearsal; the speaker should practise until the structure is internalised.", marks: 1, markCode: "AO5" },
                  { reasoning: "The short length also suggests the promised structure may not have been fully delivered.", marks: 1, markCode: "AO5" },
                  { reasoning: "Improvements: add depth to each point, rehearse with a timer, practise looking up, and record a run to check engagement.", marks: 1, markCode: "AO5" },
                ],
                levels: bands(5),
                finalAnswer: "The delivery suggests thin content, poor pacing and low confidence; the speaker should deepen points, rehearse timing and practise eye contact.",
                commonErrors: ["Criticising without offering concrete improvements."],
              },
            },
            {
              id: "el10-u4-presentation-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain how a speaker should respond if the audience looks confused during a presentation. Use examples of adjustments they could make.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Audience awareness", statement: "Speakers should adapt delivery to audience reactions." },
                  { kind: "technique", name: "Clarification", statement: "Slowing down, repeating and simplifying aid understanding." },
                ],
                steps: [
                  { reasoning: "Slow the pace and pause; confusion often comes from information delivered too quickly.", marks: 1, markCode: "AO5" },
                  { reasoning: "Repeat or rephrase the key point in simpler terms rather than pressing on.", marks: 1, markCode: "AO5" },
                  { reasoning: "Use an example or analogy to make an abstract point concrete.", marks: 1, markCode: "AO5" },
                  { reasoning: "Check understanding with a rhetorical question or a brief pause for questions.", marks: 1, markCode: "AO5" },
                  { reasoning: "Adjusting to the room shows confidence and responsiveness, not weakness.", marks: 1, markCode: "AO5" },
                  { reasoning: "A speaker who monitors the audience delivers a more effective presentation than one who ignores reactions.", marks: 1, markCode: "AO5" },
                ],
                levels: bands(6),
                finalAnswer: "Slow down, rephrase, use examples and check understanding; adapting to confusion shows confidence and improves delivery.",
                commonErrors: ["Ignoring audience cues or continuing regardless."],
              },
            },
            {
              id: "el10-u4-presentation-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "You have been asked to give a five-minute presentation to your class on a topic of your choice. Plan and evaluate your approach.",
              parts: [
                { label: "a", prompt: "State the objective you would set for the audience.", marks: 2 },
                { label: "b", prompt: "Describe the structure you would use, including signposting.", marks: 3 },
                { label: "c", prompt: "Explain three techniques you would use to engage the audience.", marks: 3 },
                { label: "d", prompt: "Describe how you would evaluate your own delivery afterwards.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Presentation planning", statement: "Objectives, structure, engagement and evaluation form a complete approach." },
                  { kind: "technique", name: "Delivery", statement: "Engagement techniques involve the live audience." },
                ],
                steps: [
                  { part: "a", reasoning: "A clear objective, e.g. 'by the end the class will understand three causes of climate change'.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "The objective must be audience-focused and measurable.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Introduction with greeting and topic; three signposted points; conclusion with recap.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Signposting such as 'first', 'now', 'finally' guides listeners.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "The structure mirrors the plastic-pollution model: promise, deliver, recap.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Direct address and rhetorical questions to involve listeners.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Varied pace, voice and gestures to prevent monotony.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Visual support (slides/images) that aids rather than distracts.", marks: 1, markCode: "AO5" },
                  { part: "d", reasoning: "Check timing, signposting, eye contact and audience response against criteria.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Use feedback or a recording to identify improvements for next time.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(3, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) A clear audience outcome. (b) Introduction, three signposted points, conclusion and recap. (c) Direct address, rhetorical questions, varied delivery and visuals. (d) Evaluate timing, structure, engagement and response; use feedback to improve.",
                commonErrors: ["Planning content without an audience objective.", "Forgetting to evaluate after delivery."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u4-transcript-presentation-notes",
      title: "Transcripts and presentations — notes",
      summary: "Transcripts preserve spoken features (fillers, false starts, colloquialisms); presentations need objectives, structure, engagement and evaluation.",
      sections: [
        { heading: "Key idea", body: "Spoken language is spontaneous and interactive; transcripts capture words but not full performance." },
        { heading: "Spoken features", body: "Fillers, hesitations, repetition and colloquialisms are normal features of speech, not errors." },
        { heading: "Presentations", body: "Plan objectives, signpost structure, engage with direct address and varied delivery, then self-evaluate." },
      ],
    },
  },
];
