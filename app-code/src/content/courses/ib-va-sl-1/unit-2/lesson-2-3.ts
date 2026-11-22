import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "va-u2-lesson-2-3",
  code: "2-3",
  title: "Contemporary Visual Culture",
  goal: "I CAN identify key movements, media and ideas in contemporary visual culture and relate them to students' own visual environment.",
  standards: ["Critical Studies", "Contemporary Culture"],
  vocabulary: [
    { term: "Contemporary art", definition: "Art produced from roughly the late 20th century to the present, characterised by pluralism of media and ideas." },
    { term: "Installation", definition: "An artwork that transforms a space the viewer moves through." },
    { term: "Digital art", definition: "Art made or presented using digital technology — software, screens, networks." },
    { term: "Street art / graffiti", definition: "Art made in public space, often unsanctioned, using spray paint, stencils or stickers." },
    { term: "Visual culture", definition: "The totality of images — advertising, film, social media, design — that shape how we see the world." },
    { term: "Globalisation", definition: "The increasing interconnectedness of cultures, markets and images worldwide." },
  ],
  concepts: [
    {
      id: "va-u2-contemporary-media",
      title: "Contemporary media and movements",
      skill: "Identify contemporary art forms — installation, digital, street art — and describe their defining characteristics.",
      lesson: {
        sections: [
          { heading: "Pluralism of media", body: "Contemporary art refuses a single medium: video, performance, installation, digital and social practice all count. The artwork often exists as an experience or event rather than an object. This reflects a world saturated with images where the boundary between art and visual culture blurs." },
          { heading: "Key forms", body: "**Installations** immerse the viewer in transformed space. **Digital art** uses screens, code and networks — infinitely reproducible, often participatory. **Street art** operates outside galleries, in public space, often politically charged. **Conceptual art** prioritises idea over craft." },
          { heading: "Reading contemporary work", body: "Ask: what is the medium and where is it shown? What does the form itself express? How does it engage the viewer — passive looking or active participation? Contemporary works often require context to 'decode' — the concept may be the content." },
        ],
        keyFormulas: [
          { name: "Contemporary markers", statement: "Plural media, experience over object, concept over craft, viewer participation" },
          { name: "Key forms", statement: "Installation, digital, street art, conceptual, performance" },
        ],
        workedExample: {
          problem: "An artist fills a room with hundreds of hanging plastic bottles that light up when viewers walk past. Identify two contemporary characteristics this work shows.",
          solution: "It is an installation — transforming space the viewer moves through — and it uses digital/interactive technology for participation. It also engages with visual culture and environmental themes through its materials.",
        },
      },
      questions: [
        {
          id: "va-u2-contemporary-media-q1", difficulty: "foundation", totalMarks: 2,
          stem: "An installation artwork is best described as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A printed poster series" },
            { id: "b", text: "A small sculpture on a pedestal" },
            { id: "c", text: "A framed painting hung in a gallery" },
            { id: "d", text: "A work that transforms a space the viewer moves through" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Installation", statement: "An artwork occupying and transforming a space for the viewer to enter." }],
            steps: [
              { reasoning: "Installations envelop the viewer in a transformed spatial environment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A work that transforms a space the viewer moves through",
            commonErrors: ["Confusing installation with sculpture or painting."],
          },
        },
        {
          id: "va-u2-contemporary-media-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two characteristics that distinguish contemporary art from traditional painting or sculpture.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contemporary characteristics", statement: "Plural media, conceptual priority and viewer participation define contemporary practice." }],
            steps: [
              { reasoning: "Use of non-traditional media — video, digital, found objects, performance.", marks: 1, markCode: "M" },
              { reasoning: "Prioritises concept and experience over craft or object.", marks: 1, markCode: "M" },
              { reasoning: "Often requires active viewer participation rather than passive viewing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plural media, conceptual priority and participation distinguish contemporary art.",
            commonErrors: ["Defining contemporary art only by date rather than practice."],
          },
        },
        {
          id: "va-u2-contemporary-media-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how street art challenges traditional boundaries of what counts as art.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Street art boundaries", statement: "Public, unsanctioned, accessible work questions gallery/museum definitions of art." }],
            steps: [
              { reasoning: "It operates outside institutional spaces, reaching audiences galleries exclude.", marks: 1, markCode: "M" },
              { reasoning: "It often uses accessible visual languages — slogans, stencils, cartoon forms.", marks: 1, markCode: "M" },
              { reasoning: "Its illegality or ephemerality raises questions about ownership, permanence and value.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: it expands the definition of where and for whom art exists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Street art challenges institutional, economic and spatial boundaries of art.",
            commonErrors: ["Dismissing street art as mere vandalism without analysis."],
          },
        },
        {
          id: "va-u2-contemporary-media-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that contemporary art is harder to analyse than historical art.",
          parts: [
            { label: "a", prompt: "Identify two challenges in analysing contemporary art.", marks: 2 },
            { label: "b", prompt: "Explain how context and artist statements help analysis.", marks: 2 },
            { label: "c", prompt: "Assess whether the claim of 'difficulty' is justified or overstated.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Analysing contemporary work", statement: "Concept and context matter more when craft conventions don't apply." }],
            steps: [
              { part: "a", reasoning: "Unfamiliar media, absence of established conventions, dependence on context — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two challenges correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Artist statements and curatorial context decode concepts that formal analysis alone cannot.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the role of context in contemporary analysis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Difficulty is real but not insurmountable — same skills apply, applied differently.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on the claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unfamiliar media and context-dependence. (b) Statements decode concept. (c) Harder in some ways, but the same analytical skills apply.",
            commonErrors: ["Claiming contemporary art cannot be analysed formally at all."],
          },
        },
        {
          id: "va-u2-contemporary-media-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Digital art is best defined as art that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Uses only traditional oil paint" },
            { id: "b", text: "Exists only inside museums" },
            { id: "c", text: "Is made or presented using digital technology such as software, screens or networks" },
            { id: "d", text: "Is always produced as a printed object" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Digital art", statement: "Art whose medium or presentation depends on digital technology." }],
            steps: [
              { reasoning: "Digital art is defined by its technological medium — software, screens, networks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Is made or presented using digital technology such as software, screens or networks",
            commonErrors: ["Limiting digital art to images printed on paper."],
          },
        },
        {
          id: "va-u2-contemporary-media-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain two ways performance art challenges the idea that an artwork must be a permanent object.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ephemerality", statement: "Performance exists as event in time; documentation substitutes for the object." }],
            steps: [
              { reasoning: "The work exists as an action unfolding in time, not as a portable object.", marks: 1, markCode: "M" },
              { reasoning: "Photographs, video or certificates become the only surviving record.", marks: 1, markCode: "M" },
              { reasoning: "Because each performance differs, the work resists collection and fixed value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Performance art is an event; documentation, not object, carries it into the future.",
            commonErrors: ["Judging performance art as 'incomplete' without a physical product."],
          },
        },
        {
          id: "va-u2-contemporary-media-q7", difficulty: "core", totalMarks: 2,
          stem: "Conceptual art prioritises:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Realistic depiction" },
            { id: "b", text: "Technical finish and craft" },
            { id: "c", text: "Large physical scale" },
            { id: "d", text: "The idea or concept over craft and object" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conceptual art", statement: "The idea is the artwork; form is secondary to concept." }],
            steps: [
              { reasoning: "Conceptual practice demotes craft and object in favour of the governing idea.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The idea or concept over craft and object",
            commonErrors: ["Judging conceptual works by traditional craft criteria."],
          },
        },
        {
          id: "va-u2-contemporary-media-q8", difficulty: "core", totalMarks: 3,
          stem: "Describe how an installation engages viewers differently from a painting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Installation experience", statement: "Installations envelop the viewer in space and time rather than presenting a fixed image." }],
            steps: [
              { reasoning: "The viewer moves through and activates the work, choosing paths and viewpoints.", marks: 1, markCode: "M" },
              { reasoning: "The experience is embodied and temporal — it unfolds as the viewer moves.", marks: 1, markCode: "M" },
              { reasoning: "Meaning emerges from the encounter rather than from a fixed compositional image.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Installations are entered and activated; paintings are looked at as fixed images.",
            commonErrors: ["Analysing installations as if they were static pictures."],
          },
        },
        {
          id: "va-u2-contemporary-media-q9", difficulty: "core", totalMarks: 2,
          stem: "Contemporary art blurs the boundary with visual culture because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is cheaper to produce" },
            { id: "b", text: "It uses the same media as advertising and film" },
            { id: "c", text: "Critics refuse to discuss it" },
            { id: "d", text: "Galleries have all closed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "context", name: "Art and visual culture", statement: "Shared media and image saturation dissolve the boundary between art and everyday imagery." }],
            steps: [
              { reasoning: "Video, screens, memes and found imagery are common to both galleries and media culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It uses the same media as advertising and film",
            commonErrors: ["Explaining the boundary blur through economics rather than shared media."],
          },
        },
        {
          id: "va-u2-contemporary-media-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the medium of a contemporary work can itself carry meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Medium as meaning", statement: "The choice of video, code or found objects is expressive, not neutral." }],
            steps: [
              { reasoning: "Artists choose media deliberately — the medium is a statement, not a container.", marks: 1, markCode: "M" },
              { reasoning: "Screens comment on mediation and virtual life; recycled objects comment on consumption; live actions comment on presence.", marks: 1, markCode: "M" },
              { reasoning: "When form matches content, medium amplifies the concept.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: in contemporary practice the medium is part of the message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The medium is expressive: screens, code and found objects each carry thematic meaning.",
            commonErrors: ["Treating medium as a neutral delivery system for content."],
          },
        },
        {
          id: "va-u2-contemporary-media-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A participatory artwork is one that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Requires or invites the viewer's active involvement" },
            { id: "b", text: "Forbids any viewer contact" },
            { id: "c", text: "Is always digital" },
            { id: "d", text: "Hangs flat on a wall" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Participation", statement: "The viewer becomes co-producer of the work's event." }],
            steps: [
              { reasoning: "Participatory works depend on viewer action to complete the experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Requires or invites the viewer's active involvement",
            commonErrors: ["Confusing participation with merely looking at interactive displays."],
          },
        },
        {
          id: "va-u2-contemporary-media-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how found objects or readymades challenge traditional definitions of artistic skill.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Readymade", statement: "Selecting rather than crafting shifts artistic value from hand to idea and context." }],
            steps: [
              { reasoning: "The artist's role shifts from maker to selector — choosing and framing an object.", marks: 1, markCode: "M" },
              { reasoning: "Value moves from manual skill to concept, context and institutional framing.", marks: 1, markCode: "M" },
              { reasoning: "If anyone could select, questions of authorship and originality become unavoidable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: skill is redefined, not abolished — judgement replaces dexterity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Readymades relocate skill from hand to judgement, challenging craft-based definitions of art.",
            commonErrors: ["Dismissing found objects as 'not real art' without engaging the challenge."],
          },
        },
        {
          id: "va-u2-contemporary-media-q13", difficulty: "core", totalMarks: 2,
          stem: "A defining feature of street art is that it:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is guaranteed to last permanently" },
            { id: "b", text: "Uses carved marble" },
            { id: "c", text: "Is always commissioned by a city" },
            { id: "d", text: "Operates in public space outside galleries, often unsanctioned" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Street art", statement: "Public-space work outside institutional channels, often ephemeral or unsanctioned." }],
            steps: [
              { reasoning: "Street art's defining trait is its location and institutional position, not its materials.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Operates in public space outside galleries, often unsanctioned",
            commonErrors: ["Equating street art with commissioned public murals."],
          },
        },
        {
          id: "va-u2-contemporary-media-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the challenges of analysing time-based or digital contemporary works.",
          parts: [
            { label: "a", prompt: "Identify two challenges in analysing a digital or time-based work.", marks: 2 },
            { label: "b", prompt: "Explain how documentation affects the meaning of ephemeral work.", marks: 2 },
            { label: "c", prompt: "Assess whether 'anything can be art' makes analysis impossible.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Analysing ephemeral work", statement: "Time, documentation and concept replace object and craft as analytical targets." }],
            steps: [
              { part: "a", reasoning: "Unfamiliar media, absence of fixed image, dependence on context and duration — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two challenges correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Documentation freezes an event into an object, changing what the work 'is' for later viewers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains documentation's effect on meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pluralism widens the field but does not abolish criteria — concept, context and form still yield analysis.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on the 'anything goes' objection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Time-dependence and documentation. (b) Documentation transforms event into object. (c) Analysis remains possible through concept and context.",
            commonErrors: ["Claiming ephemeral work cannot be analysed at all."],
          },
        },
        {
          id: "va-u2-contemporary-media-q15", difficulty: "core", totalMarks: 2,
          stem: "The reproducibility of digital art primarily challenges:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The requirement of gallery walls" },
            { id: "b", text: "The skill of drawing" },
            { id: "c", text: "The need for picture frames" },
            { id: "d", text: "The idea of uniqueness and originality as sources of value" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reproducibility", statement: "Infinite copies shift authenticity from uniqueness to provenance and context." }],
            steps: [
              { reasoning: "Unlimited copying undermines uniqueness, so value shifts to provenance, edition and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The idea of uniqueness and originality as sources of value",
            commonErrors: ["Assuming digital copies are automatically worthless or identical in status."],
          },
        },
        {
          id: "va-u2-contemporary-media-q16", difficulty: "foundation", totalMarks: 2,
          stem: "Which is NOT typically a characteristic of contemporary art practice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Concept over craft" },
            { id: "b", text: "Pluralism of media" },
            { id: "c", text: "Strict adherence to Renaissance linear perspective" },
            { id: "d", text: "Viewer participation" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contemporary markers", statement: "Plural media, concept and participation define the field." }],
            steps: [
              { reasoning: "Contemporary practice embraces plural media and participation rather than fixed Renaissance conventions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Strict adherence to Renaissance linear perspective",
            commonErrors: ["Assuming all contemporary art rejects all earlier conventions."],
          },
        },
      ],
    },
    {
      id: "va-u2-visual-culture",
      title: "Visual culture and global images",
      skill: "Analyse how advertising, film, social media and global media form a shared visual culture that shapes perception.",
      lesson: {
        sections: [
          { heading: "Images everywhere", body: "We live inside visual culture: advertisements, film stills, memes, app interfaces, news images, product design. These images train our expectations of beauty, success, gender and desire. Analysing them uses the same formal skills as analysing paintings — composition, colour, gaze, text-image relations." },
          { heading: "Power and persuasion", body: "Advertising and propaganda construct idealised realities to sell products or ideas. Techniques include aspirational imagery, repetition, celebrity association and targeted messaging. Recognising these constructions is a form of visual literacy — the ability to 'read' images critically." },
          { heading: "Globalisation and hybridity", body: "Digital media spread images instantly worldwide, creating hybrid visual cultures: K-pop aesthetics influence fashion everywhere; local traditions remix into global styles. Artists respond by quoting, critiquing or participating in this image flow." },
        ],
        keyFormulas: [
          { name: "Visual literacy", statement: "The ability to read, interpret and critique images in media" },
          { name: "Persuasion techniques", statement: "Aspirational imagery, repetition, association, targeted messaging" },
        ],
        workedExample: {
          problem: "An advertisement shows a model on a beach with a soft-focus background and the slogan 'Be free'. Identify two persuasion techniques.",
          solution: "Aspirational imagery links the product to freedom and an idealised lifestyle; soft-focus composition directs attention to the product while creating desire; the slogan tells the viewer how to feel about what they see.",
        },
      },
      questions: [
        {
          id: "va-u2-visual-culture-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Visual literacy is best defined as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The ability to interpret and critique images in media" },
            { id: "b", text: "The ability to draw well" },
            { id: "c", text: "Knowing famous artists' names" },
            { id: "d", text: "The skill of photo editing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Visual literacy", statement: "Critical ability to read and interpret images across media." }],
            steps: [
              { reasoning: "Visual literacy is the critical skill of interpreting and questioning images.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The ability to interpret and critique images in media",
            commonErrors: ["Equating visual literacy with technical drawing skill."],
          },
        },
        {
          id: "va-u2-visual-culture-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two techniques advertisers use to persuade through images.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Persuasion techniques", statement: "Aspirational imagery, association, repetition and targeted messaging persuade." }],
            steps: [
              { reasoning: "Aspirational imagery links products to idealised lifestyles or emotions.", marks: 1, markCode: "M" },
              { reasoning: "Association with admired figures or contexts transfers positive feelings to the product.", marks: 1, markCode: "M" },
              { reasoning: "Repetition and targeted messaging reinforce desire across media.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aspirational imagery, association and repetition persuade through constructed desire.",
            commonErrors: ["Listing techniques without explaining the persuasion mechanism."],
          },
        },
        {
          id: "va-u2-visual-culture-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how globalisation has changed the visual culture students encounter daily.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Globalised visual culture", statement: "Digital media spreads styles and images across borders, creating hybrids." }],
            steps: [
              { reasoning: "Social media distributes images globally within seconds, flattening regional differences.", marks: 1, markCode: "M" },
              { reasoning: "Styles hybridise — e.g. K-pop aesthetics, streetwear, meme formats travel worldwide.", marks: 1, markCode: "M" },
              { reasoning: "Local traditions are quoted, remixed and sometimes appropriated in global image flows.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: students navigate a hybrid, fast-moving visual environment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Global media creates hybrid, fast-moving visual cultures shaped by cross-border flows.",
            commonErrors: ["Describing visual culture as static or purely local."],
          },
        },
        {
          id: "va-u2-visual-culture-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the importance of visual literacy in contemporary society.",
          parts: [
            { label: "a", prompt: "Identify two areas where visual literacy matters in daily life.", marks: 2 },
            { label: "b", prompt: "Explain how image analysis skills apply to media beyond fine art.", marks: 2 },
            { label: "c", prompt: "Assess whether visual literacy can protect viewers from manipulation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Visual literacy", statement: "Critical image-reading skills apply to advertising, news and social media." }],
            steps: [
              { part: "a", reasoning: "Advertising, social media, news imagery, app design — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two areas correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formal analysis — composition, colour, gaze, text-image relation — works on any image.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains transfer of formal skills to media analysis.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Visual literacy reveals construction and intent, reducing but not eliminating susceptibility to persuasion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced judgement on protective value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Advertising, social media, news. (b) Formal skills transfer to all images. (c) It reduces manipulation but is not immunity.",
            commonErrors: ["Claiming visual literacy makes viewers immune to persuasion."],
          },
        },
        {
          id: "va-u2-visual-culture-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Propaganda is best defined as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personal diary illustration" },
            { id: "b", text: "Persuasive imagery or messages designed to promote a political or ideological agenda" },
            { id: "c", text: "Abstract decorative pattern" },
            { id: "d", text: "Neutral news reporting" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Propaganda", statement: "Images constructed to advance an agenda rather than to inform neutrally." }],
            steps: [
              { reasoning: "Propaganda is defined by persuasive intent toward a political or ideological goal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Persuasive imagery or messages designed to promote a political or ideological agenda",
            commonErrors: ["Confusing propaganda with all political imagery or all advertising."],
          },
        },
        {
          id: "va-u2-visual-culture-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain how social media images can shape users' self-image and expectations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Curated self-image", statement: "Edited images model idealised bodies and lifestyles that users internalise." }],
            steps: [
              { reasoning: "Curated, filtered images present idealised bodies, homes and experiences as normal.", marks: 1, markCode: "M" },
              { reasoning: "Constant exposure trains comparison against unattainable standards.", marks: 1, markCode: "M" },
              { reasoning: "Users internalise these norms and perform versions of themselves for an audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Social media images set internalised standards that shape self-image and behaviour.",
            commonErrors: ["Describing social media as purely entertainment without ideological effect."],
          },
        },
        {
          id: "va-u2-visual-culture-q7", difficulty: "core", totalMarks: 2,
          stem: "A meme functions in visual culture primarily as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A traditional pigment" },
            { id: "b", text: "A legal document" },
            { id: "c", text: "A religious icon" },
            { id: "d", text: "A rapidly reproduced, remixed image carrying shared cultural meaning" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Meme", statement: "A reproducible, mutable image format that encodes shared jokes or references." }],
            steps: [
              { reasoning: "Memes are defined by rapid replication and mutation within a shared culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A rapidly reproduced, remixed image carrying shared cultural meaning",
            commonErrors: ["Treating memes as random images rather than coded cultural units."],
          },
        },
        {
          id: "va-u2-visual-culture-q8", difficulty: "core", totalMarks: 3,
          stem: "Describe how advertising constructs an idealised reality rather than documenting one.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Constructed reality", statement: "Advertising selects, retouches and frames imagery to manufacture desire." }],
            steps: [
              { reasoning: "Advertisers select flattering models, settings and moments — nothing unplanned enters the frame.", marks: 1, markCode: "M" },
              { reasoning: "Lighting, retouching, colour grading and slogans shape how the scene feels.", marks: 1, markCode: "M" },
              { reasoning: "The product is then associated with happiness, freedom or status that the image constructs, not records.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advertising builds an idealised scene and attaches the product to its constructed emotions.",
            commonErrors: ["Accepting advert imagery as a straightforward record of reality."],
          },
        },
        {
          id: "va-u2-visual-culture-q9", difficulty: "core", totalMarks: 2,
          stem: "Hybrid visual culture refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Symmetrical composition" },
            { id: "b", text: "Black-and-white photography" },
            { id: "c", text: "Styles and images blending across cultures through global media" },
            { id: "d", text: "Art that mixes oil and acrylic paint" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "context", name: "Hybrid visual culture", statement: "Global media flow blends regional styles into new mixed forms." }],
            steps: [
              { reasoning: "Hybrid visual culture results from cross-border circulation of styles and images.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Styles and images blending across cultures through global media",
            commonErrors: ["Interpreting 'hybrid' as a technique rather than a cultural condition."],
          },
        },
        {
          id: "va-u2-visual-culture-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Analyse how an advertisement's composition and gaze can direct and persuade the viewer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Gaze and composition in adverts", statement: "Eye-lines, hierarchy and text-image relations steer attention and meaning." }],
            steps: [
              { reasoning: "A model's gaze or the product's placement anchors the viewer's first fixation.", marks: 1, markCode: "M" },
              { reasoning: "Colour contrast, scale and lighting create a hierarchy that separates product from background.", marks: 1, markCode: "M" },
              { reasoning: "Slogans and text-image relations then tell the viewer how to feel about what they see.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: formal analysis reveals the mechanics of persuasion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gaze, hierarchy and slogan work together to direct attention and assign meaning.",
            commonErrors: ["Describing the advert's subject without analysing its visual mechanics."],
          },
        },
        {
          id: "va-u2-visual-culture-q11", difficulty: "foundation", totalMarks: 2,
          stem: "In advertisements, a model looking directly at the viewer typically:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is an accidental photographic effect" },
            { id: "b", text: "Blocks the product from view" },
            { id: "c", text: "Creates direct address, making the viewer feel seen and personally implicated" },
            { id: "d", text: "Indicates the model's shyness" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Direct gaze", statement: "Eye contact with the viewer creates address and engagement." }],
            steps: [
              { reasoning: "A returned gaze addresses the viewer personally, breaking the fourth wall of the advert.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Creates direct address, making the viewer feel seen and personally implicated",
            commonErrors: ["Reading the gaze as incidental rather than a deliberate technique."],
          },
        },
        {
          id: "va-u2-visual-culture-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how appropriation and remixing function in contemporary visual culture.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Appropriation and remix", statement: "Reusing existing images transforms their meaning through new context." }],
            steps: [
              { reasoning: "Artists and meme-makers reuse existing images to comment on, parody or transform them.", marks: 1, markCode: "M" },
              { reasoning: "Shifting context changes the original message — the same image can mean its opposite.", marks: 1, markCode: "M" },
              { reasoning: "This raises questions about ownership, originality and who controls an image's meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: visual culture is built on shared, mutable images rather than fixed originals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Remixing recontextualises images, changing their meaning and questioning ownership.",
            commonErrors: ["Treating appropriation as mere copying without transformation."],
          },
        },
        {
          id: "va-u2-visual-culture-q13", difficulty: "core", totalMarks: 2,
          stem: "A common advertising technique using phrases like 'Only 3 left!' exploits:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Symmetrical balance" },
            { id: "b", text: "Scarcity and urgency to pressure quick decisions" },
            { id: "c", text: "Linear perspective" },
            { id: "d", text: "Chiaroscuro lighting" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scarcity and urgency", statement: "Limited-availability claims pressure impulsive purchase decisions." }],
            steps: [
              { reasoning: "Scarcity messaging exploits fear of missing out rather than visual form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scarcity and urgency to pressure quick decisions",
            commonErrors: ["Confusing verbal persuasion techniques with formal visual techniques."],
          },
        },
        {
          id: "va-u2-visual-culture-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the role of visual literacy in navigating persuasive imagery.",
          parts: [
            { label: "a", prompt: "Identify two ways advertising shapes viewers' expectations of beauty or success.", marks: 2 },
            { label: "b", prompt: "Explain how news imagery frames events and shapes response.", marks: 2 },
            { label: "c", prompt: "Assess whether visual literacy can fully protect viewers from manipulation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical image-reading", statement: "Recognising construction and intent reduces but does not eliminate persuasion." }],
            steps: [
              { part: "a", reasoning: "Repeated idealised bodies and lifestyles set beauty norms; aspirational settings equate products with success — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two ways correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Camera angle, cropping, colour and caption choices frame events emotionally and politically.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains how formal choices in news images direct interpretation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Visual literacy reveals construction and intent, reducing susceptibility but not granting immunity — emotion still operates.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced judgement on protective value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Beauty norms and aspirational success. (b) Framing directs emotional response. (c) It reduces manipulation but is not immunity.",
            commonErrors: ["Claiming visual literacy makes viewers immune to persuasion."],
          },
        },
        {
          id: "va-u2-visual-culture-q15", difficulty: "core", totalMarks: 2,
          stem: "Visual culture trains our expectations of beauty and success primarily through:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Repeated exposure to idealised imagery across media" },
            { id: "b", text: "Picture frame materials" },
            { id: "c", text: "Formal art education in schools" },
            { id: "d", text: "Museum ticket prices" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Norm formation", statement: "Repeated exposure to idealised images installs standards that feel natural." }],
            steps: [
              { reasoning: "Advertising, film and social media repeat similar ideals until they feel normal rather than constructed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Repeated exposure to idealised imagery across media",
            commonErrors: ["Describing visual culture as neutral background rather than norm-setting."],
          },
        },
        {
          id: "va-u2-visual-culture-q16", difficulty: "core", totalMarks: 2,
          stem: "Visual literacy protects viewers from manipulation primarily by:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Removing emotion from viewing" },
            { id: "b", text: "Enabling them to recognise construction, intent and persuasion techniques" },
            { id: "c", text: "Improving eyesight" },
            { id: "d", text: "Banning all advertising" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Visual literacy as defence", statement: "Critical reading exposes how images are constructed to persuade." }],
            steps: [
              { reasoning: "Visual literacy works by revealing technique and intent, not by eliminating exposure or emotion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Enabling them to recognise construction, intent and persuasion techniques",
            commonErrors: ["Thinking visual literacy works by avoiding images altogether."],
          },
        },
      ],
    },
  ],
};
