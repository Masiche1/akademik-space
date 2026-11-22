import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const PURITAN_EMERSON: TextExtract = {
  title: "Community and the individual",
  author: "John Winthrop and Ralph Waldo Emerson",
  source: "A. Winthrop, 'A Model of Christian Charity' (1630); B. Emerson, 'Self-Reliance' (1841) (short excerpts)",
  text: "A.\nFor we must consider that we shall be as a city upon a hill, the eyes of all people are upon us.\n\nB.\nWhoso would be a man, must be a nonconformist.\n\nTrust thyself: every heart vibrates to that iron string.",
};

const THOREAU: TextExtract = {
  title: "Why I went to the woods",
  author: "Henry David Thoreau",
  source: "Walden (1854), 'Where I Lived, and What I Lived For' (excerpt)",
  text: "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
};

const USHER: TextExtract = {
  title: "Approaching the House of Usher",
  author: "Edgar Allan Poe",
  source: "The Fall of the House of Usher (1839), opening sentence",
  text: "During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country; and at length found myself, as the shades of the evening drew on, within view of the melancholy House of Usher.",
};

const GANNET: TextExtract = {
  title: "The Keeper of Gannet Point",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "The lamp room at Gannet Point had been dark for six years when the new keeper arrived, and the village agreed on the reason without ever stating it. On his first night he found a lantern burning on the rocks below the tower, though the tide had covered the path since noon. He told himself that a fisherman had lit it. In the morning the lantern was gone, and the rocks were bare and green with weed, and there was no footprint but his own.\n\nOn the third night he saw the figure beside the lantern, a woman in a gray shawl who stood with her back to him, facing the sea. He called out. She did not turn. He went down the steps with a cold, quick feeling that he was late for something, and when he reached the water's edge the lantern had burned down to a ring of ash.\n\nHe did not mention it to the harbor master. A man who sees ghosts is a man who is sent home; and a man who is sent home, he thought, has to explain what he was running from.",
};

