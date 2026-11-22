import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mla5-u2-lesson-2-1",
  code: "2-1",
  title: "Participating in Formal Discussions and Debates",
  goal: "I CAN contribute to formal discussions with appropriate register, respond to counter-arguments, concede points strategically and maintain a collaborative academic tone.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion D: Writing",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Motion", definition: "The proposition being debated, usually stated as a full sentence." },
    { term: "Rebuttal", definition: "A response that challenges another speaker's argument." },
    { term: "Concession", definition: "Acknowledging a valid point from the opposing side before countering it." },
    { term: "Moderator", definition: "The person who manages a discussion or debate and ensures fair participation." },
    { term: "Consensus", definition: "General agreement reached after discussion." },
  ],
  concepts: [
    {
      id: "mla5-u2-formal-discussion",
      title: "Formal discussion etiquette",
      skill: "Use academic register, active listening phrases and polite disagreement in formal discussions.",
      lesson: {
        sections: [
          {
            heading: "Academic register",
            body: "Formal discussion uses precise, cautious language: 'I would suggest that', 'From my perspective', 'The evidence appears to indicate', 'I take your point, although'. Avoid slang, excessive emotion and vague fillers. Politeness does not mean weak agreement; it means respectful precision.",
          },
          {
            heading: "Responding to others",
            body: "Strong participants **acknowledge** before they **challenge**: 'That is a fair point, but...', 'I understand the concern; however...', 'You raise an important issue, which I would qualify as follows'. This preserves collaboration while maintaining a clear position.",
          },
          {
            heading: "Clarifying and checking",
            body: "In formal discussion, check understanding before responding: 'If I understand correctly, you are arguing that...', 'Could you clarify whether...', 'Am I right in thinking that...?' This reduces misunderstanding and models intellectual honesty.",
          },
        ],
        keyFormulas: [
          { name: "Formal agreement + challenge", statement: "I take your point, but / That is fair; however / I understand, yet" },
          { name: "Clarifying phrases", statement: "If I understand correctly / Could you clarify / Am I right in thinking" },
        ],
        workedExample: {
          problem: "Peer says: 'Uniforms are expensive.' Respond formally while disagreeing partially.",
          solution: "'That is a valid concern; however, the initial cost may be offset by reduced spending on trend-based clothing.'",
        },
      },
      questions: [
        {
          id: "mla5-u2-formal-discussion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is most appropriate for formal academic discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You're totally wrong.'" },
              { id: "b", text: "'That is stupid.'" },
              { id: "c", text: "'I take your point, although the evidence suggests otherwise.'" },
              { id: "d", text: "'Whatever.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register", statement: "Academic discussion uses respectful, precise language." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — option b acknowledges then challenges formally.", working: "acknowledge-challenge", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'I take your point, although the evidence suggests otherwise.'",
            commonErrors: ["Choosing polite-sounding but vague language instead of precise challenge."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I think homework should be abolished because it causes stress.'\nStudent B: 'I understand the concern about stress, but the issue may be quality rather than quantity. Could you clarify whether you mean all homework or excessive homework?'",
          },
          stem: "Identify two formal discussion strategies used by Student B.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion strategies", statement: "Acknowledge, qualify and clarify before responding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — acknowledges concern: 'I understand the concern about stress.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — qualifies position: issue may be quality rather than quantity.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — asks clarifying question to avoid misunderstanding.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Acknowledgement, qualification and clarification.",
            commonErrors: ["Missing the clarifying question."],
            examinerNote: "Two or more strategies must be identified.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Panel Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Moderator: 'Should schools ban smartphones entirely?'\nSpeaker A: 'Yes — phones undermine attention and deepen inequality.'\nSpeaker B: 'I see the inequality point. However, an outright ban may remove access to learning tools and emergency contact. A more targeted policy could work better.'",
          },
          stem: "Explain how Speaker B contributes constructively and evaluate the quality of the exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Constructive disagreement", statement: "Concede valid point, qualify and propose alternative." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Speaker B concedes 'inequality point' before challenging.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — challenges with qualified 'may' rather than absolute claim.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — proposes targeted policy as alternative.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — exchange is collaborative but still clearly positioned.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Speaker B concedes a point, qualifies disagreement and offers an alternative — a constructive, balanced contribution.",
            commonErrors: ["Treating concession as surrender rather than strategic acknowledgement."],
            examinerNote: "Must evaluate contribution quality, not just content.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Class Debate",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Motion: 'This house believes social media does more harm than good.'\nFor: 'Social media spreads misinformation and damages mental health.'\nAgainst: 'It connects communities and supports learning.'\nModerator: 'Please respond to the strongest argument, not the weakest.'",
          },
          stem: "Prepare and write responses as if participating in the debate.",
          parts: [
            { label: "a", prompt: "State the motion clearly.", marks: 1 },
            { label: "b", prompt: "Write a 40-word opening statement for the 'for' side.", marks: 2 },
            { label: "c", prompt: "Write a 40-word rebuttal from the 'against' side.", marks: 3 },
            { label: "d", prompt: "Write a 30-word concession plus counter-argument.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate production", statement: "Clear motion, position, rebuttal and concession." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — motion stated accurately.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — opening states clear position and reason.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — formal register and accuracy within word range.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — rebuttal targets strongest opposing argument.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — uses concession or qualification.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — clear, accurate academic language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — concession acknowledges valid point.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — counter-argument is distinct and relevant.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) motion (b) for-opening (c) against-rebuttal (d) concession + counter.",
            commonErrors: ["Rebutting only weak arguments or failing to concede."],
            examinerNote: "Responses should model formal debate conventions.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is most appropriate for a formal academic discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You are so wrong, OBVIOUSLY" },
              { id: "b", text: "Whatever, I guess" },
              { id: "c", text: "I would suggest that the evidence points elsewhere" },
              { id: "d", text: "That's totally bogus, honestly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic register", statement: "Formal discussion uses precise, cautious and respectful language." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — only (b) is precise, cautious and respectful.", working: "formal register", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** I would suggest that the evidence points elsewhere",
            commonErrors: ["Choosing slang or emphatic informal language."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of saying 'If I understand correctly, you are arguing that...' in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check understanding before responding" },
              { id: "b", text: "To end the discussion politely" },
              { id: "c", text: "To agree with everything said" },
              { id: "d", text: "To show the speaker is confused" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Clarifying phrases", statement: "Checking understanding reduces miscommunication." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — the phrase verifies the other speaker's position first.", working: "clarify", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** To check understanding before responding",
            commonErrors: ["Reading it as disagreement rather than clarification."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Discussion Transcript",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Speaker 1: 'Uniforms are too expensive for many families.' Speaker 2: 'That is a valid concern; however, the initial cost may be offset by reduced spending on trend-based clothing.'",
          },
          stem: "Which feature of Speaker 2's response is most formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acknowledging the point with 'That is a valid concern' before qualifying" },
              { id: "b", text: "Saying 'too expensive'" },
              { id: "c", text: "Using the word 'clothing'" },
              { id: "d", text: "Speaking at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite disagreement", statement: "Acknowledge before challenging to preserve collaboration." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'valid concern' acknowledges before 'however' qualifies.", working: "acknowledge+challenge", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Acknowledging the point with 'That is a valid concern' before qualifying",
            commonErrors: ["Choosing vocabulary rather than discourse structure."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "I would suggest that the policy may have benefits, although the evidence is limited. Could you clarify whether you mean the short-term or long-term effects?",
          },
          stem: "How many formal hedging or clarifying expressions appear in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Formal expressions", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register markers", statement: "'Would suggest', 'may', 'although' and 'could you clarify' mark formal register." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — count 'I would suggest', 'may', 'although', 'Could you clarify' = 4.", working: "4", marks: 1, markCode: "C" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting 'the' or 'you' instead of phrases."],
            examinerNote: "Accept 4.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this informal contribution formally: 'Your idea is dumb, but maybe uniforms do help poor kids save money.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register transformation", statement: "Replace judgement and slang with precise, respectful language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes insult 'dumb' and slang 'kids'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — preserves the concession and partial agreement using 'however' or 'although'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — resulting sentence is precise, polite and academically appropriate.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Example: 'I understand the intention, although I question the premise; uniforms may reduce costs for some families.'",
            commonErrors: ["Keeping the insult while changing only a few words."],
            examinerNote: "Must change register, not just vocabulary.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Discussion Transcript",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Speaker A: 'I take your point about cost, although I would qualify it: the long-term savings may outweigh the initial expense.'",
          },
          stem: "Which two discourse moves does Speaker A combine in this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Example and definition" },
              { id: "b", text: "Agreement and conclusion" },
              { id: "c", text: "Acknowledgement and qualified challenge" },
              { id: "d", text: "Question and summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discourse moves", statement: "'I take your point' acknowledges; 'although I would qualify' challenges politely." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'take your point' = acknowledgement; 'although I would qualify' = challenge.", working: "acknowledge+qualify", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Acknowledgement and qualified challenge",
            commonErrors: ["Missing the two-part structure."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Discussion Transcript",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Speaker A: 'Online learning is more flexible.' Speaker B: 'You raise an important point, which I would qualify as follows: flexibility may benefit some students, yet it can disadvantage those without reliable internet or quiet study space.'",
          },
          stem: "Explain how Speaker B responds to Speaker A and what position Speaker B adopts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified response", statement: "Acknowledge the point, then add conditions and counter-considerations." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — acknowledges 'important point' before qualifying.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — concedes flexibility 'may benefit some students'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — adds limitation: unreliable internet or quiet space.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — position: partial agreement with significant qualifications.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Speaker B partially agrees: flexibility helps some but disadvantages others without resources.",
            commonErrors: ["Describing Speaker B as fully supportive or fully opposed."],
            examinerNote: "Must capture the qualified middle position.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Discussion Transcript",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Could you clarify whether you mean short-term effects? Am I right in thinking that you support the policy? If I understand correctly, your concern is cost.",
          },
          stem: "How many clarifying questions appear, and how many statements of understanding appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "Clarifying questions", answer: 2 },
              { label: "Statements of understanding", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification counting", statement: "Distinguish genuine questions from statements checking understanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Could you clarify' and 'Am I right in thinking' are questions/checks = 2.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — 'If I understand correctly' is a statement = 1.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2 questions/checks; 1 statement.",
            commonErrors: ["Counting all three as questions."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Discussion Rule",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "In formal discussion, polite disagreement means respecting the speaker while maintaining a clear position.",
          },
          stem: "How many elements does this definition of polite disagreement contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polite disagreement", statement: "Respect the speaker while maintaining a clear position." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — elements: respect + clear position = 2.", working: "2", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'discussion' as an element."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the pattern 'That is a fair point, but...' typically do in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asks for evidence" },
              { id: "b", text: "Ends the debate" },
              { id: "c", text: "Changes the subject" },
              { id: "d", text: "Acknowledges a point before introducing disagreement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agreement-challenge pattern", statement: "'Fair point, but' balances acknowledgement with counter-argument." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'fair point' acknowledges; 'but' introduces the challenge.", working: "acknowledge+challenge", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Acknowledges a point before introducing disagreement",
            commonErrors: ["Reading it as full agreement."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Discussion: Part-time Jobs",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Chair: 'Should students be allowed to work part-time during term time?' Student A: 'I would argue yes, because work builds responsibility and financial awareness.' Student B: 'That is a fair point; however, long hours can reduce study time and increase stress.' Teacher: 'If I understand correctly, you both see benefits but worry about balance. Could you clarify what limit you would propose?'",
          },
          stem: "Read the discussion and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the discussion question.", marks: 1 },
            { label: "b", prompt: "Give two reasons Student A supports part-time work.", marks: 2 },
            { label: "c", prompt: "What qualified position does Student B take?", marks: 2 },
            { label: "d", prompt: "Write a 60-80 word synthesis of the discussion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion synthesis", statement: "Identify positions, qualifications and clarifying moves." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — whether students should work part-time in term time.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 1: builds responsibility.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 2: builds financial awareness.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — accepts benefit but warns about study time and stress.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — implies balance or limits are needed.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion B: Reading — synthesis captures support, caution and call for balance.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — formal register and cohesion.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) part-time work in term time (b) responsibility; financial awareness (c) benefits but balance needed (d) accurate synthesis.",
            commonErrors: ["Saying the discussion reached no conclusion."],
            examinerNote: "(d) should capture the shared concern about balance.",
          },
        },
        {
          id: "mla5-u2-formal-discussion-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Discussion Transcript",
            author: "Written for Akademik Space",
            source: "Formal discussion practice",
            text: "Asked about untested claims, the student replied: 'I would need to check the data, but my initial view is that the trend is real.'",
          },
          stem: "Why is this response effective in a formal discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses slang effectively" },
              { id: "b", text: "It balances honesty about uncertainty with a stated position" },
              { id: "c", text: "It criticises the questioner" },
              { id: "d", text: "It avoids giving any view" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Honest qualification", statement: "Admitting what is unknown while stating a view models intellectual honesty." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'need to check' admits limits; 'initial view' still contributes.", working: "honest+position", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It balances honesty about uncertainty with a stated position",
            commonErrors: ["Thinking admitting uncertainty weakens the response."],
            examinerNote: "C1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u2-structured-presentation",
      title: "Structured presentations and panel contributions",
      skill: "Plan and deliver structured academic presentations with clear thesis, evidence, transitions and response to questions.",
      lesson: {
        sections: [
          {
            heading: "Presentation architecture",
            body: "An academic presentation needs: **hook/context**, **thesis**, **two or three supporting points**, **evidence**, **qualification** and **conclusion**. Each point should answer 'why does this matter?' Signpost clearly: 'My first point is...', 'This leads to my second point...', 'To conclude...'.",
          },
          {
            heading: "Evidence and visuals",
            body: "Use evidence selectively: statistics need interpretation, quotations need attribution, visuals need explanation. Do not let a slide carry the argument; explain what it shows and why it matters. If visuals are unavailable, describe them verbally in clear sequence.",
          },
          {
            heading: "Handling questions",
            body: "For questions: restate briefly, answer directly, qualify if needed and invite follow-up: 'That is an important point; my response is...', 'I would need to check the data, but my initial view is...'. If you do not know, say so honestly rather than improvising inaccurately.",
          },
        ],
        keyFormulas: [
          { name: "Presentation structure", statement: "Hook -> Thesis -> Points + evidence -> Qualification -> Conclusion" },
          { name: "Question response", statement: "Restate -> Answer -> Qualify -> Invite follow-up" },
        ],
        workedExample: {
          problem: "Presentation thesis: 'Uniforms can reduce inequality but may limit expression.' How should it be developed?",
          solution: "Point 1: cost/equality benefit. Point 2: identity/expression cost. Qualification: depends on policy design. Conclusion: balanced approach.",
        },
      },
      questions: [
        {
          id: "mla5-u2-structured-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a presentation thesis do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State the central argument clearly and early" },
              { id: "b", text: "Introduce the speaker's biography" },
              { id: "c", text: "List every fact the speaker knows" },
              { id: "d", text: "End the presentation politely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "The central argument stated clearly and early." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — thesis = central argument early.", working: "thesis", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** State the central argument clearly and early",
            commonErrors: ["Confusing thesis with topic announcement."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: Should schools teach financial literacy?\nOpening: many students lack budgeting skills.\nThesis: financial literacy should be compulsory.\nPoint 1: practical life skills. Point 2: reduces debt risk. Point 3: supports future independence.",
          },
          stem: "Identify the thesis and two supporting points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation structure", statement: "Thesis plus supporting points must be clear." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — thesis: financial literacy should be compulsory.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — supporting point 1: practical life skills.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — supporting point 2: reduces debt risk / supports independence.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Thesis: compulsory financial literacy; points: practical skills, debt risk, independence.",
            commonErrors: ["Listing the opening context as the thesis."],
            examinerNote: "Must distinguish thesis from supporting points.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Q&A Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student: 'Your report says phones reduce focus. But my cousin uses a phone to record lectures and scores improve. How do you respond?'\nPresenter: 'That is an important example. My claim concerns passive scrolling during class; your cousin's use is active and purposeful. The distinction matters.'",
          },
          stem: "Evaluate how the presenter handles the challenge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Handling challenges", statement: "Acknowledge example, clarify claim and distinguish categories." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — acknowledges question as important rather than dismissing it.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — clarifies original claim: passive scrolling during class.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — distinguishes active purposeful use from passive use.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — response is respectful and logically precise.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The presenter handles it well by acknowledging the example, narrowing the claim and distinguishing use types.",
            commonErrors: ["Defending the original claim without recognising valid counterexample."],
            examinerNote: "Must evaluate handling quality, not just answer correctness.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Presentation Scenario",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "You must present for three minutes on: 'Is online learning as effective as classroom learning?' The audience includes teachers and students. You have a chart showing test scores but no data on engagement or wellbeing.",
          },
          stem: "Plan and write your presentation notes and answer one likely question.",
          parts: [
            { label: "a", prompt: "Write a one-sentence thesis.", marks: 1 },
            { label: "b", prompt: "Write an opening sentence that contextualises the issue.", marks: 1 },
            { label: "c", prompt: "Write two supporting points with brief evidence.", marks: 3 },
            { label: "d", prompt: "Write a response to the question: 'What evidence is missing?'", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation planning", statement: "Thesis, context, evidence and honest limitation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — thesis is clear and arguable.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — opening gives relevant context.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — point 1 with evidence.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — point 2 with evidence.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — accurate language and structure.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — identifies missing engagement/wellbeing data.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — acknowledges limitation without undermining thesis.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — formal, precise response.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) thesis (b) context (c) two evidenced points (d) limitation response.",
            commonErrors: ["Claiming complete evidence despite missing engagement data."],
            examinerNote: "(d) should model intellectual honesty.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a 'hook' at the start of an academic presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To give the conclusion" },
              { id: "b", text: "To list all the evidence" },
              { id: "c", text: "To capture attention and introduce the context" },
              { id: "d", text: "To apologise for the topic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation architecture", statement: "Hook/context opens the presentation before the thesis." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — the hook engages and frames context.", working: "hook", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** To capture attention and introduce the context",
            commonErrors: ["Confusing the hook with the conclusion."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between a presentation topic and a thesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A topic is spoken; a thesis is written" },
              { id: "b", text: "A thesis is always longer" },
              { id: "c", text: "There is no difference" },
              { id: "d", text: "A topic names the subject; a thesis makes an arguable claim" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "An arguable claim that the presentation will defend." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — topic = subject; thesis = arguable position.", working: "claim", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** A topic names the subject; a thesis makes an arguable claim",
            commonErrors: ["Treating the thesis as a topic label."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Presentation Outline",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "1. Hook: surprising statistic about homework. 2. Thesis: homework quality matters more than quantity. 3. Evidence: two studies on task design. 4. Conclusion: policy should set limits.",
          },
          stem: "Which standard presentation element is missing from this outline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conclusion" },
              { id: "b", text: "An explicit qualification of the claim" },
              { id: "c", text: "The hook" },
              { id: "d", text: "The thesis" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation architecture", statement: "Hook -> Thesis -> Points + evidence -> Qualification -> Conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — qualification ('it depends on...') is absent.", working: "qualification", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** An explicit qualification of the claim",
            commonErrors: ["Missing that qualification is a distinct element."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "The plan lists: context, thesis, two supporting points, one piece of evidence, one qualification and a conclusion.",
          },
          stem: "How many structural elements does the plan contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure counting", statement: "Count each planned element accurately." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — count the listed elements: context, thesis, supporting points, evidence, qualification, conclusion = 6.", working: "6", marks: 1, markCode: "C" },
            ],
            finalAnswer: "6",
            commonErrors: ["Forgetting the qualification or counting 'two' as a separate number."],
            examinerNote: "Accept 6; count each listed element once.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these presentation elements in the correct order: conclusion; hook; thesis; supporting evidence; qualification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation sequencing", statement: "Hook -> Thesis -> Evidence -> Qualification -> Conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — hook opens the presentation.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — thesis then evidence then qualification follow.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — conclusion closes the sequence.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Hook -> Thesis -> Supporting evidence -> Qualification -> Conclusion",
            commonErrors: ["Placing the conclusion before the qualification."],
            examinerNote: "Full sequence must be correct.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Question Exchange",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "Audience: 'Your data only covers one school.' Speaker: 'That is an important point; my response is that the pattern matched national trends, though I would need to check the latest figures.'",
          },
          stem: "Which sequence does the speaker use to handle the question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat question, change topic" },
              { id: "b", text: "Ignore, deflect, close" },
              { id: "c", text: "Acknowledge, answer, qualify" },
              { id: "d", text: "Agree completely, move on" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question handling", statement: "Restate/acknowledge -> answer -> qualify -> invite follow-up." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'important point' acknowledges; 'my response is' answers; 'though I would need to check' qualifies.", working: "ack-answer-qualify", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Acknowledge, answer, qualify",
            commonErrors: ["Missing the qualification move."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Presentation Script",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "Speaker: 'Some say uniforms reduce inequality. My first point is that they can lower visible differences in clothing cost. My second point is that they may protect students from trend pressure. However, uniforms can also limit self-expression, which is why my conclusion is that design matters more than the uniform itself.'",
          },
          stem: "Evaluate how the speaker structures the argument and qualifies the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structured argument", statement: "Clear signposts, two-sided points and a qualified conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — signposts: 'My first point', 'My second point'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — two benefits identified: cost equality and trend pressure.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — counter-point: uniforms can limit self-expression.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — conclusion is qualified: design matters more than the uniform.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Well-structured: signposted points, acknowledged cost, conditional conclusion about design.",
            commonErrors: ["Missing the qualification in the conclusion."],
            examinerNote: "Must identify structure and the qualified ending.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Presentation Script",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "My first point is cost. This leads to my second point: identity. To conclude, both points support a balanced policy.",
          },
          stem: "How many structural signposts appear, and how many supporting points are signposted?",
          response: {
            type: "numeric",
            parts: [
              { label: "Signposts", answer: 3 },
              { label: "Signposted points", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signpost counting", statement: "'First point', 'second point' and 'to conclude' are signposts." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'first point', 'leads to my second point', 'to conclude' = 3 signposts.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — cost and identity = 2 signposted points.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "3 signposts; 2 points.",
            commonErrors: ["Counting 'both' as a signpost."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Thesis Check",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "Thesis: 'Homework can support independent learning, but compulsory homework is effective only when it is purposeful and equitably designed.'",
          },
          stem: "How many claims does this thesis contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Claims", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Qualified thesis", statement: "A thesis may contain a benefit and a condition." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — claim 1: homework can support learning; claim 2: effectiveness depends on design = 2.", working: "2", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'but' as a claim."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A presenter shows a slide with a statistic: '85% of students prefer digital notes.' What should the presenter do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read the slide aloud and move on" },
              { id: "b", text: "Skip the statistic entirely" },
              { id: "c", text: "Explain what the statistic shows and why it matters" },
              { id: "d", text: "Assume everyone understands it" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence use", statement: "Statistics need interpretation and connection to the argument." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — evidence must be explained, not just displayed.", working: "interpret", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Explain what the statistic shows and why it matters",
            commonErrors: ["Letting the slide carry the argument."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Presentation Plan: Sleep and Learning",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "Thesis: 'Sleep quality affects learning more than study time alone.'\nPoint 1: memory consolidation during sleep.\nPoint 2: attention and mood effects of poor sleep.\nEvidence: study showing 30% better recall after adequate sleep.\nQualification: individual needs vary; correlation is not proof of cause.",
          },
          stem: "Read the plan and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the presentation thesis.", marks: 1 },
            { label: "b", prompt: "List the two supporting points.", marks: 2 },
            { label: "c", prompt: "Give the evidence and the qualification.", marks: 2 },
            { label: "d", prompt: "Write a 60-80 word conclusion for the presentation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation construction", statement: "Thesis, points, evidence, qualification and conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — sleep quality affects learning more than study time alone.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 1: memory consolidation during sleep.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 2: attention and mood effects of poor sleep.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — evidence: 30% better recall after adequate sleep.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — qualification: individual variation; correlation is not causation.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — conclusion synthesises points and honours the qualification.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — clear, formal delivery language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate and within the word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) sleep vs study time (b) memory consolidation; attention/mood (c) 30% recall; individual variation (d) synthesising conclusion.",
            commonErrors: ["Ending with new evidence instead of synthesis."],
            examinerNote: "(d) must synthesise, not introduce new points.",
          },
        },
        {
          id: "mla5-u2-structured-presentation-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Presentation Ending",
            author: "Written for Akademik Space",
            source: "Presentation planning practice",
            text: "Speaker: 'In conclusion, uniforms reduce inequality but may limit expression, so balanced design matters more than the uniform itself.'",
          },
          stem: "Why is this conclusion effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids taking any position" },
              { id: "b", text: "It introduces a brand-new argument" },
              { id: "c", text: "It repeats the hook word for word" },
              { id: "d", text: "It synthesises both sides into a qualified judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion function", statement: "A strong conclusion synthesises the argument rather than repeating it." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — conclusion weighs benefit and cost, then gives a conditional judgement.", working: "synthesis", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It synthesises both sides into a qualified judgement",
            commonErrors: ["Thinking repetition equals a good conclusion."],
            examinerNote: "C1 for (b).",
          },
        },
      ],
    },
  ],
};
