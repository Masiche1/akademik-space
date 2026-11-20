import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cas-u1-lesson-1-1",
  code: "1-1",
  title: "Understanding Creativity, Activity and Service",
  goal: "I CAN define the three CAS strands and identify appropriate activities for each.",
  standards: ["CAS", "Creativity", "Activity", "Service"],
  vocabulary: [
    { term: "CAS", definition: "Creativity, Activity, Service — the IB DP core programme developing students beyond academics." },
    { term: "Creativity", definition: "Exploring and expressing ideas through arts, crafts, performance or original thinking." },
    { term: "Activity", definition: "Physical exertion contributing to a healthy lifestyle — sport, exercise, outdoor pursuits." },
    { term: "Service", definition: "Collaborative unpaid work for the benefit of others and the community." },
    { term: "Strand", definition: "One of the three categories: creativity, activity or service." },
    { term: "CAS project", definition: "A long-term initiative combining all three strands over several months." },
  ],
  concepts: [
    {
      id: "cas-u1-three-strands",
      title: "The three strands of CAS",
      skill: "Define creativity, activity and service and identify appropriate examples for each strand.",
      lesson: {
        sections: [
          {
            heading: "Creativity",
            body: "Creativity involves exploring and expressing original ideas. Examples: performing in a play, composing music, painting, writing fiction, designing a poster, learning a craft. The key is **original expression** — not just consuming art but creating it. Cooking an original recipe or coding a game also counts.",
          },
          {
            heading: "Activity",
            body: "Activity means physical exertion for health and wellbeing. Examples: team sports, running, swimming, hiking, yoga, dance, martial arts. The emphasis is on **physical effort** — watching sport does not count, but playing does. Activity should contribute to a healthy lifestyle.",
          },
          {
            heading: "Service",
            body: "Service means unpaid work benefiting others. Examples: volunteering at a shelter, tutoring younger students, environmental clean-ups, assisting at community events. The key is **benefit to others** — service must be collaborative and genuinely helpful, not just busywork.",
          },
        ],
        keyFormulas: [
          { name: "Creativity", statement: "Original expression through arts, crafts or creative thinking" },
          { name: "Activity", statement: "Physical exertion for health — playing, not watching" },
          { name: "Service", statement: "Unpaid collaborative work benefiting others" },
        ],
        workedExample: {
          problem: "Classify: joining a school basketball team.",
          solution: "Activity — physical exertion through sport. It is not service (no benefit to others beyond participation) and not creativity (unless you are choreographing or coaching creatively).",
        },
      },
      questions: [
        {
          id: "cas-u1-l11c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a creativity activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing football" },
              { id: "b", text: "Composing a piece of music" },
              { id: "c", text: "Volunteering at a shelter" },
              { id: "d", text: "Running a marathon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Creativity", statement: "Exploring and expressing original ideas through arts or creative thinking." },
            ],
            steps: [
              { reasoning: "Composing music is original creative expression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Composing a piece of music",
            commonErrors: ["Confusing passive consumption of art with creation."],
          },
        },
        {
          id: "cas-u1-l11c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between activity and service in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activity vs service", statement: "Activity is physical exertion for health; service is unpaid work benefiting others." },
            ],
            steps: [
              { reasoning: "Activity: physical effort — sport, exercise, outdoor pursuits.", marks: 1, markCode: "M" },
              { reasoning: "Service: collaborative unpaid work benefiting community or individuals.", marks: 1, markCode: "M" },
              { reasoning: "The same activity could be both if it involves physical effort and benefits others (e.g. charity run).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activity is physical exertion for health; service is unpaid work benefiting others — they can overlap.",
            commonErrors: ["Counting watching sport as activity or paid work as service."],
          },
        },
        {
          id: "cas-u1-l11c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that any physical activity counts as CAS activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity definition", statement: "CAS activity requires physical exertion contributing to healthy lifestyle." },
            ],
            steps: [
              { reasoning: "For: any physical exertion technically counts.", marks: 1, markCode: "M" },
              { reasoning: "Against: CAS requires sustained commitment and health benefits, not token effort.", marks: 1, markCode: "M" },
              { reasoning: "The spirit of CAS is regular, meaningful engagement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: activity should be regular and health-contributing, not minimal compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS activity requires sustained physical exertion for health, not token or one-off effort.",
            commonErrors: ["Treating minimal effort as sufficient engagement."],
          },
        },
        {
          id: "cas-u1-l11c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the three strands of CAS.",
          parts: [
            { label: "a", prompt: "Define each strand.", marks: 3 },
            { label: "b", prompt: "Give one example of each strand.", marks: 3 },
            { label: "c", prompt: "Evaluate how the strands can overlap.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS strands", statement: "Creativity, activity and service are distinct but can overlap in practice." },
            ],
            steps: [
              { part: "a", reasoning: "Creativity: original expression; Activity: physical exertion; Service: unpaid benefit to others.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correctly defined.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definitions accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Creativity example: composing music or performing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Activity example: playing sport or hiking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Service example: volunteering or tutoring.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strands can overlap: charity run = activity + service; community mural = creativity + service.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: overlap is encouraged but each strand still needs dedicated engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Creativity, activity, service defined. (b) Examples given. (c) Strands overlap but need balance.",
            commonErrors: ["Assuming activities must fit only one strand."],
          },
        },
        {
          id: "cas-u1-l11c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which activity best fits the service strand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing chess competitively" },
              { id: "b", text: "Volunteering unpaid at a community kitchen" },
              { id: "c", text: "Learning pottery" },
              { id: "d", text: "Running a 10k race" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Service", statement: "Unpaid collaborative work benefiting others and the community." },
            ],
            steps: [
              { reasoning: "Service requires unpaid work that benefits others.", marks: 1, markCode: "M" },
              { reasoning: "Community kitchen volunteering fits; the others are creativity or activity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Volunteering unpaid at a community kitchen",
            commonErrors: ["Confusing any helpful-sounding activity with unpaid service."],
          },
        },
        {
          id: "cas-u1-l11c1q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which statement best defines creativity in CAS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watching theatre performances" },
              { id: "b", text: "Buying art supplies" },
              { id: "c", text: "Expressing original ideas through art, craft or creative thinking" },
              { id: "d", text: "Attending art classes passively" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Creativity", statement: "Exploring and expressing original ideas through arts, crafts, performance or creative thinking." },
            ],
            steps: [
              { reasoning: "Creativity requires original expression, not passive consumption.", marks: 1, markCode: "M" },
              { reasoning: "Watching performances, buying supplies or attending passively does not create anything.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Expressing original ideas through art, craft or creative thinking",
            commonErrors: ["Treating engagement with art as the same as creating art."],
          },
        },
        {
          id: "cas-u1-l11c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reading a novel counts as creativity because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is enjoyable" },
              { id: "b", text: "It does not by itself — creativity requires original expression, not just consumption" },
              { id: "c", text: "It is an art form" },
              { id: "d", text: "It takes a long time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Creativity test", statement: "Creativity requires creating original work, not merely consuming it." },
            ],
            steps: [
              { reasoning: "Reading is consumption of someone else's creation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It does not by itself — creativity requires original expression",
            commonErrors: ["Counting passive consumption of art as creativity."],
          },
        },
        {
          id: "cas-u1-l11c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student organises a charity fun run. This activity can count toward:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activity only" },
              { id: "b", text: "Activity and service" },
              { id: "c", text: "Creativity only" },
              { id: "d", text: "Service only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand overlap", statement: "A physical event benefiting others genuinely spans activity and service." },
            ],
            steps: [
              { reasoning: "Participants exert physically and it raises money for others.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Activity and service",
            commonErrors: ["Assuming an activity can only ever count for one strand."],
          },
        },
        {
          id: "cas-u1-l11c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The strongest reason CAS requires all three strands is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The IB simply demands it" },
              { id: "b", text: "Each strand develops different attributes: imagination, health and empathy" },
              { id: "c", text: "To fill the timetable" },
              { id: "d", text: "It simplifies assessment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Holistic development", statement: "Creativity, activity and service develop complementary personal attributes." },
            ],
            steps: [
              { reasoning: "Each strand develops a distinct attribute for holistic growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each strand develops different attributes",
            commonErrors: ["Justifying balance administratively rather than developmentally."],
          },
        },
        {
          id: "cas-u1-l11c1q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT a creativity activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Composing a song" },
              { id: "b", text: "Writing a short story" },
              { id: "c", text: "Playing football" },
              { id: "d", text: "Designing a poster" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Creativity", statement: "Original expression through arts, crafts or creative thinking." },
            ],
            steps: [
              { reasoning: "Playing football is physical exertion, not creative expression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Playing football",
            commonErrors: ["Classifying sport as creativity."],
          },
        },
        {
          id: "cas-u1-l11c1q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the three key tests used to classify a CAS activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand tests", statement: "Creativity: original expression; activity: physical exertion; service: unpaid benefit to others." },
            ],
            steps: [
              { reasoning: "Creativity test: are you creating something original?", marks: 1, markCode: "M" },
              { reasoning: "Activity test: are you physically exerting yourself?", marks: 1, markCode: "M" },
              { reasoning: "Service test: are you doing unpaid work benefiting others?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test for original expression, physical exertion, or unpaid benefit to others.",
            commonErrors: ["Using enjoyment or attendance as the classification test."],
          },
        },
        {
          id: "cas-u1-l11c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student sets up stalls and serves food at a school fair, unpaid. Classify this activity and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity classification", statement: "Classify by the dominant strand criteria met through active participation." },
            ],
            steps: [
              { reasoning: "It is unpaid work benefiting the school community, so it meets the service test.", marks: 1, markCode: "M" },
              { reasoning: "Physical effort involved could add activity, but service is the primary strand.", marks: 1, markCode: "M" },
              { reasoning: "It is collaborative work for others, not original expression, so not primarily creativity.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: classify as service, noting possible minor activity overlap.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primarily service — unpaid collaborative work benefiting the school community.",
            commonErrors: ["Classifying by effort level rather than by strand criteria."],
          },
        },
        {
          id: "cas-u1-l11c1q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that consuming art — watching films, reading novels, visiting galleries — counts as creativity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Creation vs consumption", statement: "Creativity requires producing original work, not merely appreciating it." },
            ],
            steps: [
              { reasoning: "For: engagement with art can inspire and inform later creative work.", marks: 1, markCode: "M" },
              { reasoning: "Against: consumption involves no original expression by the student.", marks: 1, markCode: "M" },
              { reasoning: "The spirit of the creativity strand is creating, not just appreciating.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: consumption alone does not count, though it can support creative development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consuming art is not creativity — only creating original work counts.",
            commonErrors: ["Equating artistic appreciation with artistic creation."],
          },
        },
        {
          id: "cas-u1-l11c1q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how the three CAS strands can overlap.",
          parts: [
            { label: "a", prompt: "Explain how a single activity can count toward two strands.", marks: 2 },
            { label: "b", prompt: "Give two examples of strand-spanning activities.", marks: 2 },
            { label: "c", prompt: "Evaluate whether overlapping activities reduce the need for dedicated engagement in each strand.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand overlap", statement: "Activities can genuinely meet the criteria of two strands simultaneously." },
            ],
            steps: [
              { part: "a", reasoning: "A charity run combines physical exertion (activity) with unpaid community benefit (service).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both strand criteria are genuinely met through active participation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: a community mural — creativity plus service.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: coaching a children's sports team — activity plus service.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Overlapping activities are efficient but each strand still needs regular dedicated engagement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: overlap complements but does not replace balanced strand coverage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) One activity can meet two strand tests genuinely. (b) Community mural, coaching team. (c) Overlap complements, not replaces.",
            commonErrors: ["Assuming overlap means one activity can cover all requirements."],
          },
        },
        {
          id: "cas-u1-l11c1q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'unpaid' is essential to the definition of service.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Service criterion", statement: "Service must be voluntary, unpaid contribution benefiting others." },
            ],
            steps: [
              { reasoning: "Paid work is employment — it is compensated, not a voluntary contribution.", marks: 1, markCode: "M" },
              { reasoning: "Service is defined by giving time and effort freely for others' benefit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore unpaid status is a core criterion, not a detail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Service must be unpaid voluntary work — payment would make it employment.",
            commonErrors: ["Treating paid charity work as equivalent to service."],
          },
        },
        {
          id: "cas-u1-l11c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that a student who only plays competitive sport has fully met CAS requirements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand coverage", statement: "CAS requires regular engagement in all three strands, not just one." },
            ],
            steps: [
              { reasoning: "Competitive sport satisfies the activity strand well.", marks: 1, markCode: "M" },
              { reasoning: "Creativity and service remain unaddressed by sport alone.", marks: 1, markCode: "M" },
              { reasoning: "CAS explicitly requires engagement across all three strands.", marks: 1, markCode: "M" },
              { reasoning: "Balance supports holistic development beyond physical fitness.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: sport-only engagement is incomplete — creativity and service are still required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sport alone does not meet CAS — all three strands require regular engagement.",
            commonErrors: ["Assuming excellence in one strand compensates for others."],
          },
        },
        {
          id: "cas-u1-l11c1q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine what makes an activity genuinely 'creative' rather than merely enjoyable.",
          parts: [
            { label: "a", prompt: "Define original expression and explain why it matters for the creativity strand.", marks: 3 },
            { label: "b", prompt: "Distinguish creating from consuming with examples.", marks: 3 },
            { label: "c", prompt: "Evaluate borderline cases such as cooking an original recipe or organising an event.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Original expression", statement: "Creativity is defined by producing something original, not just enjoying art." },
            ],
            steps: [
              { part: "a", reasoning: "Original expression means producing work that is your own creation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It can take many forms: arts, crafts, performance, writing, design, coding.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Originality distinguishes creation from passive consumption.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Creating example: composing a piece of music or writing a poem.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consuming example: watching a film or reading a novel.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only the creating side counts toward the creativity strand.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Borderline cases are judged by the degree of genuine original contribution.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: an original recipe or creative event design can count if genuinely inventive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Original expression defines creativity. (b) Creating counts, consuming does not. (c) Borderline cases depend on genuine originality.",
            commonErrors: ["Judging borderline cases by enjoyment rather than originality."],
          },
        },
      ],
    },
    {
      id: "cas-u1-strand-examples",
      title: "Identifying strand-appropriate activities",
      skill: "Distinguish activities that genuinely fit each CAS strand from those that do not.",
      lesson: {
        sections: [
          {
            heading: "What counts and what doesn't",
            body: "Not everything is CAS. Watching others perform is not creativity; watching sport is not activity; paid work is not service. The key tests: creativity requires **original expression**, activity requires **physical exertion**, service requires **unpaid benefit to others**.",
          },
          {
            heading: "Edge cases",
            body: "Some activities span strands: a charity concert is creativity + service; a community sports day is activity + service; a design project for a charity is creativity + service. These count toward multiple strands but you still need regular engagement in each.",
          },
          {
            heading: "Depth over breadth",
            body: "CAS values sustained engagement over token participation. One term of weekly volunteering beats sporadic one-off events. Choose activities you can commit to regularly — depth of engagement matters more than variety.",
          },
        ],
        keyFormulas: [
          { name: "Strand tests", statement: "Creativity: original expression; Activity: physical exertion; Service: unpaid benefit" },
          { name: "Engagement rule", statement: "Sustained regular participation beats sporadic token effort" },
        ],
        workedExample: {
          problem: "Does attending a school play rehearsal count as creativity?",
          solution: "Only if you are performing, directing or contributing creatively. Merely attending or watching does not count — you must be actively creating, not just observing.",
        },
      },
      questions: [
        {
          id: "cas-u1-l11c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Watching a football match counts as CAS activity because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It involves sport" },
              { id: "b", text: "It does not — you must participate physically" },
              { id: "c", text: "It is outdoors" },
              { id: "d", text: "It is social" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activity requirement", statement: "CAS activity requires physical participation, not passive observation." },
            ],
            steps: [
              { reasoning: "Watching is not physical exertion — you must play.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It does not — you must participate physically",
            commonErrors: ["Counting passive observation as activity."],
          },
        },
        {
          id: "cas-u1-l11c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the tests for determining whether an activity fits a CAS strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand tests", statement: "Creativity: original expression; Activity: physical exertion; Service: unpaid benefit." },
            ],
            steps: [
              { reasoning: "Creativity test: are you creating something original?", marks: 1, markCode: "M" },
              { reasoning: "Activity test: are you physically exerting yourself?", marks: 1, markCode: "M" },
              { reasoning: "Service test: are you doing unpaid work benefiting others?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test for original expression, physical exertion, or unpaid benefit to others.",
            commonErrors: ["Assuming any involvement counts regardless of role."],
          },
        },
        {
          id: "cas-u1-l11c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that one activity can count toward multiple strands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand overlap", statement: "Activities can genuinely span strands but each strand needs dedicated engagement." },
            ],
            steps: [
              { reasoning: "For: charity runs combine activity and service; community murals combine creativity and service.", marks: 1, markCode: "M" },
              { reasoning: "Against: relying only on overlapping activities may neglect one strand.", marks: 1, markCode: "M" },
              { reasoning: "Each strand still needs regular, dedicated engagement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: overlap is encouraged but cannot replace balanced engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activities can span strands, but each strand still requires dedicated regular engagement.",
            commonErrors: ["Counting one activity for all three strands without genuine engagement."],
          },
        },
        {
          id: "cas-u1-l11c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to identify appropriate CAS activities.",
          parts: [
            { label: "a", prompt: "Explain the test for each strand.", marks: 3 },
            { label: "b", prompt: "Give two examples of activities spanning multiple strands.", marks: 2 },
            { label: "c", prompt: "Evaluate the importance of sustained engagement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity identification", statement: "Each strand has a test; engagement must be sustained." },
            ],
            steps: [
              { part: "a", reasoning: "Creativity: original expression; Activity: physical exertion; Service: unpaid benefit.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three tests explained.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tests clearly distinguished.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Charity run: activity + service.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Community mural: creativity + service.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CAS values sustained engagement over token participation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Regular participation builds skill, relationships and deeper learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: depth of engagement matters more than variety.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Original expression, physical exertion, unpaid benefit. (b) Charity run, community mural. (c) Sustained engagement essential.",
            commonErrors: ["Choosing activities for variety rather than sustained engagement."],
          },
        },
        {
          id: "cas-u1-l11c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Playing tennis weekly counts as CAS activity, but watching tennis on TV does not, because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tennis is a team sport" },
              { id: "b", text: "Activity requires physical participation, not passive observation" },
              { id: "c", text: "Watching TV is indoors" },
              { id: "d", text: "Weekly play is enough on its own" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activity requirement", statement: "CAS activity requires physical exertion through participation." },
            ],
            steps: [
              { reasoning: "Watching is passive observation; playing is physical exertion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Activity requires physical participation, not passive observation",
            commonErrors: ["Counting spectating as physical activity."],
          },
        },
        {
          id: "cas-u1-l11c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student attends every drama rehearsal but never performs, directs or contributes creatively. Does it count as creativity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — attendance shows commitment" },
              { id: "b", text: "No — you must actively create, not just observe" },
              { id: "c", text: "Yes — drama is a creative subject" },
              { id: "d", text: "Only if the student is paid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Active creation", statement: "Creativity requires actively producing original work, not mere attendance." },
            ],
            steps: [
              { reasoning: "Attending without contributing is observation, not creation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No — you must actively create, not just observe",
            commonErrors: ["Equating attendance at creative events with creating."],
          },
        },
        {
          id: "cas-u1-l11c2q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Paid work at a charity shop counts as CAS service because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It helps the community" },
              { id: "b", text: "It does not — service must be unpaid" },
              { id: "c", text: "It is done weekly" },
              { id: "d", text: "Charity shops are always service" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Service criterion", statement: "Service must be unpaid voluntary work benefiting others." },
            ],
            steps: [
              { reasoning: "Payment makes it employment, not service.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It does not — service must be unpaid",
            commonErrors: ["Ignoring the unpaid requirement of service."],
          },
        },
        {
          id: "cas-u1-l11c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an edge case that can genuinely span two CAS strands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solo jogging" },
              { id: "b", text: "Organising a charity concert" },
              { id: "c", text: "Reading a novel" },
              { id: "d", text: "Paying household bills" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Edge cases", statement: "Some activities meet the criteria of two strands simultaneously." },
            ],
            steps: [
              { reasoning: "A charity concert involves creative organisation plus unpaid community benefit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Organising a charity concert",
            commonErrors: ["Missing opportunities where one activity serves two strands."],
          },
        },
        {
          id: "cas-u1-l11c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The best test for whether an activity 'counts' in CAS is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether it is enjoyable" },
              { id: "b", text: "Whether it is regular" },
              { id: "c", text: "Whether it appears on a list of approved activities" },
              { id: "d", text: "Whether it genuinely meets the strand criteria through your active participation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting test", statement: "An activity counts when it meets strand criteria via genuine active participation." },
            ],
            steps: [
              { reasoning: "Enjoyment and regularity matter but do not define whether it counts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Whether it genuinely meets the strand criteria through active participation",
            commonErrors: ["Using enjoyment or frequency as the sole test."],
          },
        },
        {
          id: "cas-u1-l11c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Depth over breadth' in CAS means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doing as many activities as possible" },
              { id: "b", text: "Sustained regular engagement matters more than sporadic variety" },
              { id: "c", text: "Only doing one strand deeply" },
              { id: "d", text: "Avoiding all challenges" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depth over breadth", statement: "Sustained regular participation produces deeper learning than sporadic variety." },
            ],
            steps: [
              { reasoning: "CAS values sustained engagement over token participation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustained regular engagement matters more than sporadic variety",
            commonErrors: ["Confusing depth with focusing on only one strand."],
          },
        },
        {
          id: "cas-u1-l11c2q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why CAS values sustained engagement over token participation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustained engagement", statement: "Regular participation produces deeper learning than sporadic token effort." },
            ],
            steps: [
              { reasoning: "Token participation gives little opportunity for skill or relationship development.", marks: 1, markCode: "M" },
              { reasoning: "Sustained engagement builds skill, connections and richer reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore depth of engagement is what CAS rewards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sustained engagement builds skills, relationships and deeper learning that token participation cannot.",
            commonErrors: ["Treating any participation as equally valuable."],
          },
        },
        {
          id: "cas-u1-l11c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate whether sporadic one-off volunteering can satisfy the service strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular engagement", statement: "Service requires regular, sustained commitment rather than isolated events." },
            ],
            steps: [
              { reasoning: "Service requires regular engagement over time to be meaningful.", marks: 1, markCode: "M" },
              { reasoning: "One-off events are tokenistic and prevent relationship building.", marks: 1, markCode: "M" },
              { reasoning: "Sustained volunteering allows genuine understanding of community needs.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: one-off events alone are insufficient, though they can complement regular volunteering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sporadic one-off volunteering is insufficient — service needs sustained regular commitment.",
            commonErrors: ["Counting isolated events toward sustained engagement."],
          },
        },
        {
          id: "cas-u1-l11c2q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims any unpaid task, however trivial, is service. Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meaningful service", statement: "Service must be genuine collaborative work benefiting others, not token busywork." },
            ],
            steps: [
              { reasoning: "Being unpaid and benefiting others are necessary conditions for service.", marks: 1, markCode: "M" },
              { reasoning: "But the work must be meaningful and genuinely helpful, not trivial busywork.", marks: 1, markCode: "M" },
              { reasoning: "The spirit of service is meaningful contribution, not checking a box.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: trivial unpaid tasks do not constitute genuine service.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not every unpaid task is service — it must be meaningful work genuinely benefiting others.",
            commonErrors: ["Treating any unpaid task as automatically qualifying."],
          },
        },
        {
          id: "cas-u1-l11c2q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine edge cases where activities span multiple CAS strands.",
          parts: [
            { label: "a", prompt: "Explain what an overlapping CAS activity is.", marks: 2 },
            { label: "b", prompt: "Give two examples of strand-spanning activities.", marks: 2 },
            { label: "c", prompt: "Evaluate why each strand still needs dedicated engagement even when activities overlap.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand overlap", statement: "Some activities genuinely meet the criteria of two strands at once." },
            ],
            steps: [
              { part: "a", reasoning: "An overlapping activity meets the test criteria of two strands simultaneously.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example logic: physical effort plus community benefit.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: charity fun run — activity plus service.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: community mural — creativity plus service.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each strand requires regular engagement regardless of overlap.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: overlapping activities complement but cannot replace dedicated strand work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Activities meeting two strand tests. (b) Charity run, community mural. (c) Overlap does not replace dedicated engagement.",
            commonErrors: ["Counting one overlapping activity as full coverage of two strands."],
          },
        },
        {
          id: "cas-u1-l11c2q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why watching sport does not count as CAS activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activity requirement", statement: "Activity requires physical exertion through participation." },
            ],
            steps: [
              { reasoning: "Watching sport is passive observation, not physical exertion.", marks: 1, markCode: "M" },
              { reasoning: "You must play, not just watch, to meet the activity strand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore spectating does not count toward activity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activity requires physical participation — watching is not exertion.",
            commonErrors: ["Counting spectating as physical activity."],
          },
        },
        {
          id: "cas-u1-l11c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that variety of CAS activities matters more than depth of engagement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depth vs variety", statement: "Sustained engagement produces deeper learning than collecting many activities." },
            ],
            steps: [
              { reasoning: "Variety can expose students to different experiences and strands.", marks: 1, markCode: "M" },
              { reasoning: "But shallow variety risks token participation with little learning.", marks: 1, markCode: "M" },
              { reasoning: "Depth builds skills, relationships and capacity for reflection.", marks: 1, markCode: "M" },
              { reasoning: "CAS explicitly values sustained engagement over sporadic variety.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: depth matters more, though some variety across strands is still needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Depth of engagement is more valuable than variety — sustained participation produces real learning.",
            commonErrors: ["Valuing quantity of activities over quality of engagement."],
          },
        },
        {
          id: "cas-u1-l11c2q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to determine whether your activities genuinely count toward CAS strands.",
          parts: [
            { label: "a", prompt: "Describe the criteria that determine whether an activity counts for a strand.", marks: 3 },
            { label: "b", prompt: "Give two examples of activities that do NOT count and explain why.", marks: 3 },
            { label: "c", prompt: "Evaluate how to audit your own activities against these criteria.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity criteria", statement: "Counting requires meeting strand tests through active, genuine participation." },
            ],
            steps: [
              { part: "a", reasoning: "Creativity: original expression; activity: physical exertion; service: unpaid benefit.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Passive observation, consumption and paid work do not qualify.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Active participation through your own effort is essential.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: watching a sports match — no physical participation, so not activity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: paid work at a charity shop — paid, so not service.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both fail because they lack the required active or unpaid element.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Review each activity honestly against the three strand tests.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: honest self-audit reveals gaps needing new commitments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strand tests plus active participation. (b) Spectating and paid work fail. (c) Audit honestly against criteria.",
            commonErrors: ["Overestimating which activities qualify."],
          },
        },
      ],
    },
  ],
};