export const lesson11: Lesson = {
  id: "ela11-u1-lesson-1-1",
  code: "1-1",
  title: "Movements and Ideas",
  goal: "I CAN trace how Puritan, Romantic, and Transcendentalist writers develop ideas about the self, nature, and society, and analyze mood, symbolism, and ambiguity in Dark Romantic and Gothic writing.",
  standards: ["RL.11-12.2", "RL.11-12.9", "RL.11-12.4", "RL.11-12.5"],
  vocabulary: [
    { term: "Puritanism", definition: "The early New England outlook that placed the community and God's judgment above the individual, and valued plain style and moral discipline." },
    { term: "Romanticism", definition: "A movement that prized imagination, emotion, individual experience, and nature over reason, convention, and industry." },
    { term: "Transcendentalism", definition: "A 19th-century American philosophy holding that intuition and nature lead the individual to truth, so conscience outranks custom and institutions." },
    { term: "Dark Romanticism", definition: "A strand of Romanticism that explores guilt, madness, sin, and the limits of human reason rather than celebrating human goodness." },
    { term: "Gothic", definition: "A mode that uses gloomy settings, decay, secrecy, and dread to explore fear and the unknown." },
    { term: "Ambiguity", definition: "A deliberate openness in a text so that two or more readings remain possible and the text does not settle between them." },
    { term: "Mood", definition: "The feeling a passage creates in the reader, built through setting, diction, and rhythm." },
  ],
  concepts: [
    {
      id: "ela11-u1-ideas-self-society",
      title: "Puritan, Romantic, and Transcendentalist ideas",
      skill: "Trace how writers' ideas about the self, nature, and society develop, and how later movements respond to earlier ones.",
      lesson: {
        sections: [
          {
            heading: "Three conversations about the self",
            body: "Early **Puritan** writers such as Winthrop and Edwards ask what a person owes to God and to the community: the self is answerable, watched, and sinful until redeemed. **Romantic** writers shift the question to what a person feels and imagines, and treat nature as a source of insight. **Transcendentalists** such as Emerson and Thoreau go further: the individual conscience is the highest authority, and nature is a teacher. Each movement answers the one before it, so strong readings treat them as a conversation rather than a list of labels.",
          },
          {
            heading: "How to trace an idea",
            body: "To follow an idea across a text or across texts, name the idea (for example, 'the individual versus the community'), then track how it is stated, complicated, or reversed. Look at pronouns ('we' versus 'I'), commands, and the images used for nature and society. When two works are linked (RL.11-12.9), say what the later work keeps, what it rejects, and what new idea it adds. Support each claim with a short embedded quotation and explain how the wording produces the idea.",
          },
        ],
        keyFormulas: [
          { name: "Puritan outlook", statement: "Community and divine judgment come before the individual; the self is accountable and watched." },
          { name: "Transcendentalist outlook", statement: "Individual conscience and nature are the highest authorities; conformity is a failure of self-trust." },
          { name: "Tracing an idea", statement: "Name the idea, find where it is stated, show how it develops or is reversed, and explain the wording that does it." },
        ],
        workedExample: {
          problem: "How does Emerson's sentence 'Whoso would be a man, must be a nonconformist' respond to a Puritan view of the individual?",
          solution: "Winthrop's 'we shall be as a city upon a hill' makes the group the unit that matters and places it under observation. Emerson reverses this. The conditional 'Whoso would be a man' makes nonconformity the price of full humanity, and the word 'nonconformist' turns what a Puritan community would treat as deviance into a virtue. The idea of the self therefore develops from an accountable member of a watched community into an independent conscience that owes loyalty first to itself.",
        },
      },
      questions: [
        {
          id: "ela11-u1-ideas-self-society-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PURITAN_EMERSON,
          stem: "In passage A, what does the phrase 'the eyes of all people are upon us' suggest about the individual in Winthrop's community?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each person is expected to leave the community and travel widely." },
              { id: "b", text: "Each person is free to follow individual conscience whatever others think." },
              { id: "c", text: "Each person should hide private beliefs to avoid being noticed." },
              { id: "d", text: "Each person lives under public scrutiny and must act as an example for the whole community." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Puritan community", statement: "Puritan writers present the community as a visible covenant: individual conduct reflects on the whole group." }],
            steps: [{ reasoning: "'The eyes of all people are upon us' uses a collective pronoun and the image of observation, so each person's behavior is on display and represents the group.", evidence: "the eyes of all people are upon us", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. The passage stresses watching and the group ('us'). Option (c) describes Emerson's view in passage B, not Winthrop's.",
            commonErrors: ["Choosing (c) because it sounds like a positive reading of the passage, confusing Winthrop with Emerson."],
          },
        },
        {
          id: "ela11-u1-ideas-self-society-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PURITAN_EMERSON,
          stem: "Explain how the two passages differ in where they place authority: in the community or in the individual. Use a quotation from each passage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing ideas", statement: "Name the difference in idea first, then support each side with its own evidence." }],
            steps: [
              { reasoning: "Winthrop places authority in the group under observation: the pronoun 'we' and the 'eyes of all people' make the community the judge.", evidence: "we shall be as a city upon a hill", marks: 1, markCode: "AO1" },
              { reasoning: "Emerson places authority in the self: the command 'Trust thyself' makes private conscience the guide.", evidence: "Trust thyself", marks: 1, markCode: "AO1" },
              { reasoning: "Draws the contrast: for Winthrop being good means living up to a shared example, while for Emerson it means resisting the crowd ('nonconformist').", evidence: "must be a nonconformist", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Winthrop's 'we shall be as a city upon a hill' puts authority in a watched community, while Emerson's 'Trust thyself' puts it in the individual. Emerson goes on to treat being a 'nonconformist' as the mark of a full person, the opposite of Winthrop's emphasis on a shared example.",
            commonErrors: ["Describing each passage without stating the contrast.", "Quoting without explaining what the quotation shows."],
          },
        },
        {
          id: "ela11-u1-ideas-self-society-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PURITAN_EMERSON,
          stem: "Analyze how the wording of the two passages expresses two different ideas about the relationship between the individual and society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pronoun and mood", statement: "Collective pronouns and imperatives signal whether a writer speaks for a group or addresses a single conscience." },
              { kind: "skill", name: "Linking texts", statement: "Compare how each text uses language to build its idea, not only what the ideas are." },
            ],
            steps: [
              { reasoning: "Winthrop's plural pronouns and image of an exposed city on a hill make the individual part of a visible whole, with responsibility to represent it.", evidence: "we shall be as a city upon a hill", marks: 2, markCode: "AO2" },
              { reasoning: "Emerson's imperative and the second person 'thyself' address each reader as a sovereign individual, and the 'iron string' metaphor makes inner conviction strong and unbreakable.", evidence: "every heart vibrates to that iron string", marks: 2, markCode: "AO2" },
              { reasoning: "Synthesizes the contrast: Winthrop's solemn future 'shall be' sets a duty, while Emerson's 'nonconformist' turns defiance of society into integrity.", evidence: "must be a nonconformist", marks: 2, markCode: "AO3" },
            ],
            levels: levels(6),
            finalAnswer: "Winthrop's plural 'we' and the exposed 'city upon a hill' make the individual part of a watched whole, bound by duty ('shall be'). Emerson's imperative 'Trust thyself' and the metaphor of the 'iron string' address each reader as a sovereign conscience, and calling the ideal person a 'nonconformist' turns resistance to society into integrity. The two passages therefore move from community authority to individual authority.",
            commonErrors: ["Summarizing the two ideas without discussing wording.", "Treating the passages as saying the same thing."],
          },
        },
        {
          id: "ela11-u1-ideas-self-society-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: THOREAU,
          stem: "Answer all parts of this question about Thoreau's sentence. Recall Emerson's claim from the previous passage: 'Whoso would be a man, must be a nonconformist.'",
          parts: [
            { label: "a", prompt: "State in your own words what Thoreau says he wanted from his time in the woods. Support your answer with one quotation.", marks: 3 },
            { label: "b", prompt: "Explain how Thoreau presents nature in this sentence.", marks: 5 },
            { label: "c", prompt: "Evaluate how far Thoreau's sentence develops Emerson's idea of the self and how far it adds a distinct idea. Refer closely to the wording of Thoreau's sentence.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Transcendentalism", statement: "Emerson and Thoreau hold that the self and nature, not institutions, are the sources of truth." },
              { kind: "skill", name: "Evaluating development", statement: "Show what a later text keeps from an earlier one and what it adds or changes, with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "States that he wanted to live consciously and by choice, not by habit.", evidence: "to live deliberately", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Adds that he wanted to face the basic realities of life without distraction.", evidence: "to front only the essential facts of life", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Notes the fear of reaching death without having truly lived.", evidence: "discover that I had not lived", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Nature is presented as a teacher: life has something 'to teach' and the speaker goes to learn.", evidence: "learn what it had to teach", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The woods are a place of essential, unadorned reality, set against the crowded life he left, which is implied to be unreal.", evidence: "essential facts of life", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The verb 'went' shows nature is a deliberate destination, a chosen test rather than a retreat.", evidence: "I went to the woods", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Continuity: like Emerson, Thoreau starts from a private decision. The repeated 'I' and the verb 'wished' mirror self-trust.", evidence: "I wished to live deliberately", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Development: Emerson's idea of nonconformity is turned into a concrete action, leaving society for the woods.", evidence: "I went to the woods", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Addition: nature is an active teacher that has knowledge to give, not just a backdrop for the self.", evidence: "what it had to teach", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The balanced negative clause creates urgency: self-reliance is justified by the fear of an unlived life, a more personal and mortal tone than Emerson's confident maxims.", evidence: "when I came to die, discover that I had not lived", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a judgment that Thoreau largely extends Emerson (self over custom) but adds a practical experiment and a reliance on nature as teacher.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(10, "c"),
            finalAnswer: "(a) He wanted to live consciously and face life's basic realities so that he would not die having never really lived: 'to live deliberately'. (b) Nature is a teacher with something 'to teach', a place of 'essential facts' contrasted with the life he left. (c) Thoreau keeps Emerson's starting point, a private decision made by 'I', and turns nonconformity into action: 'I went to the woods'. He adds nature as an active teacher and a mortal urgency in the closing clause, so he develops rather than repeats Emerson's idea of self-reliance.",
            commonErrors: ["In (a), quoting the whole sentence rather than selecting the relevant phrase.", "In (b), saying nature is 'beautiful' without evidence in the sentence.", "In (c), describing Emerson and Thoreau separately without comparing."],
          },
        },
      ],
    },
    {
      id: "ela11-u1-gothic-mood-symbol",
      title: "Dark Romanticism, the Gothic, and ambiguity",
      skill: "Analyze how setting, diction, and sentence structure create mood, and how symbolism and deliberate ambiguity leave meaning open.",
      lesson: {
        sections: [
          {
            heading: "Mood through setting and syntax",
            body: "**Dark Romantic** writers such as Poe and Hawthorne turn away from Romantic optimism and focus on guilt, obsession, and the limits of reason. In Gothic writing the setting often mirrors the narrator's mind, so landscape, weather, and architecture all carry emotion. To analyze **mood**, look at three things: word choice (adjectives and verbs with a heavy emotional charge), sound (repetition and alliteration), and syntax (a long, accumulating sentence can delay a reveal and build pressure). Explain the effect on the reader, not just the device.",
          },
          {
            heading: "Symbolism and ambiguity",
            body: "A **symbol** is an object or image that stands for a larger idea, such as a veil for secret sin, or a house for a family line. Dark Romantic writers often leave a symbol's meaning open. **Ambiguity** is a deliberate choice: the text supports more than one reading (a ghost, or a guilty conscience?) and refuses to settle between them. When you analyze ambiguity, state the competing readings, give the evidence for each, and explain what the author gains by leaving the question open, usually unease and a sense of the unknowable.",
          },
        ],
        keyFormulas: [
          { name: "Mood", statement: "The feeling a passage produces in the reader, built from setting, diction, sound, and syntax." },
          { name: "Symbol", statement: "An image that stands for an idea beyond itself; its meaning can be fixed or deliberately open." },
          { name: "Ambiguity", statement: "Two or more readings that the evidence supports, with the text declining to choose." },
        ],
        workedExample: {
          problem: "How does Poe's single opening sentence in 'The Fall of the House of Usher' create mood?",
          solution: "Poe stacks three adjectives, 'dull, dark, and soundless', so the day feels heavy and empty before anything happens. 'Oppressively low' clouds press down like a weight, and the narrator is 'alone' on a 'singularly dreary' stretch of country. The sentence is long and delays its destination until the final words, 'the melancholy House of Usher', which creates the sense of being drawn toward something. Calling the house 'melancholy' gives the building a human sadness, so the setting seems to share the mood of the story's people.",
        },
      },
      questions: [
        {
          id: "ela11-u1-gothic-mood-symbol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: USHER,
          stem: "What is the effect of describing the house as 'melancholy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives the building a human sadness, so the setting itself seems to carry emotion." },
              { id: "b", text: "It shows that the house has been newly built." },
              { id: "c", text: "It gives a literal description of the house's color." },
              { id: "d", text: "It states the narrator's cheerful mood on arriving." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Giving a human feeling to a non-human thing makes the setting seem alive." }],
            steps: [{ reasoning: "'Melancholy' is a human feeling applied to a building, so the house seems sad and sets the mood for the story.", evidence: "the melancholy House of Usher", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)**. 'Melancholy' is an emotion, not a color or an age, and applying it to a house personifies the setting.",
            commonErrors: ["Treating 'melancholy' as a literal description of appearance."],
          },
        },
        {
          id: "ela11-u1-gothic-mood-symbol-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: USHER,
          stem: "Identify three details of language in the sentence that help to create a mood of dread, and explain what each suggests.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Analyzing diction", statement: "Choose precise words, then explain the feeling each creates." }],
            steps: [
              { reasoning: "The list of adjectives makes the day feel heavy, lifeless, and silent, which suggests that something is wrong.", evidence: "dull, dark, and soundless", marks: 1, markCode: "AO2" },
              { reasoning: "'Oppressively low' clouds press down like a weight, giving a feeling of being trapped.", evidence: "the clouds hung oppressively low", marks: 1, markCode: "AO2" },
              { reasoning: "The narrator's isolation and the approaching night make the journey feel vulnerable and ominous.", evidence: "passing alone ... as the shades of the evening drew on", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Poe uses the list 'dull, dark, and soundless' to make the day heavy and empty. The clouds hang 'oppressively low', which suggests pressure and confinement. The narrator is 'alone' as 'the shades of the evening drew on', so he is isolated and darkness is approaching.",
            commonErrors: ["Naming a device without explaining the feeling.", "Quoting an entire clause rather than precise words."],
          },
        },
        {
          id: "ela11-u1-gothic-mood-symbol-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: USHER,
          stem: "Analyze how Poe uses the length and structure of this single sentence, as well as its word choice, to build mood and prepare for the appearance of the house.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Periodic structure", statement: "A long sentence that withholds its main point until the end builds suspense." },
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather and landscape reflect the feelings or fate of characters." },
            ],
            steps: [
              { reasoning: "The sentence unfolds through many clauses, so the destination is delayed until its final words, which builds anticipation.", evidence: "at length found myself ... within view of the melancholy House of Usher", marks: 2, markCode: "AO2" },
              { reasoning: "The triple adjective and the repeated 'd' sounds give a slow, heavy rhythm that matches the dragging day.", evidence: "dull, dark, and soundless day", marks: 2, markCode: "AO2" },
              { reasoning: "The weather and landscape mirror the narrator's gloom, as the bleak sky and country prepare us for a setting that is emotional as well as physical.", evidence: "singularly dreary tract of country", marks: 2, markCode: "AO2" },
              { reasoning: "The house arrives as the end of the journey and is personified as 'melancholy', so the setting seems to have its own sorrow, which foreshadows the story's decay.", evidence: "melancholy House of Usher", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8),
            finalAnswer: "Poe delays the house until the last words of a long sentence, so the reader travels with the narrator through the 'dull, dark, and soundless' day and the 'singularly dreary' country, building suspense. The heavy triple adjective and the low, pressing clouds make the weather mirror the narrator's gloom. When the house finally appears it is 'melancholy', a building with a human sadness, which prepares us for a story in which place and people are bound together.",
            commonErrors: ["Describing the sentence's content without analyzing its structure.", "Listing techniques without explaining how they build mood."],
          },
        },
        {
          id: "ela11-u1-gothic-mood-symbol-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: GANNET,
          stem: "Answer all parts of this question about the original passage.",
          parts: [
            { label: "a", prompt: "Identify two details in the first paragraph that make the setting seem uncanny, and briefly explain each.", marks: 3 },
            { label: "b", prompt: "The lantern could be read as a symbol. Explain one possible meaning and how the passage keeps its meaning uncertain.", marks: 5 },
            { label: "c", prompt: "Analyze how the writer uses the final paragraph to leave the nature of the figure ambiguous.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ambiguity", statement: "The text supports more than one reading, such as a supernatural event or a guilty mind, without choosing." },
              { kind: "technique", name: "Symbolism", statement: "A recurring image can stand for an idea such as guilt, memory, or hope." },
            ],
            steps: [
              { part: "a", reasoning: "The lantern burns on rocks covered by the tide, which is impossible and suggests the supernatural.", evidence: "the tide had covered the path since noon", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The lack of footprints removes any physical explanation, so the event seems unreal.", evidence: "no footprint but his own", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Either point is developed with an explanation of its uncanny effect, or the village's unspoken agreement is used to suggest hidden history.", evidence: "agreed on the reason without ever stating it", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Proposes a meaning, such as the lantern as a symbol of guilt or memory that will not go out.", evidence: "a lantern burning on the rocks", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Ambiguity: it vanishes by day and the keeper explains it away, so it could be a real lantern, a ghost, or his imagination.", evidence: "He told himself that a fisherman had lit it", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Explains that the open meaning makes the reader share the keeper's unease.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The keeper's fear of being 'sent home' makes him conceal the event, so the reader gets no confirmation from anyone else.", evidence: "A man who sees ghosts is a man who is sent home", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The phrase 'what he was running from' introduces a hidden past, which supports a reading that the figure is a projection of his guilt.", evidence: "has to explain what he was running from", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The earlier 'late for something' feeling supports a haunting reading, so both readings stay plausible.", evidence: "a cold, quick feeling that he was late for something", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Evaluates the effect: ending on his thought, not an explanation, leaves unease and the sense that the unknown cannot be settled.", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8, "c"),
            finalAnswer: "(a) The lantern burns on rocks covered by the tide, and there is 'no footprint but his own', so the scene has no physical explanation. (b) The lantern may symbolize guilt or memory that will not go out, but it vanishes by day and the keeper says a fisherman lit it, so its meaning stays uncertain. (c) The last paragraph gives only the keeper's private reasoning: he hides the event because 'a man who sees ghosts is a man who is sent home', and the phrase 'what he was running from' hints at a guilty past. A haunting and a guilt-driven vision both fit the evidence, and the passage ends without choosing, which leaves the reader unsettled.",
            commonErrors: ["Deciding that it is definitely a ghost and ignoring the rival reading.", "Describing events in the final paragraph without analyzing the effect.", "Naming 'ambiguity' without evidence for each reading."],
          },
        },
      ],
    },
  ],
};
