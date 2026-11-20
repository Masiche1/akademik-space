import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "va-u5-lesson-5-3",
  code: "5-3",
  title: "Audience Engagement and Feedback",
  goal: "I CAN engage audiences effectively and use feedback to improve exhibition and artistic practice.",
  standards: [
    "Audience Engagement",
    "Feedback",
  ],
  vocabulary: [
    { term: "Audience engagement", definition: "Techniques that invite viewers to interact with, respond to or participate in art." },
    { term: "Feedback", definition: "Responses from viewers or peers that inform improvement of work or exhibition." },
    { term: "Interpretive text", definition: "Written material that helps viewers understand an artwork's context and meaning." },
    { term: "Interactive element", definition: "A component of an exhibition that invites viewer participation or response." },
    { term: "Critique", definition: "A structured process of presenting work and receiving feedback from peers or teachers." },
    { term: "Visitor response", definition: "The range of reactions — emotional, intellectual, physical — viewers have to art." },
  ],
  concepts: [
    {
      id: "va-u5-audience-engagement",
      title: "Engaging viewers",
      skill: "Design exhibitions that invite meaningful viewer engagement through interpretive support and interactive elements.",
      lesson: {
        sections: [
          {
            heading: "Beyond passive viewing",
            body: "Not all viewers have the background to 'read' art. Engagement strategies bridge the gap: labels that explain context, introductory texts that frame the exhibition, and interactive elements that invite response. The goal is not to simplify art but to open doors into it.",
          },
          {
            heading: "Interpretive support",
            body: "Good interpretive text answers: what am I looking at? Why does it matter? What should I notice? Avoid jargon; write accessibly. An artist statement or curator's text can frame the exhibition's argument. QR codes or audio guides can extend engagement beyond the physical space.",
          },
          {
            heading: "Interactive elements",
            body: "Interaction can be simple — comment cards, voting, guided questions — or complex — responsive installations, participatory works. The best interactive elements deepen engagement rather than distract; they should relate to the exhibition's themes, not be gimmicks.",
          },
        ],
        keyFormulas: [
          { name: "Engagement strategies", statement: "Interpretive text + interactive elements + framing = viewer engagement" },
          { name: "Good interpretive text", statement: "What, why, what to notice — accessible, not jargon" },
        ],
        workedExample: {
          problem: "A student exhibits abstract paintings and notices viewers spend 5 seconds before leaving. How could they increase engagement?",
          solution: "Add an introductory text explaining the exhibition's theme and the artist's approach; place a few guiding questions near works ('What do the colours make you feel?'); add a comment card inviting responses; consider a small interactive element like a colour-mixing station that relates to the palette used.",
        },
      },
      questions: [
        {
          id: "va-u5-audience-engagement-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Interpretive text in an exhibition primarily serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the artworks" },
              { id: "b", text: "Help viewers understand context and meaning" },
              { id: "c", text: "Fill empty wall space" },
              { id: "d", text: "Advertise the artist's other work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interpretive text", statement: "Written material that helps viewers understand context and meaning." },
            ],
            steps: [
              { reasoning: "Interpretive text provides context and guidance for viewers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Help viewers understand context and meaning",
            commonErrors: [
              "Thinking interpretive text replaces or competes with the artwork.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two strategies for increasing viewer engagement with an exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Engagement strategies", statement: "Interpretive text, interactive elements and framing invite participation." },
            ],
            steps: [
              { reasoning: "Interpretive text — labels, artist statement, introductory panel — frames what viewers see.", marks: 1, markCode: "M" },
              { reasoning: "Interactive elements — comment cards, guided questions, participatory works — invite response.", marks: 1, markCode: "M" },
              { reasoning: "Framing questions or prompts near works direct attention to specific features.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpretive text, interactive elements and guiding questions increase engagement.",
            commonErrors: [
              "Adding gimmicks unrelated to the exhibition's themes.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between engagement and entertainment in an exhibition context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Engagement vs entertainment", statement: "Engagement deepens understanding; entertainment merely diverts." },
            ],
            steps: [
              { reasoning: "Engagement invites viewers to think, feel and respond to the work's meaning.", marks: 1, markCode: "M" },
              { reasoning: "Entertainment provides momentary amusement without deepening understanding.", marks: 1, markCode: "M" },
              { reasoning: "Interactive elements can serve either — a puzzle about the theme engages; a unrelated game entertains.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: engagement should deepen, not distract from, the artistic experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Engagement deepens understanding; entertainment merely diverts — interactives should serve the former.",
            commonErrors: [
              "Confusing viewer activity with meaningful engagement.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described approach to audience engagement.",
          parts: [
            { label: "a", prompt: "Identify two engagement strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating engagement", statement: "Assess whether strategies deepen understanding or merely distract." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. interpretive text present, interactive element relates to theme, guiding questions used.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. text too technical, interactive element unrelated to theme, no feedback mechanism — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with engagement effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests simplifying text, aligning interactives with theme, adding feedback collection.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate engagement by whether strategies deepen understanding and relate to the exhibition.",
            commonErrors: [
              "Judging engagement by activity level rather than depth of response.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Audience engagement in an exhibition refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keeping visitors in the building as long as possible" },
              { id: "b", text: "Techniques that invite viewers to interact with, respond to or participate in art" },
              { id: "c", text: "Selling catalogue copies at the exit" },
              { id: "d", text: "Making the space louder and brighter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience engagement", statement: "Strategies that invite viewer interaction, response or participation." },
            ],
            steps: [
              { reasoning: "Engagement means inviting meaningful viewer response, not just occupancy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Techniques that invite viewers to interact with, respond to or participate in art",
            commonErrors: [
              "Confusing engagement with entertainment or crowd control.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Good interpretive text in an exhibition should answer which three questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How much does it cost, where was it made, who bought it" },
              { id: "b", text: "What am I looking at, why does it matter, what should I notice" },
              { id: "c", text: "When was it made, how big is it, what is it called" },
              { id: "d", text: "Is it good, is it famous, is it expensive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interpretive text", statement: "What, why and what to notice guide the viewer into the work." },
            ],
            steps: [
              { reasoning: "Interpretive text frames what the work is, its significance and points of attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What am I looking at, why does it matter, what should I notice",
            commonErrors: [
              "Confusing interpretive text with basic catalogue data.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The language of good interpretive text should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technical and full of art-historical jargon" },
              { id: "b", text: "Accessible to viewers without specialist background" },
              { id: "c", text: "Written only for other artists" },
              { id: "d", text: "As long as possible to show expertise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Accessible writing", statement: "Interpretive text opens doors; jargon closes them." },
            ],
            steps: [
              { reasoning: "Accessible language lets non-specialist viewers engage with the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accessible to viewers without specialist background",
            commonErrors: [
              "Writing interpretive text for peers rather than the general public.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An effective interactive element in an exhibition should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be as complicated as possible to impress" },
              { id: "b", text: "Relate to the exhibition's themes and deepen engagement" },
              { id: "c", text: "Distract viewers from the artworks" },
              { id: "d", text: "Replace the need for labels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic interaction", statement: "Interactives deepen engagement only when tied to the exhibition's ideas." },
            ],
            steps: [
              { reasoning: "The best interactive elements extend the theme rather than compete with it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Relate to the exhibition's themes and deepen engagement",
            commonErrors: [
              "Adding unrelated games or gimmicks to an exhibition.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "QR codes or audio guides in an exhibition primarily function to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace physical labels entirely" },
              { id: "b", text: "Extend engagement beyond the physical space with deeper information" },
              { id: "c", text: "Increase ticket sales" },
              { id: "d", text: "Secure the artworks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended engagement", statement: "Digital layers let viewers access more depth than wall text allows." },
            ],
            steps: [
              { reasoning: "Audio/QR layers offer optional deeper content beyond what fits on walls.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Extend engagement beyond the physical space with deeper information",
            commonErrors: [
              "Assuming digital tools replace physical interpretive support.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A comment card station in an exhibition is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complex responsive installation" },
              { id: "b", text: "A simple interactive element that invites viewer response" },
              { id: "c", text: "Interpretive text" },
              { id: "d", text: "A lighting technique" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interactive element", statement: "Any component inviting viewer participation or response." },
            ],
            steps: [
              { reasoning: "Comment cards invite written response — a simple but effective interactive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A simple interactive element that invites viewer response",
            commonErrors: [
              "Assuming interaction must be technological or complex.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An artist statement that frames an exhibition's argument functions like:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A substitute for the artworks themselves" },
              { id: "b", text: "A lens that shapes how viewers interpret what they see" },
              { id: "c", text: "A sales pitch for future work" },
              { id: "d", text: "A technical manual for the materials" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framing", statement: "Introductory texts prime viewers' expectations and interpretations." },
            ],
            steps: [
              { reasoning: "Framing text shapes the lens through which viewers approach the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A lens that shapes how viewers interpret what they see",
            commonErrors: [
              "Underestimating how introductory text directs interpretation.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three forms of interpretive support an exhibition could provide to viewers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interpretive support", statement: "Labels, introductory texts and digital layers help viewers access meaning." },
            ],
            steps: [
              { reasoning: "Artwork labels give title, artist, medium and context beside each work.", marks: 1, markCode: "M" },
              { reasoning: "An introductory panel or artist statement frames the exhibition's argument.", marks: 1, markCode: "M" },
              { reasoning: "Digital layers — QR codes, audio guides — offer optional deeper engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Labels, introductory/artist text, and digital layers (QR, audio).",
            commonErrors: [
              "Listing engagement gimmicks rather than interpretive support.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student exhibits abstract paintings and viewers leave after seconds. Write two guiding questions that could be placed near the works to slow them down.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Guiding questions", statement: "Open prompts direct attention and invite personal response." },
            ],
            steps: [
              { reasoning: "Questions should be open — inviting feeling or noticing, not testing knowledge.", marks: 1, markCode: "M" },
              { reasoning: "They should relate to formal features — colour, composition, texture.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'What do the colours make you feel?' or 'Where does your eye travel first?'", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: questions turn passive glancing into active looking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Open questions about colour feeling, eye movement or personal response near works.",
            commonErrors: [
              "Writing quiz-style questions with single correct answers.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "Describe what an introductory text for an exhibition should contain and what it should avoid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Introductory text", statement: "Frames the exhibition's idea accessibly without jargon." },
            ],
            steps: [
              { reasoning: "Should state the exhibition's theme or question and the artist's approach.", marks: 1, markCode: "M" },
              { reasoning: "Should give viewers a lens — what to look for, why it matters.", marks: 1, markCode: "M" },
              { reasoning: "Should be written accessibly — short sentences, no jargon.", marks: 1, markCode: "M" },
              { reasoning: "Should avoid explaining every work — it frames, not replaces looking.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: intro text opens the door; viewers still walk through.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme, approach and viewing guidance — accessible, framing rather than exhaustive.",
            commonErrors: [
              "Writing a mini-essay that dictates interpretation.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why a 'gimmick' interactive element can damage an exhibition even while increasing foot traffic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Engagement vs entertainment", statement: "Unrelated interactives divert attention from meaning." },
            ],
            steps: [
              { reasoning: "Gimmicks attract attention but to themselves, not to the artworks.", marks: 1, markCode: "M" },
              { reasoning: "They break the viewer's contemplative frame — activity replaces reflection.", marks: 1, markCode: "M" },
              { reasoning: "Viewers may remember the game and forget the art — engagement metric rises while understanding falls.", marks: 1, markCode: "R" },
              { reasoning: "Unrelated interactives can trivialise the work's themes by treating them as backdrop for amusement.", marks: 1, markCode: "R" },
              { reasoning: "They also teach viewers to expect entertainment rather than contemplation.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: traffic is not the same as engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unrelated interactives divert attention from meaning and substitute activity for reflection.",
            commonErrors: [
              "Equating visitor numbers with meaningful engagement.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student exhibits portraits and adds: a giant selfie booth unrelated to the theme, dense jargon-heavy labels, and a comment card asking 'What is the focal point of this work?' Evaluate this engagement strategy.",
          parts: [
            { label: "a", prompt: "Identify two engagement strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest three improvements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating engagement", statement: "Assess whether strategies deepen understanding or merely distract." },
            ],
            steps: [
              { part: "a", reasoning: "Labels exist and a comment card invites response — engagement was attempted.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Selfie booth is unrelated to portraits; jargon labels exclude viewers; the question tests knowledge rather than inviting response.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replace selfie booth with a portrait-related interactive — e.g. viewers add a sentence to a collective portrait.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rewrite labels in accessible language answering what/why/what to notice.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Change the comment prompt to an open question like 'Who does this portrait remind you of?'", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, theme-serving improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Labels and comment card attempt engagement. (b) Unrelated booth, jargon labels, quiz question weaken it. (c) Thematic interactive, plain-language labels, open prompt.",
            commonErrors: [
              "Judging engagement by activity level rather than depth of response.",
            ],
          },
        },
        {
          id: "va-u5-audience-engagement-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how framing text shapes a viewer's experience even before they look at an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framing effect", statement: "Pre-viewing text primes expectations and directs attention." },
            ],
            steps: [
              { reasoning: "Framing text tells viewers what to expect — mood, theme, intention.", marks: 1, markCode: "M" },
              { reasoning: "It directs attention to certain features, shaping what viewers notice.", marks: 1, markCode: "M" },
              { reasoning: "It can open or close interpretation — a strong frame invites, a narrow one dictates.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: viewers never see the work 'raw' — framing always mediates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Framing primes expectations and directs attention — it mediates every viewing.",
            commonErrors: [
              "Assuming viewers encounter art without prior framing.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u5-feedback-practice",
      title: "Feedback and critical dialogue",
      skill: "Use structured critique and feedback to improve artistic and curatorial practice.",
      lesson: {
        sections: [
          {
            heading: "The critique process",
            body: "A critique is structured feedback: the artist presents work, peers describe what they see, analyse how it works, and offer interpretations. Ground rules: describe before judging, use 'I' statements, distinguish observation from opinion, and always offer something constructive. The critic's job is to help the work, not to display their own taste.",
          },
          {
            heading: "Receiving feedback",
            body: "Separate the person from the work: feedback about the artwork is not personal attack. Listen for patterns — if three people say the composition is unclear, it probably is. Not all feedback is useful; weigh it against your intention. The artist decides what to take; the critic's role is to offer perspective, not commands.",
          },
          {
            heading: "Feedback for improvement",
            body: "Use feedback to set specific goals: if viewers can't identify the focal point, strengthen contrast there; if labels confuse, simplify language. Document feedback alongside work — tracking responses over time reveals growth and recurring issues. Feedback loops — make, show, receive, revise — are how artists improve fastest.",
          },
        ],
        keyFormulas: [
          { name: "Critique structure", statement: "Present → describe → analyse → interpret → suggest (constructively)" },
          { name: "Feedback loop", statement: "Make → show → receive → revise = continuous improvement" },
        ],
        workedExample: {
          problem: "Three viewers say they 'don't get' an abstract painting. How should the artist use this feedback?",
          solution: "First check if the work is meant to be immediately legible — abstraction may intend ambiguity. Then add an artist statement or introductory text that frames the intended experience. Finally, strengthen visual cues (focal contrast, compositional guides) if the work should be more accessible.",
        },
      },
      questions: [
        {
          id: "va-u5-feedback-practice-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a constructive critique, the critic's primary role is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Display their own artistic taste" },
              { id: "b", text: "Help the artist see the work more clearly and improve it" },
              { id: "c", text: "Choose which works get exhibited" },
              { id: "d", text: "Correct the artist's mistakes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critique role", statement: "The critic offers perspective to help the work, not to display taste or command." },
            ],
            steps: [
              { reasoning: "The critic's role is to offer perspective that helps the artist improve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Help the artist see the work more clearly and improve it",
            commonErrors: [
              "Using critique to display personal taste rather than help the artist.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical structure of a constructive art critique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Critique structure", statement: "Present, describe, analyse, interpret and suggest form the standard sequence." },
            ],
            steps: [
              { reasoning: "Artist presents work and states intention briefly.", marks: 1, markCode: "M" },
              { reasoning: "Critics describe what they observe before judging.", marks: 1, markCode: "M" },
              { reasoning: "Group analyses how elements work and offers interpretations and suggestions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Present → describe → analyse → interpret → suggest constructively.",
            commonErrors: [
              "Jumping straight to judgement without description or analysis.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an artist should decide which feedback to act on.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback selection", statement: "Weigh feedback against intention; patterns of response are most informative." },
            ],
            steps: [
              { reasoning: "Check whether feedback aligns with the work's intended purpose.", marks: 1, markCode: "M" },
              { reasoning: "Look for patterns — repeated responses from multiple viewers are more reliable.", marks: 1, markCode: "M" },
              { reasoning: "The artist retains final authority — feedback informs but does not command.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: use feedback as data, not orders.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Act on feedback that serves intention and appears in patterns; retain artistic authority.",
            commonErrors: [
              "Accepting all feedback uncritically or rejecting it all defensively.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described critique session.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the critique process.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the session.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating critique", statement: "Assess whether feedback is descriptive, constructive and useful for improvement." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. structured format, specific observations, constructive tone.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. critics jump to opinion, vague comments, personal attacks — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with critique effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding description-first rule, specific evidence requirements, constructive framing.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate critique by structure, specificity, constructiveness and usefulness.",
            commonErrors: [
              "Confusing criticism (finding faults) with critique (structured feedback).",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A critique in art practice is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A public attack on weak work" },
              { id: "b", text: "A structured process of presenting work and receiving feedback" },
              { id: "c", text: "A written exam on art history" },
              { id: "d", text: "The final judging of a competition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critique", statement: "Structured feedback designed to help the artist improve." },
            ],
            steps: [
              { reasoning: "A critique is a structured feedback process, not an attack or judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A structured process of presenting work and receiving feedback",
            commonErrors: [
              "Confusing critique with hostile criticism.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'describe before judging' rule in a critique means critics should first:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State whether they like the work" },
              { id: "b", text: "State what they observe — colours, forms, composition — before evaluating" },
              { id: "c", text: "Suggest improvements immediately" },
              { id: "d", text: "Compare the work to famous artists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Describe first", statement: "Observation grounds feedback before opinion." },
            ],
            steps: [
              { reasoning: "Describing observed features keeps feedback grounded in the work, not taste.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** State what they observe — colours, forms, composition — before evaluating",
            commonErrors: [
              "Jumping to opinion without describing what is seen.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using 'I' statements in a critique (e.g. 'I read this as...') helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Makes the critic sound more confident" },
              { id: "b", text: "Owns the response as personal perspective rather than objective fact" },
              { id: "c", text: "Avoids having to give feedback" },
              { id: "d", text: "Guarantees the artist will agree" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "I statements", statement: "Owning responses as perspective reduces defensiveness." },
            ],
            steps: [
              { reasoning: "'I' statements frame feedback as perspective, not command.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Owns the response as personal perspective rather than objective fact",
            commonErrors: [
              "Stating opinions as universal truths about the work.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "When three different viewers independently say the same thing about a work, that feedback is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Definitely wrong because they are not experts" },
              { id: "b", text: "More reliable because it shows a pattern in how the work communicates" },
              { id: "c", text: "Irrelevant to the artist's intention" },
              { id: "d", text: "A sign the viewers colluded" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback patterns", statement: "Repeated responses reveal how the work actually communicates." },
            ],
            steps: [
              { reasoning: "Patterns across viewers are more informative than single opinions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** More reliable because it shows a pattern in how the work communicates",
            commonErrors: [
              "Dismissing repeated feedback as coincidence.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the feedback process, the artist's role regarding suggestions is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Implement every suggestion immediately" },
              { id: "b", text: "Decide what serves the work's intention — feedback informs but does not command" },
              { id: "c", text: "Ignore all feedback to protect their vision" },
              { id: "d", text: "Pay the critics for their time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Artistic authority", statement: "The artist retains final decision over what to change." },
            ],
            steps: [
              { reasoning: "Feedback offers perspective; the artist decides what aligns with intention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decide what serves the work's intention — feedback informs but does not command",
            commonErrors: [
              "Either obeying all feedback or rejecting all of it.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Separating 'the person from the work' when receiving feedback means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Criticising the artist personally is acceptable" },
              { id: "b", text: "Comments about the artwork are not attacks on the artist's worth" },
              { id: "c", text: "The artist should leave during critique" },
              { id: "d", text: "Only strangers can give useful feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feedback reception", statement: "Feedback addresses the work, not the artist's identity." },
            ],
            steps: [
              { reasoning: "Healthy reception treats critique of work as separate from personal worth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Comments about the artwork are not attacks on the artist's worth",
            commonErrors: [
              "Taking work feedback as personal attack.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Documenting viewer feedback alongside artwork over time helps artists because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proves they are better than peers" },
              { id: "b", text: "Reveals growth and recurring issues across their practice" },
              { id: "c", text: "Satisfies exhibition requirements only" },
              { id: "d", text: "Replaces the need for making new work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feedback documentation", statement: "Tracking responses reveals patterns and growth." },
            ],
            steps: [
              { reasoning: "Records over time show improvement and persistent weaknesses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals growth and recurring issues across their practice",
            commonErrors: [
              "Collecting feedback once rather than tracking it over time.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three ground rules for a constructive art critique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Critique ground rules", statement: "Description, ownership, constructiveness and specificity guide good feedback." },
            ],
            steps: [
              { reasoning: "Describe what you see before judging or suggesting.", marks: 1, markCode: "M" },
              { reasoning: "Use 'I' statements and distinguish observation from opinion.", marks: 1, markCode: "M" },
              { reasoning: "Offer something constructive — a suggestion or insight that helps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe first, use I-statements, always offer something constructive.",
            commonErrors: [
              "Listing rules without explaining their purpose.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the typical sequence of a structured critique session.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Critique structure", statement: "Present, describe, analyse, interpret and suggest." },
            ],
            steps: [
              { reasoning: "Artist presents work and briefly states intention.", marks: 1, markCode: "M" },
              { reasoning: "Peers describe observed features without judging.", marks: 1, markCode: "M" },
              { reasoning: "Group analyses how elements and composition work.", marks: 1, markCode: "M" },
              { reasoning: "Interpretations and constructive suggestions close the session.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Present → describe → analyse → interpret → suggest constructively.",
            commonErrors: [
              "Starting with opinions before description and analysis.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q14",
          difficulty: "core",
          totalMarks: 5,
          stem: "Three viewers say they 'don't get' an abstract painting. Explain how the artist should use this feedback.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback application", statement: "Check intention, pattern and accessibility before revising." },
            ],
            steps: [
              { reasoning: "First consider whether ambiguity is intended — abstraction may aim for open interpretation.", marks: 1, markCode: "M" },
              { reasoning: "The repeated response is a pattern — the work is not communicating its intended experience.", marks: 1, markCode: "M" },
              { reasoning: "Add framing — artist statement or introductory text — to guide interpretation.", marks: 1, markCode: "M" },
              { reasoning: "If accessibility is the goal, strengthen visual cues — focal contrast, guides.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: feedback informs revision aligned with intention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check intention; treat pattern as data; add framing or strengthen cues depending on goal.",
            commonErrors: [
              "Either abandoning the work or ignoring the feedback entirely.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the feedback loop and why repeated cycles of making, showing and revising improve artistic practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feedback loop", statement: "Make → show → receive → revise compounds improvement." },
            ],
            steps: [
              { reasoning: "Each cycle exposes the work to outside eyes that see what the maker cannot.", marks: 1, markCode: "M" },
              { reasoning: "Feedback identifies gaps between intention and communication.", marks: 1, markCode: "M" },
              { reasoning: "Revision applies learning — skills and clarity improve with each iteration.", marks: 1, markCode: "M" },
              { reasoning: "Repetition builds pattern-recognition — artists learn which feedback matters.", marks: 1, markCode: "R" },
              { reasoning: "Single-shot work cannot benefit from this compounding.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the loop is the fastest route to improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeated make-show-receive-revise cycles compound skill, communication and self-awareness.",
            commonErrors: [
              "Treating feedback as a one-time event rather than a cycle.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An artist receives feedback: 'It's ugly', 'My kid could do that', and 'The focal point is unclear — where should I look?' Evaluate these three responses and suggest how a peer could rephrase them constructively.",
          parts: [
            { label: "a", prompt: "Identify which responses are unhelpful and why.", marks: 2 },
            { label: "b", prompt: "Explain what useful information the third response contains.", marks: 2 },
            { label: "c", prompt: "Suggest constructive rephrasings of the first two responses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Constructive feedback", statement: "Useful feedback is specific, owned and actionable." },
            ],
            steps: [
              { part: "a", reasoning: "'Ugly' and 'my kid could do that' are opinions/attacks with no actionable information.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both identified as unhelpful.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The third identifies a specific problem — unclear focal point — the viewer doesn't know where to look.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is observable and implies a concrete improvement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rephrase 'ugly' as an observation — e.g. 'The palette feels harsh; I wonder if softer tones would serve the mood.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rephrase 'my kid could do that' as a question about technique — e.g. 'What was the hardest mark-making decision here?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both rephrasings convert attack into inquiry.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete constructive alternatives suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) First two are attacks without information. (b) Third pinpoints focal-point problem. (c) Rephrase as observations/questions.",
            commonErrors: [
              "Accepting all feedback equally or dismissing all of it.",
            ],
          },
        },
        {
          id: "va-u5-feedback-practice-q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a critical suggestion and a command in feedback, and why the distinction matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suggestion vs command", statement: "Feedback offers perspective; commands remove artistic agency." },
            ],
            steps: [
              { reasoning: "A command dictates — 'change this'; a suggestion offers — 'have you considered...'.", marks: 1, markCode: "M" },
              { reasoning: "Commands position the critic as authority over the artist's decisions.", marks: 1, markCode: "M" },
              { reasoning: "Suggestions preserve the artist's agency to accept, adapt or reject.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good critique respects that the artist owns the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Suggestions offer perspective and preserve agency; commands dictate and undermine ownership.",
            commonErrors: [
              "Treating critique as permission to direct the artist's choices.",
            ],
          },
        },
      ],
    },
  ],
};
