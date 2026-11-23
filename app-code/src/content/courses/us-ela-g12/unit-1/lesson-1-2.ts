import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const FAULKNER: TextExtract = {
  title: "A Rose for Emily",
  author: "William Faulkner",
  source: "A Rose for Emily (1930)",
  text: "When Miss Emily Grierson died, our whole town went to her funeral: the men through a sort of respectful affection for a fallen monument, the women mostly out of curiosity to see the inside of her house, which no one save an old man-servant — a combined gardener and cook — had seen in at least ten years.",
};

const BROOKS: TextExtract = {
  title: "We Real Cool",
  author: "Gwendolyn Brooks",
  source: "Selected Poems (1963)",
  text: "The Pool Players.\nSeven at the Golden Shovel.\nWe real cool. We\nLeft school. We\nLurk late. We\nStrike straight. We\nSing sin. We\nThin gin. We\nJazz June. We\nDie soon.",
};

const BEATTIE: TextExtract = {
  title: "A New Kind of Love",
  author: "Ann Beattie",
  source: "Where You'll Find Me (1983)",
  text: "She had been thinking about getting married. Not to Bob, exactly, but to the idea of marriage, which she imagined as a kind of elegant, sunlit room. When she looked at Bob, she saw a man who would keep his car in the driveway and his emotions in a locked drawer, and she thought: maybe that's all marriage is.",
};

