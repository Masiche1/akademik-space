import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const MACBETH: TextExtract = {
  title: "Macbeth considers the murder of Duncan",
  author: "William Shakespeare",
  source: "Macbeth, Act 1 Scene 7 (short excerpts)",
  text: "If it were done when 'tis done, then 'twere well\nIt were done quickly.\n\nI have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o'erleaps itself\nAnd falls on th' other.",
  lineNumbers: true,
};

const BALCONY: TextExtract = {
  title: "Romeo sees Juliet at her window",
  author: "William Shakespeare",
  source: "Romeo and Juliet, Act 2 Scene 2 (excerpt)",
  text: "But, soft! what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\nArise, fair sun, and kill the envious moon,\nWho is already sick and pale with grief,\nThat thou her maid art far more fair than she.",
  lineNumbers: true,
};

const MERCUTIO: TextExtract = {
  title: "Mercutio's wound",
  author: "William Shakespeare",
  source: "Romeo and Juliet, Act 3 Scene 1 (excerpt)",
  text: "No, 'tis not so deep as a well, nor so wide as a church-door; but 'tis enough, 'twill serve: ask for me to-morrow, and you shall find me a grave man.",
};

export const lesson11: Lesson = {
  id: "ela10-u1-lesson-1-1",
  code: "1-1",
  title: "Shakespearean Drama",
  goal: "I CAN read soliloquy and dialogue closely to explain a character's motive and conflict, and analyze how archaic and figurative language, blank verse, and puns shape meaning and tone.",
  standards: ["RL.9-10.1", "RL.9-10.3", "RL.9-10.4"],
  vocabulary: [
    {
      term: "Soliloquy",
      definition:
        "A speech in which a character, alone on stage, speaks private thoughts aloud to the audience.",
    },
    {
      term: "Motive",
      definition:
        "The reason a character acts: the desire, fear, or belief that drives a choice.",
    },
    {
      term: "Internal conflict",
      definition:
        "A struggle inside a character between competing desires, fears, or values.",
    },
    {
      term: "Blank verse",
      definition:
        "Unrhymed lines of iambic pentameter: ten syllables, five unstressed-stressed pairs.",
    },
    {
      term: "Pun",
      definition:
        "A play on words that exploits two meanings of one word, or two words that sound alike.",
    },
    {
      term: "Archaic language",
      definition:
        "Words or forms that were common in the past but are rare or gone today, such as thou, art, and yonder.",
    },
  ],
  concepts: [
    {
      id: "ela10-u1-shakespeare-motive-conflict",
      title: "Soliloquy, motive, and conflict",
      skill:
        "Use a character's own words in soliloquy and dialogue to explain motive and conflict, citing precise evidence.",
      lesson: {
        sections: [
          {
            heading: "What a soliloquy reveals",
            body: "In a **soliloquy** a character is alone and speaks honestly, so the audience hears thoughts no other character hears. Ask three questions: What does the character want? What holds the character back? What does the character admit that he or she would hide from others? The gap between wanting and hesitating is often the **internal conflict** that drives the play.",
          },
          {
            heading: "Reading for motive",
            body: "A **motive** is a reason for acting. Shakespeare often lets a character name a motive and, in the same breath, judge it. Notice conditionals ('If it were...'), admissions ('I have no...'), and images that show how the character sees his own plan. Quote short phrases, embed them in your sentence, and explain what each word choice shows about the character's mind. Paraphrase first if the language is unfamiliar, then analyze.",
          },
        ],
        keyFormulas: [
          {
            name: "Soliloquy",
            statement:
              "A private speech to the audience that exposes a character's true thoughts.",
          },
          {
            name: "Motive",
            statement: "The desire or fear that drives a character to act.",
          },
          {
            name: "Internal conflict",
            statement:
              "Competing desires or values inside one character, often shown by hesitation or contradiction.",
          },
        ],
        workedExample: {
          problem:
            "Using the excerpt from Macbeth, explain what Macbeth admits about his motive.",
          solution:
            "Macbeth admits that he has no good reason to kill Duncan. He says he has 'no spur / To prick the sides of my intent', picturing his plan as a horse that nothing is urging forward. The only thing driving him is 'Vaulting ambition', a phrase that makes his desire sound reckless and over-reaching. The soliloquy therefore shows that his motive is a selfish drive for power, and that he knows it. His awareness is the source of his conflict: he can see that ambition 'o'erleaps itself' and ends in a fall.",
        },
      },
      questions: [
        {
          id: "ela10-u1-shakespeare-motive-conflict-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MACBETH,
          stem: "What does the phrase 'Vaulting ambition' show about Macbeth's motive for killing Duncan?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "He is acting because he fears that Duncan will attack him.",
              },
              {
                id: "b",
                text: "He admits that his only driving force is a reckless desire for power.",
              },
              {
                id: "c",
                text: "He believes that Duncan is a cruel and unfit king.",
              },
              {
                id: "d",
                text: "He is obeying a command from Duncan's enemies.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying motive",
                statement:
                  "Find the character's own statement of why he acts, then paraphrase it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He says he has 'no spur' except ambition, so ambition is the only motive he can name.",
                evidence: "I have no spur ... but only / Vaulting ambition",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Macbeth names ambition as his only spur. Nothing in the excerpt mentions fear of an attack, a flaw in Duncan, or orders from others.",
            commonErrors: [
              "Importing ideas from other scenes that the excerpt does not support.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-motive-conflict-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MACBETH,
          stem: "Look at the first two lines. Explain what Macbeth's words suggest about his thinking. Use a quotation in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close reading of a conditional",
                statement:
                  "A conditional 'If...' shows a character testing a possibility rather than deciding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paraphrase: he says that if the deed were finished the moment it was committed, it would be best to do it fast.",
                evidence: "If it were done when 'tis done, then 'twere well",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The repeated 'done' shows he is circling the act and cannot name it, suggesting unease about murder.",
                evidence: "done",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The conditional 'If' shows doubt: he is wishing there were no consequences, which implies he fears there are.",
                evidence: "If it were done",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Macbeth wishes that the deed could be finished cleanly: 'If it were done when 'tis done, then 'twere well / It were done quickly.' He repeats 'done' without naming the murder, and the conditional 'If' shows doubt, suggesting he fears that the act will have consequences.",
            commonErrors: [
              "Paraphrasing without explaining what the wording reveals.",
              "Saying he is eager to kill, ignoring the hesitation in 'If'.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-motive-conflict-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MACBETH,
          stem: "In the last four lines, Macbeth compares his plan to riding a horse. Analyze how this image reveals his motive and his doubts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Extended image",
                statement:
                  "A sustained comparison lets a character reveal how he sees his own actions.",
              },
              {
                kind: "skill",
                name: "Embedding evidence",
                statement:
                  "Quote short phrases within your own sentence and comment on key words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 'spur' that pricks a horse's sides shows that he has nothing external pushing him, so any force must come from within.",
                evidence: "I have no spur / To prick the sides of my intent",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Vaulting' suggests an over-eager leap, so ambition is presented as reckless, a motive he judges even as he names it.",
                evidence: "Vaulting ambition",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The rider who 'o'erleaps' falls on the other side, foreshadowing that Macbeth's ambition may destroy him.",
                evidence: "which o'erleaps itself / And falls on th' other",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(6),
            finalAnswer:
              "Macbeth pictures his plan as a horse he has no 'spur' to urge on, which admits that no outside reason justifies the murder. Only 'Vaulting ambition' drives him, and 'vaulting' makes that drive sound reckless. The image ends with ambition that 'o'erleaps itself / And falls on th' other', so even while he is tempted he foresees a fall. The metaphor exposes both his motive and his doubt.",
            commonErrors: [
              "Naming the metaphor without explaining what it shows.",
              "Retelling the plot of the play instead of analyzing the image.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-motive-conflict-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: MACBETH,
          stem: "Answer all parts of this question about the excerpt from Macbeth.",
          parts: [
            {
              label: "a",
              prompt:
                "In your own words, state what Macbeth admits is his only motive. Support your answer with one quotation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the conditional wording of the first two lines shows Macbeth's conflict.",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "Evaluate how effectively Shakespeare uses soliloquy to reveal the conflict between Macbeth's ambition and his conscience. Use evidence from the whole excerpt.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Soliloquy",
                statement:
                  "A character alone on stage speaks private thoughts, so the audience hears the truth.",
              },
              {
                kind: "skill",
                name: "Evaluating effectiveness",
                statement:
                  "Judge how well a technique achieves its purpose, with evidence for the judgment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "States in own words that his only motive is a strong desire for power or advancement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Supports the point with an accurate, embedded quotation.",
                evidence: "Vaulting ambition",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Notes that he admits no other reason, shown by 'no spur'.",
                evidence: "I have no spur",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'If' introduces a wish rather than a decision, so he is still debating.",
                evidence: "If it were done",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "He wants the act to be 'done quickly', which suggests he wants to act before conscience can interfere.",
                evidence: "It were done quickly",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The repetition of 'done' avoids the word murder, showing unease.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Soliloquy lets the audience hear unspoken doubt, as no one is on stage to hear it.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The ambition side: he names ambition as the only force driving him.",
                evidence: "Vaulting ambition",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The conscience side: his hesitant conditionals show moral fear.",
                evidence: "If it were done when 'tis done",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The horse image allows him to judge ambition as self-defeating, a vivid warning from himself.",
                evidence: "o'erleaps itself / And falls on th' other",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Reaches a judgment: the form is effective because it exposes a conflict he would hide, though the excerpt does not show how the conflict ends.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels(10, "c"),
            finalAnswer:
              "(a) His only motive is a reckless hunger for power: 'Vaulting ambition'. (b) 'If' shows he is wishing, not deciding, and wanting it 'done quickly' suggests he hopes to act before conscience interferes. (c) The soliloquy is highly effective because Macbeth is alone and can be honest. He admits that ambition is his only spur, but his conditionals reveal moral fear, and the horse image has him judge himself: ambition 'o'erleaps itself / And falls on th' other'. The form lets the audience see a man arguing against his own plan, which makes his later choices more tragic.",
            commonErrors: [
              "In (a), quoting without paraphrasing.",
              "In (b), ignoring the word 'If'.",
              "In (c), describing what happens in the play instead of how the soliloquy works.",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u1-shakespeare-language-verse",
      title: "Archaic language, blank verse, and puns",
      skill:
        "Decode archaic and figurative language, recognize blank verse and puns, and explain how they shape meaning and tone.",
      lesson: {
        sections: [
          {
            heading: "Decoding Shakespeare's language",
            body: "Many words in Shakespeare are **archaic**: 'thou' and 'thee' mean you, 'art' means are, 'yonder' means over there, 'wherefore' means why, and 'soft' in 'But, soft!' means wait or hush. Paraphrase line by line before analyzing. Then look at figurative language: in 'Juliet is the sun', a **metaphor** states that one thing is another, so everything we know about the sun (light, warmth, life, centrality) transfers to Juliet.",
          },
          {
            heading: "Blank verse and puns",
            body: "**Blank verse** is unrhymed **iambic pentameter**: ten syllables, with the stress falling on every second syllable (da-DUM, da-DUM, da-DUM, da-DUM, da-DUM). Shakespeare's noble characters often speak it because it sounds close to natural speech while still feeling elevated. When a line breaks the pattern, ask why. A **pun** plays on two meanings of a word, and it can be comic, bitter, or both. Always explain both meanings and what the double meaning does to the tone of the moment.",
          },
        ],
        keyFormulas: [
          {
            name: "Iambic pentameter",
            statement:
              "Five iambs per line: an unstressed syllable followed by a stressed one, ten syllables in all.",
          },
          {
            name: "Metaphor",
            statement:
              "A direct comparison stating that one thing is another, transferring qualities from one to the other.",
          },
          {
            name: "Pun",
            statement:
              "A play on two meanings of a word, creating wit, irony, or dark humor.",
          },
        ],
        workedExample: {
          problem:
            "Explain the pun in Mercutio's words 'you shall find me a grave man' and its effect.",
          solution:
            "'Grave' has two meanings. It means serious, which would be a joke from a man who has been playful all scene, and it means a place of burial, because Mercutio knows that he is dying. The pun shows him joking even in pain, which keeps his witty character consistent and makes the moment more tragic. The audience laughs and then realizes the joke is about death, so the tone shifts from comedy to dark seriousness, marking a turning point in the play.",
        },
      },
      questions: [
        {
          id: "ela10-u1-shakespeare-language-verse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BALCONY,
          stem: "In the first line, Romeo says 'But, soft!' What does this phrase mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be careful, there is danger." },
              { id: "b", text: "I feel weak and tender." },
              { id: "c", text: "Speak gently to her." },
              {
                id: "d",
                text: "Wait, hush: something has caught my attention.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Archaic language",
                statement:
                  "'Soft' in this use is an interjection meaning wait or hush.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Romeo interrupts himself to draw attention to the light he suddenly sees, so 'soft' means hush or wait.",
                evidence: "But, soft! what light through yonder window breaks?",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)**. Romeo stops himself because something has caught his eye. The modern meaning of 'soft' does not fit the line.",
            commonErrors: [
              "Reading 'soft' with its modern meaning of gentle or weak.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-language-verse-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MERCUTIO,
          stem: "Mercutio is fatally wounded but still jokes. Explain the pun in 'you shall find me a grave man' and what it adds to the moment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pun",
                statement:
                  "A pun uses two meanings of one word; explain both and the effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies the first meaning: 'grave' as serious, in keeping with his joking character.",
                evidence: "a grave man",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Identifies the second meaning: a grave as a burial place, since he expects to die.",
                evidence: "ask for me to-morrow",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explains the effect: dark humor that shows his courage and shifts the tone toward tragedy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "'Grave' means both serious and a burial place. Mercutio jokes that he will be 'a grave man' tomorrow, meaning he will be dead. The pun shows his wit and courage even as he dies, and it turns the tone from playful to tragic.",
            commonErrors: [
              "Naming only one meaning of 'grave'.",
              "Saying it is a pun without explaining the effect.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-language-verse-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BALCONY,
          stem: "Analyze how Shakespeare uses figurative language in these lines to present Juliet. Refer to at least three words or phrases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Metaphor and personification",
                statement:
                  "Comparisons transfer qualities, and giving human traits to objects creates drama.",
              },
              {
                kind: "skill",
                name: "Analyzing word choice",
                statement:
                  "Explain what individual words suggest, not only what technique is used.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The metaphor makes Juliet the source of light and life, so Romeo sees her as the center of his world.",
                evidence: "Juliet is the sun",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The moon is personified as 'envious', 'sick and pale', so Juliet's beauty makes rival beauty seem weak and jealous.",
                evidence: "Who is already sick and pale with grief",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The imperative 'Arise' and the violent verb 'kill' show the intensity of his feeling and set Juliet in a position of power.",
                evidence: "Arise, fair sun, and kill the envious moon",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(6),
            finalAnswer:
              "Shakespeare's metaphor 'Juliet is the sun' makes her the source of light and life in Romeo's eyes. The moon is personified as 'envious' and 'sick and pale with grief', so Juliet's beauty makes everything else seem weak. The command 'Arise, fair sun, and kill the envious moon' uses a violent verb, which shows the intensity of Romeo's feeling.",
            commonErrors: [
              "Labelling 'metaphor' without saying what it suggests.",
              "Quoting long sections instead of precise words.",
            ],
          },
        },
        {
          id: "ela10-u1-shakespeare-language-verse-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: BALCONY,
          stem: "Answer all parts of this question about Romeo's speech.",
          parts: [
            {
              label: "a",
              prompt:
                "Give the meaning of 'yonder' and 'art', and say what kind of language they are.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The first line is 'But, soft! what light through yonder window breaks?' Explain how this line shows blank verse and what the form suggests about Romeo.",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "How does Shakespeare use language and verse form to create a tone of wonder and devotion in these lines?",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Blank verse",
                statement:
                  "Unrhymed iambic pentameter: ten syllables, five stresses, near natural speech yet elevated.",
              },
              {
                kind: "technique",
                name: "Tone through diction",
                statement:
                  "Word choice, imagery, and rhythm combine to create tone.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'Yonder' means over there.",
                evidence: "yonder window",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "'Art' means are.",
                evidence: "thou her maid art",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning:
                  "Both are archaic, words from older English no longer in everyday use.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The line has ten syllables with a stress on every second one: but SOFT what LIGHT through YONder WINdow BREAKS.",
                evidence: "But, soft! what light through yonder window breaks?",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "It does not rhyme with the next line, so it is blank verse.",
                evidence: "It is the east, and Juliet is the sun.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The form sounds like natural speech but elevated, suggesting a thoughtful, noble speaker who is moved.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The exclamation and question show spontaneous wonder as he discovers her.",
                evidence: "what light through yonder window breaks?",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The metaphor of the sun shows devotion: she is life itself.",
                evidence: "Juliet is the sun",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Personification of the moon as envious shows how her beauty surpasses nature.",
                evidence: "envious moon",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The steady rhythm of unrhymed lines lets feeling flow without a rhyme's artificial finish, keeping the speech sincere.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Archaic address ('thou', 'art') adds formality and reverence.",
                evidence: "thou her maid art",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(10, "c"),
            finalAnswer:
              "(a) 'Yonder' means over there and 'art' means are; both are archaic. (b) The line has ten syllables with five stresses (but SOFT what LIGHT through YONder WINdow BREAKS) and does not rhyme, so it is blank verse; it sounds natural but dignified, as Romeo is moved. (c) Wonder comes from the exclamation and question of the first line; devotion from the metaphor 'Juliet is the sun'; and her superiority from the 'envious moon'. Unrhymed verse keeps the speech sincere, and the formal 'thou' and 'art' add reverence.",
            commonErrors: [
              "In (a), giving modern meanings that do not fit.",
              "In (b), saying it is blank verse without evidence from the line.",
              "In (c), listing techniques without linking them to tone.",
            ],
          },
        },
      ],
    },
  ],
};
