import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mla5-u3-lesson-3-3",
  code: "3-3",
  title: "Intercultural Criticality and Global Issues",
  goal: "I CAN discuss global issues with intercultural awareness, challenge stereotypes, evaluate multiple perspectives and reflect on cultural identity and communication.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Intercultural competence", definition: "The ability to communicate and interact effectively across cultural differences." },
    { term: "Stereotype", definition: "An oversimplified and often inaccurate belief about a group." },
    { term: "Global issue", definition: "A problem that affects people across countries, such as climate change or inequality." },
    { term: "Perspective", definition: "A viewpoint shaped by culture, experience, position or evidence." },
    { term: "Reflection", definition: "Thinking critically about one's own assumptions, actions and learning." },
  ],
  concepts: [
    {
      id: "mla5-u3-intercultural-criticality",
      title: "Critical intercultural literacy",
      skill: "Recognise stereotypes, power dynamics and cultural assumptions in texts and discussions.",
      lesson: {
        sections: [
          {
            heading: "Beyond stereotypes",
            body: "Intercultural competence is not just knowing 'facts' about cultures; it is questioning assumptions. A stereotype treats a group as uniform: 'All X are...', 'In Y, people always...'. Critical literacy asks: Who is speaking? Whose experience is represented? What is omitted?",
          },
          {
            heading: "Power and representation",
            body: "Texts may reflect power relations. A story about a community told only by outsiders may miss insider perspectives. Ask: Who benefits from this representation? Whose voice is absent? This is especially important in media, history and development discussions.",
          },
          {
            heading: "Self-reflection",
            body: "Intercultural learning requires reflecting on your own assumptions. Ask: What do I take for granted? How might my culture shape my interpretation? Have I listened to people from the group rather than speaking for them? Reflection turns awareness into competence.",
          },
        ],
        keyFormulas: [
          { name: "Critical questions", statement: "Who speaks? Whose experience? What is omitted? What do I assume?" },
          { name: "Anti-stereotype check", statement: "Avoid 'all/always/every' generalisations; seek multiple perspectives" },
        ],
        workedExample: {
          problem: "Article says 'In Country X, women do not work.' Is this interculturally responsible?",
          solution: "No — it is an overgeneralisation. Better: 'In some regions or contexts, women's participation in paid work may be limited by social norms.'",
        },
      },
      questions: [
        {
          id: "mla5-u3-intercultural-criticality-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype in intercultural contexts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A respectful greeting" },
              { id: "b", text: "An oversimplified belief about a group" },
              { id: "c", text: "A formal translation" },
              { id: "d", text: "A detailed cultural description" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "Oversimplified belief about a group." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stereotype = oversimplified belief.", working: "oversimplified", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An oversimplified belief about a group",
            commonErrors: ["Confusing stereotype with cultural fact."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Media Excerpt",
            author: "Written for Akademik Space",
            source: "Intercultural literacy practice",
            text: "A documentary about rural education interviews only government officials and international consultants. It does not include teachers, students or parents from the villages. The narrator describes the community as 'backward' and 'needing modernisation'.",
          },
          stem: "Identify two intercultural problems in the documentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Representation critique", statement: "Missing voices and deficit framing are intercultural problems." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — problem 1: only officials/consultants interviewed; local voices absent.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — problem 2: 'backward' framing uses deficit language.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — narrator speaks for community rather than letting them speak.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Missing local voices and deficit framing; outsiders speak for the community.",
            commonErrors: ["Focusing only on factual accuracy rather than representation."],
            examinerNote: "Must identify representation and framing issues.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Intercultural literacy practice",
            text: "Student A: 'Developed countries should help developing countries because they are poor.'\nStudent B: 'I understand the concern, but this framing may reinforce stereotypes. It assumes one group is helpless and the other is responsible. Perhaps we should discuss shared responsibility and local agency.'",
          },
          stem: "Evaluate Student B's response and explain the intercultural issue in Student A's statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural argument critique", statement: "Avoid deficit framing and recognise agency." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Student A uses deficit framing: poor vs developed.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — Student B challenges stereotype and adds nuance.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — Student B proposes shared responsibility and local agency.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — response is respectful but critical.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Student A's statement risks stereotyping; Student B challenges it respectfully by adding agency and shared responsibility.",
            commonErrors: ["Agreeing with Student A without noticing deficit framing."],
            examinerNote: "Must evaluate intercultural sensitivity.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Reflection Task",
            author: "Written for Akademik Space",
            source: "Intercultural literacy practice",
            text: "You read an article claiming 'In Country X, people are always late because they have a different concept of time.' The article was written by a tourist who visited for one week.",
          },
          stem: "Complete the critical reflection tasks.",
          parts: [
            { label: "a", prompt: "Identify two intercultural problems in the claim.", marks: 2 },
            { label: "b", prompt: "Rewrite the claim in a culturally responsible way.", marks: 2 },
            { label: "c", prompt: "Write two questions you would ask to understand the context better.", marks: 2 },
            { label: "d", prompt: "Explain what you personally might assume about time and punctuality.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical intercultural reflection", statement: "Question assumptions, seek context and reflect on self." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — problem 1: 'always' overgeneralises.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — problem 2: one-week tourist lacks deep cultural knowledge.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — rewrite uses cautious, specific language.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — avoids stereotype and absolute claim.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — question 1 seeks local perspective or context.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — question 2 seeks evidence or variation.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — identifies personal assumption about punctuality.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — reflection acknowledges possible cultural bias.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) overgeneralisation + limited source (b) cautious rewrite (c) two context questions (d) self-reflection.",
            commonErrors: ["Replacing one stereotype with another."],
            examinerNote: "(d) should show genuine self-awareness.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype in intercultural contexts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of formal greeting" },
              { id: "b", text: "A belief that treats a whole group as uniform" },
              { id: "c", text: "A statistical finding" },
              { id: "d", text: "An accurate description of a group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "A belief treating a group as uniform, ignoring individual and contextual diversity." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stereotypes generalise groups.", working: "uniform", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A belief that treats a whole group as uniform",
            commonErrors: ["Thinking stereotypes are always negative."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which critical question helps identify missing perspectives in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is it written in formal English?" },
              { id: "b", text: "Whose voice is absent?" },
              { id: "c", text: "How many pages does it have?" },
              { id: "d", text: "Does it use big words?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questions", statement: "Ask whose experience is represented and what is omitted." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'whose voice is absent' reveals omission.", working: "absent voice", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Whose voice is absent?",
            commonErrors: ["Focusing on surface features."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "The article states: 'In Country X, women do not participate in paid work.'",
          },
          stem: "What is the main intercultural problem with this statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It mentions women" },
              { id: "b", text: "It uses formal grammar" },
              { id: "c", text: "It overgeneralises a whole country" },
              { id: "d", text: "It is too long" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Overgeneralisation", statement: "Country-wide claims ignore regional, class and individual diversity." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'In Country X, women do not' treats a whole group uniformly.", working: "overgeneralisation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It overgeneralises a whole country",
            commonErrors: ["Missing the absolute generalisation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "The report says people in Region Y 'always' arrive late, 'everyone' values punctuality differently, and 'all' offices close early.",
          },
          stem: "How many absolute generalisations appear in the excerpt?",
          response: {
            type: "numeric",
            parts: [{ label: "Generalizations", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Absolute language", statement: "'Always', 'everyone', 'all' signal overgeneralisation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'always', 'everyone', 'all' = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing 'everyone'."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this stereotype cautiously: 'In Country X, people are always formal.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cautious rewriting", statement: "Replace absolutes with hedged, context-specific language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes 'always' and 'people' as uniform group.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds 'in some contexts' or 'may'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — result acknowledges diversity.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'In some formal contexts in Country X, people may use formal address.'",
            commonErrors: ["Keeping 'always' with minor changes."],
            examinerNote: "Must remove absolute generalisation.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Representation Analysis",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "A documentary about a remote community is narrated entirely by outside journalists; no community members speak.",
          },
          stem: "What is the main intercultural criticism of this documentary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It omits insider perspectives, privileging outsider voices" },
              { id: "b", text: "It is too short" },
              { id: "c", text: "It uses too much technology" },
              { id: "d", text: "It is in the wrong language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Representation and power", statement: "Whose voice is absent reveals whose perspective dominates." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — only outsiders speak; community members are silenced.", working: "absent voice", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It omits insider perspectives, privileging outsider voices",
            commonErrors: ["Focusing on production quality."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "A travel article describes a village festival through the eyes of a visitor. It praises the 'exotic' costumes and 'colourful chaos' but never explains the festival's religious meaning. The only voices quoted are the visitor's and a tour guide's; villagers are described but not heard.",
          },
          stem: "Analyse whose perspectives are represented and whose are omitted, and why this matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power and representation", statement: "Outsider framing can exoticise and silence insider voices." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — represented: visitor and tour guide (outsiders).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — omitted: villagers' own voices and religious meaning.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'exotic' and 'chaos' exoticise the culture.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — consequence: reader gets outsider framing, not insider understanding.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Outsider perspectives dominate; villagers are described not heard, and religious meaning is omitted.",
            commonErrors: ["Praising the article for being 'colourful'."],
            examinerNote: "Must identify represented and omitted voices.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Source Survey",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "A report quotes three outside experts and one community elder; the elder's comments are placed in a footnote.",
          },
          stem: "How many insider versus outsider voices are given prominence, and how is the insider voice treated?",
          response: {
            type: "numeric",
            parts: [
              { label: "Outsider voices prominent", answer: 3 },
              { label: "Insider voices marginalised", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Voice counting", statement: "Track whose voices are foregrounded versus marginalised." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 3 outside experts in main text = prominent.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 1 elder in footnote = marginalised.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 outsiders prominent; 1 insider marginalised.",
            commonErrors: ["Counting footnote as equal prominence."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Self-Reflection",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "Intercultural learning requires reflecting on your own assumptions and how your culture may shape your interpretation.",
          },
          stem: "How many reflective questions does intercultural learning require, according to this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Questions", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-reflection", statement: "Ask what you take for granted and how your culture shapes interpretation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — two reflective areas: own assumptions + cultural shaping = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'learning' as a question."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is most interculturally responsible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In some regions of Country X, people may maintain traditional practices, though this varies." },
              { id: "b", text: "All people in Country X are traditional." },
              { id: "c", text: "Country X has no diversity." },
              { id: "d", text: "Everyone in Country X is the same." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuanced description", statement: "Cautious, context-specific language respects diversity." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — (b) uses 'some regions', 'may' and 'varies'.", working: "nuanced", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In some regions of Country X, people may maintain traditional practices, though this varies.",
            commonErrors: ["Choosing the simpler absolute statement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Article Excerpt: Development Project",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "An NGO report describes a water project in a rural community. It quotes the NGO director extensively and describes villagers as 'grateful beneficiaries'. Villagers' own accounts of how the project affected their daily lives are absent. The report claims the project 'empowered' the community but gives no evidence from community members.",
          },
          stem: "Read the excerpt and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify whose voices are represented and whose are omitted.", marks: 2 },
            { label: "b", prompt: "What does the word 'beneficiaries' imply about power?", marks: 2 },
            { label: "c", prompt: "Why is the claim of 'empowerment' weakly supported?", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word critique showing intercultural awareness.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical intercultural analysis", statement: "Representation, power and evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — represented: NGO director; omitted: villagers' own accounts.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — both sides of representation identified.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'beneficiaries' frames villagers as passive recipients.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — implies NGO holds power, community does not.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'empowered' is claimed but no community evidence given.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — absence of insider voices weakens the claim.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — critique identifies representation, power and evidence gaps.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — critique is respectful and within range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) NGO yes, villagers no (b) passive framing (c) no community evidence (d) aware critique.",
            commonErrors: ["Accepting the NGO's claims uncritically."],
            examinerNote: "(d) should address power and voice, not just facts.",
          },
        },
        {
          id: "mla5-u3-intercultural-criticality-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Statements",
            author: "Written for Akademik Space",
            source: "Critical intercultural practice",
            text: "Statement A: 'People in Region Z are always respectful.' Statement B: 'Respectful behaviour may vary across regions and situations in Region Z.'",
          },
          stem: "Why is Statement B more interculturally responsible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids an absolute claim about a whole region" },
              { id: "b", text: "It uses harder vocabulary" },
              { id: "c", text: "It agrees with everyone" },
              { id: "d", text: "It is longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuanced generalisation", statement: "Hedged language respects internal diversity." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'may vary' acknowledges diversity; 'always' essentialises.", working: "nuance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It avoids an absolute claim about a whole region",
            commonErrors: ["Choosing the simpler statement."],
            examinerNote: "B1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u3-global-issues",
      title: "Discussing global issues",
      skill: "Discuss global issues with nuance, multiple perspectives and awareness of complexity and interconnectedness.",
      lesson: {
        sections: [
          {
            heading: "Global issues are complex",
            body: "Issues such as climate change, migration, inequality and access to education are interconnected. A solution in one area may create problems elsewhere. Avoid simple answers: 'Technology will fix it' or 'Nothing can be done.' Instead, discuss trade-offs, stakeholders and evidence.",
          },
          {
            heading: "Multiple perspectives",
            body: "Global issues affect different groups differently. A policy that helps one community may burden another. Consider perspectives from: governments, businesses, NGOs, local communities and affected individuals. Strong discussion acknowledges that reasonable people may disagree.",
          },
          {
            heading: "Language for global discussion",
            body: "Use precise, inclusive and cautious language: 'This issue has multiple dimensions', 'Different stakeholders may prioritise different outcomes', 'The evidence suggests', 'One possible approach is'. Avoid us-versus-them framing and moral absolutes.",
          },
        ],
        keyFormulas: [
          { name: "Global issue analysis", statement: "Dimensions + stakeholders + trade-offs + evidence" },
          { name: "Inclusive language", statement: "Multiple perspectives / reasonable disagreement / cautious evidence" },
        ],
        workedExample: {
          problem: "Discuss 'Should all students learn coding?' in one nuanced sentence.",
          solution: "'Coding may offer valuable skills, but whether it should be compulsory depends on access, teacher capacity and whether it displaces other essential subjects.'",
        },
      },
      questions: [
        {
          id: "mla5-u3-global-issues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a global issue 'complex'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can be solved immediately" },
              { id: "b", text: "It affects only one country" },
              { id: "c", text: "It has only one clear cause" },
              { id: "d", text: "It involves multiple dimensions, stakeholders and trade-offs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex global issue", statement: "Multiple dimensions, stakeholders and trade-offs." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — complexity = multiple dimensions/stakeholders/trade-offs.", working: "complexity", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It involves multiple dimensions, stakeholders and trade-offs",
            commonErrors: ["Thinking complexity means only difficulty."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Global issues practice",
            text: "Student A: 'We should ban single-use plastics everywhere immediately.'\nStudent B: 'That may help the environment, but it could affect small businesses that rely on cheap packaging. Perhaps a phased approach with alternatives would be fairer.'",
          },
          stem: "Identify two signs that Student B's response is nuanced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced global discussion", statement: "Acknowledge benefit, consider stakeholders and propose alternative." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — acknowledges environmental benefit.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — identifies stakeholder impact: small businesses.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — proposes alternative: phased approach.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Student B acknowledges benefit, considers stakeholders and suggests a phased alternative.",
            commonErrors: ["Missing the stakeholder dimension."],
            examinerNote: "Must identify nuance, not just disagreement.",
          },
        },
        {
          id: "mla5-u3-global-issues-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Global Issue Text",
            author: "Written for Akademik Space",
            source: "Global issues practice",
            text: "Water scarcity affects agriculture, industry and households differently. In some regions, pricing water may reduce waste but could disadvantage poorer families. In others, infrastructure investment may be more effective than individual conservation. The 'right' solution depends on local conditions, governance and equity concerns.",
          },
          stem: "Explain why a single universal solution may be inappropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contextual global analysis", statement: "Local conditions and equity affect appropriate solutions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — different sectors affected differently: agriculture, industry, households.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — pricing may reduce waste but disadvantage poorer families.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — infrastructure may be more effective in some contexts.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — conclusion: solution depends on local conditions and equity.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A universal solution may ignore local conditions, sectoral differences and equity concerns.",
            commonErrors: ["Arguing one solution is always best."],
            examinerNote: "Must explain context-dependence.",
          },
        },
        {
          id: "mla5-u3-global-issues-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Global Issue Discussion",
            author: "Written for Akademik Space",
            source: "Global issues practice",
            text: "Issue: Should schools require community service for graduation?\n\nConsider: benefits for students and communities; burden on students with jobs or caring responsibilities; cultural differences in volunteering; fairness and access.",
          },
          stem: "Write a balanced discussion contribution.",
          parts: [
            { label: "a", prompt: "State a nuanced position in one sentence.", marks: 2 },
            { label: "b", prompt: "Give one benefit and one concern.", marks: 2 },
            { label: "c", prompt: "Acknowledge one cultural or contextual difference.", marks: 2 },
            { label: "d", prompt: "Propose a fair implementation idea.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Global issue discussion", statement: "Nuanced position, trade-offs, cultural awareness and feasible proposal." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — position is qualified and balanced.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C: Speaking — position acknowledges complexity.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — benefit is relevant and explained.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — concern is relevant and explained.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — cultural/contextual difference is accurate.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — difference is explained rather than asserted.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — proposal is fair, practical and justified.", marks: 2, markCode: "D" },
            ],
            finalAnswer: "(a) nuanced position (b) benefit + concern (c) cultural difference (d) fair proposal.",
            commonErrors: ["Taking an absolute position without acknowledging trade-offs."],
            examinerNote: "Must show intercultural awareness and practical reasoning.",
          },
        },
        {
          id: "mla5-u3-global-issues-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do global issues require nuanced discussion rather than simple answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because they have no causes" },
              { id: "b", text: "Because they are too boring to discuss simply" },
              { id: "c", text: "Because they are interconnected and involve trade-offs" },
              { id: "d", text: "Because only experts can understand them" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complexity of global issues", statement: "Interconnection and trade-offs resist simple solutions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — interconnectedness and trade-offs require nuance.", working: "complexity", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Because they are interconnected and involve trade-offs",
            commonErrors: ["Thinking simplicity is always better."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of a stakeholder in a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only international companies" },
              { id: "b", text: "Only scientists" },
              { id: "c", text: "Local communities affected by the issue" },
              { id: "d", text: "Only national governments" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stakeholder", statement: "Any group affected by or able to influence an issue." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — local communities are key stakeholders.", working: "stakeholder", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Local communities affected by the issue",
            commonErrors: ["Limiting stakeholders to governments."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "Speaker: 'Technology will definitely solve climate change. There is no need to worry.'",
          },
          stem: "What is the main problem with this statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It oversimplifies a complex issue with an absolute claim" },
              { id: "b", text: "It uses too many words" },
              { id: "c", text: "It is too short" },
              { id: "d", text: "It is too polite" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced discussion", statement: "Absolute claims ignore trade-offs and uncertainty." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'definitely' and 'no need to worry' oversimplify.", working: "oversimplification", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It oversimplifies a complex issue with an absolute claim",
            commonErrors: ["Missing the absolute 'definitely'."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "The panel considers perspectives from governments, businesses, NGOs, local communities and affected individuals — five stakeholder groups.",
          },
          stem: "How many stakeholder groups are named?",
          response: {
            type: "numeric",
            parts: [{ label: "Stakeholder groups", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stakeholder identification", statement: "Governments, businesses, NGOs, communities, individuals." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — count the five named groups.", working: "5", marks: 1, markCode: "C" },
            ],
            finalAnswer: "5",
            commonErrors: ["Merging businesses and NGOs."],
            examinerNote: "Accept 5.",
          },
        },
        {
          id: "mla5-u3-global-issues-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one trade-off of a policy that reduces plastic use, and explain who benefits and who may be burdened.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trade-off analysis", statement: "Every solution creates winners and losers." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — identifies a plausible trade-off (e.g., cost or convenience).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — identifies who benefits (environment, future generations).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — identifies who may be burdened (consumers, small businesses).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Example: plastic bans reduce pollution but may raise costs for small businesses and consumers.",
            commonErrors: ["Listing only benefits, no trade-off."],
            examinerNote: "Must name both beneficiaries and burdens.",
          },
        },
        {
          id: "mla5-u3-global-issues-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Discussion Excerpt",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "Speaker A: 'We must ban all single-use plastics immediately.' Speaker B: 'A total ban may be unrealistic; a phased approach with alternatives could work better.'",
          },
          stem: "Which speaker shows more nuanced understanding of the issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaker A" },
              { id: "b", text: "Both equally" },
              { id: "c", text: "Speaker B" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced position", statement: "Hedged, conditional positions acknowledge complexity." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — B uses 'may', 'could' and offers alternatives; A uses absolute 'must ban all'.", working: "nuanced", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Speaker B",
            commonErrors: ["Thinking the strongest language is the best position."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Discussion Excerpt: Migration",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "Student A: 'Migration benefits economies through labour.' Student B: 'It also strains public services in receiving countries.' Teacher: 'Both points are valid; the evidence suggests outcomes depend on policy design and integration support.'",
          },
          stem: "Explain how the teacher synthesises the two positions and what stance is adopted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis of perspectives", statement: "Validate multiple views, then offer a conditional conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — acknowledges A's economic benefit point.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — acknowledges B's strain concern.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — synthesises: outcomes depend on policy and integration.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — stance is balanced and evidence-based.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Teacher validates both views and concludes outcomes depend on policy design — a balanced, conditional stance.",
            commonErrors: ["Siding with only one student."],
            examinerNote: "Must show synthesis, not just agreement.",
          },
        },
        {
          id: "mla5-u3-global-issues-q12",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Nuanced Discussion",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "The evidence suggests that outcomes may vary; different stakeholders may prioritise different results; one possible approach is phased implementation.",
          },
          stem: "How many cautious or inclusive expressions appear?",
          response: {
            type: "numeric",
            parts: [{ label: "Cautious expressions", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inclusive language", statement: "'Suggests', 'may vary', 'may prioritise', 'possible' soften claims." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'suggests', 'may vary', 'may prioritise', 'possible' = at least 3.", working: "3", marks: 1, markCode: "C" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing 'possible'."],
            examinerNote: "Accept 3 or more.",
          },
        },
        {
          id: "mla5-u3-global-issues-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Trade-off Definition",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "A trade-off is a situation where gaining one benefit means accepting a cost or losing another benefit.",
          },
          stem: "How many parts define a trade-off in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Parts", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trade-off", statement: "Benefit gained at the cost of another benefit or accepting a cost." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — gaining benefit + accepting cost/losing benefit = 2 parts.", working: "2", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'situation' as a part."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u3-global-issues-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrasing is most inclusive when discussing a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different stakeholders may prioritise different outcomes, and the evidence suggests trade-offs exist." },
              { id: "b", text: "We must do X because they are wrong." },
              { id: "c", text: "Everyone agrees that X is the only answer." },
              { id: "d", text: "Only our country understands this issue." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inclusive language", statement: "Acknowledge multiple perspectives and reasonable disagreement." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — (b) acknowledges stakeholders and uncertainty.", working: "inclusive", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Different stakeholders may prioritise different outcomes, and the evidence suggests trade-offs exist.",
            commonErrors: ["Choosing absolute or us-versus-them phrasing."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla5-u3-global-issues-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Discussion: Coding in Schools",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "Student A: 'All students should learn coding because it guarantees future jobs.' Student B: 'Coding may offer valuable skills, but whether it should be compulsory depends on access, teacher capacity and whether it displaces other essential subjects.' Teacher: 'The evidence suggests benefits, though implementation challenges are significant.'",
          },
          stem: "Read the discussion and complete the tasks.",
          parts: [
            { label: "a", prompt: "State Student A's position.", marks: 1 },
            { label: "b", prompt: "Give two conditions Student B mentions.", marks: 2 },
            { label: "c", prompt: "What stance does the teacher adopt?", marks: 2 },
            { label: "d", prompt: "Write a 70-90 word balanced discussion of the issue.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced global discussion", statement: "Multiple perspectives, trade-offs and cautious language." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — all students should learn coding; guarantees jobs.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — condition 1: access and teacher capacity.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — condition 2: whether it displaces essential subjects.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — teacher: benefits exist but implementation challenges are significant.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — stance is balanced and evidence-based.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — discussion acknowledges benefits, conditions and trade-offs.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — inclusive, cautious academic language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — clear and within word range.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) compulsory coding (b) access/capacity; displacement (c) benefits with challenges (d) balanced discussion.",
            commonErrors: ["Choosing only one side of the issue."],
            examinerNote: "(d) must include trade-offs and multiple perspectives.",
          },
        },
        {
          id: "mla5-u3-global-issues-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Framing Choice",
            author: "Written for Akademik Space",
            source: "Global issues discussion practice",
            text: "Instead of 'We versus them on climate policy', a writer says 'Different stakeholders may prioritise different outcomes.'",
          },
          stem: "Why is the second phrasing more appropriate for global issues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is more emotional" },
              { id: "b", text: "It avoids us-versus-them framing and acknowledges multiple perspectives" },
              { id: "c", text: "It is shorter" },
              { id: "d", text: "It uses simpler words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inclusive framing", statement: "Avoid adversarial framing; acknowledge diverse priorities." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'different stakeholders' includes all sides; 'we versus them' divides.", working: "inclusive", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It avoids us-versus-them framing and acknowledges multiple perspectives",
            commonErrors: ["Thinking conflict framing is more persuasive."],
            examinerNote: "C1 for (b).",
          },
        },
      ],
    },
  ],
};
