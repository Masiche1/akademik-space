import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mll5-u1-lesson-1-3",
  code: "1-3",
  title: "Ambiguity, Irony and Intertextuality",
  goal: "I CAN identify and analyse ambiguity, irony and intertextual references in complex texts, explaining how they create layered meaning.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Ambiguity", definition: "When a text has multiple possible meanings — deliberately or accidentally." },
    { term: "Irony", definition: "When meaning is opposite to what's expected — situational, dramatic, verbal." },
    { term: "Intertextuality", definition: "When a text references or echoes another text." },
    { term: "Allusion", definition: "A brief reference to another work, event or person." },
    { term: "Dramatic irony", definition: "When the audience knows something characters don't." },
    { term: "Verbal irony", definition: "When someone says the opposite of what they mean." },
  ],
  concepts: [
    {
      id: "mll5-u1-ambiguity-irony",
      title: "Multiple meanings",
      skill: "Identify ambiguity and irony and analyse their effects.",
      lesson: {
        sections: [
          {
            heading: "Ambiguity",
            body: "**Ambiguity** = multiple possible meanings. 'She saw the man with the telescope' — did she use it or did he have it? Skilled writers use ambiguity deliberately to create depth, uncertainty, or multiple interpretations. It's not always an error — it can be a feature.",
          },
          {
            heading: "Types of irony",
            body: "**Situational**: outcome opposite to expectation ('fire station burns down'). **Dramatic**: audience knows more than characters ('Don't go in there!' — audience knows it's trapped). **Verbal**: saying opposite of meaning ('What a beautiful day' in a storm). **Socratic**: pretending ignorance to expose flaws.",
          },
          {
            heading: "Why ambiguity and irony matter",
            body: "They reward **close reading** — the reader must think, question, interpret. Irony creates **distance** (we see what's really meant) and often **humour** or **critique**. Ambiguity creates **richness** — the text means different things to different readers.",
          },
        ],
        keyFormulas: [
          { name: "Irony types", statement: "Situational (outcome) + Dramatic (audience knows) + Verbal (opposite words) = layered meaning." },
        ],
        workedExample: {
          problem: "'The fire station burned down last night — ironically, the firefighters couldn't save it.' — What type of irony?",
          solution: "Situational irony — outcome opposite to expectation (firefighters fail to fight fire).",
        },
      },
      questions: [
        {
          id: "mll5-u1-ambiguity-irony-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dramatic irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When characters know the truth" },
              { id: "b", text: "When the audience knows something characters don't" },
              { id: "c", text: "When the ending is sad" },
              { id: "d", text: "When the writer is funny" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dramatic irony", statement: "Audience knows more than characters." }],
            steps: [{ reasoning: "Criterion A (Analysing): dramatic irony = audience knows — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** When the audience knows something characters don't",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Scene",
            author: "Written for Akademik Space",
            text: "'Congratulations on your promotion!' she said, her smile not reaching her eyes. 'I couldn't be happier for you.'",
          },
          stem: "Identify the irony and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verbal irony", statement: "Words contradict meaning — 'couldn't be happier' with false smile." }],
            steps: [
              { reasoning: "Criterion A (Analysing): verbal irony — 'couldn't be happier' said with fake smile suggests she is unhappy.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'smile not reaching her eyes' reveals true feeling — creates tension between words and reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Verbal irony — congratulations mask jealousy; smile/body language reveals true feeling.",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Ending",
            author: "Written for Akademik Space",
            text: "She closed the door gently. Outside, the rain continued — soft at first, then harder, then a roar that filled the street. She stood listening until she couldn't hear it anymore.",
          },
          stem: "Analyse the ambiguity — what multiple meanings might the ending carry?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "Open endings allow multiple interpretations." }],
            steps: [
              { reasoning: "Criterion A (Analysing): rain could symbolise cleansing, sorrow, or renewal — ambiguous imagery.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'couldn't hear it anymore' — is she deaf to the storm (emotional numbness) or did the storm end (resolution)?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): deliberate ambiguity leaves reader to decide — closure or continued inner turmoil.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rain = ambiguous (cleansing/sorrow); ending = closure or numbness — multiple valid readings.",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the type of irony: 'The lifeguard drowned because he couldn't swim.'", marks: 1 },
            { label: "b", prompt: "Explain why this is ironic.", marks: 2 },
            { label: "c", prompt: "Create your own example of situational irony.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Situational irony", statement: "Outcome opposite to expectation." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): situational irony — outcome contradicts role/expectation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): lifeguard = expected to save others, yet can't swim — role vs reality clash.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'because he couldn't swim' reveals the irony — the very person meant to prevent drowning is the one who drowns.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): own example — e.g. 'The fire station burned down' or 'The marriage counselor got divorced.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): example correctly shows expectation vs outcome.", marks: 1, markCode: "A" },
          ],
            finalAnswer: "(a) Situational irony. (b) Lifeguard can't swim — role vs reality. (c) e.g. 'The fire station burned down.'",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of situational irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A character says 'I love Mondays' while crying" },
              { id: "b", text: "A marriage counsellor announces her own divorce" },
              { id: "c", text: "The audience knows the killer is in the room" },
              { id: "d", text: "A sentence can be read two ways" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Situational irony", statement: "Outcome opposite to expectation." }],
            steps: [{ reasoning: "Criterion A (Analysing): counsellor divorcing = outcome contradicts role — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A marriage counsellor announces her own divorce",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different types of irony are named in this list?",
          extract: {
            title: "Irony Types",
            author: "Written for Akademik Space",
            text: "The text shows situational irony, dramatic irony, verbal irony and Socratic irony.",
          },
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Irony types", statement: "Situational, dramatic, verbal and Socratic irony." }],
            steps: [{ reasoning: "Criterion A (Analysing): situational + dramatic + verbal + Socratic = 4 types.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Scene",
            author: "Written for Akademik Space",
            text: "The detective smiled reassuringly. 'Nothing to worry about,' he said — while the audience watched the bomb tick beneath the table.",
          },
          stem: "What type of irony operates in this scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verbal irony — the detective says the opposite of what he means" },
              { id: "b", text: "Dramatic irony — the audience knows about the bomb but the detective and other characters do not" },
              { id: "c", text: "Situational irony — the outcome is unexpected" },
              { id: "d", text: "No irony is present" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dramatic irony", statement: "Audience knows something characters don't." }],
            steps: [{ reasoning: "Criterion A (Analysing): audience sees the bomb; characters don't — dramatic irony — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Dramatic irony — the audience knows about the bomb but the detective and other characters do not",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Reply",
            author: "Written for Akademik Space",
            text: "'Fine,' she said, not looking up from her book.",
          },
          stem: "What does 'Fine' most likely convey here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genuine agreement" },
              { id: "b", text: "Verbal irony — 'fine' means the opposite given her body language" },
              { id: "c", text: "A factual report" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Verbal irony", statement: "Words contradict meaning when context signals the opposite." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'not looking up' signals displeasure — 'fine' is ironic — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Verbal irony — 'fine' means the opposite given her body language",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the key difference between ambiguity and irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is no difference" },
              { id: "b", text: "Ambiguity offers multiple possible meanings; irony specifically means the opposite of what is expected" },
              { id: "c", text: "Irony is always accidental; ambiguity is always deliberate" },
              { id: "d", text: "Ambiguity only occurs in poetry" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ambiguity vs irony", statement: "Ambiguity = multiple meanings; irony = opposite expectation." }],
            steps: [{ reasoning: "Criterion A (Analysing): ambiguity = multiple readings; irony = meaning opposite to expectation — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Ambiguity offers multiple possible meanings; irony specifically means the opposite of what is expected",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Ambiguous Lines",
            author: "Written for Akademik Space",
            text: "She watched him cross the room. She saw the man with the red scarf leave.",
          },
          stem: "How many sentences in this extract contain a possible ambiguity?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "Ambiguous phrasing supports multiple interpretations." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'She saw the man with the red scarf leave' — attachment of 'with the red scarf' is ambiguous; first sentence is clear — 1 ambiguous line.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Ending",
            author: "Written for Akademik Space",
            text: "He locked the door and pocketed the key. Outside, the children were still laughing.",
          },
          stem: "Analyse the ambiguity — what different readings could this ending support?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "Deliberately open details allow multiple interpretations." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'locked the door and pocketed the key' — is he keeping others out or sealing himself in? Ambiguous agency.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'children still laughing' — could be innocence continuing outside, or mockery; 'still' adds unease.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): juxtaposition of locked interior and laughing exterior creates unresolved tension — reader decides the meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Door/key = keeping in or out; laughing children = innocence or mockery — open ending sustains multiple readings.",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is verbal irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the audience knows more than characters" },
              { id: "b", text: "When someone says the opposite of what they mean" },
              { id: "c", text: "When an outcome surprises everyone" },
              { id: "d", text: "When a text has two meanings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Verbal irony", statement: "Saying the opposite of what is meant." }],
            steps: [{ reasoning: "Criterion A (Analysing): verbal irony = opposite words — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** When someone says the opposite of what they mean",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the irony in: 'The pilot, terrified of heights, was the only one calm during the turbulence.'", marks: 1 },
            { label: "b", prompt: "Explain why this is ironic.", marks: 2 },
            { label: "c", prompt: "Create your own example of dramatic irony in two sentences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Situational irony", statement: "Outcome opposite to a character's established trait or expectation." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): situational irony — fear of heights yet calm in turbulence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): expectation (fear of heights → panic) contradicts outcome (calm) — trait vs behaviour clash.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'only one calm' heightens the reversal — everyone else panics while the fearful pilot stays steady.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): dramatic irony example — e.g. 'She told him the bridge was safe. He didn't know she had seen the cracks that morning.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): audience knows the danger while the character trusts — dramatic irony correctly constructed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Situational irony. (b) Fearful trait vs calm outcome. (c) e.g. 'She said the bridge was safe...' — dramatic irony.",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "The novel uses verbal irony in the dialogue, dramatic irony in the plot, and ambiguity in the ending.",
          },
          stem: "How many of the three features named are forms of irony?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Irony vs ambiguity", statement: "Verbal and dramatic irony are irony; ambiguity is a separate feature." }],
            steps: [{ reasoning: "Criterion A (Analysing): verbal irony + dramatic irony = 2 forms of irony; ambiguity is not irony.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Toast",
            author: "Written for Akademik Space",
            text: "'To the best of us,' he said, raising his glass toward the empty chair.",
          },
          stem: "What does the 'empty chair' most likely add to this moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A practical seating arrangement" },
              { id: "b", text: "A poignant ambiguity — the absent person (dead or gone) makes the toast ambiguous between celebration and mourning" },
              { id: "c", text: "A comic moment about bad manners" },
              { id: "d", text: "Evidence the party is over" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "An unexplained detail can carry multiple emotional meanings." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'empty chair' suggests absence/death — 'best of us' becomes ambiguous between honour and elegy — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A poignant ambiguity — the absent person makes the toast ambiguous between celebration and mourning",
          },
        },
        {
          id: "mll5-u1-ambiguity-irony-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the type of irony in: 'The fire station burned to the ground.'", marks: 1 },
            { label: "b", prompt: "Explain the expectation that makes it ironic.", marks: 2 },
            { label: "c", prompt: "Explain how dramatic irony differs from this example, with your own example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Irony types", statement: "Situational = outcome vs expectation; dramatic = audience vs character knowledge." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): situational irony — fire station should be safest from fire.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): expectation — a fire station exists to prevent/fight fires; burning down violates its purpose.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): outcome contradicts the institution's defining function — classic situational irony.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): dramatic irony needs audience knowledge characters lack — e.g. 'Don't open that door!' when the audience knows what's behind it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): contrast — situational irony is outcome-based; dramatic irony is knowledge-based.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Situational irony. (b) Fire station exists to fight fires. (c) Dramatic irony = audience knows more; e.g. 'Don't open that door!'",
          },
        },
      ],
    },
    {
      id: "mll5-u1-intertextuality",
      title: "Intertextuality and allusion",
      skill: "Identify intertextual references and allusions and explain how they enrich meaning.",
      lesson: {
        sections: [
          {
            heading: "What is intertextuality?",
            body: "**Intertextuality** = when a text references, echoes or reworks another text. An **allusion** is a brief reference — 'He's a real Romeo' references Shakespeare. Intertextuality creates layers: readers who recognize the reference gain deeper understanding.",
          },
          {
            heading: "Types of references",
            body: "**Direct quotation**: exact words from another text. **Allusion**: brief, indirect reference ('Achilles' heel'). **Parody**: imitation for comic effect. **Pastoral**: evokes earlier literary traditions. **Mythological**: references Greek/Roman myths.",
          },
          {
            heading: "Why it matters",
            body: "Intertextuality adds **depth** — the new text inherits meaning from the old. It signals **literary awareness** and invites readers to make connections. It can also **subvert** — rewriting a familiar story with new meaning. Recognizing references enriches interpretation.",
          },
        ],
        keyFormulas: [
          { name: "Intertextuality", statement: "Reference + Original context = Layered meaning." },
        ],
        workedExample: {
          problem: "'Her beauty was enough to launch a thousand ships.' — What does this allude to?",
          solution: "Alludes to Helen of Troy — her beauty caused the Trojan War. Adds mythological weight to the description.",
        },
      },
      questions: [
        {
          id: "mll5-u1-intertextuality-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long quotation" },
              { id: "b", text: "A brief reference to another work, event or person" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "A character's name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allusion", statement: "Brief reference to another work/event/person." }],
            steps: [{ reasoning: "Criterion A (Analysing): allusion = brief reference — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A brief reference to another work, event or person",
          },
        },
        {
          id: "mll5-u1-intertextuality-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'He was an Achilles in battle but a Narcissus in love — unable to see beyond his own reflection.'",
          },
          stem: "Identify the allusions and explain what they add.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mythological allusion", statement: "Allusions add depth by referencing known stories." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Achilles' = Greek hero, fearless warrior; 'Narcissus' = self-absorbed youth who loved his reflection.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): allusions create contrast — brave in battle, vain in love; readers recognize the myths and grasp complexity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Achilles = warrior courage; Narcissus = vanity/self-absorption — creates character complexity via myth.",
          },
        },
        {
          id: "mll5-u1-intertextuality-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Rewrite",
            author: "Written for Akademik Space",
            text: "Original (Shakespeare): 'To be or not to be, that is the question.'\n\nModern version: 'To stream or not to stream, that is the question — whether it's nobler to suffer the algorithm's slings and arrows.'",
          },
          stem: "Analyse this intertextual reference — how does it work and what does it add?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intertextual rewriting", statement: "Adapting famous text creates humour and modern relevance." }],
            steps: [
              { reasoning: "Criterion A (Analysing): quotes Shakespeare's Hamlet — 'To be or not to be' — recognizable allusion.", evidence: "To be or not to be", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): replaces 'be' with 'stream' and 'slings and arrows' with 'algorithm's slings and arrows' — adapts to modern context.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): creates humour through juxtaposition — existential dilemma becomes streaming dilemma; elevates trivial choice to Shakespearean gravity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quotes Hamlet, adapts to streaming context — humour through juxtaposition, elevates modern dilemma.",
          },
        },
        {
          id: "mll5-u1-intertextuality-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the allusion: 'She had the patience of Job.'", marks: 1 },
            { label: "b", prompt: "Explain what this allusion adds to the description.", marks: 2 },
            { label: "c", prompt: "Create an allusion to a well-known story that describes someone's determination.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Allusions add depth through shared cultural knowledge." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): allusion to Job — biblical figure who endured suffering patiently.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'patience of Job' = legendary endurance — adds biblical weight to patience description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): readers familiar with Job's story grasp the depth of patience implied.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): allusion to determination story — e.g. 'She was a modern Sisyphus' or 'Her determination was Odysseus-like.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): allusion correctly chosen and explained — adds meaning through reference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Job — biblical patience. (b) Adds legendary endurance. (c) e.g. 'modern Sisyphus' — determination despite futility.",
          },
        },
        {
          id: "mll5-u1-intertextuality-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct quotation of a whole poem" },
              { id: "b", text: "A brief, indirect reference to another work, event or person" },
              { id: "c", text: "A type of rhyme scheme" },
              { id: "d", text: "A character's nickname" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allusion", statement: "Brief reference to another work/event/person." }],
            steps: [{ reasoning: "Criterion A (Analysing): allusion = brief indirect reference — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A brief, indirect reference to another work, event or person",
          },
        },
        {
          id: "mll5-u1-intertextuality-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Description",
            author: "Written for Akademik Space",
            text: "He was an Achilles in battle, a Narcissus in love, and a real Scrooge about money.",
          },
          stem: "How many allusions appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Each mythic/literary name functions as an allusion." }],
            steps: [{ reasoning: "Criterion A (Analysing): Achilles, Narcissus, Scrooge — 3 allusions.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-intertextuality-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Sentence",
            author: "Written for Akademik Space",
            text: "Opening the door, she found her own Pandora's box waiting in the hallway.",
          },
          stem: "What does 'Pandora's box' allude to, and what does it suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Greek vase — it suggests archaeology" },
              { id: "b", text: "The myth of Pandora — it suggests unleashing trouble or irreversible consequences" },
              { id: "c", text: "A children's toy — it suggests playfulness" },
              { id: "d", text: "Nothing — it is a literal box" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Mythological allusion", statement: "Allusions borrow meaning from the original story." }],
            steps: [{ reasoning: "Criterion A (Analysing): Pandora's box = unleashing evils — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The myth of Pandora — it suggests unleashing trouble or irreversible consequences",
          },
        },
        {
          id: "mll5-u1-intertextuality-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Comparison",
            author: "Written for Akademik Space",
            text: "Her patience was legendary — Job himself would have been impressed.",
          },
          stem: "What does the allusion to Job add to this description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the sentence longer without meaning" },
              { id: "b", text: "It invokes Job's legendary endurance, giving the patience biblical weight" },
              { id: "c", text: "It suggests she is unemployed" },
              { id: "d", text: "It is a spelling error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Allusions add depth through shared cultural knowledge." }],
            steps: [{ reasoning: "Criterion A (Analysing): Job = legendary patience — adds weight — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It invokes Job's legendary endurance, giving the patience biblical weight",
          },
        },
        {
          id: "mll5-u1-intertextuality-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'He was determined.'\n\nVersion B: 'He was a modern Sisyphus — pushing the same boulder up the same hill every day.'",
          },
          stem: "What does the allusion in Version B add?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it is just decoration" },
              { id: "b", text: "It adds futility and Sisyphean struggle — determination despite repetition and possible meaninglessness" },
              { id: "c", text: "It makes him look weak" },
              { id: "d", text: "It changes the setting to ancient Greece" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Allusions inherit meaning from the original story." }],
            steps: [{ reasoning: "Criterion A (Analysing): Sisyphus = futile eternal labour — 'determined' gains tragic, Sisyphean depth — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It adds futility and Sisyphean struggle — determination despite repetition",
          },
        },
        {
          id: "mll5-u1-intertextuality-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "She quoted Hamlet to him, then called him a Scrooge when he refused to pay.",
          },
          stem: "How many allusions appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Literary references function as allusions." }],
            steps: [{ reasoning: "Criterion A (Analysing): Hamlet (Shakespeare) + Scrooge (Dickens) — 2 allusions.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u1-intertextuality-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Modern Myth",
            author: "Written for Akademik Space",
            text: "'Every scroll through the feed was another episode of his own personal Odyssey — ten years, no Ithaca in sight.'",
          },
          stem: "Analyse this allusion — how does it transform the meaning of 'scrolling through a feed'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Modern allusion", statement: "Applying an epic myth to trivial activity creates irony and depth." }],
            steps: [
              { reasoning: "Criterion A (Analysing): alludes to Odysseus's epic journey — 'Odyssey', 'Ithaca' signal the myth.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): elevates passive scrolling to epic quest — then deflates it: 'no Ithaca in sight' suggests aimless wandering.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contrast satirises modern life — trivial activity dressed in heroic language; 'ten years' adds pathos of wasted time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Odyssey allusion elevates scrolling to epic quest, then deflates it — satire on aimless modern life.",
          },
        },
        {
          id: "mll5-u1-intertextuality-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a direct quotation differ from an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "A quotation repeats exact words; an allusion is a brief indirect reference" },
              { id: "c", text: "An allusion is always longer" },
              { id: "d", text: "A quotation never references other texts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Quotation vs allusion", statement: "Quotation = exact words; allusion = brief indirect reference." }],
            steps: [{ reasoning: "Criterion A (Analysing): quotation exact, allusion indirect — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** A quotation repeats exact words; an allusion is a brief indirect reference",
          },
        },
        {
          id: "mll5-u1-intertextuality-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the allusion: 'Her singing voice was pure enough to launch a thousand ships.'", marks: 1 },
            { label: "b", prompt: "Explain what this allusion adds to the description.", marks: 2 },
            { label: "c", prompt: "Create your own allusion describing someone's speed using a well-known story.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Allusions borrow cultural weight from known stories." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): alludes to Helen of Troy — her beauty launched the ships.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): transfers Helen's legendary beauty/destructive power to a singing voice — elevates it to mythic status.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'thousand ships' exaggerates — suggests her voice could start wars or journeys, i.e. be overwhelmingly powerful.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): speed allusion — e.g. 'He ran like Hermes on a message' or 'quick as Mercury.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): mythological reference correctly chosen — adds meaning through the original story.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Helen of Troy. (b) Elevates voice to mythic power. (c) e.g. 'quick as Mercury' — speed via myth.",
          },
        },
        {
          id: "mll5-u1-intertextuality-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The List",
            author: "Written for Akademik Space",
            text: "Allusions used: Achilles' heel, a Midas touch, a Pandora's box of problems.",
          },
          stem: "How many allusions are listed?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting allusions", statement: "Each classical reference counts." }],
            steps: [{ reasoning: "Criterion A (Analysing): Achilles' heel, Midas touch, Pandora's box — 3 allusions.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u1-intertextuality-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "'Touch that file and you'll open a can of worms you can't close.'",
          },
          stem: "What does 'a can of worms' allude to, and what effect does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fishing — it suggests the character loves fishing" },
              { id: "b", text: "The idiom of opening a can of worms — it suggests unleashing problems that are hard to control" },
              { id: "c", text: "A literal container — it is not an allusion" },
              { id: "d", text: "A biblical story — it suggests sin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Idiom and allusion", statement: "Idioms borrow figurative meaning from cultural usage." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'can of worms' = unleashing uncontrollable problems — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The idiom of opening a can of worms — it suggests unleashing problems that are hard to control",
          },
        },
        {
          id: "mll5-u1-intertextuality-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the intertextual technique: 'The mayor was a regular Napoleon — conquering everything in his path.'", marks: 1 },
            { label: "b", prompt: "Explain what the allusion adds to the portrait of the mayor.", marks: 2 },
            { label: "c", prompt: "Why might a writer choose an allusion over a direct description?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Allusion", statement: "Allusions compress meaning by referencing known figures/stories." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): allusion to Napoleon — military conqueror.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Napoleonic connotations — ambition, domination, military aggression — instantly characterize the mayor as a conqueror.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'conquering everything in his path' extends the allusion — ambition without boundary.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): allusion compresses complex traits into a single reference — efficient for the reader who recognizes it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): also flatters/engages literate readers and adds irony if the comparison is unflattering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Allusion to Napoleon. (b) Adds ambition/domination connotations. (c) Compresses meaning efficiently and engages shared knowledge.",
          },
        },
      ],
    },
  ],
};
