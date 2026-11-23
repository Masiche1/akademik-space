import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const HEMINGWAY: TextExtract = {
  title: "The Old Man and the Sea (excerpt)",
  author: "Ernest Hemingway",
  source: "The Old Man and the Sea (1952)",
  text: "But man is not made for defeat, he said. A man can be destroyed but not defeated.",
};

const HUGHES: TextExtract = {
  title: "I, Too",
  author: "Langston Hughes",
  source: "The Weary Blues (1926)",
  text: "I, too, sing America.\nI am the darker brother.\nThey send me to eat in the kitchen\nWhen company comes,\nBut I laugh,\nAnd eat well,\nAnd grow strong.\nTomorrow, I'll be at the table\nWhen company comes.\nNobody'll dare\nSay to me,\n'Eat in the kitchen,'\nThen.\nBesides,\nThey'll see how beautiful I am\nAnd be ashamed—\nI, too, am America.",
};

const ODELL: TextExtract = {
  title: "The Waiting Room",
  author: "Toni Cade Bambara",
  source: "Gorilla, My Love (1972), opening",
  text: "It was about twelve forty-five when we got to the Emergency Room, Greyhound bus and me, and she stuck me in this real creepy waiting room which nobody ever goes in because the nurses just yell at you to wait there cause there ain't nothing wrong with you. And I'm supposed to fill out this here medical card.",
};

