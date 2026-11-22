import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "langb-u3-lesson-3-2",
  code: "3-2",
  title: "Conversation Skills and Responding",
  goal: "I CAN keep a conversation going by asking questions, responding appropriately and using turn-taking phrases.",
  standards: ["Speaking", "Interaction", "Language B SL"],
  vocabulary: [
    { term: "Turn-taking", definition: "The alternation of speaker and listener roles in a conversation." },
    { term: "Follow-up question", definition: "A question that extends a topic, e.g. 'Why do you say that?' or 'Can you give an example?'" },
    { term: "Backchannel", definition: "Short listener responses showing attention: 'mm-hm', 'really?', 'I see'." },
    { term: "Repair", definition: "Fixing a misunderstanding in conversation: 'Sorry, what do you mean?'" },
    { term: "Register in speech", definition: "Adjusting formality in spoken language to suit the interlocutor." },
    { term: "Active listening", definition: "Showing engagement through eye contact, responses and relevant questions." },
  ],
  concepts: [
    {
      id: "langb-u3-conversation-flow",
      title: "Keeping a conversation flowing",
      skill: "Use questions, backchannels and follow-ups to sustain interaction in a target language.",
      lesson: {
        sections: [
          {
            heading: "Conversation is a collaboration",
            body: "A conversation is not a series of speeches — it is **turn-taking** between two or more people. Both partners share responsibility for keeping it alive. If one person only answers yes/no, the conversation dies. Your job is half listener, half speaker: respond, then hand the turn back with a question or comment.",
          },
          {
            heading: "Tools for extending turns",
            body: "**Follow-up questions** keep topics alive: 'Why?', 'Can you give an example?', 'What happened next?'. **Backchannels** show you are listening: 'mm-hm', 'really?', 'that's interesting'. **Comments** react to what was said: 'I'd never thought of it that way.' In Language B oral exams, examiners reward sustained, natural interaction over silent answers.",
          },
          {
            heading: "Repairing breakdowns",
            body: "Misunderstandings are normal — even in your first language. **Repair phrases** fix them politely: 'Sorry, could you repeat that?', 'What do you mean by...?', 'I don't quite understand.' Using repair phrases is not a weakness; it is a sign of real communication skills and is explicitly rewarded in speaking assessment.",
          },
        ],
        keyFormulas: [
          { name: "Turn extension", statement: "Answer -> comment/backchannel -> follow-up question -> hand turn back" },
          { name: "Repair phrases", statement: "Sorry, could you repeat that? / What do you mean by X? / I don't quite understand" },
        ],
        workedExample: {
          problem: "Partner says 'I spent my summer in Portugal.' Give three ways to extend the conversation.",
          solution: "1) 'Oh, where in Portugal?' (follow-up question) 2) 'That sounds amazing!' (reaction) 3) 'Did you learn any Portuguese?' (new angle).",
        },
      },
      questions: [
        {
          id: "langb-u3-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'turn-taking' in conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interrupting the speaker politely" },
              { id: "b", text: "The alternation of speaker and listener roles" },
              { id: "c", text: "Taking turns doing homework" },
              { id: "d", text: "Finishing your partner's sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "The alternation of who speaks and who listens in conversation." },
            ],
            steps: [
              { reasoning: "Turn-taking describes how speakers alternate roles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The alternation of speaker and listener roles",
            commonErrors: ["Thinking turn-taking means speaking longer than your partner."],
          },
        },
        {
          id: "langb-u3-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three examples of follow-up questions that keep a conversation going.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Follow-up questions", statement: "Questions extending the current topic sustain interaction." },
            ],
            steps: [
              { reasoning: "Why/How questions: 'Why do you like it?', 'How did you learn?'", marks: 1, markCode: "M" },
              { reasoning: "Example/elaboration questions: 'Can you give an example?', 'What happened next?'", marks: 1, markCode: "M" },
              { reasoning: "Related-angle questions: 'Have you tried anything similar?', 'What about your friends?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Why/How questions, example questions, related-angle questions.",
            commonErrors: ["Asking questions that change the topic completely instead of extending it."],
          },
        },
        {
          id: "langb-u3-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why using repair phrases during a speaking exam is a strength, not a weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Repair and assessment", statement: "Language B speaking criteria reward communication strategies including repair." },
            ],
            steps: [
              { reasoning: "Repair phrases show you are actively communicating, not avoiding interaction.", marks: 1, markCode: "M" },
              { reasoning: "They keep the conversation going instead of stalling or switching to silence.", marks: 1, markCode: "R" },
              { reasoning: "Examiners assess communication, not perfection — managing breakdowns is a real-life skill.", marks: 1, markCode: "M" },
              { reasoning: "A candidate who repairs misunderstandings demonstrates higher-level strategic competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repair phrases maintain interaction and demonstrate strategic competence — rewarded in speaking assessment.",
            commonErrors: ["Avoiding clarification and guessing wrongly instead of asking."],
          },
        },
        {
          id: "langb-u3-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your partner says: 'My favourite hobby is photography.' Continue the conversation.",
          parts: [
            { label: "a", prompt: "Write one reaction/backchannel response.", marks: 2 },
            { label: "b", prompt: "Write two follow-up questions about photography.", marks: 2 },
            { label: "c", prompt: "Explain how your responses keep the conversation going.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conversation extension", statement: "Reaction + follow-up questions = sustained turn-taking." },
            ],
            steps: [
              { part: "a", reasoning: "Natural reaction: 'Oh, photography? That's great!' or 'Really? I didn't know that.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Response acknowledges and shows interest in the partner.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two relevant follow-ups, e.g. 'What kind of photos do you take?' and 'How long have you been doing it?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both questions stay on the photography topic.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reaction shows active listening and builds rapport.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Questions hand the turn back and invite more detail.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Together they extend the topic rather than ending it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Interested reaction. (b) Two on-topic follow-up questions. (c) Reaction + questions sustain turn-taking and deepen the topic.",
            commonErrors: ["Asking unrelated questions or giving only 'yes/no' answers."],
          },
        },
        {
          id: "langb-u3-q49",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'backchannel' in conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing the topic of conversation" },
              { id: "b", text: "A short listener response showing attention, like 'mm-hm' or 'really?'" },
              { id: "c", text: "Interrupting the speaker to ask a question" },
              { id: "d", text: "A channel for private messages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Backchannel", statement: "Short listener responses that signal attention without taking the turn." },
            ],
            steps: [
              { reasoning: "Backchannels are brief responses like 'mm-hm' or 'I see' that show listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A short listener response showing attention, like 'mm-hm' or 'really?'",
            commonErrors: ["Confusing backchannels with full responses that take the turn."],
          },
        },
        {
          id: "langb-u3-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which response best extends the current topic of conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I have to leave soon.'" },
              { id: "b", text: "'Anyway, did you see the game last night?'" },
              { id: "c", text: "'Can you give an example of what you mean?'" },
              { id: "d", text: "'That's enough about that.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Follow-up questions", statement: "Questions that deepen the current topic sustain interaction." },
            ],
            steps: [
              { reasoning: "Asking for an example stays on the current topic and invites more detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Can you give an example of what you mean?'",
            commonErrors: ["Choosing a response that changes the topic or ends the exchange."],
          },
        },
        {
          id: "langb-u3-q51",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Turn-taking' in conversation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The alternation of speaker and listener roles" },
              { id: "b", text: "Finishing each other's sentences" },
              { id: "c", text: "Taking turns writing notes" },
              { id: "d", text: "Speaking for longer than your partner" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Speakers alternate between talking and listening roles." },
            ],
            steps: [
              { reasoning: "Turn-taking describes how conversational roles alternate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The alternation of speaker and listener roles",
            commonErrors: ["Thinking turn-taking means dominating the speaking time."],
          },
        },
        {
          id: "langb-u3-q52",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which action best keeps a conversation alive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waiting silently for your partner to speak" },
              { id: "b", text: "Checking your phone while listening" },
              { id: "c", text: "Answering every question with 'yes' or 'no'" },
              { id: "d", text: "Asking a follow-up question after answering" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustaining interaction", statement: "Handing the turn back with questions keeps dialogue going." },
            ],
            steps: [
              { reasoning: "Follow-up questions return the turn and invite more information.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Asking a follow-up question after answering",
            commonErrors: ["Giving minimal answers that leave no opening for the partner."],
          },
        },
        {
          id: "langb-u3-q53",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Repair phrases such as 'Sorry, could you repeat that?' are used when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You want to change the subject politely" },
              { id: "b", text: "You disagree with your partner" },
              { id: "c", text: "You want to end the conversation" },
              { id: "d", text: "A misunderstanding or unclear message occurs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Repair", statement: "Repair phrases fix misunderstandings in conversation." },
            ],
            steps: [
              { reasoning: "Repair phrases clarify or repeat when communication breaks down.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A misunderstanding or unclear message occurs",
            commonErrors: ["Avoiding clarification and guessing wrongly instead."],
          },
        },
        {
          id: "langb-u3-q54",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which response is a backchannel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete silence" },
              { id: "b", text: "A long explanation of your own opinion" },
              { id: "c", text: "A question about a new topic" },
              { id: "d", text: "'Really? That's interesting.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Backchannel", statement: "Brief listener responses show attention without taking the turn." },
            ],
            steps: [
              { reasoning: "'Really? That's interesting.' is a short response acknowledging the speaker.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Really? That's interesting.'",
            commonErrors: ["Confusing backchannels with full turns that change the topic."],
          },
        },
        {
          id: "langb-u3-q55",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is NOT a tool for extending a conversation turn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delivering a memorised speech" },
              { id: "b", text: "Asking a follow-up question" },
              { id: "c", text: "Using a backchannel like 'really?'" },
              { id: "d", text: "Making a comment about what was said" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Turn extension tools", statement: "Questions, backchannels and comments keep interaction alive." },
            ],
            steps: [
              { reasoning: "A memorised speech ignores the partner and ends interaction rather than extending it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Delivering a memorised speech",
            commonErrors: ["Listing only questions and ignoring listener-side tools."],
          },
        },
        {
          id: "langb-u3-q56",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what backchannels are and why listeners should use them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening signals", statement: "Backchannels prove engagement and encourage the speaker." },
            ],
            steps: [
              { reasoning: "Backchannels are short responses like 'mm-hm', 'I see', 'really?'.", marks: 1, markCode: "M" },
              { reasoning: "They show the listener is paying attention without interrupting.", marks: 1, markCode: "M" },
              { reasoning: "They encourage the speaker to continue and build rapport.", marks: 1, markCode: "R" },
              { reasoning: "Total silence can seem disinterested, and examiners notice engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Backchannels are brief attention signals that encourage the speaker and prove engagement.",
            commonErrors: ["Thinking silence is neutral — it can read as disinterest."],
          },
        },
        {
          id: "langb-u3-q57",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a conversation is described as a shared responsibility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collaborative dialogue", statement: "Both partners share the work of keeping interaction alive." },
            ],
            steps: [
              { reasoning: "Both partners must contribute — a conversation needs at least two active participants.", marks: 1, markCode: "M" },
              { reasoning: "One-sided yes/no answers starve the conversation of material.", marks: 1, markCode: "R" },
              { reasoning: "Each turn should hand the conversation back via a question or comment.", marks: 1, markCode: "M" },
              { reasoning: "Sustained interaction is what speaking assessments actually measure.", marks: 1, markCode: "M" },
              { reasoning: "A one-sided exchange is a monologue, not a conversation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both partners must respond, extend and hand back turns — otherwise the dialogue dies.",
            commonErrors: ["Treating conversation as taking turns delivering speeches."],
          },
        },
        {
          id: "langb-u3-q58",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your partner says: 'I really enjoy playing chess.'",
          parts: [
            { label: "a", prompt: "Write one reaction or backchannel response.", marks: 2 },
            { label: "b", prompt: "Write two follow-up questions about chess.", marks: 2 },
            { label: "c", prompt: "Explain how your responses keep the conversation going.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conversation extension", statement: "Reaction plus follow-up questions sustain turn-taking." },
            ],
            steps: [
              { part: "a", reasoning: "A natural reaction such as 'Oh, chess? That's great!' or 'Really? How long have you played?'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The response acknowledges the partner and shows interest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two relevant follow-ups, e.g. 'What do you like about chess?' and 'Do you play online or with friends?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both questions stay on the chess topic.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The reaction shows active listening and builds rapport.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The questions hand the turn back and invite more detail.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Together they deepen the topic instead of ending it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Interested reaction. (b) Two on-topic follow-up questions. (c) Reaction + questions sustain and deepen the exchange.",
            commonErrors: ["Asking questions about a different topic or giving only 'yes/no' answers."],
          },
        },
        {
          id: "langb-u3-q59",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Give two repair phrases and explain when you would use them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Repair strategies", statement: "Repair phrases resolve misunderstandings politely." },
            ],
            steps: [
              { reasoning: "'Sorry, could you repeat that?' or 'Could you say that again, please?'", marks: 1, markCode: "M" },
              { reasoning: "'What do you mean by...?' or 'I don't quite understand.'", marks: 1, markCode: "M" },
              { reasoning: "Use them when you miss something or do not understand a word or idea.", marks: 1, markCode: "M" },
              { reasoning: "They keep communication going politely instead of guessing wrongly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Could you repeat that?' and 'What do you mean by...?' — used when a message is unclear.",
            commonErrors: ["Avoiding clarification and pretending to understand."],
          },
        },
        {
          id: "langb-u3-q60",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain why Language B oral exams reward sustained, natural interaction over memorised answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Speaking assessment", statement: "Oral criteria measure communicative competence, not recitation." },
            ],
            steps: [
              { reasoning: "The assessment measures real communication ability, not memory.", marks: 1, markCode: "M" },
              { reasoning: "Interaction shows you can respond to an unpredictable partner.", marks: 1, markCode: "R" },
              { reasoning: "Follow-up questions and reactions prove genuine engagement.", marks: 1, markCode: "M" },
              { reasoning: "Memorised answers ignore what the partner actually says and stall dialogue.", marks: 1, markCode: "R" },
              { reasoning: "Assessment criteria explicitly reward interactive communication strategies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oral exams test communication with a live partner; sustained interaction demonstrates real competence.",
            commonErrors: ["Preparing fixed answers instead of responding to the partner."],
          },
        },
      ],
    },
    {
      id: "langb-u3-responding",
      title: "Responding appropriately",
      skill: "Choose appropriate responses — agreeing, disagreeing politely, clarifying — to match the social situation.",
      lesson: {
        sections: [
          {
            heading: "The response spectrum",
            body: "Not every reply is equal. **Agreeing**: 'Exactly!', 'I agree completely.' **Disagreeing politely**: 'I'm not sure I agree', 'That's a good point, but...' — direct contradiction ('You're wrong') damages rapport. **Clarifying**: 'Do you mean...?' **Expressing opinion**: 'In my opinion...', 'I think...'. Choosing the right response type is a pragmatic skill.",
          },
          {
            heading: "Politeness strategies",
            body: "Soften disagreement with hedges: 'perhaps', 'maybe', 'I see your point, however...'. Soften requests: 'Could you...?', 'Would you mind...?'. In many cultures indirectness signals politeness — directness can seem rude. When unsure of cultural norms, err on the side of polite and clear rather than blunt.",
          },
          {
            heading: "Register in speech",
            body: "Spoken register shifts with the person: friends get slang and casual phrasing; teachers and officials get fuller, more formal language. In Language B oral assessments, adapting your register to the examiner/interlocutor is part of the communicative competence being marked. Watch how your partner speaks and mirror appropriately.",
          },
        ],
        keyFormulas: [
          { name: "Disagreement softeners", statement: "I'm not sure I agree / That's a good point, but / Perhaps..." },
          { name: "Request forms", statement: "Could you...? / Would you mind...? / I was wondering if..." },
        ],
        workedExample: {
          problem: "Partner says 'I think homework is useless.' You disagree. Respond politely.",
          solution: "'I see your point, but I think homework helps us remember things. What do you think?' — acknowledges, disagrees softly, returns the turn.",
        },
      },
      questions: [
        {
          id: "langb-u3-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which response shows polite disagreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You're completely wrong.'" },
              { id: "b", text: "'I don't want to talk about it.'" },
              { id: "c", text: "'Whatever.'" },
              { id: "d", text: "'That's a good point, but I see it differently.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite disagreement", statement: "Acknowledge the point, then soften the disagreement." },
            ],
            steps: [
              { reasoning: "Polite disagreement acknowledges then qualifies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'That's a good point, but I see it differently.'",
            commonErrors: ["Choosing blunt contradiction that ends the exchange."],
          },
        },
        {
          id: "langb-u3-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three strategies for softening a request or disagreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Politeness strategies", statement: "Hedges, indirect forms and acknowledgement soften speech." },
            ],
            steps: [
              { reasoning: "Hedge words: 'perhaps', 'maybe', 'I think', 'possibly'.", marks: 1, markCode: "M" },
              { reasoning: "Indirect forms: 'Could you...?', 'Would you mind...?', 'I was wondering if...'.", marks: 1, markCode: "M" },
              { reasoning: "Acknowledgement first: 'I see your point, but...' before disagreeing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hedges, indirect question forms, acknowledge-then-qualify.",
            commonErrors: ["Using direct commands or blunt contradiction with authority figures."],
          },
        },
        {
          id: "langb-u3-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'active listening' matters in a spoken Language B assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening", statement: "Responding to what was actually said shows engagement and enables relevant replies." },
            ],
            steps: [
              { reasoning: "Active listening means responding to the partner's actual words, not rehearsing your own speech.", marks: 1, markCode: "M" },
              { reasoning: "It produces relevant responses — examiners notice when answers ignore the partner.", marks: 1, markCode: "R" },
              { reasoning: "Backchannels and follow-up questions prove engagement and sustain interaction.", marks: 1, markCode: "M" },
              { reasoning: "Assessment criteria reward interactive communication, not monologue performance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active listening produces relevant responses and proves engagement — both rewarded in oral assessment.",
            commonErrors: ["Preparing answers mentally instead of responding to the partner."],
          },
        },
        {
          id: "langb-u3-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your conversation partner (a teacher) says: 'I think students should have less homework.' You partly disagree.",
          parts: [
            { label: "a", prompt: "Write a response that acknowledges their point before disagreeing.", marks: 2 },
            { label: "b", prompt: "Write a polite follow-up question to keep the discussion going.", marks: 2 },
            { label: "c", prompt: "Explain why this approach suits speaking to a teacher.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register-appropriate response", statement: "With authority figures: acknowledge, hedge disagreement, stay polite." },
            ],
            steps: [
              { part: "a", reasoning: "Acknowledgement + hedge + partial disagreement, e.g. 'That's a fair point, but I think some homework helps us learn.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Register is respectful — no slang or blunt contradiction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Polite follow-up, e.g. 'What kind of homework do you think is most useful?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Question extends the topic and hands the turn back.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Teachers are authority figures — direct contradiction would seem disrespectful.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Acknowledgement shows you listened and value the partner's view.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hedged disagreement keeps the exchange open — effective pragmatic competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Fair point, but...' + polite disagreement. (b) Extending question. (c) Respect for authority + engagement = appropriate register.",
            commonErrors: ["Bluntly saying 'I disagree' or ignoring the teacher's point entirely."],
          },
        },
        {
          id: "langb-u3-q61",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which response best softens a request?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Give me that now.'" },
              { id: "b", text: "'Could you pass me that, please?'" },
              { id: "c", text: "'You must hand that over.'" },
              { id: "d", text: "'Pass that immediately.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite requests", statement: "Indirect question forms soften requests." },
            ],
            steps: [
              { reasoning: "'Could you...?' is an indirect, polite request form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Could you pass me that, please?'",
            commonErrors: ["Using direct commands that can sound rude."],
          },
        },
        {
          id: "langb-u3-q62",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'hedge word' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A technical term" },
              { id: "b", text: "A formal greeting" },
              { id: "c", text: "A word that ends the conversation" },
              { id: "d", text: "A word like 'perhaps' or 'maybe' that softens a statement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hedge words", statement: "Hedges soften statements and reduce the force of disagreement or requests." },
            ],
            steps: [
              { reasoning: "Hedges like 'perhaps' and 'maybe' weaken a claim politely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A word like 'perhaps' or 'maybe' that softens a statement",
            commonErrors: ["Confusing hedges with intensifiers that strengthen claims."],
          },
        },
        {
          id: "langb-u3-q63",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Register in speech' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking as loudly as possible" },
              { id: "b", text: "Repeating your partner's words" },
              { id: "c", text: "Adjusting formality to suit the person you are talking to" },
              { id: "d", text: "Using only formal vocabulary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Spoken register shifts with the interlocutor and situation." },
            ],
            steps: [
              { reasoning: "Register is the level of formality adapted to the listener.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adjusting formality to suit the person you are talking to",
            commonErrors: ["Using one fixed style regardless of who you are speaking to."],
          },
        },
        {
          id: "langb-u3-q64",
          difficulty: "core",
          totalMarks: 2,
          stem: "When speaking casually with a close friend, appropriate language would be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highly formal and ceremonial" },
              { id: "b", text: "Technical terminology only" },
              { id: "c", text: "Silence" },
              { id: "d", text: "Casual phrasing and informal expressions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register adaptation", statement: "Close friends allow casual, informal speech." },
            ],
            steps: [
              { reasoning: "Register should match the relationship — friends get casual language.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Casual phrasing and informal expressions",
            commonErrors: ["Using exam-formal language with friends or slang with officials."],
          },
        },
        {
          id: "langb-u3-q65",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In many cultures, indirectness signals politeness because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct statements are always illegal" },
              { id: "b", text: "Indirectness is easier to translate" },
              { id: "c", text: "Blunt contradiction can seem rude or confrontational" },
              { id: "d", text: "Directness shows a lack of vocabulary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Politeness norms", statement: "Indirect phrasing softens disagreement and shows respect in many cultures." },
            ],
            steps: [
              { reasoning: "Direct contradiction can damage rapport, so cultures develop indirect polite forms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Blunt contradiction can seem rude or confrontational",
            commonErrors: ["Assuming directness is universally polite."],
          },
        },
        {
          id: "langb-u3-q66",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Do you mean...?' is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A follow-up question about a new topic" },
              { id: "b", text: "A polite disagreement" },
              { id: "c", text: "A repair/clarifying response" },
              { id: "d", text: "A backchannel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification", statement: "Checking meaning keeps communication accurate." },
            ],
            steps: [
              { reasoning: "'Do you mean...?' checks your understanding of the partner's words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A repair/clarifying response",
            commonErrors: ["Confusing clarification with disagreement."],
          },
        },
        {
          id: "langb-u3-q67",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which phrase best softens a disagreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You're completely wrong.'" },
              { id: "b", text: "'I refuse to discuss this.'" },
              { id: "c", text: "'That's a good point, but I see it differently.'" },
              { id: "d", text: "'Whatever, it doesn't matter.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite disagreement", statement: "Acknowledgement plus hedged disagreement preserves rapport." },
            ],
            steps: [
              { reasoning: "Acknowledging the point before disagreeing softens the response.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'That's a good point, but I see it differently.'",
            commonErrors: ["Using blunt contradiction like 'You're wrong'."],
          },
        },
        {
          id: "langb-u3-q68",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite the blunt statement 'You're wrong.' as a polite disagreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Disagreement rewriting", statement: "Acknowledge, hedge, then state your view." },
            ],
            steps: [
              { reasoning: "Acknowledge the partner's point first, e.g. 'I see what you mean, but...'.", marks: 1, markCode: "M" },
              { reasoning: "Use a hedge or softener such as 'perhaps' or 'I think'.", marks: 1, markCode: "M" },
              { reasoning: "State your own view, e.g. 'I see it differently' or 'I think it depends'.", marks: 1, markCode: "M" },
              { reasoning: "Optionally return the turn with a question to keep the exchange open.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'I see what you mean, but I think I see it a bit differently. What do you think?'",
            commonErrors: ["Keeping the blunt contradiction while adding only one soft word."],
          },
        },
        {
          id: "langb-u3-q69",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why you should adjust your register when speaking to different people.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register adaptation", statement: "Appropriate formality is part of communicative competence." },
            ],
            steps: [
              { reasoning: "Different relationships carry different expectations of formality.", marks: 1, markCode: "M" },
              { reasoning: "Friends get casual language; teachers and officials get fuller, more formal speech.", marks: 1, markCode: "M" },
              { reasoning: "The wrong register can seem rude to authority figures or stiff to friends.", marks: 1, markCode: "R" },
              { reasoning: "Oral assessment marks communicative competence, which includes appropriate register.", marks: 1, markCode: "M" },
              { reasoning: "Adapting register shows pragmatic skill and cultural awareness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Register should match the listener; wrong formality seems rude or distant, and assessment rewards adaptation.",
            commonErrors: ["Using one register for everyone regardless of the situation."],
          },
        },
        {
          id: "langb-u3-q70",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your partner says: 'I think mornings are the best time to study.' You disagree.",
          parts: [
            { label: "a", prompt: "Write a polite response that acknowledges their view before disagreeing.", marks: 2 },
            { label: "b", prompt: "Write a follow-up question to continue the discussion.", marks: 2 },
            { label: "c", prompt: "Explain why 'I see your point, but...' is effective here.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register-appropriate disagreement", statement: "Acknowledge, hedge, disagree softly, then return the turn." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. 'That's a fair point, but I find evenings better for me.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The response acknowledges the partner's view before disagreeing, politely.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'What makes mornings work best for you?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The question extends the topic and hands the turn back.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It validates the partner's view before offering yours, avoiding confrontation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The 'but' signals disagreement is coming while the tone stays respectful.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This keeps the exchange open and models effective pragmatic competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Acknowledge then politely disagree. (b) Extending question. (c) Validation + soft disagreement keeps dialogue open.",
            commonErrors: ["Jumping straight to 'I disagree' without acknowledging the partner."],
          },
        },
        {
          id: "langb-u3-q71",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Give two ways to show agreement and two ways to disagree politely.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Agreement and disagreement", statement: "Appropriate response types maintain rapport." },
            ],
            steps: [
              { reasoning: "Agreement: 'Exactly!', 'I agree completely', 'That's true.'", marks: 1, markCode: "M" },
              { reasoning: "Disagreement: 'I'm not sure I agree', 'That's a good point, but...'", marks: 1, markCode: "M" },
              { reasoning: "Polite forms avoid blunt contradiction which damages rapport.", marks: 1, markCode: "A" },
              { reasoning: "Choosing the right response type is a pragmatic skill assessed in speaking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agree: 'Exactly!', 'I agree'. Disagree politely: 'I'm not sure I agree', 'Good point, but...'.",
            commonErrors: ["Using the same blunt style for agreement and disagreement."],
          },
        },
        {
          id: "langb-u3-q72",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain why 'I see your point, but...' is a useful phrase in conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Acknowledgement phrases", statement: "Acknowledging before disagreeing preserves rapport and keeps dialogue open." },
            ],
            steps: [
              { reasoning: "'I see your point' acknowledges the partner's view first.", marks: 1, markCode: "M" },
              { reasoning: "'But' signals that a different view follows without hostility.", marks: 1, markCode: "M" },
              { reasoning: "It avoids direct contradiction which can end an exchange.", marks: 1, markCode: "R" },
              { reasoning: "The structure keeps the conversation open for continued discussion.", marks: 1, markCode: "M" },
              { reasoning: "It also demonstrates active listening, which examiners reward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It validates the partner, softens disagreement and keeps the exchange open.",
            commonErrors: ["Using the phrase mechanically without genuine acknowledgement."],
          },
        },
      ],
    },
  ],
};
