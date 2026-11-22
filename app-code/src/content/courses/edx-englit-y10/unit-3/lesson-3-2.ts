import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";
import { DAGGER, SLEEPWALKING, WITCHES_OPENING } from "./extracts.ts";

export const lesson32: Lesson = {
  id: "et10-u3-lesson-3-2",
  code: "3-2",
  title: "The Supernatural, Guilt, Kingship and Context",
  goal: "I CAN analyse the role of the supernatural, guilt and kingship in Macbeth and link them to Jacobean beliefs.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Equivocation", definition: "Using ambiguous language to mislead while appearing to tell the truth, as the Witches do." },
    { term: "Divine right of kings", definition: "The belief that a monarch is appointed by God, so killing a king is a sin against God." },
    { term: "Regicide", definition: "The killing of a king." },
    { term: "Paradox", definition: "A statement that seems contradictory but contains a truth, such as 'fair is foul'." },
    { term: "Trochaic tetrameter", definition: "A rhythm of four stressed-unstressed pairs per line, which gives the Witches' speech a chant-like quality." },
    { term: "Pathetic fallacy", definition: "When weather or nature reflects human emotion or events." },
    { term: "Great Chain of Being", definition: "The Jacobean idea of a divinely ordered hierarchy from God to kings to humans to animals." },
  ],
  concepts: [
    {
      id: "et10-u3-supernatural",
      title: "The supernatural",
      skill: "Analyse how Shakespeare uses the Witches, visions and omens to shape the play's tone and ideas.",
      lesson: {
        sections: [
          {
            heading: "Witches: language and effect",
            body: "The play opens in thunder and lightning with the Witches, creating an atmosphere of disorder. Their short, rhyming lines in a chant-like rhythm make them sound unnatural. Their paradox “Fair is foul, and foul is fair” introduces the idea that appearances deceive and moral order is inverted, which is central to the play.",
          },
          {
            heading: "Fate or free will?",
            body: "The Witches tempt Macbeth with prophecies, but they never tell him to murder. Is Macbeth controlled by fate, or does he choose? The ambiguity allows several readings. For a Jacobean audience, many of whom believed in witchcraft, the Witches were real agents of evil.",
          },
          {
            heading: "Visions and omens",
            body: "The dagger, Banquo's ghost and the unnatural events after Duncan's death, such as darkness at noon, show nature reacting to the crime. These images signal that regicide has disrupted the natural order.",
          },
        ],
        keyFormulas: [
          { name: "Paradox", statement: "A contradictory phrase such as 'fair is foul' that sets up the play's theme of deception." },
          { name: "Equivocation", statement: "Prophecies that seem true but mislead, tempting Macbeth to his ruin." },
          { name: "Pathetic fallacy", statement: "Storms and darkness mirror disorder in the human world." },
        ],
        workedExample: {
          problem: "How does Shakespeare create a sense of the supernatural in the opening scene?",
          solution: "Shakespeare opens with the Witches meeting in “thunder, lightning, or in rain”, so that nature itself seems hostile and chaotic. Their short, rhyming lines create a spell-like chant, and the repeated question 'When shall we three meet again?' suggests a ritual that has been repeated before. The paradox “Fair is foul, and foul is fair” blurs good and evil and prepares the audience for a play in which appearances are untrustworthy. The mention of Macbeth at the close of the scene links him to their evil from the very start.",
        },
      },
      questions: [
        {
          id: "et10-u3-supernatural-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WITCHES_OPENING,
          stem: "What does the line “Fair is foul, and foul is fair” suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the weather will be fine tomorrow" },
              { id: "b", text: "That the Witches are fair and honest" },
              { id: "c", text: "That Macbeth is the fairest of men" },
              { id: "d", text: "That good and evil will become confused and appearances will deceive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Paradox", statement: "A seemingly contradictory phrase that reveals an inverted moral order." }],
            steps: [{ reasoning: "The line reverses values so that good seems evil and evil good.", evidence: "Fair is foul, and foul is fair", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** It signals a world of deception and moral inversion.",
            commonErrors: ["Reading 'fair' as weather (b)."],
          },
        },
        {
          id: "et10-u3-supernatural-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WITCHES_OPENING,
          stem: "Explain how Shakespeare uses setting and sound to create atmosphere in this scene.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pathetic fallacy and rhythm", statement: "Weather and chant-like rhythm create an unnatural atmosphere." }],
            steps: [
              { reasoning: "The storm setting suggests disorder and danger.", evidence: "thunder, lightning, or in rain", marks: 1, markCode: "AO2" },
              { reasoning: "The short rhyming lines sound like a chant or spell.", evidence: "When the hurlyburly's done", marks: 1, markCode: "AO2" },
              { reasoning: "The fog and “filthy air” suggest murky confusion and corruption.", evidence: "Hover through the fog and filthy air", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The storm, chant-like rhyme and foggy, filthy air create an eerie atmosphere of disorder and evil.",
            commonErrors: ["Describing the Witches without discussing the language."],
          },
        },
        {
          id: "et10-u3-supernatural-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DAGGER,
          stem: "How does Shakespeare use the supernatural vision of the dagger to present Macbeth's state of mind?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hallucination", statement: "A vision that shows psychological pressure." },
              { kind: "context", name: "Jacobean belief in the supernatural", statement: "Audiences might read the vision as a demonic temptation or as guilt." },
            ],
            steps: [
              { reasoning: "The questions show Macbeth doubting his own perceptions.", evidence: "Is this a dagger which I see before me", marks: 2, markCode: "AO2" },
              { reasoning: "“Handle toward my hand” suggests the dagger invites him to kill, so the vision seems like a temptation.", evidence: "The handle toward my hand", marks: 2, markCode: "AO2" },
              { reasoning: "He admits it may be a “false creation” of a “heat-oppressed brain”, suggesting guilt and psychological strain.", evidence: "heat-oppressed brain", marks: 2, markCode: "AO1" },
              { reasoning: "Jacobean audiences could read the vision as supernatural or as a sign of a corrupted mind, adding ambiguity.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "The vision shows a man doubting his senses and drawn towards murder, while his own admission that it may come from his “heat-oppressed brain” hints at guilt; a Jacobean audience might also see it as demonic.",
            commonErrors: ["Treating the dagger as real.", "Ignoring the possibility of two readings."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u3-supernatural-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: WITCHES_OPENING,
          stem: "Read the opening scene of Macbeth and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two details about where and when the Witches will meet Macbeth.", marks: 2 },
            { label: "b", prompt: "Explain how Shakespeare presents the Witches in this scene.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language and structure in this scene to introduce key ideas in the play?", marks: 6 },
            { label: "d", prompt: "'The Witches are to blame for Macbeth's downfall.' How far do you agree? Write about the extract and the whole play, and refer to Jacobean context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Witchcraft and James I", statement: "James I wrote about witchcraft and the audience feared it." },
              { kind: "technique", name: "Paradox and rhythm", statement: "Chant-like rhyme and paradox set up themes of deception." },
              { kind: "skill", name: "Extract to whole play", statement: "Link the opening to later moments." },
            ],
            steps: [
              { part: "a", reasoning: "They will meet upon the heath.", evidence: "Upon the heath", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "They will meet before sunset.", evidence: "ere the set of sun", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "They are mysterious and supernatural, appearing in a storm.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Their chant-like speech and paradox present them as unnatural agents of deception.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Short rhyming lines and a chant-like rhythm create an unnatural tone.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The paradox and the mention of Macbeth introduce deception and link him to evil from the start.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: the prophecies plant ambition and the Witches manipulate him with half-truths.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of language: equivocation and paradox make the Witches tempting but ambiguous.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: Macbeth chooses to kill and the Witches never command him; Lady Macbeth also pressures him.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: Jacobean belief in witchcraft and in free will under God would make the audience hold Macbeth accountable.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) The heath; before sunset. (b) Mysterious, unnatural and deceptive. (c) Chant-like rhyme, paradox and the reference to Macbeth set up key ideas. (d) A top answer says the Witches tempt but Macbeth chooses, using Jacobean views on witchcraft and responsibility.",
            commonErrors: ["Saying the Witches 'made' him do it.", "Ignoring free will.", "No language analysis."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u3-guilt-kingship",
      title: "Guilt, kingship and Jacobean context",
      skill: "Analyse how Shakespeare presents guilt and kingship and link them to Jacobean ideas about order and the divine right of kings.",
      lesson: {
        sections: [
          {
            heading: "Guilt",
            body: "Guilt appears through blood imagery, sleeplessness and visions. After the murder Macbeth fears that all the water in the ocean could not wash his hands clean, and Lady Macbeth's sleepwalking shows the guilt she tried to dismiss. Shakespeare uses these images to suggest that conscience cannot be escaped.",
          },
          {
            heading: "Kingship",
            body: "Duncan is presented as a good and trusting king, while Macbeth becomes a tyrant who rules by fear. The difference helps the audience judge what makes a legitimate ruler: virtue, justice and care for the country. Malcolm, who offers a restored order, contrasts with Macbeth.",
          },
          {
            heading: "Jacobean context",
            body: "James I believed in the divine right of kings and had survived the Gunpowder Plot in 1605. Regicide was therefore a terrible sin that disrupted God's order, and Shakespeare shows that nature itself reacts. Use context only when it explains a specific scene or idea.",
          },
        ],
        keyFormulas: [
          { name: "Divine right", statement: "The monarch is chosen by God, so killing the king is a crime against heaven." },
          { name: "Blood imagery", statement: "Recurring blood symbolises guilt that cannot be washed away." },
          { name: "Natural order", statement: "Disorder in nature mirrors disorder in the state after regicide." },
        ],
        workedExample: {
          problem: "How does Shakespeare present guilt in Lady Macbeth's sleepwalking scene?",
          solution: "Shakespeare uses fragmented prose and repeated commands to show a mind that has lost control. “Out, damned spot! out, I say!” reverses the imperatives she used earlier to command others, and now she cannot command her own conscience. The imagery of blood that will not wash away, and the claim that “all the perfumes of Arabia will not sweeten this little hand”, show guilt as a physical stain. The scene is a reversal of her earlier belief that a little water would clear them of the deed, and for a Jacobean audience it demonstrates divine justice.",
        },
      },
      questions: [
        {
          id: "et10-u3-guilt-kingship-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SLEEPWALKING,
          stem: "What does the imagery of blood in this extract mainly symbolise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cooking accident" },
              { id: "b", text: "A wound from battle" },
              { id: "c", text: "Guilt that cannot be washed away" },
              { id: "d", text: "Lady Macbeth's love for Duncan" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolism", statement: "A recurring image represents an idea beyond itself." }],
            steps: [{ reasoning: "Blood that will not go away represents lasting guilt.", evidence: "Out, damned spot!", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** The blood is a symbol of guilt.",
            commonErrors: ["Reading the blood literally."],
          },
        },
        {
          id: "et10-u3-guilt-kingship-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a Jacobean audience would be shocked by the murder of King Duncan.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Divine right of kings", statement: "The king was God's representative on earth." }],
            steps: [
              { reasoning: "They believed in the divine right of kings, so killing a king was a sin against God.", marks: 1, markCode: "AO4" },
              { reasoning: "Duncan is presented as a good, trusted king, which makes the crime worse.", marks: 1, markCode: "AO1" },
              { reasoning: "Macbeth is Duncan's host and subject, so the murder also breaks the bonds of loyalty and hospitality.", marks: 1, markCode: "AO1" },
              { reasoning: "The recent Gunpowder Plot against James I would make regicide especially threatening.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "They believed the king was appointed by God, so killing a good, trusting king who was also Macbeth's guest was a terrible sin; the Gunpowder Plot made the fear fresh.",
            commonErrors: ["Context given without a link to the play."],
          },
        },
        {
          id: "et10-u3-guilt-kingship-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "How does Shakespeare present Macbeth as a tyrant in the later part of the play? Use very short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Tyranny and divine order", statement: "A king who rules by fear breaks the natural and divine order." },
              { kind: "technique", name: "Imagery of disease and darkness", statement: "Imagery presents Scotland as sick under Macbeth." },
            ],
            steps: [
              { reasoning: "Macbeth orders the murder of Banquo and of Macduff's family, showing he rules by violence and fear.", marks: 2, markCode: "AO1" },
              { reasoning: "He acts without consulting Lady Macbeth, showing his growing independence and ruthlessness.", marks: 2, markCode: "AO1" },
              { reasoning: "Scotland is described as suffering, with images of sickness and darkness that reflect his misrule.", marks: 2, markCode: "AO2" },
              { reasoning: "His reflection that life is a “walking shadow” shows a king emptied of feeling.", evidence: "walking shadow", marks: 2, markCode: "AO2" },
              { reasoning: "Context: a Jacobean audience would see a tyrant as unnatural, and his overthrow by Malcolm as restoration of divine order.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Macbeth rules through murder and fear, Scotland suffers under him, and his emptiness is captured in the “walking shadow” image; his overthrow restores the order a Jacobean audience valued.",
            commonErrors: ["Retelling events without analysing methods.", "Skipping context."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u3-guilt-kingship-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: SLEEPWALKING,
          stem: "Read the extract from Act 5 Scene 1 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two details that show Lady Macbeth's guilt.", marks: 2 },
            { label: "b", prompt: "Explain what the extract suggests about how Lady Macbeth has changed.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language in the extract to present guilt?", marks: 6 },
            { label: "d", prompt: "'Macbeth is a play about the punishment of evil.' How far do you agree? Write about the extract and the whole play, and refer to Jacobean context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Divine justice", statement: "A Jacobean audience expected evil actions to be punished." },
              { kind: "technique", name: "Imagery of blood", statement: "Blood as a symbol of ineradicable guilt." },
              { kind: "skill", name: "Extract to whole play", statement: "Link the extract to the arcs of both protagonists." },
            ],
            steps: [
              { part: "a", reasoning: "She tries to wash away an imaginary stain.", evidence: "Out, damned spot!", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She remembers the old man's blood and its smell.", evidence: "the smell of the blood still", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She was once confident and commanding but is now broken and haunted.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Her earlier belief that water would clear the deed is reversed.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Commands and exclamations show her trying to control her conscience.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Hyperbole and sensory imagery of smell and blood show guilt as inescapable.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: Lady Macbeth's breakdown and death, and Macbeth's defeat by Macduff, show evil punished.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of language: blood imagery, the sleepwalking prose and Macbeth's bleak final soliloquy.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: the play also explores the appeal of ambition, tragedy and sympathy for Macbeth, so it is not only about punishment.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: Jacobean belief in divine justice and the restoration of order under Malcolm.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) The imaginary stain; the smell of blood. (b) She has moved from commanding to broken. (c) Commands, hyperbole and sensory imagery show inescapable guilt. (d) A top answer sees punishment as central but also tragic complexity, with Jacobean context.",
            commonErrors: ["Ignoring the whole play.", "One-sided judgement.", "Context as an add-on."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
