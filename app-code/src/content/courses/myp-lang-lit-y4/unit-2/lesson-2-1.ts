import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mll4-u2-lesson-2-1",
  code: "2-1",
  title: "Register and Formality",
  goal: "I CAN analyse register — the level of formality in a text — and explain how it suits or fails to suit its audience and purpose.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Register", definition: "The level of formality of language — formal, neutral or informal." },
    { term: "Formality", definition: "How official or casual a text sounds — contractions, slang, sentence length." },
    { term: "Audience", definition: "The people a text is written for." },
    { term: "Contraction", definition: "Shortened forms like 'don't', 'it's', 'won't' — informal markers." },
    { term: "Jargon", definition: "Specialist vocabulary used within a profession or field." },
    { term: "Slang", definition: "Very informal, non-standard vocabulary." },
  ],
  concepts: [
    {
      id: "mll4-u2-register",
      title: "What is register?",
      skill: "Identify the register of a text and the features that create it.",
      lesson: {
        sections: [
          {
            heading: "Levels of formality",
            body: "**Formal**: complex sentences, no contractions, precise vocabulary ('We are writing to inform you...'). **Neutral**: everyday standard English ('The meeting is at 3pm'). **Informal**: contractions, slang, short sentences, direct address ('Hey, grab your stuff — we're leaving!').",
          },
          {
            heading: "Features that signal register",
            body: "Watch for: **contractions** (don't vs do not), **vocabulary** (slang vs formal terms), **sentence length** (short choppy vs long complex), **pronouns** (we/us inclusive vs you imperative), **punctuation** (exclamation marks, ellipses).",
          },
          {
            heading: "Why register matters",
            body: "Register signals **who the text is for**. A formal letter to a headteacher uses different language than a text to a friend. Mismatched register — slang in a formal report — undermines credibility. Writers choose register deliberately.",
          },
        ],
        keyFormulas: [
          { name: "Register spectrum", statement: "Formal ←→ Neutral ←→ Informal: complexity, contractions, vocabulary, directness." },
        ],
        workedExample: {
          problem: "Classify: 'The committee regrets to inform you that your application was unsuccessful.'",
          solution: "Formal — no contractions, passive voice, official vocabulary ('regrets', 'unsuccessful').",
        },
      },
      questions: [
        {
          id: "mll4-u2-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The level of formality in language" },
              { id: "b", text: "The length of sentences" },
              { id: "c", text: "The size of the vocabulary" },
              { id: "d", text: "The speed of reading" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Register", statement: "Register = level of formality of language." }],
            steps: [{ reasoning: "Criterion A (Analysing): register = formality — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** The level of formality in language",
          },
        },
        {
          id: "mll4-u2-register-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            text: "Message A (email to teacher): 'Dear Mr Chen, I am writing to request permission to submit my essay on Friday rather than Thursday, as I require additional time to complete the research.'\n\nMessage B (text to friend): 'hey can i hand in my essay friday instead? still doing the research lol'",
          },
          stem: "Identify the register of each message and name one feature that shows it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register features", statement: "Formality shown by contractions, vocabulary, sentence length." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Message A is formal — 'I am writing', 'require', no contractions; Message B is informal — 'hey', 'can i', 'lol', lowercase.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): features — A: 'I am writing to request', 'rather than'; B: 'hey', 'lol', 'can i' — register matches audience.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A = formal (complete sentences, formal vocabulary); B = informal (slang, contractions, casual).",
          },
        },
        {
          id: "mll4-u2-register-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Announcement",
            author: "Written for Akademik Space",
            text: "Official: 'Passengers are reminded that the last train departs at 23:45. Please ensure all personal belongings are removed from the carriage.'\n\nInformal version: 'Last train leaves at 11:45pm — don't forget your stuff!'",
          },
          stem: "Explain how the register of each version suits its audience. Which would be better on a station announcement screen? Why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register and audience", statement: "Formal register suits official announcements; informal suits friendly contexts." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Passengers', 'reminded', 'ensure', 'belongings' — formal register addresses a general public audience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Last train leaves', 'don't forget your stuff' — informal suits friends, not strangers on a station.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the formal version is better — it suits all passengers and maintains authority/clarity; informal 'stuff' is too casual for official announcements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal suits the general public; informal suits friends. The formal version is better for a station announcement.",
          },
        },
        {
          id: "mll4-u2-register-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the register of this sentence: 'Kindly be advised that the meeting has been rescheduled.'", marks: 1 },
            { label: "b", prompt: "List two features that show this register.", marks: 2 },
            { label: "c", prompt: "Rewrite it in informal register for a message to a friend.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register transformation", statement: "Formal → informal: contractions, simpler vocabulary, direct address." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): formal register.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): features — 'Kindly', 'be advised', 'rescheduled' — formal vocabulary, passive structure.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): no contractions, official tone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): informal rewrite — e.g. 'Hey, the meeting's been moved.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): uses contractions ('meeting's') and casual phrasing appropriate to a friend.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Formal. (b) 'Kindly', 'be advised', 'rescheduled', no contractions. (c) e.g. 'Hey, the meeting's been moved.'",
          },
        },
        {
          id: "mll4-u2-register-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature most strongly signals informal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contractions like 'don't' and 'can't'" },
              { id: "b", text: "Formal vocabulary" },
              { id: "c", text: "Complete sentences" },
              { id: "d", text: "Passive voice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Register features", statement: "Contractions, slang and short sentences signal informal register." }],
            steps: [
              { reasoning: "Criterion A (Analysing): contractions signal informality — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Contractions like 'don't' and 'can't'",
          },
        },
        {
          id: "mll4-u2-register-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            text: "Message A (letter to headteacher): 'Dear Mrs Patel, I am writing to request an extension on my deadline, as I require additional time for research.'\n\nMessage B (text to friend): 'hey can i get more time on my essay? still doing research lol'",
          },
          stem: "Identify the register of each message and one feature that shows it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register features", statement: "Formality shown by contractions, vocabulary and sentence structure." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A formal — 'I am writing', 'request', 'require', no contractions; B informal — 'hey', 'can i', 'lol'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): features — A: complete sentences, formal vocabulary; B: lowercase, slang, contractions.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A = formal (complete sentences, 'request', 'require'); B = informal ('hey', 'lol', lowercase).",
          },
        },
        {
          id: "mll4-u2-register-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three main levels of register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal, neutral, informal" },
              { id: "b", text: "Fast, slow, medium" },
              { id: "c", text: "Loud, quiet, silent" },
              { id: "d", text: "Written, spoken, signed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Register spectrum", statement: "Formal ←→ Neutral ←→ Informal." }],
            steps: [
              { reasoning: "Criterion A (Analysing): formal, neutral, informal — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): they range from official/complex to casual/simple.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Formal, neutral, informal",
          },
        },
        {
          id: "mll4-u2-register-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Notices",
            author: "Written for Akademik Space",
            text: "Official notice: 'The library will be closed on Monday for essential maintenance. Users are advised to plan accordingly.'\n\nText to friend: 'heads up — lib's closed monday, maintenance stuff. plan accordingly lol'",
          },
          stem: "Compare the register of these two versions. Why does each suit its audience?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register and audience", statement: "Formal suits official notices; informal suits friends." }],
            steps: [
              { reasoning: "Criterion A (Analysing): official notice is formal — 'Users are advised', complete sentences, no contractions — suits general public.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): friend message is informal — 'heads up', 'stuff', 'lol', contraction 'lib's' — suits casual context.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): each register matches its audience — swapping them would feel wrong in both cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal suits official notice; informal suits friend — register must match audience.",
          },
        },
        {
          id: "mll4-u2-register-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence uses formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The meeting's been moved, no biggie." },
              { id: "b", text: "I am writing to inform you that the meeting has been postponed." },
              { id: "c", text: "OMG the meeting got cancelled!!" },
              { id: "d", text: "Gotta go, ttyl!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Formal register", statement: "Formal = complete sentences, no contractions, official vocabulary." }],
            steps: [
              { reasoning: "Criterion A (Analysing): (b) is formal — 'I am writing to inform you', no contractions — formal register.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): others use slang, contractions and exclamations — informal.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I am writing to inform you that the meeting has been postponed.",
          },
        },
        {
          id: "mll4-u2-register-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Email",
            author: "Written for Akademik Space",
            text: "'Yo Prof! Sorry I'm late on the essay — got swamped with revision. Can I get an extension? Cheers!'",
          },
          stem: "Analyse the register of this email and explain why it fails for its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register mismatch", statement: "Informal register in formal contexts undermines credibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): register is very informal — 'Yo', 'Prof', 'swamped', 'Cheers', no structure.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): email to a professor requires formal register — respectful, complete sentences, clear request.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Yo Prof' is disrespectful; 'got swamped' is casual excuse; no apology structure or formal closing.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): undermines credibility — professor may see student as unprofessional; request less likely granted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Very informal register ('Yo Prof', 'Cheers') inappropriate for professor — undermines credibility and professionalism.",
          },
        },
        {
          id: "mll4-u2-register-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Announcement",
            author: "Written for Akademik Space",
            text: "'Attention all passengers: Due to unforeseen circumstances, the 18:30 service to Manchester has been cancelled. We apologise for any inconvenience. Passengers are advised to check alternative services.'",
          },
          parts: [
            { label: "a", prompt: "Identify the register of this announcement.", marks: 1 },
            { label: "b", prompt: "List three features that show this register.", marks: 2 },
            { label: "c", prompt: "Rewrite it in informal register for a text message to a friend.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register transformation", statement: "Formal → informal: contractions, casual vocabulary, direct address." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): formal register.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): features — 'Attention all passengers', 'unforeseen circumstances', 'apologise', 'advised' — official vocabulary.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): complete sentences, passive voice ('has been cancelled'), no contractions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): informal rewrite — e.g. 'Hey, the 6:30 to Manchester got cancelled — sorry! Check other trains.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): uses contractions, casual phrasing, direct address.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Formal. (b) 'Attention all', 'unforeseen circumstances', passive voice. (c) e.g. 'Hey, the 6:30 to Manchester got cancelled — check other trains.'",
          },
        },
        {
          id: "mll4-u2-register-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'jargon' mean in register analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long sentences" },
              { id: "b", text: "Very informal slang" },
              { id: "c", text: "Specialist vocabulary used within a profession or field" },
              { id: "d", text: "Foreign words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Jargon", statement: "Specialist vocabulary within a profession or field." }],
            steps: [
              { reasoning: "Criterion A (Analysing): jargon = specialist vocabulary — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Specialist vocabulary used within a profession or field",
          },
        },
        {
          id: "mll4-u2-register-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The patient presented with acute respiratory distress. Administer bronchodilator immediately.'\n\nText B: 'The guy's really struggling to breathe. Give him the inhaler now!'",
          },
          stem: "Identify the register of each text and the audience it suits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and jargon", statement: "Medical jargon = formal/professional; casual language = informal." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is formal/medical — 'acute respiratory distress', 'Administer bronchodilator' — suits medical professionals.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is informal — 'guy's', 'struggling', 'now' — suits casual/urgent context, not clinical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = formal medical jargon (professionals); B = informal/casual (non-clinical context).",
          },
        },
        {
          id: "mll4-u2-register-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feature does NOT signal formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Official vocabulary" },
              { id: "b", text: "Contractions" },
              { id: "c", text: "Complete sentences" },
              { id: "d", text: "Passive voice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Register features", statement: "Contractions signal informality, not formality." }],
            steps: [
              { reasoning: "Criterion A (Analysing): contractions are informal markers — (b) does NOT signal formal.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): formal uses full forms ('do not' not 'don't').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Contractions",
          },
        },
        {
          id: "mll4-u2-register-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Message",
            author: "Written for Akademik Space",
            text: "'Dear valued customer, your complaint has been received and will be processed within 28 days. We apologise for any inconvenience caused.'",
          },
          stem: "Analyse this message's register and evaluate its effectiveness for a complaint response.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register effectiveness", statement: "Formal register suits official correspondence but may feel cold." }],
            steps: [
              { reasoning: "Criterion A (Analysing): formal register — 'Dear valued customer', 'processed within 28 days', 'apologise' — appropriate for official complaint.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'valued customer' is impersonal — treats complainant as transaction, not person.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effective for clarity (timeline given) but weak for empathy — 'inconvenience caused' is passive and distant.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): appropriate register but could be warmer — balance formality with human acknowledgment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal register appropriate but impersonal — clear timeline but lacks empathy; could be warmer.",
          },
        },
        {
          id: "mll4-u2-register-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "'Gotta dash — meeting's running late. Bring the reports to the 2pm. Don't be late this time!!'",
          },
          parts: [
            { label: "a", prompt: "Identify the register of this text.", marks: 1 },
            { label: "b", prompt: "List three informal features.", marks: 2 },
            { label: "c", prompt: "Rewrite it in formal register for an email to a colleague.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register identification", statement: "Informal = contractions, slang, urgency, direct commands." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): informal register.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): features — 'Gotta', 'dash', 'meeting's', 'Don't be late this time!!' — slang, contractions, exclamations.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): very casual tone, urgent, assumes close relationship.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): formal rewrite — e.g. 'I must leave now — the meeting is running late. Please bring the reports to the 2pm session. Punctuality is appreciated.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): complete sentences, formal vocabulary, polite tone.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Informal. (b) 'Gotta', contractions, exclamations. (c) e.g. 'I must leave now — the meeting is running late. Please bring the reports.'",
          },
        },
      ],
    },
    {
      id: "mll4-u2-register-audience",
      title: "Register and audience",
      skill: "Match register to audience and explain why mismatched register weakens communication.",
      lesson: {
        sections: [
          {
            heading: "Register must match audience",
            body: "A text fails when its register doesn't fit its audience. **Slang in a job application** sounds unprofessional. **Overly formal language to a close friend** sounds distant. The right register builds **trust and rapport**; the wrong one creates distance or confusion.",
          },
          {
            heading: "Reading register clues",
            body: "To identify intended audience: look at **pronouns** (we = inclusive, you = direct), **vocabulary level**, **sentence complexity**, **topics** (sports slang vs legal terms). A text about 'the match' with slang is for fans; the same topic in formal prose is for a report.",
          },
          {
            heading: "Shifting register deliberately",
            body: "Skilled writers **shift register** within a text for effect — a formal speech might drop to informal for emotional impact. Notice these shifts: 'Distinguished guests... honestly? I'm scared shitless.' The contrast is deliberate and powerful.",
          },
        ],
        keyFormulas: [
          { name: "Register fit", statement: "Formal ↔ authority/professional; Informal ↔ friends/casual; Mismatch = weakened communication." },
        ],
        workedExample: {
          problem: "A university sends a letter to students: 'Dear valued customer, your enrolment is confirmed.' Problem?",
          solution: "'Valued customer' treats students like shoppers — wrong register for an educational institution; should address students as learners.",
        },
      },
      questions: [
        {
          id: "mll4-u2-register-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when register doesn't match audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it's just style" },
              { id: "b", text: "Communication is weakened — confusion or lost credibility" },
              { id: "c", text: "The audience is flattered" },
              { id: "d", text: "The text becomes longer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Register mismatch", statement: "Mismatched register weakens communication — confusion or lost credibility." }],
            steps: [{ reasoning: "Criterion A (Analysing): mismatch weakens communication — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Communication is weakened",
          },
        },
        {
          id: "mll4-u2-register-audience-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Job Application",
            author: "Written for Akademik Space",
            text: "'Yo, I'm applying for the marketing gig. I've done social media stuff before and I'm pretty decent at it. Hit me up if you need more info.'",
          },
          stem: "Why does this job application fail? Identify the register problem.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register mismatch", statement: "Informal register in a formal context (job application) undermines credibility." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Yo', 'gig', 'stuff', 'hit me up' — slang register inappropriate for job application.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): undermines professionalism and credibility — employer expects formal, respectful language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informal/slang register ('Yo', 'gig', 'stuff') inappropriate for a job application — undermines professionalism.",
          },
        },
        {
          id: "mll4-u2-register-audience-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "'Distinguished guests, colleagues, and friends — welcome. I stand before you today not as a politician, but as a parent. Like many of you, I worry about our children's future. Now, I won't pretend this is easy. Frankly? It's terrifying.'",
          },
          stem: "Analyse how the speaker shifts register. What effect does the shift create?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register shift", statement: "Deliberate register shifts create emphasis and emotional impact." }],
            steps: [
              { reasoning: "Criterion A (Analysing): starts formal ('Distinguished guests, colleagues') then drops to informal ('Frankly? It's terrifying').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the shift from formal to raw honesty creates authenticity and emotional impact — the audience connects.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): contrast between official speech and personal confession makes the message more powerful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal opening → informal confession; the shift creates authenticity and emotional impact.",
          },
        },
        {
          id: "mll4-u2-register-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the intended audience of this text: 'Fellow fans! The match was EPIC — that last-minute goal had me screaming!'", marks: 1 },
            { label: "b", prompt: "Name two register features that show this audience.", marks: 2 },
            { label: "c", prompt: "Rewrite the first sentence in formal register for a local newspaper report.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register identification", statement: "Slang, direct address, excitement = informal audience." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): audience — sports fans / fellow supporters.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): 'Fellow fans' direct address; 'EPIC', 'had me screaming' — slang/excitement.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): exclamation marks, informal vocabulary.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): formal rewrite — e.g. 'The team secured a dramatic victory with a last-minute goal.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): formal vocabulary ('secured', 'dramatic victory') and neutral tone.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Sports fans. (b) 'Fellow fans', 'EPIC', exclamations. (c) e.g. 'The team secured a dramatic victory with a last-minute goal.'",
          },
        },
        {
          id: "mll4-u2-register-audience-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'audience' mean in register analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The critics who review books" },
              { id: "b", text: "The people listening to a speech" },
              { id: "c", text: "The theatre where a play is performed" },
              { id: "d", text: "The people a text is written for" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Audience", statement: "Audience = the people a text is written for." }],
            steps: [
              { reasoning: "Criterion A (Analysing): audience = intended readers — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The people a text is written for",
          },
        },
        {
          id: "mll4-u2-register-audience-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            text: "Letter A (to friend): 'Hey! Guess what — I got into the school play! We're doing it next month. You HAVE to come see it.'\n\nLetter B (to headteacher): 'Dear Dr Wilson, I am writing to inform you that I have been selected for the school play. I would be grateful for any guidance regarding rehearsals.'",
          },
          stem: "Compare the register and audience of these two letters about the same news.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Register and audience", statement: "Same content, different audience = different register." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is informal — 'Hey', 'GUESS what', 'HAVE to come see' — for a friend; B is formal — 'Dear Dr Wilson', 'inform you', 'grateful' — for headteacher.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both share content (play selection) but adapt register to relationship — casual enthusiasm vs respectful formality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same news, different register — A informal for friend, B formal for headteacher.",
          },
        },
        {
          id: "mll4-u2-register-audience-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens if you use informal register with an official audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The text becomes longer" },
              { id: "b", text: "Communication is weakened — seems disrespectful and loses credibility" },
              { id: "c", text: "Nothing — it's just style" },
              { id: "d", text: "The audience is impressed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Register mismatch", statement: "Mismatched register weakens credibility and communication." }],
            steps: [
              { reasoning: "Criterion A (Analysing): informal register with officials seems disrespectful — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): undermines credibility — audience may not take message seriously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Communication is weakened — seems disrespectful and loses credibility",
          },
        },
        {
          id: "mll4-u2-register-audience-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "To students: 'Yo guys! Big news — the school trip's happening! Pack your bags and get ready for the BEST day ever!!'\n\nTo parents: 'Dear Parent/Guardian, we are pleased to inform you that the annual school trip will take place on 14 March. A permission slip and payment of £25 are required by 1 March.'",
          },
          stem: "Analyse how each version adapts to its audience — what changes and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Register, vocabulary and emphasis change with audience." }],
            steps: [
              { reasoning: "Criterion A (Analysing): student version is informal and exciting — 'Yo guys', 'BEST day ever', exclamations — suits young audience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): parent version is formal and informative — 'Dear Parent/Guardian', 'pleased to inform', specific details (date, payment).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): students get enthusiasm; parents get logistics — same event, different emphasis and register.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Students = informal/exciting; parents = formal/informative — register adapted to audience.",
          },
        },
        {
          id: "mll4-u2-register-audience-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which audience is this text for? 'Attention valued customers — our new loyalty programme offers exclusive rewards. Terms and conditions apply.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Children" },
              { id: "b", text: "General customers" },
              { id: "c", text: "Close friends" },
              { id: "d", text: "University students" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience identification", statement: "Formal register + 'customers' + 'terms and conditions' = general customers." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'valued customers', 'loyalty programme', 'terms and conditions' — general customers — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): formal commercial register suits business audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** General customers",
          },
        },
        {
          id: "mll4-u2-register-audience-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'This restaurant is an absolute disgrace. The food was cold, the service was rude, and honestly? I'd rather eat cardboard.'",
          },
          stem: "Analyse the register and audience of this review. Who is it really written for and what effect does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and audience", statement: "Informal, emotional register suits casual review platforms, not formal criticism." }],
            steps: [
              { reasoning: "Criterion A (Analysing): informal/emotional — 'absolute disgrace', 'honestly?', 'eat cardboard' — hyperbole and slang.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): audience — fellow diners/online reviewers, not the restaurant itself; casual platform context.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effect — entertaining and emphatic but lacks credibility; 'disgrace' is exaggerated.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): register suits informal review context but wouldn't work for formal complaint to management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informal/emotional register for casual reviewers — entertaining but lacks credibility; wouldn't suit formal complaint.",
          },
        },
        {
          id: "mll4-u2-register-audience-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two versions of the same message.",
          extract: {
            title: "The Invitation",
            author: "Written for Akademik Space",
            text: "To classmates: 'Hey everyone! We're having a class party Friday after school — bring snacks and your best dance moves!!'\n\nTo parents: 'Dear Parent/Guardian, we are hosting an end-of-term celebration on Friday at 3:30pm in the school hall. Students may bring snacks; no nuts or allergens please.'",
          },
          parts: [
            { label: "a", prompt: "Identify the intended audience of each version.", marks: 1 },
            { label: "b", prompt: "Compare the register and what information each emphasises.", marks: 2 },
            { label: "c", prompt: "Why does each version include different details?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Different audiences need different register, detail and emphasis." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): classmates vs parents — clearly different audiences.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): classmate version informal ('Hey', 'best dance moves!!'); parent version formal ('Dear Parent/Guardian', 'allergens').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): students get fun/excitement; parents get logistics/safety — different emphasis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): students need enthusiasm and what to bring; parents need time, place, and safety info (allergens).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): audience determines what details matter — students care about fun, parents care about safety/logistics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Classmates vs parents. (b) Informal vs formal; fun vs logistics. (c) Different details suit different needs — fun for students, safety for parents.",
          },
        },
        {
          id: "mll4-u2-register-audience-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does register need to match audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because audiences prefer formal language" },
              { id: "b", text: "Because matching register impresses the reader" },
              { id: "c", text: "Because mismatched register weakens communication and credibility" },
              { id: "d", text: "Because it makes the text longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Register fit", statement: "Register must match audience for effective communication." }],
            steps: [
              { reasoning: "Criterion A (Analysing): mismatch weakens communication — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because mismatched register weakens communication and credibility",
          },
        },
        {
          id: "mll4-u2-register-audience-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Instructions",
            author: "Written for Akademik Space",
            text: "To expert: 'Administer 5ml of the solution intravenously over 10 minutes, monitoring vital signs.'\n\nTo patient: 'Your nurse will give you a small injection of medicine. It might feel a little uncomfortable, but it will help you feel better.'",
          },
          stem: "How does each version adapt to its audience? What changes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Technical jargon for experts; reassurance and simplicity for patients." }],
            steps: [
              { reasoning: "Criterion A (Analysing): expert version uses jargon ('intravenously', 'vital signs', precise dosage); patient version uses reassurance ('might feel uncomfortable', 'will help').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): expert needs precision; patient needs comfort and understanding — same procedure, different language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expert = technical precision; patient = reassurance and simplicity — same procedure, adapted language.",
          },
        },
        {
          id: "mll4-u2-register-audience-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text says 'we' throughout instead of 'you'. What does this suggest about the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The text is a formal report" },
              { id: "b", text: "The audience is very distant" },
              { id: "c", text: "The audience is confused" },
              { id: "d", text: "The writer is including themselves with the audience — inclusive tone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Pronouns and audience", statement: "'We/us' creates inclusive tone; 'you' is direct address." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'we' = inclusive — writer + audience together — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): builds rapport and shared identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The writer is including themselves with the audience — inclusive tone",
          },
        },
        {
          id: "mll4-u2-register-audience-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Newsletter",
            author: "Written for Akademik Space",
            text: "'Dear valued residents, we are writing to inform you that the proposed development will undergo a public consultation. Your feedback is important to us. Please complete the attached survey.'",
          },
          stem: "Analyse this text's register and audience. Evaluate its effectiveness for a council newsletter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and audience", statement: "Formal register suits official communication but may feel distant." }],
            steps: [
              { reasoning: "Criterion A (Analysing): formal register — 'Dear valued residents', 'inform you', 'proposed development', 'consultation' — appropriate for council.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): audience — general residents, mixed ages and backgrounds — formal but accessible.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effective for clarity — gives clear action ('complete the attached survey'), polite tone.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): weakness — 'valued residents' is impersonal; could be warmer while staying formal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal register for residents — clear and appropriate; 'valued residents' slightly impersonal but acceptable.",
          },
        },
        {
          id: "mll4-u2-register-audience-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two versions of the same instruction.",
          extract: {
            title: "The Guide",
            author: "Written for Akademik Space",
            text: "For professionals: 'Configure the router by accessing the admin panel at 192.168.1.1, entering credentials, and selecting WPA2-PSK encryption.'\n\nFor beginners: 'To set up your WiFi, plug in the router, wait for the lights to turn green, then open your browser and type the address on the sticker on the back.'",
          },
          parts: [
            { label: "a", prompt: "Identify the audience of each version.", marks: 1 },
            { label: "b", prompt: "Compare the language and register used.", marks: 2 },
            { label: "c", prompt: "Explain why each adaptation is appropriate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Technical for experts; simple and reassuring for beginners." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): professionals vs beginners — technical vs novice audiences.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): professional version uses jargon ('admin panel', 'credentials', 'WPA2-PSK'); beginner version uses simple steps ('plug in', 'lights turn green').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): professional = precise/technical; beginner = sequential/accessible — different registers.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): professionals need exact technical details; beginners need reassurance and physical guidance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): beginners can't decode '192.168.1.1' or 'WPA2-PSK' — simplified language essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Professionals vs beginners. (b) Jargon vs simple steps. (c) Technical precision vs accessible guidance — matched to knowledge.",
          },
        },
      ],
    },
  ],
};
