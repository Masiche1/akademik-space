import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "va-u4-lesson-4-1",
  code: "4-1",
  title: "Cross-Cultural and Historical Comparison",
  goal: "I CAN compare artworks from different cultures and historical periods and explain how context shapes visual form.",
  standards: [
    "Comparative",
    "Critical Studies",
  ],
  vocabulary: [
    { term: "Cross-cultural comparison", definition: "Examining artworks from different cultural traditions to identify shared and distinct approaches." },
    { term: "Cultural context", definition: "The beliefs, values, rituals and social structures that shape artistic production in a society." },
    { term: "Period style", definition: "The characteristic visual language associated with a historical era or movement." },
    { term: "Iconography", definition: "The study of symbols and motifs and their conventional meanings within a culture." },
    { term: "Hybrid form", definition: "An artwork blending elements from multiple cultural traditions." },
    { term: "Reception context", definition: "The cultural setting in which an artwork is viewed, which shapes its meaning." },
  ],
  concepts: [
    {
      id: "va-u4-cross-cultural",
      title: "Comparing across cultures",
      skill: "Compare artworks from different cultural traditions and analyse how cultural context shapes form and meaning.",
      lesson: {
        sections: [
          {
            heading: "Why cross-cultural comparison matters",
            body: "Every culture develops visual languages shaped by its beliefs, materials, functions and values. Comparing across cultures reveals both universal human concerns (birth, death, power, identity) and culturally specific solutions. It also challenges the assumption that Western art is the default standard.",
          },
          {
            heading: "Cultural shaping of form",
            body: "Materials reflect environment: desert cultures use textiles and ceramics; forest cultures use wood and bark. Purposes reflect values: ancestral masks serve ritual; advertising serves commerce. Even 'universal' forms like the human figure are stylised differently — idealised, abstracted or realistic according to cultural convention.",
          },
          {
            heading: "Avoiding cultural bias",
            body: "Compare on the works' own terms: understand each tradition's conventions before judging. What looks 'primitive' to one viewer may be sophisticated abstraction to another. The strongest comparisons identify genuine similarities and differences without ranking cultures.",
          },
        ],
        keyFormulas: [
          { name: "Cross-cultural questions", statement: "What do these works share? How does each culture's context shape its solutions?" },
          { name: "Cultural shaping", statement: "Materials + purpose + values = culturally specific visual language" },
        ],
        workedExample: {
          problem: "Compare a medieval European altarpiece and a Japanese Buddhist scroll painting. What does each culture's context reveal?",
          solution: "The altarpiece serves communal worship in a Christian church — gold leaf signals divine radiance, hierarchical composition reflects feudal order. The scroll serves private meditation in Zen Buddhism — ink and empty space embody impermanence and restraint. Both depict sacred figures but encode different relationships between viewer, deity and cosmos.",
        },
      },
      questions: [
        {
          id: "va-u4-cross-cultural-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cross-cultural comparison of artworks primarily aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rank which culture produces better art" },
              { id: "b", text: "Identify shared concerns and culturally specific solutions" },
              { id: "c", text: "Prove Western art is superior" },
              { id: "d", text: "Catalogue different materials used" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-cultural aim", statement: "Comparison reveals universal concerns and cultural specificity without ranking." },
            ],
            steps: [
              { reasoning: "Cross-cultural comparison identifies shared human concerns and distinct cultural solutions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Identify shared concerns and culturally specific solutions",
            commonErrors: [
              "Treating comparison as ranking rather than understanding.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways cultural context shapes the materials and techniques used in art.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural materials", statement: "Available resources, ritual function and values determine medium and technique." },
            ],
            steps: [
              { reasoning: "Local materials — clay, wood, fibre, stone — reflect environment and availability.", marks: 1, markCode: "M" },
              { reasoning: "Ritual or social function determines technique — e.g. masks for ceremony, scrolls for meditation.", marks: 1, markCode: "M" },
              { reasoning: "Cultural values shape style — abstraction, idealisation or realism according to convention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Environment, function and values shape materials, techniques and style.",
            commonErrors: [
              "Assuming all cultures would use the same materials and techniques.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why judging artworks from unfamiliar cultures by Western standards is problematic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural bias", statement: "Western conventions are not universal; unfamiliar forms have their own logic." },
            ],
            steps: [
              { reasoning: "Western realism is a convention, not a universal standard of quality.", marks: 1, markCode: "M" },
              { reasoning: "Abstraction or stylisation in other traditions may serve sophisticated purposes.", marks: 1, markCode: "M" },
              { reasoning: "Judging without understanding context produces misunderstanding rather than analysis.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evaluation requires understanding each tradition's own criteria first.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Western standards are culturally specific; unfamiliar forms have their own internal logic.",
            commonErrors: [
              "Applying Western realism as a universal measure of quality.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Cross-cultural comparison exercise",
            text: "Work A: A Benin bronze plaque showing a king in ceremonial dress, intricate patterns covering every surface, symmetrical composition, made for the royal court. Work B: A minimalist ink drawing of a single figure in empty space, vast white areas, made for private contemplation.",
          },
          stem: "Compare two artworks from different cultural traditions.",
          parts: [
            { label: "a", prompt: "Identify one similarity between the works.", marks: 2 },
            { label: "b", prompt: "Identify one culturally specific difference and explain its cause.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the comparison avoids cultural bias.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-cultural comparison", statement: "Shared themes appear in culturally distinct forms shaped by context." },
            ],
            steps: [
              { part: "a", reasoning: "Both depict human figures and carry cultural or ceremonial significance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dense ornamentation vs empty space — caused by courtly display function vs contemplative purpose.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference linked to cultural context convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fair comparison treats each on its own terms; bias avoided if neither is ranked by foreign standards.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned assessment of bias.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both depict significant human figures. (b) Density vs emptiness reflects function. (c) Bias avoided by using each tradition's own criteria.",
            commonErrors: [
              "Declaring one tradition superior or judging by unfamiliar standards.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which pairing best illustrates how cultural context shapes artistic materials?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oil paint and canvas, because they are the most advanced materials" },
              { id: "b", text: "Woven fibre and beadwork in a ceremonial garment, because the culture's rituals and available resources determine the medium" },
              { id: "c", text: "Bronze and marble, because they last longer than other materials" },
              { id: "d", text: "Digital media, because they are universally preferred today" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural materials", statement: "Available resources, ritual function and values determine medium and technique." },
            ],
            steps: [
              { reasoning: "Ceremonial fibre and beadwork reflect a culture's rituals and locally available resources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Woven fibre and beadwork in a ceremonial garment, because the culture's rituals and available resources determine the medium",
            commonErrors: [
              "Assuming one set of materials is universally superior.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Iconography' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The study of an artist's biography" },
              { id: "b", text: "The conventional meanings of symbols and motifs within a culture" },
              { id: "c", text: "The technique of linear perspective" },
              { id: "d", text: "The recorded price history of artworks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Iconography", statement: "The study of symbols and motifs and their conventional meanings within a culture." },
            ],
            steps: [
              { reasoning: "Iconography concerns the conventional meanings of symbols within a culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The conventional meanings of symbols and motifs within a culture",
            commonErrors: [
              "Confusing iconography with biography or technique.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'hybrid form' in art is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A work made entirely from recycled materials" },
              { id: "b", text: "An artwork blending elements from multiple cultural traditions" },
              { id: "c", text: "A direct copy of a famous painting" },
              { id: "d", text: "A sculpture produced without tools" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hybrid form", statement: "An artwork blending elements from multiple cultural traditions." },
            ],
            steps: [
              { reasoning: "A hybrid form combines elements drawn from different cultural traditions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An artwork blending elements from multiple cultural traditions",
            commonErrors: [
              "Confusing hybridity with recycling or copying.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A culture that values communal ritual is most likely to produce art that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small, private and easily hidden" },
              { id: "b", text: "Designed for public or ceremonial display" },
              { id: "c", text: "Abstract and deliberately meaningless" },
              { id: "d", text: "Made only for export to other cultures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Function shapes form", statement: "Communal values produce art designed for shared ceremonial use." },
            ],
            steps: [
              { reasoning: "Communal ritual requires art made for public or ceremonial display.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Designed for public or ceremonial display",
            commonErrors: [
              "Ignoring the link between social function and artistic form.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between universal human concerns and culturally specific solutions in art, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal vs specific", statement: "All cultures address shared concerns but solve them through distinct visual languages." },
            ],
            steps: [
              { reasoning: "Universal concerns — birth, death, identity, power — appear across all cultures.", marks: 1, markCode: "M" },
              { reasoning: "Culturally specific solutions — e.g. mourning masks versus floral offerings — reflect local beliefs and materials.", marks: 1, markCode: "M" },
              { reasoning: "A convincing example distinguishes the shared concern from the culture-bound treatment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Universal concerns are shared; their visual solutions are shaped by each culture's context.",
            commonErrors: [
              "Claiming a concern is universal but failing to identify a culture-specific solution.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how an artwork's intended function can shape its visual form, using a ritual object and a commercial advertisement as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Function shapes form", statement: "Scale, legibility, symbolism and decoration all respond to intended use." },
            ],
            steps: [
              { reasoning: "A ritual object is shaped by ceremonial needs — symbolic density, durability, prescribed iconography.", marks: 1, markCode: "M" },
              { reasoning: "An advertisement is shaped by commercial needs — instant legibility, attention-grabbing colour, brand clarity.", marks: 1, markCode: "M" },
              { reasoning: "The comparison shows function directly determining visual choices such as detail, scale and symbolism.", marks: 1, markCode: "R" },
              { reasoning: "A coherent explanation links each form to its function convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intended function drives form: ritual demands symbolic density; commerce demands instant legibility.",
            commonErrors: [
              "Describing forms without linking them to their function.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'reception context' — the cultural setting in which an artwork is viewed — affects its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reception context", statement: "Viewers decode images through their own cultural assumptions and expectations." },
            ],
            steps: [
              { reasoning: "Viewers bring cultural knowledge that shapes how symbols and styles are read.", marks: 1, markCode: "M" },
              { reasoning: "The same work can carry different meanings when seen in different settings or by different audiences.", marks: 1, markCode: "M" },
              { reasoning: "For example, a sacred image functions differently in a shrine than in a secular museum.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: meaning is produced in the encounter between work and viewing context, not fixed in the object.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reception context shapes meaning because viewers decode works through their own cultural assumptions.",
            commonErrors: [
              "Treating meaning as fixed regardless of where or by whom a work is viewed.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare a West African ceremonial mask and a European Baroque portrait in terms of purpose, audience and form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-cultural comparison", statement: "Purpose, audience and form are all shaped by cultural context." },
            ],
            steps: [
              { reasoning: "Purpose differs: the mask serves ritual transformation; the portrait serves status display or commemoration.", marks: 1, markCode: "M" },
              { reasoning: "Audience differs: the mask addresses a community in ceremony; the portrait addresses elite patrons and viewers of power.", marks: 1, markCode: "M" },
              { reasoning: "Form reflects those differences: abstracted, symbolic features versus naturalistic likeness.", marks: 1, markCode: "M" },
              { reasoning: "A coherent comparison links each formal choice to its cultural purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The mask serves communal ritual through abstraction; the portrait serves elite display through naturalism.",
            commonErrors: [
              "Comparing only surface appearance without linking to purpose or audience.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Reception context' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The museum where a work is stored" },
              { id: "b", text: "The cultural setting in which an artwork is viewed" },
              { id: "c", text: "The artist's studio during production" },
              { id: "d", text: "The auction price of a work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reception context", statement: "The cultural setting in which an artwork is viewed, which shapes its meaning." },
            ],
            steps: [
              { reasoning: "Reception context is the viewing setting that conditions interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The cultural setting in which an artwork is viewed",
            commonErrors: [
              "Confusing reception context with production context or market value.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best avoids cultural bias when comparing artworks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Western art is the standard; other traditions are variations of it" },
              { id: "b", text: "Each tradition should be understood on its own terms before judgement" },
              { id: "c", text: "All cultures produce essentially identical art" },
              { id: "d", text: "Only contemporary art is worth comparing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Avoiding bias", statement: "Fair comparison requires understanding each tradition's own conventions first." },
            ],
            steps: [
              { reasoning: "Understanding each tradition on its own terms prevents ranking by foreign standards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each tradition should be understood on its own terms before judgement",
            commonErrors: [
              "Assuming Western conventions are universal standards.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State two reasons why comparing art across cultures is valuable for understanding visual art.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Value of comparison", statement: "Cross-cultural comparison reveals both shared human concerns and cultural specificity." },
            ],
            steps: [
              { reasoning: "It reveals universal human concerns that recur across all cultures.", marks: 1, markCode: "M" },
              { reasoning: "It reveals how each culture's beliefs, materials and values shape distinct visual solutions.", marks: 1, markCode: "M" },
              { reasoning: "Either reason is developed convincingly to show its value for understanding art.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparison reveals shared concerns and culturally specific solutions, deepening understanding of visual language.",
            commonErrors: [
              "Listing reasons without explaining why they matter.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Cross-cultural comparison exercise",
            text: "Work A: A Polynesian tattoo design covering the body with flowing symmetrical patterns encoding genealogy and status. Work B: A medieval European heraldic shield painted with symbolic animals and colours identifying a noble family.",
          },
          stem: "Compare two described works from different cultural traditions.",
          parts: [
            { label: "a", prompt: "Identify one shared concern addressed by both works.", marks: 2 },
            { label: "b", prompt: "Explain one culturally specific difference in how the concern is expressed.", marks: 2 },
            { label: "c", prompt: "State one precaution for avoiding cultural bias in this comparison.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-cultural comparison", statement: "Identity and status are universal concerns expressed through culture-bound symbolic systems." },
            ],
            steps: [
              { part: "a", reasoning: "Both works encode identity, lineage and social status through symbolic pattern.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shared concern correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tattoo marks the living body and genealogy; the shield is a painted heraldic object for display — different media and functions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference linked to cultural context convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Understand each tradition's own symbolic conventions before judging.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Identity and status. (b) Body-based genealogy vs painted heraldry. (c) Learn each tradition's conventions first.",
            commonErrors: [
              "Judging one symbolic system by the other's conventions.",
            ],
          },
        },
        {
          id: "va-u4-cross-cultural-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Cross-cultural comparison exercise",
            text: "Work A: A ritual mask from a West African society, used in initiation ceremonies, with bold abstracted features and layered natural fibres. Work B: A painted portrait of a Renaissance cardinal, naturalistic features, rich colour, commissioned for a palace chapel.",
          },
          stem: "Analyse how context shapes the visual form of two artworks.",
          parts: [
            { label: "a", prompt: "Identify the purpose and audience of each work.", marks: 2 },
            { label: "b", prompt: "Explain how each work's form serves its purpose.", marks: 2 },
            { label: "c", prompt: "Evaluate the strength of this comparison for understanding cultural difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual shaping of form", statement: "Purpose and audience determine materials, style and mode of representation." },
            ],
            steps: [
              { part: "a", reasoning: "Mask: communal ritual for initiates; portrait: devotional and status display for an elite patron.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Purpose and audience for both works identified accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Abstraction and fibre serve ritual transformation; naturalism and rich colour serve prestige and devotion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each form convincingly linked to its purpose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The comparison is strong because formal contrasts map directly onto cultural purposes without ranking either tradition.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of the comparison's validity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ritual vs devotional patronage. (b) Abstraction vs naturalism serves each purpose. (c) Strong comparison linking form to culture.",
            commonErrors: [
              "Treating stylistic difference as evidence of one culture's superiority.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u4-historical-comparison",
      title: "Comparing across historical periods",
      skill: "Compare artworks from different historical periods and explain how changing contexts produce stylistic change.",
      lesson: {
        sections: [
          {
            heading: "Period styles and change",
            body: "Artistic styles change with historical context: materials, techniques, patronage, religion and philosophy all shift over time. Renaissance naturalism gives way to Baroque drama, then Neoclassical order, then Impressionist light. Each period's style is a response to its moment.",
          },
          {
            heading: "What changes and what persists",
            body: "Some things persist: the human figure remains a subject; the desire to communicate meaning endures. What changes is how: conventions of representation, acceptable subjects, technical means. Comparing across periods reveals both continuity of human concern and evolution of visual language.",
          },
          {
            heading: "Explaining stylistic change",
            body: "Don't just describe style differences — explain them. Why did perspective emerge in the Renaissance? (New interest in individual observation and mathematical order.) Why did abstraction explode in the 20th century? (Photography freed painting from representation; global influences arrived.)",
          },
        ],
        keyFormulas: [
          { name: "Period comparison", statement: "What persists (human concerns) vs what changes (conventions, techniques, purposes)" },
          { name: "Explaining change", statement: "Link stylistic shifts to historical causes — technology, philosophy, patronage" },
        ],
        workedExample: {
          problem: "Compare a Renaissance portrait and a Cubist portrait of the same type of subject. What changed and why?",
          solution: "Renaissance portrait: single viewpoint, idealised anatomy, status display — reflecting humanist confidence in observable reality. Cubist portrait: multiple viewpoints simultaneously, fragmented form — reflecting early 20th-century questioning of single truth and the impact of new technologies like photography and cinema.",
        },
      },
      questions: [
        {
          id: "va-u4-historical-comparison-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'period style' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The artist's personal handwriting" },
              { id: "b", text: "The characteristic visual language of a historical era or movement" },
              { id: "c", text: "The frame style of a century" },
              { id: "d", text: "The colour palette of a region" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period style", statement: "The shared visual conventions associated with a historical era or movement." },
            ],
            steps: [
              { reasoning: "Period style is the characteristic visual language of an era or movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The characteristic visual language of a historical era or movement",
            commonErrors: [
              "Confusing period style with individual artist style.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two factors that can cause artistic styles to change between historical periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Causes of style change", statement: "Technology, philosophy, patronage and social change drive stylistic evolution." },
            ],
            steps: [
              { reasoning: "Technological change — new pigments, supports, cameras — enables new techniques.", marks: 1, markCode: "M" },
              { reasoning: "Philosophical or religious change — humanism, science, secularisation — shifts what art should do.", marks: 1, markCode: "M" },
              { reasoning: "Patronage and social structure change — new markets, audiences and functions demand new forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Technology, philosophy and patronage drive changes in artistic style.",
            commonErrors: [
              "Explaining style change as arbitrary fashion rather than contextual response.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why comparing artworks from different periods requires attention to context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical context", statement: "What counts as 'good' or 'normal' representation varies by era." },
            ],
            steps: [
              { reasoning: "Conventions of representation differ — perspective, anatomy, symbolism mean different things.", marks: 1, markCode: "M" },
              { reasoning: "Purposes differ — religious devotion vs status display vs aesthetic experiment.", marks: 1, markCode: "M" },
              { reasoning: "Judging a medieval work by Renaissance standards, or vice versa, produces anachronistic errors.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: context is necessary to evaluate works fairly across time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conventions and purposes differ by period; context prevents anachronistic judgement.",
            commonErrors: [
              "Evaluating all periods by modern standards.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Historical comparison exercise",
            text: "Work A (c. 1500): An oil painting of a noble family, realistic perspective, rich detail, warm colours, formal poses. Work B (c. 1910): A fractured painting of a family group, multiple viewpoints, muted palette, angular shapes.",
          },
          stem: "Compare two artworks from different historical periods.",
          parts: [
            { label: "a", prompt: "Identify one continuity between the works.", marks: 2 },
            { label: "b", prompt: "Identify one stylistic change and explain its historical cause.", marks: 2 },
            { label: "c", prompt: "Evaluate whether later art 'progressed' beyond earlier art.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical comparison", statement: "Continuity of subject masks evolution of convention and purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Both depict family groups and use painting as a medium — continuity of subject and medium.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Continuity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Realistic single viewpoint vs fragmented multiple viewpoints — caused by changing ideas about perception and truth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stylistic change linked to historical cause convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Progress' is questionable — later art responds to different conditions, not simply improves; each suits its moment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement avoiding simplistic progress narrative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject and medium. (b) Realism to fragmentation reflects changing ideas. (c) 'Progress' is doubtful — each period suits its context.",
            commonErrors: [
              "Assuming later art is automatically superior.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which best explains why artistic styles change between historical periods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artists inevitably grow tired of old styles" },
              { id: "b", text: "Changing technology, philosophy, patronage and social conditions produce new visual languages" },
              { id: "c", text: "Styles change randomly with no underlying cause" },
              { id: "d", text: "Each century must reject everything from the last" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Causes of style change", statement: "Technology, philosophy, patronage and social change drive stylistic evolution." },
            ],
            steps: [
              { reasoning: "Stylistic change responds to technological, philosophical, patronage and social shifts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Changing technology, philosophy, patronage and social conditions produce new visual languages",
            commonErrors: [
              "Treating stylistic change as arbitrary fashion rather than contextual response.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Renaissance interest in linear perspective most directly reflects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A technical accident in painting" },
              { id: "b", text: "New confidence in observation and mathematical order" },
              { id: "c", text: "A shortage of skilled artists" },
              { id: "d", text: "A religious prohibition on flat space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Renaissance perspective", statement: "Perspective expresses humanist confidence in observable, measurable reality." },
            ],
            steps: [
              { reasoning: "Perspective embodies Renaissance confidence in observation and mathematical order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** New confidence in observation and mathematical order",
            commonErrors: [
              "Describing perspective as a technique without linking it to its intellectual context.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What typically persists when comparing artworks across historical periods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The exact same style of representation" },
              { id: "b", text: "Universal human concerns such as mortality, identity and power" },
              { id: "c", text: "The same materials and techniques" },
              { id: "d", text: "The same patrons and audiences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuity across periods", statement: "Human concerns persist while conventions and techniques evolve." },
            ],
            steps: [
              { reasoning: "Subjects and concerns endure; styles, materials and patrons change.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Universal human concerns such as mortality, identity and power",
            commonErrors: [
              "Assuming everything about art changes, or nothing does.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The invention of photography most directly affected painting by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making painting immediately obsolete" },
              { id: "b", text: "Freeing painting from the obligation to record appearances" },
              { id: "c", text: "Inventing oil paint as a medium" },
              { id: "d", text: "Ending all artistic patronage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Technology and style", statement: "New technologies release art from old functions, enabling new purposes." },
            ],
            steps: [
              { reasoning: "Photography took over accurate recording, freeing painting to explore other ends.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Freeing painting from the obligation to record appearances",
            commonErrors: [
              "Claiming photography ended painting rather than transforming its purpose.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between what persists and what changes when comparing artworks across historical periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Persistence vs change", statement: "Universal concerns persist; conventions, techniques and purposes evolve." },
            ],
            steps: [
              { reasoning: "What persists: the human figure as subject and enduring concerns like mortality, identity and power.", marks: 1, markCode: "M" },
              { reasoning: "What changes: conventions of representation, acceptable subjects, techniques and functions.", marks: 1, markCode: "M" },
              { reasoning: "A clear example illustrates one persisting concern and one changed convention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Human concerns persist; the visual language used to express them changes with context.",
            commonErrors: [
              "Describing only differences or only similarities.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how changes in patronage can drive stylistic change, using a church commission and a commercial commission as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Patronage and style", statement: "Who pays for art determines its function, audience and therefore its form." },
            ],
            steps: [
              { reasoning: "A church commission demands devotional forms — gold leaf, hierarchical composition, sacred iconography.", marks: 1, markCode: "M" },
              { reasoning: "A commercial commission demands legibility and appeal — bold colour, clear message, public readability.", marks: 1, markCode: "M" },
              { reasoning: "The contrast shows patronage directly shaping stylistic choices.", marks: 1, markCode: "R" },
              { reasoning: "A coherent explanation links each style to its patron's purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Patronage determines function and audience, which in turn determine style.",
            commonErrors: [
              "Describing patronage without linking it to concrete stylistic outcomes.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by 'anachronistic judgement' when comparing artworks from different periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anachronism", statement: "Applying the standards or conventions of one era to judge another era's work." },
            ],
            steps: [
              { reasoning: "Anachronistic judgement applies later standards to earlier works, or vice versa.", marks: 1, markCode: "M" },
              { reasoning: "For example, judging a medieval altarpiece by Renaissance naturalism ignores its devotional conventions.", marks: 1, markCode: "M" },
              { reasoning: "It fails because each period's conventions answered different needs and questions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: fair evaluation requires period-appropriate criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anachronistic judgement misapplies one era's standards to another, producing unfair evaluation.",
            commonErrors: [
              "Using modern taste as a universal measure across all periods.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the visual aims of a Gothic cathedral facade and a Neoclassical government building.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period comparison", statement: "Different eras produce different forms in response to different functions and values." },
            ],
            steps: [
              { reasoning: "Function differs: the facade serves worship and divine glorification; the building serves civic order and administration.", marks: 1, markCode: "M" },
              { reasoning: "Form differs: verticality, ornament and pointed arches versus horizontal order, symmetry and restraint.", marks: 1, markCode: "M" },
              { reasoning: "Audience differs: the faithful community versus citizens and the state.", marks: 1, markCode: "M" },
              { reasoning: "A coherent comparison links each formal choice to its period's purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Gothic facade expresses divine aspiration; the Neoclassical building expresses civic rationality.",
            commonErrors: [
              "Listing visual differences without explaining their purposes.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'period style' is shaped most directly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather during the century" },
              { id: "b", text: "The combined pressures of technology, philosophy and patronage" },
              { id: "c", text: "The standard size of canvases" },
              { id: "d", text: "The mood of individual artists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period style", statement: "The characteristic visual language of an era, shaped by its conditions." },
            ],
            steps: [
              { reasoning: "Period styles emerge from technological, philosophical and patronage pressures.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The combined pressures of technology, philosophy and patronage",
            commonErrors: [
              "Reducing period style to individual artistic whim.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fair comparison of artworks from different periods requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Preferring whichever style is newest" },
              { id: "b", text: "Understanding each period's conventions and purposes before judging" },
              { id: "c", text: "Applying only formal criteria" },
              { id: "d", text: "Ignoring historical context entirely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical comparison", statement: "Contextual understanding is prerequisite to fair cross-period judgement." },
            ],
            steps: [
              { reasoning: "Each period's conventions and purposes must be understood before evaluation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Understanding each period's conventions and purposes before judging",
            commonErrors: [
              "Judging all periods by a single modern standard.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State two historical factors that can cause a new artistic movement to emerge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Causes of movements", statement: "Technological, philosophical, social and economic shifts generate new art." },
            ],
            steps: [
              { reasoning: "Any valid factor named, e.g. new technology such as photography or digital media.", marks: 1, markCode: "M" },
              { reasoning: "Any second valid factor named, e.g. philosophical change, war, or new patronage structures.", marks: 1, markCode: "M" },
              { reasoning: "Factors are stated as historical causes of stylistic change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Technology, philosophy, war and patronage can all trigger new artistic movements.",
            commonErrors: [
              "Naming factors without identifying them as historical causes.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Historical comparison exercise",
            text: "Work A (c. 1400): A frescoed church ceiling showing biblical scenes in flat gold-and-blue decorative fields, figures hierarchically scaled. Work B (c. 1920): A poster design with bold geometric shapes, a single slogan, and a flat colour scheme designed for mass printing.",
          },
          stem: "Compare two artworks from different historical periods.",
          parts: [
            { label: "a", prompt: "Identify one continuity between the works.", marks: 2 },
            { label: "b", prompt: "Identify one stylistic change and explain its historical cause.", marks: 2 },
            { label: "c", prompt: "State whether the later work 'improved' on the earlier one.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical comparison", statement: "Both works communicate messages; their conventions differ with era and function." },
            ],
            steps: [
              { part: "a", reasoning: "Both communicate a message or narrative through painted or printed imagery.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Continuity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Flat decorative hierarchy versus bold geometric legibility — caused by shift from devotional to mass communication needs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stylistic change linked to historical cause.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Improvement' is a value judgement; each suits its function and audience.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Shared communicative purpose. (b) Devotional hierarchy to mass-media legibility. (c) No simple improvement — each suits its moment.",
            commonErrors: [
              "Assuming later means better.",
            ],
          },
        },
        {
          id: "va-u4-historical-comparison-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Historical comparison exercise",
            text: "Work A (c. 1650): An oil painting of a king on horseback, dramatic lighting, rich detail, celebrating dynastic power. Work B (2020): A digital video installation of a crown dissolving into data fragments, looped on multiple screens.",
          },
          stem: "Analyse stylistic change and its causes across two described periods.",
          parts: [
            { label: "a", prompt: "Identify one continuity in subject between the works.", marks: 2 },
            { label: "b", prompt: "Explain the major stylistic change and its historical cause.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the change represents 'progress' in art.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Explaining stylistic change", statement: "New media and ideas transform how enduring subjects are represented." },
            ],
            steps: [
              { part: "a", reasoning: "Both address power and monarchy through the symbol of the crown.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Continuity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Static oil painting versus time-based digital fragmentation — caused by new technologies and shifting ideas about power and permanence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Change convincingly linked to historical cause.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Progress' is doubtful — the later work questions monarchy rather than simply surpassing the earlier.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement avoiding a simple progress narrative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shared subject of power/monarchy. (b) Oil to digital reflects new media and ideas. (c) Change is transformation, not simple progress.",
            commonErrors: [
              "Describing change without explaining its causes.",
            ],
          },
        },
      ],
    },
  ],
};
