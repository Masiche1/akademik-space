import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "langb-u3-lesson-3-3",
  code: "3-3",
  title: "Intercultural Understanding Basics",
  goal: "I CAN recognise cultural differences in communication and respond with respect and curiosity.",
  standards: ["Intercultural", "Communication", "Culture", "Language B SL"],
  vocabulary: [
    { term: "Intercultural competence", definition: "The ability to communicate effectively and appropriately with people from other cultures." },
    { term: "Cultural stereotype", definition: "An oversimplified, fixed idea about a group that ignores individual differences." },
    { term: "High-context culture", definition: "A culture relying on shared context, indirectness and non-verbal cues in communication." },
    { term: "Low-context culture", definition: "A culture relying on explicit, direct verbal communication with little assumed context." },
    { term: "Politeness norms", definition: "Culturally variable rules for showing respect — greetings, requests, disagreement." },
    { term: "Cultural relativism", definition: "The view that behaviours should be understood within their own cultural context, not judged by your own." },
  ],
  concepts: [
    {
      id: "langb-u3-culture-in-communication",
      title: "How culture shapes communication",
      skill: "Recognise how cultural context affects greetings, directness, personal space and politeness in communication.",
      lesson: {
        sections: [
          {
            heading: "Culture is invisible until it differs",
            body: "You learned your own communication rules as a child without noticing them — when to greet, how close to stand, whether to look people in the eye. Meeting someone from another culture reveals these rules: what feels polite to you may feel cold, distant or even rude to them. **Intercultural competence** begins with noticing that your 'normal' is culturally specific.",
          },
          {
            heading: "Directness and context",
            body: "Cultures differ in how much they rely on **context**. Low-context cultures (e.g. much of northern Europe and North America) value explicit, direct statements — 'No' means no. High-context cultures rely on implication, shared knowledge and indirect phrasing — a refusal may sound like 'I'll try' when it means no. Misreading this causes real misunderstandings.",
          },
          {
            heading: "Greetings and personal space",
            body: "Greeting customs vary enormously: handshakes, bows, cheek kisses, or simply a nod. Personal space norms differ by culture — what feels friendly to one person feels intrusive to another. In Language B, demonstrating awareness of these differences — and asking politely when unsure — is a core intercultural skill assessed in both comprehension and production.",
          },
        ],
        keyFormulas: [
          { name: "High vs low context", statement: "High: implicit, indirect, shared knowledge. Low: explicit, direct, stated clearly." },
          { name: "Cultural awareness", statement: "Notice difference -> don't judge -> ask politely when unsure" },
        ],
        workedExample: {
          problem: "A classmate from another culture stands very close when talking. Are they being rude?",
          solution: "No — personal space norms are cultural. Some cultures stand closer than others. It is not rudeness, just a different norm; neither party is wrong.",
        },
      },
      questions: [
        {
          id: "langb-u3-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'high-context' culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A culture where everyone speaks loudly" },
              { id: "b", text: "A culture that avoids all social contact" },
              { id: "c", text: "A culture with many famous landmarks" },
              { id: "d", text: "A culture relying on shared context and indirect communication" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "High-context culture", statement: "Communication relies on shared background knowledge and implication rather than explicit statements." },
            ],
            steps: [
              { reasoning: "High-context = meaning carried by context and implication.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A culture relying on shared context and indirect communication",
            commonErrors: ["Confusing 'context' with physical setting rather than shared knowledge."],
          },
        },
        {
          id: "langb-u3-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three areas where cultural norms affect communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural variation", statement: "Greetings, personal space, directness and politeness all vary by culture." },
            ],
            steps: [
              { reasoning: "Greetings: handshake, bow, kiss or nod — appropriate form differs.", marks: 1, markCode: "M" },
              { reasoning: "Personal space: comfortable distance between speakers varies by culture.", marks: 1, markCode: "M" },
              { reasoning: "Directness/politeness: how refusal, disagreement and requests are expressed varies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Greetings, personal space, directness/politeness norms.",
            commonErrors: ["Assuming your own norms are universal."],
          },
        },
        {
          id: "langb-u3-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a cultural stereotype and genuine intercultural understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype vs understanding", statement: "Stereotypes fix all members of a group to one image; understanding treats culture as varied and individual." },
            ],
            steps: [
              { reasoning: "A stereotype assigns one fixed trait to everyone from a culture — 'all X are Y'.", marks: 1, markCode: "M" },
              { reasoning: "It ignores individual differences and can be offensive or simply wrong.", marks: 1, markCode: "R" },
              { reasoning: "Intercultural understanding recognises general tendencies while respecting individual variation.", marks: 1, markCode: "M" },
              { reasoning: "It treats the other person as an individual first, a cultural representative second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stereotypes fix a whole group to one image; understanding respects cultural tendencies plus individual difference.",
            commonErrors: ["Confusing 'knowing about a culture' with 'stereotyping its people'."],
          },
        },
        {
          id: "langb-u3-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A new student from another country joins your class and seems very quiet in group discussions.",
          parts: [
            { label: "a", prompt: "Give two possible cultural explanations for their quietness.", marks: 2 },
            { label: "b", prompt: "Explain why jumping to a judgement would be a mistake.", marks: 2 },
            { label: "c", prompt: "Describe how you could respond with intercultural sensitivity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural response", statement: "Behaviour has multiple possible cultural explanations; seek understanding before judging." },
            ],
            steps: [
              { part: "a", reasoning: "Possible explanations: high-context culture values listening over speaking; language confidence is still growing; norms differ on interrupting or speaking in groups.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two plausible cultural explanations offered.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Judging ('they're rude' or 'they're unfriendly') assumes your norms are universal.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "It ignores that quietness may reflect cultural norms, not personality.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Approach politely — invite them gently, pair them with a supportive partner, give them thinking time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Avoid singling them out or forcing participation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Respect + curiosity rather than assumptions = intercultural competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) High-context norms / language confidence / different participation norms. (b) Judging assumes universality. (c) Gentle invitation, support, no pressure.",
            commonErrors: ["Interpreting quietness as rudeness or disinterest without considering cultural causes."],
          },
        },
        {
          id: "langb-u3-q73",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'low-context' culture is one where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-verbal cues carry most meaning" },
              { id: "b", text: "Meaning relies on shared background knowledge and implication" },
              { id: "c", text: "Communication is explicit, direct and states things clearly" },
              { id: "d", text: "People avoid speaking directly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Low-context culture", statement: "Explicit, direct verbal communication with little assumed context." },
            ],
            steps: [
              { reasoning: "Low-context cultures state meaning explicitly rather than implying it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Communication is explicit, direct and states things clearly",
            commonErrors: ["Reversing the definitions of high-context and low-context."],
          },
        },
        {
          id: "langb-u3-q74",
          difficulty: "core",
          totalMarks: 2,
          stem: "A classmate from another culture stands very close when talking to you. This most likely means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are being rude" },
              { id: "b", text: "They dislike you" },
              { id: "c", text: "Their culture has different personal space norms" },
              { id: "d", text: "They are trying to intimidate you" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Personal space norms", statement: "Comfortable distance between speakers varies by culture." },
            ],
            steps: [
              { reasoning: "Personal space is culturally variable; closeness is not necessarily rudeness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Their culture has different personal space norms",
            commonErrors: ["Judging behaviour by your own cultural norms."],
          },
        },
        {
          id: "langb-u3-q75",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The statement 'your normal is culturally specific' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everyone in your family behaves the same way" },
              { id: "b", text: "Your habits are wrong and need changing" },
              { id: "c", text: "What feels normal to you reflects the culture you grew up in" },
              { id: "d", text: "Only your culture has rules of politeness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural awareness", statement: "Every culture has its own learned communication rules." },
            ],
            steps: [
              { reasoning: "Habits like greetings and personal space are learned within a culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What feels normal to you reflects the culture you grew up in",
            commonErrors: ["Assuming your own norms are the universal standard."],
          },
        },
        {
          id: "langb-u3-q76",
          difficulty: "core",
          totalMarks: 2,
          stem: "Greeting customs vary between cultures. Which is an example of this variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every culture greets with a handshake" },
              { id: "b", text: "All greetings happen at the same time of day" },
              { id: "c", text: "Greetings are always spoken aloud" },
              { id: "d", text: "Some cultures bow, some kiss cheeks, some simply nod" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Greeting variation", statement: "Forms of greeting differ widely between cultures." },
            ],
            steps: [
              { reasoning: "Bows, cheek kisses, handshakes and nods are all cultural greeting forms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Some cultures bow, some kiss cheeks, some simply nod",
            commonErrors: ["Assuming your greeting style is the only correct one."],
          },
        },
        {
          id: "langb-u3-q77",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a high-context culture, a refusal might sound like 'I'll try' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct 'no' would be too casual" },
              { id: "b", text: "The speaker cannot find the word 'no'" },
              { id: "c", text: "Indirect phrasing preserves harmony and avoids direct confrontation" },
              { id: "d", text: "It is a translation error" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "High-context indirectness", statement: "Indirect phrasing avoids direct refusal and preserves social harmony." },
            ],
            steps: [
              { reasoning: "High-context cultures prefer implication over direct 'no' to maintain harmony.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Indirect phrasing preserves harmony and avoids direct confrontation",
            commonErrors: ["Taking 'I'll try' literally as agreement."],
          },
        },
        {
          id: "langb-u3-q78",
          difficulty: "core",
          totalMarks: 2,
          stem: "Intercultural competence begins with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Noticing that your own 'normal' is culturally specific" },
              { id: "b", text: "Avoiding contact with other cultures" },
              { id: "c", text: "Memorising facts about every country" },
              { id: "d", text: "Adopting foreign customs immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural awareness", statement: "Recognising your own cultural rules is the first step to understanding others'." },
            ],
            steps: [
              { reasoning: "You cannot see difference until you see your own norms as one option among many.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Noticing that your own 'normal' is culturally specific",
            commonErrors: ["Thinking intercultural skill means knowing facts rather than noticing assumptions."],
          },
        },
        {
          id: "langb-u3-q79",
          difficulty: "core",
          totalMarks: 2,
          stem: "When greeting someone from a culture with different customs, the most appropriate response is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Refuse to greet them at all" },
              { id: "b", text: "Observe local custom and adapt politely" },
              { id: "c", text: "Use your usual greeting confidently" },
              { id: "d", text: "Laugh at their customs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural adaptation", statement: "Adapting greetings to local custom shows intercultural awareness." },
            ],
            steps: [
              { reasoning: "Observing and adapting respects the other culture's norms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Observe local custom and adapt politely",
            commonErrors: ["Using your own greeting without noticing the host's custom."],
          },
        },
        {
          id: "langb-u3-q80",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between high-context and low-context communication, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "High vs low context", statement: "Context reliance determines how directly meaning is expressed." },
            ],
            steps: [
              { reasoning: "Low-context: meaning stated explicitly — 'No' means no, requests are direct.", marks: 1, markCode: "M" },
              { reasoning: "High-context: meaning carried by shared knowledge and implication.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'I'll try' may mean refusal in a high-context culture.", marks: 1, markCode: "A" },
              { reasoning: "Misreading this difference causes real misunderstandings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low-context is explicit and direct; high-context relies on implication — e.g. 'I'll try' may mean no.",
            commonErrors: ["Assuming all cultures communicate with the same directness."],
          },
        },
        {
          id: "langb-u3-q81",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why judging others by your own cultural norms causes problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural relativism", statement: "Behaviour should be understood within its own cultural context." },
            ],
            steps: [
              { reasoning: "Your norms were learned in your culture and are not universal rules.", marks: 1, markCode: "M" },
              { reasoning: "What seems rude to you may be completely normal in another culture.", marks: 1, markCode: "R" },
              { reasoning: "Judging creates offence and misunderstandings on both sides.", marks: 1, markCode: "M" },
              { reasoning: "Suspending judgement and observing first enables real understanding.", marks: 1, markCode: "M" },
              { reasoning: "Intercultural competence means viewing behaviour context-sensitively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Your norms are one culture's rules, not universal ones; judging by them causes offence and blocks understanding.",
            commonErrors: ["Treating your own habits as objective standards of politeness."],
          },
        },
        {
          id: "langb-u3-q82",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A classmate from another culture never makes eye contact during conversations.",
          parts: [
            { label: "a", prompt: "Give two possible cultural explanations for this behaviour.", marks: 2 },
            { label: "b", prompt: "Explain why labelling them as 'rude' would be a mistake.", marks: 2 },
            { label: "c", prompt: "Describe how you could respond with intercultural sensitivity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural interpretation", statement: "Behaviour has multiple possible cultural explanations; seek understanding first." },
            ],
            steps: [
              { part: "a", reasoning: "In some cultures avoiding direct eye contact shows respect.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another explanation: shyness or still-growing confidence in the language.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Labelling assumes your norm (eye contact = respect) is universal.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "It ignores that non-verbal norms like eye contact vary by culture.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Do not force eye contact; respect their style and observe.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "If unsure, ask politely in private about their customs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Curiosity plus respect beats judgement — that is intercultural competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Respect norms / language confidence. (b) Judging assumes universality. (c) Respect their style, ask politely, stay curious.",
            commonErrors: ["Interpreting a cultural difference as a personal flaw."],
          },
        },
        {
          id: "langb-u3-q83",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define 'cultural stereotype' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural stereotype", statement: "An oversimplified fixed idea about a group ignoring individual differences." },
            ],
            steps: [
              { reasoning: "A stereotype assigns one fixed trait to everyone from a group.", marks: 1, markCode: "M" },
              { reasoning: "It ignores individual differences within the culture.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'All members of country X are loud' or 'All Y people love food Z'.", marks: 1, markCode: "A" },
              { reasoning: "Stereotypes can be inaccurate and even offensive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A fixed oversimplified image of a whole group, e.g. 'All Germans are serious'.",
            commonErrors: ["Confusing cultural knowledge with stereotyping individuals."],
          },
        },
        {
          id: "langb-u3-q84",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain what to do when you are unsure about a cultural custom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification strategy", statement: "Observe, suspend judgement, then ask politely." },
            ],
            steps: [
              { reasoning: "Do not assume the custom is wrong — it has its own logic.", marks: 1, markCode: "M" },
              { reasoning: "Observe what others do and how the custom works in context.", marks: 1, markCode: "M" },
              { reasoning: "Ask politely, e.g. 'In my culture we usually do X — is it different here?'", marks: 1, markCode: "M" },
              { reasoning: "Most people respond well to respectful curiosity rather than silence or mockery.", marks: 1, markCode: "R" },
              { reasoning: "This approach is exactly what intercultural competence requires.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Observe, don't judge, ask politely — curiosity and respect resolve uncertainty.",
            commonErrors: ["Either ignoring the custom entirely or reacting with visible judgement."],
          },
        },
      ],
    },
    {
      id: "langb-u3-intercultural-skills",
      title: "Building intercultural skills",
      skill: "Apply strategies — curiosity, clarification, respect — for effective communication across cultures.",
      lesson: {
        sections: [
          {
            heading: "The three Cs of intercultural communication",
            body: "**Curiosity**: ask about the other person's culture rather than assuming. **Clarification**: when unsure what a gesture, phrase or custom means, ask politely — 'I hope this is okay, but in my culture we usually...'. **Respect**: treat differences as interesting, not wrong. These strategies work in any language and any culture.",
          },
          {
            heading: "Cultural relativism in practice",
            body: "**Cultural relativism** means judging behaviour within its own context. Eating with your hands is normal in some cultures and odd in others — neither is 'correct'. When you encounter unfamiliar customs, suspend judgement first, observe, then ask. This attitude is exactly what Language B's intercultural understanding criterion rewards.",
          },
          {
            heading: "Your own culture as bridge",
            body: "Intercultural skill is two-way. You can explain your own customs to others just as they explain theirs to you. Being able to discuss your culture — festivals, food, greetings, beliefs — is a core Language B speaking task. Practice describing your culture to someone who knows nothing about it; it builds both empathy and expressive skill.",
          },
        ],
        keyFormulas: [
          { name: "Three Cs", statement: "Curiosity + Clarification + Respect = intercultural competence" },
          { name: "Suspend-then-ask", statement: "Observe -> don't judge -> ask politely about the custom" },
        ],
        workedExample: {
          problem: "At a friend's house you are offered food with your left hand, which feels wrong to you. What do you do?",
          solution: "Stay calm, accept politely if possible, and later ask privately: 'I noticed you use the left hand for eating — is that a custom here?' Curiosity + clarification.",
        },
      },
      questions: [
        {
          id: "langb-u3-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'cultural relativism' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judging behaviour within its own cultural context" },
              { id: "b", text: "Believing all cultures are identical" },
              { id: "c", text: "Rejecting all foreign customs" },
              { id: "d", text: "Adopting every custom you meet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural relativism", statement: "Understanding behaviour by the norms of its own culture rather than your own." },
            ],
            steps: [
              { reasoning: "Relativism = evaluate within context, not by outside standards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Judging behaviour within its own cultural context",
            commonErrors: ["Thinking relativism means 'anything goes' — it means context-sensitive understanding."],
          },
        },
        {
          id: "langb-u3-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three strategies of the 'Three Cs' of intercultural communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Three Cs", statement: "Curiosity, Clarification, Respect guide intercultural interaction." },
            ],
            steps: [
              { reasoning: "Curiosity: ask about the other culture rather than assuming.", marks: 1, markCode: "M" },
              { reasoning: "Clarification: politely ask when a custom or phrase is unclear.", marks: 1, markCode: "M" },
              { reasoning: "Respect: treat differences as interesting, not wrong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Curiosity, Clarification, Respect.",
            commonErrors: ["Treating cultural differences as problems to correct rather than learn from."],
          },
        },
        {
          id: "langb-u3-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why explaining your own culture to others is itself an intercultural skill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Two-way interculturalism", statement: "Sharing your culture builds empathy and is a core Language B speaking task." },
            ],
            steps: [
              { reasoning: "Intercultural exchange is two-way — you both learn and teach.", marks: 1, markCode: "M" },
              { reasoning: "Describing your culture forces you to notice what is 'normal' for you but strange to others.", marks: 1, markCode: "R" },
              { reasoning: "It builds expressive vocabulary and cultural self-awareness.", marks: 1, markCode: "M" },
              { reasoning: "Language B assessments explicitly test discussing one's own culture and traditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Explaining your culture builds empathy, self-awareness and the expressive skills assessed in Language B.",
            commonErrors: ["Thinking intercultural learning only flows one direction."],
          },
        },
        {
          id: "langb-u3-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are hosting a student from another country for a weekend.",
          parts: [
            { label: "a", prompt: "List two things you could do to make them feel welcome.", marks: 2 },
            { label: "b", prompt: "Explain why asking about their preferences and customs matters.", marks: 2 },
            { label: "c", prompt: "Explain how this experience builds your intercultural competence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hospitality as intercultural practice", statement: "Welcome + curiosity + explanation of your own customs = competence." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. explain your home routines, ask about dietary needs, show them your town.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two concrete welcoming actions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Preferences differ — food, greetings, privacy, religion may all differ.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Asking avoids imposing your assumptions and shows respect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "You practise clarification and curiosity in real interaction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "You learn their norms and reflect on your own.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Direct experience of difference builds genuine competence beyond textbook knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Welcome actions like explaining routines, asking needs. (b) Asking avoids assumptions, shows respect. (c) Real practice of curiosity/clarification/respect.",
            commonErrors: ["Assuming your guest shares your customs without asking."],
          },
        },
        {
          id: "langb-u3-q85",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'Three Cs' of intercultural communication are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Courage, Confidence, Control" },
              { id: "b", text: "Curiosity, Clarification, Respect" },
              { id: "c", text: "Custom, Courtesy, Conversation" },
              { id: "d", text: "Culture, Communication, Competition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Three Cs", statement: "Curiosity, Clarification and Respect guide intercultural interaction." },
            ],
            steps: [
              { reasoning: "The Three Cs are Curiosity, Clarification and Respect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Curiosity, Clarification, Respect",
            commonErrors: ["Mixing up the Cs with unrelated communication terms."],
          },
        },
        {
          id: "langb-u3-q86",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of cultural relativism in practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding all meals with foreign friends" },
              { id: "b", text: "Deciding that eating with your hands is dirty" },
              { id: "c", text: "Forcing everyone to use cutlery" },
              { id: "d", text: "Recognising that eating with hands is normal in some cultures and unusual in others" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural relativism", statement: "Behaviour is understood within its own cultural context." },
            ],
            steps: [
              { reasoning: "Relativism means the same act can be normal in one culture and odd in another.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Recognising that eating with hands is normal in some cultures and unusual in others",
            commonErrors: ["Judging the custom by your own standards instead of its context."],
          },
        },
        {
          id: "langb-u3-q87",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Curiosity' in intercultural communication means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding unfamiliar situations" },
              { id: "b", text: "Asking about the other person's culture rather than assuming" },
              { id: "c", text: "Being nosy about private matters" },
              { id: "d", text: "Memorising facts about foreign countries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Curiosity", statement: "Genuine interest expressed through questions about the other culture." },
            ],
            steps: [
              { reasoning: "Curiosity means asking and learning instead of assuming.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Asking about the other person's culture rather than assuming",
            commonErrors: ["Confusing curiosity with prying into private life."],
          },
        },
        {
          id: "langb-u3-q88",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Clarification' as an intercultural strategy means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making your meaning very loud and clear" },
              { id: "b", text: "Explaining your own culture in detail" },
              { id: "c", text: "Politely asking what a custom or phrase means when unsure" },
              { id: "d", text: "Repeating the other person's words exactly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification", statement: "Polite questions resolve uncertainty about customs and meanings." },
            ],
            steps: [
              { reasoning: "Clarification means asking respectfully when something is unclear.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Politely asking what a custom or phrase means when unsure",
            commonErrors: ["Confusing clarification with correcting the other person."],
          },
        },
        {
          id: "langb-u3-q89",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "'Respect' as an intercultural strategy means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adopting all foreign customs" },
              { id: "b", text: "Treating differences as interesting rather than wrong" },
              { id: "c", text: "Agreeing with everything the other person says" },
              { id: "d", text: "Keeping your distance from other cultures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respect", statement: "Differences are approached with interest, not judgement." },
            ],
            steps: [
              { reasoning: "Respect means valuing difference without needing to agree or copy it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Treating differences as interesting rather than wrong",
            commonErrors: ["Confusing respect with agreement or assimilation."],
          },
        },
        {
          id: "langb-u3-q90",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'suspend-then-ask' approach means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediately copy the custom without understanding it" },
              { id: "b", text: "Ignore the custom and ask your teacher" },
              { id: "c", text: "Criticise the custom privately" },
              { id: "d", text: "Observe, withhold judgement, then ask politely about the custom" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Suspend-then-ask", statement: "Observe without judging, then clarify politely." },
            ],
            steps: [
              { reasoning: "The approach is observe, suspend judgement, then ask politely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Observe, withhold judgement, then ask politely about the custom",
            commonErrors: ["Skipping observation and asking before understanding context."],
          },
        },
        {
          id: "langb-u3-q91",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which situation best demonstrates 'clarification' as an intercultural strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agreeing with everything your partner says" },
              { id: "b", text: "Changing the subject quickly" },
              { id: "c", text: "Staying completely silent" },
              { id: "d", text: "Asking politely 'What do you mean by that custom?'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification", statement: "Polite questions resolve uncertainty about customs and meanings." },
            ],
            steps: [
              { reasoning: "Clarification means asking respectfully when something is unclear.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Asking politely 'What do you mean by that custom?'",
            commonErrors: ["Confusing clarification with correcting the other person."],
          },
        },
        {
          id: "langb-u3-q92",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain cultural relativism using an everyday example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural relativism", statement: "Customs are judged within their own context, not by your own norms." },
            ],
            steps: [
              { reasoning: "Cultural relativism means understanding behaviour through its own culture's norms.", marks: 1, markCode: "M" },
              { reasoning: "Example: eating with hands is normal in some cultures and odd in others.", marks: 1, markCode: "M" },
              { reasoning: "Neither practice is 'correct' — context decides what is appropriate.", marks: 1, markCode: "A" },
              { reasoning: "Relativism means suspending your judgement before forming an opinion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Relativism = judge within context; e.g. hand-eating is normal in some cultures, odd in others.",
            commonErrors: ["Thinking relativism means approving everything — it means understanding context."],
          },
        },
        {
          id: "langb-u3-q93",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why intercultural exchange is described as two-way.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Two-way interculturalism", statement: "Both parties learn and teach in intercultural exchange." },
            ],
            steps: [
              { reasoning: "Exchange involves both learning about the other culture and explaining your own.", marks: 1, markCode: "M" },
              { reasoning: "Your 'normal' customs are just as foreign and interesting to them.", marks: 1, markCode: "R" },
              { reasoning: "You gain empathy and understanding while they gain the same from you.", marks: 1, markCode: "M" },
              { reasoning: "This requires being able to describe your own culture clearly.", marks: 1, markCode: "M" },
              { reasoning: "Mutual exchange is what builds genuine intercultural competence on both sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both sides teach and learn — your customs are foreign to them just as theirs are to you.",
            commonErrors: ["Thinking intercultural learning only flows in one direction."],
          },
        },
        {
          id: "langb-u3-q94",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are visiting a friend's home and notice they remove their shoes at the door, which is new to you.",
          parts: [
            { label: "a", prompt: "Describe what you would do in the moment.", marks: 2 },
            { label: "b", prompt: "Write a polite question you could ask later about the custom.", marks: 2 },
            { label: "c", prompt: "Explain how this shows intercultural competence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural response", statement: "Follow local custom, then clarify politely with curiosity." },
            ],
            steps: [
              { part: "a", reasoning: "Follow their lead calmly — remove your shoes without making a scene or commenting.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Respect the custom even though it is unfamiliar.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'I noticed you take off your shoes — is that a custom here?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The question is polite, curious and shows genuine interest.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "You suspended judgement instead of reacting to the unfamiliar.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "You observed the custom and then clarified it through respectful curiosity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This is exactly the Curiosity + Clarification + Respect pattern of intercultural competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Follow the custom calmly. (b) Polite curious question later. (c) Suspend-then-ask shows intercultural competence.",
            commonErrors: ["Refusing the custom or making a visible joke of it."],
          },
        },
        {
          id: "langb-u3-q95",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "What should you do when you see someone do something unfamiliar?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unfamiliar customs", statement: "Observe, withhold judgement, ask politely." },
            ],
            steps: [
              { reasoning: "Do not judge immediately — the act may be normal in their culture.", marks: 1, markCode: "M" },
              { reasoning: "Observe what others do and the context of the action.", marks: 1, markCode: "M" },
              { reasoning: "If still unsure, ask politely rather than guessing or mocking.", marks: 1, markCode: "M" },
              { reasoning: "Treat the difference with curiosity and respect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Don't judge, observe, ask politely, stay curious and respectful.",
            commonErrors: ["Laughing at or criticising a custom you do not understand."],
          },
        },
        {
          id: "langb-u3-q96",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how discussing your own culture helps you communicate with people from other cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Own culture as bridge", statement: "Explaining your culture builds empathy and is a core Language B speaking task." },
            ],
            steps: [
              { reasoning: "Describing your customs makes your own 'normal' visible to others.", marks: 1, markCode: "M" },
              { reasoning: "It builds empathy — you experience what it is like to explain the unfamiliar.", marks: 1, markCode: "R" },
              { reasoning: "It practises descriptive, expressive language in the target language.", marks: 1, markCode: "M" },
              { reasoning: "Discussing your culture is an explicit Language B speaking topic.", marks: 1, markCode: "M" },
              { reasoning: "The exchange becomes mutual — you both teach and learn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Explaining your culture builds empathy, expressive skill and mutual understanding.",
            commonErrors: ["Thinking only the other person's culture needs explaining."],
          },
        },
      ],
    },
  ],
};
