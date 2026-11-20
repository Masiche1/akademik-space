import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "theatre-u1-lesson-1-2",
  code: "1-2",
  title: "Voice, Speech and Characterisation",
  goal: "I CAN use voice, speech and physicality to create believable characters and communicate meaning.",
  standards: [
    "Performance",
    "Voice",
  ],
  vocabulary: [
    { term: "Vocal projection", definition: "The ability to be heard clearly by the entire audience." },
    { term: "Articulation", definition: "The clarity with which words are pronounced." },
    { term: "Character voice", definition: "A distinctive vocal quality that identifies a character." },
    { term: "Subtext", definition: "The meaning beneath the spoken words — what characters really mean." },
    { term: "Dialect", definition: "A regional or social variety of language with distinct pronunciation and vocabulary." },
    { term: "Physicality", definition: "The way a character's body posture, movement and gesture express personality." },
  ],
  concepts: [
    {
      id: "theatre-u1-voice-technique",
      title: "Voice and speech technique",
      skill: "Develop vocal projection, articulation and character voice for effective stage performance.",
      lesson: {
        sections: [
          {
            heading: "Vocal basics",
            body: "Stage voice requires **projection** — being heard without shouting; **articulation** — clear consonants and vowels; and **breath support** — sustained phrases without gasping. Practice exercises: humming, lip trills, tongue twisters, reading aloud with exaggerated articulation. The voice is an instrument that needs training.",
          },
          {
            heading: "Character voice",
            body: "A character's voice should reflect their personality, background and emotional state: pitch (high/low), pace (fast/slow), volume (loud/soft), and quality (smooth/gravelly/bright). A nervous character speaks quickly and softly; an authoritative one speaks slowly and firmly. Voice choices reveal character before words are understood.",
          },
          {
            heading: "Dialect and accent",
            body: "Dialect and accent communicate social and regional identity. They should be consistent but not caricatured — the goal is believable characterisation, not mockery. Practice dialects by listening to recordings, noting vowel sounds and speech rhythms. Accuracy matters less than consistency and respect.",
          },
        ],
        keyFormulas: [
          { name: "Vocal elements", statement: "Projection + articulation + breath = stage voice" },
          { name: "Character voice", statement: "Pitch + pace + volume + quality = character identity" },
        ],
        workedExample: {
          problem: "A character is described as 'anxious and insecure'. How should their voice reflect this?",
          solution: "Higher pitch, faster pace, softer volume, slight tremor or breathiness. Words may trail off or be rushed. Pauses may be filled with 'um' or repetition. The voice should sound like someone trying to sound confident but failing.",
        },
      },
      questions: [
        {
          id: "theatre-u1-voice-technique-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Vocal projection in theatre refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking very loudly" },
              { id: "b", text: "Being heard clearly by the entire audience" },
              { id: "c", text: "Using a microphone" },
              { id: "d", text: "Speaking in a dialect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vocal projection", statement: "The ability to be heard clearly without shouting." },
            ],
            steps: [
              { reasoning: "Projection is being heard clearly by the whole audience through technique, not volume alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Being heard clearly by the entire audience",
            commonErrors: [
              "Confusing projection (clear audibility) with shouting (volume).",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two vocal elements that can characterise a role.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character voice", statement: "Pitch, pace, volume and quality communicate personality." },
            ],
            steps: [
              { reasoning: "Pitch — high or low voice suggests age, gender, emotional state.", marks: 1, markCode: "M" },
              { reasoning: "Pace — fast or slow speech suggests nervousness, confidence, thoughtfulness.", marks: 1, markCode: "M" },
              { reasoning: "Volume and quality — loud/soft, smooth/gravelly communicate authority or vulnerability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pitch, pace, volume and quality create character voice.",
            commonErrors: [
              "Using only words to characterise without vocal choices.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between subtext and text in dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "The meaning beneath spoken words — what characters really mean." },
            ],
            steps: [
              { reasoning: "Text is what is literally said; subtext is what is really meant.", marks: 1, markCode: "M" },
              { reasoning: "Characters rarely say what they truly feel — subtext creates dramatic tension.", marks: 1, markCode: "M" },
              { reasoning: "Actors must play the subtext — the gap between words and meaning is where drama lives.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: great acting plays what's beneath, not just what's said.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subtext is the hidden meaning beneath spoken words — the source of dramatic tension.",
            commonErrors: [
              "Playing only the literal words without subtextual meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described characterisation",
            author: "Written for Akademik Space",
            source: "Characterisation analysis",
            text: "A performer plays an elderly, proud but lonely character: voice is slow and low with occasional tremor; posture is upright but slightly stooped; movements are deliberate and economical; eyes are mostly downcast but lift when addressed.",
          },
          stem: "Analyse a described characterisation.",
          parts: [
            { label: "a", prompt: "Identify two vocal or physical choices made.", marks: 2 },
            { label: "b", prompt: "Explain how they create character.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Characterisation", statement: "Vocal and physical choices create believable, layered characters." },
            ],
            steps: [
              { part: "a", reasoning: "Vocal choices (slow, low, tremor) and physical choices (stooped posture, downcast eyes) — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Slow low voice suggests age and gravity; stooped posture shows pride tempered by frailty; downcast eyes suggest loneliness — choices create complex character.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Character creation explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add a specific gesture or vocal tic for memorability; or vary pace slightly for emotional shifts.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Vocal + physical choices. (b) Complex character through layered choices. (c) Add specific detail or variation.",
            commonErrors: [
              "Describing choices without analysing their character effect.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Articulation in stage voice refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking as loudly as possible" },
              { id: "b", text: "The clarity with which words are pronounced" },
              { id: "c", text: "The speed of speech" },
              { id: "d", text: "The emotional tone of words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Articulation", statement: "The clarity with which words are pronounced." },
            ],
            steps: [
              { reasoning: "Articulation is precise pronunciation of consonants and vowels so words are understood.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The clarity with which words are pronounced",
            commonErrors: [
              "Confusing articulation (clarity) with volume or pace.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Breath support in stage voice allows a performer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak without breathing" },
              { id: "b", text: "Sustain phrases without gasping and maintain vocal control" },
              { id: "c", text: "Speak faster" },
              { id: "d", text: "Avoid using a microphone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Breath support", statement: "Controlled breathing that sustains phrases and vocal control." },
            ],
            steps: [
              { reasoning: "Breath support powers long phrases and steady tone without audible gasping.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustain phrases without gasping and maintain vocal control",
            commonErrors: [
              "Thinking breath support is only about volume, not phrase sustain.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A character's voice is most effectively built from which combination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pitch, pace, volume and quality" },
              { id: "b", text: "Height, weight, age and costume" },
              { id: "c", text: "Accent, dialect, microphone and lighting" },
              { id: "d", text: "Speed, volume and posture only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character voice", statement: "Pitch + pace + volume + quality = character identity." },
            ],
            steps: [
              { reasoning: "The four vocal variables — pitch, pace, volume, quality — together create a distinctive character voice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Pitch, pace, volume and quality",
            commonErrors: [
              "Reducing character voice to a single vocal feature.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The main purpose of using dialect in a performance is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impress the audience with accent skill" },
              { id: "b", text: "Communicate a character's regional or social identity believably and consistently" },
              { id: "c", text: "Make dialogue harder to understand" },
              { id: "d", text: "Replace characterisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dialect purpose", statement: "Dialect communicates social/regional identity; consistency and respect matter more than perfect accuracy." },
            ],
            steps: [
              { reasoning: "Dialect signals who the character is socially and regionally, and must stay consistent and respectful.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Communicate a character's regional or social identity believably and consistently",
            commonErrors: [
              "Using dialect as caricature or display rather than characterisation.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Subtext' in dialogue refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The words written in the script" },
              { id: "b", text: "The meaning beneath the spoken words — what characters really mean" },
              { id: "c", text: "The stage directions" },
              { id: "d", text: "The volume of speech" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "The hidden meaning beneath spoken words." },
            ],
            steps: [
              { reasoning: "Subtext is what characters really mean, often contradicting their literal words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The meaning beneath the spoken words — what characters really mean",
            commonErrors: [
              "Confusing subtext with the literal script text.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A character described as 'nervous and insecure' would most likely speak:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slowly, loudly and with deep resonance" },
              { id: "b", text: "Quickly, softly, with a higher pitch and possible breathiness" },
              { id: "c", text: "In a deep, slow monotone" },
              { id: "d", text: "With perfect projection and slow articulation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vocal characterisation", statement: "Pitch, pace, volume and quality reflect emotional state." },
            ],
            steps: [
              { reasoning: "Nervousness reads as faster pace, softer volume, higher pitch and breathy quality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quickly, softly, with a higher pitch and possible breathiness",
            commonErrors: [
              "Giving nervous characters loud, slow, confident voices.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe three vocal basics required for effective stage voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocal basics", statement: "Projection, articulation and breath support underpin stage voice." },
            ],
            steps: [
              { reasoning: "Projection — being heard clearly by the whole audience without shouting.", marks: 1, markCode: "M" },
              { reasoning: "Articulation — clear consonants and vowels so every word is understood.", marks: 1, markCode: "M" },
              { reasoning: "Breath support — sustaining phrases steadily without gasping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Projection, articulation and breath support are the foundations of stage voice.",
            commonErrors: [
              "Listing only volume, ignoring articulation and breath.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how the voice of an 'authoritative leader' character might be shaped.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character voice design", statement: "Pitch, pace, volume and quality encode personality." },
            ],
            steps: [
              { reasoning: "Lower pitch suggests weight, experience and authority.", marks: 1, markCode: "M" },
              { reasoning: "Slower pace with deliberate pauses suggests control and confidence.", marks: 1, markCode: "M" },
              { reasoning: "Firm, projected volume fills the space without shouting; clear quality (smooth or resonant) adds gravitas.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the voice should sound like someone whose words carry weight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An authoritative voice uses low pitch, slow deliberate pace, firm projection and resonant quality.",
            commonErrors: [
              "Making the voice loud only, without pitch and pace choices.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described vocal characterisation",
            author: "Written for Akademik Space",
            source: "Voice analysis",
            text: "A performer plays a retired general: voice is low and measured with a slight rasp; pace is slow with long pauses before key lines; volume is moderate but fills the room; consonants are sharply articulated; when angry, the pitch rises and the pace doubles.",
          },
          stem: "Analyse a described vocal characterisation.",
          parts: [
            { label: "a", prompt: "Identify two vocal choices made.", marks: 2 },
            { label: "b", prompt: "Explain how they create character.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vocal analysis", statement: "Pitch, pace, volume, quality and articulation encode character." },
            ],
            steps: [
              { part: "a", reasoning: "Low rasping voice, slow pace, measured pauses, sharp articulation — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low measured voice suggests age and discipline; pauses create authority; sharp articulation suggests military precision; the anger shift shows controlled volatility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Character creation explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could vary the quality (breathiness) for vulnerability, or layer a dialect for regional identity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Low rasp, slow pace, pauses, sharp articulation. (b) Disciplined authority with controlled volatility. (c) Add quality variation or dialect.",
            commonErrors: [
              "Listing vocal features without connecting them to character meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give an example of how subtext might work in a line of dialogue and explain how an actor would play it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Playing subtext", statement: "Actors play what is meant beneath what is said." },
            ],
            steps: [
              { reasoning: "Example: 'I'm fine, really' said while avoiding eye contact and folding arms — the words say fine, the body says hurt.", marks: 1, markCode: "M" },
              { reasoning: "The actor plays the subtext — hurt and defensiveness — through vocal hesitation and physical contradiction.", marks: 1, markCode: "M" },
              { reasoning: "Playing only the literal words would produce a flat, dishonest performance.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the gap between text and subtext is where dramatic tension lives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subtext is played through vocal and physical choices that contradict or complicate the literal words.",
            commonErrors: [
              "Playing lines literally with no awareness of underlying meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A performer must use a dialect for a character. Outline an ethical and effective preparation process.",
          parts: [
            { label: "a", prompt: "Describe the research and listening stage.", marks: 2 },
            { label: "b", prompt: "Describe how to achieve consistency.", marks: 2 },
            { label: "c", prompt: "Explain how to avoid caricature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialect work", statement: "Research, consistency and respect produce believable dialect." },
            ],
            steps: [
              { part: "a", reasoning: "Listen to recordings of native speakers; note vowel sounds, speech rhythm and characteristic words.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Research the social background so the dialect serves the character, not just the accent.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Practise the same features (vowels, rhythm, stress) every time so the accent is stable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check consistency across the whole performance, not just key lines.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Avoid exaggerating features into mockery; keep the character's dignity and complexity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Accuracy matters less than consistency and respect — convincingly argued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prepare dialect through listening research, consistent features and respectful, non-caricatured delivery.",
            commonErrors: [
              "Copying an accent superficially or exaggerating it for laughs.",
            ],
          },
        },
        {
          id: "theatre-u1-voice-technique-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the following practice plan for improving projection and articulation: 'Shout lines at maximum volume daily.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocal training evaluation", statement: "Effective vocal practice builds technique, not just volume." },
            ],
            steps: [
              { reasoning: "Shouting is not projection — projection is clear audibility through breath support and articulation.", marks: 1, markCode: "M" },
              { reasoning: "Daily maximum-volume shouting risks vocal strain and does not train diction.", marks: 1, markCode: "M" },
              { reasoning: "Better practice: breath exercises, humming, lip trills, tongue twisters and reading aloud with exaggerated articulation.", marks: 1, markCode: "R" },
              { reasoning: "The plan addresses volume but neglects the technique that creates real projection.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: the plan is ineffective; targeted vocal exercises are needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The plan is ineffective — shouting strains the voice; projection requires breath support and articulation exercises.",
            commonErrors: [
              "Confusing loudness with projection.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u1-characterisation",
      title: "Characterisation and physicality",
      skill: "Develop physical and vocal characterisation that reveals personality, history and emotional state.",
      lesson: {
        sections: [
          {
            heading: "Building a character",
            body: "Characterisation begins with analysis: who is this person? What's their background, desires, fears? Then physicalise: how does this person stand, move, gesture? How do they speak? The body reveals what words cannot — a character's physicality should be consistent and revealing.",
          },
          {
            heading: "Physical vocabulary",
            body: "Develop a physical vocabulary: different characters walk differently, gesture differently, occupy space differently. A nervous character fidgets; a confident one takes up space; a shy one makes themselves small. These physical choices should be specific and consistent — the audience learns to read them.",
          },
          {
            heading: "Layering character",
            body: "Great characterisation has layers: surface behaviour, underlying motivation, hidden depths. A character might smile while their eyes show fear; speak confidently while their hands tremble. Contradictions between physical channels create complexity — the body can say what the face hides.",
          },
        ],
        keyFormulas: [
          { name: "Characterisation process", statement: "Analysis → physicalisation → consistency → layering" },
          { name: "Physical vocabulary", statement: "Walk + gesture + space + voice = character identity" },
        ],
        workedExample: {
          problem: "A character is 'a former athlete now living with chronic pain'. How might their physicality reflect this?",
          solution: "They still move with athletic grace but hesitate before actions; their posture is upright but guarded; they favour one side subtly; their voice is strong but occasionally catches with pain. The contrast between former capability and current limitation creates pathos.",
        },
      },
      questions: [
        {
          id: "theatre-u1-characterisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Physicality in characterisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The actor's appearance" },
              { id: "b", text: "How a character's body posture, movement and gesture express personality" },
              { id: "c", text: "The costume design" },
              { id: "d", text: "The stage lighting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physicality", statement: "The way body posture, movement and gesture express character." },
            ],
            steps: [
              { reasoning: "Physicality is how body language expresses character personality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How a character's body posture, movement and gesture express personality",
            commonErrors: [
              "Confusing physicality (body language) with appearance or costume.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two physical choices that could characterise a shy, insecure person.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical characterisation", statement: "Small movements, averted gaze, closed posture suggest shyness." },
            ],
            steps: [
              { reasoning: "Closed or protective posture — arms crossed, shoulders hunched.", marks: 1, markCode: "M" },
              { reasoning: "Small, hesitant movements — fidgeting, avoiding eye contact.", marks: 1, markCode: "M" },
              { reasoning: "Minimal space occupation — making themselves small in the environment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closed posture, small movements and minimal space show shyness.",
            commonErrors: [
              "Using only facial expression without full physical commitment.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why characterisation should be consistent yet layered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Character consistency", statement: "Consistency makes character believable; layering adds depth and complexity." },
            ],
            steps: [
              { reasoning: "Consistency — the same physical and vocal choices throughout make the character believable.", marks: 1, markCode: "M" },
              { reasoning: "Layering — contradictions between channels (smiling eyes, trembling hands) create depth.", marks: 1, markCode: "M" },
              { reasoning: "Without consistency, character is confusing; without layering, character is flat.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: believable characters are both consistent and complex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistency makes character believable; layering adds depth and complexity.",
            commonErrors: [
              "Changing physical choices randomly or keeping them too uniform.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a performer's characterisation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating characterisation", statement: "Assess consistency, physical vocabulary and layering." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. consistent choices, clear physical vocabulary, layered complexity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. inconsistent choices, generic physicality, no layering — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with character effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests establishing consistent physical vocabulary, adding layered contradictions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate characterisation by consistency, vocabulary and layering.",
            commonErrors: [
              "Judging characterisation only by emotional intensity, not physical coherence.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Physical vocabulary' in characterisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The words a character speaks" },
              { id: "b", text: "The specific ways different characters walk, gesture, occupy space and move" },
              { id: "c", text: "The costume and makeup choices" },
              { id: "d", text: "The lighting design" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical vocabulary", statement: "The distinct physical habits — walk, gesture, space — that identify a character." },
            ],
            steps: [
              { reasoning: "Physical vocabulary is the set of repeated physical habits that make each character distinctive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The specific ways different characters walk, gesture, occupy space and move",
            commonErrors: [
              "Confusing physical vocabulary with spoken language or costume.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Layering' a character means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding more costumes" },
              { id: "b", text: "Creating contradictions between physical channels — e.g. smiling while the eyes show fear" },
              { id: "c", text: "Speaking more loudly" },
              { id: "d", text: "Moving faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Layering", statement: "Contradictions between surface behaviour, motivation and hidden depth." },
            ],
            steps: [
              { reasoning: "Layering adds depth by letting different physical channels contradict each other.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creating contradictions between physical channels — e.g. smiling while the eyes show fear",
            commonErrors: [
              "Confusing layering (complexity) with simply adding more actions.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a character's physical choices remain consistent throughout a performance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make rehearsal easier" },
              { id: "b", text: "Because consistency makes the character believable and readable to the audience" },
              { id: "c", text: "Because directors require it" },
              { id: "d", text: "To avoid improvisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Character consistency", statement: "Repeated physical choices build a believable, readable character." },
            ],
            steps: [
              { reasoning: "The audience learns to read a character through repeated physical habits; inconsistency breaks belief.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because consistency makes the character believable and readable to the audience",
            commonErrors: [
              "Changing physical choices randomly between scenes.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A confident character is most likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make themselves small and avoid eye contact" },
              { id: "b", text: "Take up space, move with open gestures and hold eye contact" },
              { id: "c", text: "Fidget constantly" },
              { id: "d", text: "Speak very quietly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Confidence physicality", statement: "Confidence occupies space openly; insecurity makes itself small." },
            ],
            steps: [
              { reasoning: "Confident characters expand into space with open gestures and direct gaze.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Take up space, move with open gestures and hold eye contact",
            commonErrors: [
              "Playing confidence only through loud speech, not body language.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Characterisation should begin with analysis of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The costume and props only" },
              { id: "b", text: "Who the person is — background, desires and fears" },
              { id: "c", text: "The stage lighting" },
              { id: "d", text: "The audience's expectations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Character analysis first", statement: "Physical choices must grow from understanding who the character is." },
            ],
            steps: [
              { reasoning: "Physicalisation follows analysis of background, desires and fears — otherwise choices are arbitrary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Who the person is — background, desires and fears",
            commonErrors: [
              "Starting with external traits before understanding the character.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A contradiction between physical channels — e.g. a smile with fearful eyes — primarily creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusion that should be avoided" },
              { id: "b", text: "Depth and complexity — the body can say what the face hides" },
              { id: "c", text: "A technical error" },
              { id: "d", text: "Comic relief only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Channel contradiction", statement: "Contradictions between body channels create layered, complex characterisation." },
            ],
            steps: [
              { reasoning: "Contradictory channels reveal hidden depths and inner conflict — a hallmark of strong characterisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Depth and complexity — the body can say what the face hides",
            commonErrors: [
              "Treating contradictions as mistakes rather than layers of meaning.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Outline the process of building a character for performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Characterisation process", statement: "Analysis leads to physicalisation, consistency and layering." },
            ],
            steps: [
              { reasoning: "Analyse the character — background, desires, fears, relationships.", marks: 1, markCode: "M" },
              { reasoning: "Physicalise — decide how they stand, move, gesture and speak.", marks: 1, markCode: "M" },
              { reasoning: "Maintain consistency while adding layers of contradiction for depth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analyse, physicalise, stay consistent, then layer contradictions for depth.",
            commonErrors: [
              "Skipping analysis and inventing physicality arbitrarily.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suggest two physical choices that could characterise an elderly person who was once a dancer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical characterisation", statement: "Physical choices should reflect history and current state." },
            ],
            steps: [
              { reasoning: "Retained grace — movements still show trained control and line, but slower and more careful.", marks: 1, markCode: "M" },
              { reasoning: "Hesitation before large movements — a split-second pause acknowledging the body's limits.", marks: 1, markCode: "M" },
              { reasoning: "Possible guarding of joints or favouring one side, contrasted with moments of remembered elegance.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the contrast between past capability and present limitation creates pathos.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Graceful remnants of training, hesitations and guarded joints contrast with remembered elegance.",
            commonErrors: [
              "Playing age only through stooped posture, ignoring the character's history.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q13",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "Described characterisation",
            author: "Written for Akademik Space",
            source: "Characterisation analysis",
            text: "A performer plays a shopkeeper hiding a secret: posture stays upright and hands busy with the till; voice is warm and chatty at normal pace; but when asked about a parcel, the eyes flick once to the shelf and the fingers stop moving for a beat before resuming.",
          },
          stem: "Analyse a described characterisation.",
          parts: [
            { label: "a", prompt: "Identify two layered physical or vocal choices.", marks: 2 },
            { label: "b", prompt: "Explain how the layering creates character.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Layered characterisation", statement: "Surface behaviour plus hidden tells create believable complex characters." },
            ],
            steps: [
              { part: "a", reasoning: "Warm chatty voice vs frozen fingers; busy hands vs eye flick to the shelf — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two choices correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The surface is a friendly shopkeeper; the micro-tells (eye flick, frozen hands) reveal the hidden secret — the audience reads both layers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Layering explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add a vocal tell — a half-beat pause or pitch drop — to match the physical ones.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Vocal warmth vs frozen hands; eye flick tell. (b) Surface friendliness hides a secret readable through contradictions. (c) Add a vocal tell.",
            commonErrors: [
              "Describing surface behaviour only, missing the layered tells.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'consistency yet layering' is a better description of good characterisation than either alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consistency plus layering", statement: "Consistency builds belief; layering builds depth." },
            ],
            steps: [
              { reasoning: "Without consistency the character is confusing — the audience cannot learn to read them.", marks: 1, markCode: "M" },
              { reasoning: "Without layering the character is flat — a single note with no inner life.", marks: 1, markCode: "M" },
              { reasoning: "Together, repeated choices build a stable identity while contradictions reveal hidden depths.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: believable characters are both coherent and complex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistency makes the character readable; layering makes them deep — both are needed.",
            commonErrors: [
              "Seeing consistency and layering as opposites rather than complementary.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A performer must create a character: a teenage boy pretending to be an adult in a job interview.",
          parts: [
            { label: "a", prompt: "Analyse what the character's situation reveals.", marks: 2 },
            { label: "b", prompt: "Suggest physical and vocal choices for the disguise.", marks: 2 },
            { label: "c", prompt: "Explain how to layer the truth beneath the disguise.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Disguise characterisation", statement: "External performance plus hidden truth creates dramatic irony." },
            ],
            steps: [
              { part: "a", reasoning: "The character is insecure, eager to please, and performing a role he doesn't yet inhabit — analysis of desire and fear.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Key tension identified: adult posture forced onto teenage impulses.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical/vocal disguise choices, e.g. over-straight posture, too-deep voice, overly formal gestures that occasionally slip.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Choices are specific and consistent with the disguise concept.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Layering: micro-slips — a cracking voice, fidgeting hands, eyes dropping — reveal the real teenager beneath.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Layering convincingly explains how the audience sees both the act and the truth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analyse the insecurity, physicalise an over-formal disguise, and layer teenage tells beneath it.",
            commonErrors: [
              "Playing only the disguise or only the truth, not the gap between them.",
            ],
          },
        },
        {
          id: "theatre-u1-characterisation-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate this characterisation approach: 'I'll play the angry character by shouting every line and pacing the stage.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characterisation evaluation", statement: "Strong characterisation uses varied physical and vocal channels, not single-note intensity." },
            ],
            steps: [
              { reasoning: "Shouting every line is one-dimensional — it removes contrast and vocal control.", marks: 1, markCode: "M" },
              { reasoning: "Constant pacing is repetitive; anger has stillness, coldness and sudden bursts as well as movement.", marks: 1, markCode: "M" },
              { reasoning: "Better: controlled physical vocabulary — clenched jaw, stillness, sharp gestures, vocal cracks at key moments.", marks: 1, markCode: "R" },
              { reasoning: "The approach mistakes volume and movement for characterisation.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: the plan would produce a flat, exhausting performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ineffective — single-note shouting and pacing lack contrast; varied physical and vocal choices are needed.",
            commonErrors: [
              "Equating emotional intensity with effective characterisation.",
            ],
          },
        },
      ],
    },
  ],
};
