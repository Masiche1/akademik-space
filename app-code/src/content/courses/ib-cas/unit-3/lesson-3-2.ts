import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cas-u3-lesson-3-2",
  code: "3-2",
  title: "Evidence Collection and Portfolio Building",
  goal: "I CAN build a comprehensive CAS portfolio with evidence and reflections.",
  standards: ["CAS", "Portfolio", "Evidence"],
  vocabulary: [
    { term: "CAS portfolio", definition: "The complete collection of evidence and reflections submitted for CAS assessment." },
    { term: "Evidence", definition: "Artifacts proving participation: photos, logs, certificates, reflections." },
    { term: "Learning outcomes", definition: "Skills and insights gained through CAS, documented in reflections." },
    { term: "CAS project", definition: "A sustained initiative combining all three strands." },
    { term: "Supervisor", definition: "Teacher who reviews portfolio and conducts interviews." },
    { term: "Completion", definition: "Meeting all CAS requirements: hours, strands, reflection, project." },
  ],
  concepts: [
    {
      id: "cas-u3-portfolio-building",
      title: "Building the CAS portfolio",
      skill: "Organise evidence and reflections into a coherent portfolio demonstrating CAS completion.",
      lesson: {
        sections: [
          {
            heading: "Portfolio structure",
            body: "The portfolio should show: regular engagement in all three strands; at least one CAS project; evidence of activities (photos, logs, certificates); and reflections demonstrating learning. Organise by strand or chronologically — consistency aids review.",
          },
          {
            heading: "What makes a strong portfolio",
            body: "A strong portfolio demonstrates: genuine engagement (not tokenism); growth over time (skills and perspectives developing); balance across strands; and thoughtful reflection. It should tell a story of your CAS journey, not just list activities.",
          },
          {
            heading: "Digital vs physical",
            body: "Many schools use digital portfolios (Google Sites, dedicated platforms) for easy updating and sharing. Others use physical folders. Either works — the key is organisation, completeness and regular updating. Do not leave it until the last week.",
          },
        ],
        keyFormulas: [
          { name: "Portfolio contents", statement: "Strand evidence + project + reflections + learning outcomes" },
          { name: "Portfolio story", statement: "Shows growth, balance and genuine engagement" },
        ],
        workedExample: {
          problem: "Organise a CAS portfolio for a student with varied activities.",
          solution: "Create sections: Creativity (art project photos + reflections), Activity (sport logs + certificates), Service (volunteering records + testimonials), Project (community garden documentation). Add overall reflection summarising growth.",
        },
      },
      questions: [
        {
          id: "cas-u3-l32c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A CAS portfolio should demonstrate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regular engagement across all strands with reflection" },
              { id: "b", text: "Only the most expensive activities" },
              { id: "c", text: "Nothing — it's optional" },
              { id: "d", text: "Only certificates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio purpose", statement: "Portfolio demonstrates balanced engagement and learning." },
            ],
            steps: [
              { reasoning: "Portfolio shows balanced engagement with reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Regular engagement across all strands with reflection",
            commonErrors: ["Thinking portfolio is just a collection of certificates."],
          },
        },
        {
          id: "cas-u3-l32c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what makes a strong CAS portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Strong portfolios show genuine engagement, growth and reflection." },
            ],
            steps: [
              { reasoning: "Genuine engagement: meaningful participation, not tokenism.", marks: 1, markCode: "M" },
              { reasoning: "Growth: skills and perspectives developing over time.", marks: 1, markCode: "M" },
              { reasoning: "Thoughtful reflection: learning outcomes clearly articulated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong portfolios show genuine engagement, growth over time and thoughtful reflection.",
            commonErrors: ["Including activities without demonstrating learning."],
          },
        },
        {
          id: "cas-u3-l32c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the portfolio is just a formality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio purpose", statement: "Portfolio is evidence of genuine engagement and learning." },
            ],
            steps: [
              { reasoning: "Against 'formality': portfolio is assessed and demonstrates real engagement.", marks: 1, markCode: "M" },
              { reasoning: "For caution: portfolio without genuine engagement is hollow.", marks: 1, markCode: "M" },
              { reasoning: "The portfolio should reflect actual learning, not just documentation.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: portfolio matters when backed by genuine engagement and reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Portfolio is assessed evidence of engagement — meaningful only when backed by genuine participation and reflection.",
            commonErrors: ["Treating portfolio as paperwork rather than evidence of learning."],
          },
        },
        {
          id: "cas-u3-l32c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to build an effective CAS portfolio.",
          parts: [
            { label: "a", prompt: "Describe what a CAS portfolio contains.", marks: 2 },
            { label: "b", prompt: "Explain what makes a portfolio strong.", marks: 3 },
            { label: "c", prompt: "Evaluate digital vs physical portfolios.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio building", statement: "Portfolio demonstrates balanced engagement, growth and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence of all strands + project + reflections.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shows learning outcomes and growth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genuine engagement, not tokenism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Growth over time — skills developing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Thoughtful reflection on learning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digital: easy updating, sharing, multimedia.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Physical: tangible, traditional, some prefer it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: format matters less than content quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence + reflections + project. (b) Genuine engagement, growth, reflection. (c) Format secondary to content.",
            commonErrors: ["Building portfolio at the last minute."],
          },
        },
        {
          id: "cas-u3-l32c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a valid form of CAS portfolio evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photos, logs, certificates and reflections" },
              { id: "b", text: "Only certificates" },
              { id: "c", text: "Nothing — the portfolio is optional" },
              { id: "d", text: "Only attendance signatures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence", statement: "Artifacts proving participation: photos, logs, certificates, reflections." },
            ],
            steps: [
              { reasoning: "Evidence includes multiple artifact types.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Photos, logs, certificates and reflections",
            commonErrors: ["Thinking only certificates count as evidence."],
          },
        },
        {
          id: "cas-u3-l32c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A CAS portfolio should be organised:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only by cost" },
              { id: "b", text: "Randomly" },
              { id: "c", text: "By strand or chronologically, consistently" },
              { id: "d", text: "In one long undivided list" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Organise by strand or chronologically with consistency." },
            ],
            steps: [
              { reasoning: "Consistent organisation aids review.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** By strand or chronologically, consistently",
            commonErrors: ["Disorganised portfolios that are hard to review."],
          },
        },
        {
          id: "cas-u3-l32c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A strong CAS portfolio demonstrates growth because it shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skills and perspectives developing over time" },
              { id: "b", text: "Identical activities repeated" },
              { id: "c", text: "The most expensive activities" },
              { id: "d", text: "Only the most recent activities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Strong portfolios show growth over time." },
            ],
            steps: [
              { reasoning: "Growth means skills and perspectives develop over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Skills and perspectives developing over time",
            commonErrors: ["Showing only isolated activities without a development arc."],
          },
        },
        {
          id: "cas-u3-l32c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about digital portfolios is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cannot include reflections" },
              { id: "b", text: "They are always required" },
              { id: "c", text: "They allow easy updating, sharing and multimedia" },
              { id: "d", text: "They are not accepted for CAS" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Digital portfolios", statement: "Digital portfolios allow easy updating, sharing and multimedia evidence." },
            ],
            steps: [
              { reasoning: "Digital formats support updating, sharing and media.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** They allow easy updating, sharing and multimedia",
            commonErrors: ["Assuming digital portfolios are not accepted."],
          },
        },
        {
          id: "cas-u3-l32c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A portfolio listing 50 activities with no reflections best illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genuine engagement" },
              { id: "b", text: "Balanced strands" },
              { id: "c", text: "Box-ticking rather than learning" },
              { id: "d", text: "Deep reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Activities without reflection demonstrate box-ticking, not learning." },
            ],
            steps: [
              { reasoning: "Quantity without reflection shows tokenism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Box-ticking rather than learning",
            commonErrors: ["Equating number of activities with quality of engagement."],
          },
        },
        {
          id: "cas-u3-l32c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The CAS project differs from regular strand activities because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combines all three strands over several months" },
              { id: "b", text: "Is optional for all students" },
              { id: "c", text: "Requires no reflection" },
              { id: "d", text: "Lasts only one day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS project", statement: "A sustained initiative over several months combining all three strands." },
            ],
            steps: [
              { reasoning: "The project combines all strands over months.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Combines all three strands over several months",
            commonErrors: ["Confusing the project with regular strand activities."],
          },
        },
        {
          id: "cas-u3-l32c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which portfolio best tells 'the story of your CAS journey'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the CAS project documentation" },
              { id: "b", text: "A list of activities with no commentary" },
              { id: "c", text: "Only certificates sorted by date" },
              { id: "d", text: "Evidence plus reflections showing growth over time" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio story", statement: "Portfolio should tell a story of growth, balance and engagement." },
            ],
            steps: [
              { reasoning: "Evidence plus reflections shows the learning journey.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Evidence plus reflections showing growth over time",
            commonErrors: ["Treating the portfolio as a mere activity list."],
          },
        },
        {
          id: "cas-u3-l32c1q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three types of evidence that can be included in a CAS portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence", statement: "Artifacts proving participation and learning." },
            ],
            steps: [
              { reasoning: "Visual artifacts such as photos or artwork.", marks: 1, markCode: "M" },
              { reasoning: "Records such as logs, certificates or attendance sheets.", marks: 1, markCode: "M" },
              { reasoning: "Written reflections documenting learning outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photos/artifacts, logs/certificates and reflections are valid evidence.",
            commonErrors: ["Listing only certificates as evidence."],
          },
        },
        {
          id: "cas-u3-l32c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a portfolio should show balance across the three strands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio balance", statement: "CAS requires engagement across creativity, activity and service." },
            ],
            steps: [
              { reasoning: "CAS requires regular engagement in all three strands.", marks: 1, markCode: "M" },
              { reasoning: "An unbalanced portfolio suggests neglect of a strand.", marks: 1, markCode: "M" },
              { reasoning: "Balance demonstrates whole-person development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance shows all strands were engaged — required for genuine CAS completion.",
            commonErrors: ["Over-representing the easiest strand."],
          },
        },
        {
          id: "cas-u3-l32c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student could organise a disorganised portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Choose a consistent structure and sort evidence into it." },
            ],
            steps: [
              { reasoning: "Choose an organisation method: by strand or chronologically.", marks: 1, markCode: "M" },
              { reasoning: "Create sections for creativity, activity, service and project.", marks: 1, markCode: "M" },
              { reasoning: "Sort existing evidence into the appropriate sections.", marks: 1, markCode: "M" },
              { reasoning: "Add brief descriptions and reflections to each entry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose a method, create strand sections, sort evidence and add reflections.",
            commonErrors: ["Mixing organisation methods inconsistently."],
          },
        },
        {
          id: "cas-u3-l32c1q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Evaluate the claim that a portfolio with more evidence is always better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence curation", statement: "Quality representative evidence beats exhaustive documentation." },
            ],
            steps: [
              { reasoning: "More evidence can overwhelm reviewers and hide key learning.", marks: 1, markCode: "M" },
              { reasoning: "Curated evidence demonstrates judgement and quality.", marks: 1, markCode: "M" },
              { reasoning: "However, all strands and the project must be covered.", marks: 1, markCode: "R" },
              { reasoning: "Quantity cannot compensate for missing strands or reflections.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: quality and coverage matter more than raw quantity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More is not always better — curated, representative evidence covering all strands is superior.",
            commonErrors: ["Including everything without selection."],
          },
        },
        {
          id: "cas-u3-l32c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student plans to build their CAS portfolio in the final week before the deadline. Evaluate this approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular updating", statement: "Regular updates prevent gaps and reduce last-minute stress." },
            ],
            steps: [
              { reasoning: "Last-minute building leads to gaps and poor quality.", marks: 1, markCode: "M" },
              { reasoning: "It risks missing evidence that was never recorded.", marks: 1, markCode: "M" },
              { reasoning: "Regular updating allows tracking progress and identifying gaps early.", marks: 1, markCode: "M" },
              { reasoning: "Reflections written months later lack authenticity.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: build the portfolio continuously throughout the programme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Last-minute building risks gaps and inauthentic reflections — update regularly instead.",
            commonErrors: ["Underestimating the time needed to compile evidence."],
          },
        },
        {
          id: "cas-u3-l32c1q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare digital and physical CAS portfolios.",
          parts: [
            { label: "a", prompt: "Describe two advantages of a digital portfolio.", marks: 2 },
            { label: "b", prompt: "Describe one advantage of a physical portfolio.", marks: 2 },
            { label: "c", prompt: "Evaluate which format is better for CAS.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio format", statement: "Format matters less than content quality and organisation." },
            ],
            steps: [
              { part: "a", reasoning: "Easy updating and sharing with supervisor.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Supports multimedia evidence such as video and links.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tangible, traditional and some reviewers prefer it.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical artifacts can be included directly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digital offers flexibility; physical offers tangibility.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: either works — content quality is decisive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Easy updates, multimedia. (b) Tangible artifacts. (c) Format secondary to content.",
            commonErrors: ["Arguing format is more important than content."],
          },
        },
        {
          id: "cas-u3-l32c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that the CAS portfolio is merely a formality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio purpose", statement: "Portfolio is assessed evidence of genuine engagement and learning." },
            ],
            steps: [
              { reasoning: "Against 'formality': it is formally assessed by supervisors.", marks: 1, markCode: "M" },
              { reasoning: "It documents sustained engagement over months.", marks: 1, markCode: "M" },
              { reasoning: "For caution: a portfolio without genuine engagement is hollow.", marks: 1, markCode: "R" },
              { reasoning: "The portfolio must reflect actual learning, not just paperwork.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: portfolio is meaningful when backed by genuine participation.", marks: 1, markCode: "A" },
              { reasoning: "It is evidence, not bureaucracy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The portfolio is assessed evidence — meaningful only when backed by genuine engagement.",
            commonErrors: ["Treating the portfolio as paperwork rather than evidence."],
          },
        },
        {
          id: "cas-u3-l32c1q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine how to build an effective CAS portfolio.",
          parts: [
            { label: "a", prompt: "Describe what a CAS portfolio contains.", marks: 2 },
            { label: "b", prompt: "Explain what makes a portfolio strong.", marks: 2 },
            { label: "c", prompt: "Evaluate how often the portfolio should be updated.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio building", statement: "Portfolio demonstrates balanced engagement, growth and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence of all strands, project documentation and reflections.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Learning outcomes clearly articulated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genuine engagement, not tokenism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Growth over time and thoughtful reflection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Update after each activity or at least monthly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Regular updates prevent gaps and last-minute stress.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: continuous updating produces the strongest portfolio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence + project + reflections. (b) Genuine engagement, growth. (c) Update regularly.",
            commonErrors: ["Building the portfolio only at the end."],
          },
        },
        {
          id: "cas-u3-l32c1q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of the CAS portfolio in demonstrating completion.",
          parts: [
            { label: "a", prompt: "Describe what the portfolio must show for completion.", marks: 2 },
            { label: "b", prompt: "Explain how evidence supports reflections.", marks: 3 },
            { label: "c", prompt: "Evaluate how supervisors use the portfolio in assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio as evidence", statement: "Portfolio documents engagement, learning and completion for supervisor review." },
            ],
            steps: [
              { part: "a", reasoning: "All strands engaged, project completed, reflections present.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Learning outcomes documented.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evidence authenticates that activities occurred.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reflections interpret the evidence into learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Together they demonstrate genuine engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Supervisors review portfolio before the interview.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It informs their judgement of engagement and reflection quality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: portfolio quality directly affects assessment outcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) All elements documented. (b) Evidence authenticates, reflections interpret. (c) Central to supervisor assessment.",
            commonErrors: ["Submitting evidence without reflections or vice versa."],
          },
        },
      ],
    },
    {
      id: "cas-u3-portfolio-organisation",
      title: "Organising and curating the portfolio",
      skill: "Organise portfolio content for clarity and impact.",
      lesson: {
        sections: [
          {
            heading: "Organisation strategies",
            body: "Organise by strand (creativity, activity, service sections) or chronologically (timeline of activities). Either works — consistency is key. Within each section, arrange evidence logically: activity description, photos/artifacts, reflection. Make it easy for reviewers to navigate.",
          },
          {
            heading: "Curation",
            body: "Not everything needs to be included. Curate: select evidence that best represents your engagement. A few strong reflections and meaningful artifacts beat exhaustive documentation. Quality over quantity — but ensure all strands and the project are covered.",
          },
          {
            heading: "Regular updating",
            body: "Update the portfolio regularly — after each activity or monthly. Last-minute building leads to gaps and stress. Regular updating also helps you track progress and identify areas needing more engagement.",
          },
        ],
        keyFormulas: [
          { name: "Organisation", statement: "By strand or chronologically — consistency is key" },
          { name: "Curation rule", statement: "Quality over quantity; cover all strands" },
        ],
        workedExample: {
          problem: "Your portfolio is disorganised. How to fix it?",
          solution: "Choose one organisation method (by strand). Create sections for each strand and project. Move evidence into appropriate sections. Add brief descriptions and reflections. Review for gaps — ensure all strands have adequate evidence.",
        },
      },
      questions: [
        {
          id: "cas-u3-l32c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Portfolio evidence should be organised:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By difficulty" },
              { id: "b", text: "Randomly" },
              { id: "c", text: "Only by date" },
              { id: "d", text: "By strand or chronologically, consistently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Organise by strand or chronologically with consistency." },
            ],
            steps: [
              { reasoning: "Consistent organisation aids review and clarity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** By strand or chronologically, consistently",
            commonErrors: ["Disorganised portfolios that are hard to review."],
          },
        },
        {
          id: "cas-u3-l32c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why curating portfolio evidence matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence curation", statement: "Selecting representative evidence demonstrates judgement and quality." },
            ],
            steps: [
              { reasoning: "Curation shows you can identify meaningful evidence.", marks: 1, markCode: "M" },
              { reasoning: "Quality evidence demonstrates engagement better than quantity.", marks: 1, markCode: "M" },
              { reasoning: "But ensure all strands and project are represented.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Curation demonstrates judgement — select representative evidence covering all strands.",
            commonErrors: ["Including everything rather than curating meaningfully."],
          },
        },
        {
          id: "cas-u3-l32c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that portfolios should be updated only at the end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular updating", statement: "Regular updates prevent gaps and reduce last-minute stress." },
            ],
            steps: [
              { reasoning: "Against end-only: last-minute building leads to gaps and poor quality.", marks: 1, markCode: "M" },
              { reasoning: "For limited truth: end review can identify gaps.", marks: 1, markCode: "M" },
              { reasoning: "Regular updating tracks progress and ensures completeness.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: update regularly throughout the programme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Portfolios should be updated regularly — end-only updating leads to gaps and stress.",
            commonErrors: ["Leaving portfolio until the deadline."],
          },
        },
        {
          id: "cas-u3-l32c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to organise a CAS portfolio effectively.",
          parts: [
            { label: "a", prompt: "Describe two organisation methods.", marks: 2 },
            { label: "b", prompt: "Explain what evidence to include.", marks: 3 },
            { label: "c", prompt: "Evaluate how often to update the portfolio.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio organisation", statement: "Organise consistently, curate quality evidence, update regularly." },
            ],
            steps: [
              { part: "a", reasoning: "By strand: sections for creativity, activity, service, project.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Chronologically: timeline of all activities.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Include evidence covering all three strands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Include project documentation and reflections.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Curate for quality — representative not exhaustive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Regular updating prevents gaps and stress.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tracks progress and identifies gaps early.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: update after each activity or monthly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) By strand or chronology. (b) All strands, project, reflections, curated. (c) Regular updates essential.",
            commonErrors: ["Disorganised portfolios missing strands."],
          },
        },
        {
          id: "cas-u3-l32c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a valid way to organise portfolio evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Randomly scattered" },
              { id: "b", text: "By photo quality" },
              { id: "c", text: "Only alphabetically by activity name" },
              { id: "d", text: "By strand or chronologically" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Organise by strand or chronologically with consistency." },
            ],
            steps: [
              { reasoning: "Strand or chronological organisation are both valid.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** By strand or chronologically",
            commonErrors: ["Mixing methods without consistency."],
          },
        },
        {
          id: "cas-u3-l32c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Curation of portfolio evidence means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organising by date only" },
              { id: "b", text: "Including every single artifact" },
              { id: "c", text: "Removing all reflections" },
              { id: "d", text: "Selecting the most representative evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Curation", statement: "Selecting evidence that best represents engagement." },
            ],
            steps: [
              { reasoning: "Curation means selecting representative evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Selecting the most representative evidence",
            commonErrors: ["Confusing curation with exhaustive inclusion."],
          },
        },
        {
          id: "cas-u3-l32c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should the portfolio be updated regularly rather than only at the end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It eliminates the need for reflections" },
              { id: "b", text: "It impresses classmates" },
              { id: "c", text: "Regular updates prevent gaps and reduce stress" },
              { id: "d", text: "It is required by law" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular updating", statement: "Regular updates prevent gaps and last-minute stress." },
            ],
            steps: [
              { reasoning: "Regular updating prevents gaps and stress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Regular updates prevent gaps and reduce stress",
            commonErrors: ["Leaving all portfolio work to the deadline."],
          },
        },
        {
          id: "cas-u3-l32c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Within each portfolio section, evidence should be arranged:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alphabetically by file name" },
              { id: "b", text: "Logically: description, artifacts, reflection" },
              { id: "c", text: "Randomly" },
              { id: "d", text: "Only by photo size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Arrange evidence logically so reviewers can navigate easily." },
            ],
            steps: [
              { reasoning: "Logical arrangement aids reviewer navigation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Logically: description, artifacts, reflection",
            commonErrors: ["Arranging evidence without logical flow."],
          },
        },
        {
          id: "cas-u3-l32c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A portfolio covers creativity and service well but has almost no activity evidence. This is a problem because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activity is the only assessed strand" },
              { id: "b", text: "Certificates are required for all strands" },
              { id: "c", text: "It looks untidy" },
              { id: "d", text: "All strands must be covered for completion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio coverage", statement: "All strands must be represented for genuine completion." },
            ],
            steps: [
              { reasoning: "Missing a strand means incomplete engagement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** All strands must be covered for completion",
            commonErrors: ["Over-representing preferred strands."],
          },
        },
        {
          id: "cas-u3-l32c2q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which approach best demonstrates curation judgement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selecting evidence that best shows engagement and learning" },
              { id: "b", text: "Including every photo ever taken" },
              { id: "c", text: "Including only the cheapest activities" },
              { id: "d", text: "Removing all written reflections" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence curation", statement: "Select representative evidence showing engagement and learning." },
            ],
            steps: [
              { reasoning: "Curation selects evidence showing engagement and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Selecting evidence that best shows engagement and learning",
            commonErrors: ["Including everything rather than curating."],
          },
        },
        {
          id: "cas-u3-l32c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Regular portfolio updating helps identify gaps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is required by the IB" },
              { id: "b", text: "Makes the portfolio longer" },
              { id: "c", text: "Reveals missing strands or thin evidence early" },
              { id: "d", text: "Eliminates the need for a supervisor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular updating", statement: "Regular updates track progress and reveal gaps early." },
            ],
            steps: [
              { reasoning: "Regular updates reveal gaps early.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reveals missing strands or thin evidence early",
            commonErrors: ["Discovering gaps only at the deadline."],
          },
        },
        {
          id: "cas-u3-l32c2q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe the recommended logical order of items within a portfolio entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Arrange evidence logically for easy review." },
            ],
            steps: [
              { reasoning: "Start with a brief description of the activity.", marks: 1, markCode: "M" },
              { reasoning: "Follow with artifacts such as photos or certificates.", marks: 1, markCode: "M" },
              { reasoning: "End with the reflection documenting learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description → artifacts → reflection.",
            commonErrors: ["Presenting artifacts without context or reflection."],
          },
        },
        {
          id: "cas-u3-l32c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between organising by strand and organising chronologically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Two valid methods: by strand or by timeline." },
            ],
            steps: [
              { reasoning: "By strand: sections for creativity, activity, service, project.", marks: 1, markCode: "M" },
              { reasoning: "Chronologically: a timeline of all activities in order.", marks: 1, markCode: "M" },
              { reasoning: "Both work — consistency matters more than method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "By strand groups activities by type; chronological shows a timeline — both are valid if consistent.",
            commonErrors: ["Mixing both methods inconsistently."],
          },
        },
        {
          id: "cas-u3-l32c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student has evidence spread across notebooks, phones and email. Suggest how to consolidate it into a portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Gather scattered evidence into one organised structure." },
            ],
            steps: [
              { reasoning: "Decide on digital or physical format first.", marks: 1, markCode: "M" },
              { reasoning: "Collect all evidence from notebooks, phones and email into one place.", marks: 1, markCode: "M" },
              { reasoning: "Sort into strand or chronological sections.", marks: 1, markCode: "M" },
              { reasoning: "Curate: select representative items and add reflections.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose format, gather all evidence, sort into sections, curate and add reflections.",
            commonErrors: ["Leaving evidence scattered across devices."],
          },
        },
        {
          id: "cas-u3-l32c2q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Evaluate the claim that portfolios should include every piece of evidence collected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence curation", statement: "Quality representative evidence beats exhaustive documentation." },
            ],
            steps: [
              { reasoning: "Including everything overwhelms reviewers.", marks: 1, markCode: "M" },
              { reasoning: "Curation demonstrates judgement about what matters.", marks: 1, markCode: "M" },
              { reasoning: "However, all strands and the project must still appear.", marks: 1, markCode: "R" },
              { reasoning: "Exhaustive inclusion can bury meaningful reflections.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: curate for quality while ensuring full coverage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not everything should be included — curate representative evidence covering all strands.",
            commonErrors: ["Assuming quantity demonstrates thoroughness."],
          },
        },
        {
          id: "cas-u3-l32c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student's portfolio is updated only once a term. Evaluate this frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular updating", statement: "Regular updates prevent gaps and track progress." },
            ],
            steps: [
              { reasoning: "Termly updates are better than end-only but still infrequent.", marks: 1, markCode: "M" },
              { reasoning: "Gaps may go unnoticed for months.", marks: 1, markCode: "M" },
              { reasoning: "Reflections written long after events lose authenticity.", marks: 1, markCode: "R" },
              { reasoning: "Monthly or per-activity updating is recommended.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: update more frequently — after each activity or monthly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Termly updating is insufficient — update after each activity or monthly.",
            commonErrors: ["Underestimating how quickly evidence and reflections fade."],
          },
        },
        {
          id: "cas-u3-l32c2q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare organising a portfolio by strand versus chronologically.",
          parts: [
            { label: "a", prompt: "Describe the by-strand method.", marks: 2 },
            { label: "b", prompt: "Describe the chronological method.", marks: 2 },
            { label: "c", prompt: "Evaluate which method is better for reviewers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio organisation", statement: "Both methods are valid; consistency is key." },
            ],
            steps: [
              { part: "a", reasoning: "Sections for creativity, activity, service and project.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each strand's evidence grouped together.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Timeline showing activities in date order.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shows progression and sustained engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "By-strand makes coverage easy to verify; chronological shows journey.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: either works — clarity and consistency matter most.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Grouped by strand. (b) Timeline order. (c) Both valid — consistency matters.",
            commonErrors: ["Choosing a method then abandoning it halfway."],
          },
        },
        {
          id: "cas-u3-l32c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that curation means removing weak evidence to make the portfolio look better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence curation", statement: "Curation selects representative evidence; it is not deception." },
            ],
            steps: [
              { reasoning: "Curation is selection, not concealment.", marks: 1, markCode: "M" },
              { reasoning: "All strands and the project must still be represented.", marks: 1, markCode: "M" },
              { reasoning: "Removing evidence of genuine engagement would be misleading.", marks: 1, markCode: "R" },
              { reasoning: "Choosing the best representatives is legitimate judgement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: curate for clarity and representativeness, not to hide reality.", marks: 1, markCode: "A" },
              { reasoning: "Honesty underpins CAS assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Curation selects representative evidence — it must not hide genuine engagement.",
            commonErrors: ["Using curation as an excuse to omit inconvenient evidence."],
          },
        },
        {
          id: "cas-u3-l32c2q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine how to organise a CAS portfolio effectively.",
          parts: [
            { label: "a", prompt: "Describe two organisation methods.", marks: 2 },
            { label: "b", prompt: "Explain what evidence to include.", marks: 2 },
            { label: "c", prompt: "Evaluate how often to update the portfolio.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio organisation", statement: "Organise consistently, curate quality evidence, update regularly." },
            ],
            steps: [
              { part: "a", reasoning: "By strand: sections per strand and project.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Chronologically: timeline of all activities.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evidence covering all strands, project and reflections.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Curate for quality — representative not exhaustive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Update after each activity or monthly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Regular updates prevent gaps and stress.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: continuous updating produces the strongest portfolio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) By strand or chronology. (b) All strands, project, reflections, curated. (c) Update regularly.",
            commonErrors: ["Disorganised portfolios missing strands."],
          },
        },
        {
          id: "cas-u3-l32c2q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the impact of portfolio organisation and curation on CAS assessment.",
          parts: [
            { label: "a", prompt: "Explain why organisation matters to reviewers.", marks: 2 },
            { label: "b", prompt: "Describe how curation demonstrates judgement.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of a disorganised portfolio.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Organisation and curation directly affect how engagement is perceived." },
            ],
            steps: [
              { part: "a", reasoning: "Clear organisation lets reviewers verify coverage quickly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It signals care and professionalism.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Selecting representative evidence shows discernment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It demonstrates understanding of what matters most.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Quality over quantity reflects genuine engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Disorganisation can hide gaps or missing strands.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It may lead supervisors to underestimate engagement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: a well-organised portfolio is essential for fair assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Aids review, signals care. (b) Shows discernment. (c) Disorganisation can misrepresent engagement.",
            commonErrors: ["Assuming supervisors will untangle a messy portfolio."],
          },
        },
      ],
    },
  ],
};