export const lesson121: Lesson = {
  id: "ela12-u1-lesson-1-1",
  code: "1-1",
  title: "Modernism and the Harlem Renaissance",
  goal: "I CAN analyze how modernist writers fragment narrative and how Harlem Renaissance writers claim American identity through voice and rhythm.",
  standards: ["RL.11-12.2", "RL.11-12.4", "RL.11-12.6", "RL.11-12.9"],
  vocabulary: [
    { term: "Modernism", definition: "Early 20th-century movement breaking with tradition through experimentation in form, voice, and subject." },
    { term: "Stream of consciousness", definition: "Narrative technique following a character's thoughts without conventional order or punctuation." },
    { term: "Fragmentation", definition: "Modernist technique of breaking narrative into disjointed pieces to mirror a fractured world." },
    { term: "Harlem Renaissance", definition: "1920s-30s flowering of African American art, literature, and music centered in Harlem." },
    { term: "Diction", definition: "A writer's choice of words, including register, slang, and dialect." },
    { term: "Refrain", definition: "Repeated line or phrase in a poem, often carrying its theme." },
    { term: "Voice", definition: "The distinctive personality and attitude a writer creates through style and word choice." },
  ],
  concepts: [
    {
      id: "ela12-u1-modernism",
      title: "Modernist form and the fractured self",
      skill: "Explain how modernist techniques mirror a changed world and analyze diction for theme.",
      lesson: {
        sections: [
          {
            heading: "What modernism does to form",
            body: "Modernists such as Hemingway, Faulkner, and Stein wrote after World War I, when old certainties had collapsed. They respond by fragmenting form: streams of consciousness, shifting narrators, abrupt time jumps, and sparse dialogue. Form itself becomes an argument — the fractured page mirrors a world that no longer holds together.",
          },
          {
            heading: "Hemingway's iceberg style",
            body: "Hemingway strips sentences to the bone: short declaratives, concrete nouns, dialogue without attribution. The submerged meaning — grief, fear, dignity — stays beneath the surface ('iceberg theory'). In *The Old Man and the Sea*, the line 'A man can be destroyed but not defeated' states the theme plainly, yet the novel's power comes from what the prose refuses to say.",
          },
          {
            heading: "Analyzing the surface",
            body: "To analyze modernist prose, track: sentence length (short = restraint, urgency), omissions (what is never named), and the gap between what characters say and what the narration implies. Ask why the writer chose this level of explicitness — restraint is usually the point.",
          },
        ],
        keyFormulas: [
          { name: "Iceberg theory", statement: "Meaning lies mostly beneath the surface; the prose shows only one-eighth." },
          { name: "Form as argument", statement: "Fragmented structure mirrors a world that no longer coheres." },
        ],
        workedExample: {
          problem: "Why does Hemingway end *The Old Man and the Sea* with the maxim 'A man can be destroyed but not defeated'?",
          solution: "The maxim converts Santiago's physical failure into moral victory. By stating the theme outright after hundreds of pages of restraint, Hemingway makes the reader supply the reasoning — the prose has earned the abstraction through concrete detail.",
        },
      },
      questions: [
        {
          id: "ela12-u1-modernism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HEMINGWAY,
          stem: "In the passage, what does the phrase 'A man can be destroyed but not defeated' claim about Santiago?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He will physically survive the shark attack." },
              { id: "b", text: "He may lose everything external and still retain his dignity." },
              { id: "c", text: "Defeat is impossible for anyone who tries hard." },
              { id: "d", text: "The sea cannot actually destroy a fisherman." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Hemingway's code", statement: "Hemingway's heroes endure loss with dignity; 'defeated' means surrendering honor, not failing physically." }],
            steps: [{ reasoning: "'Destroyed' covers physical loss; 'defeated' is framed as the greater, avoidable loss — so the line distinguishes bodily ruin from moral surrender.", evidence: "A man can be destroyed but not defeated", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** He may lose everything external and still retain his dignity.",
            commonErrors: ["Choosing (a): confusing physical survival with the distinction the sentence actually draws."],
          },
        },
        {
          id: "ela12-u1-modernism-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: HEMINGWAY,
          stem: "Analyze how the brevity and declarative force of this single sentence carry the novel's theme. Consider sentence structure, diction, and what the sentence leaves unsaid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Syntax", statement: "Short declaratives create finality; the parallel 'can be ... but not ...' structure balances loss against endurance." },
              { kind: "skill", name: "Implicit meaning", statement: "The maxim earns its abstraction because the prose has shown the concrete struggle." },
            ],
            steps: [
              { reasoning: "The sentence is one short declarative with a balanced 'but' construction, giving it the weight of a verdict rather than an argument.", evidence: "can be destroyed but not defeated", marks: 1, markCode: "AO2" },
              { reasoning: "Diction is plain and absolute — 'man,' 'destroyed,' 'defeated' — so the claim reads as universal law, not personal hope.", evidence: "A man can be destroyed", marks: 1, markCode: "AO2" },
              { reasoning: "Nothing in the sentence names the struggle; the reader must connect it to the preceding pages of failure, which is the iceberg effect.", marks: 1, markCode: "AO3" },
              { reasoning: "The epigrammatic compression lets a single line state what a whole novel demonstrates, making it memorable and quotable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The balanced, absolute syntax and plain diction turn a personal story into a universal code; its power comes from what the surrounding prose has already shown.",
            commonErrors: ["Retelling the plot instead of analyzing the sentence's construction."],
          },
        },
        {
          id: "ela12-u1-modernism-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Modernist writers often use fragmented or minimalist form. Explain how such form functions as an argument about the modern world, using examples from at least two modernist techniques (stream of consciousness, omission, shifting narration).",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Form-function link", statement: "Connect a technique to what it suggests about reality." },
              { kind: "skill", name: "Multiple examples", statement: "Use at least two techniques with specific explanation." },
            ],
            steps: [
              { reasoning: "States that form is not neutral: fragmentation mirrors a world experienced as broken, accelerated, or ungraspable.", marks: 1, markCode: "AO3" },
              { reasoning: "Explains stream of consciousness: unedited thought mimics how consciousness actually moves — associative, non-linear — and rejects the orderly narrator of realism.", marks: 1, markCode: "AO2" },
              { reasoning: "Explains omission or restraint: what prose refuses to name (grief, fear) suggests modern experience exceeds language or is too painful for direct statement.", marks: 1, markCode: "AO2" },
              { reasoning: "Explains shifting or unstable narration: unreliable or multiple viewpoints reflect the loss of a single authoritative perspective after the war.", marks: 1, markCode: "AO2" },
              { reasoning: "Links techniques to a coherent claim about modernity (loss of certainty, speed, interiority) rather than listing them.", marks: 1, markCode: "AO3" },
              { reasoning: "Uses specific examples or allusions to named works/authors, not just generic technique names.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Fragmented form argues that modern experience itself is fragmented; each technique enacts a different aspect — consciousness, silence, lost authority.",
            commonErrors: ["Defining techniques without linking them to a claim about the world."],
          },
        },
      ],
    },
    {
      id: "ela12-u1-harlem-renaissance",
      title: "Harlem Renaissance voice",
      skill: "Analyze how Hughes and Bambara use dialect, refrain, and voice to claim American identity.",
      lesson: {
        sections: [
          {
            heading: "Claiming 'I, too, am America'",
            body: "The Harlem Renaissance turned a derogatory position — the 'darker brother' sent to the kitchen — into a declaration of belonging. Hughes's 'I, Too' uses the first-person pronoun as both individual and collective ('I' standing for a whole people) and ends by seizing the American anthem for the excluded. The poem's plain diction and song-like refrain mimic spirituals and blues.",
          },
          {
            heading: "Bambara's vernacular narration",
            body: "Bambara writes in the voice of a young Black girl, Hazel, whose grammar, slang ('ain't nothing wrong with you'), and comic timing are the style. The voice is not decoration: it insists that Black vernacular is a complete, authoritative way of knowing the world. Analyzing voice means treating diction as argument, not error.",
          },
          {
            heading: "Reading dialect without correcting it",
            body: "Resist 'correcting' dialect in your head. Ask what the nonstandard features accomplish: community membership, humor, resistance, rhythm. Note shifts in register — when a narrator drops into standard English, that shift is usually meaningful.",
          },
        ],
        keyFormulas: [
          { name: "Voice as argument", statement: "Diction and grammar choices carry the writer's stance; vernacular can be authoritative." },
          { name: "Refrain", statement: "Repeated lines structure poems like songs and build thematic insistence." },
        ],
        workedExample: {
          problem: "How does the title 'I, Too' function in Hughes's poem?",
          solution: "'Too' answers Whitman's 'I Hear America Singing' — America sings for everyone, and the excluded voice joins in. The title alone carries the argument before the poem begins.",
        },
      },
      questions: [
        {
          id: "ela12-u1-harlem-renaissance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HUGHES,
          stem: "What does the speaker mean by 'I, too, am America'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is the only true American." },
              { id: "b", text: "He belongs to America as fully as anyone else, despite being excluded." },
              { id: "c", text: "America should be divided between races." },
              { id: "d", text: "He plans to leave America." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Claiming identity", statement: "The poem turns exclusion into a declaration of belonging." }],
            steps: [{ reasoning: "After the exclusion ('Eat in the kitchen'), the final line claims equal membership: 'too' means 'also, like everyone else.'", evidence: "I, too, am America", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** He belongs to America as fully as anyone else.",
            commonErrors: ["Reading 'too' as 'also' without seeing the reversal it completes."],
          },
        },
        {
          id: "ela12-u1-harlem-renaissance-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: HUGHES,
          stem: "Analyze how Hughes uses structure and repetition in 'I, Too' to build his claim.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Refrain", statement: "Repetition creates insistence; placement at the end turns a phrase into a verdict." }],
            steps: [
              { reasoning: "'I, too' opens and recurs, turning a small word into a rallying claim repeated like a chorus.", evidence: "I, too, sing America", marks: 1, markCode: "AO2" },
              { reasoning: "The kitchen/table image repeats with 'Tomorrow' as a pivot — humiliation is answered by a future of equality.", evidence: "Tomorrow, I'll be at the table", marks: 1, markCode: "AO2" },
              { reasoning: "Short lines and plain diction imitate song, giving the poem the accessibility of an anthem — fitting, since it rewrites one.", marks: 1, markCode: "AO3" },
              { reasoning: "Ending on 'I, too, am America' places the thesis last for maximum weight; the claim is earned by the journey through exclusion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Repetition and song-like structure turn personal humiliation into a collective claim; the refrain earns its final assertion.",
            commonErrors: ["Listing devices without explaining their effect on the claim."],
          },
        },
        {
          id: "ela12-u1-harlem-renaissance-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ODELL,
          stem: "Analyze how Bambara's vernacular voice in 'The Waiting Room' creates both characterization and critique. Consider diction, syntax, and tone.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "technique", name: "Vernacular voice", statement: "Nonstandard grammar and slang are choices that build character and stance, not errors." },
              { kind: "skill", name: "Voice and critique", statement: "Connect the narrator's language to her attitude toward the institution." },
            ],
            steps: [
              { reasoning: "Diction like 'creepy,' 'ain't nothing wrong with you' gives Hazel a skeptical, deflating voice that punctures adult authority.", evidence: "ain't nothing wrong with you", marks: 1, markCode: "AO2" },
              { reasoning: "Run-on, breathless syntax mimics the speed of observation — Hazel catalogs the waiting room's wrongness faster than anyone can stop her.", marks: 1, markCode: "AO2" },
              { reasoning: "Deadpan, comic tone ('which nobody ever goes in') keeps the critique indirect but unmistakable — the institution's absurdity is shown, not lectured.", marks: 1, markCode: "AO3" },
              { reasoning: "The voice asserts that this child's perspective is as legitimate as the medical establishment's, which is itself a political claim.", marks: 1, markCode: "AO4" },
              { reasoning: "Contrasts with how an adult narrator would describe the same scene; the gap shows what standard English would smooth over.", marks: 1, markCode: "AO3" },
              { reasoning: "Explains how voice functions as both characterization (we hear a specific girl) and argument (her way of seeing exposes injustice).", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Bambara's vernacular creates a sharp, funny, resistant narrator whose language itself critiques the indifference of the institution.",
            commonErrors: ["Treating dialect as incorrect English rather than a deliberate style."],
          },
        },
      ],
    },
  ],
};
