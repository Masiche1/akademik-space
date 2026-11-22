import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cie-ol-el-lesson-2-3",
  code: "2-3",
  title: "Media and visual texts",
  goal: "I CAN analyse media texts including advertisements and visual communications.",
  standards: ["1123 Reading: media"],
  vocabulary: [
    { term: "Media", definition: "Channels of communication — newspapers, TV, internet." },
    { term: "Advertisement", definition: "Promotional text designed to persuade purchase." },
    { term: "Headline", definition: "Main title of article or advertisement." },
    { term: "Slogan", definition: "Catchy phrase representing product/idea." },
    { term: "Target audience", definition: "Specific group the media targets." },
    { term: "Call to action", definition: "Instruction prompting reader response." },
  ],
  concepts: [
    {
      id: "cie-ol-el-media",
      title: "Media text analysis",
      skill: "Analyse advertisements, articles and media communications.",
      lesson: {
        sections: [
          {
            heading: "Advertisement structure",
            body: "Headline → visual/image → body text → slogan → call to action. Each element persuades.",
          },
          {
            heading: "Persuasive techniques in media",
            body: "Emotive language, expert endorsements, statistics, repetition, colour/imagery (visual), celebrity association.",
          },
          {
            heading: "Target audience",
            body: "Advertisements target specific groups — children (bright colours, cartoons), adults (professional), teens (trendy).",
          },
        ],
        keyFormulas: [
          { name: "Media analysis", statement: "Advertisement: headline→visual→body→slogan→CTA; persuasive techniques; target audience." },
        ],
        workedExample: {
          problem: "How to analyse a product advertisement?",
          solution: "Check headline (grabs attention?), imagery (attractive?), language (persuasive?), target audience (who?), CTA (what action?).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'call to action' in advertising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product name" },
              { id: "b", text: "Instruction prompting response" },
              { id: "c", text: "Company logo" },
              { id: "d", text: "Price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "Instruction prompting reader to act." },
            ],
            steps: [
              { reasoning: "CTA = prompt to act.", working: "act", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Instruction prompting response",
            commonErrors: ["Choosing (b) — that's product name."],
          },
        },
        {
          id: "cie-ol-el-media-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques in advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Emotive language, expert endorsements, statistics, repetition." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language, expert endorsements, statistics, repetition (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-media-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does an advertisement target its audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Target audience", statement: "Colour, imagery, language, appeals — matched to audience." },
            ],
            steps: [
              { reasoning: "Colours and imagery appeal to specific groups (bright for children).", working: "visuals", marks: 1, markCode: "AO2" },
              { reasoning: "Language/tone matches audience (formal vs trendy).", working: "language", marks: 1, markCode: "AO2" },
              { reasoning: "References, celebrities, values match target group.", working: "references", marks: 1, markCode: "AO2" },
              { reasoning: "Targeting explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Visuals, language, references matched to target audience.",
            commonErrors: ["Thinking all ads target everyone — they target specific groups."],
          },
        },
        {
          id: "cie-ol-el-media-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse media texts.",
          parts: [
            { label: "a", prompt: "Describe advertisement structure.", marks: 2 },
            { label: "b", prompt: "Name persuasive techniques.", marks: 3 },
            { label: "c", prompt: "How to identify target audience?", marks: 2 },
            { label: "d", prompt: "What is a slogan?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Structure, techniques, audience, slogan." },
            ],
            steps: [
              { part: "a", reasoning: "Headline→visual→body→slogan→CTA.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Emotive, expert, statistics, repetition, celebrity.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Check colours, language, references — match to group.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Catchy phrase representing product/idea — memorable.", working: "slogan", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) techniques (c) audience matching (d) catchy phrase",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Missing call to action — key element."],
          },
        },
        {
          id: "cie-ol-el-media-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'slogan' in advertising is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The company's address" },
              { id: "b", text: "The product's price" },
              { id: "c", text: "A description of the logo" },
              { id: "d", text: "A catchy phrase representing the product" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slogan", statement: "Catchy phrase representing product or idea." },
            ],
            steps: [
              { reasoning: "Slogan = catchy phrase.", working: "catchy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A catchy phrase representing the product",
            commonErrors: ["Choosing (b) — that's price."],
          },
        },
        {
          id: "cie-ol-el-media-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Advertisement structure has 5 elements: headline, visual, body text, slogan, call to action. A student writes an ad missing the slogan and the call to action. (a) How many elements are required? (b) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ad structure", statement: "All 5 elements needed." },
            ],
            steps: [
              { reasoning: "5 elements are required.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "2 elements are missing.", working: "2 missing", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Forgetting the call to action."],
          },
        },
        {
          id: "cie-ol-el-media-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Target audience' in advertising means what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only children" },
              { id: "b", text: "The specific group the ad aims at" },
              { id: "c", text: "Only adults" },
              { id: "d", text: "Everyone in the world" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Target audience", statement: "Specific group the media targets." },
            ],
            steps: [
              { reasoning: "Target audience = specific group.", working: "specific group", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The specific group the ad aims at",
            commonErrors: ["Thinking all ads target everyone."],
          },
        },
        {
          id: "cie-ol-el-media-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques used in advertising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ad techniques", statement: "Emotive language, expert endorsements, statistics, repetition." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language, expert endorsements, statistics, repetition, celebrity association (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-media-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An advertisement uses 3 statistics, 2 celebrity references and 1 slogan. (a) How many statistics appear? (b) How many celebrity references appear? (c) How many persuasive elements are counted in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ad analysis counting", statement: "Count each persuasive element." },
            ],
            steps: [
              { reasoning: "3 statistics are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "2 celebrity references are given.", working: "2", marks: 1, markCode: "AO2" },
              { reasoning: "3 plus 2 plus 1 equals 6 elements.", working: "3 + 2 + 1 = 6", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 2; (c) 6",
            commonErrors: ["Counting the slogan as a separate category — it's still an element."],
          },
        },
        {
          id: "cie-ol-el-media-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bright colours and cartoon characters in an advertisement suggest a target audience of what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "University lecturers" },
              { id: "b", text: "Elderly people" },
              { id: "c", text: "Business professionals" },
              { id: "d", text: "Children" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience targeting", statement: "Visual style matches target group." },
            ],
            steps: [
              { reasoning: "Bright colours/cartoons appeal to children.", working: "children", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Children",
            commonErrors: ["Choosing (c) — business ads use professional imagery."],
          },
        },
        {
          id: "cie-ol-el-media-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to analyse an advertisement effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ad analysis", statement: "Structure, techniques, audience, call to action." },
            ],
            steps: [
              { reasoning: "Check the headline — does it grab attention?", working: "headline", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse the imagery and language — persuasive techniques.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Identify the target audience from colours/references.", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Find the call to action — what does it ask you to do?", working: "CTA", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Headline→techniques→audience→call to action.",
            commonErrors: ["Only describing the product — analyse the persuasion."],
          },
        },
        {
          id: "cie-ol-el-media-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Buy now — limited offer!' is an example of what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A slogan" },
              { id: "b", text: "A headline only" },
              { id: "c", text: "A byline" },
              { id: "d", text: "A call to action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "Instruction prompting the reader to act." },
            ],
            steps: [
              { reasoning: "'Buy now' prompts action.", working: "act", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A call to action",
            commonErrors: ["Choosing (c) — it's an instruction, not a phrase."],
          },
        },
        {
          id: "cie-ol-el-media-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An ad needs 5 elements; a student includes only 3. (a) How many elements are missing? (b) A slogan must be under 6 words; a draft slogan has 9 words. By how many words does it exceed the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ad checking", statement: "Include all elements; meet word limits." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing elements.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "9 minus 6 equals 3 words over.", working: "9 - 6 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 3 words",
            commonErrors: ["Exceeding the slogan word limit."],
          },
        },
        {
          id: "cie-ol-el-media-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply media analysis skills.",
          parts: [
            { label: "a", prompt: "Describe the structure of an advertisement.", marks: 2 },
            { label: "b", prompt: "Name three persuasive techniques in ads.", marks: 2 },
            { label: "c", prompt: "How do you identify the target audience?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Structure, techniques, audience." },
            ],
            steps: [
              { part: "a", reasoning: "Headline→visual→body→slogan→CTA.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Emotive, expert, statistics, repetition, celebrity — any three.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Colours, language, references match to specific group.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) headline→CTA (b) three techniques (c) match to group",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Missing the call to action element."],
          },
        },
        {
          id: "cie-ol-el-media-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'expert endorsement' in advertising means what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A price list" },
              { id: "b", text: "A safety warning" },
              { id: "c", text: "A guarantee" },
              { id: "d", text: "A famous person or expert recommends the product" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expert endorsement", statement: "Authority figure recommends product." },
            ],
            steps: [
              { reasoning: "Endorsement = recommendation by authority.", working: "endorsement", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A famous person or expert recommends the product",
            commonErrors: ["Choosing (d) — that's a guarantee."],
          },
        },
        {
          id: "cie-ol-el-media-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An ad uses 4 persuasive techniques; a student identifies only 2 of them. How many are missed? (b) A headline limit is 10 words; a draft headline has 14 words. By how many words does it exceed the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ad checking", statement: "Find all techniques; meet word limits." },
            ],
            steps: [
              { reasoning: "4 minus 2 equals 2 missed techniques.", working: "4 - 2 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "14 minus 10 equals 4 words over.", working: "14 - 10 = 4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 4 words",
            commonErrors: ["Missing techniques or exceeding word limits."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-media-effects",
      title: "Media effects and influence",
      skill: "Evaluate how media influences audiences.",
      lesson: {
        sections: [
          {
            heading: "Media influence",
            body: "Media shapes opinions, values, consumer choices. Can inform, persuade, or manipulate audiences.",
          },
          {
            heading: "Bias and objectivity",
            body: "All media has perspective — check for bias, omissions, loaded language. Objectivity is rare.",
          },
          {
            heading: "Critical analysis",
            body: "Ask: Who created this? Why? Who benefits? What's omitted? Who is the audience? What techniques used?",
          },
        ],
        keyFormulas: [
          { name: "Media influence", statement: "Media shapes opinions; bias exists; critical questions reveal influence." },
        ],
        workedExample: {
          problem: "How to evaluate a news article for bias?",
          solution: "Check language (loaded?), sources (balanced?), omissions (what's missing?), headline (sensational?), context (full story?).",
        },
      },
      questions: [
        {
          id: "cie-ol-el-meff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete truth" },
              { id: "b", text: "Factual report" },
              { id: "c", text: "One-sided perspective" },
              { id: "d", text: "No opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "One-sided perspective — favouring one view." },
            ],
            steps: [
              { reasoning: "Bias = one-sided.", working: "one-sided", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** One-sided perspective",
            commonErrors: ["Choosing (c) — media always has perspective."],
          },
        },
        {
          id: "cie-ol-el-meff-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two critical questions for media analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Critical questions", statement: "Who created? Why? Who benefits? What's omitted?" },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "questions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Who created? Why? Who benefits? What's omitted? Who is audience?",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-meff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how media can manipulate audiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Manipulation", statement: "Emotive language, selective facts, repetition, expert endorsements — shape views." },
            ],
            steps: [
              { reasoning: "Emotive language appeals to feelings, not logic.", working: "emotive", marks: 1, markCode: "AO2" },
              { reasoning: "Selective facts/omissions create misleading picture.", working: "selective", marks: 1, markCode: "AO2" },
              { reasoning: "Repetition and endorsements create false credibility.", working: "repetition", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotive language, selective facts, repetition, endorsements — shape views.",
            commonErrors: ["Thinking media is neutral — always has agenda."],
          },
        },
        {
          id: "cie-ol-el-meff-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate media influence.",
          parts: [
            { label: "a", prompt: "Define bias in media.", marks: 1 },
            { label: "b", prompt: "Name critical questions.", marks: 3 },
            { label: "c", prompt: "How does media manipulate?", marks: 3 },
            { label: "d", prompt: "How to be critical consumer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media influence", statement: "Bias, critical questions, manipulation, critical consumption." },
            ],
            steps: [
              { part: "a", reasoning: "One-sided perspective favouring one view.", working: "bias", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Who created? Why? Who benefits? What's omitted? Audience?", working: "questions", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Emotive language, selective facts, repetition, endorsements.", working: "manipulation", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check sources, multiple perspectives, question assumptions, verify facts.", working: "critical", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) one-sided (b) critical questions (c) manipulation techniques (d) check/verify",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ questions.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple techniques.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Accepting media at face value — must be critical."],
          },
        },
        {
          id: "cie-ol-el-meff-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Objectivity in media means what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fictional" },
              { id: "b", text: "Balanced and factual" },
              { id: "c", text: "One-sided" },
              { id: "d", text: "Emotional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Objectivity", statement: "Balanced, factual presentation." },
            ],
            steps: [
              { reasoning: "Objectivity = balanced/factual.", working: "balanced", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Balanced and factual",
            commonErrors: ["Choosing (b) — that's bias."],
          },
        },
        {
          id: "cie-ol-el-meff-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "There are 5 critical questions for media analysis. A student asks only 3 of them. (a) How many questions exist? (b) How many has the student asked?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questions", statement: "Ask all key questions." },
            ],
            steps: [
              { reasoning: "5 critical questions exist.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 are asked.", working: "3", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 3",
            commonErrors: ["Asking too few critical questions."],
          },
        },
        {
          id: "cie-ol-el-meff-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Loaded language' in media is what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral words" },
              { id: "b", text: "Words with strong emotional bias" },
              { id: "c", text: "Technical terms" },
              { id: "d", text: "Foreign words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Loaded language", statement: "Words carrying emotional bias." },
            ],
            steps: [
              { reasoning: "Loaded = emotionally biased.", working: "biased", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Words with strong emotional bias",
            commonErrors: ["Choosing (b) — that's neutral."],
          },
        },
        {
          id: "cie-ol-el-meff-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two critical questions for analysing media texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Critical questions", statement: "Who created? Why? Who benefits? What's omitted?" },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "questions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Who created? Why? Who benefits? What's omitted? Who is the audience? (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-meff-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A news article omits 3 key facts and uses 4 emotionally loaded words. (a) How many facts are omitted? (b) How many loaded words are used? (c) What is the total number of red flags?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
              { label: "c", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias detection", statement: "Omissions and loaded language signal bias." },
            ],
            steps: [
              { reasoning: "3 facts are omitted.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "4 loaded words are used.", working: "4", marks: 1, markCode: "AO2" },
              { reasoning: "3 plus 4 equals 7 red flags.", working: "3 + 4 = 7", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 4; (c) 7",
            commonErrors: ["Not counting omissions as bias signals."],
          },
        },
        {
          id: "cie-ol-el-meff-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Media can manipulate audiences through which method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random chance" },
              { id: "b", text: "Remaining silent" },
              { id: "c", text: "Selective facts and repetition" },
              { id: "d", text: "Only presenting truth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Manipulation", statement: "Selective facts, repetition, emotive language." },
            ],
            steps: [
              { reasoning: "Selective facts + repetition manipulate.", working: "selective", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Selective facts and repetition",
            commonErrors: ["Thinking media is neutral."],
          },
        },
        {
          id: "cie-ol-el-meff-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why all media texts have some form of perspective or bias.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media bias", statement: "Creators have perspectives; selection shapes meaning." },
            ],
            steps: [
              { reasoning: "Every creator has a viewpoint — complete objectivity is rare.", working: "perspective", marks: 1, markCode: "AO2" },
              { reasoning: "Choices of what to include or omit shape the message.", working: "selection", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose and agenda influence presentation.", working: "agenda", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation given.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creators have perspectives; selection and purpose shape the message.",
            commonErrors: ["Assuming media is neutral — it always has a viewpoint."],
          },
        },
        {
          id: "cie-ol-el-meff-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a clear sign of bias in a news article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple sources are used" },
              { id: "b", text: "Formal register is used" },
              { id: "c", text: "Only one side of the story is quoted" },
              { id: "d", text: "Statistics are included" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias signs", statement: "One-sided sourcing signals bias." },
            ],
            steps: [
              { reasoning: "One-sided sourcing = bias.", working: "one-sided", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Only one side of the story is quoted",
            commonErrors: ["Choosing (b) — multiple sources suggest balance."],
          },
        },
        {
          id: "cie-ol-el-meff-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) There are 6 critical questions for media analysis; a student uses only 4 of them. How many are unused? (b) An article has 5 paragraphs; 2 of them give opinion. How many paragraphs are factual?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical analysis counting", statement: "Count questions used and factual paragraphs." },
            ],
            steps: [
              { reasoning: "6 minus 4 equals 2 unused questions.", working: "6 - 4 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "5 minus 2 equals 3 factual paragraphs.", working: "5 - 2 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 3",
            commonErrors: ["Not distinguishing opinion from factual paragraphs."],
          },
        },
        {
          id: "cie-ol-el-meff-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate media influence.",
          parts: [
            { label: "a", prompt: "Define bias in media.", marks: 2 },
            { label: "b", prompt: "Name three critical questions.", marks: 2 },
            { label: "c", prompt: "Name two manipulation techniques.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media influence", statement: "Bias, critical questions, manipulation." },
            ],
            steps: [
              { part: "a", reasoning: "One-sided perspective favouring one view.", working: "bias", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Who created? Why? Who benefits? What's omitted? — any three.", working: "questions", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Emotive language, selective facts, repetition, endorsements — any two.", working: "techniques", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) one-sided (b) three questions (c) two techniques",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
            ],
            commonErrors: ["Accepting media at face value."],
          },
        },
        {
          id: "cie-ol-el-meff-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best way to be a critical media consumer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Believe everything you read" },
              { id: "b", text: "Only read headlines" },
              { id: "c", text: "Check sources and multiple perspectives" },
              { id: "d", text: "Trust experts blindly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical consumption", statement: "Verify sources, seek multiple views." },
            ],
            steps: [
              { reasoning: "Critical consumers check sources and perspectives.", working: "verify", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Check sources and multiple perspectives",
            commonErrors: ["Choosing (b) — passive acceptance is not critical."],
          },
        },
        {
          id: "cie-ol-el-meff-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) 4 manipulation techniques are listed; a student names only 3 of them. How many are missing? (b) An article has 10 facts checked; 7 are verified. How many are unverified?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media checking", statement: "Count techniques and verify facts." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 missing technique.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "10 minus 7 equals 3 unverified facts.", working: "10 - 7 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 3",
            commonErrors: ["Not verifying all facts."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-exam-skills",
      title: "Exam skills and revision",
      skill: "Apply exam techniques for reading and writing papers.",
      lesson: {
        sections: [
          {
            heading: "Reading paper strategy",
            body: "Read all questions first → allocate time → answer easier first → evidence-based answers → review at end.",
          },
          {
            heading: "Writing paper strategy",
            body: "Plan before writing → structure paragraphs → use varied sentences → check word count → proofread.",
          },
          {
            heading: "Common mistakes",
            body: "Ignoring word limits, not answering question set, poor paragraphing, grammar errors, no proofreading.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Reading: plan/allocate/evidence. Writing: plan/structure/proofread." },
        ],
        workedExample: {
          problem: "How to allocate exam time?",
          solution: "Total time ÷ total marks × marks per section. Leave 10% for review.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-exam2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before starting the reading paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing" },
              { id: "b", text: "Skip" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Read all questions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read all questions first — plan approach." },
            ],
            steps: [
              { reasoning: "Read questions first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all questions",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-exam2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Plan, structure, varied sentences, proofread." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan, structure, varied sentences, proofread (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to allocate time in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review at end." },
            ],
            steps: [
              { reasoning: "Calculate time per mark — allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first.", working: "easy", marks: 1, markCode: "AO2" },
              { reasoning: "Leave time for review.", working: "review", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, easy first, review at end.",
            commonErrors: ["No time plan — runs out."],
          },
        },
        {
          id: "cie-ol-el-exam2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for O Level English exam.",
          parts: [
            { label: "a", prompt: "How to approach reading paper?", marks: 2 },
            { label: "b", prompt: "How to approach writing paper?", marks: 3 },
            { label: "c", prompt: "What are common mistakes?", marks: 2 },
            { label: "d", prompt: "How to check work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Reading: plan/allocate; writing: plan/structure/proofread." },
            ],
            steps: [
              { part: "a", reasoning: "Read questions, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, structure, write, check word count, proofread.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word limits, wrong question, poor paragraphing, grammar errors.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check units, complete all questions, proofread for errors.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) plan/allocate (b) plan/structure/proofread (c) mistakes (d) check units/all questions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete process.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No proofreading — errors remain."],
          },
        },
        {
          id: "cie-ol-el-exam2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do before starting the reading paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Guess the answers" },
              { id: "c", text: "Read all the questions first" },
              { id: "d", text: "Skip to the end" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reading strategy", statement: "Read questions first — plan approach." },
            ],
            steps: [
              { reasoning: "Read all questions first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Read all the questions first",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-exam2-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An exam lasts 2 hours and is worth 80 marks. (a) How many marks are available per hour? (b) How many minutes are available per mark?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 1.5, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time calculation", statement: "Total time divided by total marks." },
            ],
            steps: [
              { reasoning: "80 marks in 2 hours equals 40 marks per hour.", working: "80 / 2 = 40", marks: 1, markCode: "AO2" },
              { reasoning: "120 minutes divided by 80 equals 1.5 minutes per mark.", working: "120 / 80 = 1.5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 40 marks per hour; (b) 1.5 minutes per mark",
            commonErrors: ["Mixing hours and minutes."],
          },
        },
        {
          id: "cie-ol-el-exam2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first step in a writing task?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plan and brainstorm" },
              { id: "b", text: "Proofread" },
              { id: "c", text: "Count the words" },
              { id: "d", text: "Write the final version" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Writing strategy", statement: "Plan before writing." },
            ],
            steps: [
              { reasoning: "Planning comes first.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Plan and brainstorm",
            commonErrors: ["Starting to write — no structure."],
          },
        },
        {
          id: "cie-ol-el-exam2-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Writing techniques", statement: "Plan, structure, varied sentences, proofread." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan, structure, varied sentences, proofread (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam2-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An exam has three sections worth 30, 40 and 20 marks. (a) What is the total number of marks? (b) If time is allocated by marks and the exam is 90 minutes, how many minutes does the 40-mark section get? (c) How many minutes does the 20-mark section get?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 90 },
              { label: "b", answer: 40, unit: "minutes" },
              { label: "c", answer: 20, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proportional allocation", statement: "Time per section proportional to marks." },
            ],
            steps: [
              { reasoning: "30 plus 40 plus 20 equals 90 marks.", working: "30 + 40 + 20 = 90", marks: 1, markCode: "AO2" },
              { reasoning: "40 marks equals 40 minutes (1 min per mark).", working: "40 min", marks: 1, markCode: "AO2" },
              { reasoning: "20 marks equals 20 minutes.", working: "20 min", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 90 marks; (b) 40 minutes; (c) 20 minutes",
            commonErrors: ["Splitting time equally."],
          },
        },
        {
          id: "cie-ol-el-exam2-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Answering easier questions first helps by doing what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saving no time" },
              { id: "b", text: "Being required" },
              { id: "c", text: "Confusing the examiner" },
              { id: "d", text: "Securing marks and building confidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam strategy", statement: "Easy first — secure marks early." },
            ],
            steps: [
              { reasoning: "Easy questions guarantee marks.", working: "marks", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Securing marks and building confidence",
            commonErrors: ["Choosing (b) — order doesn't confuse examiner."],
          },
        },
        {
          id: "cie-ol-el-exam2-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain a good time allocation strategy for exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review buffer." },
            ],
            steps: [
              { reasoning: "Calculate time per mark and allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first.", working: "easy", marks: 1, markCode: "AO2" },
              { reasoning: "Leave buffer time for review.", working: "buffer", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, easy first, review buffer.",
            commonErrors: ["No plan — running out of time."],
          },
        },
        {
          id: "cie-ol-el-exam2-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a common exam mistake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the questions" },
              { id: "b", text: "Planning first" },
              { id: "c", text: "Not answering the question set" },
              { id: "d", text: "Checking work" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam mistakes", statement: "Must answer the required question set." },
            ],
            steps: [
              { reasoning: "Wrong question set = marks lost.", working: "question set", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Not answering the question set",
            commonErrors: ["Choosing (d) — checking is good."],
          },
        },
        {
          id: "cie-ol-el-exam2-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 60-minute exam has 30 marks. (a) How many minutes are available per mark? (b) How much time should a 10-mark question take?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "minutes" },
              { label: "b", answer: 20, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time per mark", statement: "Total time ÷ total marks." },
            ],
            steps: [
              { reasoning: "60 divided by 30 equals 2 minutes per mark.", working: "60 / 30 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "10 marks times 2 equals 20 minutes.", working: "10 x 2 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2 minutes per mark; (b) 20 minutes",
            commonErrors: ["Forgetting to multiply by question marks."],
          },
        },
        {
          id: "cie-ol-el-exam2-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Prepare for the O Level English exam.",
          parts: [
            { label: "a", prompt: "Describe your approach to the reading paper.", marks: 2 },
            { label: "b", prompt: "Describe your approach to the writing paper.", marks: 2 },
            { label: "c", prompt: "How will you check your work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam preparation", statement: "Reading, writing, checking strategies." },
            ],
            steps: [
              { part: "a", reasoning: "Read questions, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, structure, write, check word count, proofread.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Check all questions answered, proofread, verify word limits.", working: "check", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) read/plan (b) plan/write/proofread (c) check all/proofread",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["No proofreading — errors remain."],
          },
        },
        {
          id: "cie-ol-el-exam2-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is proofreading important before submitting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses the reader" },
              { id: "b", text: "It is required decoration" },
              { id: "c", text: "It fills time" },
              { id: "d", text: "It catches errors and improves marks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading", statement: "Catches errors — improves accuracy." },
            ],
            steps: [
              { reasoning: "Proofreading catches mistakes.", working: "errors", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It catches errors and improves marks",
            commonErrors: ["Skipping proofreading — errors cost marks."],
          },
        },
        {
          id: "cie-ol-el-exam2-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A student plans to spend 25 minutes writing but the task should take about 10 minutes. By how many minutes do they overspend? (b) If an exam is 120 minutes and 10% should be left for review, how many review minutes are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15, unit: "minutes" },
              { label: "b", answer: 12, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time checking", statement: "Compare planned vs actual; reserve review." },
            ],
            steps: [
              { reasoning: "25 minus 10 equals 15 minutes overspent.", working: "25 - 10 = 15", marks: 1, markCode: "AO2" },
              { reasoning: "10% of 120 equals 12 review minutes.", working: "0.1 x 120 = 12", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 15 minutes; (b) 12 minutes",
            commonErrors: ["Not comparing time to task requirements."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit2-notes",
      title: "Unit 2 — revision notes",
      summary: "Poetry, prose, media analysis and exam skills.",
      sections: [
        {
          heading: "Text analysis",
          body: "Poetry: stanza/verse, imagery, tone, techniques. Prose: POV, characterisation, foreshadowing. Media: advertisements, bias, critical questions.",
        },
      ],
    },
  ],
};
