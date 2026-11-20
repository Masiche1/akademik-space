import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mll3-u3-lesson-3-3",
  code: "3-3",
  title: "Writing Speeches and Presentations",
  goal: "I CAN write a speech with a clear structure, rhetorical devices and a call to action, and adapt it for oral delivery.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Speech", definition: "A spoken text designed to inform, persuade or inspire an audience." },
    { term: "Rhetorical question", definition: "A question asked for effect, not to be answered — 'What kind of future do we want?'" },
    { term: "Call to action", definition: "The ending that tells the audience what to do — 'Join us', 'Stand up', 'Act now'." },
    { term: "Direct address", definition: "Speaking directly to the audience — 'you', 'we', 'my friends'." },
    { term: "Oral delivery", definition: "How a speech sounds when spoken — pace, pauses, emphasis." },
  ],
  concepts: [
    {
      id: "mll3-u3-speech-structure",
      title: "Speech structure",
      skill: "Write speeches with hook, body and call to action using rhetorical devices.",
      lesson: {
        sections: [
          {
            heading: "Hook, body, action",
            body: "A speech needs three parts: **hook** (grab attention — a question, story, surprising fact), **body** (your main points with evidence), **call to action** (tell them what to do). Unlike writing, speeches must hold attention — every sentence must earn its place.",
          },
          {
            heading: "Rhetorical devices",
            body: "Speeches use **rhetorical questions** ('What if we could change this?'), **repetition** ('We can. We will. We must.'), **direct address** ('you', 'we'), and **triads** (three-part lists: 'of the people, by the people, for the people'). These make speeches memorable and persuasive.",
          },
          {
            heading: "Writing for the ear",
            body: "Speeches are **heard**, not read. Use **short sentences** for punch, **pauses** for emphasis, and **concrete images** over abstract ideas. Read your speech aloud — if you stumble, the audience will too.",
          },
        ],
        keyFormulas: [
          { name: "Speech formula", statement: "Hook → Body (points + evidence) → Call to action. Use repetition, questions, direct address." },
        ],
        workedExample: {
          problem: "Write a hook for a speech about saving the school garden.",
          solution: "'Every morning, our school garden feeds the birds — but next month, it might feed the bulldozers. Will you let that happen?'",
        },
      },
      questions: [
        {
          id: "mll3-u3-speech-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'call to action' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first sentence" },
              { id: "b", text: "The ending that tells the audience what to do" },
              { id: "c", text: "A type of question" },
              { id: "d", text: "The speech title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Call to action", statement: "The call to action tells the audience what to do next." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): call to action = ending telling audience what to do — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The ending that tells the audience what to do",
          },
        },
        {
          id: "mll3-u3-speech-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "We can fix this. We have the power. We have the will. What we need now is your voice — sign the petition, speak to your neighbours, and make this town listen.",
          },
          stem: "Identify two rhetorical devices in this speech extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Repetition, triads and calls to action make speeches persuasive." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'We can. We have the power. We have the will.' — repetition of 'We' creates momentum.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'sign the petition, speak to your neighbours, and make this town listen' — triad + call to action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition ('We can. We have...') and triad/call to action ('sign... speak... make this town listen').",
          },
        },
        {
          id: "mll3-u3-speech-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why speeches use repetition and rhetorical questions, and how they differ from written essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Oral rhetoric", statement: "Speeches must hold attention — repetition aids memory, questions engage listeners." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): repetition aids memory and builds emotional momentum — listeners can't re-read, so key phrases must stick.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): rhetorical questions engage listeners directly — 'What kind of future do we want?' makes them think.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): unlike essays, speeches need shorter sentences, pauses and direct address — they're heard, not read.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Repetition aids memory and builds momentum; rhetorical questions engage listeners — speeches are heard so they need shorter, punchier, more repetitive language than essays.",
          },
        },
        {
          id: "mll3-u3-speech-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a hook for a speech about protecting the school garden.", marks: 2 },
            { label: "b", prompt: "Write one body point with evidence (why the garden matters).", marks: 1 },
            { label: "c", prompt: "Write a call to action ending.", marks: 1 },
            { label: "d", prompt: "Explain how your speech is written 'for the ear'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech writing", statement: "Hook → evidence → call to action; short sentences and direct address for the ear." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a hook — question, story or surprising fact about the garden.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): attention-grabbing language, not a flat statement.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): a body point with evidence, e.g. 'The garden provides food for wildlife (evidence: 15 bird species recorded).'", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): a call to action, e.g. 'Sign the petition today — let's save our garden.'", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D (Using language): short sentences, direct address ('you', 'we'), no complex clauses — written to be spoken.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Hook. (b) Evidence-backed point. (c) Call to action. (d) Short sentences, direct address — for the ear.",
          },
        },
        {
          id: "mll3-u3-speech-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'hook' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "The opening that grabs the audience's attention" },
              { id: "c", text: "A type of question" },
              { id: "d", text: "The main argument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech hook", statement: "The hook grabs attention — a question, story or surprising fact." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): hook = attention-grabbing opening — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The opening that grabs the audience's attention",
          },
        },
        {
          id: "mll3-u3-speech-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhetorical question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question expecting a factual answer" },
              { id: "b", text: "A question asked for effect, not to be answered" },
              { id: "c", text: "A question in a textbook" },
              { id: "d", text: "A question with no answer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "A rhetorical question is asked for effect, not to be answered." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): rhetorical question = asked for effect — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A question asked for effect, not to be answered",
          },
        },
        {
          id: "mll3-u3-speech-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "We did not come here to play small. We came here to build, to lead, to be the generation that our children will remember.",
          },
          stem: "What rhetorical device is used in 'to build, to lead, to be'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rhetorical question" },
              { id: "b", text: "A triad — a three-part list" },
              { id: "c", text: "A metaphor" },
              { id: "d", text: "An idiom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Triad", statement: "A triad is a three-part parallel structure — 'to build, to lead, to be'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'to build, to lead, to be' is a triad — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A triad — a three-part list",
          },
        },
        {
          id: "mll3-u3-speech-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest hook for a speech about saving the school playground from becoming a car park?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Good morning everyone, my name is...'" },
              { id: "b", text: "'What if I told you the playground you play on every day could be gone by September?'" },
              { id: "c", text: "'Today I will discuss parking.'" },
              { id: "d", text: "'Thank you for having me.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech hook", statement: "Hooks use questions, stories, surprising facts or direct address to grab attention." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): (b) is a vivid question that creates urgency; the others are flat openings — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'What if I told you the playground you play on every day could be gone by September?'",
          },
        },
        {
          id: "mll3-u3-speech-structure-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "They said we couldn't do it. They said the mountain was too high, the odds too long, the dream too small. But look at us now — standing here, breathing the same air, dreaming the same dreams.",
          },
          stem: "Explain how the repetition and triad in this speech build momentum and unity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical momentum", statement: "Repetition and triads build rhythm and emotional force in speeches." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'too high, too long, too small' is a triad of obstacles — the parallel structure makes the doubt feel overwhelming.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'breathing the same air, dreaming the same dreams' uses repetition of 'same' — it unites speaker and audience.", evidence: "same air ... same dreams", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contrast between 'They said' (doubt) and 'look at us now' (triumph) creates momentum — the speech builds from obstacle to achievement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The triad of obstacles builds rhythmic doubt; 'same air, same dreams' unites the audience; the 'They said' → 'look at us' contrast creates triumphant momentum.",
          },
        },
        {
          id: "mll3-u3-speech-structure-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a hook for a speech about protecting the school garden.", marks: 2 },
            { label: "b", prompt: "Write one body point with evidence.", marks: 1 },
            { label: "c", prompt: "Write a call to action.", marks: 1 },
            { label: "d", prompt: "Explain one way your speech is 'written for the ear'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech writing", statement: "Hook → evidence → call to action; short sentences and direct address for the ear." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a hook — question, story or surprising fact about the garden.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): attention-grabbing, spoken-style language.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): a body point with evidence, e.g. 'The garden feeds 20 bird species (evidence: wildlife survey).'", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): a call to action, e.g. 'Sign the petition — let's save our garden.'", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D (Using language): short sentences, direct address ('you', 'we'), no complex clauses — written to be spoken.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Hook. (b) Evidence-backed point. (c) Call to action. (d) Short sentences/direct address — for the ear.",
          },
        },
        {
          id: "mll3-u3-speech-structure-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "We can do this. We have the power. We have the will. Sign the petition, speak to your neighbours, and make this town listen.",
          },
          stem: "How many rhetorical devices can you identify in this speech? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Repetition ('We can. We have...'), triad ('sign... speak... make'), and call to action." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): repetition, triad and call to action — 3 devices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "mll3-u3-speech-structure-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'direct address' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking only to the front row" },
              { id: "b", text: "Using 'you', 'we', 'my friends' to speak directly to the audience" },
              { id: "c", text: "Reading from a script" },
              { id: "d", text: "Using long sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Direct address", statement: "Direct address speaks to the audience using 'you', 'we', 'my friends'." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): direct address = 'you'/'we' to the audience — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Using 'you', 'we', 'my friends' to speak directly to the audience",
          },
        },
        {
          id: "mll3-u3-speech-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "What kind of future do we want? What kind of town do we want to leave our children? These are not rhetorical questions — they are the choices we face today.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many rhetorical questions appear in the speech?", marks: 1 },
            { label: "b", prompt: "How many times does the speaker address the audience directly?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical questions", statement: "Two questions asked for effect — 'What kind of future?', 'What kind of town?'" },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): two rhetorical questions — 2.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): no direct 'you'/'we' address — 0.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 2 (b) 0",
          },
        },
        {
          id: "mll3-u3-speech-structure-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do speeches use repetition when essays don't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because repetition is easier" },
              { id: "b", text: "Because listeners can't re-read — repetition aids memory and builds momentum" },
              { id: "c", text: "Because speeches are always shorter" },
              { id: "d", text: "There's no difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Oral rhetoric", statement: "Speeches are heard, not read — repetition makes key phrases stick." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): listeners can't re-read — repetition aids memory — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because listeners can't re-read — repetition aids memory and builds momentum",
          },
        },
        {
          id: "mll3-u3-speech-structure-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How do speeches differ from essays in terms of delivery?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speeches are read; essays are spoken" },
              { id: "b", text: "Speeches are heard — they need repetition, direct address and shorter sentences; essays can be scanned" },
              { id: "c", text: "There is no difference" },
              { id: "d", text: "Essays are always shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech vs essay", statement: "Speeches are heard, not read — they need repetition, direct address and punchy sentences." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): speeches are heard — repetition, direct address and short sentences suit the ear; essays can be more complex — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Speeches are heard — they need repetition, direct address and shorter sentences; essays can be scanned",
          },
        },
        {
          id: "mll3-u3-speech-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this speech extract and answer all parts.",
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "Friends, we did it. We built this school together — parents, teachers, students. Tonight we celebrate not just bricks and mortar, but the thousands of small choices that made it possible.",
          },
          parts: [
            { label: "a", prompt: "Identify two rhetorical techniques.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each.", marks: 2 },
            { label: "c", prompt: "Why is this suitable for a speech but not an essay?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Inclusive 'we' and contrast ('not just... but') unite and elevate." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'We built this school together' — inclusive 'we' unites the audience.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'not just bricks and mortar, but...' — contrast/metaphor elevates human effort over physical building.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'we' makes everyone feel part of the success — shared ownership.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'bricks and mortar' vs 'small choices' contrasts physical vs human achievement — makes it feel deeper.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): the emotional, inclusive language is designed to be heard and felt — an essay would be more formal and analytical.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Inclusive 'we', contrast ('not just... but'). (b) 'We' unites; contrast elevates human effort. (c) Emotional, inclusive language suits hearing; essays are more formal.",
          },
        },
      ],
    },
    {
      id: "mll3-u3-delivery",
      title: "Delivering and presenting",
      skill: "Prepare and deliver a speech or presentation with confidence, pace and appropriate body language.",
      lesson: {
        sections: [
          {
            heading: "Preparing",
            body: "Know your speech well enough to **speak naturally**, not read robotically. Practice aloud — time yourself, mark pauses, rehearse tricky words. Prepare **notes** (key words, not full text) so you can make eye contact.",
          },
          {
            heading: "Delivery skills",
            body: "**Pace**: not too fast, not too slow — pause for emphasis. **Voice**: project clearly, vary your tone. **Body language**: stand tall, use gestures, make eye contact. **Confidence**: nervousness is normal — preparation and practice reduce it.",
          },
          {
            heading: "Adapting to audience",
            body: "Consider your **audience**: a speech to classmates is different from one to adults. Adjust vocabulary, formality and examples. A good speaker reads the room — if they're bored, change pace; if confused, explain again.",
          },
        ],
        keyFormulas: [
          { name: "Delivery checklist", statement: "Practice aloud → notes not script → pace + pauses → eye contact → adapt to audience." },
        ],
        workedExample: {
          problem: "You're nervous before a presentation. What helps?",
          solution: "Practice aloud several times, prepare brief notes, breathe deeply, make eye contact with friendly faces, and remember the audience wants you to succeed.",
        },
      },
      questions: [
        {
          id: "mll3-u3-delivery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should you practice a speech aloud rather than just reading it silently?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's faster" },
              { id: "b", text: "You catch awkward phrasing and timing issues that silent reading misses" },
              { id: "c", text: "It uses less paper" },
              { id: "d", text: "It makes the speech shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Oral practice", statement: "Speaking aloud reveals rhythm, timing and awkwardness." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): aloud practice catches spoken problems — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** You catch awkward phrasing and timing issues that silent reading misses",
          },
        },
        {
          id: "mll3-u3-delivery-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two delivery tips for a nervous speaker.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery skills", statement: "Pace, pauses, eye contact and preparation reduce nervousness." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): e.g. 'practice aloud', 'make eye contact', 'pause for emphasis', 'breathe deeply'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): a second valid tip, e.g. 'prepare brief notes not full text' or 'focus on friendly faces'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. practice aloud, make eye contact, pause for emphasis, prepare notes not a full script.",
          },
        },
        {
          id: "mll3-u3-delivery-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speaker",
            author: "Written for Akademik Space",
            text: "She stepped to the podium. Her hands shook, but she took a breath and looked at the audience. 'I've practiced this speech a hundred times,' she said, 'and I'm still nervous. But that's okay — because what I have to say matters more than how nervous I am.'",
          },
          stem: "Analyse how the speaker handles her nervousness and what this suggests about effective delivery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Confidence in delivery", statement: "Acknowledging nervousness and focusing on message builds connection." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): she admits nervousness openly — 'I'm still nervous' — which humanizes her and connects with the audience.", evidence: "I'm still nervous", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'what I have to say matters more' reframes the focus from self to message — a confidence technique.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): her preparation ('practiced a hundred times') and eye contact show professionalism despite nerves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "She admits nerves openly, reframes focus to the message, and relies on preparation — acknowledging vulnerability builds connection and confidence.",
          },
        },
        {
          id: "mll3-u3-delivery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a 3-sentence opening for a speech to your class about a topic you care about.", marks: 2 },
            { label: "b", prompt: "Describe two delivery techniques you would use.", marks: 2 },
            { label: "c", prompt: "Explain how you would adapt your delivery if the audience seemed bored.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech delivery", statement: "Preparation, pacing, eye contact and audience awareness." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an engaging opening — hook, direct address or question.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): appropriate for oral delivery — conversational, not written-style.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): two techniques — e.g. 'pause before key points', 'make eye contact', 'vary my pace'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): techniques are specific and purposeful.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A (Analysing): adapt by changing pace, adding energy, asking a question, or telling a story to re-engage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Engaging opening. (b) Two delivery techniques. (c) Adapt by changing pace/energy or asking a question.",
          },
        },
        {
          id: "mll3-u3-delivery-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should you practice a speech aloud?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's faster than silent reading" },
              { id: "b", text: "You catch awkward phrasing, timing and rhythm issues silent reading misses" },
              { id: "c", text: "It uses less paper" },
              { id: "d", text: "It makes the speech shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Oral practice", statement: "Speaking aloud reveals rhythm, timing and awkwardness." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): aloud practice catches spoken problems — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** You catch awkward phrasing, timing and rhythm issues silent reading misses",
          },
        },
        {
          id: "mll3-u3-delivery-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why use notes instead of a full script when presenting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Notes are easier to carry" },
              { id: "b", text: "Notes let you make eye contact and speak naturally instead of reading" },
              { id: "c", text: "Scripts are not allowed" },
              { id: "d", text: "Notes make the speech shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery skills", statement: "Brief notes allow natural delivery and eye contact; full scripts create distance." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): notes free you from reading — eye contact and natural speech — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Notes let you make eye contact and speak naturally instead of reading",
          },
        },
        {
          id: "mll3-u3-delivery-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Presenter",
            author: "Written for Akademik Space",
            text: "She stepped to the front. Her hands trembled, but she took a breath, looked at the audience, and began. 'I've practiced this a hundred times,' she said, 'and I'm still nervous. But that's okay.'",
          },
          stem: "What delivery technique does 'took a breath' demonstrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the script faster" },
              { id: "b", text: "Pausing to compose herself before speaking" },
              { id: "c", text: "Making the speech longer" },
              { id: "d", text: "Avoiding the audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pauses", statement: "Pauses before speaking help compose yourself and add emphasis." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'took a breath' is a deliberate pause to compose — (b).", evidence: "took a breath", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Pausing to compose herself before speaking",
          },
        },
        {
          id: "mll3-u3-delivery-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of tips best helps manage nervousness before a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise every word and read from a full script" },
              { id: "b", text: "Practise aloud several times and breathe deeply before starting" },
              { id: "c", text: "Skip practice and improvise entirely" },
              { id: "d", text: "Avoid eye contact with everyone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nervousness management", statement: "Preparation, practice and reframing reduce nervousness." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): practice and breathing are proven nervousness managers; scripts and avoidance undermine delivery — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Practise aloud several times and breathe deeply before starting",
          },
        },
        {
          id: "mll3-u3-delivery-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speaker",
            author: "Written for Akademik Space",
            text: "The mayor strode to the podium, face set. 'We will not be bullied by outsiders,' she declared, voice ringing. 'This town belongs to us.' Behind her, residents nodded — but a few kept their arms crossed.",
          },
          stem: "Analyse how the speaker's body language and voice create (or complicate) her message.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Body language and delivery", statement: "Stance, voice and gestures reinforce or undercut the spoken message." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'strode', 'face set', 'voice ringing' — forceful body language and volume reinforce her defiant message.", evidence: "voice ringing", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'We will not be bullied' — absolutist, confrontational language matches her aggressive delivery.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'arms crossed' in the audience undercuts her claimed unity — her confident delivery doesn't convince everyone; body language reveals the gap between message and reception.", evidence: "arms crossed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Forceful delivery ('strode', 'voice ringing') reinforces her defiance, but 'arms crossed' reveals some residents disagree — delivery can't fully hide resistance.",
          },
        },
        {
          id: "mll3-u3-delivery-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a 3-sentence opening for a speech to your class.", marks: 2 },
            { label: "b", prompt: "Describe two delivery techniques you would use.", marks: 2 },
            { label: "c", prompt: "Explain how you would adapt if the audience seemed bored.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech delivery", statement: "Engaging opening, purposeful delivery techniques, audience adaptation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an engaging opening — hook, direct address or question.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): conversational, spoken-style language.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): two techniques — e.g. 'pause before key points', 'make eye contact', 'vary my pace', 'use gestures'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): techniques are specific and purposeful.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A (Analysing): adapt by changing pace, adding energy, asking a question, or telling a story to re-engage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Engaging opening. (b) Two delivery techniques. (c) Adapt by changing pace/energy or asking a question.",
          },
        },
        {
          id: "mll3-u3-delivery-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Checklist",
            author: "Written for Akademik Space",
            text: "1. Practice aloud\n2. Prepare brief notes\n3. Make eye contact\n4. Pause for emphasis\n5. Adapt to the audience",
          },
          stem: "How many items are on this delivery checklist? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery checklist", statement: "Practice, notes, eye contact, pauses, adaptation — 5 items." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): five numbered items — 5.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "mll3-u3-delivery-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best way to handle nervousness before a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid practicing" },
              { id: "b", text: "Practice thoroughly and remember the audience wants you to succeed" },
              { id: "c", text: "Read the speech as fast as possible" },
              { id: "d", text: "Ignore the audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Confidence", statement: "Preparation and reframing reduce nervousness." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): thorough practice + audience support — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Practice thoroughly and remember the audience wants you to succeed",
          },
        },
        {
          id: "mll3-u3-delivery-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Speeches",
            author: "Written for Akademik Space",
            text: "Speech A (to classmates): 'Hey everyone, so like, we're doing this thing on Friday — you should totally come.'\nSpeech B (to the school board): 'I would like to present the findings of our investigation into canteen usage.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many speeches use informal language?", marks: 1 },
            { label: "b", prompt: "How many use formal language?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adaptation", statement: "Informal for classmates; formal for the board — tone matches audience." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): Speech A is informal ('Hey', 'like', 'totally') — 1.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): Speech B is formal ('I would like to present') — 1.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u3-delivery-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is making eye contact important during a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the speech shorter" },
              { id: "b", text: "It connects you with the audience and shows confidence" },
              { id: "c", text: "It's required by law" },
              { id: "d", text: "It helps you read faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Eye contact", statement: "Eye contact connects speaker and audience — it builds trust and engagement." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): eye contact connects and shows confidence — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It connects you with the audience and shows confidence",
          },
        },
        {
          id: "mll3-u3-delivery-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "You notice the audience looking bored halfway through your speech. What should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Audience adaptation", statement: "Good speakers read the room and adjust pace, energy or content." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): adapt — change pace, add energy, ask a question, tell a story, or shorten remaining points to re-engage.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): e.g. 'speed up slightly', 'make eye contact with different sections', 'ask a direct question to wake them up'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Adapt — change pace, add energy, ask a question or tell a story to re-engage; a good speaker reads the room and adjusts.",
          },
        },
        {
          id: "mll3-u3-delivery-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this presentation moment and answer all parts.",
          extract: {
            title: "The Presentation",
            author: "Written for Akademik Space",
            text: "He'd rehearsed perfectly — in his head. Now, facing thirty pairs of eyes, his mind went blank. 'Um,' he said, staring at his notes. A few people shifted uncomfortably. He took a breath, looked up, and said, 'Let me try that again.'",
          },
          parts: [
            { label: "a", prompt: "Identify two delivery problems the speaker faces.", marks: 2 },
            { label: "b", prompt: "Explain how he recovers.", marks: 2 },
            { label: "c", prompt: "What lesson does this offer about preparation?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delivery recovery", statement: "Mental rehearsal isn't enough — practice aloud; recovery through composure rebuilds confidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'rehearsed perfectly — in his head' — he didn't practice aloud, so the words failed live; 'mind went blank' shows unpreparedness for pressure.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion D (Using language): 'Um', 'staring at notes' — visible nervousness and dependence on script undermine confidence.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'took a breath' — pause to compose; 'looked up' — re-engaged the audience; 'Let me try that again' — acknowledged the stumble honestly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): his recovery shows composure — audiences forgive mistakes when the speaker stays calm and connected.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): mental rehearsal isn't enough — you must practice aloud to build the muscle memory and confidence for live delivery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mental-only rehearsal, visible nervousness. (b) Pauses, looks up, honest recovery. (c) Practice aloud — mental rehearsal isn't enough for live delivery.",
          },
        },
      ],
    },
  ],
};
