import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "tok-u3-lesson-3-2",
  code: "3-2",
  title: "The TOK Exhibition",
  goal: "I CAN construct a TOK exhibition that links three real-world objects to knowledge questions and ways of knowing.",
  standards: ["TOK", "Assessment", "TOK Exhibition", "IA"],
  vocabulary: [
    { term: "TOK exhibition", definition: "An internal assessment component where students link three objects to a theme and knowledge questions." },
    { term: "Theme", definition: "One of thirty-two prescribed prompts connecting objects to knowledge issues." },
    { term: "Object", definition: "A real-world item (not an image or text alone) selected to illustrate a knowledge claim." },
    { term: "Commentary", definition: "A 200–300 word explanation linking an object to the theme and a knowledge question." },
    { term: "Knowledge question", definition: "A question about the nature or limits of knowledge that the object illuminates." },
    { term: "IA (Internal Assessment)", definition: "The TOK exhibition — marked internally, not an external exam." },
  ],
  concepts: [
    {
      id: "tok-u3-exhibition-basics",
      title: "Understanding the TOK exhibition",
      skill: "Explain the requirements and structure of the TOK exhibition.",
      lesson: {
        sections: [
          {
            heading: "What the exhibition is",
            body: "The TOK exhibition is an internal assessment where you select **three real-world objects** that connect to a prescribed **theme** and write a commentary for each. It is completed in class, not examined externally. The exhibition tests whether you can apply TOK thinking to concrete cases — the opposite of abstract essay writing.",
          },
          {
            heading: "Requirements",
            body: "You need: one of 32 themes (e.g. 'What counts as knowledge?', 'How does culture influence what we know?'), three objects (physical items, not pictures or texts alone), and a 200–300 word commentary per object linking it to the theme through a **knowledge question**.",
          },
          {
            heading: "Choosing objects",
            body: "Objects should be concrete and accessible: a newspaper, a tool, a piece of clothing, a medical device, a religious artefact. Each object must genuinely illuminate the theme — not just be 'related'. The best objects provoke a knowledge question: 'What does this object reveal about how we know?'",
          },
        ],
        keyFormulas: [
          { name: "Exhibition formula", statement: "Theme + 3 objects + 3 commentaries (200–300 words each)" },
          { name: "Object test", statement: "Does this object genuinely raise a knowledge question about the theme?" },
        ],
        workedExample: {
          problem: "Theme: 'What counts as knowledge?' Choose an object.",
          solution: "A weather vane: it records wind direction — a simple instrument of perception. Commentary: raises whether instrument-mediated knowledge is more reliable than direct perception, linking sense perception to empirical knowledge.",
        },
      },
      questions: [
        {
          id: "tok-u3-l32c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The TOK exhibition requires how many objects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One" },
              { id: "b", text: "Two" },
              { id: "c", text: "Three" },
              { id: "d", text: "Five" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhibition format", statement: "The TOK exhibition uses three real-world objects linked to a theme." },
            ],
            steps: [
              { reasoning: "The IB specifies three objects for the exhibition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Three",
            commonErrors: ["Confusing exhibition with essay requirements."],
          },
        },
        {
          id: "tok-u3-l32c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what makes a good object choice for the TOK exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Object selection", statement: "Objects should be concrete, accessible and genuinely illuminate a knowledge question." },
            ],
            steps: [
              { reasoning: "The object must be real and physical — not just an image or text.", marks: 1, markCode: "M" },
              { reasoning: "It should be accessible and understandable to the examiner.", marks: 1, markCode: "M" },
              { reasoning: "Most importantly, it must raise a genuine knowledge question about the theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Good objects are concrete, accessible and provoke genuine knowledge questions about the theme.",
            commonErrors: ["Choosing objects that are merely 'related' rather than genuinely illuminating."],
          },
        },
        {
          id: "tok-u3-l32c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the effectiveness of the exhibition as an assessment of TOK understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition assessment", statement: "The exhibition tests applied TOK thinking through concrete objects." },
            ],
            steps: [
              { reasoning: "For: it forces application of TOK concepts to real cases — practical understanding.", marks: 1, markCode: "M" },
              { reasoning: "For: limited word count prevents essay-length treatment — tests concision.", marks: 1, markCode: "M" },
              { reasoning: "Against: 200–300 words may be too short for depth; object choice can limit argument.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: effective for testing applied understanding but limited for deep argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The exhibition effectively tests applied TOK thinking but is limited by brevity and object constraints.",
            commonErrors: ["Treating it as equivalent to the essay in depth."],
          },
        },
        {
          id: "tok-u3-l32c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a TOK exhibition.",
          parts: [
            { label: "a", prompt: "Explain the requirements of the exhibition.", marks: 2 },
            { label: "b", prompt: "Describe how to choose three appropriate objects.", marks: 3 },
            { label: "c", prompt: "Evaluate what makes a strong commentary.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition planning", statement: "Theme + objects + commentaries linking objects to knowledge questions." },
            ],
            steps: [
              { part: "a", reasoning: "One theme, three real objects, three commentaries of 200–300 words.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each commentary must link object to theme via a knowledge question.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Objects must be physical and accessible.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each should illuminate a different aspect of the theme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Avoid objects that are merely decorative or tangential.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Strong commentary states the knowledge question clearly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It links the object specifically to ways of knowing or areas of knowledge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It reaches a nuanced conclusion within the word limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Theme+3 objects+3 commentaries. (b) Physical, accessible, illuminating. (c) Clear KQ, specific link, concise conclusion.",
            commonErrors: ["Writing commentaries that describe the object without raising a knowledge question."],
          },
        },
        {
          id: "tok-u3-l32c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The TOK exhibition is assessed as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An external examination paper" },
              { id: "b", text: "Internal assessment completed in class" },
              { id: "c", text: "An oral examination" },
              { id: "d", text: "A take-home portfolio only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhibition assessment", statement: "The TOK exhibition is internal assessment, typically completed in class." },
            ],
            steps: [
              { reasoning: "The exhibition is an internal assessment component, not an external exam.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Internal assessment completed in class",
            commonErrors: ["Confusing the exhibition with the externally examined essay."],
          },
        },
        {
          id: "tok-u3-l32c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many themes are available for the TOK exhibition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three" },
              { id: "b", text: "Twelve" },
              { id: "c", text: "Thirty-two" },
              { id: "d", text: "As many as students invent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhibition themes", statement: "The IB prescribes 32 themes for the TOK exhibition." },
            ],
            steps: [
              { reasoning: "Students must choose one of 32 prescribed themes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Thirty-two",
            commonErrors: ["Believing students may devise their own themes."],
          },
        },
        {
          id: "tok-u3-l32c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the best object choice for a theme on how we know?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A photograph of a book" },
              { id: "b", text: "A smartphone used in daily life" },
              { id: "c", text: "A paragraph from a textbook" },
              { id: "d", text: "A quotation about knowledge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Object selection", statement: "Objects must be real, physical items that genuinely raise knowledge questions." },
            ],
            steps: [
              { reasoning: "Images and texts alone do not qualify as exhibition objects.", marks: 1, markCode: "M" },
              { reasoning: "A smartphone is a physical object that mediates perception, memory and access to information.", marks: 1, markCode: "M" },
              { reasoning: "It can genuinely raise knowledge questions about mediation and trust.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A smartphone used in daily life",
            commonErrors: ["Choosing images or texts, which do not count as objects."],
          },
        },
        {
          id: "tok-u3-l32c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why exhibition objects must be real-world items rather than images or texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Object requirement", statement: "Objects must be concrete physical items that can be presented and examined." },
            ],
            steps: [
              { reasoning: "The exhibition tests application of TOK thinking to tangible cases.", marks: 1, markCode: "M" },
              { reasoning: "A physical object can be observed, handled and described concretely.", marks: 1, markCode: "M" },
              { reasoning: "Images or texts alone would turn the task into description of representations rather than analysis of the object itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real objects provide concrete, examinable cases for applying TOK thinking; images or texts alone would weaken the link between object and knowledge claim.",
            commonErrors: ["Submitting a picture or quote as the 'object'."],
          },
        },
        {
          id: "tok-u3-l32c1q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the exhibition, the relationship between theme, objects and commentaries is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three unrelated components" },
              { id: "b", text: "Theme frames the issue; objects supply cases; commentaries link each object to the theme via a knowledge question" },
              { id: "c", text: "Commentaries replace the need for objects" },
              { id: "d", text: "Objects are chosen independently of the theme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition structure", statement: "Theme + three objects + three commentaries form an integrated assessment." },
            ],
            steps: [
              { reasoning: "The theme sets the shared knowledge context for the whole exhibition.", marks: 1, markCode: "M" },
              { reasoning: "Each object provides concrete evidence and each commentary connects it to the theme through a knowledge question.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Theme frames the issue; objects supply cases; commentaries link each to the theme via knowledge questions",
            commonErrors: ["Treating the three commentaries as independent rather than unified by the theme."],
          },
        },
        {
          id: "tok-u3-l32c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply the 'object test' to evaluate candidate objects for the exhibition.",
          parts: [
            { label: "a", prompt: "State the object test.", marks: 1 },
            { label: "b", prompt: "Apply the test to a newspaper as an object under the theme 'What counts as knowledge?'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Object selection", statement: "An object passes the test if it genuinely raises a knowledge question about the theme." },
            ],
            steps: [
              { part: "a", reasoning: "Object test: does this object genuinely raise a knowledge question about the theme?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A newspaper is physical and accessible.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It mediates knowledge claims: selection, framing and authority of news.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It passes: it raises questions about how we come to know current events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Does the object genuinely raise a knowledge question about the theme? (b) A newspaper passes — it raises questions about mediated knowledge and credibility.",
            commonErrors: ["Accepting any object related to the theme without testing whether it raises a knowledge question."],
          },
        },
        {
          id: "tok-u3-l32c1q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student chooses a poster about science as an exhibition object. What is the likely problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Posters are always too colourful" },
              { id: "b", text: "It is an image or text rather than a physical object" },
              { id: "c", text: "Science is never allowed as a theme" },
              { id: "d", text: "The poster is too expensive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Object requirement", statement: "Exhibition objects must be real-world physical items, not images or texts alone." },
            ],
            steps: [
              { reasoning: "A poster is essentially a printed image/text representation.", marks: 1, markCode: "M" },
              { reasoning: "The rules exclude images or texts alone as objects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) identifies the problem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It is an image or text rather than a physical object",
            commonErrors: ["Treating any printed material as a valid object."],
          },
        },
        {
          id: "tok-u3-l32c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the constraint of selecting only three objects for the exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Three-object constraint", statement: "Selecting three objects forces prioritisation and depth within a strict format." },
            ],
            steps: [
              { reasoning: "For: three objects forces students to choose the most illuminating cases rather than list many.", marks: 1, markCode: "M" },
              { reasoning: "For: it keeps the assessment manageable within class time.", marks: 1, markCode: "M" },
              { reasoning: "Against: three objects may not cover the theme's full range, limiting breadth.", marks: 1, markCode: "R" },
              { reasoning: "Against: a weak or tangential object can dominate one third of the assessment.", marks: 1, markCode: "R" },
              { reasoning: "The constraint rewards judgement in selection more than coverage.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: a reasonable constraint that tests selection and focus, at the cost of comprehensiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The three-object limit enforces focus and prioritisation but sacrifices breadth; it rewards careful selection.",
            commonErrors: ["Assuming more objects would automatically produce a better exhibition."],
          },
        },
        {
          id: "tok-u3-l32c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the design of the TOK exhibition as an assessment.",
          parts: [
            { label: "a", prompt: "State the purposes the exhibition is designed to serve.", marks: 3 },
            { label: "b", prompt: "Describe the formal constraints placed on students.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the format achieves those purposes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition design", statement: "The exhibition tests applied TOK thinking through constrained object-based commentary." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose: test application of TOK concepts to concrete real-world cases.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Purpose: assess ability to construct and use knowledge questions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Purpose: complement the essay by testing concise, applied analysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Constraints: one of 32 themes, three physical objects, 200–300 word commentaries.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Constraints: internal assessment completed in class.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Constraints: objects and commentaries must be submitted together.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The format succeeds in forcing concrete application but limits depth of argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: an effective applied assessment that complements rather than replaces extended writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Applied TOK thinking, KQ construction, concise analysis. (b) Theme, 3 objects, 200–300 word commentaries, internal. (c) Effective but limited in depth.",
            commonErrors: ["Describing requirements without linking them to assessment purposes."],
          },
        },
        {
          id: "tok-u3-l32c1q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the three components required for a TOK exhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhibition components", statement: "Theme, three objects and three commentaries." },
            ],
            steps: [
              { reasoning: "One prescribed theme chosen from 32 options.", marks: 1, markCode: "M" },
              { reasoning: "Three real-world physical objects.", marks: 1, markCode: "M" },
              { reasoning: "Three commentaries of 200–300 words each linking objects to the theme via knowledge questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A theme, three objects, and three commentaries linking them through knowledge questions.",
            commonErrors: ["Omitting the commentaries or the theme."],
          },
        },
        {
          id: "tok-u3-l32c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The TOK exhibition is typically completed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As an external examination" },
              { id: "b", text: "Internally, usually in a supervised classroom session" },
              { id: "c", text: "Anonymously online" },
              { id: "d", text: "By the examiner on the student's behalf" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhibition format", statement: "The exhibition is internal assessment, normally completed in class." },
            ],
            steps: [
              { reasoning: "Internal assessment means it is marked within the school, not externally examined.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Internally, usually in a supervised classroom session",
            commonErrors: ["Confusing internal assessment with external examination."],
          },
        },
        {
          id: "tok-u3-l32c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the TOK exhibition and the TOK essay as measures of understanding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition vs essay", statement: "Both assess TOK thinking but at different scales and with different constraints." },
            ],
            steps: [
              { reasoning: "The essay allows extended, abstract argument over 1200–1600 words.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition requires concise application of TOK thinking to three concrete objects.", marks: 1, markCode: "M" },
              { reasoning: "The essay can develop nuance; the exhibition tests selection, focus and concision.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition's brevity risks superficiality that the essay's length avoids.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: together they give a fuller picture than either alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The essay measures extended argument; the exhibition measures concise applied analysis — complementary measures of TOK understanding.",
            commonErrors: ["Assuming one component is a simpler version of the other."],
          },
        },
      ],
    },
    {
      id: "tok-u3-exhibition-commentary",
      title: "Writing the exhibition commentary",
      skill: "Write a focused 200–300 word commentary linking an object to a knowledge question.",
      lesson: {
        sections: [
          {
            heading: "Structure of a commentary",
            body: "A commentary (200–300 words) should: introduce the object and theme; pose a **knowledge question**; explain how the object illuminates that question; and conclude with a reasoned judgement. Every sentence should serve the knowledge question — there is no room for description alone.",
          },
          {
            heading: "Linking object to knowledge",
            body: "Do not just describe the object — analyse what it reveals about knowledge. A thermometer raises questions about instrument-mediated vs direct perception. A diary raises questions about memory and self-knowledge. The object is evidence for a claim about how we know.",
          },
          {
            heading: "Common mistakes",
            body: "Avoid: describing the object without a knowledge question; using the object as mere illustration rather than evidence; exceeding the word count; ignoring the theme. The commentary must be analytical, not descriptive.",
          },
        ],
        keyFormulas: [
          { name: "Commentary structure", statement: "Object + theme → knowledge question → analysis → judgement (200–300 words)" },
          { name: "Key rule", statement: "Analyse what the object reveals about knowledge, not just what it is" },
        ],
        workedExample: {
          problem: "Write a commentary opening for a thermometer under theme 'How do we know?'.",
          solution: "'This thermometer does not measure temperature directly — it measures the expansion of mercury, which we interpret as temperature. Does this instrument-mediated knowledge differ from direct perception? It raises the question of whether instruments extend or distort our access to reality.'",
        },
      },
      questions: [
        {
          id: "tok-u3-l32c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The recommended word count for each exhibition commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50–100 words" },
              { id: "b", text: "200–300 words" },
              { id: "c", text: "500–800 words" },
              { id: "d", text: "1000+ words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commentary length", statement: "Each exhibition commentary is 200–300 words." },
            ],
            steps: [
              { reasoning: "The IB specifies 200–300 words per commentary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 200–300 words",
            commonErrors: ["Writing too long or too short."],
          },
        },
        {
          id: "tok-u3-l32c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between describing an object and analysing it in a commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs description", statement: "Description states what the object is; analysis explains what it reveals about knowledge." },
            ],
            steps: [
              { reasoning: "Description: 'This is a thermometer made of glass and mercury.'", marks: 1, markCode: "M" },
              { reasoning: "Analysis: 'It raises whether instrument-mediated knowledge is more reliable than perception.'", marks: 1, markCode: "M" },
              { reasoning: "Only analysis connects the object to a knowledge question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description states facts; analysis links the object to a knowledge question about how we know.",
            commonErrors: ["Writing purely descriptive commentaries."],
          },
        },
        {
          id: "tok-u3-l32c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the strengths and weaknesses of the exhibition format.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exhibition format", statement: "Concise applied assessment with strengths in accessibility and weaknesses in depth." },
            ],
            steps: [
              { reasoning: "Strength: accessible — students engage with everyday objects and knowledge questions.", marks: 1, markCode: "M" },
              { reasoning: "Strength: tests applied understanding in a controlled classroom setting.", marks: 1, markCode: "M" },
              { reasoning: "Weakness: 200–300 words limits depth; object choice constrains argument.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: effective supplement to the essay but cannot replace extended argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The exhibition is accessible and applied but limited by brevity; it complements rather than replaces the essay.",
            commonErrors: ["Claiming the exhibition is either perfect or useless."],
          },
        },
        {
          id: "tok-u3-l32c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an effective exhibition commentary.",
          parts: [
            { label: "a", prompt: "Explain the required structure of a commentary.", marks: 2 },
            { label: "b", prompt: "Describe how to link an object to a knowledge question.", marks: 3 },
            { label: "c", prompt: "Evaluate what distinguishes excellent from adequate commentaries.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commentary quality", statement: "Analytical, focused, and explicitly linked to knowledge questions." },
            ],
            steps: [
              { part: "a", reasoning: "Introduce object and theme; pose knowledge question; analyse; conclude.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Must be 200–300 words.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identify what the object reveals about a way of knowing or area of knowledge.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Connect the object's function to a knowledge claim or problem.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use the object as evidence, not illustration.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Excellent: clear KQ, specific analysis, nuanced conclusion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Adequate: describes object, mentions theme, weak knowledge link.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: the knowledge question is the test of quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Structure: intro-KQ-analysis-conclusion. (b) Object as evidence for knowledge claim. (c) KQ clarity distinguishes quality.",
            commonErrors: ["Describing rather than analysing the object."],
          },
        },
        {
          id: "tok-u3-l32c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Every exhibition commentary must explicitly include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary of the theme" },
              { id: "b", text: "A knowledge question" },
              { id: "c", text: "A list of academic sources" },
              { id: "d", text: "A personal anecdote" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commentary requirement", statement: "Each commentary must link its object to the theme through a knowledge question." },
            ],
            steps: [
              { reasoning: "The commentary's analytical core is the knowledge question it poses about the object.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A knowledge question",
            commonErrors: ["Writing commentary without ever posing a knowledge question."],
          },
        },
        {
          id: "tok-u3-l32c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a commentary, the object should function as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decoration for the theme" },
              { id: "b", text: "Evidence for a knowledge claim" },
              { id: "c", text: "A mere illustration" },
              { id: "d", text: "Background context only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Object as evidence", statement: "The object is evidence for a claim about how we know, not just an illustration." },
            ],
            steps: [
              { reasoning: "The commentary analyses what the object reveals about knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the object serves as evidence for a knowledge claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evidence for a knowledge claim",
            commonErrors: ["Using the object as illustration rather than evidence."],
          },
        },
        {
          id: "tok-u3-l32c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which opening sentence best begins an analytical commentary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "This object is red and made of plastic." },
              { id: "b", text: "This thermometer measures the expansion of mercury rather than temperature directly — what does instrument-mediated knowledge reveal?" },
              { id: "c", text: "Objects are interesting things to study." },
              { id: "d", text: "My grandmother once owned one." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical opening", statement: "A strong opening immediately connects the object to a knowledge problem." },
            ],
            steps: [
              { reasoning: "Only (b) identifies how the object mediates knowledge and poses a knowledge question.", marks: 1, markCode: "M" },
              { reasoning: "The other options describe appearance or personal association without engaging knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The thermometer sentence linking function to a knowledge question",
            commonErrors: ["Opening with physical description instead of the knowledge angle."],
          },
        },
        {
          id: "tok-u3-l32c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why every sentence in a commentary should serve the knowledge question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focused commentary", statement: "The 200–300 word limit requires every sentence to advance the analysis of the knowledge question." },
            ],
            steps: [
              { reasoning: "The word limit leaves no room for description that does not bear on knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Descriptive sentences waste space that could develop the argument.", marks: 1, markCode: "M" },
              { reasoning: "Focused writing produces a clearer, more convincing commentary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Every sentence must advance the knowledge question because the tight word limit demands disciplined, purposeful analysis.",
            commonErrors: ["Filling word count with description of the object."],
          },
        },
        {
          id: "tok-u3-l32c2q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which knowledge question best suits a diary as an exhibition object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is a diary?" },
              { id: "b", text: "To what extent can personal records be trusted as knowledge of the past?" },
              { id: "c", text: "Who keeps diaries?" },
              { id: "d", text: "Are diaries popular?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "KQ construction", statement: "Link the object to a way of knowing and a problem of knowledge." },
            ],
            steps: [
              { reasoning: "A diary relates to memory, record-keeping and self-knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) connects that to a problem of knowledge: reliability of personal records.", marks: 1, markCode: "M" },
              { reasoning: "The other options ask factual questions, not knowledge questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To what extent can personal records be trusted as knowledge of the past?",
            commonErrors: ["Writing a question about diaries in general rather than about knowledge."],
          },
        },
        {
          id: "tok-u3-l32c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Examine the move from description to analysis in an exhibition commentary.",
          parts: [
            { label: "a", prompt: "Define what description of an object involves.", marks: 1 },
            { label: "b", prompt: "Contrast description with analysis using a thermometer example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs description", statement: "Description states facts; analysis explains what the object reveals about knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Description states what the object is: its physical features and function.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Description: 'The thermometer contains mercury that expands with heat.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysis: 'It raises whether instrument-mediated knowledge differs from direct perception.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only the analytical move connects the object to a problem of knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Description states physical facts. (b) Analysis interprets what the object reveals about how we know — e.g. instrument vs perception.",
            commonErrors: ["Stopping at description and never reaching the knowledge question."],
          },
        },
        {
          id: "tok-u3-l32c2q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A commentary describes its object thoroughly but never poses a knowledge question. This commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excellent, because detail is rewarded" },
              { id: "b", text: "Inadequate — it fails the analytical requirement" },
              { id: "c", text: "Too short for assessment" },
              { id: "d", text: "Perfect as written" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commentary requirement", statement: "A commentary must analyse what the object reveals about knowledge through a knowledge question." },
            ],
            steps: [
              { reasoning: "The knowledge question is the core analytical requirement of a commentary.", marks: 1, markCode: "M" },
              { reasoning: "Description without a knowledge question cannot demonstrate TOK understanding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Inadequate — it fails the analytical requirement",
            commonErrors: ["Equating thorough description with analytical quality."],
          },
        },
        {
          id: "tok-u3-l32c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that shorter formats force better writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constraint and quality", statement: "Constraints can enforce focus but also limit the depth of treatment possible." },
            ],
            steps: [
              { reasoning: "For: the 200–300 word limit forces concision and prevents padding.", marks: 1, markCode: "M" },
              { reasoning: "For: students must prioritise the most relevant points.", marks: 1, markCode: "M" },
              { reasoning: "Against: brevity can produce superficial analysis that a longer format would allow to develop.", marks: 1, markCode: "R" },
              { reasoning: "The essay's greater length permits nuance that commentaries cannot achieve.", marks: 1, markCode: "R" },
              { reasoning: "Constraints discipline writing but do not guarantee depth.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: shorter formats enforce focus, not necessarily better writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The word limit enforces concision and prioritisation but can sacrifice depth; constraint aids discipline, not necessarily quality.",
            commonErrors: ["Assuming brevity automatically equals rigour."],
          },
        },
        {
          id: "tok-u3-l32c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine what distinguishes excellent exhibition commentaries from adequate ones.",
          parts: [
            { label: "a", prompt: "Describe the features of an adequate commentary.", marks: 3 },
            { label: "b", prompt: "Describe the features that elevate a commentary to excellent.", marks: 3 },
            { label: "c", prompt: "Evaluate how a student should improve their own commentary practice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commentary quality", statement: "Quality is measured by clarity of the knowledge question and depth of the object-knowledge link." },
            ],
            steps: [
              { part: "a", reasoning: "Adequate: identifies object and theme, poses a knowledge question, links them briefly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adequate: stays within word count and reaches a simple conclusion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adequate: some description of the object is present.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Excellent: poses a precise, non-obvious knowledge question.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Excellent: analyses specific features of the object as evidence for the claim.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Excellent: reaches a nuanced, justified judgement within the limit.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Improve by practising the description-to-analysis move and testing each draft against its knowledge question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Seek feedback on whether the object is used as evidence rather than illustration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Adequate: KQ present, basic link, within limit. (b) Excellent: precise KQ, object as evidence, nuanced conclusion. (c) Practise the analytical move and test drafts against the KQ.",
            commonErrors: ["Believing longer or more detailed commentaries are automatically better."],
          },
        },
        {
          id: "tok-u3-l32c2q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the four-part structure of an exhibition commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commentary structure", statement: "Introduce object and theme, pose a knowledge question, analyse, conclude." },
            ],
            steps: [
              { reasoning: "Introduce the object and connect it to the theme.", marks: 1, markCode: "M" },
              { reasoning: "Pose a knowledge question about what the object reveals.", marks: 1, markCode: "M" },
              { reasoning: "Analyse how the object bears on that question, then conclude with a judgement — within 200–300 words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Introduction (object + theme), knowledge question, analysis, conclusion — within 200–300 words.",
            commonErrors: ["Omitting the knowledge question or the concluding judgement."],
          },
        },
        {
          id: "tok-u3-l32c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The theme in the TOK exhibition functions as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A random label for grouping" },
              { id: "b", text: "The knowledge context that unifies the three objects and commentaries" },
              { id: "c", text: "A grading rubric" },
              { id: "d", text: "A decorative heading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme function", statement: "The theme provides the shared knowledge context for all three commentaries." },
            ],
            steps: [
              { reasoning: "The theme frames the knowledge issue each object and commentary must address.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The knowledge context that unifies the three objects and commentaries",
            commonErrors: ["Treating the theme as optional rather than the organising context."],
          },
        },
        {
          id: "tok-u3-l32c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare an exhibition commentary with a paragraph of a TOK essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commentary vs essay", statement: "Both must argue about knowledge, but the commentary compresses analysis around a concrete object." },
            ],
            steps: [
              { reasoning: "Both must connect a claim about knowledge to evidence and reasoning.", marks: 1, markCode: "M" },
              { reasoning: "The essay paragraph can develop an idea at length; the commentary must compress into 200–300 words.", marks: 1, markCode: "M" },
              { reasoning: "The commentary is anchored to a physical object as its evidence; the essay draws on broader examples.", marks: 1, markCode: "M" },
              { reasoning: "Compression risks superficiality, but also enforces economy of argument.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: the commentary tests disciplined concision where the essay tests sustained development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both argue about knowledge, but the commentary compresses analysis around one object while the essay develops ideas at greater length.",
            commonErrors: ["Expecting the same level of elaboration in both formats."],
          },
        },
      ],
    },
  ],
};