export const lesson122: Lesson = {
  id: "ela12-u1-lesson-1-2",
  code: "1-2",
  title: "Southern Gothic and Postmodern Irony",
  goal: "I CAN analyze how Southern Gothic writers use decay and grotesquerie, and how postmodern writers use irony and metafiction.",
  standards: ["RL.11-12.2", "RL.11-12.3", "RL.11-12.5", "RL.11-12.9"],
  vocabulary: [
    { term: "Southern Gothic", definition: "American Gothic tradition set in the South, using decay, grotesque characters, and repressed history." },
    { term: "Grotesque", definition: "Characters or images that are disturbingly distorted, combining comedy and horror." },
    { term: "Decay", definition: "Physical and moral deterioration; houses and bodies as symbols of a failing social order." },
    { term: "Postmodernism", definition: "Late 20th-century movement skeptical of grand narratives, mixing genres, and calling attention to its own artifice." },
    { term: "Irony", definition: "A gap between what is said and what is meant, or between appearance and reality." },
    { term: "Metafiction", definition: "Fiction that draws attention to its own constructedness as a made-up story." },
    { term: "Free indirect discourse", definition: "Narration blending third-person description with a character's inner voice." },
  ],
  concepts: [
    {
      id: "ela12-u1-southern-gothic",
      title: "Southern Gothic and the grotesque",
      skill: "Analyze how Faulkner uses setting, character, and structure to expose a decaying social order.",
      lesson: {
        sections: [
          {
            heading: "Faulkner's Jefferson",
            body: "Southern Gothic writers locate horror not in castles but in parlors and front porches. In 'A Rose for Emily,' the house is a monument to a dead aristocracy; Miss Emily is both its keeper and its decay. Faulkner withholds the story's shocking secret until the end, so the reader re-reads everything with new eyes.",
          },
          {
            heading: "Structure as concealment",
            body: "The story is told in five non-chronological sections — the funeral, then flashbacks — mimicking how a community remembers and misremembers. The 'we' narrator speaks for the town's collective gaze, which both observes and judges Miss Emily.",
          },
          {
            heading: "Grotesque as social critique",
            body: "The grotesque — Emily's corpse-like pallor, Homer Barron's disappearance — makes visible what the genteel South represses: slavery's legacy, class decay, racial violence. Horror is the price of denial.",
          },
        ],
        keyFormulas: [
          { name: "Grotesque", statement: "Distorted figures expose what a society refuses to admit." },
          { name: "Nonlinear structure", statement: "Out-of-order narration mirrors a community's fractured memory." },
        ],
        workedExample: {
          problem: "Why does Faulkner begin 'A Rose for Emily' at her funeral rather than chronologically?",
          solution: "Starting at the funeral makes the reader ask why the whole town attends a reclusive woman's death, and frames every later detail as evidence gathered after the fact — the story is an investigation, not a biography.",
        },
      },
      questions: [
        {
          id: "ela12-u1-southern-gothic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FAULKNER,
          stem: "What does the opening suggest about Miss Emily's relationship to the town?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She was widely loved and deeply integrated." },
              { id: "b", text: "She was feared as a threat to the community." },
              { id: "c", text: "The town treats her as a fallen monument — half respect, half curiosity." },
              { id: "d", text: "She was shunned entirely and forgotten." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Town's gaze", statement: "Southern Gothic towns are both judges and complicit observers." }],
            steps: [{ reasoning: "'Respectful affection for a fallen monument' fuses reverence and condescension; the women's curiosity shows she remains an object of spectacle.", evidence: "respectful affection for a fallen monument", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** The town treats her as a fallen monument.",
            commonErrors: ["Reading 'affection' as uncomplicated warmth, ignoring 'fallen monument.'"],
          },
        },
        {
          id: "ela12-u1-southern-gothic-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: FAULKNER,
          stem: "Analyze how Faulkner's 'we' narrator shapes the reader's understanding of Miss Emily and the town.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Collective narration", statement: "A 'we' narrator voices a community's shared judgment, gossip, and complicity." },
              { kind: "skill", name: "Narrator reliability", statement: "Question what the collective voice knows, omits, and assumes." },
            ],
            steps: [
              { reasoning: "'We' merges individual townspeople into a single observing consciousness, so Miss Emily is always seen through communal eyes.", evidence: "our whole town went to her funeral", marks: 1, markCode: "AO2" },
              { reasoning: "The voice is gossipy yet reverent ('respectful affection'), showing the town both worships and consumes her.", marks: 1, markCode: "AO3" },
              { reasoning: "The narrator's limited access (no one has seen inside the house in ten years) makes the story an act of communal speculation, not fact.", marks: 1, markCode: "AO3" },
              { reasoning: "This implicates the reader in the town's judgment — we accept the 'we' voice until the ending reveals its limits.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The 'we' narrator makes Miss Emily a communal creation — half monument, half mystery — and implicates readers in the town's judgment.",
            commonErrors: ["Treating 'we' as a single character rather than a collective voice."],
          },
        },
        {
          id: "ela12-u1-southern-gothic-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FAULKNER,
          stem: "Explain how the house functions as a symbol in Southern Gothic writing, and analyze what 'a fallen monument' reveals about the South's social order.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "technique", name: "Setting as symbol", statement: "The decaying house embodies the decaying aristocracy it once housed." },
              { kind: "skill", name: "Social critique", statement: "Connect a symbolic image to a specific historical or social failure." },
            ],
            steps: [
              { reasoning: "The house is 'a fallen monument': it preserves a vanished elite way of life in physical form.", evidence: "a fallen monument", marks: 1, markCode: "AO2" },
              { reasoning: "Its sealed interior — unseen for ten years — mirrors the South's refusal to look at its own history (slavery, defeat, repression).", marks: 1, markCode: "AO3" },
              { reasoning: "Emily's refusal to pay taxes or acknowledge her father's death shows the aristocracy clinging to a dead order.", marks: 1, markCode: "AO4" },
              { reasoning: "The grotesque secret inside the house literalizes what the genteel surface conceals — the violence beneath Southern decorum.", marks: 1, markCode: "AO2" },
              { reasoning: "The town's complicity (enabling her, gossiping about her) shows decay is communal, not individual.", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes that the Gothic horror is social: the true monster is the unreconciled past the house represents.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The house symbolizes a dying aristocracy; its sealed rooms hold the violence the South refuses to face, making horror a form of social diagnosis.",
            commonErrors: ["Treating the house as merely spooky scenery instead of a social symbol."],
          },
        },
      ],
    },
    {
      id: "ela12-u1-postmodern",
      title: "Postmodern irony and metafiction",
      skill: "Analyze how postmodern writers use irony, metafiction, and unstable narration to question truth and form.",
      lesson: {
        sections: [
          {
            heading: "Postmodern skepticism",
            body: "Postmodern writers doubt that any single story tells the truth. They mix high and low culture, parody genres, and remind readers that fiction is constructed. Ann Beattie's 'A New Kind of Love' shows a woman treating marriage like an 'elegant, sunlit room' — an image so deliberately artificial it signals irony about her own fantasy.",
          },
          {
            heading: "Irony as method",
            body: "Irony — the gap between appearance and reality, or between what is said and meant — is postmodernism's native mode. It lets writers criticize without lecturing: the narrator's fantasy of marriage is gently mocked by the flat, realistic detail ('keep his car in the driveway').",
          },
          {
            heading: "Free indirect discourse",
            body: "Postmodern narration often blurs the line between narrator and character: 'maybe that's all marriage is' is the character's thought in the narrator's voice. This technique creates intimacy while keeping judgment at arm's length.",
          },
        ],
        keyFormulas: [
          { name: "Irony", statement: "The gap between surface and meaning; postmodernism's default mode." },
          { name: "Metafiction", statement: "Fiction that exposes its own construction as a made-up story." },
        ],
        workedExample: {
          problem: "What is ironic about calling marriage 'a kind of elegant, sunlit room'?",
          solution: "The image is lovely but static and airless — a room, not a life. The irony is that her romantic fantasy is already framed in terms of confinement, foreshadowing her skepticism about Bob.",
        },
      },
      questions: [
        {
          id: "ela12-u1-postmodern-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BEATTIE,
          stem: "What does the narrator's image of marriage as 'a kind of elegant, sunlit room' suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She genuinely expects a perfect marriage." },
              { id: "b", text: "Her fantasy of marriage is already tinged with irony and confinement." },
              { id: "c", text: "She dislikes sunny rooms." },
              { id: "d", text: "Marriage is impossible for her." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Postmodern irony", statement: "Beattie's polished images are undercut by flat, skeptical observation." }],
            steps: [{ reasoning: "The 'elegant, sunlit room' is beautiful but static and enclosed; paired with her view of Bob as emotionally locked away, the image reveals her ambivalence, not enthusiasm.", evidence: "elegant, sunlit room", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Her fantasy is already tinged with irony.",
            commonErrors: ["Reading the image literally as romantic hope."],
          },
        },
        {
          id: "ela12-u1-postmodern-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: BEATTIE,
          stem: "Analyze how Beattie blends the character's thoughts with the narrator's voice (free indirect discourse) in this passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Free indirect discourse", statement: "Third-person grammar carrying a character's idiom and judgment." },
              { kind: "skill", name: "Voice blending", statement: "Identify where narrator and character thoughts merge and what that achieves." },
            ],
            steps: [
              { reasoning: "'She had been thinking about getting married' is neutral narration; 'Not to Bob, exactly, but to the idea of marriage' shifts into her mental qualifications.", evidence: "Not to Bob, exactly", marks: 1, markCode: "AO2" },
              { reasoning: "'maybe that's all marriage is' is her voice inside the narrator's — lowercase 'maybe' and the shrugging logic are hers.", evidence: "maybe that's all marriage is", marks: 1, markCode: "AO2" },
              { reasoning: "The blending gives access to her private skepticism while keeping the narrator's cooler irony, creating double vision.", marks: 1, markCode: "AO3" },
              { reasoning: "The reader can't fully separate narrator judgment from character thought — a postmodern uncertainty about who knows what.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Free indirect discourse lets the narrator voice the character's doubts, producing intimacy and irony simultaneously.",
            commonErrors: ["Treating every sentence as pure narration or pure thought."],
          },
        },
        {
          id: "ela12-u1-postmodern-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BEATTIE,
          stem: "Explain how postmodern irony differs from simple satire, and analyze how Beattie uses domestic detail to undermine romantic fantasy.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Irony vs satire", statement: "Satire mocks a target to correct it; irony merely exposes a gap without a clear moral program." },
              { kind: "technique", name: "Domestic detail", statement: "Plain, concrete images undercut abstract fantasy." },
            ],
            steps: [
              { reasoning: "Defines irony as a gap between surface and meaning; satire adds a deliberate attack with a corrective aim.", marks: 1, markCode: "AO3" },
              { reasoning: "Beattie's irony is ambivalent — she mocks the 'elegant room' fantasy but doesn't offer a better vision of marriage.", marks: 1, markCode: "AO3" },
              { reasoning: "'Keep his car in the driveway and his emotions in a locked drawer' uses parallel domestic imagery to reduce marriage to storage and routine.", evidence: "keep his car in the driveway and his emotions in a locked drawer", marks: 1, markCode: "AO2" },
              { reasoning: "The flat, inventory-like listing ('car,' 'drawer') drains romance of its glow — style enacts the disillusion.", marks: 1, markCode: "AO2" },
              { reasoning: "There is no moralizing conclusion; the passage ends on 'maybe,' preserving uncertainty — the postmodern refusal of resolution.", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes that the technique undermines fantasy through understatement rather than attack, distinguishing it from satire's direct mockery.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Irony exposes a gap without prescribing a fix; Beattie's domestic parallelisms drain marriage of romance while refusing to offer an alternative.",
            commonErrors: ["Calling any mocking tone 'satire' without noting the absence of a corrective target."],
          },
        },
      ],
    },
  ],
};
