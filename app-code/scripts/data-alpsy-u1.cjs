module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson711",
    lesson: {
      id: "ciealpsy-u1-lesson-1-1", code: "1-1",
      title: "Social Influence: Conformity and Obedience",
      goal: "I CAN explain conformity and obedience, and analyse classic studies.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 1: Social influence"],
      vocabulary: [
        { term: "Conformity", definition: "Changing behaviour to match group norms." },
        { term: "Compliance", definition: "Following group pressure while privately disagreeing." },
        { term: "Identification", definition: "Adopting group values because you accept the group." },
        { term: "Internalisation", definition: "Permanently adopting group norms." },
        { term: "Obedience", definition: "Following orders from an authority figure." },
        { term: "Agentic state", definition: "Obeying because you see yourself as an agent of authority." },
      ],
      concept: {
        id: "ciealpsy-u1-s1-infl", title: "Social influence",
        skill: "Explain conformity, obedience and evaluate studies.",
        sections: [
          { heading: "Types of conformity", body: "Compliance: public agreement, private disagreement (Asch line study). Internalisation: genuine acceptance (Sherif). Obedience: following authority orders (Milgram)." },
          { heading: "Explanations", body: "Normative social influence: want to be liked/accepted → conformity. Informational influence: want to be right → conformity. Obedience explained by agentic state, legitimacy of authority." },
          { heading: "Classic studies", body: "Asch: ~33% conformity on clear wrong answers. Milgram: ~65% obedience to 450V. Situational factors: proximity, legitimacy, proximity of victim. Dispositional: authoritarian personality." },
        ],
        keyFormulas: [
          { name: "Conformity", statement: "match group norms" },
          { name: "Asch", statement: "~33% conformity" },
          { name: "Milgram", statement: "~65% obedience" },
        ],
        workedExample: {
          problem: "Distinguish normative vs informational social influence.",
          solution: "Normative = fear of rejection (want to be liked). Informational = uncertainty about correct answer (want to be right).",
        },
        questions: [
          {
            id: "ciealpsy-u1-infl-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is conformity?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Changing behaviour to match group norms" }, { id: "b", text: "Following orders" }, { id: "c", text: "A type of memory" }, { id: "d", text: "An attachment style" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Conformity", statement: "Match group norms." }],
              steps: [{ reasoning: "Conformity = matching group norms.", marks: 1, markCode: "M" }],
              finalAnswer: "Match group norms",
            },
          },
          {
            id: "ciealpsy-u1-infl-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between normative and informational social influence?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "NSI vs ISI", statement: "Liked vs right." }],
              steps: [
                { reasoning: "Normative = want to be liked/accepted.", marks: 1, markCode: "M" },
                { reasoning: "Informational = want to be right/uncertain.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Liked vs right",
            },
          },
          {
            id: "ciealpsy-u1-infl-q3", difficulty: "core", totalMarks: 3,
            stem: "What did Milgram's obedience study find?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "study", name: "Milgram", statement: "Obedience to authority." }],
              steps: [
                { reasoning: "~65% administered highest shock despite learner protests.", marks: 1, markCode: "M" },
                { reasoning: "Participants obeyed authority figure (experimenter).", marks: 1, markCode: "M" },
                { reasoning: "Situational factors affected obedience level.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "65% obedience to authority",
            },
          },
          {
            id: "ciealpsy-u1-infl-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define conformity, compliance, internalisation, obedience, agentic state, normative influence. (b) What is conformity? (c) What is obedience? (d) What did Asch find? (e) What did Milgram find? (f) What is normative influence? (g) What is informational influence? (h) Evaluate whether Milgram's study was ethical.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Social influence", statement: "Conformity/obedience." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Match group norms.", marks: 1, markCode: "M" },
                { reasoning: "(c) Follow orders.", marks: 1, markCode: "M" },
                { reasoning: "(d) ~33% conformity.", marks: 1, markCode: "M" },
                { reasoning: "(e) ~65% obedience.", marks: 1, markCode: "M" },
                { reasoning: "(f) Want to be liked.", marks: 1, markCode: "M" },
                { reasoning: "(g) Want to be right.", marks: 1, markCode: "M" },
                { reasoning: "(h) Deception, distress — but scientific value argued.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Social influence analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u1-infl-notes", title: "Social influence — notes",
      summary: "Conformity=group norms; obedience=authority. Asch ~33%, Milgram ~65%.",
      sections: [
        { heading: "Key idea", body: "Both conformity and obedience show powerful social pressures." },
        { heading: "Ethics", body: "Classic studies raise consent/debrief issues." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson712",
    lesson: {
      id: "ciealpsy-u1-lesson-1-2", code: "1-2",
      title: "Memory: Models and Processes",
      goal: "I CAN explain memory models and the stages of memory.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 1: Memory"],
      vocabulary: [
        { term: "Sensory memory", definition: "Brief store of sensory info (~seconds)." },
        { term: "Short-term memory", definition: "Limited capacity store (~seconds-minutes)." },
        { term: "Long-term memory", definition: "Essentially unlimited duration store." },
        { term: "Encoding", definition: "Converting info into storable form." },
        { term: "Storage", definition: "Maintaining info over time." },
        { term: "Retrieval", definition: "Accessing stored info." },
      ],
      concept: {
        id: "ciealpsy-u1-s2-mem", title: "Memory processes",
        skill: "Explain memory models and processes.",
        sections: [
          { heading: "Multi-store model", body: "Atkinson-Shiffrin: sensory → STM → LTM via rehearsal. Sensory ~iconic/echoic (~0.5s), STM ~7±2 items (~20s), LTM unlimited. Forgetting: trace decay, displacement, interference." },
          { heading: "Working memory model", body: "Baddeley & Hitch: central executive, phonological loop, visuospatial sketchpad, episodic buffer. STM is active workspace, not just rehearsal store." },
          { heading: "Encoding", body: "Acoustic (sound-based), visual, semantic. Semantic encoding best for LTM. Context-dependent and state-dependent retrieval." },
        ],
        keyFormulas: [
          { name: "STM capacity", statement: "7±2 items" },
          { name: "Miller", statement: "7±2 chunks" },
          { name: "Encoding", statement: "acoustic→semantic" },
        ],
        workedExample: {
          problem: "Why do we forget information?",
          solution: "Trace decay (STM), displacement (capacity exceeded), interference (similar memories compete), retrieval failure (poor cues).",
        },
        questions: [
          {
            id: "ciealpsy-u1-mem-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the multi-store model of memory?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sensory → STM → LTM via rehearsal" }, { id: "b", text: "A type of encoding" }, { id: "c", text: "A forgetting theory" }, { id: "d", text: "A brain structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "model", name: "MSM", statement: "Three stores." }],
              steps: [{ reasoning: "MSM: sensory→STM→LTM via rehearsal.", marks: 1, markCode: "M" }],
              finalAnswer: "Sensory→STM→LTM",
            },
          },
          {
            id: "ciealpsy-u1-mem-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the capacity of short-term memory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "fact", name: "STM capacity", statement: "7±2 items." }],
              steps: [
                { reasoning: "~7±2 items (Miller).", marks: 1, markCode: "M" },
                { reasoning: "Can be increased by chunking.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "7±2 items",
            },
          },
          {
            id: "ciealpsy-u1-mem-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between the multi-store model and working memory model?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "comparison", name: "MSM vs WMM", statement: "Passive vs active." }],
              steps: [
                { reasoning: "MSM: passive rehearsal, single STM store.", marks: 1, markCode: "M" },
                { reasoning: "WMM: active processing, multiple components.", marks: 1, markCode: "M" },
                { reasoning: "WMM explains dual-task performance better.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Passive vs active processing",
            },
          },
          {
            id: "ciealpsy-u1-mem-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sensory memory, STM, LTM, encoding, storage, retrieval. (b) What is MSM? (c) What is STM capacity? (d) What is encoding? (e) What are forgetting explanations? (f) What is WMM? (g) What is chunking? (h) Evaluate MSM vs WMM.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Memory", statement: "Models/processes." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Three stores.", marks: 1, markCode: "M" },
                { reasoning: "(c) 7±2 items.", marks: 1, markCode: "M" },
                { reasoning: "(d) Converting info.", marks: 1, markCode: "M" },
                { reasoning: "(e) Decay, displacement, interference.", marks: 1, markCode: "M" },
                { reasoning: "(f) Multiple components.", marks: 1, markCode: "M" },
                { reasoning: "(g) Grouping items.", marks: 1, markCode: "M" },
                { reasoning: "(h) WMM explains more phenomena.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Memory models comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u1-mem-notes", title: "Memory models — notes",
      summary: "MSM=three stores; WMM=active workspace. STM capacity 7±2.",
      sections: [
        { heading: "Key idea", body: "Memory involves encoding→storage→retrieval across different stores." },
        { heading: "Forgetting", body: "Decay, displacement, interference, retrieval failure." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson713",
    lesson: {
      id: "ciealpsy-u1-lesson-1-3", code: "1-3",
      title: "Memory: Eyewitness Testimony and Improvement",
      goal: "I CAN explain factors affecting eyewitness testimony and memory improvement strategies.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 1: Memory"],
      vocabulary: [
        { term: "Eyewitness testimony", definition: "Account given by someone who saw an event." },
        { term: "Leading question", definition: "Question suggesting a particular answer." },
        { term: "Cognitive interview", definition: "Interview technique to improve recall." },
        { term: "Context-dependent forgetting", definition: "Forgetting when retrieval context differs." },
        { term: "State-dependent forgetting", definition: "Forgetting when internal state differs." },
        { term: "Mnemonic", definition: "Memory aid technique." },
      ],
      concept: {
        id: "ciealpsy-u1-s3-ewt", title: "Eyewitness testimony",
        skill: "Analyse EWT factors and improvement strategies.",
        sections: [
          { heading: "EWT factors", body: "Anxiety affects recall (weapon focus). Misleading info post-event (Loftus). Leading questions distort memory. Race bias, age effects." },
          { heading: "Cognitive interview", body: "Fisher & Geiselman: report everything, reinstate context, reverse order, change perspective. Improves recall ~35-75%. Based on encoding specificity principle." },
          { heading: "Improving memory", body: "Mnemonics (acronyms, loci), elaboration, chunking, spaced repetition, retrieval practice, organisation." },
        ],
        keyFormulas: [
          { name: "Cognitive interview", statement: "improves ~35-75%" },
          { name: "Weapon focus", statement: "attention on weapon" },
          { name: "Leading question", statement: "distorts memory" },
        ],
        workedExample: {
          problem: "Why is eyewitness testimony unreliable?",
          solution: "Memory is reconstructive, not photographic. Anxiety, misleading info, leading questions, bias all distort recall.",
        },
        questions: [
          {
            id: "ciealpsy-u1-ewt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is eyewitness testimony?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Account by someone who saw an event" }, { id: "b", text: "A type of memory store" }, { id: "c", text: "A brain scan" }, { id: "d", text: "A statistical test" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "EWT", statement: "Witness account." }],
              steps: [{ reasoning: "EWT = eyewitness account.", marks: 1, markCode: "M" }],
              finalAnswer: "Witness account",
            },
          },
          {
            id: "ciealpsy-u1-ewt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a leading question?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Leading question", statement: "Suggests answer." }],
              steps: [
                { reasoning: "Question suggesting particular answer.", marks: 1, markCode: "M" },
                { reasoning: "Can distort memory (Loftus).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Suggests answer",
            },
          },
          {
            id: "ciealpsy-u1-ewt-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the cognitive interview and why does it work?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cognitive interview", statement: "Recall technique." }],
              steps: [
                { reasoning: "Fisher & Geiselman: report everything, reinstate context.", marks: 1, markCode: "M" },
                { reasoning: "Based on encoding specificity principle.", marks: 1, markCode: "M" },
                { reasoning: "Improves recall ~35-75%.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Context reinstatement improves recall",
            },
          },
          {
            id: "ciealpsy-u1-ewt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define EWT, leading question, cognitive interview, context-dependent forgetting, weapon focus, mnemonic. (b) What is EWT? (c) What is weapon focus? (d) What is cognitive interview? (e) What is context-dependent forgetting? (f) Why is EWT unreliable? (g) What are memory improvement strategies? (h) Evaluate cognitive interview vs standard interview.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "EWT", statement: "Factors/improvement." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Witness account.", marks: 1, markCode: "M" },
                { reasoning: "(c) Attention on weapon.", marks: 1, markCode: "M" },
                { reasoning: "(d) Recall technique.", marks: 1, markCode: "M" },
                { reasoning: "(e) Context mismatch.", marks: 1, markCode: "M" },
                { reasoning: "(f) Reconstructive, biases, anxiety.", marks: 1, markCode: "M" },
                { reasoning: "(g) Mnemonics, elaboration, spaced repetition.", marks: 1, markCode: "M" },
                { reasoning: "(h) CI better but time-consuming.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "EWT analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u1-ewt-notes", title: "EWT — notes",
      summary: "EWT unreliable due to reconstructive memory. Cognitive interview improves recall.",
      sections: [
        { heading: "Key idea", body: "Memory is reconstructive — factors distort eyewitness accounts." },
        { heading: "Improvement", body: "Cognitive interview, context reinstatement, avoid leading questions." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson714",
    lesson: {
      id: "ciealpsy-u1-lesson-1-4", code: "1-4",
      title: "Attachment: Theory and Types",
      goal: "I CAN explain attachment theory, types and cultural variations.",
      standards: ["Cambridge A Level Psychology 9699", "Paper 1: Attachment"],
      vocabulary: [
        { term: "Attachment", definition: "Emotional bond between infant and caregiver." },
        { term: "Monotropy", definition: "Bowlby's claim of one primary attachment." },
        { term: "Secure attachment", definition: "Infant uses caregiver as safe base." },
        { term: "Insecure-avoidant", definition: "Infant avoids caregiver on reunion." },
        { term: "Insecure-resistant", definition: "Infant clings but resists comfort." },
        { term: "Strange Situation", definition: "Ainsworth's attachment assessment procedure." },
      ],
      concept: {
        id: "ciealpsy-u1-s4-att", title: "Attachment",
        skill: "Explain attachment theory and types.",
        sections: [
          { heading: "Bowlby's theory", body: "Evolutionary: attachment evolved for survival. Monotropy: one primary attachment (usually mother). Sensitive responding in first year critical. Internal working model shapes future relationships." },
          { heading: "Ainsworth's Strange Situation", body: "8 episodes observing infant with caregiver/stranger. Secure (~60-65%), avoidant (~20%), resistant (~10-15%). Secure: seeks contact, comforted. Avoidant: ignores, explores freely. Resistant: clings, can't be comforted." },
          { heading: "Cultural variations", body: "Van Ijzendoorn meta-analysis: secure majority across cultures. Germany: more avoidant (independence valued). Japan: more resistant (close physical contact). Israel kibbutzim: communal care." },
        ],
        keyFormulas: [
          { name: "Monotropy", statement: "one primary attachment" },
          { name: "Secure", statement: "~60-65%" },
          { name: "Avoidant", statement: "~20%" },
        ],
        workedExample: {
          problem: "How does attachment affect later development?",
          solution: "Internal working model: secure attachment → positive expectations of relationships → better social/emotional development.",
        },
        questions: [
          {
            id: "ciealpsy-u1-att-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is attachment?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Emotional bond between infant and caregiver" }, { id: "b", text: "A type of memory" }, { id: "c", text: "A learning process" }, { id: "d", text: "A brain structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Attachment", statement: "Emotional bond." }],
              steps: [{ reasoning: "Attachment = emotional bond.", marks: 1, markCode: "M" }],
              finalAnswer: "Emotional bond",
            },
          },
          {
            id: "ciealpsy-u1-att-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is monotropy in attachment theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Monotropy", statement: "One primary." }],
              steps: [
                { reasoning: "Bowlby's claim of one primary attachment.", marks: 1, markCode: "M" },
                { reasoning: "Usually mother, but can be any caregiver.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "One primary attachment",
            },
          },
          {
            id: "ciealpsy-u1-att-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the three attachment types identified by Ainsworth?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "study", name: "Strange Situation", statement: "Attachment types." }],
              steps: [
                { reasoning: "Secure: seeks contact, comforted.", marks: 1, markCode: "M" },
                { reasoning: "Avoidant: ignores, explores freely.", marks: 1, markCode: "M" },
                { reasoning: "Resistant: clings, can't be comforted.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Secure, avoidant, resistant",
            },
          },
          {
            id: "ciealpsy-u1-att-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define attachment, monotropy, secure, avoidant, resistant, Strange Situation. (b) What is attachment? (c) What is monotropy? (d) What are attachment types? (e) What is Strange Situation? (f) What is internal working model? (g) How do cultures differ? (h) Evaluate Bowlby's attachment theory.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Attachment", statement: "Theory/types." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Emotional bond.", marks: 1, markCode: "M" },
                { reasoning: "(c) One primary.", marks: 1, markCode: "M" },
                { reasoning: "(d) Secure, avoidant, resistant.", marks: 1, markCode: "M" },
                { reasoning: "(e) Ainsworth procedure.", marks: 1, markCode: "M" },
                { reasoning: "(f) Internal expectations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cultural variations exist.", marks: 1, markCode: "M" },
                { reasoning: "(h) Evolutionary basis but culturally biased.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Attachment theory analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealpsy-u1-att-notes", title: "Attachment — notes",
      summary: "Bowlby: evolutionary, monotropy. Ainsworth: 3 types via Strange Situation.",
      sections: [
        { heading: "Key idea", body: "Early attachment shapes internal working model of relationships." },
        { heading: "Cultural", body: "Secure majority across cultures but variations exist." },
      ],
    },
  },
];
